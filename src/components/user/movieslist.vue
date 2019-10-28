<template>
    <div class="aaa">
        <div class="msgList">
            <div class="duanziContent" v-for="(item, key) in datamsg" :key="key">
                <!--<div>{{item.type}}</div>-->
                <div class="userMsg f-cb">
                    <div class="userHeaderImg fl"><img :src="item.header" alt=""></div>
                    <div class="userRight fl">
                        <div class="userName">{{item.username}}</div>
                        <div class="userTime">{{item.passtime}}</div>
                    </div>
                </div>
                <div class="listdetail">
                    <div class="listTitle">{{item.text}}</div>
                    <div class="listContent">
                        <div v-if="item.type === 'video'">
                            <video muted='muted' controls="controls" preload="preload" width="100%" :poster="item.thumbnail">
                                <source :src="item.video" type="video/mp4">
                            </video>
                        </div>
                        <div v-if="item.type === 'text'">
                            <div>{{item.text}}</div>
                        </div>
                        <div v-if="item.type === 'gif'">
                            <div>
                                <img :src="item.gif" alt="">
                            </div>
                        </div>
                        <div v-if="item.type === 'image'">
                            <div>
                                <img :src="item.image" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <el-row :gutter="20" class="otherOperation">
                    <el-col :span="6"><div class="upTouch" @click="upTouch()">{{item.up}}</div></el-col>
                    <el-col :span="6"><div class="downTouch" @click="downTouch()">{{item.down}}</div></el-col>
                    <el-col :span="6"><div class="share" @click="share()">分享</div></el-col>
                    <el-col :span="6"><div class="comment" @click="comment()">{{item.comment}}</div></el-col>
                </el-row>
            </div>
            <div class="bottomload">
                下拉加载...
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'moveslist',
  data () {
    return {
      datamsg: []
    }
  },
  methods: {
    getHomeInfo () {
      const url = 'https://www.apiopen.top/satinGodApi?type=1&page=1'
      this.$axios.get(url, {
      // params:{
      // name:'aa',
      // age:22
      // }
      // params: this.user
      })
        .then(res => {
          if (res.code = 200) {
            var subjects = res.data.data
            this.datamsg = subjects
          } else {
            alert('当前数据出错，请稍后再试...')
          }
        }).catch(err => {
          console.log(err)
        })
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>

<style scoped>
    .aaa{
        width:100%;
    }
    .msgList{
        width:90%;
        margin:22px auto;
    }
    .userHeaderImg{
        width:12%;
    }
    .userHeaderImg img{
        width:100%;
        border-radius: 50%;
    }
    .userRight{
        margin-left:14px;
    }
    .userRight{
        text-align:left;
    }
    .userName{
        font-size:13px;
    }
    .userTime{
        font-size:12px;
        color:#dedede;
    }
    .listContent{
        width:100%;
    }
    .listContent img{
        width:100%;
    }
    .listTitle{
        text-align:left;
        margin:14px 0;
        font-size:15px;
        font-weight:bold;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .duanziContent{
        margin-bottom:25px;
    }
    .otherOperation{
        margin:10px 0
    }
    .upTouch{
        height:25px;
        line-height:25px;
        background:url(../../assets/images/down.png) no-repeat left center;
        padding-left:25px;
        background-size:34%;
    }
    .downTouch{
        height:25px;
        line-height:25px;
        padding-left:25px;
        background:url(../../assets/images/cai.png) no-repeat left center;
        background-size:34%;
    }
    .share{
        height:25px;
        line-height:25px;
        padding-left:25px;
        background:url(../../assets/images/share.png) no-repeat left center;
        background-size:34%;
    }
    .comment{
        height:25px;
        line-height:25px;
        padding-left:25px;
        background-size:50%;
        background:url(../../assets/images/comment.png) no-repeat left center;
    }
</style>
