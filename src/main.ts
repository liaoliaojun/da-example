import {createApp} from 'vue'
import router from './router/'
import App from './app.vue'
import './assets/index.css'
import 'element-plus/dist/index.css'
import './assets/reset-element-ui.postcss'


createApp(App).use(router).mount('#app')
