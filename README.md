# @capgo/keep-awake

Prevent the device screen from dimming or sleeping.

## Install

```bash
npm install @capgo/keep-awake
npx cap sync
```

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

## Usage

```typescript
import { KeepAwake } from '@capgo/keep-awake';

// Check if keep awake is supported
const { isSupported } = await KeepAwake.isSupported();
console.log('Keep awake supported:', isSupported);

// Prevent the screen from sleeping
await KeepAwake.keepAwake();

// Check if currently kept awake
const { isKeptAwake } = await KeepAwake.isKeptAwake();
console.log('Is kept awake:', isKeptAwake);

// Allow the screen to sleep again
await KeepAwake.allowSleep();
```

## Platform Support

| Platform | Supported |
| -------- | --------- |
| iOS      | Yes       |
| Android  | Yes       |
| Web      | Yes (using Wake Lock API) |

### Web Platform Notes

The web implementation uses the [Screen Wake Lock API](https://developer.mozilla.org/en-US/docs/Web/API/Screen_Wake_Lock_API). This API is supported in most modern browsers but may not be available in all environments. Use `isSupported()` to check if the feature is available.

## License

MPL-2.0
