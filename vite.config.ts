import {resolve} from 'path'
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'
import graphql from '@rollup/plugin-graphql'

import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'

const EJUI_COMPONENTS = [
  'EjTree',
  'EjLayer',
  'EjTexts',
  'EjSelect',
  'EjCascader',
  'EjIcon',
  'EjInput',
  'EjSplit',
  'EjSearch',
  'EjPopoverSet',
  'EjSearchInput',
  'EjSearchBar',
  'EjHighlight',
  'EjSteps',
  'EjStepsItem',
]

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: 'dev.jinxin.cloud',
  },
  plugins: [
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
    vue(),
    graphql(),
    Components({
      dts: true,
      resolvers: [
        ElementPlusResolver({
          importStyle: 'sass',
        }),
        // https://www.npmjs.com/package/unplugin-vue-components
        // example of importing Vant
        (name) => {
          // where `name` is always CapitalCase
          if (EJUI_COMPONENTS.includes(name)) {
            return {importName: name, path: '@ej/ui'}
          }
        },
      ],
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        // eslint-disable-next-line
        additionalData: `@use "~/styles/element/index.scss" as *;`,
      },
    },
  },
  resolve: {
    alias: {
      '~/': `${resolve(__dirname, 'src')}/`,
      '~~/': `${resolve(__dirname, './')}/`,
    },
  },
})
