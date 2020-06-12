<template>
	<view class="content">
		<!-- 帖子类型选择 -->
		<view class="category_choose">
			<view class="cate_sheet">
				<u-select v-model="show" :list="cate_list"></u-select>
				<!-- <button class="btn_select_cate" @click="clickCateSelect">#{{}}</button> -->
				<!-- <u-action-sheet :list="cate_list" v-model="show" ></u-action-sheet> -->
			</view>
		</view>
		<!-- 发布动态 -->
		<view class="post_trends">
			<view class="card">
				<view class="title">
					<input class="title_input" placeholder="请输入标题" :value="post_trends_form.title" @input="titleChange" />
				</view>
				<view class="context">
					<textarea class="context_input" placeholder="请输入内容..." maxlength=-1 :value="post_trends_form.content" @input="contentChange"></textarea>
					<!-- <input class="context_input" placeholder="请输入内容..."  /> -->
				</view>
				<view class="upload_img">
					<u-upload ref="uUpload" :action="action" :header="head" name="file" @on-change="uploadChange" :file-list="fileList" max-count="1"  @on-uploaded="onUploaded"></u-upload>
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
				// 帖子类别选择项
				cate_list:[
					{label:"大头菜",value:1},
					{label:"DIY交换",value:2},
					{label:"化石交换",value:3},
					{label:"自由交易",value:4},
				],
				// 类别选择器显示控制
				show:true,
				// 类别选择的内容
				cate_select:"",
			};
		},
		methods:{
			clickCateSelect(index){
				this.show = !this.show
				console.log("click: " + (index+1))
			}
		}
	}
</script>

<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	// 帖子类型选择
	.category_choose{
		width: 100%;
		height: 100rpx;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		.cate_sheet{
			width: 80%;
			height:100%;
			.btn_select_cate{
				height: 75rpx;
				width: 100%;
				background-color: rgba(253, 96, 48, 0.9);
				color: white;
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
