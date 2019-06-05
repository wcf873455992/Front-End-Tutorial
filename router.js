/* global Vue */
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import my from '@/components/My'
import Service from '@/components/Service'
import HomeRange from '@/components/HomeRange'
import OfficeSpace from '@/components/OfficeSpace'

Vue.use(Router)

export const router = new Router({
  routes: [
    {
      path: '/',
      name: 'OfficeSpace',
      component: OfficeSpace
    },
    {
      path: '/my',
      name: 'my',
      component: my
    },
    {
      path: '/homerange',
      name: 'homerange',
      component: HomeRange
    },
    {
      path: '/service',
      name: 'service',
      component: Service
    },
    {
    path: '/helloworld',
    name: 'HelloWorld',
    component: HelloWorld
  }
  ]
})
