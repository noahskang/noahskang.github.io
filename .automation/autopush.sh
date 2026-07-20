#!/bin/bash
# Auto-publishes changes in the portfolio repo — used to push the weekly
# "Rx Board" (pharmacy-jobs.html) to GitHub Pages with no manual steps.
# Uses your existing git/keychain credentials. No secrets are stored here.

REPO="/Users/noahkang/Documents/noahskang.github.io"
LOG="$HOME/Library/Logs/pharmacyjobs-autopush.log"
export PATH="/usr/local/bin:/opt/homebrew/bin:/usr/bin:/bin:$PATH"

cd "$REPO" || { echo "[$(date)] repo not found" >> "$LOG"; exit 1; }

# If another git operation is in progress (manual commit, editor, or a prior
# run), stand down rather than fight over the lock.
if [ -f "$REPO/.git/index.lock" ]; then
  echo "[$(date)] git busy (index.lock present) — skipping this run" >> "$LOG"
  exit 0
fi

# Only ever publish the job board (plus its automation files) — never touch
# other in-progress edits in the repo.
git add pharmacy-jobs.html .automation >/dev/null 2>&1
# Nothing staged? Nothing to publish.
if git diff --cached --quiet; then
  exit 0
fi

echo "[$(date)] change detected — publishing" >> "$LOG"
git commit -m "Auto: pharmacy jobs update $(date +%Y-%m-%d)" >> "$LOG" 2>&1
git push origin master >> "$LOG" 2>&1
echo "[$(date)] push finished (exit $?)" >> "$LOG"
