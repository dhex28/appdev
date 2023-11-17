import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import '@/assets/cssadmin/sb-admin-2.min.css';
import '@/assets/cssadmin/styleform.css';
import '../public/vendor/fontawesome-free/css/all.min.css';
import axios from'axios'

axios.defaults.baseURL = "http://veronica_backend.test/"

loadFonts()

createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app')
