/* SiteCatalyst code version: H.22.1.
Copyright 1997-2009 Omniture, Inc. More info available at
http://www.omniture.com */
/************************ ADDITIONAL FEATURES ************************
     Dynamic Report Suite Selection
     Plugins
*/

//var s_account="foxnews"
var omtr=s_gi(s_account)

/* WARNING: Changing any of the below variables will cause drastic
changes to how your visitor data is collected.  Changes should only be
made when instructed to do so by your account manager.*/
omtr.visitorNamespace="foxnews"
/* Use the two lines of code below when for FPC tracking */
omtr.trackingServer="metrics.foxnews.com"
omtr.trackingServerSecure="metrics.foxnews.com"
omtr.dc="112"

/************************** CONFIG SECTION **************************/
/* You may add or alter any code config here. */
/*Lines below allow you to assign RSID according to domain that is servering the content */
//omtr.dynamicAccountSelection=true
//omtr.dynamicAccountList="foxnews=foxnews.com;foxnewsbusinessprod=foxbusiness.com;foxnewsbusinessprod=foxsmallbusinesscenter.com"
/* Conversion Config */
omtr.charSet="utf-8"
omtr.currencyCode="USD"
/* Link Tracking Config */
omtr.trackDownloadLinks=true
omtr.trackExternalLinks=true
omtr.trackInlineStats=true
omtr.linkDownloadFileTypes="exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx"
omtr.linkInternalFilters="javascript:,"+document.domain.split(".").slice(-2).join(".");
omtr.linkLeaveQueryString=false
omtr.linkTrackVars="prop5,prop6,prop7,prop8,channel"
omtr.linkTrackEvents="None"
/* Plugin Config */
omtr.usePlugins=true

/* Configure Modules and Plugins */

/* Page Name Plugin Config */
omtr.siteID=""; // leftmost value in pagename
omtr.defaultPage=""; // filename to add when none exists
omtr.queryVarsList=""; // query parameters to keep
omtr.pathExcludeDelim=""; // portion of the path to exclude
omtr.pathConcatDelim=":"; // page name component separator
omtr.pathExcludeList=""; // elements to exclude from the path 

omtr.pageLoad = 0;

/* Channel Manager Config */
//s._extraSearchEngines="omniture.com|q|Omniture Search"
omtr._channelDomain="media share:Natural|facebook.com,twitter.com,linkedin.com,myspace.com,youtube.com,delicious.com,digg.com,buzz.google.com,google.com/buzz,stumbleupon.com,pulse.yahoo.com"
//omtr._channelParameter="RSS|rss"
omtr._channelPattern="widgets|widgets_>community|cmty_>affiliate|aff_>partner|prn_>rss|rss_>rss-feedburner|fb_rss"

function s_doPlugins(s) {
	/* Add calls to plugins here */
	
	/*Page Name Plugin*/
	if(!omtr.pageType && !omtr.pageName)
	omtr.pageName=omtr.getPageName();
	
	/* Set Alternate Page Name using URL */
	if(omtr.channel){
	omtr.prop40 = omtr.channel + ':' + omtr.getPageName();
	} else {
	omtr.prop40 = omtr.getPageName();
	}
	
	/* set eVar page Name and event for custom conversions */
	omtr.eVar10="D=pageName";
	if(!omtr.pageLoad)
	{
		omtr.events=omtr.apl(omtr.events,"event1",",",0)
		omtr.pageLoad = 1;
	}
	
	/* HBX Type Link Tracking */
	omtr.hbx_lt = "auto" // manual, auto
	omtr.setupLinkTrack("prop5,prop6,prop7,prop8","SC_LINKS");
	
	///* Automatically Capture Exit Links */
		omtr.exitURL = omtr.exitLinkHandler()
		if(omtr.exitURL)
		{
			omtr.linkTrackEvents = "";
			omtr.setupLinkTrack("prop5,prop6,prop7,prop8","SC_LINKS");
			omtr.linkTrackVars = "prop5,prop6,prop7,prop8";
			omtr.prop6 = 'e:' + omtr.exitURL;
			omtr.linkName = omtr.prop6.toLowerCase()+ ' | ' + omtr.exitURL
		}

		/* Automatically Capture Downloads */
		omtr.downloadURL = omtr.downloadLinkHandler()
		if(omtr.downloadURL)
		{
			omtr.setupLinkTrack("prop5,prop6,prop7,prop8","SC_LINKS");
			omtr.linkTrackVars = "prop43,eVar43,events,prop5,prop6,prop7,prop8";
			omtr.linkTrackEvents = "event46";
			omtr.prop6 = 'download: ' + omtr.prop6 + ' | ' + omtr.downloadURL;
			omtr.prop43 = omtr.prop6;
			omtr.eVar43 = 'D=c43';
			omtr.linkName = omtr.prop6.toLowerCase()+ ' | ' + omtr.downloadURL;
			omtr.events = "event46";
		}

	
	
	/* Get Visit Number Monthly */
	omtr.prop26=omtr.getVisitNum();
	
	/* Get Days Since Last Visit */
	omtr.prop27=omtr.getDaysSinceLastVisit('omtr_lv');
	
	/* New/Repeat Status and Pathing Variables */
	omtr.prop22=omtr.eVar22=omtr.getNewRepeat();
	if(omtr.pageName && omtr.prop22 == 'New') omtr.prop23 = "D=pageName";
	if(omtr.pageName && omtr.prop22 == 'Repeat') omtr.prop24 = "D=pageName";
	
	/* Set Time Parting Variables */
	var currentDate = new Date()
	var year = currentDate.getFullYear()
	omtr.prop41=omtr.eVar41=omtr.getTimeParting('h','-5',year); // Set hour, set for EST
	omtr.prop42=omtr.eVar42=omtr.getTimeParting('d','-5',year); // Set day, set for EST
	//omtr.prop19=omtr.eVar19=omtr.getTimeParting('w','-7',year); // Set Weekend / Weekday
	
	/* Internal Campaign Tracking */
	if(omtr.eVar17)
	{
	omtr.eVar17=omtr.getValOnce(omtr.eVar17,'omtr_evar17',0);
	}
	else
	{
	omtr.eVar17=omtr.getQueryParam('intcmp');//Set campaign here if not set in page already.
	omtr.eVar17=omtr.getValOnce(omtr.eVar17,'omtr_evar17',0);
	}
	if(omtr.eVar17)
	{
	omtr.events = omtr.apl(omtr.events,"event30",",",0);
	}
	
	/* External Campaign Tracking */
	if(omtr.campaign)
	{
	omtr.campaign=omtr.getValOnce(omtr.campaign,'omtr_campaign',0);
	}
	else
	{
	omtr.campaign=omtr.getQueryParam('cmpid,utm_campaign,rss');//Set campaign here if not set in page already.
	omtr.campaign=omtr.getValOnce(omtr.campaign,'omtr_campaign',0);
	}
	if(omtr.campaign)
	{
	omtr.hier3=omtr.crossVisitParticipation(omtr.campaign,'omtr_camapign_cvp','90','15',',','',0);
	omtr.events = omtr.apl(omtr.events,"event29",",",0);
	}
	
	/* Channel Manager */
	omtr.channelManager('cmpid,rss,utm_campaign');
	if(omtr._channel)
	{
	omtr.prop45 = omtr._channel;
	omtr.eVar45 = "D=c45";
	omtr.prop46 = omtr._keywords;
	omtr.eVar46 = "D=c46";
	omtr.prop47 = omtr._campaign;
	omtr.eVar47 = "D=c47";
	if(omtr._referringDomain)
	{
	omtr.eVar48 = omtr._referringDomain;
	}
	else
	{
	omtr.eVar48 = 'na';
	}
	if((omtr._channel == 'Paid Search') || (omtr._channel == 'Natural Search'))
	{
	omtr.hier4 = omtr._partner + '>' + omtr._channel + '>' + omtr._keywords;
	}
	omtr.hier3=omtr.crossVisitParticipation(omtr.prop45,'s_prop45_cvp','90','15',',','',0);
	}
	
	/* Campaign Stacking */
	omtr.hier2=omtr.crossVisitParticipation(omtr.campaign,'omtr_campaign_cvp','90','15',',','purchase');
	
	/*********************
	*prop9 is search term
	*evar9 is search term
	*event2 is searches
	*NOTE: for null searches, prepend null: to the search term: i.e. omtr.prop9='null:teeth cleaning'
	*********************/
	if(omtr.prop9){
	omtr.eVar9=omtr.prop9.toLowerCase();
	var t_search=omtr.getValOnce(omtr.eVar9,'eVar9',0);
	if(t_search) {
	if(omtr.events)
	omtr.events=omtr.apl(omtr.events,"event2",",",0)
	else
	omtr.events="event2"
	}
	}
	
	/* Copy props to eVars */
	/*NOTE: These variables only pass the value from the prop to the eVar when the js loads */
	/*NOTE: Thus, if flash or AJAX calls are used, you much set the prop to the eVar manually */
	if(omtr.prop1&&!omtr.eVar1) omtr.eVar1="D=c1"; //Page Level 1
	if(omtr.prop2&&!omtr.eVar2) omtr.eVar2="D=c2"; //Page Level 2
	if(omtr.prop3&&!omtr.eVar3) omtr.eVar3="D=c3"; //Page Level 3
	if(omtr.prop4&&!omtr.eVar4) omtr.eVar4="D=c4"; //Page Level 4
	if(omtr.prop11&&!omtr.eVar11) omtr.eVar11="D=c11"; //Detail Content ID
	if(omtr.prop12&&!omtr.eVar12) omtr.eVar12="D=c12"; //Detail Content Name
	if(omtr.prop13&&!omtr.eVar13) omtr.eVar13="D=c13"; //Detail Content Type
	if(omtr.prop14&&!omtr.eVar14) omtr.eVar14="D=c14"; //Detail Content Author
	if(omtr.prop15&&!omtr.eVar15) omtr.eVar15="D=c15"; //Detail Content Data Source
	if(omtr.prop16&&!omtr.eVar16) omtr.eVar16="D=c16";	
	if(omtr.prop17&&!omtr.eVar17) omtr.eVar17="D=c17";	
	if(omtr.prop18&&!omtr.eVar18) omtr.eVar18="D=c18";	
	if(omtr.prop19&&!omtr.eVar19) omtr.eVar19="D=c19";	//Language
	if(omtr.prop20&&!omtr.eVar20) omtr.eVar20="D=c20"; //Tool Name
	if(omtr.prop21&&!omtr.eVar21) omtr.eVar21="D=c21"; //Member ID
	if(omtr.prop28&&!omtr.eVar28) omtr.eVar28="D=c28"; //Application/Lead Name
	if(omtr.prop29&&!omtr.eVar29) omtr.eVar29="D=c29"; //Share Name
	if(omtr.prop30&&!omtr.eVar30) omtr.eVar30="D=c30"; //Share Format
	if(omtr.prop49&&!omtr.eVar49) omtr.eVar49="D=c49"; //Slide Show Gallery 
	if(omtr.prop52&&!omtr.eVar52) omtr.eVar52="D=c52";	//Slide Show Gallery
		  
}
omtr.doPlugins=s_doPlugins
/************************** PLUGINS SECTION *************************/
/* You may insert any plugins you wish to use here.                 */
/*
 * Plugin: exitLinkHandler 0.5 - identify and report exit links
 */
omtr.exitLinkHandler=new Function("p",""
+"var s=this,h=s.p_gh(),n='linkInternalFilters',i,t;if(!h||(s.linkTyp"
+"e&&(h||s.linkName)))return '';i=h.indexOf('?');t=s[n];s[n]=p?p:t;h="
+"s.linkLeaveQueryString||i<0?h:h.substring(0,i);if(s.lt(h)=='e')s.li"
+"nkType='e';else h='';s[n]=t;return h;");
/*
 * Plugin: downloadLinkHandler 0.5 - identify and report download links
 */
omtr.downloadLinkHandler=new Function("p",""
+"var s=this,h=s.p_gh(),n='linkDownloadFileTypes',i,t;if(!h||(s.linkT"
+"ype&&(h||s.linkName)))return '';i=h.indexOf('?');t=s[n];s[n]=p?p:t;"
+"if(s.lt(h)=='d')s.linkType='d';else h='';s[n]=t;return h;");
/*
 * Plugin: linkHandler 0.5 - identify and report custom links
 */
