<template>
	<div class="cate_list">
		<ul class="clearfix">
			<li v-for="(item,index) in list">
				<img :src="item.img"/>											
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
			this.axios.get('/static/json/cates.json').then((res)=>{
			
				this.list = res.data.cates 
			})
			
		}
	}
</script>

<style>
	.cate_list{width:100%;height: 100%}
	ul{list-style: none;}
	.cate_list ul{height: 100%;display: flex;flex-wrap: wrap;}
	.cate_list ul li{border: 1px solid gainsboro;width: 25%;position: relative;box-sizing:border-box}
	.cate_list ul li img{width: 100%;}
	
</style>