4<template>
	<div class="hlist">
		<div class="tit">
			<h2>人气热销 HOT SALE</h2>
			<span>更多+</span>
		</div>
		
		<ul class="clearfix">
			<li v-for="(item,index) in list" :did="index" @click="skip(index)" >
				<img :src="item.img" />
				<div class="det" >
					<p class="p2">{{item.price}}</p>
					<p>已售{{item.sales}}件</p>							
				</div>
				<p>{{item.tag}}</p>						
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
				id:0,
			};
		},
		created:function(){
			this.axios.get('/static/json/homeData.json').then((res)=>{
				this.list = res.data.goods
			})			
		},
		methods:{
			skip(id){
				this.id = id;
				console.log(id);
				this.$router.push({name:'detail',params:{id:id}});
			}
		}
	}
	
</script>

<style>
	.hlist{width: 100%;display: flex;flex-direction: column;padding-top: .2rem;}
	.hlist .tit{display: flex;justify-content: space-between;padding: 0 .1rem}
	 
	.hlist .tit h2{font-size: .15rem;height: .6rem;line-height: .6rem;}
	ul{list-style: none;}
	.hlist .tit span{font-size: .12rem;height: .6rem;line-height: .6rem;padding-right: .1rem;color: gray}
	.hlist ul{display: flex;flex-wrap: wrap;width: 100%}
	
	.hlist ul li{border: 1px solid gainsboro;width: 50%;box-sizing:border-box}
	.hlist ul li img{width: 100%;}
	.hlist ul li .det{		
		width: 80%;
		display: flex;
		justify-content: space-between;
		padding: 0 .1rem;
	}
	.hlist ul li .det p{font-size: .12rem;}
	.hlist ul li .det .p2{font-size: .12rem;color: red;}
	.hlist ul li>p{font-size: .15rem;padding: .1rem;font-size: .14rem;color: grey}

</style>