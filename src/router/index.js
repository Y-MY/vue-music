import Vue from 'vue'
import Router from 'vue-router'
import Recommend from '../pages/recommend/recommend.vue';
import Singer from '../pages/singer/index.vue';
import Rank from '../pages/rank/index.vue';
import Search from '../pages/search/index.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      component: Recommend,
      children: [
        {
          path: ':id',
         // component: Disc
        }
      ]
    },
    {
      path: '/singer',
      component: Singer,
      children: [
        {
          path: ':id',
         // component: SingerDetail
        }
      ]
    },
    {
      path: '/rank',
      component: Rank,
      children: [
        {
          path: ':id',
         // component: TopList
        }
      ]
    },
    {
      path: '/search',
      component: Search,
      children: [
        {
          path: ':id',
         // component: SingerDetail
        }
      ]
    },
    {
      path: '/user',
      //component: UserCenter
    }
  ]
})
