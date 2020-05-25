<template>
	<view>
		<scroll-view>
			<uni-card>
				<button @click="getToken">
					点击请求token
				</button>
			</uni-card>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			getToken(){
				uni.request({
					url: 'http://47.240.8.112/jwt_auth/',
					method: 'POST',
					header: {
						'Content-Type': 'application/json'
					},
					data:{
						password: "123123",
						username: "admin"
					},
					success(res) {
						console.log(res);
					}
				})
			}
		}
	}
</script>

<style lang="scss">

</style>
