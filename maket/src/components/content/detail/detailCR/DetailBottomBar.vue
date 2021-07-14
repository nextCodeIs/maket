<template>
  <div class="DetailBottomBar">
    <el-row>
      <el-col :span="4">
        <i class="el-icon-s-custom" />
        <div>客服</div>
      </el-col>
      <el-col :span="4">
        <i class="el-icon-goods" />
        <div>店铺</div>
      </el-col>
      <el-col :span="4">
        <i class="el-icon-star-off" />
        <div>收藏</div>
      </el-col>
      <el-col :span="7" class="car">
        <span @click="addCar()">加入购物车</span>
      </el-col>
      <el-col :span="5" class="buy">
        <span>购买</span>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'DetailBottomBar',
  data() {
    return {}
  },
  methods: {
    addCar() {
      this.$emit('addCar')
    }
  }
}
</script>

<style scoped>
.DetailBottomBar {
  line-height: 25px;
  text-align: center;
  height: 49px;
  background-color: #fff;
  border-top: 2px solid rgba(100, 100, 100, 0.1);
  font-size: 14px;
}
.car {
  background-color: yellow;
  line-height: 49px;
  font-size: 16px;
}
.buy {
  background-color: pink;
  line-height: 49px;
  font-size: 16px;
}
</style>>

