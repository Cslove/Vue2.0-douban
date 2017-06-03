<template>
	<div >{{value}}</div>
</template>
<script>
export default{
	data(){
		return {
			value:this.$route.params.name
		}
	}
} 
</script>
<style scoped>
	
</style>