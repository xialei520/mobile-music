import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import addressBook from '@/components/addressBook'
import chat from '@/components/chat'
import my from '@/components/my'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    }, 
		{
			path: '/components/addressBook',
			name: 'addressBook',
			component: addressBook
		},
		{
			path: '/components/my',
			name: 'my',
			component: my
		},
		{
			path: '/components/chat',
			name: 'chat',
			component: chat
		}
  ]
})
