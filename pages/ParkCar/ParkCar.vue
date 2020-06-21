<template>
	<view class="all" style="height: 100%;">
		<Back></Back>
		<scroll-view style="width: 100%;height: 100%;" scroll-y="true">
			<image style="width: 100%;" src="/static/img/top/機場停車.png" mode="widthFix"></image>
			<view class="Sname">机场附近停车</view>
			<view class="Main">
				<view class="Main-top">请选择提供服务的网点</view>
				<map class="Main-map" scale="10" :latitude="latitude" :longitude="longitude" :markers="covers"></map>
				<view style="width: 100%;height: 7vh;position: relative;">
					<input placeholder="搜索..." type="text" @input="inputAir" style="width: 450upx;height: 4vh;border: 1px solid #c0c0c0;position: absolute;
					top: 50%;left: 50%;transform: translate(-50%,-50%);padding-left: 25upx;font-size: 2vh;padding-right: 50upx;"/>
					<image src="../../static/img/search.png" mode="" style="width: 40upx;height: 40upx;position: absolute;top: 50%;transform: translateY(-50%);right: 120upx;"></image>
				</view>
				<!-- @scrolltolower="lower" -->
				<scroll-view scroll-y="true" class="Main-bottom">
					<!-- <view @tap="showModel2(item)" v-for="(item, index) in airList" :key="index" class="air-item">{{item.name}}</view> -->
					<view class="Main-bottom-item" v-for="(item,index) in airList" :key="index" style="position: relative;height: auto;">
						<view class="Main-bottom-item-warpper" style="height: auto;" @tap="showModel2(item)">
							<view class="Text-warpper">
								<view class="Text-warpper-item" style="font-size: 30upx;line-height: 50upx;">机场名称:{{item.name}}</view>
								<view class="Text-warpper-item" style="font-size: 30upx;line-height: 50upx;">机场地址：{{item.address}}</view>
								<view class="Text-warpper-item" style="text-align: left;font-size: 30upx;line-height: 50upx;">机场号：{{item.code}}</view>
							</view>
						</view>
					</view>
					<view v-if="airList.length == 0" style="width: 100%;text-align: center;line-height: 80upx;font-size: 30upx;">暂无匹配机场</view>
					<uni-load-more v-if="storesInfo.length>=10" :status="state" :content-text="contentText" />
				</scroll-view>
			</view>
		
		</scroll-view>
			<cover-view v-if="model" class="Model">
				<cover-view v-if="model1" class="Model-main">
					<cover-view class="Model-main-top">
						<image @tap="hideModel" src="/static/img/hide.png" class="Model-main-top-img" mode="aspectFill"></image>
						<view @tap="hideModel" class="Model-main-top-hide"></view>
					</cover-view>
					<image :src="qrcode" class="Model-main-qrcode">
						<cover-view class="Model-main-text">
							出示二维码予店员
						</cover-view>
						<cover-view class="Model-main-text">
							以获得您的尊贵服务
						</cover-view>
						<!-- <button class="Model-main-sub" @tap="upImg" type="primary">保存二维码至手机</button> -->
						<!-- <a :href="qrcode" :download="imgName"> -->
							<button class="Model-main-sub" type="primary">可长按保存二维码</button>
						<!-- </a> -->
				</cover-view>
				<cover-view v-if="model2" class="Model-main">
					<!-- <cover-view style="width: 100%;height: 100%;position: relative;">
						<cover-view class="Model-main-top">
							<cover-view style="text-align: center;line-height: 8vh;font-size: 2vh;">请确认信息</cover-view>
							<image @tap="hideModel" src="/static/img/hide.png" class="Model-main-top-img" mode="aspectFill"></image>
							<cover-view @tap="hideModel" class="Model-main-top-hide"></cover-view>
						</cover-view>
						<cover-view class="Model-main-info">
							店铺名称：{{SelectedStore.name}}
						</cover-view>
						<cover-view v-if="SelectedStore.store_phone" class="Model-main-info">
							门店电话：{{SelectedStore.store_phone}}
						</cover-view>
						<cover-view v-else class="Model-main-info">
							门店电话：暂无
						</cover-view>
						<cover-view class="Model-main-info">
							门店地址：{{SelectedStore.store_address}}
						</cover-view>
						<cover-view class="Model-main-info">
							评&emsp;&emsp;分：
						</cover-view>
						<cover-view class="Model-main-info">
							距&emsp;&emsp;离：1.2公里
						</cover-view>
						<button class="Model-main-sub" @tap="showModel" type="primary">确认</button>
					</cover-view>-->
					<cover-view style="width: 100%;height: 100%;position: relative;">
						<cover-view class="Model-main-top">
							<cover-view style="text-align: center;line-height: 8vh;font-size: 2vh;">请确认信息</cover-view>
							<image @tap="hideModel" src="/static/img/hide.png" class="Model-main-top-img" mode="aspectFill"></image>
							<cover-view @tap="hideModel" class="Model-main-top-hide"></cover-view>
						</cover-view>
						<cover-view class="Model-main-info">
							机场名称：{{SelectedStore.name}}
						</cover-view>
						<cover-view class="Model-main-info">
							机场地址：{{SelectedStore.province}}-{{SelectedStore.city}}-{{SelectedStore.address}}
						</cover-view>
						<button class="Model-main-sub" @tap="showModel3" type="primary">确认</button>
					</cover-view>
				</cover-view>
			</cover-view>
			<cover-view v-if="model3" class="Model-main">
				<cover-view class="Model-main-top">
					<cover-view style="text-align: center;line-height: 8vh;font-size: 2vh;">请选择预约时间</cover-view>
					<image @tap="hideModel" src="/static/img/hide.png" class="Model-main-top-img" mode="aspectFill"></image>
					<cover-view @tap="hideModel" class="Model-main-top-hide"></cover-view>
				</cover-view>
				<picker mode="selector" @change="selectDate" :range="dateArray">
					<cover-view class="Model-main-info" @tap="getSelectDate">
						<input class="Date-input" disabled="true" type="text" :value="UserTime" placeholder="点击选中预约日期" />
					</cover-view>
				</picker>
				<button class="Model-main-sub" @tap="upPark()" type="primary">确认</button>
			</cover-view>
	</view>
