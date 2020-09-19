<template>
  <div id="app" v-loading="$store.state.app.layoutLoading" style="height:100vh">
    <router-view></router-view>
  </div>
</template>

<script>
  import {
    banBackSpace
  } from '@src/extends/utils/preventBackspace';

  export default {
    name: 'Entry',
    methods: {},
    mounted() {
      console.log('init');
      document.onkeypress = banBackSpace;
      // watermark({
      //   watermark_txt: '你要添加的水印'
      // });

      // var token = localStorage.getItemItem('token');
      // var accountNo = localStorage.getItemItem('accountNo');
      // if (!token) {
      //   window.location.href = '/';
      //   return;
      // }
      // if (!accountNo) {
      //   window.location.href = '/loginNew';
      //   return;
      // }
      window.onresize = () => {
        this.$root.eventHub.$emit('windowResize', '');
      };
      // this.$store.commit('updateMenus', menus || []);
    }
  };

</script>

<style lang="less">
  @import "./static/style/main.less";

</style>
