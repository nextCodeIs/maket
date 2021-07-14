<template>
  <div>
    <goods-item :goods="goods" class="goods" @GoodsitemClick="GoodsitemClick" />
  </div>
</template>

<script>
import GoodsItem from 'components/content/goods/GoodsItem'
export default {
  name: 'Goods',
  components: {
    GoodsItem
  },
  props: {
    goods: {
      type: Array,
      default() {
        return {}
      }
    }
  },
  methods: {
    GoodsitemClick(val) {
      this.$emit('GoodsitemClick', val)
    }
  }
}
</script>

<style  scoped>
  .goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 2px;
  }
</style>
