
# Pagination

## 使用示例
<template>
  <div style="padding:10px 0">
    <div style="margin-bottom:10px">
      <gr-pagination :total="115" @currentChange="currentChange"></gr-pagination>
      <div></div>
    </div>
    <div style="margin-bottom:10px">
      <gr-pagination :total="110" :current="3"></gr-pagination>
    </div>
    <div style="margin-bottom:10px">
      <gr-pagination :total="110" :page-size="20" :current="3"></gr-pagination>
    </div>
  </div>
</template>

 ```vue
  <gr-pagination :total="115" @currentChange="currentChange"></gr-pagination>
  <gr-pagination :total="110" :current="3"></gr-pagination>
  <gr-pagination :total="110" :page-size="20" :current="3"></gr-pagination>
 ```

## Attributes
| 参数        | 说明           | 类型    | 可选值                  | 默认值 |
| ---------- | ------------- | ------ | ---------------------- | ----- |
| total        | 数据总量          |  Number  | -     | 0 |
| current     | 当前所处页数   | Number | - | 1  |
| page-size     |分页大小   | Number | -                       | 10  |

## Events
| 事件名称           | 说明                        | 回调参数         | 
| ----------------- | -------------------------- | --------------- |
| currentChange     | 当前页面值变化时触发的事件      | 改变后的current值 |

<script>

  export default {
    methods:{
      currentChange(e){
      }
    }
  };
</script>