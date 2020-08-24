<template>
  <el-date-picker v-model="dateValue" :type="type" :placeholder="placeholder" :range-separator="rangeSeparator"
    :startPlaceholder="startPlaceholder" :endPlaceholder="endPlaceholder" :picker-options="pickerOptions"
    @change="onChange" :class="finalClass" :value-format="format">
  </el-date-picker>
</template>
<script>
  import {
    DatePicker
  } from 'element-ui';
  export default {
    name: 'GrDatePicker',
    components: {
      ElDatePicker: DatePicker
    },
    data() {
      return {
        dateValue: null
      };
    },
    props: {
      size: String,
      type: {
        type: String,
        default: 'date'
      },
      placeholder: {
        type: String,
        default: '选择日期'
      },
      rangeSeparator: {
        type: String,
        default: '至'
      },
      startPlaceholder: {
        type: String,
        default: '开始日期'
      },
      endPlaceholder: {
        type: String,
        default: '结束日期'
      },
      pickerOptions: {
        type: Object
      },
      format: {
        type: String,
        default: 'yyyy-MM-dd'
      },
      value: {
        type: [String, Array]
      }
    },
    computed: {
      finalClass() {
        var size = this.size || (this.$GRUI || {}).size;
        return (size === 'mini' ? 'date-picker--' + size : '');
      }
    },
    mounted() {},
    methods: {
      onChange(val) {
        this.$emit('input', val);
        this.$emit('change', val);
      }
    },
    watch: {
      value(newVal, oldVal) {
         this.dateValue = newVal;
      }
    }
  };

</script>
<style scoped lang="less">
  // .date-picker--mini {
  //   height: 30px;
  //   padding: 0;

  //   /deep/ .el-range-separator {
  //     line-height: 30px;
  //     height: 30px;
  //   }

  //   /deep/ .el-input__inner {
  //     height: 30px;
  //     line-height: 30px;
  //   }
  // }

</style>
