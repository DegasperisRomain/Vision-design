import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia';

import App from './App.vue'
import router from './router'
import AOS from 'aos'

import VueFeather from 'vue-feather'


const app = createApp(App)

const pinia = createPinia();


app.use(router)
app.use(pinia)
app.use(AOS)
app.component(VueFeather.name, VueFeather)

app.mount('#app')

