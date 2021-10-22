import {createApp} from 'vue'
import router from './router/'
import App from './app.vue'
import './styles/index.postcss'
// import 'element-plus/dist/index.css'
import './styles/element/reset-element-ui.postcss'

createApp(App).use(router).mount('#app')
