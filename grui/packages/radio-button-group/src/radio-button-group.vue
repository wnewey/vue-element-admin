<template>
  <el-radio-group v-model="tabPosition" :class="radioGroupClass" @change="onChange">
    <el-radio-button v-for="(item, index) in buttonInfoList" :key="index" :label="item.label">{{item.text}}
    </el-radio-button>
  </el-radio-group>
</template>
<script>
  import {
    RadioButton,
    RadioGroup
  } from 'element-ui';
  export default {
    name: 'GrRadioButtonGroup',
    components: {
      ElRadioButton: RadioButton,
      ElRadioGroup: RadioGroup
    },
    props: {
      buttonInfoList: {
        type: Array,
        require: true
      },
      size: {
        type: String,
        default: 'normal'
      },
      bgType: {
        type: String,
        default: 'normal'
      },
      value: [String, Number]
    },
    data() {
      return {
        tabPosition: ''
      };
    },
    computed: {
      radioGroupClass() {
        var classes = ['gr-radio-button-group'];
        var bgType = this.bgType || (this.$GRUI || {}).bgType;
        var size = this.size;
        if (bgType === 'light') {
          classes.push('gr-radio-button-group--light');
        }
        if (size === 'mini') {
          classes.push('gr-radio-button-group--mini');
        }
        return classes.join(' ').replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
      }
    },
    mounted() {
      // value 值为空，取buttonInfoList【0】
      if (!this.value && this.value !== 0) {
        if (this.buttonInfoList[0]) {
          this.tabPosition = this.buttonInfoList[0].label || '';
          this.$emit('input', this.tabPosition);
        }
      } else {
        this.tabPosition = this.value;
      }
      this.$emit('change', this.tabPosition);
    },
    methods: {
      onChange: function (val) {
        this.$emit('input', val);
        this.$emit('change', val);
      }
    },
    watch: {
      value(newVal) {
        this.tabPosition = this.value;
      }
    }
  };

</script>
<style scoped lang="less">
  @import "../../../theme/color.less";

  /deep/ .el-radio-button,
  .el-radio-button__inner {
    border-radius: 4px 0px 0px 4px;
  }

  /deep/ .el-radio-button__inner {
    padding: 10px 21px;
  }

  /deep/ .el-radio-button__orig-radio:checked+.el-radio-button__inner {
    background-color: rgba(49, 185, 104, 1);
  }

  .gr-radio-button-group--light /deep/ .el-radio-button__orig-radio:checked+.el-radio-button__inner {
    background-color: @modeBdColor;
    color: @primaryColor;
  }

  // .gr-radio-button-group--mini /deep/ .el-radio-button__inner {
  //   padding: 7px 10px;
  //   min-width: 60px;
  // }

</style>
