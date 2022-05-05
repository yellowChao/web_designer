// 模拟第三方组件
<template>
  <div>
    <input type="text" v-if="inputIsVisible" ref="inputRef" >
     <button class="submitButton" @click="change" v-else>点击按钮显示 input</button>
  </div>
</template>

<script>
export default {

  data() {
    return {
      inputIsVisible: false
    }
  },
  methods: {
    change() {
      this.inputIsVisible = true
      //nextTick 会在页面dom更新后调用，如直接使用input的focus() 会造成 inputRef 为undefined ，因为只是数据变化，dom还没有更新
      this.$nextTick(() => {
        this.$refs.inputRef.focus()
      })
    }
  },

}
</script>

<style>

.submitButton {
    background-color: green;
    border-radius: 5px;
    border: 1px solid gray;
    height: 80px;
    width: 200px;
}

</style>