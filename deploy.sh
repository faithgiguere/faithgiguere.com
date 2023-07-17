aws s3 sync ./ s3://faithmayer.com/ --delete --exclude "venv*" --exclude ".git*" --acl public-read
