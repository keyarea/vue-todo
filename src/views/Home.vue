<template>
  <el-container class="full-screen">
    <el-aside class="asider" :width="isCollapse ? '64px': '300px'">
      <app-left-control v-model="isCollapse"></app-left-control>
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
.asider {
  transition: all .2s;
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
  },
  data() {
    return {
      isCollapse: false,
    }
  }
}
</script>
