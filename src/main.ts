import { createApp } from 'vue'
import App from './App.vue'
import VueTianditu from "vue-tianditu";
import { router } from './router'


const app = createApp(App);
app.use(
    VueTianditu,
    {
        v:"4.0",
        tk:"44d836bae7cbb82aa0a3e7fe42edad81"
    }
)
app.use(router)
app.mount('#app')
