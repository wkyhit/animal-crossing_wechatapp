<template>
	<view class="content">
		<view class="info_card">
			<view class="info_card_top">
				<view class="portrait">
					<!-- //personinfo:["星辰岛","北半球","你给的爱太假","5-s1-9720479","我就是我,颜色不一样的烟火","女"], -->
					<!-- <u-avatar :src=userinfo.profile_pic mode="circle" size="large"></u-avatar> -->
					<br>
					<text style="vertical-align: middle; font-weight: 700;"> {{userinfo.nickname}}</text>
				</view>
				<view class="info_card_top_right">
					<view class="info_card_top_right_first">
						<p style="font-size: 20rpx;font-weight: 700;">{{userinfo.island}}</p>
						<text style="font-size: 20rpx;font-weight: 700;" v-if="userinfo.hemisphere=='0'">北半球</text>
						<text style="font-size: 20rpx;font-weight: 700;" v-if="userinfo.hemisphere=='1'">南半球</text>
						<button background-color=blue style="margin-right: 0rpx; width: 120rpx;height: 44rpx;font-size: xx-small;text-align: center;line-height: 50rpx;"
						 @click="changecurrent(3)">设置</button>


					</view>
					<view class="info_card_top_right_second">
						<text style="color:#FF0000;font-weight: 700;">SW- </text><text style="font-size: 25rpx;font-weight: 700;">{{userinfo.friend_sw_number}}</text>
					</view>
					<view class="info_card_top_right_third">
						<text style="margin: 0rpx;font-weight: 600;margin-top: 30rpx;">个性签名:{{}} </text>


						<text style="margin: 0rpx;font-weight: 600;margin-top: 30rpx;">性别: </text>
						<image v-if="userinfo.gender=='0'" style="background-color: #eeeeee;width: 30px; height: 20px;margin-top: 40rpx;"
						 :src="srcman"></image>
						<image v-if="userinfo.gender=='1'" style="background-color: #eeeeee;width: 20px; height: 20px;margin-top: 40rpx;"
						 :src="srcwoman"></image>
					</view>
				</view>
			</view>
			<view class="info_card_bottom">
				<view class="table">
					<view class="tr">

						<view class="th" style="font-weight: 700; ">点赞

						</view>
						<view class="th" style="font-weight: 700; " @click="openfans(1)">粉丝数

						</view>
						<view class="th" style="font-weight: 700; " @click="openfans(0)">关注

						</view>
					</view>
					<view class="tr">
						<view class="th" style="font-weight: 700; ">{{}}</view>
						<view class="th" style="font-weight: 700; ">{{userinfo.fans_num}}</view>
						<view class="th" style="font-weight: 700; ">{{}}</view>

						<text style="margin: 0rpx;font-weight: 600;">上岛时间 {{userinfo.island_created_date}}</text>
					</view>
				</view>


			</view>
		</view>
		<view class="grid_icon">
			<u-tabs :list="tablist" :is-scroll="false" :current="current" @change="changecurrent">

			</u-tabs>

		</view>

		<scroll-view v-if="current==0" class="list" style="margin-top: 5rpx;opacity: 0.6;">
			<u-divider>已收集的宝贝</u-divider>
			<u-cell-group v-for="(item,index) in list" :key="index">
				<u-cell-item icon="setting-fill" :title="item.name" :arrow="false">
					<view class="collection">
						<p v-if="item.number>0"></p>
						<h2 v-if="index==0">{{userinfo.has_fish_num}}/80</h2>
						<h2 v-if="index==1">{{userinfo.has_insect_num}}/80</h2>
						<h2 v-if="index==2">{{userinfo.has_fossil_num}}/73</h2>
						<h2 v-if="index==3">{{userinfo.has_artwork_num}}/43</h2>
						<h2 v-if="index==5">{{userinfo.has_diy_num}}/593</h2>
						<h2 v-if="index==4">{{userinfo.has_furniture_num}}/3243</h2>
						<h2 v-if="index==6">{{userinfo.has_dress_num}}/4648</h2>
						<h2 v-if="index==7">{{userinfo.has_album_num}}/95</h2>
						<!-- <h2 v-if="index==8">{{userinfo.has_milestone_furniture_num}}/97</h2> -->
					</view>
					<u-button class="btn_detail" type="primary" size="mini" @click="openmap(index)">更新</u-button>
				</u-cell-item>
			</u-cell-group>

			<u-divider>图鉴档案完</u-divider>
		</scroll-view>
		<view v-if="current==1" class="arrow">

			<view class="box" v-for="(item,index) in namespace" :key="index">

				<span>
					<u-avatar size="large" :src="item.pic_url" />
					<view class="grid-text">{{item.cn_sname}}</view>
					<u-button class="btn_detail" type="primary" size="mini" @click="onClickMoreInfo('villager',item)">详情</u-button>
				</span>
			</view>
			<view class="box">

				<img src="http://img3.imgtn.bdimg.com/it/u=1153547427,3148212040&fm=26&gp=0.jpg" @click="openmap(15)" style="width: 150rpx;height: 120rpx;" />
				<view class="grid-text" @click="openmap(15)">添加新村民</view>

			</view>
		</view>



		<view v-if="current==2">

			<!-- <image src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591265160798&di=61a4ed4953f10877960dd1511cdb99bb&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20200430%2F008880a4ac4e430a908a8739363fe65d.jpeg"style="width: 750rpx;height: 422rpx;" mode="aspectFit"></image> -->


			<scroll-view class="list" style="margin-top: 1rpx;">

				<u-cell-group v-for="item in trendsdata" :key="index">
					<view class="collection1">

						<u-avatar :src="item.headimg" style="margin-left: 22rpx; column-span: 2;" mode="square" size="large"></u-avatar>
						<span><text style="margin-left: 10rpx;color: #55aaff;font-size: large;">{{item.name}}</text>
						</span>
						<p style="font-size: large;">
							{{item.text}}
						</p>

						<view class="skill">
							<view class="box">
								<img mode="" :src="item.trendsrc1" />
							</view>
							<view class="box">
								<img mode="" :src="item.trendsrc2" />
							</view>
							<view class="box">
								<img mode="" :src="item.trendsrc3" />
							</view>


						</view>



						<u-divider></u-divider>
					</view>
					</u-cell-item>
				</u-cell-group>
			</scroll-view>

		</view>
		<view v-if="current==3">
			<view class="list">
				<uni-list>
					<uni-list-item title="更改个人信息" :show-arrow="true" @click="openchangehz"></uni-list-item>
					<!-- <uni-list-item title="黑名单" :show-arrow="true"@click="openupdatelog"></uni-list-item> -->
					<uni-list-item title="取消" @click="changecurrent(0)"></uni-list-item>

				</uni-list>

			</view>
		</view>
	</view>
	</view>
	</view>

	</view>


