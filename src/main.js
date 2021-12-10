import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import VueApexCharts from 'vue3-apexcharts'

import './css/tailwind.css'
import 'primeflex/primeflex.css'
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

const app = createApp(App)
app.use(VueApexCharts)
app.use(PrimeVue)
app.use(router).mount('#app')
