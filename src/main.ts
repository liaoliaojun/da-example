import {createApp, h, provide} from 'vue'
import router from './router/'
import App from './app.vue'
import initApollo from './init-apollo'
import {ApolloClients} from '@vue/apollo-composable'
import useApolloClient from '~/utils/apollo-client'
import './styles/index.postcss'
// import 'element-plus/dist/index.css'
import './styles/element/reset-element-ui.postcss'
import runtimeArgs, {getRuntimeArgs} from './runtime-args'

getRuntimeArgs().then(async () => {
  initApollo()
  createApp({
    setup () {
      const icoHref = runtimeArgs.EJ_ENV_ICO_URL
      if (icoHref) {
        const linkEle = document.createElement('link')
        linkEle.setAttribute('rel', 'icon')
        linkEle.setAttribute('type', 'image/x-icon')
        linkEle.setAttribute('href', icoHref)
        document.head.appendChild(linkEle)
      }

      provide(ApolloClients, {
        default: useApolloClient('da'),
      })
    },
    render: () => h(App),
  }).use(router).mount('#app')
})
