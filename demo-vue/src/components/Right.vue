<template>
  <div class="right-container">
    <h3>Right 组件</h3>
    <slot name="top"></slot>
    <hr>
    <!-- msg="hello vue" :a="1233" 叫作用域插槽，将数据回传给父组件 -->
    <slot name="bottom" msg="hello vue" :a="1233"></slot>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less">
.right-container {
  padding: 0 20px 20px;
  background-color: lightskyblue;
  min-height: 250px;
  flex: 1;
}
</style>
