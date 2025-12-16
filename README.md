# capacitor-keep-awake
  <a href="https://capgo.app/"><img src='https://raw.githubusercontent.com/Cap-go/capgo/main/assets/capgo_banner.png' alt='Capgo - Instant updates for capacitor'/></a>

<div align="center">
  <h2><a href="https://capgo.app/?ref=plugin_keep_awake"> ➡️ Get Instant updates for your App with Capgo</a></h2>
  <h2><a href="https://capgo.app/consulting/?ref=plugin_keep_awake"> Missing a feature? We'll build the plugin for you 💪</a></h2>
</div>
Prevent the device screen from dimming or sleeping.

## Why Capacitor Keep Awake?

A simple, **free**, and **lightweight** screen wake lock plugin:

- **Keep screen on** - Prevent device from dimming or sleeping
- **Status checking** - Query current wake lock state
- **Platform support** - Check if wake lock is available on current platform
- **Universal compatibility** - Works across iOS, Android, and web
- **Modern package management** - Supports both Swift Package Manager (SPM) and CocoaPods (SPM-ready for Capacitor 8)
- **Zero dependencies** - Minimal footprint, no bloat

Perfect for video players, navigation apps, games, presentations, and any app that needs the screen to stay on.

## Documentation

The most complete doc is available here: https://capgo.app/docs/plugins/keep-awake/

## Install

```bash
npm install @capgo/keep-awake
npx cap sync
```

## iOS

Works out of the box. Uses `UIApplication.shared.isIdleTimerDisabled` to control screen sleep.

## Android

Works out of the box. Uses `WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON` flag. No permissions required.

## Web

Works in modern browsers that support the Screen Wake Lock API. Call `isSupported()` first to check if wake lock is available on the current browser.

## API

<docgen-index>

* [`keepAwake()`](#keepawake)
* [`allowSleep()`](#allowsleep)
* [`isSupported()`](#issupported)
* [`isKeptAwake()`](#iskeptawake)
* [`getPluginVersion()`](#getpluginversion)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

Capacitor Keep Awake Plugin for preventing the device screen from dimming/sleeping.

### keepAwake()

```typescript
keepAwake() => Promise<void>
```

Prevent the device from dimming the screen.

**Since:** 1.0.0

--------------------


### allowSleep()

```typescript
allowSleep() => Promise<void>
```

Allow the device to dim the screen (disable keep awake).

**Since:** 1.0.0

--------------------


### isSupported()

```typescript
isSupported() => Promise<IsSupportedResult>
```

Check if the keep awake feature is supported on the current platform.

**Returns:** <code>Promise&lt;<a href="#issupportedresult">IsSupportedResult</a>&gt;</code>

**Since:** 1.0.0

--------------------


### isKeptAwake()

```typescript
isKeptAwake() => Promise<IsKeptAwakeResult>
```

Check if the device is currently being kept awake.

**Returns:** <code>Promise&lt;<a href="#iskeptawakeresult">IsKeptAwakeResult</a>&gt;</code>

**Since:** 1.0.0

--------------------


### getPluginVersion()

```typescript
getPluginVersion() => Promise<{ version: string; }>
```

Get the native Capacitor plugin version.

**Returns:** <code>Promise&lt;{ version: string; }&gt;</code>

**Since:** 1.0.0

--------------------


### Interfaces


#### IsSupportedResult

Result of the isSupported() method.

| Prop              | Type                 | Description                                              | Since |
| ----------------- | -------------------- | -------------------------------------------------------- | ----- |
| **`isSupported`** | <code>boolean</code> | Whether keep awake is supported on the current platform. | 1.0.0 |


#### IsKeptAwakeResult

Result of the isKeptAwake() method.

| Prop              | Type                 | Description                                       | Since |
| ----------------- | -------------------- | ------------------------------------------------- | ----- |
| **`isKeptAwake`** | <code>boolean</code> | Whether the device is currently being kept awake. | 1.0.0 |

</docgen-api>