omtr.linkHandler=new Function("p","t",""
+"var s=this,h=s.p_gh(),i,l;t=t?t:'o';if(!h||(s.linkType&&(h||s.linkN"
+"ame)))return '';i=h.indexOf('?');h=s.linkLeaveQueryString||i<0?h:h."
+"substring(0,i);l=s.pt(p,'|','p_gn',h.toLowerCase());if(l){s.linkNam"
+"e=l=='[['?'':l;s.linkType=t;return h;}return '';");
omtr.p_gn=new Function("t","h",""
+"var i=t?t.indexOf('~'):-1,n,x;if(t&&h){n=i<0?'':t.substring(0,i);x="
+"t.substring(i+1);if(h.indexOf(x.toLowerCase())>-1)return n?n:'[[';}"
+"return 0;");
 /*
 * channelManager v2.4 - Tracking External Traffic
 */
 omtr.channelManager=new Function("a","b","c","d","e","f",""
 +"var s=this,A,B,g,l,m,M,p,q,P,h,k,u,S,i,O,T,j,r,t,D,E,F,G,H,N,U,v=0,"
 +"X,Y,W,n=new Date;n.setTime(n.getTime()+1800000);if(e){v=1;if(s.c_r("
 +"e)){v=0}if(!s.c_w(e,1,n)){s.c_w(e,1,0)}if(!s.c_r(e)){v=0}}g=s.refer"
 +"rer?s.referrer:document.referrer;g=g.toLowerCase();if(!g){h=1}i=g.i"
 +"ndexOf('?')>-1?g.indexOf('?'):g.length;j=g.substring(0,i);k=s.linkI"
 +"nternalFilters.toLowerCase();k=s.split(k,',');l=k.length;for(m=0;m<"
 +"l;m++){B=j.indexOf(k[m])==-1?'':g;if(B)O=B}if(!O&&!h){p=g;U=g.index"
 +"Of('//');q=U>-1?U+2:0;Y=g.indexOf('/',q);r=Y>-1?Y:i;t=g.substring(q"
 +",r);t=t.toLowerCase();u=t;P='Referrers';S=s.seList+'>'+s._extraSear"
 +"chEngines;if(d==1){j=s.repl(j,'oogle','%');j=s.repl(j,'ahoo','^');g"
 +"=s.repl(g,'as_q','*')}A=s.split(S,'>');T=A.length;for(i=0;i<T;i++){"
 +"D=A[i];D=s.split(D,'|');E=s.split(D[0],',');F=E.length;for(G=0;G<F;"
 +"G++){H=j.indexOf(E[G]);if(H>-1){i=s.split(D[1],',');U=i.length;for("
 +"k=0;k<U;k++){l=s.getQueryParam(i[k],'',g);if(l){l=l.toLowerCase();M"
 +"=l;if(D[2]){u=D[2];N=D[2]}else{N=t}if(d==1){N=s.repl(N,'#',' - ');g"
 +"=s.repl(g,'*','as_q');N=s.repl(N,'^','ahoo');N=s.repl(N,'%','oogle'"
 +");}}}}}}}if(!O||f!='1'){O=s.getQueryParam(a,b);if(O){u=O;if(M){P='P"
 +"aid Search'}else{P='Paid Non-Search';}}if(!O&&M){u=N;P='Natural Sea"
 +"rch'}}if(h==1&&!O&&v==1){u=P=t=p='Direct Load'}X=M+u+t;c=c?c:'c_m';"
 +"if(c!='0'){X=s.getValOnce(X,c,0);}g=s._channelDomain;if(g&&X){k=s.s"
 +"plit(g,'>');l=k.length;for(m=0;m<l;m++){q=s.split(k[m],'|');r=s.spl"
 +"it(q[1],',');S=r.length;for(T=0;T<S;T++){Y=r[T];Y=Y.toLowerCase();i"
 +"=j.indexOf(Y);if(i>-1)P=q[0]}}}g=s._channelParameter;if(g&&X){k=s.s"
 +"plit(g,'>');l=k.length;for(m=0;m<l;m++){q=s.split(k[m],'|');r=s.spl"
 +"it(q[1],',');S=r.length;for(T=0;T<S;T++){U=s.getQueryParam(r[T]);if"
 +"(U)P=q[0]}}}g=s._channelPattern;if(g&&X){k=s.split(g,'>');l=k.lengt"
 +"h;for(m=0;m<l;m++){q=s.split(k[m],'|');r=s.split(q[1],',');S=r.leng"
 +"th;for(T=0;T<S;T++){Y=r[T];Y=Y.toLowerCase();i=O.toLowerCase();H=i."
 +"indexOf(Y);if(H==0)P=q[0]}}}if(X)M=M?M:'n/a';p=X&&p?p:'';t=X&&t?t:'"
 +"';N=X&&N?N:'';O=X&&O?O:'';u=X&&u?u:'';M=X&&M?M:'';P=X&&P?P:'';s._re"
 +"ferrer=p;s._referringDomain=t;s._partner=N;s._campaignID=O;s._campa"
 +"ign=u;s._keywords=M;s._channel=P");
 /* non-custom list */
 omtr.seList="search.aol.com,search.aol.ca|query,q|AOL.com Search>ask.com"
 +",ask.co.uk|ask,q|Ask Jeeves>google.co,googlesyndication.com|q,as_q|"
 +"Google>google.com.ar|q,as_q|Google - Argentina>google.com.au|q,as_q"
 +"|Google - Australia>google.be|q,as_q|Google - Belgium>google.com.br"
 +"|q,as_q|Google - Brasil>google.ca|q,as_q|Google - Canada>google.cl|"
 +"q,as_q|Google - Chile>google.cn|q,as_q|Google - China>google.com.co"
 +"|q,as_q|Google - Colombia>google.dk|q,as_q|Google - Denmark>google."
 +"com.do|q,as_q|Google - Dominican Republic>google.fi|q,as_q|Google -"
 +" Finland>google.fr|q,as_q|Google - France>google.de|q,as_q|Google -"
 +" Germany>google.gr|q,as_q|Google - Greece>google.com.hk|q,as_q|Goog"
 +"le - Hong Kong>google.co.in|q,as_q|Google - India>google.co.id|q,as"
 +"_q|Google - Indonesia>google.ie|q,as_q|Google - Ireland>google.co.i"
 +"l|q,as_q|Google - Israel>google.it|q,as_q|Google - Italy>google.co."
 +"jp|q,as_q|Google - Japan>google.com.my|q,as_q|Google - Malaysia>goo"
 +"gle.com.mx|q,as_q|Google - Mexico>google.nl|q,as_q|Google - Netherl"
 +"ands>google.co.nz|q,as_q|Google - New Zealand>google.com.pk|q,as_q|"
 +"Google - Pakistan>google.com.pe|q,as_q|Google - Peru>google.com.ph|"
 +"q,as_q|Google - Philippines>google.pl|q,as_q|Google - Poland>google"
 +".pt|q,as_q|Google - Portugal>google.com.pr|q,as_q|Google - Puerto R"
 +"ico>google.ro|q,as_q|Google - Romania>google.com.sg|q,as_q|Google -"
 +" Singapore>google.co.za|q,as_q|Google - South Africa>google.es|q,as"
 +"_q|Google - Spain>google.se|q,as_q|Google - Sweden>google.ch|q,as_q"
 +"|Google - Switzerland>google.co.th|q,as_q|Google - Thailand>google."
 +"com.tr|q,as_q|Google - Turkey>google.co.uk|q,as_q|Google - United K"
 +"ingdom>google.co.ve|q,as_q|Google - Venezuela>bing.com|q|Microsoft "
 +"Bing>naver.com,search.naver.com|query|Naver>yahoo.com,search.yahoo."
 +"com|p|Yahoo!>ca.yahoo.com,ca.search.yahoo.com|p|Yahoo! - Canada>yah"
 +"oo.co.jp,search.yahoo.co.jp|p,va|Yahoo! - Japan>sg.yahoo.com,sg.sea"
 +"rch.yahoo.com|p|Yahoo! - Singapore>uk.yahoo.com,uk.search.yahoo.com"
 +"|p|Yahoo! - UK and Ireland>search.cnn.com|query|CNN Web Search>sear"
 +"ch.earthlink.net|q|Earthlink Search>search.comcast.net|q|Comcast Se"
 +"arch>search.rr.com|qs|RoadRunner Search>optimum.net|q|Optimum Searc"
 +"h";

/*
 * Plugin: setupLinkTrack 2.0 - return links for HBX-based link 
 *         tracking in SiteCatalyst (requires omtr.split and omtr.apl)
 */
omtr.setupLinkTrack=new Function("vl","c",""
+"var s=this;var l=s.d.links,cv,cva,vla,h,i,l,t,b,o,y,n,oc,d='';cv=s."
+"c_r(c);if(vl&&cv!=''){cva=s.split(cv,'^^');vla=s.split(vl,',');for("
+"x in vla)s._hbxm(vla[x])?s[vla[x]]=cva[x]:'';}s.c_w(c,'',0);if(!s.e"
+"o&&!s.lnk)return '';o=s.eo?s.eo:s.lnk;y=s.ot(o);n=s.oid(o);if(s.eo&"
+"&o==s.eo){while(o&&!n&&y!='BODY'){o=o.parentElement?o.parentElement"
+":o.parentNode;if(!o)return '';y=s.ot(o);n=s.oid(o);}for(i=0;i<4;i++"
+")if(o.tagName)if(o.tagName.toLowerCase()!='a')if(o.tagName.toLowerC"
+"ase()!='area')o=o.parentElement;}b=s._LN(o);o.lid=b[0];o.lpos=b[1];"
+"if(s.hbx_lt&&s.hbx_lt!='manual'){if((o.tagName&&s._TL(o.tagName)=='"
+"area')){if(!s._IL(o.lid)){if(o.parentNode){if(o.parentNode.name)o.l"
+"id=o.parentNode.name;else o.lid=o.parentNode.id}}if(!s._IL(o.lpos))"
+"o.lpos=o.coords}else{if(s._IL(o.lid)<1)o.lid=s._LS(o.lid=o.text?o.t"
+"ext:o.innerText?o.innerText:'');if(!s._IL(o.lid)||s._II(s._TL(o.lid"
+"),'<img')>-1){h=''+o.innerHTML;bu=s._TL(h);i=s._II(bu,'<img');if(bu"
+"&&i>-1){eval(\"__f=/ src\s*=\s*[\'\\\"]?([^\'\\\" ]+)[\'\\\"]?/i\")"
+";__f.exec(h);if(RegExp.$1)h=RegExp.$1}o.lid=h}}}h=o.href?o.href:'';"
+"i=h.indexOf('?');h=s.linkLeaveQueryString||i<0?h:h.substring(0,i);l"
+"=s.linkName?s.linkName:s._hbxln(h);t=s.linkType?s.linkType.toLowerC"
+"ase():s.lt(h);oc=o.onclick?''+o.onclick:'';cv=s.pageName+'^^'+o.lid"
+"+'^^'+s.pageName+' | '+(o.lid=o.lid?o.lid:'no &lid')+'^^'+o.lpos;if"
+"(t&&(h||l)){cva=s.split(cv,'^^');vla=s.split(vl,',');for(x in vla)s"
+"._hbxm(vla[x])?s[vla[x]]=cva[x]:'';}else if(!t&&oc.indexOf('.tl(')<"
+"0){s.c_w(c,cv,0);}else return ''");
omtr._IL=new Function("a","var s=this;return a!='undefined'?a.length:0");
omtr._II=new Function("a","b","c","var s=this;return a.indexOf(b,c?c:0)"
);
omtr._IS=new Function("a","b","c",""
+"var s=this;return b>s._IL(a)?'':a.substring(b,c!=null?c:s._IL(a))");
omtr._LN=new Function("a","b","c","d",""
+"var s=this;b=a.href;b+=a.name?a.name:'';c=s._LVP(b,'lid');d=s._LVP("
+"b,'lpos');r"
+"eturn[c,d]");
omtr._LVP=new Function("a","b","c","d","e",""
+"var s=this;c=s._II(a,'&'+b+'=');c=c<0?s._II(a,'?'+b+'='):c;if(c>-1)"
+"{d=s._II(a,'&',c+s._IL(b)+2);e=s._IS(a,c+s._IL(b)+2,d>-1?d:s._IL(a)"
+");return e}return ''");
omtr._LS=new Function("a",""
+"var s=this,b,c=100,d,e,f,g;b=(s._IL(a)>c)?escape(s._IS(a,0,c)):esca"
+"pe(a);b=s._LSP(b,'%0A','%20');b=s._LSP(b,'%0D','%20');b=s._LSP(b,'%"
+"09','%20');c=s._IP(b,'%20');d=s._NA();e=0;for(f=0;f<s._IL(c);f++){g"
+"=s._RP(c[f],'%20','');if(s._IL(g)>0){d[e++]=g}}b=d.join('%20');retu"
+"rn unescape(b)");
omtr._LSP=new Function("a","b","c","d","var s=this;d=s._IP(a,b);return d"
+".join(c)");
omtr._IP=new Function("a","b","var s=this;return a.split(b)");
omtr._RP=new Function("a","b","c","d",""
+"var s=this;d=s._II(a,b);if(d>-1){a=s._RP(s._IS(a,0,d)+','+s._IS(a,d"
+"+s._IL(b),s._IL(a)),b,c)}return a");
omtr._TL=new Function("a","var s=this;return a.toLowerCase()");
omtr._NA=new Function("a","var s=this;return new Array(a?a:0)");
omtr._hbxm=new Function("m","var s=this;return (''+m).indexOf('{')<0");
omtr._hbxln=new Function("h","var s=this,n=s.linkNames;if(n)return s.pt("
+"n,',','lnf',h);return ''");
/*                                                                  
 * Plugin: Visit Number By Month 2.0 - Return the user visit number 
 */
omtr.getVisitNum=new Function(""
+"var s=this,e=new Date(),cval,cvisit,ct=e.getTime(),c='s_vnum',c2='s"
+"_invisit';e.setTime(ct+30*24*60*60*1000);cval=s.c_r(c);if(cval){var"
+" i=cval.indexOf('&vn='),str=cval.substring(i+4,cval.length),k;}cvis"
+"it=s.c_r(c2);if(cvisit){if(str){e.setTime(ct+30*60*1000);s.c_w(c2,'"
+"true',e);return str;}else return 'unknown visit number';}else{if(st"
+"r){str++;k=cval.substring(0,i);e.setTime(k);s.c_w(c,k+'&vn='+str,e)"
+";e.setTime(ct+30*60*1000);s.c_w(c2,'true',e);return str;}else{s.c_w"
+"(c,ct+30*24*60*60*1000+'&vn=1',e);e.setTime(ct+30*60*1000);s.c_w(c2"
+",'true',e);return 1;}}"
);
/*
 * Function - read combined cookies v 0.3
 */
if(!omtr.__ccucr){omtr.c_rr=omtr.c_r;omtr.__ccucr = true;
omtr.c_r=new Function("k",""
+"var s=this,d=new Date,v=s.c_rr(k),c=s.c_rr('s_pers'),i,m,e;if(v)ret"
+"urn v;k=s.ape(k);i=c.indexOf(' '+k+'=');c=i<0?s.c_rr('s_sess'):c;i="
+"c.indexOf(' '+k+'=');m=i<0?i:c.indexOf('|',i);e=i<0?i:c.indexOf(';'"
+",i);m=m>0?m:e;v=i<0?'':s.epa(c.substring(i+2+k.length,m<0?c.length:"
+"m));if(m>0&&m!=e)if(parseInt(c.substring(m+1,e<0?c.length:e))<d.get"
+"Time()){d.setTime(d.getTime()-60000);s.c_w(s.epa(k),'',d);v='';}ret"
+"urn v;");}
/*
 * Function - write combined cookies v 0.3
 */
if(!omtr.__ccucw){omtr.c_wr=omtr.c_w;omtr.__ccucw = true;
omtr.c_w=new Function("k","v","e",""
+"this.new2 = true;"
+"var s=this,d=new Date,ht=0,pn='s_pers',sn='s_sess',pc=0,sc=0,pv,sv,"
+"c,i,t;d.setTime(d.getTime()-60000);if(s.c_rr(k)) s.c_wr(k,'',d);k=s"
+".ape(k);pv=s.c_rr(pn);i=pv.indexOf(' '+k+'=');if(i>-1){pv=pv.substr"
+"ing(0,i)+pv.substring(pv.indexOf(';',i)+1);pc=1;}sv=s.c_rr(sn);i=sv"
+".indexOf(' '+k+'=');if(i>-1){sv=sv.substring(0,i)+sv.substring(sv.i"
+"ndexOf(';',i)+1);sc=1;}d=new Date;if(e){if(e.getTime()>d.getTime())"
+"{pv+=' '+k+'='+s.ape(v)+'|'+e.getTime()+';';pc=1;}}else{sv+=' '+k+'"
+"='+s.ape(v)+';';sc=1;}if(sc) s.c_wr(sn,sv,0);if(pc){t=pv;while(t&&t"
+".indexOf(';')!=-1){var t1=parseInt(t.substring(t.indexOf('|')+1,t.i"
+"ndexOf(';')));t=t.substring(t.indexOf(';')+1);ht=ht<t1?t1:ht;}d.set"
+"Time(ht);s.c_wr(pn,pv,d);}return v==s.c_r(s.epa(k));");}
/** Description **
Uses cookies to capture and pass the number of days since the user's
last visit.  Plugin returns a value every time doplugins executes.  
Plugin also uses 2 cookies--uses of the cookie combining utility is
highly recommended for this plugin and other plugins which use cookies.
*/
/*
 * Plugin: Days since last Visit 1.1.H - capture time from last visit
 */
