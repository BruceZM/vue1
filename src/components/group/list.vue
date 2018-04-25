<template>
	<div class="cont">
		<div class="head">
			<img src="./images/ic_rec_group_banner_6.png"/>
			<span>精选推荐</span>
			<p>影视</p>
		</div>
		<ul>
			<li v-for='(item,index) in list'>				
				<img :src="item.src1"/>
				<div class="left">
					<h3>{{item.h3}}</h3>
					<p>{{item.p}}</p>
				</div>
				<div class="right">
					<span>{{item.span}}</span>
					<img :src="item.src2" class="img2"/>				
				</div>				
			</li>			
		</ul>
	</div>
</template>

<script>
	export default{
		data:function(){
			return {
				list:[
					{
						src1:"/static/images/ic_group_comment_1001m.png",
						h3:'佳片推荐(只迷电影)',
						p:'加入豆瓣人数最多的影视交流群，加入豆瓣人数最多的影视交流群',
						span:'612808人',
						src2:'/static/images/ic_group_check_anonymous.png',						
					},
					{
						src1:"/static/images/ic_action_send.png",
						h3:'The Criterion Collection',
						p:'Criterion Collection presents most valuable album...',
						span:'4258人',
						src2:'/static/images/ic_group_check_anonymous.png',						
					},
					{
						src1:"/static/images/ic_group_comment_1001m.png",
						h3:'老友记',
						p:'Like friends,quote a words of it and...',
						span:'808人',
						src2:'/static/images/ic_group_check_anonymous.png',						
					},
					{
						src1:"/static/images/ic_group_comment_1001m.png",
						h3:'老友',
						p:'Like friends,quote a words of it and...',
						span:'808人',
						src2:'/static/images/ic_group_check_anonymous.png',						
					},
					{
						src1:"/static/images/ic_group_comment_1001m.png",
						h3:'老友记',
						p:'Like friends,quote a words of it and...',
						span:'808人',
						src2:'/static/images/ic_group_check_anonymous.png',						
					},
				]
				
			}
		}
	}
	
	
</script>

<style>
	ul li{list-style: none;}
	.cont{width: 362px;margin: 0 auto;}
	.head{height: 120px;width: 362px;position: relative;border-bottom: 1px solid #d4d4d4;}
	.head img{height: 87px;width: 362px;background-size: contain;}
	.head span{position: absolute;top: 60px;left: 8px;color: white;font-size: 14px;}
	.head p{position: absolute;width: 80px;height: 20px;bottom: -10px;left: 140px;background: white;text-align: center;}
	.cont ul{width:362px;}
	.cont ul li{margin-top: 20px;height: 60px;}
	.cont li img{float: left;width: 50px;}
	.left{float: left;width: 200px;margin-left: 5px;}
	.left h3{font-size: 14px;}
	.left p{font-size: 12px;}
	.right{float: right;margin-top: 20px;margin-left: 8px;}
	.right span{float: left;font-size: 12px;margin-right: 10px;}
	.right .img2{float: left;width: 20px;margin-right: 10px;height: 20px;}
	
</style>