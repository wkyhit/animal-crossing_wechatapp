<template>
	<view>
		<view v-if="current==0">
			<view class="personalInfo">
				<view class="portrait">
					<u-avatar :src="userinfo.profile_pic" style="margin-left: 25rpx; column-span: 2;" mode="circle" size="large"></u-avatar>
					<span>
						<p style="font-size: large;">
							{{userinfo.nickname}}
						</p>
					</span>
				</view>
				<view class="logout">
					<button class="btn_logout" @click="wxLogout">退出</button>
				</view>
			</view>
			<view class="list">
				<uni-list>
					<uni-list-item title="我的护照" :show-arrow="true" @click="openmysite"></uni-list-item>
					<uni-list-item title="更新日志" :show-arrow="true" @click="openupdatelog"></uni-list-item>
					<uni-list-item title="我的私信" :show-badge="true" :badge-text="settinginfo[0]" @click="onClickToMsg"></uni-list-item>
					<uni-list-item title="关于我们" @click="openaboutus" :show-badge="true" :badge-text="settinginfo[2]"></uni-list-item>
				</uni-list>

			</view>
		</view>
		<view v-if="current==1">
			<view class="personalInfo">
				<view class="portrait">
					<u-avatar :src="portraitsrc" style="margin-left: 25rpx; column-span: 2;" mode="circle" size="large"></u-avatar>
					<span>
						<p style="font-size: large;">
							请登录
						</p>
					</span>
					<button @click="wxLogin">登录</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current:'',
				userinfo: [],
				personinfo: ["星辰岛", "北半球", "你给的爱太假", "5-s1-9720479", "我就是我,颜色不一样的烟火", "女"],
				settinginfo: ["12", '23', '45'],
				aboutus: [
					"我们都是来自五湖四海，为了一个共同的革命目标，走到一起来了。我们还要和全国大多数人民走这一条路。我们今天已经领导着有九千一百万人口的根据地⑷，但是还不够，还要更大些，才能取得全民族的解放。我们的同志在困难的时候，要看到成绩，要看到光明，要提高我们的勇气。中国人民正在受难，我们有责任解救他们，我们要努力奋斗。要奋斗就会有牺牲，死人的事是经常发生的。但是我们想到人民的利益，想到大多数人民的痛苦，我们为人民而死，就是死得其所。不过，我们应当尽量地减少那些不必要的牺牲。我们的干部要关心每一个战士，一切革命队伍的人都要互相关心，互相爱护，互相帮助。",
					"反恐精英：全球攻势（CS:GO）2020年6月4日更新补丁大小96MB，主要内容为改进了纹理流送功能和科洛林、阿努比斯两张地图。游戏客户端版本：1.37.5.5渲染纹理流送现在会加载标记为no mip maps或no lod的完整分辨率贴图（应该是修复之前某些创意工坊地图贴图错误）。"
				],
				portraitsrc: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3023235837,3703646437&fm=26&gp=0.jpg",
			};
		},
		methods: {
			// 监听下拉刷新
			onPullDownRefresh(){
				this.userinfo = ""
				let jwt = uni.getStorageSync("skey");
				setTimeout(()=>{
					// this.getuserInfo()
					// if (jwt !== '') {
					// 	this.current = 0
					// 	this.getuserInfo()
					// } else {
					// 	this.current = 1
					// }
					//判断是否登录
					this.checkload()
					uni.stopPullDownRefresh()
				})
			},
			// 登录按钮点击事件
			wxLogin(e){
				const that = this;
				that.logining = true;
				// let userInfo = e.detail.userInfo;
				uni.login({
					provider: "weixin",
					success: (login_res => {
						let code = login_res.code;
						// console.log("code" + code);
						uni.request({
							url: 'http://47.240.8.112/api/v1/private/wx_login/',
							method: "POST",
							header: {
								'content-type': 'application/json'
							},
							data: {
								code: code,
								// user_info:userinfo
								// user_info: info_res.rawData
							},
							success(res) {
								console.log(res)
								// 保存jwt
								uni.setStorageSync("skey", res.data.jwt);
								// 保存id信息
								uni.setStorageSync("sid",res.data.user.id)
								// 刷新页面
								uni.startPullDownRefresh()
							},
							fail(error) {
								console.log(error)
							}
						})
					})
				})
			},
			// 退出按钮点击事件
			wxLogout(){
				// try {
				//     uni.removeStorageSync('skey');
				// 	uni.removeStorageSync('sid');
				// } catch (e) {
				// 	// error
				// }
				uni.clearStorage();
				uni.startPullDownRefresh()
			},
			openmysite() {
				uni.navigateTo({
					url: "../mysite/mysite"
				});
			},
			async getuserInfo() {
				const jwt = uni.getStorageSync("skey");
				const head = {
					'Authorization': "Bearer " + jwt
				};
				const user_id = uni.getStorageSync("sid");
				const result = await this.$myRequest({
					method: 'GET',
					url: '/users/' + user_id +'/',
					header: head,
				})
				console.log(result)
				this.userinfo = result.data

				// this.villagers = result.data.results;
				// console.log("村民"+this.villagers[1].id)
			},

			openaboutus() {
				uni.navigateTo({
					url: "./aboutus"
				});
			},
			openupdatelog() {
				uni.navigateTo({
					url: "./myupdate"
				});
			},
			onClickToMsg() {
				uni.navigateTo({
					url: '/pages/Message/Message'
				});
			},
			// 判断是否登录
			checkload() {
				let jwt = uni.getStorageSync("skey");
				if (jwt !== '') {
					this.current = 0
					this.getuserInfo()
				} else {
					this.current = 1
				}
			},
			onLoad() {
				// this.getuserInfo();
				this.checkload();
			},
			onShow() {
				this.checkload();
			}
		}
	}
</script>

<style lang="scss">
	page {
		background-image: url("https://i0.hdslb.com/bfs/article/1bbad7cad546d3499317ea4607960f7465970140.jpg@1320w_2346h.webp");
		background-size: 750rpx 1200rpx;
	}

	.personalInfo {
		width: 100%;
		height: 300rpx;
		background-color: rgba(255, 255, 255, 0.7);
		display: flex;
		justify-content: space-evenly;

		.portrait {
			flex: 2;
			display: flex;
			justify-content: left;
			align-items: center;

		}
		.logout{
			flex: 1;
			display: flex;
			justify-content: space-evenly;
			align-items: center;
		}

		.right_info {
			flex: 2;
			background-color: white;
			display: flex;

		}
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

	.info_card {
		height: 100rpx;
		width: 100%;
		background-image: url(https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1608273396,2211497957&fm=26&gp=0.jpg);
	}
</style>
