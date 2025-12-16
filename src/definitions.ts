/**
 * Capacitor Keep Awake Plugin for preventing the device screen from dimming/sleeping.
 *
 * @since 1.0.0
 */
export interface KeepAwakePlugin {
  /**
   * Prevent the device from dimming the screen.
   *
   * @returns Promise that resolves when keep awake is enabled
   * @throws Error if enabling keep awake fails
   * @since 1.0.0
   * @example
   * ```typescript
   * await KeepAwake.keepAwake();
   * console.log('Screen will stay awake');
   * ```
   */
  keepAwake(): Promise<void>;

  /**
   * Allow the device to dim the screen (disable keep awake).
   *
   * @returns Promise that resolves when keep awake is disabled
   * @throws Error if disabling keep awake fails
   * @since 1.0.0
   * @example
   * ```typescript
   * await KeepAwake.allowSleep();
   * console.log('Screen can now dim');
   * ```
   */
  allowSleep(): Promise<void>;

  /**
   * Check if the keep awake feature is supported on the current platform.
   *
   * @returns Promise that resolves with support status
   * @throws Error if checking support fails
   * @since 1.0.0
   * @example
   * ```typescript
   * const { isSupported } = await KeepAwake.isSupported();
   * if (isSupported) {
   *   console.log('Keep awake is supported');
   * }
   * ```
   */
  isSupported(): Promise<IsSupportedResult>;

  /**
   * Check if the device is currently being kept awake.
   *
   * @returns Promise that resolves with current keep awake status
   * @throws Error if checking status fails
   * @since 1.0.0
   * @example
   * ```typescript
   * const { isKeptAwake } = await KeepAwake.isKeptAwake();
   * console.log('Is kept awake:', isKeptAwake);
   * ```
   */
  isKeptAwake(): Promise<IsKeptAwakeResult>;

  /**
   * Get the native Capacitor plugin version.
   *
   * @returns Promise that resolves with the plugin version
   * @throws Error if getting the version fails
   * @since 1.0.0
   * @example
   * ```typescript
   * const { version } = await KeepAwake.getPluginVersion();
   * console.log('Plugin version:', version);
   * ```
   */
  getPluginVersion(): Promise<{ version: string }>;
}

/**
 * Result of the isSupported() method.
 *
 * @since 1.0.0
 */
export interface IsSupportedResult {
  /**
   * Whether keep awake is supported on the current platform.
   *
   * @since 1.0.0
   */
  isSupported: boolean;
}

/**
 * Result of the isKeptAwake() method.
 *
 * @since 1.0.0
 */
export interface IsKeptAwakeResult {
  /**
   * Whether the device is currently being kept awake.
   *
   * @since 1.0.0
   */
  isKeptAwake: boolean;
}
