<template>
	<view>
		<view class="topBar">
			<u-search placeholder="输入名称可模糊搜索" v-model="keyword" :clearabled="true" shape="round" :show-action="true" action-text="搜索" :animation="true"></u-search>
		</view>
		<scroll-view class="list">
			<view class="strate_item" v-for="(item,index) in strateForm" :key="index">
				<u-card :title="item.title" :sub-title="item.time" :foot-border-top="false" padding="15" @click="toStrateDetail">
					<view class="strate_card_body" slot="body">
						<view class="u-body-item u-flex u-border-bottom u-col-between u-p-t-0">
							<view class="u-body-item-title u-line-2">{{item.des}}</view>
							<image :src="item.pic" mode="aspectFill"></image>
						</view>
					</view>
					<view class="card_foot" slot="foot"><u-icon name="chat-fill" size="34" :label="item.comment+'评论'"></u-icon></view>
				</u-card>
			</view>
		</scroll-view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//搜索关键词
				keyword:"",
				//攻略数据
				strateForm:[{title:"攻略1",time:"2020-05-15",pic:"https://img11.360buyimg.com/n7/jfs/t1/94448/29/2734/524808/5dd4cc16E990dfb6b/59c256f85a8c3757.jpg",des:"动物之森花卉种植blablablablablabla",comment:"31"},
				{title:"攻略2",time:"2020-05-15",pic:"https://img11.360buyimg.com/n7/jfs/t1/94448/29/2734/524808/5dd4cc16E990dfb6b/59c256f85a8c3757.jpg",des:"动物之森花卉种植blablablablablabla",comment:"39"},
				{title:"攻略3",time:"2020-05-15",pic:"https://img11.360buyimg.com/n7/jfs/t1/94448/29/2734/524808/5dd4cc16E990dfb6b/59c256f85a8c3757.jpg",des:"动物之森花卉种植blablablablablabla",comment:"12"},
				{title:"攻略4",time:"2020-05-15",pic:"https://img11.360buyimg.com/n7/jfs/t1/94448/29/2734/524808/5dd4cc16E990dfb6b/59c256f85a8c3757.jpg",des:"动物之森花卉种植blablablablablabla",comment:"35"},
				{title:"攻略5",time:"2020-05-15",pic:"https://img11.360buyimg.com/n7/jfs/t1/94448/29/2734/524808/5dd4cc16E990dfb6b/59c256f85a8c3757.jpg",des:"动物之森花卉种植blablablablablabla",comment:"67"}],
			};
		},
		methods:{
			toStrateDetail(){
				uni.navigateTo({
					url:'strategy_detail/strategy_detail'
				})
			}
		}
	}
</script>

<style lang="scss">
	
	page{
		background-size: 750rpx 1200rpx;
		background: url("https://i0.hdslb.com/bfs/article/1bbad7cad546d3499317ea4607960f7465970140.jpg@1320w_2346h.webp");
	}
	//顶部导航栏固定
	.topBar{
		position: fixed;
		top: 0;
		z-index: 99;
		width: 100%;
	}
	//列表
	.list{
		margin-top: 55rpx;
	}
	.strate_item{
		
	}
	.u-card-wrap { 
			background-color: $u-bg-color;
			padding: 1px;
	}
	.u-body-item {
		font-size: 32rpx;
		color: #333;
		padding: 20rpx 10rpx;
	}
	.u-body-item image {
		width: 120rpx;
		flex: 0 0 120rpx;
		height: 120rpx;
		border-radius: 8rpx;
		margin-left: 12rpx;
	}
	.card_foot{
		height: 60rpx;
	}
</style>
