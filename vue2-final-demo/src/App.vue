<template>
  <div id="app">
    <router-view />
    <van-tabbar route>
      <van-tabbar-item replace to="/home" icon="home-o">新闻</van-tabbar-item>
      <van-tabbar-item replace to="/mine" icon="user-o">用户</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
  }
}
</script>

<style>

</style>
