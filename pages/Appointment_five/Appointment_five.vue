<template>
	<view class="all">
		<Back></Back>
		<scroll-view style="width: 100%;height: 100%;" scroll-y="true">
			<view class="Sname">
			机场附近停车
		</view>
		<view class="Main MainTop">
			<view class="Main-title" style="">
				请提供资料
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
						<view class="item-title">车牌号：</view>
						<input class="item-text" @input="changeInfo(2, $event)" type="text" :value="CarNum" placeholder="填写车牌号" placeholder-class="placeholder"/>
					</view>
				</view>
				<view class="Info-warpper" style="position: relative;">
					<view class="item-title">机场：</view>
					<input class="item-text1" @input="changeInfo(3, $event)" type="text" :value="Airport" placeholder="选择机场" placeholder-class="placeholder"/>
					<image src="/static/img/more.png" class="choose-img" mode="aspectFill"></image>
				</view>
				<view class="Info-warpper">
					<view class="item2">
						<view class="item-title">出发航班号：</view>
						<input class="item-text" @input="changeInfo(4, $event)" type="text" :value="SetoutNum" placeholder="填写出发航班号" placeholder-class="placeholder"/>
					</view>
					<view class="item2">
						<view class="item-title" style="text-indent: 10%;">停车时间：</view>
						<input class="item-text" @input=" (5, $event)" style="margin-left: 10%;" type="text" :value="ParkTime" placeholder="建议起飞前2小时到达" placeholder-class="placeholder"/>
					</view>
				</view>
				<view class="Info-warpper flex">
					<view class="item2">
						<view class="item-title">返程航班号：</view>
						<input class="item-text" @input="changeInfo(6, $event)" type="text" :value="ReturnNum" placeholder="填写返程航班号" placeholder-class="placeholder"/>
					</view>
					<view class="item2">
						<view class="item-title" style="text-indent: 10%;">取车时间：</view>
						<input class="item-text" @input="changeInfo(7, $event)" style="margin-left: 10%;" type="text" :value="TakeTime" placeholder="请估计大约时间" placeholder-class="placeholder"/>
					</view>
				</view>
				<view class="Terms">
					<checkbox value="cb" :checked="check" style="transform:scale(0.6);" @click="checkBox" />
					本人同意并接受平台的服务流程及条款《<text style="color: #66a4ff;">机场附近停车服务细则及流程</text>》
				</view>
				<view class="Sub">
					<button class="Sub-btn" @tap="checkAll" type="primary">提交资料</button>
				</view>
				<view class="Desc">
					<image class="Desc-img" src="/static/img/tick.png" mode="aspectFill"></image>
					<view class="Desc-text">
						客户须提前24小时（节假日须提前 48 小时）预约。取消须提前 6 个小时，否则将视为权益已使用
					</view>
				</view>
				<view class="Desc">
					<image class="Desc-img" src="/static/img/tick.png" mode="aspectFill"></image>
					<view class="Desc-text">
						提供全天候 24 小时服务。客户乘坐停车场定时班次摆渡车前往机场出发层
					</view>
				</view>
				<view class="Desc">
					<image class="Desc-img" src="/static/img/tick.png" mode="aspectFill"></image>
					<view class="Desc-text">
						免费停车 3 天，超出须支付现金 30 元/天。停车时，停车场会有一张凭证给到，做为取车时凭证用
					</view>
				</view>
			</view>
		</view>
		<view v-if="model" class="AppMask" @tap="showModel"></view>
		<view v-if="model" class="Mask-main" style="height: 800upx;">
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
				机场：{{Airport}}
			</view>
			<view class="Info-item">
				出发航班号：{{SetoutNum}}
			</view>
			<view class="Info-item">
				停车时间：{{ParkTime}}
			</view>
			<view class="Info-item">
				返程航班号：{{ReturnNum}}
			</view>
			<view class="Info-item">
				取车时间：{{TakeTime}}
			</view>
			<view class="Sub-warpper">
				<button type="primary" class="Sub-Sub">确认提交资料</button>
			</view>
			<view class="Mask-content">
				<image src="/static/img/tick.png" class="Mask-content-img" mode="aspectFill"></image>
				<view class="Mask-content-text">
					受理成功后，客服将贵宾厅位置、营业时间、服务劵码通过短信发送给客户，如一个站厅有多个贵宾厅，会将所有贵宾厅信息发送给客户供选择
				</view>
			</view>
		</view>
	
		</scroll-view>
		<image style="width: 100%;" class="top_img" src="/static/img/top/机场附近停车.png" mode="widthFix"></image>
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
				MainHeight: 'height:' + (contentHeight*0.8) + 'px;',
				SnameTop: 'bottom:' + (contentHeight*0.8 + 10) + 'px',
				MainTop: 'top:'+(contentHeight*0.2 +20)+'px',
				// 填写信息
				UserName: '',
				UserPhone: '',
				CarNum: '',
				Airport: '',
				SetoutNum: '',
				ParkTime: '',
				ReturnNum: '',
				TakeTime: '',
				// 同意条款
				check: true,
				// 中间弹框
				model: false
			}
		},
		components: {
			pop
		},
		onLoad() {
			this.checkToken()
		},
		methods: {
			changeInfo(index, e){
				switch (index){
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
						this.Airport = e.detail.value
						break;
					case 4:
						this.SetoutNum = e.detail.value
						break;
					case 5:
						this.ParkTime = e.detail.value
						break;
					case 6:
						this.ReturnNum = e.detail.value
						break;
					case 7:
						this.TakeTime = e.detail.value
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
			checkCarnum(){
				var re = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/;
				if(this.CarNum.search(re) == -1) {
					return false;
				} else {
					return true;
				}
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
				if (that.UserName == '' || that.UserPhone == '' || that.CarNum == '' || that.Airport == '' 
				|| that.SetoutNum == '' || that.ParkTime == '' || that.ReturnNum == '' || that.TakeTime == ''){
					that.Prompt('信息填写不完整')
				}else if (!that.checkPhone()){
					that.Prompt('手机号不正确')
				}else if (!that.checkCarnum()){
					that.Prompt('车牌号填写错误')
				}else if (!that.check){
					that.Prompt('请同意服务条款')
				}else {
					that.showModel()
				}
			},
			showModel(){
				this.model = !this.model
			},
			chooseTime(e){
				this.UserTime = e.detail.value
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