omtr.getDaysSinceLastVisit=new Function("c",""
+"var s=this,e=new Date(),es=new Date(),cval,cval_s,cval_ss,ct=e.getT"
+"ime(),day=24*60*60*1000,f1,f2,f3,f4,f5;e.setTime(ct+3*365*day);es.s"
+"etTime(ct+30*60*1000);f0='Cookies Not Supported';f1='First Visit';f"
+"2='More than 30 days';f3='More than 7 days';f4='Less than 7 days';f"
+"5='Less than 1 day';cval=s.c_r(c);if(cval.length==0){s.c_w(c,ct,e);"
+"s.c_w(c+'_s',f1,es);}else{var d=ct-cval;if(d>30*60*1000){if(d>30*da"
+"y){s.c_w(c,ct,e);s.c_w(c+'_s',f2,es);}else if(d<30*day+1 && d>7*day"
+"){s.c_w(c,ct,e);s.c_w(c+'_s',f3,es);}else if(d<7*day+1 && d>day){s."
+"c_w(c,ct,e);s.c_w(c+'_s',f4,es);}else if(d<day+1){s.c_w(c,ct,e);s.c"
+"_w(c+'_s',f5,es);}}else{s.c_w(c,ct,e);cval_ss=s.c_r(c+'_s');s.c_w(c"
+"+'_s',cval_ss,es);}}cval_s=s.c_r(c+'_s');if(cval_s.length==0) retur"
+"n f0;else if(cval_s!=f1&&cval_s!=f2&&cval_s!=f3&&cval_s!=f4&&cval_s"
+"!=f5) return '';else return cval_s;");

/*
 * Plugin: crossVisitParticipation v1.2
 */
omtr.crossVisitParticipation = new Function("v","cn","ex","ct","dl","ev",""                          
+"var s=this;var ay=s.split(ev,',');for(var u=0;u<ay.length;u++){if(s"                     
+".events&&s.events.indexOf(ay[u])!=-1){s.c_w(cn,'');return '';}}if(!"                     
+"v||v=='')return '';var arry=new Array();var a=new Array();var c=s.c"                     
+"_r(cn);var g=0;var h=new Array();if(c&&c!='') arry=eval(c);var e=ne"                     
+"w Date();e.setFullYear(e.getFullYear()+5);if(arry.length>0&&arry[ar"                     
+"ry.length-1][0]==v)arry[arry.length-1]=[v, new Date().getTime()];el"                     
+"se arry[arry.length]=[v, new Date().getTime()];var data=s.join(arry"                     
+",{delim:',',front:'[',back:']',wrap:'\\''});var start=arry.length-c"                     
+"t < 0?0:arry.length-ct;s.c_w(cn,data,e);for(var x=start;x<arry.leng"                     
+"th;x++){var diff=Math.round(new Date()-new Date(parseInt(arry[x][1]"                     
+")))/86400000;if(diff<ex){h[g]=arry[x][0];a[g++]=arry[x];}}var r=s.j"                     
+"oin(h,{delim:dl});return r;");
 /*
 * Plugin: join
 */
omtr.join = new Function("v","p",""
+"var s = this;var f,b,d,w;if(p){f=p.front?p.front:'';b=p.back?p.back"
+":'';d=p.delim?p.delim:'';w=p.wrap?p.wrap:'';}var str='';for(var x=0"
+";x<v.length;x++){if(typeof(v[x])=='object' )str+=s.join( v[x],p);el"
+"se str+=w+v[x]+w;if(x<v.length-1)str+=d;}return f+str+b;");
 /*
 * Plugin: getPageName v2.1 - parse URL and return
 */
omtr.getPageName=new Function("u",""
+"var s=this,v=u?u:''+s.wd.location,x=v.indexOf(':'),y=v.indexOf('/',"
+"x+4),z=v.indexOf('?'),c=s.pathConcatDelim,e=s.pathExcludeDelim,g=s."
+"queryVarsList,d=s.siteID,n=d?d:'',q=z<0?'':v.substring(z+1),p=v.sub"
+"string(y+1,q?z:v.length);z=p.indexOf('#');p=z<0?p:s.fl(p,z);x=e?p.i"
+"ndexOf(e):-1;p=x<0?p:s.fl(p,x);p+=!p||p.charAt(p.length-1)=='/'?s.d"
+"efaultPage:'';y=c?c:'/';while(p){x=p.indexOf('/');x=x<0?p.length:x;"
+"z=s.fl(p,x);if(!s.pt(s.pathExcludeList,',','p_c',z))n+=n?y+z:z;p=p."
+"substring(x+1)}y=c?c:'?';while(g){x=g.indexOf(',');x=x<0?g.length:x"
+";z=s.fl(g,x);z=s.pt(q,'&','p_c',z);if(z){n+=n?y+z:z;y=c?c:'&'}g=g.s"
+"ubstring(x+1)}return n");
/*
 * Utility Function: p_gh
 */
omtr.p_gh=new Function(""
+"var s=this;if(!s.eo&&!s.lnk)return '';var o=s.eo?s.eo:s.lnk,y=s.ot("
+"o),n=s.oid(o),x=o.s_oidt;if(s.eo&&o==s.eo){while(o&&!n&&y!='BODY'){"
+"o=o.parentElement?o.parentElement:o.parentNode;if(!o)return '';y=s."
+"ot(o);n=s.oid(o);x=o.s_oidt}}return o.href?o.href:'';");
/*
 * Utility Function: p_c
 */
omtr.p_c=new Function("v","c",""
+"var x=v.indexOf('=');return c.toLowerCase()==v.substring(0,x<0?v.le"
+"ngth:x).toLowerCase()?v:0");
/*
 * Plugin: getTimeParting 1.3 - Set timeparting values based on time zone
 */
omtr.getTimeParting=new Function("t","z","y",""
+"dc=new Date('1/1/2000');f=15;ne=8;if(dc.getDay()!=6||"
+"dc.getMonth()!=0){return'Data Not Available'}else{;z=parseInt(z);"
+"if(y=='2009'){f=8;ne=1};gmar=new Date('3/1/'+y);dsts=f-gmar.getDay("
+");gnov=new Date('11/1/'+y);dste=ne-gnov.getDay();spr=new Date('3/'"
+"+dsts+'/'+y);fl=new Date('11/'+dste+'/'+y);cd=new Date();"
+"if(cd>spr&&cd<fl){z=z+1}else{z=z};utc=cd.getTime()+(cd.getTimezoneO"
+"ffset()*60000);tz=new Date(utc + (3600000*z));thisy=tz.getFullYear("
+");var days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Fr"
+"iday','Saturday'];if(thisy!=y){return'Data Not Available'}else{;thi"
+"sh=tz.getHours();thismin=tz.getMinutes();thisd=tz.getDay();var dow="
+"days[thisd];var ap='AM';var dt='Weekday';var mint='00';if(thismin>3"
+"0){mint='30'}if(thish>=12){ap='PM';thish=thish-12};if (thish==0){th"
+"ish=12};if(thisd==6||thisd==0){dt='Weekend'};var timestring=thish+'"
+":'+mint+ap;var daystring=dow;var endstring=dt;if(t=='h'){return tim"
+"estring}if(t=='d'){return daystring};if(t=='w'){return en"
+"dstring}}};"
);
/*
 * Plugin: getNewRepeat 1.0 - Return whether user is new or repeat
 */
omtr.getNewRepeat=new Function(""
+"var s=this,e=new Date(),cval,ct=e.getTime(),y=e.getYear();e.setTime"
+"(ct+30*24*60*60*1000);cval=s.c_r('s_nr');if(cval.length==0){s.c_w("
+"'s_nr',ct,e);return 'New';}if(cval.length!=0&&ct-cval<30*60*1000){s"
+".c_w('s_nr',ct,e);return 'New';}if(cval<1123916400001){e.setTime(cv"
+"al+30*24*60*60*1000);s.c_w('s_nr',ct,e);return 'Repeat';}else retur"
+"n 'Repeat';");
/*
 * Plugin: getQueryParam 2.1 - return query string parameter(s)
 */
omtr.getQueryParam=new Function("p","d","u",""
+"var s=this,v='',i,t;d=d?d:'';u=u?u:(s.pageURL?s.pageURL:s.wd.locati"
+"on);if(u=='f')u=s.gtfs().location;while(p){i=p.indexOf(',');i=i<0?p"
+".length:i;t=s.p_gpv(p.substring(0,i),u+'');if(t)v+=v?d+t:t;p=p.subs"
+"tring(i==p.length?i:i+1)}return v");
omtr.p_gpv=new Function("k","u",""
+"var s=this,v='',i=u.indexOf('?'),q;if(k&&i>-1){q=u.substring(i+1);v"
+"=s.pt(q,'&','p_gvf',k)}return v");
omtr.p_gvf=new Function("t","k",""
+"if(t){var s=this,i=t.indexOf('='),p=i<0?t:t.substring(0,i),v=i<0?'T"
+"rue':t.substring(i+1);if(p.toLowerCase()==k.toLowerCase())return s."
+"epa(v)}return ''");
/*
 * Plugin: getValOnce 0.2 - get a value once per session or number of days
 */
omtr.getValOnce=new Function("v","c","e",""
+"var s=this,k=s.c_r(c),a=new Date;e=e?e:0;if(v){a.setTime(a.getTime("
+")+e*86400000);s.c_w(c,v,e?a:0);}return v==k?'':v");
/*
* Plugin Utility: apl v1.1
*/
omtr.apl=new Function("L","v","d","u",""
+"var s=this,m=0;if(!L)L='';if(u){var i,n,a=s.split(L,d);for(i=0;i<a."
+"length;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowerCas"
+"e()));}}if(!m)L=L?L+d+v:v;return L");
/*
 * Utility Function: split v1.5 - split a string (JS 1.0 compatible)
 */
omtr.split=new Function("l","d",""
+"var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x"
+"++]=l.substring(0,i);l=l.substring(i+d.length);}return a");

 /*
 * Plugin Utility: Replace v1.0
 */
 omtr.repl=new Function("x","o","n",""
 +"var i=x.indexOf(o),l=n.length;while(x&&i>=0){x=x.substring(0,i)+n+x."
 +"substring(i+o.length);i=x.indexOf(o,i+l)}return x");

/* Configure Modules and Plugins */

omtr.loadModule("Media")
omtr.Media.autoTrack=false
omtr.Media.trackWhilePlaying=true
omtr.Media.trackVars="None"
omtr.Media.trackEvents="None"

omtr.loadModule("Integrate")

/* WARNING: Changing any of the below variables will cause drastic
changes to how your visitor data is collected.  Changes should only be
made when instructed to do so by your account manager.*/
omtr.visitorNamespace="foxnews"
//omtr.trackingServer="a.foxnews.com"
//omtr.trackingServerSecure="b.foxnews.com"
omtr.dc="112"

