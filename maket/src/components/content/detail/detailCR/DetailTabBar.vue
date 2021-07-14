<template>
  <div>
    <tab-bar>
      <tab-bar-item>
        <div slot="item-text">
          <span>我是TexT</span>
        </div>
        <div slot="item-photo">
          <span>我是PHOTO</span>
        </div>
        <div slot="item-photo-active">
          <span>我是ACtive</span>
        </div>
      </tab-bar-item>
    </tab-bar>
  </div>

</template>

<script>
import TabBar from '../../../common/TabBar/TabBar.vue'
import TabBarItem from '../../../common/TabBar/TabBarItem.vue'
export default {
  name: 'DetailTabBar',
  components: {
    TabBar,
    TabBarItem }

}
</script>

<style  scoped>

</style>
