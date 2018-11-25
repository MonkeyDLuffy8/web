<template lang="html">
	<div class="footer-nav">
		<ul>
			<router-link tag="li" to="/found">
				<i class="iconfont icon-wangyiyunyinlezizhi-copy"></i>
				<span>发现</span>
			</router-link>
			<router-link tag="li" to="/video">
				<i class="iconfont icon-shipinICON"></i>
				<span>视频</span>
			</router-link>
			<router-link tag="li" to="/mine">
				<i class="iconfont icon-yinyue-copy"></i>
				<span>我的</span>
			</router-link>
			<router-link tag="li" to="/friends">
				<i class="iconfont icon-pengyou"></i>
				<span>朋友</span>
			</router-link>
			<router-link tag="li" to="/user">
				<i class="iconfont icon-wode"></i>
				<span>账号</span>
			</router-link>
		</ul>
	</div>
</template>

<script>
    import '../assets/font/iconfont.css'
	export default{
		name:"FooterNav",
		data(){
			return{

			}
		}
	}
</script>

<style lang="css" scoped>
	.footer-nav{
		width: 100%;
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
	}
	.footer-nav ul{
		margin: 0;
		padding: 0;
		display: flex;
		background: #f3f3f3;
	}
	.footer-nav ul li{
		flex: 1;
		text-align: center;
		padding: 5px;
	}
	.footer-nav ul li i{
		display: block;
		font-size: 20px;
	}
	.footer-nav ul li span{
		font-size: 12px;
	}
	.active{
		color: #d43c33;
	}
</style>