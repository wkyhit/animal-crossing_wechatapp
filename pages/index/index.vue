<template>
	<view class="content" >
		<uni-nav-bar class="navbar"  background-color="transparent" :shadow="false"	>
			<view slot="right" @click="onClickToMsg">
				<u-icon name="chat" color="#2979ff" size="40"></u-icon>
				<u-badge :is-dot="false" type="warning" count="20" ></u-badge>
			</view>
		</uni-nav-bar>
		<view class="card">
			<!-- <uni-card :is-shadow="true" > -->
					<view class="wrap">
						<u-swiper :list="list"></u-swiper>
					</view>
					<view class="grid_icon">
						<u-grid :col="3" border >
								<navigator url="/pages/mysite/mysite" open-type="switchTab" hover-class="navigator-hover">
										<u-grid-item bg-color="rgba(255,255,255,0.6);">
											<u-icon name="home" :size="46"></u-icon>
											<view class="grid-text">个人护照</view>
										</u-grid-item>   
							    </navigator>
									<!-- <u-grid-item>
										<u-icon name="photo" :size="46"></u-icon>
										<view class="grid-text">个人护照</view>
									</u-grid-item> -->
								<navigator url="/pages/circle_friends/circle_friends"  hover-class="navigator-hover">
									<u-grid-item bg-color="rgba(255,255,255,0.6);">
										<u-icon name="moments" :size="46"></u-icon>
										<view class="grid-text">动森圈</view>
									</u-grid-item>
								</navigator>
								<navigator url="/pages/market/market"  hover-class="navigator-hover">
									<u-grid-item bg-color="rgba(255,255,255,0.6);">
										<u-icon name="shopping-cart" :size="46"></u-icon>
										<view class="grid-text">交易市场</view>
									</u-grid-item>
								</navigator>
								<navigator url="/pages/map/map"  hover-class="navigator-hover" open-type="switchTab">
									<u-grid-item bg-color="rgba(255,255,255,0.6);">
										<u-icon name="photo" :size="46"></u-icon>
										<view class="grid-text">图鉴</view>
									</u-grid-item>
								</navigator>
								<navigator url="/pages/strategy/strategy"  hover-class="navigator-hover">
									<u-grid-item bg-color="rgba(255,255,255,0.6);">
										<u-icon name="eye" :size="46"></u-icon>
										<view class="grid-text">攻略</view>
									</u-grid-item>
								</navigator>
								<navigator url="/pages/turnip-prices/turnip-prices"  hover-class="navigator-hover">
									<u-grid-item bg-color="rgba(255,255,255,0.6);">
										<u-icon name="hourglass" :size="46"></u-icon>
										<view class="grid-text">大头菜预测</view>
									</u-grid-item>
								</navigator>		
						</u-grid>	
									
					</view>
					
			<!-- </uni-card>	 -->
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
						image: '',
						title: '蒹葭苍苍，白露为霜。所谓伊人，在水一方'
					},
					{
						image: '',
						title: '溯洄从之，道阻且长。溯游从之，宛在水中央'
					},
					{
						image: '',
						title: '蒹葭萋萋，白露未晞。所谓伊人，在水之湄'
					}
				],
				imageBase64:''
			
			}
		},
		methods: {
			urlTobase64(url) {
			  const imgData = uni.getFileSystemManager().readFileSync(url, 'base64');
			  const base64 = '' + imgData;
			  return base64;
			},
			//点击导航右上角按钮，转到私信页
			onClickToMsg(){
				uni.navigateTo({
				    url: '/pages/Message/Message'
				});
			},		
		},
		onLoad() {
		}
	}
</script>

<style scoped lang="scss">
	page{
		// background-color: blue;
	// 	background-image: url(../../static/bg/animal_pic.jpg);
	}
	.content{
		position: relative;
		// background-color: rgb(102, 153, 255);
		background: url("https://i0.hdslb.com/bfs/article/1bbad7cad546d3499317ea4607960f7465970140.jpg@1320w_2346h.webp");
		background-size: 750rpx 1200rpx;
		height: 1200rpx;
	}
	.card{
		// box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
		// transition: 0.3s;
		// width: 40%;
		// border-radius: 15px;
		// background-color: blue;
		position: absolute;
		display: flex;
		flex-direction: column;
		width: 680rpx;
		height: 720rpx;
		left: 0;
		top: 0;
		// right: 0;
		// bottom: 0;
		// margin: auto ;
		transform: translate(5%,35%);
	}
	.wrap {
		background-color: rgba(255,255,255,0.7);
		box-shadow: 0 4px 8px 0 rgba(0,0,0,0.3);
		border-radius: 15px;
		padding: 40rpx;
		}
	.grid_icon{
		margin-top: 30rpx;
		background-color: rgba(255,255,255,0.6);
		// height: 100%;
		box-shadow: 0 4px 8px 0 rgba(0,0,0,0.7);
		border-radius: 5px;
	}
	.grid-text {
			font-size: 28rpx;
			margin-top: 4rpx;
			color: $u-type-info;
	}
	.uni-card{
		margin: 20rpx 20rpx;
	}
</style>
