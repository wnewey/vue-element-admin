<template>
  <el-switch v-model="switchVal" active-color="#13ce66" @change="switchChange">
  </el-switch>
</template>
<script>
  import {
    Switch
  } from 'element-ui';
  export default {
    name: 'GrSwitch',
    components: {
      ElSwitch: Switch
    },
    data() {
      return {
        switchVal: true
      };
    },
    props: {
      value: {
        type: Boolean
      }
    },
    mounted() {
      this.switchVal = this.value;
    },
    methods: {
      switchChange(val) {
        this.$emit('input', val);
        this.$emit('change', val);
      }
    },
    watch: {
      value(newVal, oldVal) {
        this.switchVal = newVal;
      }
    }
  };

</script>
