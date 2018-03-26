<template>
  <div class="db-header">
    <div class="header-in">
      <h1>豆瓣</h1>
      <div class="em"></div>
      <ul class="db-list">
        <li>电影</li>
        <li>图书</li>
        <li>音乐</li>
        <li>同城</li>
      </ul>
      <div class="search"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'db-header',
  data () {
    return {
    
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.db-header{
    width: 100%;
    height: 40px;
    background: #f5f6f4;
    line-height: 40px;
    margin:0 auto;
}
.header-in,.header-in ul{
    display: flex;
    display: -webkit-flex;
    flex-wrap:wrap;
    justify-content:center;    
}
.header-in h1{
    width: 20%;
    font-size: 18px;
    font-weight: bold;
    letter-spacing: 1px;
}
.header-in .em{
    width:30%;
}
.header-in .search{
    width: 10%;
}
.header-in .db-list{
    width: 40%;
}
.header-in .db-list>li{
    width: 25%;
    cursor: pointer;
}
</style>