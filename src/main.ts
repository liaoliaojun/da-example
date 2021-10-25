import {createApp} from 'vue'
import router from './router/'
import App from './app.vue'
import initApollo from './init-apollo'
import './styles/index.postcss'
// import 'element-plus/dist/index.css'
import './styles/element/reset-element-ui.postcss'
import {getRuntimeArgs} from './runtime-args'

getRuntimeArgs().then(async () => {
  initApollo()
  createApp(App).use(router).mount('#app')
})
