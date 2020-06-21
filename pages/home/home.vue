<template>
	<view style="width: 100%;height: 100%;">
		<scroll-view style="width: 100%;height: 100%;" scroll-y="true" >
			<view class="Top">
			<image src="/static/img/home/homeTop.png" class="Top-img" mode="widthFix"></image>
			<!-- <view class="topimg-w">
				<view style="width: 100%;height: 100%;position: relative;">
					<image src="/static/img/logo1018.png" class="topimg" mode=""></image>
				</view>
			</view> -->
			<view class="Top-oper">
				<view class="Top-oper-warpper">
					<view class="Top-oper-warpper-item" @tap="clickCheck(toEquity)">
						<view class="Top-oper-warpper-item-img">
							<image class="Oper-img" src="/static/img/equity.png" mode="aspectFill"></image>
						</view>
						<view class="Top-oper-warpper-item-text">权 益</view>
					</view>
				</view>
				<view class="Top-oper-warpper">
					<view class="Top-oper-warpper-item" @tap="clickCheck(toOrder)">
						<view class="Top-oper-warpper-item-img">
							<image class="Oper-img" src="/static/img/order.png" mode="aspectFill"></image>
						</view>
						<view class="Top-oper-warpper-item-text">订 单</view>
					</view>
				</view>
				<view class="Top-oper-warpper">
					<view class="Top-oper-warpper-item" @tap="clickCheck(toQuery)">
						<view class="Top-oper-warpper-item-img">
							<image class="Oper-img" src="/static/img/query.png" mode="aspectFill"></image>
						</view>
						<view class="Top-oper-warpper-item-text">排解疑难</view>
					</view>
				</view>
			</view>
		</view>
		<view class="Nav">
			非预约类服务
		</view>
		<view class="Oper" style="" id="s1">
			<view class="Oper-warpper" style="width: 1400upx;">
				<view class="Oper-warpper-item" v-for="(item,index) in service1" :key="index" @tap="chooseService(index)">
					<image :src="item.img" class="Oper-warpper-item-img" mode="aspectFill"></image>
				</view>
			</view>
		</view>
		<view class="Nav">
			预约类服务
		</view>
		<view class="Oper">
			<view class="Oper-warpper" id="s2">
				<view class="Oper-warpper-item" @tap="clickCheck(jumpOne)">
					<image src="/static/img/server/代駕.png" class="Oper-warpper-item-img" mode="aspectFill"></image>
					<!-- <view class="Oper-warpper-item-text">
						<view style="margin-right: 30upx;">代&emsp;驾</view>
					</view> -->
				</view>
				<view class="Oper-warpper-item" @click="clickCheck(jumpTwo)">
					<image src="/static/img/server/境內機場接送.png" class="Oper-warpper-item-img" mode="aspectFill"></image>
					<!-- <view class="Oper-warpper-item-text">
						<view style="margin-right: 30upx;">境内机场接送</view>
					</view> -->
				</view>
				<view class="Oper-warpper-item" @click="clickCheck(jumpThree)">
					<image src="/static/img/server/高鐵接送.png" class="Oper-warpper-item-img" mode="aspectFill"></image>
					<!-- <view class="Oper-warpper-item-text">
						<view style="margin-right: 30upx;">境内高铁/火车接送</view>
					</view> -->
				</view>
				<view class="Oper-warpper-item" @click="clickCheck(jumpFour)">
					<image src="/static/img/server/貴賓廳.png" class="Oper-warpper-item-img" mode="aspectFill"></image>
					<!-- <view class="Oper-warpper-item-text">
						<view style="margin-right: 30upx;">机场/高铁贵宾厅</view>
					</view> -->
				</view>
				<view class="Oper-warpper-item" @click="clickCheck(jumpSix)">
					<image src="/static/img/server/代辦年檢.png" class="Oper-warpper-item-img" mode="aspectFill"></image>
					<!-- <view class="Oper-warpper-item-text">
						<view style="margin-right: 30upx;">代办年检</view>
					</view> -->
				</view>
			</view>
		</view>
		<view class="Bottom-title" style="margin-top: 48upx;">
			<image src="/static/img/national.png" class="Bottom-title-img" mode="aspectFit"></image>
			<view class="Bottom-title-text">覆盖全国</view>
		</view>
		<view class="Bottom-content">
			超级2万个网点及3000个服务点在全国各地，方便您使用我们的服务
		</view>
		<view class="Bottom-title" style="margin-top: 48upx;">
			<image src="/static/img/service.png" class="Bottom-title-img" mode="aspectFit"></image>
			<view class="Bottom-title-text">称心服务</view>
		</view>
		<view class="Bottom-content">
			24小时智能客服，随时随地支援您的需要
		</view>
		<view class="Bottom-text">
			&copy;2019 翘宇（深圳）信息科技有限公司 粤ICP备19149155号
		</view>
		</scroll-view>
		<view v-if="adBool" class="ad-mask">
			<view style="width: 100%;height: 100%;position: relative;">
				<image @tap="hideAD" v-if="adDel" src="/static/img/del.png" class="ad-del" mode=""></image>
				<image :src="adUrl" class="ad-img" mode="widthFix"></image>
			</view>
		</view>
	</view>
