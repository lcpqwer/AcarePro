<template>
	<view class="all">
		<Back></Back>
		<scroll-view style="width: 100%;height: 100%;" scroll-y="true" >
			<image style="width: 100%;" src="/static/img/top/我的訂單.png" mode="widthFix"></image>
			<view class="Sname">
				我的订单
			</view>
			<view class="Main MainTop" style="height: 100px;">
				<view class="Main-title">订单记录</view>
				<OrderItem v-for="(item,index) in OrderList" :key="index" :OrderItem="item"></OrderItem>
				<view v-if="OrderList.length == 0 && flag" style="width: 100%;height: 300upx;font-size: 30upx;line-height: 300upx;text-align: center;">暂无订单</view>
			</view>
		</scroll-view>
	</view>
</template>
<!-- 1： 洗车 2：保养 3：喷漆 4：代驾 5：境外机场接送 6：境内高铁站接送 7：机场/高铁贵宾厅 8：机场附近停车 9：待办年检-->
<script>
	var contentHeight;
	uni.getSystemInfo({
	    success(res) {
			contentHeight = res.screenHeight-44
	    }
	})
	import OrderItem from '@/components/OrderItem.vue'
	export default {
		data() {
			return {
				allHeight: 'height:' + contentHeight + 'px',
				MainHeight: 'height:' + (contentHeight*0.8) + 'px',
				SnameTop: 'top:' + (contentHeight*0.2 - 70) + 'px',
				MainTop: 'top:'+(contentHeight*0.2 + 10)+'px',
				OrderList:[],
				flag: false
			}
		},
		components: {
			OrderItem
		},
		onLoad() {
			// this.checkToken()
		},
		onShow() {
			this.checkToken()
		},
		methods:{
			Prompt(content){
				uni.showToast({
					title:content,
					duration:2000,
					icon:'none'
				})
			},
			getOrder(){
				uni.showLoading({
					title: '',
					mask: true,
				});
				let that = this
				let url = getApp().globalData.AllUrl+ 'api/order'
				uni.request({
					url: url,
					method: 'GET',
					data: {},
					header:{
						Authorization: getApp().globalData.loginToken
					},
					success: res => {
						console.log(res)
						let msg = res.data.msg
						let status = res.data.status
						let ls = res.data.data
						if (msg == '请求成功' && status == true){
							let orderLs = []
							for (let i = 0; i < ls.length; i++) {
								let item = ls[i]
								if (item.service_id == 4 || item.service_id == 5 || item.service_id == 6 || item.service_id == 7){
									console.log(item)
									let str = item.order_detail
									item.order_detail = JSON.parse(str)
									item.YMD = item.order_detail.UserTime.split(' ')[0]
									item.HM = item.order_detail.UserTime.split(' ')[1]
								}
								if (item.store_id && item.store_id.company == '车享家') {
									// console.log(item)
									let orderTime = JSON.parse(item.order_detail).UserTime
									let timeList = orderTime.split('-')
									item.ServerTime = timeList[0]+'年'+timeList[1]+'月'+timeList[2]+'日'
									// console.log(timeList)
								}
								// if (item.service_id == 8)console.log(item.id,item.store_id,item)
								orderLs.push(item)
							}
							// console.log(that.OrderList)
							that.OrderList = orderLs
						}
						
					},
					fail: () => {
						that.Prompt('网络出错')
					},
					complete: () => {
						uni.hideLoading()
						that.flag = true
					}
				});
			},
			toLogin(){
				uni.navigateTo({
					url: '/pages/Login_one/Login_one',
				});	
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
									this.getOrder()
								}
							},
							fail: () => {
								console.log('获取失败')
							},
							complete: () => {
								
							}
						});
					}
				})
			}
		}
	}
</script>
<style>
	@import url("../../static/css/OrderList.css");
</style>
