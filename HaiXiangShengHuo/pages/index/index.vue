<template>
	<view class="content">
		<view class="top">
			<view>
				<view class="location">
					{{location}}
				</view>
			</view>
			<view>
				<view class="home_name">
					{{home_name}}
				</view>
				<view class="home_after_arrow">
					
				</view>
			</view>
			<view>
				<view class="temperature">
					{{temperature}}°C {{floor}}F{{room}}
				</view>
			</view>
			<view>
				<view class="weather">
					{{weather}} 湿度{{humidity}}% 空气{{air_condition}}
				</view>
			</view>
		</view>
		
		<view class="quick_scene_change">
			<view class="quick_scene_change_title">
				<view class="quick_scene_change_name">
					快速场景切换
				</view>
				<view class="quick_scene_change_setting" @click="nav_to_gohome()">
					
				</view>
			</view>
			<view>
				<scroll-view scroll-x="true" class="quick_scene_bar">
				  <block v-for="(item, index) in scene" :key="index">
				    <view class="bar" @click="nav_to_gohome()">
						<view class="bar_name">
							{{item.name}}
						</view>
						<view class="bar_sign">
							{{item.sign}}
						</view>
					</view>
				  </block>
				</scroll-view>
			</view>
		</view>
		
		<view class="common_devices">
			<view class="common_devices_title">
				<view class="common_devices_name">
					常用设备
				</view>
				<view class="common_devices_setting" >
					
				</view>
			</view>
			<view>
				
				<view class="Grid">
					<view class="Grid-Item" v-for="item in List" :key="item.id">
						<view class="GStitle">{{ item.title }}</view>
						<view class="position">{{item.floor}}{{item.room}}</view>
						<view class="GSimg"><image class="Image" :src="item.img"></image></view>
						<view class="condition"></view>
						<view class="img"></view>
					</view>
				</view>
				
				
			</view>
		</view>
		
		<view class="common_devices">
			<view class="common_devices_title">
				<view class="common_devices_name">
					安全
				</view>
				<view class="common_devices_setting">
					
				</view>
			</view>
			<view>
				
				<view class="Grid2">
					<view class="Grid-Item" v-for="item in List2" :key="item.id" @click="play(item.src)">
						<view class="GSimg"><image class="Image" :src="item.img"></image></view>
						<view class="GStitle">{{ item.title }}</view>
						<view class="action">
							{{item.action}}
						</view>
					</view>
				</view>
				
				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				location: '杭州',
				home_name: '晓峰之家',
				temperature: 20,
				floor: 1,
				room: '客厅',
				weather: '晴',
				humidity: '60',
				air_condition: '优',
				scene: [
					{
						name: '回家',
						sign: '避风的港湾',
						img: ''
					},
					{
						name: '早餐',
						sign: '吃饱饱添动力',
						img: ''
					},
					{
						name: '离家',
						sign: '开启新的一天',
						img: ''
					},
					{
						name: '早起',
						sign: '开启新的一天',
						img: ''
					},
				],
				List:[
					{id:1,img:'https://s1.ax1x.com/2022/03/17/qPU2uV.jpg',title:'微波炉',floor:'1F',room:'餐厅',condition:true},
					{id:2,img:'https://s1.ax1x.com/2022/05/27/XeAxP0.png',title:'洗衣机',floor:'1F',room:'卫生间',condition:true},
					{id:3,img:'https://s1.ax1x.com/2022/05/27/XeAzGV.png',title:'空调',floor:'1F',room:'客厅',condition:true},
					{id:4,img:'https://s1.ax1x.com/2022/05/27/XeES2T.png',title:'电视机',floor:'1F',room:'客厅',condition:true},
					
				],
				List2:[
					{id:1,img:'https://s1.ax1x.com/2022/03/17/qPBFzj.png',title:'钥匙提醒',action:'立即设置',src:"/static/music/key.mp3"},
					{id:2,img:'https://s1.ax1x.com/2022/03/17/qPBFzj.png',title:'垃圾提醒',action:'立即设置',src:"/static/music/trash.mp3"},
					{id:3,img:'https://s1.ax1x.com/2022/03/17/qPBFzj.png',title:'门锁密码',action:'立即设置',src:""},
					{id:4,img:'https://s1.ax1x.com/2022/03/17/qPBFzj.png',title:'燃气检测',action:'立即设置',src:""},
					
				]
			}
		},
		onLoad() {

		},
		methods: {
			play(src) {
				const innerAudioContext = uni.createInnerAudioContext();
				innerAudioContext.src = src;
				innerAudioContext.play()
			},
			nav_to_gohome() {
				uni.navigateTo({
					url: "../gohome/gohome"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.top {
		background-image: url(https://s1.ax1x.com/2022/03/17/qCjqc4.png);
		background-repeat: no-repeat;
		padding: 40rpx 30rpx;
		height: 500rpx;
	}
	.location {
		padding-left: 40rpx;
		background-image: url(https://s1.ax1x.com/2022/03/17/qP98AA.png);
		background-repeat: no-repeat;
		background-position: left center; 
		background-size: 30rpx;
		margin-top: 20rpx;
		margin-bottom: 20rpx;
	}
	.home_name {
		display: inline-block;
		font-size: 50rpx;
		font-weight: 500;
		margin-top: 20rpx;
		margin-bottom: 20rpx;
	}
	.home_after_arrow {
		display: inline-block;
		width: 30rpx;
		height: 30rpx;
		background-image: url(https://s1.ax1x.com/2022/03/17/qPPTl6.png);
		background-repeat: no-repeat;
		background-position: right center; 
		background-size: 30rpx;
		
	}
	.temperature {
		padding-left: 40rpx;
		background-image: url(https://s1.ax1x.com/2022/03/17/qPit91.png);
		background-repeat: no-repeat;
		background-position: left center; 
		background-size: 30rpx;
		margin-top: 20rpx;
		margin-bottom: 20rpx;
	}
	.weather {
		padding-left: 40rpx;
		background-image: url(https://s1.ax1x.com/2022/03/17/qPFDMV.png);
		background-repeat: no-repeat;
		background-position: left center; 
		background-size: 30rpx;
		margin-top: 20rpx;
		margin-bottom: 20rpx;
	}
	
	.quick_scene_change {
		position: relative;
		margin-top: -180rpx;
		/* padding: 40rpx 30rpx; */
	}
	.quick_scene_change_title {
		padding: 40rpx 30rpx;
		padding-bottom: 0;
	}
	.quick_scene_change_name {
		display: inline;
	}
	.quick_scene_change_setting {
		position: absolute;
		right: 30rpx;
		display: inline-block;
		width: 40rpx;
		height: 50rpx;
		background-image: url(https://s1.ax1x.com/2022/03/17/qPEaPH.png);
		background-repeat: no-repeat;
		background-position: right center; 
		background-size: 40rpx;
	}
	.quick_scene_bar {
	    white-space: nowrap; 
	    width: 100%;
	    height: 160rpx;
	    padding-top: 20rpx;
		padding-bottom: 20rpx;
	    margin: 0 auto;
		padding-left: 30rpx;
	}
	.bar {
		display: inline-block;
		background-color: white;
		padding: 20rpx 30rpx;
		margin-right: 20rpx;
		border-radius: 20rpx;
		padding-right: 100rpx;
		box-shadow: 10rpx 10rpx 30rpx #C8C7CC;
		background-image: url(https://s1.ax1x.com/2022/03/17/qPK66H.png);
		background-repeat: no-repeat;
		background-position: right center; 
		background-size: 80rpx;
	}
	::-webkit-scrollbar{
	    display: none;
	}
	.bar_name {
		font-weight: 600;
		font-size: 32rpx;
		margin-bottom: 20rpx;
	}
	.bar_sign {
		font-weight: 600;
		font-size: 26rpx;
		color: #999999;
	}
	
	
	.common_devices {
		position: relative;
	}
	.common_devices_title {
		padding: 40rpx 30rpx;
		padding-bottom: 0;
	}
	.common_devices_name {
		display: inline;
	}
	.common_devices_setting {
		/* position: absolute;
		right: 30rpx;
		display: inline-block;
		width: 40rpx;
		height: 50rpx;
		background-image: url(https://s1.ax1x.com/2022/03/17/qPEaPH.png);
		background-repeat: no-repeat;
		background-position: right center; 
		background-size: 40rpx; */
	}
	
	
	.Grid {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			align-content: space-between;
			
			padding: 10rpx 0;
			.Grid-Item {
				position: relative;
				width: 47%;
				height: 223rpx;
				text-align: center;
				margin-left: 20rpx;
				margin-bottom: 20rpx;
				box-sizing:border-box;
				border-radius: 20rpx;
				box-shadow: 5rpx 5rpx 20rpx #e4e3e8;
				padding-left: 30rpx;
				.GSimg {
					width: 96rpx;
					height: 96rpx;
					margin-top: 30rpx;
					
					.Image {
						width: 96rpx;
						height: 96rpx;
					}
				}
				.GStitle {
					text-align: left;
					height: 34rpx;
					line-height: 34rpx;
					color: #06121e;
					font-size: 28rpx;
					margin-top: 20rpx;
				}
				.position {
					position: absolute;
					right: 10rpx;
					top: 10rpx;
					font-size: 24rpx;
					background-color: #f4f4f4;
					color: #C0C0C0;
					border-radius: 20rpx;
					padding: 8rpx 10rpx;
				}
				.condition {
					position: absolute;
					right: 10rpx;
					bottom: 80rpx;
					font-size: 28rpx;
					font-weight: 600;
					color: #C0C0C0;
					padding: 8rpx 10rpx;
				}
				.img {
					position: absolute;
					width: 40rpx;
					height: 40rpx;
					right: 20rpx;
					bottom: 30rpx;
					padding: 8rpx 10rpx;
					background-image: url(https://s1.ax1x.com/2022/03/17/qPwFAS.png);
					background-repeat: no-repeat;
					background-position: right center; 
					background-size: 40rpx;
				}
			}
		}
		
	
	.Grid2 {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			align-content: space-between;
			
			padding: 10rpx 0;
			.Grid-Item {
				position: relative;
				width: 30%;
				height: 280rpx;
				text-align: center;
				margin-left: 20rpx;
				margin-bottom: 20rpx;
				box-sizing:border-box;
				border-radius: 20rpx;
				box-shadow: 5rpx 5rpx 20rpx #e4e3e8;
				
				.GSimg {
					width: 96rpx;
					height: 96rpx;
					padding-top: 30rpx;
					margin: 0 auto;
					.Image {
						width: 96rpx;
						height: 96rpx;
					}
				}
				.GStitle {
					text-align: center;
					height: 34rpx;
					line-height: 34rpx;
					color: #06121e;
					font-size: 32rpx;
					margin-top: 20rpx;
					font-weight: 600;
				}
				.action {
					color: #C0C0C0;
					font-size: 24rpx;
					margin-top: 40rpx;
					font-weight: 600;
				}
				
			}
		}
</style>