</template>

<script>
	import amapFile from '@/components/amap-wx.js'
	export default {
		data() {
			return {
				service1: [
					{id: 1, name: '洗    车', img: '/static/img/server/洗車.png'},
					{id: 2, name: '喷 漆', img: '/static/img/server/噴漆.png'},
					{id: 3, name: '保 养', img: '/static/img/server/保養.png'},
					{id: 3, name: '机场附近停车', img: '/static/img/server/機場停車.png'}
				],
				gaoKey: 'cc7be50a8cb0c58431a606d5d18778dd',
				amapPlugin: null,
				// 广告
				adUrl: '',
				adBool: false,
				adDel: false
			}
		},
		onLoad() {
			this.checkToken()
			try{
				this.amapPlugin = new amapFile.AMapWX({
					key: this.gaoKey
				})
			}catch(e){
				//TODO handle the exception
				console.log(e)
			}
			getApp().globalData.china_airport = {id: null, name: ''};
			getApp().globalData.A_three_ramilway = {id: null, name: ''};
			getApp().globalData.A_four_station = {id: '', name: ''};
			
		},
		methods: {
			hideAD(){
				this.adBool = false
			},
			chooseService(index){
				let url;
				switch (index){
					case 0:
						url = '/pages/WashCar/WashCar'
						break;
					case 1:
						url = '/pages/Spray/Spray'
						break;
					case 3:
						url = '/pages/ParkCar/ParkCar'
						break
					default:
						url = '/pages/UpKeep/UpKeep'
						break;
				}
				this.clickCheck(function(){
					uni.navigateTo({
						url: url,
					});
				})
				
			},
			jumpOne(){
				uni.navigateTo({
					url: '/pages/Appointment_one/Appointment_one',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			jumpTwo(){
				uni.navigateTo({
					url: '/pages/Appointment_two/Appointment_two',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			jumpThree(){
				uni.navigateTo({
					url: '/pages/Appointment_three/Appointment_three',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			jumpFour(){
				uni.navigateTo({
					url: '/pages/Appointment_four/Appointment_four',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			
			jumpSix(){
				uni.navigateTo({
					url: '/pages/Appointment_six/Appointment_six',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			toEquity(){
				uni.navigateTo({
					url: '/pages/MyEquity/MyEquity',
				});
			},
			toOrder(){
				uni.navigateTo({
					url: '/pages/OrderList/OrderList',
				});
			},
			toQuery(){
				uni.navigateTo({
					url: '/pages/Querys/Querys',
				});
			},
			toLogin(){
				// uni.navigateTo({
				// 	url: '/pages/Login/Login',
				// });
				// ------ demo start ------
				uni.navigateTo({
					url: '/pages/Login_one/Login_one',
				});
				// ------ demo end ------
			},
			Prompt(callback){
				let that = this
				uni.showToast({
					title:'登陆异常，请重新登录',
					duration:1000,
					icon:'none',
					success() {
						setInterval(function(){
							that.toLogin()
						},1000)
					}
				})
			},
			checkToken(){
				let that = this
				uni.getStorage({
					key: 'loginToken',
					success: res => {
						let token = res.data
						let url = getApp().globalData.AllUrl+'user'
						uni.request({
							url: url,
							method: 'GET',
							data: {},
							header:{
								Authorization: token,
							},
							success: res => {
								if (res.data.msg == "Token已更改，请重新登录获取") {
									that.toLogin()
								}else if(res.data.msg == '请传递正确的验证头信息'){
									that.toLogin()
								}else {
									getApp().globalData.loginToken = token
									that.getAdvertisements()
								}
							},
							fail: () => {
								console.log('获取失败')
								that.toLogin()
							},
							complete: () => {}
						});
					}
				})
			},
			getAdvertisements(){
				let url = getApp().globalData.AllUrl + 'api/advertisements';
				let that = this
				uni.request({
					url: url,
					method: 'GET',
					data: {},
					header:{
						Authorization: getApp().globalData.loginToken
					},
					success: res => {
						console.log(res)
						that.adUrl = res.data.data
						that.adBool = true
						setTimeout(function(){that.adDel = true},1000)
					},
					fail: () => {},
					complete: () => {}
				});
			},
			Prompt2(){
				uni.showToast({
					title:'登陆异常，请重新登录',
					// duration:1000,
					icon:'none',
					mask: true,
					success() {
						setTimeout(function(){
							
							uni.navigateTo({
								url: '/pages/Login/Login'
							});
						},1000)
					}
				})
			},
			clickCheck(callback){
				let that = this
				uni.getStorage({
					key: 'loginToken',
					success: res => {
						let token = res.data
						let url = getApp().globalData.AllUrl+'user'
						uni.request({
							url: url,
							method: 'GET',
							data: {},
							header:{
								Authorization: token,
							},
							success: res => {
								console.log(res)
								if (res.data.msg == '请求成功'){
									callback()
								}else {
									that.Prompt2()
								}
							},
							fail: () => {
								console.log('获取失败')
								that.toLogin()
							},
							complete: () => {}
						});
					}
				})
			},
		}
	}
</script>

<style lang="scss">
	// 广告
	.ad-mask {
		width: 100%;height: 100%;position: fixed;top: 0;background: rgba(192,192,192,0.5)
	}
	.ad-img {
		position: absolute;top: 50%;left: 50%;transform: translate(-50%,-50%);width: 70%;
	}
	.ad-del {
		position: absolute;right: 50upx;top: 120upx;width: 80upx;height: 80upx;
	}
	.Top {
		width: 100%;height: 470upx;overflow: hidden;text-align: center;position: relative;
		
		&-img {
			width: 100%;
		}
		&-oper {
			width: 100%;height: 150upx;position: absolute;bottom: 50upx;
			
			&-warpper {
				width: 33.3%;height: 100%;display: inline-block;
				
				&-item {
					width: 110upx;height: 100%;margin-left: 50%;transform: translateX(-50%);position: relative;display: flex;flex-direction: column;
				
					&-img {
						width: 110upx;height: 110upx;border-radius: 50%;background-color: #fff;position: relative;
						
						.Oper-img {
							position: absolute;top: 50%;left: 50%;transform: translate(-50%,-50%);width: 50%;height: 50%;
						}
					}
					&-text {
						width: 100%;height: 40upx;line-height: 40upx;font-size: 25upx;color: #FFFFFF;
					}
				}
			}
		}
	}
	.Nav {
		width: 100%;height: 90upx;line-height: 90upx;text-indent: 55upx;font-size: 35upx;
	}
	.Oper {
		width: 100%;overflow-x: auto;
		
		&-warpper {
			width: 340*5+30upx;margin-right: 30upx;
			
			&-item {
				width: 310upx;height: 167upx;margin-left: 30upx;display: inline-block;position: relative;
				
				&-img {
					width: 100%;border-radius: 10upx;height: 100%;
				}
				&-text {
					width: 100%;height: 35upx;position: absolute;bottom: 10upx;background: linear-gradient(to right, rgba(255,255,255,0) , #808080);
					font-size: 25upx;line-height: 35upx;text-align: right;color: #ffffff;
				}
			}
		}
	}
	
	.Oper .Oper-warpper-item:last-child {
		margin-right: 30upx;
	}
	.Bottom-title {
		width: 100%;height: 30upx;position: relative;
		
		&-img {
			width: 30upx;height: 30upx;position: absolute;left: 55upx;top: 50%;transform: translateY(-50%);
		}
		&-text {
			font-size: 25upx;position: absolute;left: 115upx;top: 50%;transform: translateY(-50%);color: #302993;
		}
	}
	.Bottom-content {
		width: 100%;height: 43upx;font-size: 20upx;color: #c0c0c0;text-indent: 115upx;
	}
	.Bottom-text {
		font-size: 20upx;text-align: center;color: #c0c0c0;line-height: 65upx;
	}
	.topimg-w {
		width: 50%;height: 100upx;position: absolute;top: 30upx;background: linear-gradient(to right, #808080, rgba(255, 255, 255, 0));
	}
	.topimg {
		width: 250upx;height: 81upx;position: absolute;top: 50%;left: 50upx;transform: translateY(-50%);
	}
</style>
