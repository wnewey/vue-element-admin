<template>
  <el-form-item :label="label" :prop="prop" :class="formItemClass" :rules="rules" :required="required">
    <slot></slot>
  </el-form-item>
</template>
<script>
  import {
    FormItem
  } from 'element-ui';
  export default {
    name: 'GrFormItem',
    components: {
      ElFormItem: FormItem
    },
    data() {
      return {};
    },
    props: {
      label: {
        type: String
      },
      prop: {
        type: String
      },
      size: {
        type: String,
        default: ''
      },
      rules: {
        type: Object
      },
      required: Boolean
    },
    computed: {
      formItemClass() {
        var classes = ['gr-form-item'];
        var size = this.size || (this.$GRUI || {}).size;
        if (size === 'mini') {
          classes.push('gr-form-item--mini');
        }
        return classes.join(' ').replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
      }
    },
    methods: {}
  };

</script>
<style scoped lang="less">
  @import "../../../theme/color.less";

  .gr-form-item label {
    font-size: 13px;
  }

  // /deep/ .el-form-item__error {
  //   color: @errorColor;
  // }

  // .gr-form-item--mini {
  //   margin-bottom: 5px;
  // }

  .gr-form-item--mini /deep/ .el-form-item__label,
  .gr-form-item--mini /deep/ .el-input__icon,
  .gr-form-item--mini /deep/ .el-form-item__content {
    line-height: 30px;
  }

</style>
