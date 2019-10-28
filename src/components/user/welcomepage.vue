<template>
    <div>
    <el-header class="header">
        <el-row>
            <el-col :span="8"><div class="logo"><img :src="logo" alt=""></div></el-col>
            <el-col :span="12"><div class="headerCont"></div></el-col>
            <el-col :span="4" :offset="12"><router-link to="/recharge" class="rechargeIcon"><img :src="recharge" alt=""></router-link></el-col>
        </el-row>
    </el-header>
    <el-main>
        <swiper  class="swiper-wrapper">
            <swiper-slide class="swiper-slide bannerImg" v-for="item in bannerImg"><img :src="'https://images.weserv.nl/?url='+item.images.medium" alt=""></swiper-slide>
        </swiper >
        <div class="noticCon">
            <el-col :span="3" class="tzIcon">
                <img src="../../assets/images/tongzhi.png" alt="">
            </el-col>
            <el-col :span="20" class="noticMsg"><marquee id="msgNews" scrollamount="4" scrolldelay="100" direction="left">演示站，诚挚为您服务！</marquee></el-col>
        </div>
        <div class="redbag">
            <router-link to="/recharge"><img src="../../assets/images/qiang.jpg" alt=""></router-link>
        </div>
        <div class="moviesCont">
            <div class="moviesList" v-for="item in moviesdetail">
                <router-link :to="{path:'/moviesdetail',query: {name: item.id}}" @click.native='saveId(item)'>
                    <div class="moviesImg">
                        <img :src="'https://images.weserv.nl/?url='+item.images.small" alt="">
                    </div>
                </router-link>
                <div class="moviesDetail">
                    <strong>{{item.title}}</strong>
                    <p style="display:inline-block;" v-for="item in item.pubdates">{{item}} / </p>
                    <div>
                        <p style="display:inline-block;" v-for="item in item.genres"><span>{{item}}/ </span></p>
                    </div>
                    <div>
                        <p style="display:inline-block;" v-for="itemName in (item.casts)"><span>{{itemName.name}}</span> / </p>
                    </div>
                    <a target="_blank" :href="item.alt">
                        <p>【电影详情】</p>
                    </a>
                </div>
            </div>
        </div>
        <!--          出口：渲染内容-->
        <router-view></router-view>
    </el-main>
    </div>
</template>
<script>
// import recharge from '@/components/user/recharge'
export default {
  name: 'welcomepage',
  data () {
    return {
      logo: require('../../assets/images/logo.png'),
      recharge: require('../../assets/images/h5tubiao.png'),
      bannerImg: [],
      moviesdetail: [],
      moviestype: [],
      swiperOption: {
        notNextTick: true,
        loop: true,
        autoplay: {
          delay: 1500,
          stopOnLastSlide: false,
          /* 触摸滑动后是否继续轮播 */
          disableOnInteraction: false
        },
        speed: 800,
        // 小手掌抓取滑动
        grabCursor: true,
        slidesPerView: 3,
        spaceBetween: 30
      }
    }
  },
  mounted () {},
  methods: {
    saveId (item) {
      // 给router-link添加点击事件，并且使用获取router-link参数的方法获取到参数
      // var saveid = this.$route.query.name
      // 将获得的id存入idList的sessionStorage中，方便将id放进vuex
      // 将每个电影的详细信息存入sessionstorage
      sessionStorage.setItem('idList', JSON.stringify(item))
      // 修改状态值
      this.$store.commit('saveId', this.$route.query.name)
    }
  },
  created: function () {
    var url = '/api/v2/movie/in_theaters'
    this.$axios.get(url, {
      // params:{
      // name:'aa',
      // age:22
      // }
      // params: this.user
    })
      .then(res => {
        var subjects = res.data.subjects
        console.log(res)
        this.bannerImg = subjects
        this.moviesdetail = subjects
        this.moviestype = subjects
      }).catch(err => {
        console.log(err)
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .el-header{
        background-color: #ed1818;
        color: #fff;
        text-align: center;
        line-height: 60px;
    }
    .el-main {
        background-color: #f2f2f2;
        color: #333;
        text-align: center;
        padding:0;
    }
    .header {
        height: 44px !important;
        line-height: 44px;
        padding: 0 10px;
    }
    .headerCont{
        width:100%;
    }
    .logo img,.rechargeIcon img{
        width:100%;
        vertical-align: middle;
    }
    .bannerImg{
        height:200px;
    }
    .bannerImg img{
        width:100%;
    }
    .noticCon{
        padding:0 15px;
        background:#fff;
        height:40px;
    }
    .tzIcon img{
        width:100%;
    }
    .noticMsg{
        margin-left:10px;
        font-size:15px;
    }
    .noticMsg marquee{
        line-height:37px;
    }
    .redbag{
        padding:10px;
    }
    .redbag img{
        width:100%;
        border-radius: 8px;
    }
    .moviesDetail strong{
        padding: 5px 0;
        font-size: 18px;
        display: block
    }
    .moviesDetail span{
        /*display:block;*/
    }
    .moviesList{
        width: 92%;
        margin:30px auto;
        background:#f2f2f2;
        padding: 25px 0;
    }
    .moviesImg{
        width:100%;
        overflow:hidden;
    }
    .moviesImg img{
        max-width:100%;
        height:auto !important;
    }
    .moviesDetail p{
        padding:5px 0;
    }
    .moviesDetail{
        color:#333;
        font-size:12px;
        padding:0 10px;
    }
    .moviesCont{
        background:#fff;
        padding:5px;
    }
</style>
