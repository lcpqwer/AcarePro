<template>
	<view  class="posir" :style="height">
		<!-- <view class="LoginMain"> -->
			<view class="Logo">
				<!-- <image src="/static/img/logo.png" mode="widthFix" class="Logo-img"></image>
				<text class="Logo-name">国任保险</text>
				<text class="Logo-sep">|</text>
				<text class="Logo-area">上海分公司</text> -->
				<image src="/static/img/logo1018.png" style="width: 500upx;height: 160upx;position: absolute;top: 50%;left: 50%;transform: translate(-50%,-50%);" mode=""></image>
			</view>
			<view class="Input-warpper" style="z-index: 10">
				<view class="Input" style="border: #C0C0C0 solid 1upx;">
					<text class="Input-text">姓&emsp;名&ensp;：</text><input class="Input-input" type="text" :value="UserName" @input="changUserName" placeholder="请输入姓名" placeholder-style="color: #cccccc">
				</view>
				<view class="Input" style="border-left: #C0C0C0 solid 1upx;border-right: #C0C0C0 solid 1upx;">
					<text class="Input-text">保单号&ensp;：</text><input class="Input-input" type="text" :value="PhoneNum" @input="changPhoneNum" placeholder="请输入保单号" placeholder-style="color: #cccccc">
				</view>
				<view class="Input" style="border: #C0C0C0 solid 1upx;">
					<text class="Input-text">车架号&ensp;：</text><input class="Input-input" :value="CarCodes" maxlength="6" @input="changCarCodes" type="text" placeholder="请输入车架号后六位" placeholder-style="color: #cccccc">
				</view>
			</view>
			<button class="Sub" type="primary" @tap="Login" style="z-index: 100;background-color: #fff;color: #1357c7;box-shadow: 5upx 5upx 5upx #888888;">登&emsp;陆</button>
			<view></view>
			<image src="/static/img/bgi.jpg" style="position: absolute;bottom: 0;right: 0;z-index: 1;" mode=""></image>
			<image src="/static/img/bottom.png" style="width: 100%;height: 25upx;position: absolute;bottom:0;z-index: 10;" mode=""></image>
			<!-- <view style="position: fixed;bottom: 300px;right: 0;z-index: 1;width: 100%;height: 300px;background-color: #000;"></view> -->
		<!-- </view> -->
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				UserName: '',
				PhoneNum: '',
				CarCodes: '',
				height: 'height: '+(document.body.scrollHeight-40)+'px'
			};
		},
		onLoad() {
			// demo start-----------------------------------------------
			if (!getApp().globalData.company){
				uni.navigateTo({
					url: '/pages/Login_one/Login_one'
				});
			}
			// demo end----------------------------------
			// 使用token进行登陆
			// let that = this
			// uni.getStorage({
			// 	key: 'loginToken',
			// 	success: res => {
			// 		let token = res.data
			// 		console.log('1212');
			// 		uni.request({
			// 			url: getApp().globalData.AllUrl+'user',
			// 			method: 'GET',
			// 			data: {},
			// 			header:{
			// 				Authorization: token,
			// 			},
			// 			success: res => {
			// 				console.log(res)
			// 				getApp().globalData.loginToken = token
			// 				if (res.data.msg == "Token已更改，请重新登录获取") {
			// 					that.Prompt('登陆异常，请重新登录')
			// 					// ----------demo start-------------
			// 					setTimeout(function(){
			// 						uni.navigateTo({
			// 							url: '/pages/Login_one/Login_one'
			// 						});	
			// 					},2000)
			// 					// ----------demo end------------------
			// 				}else if(res.data.msg == '请传递正确的验证头信息'){
			// 					that.Prompt('登陆异常，请重新登录')
			// 					// ---------- demo start -----------
			// 					setTimeout(function(){
			// 						uni.navigateTo({
			// 							url: '/pages/Login_one/Login_one'
			// 						});	
			// 					},2000)
			// 					// ----------- demo end -------------
			// 				}else {
			// 					that.toHome()
			// 				}
			// 			},
			// 			fail: () => {
			// 				console.log('获取失败')
			// 			},
			// 			complete: () => {}
			// 		});
			// 	}
			// })
			uni.getLocation({
			    type: 'wgs84',
			    success: function (res) {
					getApp().globalData.latitude = res.latitude
					getApp().globalData.longitude = res.longitude
			    }
			});
		},
		methods:{
			changUserName(e){
				this.UserName = e.detail.value
			},
			changPhoneNum(e){
				this.PhoneNum = e.detail.value
			},
			changCarCodes(e){
				this.CarCodes = e.detail.value
			},
			Prompt(content){
				uni.showToast({
					title:content,
					duration:1000,
					icon:'none'
				})
			},
			checkPhone(phone){
				var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
				if (!myreg.test(phone)) {
				  return false;
				} else {
				  return true;
				}
			},
			checkCarnum(){
				var re = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/;
				if(this.CarCodes.search(re) == -1) {
					return false;
				} else {
					return true;
				}
			},
			Login(){
				// 第一次登陆\token无效\清缓存之后
				let that = this
				if (that.UserName == '' || that.CarCodes == '' || that.PhoneNum == ''){
					that.Prompt('信息填写不完整')
				}else {
					uni.request({
						url: getApp().globalData.AllUrl + 'auth/user/login',
						method: 'POST',
						data: {
							name: that.UserName,
							insurance_id: that.PhoneNum,
							inc_vin: that.CarCodes,
							company_id: getApp().globalData.company,
							wid: getApp().globalData.openid
						},
						success: res => {
							console.log(res)
							if (res.data.data.token) {
								getApp().globalData.loginToken = 'JWT ' + res.data.data.token
								uni.setStorage({
									key: 'loginToken',
									data: 'JWT ' + res.data.data.token,
									success() {
										if (res.data.data.state) {
											that.toHome()
										} else {
											uni.navigateTo({
												url: '/pages/Perfect_user/Perfect_user',
												success: res => {},
												fail: () => {},
												complete: () => {}
											});
										}
					
									}
								})
							} else {
								that.Prompt('登录失败！请检查登录信息')
							}
					
						},
						fail: () => {
							that.Prompt('网络出错')
						},
						complete: () => {}
					});
				}
				
				
				// 开发版
				// this.toHome()
			},
			toHome(){
				uni.navigateTo({
					url: '/pages/home/home'
				})
			}
		}
	}
