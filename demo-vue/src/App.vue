<template>
  <div class="app-container">
    <div class="box">
      <button @click="changeTab(!index)">动态组件，通过is设置组件名</button>

      <!-- keep-alive可以让里面的组件会被缓存起来， exclude设置不缓存， include 设置缓存 -->
      <keep-alive exclude="Right">
        <component :is="componentName"/>
      </keep-alive>

      <Right>
        <button  slot="top">top</button>

        <!-- {obj, a}解构作用域插槽回传的数据 -->
        <template #bottom="{obj, a}">
          <p>sdfdsf</p>
          {{obj}}
          {{a}}
        </template>
        
      </Right>

      <Directive/>

      <h1 v-color="'red'">全局指令</h1>
      
    </div>
  </div>
</template>

<script>
import myLeft from './components/Left.vue'
import Right from './components/Right.vue'
import Directive from './components/Directive.vue'
export default {
  components: {
    myLeft,
    Right,
    Directive
  },
  data() {
    return {
      index: 0,
      componentName: 'myLeft'
    }
  },
  methods: {
    changeTab(index) {
      this.index = index
      if (index == 0) {
        this.componentName = 'myLeft'
      } else {
        this.componentName = 'Right'
      }
    }
  },
}
</script>

<style lang="less">
.app-container {
  padding: 1px 20px 20px;
  background-color: #efefef;
}
.box {
  display: flex;
  flex-direction: column;
}
</style>
