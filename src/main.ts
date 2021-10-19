import {createApp} from 'vue'
import router from './router/'
import App from './app.vue'
import './assets/index.css'
import 'element-plus/dist/index.css'

createApp(App).use(router).mount('#app')
