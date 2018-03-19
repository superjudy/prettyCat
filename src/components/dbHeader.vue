<template>
  <div class="db-header">
    <div class="header-in">
      <div>豆瓣读书</div>
      <div>
        <input type="text" placeholder="书名、作者"/>
      </div>
      <div>
        <ul class="db-list">
          <li>
            <span>读书</span>
            <ul>
              <li></li>
            </ul>
          </li>
          <li>
            <span>电影</span>
            <ul>
              <li></li>
            </ul>
          </li>
          <li>
            <span>音乐</span>
            <ul>
              <li></li>
            </ul>
          </li>
          <li>
            <span>同城</span>
            <ul>
              <li></li>
            </ul>
          </li>
        </ul>
      </div>
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
</style>