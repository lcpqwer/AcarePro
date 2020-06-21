<template>
	<view class="all">
		<Back></Back>
		<scroll-view style="width: 100%;height: 100%;" scroll-y="true">
			<image style="width: 100%;" class="top_img" src="/static/img/top/境內高鐵接送.png" mode="widthFix"></image>
			<view class="Sname">
				境内高铁站接送
			</view>
			<view class="Main MainTop">
				<view class="Main-title" style="">
					<view class="title-item">
						<view @tap="changPage" :class="page == 0? 'choose':''">接高铁</view>
					</view>
					<view class="title-item">
						<view @tap="changPage" :class="page == 1? 'choose':''">送高铁</view>
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
						<view class="item-title">高铁站名称：</view>
						<input class="item-text1" @tap="toSearch" disabled="true" type="text" :value="HSRStation" placeholder="选择高铁站"
						 placeholder-class="placeholder" />
					</view>
					<view class="Info-warpper flex">
						<view class="airport">
							<view class="item-title">车次信息：</view>
							<input class="item-text1" @input="changeInfo(3, $event)" type="text" :value="HSRInfo" placeholder="填写车次"
							 placeholder-class="placeholder" />
						</view>
						<view class="pNum">
							<picker mode="selector" :range="numberList" @change="changeInfo(4, $event)">
								<view class="item-title">接送人数：</view>
								<input class="item-text1" disabled="true" type="text" :value="Pnum" placeholder="选择人数" placeholder-class="placeholder" />
							</picker>

						</view>
					</view>
					<view class="Info-warpper">
						<view class="item-title">接送目的地：</view>
						<input class="item-text1" disabled="true" @tap="chooseAddress" type="text" :value="Address" placeholder="选择地址"
						 placeholder-class="placeholder" />
					</view>
					<view class="Terms">
						<checkbox value="cb" :checked="check" style="transform:scale(0.6);" @click="checkBox" />
						本人同意并接受平台的服务流程及条款《<text style="color: #66a4ff;">境内高铁站接送服务细则及流程</text>》
					</view>
					<view class="Sub">
						<button class="Sub-btn" @tap="checkAll" type="primary">提交资料</button>
					</view>
					<view class="Desc">
						<image class="Desc-img" src="/static/img/tick.png" mode="aspectFill"></image>
						<view class="Desc-text">
							服务人员按照高铁实际抵达时间算起，提供最长 60 分钟的免费等候接高铁服务
						</view>
					</view>
					<view class="Desc">
						<image class="Desc-img" src="/static/img/tick.png" mode="aspectFill"></image>
						<view class="Desc-text">
							提供全天候 24 小时服务，根据高铁/火车车次绝对服务时间，单趟服务不限时间，单程距离限公里以为
						</view>
					</view>
					<view class="Desc">
						<image class="Desc-img" src="/static/img/tick.png" mode="aspectFill"></image>
						<view class="Desc-text">
							如欲取消或变更行程，须在原约定时间的基础上提前 3 小时告知，否则视同为用户已使用本次服务
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
						</view>
					</view>
					<view class="Info-warpper" style="position: relative;">
						<view class="item-title">高铁站名称：</view>
						<input class="item-text1" @tap="toSearch" disabled="true" type="text" :value="HSRStation" placeholder="选择高铁站"
						 placeholder-class="placeholder" />
					</view>
					<view class="Info-warpper flex">
						<view class="airport">
							<view class="item-title">车次信息：</view>
							<input class="item-text1" @input="changeInfo(3, $event)" type="text" :value="HSRInfo" placeholder="填写车次"
							 placeholder-class="placeholder" />
						</view>
						<view class="pNum">
							<picker mode="selector" :range="numberList" @change="changeInfo(4, $event)">
								<view class="item-title">接送人数：</view>
								<input class="item-text1" disabled="true" type="text" :value="Pnum" placeholder="选择人数" placeholder-class="placeholder" />
							</picker>
						</view>
					</view>
					<view class="Info-warpper">
						<view class="item-title">接送起始地：</view>
						<input class="item-text1" @tap="chooseAddress()" disabled="true" type="text" :value="Address" placeholder="选择地址"
						 placeholder-class="placeholder" />
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
							服务人员按照预约时间起算提供最长 30 分钟的免费等候送高铁服务
						</view>
					</view>
					<view class="Desc">
						<image class="Desc-img" src="/static/img/tick.png" mode="aspectFill"></image>
						<view class="Desc-text">
							提供全天候 24 小时服务，根据高铁/火车车次绝对服务时间，单趟服务不限时间，单程距离限公里以为
						</view>
					</view>
					<view class="Desc">
						<image class="Desc-img" src="/static/img/tick.png" mode="aspectFill"></image>
						<view class="Desc-text">
							如欲取消或变更行程，须在原约定时间的基础上提前 3 小时告知，否则视同为用户已使用本次服务
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
					预约时间：{{UserTime}}
				</view>
				<view class="Info-item">
					高铁站名称：{{HSRStation}}
				</view>
				<view class="Info-item">
					车次信息：{{HSRInfo}}
				</view>
				<view class="Info-item">
					接送人数：{{Pnum}}
				</view>
				<view v-if="page == 0">
					<view class="Info-item">
						目&ensp;的&ensp;地：{{Address}}
					</view>
				</view>
				<view v-else>
					<view class="Info-item">
						起&ensp;始&ensp;地：{{Address}}
					</view>
				</view>
				<view class="Sub-warpper">
					<button type="primary" @tap="upOrder()" class="Sub-Sub">确认提交资料</button>
				</view>
				<view class="Mask-content">
					<image src="/static/img/tick.png" class="Mask-content-img" mode="aspectFill"></image>
					<view class="Mask-content-text">
						受理成功后，司机会与你联系，如行程无变更，则境内高铁站接送服务正式生效
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
				HSRStation: '',
				HSRInfo: '',
				Pnum: '',
				Address: '',
				// 同意条款
				check: true,
				// 中间弹框
				model: false,
				page: 0,
				// 日期选择
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
				// 人数
				numberList: [1, 2, 3, 4, 5, 6]
			}
		},
		components: {
			pop
		},
		onLoad() {
			this.checkToken()
		},
		onShow() {
			console.log(getApp().globalData.A_three_ramilway)
			this.HSRStation = getApp().globalData.A_three_ramilway.name
		},
		methods: {
			chooseAddress() {
				let that = this
				uni.chooseLocation({
					success(res) {
						console.log(res)
						that.Address = res.name
					}
				})
			},
			toSearch() {
				uni.navigateTo({
					url: '/pages/Search_railway/Search_railway?id=1'
				});
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
						this.HSRStation = e.detail.value
						break;
					case 3:
						this.HSRInfo = e.detail.value
						break;
					case 4:
						this.Pnum = this.numberList[e.detail.value]
						break;
					case 5:
						this.Address = e.detail.value
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
			Prompt(content) {
				uni.showToast({
					title: content,
					duration: 2000,
					icon: 'none'
				})
			},
			checkAll() {
				let that = this
				if (that.UserName == '' || that.UserPhone == '' || that.UserTime == '' || that.HSRStation == '' ||
					that.HSRInfo == '' || that.Pnum == '' || that.Address == '') {
					that.Prompt('信息填写不完整')
				} else if (!that.checkPhone()) {
					that.Prompt('手机号不正确')
				} else if (!that.check) {
					that.Prompt('请同意服务条款')
				} else {
					that.showModel()
				}
			},
			showModel() {
				this.model = !this.model
			},
			init() {
				this.UserName = '';
				this.UserPhone = '';
				this.UserTime = '';
				this.HSRInfo = '';
				this.HSRStation = '';
				this.Address = '';
				this.Pnum = '';
				this.check = true;
				getApp().globalData.A_three_ramilway.name = ''
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
			// 获取时间区间，整理数据
			getData() {
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
			Prompt1() {
				uni.showToast({
					title: '提交成功',
					duration: 1000,
					mask: true,
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
			upOrder() {
				let that = this
				let url = getApp().globalData.AllUrl + 'booking/hsr'
				let infoData = JSON.stringify({
					UserName: that.UserName,
					UserPhone: that.UserPhone,
					UserTime: that.UserTime,
					HSRStation: that.HSRStation,
					HSRInfo: that.HSRInfo,
					Pnum: that.Pnum,
					Address: that.Address,
					Type: that.page // 0 => HSR pickup   1 => HSR drop-off
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
						if (res.data.msg == "预约服务境内高铁站接送信息提交完成") {
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
		width: 150upx;
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
