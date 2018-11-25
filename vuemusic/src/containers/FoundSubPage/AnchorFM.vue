<template lang="html">
	<div class="anchor-fm">
		<FoundHeader />
		<FoundTab />
		<Banner :bannersUrl="bannersUrl"/>
	</div>
</template>

<script>
	import Banner from '../../components/Banner'
	import FoundTab from '../../components/FoundTab'
	import FoundHeader from '../../components/FoundHeader'
	export default{
		name:"AnchorFM",
		data(){
			return{
				bannersUrl:"http://localhost:3000/banner"
			}
		},
		components:{
			Banner,
			FoundTab,
			FoundHeader
		}
	}
</script>

<style lang="css" scoped>
	
</style>