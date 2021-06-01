<template>
  <el-container class="full-screen">
    <transition mode="out-in">
      <el-aside class="asider" :width="isCollapse ? '64px': '300px'">
        <app-left-control v-model="isCollapse"></app-left-control>
      </el-aside>
    </transition>
    <el-container>
      <app-right-control></app-right-control>
    </el-container>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
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
.fade-enter-active, .fade-leave-active {
  transition: all .5s;
}
.fade-enter {
  opacity: 0;
  transform: translateX(450px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateX(450px);
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
      newListDialogVisible: false,
    }
  }
}
</script>
