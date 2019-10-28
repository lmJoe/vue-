<template>
  <div id="app">
    <el-container>
      <el-footer>
        <el-row :gutter="20" class="footer">
          <el-col :span="6" style="padding:6px 0;" v-for="(item, key) in footnavs" :key="key"><router-link :to='item.to' class="grid-content bg-purple"><i :class="item.selected"></i><span>{{item.name}}</span></router-link></el-col>
          <!--            <el-col :span="6" style="padding:6px 0;"><router-link to="/movieslist" class="grid-content bg-purple"><i class="el-icon-video-camera"></i><span>电影</span></router-link></el-col>-->
          <!--            <el-col :span="6" style="padding:6px 0;"><router-link to="/video" class="grid-content bg-purple"><i class="el-icon-video-camera-solid"></i><span>淘气视频</span></router-link></el-col>-->
          <!--            <el-col :span="6" style="padding:6px 0;"><router-link to="/user" class="grid-content bg-purple"><i class="el-icon-user"></i><span>我的</span></router-link></el-col>-->
        </el-row>
      </el-footer>
    </el-container>
    <router-view></router-view>
  </div>
</template>
<script>
// import recharge from '@/components/user/recharge'
export default {
  name: 'HelloWorld',
  data () {
    return {
      logo: require('../assets/images/logo.png'),
      recharge: require('../assets/images/h5tubiao.png'),
      bannerImg: [],
      moviesdetail: [],
      moviestype: [],
      footnavs: [
        {
          to: '/welcomepage',
          name: '首页',
          nav_index: 1,
          selected: 'el-icon-house'
        },
        {
          to: '/movieslist',
          name: '有趣段子',
          nav_index: 2,
          selected: 'el-icon-video-camera'
        },
        {
          to: '/videoList',
          name: '音乐榜',
          nav_index: 3,
          selected: 'el-icon-video-camera-solid'
        },
        {
          to: '/user',
          name: '我的',
          nav_index: 4,
          selected: 'el-icon-user'
        }
      ]
    }
  },
  mounted () {},
  methods: {},
  created: function () {}
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
  .el-footer{
    position:fixed;
    width:100%;
    bottom:0;
    left:0;
    background-color: #323232;
    color: #fff;
    text-align: center;
    color:#fff;
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
  .footer i{
    display:block;
    width:30px;
    margin:0 auto;
    color:#fff;
    font-size:30px;
  }
  .footer span{
    font-size:13px;
    color:#fff;
  }
</style>
