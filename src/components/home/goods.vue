<template>
	<div class="goods">
		<div class="tit">
			<h2>热门分类 CATEGORYS</h2>
			<span>更多+</span>
		</div>
		<ul>
			<li v-for="(item,index) in list">
			
				<img :src="item.img"/>				
				<span>{{item.tag}}</span>		
			</li>
		</ul>
	</div>
</template>

<script>
	import Vue from 'vue';
	import Axios from 'axios';
	import Vueaxios from 'vue-axios';
	Vue.use(Vueaxios,Axios)
	
	export default{
		data:function(){
			return {
				list:[],
			};
		},
		created:function(){
			this.axios.get('/static/json/goods.json').then((res)=>{
			
				this.list = res.data.cates
			})
			
		}
	}
</script>

<style>
	.goods{width: 100%;padding-top: .3rem;display: flex;flex-direction: column;}
	ul{list-style: none;}

	.goods .tit{display: flex;justify-content: space-between;padding: 0 .1rem}
	 
	.goods .tit h2{font-size: .15rem;height: .6rem;line-height: .6rem;}
	ul{list-style: none;}
	.goods .tit span{font-size: .12rem;height: .6rem;line-height: .6rem;padding-right: .1rem;color: gray}
	.goods ul{display: flex;flex-wrap: wrap;}
	
	.goods ul li{border: 1px solid gainsboro;width: 32.5%;display: flex;flex-direction: column;}
	.goods ul li img{width: 100%;}
	.goods ul li span{font-size: .13rem;text-align: center;margin-bottom: .1rem;color:grey}
</style>