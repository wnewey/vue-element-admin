# Loading

## 使用指引

全局使用
```vue
// 入口 js 引入
import Loading from '@src/zyui/packages/loading';
Vue.use(Loading);

// 页面使用
this.showLoading(text)
this.hideLoading()
```

页面使用
```vue
import Loading from '@src/zyui/packages/loading';

Loading.showLoading(text)
Loading.this.hideLoading()
```

指令使用
```vue
  <!--局部使用 -->
  <gr-table v-loading="true"></gr-table>

  <!--全屏使用 ,自定义显示文字-->
  <gr-table v-loading.fullscreen="true" loading-text="拼命加载中"></gr-table>
```


## 使用示例
<template>
  <gr-content-panel style="height:500px;padding-bottom:20px" hideCopyright>
      <div slot="header" style="cursor:pointer" @click="loadData">指令方式局部使用(点击加载数据)</div>
      <gr-table v-loading="showTableLoading" :datas="dataList" pagination :total="115" @currentChange="currentChange">
        <gr-table-column label="订单编号" prop="orderNum"></gr-table-column>
        <gr-table-column label="交易日期"  prop="transDate"></gr-table-column>
      </gr-table>
  </gr-content-panel>

   <gr-content-panel style="height:200px;padding-bottom:20px" hideCopyright>
   <div slot="header">手动触发</div>
   <gr-button @click="showLoadingMask">显示加载</gr-button>
  </gr-content-panel>
</template>


 ```vue
 <gr-content-panel style="height:500px;padding-bottom:20px" hideCopyright>
      <div slot="header" style="cursor:pointer" @click="loadData">指令方式局部使用(点击加载数据)</div>
      <gr-table v-loading="showTableLoading" :datas="dataList" pagination :total="115" @currentChange="currentChange">
        <gr-table-column label="订单编号" prop="orderNum"></gr-table-column>
        <gr-table-column label="交易日期"  prop="transDate"></gr-table-column>
      </gr-table>
  </gr-content-panel>

<gr-content-panel style="height:200px;padding-bottom:20px" hideCopyright>
   <gr-button @click="showLoadingMask">显示加载</gr-button>
  </gr-content-panel>
<script>
  export default {
    data(){
      return {
        dataList:[],
        showTableLoading:false,
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
        }]
      }
    },
    methods:{
      loadData(){
        this.showTableLoading=true;
        setTimeout(()=>{
          this.dataList= this.tableData;
          this.showTableLoading=false;
        },1500)
      },
      currentChange(e){
      },
      showLoadingMask(){
        this.showLoading();
        setTimeout(()=>{
          this.hideLoading()
        },1500)
      }
    },
  };
</script>
 ```

<script>
  export default {
    data(){
      return {
        dataList:[],
        showTableLoading:false,
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
        },]
      }
    },
    methods:{
      loadData(){
        this.showTableLoading=true;
        setTimeout(()=>{
          this.dataList= this.tableData;
          this.showTableLoading=false;
        },1500)
      },
      currentChange(e){
      },
      showLoadingMask(){
        this.showLoading();
        setTimeout(()=>{
          this.hideLoading()
        },1500)
      }
    },
  };
</script>