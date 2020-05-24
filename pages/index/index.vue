<template>
	<view class="content">
		<uni-nav-bar left-icon="back" left-text="返回" right-text="菜单" title="导航栏组件"></uni-nav-bar>
		<view class="card">
			<uni-card >
					<view class="wrap">
						<u-swiper :list="list"></u-swiper>
					</view>
					<u-grid :col="3" border >
							<navigator url="/pages/mysite/mysite" open-type="switchTab" hover-class="navigator-hover">
						        <u-grid-item>
						        	<u-icon name="photo" :size="46"></u-icon>
						        	<view class="grid-text">个人护照</view>
						        </u-grid-item>           
						    </navigator>
								<!-- <u-grid-item>
									<u-icon name="photo" :size="46"></u-icon>
									<view class="grid-text">个人护照</view>
								</u-grid-item> -->
							<navigator url="/pages/mysite/mysite"  hover-class="navigator-hover">
								<u-grid-item>
									<u-icon name="lock" :size="46"></u-icon>
									<view class="grid-text">动森圈</view>
								</u-grid-item>
							</navigator>
							<navigator url="/pages/mysite/mysite"  hover-class="navigator-hover">
								<u-grid-item>
									<u-icon name="hourglass" :size="46"></u-icon>
									<view class="grid-text">交易市场</view>
								</u-grid-item>
							</navigator>
							<navigator url="/pages/mysite/mysite"  hover-class="navigator-hover">
								<u-grid-item>
									<u-icon name="hourglass" :size="46"></u-icon>
									<view class="grid-text">图鉴</view>
								</u-grid-item>
							</navigator>
							<navigator url="/pages/mysite/mysite"  hover-class="navigator-hover">
								<u-grid-item>
									<u-icon name="hourglass" :size="46"></u-icon>
									<view class="grid-text">攻略</view>
								</u-grid-item>
							</navigator>
							<navigator url="/pages/radishPrice/radishPrice"  hover-class="navigator-hover">
								<u-grid-item>
									<u-icon name="hourglass" :size="46"></u-icon>
									<view class="grid-text">大头菜预测</view>
								</u-grid-item>
							</navigator>		
					</u-grid>	
				</uni-card>	
			
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
				]
			}
		},
		methods: {

		}
	}
</script>

<style scoped lang="scss">
	.content{
		position: relative;
		background-color: rgb(102, 153, 255);
		height: 1200rpx;
	}
	.card{
		position: absolute;
		width: 750rpx;
		height: 900rpx;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		margin: auto;
	}
	.grid-text {
			font-size: 28rpx;
			margin-top: 4rpx;
			color: $u-type-info;
		}
	.wrap {
			padding: 40rpx;
		}
	.uni-card{
		margin: 20rpx 20rpx;
	}
</style>
