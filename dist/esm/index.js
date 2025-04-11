import { registerPlugin } from '@capacitor/core';
import { DarkModeWeb } from './web';
const DarkMode = registerPlugin('DarkMode', {
    web: () => new DarkModeWeb(),
});
export { DarkMode };
//# sourceMappingURL=index.js.map