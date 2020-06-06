<template>
  <div class="hm-talk-card">
    <div class="head">
      <div class="state">
        <div class="imghead">
          <image class="avator" :src="options.avator" />
          <text class="name">{{ options.name }}</text>
        </div>
        <image class="stateimg" :src="options.stateimg" />
      </div>
      <div class="main">
		  <!-- 文字内容 -->
		  <div>
			  <text class="text">{{ options.text }}</text>
		  </div>
		<!-- 图片内容 -->
		<div class="content_img">
			<div class="some_img" v-for="(item,index) in options.content_img" :key="index">
				<image class="img1" :src="item"></image>
			</div>
		</div>
      </div>
      <div class="body">
        <div class="block">
          <image class="iconfriendsHelp" :src="options.iconfriendsHelp" />
          <text class="num">{{ options.like_num }}</text>
          <text class="like">{{ options.like }}</text>
        </div>
        <div class="group">
          <image class="iconTest" :src="options.iconTest" />
          <text class="commentNum">{{ options.commentNum }}</text>
          <text class="comments">{{ options.comments }}</text>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HmTalkCard',
  props: {
    dataId: {
      type: String,
      default: 'hm-talk-card'
    },
    options: {
      type: Object,
      default: function() {
        return {
          //用户头像
		  avator:
            './images/img_25252_0_2.png',
          name: '黄三环',
		  // ... 图片
          stateimg:
            './images/img_25252_0_3.png',
		  //动态文字内容
          text: '1582年，“咖啡”一词通过荷兰语koffie进入英语…',
		  //动态图片内容
		  content_img:[],
          // 点赞图标
		  iconfriendsHelp:
            './images/img_25252_0_0.png',
          like_num: '234',
          like: '喜欢',
		  // 评论图标
          iconTest:
            './images/img_25252_0_1.png',
          commentNum: '67',
          comments: '条评论'
        };
      }
    }
  },
  data() {
    return {};
  },
  methods: {}
};
</script>
<style>
@import './index.response.css';
</style>
