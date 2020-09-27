<template>
  <div class="has-logo">
    <hamburger :is-active="sidebar.opened" class="hamburger-container" :class="{collapse:isCollapse}"
      @toggleClick="toggleSideBar" />
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
  import Hamburger from '../Hamburger';

  export default {
    components: {
      SidebarItem,
      Logo,
      Hamburger
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
    methods: {
      toggleSideBar() {
        this.$store.dispatch('app/toggleSideBar');
      }
    },
    mounted() {}
  };

</script>

<style lang="less" scoped>
  .has-logo {
    position: relative;

    .hamburger-container {
      position: absolute;
      z-index: 10;
      cursor: pointer;

      &.collapse {
        left: 16px;
      }
    }
  }

</style>
