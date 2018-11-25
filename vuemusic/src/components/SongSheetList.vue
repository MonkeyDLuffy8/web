<template lang="html">
	<div class="song-sheet-list">
		<div class="song-sheet-box" v-for="(item,index) in songsheetData" :key="index">
			<img :src="item.coverImgUrl" alt="">
			<p>{{ item.name }}</p>
		</div>
	</div>
</template>

<script>
	export default{
		name:"SongSheetList",
		data(){
			return{

			}
		},
		props:{
			songsheetData:{
				type:Array,
				default:function(){
					return[]
				}
			}
		}
	}
</script>

<style lang="css" scoped>
	.song-sheet-box{
		width: 50%;
		height: 266px;
		padding: 0 10px;
		float: left;
		box-sizing: border-box;
	}
	.song-sheet-box img{
		width: 100%;
	}
	.song-sheet-box p{
		height: 42px;
		overflow:hidden;
		font-size: 14px;
	}
</style>