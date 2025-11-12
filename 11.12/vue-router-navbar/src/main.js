import { createApp } from 'vue'
import App from './App.vue'

// Vue Router import és konfiguráció
import router from './router'

createApp(App)
  .use(router) // Router használata
  .mount('#app')