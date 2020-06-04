<template>
	<view>
		<scroll-view>
			<uni-card>
				<button @click="wxLogin">
					点击登录授权
				</button>
			</uni-card>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				logining: false,

			};
		},
		methods: {
			getToken() {
				uni.request({
					url: 'http://47.240.8.112/jwt_auth/',
					method: 'POST',
					header: {
						'Content-Type': 'application/json'
					},
					data: {
						password: "123123",
						username: "admin"
					},
					success(res) {
						console.log(res);
					}
				})
			},
			wxLogin(e) {
				const that = this;
				that.logining = true;
				let userInfo = e.detail.userInfo;
				uni.login({
					provider: "weixin",
					success: (login_res => {
						let code = login_res.code;
						console.log("code" + code);
						let userinfo = {"nickName": "mynick",
							"gender": "0",
							"fansNum": 29,
							"island": "island",
							"mobile": "18500000000",
							"language": "zh-hans",
							"city": "Guangzhou",
							"province": "Guangdong",
							"country": "China",
							"avatarUrl": "https://static.doufan.tv/animalCrossing/album/44.png"
						};
						uni.request({
							url: 'http://47.240.8.112/api/v1/private/wx_login/',
							method: "POST",
							header: {
								'content-type': 'application/json'
							},
							data: {
								code: code,
								user_info:userinfo
								// user_info: info_res.rawData
							},
							success(res) {
								console.log(res)
								// if (res.statusCode == 200) {
								// 	console.log(' 登录成功')
								// 	// that.$store.commit('login', userInfo);
								// 	uni.setStorageSync("userInfo",userInfo);

								// 	uni.setStorageSync("skey", res.data.data);
								// } else {
								// 	console.log('登录失败')
								// 	console.log(res)
								// }
							},
							fail(error) {
								console.log(error)
							}
						})
						// uni.hideLoading()
						// uni.navigateBack()
					})
				})

			}

		}
	}
</script>

<style lang="scss">

</style>
