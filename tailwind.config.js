const merge = require('lodash/merge')
const config = require('@ej/tailwind-config/src/index')

const selfConfig = {
  mode: 'jit',
  purge: [
    './src/*.{js,jsx,ts,tsx,vue}',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  // purge: {
  //   // enabled: process.env.NODE_ENV === 'production',
  //   // enabled: true,
  //   content: [
  //     './src/*.{js,jsx,ts,tsx,vue}',
  //     './src/**/*.{js,jsx,ts,tsx,vue}',
  //     './externals/ej-ui/src/!(stories)/*.{js,jsx,ts,tsx,vue}',
  //     './externals/ej-ui/src/**/!(stories)/*.{js,jsx,ts,tsx,vue}',
  //     './externals/ej-business-modules/src/**/*.{js,jsx,ts,tsx,vue}',
  //   ],
  // },
  // variants: {
  //   margin: ['responsive', 'last'],
  // },
}

merge(selfConfig, config)

module.exports = selfConfig
