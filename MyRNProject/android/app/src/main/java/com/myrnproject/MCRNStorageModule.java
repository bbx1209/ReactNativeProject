package com.myrnproject;

import android.util.Log;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.annotation.RequiresApi;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.uimanager.ViewManager;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

//自定义原生模块
public class MCRNStorageModule extends ReactContextBaseJavaModule {

    private static final String TAG = "MCRNStorageModule";

    public MCRNStorageModule(@Nullable ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @NonNull
    @Override
    public String getName() {
        return "MCRNStorage";
    }

    @Nullable
    @Override
    //常量
    public Map<String, Object> getConstants() {

        Map<String, Object> constants = new HashMap<>();
        constants.put("Const1", "form android const1");
        constants.put("Const2", "from android const2");
        return constants;

    }
    //  注解 原生方法
    @ReactMethod
    public void  nativeDoSth() {
        Toast.makeText(getCurrentActivity(), "android do sth", Toast.LENGTH_SHORT).show();
    }
    @ReactMethod
    public void nativeDoSth(String argue1 , String argue2) {
        Toast.makeText(getCurrentActivity(), argue1 + argue2, Toast.LENGTH_SHORT).show();
    }

    @ReactMethod
    public void queryCallback(String url, Callback callback) {
        Log.e(TAG, "query: " + url);
        callback.invoke(null, url);

    }
    @ReactMethod
    public void query(String url , Promise promise) {
        Log.e(TAG, "query promise: "+ url );
        if (promise != null) {
            promise.resolve(url);
        }
    }
}

