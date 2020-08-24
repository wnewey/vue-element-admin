<script>
  import {
    Checkbox
  } from 'element-ui';

  export default {
    name: 'GrCheckbox',
    extends: Checkbox
  };

</script>
<style scoped lang="less">
  @import "../../../theme/color.less";

  /deep/ .el-checkbox__input.is-checked .el-checkbox__inner,
  /deep/ .el-checkbox__input.is-indeterminate .el-checkbox__inner {
    background-color: @checkedColor;
    border-color: @checkedColor;
  }

  /deep/ .el-checkbox__input.is-checked+.el-checkbox__label {
    color: @contentColor;
  }

</style>
