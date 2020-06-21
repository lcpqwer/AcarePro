<template>
	<view class="all">
		<Back></Back>
		<scroll-view style="width: 100%;height: 100%;" scroll-y="true">
			<image style="width: 100%;" class="top_img" src="/static/img/top/境內機場接送.png" mode="widthFix"></image>
			<view class="Sname">
				境内机场接送
			</view>
			<view class="Main MainTop">
				<view class="Main-title" style="">
					<view class="title-item">
						<view @tap="changPage" :class="page == 0? 'choose':''">接机</view>
					</view>
					<view class="title-item">
						<view @tap="changPage" :class="page == 1? 'choose':''">送机</view>
					</view>
				</view>
				<view v-if="page == 0" class="Main-main">
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
							<picker mode="multiSelector" @change="chooseTime" @columnchange="bindMultiPickerColumnChange" :value="multiIndex"
							 :range="multiArray">
								<view class="item-title" @tap="getData()">服务时间：</view>
								<input @tap="getData()" class="item-text" disabled="true" type="text" :value="UserTime" placeholder="选择时间"
								 placeholder-class="placeholder" />
							</picker>
						</view>
					</view>
					<view class="Info-warpper" style="position: relative;">
						<view class="item2">
							<view class="item-title">航空公司：</view>
							<input class="item-text" @input="changeInfo(2, $event)" type="text" :value="Airlines" placeholder="填写航空公司"
							 placeholder-class="placeholder" />
						</view>
						<view class="item2">
							<view class="item-title" style="text-indent: 10%;">航班号：</view>
							<input class="item-text" @input="changeInfo(3, $event)" style="margin-left: 10%;" type="text" :value="FlightNo"
							 placeholder="填写航班号" placeholder-class="placeholder" />
						</view>
					</view>
					<view class="Info-warpper flex">
						<view class="airport">
							<view class="item-title">接机机场：</view>
							<input class="item-text1" @tap="toSearch" disabled="true" @input="changeInfo(4, $event)" type="text" :value="Airport"
							 placeholder="选择机场" placeholder-class="placeholder" />
						</view>
						<view class="pNum">
							<picker mode="selector" :range="numberList" @change="changeInfo(5, $event)">
								<view class="item-title">接送人数：</view>
								<input class="item-text1" disabled="true" type="number" :value="Pnum" placeholder="选择人数" placeholder-class="placeholder" />
							</picker>

						</view>
					</view>
					<view class="Info-warpper" @tap="chooseAddress">
						<view class="item-title">接送目的地：</view>
						<input class="item-text1" disabled="true" type="text" :value="Address" placeholder="选择地址" placeholder-class="placeholder" />
					</view>
					<view class="Terms">
						<checkbox value="cb" :checked="check" style="transform:scale(0.6);" @click="checkBox" />
						本人同意并接受平台的服务流程及条款《<text style="color: #66a4ff;">境外机场接送服务细则及流程</text>》
					</view>
					<view class="Sub">
						<button class="Sub-btn" @tap="checkAll" type="primary">提交资料</button>
					</view>
					<view class="Desc">
						<image class="Desc-img" src="/static/img/tick.png" mode="aspectFill"></image>
						<view class="Desc-text">
							服务人员按照航班实际抵达时间算起，提供最长90分钟的免费等候接机服务
						</view>
					</view>
					<view class="Desc">
						<image class="Desc-img" src="/static/img/tick.png" mode="aspectFill"></image>
						<view class="Desc-text">
							服务的出发点或目的地，需有一地为指定民航机场（军用机场除外），不可跨城市、国家或地区使用服务
						</view>
					</view>
					<view class="Desc">
						<image class="Desc-img" src="/static/img/tick.png" mode="aspectFill"></image>
						<view class="Desc-text">
							如欲取消或变更行程，需在原约定时间的基础上提前24小时告知，否则视同为用户已使用本次服务
						</view>
					</view>
				</view>
				<view v-else class="Main-main">
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
							<picker mode="multiSelector" @change="chooseTime" @columnchange="bindMultiPickerColumnChange" :value="multiIndex"
							 :range="multiArray">
								<view class="item-title" @tap="getData()">服务时间：</view>
								<input @tap="getData()" class="item-text" disabled="true" type="text" :value="UserTime" placeholder="选择时间"
								 placeholder-class="placeholder" />
							</picker>
							<!-- <picker mode="multiSelector" :range="timeArray" @change="chooseTime" :value="timeIndex">
								<view class="item-title" @tap="getData()">服务时间：</view>
								<input @tap="getData()" class="item-text" disabled="true" type="text" :value="UserTime" placeholder="选择时间"
								 placeholder-class="placeholder" />
							</picker> -->
						</view>
					</view>
					<view class="Info-warpper" style="position: relative;">
						<view class="item2">
							<view class="item-title">航空公司：</view>
							<input class="item-text" @input="changeInfo(2, $event)" type="text" :value="Airlines" placeholder="填写航空公司"
							 placeholder-class="placeholder" />
						</view>
						<view class="item2">
							<view class="item-title" style="text-indent: 10%;">航班号：</view>
							<input class="item-text" @input="changeInfo(3, $event)" style="margin-left: 10%;" type="text" :value="FlightNo"
							 placeholder="填写航班号" placeholder-class="placeholder" />
						</view>
					</view>
					<view class="Info-warpper flex">
						<view class="airport">
							<view class="item-title">送机机场：</view>
							<input class="item-text1" @tap="toSearch" disabled="true" type="text" :value="Airport" placeholder="选择机场"
							 placeholder-class="placeholder" />
						</view>
						<view class="pNum">
							<picker mode="selector" :range="numberList" @change="changeInfo(5, $event)">
								<view class="item-title">接送人数：</view>
								<input class="item-text1" disabled="true" type="number" :value="Pnum" placeholder="选择人数" placeholder-class="placeholder" />
							</picker>
						</view>
					</view>
					<view class="Info-warpper" @tap="chooseAddress">
						<view class="item-title">接送起始地：</view>
						<input class="item-text1" disabled="true" type="text" :value="Address" placeholder="选择地址" placeholder-class="placeholder" />
					</view>
					<view class="Terms">
						<checkbox value="cb" :checked="check" style="transform:scale(0.6);" @click="checkBox" />
						本人同意并接受平台的服务流程及条款《<text style="color: #66a4ff;">境外机场接送服务细则及流程</text>》
					</view>
					<view class="Sub">
						<button class="Sub-btn" @tap="checkAll" type="primary">提交资料</button>
					</view>
					<view class="Desc">
						<image class="Desc-img" src="/static/img/tick.png" mode="aspectFill"></image>
						<view class="Desc-text">
							服务人员按照预约时间起算提供最长 30 分钟的免费等候送机服务
						</view>
					</view>
					<view class="Desc">
						<image class="Desc-img" src="/static/img/tick.png" mode="aspectFill"></image>
						<view class="Desc-text">
							服务的出发点或目的地，需有一地为指定民航机场（军用机场除外），不可跨城市、国家或地区使用服务
						</view>
					</view>
					<view class="Desc">
						<image class="Desc-img" src="/static/img/tick.png" mode="aspectFill"></image>
						<view class="Desc-text">
							如欲取消或变更行程，需在原约定时间的基础上提前 24 小时告知，否则视同为用户已使用本次服务
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
					航空公司：{{Airlines}}
				</view>
				<view class="Info-item flex">
					<view class="Info-item-item">
						航&ensp;班&ensp;号：{{FlightNo}}
					</view>
					<view class="Info-item-item">
						接送人数：{{Pnum}}
					</view>
				</view>
				<view v-if="page == 0">
					<view class="Info-item">
						接机机场：{{Airport}}
					</view>
					<view class="Info-item">
						目&ensp;的&ensp;地：{{Address}}
					</view>
				</view>
				<view v-else>
					<view class="Info-item">
						送机机场：{{Airport}}
					</view>
					<view class="Info-item">
						起&ensp;始&ensp;地：{{Address}}
					</view>
				</view>
				<view class="Sub-warpper">
					<button type="primary" @tap="addOrder" class="Sub-Sub">确认提交资料</button>
				</view>
				<view class="Mask-content">
					<image src="/static/img/tick.png" class="Mask-content-img" mode="aspectFill"></image>
					<view class="Mask-content-text">
						受理成功后，司机会与你联系，如行程无变更，则境外机场接送服务正式生效
					</view>
				</view>
			</view>
		</scroll-view>

	</view>
