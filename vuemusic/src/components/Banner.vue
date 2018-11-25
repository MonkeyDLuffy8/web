<template lang="html">
	<div class="banner">
		<swiper :options="swiperOption">
		    <!-- slides -->
		    <swiper-slide v-for="(item,index) in banners" :key="index">
		    	<img :src="item.picUrl" alt="">
		    </swiper-slide>
		    <!-- Optional controls -->
		    <div class="swiper-pagination"  slot="pagination"></div>
		</swiper>
		<div class="banner-back"></div>
	</div>
</template>

<script>
	export default{
		name:"Banner",
		data(){
			return{
				swiperOption: {
		          loop : true,
		          autoplay:true,
		          pagination: {
		            el: '.swiper-pagination'
		          }
		        },
		        banners:[]
			}
		},
		props:{
			bannersUrl:{
		        type:String,
		        default:""
		    }
		},
		mounted(){
		    this.$axios.get(this.bannersUrl)
		    .then(res => {
		        this.banners = res.data.banners
		    })
		    .catch(error => {
		        console.log(error);
		    })
		}
	}
</script>

<style lang="css" scoped>
    .banner{
    	width: 100%;
    	padding: 0 10px;
    	box-sizing: border-box;
    	text-align: center;
    	margin-top: 100px;
    	position: relative;
    }
	.banner img{
		width: 97%;
		border-radius: 10px;
	}
	.banner-back{
		width: 100%;
		height: 200px;
		background: #d43c33;
		position: absolute;
		bottom: 40px;
		left: 0;
		right: 0;
	}
</style>