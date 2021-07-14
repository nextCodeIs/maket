<template>
  <div
    ref="swrpperx"
    class="swrpper"
  >
    <div>
      <slot />
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'Scroll',
  props: {
    probeType: {
      type: Number,
      default: 3
    },
    pullUpLoad: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      scroll: {}
    }
  },
  watch: {},
  mounted() {
    if (this.$refs.swrpperx) {
      setTimeout(() => {
        this.scroll = new BScroll(this.$refs.swrpperx, {
          click: true,
          probeType: this.probeType,
          pullUpLoad: this.pullUpLoad,
          _constructed: true,
          swipeTime: 1000,
          scrollX: false,
          useTransition: false,
          preventDefaultException: {
            tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|AUDIO)$/
          },
          bounce: false,
          preventDefault: true
        })
        this.scroll.on('scroll', (position) => {
          this.$emit('scroll', position)
        })
        this.scroll.on('pullingUp', () => {
          this.$emit('pullingUp')
        })
      }, 500)
    }
  },
  methods: {
    scrollTo(x, y, time = 300) {
      if (this.scroll.scrollTo) {
        this.scroll && this.scroll.scrollTo(x, y, time)
      }
    },
    refresh() {
      this.scroll && this.scroll.refresh && this.scroll.refresh()
    }
  }
}
</script>

<style  scoped>
</style>
