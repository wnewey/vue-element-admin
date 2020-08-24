# CityPicker

<gr-content-card>
  <div>广东省数据</div>
  <gr-city-picker></gr-city-picker>
</gr-content-card>

<gr-content-card>
  <div>全国数据</div>
  <gr-city-picker all province="440000" city="440100" area="440111"></gr-city-picker>
</gr-content-card>

<gr-content-card>
  <div>不显示省(市、区设置对应参数)</div>
  <gr-city-picker hideProvince  province="440000" city="440100" area="440111"></gr-city-picker>
</gr-content-card>

<gr-content-card>
  <div>不显示区</div>
  <gr-city-picker hideArea province="440000" city="440100" area="440111"></gr-city-picker>
</gr-content-card>

<gr-content-card>
  <div>省不能编辑(市、区设置对应参数)</div>
  <gr-city-picker disableProvince  province="440000" city="440100" area="440111"></gr-city-picker>
</gr-content-card>

```vue
  <gr-city-picker></gr-city-picker>
  <gr-city-picker all province="440000" city="440100" area="440111"></gr-city-picker>
  <gr-city-picker hideProvince  province="440000" city="440100" area="440111"></gr-city-picker>
  <gr-city-picker hideArea province="440000" city="440100" area="440111"></gr-city-picker>
  <gr-city-picker disableProvince  province="440000" city="440100" area="440111"></gr-city-picker>

```

## Attributes
| 参数        | 说明           | 类型    | 可选值                  | 默认值 |
| ---------- | ------------- | ------ | ---------------------- | ----- |
| all        | 是否显示全国数据(默认只显示广东省数据)         |Boolean   | - | false |
| hideProvince        | 隐藏省         |Boolean   | - | false |
| hideCity        | 隐藏市         |Boolean   | - | false |
| hideArea        | 隐藏区        |Boolean   | - | false |
| disableProvince        | 省不可修改         |Boolean   | - | false |
| disableCity        | 市不可修改        |Boolean   | - | false |
| disableArea        | 区不可修改        |Boolean   | - | false |
| province        | 初始省编码        |String/Number   | - | false |
| city        | 初始市编码        |String/Number   | - | false |
| area        | 初始区编码         |String/Number   | - | false |
| placeholders|占位信息|Object|-|{province: '选择省',city: '选择市',area: '选择区'};|

## Events
| 事件名称           | 说明                        | 回调参数         | 
| ----------------- | -------------------------- | --------------- |
| change     | 选择改变时触发      | 当前数据{province: {code: '',name: ''},city: {code: '', name: ''},area: {code: '',name: '' }} |