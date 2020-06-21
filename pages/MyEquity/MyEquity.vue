<template>
	<view style="width: 100%;height: 100%;">
		<Back></Back>
		<scroll-view style="width: 100%;height: 100%;" scroll-y="true" >
			<image style="width: 100%;" src="/static/img/top/我的權益.png" mode="widthFix"></image>
		<view class="Sname">
			我的权益
		</view>
		<view class="Main MainTop">
			<view class="Main-title">可使用服务</view>
			<view style="padding-left: 108upx;padding-right: 108upx;">
				<view class="V-warpper">
					<view class="VW-left"></view>
					<view class="VM-main">
						<view class="VM-center">
							<view class="VM-top-right"></view>
							<view class="VM-bottom-right"></view>
							<view class="VM-text">
								<view class="VM-title">洗车服务</view>
								<view class="VM-type">
									<view class="VMT-warpper">非预约类服务</view>
								</view>
								<view class="VM-desc">可直接到服务网点使用，无需预约。</view>
							</view>
						</view>
						<view class="VM-right">
							<view class="VM-top-left"></view>
							<view class="VM-bottom-left"></view>
							<view class="VMR-main">
								<view class="VMRM-title">剩余次数:</view>
								<view class="VMRM-num">{{serviceNumber.service1}}</view>
							</view>
						</view>
					</view>
				</view>
				<view class="V-warpper">
					<view class="VW-left"></view>
					<view class="VM-main">
						<view class="VM-center">
							<view class="VM-top-right"></view>
							<view class="VM-bottom-right"></view>
							<view class="VM-text">
								<view class="VM-title">保养服务</view>
								<view class="VM-type">
									<view class="VMT-warpper">非预约类服务</view>
								</view>
								<view class="VM-desc">可直接到服务网点使用，无需预约。</view>
							</view>
						</view>
						<view class="VM-right">
							<view class="VM-top-left"></view>
							<view class="VM-bottom-left"></view>
							<view class="VMR-main">
								<view class="VMRM-title">剩余次数:</view>
								<view class="VMRM-num">{{serviceNumber.service2}}</view>
							</view>
						</view>
					</view>
				</view>
				<view class="V-warpper">
					<view class="VW-left"></view>
					<view class="VM-main">
						<view class="VM-center">
							<view class="VM-top-right"></view>
							<view class="VM-bottom-right"></view>
							<view class="VM-text">
								<view class="VM-title">喷漆服务</view>
								<view class="VM-type">
									<view class="VMT-warpper">非预约类服务</view>
								</view>
								<view class="VM-desc">可直接到服务网点使用，无需预约。</view>
							</view>
						</view>
						<view class="VM-right">
							<view class="VM-top-left"></view>
							<view class="VM-bottom-left"></view>
							<view class="VMR-main">
								<view class="VMRM-title">剩余次数:</view>
								<view class="VMRM-num">{{serviceNumber.service3}}</view>
							</view>
						</view>
					</view>
				</view>
				<view class="V-warpper">
					<view class="VW-left OtherBgc"></view>
					<view class="VM-main">
						<view class="VM-center">
							<view class="VM-top-right"></view>
							<view class="VM-bottom-right"></view>
							<view class="VM-text">
								<view class="VM-title">代驾服务</view>
								<view class="VM-type">
									<view class="VMT-warpper OtherColor">预约类服务</view>
								</view>
								<view class="VM-desc">需预约及确认后根据服务提示使用。</view>
							</view>
						</view>
						<view class="VM-right">
							<view class="VM-top-left"></view>
							<view class="VM-bottom-left"></view>
							<view class="VMR-main OtherColor">
								<view class="VMRM-title OtherColor">剩余次数:</view>
								<view class="VMRM-num OtherColor">{{serviceNumber.service4}}</view>
							</view>
						</view>
					</view>
				</view>
				<view class="V-warpper">
					<view class="VW-left OtherBgc"></view>
					<view class="VM-main">
						<view class="VM-center">
							<view class="VM-top-right"></view>
							<view class="VM-bottom-right"></view>
							<view class="VM-text">
								<view class="VM-title">境内机场接送</view>
								<view class="VM-type">
									<view class="VMT-warpper OtherColor">预约类服务</view>
								</view>
								<view class="VM-desc">需预约及确认后根据服务提示使用。</view>
							</view>
						</view>
						<view class="VM-right">
							<view class="VM-top-left"></view>
							<view class="VM-bottom-left"></view>
							<view class="VMR-main">
								<view class="VMRM-title OtherColor">剩余次数:</view>
								<view class="VMRM-num OtherColor">{{serviceNumber.service5}}</view>
							</view>
						</view>
					</view>
				</view>
				<view class="V-warpper">
					<view class="VW-left OtherBgc"></view>
					<view class="VM-main">
						<view class="VM-center">
							<view class="VM-top-right"></view>
							<view class="VM-bottom-right"></view>
							<view class="VM-text">
								<view class="VM-title">境内高铁/火车接送</view>
								<view class="VM-type">
									<view class="VMT-warpper OtherColor">预约类服务</view>
								</view>
								<view class="VM-desc">需预约及确认后根据服务提示使用。</view>
							</view>
						</view>
						<view class="VM-right">
							<view class="VM-top-left"></view>
							<view class="VM-bottom-left"></view>
							<view class="VMR-main">
								<view class="VMRM-title OtherColor">剩余次数:</view>
								<view class="VMRM-num OtherColor">{{serviceNumber.service6}}</view>
							</view>
						</view>
					</view>
				</view>
				<view class="V-warpper">
					<view class="VW-left OtherBgc"></view>
					<view class="VM-main">
						<view class="VM-center">
							<view class="VM-top-right"></view>
							<view class="VM-bottom-right"></view>
							<view class="VM-text">
								<view class="VM-title">机场/高铁贵宾厅</view>
								<view class="VM-type">
									<view class="VMT-warpper OtherColor">预约类服务</view>
								</view>
								<view class="VM-desc">需预约及确认后根据服务提示使用。。</view>
							</view>
						</view>
						<view class="VM-right">
							<view class="VM-top-left"></view>
							<view class="VM-bottom-left"></view>
							<view class="VMR-main">
								<view class="VMRM-title OtherColor">剩余次数:</view>
								<view class="VMRM-num OtherColor">{{serviceNumber.service7}}</view>
							</view>
						</view>
					</view>
				</view>
				<view class="V-warpper">
					<view class="VW-left OtherBgc"></view>
					<view class="VM-main">
						<view class="VM-center">
							<view class="VM-top-right"></view>
							<view class="VM-bottom-right"></view>
							<view class="VM-text">
								<view class="VM-title">机场附近停车</view>
								<view class="VM-type">
									<view class="VMT-warpper OtherColor">预约类服务</view>
								</view>
								<view class="VM-desc">需预约及确认后根据服务提示使用。</view>
							</view>
						</view>
						<view class="VM-right">
							<view class="VM-top-left"></view>
							<view class="VM-bottom-left"></view>
							<view class="VMR-main">
								<view class="VMRM-title OtherColor">剩余次数:</view>
								<view class="VMRM-num OtherColor">{{serviceNumber.service8}}</view>
							</view>
						</view>
					</view>
				</view>
				<view class="V-warpper">
					<view class="VW-left OtherBgc"></view>
					<view class="VM-main">
						<view class="VM-center">
							<view class="VM-top-right"></view>
							<view class="VM-bottom-right"></view>
							<view class="VM-text">
								<view class="VM-title">待办年检</view>
								<view class="VM-type">
									<view class="VMT-warpper OtherColor">预约类服务</view>
								</view>
								<view class="VM-desc">需预约及确认后根据服务提示使用。</view>
							</view>
						</view>
						<view class="VM-right">
							<view class="VM-top-left"></view>
							<view class="VM-bottom-left"></view>
							<view class="VMR-main">
								<view class="VMRM-title OtherColor">剩余次数:</view>
								<view class="VMRM-num OtherColor">{{serviceNumber.service9}}</view>
							</view>
						</view>
					</view>
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
	export default {
		data() {
			return {
				allHeight: 'height:' + contentHeight + 'px;',
				MainHeight: 'height:' + (contentHeight*0.8 - 11) + 'px;',
				SnameTop: 'top:' + (contentHeight*0.2 - 70) + 'px;',
				MainTop: 'top:'+(contentHeight*0.2 + 10)+'px;',
				serviceNumber: {}
			}
		},
		onLoad() {
			this.checkToken()
		},
		methods: {
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
									that.getEquity()
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
			getEquity(){
				let url = getApp().globalData.AllUrl + 'api/right'
				let that = this
				uni.request({
					url: url,
					method: 'POST',
					data: {},
					header:{
						Authorization: getApp().globalData.loginToken
					},
					success: res => {
						console.log(res)
						that.serviceNumber = JSON.parse(res.data.data.data)
						console.log(that.serviceNumber)
					},
					fail: () => {},
					complete: () => {}
				});
			}
		}
	}
</script>

<style>
	@import url("../../static/css/MyEquity.css");
</style>
