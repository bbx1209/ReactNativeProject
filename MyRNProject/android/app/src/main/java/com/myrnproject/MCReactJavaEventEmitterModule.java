package com.myrnproject;

import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactBridge;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableArray;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

import java.util.HashMap;
import java.util.Map;

public class MCReactJavaEventEmitterModule extends ReactContextBaseJavaModule {

    private ReactApplicationContext reactApplicationContext;

    public MCReactJavaEventEmitterModule(@Nullable ReactApplicationContext reactContext, ReactApplicationContext reactApplicationContext) {
        super(reactContext);
        this.reactApplicationContext = reactApplicationContext;
    }

    @NonNull
    @Override
    public String getName() {
        return "MCRNEventEmitter";
    }

    @Nullable
    @Override
    public Map<String, Object> getConstants() {

        Map<String, Object> constants = new HashMap<>();
        constants.put("Const1", "from andorid const1");
        constants.put("Const2", "from andorid const2");

        return constants;
    }

    @ReactMethod
    public void sendMCEvent(String value) {
        Toast.makeText(getCurrentActivity(), "准备发送通知",Toast.LENGTH_SHORT).show();
        reactApplicationContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit("MCRNEventEmitter", value);
    }
}

