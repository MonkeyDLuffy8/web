<template lang="html">
	<div class="found-tab">
		<div class="header-bottom">
			<router-link to="/found/recommend" tag="div" class="recommend">个性推荐</router-link>
			<router-link to="/found/anchorfm" tag="div" class="fm">主播电台</router-link>
		</div>
	</div>
</template>

<script>
	export default{
		name:"FoundTab",
		data(){
			return{

			}
		}
	}
</script>

<style lang="css" scoped>
		.header-bottom{
		width: 100%;
		height: 50px;
		background: #d43c33;
		position: fixed;
		top: 49px;
		left: 0;
		right: 0;
		z-index: 999;
		display: flex;
	}
	.header-bottom div{
		flex: 1;
		text-align: center;
		color: #fff;
		line-height: 50px;
	}
	.active{
		position: relative;
	}
    .active::after{
    	content: '';
    	width: 30%;
    	position: absolute;
    	bottom: 5px;
    	left: 35%;
    	right: 35%;
    	background: #fff;
 		height: 3px;
 		border-radius: 3px;
    }
</style>