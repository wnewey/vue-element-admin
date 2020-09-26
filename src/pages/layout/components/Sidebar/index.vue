<template>
  <div class="has-logo">
    <logo :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper" :style="{'background-color':$store.state.app.theme}">
      <el-menu :default-active="activeMenu" :collapse="isCollapse" unique-opened :collapse-transition="false"
        mode="vertical" :background-color="$store.state.app.theme">
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
