import {resolve} from 'path'
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'
import graphql from '@rollup/plugin-graphql'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
    vue(),
    graphql(),
  ],
  resolve: {
    alias: {
      '~': resolve(__dirname, './src'),
    },
  },
})
