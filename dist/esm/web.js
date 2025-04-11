var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { WebPlugin } from '@capacitor/core';
export class DarkModeWeb extends WebPlugin {
    constructor() {
        super();
        this.darkMode = { isDarkModeOn: false };
    }
    isDarkModeOn() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const isDark = ((_a = window.matchMedia) === null || _a === void 0 ? void 0 : _a.call(window, '(prefers-color-scheme: dark)').matches) || false;
            return { isDarkModeOn: isDark };
        });
    }
    registerDarkModeChangeListener() {
        const listener = (status) => {
            this.notifyListeners("darkModeStateChanged", {
                isDarkModeOn: status.matches
            });
        };
        window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", listener);
    }
    // ✅ This now matches Capacitor v7 expectations
    addListener(eventName, listenerFunc) {
        return __awaiter(this, void 0, void 0, function* () {
            const remove = this.addListenerInternal(eventName, listenerFunc);
            return {
                remove: () => __awaiter(this, void 0, void 0, function* () { return remove(); })
            };
        });
    }
    addListenerInternal(eventName, listenerFunc) {
        window.addEventListener(eventName, listenerFunc);
        return () => window.removeEventListener(eventName, listenerFunc);
    }
}
//# sourceMappingURL=web.js.map