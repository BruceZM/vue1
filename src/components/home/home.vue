<template>
	<div class="wrap">		
		<my-head id='myhead'>			
			
			<img src="./images/index_inman.png" class="img1" slot='title'/>

			<a href="#" slot='left'>
				<img src="./images/yyh_home_ico_kefu.png" class="img2"/>
			</a>
			<router-link to='/login' slot='right'>
				<img src="./images/home_ico_1.png" class="img3" />
			</router-link>
												
		</my-head>

		<myBanner></myBanner>
		<cates></cates>
		<homeList></homeList>
		<goods></goods>
	</div>
		
</template>

<script>
	import myHead from './head';	
	import myBanner from './banner';
	import homeList from './homelist';
	import cates from './cates';
	import goods from './goods';
	export default {
		data:function(){
			return {}
		},
		components:{
			myHead,
			
			myBanner,
			cates,
			goods,
			homeList,
		},
		methods:{},
	}
	
</script>

<style>
	
	
</style>