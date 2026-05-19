# claude-essentials-for-engineers

Demo repo for **Stop Using Claude Like Autocomplete** — a 45-minute live session on running Claude as a background worker, not a chat partner.

## Before the session

You'll need:
- [Node.js](https://nodejs.org) 18+
- [Claude Code](https://claude.ai/code) installed and authenticated
- Git 2.28+

Clone and install:

```bash
git clone https://github.com/warlordwinter/claude-essentials-for-engineers.git
cd claude-essentials-for-engineers
npm install
```

Confirm tests run (one will fail — that's intentional):

```bash
npm test
```

That's it. No other setup needed before we start.

---

## What's in here

```
CLAUDE.md                        # project context file — first demo
.claude/skills/write-tests.md    # reusable skill — third demo
src/
  api/users.js                   # user CRUD module
  utils/helpers.js               # shared helpers (has a bug — we'll find it live)
  tests/helpers.test.js          # partial test suite
scripts/
  setup-worktrees.sh             # sets up parallel git worktrees — second demo
  notify.js                      # async completion notification — fourth demo
```

---

## What we'll build live

| # | Demo | What you'll set up |
|---|------|--------------------|
| 1 | CLAUDE.md | Give Claude instant codebase context |
| 2 | Git worktrees | Run two Claude agents in parallel, no branch conflicts |
| 3 | Skills | Consistent, production-quality output on repeat tasks |
| 4 | Async notifications | Get pinged when Claude finishes — stop watching progress bars |

---

## Running the demos yourself after the session

**Worktrees (parallel agents):**
```bash
chmod +x scripts/setup-worktrees.sh
./scripts/setup-worktrees.sh
# Then open two terminal splits:
# Split 1: cd ../claude-essentials-fix && claude
# Split 2: cd ../claude-essentials-tests && claude
```

**Notification hook:**
```bash
# Test it directly:
node scripts/notify.js "task complete"

# Wire into Claude Code hooks (settings.json):
# "PostTaskCompletion": "node /path/to/scripts/notify.js \"$TASK_SUMMARY\""
```

---

## Suggested prompts from the session

**CLAUDE.md demo:**
```
Where's the pagination logic and does it have any issues?
```

**Skills demo:**
```
Complete the missing tests in helpers.test.js. Follow the write-tests skill.
```

**Worktrees demo (run in each split):**
```
# Split 1 (fix branch):
Find and fix the bug in paginate(). Run the tests to confirm.

# Split 2 (tests branch):
Complete the missing tests in helpers.test.js. Follow the write-tests skill.
```

---

## Questions?

Find me on [Leland](https://www.leland.com) or open an issue in this repo.
