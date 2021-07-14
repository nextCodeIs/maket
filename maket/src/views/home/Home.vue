<template>
  <div id="home">
    <nav-bar class="navbar">
      <div slot="center">购物车</div>
    </nav-bar>
    <tabcontrol
      v-show="TabisShow"
      ref="tabcontrol1"
      :tb-list="TBlist"
      class="TABflexd"
      @TBclick="TBclick"
    />
    <scroll
      ref="scroll"
      class="content"
      @scroll="Scroll"
      @pullingUp="PullingUp"
    >
      <div class="aaa">
        <el-carousel height="200px">
          <el-carousel-item
            v-for="(item, index) in banners"
            :key="index"
          >
            <img
              :src="item.image"
              style="height: 200px"
            >
          </el-carousel-item>
        </el-carousel>
        <home-recommend :recommends="recommends" />
        <home-feature-view />
        <tabcontrol
          ref="tabcontrol2"
          :tb-list="TBlist"
          @TBclick="TBclick"
        />
        <goods
          :goods="goods[currentType].list"
          @GoodsitemClick="GoodsitemClick"
        />
      </div>
    </scroll>
    <t-bclick
      v-show="isShowTB"
      @click.native="clickTB"
    />
  </div>
</template>

<script>
import homeRecommend from 'views/home/childComps/homeRecommend'
import homeFeatureView from 'views/home/childComps/homeFeatureView'

import NavBar from 'components/common/navbar/NavBar'
import Tabcontrol from 'components/content/tabcontrol/TabControl'
import Goods from 'components/content/goods/Goods'
import Scroll from 'components/content/scroll/scroll'
import TBclick from 'components/content/TBclick/TBclick.vue'

import { getmutitonDate, getHomeGoods } from 'network/home'

export default {
  name: 'Home',
  components: {
    homeRecommend,
    homeFeatureView,
    NavBar,
    Tabcontrol,
    Goods,
    Scroll,
    TBclick
  },
  data() {
    return {
      banners: [],
      recommends: [],
      TBlist: ['流行', '新款', '折扣'],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: 'pop',
      isShowTB: false,
      TabisShow: false,
      Tabshowheight: 0,
      saveY: 0
    }
  },
  activated() {
    this.$refs.scroll.refresh()
    this.$refs.scroll.scrollTo(0, this.saveY, 0)
  },
  deactivated() {
    this.saveY = this.$refs.scroll.scroll.y
  },
  created() {
    this.getmutitonDate()
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  mounted() {
    const refresh = this.debounce(this.$refs.scroll.refresh, 100)
    this.$bus.$on('imgload', () => {
      refresh()
    })
  },
  methods: {
    debounce(func, delay) {
      let timer = null
      return (...arg) => {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
          func.apply(this, arg)
        }, delay)
      }
    },
    /*
      网络请求
      */
    getmutitonDate() {
      getmutitonDate().then((res) => {
        this.banners = res.data.data.banner.list
        this.recommends = res.data.data.recommend.list
      })
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.data.list)
        this.goods[type].page += 1
      })
    },
    PullingUp() {
      this.getHomeGoods(this.currentType)
      this.$refs.scroll.scroll.finishPullUp()
    },

    /**
     * 组件监听
     */
    TBclick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
      this.$refs.tabcontrol1.currentIndex = index
      this.$refs.tabcontrol2.currentIndex = index
    },
    clickTB() {
      this.$refs.scroll.scrollTo(0, 0, 300)
    },
    Scroll(position) {
      this.isShowTB = (-position.y > 1000)
      this.TabisShow = (-position.y > this.Tabshowheight)
    },
    swiperimgLoad() {
      this.Tabshowheight = this.$refs.tabcontrol2.$el.offsetTop
    },
    GoodsitemClick(index) {
      this.$router.push('/detail/' + index.iid)
    }
  }
}
</script>
<style  scoped>
#home {
  height: 100vh;
  position: relative;
}
.navber {
  color: #f6f6f6;
  background-color: pink;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 9;
}
.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}
.TABflexd {
  position: fixed;
  top: 44px;
  left: 0px;
  right: 0px;
  z-index: 9;
  background-color: white;
}
.el-carousel__item img {
  width: 100%;
  height: 300px;
}
</style>
