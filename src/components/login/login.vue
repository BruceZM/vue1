<template>
	<div class="login">
		<Back :title='title' :tsrc='tsrc'></Back>
		<div class="im">
			<img src="../../images/login_1.png">
		</div>
		
		<ul class="detail">
			<li>
				<span>姓名</span>
				<input type="text" placeholder="用户名/邮箱/手机号">
			</li>
			<li>
				<span>密码</span>
				<input type="password" placeholder="请输入密码">
			</li>
		</ul>		
		<div class="bottom">
			<button>登录</button>
			<div class="icon">
				<img src="../../images/login_taobao.png" >
				<img src="../../images/login_qq.png" >
				<img src="../../images/login_wechat.png" >
			</div>
		</div>
	</div>
</template>

<script>
	import Back from './back';
	export default{
		name:"login",
		data:function(){
			return{
				title:'账户登录',
				tsrc:'static/images/index_ico_3.png',
			}
		},
		components:{
			Back
		},
		methods:{
			skip(){
				this.$router.push({name:'home'});
			}
		}
		
	}
</script>

<style>
	.login{height: 100%;display: flex;flex-direction: column;width: 100%;justify-content: center}
	
	.im{width: 100%;height: 1.8rem;background-color: #f8f8f8;display: flex;justify-content: center}
	.im img{width: .7rem;height: .7rem;align-self: center; }
	.detail{border-bottom: 1px solid #dedede;}
	.detail li{display: flex;padding: 0 .2rem;height: .35rem;line-height: .35rem;}
	.detail li:nth-child(1){border-bottom: 1px solid #f8f8f8;}
	.detail li span{font-size:.12rem}
	.detail li input{ border: none;height: .35rem;line-height: .35rem;margin-left: .5rem;outline: none; }
	.bottom{display: flex;flex-direction: column;justify-content: center;align-items: center;margin-top: .15rem;height: 2.5rem}
	.bottom button{border:none;width: 70%;height: .35rem;background: #6ec1b1;line-height: .2rem;text-align: center;border-radius: 3px;color: white;outline: none}
	.icon {display: flex;width: 70%;margin-top: .6rem;justify-content: space-between;}
	.icon img{width: .3rem;height: .3rem}
</style>