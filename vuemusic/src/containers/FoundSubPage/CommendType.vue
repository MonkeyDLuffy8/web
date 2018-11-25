<template lang="html">
	<div>
		<MusicBlock :data="musicData" :title="title"/>
	</div>
</template>

<script>
	import MusicBlock from '../../components/MusicBlock'
	export default{
		name:"CommendType",
		data(){
			return{
            	musicData:[]
			}
		},
		components:{
			MusicBlock
		},
		props:{
			title:{
				type:String,
				default:""
			},
			url:{
				type:String,
				default:""
			}
		},
		mounted(){
		    this.$axios.get(this.url)
		    .then(res => {
		        this.musicData = res.data.result
		    })
		    .catch(error => {
		        console.log(error);
		    })
		}
	}
</script>

<style lang="html" scoped>
	
</style>