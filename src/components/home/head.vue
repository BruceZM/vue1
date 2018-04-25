<template>
	<div class="M_header">
		
		<slot name='title'></slot>
		<slot name='left'></slot>
		<slot name='right'></slot>
	</div>
</template>

<script>
	export default {
		data:function(){
			return {}
		},
		methods:{},
	}
	
	
</script>

<style>
	.M_header{width: 100%;margin: 0 auto;position: relative;background-color: #F6F6F6;border-bottom: 1px solid #B6B6B6;padding: .3rem 0}
	.M_header input{display:block;width: 85%;height: 30px;border-radius: 5px;position: absolute;top: 10px;left: 10px;text-indent: 2em;border: none;}
	.M_header input::-webkit-input-placeholder{font-size: 14px;color: #CDCDCD;}
	.M_header .img1{position: absolute;top: .25rem;left: .15rem;width: 1rem;}
	.M_header .img2{position: absolute;top: .1rem;right: .25rem;width: .5rem;}
	.M_header .img3{position: absolute;top: .1rem;right: 1rem;width: .5rem;}
	
	
</style>