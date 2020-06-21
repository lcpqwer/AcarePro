<template>
	<view class="all">
		<Back></Back>
		<scroll-view style="width: 100%;height: 100%;" scroll-y="true">
			<image style="width: 100%;" class="top_img" src="/static/img/top/代駕.png" mode="widthFix"></image>
			<view class="Sname">
				代 驾
			</view>
			<view class="Main MainTop">
				<view class="Main-title">请提供代驾资料</view>
				<view class="Main-main">
					<view class="Info-warpper">
						<view class="item3">
							<view class="item-title">姓名：</view>
							<input class="item-text" @input="changeInfo(0, $event)" type="text" :value="UserName" placeholder="填写姓名"
							 placeholder-class="placeholder" />
						</view>
						<view class="item3">
							<view class="item-title">联系电话：</view>
							<input class="item-text" @input="changeInfo(1, $event)" type="number" maxlength="11" :value="UserPhone"
							 placeholder="填写号码" placeholder-class="placeholder" />
						</view>
						<view class="item3">
							<!-- <picker mode="multiSelector" @change="chooseTime" @columnchange="timeColumnChange" :value="timeIndex"
							 :range="timeArry">
								<view class="item-title" @tap="getData">服务时间：</view>
								<input class="item-text" @tap="getData" disabled="true" type="text" :value="UserTime"
								 placeholder="选择时间" placeholder-class="placeholder" />
							</picker> -->
							<picker mode="multiSelector" @change="chooseTime" @columnchange="bindMultiPickerColumnChange" :value="multiIndex"
							 :range="multiArray">
								<view class="item-title" @tap="getData()">服务时间：</view>
								<input @tap="getData()" class="item-text" disabled="true" type="text" :value="UserTime" placeholder="选择时间"
								 placeholder-class="placeholder" />
							</picker>
						</view>
					</view>
					<view class="Info-warpper" style="position: relative;" @tap="chooseAddress1">
						<view class="item-title">接车地址：</view>
						<view class="item-text1 address" :style="address1 == '选择地址' ? 'color: #c0c0c0' : ''">{{address1}}</view>
						<image src="/static/img/localtion.png" class="item-img" mode="aspectFill"></image>
						<view class="choose-localtion"></view>
					</view>
					<view class="Info-warpper" @tap="chooseAddress2">
						<view class="item-title">代驾目的地：</view>
						<view class="item-text1 address" :style="address2 == '选择地址' ? 'color: #c0c0c0' : ''">{{address2}}</view>
					</view>
					<view class="Info-warpper">
						<view class="item2">
							<view class="item-title">车牌：</view>
							<input class="item-text" @input="changeInfo(2, $event)" type="text" :value="CarNum" placeholder="填写车牌"
							 placeholder-class="placeholder" />
						</view>
						<view class="item2">
							<view class="item-title" style="text-indent: 10%;">车型：</view>
							<input class="item-text" @input="changeInfo(3, $event)" style="margin-left: 10%;" type="text" :value="CarModel"
							 placeholder="填写车型" placeholder-class="placeholder" />
						</view>
					</view>
					<view class="Terms">
						<checkbox value="cb" :checked="check" style="transform:scale(0.6);" @click="checkBox" />
						本人同意并接受平台的服务流程及条款《<text style="color: #66a4ff;">代驾服务细则及流程</text>》
					</view>
					<view class="Sub">
						<button class="Sub-btn" @tap="checkAll" type="primary">提交资料</button>
					</view>
					<view class="Desc">
						<image class="Desc-img" src="/static/img/tick.png" mode="aspectFill"></image>
						<view class="Desc-text">
							服务人员在预约时间到达预约地点后，免费等待30分钟
						</view>
					</view>
					<view class="Desc">
						<image class="Desc-img" src="/static/img/tick.png" mode="aspectFill"></image>
						<view class="Desc-text">
							代驾服务，仅为机构客户本人所驾驶的车辆提供服务
						</view>
					</view>
					<view class="Desc">
						<image class="Desc-img" src="/static/img/tick.png" mode="aspectFill"></image>
						<view class="Desc-text">
							如取消服务，需至少提前20分钟告知，否则将记服务1次
						</view>
					</view>
				</view>
			</view>
			<view v-if="model" class="AppMask" @tap="showModel"></view>
			<view v-if="model" class="Mask-main">
				<view class="Mask-main-hide">
					<image class="Hide-img" src="/static/img/hide.png" mode="aspectFill"></image>
					<view class="Hide-mask" @tap="showModel"></view>
				</view>
				<view class="Mask-title">请核对提供资料</view>
				<view class="Info-item">
					姓&emsp;&emsp;名：{{UserName}}
				</view>
				<view class="Info-item">
					联系电话：{{UserPhone}}
				</view>
				<view class="Info-item">
					服务时间：{{UserTime}}
				</view>
				<view class="Info-item">
					接车地址：{{address1}}
				</view>
				<view class="Info-item">
					目&ensp;的&ensp;地：{{address2}}
				</view>
				<view class="Info-item">
					车&emsp;&emsp;牌：{{CarNum}}
				</view>
				<view class="Info-item">
					车&emsp;&emsp;型：{{CarModel}}
				</view>
				<view class="Sub-warpper">
					<button type="primary" @tap="UpOrder" class="Sub-Sub">确认提交资料</button>
				</view>
				<view class="Mask-content">
					<image src="/static/img/tick.png" class="Mask-content-img" mode="aspectFill"></image>
					<view class="Mask-content-text">
						受理成功之后，如行程无改变，则代驾服务正式生效
					</view>
				</view>
			</view>
		</scroll-view>

	</view>
