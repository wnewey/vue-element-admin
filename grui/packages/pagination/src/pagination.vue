<template>
  <div class="pagination">
    <div v-if="!layouts || layouts.includes('total')">共{{total}}条</div>
    <div class="pad-left" v-if="!layouts || layouts.includes('pagesize')">
      <label>每页</label>
      <gr-select v-model="inputPageSize" @change="pageSizeChange" :options="pageSizeList" style="width:66px">
      </gr-select>
      <label>条</label>
    </div>
    <gr-button v-if="!layouts || layouts.includes('index')" class="pad-left" size="mini" :disabled="currentNumber==1"
      @click="pageChange(1)">首页</gr-button>
    <gr-button v-if="!layouts || layouts.includes('prev')" size="mini" :disabled="currentNumber==1"
      @click="pageChange(currentNumber-1)">
      <i class="el-icon-caret-left"></i>
    </gr-button>
    <div class="pad-left" v-if="!layouts || layouts.includes('indicator')">
      {{totalPage ==0 ? 0: currentNumber}}/{{totalPage}}
    </div>
    <gr-button class="pad-left" v-if="!layouts || layouts.includes('next')" size="mini"
      :disabled="currentNumber==totalPage||totalPage<1" @click="pageChange(currentNumber+1)">
      <i class="el-icon-caret-right"></i>
    </gr-button>
    <gr-button size="mini" v-if="!layouts || layouts.includes('end')" :disabled="currentNumber==totalPage||totalPage<1"
      @click="pageChange(totalPage)">末页
    </gr-button>
    <gr-input v-if="!layouts || layouts.includes('jumper')" type="number" size="mini" class="pad-left"
      v-model="inputNumber" style="width:46px" :clearable="false">
    </gr-input>
    <gr-button v-if="!layouts || layouts.includes('jumper')" class="pad-left" size="mini"
      @click="pageChange(inputNumber)" :disabled="!(inputNumber&&inputNumber>=1&&inputNumber<=totalPage)">跳转
    </gr-button>
  </div>
</template>
<script>
  import GrButton from '../../button';
  import GrInput from '../../input';

  export default {
    name: 'GrPagination',
    components: {
      GrButton,
      GrInput
    },
    props: {
      total: {
        type: Number,
        default: 0
      },
      current: {
        type: Number,
        default: 1
      },
      pageSize: {
        type: Number,
        default: 10
      },
      componts: String
    },
    data() {
      return {
        currentNumber: 1,
        inputNumber: '',
        inputPageSize: ''
      };
    },
    computed: {
      layouts() {
        if (this.componts) {
          var layouts = this.componts.split(',');
          var finalLayouts = [];
          for (var i in layouts) {
            if (layouts[i].trim().length > 0) {
              finalLayouts.push(layouts[i].trim());
            }
          }
          if (finalLayouts.length > 0) {
            return finalLayouts;
          }
        }
        return '';
      },
      pageSizeList() {
        var initNumbers = [10, 20, 50];
        var inputSize = this.finalPageSize;
        if (!initNumbers.includes(this.finalPageSize)) {
          initNumbers = initNumbers.concat([inputSize]);
          // 排序
          for (var i = 0; i < initNumbers.length - 1; i++) {
            for (var j = 0; j < initNumbers.length - 1 - i; j++) {
              if (initNumbers[j] > initNumbers[j + 1]) {
                var temp = initNumbers[j];
                initNumbers[j] = initNumbers[j + 1];
                initNumbers[j + 1] = temp;
              }
            }
          }
        }
        var pageSizeList = [];
        initNumbers.forEach(i => {
          pageSizeList.push({
            label: i,
            text: i
          });
        });
        return pageSizeList;
      },
      finalPageSize() {
        return this.pageSize <= 1 ? 1 : parseInt(this.pageSize);
      },
      finalTotal() {
        return this.total <= 0 ? 0 : parseInt(this.total);
      },
      finalCurrent() {
        return this.current <= 1 ? 1 : parseInt(this.current);
      },
      totalPage() {
        if (this.finalTotal % this.finalPageSize === 0) {
          return parseInt(this.finalTotal / this.finalPageSize);
        }
        return parseInt(this.finalTotal / this.finalPageSize) + 1;
      }
    },
    methods: {
      pageChange(e) {
        if (this.currentNumber !== e) {
          this.currentNumber = parseInt(e);
          this.$emit('currentChange', parseInt(e));
        }
      },
      pageSizeChange(e, v) {
        var parent = this.$parent.$parent;
        var count = 0;
        while (parent && !parent.pageSize) {
          parent = parent.$parent;
          count++;
          if (count >= 3) {
            break;
          }
        }
        if (parent && parent.pageSize) {
          var newSize = parseInt(this.pageSizeList[e].label);
          if (newSize <= 0) {
            this.inputPageSize = parent.pageSize + '';
            this.msgError('每页条数不能小于或等于0');
            return;
          }
          parent.pageSize = newSize;
          this.currentNumber = 1;
          this.$emit('currentChange', 1);
        }
      }
    },
    mounted() {
      this.currentNumber = this.finalCurrent;
      this.inputPageSize = this.pageSize + '';
    },
    watch: {
      current(newVal) {
        this.currentNumber = newVal <= 1 ? 1 : parseInt(newVal);
      }
    }
  };

</script>

<style lang="less" scoped>
  @import "../../../theme/color.less";

  .pagination {
    display: flex;
    color: @contentColor;
    align-items: center;

    // /deep/ .gr-button--mini {
    //   padding: 6px 10px;
    // }

    /deep/ .el-input__inner {
      padding-right: 0;
      padding-left: 0;
      text-align: center;
    }

    .pad-left {
      margin-left: 8px;
    }

    .inputNumber {
      height: 30px;
      line-height: 30px;
      border-radius: 6px;
      width: 46px;
      color: #585858;
      line-height: 40px;
      background: #ffffff;
      border: 1px solid #cccccc;
    }

  }

</style>
