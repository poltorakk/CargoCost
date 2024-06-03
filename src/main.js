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

const app = createApp(App);

app.use(PrimeVue, {
    ripple: true,
});
app.use(ToastService);

app.mount('#app');