<!-- 鱼类虫类图鉴详情页 -->
<template>
	<view>
		<uni-card class="img_card">
			<view class="detail-img">
				<image class="detail-img1" mode="aspectFit" :src="info.pic_url"></image>
			</view>
		</uni-card>
		<uni-card class="info_card">
			<u-cell-group>
				<u-cell-item icon="edit-pen-fill" title="名称" :arrow="false" :value="info.cn_sname" hover-class="none"></u-cell-item>
				<u-cell-item icon="integral-fill" title="价格" :arrow="false" :value="info.price" hover-class="none"></u-cell-item>
				<u-cell-item icon="hourglass-half-fill" title="出现月份(北半球)" :arrow="false" :value="info.north_month" hover-class="none"></u-cell-item>
				<u-cell-item icon="hourglass-half-fill" title="出现月份(南半球)" :arrow="false" :value="info.south_month" hover-class="none"></u-cell-item>
				<u-cell-item icon="clock-fill" title="时间段" :arrow="false" :value="info.time_show" hover-class="none"></u-cell-item>
				<u-cell-item v-if="dexType === 'fish'" icon="map-fill" title="出现地点" :arrow="false" :value="info.fish_place" hover-class="none"></u-cell-item>
				<u-cell-item v-if="dexType === 'insect'" icon="map-fill" title="出现地点" :arrow="false" :value="info.catch_place" hover-class="none"></u-cell-item>
				<u-cell-item v-if="dexType === 'insect'" icon="map-fill" title="出现天气" :arrow="false" :value="info.catch_weather" hover-class="none"></u-cell-item>
				<u-cell-item v-if="dexType === 'fish'" icon="eye-fill" title="鱼影大小" :arrow="false" :value="info.fish_size" hover-class="none"></u-cell-item>
				<u-cell-item icon="lock-opened-fill" title="解锁条件" :arrow="false" :value="info.unlock_difficulty" hover-class="none"></u-cell-item>
				<u-cell-item icon="tags-fill" title="描述" :arrow="false" :value="info.description" hover-class="none"></u-cell-item>
				<!-- <u-cell-item icon="heart-fill" title="已捕捉" :arrow="false" hover-class="none">
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
				//图鉴类型（鱼、虫）
				dexType:'undefined',
				//半球（n or s)
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
