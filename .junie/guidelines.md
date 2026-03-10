# Junie Guidelines — OliveWorld Task Checklist Workflow

## Purpose

This file contains concise instructions for working with the OliveWorld development task list located in `docs/tasks.md`. All contributors (human or AI) must follow these guidelines to keep progress tracking accurate and consistent.

---

## Working with `docs/tasks.md`

### 1. Marking Tasks as Complete

When a task has been fully implemented, tested and verified, change its checkbox from `[ ]` to `[x]`:

```markdown
<!-- Before -->
| 16 | [ ] Create `src/components/layout/Navbar.tsx` ... | B1, B3 | REQ-1 |

<!-- After -->
| 16 | [x] Create `src/components/layout/Navbar.tsx` ... | B1, B3 | REQ-1 |
```

**Do not** mark a task complete until:
- The code has been written and saved.
- The component renders correctly without errors.
- All acceptance criteria from the linked requirement(s) in `docs/requirements.md` are satisfied.

---

### 2. Keeping Phases Intact

- **Do not** reorder, remove or merge existing development phases.
- **Do not** renumber existing task IDs — this preserves referential integrity.
- If a phase is fully complete, you may add a `✅ Complete` annotation beside the phase heading, but keep all task rows visible.

---

### 3. Adding New Tasks

When new work is identified that is not covered by an existing task:

1. Append the new task at the **end of the most relevant phase** (do not insert between existing tasks).
2. Assign the next sequential task number (continue from the last existing ID).
3. Every new task **must include**:
   - A clear description of the work.
   - A reference to the relevant plan item in `docs/plan.md` (e.g., `E2`, `H3`). If the plan does not yet contain the corresponding item, **add it to `docs/plan.md` first**.
   - A reference to the relevant requirement(s) in `docs/requirements.md` (e.g., `REQ-5`). If no requirement exists, **add it to `docs/requirements.md` first**.

Example new task row:
```markdown
| 57 | [ ] Add property map view using leaflet | F4 | REQ-6 |
```

---

### 4. Linking Tasks to Requirements and Plan Items

All tasks must be traceable:

| Field | Location | Example |
|-------|----------|---------|
| Plan Ref | `docs/plan.md` — Group and item ID | `E2`, `H3` |
| Requirements Ref | `docs/requirements.md` — Requirement number | `REQ-5`, `REQ-7` |

If a change impacts multiple requirements, list all (comma-separated): `REQ-4, REQ-5`.

---

### 5. Formatting Consistency

- Keep all columns aligned in the Markdown table.
- Use backticks for file paths and component names: `` `src/components/layout/Navbar.tsx` ``
- Use `REQ-N` format for requirement references.
- Use uppercase letter + number for plan references: `A1`, `B3`, `H5`.
- Task descriptions should be imperative: "Create ...", "Implement ...", "Add ...", "Wire ...".

---

### 6. Review Before Closing a Phase

Before marking a phase as complete, verify:

- [ ] All tasks within the phase are marked `[x]`.
- [ ] All linked acceptance criteria in `docs/requirements.md` are satisfied.
- [ ] No related tasks are deferred to another phase without a new task entry capturing that deferral.

---

## File Reference Map

| File | Purpose |
|------|---------|
| `docs/requirements.md` | User stories and acceptance criteria |
| `docs/plan.md` | Prioritised implementation plan |
| `docs/tasks.md` | Phased enumerated task checklist |
| `.junie/guidelines.md` | This file — workflow instructions |
