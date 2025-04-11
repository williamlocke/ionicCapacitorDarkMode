import { PluginListenerHandle } from "@capacitor/core";

export interface DarkModePlugin {
  isDarkModeOn(): Promise<{ isDarkModeOn: boolean }>;
  addListener(
    eventName: 'darkModeStateChanged',
    listenerFunc: (state: { isDarkModeOn: boolean }) => void,
  ): Promise<PluginListenerHandle>;
  registerDarkModeChangeListener(): void;
}