</template>
<!-- <script src="https://a.amap.com/jsapi_demos/static/demo-center/js/demoutils.js"></script>
<script src="https://webapi.amap.com/maps?v=1.4.12&key=cc7be50a8cb0c58431a606d5d18778dd"></script> -->
<script>
	var contentHeight;
	uni.getSystemInfo({
		success(res) {
			contentHeight = res.screenHeight - 44
		}
	})

	import pop from '@/components/uni-popup/uni-popup.vue';
	import dataTimePicker from '@/components/lanxiujuan-dyDateTime/lanxiujuan-dyDateTime.vue'
	import amapFile from '@/components/amap-wx.js';
	export default {
		data() {
			return {
				allHeight: 'height:' + (contentHeight - 2) + 'px',
				MainHeight: 'height:' + (contentHeight * 0.8) + 'px',
				SnameTop: 'top:' + (contentHeight * 0.2 - 70) + 'px',
				MainTop: 'top:' + (contentHeight * 0.2 + 20) + 'px',
				// 填写信息
				UserName: '',
				UserPhone: '',
				UserTime: '',
				address1: '选择地址',
				address2: '选择地址',
				CarNum: '',
				CarModel: '',
				// 同意条款
				check: true,
				// 中间弹框
				model: false,
				// 时间选择
				timeIndex: [0,0],
				timeArry: [[],[]],
				minuteArry: [[],[],[]],
				// 日期时间选择
				multiIndex: [0, 0, 0, 0, 0],
				multiArray: [
					[],
					[],
					[],
					[],
					[]
				],
				allArray: [
					[],
					[],
					[
						[],
						[],
						[]
					]
				],
				colIndex1: 0,
				colIndex2: 0,
				maxIndex: null,
				minIndex: null,
				indexList: [0, 0],
				// 两点经纬度
				startLa: null,
				startLo: null,
				endLa: null,
				endLo: null,
				gaoKey: 'cc7be50a8cb0c58431a606d5d18778dd',
				dis: null,
			}
		},
		components: {
			pop,
			dataTimePicker
		},
		onLoad() {
			this.checkToken()
			// that.Prompt1()
		},
		methods: {
			getMin(){
				for (let i = 0; i < 60; i++) {
					if (i<10){
						i = '0'+i
					}
					this.minuteArry[1].push(String(i))
				}
			},
			getData(){
				let now = new Date();
				now.setMinutes(now.getMinutes()-30)
				let minute = now.getMinutes()
				let hour = now.getHours()
				now.setMinutes(now.getMinutes()+60)
				let hour1 = now.getHours()
				let minute1 = now.getMinutes()
				for (let i = hour1; i <= 23; i++) {
					if (i<10){
						i = '0'+i
					}
					this.timeArry[0].push(String(i))
				}
				for (let i = 0; i <= hour; i++) {
					if (i<10){
						i = '0'+i
					}
					this.timeArry[0].push(String(i))
				}
				for (let i = minute1; i <= 59; i++) {
					if (i<10){
						i = '0'+i
					}
					this.timeArry[1].push(String(i))
					this.minuteArry[0].push(String(i))
				}
				for (let i = 0; i <= minute; i++) {
					if (i<10){
						i = '0'+i
					}
					this.minuteArry[2].push(String(i))
				}
				console.log(this.timeArry)
				// 带日期
				let that = this
				let today = new Date()
				let todayList = this.formatDate(new Date(today.getTime() + (30 * 60 * 1000)))
				let lastDay = new Date(today.getTime() + (30 * 24 * 60 * 60 * 1000))
				let lastDayList = this.formatDate(lastDay)
				that.getMonth(todayList, lastDayList)
				that.getDay(todayList, lastDayList)
				that.getHM(todayList, lastDayList)
				that.getMaxMin(todayList, lastDayList)
			},
			init() {
				this.UserName = ''
				this.UserPhone = ''
				this.UserTime = ''
				this.address1 = '选择地址'
				this.address2 = '选择地址'
				this.CarNum = ''
				this.CarModel = ''
			},
			changeInfo(index, e) {
				switch (index) {
					case 0:
						this.UserName = e.detail.value
						break;
					case 1:
						this.UserPhone = e.detail.value
						break;
					case 2:
						this.CarNum = e.detail.value
						break;
					case 3:
						this.CarModel = e.detail.value
						break;
					default:
						break;
				}
			},
			checkBox() {
				this.check = !this.check
			},
			checkPhone() {
				if (/^1[3456789]\d{9}$/.test(this.UserPhone)) {
					return true;
				}
				return false
			},
			checkCarnum() {
				var re = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/;
				if (this.CarNum.search(re) == -1) {
					return false;
				} else {
					return true;
				}
			},
			Prompt(content) {
				uni.showToast({
					title: content,
					duration: 2000,
					icon: 'none'
				})
			},
			Prompt1() {
				uni.showToast({
					title: '提交成功',
					duration: 1000,
					icon: 'none',
					success() {
						setTimeout(function() {
							uni.navigateBack({
								delta: 1
							});
						}, 1000)
					}
				})
			},
			Prompt2() {
				uni.showToast({
					title: '登陆异常，请重新登录',
					// duration:1000,
					icon: 'none',
					mask: true,
					success() {
						setTimeout(function() {

							uni.navigateTo({
								url: '/pages/Login/Login'
							});
						}, 1000)
					}
				})
			},
			checkAll() {
				let that = this

				if (that.UserName == '' || that.UserPhone == '' || that.UserTime == '' || that.address1 == '选择地址' ||
					that.address2 == '选择地址' || this.CarNum == '' || this.CarModel == '') {
					that.Prompt('信息填写不完整')
				} else if (!that.checkPhone()) {
					that.Prompt('手机号不正确')
				} else if (!that.checkCarnum()) {
					that.Prompt('车牌号不正确')
				} else if (!that.check) {
					that.Prompt('请同意服务条款')
				} else {
					if (that.dis > 10000) {
						uni.showModal({
							title: '提示',
							content: '这是一个模态弹窗',
							success: function(res) {
								if (res.confirm) {
									that.showModel()
								}
							}
						});
					}
					that.showModel()
				}
			},
			showModel() {
				this.model = !this.model
			},
			changeModel(e) {
				console.log(e.show)
			},
			getInit() {
				let that = this
				let ls1 = [];
				let ls2 = [];
				for (var i = 0; i < 24; i++) {
					let item = i;
					if (i < 10) {
						item = '0' + i
					}
					ls1.push(item + '时')
				}
				for (var i = 0; i < 60; i++) {
					let item = i;
					if (i < 10) {
						item = '0' + i
					}
					ls2.push(item + '分')
				}
				that.allArray[2][1] = [ls1, ls2]
			},
			bindMultiPickerColumnChange(e) {
				let that = this
				let colIndex = e.detail.column
				let val = e.detail.value
				let colMax = that.multiArray.length
				// console.log(e)
				switch (colIndex) {
					case 0:
						that.multiArray[colIndex + 1] = that.allArray[colIndex][val]
						break;
					case 1:
						that.indexList[0] = val
						that.multiArray[colIndex + 1] = that.allArray[colIndex][val]
						break;
					case 2:
						that.indexList[1] = val
						if (that.indexList[0] == 0 && that.indexList[1] == 0) {
							if (that.indexList[2] == 0) {
								that.multiArray[4] = that.allArray[2][0][1]
							}
							that.multiArray[3] = that.allArray[2][0][0]
			
						} else if (that.indexList[0] == 1 && that.indexList[1] == that.maxIndex[0]) {
							if (that.indexList[2] == that.maxIndex[1]) {
								that.multiArray[4] = that.allArray[2][2][1]
							}
							that.multiArray[3] = that.allArray[2][2][0]
						} else {
							that.multiArray[3] = that.allArray[2][1][0]
							that.multiArray[4] = that.allArray[2][1][1]
						}
						break;
					case 3:
						that.indexList[2] = val
						if (that.indexList[0] == 0 && that.indexList[1] == 0 && val == 0) {
							// that.multiArray[3] = that.allArray[2][0][0]
							that.multiArray[4] = that.allArray[2][0][1]
						} else if (that.indexList[0] == 1 && that.indexList[1] == that.maxIndex[0] && val == that.maxIndex[1]) {
							// that.multiArray[3] = that.allArray[2][2][0]
							that.multiArray[4] = that.allArray[2][2][1]
						} else {
							// that.multiArray[3] = that.allArray[2][1][0]
							that.multiArray[4] = that.allArray[2][1][1]
						}
						break;
					default:
						break;
				}
			
			},
			timeColumnChange(e) {
				console.log(e)
				if (e.detail.column == 0){
					switch (e.detail.value){
						case 0:
							this.timeArry[1] = this.minuteArry[0]
							break;
						case 23:
							this.timeArry[1] = this.minuteArry[2]
							break;
						default:
							this.timeArry[1] = this.minuteArry[1]
							break;
					}
				}

			},
			chooseTime(e) {
				console.log(e)
				// let index = e.detail.value
				// this.UserTime = this.timeArry[0][index[0]]+':'+this.timeArry[1][index[1]]
				
				// 日期
				let time = ''
				let ls = this.multiArray
				for (var i = 0; i < e.detail.value.length; i++) {
					let index = e.detail.value[i]
					switch (i) {
						case 3:
							if (parseInt(ls[i][index]) < 10) {
								time = time + ' ' + '0' + parseInt(ls[i][index])
							} else {
								time = time + ' ' + parseInt(ls[i][index])
							}
							break;
						case 4:
							if (parseInt(ls[i][index]) < 10) {
								time = time + ':' + '0' + parseInt(ls[i][index])
							} else {
								time = time + ':' + parseInt(ls[i][index])
							}
							break;
						default:
							time = time + ls[i][index]
							break;
					}
				}
				console.log(time)
				this.UserTime = time
				
				
			},
			// 整理极限值
			getMaxMin(todayList, lastDayList) {
				let that = this
				that.maxIndex = [lastDayList[2] - 1, lastDayList[3]]
			},
			// 整理day信息
			getDay(todayList, lastDayList) {
				let that = this
				let maxDay = new Date(todayList[0], todayList[1], 0).getDate()
				let ls1 = [];
				for (var i = parseInt(todayList[2]); i < maxDay + 1; i++) {
					ls1.push(i + '日')
				}
				that.allArray[1].push(ls1)
				let ls2 = [];
				for (var i = 1; i < lastDayList[2] + 1; i++) {
					ls2.push(i + '日')
				}
				that.allArray[1].push(ls2)
				that.multiArray[2] = that.allArray[1][0]
			},
			// 整理时间信息
			getHM(todayList, lastDayList) {
				let that = this
				let ls3 = []
				for (var i = todayList[3]; i < 24; i++) {
					if (i < 10) {
						ls3.push('0' + i + '时')
					} else {
						ls3.push(i + '时')
					}
				}
				let ls4 = []
				for (var i = todayList[4]; i < 60; i++) {
					if (i < 10) {
						ls4.push('0' + i + '分')
					} else {
						ls4.push(i + '分')
					}
				}
				that.allArray[2][0] = [ls3, ls4]
				let ls5 = []
				for (var i = 0; i <= lastDayList[3]; i++) {
					if (i < 10) {
						ls5.push('0' + i + '时')
					} else {
						ls5.push(i + '时')
					}
				}
				let ls6 = []
				for (var i = 0; i <= lastDayList[4]; i++) {
					if (i < 10) {
						ls6.push('0' + i + '分')
					} else {
						ls6.push(i + '分')
					}
				}
				that.allArray[2][2] = [ls5, ls6]
				that.multiArray[3] = that.allArray[2][0][0]
				that.multiArray[4] = that.allArray[2][0][1]
			},
			// 整理年月信息
			getMonth(todayList, lastDayList) {
				let that = this
				if (lastDayList[0] == todayList[0]) {
					that.multiArray[0] = [lastDayList[0] + '年']
					that.allArray[0] = [
						[todayList[1] + '月', lastDayList[1] + '月']
					]
				} else {
					that.multiArray[0] = [
						[todayList[0] + '年', lastDayList[0] + '年']
					]
					that.allArray[0] = [
						[todayList[1]] + '月', [lastDayList[1] + '月']
					]
				}
				that.multiArray[1] = that.allArray[0][0]
			
			},
			// 格式化时间
			formatDate(now) {
				var year = now.getFullYear();
				var month = now.getMonth() + 1;
				var date = now.getDate();
				var hour = now.getHours();
				var minute = now.getMinutes();
				var second = now.getSeconds();
				return [year, month, date, hour, minute]
			},
			
			chooseAddress1() {
				let that = this
				uni.chooseLocation({
					success(res) {
						console.log(res)
						that.address1 = res.address
						that.startLa = res.latitude
						that.startLo = res.longitude
						if (that.endLa) {
							that.getDis()
						}
					}
				})
			},
			chooseAddress2() {
				let that = this
				uni.chooseLocation({
					success(res) {
						that.address2 = res.address
						that.endLa = res.latitude
						that.endLo = res.longitude
						if (that.startLa) {
							that.getDis()
						}
					}
				})
			},
			getDis() {
				let myAmapFun = new amapFile.AMapWX({
					key: '3dcb6b8d3b392e810c3de2b24de278bd',
					city: '全国'
				});
				let that = this
				myAmapFun.getDrivingRoute(that.drawPolyline(that, that.startLo, that.startLa, that.endLo, that.endLa))
			},
			drawPolyline(self, lo1, la1, lo2, la2) {
				return {
					origin: lo1 + ',' + la1,
					destination: lo2 + ',' + la2,
					success(data) {
						let dis = data.paths[0].distance;
						self.dis = dis
					},
					fail(e) {
						console.log(e)
					},
					complete() {
						// console.log('complate')
					}
				}

			},
			UpOrder() {
				let that = this
				console.log(getApp().globalData.loginToken)
				let infoData = JSON.stringify({
					UserName: that.UserName,
					UserPhone: that.UserPhone,
					UserTime: that.UserTime,
					address1: that.address1,
					address2: that.address2,
					CarNum: that.CarNum,
					CarModel: that.CarModel,
					startLa: that.startLa,
					startLo: that.startLo,
					endLa: that.endLa,
					endLo: that.endLo
				})
				console.log(infoData)
				uni.request({
					url: getApp().globalData.AllUrl + 'booking/drunk_driver',
					method: 'POST',
					header: {
						Authorization: getApp().globalData.loginToken
					},
					data: {
						data_json: infoData
					},
					success: res => {
						console.log(res)
						that.showModel()
						if (res.data.msg == "预约服务代驾信息提交完成") {
							that.init()
							that.Prompt1()
						} else if (res.data.msg == 'Token过期' || res.data.msg == '无效Token' || res.data.msg == 'Token已更改，请重新登录获取') {
							that.init()
							that.Prompt2()
						} else if (res.data.msg == "该服务次数不足") {
							that.Prompt('服务余额不足！')
						} else {
							that.Prompt('提交失败')
						}
					},
					fail: () => {
						that.showModel()
						that.Prompt('网络连接失败')
					},
					complete: () => {}
				});
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
									that.getMin()
									that.getInit()
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
		}
	}
</script>
<style>
	.item-img {
		width: 36upx;
		height: 36upx;
		position: absolute;
		bottom: 10upx;
		right: 10upx;
	}

	.choose-localtion {
		width: 56upx;
		height: 56upx;
		position: absolute;
		bottom: 0;
		right: 0;
	}
</style>
