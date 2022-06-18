<template>
	<view class="page">
		<view class="topBar">
			<view class="title">房间</view>
			<view class="addIcon"></view>
		</view>
		<view class="floorBar">
			<view class="floorItems">
				<text v-for="(item,index) in floor" :class="floorSelectedNum==index?'floorItem floorItemSelected':'floorItem'"
					@click="onFloorButtonClick(index)">{{item}}F</text>
			</view>
		</view>
		<view class="roomList">
			<view class="roomItem" v-for="(item,index) in room[floorSelectedNum].roomList" :style="'background-image: url('+item.img+');'">
				<view class="roomItemRightPanel" >
					<view class="roomName">{{item.name}}</view>
					<view class="roomItems">温度 {{item.temperature}}°C</view>
					<view class="roomItems">湿度 {{item.humidity}}%</view>
					<view class="roomItems">设备 {{item.devices}}</view>
					<view class="gotoIcon"></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				floor: ['1', '2', '3', '4'],
				floorSelectedNum: 0,
				room: [{
						roomList: [{
								img: 'https://s1.ax1x.com/2022/03/29/qyHneJ.png',
								name: '厨房',
								temperature: '23',
								humidity: '60',
								devices: '2'
							},
							{
								img: 'https://s1.ax1x.com/2022/03/29/qyHuw9.png',
								name: '客厅',
								temperature: '23',
								humidity: '60',
								devices: '2'
							}
						]
					},
					{

					},
					{

					},
					{

					}
				]
			}
		},
		methods: {
			onFloorButtonClick(index) {
				this.floorSelectedNum = index;
			}
		}
	}
</script>

<style>
	.page {
		margin-top: 50rpx;
	}

	.topBar {
		padding: 10rpx 20rpx;
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
		right: 20rpx;
		top: 10rpx;
	}

	.floorBar {
		padding: 10rpx 20rpx;
		position: relative;
	}

	.floorItems {}

	.floorItem {
		display: inline-block;
		font-size: 36rpx;
		margin-right: 20rpx;
		color: #808080;
	}

	.floorItemSelected {
		color: #34bdd0;
		text-decoration: underline;
	}
	
	.roomItem {
		height: 360rpx;
		/* background-image: url(https://s1.ax1x.com/2022/03/29/qyHuw9.png); */
		background-position: center center;
		background-repeat: no-repeat;
		background-size: 720rpx;
		position: relative;
		border-radius: 30rpx;
		margin-left: 26rpx;
		margin-right: 26rpx;
		margin-top: 30rpx;
	}
	.roomItemRightPanel {
		width: 220rpx;
		height: 360rpx;
		background-color: rgba(0, 0, 0, 0.6);
		border-top-right-radius: 30rpx;
		border-bottom-right-radius: 30rpx;
		position: absolute;
		right: 0;
		color: white;
		padding-left: 30rpx;
	}
	.roomName {
		line-height: 100rpx;
		font-size: 36rpx;
	}
	.roomItems {
		line-height: 50rpx;
		font-size: 28rpx;
	}
	.gotoIcon {
		width: 60rpx;
		height: 60rpx;
		background-image: url(https://s1.ax1x.com/2022/03/29/qyvwDK.png);
		background-position: center center;
		background-size: 60rpx 60rpx;
		background-repeat: no-repeat;
	
		position: absolute;
		right: 10rpx;
		bottom: 20rpx;
	}
	
</style>
