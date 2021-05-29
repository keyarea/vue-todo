<template>
  <el-container class="full-screen">
    <el-aside>
      <app-left-control></app-left-control>
    </el-aside>
    <el-container>
      <app-right-control></app-right-control>
    </el-container>
    <router-view></router-view>
  </el-container>
</template>

<style>
.full-screen {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}
</style>

<script>
import AppLeftControl from '@/components/AppLeftControl';
import AppRightControl from '@/components/AppRightControl';
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    AppLeftControl,
    AppRightControl
  }
}
</script>
