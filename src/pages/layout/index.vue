<template>
  <div :class="classObj" class="app-wrapper">
    <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside" />
    <sidebar class="sidebar-container" />
    <div class="hasTagsView main-container">
      <div class="fixed-header">
        <navbar />
        <tags-view />
      </div>
      <app-main :isRouterAlive="isRouterAlive" />
      <!-- <right-panel v-if="showSettings">
        <settings />
      </right-panel> -->
    </div>
  </div>
</template>

<script>
  // import RightPanel from './components/RightPanel';
  import AppMain from './components/AppMain';
  import Navbar from './components/Navbar';
  import Sidebar from './components/Sidebar';
  import TagsView from './components/TagsView';
  import ResizeMixin from './mixin/ResizeHandler';
  import {
    mapState
  } from 'vuex';

  export default {
    name: 'Layout',
    components: {
      AppMain,
      Navbar,
      // RightPanel,
      Sidebar,
      TagsView
    },
    mixins: [ResizeMixin],
    data() {
      return {
        isRouterAlive: true
      };
    },
    computed: {
      ...mapState({
        sidebar: state => state.app.sidebar,
        device: state => state.app.device
        // showSettings: state => state.settings.showSettings,
        // needTagsView: state => state.settings.tagsView,
        // fixedHeader: state => state.settings.fixedHeader
      }),
      classObj() {
        return {
          hideSidebar: !this.sidebar.opened,
          openSidebar: this.sidebar.opened,
          withoutAnimation: this.sidebar.withoutAnimation,
          mobile: this.device === 'mobile'
        };
      }
    },
    provide() {
      return {
        reload: this.reload
      };
    },
    methods: {
      handleClickOutside() {
        this.$store.dispatch('app/closeSideBar', {
          withoutAnimation: false
        });
      },
      reload() {
        var curView = this.$route;
        this.$store.commit('tagsView/DEL_CACHED_VIEW', curView);
        this.isRouterAlive = false;
        this.$nextTick(function () {
          this.isRouterAlive = true;
          this.$store.commit('tagsView/ADD_CACHED_VIEW', curView);
        });
      }
    }
  };

</script>

<style lang="less">
  @import "../../static/style/variables.less";
  @import "./layout.less";

  .app-wrapper {

    &:after {
      content: "";
      display: table;
      clear: both;
    }

    position: relative;
    height: 100%;
    width: 100%;

    &.mobile.openSidebar {
      position: fixed;
      top: 0;
    }
  }

  .drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 999;
  }

  .fixed-header {
    position: fixed;
    top: 0;
    right: 0;
    left: @sideBarWidth;
    z-index: 9;
    transition: width 0.28s;
  }

  .hideSidebar .fixed-header {
    left: 54px;
  }

  .mobile .fixed-header {
    left: 0
  }

</style>
