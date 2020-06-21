<template>
	<view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {
			console.log(1)
			uni.chooseLocation({
				type: 'gcj02',
				success(res) {
					console.log(res)
					console.log(res.address.province)
				}
			})
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
