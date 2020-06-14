<template>
	<view>
		<view class="personalInfo">
			<view class="portrait">
				<!-- <u-avatar :src="portraitsrc"  style="margin-left: 25rpx; column-span: 2;"  mode="circle" size="large"></u-avatar> -->
				<text style="margin-left: 25rpx;color: #55aaff;font-size: large;">
					更换头像</text>
				<view class="upload_img">
					<u-upload ref="uUpload" :action="action" :header="head" name="file" :file-list="fileList" max-count="1"
					 @on-uploaded="onUploaded"></u-upload>
				</view>
			</view>
		</view>
		<view class="arrow">
			<u-cell-group>
				<span>
					<u-field label="昵称" placeholder="请输入" v-model="kickname"></u-field>
				</span>
				<span>
					<u-radio-group v-model="gender" @change="radioGroupChange">
						<text style="margin-left: 28rpx;">性别</text>
						<u-radio @change="radioChange" v-for="(item, index) in list1" :key="index" :name="item.name" :disabled="item.disabled">
							{{item.name}}
						</u-radio>
					</u-radio-group>
				</span>
				<span>
					<u-field label="岛名" v-model="island" placeholder="请输入"></u-field>
				</span>
				<span>
					<u-field v-model="friends" label="好友编号" maxlength="12" placeholder="请输入12位好友编号(纯数字)"></u-field>
				</span>
				<span>
					<!-- <u-field v-model="personsignature" label="个性签名" placeholder="请输入"></u-field> -->
				</span>
				<span>
					<u-radio-group v-model="hemisphere" @change="radioGroupChange">
						<text style="margin-left: 28rpx;">半球</text>
						<u-radio @change="radioChange" v-for="(item, index) in list" :key="index" :name="item.name" :disabled="item.disabled">
							{{item.name}}
						</u-radio>
					</u-radio-group>
				</span>
			</u-cell-group>
			<span>
				<button @click="updatehz">保存</button>
			</span>
			<text>{{hemisphere}}</text>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
						name: '北半球',
						checked: false,
						disabled: false
					},
					{
						name: '南半球',
						checked: false,
						disabled: false
					},
				],
				post_trends_form: {
					title: "",
					content: "",
					post_pic: "",
				},
				action: "http://47.240.8.112/api/v1/private/upload/",
				list1: [{
						name: '男',
						checked: false,
						disabled: false
					},
					{
						name: '女',
						checked: false,
						disabled: false
					},
				],
				value: '',
				// 请求头部(上传照片)
				head: {},
				// 头像
				headimg: '',
				// 名字
				kickname: "",
				// 性别
				gender: "",
				// 岛名
				island: '',
				// 性别
				sex: '',
				// 半球
				halfball: '',
				friends: '',
				personsignature: '',
				hemisphere: '',
				myid: '6',
				current: 0,
				personinfo: ["星辰岛", "北半球", "你给的爱太假", "5-s1-9720479", "我就是我,颜色不一样的烟火", "女"],
				settinginfo: ["12", '23', '45'],
				portraitsrc: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3023235837,3703646437&fm=26&gp=0.jpg",
			};
		},
		methods: {
			//图片上传成功事件，lists为全部图片的数组集合
			onUploaded(lists) {
				let tmp_post_pic = ""
				const filesArr = lists;
				const reg = /http:\/\/47\.240\.8\.112\/media\//;
				for (let i = 0, len = lists.length; i < len; i++) {
					let array = JSON.parse(filesArr[i].response)
					let str = array.file
					str = str.replace(reg, "")
					if (i === lists.length - 1) {
						tmp_post_pic += str
						break;
					}
					tmp_post_pic += str + ";"
				}
				//将临时图片url赋予表单的pic
				this.headimg = tmp_post_pic
				console.log(tmp_post_pic);
			},
			radioChange(e) {
				// console.log(e);
			},
			checknum() {
				onkeyup = "this.value=this.value.replace(/\D/g,'')";
				onafterpaste = "this.value=this.value.replace(/\D/g,'')";
			},
			// 选中任一radio时，由radio-group触发
			radioGroupChange(e) {
				// console.log(e);
			},
			uploadChange(res) {
				// console.log(res)
			},
			// 获取user-info
			async getUserInfo(){
				const jwt = uni.getStorageSync("skey");
				const head = {
					'Authorization': "Bearer " + jwt
				};
				const result = await this.$myRequest({
					method: 'GET',
					url: '/users/' + this.myid + '/',
					header: head,
				})
				// console.log(result);
				this.friends = result.data.friend_sw_number
				this.island = result.data.island
				this.kickname = result.data.nickname
				if(result.data.gender === "0"){
					this.$set(this.list1[0],'checked',true)
					// this.list1[0].checked = true 
				}else{
					// this.list1[1].checked = true
					this.$set(this.list1[1],'checked',true)
				}
				
				if(result.data.hemisphere === "0"){
					// this.list[0].checked = true
					this.$set(this.list[0],'checked',true)
				}else{
					this.$set(this.list[1],'checked',true)
					// this.list[1].checked = true
				}
			},
			//提交表单
			async updatehz() {
				if (this.gender == '男') {
					this.sex = '0'
				} else {
					this.sex = '1';
				}
				if (this.hemisphere == '北半球') {
					this.halfball = '0';
				} else {
					this.halfball = '1';
				}
				const jwt = uni.getStorageSync("skey");
				const head = {
					'Authorization': "Bearer " + jwt
				};
				const result = await this.$myRequest({
					method: 'PUT',
					url: '/users/' + this.myid + '/',
					header: head,
					data: {
						nickname: this.kickname,
						gender: this.sex,
						island: this.island,
						friend_sw_number: this.friends,
						hemisphere: this.halfball,
						profile_pic: this.headimg
					},
				})
				this.kickname = ""
				this.gender = ""
				this.island = ""
				this.friends = ""
				this.$refs.uUpload.clear()
				this.hemisphere = ""
				uni.showToast({
					title:"修改信息成功",
					icon:"success"
				})
				setTimeout(()=>{
					uni.navigateBack({
						delta:1
					})
				},1000)
				// console.log(this.headimg)
				// console.log(result)
				// this.villagers = result.data.results;
				// console.log("村民"+this.villagers[1].id)
			}
		},
		onLoad() {
			const jwt = uni.getStorageSync("skey");
			const headers = {
				'Authorization': "Bearer " + jwt
			};
			this.head = headers;
		},
		onShow() {
			this.myid = uni.getStorageSync("sid")
			setTimeout(()=>{
				this.getUserInfo()
			},1000)
			// uni.startPullDownRefresh()
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
			flex: 1;

			display: flex;
			justify-content: left;
			align-items: center;

		}

		.right_info {
			flex: 2;
			background-color: white;
			display: flex;

		}
	}
	.list {}
	.settingtext {
		font-size: medium;
		height: 100rpx;
		width: 100%;
		background-image: url(https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1608273396,2211497957&fm=26&gp=0.jpg);
		line-height: 50rpx;
	}

	.info_card {
		height: 100rpx;
		width: 100%;
		background-image: url(https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1608273396,2211497957&fm=26&gp=0.jpg);
	}
	.upload_img {}
</style>
