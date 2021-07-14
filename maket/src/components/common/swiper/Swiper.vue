<template>
  <div
    id="swiper"
    @touchstart="touchStart"
    @touchmove="touchMove"
    @touchend="touchEnd"
  >
    <div
      ref="swiperItem"
      class="swiperItem"
    >
      <slot />
    </div>
    <slot name="indot" />
    <div class="indot">
      <div
        v-for="(item,index) in banners"
        ref="indotItem"
        :key="index"
        class="indotItem"
        :class="{active:currentIdex=== index }"
        @click="indotClick(index)"
      />
    </div>
  </div>
</template>

<script>
// import { request } from "../../network/request"
export default {
  name: 'Swiper',
  props: {
    chgDistance: {
      type: Number,
      default: 0.3
    },
    banners: {
      type: Array,
      default() {
        return []
      }
    },
    domdelay: {
      type: Number,
      default: 3000
    },
    scollTime: {
      type: Number,
      default: 2000
    }
  },
  data() {
    return {
      currentIdex: 0,
      StartX: 0,
      distance: 0,
      totalWidth: 0,
      swiperStyle: {},
      scoll: false
    }
  },
  mounted() {
    setTimeout(() => {
      this.handleDom()
      this.setTimer()
    }, 300)
  },
  created() {
    /*  request({
            url:'/home/multidata'
        }).then(res => {
            this.banners.push(...res.data.data.banner.list)
            console.log(this.banners[0].image)

        })*/
  },
  methods: {
    // 定时器
    // 开始定时器
    setTimer() {
      this.player = setInterval(() => {
        this.currentIdex++
        if (this.currentIdex > this.banners.length - 1) { this.currentIdex = 0 }
        this.scollContent(-this.totalWidth * this.currentIdex)
      }, this.domdelay)
    },
    // 清除定时器
    clearTimer() {
      clearInterval(this.player)
    },
    // 组件监听
    // indot监听
    indotClick(index) {
      this.currentIdex = index
      this.$emit('indotClick', index)
      this.setTouchD(-this.totalWidth * this.currentIdex)
    },
    // 基础数据的获取
    handleDom() {
      // 获取要操作的DOM
      const swiperEl = this.$refs.swiperItem
      // const indotEl  =this.$refs.indotItem
      // 多DOM进行操作
      // 获取swiper
      this.setTouchD(-this.totalWidth * this.currentIdex)
      this.totalWidth = swiperEl.offsetWidth
      this.swiperStyle = swiperEl.style
    },

    // 滑动
    // 滚动时间
    scollContent(position) {
      // 清除定时器
      clearInterval(this.player)
      // 开始滚动 传递参数
      this.scoll = true
      // 滚动时间
      this.swiperStyle.transition = 'transform ' + this.scollTime + 'ms'
      // 滚动
      this.setTouchD(position)
      // 停止滚动 传递参数
      this.scoll = false
      // 开启定时器
      this.setTimer()
    },
    // 滑动的距离
    setTouchD(position) {
      this.swiperStyle.transform = `translate3d(${position}px,0,0)`
    },
    // 手指滑动开始
    touchStart(e) {
      // 开始滑动的位置
      this.StartX = e.touches[0].pageX
      // console.log(this.StartX)
      // 手指触碰式清除定时器
      this.clearTimer()
    },
    // 滑动中
    touchMove(e) {
      // 滑动完成后的位置
      const Move = e.touches[0].pageX
      // 滑动的距离
      this.distance = Move - this.StartX
      // 滑动跟随手指
      const totleDistance = this.distance - this.totalWidth * this.currentIdex
      this.setTouchD(totleDistance)
    },
    // 手指离开屏幕
    touchEnd() {
      // 获取移动距离
      const absDistance = Math.abs(this.distance)
      // 是否进行图片切换
      if (this.distance > 0 && absDistance / this.totalWidth > this.chgDistance) { this.currentIdex-- } else if (this.distance < 0 && absDistance / this.totalWidth > this.chgDistance) { this.currentIdex++ } else { this.setTouchD(-this.totalWidth * this.currentIdex) }
      // 判断currentindex的值
      if (this.currentIdex > this.banners.length - 1) { this.currentIdex = 0 } else if (this.currentIdex < 0) { this.currentIdex = this.banners.length - 1 }
      this.setTouchD(-this.totalWidth * this.currentIdex)
      // 手指离开开始自动轮播
      this.setTimer()
    }
  }

}
</script>

<style scoped>
#swiper {
  position: relative;
  overflow: hidden;
}
.swiperItem {
  width: 100%;
  display: flex;
}
.swiperItem img {
  width: 100%;
}

.indot {
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 8px;
}

.indotItem {
  width: 8px;
  height: 8px;
  box-sizing: border-box;
  border-radius: 4px;
  text-align: center;
  overflow: hidden;
  margin: 0 5px;
  background-color: white;
  line-height: 8px;
  font-size: 12px;
  background-color: bisque;
}

.active {
  background-color: rgba(212, 62, 46, 1);
}
</style>
