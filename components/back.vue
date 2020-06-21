<template>
	<view class="back" @click="back">
		<view>
			<image class="bimg" src="/static/img/back.png" mode="widthFix"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			back(){
				uni.navigateBack({
					delta: 1
				});
			}
		}
	}
</script>

<style>
	.back {
		width: 100upx;
		height: 93upx;
		position: fixed;
		bottom: 200upx;
		box-shadow: 0 0 10px 10px #f0f0f0;
		z-index: 1000;
		border-bottom-left-radius: 40upx;
		border-top-left-radius: 40upx;
		right: 0;
		background-color: white;
	}
	.back>view {
		width: 100%;
		height: 100%;
		position: relative;
	}
	.bimg {
		width: 78upx;
		/* height: 78upx; */
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		z-index: 10000;
	}
</style>
