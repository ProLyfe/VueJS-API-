import Vue from 'vue'
import Router from 'vue-router'

import Paris from './../views/Paris.vue'
import Home from './../views/Home.vue'
import Londres from './../views/Londres.vue'

Vue.use(Router)

export default new Router({
    routes: [
      {
        path: '/Paris',
        component: Paris
      },
      {
        path: '/',
        component: Home
      },
      {
        path: '/Londres',
        component: Londres
      },
    ]
})
