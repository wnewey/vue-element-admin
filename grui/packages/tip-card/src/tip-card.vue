<template>
  <div class="tip-card">
    <div class="text">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'GrTipCard'
  };

</script>
<style scoped lang="less">
  .tip-card {
    background: #fff7ee;
    border: 1px solid #ffe6c6;
    border-radius: 6px;
    padding: 13px 20px;
    margin-bottom: 14px;

    .text {
      font-size: 12px;
      font-weight: 400;
      color: #666666;
      line-height: 1.2;
    }

  }

</style>
