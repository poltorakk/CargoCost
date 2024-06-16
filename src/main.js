import {
    createApp
} from 'vue'
import App from './App.vue'
import '@/assets/colors.scss';
import '@/assets/typograpichs.scss';
import PrimeVue from "primevue/config";
import ToastService from 'primevue/toastservice';
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import './assets/tailwind.css';
import 'primeicons/primeicons.css';

import router from '@/plugins/router'
const app = createApp(App);

app.use(PrimeVue, {
    ripple: true,
});
app.use(ToastService);
app.use(router);

app.mount('#app');