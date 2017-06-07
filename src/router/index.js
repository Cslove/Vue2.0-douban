import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import movie_play from '@/components/movie_play'
import usa_list from '@/components/usa_list'
import detail from '@/components/detail'
import cat_list from '@/components/cat_list'
import library from '@/components/library'
import book from '@/components/book'
import celebrity from '@/components/common/celebrity'
import book_tag_list from '@/components/book_tag_list'
import bookdetail from '@/components/bookdetail'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:{
      	name:'home'
      }
    },
    {
      path:'/home',
      name:'home',
      component:home
    },
    {
      path:'/library',
      name:'library',
      component:library
    },
    {
      path:'/movie_play/:play',
      name:'movie_play',
      component:movie_play
    },
    {
      path:'/usa_list/:playusa',
      name:'usa_list',
      component:usa_list
    },
    {
    	path:'/detail/:id',
    	name:'detail',
    	component:detail,
    	children:[
        {
          path:'',
          component:{
            template:'<div style="text-align:center;padding-top:30px;font-size:20px">点击影人查看详细信息</div>'
          }
        },
    		{
    			path:':name',
    			component:celebrity
    		},
    	]
    },
    {
    	path:'/cat_list/:tag',
    	name:'cat_list',
    	component:cat_list
    },
    {
    	path:'/book_list/:name',
    	name:'book_list',
    	component:book
    },
    {
      path:'/book_tag_list/:tag',
      name:'book_tag_list',
      component:book_tag_list
    },
    {
      path:'/book/:id',
      name:'book',
      component:bookdetail
    }
  ]
})
