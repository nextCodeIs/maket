<template>
  <div class="Com">
    <div class="Com-NavBar">
      <div slot="left" class="Com-NavBar-left"><p>用户评价</p></div>
      <div slot="right" class="Com-NavBar-right" @click="moreText()">
        <p>{{ showParse }}</p>
      </div>
    </div>
    <div v-if="noShowAll" class="User">
      <div class="User-meesage">
        <img :src="newData.user.avatar" alt="">
        <span>{{ newData.user.uname }}</span>
      </div>
      <div class="User-text">
        <p>{{ newData.content }}</p>
        <div class="User-text-time">
          <p>
            <span class="User-text-time-span1">{{ newData.created }}</span>
            <span class="User-text-time-span2">{{ newData.style }}</span>
          </p>
          <img
            v-for="(item, index) in newData.images"
            :key="index"
            :src="item"
            alt=""
          >
        </div>
      </div>
    </div>
    <div v-else>
      <div v-for="(item, index) in newDataList" :key="index" class="User">
        <div class="User-meesage">
          <img :src="item.user.avatar" alt="">
          <span>{{ item.user.uname }}</span>
        </div>
        <div class="User-text">
          <p>{{ item.content }}</p>
          <div class="User-text-time">
            <p>
              <span class="User-text-time-span1">{{ item.created }}</span>
              <span class="User-text-time-span2">{{ item.style }}</span>
            </p>
            <img v-for="(e, i) in item.images" :key="i" :src="e" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailComment',
  props: {
    detailComment: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      newData: {
        user: {}
      },
      noShowAll: true,
      newDataList: [],
      showParse: '更多'
    }
  },
  watch: {
    detailComment(newValue) {
      this.newDataList = newValue.list
      this.newData = newValue.list[0]
      // this.user = newValue.list[0].user
    }
  },
  methods: {
    moreText() {
      this.noShowAll = !this.noShowAll
      if (this.noShowAll) {
        this.showParse = '收起'
      } else {
        this.showParse = '更多'
      }
      this.$emit('moreText')
    }
  }
}
</script>

<style scoped>
* {
   touch-action: none;
}
.Com {
  width: 100%;
}
.Com-NavBar {
  width: 100%;
  line-height: 44px;
  display: flex;
  border: 2px solid rgba(100, 100, 100, 0.08);
}
.Com-NavBar-left {
  width: 100px;
  font-size: 18px;
  text-align: left;
  flex: 1;
  margin-left: 20px;
}
.Com-NavBar-right {
  font-size: 15px;
  flex: 1;
  text-align: right;
  margin-right: 20px;
}
.User {
  width: 100%;
  padding: 10px;
}
.User-meesage {
  width: 100%;
  height: 44px;
  line-height: 44px;
}
.User-meesage img {
  width: 44px;
  height: 44px;
  border-radius: 50%;
}
.User-meesage span {
  margin-left: 20px;
  font-size: 18px;
  font-weight: bold;
}
.User-text {
  margin-top: 10px;
  line-height: 30px;
}
.User-text-time {
  color: #7e7a7a;
}
.User-text-time-span1 {
  color: slategray;
}
.User-text-time-span2 {
  color: slategray;
  margin: 0 0 0 10px;
}
</style>
