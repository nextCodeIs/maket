<template>
  <div class="Goods">
    <div class="Goods-desc">{{ detailGoodsData.desc }}</div>
    <div class="Goods-price">
      <div class="Goods-newprice">{{ detailGoodsData.price }}</div>
      <div class="Goods-oldPrice">{{ detailGoodsData.oldPrice }}</div>
      <div class="Goods-discount">{{ detailGoodsData.discount }}</div>
    </div>
    <div class="Goods-columns">
      <div v-for="(item,index) in detailGoodsData.columns" :key="index" class="Goods-columns-item">{{ item }}</div>
    </div>
    <div class="Goods-services">
      <div v-for="(item,index) in detailGoodsData.services" :key="index" class="Goods-services-item">
        <img :src="item.icon">
        <span>{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailGoods',
  props: {
    detailGoodsData: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style  scoped>
.Goods{
    margin: 10px 15px;
    font-size: 15px;
    box-shadow: 0 3px 0px  rgba(100, 100,100, 0.1);
}
 .Goods-desc{
    width: 100%;
    line-height: 25px;
    overflow: hidden;
    font-size: 15px;
    font-weight: bold;
    margin: 0 0 5px 0;

 }
 .Goods-price{
     display: flex;
    width: 100%;
    height: 25px;
 }
 .Goods-newprice{
     color:var(--color-high-text);
     font-weight: bold;
 }
 .Goods-oldPrice{
     font-size: 8px;
     color: silver;
     margin: 5px;
     text-decoration:line-through;
 }
.Goods-discount{
     font-size: 8px;
     color: white;
     background-color: var(--color-high-text);
     border-radius:6px ;
    height: 12px;
    line-height: 12px;
 }
.Goods-columns{
    display: flex;
    width: 100%;
    height: 25px;
    margin: 20px 0px;
    justify-content: space-between;

}
.Goods-columns-item{
   font-size: 12px;
   color: silver;
}
.Goods-services{
    display: flex;
    justify-content:space-around;
    width: 100%;
    height: 25px;
    line-height: 25px;
}
.Goods-services-item{
    line-height: 25px;
    font-size: 10px;
}
.Goods-services-item img{
    width: 10px;
    height: 10px;
}
</style>
