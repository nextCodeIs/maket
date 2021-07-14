<template>
  <div class="TBcontrol">
    <div
      v-for="(item,index) in tbList"
      :key="index"
      class="TBcontrol-item"
      :class="{active:index == currentIndex}"
      @click="TBclick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>

</template>

<script>
export default {
  name: 'TabControl',
  props: {
    tbList: {
      type: Array,
      default() { return [] }
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    TBclick(index) {
      this.currentIndex = index
      this.$emit('TBclick', index)
    }
  }
}
</script>

<style  scoped>
.TBcontrol {
  display: flex;
  text-align: center;
  line-height: 20px;
  padding: 10px 0;
}
.TBcontrol-item {
  flex: 1;
}
.active {
  color: var(--color-tint);
}
.active span {
  border-bottom: 3px solid var(--color-tint);
}
</style>
