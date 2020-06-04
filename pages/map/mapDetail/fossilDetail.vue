//化石图鉴详情页
<template>
	<view>
		<uni-card class="img_card">
			<view class="detail-img">
				<image class="detail-img1" mode="aspectFit" :src="info.pic_url"></image>
			</view>
		</uni-card>
		<uni-card class="info_card">
			<u-cell-group>
				<u-cell-item icon="edit-pen-fill" title="中文名" :arrow="false" :value="info.cn_sname"></u-cell-item>
				<u-cell-item icon="edit-pen-fill" title="英文名" :arrow="false" :value="info.en_name"></u-cell-item>
				<u-cell-item icon="edit-pen-fill" title="日文名" :arrow="false" :value="info.jp_name"></u-cell-item>
				<u-cell-item icon="integral-fill" title="价格" :arrow="false" :value="info.price"></u-cell-item>
				<u-cell-item icon="tags-fill" title="描述" :arrow="false" :value="info.description"></u-cell-item>
				<u-cell-item icon="heart-fill" title="已捕捉" :arrow="false">
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
				//图鉴类型
				dexType:'undefined',
				// 半球（n or s)
				hemisphere:'sh',
				index:0,
				inspectData:'undefined',
				//图鉴详细数据
				info:[]
			};
		},
		onLoad(option){
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
		background-color: blue;
		// height: 50rpx;
	}
	view.detail-img{
	  display: flex;
	  height: 33%;
	  justify-content: center;
	  .detail-img1{
	    max-width: 150rpx;
	    max-height: 150rpx;
	    padding: 2em 4em 0em 4em;
	  }
	}
</style>
