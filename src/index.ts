import { registerPlugin } from '@capacitor/core';
import type { DarkModePlugin } from './definitions';
import { DarkModeWeb } from './web';

const DarkMode = registerPlugin<DarkModePlugin>('DarkMode', {
  web: () => new DarkModeWeb(),
});

export * from './definitions';
export { DarkMode };
