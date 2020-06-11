<template>
	<view class="content">
		<!-- 动态广场tab -->
		<scroll-view class="trends_square" :scroll-y="true" @scrolltolower="getRemainComments">
			<!-- 动态卡片 -->
			<view class="trends_card">
				<!-- 卡片头部 -->
				<view class="trends_card_head">
					<!-- 用户头像 -->
					<view class="avator">
						<u-avatar :src="trend_info.user.profile_pic" mode="square" size="mini" @click="toPastport(item.user)"></u-avatar>
					</view>
					<!-- 用户名字 -->
					<view class="name">
						<!-- {{item.user_name}} -->
						<text>{{trend_info.user.nickname}}</text>
					</view>
					<!-- 标题 -->
					<view class="title">
						<text>{{trend_info.title}}</text>
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
							{{trend_info.content}}
						</text>
					</view>
					<view class="content_img" >
						<view class="content_img1" v-for="(item1,index1) in trend_pic" :key="index1">
							<image :src="item1"></image>
						</view>
					</view>
				</view>
				<!-- 卡片下部内容 -->
				<view class="trends_card_bottom">
					<!-- 点赞 -->
					<view class="like">
						<u-icon name="heart" :hover-class="heart-fill" size="36" @click="clickLike"></u-icon>
						<text>{{trend_info.thumbs_up}}</text>
					</view>
					<!-- 评论 -->
					<view class="comment">
						<u-icon name="weixin-fill" size="36"></u-icon>
						<text>{{trend_info.comment_num}}</text>
					</view>
					<!-- 分享 -->
					<view class="share">
						<u-icon name="share" :hover-class="share-fill" size="36" @click="clickShare"></u-icon>
					</view>
				</view>
			</view>
			<!-- 评论卡片 -->
			<view class="comments_card">
				<view class="comment_body" v-for="(item,index) in comments_info" :key="index">
					<!-- 评论头部:头像/名字/评论时间 -->
					<view class="comment_body_head">
						<!-- 用户头像 -->
						<view class="avator">
							<u-avatar :src="comments_users_info[item.user].profile_pic" mode="square" size="mini"></u-avatar>
						</view>
						<!-- 用户名字 -->
						<view class="name">
							<text>{{comments_users_info[item.user].nickname}}</text>
						</view>
						<!-- 时间 -->
						<view class="time">
							<text>6小时前</text>
						</view>
					</view>
					<view class="comment_body_content">
						<text>{{item.comment}}</text>
					</view>
				</view>
			</view>
		</scroll-view>
		<view class="comments_bar">
			<input class="comment_input" placeholder="请输入评论" />
			<button class="comment_submit">提交</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//circle_friends页面传过来动态帖子的数据
				trend_info: [],
				//circle_friends传来的动态帖子的图片
				trend_pic:{},
				// 评论信息
				comments_info:[],
				// 评论用户的id
				comments_users_id:[],
				// 评论用户的信息： object字典 用userid做索引
				comments_users_info:{},
				//临时头像图片
				tmp_src: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg',
			};
		},
		methods: {
			//获取评论 根据动态帖子的id 获取其评论
			async getComments(){
				const jwt = uni.getStorageSync("skey");
				const head = {'Authorization':"Bearer "+jwt};
				const result = await this.$myRequest({
					method: 'GET',
					url: '/post_comments/?post=' + this.trend_info.id,
					header: head,
				})
				// console.log(result)
				this.comments_info = [...this.comments_info,...result.data.results]
				//获取评论的user id
				for(let i=0,len=this.comments_info.length; i < len; i++){
					this.comments_users_id.push(this.comments_info[i].user)
				}
				//user id 数组去重
				this.comments_users_id = this.getRidOfRepeatArray(this.comments_users_id);
				//userid获取评论的user的信息
				// 临时字典obj 出去userid(key) 与其对应的 userinfo
				let obj = {}
				for(let i=0,len=this.comments_users_id.length; i<len; i++){
					//获取对应的userid的信息
					let userinfo =await this.getCommentsUserInfo(this.comments_users_id[i])
					// console.log(userinfo)
					//将字典的 key:userid 和 info: userid对应的信息 一一对应
					obj[this.comments_users_id[i]] = userinfo
				}
				this.comments_users_info = obj
			},
			// 根据评论用户的id 获取用户相关信息
			async getCommentsUserInfo(id){
				const jwt = uni.getStorageSync("skey");
				const head = {'Authorization':"Bearer "+jwt};
				const result = await this.$myRequest({
					method: 'GET',
					url: '/users/' + id +'/',
					header: head,
				})
				// console.log(result)
				return result.data
			},
			// 获取剩余评论(配合上滑触底刷新)
			getRemainComments() {

			},
			//数组去重方法
			getRidOfRepeatArray(array){
			  var r = [];
			  for(var i = 0, l = array.length; i < l; i++) {
			    for(var j = i + 1; j < l; j++)
			      if (array[i] === array[j]) j = ++i;
			    r.push(array[i]);
			  }
			  return r;
			},

		},
		onLoad(option) {
			this.trend_info = JSON.parse(decodeURIComponent(option.trendsInfo));
			this.trend_pic = JSON.parse(decodeURIComponent(option.trendpic))
			console.log(this.trend_pic)
			this.getComments()
		}
	}
