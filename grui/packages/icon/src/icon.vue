<template>
  <span :class="`icon iconfont icon${name}`"></span>
</template>
<script>
  export default {
    name: 'GrIcon',
    props: {
      name: {
        type: String,
        required: true
      }
    }
  };

</script>

<style scope lang="less">
  @import "./iconfont/iconfont.css";

</style>
