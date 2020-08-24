<template>
  <div class="content-panel">
    <div class="content-body" :style="`${!$slots.header?'top:0':''};${hideCopyright?'bottom:0':''}`">
      <div class="panel-header" :style="`${$slots.header?'padding-bottom:14px':''}`" ref="header">
        <slot name="header"></slot>
      </div>
      <div class="panel-content" ref="panelContent">
        <slot></slot>
      </div>
    </div>
    <div class="content-footer" v-if="!hideCopyright">
      Copyright © 2019 中油碧辟石油有限公司 | 粤ICP备15117113号-1
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GrContentPanel',
    props: {
      hideCopyright: Boolean
    }
  };

</script>

<style lang="less" scoped>
  .content-panel {
    display: flex;
    flex-direction: column;
    // min-width: 1200px;
    position: relative;

    .content-body {

      background-color: #fff;
      padding: 14px;
      display: flex;
      flex-direction: column;
      border-radius: 6px;
      flex: auto;
      position: absolute;
      bottom: 30px;
      top: 0;
      left: 0;
      right: 0;

      .panel-content {
        background-color: #F2F2F6;
        flex: auto;
        // margin-top: 14px;
        border-radius: 6px;
        padding: 14px;
        max-height: 100vh;
        overflow-y: auto;
      }
    }

    .content-footer {
      background-color: #F2F2F6;
      text-align: center;
      color: #999;
      font-size: 13px;
      padding: 14px 0px;
      padding-bottom: 0;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      margin: 0 auto;
    }

  }

</style>
