<template>
  <div class="navbar">
    <div>
      <!-- <hamburger id="hamburger-container" :is-active="sidebar.opened" class="hamburger-container"
        @toggleClick="toggleSideBar" /> -->
      <!-- <breadcrumb id="breadcrumb-container" class="breadcrumb-container" /> -->
      <div class="title">电子风险运营管理系统</div>
    </div>
    <!-- <div class="shortcuts">
      <template v-for="(tag,i) in tags">
        <el-tag style="cursor:pointer;margin-right:10px;margin-bottom:5px" type="primary" size="medium" :key="i"
          v-if="i<=5">{{tag}}
        </el-tag>
      </template>
      <el-button type="primary" class="el-icon-setting" @click="showConfig=true"></el-button>
    </div> -->
    <div class="right-menu">
      <change-theme style="margin-top:10px;margin-right:5px"></change-theme>
      <el-dropdown class="avatar-container right-menu-item hover-effect" trigger="click">
        <div class="avatar-wrapper">
          <div>系统管理员</div>
          <img src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80"
            class="user-avatar">
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="logout">
            <span style="display:block;">注销</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>

    <gr-dialog style="z-index:50000" title="选择需要展示的快捷功能" :visible="showConfig" @cancelClick="showConfig=false"
      @closeClick="showConfig=false" @okClick="showConfig=false">
      <div>最多可选10个，已选 6 个</div>
      <div class="config-panel ">
        <template v-for="(tag,i) in tags">
          <el-checkbox class="check-item" :checked="i<=5" :key="i">{{tag}}</el-checkbox>
        </template>
      </div>
    </gr-dialog>
  </div>
</template>

<script>
  import {
    mapGetters
  } from 'vuex';
  // import Breadcrumb from '../components/Breadcrumb';
  // import Hamburger from '../components/Hamburger';
  import ChangeTheme from '../components/changeTheme';

  export default {
    data() {
      return {
        showConfig: false,
        tags: ['黑名单管理', '白名单管理', '规则管理', '联机交易查询', '客户信息查询',
          '联机交易查询', '客户信息查询', '卡片信息查询', '账号信息查询', '终端信息查询', '商户信息查询', '警报生成查询',
          '客户警报管理', '商户警报管理', '客户案件管理', '商户案件管理', '法人案件统计表',
          '法人警报统计表', '事件风险统计表', '策略命中统计表', '欺诈时间汇总情况表'
        ]
      };
    },
    components: {
      // Breadcrumb,
      // Hamburger,
      ChangeTheme
    },
    computed: {
      ...mapGetters([
        'sidebar',
        'avatar',
        'device'
      ])
    },
    methods: {
      toggleSideBar() {
        this.$store.dispatch('app/toggleSideBar');
      },
      async logout() {
        // await this.$store.dispatch('user/logout');
        // this.$router.push(`/login?redirect=${this.$route.fullPath}`);
      }
    }
  };

</script>

<style lang="less" scoped>
  .navbar {
    height: 50px;
    overflow: hidden;
    // position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;

    background: #fff;
    box-shadow: 0 1px 4px rgba(0, 21, 41, .08);

    .title {
      line-height: 46px;
      font-size: 18px;
      color: #333;
      float: left;
      padding-left: 15px;
    }

    .hamburger-container {
      line-height: 46px;
      height: 100%;
      float: left;
      cursor: pointer;
      transition: background .3s;
      -webkit-tap-highlight-color: transparent;

      &:hover {
        background: rgba(0, 0, 0, .025)
      }
    }

    // .breadcrumb-container {
    //   float: left;
    // }

    // .errLog-container {
    //   display: inline-block;
    //   vertical-align: top;
    // }

    .right-menu {
      display: flex;
      align-items: center;
      margin-right: 15px;

      &:focus {
        outline: none;
      }

      .right-menu-item {
        display: inline-block;
        height: 100%;
        font-size: 18px;
        color: #5a5e66;
        vertical-align: text-bottom;

        &.hover-effect {
          cursor: pointer;
          transition: background .3s;

          &:hover {
            background: rgba(0, 0, 0, .025)
          }
        }
      }

      .avatar-container {
        // margin-right: 30px;

        .avatar-wrapper {
          margin-top: 5px;
          position: relative;
          display: flex;
          font-size: 14px;
          height: 50px;
          align-items: center;

          .user-avatar {
            cursor: pointer;
            width: 30px;
            height: 30px;
            border-radius: 10px;
          }

          .el-icon-caret-bottom {
            cursor: pointer;
            position: absolute;
            right: -20px;
            top: 25px;
            font-size: 12px;
          }
        }
      }
    }
  }

</style>
