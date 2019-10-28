<template>
    <div style="font-size:30px;">音乐榜</div>
</template>

<script>
export default {
  name: 'videoList',
  data () {
    return {
      musicMsg: []
    }
  },
  methods: {
    getMusicList () {
      var url = 'https://api.apiopen.top/musicRankingsDetails?type=1'
      this.$axios.get(url, {

      })
        .then(res => {
          if (res.code = 200) {
            var data = res.data.data
            this.musicMsg = data
          } else {
            alert('当前数据出错，请稍后再试...')
          }
        }).catch(err => {
          console.log(err)
        })
    }
  },
  mounted () {
    this.getMusicList()
  }
}
</script>

<style scoped>

</style>
