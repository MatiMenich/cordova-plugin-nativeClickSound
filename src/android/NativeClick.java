package com.matimenich.plugins.nativeclick;

import android.view.View;
import android.view.SoundEffectConstants;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaArgs;
import org.apache.cordova.CallbackContext;
import org.json.JSONArray;
import org.json.JSONException;

public class NativeClick extends CordovaPlugin {

    @Override
    public boolean execute(String action, JSONArray args, final CallbackContext callbackContext) throws JSONException {
        if("click".equals(action)) {
            cordova.getActivity().runOnUiThread(new Runnable(){
                public void run(){
                    View view = cordova.getActivity().getWindow().getDecorView();
                    view.playSoundEffect(SoundEffectConstants.CLICK);
                }
            });

            return true;
        }
 
        return false;
    }
}

