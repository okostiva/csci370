if(typeof(_mNDetails)=='undefined'){_mNDetails={};_mNDetails['idf']=[];_mNDetails['locHash']={};}var _mN={_dUrl:'http://mycdn.media.net',_fd:'' || window.medianet_fd || '',_size:''?'':(window.medianet_width && window.medianet_height?window.medianet_width+'x'+window.medianet_height:''),_crid:'' || window.medianet_crid || '',_cid:'8CU2T3HV4' || window.medianet_cid || '',_acid:'',_chid:'',_chnm:'',_pid:'',_tpid:'',_rcf:'',_v:'1',_hint:"",_ctxid:window.medianet_ctxtid?window.medianet_ctxtid:'',_ctxcat:window.medianet_ctxtcat?window.medianet_ctxtcat:'',_kurl:'',_rUrl:'',_rfUrl:'',_ccTVal:2000,_sFrmURL:'http://static.media.net/index.php?',_isHthChk:'0',_hthChkURL:'http://searchl.media.net/__media__/js/ping.php?',_rtd:'',_vImp:1,_l1Imp: 1,_mNVI:_mN&&_mN._mNVI,_c:"",_ip2c:"US",_ip2sc:"", _nb: "1",_dcUrl: "http://search.keywordblocks.com", _trgl: "1", _insl: "0"};_mN._custom={makeMainRequest : function () {
	return _mN && _mN._crid && _mN._crid == '115370245'?true:false;
},
getPublisherUrlUnConventionalWay : function ()
{
	var url = _mN._util.getPublisherUrlConventionalWay();
	url = url.replace(/#.*/, '');
	return url;
}};_mN._util={grct:function(keywordRef){return '';}};
(function(c){if(_mN&&_mN._mNVI&&typeof _mN._mNVI.init=="function"){return}var a=c.document,e=a.documentElement||false,b=a.body||false,d={req:[]};d.eventLib={addEvent:function(h,g,f){if(h.addEventListener){h.addEventListener(g,f,false)}else{if(h.attachEvent){h.attachEvent("on"+g,f)}}h=null},removeEvent:function(h,g,f){if(h.removeEventListener){h.removeEventListener(g,f)}else{if(h.detachEvent){h.detachEvent("on"+g,f)}}h=null}};d.init=function(o){var l={c:o,p:{},rp:{},d:{}},h={},g,f={},i={pos:function(){var q=l.c;l.p.X=0;l.p.Y=0;if(q.offsetParent){do{l.p.X+=q.offsetLeft;l.p.Y+=q.offsetTop}while(q=q.offsetParent)}},scroll:function(){var r=(c.pageYOffset&&{X:c.pageXOffset,Y:c.pageYOffset})||{},s=(e&&{X:e.scrollLeft,Y:e.scrollTop})||{},q=(b&&{X:b.scrollLeft,Y:b.scrollTop})||{};return{X:Math.max(r.X||0,s.X||0,q.X||0),Y:Math.max(r.Y||0,s.Y||0,q.Y||0)}},rpos:function(){var q=this.scroll();l.rp.X=l.p.X-q.X;l.rp.Y=l.p.Y-q.Y},vpSize:function(){h.X=c.innerWidth||e&&e.clientWidth||b&&b.clientWidth;h.Y=c.innerHeight||e&&e.clientHeight||b&&b.clientHeight},dim:function(){var q=l.c;l.d.X=q.clientWidth;l.d.Y=q.clientHeight},throttle:function(r,s){var q=new Date().getTime();return function(){var t=new Date().getTime();if((t-q)>=r){q=t;s.apply(null,arguments)}}}},n=function(){var q=/(opera)(?:.*version)?[ \/]([\w.]+)/.test(navigator.userAgent.toLowerCase());if(l.c.src&&(l.c.src.indexOf("fcmdynet")!=-1||l.c.src.indexOf("mediamain")!=-1)){if(!q){(l.c.contentWindow||l.c.contentDocument).location.replace(l.c.src+"#done")}}else{(l.c.contentWindow||l.c.contentDocument)._mNHC.log.vi()}d.eventLib.removeEvent(c,"scroll",f.scroll);d.eventLib.removeEvent(c,"resize",f.resize)},k=function(){if(l.rp.X+l.d.X>=0&&l.rp.Y+l.d.Y>=0&&l.rp.X<=h.X&&l.rp.Y<=h.Y){var r={X:l.rp.X+l.d.X>h.X?h.X:(l.rp.X+l.d.X),Y:l.rp.Y+l.d.Y>h.Y?h.Y:(l.rp.Y+l.d.Y)};var q={x:l.rp.X>=0?((h.X-l.rp.X)/l.d.X):(r.X/l.d.X),y:l.rp.Y>=0?((h.Y-l.rp.Y)/l.d.Y):(r.Y/l.d.Y)};if(q.x!==false&&q.y!==false){q.x=Math.floor(q.x)!=0?100:Math.ceil(q.x*100);q.y=Math.floor(q.y)!=0?100:Math.ceil(q.y*100);if(q.x>=50&&q.y>=50){return true}else{return false}}}else{return false}},j=function(){if(percent=k()){if(g==undefined){g=setTimeout(n,500)}}else{if(g!==undefined){clearTimeout(g);g=undefined}}},m=function(){i.rpos();j()},p=function(){i.vpSize();i.pos();i.rpos();j()};this.correlator=function(){i.pos();i.dim();i.vpSize();i.rpos();f.scroll=i.throttle(10,m);f.resize=i.throttle(10,p);d.eventLib.addEvent(c,"scroll",f.scroll);d.eventLib.addEvent(c,"resize",f.resize);j()}};d.process=function(){d.eventLib.removeEvent(c,"load",d.process);var h,g=0,f=d.req.length;for(;g<f;g++){h=new d.init(d.req[g]);h.correlator()}};d.isReady=function(){if(/interactive|complete|loaded/.test(a.readyState)){return true}d.eventLib.addEvent(a,"DOMContentLoaded",d.process);d.eventLib.addEvent(c,"load",d.process);return false};d.trigger=function(f){if(d.isReady()){var g=new d.init(f);g.correlator()}else{d.req.push(f)}};d.triggerID=function(f){d.trigger(a.getElementById(f))};_mN._mNVI=d})(window);var _mN_Idf=_mN._crid,_mN_ctrM="ctrMain_"+_mN._crid;if(document.getElementById("_mN_dy_"+_mN_Idf)){var _mN_ctr=_mNDetails[_mN_ctrM]?(parseInt(_mNDetails[_mN_ctrM])+1):1;_mN_Idf+="_"+_mN_ctr;_mNDetails[_mN_ctrM]=_mN_ctr}_mNDetails[_mN_Idf]=(function(P,j){function A(Z){if(Z==undefined||Z==""){return false}return(b.test(Z))}function Q(Z){if(Z.search("^(http(s)?%253A%252F%252F)")!=-1){Z=decodeURIComponent(Z)}else{if(Z.search("^(http(s)?://)")!=-1){Z=encodeURIComponent(Z)}else{}}return Z}function I(ac,ab,Z){if(ac==undefined){return Z}ac=ac.replace(K,"");if(ab==true){try{if(ac.toLowerCase().indexOf("http")==-1){ac=""}else{ac=Q(ac)}}catch(aa){}}if(ac==""){ac=Z}return ac}function M(){var Z="",ad=_mN._dUrl;try{if(typeof(_mN._custom.getPublisherUrlUnConventionalWay)=="function"){Z=_mN._custom.getPublisherUrlUnConventionalWay()}if(Z.length==0){Z=T();if(_mN._fd!=undefined&&_mN._fd!=""){var aa=new RegExp("^http(?:s)?://([^/]+)","im");var ac=Z.match(aa);if(ac!=null){orgUrl=ac[1].toString();Z=Z.replace(orgUrl,_mN._fd)}else{Z="http://"+_mN._fd}}}if(Z.indexOf("http://ad.yieldmanager.com/iframe3")!=-1){Z=G(P.location.href)}if(Z.length==0){Z=ad}}catch(ab){Z=ad}return Z}function G(ad){var aa="";try{if(ad.length>0&&ad.indexOf("http://ad.yieldmanager.com/iframe3")!=-1){var Z="u%3D";var ac="%26";var ab=ad.indexOf(Z);if(ab!=-1){ab=ab+Z.length;var af=ad.indexOf("%26",ab);if(af!=-1){ad=decodeURIComponent(decodeURIComponent(ad.substring(ab,af)).replace("/+/"," ")).replace("/+/"," ");aa=ad}}}}catch(ae){}return aa}function T(){var Z=P.location.href,aj="",ah="",ai="",ag=false,ab=_mN._dUrl;try{if(P.top!=self){ag=true}if(P.top.location.href){aj=P.top.location.href}}catch(af){ag=true}if(ag){if(j.referrer!=undefined){ai=j.referrer}try{if(parent.document.referrer!=undefined){if(ai==undefined||A(ai)){ah=parent.document.referrer}}}catch(ac){ah=""}}if(aj!=""){return aj}else{if(ah!=""&&!A(ah)){return ah}else{if(ai!=""&&A(Z)&&!A(ai)){return ai}else{if(Z!=""&&!A(Z)){return Z}else{if(Z.indexOf("http://ad.yieldmanager.com/iframe3")!=-1){var aa=Z.indexOf(",http");if(aa>1){var ae=Z.indexOf(",",(aa+4))-1;var ad=Z.substr(aa+1,(ae-aa));return decodeURIComponent(ad)}}else{return ab}}}}}}_mN._util.getPublisherUrlConventionalWay=T;function x(){var Z="",aa=false;try{if(typeof(_mN._custom.getReferrerUrlUnConventionalWay)=="function"){return _mN._custom.getReferrerUrlUnConventionalWay()}if(P.top!=self){aa=true}}catch(ab){aa=true}if(!aa&&j.referrer!=undefined&&!A(j.referrer)){Z=j.referrer}else{if(aa&&j.referrer!=undefined&&!A(j.referrer)){try{if(P.parent.document.referrer!=undefined&&!A(P.parent.document.referrer)){Z=P.parent.document.referrer}}catch(ab){}}}return Z}function y(Z,aa){if(aa==undefined||aa==null||aa==""){return""}return"&"+Z+"="+aa}function O(ab){var Z="";for(var aa in ab){Z=Z+y(aa,ab[aa])}return Z}function h(){if(typeof(_mN._custom.getCurrentPageUrlFromMacro)=="function"){return _mN._custom.getCurrentPageUrlFromMacro()}return P.medianet_requrl?P.medianet_requrl:_mN._rUrl}function V(){if(typeof(_mN._custom.getRefererUrlFromMacro)=="function"){return _mN._custom.getRefererUrlFromMacro()}return P.medianet_refurl?P.medianet_refurl:_mN._rfUrl}function l(){if(typeof(_mN._custom.getKeywordRefererFromMacro)=="function"){return _mN._custom.getKeywordRefererFromMacro()}return""}function m(ae){var ae=decodeURIComponent(ae);if(ae.toLowerCase().indexOf(".yahoo.")!=-1){var af=new RegExp(/;[^\?]*/);ae=ae.replace(af,"");ae=ae.replace(/#_=_/,"")}var ac=ae.indexOf("?"),ah=new RegExp(/fb_|utm_|bcmt|action_object_map|action_type_map|action_ref_map|action_action_map/);if(ac>0&&ah.test(ae)){var ad="",ab=ae.indexOf("#");if(ab>0){ad=ae.substring(ab);ae=ae.substring(0,ab)}var Z=ae.substring(ac+1).split("&"),aa=0,ag=Z.length,ae=ae.substring(0,ac+1);for(;aa<ag;aa++){if(Z[aa]!=""&&Z[aa].substring(0,18)!="action_object_map="&&Z[aa].substring(0,16)!="action_type_map="&&Z[aa].substring(0,15)!="action_ref_map="&&Z[aa].substring(0,18)!="action_action_map="&&Z[aa].substring(0,3)!="fb_"&&Z[aa].substring(0,4)!="utm_"&&Z[aa].substring(0,5)!="code="&&Z[aa].substring(0,4)!="bcmt"){ae+="&"+Z[aa]}}ae+=ad;if(ae.substr(-1,1)=="?"){ae=ae.substr(0,ae.length-1)}}ae=encodeURIComponent(ae);return ae}function X(ab){var aa,Z,ad={},ac,ae;aa=ab.indexOf("?");if(aa<0){return ad}Z=ab.substring(aa+1).split("&");for(ac=Z.length;ac--;){ae=Z[ac].split("=");ad[ae[0]]=ae[1]}return ad}function U(Z){this.url=Z;this.map=X(this.url)}U.prototype.getParam=function(Z){return this.map[Z]||""};U.prototype.getDecodedParam=function(aa){var Z=this.map[aa];return(Z&&decodeURIComponent(Z))||""};_mN._util.getParamValueFromUrl=U;function o(ab){ab=decodeURIComponent(ab);var Z=new RegExp("^http(?:s)?://([^/]+)","im");var aa=ab.match(Z);if(aa!=null){return aa[1].toString()}return""}function Y(aa){if(aa==""){return""}var ae={".google.":"q","search.yahoo.com":"p","bing.com":"q","ask.com":"q",".aol.":"query"},ag=o(aa).toLowerCase(),af="",ac="",Z="",ah=["q","p","query","search_query","search"],ai,ad,ab;aa=decodeURIComponent(aa.replace("#","&"));ab=new U(aa);if(ag!=""){af="http://"+ag}for(ai in ae){Z=ae[ai];if(ag.indexOf(ai)!=-1){ac=ab.getParam(Z);if(ac!=""){v=ac;return encodeURIComponent(af+="/?"+Z+"="+ac)}}}for(ai=0,ad=ah.length;ac==""&&ai<ad;ai++){Z=ah[ai];ac=ab.getParam(Z);if(ac){v=ac;return encodeURIComponent(af+="/?"+Z+"="+ac)}}return encodeURIComponent(af)}function i(aa){var Z;try{if(typeof P.mads!=="undefined"){return Z}var ab=P.navigator.userAgent;if(ab!=""&&ab!=undefined&&N()==false){if(/(iPhone)/.test(ab)){if(/chrome/i.test(ab)||/CriOS/i.test(ab)){Z=""}else{if(/os 5_[1-9]/i.test(ab)||/os [6-9]_[0-9]/i.test(ab)){Z="1"}}}else{if(/(iPad)/.test(ab)){if(/chrome/i.test(ab)||/CriOS/i.test(ab)){Z=""}else{if(/OS [3-6]_.*Safari/.test(ab)){Z="3"}}}else{if(/Android/.test(ab)){if(/Android 4.0(.)*Chrome/i.test(ab)){Z="2"}else{if((/Android 4.[1-9]/.test(ab))||(/Android [5-9].[0-9]/.test(ab))){Z="2"}}}}}}}catch(ac){Z=""}return Z}function p(){var Z;try{if(typeof P._mNIntMAds!=="undefined"){return Z}var aa=P.navigator.userAgent;if(aa!=""&&aa!=undefined&&N()==false){if(/(iPhone)/.test(aa)){if(/os 5_[1-9]/i.test(aa)||/os [6-9]_[0-9]/i.test(aa)){Z="1"}}else{if(/(iPad)/.test(aa)){if(/OS [3-9]_.*/.test(aa)){Z="3"}}}}}catch(ab){Z=""}return Z}function N(){var Z=false;try{if(typeof(P.top)=="object"&&typeof(P)=="object"){if(P.top!=P){Z=true}}else{Z=-1}}catch(aa){Z=true}return Z}function J(){var Z=[];if(P.medianet_hint&&P.medianet_hint.toLowerCase().indexOf("[[context_keyword]]")==-1&&P.medianet_hint.toLowerCase().indexOf("${hint}")==-1&&P.medianet_hint.toLowerCase()!="none"){Z.push(decodeURIComponent(P.medianet_hint))}if(P.medianet_ctxtkeywords!=undefined){Z.push(P.medianet_ctxtkeywords)}return encodeURIComponent(Z.join(","))}function H(Z){if(e.crid=="812074803"&&Z.toLowerCase()=="600x300"){Z="600x320"}if(e.crid=="517673171"&&Z.toLowerCase()=="630x250"){Z="310x317"}return Z}function R(Z){if(i(Z)||("7CU4T6Q35 7CU7MDFV2 7CUO15X47 7CUUBF611 8CU27450H 8CU2EAUV5 8CUBO0768 8CUJE2SU6 8CUPJF2U8 8CUUX9ZP8 8CUZ394H4 7CU4FH88T 7CU9T1TW8 8CU5XDJ79 8CUE1A027 8CUDRT231 8CU6627WN 8CU6627WN 7CUKB1GX9 8CUG4K3E2 8CU2EAUV5 8CUUX9ZP8 7CUKB1GX10 7CU4FH88T 7CUC9HZW5 8CUE1A027 8CUVHMXAE 7CUVINY5U 7CU9T1TW8 7CUO15X47 7CUUBF611 8CUJ144F7 8CUPJF2U8").indexOf(_mN._cid)!=-1){_mN._v=0}}function W(){if(_mN._custom.getCustomPublisherHint){return _mN._custom.getCustomPublisherHint()}return I(J(),false,_mN._hint)}function C(Z){if(typeof(_mNDetails.locHash[_mN._crid])==="undefined"){_mNDetails.locHash[_mN._crid]=""}_mNDetails.locHash[_mN._crid]+=Z}_mN._util.updateLocHash=C;function s(Z,aa){e[Z]=aa}_mN._util.addExtraParam=s;function f(aa,Z){return Math.floor(Math.random()*(Z-aa+1)+aa)}function n(){if(_mN._crid=="395512578"&&_mN._cid=="8CUD8U4R7"){if(navigator.userAgent.match(/(safari)/i)){if(f(1,100)<34){return false}return true}}return false}var K=new RegExp(/\$\{SOURCEURLENC\}|\{pageurl\}|\{SOURCE_URL_ENC\}|\$\{BUYER_LINE_ITEM_ID\}|\$\{CLICKURLENC\}|\$\{PRICE_CENTS\}|\$\{PRICING_TYPE\}|\$\{SECTION_CODE\}|\$\{SITE_CODE\}|\$\{PUBLISHERID\}|\$\{SITEID\}|\$\{SECTIONID\}|\$\{VURLID\}|\[admeld_url\]/g),b=new RegExp(/\/advertpro|fastclick\.net|openx\.com|rubiconproject\.com|yieldmanager|doubleclick|\/adi\/|\/ad\/|ad_terra|banner\.php|\/web_banners\/|admeld\.com|atdmt\.com|247realmedia\.com|\/ads\.|\/ad\.|\/ad\?|\/ads\/|adsframe|medianet\.php|zedo\.com|\/adsframe\/|a1\.interclick\.com|otcads\.com|delivery\.huddler\.com|adserver\.duetads\.com|anchorfree\.com|rss2search\.com|ib\.adnxs\.com|delivery\/|\.microsoftadvertisingexchange\./i),e={},E,z,k=_mN_Idf,S,u=navigator.userAgent.toLowerCase(),d=/(opera)(?:.*version)?[ \/]([\w.]+)/.test(u),r="756595676 471874612".indexOf(_mN._crid)!=-1,t=/iphone|ipad|android|symbian|blackberry/.test(u),v="";function F(){var ab=encodeURIComponent(x()),aa=encodeURIComponent(M()),Z=I(V(),true,ab),ae=N(),ad=m(I(h(),true,aa)),ac;R(decodeURIComponent(ad));if(ae==true){S=(typeof(P.location)=="object"&&encodeURIComponent(P.location.href))||"nohref"}else{if(ae==-1){S="noObject"}else{S="valid"}}e.cid=_mN._cid;e.crid=_mN._crid;e.size=H(_mN._size);e.cc=_mN._ip2c.length==2?_mN._ip2c:"US";e.sc=_mN._ip2sc;e.acid=_mN._acid;e.chid=_mN._chid;e.chnm=I(P.medianet_chnm,false,_mN._chnm);e.ctxid=_mN._ctxid;e.ctxcat=_mN._ctxcat;e.pid=_mN._pid;e.tpid=_mN._tpid;e.rcf=_mN._rcf;e.q=W();e.staticIframe=_mN._v==1?1:"";e.vif=(ae==true||(d&&_mN._nb!=1)||!_mN._vImp)?0:ae==-1?2:1;e.ms=_mN._v==1||(_mN._insl&&_mN._insl==1)?"":i(ad);e.mis=_mN._v==1?"":(_mN._insl&&_mN._insl==1?p():"");e.requrl=ad;e.kwrf=_mN._tpid=="TB55J5R"?m(aa):Z==ad?"":(I(l(),true,Y(Z)));e.kurl=Q(I(P.medianet_kurl,true,_mN._kurl));e.CAMP_ID=I(P.medianet_campid,false,"");e.PRICE_CENTS=I(P.medianet_pricecents,false,"");e.c=_mN._c;if(_mN._custom.getCustomCategory){e.mct=encodeURIComponent(_mN._custom.getCustomCategory())||""}if(typeof _mN._custom.overridePublisherUrl=="function"){e.requrl=_mN._custom.overridePublisherUrl(ad)}if(typeof _mN._custom.overrideRefUrl=="function"){e.kwrf=_mN._custom.overrideRefUrl(e.kwrf)}if(_mN._rtd==1){e.rtd=1;e.n_req_url=aa;e.n_ref_url=aa==ab?"":ab}if(typeof(_mN._custom.getCustomExtraParam)=="function"){_mN._custom.getCustomExtraParam()}C(["&sttm=",new Date().getTime()].join(""))}function q(){var ab;F();var Z=_mN._v==1?"html":"js";var aa=_mN._dUrl+"/fcmdynet."+Z+"?";ab=aa+O(e);return ab}function a(af,ab,aa,ae){var ad={},ac={},Z=ae;if(_mNDetails.locHash&&_mNDetails.locHash[_mN._crid]){Z+="#"+_mNDetails.locHash[_mN._crid]}ad.marginwidth="0";ad.marginheight="0";ad.id=af;ad.scrolling="no";ad.frameborder="0";ad.height=aa;ad.width=ab;if("451424056|272424777|737715183|399705155|386733361".indexOf(e.crid)!=-1){ad.style="margin-bottom:-3px;"}if(e.crid=="274752815"){ad.style="margin-left:-10px;"}ac.src=Z;if(r||(N()==false&&_mN._vImp==1&&!d)){ac.onload="_mN._mNVI.trigger(this)"}return{d:ad,e:ac}}function g(){this.imgHth=new Image();if((_mN._crid!="852723304"||t)&&_mN._l1Imp){var Z=_mN._insl&&_mN._insl==1?"&insl=1&rk="+v:"";this.imgHth.src=_mN._hthChkURL+"cid="+e.cid+"&crid="+e.crid+"&lf=6&ic="+S+"&requrl="+e.requrl+"&kwrf="+e.kwrf+"&r="+new Date().getTime()+Z}}_mN._util.eventLib={addEvent:function(ab,aa,Z){if(ab.addEventListener){ab.addEventListener(aa,Z,false)}else{if(ab.attachEvent){ab.attachEvent("on"+aa,Z)}}ab=null},removeEvent:function(ab,aa,Z){if(ab.removeEventListener){ab.removeEventListener(aa,Z)}else{if(ab.detachEvent){ab.detachEvent("on"+aa,Z)}}ab=null}};function c(ae,ac,aa,af,Z){var ab=j.getElementById(ae),ah=function(){c(ae,ac,aa,af,Z)};if(!ab){_mN._util.eventLib.addEvent(j,"DOMContentLoaded",ah);ab=null;return}var aj,ag=ab.contentWindow||ab.contentDocument,ak=ac.replace("fcmdynet.html","fcmdynet.js").replace(/&staticIframe=1/,"&nb=1"),ad='<!DOCTYPE html><html><head><script type="text/javascript">window.frameID = "'+ae+'";function createDyTag() {var scr = document.createElement("script"); scr.type = "text/javascript"; scr.src = "{{src}}"; scr.async = "async"; document.getElementsByTagName("head")[0].appendChild(scr);};<\/script></head><body onload="createDyTag()"></body></html>';try{aj=(ag&&(ag.document||ag))||false;if(aj){aa.c=ad;_mN._mNVI[ae]=aa;aj.open();aj.write(ad.replace(/{{src}}/,ak));aj.close()}}catch(ai){pNode=ab.parentNode;pNode.removeChild(ab);j.write("<iframe"+af+Z+" ></iframe>")}}function L(){var ar=q(),ae=e.size.split("x"),ai="_mN_dy_"+k,aa="",ad="",aq,Z,am,al,ah=" ",aj='"',ao="=";var ak=false,an=false;if(typeof(_mN._custom.makeMainRequest)=="function"){an=_mN._custom.makeMainRequest()}if(typeof(_mN._custom.makeDirectRequest)=="function"){ak=_mN._custom.makeDirectRequest()}if(_mN._insl&&_mN._insl==1){if(_mN._util.mngc("_mNInsl")){return}if(navigator.userAgent.match(/(ipad|iphone|blackberry|android|symbian|windows\sphone)/i)&&!p()){return}var af="";if(P.navigator.appName=="Microsoft Internet Explorer"){if(j.documentMode){af=(j.documentMode!="5")?"strict":"ie6hack"}else{if(j.compatMode){af=(j.compatMode=="CSS1Compat")?"strict":"ie6hack";if(af=="strict"&&navigator.userAgent.toLowerCase().indexOf("msie 6")!=-1){af="ie6hack"}}}if(navigator.userAgent.toLowerCase().indexOf("msie 5")!=-1){af="ie6hack"}}if(af=="ie6hack"){return}if(n()){return}var ap=j.createElement("script"),ab=j.getElementsByTagName("script")[0];ap.type="text/javascript";ap.src=ar;ap.async="async";ab.parentNode.insertBefore(ap,ab);g()}else{if(an){var at=at||0,ag="_mN_main_"+_mN._crid+"_"+at++;P.iframeURL=ar.replace(/(fcmdynet\.html)|(fcmdynet\.js)/,"mediamain.html").replace(/&staticIframe=1/,"&nb=1");j.write('<iframe marginwidth="0" marginheight="0" scrolling="NO" frameborder="0" height="'+ae[1]+'" width="'+ae[0]+'" id="'+ag+'" style="display:none;" ></iframe>');P.locHash=_mNDetails.locHash&&_mNDetails.locHash[_mN._crid];var ac='<!DOCTYPE html><html><head><script type="text/javascript">var frameID, callback = false, mFrame = window.parent.iframeURL.replace(/#.*/,"");function createTag() {var scr = document.createElement("script");scr.onload = scr.onreadystatechange = function () { if(typeof adContent != "undefined" && !callback) { callback = true; parent._mN_dy.putContent(frameID, adContent.content, "'+ae[0]+'", "'+ae[1]+'", ""); } }; scr.type = "text/javascript"; scr.src = mFrame+\'&nb=1\'; scr.async = "async"; document.getElementsByTagName("head")[0].appendChild(scr);};<\/script></head><body onload="createTag()"></body></html>';P._mN_dy=P._mN_dy||{};_mN_dy.getContent=function(ax,au,aD,ay,av){var aw=j.getElementById(av),aB=function(){_mN_dy.getContent(ax,au,aD,ay,av)};if(!aw){_mN._util.eventLib.addEvent(j,"DOMContentLoaded",aB);aw=null;return}var aC,az=aw.contentWindow||aw.contentDocument;try{aC=(az&&(az.document||az))||false;if(aC){aC.open();aC.write(ax);aC.close();az.frameID=av}}catch(aA){_mN_dy.putContent(av,"",aD,ay,au)}};_mN_dy.putContent=function(av,ay,aD,az,au){var ax=j.getElementById(av),aw=j.createElement("iframe");aw.marginWidth=0;aw.marginHeight=0;aw.scrolling="no";aw.frameBorder=0;aw.height=az;aw.width=aD;aw.id=av+"_n";if(au!=""&&ay==""){aw.src=au}ax.parentNode.insertBefore(aw,ax);if(au!=""&&ay==""){aw.parentNode.removeChild(ax);return}var aA=aw.contentWindow||aw.contentDocument,aC=(aA&&(aA.document||aA))||false;if(aC){try{if(/msie/.test(navigator.userAgent.toLowerCase())){throw 10}aC.open();aC.write(ay);aC.close()}catch(aB){aA.data=ay;aC.location.replace('javascript:window["data"];')}aw.parentNode.removeChild(ax)}};_mN_dy.getContent(ac,iframeURL,ae[0],ae[1],ag);g()}else{if(ak){finalURLLoc=_mN._dcUrl+"/directmediamain.php?"+O(e);j.write('<iframe src="'+finalURLLoc+'" marginwidth="0"  marginheight="0" id="'+ai+'" scrolling="no" frameborder="0" height="'+ae[1]+'" width="'+ae[0]+'" ></iframe>');g()}else{if(_mN._v==1){aq=a(ai,ae[0],ae[1],ar);for(am in aq.d){aa+=[ah,am,ao,aj,aq.d[am],aj].join("")}for(am in aq.e){ad+=[ah,am,ao,aj,aq.e[am],aj].join("")}if(_mN._nb!=1){j.write("<iframe"+aa+ad+" ></iframe>")}else{j.write("<iframe"+aa+" ></iframe>");c(ai,ar,aq,aa,ad)}if(_mN._cid=="8CU5N973T"){g()}}else{j.write('<script language="javascript" type="text/javascript" id="'+ai+'" src="'+ar+'" ><\/script>');g()}}}}}if(_mN._trgl==1){var w=q(),B=e.size.split("x");var D=function(){try{if(arguments.length<=0){return}var Z=w;if(arguments[1]&&arguments[2]){B=arguments[1].split("x");k=arguments[2];Z=Z.replace(/&size=[^&]*/,"").replace(/&crid=[^&]*/,"");Z=Z.replace("?","?&crid="+arguments[2]+"&size="+arguments[1])}var ah=arguments[0];Z+="&nb=1";if(j.getElementById(ah)){var ad="_mN_dy_"+ah;var ab=j.getElementById(ah),aa=j.createElement("iframe");aa.marginWidth=0;aa.marginHeight=0;aa.scrolling="no";aa.frameBorder=0;aa.height=B[1];aa.width=B[0];aa.id=ad;ab.appendChild(aa);var ab=j.getElementById(ad),ag,ae=ab.contentWindow||ab.contentDocument,ai=Z.replace("fcmdynet.html","fcmdynet.js").replace(/&staticIframe=1/,"&nb=1"),ac='<!DOCTYPE html><html><head><script type="text/javascript">window.frameID = "'+ad+'";function createDyTag() {var scr = document.createElement("script"); scr.type = "text/javascript"; scr.src = "'+ai+'"; scr.async = "async"; document.getElementsByTagName("head")[0].appendChild(scr);};<\/script></head><body onload="createDyTag()"></body></html>';try{ag=(ae&&(ae.document||ae))||false;if(ag){ag.open();ag.write(ac);ag.close()}}catch(af){}g()}}catch(af){}};_mNDetails.loadTag=D}else{L()}})(window,document);_mNDetails.showAds = function(){
	try{
		if(_mNDetails.tagL1 !== true && document.getElementById('462705817')){
			_mNDetails.loadTag('462705817', '620x30', '462705817');
			_mNDetails.tagL1 = true;
		} 
		if(_mNDetails.tagL2 !== true && document.getElementById('383070046')){
			_mNDetails.loadTag('383070046', '620x140', '383070046');
			_mNDetails.tagL2 = true;
		}
		if(_mNDetails.tagL3 !== true && document.getElementById('823003578')){
			_mNDetails.loadTag('823003578', '340x152', '823003578');
			_mNDetails.tagL3 = true;
		}
		if(_mNDetails.tagL4 !== true && document.getElementById('659093976')){
			_mNDetails.loadTag('659093976', '620x175', '659093976');
			_mNDetails.tagL4 = true;
		}
		
		if(_mNDetails.tagL1 && _mNDetails.tagL2 && _mNDetails.tagL3 && _mNDetails.tagL4){
			clearInterval(_mNDetails.nIntervId);
		}else if(/complete|loaded/.test(document.readyState)) {
			clearInterval(_mNDetails.nIntervId);
		}
	}catch(e){
		clearInterval(_mNDetails.nIntervId);
	}
};
_mNDetails.nIntervId = setInterval(_mNDetails.showAds, 100);