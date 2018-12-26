<template>
  <div>
    <header>
    	<div class="container">
    		<div class="logo"></div>
    		<ul>
    			<li>首页<i></i></li>
    			<li>课程方案<i></i></li>
    			<li>课程方案<i></i></li>
    			<li>课程方案<i></i></li>
    			<li>课程方案<i></i></li>
    			<li>课程方案<i></i></li>
    			<li>课程方案<i></i></li>
    		</ul>
    	</div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'Evaluation',
  data () {
    return {
     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container{width:1000px;margin:0 auto;}
 header{
 	height: 100px;
 	width: 100%;
 	background: #22cccb;
 	padding-top: 20px;
 	.logo {
 		width: 110px;height: 80px;
 		background:url(../assets/logo.jpg);
 		float:left;
 	}
 	ul{
 		display: flex;
    color: white;
    width:850px;
    height:80px;
    justify-content: space-between;
    line-height: 80px;
    text-align:center;
    li{
      width:100px;
      position: relative;
      i{
        display: block;
        width:12px;height:5px;
        background:url(../assets/sanjiao.jpg);
        position: absolute;right:0;top:38px;
      }
    }
 	}
 }
</style>
