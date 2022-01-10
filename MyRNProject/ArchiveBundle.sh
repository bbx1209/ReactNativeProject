#! /bin/bash

#打 RN 资源包

path=$(pwd)

assetsFile=${path}/ios/assets

echo "${assetsFile}"

if [ -d "$assetsFile" ]; then
echo "${assetsFile} ###已经存在### "
rm -rf "$assetsFile"
fi

mkdir  ${assetsFile}


#打包命令

react-native bundle --entry-file index.js --bundle-output ./ios/assets/index.ios.bundle --platform ios --assets-dest ./ios/assets --dev false
