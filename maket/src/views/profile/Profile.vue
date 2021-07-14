<template>
  <div class="profile">
    <el-row class="profileNavBar">
      <NavBar>
        <div slot="center">个人信息</div>
      </NavBar>
      <el-row>
        <el-col class="profileNavBar_top">
          <img class="image">
          <div class="profileNavBar_top_div1">
            <p class="text1">登入/注册</p>
            <p>
              <i class="el-icon-mobile-phone" /><span class="text2">暂无绑定手机号</span>
            </p>
          </div>
          <div class="profileNavBar_top_div2">
            <i class="el-icon-arrow-right" />
          </div>
        </el-col>
      </el-row>
    </el-row>
    <el-row class="center">
      <el-col :span="8">
        <el-row><span class="num">{{ money }}</span>元</el-row>
        <el-row>余额</el-row>
      </el-col>
      <el-col :span="8">
        <el-row><span class="num">{{ money }}</span>个</el-row>
        <el-row>优惠券</el-row>
      </el-col>
      <el-col :span="8">
        <el-row><span class="num">{{ money }}</span>分</el-row>
        <el-row>积分</el-row>
      </el-col>
    </el-row>
    <el-row class="center_2">
      <el-col><i class="el-icon-document msg" /><span>我的消息</span></el-col>
      <el-col><i class="el-icon-goods market" /><span>积分商城</span></el-col>
      <el-col><i class="el-icon-star-off card" /><span>会员卡</span></el-col>
    </el-row>
    <el-row class="end">
      <el-col><i class="el-icon-s-goods car" /><span>我的购物车</span></el-col>
      <el-col><i class="el-icon-platform-eleme car" /><span>下载购物APP</span></el-col>
    </el-row>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  name: 'Profile',
  components: {
    NavBar
  },
  data() {
    return {
      money: 0
    }
  }
}
</script>

<style scoped>
.profile {
  background: rgba(100, 100, 100, 0.1);
}
.profileNavBar {
  background-color: pink;
}
.profileNavBar_top {
  line-height: 30px;
  padding: 8px;
}
.profileNavBar_top img {
  height: 60px;
  float: left;
  width: 60px;
  border-radius: 30px;
  padding: 4px;
  background: lemonchiffon;
  margin: 0 8px;
}
.profileNavBar_top_div1 {
  height: 60px;
  float: left;
  width: calc(100vw - 128px);
  color: white;
}
.profileNavBar_top_div2 {
  height: 60px;
  float: left;
  width: 22px;
  color: white;
  text-align: center;
  line-height: 60px;
}
.text1 {
  font-size: 16px;
}
.text2 {
  font-size: 12px;
}
.center {
  text-align: center;
  line-height: 20px;
  font-size: 12px;
  padding: 8px;
  margin: 0 0 12px 0;
  background: white;
}
.num {
  font-size: 18px;
  font-weight: bold;
  color: tomato;
}
.center_2 {
  text-align: left;
  line-height: 20px;
  font-size: 16px;
  padding: 8px;
  margin: 0 0 12px 0;
  line-height: 30px;
  background: white;
}
.msg {
  font-size: 20px;
  margin: 0 12px 0 8px;
}
.market {
  font-size: 20px;
  margin: 0 12px 0 8px;
  color: tomato;
}
.card {
  font-size: 20px;
  margin: 0 12px 0 8px;
  color: yellow;
}
.end {
  text-align: left;
  line-height: 20px;
  font-size: 16px;
  padding: 8px;
  line-height: 30px;
  background: white;
}
.car {
  font-size: 20px;
  margin: 0 12px 0 8px;
  color: pink;
}
</style>
