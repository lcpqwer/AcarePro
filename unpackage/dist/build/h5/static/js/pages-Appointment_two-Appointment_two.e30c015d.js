(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-Appointment_two-Appointment_two"],{"0808":function(n,t,e){"use strict";var i=e("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,e("a481");var a=i(e("e814")),s=i(e("59ad")),l=i(e("f499"));e("7f7f");var o,r=i(e("9253"));uni.getSystemInfo({success:function(n){o=n.screenHeight-44}});var c={data:function(){return{allHeight:"height:"+o+"px",MainHeight:"height:"+.8*o+"px",SnameTop:"top:"+(.2*o-70)+"px",UserName:"",UserPhone:"",UserTime:"",Airlines:"",FlightNo:"",Airport:"",Pnum:"",Address:"",check:!0,model:!1,page:0,multiIndex:[0,0,0,0,0],multiArray:[[],[],[],[],[]],allArray:[[],[],[[],[],[]]],colIndex1:0,colIndex2:0,maxIndex:null,minIndex:null,indexList:[0,0],numberList:[1,2,3,4,5,6],timeArray:[[],[],[]],timeIndex:[0,0,0],from_latitude:null,from_longitude:null,to_latitude:null,to_longitude:null,price:Object,start_name:null,end_name:null}},components:{pop:r.default},onLoad:function(){this.checkToken(),this.init();for(var n=0;n<24;n++)n<10&&(n="0"+n),this.timeArray[1].push(String(n));for(n=0;n<60;n++)n<10&&(n="0"+n),this.timeArray[2].push(String(n))},onShow:function(){console.log(getApp().globalData.china_airport),this.Airport=getApp().globalData.china_airport.name,0==this.page?(this.from_latitude=getApp().globalData.china_airport.latitude,this.from_longitude=getApp().globalData.china_airport.longitude,this.start_name=getApp().globalData.china_airport.name):(this.to_latitude=getApp().globalData.china_airport.latitude,this.to_longitude=getApp().globalData.china_airport.longitude,this.end_name=getApp().globalData.china_airport.name)},methods:{Prompt1:function(){uni.showToast({title:"提交成功",duration:1e3,icon:"none",success:function(){setTimeout(function(){uni.navigateBack({delta:1})},1e3)}})},Prompt2:function(){uni.showToast({title:"登陆异常，请重新登录",icon:"none",mask:!0,success:function(){setTimeout(function(){uni.navigateTo({url:"/pages/Login/Login"})},1e3)}})},changeInfo:function(n,t){switch(n){case 0:this.UserName=t.detail.value;break;case 1:this.UserPhone=t.detail.value;break;case 2:this.Airlines=t.detail.value;break;case 3:this.FlightNo=t.detail.value;break;case 5:this.Pnum=this.numberList[t.detail.value];break;case 6:this.Address=t.detail.value;break;default:break}},chooseAddress:function(){var n=this;uni.chooseLocation({success:function(t){console.log(t),n.Address=t.name,0==n.page?(n.to_latitude=t.latitude,n.to_longitude=t.longitude,n.end_name=t.name):(n.from_latitude=t.latitude,n.from_longitude=t.longitude,n.start_name=t.name)}})},checkBox:function(){this.check=!this.check},checkPhone:function(){return!!/^1[3456789]\d{9}$/.test(this.UserPhone)},Prompt:function(n){uni.showToast({title:n,duration:2e3,icon:"none"})},checkAll:function(){var n=this;if(""==n.UserName||""==n.UserPhone||""==n.UserTime||""==n.Address||""==n.Airlines||""==this.Airport||""==this.FlightNo||""==this.Pnum)n.Prompt("信息填写不完整");else if(n.checkPhone())if(n.check){var t=getApp().globalData.AllUrl+"booking/cccheck",e=(0,l.default)({from_latitude:(0,s.default)(n.from_latitude),from_longitude:(0,s.default)(n.from_longitude),to_latitude:(0,s.default)(n.to_latitude),to_longitude:(0,s.default)(n.to_longitude)});console.log(e),uni.request({url:t,method:"POST",data:{data_json:e},header:{Authorization:getApp().globalData.loginToken},success:function(t){if(console.log(t),200==t.data.data.code){var e=t.data.data.data[0].distance/1e3,i=t.data.data.data[0].duration/3600;e>50?n.Prompt("路程超过50公里"):i>1?n.Prompt("时长超过一个小时"):(n.price=t.data.data.data[0],n.showModel())}else n.Prompt("网络连接失败")},fail:function(){},complete:function(){}})}else n.Prompt("请同意服务条款");else n.Prompt("手机号不正确")},showModel:function(){this.model=!this.model},init:function(){this.UserName="",this.UserPhone="",this.UserTime="",this.Airlines="",this.Airport="",this.Address="",this.FlightNo="",this.Pnum="",this.check=!0,getApp().globalData.china_airport.name=""},changPage:function(){this.init(),1==this.page?this.page=0:this.page=1},getInit:function(){for(var n=this,t=[],e=[],i=0;i<24;i++){var a=i;i<10&&(a="0"+i),t.push(a+"时")}for(i=0;i<60;i++){var s=i;i<10&&(s="0"+i),e.push(s+"分")}n.allArray[2][1]=[t,e]},bindMultiPickerColumnChange:function(n){var t=this,e=n.detail.column,i=n.detail.value;t.multiArray.length;switch(e){case 0:t.multiArray[e+1]=t.allArray[e][i];break;case 1:t.indexList[0]=i,t.multiArray[e+1]=t.allArray[e][i];break;case 2:t.indexList[1]=i,0==t.indexList[0]&&0==t.indexList[1]?(0==t.indexList[2]&&(t.multiArray[4]=t.allArray[2][0][1]),t.multiArray[3]=t.allArray[2][0][0]):1==t.indexList[0]&&t.indexList[1]==t.maxIndex[0]?(t.indexList[2]==t.maxIndex[1]&&(t.multiArray[4]=t.allArray[2][2][1]),t.multiArray[3]=t.allArray[2][2][0]):(t.multiArray[3]=t.allArray[2][1][0],t.multiArray[4]=t.allArray[2][1][1]);break;case 3:t.indexList[2]=i,0==t.indexList[0]&&0==t.indexList[1]&&0==i?t.multiArray[4]=t.allArray[2][0][1]:1==t.indexList[0]&&t.indexList[1]==t.maxIndex[0]&&i==t.maxIndex[1]?t.multiArray[4]=t.allArray[2][2][1]:t.multiArray[4]=t.allArray[2][1][1];break;default:break}},chooseTime:function(n){for(var t="",e=this.multiArray,i=0;i<n.detail.value.length;i++){var s=n.detail.value[i];switch(i){case 3:t=(0,a.default)(e[i][s])<10?t+" 0"+(0,a.default)(e[i][s]):t+" "+(0,a.default)(e[i][s]);break;case 4:t=(0,a.default)(e[i][s])<10?t+":0"+(0,a.default)(e[i][s]):t+":"+(0,a.default)(e[i][s]);break;default:t+=e[i][s];break}}console.log(t),this.UserTime=t},formatDate:function(n){var t=n.getFullYear(),e=n.getMonth()+1,i=n.getDate(),a=n.getHours(),s=n.getMinutes();n.getSeconds();return[t,e,i,a,s]},getMaxMin:function(n,t){var e=this;e.maxIndex=[t[2]-1,t[3]]},getDay:function(n,t){for(var e=this,i=new Date(n[0],n[1],0).getDate(),s=[],l=(0,a.default)(n[2]);l<i+1;l++)s.push(l+"日");e.allArray[1].push(s);var o=[];for(l=1;l<t[2]+1;l++)o.push(l+"日");e.allArray[1].push(o),e.multiArray[2]=e.allArray[1][0]},getHM:function(n,t){for(var e=this,i=[],a=n[3];a<24;a++)a<10?i.push("0"+a+"时"):i.push(a+"时");var s=[];for(a=n[4];a<60;a++)a<10?s.push("0"+a+"分"):s.push(a+"分");e.allArray[2][0]=[i,s];var l=[];for(a=0;a<=t[3];a++)a<10?l.push("0"+a+"时"):l.push(a+"时");var o=[];for(a=0;a<=t[4];a++)a<10?o.push("0"+a+"分"):o.push(a+"分");e.allArray[2][2]=[l,o],e.multiArray[3]=e.allArray[2][0][0],e.multiArray[4]=e.allArray[2][0][1]},getMonth:function(n,t){var e=this;t[0]==n[0]?(e.multiArray[0]=[t[0]+"年"],e.allArray[0]=[[n[1]+"月",t[1]+"月"]]):(e.multiArray[0]=[[n[0]+"年",t[0]+"年"]],e.allArray[0]=[[n[1]]+"月",[t[1]+"月"]]),e.multiArray[1]=e.allArray[0][0]},GetDateStr:function(n){var t=new Date;t.setDate(t.getDate()+n);var e=t.getFullYear(),i=t.getMonth()+1,a=t.getDate();return e+"年"+i+"月"+a+"日"},getData:function(){var n=this,t=new Date,e=this.formatDate(new Date(t.getTime()+36e5)),i=new Date(t.getTime()+2592e5),a=this.formatDate(i);n.getMonth(e,a),n.getDay(e,a),n.getHM(e,a),n.getMaxMin(e,a)},toLogin:function(){uni.navigateTo({url:"/pages/Login_one/Login_one"})},checkToken:function(){var n=this;uni.getStorage({key:"loginToken",success:function(t){var e=t.data,i=getApp().globalData.AllUrl+"user";uni.request({url:i,method:"GET",data:{},header:{Authorization:e},success:function(t){"Token已更改，请重新登录获取"==t.data.msg?n.toLogin():"请传递正确的验证头信息"==t.data.msg?n.toLogin():(getApp().globalData.loginToken=e,n.getInit())},fail:function(){console.log("获取失败")},complete:function(){}})}})},addOrder:function(){var n=getApp().globalData.AllUrl+"booking/airport",t=this,e=(0,l.default)({from_latitude:String(t.from_latitude),from_longitude:String(t.from_longitude),to_longitude:String(t.to_longitude),to_latitude:String(t.to_latitude),caller_phone:t.UserPhone,flight_no:t.FlightNo,start_name:t.start_name,end_name:t.end_name,departure_time:t.UserTime.replace("年","-").replace("月","-").replace("日","")+":00",UserName:t.UserName,Airlines:t.Airlines,Pnum:t.Pnum,Type:t.page,UserTime:t.UserTime});console.log(e),uni.request({url:n,method:"POST",data:{data_json:e},header:{Authorization:getApp().globalData.loginToken},success:function(n){console.log(n),t.showModel(),"预约服务境外机场接送信息提交完成"==n.data.msg?(t.init(),t.Prompt1()):"Token过期"==n.data.msg||"无效Token"==n.data.msg||"Token已更改，请重新登录获取"==n.data.msg?(t.init(),t.Prompt2()):"该服务次数不足"==n.data.msg?t.Prompt("服务余额不足！"):t.Prompt("提交失败")},fail:function(){console.log("error")},complete:function(){}})},toSearch:function(){uni.navigateTo({url:"/pages/Search_airport/Search_airport?id=1"})}}};t.default=c},"352f":function(n,t,e){t=n.exports=e("2350")(!1),t.push([n.i,".uni-popup[data-v-0cad7cc5]{position:fixed;top:0;top:0;bottom:0;left:0;right:0;z-index:99999;overflow:hidden}.uni-popup__mask[data-v-0cad7cc5]{position:absolute;top:0;bottom:0;left:0;right:0;z-index:998;background:rgba(0,0,0,.4);opacity:0}.uni-popup__mask.ani[data-v-0cad7cc5]{-webkit-transition:all .3s;-o-transition:all .3s;transition:all .3s}.uni-popup__mask.uni-bottom[data-v-0cad7cc5],.uni-popup__mask.uni-center[data-v-0cad7cc5],.uni-popup__mask.uni-top[data-v-0cad7cc5]{opacity:1}.uni-popup__wrapper[data-v-0cad7cc5]{position:absolute;z-index:999;-webkit-box-sizing:border-box;box-sizing:border-box}.uni-popup__wrapper.ani[data-v-0cad7cc5]{-webkit-transition:all .3s;-o-transition:all .3s;transition:all .3s}.uni-popup__wrapper.top[data-v-0cad7cc5]{top:0;left:0;width:100%;-webkit-transform:translateY(-100%);-ms-transform:translateY(-100%);transform:translateY(-100%)}.uni-popup__wrapper.bottom[data-v-0cad7cc5]{bottom:0;left:0;width:100%;-webkit-transform:translateY(100%);-ms-transform:translateY(100%);transform:translateY(100%)}.uni-popup__wrapper.center[data-v-0cad7cc5]{width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-transform:scale(1.2);-ms-transform:scale(1.2);transform:scale(1.2);opacity:0}.uni-popup__wrapper-box[data-v-0cad7cc5]{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box}.uni-popup__wrapper.uni-custom .uni-popup__wrapper-box[data-v-0cad7cc5]{padding:%?30?%;background:#000;border-top-left-radius:%?30?%;border-top-right-radius:%?30?%}.uni-popup__wrapper.uni-custom.center .uni-popup__wrapper-box[data-v-0cad7cc5]{position:relative;max-width:80%;max-height:80%;overflow-y:scroll}.uni-popup__wrapper.uni-custom.bottom .uni-popup__wrapper-box[data-v-0cad7cc5],.uni-popup__wrapper.uni-custom.top .uni-popup__wrapper-box[data-v-0cad7cc5]{width:100%;max-height:500px;overflow-y:scroll}.uni-popup__wrapper.uni-bottom[data-v-0cad7cc5],.uni-popup__wrapper.uni-top[data-v-0cad7cc5]{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0)}.uni-popup__wrapper.uni-center[data-v-0cad7cc5]{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);opacity:1}",""])},"481bb":function(n,t,e){"use strict";e.r(t);var i=e("8aee"),a=e("d6ba");for(var s in a)"default"!==s&&function(n){e.d(t,n,function(){return a[n]})}(s);e("a528");var l=e("2877"),o=Object(l["a"])(a["default"],i["a"],i["b"],!1,null,"7bc8d517",null);t["default"]=o.exports},"4a3f":function(n,t,e){t=n.exports=e("2350")(!1),t.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* 头部样式 */.Main-title[data-v-7bc8d517]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}.title-item[data-v-7bc8d517]{width:50%;height:100%;position:relative}.title-item>uni-view[data-v-7bc8d517]{height:100%;width:%?100?%;position:absolute;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%)}.choose[data-v-7bc8d517]{color:#2d7df0;border-bottom:#2d7df0 solid %?2?%}\n/* 机场和人数 */.airport[data-v-7bc8d517]{width:%?360?%;height:100%}.pNum[data-v-7bc8d517]{width:%?240?%;height:100%;margin-left:%?50?%}.flex[data-v-7bc8d517]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}",""])},"6a74":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={name:"UniPopup",props:{animation:{type:Boolean,default:!0},type:{type:String,default:"center"},custom:{type:Boolean,default:!1},maskClick:{type:Boolean,default:!0},show:{type:Boolean,default:!0}},data:function(){return{ani:"",showPopup:!1}},watch:{show:function(n){n?this.open():this.close()}},created:function(){},methods:{clear:function(){},open:function(){var n=this;this.$emit("change",{show:!0}),this.showPopup=!0,this.$nextTick(function(){setTimeout(function(){n.ani="uni-"+n.type},30)})},close:function(n){var t=this;!this.maskClick&&n||(this.$emit("change",{show:!1}),this.ani="",this.$nextTick(function(){setTimeout(function(){t.showPopup=!1},300)}))}}};t.default=i},7255:function(n,t,e){"use strict";e.r(t);var i=e("6a74"),a=e.n(i);for(var s in i)"default"!==s&&function(n){e.d(t,n,function(){return i[n]})}(s);t["default"]=a.a},"7de9":function(n,t,e){var i=e("4a3f");"string"===typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);var a=e("4f06").default;a("0332e44e",i,!0,{sourceMap:!1,shadowMode:!1})},"8aee":function(n,t,e){"use strict";var i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",{staticClass:"all"},[e("Back"),e("v-uni-scroll-view",{staticStyle:{width:"100%",height:"100%"},attrs:{"scroll-y":"true"}},[e("v-uni-image",{staticClass:"top_img",staticStyle:{width:"100%"},attrs:{src:"/static/img/top/境內機場接送.png",mode:"widthFix"}}),e("v-uni-view",{staticClass:"Sname"},[n._v("境内机场接送")]),e("v-uni-view",{staticClass:"Main MainTop"},[e("v-uni-view",{staticClass:"Main-title"},[e("v-uni-view",{staticClass:"title-item"},[e("v-uni-view",{class:0==n.page?"choose":"",on:{click:function(t){t=n.$handleEvent(t),n.changPage(t)}}},[n._v("接机")])],1),e("v-uni-view",{staticClass:"title-item"},[e("v-uni-view",{class:1==n.page?"choose":"",on:{click:function(t){t=n.$handleEvent(t),n.changPage(t)}}},[n._v("送机")])],1)],1),0==n.page?e("v-uni-view",{staticClass:"Main-main"},[e("v-uni-view",{staticClass:"Info-warpper"},[e("v-uni-view",{staticClass:"item3"},[e("v-uni-view",{staticClass:"item-title"},[n._v("姓名：")]),e("v-uni-input",{staticClass:"item-text",attrs:{type:"text",value:n.UserName,placeholder:"填写姓名","placeholder-class":"placeholder"},on:{input:function(t){t=n.$handleEvent(t),n.changeInfo(0,t)}}})],1),e("v-uni-view",{staticClass:"item3"},[e("v-uni-view",{staticClass:"item-title"},[n._v("联系电话：")]),e("v-uni-input",{staticClass:"item-text",attrs:{type:"number",maxlength:"11",value:n.UserPhone,placeholder:"填写号码","placeholder-class":"placeholder"},on:{input:function(t){t=n.$handleEvent(t),n.changeInfo(1,t)}}})],1),e("v-uni-view",{staticClass:"item3"},[e("v-uni-picker",{attrs:{mode:"multiSelector",value:n.multiIndex,range:n.multiArray},on:{change:function(t){t=n.$handleEvent(t),n.chooseTime(t)},columnchange:function(t){t=n.$handleEvent(t),n.bindMultiPickerColumnChange(t)}}},[e("v-uni-view",{staticClass:"item-title",on:{click:function(t){t=n.$handleEvent(t),n.getData()}}},[n._v("服务时间：")]),e("v-uni-input",{staticClass:"item-text",attrs:{disabled:"true",type:"text",value:n.UserTime,placeholder:"选择时间","placeholder-class":"placeholder"},on:{click:function(t){t=n.$handleEvent(t),n.getData()}}})],1)],1)],1),e("v-uni-view",{staticClass:"Info-warpper",staticStyle:{position:"relative"}},[e("v-uni-view",{staticClass:"item2"},[e("v-uni-view",{staticClass:"item-title"},[n._v("航空公司：")]),e("v-uni-input",{staticClass:"item-text",attrs:{type:"text",value:n.Airlines,placeholder:"填写航空公司","placeholder-class":"placeholder"},on:{input:function(t){t=n.$handleEvent(t),n.changeInfo(2,t)}}})],1),e("v-uni-view",{staticClass:"item2"},[e("v-uni-view",{staticClass:"item-title",staticStyle:{"text-indent":"10%"}},[n._v("航班号：")]),e("v-uni-input",{staticClass:"item-text",staticStyle:{"margin-left":"10%"},attrs:{type:"text",value:n.FlightNo,placeholder:"填写航班号","placeholder-class":"placeholder"},on:{input:function(t){t=n.$handleEvent(t),n.changeInfo(3,t)}}})],1)],1),e("v-uni-view",{staticClass:"Info-warpper flex"},[e("v-uni-view",{staticClass:"airport"},[e("v-uni-view",{staticClass:"item-title"},[n._v("接机机场：")]),e("v-uni-input",{staticClass:"item-text1",attrs:{disabled:"true",type:"text",value:n.Airport,placeholder:"选择机场","placeholder-class":"placeholder"},on:{input:function(t){t=n.$handleEvent(t),n.changeInfo(4,t)},click:function(t){t=n.$handleEvent(t),n.toSearch(t)}}})],1),e("v-uni-view",{staticClass:"pNum"},[e("v-uni-picker",{attrs:{mode:"selector",range:n.numberList},on:{change:function(t){t=n.$handleEvent(t),n.changeInfo(5,t)}}},[e("v-uni-view",{staticClass:"item-title"},[n._v("接送人数：")]),e("v-uni-input",{staticClass:"item-text1",attrs:{disabled:"true",type:"number",value:n.Pnum,placeholder:"选择人数","placeholder-class":"placeholder"}})],1)],1)],1),e("v-uni-view",{staticClass:"Info-warpper",on:{click:function(t){t=n.$handleEvent(t),n.chooseAddress(t)}}},[e("v-uni-view",{staticClass:"item-title"},[n._v("接送目的地：")]),e("v-uni-input",{staticClass:"item-text1",attrs:{disabled:"true",type:"text",value:n.Address,placeholder:"选择地址","placeholder-class":"placeholder"}})],1),e("v-uni-view",{staticClass:"Terms"},[e("v-uni-checkbox",{staticStyle:{transform:"scale(0.6)"},attrs:{value:"cb",checked:n.check},on:{click:function(t){t=n.$handleEvent(t),n.checkBox(t)}}}),n._v("本人同意并接受平台的服务流程及条款《"),e("v-uni-text",{staticStyle:{color:"#66a4ff"}},[n._v("境外机场接送服务细则及流程")]),n._v("》")],1),e("v-uni-view",{staticClass:"Sub"},[e("v-uni-button",{staticClass:"Sub-btn",attrs:{type:"primary"},on:{click:function(t){t=n.$handleEvent(t),n.checkAll(t)}}},[n._v("提交资料")])],1),e("v-uni-view",{staticClass:"Desc"},[e("v-uni-image",{staticClass:"Desc-img",attrs:{src:"/static/img/tick.png",mode:"aspectFill"}}),e("v-uni-view",{staticClass:"Desc-text"},[n._v("服务人员按照航班实际抵达时间算起，提供最长90分钟的免费等候接机服务")])],1),e("v-uni-view",{staticClass:"Desc"},[e("v-uni-image",{staticClass:"Desc-img",attrs:{src:"/static/img/tick.png",mode:"aspectFill"}}),e("v-uni-view",{staticClass:"Desc-text"},[n._v("服务的出发点或目的地，需有一地为指定民航机场（军用机场除外），不可跨城市、国家或地区使用服务")])],1),e("v-uni-view",{staticClass:"Desc"},[e("v-uni-image",{staticClass:"Desc-img",attrs:{src:"/static/img/tick.png",mode:"aspectFill"}}),e("v-uni-view",{staticClass:"Desc-text"},[n._v("如欲取消或变更行程，需在原约定时间的基础上提前24小时告知，否则视同为用户已使用本次服务")])],1)],1):e("v-uni-view",{staticClass:"Main-main"},[e("v-uni-view",{staticClass:"Info-warpper"},[e("v-uni-view",{staticClass:"item3"},[e("v-uni-view",{staticClass:"item-title"},[n._v("姓名：")]),e("v-uni-input",{staticClass:"item-text",attrs:{type:"text",value:n.UserName,placeholder:"填写姓名","placeholder-class":"placeholder"},on:{input:function(t){t=n.$handleEvent(t),n.changeInfo(0,t)}}})],1),e("v-uni-view",{staticClass:"item3"},[e("v-uni-view",{staticClass:"item-title"},[n._v("联系电话：")]),e("v-uni-input",{staticClass:"item-text",attrs:{type:"number",maxlength:"11",value:n.UserPhone,placeholder:"填写号码","placeholder-class":"placeholder"},on:{input:function(t){t=n.$handleEvent(t),n.changeInfo(1,t)}}})],1),e("v-uni-view",{staticClass:"item3"},[e("v-uni-picker",{attrs:{mode:"multiSelector",value:n.multiIndex,range:n.multiArray},on:{change:function(t){t=n.$handleEvent(t),n.chooseTime(t)},columnchange:function(t){t=n.$handleEvent(t),n.bindMultiPickerColumnChange(t)}}},[e("v-uni-view",{staticClass:"item-title",on:{click:function(t){t=n.$handleEvent(t),n.getData()}}},[n._v("服务时间：")]),e("v-uni-input",{staticClass:"item-text",attrs:{disabled:"true",type:"text",value:n.UserTime,placeholder:"选择时间","placeholder-class":"placeholder"},on:{click:function(t){t=n.$handleEvent(t),n.getData()}}})],1)],1)],1),e("v-uni-view",{staticClass:"Info-warpper",staticStyle:{position:"relative"}},[e("v-uni-view",{staticClass:"item2"},[e("v-uni-view",{staticClass:"item-title"},[n._v("航空公司：")]),e("v-uni-input",{staticClass:"item-text",attrs:{type:"text",value:n.Airlines,placeholder:"填写航空公司","placeholder-class":"placeholder"},on:{input:function(t){t=n.$handleEvent(t),n.changeInfo(2,t)}}})],1),e("v-uni-view",{staticClass:"item2"},[e("v-uni-view",{staticClass:"item-title",staticStyle:{"text-indent":"10%"}},[n._v("航班号：")]),e("v-uni-input",{staticClass:"item-text",staticStyle:{"margin-left":"10%"},attrs:{type:"text",value:n.FlightNo,placeholder:"填写航班号","placeholder-class":"placeholder"},on:{input:function(t){t=n.$handleEvent(t),n.changeInfo(3,t)}}})],1)],1),e("v-uni-view",{staticClass:"Info-warpper flex"},[e("v-uni-view",{staticClass:"airport"},[e("v-uni-view",{staticClass:"item-title"},[n._v("送机机场：")]),e("v-uni-input",{staticClass:"item-text1",attrs:{disabled:"true",type:"text",value:n.Airport,placeholder:"选择机场","placeholder-class":"placeholder"},on:{click:function(t){t=n.$handleEvent(t),n.toSearch(t)}}})],1),e("v-uni-view",{staticClass:"pNum"},[e("v-uni-picker",{attrs:{mode:"selector",range:n.numberList},on:{change:function(t){t=n.$handleEvent(t),n.changeInfo(5,t)}}},[e("v-uni-view",{staticClass:"item-title"},[n._v("接送人数：")]),e("v-uni-input",{staticClass:"item-text1",attrs:{disabled:"true",type:"number",value:n.Pnum,placeholder:"选择人数","placeholder-class":"placeholder"}})],1)],1)],1),e("v-uni-view",{staticClass:"Info-warpper",on:{click:function(t){t=n.$handleEvent(t),n.chooseAddress(t)}}},[e("v-uni-view",{staticClass:"item-title"},[n._v("接送起始地：")]),e("v-uni-input",{staticClass:"item-text1",attrs:{disabled:"true",type:"text",value:n.Address,placeholder:"选择地址","placeholder-class":"placeholder"}})],1),e("v-uni-view",{staticClass:"Terms"},[e("v-uni-checkbox",{staticStyle:{transform:"scale(0.6)"},attrs:{value:"cb",checked:n.check},on:{click:function(t){t=n.$handleEvent(t),n.checkBox(t)}}}),n._v("本人同意并接受平台的服务流程及条款《"),e("v-uni-text",{staticStyle:{color:"#66a4ff"}},[n._v("境外机场接送服务细则及流程")]),n._v("》")],1),e("v-uni-view",{staticClass:"Sub"},[e("v-uni-button",{staticClass:"Sub-btn",attrs:{type:"primary"},on:{click:function(t){t=n.$handleEvent(t),n.checkAll(t)}}},[n._v("提交资料")])],1),e("v-uni-view",{staticClass:"Desc"},[e("v-uni-image",{staticClass:"Desc-img",attrs:{src:"/static/img/tick.png",mode:"aspectFill"}}),e("v-uni-view",{staticClass:"Desc-text"},[n._v("服务人员按照预约时间起算提供最长 30 分钟的免费等候送机服务")])],1),e("v-uni-view",{staticClass:"Desc"},[e("v-uni-image",{staticClass:"Desc-img",attrs:{src:"/static/img/tick.png",mode:"aspectFill"}}),e("v-uni-view",{staticClass:"Desc-text"},[n._v("服务的出发点或目的地，需有一地为指定民航机场（军用机场除外），不可跨城市、国家或地区使用服务")])],1),e("v-uni-view",{staticClass:"Desc"},[e("v-uni-image",{staticClass:"Desc-img",attrs:{src:"/static/img/tick.png",mode:"aspectFill"}}),e("v-uni-view",{staticClass:"Desc-text"},[n._v("如欲取消或变更行程，需在原约定时间的基础上提前 24 小时告知，否则视同为用户已使用本次服务")])],1)],1)],1),n.model?e("v-uni-view",{staticClass:"AppMask",on:{click:function(t){t=n.$handleEvent(t),n.showModel(t)}}}):n._e(),n.model?e("v-uni-view",{staticClass:"Mask-main"},[e("v-uni-view",{staticClass:"Mask-main-hide"},[e("v-uni-image",{staticClass:"Hide-img",attrs:{src:"/static/img/hide.png",mode:"aspectFill"}}),e("v-uni-view",{staticClass:"Hide-mask",on:{click:function(t){t=n.$handleEvent(t),n.showModel(t)}}})],1),e("v-uni-view",{staticClass:"Mask-title"},[n._v("请核对提供资料")]),e("v-uni-view",{staticClass:"Info-item"},[n._v("姓  名："+n._s(n.UserName))]),e("v-uni-view",{staticClass:"Info-item"},[n._v("联系电话："+n._s(n.UserPhone))]),e("v-uni-view",{staticClass:"Info-item"},[n._v("服务时间："+n._s(n.UserTime))]),e("v-uni-view",{staticClass:"Info-item"},[n._v("航空公司："+n._s(n.Airlines))]),e("v-uni-view",{staticClass:"Info-item flex"},[e("v-uni-view",{staticClass:"Info-item-item"},[n._v("航 班 号："+n._s(n.FlightNo))]),e("v-uni-view",{staticClass:"Info-item-item"},[n._v("接送人数："+n._s(n.Pnum))])],1),0==n.page?e("v-uni-view",[e("v-uni-view",{staticClass:"Info-item"},[n._v("接机机场："+n._s(n.Airport))]),e("v-uni-view",{staticClass:"Info-item"},[n._v("目 的 地："+n._s(n.Address))])],1):e("v-uni-view",[e("v-uni-view",{staticClass:"Info-item"},[n._v("送机机场："+n._s(n.Airport))]),e("v-uni-view",{staticClass:"Info-item"},[n._v("起 始 地："+n._s(n.Address))])],1),e("v-uni-view",{staticClass:"Sub-warpper"},[e("v-uni-button",{staticClass:"Sub-Sub",attrs:{type:"primary"},on:{click:function(t){t=n.$handleEvent(t),n.addOrder(t)}}},[n._v("确认提交资料")])],1),e("v-uni-view",{staticClass:"Mask-content"},[e("v-uni-image",{staticClass:"Mask-content-img",attrs:{src:"/static/img/tick.png",mode:"aspectFill"}}),e("v-uni-view",{staticClass:"Mask-content-text"},[n._v("受理成功后，司机会与你联系，如行程无变更，则境外机场接送服务正式生效")])],1)],1):n._e()],1)],1)},a=[];e.d(t,"a",function(){return i}),e.d(t,"b",function(){return a})},9253:function(n,t,e){"use strict";e.r(t);var i=e("e9cc"),a=e("7255");for(var s in a)"default"!==s&&function(n){e.d(t,n,function(){return a[n]})}(s);e("befc");var l=e("2877"),o=Object(l["a"])(a["default"],i["a"],i["b"],!1,null,"0cad7cc5",null);t["default"]=o.exports},a528:function(n,t,e){"use strict";var i=e("7de9"),a=e.n(i);a.a},befc:function(n,t,e){"use strict";var i=e("ddf2"),a=e.n(i);a.a},d6ba:function(n,t,e){"use strict";e.r(t);var i=e("0808"),a=e.n(i);for(var s in i)"default"!==s&&function(n){e.d(t,n,function(){return i[n]})}(s);t["default"]=a.a},ddf2:function(n,t,e){var i=e("352f");"string"===typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);var a=e("4f06").default;a("7b27dd51",i,!0,{sourceMap:!1,shadowMode:!1})},e9cc:function(n,t,e){"use strict";var i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return n.showPopup?e("v-uni-view",{staticClass:"uni-popup"},[e("v-uni-view",{staticClass:"uni-popup__mask",class:[n.ani,n.animation?"ani":"",n.custom?"":"uni-custom"],on:{click:function(t){t=n.$handleEvent(t),n.close(!0)}}}),e("v-uni-view",{staticClass:"uni-popup__wrapper",class:[n.type,n.ani,n.animation?"ani":"",n.custom?"":"uni-custom"],on:{click:function(t){t=n.$handleEvent(t),n.close(!0)}}},[e("v-uni-view",{staticClass:"uni-popup__wrapper-box",on:{click:function(t){t.stopPropagation(),t=n.$handleEvent(t),n.clear(t)}}},[n._t("default")],2)],1)],1):n._e()},a=[];e.d(t,"a",function(){return i}),e.d(t,"b",function(){return a})}}]);