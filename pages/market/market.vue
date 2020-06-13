<template>
	<view class="content">
		<view class="topBar">
			<view class="tab_outside">
				<u-tabs :list="list" :is-scroll="true" :current="current_tab" @change="changeTab"></u-tabs>
			</view>
			<view class="search_outside">
				<u-search placeholder="输入名称可模糊搜索" v-model="keyword" :clearabled="true" shape="round" :show-action="true"
				 action-text="搜索" :animation="true"></u-search>
			</view>
			<view class="add_trade_outside">
				<button class="btn_add_trade" @click="clickToAddTrade" >
					发布交易
				</button>
			</view>
		</view>
		<!-- 大头菜市场tab -->
		<scroll-view v-show="current_tab===0" class="trends_square" :scroll-y="true" @scrolltolower="getRemainTurnipTrades">
			<!-- 动态卡片 -->
			<view class="trends_card" v-for="(item,index) in turnip_trades " :key="index" v-if="item.topic === '1' ">
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
						<text>{{"#标题: "+item.title}}</text>
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
						<view class="content_img1" v-for="(item1,index1) in turnipPicture[item.id]" :key="index1">
							<image :src="item1" :lazy-load="true" :mode="aspectFill" @click="clickToPreviewImage(item.id,index1,'turnip')"></image>
						</view>
					</view>
				</view>
				<!-- 卡片下部内容 -->
				<view class="trends_card_bottom">
					<!-- 点赞 -->
					<view class="like" >
						<u-icon :name="like_icon[item.id]" size="36" @click="clickLike(item.id)"></u-icon>
						<text>{{item.thumbs_up}}</text>
					</view>
					<!-- 评论 -->
					<view class="comment">
						<u-icon name="weixin-fill"  size="36" @click="clickComment(item,'turnip')"></u-icon>
						<text>{{item.comment_num}}</text>
					</view>
					<!-- 分享 -->
					<view class="share">
						<u-icon name="share"  :hover-class="share-fill" size="36" @click="clickShare"></u-icon>
					</view>
				</view>
			</view>
		</scroll-view>
		
		<!-- DIY市场tab -->
		<scroll-view v-show="current_tab===1" class="trends_square" :scroll-y="true" @scrolltolower="getRemainDiyTrades">
			<!-- 动态卡片 -->
			<view class="trends_card" v-for="(item,index) in diy_trades " :key="index" v-if="item.topic === '2' " >
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
						<text>{{"#标题: "+item.title}}</text>
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
						<view class="content_img1" v-for="(item1,index1) in diyPicture[item.id]" :key="index1">
							<image :src="item1" :lazy-load="true" :mode="aspectFill" @click="clickToPreviewImage(item.id,index1,'diy')"></image>
						</view>
					</view>
				</view>
				<!-- 卡片下部内容 -->
				<view class="trends_card_bottom">
					<!-- 点赞 -->
					<view class="like" >
						<u-icon :name="like_icon[item.id]" size="36" @click="clickLike(item.id)"></u-icon>
						<text>{{item.thumbs_up}}</text>
					</view>
					<!-- 评论 -->
					<view class="comment">
						<u-icon name="weixin-fill"  size="36" @click="clickComment(item,'diy')"></u-icon>
						<text>{{item.comment_num}}</text>
					</view>
					<!-- 分享 -->
					<view class="share">
						<u-icon name="share"  :hover-class="share-fill" size="36" @click="clickShare"></u-icon>
					</view>
				</view>
			</view>
		</scroll-view>
		
		<!-- 化石市场tab -->
		<scroll-view v-show="current_tab===2" class="trends_square" :scroll-y="true" @scrolltolower="getRemainFossilTrades">
			<!-- 动态卡片 -->
			<view class="trends_card" v-for="(item,index) in fossil_trades " :key="index" v-if="item.topic === '3' ">
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
						<text>{{"#标题: "+item.title}}</text>
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
						<view class="content_img1" v-for="(item1,index1) in fossilPicture[item.id]" :key="index1">
							<image :src="item1" :lazy-load="true" :mode="aspectFill" @click="clickToPreviewImage(item.id,index1,'fossil')"></image>
						</view>
					</view>
				</view>
				<!-- 卡片下部内容 -->
				<view class="trends_card_bottom">
					<!-- 点赞 -->
					<view class="like" >
						<u-icon :name="like_icon[item.id]" size="36" @click="clickLike(item.id)"></u-icon>
						<text>{{item.thumbs_up}}</text>
					</view>
					<!-- 评论 -->
					<view class="comment">
						<u-icon name="weixin-fill"  size="36" @click="clickComment(item,'fossil')"></u-icon>
						<text>{{item.comment_num}}</text>
					</view>
					<!-- 分享 -->
					<view class="share">
						<u-icon name="share"  :hover-class="share-fill" size="36" @click="clickShare"></u-icon>
					</view>
				</view>
			</view>
		</scroll-view>
		
		<!-- 自由市场tab -->
		<scroll-view v-show="current_tab===3" class="trends_square" :scroll-y="true" @scrolltolower="getRemainFreeTrades">
			<!-- 动态卡片 -->
			<view class="trends_card" v-for="(item,index) in free_trades " :key="index" v-if="item.topic === '4' ">
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
						<text>{{"#标题: "+item.title}}</text>
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
						<view class="content_img1" v-for="(item1,index1) in freePicture[item.id]" :key="index1">
							<image :src="item1" :lazy-load="true" :mode="aspectFill" @click="clickToPreviewImage(item.id,index1,'free')"></image>
						</view>
					</view>
				</view>
				<!-- 卡片下部内容 -->
				<view class="trends_card_bottom">
					<!-- 点赞 -->
					<view class="like" >
						<u-icon :name="like_icon[item.id]" size="36" @click="clickLike(item.id)"></u-icon>
						<text>{{item.thumbs_up}}</text>
					</view>
					<!-- 评论 -->
					<view class="comment">
						<u-icon name="weixin-fill"  size="36" @click="clickComment(item,'free')"></u-icon>
						<text>{{item.comment_num}}</text>
					</view>
					<!-- 分享 -->
					<view class="share">
						<u-icon name="share"  :hover-class="share-fill" size="36" @click="clickShare"></u-icon>
					</view>
				</view>
			</view>
		</scroll-view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//上方tabs list
				list: [
					{
					name: "大头菜"
					}, 
					{
					name: "DIY交换"
					},
					{
					name: "化石交换"
					},
					{
					name: "自由交换"
					},
					],
				//当前tab
				current_tab: 0,
				//搜索keyword
				keyword: "",
				//大头菜交易贴数组
				turnip_trades:[],
				// 大头菜交易帖页数
				turnip_pagenum:1,
				// 大头菜帖子总数
				turnip_trade_count:1,
				//diy交易贴数组
				diy_trades:[],
				diy_pagenum:1,
				diy_trade_count:1,
				//化石交易贴数组
				fossil_trades:[],
				fossil_pagenum:1,
				fossil_trade_count:1,
				//自由交易贴数组
				free_trades:[],
				free_pagenum:1,
				free_trade_count:1,
				// 点赞按钮状态 字典对象
				like_icon:[],
				//点赞数组 api获取
				likes:[],
				//动态图片(临时)
				// img_test:"http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg",
				//发布动态的内容
				new_trend:"",
				
			};
		},
		computed:{
			//大头菜市场的图片数组
			turnipPicture(){
				let tmp_trend_pic = {} //用来保存每个trend多个pic的字典，用trend的id做key索引
				let len = this.turnip_trades.length//动态帖子的数量
				for(let i=0; i<len; i++){
					//用 ; 对图片字符串进行分割
					let pic_array = new Array()
					pic_array = this.turnip_trades[i].trade_pic.split(";")
					let trend_id = this.turnip_trades[i].id //获取当前trend的id
					tmp_trend_pic[trend_id] = pic_array //以trend_id为key保存对应的图片url数组
				}
				return tmp_trend_pic;
			},
			//DIY市场的图片数组
			diyPicture(){
				let tmp_trend_pic = {} //用来保存每个trend多个pic的字典，用trend的id做key索引
				let len = this.diy_trades.length//动态帖子的数量
				for(let i=0; i<len; i++){
					//用 ; 对图片字符串进行分割
					let pic_array = new Array()
					pic_array = this.diy_trades[i].trade_pic.split(";")
					let trend_id = this.diy_trades[i].id //获取当前trend的id
					tmp_trend_pic[trend_id] = pic_array //以trend_id为key保存对应的图片url数组
				}
				return tmp_trend_pic;
			},
			// 化石市场的图片数组
			fossilPicture(){
				let tmp_trend_pic = {} //用来保存每个trend多个pic的字典，用trend的id做key索引
				let len = this.fossil_trades.length//动态帖子的数量
				for(let i=0; i<len; i++){
					//用 ; 对图片字符串进行分割
					let pic_array = new Array()
					pic_array = this.fossil_trades[i].trade_pic.split(";")
					let trend_id = this.fossil_trades[i].id //获取当前trend的id
					tmp_trend_pic[trend_id] = pic_array //以trend_id为key保存对应的图片url数组
				}
				return tmp_trend_pic;
			},
			// 自由市场的图片数组
			freePicture(){
				let tmp_trend_pic = {} //用来保存每个trend多个pic的字典，用trend的id做key索引
				let len = this.free_trades.length//动态帖子的数量
				for(let i=0; i<len; i++){
					//用 ; 对图片字符串进行分割
					let pic_array = new Array()
					pic_array = this.free_trades[i].trade_pic.split(";")
					let trend_id = this.free_trades[i].id //获取当前trend的id
					tmp_trend_pic[trend_id] = pic_array //以trend_id为key保存对应的图片url数组
				}
				return tmp_trend_pic;
			}
		},
		onLoad() {
			uni.startPullDownRefresh()
			// this.getTurnipTrades()
		},
		methods: {
			// 监听下拉刷新
			onPullDownRefresh(){
				if(this.current_tab === 0){
					this.turnip_trades = []
					this.likes = []
					setTimeout(()=>{
						this.getUserLikeInfo()
						this.getTurnipTrades()
						uni.stopPullDownRefresh() //停止下拉刷新
					},1000)
				}else if(this.current_tab === 1){
					this.diy_trades = []
					this.likes = []
					setTimeout(()=>{
						this.getUserLikeInfo()
						this.getDiyTrades()
						uni.stopPullDownRefresh() //停止下拉刷新
					},1000)
				}else if(this.current_tab === 2){
					this.fossil_trades = []
					this.likes = []
					setTimeout(()=>{
						this.getUserLikeInfo()
						this.getFossilTrades()
						uni.stopPullDownRefresh() //停止下拉刷新
					},1000)
				}else if(this.current_tab === 3){
					this.free_trades = []
					this.likes = []
					setTimeout(()=>{
						this.getUserLikeInfo()
						this.getFreeTrades()
						uni.stopPullDownRefresh() //停止下拉刷新
					},1000)
				}
			},
			//监听tabs change
			changeTab(index) {
				this.current_tab = index;
				if(this.current_tab === 0 && this.turnip_trades.length === 0){
					this.getTurnipTrades()
				}else if(this.current_tab === 1 && this.diy_trades.length === 0){
					this.getDiyTrades()
				}else if(this.current_tab === 2 && this.fossil_trades.length === 0){
					this.getFossilTrades()
				}else if(this.current_tab === 3 && this.free_trades.length === 0){
					this.getFreeTrades()
				}
			},
			// 跳转到addTrade
			clickToAddTrade(){
				uni.navigateTo({
					url:"addTrade/addTrade"
				})
			},
			// 点赞按钮点击事件
			async clickLike(id){
				if(this.like_icon[id] === "heart"){
					// 点赞
					// 调用Vue.set更新数组,使视图更新
					this.$set(this.like_icon,id,"heart-fill")
					// this.like_icon[id] = "heart-fill"
					const jwt = uni.getStorageSync("skey");
					const head = {'Authorization':"Bearer "+jwt};
					const result = await this.$myRequest({
						method: 'POST',
						url: '/likes/',
						header: head,
						data: {
							obj_liked:id,
							thumbs_up_type:1,
						},
					})
					// 判断帖子类型
					if(this.current_tab === 0){ //大头菜
						//对应的帖子点赞数+1
						for(let i=0,len=this.turnip_trades.length; i<len; i++){
							// 找到点赞对应的帖子id
							if(id === this.turnip_trades[i].id){
								let num = this.turnip_trades[i].thumbs_up + 1
								this.$set(this.turnip_trades[i],'thumbs_up',num)
								break
							}
						}
					}else if(this.current_tab === 1){ //diy
						//对应的帖子点赞数+1
						for(let i=0,len=this.diy_trades.length; i<len; i++){
							// 找到点赞对应的帖子id
							if(id === this.diy_trades[i].id){
								let num = this.diy_trades[i].thumbs_up + 1
								this.$set(this.diy_trades[i],'thumbs_up',num)
								break
							}
						}
					}else if(this.current_tab === 2){ //fossil
						//对应的帖子点赞数+1
						for(let i=0,len=this.fossil_trades.length; i<len; i++){
							// 找到点赞对应的帖子id
							if(id === this.fossil_trades[i].id){
								let num = this.fossil_trades[i].thumbs_up + 1
								this.$set(this.fossil_trades[i],'thumbs_up',num)
								break
							}
						}
					}else if(this.current_tab === 3){ //free
						//对应的帖子点赞数+1
						for(let i=0,len=this.free_trades.length; i<len; i++){
							// 找到点赞对应的帖子id
							if(id === this.free_trades[i].id){
								let num = this.free_trades[i].thumbs_up + 1
								this.$set(this.free_trades[i],'thumbs_up',num)
								break
							}
						}
					}
				}else{
					//取消点赞
					// this.like_icon[id] = "heart"
					this.$set(this.like_icon,id,"heart")
					const jwt = uni.getStorageSync("skey");
					const head = {'Authorization':"Bearer "+jwt};
					let like_id
					//获取likes数组中帖子id(obj_liked)与要删除的帖子id匹配项的点赞id
					for(let i=0,len=this.likes.length; i<len; i++){
						if(this.likes[i].obj_liked === id){ //帖子id相匹配,
							like_id = this.likes[i].id //取得对应点赞id
							break
						}
					}
					const result = await this.$myRequest({
						method: 'DELETE',
						url: '/likes/' +like_id+"/",
						header: head,
					})
					// 判断帖子类型
					if(this.current_tab === 0){ //大头菜
						//对应的帖子点赞数-1
						for(let i=0,len=this.turnip_trades.length; i<len; i++){
							// 找到点赞对应的帖子id
							if(id === this.turnip_trades[i].id){
								let num = this.turnip_trades[i].thumbs_up - 1
								this.$set(this.turnip_trades[i],'thumbs_up',num)
								break
							}
						}
					}else if(this.current_tab === 1){ //diy
						//对应的帖子点赞数-1
						for(let i=0,len=this.diy_trades.length; i<len; i++){
							// 找到点赞对应的帖子id
							if(id === this.diy_trades[i].id){
								let num = this.diy_trades[i].thumbs_up - 1
								this.$set(this.diy_trades[i],'thumbs_up',num)
								break
							}
						}
					}else if(this.current_tab === 2){ //fossil
						//对应的帖子点赞数-1
						for(let i=0,len=this.fossil_trades.length; i<len; i++){
							// 找到点赞对应的帖子id
							if(id === this.fossil_trades[i].id){
								let num = this.fossil_trades[i].thumbs_up - 1
								this.$set(this.fossil_trades[i],'thumbs_up',num)
								break
							}
						}
					}else if(this.current_tab === 3){ //free
						//对应的帖子点赞数-1
						for(let i=0,len=this.free_trades.length; i<len; i++){
							// 找到点赞对应的帖子id
							if(id === this.free_trades[i].id){
								let num = this.free_trades[i].thumbs_up - 1
								this.$set(this.free_trades[i],'thumbs_up',num)
								break
							}
						}
					}
					
				}
				// console.log("click like")
			},
			// 评论按钮点击事件
			clickComment(trades,type){
				const tradesInfo = trades
				if(type === "turnip"){
					uni.navigateTo({
						url:"comments/comments?tradesInfo="+ encodeURIComponent(JSON.stringify(tradesInfo))+"&tradepic="+encodeURIComponent(JSON.stringify(this.turnipPicture[tradesInfo.id]))
					})
				}else if(type === "diy"){
					uni.navigateTo({
						url:"comments/comments?tradesInfo="+ encodeURIComponent(JSON.stringify(tradesInfo))+"&tradepic="+encodeURIComponent(JSON.stringify(this.diyPicture[tradesInfo.id]))
					})
				}else if(type === "fossil"){
					uni.navigateTo({
						url:"comments/comments?tradesInfo="+ encodeURIComponent(JSON.stringify(tradesInfo))+"&tradepic="+encodeURIComponent(JSON.stringify(this.fossilPicture[tradesInfo.id]))
					})
				}else if(type === "free"){
					uni.navigateTo({
						url:"comments/comments?tradesInfo="+ encodeURIComponent(JSON.stringify(tradesInfo))+"&tradepic="+encodeURIComponent(JSON.stringify(this.freePicture[tradesInfo.id]))
					})
				}

			},
			clickShare(){
				
			},
			// 图片预览事件
			clickToPreviewImage(list_id,img_index,type){
				var imgArr;
				if(type === "turnip"){
					imgArr = this.turnipPicture[list_id]
				}else if(type === "diy"){
					imgArr = this.diyPicture[list_id]
				}else if(type === "fossil"){
					imgArr = this.fossilPicture[list_id]
				}else if(type === "free"){
					imgArr = this.freePicture[list_id]
				}
				// let imgArr = imageList
				// console.log(this.trendPicture[list_id])
				uni.previewImage({
					urls:imgArr,
					current:img_index
				})
			},
			// 获取用户点赞信息
			async getUserLikeInfo(){
				const jwt = uni.getStorageSync("skey");
				const head = {'Authorization':"Bearer "+jwt};
				const result = await this.$myRequest({
					method: 'GET',
					url: '/likes/',
					header: head,
				})
				this.likes = result.data
				// console.log(result)
				// return result.data
			},
			//获取大头菜交易帖
			async getTurnipTrades(){
				const jwt = uni.getStorageSync("skey");
				// console.log("jwt: "+jwt);
				const head = {'Authorization':"Bearer "+jwt};
				// console.log("header: "+head.Authorization);
				const result = await this.$myRequest({
					method: 'GET',
					url: '/trades/?topic=1&pagenum='+ this.turnip_pagenum,
					header: head,
				})
				this.turnip_trade_count = result.data.count
				this.turnip_trades = [...this.turnip_trades, ...result.data.results]
				// 初始化点赞图标
				for(let i=0,len=this.turnip_trades.length; i<len; i++){
					this.like_icon[this.turnip_trades[i].id] = "heart"
				}
				//处理该用户点赞信息
				for(let j=0,len=this.likes.length; j<len; j++){
					if(this.likes[j].thumbs_up_type === 1){
						this.like_icon[this.likes[j].obj_liked] = "heart-fill"
					}
				}
			},
			//获取remain大头菜交易帖
			async getRemainTurnipTrades(){
				if(this.turnip_pagenum <= (this.turnip_trade_count-1)/10){
					this.turnip_pagenum++;
					this.getTurnipTrades()
				}
			},
			//获取diy交易帖
			async getDiyTrades(){
				const jwt = uni.getStorageSync("skey");
				// console.log("jwt: "+jwt);
				const head = {'Authorization':"Bearer "+jwt};
				// console.log("header: "+head.Authorization);
				const result = await this.$myRequest({
					method: 'GET',
					url: '/trades/?topic=2&pagenum=' + this.diy_pagenum,
					header: head,
				})
				this.diy_trade_count = result.data.count
				this.diy_trades = [...this.diy_trades, ...result.data.results]
				// 初始化点赞图标
				for(let i=0,len=this.diy_trades.length; i<len; i++){
					this.like_icon[this.diy_trades[i].id] = "heart"
				}
				//处理该用户点赞信息
				for(let j=0,len=this.likes.length; j<len; j++){
					if(this.likes[j].thumbs_up_type === 1){
						this.like_icon[this.likes[j].obj_liked] = "heart-fill"
					}
				}
			},
			// 获取remain diy交易帖
			getRemainDiyTrades(){
				if(this.diy_pagenum <= (this.diy_trade_count-1)/10){
					this.diy_pagenum++;
					this.getDiyTrades()
				}
			},
			//获取fossil交易帖
			async getFossilTrades(){
				const jwt = uni.getStorageSync("skey");
				// console.log("jwt: "+jwt);
				const head = {'Authorization':"Bearer "+jwt};
				// console.log("header: "+head.Authorization);
				const result = await this.$myRequest({
					method: 'GET',
					url: '/trades/?topic=3&pagenum=' + this.fossil_pagenum,
					header: head,
				})
				this.fossil_trade_count = result.data.count
				this.fossil_trades = [...this.fossil_trades, ...result.data.results]
				// 初始化点赞图标
				for(let i=0,len=this.fossil_trades.length; i<len; i++){
					this.like_icon[this.fossil_trades[i].id] = "heart"
				}
				//处理该用户点赞信息
				for(let j=0,len=this.likes.length; j<len; j++){
					if(this.likes[j].thumbs_up_type === 1){
						this.like_icon[this.likes[j].obj_liked] = "heart-fill"
					}
				}
			},
			// 获取remain fossil交易帖
			getRemainFossilTrades(){
				if(this.fossil_pagenum <= (this.fossil_trade_count-1)/10){
					this.fossil_pagenum++;
					this.getFossilTrades()
				}
			},
			//获取自由交易帖
			async getFreeTrades(){
				const jwt = uni.getStorageSync("skey");
				// console.log("jwt: "+jwt);
				const head = {'Authorization':"Bearer "+jwt};
				// console.log("header: "+head.Authorization);
				const result = await this.$myRequest({
					method: 'GET',
					url: '/trades/?topic=4&pagenum=' + this.free_pagenum,
					header: head,
				})
				this.free_trade_count = result.data.count
				this.free_trades = [...this.free_trades, ...result.data.results]
				// 初始化点赞图标
				for(let i=0,len=this.free_trades.length; i<len; i++){
					this.like_icon[this.free_trades[i].id] = "heart"
				}
				//处理该用户点赞信息
				for(let j=0,len=this.likes.length; j<len; j++){
					if(this.likes[j].thumbs_up_type === 1){
						this.like_icon[this.likes[j].obj_liked] = "heart-fill"
					}
				}
			},
			//获取remain自由交易帖
			getRemainFreeTrades(){
				if(this.free_pagenum <= (this.free_trade_count-1)/10){
					this.free_pagenum++;
					this.getFreeTrades()
				}	
			},
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
		.add_trade_outside{
			height: 75rpx;
			background-color: transparent;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			width: 100%;
			.btn_add_trade{
				background-color: rgba(233, 130, 40, 0.9);
				color: white;
				height: 65rpx;
				width: 140rpx;
				font-size: 14px;
				line-height: 65rpx;
			}
		}

	}

	//动态广场
	.trends_square {
		margin-top: 200rpx;
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
