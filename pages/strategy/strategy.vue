<template>
	<view>
		<view class="topBar">
			<u-search placeholder="输入名称可模糊搜索" v-model="keyword" :clearabled="true" shape="round" :show-action="true" action-text="搜索" :animation="true"></u-search>
		</view>
		<scroll-view class="list" :scroll-y="true" @scrolltolower="getRemainStrategy">
			<view class="strate_item" v-for="(item,index) in strateForm" :key="index">
				<u-card :title="item.title" :sub-title="item.time" :foot-border-top="false" padding="15" @click="toStrateDetail(item.url)">
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
				strateForm:[
				{title:"攻略1",time:"2020-05-15",pic:"https://patchwiki.biligame.com/images/dongsen/7/79/qq0phfba4gynbnekdpjh2kl1t8j46dm.jpg",des:"初上手小技巧&玩法，都是干货哦",comment:"31",url:"https://wiki.biligame.com/dongsen/%E5%88%9D%E4%B8%8A%E6%89%8B%E5%B0%8F%E6%8A%80%E5%B7%A7%26%E7%8E%A9%E6%B3%95%EF%BC%8C%E9%83%BD%E6%98%AF%E5%B9%B2%E8%B4%A7%E5%93%A6"},
				{title:"攻略2",time:"2020-05-15",pic:"https://patchwiki.biligame.com/images/dongsen/4/41/2m4lipjkgq3b33rfgh1ymbfds0d961d.jpg",des:"《集合啦！动物森友会》K.K.音乐合集",comment:"39",url:"https://wiki.biligame.com/dongsen/%E3%80%90%E9%9F%B3%E4%B9%90%E3%80%91%E3%80%8A%E9%9B%86%E5%90%88%E5%95%A6%EF%BC%81%E5%8A%A8%E7%89%A9%E6%A3%AE%E5%8F%8B%E4%BC%9A%E3%80%8BK.K.%E9%9F%B3%E4%B9%90%E5%90%88%E9%9B%86"},
				{title:"攻略3",time:"2020-05-15",pic:"https://patchwiki.biligame.com/images/dongsen/5/50/27ijtf0afp5h4m5tpxayjudupdum8yq.jpg",des:"你需要知道的10件事！兔岛主的经验分享「一」",comment:"12",url:"https://wiki.biligame.com/dongsen/%E4%BD%A0%E9%9C%80%E8%A6%81%E7%9F%A5%E9%81%93%E7%9A%8410%E4%BB%B6%E4%BA%8B%EF%BC%81%E5%85%94%E5%B2%9B%E4%B8%BB%E7%9A%84%E7%BB%8F%E9%AA%8C%E5%88%86%E4%BA%AB%E3%80%8C%E4%B8%80%E3%80%8D"},
				{title:"攻略4",time:"2020-05-15",pic:"https://patchwiki.biligame.com/images/dongsen/a/ab/f4agw4bhcsptpf76xbsqse47x5f8icn.jpg",des:"五一旅行券迷宫经验分享",comment:"35",url:"https://wiki.biligame.com/dongsen/%E4%BA%94%E4%B8%80%E6%97%85%E8%A1%8C%E5%88%B8%E8%BF%B7%E5%AE%AB%E7%BB%8F%E9%AA%8C%E5%88%86%E4%BA%AB"},
				],
				guidePageNum:1,
				guidesCount:1,
				guides:[],
				
			};
		},
		methods:{
			toStrateDetail(url){
				uni.navigateTo({
					url:'strategy_detail/strategy_detail?weburl='+ url
				})
			},
			// 获取攻略
			async getStrategy(){
				const jwt = uni.getStorageSync("skey");
				const head = {
					'Authorization': "Bearer " + jwt
				};
				const result = await this.$myRequest({
					method: 'GET',
					url: '/guides/?pagenum=' + this.guidePageNum,
					header: head,
				})
				this.guides = [...this.guides,...result.data.results]
				this.guidesCount = result.data.count
			},
			// 获取剩余攻略
			getRemainStrategy(){
				if(this.guidePageNum <= (this.guidesCount-1)/10 ){
					this.guidePageNum++;
					this.getStrategy();
				}
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
		height: 1200rpx;
	}
	.strate_item{
		
	}
	.u-card-wrap { 
			background-color: $u-bg-color;
			padding: 1px;
	}
	.u-body-item {
		// display: flex;
		font-size: 32rpx;
		color: #333;
		padding: 20rpx 10rpx;
	}
	.u-body-item image {
		width: 120rpx;
		// justify-self: flex-end;
		flex: 0 0 120rpx;
		height: 120rpx;
		border-radius: 8rpx;
		margin-left: 12rpx;
	}
	.card_foot{
		height: 60rpx;
	}
</style>
