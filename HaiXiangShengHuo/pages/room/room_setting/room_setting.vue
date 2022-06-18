<template>
	<view class="page">
		<view class="main">
			<view class="setting">
				<view class="topBar">
					<view class="title">房间</view>
					<view class="addIcon"></view>
				</view>
				<view>
					<scroll-view scroll-x="true" class="quick_scene_bar">
					  <block v-for="(item, index) in scene" :key="index">
					    <view class="bar">
							<view class="bar_sign">
								{{item.sign}}
							</view>
						</view>
					  </block>
					</scroll-view>
				</view>
				<view class="temperatureChange">
					<text>-</text>
					<text>32°C</text>
					<text>+</text>
				</view>
				<view>
					<view>
						<scroll-view class="quick_scene_bar" style="margin: 0 auto; width: 600rpx;">
						  <block v-for="(item, index) in buttonGroup1" :key="index">
						    <view class="bar">
								<view class="bar_sign">
									{{item.sign}}
								</view>
							</view>
						  </block>
						</scroll-view>
					</view>
					<view>
						<scroll-view class="quick_scene_bar" style="margin: 0 auto; width: 600rpx;">
						  <block v-for="(item, index) in buttonGroup1" :key="index">
						    <view class="bar">
								<view class="bar_sign">
									{{item.sign}}
								</view>
							</view>
						  </block>
						</scroll-view>
					</view>
				</view>
				<view class="button">
					<button>开启设备</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scene: [
					{
						sign: '空调',
						img: ''
					},
					{
						sign: '洗衣机',
						img: ''
					},
					{
						sign: '冰箱',
						img: ''
					},
					{
						sign: '热水器',
						img: ''
					},
					{
						sign: '冰箱',
						img: ''
					},
					{
						sign: '冰箱',
						img: ''
					},
				],
				buttonGroup1: [
					{
						sign: '空调',
						img: ''
					},
					{
						sign: '洗衣机',
						img: ''
					},
					{
						sign: '冰箱',
						img: ''
					},
					{
						sign: '热水器',
						img: ''
					}
				],
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.page {
		background-image: url(https://s1.ax1x.com/2022/03/29/q6ifA0.png);
		background-position: center top;
		background-repeat: no-repeat;
		background-size: 800rpx;
	}
	.main {
		padding-top: 300rpx;
	}
	.setting {
		margin: 0rpx 30rpx;
		/* height: 600rpx; */
		padding-bottom: 200rpx;
		background-color: white;
		border-radius: 30rpx;
		box-shadow: 10rpx 5rpx 20rpx #C0C0C0;
	}
	
	.topBar {
		padding: 30rpx 50rpx;
		position: relative;
	}
	
	.title {
		font-size: 44rpx;
		font-weight: bold;
	}
	
	.addIcon {
		width: 60rpx;
		height: 60rpx;
		background-image: url(https://s1.ax1x.com/2022/03/29/qyWTyR.png);
		background-position: center center;
		background-size: 60rpx 60rpx;
		background-repeat: no-repeat;
	
		position: absolute;
		right: 50rpx;
		top: 30rpx;
	}
	
	.quick_scene_bar {
	    white-space: nowrap; 
	    /* width: 100%; */
	    height: 160rpx;
	    padding-top: 20rpx;
		padding-bottom: 20rpx;
	    /* margin: 0 auto; */
		padding-left: 0rpx;
		margin-right: 50rpx;
	}
	.bar {
		display: inline-block;
		background-color: rgba (0, 0, 0, 0);
		padding: 20rpx 30rpx;
		margin-right: 20rpx;
		border-radius: 20rpx;
		padding-top: 100rpx;
		/* box-shadow: 10rpx 10rpx 30rpx #C8C7CC; */
		background-image: url(https://s1.ax1x.com/2022/03/29/q6Zkfx.png);
		background-repeat: no-repeat;
		background-position: center 10rpx;
		background-size: 80rpx;
	}
	::-webkit-scrollbar{
	    display: none;
	}
	
	.bar_sign {
		/* font-weight: 600; */
		font-size: 26rpx;
		color: #999999;
	}
	
	.temperatureChange {
		width: 340rpx;
		margin: 0 auto;
	}
	.temperatureChange > text {
		font-size: 64rpx;
		display: inline-block;
		margin: 20rpx;
	}
	
	.button button {
		width: 300rpx;
		background-color: #34b9c0;
		color: white;
		border-radius: 30rpx;
	}
</style>
