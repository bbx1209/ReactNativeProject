#!/bin/bash

set -e

# 基本变量
SCRIPT_DIR="$(cd `dirname $0`; pwd)"
cd ${SCRIPT_DIR}


#配置的MyRNProject的配置
appId="xxxxxx"
versionName="1.0"
#MARK:--- 上传连接 ----
uploadUrl=""

#bundle Id
bundle_id="MyRNProject"

#appName
app_name="com.buxiangbo.app"

#workspace
work_space="MyRNProject.xcworkspace"

#scheme
scheme="MyRNProject"

upload_pack_name="xgpre push"

# URL配置
BUILD_URLConfig="1"

#xocdebuild
XCODE_BUILD="xcodebuild -workspace ${work_space} -scheme ${scheme} -configuration Release"
XCODE_CLEAN="xcodebuild -workspace ${work_space} -scheme ${scheme} -configuration Release clean"
XCODE_ARCHIVE="xcodebuild archive -workspace ${work_space} -scheme ${scheme} -configuration Release"

#工程绝对路径
project_path=$(pwd)
echo "======工程路径：${project_path}======"

#创建保存打包结果的目录
result_path=${project_path}/build/build_test_$(date +%Y-%m-%d_%H_%M)
mkdir -p "${result_path}"
echo "======最终打包路径：${result_path}======"

#工程配置文件路径
project_name=$(ls | grep xcodeproj | awk -F.xcodeproj '{print $1}')
echo "======工程文件名称：${project_name}======"

target_name=${project_name}
echo "======target名称：${target_name}======"


#编译配置打印到文件中
setting_out=${result_path}/build_setting.txt
${XCODE_BUILD}  -showBuildSettings > ${setting_out}




# MARK: -----检查参数----
#检查是否含-u参数，包含即上传
needUpload=false
pre_should=false
sit_should=false
xgpre_should=false
prd_should=false

if [[ $# -gt 0 ]]; then
    for arg in "$@"
    do
        if [[ $arg = "-u" ]]; then
            needUpload=true
        elif [[ $arg = "-pre" ]]; then
            pre_should=true
            BUILD_URLConfig="1"
            upload_pack_name=" pre push"
        elif [[ $arg = "-xgpre" ]]; then
            xgpre_should=true
            BUILD_URLConfig="3"
            upload_pack_name=" xgPre push"
        elif [[ $arg = "-sit" ]]; then
            sit_should=true
            BUILD_URLConfig="2"
            upload_pack_name=" sit push"
        elif [[ $arg = "-prd" ]]; then
            prd_should=true
            BUILD_URLConfig="0"
            upload_pack_name=" prd push"
        fi
    done
fi


### 先clean一下
${XCODE_CLEAN}

### 开始打包工程
xcarchive_path=$result_path/${scheme}.xcarchive
${XCODE_ARCHIVE} -archivePath $xcarchive_path

## 开始导出ipa包
ipa_path=${result_path}/${bundle_id}

#ipa名称
upload_ipa_name="${ipa_path}/${app_name}.ipa"

if ${needUpload}; then
    dateString=`date '+%Y-%m-%d %H:%M:%S'`
    echo "${dateString}:上传测试包"
    echo "${dateString}:curl \
        -F 'appId=${appId}' \
        -F 'versionName=${versionName}' \
        -F 'bundleId=${bundle_id}' \
        -F 'ipaDesc=${upload_pack_name}' \
        -F 'ipaFile=@${upload_ipa_name}' \
        ${uploadUrl}"
    curl \
        -F "appId=${appId}" \
        -F "versionName=${versionName}" \
        -F "bundleId=${bundle_id}" \
        -F "ipaDesc=${upload_pack_name}" \
        -F "ipaFile=@${upload_ipa_name}" \
        ${uploadUrl}
    echo ""
fi

