
# DatePicker

## 使用示例
<template>
  <div style="padding:10px 0">
     <div style="margin-bottom:10px">
      normal date: <gr-date-picker v-model="date1"></gr-date-picker>
    </div>
     <div style="margin-bottom:10px">
      normal year: <gr-date-picker v-model="date2" type="year"></gr-date-picker>
    </div>
     <div style="margin-bottom:10px">
      normal month: <gr-date-picker v-model="date3" type="month"></gr-date-picker>
    </div>
    <div style="margin-bottom:10px">
      small daterange: <gr-date-picker v-model="date4" type="daterange" size='small'></gr-date-picker>
    </div>
     <div style="margin-bottom:10px">
     monthrange shortcuts: <gr-date-picker v-model="date5" type="monthrange" :pickerOptions="pickerOptions"></gr-date-picker>
    </div>
  </div>
</template>

 ```vue
normal date: <gr-date-picker v-model="date1"></gr-date-picker>
normal year: <gr-date-picker v-model="date2" type="year"></gr-date-picker>
normal month: <gr-date-picker v-model="date3" type="month"></gr-date-picker>
small daterange: <gr-date-picker v-model="date4" type="daterange" size='small'></gr-date-picker>
monthrange shortcuts: <gr-date-picker v-model="date5" type="monthrange" :pickerOptions="pickerOptions"></gr-date-picker>
 ```

## Attributes
| 参数        | 说明           | 类型    | 可选值                  | 默认值 |
| ---------- | ------------- | ------ | ---------------------- | ----- |
| size        | 尺寸      | string  | normal / small          | normal |
| type        | 显示类型	|string	|year/month/date/dates/ week/datetime/datetimerange/ daterange/monthrange|date|
| placeholder      | 非范围选择时的占位内容|	string |—  | 选择日期  |
| rangeSeparator   | 选择范围时的分隔符 |string |— |	至 |
| startPlaceholder | 范围选择时开始日期的占位内容	|string |— |	开始日期 |
| endPlaceholder   | 范围选择时结束日期的占位内容	|string |— |	结束日期 |
| pickerOptions    | 当前时间日期选择器特有的选项 参考下表 | Object |— | {} |

## pickerOptions
|参数	       |说明	          |类型	   |可选值     	             |默认值 |
| ---------- | ------------- | ------ | ---------------------- | ----- |
| shortcuts	| 设置快捷选项，需要传入 { text, onClick } 对象用法参考 demo 或下表	| Object[]	| —	| —| 
| disabledDate	| 设置禁用状态，参数为当前日期，要求返回 Boolean	| Function	| —	| —| 
| cellClassName	| 设置日期的 className	| Function(Date)	| —| 	—| 
| firstDayOfWeek	| 周起始日	| Number| 	1 到 7| 	7| 
| onPick	| 选中日期后会执行的回调，只有当 daterange 或 datetimerange 才生效	| Function({ maxDate, minDate })| —| —| 

## shortcuts
| 参数	     | 说明	     | 类型      | 可选值	    |默认值      |
| ----------| ----------| ----------| ----------| ----------|
|text	      |标题文本	   |string	   |—	       |—   |
|onClick	|选中后的回调函数，参数是 vm，可通过触发 'pick' 事件设置选择器的值。例如 vm.$emit('pick', new Date())	|function	|—|	—|

<script>

  export default {
    data(){
      return {
        date1: '',
        date2: '',
        date3: '',
        date4: '',
        date5: '',
        pickerOptions: {
          shortcuts: [{
            text: '本月',
            onClick(picker) {
              picker.$emit('pick', [new Date(), new Date()]);
            }
          }, {
            text: '今年至今',
            onClick(picker) {
              const end = new Date();
              const start = new Date(new Date().getFullYear(), 0);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近六个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setMonth(start.getMonth() - 6);
              picker.$emit('pick', [start, end]);
            }
          }]
        }
      };
    },
    methods: {
    }
  };
</script>
<style lang="less" scoped>

</style>