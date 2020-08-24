<script>
  import {
    Form
  } from 'element-ui';
  export default {
    name: 'GrForm',
    extends: Form,
    props: {
      'labelWidth': {
        default: '120px'
      }
    }
  };

</script>
<style scoped lang="less">
  @import "../../../theme/color.less";

  /deep/ .el-form-item.is-error .el-input__inner,
  /deep/ .el-form-item.is-error .el-input__inner:focus,
  /deep/ .el-form-item.is-error .el-textarea__inner,
  /deep/ .el-form-item.is-error .el-textarea__inner:focus {
    border-color: @errorColor;
  }

</style>>