</template>

<script>
	export default {
		data() {
			return {

				tablist: [{
					name: '主页'
				}, {
					name: '村民'
				}, {
					name: '动态'
				}],
				current: 0,
				cns_name: '',
				has_dwller_num: 0,
				num: 0,
				idspace: [],
				namespace: [],
				dwellers: [],
				dwellers1: [],
				dwpagenum: 3,
				src: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3023235837,3703646437&fm=26&gp=0.jpg',
				//图鉴类型
				srcman: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2841240923,204544880&fm=26&gp=0.jpg',
				srcwoman: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2207087272,3072193035&fm=26&gp=0.jpg',
				dexType: "fish",
				//已收集
				checked: false,
				srcplus: "http://img3.imgtn.bdimg.com/it/u=1153547427,3148212040&fm=26&gp=0.jpg",

				list: [{
						name: '鱼类',
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
						name: '家具'
					},
					{
						name: 'DIY配方'
					},
					{
						name: '服饰'
					},
					{
						name: '唱片'
					},

				],
				detailItem: '',
				userinfo: {},

				trendsdata: [{
					name: '张三',
					headimg: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=292115226,4263746039&fm=26&gp=0.jpg',
					text: '六一快乐！感谢大家的礼物',
					trendsrc1: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1721187296,2198904697&fm=15&gp=0.jpg',
					trendsrc2: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3221258143,996744225&fm=26&gp=0.jpg',
					trendsrc3: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3892000463,4208461964&fm=26&gp=0.jpg',
				}, {
					name: 'wangwu',
					headimg: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=292115226,4263746039&fm=26&gp=0.jpg',
					text: '六一快乐！感谢大家的礼物',
					trendsrc1: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1721187296,2198904697&fm=15&gp=0.jpg',
					trendsrc2: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3221258143,996744225&fm=26&gp=0.jpg',
					trendsrc3: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3892000463,4208461964&fm=26&gp=0.jpg',
				}, {
					name: 'lisi',
					headimg: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=292115226,4263746039&fm=26&gp=0.jpg',
					text: '国庆节快乐！感谢大家的礼物',
					trendsrc1: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=312066691,832315679&fm=26&gp=0.jpg',
					trendsrc2: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3221258143,996744225&fm=26&gp=0.jpg',
					trendsrc3: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3892000463,4208461964&fm=26&gp=0.jpg',
				}, {
					name: 'wangwu',
					headimg: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=292115226,4263746039&fm=26&gp=0.jpg',
					text: '六一快乐1233333322222222222！感谢大家的礼物',
					trendsrc1: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1721187296,2198904697&fm=15&gp=0.jpg',
					trendsrc2: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3221258143,996744225&fm=26&gp=0.jpg',
					trendsrc3: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3892000463,4208461964&fm=26&gp=0.jpg',
				}, {
					name: 'lisi',
					headimg: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=292115226,4263746039&fm=26&gp=0.jpg',
					text: '国庆节快乐！感谢大家的礼物',
					trendsrc1: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=312066691,832315679&fm=26&gp=0.jpg',
					trendsrc2: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3221258143,996744225&fm=26&gp=0.jpg',
					trendsrc3: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3892000463,4208461964&fm=26&gp=0.jpg',
				}],
				src1: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3336249496,298027406&fm=26&gp=0.jpg',
			};
		},
		methods: {
			changecurrent(index) {
				this.current = index;
				//根据current判断处于哪个标签页
				if (this.current == 1) {
					this.complex();
				}
			},
			//标签页tabs切换事件监听

			openchangehz() {
				uni.navigateTo({
					url:"changehz"
				});
			},
			openmap(index) { //转到相应的图鉴界面
				var app = getApp();
				// var cate_id = event.currentTarget.dataset.cate_id;
				if (index >= 4) {
					index++;
				}
				if (index = 15) {
					index = 4;
				}
				app.globalData.cate_id = index;

				uni.switchTab({
					url: "../map/map"
				});
				console.log(app.globalData.cate_id)

			},
			//获取用户信息
			async getuserInfo() {
				const jwt = uni.getStorageSync("skey");
				const head = {
					'Authorization': "Bearer " + jwt
				};
				const result = await this.$myRequest({
					method: 'GET',
					url: '/users/5/',
					header: head,
				})
				this.userinfo = result.data

				// this.villagers = result.data.results;
				// console.log("村民"+this.villagers[1].id)
			},
			async getposts() {
				const jwt = uni.getStorageSync("skey");
				const head = {
					'Authorization': "Bearer " + jwt
				};
				const result = await this.$myRequest({
					method: 'POST',
					url: '/posts/24/',
					header: head,
				})
				this.userinfo = result.data

				// this.villagers = result.data.results;
				// console.log("村民"+this.villagers[1].id)
			},
			async getdwellerinfo() { //获得村民拥有的小动物的id
				const jwt = uni.getStorageSync("skey");
				const head = {
					'Authorization': "Bearer " + jwt
				};
				const result = await this.$myRequest({
					method: 'GET',
					url: '/user_dweller/?pagenum=' + this.dwpagenum,
					header: head,
				})
				this.dwellers = result.data
				console.log(result.data)
				// this.fish = result.data.results;
			},
			async getdwellericon() { //根据小动物id获取动物的图片与姓名
				const jwt = uni.getStorageSync("skey");
				const head = {
					'Authorization': "Bearer " + jwt
				};
				const result = await this.$myRequest({
					method: 'GET',
					url: '/dwellers/' + this.num + '/',
					header: head,
				})
				// console.log(this.num)
				// console.log(result.data.cn_sname)

				this.cns_name = result.data
				console.log(result.data)



				// this.fish = result.data.results;
			},
			async complex() { //将获取动物id与动物名称整合

				this.getdwellerinfo();
				for (let i = 0; i < this.dwellers.length; i++) {
					// console.log(this.getdwellericon(this.dwellers[i].id))
					this.idspace[i] = this.dwellers[i].dweller;

				}
				for (let i = 0; i < this.idspace.length; i++) {
					//  console.log(this.getdwellericon(this.dwellers[i].id))
					this.num = this.idspace[i]
					//   console.log(this.num)
					await this.getdwellericon();
					this.namespace[i] = this.cns_name
				}
				console.log(this.namespace)

				// return insect_checked_list;
			},
			onClickMoreInfo(dex_type, item) { //跳转到详情界面
				this.dexType = dex_type;
				this.detailItem = item;
				uni.navigateTo({
					url: '/pages/map/mapDetail/villagerDetail?dexType=villager&item=' + encodeURIComponent(JSON.stringify(this.detailItem))
				});
			}
		},
		onLoad() {
			this.getuserInfo();
			this.complex();

		}


	}
