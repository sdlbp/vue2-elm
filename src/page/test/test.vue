<template>
  <div id="test">
    <section v-if="false">
      <loading></loading>
    </section>
    <!--    骨架屏 1.使用图片占位 2.设置图片呼吸动画-->
    <section class="shopSvg animation_opactiy">
      <img src="../../images/shop_back_svg.svg" alt="" />
    </section>
  </div>
</template>

<script>
import loading from 'src/components/common/loading'
export default {
  name: 'test',
  components: {
    loading
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/mixin';
.shopSvg {
  position: fixed;
  @include wh(100%, 100%);
}
</style>
