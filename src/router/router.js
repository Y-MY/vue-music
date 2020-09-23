import Vue from 'vue'
import Router from 'vue-router'
import Recommend from '../pages/recommend/recommend.vue';
import Singer from '../pages/singer/singer.vue';
import SingerDetail from '../pages/singer-detail/singer-detail.vue';
import Rank from '../pages/rank/rank.vue';
import Search from '../pages/search/search.vue';

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
         component: SingerDetail
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
