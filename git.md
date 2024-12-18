# auth
```
git config --global user.email "zl.sheepcity@gmail.com"
git config --global user.name "zlsheepcity"
git config credential.helper store
git config --list
```

# steps back
```
git commit -m "WRONG message"
git reset --soft HEAD~1
git commit -m "correct message"

// creates a new commit to negate the changes made by the specified commit
git revert <commit-hash>

// To stash changes:
git stash
// Later, when you want to reapply those changes:
git stash pop


// previous commits step by step
git reset --soft HEAD~1

// reset single file
git checkout HEAD -- package-lock.json
```

## THE SAVEPOINT PATTERN
```
git branch savepoint

// Now, if you type git status again, you should still see a message that you're on the master branch.
git merge spiffy_new_feature

// If you want to abort the merge at this point, just type:
git reset --hard

// If YES: Delete the savepoint:
git branch -d savepoint

// If NO: Reset your branch to the savepoint:
git reset --hard savepoint

// If you want to clean up, you can now delete the savepoint with:
git branch -d savepoint
```

## 10 Git commands become lifesavers

### git reflog
Ever made a mistake so bad you wished you could turn back time? git reflog is the time machine you didn’t know you had.

What it does:
It tracks every single thing you’ve done in your repository—even commits you thought were lost.

When to use:

You accidentally deleted a branch.
You need to recover a commit after a bad reset.
Command:
git reflog

### git cherry-pick
Imagine this: there’s one perfect commit on another branch, and you need it now without merging the entire branch. That’s where git cherry-pick comes in.

What it does:
It lets you pick specific commits from one branch and apply them to another.

When to use:

You want a bug fix from feature-branch in main without merging the entire branch.
Command:
git cherry-pick <commit-hash>

