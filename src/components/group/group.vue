<template>
	<div>
		<my-head id='myhead'>			
			<h2 slot='tit' class="tit">小组</h2>
			<img src="./images/ic_status_search_user.png" class="img_s" slot='title'/>
			<img src="./images/ic_chat_green.png" class="img_c" slot='left'/>											
		</my-head>
		<banner>
			<!--<slot></slot>
			<slot name='pp'></slot>
			<slot name='sp'></slot>-->
		</banner>
		<list></list>
	</div>
</template>
<!--<template>
	<banner></banner>
</template>-->
<script>
	import myHead from '../head';
	import banner from './banner'
	import list from './list'
	export default{
		components:{
			myHead,
			banner,
			list
		}
		
	}
	
</script>

<style>
	
</style>