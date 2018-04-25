<template>
	<div>
		<myHead>
			<h2 slot='tit' class="tit">我的</h2>
			<img src="./images/ic_status_search_user.png" class="img_s" slot='title'/>
			<img src="./images/ic_chat_green.png" class="img_c" slot='right'/>
		</myHead>
	</div>
	

</template>

<script>
	import myHead from '../head'
	
	export default{
		components:{
			myHead
		},
		
		
	}
</script>

<style>
</style>