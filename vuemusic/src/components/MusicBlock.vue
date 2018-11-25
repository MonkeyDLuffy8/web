<template lang="html">
	<div class="music-block">
		<h3>{{ title }}</h3>
		<ul>
			<li v-for="(item,index) in data">
				<img :src="item.picUrl" alt="">
				<span>{{item.name}}</span>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name:"MusicBlock",
		props:{
			title:{
				type:String,
				default:""
			},
			data:{
				type:Array,
				default:function(){
					return []
				}
			}
		}
	}
</script>

<style lang="css" scoped>
	.music-block{
		width: 100%;
	}
	.music-block ul{
		width: 100%;
		padding: 0;
		overflow: hidden;
	}
	.music-block ul li{
		width: 33.33%;
		float: left;
		padding: 5px;
		box-sizing: border-box;
		height: 150px;
	}
	.music-block ul li span{
		display: block;
		width: 100%;
		height: 21px;
		text-align: center;
		font-size: 14px;
		overflow:hidden;
	    text-overflow:ellipsis;
	    white-space:nowrap;
	}
	.music-block ul li img{
		width: 100%;
	}
	.music-block h3{
		font-size: 18px;
		padding-left: 10px;
	}
</style>