<template>
  <div>
    <button type="button" class="btn btn-light btn-sm">后退</button>
    <h4 class="text-center">用户详情</h4>
    <h1>
      {{ id }}
    </h1>
  </div>
</template>

<script>
export default {
  name: 'MyUserDetail',
  props: {
    id: ''
  }
}
</script>

<style lang="less" scoped></style>
