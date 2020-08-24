<template>
  <div id="app" v-loading="permission_routes.length==0" style="min-height:100vh">
    <router-view></router-view>
  </div>
</template>

<script>
  import {
    banBackSpace
  } from '@src/extends/utils/preventBackspace';

  import {
    mapGetters
  } from 'vuex';

  import {
    getRoutes
  } from '@api/role';

  // import menus from '../mock/role/routes';

  export default {
    name: 'Entry',
    computed: {
      ...mapGetters([
        'permission_routes'
      ])
    },
    methods: {
      loadingInitInfo() {
        // 清空原有路由表
        // 加载用户和菜单信息
        getRoutes().then((menus) => {
          setTimeout(() => {
            this.$store.dispatch('permission/generateRoutes', menus).then((accessRoutes) => {
              this.$router.addRoutes(accessRoutes);
              this.$store.dispatch('tagsView/delAllViews', {
                root: true
              });
            });
          }, 2000);
        });
      }
    },
    mounted() {
      document.onkeypress = banBackSpace;
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
      //  加载菜单
      this.loadingInitInfo();
      // this.$store.commit('updateMenus', menus || []);
    }
  };

</script>

<style lang="less">
  @import "./static/style/main.less";

  .el-tooltip__popper.is-dark {
    background: #FFF;
    color: #303133;
    border: 1px solid #303133;
  }

</style>
