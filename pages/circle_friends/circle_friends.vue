<template>
	<view class="content">
		<view class="topBar">
			<view class="tab_outside" style="width: 600rpx;">
				<u-tabs :list="list" :is-scroll="true" gutter="80" :current="current_tab" @change="changeTab"></u-tabs>
			</view>
			<view class="search_outside" v-show="current_tab === 0">
				<u-search placeholder="输入名称可模糊搜索" v-model="keyword" :clearabled="true" shape="round" :show-action="true"
				 action-text="搜索" :animation="true"></u-search>
			</view>
		</view>
		<!-- 动态广场tab -->
		<scroll-view v-show="current_tab===0" class="trends_square" :scroll-y="true">
			<!-- 动态卡片 -->
			<view class="trends_card" v-for="(item,index) in trends " :key="index">
				<!-- 卡片头部 -->
				<view class="trends_card_head">
					<!-- 用户头像 -->
					<view class="avator">
						<!-- {{item.user_name}} -->
						<!-- <text>{{item.user_name}}</text> -->
						<!-- <image :src="item.user_img"></image> -->
						<u-avatar :src="img_test" mode="square" size="mini"></u-avatar>
					</view>
					<!-- 用户名字 -->
					<view class="name">
						<!-- {{item.user_name}} -->
						<text>{{item.user}}</text>
					</view>
					<!-- 操作 -->
					<view class="operate">
						<u-icon name="more-dot-fill" size="36"></u-icon>
					</view>
				</view>
				<!-- 卡片中部内容 -->
				<view class="trends_card_content">
					<view class="content_text">
						<text>
							{{item.content}}
						</text>
					</view>
					<view class="content_img">
						<view class="content_img1">
							<image :src="img_test"></image>
						</view>
					</view>
				</view>
				<!-- 卡片下部内容 -->
				<view class="trends_card_bottom">
					<!-- 点赞 -->
					<view class="like" >
						<u-icon name="heart" :hover-class="heart-fill" size="36" @click="clickLike"></u-icon>
						<text>{{item.thumbs_up}}</text>
					</view>
					<!-- 评论 -->
					<view class="comment">
						<u-icon name="weixin-fill"  size="36" @click="clickComment"></u-icon>
						<text></text>
					</view>
					<!-- 分享 -->
					<view class="share">
						<u-icon name="share"  :hover-class="share-fill" size="36" @click="clickShare"></u-icon>
					</view>
				</view>
			</view>
		</scroll-view>
		<!-- 发布动态 -->
		<view v-show="current_tab===1" class="post_trends">
			<view class="card">
				<view class="context">
					<textarea class="context_input" placeholder="请输入内容..." maxlength=-1></textarea>
					<!-- <input class="context_input" placeholder="请输入内容..."  /> -->
				</view>
				<view class="upload_img">
					<u-upload :action="action" :file-list="fileList" ></u-upload>
				</view>
			</view>
			<view class="submit">
				<button class="btn_submit" :value="new_trend" @click="submitTrends">提交</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//上方tabs list
				list: [{
					name: "动态广场"
				}, {
					name: "发布动态"
				}],
				//当前tab
				current_tab: 0,
				//搜索keyword
				keyword: "",
				trends:[],
				//动态图片(临时)
				img_test:"http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg",
				//发布动态的内容
				new_trend:"",
				
			};
		},
		onLoad() {
			this.getTrends();
		},
		methods: {
			//监听tabs change
			changeTab(index) {
				this.current_tab = index;
			},
			clickLike(){
				console.log("click like")
			},
			clickComment(){
				
			},
			clickShare(){
				
			},
			//获取动态
			async getTrends(){
				const jwt = uni.getStorageSync("skey");
				// console.log("jwt: "+jwt);
				const head = {'Authorization':"Bearer "+jwt};
				// console.log("header: "+head.Authorization);
				const result = await this.$myRequest({
					method: 'GET',
					url: '/posts/',
					header: head,
				})
				this.trends = [...this.trends, ...result.data.results]
			}
			,
			//提交动态
			submitTrends(){
				
			},
			
			
		}
	}
