import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/home/home'
import Login from '@/components/login/login'
import Detail from '@/components/detail/detail'


Vue.use(Router)

export default new Router({
  routes: [
		{
	      path: '/home',
	      name: 'home',
	      component: Home
    	},
    	{
    		path:'/login',
    		component:Login
    	},
    	{
    		path:'/detail/:id',
    		name:'detail',
    		component:Detail
    	},
  ]
})
