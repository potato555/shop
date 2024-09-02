import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnpluginSvgComponent from 'unplugin-svg-component/vite'

// 导入自动导包的插件
import AutoImport from 'unplugin-auto-import/vite'
// 导入自动到vue组件的插件
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    UnpluginSvgComponent({
      iconDir: ['./src/assets/svg'],
      dts: true,
      dtsDir: './src/types',
      prefix: 'icon',
    }),
    vue(),
    AutoImport({
      // imports用来指定需要自动导入的包
      imports: [
        'vue',
        'vue-router',
        'pinia',
        {
          '@vueuse/core': [
            'useLocalStorage',
            'createFetch',
            'useInfiniteScroll',
            'refDebounced',
            'useScroll',
          ],
        },
      ],

      // 自动生成类型描述文件
      dts: './src/types/auto-imports.d.ts',

      // 指定目录，目录的模块会被自动导入
      dirs: ['./src/**/*'],

      // 是否支持在vue模板中使用
      vueTemplate: true,

      // imports: [
      //   {
      //     vue: [['ref', 'hello'], 'computed'],
      //   },
      //   'vue-router',
      //   'pinia',
      // ],
    }),
    Components({
      dirs: ['./src/components', './src/layout', './src/views'],
      dts: './src/types/components.d.ts',
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
