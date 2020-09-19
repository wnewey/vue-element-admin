<template>
  <div @click="login">login</div>
</template>

<script>
  export default {
    methods: {
      login() {
        this.$router.push('/');
      }
    }
  };

</script>
