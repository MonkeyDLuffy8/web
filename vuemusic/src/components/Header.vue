<template lang="html">
	<div class="header">
		<div class="header-top">
			<div @click="backHandler" class="header-left">
				返回
			</div>
			<div class="header-right">
				<i class="iconfont icon-paihang"></i>
			</div>
			<div class="header-title">
				{{ title }}
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"Header",
		data(){
			return{

			}
		},
		props:{
			title:{
				type:String,
				default:""
			}
		},
		methods:{
			backHandler(event){
				this.$router.back();
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
	.header-title{
		width: 70%;
		height: 50px;
		line-height: 50px;
		text-align: center;
		margin: 0 auto;
		padding: 0 20px;
		box-sizing: border-box;
		color: #fff;
	}
</style>