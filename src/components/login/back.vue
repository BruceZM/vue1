<template>
	<div class="navv">
		<span @click="skip">
			返回
		</span>
		<p>{{title}}</p>
		<img :src="tsrc">
	</div>
</template>

<script>
	export default{
		name:"nav",
		props:['title','tsrc'],
		data:function(){
			return{
				
			}
		},
		methods:{
			skip(){
				this.$router.push({name:'home'});
			}
		}
		
	}
</script>

<style>
	.navv{height: .4rem;position: fixed;display: flex;font-size: .16rem;justify-content: space-around;width: 100%;top: 0;left: 0;z-index: 5;background: white;}
	.navv span,p{font-size: .14rem;line-height: .4rem;height: .4rem}
	.navv img{width: .2rem;height: .2rem;margin: .1rem 0}
</style>