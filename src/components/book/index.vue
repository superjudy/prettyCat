<template>
    <div class="mv-index">
      <div>
        <div class="mv-top-bar">
          <h3>影院热映</h3>
          <div class="mv-more">更多</div>
        </div>
        <div class="mv-list">
          <ul class="con-list-temp">
            <li v-for="val in mvdata" :key="val.index">
              <img :src="val.images.small"/>
              <p class="con-list-name">{{val.title}}</p>
              <p class="con-list-rating">
                <a v-for="v in star" :key="v">
                  <img v-if="v == '1'" src="../../assets/img/star_on@2x.png" alt="" class="img-star"/>
                  <img v-if="v == '0'" src="../../assets/img/star_on@2x.png" alt="" class="img-star"/>
                </a>
                <span>{{val.rating.average}}</span>
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <div class="mv-top-bar">
          <h3>即将上映</h3>
          <div class="mv-more">更多</div>
        </div>
        <div class="mv-list coming-list">
          <ul class="con-list-temp">
            <li v-for="val in comingData" :key="val.index">
              <img :src="val.images.small"/>
              <p class="con-list-name">{{val.title}}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'index',
  data () {
    return {
      mvdata:null,
      star:[],
      ratingStar:null,
      comingData:null
    }
  },
  created(){
    this.getHotData();
    this.getComingData();
    //this.getStar();
  },
  methods:{
    getHotData(){
      axios({
        method:"get",
        url:"/api/movie/in_theaters"
      })
      .then((res) => {
        // console.log(res);
        this.mvdata = res.data.subjects;
      })
      .catch((error) => {
        console.log(error);
      });      
    },
    getComingData(){
      axios({
        method:"get",
        url:"/api/movie/coming_soon"
      })
      .then((res) => {
        // console.log(res);
        this.comingData = res.data.subjects;
      })
      .catch((error) => {
        console.log(error);
      }); 
    },
    getStar(){
      var _this = this;
      _this.ratingStar = _this.mvdata.rating.average/2;
      for(var i = 1; i < 5; i++){
        if(i < _this.ratingStar){
          _this.star.push('1');
        }else{
          _this.star.push('0');
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.mv-top-bar{
  width:100%;
  height:40px;
  line-height:40px;
  h3{
    float:left;
    font-size:15px;
    margin-left:15px;
  }
  .mv-more{
    float:right;
    margin-right:15px;
    color:#37a;
    cursor:pointer;
  }
}
.mv-list{
  width:100%;
  height:206px;
  overflow:hidden;
  .con-list-temp{
    width:800%;
    margin:0 10px;
    li{
      max-width:100px;
      float:left;
      margin:5px;
      p{
        font-size:12px;
        line-height:26px;
        text-align:center;
        cursor:pointer;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .con-list-rating{
        height:26px;
        line-height:26px;
        font-size:12px;
        a{
          display:inline-block;
          .img-star{
            width:10px;
            height:10px;
            display:block;
            margin:0 1px;
          }
        }
        span{
        }
      }
      img{
        width:100%;
        height:150px;
        display:block;
        cursor:pointer;
      }
    }
  }
}
.coming-list{
  height:190px;
}
</style>
