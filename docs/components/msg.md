# Msg

## 使用指引

全局使用
```vue
// 入口 js 引入
import Msg from '@src/zyui/packages/msg';
Vue.use(Msg);

// 页面使用
this.msgSuccess(msg)
this.msgWarning(msg)
this.msgError(msg)
this.msg("info")
```

页面使用
```vue
import Msg from '@src/zyui/packages/msg';

Msg.msgSuccess(msg)
Msg.msgWarning(msg)
Msg.msgError(msg)
Msg.msg("info")
```


## 使用示例
<template>
  <div style="padding:10px 0">
    <div style="margin-bottom:10px">
      <gr-button @click="showMsg()">info</gr-button>
      <gr-button primary @click="showMsg('success')">success</gr-button>
      <gr-button type="warning" @click="showMsg('warning')">warning</gr-button>
      <gr-button type="danger" @click="showMsg('error')">error</gr-button>
    </div>
  </div>
</template>

 ```vue
  <gr-button @click="showMsg()">info</gr-button>
  <gr-button primary @click="showMsg('success')">success</gr-button>
  <gr-button type="warning" @click="showMsg('warning')">warning</gr-button>
  <gr-button type="danger" @click="showMsg('error')">error</gr-button>

<script>
  export default {
    methods:{
       showMsg(type,msg){
          switch(type){
            case "success":
              this.msgSuccess(msg)
              break;
            case "warning":
              this.msgWarning(msg)
              break;
            case "error":
              this.msgError(msg)
              break;
            default:
              this.msg("info")
          }
       }
    }
  };
</script>
 ```

<script>
  export default {
    methods:{
       showMsg(type,msg){
          switch(type){
            case "success":
              this.msgSuccess(msg)
              break;
            case "warning":
              this.msgWarning(msg)
              break;
            case "error":
              this.msgError(msg)
              break;
            default:
              this.msg("info")
          }
       }
    }
  };
</script>