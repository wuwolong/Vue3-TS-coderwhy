import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue', 'vue-router', 'vuex', 'pinia', '@vueuse/head'],
      dts: 'src/auto-import.d.ts',
    }),
    Components({
      dirs: ['src/components', 'src/base-ui'],
      deep: true,
      extensions: ['vue', 'jsx'],
      dts: 'src/components.d.ts',
      resolvers: [ElementPlusResolver()],
    }),
  ],
})
