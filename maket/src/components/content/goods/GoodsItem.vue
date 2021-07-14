<template>
  <div>
    <div
      v-for="(item, index) in goods"
      :key="index"
      class="GoodsItem"
      @click="GoodsitemClick(index)"
    >
      <img
        :key="item.image || item.img || item.show.img"
        v-lazy="item.image || item.img || item.show.img"
        class="goodsItemimg"
        @load="imgload"
      >
      <div class="goods-info">
        <p>{{ item.title }}</p>
        <span v-if="item.price" class="price">price:{{ item.price }}</span>
        <span v-if="item.cfav" class="collect">{{ item.cfav }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsItem',
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      id: null
    }
  },
  methods: {
    imgload() {
      this.$bus.$emit('imgload')
    },
    GoodsitemClick(index) {
      this.$emit('GoodsitemClick', this.goods[index])
    }
  }
}
</script>

<style  scoped>
.GoodsItem {
  padding-bottom: 40px;
  position: relative;
  width: 48%;
}

.GoodsItem img {
  width: 100%;
  border-radius: 5px;
}

.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}

.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}

.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}

.goods-info .collect {
  position: relative;
}

.goods-info .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>
