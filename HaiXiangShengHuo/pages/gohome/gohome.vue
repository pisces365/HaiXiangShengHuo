<template>
	<view>
		<view class="page">
			<button class="gohomebutton" @click="ahome()">
				回 家 模 式
				
			</button>
			<view class="quick_scene_change_setting" @click="gohome()">
				
			</view>
			<view class="quick_scene_change_setting2" @click="motor_unique()">
				
			</view>
		</view>
	</view>
</template>

<script>
		import {
		home, goHome
	} from '@/common/api.js'
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			ahome() {
				var data ={
					'message': 'LED2 white'
				}
				var that = this;
				home(data).then((res) => {
					if (res.code == "200") {
						uni.hideLoading();
						console.log(res.data);
						uni.showToast({
						title: '提交成功',
						duration: 2000
						});
						setTimeout(that.LED2off, 9000);
					}
					else {
						console.log("fail");
						uni.hideLoading();
						uni.showToast({
						title: '提交失败',
						duration: 2000,
						icon: 'error'
						});
					}
				})
			},
			
			LEDoff() {
				var data ={
					'message': 'LED off'
				}
				home(data).then((res) => {
					if (res.code == "200") {
						uni.hideLoading();
						console.log(res.data);
						uni.showToast({
						title: '提交成功',
						duration: 2000
						});
						that.goBack();
					}
					else {
						console.log("fail");
						uni.hideLoading();
						uni.showToast({
						title: '提交失败',
						duration: 2000,
						icon: 'error'
						});
					}
				})
			},
			
			LED2off() {
				var data ={
					'message': 'LED2 off'
				}
				home(data).then((res) => {
					if (res.code == "200") {
						uni.hideLoading();
						console.log(res.data);
						uni.showToast({
						title: '提交成功',
						duration: 2000
						});
						
					}
					else {
						console.log("fail");
						uni.hideLoading();
						uni.showToast({
						title: '提交失败',
						duration: 2000,
						icon: 'error'
						});
					}
				})
			},
			
			gohome() {
				
				const innerAudioContext = uni.createInnerAudioContext();
				innerAudioContext.src = "/static/music/air.mp3";
				innerAudioContext.play();
				
				setTimeout(this.gohomenext, 3000);
			},
			
			gohomenext() {
				var data ={
					'time': '700'
				}
				var that = this;
				goHome(data).then((res) => {
					if (res.code == "200") {
						uni.hideLoading();
						console.log(res.data);
						uni.showToast({
						title: '提交成功',
						duration: 2000
						});
						setTimeout(that.LEDoff, 5000);
					}
					else {
						console.log("fail");
						uni.hideLoading();
						uni.showToast({
						title: '提交失败',
						duration: 2000,
						icon: 'error'
						});
					}
				})
			},
			motor_unique() {
				var data ={
					'message': 'Motor on 700'
				}
				var that = this;
				home(data).then((res) => {
					if (res.code == "200") {
						uni.hideLoading();
						console.log(res.data);
						uni.showToast({
						title: '提交成功',
						duration: 2000
						});
						setTimeout(that.LEDoff, 5000);
					}
					else {
						console.log("fail");
						uni.hideLoading();
						uni.showToast({
						title: '提交失败',
						duration: 2000,
						icon: 'error'
						});
					}
				})
			}
		}
	}
</script>

<style>
	.page {
		width: 800rpx;
		height: 1400rpx;
		background-image: url("https://s1.ax1x.com/2022/05/24/XPPyWt.png");
		background-size: 780rpx 1400rpx;
		position: relative;
	}
	
	.gohomebutton {
		position: absolute;
		width: 500rpx;
		height: 500rpx;
		border-radius: 250rpx;
		background-color: #3ad1d9;
		color: white;
		font-size: 60rpx;
		text-align: center;
		line-height: 500rpx;
		top: 350rpx;
		left: 140rpx
		
	}
	
	.quick_scene_change_setting {
		position: absolute;
		right: 100rpx;
		bottom: 70rpx;
		display: inline-block;
		width: 40rpx;
		height: 50rpx;
		background-image: url(https://s1.ax1x.com/2022/03/17/qPEaPH.png);
		background-repeat: no-repeat;
		background-position: right center; 
		background-size: 40rpx;
	}
	
	.quick_scene_change_setting2 {
		position: absolute;
		right: 100rpx;
		bottom: 130rpx;
		display: inline-block;
		width: 40rpx;
		height: 50rpx;
		background-image: url(https://s1.ax1x.com/2022/05/27/Xm4ST1.png);
		background-repeat: no-repeat;
		background-position: right center; 
		background-size: 40rpx;
	}
</style>
