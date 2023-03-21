version=$1
message=$2
# edit autoload.js
sed -i "s/v[0-9].[0-9].[0-9]/v$version/g" autoload.js
# edit index.html
sed -i "s/v[0-9].[0-9].[0-9]/v$version/g" README.md
# edit README.md
sed -i "s/v[0-9].[0-9].[0-9]/v$version/g" index.html
git add . && git commit -m "$message" && \
git tag -a $version -m "v$version: $message" && \
git push && git push origin v$version