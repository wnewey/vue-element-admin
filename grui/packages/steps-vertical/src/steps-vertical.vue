<template>
  <div class="steps-wrapper">
    <div class="step-names">
      <div v-for="(item, index) in steps" :key="item.title" class="step-name"
        :class="[index < active ? 'is-finish' : '']">{{ item.name }}</div>
    </div>
    <el-steps :active="active" align-center :steps="steps" direction="vertical">
      <gr-step v-for="(item, index) in steps" :key="index" :num="index" :status="status(index)">
        <div slot="title" v-html="item.title">{{item.title}}</div>
        <div slot="description" v-html="item.description">{{item.description}}</div>
        <gr-button primary slot="operButton" v-if="item.operButton && active == item.operActive"
          @click="item.operClick">{{item.operButton}}</gr-button>
      </gr-step>
    </el-steps>
  </div>
</template>

<script>
  import Step from '../../step';
  import Button from '../../button';
  export default {
    name: 'GrStepsVertical',
    components: {
      GrStep: Step,
      GrButton: Button
    },
    data() {
      return {};
    },
    props: {
      active: {
        type: Number,
        default: 1
      },
      steps: {
        type: Array
      }
    },
    methods: {
      status(index) {
        if (this.active > (index + 1)) {
          return 'finish';
        } else if (this.active === (index + 1)) {
          return 'process';
        } else {
          return 'wait';
        }
      }
    }
  };

</script>

<style scoped lang="less">
  .steps-wrapper {
    width: 100%;
    height: 100%;
    color: #999999;
  }

  .step-names {
    float: left;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .step-name {
    flex: 1;
    padding-right: 20px;
    font-size: 16px;
    line-height: 24px;
    text-align: right;
  }

  .steps {
    float: left;
    height: 100%;
  }

  /deep/ .step-name.is-finish {
    color: #585858;
  }

  /deep/ .el-button {
    margin-top: 15px;
  }

</style>
