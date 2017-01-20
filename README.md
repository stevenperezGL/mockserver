# mockserver
This repo was created in order to manage mock server requests

# Include the two remotes for pull and push

1. Go to your repository root.
```
mock-server-one git:(master) $
```

2. Check that you are having just Heroku remotes.
```
$ git remote -v
heroku	https://git.heroku.com/mock-server-one.git (fetch)
heroku	https://git.heroku.com/mock-server-one.git (push)
```
Otherwise, remove the extra remote reference.
```
$ git remote remove [remote name]
```
3. Run these commands one by one:
```
$ git remote add all https://github.com/stevenperezGL/mockserver.git
$ git config -l | grep '^remote\.all'
$ git remote set-url --add --push all https://git.heroku.com/mock-server-one.git
$ git config -l | grep '^remote\.all'
$ git remote set-url --add --push all https://github.com/stevenperezGL/mockserver.git
$ git config -l | grep '^remote\.all'
```

4. Check that you have this list of remotes:
```
$ git remote -v
all    https://github.com/stevenperezGL/mockserver.git (fetch)
all    https://git.heroku.com/mock-server-one.git (push)
all    https://github.com/stevenperezGL/mockserver.git (push)
heroku    https://git.heroku.com/mock-server-one.git (fetch)
heroku    https://git.heroku.com/mock-server-one.git (push)
```
5. Now you can push and pull to all remotes
```$ git push all master``` and ```$ git pull all master```
