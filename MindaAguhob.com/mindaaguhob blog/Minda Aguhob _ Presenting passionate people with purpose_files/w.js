/*! wpt - v5.1.11 */!function(a,b){"use strict";var c,d,e,f,g={},h=[],i=!0,j=!0,k=!0,l=11,m="woopra.com/track/",n="__woopraid";!function(a,b){function c(a){var c=b[a];b[a]=function(a){return f(c(a))}}function d(b,c,d){return d=this,g.unshift([d,b,c,function(b){var b=b||a.event;b.preventDefault=b.preventDefault||function(){b.returnValue=!1},b.stopPropagation=b.stopPropagation||function(){b.cancelBubble=!0},b.currentTarget=d,b.target=b.srcElement||d,c.call(d,b)}]),this.attachEvent("on"+b,g[0][3])}function e(a,b){for(var c,d=0;c=g[d];++d)if(c[0]==this&&c[1]==a&&c[2]==b)return this.detachEvent("on"+a,g.splice(d,1)[0][3])}function f(a,b){if(a&&(b=a.length))for(;b--;)a[b].addEventListener=d,a[b].removeEventListener=e;else a&&(a.addEventListener=d,a.removeEventListener=e);return a}if(!a.addEventListener){var g=[];f([b,a]),"Element"in a?(a.Element.prototype.addEventListener=d,a.Element.prototype.removeEventListener=e):(b.attachEvent("onreadystatechange",function(){f(b.all)}),c("getElementsByTagName"),c("getElementById"),c("createElement"),f(b.all))}}(a,b),Array.prototype.indexOf||(Array.prototype.indexOf=function(a,b){if(void 0===this||null===this)throw new TypeError('"this" is null or not defined');var c=this.length>>>0;for(b=+b||0,1/0===Math.abs(b)&&(b=0),0>b&&(b+=c,0>b&&(b=0));c>b;b++)if(this[b]===a)return b;return-1}),g.extend=function(a,b){for(var c in b)a[c]=b[c]},g.serializeForm=function(a,b){if(a&&"FORM"===a.nodeName){var c,d,e=b||{},f=e.exclude||[],g={};for(c=a.elements.length-1;c>=0;c-=1)if(!(""===a.elements[c].name||f.indexOf(a.elements[c].name)>-1))switch(a.elements[c].nodeName){case"INPUT":switch(a.elements[c].type){case"text":case"hidden":case"button":case"reset":case"submit":g[a.elements[c].name]=a.elements[c].value;break;case"checkbox":case"radio":a.elements[c].checked&&(g[a.elements[c].name]=a.elements[c].value);break;case"file":}break;case"TEXTAREA":g[a.elements[c].name]=a.elements[c].value;break;case"SELECT":switch(a.elements[c].type){case"select-one":g[a.elements[c].name]=a.elements[c].value;break;case"select-multiple":for(d=a.elements[c].options.length-1;d>=0;d-=1)a.elements[c].options[d].selected&&(g[a.elements[c].name]=a.elements[c].options[d].value)}break;case"BUTTON":switch(a.elements[c].type){case"reset":case"submit":case"button":g[a.elements[c].name]=a.elements[c].value}}return g}};var o={getItem:function(a){return a?decodeURIComponent(b.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(a).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null:null},setItem:function(a,c,d,e,f,g){if(!a||/^(?:expires|max\-age|path|domain|secure)$/i.test(a))return!1;var h="";if(d)switch(d.constructor){case Number:h=1/0===d?"; expires=Fri, 31 Dec 9999 23:59:59 GMT":"; max-age="+d;break;case String:h="; expires="+d;break;case Date:h="; expires="+d.toUTCString()}return b.cookie=encodeURIComponent(a)+"="+encodeURIComponent(c)+h+(f?"; domain="+f:"")+(e?"; path="+e:"")+(g?"; secure":""),!0},removeItem:function(a,c,d){return this.hasItem(a)?(b.cookie=encodeURIComponent(a)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT"+(d?"; domain="+d:"")+(c?"; path="+c:""),!0):!1},hasItem:function(a){return a?new RegExp("(?:^|;\\s*)"+encodeURIComponent(a).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=").test(b.cookie):!1},keys:function(){for(var a=b.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g,"").split(/\s*(?:\=[^;]*)?;\s*/),c=a.length,d=0;c>d;d++)a[d]=decodeURIComponent(a[d]);return a}};g.docCookies=o,g.location=function(b,c){if("undefined"!=typeof a.location[b]){if("undefined"==typeof c)return a.location[b];a.location[b]=c}},g.getCampaignData=function(){for(var a,b,c=g.getUrlParams(),d={},e=["source","medium","content","campaign","term"],f=0;f<e.length;f++)a=e[f],b=c["utm_"+a]||c["woo_"+a],"undefined"!=typeof b&&(d["campaign_"+("campaign"===a?"name":a)]=b);return d},g.getCustomData=function(a,b){var c,d,e,f=g.getUrlParams(),h=b||"wv_";for(c in f)f.hasOwnProperty(c)&&(e=f[c],c.substring(0,h.length)===h&&(d=c.substring(h.length),a.call(this,d,e)))},g.getVisitorUrlData=function(a){g.getCustomData.call(a,a.identify,"wv_")},g.hideCampaignData=function(){return g.hideUrlParams(["wv_","woo_","utm_"])},g.hideCrossDomainId=function(){return g.hideUrlParams([n])},g.hideUrlParams=function(b){var c=new RegExp("[?&]+((?:"+b.join("|")+")[^=&]*)=([^&#]*)","gi"),d=g.location("href").replace(c,"");return a.history&&a.history.replaceState&&a.history.replaceState(null,null,d),d},g.getUrlParams=function(){var a={},b=g.location("href");return b&&b.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(b,c,d){a[c]=decodeURIComponent(d.split("+").join(" "))}),a},g.buildUrlParams=function(a,b){var c,d=b||"",e=[];if("undefined"==typeof a)return a;for(c in a)a.hasOwnProperty(c)&&"undefined"!==a[c]&&"null"!==a[c]&&"undefined"!=typeof a[c]&&e.push(d+encodeURIComponent(c)+"="+encodeURIComponent(a[c]));return e.join("&")},g.randomString=function(){var a,b,c="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",d="";for(a=0;12>a;a++)b=Math.floor(Math.random()*c.length),d+=c.substring(b,b+1);return d},g.loadScript=function(a,c){var d,e,f=b.createElement("script");f.type="text/javascript",f.async=!0,c&&"function"==typeof c&&(e=c),"undefined"!=typeof f.onreadystatechange?f.onreadystatechange=function(){(4===this.readyState||"complete"===this.readyState||"loaded"===this.readyState)&&(e&&e(),g.removeScript(f))}:(f.onload=function(){e&&e(),g.removeScript(f)},f.onerror=function(){g.removeScript(f)}),f.src=a,d=b.getElementsByTagName("script")[0],d.parentNode.insertBefore(f,d)},g.removeScript=function(a){a&&a.parentNode&&a.parentNode.removeChild(a)},g.getElement=function(a,c){var d="string"==typeof a?c||{}:a||{},e=a;if(d.el)return d.el;if("string"==typeof a){if(b.querySelectorAll)return b.querySelectorAll(e);if("#"===a[0])return e=a.substr(1),b.getElementById(e);if("."===a[0])return e=a.substr(1),b.getElementsByClassName(e)}},g.getDomain=function(a){var b=a||g.location("hostname"),c={"com.au":1,"net.au":1,"org.au":1,"co.hu":1,"com.ru":1,"ac.za":1,"net.za":1,"com.za":1,"co.za":1,"co.uk":1,"org.uk":1,"me.uk":1,"net.uk":1},d=b.substring(b.lastIndexOf(".",b.lastIndexOf(".")-1)+1);return c[d]&&(d=b.substring(b.lastIndexOf(".",b.indexOf(d)-2)+1)),d},g.getHostnameNoWww=function(){var a=g.location("hostname");return 0===a.indexOf("www.")?a.replace("www.",""):a},g.endsWith=function(a,b){return-1!==a.indexOf(b,a.length-b.length)},g.startsWith=function(a,b){return 0===a.indexOf(b)},c=g._on=function(a,b,c){var d=a.instanceName;h[b]||(h[b]={}),h[b][d]=a,a.__l&&(a.__l[b]||(a.__l[b]=[]),a.__l[b].push(c))},g._fire=function(a){var b,c,d=h[a];if(d)for(var e in d)if(d.hasOwnProperty(e)&&(b=d[e],c=b&&b.__l,c&&c[a]))for(var f=0;f<c[a].length;f++)c[a][f].apply(this,Array.prototype.slice.call(arguments,1))},g.attachEvent=function(a,b,c){a.addEventListener?a.addEventListener(b,c):a.attachEvent&&a.attachEvent("on"+b,function(a){var a=a||win.event;a.preventDefault=a.preventDefault||function(){a.returnValue=!1},a.stopPropagation=a.stopPropagation||function(){a.cancelBubble=!0},c.call(self,a)})},g.leftClick=function(b){b=b||a.event;var c="undefined"!=typeof b.which&&1===b.which||"undefined"!=typeof b.button&&0===b.button;return c&&!b.metaKey&&!b.altKey&&!b.ctrlKey&&!b.shiftKey},g.redirect=function(a){g.location("href",a)},g.isOutgoingLink=function(a){var b=g.location("hostname"),c=g.getDomain(b);return!(a===b||a.replace(/^www\./,"")===b.replace(/^www\./,"")||k&&c===g.getDomain(a)||g.startsWith(a,"javascript")||""===a||"#"===a)},function(c,h){c(b,"mousedown",function(a){var b;if(h("mousemove",a,new Date),f){for(b=a.srcElement||a.target;"undefined"!=typeof b&&null!==b&&(!b.tagName||"a"!==b.tagName.toLowerCase());)b=b.parentNode;"undefined"!=typeof b&&null!==b&&h("auto_decorate",b)}}),c(b,"click",function(b){var c,f,k,l="_blank";if(c=b.srcElement||b.target,g.leftClick(b)&&h("click",b,c),i||j){for(;"undefined"!=typeof c&&null!==c&&(!c.tagName||"a"!==c.tagName.toLowerCase());)c=c.parentNode;"undefined"==typeof c||null===c||c.getAttribute("data-woopra-tracked")||(f=c,k=f.pathname.match(/(?:doc|dmg|eps|svg|xls|ppt|pdf|xls|zip|txt|vsd|vxd|js|css|rar|exe|wma|mov|avi|wmv|mp3|mp4|m4v)($|\&)/),i&&k&&(h("download",f.href),f.target!==l&&g.leftClick(b)&&(b.preventDefault(),b.stopPropagation(),f.setAttribute("data-woopra-tracked",!0),a.setTimeout(function(){f.click()},d))),j&&!k&&g.isOutgoingLink(f.hostname)&&(h("outgoing",f.href),f.target!==l&&g.leftClick(b)&&(b.preventDefault(),b.stopPropagation(),f.setAttribute("data-woopra-tracked",!0),a.setTimeout(function(){f.click()},e))))}}),c(b,"mousemove",function(a){h("mousemove",a,new Date)}),c(b,"keydown",function(){h("keydown")})}(g.attachEvent,g._fire);var p=function(b){this.visitorData={},this.sessionData={},this.options={app:"js-client",use_cookies:!0,ping:!0,ping_interval:12e3,idle_timeout:3e5,idle_threshold:1e4,download_pause:d||200,outgoing_pause:e||200,download_tracking:!0,outgoing_tracking:!0,outgoing_ignore_subdomain:!0,hide_campaign:!1,hide_xdm_data:!1,campaign_once:!1,third_party:!1,save_url_hash:!0,cross_domain:!1,region:null,ignore_query_url:!1,cookie_name:"wooTracker",cookie_domain:"."+g.getHostnameNoWww(),cookie_path:"/",cookie_expire:new Date((new Date).setDate((new Date).getDate()+730))},this.instanceName=b||"woopra",this.idle=0,this.cookie="",this.last_activity=new Date,this.loaded=!1,this.dirtyCookie=!1,this.sentCampaign=!1,this.version=l,b&&""!==b&&(a[b]=this)};p.prototype={docCookies:o,init:function(){var a,b=this;this.__l={},this._processQueue("config"),this._setupCookie(),this._bindEvents(),setTimeout(function(){b._processQueue()},1),this.loaded=!0,a=this.config("initialized"),a&&"function"==typeof a&&a(this.instanceName),this.config("hide_xdm_data")&&g.hideCrossDomainId()},_processQueue:function(b){var c,d,e,f;if(f=a.__woo?a.__woo[this.instanceName]:f,f=a._w?a._w[this.instanceName]:f,f&&f._e)for(e=f._e,c=0;c<e.length;c++)d=e[c],"undefined"==typeof d||!this[d[0]]||"undefined"!=typeof b&&b!==d[0]||this[d[0]].apply(this,Array.prototype.slice.call(d,1))},_setupCookie:function(){var a=this.getUrlId();this.cookie=this.getCookie(),a&&(this.cookie=a),(!this.cookie||this.cookie.length<1)&&(this.cookie=g.randomString()),o.setItem(this.config("cookie_name"),this.cookie,this.config("cookie_expire"),this.config("cookie_path"),this.config("cookie_domain")),this.dirtyCookie=!0},_bindEvents:function(){var a=this;c(this,"mousemove",function(){a.moved.apply(a,arguments)}),c(this,"keydown",function(){a.typed.apply(a,arguments)}),c(this,"download",function(){a.downloaded.apply(a,arguments)}),c(this,"outgoing",function(){a.outgoing.apply(a,arguments)}),c(this,"auto_decorate",function(){a.autoDecorate.apply(a,arguments)})},_dataSetter:function(a,b,c){var d;if("undefined"==typeof b)return a;if("undefined"==typeof c){if("string"==typeof b)return a[b];if("object"==typeof b)for(d in b)b.hasOwnProperty(d)&&("cookie_"===d.substring(0,7)&&(this.dirtyCookie=!0),a[d]=b[d])}else"cookie_"===b.substring(0,7)&&(this.dirtyCookie=!0),a[b]=c;return this},_push:function(a){var b,c,d,e,f,h,i=a||{},j="ra="+g.randomString(),k=[["visitorData","cv_"],["eventData","ce_"],["sessionData","cs_"]],l=[];c=this.getEndpoint(i.endpoint),g.getVisitorUrlData(this),this.config("hide_campaign")&&g.hideCampaignData(),l.push(j),l.push(g.buildUrlParams(this.getOptionParams())),i.eventName&&l.push("event="+i.eventName);for(h in k)k.hasOwnProperty(h)&&(f=k[h],i[f[0]]&&(d=g.buildUrlParams(i[f[0]],f[1]),d&&l.push(d)));b="?"+l.join("&"),e=c+b,g.loadScript(e,i.callback)},getCookie:function(){return o.getItem(this.config("cookie_name"))},getEndpoint:function(a){var b,c=this.config("protocol"),d=c&&""!==c?c+":":"",e=a||"",f=d+"//",h=this.config("region");if(this.config("third_party")&&!this.config("domain"))throw new Error("Error: `domain` is not set.");return f+=h?h+".t.":"www.",b=this.config("third_party")?"tp/"+this.config("domain"):"",e&&!g.endsWith(e,"/")&&(e+="/"),b&&!g.startsWith(e,"/")&&(b+="/"),f+=m+b+e},config:function(a,b){var c=this._dataSetter(this.options,a,b);return c===this&&(this.options.ping_interval<6e3?this.options.ping_interval=6e3:this.options.ping_interval>6e4&&(this.options.ping_interval=6e4),j=this.options.outgoing_tracking,e=this.options.outgoing_pause,i=this.options.download_tracking,d=this.options.download_pause,f="undefined"==typeof f&&this.options.cross_domain?this.options.cross_domain:f,k=this.options.outgoing_ignore_subdomain,this.dirtyCookie&&this.loaded&&this._setupCookie()),c},visit:function(a,b){return this._dataSetter(this.sessionData,a,b)},identify:function(a,b){return this._dataSetter(this.visitorData,a,b)},call:function(a){this[a]&&"function"==typeof this[a]&&this[a].apply(this,Array.prototype.slice.call(arguments,1))},track:function(a,b){var c,d,e={},f="",h=arguments[arguments.length-1];this.config("campaign_once")&&this.sentCampaign||(g.extend(e,g.getCampaignData()),this.sentCampaign=!0),"function"==typeof h&&(c=h),"undefined"==typeof a||a===c?f="pv":"undefined"==typeof b||b===c?("string"==typeof a&&(f=a),"object"==typeof a&&(a.name&&"pv"===a.name&&(f="pv"),this._dataSetter(e,a))):(this._dataSetter(e,b),f=a),"pv"===f&&(e.url=e.url||this.getPageUrl(),e.title=e.title||this.getPageTitle(),this.config("save_url_hash")&&(d=e.hash||this.getPageHash(),""!==d&&(e.hash=d))),this._push({endpoint:"ce",visitorData:this.visitorData,sessionData:this.sessionData,eventName:f,eventData:e,callback:c}),this.startPing()},trackForm:function(a,b,c){var d,e,f=a||"Tracked Form",h="string"==typeof b?c||{}:b||{},i=this;if(e=function(a,b){g.attachEvent(a,"submit",function(c){i.trackFormHandler(c,a,b,h)})},d=h.elements?h.elements:g.getElement(b,h),d&&d.length>0)for(var j in d)e(d[j],f,h)},trackFormHandler:function(a,b,c,d){var e,f,h=!1;b.getAttribute("data-tracked")||(e=g.serializeForm(b,d),d.identify&&"function"==typeof d.identify&&(f=d.identify(e)||{},f&&this.identify(f)),d.noSubmit?this.track(c,e,function(){"function"==typeof d.callback&&d.callback(e)}):(a.preventDefault(),a.stopPropagation(),b.setAttribute("data-tracked",1),this.track(c,e,function(){h=!0,"function"==typeof d.callback&&d.callback(e),b.submit()}),setTimeout(function(){h||b.submit()},250)))},trackClick:function(a,b,c,d){var e,f,h=[],i=d||{},j=a||"Item Clicked",k=this;if(f=function(a,b,c,d){g.attachEvent(a,"click",function(e){k.trackClickHandler(e,a,b,c,d)})},h=i.elements?i.elements:g.getElement(b,i))for(e=0;e<h.length;e++)f(h[e],j,c,i)},trackClickHandler:function(a,b,c,d,e){var f=!1;b.getAttribute("data-tracked")||(e.noNav?this.track(c,d):(a.preventDefault(),b.setAttribute("data-tracked",1),this.track(c,d,function(){f=!0,"function"==typeof e.callback&&e.callback(),b.click()}),setTimeout(function(){f||b.click()},250)))},startPing:function(){var b=this;"undefined"==typeof this.pingInterval&&(this.pingInterval=a.setInterval(function(){b.ping()},this.config("ping_interval")))},stopPing:function(){"undefined"!=typeof this.pingInterval&&(a.clearInterval(this.pingInterval),delete this.pingInterval)},ping:function(){var a;return this.config("ping")&&this.idle<this.config("idle_timeout")?this._push({endpoint:"ping"}):this.stopPing(),a=new Date,a-this.last_activity>this.config("idle_threshold")&&(this.idle=a-this.last_activity),this},push:function(a){return this._push({endpoint:"identify",visitorData:this.visitorData,sessionData:this.sessionData,callback:a}),this},sleep:function(){},moved:function(a,b){this.last_activity=b,this.idle=0},typed:function(){this.vs=2},downloaded:function(a){this.track("download",{url:a})},outgoing:function(a){this.track("outgoing",{url:a})},autoDecorate:function(a){var b,c,d=this.config("cross_domain");d&&("string"==typeof d?c=a.href.indexOf(d)>-1:d.push&&(c=d.indexOf(a.hostname)>-1),c&&(b=this.decorate(a),b&&(a.href=b)))},reset:function(){o.removeItem(this.config("cookie_name"),this.config("cookie_path"),this.config("cookie_domain")),this.cookie=null,this._setupCookie()},decorate:function(a){var c,d,e,f;return"string"==typeof a?(c=b.createElement("a"),c.href=a,d=c.search?"&":"?"):a&&a.href&&(c=a),c?(d=c.search?"&":"?",e=c.pathname&&"/"===c.pathname.charAt(0)?c.pathname:"/"+c.pathname,f=c.hostname+(c.port&&""!==c.port&&"80"!==c.port&&"0"!==c.port?":"+c.port:""),c.protocol+"//"+f+e+c.search+d+n+"="+this.cookie+c.hash):void 0},undecorate:function(a){var b=new RegExp("[?&]+(?:"+n+")=([^&#]*)","gi"),c=a;return a&&a.href&&(c=a.href),c?c.replace(b,""):void 0},getPageUrl:function(){return this.options.ignore_query_url?g.location("pathname"):g.location("pathname")+g.location("search")},getPageHash:function(){return g.location("hash")},getPageTitle:function(){return 0===b.getElementsByTagName("title").length?"":b.getElementsByTagName("title")[0].innerHTML},getUrlId:function(a){var b,c=a||g.location("href"),d=new RegExp(n+"=([^&#]+)");return b=c.match(d),b&&b[1]?b[1]:void 0},getOptionParams:function(){var c={alias:this.config("domain")||g.getHostnameNoWww(),instance:this.instanceName,ka:this.config("keep_alive")||2*this.config("ping_interval"),meta:o.getItem("wooMeta")||"",screen:a.screen.width+"x"+a.screen.height,language:a.navigator.browserLanguage||a.navigator.language||"",app:this.config("app"),referer:b.referrer,idle:""+parseInt(this.idle/1e3,10),vs:"i"};return this.config("domain")||(c._warn="no_domain",g.getHostnameNoWww()!==g.getDomain()&&(c._warn+=",domain_mismatch")),this.config("use_cookies")&&(c.cookie=this.getCookie()||this.cookie),this.config("ip")&&(c.ip=this.config("ip")),2===this.vs?(c.vs="w",this.vs=0):0===this.idle&&(c.vs="r"),c},dispose:function(){this.stopPing();for(var b in this.__l)this.__l.hasOwnProperty(b)&&(h[b][this.instanceName]=null);if(this.__l=null,"undefined"!=typeof a[this.instanceName])try{delete a[this.instanceName]}catch(c){a[this.instanceName]=void 0}}},a.WoopraTracker=p,a.WoopraLoadScript=g.loadScript,"undefined"!=typeof a.exports&&(g.Tracker=p,a.exports.Woopra=g,"function"==typeof a.woopraLoaded&&(a.woopraLoaded(),a.woopraLoaded=null));var q=a.__woo||a._w;if("undefined"!=typeof q)for(var r in q)if(q.hasOwnProperty(r)){var s=new p(r);s.init(),"undefined"==typeof a.woopraTracker&&(a.woopraTracker=s)}}(window,document);
/*
     FILE ARCHIVED ON 06:59:31 May 22, 2015 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 21:02:01 Sep 30, 2017.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/