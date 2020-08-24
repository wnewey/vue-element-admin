<template>
  <div class="strength">
    密码强度: 低
    <div class="bar low" :class="{active: strength > 0}"></div>
    <div class="bar medium" :class="{active: strength > 1}"></div>
    <div class="bar high" :class="{active: strength > 2}"></div>
    高
  </div>
</template>
<script>
  export default {
    name: 'GrStrength',
    props: {
      strength: {
        type: Number,
        default: 0
      }
    }
  };

</script>

<style scoped lang="less">
  .strength {
    margin-left: 8px;
    font-size: 12px;
    color: #999;
  }

  .bar {
    display: inline-block;
    background-color: #ccc;
    height: 8px;
    width: 60px;
  }

  .low {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  .high {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  .bar.active {
    background-color: #31B968;
  }

</style>
