import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import BaseCard from './components/UI/BaseCard.vue';
import BaseButton from './components/UI/BaseButton.vue';
import Survey from './Survey.vue';
import App from './App.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/survey', component: Survey },
    { path: '/infos', component: Survey },
    { path: '/', component: Survey }
  ],
  linkActiveClass: 'active'
});

const app = createApp(App);
app.use(router);

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);

app.mount('#app');
