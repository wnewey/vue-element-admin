<template>
  <div class="el-step" :style="style" :class="[
      !isSimple && `is-${$parent.direction}`,
      isSimple && 'is-simple',
      isLast && !space && !isCenter && 'is-flex',
      isCenter && !isVertical && !isSimple && 'is-center'
     ]">
    <!-- icon & line -->
    <div class="el-step__head" :class="`is-${currentStatus}`">
      <div class="el-step__line" :style="isLast ? '' : { marginRight: $parent.stepOffset + 'px' }">
        <i class="el-step__line-inner"></i>
      </div>

      <div class="el-step__icon" :class="`is-${icon ? 'icon' : 'text'}`">
        <div class="icon-inner"></div>
      </div>
    </div>
    <!-- title & description -->
    <div class="el-step__main">
      <div class="el-step__title" ref="title" :class="['is-' + currentStatus]">
        <!-- <slot name="title">{{ title }}</slot> -->
        <slot name="title"></slot>
      </div>
      <div v-if="isSimple" class="el-step__arrow"></div>
      <div v-else class="el-step__description" :class="['is-' + currentStatus]">
        <!-- <slot name="description">{{ description }}</slot> -->
        <slot name="description"></slot>
        <slot name="operButton"></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GrStep',
    props: {
      // title: String,
      icon: String,
      // description: String,
      status: String,
      num: Number
    },

    data() {
      return {
        index: -1
      };
    },

    beforeCreate() {
      this.$parent.steps.push(this);
    },

    beforeDestroy() {
      const steps = this.$parent.steps;
      const index = steps.indexOf(this);
      if (index >= 0) {
        steps.splice(index, 1);
      }
    },

    computed: {
      currentStatus() {
        return this.status;
      },
      isCenter() {
        return this.$parent.alignCenter;
      },
      isVertical() {
        return this.$parent.direction === 'vertical';
      },
      isSimple() {
        return this.$parent.simple;
      },
      isLast() {
        const parent = this.$parent;
        return parent.steps[parent.steps.length - 1] === this;
      },
      stepsCount() {
        return this.$parent.steps.length;
      },
      space() {
        const {
          isSimple,
          $parent: {
            space
          }
        } = this;
        return isSimple ? '' : space;
      },
      style: function () {
        const style = {};
        const parent = this.$parent;
        const len = parent.steps.length;

        var space;
        if (typeof this.space === 'number') {
          space = this.space + 'px';
        } else if (this.space) {
          space = this.space;
        } else {
          space = 100 / (len - (this.isCenter ? 0 : 1)) + '%';
        }
        style.flexBasis = space;
        if (this.isVertical) return style;
        if (this.isLast) {
          style.maxWidth = 100 / this.stepsCount + '%';
        } else {
          style.marginRight = -this.$parent.stepOffset + 'px';
        }
        return style;
      }
    },

    methods: {
    },
    mounted() {
    }
  };

</script>

