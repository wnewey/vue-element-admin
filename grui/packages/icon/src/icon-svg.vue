<template>
  <svg class="icon" aria-hidden="true">
    <use :xlink:href="`#icon${name}`"></use>
  </svg>
</template>
<script>
  require('./iconfont/iconfont.js');

  export default {
    name: 'GrIconSvg',
    props: {
      name: {
        type: String,
        required: true
      }
    }
  };

</script>
<style scoped>
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }

</style>
