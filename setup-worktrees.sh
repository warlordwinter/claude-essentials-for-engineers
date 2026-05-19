#!/bin/bash
# setup-worktrees.sh — creates two worktrees for the parallel agents demo
#
# Run this once before the session:
#   chmod +x scripts/setup-worktrees.sh && ./scripts/setup-worktrees.sh
#
# What it creates:
#   ../leland-demo-fix/     → worktree on branch "fix/paginate-bug"
#   ../leland-demo-tests/   → worktree on branch "feat/expand-tests"
#
# Then open two terminal splits and run Claude Code in each directory.

set -e

REPO_ROOT=$(git rev-parse --show-toplevel)
PARENT=$(dirname "$REPO_ROOT")

echo "→ Creating branch: fix/paginate-bug"
git branch fix/paginate-bug main 2>/dev/null || echo "  (branch already exists, skipping)"
git worktree add "$PARENT/leland-demo-fix" fix/paginate-bug

echo "→ Creating branch: feat/expand-tests"
git branch feat/expand-tests main 2>/dev/null || echo "  (branch already exists, skipping)"
git worktree add "$PARENT/leland-demo-tests" feat/expand-tests

echo ""
echo "✓ Worktrees ready:"
git worktree list
echo ""
echo "Next steps:"
echo "  Split your terminal into two panes"
echo "  Pane 1: cd $PARENT/leland-demo-fix && claude"
echo "  Pane 2: cd $PARENT/leland-demo-tests && claude"
echo ""
echo "Suggested prompts:"
echo "  Pane 1: 'Find and fix the bug in paginate(). Run the tests to confirm.'"
echo "  Pane 2: 'Complete the missing tests in helpers.test.js. Follow the write-tests skill.'"
