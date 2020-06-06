<template>
	<view class="content">
		<view class="topBar">
			<u-tabs :list="list" :is-scroll="true" :current="current" @change="changeMap"></u-tabs>
			<u-search placeholder="输入名称可模糊搜索" v-model="keyword" :clearabled="true" shape="round" :show-action="true" action-text="搜索"
			 :animation="true" @change="clickToSearch"></u-search>
		</view>

		<!-- 鱼类图鉴列表 -->
		<scroll-view v-show="current==0" class="list" :scroll-y="true" @scrolltolower="getRemainFishInfo">
			<view class="fishAndinsects_view" v-for="(item,index) in fish" :key="index">
				<image class="v_img" :src="item.pic_url"></image>
				<u-cell-group class="cell-group" >
					<u-cell-item :title="item.cn_sname" :arrow="false" hover-class="none">
						<view class="item">
							<!-- <p class="name">{{item.name}}</p> -->
							<p class="description">{{item.fish_size}}</p>
							<p class="price">{{item.price}}</p>
							<p></p>
						</view>
						<view class="collection">
							<u-button class="btn_detail" type="primary" size="mini" @click="onClickMoreInfo('fish',item)">详情</u-button>
							<p>已收集</p>
							<u-switch class="sw_button" slot="right-icon" @change="fishCheckedChange(item.id)" v-model="fishChecked[item.id-1]"></u-switch>
						</view>
					</u-cell-item>
				</u-cell-group>
			</view>
			<u-divider>鱼类图鉴完</u-divider>
		</scroll-view>
		<!-- 虫类图鉴列表 -->
		<scroll-view v-show="current==1" class="list" :scroll-y="true" @scrolltolower="getRemainInsectInfo">
			<view class="fishAndinsects_view" v-for="(item,index) in insect" :key="index">
				<image class="v_img" :src="item.pic_url"></image>
				<u-cell-group class="cell-group" >
					<u-cell-item :title="item.cn_sname" :arrow="false" hover-class="none">
						<view class="item">
							<!-- <p class="name">{{item.name}}</p> -->
							<p class="description">{{item.catch_place}}</p>
							<p class="price">{{item.price}}</p>
							<p></p>
						</view>
						<view class="collection">
							<u-button class="btn_detail" type="primary" size="mini" @click="onClickMoreInfo('insect',item)">详情</u-button>
							<p>已收集</p>
							<u-switch class="sw_button" slot="right-icon" @change="insectCheckedChange(item.id)" v-model="insectChecked[item.id-1]"></u-switch>
						</view>
					</u-cell-item>
				</u-cell-group>
			</view>
			<u-divider>虫类图鉴完</u-divider>
		</scroll-view>

		<!-- 化石图鉴列表 -->
		<scroll-view v-show="current==2" class="list" style="margin-top: 150rpx;" :scroll-y="true" @scrolltolower="getRemainFossilInfo">
			<view class="artsAndfossil_view" v-for="(item,index) in fossil" :key="index">
				<image class="v_img" :src="item.pic_url"></image>
				<u-cell-group class="cell-group">
					<u-cell-item :title="item.cn_sname" :arrow="false" hover-class="none">
						<view class="item">
							<!-- <p class="name">{{item.name}}</p> -->
							<p class="price">{{item.price}}</p>
						</view>
						<view class="collection">
							<u-button class="btn_detail" type="primary" size="mini" @click="onClickMoreInfo('fossil',item)">详情</u-button>
							<p>已收集</p>
							<u-number-box :value="0" @change="valChange"></u-number-box>
						</view>
					</u-cell-item>
				</u-cell-group>
			</view>
			<u-divider>化石图鉴完</u-divider>
		</scroll-view>
		<!-- 艺术品图鉴列表 -->
		<scroll-view v-show="current==3" class="list" style="margin-top: 150rpx;" :scroll-y="true" @scrolltolower="getRemainArtWorkInfo">
			<view class="artsAndfossil_view" v-for="(item,index) in artWork" :key="index">
				<image class="v_img" :src="item.logo_url"></image>
				<u-cell-group class="cell-group">
					<u-cell-item :title="item.cn_sname" :arrow="false" hover-class="none">
						<view class="collection">
							<u-button class="artwork_detail" type="primary" size="mini" @click="onClickMoreInfo('artwork',item)">详情</u-button>
							<p v-if="item.number>0">(已捐)</p>
							<u-number-box :value="item.number" :min="0" @change="valChange"></u-number-box>
						</view>
					</u-cell-item>
				</u-cell-group>
			</view>
			<u-divider>艺术品图鉴完</u-divider>
		</scroll-view>
		<!-- 村民图鉴 -->
		<scroll-view v-show="current==4" class="list" :scroll-y="true" @scrolltolower="getRemainVillagerInfo">
			<view class="villager_view" v-for="(item,index) in villagers" :key="index">
				<image class="v_img" :src="item.icon_url"></image>
				<!-- <u-avatar :src="item.pic_url" mode="square" size="large"></u-avatar> -->
				<u-cell-group class="cell-group">
					<u-cell-item :title="item.cn_sname" :arrow="false" hover-class="none">
						<view class="item" @click="onClickMoreInfo('villager')">
							<!-- <p class="name">{{item.name}}</p> -->
							<p class="description">{{item.race}}</p>
							<p class="price">{{item.birth_month}}月{{item.birth_day}}日</p>
							<p></p>
						</view>
						<view class="collection">
							<u-button class="btn_detail" type="primary" size="mini" @click="onClickMoreInfo('villager',item)">详情</u-button>
							<p>已入住</p>
							<u-switch class="sw_button" slot="right-icon" @change="villagerCheckedChange(item.id)" v-model="villagerChecked[item.id-1]"></u-switch>
						</view>
					</u-cell-item>
				</u-cell-group>
			</view>
			<u-divider>村民图鉴完</u-divider>
		</scroll-view>
		<!-- 家具图鉴 -->
		<scroll-view v-show="current==5" class="list" :scroll-y="true" @scrolltolower="getRemainFurnitureInfo">
			<view class="fishAndinsects_view" v-for="(item,index) in furniture" :key="index">
				<image class="v_img" :src="item.pic_url"></image>
				<u-cell-group class="cell-group">
					<u-cell-item :title="item.cn_sname" :arrow="false" hover-class="none">
						<view class="item">
							<!-- <p class="name">{{item.name}}</p> -->
							<p class="description">{{item.color}}</p>
							<!-- 获取方式 -->
							<p class="price">{{item.obtain_way}}</p>
							<p></p>
						</view>
						<view class="collection">
							<u-button class="btn_detail" type="primary" size="mini" @click="onClickMoreInfo('furniture',item)">详情</u-button>
							<p>已收集</p>
							<u-switch class="sw_button" slot="right-icon" @change="furnitureCheckedChange(item.id)" v-model="furnitureChecked[item.id-1]"></u-switch>
						</view>
					</u-cell-item>
				</u-cell-group>
			</view>
			<u-divider>家具图鉴完</u-divider>
		</scroll-view>
		<!-- diy图鉴 -->
		<scroll-view v-show="current==6" class="list" :scroll-y="true" @scrolltolower="getRemainDiyInfo">
			<view class="artsAndfossil_view" v-for="(item,index) in diy" :key="index">
				<image class="v_img" :src="item.pic_url"></image>
				<u-cell-group class="cell-group">
					<u-cell-item :title="item.cn_sname" :arrow="false" hover-class="none">
						<view class="collection">
							<u-button class="artwork_detail"  type="primary" size="mini" @click="onClickMoreInfo('diy',item)">详情</u-button>
							<p>已有</p>
							<u-switch @change="diyCheckedChange(item.id)" v-model="diyChecked[item.id-1]"></u-switch>
						</view>
					</u-cell-item>
				</u-cell-group>
			</view>
			<u-divider>diy图鉴完</u-divider>
		</scroll-view>
		<!-- 服装图鉴 -->
		<scroll-view v-show="current==7" class="list" :scroll-y="true" @scrolltolower="getRemainDressInfo">
			<view class="artsAndfossil_view" v-for="(item,index) in dress" :key="index">
				<image class="v_img" :src="item.pic_url"></image>
				<u-cell-group class="cell-group">
					<u-cell-item :title="item.cn_sname" :arrow="false" hover-class="none">
						<view class="collection">
							<u-button class="artwork_detail"  type="primary" size="mini" @click="onClickMoreInfo('dress',item)">详情</u-button>
							<p>已有</p>
							<u-switch @change="dressCheckedChange(item.id)" v-model="dressChecked[item.id-1]"></u-switch>
						</view>
					</u-cell-item>
				</u-cell-group>
			</view>
			<u-divider>服装图鉴完</u-divider>
		</scroll-view>
		<!-- 唱片图鉴 -->
		<scroll-view v-show="current==8" class="list" :scroll-y="true" @scrolltolower="getRemainalbumsInfo">
			<view class="artsAndfossil_view" v-for="(item,index) in albums" :key="index">
				<image class="v_img" :src="item.cover_url"></image>
				<u-cell-group class="cell-group">
					<u-cell-item :title="item.cn_sname" :arrow="false" hover-class="none">
						<view class="collection">
							<p>已有</p>
							<u-switch @change="albumsCheckedChange(item.id)" v-model="albumsChecked[item.id-1]"></u-switch>
						</view>
					</u-cell-item>
				</u-cell-group>
			</view>
			<u-divider>唱片图鉴完</u-divider>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//tab标签当前选中的值
				current: 0,
				// 搜索框的值
				keyword:'',
				//图鉴类型
				dexType: "fish",
				//详情item
				detailItem: [],
				//鱼类已收集
				fish_checked: [1,3,4],
				// 虫类已收集
				insect_checked:[1,4,5],
				// 化石已收集（数量）
				fossil_number:[],
				// 艺术品已收集(数量)
				artwork_number:[],
				// 村民已入住
				villager_checked:[1,19,32,42],
				// 家具已收集
				furniture_checked:[1,10,32,25],
				// diy已收集
				diy_checked:[1,2,3,4,6,9,12],
				// 服装已收集
				dress_checked:[1,2,4,12,23],
				// 唱片已收集
				albums_checked:[1,2,3,5,7],
				//tabs列表
				list: [{
						name: '鱼类'
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
						name: '村民'
					},
					{
						name: '家具'
					},
					{
						name: 'diy'
					},
					{
						name: '服装'
					},
					{
						name: '唱片'
					},


				],
				//鱼类信息
				fish: [],
				//鱼类页数
				fishPageNum: 1,
				//虫类信息
				insect: [],
				//虫类页数
				insectPageNum: 1,
				//化石信息
				fossil: [],
				//化石页数
				fossilPageNum: 1,
				//艺术品信息
				artWork: [],
				//艺术品页数
				artWorkPageNum: 1,
				//村民
				villagers: [],
				//村民页数
				villagerPageNum: 1,
				//家具
				furniture: [],
				//家具页数
				furniturePageNum: 1,
				//diy
				diy: [],
				//diy页数
				diyPageNum: 1,
				//服装
				dress: [],
				//服装页数
				dressPageNum: 1,
				//唱片
				albums: [],
				//唱片页数
				albumsPageNum: 1,
			};
		},
		computed:{
			//鱼类已收集数组
			fishChecked(){
				let fish_checked_list=[]
				for(let i=0;i<80;i++){
					// 如果有该标记,则压入true
					if(this.fish_checked.includes(i+1)){
						fish_checked_list.push(true);
					}else{
						fish_checked_list.push(false);
					}
				}
				return fish_checked_list;
			},
			//虫类已收集数组
			insectChecked(){
				let insect_checked_list=[]
				for(let i=0;i<80;i++){
					// 如果有该标记,则压入true
					if(this.insect_checked.includes(i+1)){
						insect_checked_list.push(true);
					}else{
						insect_checked_list.push(false);
					}
				}
				return insect_checked_list;
			},
			//村民已入住数组
			villagerChecked(){
				let villager_checked_list=[]
				for(let i=0;i<391;i++){
					// 如果有该标记,则压入true
					if(this.villager_checked.includes(i+1)){
						villager_checked_list.push(true);
					}else{
						villager_checked_list.push(false);
					}
				}
				return villager_checked_list;
			},
			//家具已收集数组
			furnitureChecked(){
				let furniture_checked_list=[]
				for(let i=0;i<3303;i++){
					// 如果有该标记,则压入true
					if(this.furniture_checked.includes(i+1)){
						furniture_checked_list.push(true);
					}else{
						furniture_checked_list.push(false);
					}
				}
				return furniture_checked_list;
			},
			//diy已收集数组
			diyChecked(){
				let diy_checked_list=[]
				for(let i=0;i<593;i++){
					// 如果有该标记,则压入true
					if(this.diy_checked.includes(i+1)){
						diy_checked_list.push(true);
					}else{
						diy_checked_list.push(false);
					}
				}
				return diy_checked_list;
			},
			//服装已收集数组
			dressChecked(){
				let dress_checked_list=[]
				for(let i=0;i<4646;i++){
					// 如果有该标记,则压入true
					if(this.dress_checked.includes(i+1)){
						dress_checked_list.push(true);
					}else{
						dress_checked_list.push(false);
					}
				}
				return dress_checked_list;
			},
			//唱片已收集数组
			albumsChecked(){
				let albums_checked_list=[]
				for(let i=0;i<95;i++){
					// 如果有该标记,则压入true
					if(this.albums_checked.includes(i+1)){
						albums_checked_list.push(true);
					}else{
						albums_checked_list.push(false);
					}
				}
				return albums_checked_list;
			}
		}
		,
		methods: {
			//标签页tabs切换事件监听
			changeMap(index) {
				this.current = index;
				//根据current判断处于哪个标签页，且数组为空（从未请求过数据），并请求相应数据,
				if (this.current === 0 && this.fish.length === 0 && this.fishPageNum <= 8) {
					this.getFishInfo();
				} else if (this.current === 1 && this.insect.length === 0 && this.insectPageNum <= 8) {
					this.getInsectInfo()
				} else if (this.current === 2 && this.fossil.length === 0 && this.fossilPageNum <= 8) {
					this.getFossilInfo();
				} else if (this.current === 3 && this.artWork.length === 0 && this.artWorkPageNum <= 5) {
					this.getArtWorkInfo();
				} else if (this.current === 4 && this.villagers.length === 0 && this.villagerPageNum <= 40) {
					this.getVillagerInfo();
				} else if (this.current === 5 && this.furniture.length === 0 && this.furniturePageNum <= 331) {
					this.getFurnitureInfo();
				} else if (this.current === 6 && this.diy.length === 0 && this.diyPageNum <= 60) {
					this.getDiyInfo();
				} else if (this.current === 7 && this.dress.length === 0 && this.dressPageNum <= 465) {
					this.getDressInfo();
				} else if (this.current === 8 && this.albums.length === 0 && this.albumsPageNum <= 10) {
					this.getalbumsInfo();
				} 
			},
			// 搜索事件
			clickToSearch(){
				// 对输入keyword进行url编码
				const encode_url = encodeURI(this.keyword);
				 // console.log(encode_url);
				// 根据current判断当前处于哪个标签页
				if(this.current === 0){//鱼类
					this.serchFishInfo(encode_url);
				} else if(this.current === 1){ //虫类
					this.serchInsectInfo(encode_url)
				} else if(this.current === 2){ //化石
					this.serchFossilInfo(encode_url)
				} else if(this.current === 3){ //艺术品
					this.serchArtWorkInfo(encode_url)
				} else if(this.current === 4){ //村民
					this.serchVillagerInfo(encode_url)
				} else if(this.current === 5){ //家具
					this.serchFurnitureInfo(encode_url)
				} else if(this.current === 6){ //diy
					this.serchDiyInfo(encode_url)
				} else if(this.current === 7){ //服装
					this.serchDressInfo(encode_url)
				} else if(this.current === 8){ //唱片
					this.serchAlbumsInfo(encode_url)
				}
			},
			//化石数量变化监听
			valChange(e) {
				console.log('当前值为: ' + e.value)
			},
			
			// u-switch控件变化监听
			
			//鱼类checked变化监听
			fishCheckedChange(id){
				// 传入改变的fishid,改变fish_checked数组
				// 如果已经存在,则从中删除
				// console.log("fishid:"+id);
				if(this.fish_checked.includes(id)){
					let index = this.fish_checked.indexOf(id);
					this.fish_checked.splice(index,1);
				}else{//如果不存在，则压入
					this.fish_checked.push(id);
					this.createUserFishCollectedInfo(id);
				}
				console.log("fish_checked: "+this.fish_checked)
			},
			//虫类checked变化监听
			insectCheckedChange(id){
				// 传入改变的insectid,改变insect_checked数组
				// 如果已经存在,则从中删除
				// console.log("fishid:"+id);
				if(this.insect_checked.includes(id)){
					let index = this.insect_checked.indexOf(id);
					this.insect_checked.splice(index,1);
				}else{//如果不存在，则压入
					this.insect_checked.push(id);
				}
				console.log("insect_checked: "+this.insect_checked)
			},
			//村民checked变化监听
			villagerCheckedChange(id){
				// 传入改变的villagerid,改变villager_checked数组
				// 如果已经存在,则从中删除
				// console.log("fishid:"+id);
				if(this.villager_checked.includes(id)){
					let index = this.villager_checked.indexOf(id);
					this.villager_checked.splice(index,1);
				}else{//如果不存在，则压入
					this.villager_checked.push(id);
				}
				console.log("villager_checked: "+this.villager_checked)
			},
			//家具checked变化监听
			furnitureCheckedChange(id){
				// 传入改变的furnitureid,改变furniture_checked数组
				// 如果已经存在,则从中删除
				// console.log("fishid:"+id);
				if(this.furniture_checked.includes(id)){
					let index = this.furniture_checked.indexOf(id);
					this.furniture_checked.splice(index,1);
				}else{//如果不存在，则压入
					this.furniture_checked.push(id);
				}
				console.log("furniture_checked: "+this.furniture_checked)
			},
			//diy checked变化监听
			diyCheckedChange(id){
				// 传入改变的diy id,改变diy_checked数组
				// 如果已经存在,则从中删除
				if(this.diy_checked.includes(id)){
					let index = this.diy_checked.indexOf(id);
					this.diy_checked.splice(index,1);
				}else{//如果不存在，则压入
					this.diy_checked.push(id);
				}
				console.log("diy_checked: "+this.diy_checked)
			},
			//dress checked变化监听
			dressCheckedChange(id){
				// 传入改变的dress id,改变dress_checked数组
				// 如果已经存在,则从中删除
				if(this.dress_checked.includes(id)){
					let index = this.dress_checked.indexOf(id);
					this.dress_checked.splice(index,1);
				}else{//如果不存在，则压入
					this.dress_checked.push(id);
				}
				console.log("dress_checked: "+this.dress_checked)
			},
			//albums checked变化监听
			albumsCheckedChange(id){
				// 传入改变的albums id,改变albums_checked数组
				// 如果已经存在,则从中删除
				if(this.albums_checked.includes(id)){
					let index = this.albums_checked.indexOf(id);
					this.albums_checked.splice(index,1);
				}else{//如果不存在，则压入
					this.albums_checked.push(id);
				}
				console.log("albums_checked: "+this.albums_checked)
			},
			
			// 点击查看图鉴详情
			onClickMoreInfo(dex_type, item) {
				this.dexType = dex_type;
				this.detailItem = item;
				// console.log(this.detailItem);
				// console.log(name)
				if (dex_type === "fish") {
					uni.navigateTo({
						url: '/pages/map/mapDetail/mapDetail?dexType=fish&item=' + encodeURIComponent(JSON.stringify(this.detailItem))
					});
				} else if (dex_type === "insect") {
					uni.navigateTo({
						url: '/pages/map/mapDetail/mapDetail?dexType=insect&item=' + encodeURIComponent(JSON.stringify(this.detailItem))
					});
				} else if (dex_type === "fossil") {
					uni.navigateTo({
						url: '/pages/map/mapDetail/fossilDetail?dexType=fossil&item=' + encodeURIComponent(JSON.stringify(this.detailItem))
					});
				} else if (dex_type === "artwork") {
					uni.navigateTo({
						url: '/pages/map/mapDetail/artworkDetail?dexType=artwork&item=' + encodeURIComponent(JSON.stringify(this.detailItem))
					});
				} else if (dex_type === "villager") {
					uni.navigateTo({
						url: '/pages/map/mapDetail/villagerDetail?dexType=villager&item=' + encodeURIComponent(JSON.stringify(this.detailItem))
					});
				} else if (dex_type === "furniture") {
					uni.navigateTo({
						url: '/pages/map/mapDetail/furniture-dressDetail?dexType=furniture&item=' + encodeURIComponent(JSON.stringify(this.detailItem))
					});
				} else if (dex_type === "dress") {
					uni.navigateTo({
						url: '/pages/map/mapDetail/furniture-dressDetail?dexType=dress&item=' + encodeURIComponent(JSON.stringify(this.detailItem))
					});
				} else if (dex_type === "diy") {
					uni.navigateTo({
						url: '/pages/map/mapDetail/diyDetail?dexType=diy&item=' + encodeURIComponent(JSON.stringify(this.detailItem))
					});
				}
				// console.log("点击了鱼类");

			},
			// 搜索鱼类信息
			async serchFishInfo(url){
				const result = await this.$myRequest({
					method: 'GET',
					url: '/fishes/?search='+ url
				})
				this.fish = result.data.results;
			},
			//获取鱼类信息
			async getFishInfo() {
				const result = await this.$myRequest({
					method: 'GET',
					url: '/fishes/?pagenum=' + this.fishPageNum
				})
				this.fish = [...this.fish, ...result.data.results]
				// this.fish = result.data.results;
			},
			// 获取鱼类剩余信息
			getRemainFishInfo() {
				//总共有8页
				if (this.fishPageNum <= 7) {
					this.fishPageNum++;
					this.getFishInfo();
					// console.log("fish" + this.fishPageNum);
				}
			},
			// 搜索虫类信息
			async serchInsectInfo(url){
				const result = await this.$myRequest({
					method: 'GET',
					url: '/insects/?search='+ url
				})
				this.insect = result.data.results;
			},
			//获取虫类信息
			async getInsectInfo() {
				const result = await this.$myRequest({
					method: 'GET',
					url: '/insects/?pagenum=' + this.insectPageNum
				})
				this.insect = [...this.insect, ...result.data.results]
				// this.insect = result.data.results;
			},
			//获取虫类剩余信息
			getRemainInsectInfo() {
				//总共有8页
				if (this.insectPageNum <= 7) {
					this.insectPageNum++;
					this.getInsectInfo();
					// console.log("insect" + this.insectPageNum)
				}
			},
			// 搜索化石信息
			async serchFossilInfo(url){
				const result = await this.$myRequest({
					method: 'GET',
					url: '/fossils/?search='+ url
				})
				this.fossil = result.data.results;
			},
			//获取化石信息
			async getFossilInfo() {
				const result = await this.$myRequest({
					method: 'GET',
					url: '/fossils/?pagenum=' + this.fossilPageNum
				})
				this.fossil = [...this.fossil, ...result.data.results]
				// this.insect = result.data.results;
			},
			//获取化石剩余信息
			getRemainFossilInfo() {
				//总共有8页
				if (this.fossilPageNum <= 7) {
					this.fossilPageNum++;
					this.getFossilInfo();
					// console.log("fossil" + this.fossilPageNum);
				}
			},
			// 搜索艺术品信息
			async serchArtWorkInfo(url){
				const result = await this.$myRequest({
					method: 'GET',
					url: '/artworks/?search='+ url
				})
				this.artWork = result.data.results;
			},
			//获取艺术品信息
			async getArtWorkInfo() {
				const result = await this.$myRequest({
					method: 'GET',
					url: '/artworks/?pagenum=' + this.artWorkPageNum
				})
				// console.log("artwork"+this.artWorkPageNum)
				this.artWork = [...this.artWork, ...result.data.results]
				// this.insect = result.data.results;
			},
			//获取艺术品剩余信息
			getRemainArtWorkInfo() {
				//总共有5页
				if (this.artWorkPageNum <= 4) {
					this.artWorkPageNum++;
					this.getArtWorkInfo();
					// console.log("artwork" + this.artWorkPageNum);
				}
			},
			// 搜索村民信息
			async serchVillagerInfo(url){
				const result = await this.$myRequest({
					method: 'GET',
					url: '/dwellers/?search='+ url
				})
				this.villagers = result.data.results;
			},
			//获取村民信息
			async getVillagerInfo() {
				const result = await this.$myRequest({
					method: 'GET',
					url: '/dwellers/?pagenum=' + this.villagerPageNum
				})
				this.villagers = [...this.villagers, ...result.data.results];
				// this.villagers = result.data.results;
				// console.log("村民"+this.villagers[1].id)
			},
			//获取村民剩余信息
			getRemainVillagerInfo() {
				//总共有40页
				if (this.villagerPageNum <= 39) {
					this.villagerPageNum++;
					this.getVillagerInfo();
					// console.log("villager" + this.villagerPageNum);
				}
			},
			// 搜索家具信息
			async serchFurnitureInfo(url){
				const result = await this.$myRequest({
					method: 'GET',
					url: '/furnitures/?search='+ url
				})
				this.furniture = result.data.results;
			},
			//获取家具信息
			async getFurnitureInfo() {
				const result = await this.$myRequest({
					method: 'GET',
					url: '/furnitures/?pagenum=' + this.furniturePageNum
				})
				this.furniture = [...this.furniture, ...result.data.results];
			},
			//获取家具剩余信息
			getRemainFurnitureInfo() {
				//总共有331页
				if(this.furniturePageNum <= 330){
					this.furniturePageNum++;
					this.getFurnitureInfo();
					// console.log("furniture" + this.furniturePageNum);
				}
			},
			// 搜索diy信息
			async serchDiyInfo(url){
				const result = await this.$myRequest({
					method: 'GET',
					url: '/diys/?search='+ url
				})
				this.diy = result.data.results;
			},
			//获取diy信息
			async getDiyInfo() {
				const result = await this.$myRequest({
					method: 'GET',
					url: '/diys/?pagenum=' + this.diyPageNum
				})
				this.diy = [...this.diy, ...result.data.results];
			},
			//获取diy剩余信息
			getRemainDiyInfo() {
				//总共有60页
				if(this.diyPageNum <= 59){
					this.diyPageNum++;
					this.getDiyInfo();
					// console.log("diy" + this.diyPageNum);
				}
			},
			// 搜索服装信息
			async serchDressInfo(url){
				const result = await this.$myRequest({
					method: 'GET',
					url: '/dresses/?search='+ url
				})
				this.dress = result.data.results;
			},
			//获取服装信息
			async getDressInfo() {
				const result = await this.$myRequest({
					method: 'GET',
					url: '/dresses/?pagenum=' + this.dressPageNum
				})
				this.dress = [...this.dress, ...result.data.results];
			},
			//获取服装剩余信息
			getRemainDressInfo() {
				//总共有465页
				if(this.albumsPageNum <= 464){
					this.dressPageNum++;
					this.getDressInfo();
					// console.log("dress" + this.dressPageNum);
				}
			},
			// 搜索唱片信息
			async serchAlbumsInfo(url){
				const result = await this.$myRequest({
					method: 'GET',
					url: '/albums/?search='+ url
				})
				this.albums = result.data.results;
			},
			//获取唱片信息
			async getalbumsInfo() {
				const result = await this.$myRequest({
					method: 'GET',
					url: '/albums/?pagenum=' + this.albumsPageNum
				})
				this.albums = [...this.albums, ...result.data.results];
			},
			//获取唱片剩余信息
			getRemainalbumsInfo() {
				//总共有10页
				if(this.albumsPageNum <= 9){
					this.albumsPageNum++;
					this.getalbumsInfo();
					// console.log("albums" + this.albumsPageNum);
				}
			},
			
			//获取user的图鉴收集信息
			
			//获取user fish 图鉴收集信息
			async getUserFishCollectedInfo(){
				const jwt = uni.getStorageSync("skey");
				const head = {'Authorization':"Bearer "+jwt};
				const result = await this.$myRequest({
					method: 'GET',
					url: '/user_fish/',
					header: head,
				})
				console.log(result.data.results)
				// let fish_collected = result.data.results;
				for(let {id,fish} of result.data.results){
					console.log("id:"+id+" fish_id: "+fish);
				}
			},
			//向后端create user fish 收集信息
			async createUserFishCollectedInfo(id){
				const jwt = uni.getStorageSync("skey");
				const head = {'Authorization':"Bearer "+jwt};
				const result = await this.$myRequest({
					method: 'POST',
					url: '/user_fish/',
					header: head,
					data: {fish:id},
				})
				console.log(result);
			}
		},
		onLoad() {
			this.getFishInfo();
			
		},
		onShow() {
			this.getUserFishCollectedInfo()
		}
	}
