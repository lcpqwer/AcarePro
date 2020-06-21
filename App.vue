<script>
	export default {
		globalData: {
			longitude: 116.3,
			latitude: 39.9,
			loginToken: null,
			AllUrl: 'https://www.acarepro.online/acarepro-api/',
			company: null,
			china_airport: {id: null, name: ''},
			A_three_ramilway: {id: null, name: ''},
			A_four_station: {name: ''},
			// 所在区域
			province: '上海市',
			city: '上海市',
			area: '浦东新区',
			// 微信登陆openid
			openid: ''
			
		},
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	// 预约服务公用样式
	@import url('/static/css/Appointment.css');
	
	/*每个页面公共css */
	.posir {
		position: relative;
	}
	.omit {
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
	}
	page {
		font-family: sans-serif;
		width: 100%;height: 100%;
		background-color: #fff;
	}
	
	*::-webkit-scrollbar {
		width: 0;
		height: 0;
	}
	.page-head-title {
		letter-spacing: 10upx;
	}
	.all-warpper {
		width: 100%;height: 100%;
	}
	
	.uni-checkbox-input {
		background-color: #c0c0c0!important;
	}
	
	.store-logo {
		position: absolute;height: 40upx;width: 110upx;right: 50upx;top: 20upx;
	}
	
	a{
		text-decoration: none
	}
	
</style>
