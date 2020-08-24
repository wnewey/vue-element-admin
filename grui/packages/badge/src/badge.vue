<template>
  <el-badge :value="value">
    <slot></slot>
  </el-badge>
</template>
<script>
  import {
    Badge
  } from 'element-ui';
  export default {
    name: 'GrBadge',
    props: {
      value: {
        type: String,
        required: true
      }
    },
    components: {
      ElBadge: Badge
    }
  };

</script>

<style scoped lang="less">
  /deep/ .el-badge__content {
    background-color: #FF5050;
    height: 14px;
    line-height: 14px;
    padding: 0 4px;
  }

  /deep/ .el-badge__content.is-fixed {
    right: 8px;
  }

</style>
