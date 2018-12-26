<template>
  <div id="app">
    <section>
       <router-view></router-view>
    </section>
  </div>
</template>

<script>
import Evaluation from "./components/Evaluation.vue";
import Home from "./components/home.vue";
export default {
  name: 'App',
  components:{
    Evaluation,
    Home
  }
}
</script>

<style>
  *{margin: 0;padding: 0;box-sizing:border-box;}
  ul li{list-style: none;}
  body{font-size: 16px;overflow-x:hidden;}
  a{text-decoration: none;}
  img{display: block;}
  .clear:after{content: "";display: block;clear: both;}
</style>
