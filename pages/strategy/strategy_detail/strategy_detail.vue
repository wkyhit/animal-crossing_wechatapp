<template>
	<view>
		<web-view :webview-styles="webviewStyles" :src="webUrl"></web-view>
		<!-- <scroll-view>
			<uni-card>
				<button @click="wxLogin">
					点击登录授权
				</button>
				<button @click="authorize">
					权限授权
				</button>
				<button @click="uploadImg">上传图片</button>
			</uni-card>
		</scroll-view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				logining: false,
				webUrl:"",
				webviewStyles: {
					progress: {
						color: '#FF3333'
					}
				}
			};
		},
		onLoad(option) {
			this.webUrl = option.weburl
		},
		methods: {
			// authorize(e){
			// 	const that = this;
			// 	uni.authorize({
			// 	    scope: 'scope.userLocation',
			// 	    success() {
			// 	        uni.getLocation({
			// 	            type: 'wgs84',
			// 	            success: function (res) {
			// 	                console.log('当前位置的经度：' + res.longitude);
			// 	                console.log('当前位置的纬度：' + res.latitude);
			// 	            }
			// 	        });
			// 	    }
			// 	})
			// },
			uploadImg() {
				const jwt = uni.getStorageSync("skey");
				const head = {
					'Authorization': "Bearer " + jwt
				};
				uni.chooseImage({
					success: function(chooseImageRes) {
						const tempFilePaths = chooseImageRes.tempFilePaths;
						uni.uploadFile({
							url: 'http://47.240.8.112/api/v1/private/upload/', //仅为示例，非真实的接口地址
							filePath: tempFilePaths[0],
							name: 'file',
							header: head,
							// formData: {
							//     'user': 'test'
							// },
							success: function(uploadFileRes) {
								console.log(uploadFileRes.data);
							}
						});
					}
				});
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
						let userinfo = {
							"nickName": "mynick",
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
								// user_info:userinfo
								// user_info: info_res.rawData
							},
							success(res) {
								console.log(res)
								// if (res.statusCode == 200) {
								// 	console.log(' 登录成功')
								// 	// that.$store.commit('login', userInfo);
								// 	uni.setStorageSync("userInfo",userInfo);

								uni.setStorageSync("skey", res.data.jwt);
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
