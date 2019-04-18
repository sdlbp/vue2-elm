<template>
  <div>
<!--  transition 内部组件, 可以把过渡效果应用在被包裹的单个组件,标签上  -->
    <transition name="router-fade" mode="out-in">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>
    <transition name="router-fade" mode="out-in">
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
<!-- svg 一种xml描述的图像格式  -->
    <svg-icon></svg-icon>
  </div>
</template>

<script>
  import svgIcon from './components/common/svg';

  export default {
    components: {
      svgIcon
    },
  }

</script>

<style lang="scss">
  @import './style/common';

  .router-fade-enter-active, .router-fade-leave-active {
    transition: opacity .3s;
  }

  .router-fade-enter, .router-fade-leave-active {
    opacity: 0;
  }
</style>
// TODO 为何启动之后是首页
