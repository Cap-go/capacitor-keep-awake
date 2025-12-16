package ee.forgr.plugin.capacitor_keep_awake;

import android.view.WindowManager;
import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "CapacitorKeepAwake")
public class CapacitorKeepAwakePlugin extends Plugin {

    private final String pluginVersion = "8.1.2";
    private boolean isKeptAwake = false;

    @PluginMethod
    public void keepAwake(PluginCall call) {
        getActivity().runOnUiThread(() -> {
            try {
                getActivity().getWindow().addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
                isKeptAwake = true;
                call.resolve();
            } catch (Exception e) {
                call.reject("Failed to enable keep awake", e);
            }
        });
    }

    @PluginMethod
    public void allowSleep(PluginCall call) {
        getActivity().runOnUiThread(() -> {
            try {
                getActivity().getWindow().clearFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
                isKeptAwake = false;
                call.resolve();
            } catch (Exception e) {
                call.reject("Failed to disable keep awake", e);
            }
        });
    }

    @PluginMethod
    public void isSupported(PluginCall call) {
        JSObject ret = new JSObject();
        ret.put("isSupported", true);
        call.resolve(ret);
    }

    @PluginMethod
    public void isKeptAwake(PluginCall call) {
        JSObject ret = new JSObject();
        ret.put("isKeptAwake", isKeptAwake);
        call.resolve(ret);
    }

    @PluginMethod
    public void getPluginVersion(final PluginCall call) {
        try {
            final JSObject ret = new JSObject();
            ret.put("version", this.pluginVersion);
            call.resolve(ret);
        } catch (final Exception e) {
            call.reject("Could not get plugin version", e);
        }
    }
}
