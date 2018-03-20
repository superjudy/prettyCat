<template>
    <div class="book-aside aside-con">
      <div class="">
        <h3>标签列表</h3>
        <ul class="tag-list">
          <li>{{bookList}}</li>
        </ul>
        <ul class="tag-list-v">
          <li>标签</li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  name: 'book-aside',
  data () {
    return {
      
    }
  },
  computed:{
    bookList(){
        return this.$store.state.test.name;
      }
  },
  created:function(){

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
