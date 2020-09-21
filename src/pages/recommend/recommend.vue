<template>
  <div class="recommend" ref="recommend">
    <scroll ref="scroll" class="recommend-content" :data="discList">
      <div>
        <div v-if="recommends.length" class="slider-wrapper" ref="sliderWrapper">
          <slider>
            <div v-for="item in recommends">
              <a :href="item.linkData.linkUrl">
                <img class="needsclick" @load="loadImage" :src="item.linkData.linkPicUrl">
              </a>
            </div>
          </slider>
        </div>
        <div class="recommend-list">
          <h1 class="list-title">热门歌单推荐</h1>
          <el-row :gutter="20">
            <el-col :span="8" @click="selectItem(item)" v-for="item in discList" class="item">
              <img width="90%" height="90%" :src="item.cover">
              <div class="text">
                <h2 class="name" v-html="item.title"></h2>
              </div>
             <!-- <div class="text">
                <h2 class="name" v-html="item.title"></h2>
                <p class="desc" v-html="item.dissname"></p>
              </div>-->
            </el-col>
          </el-row>
         <!-- <ul>
            <li @click="selectItem(item)" v-for="item in discList" class="item">
              <div class="icon">
                <img width="60" height="60" :src="item.cover">
              </div>
              <div class="text">
                <h2 class="name" v-html="item.title"></h2>
                <p class="desc" v-html="item.dissname"></p>
              </div>
            </li>
          </ul>-->
        </div>
      </div>
      <div class="loading-container" v-show="!discList.length">
        <loading></loading>
      </div>
    </scroll>
    <router-view></router-view>
  </div>
</template>

<script>
  import Slider from '../../base/slider/slider'
  import Loading from '../../base/loading/loading'
  import Scroll from '../../base/scroll/scroll'
  /*import {playlistMixin} from '../../common/js/mixin'
  import {mapMutations} from 'vuex';*/
  import {getRecommend, getDiscList} from '../../api/recommend'

  export default {
    components: {
      Slider,
      Loading,
      Scroll
    },
    data() {
      return {
        recommends: [],
        discList: []
      }
    },
    /*mixins: [playlistMixin],*/
    created() {
      this._getRecommend();
      this._getDiscList()
    },
    methods: {
      _getRecommend() {
        getRecommend().then((res) => {
          this.recommends = res.result.results
        })
      },
      _getDiscList() {
        getDiscList().then((res) => {
          this.discList = res.recomPlaylist.data.v_hot.slice(0,9)
        })
      },
      handlePlaylist(playlist) {
        const bottom = playlist.length > 0 ? '60px' : '';

        this.$refs.recommend.style.bottom = bottom;
        this.$refs.scroll.refresh()
      },
      loadImage() {
        if (!this.checkloaded) {
          this.checkloaded = true;
          this.$refs.scroll.refresh()
        }
      },
      selectItem(item) {
        this.$router.push({
          path: `/recommend/${item.dissid}`
        });
        this.setDisc(item)
      },


      /* ...mapMutations({
         setDisc: 'SET_DISC'
       })
     },*/

    }
  }
</script>

<style scoped lang="less">
  @import "../../common/less/variable";

  .recommend {
    position: fixed;
    width: 100%;
    top: 88px;
    bottom: 0;

    .recommend-content {
      height: 100%;
      overflow: scroll;

      .slider-wrapper {
        position: relative;
        width: 100%;
        overflow: hidden;
      }

      .recommend-list {
        .el-row{
          padding: 0 5px;
        }
        .list-title {
          height: 65px;
          line-height: 65px;
          text-align: center;
          font-size: @font-size-medium;
          color: @color-theme;
        }

        .item {
          padding: 0 20px 20px 20px;
          .icon {
            flex: 0 0 60px;
            width: 60px;
            padding-right: 20px;
          }
          .text {
           /* display: flex;
            flex-direction: column;
            justify-content: center;
            flex: 1;*/
            line-height: 20px;
            overflow: hidden;
            font-size: @font-size-medium;

            .name {
              margin-bottom: 10px;
              color: @color-text
            }

            .desc {
              color: @color-text-d
            }
          }
        }
      }

      .loading-container {
        position: absolute;
        width: 100%;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }
</style>
