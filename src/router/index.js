import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../components/containers/Home';
import Company from '../components/containers/Company';
import ProductsAndServices from '../components/containers/ProductsAndServices';
import Collaborating from '../components/containers/Collaborating';
import Contact from '../components/containers/Contact';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  hashbag: true,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/',
      name: 'Company',
      component: Company,
    },
    {
      path: '/',
      name: 'ProductsAndServices',
      component: ProductsAndServices,
    },
    {
      path: '/',
      name: 'Collaborating',
      component: Collaborating,
    },
    {
      path: '/',
      name: 'Contact',
      component: Contact,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { selector: to.hash, behavior: 'smooth' };
    }

    if (savedPosition) {
      return { selector: savedPosition, behavior: 'smooth' };
    } else {
      return { x: 0, y: 0, behavior: 'smooth' };
    }
  },
});

export default router;
