import Foundation
import Capacitor
import UIKit

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(KeepAwakePlugin)
public class KeepAwakePlugin: CAPPlugin, CAPBridgedPlugin {
    private let pluginVersion: String = "8.0.0"
    public let identifier = "KeepAwakePlugin"
    public let jsName = "KeepAwake"
    public let pluginMethods: [CAPPluginMethod] = [
        CAPPluginMethod(name: "keepAwake", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "allowSleep", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "isSupported", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "isKeptAwake", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "getPluginVersion", returnType: CAPPluginReturnPromise)
    ]

    @objc func keepAwake(_ call: CAPPluginCall) {
        DispatchQueue.main.async {
            if !UIApplication.shared.isIdleTimerDisabled {
                UIApplication.shared.isIdleTimerDisabled = true
            }
            call.resolve()
        }
    }

    @objc func allowSleep(_ call: CAPPluginCall) {
        DispatchQueue.main.async {
            if UIApplication.shared.isIdleTimerDisabled {
                UIApplication.shared.isIdleTimerDisabled = false
            }
            call.resolve()
        }
    }

    @objc func isSupported(_ call: CAPPluginCall) {
        call.resolve([
            "isSupported": true
        ])
    }

    @objc func isKeptAwake(_ call: CAPPluginCall) {
        DispatchQueue.main.async {
            call.resolve([
                "isKeptAwake": UIApplication.shared.isIdleTimerDisabled
            ])
        }
    }

    @objc func getPluginVersion(_ call: CAPPluginCall) {
        call.resolve(["version": self.pluginVersion])
    }
}
