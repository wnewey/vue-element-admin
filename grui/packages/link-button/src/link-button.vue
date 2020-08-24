<template>
  <span class="link-button cl-link" @click="doClick">
    <slot></slot>
  </span>
</template>
<script>
  export default {
    name: 'GrLinkButton',
    methods: {
      doClick(e) {
        this.$emit('click', e);
      }
    }
  };

</script>

<style scoped lang="less">
  @import "../../../theme/color.less";

  .link-button {
    display: inline-block;
    cursor: pointer;
    padding: 0 5px;
  }

</style>
