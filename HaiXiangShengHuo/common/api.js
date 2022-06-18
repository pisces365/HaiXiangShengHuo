import {
	baseUrl
} from './config.js'
//发送手机验证码到对应手机上
export function home(data) {
	return new Promise(function(reslove, reject) {
		uni.request({
			url: `${baseUrl}/api/MQTT/post`,
			method: 'POST',
			data: data,
			success: res => {
				let result = res.data;
				console.log('home', res);
				reslove(result);
			},
			fail: () => {},
			complete: () => {

			}
		})
	})
}

export function goHome(data) {
	return new Promise(function(reslove, reject) {
		uni.request({
			url: `${baseUrl}/api/MQTT/goHome`,
			method: 'POST',
			data: data,
			success: res => {
				let result = res.data;
				console.log('gohome', result);
				reslove(result);
			},
			fail: () => {},
			complete: () => {}
		})
	})
}

// postApply(data).then((res) => {
// 	if (res.code == "200") {
// 		uni.hideLoading();
// 		console.log(res.data);
// 		uni.showToast({
// 		title: '提交成功',
// 		duration: 2000
// 		});
// 		that.goBack();
// 	}
// 	else {
// 		console.log("fail");
// 		uni.hideLoading();
// 		uni.showToast({
// 		title: '提交失败',
// 		duration: 2000,
// 		icon: 'error'
// 		});
// 	}
// })

// 	import {
// 	postApply,postImage
// } from '@/common/accurate-support-api.js'