# Layout 布局

## 使用示例

参照了 Bootstrap 的 响应式设计，预设了五个响应尺寸：xs、sm、md、lg 和 xl。


<template>
  <gr-row :gutter="10">
    <gr-col :span="6"><div class="grid-content bg"></div></gr-col>
    <gr-col :span="6" :offset="6"><div class="grid-content bg"></div></gr-col>
  </gr-row>
  <div style="height:10px"></div>
  <gr-row :gutter="10">
    <gr-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg"></div></gr-col>
    <gr-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-light"></div></gr-col>
    <gr-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg"></div></gr-col>
    <gr-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-light"></div></gr-col>
  </gr-row>
</template>

```vue
<gr-row :gutter="10">
    <gr-col :span="6"><div class="grid-content bg"></div></gr-col>
    <gr-col :span="6" :offset="6"><div class="grid-content bg"></div></gr-col>
</gr-row>

<gr-row :gutter="10">
    <gr-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg"></div></gr-col>
    <gr-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-light"></div></gr-col>
    <gr-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg"></div></gr-col>
    <gr-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-light"></div></gr-col>
  </gr-row>
```

<style>
  .grid-content{
    height:40px;
    border-radius:4px;
  }

  .bg{
    background:#d3d3e6;
  }

  .bg-light{
    background:#e5e9f2;
  }
</style>

## Row Attributes
|参数|	说明|	类型|	可选值|	默认值|
|---|---|---|---|--|
|gutter|栅格间隔|number|—|0|
|type|布局模式，可选 flex，现代浏览器下有效|string|—|—|
|justify|flex 布局下的水平排列方式|string|start/end/center/space-around/space-between|start|
|align|flex 布局下的垂直排列方式|string|top/middle/bottom|top|
|tag|自定义元素标签|string|*|div|

## Col Attributes
|参数|	说明|	类型|	可选值|	默认值|
|---|---|---|---|--|
|span|栅格占据的列数|number|—|24|
|offset|栅格左侧的间隔格数|number|—|0|
|push|栅格向右移动格数|number|—|0|
|pull|栅格向左移动格数|number|—|0|
|xs|<768px 响应式栅格数或者栅格属性对象|number/object (例如： {span: 4, offset: 4})|—|—|
|sm|≥768px 响应式栅格数或者栅格属性对象|number/object (例如： {span: 4, offset: 4})|—|—|
|md|≥992px 响应式栅格数或者栅格属性对象|number/object (例如： {span: 4, offset: 4})|—|—|
|lg|≥1200px 响应式栅格数或者栅格属性对象|number/object (例如： {span: 4, offset: 4})|—|—|
|xl|≥1920px 响应式栅格数或者栅格属性对象|number/object (例如： {span: 4, offset: 4})|—|—|
|tag|自定义元素标签|string|*|div|
