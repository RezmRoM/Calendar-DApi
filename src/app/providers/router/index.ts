import { createRouter, createWebHistory } from 'vue-router';
import { CalendarPage } from '@/pages/calendar';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: CalendarPage
    }
  ]
});

export default router;