/*Copyright (c) 2011-2013 Moat Inc. All Rights Reserved.*/
try{(function(){function la(){for(var a=0;a<y.length;a++){var b;a:{b=["focusin","focusout","blur","focus","scroll"];for(var c=0;c<b.length;c++)if(y[a].evt==b[c]){b=!0;break a}b=!1}b||i.c.b(y[a].obj,y[a].evt,y[a].cb)}for(a=0;a<T.length;a++)window.clearTimeout(T[a]);for(a=0;a<U.length;a++)window.clearInterval(U[a])}var i={},s=i;s.a={};s.a.a=function(){var a=s.a.b();return 5===a||6===a||7===a};s.a.b=function(){if("Microsoft Internet Explorer"===navigator.appName){var a=/MSIE ([0-9]{1,}[.0-9]{0,})/;null!==
a.exec(navigator.userAgent)&&(a=parseFloat(RegExp.$1));return a}return null};s.a.c=function(a){return new Date-a.de};s.a.d=function(a){return a.replace(/^http:/,"").replace(/^\/\//,"").replace(/^www[^.]*\./,"").split("/")[0]};s.a.e=function(a,b){for(;a&&a.nodeType!=Node.ELEMENT_NODE;)a=a.parentNode;if(a){if(window.getComputedStyle)return document.defaultView.getComputedStyle(a,"").getPropertyValue(b);if(a.currentStyle){for(var c=b.indexOf("-");-1<c;)b=c==b.length-1?b.substr(0,c):b.substr(0,c)+b.charAt(c+
1).toUpperCase()+b.substr(c+2),c=b.indexOf("-");return a.currentStyle[b]}}};s.a.f=function(){return null!==/iPad|iPhone|iPod|Silk|Kindle|Android|BlackBerry|PlayBook|Windows Phone/.exec(navigator.userAgent)};s.a.g=function(){var a=window;try{return"undefined"!==typeof a.external&&"undefined"!==typeof a.external.InPrivateFilteringEnabled&&a.external.InPrivateFilteringEnabled()||"undefined"!==typeof a.external&&"undefined"!==typeof a.external.msTrackingProtectionEnabled&&a.external.msTrackingProtectionEnabled()||
"undefined"!==typeof a._gaUserPrefs&&a._gaUserPrefs.ioo&&a._gaUserPrefs.ioo()||"undefined"!==typeof navigator.doNotTrack&&("yes"===navigator.doNotTrack||!0===navigator.doNotTrack)||"undefined"!==typeof a._gaUserPrefs&&!0===a._gaUserPrefs}catch(b){return!1}};s.a.h=function(){var a;try{a=document.location.protocol}catch(b){a=document.createElement("a"),a.href="",a=a.protocol}return"https:"===a};s.a.i=function(){for(var a=document.getElementsByTagName("script"),b,c=a.length-1;-1<c;c--)if((b=a[c])&&(b.src&&
b.src.indexOf&&-1!==b.src.indexOf(Ra+"/moatad.js"))&&!("undefined"!==typeof b[q]&&!0===b[q]))return b[q]=!0,b;return null};s.a.j=function(a){try{return-1!==(a.src||a.getAttribute("src")).indexOf("psd=1")}catch(b){return!1}};var D=i;D.b={};D.b.a="MoatSuperV2";D.b.b=0;D.b.c=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");D.b.d=-1!==navigator.userAgent.indexOf("MSIE");var z=i,V=function(a){var b=!1;return function(c){try{a(c)}catch(d){if(!b){b=!0;c=d.name+" in callback: "+d.message+", stack="+
d.stack;try{var h="http://v3.moatads.com/pixel.gif?e=24&d=data%3Adata%3Adata%3Adata&i="+escape("FORBES2")+"&ac=1&k="+escape(c)+"&ar="+escape("38e1812-clean")+"&j="+escape(document.referrer)+"&cs="+(new Date).getTime();(new Image(1,1)).src=h}catch(f){}}}}};z.c={};var ma={};z.c.a=function(a,b,c,d){c=V(c);a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent("on"+b,c);y.push({obj:a,evt:b,cb:c});d&&(ma[b+d]=c)};z.c.b=function(a,b,c,d){c=d?ma[b+d]:c;a.removeEventListener?a.removeEventListener(b,
c,!1):a.detachEvent("on"+b,c)};z.c.c=function(a,b){var a=V(a),c=setInterval(a,b);U.push(c);return c};z.c.d=function(a,b){var a=V(a),c=setTimeout(a,b);T.push(c);return c};z.c.e=function(a,b,c){for(var d=[],h=3;h<arguments.length;h++)d.push(arguments[h]);var f=0,e=function(){f+=1;!0!==a.apply(this,d)&&f<b&&setSafeTimeout(e,c)};e()};var e=i,na=function(a,b,c){a.IR5.MIN[c]=Math.min(b,a.IR5.MIN[c])||b||1;a.IR5.MAX[c]=Math.max(b,a.IR5.MAX[c])||b},oa=function(a,b){b.be=Math.max("undefined"!==typeof b.be?
b.be:0,a-b.bf);"undefined"===typeof b.by&&b.be>=Sa&&(b.by=b.bk)},pa=function(a){a.az===e.d.a.d.a?a.az=e.d.a.d.b:a.az===e.d.a.d.b&&(a.az=e.d.a.d.a)},qa=function(a){a.ba===e.d.a.d.a?a.ba=e.d.a.d.b:a.ba===e.d.a.d.b&&(a.ba=e.d.a.d.a)},ra=function(a){a.ax===e.d.a.b.a?a.ax=e.d.a.b.b:a.ax===e.d.a.b.b&&(a.ax=e.d.a.b.a)},sa=function(a){a.ay===e.d.a.c.a?a.ay=e.d.a.c.b:a.ay===e.d.a.c.b&&(a.ay=e.d.a.c.a)},W=function(a,b){"undefined"===typeof b.bk&&(b.bk=0);b.bk+=a-b.bo;b.bo=a},X=function(a,b){"undefined"===typeof b.bl&&
(b.bl=0);b.bl+=a-b.bp;b.bp=a},ua=function(a,b){"undefined"===typeof b.bg&&(b.bg=0);"undefined"===typeof b.bc&&(b.bc=0);b.bu=a-b.bs;b.bu>b.bc&&(b.bc=b.bu);b.bg+=a-b.bq;b.bc>=ta&&"undefined"===typeof b.bw&&(b.bk+=a-b.bo,b.bw=b.bk);b.bq=a},va=function(a,b){"undefined"===typeof b.bh&&(b.bh=0);"undefined"===typeof b.bd&&(b.bd=0);b.bv=a-b.bt;b.bv>b.bd&&(b.bd=b.bv);b.bh+=a-b.br;b.bd>=ta&&"undefined"===typeof b.bx&&(b.bl+=a-b.bp,b.bx=b.bl);b.br=a};e.d={};var wa=500,xa=3E3,ta=500,Sa=500;e.d.a={};e.d.a.a={};
e.d.a.a.a=0;e.d.a.a.b=1;e.d.a.b={};e.d.a.b.a=0;e.d.a.b.b=1;e.d.a.c={};e.d.a.c.a=0;e.d.a.c.b=1;e.d.a.d={};e.d.a.d.a=0;e.d.a.d.b=1;e.d.a.e={};e.d.a.e.a=0;e.d.a.e.b=1;e.d.a.f={};e.d.a.f.a=0;e.d.a.f.b=1;e.d.a.f.c=2;e.d.b=function(a){na(a,a.aj,"x");na(a,a.ak,"y");a.IR5.AREA=(a.IR5.MAX.x-a.IR5.MIN.x)*(a.IR5.MAX.y-a.IR5.MIN.y)};e.d.c=function(a){function b(){(new Date).getTime()-Y>=wa&&(e.d.d({type:"park"},a),clearInterval(d),a.au=e.d.a.a.a)}var c=a.au;if(c===e.d.a.a.a){Y=(new Date).getTime();var d=e.c.c(b,
50);a.au=e.d.a.a.b}else c===e.d.a.a.b&&(Y=(new Date).getTime())};e.d.e=function(a){function b(){(new Date).getTime()-Z>=xa&&(e.d.f({type:"park"},a),clearInterval(d),a.av=e.d.a.a.a)}var c=a.av;if(c===e.d.a.a.a){Z=(new Date).getTime();var d=e.c.c(b,50);a.av=e.d.a.a.b}else c===e.d.a.a.b&&(Z=(new Date).getTime())};e.d.g=function(a,b){var c=a.type;if(b.az===e.d.a.d.a){if("mouseover"===c||"mousemove"===c)b.bo=(new Date).getTime(),pa(b)}else if(b.az===e.d.a.d.b){"mousemove"===c&&W((new Date).getTime(),b);
if("mouseout"===c||"blur"===c)W((new Date).getTime(),b),pa(b);"scooper"===c&&W((new Date).getTime(),b)}};e.d.h=function(a,b){var c=a.type;if(b.ba===e.d.a.d.a){if("mouseover"===c||"mousemove"===c)b.bp=(new Date).getTime(),qa(b)}else if(b.ba===e.d.a.d.b){"mousemove"===c&&X((new Date).getTime(),b);if("mouseout"===c||"blur"===c)X((new Date).getTime(),b),qa(b);"scooper"===c&&X((new Date).getTime(),b)}};e.d.d=function(a,b){if(2!=b.an){var c=a.type;if(b.ax===e.d.a.b.a){if("mouseover"===c||"mousemove"===
c)b.bq=(new Date).getTime(),b.bs=(new Date).getTime(),ra(b)}else b.ax===e.d.a.b.b&&(("mousemove"===c||"mouseout"===c)&&ua((new Date).getTime(),b),"park"===c&&ua((new Date).getTime()-wa,b),("mouseout"===c||"park"===c)&&ra(b))}};e.d.f=function(a,b){if(2!=b.an){var c=a.type;if(b.ay===e.d.a.c.a){if("mouseover"===c||"mousemove"===c)b.br=(new Date).getTime(),b.bt=(new Date).getTime(),sa(b)}else b.ay===e.d.a.c.b&&(("mousemove"===c||"mouseout"===c)&&va((new Date).getTime(),b),"park"===c&&va((new Date).getTime()-
xa,b),("mouseout"===c||"park"===c)&&sa(b))}};e.d.i=function(a,b){var c=a.type;if(b.bb==e.d.a.e.a){if("mouseover"==c||"mousemove"==c)b.bf=(new Date).getTime(),b.bb=e.d.a.e.b}else b.bb==e.d.a.e.b&&("mouseout"==c?(oa((new Date).getTime(),b),b.bb=e.d.a.e.a):("mousemove"==c||"scooper"==c)&&oa((new Date).getTime(),b))};var g=i,Ta=function(a){var a=a||window.event,b=A(a.target||a.srcElement);if(b){B(b,a);if((b.aj!==b.al||b.ak!==b.am)&&0<=b.aj&&b.aj<=parseInt(b.aa.offsetWidth)&&0<=b.ak&&b.ak<=parseInt(b.aa.offsetHeight)&&
!w)g.d.d(a,b),g.d.f(a,b),g.d.g(a,b),g.d.i(a,b),g.d.h(a,b),g.d.b(b),g.d.c(b),g.d.e(b),0===b.ar.length&&(b.ai=H(b)),b.ar.push(b.aj),b.as.push(b.ak),b.at.push(g.a.c(b)),b.al=b.aj,b.am=b.ak;b.ai!==H(b)&&1<b.ar.length&&ya(b,"onMouseMove");return{x:b.aj,y:b.ak}}},Ua=function(a){var a=a||window.event,b=A(a.target||a.srcElement);if(b&&(B(b,a),a={e:2},a.q=b.aq[2]++,a.x=b.aj,a.y=b.ak,g.f.a(b,a),0===b.an)){var c=b.aj,d=b.ak;k.v&&g.c.d(function(){if(!k.v){var a={e:3};a.q=b.aq[3]++;a.x=c;a.y=d;g.f.a(b,a)}},1E3)}},
Va=function(a){for(var b={},c=0;c<a.changedTouches.length;c+=1){var d=A(a.changedTouches[c].target||a.changedTouches[c].srcElement);if(d){B(d,a.changedTouches[c]);b.e=23;b.q=d.aq[23]++;b.x=d.aj;b.y=d.ak;var h=b,f=d;now=(new Date).getTime();"undefined"===typeof f.ct?f.ct=now:(interval=now-f.ct,f.ct=now,f.cu=Math.min(f.cu,interval)||interval);h.bz=void 0;g.f.a(d,b)}}},ba=function(a,b,c){if(2==a.an){var d=b.e,h=a.ck;h==g.d.a.f.a&&6===d?($(a,0),a.cl=g.a.c(a),a.ck=g.d.a.f.b):h==g.d.a.f.b?22===d?(aa(a,
b),$(a,c),a.cl=g.a.c(a)):7===d&&(1E3<g.a.c(a)-a.cl?(clearTimeout(a.cm),b.e=22,aa(a,b),a.cn=0,a.ck=g.d.a.f.a):a.ck=g.d.a.f.c):h==g.d.a.f.c&&(6==d?(1E3<g.a.c(a)-a.cl&&(clearTimeout(a.cm),a.cn=0,a.cl=g.a.c(a),$(a,0)),a.ck=g.d.a.f.b):22==d&&(aa(a,b),a.ck=g.d.a.f.a,a.cn=0))}},$=function(a,b){var c=5>a.cn?1E3:2*b,d={e:22};a.cm=g.c.d(function(){ba(a,d,c)},c)},aa=function(a,b){b.q=a.aq[b.e]++;b.m=g.a.c(a);a.cl=b.m;g.f.a(a,b);a.cn++},Wa=function(a){var a=a||window.event,b=A(a.target||a.srcElement);if(b){g.d.d(a,
b);g.d.f(a,b);g.d.g(a,b);g.d.i(a,b);g.d.h(a,b);B(b,a);a={e:6};a.q=b.aq[6]++;a.x=0>b.aj?0:b.aj;a.y=0>b.ak?0:b.ak;var c=g.a.c(b);a.m=c;g.f.a(b,a);ba(b,a,0)}},Xa=function(a){var a=a||window.event,b=A(a.target||a.srcElement);b&&(g.d.d(a,b),g.d.f(a,b),g.d.g(a,b),g.d.i(a,b),g.d.h(a,b),B(b,a),a={e:7},a.q=b.aq[7]++,a.x=0>b.aj?0:b.aj,a.y=0>b.ak?0:b.ak,g.f.a(b,a),ba(b,a,0))},Ya=function(a){var a=a||window.event,b=A(a.target||a.srcElement);b&&0!==b.an&&(B(b,a),a={e:3},a.q=b.aq[3]++,a.x=b.aj,a.y=b.ak,g.f.a(b,
a))},B=function(a,b){var c;a.dm||(a.cb=a.dz,a.dm=1);var d,h;"undefined"!==typeof b.pageX?(h=b.pageX,c=b.pageY):(h=(b.target||b.srcElement).ownerDocument||document,d=h.documentElement,c=h.body,h=b.clientX+(d&&d.scrollLeft||c&&c.scrollLeft||0)-(d&&d.clientLeft||c&&c.clientLeft||0),c=b.clientY+(d&&d.scrollTop||c&&c.scrollTop||0)-(d&&d.clientTop||c&&c.clientTop||0));for(var f=a.aa,e=d=0,i=0;i<E;i++)if(f){d+=f.offsetLeft;if(!g.b.c||!("TABLE"===f.tagName&&"inline"===f.style.display))e+=f.offsetTop;f=f.offsetParent}else break;
c-=e;a.aj=parseInt(h-d,10);a.ak=parseInt(c,10)},ya=function(a){a.ai=H(a);var b={e:1};b.q=a.aq[1]++;b.x=a.ar.join("a");b.y=a.as.join("a");for(var c=g.a.c(a),d=a.at,h=[],f=0;f<d.length;f++)isNaN(d[f])||h.push(Math.abs(d[f]-c));b.c=h.join("a");b.m=c;g.f.a(a,b);a.ar=[];a.as=[];a.at=[]},A=function(a){var b;if("undefined"!==typeof a[v])return m[a[v]];if("OBJECT"===a.tagName)for(var c=0;c<a.children.length;c++)if(b=a.children[c],"undefined"!==typeof b&&"EMBED"===b.tagName&&"undefined"!==typeof b[v])return m[b[v]];
for(c=0;c<E;c++)if(a.parentNode){if(a=a.parentNode,"undefined"!==typeof a[v])return m[a[v]]}else break;return null},H=function(a){return Math.floor(g.a.c(a)/Za)};g.e={};var Za=1E3;g.e.a=function(a){g.c.a(a,"click",Ya,!1);g.c.a(a,"mousedown",Ua,!1);w?g.c.a(a,"touchstart",Va,!1):(g.c.a(a,"mousemove",Ta,!1),g.c.a(a,"mouseover",Wa,!1),g.c.a(a,"mouseout",Xa,!1))};g.e.b=function(){for(var a in m)if(m.hasOwnProperty(a)){var b=m[a];b&&(g.d.g({type:"scooper"},b),g.d.i({type:"scooper"},b),g.d.h({type:"scooper"},
b),1<b.ar.length&&b.ai!==H(b)&&ya(b,"scooper"))}};var l=i,$a=function(a,b,c,d,h){if(0!==b.toLowerCase().indexOf("http:")&&0!==b.toLowerCase().indexOf("https:"))if("/"===b[0])b=window.location.protocol+"//"+window.location.host+b;else var f=window.location.pathname.split("/").slice(0,-1).join("/"),b=window.location.protocol+"//"+window.location.host+"/"+f+(f?"/":"")+b;"IFRAME"!==a.tagName&&"IMG"!==a.tagName&&(b=b.split("?")[0]);this.zr=k.zr;k.zr++;m[this.zr]=this;a[v]=this.zr;a[q]=!0;"undefined"===
typeof c&&(c=!1);"undefined"===typeof d&&(d={});k.i[I]=!0;this.aa=a;this.eg=[];this.ee={};a:{f=this.aa.parentNode;if(ca)f=l.i.a(f);else if(1===l.b.b)var e=l.h.b(this.aa),e=l.h.c(this.aa,e),f=e[e.length-1]||f;for(e=0;e<E;e++)if(f){if("forbes_modal_window"===f.id){f=!0;break a}f=f.parentNode}else break;f=!1}this.dw=f;this.ae=b;this.ag=d;this.ah=void 0;this.ai=0;this.an=this.am=this.al=this.ak=this.aj=void 0;this.ao=h;this.ap=c;this.ar=[];this.as=[];this.at=[];this.av=this.au=l.d.a.a.a;this.ax=l.d.a.b.a;
this.ay=l.d.a.c.a;this.ba=this.az=l.d.a.d.a;this.bb=l.d.a.e.a;this.by=this.bx=this.bw=this.bv=this.bu=this.bt=this.bs=this.br=this.bq=this.bp=this.bo=this.bm=this.bl=this.bk=this.bi=this.bh=this.bg=this.bf=this.be=this.bd=this.bc=void 0;this.ca=this.bz=!1;this.cb=this.cu=this.ct=void 0;this.cc={};this.cl=this.cm=this.cw=void 0;this.cn=0;this.ck=l.d.a.f.a;this.cd=!1;this.cy=void 0;this.dt=!1;this.db=void 0;this.ce=!1;b=l.h.b(this.aa);this.ef=l.h.d(this,b);this.cf=!1;this.af=Number(this.ef);this.ds=
this.ch=this.dr=this.cg=0;this.dq=this.bn=void 0;this.IR5={MIN:{x:void 0,y:void 0},MAX:{x:void 0,y:void 0},AREA:0};this.dx=this.dz=this.dy=this.ea=this.dm=0;this.KILLED=this.dd=!1;this.aq={};this.aq.g=0;this.aq[1]=0;this.aq[2]=0;this.aq[3]=0;this.aq[13]=0;this.aq[0]=0;this.aq[4]=0;this.aq[5]=0;this.aq[6]=0;this.aq[7]=0;this.aq[9]=0;this.aq[8]=0;this.aq[15]=0;this.aq[16]=0;this.aq[21]=0;this.aq[22]=0;this.aq[23]=0;this.an=za(a);l.g.b(this)},za=function(a){return"IFRAME"===a.tagName?2:"IMG"===a.tagName?
1:"EMBED"===a.tagName||"OBJECT"===a.tagName?0:3};l.g={};l.g.a=function(a,b,c,d,h,f){return f?(c=+new Date,m[f.zr]=f,a[v]=f.zr,a[q]=!0,f.aa=a,f.df=c,f.dg=c,f.ae=b,f.an=za(a),f.ag=d||{},l.e.a(f.aa),a={e:0},a.q=f.aq[0]++,l.f.a(f,a),l.h.a(f),f):new $a(a,b,c,d,h)};l.g.b=function(a){a.de=a.ao.startTime;var b=(new Date).getTime();a.df=b;a.dg=b;a.dd=!0;b={e:0};b.q=a.aq[0]++;l.f.a(a,b);l.e.a(a.aa);l.h.a(a)};var Aa=i;Aa.j={};Aa.j.a=function(a,b){var c;b.outerHTML?c=b.outerHTML:(c=document.createElement("div"),
c.appendChild(b.cloneNode(!0)),c=c.innerHTML);c=[/flashvars\s*=\s*(".*?"|'.*?')/i.exec(c),/name\s*=\s*["']flashvars["']\s*value\s*=\s*(".*?"|'.*?')/i.exec(c),/value\s*=\s*(".*?"|'.*?')\s*name\s*=\s*["']flashvars["']/i.exec(c),a];for(var d,h,f={},e=0;e<c.length;e++){if((d=c[e])&&"object"===typeof d&&d[1])d=d[1].replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/^"/g,"").replace(/"$/g,"").replace(/^'/g,"").replace(/'$/g,"");else if("string"===typeof d)d=d.split("?")[1];else continue;if(d){d=d.split("&");
for(var g=0;g<d.length;g++)h=d[g].split("="),2>h.length||"function"==h[0].slice(0,8)||(f[h[0]]=[h[1]])}}return f};var n=i,Ea=function(a,b,c,d){if(Ba&&"HEAD"===a.tagName){var h=a.parentNode;"HTML"===h.tagName&&(h=h.getElementsByTagName("body"),0<h.length&&(a=h[0]))}var f=da(a,b,c);if(f)return f;for(var h=Ca(a,Da),e=0;e<h.length;e++)if(f=h[e],f=n.i.b(f))if(f=da(f,b,c))return f;if(ca||d)if(d=d||n.i.a(a))if(f=da(d,b,c))return f;return!1},da=function(a,b,c){if(!a)return!1;if(null===n.a.b())for(var d=a.getElementsByTagName("embed"),
h=0;h<d.length;h++){var f=d[h];if(!("undefined"!==typeof f[q]&&!0===f[q]||-1!=f.id.indexOf("moatPx"))&&f.getAttribute("src")&&3<f.offsetHeight&&3<f.offsetWidth){var e=f.getAttribute("src"),h=n.j.a(e,f);return n.g.a(f,e,!1,h,b,c)}}f=a.getElementsByTagName("object");for(h=0;h<f.length;h++)if(3<f[h].offsetHeight&&3<f[h].offsetWidth&&(d=f[h],!("undefined"!==typeof d[q]&&!0===d[q]||-1!=d.id.indexOf("moatPx")))){for(h=0;h<d.children.length;h++)if("movie"===d.children[h].name||"Movie"===d.children[h].name){e=
d.children[h].value;for(a=0;a<d.children.length;a++){if(null===n.a.b()&&"EMBED"===d.children[a].tagName){f=d.children[a];if("undefined"!==typeof f[q]&&!0===f[q]||-1!=f.id.indexOf("moatPx"))continue;if(3<f.offsetHeight&&3<f.offsetWidth)return h=n.j.a(e,f),n.g.a(f,e,!1,h,b,c)}if("OBJECT"===d.children[a].tagName&&(f=d.children[a],3<f.offsetWidth&&3<f.offsetHeight))for(var g=0;g<f.children.length;g++){var i=f.children[g];if("movie"===i.name||"Movie"===i.name)return e=i.value,h=n.j.a(e,d),n.g.a(f,e,!1,
h,b,c)}}}d.object&&d.object.Movie?e=d.object.Movie:d.data&&-1!==d.data.indexOf("swf")&&(e=d.data);h=n.j.a(e,d);return n.g.a(d,e,!1,h,b,c)}e=Ca(a,Fa);if(e[0])return n.g.a(e[0],e[0].src,!1,void 0,b,c);e=a.getElementsByTagName("img");for(h=0;h<e.length;h++)if(d=e[h],!("undefined"!==typeof d[q]&&!0===d[q])){if(2999<d.offsetWidth*d.offsetHeight&&""!==d.src&&-1===document.location.href.indexOf(d.src))return n.g.a(d,d.getAttribute("src"),!1,void 0,b,c);J["1"]=d.offsetWidth+"x"+d.offsetHeight+":"+d.src}return!1},
Ca=function(a,b){for(var c=[],d=a.getElementsByTagName("iframe"),h,f=0;f<d.length;f++)if(h=d[f],!h[q]&&3<h.offsetHeight&&3<h.offsetWidth){var e=n.i.b(h)?!1:!0;(b===Fa&&e||b===Da&&!e)&&c.push(h)}return c};n.k={};var Fa=1,Da=2;n.k.a=function(a,b,c,d){var h=Ea(a,b,c,d),f=0;if(!h)var e=n.c.c(function(){f++;try{((h=Ea(a,b,c,d))||9<f)&&clearInterval(e)}catch(g){}},500)};var r=i,Ga=function(a){var b,c=[],d,h=r.a.a()?2048:7750,f={};d={};for(b in a)a.hasOwnProperty(b)&&("z"===b.slice(0,1)?-1===b.toLowerCase().indexOf("clicktag")&&
(f[b]=a[b]):1==a.e&&("x"===b||"y"===b||"c"===b)?d[b]=a[b].split("a"):c.push(encodeURIComponent(b)+"="+encodeURIComponent(a[b])));a=c.join("&");b=h-a.length;c=0;if("undefined"!==typeof d.x){for(var e=0,g=0;g<d.x.length;g++)if(e+=d.x[g].length+d.y[g].length+d.c[g].length,e<b)c++;else break;0<c&&(a+="&x="+d.x.slice(0,c-1).join("a"),a+="&y="+d.y.slice(0,c-1).join("a"),a+="&c="+d.c.slice(0,c-1).join("a"))}for(var i in f)f.hasOwnProperty(i)&&(d="&"+encodeURIComponent(i)+"="+encodeURIComponent(f[i]),d.length+
a.length<h&&(a+=d));return a},K=function(a,b,c){"undefined"!==typeof b&&(a[c]=b)};r.f={};r.f.b=function(a,b){b.startTime=(new Date).getTime();var c={};c.e=a;c.i=L;if(11===a){var d=[],e;for(e in J)J.hasOwnProperty(e)&&d.push(e+"="+J[e]);c.k=d.join("&")}c.e in Ha||(c.bq=r.b.b,c.f=Number(!t),t||(c.j=Ia),c.o=3,c.t=b.startTime,c.m=0,c.ar=Ja,c.ai="undefined"!==typeof k.z?k.z:"",c.q=k.m++,c.cb=w?1:0,c.cu=ea,"undefined"!==typeof b&&(c.d=b.clientAdvertiserID+":"+b.clientOrderID+":"+b.clientAdID+":"+b.clientCreativeID,
"undefined"!==typeof b.clientZone&&(c.bd=b.clientZone)),c.ac=1,c=Ga(c),k.yh.yi(c+"&cs=0",fa,Ka))};r.f.a=function(a,b){if(!a||!0===a.KILLED)return!1;if(!r.h.e(a))return r.h.f(a),!1;if(!("undefined"===typeof a.ao||a.ap))if(!(2===a.an&&(1===b.e||3===b.e))&&!(b.e in Ha)){b.ak=a.ae;a.ah&&(b.a=a.ah);var c=a.ag,d;for(d in c)c.hasOwnProperty(d)&&(r.a.a(),""!==d&&("undefined"!==typeof c[d]&&-1===d.indexOf("dvContains")&&-1===d.indexOf("indexOf"))&&(b["z"+d]=c[d]));0!==b.e&&r.h.g(a);a.dy>a.ea&&(a.ea=a.dy);
a.dx>a.dz&&(a.dz=a.dx);a.bn>a.ch&&(a.ch=a.bn);a.dq>a.ds&&(a.ds=a.dq);a.bi>a.bg&&(a.bg=a.bi);a.bm>a.bk&&(a.bk=a.bm);b.i=L;b.bq=r.b.b;b.g=a.aq.g++;b.h=0<a.aa.offsetHeight?a.aa.offsetHeight:a.aa.parentNode.offsetHeight;b.f=Number(!t);t||(b.j=Ia);b.o=3;b.t=a.de;b.cu=ea;b.m=b.m||r.a.c(a);b.ar=Ja;b.w=0<a.aa.offsetWidth?a.aa.offsetWidth:a.aa.parentNode.offsetWidth;b.cb=w?1:0;b.aj=t?a.af:0;b.ag="undefined"!==typeof a.ch?a.ch:"";b.an="undefined"!==typeof a.bn?a.bn:"";b.bw="undefined"!==typeof a.ds?a.ds:"";
b.bx="undefined"!==typeof a.dq?a.dq:"";b.ch=Number(!1);K(b,a.eh,"cw");K(b,a.ei,"cx");K(b,a.ej,"cy");K(b,a.ek,"cz");b.ah=a.ea;b.am=a.dy;b.bu=a.dz;b.cd=a.dx;b.ai="undefined"!==typeof k.z?k.z:"";b.ap="undefined"!==typeof a.cb?a.cb:"";b.ax="undefined"!==typeof a.bg?a.bg:"";b.ay="undefined"!==typeof a.bi?a.bi:"";b.az="undefined"!==typeof a.bk?a.bk:"";b.ba="undefined"!==typeof a.bm?a.bm:"";b.aw="undefined"!==typeof a.bc?a.bc:"";b.bg="undefined"!==typeof a.bd?a.bd:"";b.be="undefined"!==typeof a.be?a.be:
"";b.bc="undefined"!==typeof a.bw?a.bw:"";b.bf="undefined"!==typeof a.by?a.by:"";b.bh="undefined"!==typeof a.bx?a.bx:"";b.bz="undefined"!==typeof a.cu?a.cu:"";b.cl=Math.round(100*a.IR5.AREA/(b.w*b.h));b.as=Number(a.cd);b.ck=a.cy||"";b.cc=Number(a.dt);b.ci=a.db||"";b.au=a.aq[2]-1;b.av=a.aq[3]-1;b.by=a.aq[23]-1;b.at=a.dm;c=a.ao.clientAdvertiserID+":"+a.ao.clientOrderID+":"+a.ao.clientAdID+":"+a.ao.clientCreativeID;b.bd=a.ao.clientZone;b.d=c;b.ab=a.an;b.ac=1;a.dy=a.ea;a.bn=a.ch;a.dq=a.ds;a.dx=a.dz;a.bi=
a.bg;a.bm=a.bk;c=Ga(b);k.yh.yi(c+"&cs=0",fa,Ka)}};r.f.c=function(a,b){if(!(2===a.an&&(1===b.e||3===b.e))){var c=ab;(new Image(1,1)).src=c}};r.f.d=function(a){var b={e:16};b.q=a.aq[16]++;r.f.a(a,b)};var j=i,La=function(a){var b=p,c=b.document.documentElement,d=b.document.body;return"left"===a?b.pageXOffset||c&&c.scrollLeft||d&&d.scrollLeft:b.pageYOffset||c&&c.scrollTop||d&&d.scrollTop},Ma=function(a){for(var b=0,c=0,d,e,f=0;f<E;f++){var g=a&&a.offsetParent;if(g&&g!=a)d=a.offsetLeft||0,e=a.offsetTop||
0,j.b.c&&("TABLE"===a.tagName&&"inline"===a.style.display)&&(e=0),b+=d,c+=e,a=g;else break}return{left:b,top:c}},Na=function(){if("undefined"===typeof k.z){k.z=new Date-ea;a:{var a=void 0,b;for(b in m)if(m.hasOwnProperty(b)&&(a=m[b])&&!(a.ap||"undefined"===typeof a.ao)){if(a.ce)break a;var c={e:4};c.q=a.aq[4]++;c.ai=k.z;j.f.a(a,c);a.ce=!0}j.c.b(p,"scroll",Na,"onScroll")}}},ga=function(){var a,b;b=p;"undefined"!==typeof b.innerWidth?(a=b.innerWidth,b=b.innerHeight):"undefined"!==typeof b.document.documentElement&&
"undefined"!==typeof b.document.documentElement.clientWidth&&0!==b.document.documentElement.clientWidth?(a=b.document.documentElement.clientWidth,b=b.document.documentElement.clientHeight):(a=b.document.getElementsByTagName("body")[0].clientWidth,b=b.document.getElementsByTagName("body")[0].clientHeight);return{x:a,y:b}},ha=function(a,b){var c=j.c.d(function(){var c=b,e={e:9};e.q=a.aq[9]++;j.f.a(a,e);c*=2;c<bb&&!1===a.KILLED&&ha(a,c)},b);a.cc=c;a.cw=b};j.h={};var bb=18E5;j.h.h=function(){j.c.a(p,
"scroll",Na,"onScroll");try{"Microsoft Internet Explorer"===navigator.appName?(j.c.a(p.document,"focusout",function(){k.yd()}),j.c.a(p.document,"focusin",function(){k.ye()})):(j.c.a(p,"blur",function(){k.yd()}),j.c.a(p,"focus",function(){k.ye()}))}catch(a){}};j.h.e=function(a,b){try{var c=a.aa,b=b||j.h.b(c);return!c||!c.parentNode||!b?!1:!0}catch(d){return!1}};j.h.e.a=0;j.h.g=function(){var a,b,c,d;for(d in m)if(m.hasOwnProperty(d)){a=m[d];b=a.aa;c=j.h.b(b);var e=(new Date).getTime();if(1E3<e-j.h.e.a&&
(j.h.e.a=e,!j.h.e(a,c))){j.h.f(a);continue}t&&(c&&c!=c.parent)&&(a.eg=j.h.c(b,c));b=a;if(j.h.j(b))b.df=+new Date;else{var e=0,f=+new Date,e=f-b.df;b.df=f;w&&1E3<e&&(e=200);b.dz+=e;k.v&&(b.ea+=e)}"undefined"!==typeof a.ao&&t&&(j.h.j(a)?(a.cf=!1,a.cg=0,a.dr=0,a.dg=+new Date):(a.ef=j.h.d(a,c),c=+new Date,b=c-a.dg,a.dg=c,w&&1E3<b&&(b=200),a.ef?a.cf?(k.v&&(a.cg+=b,a.ch+=b),a.dr+=b,a.ds+=b):a.cf=!0:(a.cf=!1,a.cg=0,a.dr=0),k.v||(a.cg=0),1E3<=a.cg&&(!a.cd&&t)&&(a.cd=!0,a.cy=a.ch,c=a,b=ga(),c.eh=b.x,c.ei=
b.y,j.h.i(a)),1E3<=a.dr&&(!a.dt&&t)&&(a.dt=!0,a.db=a.ds,c=a,b=ga(),c.ej=b.x,c.ek=b.y,4E3<a.cw&&j.h.i(a))))}};j.h.f=function(a){clearTimeout(a.cc);a.KILLED=!0;delete m[a.zr]};j.h.d=function(a){var b,c=a.aa,d=c.offsetWidth,c=c.offsetHeight,e=ga();b=Ma(a.aa);var f=b.left,g=b.top;a.ee.x=f;a.ee.y=g;for(var i=0;i<a.eg.length;i++)b=Ma(a.eg[i]),f+=b.left,g+=b.top;a=f;b=g;i=La("top");f=i+e.y;g=La("left");e=e.x+g;i=Math.max(0,Math.min(i-b,c));b=Math.max(0,Math.min(b+parseInt(c,10)-f,c));b=parseInt(c,10)-i-
b;g=Math.max(0,Math.min(g-a,d));a=Math.max(0,Math.min(a+parseInt(d,10)-e,d));a=parseInt(d,10)-g-a;return 0.5<=b*a/(c*d)};j.h.i=function(a){if(!(4E3>=a.cw)){clearTimeout(a.cc);ha(a,1E3);var b={e:5};b.q=a.aq[5]++;j.f.a(a,b)}};j.h.j=function(a){var b=p.document.getElementById("forbes_modal_window");return b&&b.className.match(/\bactive\b/)&&!a.dw};j.h.b=function(a){try{var b=a&&a.ownerDocument;return b&&(b.defaultView||b.parentWindow)}catch(c){return!1}};j.h.c=function(a,b){for(var c=[],d,e=0;e<E;e++)if(b!=
b.parent){if(d=j.i.c(a,b))c.push(d);else break;b=b.parent;a=d}else break;return c};j.h.k=function(){for(var a in m)if(m.hasOwnProperty(a)){var b=m[a];if(b){var c={e:21};c.q=b.aq[21]++;j.f.a(b,c)}}};j.h.a=function(a){ha(a,1E3)};var u=i;u.i={};u.i.b=function(a){try{if(a.moatHostileIframe)return null;if(a.src&&(a.src.slice&&"http"===a.src.slice(0,4))&&u.a.d(a.src)!=u.a.d(p.location.toString()))return a.moatHostileIframe=!0,null;var b=a&&(a.contentDocument||a.contentWindow&&a.contentWindow.document);
if(b&&"string"===typeof b.location.toString())return b;a.moatHostileIframe=!0;return null}catch(c){return a.moatHostileIframe=!0,null}};u.i.d=function(a){try{var b=typeof a.location.toString,c=typeof a.document;return"undefined"===b||"undefined"===c||"unknown"===b||"unknown"===c}catch(d){return!0}};u.i.c=function(a,b){return(b=b||u.h.b(a))&&b.frameElement};u.i.a=function(a){return(a=u.i.c(a))?a.parentNode:null};var F=i;F.l={};F.l.a=function(a){a[F.b.a]=a[F.b.a]||{zs:!1,zr:0,h:0,m:0,i:{}};var b=a[F.b.a];
"undefined"===typeof b.v&&(b.v=t?"undefined"!==typeof a.document.hasFocus&&!w?a.document.hasFocus():!0:!0);b.ye||(b.ye=function(){this.v=!0});b.yd||(b.yd=function(){this.v=!1})};var M=i,Pa=function(a,b,c){a&&N.push({qs:a,jsd:b,fld:c});0===C&&0<N.length&&(C+=1,a=N.shift(),a.fld&&ia&&x&&x.sendMessage?x.sendMessage(a):Oa(a))},Oa=function(a){var b=new O.Image(1,1);b.toSend=a;b.onerror=function(){var a=this.toSend;ja+=1;2>ja&&Oa(a)};b.onload=function(){ka()};b.src=a.jsd+"/pixel.gif?"+a.qs},ka=function(){0<
C&&(C-=1,Pa())},N=[],C=0,ja=0,P=(new Date).getTime(),x=!1,ia=!1,O;M.m={};M.m.a=function(a){if(!k.yh){k.yh={};var b=k.yh;O=a;b.yi=function(a,b,e){Pa(a,b,e)};b.yk=function(a){x=!0;var b=M.b.a+".yh.",e={};e.start=P;e.src="http://js.moatads.com/swf/MessageSenderV2.swf?"+P;e.flashVars="r="+b+"zb&s="+b+"zc&e="+b+"zd&td="+a;return e};b.yj=function(){var a;if(a=!1===x)if(a=!M.a.f())a=/Firefox\/(\d+)/.exec(navigator.userAgent),a=!(a&&14<parseInt(a[1],10));return a};b.zb=function(){try{if(!0===x){var a=O.document.getElementById("moatMessageSender"+
P);a&&!a.sendMessage&&(a=O.document.getElementById("moatMessageSenderEmbed"+P));a&&a.sendMessage&&(ia=!0,x=a)}}catch(b){}};b.zc=function(){try{ka()}catch(a){}};b.zd=function(a){try{ia=!1,a&&a.jsd&&N.push(a),ka()}catch(b){}}}};var Q=i,R=function(a,b){try{return a.exec(b)[1]}catch(c){return"-"}};Q.n={};Q.n.a=function(a){try{var b=a.className;a.getAttribute("src");var c=b.split("\n").join(" ");if(-1!==b.indexOf("moatfooter"))return!1;var b="undefined",d="",d=a.parentNode.innerHTML,e=/http:\/\/ad.doubleclick.net\/.*?\/.*?\/(.*?);/.exec(d);
null!==e&&0<e.length&&(b=e[1]);var f=R(/moatClientAdvertiserID=(.*?)($| )/,c),g=R(/moatClientOrderID=(.*?)($| )/,c),i=R(/moatClientAdID=(.*?)($| )/,c),j=R(/moatClientCreativeID=(.*?)($| )/,c);return{clientZone:b,clientAdvertiserID:f,clientOrderID:g,clientAdID:i,clientCreativeID:j}}catch(k){return{clientCampaignID:"",clientAdID:""}}};Q.n.b=function(a){try{var b=/http:\/\/ad.doubleclick.net\/.*?\/.*?\/(.*?);/.exec(a.innerHTML);0<b.length&&(zone=b[1]);return zone}catch(c){}};Q.n.c=function(a){return(a=
unescape(unescape(unescape(unescape(a.innerHTML)))).match(/~fdr=(\d*).*?\/.*?;(\d*)/))?{adid:a&&a[1]||"-",cid:a&&a[2]||"-"}:!1};if(i.a.g())return!1;try{var cb="http://v3.moatads.com/pixel.gif?e=12&d=data%3Adata%3Adata%3Adata&i="+escape("FORBES2")+"&ac=1&k="+escape("")+"&ar="+escape("38e1812-clean")+"&j="+escape(document.referrer)+"&cs="+(new Date).getTime();(new Image(1,1)).src=cb}catch(eb){}var L="FORBES2",Ra="2be987",Ja="38e1812-clean",ea=+new Date,Ia=document.referrer,Ba=window!=window.parent,
q="moatFound"+L,v="__moat__"+L,ab="",Ka="v3.moatads.com",fa;if(i.a.h())return!1;fa="http://v3.moatads.com";var Qa=i.i.d(window.parent),ca=Ba&&!Qa,t=Qa?!1:!i.i.d(window.top),p;p=t?window.top:ca?window.parent:window;i.a.d(t?p.location.href:p.document.referrer);var S=i.a.i();if(!S)return!1;i.a.j(S);var w=i.a.f(),I=0,Y,Z,J={},E=50,y=[],T=[],U=[],m={},Ha={15:"",12:"",6:"",7:""};i.l.a(p);var k=p[i.b.a];window[i.b.a]=k;i.m.a(p);var G=void 0,I=k.h;k.h++;k.i[I]=!1;!1===k.zs&&(i.h.h(),k.zs=!0);i.c.c(function(){i.h.g()},
200);i.c.a(p,"beforeunload",function(){i.h.k()},!1);i.c.c(i.e.b,100);i.a.a()&&i.c.d(la,3E5);"undefined"===typeof G&&(G=i.n.a(S));var db=S.parentNode;i.c.d(function(){!1===k.i[I]&&(i.f.b(11,G),la())},1E4);i.f.b(17,G);i.k.a(db,G)})()}catch(e$$28){var msg=e$$28.name+" in closure: "+e$$28.message+", stack="+e$$28.stack;try{var pxSrc="http://v3.moatads.com/pixel.gif?e=24&d=data%3Adata%3Adata%3Adata&i="+escape("FORBES2")+"&ac=1&k="+escape(msg)+"&ar="+escape("38e1812-clean")+"&j="+escape(document.referrer)+
"&cs="+(new Date).getTime(),px=new Image(1,1);px.src=pxSrc}catch(e$$29){}};
