<template>

  <div id="app">
     <!--头部导航-->
     <router-view v-if="isRouterAlive"></router-view>
  </div>
</template>
<script>
import $ from 'jquery'
export default {
  name: 'App',
  data () {
      return {
        isRouterAlive: true
      }
  },
  components:{
  },
  methods:{
    reload () {
      this.isRouterAlive = false
      this.$nextTick(function() {
         this.isRouterAlive = true
      })
    }
  },
  mounted(){
  },
  provide () {
    return {
      reload: this.reload
    }
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
