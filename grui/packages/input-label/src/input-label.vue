<template>
  <div class="flex">
    <div class="itemText">
      <span v-if="!showModify">{{labelText}}</span>
      <gr-input v-model="inputValue" v-if="showModify" @input="input($event)"></gr-input>
    </div>
    <div align="right">
      <gr-link-button v-if="!showModify" @click.native.prevent="modifyClick">{{modifyText}}</gr-link-button>
      <gr-link-button v-if="showModify" @click.native.prevent="okClick">{{okText}}</gr-link-button>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'GrInputLabel',
    components: {},
    props: {
      labelText: {
        type: String
      },
      modifyText: {
        type: String,
        default: '修改'
      },
      okText: {
        type: String,
        default: '确定'
      },
      required: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        inputValue: '',
        showModify: false
      };
    },
    computed: {},
    mounted() {},
    methods: {
      input: function (val) {
        this.$emit('input', val);
      },
      modifyClick: function () {
        this.showModify = true;
        this.inputValue = this.labelText;
      },
      okClick: function () {
        if (this.$props.required && this.inputValue === '') {
          this.msgError('输入值不能为空');
          return false;
        }
        this.showModify = false;
        this.$emit('okClick');
      }
    }
  };

</script>
<style scoped lang="less">
  .itemText {
    width: 320px;
  }

</style>
