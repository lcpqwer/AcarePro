function Request(url, type, data){
	try{
		uni.request({
			url: url,
			method: type,
			data: data,
			header:{
				Authorization: getApp().globalData.loginToken
			},
			success: res => {
				return res
			},
			fail: () => {
				return 'error'
			},
			complete: () => {}
		});
	}catch(e){
		//TODO handle the exception
		return e
	}
	
}
export {Request}