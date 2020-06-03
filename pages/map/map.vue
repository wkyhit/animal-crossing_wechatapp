<template>
	<view class="content">
		<view class="topBar">
			<u-tabs :list="list" :is-scroll="true" :current="current" @change="changeMap"></u-tabs>
			<u-search placeholder="输入名称可模糊搜索" v-model="keyword" :clearabled="true" shape="round" :show-action="true" action-text="搜索"
			 :animation="true"></u-search>
		</view>

		<!-- 鱼类图鉴列表 -->
		<scroll-view v-show="current==0" class="list" :scroll-y="true" @scrolltolower="getRemainFishInfo">
			<view class="fishAndinsects_view" v-for="(item,index) in fish" :key="index">
				<image class="v_img" :src="item.pic_url"></image>
				<u-cell-group class="cell-group" >
					<u-cell-item :title="item.cn_sname" :arrow="false">
						<view class="item">
							<!-- <p class="name">{{item.name}}</p> -->
							<p class="description">{{item.fish_size}}</p>
							<p class="price">{{item.price}}</p>
							<p></p>
						</view>
						<view class="collection">
							<u-button class="btn_detail" type="primary" size="mini" @click="onClickMoreInfo('fish',item)">详情</u-button>
							<p>已收集</p>
							<u-switch class="sw_button" slot="right-icon" v-model="item.checked"></u-switch>
						</view>
					</u-cell-item>
				</u-cell-group>
			</view>
			<u-divider>鱼类图鉴完</u-divider>
		</scroll-view>
		<!-- 虫类图鉴列表 -->
		<scroll-view v-show="current==1" class="list" :scroll-y="true" @scrolltolower="getRemainInsectInfo">
			<view class="fishAndinsects_view" v-for="(item,index) in insect" :key="index">
				<image class="v_img" :src="item.pic_url"></image>
				<u-cell-group class="cell-group">
					<u-cell-item  :title="item.cn_sname" :arrow="false">
						<view class="item">
							<!-- <p class="name">{{item.name}}</p> -->
							<p class="description">{{item.catch_place}}</p>
							<p class="price">{{item.price}}</p>
							<p></p>
						</view>
						<view class="collection">
							<u-button class="btn_detail" type="primary" size="mini" @click="onClickMoreInfo('insect',item)">详情</u-button>
							<p>已收集</p>
							<u-switch class="sw_button" slot="right-icon" v-model="item.checked"></u-switch>
						</view>
					</u-cell-item>
				</u-cell-group>
			</view>
			<u-divider>虫类图鉴完</u-divider>
		</scroll-view>

		<!-- 化石图鉴列表 -->
		<scroll-view v-show="current==2" class="list" style="margin-top: 150rpx;">
			<view class="artsAndfossil_view" v-for="(item,index) in artWork" :key="index">
				<image class="v_img"></image>
				<u-cell-group class="cell-group">
					<u-cell-item :title="item.name" :arrow="false">
						<view class="item">
							<!-- <p class="name">{{item.name}}</p> -->
							<p class="price">{{item.price}}</p>
							<p></p>
						</view>
						<view class="collection">
							<u-number-box :value="0" @change="valChange"></u-number-box>
						</view>
					</u-cell-item>
				</u-cell-group>
			</view>
			
			<u-divider>化石图鉴完</u-divider>
		</scroll-view>
		<!-- 艺术品图鉴列表 -->
		<scroll-view v-show="current==3" class="list" style="margin-top: 150rpx;">
			<view class="artsAndfossil_view" v-for="(item,index) in artWork" :key="index">
				<image class="v_img"></image>
				<u-cell-group class="cell-group">
					<u-cell-item :title="item.name" :arrow="false">
						<view class="collection">
							<p v-if="item.number>0">(已捐)</p>
							<u-number-box :value="item.number" :min="0" @change="valChange"></u-number-box>
						</view>
					</u-cell-item>
				</u-cell-group>
			</view>
			<u-divider>艺术品图鉴完</u-divider>
		</scroll-view>
		<!-- 村民图鉴 -->
		<scroll-view v-show="current==4" class="list" :scroll-y="true" @scrolltolower="getRemainVillagerInfo">
		<view class="villager_view" v-for="(item,index) in villagers" :key="index" >
			<image class="v_img" :src="item.pic_url"></image>
			<!-- <u-avatar :src="item.pic_url" mode="square" size="large"></u-avatar> -->
			<u-cell-group class="cell-group">
				<u-cell-item  :title="item.cn_sname" :arrow="false" >
					<view class="item" @click="onClickMoreInfo('villager')">
						<!-- <p class="name">{{item.name}}</p> -->
						<p class="description">{{item.race}}</p>
						<p class="price">{{item.birth_month}}月{{item.birth_day}}日</p>
						<p></p>
					</view>
					<view class="collection">
						<p>已入住</p>
						<u-switch class="sw_button" slot="right-icon" v-model="item.checked"></u-switch>
					</view>
				</u-cell-item>
			</u-cell-group>
		</view>
		<u-divider>村民图鉴完</u-divider>
		</scroll-view>
		<!-- diy图鉴 -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current: 0,
				//图鉴类型
				dexType: "fish",
				//详情item
				detailItem:[],
				//已收集
				checked: false,
				list: [{
						name: '鱼类'
					},
					{
						name: '昆虫'
					},
					{
						name: '化石'
					},
					{
						name: '艺术品'
					},
					{
						name: '村民'
					},
					{
						name: 'diy'
					},
					{
						name: '唱片'
					},
					{
						name: '家具'
					},


				],
				current: 0,
				//鱼类信息
				fish: [],
				//鱼类页数
				fishPageNum:1,
				//虫类信息
				insect: [],
				//虫类页数
				insectPageNum:1,
				artWork: [{
						name: "冲浪图",
						number: "1"
					},
					{
						name: "星夜",
						number: "0"
					},
					{
						name: "富春山居图",
						number: "2"
					},
					{
						name: "清明上河图",
						number: "3"
					}
				],
				//化石
				fossil: [{
						name: "暴龙",
						number: "1"
					},
					{
						name: "梁龙",
						number: "1"
					},
					{
						name: "角龙",
						number: "0"
					},
					{
						name: "腕龙",
						number: "3"
					}
				],
				//村民
				villagers: [],
				//村民页数
				villagerPageNum:1,
			};
		},
		methods: {
			//标签页tabs切换事件监听
			changeMap(index) {
				this.current = index;
				if (this.current === 0 && this.fish !== [] && this.fishPageNum <= 8){
					this.getFishInfo();
				}else if(this.current === 1 && this.insect !== [] && this.insectPageNum <= 8){
					this.getInsectInfo()
				}
				if (this.current === 4 && this.villagers !== []){
					this.getVillagerInfo();
				}
			},
			//化石数量变化监听
			valChange(e) {
				console.log('当前值为: ' + e.value)
			},
			// 点击查看图鉴详情
			onClickMoreInfo(dex_type, item) {
				this.dexType = dex_type;
				this.detailItem = item;
				console.log(this.detailItem);
				// console.log(name)
				if (dex_type === "fish") {
					uni.navigateTo({
						url: '/pages/map/mapDetail/mapDetail?dexType=fish&item=' + encodeURIComponent(JSON.stringify(this.detailItem))
					});
				} else if (dex_type === "insect") {
					uni.navigateTo({
						url: '/pages/map/mapDetail/mapDetail?dexType=insect&item=' + encodeURIComponent(JSON.stringify(this.detailItem))
					});
				}
				// console.log("点击了鱼类");

			},
			//获取鱼类信息
			async getFishInfo(){
				const result = await this.$myRequest({
				method: 'GET',
				url: '/fishes/?pagenum=' + this.fishPageNum
				})
				this.fish = [...this.fish,...result.data.results]
				// this.fish = result.data.results;
			},
			// 获取鱼类剩余信息
			getRemainFishInfo(){
				//总共有8页
				if(this.fishPageNum <= 7){
					this.fishPageNum++;
					this.getFishInfo();
					console.log("fish"+this.fishPageNum);
				}

			},
			//获取虫类信息
			async getInsectInfo(){
				const result = await this.$myRequest({
				method: 'GET',
				url: '/insects/?pagenum=' + this.insectPageNum
				})
				this.insect = [...this.insect,...result.data.results]
				// this.insect = result.data.results;
			},
			//获取虫类剩余信息
			getRemainInsectInfo(){
				//总共有8页
				if(this.insectPageNum <= 7){
					this.insectPageNum++;
					this.getInsectInfo();
					console.log("insect"+this.insectPageNum)
				}
				
			}
			,
			//获取村民信息
			async getVillagerInfo() {
				const result = await this.$myRequest({
				method: 'GET',
				url: '/dwellers/?pagenum='+this.villagerPageNum
				})
				this.villagers = [...this.villagers,...result.data.results];
				// this.villagers = result.data.results;
				// console.log("村民"+this.villagers[1].id)
			},
			//获取村民剩余信息
			getRemainVillagerInfo(){
				//总共有40页
				if(this.villagerPageNum <= 39){
					this.villagerPageNum++;
					this.getVillagerInfo();
					console.log("villager"+this.villagerPageNum);
				}
				
			}
		},
		// 监控列表触底
		// onReachBottom() {
		// 	if(this.current === 0){
		// 		this.fishPageNum++;
		// 		this.getFishInfo();
		// 		console.log("fish"+this.fishPageNum)
		// 	}else if(this.current === 1){
		// 		this.insectPageNum++;
		// 		this.getInsectInfo();
		// 		console.log("insect"+this.insectPageNum)
		// 	}
		// },
		onLoad() {
			this.getFishInfo();
		}
	}
