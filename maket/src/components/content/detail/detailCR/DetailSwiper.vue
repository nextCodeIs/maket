<template>
  <div>
    <swiper :banners="topImages" class="DwSwiper">
      <swiper-item v-for="(item,index) in topImages" :key="index">
        <img :src="item">
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { getDetailData } from 'network/detail.js'
import { Swiper, SwiperItem } from 'components/common/swiper'
// import {getDetailData} from 'network/detail.js'

export default {
  name: 'DetailSwiper',
  components: {
    Swiper,
    SwiperItem
  },
  props: {
  },
  data() {
    return {
      topImages: []
    }
  },
  created() {
    //   this.banners = this.DetailData.result.itemInfo.topImages
    this.getDetailData()
  },
  methods: {
    getDetailData() {
      this.id = this.$route.params.iid
      getDetailData(this.id).then(res => {
        this.topImages = res.data.result.itemInfo.topImages
        // console.log(this.topImages)
      })
    }
  }
}

</script>

<style  scoped>
    .DwSwiper{
        margin: 0 15px;
        height: 300px;
        overflow: hidden;
    }
</style>

