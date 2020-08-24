<template>
  <div class="content-card">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'GrContentCard'
  };

</script>

<style scoped lang="less">
  .content-card {
    background-color: #fff;
    padding: 15px 20px;
    border-radius: 6px;
    margin-bottom: 14px;
  }

</style>