</script>

<style scoped lang="scss">
	// 顶部导航栏
	.topBar {
		//保证导航栏滚动时不消失
		position: fixed;
		top: 0;
		z-index: 99;
		width: 100%;
	}
	// 图鉴列表整体样式
	.list {
		height: 1200rpx;
		margin-top: 145rpx;
	}

	// 图鉴单项行样式
	.item {
		// background-color: blue;
		display: flex;
		flex-direction: row;
		justify-content: sapce-between;
		align-items: center;
		// border-radius: 5rpx;
		// border-style: solid;
		// border-color: #dddddd;
		//图鉴单项des样式
		.description {
			// background-color: red;
			flex: 1em;
		}
		//图鉴单项price样式
		.price {
			// background-color: yellow;
			flex: 1em;
		}
	}
	
	.collection {
		display: flex;
		justify-content: flex-end;
		.btn_detail {
			position: absolute;
			left: 0;
			transform: translate(50%);
		}
		
		.sw_button {
			margin-left: 15rpx;
		}
	}

	

	u-number-box {
		margin-left: 25rpx;
	}
	
	// /deep/ .u-cell-box{
	// 	height: 400rpx;
	// 	background-color: blue;
	// }
	
	//鱼类与昆虫样式
	.fishAndinsects_view{
		display: flex;
		justify-content: flex-start;
		align-items: center;
		.v_img{
			margin: 15rpx 15rpx;
			flex: 1;
			max-width: 70rpx;
			max-height: 100rpx;
		}
		.cell-group{
			flex: 4;
		}
	}
	
	//艺术品和化石样式
	.artsAndfossil_view{
		display: flex;
		justify-content: flex-start;
		align-items: center;
		.v_img{
			margin: 15rpx 15rpx;
			flex: 1;
			max-width: 70rpx;
			max-height: 100rpx;
		}
		.cell-group{
			flex: 4;
		}
	}
	//村民图鉴样式
	.villager_view{
		display: flex;
		justify-content: flex-start;
		align-items: center;
		.v_img{
			margin: 15rpx 15rpx;
			max-width: 70rpx;
			max-height: 100rpx;
			// width: 35rpx;
			flex: 1;
		}
		.cell-group{
			flex: 4;
			// background-color: blue;
		}
	}
</style>
