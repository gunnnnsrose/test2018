import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
import Evaluation from "../components/Evaluation.vue";
import Home from "../components/home.vue";
export default new Router({
  routes: [
    {
      path: '/two',
      name: 'Evaluation',
      component: Evaluation
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})
