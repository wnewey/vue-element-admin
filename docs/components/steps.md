
# Steps

## 使用示例
<template>
  <div style="padding:10px 0">
    <div style="margin-bottom:10px">
      <gr-steps :steps="steps" :active="1"></gr-steps>
    </div>
     <div style="margin-bottom:10px">
     <div>style2</div>
      <gr-steps :steps="steps" :active="2" styleType="style2"></gr-steps>
    </div>
  </div>
</template>

 ```vue
 <gr-steps :steps="steps" :active="2"></gr-steps>
 <gr-steps :steps="steps" :active="2" styleType="style2"></gr-steps>
 ```


<div style="padding:10px 0">
    <div style="margin-bottom:10px">
      <gr-steps-vertical :steps="steps" :active="3"></gr-steps-vertical>
    </div>
</div>

 ```vue
<gr-steps-vertical :steps="steps" :active="3"></gr-steps-vertical>
 ```

## Attributes
| 参数        | 说明           | 类型    | 可选值                  | 默认值 |
| ---------- | ------------- | ------ | ---------------------- | ----- |
| active     | 当前步骤        | number  |         -     | 1 |
| steps      | 步骤信息   | Array [{title:""}] | -     | - |
| activeColor  | 已激活的颜色   | String | -                    | #31b968  |
| styleType    | 样式类型   | String | style1,style2               | style1  |

<script>
  export default {
    data(){
      return {
        steps:[{title:"步骤1"},{title:"步骤2"},{title:"步骤3"},{title:"步骤4"}]
      }
    }
  };
</script>