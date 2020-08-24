
# AutoSizeText
指定宽度时，文字自动缩放大小

## 使用示例
<template>
  <div style="padding:10px 0;background-color:#ccc;width:300px">
    <gr-auto-size-text lineWidth="300px" fontSize="18px">
      <div>文字未超长123123</div>
    </gr-auto-size-text>
  </div>

  <div style="padding:10px 0;margin-top:10px;background-color:#ccc;width:300px">
    <gr-auto-size-text lineWidth="300px" fontSize="18px">
     <div>文字超长文字超长文字超长文字超长1123123</div>
    </gr-auto-size-text>
  </div>
</template>

 ```vue
 <gr-auto-size-text lineWidth="200px" fontSize="18px">
    <div>文字未超长123123</div>
  </gr-auto-size-text>

  <gr-auto-size-text lineWidth="200px" fontSize="18px">
    <div>文字超长文字超长文字超长123123</div>
  </gr-auto-size-text>
 ```

## Attributes
| 参数        | 说明           | 类型    | 可选值                  | 默认值 |
| ---------- | ------------- | ------ | ---------------------- | ----- |
| lineWidth        | 显示区宽度          | string  |  -   |  -|
| fontSize     | 正常字体大小   | string | —                       | false  |
| minFontSize       | 最小缩放到的字体大小   | string | —                       | 12px  |

<script>
  export default {
  };
</script>
