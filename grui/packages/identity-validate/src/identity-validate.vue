<template>
  <gr-form :model="formModel" labelWidth="120px">
    <gr-form-item :label="phoneLabel" v-if="validType == 1">
      {{phoneNum|hidemobile}} <gr-link-button @click.native="validTypeChange(2)">切换邮箱认证</gr-link-button>
    </gr-form-item>
    <gr-form-item :label="phoneCodeLabel" v-if="validType == 1">
      <gr-input v-model="formModel.validCode" @input="inputChange" class="inputStyle" placeholder="请输入短信验证码">
      </gr-input>
      <gr-button @click="generateCode" ref="smsSend" :countdown="smsCount">获取验证码</gr-button>
    </gr-form-item>
    <gr-form-item :label="emailLabel" v-if="validType == 2">
      {{email}} <gr-link-button @click.native="validTypeChange(1)">切换手机认证</gr-link-button>
    </gr-form-item>
    <gr-form-item :label="emailCodeLabel" v-if="validType == 2">
      <gr-input v-model="formModel.validCode" @input="inputChange" class="inputStyle" placeholder="请输入邮箱验证码">
      </gr-input>
      <gr-button @click="generateCode" ref="emailSend" :countdown="emailCount">获取验证码</gr-button>
    </gr-form-item>
    <slot></slot>
  </gr-form>
</template>
<script>
  import Form from '../../form';
  import FormItem from '../../form-item';
  import Input from '../../input';
  import Button from '../../button';
  import LinkButton from '../../link-button';

  export default {
    name: 'GrIdentityValidate',
    components: {
     GrForm: Form,
     GrFormItem: FormItem,
     GrInput: Input,
     GrButton: Button,
     GrLinkButton: LinkButton
    },
    data() {
      return {
        validType: 1,
        smsCount: 60,
        emailCount: 60,
        formModel: {
          validCode: ''
        },
        phoneLabel: '当前手机号',
        phoneCodeLabel: '短信验证码',
        emailLabel: '当前邮箱',
        emailCodeLabel: '邮箱验证码'
      };
    },
    props: {
      phoneNum: {
        type: String
      },
      email: {
        type: String
      },
      value: {
        type: String
      }
    },
    methods: {
      generateCode() {
        if (this.validType === 1) {
          this.$refs.smsSend.pass = true; // 倒计时触发
          // 短信发送
          this.http.post({
            url: '/user/sendSmsCode',
            data: {
              phone: this.phoneNum,
              smsType: '05'
            },
            error: (err) => {
              this.msgError(err.resMsg || '请求异常');
            }
          });
        } else {
          this.$refs.emailSend.pass = true; // 倒计时触发
          // 邮件发送
          this.http.post({
            url: '/user/sendEmail',
            data: {
              email: this.email,
              type: '05'
            },
            error: (err) => {
              this.msgError(err.resMsg || '请求异常');
            }
          });
        }
      },
      validTypeChange(validType) {
        this.validType = validType;
        this.formModel.validCode = '';
        this.$emit('input', '');
        this.$emit('validTypeChange', this.validType);
        var that = this;
        setTimeout(() => {
          if (validType === 1) {
            that.smsCount = 60;
            that.emailCount = 0;
          } else {
            that.smsCount = 0;
            that.emailCount = 60;
          }
        }, 100);
      },
      inputChange(val) {
        this.$emit('input', val);
      }
    },
    mounted() {
      var size = (this.$GRUI || {}).size;
      if (size === 'mini') {
        this.phoneLabel = this.phoneLabel + '：';
        this.phoneCodeLabel = this.phoneCodeLabel + '：';
        this.emailLabel = this.emailLabel + '：';
        this.emailCodeLabel = this.emailCodeLabel + '：';
      }
    }
  };

</script>
<style scoped>
  .inputStyle {
    width: 300px !important;
  }

</style>