</template>

<script>
	// var contentHeight;
	// uni.getSystemInfo({
	//     success(res) {
	// 		contentHeight = 'bottom: '+(res.windowHeight*0.8)+'px'
	//     }
	// })
	import QR from '../../static/js/wxqrcode.js'
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue';
	import downloader from '@/components/img-downloader.js';
	export default {
		data() {
			return {
				// bottom: contentHeight,
				qrcode: '',
				model: false,
				model1: false,
				model2: false,
				model3: false,
				longitude: null,
				latitude: null,
				service: null,
				covers: [],
				dateArray: [],
				UserTime: '',
				// 店铺数据当前页数
				page: 1,
				// 店铺数据总页数
				pageCount: null,
				// 店铺信息
				storesInfo: [],
				// 加载更多
				state: 'more',
				contentText: {
					contentdown: '上拉加载更多',
					contentrefresh: '加载中',
					contentnomore: '没有更多'
				},
				// 选择的网点
				SelectedStore: null,
				imgName: '',
				// 机场
				air: '',
				airList: []
			}
		},
		components: {
			uniPopup,
			uniLoadMore
		},
		onLoad() {
			this.checkToken()
			
			this.imgName = '' + Date.parse(new Date());
		},
		methods: {
			upPark(){
				let that = this
				let url = getApp().globalData.AllUrl + 'stores/parking'
				let infoData = {
					data: {
						service_type: '8',
					},
					data_json: JSON.stringify({
						air: that.SelectedStore.name,
						address: that.SelectedStore.address,
						UserTime: that.UserTime
					})
				}
				console.log(infoData)
				uni.request({
					url: url,
					method: 'POST',
					data: infoData,
					header: {
						Authorization: getApp().globalData.loginToken
					},
					success: res => {
						console.log(res)
						if (res.data.msg == "非预约服务信息提交完成"){
							let img = QR.createQrCodeImg(res.data.data, {
								size: parseInt(300) //二维码大小  
							})
							this.qrcode = img
							this.model = true
							this.model1 = true
							this.model2 = false
							this.model3 = false
						}
					},
					fail: () => {},
					complete: () => {}
				});
			},
			selectDate(e) {
				this.UserTime = this.dateArray[e.detail.value]
			},
			GetDateStr(AddDayCount) {
				var dd = new Date();
				dd.setDate(dd.getDate() + AddDayCount); //获取AddDayCount天后的日期
				var y = dd.getFullYear();
				var m = dd.getMonth() + 1; //获取当前月份的日期
				var d = dd.getDate();
				return y + "-" + m + "-" + d;
			},
			getSelectDate() {
				let hour = new Date().getHours()
				if (hour >= 18) {
					// console.log('后天', this.GetDateStr(2))
					this.dateArray = [this.GetDateStr(2), this.GetDateStr(3), this.GetDateStr(4)]
				} else {
					this.dateArray = [this.GetDateStr(1), this.GetDateStr(2), this.GetDateStr(3)]
					console.log('今天', this.GetDateStr(0))
					console.log('明天', this.GetDateStr(1))
					console.log('后天', this.GetDateStr(2))
				}
			},
			inputAir(e){
				this.air = e.detail.value
				console.log(e)
				this.search()
			},
			search(){
				let that = this
				let url = getApp().globalData.AllUrl + 'api/filter_airports'
				console.log(that.air)
				uni.request({
					url: url,
					method: 'POST',
					data: {
						data_json: that.air
					},
					header:{
						Authorization: getApp().globalData.loginToken
					},
					success: res => {
						console.log(res)
						if (res.data.data.msg == "返回机场列表成功"){
							if (res.data.data.data == "airports is not exist"){
								that.airList = []
							}else if(res.data.data.data == 'error'){
								uni.showToast({
									title: '网络连接失败',
									icon: "none",
									duration:1000
								});
							}else {
								that.airList = res.data.data.data
							}
						}else {
							uni.showToast({
								title: '网络连接失败',
								icon: "none",
								duration:1000
							});
						}
						
						
					},
					fail: () => {
						uni.showToast({
							title: '网络连接失败',
							icon: "none",
							duration:1000
						});
					},
					complete: () => {}
				});
			},
			showToast(content) {
				uni.showToast({
					title: content,
					icon: 'none',
					mask: true,
					duration: 1500
				});
			},
			showModel() {
				let that = this
				let url = getApp().globalData.AllUrl + 'stores/details'
				console.log(this.SelectedStore.id)
				if (that.UserTime == ''){
					that.showToast('请选择日期')
				}else {
					uni.request({
						url: url,
						method: 'POST',
						data: {
							data: {
								service_type: '8',
								store_id: this.SelectedStore.id
							}
						},
						dataType: 'json',
						header: {
							Authorization: getApp().globalData.loginToken
						},
						success: res => {
							console.log(res)
							if (res.data.data) {
								let img = QR.createQrCodeImg(res.data.data, {
									size: parseInt(300) //二维码大小  
								})
								this.qrcode = img
								this.model = true
								this.model1 = true
								this.model2 = false
								this.model3 = false
								// // 不显示二维码
								// this.model = false;
								// this.model1 = false;
								// this.model2 = false;
								// this.model3 = false;
								// this.showToast('订单已发布，可在订单列表中查看')
							} else {
								that.showToast('网络连接失败')
							}
					
						},
						fail: () => {
							that.showToast('网络连接失败')
						},
						complete: () => {}
					});
				}
				

			},
			showModel2(item) {
				this.model = true
				this.model2 = true
				this.SelectedStore = item
				this.model3 = false
			},
			showModel3(){
				this.model = true
				this.model1 = false
				this.model2 = false
				this.model3 = true
			},
			hideModel() {
				this.model = false
				this.model1 = false
				this.model2 = false
				this.model3 = false
			},
			toLogin() {
				// uni.navigateTo({
				// 	url: '/pages/Login/Login',
				// });
				// ------ demo start ------
				uni.navigateTo({
					url: '/pages/Login_one/Login_one',
				});
				// ------ demo end ------
			},
			checkToken() {
				let that = this
				uni.getStorage({
					key: 'loginToken',
					success: res => {
						let token = res.data
						let url = getApp().globalData.AllUrl + 'user'
						uni.request({
							url: url,
							method: 'GET',
							data: {},
							header: {
								Authorization: token,
							},
							success: res => {
								if (res.data.msg == "Token已更改，请重新登录获取") {
									that.toLogin()
								} else if (res.data.msg == '请传递正确的验证头信息') {
									that.toLogin()
								} else {
									getApp().globalData.loginToken = token
									this.search()
									that.getStores()
								}
							},
							fail: () => {
								console.log('获取失败')
							},
							complete: () => {}
						});
					}
				})
			},
			getStores() {
				let that = this
				that.state = 'loading'
				let infoData = {
					province: getApp().globalData.province,
					city: getApp().globalData.city,
					area: getApp().globalData.area,
					service_type: '8',
					page: that.page,
					count: 10
				}
				console.log(infoData)
				let url = getApp().globalData.AllUrl + 'stores/location'
				uni.request({
					url: url,
					method: 'POST',
					header: {
						Authorization: getApp().globalData.loginToken
					},
					data: {
						data: infoData
					},
					success: res => {
						console.log(res)
						that.storesInfo = that.storesInfo.concat(res.data.data.data_info)
						that.state = 'more'
						if (that.page == 1) {
							that.pageCount = Math.ceil(res.data.data.total_count / 10)
							// console.log(that.pageCount)
							that.latitude = that.storesInfo[0].latitude
							that.longitude = that.storesInfo[0].longitude
						}
						for (let i = 0; i < res.data.data.data_info.length; i++) {
							let item = res.data.data.data_info[i]
							that.covers.push({
								latitude: item.latitude,
								longitude: item.longitude,
								iconPath: '/static/img/mapLogo.png',
								width: 25,
								height: 43,
								callout: {
									content: item.name
								}
							})

						}
						that.page += 1
					},
					fail: () => {

					},
					complete: () => {}
				});
			},
			lower() {
				if (this.page > this.pageCount) {
					this.state = 'noMore'
				} else {
					this.getStores()
				}
			}
		}
	}
