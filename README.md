# Git Notes

This document summarizes the key concepts and commands for Git. Use this as a quick reference guide for learning and reviewing Git commands.

---

## 📚 Table of Contents
1. [Git Started](#git-started)
2. [Remote](#remote)
3. [Collaboration](#collaboration)
4. [Advanced](#advanced)
5. [GitHub Actions](#github-actions)
6. [Git Tips](#git-tips)

---

## 🟢 Git Started
### What is Git?
- **Git** is a distributed version control system designed to handle projects of all sizes with speed and efficiency.

### Install Git
- Download and install Git from [git-scm.com](https://git-scm.com/).

### Commands:
- **`git init`**: Initializes a new Git repository in the current directory.
- **`git status`**: Shows the working tree status.
- **`.gitignore`**: Specifies intentionally untracked files to ignore.
- **`git add <file>`**: Adds a file to the staging area.
- **`git reset`**: Unstages files without deleting the changes.
- **`git commit -m "message"`**: Commits the staged changes with a message.
- **`git commit -a -m "message"`**: Stages and commits all tracked changes with a message.

---

## 🔵 Remote
### Commands:
- **`git remote`**: Lists remote repositories.
- **`git remote add origin <url>`**: Adds a remote repository.
- **`git remote -v`**: Shows the URLs of the remotes.
- **`git remote show origin`**: Displays detailed information about the remote.
- **`git push origin <branch> -u`**: Pushes a branch to the remote repository and sets it as upstream.
- **`git fetch`**: Fetches changes from the remote repository without merging.
- **`git merge`**: Merges fetched changes into the current branch.
- **`git pull`**: Fetches and merges changes from the remote repository.
- **`git clone <url>`**: Clones a repository.

---

## 🟠 Collaboration
### What is Branching?
- Branching allows you to work on different features or fixes independently.

### Commands:
- **`git branch`**: Lists branches.
- **`git branch <name>`**: Creates a new branch.
- **`git branch -d <name>`**: Deletes a branch.
- **`git branch -D <name>`**: Force deletes a branch.
- **`git checkout <branch>`**: Switches to a branch.
- **`git checkout -`**: Switches to the previous branch.
- **Merge Conflicts**: Occur when Git cannot automatically merge changes.
  - **`git diff`**: Shows differences between files or commits.
  - **`git merge --abort`**: Cancels a merge and reverts to the previous state.

### GitHub Collaboration:
- **Fork**: A personal copy of someone else's repository.
- **Pull Request**: Suggests changes to the original repository.

---

## 🟣 Advanced
### Concepts:
- **Working Directory**: The files you're currently working on.
- **Staging Area**: Files prepared for a commit.
- **Commits**: Saved changes.

### Commands:
- **`git reset`**: Resets the staging area or branch.
- **`git reset --soft HEAD~`**: Moves the HEAD pointer back without changing the working directory.
- **`git reset --hard HEAD~`**: Moves the HEAD pointer back and resets the working directory.
- **`git revert <commit-id>`**: Creates a new commit to undo changes from a previous commit.
- **`git commit --amend -m "better message"`**: Modifies the last commit message.
- **`git stash save <name>`**: Saves changes temporarily.
- **`git stash pop`**: Applies stashed changes and removes them from the stash.
- **`git stash list`**: Lists all stashed changes.
- **`git rebase master`**: Reapplies commits on top of another branch.
- **`git rebase master --interactive`**: Interactive rebase to squash commits.

---

## 🟡 GitHub Actions
### Overview:
- **Continuous Integration (CI)**:
  - Example: Run automated tests when new code is pushed.
- **Continuous Deployment (CD)**:
  - Example: Automatically deploy code after tests pass.

---

## 🔥 Git Tips
### Commands:
- **`git commit -am "message"`**: Adds and commits changes in one command.
- **Aliases**: Shortcuts for frequently used commands.
- **`git push origin master --force`**: Force pushes changes to the remote repository.
- **`git log --graph --oneline --decorate`**: Displays a decorated commit history.
- **`git bisect`**: Finds the commit that introduced a bug.

---

**Happy Coding!** 🚀
