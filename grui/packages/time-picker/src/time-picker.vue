<template>
  <el-time-picker
    :is-range="isRange"
    v-model="timeVal"
    :range-separator="rangeSeparator"
    :start-placeholder="startPlaceholder"
    :end-placeholder="endPlaceholder"
    @change="onChange"
    :class="finalClass"
    :value-format="format"
    :format="format"
  ></el-time-picker>
</template>
<script>
import { TimePicker } from 'element-ui';
export default {
  name: 'GrTimePicker',
  components: {
    ElTimePicker: TimePicker
  },
  data() {
    return {
      timeVal: ''
    };
  },
  props: {
    value: {
      type: String
    },
    isRange: {
      type: Boolean
    },
    rangeSeparator: {
      type: String,
      default: '至'
    },
    startPlaceholder: {
      type: String,
      default: '开始时间'
    },
    endPlaceholder: {
      type: String,
      default: '结束时间'
    },
    format: {
      type: String,
      default: 'HH:mm:ss'
    }
  },
  computed: {
    finalClass() {
      var size = this.size || (this.$GRUI || {}).size;
      return size === 'mini' ? 'time-picker--' + size : '';
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
      this.timeVal = newVal;
    }
  }
};
</script>
<style scoped lang="less">
// .time-picker--mini {
//   height: 30px;
//   padding: 0;

//   /deep/ .el-range-separator {
//     line-height: 30px;
//     height: 30px;
//   }
//   /deep/ .el-input__inner{
//     height: 30px;
//     line-height: 30px;
//   }
// }
</style>>
