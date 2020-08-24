
# Input

## 使用示例
<template>
  <div style="padding:10px 0">
    <div style="margin-bottom:10px">
      normal: <gr-input size='normal' v-model="value1" class="inputStyle"></gr-input>
    </div>
    <div style="margin-bottom:10px">
      small&nbsp;&nbsp;&nbsp;: <gr-input size='small' placeholder='请输入内容' v-model="value2" class="inputStyle">small</gr-input>
    </div>
    <div style="margin-bottom:10px">
      disabled：<gr-input size='normal' disabled v-model="value3" class="inputStyle"></gr-input>
    </div>
     <div style="margin-bottom:10px">
      textarea：<gr-input type='textarea' v-model="value4" class="inputStyle"></gr-input>
     </div>
     <div style="margin-bottom:10px">
      clearable：<gr-input size='normal' clearable v-model="value5" class="inputStyle">clearable</gr-input>
    </div>
    <div style="margin-bottom:10px">
      show password：<gr-input password v-model="value6" class="inputStyle">show password</gr-input>
    </div>
  </div>
</template>

 ```vue
  <gr-input size='normal' v-model="value1" class="inputStyle">normal</gr-input>
  <gr-input size='small' placeholder='请输入内容' v-model="value2" class="inputStyle">small</gr-input>
  <gr-input size='normal' disabled v-model="value3" class="inputStyle">disabled</gr-input>
  <gr-input type='textarea' v-model="value4" class="inputStyle">textarea</gr-input>
  <gr-input size='normal' clearable v-model="value5" class="inputStyle">clearable</gr-input>
  <gr-input password v-model="value6" class="inputStyle">show password</gr-input>

  <style scoped lang="less">
    .inputStyle {
      width: 200px;
     }
  </style>
 ```

## Attributes
| 参数        | 说明           | 类型    | 可选值                  | 默认值 |
| ---------- | ------------- | ------ | ---------------------- | ----- |
| size        | 尺寸          | string  | normal / small          | normal |
| placeholder | 输入框占位文本 | string | —                        |   —    |
| disabled    | 是否禁用状态   | boolean | —                       | false  |
| type        | 类型          | string | 	text，textarea 和其他 原生 input 的 type 值 | text |
| clearable   | 是否可清空     | boolean | —                       | false  |
| password    | 是否显示切换密码图标| boolean | —                   | false  |
| autocomplete | 原生属性，自动补全 | string  | on, off             | off |

## Slot
|name    	|说明|
| ----------------- | --------------------------  |
|prepend|输入框前面|
|append|输入框后面|

<script>
  export default {
    data(){
      return {
        value1: '',
        value2: '',
        value3: '',
        value4: '',
        value5: '',
        value6: '',
      };
    }
  };
</script>
<style scoped lang="less">
.inputStyle {
  width: 200px;
}
</style>