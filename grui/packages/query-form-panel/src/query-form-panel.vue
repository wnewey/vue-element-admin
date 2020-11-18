<template>
  <div class="form-panel" :class="{collaspan:collaspan}">
    <div>
      <slot></slot>
      <div class="colBtns forTempalte">
        <slot name="queryBtns"></slot>
        <span class="coltext" @click="collaspan=!collaspan" :style="{color:$store.state.app.theme}"
          v-show="!collaspan">收起
          <el-icon name="arrow-up">
          </el-icon>
        </span>
      </div>
    </div>
    <div class="colBtns" v-show="collaspan">
      <slot name="queryBtns"></slot>
      <span class="coltext" @click="collaspan=!collaspan" :style="{color:$store.state.app.theme}"
        v-show="itemHiddenSize>0">更多
        <el-icon name="arrow-right">
        </el-icon>
      </span>
    </div>
  </div>
</template>

<script>
  import {
    Icon
  } from 'element-ui';
  import {
    addResizeListener,
    removeResizeListener
  } from 'element-ui/src/utils/resize-event';
  export default {
    name: 'GrQueryFormPanel',
    components: {
      ElIcon: Icon
    },
    data() {
      return {
        collaspan: true,
        itemHiddenSize: 0
      };
    },
    watch: {
      collaspan(_val) {
        this.$emit('collaChange', _val);
      }
    },
    methods: {
      calShowOptBtns() {
        // 获取panel容器底部坐标
        var panel = this.$el;
        var panelBottom = panel.offsetTop + panel.clientHeight;

        if (panel.clientHeight === 40 || panel.clientHeight === 49) {
          this.collaspan = true;
        } else {
          this.collaspan = false;
        }

        // 计算元素有多少已显示
        var formItems = this.$el.querySelectorAll('.el-form-item');
        // var itemTotalSize = formItems.length;
        var itemHiddenSize = 0;
        for (var i = 0; i < formItems.length; i++) {
          if (formItems[i].offsetTop > panelBottom) {
            itemHiddenSize++;
          }
        }

        // 全显示后就显示扩展按钮
        this.itemHiddenSize = itemHiddenSize;
      }
    },
    destroyed() {
      removeResizeListener(this.$el, this.calShowOptBtns);
    },
    mounted() {
      var btns = this.$el.querySelector('.forTempalte');
      this.$el.querySelector('form').appendChild(btns);
      this.calShowOptBtns();
      addResizeListener(this.$el, this.calShowOptBtns);
    }
  };

</script>
<style scoped lang="less">
  @import "../../../theme/color.less";

  .form-panel {
    display: flex;
    align-items: top;
    justify-content: space-between;

    &.collaspan {
      height: 40px;
      overflow: hidden;
    }

    .colBtns {
      min-width: 290px;
      width: 290px;
      display: inline-block;
      text-align: right;
      margin-top: -3px;
    }

    .coltext {
      height: 35px;
      font-size: 12px;
      color: @primaryColor;
      cursor: pointer;
      user-select: none;
      line-height: 35px;
    }
  }

</style>>
