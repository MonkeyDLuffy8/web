<template lang="html">
	<div class="found">
		<router-view />
		<FooterNav />
	</div>
</template>

<script>
	import FooterNav from "../components/FooterNav"
	export default{
		name:"Found",
		data(){
			return{
				
			}
		},
		components:{
			FooterNav
		}
	}
</script>

<style lang="css" scoped>
	.found{
		margin-bottom: 50px;
	}
</style>