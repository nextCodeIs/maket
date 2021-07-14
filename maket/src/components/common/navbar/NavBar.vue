<template>
  <div class="navber">
    <div class="left"><slot name="left" /></div>
    <div class="center"><slot name="center" /></div>
    <div class="right"><slot name="right" /></div>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
    .navber{
        height: 44px;
        line-height: 44px;
        text-align: center;
        display: flex;
        box-shadow: 0 1px 1px  rgba(100,100,100,0.1);
    }
    .center{
        flex: 1;
    }
    .left, .right{
        width: 20px;
    }
</style>
