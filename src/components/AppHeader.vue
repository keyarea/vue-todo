<template>
  <el-container class="header">
      <img class="background-img" src="../assets/imgs/logo.svg" alt="">
  </el-container>
</template>

<script>
export default {
  name: 'AppHeader',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
    position: relative;
    height: 100%;
    border-left: 1px solid #efefef;
}
.header .background-img {
  position: absolute;
  left: 50%;
  top: 50%;
  height: 120px;
  transform: translate3d(-50%,-50%,0);
}
</style>
