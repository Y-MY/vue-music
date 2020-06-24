import Vue from 'vue'
import Router from 'vue-router'
import Recommend from '../pages/recommend/index.vue';
import Singer from '../pages/singer/index.vue';
import Rank from '../pages/rank/index.vue';
import Search from '../pages/search/index.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path:'/recommend',
      component:Recommend,
      name:'推荐'
    },
    {
      path:'/singer',
      component:Singer,
      name:'歌手'
    },
    {
      path:'/rank',
      component:Rank,
      name:'排行'
    },
    {
      path:'/search',
      component:Search,
      name:'搜索'
    },
    {
      redirect:'/recommend',
      path:'/'
    }
  ]
})
