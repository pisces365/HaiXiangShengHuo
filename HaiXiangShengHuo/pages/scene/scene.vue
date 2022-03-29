<template>
	<view>
		<view class="scene">
			<view class="currentSceneTitle">
				当前场景
			</view>
			<view class="currentScene view-shadow">
				<view class="sceneContent" :style="{backgroundImage:`url(${sceneBgList.morning})`}">
					<view class="scenetitle">
						起床模式
					</view>
					<image class="sceneSettingIcon" src="http://p1362.bvimg.com/10465/0afca5eb8844f722.png" mode="">
					</image>
				</view>
				<view class="currentSubContent">
					<view class="currentSubContent-title">
						<view class="font-bold">当前</view>
						<view class="font-bold">状态</view>
					</view>
					<view class="currentSubContent-content">
						<view class="currentSubContent-content-icon">
							<image src="http://p1362.bvimg.com/10465/f938e5539d1c980b.png" mode=""></image>
						</view>
						<view class="currentSubContent-content-function">
							<view class="currentSubContent-content-function-title font-bold">
								窗帘
							</view>
							<view class="currentSubContent-content-function-condition">
								已开启
							</view>
						</view>
						<view class="currentSubContent-content-icon">
							<image src="http://p1362.bvimg.com/10465/e8db3ea0db2c1353.png" mode=""></image>
						</view>
						<view class="currentSubContent-content-function">
							<view class="currentSubContent-content-function-title font-bold">
								灯光
							</view>
							<view class="currentSubContent-content-function-condition">
								微亮
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="currentSceneTitle otherSceneTopMargin">
				其他场景
				
			</view>
			<view class="sceneContent" :style="{backgroundImage:`url(${sceneBgList.breakfast})`}">
				<view class="scenetitle">
					早餐模式
				</view>
				<image class="sceneSettingIcon" src="http://p1362.bvimg.com/10465/0afca5eb8844f722.png" mode="">
				</image>
			</view>
			<view class="sceneContent" :style="{backgroundImage:`url(${sceneBgList.leavehome})`}">
				<view class="scenetitle">
					离家模式
				</view>
				<image class="sceneSettingIcon" src="http://p1362.bvimg.com/10465/0afca5eb8844f722.png" mode="">
				</image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				sceneBgList:{
					morning:"http://p1362.bvimg.com/10465/5fb2d94ac88274be.png",
					breakfast:"http://p1362.bvimg.com/10465/d9d165162b512299.png",
					leavehome:"http://p1362.bvimg.com/10465/a6e1f16649c40926.png"
				}
			}
		},
		methods: {

		}
	}
</script>

<style>
	.scene {
		padding: 20rpx;
	}

	.currentScene {
		background-color: white;
	}
	.otherSceneTopMargin{
		margin-top: 100rpx;
	}
	.view-shadow{
		box-shadow: 1px 1px 2px 2px rgba(0, 0, 0, 0.1);
	}
	.sceneContent {
		margin-top: 10rpx;
		height: 280rpx;
		background-repeat: no-repeat;
		background-size: 100% 100%;
		border-radius: 10rpx;
		display: flex;
		position: relative;
		overflow: hidden;
		padding: 20rpx;
	}

	.scenetitle {
		color: white;
		font-size: 36rpx;
	}

	.sceneSettingIcon {
		height: 50rpx;
		width: 50rpx;
		position: absolute;
		right: 20rpx;
		top: 20rpx;
		background-image: ;
	}

	.currentSubContent {
		display: flex;
		padding: 20rpx;
	}

	.currentSubContent-content {
		display: flex;
	}

	.currentSubContent-content-icon {
		width: 100rpx;
		height: 100rpx;
		background-color: #34B9C0;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 100rpx;
		margin: 0 20rpx 0 36rpx;
	}

	.currentSubContent-content-icon image {
		width: 60rpx;
		height: 60rpx;
	}
	.font-bold{
		font-weight: bold;
	}
	.currentSubContent-content-function-condition{
		font-size: 28rpx;
	}
</style>
