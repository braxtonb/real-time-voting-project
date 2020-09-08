# https://stackoverflow.com/a/33178233
# https://clontz.org/blog/2014/05/08/git-subtree-push-for-deployment/
git push heroku `git subtree split --prefix real-time-voting-api master`:master --force