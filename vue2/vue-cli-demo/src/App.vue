<template>
  <div id="app">
    <!-- 使用v-bind语法可以使""中的变为js表达式，就可以将props传参 传递number类型参数 -->
    <Left :initCount="0"/>
    <!-- 通过自定义时间@dataChange 子向父传递参数 -->
    <Right :initCount="0" @dataChange="receivedChildData"/>
  </div>
</template>

<script>
import Left from './components/Left.vue'
import Right from './components/Right.vue'
import TestRef from './components/TestRef'

export default {
  name: 'App',
  components: {
    Left,
    Right
  },
  data() {
    return {
      rightComponentData: 0
    }
  },
  methods: {
     receivedChildData(val) {
       this.rightComponentData = val
       console.log(val); //打印回传的参数
     }
  },
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  float: left;
  background-color: aqua;
  width: 100%;
}
</style>

