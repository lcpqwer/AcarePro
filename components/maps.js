(function(config) {
	var ca = navigator.userAgent.toLowerCase(),
		da = window,
		ga = document,
		ha = ga.documentElement;

	function ia(a) {
		return -1 !== ca.indexOf(a)
	}
	var oa = /([a-z0-9]*\d+[a-z0-9]*)/;

	function pa() {
		var a = qa;
		if (!a) return null;
		var a = a.toLowerCase(),
			b = null;
		if (b = a.match(/angle \((.*)\)/)) a = b[1], a = a.replace(/\s*direct3d.*$/, "");
		a = a.replace(/\s*\([^\)]*wddm[^\)]*\)/, "");
		if (0 <= a.indexOf("intel")) {
			b = ["Intel"];
			0 <= a.indexOf("mobile") && b.push("Mobile");
			(0 <= a.indexOf("gma") || 0 <= a.indexOf("graphics media accelerator")) && b.push("GMA");
			if (0 <= a.indexOf("haswell")) b.push("Haswell");
			else if (0 <= a.indexOf("ivy")) b.push("HD 4000");
			else if (0 <= a.indexOf("sandy")) b.push("HD 3000");
			else if (0 <= a.indexOf("ironlake")) b.push("HD");
			else {
				0 <= a.indexOf("hd") && b.push("HD");
				var c = a.match(oa);
				c && b.push(c[1].toUpperCase())
			}
			return b = b.join(" ")
		}
		return 0 <= a.indexOf("nvidia") || 0 <= a.indexOf("quadro") || 0 <= a.indexOf("geforce") || 0 <= a.indexOf("nvs") ?
			(b = ["nVidia"], 0 <= a.indexOf("geforce") && b.push("geForce"), 0 <= a.indexOf("quadro") && b.push("Quadro"), 0 <=
				a.indexOf("nvs") && b.push("NVS"), a.match(/\bion\b/) && b.push("ION"), a.match(/gtx\b/) ? b.push("GTX") : a.match(
					/gts\b/) ? b.push("GTS") : a.match(/gt\b/) ? b.push("GT") : a.match(/gs\b/) ? b.push("GS") : a.match(/ge\b/) ?
				b.push("GE") : a.match(/fx\b/) && b.push("FX"), (c = a.match(oa)) && b.push(c[1].toUpperCase().replace("GS", "")),
				0 <= a.indexOf("titan") ? b.push("TITAN") : 0 <= a.indexOf("ti") && b.push("Ti"), b = b.join(" ")) : 0 <= a.indexOf(
				"amd") || 0 <= a.indexOf("ati") || 0 <= a.indexOf("radeon") || 0 <= a.indexOf("firegl") || 0 <= a.indexOf(
				"firepro") ? (b = ["AMD"], 0 <= a.indexOf("mobil") && b.push("Mobility"), c = a.indexOf("radeon"), 0 <= c && b.push(
					"Radeon"), 0 <= a.indexOf("firepro") ? b.push("FirePro") : 0 <= a.indexOf("firegl") && b.push("FireGL"), 0 <= a.indexOf(
					"hd") &&
				b.push("HD"), 0 <= c && (a = a.substring(c)), (c = a.match(oa)) && b.push(c[1].toUpperCase().replace("HD", "")), b =
				b.join(" ")) : a.substring(0, 100)
	}
	var sa =
		"microsoft basic render driver;vmware svga 3d;Intel 965GM;Intel B43;Intel G41;Intel G45;Intel G965;Intel GMA 3600;Intel Mobile 4;Intel Mobile 45;Intel Mobile 965"
		.split(";"),
		ua = "ActiveXObject" in da,
		xa = "devicePixelRatio" in da && 1 < da.devicePixelRatio || ua && "matchMedia" in da && da.matchMedia(
			"(min-resolution:144dpi)") && da.matchMedia("(min-resolution:144dpi)").matches,
		ya = ia("windows nt"),
		Aa = -1 !== ca.search(/windows nt [1-5]\./),
		Ba = -1 !== ca.search(/windows nt 5\.[12]/),
		Ca = Aa && !Ba;
	ia("windows nt 10");
	var Da = ia("windows phone"),
		Fa = ia("macintosh"),
		Ga = ia("Mb2345Browser"),
		Ha = ia("ipad;") || ia("ipad "),
		Ia = Ha && xa,
		Ja = ia("ipod touch;"),
		Ma = ia("iphone;") || ia("iphone "),
		Na = Ma || Ha || Ja,
		Oa = Na && -1 !== ca.search(/ os [456]_/);
	Na && ca.search(/ os [4-8]_/);
	Na && ca.search(/ os [78]_/);
	Na && ia("os 8_");
	var Pa = Na && ia("os 10_"),
		Ra = ia("android"),
		Sa = -1 !== ca.search(/android [123]/);
	ia("android 4");
	Ra && -1 === ca.search(/android [1-4]/) || ca.search(/android 4.4/);
	var Ua = Ra ? "android" : Na ? "ios" : ya ? "windows" : Fa ? "mac" : "other",
		Va = ua && !da.XMLHttpRequest,
		Wa = ua && !ga.querySelector,
		Xa = ua && !ga.addEventListener,
		Ya = ua && ia("msie 9"),
		Za = ua && ia("msie 10"),
		$a = ua && ia("rv:11"),
		ab = Xa || Ya,
		bb = ia("edge"),
		cb = ia("qtweb"),
		db = ia("ucbrowser"),
		eb = ia("alipay") || Ra && db,
		fb = ia("miuibrowser"),
		gb = ia("micromessenger"),
		hb = ia("mqqbrowser"),
		ib = ia("baidubrowser"),
		chrome = (ia("chrome") || ia("crios")) && !gb && !ib && !hb && !bb && !fb,
		jb = chrome && ia("chromium"),
		kb = chrome && !jb && 30 < parseInt(ca.split("chrome/")[1]),
		lb = ia("firefox"),
		mb = lb && 27 < parseInt(ca.split("firefox/")[1]),
		nb = (Fa || Na) && ia("safari") && ia("version/"),
		ob = Fa && nb && 7 < parseInt(ca.split("version/")[1]),
		pb = Na && ia("aliapp"),
		qb = Na && (!hb && !db && !gb && !chrome && !lb && !nb || pb && !db),
		rb = Ra || Na || Da || ia("mobile"),
		sb = "ontouchstart" in ga,
		tb = da.navigator && da.navigator.msPointerEnabled && !!da.navigator.msMaxTouchPoints,
		ub = da.navigator && !!da.navigator.maxTouchPoints,
		vb = !sb && (ub || tb),
		wb = sb || vb,
		xb = function() {
			if (!rb) return da.devicePixelRatio || 1;
			var a = document.getElementsByTagName("meta");
			if (window.parent && window.parent !== window) try {
				if (window.parent.location.origin === window.location.origin) a = window.parent.document.getElementsByTagName(
					"meta");
				else return 1
			} catch (b) {
				return 1
			}
			for (var c = a.length - 1; 0 <= c; c -= 1)
				if ("viewport" === a[c].name) {
					var c = a[c].content,
						d; - 1 !== c.indexOf("initial-scale") && (d = parseFloat(c.split("initial-scale=")[1]));
					a = -1 !== c.indexOf("minimum-scale") ? parseFloat(c.split("minimum-scale=")[1]) : 0;
					c = -1 !== c.indexOf("maximum-scale") ? parseFloat(c.split("maximum-scale=")[1]) : Infinity;
					if (d) {
						if (c >= a) return d > c ? c : d < a ? a : d
					} else if (c >= a) return 1 <= a ? 1 : Math.min(c, 1);
					console && console.log && console.log("viewport\u53c2\u6570\u4e0d\u5408\u6cd5");
					return null
				}
		}(),
		yb = xa && (!rb || !!xb && 1 <= xb),
		zb = ua && "transition" in ha.style,
		Ab = !!ga.createElementNS && !!ga.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect,
		Bb = ga.createElement("canvas"),
		Cb = !(!Bb || !Bb.getContext),
		Db = window.URL || window.webkitURL,
		Eb = !ua && !bb && !(db && Ra) && window.Worker && Db && Db.createObjectURL && window.Blob,
		Fb = "",
		qa = "",
		Gb = 0,
		Hb = window.forceWebGL ? {
			alpha: !0,
			antialias: !0,
			depth: !0
		} : {
			alpha: !0,
			antialias: !0,
			depth: !0,
			failIfMajorPerformanceCaveat: !0,
			preserveDrawingBuffer: !0,
			stencil: !0
		},
		Ib = function() {
			if (!window.forceWebGL && (!Cb || !Eb || qb && pb && !db)) return !1;
			for (var a = ["webgl", "experimental-webgl", "moz-webgl"], b = null, c = 0; c < a.length; c += 1) {
				try {
					b = Bb.getContext(a[c], Hb)
				} catch (d) {}
				if (b) {
					if (b.drawingBufferWidth !== Bb.width || b.drawingBufferHeight !== Bb.height) break;
					if (window.forceWebGL) return Fb = a[c], Gb = Infinity, !0;
					if (!b.getShaderPrecisionFormat ||
						!b.getParameter || !b.getExtension) break;
					Gb = b.getParameter(b.MAX_RENDERBUFFER_SIZE);
					var e = b.getParameter(b.MAX_VIEWPORT_DIMS);
					if (!e) break;
					Gb = Math.min(Gb, e[0], e[1]);
					nb && "mac" === Ua && (Gb = Math.min(Gb, 4096));
					e = Math.max(screen.width, screen.height);
					yb && (e *= Math.min(2, window.devicePixelRatio || 1));
					if (e > Gb) break;
					if (23 > b.getShaderPrecisionFormat(35632, 36338).precision || 23 > b.getShaderPrecisionFormat(35633, 36338).precision)
						break;
					qa = b.getExtension("WEBGL_debug_renderer_info") ? b.getParameter(37446) : null;
					if ((b = pa()) &&
						-1 !== sa.indexOf(b)) break;
					Fb = a[c];
					return !0
				}
			}
			return !1
		}(),
		Jb = Ib && (kb || mb || ob) && ("mac" === Ua || "windows" === Ua) && !rb,
		Kb = !Cb || cb || Da || rb && lb || Ya || Oa || Ia || Ja || Sa || ia("gt-n710") || Ca,
		Lb = !Kb && !Jb,
		Mb = Jb ? "vw" : Kb ? "d" : Lb ? "dv" : "v",
		Nb = ia("webkit"),
		Ob = "WebKitCSSMatrix" in da && "m11" in new window.WebKitCSSMatrix,
		Rb = "MozPerspective" in ha.style,
		Sb = "OTransition" in ha.style,
		Tb = zb || Ob || Rb || Sb,
		Ub = void 0 !== config[8] ? config[8] : !0,
		Vb = void 0 !== config[9] ? config[9] : !0,
		Wb = void 0 !== config[10] ? config[10] : !0,
		Xb = void 0 !== config[11] ? config[11] :
		!0,
		Yb = void 0 !== config[12] ? config[12] : null,
		Zb = !Ab && rb && Cb,
		$b = !0;
	try {
		if ("undefined" === typeof da.localStorage) $b = !1;
		else {
			var ac = (new Date).getTime() + "";
			da.localStorage.setItem("_test", ac);
			da.localStorage.getItem("_test") !== ac && ($b = !1);
			da.localStorage.removeItem("_test")
		}
	} catch (bc) {
		$b = !1
	}
	var cc = parseInt(ca.split("chrome/")[1]),
		dc = Ub && Cb;
	config.l = {
		fla: Ha,
		gla: Ma,
		size: Ma ? 100 : Ra ? 200 : 500,
		px: Fa,
		Psa: ya,
		SG: Na,
		qxa: Pa,
		$k: Ra,
		iga: Sa,
		v_: eb,
		Zt: Ua,
		qF: ib,
		Xoa: hb,
		qC: nb,
		M5: gb,
		Wq: ua,
		Uh: Va,
		Xq: Wa,
		I0: Ya,
		H0: Za,
		oe: Xa,
		K0: ab,
		kla: $a,
		fja: bb,
		nla: ua && !$a,
		Wma: Ga,
		fr: $b,
		di: dc && $b && Xb && !rb && chrome,
		sf: Yb,
		geolocation: rb || ua && !Xa || bb,
		dsa: db,
		EI: db && !chrome,
		chrome: chrome,
		YZ: !0,
		PN: lb,
		Y: rb,
		fna: rb && Nb,
		c2: rb && Ob,
		ena: rb && da.opera,
		md: xa,
		NI: xb,
		ha: yb,
		of: wb,
		e2: tb,
		lQ: ub,
		Z2: vb,
		rha: chrome && 57 <= cc,
		sha: !rb && chrome && 64 <= cc,
		K5: Nb,
		lla: zb,
		L5: Ob,
		Oja: Rb,
		Wna: Sb,
		oF: Tb,
		Dn: Ab,
		lk: Cb,
		Mt: Eb,
		py: Wb,
		kf: Jb,
		H5: Fb,
		I5: Hb,
		EO: qa,
		Uma: Gb,
		lta: !1,
		EN: Ub,
		qw: Ub && !Kb,
		LY: Ub ? Mb : "d",
		gZ: Ub ? Ib : !1,
		oI: dc,
		Ap: Ub && Ib,
		wxa: Ub && (!Kb || Ib),
		vm: Vb && !!da.WebSocket && !ib,
		hya: Zb,
		eoa: Cb || Zb ? "c" : "d"
	};
	var ec = config;
	config = void 0;
	var fc = {
		overlay: ["style"],
		"AMap.IndoorMap": ["AMap.CustomLayer", "cvector"],
		"AMap.IndoorMap3D": ["Map3D"],
		"AMap.MarkerList": ["AMap.TplUtils"],
		Map3D: ["vectorlayer", "wgl", "AMap.CustomLayer"],
		"AMap.Heatmap": ["AMap.CustomLayer"],
		"AMap.DistrictLayer": ["MVT"],
		vectorForeign: ["gridmap", "MVT"],
		"AMap.GltfLoader": ["AMap.CustomLayer", "Map3D"]
	};
	window.AMap ? (window.AMap.version = "1554354371599", window.AMap.II = {
		FJ: function(a) {
			a(ec)
		}
	}) : window.AMap = {
		version: "1554354371599",
		II: {
			FJ: function(a) {
				a(ec)
			}
		}
	};
	ec.Si = "1554354371599";
	ec.ht = fc;
	ec.mH = "raster";
	for (var gc = document.head || document.getElementsByTagName("head")[0], hc =
			".vml{behavior:url(#default#VML);display:inline-block;position:absolute}.amap-custom{top:0;left:0;position:absolute}.amap-container img{max-width:none!important;max-height:none!important}.amap-container{touch-action:none;position:relative;overflow:hidden;background:#fcf9f2 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0AgMAAAC2uDcZAAAADFBMVEX////////////////1pQ5zAAAABHRSTlMAgP/AWuZC2AAAAVhJREFUeAFiYGAQYGDEQjAB2rcDC4BiGIqiU7abdKlO2QkeIClyPsDHweMKtOPHIJ1Op6/w7Y4fdqfT6VpndzqdrnV2p9PpWmd3Oj3qWndSoKp+2J1Op7vr7E6n07XO7nQ6XevsTqfTtc7udPo4/f787E6n0911dqfT6VpndzqdrnV2p9PpWmd3Ot27Ce8m6HS6u85dR6fTtU7r6HS61mkdnU7XOrvT6XTvJuxOp9PddXan0+laZ3c6na51dDpd67SOTqd7N+HdBJ1Od9e56+h0utZpHZ1O1zq70+l0rbM7nU73bsLudDrdXWd3Ol3rtI5Op2ud1tHpdK3TOjqd7t2EdxN0Ot1dZ3c6na51dqfT6VpndzqdrnV2p9Pp3k3Q6XR3nbuOTqdrndbR6XSt0zo6na51Wken072bsDudTnfX2Z1Op2ud3el0utbZnU7XOq2j0+t0uncTD1gO4zoT5doZAAAAAElFTkSuQmCC);-ms-touch-action:none}.amap-drags,.amap-layers{width:100%;height:100%;position:absolute;overflow:hidden}.amap-layer img{pointer-events:none}.amap-e,.amap-maps{width:100%;height:100%}.amap-maps,.amap-e,.amap-layers,.amap-tile,.amap-tile-container{position:absolute;left:0;top:0;overflow:hidden}.amap-context{position:absolute;left:0;top:0}.amap-overlays,.amap-markers,.amap-marker{position:absolute;left:0;top:0}.amap-layers{z-index:0}.amap-overlays{z-index:110;cursor:default}.amap-markers{z-index:120}.amap-controls{z-index:150}.amap-copyright{position:absolute;display:block!important;left:77px;height:16px;bottom:0;padding-bottom:3px;font-size:11px;font-family:Arial,sans-serif;z-index:160}.amap-logo{position:absolute;bottom:1px;left:1px;z-index:160;height:20px}.amap-logo img{width:73px!important;height:20px!important;border:0;vertical-align:baseline!important}.amap-icon{position:relative;z-index:1;overflow:hidden}.amap-icon img{position:absolute;z-index:-1}.amap-marker-label{position:absolute;z-index:2;border:1px solid blue;background-color:white;white-space:nowrap;cursor:default;padding:3px;font-size:12px;line-height:14px}.amap-info{position:absolute;left:0;z-index:140;width:320px}.amap-menu{position:absolute;z-index:140;_width:100px}.amap-info-close{position:absolute;right:5px;_right:12px;+right:11px;top:5px;_top:2px;+top:2px;color:#c3c3c3;text-decoration:none;font:bold 16px/14px Tahoma,Verdana,sans-serif;width:14px;height:14px}.amap-info-outer,.amap-menu-outer{box-shadow:0 3px 14px rgba(0,0,100,0.6);background:none repeat scroll 0 0 white;border-radius:2px;padding:1px;text-align:left;border:#c0c0c0 solid 1px}.amap-info-outer:hover,.amap-menu-outer:hover{box-shadow:0 3px 14px rgba(0,0,0,0.75)}.amap-info-content{background:#fff;border:1px solid #ccc;padding:10px 18px 10px 10px;+margin:0 10px;+padding:10px 0;line-height:1.4;overflow:auto}.amap-marker-content{position:relative}.amap-info{_width:320px}.amap-menu{_width:100px}.amap-info-sharp{height:23px;margin:0 auto;overflow:hidden;position:relative;top:-1px;width:30px;background-image:url(../../theme/v1.3/sharp.png);_background-image:url(../../theme/v1.3/sharp.gif)}.amap-menu-outer{margin:0;padding:0;list-style-type:none}ul.amap-menu-outer li{cursor:pointer;height:35px;line-height:35px;word-break:break-all;padding:0 10px;font-size:12px;white-space:nowrap}ul.amap-menu-outer li a{text-decoration:none;font-size:13px;margin:0 5px;color:#000;padding:5px 5px}ul.amap-menu-outer li:hover{background-color:#f3f3ee}.amap-overlay-text-container{display:block;width:auto;word-break:keep-all;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;background:#fff;padding:2px 3px;border:1px solid #ccc;border-radius:3px}.amap-overlay-text-container.amap-overlay-text-empty{display:none}"
			.replace(/url\((['"]?)(?:\.\.\/)+/g, "url($1" +
				ec[2].split(",")[0] + "/"), ic = null, jc = 0, kc = gc.childNodes.length; jc < kc; jc++)
		if (1 === gc.childNodes[jc].nodeType) {
			ic = gc.childNodes[jc];
			break
		} if (hc)
		if (gc) {
			var lc = document.createElement("style");
			lc.setAttribute("type", "text/css");
			lc.setAttribute("class", "AMap.style");
			lc.styleSheet ? lc.styleSheet.cssText = hc : lc.innerHTML = hc;
			ic ? gc.insertBefore(lc, ic) : gc.appendChild(lc)
		} else document.write("<style type='text/css'>" + hc + "</style>");
	var g = g || {
			Ea: {
				re: 0,
				Ip: [],
				Oi: {}
			}
		},
		z = {
			o: {},
			control: {},
			A: {}
		};
	g.ewa = function(a) {
		var b = Function;
		return function() {
			return (new b("return " + a))()
		}
	}();
	g.CLASS_NAME = "AMap";
	g.c = g.BuryPoint = {};
	g.c.add = g.BuryPoint.add = function(a, b, c) {
		a.V0 || a.B || !(a = a.CLASS_NAME) || (a = a.replace("AMap.", ""), g.Jy.Tn(a, b, c))
	};
	var mc = {
		lang: 1,
		baseRender: 1,
		overlayRender: 1,
		viewMode: 1
	};
	g.c.qa = g.BuryPoint.addOptions = function(a, b) {
		if (!a.Yna)
			if (b && (b.innerLayer || b.innerOverlay)) a.V0 = !0;
			else {
				a.Yna = !0;
				var c = a.CLASS_NAME;
				if (c) {
					c = c.replace("AMap.", "");
					g.Jy.Tn(c);
					b = b || {};
					for (var d in b) b.hasOwnProperty(d) && ("Map" === c && d in mc ? g.Jy.Tn(c, d, b[d]) : g.Jy.Tn(c, d))
				}
			}
	};
	g.Z = function() {};
	g.Z.extend = g.Z.extend = function(a) {
		function b() {}

		function c() {
			var a = this.initialize || this.r;
			a && a.apply(this, arguments);
			if (!d && this.bi) {
				a = document.createElement("style");
				a.setAttribute("type", "text/css");
				this.CLASS_NAME && a.setAttribute("class", this.CLASS_NAME);
				this.bi = this.bi.replace(/url\((['"]?)(?:\.\.\/)*/g, "url($1" + g.w.tb + "/");
				a.styleSheet ? a.styleSheet.cssText = this.bi : a.innerHTML = this.bi;
				for (var b = document.head || document.getElementsByTagName("head")[0], c = null, e = 0, f = b.childNodes.length; e <
					f; e++)
					if (1 ===
						b.childNodes[e].nodeType) {
						c = b.childNodes[e];
						break
					} c ? b.insertBefore(a, c) : b.appendChild(a)
			}
			d = !0
		}
		var d = !1;
		b.prototype = this.prototype;
		var e = new b;
		e.constructor = c;
		c.prototype = e;
		c.prototype.ci = c.prototype["super"] = function(a) {
			return a.callee.ka.apply(this, a)
		};
		for (var f in this) this.hasOwnProperty(f) && "prototype" !== f && (c[f] = this[f]);
		a.y4 && (g.extend(c, a.y4), a.y4 = null);
		a.ga && (g.extend.apply(null, [e].concat(a.ga)), a.ga = null);
		a.D && e.D && (a.D = g.extend({}, e.D, a.D));
		var h = e.constructor.Hla,
			k = {};
		if (void 0 !== h)
			for (f in h) h.hasOwnProperty(f) &&
				(k[h[f]] = f);
		for (f in a)
			if (Object.prototype.hasOwnProperty.call(a, f)) {
				var l = f,
					m = f;
				h && k[f] && (m = k[f]);
				"function" === typeof a[l] && "function" === typeof e[m] && (a[l].ka = e[m])
			} g.extend(e, a);
		a.toString && (e.toString = a.toString);
		c.Lc = this.prototype;
		return c
	};
	g.Z.ub = g.Z.include = function(a) {
		g.extend(this.prototype, a)
	};
	g.extend = function(a) {
		var b = Array.prototype.slice.call(arguments, 1),
			c, d, e, f;
		d = 0;
		for (e = b.length; d < e; d += 1)
			if (f = b[d] || {}, Object.assign) Object.assign(a, f);
			else
				for (c in f) Object.prototype.hasOwnProperty.call(f, c) && (a[c] = f[c]);
		return a
	};
	g.Z.$c = function(a) {
		for (var b in a)
			if (a.hasOwnProperty(b)) {
				var c = a[b];
				if ("string" === typeof c) this.prototype[b] && (this.prototype[c] = this.prototype[b]);
				else
					for (var d = 0, e = c.length; d < e; d++) this.prototype[b] && (this.prototype[c[d]] = this.prototype[b])
			}
	};
	g.Jy = {
		Oi: {},
		getKey: function(a, b) {
			a = a || "";
			return void 0 !== b && a ? a + "@" + b : a
		},
		Tn: function(a, b, c) {
			this.Oi[a] || (this.Oi[a] = {});
			b = this.getKey(b, c);
			void 0 == this.Oi[a][b] && (this.Oi[a][b] = 0)
		},
		send: function() {
			var a = [],
				b;
			for (b in this.Oi)
				if (this.Oi.hasOwnProperty(b)) {
					var c = this.Oi[b],
						d = [],
						e;
					for (e in c) c.hasOwnProperty(e) && 0 == c[e] && (d.push(e), c[e] = 1);
					d.length && a.push(b + "~" + d.join(","))
				} a.length && (a = ["type=nfl", "k=" + g.w.key, "m=" + (g.l.Y ? 1 : 0), "pf=" + g.l.Zt, "v=" + g.w.kq,
					"branch=JSAPI", "log=" + a.join("!")
				], a = g.w.nc + "://webapi.amap.com/count?" +
				a.join("&"), new g.bb.qb(a))
		}
	};
	setInterval(function() {
		g.Jy.send()
	}, 1E4);
	g.na = {
		h: function(a, b, c, d, e) {
			if (this.ae(a, b, c || this)) return this;
			var f = this.Se = this.Se || {};
			f[a] = f[a] || [];
			e ? f[a].unshift({
				rb: b,
				ff: c || this,
				vj: d
			}) : f[a].push({
				rb: b,
				ff: c || this,
				vj: d
			});
			"complete" === a && this.Ha && this.q(a);
			return this
		},
		ae: function(a, b, c) {
			var d = this.Se;
			if (b && c) {
				if (d && a in d && d[a])
					for (var e = 0; e < d[a].length; e += 1)
						if (d[a][e].rb === b && d[a][e].ff === c) return !0;
				return !1
			}
			return d && a in d && d[a] && 0 < d[a].length
		},
		I: function(a, b, c) {
			if (!this.ae(a)) return this;
			var d = this.Se;
			if (d && d[a])
				for (var e = 0; e < d[a].length; e +=
					1)
					if (!(d[a][e].rb !== b && "mv" !== b || c && d[a][e].ff !== c)) {
						d[a].splice(e, 1);
						d[a].length || (d[a] = null);
						break
					} return this
		},
		sH: function(a, b) {
			if (!this.ae(a)) return this;
			var c = this.Se;
			if (c && c[a])
				for (var d = 0; d < c[a].length; d += 1)
					if (!b || c[a][d].ff === b) {
						c[a].splice(d, 1);
						c[a].length || (c[a] = null);
						break
					} return this
		},
		q: function(a, b) {
			if (!this.ae(a)) return this;
			var c = {
				type: a
			};
			b || "string" !== typeof b && "number" !== typeof b && "boolean" !== typeof b ? g.a.VG(b) ? c.value = b : c = g.extend(
				c, b) : c.value = b;
			for (var d = [].concat(this.Se[a]), e =
					0; e < d.length; e += 1) d[e].rb && (d[e].rb.call(d[e].ff || this, c), d[e] && d[e].vj && this.Se[a] && this.Se[
				a].splice(e, 1));
			return this
		},
		gj: function(a) {
			a ? this.Se && this.Se[a] && (this.Se[a] = null) : this.Se = null;
			return this
		}
	};
	g.na.on || (g.na.on = g.na.h);
	g.na.off || (g.na.off = g.na.I);
	g.na.emit || (g.na.emit = g.na.q);
	g.He = {
		set: function(a, b, c) {
			var d = this.Lk;
			if (d && d[a]) {
				var d = d[a],
					e = "set" + this.i0(a);
				if (d[e]) {
					var f = !1;
					!0 == d.B ? f = !0 : d.B = !0;
					d[e](b, c);
					f || (d.B = !1);
					c || this.LH(a, b)
				} else d.set(a, b, c)
			} else(this.he = this.he || {})[a] = b, c || this.LH(a, b)
		},
		i0: function() {
			var a = {};
			return function(b) {
				a[b] || (a[b] = b[0].toUpperCase() + b.substr(1));
				return a[b]
			}
		}(),
		get: function(a, b, c) {
			var d, e = this.Lk;
			d = "get" + this.i0(a);
			if (e && e[a]) return c = e[a], c[d] ? (a = !1, !0 == c.B ? a = !0 : c.B = !0, b = c[d](b), a || (c.B = !1), b) :
				c.get(a, b);
			if (!c && this[d]) return a = !1, !0 ==
				this.B ? a = !0 : this.B = !0, b = this[d](b), a || (this.B = !1), b;
			if (this.he && this.he.hasOwnProperty(a)) return this.he[a]
		},
		W: function(a, b, c) {
			this.Lk || (this.Lk = {});
			this.Lk[a] !== b && (b.h(a, function(b) {
				this.LH(a, b)
			}, this), this.Lk[a] = b, c || this.LH(a))
		},
		Ie: function(a, b, c) {
			for (var d = 0; d < a.length; d += 1) this.W(a[d], b, !c)
		},
		Ck: function(a) {
			this.Lk && this.Lk[a] && (this.Lk[a].I(a, "mv", this), this.Lk[a] = void 0)
		},
		Hm: function() {
			if (this.Lk)
				for (var a in this.Lk) this.Lk.hasOwnProperty(a) && this.Ck(a)
		},
		LH: function(a, b) {
			var c = a + "Changed";
			if (this[c]) this[c](b);
			this.q(a, b)
		},
		Axa: function(a, b, c) {
			var d = new(g.Z.extend({
				ga: [g.na, g.He]
			}));
			d.xva = function() {
				for (var b = !0, e = 0; e < a.length; e += 1) d.get(a[e]) || (b = !1);
				b && (d.Hm(), c())
			};
			for (var e = 0; e < a.length; e += 1) d.W(a[e], b)
		},
		eg: function(a, b) {
			var c, d;
			for (c in a) a.hasOwnProperty(c) && (d = a[c], this.set(c, d, b))
		}
	};
	g.w = {
		localStorage: !0,
		nF: 500,
		Fe: !0,
		je: {
			dark: "#202020",
			blue_night: "#090d20",
			test: "#033447",
			mapv: "#000001",
			techblue: "#000b11",
			insight: "#19212a",
			"default": "#fcf9f2"
		},
		gya: "dark light blue darkblue fresh grey midblue".split(" "),
		key: "cc7be50a8cb0c58431a606d5d18778dd",
		nc: "http",
		Qd: [115.423412, 39.442759, 117.514625, 41.060816, 116.405285, 39.904989],
		Kd: "http://restapi.amap.com",
		tb: "http://webapi.amap.com",
		CH: "http://gaode.com",
		Rt: "http://m.amap.com",
		EB: "http://webrd0{1,2,3,4}.is.autonavi.com/appmaptile?lang=[lang]&size=1&scale=1&style=8&x=[x]&y=[y]&z=[z]",
		gH: "http://wprd0{1,2,3,4}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&style=7&x=[x]&y=[y]&z=[z]&scl=1&ltype=3",
		XQ: "http://webst0{1,2,3,4}.is.autonavi.com/appmaptile?style=6&x=[x]&y=[y]&z=[z]",
		YH: "http://webst0{1,2,3,4}.is.autonavi.com/appmaptile?x=[x]&y=[y]&z=[z]&lang=zh_cn&size=1&scale=1&style=8",
		ZH: "http://wprd0{1,2,3,4}.is.autonavi.com/appmaptile?x=[x]&y=[y]&z=[z]&lang=zh_cn&size=1&scl=1&style=8&ltype=11",
		GC: "http://wprd0{1,2,3,4}.is.autonavi.com/appmaptile?lang=[lang]&size=1&style=7&x=[x]&y=[y]&z=[z]",
		LI: "http://vector.amap.com",
		ry: "vdata.amap.com",
		eS: "ws"
	};

	function nc(a) {
		g.Z.ht = a.ht;
		g.l = a.l;
		g.mH = a.mH;
		g.Goa = a[7];
		a.l = null;
		g.w.tb = a[2].split(",")[0];
		g.w.Si = a.Si;
		g.w.DB = a.DB;
		var b = g.w.nc = g.w.tb.split(":")[0];
		"https" === b && (g.w.eS = "wss", g.w.Kd = g.w.Kd.replace("http", "https"), g.w.EB = g.w.EB.replace("http", "https"),
			g.w.gH = g.w.gH.replace("http", "https"), g.w.XQ = g.w.XQ.replace("http", "https"), g.w.YH = g.w.YH.replace("http",
				"https"), g.w.ZH = g.w.ZH.replace("http", "https"), g.w.GC = g.w.GC.replace("http", "https"), g.w.LI = g.w.LI.replace(
				"http", "https"));
		var c = window.location.href;
		0 !== c.indexOf("http") && window.parent && window.parent !== window && (c = window.parent.location.href);
		g.w.hwa = c;
		c = encodeURIComponent(c);
		g.w.mq = c;
		g.w.Yh = g.w.tb + "/theme/v1.3/markers/" + (g.l.md ? "b" : "n");
		var d = document.createElement("style");
		d.type = "text/css";
		g.w.uia = "url(" + b + "://webapi.amap.com/theme/v1.3/openhand.cur),default";
		var e = ".amap-container{cursor:" + g.w.uia + ";}.amap-drag{cursor:url(" + b +
			"://webapi.amap.com/theme/v1.3/closedhand.cur),default;}";
		d.styleSheet ? (b = function() {
				try {
					d.styleSheet.cssText = e
				} catch (a) {}
			},
			d.styleSheet.disabled ? setTimeout(b, 10) : b()) : d.appendChild(document.createTextNode(e));
		(document.head || document.getElementsByTagName("head")[0]).appendChild(d);
		g.w.mode = Number(a[3]);
		g.w.Qd = a[1];
		g.w.key = a[0];
		g.w.kq = a[4];
		g.w.xc = a[5];
		g.w.Tfa = a[6]
	}
	window.AMap && window.AMap.II && window.AMap.II.FJ && window.AMap.II.FJ(nc);
	g.Ml = {
		ft: Math.PI / 180,
		$oa: 180 / Math.PI,
		CN: 6378137
	};
	(function() {
		function a(a) {
			return "undefined" === typeof a ? "" : a
		}
		g.zh = {
			Dka: function(b) {
				b.name = a(b.name);
				var c = [b.y, b.x, b.name];
				if (g.l.Y) {
					var d = [g.w.Rt + "/callAPP?", "src=jsapi_q"];
					d.push("&ios=" + encodeURIComponent("viewMap?sourceApplication=jsapi_q&dev=0&poiname=" + b.name + "&lat=" + b.y +
						"&lon=" + b.x));
					d.push("&android=" + encodeURIComponent("androidamap?action=shorturl&q=" + c.join(",") +
						"&sourceApplication=jsapi_q"));
					d.push("&wp=" + encodeURIComponent("viewMap?sourceApplication=jsapi_q&dev=0&poiname=" + b.name + "&lat=" +
						b.y + "&lon=" + b.x));
					d.push("&mo=" + encodeURIComponent(g.w.Rt + "?q=" + c.join(",") + "&callapp=0&sourceApplication=jsapi_q"));
					return d.join("")
				}
				return g.w.CH + "?q=" + c.join(",") + "&src=jsapi_q"
			},
			W_: function(b) {
				b.name = a(b.name);
				b.address = a(b.address);
				b.x = a(b.x);
				b.y = a(b.y);
				var c = [b.id, b.y, b.x, b.name, b.address];
				if (g.l.Y) {
					var d = [g.w.Rt + "/callAPP?", "src=jsapi_p"];
					d.push("&ios=" + encodeURIComponent("multiPointShow?sourceApplication=jsapi_p&dev=0&q=" + [b.y, b.x, b.name, b
						.address, b.id
					].join() + "&title=" + b.name));
					d.push("&android=" +
						encodeURIComponent("androidamap?action=shorturl&p=" + c.join(",") + "&sourceApplication=jsapi_p"));
					d.push("&wp=" + encodeURIComponent("multiPointShow?sourceApplication=jsapi_p&dev=0&q=" + [b.y, b.x, b.name, b.address,
						b.id
					].join() + "&title=" + b.name));
					return d.join("")
				}
				return g.w.CH + "?p=" + c.join(",") + "&src=jsapi_p"
			},
			U_: function(b) {
				if (g.l.Y) {
					var c = [g.w.Rt + "/callAPP?", "src=jsapi_detail"];
					c.push("&ios=" + encodeURIComponent("viewPOIDetail?sourceApplication=jsapi_detail&poiid=" + b.id));
					b.name = a(b.name);
					b.x = a(b.x);
					b.y =
						a(b.y);
					c.push("&android=" + encodeURIComponent("androidamap?action=openFeature&featureName=PoiDetail&poiid=" + b.id +
						"&poiname=" + b.name + "&x=" + b.x + "&y=" + b.y + "&sourceApplication=jsapi_detail"));
					c.push("&wp=" + encodeURIComponent("viewPOIDetail?sourceApplication=jsapi_detail&poiid=" + b.id));
					c.push("&mo=" + encodeURIComponent(g.w.Rt + "/detail/index/poiid=" + b.id + "&sourceApplication=jsapi_detail"));
					return c.join("")
				}
				return g.w.CH + "/detail/" + b.id + "?src=jsapi_detail"
			},
			xO: function(b) {
				b.sname = a(b.sname);
				"" === b.sname &&
					(b.sname = "\u8d77\u70b9");
				b.dname = a(b.dname);
				"" === b.dname && (b.dname = "\u7ec8\u70b9");
				b.mcount = a(b.mcount);
				b.my = a(b.my);
				b.mx = a(b.mx);
				b.mname = a(b.mname);
				var c = [b.sy, b.sx, b.sname, b.dy, b.dx, b.dname, b.m, b.t, b.mcount, b.my, b.mx, b.mname];
				if (g.l.Y) {
					var d = [g.w.Rt + "/callAPP?", "src=jsapi_r_" + b.t];
					d.push("&ios=" + encodeURIComponent("path?sourceApplication=jsapi_r_" + b.t + "&dev=0&slat=" + b.sy + "&slon=" +
						b.sx + "&sname=" + b.sname + "&dlat=" + b.dy + "&dlon=" + b.dx + "&dname=" + b.dname + "&m=" + b.m + "&t=" +
						b.t + "&vian=0&vialons=&vialats=&vianames="));
					var e = b.t;
					0 === b.t ? e = 2 : 2 === b.t && (e = 4);
					d.push("&android=" + encodeURIComponent("androidamap://route?sourceApplication=jsapi_r_" + b.t + "&slat=" + b.sy +
						"&slon=" + b.sx + "&sname=" + b.sname + "&dlat=" + b.dy + "&dlon=" + b.dx + "&dname=" + b.dname + "&dev=0&" +
						b.m + "&t=" + e));
					d.push("&wp=" + encodeURIComponent("path?sourceApplication=jsapi_r_" + b.t + "&dev=0&slat=" + b.sy + "&slon=" +
						b.sx + "&sname=" + b.sname + "&dlat=" + b.dy + "&dlon=" + b.dx + "&dname=" + b.dname + "&m=" + b.m + "&t=" +
						b.t + "&vian=0&vialons=&vialats=&vianames="));
					d.push("&mo=" + encodeURIComponent(g.w.Rt +
						"/?r=" + c.join(",") + "&callapp=0&sourceApplication=jsapi_r_" + b.t));
					return d.join("")
				}
				return g.w.CH + "?r=" + c.join(",") + "src=jsapi_r_" + b.t
			},
			Gr: function(a) {
				g.l.Y ? window.location.href = a : window.open(a)
			}
		}
	})();
	"function" !== typeof Object.keys && (Object.keys = function(a) {
		var b = [],
			c;
		for (c in a) a.hasOwnProperty(c) && b.push(c);
		return b
	});
	g.a = {
		CLASS_NAME: "AMap.Util",
		pI: [],
		wa: 268435456,
		Nn: [215440491, 106744817],
		C5: function() {
			var a = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
			return function(b, c) {
				var d = [],
					e;
				c = c || a.length;
				if (b)
					for (e = 0; e < b; e++) d[e] = a[0 | Math.random() * c];
				else {
					var f;
					d[8] = d[13] = d[18] = d[23] = "-";
					d[14] = "4";
					for (e = 0; 36 > e; e++) d[e] || (f = 0 | 16 * Math.random(), d[e] = a[19 === e ? f & 3 | 8 : f])
				}
				return d.join("")
			}
		}(),
		dB: {
			start: function(a) {
				a.startTime = new Date;
				a.b5 = [];
				var b = (new Date).getTime();
				a.id = requestAnimationFrame(function d() {
					var e =
						(new Date).getTime();
					a.b5.push(e - b);
					b = e;
					a.id = requestAnimationFrame(d)
				})
			},
			cancel: function(a) {
				a.id && cancelAnimationFrame(a.id)
			},
			stop: function(a) {
				a.eia = new Date - a.startTime;
				this.cancel(a);
				a.dB = Math.round(1E3 / (a.eia / (a.b5.length + 1)))
			}
		},
		f0: function(a, b, c) {
			var d = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : !1;
			if (a === b) return b;
			switch (3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : "linear") {
				case "ease":
					c = g.Tu.YF(0.25, 0.1, 0.25, 1)(c);
					break;
				case "ease-in":
					c = g.Tu.YF(0.42, 0, 1, 1)(c);
					break;
				case "ease-out":
					c =
						g.Tu.YF(0, 0, 0.58, 1)(c);
					break;
				case "ease-in-out":
					c = g.Tu.YF(0.42, 0, 0.58, 1)(c)
			}
			var e = a + (b - a) * c;
			d && (e >>= 0);
			return e
		},
		createObjectURL: function(a) {
			var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "text/javascript; charset=utf-8",
				c = null;
			try {
				c = (window.URL || window.webkitURL).createObjectURL(new Blob([a], {
					type: b
				}))
			} catch (d) {
				c = null
			}
			return c
		},
		revokeObjectURL: function(a) {
			(window.URL || window.webkitURL).revokeObjectURL(a)
		},
		jva: function(a) {
			for (var b = {}, c = 0, d = a.length; c < d; c++) b[a[c]] = c;
			return b
		},
		hB: function(a) {
			var b = {};
			if (g.a.qj(a, "object"))
				for (var c in a) a.hasOwnProperty(c) && (b[a[c]] = c);
			return b
		},
		dg: function(a, b) {
			for (var c = 0, d = b.length; c < d; c += 1) a.push(b[c])
		},
		create: "function" === typeof Object.create ? Object.create : function(a, b) {
			function c() {}
			c.prototype = a;
			var d = new c,
				e;
			for (e in b) b.hasOwnProperty(e) && (d[e] = b[e]);
			return d
		},
		jb: function(a) {
			if ("object" === typeof a && null !== a) {
				if (a.m2 || this.qj(a, "Float32Array") || this.qj(a, "Uint16Array")) return a;
				var b = this.isArray(a) ? [] : {},
					c;
				for (c in a) a.hasOwnProperty(c) && (b[c] = g.a.jb(a[c]));
				return b
			}
			return a
		},
		e1: function(a) {
			return (a | 0) === a
		},
		Aqa: "function" === typeof Object.setPrototypeOf ? Object.setPrototypeOf : function(a, b) {
			for (var c in b) a[c] = b[c]
		},
		Vh: function(a) {
			return "function" === typeof a
		},
		nga: function(a) {
			var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "webgl";
			if (!a) return a;
			for (var c = [], d = 0, e = a.length; d < e; d += 2) {
				var f = parseInt(a.substr(d, 2), 16);
				if ("webgl" === b || "rgba" === b && 0 === d) f = this.Wc(f / 255, 3);
				c.push(f)
			}
			c.push(c.shift());
			return c
		},
		mr: function() {},
		keys: "function" === typeof Object.keys ?
			Object.keys : function(a) {
				var b = [],
					c;
				for (c in a) a.hasOwnProperty(c) && b.push(c);
				return b
			},
		map: function(a, b) {
			var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null,
				d = [];
			if (a && a.length) g.a.Mb(a, function() {
				for (var e = arguments.length, f = Array(e), h = 0; h < e; h++) f[h] = arguments[h];
				d[f[1]] = b.apply(c || a, f)
			});
			else return a;
			return d
		},
		forEach: function(a, b) {
			if (a && a.length) {
				var c = a.length;
				if (0 < c && (b(a[0], 0), 1 < c)) {
					b(a[1], 1);
					for (var d = 2; d < c; d++) b(a[d], d)
				}
			}
		},
		Mb: function(a, b) {
			var c = 2 < arguments.length && void 0 !==
				arguments[2] ? arguments[2] : null;
			if (a && a.length)
				for (var d = 0, e = a.length; d < e && !1 !== b.call(c, a[d], d, a); d++);
		},
		find: function(a, b) {
			for (var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null, d = 0, e = a.length; d < e; d++)
				if ("function" === typeof b) {
					if (b.call(c, a[d], d, a)) return a[d]
				} else if (a[d] === b) return a[d];
			return null
		},
		VG: function(a) {
			return "object" === typeof HTMLElement ? a instanceof HTMLElement : a && "object" === typeof a && 1 === a.nodeType &&
				"string" === typeof a.nodeName
		},
		Eu: function(a, b) {
			var c = "ASDFGHJKLQWERTYUIO!sdfghjkleiu3~yr5-P&mq9`%zCN*b=8@^xpVM",
				d, e;
			"v5" < (b || "v5") ? (d = c.length, e = 512) : (d = 27, c = c.substr(0, 27), e = 333);
			var f, h, k, l, m;
			h = [];
			k = NaN;
			l = 0;
			for (m = a.length; l < m; l++) f = a[l], f = c.indexOf(f), isNaN(k) ? k = f * d : (h.push(k + f - e), k = NaN);
			return h
		},
		iqa: function(a, b) {
			for (var c = 1, c = 512 < b.length ? Math.round(Math.pow(b.length, 0.5)) : b.length, d = Math.ceil(b.length / c),
					e = 0; e < d; e += 1) {
				var f = c * e,
					h = f + c;
				h > b.length && (h = b.length);
				for (; f < h; f += 1) a(b[f])
			}
		},
		Fva: function(a) {
			if (/^rgba\(/.test(a)) return this.iu(a);
			var b = a = this.EF(a);
			"#" === a[0] && (a = a.substring(1), 3 === a.length && (a =
				a.replace(/./g, function(a) {
					return a + a
				})), b = this.nq(8 === a.length ? a : "ff" + a));
			return this.iu(b)
		},
		EF: function(a) {
			var b = {
				aliceblue: "#f0f8ff",
				antiquewhite: "#faebd7",
				aqua: "#00ffff",
				aquamarine: "#7fffd4",
				azure: "#f0ffff",
				beige: "#f5f5dc",
				bisque: "#ffe4c4",
				black: "#000000",
				blanchedalmond: "#ffebcd",
				blue: "#0000ff",
				blueviolet: "#8a2be2",
				brown: "#a52a2a",
				burlywood: "#deb887",
				cadetblue: "#5f9ea0",
				chartreuse: "#7fff00",
				chocolate: "#d2691e",
				coral: "#ff7f50",
				cornflowerblue: "#6495ed",
				cornsilk: "#fff8dc",
				crimson: "#dc143c",
				cyan: "#00ffff",
				darkblue: "#00008b",
				darkcyan: "#008b8b",
				darkgoldenrod: "#b8860b",
				darkgray: "#a9a9a9",
				darkgreen: "#006400",
				darkkhaki: "#bdb76b",
				darkmagenta: "#8b008b",
				darkolivegreen: "#556b2f",
				darkorange: "#ff8c00",
				darkorchid: "#9932cc",
				darkred: "#8b0000",
				darksalmon: "#e9967a",
				darkseagreen: "#8fbc8f",
				darkslateblue: "#483d8b",
				darkslategray: "#2f4f4f",
				darkturquoise: "#00ced1",
				darkviolet: "#9400d3",
				deeppink: "#ff1493",
				deepskyblue: "#00bfff",
				dimgray: "#696969",
				dodgerblue: "#1e90ff",
				firebrick: "#b22222",
				floralwhite: "#fffaf0",
				forestgreen: "#228b22",
				fuchsia: "#ff00ff",
				gainsboro: "#dcdcdc",
				ghostwhite: "#f8f8ff",
				gold: "#ffd700",
				goldenrod: "#daa520",
				gray: "#808080",
				green: "#008000",
				greenyellow: "#adff2f",
				honeydew: "#f0fff0",
				hotpink: "#ff69b4",
				indianred: "#cd5c5c",
				indigo: "#4b0082",
				ivory: "#fffff0",
				khaki: "#f0e68c",
				lavender: "#e6e6fa",
				lavenderblush: "#fff0f5",
				lawngreen: "#7cfc00",
				lemonchiffon: "#fffacd",
				lightblue: "#add8e6",
				lightcoral: "#f08080",
				lightcyan: "#e0ffff",
				lightgoldenrodyellow: "#fafad2",
				lightgrey: "#d3d3d3",
				lightgreen: "#90ee90",
				lightpink: "#ffb6c1",
				lightsalmon: "#ffa07a",
				lightseagreen: "#20b2aa",
				lightskyblue: "#87cefa",
				lightslategray: "#778899",
				lightsteelblue: "#b0c4de",
				lightyellow: "#ffffe0",
				lime: "#00ff00",
				limegreen: "#32cd32",
				linen: "#faf0e6",
				magenta: "#ff00ff",
				maroon: "#800000",
				mediumaquamarine: "#66cdaa",
				mediumblue: "#0000cd",
				mediumorchid: "#ba55d3",
				mediumpurple: "#9370d8",
				mediumseagreen: "#3cb371",
				mediumslateblue: "#7b68ee",
				mediumspringgreen: "#00fa9a",
				mediumturquoise: "#48d1cc",
				mediumvioletred: "#c71585",
				midnightblue: "#191970",
				mintcream: "#f5fffa",
				mistyrose: "#ffe4e1",
				moccasin: "#ffe4b5",
				navajowhite: "#ffdead",
				navy: "#000080",
				oldlace: "#fdf5e6",
				olive: "#808000",
				olivedrab: "#6b8e23",
				orange: "#ffa500",
				orangered: "#ff4500",
				orchid: "#da70d6",
				palegoldenrod: "#eee8aa",
				palegreen: "#98fb98",
				paleturquoise: "#afeeee",
				palevioletred: "#d87093",
				papayawhip: "#ffefd5",
				peachpuff: "#ffdab9",
				peru: "#cd853f",
				pink: "#ffc0cb",
				plum: "#dda0dd",
				powderblue: "#b0e0e6",
				purple: "#800080",
				rebeccapurple: "#663399",
				red: "#ff0000",
				rosybrown: "#bc8f8f",
				royalblue: "#4169e1",
				saddlebrown: "#8b4513",
				salmon: "#fa8072",
				sandybrown: "#f4a460",
				seagreen: "#2e8b57",
				seashell: "#fff5ee",
				sienna: "#a0522d",
				silver: "#c0c0c0",
				skyblue: "#87ceeb",
				slateblue: "#6a5acd",
				slategray: "#708090",
				snow: "#fffafa",
				springgreen: "#00ff7f",
				steelblue: "#4682b4",
				tan: "#d2b48c",
				teal: "#008080",
				thistle: "#d8bfd8",
				tomato: "#ff6347",
				turquoise: "#40e0d0",
				violet: "#ee82ee",
				wheat: "#f5deb3",
				white: "#ffffff",
				whitesmoke: "#f5f5f5",
				yellow: "#ffff00",
				yellowgreen: "#9acd32"
			};
			return "string" === typeof a ? b[a.toLowerCase()] ? b[a.toLowerCase()] : a : a
		},
		$F: function(a, b, c) {
			var d, e;
			d = Math.floor(c / 2);
			e = c - d;
			d = (1 << d) - 1 << e;
			e = (1 <<
				e) - 1;
			return [c, a & d | b & e, b & d | a & e]
		},
		aG: function(a) {
			return a ? encodeURIComponent(a) : ""
		},
		wd: function(a, b, c, d) {
			c = a[b].i[c];
			if ("undefined" === typeof c) return null;
			a = a[b].s;
			if ("number" === typeof c) return a[c];
			for (;
				"undefined" === typeof c[d.toString()] && !(d -= 1, 3 > d););
			d = c[d.toString()];
			return "number" === typeof d ? a[d] : null
		},
		iu: function(a) {
			a = a.split(",");
			a[0] = parseFloat(a[0].split("rgba(")[1]) / 255;
			a[1] = parseFloat(a[1]) / 255;
			a[2] = parseFloat(a[2]) / 255;
			a[3] = parseFloat(a[3]);
			return a
		},
		Wpa: function(a) {
			a = a.split(",");
			a[0] =
				parseFloat(a[0].split("rgb(")[1]) / 255;
			a[1] = parseFloat(a[1]) / 255;
			a[2] = parseFloat(a[2]) / 255;
			return a
		},
		SQ: function(a) {
			return "rgba(" + 255 * a[0] + "," + 255 * a[1] + "," + 255 * a[2] + "," + a[3] + ")"
		},
		Lha: function(a) {
			return this.SQ(this.Co(a))
		},
		Co: function(a) {
			if (a instanceof Array) return 3 == a.length && a.push(1), a;
			a = this.EF(a);
			if (0 == a.indexOf("#")) {
				if (7 == a.length) return this.hu(a.substr(1));
				if (9 == a.length) return a = a.substr(1), this.ck(a.substr(6) + a.substr(0, 6))
			} else {
				if (0 == a.indexOf("rgb(")) return a = this.Wpa(a), a.push(1), a;
				if (0 == a.indexOf("rgba(")) return this.iu(a)
			}
		},
		K3: function(a) {
			return g.a.nq("ff" + a)
		},
		nq: function(a) {
			for (var b = [], c = 0, d = a.length; c < d; c += 2) b.push(parseInt(a.substr(c, 2), 16));
			b.push((b.shift() / 255).toFixed(2));
			return "rgba(" + b.join(",") + ")"
		},
		hu: function(a) {
			return g.a.ck("ff" + a)
		},
		ck: function(a) {
			for (var b = [], c = 0, d = a.length; c < d; c += 2) b.push(parseInt(a.substr(c, 2), 16) / 255);
			b.push(b.shift());
			return b
		},
		bp: function(a) {
			for (var b in a)
				if (a.hasOwnProperty(b)) return !1;
			return !0
		},
		Lo: function(a, b) {
			0 <= b && a.splice(b, 1);
			return a
		},
		Bw: function(a, b) {
			var c = g.a.indexOf(a, b);
			return g.a.Lo(a, c)
		},
		filter: function(a, b, c) {
			var d = [];
			g.a.Mb(a, function(a, f) {
				b.call(c, a, f) && d.push(a)
			});
			return d
		},
		indexOf: function(a, b) {
			if (!a || !a.length) return -1;
			if (a.indexOf) return a.indexOf(b);
			for (var c = 0; c < a.length; c += 1)
				if (a[c] === b) return c;
			return -1
		},
		$A: function(a, b) {
			return a.endsWith ? a.endsWith(b) : a.length < b.length ? !1 : a.substr(a.length - b.length) == b ? !0 : !1
		},
		bind: function() {
			var a = !1;
			Function.prototype.bind && (a = !0);
			return function(b, c) {
				var d = 2 < arguments.length ?
					Array.prototype.slice.call(arguments, 2) : null;
				return a ? d ? (d.unshift(c), b.bind.apply(b, d)) : b.bind(c) : function() {
					return b.apply(c, d || arguments)
				}
			}
		}(),
		Ib: function(a, b) {
			b = b || {};
			a.D = g.extend({}, a.D, b);
			return a.D
		},
		l_: function() {
			return !1
		},
		join: function(a, b) {
			if (a.join) return a.join(b);
			var c = [],
				d;
			for (d in a) a.hasOwnProperty(d) && c.push(d + "=" + (a[d] || ""));
			return c.join(b)
		},
		L_: function(a, b) {
			return (a || "") + Math.round(Math.random() * Math.pow(10, b || 6))
		},
		Bb: function() {
			var a = 0;
			return function(b) {
				b._amap_id || (a += 1, b._amap_id =
					a);
				return b._amap_id
			}
		}(),
		jja: "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",
		Ke: Date.now ? function() {
			return Date.now()
		} : function() {
			return (new Date).getTime()
		},
		ZG: function(a, b, c, d) {
			var e;
			if (d) {
				var f = 0,
					h, k = this.Ke;
				e = function() {
					h = k();
					if (h - f < b) return !1;
					f = h;
					a.apply(c, arguments)
				}
			} else {
				var l, m, n;
				n = function() {
					l = !1;
					m && (e.apply(c, m), m = !1)
				};
				e = function() {
					l ? m = arguments : (l = !0, a.apply(c, arguments), setTimeout(n, b))
				}
			}
			return e
		},
		Wc: function(a, b) {
			return a === a << 0 ? a : +parseFloat(a).toFixed(b || 0)
		},
		isArray: Array.isArray ?
			Array.isArray : function(a) {
				return this.qj(a, "array")
			},
		qj: function(a, b) {
			return Object.prototype.toString.call(a).split(" ")[1].slice(0, -1).toLowerCase() === b.toLowerCase()
		},
		ga: "function" === typeof Array.prototype.ga ? function(a, b) {
			return a.ga(b)
		} : function(a, b) {
			return -1 !== this.indexOf(a, b)
		},
		C4: function(a) {
			var b = 0;
			if (0 === a.length) return b;
			for (var c, d = 0, e = a.length; d < e; d += 1) c = a.charCodeAt(d), b = (b << 5) - b + c, b &= b;
			return b
		},
		Qva: function(a, b) {
			b = b ? Math.ceil(parseInt(b.substr(6)) / 24) : 1;
			for (var c = "", d = 0, e = a.length; d <
				e; d++) c += String.fromCharCode((a.charCodeAt(d) - 256 - b + 65535) % 65535);
			return c
		},
		xia: function(a, b) {
			var c = (a + "").slice(-2),
				d = (b + "").slice(-2);
			a = a.slice(0, -2);
			b = b.slice(0, -2);
			var e = parseInt((d + c).slice(1)),
				f = Math.ceil(e / 250) % 2 ? 1 : -1,
				d = parseInt("1" + d) / 3E3;
			a -= parseInt("1" + c) / 3E3 * f;
			b -= d * (1 < e / 500 ? 1 : -1);
			return new g.U(parseFloat(a).toFixed(5), parseFloat(b).toFixed(5))
		},
		p2: function(a) {
			return "undefined" !== typeof JSON && JSON.stringify ? g.a.C4(JSON.stringify(a)) : null
		},
		Cza: function(a, b) {
			if (b || !a.hasOwnProperty("_amap_hash")) {
				var c =
					g.a.p2(a);
				c && (a._amap_hash = c)
			}
			return a._amap_hash
		},
		iepngFix: function(a) {
			function b() {
				for (var a; c.length;) a = c.shift(), window.DD_belatedPNG.fixPng(a);
				d.mP = !0
			}
			this.Y2 || (this.Y2 = [], this.mP = !1);
			var c = this.Y2,
				d = this;
			if ("img" === a.tagName.toLowerCase()) c.push(a);
			else {
				a = a.getElementsByTagName("*");
				for (var e = 0; e < a.length; e += 1) c.push(a[e])
			}
			window.DD_belatedPNG && this.mP ? setTimeout(function() {
				b()
			}, 100) : this.mP || g.ob.load("AMap.FixPng", b)
		},
		Fa: function(a) {
			if (g.a.isArray(a))
				if (g.a.isArray(a[0]))
					for (var b = 0; b < a.length; b +=
						1) a[b] = g.a.Fa(a[b]);
				else if (b = typeof a[0], "string" === b || "number" === b) return new g.U(a[0], a[1]);
			return a
		},
		np: function(a) {
			return g.a.isArray(a) ? new g.gd(a[0], a[1]) : a
		}
	};
	(function() {
		function a(a) {
			window.clearTimeout(a)
		}

		function b(a) {
			var b, c, d = ["webkit", "moz", "o", "ms"];
			for (b = 0; b < d.length && !c; b += 1) c = window[d[b] + a];
			return c
		}

		function c(a) {
			var b = +new Date,
				c = Math.max(0, (g.l.$k ? 50 : 20) - (b - d));
			d = b + c;
			return window.setTimeout(a, c)
		}
		var d = 0,
			e = window.requestAnimationFrame || b("RequestAnimationFrame") || c,
			f = window.cancelAnimationFrame || b("CancelAnimationFrame") || b("CancelRequestAnimationFrame") || a;
		g.a.Fc = function(a, b, c, d) {
			if (c) b ? g.a.bind(a, b).call(b, d) : a();
			else return e(function() {
				b ?
					g.a.bind(a, b).call(b, d) : a()
			})
		};
		g.a.Oh = function(a) {
			a && f.call(window, a)
		}
	})();
	g.a.UH = window.requestIdleCallback ? window.requestIdleCallback.bind(window) : function(a) {
		var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
			c = g.a.Ke();
		return setTimeout(function() {
			a({
				didTimeout: !1,
				timeRemaining: function() {
					return Math.max(0, 70 - (g.a.Ke() - c))
				}
			})
		}, b.timeout || 0)
	};
	g.a.VM = window.cancelIdleCallback ? window.cancelIdleCallback.bind(window) : function(a) {
		clearTimeout(a)
	};
	(function(a) {
		var b = 1,
			c = {};
		a.a.yqa = function(a, b) {
			if (c[a]) {
				var f = c[a];
				f.xC = 1;
				f.result = b;
				if (f.im) {
					for (var h = f.im, k = 0, l = h.length; k < l; k++) h[k].call(null, b);
					f.im = null
				}
			}
		};
		a.a.Aha = function(a) {
			c[a] = null
		};
		a.a.Gsa = function(a, b) {
			if (c[a]) {
				var f = c[a];
				0 < f.xC ? b(null, f.result) : (f.im || (f.im = []), f.im.push(b))
			} else b(null, a)
		};
		a.a.qO = function(d, e) {
			var f = navigator.geolocation;
			if (!a.l.SG || "https:" === document.location.protocol) return d(null, f);
			var h;
			e && e.Hsa && (h = "f" + b++, c[h] = {
				xC: 0
			});
			var k = null,
				l = !1;
			e && e.timeout && (k = setTimeout(function() {
				k =
					void 0;
				d({
					code: 3,
					info: "TIME_OUT",
					message: "Get geolocation time out."
				});
				l = !0
			}, e.timeout));
			f.getCurrentPosition(function() {
				l || (clearTimeout(k), k = void 0, d(null, f))
			}, function(b) {
				l || (clearTimeout(k), k = void 0, 2 === b.code && 0 < b.message.indexOf("permission") ? a.ob.load(
					"AMap.GeoRemoteLoc",
					function() {
						d(null, a.u6, h)
					}) : d(null, f))
			}, {
				timeout: 1E3
			});
			return h
		}
	})(g);
	(function(a) {
		var b = a.Z.extend({
			ga: [a.na],
			r: function() {}
		});
		a.Wi = new b
	})(g);
	(function(a) {
		var b = a.Z.extend({
			ga: [a.na],
			r: function() {
				this.Daa()
			},
			Daa: function() {
				a.Wi && a.Wi.h("vecTileParsed.buildings", this.iaa, this)
			},
			d1: function(a) {
				return a.map.zV
			},
			rka: function(a) {
				return this.d1(a) ? a.map.QK : null
			},
			vqa: function(a, b) {
				if (b) {
					var e = b.map;
					e && (e.QK ? e.QK.toString() : "") !== (a ? a.toString() : "") && (e.QK = a || [], e.set("display", 0))
				}
			},
			c4: function(a, b) {
				if (b) {
					var e = b.map;
					e && e.zV !== a && (e.zV = a, e.set("display", 0))
				}
			},
			vua: function() {},
			vV: function(a, b) {
				if (a)
					for (var e = 0, f = a.length; e < f; e++) a[e] && 0 > b.indexOf(a[e]) &&
						b.push(a[e])
			},
			p_: function(b) {
				if (!b) return null;
				b = b.map.ta;
				for (var d = 0, e = b.length; d < e; d++)
					if (a.o.Eh && b[d] instanceof a.o.Eh && b[d].ma && b[d].ma.length && (-1 !== b[d].ma.indexOf("building") || -
							1 !== b[d].ma.indexOf("poilabel")) && b[d].Ha) {
						var f = b[d].X.get("tiles", null, !0);
						if (f && f.length) return b[d]
					} return null
			},
			Tja: function(a) {
				if (a = this.p_(a)) {
					if (a = a.X.get("tiles", null, !0)) a = a[0];
					else return null;
					if (!a || !a.length) return null;
					for (var b = [], e = 0, f = a.length; e < f; e++) {
						var h = a[e];
						h.Xd && h.Xd.We && this.vV(h.Xd.We, b)
					}
					return b
				}
			},
			iaa: function(a) {
				if (a.Vn && a.Vn.Xd) {
					var b = a.Vn.Xd.We;
					if (b) {
						var e = [];
						this.vV(b, e);
						this.q("vecTileParsed.builds.found", {
							dZ: e,
							Vn: a.Vn
						})
					}
				}
			}
		});
		a.Xi = new b
	})(g);
	(function(a) {
		function b() {
			return {
				checkup: function() {
					var a = Array.prototype.slice.call(arguments, 0);
					a.pop()(null, a)
				}
			}
		}

		function c(a) {
			return {
				injectCode: function(b, c) {
					var d = null,
						e = null;
					try {
						d = (new Function("self", b))(a)
					} catch (f) {
						console.error("error", e), e = f.toString()
					}
					c(e, d)
				}
			}
		}

		function d(a) {
			function b(c, d) {
				function e(a, b, c) {
					a = {
						ey: Date.now(),
						Sx: h,
						error: a,
						result: b,
						jp: !1,
						hk: !1
					};
					if (c)
						for (var f in c) c.hasOwnProperty(f) && (a[f] = c[f]);
					d(a)
				}
				var f = c.QO,
					h = c.Sx,
					l = c.fN,
					m = c.AA,
					n = c.oga || [],
					p = a._wkHandlers[f];
				p ? p[l] ? m ?
					p[l].apply(p, n.concat(e)) : e(null, p[l].apply(p, n)) : e("Unknown cmd: " + l) : e("Can not find handler for: " +
						f)
			}
			var c = [],
				d = null,
				e = null;
			for (d in this._wkHandlers) - 1 !== d.indexOf("_def_") && (e = this._wkHandlers.cya = d);
			"function" === typeof this._wkHandlers[e].r && this._wkHandlers[e].r.call(this._wkHandlers[e]);
			a.Ps = function(a) {
				c.push.apply(c, a)
			};
			a.addEventListener("message", function(d) {
				function e(b) {
					if (t) {
						t.push(b);
						var d = !!b.jp;
						d || n++;
						b = n >= h || b.hk;
						if (d || b) {
							d = 1 < t.length ? {
								Rpa: t
							} : t[0];
							d.ey = Date.now();
							d.kza = p;
							if (c.length) {
								try {
									a.postMessage(d,
										c)
								} catch (f) {
									a.postMessage(d), console.error(f)
								}
								c.length = 0
							} else a.postMessage(d);
							t.length = 0;
							b && (e = t = null)
						}
					} else console.error("Seemed callback already sent!!", b, b.result.vc)
				}
				var f = d.data;
				d = f.Opa || [f];
				for (var h = d.length, n = 0, p = Date.now() - f.ey, t = [], f = 0; f < h; f++) b(d[f], e)
			}, !1)
		}

		function e(d, h) {
			this.D = a.extend({
				batchSend: !0,
				lazy: !1,
				libPolyfills: null
			}, h);
			this.wo = [];
			this.fz = this.D.clientId || "w" + f++;
			this.D.onReady && this.TP(this.D.onReady);
			this.QD = this.t$();
			if ("function" === typeof d) {
				var m = {};
				m[this.QD] = d;
				d = m
			}
			d[e.CO] =
				c;
			d[this.HU()] = b;
			this.dE = d;
			this.Xz(null);
			this.D.lazy || this.ow();
			a.DO || !1 === this.D.hostWorker || (a.DO = this);
			this.Zm && this.Zm.r && this.Zm.r.call(this.Zm)
		}
		var f = 1,
			h = 1;
		a.extend(e, {
			CO: "_g_",
			Kqa: function(a) {
				if (!a.W7) {
					var b = [];
					a.addEventListener("message", function(a) {
						a = a.data;
						a = a.Rpa || [a];
						for (var c = 0, d = a.length; c < d; c++) {
							var e = a[c],
								f;
							a: {
								f = e.Sx;
								for (var k = !e.hk, h = 0, v = b.length; h < v; h++) {
									var x = b[h];
									if (f === x.Sx) {
										k || b.splice(h, 1);
										f = x;
										break a
									}
								}
								f = void 0
							}
							f && f.AA(e.error, e.result, !0)
						}
					}, !1);
					a.K7 = b;
					a.W7 = !0
				}
			}
		});
		a.extend(e.prototype, {
			t$: function() {
				return "_def_" + this.fz
			},
			HU: function() {
				return "_cln_" + this.fz
			},
			xea: function() {
				var a = Array.prototype.slice.call(arguments, 0);
				this.qX = a;
				if (this.Tv) {
					for (var b = 0, c = this.Tv.length; b < c; b++) this.Tv[b].apply(null, a);
					this.Tv.length = 0
				}
			},
			Ps: function(a) {
				this.pea && this.wo.push.apply(this.wo, a)
			},
			TP: function(a) {
				this.qX ? a.apply(null, this.qX) : (this.Tv || (this.Tv = []), this.Tv.push(a))
			},
			ow: function(b) {
				var c = this;
				if (!c.IT) {
					c.IT = !0;
					var d = function(d, e) {
						d && a.l.Mt && console.warn(d);
						c.xea.call(c, d, e);
						b && b(d, e)
					};
					a.l.Mt ? this.nea(function(a, b) {
						b ? this.Jaa(b, function(a, c) {
							a ? d(a) : (this.Xz(c), this.wM = c, this.wo.length = 0, this.Zm = null, d(null, {
								Aga: b,
								Rsa: c
							}))
						}) : d("Worker start failed!")
					}) : d("Worker not supported!")
				}
			},
			Ze: function(b, c) {
				var d = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : a.a.mr,
					f = this;
				b = b || f.QD;
				var h = {};
				if (a.a.qj(c, "object")) {
					var q = "return {",
						r;
					for (r in c)
						if (c.hasOwnProperty(r)) var s = c[r],
							q = "function" === typeof s ? q + ("\n\t" + r + ": " + s.toString() + ",") : "object" === typeof s ? q + (
								"\n\t" + r + ": " + JSON.stringify(s) +
								",") : q + ("\n\t" + r + ': "' + s + '",');
					c = new Function(q + "\n}")
				}
				f.nT(b, c, h);
				f.Xz(null, h);
				f.TP(function(a) {
					a ? d(a) : f.wM ? (a = f.MU(c, f.DK(f.fz, b), !0), f.wM.sendMessage(e.CO + ":injectCode", a, function(a, b) {
						a || f.Xz(f.wM, h);
						d(a, b)
					})) : d("Worker msger missing!!")
				})
			},
			DK: function(a, b) {
				if (!a || !b) throw Error("clientId or ns missing!!");
				return a + "_" + b
			},
			N$: function(a, b, c) {
				function d() {
					var b = Array.prototype.slice.call(arguments, 0);
					c.sendMessage.apply(c, [a].concat(b))
				}
				var e = this;
				if (!c) return function() {
					b.apply(e.Zm, arguments);
					e.IT || "untilCall" === e.D.lazy && e.ow()
				};
				d._proxy2Worker = !0;
				return d
			},
			K8: function(a) {
				var b = {},
					c;
				for (c in a) a.hasOwnProperty(c) && this.nT(c, a[c], b);
				return b
			},
			nT: function(a, b, c) {
				b = b.call(null, !1);
				for (var d in b) b.hasOwnProperty(d) && (c[a + ":" + d] = b[d], a === this.QD && (c[d] = b[d]))
			},
			Xz: function(a, b) {
				if (!b) this.Zm || (this.Zm = this.K8(this.dE)), b = this.Zm;
				else if (this.Zm)
					for (var c in b) b.hasOwnProperty(c) && (this.Zm[c] = b[c]);
				for (c in b)
					if (b.hasOwnProperty(c)) {
						var d = b[c];
						"function" === typeof d && (this[c] = this.N$(c, d, a))
					} this.pea = !!a
			},
			MU: function(a, b) {
				var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : !1,
					d = a.toString(),
					e, d = d.replace(/^function([^\(]*)\(/, function() {
						e = "_prep_h" + h++;
						return "function " + e + "("
					});
				return e ? "\n\t\t\t\t" + d + "\n\t\t\t\tif (self._wkHandlers['" + b + "'] && " + !c +
					") {\n\t\t\t\t\tthrow new Error('" + b + " already exists!')\n\t\t\t\t} else {\n\t\t\t\t\tif (" + c +
					" && self._wkHandlers['" + b + "']) {\n\t\t\t\t\t\tvar handlerFunObj = " + e +
					".call(null, self) || {}\n\n\t\t\t\t\t\tif (typeof Object.assign === 'function') {\n\t\t\t\t\t\t\tObject.assign(self._wkHandlers['" +
					b +
					"'], handlerFunObj)\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\tfor (var key in handlerFunObj) {\n\t\t\t\t\t\t\t\tif (handlerFunObj.hasOwnProperty(key)) {\n\t\t\t\t\t\t\t\t\tself._wkHandlers['" +
					b +
					"'][key] = handlerFunObj[key]\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t} else {\n\t\t\t\t\t\tself._wkHandlers['" +
					b + "'] = " + e + ".call(null, self) || {}\t\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\t" + e + " = null;\n\t\t\t" :
					(console.error("No function match!!"), !1)
			},
			nea: function(a) {
				var b = this.fz,
					c = [],
					d;
				for (d in this.dE)
					if (this.dE.hasOwnProperty(d)) {
						var f = this.MU(this.dE[d], this.DK(b, d));
						f && c.push(f)
					} b = this.D.libPolyfills || [];
				d = 0;
				for (f = b.length; d < f; d++) b[d] = "(" + b[d].toString() + ")(self);";
				var h = b.join(";\n") + ";\n" + c.join(";\n"),
					c = this.D.hostWorker,
					r = this;
				c && c !== r ? c.TP(function(b, c) {
					b ? a.call(r, b) : c.Rsa.sendMessage(e.CO + ":injectCode", h, function(b) {
						b ? a.call(r, b) : a.call(r, null, c.Aga)
					})
				}) : a.call(r, null, r.wfa(h))
			},
			wfa: function(b) {
				b = ["self._wkHandlers={};", b, "(" + d.toString() + ")(self)"].join("");
				var c;
				try {
					var e =
						a.a.createObjectURL(b);
					c = new Worker(e);
					setTimeout(function() {
						a.a.revokeObjectURL(e);
						e = null
					}, 3E3)
				} catch (f) {
					return
				}
				return c
			},
			x9: function(b) {
				var c = 1,
					d = b.K7,
					e = this,
					f = !!e.D.batchSend;
				return function(h) {
					var r = Array.prototype.slice.call(arguments, 1),
						s = "function" === typeof r[r.length - 1] ? r.pop() : null,
						u = e.fz,
						v = h.split(":"),
						x = e.QD;
					1 < v.length && (h = v[1], x = v[0]);
					r = {
						ey: a.a.Ke(),
						QO: e.DK(u, x),
						AA: !!s,
						Sx: u + "_" + c++,
						fN: h,
						oga: r
					};
					s && d.push({
						fN: r.fN,
						QO: r.QO,
						ey: r.ey,
						Sx: r.Sx,
						AA: s
					});
					f ? e.n8(b, r) : e.Rv(b, r)
				}
			},
			Rv: function(a, b) {
				if (this.wo.length) {
					try {
						a.postMessage(b,
							this.wo)
					} catch (c) {
						a.postMessage(b), console.error(c)
					}
					this.wo.length = 0
				} else a.postMessage(b)
			},
			n8: function(b, c) {
				b.tL || (b.tL = []);
				b.tL.push(c);
				if (!b.kX) {
					var d = this;
					b.kX = setTimeout(function() {
						b.kX = null;
						var c = b.tL;
						c.length && (d.Rv(b, 1 === c.length ? c[0] : {
							ey: a.a.Ke(),
							Opa: c
						}), c.length = 0)
					}, 0)
				}
			},
			pfa: function(a) {
				var b = this;
				a.addEventListener("error", function(a) {
					console.error(a);
					b.Xz(null)
				}, !1);
				e.Kqa(a)
			},
			Jaa: function(a, b) {
				var c = this;
				c.pfa(a);
				var d = this.x9(a);
				if (e.h9) b.call(c, null, {
					sendMessage: d
				});
				else {
					e.h9 = !0;
					var f = [c.HU() + ":checkup", Math.random().toFixed(5) + "", Math.round(1E3 * Math.random()), !1, function(a,
						e) {
						var h = !0;
						if (a || !e || e.length !== f.length - 2) h = !1;
						else
							for (var k = 0, v = e.length; k < v; k++)
								if (e[k] !== f[k + 1]) {
									h = !1;
									break
								} h ? b.call(c, null, {
							sendMessage: d
						}) : (console.error(a), b.call(c, "Self checkup failed!!"))
					}];
					d.apply(c, f)
				}
			}
		});
		a.Zr = e
	})(g);
	(function() {
		if (!g.xe) {
			g.xe = {
				Re: {},
				rB: {}
			};
			var a = g.xe,
				b = g.xe.Re,
				c = g.a,
				d = g.w;
			b.start = function(b) {
				a.rB[b.id] = {
					J: b.J,
					time: {
						T0: c.Ke()
					},
					Yga: function() {
						return c.Ke() - this.time.T0
					}
				}
			};
			b.end = function(b) {
				var d = a.rB[b.id],
					e = d.time,
					d = c.bind(d.Yga, d),
					l = b.index,
					m = b.key;
				"function" !== typeof b.xc && (b.xc = function() {});
				if (void 0 === e[m]) void 0 === l ? e[m] = d() : (e[m] = [], e[m][l] = d());
				else if (void 0 !== l && void 0 === e[m][l]) e[m][l] = d();
				else return b.xc(Error("Duplicate Invoke"));
				b.xc(null)
			};
			b.push = function(b) {
				var c = a.rB[b.id].time,
					d = b.key,
					e = b.ee;
				"function" !== typeof b.xc && (b.xc = function() {});
				if (void 0 === c[d]) c[d] = e;
				else return b.xc(Error("Duplicate Invoke"));
				b.xc(null)
			};
			b.send = function(b) {
				var c = d.nc + "://webapi.amap.com/count?",
					k = g.extend(e({
						J: a.rB[b.id].J
					}), b.params || {}),
					l = g.a;
				b.params && b.params.rs && !b.params.type && (b = a.rB[b.id].time, delete b.T0, k = g.extend(k, b));
				b = [];
				for (var m in k) l.isArray(k[m]) ? b.push([m, k[m].join("-")].join("=")) : b.push([m, k[m]].join("="));
				b.push("jl=" + (d.DB ? 1 : 0));
				if (l.qj(window.performance, "performance") &&
					l.qj(window.performance.getEntriesByType, "function")) {
					var n = 0,
						p = ["webapi.amap.com", "jsapi-test.amap.test", "localhost"],
						q = ["/maps", "/css"];
					l.Mb(window.performance.getEntriesByType("resource"), function(a) {
						var b = void 0,
							c = void 0;
						a.name.match(/:\/\/([^:?#/]+)/) && (b = RegExp.$1);
						a.name.match(/[^\/](\/[^/?#:]+)/) && (c = RegExp.$1);
						b && c && l.ga(p, b) && l.ga(q, c) && (n += parseInt(a.responseEnd - a.startTime))
					});
					0 !== n && b.push("sd=" + n)
				}
				new g.bb.qb(c + b.join("&"))
			};
			var e = function(a) {
				var b = g.l;
				a = g.g.C_(a.J);
				return {
					type: "q",
					resolution: a.width + "*" + a.height,
					k: d.key,
					u: d.mq,
					iw: b.kf ? 1 : 0,
					cw: b.gZ ? 1 : 0,
					gc: b.EO,
					m: b.Y ? 1 : 0,
					cv: b.qw ? 1 : 0,
					pf: b.Zt,
					dpr: window.devicePixelRatio,
					screenwidth: screen.width,
					scale: b.NI || 0,
					detect: b.ha ? 1 : 0,
					v: d.kq
				}
			}
		}
	})();
	(function() {
		if (g.l.Mt && !g.ZI) {
			var a = g.a.hB({
				w: "Conf",
				extend: "extend",
				l: "Browser",
				Eu: "uncodeCoords"
			});
			g.ZI = function() {
				var b = new g.Zr(function() {
					return {
						r: function() {
							this.vv = {
								sj: 0,
								au: 0
							};
							this.Yj = {};
							this.cn = [];
							this.uo = {};
							this.cj = {};
							this.hs = 0;
							this.ZV = 500
						},
						sh: function(a, b) {
							var e = a.yd,
								f = a.qe,
								h = "building" === a.ma[0];
							(f && e !== this.vv.au && this.vv.au || !f && !h && e !== this.vv.sj && this.vv.sj) && this.Rfa(!!f);
							f ? this.vv.au = e : h || (this.vv.sj = e);
							this.wma(a, b)
						},
						Rfa: function(a) {
							if (a) this.jT();
							else if (!a && Object.keys(this.Yj).length)
								for (var b in this.Yj) this.Yj.hasOwnProperty(b) &&
									(a = this.Yj[b], a.$r || a.abort())
						},
						Fra: function() {
							this.hs > this.ZV && this.EQ(Object.keys(this.cj).slice(0, Math.floor(this.ZV / 2)))
						},
						EQ: function(a) {
							for (var b = 0, e = a.length; b < e; b++) delete this.cj[a[b]];
							this.hs -= a.length
						},
						lN: function(a) {
							var b = a.ma;
							a = a.qe;
							var e = new XMLHttpRequest;
							e.pp = "";
							e.oC = [(new Date).getTime(), a ? 1 : 0, b.join("|")].join("-");
							return e
						},
						z0: function(a, b, e) {
							var f = this,
								h = a.yb,
								k = a.qe,
								l = [],
								m = h.filter(function(a) {
									var b = f.cj[a.key];
									if (b) {
										if (b.QV) return !0;
										l.push(a.key)
									}
									return !1
								}),
								n = !1;
							if (m.length && ((n =
									m.length === h.length) || "function" !== typeof b || b(a, m), !k)) {
								var p = [];
								m.forEach(function(a) {
									a = a.key;
									p.push.apply(p, f.cj[a]);
									delete f.cj[a]
								});
								this.hs -= m.length;
								this.or(this.extend({}, a, {
									QC: p,
									yd: a.yd,
									ok: n
								}), e)
							}!k && l.length && this.EQ(l);
							this.Fra();
							return n
						},
						wma: function(a, b) {
							function e(e, f) {
								var m = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : !1;
								if (p.Yj[q.oC] || p.zaa(q)) {
									var n = e.split("|");
									f && (n[0] = f + n[0]);
									var t = n,
										w = "";
									n[n.length - 1] && (w = n[n.length - 1], t = n.splice(0, n.length - 1));
									if (k)
										for (var n = 0, y = t.length; n <
											y; n++) {
											if (t[n]) {
												var A = JSON.parse(t[n]);
												if (A.length) {
													var B = A[0].split("-").slice(0, -1).join("/");
													p.cj[B] ? p.cj[B].push(A) : (p.cj[B] = [A], p.hs++);
													m && (p.cj[B].QV = !0)
												}
											}
										} else p.or(p.extend({}, a, {
											QC: t,
											yd: h,
											ok: m,
											eP: !0
										}), b);
									return w
								}
								r || (p.Ok(l, b), r = !0)
							}
							var f = this,
								h = a.yd,
								k = a.qe,
								l = a.yb,
								m = a.url;
							if (!this.z0(a, function(a, b) {
									var c = a.yb,
										d = a.url,
										e = d.match(/&t=([^&]+)/)[1].split(";");
									b.reverse().forEach(function(a) {
										a = c.indexOf(a); - 1 !== a && e.splice(a, 1)
									});
									a.url = d.replace(/&t=[^&]+/, "&t=" + e.join(";"))
								}, b)) {
								if (this.gA() &&
									(this.jT(), k)) {
									this.Ok(l, b);
									return
								}
								var n = 0,
									p = this,
									q = this.lN(a);
								k ? this.cn.push(q) : (this.Yj[q.oC] = q, q.yb = l, q.xc = b);
								var r = !1;
								q.onreadystatechange = function() {
									if (4 === q.readyState && 0 === q.status) q.$r || (q.$r = !0, f.Ok(l, b), q.onreadystatechange = null,
										k ? f.vX(q) : delete f.Yj[q.oC]), q = null;
									else if (!q.$r)
										if (3 === q.readyState) {
											var h = q.responseText.substring(n);
											q.pp = e(h, q.pp);
											n = q.responseText.length
										} else 4 === q.readyState && (h = q.responseText.substring(n), a.jf && (h += "|"), e(h, q.pp, !0), q.pp =
											"", k ? f.vX(q) : delete f.Yj[q.oC],
											q = null)
								};
								q.onerror = function() {};
								q.open("GET", m, !0);
								q.send();
								k && (q.Y4 = l.map(function(a) {
									return a.key
								}))
							}
						},
						SB: function(a) {
							function b(d, p, r) {
								var s = [r, d, p].join("/");
								d = e.filter(function(a) {
									return a.key === s
								})[0];
								18 < k && !n && (s += "/" + k);
								if (d && "loaded" !== d.status && -1 !== m.indexOf(t))
									if ("limg" === t) p = h[1], d.cd = p, "string" === typeof p.b && (p.b = x.kz(p.b)), r = "", (r =
										"object" === typeof p.u ? p.u.url : p.u) && (p.u = {
										url: r,
										Jj: "limg-" + d.key + "-" + f
									});
									else {
										p = {
											Gj: d.sa,
											Bk: s,
											Ca: h,
											Cc: t,
											IM: a.Vs,
											uB: "building" === t,
											Wh: "poilabel" === t || "roadlabel" ===
												t || "building" === t && q
										};
										if ("poilabel" === t || "roadlabel" === t) p.cd = d.cd;
										t === m[m.length - 1] && (d.status = "loaded");
										l.push(p)
									}
							}
							var e = a.yb,
								f = a.sP,
								h = a.KA,
								k = a.yd,
								l = a.kd,
								m = a.ma,
								n = a.kf,
								p = a.GO,
								q = a.Fe,
								r = h[0].split("-"),
								s = parseInt(r[1]),
								u = parseInt(r[2]),
								v = parseInt(r[0]),
								x = this,
								t = r[3],
								r = Math.pow(2, v);
							10 > v && (s <= p && b(s + r, u, v), s >= r - p && b(s - r, u, v));
							b(s, u, v)
						},
						vX: function(a) {
							for (var b = this.cn.length - 1; 0 <= b; b--) this.cn[b] === a && this.cn.splice(b, 1)
						},
						zaa: function(a) {
							for (var b = 0, e = this.cn.length; b < e; b++)
								if (this.cn[b] === a) return !0;
							return !1
						},
						gA: function() {
							return Object.keys(this.Yj).length ? !0 : !1
						},
						jT: function() {
							if (this.cn.length) {
								for (var a = this.cn.length - 1; 0 <= a; a--) {
									var b = this.cn[a];
									b.$r || b.abort();
									b.Y4 && this.EQ(b.Y4)
								}
								this.cn.length = 0
							}
						},
						Ok: function(a, b) {
							b(null, {
								yb: a,
								l1: !0,
								disabled: this.disabled
							}, {
								hk: !0
							})
						}
					}
				}, {
					batchSend: !1
				});
				b.Ze(null, new Function("\n     return {\n      " + a.Conf + ": " + JSON.stringify(g.w) + ",\n      " + a.extend +
					": " + g.extend.toString() + ",\n      " + a.Browser + ": " + JSON.stringify(g.l) + ",\n      " + a.uncodeCoords +
					": " +
					g.a.Eu.toString() + "\n     }"));
				return b
			}
		}
	})();
	g.g = {
		CLASS_NAME: "DomUtil",
		get: function(a) {
			return "string" === typeof a ? document.getElementById(a) : a
		},
		xB: function(a, b, c) {
			return a.parentNode == b ? !0 : a.parentNode && a.parentNode !== document.body && !g.g.rm(a.parentNode, c) ? g.g.xB(
				a.parentNode, b) : !1
		},
		Ow: function(a) {
			if (!a) return [0, 0];
			var b = a.clientWidth,
				c = a.clientHeight;
			b && c || !a.childNodes[0] || (b = b || a.childNodes[0].clientWidth, c = c || a.childNodes[0].clientHeight);
			window.opera && (b = Math.max(b, a.childNodes[0].scrollWidth), c = Math.max(c, a.childNodes[0].scrollHeight));
			return [b, c]
		},
		Nxa: function(a, b) {
			var c = document.head || document.getElementsByTagName("head")[0];
			if (c) {
				var d = document.createElement("link");
				d.setAttribute("rel", "stylesheet");
				d.setAttribute("type", "text/css");
				d.setAttribute("href", a);
				b ? c.appendChild(d) : c.insertBefore(d, c.firstChild)
			} else document.write("<link rel='stylesheet' href='" + a + "'/>")
		},
		wd: function(a, b) {
			var c = a.style[b];
			!c && a.currentStyle && (c = a.currentStyle[b]);
			c && "auto" !== c || !document.defaultView || (c = (c = document.defaultView.getComputedStyle(a,
				null)) ? c[b] : null);
			c && "auto" !== c || "height" !== b || (c = a.clientHeight + "px");
			c && "auto" !== c || "width" !== b || (c = a.clientWidth + "px");
			return "auto" === c ? null : c
		},
		DG: function(a) {
			if (a) return new g.gd(a.clientWidth || document.body.clientWidth, a.clientHeight || (g.l.Wq ? "CSS1Compat" ===
				document.compatMode ? document.documentElement.clientHeight : document.body.clientHeight : document.body.clientHeight
			), !0)
		},
		C_: function(a) {
			return new g.gd(a.clientWidth, a.clientHeight)
		},
		BO: function(a) {
			var b = 0,
				c = 0,
				d = a,
				e = document.body,
				f = document.documentElement,
				h, k = g.l.Xq;
			do {
				b += d.offsetTop || 0;
				c += d.offsetLeft || 0;
				b += parseInt(g.g.wd(d, "borderTopWidth"), 10) || 0;
				c += parseInt(g.g.wd(d, "borderLeftWidth"), 10) || 0;
				h = g.g.wd(d, "position");
				if (d.offsetParent === e && "absolute" === h) break;
				if ("fixed" === h) {
					b += e.scrollTop || f.scrollTop || 0;
					c += e.scrollLeft || f.scrollLeft || 0;
					break
				}
				d = d.offsetParent
			} while (d);
			d = a;
			do {
				if (d === e) break;
				b -= d.scrollTop || 0;
				c -= d.scrollLeft || 0;
				g.g.Nia() || !g.l.K5 && !k || (c += d.scrollWidth - d.clientWidth, k && "hidden" !== g.g.wd(d, "overflow-y") &&
					"hidden" !== g.g.wd(d, "overflow") &&
					(c += 17));
				d = d.parentNode
			} while (d);
			return new g.G(c, b)
		},
		Nia: function() {
			g.g.N9 || (g.g.N9 = !0, g.g.M9 = "ltr" === g.g.wd(document.body, "direction"));
			return g.g.M9
		},
		create: function(a, b, c) {
			a = document.createElement(a);
			c && (a.className = c);
			b && b.appendChild(a);
			return a
		},
		OZ: function() {
			document.selection && document.selection.empty && document.selection.empty();
			this.uda || (this.uda = document.onselectstart, document.onselectstart = g.a.l_)
		},
		d_: function() {},
		yra: function(a, b, c) {
			c ? this.Oa(a, b) : this.Xa(a, b)
		},
		rm: function(a, b) {
			if (a &&
				b) return 0 < a.className.length && RegExp("(^|\\s)" + b + "(\\s|$)").test(a.className)
		},
		Oa: function(a, b) {
			a && b && (a.classList && a.classList.add ? a.classList.add(b) : g.g.rm(a, b) || (a.className += (a.className ?
				" " : "") + b))
		},
		nqa: function(a, b) {
			a && (a.className = b || "")
		},
		Xa: function(a, b) {
			function c(a, c) {
				return c === b ? "" : a
			}
			a && b && (a.classList && a.classList.remove ? a.classList.remove(b) : a.className = a.className.replace(
				/(\S+)\s*/g, c).replace(/(^\s+|\s+$)/, ""))
		},
		R_: function(a, b) {
			return 1 === b ? "" : "opacity" in a.style ? "opacity:" + b : 8 <=
				document.documentMode ? "-ms-filter:'progid:DXImageTransform.Microsoft.Alpha(opacity=" + Math.ceil(100 * b) +
				")'" : "filter:alpha(opacity=" + Math.ceil(100 * b) + ")"
		},
		wp: function(a, b) {
			if (a.style)
				if ("opacity" in a.style) a.style.opacity = b;
				else if ("filter" in a.style) {
				var c = Math.round(100 * b);
				a.style.filter = "";
				100 !== c && (a.style.filter = " progid:DXImageTransform.Microsoft.Alpha(opacity=" + c + ")")
			}
		},
		tR: function(a) {
			for (var b = document.documentElement.style, c = 0; c < a.length; c += 1)
				if (a[c] in b) return a[c];
			return !1
		},
		g0: function(a) {
			var b =
				g.l.L5;
			return "translate" + (b ? "3d" : "") + "(" + a.x + "px," + a.y + "px" + ((b ? ",0" : "") + ")")
		},
		Vwa: function(a, b) {
			return g.g.g0(b.add(b.Jd(-1 * a))) + (" scale(" + a + ") ")
		},
		g4: function(a, b, c) {
			a.ri = b;
			!c && g.l.oF ? (b = g.g.g0(b), c = a.style[g.g.Pf].split("rotate"), 1 < c.length ? (c[0] = b, a.style[g.g.Pf] = c
				.join("rotate")) : a.style[g.g.Pf] = b, g.l.c2 && (a.style.WebkitBackfaceVisibility = "hidden")) : (a.style.left =
				b.x + "px", a.style.top = b.y + "px")
		},
		ne: function(a) {
			a.ri || (a.ri = a.style.left ? new g.G(parseInt(a.style.left), parseInt(a.style.top)) : new g.G(0,
				0));
			return a.ri
		},
		sza: function(a, b) {
			a = a instanceof Array ? a : [a];
			for (var c = 0; c < a.length; c += 1) a[c].style.cssText = b
		},
		Z3: function(a, b) {
			";" !== b[b.length - 1] && (b += ";");
			return b.toLowerCase() !== a.style.cssText.replace(/ /g, "").toLowerCase() ? (a.style.cssText = b, !0) : !1
		},
		Ra: function(a, b) {
			a = a instanceof Array ? a : [a];
			for (var c = 0; c < a.length; c += 1)
				for (var d in b) b.hasOwnProperty(d) && (a[c].style[d] = b[d]);
			return this
		},
		iC: function(a) {
			for (; a.childNodes.length;) a.removeChild(a.childNodes[0])
		},
		remove: function(a) {
			a && a.parentNode &&
				a.parentNode.removeChild(a)
		},
		rotate: function(a, b, c) {
			var d = g.g.Pf;
			c = c || {
				x: a.clientWidth / 2,
				y: a.clientHeight / 2
			};
			d ? (a.style[d] = "" + (" rotate(" + b + "deg)"), a.style[g.g.Hr[d] + "-origin"] = c.x + "px " + c.y + "px") : (d =
				Math.cos(b * Math.PI / 180), b = Math.sin(b * Math.PI / 180), a.style.filter =
				"progid:DXImageTransform.Microsoft.Matrix()", 0 < a.filters.length && (a = a.filters.item(0), a.Dx = -c.x * d +
					c.y * b + c.x, a.Dy = -c.x * b - c.y * d + c.y, a.M11 = a.M22 = d, a.M12 = -(a.M21 = b)))
		},
		b0: function(a, b, c) {
			var d = g.g.Pf;
			c = c || {
				x: a.clientWidth / 2,
				y: a.clientHeight /
					2
			};
			return d ? g.g.Hr[d] + ":" + ("" + (" rotate(" + b + "deg)")) + ";" + (g.g.Hr[d] + "-origin:" + c.x + "px " + c.y +
				"px") : ""
		},
		Un: function(a, b, c) {
			a.width = b;
			a.height = c
		},
		getElementsByClassName: function(a, b, c) {
			b = b || "*";
			c = c || document;
			if (c.getElementsByClassName) return c.getElementsByClassName(a);
			b = c.getElementsByTagName(b);
			a = RegExp("(^|\\s)" + a + "(\\s|$)");
			c = [];
			for (var d = 0, e; d < b.length; d++) e = b[d], a.test(e.className) && c.push(e);
			return c
		},
		fillText: function(a, b) {
			if (a) return void 0 !== a.textContent ? a.textContent = b : void 0 !== a.innerText ?
				a.innerText = b : a.innerHTML = b, a
		}
	};
	(function() {
		var a = g.g.tR(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]),
			b;
		g.extend(g.g, {
			OZ: function() {
				g.F.h(window, "selectstart", g.F.preventDefault);
				if (a) {
					var c = document.documentElement.style;
					"none" !== c[a] && (b = c[a], c[a] = "none")
				}
			},
			d_: function() {
				g.F.I(window, "selectstart", g.F.preventDefault);
				a && "none" !== b && (document.documentElement.style[a] = b, b = "none")
			},
			Fia: function() {
				g.F.h(window, "dragstart", g.F.preventDefault)
			},
			lja: function() {
				g.F.I(window, "dragstart", g.F.preventDefault)
			}
		})
	})();
	g.g.Pf = g.g.tR(["WebkitTransform", "OTransform", "MozTransform", "msTransform", "transform"]);
	g.g.Hr = {
		transform: "transform",
		WebkitTransform: "-webkit-transform",
		OTransform: "-o-transform",
		MozTransform: "-moz-transform",
		msTransform: "-ms-transform"
	};
	g.g.oD = g.g.tR(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]);
	g.g.Lta = "webkitTransition" === g.g.oD || "OTransition" === g.g.oD ? g.g.oD + "End" : "transitionend";
	g.F = {
		h: function(a, b, c, d) {
			function e(b) {
				b = b || window.event;
				b.target = b.target || b.srcElement;
				return c.call(d || a, b, k)
			}
			var f = g.a.Bb(a) + "_" + g.a.Bb(c) + "_" + g.a.Bb(d || a),
				h = b + f;
			if (a[h]) return this;
			var k = b;
			g.l.PN && "mousewheel" === b && (b = "DOMMouseScroll");
			if (g.l.Wq && ("mouseover" === b || "mouseout" === b)) {
				var l = e;
				b = "mouseover" === b ? "mouseenter" : "mouseleave";
				e = function(a) {
					l(a)
				}
			}
			if (g.l.Z2 && 0 === b.indexOf("touch")) return a[h] = e, this.Zfa(a, b, e, f);
			g.l.of && "dblclick" === b && this.Xfa && this.Xfa(a, e, f);
			"addEventListener" in a ? a.addEventListener(b,
				e, !1) : "attachEvent" in a ? a.attachEvent("on" + b, e) : a["on" + b] = e;
			a[h] = e;
			return this
		},
		vj: function(a, b, c, d) {
			var e = this;
			this.h(a, b, function h(k) {
				e.I(a, b, h, d);
				return c.call(d || a, k || window.event, b)
			}, d)
		},
		I: function(a, b, c, d) {
			c = g.a.Bb(a) + "_" + g.a.Bb(c) + "_" + g.a.Bb(d || a);
			d = b + c;
			var e = a[d];
			g.l.PN && "mousewheel" === b && (b = "DOMMouseScroll");
			!g.l.Wq || "mouseover" !== b && "mouseout" !== b || (b = "mouseover" === b ? "mouseenter" : "mouseleave");
			g.l.Z2 && -1 < b.indexOf("touch") ? this.spa(a, b, c) : g.l.of && "dblclick" === b && this.opa ? this.opa(a, c) :
				"removeEventListener" in a ? a.removeEventListener(b, e, !1) : "detachEvent" in a && -1 === b.indexOf("touch") ?
				e && a.detachEvent("on" + b, e) : a["on" + b] = null;
			a[d] = void 0;
			return this
		},
		zza: function(a, b) {
			var c = document.createEvent("MouseEvents");
			c.initMouseEvent(a, !0, !0, window, 1, b.screenX, b.screenY, b.clientX, b.clientY, !1, !1, !1, !1, 0, null);
			b.target.dispatchEvent(c)
		},
		stopPropagation: function(a) {
			a.stopPropagation ? a.stopPropagation() : a.cancelBubble = !0;
			return this
		},
		Zqa: function(a) {
			var b = g.F.stopPropagation;
			g.l.of && (g.F.h(a,
				"touchstart", b, this), g.F.h(a, "touchmove", b, this), g.F.h(a, "touchend", b, this));
			g.l.Y || (g.F.h(a, "mousedown", b, this), g.F.h(a, "mouseup", b, this), g.F.h(a, "mousemove", b, this));
			g.l.lQ && (g.F.h(a, "pointerdown", b, this), g.F.h(a, "pointerup", b, this), g.F.h(a, "pointermove", b, this));
			g.l.e2 && (g.F.h(a, "MSPointerDown", b, this), g.F.h(a, "MSPointerUp", b, this), g.F.h(a, "MSPointerMove", b,
				this))
		},
		preventDefault: function(a) {
			a.preventDefault ? a.preventDefault() : a.returnValue = !1;
			return this
		},
		stop: function(a) {
			return g.F.preventDefault(a).stopPropagation(a)
		},
		mqa: function(a) {
			return a && a.getBoundingClientRect ? (a.AJ = a.getBoundingClientRect(), a.XS = [a.clientLeft, a.clientTop], !0) :
				!1
		},
		isa: function(a) {
			a.AJ && (a.AJ = null, a.XS = null)
		},
		vja: function(a, b) {
			var c = b.AJ || b.getBoundingClientRect(),
				d = b.XS || [b.clientLeft, b.clientTop];
			return new g.G(a.clientX - c.left - d[0], a.clientY - c.top - d[1])
		},
		ll: function(a, b) {
			if (b && b.getBoundingClientRect) return this.vja(a, b);
			var c = document.body,
				d = document.documentElement,
				c = new g.G(g.l.of ? a.pageX : a.clientX + (c.scrollLeft || d.scrollLeft), g.l.of ?
					a.pageY : a.clientY + (c.scrollTop || d.scrollTop));
			return b ? c.Wa(g.g.BO(b)) : c
		},
		i1: function(a) {
			return 1 === a.which || 0 === a.button || 1 === a.button
		}
	};
	g.extend(g.F, {
		sL: [],
		bW: !1,
		Zfa: function(a, b, c, d) {
			switch (b) {
				case "touchstart":
					return this.bga(a, b, c, d);
				case "touchend":
					return this.$fa(a, b, c, d);
				case "touchmove":
					return this.aga(a, b, c, d)
			}
		},
		vn: function(a) {
			if (g.l.lQ) return a;
			switch (a) {
				case "pointerdown":
					return "MSPointerDown";
				case "pointerup":
					return "MSPointerUp";
				case "pointercancel":
					return "MSPointerCancel";
				case "pointermove":
					return "MSPointerMove"
			}
		},
		bga: function(a, b, c, d) {
			function e(a) {
				for (var b = !1, d = 0; d < f.length; d += 1)
					if (f[d].pointerId === a.pointerId) {
						b = !0;
						break
					} b || f.push(a);
				a.touches = f.slice();
				a.changedTouches = [a];
				c(a)
			}
			var f = this.sL;
			a["_amap_touchstart" + d] = e;
			a.addEventListener(this.vn("pointerdown"), e, !1);
			this.bW || (a = function(a) {
				for (var b = 0; b < f.length; b += 1)
					if (f[b].pointerId === a.pointerId) {
						f.splice(b, 1);
						break
					}
			}, document.documentElement.addEventListener(this.vn("pointerup"), a, !1), document.documentElement.addEventListener(
				this.vn("pointercancel"), a, !1), this.bW = !0);
			return this
		},
		aga: function(a, b, c, d) {
			function e(a) {
				if (a.pointerType !== a.MSPOINTER_TYPE_MOUSE ||
					0 !== a.buttons) {
					for (var b = 0; b < f.length; b += 1)
						if (f[b].pointerId === a.pointerId) {
							f[b] = a;
							break
						} a.touches = f.slice();
					a.changedTouches = [a];
					c(a)
				}
			}
			var f = this.sL;
			a["_amap_touchmove" + d] = e;
			a.addEventListener(this.vn("pointermove"), e, !1);
			return this
		},
		$fa: function(a, b, c, d) {
			function e(a) {
				for (var b = 0; b < f.length; b += 1)
					if (f[b].pointerId === a.pointerId) {
						f.splice(b, 1);
						break
					} a.touches = f.slice();
				a.changedTouches = [a];
				c(a)
			}
			var f = this.sL;
			a["_amap_touchend" + d] = e;
			a.addEventListener(this.vn("pointerup"), e, !1);
			a.addEventListener(this.vn("pointercancel"),
				e, !1);
			return this
		},
		spa: function(a, b, c) {
			c = a["_amap_" + b + c];
			switch (b) {
				case "touchstart":
					a.removeEventListener(this.vn("pointerdown"), c, !1);
					break;
				case "touchmove":
					a.removeEventListener(this.vn("pointermove"), c, !1);
					break;
				case "touchend":
					a.removeEventListener(this.vn("pointerup"), c, !1), a.removeEventListener(this.vn("pointercancel"), c, !1)
			}
			return this
		}
	});
	(function() {
		function a(a) {
			var b = a.target || a.srcElement;
			b.fT && f(b.fT);
			b.fT = e(function() {
				var c = b.eo;
				if (c && c.co)
					for (var d = 0; d < c.co.length; d += 1) c.co[d].call(c, a)
			})
		}

		function b() {
			var b = this.contentDocument.defaultView;
			b.eo = this.U7;
			b.addEventListener("resize", a);
			a.call(b, {
				target: b
			})
		}
		var c = document.attachEvent,
			d = navigator.userAgent.match(/(Trident|Edge)/),
			e = g.a.Fc,
			f = g.a.Oh;
		g.extend(g.F, {
			dga: function(e, f) {
				if (!e.co)
					if (e.co = [], c) e.eo = e, e.attachEvent("onresize", a);
					else {
						"static" === window.getComputedStyle(e).position &&
							(e.style.position = "relative");
						var l = e.eo = document.createElement("object");
						l.setAttribute("style",
							"display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; pointer-events: none; z-index: -1;"
						);
						l.U7 = e;
						l.onload = b;
						l.type = "text/html";
						d && e.appendChild(l);
						l.data = "about:blank";
						d || e.appendChild(l)
					} e.co.push(f)
			},
			Pya: function(b, d) {
				b.co.splice(b.co.indexOf(d), 1);
				b.co.length || (c ? b.detachEvent("onresize", a) : (b.eo.contentDocument.defaultView.removeEventListener(
					"resize",
					a), b.eo = !b.removeChild(b.eo)))
			},
			Bha: function(a) {
				a.co = null;
				if (a.eo) {
					var b = a.eo;
					b.parentNode === a && b.parentNode.removeChild(b);
					a.eo = null
				}
			}
		})
	})();
	g.ob = {
		gna: g.w.tb + "/maps",
		ht: g.Z.ht,
		CP: 0,
		Ex: [],
		ct: {},
		Vg: function(a, b) {
			function c() {
				d += 1;
				d === e.length && b && b()
			}
			a.length || b();
			for (var d = 0, e = [], f = 0; f < a.length; f += 1) {
				var h = this.ht[a[f]];
				if (h)
					for (var k = 0; k < h.length; k += 1) e.push(h[k]);
				e.push(a[f])
			}
			for (f = 0; f < e.length; f += 1) this.LN(e[f], c)
		},
		yB: function(a) {
			for (var b = 0; b < a.length; b += 1)
				if (1 !== this.LA(a[b]).status) return !1;
			return !0
		},
		LN: function(a, b) {
			var c = this.LA(a);
			if (1 === c.status) b && b();
			else {
				b && c.pw.push(b);
				try {
					if (g.l.fr && window.localStorage) {
						var d = window.localStorage["_AMap_" +
							a];
						d && (d = JSON.parse(d), d.version === g.w.Si ? (window._jsload_(a, d.script, !0), d.css && window._cssload_(a,
							d.css, !0)) : window.localStorage.removeItem("_AMap_" + a))
					}
				} catch (e) {}
				if (0 === c.status) {
					this.Voa(a);
					var f = this;
					f.CP || (f.CP = 1, window.setTimeout(function() {
						f.CP = 0;
						var a = f.gna + "/modules?v=" + g.w.kq + "&key=" + g.w.key + "&m=" + f.Ex.join(",") + "&vrs=" + g.w.Si;
						g.ob.ds(f.Ex.join(","));
						f.Ex = [];
						c.dI = f.Dma(a)
					}, 1));
					c.status = -1
				}
			}
		},
		ds: function(a) {
			a = g.w.Kd + "/v3/log/init?" + ["s=rsv3&product=JsModule&key=" + g.w.key, "m=" + a].join("&");
			new g.bb.qb(a, {
				callback: "callback"
			})
		},
		load: function(a, b) {
			var c = this.ht[a];
			if (c) {
				for (var d = [], e = 0; e < c.length; e += 1) d.push(c[e]);
				d.push(a);
				for (var f = 0, c = function() {
						f += 1;
						f === d.length && b && b()
					}, e = 0; e < d.length; e += 1) this.LN(d[e], c)
			} else this.LN(a, b)
		},
		Voa: function(a) {
			for (var b = 0; b < this.Ex.length; b += 1)
				if (this.Ex[b] === a) return;
			this.Ex.push(a)
		},
		Em: function(a, b) {
			var c = this.LA(a);
			try {
				eval(b)
			} catch (d) {
				return
			}
			c.status = 1;
			for (var e = 0, f = c.pw.length; e < f; e += 1) c.pw[e]();
			c.pw = []
		},
		td: function(a, b) {
			var c = this;
			c.timeout = setTimeout(function() {
				1 !==
					c.ct[a].status ? (c.remove(a), c.load(a, b)) : clearTimeout(c.timeout)
			}, 5E3)
		},
		LA: function(a) {
			this.ct[a] || (this.ct[a] = {}, this.ct[a].status = 0, this.ct[a].pw = []);
			return this.ct[a]
		},
		remove: function(a) {
			this.ct[a] = null
		},
		Dma: function(a) {
			g.w.mode && (a += "&mode=" + g.w.mode);
			var b = document.createElement("script");
			b.charset = "utf-8";
			a && 0 === a.indexOf(g.w.tb) && (b.crossOrigin = "Anonymous");
			b.src = a;
			document.body.appendChild(b);
			return b
		}
	};
	window._jsload_ = function(a, b, c) {
		var d = g.ob.LA(a);
		d.dI && 0 <= g.a.indexOf(document.body.childNodes, d.dI) && document.body.removeChild(d.dI);
		d.dI = null;
		try {
			if (!c && window.localStorage && b && "" !== b && g.l.fr) {
				var e = window.localStorage["_AMap_" + a],
					e = e || "{}",
					e = JSON.parse(e);
				e.version !== g.w.Si || e.script ? window.localStorage.setItem("_AMap_" + a, JSON.stringify({
					version: g.w.Si,
					script: b
				})) : window.localStorage.setItem("_AMap_" + a, JSON.stringify({
					version: g.w.Si,
					script: b,
					css: e.css
				}))
			}
		} catch (f) {}
		g.ob.Em(a, b)
	};
	window._cssload_ = function(a, b, c) {
		try {
			!c && window.localStorage && b && "" !== b && g.l.fr && window.localStorage.setItem("_AMap_" + a, JSON.stringify({
				css: b,
				version: g.w.Si
			}))
		} catch (d) {}
		var e = document.createElement("style");
		e.type = "text/css"; - 1 === g.w.tb.indexOf("webapi.amap.com") && (b = b.replace(/webapi.amap.com/gi, g.w.tb.split(
			"://")[1]));
		"https" === g.w.nc && (b = b.replace(/http:/gi, "https:"));
		e.styleSheet ? (a = function() {
			try {
				e.styleSheet.cssText = b
			} catch (a) {}
		}, e.styleSheet.disabled ? setTimeout(a, 10) : a()) : e.appendChild(document.createTextNode(b));
		a = document.head || document.getElementsByTagName("head")[0];
		2 > a.childNodes.length ? a.appendChild(e) : a.insertBefore(e, a.childNodes[1])
	};
	(function(a) {
		var b = g.l;
		if (!g.indexedDB && b.di) {
			var c = a.indexedDB || a.webkitIndexedDB || a.msIndexedDB || a.mozIndexedDB,
				d = a.IDBKeyRange || a.iAa || a.aya || a.$xa;
			if (c) {
				var e = g.a,
					f = null;
				a = "amap-jsapi" + (a.nta ? "-debug" : "");
				var h = g.extend({}, g.na),
					k;
				try {
					k = c.open(a), k.onsuccess = function() {
						f = this.result;
						h.q("dbReady", {
							status: "success"
						})
					}, k.onerror = function() {
						h.q("dbReady", {
							status: "error"
						})
					}, k.onblocked = function() {
						h.q("dbReady", {
							status: "blocked"
						})
					}, k.onupgradeneeded = function(a) {
						a.currentTarget.result.createObjectStore("tile", {
							keyPath: "tileKey"
						})
					}
				} catch (l) {
					b.di = !1
				} finally {
					if (!b.di) return
				}
				var b = function(a) {
						return function() {
							try {
								return a.apply(this, arguments)
							} catch (b) {
								var c = arguments[arguments.length - 1];
								"function" === typeof c && setTimeout(function() {
									c({
										code: 4,
										cG: b
									})
								}, 1)
							}
						}
					},
					m = b(function(a, b) {
						return null === f ? (setTimeout(function() {
							b && b({
								code: 3
							})
						}, 1), null) : f.transaction("tile", a).objectStore("tile")
					});
				g.indexedDB = {
					rA: function(a, b) {
						f ? "function" === typeof a && a() : h.h("dbReady", function(c) {
							"success" === c.status ? "function" === typeof a &&
								a() : "function" === typeof b && b({
									code: 3,
									status: status
								})
						})
					},
					count: b(function(a) {
						var b = this,
							c = arguments;
						this.rA(function() {
							b.ds.apply(b, c)
						}, a)
					}),
					ds: b(function(a) {
						var b = m("readonly", a).count();
						b.onsuccess = function() {
							a(null, b.result)
						};
						b.onerror = function() {
							a({
								code: 7
							})
						}
					}),
					get: b(function(a, b, c) {
						var d = this,
							e = setTimeout(function() {
								e && (e = null, c && c({
									code: 7
								}))
							}, b.timeout || 1E3);
						this.rA(function() {
							d.j$.call(d, a, function(a, b) {
								e && (clearTimeout(e), e = null, c(a, b))
							})
						}, c)
					}),
					j$: b(function(a, b) {
						var c = m("readonly", b);
						if (e.isArray(a)) {
							var d,
								f;
							(function() {
								function e(b) {
									var f = c.get(a[b]);
									f.onsuccess = function(a) {
										a.target.result && (d[b] = a.target.result);
										h()
									};
									f.onerror = h
								}

								function h() {
									f++;
									f === a.length && b(null, d)
								}
								d = [];
								for (var k = f = 0, l = a.length; k < l; k++) e(k)
							})()
						} else {
							var h = c.get(a);
							h.onsuccess = function(a) {
								b && b(null, a.target.result)
							};
							h.onerror = function() {
								b && b({
									code: 1
								})
							}
						}
					}),
					add: b(function(a, b) {
						var c = this,
							d = arguments;
						this.rA(function() {
							c.Y7.apply(c, d)
						}, b)
					}),
					Y7: b(function(a, b) {
						function c() {
							0 === --f && b(null)
						}
						e.isArray(a) || (a = [a]);
						var d = a.length,
							f = d,
							h = 0,
							k = Math.ceil(d / 5),
							l = setInterval(function() {
								if (h++ < k) {
									var e = 5 * h;
									e > d && (e = d);
									for (var f = m("readwrite", b), s = 5 * (h - 1); s < e; s++) {
										var A = f.put(a[s]);
										A.onsuccess = A.onerror = c
									}
								} else clearInterval(l)
							}, 32)
					}),
					remove: b(function(a, b) {
						var c = this,
							d = arguments;
						this.rA(function() {
							c.Eea.apply(c, d)
						}, b)
					}),
					Eea: b(function(a, b) {
						var c = m("readwrite", b);
						e.isArray(a) || (a = [a]);
						a = a.sort();
						c.openCursor(d.bound(a[0], a[a.length - 1])).onsuccess = function(c) {
							if (c = c.target.result) {
								if (e.ga(c.value.tileKey, a)) c["delete"]();
								for (var d = -1, f =
										0, h = a.length; f < h; f++)
									if (a[f] > c.value.tileKey) {
										d = f;
										break
									} c["continue"](a[d])
							} else b && b(null)
						}
					}),
					clear: b(function(a) {
						var b = this,
							c = arguments;
						this.rA(function() {
							b.GD.apply(b, c)
						}, a)
					}),
					GD: b(function(a) {
						var b = m("readwrite", a).clear();
						b.onsuccess = function() {
							a && a(null)
						};
						b.onerror = function() {
							a && a({
								code: 2
							})
						}
					})
				}
			} else b.di = !1
		}
	})(window);
	(function() {
		function a(a) {
			u.data.keys = u.data.keys.filter(function(b) {
				return !r.ga(a, b)
			}).concat(a)
		}

		function b(a) {
			var b = g.w.Si + "|" + a.Bk.replace(/\//g, ",") + "|" + (a.kf ? "w" : "v") + "|",
				c;
			c = a.ha;
			var d = a.Fe;
			c = [c ? 1 : 0, q.Y ? 1 : 0, d ? 1 : 0].join();
			return b + c + "|" + m(a.url)
		}

		function c() {
			u.data.keys.length >= u.gJ && d()
		}

		function d() {
			var a = u.data.keys.length,
				b = Math.floor(a / 2);
			a > u.gJ && (b = Math.floor(a - u.gJ / 2));
			a = u.data.keys.slice(0, b);
			u.data.keys = u.data.keys.slice(b + 1);
			s.remove(a, function(a) {
				a && 3 === a.code && (q.di = !1)
			})
		}

		function e() {
			var a =
				0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : r.mr;
			k();
			x.setItem(u.key, u.data, !0);
			f(a)
		}

		function f(a) {
			q.di && s && s.clear(function(b) {
				b && 3 === b.code && (q.di = !1);
				a()
			})
		}

		function h() {
			k();
			var a = x.getItem(u.key, !0);
			a && (a.KI === u.data.KI && a.HY === u.data.HY ? u.data = a : e())
		}

		function k() {
			u.data = {
				KI: q.sf,
				HY: g.w.Si,
				keys: [],
				ef: {},
				om: {}
			};
			u.Ir = {}
		}

		function l(a) {
			a && (u.data.KI = a, q.sf = a)
		}

		function m(a) {
			var b = "limg";
			/flds=([^&]+)/.test(a) && (b = RegExp.$1);
			return b
		}

		function n(a) {
			if ("object" === typeof a && null !== a) {
				var b = [];
				if (r.isArray(a))
					if (Object.keys(a).length == a.length) b = a.map(function(a) {
						return n(a)
					});
					else {
						b.push("__arrayObject");
						var c = {},
							d;
						for (d in a)(0 > parseInt(d) || isNaN(parseInt(d))) && a.hasOwnProperty(d) && (c[d] = n(a[d]));
						b.push(c);
						b.push(a.map(function(a) {
							return n(a)
						}))
					}
				else if (r.qj(a, "Float32Array")) b.push("__Float32Array"), b.push(Array.prototype.slice.call(a));
				else if (r.qj(a, "Uint16Array")) b.push("__Uint16Array"), b.push(Array.prototype.slice.call(a));
				else
					for (d in b = {}, a) a.hasOwnProperty(d) && (b[d] = n(a[d]));
				return b
			}
			return a
		}

		function p(a) {
			if ("object" === typeof a && null !== a) {
				var b = {};
				if (r.isArray(a))
					if ("__Float32Array" === a[0]) b = new Float32Array(a[1]);
					else if ("__Uint16Array" === a[0]) b = new Uint16Array(a[1]);
				else if ("__arrayObject" === a[0]) {
					b = p(a[2]);
					a = a[1];
					for (var c in a) a.hasOwnProperty(c) && (b[c] = a[c])
				} else b = a.map(function(a) {
					return p(a)
				});
				else
					for (c in a) a.hasOwnProperty(c) && (b[c] = p(a[c]));
				return b
			}
			return a
		}
		var q = g.l,
			r = g.a;
		if (!g.Yi && q.di) {
			var s = g.indexedDB,
				u = {
					gJ: 1E3,
					key: "_AMap_data.tileKeys"
				},
				v = [],
				x = {
					getItem: function(a,
						b) {
						var c = localStorage.getItem(a);
						if (c && b) {
							var d;
							try {
								d = JSON.parse(c)
							} catch (e) {
								d = null
							}
							c = d
						}
						return c
					},
					setItem: function(a, b, c) {
						var d = b;
						c && (d = JSON.stringify(b), 1.5 < d.length / 1024 / 1024 && Object.keys(b.om).length && (b.om = {}, d = JSON.stringify(
							b)));
						try {
							localStorage.setItem(a, d)
						} catch (f) {
							e()
						}
					}
				};
			g.Yi = {
				clear: e,
				get: function(c, d) {
					function f(a) {
						var b = {
							SO: l,
							b2: G,
							Wxa: x,
							ef: u.data.ef
						};
						a && D.length && (/\|limg/.test(D[0]) ? b.H1 = a.map(function(a) {
							return JSON.parse(a.data)
						}).filter(function(a) {
							return a && a.key
						}) : b.kd = h(a));
						d && d(null,
							b);
						x.length && (l = [], G = [])
					}

					function h(a) {
						var b = [];
						m(c.url).split(",").forEach(function(c) {
							a.forEach(function(a) {
								if (a = JSON.parse(a.data[c])) {
									var d = a.Gj;
									a.Gj = new g.Yn(d.z, d.x, d.y);
									a.Gj.S = d.S;
									b.push(a)
								}
							})
						});
						return b
					}
					var k = "FS" === c.type;
					if (!q.fr || !(k || q.di && 0 !== u.data.keys.length)) return d({
						code: 1
					});
					var l = [],
						x = [],
						D = [],
						G = [],
						H = [];
					c.qra.forEach(function(a) {
						var d = !1,
							e = b({
								Bk: a.key,
								url: c.url,
								kf: c.kf,
								ha: c.o.ha,
								Fe: c.Fe
							});
						k && (v.push(e), u.data.om[e] && (l.push(a), D.push(e), H.push({
								data: p(u.data.om[e]),
								tileKey: e
							}),
							d = !0));
						d || (q.di && r.ga(u.data.keys, e) ? (D.push(e), x.push(a)) : G.push(a))
					});
					if (k && 0 === x.length || 0 === D.length) return f(H);
					k && H.length && H.forEach(function(a) {
						a = r.indexOf(D, a.tileKey);
						D.splice(a, 1)
					});
					s.get(D, {
						timeout: c.timeout || 1E3
					}, function(b, c) {
						if (b || c.length !== D.length) b && 3 === b.code ? q.di = !1 : e(), G = x, x = [], f(null);
						else {
							if (k)
								for (var d = c.length - 1; 0 <= d; d--) {
									var h = c[d];
									h && h.data ? u.data.om[h.tileKey] = n(h.data) : G.push(x.splice(d, 1)[0])
								}
							l = x;
							x = [];
							f(c);
							a(D)
						}
					});
					(G.length || x.length) && f(H)
				},
				Fu: function(a) {
					a.yb.forEach(function(c) {
						c =
							b({
								Bk: c.key,
								url: a.url,
								kf: a.kf,
								ha: a.o.ha,
								Fe: a.Fe
							});
						u.Ir[c] && delete u.Ir[c]
					})
				},
				set: function(a, c) {
					a.sf && a.sf !== u.data.KI && (l(a.sf), e(), c && c({
						code: 2
					}));
					!a.cd && a.kd ? a.kd.forEach(function(c) {
						var d = b({
							Bk: c.Bk,
							url: a.url,
							kf: a.kf,
							ha: a.o.ha,
							Fe: a.Fe
						});
						if (q.di || r.ga(v, d)) {
							var e = u.Ir[d] || {};
							e[c.Cc] = c.Ca;
							u.Ir[d] = e
						}
					}) : a.data && a.data.forEach(function(c) {
						var d = b({
							Bk: c.key,
							url: a.url,
							kf: a.kf,
							ha: a.o.ha,
							Fe: a.Fe
						});
						if (q.di || r.ga(v, d)) u.Ir[d] = c.data
					});
					u.data.ef = {
						"x-vd-v": a["x-vd-v"],
						tv: a.tv,
						bgc: a.bgc
					}
				},
				flush: function() {
					var a = !0;
					return function() {
						var b = this;
						if (a) {
							if (Object.keys(u.data.om).length)
								for (var c in u.data.om) u.data.om.hasOwnProperty(c) && !r.ga(v, c) && delete u.data.om[c];
							q.di ? s.count(function(a, c) {
								a || (c !== u.data.keys.length ? (u.data.keys.length && (u.data.keys = []), f(function() {
									b.VD(!0)
								})) : b.VD(!0))
							}) : b.VD(!0);
							a = !1
						} else b.VD()
					}
				}(),
				VD: function() {
					var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : !1,
						b = {},
						d = [],
						f = Object.keys(u.Ir),
						h = [];
					f.length ? (f.forEach(function(a) {
						var c = u.Ir[a];
						a.split("|").pop().split(",").every(function(a) {
							return "limg" ===
								a ? !0 : c && void 0 !== c[a]
						}) ? (r.ga(u.data.keys, a) || (h.push(a), d.push({
							tileKey: a,
							data: c
						})), r.ga(v, a) && void 0 === u.data.om[a] && (u.data.om[a] = c)) : b[a] = c
					}), d.length && (q.di ? s.add(d, function(a) {
						a ? 3 !== a.code ? e() : q.di = !1 : (u.data.keys = u.data.keys.concat(h), x.setItem(u.key, u.data, !0),
							c())
					}) : x.setItem(u.key, u.data, !0)), u.Ir = b) : (a && x.setItem(u.key, u.data, !0), c())
				}
			};
			h()
		}
	})();
	g.U = g.Z.extend({
		r: function(a, b, c) {
			var d = parseFloat(b),
				e = parseFloat(a);
			if (isNaN(a) || isNaN(b)) throw "Invalid Object: LngLat(" + e + ", " + d + ")";
			!0 !== c && (d = Math.max(Math.min(d, 90), -90), e = (e + 180) % 360 + (-180 > e || 180 === e ? 180 : -180));
			this.Q = d;
			this.R = e
		},
		mO: function() {
			return g.a.Wc(this.R, 6)
		},
		iO: function() {
			return g.a.Wc(this.Q, 6)
		},
		add: function(a, b) {
			return new g.U(this.R + a.R, this.Q + a.Q, b)
		},
		Wa: function(a, b) {
			return new g.U(this.R - a.R, this.Q - a.Q, b)
		},
		Uc: function(a, b) {
			return new g.U(this.R / a, this.Q / a, b)
		},
		Jd: function(a, b) {
			return new g.U(this.R *
				a, this.Q * a, b)
		},
		le: function(a) {
			return g.Np.distance(this, a)
		},
		offset: function(a, b) {
			if (isNaN(a) || isNaN(b)) return !1;
			var c = 2 * Math.asin(Math.sin(Math.round(a) / 12756274) / Math.cos(this.Q * Math.PI / 180)),
				c = this.R + 180 * c / Math.PI,
				d = 2 * Math.asin(Math.round(b) / 12756274);
			return new g.U(c, this.Q + 180 * d / Math.PI)
		},
		eb: function(a) {
			a = g.a.Fa(a);
			return a instanceof g.U ? 1E-9 >= Math.max(Math.abs(this.Q - a.Q), Math.abs(this.R - a.R)) : !1
		},
		toString: function() {
			return g.a.Wc(this.R, 6) + "," + g.a.Wc(this.Q, 6)
		},
		Dl: function() {
			return [this.R,
				this.Q
			]
		},
		jb: function() {
			var a = this.controlPoints,
				b = new g.U(this.R, this.Q);
			a && (b.controlPoints = [].concat(a));
			return b
		}
	});
	g.U.pka = function(a, b, c) {
		c = c + 1 || Math.round(Math.abs(a.R - b.R));
		if (!c || 0.001 > Math.abs(a.R - b.R)) return [];
		var d = [],
			e = Math.PI,
			f = g.Ml.ft,
			h = g.Ml.$oa,
			k = Math.asin,
			l = Math.sqrt,
			m = Math.sin,
			n = Math.pow,
			p = Math.cos,
			q = Math.atan2,
			r = a.Q * f;
		a = a.R * f;
		var s = b.Q * f;
		b = b.R * f;
		for (var k = 2 * k(l(n(m((r - s) / 2), 2) + p(r) * p(s) * n(m((a - b) / 2), 2))), u, v, x, t, f = 1; f < c; f += 1)
			u = 1 / c * f, v = m((1 - u) * k) / m(k), x = m(u * k) / m(k), u = v * p(r) * p(a) + x * p(s) * p(b), t = v * p(r) *
			m(a) + x * p(s) * m(b), v = v * m(r) + x * m(s), v = q(v, l(n(u, 2) + n(t, 2))), u = q(t, u), b > a ? (u < a && (u +=
				2 * e), u > b && (u -= 2 * e)) :
			(u > a && (u -= 2 * e), u < b && (u += 2 * e)), d.push(new g.U(u * h, v * h, !0));
		return d
	};
	g.U.$c({
		mO: "getLng",
		iO: "getLat",
		add: "add",
		Wa: "subtract",
		Uc: "divideBy",
		Jd: "multiplyBy",
		le: "distance",
		offset: "offset",
		eb: "equals",
		toString: "toString"
	});
	g.ue = g.Z.extend({
		r: function() {
			this.CLASS_NAME = "AMap.Bounds";
			var a = null,
				b = null;
			if (1 === arguments.length && arguments[0] instanceof Array) a = new g.U(arguments[0][0], arguments[0][1], !0),
				b = new g.U(arguments[0][2], arguments[0][3], !0);
			else if (2 === arguments.length) a = g.a.Fa(arguments[0]), b = g.a.Fa(arguments[1]);
			else if (4 === arguments.length) a = new g.U(arguments[0], arguments[1]), b = new g.U(arguments[2], arguments[3]);
			else if (0 === arguments.length) a = new g.U(-180, -90), b = new g.U(180, 90);
			else throw "Invalid Object: Bounds(" +
				arguments.join(",") + ")";
			this.oc = a;
			this.ac = b
		},
		zt: function() {
			return this.oc
		},
		Uw: function() {
			return this.ac
		},
		mj: function() {
			return new g.U(this.oc.R, this.ac.Q, !0)
		},
		wn: function() {
			return new g.U(this.ac.R, this.oc.Q, !0)
		},
		contains: function(a) {
			var b = this.oc,
				c = this.ac,
				d;
			if (a instanceof g.Xn) return this.yR().contains(a);
			a instanceof g.ue ? (d = a.oc, a = a.ac) : d = a = g.a.Fa(a);
			var e = d.R,
				f = b.R,
				h = a.R,
				k = c.R;
			f > k && (k += 360, 0 > e && (e += 360), 0 > h && (h += 360));
			return d.Q >= b.Q && a.Q <= c.Q && e >= f && h <= k
		},
		$f: function(a) {
			var b = this.oc,
				c = this.ac,
				d = a.oc;
			a = a.ac;
			var e = a.R >= b.R && d.R <= c.R;
			return a.Q >= b.Q && d.Q <= c.Q && e
		},
		Rh: function() {
			return new g.U(this.oc.R > this.ac.R ? (this.oc.R + this.ac.R + 360) / 2 % 360 : (this.oc.R + this.ac.R) / 2, (
				this.oc.Q + this.ac.Q) / 2)
		},
		extend: function(a) {
			this.oc.R = Math.min(this.oc.R, a.R);
			this.oc.Q = Math.min(this.oc.Q, a.Q);
			this.ac.R = Math.max(this.ac.R, a.R);
			this.ac.Q = Math.max(this.ac.Q, a.Q);
			return this
		},
		hsa: function(a) {
			return this.extend(a.oc).extend(a.ac)
		},
		toString: function() {
			return this.oc.toString() + ";" + this.ac.toString()
		},
		jb: function() {
			return new g.ue(this.oc.jb(),
				this.ac.jb())
		},
		eb: function(a) {
			return a instanceof g.ue ? this.oc.eb(a.oc) && this.ac.eb(a.ac) : !1
		},
		Ii: function() {
			return Math.abs(this.ac.R - this.oc.R)
		},
		Gi: function() {
			return Math.abs(this.oc.Q - this.ac.Q)
		},
		yR: function(a) {
			var b = [this.zt(), this.wn(), this.Uw(), this.mj()];
			a && b.push(this.zt());
			return new g.Xn(b)
		},
		ura: function(a) {
			return new g.df(a.Yb(this.mj(), 20), a.Yb(this.wn(), 20))
		},
		eO: function(a, b) {
			return this.yR(b).eO(a)
		},
		bO: function(a) {
			return this.ura(a).Rh()
		}
	});
	g.ue.$c({
		zt: "getSouthWest",
		Uw: "getNorthEast",
		mj: "getNorthWest",
		wn: "getSouthEast",
		contains: "contains",
		$f: "intersects",
		Rh: "getCenter",
		extend: "extend"
	});
	g.G = g.Z.extend({
		r: function(a, b, c) {
			if (isNaN(a) || isNaN(b)) throw "Invalid Object: Pixel(" + a + ", " + b + ")";
			this.x = c ? Math.round(a) : Number(a);
			this.y = c ? Math.round(b) : Number(b)
		},
		Ye: function() {
			return this.x
		},
		$d: function() {
			return this.y
		},
		add: function(a, b) {
			return new g.G(this.x + a.x, this.y + a.y, b)
		},
		Wa: function(a, b) {
			return new g.G(this.x - a.x, this.y - a.y, b)
		},
		Uc: function(a, b) {
			return new g.G(this.x / a, this.y / a, b)
		},
		Jd: function(a, b) {
			return new g.G(this.x * a, this.y * a, b)
		},
		le: function(a) {
			var b = a.x - this.x;
			a = a.y - this.y;
			return Math.sqrt(b *
				b + a * a)
		},
		floor: function() {
			return new g.G(Math.floor(this.x), Math.floor(this.y))
		},
		round: function() {
			return new g.G(this.x, this.y, !0)
		},
		eb: function(a) {
			return a instanceof g.G && this.x === a.x && this.y === a.y
		},
		jb: function(a) {
			return new g.G(this.x, this.y, a)
		},
		toString: function() {
			return this.x + "," + this.y
		},
		Dl: function() {
			return [this.x, this.y]
		},
		length: function() {
			return Math.sqrt(this.x * this.x + this.y * this.y)
		},
		direction: function() {
			var a = this.x,
				b = this.y;
			if (0 === a && 0 === b) return null;
			if (0 === a) return 0 < b ? Math.PI / 2 : -Math.PI /
				2;
			var c = 180 * Math.atan(b / a) / Math.PI;
			return 0 > a && 0 < b ? c + 180 : 0 > a && 0 > b ? c + 180 : 0 < a && 0 > b ? c + 360 : c
		},
		at: function(a) {
			var b = this.length(),
				c = a.length();
			return b && c ? 180 * Math.acos((this.x * a.x + this.y * a.y) / c / b) / Math.PI : null
		},
		nia: function(a) {
			var b = this.length(),
				c = a.length();
			return b && c ? (this.x * a.x + this.y * a.y) / c / b : null
		},
		toFixed: function(a) {
			this.x = g.a.Wc(this.x, a);
			this.y = g.a.Wc(this.y, a);
			return this
		}
	});
	g.G.$c({
		Ye: "getX",
		$d: "getY",
		add: "add",
		Wa: "subtract",
		Uc: "divideBy",
		Jd: "multiplyBy",
		le: "distance",
		eb: "equals",
		toString: "toString"
	});
	g.gd = g.Z.extend({
		r: function(a, b, c) {
			if (isNaN(a) || isNaN(b)) throw "Invalid Object: Size(" + a + ", " + b + ")";
			this.width = c ? Math.round(a) : Number(a);
			this.height = c ? Math.round(b) : Number(b)
		},
		jb: function() {
			return new g.gd(this.width, this.height)
		},
		Ii: function() {
			return this.width
		},
		Gi: function() {
			return this.height
		},
		DC: function() {
			return new g.G(this.Ii(), this.Gi())
		},
		contains: function(a) {
			return Math.abs(a.x) <= Math.abs(this.width) && Math.abs(a.y) <= Math.abs(this.height)
		},
		eb: function(a) {
			return a instanceof g.gd && this.width ===
				a.width && this.height === a.height
		},
		toString: function() {
			return this.Ii() + "," + this.Gi()
		}
	});
	g.gd.$c({
		Ii: "getWidth",
		Gi: "getHeight",
		toString: "toString"
	});
	g.Xn = g.Z.extend({
		r: function(a) {
			this.CLASS_NAME = "AMap.ArrayBounds";
			a = g.a.Fa(a);
			this.path = [];
			for (var b = 0; b < a.length; b += 1) this.path.push([a[b].R, a[b].Q]);
			this.bounds = this.Qd = a
		},
		contains: function(a, b) {
			if (a instanceof g.Xn) return g.Np.isRingInRing(a.path, this.path);
			a instanceof g.G ? a = [a.x, a.y] : a instanceof g.U && (a = [a.R, a.Q]);
			return g.ed.ud(a, this.path, b)
		},
		toBounds: function() {
			for (var a = new g.ue(180, 90, -180, -90), b = this.Qd.length - 1; 0 <= b; b -= 1) a.extend(this.Qd[b]);
			return a
		},
		eO: function(a) {
			for (var b = [], c = 0; c <
				this.path.length; c += 1) b[c] = a.Yb(this.path[c], 20);
			return b
		},
		bO: function(a) {
			return this.toBounds().bO(a)
		},
		Rh: function() {
			return this.toBounds().Rh()
		}
	});
	g.Xn.$c({
		contains: "contains",
		Rh: "getCenter"
	});
	g.k6 = g.Xn.extend({
		r: function(a) {
			this.CLASS_NAME = "AMap.CoordsBounds";
			this.path = a;
			if (a[0] instanceof g.G) {
				this.path = [];
				for (var b = 0; b < a.length; b += 1) this.path.push([a[b].x, a[b].y])
			}
			this.bounds = this.Qd = a
		}
	});
	g.df = g.Z.extend({
		r: function() {
			if (2 === arguments.length) this.Sb = arguments[0], this.jd = arguments[1];
			else if (1 === arguments.length && arguments[0] instanceof Array || 4 === arguments.length) {
				var a = arguments[0] instanceof Array ? arguments[0] : arguments;
				this.Sb = new g.G(a[0], a[1]);
				this.jd = new g.G(a[2], a[3])
			} else throw "Invalid Object: PixelBounds(" + arguments.join(",") + ")";
		},
		Rh: function(a) {
			return new g.G((this.Sb.x + this.jd.x) / 2, (this.Sb.y + this.jd.y) / 2, a)
		},
		contains: function(a) {
			var b;
			a instanceof g.df ? (b = a.Sb, a = a.jd) : b =
				a;
			return b.x > this.Sb.x && a.x < this.jd.x && b.y > this.Sb.y && a.y < this.jd.y
		},
		Ii: function() {
			return this.jd.x - this.Sb.x
		},
		Gi: function() {
			return this.jd.y - this.Sb.y
		},
		$f: function(a, b) {
			b || 0 === b || (b = 20);
			var c = this.Sb,
				d = this.jd,
				e = a.Sb,
				f = a.jd,
				h = f.y >= c.y - b && e.y <= d.y + b;
			return f.x >= c.x - b && e.x <= d.x + b && h
		},
		toString: function() {
			return this.Sb + ";" + this.jd
		},
		jb: function() {
			return new g.df(this.Sb.jb(), this.jd.jb())
		}
	});
	g.H = {};
	g.H.LM = function(a) {
		for (var b = [Infinity, Infinity, -Infinity, -Infinity], c = 0, d = a.length; c < d; c += 1) g.H.dG(b, a[c]);
		return b
	};
	g.H.SY = function(a, b, c) {
		var d = Math.min.apply(null, a);
		a = Math.max.apply(null, a);
		var e = Math.min.apply(null, b);
		b = Math.max.apply(null, b);
		return g.H.kia(d, a, e, b, c)
	};
	g.H.buffer = function(a, b) {
		a[0] -= b;
		a[1] -= b;
		a[2] += b;
		a[3] += b
	};
	g.H.jb = function(a) {
		return a.slice()
	};
	g.H.ud = function(a, b) {
		return a[0] <= b[0] && b[0] <= a[2] && a[1] <= b[1] && b[1] <= a[3]
	};
	g.H.yZ = function(a, b) {
		return a[0] <= b[0] && b[2] <= a[2] && a[1] <= b[1] && b[3] <= a[3]
	};
	g.H.Jva = function() {
		return [Infinity, Infinity, -Infinity, -Infinity]
	};
	g.H.kia = function(a, b, c, d, e) {
		return "undefined" !== typeof e ? (e[0] = a, e[2] = b, e[1] = c, e[3] = d, e) : [a, c, b, d]
	};
	g.H.empty = function(a) {
		a[0] = a[1] = Infinity;
		a[2] = a[3] = -Infinity;
		return a
	};
	g.H.eb = function(a, b) {
		return a[0] === b[0] && a[2] === b[2] && a[1] === b[1] && a[3] === b[3]
	};
	g.H.extend = function(a, b) {
		b[0] < a[0] && (a[0] = b[0]);
		b[2] > a[2] && (a[2] = b[2]);
		b[1] < a[1] && (a[1] = b[1]);
		b[3] > a[3] && (a[3] = b[3])
	};
	g.H.dG = function(a, b) {
		b[0] < a[0] && (a[0] = b[0]);
		b[0] > a[2] && (a[2] = b[0]);
		b[1] < a[1] && (a[1] = b[1]);
		b[1] > a[3] && (a[3] = b[1])
	};
	g.H.wwa = function(a) {
		return [a[0], a[1]]
	};
	g.H.xwa = function(a) {
		return [a[2], a[1]]
	};
	g.H.Rh = function(a) {
		return [(a[0] + a[2]) / 2, (a[1] + a[3]) / 2]
	};
	g.H.Jwa = function(a, b, c, d, e) {
		var f = b * d[0] / 2;
		d = b * d[1] / 2;
		b = Math.cos(c);
		c = Math.sin(c);
		f = [-f, -f, f, f];
		d = [-d, d, -d, d];
		var h, k, l;
		for (h = 0; 4 > h; h += 1) k = f[h], l = d[h], f[h] = a[0] + k * b - l * c, d[h] = a[1] + k * c + l * b;
		return g.H.SY(f, d, e)
	};
	g.H.Gi = function(a) {
		return a[3] - a[1]
	};
	g.H.Wwa = function(a) {
		return [a[2] - a[0], a[3] - a[1]]
	};
	g.H.$wa = function(a) {
		return [a[0], a[3]]
	};
	g.H.axa = function(a) {
		return [a[2], a[3]]
	};
	g.H.Ii = function(a) {
		return a[2] - a[0]
	};
	g.H.$f = function(a, b) {
		return a[0] <= b[2] && a[2] >= b[0] && a[1] <= b[3] && a[3] >= b[1]
	};
	g.H.bp = function(a) {
		return a[2] < a[0] || a[3] < a[1]
	};
	g.H.normalize = function(a, b) {
		return [(b[0] - a[0]) / (a[2] - a[0]), (b[1] - a[1]) / (a[3] - a[1])]
	};
	g.H.nza = function(a, b) {
		var c = (a[2] - a[0]) / 2 * (b - 1),
			d = (a[3] - a[1]) / 2 * (b - 1);
		a[0] -= c;
		a[2] += c;
		a[1] -= d;
		a[3] += d
	};
	g.H.touches = function(a, b) {
		return g.H.$f(a, b) && (a[0] === b[2] || a[2] === b[0] || a[1] === b[3] || a[3] === b[1])
	};
	g.H.transform = function(a, b, c) {
		a = [a[0], a[1], a[0], a[3], a[2], a[1], a[2], a[3]];
		b(a, a, 2);
		return g.H.SY([a[0], a[2], a[4], a[6]], [a[1], a[3], a[5], a[7]], c)
	};
	g.ue.ub({
		r: function() {
			var a = g.ue.prototype.r;
			return function() {
				a.apply(this, arguments);
				this.southwest = this.oc;
				this.northeast = this.ac
			}
		}(),
		extend: function() {
			var a = g.ue.prototype.extend;
			return function() {
				a.apply(this, arguments);
				this.oc.lng = this.oc.R;
				this.oc.lat = this.oc.Q;
				this.ac.lng = this.ac.R;
				this.ac.lat = this.ac.Q;
				return this
			}
		}()
	});
	g.U.ub({
		r: function() {
			var a = g.U.prototype.r;
			return function() {
				a.apply(this, arguments);
				this.lng = parseFloat(this.R.toFixed(6));
				this.lat = parseFloat(this.Q.toFixed(6))
			}
		}()
	});
	g.pD = g.Z.extend({
		r: function(a, b, c, d) {
			this.hT = a;
			this.wT = b;
			this.KT = c;
			this.eU = d
		},
		transform: function(a, b) {
			return this.eY(a.jb(), b)
		},
		eY: function(a, b) {
			b = b || 1;
			a.x = b * (this.hT * a.x + this.wT);
			a.y = b * (this.KT * a.y + this.eU);
			return a
		},
		jsa: function(a, b) {
			b = b || 1;
			return new g.G((a.x / b - this.wT) / this.hT, (a.y / b - this.eU) / this.KT)
		}
	});
	g.bo = g.Z.extend({
		r: function(a) {
			this.fJ = a.MAX_LATITUDE || 85.0511287798;
			a.project && a.unproject && (this.Yb = a.project, this.wh = a.unproject)
		}
	});
	g.bo.GS = {
		Yb: function(a) {
			return new g.G(a.R, a.Q)
		},
		wh: function(a, b) {
			return new g.U(a.x, a.y, b)
		}
	};
	g.bo.k7 = new g.bo({
		MAX_LATITUDE: 85.0511287798,
		project: function(a) {
			var b = Math.PI / 180,
				c = this.fJ,
				c = Math.max(Math.min(c, a.Q), -c);
			a = a.R * b;
			b = Math.log(Math.tan(Math.PI / 4 + c * b / 2));
			return new g.G(a, b, !1)
		},
		unproject: function(a, b) {
			var c = 180 / Math.PI;
			return new g.U(a.x * c, (2 * Math.atan(Math.exp(a.y)) - Math.PI / 2) * c, b)
		}
	});
	g.bo.HS = {
		fJ: 85.0840591556,
		pJ: 6356752.3142,
		oJ: 6378137,
		Yb: function(a) {
			var b = Math.PI / 180,
				c = this.fJ,
				d = Math.max(Math.min(c, a.Q), -c),
				e = this.oJ,
				c = this.pJ;
			a = a.R * b * e;
			b *= d;
			e = c / e;
			e = Math.sqrt(1 - e * e);
			d = e * Math.sin(b);
			d = Math.pow((1 - d) / (1 + d), 0.5 * e);
			b = Math.tan(0.5 * (0.5 * Math.PI - b)) / d;
			b = -c * Math.log(b);
			return new g.G(a, b)
		},
		wh: function(a, b) {
			for (var c = 180 / Math.PI, d = this.oJ, e = this.pJ, f = a.x * c / d, d = e / d, d = Math.sqrt(1 - d * d), e =
					Math.exp(-a.y / e), h = Math.PI / 2 - 2 * Math.atan(e), k = 15, l = 0.1; 1E-7 < Math.abs(l) && (k -= 1, 0 < k);)
				l = d * Math.sin(h),
				l = Math.PI / 2 - 2 * Math.atan(e * Math.pow((1 - l) / (1 + l), 0.5 * d)) - h, h += l;
			return new g.U(f, h * c, b)
		}
	};
	g.yh = {};
	g.yh.XC = {
		CB: function(a, b) {
			var c = this.lf.Yb(a),
				d = this.scale(b);
			return this.HC.eY(c, d)
		},
		cC: function(a, b, c) {
			b = this.scale(b);
			a = this.HC.jsa(a, b);
			return this.lf.wh(a, c)
		},
		Yb: function(a) {
			return this.lf.Yb(a)
		},
		scale: function(a) {
			return 256 << a
		},
		To: function(a) {
			return 12756274 * Math.PI / (256 * Math.pow(2, a))
		}
	};
	g.yh.$I = g.extend({}, g.yh.XC, {
		code: "EPSG:3857",
		lf: g.bo.k7,
		HC: new g.pD(0.5 / Math.PI, 0.5, -0.5 / Math.PI, 0.5),
		Yb: function(a) {
			return this.lf.Yb(a).Jd(6378137)
		}
	});
	g.yh.pS = g.extend({}, g.yh.XC, {
		code: "EPSG:3395",
		lf: g.bo.HS,
		HC: function() {
			var a = g.bo.HS;
			return new g.pD(0.5 / (Math.PI * a.oJ), 0.5, -0.5 / (Math.PI * a.pJ), 0.5)
		}()
	});
	g.yh.qS = g.extend({}, g.yh.XC, {
		code: "EPSG:4326",
		lf: g.bo.GS,
		HC: new g.pD(1 / 360, 0.5, -1 / 360, 0.25)
	});
	g.yh.Hta = g.extend({}, g.yh.XC, {
		lf: g.bo.GS,
		HC: new g.pD(1, 0, 1, 0)
	});
	g.fH = {
		Yb: function(a, b) {
			a = g.a.Fa(a);
			return this.Bi.CB(a, b || this.get("zoom"))
		},
		wh: function(a, b, c) {
			return this.Bi.cC(a, b || this.get("zoom"), c)
		},
		Kxa: function(a, b) {
			return this.Yb(a, b)
		},
		twa: function(a, b) {
			return this.wh(a, b)
		},
		Do: function(a, b, c) {
			g.c.add(this, "containerToLngLat");
			var d = this.get("size").DC().Uc(2);
			if (a.eb(d) && !c) return this.get("center");
			a = this.Xf(a, b, c);
			return this.Ee(a)
		},
		er: function(a, b) {
			g.c.add(this, "lngLatToContainer");
			var c = 0;
			b && (c = "string" === typeof b ? Math.round(parseFloat(b) / 0.14929107086948487) :
				b);
			var d = this.Rb(a);
			return this.De(d, null, c)
		},
		Rb: function(a) {
			a = g.a.Fa(a);
			return this.Yb(a, 20)
		},
		Ee: function(a) {
			return a ? this.wh(a, 20) : a
		},
		bH: function(a) {
			a = g.a.Fa(a);
			return this.Yb(a, 20).Wa(g.a.Ub)
		},
		I1: function(a, b) {
			b || (a = g.a.Fa(a));
			var c = [],
				d = !1;
			void 0 === a[0].length && (d = !0);
			for (var c = [], e = 0, f = a.length; e < f; e += 1)
				if (d) {
					var h = this.Yb(a[e], 20).Wa(g.a.Ub);
					c[e] = [h.x, h.y]
				} else c[e] = this.I1(a[e], !0);
			return c
		},
		Pja: function(a) {
			return this.wh(a.add(g.a.Ub), 20)
		},
		uwa: function(a) {
			return this.De(a.add(g.a.Ub))
		},
		Cwa: function(a) {
			return a ?
				this.Yb(this.get("center"), a) : this.get("centerPixel")
		},
		oua: function(a) {
			return (new g.G(a.x + 2.0037508342789244E7, 2.0037508342789244E7 - a.y)).Uc(0.14929107086948487)
		},
		G2: function(a) {
			return new g.G(0.14929107086948487 * a.x - 2.0037508342789244E7, 2.0037508342789244E7 - 0.14929107086948487 * a.y)
		}
	};
	z.sD = g.Z.extend({
		ga: [g.na, g.He],
		D: {
			center: new g.U(116.397128, 39.916527),
			zoom: 13,
			rotation: 0,
			crs: "EPSG3857"
		},
		r: function(a) {
			this.CLASS_NAME = "AMap.View2D";
			g.c.qa(this, a);
			a = a || {};
			a.center && (a.center = g.a.Fa(a.center));
			this.D = a
		}
	});
	z.Db = g.Z.extend({
		ga: [g.na, g.He, g.fH],
		D: {
			features: "all",
			showLabel: !0,
			dragEnable: !0,
			showIndoorMap: g.l.Y ? !1 : !0,
			lang: "zh_cn",
			keyboardEnable: !0,
			doubleClickZoom: !0,
			gridMapForeign: !1,
			scrollWheel: !0,
			zoomEnable: !0,
			jogEnable: !0,
			continuousZoomEnable: !0,
			resizeEnable: !1,
			animateEnable: !0,
			rotateEnable: !1,
			labelzIndex: 99,
			showFog: !0,
			touchZoom: !0,
			zooms: [3, g.l.Y ? g.l.md ? 19 : 20 : 18],
			defaultCursor: "",
			limitBounds: null,
			logoUrl: g.w.tb + "/theme/v1.3/logo@1x.png",
			logoUrlRetina: g.w.tb + "/theme/v1.3/logo@2x.png",
			copyright: "\x3c!--v1.4.11--\x3e &copy " +
				(new Date).getFullYear() + " AutoNavi ",
			isHotspot: !g.l.Y,
			baseRender: g.l.LY,
			overlayRender: g.l.eoa,
			mapStyle: "normal",
			showBuildingBlock: g.l.kf,
			crs: "EPSG3857",
			rotation: 0,
			pitch: 0,
			yaw: 0,
			scale: 1,
			center: new g.U(116.397128, 39.916527),
			zoom: 13,
			detectRetina: !0,
			pitchEnable: !1,
			buildingAnimation: !1,
			maxPitch: 83,
			turboMode: !0,
			preloadMode: !0,
			workerMode: !0
		},
		poiOnAMAP: function(a) {
			g.c.add(this, "poiOnAMAP");
			var b = {},
				c = g.a.Fa(a.location);
			b.id = a.id;
			c && (b.y = c.Q, b.x = c.R);
			b.name = a.name;
			b.address = a.address;
			g.zh.Gr(g.zh.W_(b))
		},
		detailOnAMAP: function(a) {
			g.c.add(this, "detailOnAMAP");
			var b = {},
				c = g.a.Fa(a.location);
			b.id = a.id;
			c && (b.y = c.Q, b.x = c.R);
			b.name = a.name;
			g.zh.Gr(g.zh.U_(b))
		},
		setLabelzIndex: function(a) {
			g.c.add(this, "setLabelzIndex");
			return this.set("labelzIndex", a)
		},
		getLabelzIndex: function() {
			return this.get("labelzIndex", null, !0)
		},
		setMapStyle: function(a) {
			g.c.add(this, "setMapStyle"); - 1 === a.indexOf("amap://styles/") ? (this.set("styleUrl", "", !0), this.set(
				"mapStyle", a)) : this.set("styleUrl", a);
			this.DP()
		},
		getMapStyle: function() {
			return this.get("styleUrl") ||
				this.get("mapStyle", null, !0)
		},
		getFeatures: function() {
			return this.get("features", null, !0)
		},
		setFeatures: function(a) {
			g.c.add(this, "setFeatures");
			this.set("features", a)
		},
		setLang: function(a) {
			g.c.add(this, "setLang", a);
			"en" !== a && "zh_cn" !== a && "zh_en" !== a || a === this.get("lang", null, !0) || (this.set("lang", a), this.oj &&
				this.oj.I3(this))
		},
		getLang: function() {
			return this.get("lang", null, !0)
		},
		setCity: function(a, b) {
			g.c.add(this, "setCity");
			var c = this;
			(new g.bb.qb(g.w.Kd + "/v3/config/district?subdistrict=0&extensions=all&key=" +
				g.w.key + "&s=rsv3&output=json&keywords=" + a, {
					callback: "callback"
				})).h("complete", function(d) {
				var e = d.districts;
				if (e && e.length) {
					d = e[0];
					/[^\w]+/.test(a) && (e = g.a.find(e, function(b) {
						return b.name === a
					})) && e !== d && (d = e);
					try {
						var f = d.center.split(","),
							h;
						switch (d.level) {
							case "city":
								h = 10;
								break;
							case "province":
								h = 7;
								break;
							case "district":
								h = 12;
								break;
							case "country":
								h = 4;
								break;
							default:
								h = 12
						} - 1 !== d.name.indexOf("\u5e02") && (h = 10);
						c.B = !0;
						c.setZoomAndCenter(h, new g.U(f[0], f[1]), !0);
						c.B = !1;
						b && b.call(c, f, h)
					} catch (k) {}
				}
			}, this)
		},
		getScreenShot: function(a, b) {
			g.c.add(this, "getScreenShot");
			return this.map && g.l.lk ? this.map.d0(a, b) : ""
		},
		getCity: function(a, b) {
			g.c.add(this, "getCity");
			var c = g.w.Kd + "/v3/geocode/regeo?&extensions=&&key=" + g.w.key + "&s=rsv3&output=json&location=" + (b || this
				.get("center", null, !0));
			(new g.bb.qb(c, {
				callback: "callback",
				lw: !0,
				Cc: "REGEO"
			})).h("complete", function(b) {
				b = b.regeocode.addressComponent;
				a({
					province: b.province,
					city: b.city instanceof Array ? "" : b.city,
					citycode: b.citycode instanceof Array ? "" : b.citycode,
					district: b.district instanceof
					Array ? "" : b.district
				})
			}, this)
		},
		r: function(a, b) {
			b = g.extend({}, b);
			this.id = g.a.Bb(this);
			this.CLASS_NAME = "AMap.Map";
			g.c.qa(this, b);
			this.B = !0;
			b = b || {};
			b.mapStyle && -1 !== b.mapStyle.indexOf("amap://styles/") ? (b.styleUrl = b.mapStyle, delete b.mapStyle) : b.styleUrl =
				"amap://styles/normal";
			b.bgColor && g.extend(g.w.je, b.bgColor);
			b.maxPitch && (b.maxPitch = Math.min(this.D.maxPitch, Math.max(b.maxPitch, 0)));
			b.pitch && (b.pitch = Math.min(b.maxPitch || this.D.maxPitch, Math.max(b.pitch, 0)));
			"3D" !== b.viewMode && (b.pitch = 0);
			g.w.yF =
				b.buildingColor || null;
			b.mobile && (g.l.Y = !0);
			b.noPoi && (g.w.rna = !0);
			b.editEnable && (b.nolimg = !0, b.showIndoorMap = !1);
			void 0 !== b.nolimg && (b.nolimg_param = b.nolimg);
			"3D" === b.viewMode && g.l.Ap && void 0 === b.showBuildingBlock && !0 === b.showBuildingBlock;
			this.vm = !!b.enableSocket;
			b.server && (g.w.Kd = b.server);
			b.vdataUrl && (g.w.ry = b.vdataUrl);
			if ("string" === typeof a) {
				if (a = this.J = document.getElementById(a), !a) return
			} else "DIV" === a.tagName && (this.J = a);
			if (this.J.KJ) {
				var c = this.J.KJ;
				c.B = !0;
				c.destroy();
				c.B = !1
			}
			g.xe.Re.start({
				id: this.id,
				J: this.J
			});
			this.J.KJ = this;
			var c = this.D.zooms[1],
				d = this.D.zooms[0];
			b.zooms ? (b.zooms[0] = Math.max(d, b.zooms[0]), !0 === b.expandZoomRange && (c = g.l.Y ? g.l.md ? 19 : 20 : 20),
				b.zooms[1] = Math.min(c, b.zooms[1])) : b.zooms = [d, c];
			b.forceZooms && (b.zooms = b.forceZooms);
			b = this.gha(b);
			c = this.getSize(!0);
			b.center && (b.center = g.a.Fa(b.center));
			this.Bi = this.lia(b.crs || this.D.crs, b.center || this.D.center);
			this.sga(c, b);
			d = b.lang;
			"en" !== d && "zh_cn" !== d && "zh_en" !== d && (b.lang = "zh_cn");
			g.g.Pf || (b.rotation = 0, b.pitch = 0, b.rotateEnable = !1);
			g.l.Mt ? !1 !== b.workerMode && (z.Db.ds ? (b.workerMode = !1, z.Db.ds++) : z.Db.ds = 1) : (b.workerMode = !1, b
				.preloadMode = !1);
			b.layers && (d = b.layers, delete b.layers, b.layers = d);
			b.baseRender = g.l.LY;
			b.forceVector && (b.baseRender = g.l.kf ? "vw" : "v");
			b.disableVector && (b.baseRender = "d");
			"dom" === b.renderer && (b.baseRender = "d", b.overlayRender = "d");
			c = Math.max(c.width, c.height);
			g.l.ha && (c *= Math.min(2, window.devicePixelRatio || 1));
			"vw" === b.baseRender && c > g.l.Uma && (b.baseRender = "dv");
			"d" == b.baseRender && b.vectorMapForeign && (b.vectorMapForeign = !1, b.gridMapForeign = !0);
			g.a.Ib(this, b);
			this.eg(this.D);
			"rotateEnable" in b || "3D" !== b.viewMode || !g.l.Ap || this.set("rotateEnable", !0);
			"pitchEnable" in b || "3D" !== b.viewMode || !g.l.Ap || this.set("pitchEnable", !0);
			c = this.get("zoom", null, !0);
			d = this.get("zooms");
			c > d[1] ? c = d[1] : c < d[0] && (c = d[0]);
			this.set("zoom", c);
			this.D.zoom = c;
			this.mia(this.D);
			this.YM();
			var e = this;
			this.eg({
				overlays: [],
				infos: {},
				controls: {}
			});
			var f = [];
			(b.gridMapForeign || b.vectorMapForeign) && f.push("gridmap");
			b.vectorMapForeign && g.l.qw && f.push("MVT",
				"vectorForeign");
			b.forceVector && (f.push("vectorlayer"), f.push("overlay"));
			"3D" === b.viewMode && g.l.Ap ? f.push("Map3D") : g.l.lk && f.push("cmng", "labelcanvas");
			b.editEnable && f.push("edit");
			g.l.lk && (f.push("AMap.IndoorMap"), -1 !== f.indexOf("Map3D") && f.push("AMap.IndoorMap3D"));
			this.ha = g.l.ha && this.get("detectRetina");
			this.z5(b);
			this.B = !1;
			this.Fma(function() {
				g.ob.Vg(f, function() {
					if (!e.get("destroy")) {
						var b = new g.Db(a, e);
						if (g.Ae) {
							var c = (g.Ae[0] || g.Ae).stylemaps["50001:1"].browserStyle[0].split("&");
							b.zD = [c[0],
								c[4]
							]
						}
						b.Ie("zoom center centerCoords rotation yaw pitch resolution".split(" "), e.view, !0);
						b.h("complete", function() {
							this.q("complete")
						}, e, !0);
						b.Bi = e.Bi;
						e.Ie(["zoomSlow", "panTo", "targetLevel", "render"], b);
						b.Ie(["size", "bounds"], e);
						e.loaded = !0;
						e.q("coreMapCreated");
						g.l.lk && e.Vfa();
						e.B = !0;
						"3D" === e.view.type && (e.AmbientLight || (e.AmbientLight = new g.$u.gS([1, 1, 1], 0.9)), e.DirectionLight ||
							(e.DirectionLight = new g.$u.oS([0, -1, 1], [1, 1, 1], 0.1)));
						e.B = !1
					}
				})
			})
		},
		Fma: function(a) {
			function b() {
				var a = AMap.anole,
					b = {},
					c = [],
					d = 0,
					e = void 0;
				if (a) {
					for (var a = a.replace(/\?/g, ":").replace(/\//g, "&"), e = a.split(""), f = 0, q = e.length; f < q; f++) void 0 ===
						b[e[f]] && (b[e[f]] = d++, c.push(e[f]));
					c.reverse();
					a = a.replace(/./g, function(a) {
						return c[b[a]]
					});
					g.Ae = eval(a);
					e = a = c = b = null;
					delete AMap.anole
				}
			}
			if (g.l.oe || g.Ae) a();
			else {
				var c = !0;
				try {
					var d = JSON.parse(localStorage.getItem("_AMap_anole"));
					d && d.version === g.l.sf && d.script ? eval(d.script) : c = !1
				} catch (e) {
					c = !1
				}
				if (c) b(), a();
				else {
					var f = document.createElement("script");
					f.Lva = "anonymous";
					f.id = "amap_anole_js";
					f.src = g.w.nc + "://vdata.amap.com/style?v=" + g.w.kq + "&key=" + g.w.key + "&mapstyle=normal";
					c = document;
					(c.head || c.getElementsByTagName("head")[0] || c.body).appendChild(f);
					f.onload = function() {
						if (!g.Ae) {
							if (g.l.fr) try {
								var c = {
									version: g.l.sf,
									script: "AMap['anole']=" + JSON.stringify(AMap.anole)
								};
								localStorage.setItem("_AMap_anole", JSON.stringify(c))
							} catch (d) {}
							b()
						}
						a();
						f.parentNode.removeChild(f)
					}
				}
			}
		},
		getViewMode_: function() {
			return this.view.type
		},
		Vja: function(a, b, c) {
			var d = new g.U(a[4], a[5]);
			if ((a = new g.ue(a[0], a[1],
					a[2], a[3])) && b && d) {
				for (var e = c[1]; e > c[0]; e -= 1) {
					var f = this.Yb(a.oc, e),
						h = this.Yb(a.ac, e);
					if (Math.abs(h.x - f.x) < b.width && Math.abs(f.y - h.y) < b.height) break
				}
				return [d, Math.min(e + 1, c[1])]
			}
			return null
		},
		sga: function(a, b) {
			if (!(b && b.center && b.zoom)) {
				var c = this.Vja(g.w.Qd, a, b.zooms);
				b.center = b.center || c && c[0];
				"number" !== typeof b.zoom && (b.zoom = c && c[1])
			}
		},
		lia: function(a, b) {
			if (b instanceof g.U) {
				if ("string" === typeof a) {
					switch (a) {
						case "EPSG3395":
							return g.yh.pS;
						case "EPSG4326":
							return g.yh.qS
					}
					return g.yh.$I
				}
				if (a.pointToLngLat &&
					a.lngLatToPoint) return {
					cC: a.pointToLngLat,
					CB: a.lngLatToPoint,
					To: a.getResolution
				};
				throw "illegal projection";
			}
			var c = this.get("zoom", null, !0);
			return {
				To: function(a) {
					return Math.pow(2, c - a)
				},
				CB: function() {},
				cC: function() {}
			}
		},
		Iqa: function(a, b) {
			this.iv && this.iv.stop();
			var c = ["pitch", "rotation", "zoom", "center"],
				d = {},
				e = !1,
				f;
			for (f in a)
				if (a.hasOwnProperty(f) && -1 !== g.a.indexOf(c, f)) {
					var h = this.get(f);
					void 0 === h || h === a[f] || h.eb && h.eb(a[f]) || (d[f] = this.get(f), e = !0)
				} e && (this.iv = new g.Vi(d, a, null, 0), this.iv.transition =
				function(a, c, e) {
					e /= b || 300;
					if (1 <= e) return c;
					var f = {},
						h;
					for (h in d) d.hasOwnProperty(h) && (f[h] = "center" === h ? a[h].add(c[h].Wa(a[h]).Jd(e)) : a[h] + (c[h] - a[
						h]) * e);
					return f
				}, this.iv.kp = function(b) {
					b === a && (this.iv.stop(), this.nd = null);
					for (var c in b) b.hasOwnProperty(c) && ("center" === c ? (this.B = !0, this.setCenter(b[c], !0), this.B = !1) :
						this.set(c, b[c]))
				}, this.iv.Em(this))
		},
		mia: function(a) {
			"3D" === this.get("viewMode") && g.l.Ap ? (this.set("baseRender", "vw"), this.view = new g.zJ(this, a)) : this.view =
				new g.sD(this, a);
			this.M0()
		},
		M0: function() {
			this.Wh = "d" < this.get("baseRender") || "3D" === this.view.type
		},
		featuresChanged: function() {
			this.YM()
		},
		DP: function() {
			this.YM();
			this.hR()
		},
		hR: function() {
			if (this.rl) {
				var a = !0;
				this.B = !0;
				var b = this.getMapStyle();
				if (!1 === this.get("showIndoorMap") || "normal" !== b && "amap://styles/normal" !== b) a = !1;
				b = this.getLayers();
				this.B = !1;
				for (var c in b) b.hasOwnProperty(c) && "AMap.IndoorMap" === b[c].CLASS_NAME && b[c] !== this.rl && (a = !1);
				this.rl.getMap() !== this && this.rl.setMap(this);
				this.rl.set("visible", a)
			}
		},
		YM: function() {
			this.z5();
			if (this.view && "3D" !== this.view.type) {
				var a = this.get("baseRender");
				if (a && !("dv" < a)) {
					var b = this.get("features", null, !0);
					this.B = !0;
					var c = this.getMapStyle();
					this.B = !1;
					var d = this.get("editEnable");
					b && c && (g.l.qw && (d || "all" !== b || "normal" !== c && "amap://styles/normal" !== c) ? (this.set(
						"baseRender", "v"), this.$P = a) : this.$P && (this.set("baseRender", this.$P), this.$P = null));
					this.M0()
				}
			}
		},
		Vfa: function() {
			var a = this;
			!a.rl && a.J && (a.indoorMap = a.rl = new AMap.IndoorMap({
				innerLayer: !0
			}), a.hR(), g.a.Fc(function() {
				a.q("indoor_create", {
					target: a
				});
				a.set("display")
			}))
		},
		layersChanged: function() {
			this.B = !0;
			var a = this.getLayers();
			this.oH = this.B = !1;
			for (var b = 0; b < a.length; b += 1) a[b].B = !0, a[b].getMap() !== this && a[b].setMap(this), a[b].B = !1, a[b]
				.oH && (this.oH = !0);
			this.hR()
		},
		getMapNumber: function() {
			if (this.map) return this.map.hC()
		},
		getAdcode: function() {
			g.c.add(this, "getAdcode");
			return g.w.Tfa
		},
		z5: function() {
			function a() {
				var a = !1;
				g.a.Mb(b.D.layers, function(b) {
					if (!b.SK && b.constructor === z.o.gb) return a = !0, !1
				}, b);
				if (g.a.ga(["d", "dv"], b.get("baseRender")) ||
					!g.a.ga(["normal", "amap://styles/normal"], b.get("mapStyle")) || "3D" === b.get("viewMode") && 0 < b.get(
						"pitch") || "all" !== b.get("features") || b.get("editEnable") || !b.get("turboMode")) a = !1;
				return a
			}
			if (!this.n3) {
				var b = this,
					c = a(),
					d = this.get("rasterLayer");
				if (d && !c) this.Bj(d), this.set("rasterLayer", void 0);
				else if (!d && c && this.get("layers")) {
					d = new z.o.gb({
						innerLayer: !0,
						map: this,
						Aj: !0,
						zIndex: 0
					});
					d.Vla = !0;
					if (this.D.layers) {
						var e = null;
						g.a.Mb(this.D.layers, function(a) {
							a instanceof z.o.gb && !a.SK && (null === e || a.get("zIndex") >
								e.get("zIndex")) && (e = a)
						});
						e && d.Ie(["zIndex", "opacity", "zooms", "visible"], e)
					}
					this.set("rasterLayer", d, !0)
				}
			}
		},
		gha: function(a) {
			a || (a = {});
			if (a.hasOwnProperty("defaultLayer")) {
				a.layers = [a.defaultLayer];
				var b = a.defaultLayer;
				b.AM = !0;
				this.set("defaultLayer", b, !0)
			}
			a.layers && 0 !== a.layers.length ? this.set("defaultLayer", a.layers[0], !0) : (b = new z.o.gb({
				innerLayer: !0
			}), a.layers = [b], b.AM = !0, this.set("defaultLayer", b, !0));
			if (b = a.view) b.D.rotation && (a.rotation = b.D.rotation), b.D.center && (a.center = b.D.center), b.D.zoom &&
				(a.zoom = Math.max(a.zooms[0], Math.min(a.zooms[1], b.D.zoom))), b.D.crs && (a.crs = b.D.crs);
			a.level && !a.zoom && (a.zoom = a.level);
			return a
		},
		setLimitBounds: function(a) {
			g.c.add(this, "setLimitBounds");
			a instanceof g.Xn && (a.B = !0, a = a.toBounds(), a.B = !1);
			a instanceof g.ue || (a = null);
			this.set("limitBounds", a)
		},
		clearLimitBounds: function() {
			g.c.add(this, "clearLimitBounds");
			this.set("limitBounds", null)
		},
		getLimitBounds: function() {
			g.c.add(this, "getLimitBounds");
			return this.get("limitBounds", null, !0)
		},
		mF: function(a) {
			var b =
				this.get("layers");
			0 <= g.a.indexOf(b, a) || (b.push(a), this.set("layers", b))
		},
		tA: function(a) {
			var b = this.get("overlays");
			0 <= g.a.indexOf(b, a) || (a instanceof z.A.Lm ? (this.get("overlays").push(a), this.tw instanceof z.A.Lm && (
				this.tw.B = !0, this.tw.close(), this.tw.B = !1), this.tw = a, this.set("contextmenu", a, !0)) : (a instanceof z
				.A.Ge && (this.sl instanceof z.A.Ge && this.Jx(this.sl), this.sl = a), this.get("overlays").push(a)), this.q(
				"overlays"))
		},
		Bj: function(a) {
			var b = this.get("layers");
			a = g.a.indexOf(b, a); - 1 !== a && this.set("layers",
				g.a.Lo(b, a))
		},
		Jx: function(a) {
			var b = this.get("overlays");
			this.set("overlays", g.a.Lo(b, g.a.indexOf(b, a)))
		},
		getTileCoordByLngLat: function(a, b, c) {
			b = b || 256;
			this.B = !0;
			c = c || Math.round(this.getZoom());
			this.B = !1;
			a = this.Yb(a, c);
			c = new g.Yn(c, Math.floor(a.x / b), Math.floor(a.y / b));
			c.YA = a.x % b;
			c.ZA = a.y % b;
			return c
		},
		setZoom: function(a, b) {
			g.c.add(this, "setZoom");
			a = this.bB(a);
			var c = this.get("zooms");
			a > c[1] && (a = c[1]);
			a < c[0] && (a = c[0]);
			this.get("zoomEnable") && (b || !this.loaded ? (this.set("zoom", a), this.q("zoomstart"), this.q("zoomchange"),
				this.q("zoomend")) : this.set("zoomSlow", a))
		},
		getZoom: function() {
			g.c.add(this, "getZoom");
			return this.bB(this.get("targetLevel") || this.get("zoom", null, !0))
		},
		getCenter: function() {
			g.c.add(this, "getCenter");
			return this.get("center", null, !0)
		},
		setCenter: function(a, b) {
			g.c.add(this, "setCenter");
			a = g.a.Fa(a);
			b || !this.loaded ? (this.q("movestart"), this.set("center", a), this.q("mapmove"), this.map ? this.map.q(
				"moveend") : this.q("moveend")) : (this.B = !0, this.panTo(a), this.B = !1)
		},
		getCoordsBound: function() {
			return this.view.jl()
		},
		getCoordsBoundByZoom: function(a) {
			return this.view.Sja(a)
		},
		setRotation: function() {
			var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0;
			g.c.add(this, "setRotation");
			!g.l.oe && this.get("rotateEnable") && this.set("rotation", a)
		},
		getRotation: function() {
			g.c.add(this, "getRotation");
			return this.get("rotation")
		},
		setPitch: function(a) {
			g.c.add(this, "setPitch");
			a = Math.min(this.get("maxPitch"), Math.max(a, 0));
			"3D" === this.view.type && this.get("pitchEnable") && this.set("pitch", a)
		},
		getPitch: function() {
			g.c.add(this,
				"getRotation");
			return "3D" === this.view.type ? this.get("pitch") : 0
		},
		getStatus: function() {
			g.c.add(this, "getStatus");
			for (var a =
					"isHotspot pitchEnable dragEnable zoomEnable keyboardEnable jogEnable doubleClickZoom scrollWheel resizeEnable touchZoom rotateEnable animateEnable"
					.split(" "), b = {}, c = 0; c < a.length; c += 1) b[a[c]] = this.get(a[c], null, !0);
			return b
		},
		setStatus: function(a) {
			g.c.add(this, "setStatus");
			for (var b in a) a.hasOwnProperty(b) && -1 !==
				"isHotspot,pitchEnable,dragEnable,keyboardEnable,doubleClickZoom,scrollWheel,zoomEnable,jogEnable,continuousZoomEnable,resizeEnable,animateEnable,rotateEnable,touchZoom"
				.indexOf(b) &&
				this.set(b, a[b])
		},
		getResolution: function(a, b) {
			g.c.add(this, "getResolution");
			var c = (a = g.a.Fa(a)) ? a.Q : this.get("center", null, !0).Q;
			return this.Bi.To(b || this.get("zoom")) * Math.cos(c * Math.PI / 180)
		},
		getScale: function(a) {
			g.c.add(this, "getScale");
			this.B = !0;
			a = this.getResolution() * (a || 96) / 0.0254;
			this.B = !1;
			return a
		},
		getDefaultCursor: function() {
			g.c.add(this, "getDefaultCursor");
			return this.get("defaultCursor", null, !0) || "url(" + g.w.tb + "/theme/v1.3/openhand.cur),default"
		},
		setDefaultCursor: function(a) {
			g.c.add(this,
				"setDefaultCursor");
			return this.set("defaultCursor", a, !0)
		},
		zoomIn: function(a) {
			g.c.add(this, "zoomIn");
			this.B = !0;
			this.setZoom(this.getZoom() + 1, a);
			this.B = !1
		},
		zoomOut: function(a) {
			g.c.add(this, "zoomOut");
			this.B = !0;
			this.setZoom(this.getZoom() - 1, a);
			this.B = !1
		},
		bB: function(a) {
			return this.view && "3D" === this.view.type ? g.a.Wc(a, 4) : Math.round(a)
		},
		setZoomAndCenter: function(a, b, c) {
			g.c.add(this, "setZoomAndCenter");
			b = g.a.Fa(b);
			a = this.bB(a);
			var d = this.get("zooms");
			a > d[1] && (a = d[1]);
			a < d[0] && (a = d[0]);
			this.B = !0;
			this.loaded ?
				this.set("zoomAndCenter", [a, b, c]) : (this.setZoom(a, !0), this.setCenter(b, !0));
			this.B = !1
		},
		clearMap: function() {
			g.c.add(this, "clearMap");
			for (var a = this.get("overlays"), b = 0; b < a.length; b += 1) a[b].set("map", null, !0);
			this.set("overlays", []);
			if (this.map && this.map.ta)
				for (a = this.map.ta, b = a.length - 1; 0 <= b; b -= 1)
					if (a[b].X instanceof z.o.aJ) {
						var c = a[b].X;
						c.B = !0;
						c.setMap(null);
						c.B = !1
					}
		},
		destroy: function() {
			g.c.add(this, "destroy");
			this.rl && (this.rl.setMap(), this.indoorMap = this.rl = null);
			this.set("overlays", []);
			this.set("layers",
				[]);
			var a = this.get("controls");
			a.remove = [];
			for (var b in a.xd) a.xd.hasOwnProperty(b) && a.remove.push(a.xd[b]);
			a.xd = [];
			a.add = [];
			this.set("controls", a);
			this.set("destroy", !0);
			this.Ha = !1;
			this.Hm();
			this.J = null;
			z.Db.ds--
		},
		addControl: function(a) {
			g.c.add(this, "addControl");
			var b = g.a.Bb(a),
				c = this.get("controls") || {};
			c.xd = c.xd || {};
			c.xd[b] || (c.xd[b] = a);
			c.add = c.add || [];
			c.add.push(a);
			this.set("controls", c)
		},
		removeControl: function(a) {
			g.c.add(this, "removeControl");
			var b = g.a.Bb(a),
				c = this.get("controls") || {};
			c.xd =
				c.xd || {};
			c.xd[b] && delete c.xd[b];
			c.remove = c.remove || [];
			c.remove.push(a);
			this.set("controls", c)
		},
		clearControl: function() {
			g.c.add(this, "clearControl");
			var a = this.get("controls") || {};
			a.remove = a.remove || [];
			a.xd = a.xd || {};
			for (var b in a.xd) a.xd.hasOwnProperty(b) && (a.remove.push(a.xd[b]), delete a.xd[b]);
			this.set("controls", a)
		},
		plugin: function(a, b) {
			g.c.add(this, "setPitch");
			"string" === typeof a && (a = [a]);
			g.ob.Vg(a, b);
			return this
		},
		clearInfoWindow: function() {
			g.c.add(this, "clearInfoWindow");
			var a = this.get("overlays");
			a && 0 !== a.length && this.sl && (this.sl.B = !0, this.sl.close(), this.sl.B = !1)
		},
		remove: function(a) {
			g.c.add(this, "remove");
			a instanceof Array || (a = [a]);
			for (var b = 0; b < a.length; b += 1) {
				var c = a[b];
				c.B = !0;
				c.getMap && c.getMap() === this && (c.close ? c.close() : c.setMap && c.setMap(null));
				c.B = !1
			}
		},
		add: function(a) {
			g.c.add(this, "add");
			a instanceof Array || (a = [a]);
			for (var b = 0; b < a.length; b += 1) {
				var c = a[b];
				c.B = !0;
				if (c.getMap && c.getMap() !== this)
					if (c.open) continue;
					else c.setMap && c.setMap(this);
				c.B = !1
			}
		},
		getAllOverlays: function(a, b) {
			g.c.add(this,
				"getAllOverlays");
			var c = this.get("overlays");
			if (a) {
				for (var d = "amap." + a.toLowerCase(), e = [], f = 0; f < c.length; f += 1) d !== c[f].CLASS_NAME.toLowerCase() ||
					!b && (c[f].pa || c[f].isOfficial) || e.push(c[f]);
				return e
			}
			if (!b) {
				e = [];
				for (f = 0; f < c.length; f += 1) c[f].pa || c[f].isOfficial || e.push(c[f]);
				c = e
			}
			d = this.get("layers");
			e = [];
			if (d)
				for (var f = 0, h = d.length; f < h; f += 1) d[f] instanceof z.o.aJ && e.push(d[f]);
			return c.concat(e)
		},
		triggerResize: function() {
			this.map && this.map.SL()
		},
		refreshSize: function() {
			this.JD = this.Zja()
		},
		Zja: function() {
			return g.g.C_(this.J)
		},
		getSize: function() {
			g.c.add(this, "getSize");
			(!this.JD || 10 > this.JD.width * this.JD.height) && this.refreshSize();
			return this.JD
		},
		getContainer: function() {
			g.c.add(this, "getContainer");
			return this.J
		},
		panTo: function(a) {
			g.c.add(this, "panTo");
			a = g.a.Fa(a);
			this.loaded ? this.set("panTo", a) : (this.B = !0, this.setCenter(a), this.B = !1)
		},
		panBy: function(a, b, c) {
			g.c.add(this, "panBy");
			this.B = !0;
			var d = this.get("rotation") * Math.PI / 180,
				e = a * Math.cos(d) + Math.sin(d) * b;
			a = -Math.sin(d) * a + Math.cos(d) * b;
			b = this.loaded && this.map && this.map.nd ?
				this.map.nd.J4 : this.get("centerCoords");
			d = Math.pow(2, 20 - this.getZoom());
			e = b.add(new g.G(-e * d, -a * d));
			e = this.Ee(e);
			!this.loaded || c ? this.setCenter(e, c) : this.set("panTo", e);
			this.B = !1
		},
		setFitView: function(a, b, c, d) {
			g.c.add(this, "setFitView");
			this.B = !0;
			var e = this.get("size"),
				f = e.height;
			if (!e.width || !f) return !0;
			if (a = this.S_(a)) {
				if (c = this.sG(a, 0, new g.G(40, 40), c, d)) b = b || !this.getBounds().contains(a.Rh()) || g.l.Y && 1 < Math.abs(
					c[0] + this.get("zoom", null, !0)), this.setZoomAndCenter(c[0], c[1], b);
				this.B = !1;
				return a
			}
		},
		S_: function(a) {
			if (a)
				if (a instanceof z.A.Dh) a = [a];
				else {
					if (!(a instanceof Array)) return null
				}
			else this.B = !0, a = this.getAllOverlays(), this.B = !1;
			if (a) {
				for (var b, c = 0; c < a.length; c += 1) {
					var d = a[c];
					if (d.get("visible") && !(d instanceof z.A.Ge || d instanceof z.A.Lm)) {
						d.B = !0;
						var e = d.getBounds();
						d.B = !1;
						e && (b = b ? e.hsa(b) : e)
					}
				}
				return b
			}
		},
		getBounds: function(a) {
			g.c.add(this, "getBounds");
			var b = this.view.bd();
			return a && b.toBounds ? (b.B = !0, a = b.toBounds(), b.B = !1, a) : b
		},
		setBounds: function(a, b, c, d, e, f) {
			g.c.add(this, "setBounds");
			c = this.sG(a, b, c, e, f);
			d = d || g.l.Y && 1 < Math.abs(c[0] + b - this.get("zoom", null, !0));
			this.B = !0;
			this.setZoomAndCenter(c[0], c[1], d);
			this.B = !1;
			return a
		},
		I_: function(a, b, c, d, e) {
			a = this.S_(a);
			return this.sG(a, b, c, d, e)
		},
		getCoordsBoundByZoomIn3D: function(a) {
			this.pF || (this.pF = new g.zJ);
			this.B = !0;
			var b = this.getRotation(),
				c = this.getPitch(),
				d = this.getSize(!0).jb();
			this.B = !1;
			a = {
				size: d,
				zoom: a,
				rotation: b,
				pitch: c,
				centerCoords: this.get("centerCoords")
			};
			this.pF.eg(a, !0);
			this.pF.Gp();
			return this.pF.jl()
		},
		sG: function(a, b, c,
			d, e) {
			b = b ? Number(b) : 0;
			this.B = !0;
			var f = this.getRotation(),
				h = this.getPitch(),
				k = this.getSize(!0).jb(),
				l = this.view.type;
			this.B = !1;
			var m = a.bO(this);
			a = a.eO(this);
			this.wA || (this.wA = "3D" === l ? new g.zJ : new g.sD);
			this.wA.eg({
				size: k,
				zoom: 3,
				rotation: f,
				pitch: h,
				centerCoords: m
			}, !0);
			var n = h = 0;
			d ? (n = d[0], c = d[1], h = d[2], d = d[3], k.width -= h + d, k.height -= n + c, h = (h - d) / 2, n = (n - c) /
				2) : c && (k.width -= 2 * c.x, k.height -= 2 * c.y);
			e = e || (g.l.Y ? 17 : 18);
			c = this.get("zooms");
			d = c[0];
			var p = Infinity,
				q = Infinity;
			do {
				this.wA.eg({
					zoom: d
				}, !0);
				"3D" === l && this.wA.Gp();
				for (var q = p = Infinity, r = -Infinity, s = -Infinity, u = 0; u < a.length; u += 1) var v = this.wA.De(a[u]),
					p = Math.min(p, v.x),
					r = Math.max(r, v.x),
					q = Math.min(q, v.y),
					s = Math.max(s, v.y);
				p = r - p;
				q = s - q;
				if (p > k.width || q > k.height) {
					d -= 1;
					break
				}
				d += 1
			} while (d <= c[1]);
			d = Math.min(c[1], e, Math.max(c[0], d + b));
			d = Math.floor(d);
			b = Math.pow(2, 20 - d);
			e = f * Math.PI / 180;
			f = h * Math.cos(e) + Math.sin(e) * n;
			e = -Math.sin(e) * h + Math.cos(e) * n;
			m = m.Wa(new g.G(f * b, e * b));
			m = this.wh(m, 20);
			return [d, m]
		},
		setLayers: function(a) {
			g.c.add(this, "setLayers");
			for (var b = 0; b < a.length; b +=
				1) a[b].set("map", this, !0);
			this.set("layers", a)
		},
		getLayers: function() {
			g.c.add(this, "getLayers");
			return this.get("layers", null, !0)
		},
		getDefaultLayer: function() {
			g.c.add(this, "getDefaultLayer");
			return this.get("defaultLayer", null, !0)
		},
		setDefaultLayer: function(a) {
			g.c.add(this, "setDefaultLayer");
			this.B = !0;
			a.AM = !0;
			var b = this.get("defaultLayer"),
				c = this.get("layers");
			if (b) {
				if (a === b) return;
				b.AM = !1;
				c = g.a.Lo(c, g.a.indexOf(c, b))
			}
			this.set("defaultLayer", a, !0);
			a.B = !0;
			a.getMap == this && c.push(a);
			a.B = !1;
			this.setLayers(c);
			this.B = !1
		},
		pixelToLngLat: function(a, b) {
			g.c.add(this, "pixelToLngLat");
			return this.wh(a, b)
		},
		lnglatToPixel: function(a, b) {
			g.c.add(this, "lnglatToPixel");
			return this.Yb(a, b)
		},
		drawPolyline: function(a) {
			g.c.add(this, "drawPolyline");
			this.set("draw", "polyline");
			this.set("drawStyle", a || {
				strokeColor: "#006600",
				hb: 0.9
			})
		},
		render: function(a) {
			g.c.add(this, "render");
			this.map && this.map.set("display", a ? 1 : 0)
		},
		setMask: function(a) {
			g.c.add(this, "setMask");
			this.set("mask", a);
			this.map && this.map.set("display")
		},
		drawPolygon: function(a) {
			g.c.add(this,
				"drawPolygon");
			this.set("draw", "polygon");
			this.set("drawStyle", a || {
				strokeColor: "#006600",
				hb: 0.9,
				fillColor: "#FFAA00",
				Vd: 0.9
			})
		},
		drawCircle: function(a) {
			g.c.add(this, "drawCircle");
			this.set("draw", "circle");
			this.set("drawStyle", a || {
				strokeColor: "#006600",
				hb: 0.9,
				fillColor: "#006600",
				Vd: 0.9
			})
		},
		CG: function() {
			return this.view.CG()
		},
		getCameraState: function() {
			g.c.add(this, "getCameraState");
			if (this.view && "3D" == this.view.type) return this.view.B_()
		},
		endDraw: function() {
			this.set("draw", null)
		},
		isGoogleTileVisible: function() {
			return this.map.isForeignMapVisible()
		},
		isForeignMapVisible: function() {
			if (this.get("gridForeignMap") || this.get("vectorForeignMap")) return this.map && this.map.Naa()
		},
		De: function(a, b, c) {
			g.c.add(this, "p20ToContainer");
			return this.view.De(a, b, c)
		},
		Xf: function(a, b, c) {
			g.c.add(this, "containerToP20");
			return this.view.Xf(a, b, c)
		},
		getObject3DByContainerPos: function(a, b, c) {
			g.c.add(this, "getObject3DByContainerPos");
			if ("2D" === this.view.type || !this.map || !this.map.O) return null;
			this.B = !0;
			this.view.Xf(a);
			var d = this.view.E_(a),
				e = this.map.O.tQ,
				f = this.view.Kc,
				h = this.get("zoom", null, !0),
				h = Math.pow(2, 20 - h);
			b = b || this.getLayers();
			this.B = !1;
			for (var k = [], l = 0; l < b.length; l += 1) {
				var m = b[l];
				m instanceof z.o.Ik && (m = m.Sn(e, d, f, h, a)) && k.push(m)
			}
			return c ? k : k.length ? (k.sort(function(a, b) {
				return a.Fd - b.Fd
			}), {
				index: k[0].index,
				point: k[0].bC,
				distance: k[0].Fd,
				object: k[0].object
			}) : null
		}
	});
	z.Db.$c({
		bH: "lngLatToGeodeticCoord",
		Pja: "geodeticCoordToLngLat",
		sG: "getFitZoomAndCenterByBounds",
		I_: "getFitZoomAndCenterByOverlays",
		er: "lnglatTocontainer",
		lnglatTocontainer: "lngLatToContainer",
		Do: "containTolnglat",
		containTolnglat: "containerToLngLat",
		Rb: "lngLatToP20",
		Ee: "p20ToLngLat",
		De: "p20ToContainer",
		Xf: "containerToP20",
		Yb: "project",
		wh: "unproject"
	});
	z.Db.ub({
		isHotspotChanged: function() {
			if ("undefined" !== typeof this.lB && (this.Fha(), this.get("isHotspot"))) {
				var a = this.get("layers", null, !0);
				a && a.length && !this.lB && this.oH && this.Rna()
			}
		},
		Rna: function() {
			if (this.oj) this.C0();
			else {
				var a = this;
				this.B = !0;
				this.plugin("AMap.HotSpot", function() {
					if (!a.lB) {
						if (!a.oj) {
							var b = new g.Bh;
							new z.A.Ge({
								innerOverlay: !0
							});
							a.oj = b
						}
						a.C0()
					}
				});
				this.B = !1
			}
		},
		Fha: function() {
			this.oj && this.ela()
		},
		y2: function(a) {
			a.type = "hotspotover";
			a.isIndoorPOI = !1;
			this.q("hotspotover", a)
		},
		w2: function(a) {
			a.type =
				"hotspotclick";
			a.isIndoorPOI = !1;
			this.q("hotspotclick", a)
		},
		x2: function(a) {
			a.type = "hotspotout";
			a.isIndoorPOI = !1;
			this.q("hotspotout", a)
		},
		C0: function() {
			var a = this.oj;
			this.oj.B = !0;
			this.oj.setMap(this);
			this.oj.B = !1;
			a.h("mouseover", this.y2, this);
			a.h("click", this.w2, this);
			a.h("mouseout", this.x2, this)
		},
		ela: function() {
			var a = this.oj;
			a.I("mouseover", this.y2, this);
			a.I("click", this.w2, this);
			a.I("mouseout", this.x2, this);
			this.oj.B = !0;
			this.oj.setMap(null);
			this.oj.B = !1;
			this.oj = null
		}
	});
	z.event = {
		V: function(a, b, c, d) {
			g.F.h(a, b, c, d);
			return new g.ZC(0, a, b, c, d)
		},
		Wfa: function() {},
		addListener: function(a, b, c, d) {
			g.a.Vh(a.addListener) ? a.addListener(b, c, d) : (a.ae || (a.ae = g.na.ae), g.na.h.call(a, b, c, d));
			return new g.ZC(1, a, b, c, d)
		},
		fw: function(a, b, c, d) {
			g.a.Vh(a.fw) ? a.fw(b, c, d) : (a.ae || (a.ae = g.na.ae), g.na.h.call(a, b, c, d, !0));
			return new g.ZC(1, a, b, c, d)
		},
		DF: function(a) {
			g.a.Vh(a.DF) ? a.DF() : g.na.gj.call(a)
		},
		Zs: function(a, b) {
			g.a.Vh(a.Zs) ? a.Zs(b) : g.na.gj.call(a, b)
		},
		removeListener: function(a) {
			a instanceof
			g.ZC && (g.a.Vh(a.Ji.removeListener) ? a.Ji.removeListener(a) : 0 === a.type ? g.F.I(a.Ji, a.IN, a.MO, a.ff) : 1 ===
				a.type && (a.Ji.ae || (a.Ji.ae = g.na.ae), g.na.I.call(a.Ji, a.IN, a.MO, a.ff)))
		},
		M: function(a, b) {
			var c = Array.prototype.slice.call(arguments, 1);
			g.a.Vh(a.M) ? a.M.apply(a, c) : (a.ae || (a.ae = g.na.ae), g.na.q.apply(a, c))
		}
	};
	g.ZC = g.Z.extend({
		r: function(a, b, c, d, e) {
			this.type = a;
			this.Ji = b;
			this.IN = c;
			this.MO = d;
			this.ff = e
		}
	});
	var oc = {
			V: "addDomListener",
			Wfa: "addDomListenerOnce",
			addListener: "addListener",
			fw: "addListenerOnce",
			DF: "clearInstanceListeners",
			Zs: "clearListeners",
			removeListener: "removeListener",
			M: "trigger"
		},
		pc;
	for (pc in oc) oc.hasOwnProperty(pc) && (z.event[oc[pc]] = z.event[pc]);
	g.event = z.event;
	z.o.Hc = g.Z.extend({
		ga: [g.na, g.He],
		r: function(a) {
			(new Date).getTime();
			this.CLASS_NAME = this.CLASS_NAME || "AMap.Layer";
			g.a.Ib(this, a);
			this.D.map && (a = this.D.map, delete this.D.map, this.D.map = a);
			this.eg(this.D)
		},
		getContainer: function() {
			g.c.add(this, "getContainer");
			if (this.o && this.o.N) return this.o.N.lj()
		},
		getZooms: function() {
			return this.get("zooms", null, !0)
		},
		setOpacity: function(a) {
			g.c.add(this, "setOpacity");
			a !== this.get("opacity", null, !0) && this.set("opacity", a)
		},
		getOpacity: function() {
			return this.get("opacity",
				null, !0)
		},
		show: function() {
			g.c.add(this, "show");
			this.set("visible", !0);
			if (this.ip) {
				var a = this.get("map", null, !0);
				a && a.set("layers", a.get("layers", null, !0))
			}
		},
		hide: function() {
			g.c.add(this, "hide");
			this.set("visible", !1);
			if (this.ip) {
				var a = this.get("map", null, !0);
				a && a.set("layers", a.get("layers", null, !0))
			}
		},
		setMap: function(a) {
			g.c.add(this, "setMap");
			var b = this.get("map");
			a ? (b && a !== b && b.Bj(this), this.set("map", a)) : b && (b.Bj(this), this.set("map", null, !0), this.vi = !1,
				this.wg && this.wg())
		},
		getMap: function() {
			g.c.add(this,
				"getMap");
			return this.get("map", null, !0)
		},
		mapChanged: function() {
			var a = this.get("map");
			a && a.mF(this)
		},
		setzIndex: function(a) {
			g.c.add(this, "setzIndex");
			this.set("zIndex", a)
		},
		getzIndex: function() {
			return this.get("zIndex", null, !0)
		}
	});
	z.o.gb = z.o.Hc.extend({
		D: {
			tileSize: 256,
			visible: !0,
			opacity: 1,
			zIndex: 0,
			noLimg: 1,
			zooms: [3, 20],
			getTileUrl: g.l.Y ? g.w.GC : g.w.EB,
			errorUrl: g.a.jja,
			detectRetina: !0,
			className: "amap-layer",
			mapNumber: "",
			merge: !1,
			sort: !1,
			cacheSize: g.l.size
		},
		r: function(a) {
			this.CLASS_NAME = this.CLASS_NAME || "AMap.TileLayer";
			g.c.qa(this, a);
			(a = a || {}) && a.tileUrl && (a.getTileUrl = a.tileUrl);
			this.nha(a);
			var b = a.zooms;
			b && b[1] >= this.rk[0] ? (b[0] < this.rk[0] && (b[0] = this.rk[0]), b[1] > this.rk[1] && (b[1] = this.rk[1])) :
				a.zooms = [this.rk[0], this.rk[1]];
			arguments.callee.ka.call(this, a);
			a.Aj && (this.Aj = !0);
			this.SK = !this.Jt()
		},
		setTextIndex: function(a) {
			g.c.add(this, "setTextIndex");
			this.set("textIndex", a)
		},
		Jt: function() {
			if (this.get("createTile")) return !1;
			var a = this.get("getTileUrl");
			return a && a !== g.w.EB && a !== g.w.GC ? !1 : !0
		},
		kZ: function() {
			if (!this.Jt()) return !1;
			var a = this.get("map");
			return a && a.Wh && "zh_cn" === a.get("lang") && !this.noVector ? !0 : !1
		},
		Y_: function(a) {
			var b = g.w.gH;
			g.l.ha && this.get("detectRetina") && (b = g.w.gH.replace("scl=1", "scl=2"));
			a && (b = b.replace("ltype=3",
				"ltype=11"));
			return b
		},
		Ng: function(a) {
			var b = this.kZ(),
				c = this.get("map");
			this.Jt() && this.set("mapNumber", "GS(2018)1709");
			if (this.Aj) return new g.o.gb(this, a, this.Up(this.Y_(!0)), this.D.maxDataZoom, !0);
			if (b)
				if (this.ip = !0, g.o.Eh) {
					if ("dv" === c.get("baseRender") && !this.get("watermark")) {
						var b = c.get("showBuildingBlock"),
							d = new g.o.gb(this, a, this.Up(this.Y_(!b)), void 0, !0);
						b && (d.yk = new g.o.pd(new z.o.gb({
							zooms: [16, 20],
							innerLayer: !0
						}), a, ["building"]), d.yk.type = "\u697c\u5757\u56fe\u5c42", d.yk.Ie(["visible",
							"opacity", "zIndex"
						], d, !0), d.yk.zA(c.get("mapStyle") || "normal"));
						d.type = "\u6805\u683c\u5e95\u56fe";
						return d
					}
					if ("v" <= c.get("baseRender") || this.get("watermark")) return "3D" == a.C.view.type ? (c = new g.o.pd(this,
							a, ["region", "road"]), c.type = "\u77e2\u91cf\u5e95\u56fe", b = new z.o.gb({
							zooms: [17, 20],
							zIndex: 50,
							innerLayer: !0
						}), c.yk = new g.o.pd(b, a, ["building"]), c.yk.Oe = 17, c.yk.type = "\u697c\u5757\u56fe\u5c42", c.yk.Zw =
						1, c.yk.Ie(["visible", "merge", "sort", "opacity"], c, !0), b.W("rejectMapMask", this, !0)) : (c = new g.o.pd(
						this,
						a, ["region", "building", "road"]), c.type = "\u77e2\u91cf\u5e95\u56fe"), a.zga = c
				} else return ["vectorlayer", "overlay"];
			else return this.ip = !1, new g.o.gb(this, a, null, this.D.maxDataZoom)
		},
		getTileUrlChanged: function() {
			var a = this.get("getTileUrl");
			if (a === g.w.EB || a === g.w.GC || a === g.w.YH) this.oH = !0;
			"string" === typeof a && (a = this.Up(a));
			this.set("tileFun", a)
		},
		nha: function(a) {
			this.rk || (this.rk = [this.D.zooms[0], this.D.zooms[1]]);
			var b;
			a.hasOwnProperty("detectRetina") && !1 === a.detectRetina && (b = !0);
			g.l.Y && g.l.ha && this.D.detectRetina &&
				!b && (this.rk[1] -= 1)
		},
		getTiles: function() {
			g.c.add(this, "getTiles");
			var a = this.get("tiles", null, !0);
			if (a && a.length) a = a[0];
			else return [];
			for (var b = [], c, d = 0; d < a.length; d += 1) a[d].key && (c = a[d].key.split("/"), b.push("" + c[1] + "," +
				c[2]));
			return b
		},
		reload: function() {
			g.c.add(this, "reload");
			this.set("reload", 1)
		},
		ur: function() {
			this.B = !0;
			var a = this.get("map", null, !0);
			this.setMap(null);
			this.vi = !1;
			this.setMap(a);
			this.B = !1
		},
		setTileUrl: function(a) {
			g.c.add(this, "setTileUrl");
			this.kZ() ? (this.set("getTileUrl", a), this.ur()) :
				this.set("getTileUrl", a)
		},
		Up: function(a) {
			var b = this,
				c, d, e;
			return function(f, h, k) {
				f = (f + Math.pow(2, k)) % Math.pow(2, k);
				if ("number" !== typeof(f + h + k)) return null;
				var l = b.get("map"),
					m = "zh_cn";
				l && (m = l.get("lang") || "zh_cn");
				k = a.replace("[x]", f).replace("[y]", h).replace("[z]", k).replace("[lang]", m);
				if (!c) {
					if (d = a.match(/\{.*\}/)) e = d.toString().replace("{", "").replace("}", ""), e = e.split(",");
					c = !0
				}
				e && e.length && (k = k.replace(d, e[Math.abs(f + h) % e.length]));
				return k
			}
		},
		getTileUrl: function(a, b, c) {
			g.c.add(this, "getTileUrl");
			return this.get("tileFun", null, !0)(a, b, c)
		},
		getZooms: function(a) {
			a || g.c.add(this, "getZooms");
			return this.get("zooms", null, !0)
		}
	});
	z.o.gb.NS = z.o.gb.extend({
		D: {
			getTileUrl: g.w.XQ,
			zooms: [3, 20],
			zIndex: 2,
			maxDataZoom: 18,
			detectRetina: !1,
			mapNumber: "GS(2019)3913",
			className: "amap-layer amap-satellite",
			cacheSize: g.l.size
		},
		r: function(a) {
			this.CLASS_NAME = "AMap.TileLayer.Satellite";
			g.c.qa(this, a);
			this.rk = [3, 20];
			arguments.callee.ka.apply(this, arguments)
		}
	});
	z.o.gb.LS = z.o.gb.extend({
		D: {
			getTileUrl: g.w.YH,
			zooms: [3, 20],
			zIndex: 3,
			type: "overlayer",
			maxDataZoom: 18,
			className: "amap-layer amap-roadnet",
			cacheSize: g.l.size
		},
		r: function(a) {
			this.CLASS_NAME = "AMap.TileLayer.RoadNet";
			g.c.qa(this, a);
			this.rk = [3, 20];
			arguments.callee.ka.apply(this, arguments)
		},
		Ng: function(a) {
			if (this.get("map").Wh) {
				this.ip = !0;
				var b = g.w.ZH;
				g.l.ha && this.get("detectRetina") && (b = g.w.ZH.replace("scl=1", "scl=2"));
				a = new g.o.gb(this, a, this.Up(b), this.D.maxDataZoom)
			} else this.ip = !1, a = new g.o.gb(this,
				a);
			return a
		}
	});
	z.o.gb.RS = z.o.gb.extend({
		D: {
			getTileUrl: function(a, b, c) {
				return g.w.nc + "://tm.amap.com/trafficengine/mapabc/traffictile?v=1.0&t=1&zoom=" + (17 - c) + "&x=" + a +
					"&y=" + b
			},
			zooms: [6, 20],
			zIndex: 4,
			type: "overlayer",
			autoRefresh: !1,
			interval: 180,
			maxDataZoom: 17,
			alwaysRender: !g.l.YZ,
			className: "amap-layer amap-traffic",
			cacheSize: g.l.size
		},
		r: function(a) {
			this.CLASS_NAME = "AMap.TileLayer.Traffic";
			g.c.qa(this, a);
			this.rk = [6, 20];
			arguments.callee.ka.apply(this, arguments);
			this.B = !0;
			this.startRefresh();
			this.B = !1
		},
		stopRefresh: function() {
			g.c.add(this,
				"stopRefresh");
			this.MH && (clearInterval(this.MH), this.MH = null)
		},
		startRefresh: function() {
			g.c.add(this, "startRefresh");
			if (this.get("autoRefresh") && !this.MH) {
				var a = this;
				this.MH = setInterval(function() {
					a.B = !0;
					a.reload();
					a.B = !1;
					a.q("refresh")
				}, Math.max(1E3 * (this.get("interval") || 180), 1E4))
			}
		},
		reload: function() {
			g.c.add(this, "reload");
			g.a.Fc(function() {
				this.set("reload")
			}, this)
		},
		wg: function() {
			this.B = !0;
			this.stopRefresh();
			this.get("map") && this.get("map").I("zoomstart", this.reload, this);
			this.B = !1
		},
		Ng: function(a) {
			var b =
				this.get("map"),
				b = a.C;
			b.h("zoomstart", this.reload, this);
			return "d" !== b.get("baseRender") ? g.o.hv ? a = new g.o.hv(this, a) : ["vt"] : a = new g.o.gb(this, a, null,
				this.D.maxDataZoom)
		}
	});
	z.o.gb.Iy = z.o.gb.extend({
		D: {
			zooms: [3, 20],
			zIndex: 12,
			detectRetina: !1,
			className: "amap-layer amap-flexible",
			cacheSize: g.l.size
		},
		r: function(a) {
			this.CLASS_NAME = this.CLASS_NAME || "AMap.TileLayer.Flexible";
			g.c.qa(this, a);
			this.Wla = !0;
			arguments.callee.ka.call(this, a)
		},
		setCreateTile: function(a) {
			g.c.add(this, "setCreateTile");
			"function" === typeof a && a !== this.get("createTile") && this.set("createTile", a)
		},
		getCreateTile: function() {
			return this.get("createTile", null, !0)
		}
	});
	z.o.gb.A7 = z.o.gb.Iy.extend({
		D: {
			zooms: [3, 20],
			zIndex: 12,
			tileSize: 512,
			detectRetina: !1,
			className: "amap-layer amap-wms",
			cacheSize: g.l.size,
			url: "",
			params: ""
		},
		r: function(a) {
			this.CLASS_NAME = "AMap.TileLayer.WMS";
			g.c.qa(this, a);
			arguments.callee.ka.call(this, a);
			this.Gu();
			var b = this,
				c = this.get("tileSize");
			this.set("createTile", function(a, e, f, h, k) {
				var l = Math.pow(2, 20 - f) * c;
				f = new g.G(l * a, l * (e + 1));
				a = new g.G(l * (a + 1), l * e);
				e = g.fH.G2(f);
				a = g.fH.G2(a);
				var m = document.createElement("img");
				"3D" === b.Kp && (m.crossOrigin = "anonymous");
				m.src = this.url + "&BBOX=" + e + "," + a;
				g.F.h(m, "load", function() {
					h(m)
				});
				g.F.h(m, "error", function() {
					k(m)
				})
			})
		},
		Gu: function() {
			var a = this.get("url", null, !0),
				b = this.get("params", null, !0),
				c = this.get("tileSize");
			b.WIDTH = c;
			b.HEIGHT = c;
			b.CRS = b.CRS || "EPSG:3857";
			b.REQUEST = "GetMap";
			b.SERVICE = "WMS";
			b.FORMAT = b.FORMAT || "image/png";
			b.TRANSPARENT = void 0 === b.TRANSPARENT ? "true" : b.TRANSPARENT;
			delete b.BBOX;
			this.url = a + "?" + g.a.join(b, "&");
			this.B = !0;
			this.reload();
			this.B = !1
		},
		setUrl: function(a) {
			g.c.add(this, "setUrl");
			this.set("url",
				a, !0);
			this.Gu()
		},
		getUrl: function() {
			g.c.add(this, "getUrl");
			return this.get("url", null, !0)
		},
		setParams: function(a) {
			g.c.add(this, "setParams");
			g.extend(this.get("params", null, !0), a || {});
			this.Gu()
		},
		getParams: function() {
			g.c.add(this, "getParams");
			return this.get("params", null, !0)
		}
	});
	z.o.gb.B7 = z.o.gb.Iy.extend({
		D: {
			zooms: [3, 20],
			tileSize: 256,
			zIndex: 12,
			detectRetina: !1,
			className: "amap-layer amap-wmts",
			cacheSize: g.l.size
		},
		r: function(a) {
			this.CLASS_NAME = "AMap.TileLayer.WMTS";
			g.c.qa(this, a);
			arguments.callee.ka.call(this, a);
			this.Gu();
			var b = this;
			this.get("tileSize");
			this.set("createTile", function(a, d, e, f, h) {
				var k = document.createElement("img");
				"3D" === b.Kp && (k.crossOrigin = "anonymous");
				k.src = this.url + "&TileMatrix=" + e + "&TileRow=" + d + "&TileCol=" + a;
				g.F.h(k, "load", function() {
					f(k)
				});
				g.F.h(k, "error",
					function() {
						h(k)
					})
			})
		},
		Gu: function() {
			var a = this.get("url", null, !0),
				b = this.get("params", null, !0);
			b.TileMatrixSet = b.TileMatrixSet || "EPSG:3857";
			b.Request = "GetTile";
			b.Service = "WMTS";
			b.Format = b.Format || "image/png";
			this.url = a + "?" + g.a.join(b, "&");
			this.B = !0;
			this.reload();
			this.B = !1
		},
		setUrl: function(a) {
			g.c.add(this, "setUrl");
			this.set("url", a, !0);
			this.Gu()
		},
		getUrl: function() {
			g.c.add(this, "getUrl");
			return this.get("url", null, !0)
		},
		setParams: function(a) {
			g.c.add(this, "setParams");
			g.extend(this.get("params", null, !0),
				a || {});
			this.Gu()
		},
		getParams: function() {
			g.c.add(this, "getParams");
			return this.get("params", null, !0)
		}
	});
	z.o.gb.Yu = z.o.gb.Iy.extend({
		D: {
			detectRetina: !0,
			zooms: [10, 18],
			zIndex: 2
		},
		r: function(a) {
			arguments.callee.ka.apply(this, arguments);
			var b = this;
			this.set("createTile", function(a, d, e, f, h) {
				var k = b.he.map.map;
				k.pi.cy(a, d, e, function(l) {
					if (l) h();
					else {
						var m = document.createElement("img");
						"3D" === b.Kp && (m.crossOrigin = "anonymous");
						m.src = function(a, c, d) {
							var e = "zh_cn";
							b && b.get && k && (e = k.get("lang") || "zh_cn");
							return g.w.nc + "://grid.amap.com/grid/" + d + "/" + a + "/" + c + "?src=jsapi&key=" + g.w.key +
								"&lang=" + e + "&dpiType=" + (g.l.md ?
									"wprd" : "webrd")
						}(a, d, e);
						g.F.h(m, "load", function() {
							f(m)
						});
						g.F.h(m, "error", function() {
							h(m)
						})
					}
				})
			})
		}
	});
	z.o.Qc = z.o.Hc.extend({
		D: {
			visible: !0,
			zooms: [3, 25],
			type: "overlay",
			zIndex: 5,
			alwaysRender: !0
		},
		r: function(a) {
			this.V0 = !0;
			arguments.callee.ka.apply(this, arguments)
		},
		Ng: function(a) {
			return new g.o.Qc(this, a)
		}
	});
	z.o.d6 = z.o.Hc.extend({
		D: {
			zooms: [14, 20],
			zIndex: 8,
			visible: !0,
			merge: !0,
			sort: !1
		},
		r: function(a) {
			this.CLASS_NAME = "AMap.Buildings";
			g.c.qa(this, a);
			a = a || {};
			a.zooms && (a.zooms[0] = Math.max(14, a.zooms[0]));
			arguments.callee.ka.apply(this, arguments)
		},
		Jt: function() {
			return !1
		},
		Ng: function(a) {
			if (g.l.qw) return a = new g.o.x7(this, a), a.Zw = this.get("heightFactor") || 1, a
		},
		setStyle: function(a) {
			this.set("customStyle", a);
			g.c.add(this, "setStyle")
		}
	});
	z.o.YI = z.o.Hc.extend({
		D: {
			visible: !0,
			zooms: [3, g.l.Y ? 20 : 18],
			opacity: 1,
			type: "overlay",
			zIndex: 6
		},
		r: function(a) {
			arguments.callee.ka.apply(this, arguments)
		},
		Ng: function(a) {
			return g.o.Ly ? new g.o.Ly(this, a) : ["imagelayer"]
		},
		getMap: function() {
			g.c.add(this, "getMap");
			return this.he.map
		},
		show: function() {
			g.c.add(this, "show");
			this.set("visible", !0);
			this.q("options")
		},
		getOpacity: function() {
			g.c.add(this, "getOpacity");
			return this.get("opacity", null, !0)
		},
		setOpacity: function(a) {
			g.c.add(this, "setOpacity");
			this.set("opacity",
				a)
		},
		getBounds: function() {
			g.c.add(this, "getBounds");
			return this.get("bounds", null, !0).jb()
		},
		setBounds: function(a) {
			g.c.add(this, "setBounds");
			this.q("bounds", a);
			this.B = !0;
			this.setOptions({
				bounds: a
			});
			this.B = !1
		},
		hide: function() {
			g.c.add(this, "hide");
			this.set("visible", !1);
			this.q("options")
		},
		setOptions: function(a) {
			g.c.add(this, "setOptions");
			this.eg(a);
			this.q("options")
		},
		getOptions: function() {
			g.c.add(this, "getOptions");
			var a = {},
				b;
			for (b in this.D) this.D.hasOwnProperty(b) && (a[b] = this.get(b));
			return a
		},
		getElement: function() {
			return this.o.N ?
				this.o.N.Tb : this.o.Pi ? this.o.Pi.Tb : null
		}
	});
	z.o.Ly = z.o.YI.extend({
		r: function(a) {
			this.CLASS_NAME = "AMap.ImageLayer";
			g.c.qa(this, a);
			a && a.url && (a.__source__ = a.url);
			arguments.callee.ka.apply(this, arguments)
		},
		getImageUrl: function() {
			g.c.add(this, "getImageUrl");
			return this.get("__source__")
		},
		setImageUrl: function(a) {
			g.c.add(this, "setImageUrl");
			return this.set("__source__", a)
		}
	});
	z.o.z7 = z.o.YI.extend({
		r: function(a) {
			this.CLASS_NAME = "AMap.VideoLayer";
			g.c.qa(this, a);
			a && a.url && (a.__source__ = a.url);
			arguments.callee.ka.apply(this, arguments)
		},
		getVideoUrl: function() {
			g.c.add(this, "getVideoUrl");
			return this.get("__source__")
		},
		setVideoUrl: function(a) {
			g.c.add(this, "setVideoUrl");
			return this.set("__source__", a)
		}
	});
	z.o.f6 = z.o.YI.extend({
		r: function(a) {
			this.CLASS_NAME = "AMap.CanvasLayer";
			g.c.qa(this, a);
			a && a.canvas && (a.__source__ = a.canvas);
			arguments.callee.ka.apply(this, arguments)
		},
		getCanvas: function() {
			g.c.add(this, "getCanvas");
			return this.get("__source__")
		},
		setCanvas: function(a) {
			g.c.add(this, "setCanvas");
			return this.set("__source__", a)
		},
		reFresh: function() {
			this.o && (this.o.BC = !0, this.o.set("display"))
		}
	});
	z.o.Q6 = z.o.Hc.extend({
		D: {
			visible: !0,
			zooms: [3, g.l.Y ? 20 : 18],
			type: "overlay",
			zIndex: 5,
			cursor: "pointer",
			alwaysRender: !0,
			stable: !0,
			bubble: !0,
			rejectMapMask: !0,
			className: "amap-mass"
		},
		r: function(a, b) {
			this.CLASS_NAME = "AMap.MassMarks";
			g.c.qa(this, b);
			g.l.lk && (this.Ki = !0, b.size && (b.size = g.a.np(b.size)), this.B = !0, this.setData(a), g.a.Ib(this, b), b.style ?
				(this.eg(this.D, !0), this.setStyle(b.style)) : this.setStyle(this.D), this.B = !1)
		},
		clear: function() {
			g.c.add(this, "clear");
			this.set("dataSources", "")
		},
		getStyle: function() {
			g.c.add(this,
				"getStyle");
			return this.Bl
		},
		setStyle: function(a) {
			g.c.add(this, "setStyle");
			if (a instanceof Array) {
				for (var b = 0; b < a.length; b += 1) a[b].rotation_ = Math.PI * (a[b].rotation || 0) / 180, a[b].size = g.a.np(
					a[b].size), a.af = Math.max(a.af || 0, a[b].size.width + a[b].anchor.x), a.If = Math.max(a.af || 0, a[b].size
					.height + a[b].anchor.y);
				this.Bl = a
			} else a.size && (a.size = g.a.np(a.size)), a.rotation_ = Math.PI * (a.rotation || 0) / 180, this.eg(a, !0),
				this.Bl = {
					anchor: this.get("anchor"),
					url: this.get("url"),
					size: this.get("size"),
					rotation_: this.get("rotation_")
				},
				this.Bl.af = this.Bl.size.width + this.Bl.anchor.x, this.Bl.If = this.Bl.size.height + this.Bl.anchor.y;
			this.q("style")
		},
		setData: function(a) {
			g.c.add(this, "setData");
			this.set("dataSources", a)
		},
		getData: function() {
			g.c.add(this, "getData");
			return this.get("datas") || this.get("dataSources")
		},
		setMap: function(a) {
			g.c.add(this, "setMap");
			g.l.lk && (a ? (this.get("map") && this.get("map").Bj(this), this.set("map", a)) : this.get("map") && (this.get(
				"map").Bj(this), this.set("map", null, !0), this.vi = !1, this.wg && this.wg()))
		},
		Ng: function(a) {
			return g.ob.yB(["cvector"]) ?
				(a = new g.o.Qc(this, a), this.W("datas", a), a) : ["cvector"]
		}
	});
	z.o.aJ = z.o.Ly.extend({
		r: function(a, b, c) {
			this.CLASS_NAME = "AMap.GroundImage";
			g.c.qa(this, c);
			c = c || {};
			this.rg = !0;
			var d = parseFloat(c.opacity);
			isNaN(d) && (d = 1);
			arguments.callee.ka.call(this, {
				url: a,
				bounds: b,
				clickable: c.clickable,
				opacity: d,
				map: c.map,
				zooms: c.zooms || [3, 20]
			});
			this.CLASS_NAME = "AMap.GroundImage"
		},
		Gna: function(a) {
			this.get("bounds").contains(a.lnglat) && (a.target = this, this.q("click", a))
		},
		Hna: function(a) {
			this.get("bounds").contains(a.lnglat) && (a.target = this, this.q("dblclick", a))
		},
		setMap: function(a) {
			g.c.add(this,
				"setMap");
			a ? (this.get("map") && (this.get("map").Bj(this), this.sZ && z.event.removeListener(this.sZ), this.JZ && z.event
				.removeListener(this.JZ)), this.set("map", a)) : this.get("map") && (this.get("map").Bj(this), this.he.map =
				null)
		},
		mapChanged: function() {
			this.get("map") && (this.get("map").mF(this), this.get("clickable") && (this.sZ = z.event.addListener(this.get(
				"map"), "click", this.Gna, this), this.JZ = z.event.addListener(this.get("map"), "dblclick", this.Hna, this)))
		}
	});
	z.A.Dh = g.Z.extend({
		ga: [g.na, g.He, {
			Fa: g.a.Fa
		}],
		D: {
			extData: {},
			bubble: !1,
			clickable: !0,
			draggable: !1
		},
		r: function() {
			this.nE = g.a.Bb(this)
		},
		Mwa: function() {
			return this.nE
		},
		yva: function() {
			this.B = !0;
			this.get("map", null, !0) && this.setMap(this.get("map"));
			this.B = !1
		},
		mapChanged: function() {
			this.get("map", null, !0) && this.get("map", null, !0).tA(this)
		},
		RN: function(a) {
			var b = 0;
			a && (b = "string" === typeof a ? Math.round(parseFloat(a) / 0.14929107086948487) : a);
			return b
		},
		setHeight: function(a) {
			this.height = a = a || 0;
			a = this.RN(a);
			this.set("altitude",
				a)
		},
		getHeight: function() {
			return this.height
		},
		show: function() {
			g.c.add(this, "show");
			this.set("visible", !0)
		},
		hide: function() {
			g.c.add(this, "hide");
			this.set("visible", !1)
		},
		setMap: function(a) {
			g.c.add(this, "setMap");
			a !== this.get("map", null, !0) && (a ? (this.get("map", null, !0) && this.get("map", null, !0).Jx(this), this.set(
				"map", a)) : this.get("map", null, !0) && (this.get("map", null, !0).Jx(this), this.set("map", null, !0)))
		},
		getMap: function() {
			g.c.add(this, "getMap");
			return this.get("map", null, !0)
		},
		setExtData: function(a) {
			g.c.add(this,
				"setExtData");
			this.set("extData", a)
		},
		getExtData: function() {
			g.c.add(this, "getExtData");
			return this.get("extData", null, !0)
		}
	});
	z.A.Qc = z.A.Dh.extend({
		r: function(a) {
			z.A.Qc.Lc.r.apply(this, arguments)
		},
		show: function() {
			g.c.add(this, "show");
			this.set("visible", !0);
			this.q("show", {
				type: "show",
				target: this
			})
		},
		hide: function() {
			g.c.add(this, "hide");
			this.set("visible", !1);
			this.q("hide", {
				type: "hide",
				target: this
			})
		},
		getVisible: function() {
			g.c.add(this, "getVisible");
			return this.get("visible", null, !0)
		},
		getOptions: function() {
			g.c.add(this, "getOptions");
			var a = {},
				b = "map zIndex strokeColor strokeOpacity strokeWeight strokeStyle strokeDasharray extData bubble clickable".split(
					" "),
				c = "isOutline outlineColor geodesic path lineJoin lineCap borderWeight showDir dirColor dirImg".split(" "),
				d = ["fillColor", "fillOpacity", "path", "lineJoin", "texture"],
				e = ["center", "radius", "texture"],
				f = ["bounds", "texture"],
				h = [];
			this instanceof z.A.Qb && (h = b.concat(c));
			this instanceof z.A.tc && (h = b.concat(d));
			this instanceof z.A.Eg && (h = b.concat(e).concat(d));
			this instanceof z.A.Tr && (h = b.concat(e).concat(d));
			this instanceof z.A.Yr && (h = b.concat(d).concat(f));
			for (b = 0; b < h.length; b += 1) a[h[b]] = this.get(h[b], null,
				!0);
			return a
		},
		setOptions: function(a) {
			g.c.add(this, "setOptions");
			a.hasOwnProperty("path") && (a.path && a.path.length || (a.path = []), a.path = this.Fa(a.path));
			a.center && (a.center = this.Fa(a.center));
			var b;
			a.hasOwnProperty("map") && (b = a.map, delete a.map);
			this.eg(a);
			void 0 !== b && (this.setMap(b), a.map = b);
			this.q("options");
			this.q("change", {
				type: "change",
				target: this
			})
		},
		setzIndex: function(a) {
			g.c.add(this, "setzIndex");
			this.set("zIndex", a)
		},
		getzIndex: function() {
			g.c.add(this, "getzIndex");
			return this.get("zIndex", null,
				!0)
		},
		setDraggable: function(a) {
			g.c.add(this, "setDraggable");
			this.set("draggable", a)
		}
	});
	z.A.lD = z.A.Qc.extend({
		D: {
			visible: !0,
			zIndex: 10,
			strokeColor: "#006600",
			strokeOpacity: 0.9,
			strokeWeight: 3,
			strokeStyle: "solid",
			strokeDasharray: [10, 5],
			lineJoin: "miter",
			lineCap: "butt",
			path: []
		},
		r: function(a) {
			z.A.lD.Lc.r.apply(this, arguments)
		},
		setPath: function(a, b) {
			g.c.add(this, "setPath");
			a && a.length || (a = []);
			a = this.Fa(a);
			this.set("path", a);
			this.q("change", {
				type: "change",
				target: this
			});
			b || this.q("setPath");
			this.A && this.A.get("deltaPos") && this.A.set("deltaPos", [0, 0])
		},
		getPath: function() {
			g.c.add(this, "getPath");
			var a = this.get("path", null, !0);
			this.A && this.A.get("deltaPos") && (a = this.A.GK(a, this.A.get("deltaPos")));
			return a
		},
		bd: function() {
			var a = this.get("path");
			if (!a || !a.length) return null;
			a[0] instanceof g.U && (a = [a]);
			for (var b = new g.ue(180, 90, -180, -90), c = 0; c < a.length; c += 1)
				for (var d = a[c], e = d.length - 1; 0 <= e; e -= 1) b.extend(d[e]);
			return b
		}
	});
	z.A.lD.$c({
		bd: "getBounds"
	});
	z.A.Ch = g.Z.extend({
		ga: [g.na, g.He],
		D: {
			size: new g.gd(36, 36),
			imageOffset: new g.G(0, 0),
			image: g.w.tb + "/theme/v1.3/markers/0.png",
			imageSize: null
		},
		r: function(a) {
			this.CLASS_NAME = "AMap.Icon";
			g.c.qa(this, a);
			a = a || {};
			a.size && (a.size = g.a.np(a.size));
			a.imageSize && (a.imageSize = g.a.np(a.imageSize));
			g.a.Ib(this, a);
			this.eg(this.D)
		},
		setImageSize: function(a) {
			g.c.add(this, "setImageSize");
			a = g.a.np(a);
			this.set("imageSize", a)
		},
		getImageSize: function() {
			g.c.add(this, "getImageSize");
			return this.get("imageSize", null, !0)
		}
	});
	z.A.O6 = g.Z.extend({
		ga: [g.na, g.He],
		D: {
			coords: [],
			type: ""
		},
		r: function(a) {
			this.CLASS_NAME = "AMap.MarkerShape";
			g.c.qa(this, a);
			g.a.Ib(this, a);
			this.eg(this.D)
		}
	});
	z.A.lb = z.A.Dh.extend({
		D: {
			cursor: "pointer",
			visible: !0,
			zIndex: 100,
			angle: 0,
			textAlign: "left",
			verticalAlign: "top",
			autoRotation: !1,
			opacity: 1,
			offset: new g.G(-9, -31),
			size: new g.G(19, 33),
			raiseOnDrag: !1,
			topWhenClick: !1,
			topWhenMouseOver: !1,
			animation: "AMAP_ANIMATION_NONE"
		},
		r: function(a) {
			this.CLASS_NAME = this.CLASS_NAME || "AMap.Marker";
			g.c.qa(this, a);
			a = a || {};
			this.rg = !0;
			this.vba = g.a.Bb(this);
			this.B = !0;
			a.position && (a.position = this.Fa(a.position));
			a.height && this.setHeight(a.height);
			g.a.Ib(this, a);
			g.l.oe && (this.D.angle =
				0);
			this.eg(this.D, !0);
			this.mapChanged();
			this.B = !1
		},
		getId: function() {
			g.c.add(this, "getId");
			return this.vba
		},
		setRaiseOnDrag: function(a) {
			g.c.add(this, "setRaiseOnDrag");
			this.set("raiseOnDrag", a)
		},
		setPosition: function(a, b) {
			g.c.add(this, "setPosition");
			a = this.Fa(a);
			void 0 !== b && (this.B = !0, this.setHeight(b), this.B = !1);
			this.set("position", a)
		},
		getPosition: function() {
			g.c.add(this, "getPosition");
			return this.get("position", null, !0)
		},
		getBounds: function() {
			var a = this.get("position", null, !0).jb();
			return new g.ue(a,
				a.jb())
		},
		mapChanged: function() {
			this.Ck("zoom");
			var a = this.get("map", null, !0);
			a && (this.get("position", null, !0) || this.set("position", a.get("center")), a.tA(this), this.W("zoom", a))
		},
		getZooms: function() {
			g.c.add(this, "getZooms");
			return this.get("zooms", null, !0)
		},
		zoomChanged: function() {
			var a = this.get("zooms", null, !0);
			if (a) {
				var b = this.get("zoom");
				b < a[0] || b > a[1] ? this.set("outOfZooms", !0) : this.set("outOfZooms", !1);
				this.A && this.A.doa()
			}
		},
		setIcon: function(a) {
			g.c.add(this, "setIcon");
			this.set("icon", a)
		},
		getIcon: function() {
			g.c.add(this,
				"getIcon");
			return this.get("icon", null, !0)
		},
		setContent: function(a) {
			g.c.add(this, "setContent");
			this.set("content", a)
		},
		getContent: function() {
			g.c.add(this, "getContent");
			return this.get("content", null, !0)
		},
		getContentDom: function() {
			return this.get("contentDom", null, !0)
		},
		hide: function() {
			g.c.add(this, "hide");
			this.set("visible", !1)
		},
		show: function() {
			g.c.add(this, "show");
			this.set("visible", !0)
		},
		setCursor: function(a) {
			g.c.add(this, "setCursor");
			this.set("cursor", a)
		},
		setRotation: function(a) {
			g.c.add(this, "setRotation");
			g.l.oe || this.set("angle", a)
		},
		setAngle: function(a) {
			g.c.add(this, "setAngle");
			g.l.oe || "number" !== typeof a || this.set("angle", a)
		},
		getAngle: function() {
			g.c.add(this, "getAngle");
			return this.get("angle", null, !0)
		},
		setOffset: function(a) {
			g.c.add(this, "setOffset");
			this.set("offset", a)
		},
		getOffset: function() {
			g.c.add(this, "getOffset");
			return this.get("offset", null, !0)
		},
		setTextAlign: function(a) {
			g.c.add(this, "setTextAlign");
			this.set("textAlign", a)
		},
		getTextAlign: function() {
			g.c.add(this, "getTextAlign");
			return this.get("textAlign",
				null, !0)
		},
		setVerticalAlign: function(a) {
			g.c.add(this, "setVerticalAlign");
			this.set("verticalAlign", a)
		},
		getVerticalAlign: function() {
			g.c.add(this, "getVerticalAlign");
			return this.get("verticalAlign", null, !0)
		},
		setzIndex: function(a) {
			g.c.add(this, "setzIndex");
			this.set("zIndex", a)
		},
		getzIndex: function() {
			g.c.add(this, "getzIndex");
			return this.get("zIndex", null, !0)
		},
		setOpacity: function(a) {
			g.c.add(this, "setOpacity");
			this.set("opacity", a)
		},
		setDraggable: function(a) {
			g.c.add(this, "setDraggable");
			this.set("draggable",
				a)
		},
		getDraggable: function() {
			g.c.add(this, "getDraggable");
			return this.get("draggable", null, !0)
		},
		moveTo: function(a, b, c) {
			g.c.add(this, "moveTo");
			a = this.Fa(a);
			this.set("move", {
				cg: a,
				speed: b,
				rb: c
			})
		},
		moveAlong: function(a, b, c, d) {
			g.c.add(this, "moveAlong");
			if (!(2 > a.length)) {
				a = this.Fa(a);
				for (var e = [a[0]], f = a[0], h = 1; h < a.length; h += 1) f.eb(a[h]) || e.push(a[h]);
				this.set("move", {
					cg: e,
					speed: b,
					rb: c,
					uha: d
				})
			}
		},
		stopMove: function() {
			g.c.add(this, "stopMove");
			this.set("move", !1)
		},
		pauseMove: function() {
			g.c.add(this, "pauseMove");
			var a = this.get("move");
			if (!a) return !1;
			a.action = "pause";
			this.set("move", a);
			return !0
		},
		resumeMove: function() {
			g.c.add(this, "resumeMove");
			var a = this.get("move");
			if (!a) return !1;
			a.action = "resume";
			this.set("move", a);
			return !0
		},
		setShadow: function(a) {
			g.c.add(this, "setShadow");
			this.set("shadow", a)
		},
		getShadow: function() {
			g.c.add(this, "getShadow");
			return this.get("shadow", null, !0)
		},
		setClickable: function(a) {
			g.c.add(this, "setClickable");
			a !== this.get("clickable", null, !0) && this.set("clickable", a)
		},
		getClickable: function() {
			g.c.add(this,
				"getClickable");
			return this.get("clickable", null, !0)
		},
		setTitle: function(a, b) {
			g.c.add(this, "setTitle");
			"string" === typeof a && this.set("title", a, b)
		},
		getTitle: function() {
			g.c.add(this, "getTitle");
			return this.get("title", null, !0)
		},
		setLabel: function(a) {
			g.c.add(this, "setLabel");
			a && !g.a.bp(a) && (a = g.extend({}, this.get("label"), a));
			this.set("label", a)
		},
		getLabel: function() {
			g.c.add(this, "getLabel");
			return this.get("label", null, !0)
		},
		setTop: function(a, b) {
			g.c.add(this, "setTop");
			this.set("isTop", a, b)
		},
		getTop: function() {
			g.c.add(this,
				"getTop");
			return this.get("isTop", null, !0)
		},
		setShape: function(a, b) {
			g.c.add(this, "setShape");
			this.set("shape", a, b)
		},
		getShape: function() {
			g.c.add(this, "getShape");
			return this.get("shape", null, !0)
		},
		setAnimation: function(a, b) {
			g.c.add(this, "setAnimation");
			this.set("animation", a, b)
		},
		getAnimation: function() {
			g.c.add(this, "getAnimation");
			return this.get("animation", null, !0)
		},
		getMap: function() {
			g.c.add(this, "getMap");
			return this.get("map", null, !0)
		},
		markOnAMAP: function(a) {
			g.c.add(this, "markOnAMAP");
			a = a || {};
			var b = {};
			b.name = a.name || this.get("name", null, !0) || "";
			a = this.Fa(a.position) || this.get("position", null, !0);
			b.y = a.Q;
			b.x = a.R;
			g.zh.Gr(g.zh.Dka(b))
		}
	});
	z.A.Lm = z.A.Dh.extend({
		D: {
			visible: !1,
			items: []
		},
		r: function(a) {
			this.CLASS_NAME = "AMap.ContextMenu";
			g.c.qa(this, a);
			this.rg = !0;
			g.a.Ib(this, a);
			this.D.items = [];
			this.eg(this.D)
		},
		addItem: function(a, b, c) {
			g.c.add(this, "addItem");
			this.get("items").push({
				m5: a,
				rb: b,
				xH: c
			});
			this.q("items")
		},
		removeItem: function(a, b) {
			g.c.add(this, "removeItem");
			var c = this.get("items"),
				d, e;
			for (e = 0; e < c.length; e += 1)
				if (d = c[e], d.m5 === a && d.rb === b) {
					c.splice(e, 1);
					break
				} this.q("items")
		},
		open: function(a, b) {
			g.c.add(this, "open");
			this.B = !0;
			b = g.a.Fa(b);
			this.set("position", b);
			this.map ? this.map && this.map !== a && (this.map.Jx(this), this.map = a, this.setMap(a)) : (this.map = a, this
				.setMap(a));
			this.q("open", {
				type: "open",
				target: this
			});
			this.B = !1
		},
		close: function() {
			g.c.add(this, "close");
			this.B = !0;
			this.setMap(null);
			this.map && (this.map = this.map.tw = null, this.q("close", {
				type: "close",
				target: this
			}));
			this.B = !1
		}
	});
	z.A.Ge = z.A.Dh.extend({
		D: {
			visible: !0,
			offset: new g.G(0, 0),
			showShadow: !1,
			closeWhenClickMap: !1,
			retainWhenClose: !0,
			autoMove: !0,
			altitude: 0
		},
		r: function(a) {
			this.CLASS_NAME = this.CLASS_NAME || "AMap.InfoWindow";
			g.c.qa(this, a);
			a = a || {};
			this.rg = !0;
			a && a.size && (a.size = g.a.np(a.size));
			g.a.Ib(this, a);
			this.eg(this.D);
			a.position && this.set("position", g.a.Fa(a.position), !0);
			a.height && this.set("altitude", this.RN(a.height), !0)
		},
		open: function(a, b, c) {
			g.c.add(this, "open");
			b = g.a.Fa(b);
			if (a && !this.vI && (b = b || this.get("position",
					null, !0))) {
				this.q("change", {
					type: "change",
					target: this
				});
				c = this.RN(c) || this.get("altitude");
				var d = this.get("map", null, !0);
				d && d === a ? (this.set("altitude", c, !0), this.set("position", b)) : (this.map = a, a.sl && a.sl.close(),
					this.set("position", b, !0), this.set("altitude", c, !0), this.B = !0, this.setMap(a), this.B = !1);
				this.q("open", {
					type: "open",
					target: this
				})
			}
		},
		close: function() {
			g.c.add(this, "close");
			this.A && this.A.map && (this.B = !0, this.setMap(null), this.map = null, this.q("change", {
				type: "change",
				target: this
			}), this.B = !1)
		},
		setContent: function(a) {
			g.c.add(this, "setContent");
			this.set("content", a);
			this.q("change", {
				type: "change",
				target: this
			})
		},
		getContentU: function() {
			g.c.add(this, "getContentU");
			return this.get("content", null, !0)
		},
		getContentDom: function() {
			return this.get("contentDom", null, !0)
		},
		getContent: function() {
			g.c.add(this, "getContent");
			return this.get("content", null, !0)
		},
		setPosition: function(a) {
			g.c.add(this, "setPosition");
			a = g.a.Fa(a);
			this.set("position", a);
			this.q("change", {
				type: "change",
				target: this
			})
		},
		setOffset: function(a) {
			g.c.add(this,
				"setOffset");
			this.set("offset", a);
			this.q("change", {
				type: "change",
				target: this
			})
		},
		getPosition: function() {
			g.c.add(this, "getPosition");
			return this.get("position", null, !0)
		},
		setSize: function(a) {
			g.c.add(this, "setSize");
			a = g.a.np(a);
			this.set("size", a);
			this.q("change", {
				type: "change",
				target: this
			})
		},
		getSize: function(a) {
			g.c.add(this, "getSize");
			var b = this.get("size", null, !0);
			if (b) return b;
			if (this.A && !a) return new g.gd(this.A.Ph.offsetWidth, this.A.Ph.offsetHeight)
		},
		getIsOpen: function() {
			g.c.add(this, "getIsOpen");
			return !!this.get("map")
		}
	});
	z.A.Qb = z.A.lD.extend({
		D: {
			isOutline: !1,
			outlineColor: "#000000",
			geodesic: !1,
			dirColor: "white",
			borderWeight: 1
		},
		r: function(a) {
			this.CLASS_NAME = this.CLASS_NAME || "AMap.Polyline";
			g.c.qa(this, a);
			this.B = !0;
			z.A.Qb.Lc.r.apply(this, arguments);
			this.rg = !0;
			a = a || {};
			a.zIndex = "number" === typeof a.zIndex ? a.zIndex : 50;
			a.path && (a.path = this.Fa(a.path));
			g.a.Ib(this, a);
			this.setOptions(this.D);
			this.B = !1
		},
		getLength: function() {
			g.c.add(this, "getLength");
			for (var a = this.get("path"), b = 0, c = 0; c < a.length - 1; c += 1) b += a[c].le(a[c + 1]);
			return parseFloat(b.toFixed(2))
		}
	});
	(function(a) {
		function b(a, b, c, d) {
			if (1 <= a) return d;
			var e = 1 - a;
			return e * e * b + 2 * e * a * c + a * a * d
		}

		function c(a, b, c, d, e) {
			if (1 <= a) return e;
			var f = 3 * (c[0] - b[0]),
				h = 3 * (d[0] - c[0]) - f,
				s = 3 * (c[1] - b[1]);
			c = 3 * (d[1] - c[1]) - s;
			return [(e[0] - b[0] - f - h) * Math.pow(a, 3) + h * Math.pow(a, 2) + f * a + b[0], (e[1] - b[1] - s - c) * Math.pow(
				a, 3) + c * Math.pow(a, 2) + s * a + b[1]]
		}

		function d(a, c, d, e) {
			return [b(a, c[0], d[0], e[0]), b(a, c[1], d[1], e[1])]
		}

		function e(b, c) {
			c = a.a.Fa(c);
			return b.CB(c, 20).Dl()
		}

		function f(b, c) {
			a.a.isArray(c) && (c = new a.G(c[0], c[1]));
			return b.cC(c,
				20)
		}

		function h(b, f, h, n, p, q) {
			var r = null;
			if (b && h && h.length) {
				b = [b];
				b.push.apply(b, h);
				b.push(f);
				h = 0;
				for (r = b.length; h < r; h++) b[h] = e(n, b[h]);
				h = a.extend({
					tolerance: 4,
					interpolateNumLimit: [3, 300]
				}, q);
				q = h.tolerance;
				h = h.interpolateNumLimit;
				q = Math.max(2, q);
				for (var s = r = 0, u = 0, v = b.length; u < v - 1; u++) var x = b[u],
					t = b[u + 1],
					r = r + Math.abs(t[0] - x[0]),
					s = s + Math.abs(t[1] - x[1]);
				a: {
					p = Math.min(h[1], Math.max(h[0], Math.round(Math.max(r, s) / p / q)));q = null;
					switch (b.length) {
						case 3:
							q = d;
							break;
						case 4:
							q = c;
							break;
						default:
							r = null;
							break a
					}
					h = [];
					r = [0].concat(b);
					for (s = 1; s < p - 2; s++) r[0] = s / p,
					h.push(q.apply(null, r));h.push(b[b.length - 1]);r = h
				}
			}
			return r || [e(n, f)]
		}
		a.Tu = {
			Lya: d,
			Mva: c,
			YF: function() {
				function a(b, c, d) {
					return (((1 - 3 * d + 3 * c) * b + (3 * d - 6 * c)) * b + 3 * c) * b
				}

				function b(a) {
					return a
				}
				var c = {},
					d = "function" === typeof Float32Array;
				return function(e, f, h, s) {
					function u(b) {
						if (0 === b) b = 0;
						else if (1 === b) b = 1;
						else {
							for (var c = 0, d = 1; 10 !== d && x[d] <= b; ++d) c += 0.1;
							--d;
							var d = c + (b - x[d]) / (x[d + 1] - x[d]) * 0.1,
								l = 3 * (1 - 3 * h + 3 * e) * d * d + 2 * (3 * h - 6 * e) * d + 3 * e;
							if (0.001 <= l) {
								for (c = 0; 4 > c; ++c) {
									l = 3 *
										(1 - 3 * h + 3 * e) * d * d + 2 * (3 * h - 6 * e) * d + 3 * e;
									if (0 === l) break;
									d -= (a(d, e, h) - b) / l
								}
								b = d
							} else if (0 === l) b = d;
							else {
								var d = c,
									c = c + 0.1,
									m, n = 0;
								do m = d + (c - d) / 2, l = a(m, e, h) - b, 0 < l ? c = m : d = m; while (1E-7 < Math.abs(l) && 10 > ++n);
								b = m
							}
							b = a(b, f, s)
						}
						return b
					}
					if (!(0 <= e && 1 >= e && 0 <= h && 1 >= h)) throw Error("bezier x values must be in [0, 1] range");
					var v = arguments.toString();
					if (c[v]) return c[v];
					if (e === f && h === s) return b;
					for (var x = d ? new Float32Array(11) : Array(11), t = 0; 11 > t; ++t) x[t] = a(0.1 * t, e, h);
					return c[v] = u
				}
			}(),
			N_: function(a, b, c, d) {
				var e, f, r = [];
				e = 0;
				for (f =
					a.length; e < f; e += 1) r.push.apply(r, h(a[e - 1], a[e], a[e].controlPoints, b, c, d));
				return r
			},
			ska: function(a, b, c, d) {
				a = this.N_(a, b, c, d);
				c = [];
				d = 0;
				for (var e = a.length; d < e; d++) c.push(f(b, a[d]));
				return c
			}
		}
	})(g);
	z.A.By = z.A.Qb.extend({
		D: {
			tolerance: 4,
			interpolateNumLimit: [3, 300]
		},
		r: function(a) {
			this.CLASS_NAME = "AMap.BezierCurve";
			g.c.qa(this, a);
			z.A.By.Lc.r.apply(this, arguments)
		},
		getLength: function() {
			g.c.add(this, "getLength");
			this.get("map");
			this.B = !0;
			var a = this.getInterpolateLngLats();
			this.B = !1;
			return g.Np.distanceOfLine(a)
		},
		getInterpolateLngLats: function() {
			g.c.add(this, "getInterpolateLngLats");
			var a = this.get("map");
			return g.Tu.ska(this.get("path"), a && a.Bi || g.yh.$I, Math.pow(2, 2), this.D)
		},
		getSerializedPath: function() {
			g.c.add(this,
				"getSerializedPath");
			for (var a = this.get("path", null, !0), b = [], c = 0, d = a.length; c < d; c++) {
				var e = a[c];
				if (e instanceof g.U) {
					var f = [];
					if (e.controlPoints)
						for (var h = 0, k = e.controlPoints.length; h < k; h++) f.push(e.controlPoints[h].mO()), f.push(e.controlPoints[
							h].iO());
					f.push(e.mO());
					f.push(e.iO());
					b.push(f)
				} else b.push(e)
			}
			return b
		},
		Fa: function(a) {
			var b = typeof a[0];
			if (g.a.isArray(a) && "object" === b) {
				for (b = 0; b < a.length; b += 1) a[b] = this.Qda(a[b]);
				return a
			}
			return [this.qya(a)]
		},
		Qda: function(a) {
			var b;
			if (a instanceof g.U) b =
				a;
			else {
				b = typeof a[0];
				var c, d, e = [];
				if ("string" === b || "number" === b) {
					d = a.length;
					if (d % 2) throw Error("LngLat number should be even, now it's " + d);
					b = new g.U(a[d - 2], a[d - 1]);
					c = 0;
					for (d -= 2; c < d; c += 2) e.push(new g.U(a[c], a[c + 1]))
				} else if (g.a.isArray(a[0]))
					for (d = a.length, b = new g.U(a[d - 1][0], a[d - 1][1]), c = 0, d -= 1; c < d; c++) e.push(new g.U(a[c][0], a[
						c][1]));
				else throw Error("AMap.LngLat expected, now it's " + a);
				b && e.length && (b.controlPoints = g.a.Fa(e))
			}
			if (b.controlPoints && 2 < b.controlPoints.length) throw Error("Control Points Number should be 1 or 2 !");
			return b
		}
	});
	z.A.tc = z.A.lD.extend({
		r: function(a) {
			this.CLASS_NAME = this.CLASS_NAME || "AMap.Polygon";
			g.c.qa(this, a);
			this.B = !0;
			z.A.tc.Lc.r.apply(this, arguments);
			this.rg = !0;
			a = a || {};
			a.zIndex = "number" === typeof a.zIndex ? a.zIndex : 10;
			a.path && (a.path = this.Fa(a.path));
			g.a.Ib(this, g.extend({
				fillColor: "#FFAA00",
				fillOpacity: 0.9
			}, a));
			this.setOptions(this.D);
			this.B = !1
		},
		tO: function(a) {
			var b = 6378137 * Math.PI / 180,
				c = 0,
				d = a.length;
			if (3 > d) return 0;
			for (var e = 0; e < d - 1; e += 1) var f = a[e],
				h = a[e + 1],
				k = f.R * b * Math.cos(f.Q * Math.PI / 180),
				f = f.Q * b,
				l = h.R *
				b * Math.cos(h.Q * Math.PI / 180),
				c = c + (k * h.Q * b - l * f);
			e = a[e];
			a = a[0];
			d = e.R * b * Math.cos(e.Q * Math.PI / 180);
			e = e.Q * b;
			h = a.R * b * Math.cos(a.Q * Math.PI / 180);
			c += d * a.Q * b - h * e;
			return 0.5 * Math.abs(c)
		},
		getArea: function() {
			g.c.add(this, "getArea");
			var a = this.get("path", null, !0),
				b;
			if (!a.length || a[0] instanceof g.U) b = this.tO(a);
			else {
				b = this.tO(a[0]);
				for (var c = 1; c < a.length; c += 1) b -= this.tO(a[c])
			}
			return Number(b.toFixed(2))
		},
		toString: function() {
			g.c.add(this, "toString");
			return this.get("path").join(";")
		},
		contains: function(a) {
			g.c.add(this,
				"contains");
			a = g.a.Fa(a);
			var b = this.get("path");
			b.length && b[0] instanceof g.U && (b = [b]);
			a = [a.R, a.Q];
			for (var c, d = 0, e = b.length; d < e && (c = this.cha(b[d]), g.ed.$o(c) || c.reverse(), c = g.ed.ud(a, c, 0 ===
					d ? !0 : !1), 0 < d && (c = !c), c); d += 1);
			return c
		},
		cha: function(a) {
			for (var b = [], c = 0; c < a.length; c += 1) b.push([a[c].R, a[c].Q]);
			return b
		}
	});
	z.A.Eg = z.A.Qc.extend({
		D: {
			visible: !0,
			zIndex: 10,
			strokeColor: "#006600",
			strokeOpacity: 0.9,
			strokeWeight: 3,
			strokeStyle: "solid",
			strokeDasharray: [10, 5],
			radius: 1E3,
			fillColor: "#006600",
			fillOpacity: 0.9,
			unit: "miter"
		},
		r: function(a) {
			this.CLASS_NAME = this.CLASS_NAME || "AMap.Circle";
			g.c.qa(this, a);
			this.B = !0;
			z.A.Eg.Lc.r.apply(this, arguments);
			a = a || {};
			a.center && (a.center = g.a.Fa(a.center));
			a.zIndex = "number" === typeof a.zIndex ? a.zIndex : 10;
			g.a.qj(a.radius, "string") && (a.radius = parseFloat(a.radius), isNaN(a.radius) && delete a.radius);
			g.a.Ib(this, a);
			this.rg = this.D.center ? !0 : !1;
			this.setOptions(this.D);
			this.B = !1
		},
		setCenter: function(a, b) {
			g.c.add(this, "setCenter");
			(a = g.a.Fa(a)) && a instanceof g.U && (this.set("center", a), this.q("change", {
				type: "change",
				target: this
			}), this.rg || (this.rg = !0, this.get("map") && this.get("map").q("overlays")), b || this.q("setCenter"))
		},
		getCenter: function() {
			g.c.add(this, "getCenter");
			var a = this.get("center", null, !0);
			this.A && this.A.get("deltaPos") && (a = this.A.GK([a], this.A.get("deltaPos"))[0]);
			return a
		},
		setRadius: function(a,
			b) {
			g.c.add(this, "setRadius");
			this.set("radius", a);
			this.q("change", {
				type: "change",
				target: this
			});
			b || this.q("setRadius")
		},
		getPath: function(a) {
			g.c.add(this, "getPath");
			a = a || 36;
			for (var b = this.get("center", null, !0), c = this.get("radius", null, !0), d = [], e = 0; e < a; e += 1) {
				var f = Math.PI * e / a * 2,
					h = Math.cos(f) * c,
					f = Math.sin(f) * c;
				d.push(b.offset(h, f))
			}
			return d
		},
		getRadius: function() {
			g.c.add(this, "getRadius");
			return this.get("radius", null, !0)
		},
		getBounds: function() {
			var a = this.get("center"),
				b = this.get("radius");
			if (!a) return null;
			var c = a.offset(-b, -b),
				a = a.offset(b, b);
			return new g.ue(c, a)
		},
		contains: function(a) {
			g.c.add(this, "contains");
			return this.get("center").le(a) <= this.get("radius") ? !0 : !1
		}
	});
	z.A.lS = z.A.Eg.extend({
		r: function(a) {
			this.CLASS_NAME = "AMap.CircleMarker";
			g.c.qa(this, a);
			a = a || {};
			a.unit = "px";
			void 0 === a.radius ? a.radius = 20 : g.a.qj(a.radius, "string") && (a.radius = parseFloat(a.radius), isNaN(a.radius) &&
				(a.radius = 20));
			z.A.lS.Lc.r.apply(this, arguments)
		},
		getBounds: function() {
			this.B = !0;
			var a = this.getCenter();
			this.B = !1;
			return new g.ue(a, a.jb())
		},
		contains: function(a) {
			g.c.add(this, "contains");
			this.B = !0;
			var b = this.getMap();
			this.B = !1;
			if (!b) return !1;
			var c = this.get("center");
			b.B = !0;
			var d = !1;
			c.le(a) <=
				this.get("radius") * b.getResolution(c) && (d = !0);
			b.B = !1;
			return d
		}
	});
	var qc = g.Z.extend({
		r: function(a) {
			var b = Array(3),
				c;
			c = a instanceof Array ? a : a instanceof g.Jk || a instanceof g.La ? a.elements : arguments;
			b[0] = c[0] || 0;
			b[1] = c[1] || 0;
			b[2] = c[2] || 0;
			this.elements = b
		},
		length: function() {
			return Math.sqrt(this.F1())
		},
		F1: function() {
			var a = this.elements;
			return a[0] * a[0] + a[1] * a[1] + a[2] * a[2]
		},
		normalize: function() {
			var a = this.elements,
				b = a[0],
				c = a[1],
				d = a[2],
				e = Math.sqrt(b * b + c * c + d * d);
			if (e) {
				if (1 === e) return this
			} else return a[0] = 0, a[1] = 0, a[2] = 0, this;
			e = 1 / e;
			a[0] = b * e;
			a[1] = c * e;
			a[2] = d * e;
			return this
		},
		jb: function() {
			return new g.La(this)
		},
		copy: function(a) {
			var b = this.elements;
			a = a.elements;
			b[0] = a[0];
			b[1] = a[1];
			b[2] = a[2];
			return this
		},
		set: function(a, b, c) {
			var d = this.elements;
			d[0] = a;
			d[1] = b;
			d[2] = c
		},
		eb: function(a) {
			var b = this.elements;
			a = a.elements;
			return b[0] === a[0] && b[1] === a[1] && b[2] === a[2]
		},
		Am: function(a) {
			var b = this.elements;
			b[0] *= a;
			b[1] *= a;
			b[2] *= a;
			return this
		},
		add: function(a) {
			var b = this.elements;
			a = a.elements;
			b[0] += a[0];
			b[1] += a[1];
			b[2] += a[2];
			return this
		},
		fga: function(a, b) {
			var c = a.elements,
				d = b.elements,
				e = this.elements;
			e[0] = c[0] + d[0];
			e[1] = c[1] + d[1];
			e[2] = c[2] + d[2];
			return this
		},
		sub: function(a) {
			a = a.elements;
			var b = this.elements;
			b[0] -= a[0];
			b[1] -= a[1];
			b[2] -= a[2];
			return this
		},
		Zx: function(a, b) {
			var c = a.elements,
				d = b.elements,
				e = this.elements;
			e[0] = c[0] - d[0];
			e[1] = c[1] - d[1];
			e[2] = c[2] - d[2];
			return this
		},
		Cq: function(a) {
			a = a.elements;
			var b = this.elements;
			b[0] = b[1] * a[2] - b[2] * a[1];
			b[1] = b[2] * a[0] - b[0] * a[2];
			b[2] = b[0] * a[1] - b[1] * a[0];
			return this
		},
		ww: function(a, b) {
			var c = a.elements,
				d = b.elements,
				e = this.elements;
			e[0] = c[1] * d[2] -
				c[2] * d[1];
			e[1] = c[2] * d[0] - c[0] * d[2];
			e[2] = c[0] * d[1] - c[1] * d[0];
			return this
		},
		gf: function(a) {
			a = a.elements;
			var b = this.elements;
			return b[0] * a[0] + b[1] * a[1] + b[2] * a[2]
		},
		le: function(a) {
			return Math.sqrt(this.QZ(a))
		},
		QZ: function(a) {
			var b = a.elements,
				c = this.elements;
			a = c[0] - b[0];
			var d = c[1] - b[1],
				b = c[2] - b[2];
			return a * a + d * d + b * b
		},
		yf: function(a) {
			var b = this.elements[0],
				c = this.elements[1],
				d = this.elements[2];
			a = a.elements;
			var e = 1 / (a[3] * b + a[7] * c + a[11] * d + a[15]);
			this.elements[0] = (a[0] * b + a[4] * c + a[8] * d + a[12]) * e;
			this.elements[1] =
				(a[1] * b + a[5] * c + a[9] * d + a[13]) * e;
			this.elements[2] = (a[2] * b + a[6] * c + a[10] * d + a[14]) * e;
			return this
		}
	});
	g.La = qc;
	g.La.$c({
		gf: "dot",
		jb: "clone",
		add: "add",
		sub: "sub",
		fga: "addVectors",
		Zx: "subVectors",
		ww: "crossVectors",
		normalize: "normalize",
		length: "length"
	});
	var rc = g.Z.extend({
		r: function(a) {
			var b = Array(4),
				c;
			c = a instanceof Array ? a : arguments;
			b[0] = c[0];
			b[1] = c[1];
			b[2] = c[2];
			b[3] = c[3] || 1;
			this.elements = b
		},
		copy: function(a) {
			var b = this.elements;
			a = a.elements;
			b[0] = a[0];
			b[1] = a[1];
			b[2] = a[2];
			b[3] = void 0 !== a[3] ? a[3] : 1;
			return this
		},
		multiply: function(a) {
			var b = this.elements;
			b[0] *= a;
			b[1] *= a;
			b[2] *= a;
			b[3] *= a
		},
		yf: function(a) {
			var b = this.elements[0],
				c = this.elements[1],
				d = this.elements[2],
				e = this.elements[3];
			a = a.elements;
			this.elements[0] = a[0] * b + a[4] * c + a[8] * d + a[12] * e;
			this.elements[1] =
				a[1] * b + a[5] * c + a[9] * d + a[13] * e;
			this.elements[2] = a[2] * b + a[6] * c + a[10] * d + a[14] * e;
			this.elements[3] = a[3] * b + a[7] * c + a[11] * d + a[15] * e;
			return this
		}
	});
	g.Jk = rc;

	function sc(a, b) {
		this.vx = void 0 !== a ? a : new g.La(1, 0, 0);
		this.HA = void 0 !== b ? b : 0
	}
	g.ev = sc;
	sc.prototype = {
		set: function(a, b) {
			this.vx.copy(a);
			this.HA = b;
			return this
		},
		normalize: function() {
			var a = 1 / this.vx.length();
			this.vx.Am(a);
			this.HA *= a;
			return this
		},
		RF: function(a) {
			return this.vx.gf(a) + this.HA
		}
	};

	function tc(a, b, c, d, e) {
		a.vx.set(b, c, d);
		a.HA = e;
		return a
	};

	function uc(a, b, c, d, e, f) {
		this.$B = [void 0 !== a ? a : new g.ev, void 0 !== b ? b : new g.ev, void 0 !== c ? c : new g.ev, void 0 !== d ? d :
			new g.ev, void 0 !== e ? e : new g.ev, void 0 !== f ? f : new g.ev
		]
	}
	g.uS = uc;
	uc.prototype = {
		set: function(a, b, c, d, e, f) {
			var h = this.$B;
			h[0].copy(a);
			h[1].copy(b);
			h[2].copy(c);
			h[3].copy(d);
			h[4].copy(e);
			h[5].copy(f);
			return this
		},
		jb: function() {
			return (new g.uS).copy(this)
		},
		copy: function(a) {
			for (var b = this.$B, c = 0; 6 > c; c++) b[c].copy(a.$B[c]);
			return this
		},
		RG: function() {
			var a = new g.La,
				b = new g.La,
				c = a.elements,
				d = b.elements;
			return function(e) {
				var f = this.$B,
					h = e.max.elements;
				e = e.min.elements;
				for (var k = 0; 6 > k; k++) {
					var l = f[k],
						m = l.vx.elements;
					c[0] = 0 < m[0] ? e[0] : h[0];
					d[0] = 0 < m[0] ? h[0] : e[0];
					c[1] = 0 < m[1] ?
						e[1] : h[1];
					d[1] = 0 < m[1] ? h[1] : e[1];
					c[2] = 0 < m[2] ? e[2] : h[2];
					d[2] = 0 < m[2] ? h[2] : e[2];
					m = l.RF(a);
					l = l.RF(b);
					if (0 > m && 0 > l) return !1
				}
				return !0
			}
		}()
	};
	(function(a) {
		function b(a) {
			this.elements = a || [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
		}
		a.mJ = function(a) {
			this.elements = [a.elements[0], a.elements[1], a.elements[2], a.elements[4], a.elements[5], a.elements[6], a.elements[
				8], a.elements[9], a.elements[10]]
		};
		b.prototype.aR = function() {
			var a = this.elements;
			a[0] = 1;
			a[4] = 0;
			a[8] = 0;
			a[12] = 0;
			a[1] = 0;
			a[5] = 1;
			a[9] = 0;
			a[13] = 0;
			a[2] = 0;
			a[6] = 0;
			a[10] = 1;
			a[14] = 0;
			a[3] = 0;
			a[7] = 0;
			a[11] = 0;
			a[15] = 1
		};
		b.prototype.set = function(a) {
			if (a.elements !== this.elements) return this.elements = a.elements.slice(0),
				this
		};
		b.prototype.toFixed = function(b) {
			for (var d = this.elements, e = 0; 16 > e; ++e) 0 !== d[e] && (d[e] = a.a.Wc(d[e], b));
			return this
		};
		b.prototype.concat = function(a) {
			var b, e, f, h, k, l, m;
			e = b = this.elements;
			f = a.elements;
			if (b === f)
				for (f = Array(16), a = 0; 16 > a; ++a) f[a] = b[a];
			for (a = 0; 4 > a; a++) h = e[a], k = e[a + 4], l = e[a + 8], m = e[a + 12], b[a] = h * f[0] + k * f[1] + l * f[2] +
				m * f[3], b[a + 4] = h * f[4] + k * f[5] + l * f[6] + m * f[7], b[a + 8] = h * f[8] + k * f[9] + l * f[10] + m *
				f[11], b[a + 12] = h * f[12] + k * f[13] + l * f[14] + m * f[15];
			return this
		};
		b.multiply = function(b, d) {
			var e = Array(16),
				f, h,
				k, l, m, n, p;
			k = h = b.elements;
			l = d.elements;
			if (h === l)
				for (f = 0; 16 > f; ++f) e[f] = h[f];
			for (f = 0; 4 > f; f++) h = k[f], m = k[f + 4], n = k[f + 8], p = k[f + 12], e[f] = h * l[0] + m * l[1] + n * l[2] +
				p * l[3], e[f + 4] = h * l[4] + m * l[5] + n * l[6] + p * l[7], e[f + 8] = h * l[8] + m * l[9] + n * l[10] + p *
				l[11], e[f + 12] = h * l[12] + m * l[13] + n * l[14] + p * l[15];
			return new a.Od(e)
		};
		b.prototype.multiply = b.prototype.concat;
		b.prototype.Zg = function(b) {
			var d = this.elements;
			b = b.elements;
			var e = new a.Jk,
				f = e.elements;
			f[0] = b[0] * d[0] + b[1] * d[4] + b[2] * d[8] + b[3] * d[12];
			f[1] = b[0] * d[1] + b[1] * d[5] + b[2] * d[9] + b[3] *
				d[13];
			f[2] = b[0] * d[2] + b[1] * d[6] + b[2] * d[10] + b[3] * d[14];
			f[3] = b[0] * d[3] + b[1] * d[7] + b[2] * d[11] + b[3] * d[15];
			return e
		};
		b.prototype.gy = function() {
			var a, b;
			a = this.elements;
			b = a[1];
			a[1] = a[4];
			a[4] = b;
			b = a[2];
			a[2] = a[8];
			a[8] = b;
			b = a[3];
			a[3] = a[12];
			a[12] = b;
			b = a[6];
			a[6] = a[9];
			a[9] = b;
			b = a[7];
			a[7] = a[13];
			a[13] = b;
			b = a[11];
			a[11] = a[14];
			a[14] = b;
			return this
		};
		b.prototype.wqa = function(a) {
			var b, e, f;
			b = a.elements;
			a = this.elements;
			e = [];
			e[0] = b[5] * (b[10] * b[15] - b[11] * b[14]) - b[9] * (b[6] * b[15] + b[7] * b[14]) + b[13] * (b[6] * b[11] - b[
				7] * b[10]);
			e[4] = -b[4] *
				(b[10] * b[15] - b[11] * b[14]) + b[8] * (b[6] * b[15] - b[7] * b[14]) - b[12] * (b[6] * b[11] - b[7] * b[10]);
			e[8] = b[4] * (b[9] * b[15] - b[11] * b[13]) - b[8] * (b[5] * b[15] - b[7] * b[13]) + b[12] * (b[5] * b[11] - b[7] *
				b[9]);
			e[12] = -b[4] * (b[9] * b[14] - b[10] * b[13]) + b[8] * (b[5] * b[14] - b[6] * b[13]) - b[12] * (b[5] * b[10] - b[
				6] * b[9]);
			e[1] = -b[1] * (b[10] * b[15] - b[11] * b[14]) + b[9] * (b[2] * b[15] - b[3] * b[14]) - b[13] * (b[2] * b[11] - b[
				3] * b[10]);
			e[5] = b[0] * (b[10] * b[15] - b[11] * b[14]) - b[8] * (b[2] * b[15] - b[3] * b[14]) + b[12] * (b[2] * b[11] - b[
				3] * b[10]);
			e[9] = -b[0] * (b[9] * b[15] - b[11] * b[13]) + b[8] *
				(b[1] * b[15] - b[3] * b[13]) - b[12] * (b[1] * b[11] - b[3] * b[9]);
			e[13] = b[0] * (b[9] * b[14] - b[10] * b[13]) - b[8] * (b[1] * b[14] - b[2] * b[13]) + b[12] * (b[1] * b[10] - b[
				2] * b[9]);
			e[2] = b[1] * (b[6] * b[15] - b[7] * b[14]) - b[5] * (b[2] * b[15] - b[3] * b[14]) + b[13] * (b[2] * b[7] - b[3] *
				b[6]);
			e[6] = -b[0] * (b[6] * b[15] - b[7] * b[14]) + b[4] * (b[2] * b[15] - b[3] * b[14]) - b[12] * (b[2] * b[7] - b[3] *
				b[6]);
			e[10] = b[0] * (b[5] * b[15] - b[7] * b[13]) - b[4] * (b[1] * b[15] - b[3] * b[13]) + b[12] * (b[1] * b[7] - b[3] *
				b[5]);
			e[14] = -b[0] * (b[5] * b[14] - b[6] * b[13]) + b[4] * (b[1] * b[14] - b[2] * b[13]) - b[12] * (b[1] * b[6] -
				b[2] * b[5]);
			e[3] = -b[1] * (b[6] * b[11] - b[7] * b[10]) + b[5] * (b[2] * b[11] - b[3] * b[10]) - b[9] * (b[2] * b[7] - b[3] *
				b[6]);
			e[7] = b[0] * (b[6] * b[11] - b[7] * b[10]) - b[4] * (b[2] * b[11] + b[3] * b[10]) + b[8] * (b[2] * b[7] - b[3] *
				b[6]);
			e[11] = -b[0] * (b[5] * b[11] + b[7] * b[9]) + b[4] * (b[1] * b[11] - b[3] * b[9]) - b[8] * (b[1] * b[7] + b[3] *
				b[5]);
			e[15] = b[0] * (b[5] * b[10] - b[6] * b[9]) - b[4] * (b[1] * b[10] + b[2] * b[9]) + b[8] * (b[1] * b[6] - b[2] *
				b[5]);
			f = b[0] * e[0] + b[1] * e[4] + b[2] * e[8] + b[3] * e[12];
			if (0 === f) return this;
			f = 1 / f;
			for (b = 0; 16 > b; b++) a[b] = e[b] * f;
			return this
		};
		b.prototype.ag = function() {
			return (new b).wqa(this)
		};
		b.prototype.dR = function(a, b, e, f, h, k) {
			var l, m, n, p;
			if (a === b || e === f || h === k) throw "null frustum";
			m = 1 / (b - a);
			n = 1 / (f - e);
			p = 1 / (k - h);
			l = this.elements;
			l[0] = 2 * m;
			l[1] = 0;
			l[2] = 0;
			l[3] = 0;
			l[4] = 0;
			l[5] = 2 * n;
			l[6] = 0;
			l[7] = 0;
			l[8] = 0;
			l[9] = 0;
			l[10] = -2 * p;
			l[11] = 0;
			l[12] = -(b + a) * m;
			l[13] = -(f + e) * n;
			l[14] = -(k + h) * p;
			l[15] = 1;
			return this
		};
		b.prototype.boa = function(a, d, e, f, h, k) {
			return this.concat((new b).dR(a, d, e, f, h, k))
		};
		b.prototype.uqa = function(a, b, e, f, h, k) {
			var l, m, n, p;
			if (a === b || f === e || h === k) throw "null frustum";
			if (0 >= h) throw "near <= 0";
			if (0 >=
				k) throw "far <= 0";
			m = 1 / (b - a);
			n = 1 / (f - e);
			p = 1 / (k - h);
			l = this.elements;
			l[0] = 2 * h * m;
			l[1] = 0;
			l[2] = 0;
			l[3] = 0;
			l[4] = 0;
			l[5] = 2 * h * n;
			l[6] = 0;
			l[7] = 0;
			l[8] = (b + a) * m;
			l[9] = (f + e) * n;
			l[10] = -(k + h) * p;
			l[11] = -1;
			l[12] = 0;
			l[13] = 0;
			l[14] = -2 * h * k * p;
			l[15] = 0;
			return this
		};
		b.prototype.$N = function(a, d, e, f, h, k) {
			return this.concat((new b).uqa(a, d, e, f, h, k))
		};
		b.prototype.f4 = function(a, b, e, f) {
			var h, k;
			if (e === f || 0 === b) throw "null frustum";
			if (0 >= e) throw "near <= 0";
			if (0 >= f) throw "far <= 0";
			a /= 2;
			k = Math.sin(a);
			if (0 === k) throw "null frustum";
			h = 1 / (f - e);
			k = Math.cos(a) /
				k;
			a = this.elements;
			a[0] = k / b;
			a[1] = 0;
			a[2] = 0;
			a[3] = 0;
			a[4] = 0;
			a[5] = k;
			a[6] = 0;
			a[7] = 0;
			a[8] = 0;
			a[9] = 0;
			a[10] = -(f + e) * h;
			a[11] = -1;
			a[12] = 0;
			a[13] = 0;
			a[14] = -2 * e * f * h;
			a[15] = 0;
			return this
		};
		b.prototype.perspective = function(a, d, e, f) {
			return this.concat((new b).f4(a, d, e, f))
		};
		b.prototype.mu = function(a, b, e) {
			var f = this.elements;
			f[0] = a;
			f[4] = 0;
			f[8] = 0;
			f[12] = 0;
			f[1] = 0;
			f[5] = b;
			f[9] = 0;
			f[13] = 0;
			f[2] = 0;
			f[6] = 0;
			f[10] = e;
			f[14] = 0;
			f[3] = 0;
			f[7] = 0;
			f[11] = 0;
			f[15] = 1;
			return this
		};
		b.prototype.scale = function(a, b, e) {
			var f = this.elements;
			f[0] *= a;
			f[4] *= b;
			f[8] *= e;
			f[1] *= a;
			f[5] *= b;
			f[9] *= e;
			f[2] *= a;
			f[6] *= b;
			f[10] *= e;
			f[3] *= a;
			f[7] *= b;
			f[11] *= e;
			return this
		};
		b.prototype.i4 = function(a, b, e) {
			var f = this.elements;
			f[12] = a;
			f[13] = b;
			f[14] = e;
			return this
		};
		b.prototype.translate = function(a, b, e) {
			var f = this.elements;
			f[12] += f[0] * a + f[4] * b + f[8] * e;
			f[13] += f[1] * a + f[5] * b + f[9] * e;
			f[14] += f[2] * a + f[6] * b + f[10] * e;
			f[15] += f[3] * a + f[7] * b + f[11] * e;
			return this
		};
		b.prototype.Ux = function(a, b, e, f) {
			var h, k, l, m, n, p, q, r;
			a = Math.PI * a / 180;
			h = this.elements;
			k = Math.sin(a);
			a = Math.cos(a);
			0 !== b && 0 === e && 0 === f ?
				(0 > b && (k = -k), h[0] = 1, h[4] = 0, h[8] = 0, h[12] = 0, h[1] = 0, h[5] = a, h[9] = -k, h[13] = 0, h[2] = 0,
					h[6] = k, h[10] = a, h[14] = 0, h[3] = 0, h[7] = 0, h[11] = 0) : 0 === b && 0 !== e && 0 === f ? (0 > e && (k = -
					k), h[0] = a, h[4] = 0, h[8] = k, h[12] = 0, h[1] = 0, h[5] = 1, h[9] = 0, h[13] = 0, h[2] = -k, h[6] = 0, h[
					10] = a, h[14] = 0, h[3] = 0, h[7] = 0, h[11] = 0) : 0 === b && 0 === e && 0 !== f ? (0 > f && (k = -k), h[0] =
					a, h[4] = -k, h[8] = 0, h[12] = 0, h[1] = k, h[5] = a, h[9] = 0, h[13] = 0, h[2] = 0, h[6] = 0, h[10] = 1, h[14] =
					0, h[3] = 0, h[7] = 0, h[11] = 0) : (l = Math.sqrt(b * b + e * e + f * f), 1 !== l && (l = 1 / l, b *= l, e *=
						l, f *= l), l = 1 - a, m = b * e, n = e * f, p = f * b, q = b * k,
					r = e * k, k *= f, h[0] = b * b * l + a, h[1] = m * l + k, h[2] = p * l - r, h[3] = 0, h[4] = m * l - k, h[5] =
					e * e * l + a, h[6] = n * l + q, h[7] = 0, h[8] = p * l + r, h[9] = n * l - q, h[10] = f * f * l + a, h[11] = 0,
					h[12] = 0, h[13] = 0, h[14] = 0);
			h[15] = 1;
			return this
		};
		b.prototype.rotate = function(a, d, e, f) {
			return this.concat((new b).Ux(a, d, e, f))
		};
		b.prototype.xr = function(a) {
			return this.rotate(a, 1, 0, 0)
		};
		b.prototype.yr = function(a) {
			return this.rotate(a, 0, 1, 0)
		};
		b.prototype.zr = function(a) {
			return this.rotate(a, 0, 0, 1)
		};
		a.Od = b
	})(g);
	z.A.Tr = z.A.tc.extend({
		D: {
			visible: !0,
			zIndex: 10,
			strokeColor: "#006600",
			strokeOpacity: 0.9,
			strokeWeight: 3,
			strokeStyle: "solid",
			strokeDasharray: [10, 5],
			radius: [1E3, 1E3],
			fillColor: "#006600",
			fillOpacity: 0.9
		},
		r: function() {
			var a = this,
				b = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
			this.CLASS_NAME = "AMap.Ellipse";
			g.c.qa(this, b);
			var b = g.extend({}, this.D, b),
				c = this.pq(b);
			b.path = c;
			z.A.Tr.Lc.r.call(this, b);
			this.set("path", c);
			this.get("center") && this.get("map") || (this.rg = !1);
			this.on("movepoly", function(b) {
				var c =
					a.get("map");
				b = c.Ee(c.Rb(a.get("center")).add(b.Bx));
				"3D" === c.view.type && a.set("deltaPos", [0, 0]);
				a.set("center", b)
			})
		},
		pq: function() {
			var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
				b = [],
				c = a.center || this.get("center"),
				d = a.map || this.get("map");
			if (c && d)
				for (var c = g.a.Fa(c), e = a.radius || this.get("radius"), f = d.Rb(c), a = f.x, f = f.y, h = g.a.map(e,
						function(a) {
							return a / d.getResolution(c, 20)
						}), e = h[0], h = h[1], k = g.l.Y, l = (k ? 4 : 1) * Math.PI / 180, m = 0, k = k ? 89 : 359; m <= k; m++) {
					var n = m * l,
						n = {
							x: a + e * Math.cos(n),
							y: f + h *
								Math.sin(n)
						};
					b.push(d.Ee(n))
				}
			return b
		},
		mapChanged: function() {
			g.a.Vh(z.A.Tr.Lc.mapChanged) && z.A.Tr.Lc.mapChanged.apply(this);
			this.B = !0;
			this.setPath(this.pq());
			this.B = !1;
			!this.rg && this.get("map") && (this.rg = !0, this.get("map").q("overlays"))
		},
		setCenter: function(a, b) {
			g.c.add(this, "setCenter");
			(a = g.a.Fa(a)) && a instanceof g.U && (this.set("center", a), this.set("path", this.pq()), this.rg || (this.rg = !
				0, this.get("map") && this.get("map").q("overlays")), b || (this.q("setCenter"), this.q("change", {
				type: "change",
				target: this
			})))
		},
		setRadius: function(a) {
			var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : !1;
			g.c.add(this, "setRadius");
			a && 2 === a.length && (this.set("radius", a), this.set("path", this.pq()), b || (this.q("change", {
				type: "change",
				target: this
			}), this.q("setPath")))
		},
		setOptions: function(a) {
			z.A.Tr.Lc.setOptions.call(this, a);
			this.B = !0;
			a.radius && this.setRadius(a.radius, !0);
			a.center && this.setCenter(a.center, !0);
			this.B = !1
		},
		getRadius: function() {
			g.c.add(this, "getRadius");
			return this.get("radius", null, !0)
		},
		getCenter: function() {
			g.c.add(this,
				"getCenter");
			var a = this.get("center", null, !0);
			this.A && this.A.get("deltaPos") && this.A.GK([a], this.A.get("deltaPos"))[0];
			return a
		}
	});
	z.A.Yr = z.A.tc.extend({
		D: {
			visible: !0,
			zIndex: 10,
			strokeColor: "#006600",
			strokeOpacity: 0.9,
			strokeWeight: 3,
			strokeStyle: "solid",
			strokeDasharray: [10, 5],
			fillColor: "#006600",
			fillOpacity: 0.9
		},
		r: function() {
			var a = this,
				b = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
			this.CLASS_NAME = "AMap.Rectangle";
			g.c.qa(this, b);
			b = g.extend({}, this.D, b);
			this.B = !0;
			var c = this.pq(b);
			b.path = c;
			z.A.Yr.Lc.r.call(this, b);
			this.setPath(c);
			this.D.bounds && this.get("map") || (this.rg = !1);
			this.on("movepoly", function(b) {
				var c = a.get("map"),
					f = a.get("bounds"),
					h = c.Ee(c.Rb(f.oc).add(b.Bx));
				b = c.Ee(c.Rb(f.ac).add(b.Bx));
				"3D" === c.view.type && a.set("deltaPos", [0, 0]);
				a.set("bounds", new g.ue(h, b))
			});
			this.B = !1
		},
		pq: function() {
			var a = [],
				b = (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}).bounds || this.get("bounds");
			if (b) {
				b.B = !0;
				var c = b.getSouthWest(),
					d = b.getNorthEast();
				b.B = !1;
				g.a.Mb([new g.U(c.R, c.Q, !0), new g.U(d.R, c.Q, !0), new g.U(d.R, d.Q, !0), new g.U(c.R, d.Q, !0)], function(b) {
					return a.push(b)
				})
			}
			return a
		},
		mapChanged: function() {
			g.a.Vh(z.A.Yr.Lc.mapChanged) &&
				z.A.Yr.Lc.mapChanged.apply(this);
			this.B = !0;
			this.setPath(this.pq());
			this.B = !1;
			!this.rg && this.get("map") && (this.rg = !0, this.get("map").q("overlays"))
		},
		setOptions: function(a) {
			this.B = !0;
			z.A.Yr.Lc.setOptions.call(this, a);
			a.bounds && this.setBounds(a.bounds, !0);
			this.B = !1
		},
		setBounds: function(a) {
			var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : !1;
			g.c.add(this, "setBounds");
			a && a instanceof g.ue && (this.set("bounds", a), this.set("path", this.pq()), this.rg || (this.rg = !0, this.get(
					"map") && this.get("map").q("overlays")),
				b || (this.q("change", {
					type: "change",
					target: this
				}), this.q("setBounds")))
		},
		getBounds: function() {
			g.c.add(this, "getBounds");
			return this.get("bounds", null, !0)
		}
	});
	z.A.QS = z.A.lb.extend({
		D: {
			text: "",
			textAlign: "center",
			verticalAlign: "middle",
			offset: new g.G(0, 0)
		},
		r: function(a) {
			this.CLASS_NAME = "AMap.Text";
			g.c.qa(this, a);
			z.A.QS.Lc.r.apply(this, arguments);
			this.Caa();
			this.B = !0;
			this.setText(this.get("text"));
			this.setStyle(this.get("style"));
			this.B = !1
		},
		Caa: function() {
			if (!this.qA) {
				var a = document.createElement("div");
				a.className = "amap-overlay-text-container";
				this.qA = a
			}
		},
		getText: function() {
			g.c.add(this, "getText");
			return this.get("text", null, !0)
		},
		setText: function(a) {
			g.c.add(this,
				"setText");
			a || 0 === a || (a = "");
			g.g.yra(this.qA, "amap-overlay-text-empty", !a);
			g.c.add(this, "setText");
			this.set("text", a);
			this.qA.innerHTML = a;
			this.r3()
		},
		setStyle: function(a) {
			g.c.add(this, "setStyle");
			a = a || {};
			for (var b in a) a.hasOwnProperty(b) && (this.qA.style[b] = a[b]);
			this.r3()
		},
		r3: function() {
			this.B = !0;
			this.setContent(this.qA);
			this.setShadow(this.getShadow());
			this.B = !1
		}
	});
	g.yS = {
		find: function(a) {
			return g.a.find(this.lv || [], a)
		},
		pG: function() {
			return this.lv || []
		},
		xd: function(a) {
			return null !== this.find(a)
		},
		add: function(a) {
			var b = this,
				c = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : g.a.mr,
				d = this.lv || (this.lv = []);
			g.a.isArray(a) ? g.a.Mb(a, function(a) {
				b.add(a, c)
			}) : null === this.find(a) && (d.push(a), c(a));
			return this
		},
		remove: function(a) {
			var b = this,
				c = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : g.a.mr,
				d = this.lv;
			if (d)
				if (g.a.isArray(a)) g.a.Mb(a, function(a) {
					b.remove(a,
						c)
				});
				else {
					var e = g.a.indexOf(d, a); - 1 !== e && (c(d[e]), d.splice(e, 1))
				} return this
		},
		clear: function() {
			this.Mb(0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : g.a.mr);
			this.lv = [];
			return this
		},
		Mb: function() {
			var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : g.a.mr,
				b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
			g.a.Mb(this.lv || [], function() {
				for (var c = arguments.length, d = Array(c), e = 0; e < c; e++) d[e] = arguments[e];
				c = d[0];
				g.a.Vh(c.Mb) ? c.Mb(a, b) : a.apply(b || c, d)
			});
			return this
		},
		Bn: function(a) {
			for (var b =
					arguments.length, c = Array(1 < b ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
			this.Mb(function(b) {
				b && g.a.Vh(b[a]) && b[a].apply(b, c)
			});
			return this
		},
		h: function(a) {
			var b = arguments;
			this.Mb(function(a) {
				a.on.apply(a, b)
			});
			return this
		},
		I: function(a) {
			var b = arguments;
			this.Mb(function(a) {
				a.off.apply(a, b)
			});
			return this
		},
		addListener: function() {
			this.h.apply(this, arguments)
		},
		fw: function(a) {
			var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : g.a.mr,
				c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
			this.Mb(function(d) {
				d.on.call(d,
					event,
					function() {
						b();
						d.off(a)
					}, c)
			})
		},
		removeListener: function(a) {
			this.I(a.IN, a.MO, a.ff)
		},
		M: function(a, b) {
			this.Mb(function(c) {
				c.emit(a, b)
			})
		}
	};
	z.A.Nm = z.A.Dh.extend({
		ga: [g.yS],
		r: function() {
			var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [];
			this.CLASS_NAME = "AMap.OverlayGroup";
			g.c.qa(this);
			z.A.Nm.Lc.r.apply(this);
			this.map = null;
			this.add(a)
		},
		cc: function(a) {
			g.c.add(this, "setMap");
			this.Bn("setMap", a);
			this.Bn("setMap", a);
			this.set("map", a);
			this.map = a;
			return this
		},
		mapChanged: function() {},
		tA: function(a) {
			var b = this;
			g.c.add(this, "addOverlay");
			this.add(a, function(a) {
				b.map && (a.B = !0, a.setMap(b.map), a.B = !1)
			});
			return this
		},
		Jx: function(a) {
			var b =
				this;
			g.c.add(this, "removeOverlay");
			this.remove(a, function(a) {
				a.B = !0;
				a.getMap() === b.map && a.setMap(null);
				a.B = !1
			});
			return this
		},
		Tc: function() {
			var a = this;
			g.c.add(this, "clearOverlays");
			this.clear(function(b) {
				b.B = !0;
				b.getMap() === a.map && b.setMap(null);
				b.B = !1
			});
			return this
		},
		$w: function() {
			g.c.add(this, "hide");
			this.Bn("hide");
			return this
		},
		show: function() {
			g.c.add(this, "show");
			this.Bn("show");
			return this
		},
		Ib: function() {
			var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
			g.c.add(this, "setOptions");
			this.Bn("setOptions", a);
			return this
		}
	});
	z.A.Nm.$c({
		find: "getOverlay",
		pG: "getOverlays",
		tA: ["addOverlay", "addOverlays"],
		xd: "hasOverlay",
		Jx: ["removeOverlay", "removeOverlays"],
		Tc: "clearOverlays",
		Mb: "eachOverlay",
		cc: "setMap",
		Ib: "setOptions",
		show: "show",
		$w: "hide",
		h: "on",
		I: "off"
	});
	(function(a, b) {
		function c(a, b) {
			if (!a.length) return !1;
			for (var c = 0, d = a.length; c < d; c++) {
				var e = a[c];
				if (!("*" === b || e && e.geometry && e.geometry.type === b) || e && e.properties && !e.properties._isAmap) return !
					1
			}
			return !0
		}

		function d(a) {
			for (var b = [], c = 0, d = a.length; c < d; c++) b.push(a[c].geometry.coordinates);
			return b
		}

		function e(a) {
			if (!a) return [];
			a = b.a.Fa(a);
			for (var c = [], d = 0, e = a.length; d < e; d++) c[d] = a[d].Dl();
			return c
		}
		a.A.vS = a.A.Nm.extend({
			r: function(c) {
				this.CLASS_NAME = "AMap.GeoJSON";
				b.c.qa(this, c);
				a.A.vS.Lc.r.call(this,
					[]);
				this.B = !0;
				this.D = b.extend({
					getMarker: function(b, c) {
						return new a.A.lb({
							innerOverlay: !0,
							position: c
						})
					},
					getPolyline: function(b, c) {
						return new a.A.Qb({
							path: c,
							innerOverlay: !0
						})
					},
					getPolygon: function(b, c) {
						return new a.A.tc({
							path: c,
							innerOverlay: !0
						})
					},
					coordsToLatLng: function(a) {
						return a
					}
				}, c);
				if (!this.D.coordsToLatLngs) {
					var d = this.D.coordsToLatLng;
					this.D.coordsToLatLngs = function(a) {
						for (var b = [], c = 0, e = a.length; c < e; c++) b.push(d.call(null, a[c]));
						return b
					}
				}
				this.importData(this.D.geoJSON);
				this.B = !1
			},
			importData: function(a) {
				b.c.add(this,
					"importData");
				if (a && (a = this.xaa(a), a.length)) {
					this.clearOverlays();
					this.tA(a);
					var c = this.D.map;
					if (c)
						for (var d = 0, e = a.length; d < e; d++) a[d].B = !0, a[d].setMap(c), a[d].B = !1
				}
			},
			toGeoJSON: function() {
				b.c.add(this, "toGeoJSON");
				for (var a = this.pG(), c = [], d = 0, e = a.length; d < e; d++) a[d].B = !0, c[d] = a[d].toGeoJSON(), a[d].B = !
					1;
				return c
			},
			xaa: function(a) {
				if (a) {
					b.a.isArray(a) || (a = [a]);
					for (var c = [], d = 0, e = a.length; d < e; d++) {
						var m = this.yaa(a[d]);
						m && c.push(m)
					}
					return c
				}
			},
			FT: function(a) {
				var b = "Feature" === a.type ? a.geometry : a,
					b = this.D.coordsToLatLng(b ?
						b.coordinates : null),
					b = this.D.getMarker(a, b);
				this.iq(a, b);
				return b
			},
			N8: function(c) {
				for (var d = "Feature" === c.type ? c.geometry : c, d = d ? d.coordinates : null, e = [], l = 0, m = d.length; l <
					m; l++) e.push(this.FT(b.extend({}, c, {
					type: "Feature",
					properties: {
						_isAmap: !0,
						_pointIndex: l,
						_parentProperities: c.properties
					},
					geometry: {
						type: "Point",
						coordinates: d[l]
					}
				})));
				d = new a.A.Nm(e);
				this.iq(c, d);
				return d
			},
			ET: function(a) {
				var b = "Feature" === a.type ? a.geometry : a,
					b = this.D.coordsToLatLngs(b ? b.coordinates : null),
					b = this.D.getPolyline(a, b);
				this.iq(a,
					b);
				return b
			},
			M8: function(c) {
				for (var d = "Feature" === c.type ? c.geometry : c, d = d ? d.coordinates : null, e = [], l = 0, m = d.length; l <
					m; l++) e.push(this.ET(b.extend({}, c, {
					type: "Feature",
					properties: {
						_isAmap: !0,
						_lineStringIndex: l,
						_parentProperities: c.properties
					},
					geometry: {
						type: "LineString",
						coordinates: d[l]
					}
				})));
				d = new a.A.Nm(e);
				this.iq(c, d);
				return d
			},
			GT: function(a) {
				for (var b = "Feature" === a.type ? a.geometry : a, b = b ? b.coordinates : null, c = [], d = 0, e = b.length; d <
					e; d++) c.push(this.D.coordsToLatLngs(b[d]));
				b = this.D.getPolygon(a, c);
				this.iq(a,
					b);
				return b
			},
			O8: function(c) {
				for (var d = "Feature" === c.type ? c.geometry : c, d = d ? d.coordinates : null, e = [], l = 0, m = d.length; l <
					m; l++) e.push(this.GT(b.extend({}, c, {
					type: "Feature",
					properties: {
						_isAmap: !0,
						_polygonIndex: l,
						_parentProperities: c.properties
					},
					geometry: {
						type: "Polygon",
						coordinates: d[l]
					}
				})));
				d = new a.A.Nm(e);
				this.iq(c, d);
				return d
			},
			G8: function(c) {
				for (var d = ("Feature" === c.type ? c.geometry : c).geometries, e = [], l = 0, m = d.length; l < m; l++) e.push(
					this.OK(b.extend({}, c, {
						type: "Feature",
						properties: {
							_isAmap: !0,
							_geometryIndex: l,
							_parentProperities: c.properties
						},
						geometry: d[l]
					})));
				d = new a.A.Nm(e);
				this.iq(c, d);
				return d
			},
			yaa: function(b) {
				if (b) switch (b.type) {
					case "Feature":
						return this.OK(b);
					case "FeatureCollection":
						for (var c = b.features, d = [], e = 0, m = c.length; e < m; e++) {
							var n = this.OK(c[e]);
							n && d.push(n)
						}
						c = new a.A.Nm(d);
						this.iq(b, c);
						return c;
					default:
						throw Error("Invalid GeoJSON object." + b.type);
				}
			},
			iq: function(a, c) {
				c && a.properties && c.setExtData && (c.B = !0, c.setExtData(b.extend({}, c.getExtData() || {}, {
					_geoJsonProperties: a.properties
				})), c.B = !1)
			},
			OK: function(a) {
				var b = "Feature" === a.type ? a.geometry : a;
				if (!(b && b.coordinates || b)) return null;
				switch (b.type) {
					case "Point":
						return this.FT(a);
					case "MultiPoint":
						return this.N8(a);
					case "LineString":
						return this.ET(a);
					case "MultiLineString":
						return this.M8(a);
					case "Polygon":
						return this.GT(a);
					case "MultiPolygon":
						return this.O8(a);
					case "GeometryCollection":
						return this.G8(a);
					default:
						throw Error("Invalid GeoJSON geometry." + b.type);
				}
			}
		});
		a.A.Nm.ub({
			toGeoJSON: function(a) {
				b.c.add(this, "toGeoJSON");
				a = a || this.pG();
				for (var e = [], k = 0, l = a.length; k < l; k++) a[k].toGeoJSON && (a[k].B = !0, e[k] = a[k].toGeoJSON(), a[k]
					.B = !1);
				this.B = !0;
				a = this.getExtData() || {};
				this.B = !1;
				if (c(e, "Point")) e = {
					type: "Feature",
					properties: a._geoJsonProperties || {},
					geometry: {
						type: "MultiPoint",
						coordinates: d(e)
					}
				};
				else if (c(e, "LineString")) e = {
					type: "Feature",
					properties: a._geoJsonProperties || {},
					geometry: {
						type: "MultiLineString",
						coordinates: d(e)
					}
				};
				else if (c(e, "Polygon")) e = {
					type: "Feature",
					properties: a._geoJsonProperties || {},
					geometry: {
						type: "MultiPolygon",
						coordinates: d(e)
					}
				};
				else if (c(e, "*")) {
					a = a._geoJsonProperties || {};
					for (var k = [], l = 0, m = e.length; l < m; l++) k.push(e[l].geometry);
					e = {
						type: "Feature",
						properties: a,
						geometry: {
							type: "GeometryCollection",
							geometries: k
						}
					}
				} else e = {
					type: "FeatureCollection",
					properties: a._geoJsonProperties || {},
					features: e
				};
				return e
			}
		});
		a.A.lb.ub({
			toGeoJSON: function() {
				b.c.add(this, "toGeoJSON");
				this.B = !0;
				var a = this.getExtData() || {},
					c = this.getPosition().Dl();
				this.B = !1;
				return {
					type: "Feature",
					properties: a._geoJsonProperties || {},
					geometry: {
						type: "Point",
						coordinates: c
					}
				}
			}
		});
		a.A.Qb.ub({
			toGeoJSON: function() {
				b.c.add(this, "toGeoJSON");
				this.B = !0;
				var a = this.getExtData() || {},
					c = this.getPath();
				this.B = !1;
				return {
					type: "Feature",
					properties: a._geoJsonProperties || {},
					geometry: {
						type: "LineString",
						coordinates: e(c)
					}
				}
			}
		});
		a.A.tc.ub({
			toGeoJSON: function() {
				b.c.add(this, "toGeoJSON");
				this.B = !0;
				var a = this.getExtData() || {},
					c = this.getPath();
				this.B = !1;
				a = a._geoJsonProperties || {};
				if (c) {
					c = b.a.Fa(c);
					b.a.isArray(c[0]) || (c = [c]);
					for (var d = [], l = 0, m = c.length; l < m; l++) d[l] = e(c[l]);
					c = d
				} else c = [];
				return {
					type: "Feature",
					properties: a,
					geometry: {
						type: "Polygon",
						coordinates: c
					}
				}
			}
		})
	})(z, g);
	z.o.eJ = z.o.Hc.extend({
		ga: [g.yS],
		r: function(a) {
			var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
			this.CLASS_NAME = "AMap.LayerGroup";
			g.c.qa(this, b);
			z.o.eJ.Lc.r.call(this, b);
			this.map = null;
			this.add(a)
		},
		cc: function(a) {
			g.c.add(this, "setMap");
			this.Bn("setMap", a);
			this.set("map", a);
			this.map = a;
			return this
		},
		mapChanged: function() {},
		mF: function(a) {
			var b = this;
			g.c.add(this, "addLayer");
			this.add(a, function(a) {
				b.map && (a.B = !0, a.setMap(b.map), a.B = !1)
			});
			return this
		},
		Bj: function(a) {
			var b = this;
			g.c.add(this,
				"removeLayer");
			this.remove(a, function(a) {
				a.B = !0;
				a.getMap() === b.map && a.setMap(null);
				a.B = !1
			});
			return this
		},
		zha: function() {
			var a = this;
			g.c.add(this, "clearLayers");
			this.clear(function(b) {
				b.B = !0;
				b.getMap() === a.map && b.setMap(null);
				b.B = !1
			});
			return this
		},
		$w: function() {
			g.c.add(this, "hide");
			this.Bn("hide");
			return this
		},
		show: function() {
			g.c.add(this, "show");
			this.Bn("show");
			return this
		},
		reload: function() {
			this.Bn("reload");
			return this
		},
		Ib: function() {
			var a = this,
				b = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
			g.c.add(this, "setOptions");
			var c = g.a.keys(b);
			g.a.Mb(c, function(c) {
				a.Bn("set", c, b[c])
			});
			return this
		}
	});
	z.o.eJ.$c({
		find: "getLayer",
		pG: "getLayers",
		mF: ["addLayer", "addLayers"],
		xd: "hasLayer",
		Bj: ["removeLayer", "removeLayers"],
		zha: "clearLayers",
		Mb: "eachLayer",
		cc: "setMap",
		Ib: "setOptions",
		show: "show",
		$w: "hide",
		reload: "reload",
		h: "on",
		I: "off"
	});
	g.W6 = z.Db.extend({
		r: function(a, b) {
			b && (b.center = b.position, b.zoom = 11);
			arguments.callee.ka.apply(this, arguments);
			window.console && window.console.log && window.console.log(
				"\u9ad8\u5fb7\u5730\u56feJSAPI\u8857\u666f\u5df2\u4e0b\u7ebf\uff0c\u611f\u8c22\u60a8\u7684\u652f\u6301\u3002")
		}
	});
	g.X6 = z.A.lb.extend({
		r: function(a) {
			arguments.callee.ka.apply(this, arguments)
		}
	});
	g.ed = {
		Hq: function(a, b) {
			for (var c = Infinity, d = 0, e = 1, f = b.length; e < f; d = e, e += 1) c = Math.min(c, g.ed.Uqa(a, [b[d], b[e]]));
			return Math.sqrt(c)
		},
		Uqa: function(a, b) {
			return this.nI(a, this.tZ(a, b))
		},
		nI: function(a, b) {
			var c = a[0] - b[0],
				d = a[1] - b[1];
			return c * c + d * d
		},
		Gya: function(a, b, c, d) {
			d = d || 1E-6;
			if (c[0] === b[0]) {
				var e = Math.min(b[1], c[1]);
				b = Math.max(b[1], c[1]);
				return Math.abs(a[0] - c[0]) < d && a[1] >= e && a[1] <= b
			}
			var e = Math.min(b[0], c[0]),
				f = Math.max(b[0], c[0]);
			return Math.abs((c[1] - b[1]) / (c[0] - b[0]) * (a[0] - b[0]) + b[1] - a[1]) < d &&
				a[0] >= e && a[0] <= f
		},
		tZ: function(a, b) {
			var c = a[0],
				d = a[1],
				e = b[0],
				f = b[1],
				h = e[0],
				e = e[1],
				k = f[0],
				f = f[1],
				l = k - h,
				m = f - e,
				c = 0 === l && 0 === m ? 0 : (l * (c - h) + m * (d - e)) / (l * l + m * m || 0);
			0 >= c || (1 <= c ? (h = k, e = f) : (h += c * l, e += c * m));
			return [h, e]
		},
		$o: function(a) {
			for (var b = a.length, c = 0, d = a[b - 1], e = d[0], d = d[1], f, h, k = 0; k < b; k += 1) h = a[k], f = h[0], h =
				h[1], c += (f - e) * (h + d), e = f, d = h;
			return 0 < c
		},
		ud: function(a, b, c) {
			var d = a[0];
			a = a[1];
			var e = !1,
				f, h, k, l, m = b.length,
				n = 0;
			for (l = m - 1; n < m; l = n, n += 1) {
				var p = !1;
				f = b[n][0];
				h = b[n][1];
				k = b[l][0];
				l = b[l][1];
				if (f === d && h === a || k ===
					d && l === a) return c ? !0 : !1;
				if (h < a === l >= a) {
					f = (k - f) * (a - h) / (l - h) + f;
					if (d === f) return c ? !0 : !1;
					p = d < f
				}
				p && (e = !e)
			}
			return e
		},
		a3: function(a, b) {
			function c(a, b, c, d) {
				var e = [a[0] - b[0], a[1] - b[1]],
					f = [c[0] - d[0], c[1] - d[1]];
				a = a[0] * b[1] - a[1] * b[0];
				c = c[0] * d[1] - c[1] * d[0];
				d = 1 / (e[0] * f[1] - e[1] * f[0]);
				return [(a * f[0] - c * e[0]) * d, (a * f[1] - c * e[1]) * d]
			}

			function d(a, b, c) {
				return (c[0] - b[0]) * (a[1] - b[1]) > (c[1] - b[1]) * (a[0] - b[0])
			}
			var e, f, h, k, l = a;
			e = b[b.length - 2];
			for (var m = 0, n = b.length - 1; m < n; m++) {
				f = b[m];
				var p = l,
					l = [];
				h = p[p.length - 1];
				for (var q = 0, r =
						p.length; q < r; q++) k = p[q], d(k, e, f) ? (d(h, e, f) || l.push(c(e, f, h, k)), l.push(k)) : d(h, e, f) &&
					l.push(c(e, f, h, k)), h = k;
				e = f
			}
			if (3 > l.length) return [];
			l.push(l[0]);
			return l
		}
	};
	(function(a) {
		function b(b, c) {
			var d;
			a: {
				switch (b) {
					case "EPSG3395":
						d = a.yh.pS;
						break a;
					case "EPSG4326":
						d = a.yh.qS;
						break a
				}
				d = a.yh.$I
			}
			return {
				project: function(b) {
					a.a.isArray(b) && (b = new a.U(b[0], b[1]));
					return d.CB(b, c).Dl()
				},
				unproject: function(b) {
					a.a.isArray(b) && (b = new a.G(b[0], b[1]));
					return d.cC(b, c).Dl()
				},
				normalizePoint: function(b) {
					return a.a.Fa(b)
				},
				distance: function(b, c) {
					c = this.normalizePoint(c);
					if (a.a.isArray(c)) return this.distanceToLine(b, c);
					b = this.normalizePoint(b);
					var d = a.Ml.ft,
						e = Math.cos,
						f = b.Q * d,
						h =
						c.Q * d,
						k = 2 * a.Ml.CN,
						d = c.R * d - b.R * d,
						e = (1 - e(h - f) + (1 - e(d)) * e(f) * e(h)) / 2;
					return k * Math.asin(Math.sqrt(e))
				},
				ringArea: function(b) {
					b = this.normalizeLine(b);
					var c = a.Ml.CN * a.Ml.ft,
						d = 0,
						e = b.length;
					if (3 > e) return 0;
					for (var f = 0; f < e - 1; f += 1) var h = b[f],
						k = b[f + 1],
						u = h.R * c * Math.cos(h.Q * a.Ml.ft),
						h = h.Q * c,
						v = k.R * c * Math.cos(k.Q * a.Ml.ft),
						d = d + (u * k.Q * c - v * h);
					f = b[f];
					b = b[0];
					e = f.R * c * Math.cos(f.Q * a.Ml.ft);
					f = f.Q * c;
					k = b.R * c * Math.cos(b.Q * a.Ml.ft);
					d += e * b.Q * c - k * f;
					return 0.5 * Math.abs(d)
				},
				sphericalCalotteArea: function(b) {
					var c = a.Ml.CN;
					b = c - c *
						Math.cos(b / c);
					return 2 * Math.PI * c * b
				}
			}
		}

		function c() {
			return {
				normalizePoint: function(a) {
					return a && a.x && a.y ? [a.x, a.y] : a
				},
				distance: function(a, b) {
					var c = a[0] - b[0],
						d = a[1] - b[1];
					return Math.sqrt(c * c + d * d)
				},
				project: function(a) {
					return a
				},
				unproject: function(a) {
					return a
				},
				ringArea: function(a) {
					for (var b = [0, 0], c = [0, 0], d = 0, e = a[0], n = a.length, p = 2; p < n; p++) {
						var q = a[p - 1],
							r = a[p];
						b[0] = e[0] - r[0];
						b[1] = e[1] - r[1];
						c[0] = e[0] - q[0];
						c[1] = e[1] - q[1];
						d += b[0] * c[1] - b[1] * c[0]
					}
					return d / 2
				}
			}
		}

		function d(a) {
			for (var b = 0, c = a.length, d = 0; d < c - 1; d++) var e =
				a[d],
				n = a[d + 1],
				b = b + (n[0] - e[0]) * (n[1] + e[1]);
			if (a[c - 1][0] !== a[0][0] || a[c - 1][1] !== a[0][1]) e = a[c - 1], n = a[0], b += (n[0] - e[0]) * (n[1] + e[1]);
			return 0 >= b
		}

		function e(b) {
			this.CLASS_NAME = "AMap.GeometryUtil";
			this.Kb = a.extend({
				onSegmentTolerance: 5,
				crs: "EPSG3857",
				maxZoom: 20
			}, b);
			this.setCrs(this.Kb.crs)
		}
		a.extend(e.prototype, {
			clone: function(b) {
				return new e(a.extend({}, this.Kb, b))
			},
			isPoint: function(b) {
				return b && (b instanceof a.U || a.a.isArray(b) && !isNaN(b[0]))
			},
			normalizePoint: function(a) {
				return a
			},
			normalizeLine: function(a) {
				for (var b = [], c = 0, d = a.length; c < d; c++) b.push(this.normalizePoint(a[c]));
				return b
			},
			normalizeMultiLines: function(b) {
				a.a.isArray(b) && this.isPoint(b[0]) && (b = [b]);
				for (var c = [], d = 0, e = b.length; d < e; d++) c.push(this.normalizeLine(b[d]));
				return c
			},
			setCrs: function(d) {
				a.extend(this, d && d.project && d.unproject ? d : "plane" === d ? c() : b(d, this.Kb.maxZoom))
			},
			distance: function() {
				throw Error("distance Not implemented!");
			},
			Jv: function(a, b) {
				a = this.normalizeLine(a);
				this.isPoint(a[0]) || (a = a[0]);
				for (var c = [], d = 0, e = a.length; d < e; d++) c.push(this.project(a[d]));
				!0 === b ? c = this.makesureClockwise(c) : !1 === b && (c = this.makesureClockwise(c), c.reverse());
				return c
			},
			sea: function(a) {
				for (var b = [], c = 0, d = a.length; c < d; c++) b.push(this.unproject(a[c]));
				return b
			},
			closestOnSegment: function(b, c, d) {
				b = a.ed.tZ(this.project(b), this.Jv([c, d]));
				return this.unproject(b)
			},
			closestOnLine: function(a, b) {
				b = this.normalizeLine(b);
				for (var c = Infinity, d, e = 0, n = b.length; e < n - 1; e++) {
					var p = this.closestOnSegment(a, b[e], b[e + 1]),
						q = this.distance(a, p);
					q < c && (c = q, d = p)
				}
				return d
			},
			distanceToSegment: function(a,
				b, c) {
				return this.distanceToLine(a, [b, c])
			},
			distanceToLine: function(a, b) {
				b = this.normalizeLine(b);
				this.isPoint(b[0]) || (b = b[0]);
				for (var c = Infinity, d = 0, e = b.length; d < e - 1; d++) var n = this.closestOnSegment(a, b[d], b[d + 1]),
					c = Math.min(c, this.distance(a, n));
				return c
			},
			distanceToPolygon: function(a, b) {
				return this.isPointInRing(a, b) ? 0 : this.distanceToLine(a, b)
			},
			isPointOnSegment: function(a, b, c, d) {
				if (!d && 0 !== d || 0 > d) d = this.Kb.onSegmentTolerance;
				return this.distanceToSegment(a, b, c) <= d
			},
			isPointOnLine: function(a, b, c) {
				b = this.normalizeLine(b);
				for (var d = 0, e = b.length; d < e - 1; d++)
					if (this.isPointOnSegment(a, b[d], b[d + 1], c)) return !0;
				return !1
			},
			isPointOnRing: function(a, b, c) {
				b = this.normalizeLine(b);
				for (var d = 0, e = b.length; d < e; d++)
					if (this.isPointOnSegment(a, b[d], b[d === e - 1 ? 0 : d + 1], c)) return !0;
				return !1
			},
			isPointOnPolygon: function(a, b, c) {
				b = this.normalizeMultiLines(b);
				for (var d = 0, e = b.length; d < e; d++)
					if (this.isPointOnRing(a, b[d], c)) return !0;
				return !1
			},
			makesureClockwise: function(a) {
				d(a) || (a = [].concat(a), a.reverse());
				return a
			},
			makesureAntiClockwise: function(a) {
				d(a) &&
					(a = [].concat(a), a.reverse());
				return a
			},
			isPointInRing: function(b, c) {
				c = this.normalizeLine(c);
				var d = this.Jv(c, !0);
				return a.ed.ud(this.project(b), d, !1)
			},
			isRingInRing: function(a, b) {
				for (var c = 0, d = a.length; c < d; c++)
					if (!this.isPointInRing(a[c], b)) return !1;
				return !0
			},
			isPointInPolygon: function(a, b) {
				b = this.normalizeMultiLines(b);
				for (var c, d = 0, e = b.length; d < e && (c = this.isPointInRing(a, b[d]), 0 < d && (c = !c), c); d += 1);
				return c
			},
			doesSegmentsIntersect: function(a, b, c, d) {
				var e = this.Jv([a, b, c, d]);
				a = e[0];
				b = e[1];
				c = e[2];
				d = e[3];
				var e = !1,
					n = (d[0] - c[0]) * (a[1] - c[1]) - (d[1] - c[1]) * (a[0] - c[0]),
					p = (b[0] - a[0]) * (a[1] - c[1]) - (b[1] - a[1]) * (a[0] - c[0]);
				a = (d[1] - c[1]) * (b[0] - a[0]) - (d[0] - c[0]) * (b[1] - a[1]);
				0 !== a && (b = n / a, p /= a, 0 <= b && 1 >= b && 0 <= p && 1 >= p && (e = !0));
				return e
			},
			doesSegmentLineIntersect: function(a, b, c) {
				c = this.normalizeLine(c);
				for (var d = 0, e = c.length; d < e - 1; d++)
					if (this.doesSegmentsIntersect(a, b, c[d], c[d + 1])) return !0;
				return !1
			},
			doesSegmentRingIntersect: function(a, b, c) {
				c = this.normalizeLine(c);
				for (var d = 0, e = c.length; d < e; d++)
					if (this.doesSegmentsIntersect(a,
							b, c[d], c[d === e - 1 ? 0 : d + 1])) return !0;
				return !1
			},
			doesSegmentPolygonIntersect: function(a, b, c) {
				c = this.normalizeMultiLines(c);
				for (var d = 0, e = c.length; d < e; d++)
					if (this.doesSegmentRingIntersect(a, b, c[d])) return !0;
				return !1
			},
			doesLineLineIntersect: function(a, b) {
				a = this.normalizeLine(a);
				for (var c = 0, d = a.length; c < d - 1; c++)
					if (this.doesSegmentLineIntersect(a[c], a[c + 1], b)) return !0;
				return !1
			},
			doesLineRingIntersect: function(a, b) {
				a = this.normalizeLine(a);
				for (var c = 0, d = a.length; c < d - 1; c++)
					if (this.doesSegmentRingIntersect(a[c],
							a[c + 1], b)) return !0;
				return !1
			},
			doesPolygonPolygonIntersect: function(a, b) {
				return this.doesRingRingIntersect(b, a) || this.isRingInRing(a, b) || this.isRingInRing(b, a) ? !0 : !1
			},
			doesRingRingIntersect: function(a, b) {
				a = this.normalizeLine(a);
				for (var c = 0, d = a.length; c < d; c++)
					if (this.doesSegmentRingIntersect(a[c], a[c === d - 1 ? 0 : c + 1], b)) return !0;
				return !1
			},
			gga: function(a, b) {
				for (var c = 0, d = 0; d < a.length - 1; d += 1) {
					var e = this.distance(a[d], a[d + 1]);
					if (e + c < b) c += e;
					else return c = (b - c) / e, [a[d][0] + c * (a[d + 1][0] - a[d][0]), a[d][1] + c * (a[d +
						1][1] - a[d][1]), d]
				}
				return null
			},
			TT: function(a, b) {
				function c() {
					var a = [e[0] - n[0], e[1] - n[1]],
						b = [p[0] - q[0], p[1] - q[1]],
						d = e[0] * n[1] - e[1] * n[0],
						f = p[0] * q[1] - p[1] * q[0],
						h = 1 / (a[0] * b[1] - a[1] * b[0]);
					return [(d * b[0] - f * a[0]) * h, (d * b[1] - f * a[1]) * h]
				}

				function d(a) {
					return (n[0] - e[0]) * (a[1] - e[1]) > (n[1] - e[1]) * (a[0] - e[0])
				}
				a = this.makesureAntiClockwise(a);
				b = this.makesureClockwise(b);
				var e, n, p, q, r = a;
				e = b[b.length - 1];
				for (var s = 0, u = b.length; s < u; s++) {
					n = b[s];
					var v = r,
						r = [];
					p = v[v.length - 1];
					for (var x = 0, t = v.length; x < t; x++) q = v[x], d(q) ? (d(p) ||
						r.push(c()), r.push(q)) : d(p) && r.push(c()), p = q;
					e = n
				}
				return r
			},
			ringRingClip: function(a, b) {
				a = this.Jv(a);
				b = this.Jv(b);
				var c = this.TT(a, b);
				0 == c.length && (c = this.TT(b, a));
				return this.sea(c)
			},
			ringArea: function() {
				throw Error("distance Not implemented!");
			},
			distanceOfLine: function(a) {
				a = this.normalizeLine(a);
				for (var b = 0, c = 0, d = a.length; c < d - 1; c++) b += this.distance(a[c], a[c + 1]);
				return b
			},
			isClockwise: function(a) {
				a = this.Jv(a);
				return d(a)
			}
		});
		a.Np = new e;
		a.Ol = new e;
		a.Ol.setCrs("plane")
	})(g);
	g.xS = function() {
		var a = {};
		(function() {
			a.Nma = function(a) {
				for (var c = 0, d = a.length, e = 0; e < d - 1; e++) var f = a[e],
					h = a[e + 1],
					c = c + (h[0] - f[0]) * (h[1] + f[1]);
				if (a[d - 1][0] !== a[0][0] || a[d - 1][1] !== a[0][1]) f = a[d - 1], h = a[0], c += (h[0] - f[0]) * (h[1] + f[
					1]);
				0 >= c && (a = [].concat(a), a.reverse());
				return a
			}
		})();
		(function() {
			function b(a) {
				var b = a.length;
				2 < b && a[b - 1][0] == a[0][0] && a[b - 1][1] == a[0][1] && a.pop()
			}

			function c(a, b) {
				for (var c = 0; c < b.length; c++) a.push(b[c][0]), a.push(b[c][1])
			}
			a.Fl = function(a, e) {
				e = e || [];
				var f = [],
					h = [];
				b(a);
				c(f, a);
				var k =
					a.length;
				e.forEach(b);
				for (var l = 0; l < e.length; l++) h.push(k), k += e[l].length, c(f, e[l]);
				return this.zI(f, h)
			}
		})();
		return a
	};
	(function(a) {
		a.rS = function() {
			function a(b, c, d, e, f) {
				for (var h, k = 0, l = c, n = d - e; l < d; l += e) k += (b[n] - b[l]) * (b[l + 1] + b[n + 1]), n = l;
				if (f === 0 < k)
					for (f = c; f < d; f += e) h = r(f, b[f], b[f + 1], h);
				else
					for (f = d - e; f >= c; f -= e) h = r(f, b[f], b[f + 1], h);
				h && m(h, h.next) && (s(h), h = h.next);
				return h
			}

			function c(a, b) {
				if (!a) return a;
				b || (b = a);
				var c = a,
					d;
				do
					if (d = !1, c.z4 || !m(c, c.next) && 0 !== l(c.Ba, c, c.next)) c = c.next;
					else {
						s(c);
						c = b = c.Ba;
						if (c === c.next) break;
						d = !0
					} while (d || c !== b);
				return b
			}

			function d(a, b, e, f, r, u, B) {
				if (a) {
					if (!B && u) {
						var F = a,
							C = F;
						do null === C.z &&
							(C.z = h(C.x, C.y, f, r, u)), C.Rn = C.Ba, C = C.qk = C.next; while (C !== F);
						C.Rn.qk = null;
						C.Rn = null;
						var F = C,
							D, G, H, J, L, M, K = 1;
						do {
							C = F;
							H = F = null;
							for (J = 0; C;) {
								J++;
								G = C;
								for (D = L = 0; D < K && (L++, G = G.qk, G); D++);
								for (M = K; 0 < L || 0 < M && G;) 0 !== L && (0 === M || !G || C.z <= G.z) ? (D = C, C = C.qk, L--) : (D = G,
									G = G.qk, M--), H ? H.qk = D : F = D, D.Rn = H, H = D;
								C = G
							}
							H.qk = null;
							K *= 2
						} while (1 < J)
					}
					for (F = a; a.Ba !== a.next;) {
						C = a.Ba;
						G = a.next;
						if (u) a: if (H = a.Ba, J = a.next, 0 <= l(H, a, J)) H = !1;
							else {
								L = h(H.x < a.x ? H.x < J.x ? H.x : J.x : a.x < J.x ? a.x : J.x, H.y < a.y ? H.y < J.y ? H.y : J.y : a.y < J
									.y ? a.y : J.y, f, r, u);
								K = h(H.x >
									a.x ? H.x > J.x ? H.x : J.x : a.x > J.x ? a.x : J.x, H.y > a.y ? H.y > J.y ? H.y : J.y : a.y > J.y ? a.y :
									J.y, f, r, u);
								for (D = a.qk; D && D.z <= K;) {
									if (D !== a.Ba && D !== a.next && k(H.x, H.y, a.x, a.y, J.x, J.y, D.x, D.y) && 0 <= l(D.Ba, D, D.next)) {
										H = !1;
										break a
									}
									D = D.qk
								}
								for (D = a.Rn; D && D.z >= L;) {
									if (D !== a.Ba && D !== a.next && k(H.x, H.y, a.x, a.y, J.x, J.y, D.x, D.y) && 0 <= l(D.Ba, D, D.next)) {
										H = !1;
										break a
									}
									D = D.Rn
								}
								H = !0
							}
						else a: if (H = a.Ba, J = a.next, 0 <= l(H, a, J)) H = !1;
							else {
								for (L = a.next.next; L !== a.Ba;) {
									if (k(H.x, H.y, a.x, a.y, J.x, J.y, L.x, L.y) && 0 <= l(L.Ba, L, L.next)) {
										H = !1;
										break a
									}
									L = L.next
								}
								H = !0
							} if (H) b.push(C.be /
							e), b.push(a.be / e), b.push(G.be / e), s(a), F = a = G.next;
						else if (a = G, a === F) {
							if (B)
								if (1 === B) {
									B = b;
									F = e;
									C = a;
									do G = C.Ba, H = C.next.next, !m(G, H) && n(G, C, C.next, H) && p(G, H) && p(H, G) && (B.push(G.be / F), B.push(
										C.be / F), B.push(H.be / F), s(C), s(C.next), C = a = H), C = C.next; while (C !== a);
									a = C;
									d(a, b, e, f, r, u, 2)
								} else {
									if (2 === B) a: {
										B = a;do {
											for (F = B.next.next; F !== B.Ba;) {
												if (C = B.be !== F.be)
													if (C = void 0, C = B.next.be !== F.be)
														if (C = void 0, C = B.Ba.be !== F.be) {
															C = C = void 0;
															b: {
																C = B;do {
																	if (C.be !== B.be && C.next.be !== B.be && C.be !== F.be && C.next.be !== F.be && n(C, C.next, B,
																			F)) {
																		C = !0;
																		break b
																	}
																	C = C.next
																} while (C !== B);C = !1
															}
															if (C = !C)
																if (C = void 0, C = p(B, F))
																	if (C = void 0, C = p(F, B)) {
																		C = B;
																		G = !1;
																		H = (B.x + F.x) / 2;
																		J = (B.y + F.y) / 2;
																		do C.y > J !== C.next.y > J && C.next.y !== C.y && H < (C.next.x - C.x) * (J - C.y) / (C.next.y -
																			C.y) + C.x && (G = !G), C = C.next; while (C !== B);
																		C = G
																	}
														} if (C) {
													a = q(B, F);
													B = c(B, B.next);
													a = c(a, a.next);
													d(B, b, e, f, r, u);
													d(a, b, e, f, r, u);
													break a
												}
												F = F.next
											}
											B = B.next
										} while (B !== a)
									}
								}
							else d(c(a), b, e, f, r, u, 1);
							break
						}
					}
				}
			}

			function e(a, b) {
				return a.x - b.x
			}

			function f(a, b) {
				var c = b,
					d = a.x,
					e = a.y,
					f = -Infinity,
					h;
				do {
					if (e <= c.y && e >= c.next.y &&
						c.next.y !== c.y) {
						var l = c.x + (e - c.y) * (c.next.x - c.x) / (c.next.y - c.y);
						if (l <= d && l > f) {
							f = l;
							if (l === d) {
								if (e === c.y) return c;
								if (e === c.next.y) return c.next
							}
							h = c.x < c.next.x ? c : c.next
						}
					}
					c = c.next
				} while (c !== b);
				if (!h) return null;
				if (d === f) return h.Ba;
				for (var l = h, m = h.x, n = h.y, r = Infinity, s, c = h.next; c !== l;) d >= c.x && c.x >= m && d !== c.x && k(
					e < n ? d : f, e, m, n, e < n ? f : d, e, c.x, c.y) && (s = Math.abs(e - c.y) / (d - c.x), (s < r || s === r &&
					c.x > h.x) && p(c, a) && (h = c, r = s)), c = c.next;
				return h
			}

			function h(a, b, c, d, e) {
				a = 32767 * (a - c) * e;
				b = 32767 * (b - d) * e;
				a = (a | a << 8) & 16711935;
				a = (a | a << 4) & 252645135;
				a = (a | a << 2) & 858993459;
				b = (b | b << 8) & 16711935;
				b = (b | b << 4) & 252645135;
				b = (b | b << 2) & 858993459;
				return (a | a << 1) & 1431655765 | ((b | b << 1) & 1431655765) << 1
			}

			function k(a, b, c, d, e, f, h, k) {
				return 0 <= (e - h) * (b - k) - (a - h) * (f - k) && 0 <= (a - h) * (d - k) - (c - h) * (b - k) && 0 <= (c - h) *
					(f - k) - (e - h) * (d - k)
			}

			function l(a, b, c) {
				return (b.y - a.y) * (c.x - b.x) - (b.x - a.x) * (c.y - b.y)
			}

			function m(a, b) {
				return a.x === b.x && a.y === b.y
			}

			function n(a, b, c, d) {
				return m(a, b) && m(c, d) || m(a, d) && m(c, b) ? !0 : 0 < l(a, b, c) !== 0 < l(a, b, d) && 0 < l(c, d, a) !==
					0 < l(c, d, b)
			}

			function p(a,
				b) {
				return 0 > l(a.Ba, a, a.next) ? 0 <= l(a, b, a.next) && 0 <= l(a, a.Ba, b) : 0 > l(a, b, a.Ba) || 0 > l(a, a.next,
					b)
			}

			function q(a, b) {
				var c = new u(a.be, a.x, a.y),
					d = new u(b.be, b.x, b.y),
					e = a.next,
					f = b.Ba;
				a.next = b;
				b.Ba = a;
				c.next = e;
				e.Ba = c;
				d.next = c;
				c.Ba = d;
				f.next = d;
				d.Ba = f;
				return d
			}

			function r(a, b, c, d) {
				a = new u(a, b, c);
				d ? (a.next = d.next, a.Ba = d, d.next.Ba = a, d.next = a) : (a.Ba = a, a.next = a);
				return a
			}

			function s(a) {
				a.next.Ba = a.Ba;
				a.Ba.next = a.next;
				a.Rn && (a.Rn.qk = a.qk);
				a.qk && (a.qk.Rn = a.Rn)
			}

			function u(a, b, c) {
				this.be = a;
				this.x = b;
				this.y = c;
				this.qk = this.Rn =
					this.z = this.next = this.Ba = null;
				this.z4 = !1
			}
			return {
				zI: function(h, k, l) {
					l = l || 2;
					var m = k && k.length,
						n = m ? k[0] * l : h.length,
						p = a(h, 0, n, l, !0),
						r = [];
					if (!p) return r;
					var s, u, D, G;
					if (m) {
						var H = l,
							m = [],
							J, L, M;
						G = 0;
						for (J = k.length; G < J; G++) {
							L = k[G] * H;
							M = G < J - 1 ? k[G + 1] * H : h.length;
							L = a(h, L, M, H, !1);
							L === L.next && (L.z4 = !0);
							var K = M = L;
							do M.x < K.x && (K = M), M = M.next; while (M !== L);
							m.push(K)
						}
						m.sort(e);
						for (G = 0; G < m.length; G++) {
							k = m[G];
							H = p;
							if (H = f(k, H)) k = q(H, k), c(k, k.next);
							p = c(p, p.next)
						}
					}
					if (h.length > 80 * l) {
						s = D = h[0];
						u = m = h[1];
						for (H = l; H < n; H += l) G = h[H], k =
							h[H + 1], G < s && (s = G), k < u && (u = k), G > D && (D = G), k > m && (m = k);
						D = Math.max(D - s, m - u);
						D = 0 !== D ? 1 / D : 0
					}
					d(p, r, l, s, u, D);
					return r
				}
			}
		};
		a.m6 = a.rS()
	})(g);
	(function(a) {
		function b(a) {
			var b = a.length;
			2 < b && a[b - 1][0] == a[0][0] && a[b - 1][1] == a[0][1] && a.pop()
		}

		function c(a, b) {
			for (var c = 0; c < b.length; c++) a.push(b[c][0]), a.push(b[c][1])
		}
		a.Pm = {
			mg: function(a) {
				for (var b = a.length, c = 0, h = b - 1, k = 0; k < b; h = k++) c += a[h][0] * a[k][1] - a[k][0] * a[h][1];
				return 0.5 * c
			},
			Pla: function(b) {
				return 0 > a.Pm.mg(b)
			},
			normalize: function(b) {
				var c;
				if (b) {
					c = [];
					for (var f = 0, h = b.length; f < h; f += 1) c[f] = b[f] instanceof Array ? this.normalize(b[f]) : b[f] instanceof a
						.U ? [b[f].R, b[f].Q] : b[f] instanceof a.G ? [b[f].x, b[f].y] :
						b[f]
				}
				return c
			},
			Fl: function(d, e) {
				e = e || [];
				var f = [],
					h = [];
				b(d);
				c(f, d);
				var k = d.length;
				e.forEach(b);
				for (var l = 0; l < e.length; l++) h.push(k), k += e[l].length, c(f, e[l]);
				return a.m6.zI(f, h)
			}
		}
	})(g);
	for (var $ = {
				v: "1.4.12",
				Pixel: g.G,
				LngLat: g.U,
				Size: g.gd,
				Bounds: g.ue,
				ArrayBounds: g.Xn,
				PixelBounds: g.df,
				enableVector: g.l.EN,
				Panorama: g.W6,
				PanoramaMarker: g.X6,
				Map: z.Db,
				View2D: z.sD,
				GroundImage: z.o.aJ,
				Marker: z.A.lb,
				ImageMarker: z.A.rta,
				Text: z.A.QS,
				Icon: z.A.Ch,
				MarkerShape: z.A.O6,
				Polyline: z.A.Qb,
				BezierCurve: z.A.By,
				Polygon: z.A.tc,
				Circle: z.A.Eg,
				CircleMarker: z.A.lS,
				Ellipse: z.A.Tr,
				Rectangle: z.A.Yr,
				ContextMenu: z.A.Lm,
				InfoWindow: z.A.Ge,
				Buildings: z.o.d6,
				TileLayer: z.o.gb,
				ImageLayer: z.o.Ly,
				CanvasLayer: z.o.f6,
				VideoLayer: z.o.z7,
				VectorLayer: z.o.Qc,
				MassMarks: z.o.Q6,
				LayerGroup: z.o.eJ,
				OverlayGroup: z.A.Nm,
				GeoJSON: z.A.vS,
				CANVAS: "canvas",
				DOM: "dom",
				event: {
					CLASS_NAME: "AMap.event"
				}
			}, vc =
			"addDomListener addDomListenerOnce addListener addListenerOnce clearInstanceListeners clearListeners removeListener trigger"
			.split(" "), wc = 0; wc < vc.length; wc += 1) $.event[vc[wc]] = function() {
		var a = g.event[vc[wc]],
			b = vc[wc];
		return function() {
			g.c.qa($.event);
			g.c.add($.event, b);
			return a.apply(g.event, Array.prototype.slice.call(arguments))
		}
	}();
	$.GeometryUtil = {
		CLASS_NAME: "AMap.GeometryUtil"
	};
	for (var xc =
			"distance ringArea isClockwise makesureClockwise makesureAntiClockwise distanceOfLine ringRingClip doesSegmentsIntersect doesSegmentLineIntersect doesSegmentRingIntersect doesSegmentPolygonIntersect doesLineLineIntersect doesLineRingIntersect doesPolygonPolygonIntersect doesRingRingIntersect isPointInRing isRingInRing isPointInPolygon isPointOnSegment isPointOnLine isPointOnRing isPointOnPolygon closestOnSegment closestOnLine distanceToSegment distanceToLine distanceToPolygon"
			.split(" "), wc =
			0; wc < xc.length; wc += 1) $.GeometryUtil[xc[wc]] = function() {
		var a = g.Np[xc[wc]],
			b = xc[wc];
		return function() {
			g.c.qa($.GeometryUtil);
			g.c.add($.GeometryUtil, b);
			return a.apply(g.Np, Array.prototype.slice.call(arguments))
		}
	}();
	$.GeometryUtil.triangulateShape = function(a, b) {
		g.c.qa($.GeometryUtil);
		g.c.add($.GeometryUtil, "triangulateShape");
		a = g.Pm.normalize(a);
		b = g.Pm.normalize(b);
		return g.Pm.Fl(a, b)
	};
	$.PlaneGeometryUtil = {
		CLASS_NAME: "AMap.PlaneGeometryUtil"
	};
	for (wc = 0; wc < xc.length; wc += 1) $.PlaneGeometryUtil[xc[wc]] = function() {
		var a = g.Ol[xc[wc]],
			b = xc[wc];
		return function() {
			g.c.qa($.PlaneGeometryUtil);
			g.c.add($.PlaneGeometryUtil, b);
			return a.apply(g.Ol, Array.prototype.slice.call(arguments))
		}
	}();
	$.PlaneGeometryUtil.triangulateShape = function(a, b) {
		g.c.qa($.PlaneGeometryUtil);
		g.c.add($.PlaneGeometryUtil, "triangulateShape");
		a = g.Pm.normalize(a);
		b = g.Pm.normalize(b);
		return g.Pm.Fl(a, b)
	};
	$.plugin = $.service = z.Db.prototype.plugin;
	$.TileLayer.Satellite = z.o.gb.NS;
	$.TileLayer.RoadNet = z.o.gb.LS;
	$.TileLayer.google = z.o.gb.Yu;
	$.TileLayer.Flexible = z.o.gb.Iy;
	$.TileLayer.WMS = z.o.gb.A7;
	$.TileLayer.WMTS = z.o.gb.B7;
	$.TileLayer.Traffic = z.o.gb.RS;
	$.Panorama.Events = z.event;
	$.TileLayer.PanoramaLayer = z.o.gb.yta;
	$.UA = {
		ie: g.l.Wq,
		ielt9: g.l.oe,
		ielt11: g.l.nla,
		mobile: g.l.Y,
		android: g.l.$k,
		ios: g.l.SG
	};
	$.Browser = {
		ua: navigator.userAgent,
		mobile: g.l.Y,
		plat: g.l.Zt,
		mac: g.l.px,
		windows: g.l.Psa,
		ios: g.l.SG,
		iPad: g.l.fla,
		iPhone: g.l.gla,
		android: g.l.$k,
		android23: g.l.iga,
		chrome: g.l.chrome,
		firefox: g.l.PN,
		safari: g.l.qC,
		wechat: g.l.M5,
		uc: g.l.dsa,
		qq: g.l.Xoa,
		ie: g.l.Wq,
		ie6: g.l.Uh,
		ie7: g.l.Xq,
		ie8: g.l.oe && !g.l.Xq && !g.l.Uh,
		ie9: g.l.I0,
		ie10: g.l.H0,
		ie11: g.l.kla,
		edge: g.l.fja,
		ielt9: g.l.oe,
		baidu: g.l.qF,
		isLocalStorage: g.l.fr,
		isGeolocation: !!navigator.geolocation,
		mobileWebkit: g.l.fna,
		mobileWebkit3d: g.l.c2,
		mobileOpera: !!g.l.ena,
		retina: g.l.md,
		touch: !!g.l.of,
		msPointer: !!g.l.e2,
		pointer: !!g.l.lQ,
		webkit: g.l.K5,
		ie3d: g.l.lla,
		webkit3d: g.l.L5,
		gecko3d: g.l.Oja,
		opera3d: g.l.Wna,
		any3d: g.l.oF,
		isCanvas: g.l.lk,
		isSvg: g.l.Dn,
		isVML: g.l.Wq,
		isWorker: !!window.Worker,
		isWebsocket: !!window.WebSocket,
		isWebGL: function() {
			for (var a = document.createElement("canvas"), b = ["webgl", "experimental-webgl", "moz-webgl"], c = null, d = 0; d <
				b.length; d += 1) {
				try {
					c = a.getContext(b[d])
				} catch (e) {}
				if (c)
					if (c.drawingBufferWidth !== a.width || c.drawingBufferHeight !== a.height) break;
					else return !0
			}
			return !1
		}
	};
	$.Util = {
		CLASS_NAME: "AMap.Util"
	};
	var yc = {
		colorNameToHex: g.a.EF,
		rgbHex2Rgba: g.a.K3,
		argbHex2Rgba: g.a.nq,
		isEmpty: g.a.bp,
		deleteItemFromArray: g.a.Bw,
		deleteItemFromArrayByIndex: g.a.Lo,
		indexOf: g.a.indexOf,
		format: g.a.Wc,
		isArray: g.a.isArray,
		isDOM: g.a.VG,
		includes: g.a.ga,
		requestIdleCallback: g.a.UH,
		cancelIdleCallback: g.a.VM,
		requestAnimFrame: g.a.Fc,
		cancelAnimFrame: g.a.Oh,
		color2RgbaArray: g.a.Co,
		color2Rgba: g.a.Lha
	};
	for (wc in yc) yc.hasOwnProperty(wc) && "function" == typeof yc[wc] && ($.Util[wc] = function() {
		var a = wc;
		return function() {
			g.c.qa($.Util);
			g.c.add($.Util, a);
			return yc[a].apply(g.a, Array.prototype.slice.call(arguments))
		}
	}());
	$.DomUtil = {
		CLASS_NAME: "AMap.DomUtil"
	};
	var zc = {
		getViewport: g.g.DG,
		getViewportOffset: g.g.BO,
		create: g.g.create,
		setClass: g.g.nqa,
		hasClass: g.g.rm,
		addClass: g.g.Oa,
		removeClass: g.g.Xa,
		setOpacity: g.g.wp,
		rotate: g.g.rotate,
		setCss: g.g.Ra,
		empty: g.g.iC,
		remove: g.g.remove,
		TRANSFORM: g.g.Pf,
		TRANSITION: g.g.oD
	};
	for (wc in zc) zc.hasOwnProperty(wc) && "function" == typeof zc[wc] && ($.DomUtil[wc] = function() {
		var a = wc;
		return function() {
			g.c.qa($.DomUtil);
			g.c.add($.DomUtil, a);
			return zc[a].apply(g.g, Array.prototype.slice.call(arguments))
		}
	}());
	var Ac = g.w;
	$.User = {
		key: Ac.key
	};
	window.AMap = $;
	window.AMap.BuryPoint = g.BuryPoint;
	window.AMap.Class = g.Z;
	if (!Ac.DB && "undefined" !== typeof arguments && arguments.callee) try {
		if (g.l.fr && window.localStorage) {
			var Bc = window.localStorage["_AMap_" + g.mH];
			Bc && JSON.parse(Bc).version === Ac.Si || window.localStorage.setItem("_AMap_" + g.mH, JSON.stringify({
				version: Ac.Si,
				script: "(" + arguments.callee + ")(config)"
			}));
			var Cc = new Image;
			Cc.src = Ac.tb + "/maps/cookie?key=amap_ver&value=" + Ac.Si;
			document.head.appendChild(Cc);
			Cc.onload = Cc.onerror = Cc.onabort = function() {
				document.head.removeChild(Cc)
			}
		}
	} catch (Ec) {};
	window.AMap.convertFrom = function(a, b, c) {
		g.c.add({
			CLASS_NAME: "convertFrom"
		}, b);
		var d = g.w.Kd + "/v3/assistant/coordinate/convert";
		a = g.a.Fa(a);
		var e = [];
		if (a instanceof Array) {
			for (var f = 0, h = a.length; f < h; f += 1) e.push(a[f] + "");
			e = e.join(";")
		} else e = a + "";
		b = ["key=" + g.w.key, "s=rsv3", "locations=" + e, "coordsys=" + (b || "gps")];
		d += 0 < b.length ? "?" + b.join("&") : "";
		d = new g.bb.qb(d, {
			callback: "callback"
		});
		d.h("complete", function(a) {
			if ("1" === a.status) {
				a = a.locations.split(";");
				for (var b = 0; b < a.length; b += 1) {
					var d = a[b].split(",");
					a[b] = new AMap.LngLat(d[0], d[1])
				}
				c && "function" === typeof c && c("complete", {
					info: "ok",
					locations: a
				})
			} else c && "function" === typeof c && c("error", a.info)
		}, this);
		d.h("error", function(a) {
			c && "function" === typeof c && c("error", a.info)
		}, this)
	};
	g.bb = g.bb || {};
	g.bb.rJ = g.Z.extend({
		ga: [g.na],
		r: function(a, b) {
			this.D = {
				callback: "cbk",
				type: "json",
				charset: "utf-8"
			};
			b = b || {};
			g.a.Ib(this, b);
			this.url = a;
			this.send(a, b.Cc, b.bia, b.Ppa, b.responseType)
		},
		send: function(a) {
			var b = g.g.create("script");
			b.type = "text/javascript";
			b.charset = this.D.charset;
			var c = this;
			g.l.oe ? b.onreadystatechange = function() {
				"loaded" !== this.readyState && "complete" !== this.readyState || c.q("complete")
			} : (b.onload = function() {
				c.q("complete")
			}, b.onerror = function() {
				c.q("error", {
					status: 0,
					info: "service error",
					url: a
				})
			});
			b.src = a;
			document.getElementsByTagName("head")[0].appendChild(b)
		}
	});
	g.bb.qb = g.bb.rJ.extend({
		hha: function() {
			if (g.a.X3) return g.a.pI.push(this), !0
		},
		Spa: function() {
			this.q("error", {
				info: "TIME_OUT_A"
			})
		},
		send: function(a, b, c, d) {
			function e() {
				window[f] = null;
				try {
					window[f] = null
				} catch (a) {}
				h.onerror = null;
				h.parentNode && h.parentNode.removeChild(h)
			}
			if (!this.D.lw || !this.hha()) {
				a = encodeURI(a);
				var f = this.D.fun;
				if (!f || window[f]) f = g.a.L_("jsonp_", 6) + "_";
				var h = document.createElement("script");
				h.type = "text/javascript";
				h.charset = "utf-8";
				h.async = !0;
				var k = this;
				g.l.oe || (h.onerror = function() {
					e();
					k.q("error", {
						info: "REQUEST_FAILED",
						url: a
					})
				});
				window[f] = function(a) {
					e();
					if (k.D.callbackFunction) k.D.callbackFunction.call(k.D.context, a);
					else if (3E4 === a.errcode && a.data) g.a.X3 = !0, g.ob.load("AMap.AntiCrabFrame", function() {
						g.a.lw || (g.a.lw = new g.Y5);
						g.a.pI.push(k);
						g.a.lw.open(k.D.Cc, a.data.host, k.XB || "", k.url)
					});
					else {
						if (a instanceof Array || "string" === typeof a) a = {
							data: a
						};
						a.swa = f;
						k.q("complete", a)
					}
				};
				b = "?"; - 1 !== a.indexOf("?") && (b = "&");
				b = a + b + this.D.callback + "=" + f;
				if (-1 !== a.indexOf(g.w.Kd + "/v") || -1 !== a.indexOf("yuntuapi.amap.com/datasearch") ||
					-1 !== a.indexOf("webapi.amap.com/")) b = b + "&platform=JS&logversion=2.0" + ("&appname=" + g.w.mq), b +=
					"&csid=" + g.a.C5(), b += "&sdkversion=" + g.w.kq;
				if (c = this.D.aG) {
					var l = [],
						m;
					for (m in c) c.hasOwnProperty(m) && (l.push(m + "=" + c[m]), b += "&" + m + "=" + encodeURIComponent(c[m]));
					k.XB = l.join("&")
				}
				h.src = d ? b + "&rereq=true" : b;
				g.bb.qb.O9 = document.getElementsByTagName("head")[0];
				g.bb.qb.O9.appendChild(h)
			}
		}
	});
	window.AMap.Http = {};
	window.AMap.Http.JSONP = g.bb.qb;
	g.bb.XMLHttpRequest = g.bb.rJ.extend({
		send: function(a, b, c, d, e) {
			var f = this;
			if ((g.l.oe || g.l.I0) && window.XDomainRequest) {
				var h = this.S5 = new XDomainRequest;
				h.onerror = function(b) {
					f.q("error", {
						url: a,
						data: b
					})
				};
				h.onload = function() {
					f.q("complete", {
						url: a,
						data: h.responseText
					})
				};
				h.open(b || "GET", a);
				setTimeout(function() {
					h.send(c || void 0)
				}, 0)
			} else {
				var k = this.S5 = new XMLHttpRequest;
				k.onreadystatechange = function() {
					4 === k.readyState && 200 === k.status ? f.q("complete", {
							url: a,
							data: "arraybuffer" === k.responseType ? k.response : k.responseText
						}) :
						404 === k.status && (k.abort(), f.q("error", {
							url: a,
							data: "404"
						}))
				};
				k.onerror = function(b) {
					k.abort();
					f.q("error", {
						url: a,
						data: b
					})
				};
				k.open(b || "GET", a);
				"POST" === b && k.setRequestHeader("Content-Type", d || "application/x-www-form-urlencoded");
				e && (k.responseType = e);
				k.send(c || void 0)
			}
		},
		abort: function() {
			this.S5.abort()
		}
	});
	g.Vi = g.Z.extend({
		r: function(a, b, c, d) {
			this.start = a;
			this.end = b;
			this.transition = c;
			this.precision = d || 0;
			this.ju = !1;
			this.update = g.a.bind(this.update, this);
			return this
		},
		Em: function(a) {
			this.Hg = this.startTime = +new Date;
			this.frames = 0;
			this.ju = !0;
			this.FY = g.a.Fc(this.update);
			this.gda = g.a.bind(this.kp, a || this)
		},
		update: function() {
			this.frames += 1;
			var a = +new Date,
				b = a - this.startTime,
				b = this.transition ? this.transition(this.start, this.end, b, this.frames, a - this.Hg) : null;
			"number" === typeof b && Math.abs(b - this.end) < this.precision ?
				(this.stop(), b = this.end) : this.FY = g.a.Fc(this.update);
			this.Hg = a;
			this.gda(b)
		},
		stop: function(a) {
			g.a.Oh(this.FY);
			a && this.update();
			this.ju = !1
		}
	});
	g.Vi.Easing = {
		Linear: {
			None: function(a) {
				return a
			}
		},
		Bounce: {
			In: function(a) {
				return 1 - (a < 1 / 2.75 ? 7.5625 * a * a : a < 2 / 2.75 ? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75 : a < 2.5 /
					2.75 ? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375 : 7.5625 * (a -= 2.625 / 2.75) * a + 0.984375)
			},
			Out: function(a) {
				return g.Vi.Easing.Bounce.In(1 - a)
			}
		},
		Cubic: {
			In: function(a) {
				return 1 - a * a * a
			},
			Out: function(a) {
				a = 1 - a;
				return 1 - a * a * a
			}
		}
	};
	g.Db = g.Z.extend({
		ga: [g.na, g.He, g.fH],
		r: function(a, b) {
			this.bc = g.a.bind(this.bc, this);
			this.C = b;
			this.Bi = b.Bi;
			this.Al = "";
			this.Gg = this.lg = this.bk = !1;
			this.Sm = {};
			this.J = a;
			this.kba();
			this.Ela();
			this.W("zooms", b, !0);
			this.W("size", b, !0);
			this.W("limitBounds", b);
			this.W("view", b);
			this.W("nolimg", b, !0);
			this.W("mapNumber", b, !0);
			this.W("lang", b, !0);
			this.W("features", b, !0);
			this.W("styleID", b, !0);
			this.W("forceBig", b, !0);
			this.W("mode", b, !0);
			this.W("showBuildingBlock", b, !0);
			this.W("mapStyle", b);
			var c = this.get("mapStyle");
			this.je = g.w.je[c] || g.w.je["default"];
			this.hF = "#a3ccff";
			this.iA = b.get("skyColor") || "#cce0ff";
			this.W("editEnable", b);
			this.yc ? this.W("style", b, !0) : this.W("styleUrl", b);
			this.W("hightlight", b, !0);
			this.W("labelzIndex", b, !0);
			if (g.l.oI) {
				c = new z.o.gb({
					innerLayer: !0,
					zIndex: b.get("labelzIndex"),
					visible: !1
				});
				this.Jc = new g.o.Zi(c, this, ["point", "road"]);
				this.Jc.type = "\u77e2\u91cf\u6807\u6ce8";
				var d = this.C.get("defaultLayer");
				d && c.W("rejectMapMask", d, !0);
				b.labelsLayer = this.Jc.X;
				this.Jc.X.h("complete", this.Xp, this,
					!0);
				this.Jc.X.h("renderComplete", this.Xp, this);
				this.Jc.Gz = this.Jc.jf = !0
			}
			this.W("isHotspot", b, !0);
			this.W("layers", b);
			this.W("overlays", b);
			this.W("infos", b, !0);
			this.W("contextmenus", b, !0);
			this.W("controls", b);
			this.W("bounds", b);
			this.W("draw", b);
			this.Ie(
				"zoomAndCenter destroy defaultCursor jogEnable animateEnable baseRender overlayRender gridMapForeign vectorMapForeign"
				.split(" "), b);
			this.Ie("rotateEnable pitchEnable dragEnable keyboardEnable doubleClickZoom scrollWheel zoomEnable touchZoom".split(
					" "),
				b, !0);
			this.get("jogEnable") ? this.Gt = !0 : this.Gt = !1;
			this.Baa();
			this.Haa();
			this.rV && this.rV();
			this.W("resizeEnable", b);
			this.C.map = this;
			c = this.get("size");
			c = c.width * c.height / 65536;
			g.l.md && 3 < c && (this.OY = !0);
			this.VH()
		},
		editEnableChanged: function() {
			this.yc = this.get("editEnable")
		},
		labelzIndexChanged: function() {
			this.Jc && this.Jc.set("zIndex", this.get("labelzIndex"))
		},
		styleChanged: function() {
			this.ul = !0
		},
		mapStyleChanged: function() {
			if (this.C.Wh) {
				this.Al && (this.set("style", ""), this.dt = this.Al = "");
				var a = this.get("mapStyle");
				this.ul = !0;
				this.je = g.w.je[a] || g.w.je["default"];
				this.hC()
			}
		},
		styleUrlChanged: function() {
			if (this.C.Wh) {
				var a = this.get("styleUrl") || "";
				if (a !== this.Al) {
					var b = -1 !== a.indexOf("?isPublic=true"),
						a = a.substr(0, 46),
						c = a.split("amap://styles/")[1];
					"normal" === c ? (this.Al = "", this.set("nolimg", !!this.C.get("nolimg_param")), this.set("style", ""), this.dt =
						"") : (this.ny = !0, this.set("nolimg", !0), b = new g.bb.qb(32 > c.length ? g.w.nc +
						"://webapi.amap.com/style?name=" + c + "&key=" + g.w.key : g.w.nc +
						"://webapi.amap.com/v4/map/styles?styleid=" +
						c + "&s=rsv3&key=" + g.w.key + (b ? "&ispublic=1" : ""), {
							callback: "callback"
						}), b.h("complete", function(a) {
						a.data && a.data.content ? this.set("style", JSON.parse(a.data.content)) : this.set("style", "");
						this.ny = !1
					}, this), b.h("error", function() {
						this.ny = !1
					}, this), this.Al = a, this.hC())
				}
			}
		},
		Y3: function(a) {
			this.J.style.background = a
		},
		Qja: function(a) {
			var b = this.get("center");
			if (a.contains(b)) return null;
			a = g.Np.closestOnLine(b, a.yR().path);
			return new g.U(a[0], a[1])
		},
		kha: function() {
			var a = this.get("limitBounds"),
				b = this.get("bounds");
			b.oc && b.oc.R > b.ac.R && (b.ac.R += 360);
			if (!a.contains(b)) {
				if (b instanceof g.Xn) return this.Qja(a, b);
				var c = this.get("center").jb();
				a.Ii() < b.Ii() ? c.R = a.Rh().R : (a.oc.R > b.oc.R && (c.R += a.oc.R - b.oc.R), a.ac.R < b.ac.R && (c.R += a.ac
					.R - b.ac.R));
				a.Gi() < b.Gi() ? c.Q = a.Rh().Q : (a.oc.Q > b.oc.Q && (c.Q += a.oc.Q - b.oc.Q), a.ac.Q < b.ac.Q && (c.Q += a.ac
					.Q - b.ac.Q));
				return c
			}
		},
		SL: function() {
			var a = this.lR;
			this.C.refreshSize();
			var b = this.get("size");
			b && a && !b.eb(a) && (this.lR = b, this.ou = !0, this.set("display"), this.H3(b), this.get("resizeEnable") &&
				this.ja("resize", {
					vna: a,
					k2: b
				}))
		},
		gX: function() {
			var a = this;
			a.SL();
			a.NL = setTimeout(function() {
				a.gX()
			}, 200)
		},
		f9: function() {
			this.NL && (clearTimeout(this.NL), this.NL = null)
		},
		kba: function() {
			this.C.B = !0;
			this.lR = this.C.getSize();
			this.C.B = !1;
			if (g.l.oe || g.l.M5 && g.l.SG || g.l.Wma) this.gX();
			else {
				var a = this;
				g.F.dga(this.J, function(b) {
					a.SL(b)
				})
			}
		},
		Ela: function() {
			var a = this.J;
			g.g.Oa(a, "amap-container");
			var b = {};
			b.Oc = g.g.create("div", a, "amap-maps");
			this.Pk = g.g.create("div", a);
			this.Pk.style.display = "none";
			b.sq = g.g.create("div",
				b.Oc, "amap-drags");
			b.o = g.g.create("div", b.sq, "amap-layers");
			b.A = g.g.create("div", b.sq, "amap-overlays");
			b.controls = g.g.create("div", a, "amap-controls");
			b.Pt = g.g.create("a", a, "amap-logo");
			var c = window.location.host; - 1 === c.indexOf("amap.com") && -1 === c.indexOf("gaode.com") && (b.Pt.href = g.l
				.Y ? "http://m.amap.com" : "http://gaode.com", b.Pt.target = "_blank");
			g.g.create("img", b.Pt).src = g.l.md ? this.C.D.logoUrlRetina : this.C.D.logoUrl;
			b.km = g.g.create("div", a, "amap-copyright");
			b.km.style.display = "none";
			350 < g.g.DG(this.J).width &&
				(b.km.innerHTML = this.C.D.copyright, b.km.Q1 = g.g.create("span", b.km, "amap-mcode"), this.hC());
			this.Pa = b
		},
		hC: function() {
			var a = this.get("layers");
			if (a) {
				for (var b = -1, c = "", d = 0; d < a.length; d += 1) {
					var e = a[d].get("mapNumber"),
						f = a[d].get("zIndex", null, !0);
					e && f > b && a[d].get("visible") && (c = e, b = f)
				}
				this.set("mapNumber", c);
				this.C.B = !0;
				a = this.C.getMapStyle();
				this.C.B = !1;
				"GS(2018)1709" === c && a && "normal" !== a && "amap://styles/normal" !== a && (c = "", this.Pa.km.style.visibility =
					"hidden", this.Pa.Pt.style.display = "none");
				c && this.Pa.km.Q1 &&
					(this.Pa.km.Q1.innerHTML = "- " + c + "\u53f7", this.Pa.km.style.visibility = "visible", this.Pa.Pt.style.display =
						"block");
				return c
			}
		},
		zU: function() {
			var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : !1;
			g.Yi && (a ? g.Yi.flush() : this.r_ || (this.r_ = g.a.Fc(function() {
				g.Yi.flush();
				this.r_ = null
			}, this)))
		},
		x3: function() {
			var a = this,
				b = this.C.get("rasterLayer");
			b && (this.C.set("rasterLayer", void 0), this.C.n3 = !0, this.C.Aj = this.C.Ha, this.hf.JG = !1, b.o && (b.o.OB = !
				0), g.a.UH(function() {
				a.C && a.C.Bj(b)
			}))
		},
		Xp: function() {
			function a() {
				for (var a =
						d.get("layers"), b = d.get("zoom"), c = 0; c < a.length; c += 1) {
					var e = a[c].get("zooms");
					if (!(a[c].Aj || a[c].R0 || !e || b > e[1] || b < e[0] || !a[c].get("visible") || a[c].o && a[c].o.ma && 0 ===
							a[c].o.ma.length || a[c].o && a[c].o.OB || a[c].o && a[c].o.Ha)) return !1
				}
				a = d.C.get("features");
				return ("all" === a || g.a.ga(a, "point")) && d.Jc && d.Jc.get("visible") && 0 < d.Jc.ma.length && !d.Jc.Ha &&
					!d.Jc.yE ? !1 : !0
			}

			function b() {
				var a = {
					id: d.C.id
				};
				g.xe.Re.end(g.extend(a, {
					key: "rds"
				}));
				g.xe.Re.send(g.extend(a, {
					params: {
						rs: d.get("baseRender"),
						viewmode: d.C.view.type,
						fd: 0 === d.dH ? 1 : 0,
						raster: d.C.Aj ? 1 : 0
					}
				}));
				d.C && d.C.rl && d.C.rl.Wz && d.C.rl.Wz();
				d.C.e3 = 1;
				d.zU();
				d.set("display");
				d.BB = !0
			}

			function c() {
				g.xe.Re.end({
					id: d.C.id,
					key: "rd"
				});
				g.a.Fc(function() {
					this.q("complete")
				}, d);
				d.C.Ha = !0;
				d.set("display")
			}
			if (!this.oN)
				if (this.BB) 1 === this.js && 13 === this.get("zoom") && (g.a.dB.stop(this.WD), g.xe.Re.send({
					id: this.C.id,
					params: {
						fps: this.WD.dB,
						type: "fps",
						rs: this.get("baseRender")
					}
				}), this.js = 2), this.zU();
				else {
					var d = this,
						e = this.C.get("rasterLayer"),
						f = a();
					e ? (e.o && e.o.Ha && (this.C.Ha || c()),
						f && (this.C.Ha || c(), this.x3(), b())) : f && (this.C.Ha || c(), b(), this.C.n3 = !0)
				}
		},
		layersChanged: function() {
			this.ta = this.ta || [];
			for (var a = this.get("layers"), b = this.ta.length - 1; 0 <= b; b -= 1) this.ta[b] === this.zd || this.ta[b] ===
				this.rr || this.ta[b].Gz || this.ta[b].X.Gz || -1 !== g.a.indexOf(a, this.ta[b].X) || (this.ta[b].wg(), this.ta[
					b].yk && this.ta[b].yk.wg(), this.ta[b].X.I("complete", this.Xp, this), this.ta[b].X.I("renderComplete", this
					.Xp, this), this.ta = g.a.Lo(this.ta, b));
			for (var c = !1, d = !0, e = this.get("labelzIndex"), b = 0; b <
				a.length; b += 1)
				if (!a[b].R0)
					if (a[b].vi) - 1 === g.a.indexOf(this.ta, a[b].o) && this.ta.push(a[b].o);
					else {
						var f = this.Ng(a[b]);
						f && (this.ta.push(f), a[b].vi = !0, a[b].o = f);
						a[b].h("complete", this.Xp, this, !0);
						a[b].h("renderComplete", this.Xp, this)
					} for (b = 0; b < this.ta.length; b += 1) f = this.ta[b].X, f.ip && f.get("visible") && (c = !0, !1 === f.get(
				"detectRetina") && (d = !1), e = f.get("textIndex") || e);
			this.Jc && (c || "3D" !== this.C.view.type ? this.Jc.yE = !1 : (c = g.a.find(a, function(a) {
					if (z.o.Wr && a instanceof z.o.Wr && a.get("visible")) return !0
				}),
				this.Jc.yE = c = !!c));
			a = g.a.indexOf(this.ta, this.Jc);
			c && this.C.get("showLabel") ? (-1 === a && this.ta.push(this.Jc), this.Jc.ha = d && g.l.ha, this.Jc.zA(this.get(
				"mapStyle") || "normal"), this.Jc.set("zIndex", e), this.Jc.set("visible", !0), this.C.lB = !0, this.C.get(
				"isHotspot") ? this.Jc.Pna() : this.Jc.cN()) : (this.Jc && (this.Jc.set("visible", !1), this.C.lB = !1, this.Jc
				.cN()), this.C.lB = !1);
			this.C.isHotspotChanged();
			this.set("display", 0);
			this.hC()
		},
		isHotspotChanged: function() {
			this.layersChanged()
		},
		controlsChanged: function() {
			var a =
				this.get("controls"),
				b, c;
			if (a.add && 0 < a.add.length)
				for (; 0 < a.add.length;) b = a.add.shift(), (c = b.Os || b.addTo) && c.call(b, this.C, this.Pa.controls);
			else if (a.remove && a.remove.length)
				for (; 0 < a.remove.length;) b = a.remove.shift(), (c = b.eu || b.removeFrom) && c.call(b, this.C, this.Pa.controls)
		},
		mY: function() {
			if (!this.oN) {
				var a = this;
				this.rY = !1;
				a.zd || (a.zd = new g.o.Qc(new z.o.Qc, a), a.zd.af = 36, a.zd.If = 36, a.zd.set("zIndex", 120), a.ta.push(a.zd),
					a.zd.SA = !0);
				for (var b = a.get("overlays"), c = [], d = 0; d < a.Pc.length; d += 1) - 1 === g.a.indexOf(b,
					a.Pc[d].Wb) && (a.Pc[d].Wb instanceof z.A.Ge || a.Pc[d].Wb instanceof z.A.Lm ? a.Pc[d].wg() : (a.zd && a.Pc[d] instanceof g
					.A.lb ? (a.zd.ug = g.a.Bw(a.zd.ug, a.Pc[d].L), a.zd.t3([a.Pc[d].L])) : a.rr && a.rr.t3([a.Pc[d].L]), a.Pc[d]
					.L.ca ? (g.g.remove(a.Pc[d].L.ca), a.Pc[d].L.ca = null) : a.Pc[d].L.Ta && (g.g.remove(a.Pc[d].L.Ta.Ef), g.g.remove(
						a.Pc[d].L.Ta.mc), a.Pc[d].L.Ta = null), a.Pc[d].xm && a.Pc[d].xm.stop(), a.Pc[d].Wb.vi = !1, a.Pc[d].Wb.Hm(),
					a.Pc[d].Wb.he.map = null, a.Pc[d].Wb.A = null, a.Pc[d].Wb = null, a.Pc[d].L.Iia(), a.Pc[d].L = null,
					a.Pc[d].Hm(), a.Pc[d].he = null, a.Pc[d].gj(), a.Pc[d].map = null), c.push(a.Pc[d]));
				for (d = 0; d < c.length; d += 1) a.Pc = g.a.Lo(a.Pc, g.a.indexOf(a.Pc, c[d]));
				var e = [],
					f = [];
				g.a.iqa(function(b) {
					if (!b.vi && b.rg) {
						var c = b.A || a.Sga(b);
						c && (a.Pc.push(c), c instanceof g.A.Ge || c instanceof g.A.Lm ? c.wx(a) : c instanceof g.A.lb ? e.push(c.L) :
							f.push(c.L), b.vi = !0)
					}
				}, b);
				e.length && a.zd.ew(e);
				f.length && (a.rr || (a.rr = new g.o.Qc(new z.o.Qc, a), a.rr.set("zIndex", 110), a.ta.push(a.rr)), a.rr.ew(f));
				a.set("display", 0)
			}
		},
		overlaysChanged: function() {
			this.Pc =
				this.Pc || [];
			this.get("overlays") && 0 === this.get("overlays").length ? this.mY() : this.rY || (g.a.Fc(this.mY, this), this.rY = !
				0)
		},
		contextmenusChanged: function() {
			var a = this.get("contextmenu");
			if (a) {
				var b = this;
				g.ob.load("overlay", function() {
					b.tw = new g.A.Lm(a, b);
					b.set("display", 0)
				})
			}
		},
		infosChanged: function() {
			var a = this.get("infos");
			if (a) {
				this.sl = this.sl || {};
				var b, c = this;
				g.ob.load("overlay", function() {
					for (var d in a) a.hasOwnProperty(d) && (b = a[d], c.sl[d] = c.sl[d] || new g.A.Ge(b, c))
				})
			}
		},
		Sga: function(a) {
			var b = null;
			if (a instanceof z.A.lb) b = new g.A.lb(a, this);
			else if (a instanceof z.A.Lm) b = new g.A.Lm(a, this);
			else if (a instanceof z.A.Ge) b = new g.A.Ge(a, this);
			else {
				var c = ["overlay"];
				"d" === this.get("overlayRender") ? (c.push("dvector"), g.l.Dn ? c.push("svg") : c.push("vml")) : c.push(
					"cvector");
				if (!this.Bsa && !g.ob.yB(c)) {
					var d = this;
					g.ob.Vg(c, function() {
						this.Bsa = !0;
						d.overlaysChanged()
					});
					return
				}
				a instanceof z.A.tc ? b = new g.A.tc(a, this) : a instanceof z.A.By ? b = new g.A.By(a, this) : a instanceof z.A
					.Qb ? b = new g.A.Qb(a, this) : a instanceof z.A.Eg ? b = new g.A.Eg(a,
						this) : a instanceof z.A.Tr ? b = new g.A.tc(a, this) : a instanceof z.A.Yr && (b = new g.A.tc(a, this))
			}
			return b
		},
		x_: function() {
			var a = this.je;
			this.dt && (a = "function" === typeof this.dt ? this.dt(this.hf.P.zoom) : this.dt);
			return a
		},
		hva: function() {
			function a() {}
			var b = new g.o.Qc,
				c = [],
				d = new g.U(116.405467, 39.907761);
			new g.style.ig.Ch;
			for (var e = 0; 100 > e; e += 1)
				for (var f = 0; 100 > f; f += 1) {
					var h = new g.U(d.R + 0.02 * f, d.Q + 0.02 * e),
						h = new g.Ah({
							name: "point" + (100 * e + f),
							map: this,
							ba: new g.va.hg(this.Rb(h))
						});
					c[100 * e + f] = h;
					h.h("hover", a, h)
				}
			b.ew(c);
			this.ta.push(b)
		},
		Vb: function() {},
		gva: function(a) {
			var b = new g.o.Qc,
				c = [],
				c = (new g.v6({
					map: this
				})).vQ(a);
			b.ew(c);
			this.ta.push(b);
			this.set("display", 0)
		},
		Ng: function(a) {
			a = a.Ng(this);
			if (!a) return null;
			if (a.length && "string" == typeof a[0]) {
				var b = this;
				g.ob.Vg(a, function() {
					b.layersChanged()
				})
			} else return a;
			return null
		},
		Qwa: function() {
			return this.Pa
		},
		Qya: function() {
			this.set("display", 0)
		},
		displayChanged: function(a) {
			this.dY || this.VH(a)
		},
		VH: function(a) {
			if (a)
				if (g.a.Oh(this.mC), g.l.$k) {
					var b = this;
					setTimeout(function() {
							b.bc()
						},
						0)
				} else this.bc();
			else this.Mu || (this.mC = g.a.Fc(this.bc), this.Mu = !0)
		},
		bc: function() {
			this.mC = null;
			if (!this.oN) {
				this.q("render");
				this.Mu = !1;
				var a = {};
				if (this.ta && (a.size = this.C.get("size"), a.size.width && a.size.height)) {
					for (var b = this.C.view.type, c = [], d = 0, e = this.ta.length; d < e; d += 1) this.ta[d].Kp && this.ta[d].Kp !==
						b ? this.ta[d].Ha = !0 : (c.push(this.ta[d]), this.ta[d].yk && c.push(this.ta[d].yk));
					c.sort(function(a, b) {
						var c = a.get("zIndex"),
							d = b.get("zIndex");
						return c > d ? 1 : c === d ? a.wD > b.wD ? 1 : -1 : -1
					});
					a.ta = c;
					c = g.l.ha ?
						Math.min(window.devicePixelRatio || 1, 2) : 1;
					a.Bga = 15E5 < a.size.width * a.size.height * c * c;
					a.JG = !!this.C.get("rasterLayer");
					a.Y = g.l.Y;
					a.lang = this.get("lang");
					a.P = this.C.CG();
					a.Kp = b;
					this.C.B = !0;
					a.S = this.C.getResolution([0, 0]);
					a.gr = this.C.get("mapStyle");
					a.ul = this.ul;
					this.C.B = !1;
					a.Zc = this.Gg;
					a.Yva = this.Sm;
					a.cf = this.bk;
					a.sg = this.lg;
					a.CR = this.lg && g.l.Y;
					a.f5 = g.l.Y && this.bk;
					a.xI = g.l.Y && this.Gg;
					this.xI = a.xI;
					b = this.get("targetLevel") || a.P.zoom;
					a.Qr = a.P.zoom > b;
					a.Km = a.P.zoom > b ? "zoomOut" : a.P.zoom < b ? "zoomIn" : "stable";
					a.dya = !0;
					a.OY = this.OY;
					for (var b = !1, f, c = !1, d = 0; d < this.ta.length; d += 1) this.ta[d].Li && this.ta[d].X.get("visible") &&
						a.P.zoom <= this.ta[d].X.get("zooms")[1] && (a.JQ = !0), this.ta[d].nl().md && (b = !0);
					for (d = 0; d < this.ta.length; d += 1) this.ta[d].X.GM && a.JQ && (!this.bk && this.ta[d].X.get("visible") &&
						(f = this.ta[d].X.GM(), f.sxa = 1, f.zoom = a.P.zoom), c = !0);
					c ? f && this.Xb !== f && (this.Xb = f) : this.Xb = [];
					a.Xb = this.Xb;
					a.md = b;
					a.scale = Math.pow(2, a.P.zoom - a.P.Ce);
					this.hf = a;
					this.Hd = this.C.get("mask");
					a.Hd = this.Hd;
					if (f = this.uG()) f.bc(a),
						this.ul = this.t_ = !1
				}
			}
		},
		uG: function() {
			if (!this.O || this.O.type !== this.C.view.type || this.O.Mma)
				if (this.O = null, "3D" == this.C.view.type) {
					var a = this;
					g.ob.load("Map3D", function() {
						a.O || (a.O = new g.ya.gD(a), a.set("display"))
					})
				} else this.O = new g.N.canvas.Db(this);
			return this.O
		},
		$ja: function() {
			var a = [],
				b = this.get("controls").xd,
				c;
			for (c in b) b[c].Vw && b[c].Vw() && a.push(b[c].Vw());
			return a
		},
		destroyChanged: function() {
			this.oN = 1;
			this.T = {};
			this.Jc && (this.Jc.X.I("complete", this.Xp, this), this.Jc.wg(), this.ta = g.a.Lo(this.ta,
				g.a.indexOf(this.ta, this.Jc)));
			this.pi && this.pi.Qf && this.pi.Qf.X && this.pi.Qf.X.setMap();
			this.$ea && clearTimeout(this.$ea);
			this.Gea();
			this.Jba();
			this.xL && this.xL();
			this.Hfa();
			this.Hm();
			this.C = this.C.map = null;
			this.J = this.J.KJ = null;
			this.pe && (this.pe.stop(), this.pe = null);
			this.tf && (this.tf.stop(), this.tf = null);
			this.nd && (this.nd.stop(), this.nd = null)
		},
		Hfa: function() {
			var a = this.J;
			this.f9();
			g.F.Bha(a);
			g.g.iC(a);
			this.Pk = null;
			g.g.Xa(a, "amap-container");
			this.Pa = null
		},
		jogEnableChanged: function() {
			this.get("jogEnable") ?
				this.Gt = !0 : this.Gt = !1
		},
		drawChanged: function() {
			var a = this,
				b, c, d = this.get("draw");
			if (d) {
				this.Zo || (this.Zo = []);
				b = 0;
				for (c = this.Zo.length; b < c; b += 1) this.Zo[b].ppa();
				g.ob.load("interaction", function() {
					var b = new g.tta({
						type: d,
						o: a.rr
					}, a);
					a.Zo.push(b);
					a.loaded = !0
				})
			} else if (this.Zo)
				for (b = 0, c = this.Zo.length; b < c; b += 1) this.Zo[b].ppa(), this.Zo[b].Bva(), this.I("click", this.Zo[b].exa,
					this)
		},
		De: function(a, b, c) {
			return this.C.view.De(a, b, c)
		},
		Xf: function(a, b, c) {
			return this.C.view.Xf(a, b, c)
		},
		d0: function(a, b) {
			var c = this.get("size"),
				d = document.createElement("canvas");
			a = a || c.width;
			b = b || c.height;
			d.width = a;
			d.height = b;
			for (var e = -(c.width - a) / 2, c = -(c.height - b) / 2, f = d.getContext("2d"), h = this.Pa.o.childNodes, k = [],
					l = 0; l < h.length; l += 1) k.push(h[l]);
			k.sort(function(a, b) {
				return a.style.zIndex - b.style.zIndex
			});
			for (l = 0; l < k.length; l += 1) {
				var m = k[l];
				if (g.g.rm(m, "amap-layer") || g.g.rm(m, "amap-e") || g.g.rm(m, "amap-labels"))
					if ("CANVAS" === m.tagName) {
						var h = c,
							n = e,
							p = parseFloat(m.style.width) || m.width,
							q = parseFloat(m.style.height) || m.height,
							r = 1;
						m.style.transform &&
							(r = parseFloat(m.style.transform.split("(")[1]));
						f.drawImage(m, n, h, p * r, q * r)
					} else if ("DIV" === m.tagName)
					for (var r = m.childNodes, s = parseFloat(m.style.top) || 0 + c, m = parseFloat(m.style.left) || 0 + e, u = 0; u <
						r.length; u += 1) {
						var v = r[u];
						if ("CANVAS" === v.tagName || "IMG" === v.tagName) h = parseFloat(v.style.top) || 0, n = parseFloat(v.style.left) ||
							0, p = parseFloat(v.style.width) || v.width, q = parseFloat(v.style.height) || v.height, f.drawImage(v, n +
								m, h + s, p, q)
					}
			}
			return d.toDataURL()
		}
	});
	g.Db.ub({
		Baa: function() {
			this.Lz = !1;
			g.l.of && ("3D" === this.C.view.type ? this.w8() : this.u8());
			g.l.Y || this.r8()
		},
		Gea: function() {
			g.l.of && ("3D" === this.C.view.type ? this.Pba() : this.Oba());
			g.l.Y || this.Kba()
		},
		rotateEnableChanged: function() {
			this.Zpa = this.get("rotateEnable");
			g.l.of && this.QY && "3D" !== this.C.view.type && (this.Zpa ? this.QY() : this.una())
		},
		zoomEnableChanged: function() {
			this.get("zoomEnable") ? (g.l.of && this.KM && "3D" !== this.C.view.type && this.KM(), g.l.Y || this.t8()) : (g.l
				.of && this.OP && this.OP(), g.l.Y || this.Nba())
		},
		mousewheelChanged: function() {},
		BP: function(a) {
			a && (this.Lz = a.Ks)
		},
		Du: function() {
			this.Lz = !1
		},
		ai: function(a, b, c, d) {
			var e, f = {};
			a || (a = window.event);
			var h = g.F.ll(a, this.Pa.Oc);
			g.l.of && ("touchend" !== a.type ? this.T.fba = h : h = this.T.fba);
			f.vb = h;
			f.Ka = this.Xf(h);
			f.Ka && (f.Ka = f.Ka.toFixed(3));
			f.cg = this.Ee(f.Ka);
			c || (c = this.Lz ? this.Lz ? [this.Lz] : null : this.y$(f.Ka, d)) && 0 < c.length && c[0].fq && (e = c[0].fq, f
				.Ks = c[0]);
			e || (e = this);
			f.sd = e;
			f.pua = a.altKey;
			f.ctrlKey = a.ctrlKey;
			f.button = void 0 === a.button ? 0 : a.button;
			b || (a.preventDefault ?
				a.preventDefault() : a.returnValue = !1);
			return f
		},
		XK: function(a) {
			return a && a !== this && a !== document
		},
		OL: function() {
			var a = this.T;
			a.Ff && (a.kj.vb.x === a.Ff.x && a.kj.vb.y === a.Ff.y ? a.lg = !1 : (a.lg = !0, a.jo || (a.No.q("dragstart", a.Mo),
				a.jo = !0), a.No.q("dragging", a.kj), a.Ff = a.kj.vb))
		},
		Rqa: function(a) {
			for (var b = [], c = 0; c < a.length; c += 1) a[c] && (b = b.concat(a[c]));
			return b
		},
		Cx: function(a, b, c) {
			return a && b && (a.x - b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y) < (c || 10)
		},
		y$: function(a, b) {
			var c = this.uG();
			if (!c) return null;
			var d, e = this;
			this.ta.sort(function(a,
				b) {
				return a.get("zIndex") > b.get("zIndex") ? -1 : 1
			});
			c.vt(a, this.ta, function(a) {
				d = a;
				d = e.Rqa(d)
			}, function() {
				d = []
			}, b);
			return d
		}
	});
	g.Db.ub({
		Haa: function() {
			this.Sm = {};
			this.h("moveend", this.u2, this);
			g.l.$k && (g.l.EI || g.l.qF) && this.h("zoomend", this.bS, this);
			this.h("movestart", this.v2, this);
			this.h("zoomstart", this.A2, this);
			this.h("zoomend", this.z2, this);
			this.PJ();
			this.js = 0;
			this.WD = {};
			"undefined" === typeof window.requestAnimationFrame && (this.js = 2)
		},
		A2: function() {
			2 !== this.js && 12 === this.get("zoom") && (this.js = 1, g.a.dB.start(this.WD));
			this.bk = !0
		},
		z2: function() {
			1 === this.js && 13 !== this.get("zoom") && (this.js = 0, g.a.dB.cancel(this.WD));
			this.bk = !1;
			this.set("display")
		},
		LX: function(a, b) {
			this.Sm.left = 0 < a;
			this.Sm.right = 0 > a;
			this.Sm.PC = 0 < b;
			this.Sm.sN = 0 > b
		},
		Gs: function() {
			this.Sm.left = !1;
			this.Sm.right = !1;
			this.Sm.PC = !1;
			this.Sm.sN = !1
		},
		Jba: function() {
			this.I("moveend", this.u2, this);
			g.l.$k && (g.l.EI || g.l.qF) && this.I("zoomend", this.bS, this);
			this.I("movestart", this.v2, this);
			this.I("zoomstart", this.A2, this);
			this.I("zoomend", this.z2, this);
			this.Lba()
		},
		u2: function(a) {
			this.lg = !1;
			this.Gs();
			this.H3();
			!a.j1 && this.C.get("limitBounds", null, !0) ? (a = this.kha()) && !a.eb(this.get("center")) ?
				this.gI(this.get("zoom"), a, !1, !0) : this.ja("moveend") : this.ja("moveend");
			this.set("display")
		},
		v2: function() {
			this.lg = !0;
			this.Gs()
		},
		dragEnableChanged: function() {
			(this.VA = this.get("dragEnable")) ? this.OJ(): this.wL()
		},
		ja: function(a, b) {
			if (this.C.ae(a)) {
				var c;
				b && (c = b.k2 ? {
					type: a,
					newsize: b.k2,
					oldsize: b.vna
				} : {
					type: a,
					pixel: b.vb,
					target: this.C,
					lnglat: b.cg
				});
				this.C.q(a, c)
			}
		},
		PJ: function() {
			this.h("click", this.rW);
			this.h("dblclick", this.vW);
			g.l.of && this.yT();
			g.l.Y || this.s8()
		},
		Lba: function() {
			this.I("click", this.rW);
			this.I("dblclick", this.vW);
			g.l.of && this.gW();
			g.l.Y || this.Mba()
		},
		CE: function(a, b) {
			var c = this.get("targetLevel") || this.get("zoom"),
				c = 0 < b ? Math.floor(c) + 1 : Math.ceil(c) - 1,
				c = Math.min(Math.max(c, this.get("zooms")[0]), this.get("zooms")[1]);
			c === this.get("zoom") || this.tf && this.tf.ju && c === this.tf.end || this.zy(c, !1, a)
		},
		rW: function(a) {
			this.ja("click", a)
		},
		vW: function(a) {
			this.get("doubleClickZoom") && this.get("zoomEnable") && this.CE(a.Ka, 1);
			this.ja("dblclick", a)
		},
		Sua: function(a) {
			this.CE(a.Gza, a.M4);
			this.ja("touchend",
				a)
		},
		OJ: function() {
			this.VA && ("3D" === this.C.view.type ? (this.h("dragstart", this.BW), this.h("dragging", this.xW), this.h(
				"dragend", this.zW)) : (this.h("dragstart", this.AW), this.h("dragging", this.wW), this.h("dragend", this.yW)))
		},
		wL: function() {
			this.VA || ("3D" === this.C.view.type ? (this.I("dragstart", this.BW), this.I("dragging", this.xW), this.I(
				"dragend", this.zW)) : (this.I("dragstart", this.AW), this.I("dragging", this.wW), this.I("dragend", this.yW)))
		},
		AW: function(a) {
			this.BP(a);
			this.Gs();
			this.Gg = !0;
			this.T.Hw = a.vb.x;
			this.T.WA =
				a.vb.y;
			this.pe && (this.pe.stop(), this.Mq(!0));
			this.ja("dragstart");
			this.ja("movestart");
			this.q("movestart", a);
			this.Yqa()
		},
		wW: function() {
			var a = this.T,
				b = a.kj.vb.x - a.Hw,
				c = a.kj.vb.y - a.WA;
			if (c || b) {
				this.T.lg = !0;
				this.LX(b, c);
				a.Hw = a.kj.vb.x;
				a.WA = a.kj.vb.y;
				var a = b,
					d = c,
					e = this.rotation;
				e && (e *= Math.PI / 180, a = b * Math.cos(e) + Math.sin(e) * c, d = -Math.sin(e) * b + Math.cos(e) * c);
				a = this.get("centerCoords").Wa((new g.G(a, d)).Jd(this.S));
				(d = this.mZ(a)) && (c = Math.round(this.De(d).Wa(this.De(a)).y));
				this.kr(this.Pa.sq, b, c);
				a.x =
					(a.x + g.a.wa) % g.a.wa;
				this.set("centerCoords", a, !0);
				this.set("center", this.Ee(a), !0);
				this.Gt && (this.Hg ? (a = new Date, this.ps = 100 < a - this.Hg ? new g.G(0, 0) : new g.G(b, c), this.Hg = a) :
					this.Hg = new Date);
				this.ja("dragging");
				this.ja("mapmove")
			} else this.T.lg = !1, this.ps = null, this.Gs()
		},
		kr: function(a, b, c) {
			if (a && !(1 > Math.abs(b) && 1 > Math.abs(c))) {
				var d = parseFloat(a.style.top) || 0,
					e = parseFloat(a.style.left) || 0,
					f = "";
				this.rotation && (f = g.g.Hr[g.g.Pf] + ":rotate(" + this.rotation + "deg);overflow:visible;");
				a.style.cssText = "position:absolute;top:" +
					(d + c) + "px;left:" + (e + b) + "px;" + f
			}
		},
		mZ: function(a) {
			var b = this.C.view.bT(),
				c = this.lR.height * this.S / 2;
			return a.y < b.$b + c ? (a.y = b.$b + c, a) : a.y > b.rc - c ? (a.y = b.rc - c, a) : null
		},
		yW: function() {
			this.Du();
			100 < new Date - this.Hg && (this.ps = null);
			this.T.Ff = null;
			this.Gg = !1;
			this.Gs();
			this.ja("dragend");
			if (this.Gt && this.ps)
				if (this.T.lg) {
					var a = this.ps,
						b = new g.G(0, 0);
					this.pe = new g.Vi(a, b, function(a, b, e) {
						return 600 <= e ? b : a.Jd(1 - Math.pow(e / 600, 2)).floor()
					}, 1);
					this.pe.kp = function(a) {
						if (2 > Math.abs(a.x) && 2 > Math.abs(a.y)) this.pe.stop(),
							this.q("moveend"), this.Mq(), this.ps = this.Hg = null;
						else {
							var b = a.x,
								e = a.y,
								f = this.rotation;
							f && (f *= Math.PI / 180, b = a.x * Math.cos(f) + Math.sin(f) * a.y, e = -Math.sin(f) * a.x + Math.cos(f) *
								a.y);
							b = this.get("centerCoords").Wa((new g.G(b, e)).Jd(this.S));
							e = this.mZ(b);
							f = a.y;
							e && (f = Math.round(this.De(e).Wa(this.De(b)).y));
							this.kr(this.Pa.sq, a.x, f);
							b.x = (b.x + g.a.wa) % g.a.wa;
							this.set("centerCoords", b, !0);
							this.set("center", this.Ee(b), !0);
							this.ja("mapmove")
						}
					};
					this.pe.Em(this)
				} else this.q("moveend"), this.Mq(!0), this.ps = this.Hg = null;
			else this.q("moveend"), this.Mq(), this.ps = this.Hg = null
		},
		Yqa: function() {
			if (!this.T.refresh) {
				var a = this,
					b = null;
				this.T.refresh = setInterval(function() {
					b !== a.T.Ff && (a.set("display", 0), b = a.T.Ff)
				}, g.l.Y ? 400 : 100)
			}
		},
		bS: function() {
			if (g.l.$k && (g.l.EI || g.l.qF)) {
				for (var a = this.Pa.o.childNodes, b = 0; b < a.length; b += 1) {
					var c = a[b];
					c instanceof HTMLCanvasElement && (c.width = 0);
					"amap-e" === c.className && (c.style.height = "0")
				}
				for (b = 0; b < this.ta.length; b += 1) c = this.ta[b], "undefined" !== typeof AMap.IndoorMap && c instanceof AMap
					.IndoorMap &&
					(c.Ms && (c.Ms.width = 0), c.Zv && (c.Zv.width = 0))
			}
		},
		Mq: function(a) {
			this.T.refresh && (clearInterval(this.T.refresh), this.T.refresh = null);
			a || (this.bS(), this.set("display", 0))
		},
		H3: function(a) {
			this.set("refresh", a)
		}
	});
	g.Db.ub({
		setZoomSlow: function(a) {
			this.gI(a, null, !this.get("animateEnable"))
		},
		setPanTo: function(a) {
			this.gI(null, a, !this.get("animateEnable"))
		},
		zoomAndCenterChanged: function(a) {
			var b = a[0];
			b < this.get("zooms")[0] && (b = this.get("zooms")[0]);
			b > this.get("zooms")[1] && (b = this.get("zooms")[1]);
			this.gI(b, a[1], a[2] || !this.get("animateEnable"))
		},
		zoomChanged: function() {
			this.S = Math.pow(2, 20 - this.get("zoom"));
			this.q("closeOverlays");
			this.set("display")
		},
		rotationChanged: function(a) {
			this.rotation = this.get("rotation");
			this.C.q("rotate", {
				rotation: this.rotation || 0
			});
			!0 !== a && this.set("display", 0)
		},
		pitchChanged: function() {
			this.pitch = this.get("pitch");
			this.C.q("pitch", {
				pitch: this.pitch || 0
			});
			this.set("display", 0)
		},
		centerCoordsChanged: function() {
			this.q("closeOverlays");
			this.uua ? this.VH(!0) : this.VH(!1)
		}
	});
	g.TS = g.Z.extend({
		ga: [g.na, g.He],
		r: function(a, b) {
			this.type = "2D";
			this.eg(b, !0);
			a && this.Cga(a)
		},
		Cga: function(a) {
			this.map = a;
			this.Ie(["size", "refresh", "maxPitch"], a);
			this.centerChanged();
			a.Ie(["zoom", "center", "centerCoords", "rotation", "pitch"], this)
		},
		bT: function() {
			this.GJ || this.Uha();
			return this.GJ
		},
		Uha: function() {
			var a;
			if (this.get("center") instanceof g.U) {
				a = new g.ue(-180, -85, 180, 85);
				var b = this.map.Rb(a.mj());
				a = this.map.Rb(a.wn());
				this.GJ = {
					Bc: b.x,
					$b: b.y,
					Ac: a.x,
					rc: a.y
				}
			} else a = this.map.get("limitBounds",
				null, !0), this.GJ = {
				Bc: a[0],
				$b: a[1],
				Ac: a[2],
				rc: a[3]
			}
		},
		CG: function() {
			var a = this.map,
				b = this.get("zoom");
			return {
				zoom: b,
				Og: this.get("center"),
				Da: this.jl(),
				mb: this.get("centerCoords"),
				rotation: parseInt(this.get("rotation")),
				lf: a.get("crs"),
				S: Math.pow(2, 20 - b),
				Ce: Math.round(b),
				Gf: Math.pow(2, 20 - Math.round(this.get("zoom")))
			}
		},
		centerChanged: function() {
			this.set("centerCoords", this.map.Rb(this.get("center")).toFixed(3), !0)
		},
		centerCoordsChanged: function() {
			var a = this.map;
			a.B = !0;
			var b = this.bT(),
				c = this.get("centerCoords"),
				d = a.getSize();
			a.B = !1;
			var e = this.get("zoom", null, !0),
				a = this.get("center", null, !0),
				d = d.height * Math.pow(2, 20 - e) / 2;
			a instanceof g.U ? c.x = (c.x + 268435456) % 268435456 : 0 > c.x ? c.x = 0 : c.x > b.Ac && (c.x = b.Ac);
			c.y < b.$b + d ? c.y = b.$b + d : c.y > b.rc - d && (c.y = b.rc - d);
			this.set("center", this.map.Ee(c), !0)
		}
	});
	g.sD = g.TS.extend({
		jl: function() {
			var a = this.get("size"),
				b = this.get("centerCoords"),
				c = parseInt(this.get("rotation")) % 360,
				d = this.get("zoom", null, !0),
				e = Math.pow(2, 20 - d),
				c = Math.PI * c / 180,
				a = new g.G((Math.abs(a.width * Math.cos(c)) + Math.abs(a.height * Math.sin(c))) / 2, (Math.abs(a.width * Math.sin(
					c)) + Math.abs(a.height * Math.cos(c))) / 2),
				e = new g.df(b.Wa(a.Jd(e)), b.add(a.Jd(e))),
				c = this.map.get("targetLevel");
			if (c > d - 1) {
				var f = Math.pow(2, 20 - c);
				e.V5 = new g.df(b.Wa(a.Jd(f)), b.add(a.Jd(f)))
			}
			e.K4 = c || d;
			e.kc = a;
			return e
		},
		Sja: function(a) {
			var b =
				this.get("size"),
				c = this.get("centerCoords"),
				d = parseInt(this.get("rotation")) % 360,
				d = Math.PI * d / 180,
				b = new g.G((Math.abs(b.width * Math.cos(d)) + Math.abs(b.height * Math.sin(d))) / 2, (Math.abs(b.width * Math.sin(
					d)) + Math.abs(b.height * Math.cos(d))) / 2);
			a = Math.pow(2, 20 - a);
			return new g.df(c.Wa(b.Jd(a)), c.add(b.Jd(a)))
		},
		bd: function() {
			var a = this.jl(),
				b = a.jd.x,
				c = a.Sb.y,
				a = new g.G(a.Sb.x, a.jd.y),
				b = new g.G(b, c);
			return new g.ue(this.map.Ee(a), this.map.Ee(b))
		},
		zoomChanged: function() {},
		De: function(a, b) {
			this.get("size");
			var c =
				a.jb(),
				d = this.get("centerCoords"),
				e = c.Wa(d);
			e.x < -g.a.wa / 2 ? e.x += g.a.wa : e.x > g.a.wa / 2 && (e.x -= g.a.wa);
			var c = this.get("size").DC().Uc(2),
				f = this.get("rotation") * Math.PI / 180,
				d = e.x * Math.cos(f) - Math.sin(f) * e.y,
				e = Math.sin(f) * e.x + Math.cos(f) * e.y;
			return c.add((new g.G(d, e)).Jd(Math.pow(2, (b || this.get("zoom")) - 20)))
		},
		Xf: function(a, b) {
			var c = this.get("size").DC().Uc(2),
				d = a.Wa(c),
				e = this.get("rotation") * Math.PI / 180,
				c = d.x * Math.cos(e) + Math.sin(e) * d.y,
				d = -Math.sin(e) * d.x + Math.cos(e) * d.y,
				c = this.get("centerCoords").add((new g.G(c,
					d)).Jd(Math.pow(2, 20 - (b || this.get("zoom")))));
			c.x = (c.x + 268435456) % 268435456;
			return c
		}
	});
	g.zJ = g.TS.extend({
		r: function(a, b) {
			this.ah = new g.Od;
			this.Kc = new g.Od([1, 0, 0, 0, 0, -1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1]);
			arguments.callee.ka.apply(this, arguments);
			this.scale = 1;
			this.type = "3D";
			this.uy = null;
			this.d3 = "";
			this.P = ["", 0, 0, "", 0];
			this.uy = {}
		},
		refreshChanged: function() {
			this.Gp()
		},
		zoomChanged: function(a) {
			this.Gp();
			this.P[4] = a
		},
		centerChanged: function(a) {
			arguments.callee.ka.apply(this, arguments);
			this.Gp()
		},
		centerCoordsChanged: function(a) {
			arguments.callee.ka.apply(this, arguments);
			this.Gp();
			this.P[0] = a.toString()
		},
		rotationChanged: function(a) {
			this.Gp();
			this.P[2] = a
		},
		pitchChanged: function(a) {
			this.he.pitch = Math.min(this.get("maxPitch"), Math.max(a, 0));
			this.Gp();
			this.P[1] = a
		},
		Gp: function() {
			if (!this.ssa() && (this.RR(), this.Jia(), this.map)) {
				var a = this,
					b = function() {
						a.map.camera = a.B_();
						a.map.q("camerachange", {
							map: a.map,
							camera: a.map.camera
						})
					};
				a.map.Ha ? b() : this.map.h("complete", b, this)
			}
		},
		B_: function() {
			return {
				height: this.bl,
				fov: this.Jja,
				aspect: this.vA,
				near: this.tx,
				far: this.gG,
				position: this.Zga,
				rotation: this.he.rotation,
				pitch: this.he.pitch
			}
		},
		Jia: function() {
			this.gba = g.a.Ke()
		},
		fx: function() {
			var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 300;
			return g.a.Ke() - this.gba > a
		},
		RR: function() {
			var a = this.get("centerCoords"),
				b = this.get("pitch"),
				c = this.get("rotation"),
				d = (new g.Od).i4(-a.x + g.a.Ub.x, -a.y + g.a.Ub.y, 0);
			this.Zga = {
				x: a.x - g.a.Ub.x,
				y: a.y - g.a.Ub.y
			};
			a = (new g.Od).Ux(180 - b, 1, 0, 0);
			this.Foa = (new g.Od).set(a);
			c = (new g.Od).Ux(c, 0, 0, 1);
			this.wr = (new g.Od).set(c);
			this.Ija = d.ag();
			this.Kc = (new g.Od).i4(0, 0, -this.bl).multiply(a.multiply(c.multiply(d))).toFixed(8);
			this.Kc.Le = this.Kc.ag()
		},
		ssa: function(a) {
			a = a || this.get("zoom");
			var b = this.get("size"),
				c = b.width,
				b = b.height;
			if (!c || !b) return !0;
			this.vA = c /= b;
			b = b / 2 * Math.pow(2, 20 - a);
			a = g.a.Wc((56 - a) * Math.PI / 180, 2);
			var d = g.a.Wc(b / Math.tan(a / 2), 0);
			2400 > d && (d = 2400, a = 2 * Math.atan(b / d));
			this.Jja = a;
			this.bl = d;
			this.tx = this.bl / 10;
			this.gG = 50 * this.bl;
			this.via = (this.bl - this.tx) / (this.gG - this.tx);
			this.ah.f4(a, c, this.tx, this.gG);
			this.ah.Le = this.ah.ag();
			a = this.ah;
			var c = new g.uS,
				b = c.$B,
				e = this.ah.elements,
				d = e[0],
				f = e[1],
				h = e[2],
				k = e[3],
				l =
				e[4],
				m = e[5],
				n = e[6],
				p = e[7],
				q = e[8],
				r = e[9],
				s = e[10],
				u = e[11],
				v = e[12],
				x = e[13],
				t = e[14],
				e = e[15];
			tc(b[0], k - d, p - l, u - q, e - v).normalize();
			tc(b[1], k + d, p + l, u + q, e + v).normalize();
			tc(b[2], k + f, p + m, u + r, e + x).normalize();
			tc(b[3], k - f, p - m, u - r, e - x).normalize();
			tc(b[4], k - h, p - n, u - s, e - t).normalize();
			tc(b[5], k + h, p + n, u + s, e + t).normalize();
			a.$N = c
		},
		CG: function() {
			var a = this.map;
			a.map.ou && (this.Gp(), this.P[3] = a.get("size").toString());
			var b = this.P.toString();
			if (b !== this.d3) {
				var c = this.get("zoom"),
					d = this.uy;
				d.zoom = c;
				d.vA = this.vA;
				d.top =
					this.top;
				d.Da = this.jl();
				d.mb = this.get("centerCoords");
				d.rotation = a.get("rotateEnable") && parseInt(this.get("rotation")) || 0;
				d.pitch = this.get("pitch") || 0;
				d.wAa = this.get("yaw");
				d.lf = a.get("crs");
				d.S = Math.pow(2, 20 - c);
				d.Ce = Math.round(c);
				d.D2 = Math.floor(c);
				d.Gf = Math.pow(2, 20 - d.Ce);
				d.Xna = Math.pow(2, 20 - d.D2);
				d.ah = this.ah;
				d.Kc = this.Kc;
				this.d3 = d.key = b
			}
			this.uy.Og = this.get("center");
			this.uy.Ep = g.a.Ke();
			this.uy.fx = this.fx();
			return this.uy
		},
		jl: function() {
			var a = this.get("size"),
				b = a.width,
				a = a.height;
			if (!b || !a) return null;
			var c, d;
			d = 0;
			var e = new g.G(0, d);
			c = this.Xf(e, !0);
			if (55 < this.he.pitch || !c)
				for (; !c;) d += a / 40, e.y = d, c = this.Xf(e, !0);
			this.top = d / a;
			e.x = b;
			d = this.Xf(e, !0);
			var f = 0,
				h = this.he.zoom;
			50 <= this.he.pitch && 18 <= h && (f = 0);
			e.y = a + f;
			f = this.Xf(e, !0);
			e.x = 0;
			h = this.Xf(e, !0);
			c = [c.Dl(), d.Dl(), f.Dl(), h.Dl(), c.Dl()];
			c = new g.k6(c);
			e.x = b / 2;
			e.y = a + 256;
			c.UM = this.Xf(e, !0);
			return c
		},
		bd: function() {
			var a = this.jl();
			if (a) {
				for (var b = [], c = 0; c < a.path.length; c += 1) {
					var d = this.map.Ee(new g.G(a.path[c][0], a.path[c][1]));
					b.push(d)
				}
				return new g.Xn(b)
			}
		},
		De: function(a, b, c) {
			a.z = c || 0;
			a = this.f2([a]);
			a = a[0];
			return new g.G(a.x, a.y)
		},
		E_: function(a) {
			var b = this.get("size");
			a = new g.Jk([a.x / b.width * 2 - 1, 1 - a.y / b.height * 2, -1, 1]);
			a.multiply(this.tx);
			return this.ah.Le.Zg(a)
		},
		Xf: function(a, b, c) {
			var d;
			this.map ? (this.map.B = !0, d = this.map.getSize(!0), this.map.B = !1) : d = this.get("size");
			var e = a.x / d.width * 2 - 1;
			d = 1 - a.y / d.height * 2;
			a = new g.Jk([e, d, -1, 1]);
			a.multiply(this.tx);
			if (!this.ah.Le) return null;
			a = this.ah.Le.Zg(a);
			e = new g.Jk([e, d, 1, 1]);
			e.multiply(this.gG);
			d = this.ah.Le.Zg(e);
			var f = this.Kc.Le,
				e = f.Zg(a).elements;
			a = f.Zg(d).elements;
			c = (e[2] - (-c || 0)) / (e[2] - a[2]);
			if (0 > a[2] || 0 > c || b && c > 2.5 * this.via) return null;
			b = e[0] - c * (e[0] - a[0]);
			c = e[1] - c * (e[1] - a[1]);
			return isNaN(b) || isNaN(c) ? null : (new g.G(b, c)).add(g.a.Ub)
		},
		f2: function(a) {
			for (var b = this.get("centerCoords"), c = g.a.Ub.x, d = g.a.Ub.y, e = this.get("size"), f = g.a.wa, h = b.x + f /
					2, b = b.x - f / 2, k = [], l = new g.Jk([0, 0, 0, 1]), m = l.elements, n = new g.G(0, 0), p = g.Od.multiply(
						this.ah, this.Kc), q = 0, r = a.length; q < r; q++)
				if (a[q]) {
					a[q].concat ? (n.x = a[q][0], n.y = a[q][1],
						n.z = -a[q][2] || 0) : (n.x = a[q].x, n.y = a[q].y, n.z = -a[q].z || 0);
					h < n.x ? n.x -= f : b > n.x && (n.x += f);
					m[0] = n.x - c;
					m[1] = n.y - d;
					m[2] = n.z;
					var s = p.Zg(l);
					s.multiply(1 / s.elements[3]);
					k[q] = {
						x: (s.elements[0] + 1) / 2 * e.width,
						y: (-s.elements[1] + 1) / 2 * e.height,
						z: s.elements[2]
					}
				} return k
		},
		Ssa: function(a) {
			var b = this.get("size");
			a = this.ah.Zg(this.Kc.Zg((new g.Jk).copy(a)));
			a.multiply(1 / a.elements[3]);
			b = new g.G((a.elements[0] + 1) / 2 * b.width, (-a.elements[1] + 1) / 2 * b.height);
			b.z = a.elements[2];
			return b
		}
	});
	g.a.Ub = new g.G(215440491, 106744817);
	g.Db.ub({
		iZ: function(a, b, c) {
			var d = this;
			d.QI ? (g.a.VM(d.QI), d.QI = null) : (d.ja("zoomstart", {
				zoom: a
			}), d.q("zoomstart"));
			d.QI = g.a.UH(function() {
				d.QI = null;
				d.ja("zoomend", {
					zoom: a
				});
				d.ja("zoomchange", {
					zoom: a
				});
				d.q("zoomend")
			}, {
				timeout: 150
			});
			a = g.a.Wc(a, 2);
			d.zy(a, !0, b, c)
		},
		zy: function(a, b, c, d) {
			var e = this.get("zoom");
			if (e !== a) {
				var f = this.get("zooms");
				"3D" !== this.C.view.type && (g.l.Y || g.l.oe) && (b = !0);
				a = a || e;
				a = Math.min(Math.max(a, f[0]), f[1]);
				var h = a !== e,
					k = !!c;
				this.pe && (this.pe.stop(), this.pe = null);
				c = c || this.get("centerCoords");
				var l = this.De(c);
				c = function(c) {
					b || (c = g.a.Wc(c, 2));
					var d = this.Xf(l);
					this.set("zoom", c);
					var e = this.Xf(l),
						d = e && e ? e.Wa(d) : new g.G(0, 0);
					this.set("centerCoords", this.get("centerCoords").Wa(d).toFixed(3));
					d.x && d.y && this.ja("mapmove");
					c === a && a << 0 === a && (this.set("targetLevel", null), h && (this.ja("zoomchange"), this.ja("zoomend")),
						k && this.q("moveend"), this.q("zoomend"), this.tf = null)
				};
				var m;
				this.nd && this.nd.ju && (this.nd.stop(), this.nd.OO && (d = !0), this.nd.kB && (m = !0), this.nd = null, this.set(
					"targetLevel", null));
				this.tf &&
					this.tf.ju && (this.tf.stop(), d = !0, this.tf.kB && (m = !0), this.tf = null, this.set("targetLevel", null));
				h && !d && this.ja("zoomstart");
				k && !m && this.ja("movestart");
				this.q("zoomstart");
				b ? c.call(this, a) : (this.tf = new g.Vi(e, a, null, 0.04), this.tf.OO = h, this.tf.kB = k, this.tf.transition =
					function(a, b, c) {
						return c >= g.w.nF ? b : (b - a) * (1 - Math.pow(1 - c / g.w.nF, 4)) + a
					}, this.tf.kp = c, this.tf.Em(this, !0), this.set("targetLevel", a))
			}
		},
		gI: function(a, b, c, d) {
			var e = null;
			a || (a = this.nd ? this.nd.hra : this.get("targetLevel") || this.get("zoom"));
			var e =
				b ? this.Rb(b).toFixed(3) : this.nd ? this.nd.J4 : this.get("centerCoords"),
				f = a !== this.get("zoom"),
				h = !e.eb(this.get("centerCoords")),
				k = b = !1;
			this.tf && this.tf.ju && (this.tf.stop(), b = !0, this.tf.kB && (k = !0), this.tf = null, this.set("targetLevel",
				null));
			this.nd && this.nd.ju && (this.nd.stop(), this.nd.OO && (b = !0), this.nd.kB && (k = !0), this.nd = null, this.set(
				"targetLevel", null));
			this.pe && (this.pe.stop(), this.pe = null);
			if (f || h) {
				if (!this.C.view.jl().contains(e) || f && "3D" !== this.C.view.type && (g.l.Y || g.l.oe)) c = !0;
				if (c) f && (b || (this.q("zoomstart"),
						this.ja("zoomstart")), this.set("zoom", a), this.ja("zoomchange"), this.ja("zoomend"), this.q("zoomend")), h &&
					(k || d || (this.ja("movestart"), this.q("movestart")), this.set("centerCoords", e), this.ja("mapmove"), this.q(
						"moveend", {
							j1: d
						})), this.set("targetLevel", null);
				else {
					this.set("targetLevel", a);
					var l = a - this.get("zoom"),
						m = e.Wa(this.get("centerCoords")).toFixed(3);
					this.nd = new g.Vi(1, 0, null, 0.001);
					this.nd.OO = f;
					this.nd.kB = h;
					this.nd.J4 = e;
					this.nd.hra = a;
					this.nd.transition = function(a, b, c) {
						return Math.pow(1 - Math.min(g.w.nF,
							c) / g.w.nF, 2)
					};
					this.nd.kp = function(b) {
						0.02 > b ? (this.nd && (this.nd.stop(), this.nd = null), f && (this.set("zoom", a), this.ja("zoomchange"),
							this.ja("zoomend"), f = !1, this.q("zoomend")), h && (this.set("centerCoords", e), this.q("mapmove"),
							this.q("moveend", {
								j1: d
							})), this.set("targetLevel", null)) : (f && this.set("zoom", a - l * b), h && (b = e.Wa(m.Jd(b)).toFixed(3),
							this.set("centerCoords", b), this.ja("mapmove")));
						this.set("display", 1)
					};
					this.nd.Em(this);
					f && !b && (this.q("zoomstart"), this.ja("zoomstart"));
					!h || k || d || (this.q("movestart"),
						this.ja("movestart"))
				}
			}
		}
	});
	g.o = {};
	g.o.Hc = g.Z.extend({
		ga: [g.na, g.He],
		r: function(a, b) {
			this.X = a;
			this.od = [3, 18];
			this.wD = g.a.Bb(this);
			a && this.Ie(["opacity", "visible", "zIndex", "zooms"], a);
			a.Kp = b.C.view.type;
			this.e = b;
			this.W("display", b)
		},
		wg: function() {
			this.Li && this.cN();
			if (g.Ea && g.Ea.Ip && g.Ea.Ip.length) {
				var a = g.a.indexOf(g.Ea.Ip, this); - 1 !== a && (g.Ea.Ip = g.a.Lo(g.Ea.Ip, a))
			}
			if (a = this.Fb) {
				if (a.length)
					for (var b = 0; b < a.length; b += 1) a[b].parentNode && a[b].parentNode.removeChild(a[b]);
				else a.parentNode && a.parentNode.removeChild(a);
				this.Fb = null
			}
			this.X.wg && this.X.wg();
			this.X.vi = !1;
			this.X.o = null;
			this.Hm();
			var c;
			this.N && (this.N.Gq(), this.N = null, c = "-" + this.vc);
			this.Pi && (this.Pi.Gq(), this.Pi = null, c = "-" + this.vc);
			if (c)
				for (var d in g.Ea.Oi) g.a.$A(d, c) && delete g.Ea.Oi[d]
		},
		ja: function(a, b) {
			this.X.q(a, b)
		},
		visibleChanged: function() {
			this.set("display", 0)
		},
		zIndexChanged: function() {
			this.set("display", 0)
		},
		cR: function(a) {
			g.g.wp(a, this.opacity)
		},
		opacityChanged: function() {
			var a = this.get("opacity");
			this.opacity = Math.min(Math.max(0, a), 1);
			if (a = this.Fb)
				if (a.length)
					for (var b = 0; b < a.length; b +=
						1) this.cR(a[b]);
				else this.cR(a);
			this.e && this.e.C && "3D" == this.e.C.view.type && this.set("display", 0)
		},
		So: function() {
			return this.e.Hd && !this.X.get("rejectMapMask")
		},
		gO: function() {
			var a = this.get("bounds");
			if (a) {
				if (a instanceof g.ue) {
					var b = a.mj(),
						a = a.wn(),
						c = this.e.Rb(new g.U(180, 0)).x,
						d = this.e.Rb(b),
						e = this.e.Rb(a),
						f = this.e.get("center");
					b.R > a.R && (0 < f.R ? e.x += c : d.x -= c);
					this.H = [d.x, d.y, e.x, e.y]
				} else a instanceof g.df ? this.H = [a.Sb.x, a.Sb.y, a.jd.x, a.jd.y] : a instanceof g.tD && "3D" === this.X.Kp &&
					(b = a.path[1], d =
						this.e.Rb(a.path[0]), e = this.e.Rb(b), this.H = [d.x, d.y, e.x, e.y, a.W3, a.height]);
				return this.H
			}
			return null
		}
	});
	var Fc = function() {
		function a(a) {
			this.BJ[g.a.Bb(a)] = a;
			return this
		}

		function b(a) {
			this.BJ[g.a.Bb(a)] = null;
			return this
		}
		return function() {
			function c() {
				var a = c.BJ,
					b, f = [],
					h;
				for (h in a) a.hasOwnProperty(h) && f.push(a[h]);
				for (a = f.length - 1; 0 <= a; a -= 1) h = f[a].apply(this, arguments), void 0 !== h && (b = h);
				return b
			}
			c.BJ = {};
			c.xY = a;
			c.Oya = b;
			return c
		}
	}();
	g.Of = g.Z.extend({
		ga: [g.na],
		r: function(a, b) {
			this.mo = a | 0;
			this.yD = !!b;
			this.count = 0;
			this.RP = Fc();
			this.clear();
			this.Kz = []
		},
		bp: function() {
			return !this.count
		},
		rxa: function() {
			return this.count >= this.mo
		},
		vza: function(a) {
			this.mo !== a && (this.mo = a | 0) && this.gY(this.mo)
		},
		xd: function(a) {
			return !!this.e[a]
		},
		get: function(a, b) {
			var c = this.wU(a);
			return c ? c.value : b
		},
		set: function(a, b) {
			var c = this.wU(a);
			c ? c.value = b : (c = new g.Of.Qp(a, b), this.e[a] = c, this.fE(c), this.count += 1, this.count > this.mo &&
				this.gY(this.mo))
		},
		Fu: function(a) {
			this.remove(a)
		},
		remove: function(a) {
			return this.e.hasOwnProperty(a) && this.aA(this.e[a]) ? !0 : !1
		},
		forEach: function(a, b) {
			for (var c = this.Mc.next; c !== this.Mc; c = c.next) a.call(b, c.value, c.key, this)
		},
		DH: function(a, b) {
			return this.e.hasOwnProperty(a) ? this.e[a].value : b
		},
		sya: function() {
			return this.Mc.next.value
		},
		tya: function() {
			return this.Mc.Ba.value
		},
		shift: function() {
			return this.hX(this.Mc.next)
		},
		pZ: function() {
			this.Kz.length = 0
		},
		O1: function(a) {
			this.Kz.push(a)
		},
		push: function(a) {
			a = new g.Of.Qp("", a);
			0 === this.count ? (this.Mc.Ba = null,
				a.Ba = this.Mc, this.Mc.next = a) : (this.oA.next = a, a.Ba = this.oA);
			this.count += 1;
			this.oA = a
		},
		fsa: function(a) {
			a = new g.Of.Qp("", a);
			0 === this.count ? (this.Mc.Ba = null, a.Ba = this.Mc, this.oA = this.Mc.next = a) : (this.Mc.next.Ba = a, a.next =
				this.Mc.next, a.Ba = this.Mc, this.Mc.next = a);
			this.count += 1
		},
		qna: function() {
			if (this.count) {
				this.count -= 1;
				var a = this.Mc.next;
				a.next ? (a.next.Ba = this.Mc, this.Mc.next = a.next) : (this.Mc.next = null, this.oA = this.Mc.Ba = null);
				a.next = null;
				a.Ba = null;
				return a.value
			}
			return null
		},
		pop: function() {
			return this.hX(this.Mc.Ba)
		},
		wU: function(a) {
			if (this.e.hasOwnProperty(a)) return a = this.e[a], this.yD && (a.remove(), this.fE(a)), a
		},
		fE: function(a) {
			this.yD ? (a.next = this.Mc.next, a.Ba = this.Mc, this.Mc.next = a, a.next.Ba = a) : (a.Ba = this.Mc.Ba, a.next =
				this.Mc, this.Mc.Ba = a, a.Ba.next = a)
		},
		gY: function(a) {
			if (!(this.count <= a || this.count < 2 * this.Kz.length)) {
				for (var b = this.yD ? this.Mc.Ba : this.Mc.next, c = {}, d = 0, e = this.Kz.length; d < e; d++) c[this.Kz[d]] = !
					0;
				for (a = Math.ceil(2 * a / 3); b && this.count > a && (d = this.yD ? b.Ba : b.next, b.key && !c[b.key] && this.aA(
							b) && this.RP(b.value),
						b = d, b !== this.Mc && b !== this.oA););
			}
		},
		aA: function(a) {
			if (this.sF && !1 == this.sF(a.value)) return !1;
			a.remove();
			delete this.e[a.key];
			this.count -= 1;
			return !0
		},
		hX: function(a) {
			this.Mc !== a && (this.sF && console.log("Warnning!!!"), this.aA(a));
			return a.value
		},
		clear: function() {
			this.e = {};
			this.Mc = new g.Of.Qp("", null);
			this.Mc.Ba = this.Mc.next = this.Mc;
			this.count = 0
		}
	});
	g.Of.Qp = function(a, b) {
		this.key = a;
		this.value = b
	};
	g.Of.Qp.prototype.Ba = null;
	g.Of.Qp.prototype.next = null;
	g.Of.Qp.prototype.remove = function() {
		this.Ba.next = this.next;
		this.next.Ba = this.Ba;
		this.next = this.Ba = null
	};

	function Gc(a, b, c) {
		this.url = a;
		this.xc = b;
		this.VN = c;
		this.jm = this.WH = !1
	}

	function Hc(a, b, c) {
		var d = Ic;
		return function() {
			return d.call(this, a, b, c)
		}
	}

	function Ic(a, b, c) {
		a.cwa = +new Date;
		a.loaded = b;
		clearTimeout(a.tra);
		var d = a.Gma;
		d.Bm.remove(a.url) && d.hba();
		d = a.$la ? a.ma : a.xa;
		a.ma = null;
		(c || b || a.VN) && a.xc(b ? d : null, a);
		a.q1 ? (a.q1.gj(), a.q1 = null) : d && (d.onload = null, d.onerror = null, d.onabort = null, a.xa = null)
	}
	g.bD = g.Z.extend({
		rua: "assets/image/blank.gif",
		r: function(a, b, c) {
			this.timeout = b || 15E3;
			this.qp = new g.Of(1024);
			this.Bm = new g.Of(1024);
			this.xZ = a;
			this.HN = c
		},
		XJ: function(a) {
			a && this.Bm.count >= this.xZ && (a = this.Bm.Mc.Ba.value, a.jm && (this.Bm.remove(a.url), this.iT(a)));
			for (; this.qp.count && !(this.Bm.count >= this.xZ);) this.K9(this.qp.shift())
		},
		hba: function() {
			if (!this.PT) {
				this.PT = !0;
				var a = this;
				setTimeout(function() {
					a.PT = !1;
					a.XJ()
				}, 0)
			}
		},
		K9: function(a) {
			var b = document.createElement("img");
			a.Kja && (b.crossOrigin = "anonymous");
			b.src = a.url;
			a.xa = b;
			a.Gma = this;
			a.startTime = +new Date;
			a.WH = !0;
			b.complete ? Ic(a, !0) : (this.Bm.set(a.url, a), b.onload = Hc(a, !0), b.onerror = Hc(a, !1, !0), b.onabort = Hc(
				a, !1), a.tra = setTimeout(Hc(a, !1, !0), this.timeout))
		},
		iT: function(a) {
			a.WH && (Ic(a, !1), a.jm = !0, a.fva = !0)
		},
		Lxa: function(a, b, c) {
			return this.cH(a.url, b, c, !0, a.sa.z + "_" + a.sa.x + "_" + a.sa.y)
		},
		cH: function(a, b, c, d, e) {
			var f = this.Bm.get(a);
			if (f && f.jm) f.jm = !1, f.xc = b, f.VN = c;
			else {
				f = new Gc(a, b, c);
				f.$la = d;
				f.key = e;
				if (this.qp.get(g.a.Bb(f))) return;
				this.qp.set(g.a.Bb(f),
					f);
				this.XJ(!0)
			}
			return f
		},
		Ama: function(a, b, c) {
			var d = this.Bm.get(a);
			if (d && d.jm) d.jm = !1, d.xc = b, d.VN = c;
			else {
				d = new Gc(a, b, c);
				d.Kja = !0;
				if (this.qp.get(g.a.Bb(d))) return;
				this.qp.set(g.a.Bb(d), d);
				this.XJ(!0)
			}
			return d
		},
		hZ: function(a) {
			a.jm || (a.jm = !0, this.qp.remove(g.a.Bb(a)))
		},
		clear: function(a) {
			this.qp.forEach(function(a) {
				a.jm = !0
			});
			this.qp.clear();
			if (a)
				for (; 0 < this.Bm.length;) a = this.Bm.pop(), this.iT(a);
			else this.Bm.forEach(function(a) {
				a.jm = !0
			})
		}
	});

	function Jc(a, b, c) {
		this.z = a;
		this.x = b;
		this.y = c
	}
	Jc.prototype.jb = function() {
		return new Jc(this.z, this.x, this.y)
	};
	Jc.prototype.toString = function() {
		return this.z + "/" + this.x + "/" + this.y
	};
	g.gb = function(a) {
		var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : !1;
		this.sa = a;
		this.key = a.toString();
		this.qe = b
	};
	g.Yn = Jc;
	g.o.gb = g.o.Hc.extend({
		r: function(a, b, c, d, e) {
			arguments.callee.ka.apply(this, arguments);
			this.W("tileSize", a);
			this.W("tiles", a);
			this.Ie(["zooms", "type", "detectRetina", "errorUrl"], a);
			this.W("lang", b, !0);
			this.W("mapStyle", b, !0);
			this.W("style", b, !0);
			this.W("features", b, !0);
			var f = "overlayer" === a.get("type") || !1 === a.get("blend");
			this.Qj = !f && !g.l.Y;
			if (g.l.oe || g.l.pAa) this.Qj = !1;
			var h = b.get("size"),
				h = h.width * h.height / 65536;
			this.ha = g.l.Y && g.l.ha && this.get("detectRetina");
			g.l.md && g.l.Y && 9 < h && (this.Qj = !1);
			this.ni = !f && !a.Aj;
			this.oi = !f && !a.Aj;
			this.tI = c;
			this.W("reload", a);
			a.Wla ? this.W("createTile", a) : this.W("tileFun", a);
			this.Oe = d;
			this.WO = e
		},
		langChanged: function() {
			this.set("reload");
			this.X.ur()
		},
		styleChanged: function() {
			this.e.yc || (this.set("reload"), this.X.ur())
		},
		featuresChanged: function() {
			this.set("reload");
			this.X.ur()
		},
		reloadChanged: function() {
			this.set("display", 0)
		},
		tileFunChanged: function() {
			var a = this.tI || this.get("tileFun");
			this.mn = function(b, c, d) {
				var e = a(b.sa.x, b.sa.y, b.sa.z);
				if (!b.br || b.br.jm) b.loaded = !1,
					b.br = ("3D" === this.e.C.view.type ? g.ql.Ama : g.ql.cH).call(g.ql, e, function(a) {
						b.br = null;
						a ? c(a) : d()
					}, !1)
			}
		},
		createTileChanged: function() {
			this.X.B = !0;
			var a = this.X.getCreateTile();
			this.X.B = !1;
			this.mn = function(b, c, d) {
				a.call(this.j.X, b.sa.x, b.sa.y, b.sa.z, c, d)
			};
			this.set("reload")
		},
		nl: function() {
			var a = this.X.get("zooms", null, !0);
			this.X.Vla && (a = [Math.min(a[0], 18), Math.min(a[1], 18)]);
			return {
				Yc: this.X.get("tileSize"),
				visible: this.X.get("visible"),
				H: this.gO(),
				od: a,
				uF: this.Qj,
				ni: this.ni,
				oi: this.oi,
				opacity: this.X.get("opacity"),
				mn: this.X.get("createTile"),
				xn: this.tI || this.X.get("tileFun"),
				md: this.X.ip ? !1 : this.X.get("detectRetina") && g.l.ha && g.l.Y,
				Hd: this.So()
			}
		},
		lm: function(a) {
			if (g.N.Ud.ii) return new g.N.Ud.ii(this, a)
		}
	});
	g.ql = new g.bD(6, null);
	g.o.Qc = g.o.Hc.extend({
		r: function(a, b) {
			this.nb = Math.min(2, window.devicePixelRatio || 1);
			this.md = g.l.ha && !a.Ki;
			this.map = b;
			this.Cp = 0;
			this.ol = !1;
			this.If = this.af = 0;
			this.ug = [];
			arguments.callee.ka.apply(this, arguments);
			this.St = [];
			this.el = new g.o.q6;
			a && (this.W("style", a), this.W("cursor", a, !0), this.Vqa = a.get("stable") || !1, this.W("dataSources", a),
				this.W("bubble", a));
			this.W("display", b);
			this.o8()
		},
		nl: function() {
			return {
				visible: this.get("visible"),
				od: this.get("zooms"),
				opacity: this.get("opacity"),
				zIndex: this.get("zIndex"),
				hw: this.X.get("alwaysRender") || !1,
				Hd: this.So()
			}
		},
		dataSourcesChanged: function() {
			var a = this.get("dataSources");
			a && a.length ? "string" === typeof a ? (new g.bb.qb(a)).h("complete", function(a) {
				this.L2(a.data);
				this.Fq = a.data;
				this.ol = !0;
				this.set("display");
				this.Ha = !0;
				this.X.q("complete")
			}, this) : a.length && (this.L2(a), this.Fq = a, this.ol = !0, this.set("display"), this.Ha = !0, this.X.q(
				"complete")) : this.clear()
		},
		getDatas: function() {
			return this.Fq
		},
		msa: function() {
			if (this.X.Ki) {
				var a = this.Bl;
				this.af = a.af;
				this.If = a.If
			}
		},
		ja: function(a, b) {
			var c = {
				type: a,
				data: "mouseout" === a ? this.eba || null : b.Ks.Za,
				target: this.X
			};
			this.eba = "mouseout" === a ? null : b.Ks.Za;
			this.X.q(a, c)
		},
		qc: function(a) {
			this.ja(a.type, a)
		},
		o8: function() {
			this.h("click", this.qc);
			this.h("dblclick", this.qc);
			this.h("mousedown", this.qc);
			this.h("mouseup", this.qc);
			this.h("mouseover", this.qc);
			this.h("mouseout", this.qc);
			this.h("touchstart", this.qc);
			this.h("touchend", this.qc)
		},
		bva: function() {
			this.I("click", this.qc);
			this.I("dblclick", this.qc);
			this.I("mousedown", this.qc);
			this.I("mouseup",
				this.qc);
			this.I("mouseover", this.qc);
			this.I("mouseout", this.qc);
			this.I("touchstart", this.qc);
			this.I("touchend", this.qc)
		},
		styleChanged: function() {
			this.Bl = this.get("style");
			this.msa();
			this.set("display", 0)
		},
		L2: function(a) {
			if (a) {
				this.clear();
				for (var b = 0; b < a.length; b += 1) {
					var c = a[b].lnglat;
					a[b].lnglat = g.a.Fa(c);
					c = this.map.Rb(c);
					c = new g.Ah({
						name: "point-" + g.a.Bb(this),
						ba: new g.va.hg([c.x, c.y], !0)
					});
					c.fq = this;
					c.Za = a[b];
					this.lF(c)
				}
			}
		},
		zka: function(a) {
			if ("geojson" === a) return new g.v6({
				map: this.map
			});
			if ("topjson" ===
				a) return new g.Pta({
				map: this.map
			});
			if ("subway" === a) return new g.Kta({
				map: this.map
			})
		},
		zoa: function(a) {
			if (a) {
				var b = [],
					b = [],
					c = {};
				if (a.rules) {
					for (var b = a.rules, d = 0, e = b.length; d < e; d += 1) {
						for (var f = [], h = b[d].symbolizers, k = 0, l = h.length; k < l; k += 1) h[k].fill && (f[k] = new g.style.ig
							.sS(h[k].fill)), h[k].stroke && (f[k] = new g.style.ig.PS(h[k].stroke));
						h = f;
						b[d].qI = h;
						b[d] = new g.style.g7(b[d])
					}
					c.rules = b
				}
				if (a.symbolizers) {
					b = a.symbolizers;
					a = 0;
					for (d = b.length; a < d; a += 1) b[a].fill && (b[a] = new g.style.ig.sS(b[a].fill)), b[a].stroke &&
						(b[a] = new g.style.ig.PS(b[a].stroke));
					c.qI = b
				}
				a = new g.uJ(c)
			} else a = new g.uJ({});
			this.set("style", a);
			return a
		},
		Zua: function(a, b) {
			var c = new g.bb.qb(a);
			c.h("complete", function(c) {
				c = this.ma[a] = this.zka(b).vQ(c);
				this.ew(c);
				this.ja("complete")
			}, this);
			c.h("error", this.Vb, this)
		},
		apa: function(a) {
			"px" === a.target.get("unit") ? (this.af = Math.max(a.wk, this.af), this.If = Math.max(a.wk, this.If)) : a.wk >
				this.ir && (this.ir = a.wk, this.qx = this.ir / this.map.C.Bi.To(20))
		},
		lF: function(a) {
			this.el.add(a);
			if (!this.SA && !this.X.Ki) {
				if (0 ===
					a.name.indexOf("circle") || 0 === a.name.indexOf("ellipse")) {
					a.h("rad", this.apa, this);
					var b = a.get("radius");
					b.length && (b = Math.max.apply(null, b));
					"px" === a.get("unit") ? (this.af = Math.max(b, this.af), this.If = Math.max(b, this.If)) : this.ir ? b > this
						.ir && (this.ir = b, this.qx = this.ir / this.map.C.Bi.To(20)) : (this.ir = b, this.qx = this.ir / this.map.C
							.Bi.To(20))
				}
				b = a.get("strokeWeight") || 0;
				if (!this.rx || b > this.rx) this.rx = b
			}
			this.Vqa || a.W("feature", this, !0)
		},
		ew: function(a) {
			this.ol = !0;
			for (var b = 0, c = a.length; b < c; b += 1) this.lF(a[b])
		},
		clear: function() {
			this.ol = !0;
			this.Fq = [];
			this.el.clear();
			this.set("display", 0)
		},
		pm: function(a) {
			var b, c;
			b = this.el.pm([a[0] + g.a.wa, a[1], a[2] + g.a.wa, a[3]]);
			c = this.el.pm([a[0] - g.a.wa, a[1], a[2] - g.a.wa, a[3]]);
			a = this.el.pm(a);
			return g.extend(a, g.extend(b, c))
		},
		Nwa: function(a) {
			var b, c = this.get("style"),
				d = a.zk;
			c instanceof g.uJ || (c = this.zoa(c));
			if (d && 0 < d.length) b = c.DZ(d, a);
			else {
				if (c.Q3.length || c.zk.length) b = c.jia(a);
				b || (b = a.gka())
			}
			return b
		},
		FO: function(a) {
			function b(a, b) {
				return a.fl - b.fl
			}
			var c = [],
				d, e, f, h, k, l = {};
			for (d in a)
				if (a.hasOwnProperty(d)) {
					f = a[d];
					h = f.get("zIndex");
					for (e in l)
						if (l.hasOwnProperty(e) && (k = c[l[e]][2], k === h)) break;
					"undefined" === typeof l[h] && (c.push([
						[],
						[], h
					]), l[h] = c.length - 1);
					h = c[l[h]];
					h[0].push(f)
				} c.sort(this.Qqa);
			a = 0;
			for (d = c.length; a < d; a += 1) c[a][0].sort(b);
			return c
		},
		featureChanged: function(a) {
			this.ol = !0;
			var b = a.target,
				c = b.hc();
			0 !== this.el.lka([g.a.Bb(b)]).length && (this.el.remove(b, a.Vt), c && !a.Bia && this.el.add(b))
		},
		t3: function(a) {
			this.ol = !0;
			for (var b, c = 0, d = a.length; c < d; c += 1) b = a[c], b.ba.Vt =
				null, b.Lq(!0), b.Ck("feature")
		},
		Bza: function(a, b) {
			return a[1].zIndex === b[1].zIndex ? g.a.Bb(a[1]) - g.a.Bb(b[1]) : a[1].zIndex - b[1].zIndex
		},
		Qqa: function(a, b) {
			return a[2] - b[2]
		},
		oza: function(a) {
			return a.Twa() === g.o.Tta.Eta
		},
		lm: function(a) {
			return this.SA ? new g.N.se.Kk(this, a) : "c" === this.map.get("overlayRender") && g.N.canvas.Kk ? new g.N.canvas
				.Kk(this, a) : g.N.Ud.Kk && "d" === this.map.get("overlayRender") ? new g.N.Ud.Kk(this, a) : null
		}
	});
	g.o.Qc.ub({
		mm: function(a) {
			return this.SA ? new g.ya.se.Kk(this, a) : this.X.Ki ? new g.ya.R6(this, a) : new g.ya.Kk(this, a)
		}
	});
	g.o.q6 = g.Z.extend({
		r: function() {
			this.clear()
		},
		clear: function() {
			this.Yo = [];
			this.qQ = new g.Pj
		},
		add: function(a) {
			var b = g.a.Bb(a),
				c = a.hc();
			this.Yo[b] || (this.count += 1, this.Yo[b] = a, c && !g.H.eb(c.bd(), [Infinity, Infinity, -Infinity, -Infinity]) &&
				this.qQ.cx(c.bd(), a))
		},
		Iwa: function() {
			return this.Yo
		},
		pm: function(a) {
			return this.qQ.bqa(a)
		},
		lka: function(a) {
			var b = a.length,
				c = [],
				d;
			for (d = 0; d < b; d += 1) this.Yo[a[d]] && c.push(this.Yo[a[d]]);
			return c
		},
		remove: function(a, b) {
			var c = g.a.Bb(a).toString(),
				d = a.hc();
			this.Yo[c] && (this.Yo[c] =
				null, d && (c = "undefined" !== typeof b ? b : d.bd(), this.qQ.remove(c, a)))
		}
	});
	g.Pj = g.Z.extend({
		r: function(a) {
			this.U1 = "undefined" !== typeof a ? a : 6;
			this.kH = Math.floor(this.U1 / 2);
			this.aI = {
				H: [Infinity, Infinity, -Infinity, -Infinity],
				Ab: []
			};
			this.count = 0
		},
		qha: function(a, b) {
			var c = -1,
				d = [],
				e;
			d.push(b);
			var f = b.Ab;
			do {
				-1 !== c && (d.push(f[c]), f = f[c].Ab, c = -1);
				for (var h = f.length - 1; 0 <= h; h -= 1) {
					var k = f[h];
					if ("undefined" !== typeof k.Me) {
						c = -1;
						break
					}
					var l = g.Pj.Xx(k.H[2] - k.H[0], k.H[3] - k.H[1], k.Ab.length + 1),
						k = g.Pj.Xx((k.H[2] > a.H[2] ? k.H[2] : a.H[2]) - (k.H[0] < a.H[0] ? k.H[0] : a.H[0]), (k.H[3] > a.H[3] ? k.H[
								3] : a.H[3]) -
							(k.H[1] < a.H[1] ? k.H[1] : a.H[1]), k.Ab.length + 2);
					if (0 > c || Math.abs(k - l) < e) e = Math.abs(k - l), c = h
				}
			} while (-1 !== c);
			return d
		},
		cx: function(a, b, c) {
			a = {
				H: a,
				Me: b
			};
			"undefined" !== typeof c && (a.type = c);
			this.W0(a, this.aI);
			this.count += 1
		},
		W0: function(a, b) {
			var c;
			if (0 === b.Ab.length) b.H = g.H.jb(a.H), b.Ab.push(a);
			else {
				var d = this.qha(a, b),
					e = a;
				do {
					if (c && "undefined" !== typeof c.Ab && 0 === c.Ab.length) {
						var f = c;
						c = d.pop();
						for (var h = 0, k = c.Ab.length; h < k; h += 1)
							if (c.Ab[h] === f || 0 === c.Ab[h].Ab.length) {
								c.Ab.splice(h, 1);
								break
							}
					} else c = d.pop();
					f =
						e instanceof Array;
					if ("undefined" !== typeof e.Me || "undefined" !== typeof e.Ab || f) {
						if (f) {
							f = 0;
							for (h = e.length; f < h; f += 1) g.H.extend(c.H, e[f].H);
							c.Ab = c.Ab.concat(e)
						} else g.H.extend(c.H, e.H), c.Ab.push(e);
						if (c.Ab.length <= this.U1)
							if (0 < d.length) e = {
								H: g.H.jb(c.H)
							};
							else break;
						else e = f = this.uma(c.Ab), 1 > d.length && (c.Ab.push(f[0]), d.push(c), e = f[1])
					} else g.H.extend(c.H, e.H), e = {
						H: g.H.jb(c.H)
					}
				} while (0 < d.length)
			}
		},
		uma: function(a) {
			for (var b = this.Coa(a); 0 < a.length;) this.Doa(a, b[0], b[1]);
			return b
		},
		Coa: function(a) {
			for (var b =
					a.length - 1, c = 0, d = a.length - 1, e = 0, f = a.length - 2; 0 <= f; f -= 1) {
				var h = a[f];
				h.H[0] > a[c].H[0] ? c = f : h.H[2] < a[b].H[1] && (b = f);
				h.H[1] > a[e].H[1] ? e = f : h.H[3] < a[d].H[3] && (d = f)
			}
			Math.abs(a[b].H[2] - a[c].H[0]) > Math.abs(a[d].H[3] - a[e].H[1]) ? b > c ? (b = a.splice(b, 1)[0], c = a.splice(
				c, 1)[0]) : (c = a.splice(c, 1)[0], b = a.splice(b, 1)[0]) : d > e ? (b = a.splice(d, 1)[0], c = a.splice(e, 1)[
				0]) : (c = a.splice(e, 1)[0], b = a.splice(d, 1)[0]);
			return [{
				H: g.H.jb(b.H),
				Ab: [b]
			}, {
				H: g.H.jb(c.H),
				Ab: [c]
			}]
		},
		Doa: function(a, b, c) {
			for (var d = g.Pj.Xx(b.H[2] - b.H[0], b.H[3] - b.H[1],
					b.Ab.length + 1), e = g.Pj.Xx(c.H[2] - c.H[0], c.H[3] - c.H[1], c.Ab.length + 1), f, h, k, l = a.length - 1; 0 <=
				l; l -= 1) {
				var m = a[l],
					n = [b.H[0] < m.H[0] ? b.H[0] : m.H[0], b.H[2] > m.H[2] ? b.H[2] : m.H[2], b.H[1] < m.H[1] ? b.H[1] : m.H[1],
						b.H[3] > m.H[3] ? b.H[3] : m.H[3]
					],
					n = Math.abs(g.Pj.Xx(n[1] - n[0], n[3] - n[2], b.Ab.length + 2) - d),
					m = [c.H[0] < m.H[0] ? c.H[0] : m.H[0], c.H[2] > m.H[2] ? c.H[2] : m.H[2], c.H[1] < m.H[1] ? c.H[1] : m.H[1],
						c.H[3] > m.H[3] ? c.H[3] : m.H[3]
					],
					m = Math.abs(g.Pj.Xx(m[1] - m[0], m[3] - m[2], c.Ab.length + 2) - e),
					p = Math.abs(m - n);
				if (!h || !f || p < f) h = l, f = p, k = m < n ? c :
					b
			}
			d = a.splice(h, 1)[0];
			b.Ab.length + a.length + 1 <= this.kH ? (b.Ab.push(d), g.H.extend(b.H, d.H)) : c.Ab.length + a.length + 1 <=
				this.kH ? (c.Ab.push(d), g.H.extend(c.H, d.H)) : (k.Ab.push(d), g.H.extend(k.H, d.H))
		},
		remove: function(a, b) {
			var c = [];
			c[0] = {
				H: a
			};
			(c[1] = b) || (c[1] = !1);
			c[2] = this.aI;
			this.count -= 1;
			if (!1 === c[1]) {
				var d = 0,
					e = [];
				do d = e.length, e = e.concat(this.y3.apply(this, c)); while (d !== e.length);
				return e
			}
			return this.y3.apply(this, c)
		},
		y3: function(a, b, c) {
			var d = [],
				e = [],
				f = [];
			if (!a || !g.H.$f(a.H, c.H)) return f;
			a = g.H.jb(a.H);
			var h;
			e.push(c.Ab.length);
			d.push(c);
			do {
				c = d.pop();
				var k = e.pop() - 1;
				if ("undefined" !== typeof b)
					for (; 0 <= k;) {
						var l = c.Ab[k];
						if (g.H.$f(a, l.H))
							if (b && "undefined" !== typeof l.Me && l.Me === b || !b && ("undefined" !== typeof l.Me || g.H.yZ(a, l.H))) {
								"undefined" !== typeof l.Ab ? (f = this.Rx(l, !0, [], l), c.Ab.splice(k, 1)) : f = c.Ab.splice(k, 1);
								g.Pj.BQ(c);
								b = void 0;
								c.Ab.length < this.kH && (h = this.Rx(c, !0, [], c));
								break
							} else "undefined" !== typeof l.Ab && (e.push(k), d.push(c), c = l, k = l.Ab.length);
						k -= 1
					} else if ("undefined" !== typeof h) {
						c.Ab.splice(k + 1, 1);
						0 < c.Ab.length && g.Pj.BQ(c);
						k = 0;
						for (l = h.length; k < l; k += 1) this.W0(h[k], c);
						h.length = 0;
						0 === d.length && 1 >= c.Ab.length ? (h = this.Rx(c, !0, h, c), c.Ab.length = 0, d.push(c), e.push(1)) : 0 <
							d.length && c.Ab.length < this.kH ? (h = this.Rx(c, !0, h, c), c.Ab.length = 0) : h = void 0
					} else g.Pj.BQ(c)
			} while (0 < d.length);
			return f
		},
		search: function(a, b) {
			return this.Rx({
				H: a
			}, !1, [], this.aI, b)
		},
		bqa: function(a, b) {
			return this.Rx({
				H: a
			}, !1, [], this.aI, b, !0)
		},
		Rx: function(a, b, c, d, e, f) {
			var h = {},
				k = [];
			if (!g.H.$f(a.H, d.H)) return f ? h : c;
			k.push(d.Ab);
			do {
				d = k.pop();
				for (var l = d.length - 1; 0 <= l; l -= 1) {
					var m = d[l];
					if (g.H.$f(a.H, m.H))
						if ("undefined" !== typeof m.Ab) k.push(m.Ab);
						else if ("undefined" !== typeof m.Me)
						if (b) c.push(m);
						else if ("undefined" === typeof e || m.type === e) m = m.Me, "undefined" !== typeof f ? h[g.a.Bb(m)] = m : c.push(
						m)
				}
			} while (0 < k.length);
			return "undefined" !== typeof f ? h : c
		}
	});
	g.Pj.BQ = function(a) {
		var b = a.Ab.length,
			c = a.H;
		if (0 === b) g.H.empty(c);
		else {
			var d = a.Ab[0].H;
			c[0] = d[0];
			c[2] = d[2];
			c[1] = d[1];
			c[3] = d[3];
			for (d = 1; d < b; d += 1) g.H.extend(c, a.Ab[d].H)
		}
	};
	g.Pj.Xx = function(a, b, c) {
		var d = (a + b) / 2;
		a *= b;
		return a * c / (a / (d * d))
	};
	g.A = g.A || {};
	g.A.Dh = g.Z.extend({
		ga: [g.na, g.He],
		loa: ["position", "altitude", "visible", "clickable", "bubble"],
		r: function(a, b) {
			this.map = b;
			this.Ie(this.loa, a);
			this.W("zIndex", a);
			this.W("draggable", a);
			g.l.of && this.v8();
			g.l.Y || this.PJ();
			this.Wb = a;
			this.Wb.A = this
		},
		draggableChanged: function() {
			this.get("draggable") ? this.OJ() : this.wL()
		},
		ja: function(a, b) {
			var c;
			c = b ? {
				type: a,
				pixel: b.vb,
				target: this.Wb,
				lnglat: b.cg
			} : {
				type: a
			};
			this.Wb && this.Wb.q(a, c)
		},
		qc: function(a) {
			("click" !== a.type && "rightclick" !== a.type && "dblclick" !== a.type && "longclick" !==
				a.type || this.get("clickable")) && this.ja(a.type, a)
		},
		NJ: function() {
			this.h("click", this.qc);
			this.h("rightclick", this.qc);
			this.h("longclick", this.qc);
			this.h("longpress", this.qc);
			this.h("dblclick", this.qc)
		},
		iY: function() {
			this.I("click", this.qc);
			this.I("rightclick", this.qc);
			this.I("longclick", this.qc);
			this.I("longpress", this.qc);
			this.I("dblclick", this.qc)
		},
		PJ: function() {
			this.get("clickable") && this.NJ();
			this.h("mousemove", this.qc);
			this.h("mouseout", this.qc);
			this.h("mouseover", this.qc);
			this.h("mousedown",
				this.qc);
			this.h("mouseup", this.qc)
		},
		cva: function() {
			this.iY();
			this.I("mousemove", this.qc);
			this.I("mouseout", this.qc);
			this.I("mouseover", this.qc);
			this.I("mousedown", this.qc);
			this.I("mouseup", this.qc)
		},
		clickableChanged: function() {
			this.get("clickable") ? this.NJ() : this.iY()
		},
		v8: function() {
			this.get("clickable") && this.NJ();
			this.h("touchstart", this.qc, this);
			this.h("touchmove", this.qc, this);
			this.h("touchend", this.qc, this)
		},
		OJ: function() {
			this.h("dragstart", this.zs);
			this.h("dragging", this.xs);
			this.h("dragend",
				this.ys)
		},
		zs: function(a) {
			this.map.BP(a);
			this.Ff = a.vb;
			this.u1 = a.Ka;
			this.t1 = a.cg;
			this.ja("dragstart", a)
		},
		xs: function(a) {
			var b = this.map.C.view.type;
			if ("2D" == b) {
				var c = a.vb.Wa(this.Ff),
					b = c.x,
					c = c.y;
				this.Ff = a.vb;
				var d = this.map.get("rotation") * Math.PI / 180,
					e = b * Math.cos(d) + Math.sin(d) * c,
					b = -Math.sin(d) * b + Math.cos(d) * c;
				this.kr(new g.G(e, b));
				this.ja("dragging", a)
			} else "3D" == b && a.Ka && (c = a.vb.Wa(this.Ff), b = c.x, c = c.y, e = a.Ka.Wa(this.u1), a.cg.Wa(this.t1),
				this.Ff = a.vb, "function" === typeof this.GB && this.GB(b, c, e), this.u1 =
				a.Ka, this.t1 = a.cg, this.ja("dragging", a))
		},
		ys: function(a) {
			this.map.Du();
			this.ja("dragend", a)
		},
		wL: function() {
			this.I("dragstart", this.zs);
			this.I("dragging", this.xs);
			this.I("dragend", this.ys)
		},
		AK: function(a) {
			var b, c, d = [];
			if (a)
				for (b = 0, c = a.length; b < c; b += 1) d.push(this.BK(a[b]));
			return d
		},
		BK: function(a) {
			a = this.map.Rb(a);
			return [a.x, a.y]
		},
		Hf: function(a) {
			var b = this.L.fb || this.map.get("centerCoords"),
				c = Math.pow(2, 20 - this.map.get("zoom"));
			return [(a[0] - b.x) / c, (a[1] - b.y) / c]
		},
		GK: function(a, b) {
			for (var c = this.map.C,
					d = [], e = 0, f = a.length; e < f; e++) {
				var h = c.Rb(a[e]);
				h.x += b[0];
				h.y += b[1];
				d.push(c.Ee(h))
			}
			return d
		}
	});
	g.A.lb = g.A.Dh.extend({
		XB: "content contentDom icon opacity angle autoRotation offset textAlign verticalAlign shadow title label isTop shape topWhenClick topWhenMouseOver noSelect"
			.split(" "),
		jga: {
			AMAP_ANIMATION_NONE: !1,
			AMAP_ANIMATION_DROP: g.Vi.Easing.Bounce,
			AMAP_ANIMATION_BOUNCE: g.Vi.Easing.Cubic
		},
		r: function(a, b) {
			arguments.callee.ka.apply(this, arguments);
			this.Ie(this.XB, a);
			this.W("move", a);
			this.Uga();
			this.Ws();
			this.set("AnimationOffset", new g.G(0, 0), !0);
			this.W("raiseOnDrag", a);
			this.W("animation", a)
		},
		RK: function(a, b, c) {
			if (this.get("animation") && "AMAP_ANIMATION_NONE" !== this.get("animation")) {
				var d = this;
				this.xm = new g.Vi;
				this.xm.transition = function(c, f, h) {
					if ("AMAP_ANIMATION_NONE" === d.get("animation")) return 0;
					if (a && 600 <= h) return d.xm.stop(), 0;
					c = 0 === Math.floor(h / 600) % 2 ? "Out" : "In";
					"out" === b ? c = "Out" : "in" === b && (c = "In");
					return d.jga[d.get("animation")][c](h % 600 / 600)
				};
				c = c || 40;
				this.xm.kp = function(a) {
					d.set("AnimationOffset", d.yL.add(new g.G(0, -1 * c * a)))
				};
				this.yL = new g.G(0, 0);
				this.xm.Em()
			}
		},
		AnimationOffsetChanged: function() {
			this.positionChanged()
		},
		oX: function() {
			this.xm && (this.xm.stop(), this.set("AnimationOffset", this.yL));
			this.set("AnimationOffset", new g.G(0, -40));
			if (this.Wn) this.Wn.set("position", this.get("position"));
			else {
				var a = new z.A.lb({
					zIndex: this.get("zIndex") - 1,
					icon: new z.A.Ch({
						image: g.w.tb + "/theme/v1.3/dragCross.png",
						size: new g.gd(14, 11),
						innerOverlay: !0
					}),
					offset: new g.G(-4, -5),
					position: this.get("position"),
					innerOverlay: !0
				});
				a.pa = !0;
				this.Wn = a
			}
			this.Wn.B = !0;
			this.Wn.setMap(this.map.C);
			this.Wn.B = !1
		},
		kU: function() {
			this.set("animation", "AMAP_ANIMATION_DROP",
				!0);
			this.RK(!0, "in");
			this.Wn.B = !0;
			this.Wn.setMap(null);
			this.Wn.B = !1
		},
		animationChanged: function() {
			this.xm && (this.xm.stop(), this.set("AnimationOffset", this.yL), this.xm = null);
			var a = this.get("animation");
			a && "AMAP_ANIMATION_NONE" !== a && ("AMAP_ANIMATION_DROP" === a ? this.RK(!0, "in", 100) : this.RK())
		},
		Gg: function() {
			this.Wn && this.Wn.set("position", this.get("position"))
		},
		raiseOnDragChanged: function() {
			this.get("raiseOnDrag") ? (this.h("dragstart", this.oX, this), this.h("dragging", this.Gg, this), this.h(
				"dragend", this.kU,
				this)) : (this.I("dragstart", this.oX, this), this.I("dragging", this.Gg, this), this.I("dragend", this.kU,
				this))
		},
		kr: function(a) {
			var b = this.get("position");
			a = this.map.Rb(b).add(a.Jd(Math.pow(2, 20 - this.map.get("zoom"))));
			b instanceof g.U ? this.set("position", this.map.Ee(a)) : this.set("position", a)
		},
		GB: function(a, b) {
			var c = this.get("position"),
				d = this.get("altitude"),
				c = this.map.er(c, d),
				d = this.map.Do(new g.G(c.x + a, c.y + b), null, d);
			this.set("position", d)
		},
		Uga: function() {
			var a = this.get("content"),
				b = this.get("shadow"),
				c = this.get("offset"),
				d = this.get("label"),
				a = a ? this.WY(a, c) : this.PM(this.get("icon"), c);
			this.set("contentDom", a, !0);
			b && (b = this.aZ(b, c), this.set("shadowDom", b, !0));
			d && d.content && this.set("labelDom", this.QM(d.content), !0)
		},
		QM: function(a) {
			var b = document.createElement("div");
			b.className = "amap-marker-label";
			b.innerHTML = a;
			return b
		},
		Ws: function() {
			var a = this.get("position");
			if (this.map && a && !this.L) {
				var b = this.map,
					a = this.map.Rb(a),
					a = this.L = new g.Ah({
						name: "marker-" + g.a.Bb(this),
						map: b,
						ba: new g.va.hg([a.x, a.y])
					});
				a.uA = this.Wb.CLASS_NAME;
				a.fq = this;
				this.W("coords", a, !0);
				a.Ie("offset textAlign verticalAlign isTop zIndex params noSelect".split(" "), this)
			}
		},
		getParams: function() {
			return {
				zIndex: this.get("zIndex"),
				jw: this.get("angle"),
				Pg: this.get("contentDom"),
				s1: this.get("labelDom"),
				k4: this.get("shadowDom"),
				opacity: this.get("opacity"),
				altitude: this.get("altitude"),
				title: this.get("title"),
				label: this.get("label"),
				hS: this.get("AnimationOffset"),
				verticalAlign: this.get("verticalAlign"),
				textAlign: this.get("textAlign"),
				offset: this.get("offset"),
				n1: this.get("isTop"),
				shape: this.get("shape"),
				visible: this.get("visible") && !this.Wb.get("outOfZooms")
			}
		},
		offsetChanged: function() {
			function a(a) {
				var c = b.get("offset"),
					f = b.get("AnimationOffset"),
					h = b.get("verticalAlign"),
					k = b.get("textAlign"),
					l = Math.round(a.x) + c.x + f.x;
				a = Math.round(a.y) + c.y + f.y;
				f = g.g.Ow(b.L.Pg);
				c = f[0];
				f = f[1];
				switch (k) {
					case "center":
						l -= c / 2;
						break;
					case "right":
						l -= c
				}
				switch (h) {
					case "middle":
						a -= f / 2;
						break;
					case "bottom":
						a -= f
				}
				b.L.ca.style.left = l + "px";
				b.L.ca.style.top = a +
					"px"
			}
			if (this.L && this.L.ca) {
				var b = this,
					c = this.map.C.view.type;
				"2D" == c ? (c = this.map.Rb(this.get("position")), c = c.Wa(this.L.za).Uc(Math.pow(2, 20 - this.map.get("zoom"))),
						this.L.ca && (this.L.ca.Tz && this.L.ca.parentNode !== this.L.ca.Tz ? this.map.set("display") : a(c))) : "3D" ==
					c && (c = this.get("position"), c = this.map.er(c, this.get("altitude")), this.L.ca && (this.L.ca.Tz && this.L
						.ca.parentNode !== this.L.ca.Tz ? this.map.set("display") : a(c)))
			} else this.map.set("display")
		},
		altitudeChanged: function() {
			this.offsetChanged()
		},
		positionChanged: function() {
			if (this.L) {
				var a =
					this.map.Rb(this.get("position"));
				this.set("coords", [a.x, a.y]);
				this.map && (this.L.a7 = !0, this.offsetChanged())
			}
		},
		textAlignChanged: function() {
			this.qT()
		},
		verticalAlignChanged: function() {
			this.qT()
		},
		qT: function() {
			this.L && (this.L.Af = !0, this.map && (this.map.zd.qm = !0, this.map.set("display")))
		},
		contentChanged: function() {
			if (this.L) {
				this.map.zd.qm = !0; - 1 === g.a.indexOf(this.map.zd.ug, this.L) && this.map.zd.ug.push(this.L);
				var a = this.get("contentDom");
				this.L.ca && this.L.ca === a.parentNode && this.L.ca.removeChild(a);
				var a =
					this.get("content"),
					b = this.get("offset"),
					a = this.WY(a, b);
				this.set("contentDom", a);
				this.L.ca && (g.l.Uh && g.a.iepngFix(a), this.L.ca.appendChild(a), this.L.Pg = a);
				this.map && this.map.set("display")
			}
		},
		iconChanged: function() {
			if (this.L && this.L.ca && !this.get("content")) {
				this.map.zd.qm = !0; - 1 === g.a.indexOf(this.map.zd.ug, this.L) && this.map.zd.ug.push(this.L);
				this.L.ca && this.get("contentDom") && this.L.ca.removeChild(this.get("contentDom"));
				var a = this.get("icon"),
					b = this.get("offset"),
					a = this.PM(a, b);
				this.set("contentDom",
					a);
				this.L.ca ? (g.l.Uh && g.a.iepngFix(a), this.L.ca.appendChild(a), this.L.Pg = a) : this.map && this.map.set(
					"display")
			}
		},
		shadowChanged: function() {
			if (this.L && this.L.ca) {
				var a = this.get("shadowDom");
				this.L.ca && a && a.parentNode === this.L.ca && this.L.ca.removeChild(a);
				if (a = this.get("shadow")) {
					var b = this.get("offset"),
						a = this.aZ(a, b);
					this.set("shadowDom", a);
					this.L.ca && this.L.ca.appendChild(a)
				}
			}
		},
		titleChanged: function() {
			this.L && this.L.Pg && "string" === typeof this.get("title") && this.L.Pg && this.get("title") && (this.L.Pg.title =
				this.get("title"))
		},
		labelChanged: function(a) {
			a = a || this.get("label");
			if (this.L && this.L.ca) {
				var b = this.L.ca,
					c = this.get("labelDom");
				c && c.parentNode === b && b.removeChild(c);
				if (a && a.content) {
					c = "";
					if (a.content) {
						var c = this.QM(a.content),
							d = 0,
							e = 0;
						a.offset && (d = a.offset.y + "px", e = a.offset.x + "px");
						c.style.top = d;
						c.style.left = e;
						b.appendChild(c)
					}
					this.set("labelDom", c)
				}
			} else a && a.content ? this.set("labelDom", this.QM(a.content), !0) : this.set("labelDom", null)
		},
		isTopChanged: function() {
			var a = this.map.zd.wI,
				b = this.get("isTop"),
				c = this.get("zIndex");
			a ? a === this ? this.L && this.L.ca && (this.L.ca.style.zIndex = b ? this.map.zd.Cp + 10 : c, this.map.zd.wI =
				b ? this : null) : (a.L && a.L.ca && (a.L.ca.style.zIndex = b ? a.get("zIndex") : this.map.zd.Cp + 10), this.L &&
				this.L.ca && (this.L.ca.style.zIndex = b ? this.map.zd.Cp + 10 : c), this.map.zd.wI = b ? this : a) : (this.map
				.zd.wI = this, this.L && this.L.ca && (this.L.ca.style.zIndex = b ? this.map.zd.Cp + 10 : c))
		},
		visibleChanged: function() {
			this.L && this.L.ca && (this.get("visible") && !this.Wb.get("outOfZooms") ? this.L.ca.style.display = "block" :
				this.L.ca.style.display = "none")
		},
		doa: function() {
			this.visibleChanged()
		},
		angleChanged: function() {
			if (!g.l.oe && this.L && this.L.ca) {
				var a = this.L,
					b = a.get("params"),
					c = b.textAlign,
					d = b.verticalAlign,
					e = b.offset,
					b = e.x,
					e = e.y;
				if ("AMap.Text" == a.uA) {
					var e = b = 0,
						f = g.g.Ow(a.Pg),
						a = f[0],
						f = f[1];
					switch (c) {
						case "center":
							b = a / 2;
							break;
						case "right":
							b = a
					}
					switch (d) {
						case "middle":
							e = f / 2;
							break;
						case "bottom":
							e = f
					}
				} else b = -b, e = -e;
				g.g.rotate(this.L.ca, this.get("angle") || 0, {
					x: b,
					y: e
				})
			}
		},
		zIndexChanged: function() {
			var a = this.get("zIndex");
			if (a > this.map.zd.Cp) {
				this.map.zd.Cp = a;
				var b = this.map.zd.wI;
				b && b.L && b.L.ca && (b.L.ca.style.zIndex = a + 10)
			}
			this.L && this.L.ca && (this.L.ca.style.zIndex = this.get("isTop") ? this.map.zd.Cp + 10 : this.get("zIndex"))
		},
		opacityChanged: function() {
			var a = this.get("contentDom"),
				b = this.get("shadowDom");
			a && g.g.wp(a, this.get("opacity"));
			b && g.g.wp(b, this.get("opacity"))
		},
		WY: function(a) {
			var b;
			b = document.createElement("div");
			b.className = "amap-marker-content";
			"string" !== typeof a ? b.appendChild(a) : (b.innerHTML = a, b.childNodes[0] &&
				!b.childNodes[0].style && (b.style["white-space"] = "pre"));
			g.g.wp(b, this.get("opacity"));
			return b
		},
		PM: function(a) {
			var b, c = 0,
				d = 0,
				e, f, h, k;
			a ? ("string" === typeof a ? (b = a, k = !0) : (b = a.get("image"), d = a.get("size"), e = a.get("imageSize"), c =
					d.width, d = d.height, e && (f = e.width, h = e.height)), c || (c = 0), d || (d = 0), a = "string" !== typeof a ?
				a.get("imageOffset") : {
					x: 0,
					y: 0
				}) : (b = g.w.Yh + "/mark_bs.png", a = {
				x: 0,
				y: 0
			}, c = 19, d = 33, f = 19, h = 33);
			e = document.createElement("div");
			e.className = "amap-icon";
			e.style.position = "absolute";
			k && !g.l.oe && (e.style.overflow =
				"inherit");
			c && (e.style.width = c + "px");
			d && (e.style.height = d + "px");
			c = document.createElement("img");
			c.src = b;
			f && h && (c.style.width = f + "px", c.style.height = h + "px");
			c.style.top = a.y + "px";
			c.style.left = a.x + "px";
			g.l.oe && k || e.appendChild(c);
			g.g.wp(g.l.oe && k ? c : e, this.get("opacity"));
			return g.l.oe && k ? c : e
		},
		aZ: function(a, b) {
			var c = this.PM(a, b);
			c.style.zIndex = -1;
			return c
		},
		moveChanged: function() {
			var a = this.get("move");
			if (!1 === a) return this.ara();
			void 0 !== a && ("pause" === a.action ? this.Boa() : "[object Array]" === Object.prototype.toString.call(a.cg) ?
				a.cg && ("resume" === a.action && this.oE ? this.moveTo(a.cg[a.cg.oo || 0], a.speed, a.rb) : (this.oE && this.q(
					"movestop"), a.cg.oo = 0, this.set("position", a.cg[0]), this.jna(a.cg, a.speed, a.rb, a.uha))) : this.moveTo(
					a.cg, a.speed, a.rb, !0))
		},
		moveTo: function(a, b, c, d) {
			if (!(0 >= b)) {
				var e = this.get("position");
				a.Wa(e);
				var f = Math.round(a.le(e) / 1E3 / b * 36E5);
				if (0 === f) return this.q("moveend");
				this.Zh && (this.Zh.stop(), this.Zh = null);
				this.Zh = new g.Vi(e, a);
				c = c || function(a) {
					return a
				};
				this.Zh.transition = function(a, b, d) {
					if (d >= f) return b;
					var e = (b.R - a.R) * c(d / f) + a.R;
					a = (b.Q - a.Q) * c(d / f) + a.Q;
					return new g.U(e, a)
				};
				this.Zh.kp = function(b) {
					this.set("position", b);
					d && this.Wb.q("moving", {
						passedPath: [this.Zh.start, this.get("position")]
					});
					this.q("moving");
					b.eb(a) && (this.Zh && (this.Zh.stop(), this.Zh = null), this.Wb.q("moveend"), this.q("moveend"))
				};
				this.get("autoRotation") && !g.l.oe && (b = "2D" == (this.map.C.view.type || "2D") ? this.v$(e, a) : this.w$(e,
					a), this.set("angle", b));
				this.Zh.Em(this)
			}
		},
		ara: function() {
			this.Zh && (this.Zh.stop(), this.Zh = null, this.q("movestop"))
		},
		Boa: function() {
			this.Zh && (this.Zh.stop(), this.Zh = null, this.q("movepause"))
		},
		jna: function(a, b, c, d) {
			function e() {
				var b = a.slice(0, a.oo || 0);
				b.push(this.get("position"));
				this.Wb.q("moving", {
					passedPath: b
				})
			}

			function f() {
				a.oo < a.length - 1 ? (a.oo += 1, this.moveTo(a[a.oo], b, c)) : (this.ja("movealong"), d ? (a.oo = 0, this.set(
					"position", a[0]), this.moveTo(a[a.oo], b, c)) : this.q("movestop"))
			}
			var h = Math.min(a.oo || 0, a.length - 1);
			this.oE || (this.oE = !0, this.h("moving", e, this), this.h("moveend", f, this), this.h("movestop", function l() {
				this.oE = !1;
				this.I("moveend", f, this);
				this.I("moving", e, this);
				this.I("movestop", l, this)
			}, this));
			this.moveTo(a[h], b, c)
		},
		w$: function(a, b) {
			var c = this.map,
				d = c.er(a),
				c = c.er(b),
				e = 0;
			c.le(d);
			var f = c.y - d.y,
				h = c.x - d.x;
			0 !== c.x - d.x ? (e = Math.atan((c.y - d.y) / (c.x - d.x)), 0 <= f && 0 > h ? e = Math.PI + e : 0 > f && 0 >= h ?
				e = Math.PI + e : 0 > f && 0 <= h && (e = 2 * Math.PI + e)) : e = c.y > d.y ? Math.PI / 2 : 3 * Math.PI / 2;
			return g.a.Wc(180 * e / Math.PI, 1)
		},
		v$: function(a, b) {
			var c = this.map,
				d = c.Rb(a),
				c = c.Rb(b),
				e = 0;
			c.le(d);
			var f = c.y - d.y,
				h = c.x - d.x;
			0 !== c.x - d.x ? (e = Math.atan((c.y - d.y) /
				(c.x - d.x)), 0 <= f && 0 > h ? e = Math.PI + e : 0 > f && 0 >= h ? e = Math.PI + e : 0 > f && 0 <= h && (e =
				2 * Math.PI + e)) : e = c.y > d.y ? Math.PI / 2 : 3 * Math.PI / 2;
			return g.a.Wc(180 * e / Math.PI, 1)
		}
	});
	g.A.Lm = g.A.Dh.extend({
		r: function(a, b) {
			arguments.callee.ka.apply(this, arguments);
			this.W("items", a, !0);
			this.W("content", a, !0);
			this.W("resolution", b);
			this.W("centerCoords", b);
			this.xo = a
		},
		wx: function(a) {
			this.qg();
			this.Lr();
			this.Gl();
			this.Ck("resolution");
			this.Ck("centerCoords");
			this.Ck("render");
			this.W("resolution", a);
			this.W("centerCoords", a);
			this.W("render", a);
			this.map.h("movestart", this.Yl, this);
			this.map.h("mapmove", this.Yl, this);
			this.map.h("zoomstart", this.Yl, this);
			this.map.h("click", this.Yl, this);
			this.map.h("closeOverlays", this.Yl, this);
			this.map.h("rotate", this.Yl, this)
		},
		Yl: function() {
			this.xo.map && (this.xo.B = !0, this.xo.close(), this.xo.B = !1)
		},
		mapChanged: function() {},
		positionChanged: function() {
			this.Gl()
		},
		renderChanged: function() {
			this.Gl()
		},
		qg: function() {
			this.J && (this.J.parentNode && this.J.parentNode.removeChild(this.J), this.J = null);
			var a = g.g.create("div", null, "amap-menu");
			g.F.h(a, "mousedown", function(a) {
				g.F.stopPropagation(a)
			}, this);
			this.J = a;
			this.map.Pa.A.appendChild(this.J)
		},
		Lr: function() {
			var a =
				this,
				b = this.J;
			b.innerHTML = "";
			var c = this.get("content");
			if ("object" === typeof c) b.appendChild(c);
			else if ("string" === typeof c) b.innerHTML = c;
			else if ((c = this.get("items")) && c.length) {
				var d = g.g.create("ul", b, "amap-menu-outer");
				c.sort(function(a, b) {
					return isNaN(a.xH) || isNaN(b.xH) ? 0 : a.xH - b.xH
				});
				for (b = 0; b < c.length; b += 1)(function(b) {
					var c = b.m5,
						h = b.rb,
						k = g.g.create("li", d);
					k.innerHTML = c;
					g.F.h(k, "click", function() {
						h.call(k);
						a.xo.B = !0;
						a.xo.close();
						a.xo.B = !1
					}, k)
				})(c[b])
			} else this.J.innerHTML = ""
		},
		Gl: function() {
			var a =
				this.map,
				b = this.J;
			a && b && (this.map.get("zoom"), b = this.get("position"), b = a.er(b), a = b.y, b = b.x, this.J.style.right =
				"", this.J.style.bottom = "", this.J.style.left = b + "px", this.J.style.top = a + "px")
		},
		wg: function() {
			this.J && (this.map.I("click", this.wua, this), this.map.Pa.A.removeChild(this.J), this.xo.vi = !1, this.J =
				this.xo.he.map = null, this.map.I("movestart", this.Yl, this), this.map.I("zoomstart", this.Yl, this), this.map
				.I("click", this.Yl, this), this.map.I("closeOverlays", this.Yl, this), this.map.I("rotate", this.Yl, this))
		},
		visibleChanged: function() {
			this.J && (this.get("visible") ? this.J.style.display = "block" : this.J.style.display = "none")
		},
		itemsChanged: function() {
			this.J && this.Lr()
		}
	});
	g.A.Ge = g.A.Dh.extend({
		r: function(a, b) {
			arguments.callee.ka.apply(this, arguments);
			this.Ie(
				"content contentDom position contentU altitude isCustom autoMove showShadow closeWhenClickMap size offset".split(
					" "), a);
			this.W("retainWhenClose", a, !0);
			a.W("toBeClose", this);
			this.Ve = a
		},
		wx: function(a) {
			this.Zha || (this.qg(), this.Lr());
			this.Ck("resolution");
			this.Ck("centerCoords");
			this.Ck("render");
			this.W("resolution", a);
			this.W("centerCoords", a);
			this.W("render", a);
			this.map = a;
			a.Pa.A.appendChild(this.mc);
			this.TR();
			this.Gl();
			this.pT();
			this.Zha = !0;
			this.Kha();
			this.Wb.q("onAdd", {
				type: "onAdd",
				target: this.Wb
			})
		},
		qg: function() {
			var a = g.g.create("div");
			a.className = "amap-info";
			var b = g.g.create("div", a, "amap-info-shadowContainer"),
				c = g.g.create("div", a),
				d = g.g.create("div", c, "amap-info-contentContainer");
			a.style.position = "absolute";
			c.style.position = "absolute";
			c.style.bottom = "0px";
			c.style.left = "0px";
			b.style.position = "absolute";
			this.mc = a;
			this.Ef = c;
			this.gR = b;
			this.Ph = d;
			this.set("contentDom", this.Ph, !0)
		},
		Lr: function() {
			var a = this.get("contentU");
			if (a) {
				var b = this.get("isCustom"),
					c = this.Ph,
					d = this.gR;
				c.innerHTML = "";
				var e = null;
				if (b) {
					if ("string" === typeof a) c.innerHTML = a;
					else if (a instanceof Array)
						for (e = 0; e < a.length; e += 1) c.appendChild(a[e]);
					else c.appendChild(a);
					e = c;
					d.parentNode && d.parentNode.removeChild(d)
				} else {
					e = d = g.g.create("div", c, "amap-info-content amap-info-outer");
					"string" === typeof a ? d.innerHTML = a : d.appendChild(a);
					this.aia = d;
					a = g.g.create("a", this.Ph, "amap-info-close");
					a.innerHTML = "\u00d7";
					this.bN = a;
					a.href = "javascript: void(0)";
					g.l.of && (g.F.h(a,
						"touchstart",
						function(a) {
							g.F.stop(a)
						}, this), g.F.h(a, "touchend", function(a) {
						g.F.stop(a);
						this.Ve.B = !0;
						this.Ve.close();
						this.Ve.B = !1
					}, this), g.F.h(a, "click", function(a) {
						g.F.stop(a);
						this.Ve.B = !0;
						this.Ve.close();
						this.Ve.B = !1
					}, this));
					g.l.Y || (g.F.h(a, "mousedown", function(a) {
						g.F.stop(a)
					}, this), g.F.h(a, "click", function(a) {
						g.F.stop(a);
						this.Ve.B = !0;
						this.Ve.close();
						this.Ve.B = !1
					}, this));
					if (a = this.get("size", !0)) 0 !== a.width && (d.style.width = a.width + "px"), 0 !== a.height && (d.style.height =
						a.height + "px");
					a = g.g.create("div",
						c, "amap-info-sharp");
					a.style.height = "23px";
					if (g.l.Uh || g.l.Xq) a.style.marginLeft = c.childNodes[0].offsetWidth / 2 - 5;
					this.gR.style.display = "block"
				}
				g.F.Zqa(e)
			}
		},
		TR: function() {
			var a = this.get("isCustom"),
				b = this.get("showShadow");
			if (!a && b) {
				var a = this.gR,
					b = g.g.DG(this.Ph),
					c = b.height - 23,
					d = b.width;
				if (g.l.Uh || g.l.Xq) c = this.Ph.childNodes[0].offsetHeight, d = this.Ph.childNodes[0].offsetWidth + 26;
				b = "background-image:url(" + g.w.tb + (g.l.Uh ? "/theme/v1.3/iws.gif);" : "/theme/v1.3/iws.png);");
				a.innerHTML = "";
				var e = [],
					f;
				f = e[1] = {};
				f.height = 0.5 * c + 4;
				f.width = d;
				f.offsetX = 400;
				f.offsetY = 16;
				f.top = -f.height - 10 - 15;
				f.left = 23;
				f = e[2] = {};
				f.height = e[1].height;
				f.width = e[1].height;
				f.offsetX = 1075 - f.width;
				f.offsetY = e[1].offsetY;
				f.top = e[1].top;
				f.left = 23 + e[1].width;
				f = e[3] = {};
				f.height = 10;
				f.width = 22;
				f.offsetX = 30;
				f.offsetY = 445;
				f.top = -25;
				f.left = 23 + (g.l.Xq || g.l.Uh ? 5 : 0);
				f = e[4] = {};
				f.height = 10;
				f.width = d / 2 - 15 - e[3].left - e[3].width;
				f.offsetX = 132;
				f.offsetY = 445;
				f.top = -25;
				f.left = e[3].left + e[3].width;
				f = e[5] = {};
				f.height = 10;
				f.width = 70;
				f.offsetX = 80;
				f.offsetY =
					445;
				f.top = -25;
				f.left = e[4].left + e[4].width;
				f = e[6] = {};
				f.height = 10;
				f.width = d - e[5].left - e[5].width;
				f.offsetX = 132;
				f.offsetY = 445;
				f.top = -25;
				f.left = e[5].left + e[5].width;
				f = e[7] = {};
				f.height = 10;
				f.width = 30;
				f.offsetX = 621;
				f.offsetY = 445;
				f.top = -25;
				f.left = d;
				f = e[8] = {};
				f.height = 15;
				f.width = 70;
				f.offsetX = 47;
				f.offsetY = 470;
				f.top = -15;
				f.left = d / 2 - 15;
				for (c = 1; 8 >= c; c += 1) d = g.g.create("div", a), f = [], f.push("position:absolute;"), f.push(b), f.push(
						"top:" + e[c].top + "px;"), f.push("left:" + e[c].left + "px;"), f.push("width:" + e[c].width + "px;"),
					f.push("height:" + e[c].height + "px;"), f.push("background-position:" + -e[c].offsetX + "px " + -e[c].offsetY +
						"px;"), d.style.cssText = f.join("")
			}
		},
		Zza: function() {},
		Gl: function() {
			var a = this.map,
				b = this.mc,
				c = this.get("position");
			if (a && b && c) {
				b = a.er(c, this.get("altitude"));
				a.get("size");
				c = g.g.DG(this.Ph);
				if (g.l.Uh || g.l.Xq) c.width = this.Ph.childNodes[0].offsetWidth + 14;
				a = this.get("offset");
				c = this.get("isCustom") ? c.width / 2 : (c.width - 30) / 2;
				this.mc.style.left = Math.round(b.x - c + (a.x || 0)) + "px";
				this.mc.style.top = Math.round(b.y +
					(a.y || 0)) + "px";
				b = this.aia;
				if (this.bN && b.childNodes[0]) {
					for (c = a = 0; c < b.childNodes.length; c += 1) a += b.childNodes[0].clientHeight || 0;
					a > (this.get("size").height || b.clientHeight) ? this.bN.style.right = "20px" : this.bN.style.right = "5px"
				}
			}
		},
		m9: function() {
			var a = new g.G(2 - this.Ph.offsetWidth / 2, 2 - this.Ph.offsetHeight),
				b = this.get("offset") || new g.G(0, 0);
			this.get("isCustom") || (a = a.add(new g.G(0, -23)));
			return a.add(b)
		},
		altitudeChanged: function() {
			this.Gl()
		},
		pT: function() {
			if (this.get("position") && this.get("autoMove") &&
				this.Ph) {
				for (var a = this.map, b = new g.gd(this.Ph.offsetWidth, this.Ph.offsetHeight), c = a.er(this.get("position"),
						this.get("altitude")).add(this.m9()), d = c.add(b.DC()), e = a.get("size"), f = a.$ja(), h = 0, k = 0, l = 0; l <
					f.length; l += 1) {
					var m = f[l],
						n = 0,
						p = 0;
					0 === m[1] && 0 === m[2] ? (n = m[3] - (c.x + h), p = m[0] - (c.y + k), 0 < n && 0 < p && (Math.abs(n) < Math.abs(
						p) ? h += n : k += p)) : 0 === m[2] && 0 === m[3] ? (n = e.Ii() - m[1] - (d.x + h), p = m[0] - (c.y + k), 0 >
						n && 0 < p && (Math.abs(n) < Math.abs(p) ? h += n : k += p)) : 0 === m[0] && 0 === m[3] ? (n = e.Ii() - m[1] -
						(d.x + h), p = e.Gi() - m[2] - (d.y + k),
						0 > n && 0 > p && (Math.abs(n) < Math.abs(p) ? h += n : k += p)) : 0 === m[0] && 0 === m[1] && (n = m[3] - (
						c.x + h), p = e.Gi() - m[2] - (d.y + k), 0 < n && 0 > p && (Math.abs(n) < Math.abs(p) ? h += n : k += p))
				}
				c = c.add(new g.G(h, k));
				d = d.add(new g.G(h, k));
				l = f = 0;
				0 > c.x || b.Ii() > e.Ii() ? f = 20 - c.x : e.Ii() < d.x && (f = e.Ii() - d.x - 25);
				0 > c.y || b.Gi() > e.Gi() ? l = 5 - c.y : e.Gi() < d.y && (l = e.Gi() - d.y - 15);
				f += h;
				l += k;
				if (f || l) a.C.B = !0, a.C.panBy(f, l), a.C.B = !1
			}
		},
		Kha: function() {
			this.get("closeWhenClickMap") && (this.map.h("clickstart", this.tW, this, !1), this.map.h("clickend", this.sW,
				this, !1))
		},
		tW: function() {
			this.Ve.vi && (this.Ve.B = !0, this.Ve.getIsOpen() && (this.Ve.vI = !0), this.Ve.B = !1)
		},
		sW: function() {
			this.Ve.vi && (this.Ve.vI && (this.Ve.B = !0, this.Ve.close(), this.Ve.B = !1), this.Ve.vI = !1)
		},
		wg: function() {
			this.mc && this.map && (this.Ve.vI = !1, this.get("closeWhenClickMap") && (this.map.I("clickstart", this.tW,
					this), this.map.I("clickend", this.sW, this)), this.get("retainWhenClose") ? this.map.Pk.appendChild(this.mc) :
				(this.mc.parentNode === this.map.Pa.A && this.map.Pa.A.removeChild(this.mc), this.Ve.A = null), this.map =
				null, this.Ve.vi = !1, this.Wb.q("close", {
					type: "close",
					target: this.Wb
				}))
		},
		Eua: function() {
			if (!this.get("isCustom")) return this.Ph.offsetWidth;
			for (var a = this.Gh, b = a.firstChild, c = a.lastChild; b && c && b.style && c.style && b === c;) a = b, b = a.firstChild,
				c = a.lastChild;
			a = g.g.wd(a, "width");
			return a = parseInt(a.replace("px", ""), 10)
		},
		renderChanged: function() {
			this.Gl()
		},
		positionChanged: function() {
			this.map && this.mc && (this.Gl(), this.pT())
		},
		offsetChanged: function() {
			this.positionChanged()
		},
		contentChanged: function() {
			this.Lr();
			this.TR();
			this.Gl()
		},
		sizeChanged: function() {
			this.Lr();
			this.TR();
			this.Gl()
		}
	});
	g.va = {};
	g.va.ve = g.Z.extend({
		ga: [g.na, g.He],
		r: function() {},
		st: function() {
			var a = this.bd();
			a.Og || (a.Og = g.H.Rh(a));
			return a.Og
		},
		jb: function() {
			return new this.r(this.Ia)
		},
		dO: function() {
			return this.Ia
		},
		setCoords: function(a) {
			this.pqa(a)
		},
		pqa: function(a) {
			this.Vt = this.bd();
			this.Wf = null;
			if (g.va.tc && this instanceof g.va.tc) {
				var b = a.length;
				this.Kf = Array(b);
				for (var c, d, e = 0; e < b; e += 1)
					if (c = a[e], d = new g.va.FS(c), this.Kf[e] = d, 0 === e) {
						if (0 === c.length) break;
						d.$o(c) || c.reverse()
					} else 0 !== c.length && d.$o(c) && c.reverse()
			} else this.Ia = a
		}
	});
	g.va.we = g.extend({}, {
		dv: "point",
		cJ: "linestring",
		ES: "linearring",
		iD: "polygon",
		iJ: "multipoint",
		hJ: "multilinestring",
		fD: "multipolygon",
		pta: "geometrycollection"
	});
	g.Ah = g.Z.extend({
		ga: [g.na, g.He],
		r: function(a) {
			a = a || {};
			a.Fz && (this.Fz = a.Fz);
			a.TK && (this.TK = a.TK);
			a.DV && (this.DV = a.DV);
			this.map = a.map;
			this.fl = a.vK || g.a.Bb(this);
			this.name = a.name || "";
			this.Af = !1;
			this.set("visible", !0, !0);
			this.$Q(a.ba);
			this.zk = a.qI;
			this.style = a.style
		},
		Iia: function() {
			this.style = this.zk = this.fq = this.B1 = this.ba = this.name = this.map = null;
			this.Hm();
			this.gj()
		},
		Nka: function() {
			return this.zk
		},
		Dqa: function(a) {
			this.zk = a;
			this.zIndex = this.zk[0].Oj || this.zIndex
		},
		hc: function() {
			return this.ba
		},
		$Q: function(a) {
			a &&
				(this.ba = a, this.W("coords", a, !0), this.Fz || this.TK) && (a.W("radius", this), a.W("center", this), a.W(
					"resolution", this), a.W("strokeWeight", this))
		},
		setStyle: function(a) {
			this.Dqa(a);
			this.Lq()
		},
		coordsChanged: function() {
			this.Lq()
		},
		radiusChanged: function() {
			this.ba.Vt = this.ba.bd();
			this.ba.Wf = null;
			this.Lq()
		},
		Lq: function(a) {
			this.set("feature", {
				target: this,
				Bia: a,
				Vt: this.ba.Vt || this.ba.bd(),
				ona: this.ba.bd()
			});
			this.ba.Vt = this.ba.bd()
		},
		visibleChanged: function() {
			this.Lq()
		},
		Ywa: function(a) {
			for (var b = 0; b < this.zk.length; b +=
				1) {
				var c = this.zk[b];
				if (a.eb(c.uw(this))) return c
			}
		},
		gka: function() {
			var a = this.hc(),
				b = [];
			a.Sh() === g.va.we.iD || a.Sh() === g.va.we.fD ? b.push(new g.style.fe.tc({
				fillColor: "#78cdd1",
				Vd: 0.2,
				strokeColor: "#122e29",
				hb: 0.5,
				Zb: 1
			})) : a.Sh() === g.va.we.cJ || a.Sh() === g.va.we.ES || a.Sh() === g.va.we.hJ ? b.push(new g.style.fe.$n({
				color: "#888888",
				width: 1,
				zIndex: 10
			})) : a.Sh() !== g.va.we.dv && a.Sh() !== g.va.we.iJ || b.push(new g.style.fe.Ch({
				url: g.w.tb + "/theme/v1.3/markers/0.png",
				width: 36,
				height: 36,
				rotation: 0,
				tAa: -12,
				vAa: -36,
				zIndex: 100
			}));
			return b
		}
	});
	g.Ah.kta = "geometry";
	g.va.hg = g.va.ve.extend({
		r: function(a, b) {
			this.Ia = a;
			this.Ki = b;
			this.Wf = null
		},
		bd: function() {
			if (!this.Wf) {
				var a = this.Ia[0],
					b = this.Ia[1];
				if (this.Ki) this.Wf = [a, b, a, b];
				else {
					var c = this.get("radius"),
						d = this.get("resolution") * this.get("strokeWeight") || 0,
						c = c ? c / Math.cos(Math.PI * this.get("center").Q / 180) : 0;
					this.Wf = [a - c - d, b - c - d, a + c + d, b + c + d]
				}
			}
			return this.Wf
		},
		Sh: function() {
			return g.va.we.dv
		}
	});
	g.N = {
		canvas: {},
		Ud: {},
		Dg: {},
		se: {}
	};
	g.N.Hc = g.Z.extend({
		ga: [g.na, g.He],
		r: function(a, b) {
			this.j = a;
			this.Ki = a.X.Ki;
			this.O = b;
			this.e = b.e;
			this.W("display", b)
		},
		Gq: function() {
			this.yx && this.yx();
			this.Hm();
			this.e = this.O = this.j = null
		},
		vt: function(a, b, c, d) {
			var e = this.zoom;
			c = [];
			var f = this.j;
			if (Math.floor(e) !== e) b(c, f);
			else {
				a = [a.x, a.y];
				if (f.qm) {
					for (var e = f.ug, h = !0, k = [], l = 0; l < e.length; l += 1) {
						var m = e[l].Pg;
						if (m)
							if (m.parentNode && m.parentNode.parentNode && this.O && m.parentNode.parentNode !== this.O.Pk && "none" !==
								m.parentNode.style.display) {
								var n = g.g.Ow(m),
									m =
									n[0],
									n = n[1];
								if (m && n) {
									var p = Math.max(Math.abs(e[l].get("offset").x), Math.abs(e[l].get("offset").y)) + Math.max(m, n);
									f.af = Math.max(f.af, p);
									f.If = Math.max(f.If, p);
									e[l].width = m;
									e[l].height = n
								} else h = !1, k.push(e[l])
							} else h = !1, k.push(e[l])
					}
					h ? (f.qm = !1, f.ug = []) : f.ug = k
				}
				e = Math.max(f.af, f.rx || 0) * this.S;
				h = Math.max(f.If, f.rx || 0) * this.S;
				k = 0;
				f.qx && (k = f.qx / Math.cos(Math.PI * this.e.get("center").Q / 180));
				h = Math.max(h, k || 0);
				e = Math.max(e, k || 0);
				if (e = f.pm([a[0] - e, a[1] - h, a[0] + e, a[1] + h])) {
					for (var q in e)
						if (e.hasOwnProperty(q) &&
							(h = e[q], h.get("visible") && !h.get("noSelect")))
							if (k = h.hc(), k instanceof g.va.hg)
								if (this.Ki) {
									l = this.j.Bl;
									l instanceof Array && (l = "number" === typeof h.Za.style && l[h.Za.style] ? l[h.Za.style] : l[0]);
									var m = l.size.width * this.S,
										n = l.size.height * this.S,
										p = l.anchor.x * this.S,
										r = l.anchor.y * this.S,
										k = k.Ia,
										s = l.rotation_,
										u = [a[0], a[1]];
									if (s) {
										var v = (a[0] - k[0]) / this.S,
											x = (a[1] - k[1]) / this.S,
											t = s,
											s = Math.cos(-t),
											w = Math.sin(-t),
											t = v * s - x * w,
											v = v * w + x * s;
										u[0] = k[0] + t * this.S;
										u[1] = k[1] + v * this.S
									}
									m = g.H.LM([
										[u[0] - m + p, u[1] - n + r],
										[u[0] + p, u[1] +
											r
										]
									]);
									g.H.ud(m, k) && c.push(h)
								} else if ("undefined" !== typeof k.get("radius")) l = k.Ia, l = new g.G(l[0], l[1]), m = new g.G(a[0], a[1]),
						k = k.get("radius"), "px" === h.get("unit") ? m.le(l) / Math.pow(2, 20 - this.zoom) < k && c.push(h) : m.le(l) *
						Math.cos(h.get("center").Q * Math.PI / 180) <= k / this.hp * Math.pow(2, 20 - this.zoom) && c.push(h);
					else if ("AMap.Text" == h.uA) l = h.get("params"), l.visible && h.ca && g.g.xB(d, h.ca, "amap-markers") && c.push(
						h);
					else {
						if (l = h.get("params"), l.visible && h.ca)
							if (l.shape)
								for (k = k.Ia, s = l.jw % 360, u = [a[0], a[1]], s && (v = (a[0] -
											k[0]) / this.S, x = (a[1] - k[1]) / this.S, t = Math.PI * s / 180, s = Math.cos(-t), w = Math.sin(-t), t =
										v * s - x * w, v = v * w + x * s, u[0] = k[0] + t * this.S, u[1] = k[1] + v * this.S), m = h.width * this
									.S, n = h.height * this.S, p = l.offset.x * this.S, r = l.offset.y * this.S, m = g.H.LM([
										[u[0] - m - p, u[1] - n - r],
										[u[0] - p, u[1] - r]
									]), k[0] instanceof Array || (k = [k]), n = k.length - 1; 0 <= n; n -= 1) {
									if (g.H.ud(m, k[n])) {
										l.shape ? this.wB(h, u, k) && c.push(h) : c.push(h);
										break
									}
								} else g.g.xB(d, h.ca, "amap-markers") && c.push(h)
					} else k.ud ? k.ud(a) && c.push(h) : k.Ew && 1.8 * k.Ew(a) <= h.get("strokeWeight") *
						this.S && c.push(h);
					this.Ki ? c.sort(function(a, b) {
						return a.fl > b.fl ? -1 : 1
					}) : c.sort(function(a, b) {
						return a.get("isTop") ? -1 : b.get("isTop") ? 1 : a.get("zIndex") > b.get("zIndex") || a.get("zIndex") ===
							b.get("zIndex") && a.fl > b.fl ? -1 : 1
					});
					b(c, f)
				} else b([], f)
			}
		},
		wB: function(a, b, c) {
			var d = (b[0] - c[0][0]) / this.S;
			b = (b[1] - c[0][1]) / this.S;
			a = a.get("params");
			c = a.offset;
			var d = [d - c.x, b - c.y],
				e;
			a = a.shape;
			if ("circle" === a.D.type) {
				if (b = a.D.coords[0], c = a.D.coords[1], Math.sqrt((d[0] - b) * (d[0] - b) + (d[1] - c) * (d[1] - c)) <= a.D.coords[
						2]) return !0
			} else {
				if ("poly" ===
					a.D.type) return e = a.D.coords, e = this.AF(e), g.ed.ud(d, e);
				if ("rect" === a.D.type) return e = a.D.coords, a = e[0], b = e[1], c = e[2], e = e[3], e = [
					[a, b],
					[c, b],
					[c, e],
					[a, e]
				], g.ed.ud(d, e)
			}
			return !1
		},
		AF: function(a) {
			for (var b = [], c = 0; c / 2 < a.length / 2; c += 2) b.push([a[c], a[c + 1]]);
			return b
		},
		M_: function(a, b, c, d, e, f, h) {
			var k = ["position:absolute;"];
			k.push("top:" + Math.round(c) + "px;");
			k.push("left:" + Math.round(b) + "px;");
			k.push("width:" + Math.round(d) + "px;");
			k.push("height:" + Math.round(e) + "px;");
			1 > f && ("opacity" in a.style ? (k.push("opacity"),
					k.push(":"), k.push(f), k.push(";")) : 8 <= document.documentMode ? (k.push(
					"-ms-filter:'progid:DXImageTransform.Microsoft.Alpha(opacity="), k.push(Math.ceil(100 * f)), k.push(")';")) :
				(k.push("filter:alpha(opacity="), k.push(Math.ceil(100 * f)), k.push(");")));
			k.push("z-index:" + h + ";");
			k.join("");
			g.g.Z3(a, k.join(""))
		}
	});
	g.N.Db = g.Z.extend({
		ga: [g.na, g.He],
		r: function(a) {
			this.e = a;
			this.Pk = a.Pk;
			this.J = a.Pa.o;
			this.W("display", a);
			this.W("rotateEnable", a);
			this.W("style", a);
			this.W("hightlight", a)
		},
		QP: function(a) {
			this.je = a || g.a.ck("ff" + this.e.je.slice(1))
		},
		vt: function(a, b, c, d, e) {
			function f(a, d) {
				a.length && (k[g.a.indexOf(b, d)] = a);
				l -= 1;
				0 >= l && (c(k), l = 0)
			}
			for (var h = b.length, k = [], l = 0, m, n = [], p = 0; p < h; p += 1) m = b[p], m instanceof g.o.Qc && m.get(
				"visible") && (n.push(this.xt(m)), l += 1);
			for (h = 0; h < n.length; h += 1) n[h].vt(a, f, d, e)
		}
	});
	g.GZ = {
		rG: function(a, b, c) {
			for (var d = null, e = null, f = 0, h = 0, k = 0, l = b.length; k < l; k++) {
				var m = b[k];
				if (m < a) d = c[m], f = m;
				else {
					e = c[m];
					h = m;
					break
				}
			}
			null === d ? (d = e, f = h) : null === e && (e = d, h = f);
			return {
				Hx: f,
				rH: h,
				sr: d,
				NB: e
			}
		},
		Oka: function(a) {
			var b = this,
				c = g.a,
				d = [],
				e = {};
			c.Mb(a.nodes, function(a) {
				!1 !== a.value && null !== a.value && (e[a.zoom] = g.w.nc + "://" + a.value, d.push(a.zoom))
			});
			return function(a) {
				a = c.Wc(a, 1);
				void 0 === e[a] && (e[a] = b.rG(a, d, e).sr);
				return e[a]
			}
		},
		yka: function(a) {
			var b = this,
				c = g.a,
				d = [],
				e = {},
				f = a.transitional;
			c.Mb(a.nodes,
				function(a) {
					null !== a.value && !1 !== a.value && (e[a.zoom] = a.value, d.push(a.zoom))
				});
			return function(a) {
				a = c.Wc(a, 1);
				if (void 0 === e[a]) {
					var k = b.rG(a, d, e);
					e[a] = f && "none" !== f && k.rH !== k.Hx && k.sr !== k.NB ? c.f0(k.sr, k.NB, (a - k.Hx) / (k.rH - k.Hx), f) :
						k.sr
				}
				return e[a]
			}
		},
		Rja: function(a) {
			var b = this,
				c = g.a,
				d = [],
				e = {};
			c.Mb(a.nodes, function(a) {
				null !== a.value && (e[a.zoom] = a.value, d.push(a.zoom))
			});
			return function(a) {
				a = c.Wc(a, 1);
				void 0 === e[a] && (e[a] = b.rG(a, d, e).sr);
				return e[a]
			}
		},
		Yja: function(a, b, c) {
			var d = this,
				e = g.a,
				f = [],
				h = {},
				k =
				a.transitional;
			e.Mb(a.nodes, function(a) {
				null !== a.value && !1 !== a.value && (h[a.zoom] = e.nga(a.value, c ? "rgba" : "webgl"), f.push(a.zoom))
			});
			return function(a) {
				var b = null;
				a = e.Wc(a, 1);
				if (void 0 === h[a]) {
					var b = d.rG(a, f, h),
						n = b.sr;
					if (k && "none" !== k && b.Hx !== b.rH && b.sr.join("") !== b.NB.join(""))
						for (var n = n.slice(0), p = (a - b.Hx) / (b.rH - b.Hx), q = 0, r = b.NB.length; q < r; q++) n[q] = e.f0(b.sr[
							q], b.NB[q], p, k);
					h[a] = n
				}
				b = h[a];
				return c && b ? "rgba(" + b.join(",") + ")" : b || ""
			}
		},
		BH: function(a, b, c, d) {
			var e = 4 < arguments.length && void 0 !== arguments[4] ?
				arguments[4] : {},
				f;
			for (f in c)
				if (c.hasOwnProperty(f)) {
					var h = c[f];
					void 0 !== b[h] ? (b[h].nodes && 1 < b[h].nodes.length && b[h].nodes.sort(function(a, b) {
						return a.zoom - b.zoom
					}), a[f] = e.Rla ? {
						Dg: d.call(this, b[h], c[f]),
						canvas: d.call(this, b[h], c[f], !0)
					} : d.call(this, b[h], c[f])) : e.Ola && (a[f] = !0)
				}
		},
		nq: function(a, b) {
			for (var c = [], d = 0, e = a.length; d < e; d += 2) {
				var f = 0,
					f = "str" === b ? g.a.Wc(parseInt(a.substr(d, 2), 16) / (0 === d ? 255 : 1), 3) : g.a.Wc(parseInt(a.substr(d, 2),
						16) / 255, 3);
				c.push(f)
			}
			return c.length ? (c.push(c.shift()), "str" === b ?
				"rgba(" + c.join(",") + ")" : c) : ""
		},
		O2: function(a, b, c) {
			if (b[c]) console.log("customType repeat!!", c);
			else {
				var d = {},
					e = {
						visible: "visible",
						iR: "showLabel",
						Fj: "showIcon"
					},
					f = [
						["color", {
							color: "color"
						}, {
							opacity: "opacity"
						}],
						["fillColor", {
							fillColor: "fillColor"
						}, {
							Vd: "fillOpacity"
						}],
						["strokeColor", {
							strokeColor: "strokeColor"
						}, {
							hb: "strokeOpacity"
						}],
						["textFillColor", {
							lra: "textFillColor"
						}, {
							mra: "textFillOpacity"
						}],
						["textStrokeColor", {
							nra: "textStrokeColor"
						}, {
							ora: "textStrokeOpacity"
						}],
						["backgroundColor", {
								backgroundColor: "backgroundColor"
							},
							{
								uga: "backgroundOpacity"
							}
						]
					];
				if (a.styles) {
					a = a.styles;
					this.BH(d, a, e, this.Rja, {
						Ola: !0
					});
					for (var e = 0, h = f.length; e < h; e++) {
						var k = f[e];
						a[k[0]] ? this.BH(d, a, k[1], this.Yja, {
							Rla: !0
						}) : this.BH(d, a, k[2], this.yka)
					}
					a.texture && (this.BH(d, a, {
						$a: "texture"
					}, this.Oka), d.Ld = [], g.a.Mb(a.texture.nodes, function(a) {
						a.value && d.Ld.push(g.w.nc + "://" + a.value)
					}))
				} else {
					for (h in e) e.hasOwnProperty(h) && (k = e[h], d[h] = void 0 === a[k] ? !0 : a[k]);
					e = 0;
					for (h = f.length; e < h; e++) {
						var l = f[e],
							k = g.a.keys(l[1])[0],
							m = l[1][k],
							n = g.a.keys(l[2])[0],
							l = l[2][n];
						void 0 !== a[m] ? d[k] = {
							canvas: this.nq(a[m], "str"),
							Dg: this.nq(a[m])
						} : d[n] = a[l]
					}
					a.texture && (d.$a = g.w.nc + "://" + a.texture)
				}
				b[c] = d
			}
		},
		gQ: function(a, b, c, d) {
			if (a)
				for (var e in a)
					if (a.hasOwnProperty(e) && g.a.qj(a[e], "object")) {
						var f = a[e],
							h = e;
						c && (h = c + ":" + e);
						if (f.detailedType) this.O2(f, b, h), this.gQ(f.detailedType, b, h, f);
						else if (f.subType) this.gQ(f.subType, b, h);
						else {
							if (void 0 !== f.code) {
								for (var k in d) d.hasOwnProperty(k) && !g.a.ga(["isDetailed", "detailedType", "styles"], k) && void 0 ===
									f[k] && void 0 !== d[k] && (f[k] = d[k]);
								h = c + ":" + f.code
							}
							this.O2(f, b, h)
						}
					}
		},
		styleChanged: function(a) {
			if (this.e.C.Wh) {
				a = a || this.get("style");
				this.kl.$y || (this.kl = g.a.bind(this.kl, this), this.Qo = g.a.bind(this.Qo, this), this.kl.$y = !0);
				var b = g.a,
					c = {};
				this.gQ(a, c);
				this.et = c;
				a = this.et["regions:land"];
				var c = this.et.water,
					d = this.et.sky,
					e = this.et.buildings,
					f, h, k, l, m;
				if (a) {
					var n = "rgba(0, 0, 0, 0)";
					if (a.visible) {
						var p = this.Qo(b.K3(this.e.je.substr(1)), a.opacity, a.color, !0);
						p && (n = this.xy(p, a.visible, "rgba(0, 0, 0, 0)"), p = this.kl(b.hu(this.e.je.substr(1)),
							a.opacity, a.color, !0), f = this.xy(p, a.visible))
					}
					this.e.dt = n
				} else this.e.dt = "";
				c && c.visible && (h = this.kl(b.hu(this.e.hF.substr(1)), c.opacity, c.color, !0), h = this.xy(h, c.visible));
				d && d.visible && (k = this.kl(b.hu(this.e.iA.substr(1)), void 0, d.color, !0), k = this.xy(k, d.visible));
				e && (e.visible ? (l = this.kl(b.ck(this.e.zD[0]), void 0, e.fillColor, !0), l = this.xy(l, e.visible), m = this
					.kl(b.ck(this.e.zD[1]), void 0, e.strokeColor, !0), m = this.xy(m, e.visible)) : (l = [1, 1, 1, 0], m = [1, 1,
					1, 0
				]));
				this.QP && this.QP(f, h, k, [l, m]);
				this.x5 ? this.x5(this.et) :
					this.set("display")
			}
		},
		xy: function(a, b) {
			var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : [0, 0, 0, 0],
				d = g.a.Vh;
			if (d(a) && d(b)) {
				var e = a;
				a = function(a) {
					return b(a) ? e(a) : c
				}
			}
			return a
		},
		Qo: function(a, b, c) {
			var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : !1;
			if (a) {
				if (void 0 !== b) {
					var d = a.split(","),
						e = b;
					"function" === typeof b && (e = b(this.e.hf.P.zoom));
					d[3] = g.a.Wc(e, 3) + ")";
					return d.join(",")
				}
				if (c) return "function" === typeof c.canvas ? d ? c.canvas : c.canvas(this.e.hf.P.zoom) : c.canvas
			}
			return a
		},
		kl: function(a,
			b, c) {
			var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : !1;
			if (a) {
				if (b) return d = b, "function" === typeof b && (d = b(this.e.hf.P.zoom)), [a[0], a[1], a[2], g.a.Wc(d, 3)];
				if (c) return "function" === typeof c.Dg ? d ? c.Dg : c.Dg(this.e.hf.P.zoom) : c.Dg
			}
			return a
		},
		yG: function(a, b) {
			if (void 0 !== b) {
				var c = this.et[a + ":" + b];
				if (c) return c
			}
			return this.et[a]
		},
		il: function(a, b, c, d) {
			var e = null,
				f = a;
			d = d ? this.Qo : this.kl;
			var h = this.e.hf.P.zoom;
			if (e = this.yG(b))
				if ("function" === typeof e.visible && !e.visible(h) || !1 === e.visible) f = "";
				else {
					f =
						1;
					h = "";
					if (c)
						if (e.fillColor || e.Vd) f = e.Vd, h = e.fillColor;
						else {
							if (e.color || e.opacity) f = e.opacity, h = e.color
						}
					else if (e.strokeColor || e.hb) f = e.hb, h = e.strokeColor;
					else if (e.color || e.opacity) f = e.opacity, h = e.color;
					f = d(a, f, h)
				} this.Tq === b && (f = this.wt(f || a));
			return f
		},
		Pq: function(a, b, c) {
			c = c ? this.Qo : this.kl;
			var d = null,
				e = a,
				f = this.e.hf.P.zoom;
			(d = this.yG(b)) && (e = "function" === typeof d.visible && !d.visible(f) || !1 === d.visible ? "" : c(a, d.opacity,
				d.color));
			this.Tq === b && (e = this.wt(e || a));
			return e
		},
		Qw: function(a, b, c, d, e) {
			var f =
				a,
				h = b,
				k = c,
				l = !0,
				m = !0,
				n = 1,
				p = this.yG(d, e),
				q = this.e.hf.P.zoom;
			p && ("function" === typeof p.visible && !p.visible(q) || !1 === p.visible || "function" === typeof p.iR && !p.iR(
				q) || !1 === p.iR ? (m = l = !1, f = h = k = "") : (f = this.Qo(a, p.mra, p.lra), h = this.Qo(b, p.ora, p.nra),
				k = this.Qo(c, p.uga, p.backgroundColor), l = "function" === typeof p.Fj ? p.Fj(q) : p.Fj));
			p = !1;
			this.Tq === d ? p = !0 : void 0 !== e && this.Tq === d + "-" + e && (p = !0);
			p && (f = this.wt(f || a), h = this.wt(h || b), k = this.wt(k || c), n = 1 - 1.6 * this.ax, m = l = !0);
			return [f, h, k, l, m, n]
		},
		Pw: function(a, b, c, d) {
			var e =
				null,
				f = a,
				h = b;
			d = d ? this.Qo : this.kl;
			var k = this.e.hf.P.zoom;
			if (e = this.yG(c)) "function" === typeof e.visible && !e.visible(k) || !1 === e.visible ? f = h = "" : (f = d(a,
				e.Vd, e.fillColor), h = d(b, e.hb, e.strokeColor));
			this.Tq === c && (b = h || b, f = this.wt(f || a), h = this.wt(b));
			return [f, h]
		}
	};
	g.N.Db.ub(g.GZ);
	g.N.canvas.Db = g.N.Db.extend({
		r: function(a) {
			arguments.callee.ka.apply(this, arguments);
			this.type = "2D"
		},
		xt: function(a) {
			if (!a.N) {
				var b = a.lm(this);
				b && !b.gia && (a.N = b)
			}
			return a.N
		},
		bc: function(a) {
			var b = this.e.x_();
			b && this.zQ !== b && this.e.C.Wh && (this.e.Y3(b), this.zQ = b);
			this.e.Pa.sq.style.cssText = "";
			for (var c = a.ta, b = a.P, d = this.e.C.get("features"), e = a.size.width, f = a.size.height, h = 0; h < c.length; h +=
				1) {
				var k = c[h],
					l = this.xt(k),
					m = c[h].nl();
				if (l && l.j)
					if (!m.visible || k.OB || m.od[0] > b.zoom || m.od[1] < b.zoom || k.ma && 0 === k.ma.length) {
						if (l =
							l.lj())
							if (l.length)
								for (m = 0; m < l.length; m += 1) l[m].parentNode === this.J && this.J.removeChild(l[m]);
							else l.parentNode === this.J && this.J.removeChild(l)
					} else if (this.kP(k, d)) {
					l.bc(a, m);
					var k = l.lj(),
						n, p, q = l.transform;
					if (!q || !k || l.jf && !this.e.C.Ha) c[h].mk && k.parentNode !== this.J && (this.J.appendChild(k), c[h].Fb =
						k);
					else {
						c[h].Fb = k;
						k.length || (k = [k], q = [q]);
						for (var r = 0; r < k.length; r += 1)
							if (n = k[r], p = q[r], !p.$w) {
								var s = p.translate.x,
									u = p.translate.y;
								c[h].WG || (s = g.a.Wc(s, 2), u = g.a.Wc(u, 2));
								var v = p.scale;
								1E-5 > Math.abs(s) &&
									(s = 0);
								1E-5 > Math.abs(u) && (u = 0);
								var x = [];
								x.push("position:absolute");
								x.push("z-index:" + (p.Oj || c[h].get("zIndex")));
								c[h].SA ? (x.push("top:" + Math.floor(f / 2 + u) + "px"), x.push("left:" + Math.floor(e / 2 + s) + "px")) :
									n.g1 ? (x.push("height:" + n.height * v + "px"), x.push("width:" + n.width * v + "px"), x.push("top:" + (f /
										2 - u * v) + "px"), x.push("left:" + (e / 2 - s * v) + "px")) : (1 !== v && (x.push(g.g.Hr[g.g.Pf] +
										"-origin:" + s + "px " + u + "px"), x.push(g.g.Hr[g.g.Pf] + ":scale3d(" + v + "," + v + ",1)")), x.push(
										"top:" + Math.floor(f / 2 - u) + "px"), x.push("left:" + Math.floor(e /
										2 - s) + "px"), l.Mi && (x.push("height:" + n.height + "px"), x.push("width:" + n.width + "px")));
								l.WG || 1 === m.opacity || "number" !== typeof m.opacity || x.push(g.g.R_(n, m.opacity));
								n.parentNode !== this.J && this.J.appendChild(n);
								g.g.Z3(n, x.join(";"))
							}
					}
				}
			}
			a = this.e.Pa.sq;
			k = this.e.Pa.o;
			c = this.e.Pa.A;
			g.g.Pf && "number" === typeof b.rotation && 0 !== b.rotation ? (a.style[g.g.Pf + "Origin"] = e / 2 + "px " + f /
				2 + "px", a.style[g.g.Pf] = "rotate(" + b.rotation + "deg)", a.style.overflow = "visible", k.style.overflow =
				"visible", c.style.overflow = "visible") : (a.style.cssText =
				"", k.style.cssText = "-webkit-transform: translateZ(0);", c.style.cssText = "");
			this.e.ou = !1
		},
		kP: function(a, b) {
			if ("all" === b || void 0 === a.Zk) return !0;
			for (var c = 0, d = a.Zk.length; c < d; c++)
				if (g.a.ga(b, "region" === a.Zk[c] ? "bg" : a.Zk[c])) return !0;
			return !1
		}
	});
	g.N.ii = g.N.Hc.extend({
		r: function(a, b) {
			arguments.callee.ka.apply(this, arguments);
			this.W("reload", a, !0);
			var c = a.X.get("cacheSize");
			if (this.e && this.e.C) {
				var d = this.e.C.get("tileCacheSize");
				d && 0 < d && (c = d)
			}
			this.ra = new g.Of(c);
			var e = this;
			this.ra.RP.xY(function(a) {
				e.lz(a)
			});
			this.ra.sF = function(a) {
				return a.Nb ? (a.Nb.wi -= 1, 0 == a.Nb.wi && (a.Kt = !1), delete a.Nb, !0) : a.Kt ? a.wi ? !1 : !0 : !0
			};
			this.Sc = 1;
			this.ho = 50;
			this.rT = !0;
			this.j.ra = this.ra;
			this.ql = new g.bD(6, null, a.HN);
			new g.bD(5, null, a.HN)
		},
		yx: function() {
			this.clear();
			this.gg = null;
			this.ra.clear();
			this.sc && (this.sc.I("tiles", this.UB, this), this.sc.I("ack", this.TB, this), this.sc.I("disable", this.RB,
				this), this.sc = null);
			this.Mi && g.F.I(this.Na, "webglcontextlost", this.QB, this);
			this.e.I("zoomend", this.ik, this);
			this.e.I("moveend", this.ik, this)
		},
		reloadChanged: function() {
			this.j && (this.j.Ha = !1);
			this.ra.clear();
			this.reload = !0;
			this.set("display")
		},
		sh: function(a, b, c) {
			function d(b) {
				a.loaded = !0;
				e.j && (a.status = "loaded", a.xa = !0, a.Be = b, e.set("display", 0), "function" === typeof c && c())
			}
			var e = this;
			a.status = "loading";
			this.j.mn && this.j.mn.call(this, a, d, function() {
				a.loaded = !0;
				e.j && (a.status = "loaded", a.xa = !0, "function" === typeof c && c())
			})
		},
		Tza: function(a, b, c, d) {
			var e = [];
			c = c || 18;
			b = Math.pow(2, b - c);
			for (var f = 0; f < a.length; f += 1) {
				var h = a[f].sa,
					k = Math.floor(h.x / b),
					h = Math.floor(h.y / b);
				if (d) {
					if (k = c + "/" + k + "/" + h, (h = this.ra.get(k)) && "loaded" == h.status) continue
				} else h = new g.Yn(c, k, h), k = h + "", h = new g.gb(h);
				!e[k] && h && (e.push(h), e[k] = 1)
			}
			return e
		},
		hG: function(a, b) {
			var c = this,
				d = this;
			if (this.j.pA) {
				var e,
					f, h, k, l, m, n, p = function() {
						var p = 0;
						for (e = a.length - 1; 0 <= e; e -= 1) f = a[e], p += f.length;
						if (0 == p) return b.call(c, a), {
							HI: void 0
						};
						d.zR = a;
						for (e = a.length - 1; 0 <= e; e -= 1)
							for (f = a[e], h = [], k = [], f.AQ = h, f.Tt = k, l = f.length - 1; 0 <= l; l -= 1) m = f[l], n = m.sa, c.j
								.e.pi.cy(n.x, n.y, n.z, function() {
									var c = l;
									return function(e) {
										e ? h.push(f[c]) : k.push(f[c]);
										p -= 1;
										if (0 == p) {
											for (e = a.length - 1; 0 <= e; e -= 1) {
												var l = a[e];
												a[e] = l.AQ;
												if (l.Tt)
													for (var m = l.Tt.length - 1; 0 <= m; m -= 1) {
														var n = l.Tt[m];
														!d.jf || d.j.pA.X instanceof z.o.gb.Yu ? (n.status = "loaded", n.loaded = !0,
															n.xa = !0) : n.status = "loading"
													}
											}
											b.call(d, a)
										}
									}
								}())
					}();
				if ("object" === typeof p) return p.HI
			} else b.call(this, a)
		},
		zu: function(a, b, c) {
			if (a = this.ra.get(a + "/" + b + "/" + c)) {
				if (a.Kt) return a;
				if (a.Nb) return a.Nb;
				a.Kt = !0;
				a.wi = 0;
				return a
			}
		},
		AG: function(a) {
			var b = a.sa;
			a = b.x;
			var c = b.y,
				b = b.z,
				d = Math.pow(2, b),
				e = (a + d) % d,
				f = e + d,
				d = e - d,
				h = null;
			e !== a && (h = this.zu(b, e, c));
			h || d === a || (h = this.zu(b, d, c));
			h || f === a || (h = this.zu(b, f, c));
			return h
		},
		wm: function(a) {
			var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : !1;
			if (a.length)
				if (this.RH) this.pH = !0;
				else {
					for (var c = a.length - 1; 0 <= c; c -= 1) {
						var d = a[c];
						if (d.length)
							for (var e = Math.pow(2, 20 - d[0].sa.z), c = d.length - 1; 0 <= c; c--) {
								var f = d[c],
									h = f.sa;
								h.S = e;
								f.Ya = {};
								f.rn = 0;
								if (10 > h.z) {
									var k = this.AG(f);
									k && (f.Nb = k, f.status = "loaded", f.xa = !0, k.wi += 1, f.rn = (h.x - k.sa.x) / Math.pow(2, h.z), d.splice(
										c, 1), this.set("display", 0))
								}
								this.ra.set(f.key, f);
								!b && f.qe ? f.qe = !1 : f.status = "loading"
							}
					}
					var l = this;
					this.hG(a, function(a) {
						for (var c = a.length - 1; 0 <= c; c -= 1) {
							var d = a[c];
							if (d.length)
								if (l.Li) {
									if (l.e.ny) break;
									var e = d[0].sa.z;
									l.pu(d, l.Mi ?
										1 : 0);
									for (var f = 0, h = 0; f < d.length;) l.AP(d.slice(50 * h, 50 * h + 50), e, b), f += 50, h += 1
								} else
									for (e = function() {
											var a = d.length;
											return function() {
												if (0 === --a) {
													var b = {
														key: "rb",
														index: 0,
														id: l.e.C.id
													};
													l.j.X.Aj || (g.xe.Re.end(b), g.xe.Re.end(g.extend(b, {
														index: 1
													})))
												}
											}
										}(), l.pu(d), l.ep += d.length, f = d.length - 1; 0 <= f; f -= 1) l.sh(d[f], l.ql, e)
						}
					})
				}
		},
		Ww: function(a, b) {
			var c = this.ra.get(a + "");
			c || b || (c = new g.gb(a.jb()));
			return c
		},
		kI: function(a, b) {
			return this.Yc * Math.pow(2, a - b)
		},
		lz: function(a) {
			a.br && this.ql.hZ(a.br);
			a.WH = !1;
			a.loaded = !1
		},
		sw: function(a, b) {
			var c = (2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0) || this.cb,
				d = a.jd.x,
				e = a.jd.y,
				f = a.Sb.x,
				h = a.Sb.y;
			new g.G(0, 0);
			var k = this.kI(20, c);
			b && (f = Math.max(b[0], f) - b[0], h = Math.max(b[1], h) - b[1], d = Math.min(b[2], d) - b[0], e = Math.min(b[3],
				e) - b[1], new g.G(Math.floor(b[0] / k), Math.floor(b[1] / k)));
			d /= k;
			e /= k;
			d = {
				Ac: 0 === d % 1 ? d - 1 : Math.floor(d),
				rc: 0 === e % 1 ? e - 1 : Math.floor(e),
				Bc: Math.floor(f / k),
				$b: Math.floor(h / k)
			};
			d.sQ = d.Ac - d.Bc + 1;
			d.m3 = d.rc - d.$b + 1;
			d.z = c;
			d.S = this.S * Math.pow(2, this.zoom - c);
			d.FG = Math.ceil(d.sQ /
				2);
			return d
		},
		Ft: function(a, b, c) {
			return b < a.Bc || b > a.Ac || c < a.$b || c > a.rc ? !1 : !0
		},
		pu: function(a, b) {
			if (a.length) {
				var c = this.mb.Uc(this.Yc << 20 - a[0].sa.z),
					d = Math.floor(c.x),
					e = Math.floor(c.y);
				a.sort(function(a, c) {
					var k = a.sa,
						l = c.sa,
						m = k.x - d,
						k = k.y - e,
						n = l.x - d,
						l = l.y - e;
					return (b ? -1 : 1) * (n * n + l * l - (m * m + k * k))
				})
			}
		},
		clear: function() {
			this.ql.clear()
		},
		Dm: function(a, b) {
			this.Uf = !1;
			this.clear();
			this.oi = b.oi;
			this.ni = b.ni;
			this.Yc = b.Yc;
			var c = a.P;
			this.lf = b.lf || a.P.lf;
			this.Og = c.Og;
			this.size = a.size;
			this.rotation = c.rotation;
			this.mb =
				c.mb;
			this.Da = a.P.Da;
			this.Km = a.Km;
			this.cf = a.cf;
			this.sg = a.sg;
			this.zoom = c.zoom;
			this.Ce = c.Ce;
			this.cb = !1 === this.Li && !this.j.WO && this.j.ha ? this.Ce + 1 : this.Ce;
			this.Oe && this.cb > this.Oe && (this.cb = this.Oe);
			this.Kn && this.cb < this.Kn && (this.cb = this.Kn);
			this.S = c.S;
			this.Gf = c.Gf;
			c = a.P.Da;
			this.sk = this.sw(c, b.H);
			this.Qu = c.V5 ? this.sw(c.V5, b.H) : null;
			var c = this.sk,
				d = this.Da.K4,
				e = null,
				e = d < this.zoom && this.Qu ? this.Qu : c,
				f = [],
				h = [],
				k, l = [],
				m = [],
				n = [],
				p = new g.Yn(0, 0, 0),
				q, r = this.zoom,
				m = this.Uj || "",
				s = {},
				u = {},
				v, x, t, w, y, A;
			this.Sd =
				1E6 * Math.random() << 0;
			for (q = m.length - 1; 0 <= q; q -= 1)
				if (k = m[q], !(k.nv < b.opacity))
					if (p.z = k.sa.z, p.x = k.sa.x, p.y = k.sa.y, p.z === this.cb) s[p + ""] |= 16;
					else if (p.z < this.cb) {
				if (s[p + ""] |= 64, this.oi)
					for (w = this.cb - p.z, v = Math.max(c.Bc, p.x << w), r = Math.min(c.Ac, (p.x + 1 << w) - 1), x = Math.max(c.$b,
							p.y << w), t = Math.min(c.rc, (p.y + 1 << w) - 1), p.z = this.cb, w = v; w <= r; w += 1)
						for (p.x = w, y = x; y <= t; y += 1) p.y = y, A = p + "", s[A] |= 32, u[A] = u[A] ? Math.max(k.sa.z, u[A]) :
							k.sa.z
			} else if (this.ni)
				for (v = 1; p.z >= this.cb;) {
					s[p + ""] |= v;
					v = p.x >> 1;
					x = p.y >> 1;
					r = v << 1;
					t = x << 1;
					k = 0;
					for (w = 2; 0 < w; w -= 1)
						for (p.x = r + w, y = 2; 0 < y; y -= 1) p.y = t + y, s[p + ""] & 5 && (k += 1);
					p.z -= 1;
					p.x = v;
					p.y = x;
					v = 4 === k ? 4 : 2
				}
			m = [];
			p.z = this.cb;
			q = !0;
			this.ra.pZ();
			for (w = e.Bc; w <= e.Ac; w += 1)
				for (p.x = w, y = e.$b; y <= e.rc; y += 1) p.y = y, k = this.Ww(p), this.us(k), v = !1, k.xa ? (k.Sd = this.Sd,
						this.Ft(c, w, y) && (m.push(k), this.Qj && (k.Sc !== this.Sc || 1 > k.nv) && (v = !0))) : (q = !1, this.Ft(c,
						w, y) && (v = !0), k.status && !k.qe || this.Ce !== d || this.Qu && !this.Ft(this.Qu, w, y) || l.push(k)), v &&
					n.push(k);
			q ? (this.aB || (this.aB = !0), this.j.Ha || (k = {
				key: this.j.jf ? "rl" : "rb",
				index: 1,
				id: this.e.C.id
			}, this.j.X.Aj || (g.xe.Re.end(k), g.xe.Re.push({
				key: "ftc",
				ee: m.length,
				id: this.e.C.id
			})))) : this.j.Ha = !1;
			this.Uf = q;
			m.length && this.aB && (f.push(m), m.Uf = q);
			h.push(l);
			d = !1;
			if (this.ni) {
				n = n.slice(0);
				e = [];
				for (q = n.length - 1; 0 <= q; q -= 1) k = n[q], s[k.key] & 4 || e.push(k);
				k = b.od[1];
				for (r = this.cb + 1; n.length && r <= k; r += 1) {
					m = [];
					l = n;
					n = [];
					p.z = r;
					for (q = l.length - 1; 0 <= q; q -= 1)
						if (w = l[q], v = s[w.key], v & 7)
							for (v = w.sa.x << 1, x = w.sa.y << 1, w = 1; 0 <= w; w -= 1)
								for (p.x = v + w, y = 1; 0 <= y; y -= 1) p.y = x + y, A = p + "", t = this.ra.DH(A), s[A] & 5 && t && t.xa ?
									(t.Pz = !0, t.Sd = this.Sd, m.push(t), this.us(t)) : n.push(new g.gb(p.jb()));
					m.length && (d = !0, f.push(m))
				}
				n = e
			}
			if (!d && this.oi)
				for (w = !f.length || this.Mi ? b.od[0] : Math.max(b.od[0], this.cb - 2), Math.max(w, this.cb - this.qba), r =
					this.cb - 1; n.length && r >= w; r -= 1) {
					m = [];
					y = {};
					l = n;
					n = [];
					for (q = l.length - 1; 0 <= q; q -= 1) k = l[q], p.z = r, p.x = k.sa.x >> 1, p.y = k.sa.y >> 1, k = this.Ww(p),
						y[k.key] || (y[k.key] = 1, v = !1, k.xa && (!this.tda || s[k.key] & 64) ? (p.x = Math.min(c.Ac, Math.max(c.Bc,
								p.x << this.cb - r)), p.y = Math.min(c.rc, Math.max(c.$b, p.y << this.cb - r)), p.z = this.cb,
							A = p + "", "number" === typeof u[A] && k.sa.z > u[A] ? v = !0 : k.Pz = !0, k.Sd = this.Sd, m.push(k), this
							.us(k)) : v = !0, v && n.push(k));
					m.length && f.push(m)
				}
			this.zR = h;
			this.Ot = this.ep = 0;
			this.wm(h);
			this.gg = f;
			this.j.set("tiles", f);
			this.au(a, b)
		},
		us: function(a) {
			this.ra.O1(a.Hxa)
		},
		uO: function(a, b) {
			for (var c = [], d = this.e.C.getCoordsBoundByZoom(a), d = this.sw(d, b, a), e = d.Bc; e < d.Ac; e++)
				for (var f = d.$b; f < d.rc; f++) {
					var h = [a, e, f].join("/");
					this.ra.xd(h) || c.push(new g.gb(new g.Yn(a, e, f), !0))
				}
			return c
		},
		UJ: function() {
			var a = this.e.C;
			return a.e3 &&
				a.get("preloadMode") && 200 <= this.ra.mo && this.j.X.Jt() && "stable" != this.Km && this.aw && this.aw() &&
				this.zoom !== this.cb
		},
		au: function(a, b) {
			var c = b.H,
				d = b.od;
			if (this.UJ() && this.cb >= d[0] + 1) {
				var d = [],
					e = null,
					e = "zoomOut" === this.Km ? Math.floor(this.zoom) : Math.ceil(this.zoom),
					e = this.uO(e, c);
				e.length && d.push(e);
				d.length && this.wm(d, !0)
			}
		}
	});
	g.N.Ud.ii = g.N.ii.extend({
		r: function(a, b) {
			arguments.callee.ka.apply(this, arguments);
			this.ho = 120;
			this.Li = !1;
			this.qg();
			this.Oe = a.Oe;
			this.Kn = a.Kn
		},
		lj: function() {
			return this.Fb
		},
		qg: function() {
			this.Fb = document.createElement("div");
			this.Fb.className = this.j.X.get("className") || "amap-layer";
			this.qt = document.createDocumentFragment()
		},
		gu: function(a) {
			var b = Math.pow(2, a.P.zoom - this.Pe),
				c = a.P.mb.Wa(this.cr).Uc(this.Cj);
			this.transform = {
				translate: this.transform.translate.add(c),
				scale: b,
				rotate: 0
			};
			this.mb = a.P.mb
		},
		HM: function(a, b) {
			if (!this.za || 3E4 < Math.abs(this.mb.x - this.za.x) / this.S || 3E4 < Math.abs(this.mb.y - this.za.y) / this.S)
				this.za = this.mb;
			this.Pe = this.Ce;
			this.Cj = this.Gf;
			this.zg = !1;
			this.currentTime = +new Date;
			this.VR = b.VR;
			var c = this.sk;
			this.Qj = this.ho && b.uF;
			var d = this.gg,
				e = 256 * c.sQ,
				c = 256 * c.m3;
			this.cf = this.zoom << 0 !== this.zoom;
			var f = this.mb.Wa(this.za);
			f.x < -g.a.wa / 2 ? f.x += g.a.wa : f.x > g.a.wa / 2 && (f.x -= g.a.wa);
			this.XM = f.Uc(this.Gf);
			return [d, e, c, b]
		},
		Mx: function(a, b) {
			var c = this.HM(a, b);
			this.vr.apply(this, c);
			this.rf(a);
			this.Uf && !this.j.Ha && (c = this.j, c.X.Aj || g.xe.Re.end({
				key: "rb",
				index: 2,
				id: this.e.C.id
			}), c.Ha = !0, c.ad ? c.ja("renderComplete") : (c.ad = !0, c.ja("complete")))
		},
		bc: function(a, b) {
			this.Qr = a.Qr;
			this.sg = a.sg;
			this.Dm(a, b);
			this.cr && g.l.$k && (a.cf || a.sg) ? this.gu(a, b) : this.Mx(a, b);
			this.cr = this.mb;
			this.zg && this.set("display", 0)
		},
		fu: function() {
			for (var a = this.Fb.childNodes, b = a.length - 1; 0 <= b; b -= 1) a[b] && a[b].Sc !== this.Sc && this.Fb.removeChild(
				a[b])
		},
		JH: function(a, b) {
			return a.$b === b.$b && a.Bc === b.Bc && a.rc === b.rc && a.Ac === b.Ac
		},
		vr: function(a) {
			var b = this.Sc;
			this.Sc += 1;
			var c = !1,
				d, e, f;
			e = !1;
			var h = [];
			this.za.x - this.mb.x < -g.a.wa / 2 ? this.za = new g.G(this.za.x + g.a.wa, this.za.y) : this.za.x - this.mb.x >
				g.a.wa / 2 && (this.za = new g.G(this.za.x - g.a.wa, this.za.y));
			for (d = a.length - 1; 0 <= d; d -= 1)
				if (f = a[d], f.length) {
					e = f[0].sa.z;
					for (var k, l, m = this.kI(this.Ce, e), n = f.length - 1; 0 <= n; n -= 1) {
						l = f[n];
						this.OQ(l);
						if (this.za === l.za && l.Pe === this.Pe) {
							var p = l.Be;
							if (p && p.parentNode === this.Fb && 1 === l.nv) {
								h.push(l);
								p.Sc = this.Sc;
								l.Sc = this.Sc;
								continue
							}
						}
						l.za = this.za;
						l.Pe =
							this.Pe;
						k = l.sa;
						var c = !0,
							q = (new g.G((k.x << 20 - e) * this.Yc, (k.y << 20 - e) * this.Yc)).Wa(this.za),
							q = q.Uc(this.Gf);
						q.x = g.a.Wc(q.x, 1);
						q.y = g.a.Wc(q.y, 1);
						var r = 1;
						if (!l.lU || this.rT && l.Sc !== b) l.lU = this.currentTime;
						this.Qj && !l.Pz ? (p = Math.max(0, Math.abs(k.z - this.zoom) - 1), r = Math.min(1, (this.currentTime - l.lU) /
							(1 / Math.pow(1.32, p) * this.ho)), 1 !== r && (this.zg = !0)) : l.Pz = !1;
						l.Sc = this.Sc;
						l.nv = r;
						l.xa ? (p = l.Be, !p && l.Nb && l.Nb.Be && (p = l.Nb.Be), 0 !== r && p && (this.M_(p, q.x, q.y, m, m, r, k.z),
							p.parentNode !== this.Fb && (g.l.Uh && "overlayer" ===
								this.j.get("type") && (p.style.display = "none"), this.qt.appendChild(p)), p.Sc = this.Sc, l.Ce = this.Ce,
							h.push(l))) : l.Sd = null
					}
					e = !0
				} 1 < a.length && (this.zg = !0);
			this.Uj = h;
			this.fu();
			this.Fb.appendChild(this.qt);
			return c || !e
		},
		OQ: function() {},
		rf: function() {
			this.transform = {
				translate: this.XM,
				scale: Math.pow(2, this.zoom - this.Ce),
				rotate: 0
			}
		}
	});
	window.CanvasRenderingContext2D && (window.CanvasRenderingContext2D.prototype.nN = function(a, b, c, d, e) {
		"undefined" === typeof e && (e = [10, 10]);
		this.moveTo(a, b);
		var f = c - a,
			h = d - b,
			k = Math.floor(Math.sqrt(f * f + h * h));
		d = f / k;
		c = h / k;
		e.bg = 0;
		for (var l = [], f = this.NF, m = 0, n = 0, p = !1, q = h = 0; q < e.length; q += 1) e.bg += e[q], l[q] = {
			YA: e[q] * d,
			ZA: e[q] * c,
			hx: h += e[q]
		}, f -= e[q], 0 > f && !p && (m = q, n = -f, p = !0);
		for (p = 0; n + p <= k;) n < e[m] ? (f = n * d, h = n * c) : (f = l[m].YA, h = l[m].ZA), a += f, b += h, this.yC ?
			this.moveTo(a, b) : this.lineTo(a, b), p += n, this.yC = !this.yC, n = e[(m + 1) %
				e.length], m = (m + 1) % e.length;
		k -= p;
		a += k * d;
		b += k * c;
		this.yC ? this.moveTo(a, b) : this.lineTo(a, b);
		this.NF = (this.NF + p + k) % e.bg
	}, window.CanvasRenderingContext2D.prototype.ria = function(a, b, c, d) {
		"undefined" === typeof d && (d = [10, 10]);
		var e = 2 * Math.PI * c,
			f = 0 >= d ? e : Math.round(e / (d[0] + d[1])),
			h = (d[0] + d[1]) / e * 2 * Math.PI;
		d = d[0] / e * 2 * Math.PI;
		for (e = 0; e < f; e += 1) this.beginPath(), this.arc(a, b, c, e * h, e * h + d), this.stroke()
	});
	g.N.se.Kk = g.N.ii.extend({
		r: function(a, b) {
			arguments.callee.ka.apply(this, arguments);
			this.qg()
		},
		yO: function() {
			return this.Sa.sR
		},
		lj: function() {
			return this.Fb
		},
		qg: function() {
			this.Fb = document.createElement("div");
			this.Fb.className = "amap-markers";
			this.Sa = new g.N.se.Qc(this.Fb);
			this.Sa.j = this.j;
			this.O.J.appendChild(this.Fb)
		},
		Mr: function(a, b) {
			this.qt = b.qt;
			this.jx = b;
			this.lf = a.P.lf;
			this.S = a.P.S;
			this.zoom = a.P.zoom;
			this.size = a.size;
			this.Da = a.P.Da;
			this.hp = a.S;
			this.fb = a.P.mb;
			this.Og = a.P.Og;
			var c = !1;
			if (!this.za ||
				500 < Math.abs(this.fb.x - this.za.x) / this.S || 500 < Math.abs(this.fb.y - this.za.y) / this.S) c = !0;
			if (c || this.zoom << 0 !== this.zoom || this.Pe !== this.zoom) this.za = this.fb, this.Pe = this.zoom
		},
		At: function(a) {
			var b = a.P.Da.kc.y * this.S;
			a = a.P.Da.kc.x * this.S;
			return [this.fb.x - a, this.fb.y - b, this.fb.x + a, this.fb.y + b]
		},
		fu: function() {
			if (this.uh && this.uh)
				for (var a in this.uh)
					if (this.uh.hasOwnProperty(a)) {
						var b = this.uh[a];
						b.Sd !== this.Sd && b.ca && this.O.Pk.appendChild(b.ca)
					}
		},
		bc: function(a, b) {
			this.Sd = 1E6 * Math.random() << 0;
			this.Mr(a,
				b);
			this.P = a.P;
			this.size = a.size;
			var c = this.j;
			this.Yc = 256;
			var d, e;
			e = this.At(a);
			var f = 0;
			c.qm && (f = 50 * this.S);
			e[0] -= this.j.af * this.S + f;
			e[1] -= this.j.If * this.S + f;
			e[2] += this.j.af * this.S + f;
			e[3] += this.j.If * this.S + f;
			c = c.pm(e);
			for (d in c) c.hasOwnProperty(d) && (c[d].Sd = this.Sd, c[d].B1 = this);
			this.fu(c);
			this.Mr.call(this.Sa, a, b);
			this.Sa.lC(c);
			this.uh = c;
			this.rf(a)
		},
		rf: function() {
			var a = Math.pow(2, this.zoom - this.Ce);
			this.transform = {
				translate: this.za.Wa(this.fb).Uc(this.S),
				scale: a,
				rotate: 0
			}
		}
	});
	g.N.se.Qc = g.Z.extend({
		r: function(a) {
			this.tk = a
		},
		lC: function(a, b) {
			var c = document.createDocumentFragment(),
				d = b && b.fP ? null : {},
				e = !0,
				f;
			for (f in a)
				if (a.hasOwnProperty(f)) {
					var h = a[f],
						k, l = h.get("params");
					if (h.ca) k = h.ca;
					else {
						k = g.g.create("div");
						k.className = "amap-marker";
						var m = l.Pg,
							n = l.k4;
						m && k.appendChild(m);
						n && k.appendChild(n);
						h.ca = k;
						h.Pg = m;
						if (n = l.title) m.title = n;
						this.j.qm = !0; - 1 === g.a.indexOf(this.j.ug, h) && this.j.ug.push(h);
						h.Af = !0
					}
					var m = l.offset,
						n = m.x,
						p = m.y,
						q = l.textAlign,
						r = l.verticalAlign,
						m = !1,
						s, u;
					if ("AMap.Text" ==
						h.uA) {
						if (u = s = 0, k.parentNode !== this.tk && d && (m = !0, d[f] = h, e = !1), !m) {
							var v = g.g.Ow(h.Pg),
								x = v[0],
								v = v[1];
							switch (q) {
								case "center":
									s = x / 2;
									break;
								case "right":
									s = x
							}
							switch (r) {
								case "middle":
									u = v / 2;
									break;
								case "bottom":
									u = v
							}
							n -= s;
							p -= u
						}
					} else s = -n, u = -p;
					if (h.Af) q = [], r = this.Bq(h.ba.Ia), h.za = this.za, x = l.hS, p = Math.round(r[1] + p + x.y), n = Math.round(
						r[0] + n + x.x), q.push("top:" + p + "px"), q.push("left:" + n + "px"), q.push("z-index:" + (l.n1 ? this.j.Cp +
						10 : l.zIndex)), g.l.oe || q.push(g.g.b0(k, l.jw, {
						x: s,
						y: u
					})), q.push("display:" + (l.visible ? "block" :
						"none") + ";"), k.style.cssText = q.join(";"), (s = l.label) && s.content && (l = l.s1, n = p = 0, s.offset &&
						(p = s.offset.y + "px", n = s.offset.x + "px"), l.style.top = p, l.style.left = n, k.appendChild(l));
					else if (h.a7 || this.zoom << 0 !== this.zoom || h.zoom !== this.zoom || k.parentNode !== this.tk || h.za !==
						this.za) r = this.Bq(h.ba.Ia), h.za = this.za, x = l.hS, p = Math.round(r[1] + p + x.y), n = Math.round(r[0] +
						n + x.x), k.style.top = p + "px", k.style.left = n + "px";
					h.zoom = this.zoom;
					k.parentNode !== this.tk && (g.l.Uh && g.a.iepngFix(k), c.appendChild(k), h.Af = m);
					k.Tz = this.tk
				} this.tk.appendChild(c);
			e || this.lC(d, {
				fP: !0
			})
		},
		Bq: function(a) {
			var b = a[0] - this.za.x;
			b > g.a.wa / 2 ? b -= g.a.wa : b < -g.a.wa / 2 && (b += g.a.wa);
			return [b / this.S, (a[1] - this.za.y) / this.S]
		}
	});
	var Ac = g.w,
		Kc = g.l,
		fc = g.Z.ht,
		Uc = g.Goa,
		ga = document,
		Vc = !0,
		Wc = [];
	Kc.of && Wc.push("touch");
	Kc.Y || Wc.push("mouse");
	Kc.oI && (Wc.push("vectorlayer", "overlay"), Kc.Ap ? Wc.push("wgl") : Wc.push("cmng", "cgl"));
	if (Uc) {
		for (var Xc = [], Yc = Uc.split(","), wc = 0; wc < Yc.length; wc += 1) {
			var Zc = Yc[wc];
			fc[Zc] && Xc.push.apply(Xc, fc[Zc]);
			Xc.push(Zc)
		}
		Wc = Wc.concat(Xc)
	}
	Wc.push("sync");
	if (Kc.fr) {
		var $c = !0,
			ad = [],
			bd = [];
		try {
			for (var wc = 0, cd = Wc.length; wc < cd; wc++) {
				var dd = JSON.parse(localStorage.getItem("_AMap_" + Wc[wc]));
				if (dd && dd.version === Ac.Si) ad.push(dd.script), dd.css && bd.push(dd.css);
				else {
					ad = void 0;
					$c = !1;
					break
				}
			}
		} catch (ed) {
			ad = bd = void 0, $c = !1
		}
		if ($c) try {
			bd.length && fd();
			var gd = ad.join(";");
			eval(gd)
		} catch (hd) {
			Vc = !1
		} else Vc = !1
	} else Vc = !1;
	if (Vc)
		for (wc = 0; wc < Wc.length; wc += 1) g.ob.LA(Wc[wc]).status = 1;
	else Ac.DB = !1, id();

	function jd() {
		for (var a = ga.getElementsByTagName("script"), b, c = 0; c < a.length; c += 1)
			if (0 === a[c].src.indexOf(Ac.tb + "/maps?")) {
				b = a[c];
				break
			} return Ac.xc || b && b.async
	}

	function id() {
		var a = Ac.tb + "/maps/modules?v=" + Ac.kq + "&key=" + Ac.key + "&vrs=" + Ac.Si + "&m=" + Wc.join(",");
		jd() ? kd(a) : (ga.write('<script crossorigin="anonymous" id="amap_plus_js" src="' + a +
			'" type="text/javascript">\x3c/script>'), setTimeout(function() {
			ga.getElementById("amap_plus_js") || kd(a)
		}, 1))
	}

	function kd(a) {
		var b = ga.createElement("script");
		b.charset = "utf-8";
		b.src = a;
		b.id = "amap_plus_js";
		(a = ga.head || ga.getElementsByTagName("head")[0] || ga.body) && a.appendChild(b)
	}

	function fd() {
		var a = bd.join("\n"),
			b = ga.createElement("style");
		b.type = "text/css"; - 1 === Ac.tb.indexOf("webapi.amap.com") && (a = a.replace(/webapi.amap.com/gi, Ac.tb.split(
			"://")[1]));
		"https" === Ac.nc && (a = a.replace(/http:/gi, "https:"));
		if (b.styleSheet) {
			var c = function() {
				try {
					b.styleSheet.cssText = a
				} catch (c) {}
			};
			b.styleSheet.disabled ? setTimeout(c, 10) : c()
		} else b.appendChild(ga.createTextNode(a));
		c = ga.head || ga.getElementsByTagName("head")[0];
		2 > c.childNodes.length ? c.appendChild(b) : c.insertBefore(b, c.childNodes[1])
	};
})(["cc7be50a8cb0c58431a606d5d18778dd", [120.856804, 30.675593, 122.247149, 31.872716, 121.472644, 31.231706],
	"https://webapi.amap.com", 1, "1.4.12", null, "310000", "AMap.Driving", true, false, false, true,
	"1569492409-20190807-1", false
])
