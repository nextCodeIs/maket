<template>
  <tab-bar>
    <tab-baritem path="/home">
      <img slot="item-photo" src="~assets/img/tabbar/home.svg" alt="">
      <img slot="item-photo-active" src="~assets/img/tabbar/home_active.svg" alt="">
      <div slot="item-text">首页</div>
    </tab-baritem>
    <tab-baritem path="/category">
      <img slot="item-photo" src="~assets/img/tabbar/category.svg" alt="">
      <img slot="item-photo-active" src="~assets/img/tabbar/category_active.svg" alt="">
      <div slot="item-text">分类</div>
    </tab-baritem>
    <tab-baritem path="/cart">
      <img slot="item-photo" src="~assets/img/tabbar/shopcart.svg" alt="">
      <img slot="item-photo-active" src="~assets/img/tabbar/shopcart_active.svg" alt="">
      <div slot="item-text">购物车</div>
    </tab-baritem>
    <tab-baritem path="/profile">
      <img slot="item-photo" src="~assets/img/tabbar/profile.svg" alt="">
      <img slot="item-photo-active" src="~assets/img/tabbar/profile_active.svg" alt="">
      <div slot="item-text">我的</div>
    </tab-baritem>
  </tab-bar>
</template>

<script>
import TabBar from 'components/common/TabBar/TabBar'
import TabBaritem from 'components/common/TabBar/TabBarItem'
export default {
  name: 'MainTabBar',
  components: {
    TabBar,
    TabBaritem
  }
}
</script>

<style>
</style>
