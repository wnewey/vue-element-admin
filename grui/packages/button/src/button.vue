<template>
  <el-button :block="block" :type="finalType" :plain="finalPlain" :disabled="disabled" @click="handleClick"
    :class="buttonClass">
    <slot></slot>
  </el-button>
</template>
<script>
  import {
    Button
  } from 'element-ui';
  export default {
    name: 'GrButton',
    components: {
      ElButton: Button
    },
    props: {
      primary: Boolean,
      type: String,
      plain: Boolean,
      size: String,
      block: Boolean,
      disabled: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      finalPlain() {
        if (this.type !== 'primary') {
          return false;
        }
        return this.plain;
      },
      finalType() {
        return this.type ? this.type : (this.primary ? 'primary' : 'default');
      },
      buttonClass() {
        var size = this.size || (this.$GRUI || {}).size;
        var classes = ['gr-button' + (this.primary ? '--primary' : '--default'),
          (size === 'mini' ? 'gr-button--' + size : ''),
          (this.block ? 'gr-button--block' : '')
        ];
        return classes.join(' ').replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
      }
    },
    methods: {
      handleClick(evt) {
        this.$emit('click', evt);
      }
    }
  };

</script>

<style scoped lang="less">
  @import "../../../theme/color.less";

  .gr-button {
    border-color: #ccc;
    min-width: 88px;
    height: 40px;
    padding: 0 16px;
    font-size: 16px;
    font-weight: 400;
  }

  .gr-button--block {
    width: 100%;
  }

  // .gr-button--primary {
  //   background: @primaryColor;
  //   border-color: @primaryColor;

  //   &:hover {
  //     background: @hoverColor;
  //     border-color: @hoverColor;
  //   }

  //   &:active {
  //     background: @activeColor;
  //     border-color: @activeColor;
  //   }
  // }

  // .gr-button--mini {
  //   padding: 8px 16px;
  //   font-size: 13px;
  //   min-width: 0;
  // }

</style>
