import './assets/main.css'
import './assets/style.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import CKEditor from '@ckeditor/ckeditor5-vue'
const app = createApp(App)
app.use(router)
app.use( CKEditor )
app.use(store)





app.mount('#app')
