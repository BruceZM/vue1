<template>
  <div id="app" v-cloak>
    <router-view></router-view>
  </div>
</template>

<script>
	var html=document.getElementsByTagName("html")[0];
  
  function fontsize(){
    var w=document.documentElement.clientWidth;
    w=w>750?750:w;
    html.style.fontSize=w/3.75+"px"

  }
  fontsize();
  
  window.onresize=fontsize;
		export default {
		  name: 'app',
		  components:{
		  	
		  },
		  created:function(){
				this.$router.push('/home')
			},
		}
</script>

<style>
html{
	fontSize:100px;
	font-family: "微软雅黑";
}
#app {
	width: 100vw;
		[v-cloak] {
	    display: none;
		}
	display:flex;
	flex-direction:column;

}
*{margin: 0;padding: 0;}
button{
	outline:none;
}

</style>
