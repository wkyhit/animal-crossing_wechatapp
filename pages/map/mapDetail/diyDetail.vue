//diy图鉴详情页
<template>
	<view>
		<uni-card class="img_card">
			<view class="detail-img">
				<image class="detail-img1" mode="aspectFit" :src="info.pic_url"></image>
			</view>
		</uni-card>
		<uni-card class="info_card">
			<u-cell-group>
				<u-cell-item icon="edit-pen-fill" :arrow="false">
					<view slot="title">
						<text>{{info.cn_sname}}</text>
					</view>
					<view slot="right-icon">
						<!-- <text>{{info.amiibo}}(Amiibo)</text> -->
						<view>
							<text>{{info.en_name}}(英)</text>
						</view>
						<view>
							<text>{{info.jp_name}}(日)</text>
						</view>
					</view>
				</u-cell-item>
				<u-cell-item icon="edit-pen-fill"  title="获取方式" :arrow="false">
					<view class="how_to_get" style="text-align: left;">
						<text>{{info.how_to_get_formula}}</text>
					</view>
				</u-cell-item>
				<u-cell-item icon="edit-pen-fill"  title="素材需求" :arrow="false" :value="info.required_material"></u-cell-item>
				<u-cell-item icon="heart-fill" title="已有" :arrow="false">
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
	.how_to_get{
		padding-left: 20rpx;
	}
	
</style>
