
﻿function _loadAux(){try{if(self.IBPartner){var go=IBPartner.Go;var _ib_id1=IBPartner.Id1;var _ib_xid=IBPartner.Xid;var _ib_ida=IBPartner.Ida;var _ib_pid=IBPartner.Pid;var bqzmisa='';}else{var go=(self._ibgo&&self._ibgo!=='${SELLER_LINE_ITEM_CODE}')?_ibgo:'';var bqzmisa=(self._ibisb&&self._ibisb!=='')?_ibisb:'';var _ib_id1='';var _ib_xid='';var _ib_ida='';var _ib_pid='';}
if(go!==''&&go!=='iblx'&&go!=='ibcx'){var s=window.document.createElement("script");s.setAttribute('type','text/javascript');s.setAttribute('src','https://ib.mookie1.com/at.js?sessionid=add4cf19-a31a-4737-bf8f-0684ae2bb2b0&go='+go+'&xid='+_ib_xid+'&ida='+_ib_ida+'&sb='+bqzmisa+'&osid=cd1e7790-cf29-4d7a-a617-1590b3f7f027'+'&pid='+_ib_pid+'&id1='+_ib_id1);if(s.readyState){s.onreadystatechange=function(){if(s.readyState==="loaded"||s.readyState==="complete"){s.onreadystatechange=null;_TmfFnJOT.ProcessTags();}};}else{s.onload=function(){_TmfFnJOT.ProcessTags();};}
window.document.getElementsByTagName("head")[0].appendChild(s);}}catch(Error){}}
function _ib_pv(){try{_loadAux();}catch(Error){}}
_ib_pv();function ViewSetup(){}
function ViewOrigin(){}
ViewOrigin.prototype.Timestamp='2/21/2013 5:47:37 AM';ViewOrigin.prototype.Name='iBehavior.Interactive.Web.Templates.ViewSetup.min.js';ViewOrigin.prototype.Id='cd1e7790-cf29-4d7a-a617-1590b3f7f027';ViewOrigin.prototype.HostPage='';