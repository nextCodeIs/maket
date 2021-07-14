<template>
  <div id="detail" ref="aaa">
    <detail-nav-bar
      class="navbar"
      :index="currentIndex"
      @texClick="navbarClick"
    />
    <t-bclick
      v-show="isTBshow"
      class="Detail-tbck"
      @click.native="detailTbclick"
    />
    <scroll ref="detailscroll" class="scroll" @scroll="scrollps">
      <detail-swiper :top-images="topImages" class="swiper" />
      <detail-goods :detail-goods-data="DetailGoodsData" class="goods" />
      <detail-shop :detail-shop-data="DetailShopData" class="shop" />
      <detail-shop-img
        :detail-shop-img-data="DetailShopImgData"
        class="shopImg"
        @detailShopImgLoad="detailShopImgLoad"
      />
      <detail-prams :detail-params="DetailParams" class="prams" />
      <detail-comment
        :detail-comment="DetailComment"
        class="comment"
        @moreText="moreText"
      />
      <detail-recommend />
    </scroll>
    <DetailBottomBar class="DetailBottomBar" @addCar="addCar" />
  </div>
</template>

<script>
// 网络请求
import { getDetailData, DetailGoodsData, DetailShopData } from 'network/detail'

// 组件
import DetailNavBar from './detailCR/DetailNavBar'
import DetailSwiper from './detailCR/DetailSwiper'
import DetailGoods from './detailCR/DetailGoods'
import DetailShop from './detailCR/DetailShop.vue'
import Scroll from 'components/content/scroll/scroll'
import DetailShopImg from './detailCR/DetailShopImg.vue'
import TBclick from '../TBclick/TBclick.vue'
import DetailPrams from './detailCR/DetailPrams.vue'
import DetailComment from './detailCR/DetailComment.vue'
import DetailRecommend from './detailCR/DetailRecommend.vue'
import DetailBottomBar from './detailCR/DetailBottomBar.vue'

export default {
  name: 'Detail',
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailGoods,
    DetailShop,
    Scroll,
    DetailShopImg,
    TBclick,
    DetailPrams,
    DetailComment,
    DetailRecommend,
    DetailBottomBar
  },
  data() {
    return {
      id: null,
      isTBshow: false,
      topImages: [],
      DetailGoodsData: {},
      DetailShopData: {},
      DetailShopImgData: {},
      DetailParams: {},
      ishhow: false,
      DetailComment: {},
      position: {},
      nowData: {},
      currentIndex: 0
    }
  },
  watch: {},
  created() {
    this.getDetailData()
  },
  mounted() {
    const refresh = this.debounce(this.$refs.detailscroll.refresh, 100)
    this.$bus.$on('imgload', () => {
      refresh()
    })
  },
  methods: {
    // 防抖函数
    debounce(func, delay) {
      let timer = null
      return (...arg) => {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
          func.apply(this, arg)
        }, delay)
      }
    },
    getDetailData() {
      this.id = this.$route.params.iid
      getDetailData(this.id).then((res) => {
        this.topImages = res.data.result.itemInfo.topImages
        this.nowData = res.data.result.itemInfo
        const data = res.data.result
        // 获取详情商品信息
        this.DetailGoodsData = new DetailGoodsData(
          data.itemInfo,
          data.columns,
          data.shopInfo.services
        )
        // 获取详情也店铺信息
        this.DetailShopData = new DetailShopData(data.shopInfo)
        // 获取图片信息
        this.DetailShopImgData = data.detailInfo
        // console.log(this.DetailShopImgData)
        // 获取商品参数
        this.DetailParams = data.itemParams
        // console.log(this.DetailParams);
        // 获取用户评论
        this.DetailComment = data.rate
        // console.log(this.DetailComment);
      })
    },
    detailShopImgLoad() {
      this.$refs.detailscroll.refresh()
    },
    scrollps(position) {
      -position.y > 500 ? (this.isTBshow = true) : (this.isTBshow = false)
      this.scollChange(position)
    },
    detailTbclick() {
      this.$refs.detailscroll.scrollTo(0, 0, 200)
    },
    // 点击跳转到对应位置
    navbarClick(index) {
      // 获取高度
      const swiperHeight = document.querySelector('.swiper').offsetHeight // swiper高度
      const goodsHeight = document.querySelector('.goods').offsetHeight // goods高度
      const shopHeight = document.querySelector('.shop').offsetHeight // shop高度
      const shopImgHeight = document.querySelector('.shopImg').offsetHeight // shopImg高度
      const pramsHeight = document.querySelector('.prams').offsetHeight // prams高度
      //   const commentHeight = document.querySelector(".comment").offsetHeight; // comment高度
      switch (index) {
        case 0:
          this.$refs.detailscroll.scrollTo(0, 0, 1000)
          break
        case 1:
          this.$refs.detailscroll.scrollTo(
            0,
            -(swiperHeight + goodsHeight + 10),
            1000
          )
          break
        case 2:
          this.$refs.detailscroll.scrollTo(
            0,
            -(swiperHeight + goodsHeight + shopHeight + shopImgHeight + 30),
            1000
          )
          break
        case 3:
          this.$refs.detailscroll.scrollTo(
            0,
            -(
              swiperHeight +
              goodsHeight +
              shopHeight +
              shopImgHeight +
              pramsHeight +
              40
            ),
            1000
          )
          break
        default:
          break
      }
    },
    // 滑动时动态转换头部标题
    scollChange(val) {
      // 获取高度
      const swiperHeight = document.querySelector('.swiper').offsetHeight // swiper高度
      const goodsHeight = document.querySelector('.goods').offsetHeight // goods高度
      const shopHeight = document.querySelector('.shop').offsetHeight // shop高度
      const shopImgHeight = document.querySelector('.shopImg').offsetHeight // shopImg高度
      const pramsHeight = document.querySelector('.prams').offsetHeight // prams高度
      //   const commentHeight = document.querySelector(".comment").offsetHeight; // comment高度
      if (-val.y < swiperHeight + goodsHeight + 10) {
        this.currentIndex = 0
      } else if (
        -val.y <
        swiperHeight + goodsHeight + shopHeight + shopImgHeight + 30
      ) {
        this.currentIndex = 1
      } else if (
        -val.y <
        swiperHeight +
          goodsHeight +
          shopHeight +
          shopImgHeight +
          pramsHeight +
          40
      ) {
        this.currentIndex = 2
      } else {
        this.currentIndex = 3
      }
    },
    // 加入购物车
    addCar() {
      // 获取购物车中需要的数据
      const product = {}
      product.desc = this.nowData.desc
      product.image = this.nowData.topImages[0]
      product.title = this.nowData.title
      product.price = this.nowData.lowNowPrice
      product.id = this.id
      // 加入购物车
      this.$store.commit('addCart', product)
      this.$message({
        message: '加入购物车成功',
        type: 'success'
      })
    },
    moreText() {
      this.$refs.detailscroll.refresh()
    }
  }
}
</script>

<style scoped>
#detail {
  height: 100vh;
  background-color: white;
  position: relative;
  z-index: 1;
  overflow: hidden;
}
.scroll {
  position: fixed;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 49px;
  background-color: #fff;
}
.navbar {
  background-color: white;
}
.Detail-tbck {
  position: fixed;
  bottom: 49px;
  right: 3px;
  z-index: 9;
}
.DetailBottomBar {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>

