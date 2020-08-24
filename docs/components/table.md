
# Table

## 使用示例
<template>
<div>
  <gr-content-panel style="height:500px;padding-bottom:20px" hideCopyright>
      <div slot="header" style="">表格自动高度（滚动） 分页</div>
      <gr-table :datas="tableData" pagination :total="115" @currentChange="currentChange">
        <gr-table-column label="订单编号" prop="orderNum"></gr-table-column>
        <gr-table-column label="交易日期"  prop="transDate"></gr-table-column>
      </gr-table>
  </gr-content-panel>
  <gr-content-panel style="height:500px;padding-bottom:20px" hideCopyright>
     <div slot="header">自动渲染数据 自定义底栏</div>
     <gr-table :autoHeight="false" :columns="tableColumn" :datas="tableData">
        <div slot="footer" style="text-align:center">
        <gr-button primary>提交</gr-button>
        </div>
     </gr-table>
  </gr-content-panel>
</div>
</template>

 ```vue
  <gr-content-panel style="height:500px;padding-bottom:20px" hideCopyright>
      <div slot="header" style="">表格自动高度（滚动） 分页</div>
      <gr-table :datas="tableData" pagination :total="115" @currentChange="currentChange">
        <gr-table-column label="订单编号" prop="orderNum"></gr-table-column>
        <gr-table-column label="交易日期"  prop="transDate"></gr-table-column>
      </gr-table>
  </gr-content-panel>
  <gr-content-panel style="height:500px;padding-bottom:20px" hideCopyright>
     <div slot="header">自动渲染数据 自定义底栏</div>
     <gr-table :autoHeight="false" :columns="tableColumn" :datas="tableData">
        <div slot="footer" style="text-align:center">
        <gr-button primary>提交</gr-button>
        </div>
     </gr-table>
  </gr-content-panel>
 ```

## Attributes
| 参数        | 说明           | 类型    | 可选值                  | 默认值 |
| ---------- | ------------- | ------ | ---------------------- | ----- |
| columns      |列表项           |  Array  | -     | - |
| datas     | 数据项       | Array | - | -  |
| tooltipEffect     |提示主题   | String | 	dark/light	                     | dark |
| autoHeight     |是否自动高度   | Boolean | -                       | true  |
| autoMaxHeight     |是否自动最大高度   | Boolean | -                       |  false  |
| height     |高度   | Number | -                       | - |
| maxHeight     |最大高度   | Number | -                       | -  |
| pagination     |是否展示分页   |  Boolean | -                       | false  |
| total        | 数据总量          |  Number  | -     | 0 |
| current     | 当前所处页数   | Number | - | 1  |
| page-size     |分页大小   | Number | -                       | 10  |

### 高度设置的属性优先级
autoHeight > autoMaxHeight > height > maxHeight

## Events
| 事件名称           | 说明                        | 回调参数         | 
| ----------------- | -------------------------- | --------------- |
| currentChange     | 当前页面值变化时触发的事件      | 改变后的current值 |

## Slot
|name    	|说明|
| ----------------- | --------------------------  |
|footer|表格底部|

<script>
  export default {
    data(){
      return {
        tableColumn: [{
            label: '单据编号',
            key: 'orderNum',
            width: '180',
            sortable: false
          }, {
            label: '交易日期',
            key: 'transDate',
            width: '150',
            sortable: false
          }, {
            label: '分配前余额(元)',
            key: 'balance',
            width: '150',
            sortable: false
          },
          {
            label: '分配金额(元)',
            key: 'distributeAmout',
            width: '150',
            sortable: false
          },
          {
            label: '备注',
            key: 'remark',
            width: '150',
            sortable: false
          }
        ],
        tableData: [{
          orderNum: '9988201904010002',
          transDate: '2019-08-30',
          balance: '1234.24',
          distributeAmout: '980.24',
          remark: ''
        }, {
          orderNum: '9988201904010002',
          transDate: '2019-08-30',
          balance: '1234.24',
          distributeAmout: '980.24',
          remark: ''
        }, {
          orderNum: '9988201904010002',
          transDate: '2019-08-30',
          balance: '1234.24',
          distributeAmout: '980.24',
          remark: ''
        }, {
          orderNum: '9988201904010002',
          transDate: '2019-08-30',
          balance: '1234.24',
          distributeAmout: '980.24',
          remark: ''
        }, {
          orderNum: '9988201904010002',
          transDate: '2019-08-30',
          balance: '1234.24',
          distributeAmout: '980.24',
          remark: ''
        }, {
          orderNum: '9988201904010002',
          transDate: '2019-08-30',
          balance: '1234.24',
          distributeAmout: '980.24',
          remark: ''
        }, {
          orderNum: '9988201904010002',
          transDate: '2019-08-30',
          balance: '1234.24',
          distributeAmout: '980.24',
          remark: ''
        }, {
          orderNum: '9988201904010002',
          transDate: '2019-08-30',
          balance: '1234.24',
          distributeAmout: '980.24',
          remark: ''
        }, {
          orderNum: '9988201904010002',
          transDate: '2019-08-30',
          balance: '1234.24',
          distributeAmout: '980.24',
          remark: ''
        }]
      }
    },
    methods:{
      currentChange(e){
      }
    },
  };
</script>