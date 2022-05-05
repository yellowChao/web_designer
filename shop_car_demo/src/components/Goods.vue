<template>
  <div class="container">
      <input type="checkbox" class="checkInput" :checked="isSelected" @change="changeSelected"/>
      <img :src="imgUrl"/>
      <div class="goods_detail">
        <span>{{name}}</span>
        <span>￥{{price}}</span>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    initId: Number,
    initName: String,
    initGoodsPrice: Number,
    initImgUrl: String,
    initIsSelected: Boolean
  },
  created() {
    this.id = this.initId
    this.name = this.initName
    this.price = this.initGoodsPrice
    this.imgUrl = this.initImgUrl
    this.isSelected = this.initIsSelected
  },
  data() {
    return {
      id: '',
      name: '',
      price: 0,
      imgUrl: '',
      isSelected: false
    }
  },
  methods: {
    changeSelected(e) {
      const isSelected = e.target.checked
      this.$emit('stateOnChange', {id: this.id ,isSelected})
    }
  },
  watch: {
    initIsSelected: {
      handler(newValue) {
        this.isSelected = newValue
      }
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  display: flex;
  align-items: center;
  height: 120px;
}

.checkInput {
  display: inline-block;
  margin: 10px;
  background-color: red;
  box-sizing: border-box;
}

.goods_detail {
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 15px;
  padding-top: 10px;
  padding-bottom: 10px;
  box-sizing: border-box;
  font-size: 13px;
}

.goods_detail span:last-child {
  color: red;
}

img {
  width: 110px;
  height: 110px;
  flex: none;
}
</style>