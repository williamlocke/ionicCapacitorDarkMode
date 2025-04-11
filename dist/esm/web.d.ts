import { WebPlugin, PluginListenerHandle } from '@capacitor/core';
import { DarkModePlugin } from './definitions';
export declare class DarkModeWeb extends WebPlugin implements DarkModePlugin {
    darkMode: {
        isDarkModeOn: boolean;
    };
    constructor();
    isDarkModeOn(): Promise<{
        isDarkModeOn: boolean;
    }>;
    registerDarkModeChangeListener(): void;
    addListener(eventName: string, listenerFunc: (event: any) => void): Promise<PluginListenerHandle>;
    private addListenerInternal;
}
