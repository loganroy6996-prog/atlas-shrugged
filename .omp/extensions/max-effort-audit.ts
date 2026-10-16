import { appendFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// Project-local metadata only: never log prompts, credentials, or response text.
export default function maxEffortAudit(api: any) {
  const isMuse = (ctx: any) => ctx.model?.provider === "opencode-go" &&
    ctx.model?.id === "muse-spark-1.3-contributor";
  const record = (ctx: any, data: Record<string, unknown>) => {
    const directory = join(ctx.cwd, ".omp/design/evidence");
    mkdirSync(directory, { recursive: true });
    appendFileSync(join(directory, "runtime-effort.jsonl"), JSON.stringify({
      time: new Date().toISOString(),
      sessionId: ctx.sessionManager?.getSessionId?.(),
      model: ctx.model ? `${ctx.model.provider}/${ctx.model.id}` : undefined,
      configuredThinking: api.getThinkingLevel(),
      ...data,
    }) + "\n");
  };

  api.on("before_agent_start", (_event: any, ctx: any) => {
    if (isMuse(ctx) && api.getThinkingLevel() !== "max") api.setThinkingLevel("max");
    record(ctx, { event: "agent_start" });
  });

  api.on("before_provider_request", (event: any, ctx: any) => {
    const payload = event.payload;
    if (!isMuse(ctx) || !payload || typeof payload !== "object") return;
    const before = payload.reasoning?.effort;
    // The requested model advertises max. Preserve all other request fields.
    const finalPayload = before === "max" ? payload : {
      ...payload,
      reasoning: { ...payload.reasoning, effort: "max" },
    };
    record(ctx, {
      event: "provider_request",
      wireModel: payload.model,
      originalWireEffort: before ?? null,
      wireEffort: finalPayload.reasoning.effort,
      corrected: before !== "max",
    });
    if (before !== "max") return finalPayload;
  });
}
