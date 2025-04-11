import { WebPlugin, PluginListenerHandle } from '@capacitor/core';
import { DarkModePlugin } from './definitions';

export class DarkModeWeb extends WebPlugin implements DarkModePlugin {
  darkMode = { isDarkModeOn: false };

  constructor() {
    super();
  }

  async isDarkModeOn(): Promise<{ isDarkModeOn: boolean }> {
    const isDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches || false;
    return { isDarkModeOn: isDark };
  }

  registerDarkModeChangeListener(): void {
    const listener = (status: MediaQueryListEvent) => {
      this.notifyListeners("darkModeStateChanged", {
        isDarkModeOn: status.matches
      });
    };
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", listener);
  }

  // ✅ This now matches Capacitor v7 expectations
  async addListener(
    eventName: string,
    listenerFunc: (event: any) => void
  ): Promise<PluginListenerHandle> {
    const remove = this.addListenerInternal(eventName, listenerFunc);
    return {
      remove: async () => remove()
    };
  }

  private addListenerInternal(eventName: string, listenerFunc: (event: any) => void): () => void {
    window.addEventListener(eventName, listenerFunc);
    return () => window.removeEventListener(eventName, listenerFunc);
  }
}
