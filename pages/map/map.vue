<template>
	<view class="content">
		<u-tabs :list="list" :is-scroll="false" :current="current" @change="changeMap"></u-tabs>
		<u-search placeholder="输入名称可模糊搜索" v-model="keyword" :clearabled="true" shape="round" :show-action="true" action-text="搜索" :animation="true"></u-search>
		<!-- 鱼类图鉴列表 -->
		<scroll-view  v-if="current==0" class="list">
			<u-cell-group v-for="(item,index) in dataList" :key="index">
				<u-cell-item  icon="setting-fill" :title="item.name" :arrow="false" >
					<view class="item">
						<!-- <p class="name">{{item.name}}</p> -->
						<p class="description">{{item.des}}</p>	
						<p class="price">{{item.price}}</p>
						<p></p>
					</view>
					<view class="collection">
						<u-button class="btn_detail" type="primary" size="mini" @click="onClickMoreInfo('bug')">详情</u-button>
						<p>已收集</p>
						<u-switch class="sw_button" slot="right-icon" v-model="checked"></u-switch>
					</view>
				</u-cell-item>
			</u-cell-group>
			<u-divider>鱼类图鉴完</u-divider>
		</scroll-view>
		<!-- 虫类图鉴列表 -->
		<scroll-view  v-if="current==1" class="list">
			<u-cell-group v-for="(item,index) in dataList1" :key="index">
				<u-cell-item  icon="setting-fill" :title="item.name" :arrow="false" >
					<view class="item" @click="onClickMoreInfo('bug')">
						<!-- <p class="name">{{item.name}}</p> -->
						<p class="description">{{item.des}}</p>	
						<p class="price">{{item.price}}</p>
						<p></p>
					</view>
					<view class="collection">
						<p>已收集</p>
						<u-switch class="sw_button" slot="right-icon" v-model="checked"></u-switch>
					</view>
				</u-cell-item>
			</u-cell-group>
			<u-divider>虫类图鉴完</u-divider>
		</scroll-view>
		
		<!-- 化石图鉴列表 -->
		<scroll-view  v-if="current==2" class="list">
			<u-cell-group v-for="(item,index) in dataList1" :key="index">
				<u-cell-item  icon="setting-fill" :title="item.name" :arrow="false">
					<view class="item">
						<!-- <p class="name">{{item.name}}</p> -->
						<p class="price">{{item.price}}</p>
						<p></p>
					</view>
					<view class="collection">
						<p>已收集</p>
						<u-switch class="sw_button" slot="right-icon" v-model="checked"></u-switch>
						<u-number-box :value="0" @change="valChange"></u-number-box>
					</view>
				</u-cell-item>
			</u-cell-group>
			<u-divider>化石图鉴完</u-divider>
		</scroll-view>
		<!-- 艺术品图鉴列表 -->
		<scroll-view  v-if="current==3" class="list">
			<u-cell-group v-for="(item,index) in artWork" :key="index">
				<u-cell-item  icon="setting-fill" :title="item.name" :arrow="false">
					<view class="collection">
						<p v-if="item.number>0">(已捐)</p>
						<u-number-box :value="item.number" :min="0" @change="valChange"></u-number-box>
					</view>
				</u-cell-item>
			</u-cell-group>
			<u-divider>艺术品图鉴完</u-divider>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current:0,
				//图鉴类型
				dexType:"fish",
				list: [
					{
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
				],
				current: 0,
				dataList:[{name:"蝌蚪",price:"120",des:"出现在池塘"},{name:"青蛙",price:"520",des:"出现在池塘"},{name:"鲸鱼",price:"12000",des:"出现在池塘"}],
				dataList1:[{name:"凤蝶",price:"120",des:"出现在树上"},{name:"亚历山大蝶",price:"520",des:"出现在树上"},{name:"幻蝶",price:"12000",des:"出现在树上"}],
				artWork:[{name:"冲浪图",number:"1"},{name:"星夜",number:"0"},{name:"富春山居图",number:"2"},{name:"清明上河图",number:"3"}]
			};
		},
		methods:{
			//标签页tabs切换事件监听
			changeMap(index){
				this.current = index;
			},
			//化石数量变化监听
			valChange(e) {
				console.log('当前值为: ' + e.value)
			},
			// 点击查看图鉴详情
			onClickMoreInfo(dex_type){
				this.dexType = dex_type;
				if(dex_type === "fish"){
					uni.navigateTo({
					    url: '/pages/map/mapDetail/mapDetail'
					});
				}else if(dex_type === "bug"){
					uni.navigateTo({
					    url: '/pages/map/mapDetail/mapDetail'
					});
				}
				// console.log("点击了鱼类");
				
			}
		},
	}
</script>

<style scoped lang="scss">
	// 图鉴列表整体样式
	.list{
		margin-top: 10rpx;
	}
	// 图鉴单项行样式
	.item{
		background-color: blue;
		display: flex;
		flex-direction: row;
		justify-content: sapce-between;
		align-items: center;
		// border-radius: 5rpx;
		// border-style: solid;
		// border-color: #dddddd;
	}
	//图鉴单项des样式
	.description{
		background-color: red;
		flex: 1em;
	}
	//图鉴单项price样式
	.price{
		background-color: yellow;
		flex: 1em;
	}
	.collection{
		display: flex;
		justify-content: flex-end;
	}
	.btn_detail{
		position: absolute;
		left: 0;
		transform: translate(50%);
	}
	.sw_button{
		margin-left: 15rpx;
	}
	u-number-box{
		margin-left: 25rpx;
	}
	
	
</style>
