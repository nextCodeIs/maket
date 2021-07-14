<template>
  <div>
    <span class="text">具体参数</span>
    <table class="table">
      <tr v-for="(tr,index) in tables[0]" :key="index" class="table-tr">
        <td v-for="(td,id) in tr" :key="id" class="table-tr-td" :class="{active:id === currentIndex}">{{ td }}</td>
      </tr>
    </table>
    <table class="table">
      <tr v-for="(item,index) in Sets" :key="index" class="table-tr">
        <td class="table-tr-key">{{ item.key }}</td>
        <td class="table-tr-td-color">{{ item.value }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'DetailPrams',
  props: {
    detailParams: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      DetailParam: {},
      tables: [],
      Sets: [],
      image: null,
      imageLength: 0,
      currentIndex: 0
    }
  },
  watch: {
    detailParams(New) {
      this.DetailParam = New
      this.tables = New.rule.tables
      this.Sets = New.info.set
    }
  }
}
</script>

<style scoped>
.text{
    width: 100%;
    line-height: 40px;
    padding: 0 8px;
    font-weight: bold;
}
.table{
    width: 100%;
    text-align: center;
    line-height: 25px;
}

.table-tr-td{
    border: 1px solid rgba(100,100,100,0.08);
}
.table-tr-td-color{
    color: red;
}
.DetailParam-image{
    width: 100%;
}
.table-tr-key{
    text-align: center;
    width: 20%;
    border: 1px solid rgba(100,100,100,0.08)
}
.active{
    width: 20%;
}
</style>
