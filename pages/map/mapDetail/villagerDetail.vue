//村民图鉴详情页
<template>
	<view>
		<uni-card class="img_card">
			<view class="detail-img">
				<image class="detail-img1" mode="aspectFit" :src="info.pic_url"></image>
			</view>
			<text>Amiibo:{{info.amiibo}}</text>
		</uni-card>
		<uni-card class="info_card">
			<u-cell-group>
				<u-cell-item icon="edit-pen-fill" :arrow="false" hover-class="none">
					<view slot="title">
						<text>{{info.cn_sname}}</text>
					</view>
					<view slot="right-icon">
						<!-- <text>{{info.amiibo}}(Amiibo)</text> -->
						<text>{{info.en_name}}(英)</text>
						<text>{{info.jp_name}}(日)</text>
					</view>
				</u-cell-item>
				<!-- <u-cell-item icon="edit-pen-fill" title="英文名" :arrow="false" :value="info.en_name"></u-cell-item> -->
				<!-- <u-cell-item icon="edit-pen-fill" title="日文名" :arrow="false" :value="info.jp_name"></u-cell-item> -->
				<u-cell-item icon="integral-fill" title="生日" :arrow="false" hover-class="none" :value="info.birth_month+'月'+info.birth_day+'日'"></u-cell-item>
				<u-cell-item icon="tags-fill" title="种族" :arrow="false" :value="info.race" hover-class="none"></u-cell-item>
				<u-cell-item icon="tags-fill" title="性格" :arrow="false" :value="info.personality" hover-class="none"></u-cell-item>
				<u-cell-item icon="tags-fill" title="口头禅" :arrow="false" :value="info.phrase" hover-class="none"></u-cell-item>
				<u-cell-item icon="tags-fill" title="座右铭" :arrow="false" :value="info.bio" hover-class="none"></u-cell-item>
				<u-cell-item icon="tags-fill" title="爱好" :arrow="false" :value="info.hobby" hover-class="none"></u-cell-item>
				<u-cell-item icon="tags-fill" title="喜欢的颜色" :arrow="false" :value="info.fav_color_show" hover-class="none"></u-cell-item>
				<u-cell-item icon="tags-fill" title="喜欢的服装风格" :arrow="false" :value="info.fav_style_show" hover-class="none"></u-cell-item>
				<u-cell-item icon="tags-fill" title="喜欢的唱片" :arrow="false" :value="info.fav_album" hover-class="none"></u-cell-item>
				<!-- <u-cell-item icon="heart-fill" title="已入住" :arrow="false" hover-class="none">
					<u-switch slot="right-icon" v-model="catched"></u-switch>
				</u-cell-item> -->
			</u-cell-group>
		</uni-card>
		<uni-card class="houseInfo_card">
			<view class="house_img">
				<image class="house_outside" mode="aspectFit" :src="info.house_pic_url"></image>
			</view>
			<view class="in_house_img">
				<image class="house_inside" mode="aspectFit" :src="info.in_house_pic_url"></image>
			</view>
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
				// hemisphere:'sh',
				// index:0,
				// inspectData:'undefined',
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
	.houseInfo_card{
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		.house_img{
			padding: 20rpx;
			flex: 1;
			width: 100%;
			height: 360rpx;
			.house_outside{
				width: 100%;
				height: 100%;
			}
		}
		.in_house_img{
			padding: 20rpx;
			flex: 1;
			width: 100%;
			height: 360rpx;
			.house_inside{
				width: 100%;
				height: 100%;
			}
		}
	}
	
</style>
