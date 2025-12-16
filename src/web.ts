import { WebPlugin } from '@capacitor/core';

import type { KeepAwakePlugin, IsSupportedResult, IsKeptAwakeResult } from './definitions';

export class KeepAwakeWeb extends WebPlugin implements KeepAwakePlugin {
  private wakeLock: WakeLockSentinel | null = null;

  async keepAwake(): Promise<void> {
    if (this.wakeLock) {
      return;
    }

    try {
      if ('wakeLock' in navigator) {
        this.wakeLock = await navigator.wakeLock.request('screen');
        this.wakeLock.addEventListener('release', () => {
          this.wakeLock = null;
        });
      } else {
        throw new Error('Wake Lock API is not supported');
      }
    } catch (e) {
      throw new Error(`Failed to enable keep awake: ${e}`);
    }
  }

  async allowSleep(): Promise<void> {
    if (this.wakeLock) {
      await this.wakeLock.release();
      this.wakeLock = null;
    }
  }

  async isSupported(): Promise<IsSupportedResult> {
    return { isSupported: 'wakeLock' in navigator };
  }

  async isKeptAwake(): Promise<IsKeptAwakeResult> {
    return { isKeptAwake: this.wakeLock !== null };
  }

  async getPluginVersion(): Promise<{ version: string }> {
    return { version: 'web' };
  }
}
