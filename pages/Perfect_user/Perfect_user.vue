<template>
	<view class="posir" :style="height">
		<view style="width: 100%;height: 100%;overflow-y: auto;">
			<view style="height: 70upx;"></view>
			<view class="Per-logo">
				<image class="Per-logo-img" src="/static/img/per_logo.png" mode=""></image>
			</view>
			<view style="height: 40upx;"></view>
			<view class="Per-text">
				感谢您使用壹钻养护平台，为促使你的服务质量更好，请完善个人资料
			</view>
			<view style="height: 40upx;"></view>
			<view class="Per-main">
				<view class="Per-item">
					<view class="Pi-title">
						姓名
					</view>
					<input class="Pi-input" @input="changeVal(1,$event)" type="text" :value="inc_name" placeholder="填写姓名" />
				</view>
				<view class="Per-item">
					<view class="Pi-title">
						联系电话
					</view>
					<input class="Pi-input" @input="changeVal(2,$event)" type="number" maxlength="11" :value="phone" placeholder="填写号码" />
				</view>
				<view class="Per-item">
					<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
						<view class="Pi-title">
							出生日期
						</view>
						<input class="Pi-input" disabled="true" type="text" :value="dob" placeholder="年/月/日" />
					</picker>
				</view>
				<view class="Per-item">
					<view class="Pi-title">
						车牌
					</view>
					<input class="Pi-input" @input="changeVal(3,$event)" type="text" :value="car_plate_number" placeholder="填写车牌" />
				</view>
				<view class="Per-item" style="position: relative;z-index: 10;">
					<!-- <view style="width: 40upx;height: 40upx;position: absolute;top: 50%;transform: translateY(-50%);"> -->
					<checkbox value="cb" :checked="check" class="Per-check" @click="checkBox" />
					<view class="Pc-text">
						本人同意并接受平台的服务流程及条款《<text style="color: #6a8ec9;">壹钻平台使用条款</text>》
					</view>
					<!-- </view> -->
				</view>

			</view>
			<button class="Per-sub" type="primary" @tap="perfectInfo()">登陆</button>
		</view>
		<image src="/static/img/bgi.jpg" style="position: absolute;bottom: 0;right: 0;z-index: 1;" mode=""></image>
		<image src="/static/img/bottom.png" style="width: 100%;height: 25upx;position: absolute;bottom:0;z-index: 10;" mode=""></image>
	</view>
</template>

<script>
	export default {
		data() {
			const currentDate = this.getDate({
				format: true
			})
			return {
				check: true,
				// 个人信息
				inc_name: '',
				phone: '',
				dob: '',
				car_plate_number: '',
				date: currentDate,
				height: ''
			}
		},
		computed: {
			startDate() {
				return this.getDate('start');
			},
			endDate() {
				return this.getDate('end');
			}
			// height() {
			// 	return this.getHeight()
			// }
		},
		onLoad() {
			let that = this
			// uni.getSystemInfo({
			// 	success(res) {
			// 		that.height = 'height: '+(res.screenHeight - 44)+'px'
			// 	}
			// })
			that.height = 'height:'+(document.body.scrollHeight-44)+'px'
		},
		methods: {
			checkBox() {
				this.check = !this.check
			},
			changeVal(index, e) {
				switch (index) {
					case 1:
						this.inc_name = e.detail.value
						break;
					case 2:
						this.phone = e.detail.value
						break;
					default:
						this.car_plate_number = e.detail.value
						break;
				}
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();

				if (type === 'start') {
					year = year - 60;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},
			bindDateChange(e) {
				console.log(e)
				this.date = e.target.value
				this.dob = e.target.value
			},
			showToast(content) {
				uni.showToast({
					title: content,
					icon: 'none',
					duration: 1000
				});
			},
			checkPhone() {
				// console.log(this.phone)
				let phone = this.phone
				var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
				if (!myreg.test(phone)) {
					return false;
				} else {
					return true;
				}
			},
			checkCarnum() {
				var re = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/;
				if (this.car_plate_number.search(re) == -1) {
					return false;
				} else {
					return true;
				}
			},
			perfectInfo() {
				if (this.inc_name == '' || this.phone == '' || this.dob == '' || this.car_plate_number == '') {
					this.showToast('信息填写不完整')
				} else if (!this.checkPhone()) {
					this.showToast('手机号格式错误')
				} else if (!this.checkCarnum()) {
					this.showToast('车牌号格式错误')
				} else {
					let infoData = {
						inc_name: this.inc_name,
						phone: this.phone,
						dob: this.dob,
						car_plate_number: this.car_plate_number
					}
					console.log(infoData)
					let url = getApp().globalData.AllUrl + 'info/complete'
					let that = this
					uni.request({
						url: url,
						method: 'POST',
						data: infoData,
						header: {
							Authorization: getApp().globalData.loginToken,
						},
						success: res => {
							console.log(res)
							if (res.data.msg = "请求成功") {
								uni.navigateTo({
									url: '/pages/home/home'
								});
							} else {
								that.showToast('网络出错')
							}
						},
						fail: () => {
							that.showToast('网络出错')
						},
						complete: () => {}
					});
				}

			}
		}
	}
</script>

<style>
	.Per-logo {
		width: 50%;
		height: 85upx;
		background: linear-gradient(to right, #808080, rgba(255, 255, 255, 0));
		position: relative;
	}

	.Per-logo-img {
		height: 50upx;
		width: 310upx;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		left: 16upx;
	}

	.Per-text {
		font-size: 20upx;
		text-align: center;
	}

	.Per-main {
		height: 560upx;
		width: 540upx;
		margin-left: 105upx;
		border-radius: 20upx;
	}

	.Per-item {
		padding-top: 10upx;
		height: 100upx;
		width: 500upx;
		padding-left: 20upx;
		padding-right: 20upx;
		border-left: 4upx solid #d4d4d4;
		border-right: 4upx solid #d4d4d4;
		position: relative;
		z-index: 10;
	}

	.Per-item:first-child {
		border-top: 4upx solid #d4d4d4;
		border-top-left-radius: 20upx;
		border-top-right-radius: 20upx;
	}

	.Per-item:last-child {
		border-bottom: 4upx solid #d4d4d4;
		border-bottom-left-radius: 20upx;
		border-bottom-right-radius: 20upx;
	}

	.Pi-title {
		width: 100%;
		height: 40upx;
		font-size: 25upx;
		line-height: 40upx;
		color: #D4D4D4;
	}

	.Pi-input {
		width: 100%;
		height: 60upx;
		border-bottom: 2upx solid #D4D4D4;
		font-size: 35upx;
		text-align: center;
	}

	.Per-check {
		transform: scale(0.6);
		position: absolute;
		top: 20%;
	}

	.Pc-text {
		font-size: 18upx;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		left: 80upx;
	}

	.Per-sub {
		margin-top: 130upx;
		margin-bottom: 130upx;
		width: 470upx;
		height: 85upx;
		font-size: 40upx;
		line-height: 85upx;
		z-index: 100;
		background-color: #fff;
		color: #1357c7;
		box-shadow: 5upx 5upx 5upx #888888;
	}
</style>
