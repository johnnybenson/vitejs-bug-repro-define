import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// Default to PRODUCTION build
process.env.NODE_ENV = process.env.NODE_ENV || 'production';

// https://vitejs.dev/config/
export default defineConfig((configEnv) => ({
    // https://vitejs.dev/config/#define
    define: {
        __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
        __APP_ENV__: JSON.stringify(configEnv.mode),
        __DEV__: configEnv.mode === 'development',
        __PROD__: configEnv.mode === 'production',
        __TEST__: configEnv.mode === 'test',
    },
    plugins: [
        tsconfigPaths(),
        react()
    ],
}));
