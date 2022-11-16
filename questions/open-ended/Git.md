What is the difference between a soft, mixed, and hard reset?
>A soft reset keeps local files and stages all changes back automatically
>A hard reset removes all changes including local files
>A mixed reset keeps local files and UNSTAGES all changes

What is the difference between log and reflog?
>A git log is the public commit history, reflog is private, workspace-specific local commits
>If reset to old commit, wrong rebase (visually missing commits), reflog can can be used as undo history for git reset

What is cherry picking?

What is branch rebasing, how does it differ from merging?
>Moving or combining sequence of commits to a new base commit, usually rebase new master commits to feature branch
>Merging adds new commit to history when combining branches, preserving all history
>Rebasing pretends branch diverged later, maintains linear history

What is commit squashing?
>Using interactive git rebase to combine commits, i.e. `git rebase -i HEAD~3`

What is merge squashing?
>Pulling in branch changes as local, uncommitted in working copy that can be committed as a single commit.
>i.e. `git merge --squash feature/login`

What does commit reverting do?
