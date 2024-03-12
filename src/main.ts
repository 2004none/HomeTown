import { createApp } from 'vue'
import App from './App.vue'
import VueTianditu from "vue-tianditu";

const app = createApp(App);
app.use(
    VueTianditu,
    {
        v:"4.0",
        tk:"44d836bae7cbb82aa0a3e7fe42edad81"
    }
)
app.mount('#app')
