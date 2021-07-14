<template>
  <div class="cart">
    <NavBar class="cartNavBar">
      <div slot="center">
        购物车({{ this.$store.state.productList.length }})
      </div>
    </NavBar>
    <div class="center">
      <el-checkbox-group
        v-model="selectPruductList"
        @change="handleCheckedProductChange"
      >
        <el-checkbox
          v-for="(item, index) in PruductList"
          :key="index"
          class="product"
          :label="item"
        >
          <img
            :src="item.image"
            class="product_image"
          >
          <div class="product_text">
            <div class="product_text_top1">{{ item.title }}</div>
            <div class="product_text_top2">{{ item.desc }}</div>
            <div style="width: 99px; height: 30px; float: left" />
            <div class="product_text_end">
              <div class="product_text_price">￥{{ item.price }}</div>
              <div class="product_text_num">x{{ item.num }}</div>
            </div>
          </div>
        </el-checkbox>
      </el-checkbox-group>
    </div>
    <NavBar class="cartBottomBar">
      <div
        slot="left"
        class="left"
      >
        <el-checkbox
          v-model="checkAll"
          :indeterminate="isIndeterminate"
          @change="handleCheckAllChange"
        >全选</el-checkbox>
      </div>
      <div slot="center">合计:￥{{ totleMoney }}</div>
      <div
        slot="right"
        class="right"
        @click="overMoney"
      >
        去结算({{ selectPruductList.length }})
      </div>
    </NavBar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  name: 'Cart',
  components: {
    NavBar
  },
  data() {
    return {
      selectPruductList: [],
      showSelect: false,
      PruductList: [],
      totleMoney: 0,
      checkAll: false,
      isIndeterminate: true
    }
  },
  computed: {
    Pruduct() {
      return this.$store.state.productList
    }
  },
  watch: {
    Pruduct: {
      immediate: true,
      deep: true,
      handler() {
        this.PruductList = this.$store.state.productList
      }
    },
    selectPruductList(newValue) {
      this.totleMoney = 0
      newValue.forEach((e) => {
        this.totleMoney += e.price * e.num
      })
    }
  },
  created() { },
  methods: {
    handleCheckAllChange(val) {
      this.selectPruductList = val ? this.PruductList : []
      this.isIndeterminate = false
    },
    handleCheckedProductChange(val) {
      const checkedCount = val.length
      this.checkAll = checkedCount === this.PruductList.length
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.PruductList.length
    },
    overMoney() {
      if (this.selectPruductList.length === 0) {
        this.$message({
          message: '请选择需要结算的商品',
          type: 'warning'
        })
      }
    }
  }
}
</script>

<style scoped >
.cart {
  height: 100vh;
}
.cartNavBar {
  background-color: pink;
}
.cartBottomBar {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 49px;
  background-color: rgba(100, 100, 100, 0.1);
}
.center {
  position: absolute;
  left: 0;
  right: 0;
  top: 49px;
  bottom: 0;
}
.product {
  width: 100%;
  padding: 8px;
  float: left;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}
.product_image {
  width: 80px;
  height: 120px;
  border-radius: 4px;
  float: left;
}
.product_text {
  width: 60px;
  height: 120px;
  float: left;
  padding-left: 8px;
  line-height: 30px;
}
.product_text_top1 {
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  width: calc(100vw - 120px);
  float: left;
}
.product_text_top2 {
  font-size: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  width: calc(100vw - 120px);
  float: left;
}
.product_text_end {
  float: left;
  width: calc(100vw - 120px);
  padding: 0 8px 0 0;
}
.product_text_price {
  font-size: 16px;
  float: left;
  width: 30px;
  color: orange;
}
.product_text_num {
  font-size: 14px;
  float: right;
  width: 60px;
  text-align: right;
}
.product >>> .el-checkbox__input {
  position: absolute;
  top: 60px;
  left: 3px;
}
.left {
  width: 60px;
}
.right {
  width: 100px;
  background-color: crimson;
}
</style>
