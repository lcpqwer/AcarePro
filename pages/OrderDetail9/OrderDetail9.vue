<template>
	<view class="all" :style="allHeight">
		<Back></Back>
		<scroll-view style="width: 100%;height: 100%;" scroll-y="true" >
			<image style="width: 100%;" src="/static/img/top/貴賓廳.png" mode="widthFix"></image>
		<view class="Sname">
			我的订单
		</view>
		<view class="Main MainTop">
			<view class="Main-title">订单编号：{{OrderItem.order_number}}</view>
			<view class="Main-main">
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
							<image src="/static/img/server/Artboard%2011.png" class="OI-img" mode="aspectFill"></image>
						</view>
					</view> -->
					<image :src="qrcode" class="OI-img" mode="widthFix"></image>
				</view>
				
				<view class="Order-info" v-if="OrderItem.order_detail.userTime != ''">服务日期：{{OrderItem.order_detail.userTime}}</view>
				<view class="Order-info" v-else>服务日期：暂无</view>
				<view class="Order-info" v-if="OrderItem.order_detail.relaMerchant != ''">核销网点：{{OrderItem.order_detail.relaMerchant}}</view>
				<view class="Order-info">核销网点：暂无</view>
				<!-- <view class="Order-info">发动机号：{{OrderItem.order_detail.EngineNo}}</view>
				<view class="Order-info">车架号：{{OrderItem.order_detail.IdentifyNo}}</view>
				<view class="Order-info">车辆年限：{{OrderItem.order_detail.CarYears}}</view> -->
				
			<!-- 	<view class="del-warpper">
					<button @tap="delOrder" class="del-sub" type="primary">取消订单</button>
				</view> -->
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
			}
		},
		components: {
			
		},
		onLoad(option) {
			let OrderItem = JSON.parse(option.OrderItem)
			this.OrderItem = OrderItem
			console.log(OrderItem)
			let img = QR.createQrCodeImg(OrderItem.order_number, {
				// size: parseInt(100) //二维码大小  
			})
			this.qrcode = img			
			// let fromDate = this.OrderItem.order_detail.UserTime.replace(/年/g,'-').replace(/月/g,'-').replace(/日/g,'')
			// let orderTime = new Date(fromDate).getTime()
			// let toDay = Date.parse(new Date())
			// // console.log(toDay)
			// // console.log(orderTime)
			// if (orderTime-toDay > 60*20 ){
			// 	this.del = true
			// }
		},
		methods:{
			delOrder(){
				// let fromDate = this.OrderItem.order_detail.UserTime.replace(/年/g,'-').replace(/月/g,'-').replace(/日/g,'')
				// let orderTime = new Date(fromDate).getTime()
				// let toDay = Date.parse(new Date())
				// // console.log(toDay)
				// // console.log(orderTime)
				// if (orderTime-toDay > 60*20 ){
				// 	// 删除订单
				// }else {
				// 	this.del = false
				// 	uni.showToast({
				// 		title: '时间超出不能取消',
				// 		icon: 'none',
				// 		duration:1000
				// 	});
				// }
			}
		}
	}
</script>
<style>
	@import url("../../static/css/OrderDetail.css");
</style>
