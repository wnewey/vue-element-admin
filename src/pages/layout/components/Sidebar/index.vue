<template>
  <div class="has-logo">
    <logo :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu :default-active="activeMenu" :collapse="isCollapse" :background-color="variables.menuBg"
        :text-color="variables.menuText" unique-opened :active-text-color="variables.menuActiveText"
        :collapse-transition="false" mode="vertical">
        <sidebar-item v-for="route in permission_routes" :key="route.path" :item="route" :base-path="route.path" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
  import {
    mapGetters
  } from 'vuex';
  import Logo from './Logo';
  import SidebarItem from './SidebarItem';
  export default {
    components: {
      SidebarItem,
      Logo
    },
    data() {
      return {
        variables: {
          menuBg: '#304156',
          menuText: '#bfcbd9',
          menuActiveText: '#d28a4b'
        },
        routes: []
      };
    },
    computed: {
      ...mapGetters([
        'sidebar',
        'permission_routes'
      ]),
      activeMenu() {
        const route = this.$route;
        const {
          meta,
          path
        } = route;
        // if set path, the sidebar will highlight the path you set
        if (meta.activeMenu) {
          return meta.activeMenu;
        }
        return path;
      },
      isCollapse() {
        return !this.sidebar.opened;
      }
    },
    mounted() {}
  };

</script>