<style scoped lang="less">
  .el-step.is-vertical {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
  }

  .el-step.is-vertical .el-step__head {
    -webkit-box-flex: 0;
    -ms-flex-positive: 0;
    flex-grow: 0;
    width: 24px
  }

  .el-step.is-vertical .el-step__main {
    padding-left: 10px;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1
  }

  .el-step.is-vertical .el-step__title {
    line-height: 24px;
    padding-bottom: 8px
  }

  .el-step.is-vertical .el-step__line {
    width: 2px;
    height: 100%;
    top: 16px;
    bottom: 0px;
    left: 7px
  }

  .el-step.is-vertical .el-step__icon.is-icon {
    width: 24px
  }

  .el-step.is-vertical .el-step__main {
    padding-left: 20px
  }

  .el-step.is-vertical .el-step__title {
    font-size: 16px;
    line-height: 24px;
    padding-bottom: 10px
  }

  .el-step.is-center .el-step__head,
  .el-step.is-center .el-step__main {
    text-align: center
  }

  .el-step.is-simple .el-step__head {
    width: auto;
    font-size: 0;
    padding-right: 10px
  }

  .el-step__head.is-finish {
    color: #fff;
    border-color: #df863c
  }

  .el-step__head.is-wait {
    color: #fff;
    border-color: #ccc
  }

  .el-step__head {
    position: relative;
    width: 100%
  }

  .el-step__head.is-process {
    color: #31b978;
    border-color: #df863c
  }

  .el-step__head.is-wait {
    color: #999;
    border-color: #c0c4cc
  }

  .el-step__head.is-success {
    color: #67c23a;
    border-color: #df863c
  }

  .el-step__head.is-error {
    color: #ff5a5a;
    border-color: #ff5a5a
  }

  .el-step__head.is-finish {
    color: #31b978;
    border-color: #df863c
  }

  .el-step__line {
    position: absolute;
    border-color: inherit;
    background-color: #c0c4cc
  }

  .el-step__line-inner {
    display: block;
    border: 1px solid;
    border-color: inherit;
    -webkit-transition: .15s ease-out;
    transition: .15s ease-out;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 0;
    height: 0
  }

  .el-step__head.is-finish .el-step__line-inner {
    width: 1px;
    height: 100%;
  }

  .el-step.is-center .el-step__line {
    left: 50%;
    right: -50%
  }

  .el-step:last-of-type .el-step__line {
    display: none
  }

  .el-step__icon {
    position: relative;
    z-index: 1;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 24px;
    height: 24px;
    font-size: 14px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    background: #fff;
    -webkit-transition: .15s ease-out;
    transition: .15s ease-out
  }

  .el-step__icon.is-text {
    border-radius: 50%;
    border: 2px solid;
    border-color: inherit
  }

  .el-step__icon.is-icon {
    width: 40px
  }

  .el-step__icon-inner {
    display: inline-block;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    text-align: center;
    font-weight: 700;
    line-height: 1;
    color: inherit
  }

  .el-step__icon-inner[class*=el-icon]:not(.is-status) {
    font-size: 25px;
    font-weight: 400
  }

  .el-step__icon-inner.is-status {
    -webkit-transform: translateY(1px);
    transform: translateY(1px)
  }

  .el-step.is-simple .el-step__icon {
    background: 0 0;
    width: 16px;
    height: 16px;
    font-size: 12px
  }

  .el-step.is-simple .el-step__icon-inner[class*=el-icon]:not(.is-status) {
    font-size: 18px
  }

  .el-step.is-simple .el-step__icon-inner.is-status {
    -webkit-transform: scale(.8) translateY(1px);
    transform: scale(.8) translateY(1px)
  }

  .el-step__icon-inner {
    display: none
  }

  .el-step__icon {
    width: 16px;
    height: 16px;
  }

  .el-step__icon .icon-inner {
    content: "";
    width: 8px;
    height: 8px;
    border: 2px solid #fff;
    border-radius: 50%
  }

  .is-finish .el-step__icon {
    background: #df863c
  }

  .is-wait .el-step__icon {
    background: #ccc
  }

  .is-process .el-step__icon {
    background: #df863c
  }
  .el-step:last-of-type .el-step__description,
  .el-step:last-of-type .el-step__main {
    padding-right: 0
  }

  .el-step__main {
    white-space: normal;
    text-align: left
  }

  .el-step.is-simple .el-step__main {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1
  }

  .el-step.is-simple .el-step__title {
    font-size: 16px;
    line-height: 20px
  }

  .el-step.is-simple:not(:last-of-type) .el-step__title {
    max-width: 50%;
    word-break: break-all
  }

  .el-step__title.is-finish,
  .step-name.is-finish {
    color: #585858
  }

  .el-step__description.is-finish{
    color: #999
  }

  .el-step__description.is-process,
  .el-step__title.is-process {
    color: #df863c
  }

  .el-step__title.is-process {
    font-weight: 400
  }

  .el-step__title {
    font-size: 16px;
    line-height: 38px
  }

  .el-step__title.is-wait {
    color: #999;
  }

  .el-step__title.is-success {
    color: #df863c
  }

  .el-step__title.is-error {
    color: #ff5a5a
  }

  .el-step__title.is-finish {
    color: #df863c
  }

  .el-step__description {
    padding-right: 10%;
    margin-top: -5px;
    font-size: 12px;
    line-height: 20px;
    font-weight: 400
  }

  .el-step__description.is-wait {
    color: #999;
  }

  .el-step__description.is-success {
    color: #67c23a
  }

  .el-step__description.is-error {
    color: #ff5a5a
  }

  .el-step__description.is-finish {
    color: #31b978
  }

  .el-step.is-center .el-step__description {
    padding-left: 20%;
    padding-right: 20%
  }

  .el-step__description {
    font-size: 14px
  }

</style>
