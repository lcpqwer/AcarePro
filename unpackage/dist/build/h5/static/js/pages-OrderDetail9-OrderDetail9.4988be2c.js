(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-OrderDetail9-OrderDetail9"],{3603:function(t,e,i){"use strict";i.r(e);var r=i("468d"),a=i.n(r);for(var n in r)"default"!==n&&function(t){i.d(e,t,function(){return r[t]})}(n);e["default"]=a.a},"468d":function(t,e,i){"use strict";var r=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a,n=r(i("97e6"));uni.getSystemInfo({success:function(t){a=t.screenHeight-44}});var s={data:function(){return{allHeight:"height:"+a+"px",MainHeight:"height:"+.8*a+"px",SnameTop:"top:"+(.2*a-70)+"px",MainTop:"top:"+(.2*a+10)+"px",OrderItem:null,del:!1,qrcode:null}},components:{},onLoad:function(t){var e=JSON.parse(t.OrderItem);this.OrderItem=e,console.log(e);var i=n.default.createQrCodeImg(e.order_number,{});this.qrcode=i},methods:{delOrder:function(){}}};e.default=s},5414:function(t,e,i){"use strict";var r=i("ef4e"),a=i.n(r);a.a},"55b5":function(t,e,i){"use strict";var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"all",style:t.allHeight},[i("Back"),i("v-uni-scroll-view",{staticStyle:{width:"100%",height:"100%"},attrs:{"scroll-y":"true"}},[i("v-uni-image",{staticStyle:{width:"100%"},attrs:{src:"/static/img/top/貴賓廳.png",mode:"widthFix"}}),i("v-uni-view",{staticClass:"Sname"},[t._v("我的订单")]),i("v-uni-view",{staticClass:"Main MainTop"},[i("v-uni-view",{staticClass:"Main-title"},[t._v("订单编号："+t._s(t.OrderItem.order_number))]),i("v-uni-view",{staticClass:"Main-main"},[i("v-uni-view",{staticClass:"Order-state"},[i("v-uni-view",{staticStyle:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-60%)",display:"flex","flex-direction":"row"}},[i("v-uni-image",{staticClass:"OS-img",attrs:{src:"/static/img/tick.png",mode:"widthFix"}}),1==t.OrderItem.status?i("v-uni-view",{staticClass:"OS-text",staticStyle:{color:"#302993"}},[t._v("正在进行")]):2==t.OrderItem.status?i("v-uni-view",{staticClass:"OS-text",staticStyle:{color:"green"}},[t._v("服务完成")]):i("v-uni-view",{staticClass:"OS-text",staticStyle:{color:"red"}},[t._v("已取消")])],1)],1),i("v-uni-view",{staticClass:"Order-img"},[i("v-uni-image",{staticClass:"OI-img",attrs:{src:t.qrcode,mode:"widthFix"}})],1),""!=t.OrderItem.order_detail.userTime?i("v-uni-view",{staticClass:"Order-info"},[t._v("服务日期："+t._s(t.OrderItem.order_detail.userTime))]):i("v-uni-view",{staticClass:"Order-info"},[t._v("服务日期：暂无")]),""!=t.OrderItem.order_detail.relaMerchant?i("v-uni-view",{staticClass:"Order-info"},[t._v("核销网点："+t._s(t.OrderItem.order_detail.relaMerchant))]):t._e(),i("v-uni-view",{staticClass:"Order-info"},[t._v("核销网点：暂无")]),i("v-uni-image",{staticStyle:{height:"70upx",width:"208upx","margin-top":"70upx"},attrs:{src:"/static/img/newLogo.png",mode:""}})],1)],1)],1)],1)},a=[];i.d(e,"a",function(){return r}),i.d(e,"b",function(){return a})},"61c0":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".Order-state[data-v-5ca0129e]{height:%?140?%;position:relative}.Main-title[data-v-5ca0129e]{color:#412975}\r\n\r\n/* .OS-img, .OS-text, .OI-img-warpper {\r\n\tposition: absolute;\r\n\ttop: 50%;\r\n\ttransform: translateY(-50%);\r\n} */.OS-img[data-v-5ca0129e]{width:%?50?%;height:%?50?%}.OS-text[data-v-5ca0129e]{left:%?70?%;\r\n\t/* height: 100upx; */\r\n\t/* line-height: 100upx; */font-size:%?40?%;letter-spacing:%?4?%;margin-left:%?20?%}.Order-img[data-v-5ca0129e]{\r\n\t/* height: 240upx; */\r\n\t/* position: relative; */width:100%;text-align:center}.OI-img-warpper[data-v-5ca0129e]{height:%?173?%;width:%?300?%}.OI-img[data-v-5ca0129e]{\r\n\t/* width: 100%;\r\n\theight: 100%;\r\n\tborder-radius: 20upx; */width:%?340?%}.Order-info[data-v-5ca0129e]{\r\n\t/* height: 60upx; */line-height:%?60?%;font-size:%?30?%;color:#412975}.Img-text[data-v-5ca0129e]{width:%?292?%;position:absolute;bottom:%?20?%;right:0;background-color:silver;color:#fff;padding-right:%?20?%;font-size:%?30?%;text-align:right;background:-webkit-gradient(linear,right top,left top,from(grey),to(hsla(0,0%,100%,0)));background:-o-linear-gradient(right,grey,hsla(0,0%,100%,0));background:linear-gradient(270deg,grey,hsla(0,0%,100%,0))}.del-warpper[data-v-5ca0129e]{width:100%;height:%?70?%;margin-top:%?50?%;position:relative}.del-sub[data-v-5ca0129e]{height:%?70?%;width:%?250?%;background-color:silver;line-height:%?70?%;font-style:%?50?%;position:absolute;right:%?50?%}",""])},c749:function(t,e,i){"use strict";i.r(e);var r=i("55b5"),a=i("3603");for(var n in a)"default"!==n&&function(t){i.d(e,t,function(){return a[t]})}(n);i("5414");var s=i("2877"),o=Object(s["a"])(a["default"],r["a"],r["b"],!1,null,"5ca0129e",null);e["default"]=o.exports},ef4e:function(t,e,i){var r=i("61c0");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var a=i("4f06").default;a("34d23b66",r,!0,{sourceMap:!1,shadowMode:!1})}}]);