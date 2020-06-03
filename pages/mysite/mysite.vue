<template>
	<view class="content">
		<view class="info_card">
			<view class="info_card_top">
				<view class="portrait">
					<u-avatar :src="src" mode="circle" size="large"></u-avatar>
				</view>
				<view class="info_card_top_right">
					<view class="info_card_top_right_first">
						<p>岛名：{{personinfo[0]}}</p>
						<text>半球: {{personinfo[1]}}</text>
						<text>游戏名: {{personinfo[2]}}</text>
					</view>
					<view class="info_card_top_right_second">
						<text>SW: {{personinfo[3]}}</text>
					</view>
					<view class="info_card_top_right_third">
						<text style="margin: 0rpx;">个性签名:{{personinfo[4]}} </text>
						<text>性别：</text>
						<image v-if="personinfo[5]=='男'" style="background-color: #eeeeee;width: 20px; height: 20px;" :src="srcman"></image>
						<image v-if="personinfo[5]=='女'" style="background-color: #eeeeee;width: 20px; height: 20px;" :src="srcwoman"></image>
					</view>
				</view>
			</view>
			<view class="info_card_bottom">
				<text>点赞{{personinfo1[0]}}</text>
				<text>被关注{{personinfo1[1]}}</text>
				<text>关注{{personinfo1[2]}}</text>
				<text>上岛时间{{personinfo1[3]}}</text>
				
			</view>
		</view>
		<view class="grid_icon">
			<u-grid :col="3" border >
					<navigator url="/pages/mysite/mysite" @click="changecurrent(1)" open-type="switchTab" hover-class="navigator-hover">
							<u-grid-item bg-color="rgba(255,255,255,0.1);">
								<u-icon name="home" :size="46"></u-icon>
								<view class="grid-text">主页</view>
							</u-grid-item>   
				    </navigator>
						<!-- <u-grid-item>
							<u-icon name="photo" :size="46"></u-icon>
							<view class="grid-text">个人护照</view>
						</u-grid-item> -->
					<navigator @click="changecurrent(2)" hover-class="navigator-hover">
						<u-grid-item bg-color="rgba(255,255,255,0.1);">
							<u-icon name="eye" :size="46"></u-icon>
							<view class="grid-text">村民</view>
						</u-grid-item>
					</navigator>
					<navigator url="/pages/mysite/trends/trends"  hover-class="navigator-hover">
						<u-grid-item bg-color="rgba(255,255,255,0.1);">
							<u-icon name="moments" :size="46"></u-icon>
							<view class="grid-text">动态</view>
						</u-grid-item>
					</navigator>
					</u-grid>	
		</view>
		<scroll-view v-if="current==1" class="list" style="margin-top: 5rpx;">
			<u-divider>已收集的宝贝</u-divider>
			<u-cell-group v-for="(item,index) in list" :key="index">
				<u-cell-item  icon="setting-fill" :title="item.name" :arrow="false">
					<view class="collection">
						<p v-if="item.number>0"></p>
						<h2 v-if="index==0">{{dataList.length}}/80</h2>
						<h2 v-if="index==1">{{dataList1.length}}/80</h2>
						<h2 v-if="index==2">{{fossil.length}}/73</h2>
						<h2 v-if="index==3">{{artWork.length}}/43</h2>						
					</view>
				</u-cell-item>
			</u-cell-group>
			
			<u-divider>图鉴档案完</u-divider>
		</scroll-view>
		</view>
		</view>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				current:1,
				src:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3023235837,3703646437&fm=26&gp=0.jpg',
				//图鉴类型
				srcman:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2841240923,204544880&fm=26&gp=0.jpg',
				srcwoman:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2207087272,3072193035&fm=26&gp=0.jpg',
				dexType:"fish",
				//已收集
				checked:false,
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
				dataList:[{name:"蝌蚪",price:"120",des:"出现在池塘",checked: false},{name:"青蛙",price:"520",des:"出现在池塘",checked: false},{name:"鲸鱼",price:"12000",des:"出现在海洋",checked: false},{name:"鲸鱼",price:"12000",des:"出现在海洋",checked: false},{name:"鲸鱼",price:"12000",des:"出现在海洋",checked: false},{name:"鲸鱼",price:"12000",des:"出现在海洋",checked: false},{name:"鲸鱼",price:"12000",des:"出现在海洋",checked: false},{name:"鲸鱼",price:"12000",des:"出现在海洋",checked: false},{name:"鲸鱼",price:"12000",des:"出现在海洋",checked: false},{name:"鲸鱼",price:"12000",des:"出现在海洋",checked: false}],
				dataList1:[{name:"凤蝶",price:"120",des:"出现在树上",checked: false},{name:"亚历山大蝶",price:"520",des:"出现在树上",checked: false},{name:"幻蝶",price:"12000",des:"出现在树上",checked: false}],
				artWork:[{name:"冲浪图",number:"1"},{name:"星夜",number:"0"},{name:"富春山居图",number:"2"},{name:"清明上河图",number:"3"}],
				fossil:[{name:"暴龙",number:"1"},{name:"梁龙",number:"1"},{name:"角龙",number:"0"},{name:"腕龙",number:"3"}],
				personinfo:["星辰岛","北半球","辣椒","12344","我就是我","女"],
				personinfo1:[12,33,4,"2020-05-20"]
			};
		},
	methods:{
		//标签页tabs切换事件监听
		changecurrent(index){
			this.current = index;
			
		}},
	}
</script>

<style lang="scss">
	page{
		background-image: url("https://i0.hdslb.com/bfs/article/1bbad7cad546d3499317ea4607960f7465970140.jpg@1320w_2346h.webp");
		background-size: 750rpx 1200rpx;
	}
	.content{
		position: relative;
		background-color:wh;
		 height: 1000rpx;
	}
	.info_card{
		// position: absolute;
		height: 400rpx;
		width: 680rpx;
		background-color: rgba(255, 255, 255, 0.7);
		box-shadow: 0 4px 8px 0 rgba(0,0,0,0.3);
		border-radius: 15px;
		margin: auto;
		display: flex;
		flex-direction: column;
		padding: 15rpx;
		.info_card_top{
			
			height: 350rpx;
			width: 100%;
			padding: 15rpx;
			display: flex;
			justify-content: flex-start;
			.portrait{
				// float: left;
				flex: 1.5;
			}
			.info_card_top_right{
				flex: 2;
				.info_card_top_right_first{
					display: flex;
					justify-content: flex-start;
					margin-bottom: 20rpx;
					text{
						margin-left: 30rpx;
					}
				}
				.info_card_top_right_second{
					margin-bottom: 20rpx;
				}
				.info_card_top_right_third{
					display: flex;
					justify-content: flex-start;
					text{
						margin-left: 30rpx ;
					}
				}
			}
		}
		.info_card_bottom{
			height: 100rpx;
			width: 100%;
			background-image: url(https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1608273396,2211497957&fm=26&gp=0.jpg);
		}
		.table{
			background-color:red ;
		}
		.grid_icon{
			
		}
	}
</style>
