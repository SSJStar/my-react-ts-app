import { defineConfig } from 'vite';
// @ts-ignore
import reactRefresh from '@vitejs/plugin-react-refresh';
import path from 'path';

export default defineConfig({
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/index.tsx'),
            name: 'my-components',
            fileName: (format) => `my-components.${format}.js`,
        },
        rollupOptions: {
            // 使外部的库变成外部依赖
            external: ['react'],
            output: {
                // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
                globals: {
                    react: 'React',
                },
            },
        },
    },
    plugins: [reactRefresh()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, './src')
        }
    }
});