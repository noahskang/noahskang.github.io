# One-time setup — auto-publish the weekly Rx Board

This installs a small background agent that watches `pharmacy-jobs.html` and
automatically commits + pushes it to GitHub whenever it changes (and hourly as a
safety net). It uses your existing GitHub sign-in — **no passwords or tokens are
stored anywhere in here.**

## Install (run once)

Open **Terminal** and paste this single line:

```bash
cp ~/Documents/noahskang.github.io/.automation/com.noahskang.pharmacyjobs-autopush.plist ~/Library/LaunchAgents/ && launchctl unload ~/Library/LaunchAgents/com.noahskang.pharmacyjobs-autopush.plist 2>/dev/null; launchctl load ~/Library/LaunchAgents/com.noahskang.pharmacyjobs-autopush.plist && echo "✅ Auto-push installed"
```

That's it. From now on, every weekly refresh publishes itself.

## Prerequisite (you almost certainly already have this)

The agent pushes with your saved GitHub credentials. If you've pushed to this repo
from this Mac before, you're set. To confirm, run once:

```bash
cd ~/Documents/noahskang.github.io && git push
```

If it succeeds without asking for a password, the agent will too. If it prompts,
sign in once (GitHub will cache it in your keychain) and you're done.

## Check it's working

Logs land here:

```bash
cat ~/Library/Logs/pharmacyjobs-autopush.log
```

## Uninstall

```bash
launchctl unload ~/Library/LaunchAgents/com.noahskang.pharmacyjobs-autopush.plist && rm ~/Library/LaunchAgents/com.noahskang.pharmacyjobs-autopush.plist
```
