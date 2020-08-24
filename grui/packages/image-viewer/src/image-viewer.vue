<template>
  <el-image-viewer :z-index="zIndex" :initial-index="imageIndex" v-show="showViewer" :on-close="closeViewer"
    :url-list="urlList" />
</template>
<script>
  import ImageViewer from 'element-ui/packages/image/src/image-viewer';
  // import {
  //   Image
  // } from 'element-ui';
  export default {
    name: 'GrImageViewer',
    components: {
      ElImageViewer: ImageViewer
      // ElImage: Image
    },
    props: {
      zIndex: {
        type: Number,
        default: 2000
      },
      imageIndex: {
        type: Number,
        default: 0
      },
      urlList: {
        type: Array
      },
      vShow: {
        type: Boolean
      }
    },
    computed: {},
    data() {
      return {
        showViewer: false
      };
    },
    methods: {
      // 关闭查看器
      closeViewer() {
        this.$emit('close');
      }
    },
    watch: {
      vShow(newVal, oldVal) {
        this.showViewer = newVal;
      }
    }
  };

</script>

<style scoped lang="less">
  @import "../../../theme/color.less";

  /deep/ .el-icon-circle-close {
    font-weight: bold;
    color: white;
  }

</style>
