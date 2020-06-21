<template>
	<view class="Card-main">
		<!-- 洗 车 -->
		<view v-if="OrderItem.service_id == 1" class="Card-warpper" @tap="toDetail">
			<view class="Card-left">
				<image class="Card-img" src="/static/img/server/洗車.png" mode="aspectFill"></image>
				<!-- <view class="Img-text">洗 车</view> -->
			</view>
			<view class="Card-right">
				<view class="Card-text">
					<view class="Text-item">
						<text>订单号：{{OrderItem.order_number}}</text>
						<text v-if="OrderItem.status == 1" class="Card-state">未完成</text>
						<text v-else-if="OrderItem.status == 2" class="Card-state">服务完成</text>
						<text v-else-if="OrderItem.status == 4" class="Card-state">待商家确认</text>
						<text v-else class="Card-state">已取消</text>
					</view>
					<view class="Text-item">
						门店名称：{{OrderItem.store_id.name}}
					</view>
					<view class="Text-item">
						门店地址：{{OrderItem.store_id.store_address}}
					</view>
					<view class="Text-item">
						门店电话：{{OrderItem.store_id.store_phone}}
					</view>
					<view v-if="OrderItem.store_id && OrderItem.store_id.company == '车享家'" class="Text-item">
						预约时间：{{OrderItem.ServerTime}}
					</view>
					<!-- <view class="Text-item Wash-last">
						<text>门店电话：02158447092</text>
						<text>门店地址：上海上海上海上海上海上海上海上海上海上海</text>
					</view> -->
				</view>
			</view>
		</view>
		<!-- 保养 -->
		<view v-if="OrderItem.service_id == 2" class="Card-warpper" @tap="toDetail">
			<view class="Card-left">
				<image class="Card-img" src="/static/img/server/保養.png" mode="aspectFill"></image>
				<!-- <view class="Img-text">洗 车</view> -->
			</view>
			<view class="Card-right">
				<view class="Card-text">
					<view class="Text-item">
						<text>订单号：{{OrderItem.order_number}}</text>
						<text v-if="OrderItem.status == 1" class="Card-state">未完成</text>
						<text v-else-if="OrderItem.status == 2" class="Card-state">服务完成</text>
						<text v-else-if="OrderItem.status == 4" class="Card-state">待商家确认</text>
						<text v-else class="Card-state">已取消</text>
					</view>
					<view class="Text-item">
						门店名称：{{OrderItem.store_id.name}}
					</view>
					<view class="Text-item">
						门店地址：{{OrderItem.store_id.store_address}}
					</view>
					<view class="Text-item">
						门店电话：{{OrderItem.store_id.store_phone}}
					</view>
					<view v-if="OrderItem.store_id && OrderItem.store_id.company == '车享家'" class="Text-item">
						预约时间：{{OrderItem.ServerTime}}
					</view>
					<!-- <view class="Text-item Wash-last">
						<text>门店电话：02158447092</text>
						<text>门店地址：上海上海上海上海上海上海上海上海上海上海</text>
					</view> -->
				</view>
			</view>
		</view>
		<!-- 喷漆 -->
		<view v-if="OrderItem.service_id == 3" class="Card-warpper" @tap="toDetail">
			<view class="Card-left">
				<image class="Card-img" src="/static/img/server/噴漆.png" mode="aspectFill"></image>
				<!-- <view class="Img-text">洗 车</view> -->
			</view>
			<view class="Card-right">
				<view class="Card-text">
					<view class="Text-item">
						<text>订单号：{{OrderItem.order_number}}</text>
						<text v-if="OrderItem.status == 1" class="Card-state">未完成</text>
						<text v-else-if="OrderItem.status == 2" class="Card-state">服务完成</text>
						<text v-else-if="OrderItem.status == 4" class="Card-state">待商家确认</text>
						<text v-else class="Card-state">已取消</text>
					</view>
					<view class="Text-item">
						门店名称：{{OrderItem.store_id.name}}
					</view>
					<view class="Text-item">
						门店地址：{{OrderItem.store_id.store_address}}
					</view>
					<view class="Text-item">
						门店电话：{{OrderItem.store_id.store_phone}}
					</view>
					<view v-if="OrderItem.store_id && OrderItem.store_id.company == '车享家'" class="Text-item">
						预约时间：{{OrderItem.ServerTime}}
					</view>
					<!-- <view class="Text-item Wash-last">
						<text>门店电话：02158447092</text>
						<text>门店地址：上海上海上海上海上海上海上海上海上海上海</text>
					</view> -->
				</view>
			</view>
		</view>
		<!-- 境内机场接送 -->
		<view v-else-if="OrderItem.service_id == 5" class="Card-warpper" @tap="toDetail">
			<view class="Card-left">
				<image class="Card-img" src="/static/img/server/境內機場接送.png" mode="aspectFill"></image>
				<!-- <view class="Img-text">境内机场结束</view> -->
			</view>
			<view class="Card-right">
				<view class="Card-text">
					<view class="Text-item">
						<text>订单号：{{OrderItem.order_number}}</text>
						<text v-if="OrderItem.status == 1" class="Card-state">未完成</text>
						<text v-else class="Card-state">服务完成</text>
					</view>
					<view class="Text-item">
						服务日期：{{OrderItem.YMD}}
					</view>
					<view v-if="OrderItem.order_detail.Type == 0" class="Text-item">
						接机机场：{{OrderItem.order_detail.start_name}}
					</view>
					<view v-else class="Text-item">
						送机机场：{{OrderItem.order_detail.end_name}}
					</view>
					<view v-if="OrderItem.order_detail.Type == 0" class="Text-item">
						目的地：{{OrderItem.order_detail.end_name}}
					</view>
					<view v-else class="Text-item">
						起始地：{{OrderItem.order_detail.start_name}}
					</view>
					<view class="Text-item">
						接送人数：{{OrderItem.order_detail.Pnum}}
					</view>
				</view>
			</view>
		</view>
		<!-- 代 驾 -->
		<view v-else-if="OrderItem.service_id == 4" class="Card-warpper" @tap="toDetail">
			<view class="Card-left">
				<image class="Card-img" src="/static/img/server/代駕.png" mode="aspectFill"></image>
				<!-- <view class="Img-text">代 驾</view> -->
			</view>
			<view class="Card-right">
				<view class="Card-text">
					<view class="Text-item">
						<text>订单号：{{OrderItem.order_number}}</text>
						<text v-if="OrderItem.status == 1" class="Card-state">未完成</text>
						<text v-else-if="OrderItem.status == 2" class="Card-state">服务完成</text>
						<text v-else class="Card-state">已取消</text>
					</view>
					<view class="Text-item omit">
						服务日期：{{OrderItem.YMD}}
					</view>
					<view class="Text-item omit">
						代驾起始点：{{OrderItem.order_detail.address1}}
					</view>
					<view class="Text-item omit">
						代驾目的地：{{OrderItem.order_detail.address2}}
					</view>
					<view class="Text-item omit">
						代驾时间：{{OrderItem.HM}}
					</view>
				</view>
			</view>
		</view>
		<!-- 境内高铁站接送 -->
		<view v-else-if="OrderItem.service_id == 6" class="Card-warpper" @tap="toDetail">
			<view class="Card-left">
				<image class="Card-img" src="/static/img/server/高鐵接送.png" mode="aspectFill"></image>
				<!-- <view class="Img-text">代 驾</view> -->
			</view>
			<view class="Card-right">
				<view class="Card-text">
					<view class="Text-item">
						<text>订单号：{{OrderItem.order_number}}</text>
						<text v-if="OrderItem.status == 1" class="Card-state">未完成</text>
						<text v-else class="Card-state">服务完成</text>
					</view>
					<view class="Text-item omit">
						服务日期：{{OrderItem.YMD}}
					</view>
					<view class="Text-item omit">
						高铁站：{{OrderItem.order_detail.HSRStation}}
					</view>
					<view v-if="OrderItem.order_detail.Type == 0" class="Text-item omit">
						目的地：{{OrderItem.order_detail.Address}}
					</view>
					<view v-else class="Text-item omit">
						起始地：{{OrderItem.order_detail.Address}}
					</view>
					<view class="Text-item omit">
						接送人数：{{OrderItem.order_detail.Pnum}}
					</view>
				</view>
			</view>
		</view>
		<!-- 机场/高铁贵宾厅 -->
		<!--  -->
		<view v-else-if="OrderItem.service_id == 7" class="Card-warpper" @tap="toDetail">
			<view class="Card-left">
				<image class="Card-img" src="/static/img/server/貴賓廳.png" mode="aspectFill"></image>
			</view>
			<view class="Card-right">
				<view class="Card-text">
					<view class="Text-item">
						<text>订单号：{{OrderItem.order_number}}</text>
						<text v-if="OrderItem.status == 1" class="Card-state">未完成</text>
						<text v-else class="Card-state">服务完成</text>
					</view>
					<view class="Text-item">
						服务日期：{{OrderItem.YMD}}
					</view>
					<view v-if="OrderItem.order_detail.Type == 1" class="Text-item">
						高铁站：{{OrderItem.order_detail.Station}}
					</view>
					<view v-else class="Text-item">
						机场：{{OrderItem.order_detail.Station}}
					</view>
					<view class="Text-item">
						服务贵宾厅：{{OrderItem.order_detail.VIPRoom}}
					</view>
					<view class="Text-item">
						服务时间：{{OrderItem.HM}}
					</view>
				</view>
			</view>
		</view>
		
		<!-- 机场附近停车 -->
		
		<view v-else-if="OrderItem.service_id == 8" class="Card-warpper" @tap="toDetail">
			<view class="Card-left">
				<image class="Card-img" src="/static/img/server/機場停車.png" mode="aspectFill"></image>
			</view>
			<view class="Card-right">
				<view class="Card-text">
					<view class="Text-item">
						<text>订单号：{{OrderItem.order_number}}</text>
						<text v-if="OrderItem.status == 1" class="Card-state">未完成</text>
						<text v-else-if="OrderItem.status == 2" class="Card-state">服务完成</text>
						<text v-else class="Card-state">已取消</text>
					</view>
					<view class="Text-item">
						机场名称：{{JSON.parse(OrderItem.order_detail).air}}
					</view>
					<view class="Text-item">
						机场地址：{{JSON.parse(OrderItem.order_detail).address}}
					</view>
					<view class="Text-item">
						服务日期：{{JSON.parse(OrderItem.order_detail).UserTime}}
					</view>
					<!-- <view v-else class="Text-item">
						门店电话：暂无
					</view> -->
				</view>
			</view>
		</view>
		<!-- 代办年检 -->
		<view v-else-if="OrderItem.service_id == 9" class="Card-warpper" @tap="toDetail">
			<view class="Card-left">
				<image class="Card-img" src="/static/img/server/代辦年檢.png" mode="aspectFill"></image>
				<!-- <view class="Img-text">代 驾</view> -->
			</view>
			<view class="Card-right">
				<view class="Card-text">
					<view class="Text-item">
						<text>订单号：{{OrderItem.order_number}}</text>
						<text v-if="OrderItem.order_detail.status == '1'" class="Card-state">下单成功</text>
						<text v-else-if="OrderItem.order_detail.status == '2'" class="Card-state">预约中</text>
						<text v-else-if="OrderItem.order_detail.status == '3'" class="Card-state">预约确认通过</text>
						<text v-else-if="OrderItem.order_detail.status == '4'" class="Card-state">预约拒绝</text>
						<text v-else-if="OrderItem.order_detail.status == '5'" class="Card-state">服务完成</text>
						<text v-else-if="OrderItem.order_detail.status == '6'" class="Card-state">系统取消</text>
						<text v-else-if="OrderItem.order_detail.status == '7'" class="Card-state">用户取消</text>
						<text v-else class="Card-state">已下单</text>
					</view>
					<view v-if="OrderItem.order_detail.userTime != ''" class="Text-item omit">
						服务日期：{{OrderItem.order_detail.userTime}}
					</view>
					<view v-else class="Text-item omit">
						服务日期：暂无
					</view>
					<view v-if="OrderItem.order_detail.relaMerchant != ''" class="Text-item omit">
						核销网点：{{OrderItem.order_detail.relaMerchant}}
					</view>
					<view v-else class="Text-item omit">
						核销网点：暂无
					</view>
					<!-- <view class="Text-item omit">
						还车地址：{{OrderItem.order_detail.AlsoAddress}}
					</view>
					<view class="Text-item omit">
						车牌号：{{OrderItem.order_detail.CarNum}}
					</view> -->
				</view>
			</view>
		</view>
		
	</view>
</template>
<!-- 1： 洗车 2：保养 3：喷漆 4：代驾 5：境内机场接送 6：境内高铁站接送 7：机场/高铁贵宾厅 8：机场附近停车 9：待办年检-->
<script>
	export default {
		props:{
			OrderItem: Object
		},
		data(){
			return {
				
			}
		},
		methods:{
			toDetail(){
				let url = '/pages/OrderDetail'+this.OrderItem.service_id+'/OrderDetail'+this.OrderItem.service_id +"?OrderItem="+JSON.stringify(this.OrderItem)
				uni.navigateTo({
					url: url,
				});
			}
		}
	}
</script>

<style>
	@import url("../static/css/OrderList.css");
	.Text-item {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
</style>
