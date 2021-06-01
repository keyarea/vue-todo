<template>
  <div class="settings full-screen" >
      <div class="back-btn floating-btn" @click="back">
          <i class="el-icon-arrow-left"></i>
      </div>
      <div class="content">
          <div class="body">
              <img class="avatar" src="../assets/imgs/default-avatar.png" alt="">
              <el-divider>用户名</el-divider>
              <el-input placeholder="请键入用户名" v-model="username"></el-input>
              <el-divider>应用设置</el-divider>
          </div>
      </div>
  </div>
</template>


<script>
// @ is an alias to /src

export default {
  name: 'Settings',
  components: {
  },
  data() {
    return {
    }
  },
  methods: {
      // 返回上一页
      back() {
          this.$router.go(-1);
      }
  },
  computed: {
      username: {
          get () {
              return this.$store.state.app.username;
          },
          set (value) {
              this.$store.dispatch('app/setUserName', value);
          }
      }
  }
}
</script>

<style>
.settings {
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: #fff;
}
.full-screen {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}
.settings .back-btn {
    position: fixed;
    left: 20px;
    top: 20px;
    font-size: 24px;
}
.float-btn {
    padding: 12px;
    transition: all .2s linear;
}
.content {
    padding: 120px 0 0;
    width: 300px;
}
.content .body {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 100px;
}
.content .body .avatar {
    width: 80px;
    height: 80px;
}

</style>