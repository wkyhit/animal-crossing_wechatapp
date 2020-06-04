// 封装get请求
const baseUrl = "http://47.240.8.112/api/v1/private"
export const myRequest = (options) => {
	return new Promise((resolve, reject) => {
		uni.request({
			method: options.method,
			data: options.data,
			url: baseUrl + options.url,
			success(res) {
				if (res.statusCode !== 200) {
					return uni.showToast({
						title: '获取数据失败2'
					})
				}
				resolve(res)
			},
			fail(err) {
				uni.showToast({
					title: '获取数据失败'
				})
				reject(err)
			}
		})
	})
}

