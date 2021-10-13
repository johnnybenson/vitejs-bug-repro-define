// Client Globals -- See: vite.config.ts#config.define
declare const __APP_VERSION__: string;
declare const __APP_ENV__: string;
declare const __DEV__: boolean;
declare const __PROD__: boolean;
declare const __TEST__: boolean;

declare interface Window {
    __APP_VERSION__: typeof __APP_VERSION__;
    __APP_ENV__: typeof __APP_ENV__;
    __DEV__: typeof __DEV__;
    __PROD__: typeof __PROD__;
    __TEST__: typeof __TEST__;
}
