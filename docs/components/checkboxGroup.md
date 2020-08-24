
# CheckboxGroup

## 使用示例
<template>
  <div style="padding:10px 0">
    <gr-checkbox-group v-model="groupValue" :checkboxInfoList="checkboxInfoList"></gr-checkbox-group>
  </div>
</template>

 ```vue
   <gr-checkbox-group v-model="groupValue" :checkboxInfoList="checkboxInfoList">
   </gr-checkbox-group>

 ```

## Attributes
| 参数        | 说明           | 类型    | 可选值                  | 默认值 |
| ---------- | ------------- | ------ | ---------------------- | ----- |
| checkboxInfoList| 复选框数据源,具体配置如下表 | array  | —   | — |

## checkboxInfoList
| 参数        | 说明           | 类型    | 可选值                  | 默认值 |
| ---------- | ------------- | ------ | ---------------------- | ----- |
| label| 选中状态的值 | string  | —   | — |
| text| 复选框文本 | string     | —   | — |
| disabled| 就否禁用 | boolean  | —   | false |

## Events
|事件名称	    |说明	  |回调参数 |
| ---------- | ------------- | ------ |
|change	     |当绑定值变化时触发的事件	|更新后的值 |

<script>

  export default {
    data(){
      return {
        checkboxInfoList: [
          {label: '0', text: '选项1'},
          {label: '1', text: '选项2'}, 
          {label: '2', text:'选项禁用', disabled: true}
        ],
        groupValue: []
      };
    },
    methods: {
    }
  };
</script>
<style lang="less" scoped>

</style>