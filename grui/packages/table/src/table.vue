<template>
  <div class="gr-table-container">
    <el-table class="gr-table" ref="grTable" :data="datas" :tooltip-effect="tooltipEffect" :height="tableHeight"
      :max-height="tableMaxHeight" @selection-change="selectionChange">
      <template v-if="columns&&columns[0]">
        <template v-for="(column,index) in columns ">
          <el-table-column v-if="!column.hidden" :key="index" :type="column.type" :label="column.label"
            :width="column.width" :prop="column.key" :sortable="column.sortable" :formatter="column.formatter"
            show-overflow-tooltip>
            <el-dropdown v-if="index==1 && showColumnsSelect" slot="header" trigger="click" :hide-on-click="false"
              placement="bottom-start">
              <span class="col-select">{{column.label}} <i class="el-icon-caret-right "></i></span>
              <el-dropdown-menu slot="dropdown">
                <div class="drop-col-div">
                  <template v-for="(item ,idx) in columns">
                    <el-checkbox :checked="!item.hidden" :disabled="idx==1" v-if="item.type!=='selection'"
                      :label="item.label" :key="idx" @change="changeShowCol(idx)">
                    </el-checkbox>
                  </template>
                </div>
              </el-dropdown-menu>
            </el-dropdown>
          </el-table-column>
        </template>
      </template>
      <slot></slot>
    </el-table>
    <div class="table-footer" ref="footer">
      <slot name="footer"></slot>
      <div v-if="pagination && !$slots.footer" style="height:30px">&nbsp;&nbsp;</div>
      <div class="table-pagination" v-if="pagination">
        <gr-pagination :componts="paginationComponts" :current="current" :total="total" :page-size="pageSize"
          @currentChange="currentChange">
        </gr-pagination>
      </div>
    </div>

  </div>
</template>
<script>
  import {
    addResizeListener,
    removeResizeListener
  } from 'element-ui/src/utils/resize-event';

  import {
    Table,
    TableColumn
    // Pagination
  } from 'element-ui';

  export default {
    name: 'GrTable',
    components: {
      ElTable: Table,
      ElTableColumn: TableColumn
      // ElPagination: Pagination
    },
    props: {
      columns: {
        type: Array
      },
      datas: {
        type: Array
      },
      showSelection: {
        type: Boolean,
        default: true
      },
      showColumnsSelect: {
        type: Boolean,
        default: false
      },
      tooltipEffect: {
        type: String,
        default: 'dark'
      },
      autoHeight: {
        type: Boolean,
        default: true
      },
      autoMaxHeight: {
        type: Boolean,
        default: false
      },
      height: {
        type: String
      },
      maxHeight: {
        type: String
      },
      pagination: Boolean,
      current: Number,
      total: Number,
      pageSize: Number,
      paginationComponts: String
    },
    data() {
      return {
        parent: null,
        tableHeight: null,
        tableMaxHeight: null,
        tableContainerHeight: 0
      };
    },
    methods: {
      currentChange(e) {
        this.$emit('currentChange', e);
      },
      selectionChange(rows) {
        this.$emit('selectionChange', rows);
      },
      getParent() {
        var parent = this.$parent;
        while (parent) {
          //  有panelContent或tableContainer的父组件，都可以作为 autoHeight 的容器
          if (parent.$refs && (parent.$refs.panelContent || parent.$refs.tableContainer)) {
            break;
          }
          parent = parent.$parent;
        }
        this.parent = parent;
      },
      calTableHeight() {
        if (!this.parent) {
          return;
        }
        if (this.autoMaxHeight) {
          // 容器高度
          var container = ((this.parent.$refs.panelContent || this.parent.$refs.tableContainer));
          if (!container) {
            return;
          }
          var containerHeight = window.innerHeight - container.$el.getBoundingClientRect().top - 110;

          if (containerHeight === 0) {
            return;
          }

          var tableHeader = this.parent.$refs.tableHeader;
          if (tableHeader) {
            containerHeight = window.innerHeight - tableHeader.$el.getBoundingClientRect().top - 120;
          }

          // containerHeight -= this.$refs.footer.clientHeight;

          this.tableContainerHeight = containerHeight;
          // 设置最小高度，防止看不到内容
          if (this.tableContainerHeight < 100) {
            this.tableContainerHeight = 100;
          }

          if (this.autoMaxHeight) {
            this.tableMaxHeight = this.tableContainerHeight;
          } else {
            this.tableHeight = this.tableContainerHeight;
          }
        }
      },
      resizeListener() {
        // 监听元素高度，处理 display:none 转为显示时的监听
        if (this.$el.offsetHeight !== 0) {
          this.calTableHeight();
        }
      },
      clearSelection() {
        this.$refs.grTable.clearSelection();
      },
      toggleSelectRows(tableData) {
        tableData.forEach(row => {
          this.$refs.grTable.toggleRowSelection(row, true);
        });
      },
      changeShowCol(e) {
        this.$set(this.columns[e], 'hidden', !this.columns[e].hidden);
      }
    },
    destroyed() {
      if (this.autoHeight || this.autoMaxHeight) {
        removeResizeListener(this.$el, this.resizeListener);
      }
    },
    mounted() {
      if (this.autoHeight || this.autoMaxHeight) {
        this.getParent();
        addResizeListener(this.$el, this.resizeListener);
        if (this.$root.eventHub) {
          this.$root.eventHub.$on('windowResize', (传送的数据) => {
            this.calTableHeight();
          });
        } else {
          window.onresize = () => {
            this.calTableHeight();
          };
        }
        return;
      }
      if (this.height) {
        this.tableHeight = parseInt(this.height) || '';
        return;
      }
      if (this.maxHeight) {
        this.tableMaxHeight = parseInt(this.maxHeight) || '';
      }
    }
  };

</script>
<style scoped lang="less">
  @import "../../../theme/color.less";

  .gr-table-container {
    margin-bottom: -10px;

    .gr-table {
      border-radius: 6px;

      /deep/ .el-table {
        cursor: pointer;
        color: @contentColor;
      }
    }

    .col-select {
      color: #999;
      font-size: 12px;

      &:hover {
        color: @primaryColor;
      }
    }

    .table-footer {
      background-color: #fff;
      position: relative;
      border-bottom-right-radius: 6px;
      border-bottom-left-radius: 6px;

      &>* {
        padding: 14px 0;
      }

      .table-pagination {
        position: absolute;
        right: 10px;
        top: 0px;
      }

    }
  }

  .drop-col-div {
    padding: 5px 10px;
    display: flex;
    flex-direction: column;
    text-align: left;
    // max-height: 400px;
    overflow-y: scroll;
  }

  /deep/ .el-table-column--selection .cell {
    padding-left: 10px;
  }

  /deep/ .el-checkbox {
    font-size: 13px;
    font-weight: 400;
    line-height: 1.8;
  }

  /deep/.el-checkbox__input.is-disabled+span.el-checkbox__label {
    color: @primaryColor;
  }

  // /deep/ .el-table__header th {
  //   font-size: 13px;
  //   padding: 10px 0;
  // }

  // /deep/ .el-table__body td {
  //   padding: 8px 0;
  // }

  // /deep/ .el-checkbox__input.is-checked .el-checkbox__inner,
  // /deep/ .el-checkbox__input.is-indeterminate .el-checkbox__inner {
  //   background-color: @checkedColor;
  //   border-color: @checkedColor;
  // }

</style>
