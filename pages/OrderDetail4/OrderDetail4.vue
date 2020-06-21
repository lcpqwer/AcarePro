<template>
	<view class="all" :style="allHeight">
		<Back></Back>
		<scroll-view style="width: 100%;height: 100%;" scroll-y="true" >
			<image style="width: 100%;" src="/static/img/top/代駕.png" mode="widthFix"></image>
		<view class="Sname">
			我的订单
		</view>
		<view class="Main MainTop">
			<view class="Main-title">订单编号：{{OrderItem.order_number}}</view>
			<view class="Main-main">
				<!-- <view>{{sta}}</view>
				<view>{{del}}</view>
				<view>{{time1}}</view>
				<view>{{time2}}</view> -->
				<view class="Order-state">
					<view style="position: absolute;top: 50%;left: 50%;transform: translate(-50%,-60%);display: flex;flex-direction: row;">
						<image src="/static/img/tick.png" class="OS-img" mode="widthFix"></image>
						<view v-if="OrderItem.status == 1" style="color: #302993;" class="OS-text">正在进行</view>
						<view v-else-if="OrderItem.status == 2"  class="OS-text" style="color: green;">服务完成</view>
						<view v-else class="OS-text" style="color: red;">已取消</view>
					</view>
					
				</view>
				<view class="Order-img">
					<!-- <view class="OI-img-warpper">
						<view style="width: 100%;height: 100%;">
							<image src="/static/img/server/Artboard%201.png" class="OI-img" mode="aspectFill"></image>
						</view>
					</view> -->
					<image :src="qrcode" class="OI-img" mode="widthFix"></image>
				</view>
				<view class="Order-info">服务日期：{{OrderItem.YMD}}</view>
				<view class="Order-info">代驾起始地：{{OrderItem.order_detail.address1}}</view>
				<view class="Order-info">代驾目的地：{{OrderItem.order_detail.address2}}</view>
				<view class="Order-info">代驾时间：{{OrderItem.HM}}</view>
				<view class="Order-info">代驾司机：暂无</view>
				<view class="Order-info">代驾车牌：{{OrderItem.order_detail.CarNum}}</view>
				<view v-if="del" class="del-warpper">
					<button @tap="delClick" class="del-sub" type="primary">取消订单</button>
				</view>
				<image style="height: 70upx;width: 208upx;margin-top: 70upx;" src="/static/img/newLogo.png" mode=""></image>
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
	import QR from '../../static/js/wxqrcode.js'
	export default {
		data() {
			return {
				allHeight: 'height:' + contentHeight + 'px',
				MainHeight: 'height:' + (contentHeight*0.8) + 'px',
				SnameTop: 'top:' + (contentHeight*0.2 - 70) + 'px',
				MainTop: 'top:'+(contentHeight*0.2 + 10)+'px',
				OrderItem: null,
				del: false,
				qrcode: null,
				sta: '判断失败',
				time1: '',
				time2:''
			}
		},
		components: {
			
		},
		onLoad(option) {
			this.sta = '进入onload'
			let OrderItem = JSON.parse(option.OrderItem)
			this.OrderItem = OrderItem
			console.log(OrderItem)
			let img = QR.createQrCodeImg(OrderItem.order_number, {
				// size: parseInt(100) //二维码大小  
			})
			this.qrcode = img
			if (OrderItem.status == 1){
				this.del = true
				// this.sta = '状态为1'
				// let fromDate = this.OrderItem.order_detail.UserTime.replace(/年/g,'-').replace(/月/g,'-').replace(/日/g,'')
				// let ls = fromDate.split(' ')
				// let ls1 = ls[0].split('-')
				// let ls2 = ls[1].split(':')
				// let orderDate = new Date(ls1[0],ls1[1],ls1[2],ls2[0],ls2[1],'0')
				// let orderTime = Date.parse(orderDate)
				// console.log(orderTime)
				// let toDay = Date.parse(new Date())
				// // let orderTime2 = Date.parse(new Date('2019-10-10 11:00:00'))
				// // let toDay = (new Date()).getTime()
				// // console.log(toDay)
				// // console.log(orderTime)
				// // this.time1 = orderTime
				// // this.time2 = orderTime2
				// if (orderTime-toDay > 1000*60*20 ){
				// 	this.sta = '判断成功'
				// 	this.del = true
					
				// }
			}
			
		},
		methods:{
			delClick(){
			// 	let fromDate = this.OrderItem.order_detail.UserTime.replace(/年/g,'-').replace(/月/g,'-').replace(/日/g,'')
			// 	let orderTime = new Date(fromDate).getTime()
			// 	let toDay = Date.parse(new Date())
			// 	// console.log(toDay)
			// 	// console.log(orderTime)
			// 	if (orderTime-toDay > 60*20 ){
					// 删除订单
					this.delOrder()
				// }else {
				// 	this.del = false
				// 	uni.showToast({
				// 		title: '时间超出不能取消',
				// 		icon: 'none',
				// 		duration:1000
				// 	});
				// }
			},
			Prompt(content){
				uni.showToast({
					title: content,
					icon: 'none',
					duration: 1000,
					mask: true
				});
				setTimeout(function(){
					uni.hideToast()
					uni.navigateBack({
						delta: 1
					});
				},1000)
			},
			Prompt1(){
				uni.showToast({
					title: '登陆状态异常',
					icon: 'none',
					duration: 1000,
					mask: true
				});
				setTimeout(function(){
					uni.hideToast()
					uni.navigateTo({
						url: '/pages/Login_one/Login_one'
					});
				},1000)
			},
			Prompt2(){
				uni.showToast({
					title: '网络连接失败',
					icon: 'none',
					duration: 1000,
					mask: true
				});
				setTimeout(function(){
					uni.hideToast()
				},1000)
			},
			delOrder(){
				let url = getApp().globalData.AllUrl + 'api/cancel';
				let info = {
					data: {
						service_type: '1',
						primary_id: this.OrderItem.id,
						sp_id: sp_id
					}
				}
				let that = this
				console.log(info)
				uni.request({
					url: url,
					method: 'POST',
					data: info,
					header: {
						Authorization: getApp().globalData.loginToken
					},
					success: res => {
						console.log(res)
						if (res.data.msg == "取消订单成功"){
							that.Prompt('取消成功')
						}else if (res.data == 'token error'){
							that.Prompt1()
						}else if (res.data.msg == "取消订单失败"){
							that.Prompt('该订单已完成或取消')
						}else {
							that.Prompt2()
						}
					},
					fail: () => {that.Prompt2()},
					complete: () => {}
				});
			}
		}
	}
</script>
<style>
	@import url("../../static/css/OrderDetail.css");
</style>
