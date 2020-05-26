<template>
	<view>
		<!--pages/turnip-prices/turnip-prices.wxml-->
		<view class="help" :hidden="!displayHelp" @tap="onHideHelp">
			<view class="property margin-large">
				<text class="tips">帮助：</text>
				<text class="tips">上午: 08:00 ~ 11:59</text>
				<text class="tips">下午: 12:00 ~ 22:00</text>
				<text class="tips">预测结果按最高价排序，通过分析可能的走势安排一周的计划。如果选择了上一次的走势可以更好的预测概率。</text>
				<text class="tips">第一次在自己的岛上购买必定是小涨型。</text>
				<text class="tips">波动型：一周内出现多次的上涨和下跌。</text>
				<text class="tips">大涨型：价格浮动最大的类型，一周只有一次大幅上涨。</text>
				<text class="tips">小涨型：价格浮动较小，一周内会持续上涨多次。</text>
				<text class="tips">递减型：价格一周内持续下跌。</text>
				<text class="tips">预测模型来源：</text>
				<text class="tips">https://github.com/mikebryant/ac-nh-turnip-prices</text>
				<view class="btn bg-w color-gray" @tap="onHideHelp">关闭</view>
			</view>
		</view>

		<view class="property">
			<text class="property-name">首次在自己的岛上购买</text>
			<radio-group @change="onSetFirstBuy">
				<view class="radio-container">
					<label :class="'radio ' + (firstBuy? '':'checked')">
						<radio value="false" :checked="!firstBuy"></radio>
						<view class="text">否</view>
					</label>
					<label :class="'radio ' + (firstBuy? 'checked':'')">
						<radio value="true" :checked="firstBuy"></radio>
						<view class="text">是</view>
					</label>
				</view>
			</radio-group>
			<view class="smallbtn bg-w color-gray" @tap="onDisplayHelp">?</view>
			<view :hidden="firstBuy">
				<view class="flex-line dp-flex">
					<text class="property-name">上一次的价格走势</text>
					<picker @change="onPatternPickerChange" :value="previousPartternIndex" :range="patternArray">
						<view class="picker">{{patternArray[previousPartternIndex]}}</view>
					</picker>
					<view class="arrow color-gray">▼</view>
				</view>
				<view class="flex-line dp-flex">
					<text class="property-name">周日价格</text>
					<input class="input" placeholder="..." type="number" @input="onInputSunday" :value="sundayPrice"></input>
				</view>
			</view>
		</view>



		<view class="property">
			<view class="week-day-price-record">
				<text class="week-day">周一</text>
				<input placeholder="上午" type="number" @input="onInputDayPrice" data-day="0" data-type="0" :value="weekdayRecords[0]"></input>
				<input placeholder="下午" type="number" @input="onInputDayPrice" data-day="0" data-type="1" :value="weekdayRecords[1]"></input>
			</view>
			<view class="week-day-price-record">
				<text class="week-day">周二</text>
				<input placeholder="上午" type="number" @input="onInputDayPrice" data-day="1" data-type="0" :value="weekdayRecords[2]"></input>
				<input placeholder="下午" type="number" @input="onInputDayPrice" data-day="1" data-type="1" :value="weekdayRecords[3]"></input>
			</view>
			<view class="week-day-price-record">
				<text class="week-day">周三</text>
				<input placeholder="上午" type="number" @input="onInputDayPrice" data-day="2" data-type="0" :value="weekdayRecords[4]"></input>
				<input placeholder="下午" type="number" @input="onInputDayPrice" data-day="2" data-type="1" :value="weekdayRecords[5]"></input>
			</view>
			<view class="week-day-price-record">
				<text class="week-day">周四</text>
				<input placeholder="上午" type="number" @input="onInputDayPrice" data-day="3" data-type="0" :value="weekdayRecords[6]"></input>
				<input placeholder="下午" type="number" @input="onInputDayPrice" data-day="3" data-type="1" :value="weekdayRecords[7]"></input>
			</view>
			<view class="week-day-price-record">
				<text class="week-day">周五</text>
				<input placeholder="上午" type="number" @input="onInputDayPrice" data-day="4" data-type="0" :value="weekdayRecords[8]"></input>
				<input placeholder="下午" type="number" @input="onInputDayPrice" data-day="4" data-type="1" :value="weekdayRecords[9]"></input>
			</view>
			<view class="week-day-price-record">
				<text class="week-day">周六</text>
				<input placeholder="上午" type="number" @input="onInputDayPrice" data-day="5" data-type="0" :value="weekdayRecords[10]"></input>
				<input placeholder="下午" type="number" @input="onInputDayPrice" data-day="5" data-type="1" :value="weekdayRecords[11]"></input>
			</view>

			<view class="btn bg-w color-gray" @tap="onResetSelfData">重置</view>
			<view class="btn bg-w color-lb" @tap="onCalculate">预测</view>
		</view>

		<view id="results-output" :hidden="!getValidResult">
			<scroll-view scroll-x="true">
				<view class="table">
					<view class="tr bg-dlb color-gray" id="results-table">
						<view class="th">走势</view>
						<view class="th">概率</view>
						<view class="th">最低价</view>
						<view class="th">最高价</view>
						<view class="th">周一上午</view>
						<view class="th">周一下午</view>
						<view class="th">周二上午</view>
						<view class="th">周二下午</view>
						<view class="th">周三上午</view>
						<view class="th">周三下午</view>
						<view class="th">周四上午</view>
						<view class="th">周四下午</view>
						<view class="th">周五上午</view>
						<view class="th">周五下午</view>
						<view class="th">周六上午</view>
						<view class="th">周六下午</view>
					</view>
					<view v-for="(item, index) in possibilities" :key="index">
						<view :class="index % 2 == 0? 'tr':'tr bg-lb'">
							<view class="td">{{item.partten}}</view>
							<view class="td">{{item.probability}}</view>
							<view class="td">{{item.weekMin}}</view>
							<view class="td">{{item.weekMax}}</view>
							<view class="td">{{item.days[1]}}</view>
							<view class="td">{{item.days[2]}}</view>
							<view class="td">{{item.days[3]}}</view>
							<view class="td">{{item.days[4]}}</view>
							<view class="td">{{item.days[5]}}</view>
							<view class="td">{{item.days[6]}}</view>
							<view class="td">{{item.days[7]}}</view>
							<view class="td">{{item.days[8]}}</view>
							<view class="td">{{item.days[9]}}</view>
							<view class="td">{{item.days[10]}}</view>
							<view class="td">{{item.days[11]}}</view>
							<view class="td">{{item.days[12]}}</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>

		<view class="adContainer" :hidden="displayHelp">
			<ad unit-id="adunit-44c37700377b3faf" ad-type="video" ad-theme="white"></ad>
		</view>
	</view>
