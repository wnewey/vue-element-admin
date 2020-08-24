
# Button

## 使用示例
<template>
  <div style="padding:10px 0">
    <div style="margin-bottom:10px">
      <gr-button primary>primary</gr-button>
      <gr-button primary disabled>primary disabled</gr-button>
    </div>
    <div style="margin-bottom:10px">
      <gr-button primary plain>primary plain</gr-button>
      <gr-button primary plain disabled>primary plain disabled</gr-button>
    </div>
    <div style="margin-bottom:10px">
      <gr-button>normal</gr-button>
      <gr-button disabled>normal disabled</gr-button>
      <gr-button type="danger">danger</gr-button>
      <gr-button type="warning">warning</gr-button>
    </div>
    <div style="margin-bottom:10px">
      <gr-button size="small">normal size:small</gr-button>
    </div>
    <div>
      <gr-button block>block</gr-button>
    </div>
  </div>
</template>

 ```vue
  <gr-button primary>primary</gr-button>
  <gr-button primary disabled>primary disabled</gr-button>
  <gr-button primary plain>primary plain</gr-button>
  <gr-button primary plain disabled>primary plain disabled</gr-button>
  <gr-button>normal</gr-button>
  <gr-button type="danger">danger</gr-button>
  <gr-button type="warning">warning</gr-button>
  <gr-button block>block</gr-button>
  <gr-button disabled>normal disabled</gr-button>
  <gr-button size="small">normal size:small</gr-button>
 ```

## Attributes
| 参数        | 说明           | 类型    | 可选值                  | 默认值 |
| ---------- | ------------- | ------ | ---------------------- | ----- |
| size        | 尺寸          | string  | normal / small          | normal |
| type     | 类型   | string | primary/warning/danger             | ''  |
| primary     | 是填色按钮   | boolean | —                       | false  |
| plain       | 是否线性按钮   | boolean | —                       | false  |
| disabled    | 是否禁用状态   | boolean | —                       | false  |
| block      | 是否横向铺满   | boolean | —                       | false |

<script>
  export default {
  };
</script>