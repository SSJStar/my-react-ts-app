import { defineConfig } from 'vite';
// @ts-ignore
import reactRefresh from '@vitejs/plugin-react-refresh';
import path from 'path';

export default defineConfig({
    server: {
        host: '0.0.0.0',
        port: 3000,
        open: false,
        proxy: {
            '/api': {
                target: 'https://mockapi.eolink.com',//'http://hvac.365env.com/', //接口域名
                changeOrigin: true, //是否跨域
                ws: true, //是否代理 websockets
                secure: false, //是否 https接口
                //路径重置,'api'替换掉
                // rewrite: (path)=> path.replace("^/api",""),
                rewrite: (path)=> path.replace(/^\/api/,''),
            },
        },
    },
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
            // "@": path.resolve(__dirname, 'src'),
            // "#": path.join(__dirname,"types")
            // "@$":"src"
        },
        // extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },

});


//
// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//     transpileDependencies: true,
//     devServer: {
//         proxy: {
//             '/api': {
//                 target: 'http://hvac.365env.com/', //接口域名
//                 changeOrigin: true, //是否跨域
//                 ws: true, //是否代理 websockets
//                 secure: true, //是否https接口
//                 pathRewrite: {
//                     //路径重置
//                     "^/api": "",
//                 },
//             },
//         },
//     },
// })
