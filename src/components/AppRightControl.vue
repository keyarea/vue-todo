<template>
  <el-container class="right-control ">
      <el-container class="header-wrapper">
        <app-header></app-header>
      </el-container>
      <el-container class="list-wrapper">

      </el-container>
      <div class="quick-add-wrapper"></div>
  </el-container>
</template>

<script>
import AppHeader from '@/components/AppHeader'
export default {
  name: 'AppRightControl',
  props: {
  },
  components: {
    AppHeader,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.right-control {
  position: relative;
  height: 100%;
  background-color: #f0f2f5;
  flex-direction: column;;
}
.header-wrapper {
    height: 180px;
    padding: 0;
    background-color: #fff;
    flex-basis: 180px;
    flex: none;
}
</style>
