package com.myrnproject;

import androidx.annotation.NonNull;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

//package 可以包含多个原生模块,以及自定义UI组件
public class MCRNStoragePackge implements ReactPackage {

    @NonNull
    @Override
    public List<NativeModule> createNativeModules(@NonNull ReactApplicationContext reactContext) {

        List<NativeModule> list = new ArrayList<>();
        //将原生模块实例化,放入数组
        list.add(new MCRNStorageModule(reactContext));
        list.add(new MCReactJavaEventEmitterModule(reactContext, reactContext));
        return list;
    }

    @NonNull
    @Override
    //声明自定义UI组件,同样放入数组
    public List<ViewManager> createViewManagers(@NonNull ReactApplicationContext reactContext) {

        return Collections.EMPTY_LIST;
    }
}
