<template>
	<view class="content">
		<view class="nuter">
			<view :class="target==0?'active':''" @click="setIndex" data-index="0">
				动态广场
			</view>
			<view :class="target==1?'active':''" @click="setIndex" data-index="1">
				发布动态
			</view>
		</view>
		<swiper :duration="500" :current="thisindex" :data-index='thisindex' @change="toggle" circular>
			<swiper-item class="swiper-item">
				<!-- 按顺序对应第一个的内容 动态广场 -->
				<view class="trends_square">
					<view class="clr"></view>
					<!-- 动态卡片 -->
					<view class="trends_card" v-for="(item,index) in trends " :key="index">
						<!-- 卡片头部 -->
						<view class="trends_card_head">
							<!-- 用户头像 -->
							<view class="avator">
								{{item.user_name}}
								<view class="clr"></view>
								<!-- <text>{{item.user_name}}</text> -->
								<!-- <image :src="item.user_img"></image> -->
								<!-- <u-avatar :src="item.user_img" mode="square" size="mini"></u-avatar> -->
							</view>
							<!-- 用户名字 -->
							<view class="name">
								{{item.user_name}}
								<view class="clr"></view>
								<!-- <text>{{item.user_name}}</text> -->
							</view>
						</view>
						<view class="clr"></view>
						<!-- 卡片中部内容 -->
						<view class="trends_card_content">
							<view class="content_text">
								
							</view>
							<view class="content_img">
								<view class="content_img1">
									<image></image>
								</view>
							</view>
						</view>
					</view>
					<view class="clr"></view>
				</view>
			</swiper-item>
			
			<swiper-item class="swiper-item">
				<!-- 按顺序对应第二个的内容 -->
				2222222
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 当前样式
				target: 0,
				// 当前item位置
				thisindex: 0,
				//动态的数据
				trends:[{user_img:"http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg",user_name:"wky"},{}],
			};
		},
		methods: {
			// 切换触发的事件
			toggle(e) {
				let index = e.detail.current
				this.target = index
			},
			// 点击nav控制下面的展示
			setIndex(e) {
				let index = e.currentTarget.dataset.index
				this.thisindex = index
			},
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #9fc8cc;
	}
	.nuter {
		width: 100%;
		height: 80rpx;
		line-height: 80rpx;
		display: flex;
		justify-content: space-around;
		font-size: 35rpx;
	}
	.nuter view {
		flex: 1;
		font-size: 30rpx;
		text-align: center;
		transition: all 0.5s ease .1s;
		background-color: #f7f7f7;
	}

	.active {
		box-sizing: border-box;
		color: #007AFF;
		border-bottom: 5rpx solid #00aaff;
		background-color: #f3ffff;
		border-radius: 10rpx;
		box-shadow: 3px 3px 5px #888888;
	}

	swiper {
		height: 80vh;
		// height: 100%;
		width: 100%;
		overflow: hidden;
		text-align: center;
		line-height: 300rpx;
		/* background-color: red; */
	}

	.swiper-item {
		overflow-y: scroll;
		width: 99.5%;
		height: 99%;
		/* background-color: white; */
		/* height: 99%; */
		box-sizing: border-box;
		padding: 1rpx;
	}
	//动态广场
	.trends_square{
		margin-top: 60rpx;
		height:100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		// background-color: red;
		// 动态卡片
		.trends_card{
			margin-top: 55rpx;
			width: 600rpx;
			height: 500rpx;
			background-color: blue;
			// 卡片头部
			.trends_card_head{
				width: 100%;
				height: 100rpx;
				display: flex;
				justify-content: flex-start;
				background-color: red;
				.avator{
					height: 100%;
					flex: 1;
					background-color: yellow;
					display: flex;
					justify-content: space-evenly;
					// flex: 1;
					// margin: 10rpx;
					// height: 75rpx;
					// width: 75rpx;
				}
				.name{
					background-color: green;
					height: 100%;
					flex: 1;
					display: flex;
					justify-content: space-evenly;
				}
			}
			// 卡片内容中部
			.trends_card_content{
				width: 100%;
				height: 380rpx;
				// background-color: yellow;
				// 文字内容
				.content_text{
					width: 100%;
					height: 150rpx;
					// background-color: black;
				}
				// 图片内容
				.content_img{
					width: 100%;
					height: 220rpx;
					// background-color: green;
				}
				
			}
		}
	}
	.clr{
		 clear:both;
		 font-size:0;
	}
</style>
