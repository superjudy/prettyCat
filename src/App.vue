<template>
  <div id="app">
    <router-view/>
    <div class="main-area">
      <router-view name="main"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .main-area{
    width:100%;
    margin:15px auto 0;
    overflow: hidden;
  }
}
</style>
