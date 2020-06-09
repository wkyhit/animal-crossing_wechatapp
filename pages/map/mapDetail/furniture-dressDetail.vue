//家具、服装图鉴详情页
<template>
	<view>
		<uni-card class="img_card">
			<view class="detail-img">
				<image class="detail-img1" mode="aspectFit" :src="info.pic_url"></image>
			</view>
		</uni-card>
		<uni-card class="info_card">
			<u-cell-group>
				<u-cell-item icon="edit-pen-fill"  title="名称" :arrow="false" :value="info.cn_sname" hover-class="none"></u-cell-item>
				<u-cell-item icon="edit-pen-fill" title="英文名" :arrow="false" :value="info.en_name" hover-class="none"></u-cell-item>
				<u-cell-item icon="edit-pen-fill" v-if="dexType === 'dress'" title="类型" :arrow="false" :value="info.cloth_type" hover-class="none"></u-cell-item>
				<u-cell-item icon="edit-pen-fill" v-if="dexType === 'dress'" title="服装颜色" :arrow="false" :value="info.main_color" hover-class="none"></u-cell-item>
				<u-cell-item icon="edit-pen-fill" v-if="dexType === 'dress'" title="服装风格" :arrow="false" :value="info.cloth_style" hover-class="none"></u-cell-item>
				<u-cell-item icon="edit-pen-fill" v-if="dexType === 'furniture'" title="款式" :arrow="false" :value="info.color" hover-class="none"></u-cell-item>
				<u-cell-item icon="edit-pen-fill" v-if="dexType === 'furniture'" title="分类" :arrow="false" :value="info.category" hover-class="none"></u-cell-item>
				<u-cell-item icon="tags-fill" title="获取途径"  :arrow="false" :value="info.obtain_way" hover-class="none"></u-cell-item>
				<u-cell-item icon="integral-fill" v-if="info.buy_price !== 0" title="买入价格" :arrow="false" :value="info.buy_price" hover-class="none"></u-cell-item>
				<!-- <u-cell-item icon="heart-fill" title="已有" :arrow="false" hover-class="none">
					<u-switch slot="right-icon" v-model="catched"></u-switch>
				</u-cell-item> -->
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
		// background-color: blue;
		// height: 50rpx;
		.detail-img{
		  display: flex;
		  height: 33%;
		  justify-content: center;
		  .detail-img1{
		    max-width: 150rpx;
		    max-height: 150rpx;
		    padding: 2em 4em 0em 4em;
		  }
		}
	}
	
</style>
