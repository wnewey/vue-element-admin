<template>
  <el-carousel :interval="10000" arrow="never" class="slide">
    <el-carousel-item v-for="item in items" :key="item.id">
      <img class="slide-img" :src="item.src"/>
    </el-carousel-item>
  </el-carousel>
</template>
<script>
  import {
    Carousel,
    CarouselItem
  } from 'element-ui';
  export default {
    name: 'GrSlide',
    components: {
      ElCarousel: Carousel,
      ElCarouselItem: CarouselItem
    },
    props: {
      items: {
        type: Array,
        required: true
      }
    }
  };

</script>

<style scoped lang="less">
  .slide {
    width: 100%;
    height: 100%;
    min-width: 1280px;
    text-align: center;
  }

  .slide-img {
    width: 100%;
    height: 100%;
    min-width: 1280px;
  }

  .el-carousel__indicator {
    margin-bottom: 16px;
  }

  .slide /deep/ .el-carousel__indicators--horizontal {
    bottom: 25px;
  }

  .slide /deep/ .el-carousel__container {
    height: 100%;
  }

</style>
