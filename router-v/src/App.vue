<template>
  <div id="app">
    <!--router-link 其实就是 <a href="#/About" class="">about</a> -->
    <router-link to="/About">about</router-link>
    <router-link to="/Home/1">Home1</router-link>
    <router-link to="/Home/2?name='hzc'">Home2</router-link>
    <router-view/>
  </div>
</template>

<style lang="less">
</style>