</template>

<script>
	var contentHeight;
	uni.getSystemInfo({
		success(res) {
			contentHeight = res.screenHeight - 44
		}
	})
	// import {Request} from '@/components/ajax.js'
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
				Airlines: '',
				FlightNo: '',
				Airport: '',
				Pnum: '',
				Address: '',
				// 同意条款
				check: true,
				// 中间弹框
				model: false,
				page: 0,
				// 时间选择
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
				// 人数选择
				numberList: [1, 2, 3, 4, 5, 6],
				// 三天时间选择
				timeArray: [[],[],[]],
				timeIndex: [0,0,0],
				// 两地坐标
				from_latitude: null	,
				from_longitude: null,
				to_latitude: null,
				to_longitude: null,
				// 估价
				price: Object,
				// 起点与终点
				start_name: null,
				end_name: null
			}
		},
		components: {
			pop
		},
		onLoad() {
			this.checkToken()
			this.init()
			for (var i = 0; i < 24; i++) {
				if (i < 10){
					i = '0' + i
				}
				this.timeArray[1].push(String(i))
			}
			for (var i = 0; i < 60; i++) {
				if (i < 10){
					i = '0' + i
				}
				this.timeArray[2].push(String(i))
			}
		},
		onShow() {
			console.log(getApp().globalData.china_airport)
			this.Airport = getApp().globalData.china_airport.name
			
			if (this.page == 0){
				this.from_latitude = getApp().globalData.china_airport.latitude
				this.from_longitude = getApp().globalData.china_airport.longitude
				this.start_name = getApp().globalData.china_airport.name
			}else {
				this.to_latitude = getApp().globalData.china_airport.latitude
				this.to_longitude = getApp().globalData.china_airport.longitude
				this.end_name = getApp().globalData.china_airport.name
			}
		},
		methods: {
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
			changeInfo(index, e) {
				switch (index) {
					case 0:
						this.UserName = e.detail.value
						break;
					case 1:
						this.UserPhone = e.detail.value
						break;
					case 2:
						this.Airlines = e.detail.value
						break;
					case 3:
						this.FlightNo = e.detail.value
						break;
					case 5:
						this.Pnum = this.numberList[e.detail.value]
						break;
					case 6:
						this.Address = e.detail.value
						break;
					default:
						break;
				}
			},
			chooseAddress() {
				let that = this
				uni.chooseLocation({
					success(res) {
						console.log(res)
						that.Address = res.name
						if (that.page == 0){
							that.to_latitude = res.latitude
							that.to_longitude = res.longitude
							that.end_name = res.name
						}else {
							that.from_latitude = res.latitude
							that.from_longitude = res.longitude
							that.start_name = res.name
						}
					}
				})
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
			Prompt(content) {
				uni.showToast({
					title: content,
					duration: 2000,
					icon: 'none'
				})
			},
			checkAll() {
				let that = this
				if (that.UserName == '' || that.UserPhone == '' || that.UserTime == '' || that.Address == '' ||
					that.Airlines == '' || this.Airport == '' || this.FlightNo == '' || this.Pnum == '') {
					that.Prompt('信息填写不完整')
				} else if (!that.checkPhone()) {
					that.Prompt('手机号不正确')
				} else if (!that.check) {
					that.Prompt('请同意服务条款')
				} else {
					let url = getApp().globalData.AllUrl + 'booking/cccheck'
					let info = JSON.stringify({
						from_latitude: parseFloat(that.from_latitude) ,
						from_longitude: parseFloat( that.from_longitude),
						to_latitude: parseFloat(that.to_latitude),
						to_longitude: parseFloat(that.to_longitude)
					})
					console.log(info)
					uni.request({
						url: url,
						method: 'POST',
						data: {
							data_json: info
						},
						header:{
							Authorization: getApp().globalData.loginToken
						},
						success: res => {
							console.log(res)
							if (res.data.data.code == 200){
								// 判断距离
								let dis = res.data.data.data[0].distance/1000
								let tim = res.data.data.data[0].duration/(60*60)
								if (dis > 50){
									that.Prompt('路程超过50公里')
								}else if (tim > 1){
									that.Prompt('时长超过一个小时')
								}else {
									that.price = res.data.data.data[0]
									that.showModel()
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
			showModel() {
				this.model = !this.model
			},
			init() {
				this.UserName = '';
				this.UserPhone = '';
				this.UserTime = '';
				this.Airlines = '';
				this.Airport = '';
				this.Address = '';
				this.FlightNo = '';
				this.Pnum = '';
				this.check = true
				getApp().globalData.china_airport.name = ''
			},
			changPage() {
				this.init()
				this.page == 1 ? this.page = 0 : this.page = 1
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
			chooseTime(e) {
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
				// 三天以内
				// let index = e.detail.value
				// this.UserTime = this.timeArray[0][index[0]] + ' ' + this.timeArray[1][index[1]] + ':' + this.timeArray[1][index[1]]
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
			GetDateStr(AddDayCount) {
				var dd = new Date();
				dd.setDate(dd.getDate() + AddDayCount); //获取AddDayCount天后的日期
				var y = dd.getFullYear();
				var m = dd.getMonth() + 1; //获取当前月份的日期
				var d = dd.getDate();
				return y + "年" + m + "月" + d + "日";
			},
			// 获取时间区间，整理数据
			getData() {
				let that = this
				// 三天之内
				// that.timeArray[0] = [this.GetDateStr(1),this.GetDateStr(2),this.GetDateStr(3)]
				// console.log(that.timeArray)
				let today = new Date()
				let todayList = this.formatDate(new Date(today.getTime() + (60 * 60 * 1000)))
				let lastDay = new Date(today.getTime() + ( 72 * 60 * 60 * 1000))
				let lastDayList = this.formatDate(lastDay)
				that.getMonth(todayList, lastDayList)
				that.getDay(todayList, lastDayList)
				that.getHM(todayList, lastDayList)
				that.getMaxMin(todayList, lastDayList)
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
			},
			addOrder() {
				let url = getApp().globalData.AllUrl + 'booking/airport'
				let that = this
				let infoData = JSON.stringify({
					from_latitude: String(that.from_latitude),
					from_longitude: String(that.from_longitude),
					to_longitude: String(that.to_longitude),
					to_latitude: String(that.to_latitude),
					caller_phone: that.UserPhone,
					flight_no: that.FlightNo,
					start_name: that.start_name,
					end_name: that.end_name,
					departure_time: that.UserTime.replace('年', '-').replace('月', '-').replace('日', '')+':00',
					// 平台需要数据
					UserName: that.UserName,
					Airlines: that.Airlines,
					Pnum: that.Pnum,
					Type: that.page,
					UserTime: that.UserTime
				})
				console.log(infoData)
				uni.request({
					url: url,
					method: 'POST',
					data: {
						data_json: infoData
					},
					header: {
						Authorization: getApp().globalData.loginToken
					},
					success: res => {
						console.log(res)
						that.showModel()
						if (res.data.msg == "预约服务境外机场接送信息提交完成") {
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
						console.log('error')
					},
					complete: () => {}
				});
			},
			toSearch() {
				uni.navigateTo({
					url: '/pages/Search_airport/Search_airport?id=1'
				});
			}
		}
	}
</script>
<style>
	/* 头部样式 */
	.Main-title {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
	}

	.title-item {
		width: 50%;
		height: 100%;
		position: relative;
	}

	.title-item>view {
		height: 100%;
		width: 100upx;
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
	}

	.choose {
		color: #2d7df0;
		border-bottom: #2D7DF0 solid 2upx;
	}

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
</style>
