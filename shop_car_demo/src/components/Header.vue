<template>
  <div>
      <label>{{ title }}</label>
  </div>
</template>

<script>
export default {
    props: {
       initTitle: String
    },
    data() {
        return {
             title: this.initTitle
        }
    },
}
</script>

<style lang="less" scoped>
div {
    background-color: rgb(0, 126, 251);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
}
 label {
     color: white;
     font-size: 0.5rem;
 }

</style>