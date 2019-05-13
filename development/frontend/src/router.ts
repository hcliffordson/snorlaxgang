import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Listing from './views/Listing.vue';
import Publish from './views/Publish.vue';
import Login from './views/Login.vue';
import Search from './views/Search.vue';
import { isUserLoggedIn } from './services/backend/auth';
import Profile from './views/Profile.vue';

Vue.use(Router);
const router = new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/listing/:id',
      name: 'listingDetail',
      component: Listing
    },
    {
      path: '/publish',
      name: 'publish',
      component: Publish
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        guest: true
      }
    },
    {
      path: '/search',
      name: 'search',
      component: Search,
      meta: {
        hideNav: true
      },
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
    }
  ],
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => !record.meta.guest)) {
    // should be authenticated
    isUserLoggedIn().then((loggedIn) => {
      if (loggedIn) {
        next();
      } else {
        next({name: 'login'});
      }
    });
  } else {
    isUserLoggedIn().then((loggedIn) => {
      if (loggedIn) {
        next({name: 'home'});
      } else {
        next();
      }
    });
  }
});

export default router;
