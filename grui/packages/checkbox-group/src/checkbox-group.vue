<template>
  <el-checkbox-group v-model="checkValue" @change="onChange">
    <el-checkbox v-for="(item, index) in checkboxInfoList" :key="index" :label="item.label" :disabled="item.disabled">
      {{item.text}}</el-checkbox>
      <slot></slot>
  </el-checkbox-group>
</template>
<script>
  import {
    Checkbox,
    CheckboxGroup
  } from 'element-ui';

  export default {
    name: 'GrCheckboxGroup',
    components: {
      ElCheckbox: Checkbox,
      ElCheckboxGroup: CheckboxGroup
    },
    data() {
      return {
        checkValue: []
      };
    },
    props: {
      checkboxInfoList: {
        type: Array,
        require: true
      },
      value: {
        type: Array
      }
    },
    mounted() {
      if (this.value && this.value.length > 0) {
        this.checkValue = this.value;
      }
      this.$emit('change', this.checkValue);
    },
    methods: {
      onChange(val) {
        this.$emit('input', val);
        this.$emit('change', val);
      }
    },
    watch: {
      value(newVal, OldVal) {
        this.checkValue = newVal;
      }
    }
  };

</script>
<style scoped lang="less">
  @import "../../../theme/color.less";

  // /deep/ .el-checkbox__input.is-checked .el-checkbox__inner,
  // /deep/ .el-checkbox__input.is-indeterminate .el-checkbox__inner {
  //   background-color: @checkedColor;
  //   border-color: @checkedColor;
  // }

  // /deep/ .el-checkbox__input.is-checked+.el-checkbox__label {
  //   color: @contentColor;
  // }

</style>
