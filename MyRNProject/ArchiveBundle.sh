#! /bin/bash

#打 RN 资源包

path=$(pwd)

assetsFile=${path}/ios/assets

echo "${assetsFile}"

if [ -d "$assetsFile" ]; then
#强制删除目录以及下面的文件
rm -rf "$assetsFile"
fi

mkdir  ${assetsFile}


#打包命令

react-native bundle --entry-file index.js --bundle-output ./ios/assets/index.ios.jsbundle --platform ios --assets-dest ./ios/assets --dev false
