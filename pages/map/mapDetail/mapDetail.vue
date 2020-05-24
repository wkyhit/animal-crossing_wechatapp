<template>
	<view>
		<uni-card class="img_card">
			<view class="detail-img">
				<image class="detail-img" mode="aspectFit" :src="inspectData.imgSource"></image>
			</view>
		</uni-card>
		<uni-card class="info_card">
			<u-cell-group>
				<u-cell-item icon="setting-fill" title="名称" :arrow="false" value="白斑狗鱼"></u-cell-item>
				<u-cell-item icon="integral-fill" title="价格" :arrow="false" value="3000"></u-cell-item>
				<u-cell-item icon="integral-fill" title="出现月份" :arrow="false"></u-cell-item>
				<u-cell-item icon="integral-fill" title="时间段" :arrow="false"></u-cell-item>
				<u-cell-item icon="integral-fill" title="出现地点" :arrow="false"></u-cell-item>
				<u-cell-item icon="integral-fill" title="价格" :arrow="false"></u-cell-item>
				<u-cell-item icon="integral-fill" title="鱼影大小" :arrow="false"></u-cell-item>
				<u-cell-item icon="integral-fill" title="已捕捉" :arrow="false">
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
				// 已捕捉
				catched:false,
				//图鉴类型（鱼、虫）
				dexType:'undefined',
				//半球（n or s)
				hemisphere:'sh',
				index:0,
				inspectData:'undefined',
			};
		}
	}
</script>

<style lang="scss">
	.img_card{
		width: 100%;
		height: 50rpx;
	}
	view.detail-img{
	  display: flex;
	  height: 33%;
	  justify-content: center;
	}
	img.detail-img{
	  width: 128px;
	  height: 128px;
	  padding: 2em 4em 0em 4em;
	}
</style>
