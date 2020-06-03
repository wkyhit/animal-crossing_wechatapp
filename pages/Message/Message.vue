<template>
    <view class="content">
        <view class="message-content">
            <view class="message-text" v-for="(msg, index) in messages" :key="index">{{msg}}</view>
        </view>
		<view class="send-box">
		    <input v-model="message"/>
		    <text @click="sendMessage">发送</text>
		</view>
    </view>

</template>

<script>
    export default {
        data() {
            return {
                message: "",//发送的消息内容
                messages: [] //接收到的消息列表
            }
        },
        onLoad(e) {
			this.onSubscribe();
        },
        methods: {
			onSubscribe () {//订阅消息
				var self = this;
				//订阅接收消息的通道
				this.$root.goeasy.subscribe({
				    channel: "my_channel",
				    onMessage: function (message) {
				        self.unshiftMessage(message.content)
				    },
				    onSuccess: function () {
						self.unshiftMessage("订阅成功")
				    }
				});
			},
			unshiftMessage(content) {
				var formattedTime = new Date().formatDate("hh:mm");
				var message = formattedTime +" "+ content;
				this.messages.unshift(message);
			},
            sendMessage() {//发消息
				if(this.message.trim() != "") {
					var self = this;
					this.$root.goeasy.publish({
					    channel: "my_channel",
					    message: this.message,
					    onSuccess: function () {
					        self.message = ''; //清空发送消息内容
					        // console.log("send message success");
					    },
					    onFailed: function (error) {
					        self.unshiftMessage('发送失败，请检查您的appkey和host配置.');
					    }
					});
				}
            }
        }
    }
</script>
<style lang="scss">
	.content {
	        padding: 20px 20px 0 20px;
	        font-family: Source Han Sans CN;
			width:100%;
			height: 100%;
			box-sizing: border-box;
			display: flex;
			flex-direction: column;
			overflow: hidden;
	    }
	
	    .send-box {
	        display: flex;
	        flex-direction: row;
	        height: 40px;
	        margin-top: 32px;
	        margin-bottom: 32px;
	    }
	
	    .send-box input {
			flex-grow: 1;
	        background: #EFEFEF;
	        border: 1px solid #C8C7CC;
	        border-radius: 6px;
	        padding: 8px;
	    }
	
	    .send-box text {
	        color: #D02129;
	        margin-left: 9px;
	        font-size: 15px;
	        height: 40px;
			line-height: 40px;
	        width: 40px;
			text-align: right;
	    }
	
	    .message-content {
	        min-height: 300px;
	        backgroud: #FFFFFF;
	        border: 1px solid #DADADA;
	        margin-top: 26px;
	    }
	
	    .message-text {
	        padding: 4px 11px;
	    }
</style>