</script>

<style lang="scss">
	.LoginBack {
		width: 100%;height: 100%;position: fixed;z-index: 1;
	}
	.LoginMain {
		width: 100%;height: 100%;position: fixed;z-index: 100;background-size: 100% 100%;
	}
	.Logo {
		width: 100%;height: 400upx;text-align: center;line-height: 255upx;position: relative;
		
		&-img {
			width: 100upx;vertical-align: middle;height: 100upx;
		}
		&-name {
			vertical-align: middle;font-size: 40upx;font-weight: 600;
		}
		&-sep {
			vertical-align: middle;font-size: 40upx;
		}
		&-area {
			vertical-align: sub;font-size: 30upx;font-weight: 600;
		}
	}
	.Input-warpper {
		width: 625upx;background-color: #fff;height: 270upx;margin-left: 62.5upx;
	}
	.Input {
		height: 90upx;width: 100%;position: relative;z-index: 100;background-color: #fff;
		
		&-input {
			display: inline-block;vertical-align: middle;font-size: 30upx;position: absolute;top: 50%;transform: translateY(-50%);left: 170upx;width: 400upx;
		}
		&-text {
			font-size: 30upx;font-weight: 600;margin: 0 30upx;line-height: 90upx;
		}
	}
	.Sub {
		width: 60%;height: 85upx;line-height: 85upx;font-size: 35upx;margin-top: 125upx;background-color: #118acd;
	}
	.bgi {
		position: fixed;right: 0;z-index: 1;bottom: 0;
	}
</style>
