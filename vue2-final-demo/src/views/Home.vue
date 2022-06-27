<template>
  <div class="container">
    <van-nav-bar title="标题" fixed/>

  <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <ArtItem
          v-for="item in artList" 
          :key="item.id" 
          :title="item.title"
          :aut_name="item.aut_name"
          :comm_count="item.comm_count"
          :pubdate="item.pubdate"
          :cover="item.cover"
        />
    </van-list>
  </van-pull-refresh>
    

  </div>
</template>

<script>
import request from '../utils/request'
import ArtItem from '../components/ArtItem.vue' 

export default {
  name: 'Home',
  components: {
    ArtItem
  },
  data() {
    return {
      page: 0,
      limit: 10,
      artList: [],
      loading: false,
      finished: false,
      refreshing: false
    }
  },
  async created() {
    //解构对象，将data字段赋值给res
      this.page++
    const {data: artList} = await request.get('/articles', {
      params: {
        _page: this.page,
        _limit: 10
      }
    })
    this.artList = artList
  },
  methods: {
   async onLoad() {
       this.page++
       const {data: artList} = await request.get('/articles', {
        params: {
          _page: this.page,
          _limit: 10
        }
      })
      this.artList = [...this.artList, ...artList]
      this.loading = false
      if (artList.length === 0) {
        this.finished = true
      }
    },
    async onRefresh() {
      this.artList = []
      this.page = 0
      this.finished = false
      this.loading = true
      await this.onLoad()
      this.refreshing = false
    }
  },

}
</script>

<style lang="less" scoped>
.container {
    padding-top: 46px;
    padding-bottom: 50px;

    .van-nav-bar {
        background-color: rgb(0, 81, 255);
    }
    /deep/.van-nav-bar__title {
        color: white
    }
}


</style>