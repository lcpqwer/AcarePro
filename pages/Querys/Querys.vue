<template>
	<view style="width: 100%;height: 100%;">
		<scroll-view style="width: 100%;height: 100%;" scroll-y="true" >
			<view style="padding-top: 30upx;" v-for="(item,index) in json" :key="index">
			<view class="Q-question">
				<view class="Q-title">{{item.Qnum}}:</view>
				<view class="Q-content">{{item.Qcontent}}</view>
			</view>
			<view class="Q-answer">
				<view class="Q-title" style="text-indent: 22upx;">{{item.Anum}}:</view>
				<!-- <view v-for="(Aitem,index) in item.Acontent" :key="index" class="Q-content">
					{{Aitem}}<br/>
				</view> -->
				<view v-html='item.Acontent' class="Q-content">
					<!-- {{item.Acontent}} -->
				</view>
			</view>
		</view>
		</scroll-view>
		<Back></Back>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				json: require('./Querys.json'),
				a: '<view></view>'
			}
		},
		onLoad() {
			
		},
		methods: {
			
		}
	}
</script>

<style>
	@import url("../../static/css/Querys.css");
</style>
