<template>
	<div class="swiper-container">
		<div class="swiper-wrapper">
			<div class="swiper-slide" name="one"><img :src="src1"></div>
			    <div class="swiper-slide" name="two"><img :src="src2"></div>
			    <div class="swiper-slide" name="three"><img :src="src3"></div>		   		  
		</div>
		<div class="swiper-pagination"></div>
	</div>		
</template>

<script>
	export default{
		data:function(){
			return{
				src1:'static/images/banner/17312246--w_768_h_768.jpg',
				src2:'static/images/banner/19213233--w_768_h_768.jpg',
				src3:'static/images/banner/19231368--w_768_h_768.jpg',
			}
		},
		mounted:function(){
			new Swiper ('.swiper-container', {
			    direction: 'horizontal',
			    loop: true,
			    autoplay:1000,
			    pagination: '.swiper-pagination',
			   });		
		}
		
	}
	
</script>

<style>
.swiper-container{height: 100%}
	.swiper-wrapper{width: 100%;}
	.swiper-slide img{width: 100%;}
</style>