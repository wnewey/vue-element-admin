<template>
  <el-select :placeholder="placeholder" :value="value" @input="input($event)" @change="change" :disabled="disabled"
    :options="options" :class="selectClass">
    <el-option v-for="(item,index) in options" :key="index" :label="item.label||item" :value="computValue(item, index)"
      :disabled="item.disabled">
    </el-option>
  </el-select>
</template>
<script>
  import {
    Select,
    Option
  } from 'element-ui';
  export default {
    name: 'GrSelect',
    components: {
      ElSelect: Select,
      ElOption: Option
    },
    props: {
      value: {
        type: [String, Number]
      },
      size: {
        type: String,
        default: ''
      },
      placeholder: {
        type: String
      },
      options: {
        type: [Array, Object]
      },
      disabled: Boolean
    },
    computed: {
      selectClass() {
        var classes = ['gr-select'];
        var size = this.size || (this.$GRUI || {}).size;
        if (size === 'mini') {
          classes.push('gr-select--mini');
        }
        return classes.join(' ').replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
      }
    },
    methods: {
      input: function (val) {
        this.$emit('input', val);
      },
      change: function (val) {
        this.$emit('change', val);
      },
      computValue(item, index) {
        if (item.value !== undefined && item.value !== null) {
          return item.value;
        } else {
          return index;
        }
      }
    }
  };

</script>
<style scoped lang="less">
  @import "../../../theme/color.less";

  .gr-select {
    // width: 100%;
  }

  // /deep/ .el-input__inner {
  //   height: 40px;
  //   color: @contentColor;
  //   line-height: 40px;
  //   background: @inputDefaultBgColor;
  //   border: 1px solid @inputDefaultBorderColor;
  // }

  // /deep/ .el-input__inner:hover {
  //   border-color: @inputHoverBorderColor;
  // }

  // .el-select /deep/ .el-input.is-focus .el-input__inner,
  // /deep/ .el-input__inner:active,
  // /deep/ .el-input__inner:focus {
  //   border-color: @primaryColor;
  // }

  // /deep/ .el-input__inner:disabled {
  //   background: rgba(242, 242, 246, 1);
  //   border: 1px solid @disabledBgColor;
  // }

  // .gr-select--mini /deep/ .el-input__inner {
  //   height: 30px;
  //   line-height: 30px;
  // }

</style>
