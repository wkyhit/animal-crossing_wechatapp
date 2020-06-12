<template>
	<view class="content">
		<!-- 帖子类型选择 -->
		<view class="category_choose">
			<view class="cate_choose_body">
				<view class="cate_select_text">
					交易类型：
				</view>
				<view class="cate_select_picker">
					<picker @change="clickCateSelect" :value="cate_index" :range="cate_list">
						<view class="uni-input">{{cate_list[cate_index]}}</view>
					</picker>
				</view>
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
					<u-upload ref="uUpload" :action="action" :header="head" name="file" :file-list="fileList" max-count="1"  @on-uploaded="onUploaded"></u-upload>
				</view>
				<!-- <view class="submit1">
					<button class="btn_submit" :value="new_trend" @click="submitTrends">提交</button>
				</view> -->
			</view>
			<view class="submit">
				<button class="btn_submit" @click="submitTrade">提交</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 帖子类别选择项
				cate_list:['大头菜','DIY交换','化石交换','自由交易'],
				// 类别选择器所选择的值
				cate_index:0,
				// 类别选择的内容
				cate_select:"",
				// 请求头部（上传图片）
				head:{},
				// 图片上传地址
				action:"http://47.240.8.112/api/v1/private/upload/",
				//提交动态的表单
				post_trends_form:{
					topic:"1",
					title:"",
					content:"",
					post_pic:"",
					status:0,
				},
			};
		},
		methods:{
			//帖子类别选择
			clickCateSelect(e){
				this.cate_index = e.detail.value;
				let num = parseInt(this.cate_index)+1
				this.post_trends_form.topic = num+""
			},
			// 监听title input change 事件
			titleChange(e){
				this.post_trends_form.title = e.detail.value
			},
			// 监听content input change 事件
			contentChange(e){
				this.post_trends_form.content = e.detail.value
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
			//提交交易帖
			async submitTrade(){
				const jwt = uni.getStorageSync("skey");
				const head = {'Authorization':"Bearer "+jwt};
				const result = await this.$myRequest({
					method: 'POST',
					url: '/trades/',
					header: head,
					data: {
						title:this.post_trends_form.title,
						content:this.post_trends_form.content,
						topic: this.post_trends_form.topic,
						trade_pic:this.post_trends_form.post_pic,
						status:this.post_trends_form.status,
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
				uni.navigateBack({
					delta: 1
				})
			}
		},
		onLoad() {
			const jwt = uni.getStorageSync("skey");
			const headers = {'Authorization':"Bearer "+jwt};
			this.head = headers;
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
		margin-top: 20rpx;
		width: 100%;
		height: 100rpx;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		.cate_choose_body{
			border-radius: 38.96rpx;
			box-shadow: 0px 10px 30px rgba(209, 213, 223, 0.5);
			background-color: rgba(253, 96, 48, 0.9);
			width: 50%;
			height: 100%;
			display: flex;
			justify-content: space-evenly;
			align-items: center;
			.cate_select_text{
				width: 40%;
				height: 100%;
				vertical-align: middle;
				text-align: center;
				line-height: 100rpx;
			}
			.cate_select_picker{
				width: 50%;
				height:100%;
				.uni-input{
					line-height: 100rpx;
				}
				// .btn_select_cate{
				// 	height: 75rpx;
				// 	width: 100%;
				// 	background-color: rgba(253, 96, 48, 0.9);
				// 	color: white;
				// }
			}
		}
		
	}
	//发布动态
	.post_trends{
		margin-top: 20rpx;
		height: 1200rpx;
		width: 100%;
		display: flex;
		flex-direction: column;
		.card{
			margin: 20rpx auto;
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
