<template>
    <div class="moviesDetail">
        <div class="moviesVideo"><img :src="'https://images.weserv.nl/?url='+getIdList.images.medium" alt=""></div>
        <div class="moviesMsg">
            <div class="f-cb">
                <div class="moviesImg-small fl"><img :src="'https://images.weserv.nl/?url='+getIdList.images.small" alt=""></div>
                <div class="mvsdetail fl">
                    <p class="title">{{getIdList.title}} <span>({{getIdList.rating.average}})</span></p>
                    <p>导演：<span v-for="(item, key) in getIdList.directors" :key="key">{{item.name}} / </span></p>
                    <p class="genres"><span v-for="(item, key) in getIdList.genres" :key="key">{{item}} / </span>{{getIdList.durations[0]}}</p>
                    <p v-for="(item, key) in getIdList.pubdates" :key="key">{{item}}上映</p>
                    <p class="casts" v-for="(item, key) in getIdList.casts" :key="key">{{item.name}} / </p>
                </div>
            </div>
            <div class="moviesOther">
                <button class="el-icon-star-off" @click="isActive()">想看</button>
                <button class="el-icon-star-off" @click="isActive()">看过</button>
            </div>
            <div class="autorList">
                <p>演职人员</p>
                    <swiper class="swiper-wrapper">
                        <swiper-slide class="swiper-slide autoImgList" v-for="item in getIdList.casts">
                            <a target="_blank" :href="item.alt">
                                <div class="autoImg"><img :src="'https://images.weserv.nl/?url='+item.avatars.small" alt=""></div>
                                <div class="autoName">{{item.name}}</div>
                            </a>
                        </swiper-slide>
                    </swiper>
            </div>
        </div>
        <div class="layout" @click="layout()">
            <i class="el-icon-arrow-left"></i>
        </div>
    </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'
export default {
  name: 'moviesDetail',
  data () {
    return {
      count: '',
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
  computed: {
    ...mapState(['state']),
    ...mapGetters(['getIdList'])
  },
  methods: {
    // ...mapMutations(['getIdList'])
    layout () {
      // window.sessionStorage.clear()
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
    .moviesDetail{
        position:relative;
    }
    .moviesVideo{
        width:100%;
        overflow:hidden;
        background:#000;
    }
    .moviesVideo img{
        width:100%;
    }
    .moviesImg-small{
        width:35%;
    }
    .moviesMsg{
        position:absolute;
        top:200px;
        background:#fff;
        width:90%;
        border-radius: 15px;
        padding:5%;
    }
    .moviesImg-small img{
        width:100%;
    }
    .mvsdetail{
        width:62%;
        margin-left:3%;
        text-align:left;
        font-size:12px;
    }
    .mvsdetail .title{
        font-weight:bold;
        font-size:20px;
        color:#000;
    }
    .mvsdetail p{
        margin-bottom:2px;
        color: #888888;
    }
    .genres{
        display:inline-block;
    }
    .casts{
        display:inline-block;
    }
    .moviesOther{
        margin-top:15px;
    }
    .moviesOther button{
        width: 47%;
        margin: 0 1%;
        padding: 4.5% 0%;
        border: none;
        background: #f2f2f2;
        border-radius: 30px;
        outline:none;
        font-weight:bold;
        font-size:15px;
    }
    .autorList p{
        border-top:1px solid #dedede;
        padding-top:20px;
        margin:20px 0;
        font-weight:bold;
        font-size:20px;
        text-align:left;
    }
    .autoImgList{
        width:33% !important;
    }
    .autoImg{
        height:135px;
        overflow:hidden;
    }
    .autoImgList img{
        width:100%;
    }
    .autoName{
        font-size:12px;
        color:#000;
        text-decoration:none;
    }
    .layout{
        position:absolute;
        top:10px;
        left:10px;
    }
    .layout i{
        font-size:35px;
        color:#fff;
    }
</style>
