// 封装get请求
const baseUrl = "http://47.240.8.112/api/v1/private"
export const myRequest = (options) => {
	return new Promise((resolve, reject) => {
		uni.request({
			method: options.method,
			data: options.data,
			url: baseUrl + options.url,
			header: options.header,
			success(res) {
				// console.log("post"+res.statusCode)
				if (res.statusCode !== 200 && res.statusCode !== 201 ) {
					return uni.showToast({
						title: '获取数据失败'
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

