<template>
  <div class="full-screen page-content">
      <div class="wrapper">
          <img class="logo-img" src="../assets/imgs/logo.svg" alt="">
          <div class="text-wrapper">
              <h1 class="title-text">计划清单</h1>
          </div>
          <el-input placeholder="请输入您喜欢的用户名" autofocus v-model="nickname" @input="inputNickname"></el-input>
          <el-button type="primary" :disabled="btnDisabled" @click="completeSetup">开始</el-button>
          <div class="copy-right">Copyright © 2018 keyarea</div>
      </div>
  </div>
</template>

<style>
.full-screen {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}
.page-content {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 50px;
}
.page-content .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 400px;
    max-height: 420px;
    height: 60vh;
    min-width: 300px;
    width: 30vw;
    max-width: 400px;
    padding: 40px 30px 10px;
    border-radius: 8px;
    background-color: #fff;
}
.page-content .wrapper .logo-img {
    flex: 0 0 120px;
    width: 120px;
    height: 120px;
}
.page-content .wrapper .text-wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
}
.page-content .wrapper .text-wrapper .title-text {
    font-size: 24px;
    font-style: italic;
    color: rgba(0,0,0,.65);
}
.page-content .wrapper button {
    margin-top: 26px;
    width: 100%;
}
.page-content .wrapper .copy-right {
    margin-top: 30px;
    flex: 0 0 40px;
}
</style>

<script>
import * as _ from 'lodash';
import {Logger} from '@/common/logger';
import { getTodayTime } from '@/utils/time';
// @ is an alias to /src
const logger = new Logger('SetUp');

export default {
  name: 'SetUp',
  components: {
  },
  created() {
      logger.debug('created');
  },
  data() {
      return {
          // 用户选择的用户名称
          nickname: '',
          // 开始按钮是否禁用
          btnDisabled: true,
      }
  },
  methods: {
      // 在 Input 值改变时触发
      inputNickname(value) {
          if (_.isEmpty(_.trim(value))) {
              this.btnDisabled = true;
          } else {
              this.btnDisabled = false;
          }
      },
      // 点击开始
      completeSetup() {
          // 修改用户名
          this.$store.dispatch('app/setUserName', this.nickname);
          // 修改用户初始化状态
          this.$store.dispatch('app/setInitFlag', true);
          // 修改用户开始的时间
          this.$store.dispatch('app/setStartUsingDate', getTodayTime());
          // 跳转到主页面
          this.$router.replace({name: 'Home'});
      }
  }
}
</script>