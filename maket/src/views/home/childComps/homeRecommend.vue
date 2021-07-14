<template>
  <div class="ReCommend">
    <div
      v-for="(item, id) in recommends"
      :key="id"
      class="ReCommenditem"
    >
      <a :href="item.link">
        <img
          :key="item.image"
          v-lazy="item.image"
          alt=""
        >
      </a>
      <div>{{ item.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {}
  }
}
</script>
<style  scoped>
.ReCommend {
  display: flex;
  width: 100%;
  text-align: center;
  border-bottom: 8px solid rgb(211, 208, 208);
}
.ReCommenditem {
  flex: 1;
  margin: 15px 0 30px;
}
.ReCommenditem img {
  width: 80px;
  height: 80px;
  margin-bottom: 15px;
}
</style>
