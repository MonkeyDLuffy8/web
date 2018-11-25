<template lang="html">
	<div class="song-sheet">
		<Header title="歌单"/>
		<div class="ban-box">
			<div class="bag-banner"></div>
			<div class="ban-img">
				<img :src="bannerData.coverImgUrl" alt="">
			</div>
			<div class="ban-content">
				<h3>精品歌单›</h3>
				<p>{{ bannerData.name }}</p>
				<span>{{ bannerData.copywriter }}</span>
			</div>
		</div>
		<SongSheetType />
		<SongSheetList :songsheetData="songsheetData"/>
	</div>
</template>

<script>
	import Header from '../../components/Header'
	import SongSheetType from '../../components/SongSheetType'
	import SongSheetList from '../../components/SongSheetList'
	export default{
		name:"SongSheet",
		data(){
			return{
                bannerData:[],
                songsheetData:[]
			}
		},
		components:{
			Header,
			SongSheetType,
			SongSheetList
		},
		mounted(){
			this.$axios.get("http://localhost:3000/top/playlist/highquality?before=1503639064232&limit=1")
			.then(res => {
				console.log(res.data)
				this.bannerData = res.data.playlists[0]
			})
			.catch(error => {
				console.log(error)
			}),
			this.$axios.get("http://localhost:3000/top/playlist/highquality?tag=%E5%85%A8%E9%83%A8&limit=20")
			.then(res => {
				console.log(res.data)
				this.songsheetData = res.data.playlists
			})
			.catch(error => {
				console.log(error)
			})
		}
	}
</script>

<style lang="css" scoped>
	.ban-box{
		width: 100%;
		height: 150px;
		margin-top: 50px;
		position: relative;
	}
	.bag-banner{
		width: 100%;
		height: 100%;
		background-image: url(http://p1.music.126.net/gf9kfW9GYoA5lJP73_KDSw==/18962177533227347.jpg);
		background-repeat: no-repeat;
		background-size: 200%;
		background-position: -300px -600px;
		filter: blur(5px);
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
	}
	.ban-img{
		width: 100px;
		height: 100px;
		z-index: 10;
		position: absolute;
		top: 25px;
		left: 25px;
	}
	.ban-img img{
		width: 100%;
	}
	.ban-content{
		width: 60%;
		position: absolute;
		left: 150px;
		top: 25px;
		padding-right: 10px;
		box-sizing: border-box;
	}
	.ban-content h3{
		margin: 0;
		font-weight: normal;
		color: #fff;
	}
	.ban-content p{
		overflow:hidden;
	    text-overflow:ellipsis;
	    white-space:nowrap;
	    margin: 5px 0;
	    color: #fff;
	}
	.ban-content span{
		color: #999;
		font-size: 12px;
	}
</style>