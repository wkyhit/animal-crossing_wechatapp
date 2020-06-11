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
		<scroll-view v-show="current_tab===0" class="trends_square" :scroll-y="true" @scrolltolower="getRemainTrends">
			<!-- 动态卡片 -->
			<view class="trends_card" v-for="(item,index) in trends " :key="index">
				<!-- 卡片头部 -->
				<view class="trends_card_head">
					<!-- 用户头像 -->
					<view class="avator">
						<u-avatar :src="item.user.profile_pic" mode="square" size="mini" @click="toPastport(item.user)"></u-avatar>
					</view>
					<!-- 用户名字 -->
					<view class="name">
						<!-- {{item.user_name}} -->
						<text>{{item.user.nickname}}</text>
					</view>
					<!-- 标题 -->
					<view class="title">
						<text>{{item.title}}</text>
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
					<view class="content_img" >
						<view class="content_img1" v-for="(item1,index1) in trendPicture[item.id]" :key="index1">
							<image :src="item1" :lazy-load="true" :mode="aspectFill" @click="clickToPreviewImage(item.id,index1)"></image>
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
						<u-icon name="weixin-fill"  size="36" @click="clickComment(item)"></u-icon>
						<text>{{item.comment_num}}</text>
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
				<view class="title">
					<input class="title_input" placeholder="请输入标题" :value="post_trends_form.title" @input="titleChange" />
				</view>
				<view class="context">
					<textarea class="context_input" placeholder="请输入内容..." maxlength=-1 :value="post_trends_form.content" @input="contentChange"></textarea>
					<!-- <input class="context_input" placeholder="请输入内容..."  /> -->
				</view>
				<view class="upload_img">
					<u-upload ref="uUpload" :action="action" :header="head" name="file" @on-change="uploadChange" :file-list="fileList" max-count="9"  @on-uploaded="onUploaded"></u-upload>
				</view>
				<!-- <view class="submit1">
					<button class="btn_submit" :value="new_trend" @click="submitTrends">提交</button>
				</view> -->
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
				// 获取的动态
				trends:[],
				// 动态的页数
				trendPageNum:1,
				// 动态总个数
				trendsCount:1,
				//动态的图片 数组
				trends_pic:[],
				//发布动态的内容
				new_trend:"",
				// 图片上传地址
				action:"http://47.240.8.112/api/v1/private/upload/",
				// 图片数组（上传）
				// filesArr: [],
				// 请求头部（上传图片）
				head:{},
				//提交动态的表单
				post_trends_form:{
					title:"",
					content:"",
					post_pic:"",
				},
			};
		},
		computed:{
			//动态图片的数组
			trendPicture(){
				let tmp_trend_pic = {} //用来保存每个trend多个pic的字典，用trend的id做key索引
				let trend_pic=new Array() //用来存每个trends多各pic的二维数组
				let len = this.trends.length//动态帖子的数量
				for(let i=0; i<len; i++){
					//用 ; 对图片字符串进行分割
					let pic_array = new Array()
					pic_array = this.trends[i].post_pic.split(";")
					let trend_id = this.trends[i].id //获取当前trend的id
					tmp_trend_pic[trend_id] = pic_array //以trend_id为key保存对应的图片url数组
			
					// trend_pic[i] = new Array() //声明二维数组
					// for(let j=0,len1=pic_array.length; j<len1; j++){
						// console.log(pic_array[j])
						// trend_pic[i][j] = pic_array[j];
					// }
				}
				return tmp_trend_pic;
			},
		},
		methods: {
			// 监听下拉刷新
			onPullDownRefresh(){
				this.trends = []
				this.trendPageNum = 1
				setTimeout(()=>{
					this.getTrends()
					uni.stopPullDownRefresh() //停止下拉刷新
				},1000)
			},
			//监听tabs change
			changeTab(index) {
				this.current_tab = index;
			},
			// 点击头像,跳转到该用户个人护照页
			// 接受用户护照基本信息
			toPastport(userInfo){
				// console.log(userInfo);
				const info = userInfo
				uni.navigateTo({
					url:'/pages/mysite/mysite?userinfo='+ encodeURIComponent(JSON.stringify(this.info))
				});
			},
			clickLike(){
				console.log("click like")
			},
			// 监听评论按钮点击事件
			clickComment(trends){
				const trendsInfo = trends
				uni.navigateTo({
					url:"comments/comments?trendsInfo="+ encodeURIComponent(JSON.stringify(trendsInfo))+"&trendpic="+encodeURIComponent(JSON.stringify(this.trendPicture[trendsInfo.id]))
				})
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
					url: '/posts/?pagenum=' + this.trendPageNum,
					header: head,
				})
				// 获取动态总个数
				this.trendsCount = result.data.count;
				this.trends = [...this.trends, ...result.data.results]
				// console.log(this.trends)
			},
			// 获取剩余动态 pagenum>1,每页10条
			getRemainTrends(){
				if(this.trendPageNum <= this.trendsCount/10 ){
					this.trendPageNum++;
					this.getTrends();
				}
			},
			// 监听title input change 事件
			titleChange(e){
				this.post_trends_form.title = e.detail.value
			},
			// 监听content input change 事件
			contentChange(e){
				this.post_trends_form.content = e.detail.value
			},
			// 图片预览事件
			clickToPreviewImage(list_id,img_index){
				// let imgArr = imageList
				let imgArr = this.trendPicture[list_id]
				// console.log(this.trendPicture[list_id])
				uni.previewImage({
					urls:imgArr,
					current:img_index
				})
				
			},
			//图片上传事件
			uploadChange(res){
				// console.log(res)
			},
			//图片上传成功事件，lists为全部图片的数组集合
			onUploaded(lists){
				let tmp_post_pic = ""
				const filesArr = lists;
				const reg = /http:\/\/47\.240\.8\.112\/media\//;
				for(let i=0,len = lists.length; i < len; i++){
					let array = JSON.parse(filesArr[i].response)
					let str = array.file
					str = str.replace(reg,"")
					if (i === lists.length-1){
						tmp_post_pic += str
						break;
					}
					tmp_post_pic += str + ";"
				}
				//将临时图片url赋予表单的pic
				this.post_trends_form.post_pic = tmp_post_pic
				console.log(tmp_post_pic);
			},
			//提交动态
			async submitTrends(){
				const jwt = uni.getStorageSync("skey");
				const head = {'Authorization':"Bearer "+jwt};
				const result = await this.$myRequest({
					method: 'POST',
					url: '/posts/',
					header: head,
					data: {
						title:this.post_trends_form.title,
						content:this.post_trends_form.content,
						post_pic:this.post_trends_form.post_pic,
					},
				})
				//重置表单
				this.post_trends_form.title = ""
				this.post_trends_form.content = ""
				this.$refs.uUpload.clear()
				uni.showToast({
					title:"动态发布成功",
					icon: "success"
				})
				// console.log(result)
				this.changeTab(0) //跳转回动态广场
				// 触发下拉刷新
				uni.startPullDownRefresh()
			},
		},
		onLoad() {
			const jwt = uni.getStorageSync("skey");
			const headers = {'Authorization':"Bearer "+jwt};
			this.head = headers;
			uni.startPullDownRefresh()
			// console.log("onload friends")
		},
		onShow(){
			// uni.startPullDownRefresh()
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
				.title{
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
						// max-width: 150rpx;
						// max-height: 150rpx;
						// border: solid 2rpx white;
						border-radius: 26rpx;
						box-shadow: 0px 10px 30px rgba(209, 213, 223, 0.5);
						width: 200rpx;
						height: 200rpx;
						image {
							// border: solid 2rpx white;
							border-radius: 26rpx;
							box-shadow: 0px 10px 30px rgba(209, 213, 223, 0.5);
							max-width: 200rpx;
							max-height: 200rpx;
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
					text{
						font-size: 24rpx;
						margin-left: 10rpx;
					}
				}
					
			}
		}
	}
	
	//发布动态
	.post_trends{
		margin-top: 50rpx;
		height: 1200rpx;
		width: 100%;
		display: flex;
		flex-direction: column;
		.card{
			margin: 80rpx auto;
			width: 95%;
			border-radius: 38.96rpx;
			box-shadow: 0px 10px 30px rgba(209, 213, 223, 0.5);
			background-color: rgba(175, 253, 214, 0.9);
			display: flex;
			flex-direction: column;
			align-items: center;
			.title{
				border-radius: 28rpx;
				box-shadow: 0px 10px 30px rgba(209, 213, 223, 0.5);
				background-color: rgba(253, 96, 48, 0.9);
				// border: 2rpx solid black;
				width: 96%;
				height: 85rpx;
				margin: 15rpx 15rpx;	
				.title_input{
					color: white;
					padding-left: 15rpx;
					width: 100%;
					height: 100%;
				}
			}
			.context{
				margin: 35rpx 20rpx;
				width: 96%;
				height: 400rpx;
				.context_input{
					padding: 15rpx;
					width:100% ;
					height: 100%;
				}
			}
			.upload_img{
				display:flex ;
				flex-wrap: wrap;
				justify-content:space-evenly ;
				
			}
		}
		
		.submit{
			// margin-top: 25rpx;
			align-self: center;
			width: 200rpx;
			height: 75rpx;
			// position: absolute;
			// bottom: 0;
			// left: 50%;
			// transform: translate(-50%,-50%);
			border-radius: 25rpx;
			box-shadow: 0px 5px 15px rgba(209, 213, 223, 0.5);
			.btn_submit{
				// width: 100%;
				// height: 100%;
				color: white;
				border-radius: 25rpx;
				box-shadow: 0px 5px 15px rgba(209, 213, 223, 0.5);
				background-color: rgba(9, 95, 223, 0.9);
			}
		}
	}
</style>
