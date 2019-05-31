<!--
loading 动画效果,整个动画分三部分
1. backgroudPositionY 来控制竖长条图片切换
2. 使用 tanslateY 设置图标跳跃动画
3. 使用 scale 设置底部阴影动画
-->
<template>
  <div class="loading_container">
    <div
      class="load_img"
      :style="{ backgroundPositionY: -(positionY % 7) * 2.5 + 'rem' }"
    >
    </div>
    <svg class="load_ellipse" xmlns="http://www.w3.org/2000/svg" version="1.1">
      <ellipse
        cx="26"
        cy="10"
        rx="26"
        ry="10"
        style="fill:#ddd;stroke:none;"
      ></ellipse>
    </svg>
  </div>
</template>

<script>
export default {
  data() {
    return {
      positionY: 0,
      timer: null
    }
  },
  mounted() {
    // 通过计时器设置 backgroudPostionY 来轮播竖长条图片
    this.timer = setInterval(() => {
      this.positionY++
    }, 600)
  },
  beforeDestroy() {
    clearInterval(this.timer)
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/mixin';
@keyframes load {
  // translateY 跳跃效果
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-50px);
  }
  100% {
    transform: translateY(0px);
  }
}
@keyframes ellipse {
  // 阴影放大缩小效果
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.3);
  }
  100% {
    transform: scale(1);
  }
}
.loading_container {
  // 使元素居中
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @include wh(2.5rem, 2.5rem);
}

.load_img {
  @include wh(100%, 100%);
  // 缩写属性 一般设置顺序是 -color -image -repeat -position/-size
  position: relative;
  z-index: $z-index-loading;
  background: url(../../images/icon_loading.png) no-repeat 0 0/2.5rem auto;
  transform: translateY(0px);
  // infinite 无限重复
  animation: load 0.6s infinite ease-in-out;
}
.load_ellipse {
  position: absolute;
  z-index: $z-index-loading-ellipse;
  @include wh(2.6rem, 2rem);
  top: 2.2rem;
  left: 0.2rem;
  animation: ellipse 0.6s infinite ease-in-out;
}
</style>
