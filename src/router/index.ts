import axios from 'axios';
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('../views/Front/FrontView.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/Front/HomePage.vue'),
      },
      {
        path: 'shop',
        component: () => import('../views/Front/ShopPage.vue'),
      },
      {
        path: 'product',
        component: () => import('../views/Front/ProductView.vue'),
      },
      {
        path: 'blog',
        component: () => import('../views/Front/BlogView.vue'),
      },
      {
        path: 'about',
        component: () => import('../views/Front/AboutView.vue'),
      },
      {
        path: 'contact',
        component: () => import('../views/Front/ContactView.vue'),
      },
      {
        path: 'cart',
        component: () => import('../views/Front/CartView.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/admin/AdminLogin.vue'),
  },
  {
    path: '/admin',
    component: () => import('../views/admin/AdminDashboard.vue'),
    meta: {
      requiredAuth: true,
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
  if (to.meta.requiredAuth === true && !token) {
    next({ name: 'Login' });
  } else if (to.meta.requiredAuth === true && token) {
    axios.defaults.headers.common.Authorization = token;
    const url = `${process.env.VUE_APP_API}/api/user/check`;
    await axios
      .post(url)
      .then(() => {
        next();
      })
      .catch((err) => {
        console.log(err);
        next({ name: 'Login' });
      });
  } else if (to.meta.requiredAuth !== true) {
    next();
  }
});

export default router;
