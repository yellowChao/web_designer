<template>
  <div v-border="colorValue">
    自定义指令
    <button @click="colorValue = 'green'">change</button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            colorValue: 'blue'
        }
    },
    //自定义指令， 使用的时候都要加上v-name， 
    directives: {
        color: {
            //bind 函数只有第一次绑定时触发
            bind(el, bind) {
                //el为绑定的元素， bind为参数对象
                el.style.background = bind.value
            },
            //update 函数 所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前
            update(el, bind) {
                el.style.background = bind.value
            },
        },
        //可以对两个函数进行缩写
        border(el, bind) {
            el.style.border = "2px solid"
            el.style.borderColor = bind.value
        }
    }
}
</script>

<style lang="less">
</style>
