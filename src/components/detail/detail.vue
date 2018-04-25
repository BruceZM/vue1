<template>
	<div class="detail">
		<Back :title='title' :tsrc='tsrc'></Back>
		<my-banner :img1='img1' :img2='img2' :img3='img3'></my-banner>
		<div class="con">
			<p>{{list.tag}}</p>
			<a href="##" class="fav">
				<img src="static/images/fav.png"/>
			</a>
		</div>
		<div class="info">
			<span>货号:</span>
			<span>系列:</span>
			<span>季节:夏</span>
			<span>材质:棉</span>
			<div class="size">
				<button>尺码</button>
			</div>			
		</div>
		<div class="content">
			<img :src="img1" />
			<img :src="img2" />
			<img :src="img3" />
		</div>
		<div class="buy" v-show="bool_buy">
			<div class="row">
                <b>￥{{list.price}}</b>
                <span>(库存：{{list.sales}})</span>
            </div>
            <button>加入购物车</button>
		</div>
	</div>
</template>

<script>
import myBanner from "./d_banner";
import Back from "../login/back";
   
import Vue from 'vue';
	import Axios from 'axios';
	import Vueaxios from 'vue-axios';
	Vue.use(Vueaxios,Axios)
	export default{	
		data:function(){
			return{
				img1:'',
				img2:'',
				img3:'',
				list:[],
				thisId:this.$route.params.id,
				title:'',
				tsrc:'static/images/index_ico_3.png',
				bool_buy:true
			}
		},
		created:function(){
			this.axios.get('/static/json/details.json').then((res)=>{

				this.list = res.data.dets[this.thisId];
				console.log(this.list);
				this.img1 = this.list.img1;
				this.img2 = this.list.img2;
				this.img3 = this.list.img3;
			})			
		},
		components:{
			myBanner,
			Back
		},
		methods:{
			con(){
				console.log(this.thisId)
			}
			
			
		}
	}
	
</script>

<style>
	.detail{width: 100%;margin:.3rem 0 1rem 0;position: relative;}
	.con{display: flex;width: 100%;padding: 0 .1rem;justify-content: space-between;box-sizing:border-box}
	.con p{font-size: 0.17rem;color: #000;margin: 0;float: left;width: 70%;line-height: .22rem;}
	.con a{font-size: 0.1rem;
			width: 30%;
			display: block;
		    float: right;
		    width: .2rem;
		    padding-top: 1.3rem;		    
		    text-align: center;
		    padding: 0;
	    }
	.con a img{
		width: 100%;
	}    
	.info{display: flex;width: 100%;padding: 0 .1rem;margin-top: .1rem ;flex-wrap: wrap;box-sizing:border-box;}
	.info span{color: darkgrey;font-size: .16rem;width: 50%;}
	.info .size{font-size: .15rem;display: flex;flex-direction: column;width: 100%;margin-top: .05rem;}
	.info .size i{font-weight: bold;}
	.info .size button{border: none;background: #1edca3;width: 100%;height: .3rem;color: white;text-align: center;}
	.content{width: 100%;padding: 0 .1rem;margin: .1rem 0;box-sizing:border-box}
	.content img{width: 100%;}
	.buy{
			height:1rem;
		    position: fixed;
		    bottom: 0;
		    left: 0;
		    background: rgba(255,255,255,0.95);
		    width: 100%;		   
		    border-top: 1px solid #ebebeb;
		    z-index: 4;
		    display: flex;
		    flex-direction: column;
			padding: .2rem .2rem .1rem .2rem;
			box-sizing: border-box;
			
		}
	.buy .row{display: flex;width: 100%;justify-content: space-between;}
	.buy .row b{font-weight: 700;font-size: .16rem;color: #f97373}
	.buy .row span{font-size: .12rem;}
	.buy button{border: none;background: #1edca3;width: 60%;height: .3rem;color: white;text-align: center;margin-top: .1rem;align-self: center;}
</style>