/****************************** MODULES *****************************/
/* Module: Media */
omtr.m_Media_c="var m=s.m_i('Media');m.cn=function(n){var m=this;return m.s.rep(m.s.rep(m.s.rep(n,\"\\n\",''),\"\\r\",''),'--**--','')};m.open=function(n,l,p,b){var m=this,i=new Object,tm=new Date,a='',"
+"x;n=m.cn(n);l=parseInt(l);if(!l)l=1;if(n&&p){if(!m.l)m.l=new Object;if(m.l[n])m.close(n);if(b&&b.id)a=b.id;for (x in m.l)if(m.l[x]&&m.l[x].a==a)m.close(m.l[x].n);i.n=n;i.l=l;i.p=m.cn(p);i.a=a;i.t=0"
+";i.ts=0;i.s=Math.floor(tm.getTime()/1000);i.lx=0;i.lt=i.s;i.lo=0;i.e='';i.to=-1;m.l[n]=i}};m.close=function(n){this.e(n,0,-1)};m.play=function(n,o){var m=this,i;i=m.e(n,1,o);i.m=new Function('var m"
+"=s_c_il['+m._in+'],i;if(m.l){i=m.l[\"'+m.s.rep(i.n,'\"','\\\\\"')+'\"];if(i){if(i.lx==1)m.e(i.n,3,-1);i.mt=setTimeout(i.m,5000)}}');i.m()};m.stop=function(n,o){this.e(n,2,o)};m.track=function(n){va"
+"r m=this;if (m.trackWhilePlaying) {m.e(n,4,-1)}};m.e=function(n,x,o){var m=this,i,tm=new Date,ts=Math.floor(tm.getTime()/1000),ti=m.trackSeconds,tp=m.trackMilestones,z=new Array,j,d='--**--',t=1,b,"
+"v=m.trackVars,e=m.trackEvents,pe='media',pev3,w=new Object,vo=new Object;n=m.cn(n);i=n&&m.l&&m.l[n]?m.l[n]:0;if(i){w.name=n;w.length=i.l;w.playerName=i.p;if(i.to<0)w.event=\"OPEN\";else w.event=(x="
+"=1?\"PLAY\":(x==2?\"STOP\":(x==3?\"MONITOR\":\"CLOSE\")));w.openTime=new Date();w.openTime.setTime(i.s*1000);if(x>2||(x!=i.lx&&(x!=2||i.lx==1))) {b=\"Media.\"+name;pev3 = m.s.ape(i.n)+d+i.l+d+m.s.a"
+"pe(i.p)+d;if(x){if(o<0&&i.lt>0){o=(ts-i.lt)+i.lo;o=o<i.l?o:i.l-1}o=Math.floor(o);if(x>=2&&i.lo<o){i.t+=o-i.lo;i.ts+=o-i.lo;}if(x<=2){i.e+=(x==1?'S':'E')+o;i.lx=x;}else if(i.lx!=1)m.e(n,1,o);i.lt=ts"
+";i.lo=o;pev3+=i.t+d+i.s+d+(m.trackWhilePlaying&&i.to>=0?'L'+i.to:'')+i.e+(x!=2?(m.trackWhilePlaying?'L':'E')+o:'');if(m.trackWhilePlaying){b=0;pe='m_o';if(x!=4){w.offset=o;w.percent=((w.offset+1)/w"
+".length)*100;w.percent=w.percent>100?100:Math.floor(w.percent);w.timePlayed=i.t;if(m.monitor)m.monitor(m.s,w)}if(i.to<0)pe='m_s';else if(x==4)pe='m_i';else{t=0;v=e='None';ti=ti?parseInt(ti):0;z=tp?"
+"m.s.sp(tp,','):0;if(ti&&i.ts>=ti)t=1;else if(z){if(o<i.to)i.to=o;else{for(j=0;j<z.length;j++){ti=z[j]?parseInt(z[j]):0;if(ti&&((i.to+1)/i.l<ti/100)&&((o+1)/i.l>=ti/100)){t=1;j=z.length}}}}}}}else{m"
+".e(n,2,-1);if(m.trackWhilePlaying){w.offset=i.lo;w.percent=((w.offset+1)/w.length)*100;w.percent=w.percent>100?100:Math.floor(w.percent);w.timePlayed=i.t;if(m.monitor)m.monitor(m.s,w)}m.l[n]=0;if(i"
+".e){pev3+=i.t+d+i.s+d+(m.trackWhilePlaying&&i.to>=0?'L'+i.to:'')+i.e;if(m.trackWhilePlaying){v=e='None';pe='m_o'}else{t=0;m.s.fbr(b)}}else t=0;b=0}if(t){vo.linkTrackVars=v;vo.linkTrackEvents=e;vo.p"
+"e=pe;vo.pev3=pev3;m.s.t(vo,b);if(m.trackWhilePlaying){i.ts=0;i.to=o;i.e=''}}}}return i};m.ae=function(n,l,p,x,o,b){if(n&&p){var m=this;if(!m.l||!m.l[n])m.open(n,l,p,b);m.e(n,x,o)}};m.a=function(o,t"
+"){var m=this,i=o.id?o.id:o.name,n=o.name,p=0,v,c,c1,c2,xc=m.s.h,x,e,f1,f2='s_media_'+m._in+'_oc',f3='s_media_'+m._in+'_t',f4='s_media_'+m._in+'_s',f5='s_media_'+m._in+'_l',f6='s_media_'+m._in+'_m',"
+"f7='s_media_'+m._in+'_c',tcf,w;if(!i){if(!m.c)m.c=0;i='s_media_'+m._in+'_'+m.c;m.c++}if(!o.id)o.id=i;if(!o.name)o.name=n=i;if(!m.ol)m.ol=new Object;if(m.ol[i])return;m.ol[i]=o;if(!xc)xc=m.s.b;tcf=n"
+"ew Function('o','var e,p=0;try{if(o.versionInfo&&o.currentMedia&&o.controls)p=1}catch(e){p=0}return p');p=tcf(o);if(!p){tcf=new Function('o','var e,p=0,t;try{t=o.GetQuickTimeVersion();if(t)p=2}catc"
+"h(e){p=0}return p');p=tcf(o);if(!p){tcf=new Function('o','var e,p=0,t;try{t=o.GetVersionInfo();if(t)p=3}catch(e){p=0}return p');p=tcf(o)}}v=\"var m=s_c_il[\"+m._in+\"],o=m.ol['\"+i+\"']\";if(p==1){"
+"p='Windows Media Player '+o.versionInfo;c1=v+',n,p,l,x=-1,cm,c,mn;if(o){cm=o.currentMedia;c=o.controls;if(cm&&c){mn=cm.name?cm.name:c.URL;l=cm.duration;p=c.currentPosition;n=o.playState;if(n){if(n="
+"=8)x=0;if(n==3)x=1;if(n==1||n==2||n==4||n==5||n==6)x=2;}';c2='if(x>=0)m.ae(mn,l,\"'+p+'\",x,x!=2?p:-1,o)}}';c=c1+c2;if(m.s.isie&&xc){x=m.s.d.createElement('script');x.language='jscript';x.type='tex"
+"t/javascript';x.htmlFor=i;x.event='PlayStateChange(NewState)';x.defer=true;x.text=c;xc.appendChild(x);o[f6]=new Function(c1+'if(n==3){x=3;'+c2+'}setTimeout(o.'+f6+',5000)');o[f6]()}}if(p==2){p='Qui"
+"ckTime Player '+(o.GetIsQuickTimeRegistered()?'Pro ':'')+o.GetQuickTimeVersion();f1=f2;c=v+',n,x,t,l,p,p2,mn;if(o){mn=o.GetMovieName()?o.GetMovieName():o.GetURL();n=o.GetRate();t=o.GetTimeScale();l"
+"=o.GetDuration()/t;p=o.GetTime()/t;p2=o.'+f5+';if(n!=o.'+f4+'||p<p2||p-p2>5){x=2;if(n!=0)x=1;else if(p>=l)x=0;if(p<p2||p-p2>5)m.ae(mn,l,\"'+p+'\",2,p2,o);m.ae(mn,l,\"'+p+'\",x,x!=2?p:-1,o)}if(n>0&&"
+"o.'+f7+'>=10){m.ae(mn,l,\"'+p+'\",3,p,o);o.'+f7+'=0}o.'+f7+'++;o.'+f4+'=n;o.'+f5+'=p;setTimeout(\"'+v+';o.'+f2+'(0,0)\",500)}';o[f1]=new Function('a','b',c);o[f4]=-1;o[f7]=0;o[f1](0,0)}if(p==3){p='"
+"RealPlayer '+o.GetVersionInfo();f1=n+'_OnPlayStateChange';c1=v+',n,x=-1,l,p,mn;if(o){mn=o.GetTitle()?o.GetTitle():o.GetSource();n=o.GetPlayState();l=o.GetLength()/1000;p=o.GetPosition()/1000;if(n!="
+"o.'+f4+'){if(n==3)x=1;if(n==0||n==2||n==4||n==5)x=2;if(n==0&&(p>=l||p==0))x=0;if(x>=0)m.ae(mn,l,\"'+p+'\",x,x!=2?p:-1,o)}if(n==3&&(o.'+f7+'>=10||!o.'+f3+')){m.ae(mn,l,\"'+p+'\",3,p,o);o.'+f7+'=0}o."
+"'+f7+'++;o.'+f4+'=n;';c2='if(o.'+f2+')o.'+f2+'(o,n)}';if(m.s.wd[f1])o[f2]=m.s.wd[f1];m.s.wd[f1]=new Function('a','b',c1+c2);o[f1]=new Function('a','b',c1+'setTimeout(\"'+v+';o.'+f1+'(0,0)\",o.'+f3+"
+"'?500:5000);'+c2);o[f4]=-1;if(m.s.isie)o[f3]=1;o[f7]=0;o[f1](0,0)}};m.as=new Function('e','var m=s_c_il['+m._in+'],l,n;if(m.autoTrack&&m.s.d.getElementsByTagName){l=m.s.d.getElementsByTagName(m.s.i"
+"sie?\"OBJECT\":\"EMBED\");if(l)for(n=0;n<l.length;n++)m.a(l[n]);}');if(s.wd.attachEvent)s.wd.attachEvent('onload',m.as);else if(s.wd.addEventListener)s.wd.addEventListener('load',m.as,false)";
omtr.m_i("Media");
/* Module: Integrate */
omtr.m_Integrate_c="var m=s.m_i('Integrate');m.add=function(n,o){var m=this,p;if(!o)o='s_Integrate_'+n;if(!s.wd[o])s.wd[o]=new Object;m[n]=new Object;p=m[n];p._n=n;p._m=m;p._c=0;p._d=0;p.disable=0;p.get"
+"=m.get;p.delay=m.delay;p.ready=m.ready;p.beacon=m.beacon;p.script=m.script;m.l[m.l.length]=n};m._g=function(t){var m=this,s=m.s,i,p,f=(t?'use':'set')+'Vars',tcf;for(i=0;i<m.l.length;i++){p=m[m.l[i]"
+"];if(p&&!p.disable&&p[f]){if(s.apv>=5&&(!s.isopera||s.apv>=7)){tcf=new Function('s','p','f','var e;try{p[f](s,p)}catch(e){}');tcf(s,p,f)}else p[f](s,p)}}};m._t=function(){this._g(1)};m._fu=function"
+"(p,u){var m=this,s=m.s,x,v,tm=new Date;if(u.toLowerCase().substring(0,4) != 'http')u='http://'+u;if(s.ssl)u=s.rep(u,'http:','https:');p.RAND=Math&&Math.random?Math.floor(Math.random()*1000000000000"
+"0):tm.getTime();p.RAND+=Math.floor(tm.getTime()/10800000)%10;for(x in p)if(x&&x.substring(0,1)!='_'&&(!Object||!Object.prototype||!Object.prototype[x])){v=''+p[x];if(v==p[x]||parseFloat(v)==p[x])u="
+"s.rep(u,'['+x+']',s.rep(escape(v),'+','%2B'))}return u};m.get=function(u,v){var p=this,m=p._m;if(!p.disable){if(!v)v='s_'+m._in+'_Integrate_'+p._n+'_get_'+p._c;p._c++;p.VAR=v;p._d++;m.s.loadModule("
+"'Integrate:'+v,m._fu(p,u),0,1,p._n)}};m.delay=function(){var p=this;if(p._d<=0)p._d=1};m.ready=function(){var p=this,m=p._m;p._d=0;if(!p.disable)m.s.dlt()};m._d=function(){var m=this,i,p;for(i=0;i<"
+"m.l.length;i++){p=m[m.l[i]];if(p&&!p.disable&&p._d>0)return 1}return 0};m._x=function(d,n){var p=this[n],x;if(!p.disable){for(x in d)if(x&&(!Object||!Object.prototype||!Object.prototype[x]))p[x]=d["
+"x];p._d--}};m.beacon=function(u){var p=this,m=p._m,s=m.s,imn='s_i_'+m._in+'_Integrate_'+p._n+'_'+p._c,im;if(!p.disable&&s.d.images&&s.apv>=3&&(!s.isopera||s.apv>=7)&&(s.ns6<0||s.apv>=6.1)){p._c++;i"
+"m=s.wd[imn]=new Image;im.src=m._fu(p,u)}};m.script=function(u){var p=this,m=p._m;if(!p.disable)m.s.loadModule(0,m._fu(p,u),0,1)};m.l=new Array;if(m.onLoad)m.onLoad(s,m)";
omtr.m_i("Integrate");

