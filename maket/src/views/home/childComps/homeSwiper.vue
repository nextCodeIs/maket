<template>
  <div>
    <swiper :banners="banners">
      <swiper-item
        v-for="(item, index) in banners"
        :key="index"
      >
        <a :href="item.link">
          <img
            :key="item.image"
            v-lazy="item.image"
            alt="图片加载错误"
            @load="swiperimgLoad"
          >
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from 'components/common/swiper'

export default {
  name: 'HomeSwiper',
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    banners: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      isimgLoad: false
    }
  },
  methods: {
    swiperimgLoad() {
      if (!this.isimgLoad) {
        this.$emit('swiperimgLoad')
        this.isimgLoad = true
      }
    }
  }
}
</script>

<style scoped>
</style>
