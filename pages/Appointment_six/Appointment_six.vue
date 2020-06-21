<template>
	<view class="all">
		<Back></Back>
		<scroll-view style="width: 100%;height: 100%;" scroll-y="true">
			<image style="width: 100%;" class="top_img" src="/static/img/top/待辦年檢.png" mode="widthFix"></image>
			<view class="Sname">
				代办年检
			</view>
			<view class="Main MainTop">
				<view class="Main-title" style="">
					请提供资料
				</view>
				<view class="Main-main">
					<!-- <view class="Info-warpper">
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
							<picker mode="multiSelector" :range="dateArray" :value="dateIndex" @change="changeUserTime" @columnchange="changeMonth">
								<view class="item-title" @tap="dateInit">预约时间：</view>
								<input class="item-text" style="font-size: 25upx;" @tap="dateInit" disabled="true" type="text" :value="UserTime" placeholder="周一至周六早上9点至17点"
								 placeholder-class="placeholder" />
							</picker>
							
						</view>
					</view>
					<view class="Info-warpper" style="position: relative;" @tap="chooseTakeAddress">
						<view class="item-title">取车地址：</view>
						<input class="item-text1" disabled="true" type="text" :value="TakeAddress" placeholder="填写取车地址"
						 placeholder-class="placeholder" />
					</view>
					<view class="Info-warpper">
						<view class="item-title">还车地址：</view>
						<input class="item-text1" disabled="true" @tap="chooseAlsoAddress"  type="text" :value="AlsoAddress" placeholder="填写还车地址"
						 placeholder-class="placeholder" />
					</view>
					<view class="Info-warpper flex">
						<view class="item2">
							<view class="item-title">车牌号：</view>
							<input class="item-text" @input="changeInfo(5, $event)" type="text" :value="CarNum" placeholder="填写车牌号"
							 placeholder-class="placeholder" />
						</view>
						<view class="item2">
							<view class="item-title" style="text-indent: 10%;">发动机号：</view>
							<input class="item-text" @input="changeInfo(6, $event)" style="margin-left: 10%;" type="text" :value="EngineNo"
							 placeholder="填写发动机号" placeholder-class="placeholder" />
						</view>
					</view>
					<view class="Info-warpper flex">
						<view class="item2">
							<view class="item-title">车架号：</view>
							<input class="item-text" @input="changeInfo(7, $event)" maxlength="6" type="text" :value="IdentifyNo" placeholder="填写车架号后六位"
							 placeholder-class="placeholder" />
						</view>
						<view class="item2">
							<picker mode="selector" :range="yearArray" @change="changeYear">
								<view class="item-title" style="text-indent: 10%;">车辆年限：</view>
								<input class="item-text" disabled="true" style="margin-left: 10%;" type="text" :value="CarYears"
								 placeholder="请选择年限" placeholder-class="placeholder" />
							</picker>
						</view>
					</view> -->
					<!--  -->
					<picker mode="selector" :range="yArray" @change="changeYear">
						<input class="year" :value="CarYears" type="text" placeholder="点击选择年限">
					</picker>
					<view class="liuceng">
						<!--  -->
						<view class="lc-item">
							<view class="lc-left">1</view>
							<view class="lc-right">在本平台下單</view>
						</view>
						<view class="lc-item">
							<view class="lc-left">2</view>
							<view class="lc-right">成功後立即獲取券碼</view>
						</view>
						<view class="lc-item">
							<view class="lc-left">3</view>
							<view class="lc-right">40088801768全国服务热线，把权益客户手机或者券码号报给客服，验证后预约服务</view>
						</view>
					</view>
					<view class="Terms">
						<checkbox value="cb" :checked="check" style="transform:scale(0.6);" @click="checkBox" />
						本人同意并接受平台的服务流程及条款《<text style="color: #66a4ff;">待办年检服务细则及流程</text>》
					</view>
					<view class="Sub">
						<!-- <button class="Sub-btn" @tap="checkAll" type="primary">提交资料</button> -->
						<button class="Sub-btn" style="background-color: #ec522e;" @tap="upyear" type="primary">获取劵码</button>
					</view>
					<view class="Desc">
						<image class="Desc-img" src="/static/img/tick.png" mode="aspectFill"></image>
						<view class="Desc-text">
							客户仅需线上提供行驶证及有效期保单，扫描或拍摄清晰地照片，我司即可受理线上年检
						</view>
					</view>
					<view class="Desc">
						<image class="Desc-img" src="/static/img/tick.png" mode="aspectFill"></image>
						<view class="Desc-text">
							待年检完成后，会将“机动车检验合格标志”，由车管所邮政寄出，至客户指定地点，服务即视为完成
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
				<img :src="qc" class="OI-img" alt="">
				<view class="toast">
					你已預約完成.你的卷碼是:
				</view>
				<view class="code">
					{{orderCode}}
				</view>
				<view class="toast">
					請憑卷立即致電:40088801768
				</view>
			</view>
			<!-- <view v-if="model" class="Mask-main" style="height: 850upx;">
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
					车牌号：{{CarNum}}
				</view>
				<view class="Info-item">
					取车地址：{{TakeAddress}}
				</view>
				<view class="Info-item">
					还车地址：{{AlsoAddress}}
				</view>
				<view class="Info-item">
					预约时间：{{UserTime}}
				</view>
				<view class="Info-item">
					发动机号：{{EngineNo}}
				</view>
				<view class="Info-item">
					车辆识别号：{{IdentifyNo}}
				</view>
				<view class="Info-item">
					车辆年限：{{CarYears}}
				</view>
				<view class="Sub-warpper">
					<button type="primary" @tap="UpOrder()" class="Sub-Sub">确认提交资料</button>
				</view>
				<view class="Mask-content">
					<image src="/static/img/tick.png" class="Mask-content-img" mode="aspectFill"></image>
					<view class="Mask-content-text">
						受理成功后，客服将贵宾厅位置、营业时间、服务劵码通过短信发送给客户，如一个站厅有多个贵宾厅，会将所有贵宾厅信息发送给客户供选择
					</view>
				</view>
			</view> -->
		</scroll-view>

	</view>
