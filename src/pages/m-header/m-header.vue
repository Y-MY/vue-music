<template>
  <div class="m-header">
    <i class="iconfont icon-yinyue1"></i>
    <div class="text">Chicken Music</div>
    <router-link tag="div" class="mine" to="/user">
      <i class="icon-mine"></i>
    </router-link>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style scoped lang="less">
  @import "../../common/less/variable.less";
  @import "../../common/less/mixin.less";

  .m-header {
    position: relative;
    height: 44px;
    line-height: 44px;
    text-align: center;
    color: @color-theme;
    font-size: 0;

    i {
      font-size: 24px;
      margin-right: 10px;
    }

    .text {
      display: inline-block;
      vertical-align: top;
      line-height: 44px;
      font-size: @font-size-large;
    }

    .mine {
      position: absolute;
      top: 0;
      right: 0;
    }

    .icon-mine {
      display: block;
      padding: 12px;
      font-size: 20px;
      color: @color-theme;
    }
  }


</style>
