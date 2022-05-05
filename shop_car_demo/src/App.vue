<template>
  <div id="app">
   <Header initTitle="购物车"/>
   <div class="mainView">
    <Goods v-for="item in list" :key="item.id" 
    :initId="item.id"
    :initIsSelected="item.goods_state"
    :initName="item.goods_name" 
    :initGoodsPrice="item.goods_price" 
    :initImgUrl="item.goods_img"
    @stateOnChange="changeStatus"
    />
   </div>
   <Footer 
   :initIsAll="isAllSelected"
   :totalPrice="totalPrice"
   @selectedOnChange="changeAllSelected"/>
  </div>
</template>

<script>
import Header from "./components/Header.vue"
import Goods from "./components/Goods.vue"
import Footer from "./components/Footer.vue"
import axios from 'axios'
export default {
  name: 'App',
  components: {
    Header,
    Goods,
    Footer
  },
  data() {
    return {
      list: []
    }
  },
  async created() {
    const {data} = await axios.get('https://www.escook.cn/api/cart')
    this.list = data.list
  },
  methods: {
    changeStatus(val) {
      this.list.some((item, index) => {
        if (item.id == val.id) {
          item.goods_state = val.isSelected
          return true
        }
      })
    },
    changeAllSelected(val) {
      this.list.forEach((item) => item.goods_state = val)
    }
  },
  computed: {
    isAllSelected() {
      // some() 方法会依次执行数组的每个元素：

      // 如果有一个元素满足条件，则表达式返回true , 剩余的元素不会再执行检测。
      // 如果没有满足条件的元素，则返回false。
      // 注意： some() 不会对空数组进行检测。

      // 注意： some() 不会改变原始数组。
      if (this.list.length == 0) {
        return false
      }
      const isNotAllSelected = this.list.some((item) => item.goods_state == false)
      return !isNotAllSelected
    },
    totalPrice() {
      return this.list.filter((item) => item.goods_state).reduce(((total, item) => total + item.goods_price), 0)
    }
  },
}
</script>

<style lang="less">
.mainView {
  margin-top: 60px;
  margin-bottom: 50px;
}
</style>
