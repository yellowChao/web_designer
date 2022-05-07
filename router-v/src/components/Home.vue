<template>
  <div>
      home {{id}}
        <h3>query {{$route.query}}</h3>
  </div>
</template>

<script>
export default {
    props:{
        'id': String
    },
    created() {
      console.log(this)
    },
}
</script>

<style>

</style>