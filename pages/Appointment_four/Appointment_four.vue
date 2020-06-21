<template>
	<view class="all">
		<Back></Back>
		<scroll-view style="width: 100%;height: 100%;" scroll-y="true" >
			<image style="width: 100%;" class="top_img" src="/static/img/top/貴賓廳.png" mode="widthFix"></image>
			<view class="Sname">
				机场/高铁贵宾厅
			</view>
			<view class="Main MainTop">
				<view class="Main-title" style="">
					<view class="title-item" >
						<view @tap="changPage" :class="page == 0? 'choose':''">机场</view>
					</view>
					<view class="title-item">
						<view @tap="changPage" :class="page == 1? 'choose':''">高铁</view>
					</view>
				</view>
				<view class="Main-main">
					<view class="Info-warpper">
						<view class="item3">
							<view class="item-title">姓名：</view>
							<input class="item-text" @input="changeInfo(0, $event)" type="text" :value="UserName" placeholder="填写姓名" placeholder-class="placeholder"/>
						</view>
						<view class="item3">
							<view class="item-title">联系电话：</view>
							<input class="item-text" @input="changeInfo(1, $event)" type="number" maxlength="11" :value="UserPhone" placeholder="填写号码" placeholder-class="placeholder"/>
						</view>
						<view class="item3">
							<view v-if="page == 0" class="item-title">航班号：</view>
							<view v-else class="item-title">车次：</view>
							<input v-if="page == 0" class="item-text"  type="text" :value="FlightNo" @input="changeInfo(2, $event)" placeholder="填写航班号" placeholder-class="placeholder"/>
							<input v-else class="item-text"  type="text" :value="FlightNo" @input="changeInfo(2, $event)" placeholder="填写车次信息" placeholder-class="placeholder"/>
						</view>
					</view>
					<view class="Info-warpper" style="position: relative;">
						<view class="item-title">客票号：</view>
						<input class="item-text1" @input="changeInfo(3, $event)" type="text" :value="TicketNo" placeholder="填写客票号" placeholder-class="placeholder"/>
					</view>
					<view v-if="page == 0" class="Info-warpper" style="position: relative;">
						<view  class="item-title">机场：</view>
						<input class="item-text1" disabled="true" type="text" @tap="searchAir" :value="Station" placeholder="选择机场" placeholder-class="placeholder"/>
						<image src="/static/img/more.png" class="choose-img" mode="aspectFill"></image>
					</view>
					<view v-else class="Info-warpper" style="position: relative;">
						<view class="item-title">高铁站：</view>
						<input class="item-text1" disabled="true" type="text" @tap="searchRail" :value="Station" placeholder="选择高铁" placeholder-class="placeholder"/>
						<image src="/static/img/more.png" class="choose-img" mode="aspectFill"></image>
					</view>
					<view class="Info-warpper flex">
						<view class="airport" style="position: relative;">
							<view class="item-title">贵宾厅：</view>
							<input class="item-text1" type="text" @input="changeInfo(5, $event)" :value="VIPRoom" placeholder="选择贵宾厅" placeholder-class="placeholder"/>
							<image src="/static/img/more.png" class="choose-img" mode="aspectFill"></image>
						</view>
						<view class="pNum">
							<picker mode="multiSelector" @change="chooseTime" @columnchange="bindMultiPickerColumnChange" :value="multiIndex"
							 :range="multiArray">
								<view class="item-title" @tap="getData()">预约时间：</view>
								<input class="item-text1" @tap="getData()" disabled="true" type="text" :value="UserTime" placeholder="选择时间" placeholder-class="placeholder"/>
							</picker>
						</view>
					</view>
					<view class="Terms">
						<checkbox value="cb" :checked="check" style="transform:scale(0.6);" @click="checkBox" />
						本人同意并接受平台的服务流程及条款《<text style="color: #66a4ff;">机场/高铁贵宾厅细则及流程</text>》
					</view>
					<view class="Sub">
						<button class="Sub-btn" @tap="checkAll" type="primary">提交资料</button>
					</view>
					<view class="Desc">
						<image class="Desc-img" src="/static/img/tick.png" mode="aspectFill"></image>
						<view class="Desc-text">
							全天 24 小时可预约服务，贵宾厅营业时间详见文件“<text style="color: #66a4ff;">机场贵宾厅服务范围</text>”
						</view>
					</view>
					<view class="Desc">
						<image class="Desc-img" src="/static/img/tick.png" mode="aspectFill"></image>
						<view class="Desc-text">
							提供全天候 24 小时服务，根据机场/火车班次绝对服务时间，单趟服务不限时间，单程距离限公里以为
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
					航班号：{{FlightNo}}
				</view>
				<view class="Info-item">
					客票号：{{TicketNo}}
				</view>
				<view class="Info-item">
					机场/高铁站：{{Station}}
				</view>
				<view class="Info-item">
					贵宾厅：{{VIPRoom}}
				</view>
				<view class="Info-item">
					预约时间：{{UserTime}}
				</view>
				<view class="Sub-warpper">
					<button type="primary" @tap="upOrder()" class="Sub-Sub">确认提交资料</button>
				</view>
				<view class="Mask-content">
					<image src="/static/img/tick.png" class="Mask-content-img" mode="aspectFill"></image>
					<view class="Mask-content-text">
						受理成功后，客服将贵宾厅位置、营业时间、服务劵码通过短信发送给客户，如一个站厅有多个贵宾厅，会将所有贵宾厅信息发送给客户供选择
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
			contentHeight = res.screenHeight-44
	    }
	})
	
	import pop from '@/components/uni-popup/uni-popup.vue';
	export default {
		data() {
			return {
				allHeight: 'height:' + contentHeight + 'px',
				MainHeight: 'height:' + (contentHeight*0.8) + 'px',
				SnameTop: 'top:' + (contentHeight*0.2 - 70) + 'px',
				// 填写信息
				UserName: '',
				UserPhone: '',
				UserTime: '',
				Station: '',
				TicketNo: '',
				VIPRoom: '',
				FlightNo: '',
				// 同意条款
				check: true,
				// 中间弹框
				model: false,
				// 机场 or 高铁
				page: 0,
				// 选择日期
				multiIndex:[0,0,0,0,0],
				multiArray: [[],[],[],[],[]],
				allArray: [[],[],[[],[],[]]],
				colIndex1: 0,
				colIndex2: 0,
				maxIndex:null,
				minIndex:null,
				indexList: [0,0],
			}
		},
		components: {
			pop
		},
		onLoad() {
			this.checkToken()
		},
		onShow() {
			this.Station = getApp().globalData.A_four_station.name
			console.log(getApp().globalData.A_four_station)
		},
		methods: {
			searchAir(){
				uni.navigateTo({
					url: '/pages/Search_airport/Search_airport?id=2'
				});
			},
			searchRail(){
				uni.navigateTo({
					url: '/pages/Search_railway/Search_railway?id=2'
				});
			},
			init(){
				this.UserName = '';
				this.UserPhone = '';
				this.UserTime = '';
				this.Station = '';
				this.TicketNo = '';
				this.VIPRoom = '';
				this.FlightNo = '';
				getApp().globalData.A_four_station.name = ''
			},
			getInit(){
				let that = this
				let ls1 = [];
				let ls2 = [];
				for (var i = 0; i < 24; i++) {
					let item = i;
					if (i<10){
						item = '0'+i
					}
					ls1.push(item+'时')
				}
				for (var i = 0; i < 60; i++) {
					let item = i;
					if (i<10){
						item = '0'+i
					}
					ls2.push(item+'分')
				}
				that.allArray[2][1] = [ls1,ls2]	
				// console.log(that.allArray)
			},
			bindMultiPickerColumnChange(e){
				let that = this
				let colIndex = e.detail.column
				let val = e.detail.value
				let colMax = that.multiArray.length
				// console.log(e)
				switch (colIndex){
					case 0:
						that.multiArray[colIndex+1] = that.allArray[colIndex][val]
						break;
					case 1:
						that.indexList[0] = val
						that.multiArray[colIndex+1] = that.allArray[colIndex][val]
						break;
					case 2:
						that.indexList[1] = val
						if (that.indexList[0] == 0 && that.indexList[1] == 0){
							if (that.indexList[2] == 0){
								that.multiArray[4] = that.allArray[2][0][1]
							}
							that.multiArray[3] = that.allArray[2][0][0]
							
						}else if (that.indexList[0] == 1 && that.indexList[1] == that.maxIndex[0]){
							if (that.indexList[2] == that.maxIndex[1]){that.multiArray[4] = that.allArray[2][2][1]}
							that.multiArray[3] = that.allArray[2][2][0]
						}else {
							that.multiArray[3] = that.allArray[2][1][0]
							that.multiArray[4] = that.allArray[2][1][1]
						}
						break;
					case 3:
						that.indexList[2] = val
						if (that.indexList[0] == 0 && that.indexList[1] == 0 && val == 0){
							// that.multiArray[3] = that.allArray[2][0][0]
							that.multiArray[4] = that.allArray[2][0][1]
						}else if (that.indexList[0] == 1 && that.indexList[1] == that.maxIndex[0] && val == that.maxIndex[1]){
							// that.multiArray[3] = that.allArray[2][2][0]
							that.multiArray[4] = that.allArray[2][2][1]
						}else {
							// that.multiArray[3] = that.allArray[2][1][0]
							that.multiArray[4] = that.allArray[2][1][1]
						}
						break;
					default:
						break;
				}
				
			},
			chooseTime(e){
				let time = ''
				let ls = this.multiArray
				for (var i = 0; i < e.detail.value.length; i++) {
					let index = e.detail.value[i]
					switch (i){
						case 3:
							if (parseInt(ls[i][index]) < 10){
								time = time + ' ' + '0'+parseInt(ls[i][index])
							}else {
								time = time + ' ' + parseInt(ls[i][index])
							}
							break;
						case 4:
							if (parseInt(ls[i][index]) < 10){
								time = time + ':' + '0'+parseInt(ls[i][index])
							}else {
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
			     var year=now.getFullYear(); 
			     var month=now.getMonth()+1; 
			     var date=now.getDate(); 
			     var hour=now.getHours(); 
			     var minute=now.getMinutes(); 
			     var second=now.getSeconds(); 
			     return [year,month,date,hour,minute]
			},
			// 整理极限值
			getMaxMin(todayList,lastDayList){
				let that = this
				that.maxIndex = [lastDayList[2]-1,lastDayList[3]]
			},
			// 整理day信息
			getDay(todayList,lastDayList){
				let that = this
				let maxDay = new Date(todayList[0],todayList[1],0).getDate()
				let ls1= [];
				for (var i = parseInt(todayList[2]); i < maxDay+1; i++) {
					ls1.push(i+'日')
				}
				that.allArray[1].push(ls1)
				let ls2= [];
				for (var i = 1; i < lastDayList[2]+1; i++) {
					ls2.push(i+'日')
				}
				that.allArray[1].push(ls2)
				that.multiArray[2] = that.allArray[1][0]
			},
			// 整理时间信息
			getHM(todayList,lastDayList){
				let that = this
				let ls3 = []
				for (var i = todayList[3]; i < 24; i++) {
					if (i<10){
						ls3.push('0'+i+'时')
					}else {
						ls3.push(i+'时')
					}
				}
				let ls4 = []
				for (var i = todayList[4]; i < 60; i++) {
					if (i<10){
						ls4.push('0'+i+'分')
					}else {
						ls4.push(i+'分')
					}
				}
				that.allArray[2][0] = [ls3,ls4]
				let ls5 = []
				for (var i = 0; i <= lastDayList[3]; i++) {
					if (i<10){
						ls5.push('0'+i+'时')
					}else {
						ls5.push(i+'时')
					}
				}
				let ls6 = []
				for (var i = 0; i <= lastDayList[4]; i++) {
					if (i<10){
						ls6.push('0'+i+'分')
					}else {
						ls6.push(i+'分')
					}
				}
				that.allArray[2][2] = [ls5,ls6]
				that.multiArray[3] = that.allArray[2][0][0]
				that.multiArray[4] = that.allArray[2][0][1]
			},
			// 整理年月信息
			getMonth(todayList,lastDayList){
				let that = this
				if(lastDayList[0] == todayList[0]){
					that.multiArray[0] = [lastDayList[0]+'年']
					that.allArray[0] = [[todayList[1]+'月',lastDayList[1]+'月']]
				}else {
					that.multiArray[0] = [[todayList[0]+'年',lastDayList[0]+'年']]
					that.allArray[0] = [[todayList[1]]+'月',[lastDayList[1]+'月']]
				}
				that.multiArray[1] = that.allArray[0][0]
				
			},
			// 获取时间区间，整理数据
			getData(){
				let that = this
				let today = new Date()
				let todayList = this.formatDate(new Date(today.getTime()+(30*60*1000)))
				let lastDay = new Date(today.getTime()+(30*24*60*60*1000))
				let lastDayList = this.formatDate(lastDay)
				that.getMonth(todayList,lastDayList)
				that.getDay(todayList,lastDayList)
				that.getHM(todayList,lastDayList)
				that.getMaxMin(todayList,lastDayList)
			},
			changPage(){
				this.init()
				this.page == 1? this.page = 0: this.page = 1
			},
			changeInfo(index, e){
				switch (index){
					case 0:
						this.UserName = e.detail.value
						break;
					case 1:
						this.UserPhone = e.detail.value
						break;
					case 2:
						this.FlightNo = e.detail.value
						break;
					case 3:
						this.TicketNo = e.detail.value
						break;
					case 4:
						this.Station = e.detail.value
						break;
					case 5:
						this.VIPRoom = e.detail.value
						break;
					default:
						break;
				}
			},
			checkBox(){
				this.check = !this.check
			},
			checkPhone(){
				if(/^1[3456789]\d{9}$/.test(this.UserPhone)){ 
					return true; 
				} 
				return false
			},
			Prompt(content){
				uni.showToast({
					title:content,
					duration:2000,
					icon:'none'
				})
			},
			checkAll(){
				let that = this
				if (that.UserName == '' || that.UserPhone == '' || that.UserTime == '' || that.Station == '' 
				|| that.TicketNo == '' || that.FlightNo == '' || that.VIPRoom == ''){
					that.Prompt('信息填写不完整')
				}else if (!that.checkPhone()){
					that.Prompt('手机号不正确')
				}else if (!that.check){
					that.Prompt('请同意服务条款')
				}else {
					that.showModel()
				}
			},
			showModel(){
				this.model = !this.model
			},
			// chooseTime(e){
			// 	this.UserTime = e.detail.value
			// },
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
			upOrder(){
				let that = this
				let url = getApp().globalData.AllUrl + 'booking/airportvip'
				let infoData = JSON.stringify({
					UserName: that.UserName,
					UserPhone: that.UserPhone,
					UserTime: that.UserTime,
					Station: that.Station,
					TicketNo: that.TicketNo,
					VIPRoom: that.VIPRoom,
					FlightNo: that.FlightNo,
					Type: that.page // 0 => airport 1 => HSR
				})
				console.log(infoData)
				uni.request({
					url: url,
					method: 'POST',
					data: {
						data_json: infoData
					},
					header:{
						Authorization: getApp().globalData.loginToken
					},
					success: res => {
						console.log(res)
						that.showModel()
						if (res.data.msg == "预约服务机场/高铁贵宾厅信息提交完成"){
							that.init()
							that.Prompt1()
						}else if (res.data.msg == 'Token过期' || res.data.msg == '无效Token' || res.data.msg == 'Token已更改，请重新登录获取'){
							that.init()
							that.Prompt2()
						}else if (res.data.msg == "该服务次数不足"){
							that.Prompt('服务余额不足！')
						}else{
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
	.Main-title {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
	}
	.title-item {
		width: 50%;height: 100%;position: relative;
	}
	.title-item>view{
		height: 100%;width: 100upx;position: absolute;left: 50%;transform: translateX(-50%);
	}
	.choose {
		color: #2d7df0;border-bottom: #2D7DF0 solid 2upx;
	}
	/* 机场和人数 */
	.airport {
		width: 360upx;height: 100%;
	}
	.pNum {
		width: 240upx;height: 100%;margin-left: 50upx;
	}
	.flex {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
	}
</style>