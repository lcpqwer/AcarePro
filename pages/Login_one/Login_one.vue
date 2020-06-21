<template>
	<view class="posir" style="height: 100%;">
		<!-- <view>{{a}}</view> -->
		<!-- <view class="LoginMain"> -->
		<!-- <view style="width: 100%;height: 100%;overflow-y: auto;"> -->
		<view class="Logo" style="">
			<image src="/static/img/logo1018.png" style="width: 500upx;height: 160upx;position: absolute;top: 50%;left: 50%;transform: translate(-50%,-50%);"
			 mode=""></image>
		</view>
		<picker style="z-index: 100;" mode="selector" :range="companyList" range-key="name" @change="chooseCompany">
			<input style="z-index: 100;" type="text" class="companyName" disabled="true" :value="companyName" placeholder="点击选择你所属的保险公司" />
		</picker>
		<button class="Sub" type="primary" style="z-index: 100;background-color: #fff;color: #1357c7;box-shadow: 5upx 5upx 5upx #888888;"
		 @tap="toLogin()">登 录</button>
		<!-- </view> -->

		<image src="/static/img/bgi.jpg" style="position: absolute;bottom: 0;right: 0;z-index: 1;" mode=""></image>
		<image src="/static/img/bottom.png" style="width: 100%;height: 25upx;position: absolute;bottom:0;z-index: 10;" mode=""></image>
		<!-- </view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				companyName: '',
				companyList: [],
				companyID: 0,
				height: '',
				a: '',
			};
		},
		onLoad(val) {
			let that = this
			if (val.data && JSON.parse(val.data).openid) {
				that.a = JSON.parse(val.data).openid
				getApp().globalData.openid = JSON.parse(val.data).openid
				let url = getApp().globalData.AllUrl + 'auth/wechat/login'
				uni.request({
					url: url,
					method: 'POST',
					data: {
						wid: getApp().globalData.openid
					},
					success: res => {
						console.log(res)
						if (res.data == -1){
							uni.showToast({
								title: '授权成功请绑定账号',
								icon: 'none',
								duration:1000,
								mask: true,
								success() {
									setTimeout(function() {uni.hideToast()}, 1000);
								}
							});
						}else {
							getApp().globalData.loginToken = 'JWT ' + res.data.data.token
							uni.setStorage({
								key: 'loginToken',
								data: 'JWT ' + res.data.data.token,
								success() {
									that.toHome()
								}
							})
						}
					},
					fail: () => {},
					complete: () => {}
				});
			} else {
				// 使用token进行登陆
				uni.showLoading({
					title: '',
					mask: true
				});
				// #ifdef H5
				that.height = 'height: ' + (document.body.scrollHeight - 40) + 'px'
				// #endif
				// #ifndef H5
				uni.getSystemInfo({
					success(res) {
						that.height = 'height: ' + (res.screenHeight - 68) + 'px'
					}
				})
				// #endif
				uni.getStorage({
					key: 'loginToken',
					success: res => {
						console.log(2)
						let token = res.data
						uni.request({
							url: getApp().globalData.AllUrl + 'user',
							method: 'GET',
							data: {},
							header: {
								Authorization: token,
							},
							success: res => {
								console.log(res)
								getApp().globalData.loginToken = token
								if (res.data.msg == "Token已更改，请重新登录获取") {
									that.Prompt('登陆异常，请重新登录')
								} else if (res.data.msg == '请传递正确的验证头信息') {
									that.Prompt('登陆异常，请重新登录')
								} else {
									if (res.data.data.inc_state) {
										that.toHome()
									} else {
										uni.navigateTo({
											url: '/pages/Perfect_user/Perfect_user'
										});
									}

								}
							},
							fail: () => {
								console.log('获取失败')
							},
							complete: () => {}
						});
					}
				})
			}

			that.getcompany()
			that.getLocation()
		},
		methods: {
			getLocation() {
				uni.getLocation({
					type: 'wgs84',
					success: function(res) {
						console.log(res)
						getApp().globalData.latitude = res.latitude
						getApp().globalData.longitude = res.longitude
						uni.request({
							url: 'https://restapi.amap.com/v3/geocode/regeo',
							method: 'GET',
							data: {
								key: '3dcb6b8d3b392e810c3de2b24de278bd',
								location: getApp().globalData.longitude + "," + getApp().globalData.latitude,
								extensions: "all",
								s: "rsx",
								sdkversion: "sdkversion",
								logversion: "logversion",
							},
							success: res => {
								console.log(res)
								let address = res.data.regeocode.addressComponent
								if (typeof(address.city) != 'string') {
									address.city = address.province
								}
								getApp().globalData.province = address.province
								getApp().globalData.city = address.city
								getApp().globalData.area = address.district
							},
							fail: () => {
								console.log('error')
							},
							complete: () => {}
						});
					}
				});
			},
			chooseCompany(e) {
				// console.log(e)
				this.companyName = this.companyList[e.detail.value].name
				this.companyID = this.companyList[e.detail.value].id
			},
			toLogin() {
				if (this.companyName == '') {
					this.Prompt('请选择保险公司！')
				} else {
					getApp().globalData.company = this.companyID
					console.log(this.companyID)
					if (this.companyID == 3) {
						uni.navigateTo({
							url: '/pages/Login_two/Login_two'
						});
					} else if (this.companyID == 4) {
						uni.navigateTo({
							url: '/pages/Login_three/Login_three'
						});
					} else {
						uni.navigateTo({
							url: '/pages/Login/Login'
						});
					}

				}
			},
			Prompt(content) {
				uni.showToast({
					title: content,
					icon: 'none'
				});
			},
			getcompany() {
				let that = this
				uni.request({
					url: getApp().globalData.AllUrl + 'api/company',
					// url: 'https://www.acarepro.online/admin/companys',
					method: 'GET',
					data: {},
					success: res => {
						console.log(res)
						that.companyList = res.data
						uni.hideLoading()
					},
					fail: () => {
						that.Prompt('网络出错！')
					},
					complete: () => {}
				});
			},
			toHome() {
				uni.navigateTo({
					url: '/pages/home/home'
				});
			}
		}
	}
</script>

<style lang="scss">
	.companyName {
		width: 650upx;
		height: 80upx;
		text-align: center;
		border: 2upx solid #c0c0c0;
		border-radius: 10upx;
		margin-left: 50upx;
	}

	.Logo {
		width: 100%;
		height: 400upx;
		text-align: center;
		line-height: 255upx;
		position: relative;
	}

	.Sub {
		width: 60%;
		height: 85upx;
		line-height: 85upx;
		font-size: 35upx;
		margin-top: 125upx;
		background-color: #118acd;
	}
</style>
