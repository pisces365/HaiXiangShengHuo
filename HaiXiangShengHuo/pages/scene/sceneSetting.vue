<template>
	<view class="page">
		<view class="top">
			<view class="topContent">模式设置</view>
		</view>
		<view class="content">
			<view class="content-item">
				<view class="content-item-icon">
					<image src="http://p1362.bvimg.com/10465/7c5b0f6ddef06130.png" mode=""></image>
				</view>
				<view class="content-item-description">
					<view class="content-item-description-title">
						窗帘
					</view>
					<view class="content-item-description-condition">
						{{condition_curtain==true?'打开':"关闭"}}
					</view>
				</view>
				<view class="content-item-button" @tap="curtainSwitched()">
					<evan-switch :v-model="condition_curtain" activeColor="#00a231" :size="25" inactiveColor="#787878">
					</evan-switch>
				</view>
			</view>
			<view class="content-item">
				<view class="content-item-icon">
					<image src="http://p1362.bvimg.com/10465/394441316195931e.png" mode=""></image>
				</view>
				<view class="content-item-description">
					<view class="content-item-description-title">
						空气净化器
					</view>
					<view class="content-item-description-condition">
						{{condition_purifier==true?'打开':"关闭"}}
					</view>
				</view>
				<view class="content-item-button" @tap="purifierSwitched()">
					<evan-switch :v-model="condition_purifier" activeColor="#00a231" :size="25" inactiveColor="#787878">
					</evan-switch>
				</view>
			</view>
			<view class="content-item">
				<view class="content-item-icon">
					<image src="http://p1362.bvimg.com/10465/ed64cb09ea0d7f34.png" mode=""></image>
				</view>
				<view class="content-item-description">
					<view class="content-item-description-title">
						室内氛围灯
					</view>
					<view class="content-item-description-condition">
						{{condition_light==true?'打开':"关闭"}}
					</view>
				</view>
				<view class="content-item-button" @tap="lightSwitched()">
					<evan-switch :v-model="condition_light" activeColor="#00a231" :size="25" inactiveColor="#787878">
					</evan-switch>
				</view>
			</view>
		</view>
		<view class="floatButton">
			<image src="http://p1362.bvimg.com/10465/e78c538ab0cb2246.png" mode=""></image>
		</view>
	</view>
</template>

<script>
	import EvanSwitch from '@/components/evan-switch/evan-switch.vue'
	export default {
		components: {
			EvanSwitch
		},
		data() {
			return {
				condition_curtain: false,
				condition_purifier: false,
				condition_light: false
			}
		},
		methods: {
			curtainSwitched() {
				let _this = this;
				if (_this.condition_curtain) {
					_this.condition_curtain = false;
				} else {
					_this.condition_curtain = true;
				}
			},
			purifierSwitched() {
				let _this = this;
				if (_this.condition_purifier) {
					_this.condition_purifier = false;
				} else {
					_this.condition_purifier = true;
				}
			},
			lightSwitched() {
				let _this = this;
				if (_this.condition_light) {
					_this.condition_light = false;
				} else {
					_this.condition_light = true;
				}
			}
		}
	}
</script>

<style>
	.page {
		width: 100vw;
		height: 100vh;
	}

	.top {
		background-image: url('http://p1362.bvimg.com/10465/12ee5ab34ae46427.jpg');
		width: 100%;
		height: 440rpx;
		display: flex;
		justify-content: center;
	}

	.topContent {
		margin-top: 40rpx;
		font-size: 36rpx;
		color: white;
	}

	.content {
		padding: 0 30rpx;
	}

	.content-item-icon {
		width: 100rpx;
		height: 100rpx;
	}

	.content-item-icon image {
		width: 100%;
		height: 100%;
	}

	.content-item {
		display: flex;
		padding-left: 20rpx;
		height: 150rpx;
		align-items: center;
		border-radius: 20rpx;
		box-shadow: 1px 2px 2px 1px rgba(0, 0, 0, 0.1);
		margin-top: 30rpx;
		position: relative;
	}

	.content-item-description {
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin-left: 30rpx;
	}

	.content-item-description-title {
		font-weight: bold;
		margin-bottom: 10rpx;
	}

	.content-item-button {
		position: absolute;
		right: 40rpx;
	}

	.floatButton {
		position: fixed;
		right: 40rpx;
		bottom: 140rpx;
		width: 100rpx;
		height: 100rpx;
	}

	.floatButton image {
		width: 100%;
		height: 100%;
	}
</style>
