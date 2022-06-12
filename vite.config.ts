import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 自动导入composition api 和 生成全局typescript说明
import AutoImport from 'unplugin-auto-import/vite'

// 自动按需导入组件和注册组件
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // 自动导入
    AutoImport({
      // 全局引入插件
      imports: [
        "vue",
        "vue-router",
        'pinia',
        // 自定义
        {
          'axios': [
            // default imports
            ['default', 'axios'], // import { default as axios } from 'axios',
          ]
        }
      ],
      // 解析器，例如element-plus的ElementPlusResolver
      // see https://github.com/antfu/unplugin-auto-import/pull/23/
      resolvers: [
        /* ... */
      ],
      eslintrc: {
        enabled: true, // Default `false`
        filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      },
      dts: true  // 根目录自动生成auto-import.d.ts  "src/auto-import.d.ts"  生成 `auto-import.d.ts` 全局声明
    }),
    Components({
      dirs: ["src/components"], // 要导入组件的目录的路径
      deep: true, // 搜索子目录
      dts: "src/components/components.d.ts", // 运行后会自动生成 `components.d.ts` 全局声明
    })
  ]
})
