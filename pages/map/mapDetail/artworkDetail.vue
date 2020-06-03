<template>
	<view>
		<uni-card class="img_card">
			<view class="detail-img">
				<view class="detail-real">
					<image class="real-img" mode="aspectFit" :src="info.true_pic_url"></image>
				</view>
				<view class="detail-fake" v-if="info.fake_pic_url !== '' " >
					<image class="fake-img" mode="aspectFit" :src="info.fake_pic_url"></image>
				</view>
				
				
			</view>
			<view class="fakeDes">
				<text>{{info.fake_desc}}</text>
			</view>
		</uni-card>
		<uni-card class="info_card">
			<u-cell-group>
				<u-cell-item icon="edit-pen-fill" title="名称:" :arrow="false" :value="info.cn_sname"></u-cell-item>
				<u-cell-item icon="edit-pen-fill" title="原名:" :arrow="false" :value="info.real_name"></u-cell-item>
				<u-cell-item icon="integral-fill" title="买入价" :arrow="false" :value="info.buy_price"></u-cell-item>
				<u-cell-item icon="integral-fill" title="大小" :arrow="false" :value="info.size"></u-cell-item>
				<u-cell-item icon="tags-fill" title="描述" :arrow="false" :value="info.tips"></u-cell-item>
				<u-cell-item icon="heart-fill" title="已拥有" :arrow="false">
					<u-switch slot="right-icon" v-model="catched"></u-switch>
				</u-cell-item>
			</u-cell-group>
		</uni-card>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//图鉴类型（化石）
				dexType:'undefined',
				//图鉴详细数据
				info:[]
			};
		},
		onLoad(option) {
			//接收从列表页传来的图鉴类型
			this.dexType = option.dexType;
			console.log("详情页图鉴类型："+this.dexType)
			//接收从列表页传过来的详细信息
			this.info = JSON.parse(decodeURIComponent(option.item));
		}
	}
</script>

<style lang="scss">
	.img_card{
		width: 100%;
		display: flex;
		flex-direction: column;
		align-content: space-between;
		// background-color: blue;
		// height: 50rpx;
		.detail-img{
		  display: flex;
		  height: 400rpx;
		  width: 100%;
		  // height: 33%;
		  justify-content: space-evenly;
		  // align-content: space-between;
		  .detail-fake{
			width: 360rpx;
			height: 360rpx;
		    // max-width: 100%;
		    // max-height: 100%;
		    // padding: 2em 4em 0em 4em;
			.fake-img{
				width: 100%;
				height: 100%;
				// max-width: 100%;
				// max-height: 100%;
			}
		  }
		  .detail-real{
			  width: 360rpx;
			  height: 360rpx;
		    // max-width: 100%;
		    // max-height: 100%;
		    // padding: 2em 4em 0em 4em;
			.real-img{
				width: 100%;
				height: 100%;
				// max-width: 100%;
				// max-height: 100%;
			}
		  }
		}
		.fakeDes{
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
	
</style>
