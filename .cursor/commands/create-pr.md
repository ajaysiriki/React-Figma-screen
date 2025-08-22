# Command: Create Pull Request

## Description
This command stages all current changes, creates a commit, and pushes the branch to GitHub to create a pull request against the `main` branch.

## Argument
$arguments: The commit message for the changes.

## Instructions
You are an expert at Git. Follow these steps precisely:
1. Run `git add .` to stage all changes.
2. Run `git commit -m "$arguments"`. Use the argument I provide as the commit message.
3. Run `git push --set-upstream origin HEAD`.
4. Confirm that the branch has been pushed successfully.