</script>

<style lang="scss">
	.Date-input {
		height: 4vh;
		width: 100%;
		border: 2upx solid #C0C0C0;
		text-align: center;
		box-sizing: border-box;
		border-radius: 1vh;
	}
	.air-item {
		width: 670upx;
		// padding: 0 40upx;
		margin-left: 40upx;
		height: 80upx;
		line-height: 80upx;
		font-size: 30upx;
		border-bottom: 1px solid #c0c0c0;
	}
	.Model-main-info {
		font-size: 2vh;
		width: 90%;
		line-height: 4vh;
		white-space: pre-line;
		word-wrap: break-word;
		word-break: break-all;
		margin-left: 5%;
	}

	.Main {
		// width: 100%;
		height: 84vh;
		position: absolute;
		top: 220upx;
		// position: fixed;
		// bottom: 0;
		// border-top: #c0c0c0 solid 4upx;
		// background-color: #fff;
		// border-top-left-radius: 8vh 6vh;
		// border-top-right-radius: 8vh 6vh;

		&-top {
			width: 100%;
			height: 6vh;
			font-size: 2vh;
			text-align: center;
			line-height: 6vh;
		}

		&-map {
			width: 39vh;
			height: 22vh;
			margin-left: 50%;
			transform: translateX(-50%);
			border: #c0c0c0 solid 4upx;
		}

		&-bottom {
			width: 100%;
			height: 48vh;
			position: absolute;
			bottom: 0;
			overflow-y: auto;

			&-item {
				width: 650upx;
				height: 210upx;
				padding-left: 50upx;
				padding-right: 50upx;

				&-warpper {
					width: 100%;
					height: 160upx;
					padding-top: 25upx;
					padding-bottom: 25upx;
					border-bottom: #c0c0c0 solid 2px;

					&-img {
						height: 100%;
						width: 200upx;
						display: inline-block;
						margin-right: 30upx;
						vertical-align: middle;
					}

				}
			}
		}
	}

	.Text-warpper {
		width: 100%;
		height: 100%;
		// display: inline-block;
		// vertical-align: middle;

		&-item {
			width: 100%;
			height: 20%;
			font-size: 20upx;
			line-height: 32upx;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
	}

	.Text-warpper>.Text-warpper-item:last-child {
		text-align: right;
	}

	.Main .Main-bottom-item:last-child .Main-bottom-item-warpper {
		border: none
	}

	// 模态框
	.Model {
		width: 100%;
		height: 100%;
		background-color: rgba(220, 220, 220, 0.5);
		position: fixed;
		top: 0;

		&-main {
			width: 545upx;
			background-color: #fff;
			position: fixed;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			border-radius: 20upx;
			border: #c0c0c0 solid 3upx;

			&-top {
				width: 100%;
				height: 8vh;
				position: relative;

				&-img {
					width: 3vh;
					height: 3vh;
					position: absolute;
					top: 50%;
					transform: translate(50%, -50%);
					right: 60upx;
				}

				&-hide {
					height: 80%;
					width: 4vh;
					background-color: rgba(255, 255, 255, 0);
					position: absolute;
					top: 50%;
					transform: translate(50%, -50%);
					right: 60upx;
				}
			}

			&-qrcode {
				height: 20vh;
				width: 20vh;
				margin-left: 50%;
				transform: translateX(-50%);
				padding-top: 2vh;
				padding-bottom: 2vh;
			}

			&-text {
				width: 100%;
				text-align: center;
				height: 3vh;
				line-height: 3vh;
				font-size: 2vh;
			}

			&-sub {
				height: 5vh;
				width: 80%;
				line-height: 5vh;
				font-size: 2vh;
				margin-top: 5vh;
				background-color: #3b8bff;
				margin-bottom: 5vh;
			}
		}
	}
</style>
