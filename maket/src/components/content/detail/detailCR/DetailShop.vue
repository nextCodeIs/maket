<template>
  <div id="detail-shop">
    <div class="shop-top">
      <div class="shop-img"><img :src="detailShopData.shopLogo" alt=""></div>
      <div class="shop-span"><span>{{ detailShopData.name }}</span></div>
    </div>
    <div class="shop-sells">
      <div class="shop-sellsNub">
        <div>
          <p>{{ detailShopData.sells }}</p>
          <p>总销量</p>
        </div>
        <div>
          <p>{{ detailShopData.goods }}</p>
          <p>全部宝贝</p>
        </div>
      </div>
      <div class="shop-sellsLev">
        <div v-for="(item,index) in detailShopData.score" :key="index" class="shop-sellsLevTx">
          <div class="shop-sellsLevTx-content1">
            {{ item.name }}
          </div>
          <div class="shop-sellsLevTx-content2" :class="{active2:item.isBetter}">
            {{ item.score }}
          </div>
          <div class="shop-sellsLevTx-content3" :class="{active3:item.isBetter}">
            {{ item.isBetter?'高':'低' }}
          </div>
        </div>
      </div>
    </div>
    <div class="enter-shop">
      <div class="enter-shop-item">
        <a :href="detailShopData.shopUrl">
          <p>进店逛逛</p>
        </a>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailShop',
  props: {
    detailShopData: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<style  scoped>
#detail-shop{
    width: 100%;
    margin: 15px 10px;
        border-bottom: 3px solid rgba(100, 100, 100,0.1);
}
.shop-top{
    width: 100%;
    display: flex;
}
.shop-img img{
    width: 44px;
    height: 44px;
    margin: 0 10px 0 0;
}
.shop-span span{
    height: 44px;
line-height: 44px;
}

.shop-sells{
    display: flex;
    text-align: center;
}

.shop-sellsNub{
    width: 50%;
    border-right:1px solid rgba(100, 100, 100,0.1) ;
    display: flex;
    margin: 0px auto;
    height: 100px;

}
.shop-sellsNub div{
    width: 50%;
    text-align: center;
    margin-top: 30px;
}
.shop-sellsLev{
    width: 50%;
    height: 100px;
}
.shop-sellsLevTx{
    display: flex;
}
.shop-sellsLevTx-content1{
   margin: 5px 5px;
   width: 40%;
}
.shop-sellsLevTx-content2{
   margin: 5px 2px;
   width: 20%;
   color: green;
   border-radius: 4px;
}
.shop-sellsLevTx-content3{
   margin: 5px 5px;
   width: 10%;
   background-color: green;
   color: white;
   border-radius: 4px;
}
.active2{
    color: red;
}
.active3{
    background-color: red;

}
.enter-shop{
    width: 100%;
    text-align: center;
    margin-bottom:20px ;
}
.enter-shop-item{
    width: 100px;
    line-height: 30px;
    border-radius: 8px;
    background-color: rgba(100, 100, 100,0.05);
    margin:0px auto;
}

</style>
