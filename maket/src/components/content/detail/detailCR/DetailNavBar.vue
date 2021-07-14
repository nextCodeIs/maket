<template>
  <div class="detail">
    <nav-bar class="navbar">
      <div
        slot="left"
        class="back"
        @click="backClick"
      >
        <img src="~assets/img/common/back.svg">
      </div>
      <div
        slot="center"
        class="TOPtext"
      >
        <div
          v-for="(item,Index) in TOPtext"
          :key="Index"
          class="TOPtextitem"
          :class="{active:Index ===currentIndex }"
          @click="TOPtexclick(Index)"
        >{{ item }}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

export default {
  name: 'DetailNavBar',
  components: {
    NavBar
  },
  props: {
    index: {
      type: Number,
      default() {
        return 0
      }
    }
  },
  data() {
    return {
      TOPtext: ['商品', '详情', '参数', '评论'],
      currentIndex: 0
    }
  },
  watch: {
    index: {
      handler(newVal) {
        this.currentIndex = newVal
        // console.log(newVal);
      },
      deep: true
    }
  },
  methods: {
    TOPtexclick(index) {
      this.currentIndex = index
      this.$emit('texClick', index)
    },
    backClick() {
      this.$router.back()
    }
  }
}
</script>

<style scoped>
.detail {
  text-align: center;
  line-height: 44px;
  position: relative;
  z-index: 99;
}

.TOPtext {
  display: flex;
  font-size: 12px;
  padding: 0 30px;
}
.TOPtextitem {
  flex: 1;
}
.back {
  margin-top: 6px;
}
.active {
  color: var(--color-high-text);
}
</style>
