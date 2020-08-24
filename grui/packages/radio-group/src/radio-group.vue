<template>
  <el-radio-group v-model="radio" @change="onChange">
    <el-radio v-for="(item, index) in radioInfoList" :key="index" :label="item.label">{{item.text}}</el-radio>
  </el-radio-group>
</template>
<script>
  import {
    RadioGroup,
    Radio
  } from 'element-ui';
  export default {
    name: 'GrRadioGroup',
    components: {
      ElRadioGroup: RadioGroup,
      ElRadio: Radio
    },
    props: {
      radioInfoList: {
        type: Array
      },
      value: [String, Number]
    },
    data() {
      return {
        radio: ''
      };
    },
    computed: {},
    mounted() {
      // value 值为空，取buttonInfoList【0】
      if (!this.value && this.value !== 0) {
        if (this.radioInfoList[0]) {
          this.radio = this.radioInfoList[0].label;
          this.$emit('input', this.radio);
        }
      } else {
        this.radio = this.value;
      }
    },
    methods: {
      onChange: function (val) {
        this.$emit('input', val);
        this.$emit('change', val);
      }
    },
    watch: {
      value(newVal) {
        this.radio = newVal;
      }
    }
  };

</script>
<style scoped lang="less">
</style>
