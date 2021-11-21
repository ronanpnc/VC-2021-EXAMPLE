import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import BaseCard from './components/UI/BaseCard.vue';
import BaseButton from './components/UI/BaseButton.vue';
import BaseDialog from './components/UI/BaseDialog.vue';

import TaskView from './components/task/TaskView.vue';
import App from './App.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/tasks', component: TaskView },
    { path: '/events', component: TaskView }, // TODO
    { path: '/', component: TaskView }
  ],
  linkActiveClass: 'active'
});

const app = createApp(App);
app.use(router);
app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-dialog', BaseDialog);

app.mount('#app');
