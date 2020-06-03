<template>
	<view>
		<view class="personalInfo">
			<view class="portrait">
				<u-avatar :src="portraitsrc" mode="square" size="large"></u-avatar>
			</view>
			<view class="right_info">
				<text class="name_info">用户昵称: </text>
				<text class="sign_info">个性签名: </text>
			</view>
		</view>
		<view class="list">
			<uni-list>
			    <uni-list-item title="标题文字" :show-arrow="false"></uni-list-item>
			    <uni-list-item title="标题文字"></uni-list-item>
			    <uni-list-item title="标题文字" :show-badge="true" badge-text="12"></uni-list-item>
			    <uni-list-item title="禁用状态" :disabled="true" :show-badge="true" badge-text="12"></uni-list-item>
			</uni-list>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				portraitsrc:"http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg",
			};
		}
	}
</script>

<style lang="scss">
	page{
		background-image: url("https://i0.hdslb.com/bfs/article/1bbad7cad546d3499317ea4607960f7465970140.jpg@1320w_2346h.webp");
		background-size: 750rpx 1200rpx;
	}
	.personalInfo{
		width: 100%;
		height: 300rpx;
		background-color: rgba(255, 255, 255, 0.7);
		display: flex;
		justify-content: space-evenly;
		.portrait{
			flex: 1;
			background-color: blue;
			display: flex;
			justify-content: center;
			align-items: center;
			
		}
		.right_info{
			flex: 2;
			background-color: red;
			display: flex;
			
		}
	}
	.list{
		
	}
</style>
