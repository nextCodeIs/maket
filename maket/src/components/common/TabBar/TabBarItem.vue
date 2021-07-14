<template>
  <!--所有的item都展示同一个图片, 同一个文字-->
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="isActive"><slot name="item-photo" /></div>
    <div v-else><slot name="item-photo-active" /></div>
    <div :style="activeStyle"><slot name="item-text" /></div>
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  props: {
    path: {
      type: String,
      default() {
        return '/'
      }
    }
  },
  data() {
    return {
      color1: 'red'
    }
  },
  computed: {
    isActive() {
      return this.$route.path !== this.path
    },
    activeStyle() {
      return this.isActive ? {} : { color: this.color1 }
    }
  },
  methods: {
    itemClick() {
      return this.$router.push(this.path)
    }
  }
}
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }

  .tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }
</style>
