<template>
	<view class="all">
		<scroll-view style="width: 100%;height: 100%;" scroll-y="true" >
			<image style="width: 100%;" src="/static/img/top/洗車.png" mode="widthFix"></image>
		<view class="Sname">洗 车</view>
		<!-- <image src="/static/img/top/洗車.png" mode=""></image> -->
		<view class="Main">
			<view class="Main-top">请选择提供服务的网点</view>
			<map class="Main-map" scale="10" :latitude="latitude" :longitude="longitude" :markers="covers"></map>
			
			<scroll-view @scrolltolower="lower" scroll-y="true" class="Main-bottom">
				<view v-show="pageCount == 0" style="text-align: center;line-height: 50upx;font-size: 30upx;">该区域暂无网点</view>
				<view class="Main-bottom-item" v-for="(item,index) in storesInfo" :key="index" @tap="showModel2(item)" style="position: relative;">
					<image v-if="item.store_provider == '车享家'" src="/static/img/home_car.png" class="store-logo" mode=""></image>
					<view class="Main-bottom-item-warpper">
						<!-- <image src="/static/img/shop.jpg" class="Main-bottom-item-warpper-img" mode="aspectFill"></image> -->
						<view class="Text-warpper">
							<view class="Text-warpper-item">{{item.name}}</view>
							<view class="Text-warpper-item">门店电话：{{item.store_phone}}</view>
							<view class="Text-warpper-item">门店地址：{{item.store_address}}</view>
							<view class="Text-warpper-item"></view>
							<view class="Text-warpper-item">距离你：1.2 公里</view>
						</view>
					</view>
				</view>
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
				<cover-view style="font-size: 30upx;text-align: center;">
					你预约的店铺是{{SelectedStore.name}}
				</cover-view>
				<cover-view style="font-size: 30upx;text-align: center;" v-if="SelectedStore.store_provider == '车享家'">预约时间为{{section}}</cover-view>
				<!-- <cover-view style="font-size: 30upx;text-align: center;" v-if="SelectedStore.store_provider == '车享家' && userNum > 2">预约时间为下午13-18点</cover-view> -->
				<image :src="qrcode" class="Model-main-qrcode">
					<cover-view class="Model-main-text" style="margin-top: 50upx;">
						可在订单详情页面中出示二维码予店员
					</cover-view>
					<cover-view class="Model-main-text">
						以获得您的尊贵服务
					</cover-view>
					<!-- <a :href="qrcode" :download="imgName"> -->
						<button class="Model-main-sub" type="primary">可长按保存二维码</button>
					<!-- </a> -->
			</cover-view>
			<cover-view v-if="model2" class="Model-main">
				<cover-view class="Model-main-top">
					<cover-view style="text-align: center;line-height: 8vh;font-size: 2vh;">请确认信息</cover-view>
					<image @tap="hideModel" src="/static/img/hide.png" class="Model-main-top-img" mode="aspectFill"></image>
					<cover-view @tap="hideModel" class="Model-main-top-hide"></cover-view>
				</cover-view>
				<cover-view v-if="SelectedStore" class="Model-main-info">
					店铺名称：{{SelectedStore.name}}
				</cover-view>
				<cover-view class="Model-main-info">
					门店电话：{{SelectedStore.store_phone}}
				</cover-view>
				<cover-view class="Model-main-info">
					<!-- <view style="width: 270px;height: 8vh;word-wrap:break-word;"> -->
					门店地址：{{SelectedStore.store_address}}
					<!-- </view> -->
				</cover-view>
				<!-- <cover-view class="Model-main-info">
					评&emsp;&emsp;分：
				</cover-view> -->
				<cover-view class="Model-main-info">
					距&emsp;&emsp;离：1.2公里
				</cover-view>
				<button class="Model-main-sub" @tap="showModel3" type="primary">确认</button>
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
				<picker mode="selector" @change="selectTime" :range="timeArray">
					<cover-view class="Model-main-info" style="margin-top: 20upx;">
						<input class="Date-input" disabled="true" type="text" :value="section" placeholder="点击选中预约时间" />
					</cover-view>
				</picker>
				<button class="Model-main-sub" @tap="checkOrder()" type="primary">确认</button>
			</cover-view>
		</cover-view>
		<Back></Back>
	</view>
	
