<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  *{
    margin:0;
    padding:0;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  .f-cb {
    zoom: 1;
  }
  .f-cb:after {
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
    overflow: hidden;
    content: ".";
  }
  .fl{
    float:left;
  }
  .fr{
    float:right;
  }
</style>
