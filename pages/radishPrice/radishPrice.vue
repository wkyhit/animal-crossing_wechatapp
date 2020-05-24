<template>
	<view>
		<view class="property">
				<text class="property-name">首次在自己的岛上购买</text>
				<radio-group @change="onSetFirstBuy" class="radio-container">
					<label style="display: inline-block;" >
					    <radio value="false" :checked="!firstBuy"></radio>
					    <view class="text">否</view>
					</label>
					<label style="display: inline-block;">
					    <radio value="true" :checked="firstBuy"></radio>
					    <view class="text">是</view>
					</label>
				</radio-group>
				
				<!-- 周日买入价格 -->
				<view class="flex-line dp-flex">
				    <text class="property-name">周日价格</text>
				    <input class="input" placeholder="..." type="number" @click="onInputSunday" :value="sundayPrice"></input>
				</view>
				
				<!-- 周一~周五价格 -->
				<view class="week-day-price-record">
				    <text class="week-day">周一</text>
				    <input placeholder="上午" type="number"  data-day="0" data-type="0" :value="weekdayRecords[0]"></input>
				    <input placeholder="下午" type="number"  data-day="0" data-type="1" :value="weekdayRecords[1]"></input>
				</view>
				<view class="week-day-price-record">
				    <text class="week-day">周二</text>
				    <input placeholder="上午" type="number"  data-day="1" data-type="0" :value="weekdayRecords[2]"></input>
				    <input placeholder="下午" type="number"  data-day="1" data-type="1" :value="weekdayRecords[3]"></input>
				</view>
				<view class="week-day-price-record">
				    <text class="week-day">周三</text>
				    <input placeholder="上午" type="number"  data-day="2" data-type="0" :value="weekdayRecords[4]"></input>
				    <input placeholder="下午" type="number"  data-day="2" data-type="1" :value="weekdayRecords[5]"></input>
				</view>
				<view class="week-day-price-record">
				    <text class="week-day">周四</text>
				    <input placeholder="上午" type="number"  data-day="3" data-type="0" :value="weekdayRecords[6]"></input>
				    <input placeholder="下午" type="number"  data-day="3" data-type="1" :value="weekdayRecords[7]"></input>
				</view>
				<view class="week-day-price-record">
				    <text class="week-day">周五</text>
				    <input placeholder="上午" type="number"  data-day="4" data-type="0" :value="weekdayRecords[8]"></input>
				    <input placeholder="下午" type="number"  data-day="4" data-type="1" :value="weekdayRecords[9]"></input>
				</view>
				<view class="week-day-price-record">
				    <text class="week-day">周六</text>
				    <input placeholder="上午" type="number"  data-day="5" data-type="0" :value="weekdayRecords[10]"></input>
				    <input placeholder="下午" type="number"  data-day="5" data-type="1" :value="weekdayRecords[11]"></input>
				</view>	
				
				<button size="mini" class="btn bg-w color-gray" type="warn" @click="">重置</button>
				<button size="mini" class="btn bg-w color-lb" type="primary" @click="">预测</button>
		</view>
		
		<!-- 预测结果 -->
		<view class="results-output" v-if="!getValidResult">
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
					<view v-for="(item,index) in possibilities" :key="index">
					    <view :class="index % 2 == 0? 'tr':'tr bg-lb'" >
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
		
	</view>
	
		
</template>

<script>
	export default {
		data() {
			return {
				firstBuy: false,
				previousPartternIndex: 4,
				patternArray:['波动型', '大涨型', '递减型', '小涨型', '未知类型', ],
				sundayPrice: '',
				weekdayRecords:[NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,],
				possibilities: [],
				displayHelp: false,
			};
		}
	}
</script>

<style lang="scss">
	.property{
	    box-sizing: border-box;
	    border: 1px gainsboro solid;
	    background-color: white;
	    border-radius: 10px;
	    position: relative;
	    display: flex;
	    margin: 1em 1em;
	    flex-wrap: wrap;
	}
	.property-name{
		box-sizing: border-box;
		margin: 0.1em 1em;
		padding: 0.1em 0.1em;
		font-size: small;
		line-height: 2em;
	}
	.radio-container{
		height: 100%;
		display: flex;
	}
	.radio-container radio{
	    margin: 0.3em 0.2em;
	    padding: 0.2em 1em;
	    height: 1.6em;
	}
	.flex-line{
	    flex: 1 1 100%;
	}
	
	.dp-flex{
	    display: flex;
	}
	.input{
	    box-sizing: border-box;
	    border-radius: 10px;
	    margin: 0.2em 0.2em;
	    padding: 0.1em 0.1em;
	    color: black;
	    border: 1px solid #dddddd;
	    text-align: center;
	}
	
	.week-day-price-record{
	    margin: 0.1em 1em;
	    display: flex;
	    flex-flow: row wrap;
	}
	
	.week-day-price-record .week-day{
	    flex: 1 1 20%;
	    padding: 0.5em;
	    font-size: 14px;
	    font-weight: 200;
	    text-align: center;
	}
	
	.week-day-price-record input{
	    flex: 1 1 30%;
	    margin: 0.1em 0.2em;
	    padding: 0.3em 0.3em;
	    border: 1px solid #dddddd;
	    border-radius: 10px;
	    text-align: center;
	    font-size: 12px;
	}
	.btn{
	    box-sizing: border-box;
	    margin:1em 1em;
	    padding:0.5em;
	    border-radius: 10px;
	    text-align: center;
	    color:#333333;
	    font-weight: bold;
	    font-size: small;
	    border:  0.1em solid #dddddd;
	    flex: 1 1 1em;
	}
		
	.tr {
	  display: flex;
	  width: 80em;
	  justify-content: center;
	  height: 2rem;
	  align-items: center;
	}
	.th {
	  justify-content: center;
	  display: flex;
	  height: 2rem;
	  align-items: center;
	  text-align: center;
	  flex: 1 1 3em;
	  border: 0.1px solid rgb(226,227,231);
	}
	.td {
	  text-align: center;
	  flex: 1 1 3em;
	  border: 0.1px solid rgb(226,227,231);
	  height: 2rem;
	  line-height: 2rem;
	  color: gray;
	}
	.results-output scroll-view{
	    position: relative;
	    margin: 0.1em 0.2em;
	}
	.bg-w{
	  background: white;
	}
	.bg-dlb{
	  background: rgb(244, 245, 250);
	}
	.bg-lb{
	  background: rgb(251, 252, 254);
	}
	.color-gray{
	  color: gray;
	}
	
	.color-w{
	  color:white;
	}
	
	.color-lb{
	  color:rgb(151, 163, 223);
	}
	
</style>
