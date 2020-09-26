<template>
  <el-dialog :title="title" :visible.sync="visible" :class="finalClass" :width="width" :before-close="handleCloseClick"
    :close-on-click-modal="closeOnClickModal" :close-on-press-escape="closeOnPressEscape" lock-scroll
    @open="openDialog">
    <slot></slot>
    <span slot="footer" class="dialog-footer" v-if="showOK || showCancel">
      <gr-button @click="handleCancelClick" v-if="showCancel">{{cancelText}}</gr-button>
      <gr-button primary @click="handleOKClick" :disabled="!isOkBtnEnable" v-if="showOK">{{okText}}</gr-button>
    </span>
  </el-dialog>
</template>
<script>
  import Button from '../../button';
  import {
    Dialog
  } from 'element-ui';
  export default {
    name: 'GrDialog',
    components: {
      GrButton: Button,
      ElDialog: Dialog
    },
    props: {
      title: {
        type: String
      },
      visible: {
        type: Boolean
      },
      width: {
        type: String
      },
      cancelText: {
        type: String,
        default: '取消'
      },
      okText: {
        type: String,
        default: '确定'
      },
      showOK: {
        type: Boolean,
        default: true
      },
      showCancel: {
        type: Boolean,
        default: true
      },
      isOkBtnEnable: {
        type: Boolean,
        default: true
      },
      closeOnClickModal: Boolean,
      closeOnPressEscape: Boolean,
      showHeader: {
        type: Boolean,
        default: true
      }
    },
    computed: {
      finalClass() {
        if (!this.showHeader) {
          return 'hideheader';
        }
        return '';
      }
    },
    mounted() {},
    methods: {
      handleCancelClick(evt) {
        this.$emit('cancelClick', evt);
      },
      handleOKClick(evt) {
        this.$emit('okClick', evt);
      },
      handleCloseClick(evt) {
        this.$emit('closeClick', evt);
      },
      openDialog() {
        this.$emit('openDialog');
      }
    }
  };

</script>
<style scoped lang="less">
  @import "../../../theme/color.less";

  .hideheader /deep/ .el-dialog__header {
    display: none;
  }

  /deep/ .el-dialog__header {
    position: relative;

    &::after {
      position: absolute;
      content: '';
      left: 20px;
      right: 20px;
      bottom: 0;
      height: 1px;
      background: @lightBorderColor;
    }
  }

  /deep/ .el-dialog__footer {
    text-align: center
  }

  // /deep/ p {
  //   text-indent: 2em
  // }

</style>
