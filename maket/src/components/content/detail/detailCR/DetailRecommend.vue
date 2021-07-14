<template>
  <div>
    <span class="recommend">商品推荐</span>
    <goods :goods="RecommendData" />
  </div>
</template>

<script>
import { getRecommend } from 'network/detail'
import Goods from '../../goods/Goods.vue'
export default {
  name: 'DetailRecommend',
  components: { Goods },
  data() {
    return {
      RecommendData: []
    }
  },
  created() {
    this.getRecommend()
  },
  methods: {
    getRecommend() {
      getRecommend().then(res => {
        this.RecommendData.push(...res.data.data.list)
        // console.log(this.RecommendData);
      })
    }
  }

}
</script>
<style  scoped>
.recommend{
    width: 100%;
    line-height: 40px;
    padding: 0 8px;
    font-weight: bold;
}
</style>>
