<template lang="html">
	<div class="found-header">
		<div class="header-top">
			<div class="header-left">
				<i class="iconfont icon-maikefeng"></i>
			</div>
			<div class="header-right">
				<i class="iconfont icon-paihang"></i>
			</div>
			<div class="search">
				<input type="text" placeholder="东西 最近很火哦">
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"FoundHeader",
		data(){
			return{

			}
		}
	}
</script>

<style lang="css" scoped>
	.header-top{
		width: 100%;
		height: 50px;
		background: #d43c33;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 999;
	}
	.header-left{
		width: 50px;
		height: 50px;
		line-height: 50px;
		text-align: center;
		color: #fff;
		float: left;
	}
	.header-right{
		width: 50px;
		height: 50px;
		line-height: 50px;
		text-align: center;
		color: #fff;
		float: right;
	}
	.header-top i{
		font-size: 24px;
	}
	.search{
		width: 70%;
		height: 50px;
		line-height: 50px;
		margin: 0 auto;
		padding: 0 20px;
		box-sizing: border-box;
	}
	.search input{
        width: 100%;
        border-radius: 18px;
        background: #FBF1F3;
        border: none;
        padding: 5px 20px;
        box-sizing: border-box;
        text-align: center;
	}
</style>