</script>

<style lang="scss">
	.content {
		// position: relative;
		// display: flex;
		// flex-direction: column;
		// align-items: center;

	}

	//动态广场
	.trends_square {
		// margin-top: 45rpx;
		margin: 45rpx auto;
		height: 1200rpx;
		width: 90%;

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

				.title {
					margin-left: 35rpx;
					height: 100%;
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
					padding: 35rpx;
					width: 100%;
					// height: 150rpx;
				}

				// 图片内容
				.content_img {
					margin: 25rpx 0;
					width: 100%;
					display: flex;
					flex-wrap: wrap;
					justify-content: space-evenly;

					// height: 300rpx;
					.content_img1 {
						border-radius: 26rpx;
						box-shadow: 0px 10px 30px rgba(209, 213, 223, 0.5);
						width: 200rpx;
						height: 200rpx;
						image {
							border-radius: 26rpx;
							box-shadow: 0px 10px 30px rgba(209, 213, 223, 0.5);
							max-width: 200rpx;
							max-height: 200rpx;
						}
					}
				}

			}

			// 卡片下部
			.trends_card_bottom {
				width: 98%;
				height: 100rpx;
				display: flex;
				justify-content: space-evenly;
				align-items: center;

				// 点赞
				.like {
					display: flex;
					text {
						font-size: 24rpx;
						margin-left: 10rpx;
					}
				}
				// 评论
				.comment {
					display: flex;
					text {
						font-size: 24rpx;
						margin-left: 10rpx;
					}
				}

			}
		}
		
		// 评论卡片
		.comments_card {
			border-radius: 38.96rpx;
			box-shadow: 0px 10px 30px rgba(209, 213, 223, 0.5);
			background-color: rgba(223, 206, 222, 0.9);
			width: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			
			// 每条评论主体
			.comment_body{
				width: 88%;
				display: flex;
				flex-direction: column;
				align-items: center;
				border-bottom: 2rpx solid rgba(223, 31, 6, 0.8);
				// 评论头部:头像/名字/评论时间
				.comment_body_head{
					// margin-top: 25rpx;
					width: 90%;
					height: 100rpx;
					display: flex;
					justify-content: flex-start;
					align-items: center;
					// 头像
					.avator {
						// height: 100%;
						max-height: 100rpx;
						max-width: 100rpx;
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
					// 时间
					.time {
						margin-left: 35rpx;
						height: 100%;
						display: flex;
						align-items: center;
						justify-content: space-evenly;
					}
				}
				//评论内容
				.comment_body_content{
					width: 100%;
					text{
						margin-left: 120rpx;
					}
				}
			}
		}
		
	}
	// 底部评论栏
	.comments_bar{
		
		position: fixed ;
		bottom: 0;
		width: 750rpx;
		height: 75rpx;
		background-color: rgba(145, 152, 140, 0.9);
		display: flex;
		.comment_input{
			padding-left: 15rpx;
			width: 74%;
			height: 100%;
		}
		.comment_submit{
			background-color: rgb(77, 152, 136);
			color: white;
			width: 26%;
			height: 100%;
		}
	}
</style>
