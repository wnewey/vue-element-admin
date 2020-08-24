<template>
  <div>
    <span>{{title}}</span>
    <el-divider :content-position="position" class="gr-divider--horizontal">{{description}}</el-divider>
  </div>
</template>
<script>
  import {
    Divider
  } from 'element-ui';
  export default {
    name: 'GrDivider',
    components: {
      ElDivider: Divider
    },
    props: {
      title: {
        type: String
      },
      position: {
        type: String
      },
      description: {
        type: String
      }
    },
    methods: {}
  };

</script>
<style>
 .gr-divider--horizontal {
   margin: 10px 0
 }
</style>
