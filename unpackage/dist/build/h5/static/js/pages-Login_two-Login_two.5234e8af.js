(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-Login_two-Login_two"],{"1fd9":function(t,e,n){"use strict";n.r(e);var a=n("f081"),i=n("ec91");for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);n("3d04");var c=n("2877"),s=Object(c["a"])(i["default"],a["a"],a["b"],!1,null,"fe7ecf1e",null);e["default"]=s.exports},"3d04":function(t,e,n){"use strict";var a=n("a668"),i=n.n(a);i.a},"6cb4":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.LoginBack[data-v-fe7ecf1e]{width:100%;height:100%;position:fixed;z-index:1}.LoginMain[data-v-fe7ecf1e]{width:100%;height:100%;position:fixed;z-index:100;background-size:100% 100%}.Logo[data-v-fe7ecf1e]{width:100%;height:%?400?%;text-align:center;line-height:%?255?%;position:relative}.Logo-img[data-v-fe7ecf1e]{width:%?600?%}.Logo-name[data-v-fe7ecf1e]{vertical-align:middle;font-size:%?40?%;font-weight:600}.Logo-sep[data-v-fe7ecf1e]{vertical-align:middle;font-size:%?40?%}.Logo-area[data-v-fe7ecf1e]{vertical-align:sub;font-size:%?30?%;font-weight:600}.Input-warpper[data-v-fe7ecf1e]{width:%?625?%;background-color:#fff;height:%?270?%;margin-left:%?62.5?%}.Input[data-v-fe7ecf1e]{height:%?90?%;width:100%;position:relative;z-index:10;background-color:#fff}.Input-input[data-v-fe7ecf1e]{display:inline-block;vertical-align:middle;font-size:%?30?%;position:absolute;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);left:%?170?%;width:%?400?%}.Input-text[data-v-fe7ecf1e]{font-size:%?30?%;font-weight:600;margin:0 %?30?%;line-height:%?90?%}.Sub[data-v-fe7ecf1e]{width:60%;height:%?85?%;line-height:%?85?%;font-size:%?35?%;margin-top:%?125?%;background-color:#118acd}.bgi[data-v-fe7ecf1e]{position:fixed;right:0;z-index:1;bottom:0}',""])},a668:function(t,e,n){var a=n("6cb4");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("db55c11c",a,!0,{sourceMap:!1,shadowMode:!1})},ec91:function(t,e,n){"use strict";n.r(e);var a=n("f255"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);e["default"]=i.a},f081:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"all-warpper",staticStyle:{"background-image":"url('/static/img/LoginBack.png')","background-size":"100% 100%"}},[n("v-uni-view",{staticClass:"Logo"},[n("v-uni-image",{staticClass:"Logo-img",attrs:{src:"/static/img/logo/guoren.png",mode:"aspectFit"}})],1),n("v-uni-view",{staticClass:"Input-warpper",staticStyle:{"z-index":"10"}},[n("v-uni-view",{staticClass:"Input",staticStyle:{border:"#C0C0C0 solid 1upx"}},[n("v-uni-text",{staticClass:"Input-text"},[t._v("姓 名 ：")]),n("v-uni-input",{staticClass:"Input-input",attrs:{type:"text",value:t.UserName,placeholder:"请输入姓名","placeholder-style":"color: #cccccc"},on:{input:function(e){e=t.$handleEvent(e),t.changUserName(e)}}})],1),n("v-uni-view",{staticClass:"Input",staticStyle:{"border-left":"#C0C0C0 solid 1upx","border-right":"#C0C0C0 solid 1upx"}},[n("v-uni-text",{staticClass:"Input-text"},[t._v("保单号 ：")]),n("v-uni-input",{staticClass:"Input-input",attrs:{type:"text",value:t.PhoneNum,placeholder:"请输入保单号","placeholder-style":"color: #cccccc"},on:{input:function(e){e=t.$handleEvent(e),t.changPhoneNum(e)}}})],1),n("v-uni-view",{staticClass:"Input",staticStyle:{border:"#C0C0C0 solid 1upx"}},[n("v-uni-text",{staticClass:"Input-text"},[t._v("车架号 ：")]),n("v-uni-input",{staticClass:"Input-input",attrs:{value:t.CarCodes,type:"text",placeholder:"请输入车架号后六位","placeholder-style":"color: #cccccc"},on:{input:function(e){e=t.$handleEvent(e),t.changCarCodes(e)}}})],1)],1),n("v-uni-button",{staticClass:"Sub",staticStyle:{"z-index":"10","background-color":"#4db8e9",color:"#fff","box-shadow":"5upx 5upx 5upx #888888"},attrs:{type:"primary"},on:{click:function(e){e=t.$handleEvent(e),t.Login(e)}}},[t._v("登 陆")])],1)},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})},f255:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("386d");var a={data:function(){return{UserName:"",PhoneNum:"",CarCodes:""}},onLoad:function(){getApp().globalData.company||uni.navigateTo({url:"/pages/Login_one/Login_one"}),uni.getLocation({type:"wgs84",success:function(t){getApp().globalData.latitude=t.latitude,getApp().globalData.longitude=t.longitude}})},methods:{changUserName:function(t){this.UserName=t.detail.value},changPhoneNum:function(t){this.PhoneNum=t.detail.value},changCarCodes:function(t){this.CarCodes=t.detail.value},Prompt:function(t){uni.showToast({title:t,duration:1e3,icon:"none"})},checkPhone:function(t){var e=/^[1][3,4,5,7,8][0-9]{9}$/;return!!e.test(t)},checkCarnum:function(){var t=/^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/;return-1!=this.CarCodes.search(t)},Login:function(){var t=getApp().globalData.AllUrl+"auth/user/login",e=this;""==e.PhoneNum||""==e.UserName||""==e.CarCodes?e.Prompt("信息填写不完整"):uni.request({url:t,method:"POST",data:{name:e.UserName,insurance_id:e.PhoneNum,inc_vin:e.CarCodes,company_id:getApp().globalData.company,wid:getApp().globalData.openid},success:function(t){console.log(t),t.data.data.token?(getApp().globalData.loginToken="JWT "+t.data.data.token,uni.setStorage({key:"loginToken",data:"JWT "+t.data.data.token,success:function(){t.data.data.state?e.toHome():uni.navigateTo({url:"/pages/Perfect_user/Perfect_user",success:function(t){},fail:function(){},complete:function(){}})}})):e.Prompt("登录失败！请检查登录信息")},fail:function(){e.Prompt("网络出错")},complete:function(){}})},toHome:function(){uni.navigateTo({url:"/pages/home/home"})}}};e.default=a}}]);