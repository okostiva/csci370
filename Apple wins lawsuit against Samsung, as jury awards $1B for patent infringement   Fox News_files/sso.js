(function(f){function t(a){var b=document.createElement("a");b.href=a;return b.pathname.replace(/\//g,"_")}function s(a){cName="";pCOOKIES=[];pCOOKIES=document.cookie.split("; ");for(bb=0;bb<pCOOKIES.length;bb++)NmeVal=[],NmeVal=pCOOKIES[bb].split("="),NmeVal[0]==a&&(cName=unescape(NmeVal[1]));1<cName.length&&('"'===cName[0]&&(cName=cName.substr(1,cName.length)),'"'===cName[cName.length-1]&&(cName=cName.substr(0,cName.length-1)));return cName.replace(/\\"/g,'"')}function r(a,b,e,j,v,w){a=a+"="+escape(b);
e&&(e=(new Date((new Date).getTime()+864E5*e)).toGMTString(),a+=";expires="+e);j&&(a+=";path="+j);v&&(a+=";domain="+v);w&&(a+="secure; ");document.cookie=a}function p(a){a=l(a);return a.host+a.path}function l(a){for(var b=l.options,a=b.parser[b.strictMode?"strict":"loose"].exec(a),e={},j=14;j--;)e[b.key[j]]=a[j]||"";e[b.q.name]={};e[b.key[12]].replace(b.q.parser,function(a,j,c){j&&(e[b.q.name][j]=c)});return e}function k(a,b){this.origin="https://"+l(a).host;this.path=b;this._iframe=null;this._iframeReady=
!1;this._queue=[];this._requests={};this._messageId=0}if(!("undefined"!==typeof f.JANRAIN&&f.JANRAIN.SSO)){JANRAIN={SSO:{}};JANRAIN.SSO.version="3.0.1";JANRAIN.SSO.CAPTURE={};JANRAIN.SSO.ENGAGE={};var u,h,d,o,g,m,n,q,c;JANRAIN.SSO.log=function(a){window.console&&window.console.log&&console.log("SSO: "+a)};JANRAIN.SSO.warn=function(a){window.console&&window.console.warn&&console.warn("SSO WARNING: "+a)};JANRAIN.SSO.error=function(a){window.console&&window.console.error&&console.error("SSO ERROR: "+
a)};JANRAIN.SSO.CAPTURE.logout=function(a,b){JANRAIN.SSO.logout(a,b)};JANRAIN.SSO.ENGAGE.logout=function(a,b){JANRAIN.SSO.logout(a,b)};JANRAIN.SSO.CAPTURE.refresh=function(a){JANRAIN.SSO.refresh(a)};JANRAIN.SSO.ENGAGE.refresh=function(a){JANRAIN.SSO.refresh(a)};JANRAIN.SSO.CAPTURE.refresh_token=function(a){if("undefined"===typeof h||"undefined"===typeof d)JANRAIN.SSO.error("check_login must be called before calling refresh_token");else if(window.localStorage)c||(c=new k(sso_server_use,"/static/server.html")),
JANRAIN.SSO.log("retrieving session"),c.getValue("janrainSSOState",function(b,e){var c=document.createElement("script");c.src=h+"/capture/v1/refresh_token?v="+(new Date).getTime()+"&redirect_uri="+encodeURIComponent(d)+"&callback="+encodeURIComponent(a)+"&client_id="+encodeURIComponent(m)+"&xdreceiver_uri="+encodeURIComponent(o)+"&logout_uri="+encodeURIComponent(g)+"&session_id="+encodeURIComponent(e.session_id)+"&origin="+encodeURIComponent(f.document.location.href);c.type="text/javascript";var l=
document.getElementsByTagName("script")[0];l.parentNode.insertBefore(c,l)});else{var b=document.createElement("script");b.src=h+"/capture/v1/refresh_token?v="+(new Date).getTime()+"&redirect_uri="+encodeURIComponent(d)+"&callback="+encodeURIComponent(a)+"&client_id="+encodeURIComponent(m)+"&xdreceiver_uri="+encodeURIComponent(o)+"&logout_uri="+encodeURIComponent(g)+"&origin="+encodeURIComponent(f.document.location.href);b.type="text/javascript";var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(b,
e)}};JANRAIN.SSO.CAPTURE.set_login=function(a){if("undefined"===typeof h||"undefined"===typeof d)JANRAIN.SSO.error("check_login must be called before calling set_login");else{var b=document.createElement("script");b.src=h+"/capture/v1/set_login?v="+(new Date).getTime()+"&redirect_uri="+encodeURIComponent(d)+"&code="+encodeURIComponent(a.code)+"&login_callback="+encodeURIComponent(a.login_callback)+"&transaction_id="+encodeURIComponent(a.transaction_id);b.type="text/javascript";a=document.getElementsByTagName("script")[0];
a.parentNode.insertBefore(b,a)}};JANRAIN.SSO.CAPTURE.check_login=function(a){h=h||a.sso_server;d=d||a.redirect_uri;o=o||a.xd_receiver;g=g||a.logout_uri;m=m||a.client_id;n=n||a.response_type;a.response_type=a.response_type||"code";a.response_method=a.response_method||"redirect";a.refresh=a.refresh||!1;void 0===a.logout_uri&&(a.logout_uri="");void 0===a.bp_uri&&(a.bp_uri="");var b="janrain_sso_checked_"+t(a.xd_receiver),e=RegExp(b);if(window.localStorage)r(b,"",-1,"/"),JANRAIN.SSO.CAPTURE._check_capture_login(a);
else if(-1===f.document.cookie.search(e))b=document.createElement("script"),b.src=h+"/capture/v1/sso_check.js?v="+(new Date).getTime()+"&xd_receiver="+encodeURIComponent(o)+"&origin="+encodeURIComponent(f.document.location.href)+"&logout_uri="+encodeURIComponent(g)+"&redirect_uri="+encodeURIComponent(d)+"&client_id="+encodeURIComponent(m)+"&bp_channel="+encodeURIComponent(a.bp_channel)+"&response_type="+encodeURIComponent(n)+"&response_method="+encodeURIComponent(a.response_method)+"&widget_parameters="+
encodeURIComponent(a.widget_parameters)+"&nologin_callback="+encodeURIComponent(a.nologin_callback)+"&transaction_id="+encodeURIComponent(a.transaction_id)+"&refresh="+a.refresh,b.type="text/javascript",a=document.getElementsByTagName("script")[0],a.parentNode.insertBefore(b,a);else if("undefined"!==typeof janrain&&janrain.capture&&janrain.capture.ui&&"function"===typeof janrain.capture.ui[a.nologin_callback])janrain.capture.ui[a.nologin_callback]({transactionId:a.transaction_id,result:"already checked"})};
JANRAIN.SSO.CAPTURE._check_capture_login=function(a){c||(c=new k(a.sso_server,"/static/server.html"));JANRAIN.SSO.log("checking for session");c.getValue("janrainSSOState",function(b,e){var j=[],c=!1,g=p(a.xd_receiver);if(!e.visited_expires||"session"===e.visited_expires)e.visited_expires="session",a.refresh=a.refresh||"session"!==s("janrainSSO_session"),r("janrainSSO_session","session",null,"/"),JANRAIN.SSO.log("set janrainSSO_session cookie");if(e.visited){j=JSON.parse(e.visited);for(i=0;i<j.length;i++){var d=
p(j[i].xdReceiverURI);if("undefined"!==typeof d&&d===g)if(!0===j[i].isLoggedIn)if(JANRAIN.SSO.log("already logged into: "+j[i].domain),a.refresh)JANRAIN.SSO.log("overriding with refresh"),c=!0;else{if("undefined"!==typeof janrain&&janrain.capture&&janrain.capture.ui&&"function"===typeof janrain.capture.ui[a.nologin_callback])janrain.capture.ui[a.nologin_callback]({transactionId:a.transaction_id,result:"already checked"});return}else JANRAIN.SSO.log("found: "+j[i].domain+" but not logged in"),c=!0}}c||
(g=l(a.xd_receiver),j.push({domain:g.host+g.path,xdReceiverURI:a.xd_receiver,isLoggedIn:!1,logoutURI:a.logout_uri}),10<j.length&&j.splice(0,1));if(!e.session_id||1>e.session_id.length)if(JANRAIN.SSO.log("no session exists"),c){if("undefined"!==typeof janrain&&janrain.capture&&janrain.capture.ui&&"function"===typeof janrain.capture.ui[a.nologin_callback])janrain.capture.ui[a.nologin_callback]({transactionId:a.transaction_id,result:"sso failed - no session exists"})}else JANRAIN.SSO._setSession(e.session_id,
JSON.stringify(j),e.visited_expires,function(){if(typeof janrain!=="undefined"&&janrain.capture&&janrain.capture.ui&&typeof janrain.capture.ui[a.nologin_callback]==="function")janrain.capture.ui[a.nologin_callback]({transactionId:a.transaction_id,result:"sso failed - no session exists"})});else JANRAIN.SSO.log("logging in capture user"),JANRAIN.SSO.CAPTURE._login(a,e.session_id,JSON.stringify(j),"JANRAIN.SSO.CAPTURE._loginCallback")})};JANRAIN.SSO.CAPTURE._login=function(a,b,e,j){if("undefined"===
typeof h)JANRAIN.SSO.error("sso server is not defined");else{var c=document.createElement("script");c.src=h+"/capture/loginx?v="+(new Date).getTime()+"&callback="+encodeURIComponent(j)+"&xd_receiver="+encodeURIComponent(o)+"&origin="+encodeURIComponent(f.document.location.href)+"&logout_uri="+encodeURIComponent(g)+"&redirect_uri="+encodeURIComponent(d)+"&client_id="+encodeURIComponent(m)+"&bp_channel="+encodeURIComponent(a.bp_channel)+"&response_type="+encodeURIComponent(a.response_type)+"&response_method="+
encodeURIComponent(a.response_method)+"&widget_parameters="+encodeURIComponent(a.widget_parameters)+"&transaction_id="+encodeURIComponent(a.transaction_id)+"&session_id="+encodeURIComponent(b)+"&visited="+encodeURIComponent(e)+"&refresh="+a.refresh;c.type="text/javascript";a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(c,a)}};JANRAIN.SSO.CAPTURE._loginCallback=function(a){if(!a||"fail"===a.stat)JANRAIN.SSO.error("login failed: "+a.msg);else{JANRAIN.SSO.log("callback from SSO server received");
c||(c=new k(h,"/static/server.html"));JANRAIN.SSO.log("updating SSO session");var b={session_id:decodeURIComponent(a.session_id),visited:decodeURIComponent(a.visited),visited_expires:a.visited_expires};c.setValue("janrainSSOState",b,function(){a.capture_callback&&"jsonp"===a.response_method&&"undefined"!==typeof janrain&&janrain.capture&&janrain.capture.ui&&"function"===typeof a.capture_callback?a.capture_callback():a.redirect_uri&&0<a.redirect_uri.length&&(f.document.location.href=a.redirect_uri)})}};
JANRAIN.SSO.ENGAGE.check_login=function(a){h=h||a.sso_server;o=o||a.xd_receiver;g=g||a.logout_uri;u=a.token_uri;void 0===a.logout_uri&&(a.logout_uri="");void 0===a.bp_uri&&(a.bp_uri="");if(void 0===a.xd_receiver)JANRAIN.SSO.error("configuration value xd_receiver undefined");else{var b="janrain_sso_checked_"+t(a.xd_receiver),e=RegExp(b);window.localStorage?(r(b,"",-1,"/"),JANRAIN.SSO.ENGAGE._checkSession(a)):-1===f.document.cookie.search(e)&&(b=document.createElement("script"),b.src=a.sso_server+"/session/sso_check.js?v="+
(new Date).getTime()+"&xdcomm_uri="+encodeURIComponent(a.xd_receiver)+"&bp_channel="+encodeURIComponent(a.bp_channel)+"&session_id="+encodeURIComponent(a.session_id)+"&logout_uri="+encodeURIComponent(a.logout_uri),b.type="text/javascript",a=document.getElementsByTagName("script")[0],a.parentNode.insertBefore(b,a))}};JANRAIN.SSO.ENGAGE._checkSession=function(a){c||(c=new k(a.sso_server,"/static/server.html"));JANRAIN.SSO.log("checking for session");c.getValue("janrainSSOState",function(b,e){var j=
[],c=!1,g=p(a.xd_receiver);if(!e.visited_expires||"session"===e.visited_expires)e.visited_expires="session",a.refresh=a.refresh||"session"!==s("janrainSSO_session"),r("janrainSSO_session","session",null,"/"),JANRAIN.SSO.log("set janrainSSO_session cookie");if(e.visited){j=JSON.parse(e.visited);for(i=0;i<j.length;i++){var d=p(j[i].xdReceiverURI);if("undefined"!==typeof d&&d===g)if(!0===j[i].isLoggedIn)if(JANRAIN.SSO.log("already logged into: "+j[i].domain),a.refresh)JANRAIN.SSO.log("overriding with refresh"),
c=!0;else return;else JANRAIN.SSO.log("found: "+j[i].domain+" but not logged in"),c=!0}}c||(g=l(a.xd_receiver),j.push({domain:g.host+g.path,xdReceiverURI:a.xd_receiver,isLoggedIn:!1,logoutURI:a.logout_uri}),10<j.length&&j.splice(0,1));!e.session_id||1>e.session_id.length?(JANRAIN.SSO.log("no session_id exists"),c||JANRAIN.SSO._setSession(e.session_id,JSON.stringify(j),e.visited_expires,function(){})):(JANRAIN.SSO.log("logging in user"),JANRAIN.SSO.ENGAGE._login({session_id:e.session_id,xd_receiver:a.xd_receiver,
visited:JSON.stringify(j),callback:"JANRAIN.SSO.ENGAGE._loginCallback",bp_channel:a.bp_channel,logout_uri:a.logout_uri}))})};JANRAIN.SSO._redirectCallback=function(a,b,e,j,g,d,f){d=d||h;d||(JANRAIN.SSO.error("no session set, due to missing sso server parameter"),"undefined"!==f&&"function"===typeof f&&f());!g&&!o&&(JANRAIN.SSO.error("no session set, due to missing xd_receiver or logged in host parameter"),"undefined"!==f&&"function"===typeof f&&f());c||(c=new k(d,"/static/server.html"));JANRAIN.SSO.log("updating session");
c.getValue("janrainSSOState",function(e,c){var h=[],m;if(c.visited){JANRAIN.SSO.log("visited: "+c.visited);var h=JSON.parse(c.visited),n=0;if(o)m=p(o);else for(var k=0;k<h.length;k++)l(h[k].xdReceiverURI).host==g&&n++;if(n>1){JANRAIN.SSO.log("multiple domains match, truncating visited");h=[]}k={};for(k=0;k<h.length;k++){var n=p(h[k].xdReceiverURI),q=l(h[k].xdReceiverURI);if(typeof n!=="undefined"&&(n===m||q.host===g)){if(h[k].isLoggedIn===true)JANRAIN.SSO.log("logging in again to: "+h[k].domain);
else{JANRAIN.SSO.log("found: "+h[k].domain);h[k].isLoggedIn=true}k=h[k];h=[k];break}}}else JANRAIN.SSO.warn("expected a site list to match - none found");JANRAIN.SSO._setSSOSession(a,b,JSON.stringify(h),j,d,function(){f!=="undefined"&&typeof f==="function"&&f()})})};JANRAIN.SSO._setSSOSession=function(a,b,e,j,g,d){c||(c=new k(g,"/static/server.html"));JANRAIN.SSO.log("setting session");c.setValue("janrainSSOState",{session_id:a,session_id_expires:b,visited:e,visited_expires:j},function(){"undefined"!==
d&&"function"===typeof d&&d()})};JANRAIN.SSO._setSession=function(a,b,e,c){JANRAIN.SSO._setSSOSession(a,null,b,e,h,c)};JANRAIN.SSO.ENGAGE._login=function(a){if("undefined"===typeof h)JANRAIN.SSO.error("sso server is not defined");else{var b=document.createElement("script");b.src=h+"/engage/loginx?v="+(new Date).getTime()+"&callback="+encodeURIComponent(a.callback)+"&xdcomm_uri="+encodeURIComponent(a.xd_receiver)+"&session_id="+encodeURIComponent(a.session_id)+"&visited="+encodeURIComponent(a.visited)+
"&logout_uri="+encodeURIComponent(a.logout_uri)+"&bp_channel="+encodeURIComponent(a.bp_channel);b.type="text/javascript";a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(b,a)}};JANRAIN.SSO.ENGAGE._loginCallback=function(a){if(!a||"fail"===a.stat)JANRAIN.SSO.error("login failed: "+a.msg);else{JANRAIN.SSO.log("callback from SSO server received");c||(c=new k(h,"/static/server.html"));JANRAIN.SSO.log("updating SSO session");var b={session_id:decodeURIComponent(a.session_id),visited:decodeURIComponent(a.visited),
visited_expires:a.visited_expires};c.setValue("janrainSSOState",b,function(){JANRAIN.SSO.ENGAGE.post_token(a.token)})}};JANRAIN.SSO.ENGAGE.post_token=function(a){var b=f.document.createElement("form"),e=f.document.createElement("input");e.name="token";e.id="token";e.type="hidden";e.value=a;b.appendChild(e);b.method="POST";b.action=-1!=u.search(/\?/)?u+"&token="+a:u+"?token="+a;f.parent.document.getElementsByTagName("head")[0].appendChild(b);b.submit()};JANRAIN.SSO.logout=function(a,b){JANRAIN.SSO._deleteChecked();
"undefined"!==typeof b&&"function"===typeof b&&(q=b);if("undefined"!==typeof a.sso_server)if(window.localStorage)c||(c=new k(a.sso_server,"/static/server.html")),JANRAIN.SSO.log("removing session_id"),c.getValue("janrainSSOState",function(e,g){if(g.visited){for(var d=JSON.parse(g.visited),h=JANRAIN.SSO._getLogoutUrls(d,o),f={},f=0;f<d.length;f++)if(d[f].xdReceiverURI===o){d[f].isLoggedIn=!1;f=d[f];d=[f];break}1!==d.length&&(d=[]);g.session_id="deleteMe";g.visited=JSON.stringify(d);g.session_id_expires=
"deleteMe";c.setValue("janrainSSOState",g,function(){JANRAIN.SSO.log("session removed");JANRAIN.SSO._doLogout(a.logout_uri,h,b)})}else JANRAIN.SSO._doLogout(a.logout_uri,null,b)});else{var e=f.document.createElement("script");e.setAttribute("src",a.sso_server+"/session/logout.js?logout_uri="+encodeURIComponent(a.logout_uri));document.getElementsByTagName("body")[0].appendChild(e)}};JANRAIN.SSO._getLogoutUrls=function(a,b){var e=[],c;"undefined"!==typeof b&&(c=p(b));for(var d=0;d<a.length;d++)p(a[d].xdReceiverURI)!==
c&&(e[d]=a[d].logoutURI);return e};JANRAIN.SSO._deleteChecked=function(){for(var a=f.document.cookie.split(";"),b=0;b<a.length;b++)-1<a[b].search(/janrain_sso_checked/)&&(f.document.cookie=a[b]+"=;expires="+(new Date).toGMTString()+";path=/;",window.console&&window.console.log&&console.log("sso removed cookie "+a[b]))};JANRAIN.SSO.refresh=function(a){if("undefined"!==typeof a){var b=f.document.createElement("script");b.setAttribute("src",a+"/session/refresh.js");document.getElementsByTagName("body")[0].appendChild(b)}};
JANRAIN.SSO._doLogout=function(a,b){onComplete=function(){"undefined"!==typeof q&&"function"===typeof q?(JANRAIN.SSO.log("calling logout_callback()"),q()):"undefined"!==typeof a&&(JANRAIN.SSO.log("redirecting to "+a),f.document.location.href=a)};JANRAIN.SSO._loadUrls(b,onComplete)};JANRAIN.SSO._loadUrls=function(a,b){onComplete=function(){"undefined"!==typeof b&&"function"===typeof b&&b()};if(null!=a&&0<a.length){var e=0;onFrameLoad=function(){++e;e>=a.length&&onComplete()};for(var c,d=0;d<a.length;d++)f.document.all?
(c=document.createElement("div"),c.innerHTML='<iframe onload="onFrameLoad();"></iframe>',c=c.firstChild):(c=f.document.createElement("iframe"),c.onload=onFrameLoad),c.setAttribute("src",decodeURIComponent(a[d])),JANRAIN.SSO.log("calling "+a[d]),f.document.getElementsByTagName("head")[0].appendChild(c)}else onComplete()};l.options={strictMode:!1,key:"source protocol authority userInfo user password host port relative path directory file query anchor".split(" "),q:{name:"queryKey",parser:/(?:^|&)([^&=]*)=?([^&]*)/g},
parser:{strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/}};k.prototype={constructor:k,init:function(){var a=this;if(!this._iframe)if(window.postMessage&&window.JSON&&window.localStorage){this._iframe=document.createElement("iframe");
this._iframe.style.cssText="position:absolute;width:1px;height:1px;left:-9999px;";var b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(this._iframe,b);window.addEventListener?(this._iframe.addEventListener("load",function(){a._iframeLoaded()},!1),window.addEventListener("message",function(b){a._handleMessage(b)},!1)):this._iframe.attachEvent&&(this._iframe.attachEvent("onload",function(){a._iframeLoaded()},!1),window.attachEvent("onmessage",function(b){a._handleMessage(b)}))}else throw Error("Unsupported browser.");
this._iframe.src=this.origin+this.path},getValue:function(a,b){var c={request:{key:a,messageId:++this._messageId,action:"get"},callback:b};this._iframeReady?this._sendRequest(c):this._queue.push(c);this._iframe||this.init()},setValue:function(a,b,c){a={request:{key:a,messageId:++this._messageId,action:"set",storedValue:b},callback:c};this._iframeReady?this._sendRequest(a):this._queue.push(a);this._iframe||this.init()},removeValue:function(a,b){var c={request:{key:a,messageId:++this._messageId,action:"remove"},
callback:b};this._iframeReady?this._sendRequest(c):this._queue.push(c);this._iframe||this.init()},_sendRequest:function(a){this._requests[a.request.messageId]=a;this._iframe.contentWindow.postMessage(JSON.stringify(a.request),this.origin)},_iframeLoaded:function(){this._iframeReady=!0;if(this._queue.length){for(var a=0,b=this._queue.length;a<b;a++)this._sendRequest(this._queue[a]);this._queue=[]}},_handleMessage:function(a){a.origin==this.origin&&(a=JSON.parse(a.data),this._requests[a.messageId].callback(a.key,
a.storedValue),delete this._requests[a.messageId])}}}})(this);var JSON;JSON||(JSON={});
(function(){function f(d){return 10>d?"0"+d:d}function t(d){p.lastIndex=0;return p.test(d)?'"'+d.replace(p,function(d){var g=u[d];return"string"===typeof g?g:"\\u"+("0000"+d.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+d+'"'}function s(d,f){var g,m,n,q,c=l,a,b=f[d];b&&"object"===typeof b&&"function"===typeof b.toJSON&&(b=b.toJSON(d));"function"===typeof h&&(b=h.call(f,d,b));switch(typeof b){case "string":return t(b);case "number":return isFinite(b)?""+b:"null";case "boolean":case "null":return""+
b;case "object":if(!b)return"null";l+=k;a=[];if("[object Array]"===Object.prototype.toString.apply(b)){q=b.length;for(g=0;g<q;g+=1)a[g]=s(g,b)||"null";n=0===a.length?"[]":l?"[\n"+l+a.join(",\n"+l)+"\n"+c+"]":"["+a.join(",")+"]";l=c;return n}if(h&&"object"===typeof h){q=h.length;for(g=0;g<q;g+=1)"string"===typeof h[g]&&(m=h[g],(n=s(m,b))&&a.push(t(m)+(l?": ":":")+n))}else for(m in b)Object.prototype.hasOwnProperty.call(b,m)&&(n=s(m,b))&&a.push(t(m)+(l?": ":":")+n);n=0===a.length?"{}":l?"{\n"+l+a.join(",\n"+
l)+"\n"+c+"}":"{"+a.join(",")+"}";l=c;return n}}"function"!==typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()});var r=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
p=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,l,k,u={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},h;"function"!==typeof JSON.stringify&&(JSON.stringify=function(d,f,g){var m;k=l="";if("number"===typeof g)for(m=0;m<g;m+=1)k+=" ";else"string"===typeof g&&(k=g);if((h=f)&&"function"!==typeof f&&("object"!==typeof f||"number"!==typeof f.length))throw Error("JSON.stringify");return s("",{"":d})});
"function"!==typeof JSON.parse&&(JSON.parse=function(d,f){function g(d,h){var c,a,b=d[h];if(b&&"object"===typeof b)for(c in b)Object.prototype.hasOwnProperty.call(b,c)&&(a=g(b,c),void 0!==a?b[c]=a:delete b[c]);return f.call(d,h,b)}var h,d=""+d;r.lastIndex=0;r.test(d)&&(d=d.replace(r,function(d){return"\\u"+("0000"+d.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(d.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return h=eval("("+d+")"),"function"===typeof f?g({"":h},""):h;throw new SyntaxError("JSON.parse");})})();
