import Vue from 'vue'
import App from './App'
import uView from "uview-ui";
import { myRequest } from './util/api.js'
//引入goEasy
import GoEasy from 'goeasy';

//路由请求封装
Vue.prototype.$myRequest = myRequest
Vue.use(uView);
Vue.config.productionTip = false

App.mpType = 'app'


//挂载goeasy
Vue.prototype.goeasy = GoEasy({
	host: 'hangzhou.goeasy.io',
	appkey: 'BC-14d49c22cbb0419da7881c4a2adb74ae',
	onConnected: function () {
		console.log("GoEasy connect successfully.")
	},
	onDisconnected: function () {
		console.log("GoEasy disconnected.")
	},
	onConnectFailed: function (error) {
		uni.showToast({
			icon: "none",
			title: "连接失败，请检查您的appkey和host配置.",
			duration: 6000
		});
	}
});

//格式化时间
Date.prototype.formatDate = function (fmt) {
	var o = {
		"M+": this.getMonth() + 1,
		"d+": this.getDate(),
		"h+": this.getHours(),
		"m+": this.getMinutes(),
		"s+": this.getSeconds(),
		"q+": Math.floor((this.getMonth() + 3) / 3),
		"S": this.getMilliseconds()
	};
	if (/(y+)/.test(fmt))
		fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	for (var k in o)
		if(o.hasOwnProperty(k)){
			if (new RegExp("(" + k + ")").test(fmt))
				fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
		}
	return fmt;
};


const app = new Vue({
	...App
})
app.$mount()
