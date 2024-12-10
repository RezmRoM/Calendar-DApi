import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import App from './App.vue';
import router from '@/app/providers/router';
import { createPinia } from 'pinia';
import en from '@/app/providers/i18n/locales/en';
import ru from '@/app/providers/i18n/locales/ru';
import './app/styles/tailwind.css';

const i18n = createI18n({
  legacy: false,
  locale: 'ru',
  messages: {
    en,
    ru
  }
});

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(i18n);
app.mount('#app');