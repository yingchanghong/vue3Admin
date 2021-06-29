import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Welcome from '../views/Welcome.vue';
// console.log(import.meta.env);
const routes = [
  {
    name: 'home',
    path: '/',
    meta: {
      title: '首页',
    },

    component: Home,
    redirect: '/welcome',
    children: [
      {
        name: 'welcome',
        path: '/welcome',
        meta: {
          title: '欢迎页',
        },
        component: Welcome,
      },
      {
        name: 'Login',
        path: '/login',
        meta: {
          title: '登录页',
        },
        component: Login,
      },
      // { name: '', path: '/', component: Home }],
    ],
  },
  {
    name: 'logins',
    path: '/logins',
    meta: {
      title: '登录页',
    },
    component: Login,
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
