# Skills available to the design hierarchy

Use frontend-design as the single art-direction system and frontend-workflow for execution. Their local copies are available even if a skill URI is not resolved:

| Role | Skill URI | Local fallback |
|---|---|---|
| All design and implementation roles | `skill://frontend-design` | `/home/prateek/.agents/skills/frontend-design/SKILL.md` |
| All design and implementation roles | `skill://frontend-workflow` | `/home/prateek/.agents/skills/frontend-workflow/SKILL.md` |
| Designers and art director | `skill://reference-study` | `/home/prateek/.omp/agent/managed-skills/reference-study/SKILL.md` |
| Validators, supervisors, art director | `skill://visual-critique` | `/home/prateek/.omp/agent/managed-skills/visual-critique/SKILL.md` |
| Validators and integration lead | `skill://review-skill` | `/home/prateek/.omp/agent/managed-skills/review-skill/SKILL.md` |

Agent frontmatter autoloads its relevant subset. The main agent reads the design and workflow skills explicitly. Check the actual injected content or read receipt rather than assuming an unknown skill name was loaded. Use the native OMP browser. The directory's optional designer-master mode is not enabled.