/************* DO NOT ALTER ANYTHING BELOW THIS LINE ! **************/
var s_code='',s_objectID;function s_gi(un,pg,ss){var c="s._c='s_c';s.wd=window;if(!s.wd.s_c_in){s.wd.s_c_il=new Array;s.wd.s_c_in=0;}s._il=s.wd.s_c_il;s._in=s.wd.s_c_in;s._il[s._in]=s;s.wd.s_c_in++;s"
+".an=s_an;s.cls=function(x,c){var i,y='';if(!c)c=this.an;for(i=0;i<x.length;i++){n=x.substring(i,i+1);if(c.indexOf(n)>=0)y+=n}return y};s.fl=function(x,l){return x?(''+x).substring(0,l):x};s.co=func"
+"tion(o){if(!o)return o;var n=new Object,x;for(x in o)if(x.indexOf('select')<0&&x.indexOf('filter')<0)n[x]=o[x];return n};s.num=function(x){x=''+x;for(var p=0;p<x.length;p++)if(('0123456789').indexO"
+"f(x.substring(p,p+1))<0)return 0;return 1};s.rep=s_rep;s.sp=s_sp;s.jn=s_jn;s.ape=function(x){var s=this,h='0123456789ABCDEF',i,c=s.charSet,n,l,e,y='';c=c?c.toUpperCase():'';if(x){x=''+x;if(s.em==3)"
+"return encodeURIComponent(x);else if(c=='AUTO'&&('').charCodeAt){for(i=0;i<x.length;i++){c=x.substring(i,i+1);n=x.charCodeAt(i);if(n>127){l=0;e='';while(n||l<4){e=h.substring(n%16,n%16+1)+e;n=(n-n%"
+"16)/16;l++}y+='%u'+e}else if(c=='+')y+='%2B';else y+=escape(c)}return y}else{x=s.rep(escape(''+x),'+','%2B');if(c&&s.em==1&&x.indexOf('%u')<0&&x.indexOf('%U')<0){i=x.indexOf('%');while(i>=0){i++;if"
+"(h.substring(8).indexOf(x.substring(i,i+1).toUpperCase())>=0)return x.substring(0,i)+'u00'+x.substring(i);i=x.indexOf('%',i)}}}}return x};s.epa=function(x){var s=this;if(x){x=''+x;return s.em==3?de"
+"codeURIComponent(x):unescape(s.rep(x,'+',' '))}return x};s.pt=function(x,d,f,a){var s=this,t=x,z=0,y,r;while(t){y=t.indexOf(d);y=y<0?t.length:y;t=t.substring(0,y);r=s[f](t,a);if(r)return r;z+=y+d.l"
+"ength;t=x.substring(z,x.length);t=z<x.length?t:''}return ''};s.isf=function(t,a){var c=a.indexOf(':');if(c>=0)a=a.substring(0,c);if(t.substring(0,2)=='s_')t=t.substring(2);return (t!=''&&t==a)};s.f"
+"sf=function(t,a){var s=this;if(s.pt(a,',','isf',t))s.fsg+=(s.fsg!=''?',':'')+t;return 0};s.fs=function(x,f){var s=this;s.fsg='';s.pt(x,',','fsf',f);return s.fsg};s.si=function(){var s=this,i,k,v,c="
+"s_gi+'var s=s_gi(\"'+s.oun+'\");s.sa(\"'+s.un+'\");';for(i=0;i<s.va_g.length;i++){k=s.va_g[i];v=s[k];if(v!=undefined){if(typeof(v)=='string')c+='s.'+k+'=\"'+s_fe(v)+'\";';else c+='s.'+k+'='+v+';'}}"
+"c+=\"s.lnk=s.eo=s.linkName=s.linkType=s.wd.s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3='';\";return c};s.c_d='';s.c_gdf=function(t,a){var s=this;if(!s.num(t))return 1;return 0};s.c_gd=function(){var"
+" s=this,d=s.wd.location.hostname,n=s.fpCookieDomainPeriods,p;if(!n)n=s.cookieDomainPeriods;if(d&&!s.c_d){n=n?parseInt(n):2;n=n>2?n:2;p=d.lastIndexOf('.');if(p>=0){while(p>=0&&n>1){p=d.lastIndexOf('"
+".',p-1);n--}s.c_d=p>0&&s.pt(d,'.','c_gdf',0)?d.substring(p):d}}return s.c_d};s.c_r=function(k){var s=this;k=s.ape(k);var c=' '+s.d.cookie,i=c.indexOf(' '+k+'='),e=i<0?i:c.indexOf(';',i),v=i<0?'':s."
+"epa(c.substring(i+2+k.length,e<0?c.length:e));return v!='[[B]]'?v:''};s.c_w=function(k,v,e){var s=this,d=s.c_gd(),l=s.cookieLifetime,t;v=''+v;l=l?(''+l).toUpperCase():'';if(e&&l!='SESSION'&&l!='NON"
+"E'){t=(v!=''?parseInt(l?l:0):-60);if(t){e=new Date;e.setTime(e.getTime()+(t*1000))}}if(k&&l!='NONE'){s.d.cookie=k+'='+s.ape(v!=''?v:'[[B]]')+'; path=/;'+(e&&l!='SESSION'?' expires='+e.toGMTString()"
+"+';':'')+(d?' domain='+d+';':'');return s.c_r(k)==v}return 0};s.eh=function(o,e,r,f){var s=this,b='s_'+e+'_'+s._in,n=-1,l,i,x;if(!s.ehl)s.ehl=new Array;l=s.ehl;for(i=0;i<l.length&&n<0;i++){if(l[i]."
+"o==o&&l[i].e==e)n=i}if(n<0){n=i;l[n]=new Object}x=l[n];x.o=o;x.e=e;f=r?x.b:f;if(r||f){x.b=r?0:o[e];x.o[e]=f}if(x.b){x.o[b]=x.b;return b}return 0};s.cet=function(f,a,t,o,b){var s=this,r,tcf;if(s.apv"
+">=5&&(!s.isopera||s.apv>=7)){tcf=new Function('s','f','a','t','var e,r;try{r=s[f](a)}catch(e){r=s[t](e)}return r');r=tcf(s,f,a,t)}else{if(s.ismac&&s.u.indexOf('MSIE 4')>=0)r=s[b](a);else{s.eh(s.wd,"
+"'onerror',0,o);r=s[f](a);s.eh(s.wd,'onerror',1)}}return r};s.gtfset=function(e){var s=this;return s.tfs};s.gtfsoe=new Function('e','var s=s_c_il['+s._in+'],c;s.eh(window,\"onerror\",1);s.etfs=1;c=s"
+".t();if(c)s.d.write(c);s.etfs=0;return true');s.gtfsfb=function(a){return window};s.gtfsf=function(w){var s=this,p=w.parent,l=w.location;s.tfs=w;if(p&&p.location!=l&&p.location.host==l.host){s.tfs="
+"p;return s.gtfsf(s.tfs)}return s.tfs};s.gtfs=function(){var s=this;if(!s.tfs){s.tfs=s.wd;if(!s.etfs)s.tfs=s.cet('gtfsf',s.tfs,'gtfset',s.gtfsoe,'gtfsfb')}return s.tfs};s.mrq=function(u){var s=this,"
+"l=s.rl[u],n,r;s.rl[u]=0;if(l)for(n=0;n<l.length;n++){r=l[n];s.mr(0,0,r.r,0,r.t,r.u)}};s.br=function(id,rs){var s=this;if(s.disableBufferedRequests||!s.c_w('s_br',rs))s.brl=rs};s.flushBufferedReques"
+"ts=function(){this.fbr(0)};s.fbr=function(id){var s=this,br=s.c_r('s_br');if(!br)br=s.brl;if(br){if(!s.disableBufferedRequests)s.c_w('s_br','');s.mr(0,0,br)}s.brl=0};s.mr=function(sess,q,rs,id,ta,u"
+"){var s=this,dc=s.dc,t1=s.trackingServer,t2=s.trackingServerSecure,tb=s.trackingServerBase,p='.sc',ns=s.visitorNamespace,un=s.cls(u?u:(ns?ns:s.fun)),r=new Object,l,imn='s_i_'+(un),im,b,e;if(!rs){if"
+"(t1){if(t2&&s.ssl)t1=t2}else{if(!tb)tb='2o7.net';if(dc)dc=(''+dc).toLowerCase();else dc='d1';if(tb=='2o7.net'){if(dc=='d1')dc='112';else if(dc=='d2')dc='122';p=''}t1=un+'.'+dc+'.'+p+tb}rs='http'+(s"
+".ssl?'s':'')+'://'+t1+'/b/ss/'+s.un+'/'+(s.mobile?'5.1':'1')+'/H.22.1/'+sess+'?AQB=1&ndh=1'+(q?q:'')+'&AQE=1';if(s.isie&&!s.ismac)rs=s.fl(rs,2047);if(id){s.br(id,rs);return}}if(s.d.images&&s.apv>=3"
+"&&(!s.isopera||s.apv>=7)&&(s.ns6<0||s.apv>=6.1)){if(!s.rc)s.rc=new Object;if(!s.rc[un]){s.rc[un]=1;if(!s.rl)s.rl=new Object;s.rl[un]=new Array;setTimeout('if(window.s_c_il)window.s_c_il['+s._in+']."
+"mrq(\"'+un+'\")',750)}else{l=s.rl[un];if(l){r.t=ta;r.u=un;r.r=rs;l[l.length]=r;return ''}imn+='_'+s.rc[un];s.rc[un]++}im=s.wd[imn];if(!im)im=s.wd[imn]=new Image;im.s_l=0;im.onload=new Function('e',"
+"'this.s_l=1;var wd=window,s;if(wd.s_c_il){s=wd.s_c_il['+s._in+'];s.mrq(\"'+un+'\");s.nrs--;if(!s.nrs)s.m_m(\"rr\")}');if(!s.nrs){s.nrs=1;s.m_m('rs')}else s.nrs++;im.src=rs;if((!ta||ta=='_self'||ta="
+"='_top'||(s.wd.name&&ta==s.wd.name))&&rs.indexOf('&pe=')>=0){b=e=new Date;while(!im.s_l&&e.getTime()-b.getTime()<500)e=new Date}return ''}return '<im'+'g sr'+'c=\"'+rs+'\" width=1 height=1 border=0"
+" alt=\"\">'};s.gg=function(v){var s=this;if(!s.wd['s_'+v])s.wd['s_'+v]='';return s.wd['s_'+v]};s.glf=function(t,a){if(t.substring(0,2)=='s_')t=t.substring(2);var s=this,v=s.gg(t);if(v)s[t]=v};s.gl="
+"function(v){var s=this;if(s.pg)s.pt(v,',','glf',0)};s.rf=function(x){var s=this,y,i,j,h,l,a,b='',c='',t;if(x){y=''+x;i=y.indexOf('?');if(i>0){a=y.substring(i+1);y=y.substring(0,i);h=y.toLowerCase()"
+";i=0;if(h.substring(0,7)=='http://')i+=7;else if(h.substring(0,8)=='https://')i+=8;h=h.substring(i);i=h.indexOf(\"/\");if(i>0){h=h.substring(0,i);if(h.indexOf('google')>=0){a=s.sp(a,'&');if(a.lengt"
+"h>1){l=',q,ie,start,search_key,word,kw,cd,';for(j=0;j<a.length;j++){t=a[j];i=t.indexOf('=');if(i>0&&l.indexOf(','+t.substring(0,i)+',')>=0)b+=(b?'&':'')+t;else c+=(c?'&':'')+t}if(b&&c){y+='?'+b+'&'"
+"+c;if(''+x!=y)x=y}}}}}}return x};s.hav=function(){var s=this,qs='',fv=s.linkTrackVars,fe=s.linkTrackEvents,mn,i;if(s.pe){mn=s.pe.substring(0,1).toUpperCase()+s.pe.substring(1);if(s[mn]){fv=s[mn].tr"
+"ackVars;fe=s[mn].trackEvents}}fv=fv?fv+','+s.vl_l+','+s.vl_l2:'';for(i=0;i<s.va_t.length;i++){var k=s.va_t[i],v=s[k],b=k.substring(0,4),x=k.substring(4),n=parseInt(x),q=k;if(v&&k!='linkName'&&k!='l"
+"inkType'){if(s.pe||s.lnk||s.eo){if(fv&&(','+fv+',').indexOf(','+k+',')<0)v='';if(k=='events'&&fe)v=s.fs(v,fe)}if(v){if(k=='dynamicVariablePrefix')q='D';else if(k=='visitorID')q='vid';else if(k=='pa"
+"geURL'){q='g';v=s.fl(v,255)}else if(k=='referrer'){q='r';v=s.fl(s.rf(v),255)}else if(k=='vmk'||k=='visitorMigrationKey')q='vmt';else if(k=='visitorMigrationServer'){q='vmf';if(s.ssl&&s.visitorMigra"
+"tionServerSecure)v=''}else if(k=='visitorMigrationServerSecure'){q='vmf';if(!s.ssl&&s.visitorMigrationServer)v=''}else if(k=='charSet'){q='ce';if(v.toUpperCase()=='AUTO')v='ISO8859-1';else if(s.em="
+"=2||s.em==3)v='UTF-8'}else if(k=='visitorNamespace')q='ns';else if(k=='cookieDomainPeriods')q='cdp';else if(k=='cookieLifetime')q='cl';else if(k=='variableProvider')q='vvp';else if(k=='currencyCode"
+"')q='cc';else if(k=='channel')q='ch';else if(k=='transactionID')q='xact';else if(k=='campaign')q='v0';else if(k=='resolution')q='s';else if(k=='colorDepth')q='c';else if(k=='javascriptVersion')q='j"
+"';else if(k=='javaEnabled')q='v';else if(k=='cookiesEnabled')q='k';else if(k=='browserWidth')q='bw';else if(k=='browserHeight')q='bh';else if(k=='connectionType')q='ct';else if(k=='homepage')q='hp'"
+";else if(k=='plugins')q='p';else if(s.num(x)){if(b=='prop')q='c'+n;else if(b=='eVar')q='v'+n;else if(b=='list')q='l'+n;else if(b=='hier'){q='h'+n;v=s.fl(v,255)}}if(v)qs+='&'+q+'='+(k.substring(0,3)"
+"!='pev'?s.ape(v):v)}}}return qs};s.ltdf=function(t,h){t=t?t.toLowerCase():'';h=h?h.toLowerCase():'';var qi=h.indexOf('?');h=qi>=0?h.substring(0,qi):h;if(t&&h.substring(h.length-(t.length+1))=='.'+t"
+")return 1;return 0};s.ltef=function(t,h){t=t?t.toLowerCase():'';h=h?h.toLowerCase():'';if(t&&h.indexOf(t)>=0)return 1;return 0};s.lt=function(h){var s=this,lft=s.linkDownloadFileTypes,lef=s.linkExt"
+"ernalFilters,lif=s.linkInternalFilters;lif=lif?lif:s.wd.location.hostname;h=h.toLowerCase();if(s.trackDownloadLinks&&lft&&s.pt(lft,',','ltdf',h))return 'd';if(s.trackExternalLinks&&h.substring(0,1)"
+"!='#'&&(lef||lif)&&(!lef||s.pt(lef,',','ltef',h))&&(!lif||!s.pt(lif,',','ltef',h)))return 'e';return ''};s.lc=new Function('e','var s=s_c_il['+s._in+'],b=s.eh(this,\"onclick\");s.lnk=s.co(this);s.t"
+"();s.lnk=0;if(b)return this[b](e);return true');s.bc=new Function('e','var s=s_c_il['+s._in+'],f,tcf;if(s.d&&s.d.all&&s.d.all.cppXYctnr)return;s.eo=e.srcElement?e.srcElement:e.target;tcf=new Functi"
+"on(\"s\",\"var e;try{if(s.eo&&(s.eo.tagName||s.eo.parentElement||s.eo.parentNode))s.t()}catch(e){}\");tcf(s);s.eo=0');s.oh=function(o){var s=this,l=s.wd.location,h=o.href?o.href:'',i,j,k,p;i=h.inde"
+"xOf(':');j=h.indexOf('?');k=h.indexOf('/');if(h&&(i<0||(j>=0&&i>j)||(k>=0&&i>k))){p=o.protocol&&o.protocol.length>1?o.protocol:(l.protocol?l.protocol:'');i=l.pathname.lastIndexOf('/');h=(p?p+'//':'"
+"')+(o.host?o.host:(l.host?l.host:''))+(h.substring(0,1)!='/'?l.pathname.substring(0,i<0?0:i)+'/':'')+h}return h};s.ot=function(o){var t=o.tagName;t=t&&t.toUpperCase?t.toUpperCase():'';if(t=='SHAPE'"
+")t='';if(t){if((t=='INPUT'||t=='BUTTON')&&o.type&&o.type.toUpperCase)t=o.type.toUpperCase();else if(!t&&o.href)t='A';}return t};s.oid=function(o){var s=this,t=s.ot(o),p,c,n='',x=0;if(t&&!o.s_oid){p"
+"=o.protocol;c=o.onclick;if(o.href&&(t=='A'||t=='AREA')&&(!c||!p||p.toLowerCase().indexOf('javascript')<0))n=s.oh(o);else if(c){n=s.rep(s.rep(s.rep(s.rep(''+c,\"\\r\",''),\"\\n\",''),\"\\t\",''),' '"
+",'');x=2}else if(t=='INPUT'||t=='SUBMIT'){if(o.value)n=o.value;else if(o.innerText)n=o.innerText;else if(o.textContent)n=o.textContent;x=3}else if(o.src&&t=='IMAGE')n=o.src;if(n){o.s_oid=s.fl(n,100"
+");o.s_oidt=x}}return o.s_oid};s.rqf=function(t,un){var s=this,e=t.indexOf('='),u=e>=0?t.substring(0,e):'',q=e>=0?s.epa(t.substring(e+1)):'';if(u&&q&&(','+u+',').indexOf(','+un+',')>=0){if(u!=s.un&&"
+"s.un.indexOf(',')>=0)q='&u='+u+q+'&u=0';return q}return ''};s.rq=function(un){if(!un)un=this.un;var s=this,c=un.indexOf(','),v=s.c_r('s_sq'),q='';if(c<0)return s.pt(v,'&','rqf',un);return s.pt(un,'"
+",','rq',0)};s.sqp=function(t,a){var s=this,e=t.indexOf('='),q=e<0?'':s.epa(t.substring(e+1));s.sqq[q]='';if(e>=0)s.pt(t.substring(0,e),',','sqs',q);return 0};s.sqs=function(un,q){var s=this;s.squ[u"
+"n]=q;return 0};s.sq=function(q){var s=this,k='s_sq',v=s.c_r(k),x,c=0;s.sqq=new Object;s.squ=new Object;s.sqq[q]='';s.pt(v,'&','sqp',0);s.pt(s.un,',','sqs',q);v='';for(x in s.squ)if(x&&(!Object||!Ob"
+"ject.prototype||!Object.prototype[x]))s.sqq[s.squ[x]]+=(s.sqq[s.squ[x]]?',':'')+x;for(x in s.sqq)if(x&&(!Object||!Object.prototype||!Object.prototype[x])&&s.sqq[x]&&(x==q||c<2)){v+=(v?'&':'')+s.sqq"
+"[x]+'='+s.ape(x);c++}return s.c_w(k,v,0)};s.wdl=new Function('e','var s=s_c_il['+s._in+'],r=true,b=s.eh(s.wd,\"onload\"),i,o,oc;if(b)r=this[b](e);for(i=0;i<s.d.links.length;i++){o=s.d.links[i];oc=o"
+".onclick?\"\"+o.onclick:\"\";if((oc.indexOf(\"s_gs(\")<0||oc.indexOf(\".s_oc(\")>=0)&&oc.indexOf(\".tl(\")<0)s.eh(o,\"onclick\",0,s.lc);}return r');s.wds=function(){var s=this;if(s.apv>3&&(!s.isie|"
+"|!s.ismac||s.apv>=5)){if(s.b&&s.b.attachEvent)s.b.attachEvent('onclick',s.bc);else if(s.b&&s.b.addEventListener)s.b.addEventListener('click',s.bc,false);else s.eh(s.wd,'onload',0,s.wdl)}};s.vs=func"
+"tion(x){var s=this,v=s.visitorSampling,g=s.visitorSamplingGroup,k='s_vsn_'+s.un+(g?'_'+g:''),n=s.c_r(k),e=new Date,y=e.getYear();e.setYear(y+10+(y<1900?1900:0));if(v){v*=100;if(!n){if(!s.c_w(k,x,e)"
+")return 0;n=x}if(n%10000>v)return 0}return 1};s.dyasmf=function(t,m){if(t&&m&&m.indexOf(t)>=0)return 1;return 0};s.dyasf=function(t,m){var s=this,i=t?t.indexOf('='):-1,n,x;if(i>=0&&m){var n=t.subst"
+"ring(0,i),x=t.substring(i+1);if(s.pt(x,',','dyasmf',m))return n}return 0};s.uns=function(){var s=this,x=s.dynamicAccountSelection,l=s.dynamicAccountList,m=s.dynamicAccountMatch,n,i;s.un=s.un.toLowe"
+"rCase();if(x&&l){if(!m)m=s.wd.location.host;if(!m.toLowerCase)m=''+m;l=l.toLowerCase();m=m.toLowerCase();n=s.pt(l,';','dyasf',m);if(n)s.un=n}i=s.un.indexOf(',');s.fun=i<0?s.un:s.un.substring(0,i)};"
+"s.sa=function(un){var s=this;s.un=un;if(!s.oun)s.oun=un;else if((','+s.oun+',').indexOf(','+un+',')<0)s.oun+=','+un;s.uns()};s.p_e=function(i,c){var s=this,p;if(!s.p_l)s.p_l=new Object;if(!s.p_l[i]"
+"){p=s.p_l[i]=new Object;p._il=s.wd.s_c_il;p._in=s.wd.s_c_in;p._il[p._in]=p;s.wd.s_c_in++;p.i=i;p.s=s;p.si=s.p_si;p.sh=s.p_sh;p.cr=s.p_cr;p.cw=s.p_cw}p=s.p_l[i];if(!p.e&&!c){p.e=1;if(!s.ppu)s.ppu=''"
+";s.ppu+=(s.ppu?',':'')+i}return p};s.p=function(i,l){var s=this,p=s.p_e(i,1),n;if(l)for(n=0;n<l.length;n++)p[l[n].n]=l[n].f};s.p_m=function(n,a,c){var s=this,m=new Object;m.n=n;if(!c){c=a;a='\"p\","
+"\"s\",\"o\",\"e\"'}else a='\"'+s.rep(a,\",\",\"\\\",\\\"\")+'\"';eval('m.f=new Function('+a+',\"'+s.rep(s.rep(s.rep(s.rep(c,\"\\\\\",\"\\\\\\\\\"),\"\\\"\",\"\\\\\\\"\"),\"\\r\",\"\\\\r\"),\"\\n\","
+"\"\\\\n\")+'\")');return m};s.p_si=function(u){var p=this,s=p.s,n,i;n='s_p_i_'+p.i;if(!p.u&&!s.ss)s.d.write('<im'+'g name=\"'+n+'\" '+(u?'sr'+'c=\"'+u+'\" ':'')+'height=1 width=1 border=0 alt=\"\">"
+"');else if(u&&(s.ios||s.ss)){i=s.wd[n]?s.wd[n]:s.d.images[n];if(!i)i=s.wd[n]=new Image;i.src=u}p.u=1};s.p_sh=function(h){var p=this,s=p.s;if(!p.h&&h)s.d.write(h);p.h=1};s.p_cr=function(k){return th"
+"is.s.c_r(k)};s.p_cw=function(k,v,e){return this.s.c_w(k,v,e)};s.p_r=function(){var s=this,p,n;if(s.p_l)for(n in s.p_l){p=s.p_l[n];if(p&&p.e){if(p.setup&&!p.c)p.setup(p,s);if(p.run)p.run(p,s);if(!p."
+"c)p.c=0;p.c++}}};s.m_i=function(n,a){var s=this,m,f=n.substring(0,1),r,l,i;if(!s.m_l)s.m_l=new Object;if(!s.m_nl)s.m_nl=new Array;m=s.m_l[n];if(!a&&m&&m._e&&!m._i)s.m_a(n);if(!m){m=new Object,m._c="
+"'s_m';m._in=s.wd.s_c_in;m._il=s._il;m._il[m._in]=m;s.wd.s_c_in++;m.s=s;m._n=n;m._l=new Array('_c','_in','_il','_i','_e','_d','_dl','s','n','_r','_g','_g1','_t','_t1','_x','_x1','_rs','_rr','_l');s."
+"m_l[n]=m;s.m_nl[s.m_nl.length]=n}else if(m._r&&!m._m){r=m._r;r._m=m;l=m._l;for(i=0;i<l.length;i++)if(m[l[i]])r[l[i]]=m[l[i]];r._il[r._in]=r;m=s.m_l[n]=r}if(f==f.toUpperCase())s[n]=m;return m};s.m_a"
+"=new Function('n','g','e','if(!g)g=\"m_\"+n;var s=s_c_il['+s._in+'],c=s[g+\"_c\"],m,x,f=0;if(!c)c=s.wd[\"s_\"+g+\"_c\"];if(c&&s_d)s[g]=new Function(\"s\",s_ft(s_d(c)));x=s[g];if(!x)x=s.wd[\\'s_\\'+"
+"g];if(!x)x=s.wd[g];m=s.m_i(n,1);if(x&&(!m._i||g!=\"m_\"+n)){m._i=f=1;if((\"\"+x).indexOf(\"function\")>=0)x(s);else s.m_m(\"x\",n,x,e)}m=s.m_i(n,1);if(m._dl)m._dl=m._d=0;s.dlt();return f');s.m_m=fu"
+"nction(t,n,d,e){t='_'+t;var s=this,i,x,m,f='_'+t,r=0,u;if(s.m_l&&s.m_nl)for(i=0;i<s.m_nl.length;i++){x=s.m_nl[i];if(!n||x==n){m=s.m_i(x);u=m[t];if(u){if((''+u).indexOf('function')>=0){if(d&&e)u=m[t"
+"](d,e);else if(d)u=m[t](d);else u=m[t]()}}if(u)r=1;u=m[t+1];if(u&&!m[f]){if((''+u).indexOf('function')>=0){if(d&&e)u=m[t+1](d,e);else if(d)u=m[t+1](d);else u=m[t+1]()}}m[f]=1;if(u)r=1}}return r};s."
+"m_ll=function(){var s=this,g=s.m_dl,i,o;if(g)for(i=0;i<g.length;i++){o=g[i];if(o)s.loadModule(o.n,o.u,o.d,o.l,o.e,1);g[i]=0}};s.loadModule=function(n,u,d,l,e,ln){var s=this,m=0,i,g,o=0,f1,f2,c=s.h?"
+"s.h:s.b,b,tcf;if(n){i=n.indexOf(':');if(i>=0){g=n.substring(i+1);n=n.substring(0,i)}else g=\"m_\"+n;m=s.m_i(n)}if((l||(n&&!s.m_a(n,g)))&&u&&s.d&&c&&s.d.createElement){if(d){m._d=1;m._dl=1}if(ln){if"
+"(s.ssl)u=s.rep(u,'http:','https:');i='s_s:'+s._in+':'+n+':'+g;b='var s=s_c_il['+s._in+'],o=s.d.getElementById(\"'+i+'\");if(s&&o){if(!o.l&&s.wd.'+g+'){o.l=1;if(o.i)clearTimeout(o.i);o.i=0;s.m_a(\"'"
+"+n+'\",\"'+g+'\"'+(e?',\"'+e+'\"':'')+')}';f2=b+'o.c++;if(!s.maxDelay)s.maxDelay=250;if(!o.l&&o.c<(s.maxDelay*2)/100)o.i=setTimeout(o.f2,100)}';f1=new Function('e',b+'}');tcf=new Function('s','c','"
+"i','u','f1','f2','var e,o=0;try{o=s.d.createElement(\"script\");if(o){o.type=\"text/javascript\";'+(n?'o.id=i;o.defer=true;o.onload=o.onreadystatechange=f1;o.f2=f2;o.l=0;':'')+'o.src=u;c.appendChil"
+"d(o);'+(n?'o.c=0;o.i=setTimeout(f2,100)':'')+'}}catch(e){o=0}return o');o=tcf(s,c,i,u,f1,f2)}else{o=new Object;o.n=n+':'+g;o.u=u;o.d=d;o.l=l;o.e=e;g=s.m_dl;if(!g)g=s.m_dl=new Array;i=0;while(i<g.le"
+"ngth&&g[i])i++;g[i]=o}}else if(n){m=s.m_i(n);m._e=1}return m};s.vo1=function(t,a){if(a[t]||a['!'+t])this[t]=a[t]};s.vo2=function(t,a){if(!a[t]){a[t]=this[t];if(!a[t])a['!'+t]=1}};s.dlt=new Function"
+"('var s=s_c_il['+s._in+'],d=new Date,i,vo,f=0;if(s.dll)for(i=0;i<s.dll.length;i++){vo=s.dll[i];if(vo){if(!s.m_m(\"d\")||d.getTime()-vo._t>=s.maxDelay){s.dll[i]=0;s.t(vo)}else f=1}}if(s.dli)clearTim"
+"eout(s.dli);s.dli=0;if(f){if(!s.dli)s.dli=setTimeout(s.dlt,s.maxDelay)}else s.dll=0');s.dl=function(vo){var s=this,d=new Date;if(!vo)vo=new Object;s.pt(s.vl_g,',','vo2',vo);vo._t=d.getTime();if(!s."
+"dll)s.dll=new Array;s.dll[s.dll.length]=vo;if(!s.maxDelay)s.maxDelay=250;s.dlt()};s.t=function(vo,id){var s=this,trk=1,tm=new Date,sed=Math&&Math.random?Math.floor(Math.random()*10000000000000):tm."
+"getTime(),sess='s'+Math.floor(tm.getTime()/10800000)%10+sed,y=tm.getYear(),vt=tm.getDate()+'/'+tm.getMonth()+'/'+(y<1900?y+1900:y)+' '+tm.getHours()+':'+tm.getMinutes()+':'+tm.getSeconds()+' '+tm.g"
+"etDay()+' '+tm.getTimezoneOffset(),tcf,tfs=s.gtfs(),ta=-1,q='',qs='',code='',vb=new Object;s.gl(s.vl_g);s.uns();s.m_ll();if(!s.td){var tl=tfs.location,a,o,i,x='',c='',v='',p='',bw='',bh='',j='1.0',"
+"k=s.c_w('s_cc','true',0)?'Y':'N',hp='',ct='',pn=0,ps;if(String&&String.prototype){j='1.1';if(j.match){j='1.2';if(tm.setUTCDate){j='1.3';if(s.isie&&s.ismac&&s.apv>=5)j='1.4';if(pn.toPrecision){j='1."
+"5';a=new Array;if(a.forEach){j='1.6';i=0;o=new Object;tcf=new Function('o','var e,i=0;try{i=new Iterator(o)}catch(e){}return i');i=tcf(o);if(i&&i.next)j='1.7'}}}}}if(s.apv>=4)x=screen.width+'x'+scr"
+"een.height;if(s.isns||s.isopera){if(s.apv>=3){v=s.n.javaEnabled()?'Y':'N';if(s.apv>=4){c=screen.pixelDepth;bw=s.wd.innerWidth;bh=s.wd.innerHeight}}s.pl=s.n.plugins}else if(s.isie){if(s.apv>=4){v=s."
+"n.javaEnabled()?'Y':'N';c=screen.colorDepth;if(s.apv>=5){bw=s.d.documentElement.offsetWidth;bh=s.d.documentElement.offsetHeight;if(!s.ismac&&s.b){tcf=new Function('s','tl','var e,hp=0;try{s.b.addBe"
+"havior(\"#default#homePage\");hp=s.b.isHomePage(tl)?\"Y\":\"N\"}catch(e){}return hp');hp=tcf(s,tl);tcf=new Function('s','var e,ct=0;try{s.b.addBehavior(\"#default#clientCaps\");ct=s.b.connectionTyp"
+"e}catch(e){}return ct');ct=tcf(s)}}}else r=''}if(s.pl)while(pn<s.pl.length&&pn<30){ps=s.fl(s.pl[pn].name,100)+';';if(p.indexOf(ps)<0)p+=ps;pn++}s.resolution=x;s.colorDepth=c;s.javascriptVersion=j;s"
+".javaEnabled=v;s.cookiesEnabled=k;s.browserWidth=bw;s.browserHeight=bh;s.connectionType=ct;s.homepage=hp;s.plugins=p;s.td=1}if(vo){s.pt(s.vl_g,',','vo2',vb);s.pt(s.vl_g,',','vo1',vo)}if((vo&&vo._t)"
+"||!s.m_m('d')){if(s.usePlugins)s.doPlugins(s);var l=s.wd.location,r=tfs.document.referrer;if(!s.pageURL)s.pageURL=l.href?l.href:l;if(!s.referrer&&!s._1_referrer){s.referrer=r;s._1_referrer=1}s.m_m("
+"'g');if(s.lnk||s.eo){var o=s.eo?s.eo:s.lnk;if(!o)return '';var p=s.pageName,w=1,t=s.ot(o),n=s.oid(o),x=o.s_oidt,h,l,i,oc;if(s.eo&&o==s.eo){while(o&&!n&&t!='BODY'){o=o.parentElement?o.parentElement:"
+"o.parentNode;if(!o)return '';t=s.ot(o);n=s.oid(o);x=o.s_oidt}oc=o.onclick?''+o.onclick:'';if((oc.indexOf(\"s_gs(\")>=0&&oc.indexOf(\".s_oc(\")<0)||oc.indexOf(\".tl(\")>=0)return ''}if(n)ta=o.target"
+";h=s.oh(o);i=h.indexOf('?');h=s.linkLeaveQueryString||i<0?h:h.substring(0,i);l=s.linkName;t=s.linkType?s.linkType.toLowerCase():s.lt(h);if(t&&(h||l))q+='&pe=lnk_'+(t=='d'||t=='e'?s.ape(t):'o')+(h?'"
+"&pev1='+s.ape(h):'')+(l?'&pev2='+s.ape(l):'');else trk=0;if(s.trackInlineStats){if(!p){p=s.pageURL;w=0}t=s.ot(o);i=o.sourceIndex;if(s.gg('objectID')){n=s.gg('objectID');x=1;i=1}if(p&&n&&t)qs='&pid="
+"'+s.ape(s.fl(p,255))+(w?'&pidt='+w:'')+'&oid='+s.ape(s.fl(n,100))+(x?'&oidt='+x:'')+'&ot='+s.ape(t)+(i?'&oi='+i:'')}}if(!trk&&!qs)return '';s.sampled=s.vs(sed);if(trk){if(s.sampled)code=s.mr(sess,("
+"vt?'&t='+s.ape(vt):'')+s.hav()+q+(qs?qs:s.rq()),0,id,ta);qs='';s.m_m('t');if(s.p_r)s.p_r();s.referrer=''}s.sq(qs);}else{s.dl(vo);}if(vo)s.pt(s.vl_g,',','vo1',vb);s.lnk=s.eo=s.linkName=s.linkType=s."
+"wd.s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3='';if(s.pg)s.wd.s_lnk=s.wd.s_eo=s.wd.s_linkName=s.wd.s_linkType='';if(!id&&!s.tc){s.tc=1;s.flushBufferedRequests()}return code};s.tl=function(o,t,n,vo)"
+"{var s=this;s.lnk=s.co(o);s.linkType=t;s.linkName=n;s.t(vo)};if(pg){s.wd.s_co=function(o){var s=s_gi(\"_\",1,1);return s.co(o)};s.wd.s_gs=function(un){var s=s_gi(un,1,1);return s.t()};s.wd.s_dc=fun"
+"ction(un){var s=s_gi(un,1);return s.t()}}s.ssl=(s.wd.location.protocol.toLowerCase().indexOf('https')>=0);s.d=document;s.b=s.d.body;if(s.d.getElementsByTagName){s.h=s.d.getElementsByTagName('HEAD')"
+";if(s.h)s.h=s.h[0]}s.n=navigator;s.u=s.n.userAgent;s.ns6=s.u.indexOf('Netscape6/');var apn=s.n.appName,v=s.n.appVersion,ie=v.indexOf('MSIE '),o=s.u.indexOf('Opera '),i;if(v.indexOf('Opera')>=0||o>0"
+")apn='Opera';s.isie=(apn=='Microsoft Internet Explorer');s.isns=(apn=='Netscape');s.isopera=(apn=='Opera');s.ismac=(s.u.indexOf('Mac')>=0);if(o>0)s.apv=parseFloat(s.u.substring(o+6));else if(ie>0){"
+"s.apv=parseInt(i=v.substring(ie+5));if(s.apv>3)s.apv=parseFloat(i)}else if(s.ns6>0)s.apv=parseFloat(s.u.substring(s.ns6+10));else s.apv=parseFloat(v);s.em=0;if(s.em.toPrecision)s.em=3;else if(Strin"
+"g.fromCharCode){i=escape(String.fromCharCode(256)).toUpperCase();s.em=(i=='%C4%80'?2:(i=='%U0100'?1:0))}s.sa(un);s.vl_l='dynamicVariablePrefix,visitorID,vmk,visitorMigrationKey,visitorMigrationServ"
+"er,visitorMigrationServerSecure,ppu,charSet,visitorNamespace,cookieDomainPeriods,cookieLifetime,pageName,pageURL,referrer,currencyCode';s.va_l=s.sp(s.vl_l,',');s.vl_t=s.vl_l+',variableProvider,chan"
+"nel,server,pageType,transactionID,purchaseID,campaign,state,zip,events,products,linkName,linkType';for(var n=1;n<76;n++)s.vl_t+=',prop'+n+',eVar'+n+',hier'+n+',list'+n;s.vl_l2=',tnt,pe,pev1,pev2,pe"
+"v3,resolution,colorDepth,javascriptVersion,javaEnabled,cookiesEnabled,browserWidth,browserHeight,connectionType,homepage,plugins';s.vl_t+=s.vl_l2;s.va_t=s.sp(s.vl_t,',');s.vl_g=s.vl_t+',trackingSer"
+"ver,trackingServerSecure,trackingServerBase,fpCookieDomainPeriods,disableBufferedRequests,mobile,visitorSampling,visitorSamplingGroup,dynamicAccountSelection,dynamicAccountList,dynamicAccountMatch,"
+"trackDownloadLinks,trackExternalLinks,trackInlineStats,linkLeaveQueryString,linkDownloadFileTypes,linkExternalFilters,linkInternalFilters,linkTrackVars,linkTrackEvents,linkNames,lnk,eo,_1_referrer'"
+";s.va_g=s.sp(s.vl_g,',');s.pg=pg;s.gl(s.vl_g);if(!ss)s.wds()",
w=window,l=w.s_c_il,n=navigator,u=n.userAgent,v=n.appVersion,e=v.indexOf('MSIE '),m=u.indexOf('Netscape6/'),a,i,s;if(un){un=un.toLowerCase();if(l)for(i=0;i<l.length;i++){s=l[i];if(!s._c||s._c=='s_c'){if(s.oun==un)return s;else if(s.fs&&s.sa&&s.fs(s.oun,un)){s.sa(un);return s}}}}w.s_an='0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
w.s_sp=new Function("x","d","var a=new Array,i=0,j;if(x){if(x.split)a=x.split(d);else if(!d)for(i=0;i<x.length;i++)a[a.length]=x.substring(i,i+1);else while(i>=0){j=x.indexOf(d,i);a[a.length]=x.subst"
+"ring(i,j<0?x.length:j);i=j;if(i>=0)i+=d.length}}return a");
w.s_jn=new Function("a","d","var x='',i,j=a.length;if(a&&j>0){x=a[0];if(j>1){if(a.join)x=a.join(d);else for(i=1;i<j;i++)x+=d+a[i]}}return x");
w.s_rep=new Function("x","o","n","return s_jn(s_sp(x,o),n)");
w.s_d=new Function("x","var t='`^@$#',l=s_an,l2=new Object,x2,d,b=0,k,i=x.lastIndexOf('~~'),j,v,w;if(i>0){d=x.substring(0,i);x=x.substring(i+2);l=s_sp(l,'');for(i=0;i<62;i++)l2[l[i]]=i;t=s_sp(t,'');d"
+"=s_sp(d,'~');i=0;while(i<5){v=0;if(x.indexOf(t[i])>=0) {x2=s_sp(x,t[i]);for(j=1;j<x2.length;j++){k=x2[j].substring(0,1);w=t[i]+k;if(k!=' '){v=1;w=d[b+l2[k]]}x2[j]=w+x2[j].substring(1)}}if(v)x=s_jn("
+"x2,'');else{w=t[i]+' ';if(x.indexOf(w)>=0)x=s_rep(x,w,t[i]);i++;b+=62}}}return x");
w.s_fe=new Function("c","return s_rep(s_rep(s_rep(c,'\\\\','\\\\\\\\'),'\"','\\\\\"'),\"\\n\",\"\\\\n\")");
w.s_fa=new Function("f","var s=f.indexOf('(')+1,e=f.indexOf(')'),a='',c;while(s>=0&&s<e){c=f.substring(s,s+1);if(c==',')a+='\",\"';else if((\"\\n\\r\\t \").indexOf(c)<0)a+=c;s++}return a?'\"'+a+'\"':"
+"a");
w.s_ft=new Function("c","c+='';var s,e,o,a,d,q,f,h,x;s=c.indexOf('=function(');while(s>=0){s++;d=1;q='';x=0;f=c.substring(s);a=s_fa(f);e=o=c.indexOf('{',s);e++;while(d>0){h=c.substring(e,e+1);if(q){i"
+"f(h==q&&!x)q='';if(h=='\\\\')x=x?0:1;else x=0}else{if(h=='\"'||h==\"'\")q=h;if(h=='{')d++;if(h=='}')d--}if(d>0)e++}c=c.substring(0,s)+'new Function('+(a?a+',':'')+'\"'+s_fe(c.substring(o+1,e))+'\")"
+"'+c.substring(e+1);s=c.indexOf('=function(')}return c;");
c=s_d(c);if(e>0){a=parseInt(i=v.substring(e+5));if(a>3)a=parseFloat(i)}else if(m>0)a=parseFloat(u.substring(m+10));else a=parseFloat(v);if(a>=5&&v.indexOf('Opera')<0&&u.indexOf('Opera')<0){w.s_c=new Function("un","pg","ss","var s=this;"+c);return new s_c(un,pg,ss)}else s=new Function("un","pg","ss","var s=new Object;"+s_ft(c)+";return s");return s(un,pg,ss)}




