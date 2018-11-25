import Vue from 'vue'
import Router from 'vue-router'
import Found from '@/containers/Found'
import Video from '@/containers/Video'
import Mine from '@/containers/Mine'
import Friends from '@/containers/Friends'
import User from '@/containers/User'
import Recommend from '@/containers/FoundSubPage/Recommend'
import AnchorFM from '@/containers/FoundSubPage/AnchorFM'
import SongSheet from '@/containers/FoundSubPage/SongSheet'
import SongSheetChange from '@/containers/SongSheetChange'

Vue.use(Router)

export default new Router({
  linkActiveClass:"active",
  routes: [
    {
    	path:"/",
    	redirect:'/found'
    },
    {
      path: '/found',
      name: 'Found',
      component: Found,
      redirect:'/found/recommend',
      children:[
      	{
      		path:'recommend',
      		component: Recommend
      	},
      	{
      		path:'anchorfm',
      		component: AnchorFM
      	},
        {
          path:'songsheet',
          component: SongSheet
        }
      ]
    },
    {
      path: '/video',
      name: 'Video',
      component: Video
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/friends',
      name: 'Friends',
      component: Friends
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/type',
      name: 'SongSheetChange',
      component: SongSheetChange
    }
  ]
})
