<template>
	<view style="width: 100%;height: 100%;">
		<scroll-view style="width: 100%;height: 100%;" scroll-y="true" >
			<view class="search_top">
			<view style="width: 100%;height: 100%;position: relative;">
				<input type="text" class="search-input" @input="inputAirport" :value="search" placeholder="请输入机场"/>
				<image src="/static/img/search.png" class="search-img" mode=""></image>
			</view>
			</view>
			<view class="search-content">
				<view style="height: 110upx;"></view>
				<view class="search_info" v-for="(item,index) in airInfo" :key="index" @tap="chooseAirport(item)">
					{{item.province}}&nbsp;{{item.name}}
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
				airInfo: [],
				id: '1'
			}
		},
		onLoad(val){
			// this.getAirport()
			let id = val.id
			console.log(id)
			if (id){
				this.id = id
			}
			this.getAirport()
		},
		methods: {
			inputAirport(e){
				this.search = e.detail.value
				// if (this.search != ''){
					this.getAirport()	
				// }
			},
			Prompt(content){
				uni.showToast({
					icon:'none',
					title: content,
					duration:1500
				})
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
						console.log(res.data)
						// let data = res.data.data.data
						if (res.data == "token error"){
							that.Prompt('登陆状态异常')
						}else if(res.data.data.data == 'airports is not exist'){
							that.airInfo = []
							that.Prompt('没有匹配的机场')
							
						}else {
							that.airInfo = res.data.data.data
						}
						
						
					},
					fail: () => {},
					complete: () => {}
				});
			},
			chooseAirport(item){
				switch (this.id){
					case '2':
						getApp().globalData.A_four_station = item
						break;
					case '3':
						break;
					default:
						getApp().globalData.china_airport = item
						break;
				}
				uni.navigateBack({
					delta: 1
				});
			}
		}
	}
</script>

<style>
	/* #ifdef H5 */
	/* .search_top {
		top: 44px;
	} */
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