</script>

<style lang="scss">
	page {
		background-image: url("https://i0.hdslb.com/bfs/article/1bbad7cad546d3499317ea4607960f7465970140.jpg@1320w_2346h.webp");
		background-size: 750rpx 1200rpx;
	}

	.content {
		position: relative;
		background-color: r;
		height: 1000rpx;
	}

	.list {
		background-color: red;
	}

	.list uni-list {
		uni-list-item {
			height: 150rpx;
			font-size: large;
		}
	}

	.arrow {
		width: 100%;
		display: flex;
		flex-flow: row wrap;
		align-content: space-between;

	}

	.arrow .box {
		min-width: 230rpx;
		max-width: 230rpx;
		box-sizing: border-box;
		margin-left: 15rpx;
		margin-top: 5rpx;
		background-image: url(https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4124047160,2038669557&fm=26&gp=0.jpg);
		padding: 50rpx;
		text-align: center;
		flex: 1;
	}

	.skill {
		width: 100%;
		display: flex;
		flex-flow: row wrap;
		align-content: flex-start;
		justify-content: flex-start;
	}

	.skill .box {
		box-sizing: border-box;
		font-size: 24rpx;
		min-width: 220rpx;
		max-width: 220rpx;
		min-height: 180rpx;
		max-height: 200rpx;
		background-color: white;
		margin-left: 20rpx;
		text-align: center;

		image {
			min-width: 220rpx;
			max-width: 220rpx;
			min-height: 180rpx;
			max-height: 200rpx;
		}
	}

	.grid-text {
		text-align: center;
	}

	.info_card {
		// position: absolute;
		height: 400rpx;
		width: 680rpx;
		background-color: rgba(255, 255, 255, 0.7);
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
		border-radius: 15px;
		margin: auto;
		display: flex;
		flex-direction: column;
		padding: 15rpx;

		.info_card_top {
			// background-image: url(img/qianse.jpg);
			height: 350rpx;
			width: 100%;
			padding: 15rpx;
			display: flex;
			justify-content: flex-start;

			.portrait {
				// float: left;
				flex: 1.5;
			}

			.info_card_top_right {
				flex: 2;

				.info_card_top_right_first {
					display: flex;
					justify-content: flex-start;
					margin-bottom: 20rpx;

					text {
						margin-left: 20rpx;
					}
				}

				.info_card_top_right_second {
					margin-bottom: 20rpx;
				}

				.info_card_top_right_third {
					display: flex;
					justify-content: flex-start;

					text {
						margin-left: 20rpx;
					}
				}
			}
		}

		.info_card_bottom {
			height: 100rpx;
			width: 100%;
			background-image: url(https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1608273396,2211497957&fm=26&gp=0.jpg);
		}

		.collection {
			opacity: 0.5;

		}

		.collection1 {
			background-image: url(https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1608273396,2211497957&fm=26&gp=0.jpg);

		}

		.table {
			border: 0px solid darkgray;


		}

		.tr {
			display: flex;

			justify-content: left;
			text-align: center;
			align-items: center;
		}

		.th {
			width: 100rpx;
			justify-content: center;
			display: flex;
			align-items: center;
		}

		.collection1 span {
			display: inline-block;
			vertical-align: bottom;

		}

		.setpersoninfo {
			display: flex;
			width: 750rpx;
			height: 200rpx;
			margin-top: 500rpx;
			flex-direction: row;

			background-color: black;

		}

		.btn_detail {
			position: absolute;
			left: 0;
			transform: translate(50%);
		}

		.setpersoninfo .box {
			width: %100;
			min-height: 200rpx;
			text-align: center;
			font-size: larger;
		}
	}
</style>