</script>

<style scoped lang="scss">
	// 顶部导航栏
	.topBar {
		//保证导航栏滚动时不消失
		position: fixed;
		top: 0;
		z-index: 99;
		width: 100%;
	}

	// 图鉴列表整体样式
	.list {
		height: 960rpx;
		margin-top: 145rpx;
	}

	// 图鉴单项行样式
	.item {
		// background-color: blue;
		display: flex;
		flex-direction: row;
		justify-content: sapce-between;
		align-items: center;

		// border-radius: 5rpx;
		// border-style: solid;
		// border-color: #dddddd;
		//图鉴单项des样式
		.description {
			// background-color: red;
			flex: 1em;
		}

		//图鉴单项price样式
		.price {
			// background-color: yellow;
			flex: 1em;
		}
	}

	.collection {
		display: flex;
		justify-content: flex-end;

		.btn_detail {
			position: absolute;
			left: 0;
			transform: translate(50%);
		}

		.sw_button {
			margin-left: 15rpx;
		}
	}

	u-number-box {
		margin-left: 25rpx;
	}

	// /deep/ .u-cell-box{
	// 	height: 400rpx;
	// 	background-color: blue;
	// }

	//鱼类与昆虫样式
	.fishAndinsects_view {
		display: flex;
		justify-content: flex-start;
		align-items: center;

		.v_img {
			margin: 15rpx 15rpx;
			flex: 1;
			max-width: 70rpx;
			max-height: 75rpx;
		}

		.cell-group {
			flex: 4;
		}
	}

	//艺术品和化石样式
	.artsAndfossil_view {
		display: flex;
		justify-content: flex-start;
		align-items: center;

		.v_img {
			margin: 15rpx 15rpx;
			flex: 1;
			max-width: 70rpx;
			max-height: 75rpx;
		}

		.cell-group {
			flex: 4;
		}
	}

	//村民图鉴样式
	.villager_view {
		display: flex;
		justify-content: flex-start;
		align-items: center;

		.v_img {
			margin: 15rpx 15rpx;
			max-width: 75rpx;
			max-height: 75rpx;
			// width: 35rpx;
			flex: 1;
		}

		.cell-group {
			flex: 4;
			// background-color: blue;
		}
	}
</style>