</template>

<script>
	import QR from '../../static/js/wxqrcode.js'
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue';
	export default {
		data() {
			return {
				// bottom: contentHeight,
				qrcode: '',
				imgName: '',
				model: false,
				model1: false,
				model2: false,
				model3: false,
				longitude: null,
				latitude: null,
				service: null,
				covers: [],
				
				// 店铺数据当前页数
				page: 1,
				// 店铺数据总页数
				pageCount: null,
				storesInfo: [],
				// 加载更多
				state: 'more',
				contentText: {
					contentdown: '上拉加载更多',
					contentrefresh: '加载中',
					contentnomore: '没有更多'
				},
				// 选择的商店
				SelectedStore: null,
				dateArray: [],
				UserTime: '',
				userNum: null,
				timeArray: ['9:00-10:00', '11:00-12:00', '14:00-15:00', '16:00-17:00'],
				section: '',
			}
		},
		components: {
			uniPopup,
			uniLoadMore
		},
		onLoad() {
			// this.service = JSON.parse(data.service)
			// console.log(this.service)
			this.checkToken()

		},
		methods: {
			selectTime(e){
				console.log(e)
				this.section = this.timeArray[e.detail.value]
				
			},
			checkOrder(){
				if (this.UserTime == ''){
					this.Prompt('请选择日期')
				}else if (this.section == ''){
					this.Prompt('请选择时间段')
				}else {
					let info = {
						data: {
							service_id:'1',
							store_id: this.SelectedStore.id,
							detail_info: JSON.stringify({UserTime: this.UserTime})
						}
					}
					let url = getApp().globalData.AllUrl + 'api/cxj/count'
					let info1 = {
						data: {
							service_id:'1',
							store_id: this.SelectedStore.id,
							detail_info: JSON.stringify({UserTime: this.UserTime, section: this.section})
						}
					}
					let url1 = getApp().globalData.AllUrl + 'api/cxj/time'
					let that = this
					uni.request({
						url: url,
						method: 'POST',
						data: info,
						header:{
							Authorization: getApp().globalData.loginToken
						},
						success: res => {
							console.log(res)
							if (res.data.msg == '获取订单数量'){
								if (res.data.data < 4){
									uni.request({
										url: url1,
										method: 'POST',
										data: info1,
										header:{
											Authorization: getApp().globalData.loginToken
										},
										success: res => {
											console.log(res)
											if (res.data.data == '无订单'){
												that.showModel()
											}else {
												that.Prompt('该时间段无服务位，请选择其日期或时间段')
											}
										},
										fail: () => {},
										complete: () => {}
									});
									// that.userNum = res.data.data
									
								}else {
									that.Prompt('该日期无服务位，请选择其它店铺或日期')
								}
							}else {
								that.Prompt('网络连接失败')
							}
						},
						fail: () => {},
						complete: () => {}
					});
					
				}
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
			GetDateStr(AddDayCount) {
				var dd = new Date();
				dd.setDate(dd.getDate() + AddDayCount); //获取AddDayCount天后的日期
				var y = dd.getFullYear();
				var m = dd.getMonth() + 1; //获取当前月份的日期
				var d = dd.getDate();
				return y + "-" + m + "-" + d;
			},
			selectDate(e) {

				this.UserTime = this.dateArray[e.detail.value]
			},
			showModel() {
				let url = getApp().globalData.AllUrl
				let infoData = {
					data: {
						service_type: '1',
						store_id: this.SelectedStore.id
					}
				}
				switch (this.SelectedStore.store_provider) {
					case '车享家':
						url += 'booking/cxj'
						infoData.data_json = JSON.stringify({
							UserTime: this.UserTime,
							section: this.section
						})
						break;
					default:
						url += 'stores/details'
						break;
				}
				uni.request({
					url: url,
					method: 'POST',
					data: infoData,
					header: {
						Authorization: getApp().globalData.loginToken
					},
					success: res => {
						console.log(res)
						if (res.data.data) {
							// 显示二维码
							this.imgName = '' + Date.parse(new Date());
							let img = QR.createQrCodeImg(res.data.data, {
								size: parseInt(300) //二维码大小  
							})
							this.qrcode = img
							this.model = true
							this.model1 = true
							this.model2 = false
							this.model3 = false;
							
							// 不显示二维码
							// this.model = false;
							// this.model1 = false;
							// this.model2 = false;
							// this.model3 = false;
							// this.Prompt('订单已发布，可在订单列表中查看')
						} else {
							that.Prompt('网络连接失败')
						}

					},
					fail: () => {
						that.Prompt('网络连接失败')
					},
					complete: () => {}
				});
			},
			showModel2(item) {
				this.SelectedStore = item
				this.model = true;
				this.model2 = true
			},
			showModel3() {
				switch (this.SelectedStore.store_provider) {
					case '车享家':
						let url = getApp().globalData.AllUrl + 'api/cxj/judge'
						uni.request({
							url: url,
							method: 'POST',
							data: {
								data: {
									service_id: '1'
								}
							},
							header:{
								Authorization: getApp().globalData.loginToken
							},
							success: res => {
								console.log(res)
								if (res.data.msg == "暂无未处理订单"){
									this.UserTime = ''
									this.model = true;
									this.model2 = false;
									this.model1 = false;
									this.model3 = true
								}else {
									this.Prompt('你有未处理的车享家洗车订单,请选择非车享家的店铺')
									this.model = false
									this.model2 = false
								}
							},
							fail: () => {},
							complete: () => {}
						});
						
						break;
					default:
						this.showModel()
						break;
				}

			},
			hideModel() {
				this.model = false;
				this.model1 = false;
				this.model2 = false;
				this.model3 = false;
			},
			toLogin() {
				// uni.navigateTo({
				// 	url: '/pages/Login/Login',
				// });
				// ------ demo start ------
				uni.navigateTo({
					url: '/pages/Login_one/Login_one'
				});
				// ------ demo end ------
			},
			checkToken() {
				let that = this
				uni.getStorage({
					key: 'loginToken',
					success: res => {
						console.log(111)
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
								console.log(res)
								if (res.data.msg == "Token已更改，请重新登录获取") {
									that.toLogin()
								} else if (res.data.msg == '请传递正确的验证头信息') {
									that.toLogin()
								} else {
									getApp().globalData.loginToken = token
									that.getStores()
								}
							},
							fail: () => {
								console.log('获取失败')
							},
							complete: () => {}
						});
					},
					fail() {
						that.toLogin()
					}
				})
			},
			Prompt(content) {
				uni.showToast({
					title: content,
					icon: 'none',
					duration: 1500
				});
			},
			getStores() {
				let that = this
				that.state = 'loading'
				let infoData = {
					province: getApp().globalData.province,
					city: getApp().globalData.city,
					area: getApp().globalData.area,
					service_type: '1',
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
							console.log(that.pageCount)
							
							
						}
						if (that.pageCount == 0){
							that.latitude = getApp().globalData.latitude
							that.longitude = getApp().globalData.longitude
						}else {
							that.latitude = that.storesInfo[0].latitude
							that.longitude = that.storesInfo[0].longitude
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
						}
						
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
	// .Sname {
	// 	width: 400upx;height: 80upx;background: linear-gradient(to right, #808080, rgba(255,255,255,0));position: fixed;top: 15%;font-size: 45upx;text-indent: 80upx;color: white;
	// }
	.Date-input {
		height: 4vh;
		width: 100%;
		border: 2upx solid #C0C0C0;
		text-align: center;
		box-sizing: border-box;
		border-radius: 1vh;
	}

	.Model-main-info {
		font-size: 2vh;
		width: 80%;
		line-height: 4vh;
		white-space: pre-line;
		word-wrap: break-word;
		word-break: break-all;
		margin-left: 10%;
	}

	.Main {
		// width: 100%;
		height: 84vh;
		position: absolute;
		top: 220upx;
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
			height: 52vh;
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
