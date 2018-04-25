<template>
	<div class="swiper-container">
		<div class="swiper-wrapper">
			<div class="swiper-slide" name="one"><img :src="img1"></div>
		    <div class="swiper-slide" name="two"><img :src="img2"></div>
		    <div class="swiper-slide" name="three"><img :src="img3"></div>		   		  
		</div>
		<div class="swiper-pagination"></div>
	</div>
</template>

<script>
	export default{
		data:function(){
			return {}
		},
		props:['img1','img2','img3'],		
		mounted:function(){
					
		},
		updated:function(){
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
	.swiper-container{width: 100%}
	.swiper-container .swiper-wrapper{}
	.swiper-container .swiper-slide img{width: 100%;}
</style>