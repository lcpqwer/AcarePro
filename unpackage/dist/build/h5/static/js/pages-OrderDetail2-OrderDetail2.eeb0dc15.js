(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-OrderDetail2-OrderDetail2"],{"1ffc":function(t,e,i){"use strict";i.r(e);var a=i("4bae"),r=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,function(){return a[t]})}(n);e["default"]=r.a},3722:function(t,e,i){"use strict";var a=i("3bc6"),r=i.n(a);r.a},"3bc6":function(t,e,i){var a=i("4d12");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=i("4f06").default;r("89350a0a",a,!0,{sourceMap:!1,shadowMode:!1})},"3c4f":function(t,e,i){"use strict";i.r(e);var a=i("7cba"),r=i("1ffc");for(var n in r)"default"!==n&&function(t){i.d(e,t,function(){return r[t]})}(n);i("3722");var s=i("2877"),o=Object(s["a"])(r["default"],a["a"],a["b"],!1,null,"d498da7c",null);e["default"]=o.exports},"4bae":function(t,e,i){"use strict";var a=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r,n=a(i("97e6"));uni.getSystemInfo({success:function(t){r=t.screenHeight-44}});var s={data:function(){return{allHeight:"height:"+r+"px",MainHeight:"height:"+.8*r+"px",SnameTop:"top:"+(.2*r-70)+"px",MainTop:"top:"+(.2*r+10)+"px",OrderItem:null,del:!1,qecode:null}},components:{},onLoad:function(t){var e=JSON.parse(t.OrderItem);this.OrderItem=e,console.log(e);var i=n.default.createQrCodeImg(e.ticket_code,{});this.qrcode=i,1!=e.status&&4!=e.status||(this.del=!0)},methods:{Prompt:function(t){uni.showToast({title:t,icon:"none",duration:1e3,mask:!0}),setTimeout(function(){uni.hideToast(),uni.navigateBack({delta:1})},1e3)},Prompt1:function(){uni.showToast({title:"登陆状态异常",icon:"none",duration:1e3,mask:!0}),setTimeout(function(){uni.hideToast(),uni.navigateTo({url:"/pages/Login_one/Login_one"})},1e3)},Prompt2:function(){uni.showToast({title:"网络连接失败",icon:"none",duration:1e3,mask:!0}),setTimeout(function(){uni.hideToast()},1e3)},delOrder:function(){var t=this,e=getApp().globalData.AllUrl+"api/cancel",i={data:{service_type:"2",primary_id:this.OrderItem.id}};console.log(i),uni.request({url:e,method:"POST",data:i,header:{Authorization:getApp().globalData.loginToken},success:function(e){console.log(e),"取消订单成功"==e.data.msg?t.Prompt("取消成功"):"取消订单失败"==e.data.msg?t.Prompt("该订单已完成或取消"):t.Prompt2()},fail:function(){},complete:function(){}})}}};e.default=s},"4d12":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".Order-state[data-v-d498da7c]{height:%?140?%;position:relative}.Main-title[data-v-d498da7c]{color:#412975}\r\n\r\n/* .OS-img, .OS-text, .OI-img-warpper {\r\n\tposition: absolute;\r\n\ttop: 50%;\r\n\ttransform: translateY(-50%);\r\n} */.OS-img[data-v-d498da7c]{width:%?50?%;height:%?50?%}.OS-text[data-v-d498da7c]{left:%?70?%;\r\n\t/* height: 100upx; */\r\n\t/* line-height: 100upx; */font-size:%?40?%;letter-spacing:%?4?%;margin-left:%?20?%}.Order-img[data-v-d498da7c]{\r\n\t/* height: 240upx; */\r\n\t/* position: relative; */width:100%;text-align:center}.OI-img-warpper[data-v-d498da7c]{height:%?173?%;width:%?300?%}.OI-img[data-v-d498da7c]{\r\n\t/* width: 100%;\r\n\theight: 100%;\r\n\tborder-radius: 20upx; */width:%?340?%}.Order-info[data-v-d498da7c]{\r\n\t/* height: 60upx; */line-height:%?60?%;font-size:%?30?%;color:#412975}.Img-text[data-v-d498da7c]{width:%?292?%;position:absolute;bottom:%?20?%;right:0;background-color:silver;color:#fff;padding-right:%?20?%;font-size:%?30?%;text-align:right;background:-webkit-gradient(linear,right top,left top,from(grey),to(hsla(0,0%,100%,0)));background:-o-linear-gradient(right,grey,hsla(0,0%,100%,0));background:linear-gradient(270deg,grey,hsla(0,0%,100%,0))}.del-warpper[data-v-d498da7c]{width:100%;height:%?70?%;margin-top:%?50?%;position:relative}.del-sub[data-v-d498da7c]{height:%?70?%;width:%?250?%;background-color:silver;line-height:%?70?%;font-style:%?50?%;position:absolute;right:%?50?%}",""])},"7cba":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"all"},[i("Back"),i("v-uni-scroll-view",{staticStyle:{width:"100%",height:"100%"},attrs:{"scroll-y":"true"}},[i("v-uni-image",{staticStyle:{width:"100%"},attrs:{src:"/static/img/top/保養.png",mode:"widthFix"}}),i("v-uni-view",{staticClass:"Sname"},[t._v("我的订单")]),i("v-uni-view",{staticClass:"Main MainTop"},[i("v-uni-view",{staticClass:"Main-title"},[t._v("订单编号："+t._s(t.OrderItem.order_number))]),i("v-uni-view",{staticClass:"Main-main"},[i("v-uni-view",{staticClass:"Order-state"},[i("v-uni-view",{staticStyle:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-60%)",display:"flex","flex-direction":"row"}},[i("v-uni-image",{staticClass:"OS-img",attrs:{src:"/static/img/tick.png",mode:"widthFix"}}),1==t.OrderItem.status?i("v-uni-view",{staticClass:"OS-text",staticStyle:{color:"#302993"}},[t._v("正在进行")]):2==t.OrderItem.status?i("v-uni-view",{staticClass:"OS-text",staticStyle:{color:"green"}},[t._v("服务完成")]):4==t.OrderItem.status?i("v-uni-view",{staticClass:"OS-text",staticStyle:{color:"green"}},[t._v("待商家确认")]):i("v-uni-view",{staticClass:"OS-text",staticStyle:{color:"red"}},[t._v("已取消")])],1)],1),i("v-uni-view",{staticClass:"Order-img"},[i("v-uni-image",{staticClass:"OI-img",attrs:{src:t.qrcode,mode:"widthFix"}})],1),i("v-uni-view",{staticClass:"Order-info"},[t._v("门店名称："+t._s(t.OrderItem.store_id.name))]),i("v-uni-view",{staticClass:"Order-info"},[t._v("门店地址："+t._s(t.OrderItem.store_id.store_address))]),i("v-uni-view",{staticClass:"Order-info"},[t._v("门店电话："+t._s(t.OrderItem.store_id.store_phone))]),t.OrderItem.store_id&&"车享家"==t.OrderItem.store_id.company?i("v-uni-view",{staticClass:"Order-info"},[t._v("预约时间："+t._s(t.OrderItem.ServerTime))]):t._e(),t.del?i("v-uni-view",{staticClass:"del-warpper"},[i("v-uni-button",{staticClass:"del-sub",attrs:{type:"primary"},on:{click:function(e){e=t.$handleEvent(e),t.delOrder()}}},[t._v("取消订单")])],1):t._e(),i("v-uni-image",{staticStyle:{height:"70upx",width:"208upx","margin-top":"70upx"},attrs:{src:"/static/img/newLogo.png",mode:""}})],1)],1)],1)],1)},r=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return r})}}]);