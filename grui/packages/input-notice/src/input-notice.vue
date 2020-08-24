<template>
  <div class="input-notice flex">
    <div class="input-notice-img" :style="`background:url(${noticeImg});background-size: 100%;`"></div>
    <div class="input-notice-msg">{{msg}}</div>
  </div>
</template>

<script>
  import noticeImg from './notice.png';
  export default {
    name: 'Gr-input-notice',
    props: {
      msg: String
    },
    data() {
      return {
        noticeImg
      };
    }
  };

</script>

<style scoped lang="less">
  .input-notice {
    align-items: center;

    .input-notice-img {
      height: 16px;
      min-width: 16px;
      max-width: 16px;
      margin: 0 8px;
    }

    .input-notice-msg {
      line-height: 1.2;
      color: #999;
      font-size: 12px;
    }
  }

</style>
