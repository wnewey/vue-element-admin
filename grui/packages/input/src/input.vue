<template>
  <el-input ref="zyInput" :size="size" :placeholder="placeholder" :value="value" @input="input($event)"
    :disabled="disabled" :class="inputClass" :type="type" :clearable="clearable" :show-password="password"
    :autocomplete="autocomplete" :rows="rows" :readonly="readonly" @change="change" @focus="focus"
    :maxlength="maxlength" :minlength="maxlength" :show-word-limit="showWordLimit">
    <slot name="prepend" slot="prepend"></slot>
    <slot name="append" slot="append"></slot>
  </el-input>
</template>
<script>
  import {
    Input
  } from 'element-ui';
  export default {
    name: 'GrInput',
    components: {
      ElInput: Input
    },
    props: {
      size: {
        type: String,
        default: ''
      },
      placeholder: {
        type: String
      },
      value: {
        type: String
      },
      disabled: Boolean,
      type: {
        type: String
      },
      clearable: {
        type: Boolean,
        default: true
      },
      password: {
        type: Boolean,
        default: false
      },
      autocomplete: {
        type: String,
        default: 'off'
      },
      rows: Number,
      readonly: Boolean,
      maxlength: {
        type: Number,
        default: -1
      },
      minlength: {
        type: Number,
        default: -1
      },
      showWordLimit: Boolean
    },
    computed: {
      inputClass() {
        var classes = ['gr-input'];
        var size = this.size || (this.$GRUI || {}).size;
        if (size === 'mini') {
          classes.push('gr-input--mini');
        }
        return classes.join(' ').replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
      }
    },
    mounted() {},
    methods: {
      input: function (val) {
        this.$emit('input', val);
      },
      change(val) {
        this.$emit('change', val);
      },
      focus() {
        if (this.readonly) {
          this.$refs.zyInput.blur();
        }
      }
    }
  };

</script>
<style scoped lang="less">
  @import "../../../theme/color.less";

  .gr-input {
    width: 100%;
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

  // /deep/ .el-input__inner:active,
  // /deep/ .el-input__inner:focus {
  //   border-color: @primaryColor;
  // }

  // /deep/ .el-input__inner:disabled {
  //   background: rgba(242, 242, 246, 1);
  //   border: 1px solid @disabledBgColor;
  // }

  // .gr-input--mini /deep/ .el-input__inner {
  //   height: 30px;
  //   line-height: 30px;
  //   padding-right: 5px;
  //   padding-left: 5px;
  // }

</style>