</template>

<script>
	import QR from '../../static/js/wxqrcode.js'
	var contentHeight;
	uni.getSystemInfo({
		success(res) {
			contentHeight = res.screenHeight - 44
		}
	})

	import pop from '@/components/uni-popup/uni-popup.vue';
	export default {
		data() {
			return {
				allHeight: 'height:' + contentHeight + 'px',
				MainHeight: 'height:' + (contentHeight * 0.8) + 'px',
				SnameTop: 'top:' + (contentHeight * 0.2 - 70) + 'px',
				// 填写信息
				UserName: '',
				UserPhone: '',
				UserTime: '',
				TakeAddress: '',
				AlsoAddress: '',
				CarNum: '',
				EngineNo: '',
				IdentifyNo: '',
				CarYears: '',
				// 同意条款
				check: true,
				// 中间弹框
				model: false,
				// 预约时间需要的数据
				dateArray: [[],[],[]],
				dateIndex:[0,0,0],
				thisDate: [],
				nextDate: [],
				yearArray: ['1年','2年','3年','4年','5年','6年','7年','8年','9年','10年'],
				// 只选择年限
				yArray: ['六年以下（含六年）','六年以上'],
				yIndex: '',
				qc: '',
				orderCode: ''
			}
		},
		components: {
			pop
		},
		onLoad() {
			this.checkToken()
		},
		methods: {
			init(){
				this.UserName = ''
				this.UserPhone = ''
				this.UserTime = ''
				this.TakeAddress = ''
				this.AlsoAddress = ''
				this.CarNum = ''
				this.EngineNo = ''
				this.IdentifyNo = ''
				this.CarYears = ''
			},
			changeYear(e){
				console.log(e)
				// this.CarYears = this.yearArray[e.detail.value]
				this.CarYears = this.yArray[e.detail.value]
				this.yIndex = e.detail.value
			},
			formatDate(now) {
			     var year=now.getFullYear(); 
			     var month=now.getMonth()+1; 
			     var date=now.getDate();  
			     return {year:year,month:month,date:date}
			},
			dateInit(){
				console.log(1)
				this.dateArray = [[],[],[]]
				let that = this
				let today = new Date()
				let todayObj = this.formatDate(new Date(today.getTime()+(3*24*60*60*1000)))
				let lastDay = new Date(today.getTime()+(30*24*60*60*1000))
				let lastDayObj = this.formatDate(lastDay)
				// console.log(todayObj,lastDayObj)
				// 判断是否为同一年的日期
				if (todayObj.year == lastDayObj.year){
					that.dateArray[0] = [todayObj.year+'年']
				}else {
					that.dateArray[0] = [todayObj.year+'年',lastDayObj.year+'年']
				}
				// 判断是否同一月份
				if (todayObj.month == lastDayObj.month){
					that.dateArray[1] = [todayObj.month+'月']
					that.thisDate = []
					// 同一月份获取天数
					let max = lastDayObj.date
					let min = todayObj.date
					for (let i = min; i <= max; i++) {
						let date;
						if (i<10){
							date = '0' + i + '日'
						}else {
							date = i + '日'
						}
						that.thisDate.push(date)
						that.dateArray[2].push(date)
					}
				}else {
					that.thisDate = [];that.nextDate = []
					that.dateArray[1] = [todayObj.month+'月',lastDayObj.month+'月']
					// 本月最大date
					let max = new Date(todayObj.year,todayObj.month,0).getDate()
					for (let i = todayObj.date; i <= max; i++){
						let date;
						if (i<10){
							date = '0' + i + '日'
						}else {
							date = i + '日'
						}
						that.thisDate.push(date)
						that.dateArray[2].push(date)
					}
					// nextDate
					for (let i = 1; i <= lastDayObj.date; i++) {
						let date;
						if (i<10){
							date = '0' + i + '日'
						}else {
							date = i + '日'
						}
						that.nextDate.push(date)
					}
					
				}
				console.log(that.dateArray)
			},
			changeMonth(e){
				// console.log(e)
				let that = this
				let cloumn = e.detail.column
				switch (cloumn){
					case 1:
						console.log(e)
						let value = e.detail.value
						switch (value){
							case 0:
								that.dateArray[2] = that.thisDate
								break
							default:
								that.dateArray[2] = that.nextDate
								break
						}
						break;
					default:
						break;
				}
			},
			changeUserTime(e){
				this.UserTime = this.dateArray[0][e.detail.value[0]]+this.dateArray[1][e.detail.value[1]]+this.dateArray[2][e.detail.value[2]]
			},
			chooseTakeAddress(){
				console.log('选择取车地址')
				let that = this
				uni.chooseLocation({
					success:res => {
						console.log(res)
						that.TakeAddress = res.name
					}
				})
			},
			chooseAlsoAddress(){
				console.log('选择取车地址')
				let that = this
				uni.chooseLocation({
					success:res => {
						console.log(res)
						that.AlsoAddress = res.name
					}
				})
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
						this.UserTime = e.detail.value
						break;
					case 3:
						this.TakeAddress = e.detail.value
						break;
					case 4:
						this.AlsoAddress = e.detail.value
						break;
					case 5:
						this.CarNum = e.detail.value
						break;
					case 6:
						this.EngineNo = e.detail.value
						break;
					case 7:
						this.IdentifyNo = e.detail.value
						break;
					case 8:
						this.CarYears = e.detail.value
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
			checkAll() {
				let that = this
				if (that.UserName == '' || that.UserPhone == '' || that.UserTime == '' || that.TakeAddress == '' ||
					that.AlsoAddress == '' || that.CarNum == '' || that.EngineNo == '' || that.IdentifyNo == '' ||
					that.CarYears == '') {
					that.Prompt('信息填写不完整')
				} else if (!that.checkPhone()) {
					that.Prompt('手机号不正确')
				} else if (!that.checkCarnum()) {
					that.Prompt('车牌号不正确')
				} else if (!that.check) {
					that.Prompt('请同意服务条款')
				} else {
					that.showModel()
				}
			},
			showModel() {
				this.model = !this.model
			},
			chooseTime(e) {
				this.UserTime = e.detail.value
			},
			upyear(){
				let that = this
				if (this.CarYears == ''){
					this.Prompt('请选择车辆年限')
				}else {
					console.log(String(this.yIndex))
					uni.request({
						url: getApp().globalData.AllUrl + 'booking/annualInspect',
						method: 'POST',
						header: {
							Authorization: getApp().globalData.loginToken
						},
						data: {
							data: String(this.yIndex)
						},
						success: res => {
							console.log(res)
							if (res.data.msg == '年检服务提交完成'){
								let img = QR.createQrCodeImg(res.data.data.orderEncrypt, {
									// size: parseInt(100) //二维码大小  
								})
								that.qc = img
							}
							that.orderCode = res.data.data.orderCode
							that.showModel()
							// if (res.data.msg == "预约服务待办年检信息提交完成") {
							// 	that.init()
							// 	that.Prompt1()
							// } else if (res.data.msg == 'Token过期' || res.data.msg == '无效Token' || res.data.msg == 'Token已更改，请重新登录获取') {
							// 	that.init()
							// 	that.Prompt2()
							// } else if (res.data.msg == "该服务次数不足") {
							// 	that.Prompt('服务余额不足！')
							// } else {
							// 	that.Prompt('提交失败')
							// }
						},
						fail: () => {
							// that.showModel()
							that.Prompt('网络连接失败')
						},
						complete: () => {}
					});
				}
				
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
			Prompt1(){
				uni.showToast({
					title:'提交成功',
					duration:1000,
					mask: true,
					icon:'none',
					success() {
						setTimeout(function(){
							uni.navigateBack({
								delta: 1
							});
						},1000)
					}
				})
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
			UpOrder() {
				let that = this
				console.log(getApp().globalData.loginToken)
				let infoData = JSON.stringify({
					UserName: this.UserName,
					UserPhone: this.UserPhone,
					UserTime: this.UserTime,
					TakeAddress: this.TakeAddress,
					AlsoAddress: this.AlsoAddress,
					CarNum: this.CarNum,
					EngineNo: this.EngineNo,
					IdentifyNo: this.IdentifyNo,
					CarYears: this.CarYears,
				})
				console.log(infoData)
				uni.request({
					url: getApp().globalData.AllUrl + 'booking/annualInspect',
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
						if (res.data.msg == "预约服务待办年检信息提交完成") {
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
		}
	}
</script>
<style>
	/* 机场和人数 */
	.airport {
		width: 360upx;
		height: 100%;
	}

	.pNum {
		width: 240upx;
		height: 100%;
		margin-left: 50upx;
	}

	.flex {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
	}
	.year {
		height: 70upx;
		width: 80%;
		margin-left: 10%;
		border-radius: 20upx;
		border: 1px solid #c0c0c0;
		text-align: center;
	}
	.lc-item {
		width: 80%;
		margin-left: 10%;
		height: 160upx;
		position: relative;
	}
	.lc-left {
		height: 60upx;
		width: 60upx;
		border-radius: 50%;
		border: 3px solid #000000;
		line-height: 60upx;
		text-align: center;
		font-size: 30upx;
		font-weight: 600;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
	}
	.lc-right {
		width: 420upx;
		position: absolute;
		right: 0;
		top: 50%;
		transform: translateY(-50%);
		height: auto;  
		word-wrap:break-word;  
		word-break:break-all;  
		overflow: hidden;
		font-size: 30upx;
		text-align: center;
	}
	.OI-img {
		width: 340upx;
		margin-left: 50%;
		transform: translateX(-50%);
	}
	.toast {
		width: 100%;
		text-align: center;
		font-size: 30upx;
		margin: 40upx 0;
	}
	.code {
		font-size: 50upx;
		width: 100%;
		text-align: center;
	}
</style>
