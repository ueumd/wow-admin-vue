import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'

// 自动导入composition api 和 生成全局typescript说明
import AutoImport from 'unplugin-auto-import/vite'

// 自动按需导入组件和注册组件
import Components from 'unplugin-vue-components/vite'

import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // 自动导入
    AutoImport({
      // 全局引入插件
      imports: [
        'vue',
        'vue-router',
        'pinia',
        // 自定义
        {
          axios: [
            // default imports
            ['default', 'axios'] // import { default as axios } from 'axios',
          ]
        }
      ],
      // 解析器，例如element-plus的ElementPlusResolver
      // see https://github.com/antfu/unplugin-auto-import/pull/23/
      resolvers: [ElementPlusResolver()],
      eslintrc: {
        enabled: true, // Default `false`
        filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      },
      dts: true // 根目录自动生成auto-import.d.ts  "src/auto-import.d.ts"  生成 `auto-import.d.ts` 全局声明
    }),
    Components({
      resolvers: [ElementPlusResolver()] // ElementPlus按需加载
    })
  ],
  resolve: {
    // src目录别名
    alias: {
      '@': path.join(__dirname, './src')
    }
  },
  css: {
    preprocessorOptions: {
      // css 全局变量
      scss: {
        additionalData: '@import "@/styles/variables.scss";'
      }
    }
  },
  server: {
    // 是否自动打开浏览器
    open: true,
    // 服务器主机名，如果允许外部访问，可设置为"0.0.0.0"
    host: '0.0.0.0',
    // 服务器端口号
    port: 3000,
    // 设为 true ,若端口已被占用则会直接退出，而不是尝试下一个可用端口
    strictPort: false,
    // 为开发服务器配置 CORS
    cors: true,
    // 设置为 true 强制使依赖预构建
    force: true,
    // 代理
    proxy: {
      '/web': {
        target: '', // test
        changeOrigin: true
        // rewrite: (path) => path.replace(/^\/web/, '')
        /*  pathRewrite: {
          '^/api/internal': '/internal' // pro
        }*/
      }
    }
  },
  // build
  /*build: {
    // 压缩
    minify: 'esbuild',
    assetsDir: '',
    outDir: `./dist`,
    // 进行压缩计算
    brotliSize: false
  },*/
  build: {
    outDir: 'dist',
    minify: 'terser',
    rollupOptions: {
      output: {
        assetFileNames: '[ext]/[name].[hash].[ext]',
        chunkFileNames: 'js/[name].[hash].js',
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString()
          }
        }
      }
    },
    terserOptions: {
      compress: {
        keep_infinity: true,
        drop_console: true,
        drop_debugger: true
      }
    }
  }
})
