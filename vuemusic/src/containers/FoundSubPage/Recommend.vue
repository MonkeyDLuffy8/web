<template lang="html">
	<div class="recommend">
		<FoundHeader />
	    <FoundTab />
		<Banner :bannersUrl="bannersUrl"/>
		<ul class="recommend-nav">
			<li>
				<i class="iconfont icon-FM"></i>
				<span>私人FM</span>
			</li>
			<li>
				<i class="iconfont icon-rili"></i>
				<span>每日推荐</span>
			</li>
			<router-link tag="li" to="/found/songsheet">
				<i class="iconfont icon-gedan"></i>
				<span>歌单</span>
			</router-link>
			<li>
				<i class="iconfont icon-paihang"></i>
				<span>排行榜</span>
			</li>
		</ul>
		<CommendType :url="commend" title="推荐歌单"/>
		<CommendType :url="newmusic" title="最新音乐"/>
		<CommendType :url="anchorfm" title="主播电台"/>
	</div>
</template>

<script>
	import Banner from '../../components/Banner'
	import CommendType from './CommendType'
	import FoundTab from '../../components/FoundTab'
	import FoundHeader from '../../components/FoundHeader'
	export default{
		name:"Recommend",
		data(){
			return{
				bannersUrl:"http://localhost:3000/banner",
				commend:"http://localhost:3000/personalized?limit=6",
				newmusic:"http://localhost:3000/personalized/djprogram?limit=6",
				anchorfm:"http://localhost:3000/personalized?limit=6"
			}
		},
		components:{
			Banner,
			CommendType,
			FoundTab,
			FoundHeader
		}
	}
</script>

<style lang="css" scoped>
	.recommend-nav{
		display: flex;
		width: 100%;
		padding: 0;
		border-bottom: 1px solid #f3f3f3;
		padding-bottom: 10px;
	}
	.recommend-nav li{
		flex: 1;
		text-align: center;
	}
	.recommend-nav li i{
		width: 50px;
		height: 50px;
		line-height: 50px;
		background: #d43c33;
		border-radius: 50%;
		color: #fff;
		display: block;
		margin: 5px auto;
		font-size: 20px;
	}
	.recommend-nav li span{
		font-size: 14px;
	}
</style>