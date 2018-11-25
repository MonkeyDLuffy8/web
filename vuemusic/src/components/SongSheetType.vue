<template lang="html">
	<div class="song-sheet-type">
		<div class="all-type">
			<router-link tag="span" to="/type">全部歌单 ></router-link>
		</div>
		<div class="hot-type">
			<span>华语</span>
			<span>电子</span>
			<span>轻音乐</span>
		</div>
	</div>
</template>

<script>
	export default{
		name:"SongSheetType",
		data(){
			return{

			}
		}
	}
</script>

<style lang="css" scoped>
	.song-sheet-type{
		width: 100%;
		height: 61px;
		line-height: 60px;
	}
	.all-type{
		float:left;
		box-sizing: border-box;
		padding-left: 10px;
	}
	.all-type span{
		padding: 5px 10px;
		border: 1px solid #999;
		border-radius: 25px;
		font-size: 14px;
	}
	.hot-type{
		float: right;
		padding-right: 10px;
	}
	.hot-type span{
		margin-left: 10px;
		font-size: 14px;
	}
</style>