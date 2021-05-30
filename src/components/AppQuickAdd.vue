<template>
  <div class="quick-add">
      <el-input placeholder="想要做什么？" v-model="inputValue" @change='addTodo'></el-input>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
      return {
          inputValue: ''
      }
  },
  props: {
  },
  methods: {
      addTodo(value) {
          this.$emit('add', value);
          this.inputValue = ''
      },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
