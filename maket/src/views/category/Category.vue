<template>
  <div class="category">
    <NavBar class="categoryNavBar">
      <div slot="center">分类</div>
    </NavBar>
    <Scroll class="content left">
      <el-row
        v-for="(item, index) in listData"
        :key="index"
        :class="{ listActive: index === currentIndex }"
        @click.native="changList(index, item)"
      >
        {{ item.title }}
      </el-row>
    </Scroll>
    <Scroll
      ref="scroll"
      class="content right"
    >
      <Goods :goods="goodsList" />
      <tabcontrol
        ref="tabcontrol2"
        :tb-list="TBlist"
        @TBclick="TBclick"
      />
      <Goods
        :goods="goodsListShow"
        @GoodsitemClick="GoodsitemClick"
      />
    </Scroll>
  </div>
</template>

<script>
import Goods from 'components/content/goods/Goods'
import NavBar from 'components/common/navbar/NavBar'
import Scroll from 'components/content/scroll/scroll'
import {
  getCategory,
  getSubcategory,
  getCategoryDetail
} from '@/network/category.js'
import Tabcontrol from 'components/content/tabcontrol/TabControl'
export default {
  name: 'Category',
  components: {
    NavBar,
    Scroll,
    Goods,
    Tabcontrol
  },
  data() {
    return {
      listData: [],
      currentIndex: 0,
      goodsList: [],
      goodsListShow: [],
      currentMiniWallkey: '0',
      TBlist: ['流行', '新款', '折扣'],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: 'pop',
      saveY: 0
    }
  },
  created() {
    this.getCategoryData()
  },
  mounted() {
    const refresh = this.debounce(this.$refs.scroll.refresh, 100)
    this.$bus.$on('imgload', () => {
      refresh()
    })
  },
  activated() {
    this.$refs.scroll.refresh()
    this.$refs.scroll.scrollTo(0, this.saveY, 0)
  },
  deactivated() {
    this.saveY = this.$refs.scroll.scroll.y
  },
  methods: {
    // 获取左边商品分类
    getCategoryData() {
      getCategory()
        .then((res) => {
          this.listData = res.data.data.category.list
          this.currentMiniWallkey = this.listData[0].miniWallkey
          this.getCurentGoods(this.listData[0].maitKey)
          this.getgoodsListShowData(this.currentMiniWallkey, this.currentType)
        })
        .catch((res) => {
          console.log(res)
        })
    },
    // 获取右边分类的商品类型
    getCurentGoods(val) {
      getSubcategory(val).then((res) => {
        this.goodsList = res.data.data.list
      })
    },
    // 点击左边显示右边
    changList(index, val) {
      this.currentIndex = index
      this.currentMiniWallkey = val.miniWallkey
      this.getCurentGoods(val.maitKey)
      this.$refs.scroll.scrollTo(0, 0, 0)
    },
    // 防抖函数
    debounce(func, delay) {
      let timer = null
      return function(...arg) {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
          func.apply(this, arg)
        }, delay)
      }
    },
    // 获取右边分类的商品
    getgoodsListShowData(val, type) {
      getCategoryDetail(val, type).then((res) => {
        this.goodsListShow = res.data
      })
    },
    // 点击进入详情页
    GoodsitemClick(val) {
      this.$router.push('/detail/' + val.iid)
    },
    // 右边商品分类选择
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
      this.getgoodsListShowData(this.currentMiniWallkey, this.currentType)
    }
  }
}
</script>

<style scoped>
.wrapper {
  height: 150px;
  background-color: red;

  overflow: hidden;
  /*overflow-y: scroll;*/
}
.left {
  width: 100px;
  line-height: 48px;
  text-align: center;
  font-size: 16px;
  background-color: rgba(100, 100, 100, 0.1);
  float: left;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  overflow: hidden;
}
.right {
  width: calc(100vw - 120px);
  float: right;
  position: absolute;
  top: 44px;
  bottom: 49px;
  right: 0;
  overflow: hidden;
}
.listActive {
  background-color: white;
  color: pink;
  font-size: 18px;
  font-weight: bold;
}
.categoryNavBar {
  background-color: pink;
}
</style>
