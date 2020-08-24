<template>
  <el-cascader-panel ref="cascaderPanel" :options="options" v-model="cascaderValue" :props="props" @change="onChange"
    @expand-change="expandChange" class="zyCascaderPanel">
  </el-cascader-panel>
</template>
<script>
  import {
    CascaderPanel
  } from 'element-ui';

  export default {
    name: 'GrCascaderPanel',
    components: {
      ElCascaderPanel: CascaderPanel
    },
    props: {
      options: {
        type: Array
      },
      props: {
        type: Object
      },
      value: {
        type: Array
      }
    },
    data() {
      return {
        cascaderValue: []
      };
    },
    mounted() {
      if (this.value) {
        this.cascaderValue = this.value;
        if (this.cascaderValue.length > 0) {
          this.expandNodes(this.cascaderValue[0]);
        }
      } else {
        if (this.options && this.options[0]) {
          this.expandNodes(this.options[0].value);
        }
      }
    },
    methods: {
      onChange(val) {
        this.$emit('input', val);
        this.$emit('change', val);
      },
      expandChange(values) {
        var node = this.$refs.cascaderPanel.getNodeByValue(values[values.length - 1]);
        if (node && node.children && node.children.length > 0) {
          this.$refs.cascaderPanel.handleExpand(node.children[0]);
        }
        this.$emit('expandChange', values);
      },
      expandNodes(nodeValue) {
        if (nodeValue) {
          var node = this.$refs.cascaderPanel.getNodeByValue(nodeValue);
          this.$refs.cascaderPanel.handleExpand(node);
          if (node.children && node.children.length > 0) {
            var childNode = this.$refs.cascaderPanel.getNodeByValue(node.children[0].value);
            this.$refs.cascaderPanel.handleExpand(childNode);
          }
        }
      }
    },
    watch: {
      value(newVal) {
        this.cascaderValue = newVal;
      }
    }
  };

</script>
<style scoped lang="less">
  @import "../../../theme/color.less";

  /deep/ .el-scrollbar__wrap {
    overflow-x: hidden;
  }

  // /deep/ .el-cascader-node.is-selectable.in-active-path {
  //   background-color: @selectedNodeColor;
  // }

  /deep/ .el-cascader-node.in-active-path,
  /deep/ .el-cascader-node.is-active,
  /deep/ .el-cascader-node.is-selectable.in-checked-path {
    color: @contentColor;
    font-weight: normal !important;
  }

  // /deep/ .el-checkbox__input.is-checked .el-checkbox__inner,
  // /deep/ .el-checkbox__input.is-indeterminate .el-checkbox__inner {
  //   background-color: @checkedColor;
  //   border-color: @checkedColor;
  // }

</style>
