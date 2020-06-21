<template>
	<view style="width: 100%;height: 100%;">
		<scroll-view style="width: 100%;height: 100%;" scroll-y="true" >
			<view class="search_top">
			<view style="width: 100%;height: 100%;position: relative;">
				<input type="text" class="search-input" @input="inputAirport" :value="search" placeholder="请输入"/>
				<image src="/static/img/search.png" class="search-img" mode=""></image>
			</view>
		</view>
		<view class="search-content">
			<view style="height: 110upx;"></view>
			<view class="search_info" v-for="(item,index) in airInfo" :key="index" @tap="chooseAirport(item)">
				{{item.province}}-{{item.name}}
			</view>
		</view>
		</scroll-view>
		<Back></Back>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				search: '',
				airInfo: []
			}
		},
		onLoad(){
			this.getAirport()
		},
		methods: {
			inputAirport(e){
				this.search = e.detail.value
				this.getAirport()
			},
			getAirport(){
				let url = getApp().globalData.AllUrl +'api/filter_airport'
				let that = this
				uni.request({
					url: url,
					method: 'POST',
					data: {
						data_json: that.search
					},
					header:{
						Authorization: getApp().globalData.loginToken
					},
					success: res => {
						console.log(res)
						that.airInfo = res.data.data.data
					},
					fail: () => {},
					complete: () => {}
				});
			},
			chooseAirport(item){
				getApp().globalData.china_airport = item
				uni.navigateBack({
					delta: 1
				});
			}
		}
	}
</script>

<style>
	/* #ifdef H5 */
	.search_top {
		top: 44px;
	}
	/* #endif */
	.search_top {
		height: 70upx;position: fixed;padding: 20upx;width: 710upx;background-color: #fff;z-index: 10;
	}
	.search-input {
		width: 100%;height: 100%;text-indent: 70upx;border-radius: 10upx;border: 1upx solid #C0C0C0;
	}
	.search-img {
		width: 40upx;height: 40upx;position: absolute;top: 50%;transform: translateY(-50%);left: 10upx;
	}
	.search-img {
		padding: 10upx;
	}
	.search-content {
		height: 100%;padding-left: 20upx;width: 710upx;
	}
	.search_info {
		width: 100%;height: 90upx;line-height: 90upx;font-size: 30upx;border-bottom: 1upx solid #C0C0C0;
	}
	.search_info:last-child{
		border: none;
	}
</style>
