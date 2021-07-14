<template>
  <div class="detail-shop-img">
    <div class="detail-shop-img-desc">{{ detailShopImgData.desc }}</div>
    <div
      v-for="(item,index) in detailShopImgData.detailImage"
      :key="index"
      class="detail-shop-img-item"
    >
      <div class="detail-shop-img-item-text">{{ item.key }}</div>
      <div
        v-for="(items,id) in item.list"
        :key="id"
        class="detail-shop-img-item-items"
      >
        <img
          :src="items"
          alt=""
          @load="detailShopImgLoad"
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailShopImg',
  props: {
    detailShopImgData: {
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
    detailShopImgLoad() {
      this.$emit('detailShopImgLoad')
    }
  }
}
</script>

<style scoped>
.detail-shop-img {
  width: 100%;
}
.detail-shop-img-desc {
  width: 100%;
  line-height: 24px;
  font-size: 14px;
  text-indent: 2pc;
  text-align: justify;
  padding: 0 8px;
}
.detail-shop-img-item {
  width: 100%;
}
.detail-shop-img-item-text {
  width: 100%;
  line-height: 40px;
  padding: 0 8px;
  font-weight: bold;
}
.detail-shop-img-item-items {
  width: 100%;
}
.detail-shop-img-item-items img {
  width: 100%;
}
</style>