//FOX-29673

if("function"!=typeof DIL)DIL=function(b,c){var d=[],e,j,h,k,v;"object"!=typeof b&&(b={});v=!!b.disableDestinationPublishingIframe;(e=c)&&d.push(e+"");j=b.partner;if(!j||"string"!=typeof j)return e="DIL partner is invalid or not specified in initConfig",DIL.errorModule.handleError({name:"error",message:e,filename:"dil.js"}),Error(e);e="DIL containerNSID is invalid or not specified in initConfig, setting to default of 0";if((h=b.containerNSID)||"number"==typeof h)h=parseInt(h,10),!isNaN(h)&&0<=h&&
(e="");e&&(h=0,d.push(e),e="");k=DIL.getDil(j,h);if(k instanceof DIL&&k.api.getPartner()==j&&k.api.getContainerNSID()==h)return k;if(this instanceof DIL)DIL.registerDil(this,j,h);else return new DIL(b,"DIL was not instantiated with the 'new' operator, returning a valid instance with partner = "+j+" and containerNSID = "+h);var q={IS_HTTPS:"https:"==document.location.protocol,POST_MESSAGE_ENABLED:!!window.postMessage},w={},i={},g={firingQueue:[],fired:[],firing:!1,errored:[],reservedKeys:{sids:!0,
pdata:!0,logdata:!0,callback:!0,postCallbackFn:!0,useImageRequest:!0},callbackPrefix:"demdexRequestCallback",firstRequestHasFired:!1,useJSONP:!0,abortRequests:!1,num_of_jsonp_responses:0,num_of_jsonp_errors:0,num_of_img_responses:0,num_of_img_errors:0,registerRequest:function(a){var f=this.firingQueue;"object"==typeof a&&f.push(a);if(!this.firing&&f.length&&(a=f.shift(),r.fireRequest(a),!this.firstRequestHasFired&&"script"==a.tag))this.firstRequestHasFired=!0}};k=function(){var a="http://fast.";q.IS_HTTPS&&
(a=!0===b.iframeAkamaiHTTPS?"https://fast.":"https://");return a+j+".demdex.net/dest3.html?d_nsid="+h+"#"+encodeURIComponent(document.location.href)};var s={THROTTLE_START:3E4,throttleTimerSet:!1,id:"destination_publishing_iframe_"+j+"_"+h,url:k(),iframe:null,iframeHasLoaded:!1,sendingMessages:!1,messages:[],messageSendingInterval:q.POST_MESSAGE_ENABLED?15:100,jsonProcessed:[],attachIframe:function(){var a=this,f=document.createElement("iframe");f.id=this.id;f.style.cssText="display: none; width: 0; height: 0;";
f.src=this.url;n.addListener(f,"load",function(){a.iframeHasLoaded=!0;a.requestToProcess()});document.body.appendChild(f);this.iframe=f},requestToProcess:function(a){var f=this;a&&!o.isEmptyObject(a)&&this.process(a);if(this.iframeHasLoaded&&this.messages.length&&!this.sendingMessages){if(!this.throttleTimerSet)this.throttleTimerSet=!0,setTimeout(function(){f.messageSendingInterval=q.POST_MESSAGE_ENABLED?15:150},this.THROTTLE_START);this.sendingMessages=!0;this.sendMessages()}},process:function(a){var f=
this.messages,l=encodeURIComponent,m,d,b,c,e;if((m=a.dests)&&m instanceof Array&&(d=m.length))for(b=0;b<d;b++)c=m[b],c=[l("dests"),l(c.id||""),l(c.y||""),l(c.c||"")],f.push(c.join("|"));if((m=a.ibs)&&m instanceof Array&&(d=m.length))for(b=0;b<d;b++)c=m[b],c=[l("ibs"),l(c.id||""),l(c.tag||""),n.encodeAndBuildRequest(c.url||[],","),l(c.ttl||"")],f.push(c.join("|"));if((m=a.dpcalls)&&m instanceof Array&&(d=m.length))for(b=0;b<d;b++)c=m[b],e=c.callback||{},e=[e.obj||"",e.fn||"",e.key||"",e.tag||"",e.url||
""],c=[l("dpm"),l(c.id||""),l(c.tag||""),n.encodeAndBuildRequest(c.url||[],","),l(c.ttl||""),n.encodeAndBuildRequest(e,",")],f.push(c.join("|"));this.jsonProcessed.push(a)},sendMessages:function(){var a=this;this.messages.length?(DIL.xd.postMessage(a.messages.shift(),a.url,a.iframe.contentWindow),setTimeout(function(){a.sendMessages()},this.messageSendingInterval)):this.sendingMessages=!1}},x={traits:function(a){if(o.isValidPdata(a)){if(!(i.sids instanceof Array))i.sids=[];n.extendArray(i.sids,a)}return this},
pixels:function(a){if(o.isValidPdata(a)){if(!(i.pdata instanceof Array))i.pdata=[];n.extendArray(i.pdata,a)}return this},logs:function(a){if(o.isValidLogdata(a)){if("object"!=typeof i.logdata)i.logdata={};n.extendObject(i.logdata,a)}return this},customQueryParams:function(a){o.isEmptyObject(a)||n.extendObject(i,a,g.reservedKeys);return this},signals:function(a,f){var l,m=a;if(!o.isEmptyObject(m)){if(f&&"string"==typeof f)for(l in m={},a)a.hasOwnProperty(l)&&(m[f+l]=a[l]);n.extendObject(i,m,g.reservedKeys)}return this},
result:function(a){if("function"==typeof a)i.callback=a;return this},afterResult:function(a){if("function"==typeof a)i.postCallbackFn=a;return this},useImageRequest:function(){i.useImageRequest=!0;return this},clearData:function(){i={};return this},submit:function(){r.submitRequest(i);i={};return this},getPartner:function(){return j},getContainerNSID:function(){return h},getEventLog:function(){return d},getState:function(){var a={},f={};n.extendObject(a,g,{callbackPrefix:!0,useJSONP:!0,registerRequest:!0});
n.extendObject(f,s,{attachIframe:!0,requestToProcess:!0,process:!0,sendMessages:!0});return{pendingRequest:i,otherRequestInfo:a,destinationPublishingInfo:f}}},r={submitRequest:function(a){g.registerRequest(r.createQueuedRequest(a));return!0},createQueuedRequest:function(a){var f,l=a.callback,m="img";if(!o.isValidPdata(a.sids))d.push("requestProcs.createQueuedRequest(): sids is not valid, converting to an empty array"),a.sids=[];if(!o.isValidPdata(a.pdata))d.push("requestProcs.createQueuedRequest(): pdata is not valid, converting to an empty array"),
a.pdata=[];if(!o.isValidLogdata(a.logdata))d.push("requestProcs.createQueuedRequest(): logdata is not valid, converting to an empty object"),a.logdata={};a.logdataArray=n.convertObjectToKeyValuePairs(a.logdata,"=",!0);a.logdataArray.push("_ts="+(new Date).getTime());if("function"!=typeof l)l=this.defaultCallback;if(g.useJSONP=!a.useImageRequest||"boolean"!=typeof a.useImageRequest)m="script",f=g.callbackPrefix+(new Date).getTime();return{tag:m,src:r.makeRequestSrc(a,f),internalCallbackName:f,callbackFn:l,
postCallbackFn:a.postCallbackFn,useImageRequest:a.useImageRequest,requestData:a}},defaultCallback:function(a){var f,l,m,c,b,d,e,h,j;if((f=a.stuff)&&f instanceof Array&&(l=f.length))for(m=0;m<l;m++)if((c=f[m])&&"object"==typeof c)if(b=c.cn,d=c.cv,e=c.ttl||0,h=c.dmn||"."+document.domain,j=c.type,b&&(d||"number"==typeof d))"var"!=j&&(e=parseInt(e,10))&&!isNaN(e)&&n.setCookie(b,d,1440*e,"/",h,!1),w[b]=d;!v&&!g.abortRequests&&s.requestToProcess(a)},makeRequestSrc:function(a,f){a.sids=o.removeEmptyArrayValues(a.sids||
[]);a.pdata=o.removeEmptyArrayValues(a.pdata||[]);var c=n.encodeAndBuildRequest(a.sids,","),b=n.encodeAndBuildRequest(a.pdata,","),d=(a.logdataArray||[]).join("&");delete a.logdataArray;var e=q.IS_HTTPS?"https://":"http://",i;i=[];var k,t;for(k in a)!(k in g.reservedKeys)&&a.hasOwnProperty(k)&&(t=a[k],t instanceof Array?i.push(k+"="+n.encodeAndBuildRequest(t,",")):i.push(k+"="+encodeURIComponent(t)));i=i.length?"&"+i.join("&"):"";return e+j+".demdex.net/event?d_nsid="+h+(c.length?"&d_sid="+c:"")+
(b.length?"&d_px="+b:"")+(d.length?"&d_ld="+encodeURIComponent(d):"")+i+(g.useJSONP?"&d_rtbd=json&d_jsonv="+DIL.jsonVersion+"&d_dst=1&d_cts=1&d_cb="+(f||""):"")},fireRequest:function(a){"img"==a.tag?this.fireImage(a):"script"==a.tag&&this.fireScript(a)},fireImage:function(a){var f,c;if(!g.abortRequests)g.firing=!0,f=new Image(0,0),f.onload=function(){g.firing=!1;g.fired.push(a);g.num_of_img_responses++;g.registerRequest()},c=function(f){e="imgAbortOrErrorHandler received the event of type "+f.type;
d.push(e);g.abortRequests=!0;g.firing=!1;g.errored.push(a);g.num_of_img_errors++;g.registerRequest()},f.addEventListener?(f.addEventListener("error",c,!1),f.addEventListener("abort",c,!1)):f.attachEvent&&(f.attachEvent("onerror",c),f.attachEvent("onabort",c)),f.src=a.src},fireScript:function(a){var f=this,c,b,h=a.src,i=a.postCallbackFn,k="function"==typeof i;if(!g.abortRequests)g.firing=!0,window[a.internalCallbackName]=function(f){try{f||(f={});var c=a.callbackFn;g.firing=!1;g.fired.push(a);g.num_of_jsonp_responses++;
c(f);k&&i(f)}catch(b){b.message="DIL jsonp callback caught error with message "+b.message;e=b.message;d.push(e);b.filename=b.filename||"dil.js";b.partner=j;DIL.errorModule.handleError(b);try{c({error:b.name+"|"+b.message}),k&&i({error:b.name+"|"+b.message})}catch(l){}}finally{g.registerRequest()}},b=document.createElement("script"),b.addEventListener&&b.addEventListener("error",function(c){e="jsonp script tag error listener received the event of type "+c.type+" with src "+h;f.handleScriptError(e,
a)},!1),b.type="text/javascript",b.src=h,c=document.getElementsByTagName("script")[0],c.parentNode.insertBefore(b,c)},handleScriptError:function(a,f){d.push(a);g.abortRequests=!0;g.firing=!1;g.errored.push(f);g.num_of_jsonp_errors++;g.registerRequest()}},o={isValidPdata:function(a){return a instanceof Array&&this.removeEmptyArrayValues(a).length?!0:!1},isValidLogdata:function(a){return!this.isEmptyObject(a)},isEmptyObject:function(a){if("object"!=typeof a)return!0;for(var f in a)if(a.hasOwnProperty(f))return!1;
return!0},removeEmptyArrayValues:function(a){for(var f=0,c=a.length,b,d=[],f=0;f<c;f++)b=a[f],"undefined"!=typeof b&&null!=b&&d.push(b);return d}},n={addListener:function(){if(document.addEventListener)return function(a,f,b){a.addEventListener(f,function(a){"function"==typeof b&&b(a)},!1)};if(document.attachEvent)return function(a,f,b){a.attachEvent("on"+f,function(a){"function"==typeof b&&b(a)})}}(),convertObjectToKeyValuePairs:function(a,f,b){var c=[],f=f||"=",d,e;for(d in a)e=a[d],"undefined"!=
typeof e&&null!=e&&c.push(d+f+(b?encodeURIComponent(e):e));return c},encodeAndBuildRequest:function(a,f){return this.map(a,function(a){return encodeURIComponent(a)}).join(f)},map:function(a,f){if(Array.prototype.map)return a.map(f);if(void 0===a||null===a)throw new TypeError;var b=Object(a),c=b.length>>>0;if("function"!==typeof f)throw new TypeError;for(var d=Array(c),e=0;e<c;e++)e in b&&(d[e]=f.call(f,b[e],e,b));return d},filter:function(a,b){if(!Array.prototype.filter){if(void 0===a||null===a)throw new TypeError;
var c=Object(a),d=c.length>>>0;if("function"!==typeof b)throw new TypeError;for(var e=[],h=0;h<d;h++)if(h in c){var g=c[h];b.call(b,g,h,c)&&e.push(g)}return e}return a.filter(b)},getCookie:function(a){var a=a+"=",b=document.cookie.split(";"),c,d,e;for(c=0,d=b.length;c<d;c++){for(e=b[c];" "==e.charAt(0);)e=e.substring(1,e.length);if(0==e.indexOf(a))return decodeURIComponent(e.substring(a.length,e.length))}return null},setCookie:function(a,b,c,d,e,h){var g=new Date;c&&(c*=6E4);document.cookie=a+"="+
b+(c?";expires="+(new Date(g.getTime()+c)).toUTCString():"")+(d?";path="+d:"")+(e?";domain="+e:"")+(h?";secure":"")},extendArray:function(a,b){return a instanceof Array&&b instanceof Array?(Array.prototype.push.apply(a,b),!0):!1},extendObject:function(a,b,c){var d;if("object"==typeof a&&"object"==typeof b){for(d in b)if(b.hasOwnProperty(d)&&(o.isEmptyObject(c)||!(d in c)))a[d]=b[d];return!0}return!1}};"error"==j&&0==h&&n.addListener(window,"load",function(){DIL.windowLoaded=!0});var u=function(){z();
!v&&!g.abortRequests&&s.attachIframe()},z=function(){setTimeout(function(){g.firstRequestHasFired||x.submit()},DIL.constants.TIME_TO_DEFAULT_REQUEST)},y=document,p=b.iframeAttachmentDelay;"error"!=j&&(DIL.windowLoaded?u():"complete"!=y.readyState&&"loaded"!=y.readyState?n.addListener(window,"load",u):DIL.isAddedPostWindowLoadWasCalled?n.addListener(window,"load",u):(p="number"==typeof p?parseInt(p,10):0,0>p&&(p=0),setTimeout(u,p||DIL.constants.TIME_TO_CATCH_ALL_DP_IFRAME_ATTACHMENT)));this.api=x;
this.getStuffedVariable=function(a){var b=w[a];!b&&"number"!=typeof b&&(b=n.getCookie(a),!b&&"number"!=typeof b&&(b=""));return b};this.validators=o;this.helpers=n;if(window._unit_tests)this.constants=q,this.pendingRequest=i,this.requestController=g,this.setDestinationPublishingUrl=k,this.destinationPublishing=s,this.requestProcs=r,this.log=d},function(){var b=document,c;if(null==b.readyState&&b.addEventListener)b.readyState="loading",b.addEventListener("DOMContentLoaded",c=function(){b.removeEventListener("DOMContentLoaded",
c,!1);b.readyState="complete"},!1)}(),DIL.extendStaticPropertiesAndMethods=function(b){var c;if("object"==typeof b)for(c in b)b.hasOwnProperty(c)&&(this[c]=b[c])},DIL.extendStaticPropertiesAndMethods({version:"2.3",jsonVersion:1,constants:{TIME_TO_DEFAULT_REQUEST:50,TIME_TO_CATCH_ALL_DP_IFRAME_ATTACHMENT:500},windowLoaded:!1,dils:{},isAddedPostWindowLoadWasCalled:!1,isAddedPostWindowLoad:function(b){this.isAddedPostWindowLoadWasCalled=!0;this.windowLoaded="function"==typeof b?!!b():"boolean"==typeof b?
b:!0},create:function(b){try{return new DIL(b)}catch(c){return(new Image(0,0)).src="http://error.demdex.net/event?d_nsid=0&d_px=14137&d_ld=name%3Derror%26filename%3Ddil.js%26partner%3Dno_partner%26message%3DError%2520in%2520attempt%2520to%2520create%2520DIL%2520instance%2520with%2520DIL.create()%26_ts%3D"+(new Date).getTime(),Error("Error in attempt to create DIL instance with DIL.create()")}},registerDil:function(b,c,d){c=c+"$"+d;c in this.dils||(this.dils[c]=b)},getDil:function(b,c){var d;"string"!=
typeof b&&(b="");c||(c=0);d=b+"$"+c;return d in this.dils?this.dils[d]:Error("The DIL instance with partner = "+b+" and containerNSID = "+c+" was not found")},dexGetQSVars:function(b,c,d){c=this.getDil(c,d);return c instanceof this?c.getStuffedVariable(b):""},xd:{postMessage:function(b,c,d){var e=1;if(c)if(window.postMessage)d.postMessage(b,c.replace(/([^:]+:\/\/[^\/]+).*/,"$1"));else if(c)d.location=c.replace(/#.*$/,"")+"#"+ +new Date+e++ +"&"+b}}}),DIL.errorModule=function(){var b=DIL.create({partner:"error",
containerNSID:0,disableDestinationPublishingIframe:!0}),c={harvestererror:14138,destpuberror:14139,dpmerror:14140,generalerror:14137,error:14137,noerrortypedefined:15021,evalerror:15016,rangeerror:15017,referenceerror:15018,typeerror:15019,urierror:15020};return{handleError:function(d){var e=d.name?(d.name+"").toLowerCase():"",j=[],d={name:e,filename:d.filename?d.filename+"":"",partner:d.partner?d.partner+"":"no_partner",site:d.site?d.site+"":document.location.href,message:d.message?d.message+"":
""};j.push(e in c?c[e]:c.noerrortypedefined);b.api.pixels(j).logs(d).useImageRequest().submit()},pixelMap:c}}();DIL.tools={};
DIL.tools.getSearchReferrer=function(b,c){var d=DIL.getDil("error"),e=DIL.tools.decomposeURI(b||document.referrer),j="",h="",k={queryParam:"q"},j=d.helpers.filter(["object"==typeof c?c:{},{hostPattern:/aol\./},{hostPattern:/ask\./},{hostPattern:/bing\./},{hostPattern:/google\./},{hostPattern:/yahoo\./,queryParam:"p"}],function(b){return!(!b.hasOwnProperty("hostPattern")||!e.hostname.match(b.hostPattern))}).shift();return!j?{valid:!1,name:"",keywords:""}:{valid:!0,name:e.hostname,keywords:(d.helpers.extendObject(k,
j),h=k.queryPattern?(j=(""+e.search).match(k.queryPattern))?j[1]:"":e.uriParams[k.queryParam],decodeURIComponent(h||"").replace(/\+|%20/g," "))}};
DIL.tools.decomposeURI=function(b){var c=DIL.getDil("error"),d=document.createElement("a");d.href=b||document.referrer;return{hash:d.hash,host:d.host.split(":").shift(),hostname:d.hostname,href:d.href,pathname:d.pathname.replace(/^\//,""),protocol:d.protocol,search:d.search,uriParams:function(b,d){c.helpers.map(d.split("&"),function(c){c=c.split("=");b[c.shift()]=c.shift()});return b}({},d.search.replace(/^(\/|\?)?|\/$/g,""))}};
DIL.tools.getMetaTags=function(){var b={},c=document.getElementsByTagName("meta"),d,e,j,h,k;for(d=0,j=arguments.length;d<j;d++)if(h=arguments[d],null!==h)for(e=0;e<c.length;e++)if(k=c[e],k.name==h){b[h]=k.content;break}return b};

// instantiate DIL
DIL.create({
      partner : "foxnews",
      containerNSID : 0
});

// DIL SiteCat module
s = s_gi(s_account);
s.m_DIL = function() {
  var m = s.m_i("DIL");
  m.trackVars = 'pageName,channel,campaign,products,events,referrer,'; 

  for (var i = 0; i <= 75; i++) {
    m.trackVars += 'prop' + i + ',' + 'eVar' + i + ',';
  }

  m.d = 0; 
  m._t = function() { 
    var m = this,
      f = ',' + m.trackVars + ',',
      s = m.s,
      k,
      store = {};
                                         
    if (m.d && !s.pe) { 
      for (var i = 0; i < s.va_t.length; i++) {
        k = s.va_t[i];
        if (f.indexOf(',' + k + ',') >= 0 && s[k] !== undefined) {
         store[k] = s[k];
       }
      }

      m.d.api.signals(store, "c_").submit();           
    }
  };
 m.setup = function(p,i){
    this.d = DIL.getDil('foxnews');
  };
};

s.loadModule("DIL")
s.DIL.setup();

// set aam_did cookie
(function(w, d, args) {
    function setCookie(name, value, expires, path, domain, secure) {
        var today = new Date();
		if (expires) {
			expires = expires * 1000 * 60;
		}
		document.cookie = name + '=' + value + ((expires) ? ';expires=' + new Date(today.getTime() + expires).toUTCString() : '') + ((path) ? ';path=' + path : '') + ((domain) ? ';domain=' + domain : '') + ((secure) ? ';secure' : '');
    }

    var cookie = {
        name : args.cookie_name || "aam_did",
        days : args.cookie_days || 100,
		domain : args.cookie_domain || "." + document.domain
    };
	var cb = args.callback_func || function(arg) {
		if (arg && arg.uuid) {
			setCookie(cookie.name, arg.uuid, cookie.days * 24 * 60, '/', cookie.domain, false);
		}
	};
    var callback = {
        name : args.callback_name || "_aam_cb",
        remove : function() {
            try {
                delete window[callback.name];
            }
            catch(e) {
                window[callback.name] = null;
            }
        },  
        func : function(arg) {
            cb(arg);
            callback.remove()
        }
    };
    var script = d.createElement('script');
    var first_script = document.getElementsByTagName('script')[0];
    var done = false;

    w[callback.name] = callback.func;
    script.onload = script.onreadystatechange = function() {
        if (!done && (!this.readyState || script.readyState == "loaded" || script.readyState == "complete")) {
            done = true;
            script.onload = script.onreadystatechange = null;

            if (script && script.parentNode) {
                script.parentNode.removeChild(script);
            }
        }
    };
    script.src = window.location.protocol + "//" + args.subdomain + ".demdex.net/event?d_rtbd=json&d_cb=" + callback.name;
    first_script.parentNode.insertBefore(script, first_script);
}(window, document, {
        subdomain : "foxnews",
	cookie_name : "aam_did",
	cookie_days : 2,
	cookie_domain : document.domain,
	callback_name : "_aam_cb"
}));