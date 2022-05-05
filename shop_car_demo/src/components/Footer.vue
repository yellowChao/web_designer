<template>
  <div class="container">
      <div>
        <input type="checkbox" :checked="isAll"  v-model="isAll" @change="selectedStatusChange">
        <span>全选</span>
      </div>

      <div class="totalPrice">
          <!-- toFixed() 保持小数点两位-->
          <span>合计: </span><span>￥{{totalPrice.toFixed(2)}}</span>
      </div>

      <button>结算</button>

  </div>
</template>

<script>
export default {
  props: {
       initIsAll: Boolean,
       totalPrice: Number
    },
    created() {
        this.isAll = this.initIsAll
    },
    data() {
        return {
             isAll: false
        }
    },
    methods: {
        selectedStatusChange() {
            this.$emit('selectedOnChange', this.isAll)
        }
    },

    // props变化可以通过watch和计算属性来监听
    watch: {
        initIsAll: {
            handler(newValue, oldValue) {
                this.isAll = newValue
            }
        }
    },
}
</script>

<style lang="less" scoped>
    .container {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 50px;
        background-color: white;

        display: flex;
        justify-content: space-between;
        align-items: center;
        border: 1px solid gainsboro;
    }

    .totalPrice :last-child {
        color: red
    }

    button {
        background-color: rgb(0, 126, 251);
        color: white;
        height: 40px;
        width: 100px;
        border-radius: 20px;
        border: none;
        margin-right: 20px;
    }

</style>