</template>

<script>
	// pages/turnip-prices/turnip-prices.js
	var predictions = require("./predictions");
	const SelfDataKey = 'self-turnip-prices';

	export default {
		data() {
			return {
				firstBuy: false,
				previousPartternIndex: 4,
				patternArray: ['波动型', '大涨型', '递减型', '小涨型', '未知类型'],
				sundayPrice: '',
				weekdayRecords: [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN],
				possibilities: [],
				displayHelp: false,
				getValidResult: ""
			};
		},

		components: {},
		props: {},

		/**
		 * 生命周期函数--监听页面加载
		 */
		onLoad: function(options) {
			try {
				// 获取本地存储的数据
				var value = wx.getStorageSync(SelfDataKey);

				if (value) {
					// 将每日售价进行转换
					for (var i = 0; i < value.weekdayRecords.length; i++) {
						var price = parseInt(value.weekdayRecords[i]);
						value.weekdayRecords[i] = price;
					}

					this.setData({
						firstBuy: value.firstBuy,
						previousPartternIndex: value.previousPartternIndex,
						sundayPrice: value.sundayPrice,
						weekdayRecords: value.weekdayRecords
					});
				} else {
					this.setDefaultData();
				}
			} catch (e) {}
		},

		/**
		 * 用户点击右上角分享
		 */
		onShareAppMessage: function() {
			return {
				title: "大头菜预测！发财致富不求人!",
				path: "/pages/turnip-prices/turnip-prices"
			};
		},
		methods: {
			onSetFirstBuy: function(e) {
				this.firstBuy = e.detail.value === 'true';
				this.saveSelfData();
				this.setData({
					firstBuy: this.firstBuy
				});
			},
			onPatternPickerChange: function(e) {
				this.previousPartternIndex = parseInt(e.detail.value);
				this.saveSelfData();
				this.setData({
					previousPartternIndex: this.previousPartternIndex
				});
			},
			onInputSunday: function(e) {
				this.sundayPrice = parseInt(e.detail.value);
				this.saveSelfData();
				this.setData({
					sundayPrice: this.sundayPrice
				});
			},
			onInputDayPrice: function(e) {
				var tmpArray = this.weekdayRecords;
				var day = parseInt(e.currentTarget.dataset.day);
				var type = parseInt(e.currentTarget.dataset.type);
				var price = e.detail.value === 'null' ? NaN : parseInt(e.detail.value);
				tmpArray[2 * day + type] = price;
				this.saveSelfData();
				this.setData({
					weekdayRecords: tmpArray
				});
			},
			saveSelfData: function() {
				// 将每日售价进行转换
				for (var i = 0; i < this.weekdayRecords.length; i++) {
					var price = parseInt(this.weekdayRecords[i]);
					this.weekdayRecords[i] = price;
				}

				var selfdata = {
					firstBuy: this.firstBuy,
					previousPartternIndex: this.previousPartternIndex,
					sundayPrice: this.sundayPrice,
					weekdayRecords: this.weekdayRecords
				};
				wx.setStorage({
					key: 'self-turnip-prices',
					data: selfdata
				});
			},
			onCalculate: function(e) {
				this.calculateOutput();
			},
			setDefaultData: function() {
				var defaultData = {
					firstBuy: false,
					previousPartternIndex: 4,
					sundayPrice: NaN,
					weekdayRecords: [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN],
					possibilities: []
				};
				this.setData({
					firstBuy: defaultData.firstBuy,
					previousPartternIndex: defaultData.previousPartternIndex,
					sundayPrice: defaultData.sundayPrice,
					weekdayRecords: defaultData.weekdayRecords,
					possibilities: defaultData.possibilities
				});
			},
			onResetSelfData: function(e) {
				var thisPage = this;
				wx.showModal({
					title: '提示',
					content: '确定重置吗',
					success: function(res) {
						if (res.confirm) {
							thisPage.setDefaultData();
							thisPage.saveSelfData();
						}
					}
				});
			},
			onDisplayHelp: function(e) {
				this.setData({
					displayHelp: true
				});
			},
			onHideHelp: function(e) {
				this.setData({
					displayHelp: false
				});
			},
			calculateOutput: function() {
				var prices = this.weekdayRecords;
				var first_buy = this.firstBuy;
				var previous_pattern = first_buy ? -1 : this.previousPartternIndex;
				prices = [this.sundayPrice, this.sundayPrice, ...prices];
				let output_possibilities = [];

				for (let poss of predictions.analyze_possibilities(prices, first_buy, previous_pattern)) {
					var result = {};
					result.partten = poss.pattern_description;
					result.probability = Number.isFinite(poss.probability) ? (poss.probability * 100).toPrecision(3) + '%' : "-";
					var days = [];

					for (let day of poss.prices.slice(1)) {
						if (day.min !== day.max) {
							days.push(day.min + '~' + day.max);
						} else {
							days.push(day.min);
						}
					}

					result.days = days;
					result.weekMin = poss.weekGuaranteedMinimum;
					result.weekMax = poss.weekMax;
					output_possibilities.push(result);
				}

				var getValidResult = true;

				if (output_possibilities.length == 1) {
					getValidResult = false;
				}

				if (getValidResult) {
					wx.showToast({
						title: '预测成功',
						icon: 'success'
					});
				} else {
					wx.showToast({
						title: '数据错误'
					});
				}

				this.setData({
					possibilities: output_possibilities,
					getValidResult: getValidResult
				});
			}
		}
	};
</script>
<style>
	@import "./turnip-prices.css";
</style>
