import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/joyful',
      name: 'joyful',
      component: () => import('./views/Joyful.vue')
    },
    {
      path: '/lonely',
      name: 'lonely',
      component: () => import('./views/Lonely.vue')
    },
    {
      path: '/anger',
      name: 'anger',
      component: () => import('./views/Anger.vue')
    },
    {
      path: '/pride',
      name: 'pride',
      component: () => import('./views/Pride.vue')
    }
  ]
})
