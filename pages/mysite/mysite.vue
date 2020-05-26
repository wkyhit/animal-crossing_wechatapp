<template>
	<view class="content">
		<view class="info_card">
			<view class="info_card_top">
				<view class="portrait">
					<u-avatar :src="portraitsrc" mode="square" size="large"></u-avatar>
				</view>
				<view class="info_card_top_right">
					<view class="info_card_top_right_first">
						<text style="margin: 0rpx;">岛名: </text>
						<text>半球: </text>
						<text>游戏名: </text>
					</view>
					<view class="info_card_top_right_second">
						<text>SW: </text>
					</view>
					<view class="info_card_top_right_third">
						<text style="margin: 0rpx;">个性签名: </text>
						<text>性别: </text>
					</view>
				</view>
			</view>
			<view class="info_card_bottom">
				<text>点赞</text>
				<text>被关注</text>
				<text>关注</text>
				<text>上岛时间</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				portraitsrc:"http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg",
			};
		}
	}
</script>

<style lang="scss">
	page{
		background-image: url("https://i0.hdslb.com/bfs/article/1bbad7cad546d3499317ea4607960f7465970140.jpg@1320w_2346h.webp");
		background-size: 750rpx 1200rpx;
	}
	.content{
		position: relative;
		background-color: blue;
		// height: 100%;
	}
	.info_card{
		// position: absolute;
		height: 400rpx;
		width: 680rpx;
		background-color: rgba(255, 255, 255, 0.7);
		box-shadow: 0 4px 8px 0 rgba(0,0,0,0.3);
		border-radius: 15px;
		margin: auto;
		display: flex;
		flex-direction: column;
		padding: 15rpx;
		.info_card_top{
			background-color: red;
			height: 350rpx;
			width: 100%;
			padding: 15rpx;
			display: flex;
			justify-content: flex-start;
			.portrait{
				// float: left;
				flex: 1;
			}
			.info_card_top_right{
				flex: 2;
				.info_card_top_right_first{
					display: flex;
					justify-content: flex-start;
					margin-bottom: 20rpx;
					text{
						margin-left: 30rpx;
					}
				}
				.info_card_top_right_second{
					margin-bottom: 20rpx;
				}
				.info_card_top_right_third{
					display: flex;
					justify-content: flex-start;
					text{
						margin-left: 30rpx ;
					}
				}
			}
		}
		.info_card_bottom{
			height: 100rpx;
			width: 100%;
			background-color: yellow;
		}
	}
</style>