</script>

<style lang="scss">
	.content {
		// position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		// background: url("https://i0.hdslb.com/bfs/article/1bbad7cad546d3499317ea4607960f7465970140.jpg@1320w_2346h.webp");
		// background-size: 750rpx 1200rpx;
		// height: 1200rpx;
	}

	// 顶部tabs和搜索栏
	.topBar {
		background-color: #FFFFFF;
		position: fixed;
		top: 0;
		z-index: 99;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;

		// tabs
		.tab_outside {}

		//搜索栏
		.search_outside {
			width: 100%;
		}

	}

	//动态广场
	.trends_square {
		margin-top: 150rpx;
		height: 1200rpx;
		width: 90%;

		// display: flex;
		// flex-direction: column;
		// align-items: center;
		// background-color: red;
		// 动态卡片
		.trends_card {
			border-radius: 38.96rpx;
			box-shadow: 0px 10px 30px rgba(209, 213, 223, 0.5);
			background-color: rgba(223, 206, 222, 0.9);
			margin-top: 55rpx;
			margin-bottom: 55rpx;
			// margin-bottom: 55rpx;
			width: 100%;
			// height: 500rpx;
			// background-color: blue;
			display: flex;
			flex-direction: column;
			align-items: center;

			// 卡片头部
			.trends_card_head {
				margin-top: 25rpx;
				width: 96%;
				height: 100rpx;
				display: flex;
				justify-content: flex-start;

				// background-color: red;
				// 头像
				.avator {
					// height: 100%;
					max-height: 100rpx;
					max-width: 100rpx;
					// flex: 1;
					// background-color: yellow;
					display: flex;
					align-items: center;
				}

				// 名字
				.name {
					margin-left: 25rpx;
					// background-color: green;
					height: 100%;
					// flex: 1;
					display: flex;
					align-items: center;
					justify-content: space-evenly;
				}

				// 操作
				.operate {
					margin-left: auto;
					padding: 25rpx;
				}
			}

			// 卡片内容中部
			.trends_card_content {
				width: 96%;

				// 文字内容
				.content_text {
					width: 100%;
					// height: 150rpx;
				}
				// 图片内容
				.content_img {
					margin: 25rpx 0;
					width: 100%;
					display: flex;
					justify-content: space-evenly;
					// height: 300rpx;
					.content_img1 {
						// max-width: 150rpx;
						// max-height: 150rpx;
						image {
							max-width: 300rpx;
							max-height: 300rpx;
						}
					}
				}

			}
			
			// 卡片下部
			.trends_card_bottom{
				width: 98%;
				height: 100rpx;
				display: flex;
				justify-content: space-evenly;
				align-items: center;
				// 点赞
				.like{
					display: flex;
					text{
						font-size: 24rpx;
						margin-left: 10rpx;
					}
				}
				// 评论
				.comment{
					display: flex;
				}
					
			}
		}
	}
	
	//发布动态
	.post_trends{
		margin-top: 150rpx;
		height: 1200rpx;
		width: 100%;
		// display: flex;
		// justify-content: space-evenly;
		.card{
			margin: auto;
			width: 95%;
			border-radius: 38.96rpx;
			box-shadow: 0px 10px 30px rgba(209, 213, 223, 0.5);
			background-color: rgba(223, 206, 222, 0.9);
			display: flex;
			flex-direction: column;
			align-items: center;
			.context{
				margin: 35rpx 20rpx;
				width: 96%;
				height: 500rpx;
				.context_input{
					width:100% ;
				}
			}
			.upload_img{
				
			}
		}
		.submit{
			width: 200rpx;
			height: 75rpx;
			position: absolute;
			bottom: 0;
			left: 50%;
			transform: translate(-50%,-50%);
			border-radius: 25rpx;
			box-shadow: 0px 5px 15px rgba(209, 213, 223, 0.5);
			.btn_submit{
				border-radius: 25rpx;
				box-shadow: 0px 5px 15px rgba(209, 213, 223, 0.5);
				background-color: rgba(9, 95, 223, 0.9);
			}
		}
	}
</style>
