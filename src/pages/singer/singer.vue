<template>
  <div class="singer" ref="singer">
    <list-view @select="selectSinger" :data="singers" ref="list"></list-view>
    <router-view></router-view>
  </div>
</template>

<script>
  import ListView from '../../base/listview/listview';
  import {getSingerList} from '../../api/singer';
  import Singer from '../../common/js/singer';
  import {ERR_OK} from '../../api/config';
   import {mapMutations} from 'vuex';
  /*import {playlistMixin} from '../../common/js/mixin';*/

  const HOT_SINGER_LEN = 10;
  const HOT_NAME = '热门';

  export default {
    /*mixins: [playlistMixin],*/
    data() {
      return {
        singers: []
      }
    },
    created() {
      this._getSingerList()
    },
    methods: {
      _getSingerList() {
        getSingerList().then((res) => {
          if (res.code === ERR_OK) {
            this.singers = this._normalizeSinger(res.singerList.data.singerlist)
          }
        })
      },

      handlePlaylist(playlist) {
        let bottom = playlist.length > 0 ? '60px' : '';
        this.$refs.singer.style.bottom = bottom;
        this.$refs.list.refresh()
      },

      selectSinger(singer) {
        this.$router.push({
          path: `/singer/${singer.singerMid}`
        });
        this.setSinger(singer)
      },

      _normalizeSinger(list) {
        let map = {
          hot: {
            title: HOT_NAME,
            items: []
          }
        };

        list.forEach((item, index) => {
          if (index < HOT_SINGER_LEN) {
            map.hot.items.push(new Singer({
              name: item.singer_name,
              singerId: item.singer_id,
              singerMid: item.singer_mid,
              avatar: item.singer_pic,
            }))
          }
          //将名字的首字母转成英文字母
          const key = pinyinUtil.getFirstLetter(item.singer_name).charAt(0);
          if (!map[key]) {
            map[key] = {
              title: key,
              items: []
            }
          }
          map[key].items.push(new Singer({
            name: item.singer_name,
            singerId: item.singer_id,
            singerMid: item.singer_mid,
            avatar: item.singer_pic,
          }))
        });
        // 为了得到有序列表，我们需要处理 map
        let ret = [];
        let hot = [];
        for (let key in map) {
          let val = map[key];
          if (val.title.match(/[a-zA-Z]/)) {
            ret.push(val)
          } else if (val.title === HOT_NAME) {
            hot.push(val)
          }
        }
        ret.sort((a, b) => {
          return a.title.charCodeAt(0) - b.title.charCodeAt(0)
        });
        return hot.concat(ret)
      },
       ...mapMutations({
         setSinger: 'SET_SINGER'
       })
    },
    components: {
      ListView
    }
  }

</script>

<style scoped lang="less">
  .singer {
    position: fixed;
    top: 88px;
    bottom: 0;
    width: 100%;
    overflow-y: scroll;
  }

</style>
