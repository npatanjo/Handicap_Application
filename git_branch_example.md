___
### HOW TO USE BRANCHES  


main > `git checkout -b some-new-branch`                  # create a new branch named some-new-branch  

some-new-branch >  

... stuff your doing ...  

some-new-branch >  `git add .`  
some-new-branch >  `git commit -m "Added new feature to some-new-branch"`  
some-new-branch >  `git push origin some-new-branch`       # Push to remote some-new-branch  
some-new-branch >  `git checkout master`                    # Switch back to master  
some-new-branch >  `git merge some-new-branch`              # Merge some-new-branch into master  
  
  
___
### HOW TO ADD TO PREVIOUS COMMIT WITHOUT CREATING A NEW COMMIT  

`git add .`  
`git commit --amend --no-edit`  
`git push --force-with-lease`  


___




