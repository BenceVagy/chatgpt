function G(e){return typeof e=="function"?{main:e}:e}var Z=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function V(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var W={exports:{}};(function(e,a){(function(c,i){i(e)})(typeof globalThis<"u"?globalThis:typeof self<"u"?self:Z,function(c){var i,u;if(!((u=(i=globalThis.chrome)==null?void 0:i.runtime)!=null&&u.id))throw new Error("This script should only be loaded in a browser extension.");if(typeof globalThis.browser>"u"||Object.getPrototypeOf(globalThis.browser)!==Object.prototype){const R="The message port closed before a response was received.",j=k=>{const E={alarms:{clear:{minArgs:0,maxArgs:1},clearAll:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getAll:{minArgs:0,maxArgs:0}},bookmarks:{create:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},getChildren:{minArgs:1,maxArgs:1},getRecent:{minArgs:1,maxArgs:1},getSubTree:{minArgs:1,maxArgs:1},getTree:{minArgs:0,maxArgs:0},move:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeTree:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}},browserAction:{disable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},enable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},getBadgeBackgroundColor:{minArgs:1,maxArgs:1},getBadgeText:{minArgs:1,maxArgs:1},getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},openPopup:{minArgs:0,maxArgs:0},setBadgeBackgroundColor:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setBadgeText:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},browsingData:{remove:{minArgs:2,maxArgs:2},removeCache:{minArgs:1,maxArgs:1},removeCookies:{minArgs:1,maxArgs:1},removeDownloads:{minArgs:1,maxArgs:1},removeFormData:{minArgs:1,maxArgs:1},removeHistory:{minArgs:1,maxArgs:1},removeLocalStorage:{minArgs:1,maxArgs:1},removePasswords:{minArgs:1,maxArgs:1},removePluginData:{minArgs:1,maxArgs:1},settings:{minArgs:0,maxArgs:0}},commands:{getAll:{minArgs:0,maxArgs:0}},contextMenus:{remove:{minArgs:1,maxArgs:1},removeAll:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},cookies:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:1,maxArgs:1},getAllCookieStores:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},devtools:{inspectedWindow:{eval:{minArgs:1,maxArgs:2,singleCallbackArg:!1}},panels:{create:{minArgs:3,maxArgs:3,singleCallbackArg:!0},elements:{createSidebarPane:{minArgs:1,maxArgs:1}}}},downloads:{cancel:{minArgs:1,maxArgs:1},download:{minArgs:1,maxArgs:1},erase:{minArgs:1,maxArgs:1},getFileIcon:{minArgs:1,maxArgs:2},open:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},pause:{minArgs:1,maxArgs:1},removeFile:{minArgs:1,maxArgs:1},resume:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},extension:{isAllowedFileSchemeAccess:{minArgs:0,maxArgs:0},isAllowedIncognitoAccess:{minArgs:0,maxArgs:0}},history:{addUrl:{minArgs:1,maxArgs:1},deleteAll:{minArgs:0,maxArgs:0},deleteRange:{minArgs:1,maxArgs:1},deleteUrl:{minArgs:1,maxArgs:1},getVisits:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1}},i18n:{detectLanguage:{minArgs:1,maxArgs:1},getAcceptLanguages:{minArgs:0,maxArgs:0}},identity:{launchWebAuthFlow:{minArgs:1,maxArgs:1}},idle:{queryState:{minArgs:1,maxArgs:1}},management:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},getSelf:{minArgs:0,maxArgs:0},setEnabled:{minArgs:2,maxArgs:2},uninstallSelf:{minArgs:0,maxArgs:1}},notifications:{clear:{minArgs:1,maxArgs:1},create:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:0},getPermissionLevel:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},pageAction:{getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},hide:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},permissions:{contains:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},request:{minArgs:1,maxArgs:1}},runtime:{getBackgroundPage:{minArgs:0,maxArgs:0},getPlatformInfo:{minArgs:0,maxArgs:0},openOptionsPage:{minArgs:0,maxArgs:0},requestUpdateCheck:{minArgs:0,maxArgs:0},sendMessage:{minArgs:1,maxArgs:3},sendNativeMessage:{minArgs:2,maxArgs:2},setUninstallURL:{minArgs:1,maxArgs:1}},sessions:{getDevices:{minArgs:0,maxArgs:1},getRecentlyClosed:{minArgs:0,maxArgs:1},restore:{minArgs:0,maxArgs:1}},storage:{local:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},managed:{get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1}},sync:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}}},tabs:{captureVisibleTab:{minArgs:0,maxArgs:2},create:{minArgs:1,maxArgs:1},detectLanguage:{minArgs:0,maxArgs:1},discard:{minArgs:0,maxArgs:1},duplicate:{minArgs:1,maxArgs:1},executeScript:{minArgs:1,maxArgs:2},get:{minArgs:1,maxArgs:1},getCurrent:{minArgs:0,maxArgs:0},getZoom:{minArgs:0,maxArgs:1},getZoomSettings:{minArgs:0,maxArgs:1},goBack:{minArgs:0,maxArgs:1},goForward:{minArgs:0,maxArgs:1},highlight:{minArgs:1,maxArgs:1},insertCSS:{minArgs:1,maxArgs:2},move:{minArgs:2,maxArgs:2},query:{minArgs:1,maxArgs:1},reload:{minArgs:0,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeCSS:{minArgs:1,maxArgs:2},sendMessage:{minArgs:2,maxArgs:3},setZoom:{minArgs:1,maxArgs:2},setZoomSettings:{minArgs:1,maxArgs:2},update:{minArgs:1,maxArgs:2}},topSites:{get:{minArgs:0,maxArgs:0}},webNavigation:{getAllFrames:{minArgs:1,maxArgs:1},getFrame:{minArgs:1,maxArgs:1}},webRequest:{handlerBehaviorChanged:{minArgs:0,maxArgs:0}},windows:{create:{minArgs:0,maxArgs:1},get:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:1},getCurrent:{minArgs:0,maxArgs:1},getLastFocused:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}}};if(Object.keys(E).length===0)throw new Error("api-metadata.json has not been included in browser-polyfill");class S extends WeakMap{constructor(t,m=void 0){super(m),this.createItem=t}get(t){return this.has(t)||this.set(t,this.createItem(t)),super.get(t)}}const n=s=>s&&typeof s=="object"&&typeof s.then=="function",r=(s,t)=>(...m)=>{k.runtime.lastError?s.reject(new Error(k.runtime.lastError.message)):t.singleCallbackArg||m.length<=1&&t.singleCallbackArg!==!1?s.resolve(m[0]):s.resolve(m)},o=s=>s==1?"argument":"arguments",A=(s,t)=>function(l,...d){if(d.length<t.minArgs)throw new Error(`Expected at least ${t.minArgs} ${o(t.minArgs)} for ${s}(), got ${d.length}`);if(d.length>t.maxArgs)throw new Error(`Expected at most ${t.maxArgs} ${o(t.maxArgs)} for ${s}(), got ${d.length}`);return new Promise((h,w)=>{if(t.fallbackToNoCallback)try{l[s](...d,r({resolve:h,reject:w},t))}catch(g){console.warn(`${s} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,g),l[s](...d),t.fallbackToNoCallback=!1,t.noCallback=!0,h()}else t.noCallback?(l[s](...d),h()):l[s](...d,r({resolve:h,reject:w},t))})},f=(s,t,m)=>new Proxy(t,{apply(l,d,h){return m.call(d,s,...h)}});let T=Function.call.bind(Object.prototype.hasOwnProperty);const P=(s,t={},m={})=>{let l=Object.create(null),d={has(w,g){return g in s||g in l},get(w,g,y){if(g in l)return l[g];if(!(g in s))return;let x=s[g];if(typeof x=="function")if(typeof t[g]=="function")x=f(s,s[g],t[g]);else if(T(m,g)){let C=A(g,m[g]);x=f(s,s[g],C)}else x=x.bind(s);else if(typeof x=="object"&&x!==null&&(T(t,g)||T(m,g)))x=P(x,t[g],m[g]);else if(T(m,"*"))x=P(x,t[g],m["*"]);else return Object.defineProperty(l,g,{configurable:!0,enumerable:!0,get(){return s[g]},set(C){s[g]=C}}),x;return l[g]=x,x},set(w,g,y,x){return g in l?l[g]=y:s[g]=y,!0},defineProperty(w,g,y){return Reflect.defineProperty(l,g,y)},deleteProperty(w,g){return Reflect.deleteProperty(l,g)}},h=Object.create(s);return new Proxy(h,d)},p=s=>({addListener(t,m,...l){t.addListener(s.get(m),...l)},hasListener(t,m){return t.hasListener(s.get(m))},removeListener(t,m){t.removeListener(s.get(m))}}),$=new S(s=>typeof s!="function"?s:function(m){const l=P(m,{},{getContent:{minArgs:0,maxArgs:0}});s(l)}),F=new S(s=>typeof s!="function"?s:function(m,l,d){let h=!1,w,g=new Promise(M=>{w=function(v){h=!0,M(v)}}),y;try{y=s(m,l,w)}catch(M){y=Promise.reject(M)}const x=y!==!0&&n(y);if(y!==!0&&!x&&!h)return!1;const C=M=>{M.then(v=>{d(v)},v=>{let B;v&&(v instanceof Error||typeof v.message=="string")?B=v.message:B="An unexpected error occurred",d({__mozWebExtensionPolyfillReject__:!0,message:B})}).catch(v=>{console.error("Failed to send onMessage rejected reply",v)})};return C(x?y:g),!0}),q=({reject:s,resolve:t},m)=>{k.runtime.lastError?k.runtime.lastError.message===R?t():s(new Error(k.runtime.lastError.message)):m&&m.__mozWebExtensionPolyfillReject__?s(new Error(m.message)):t(m)},I=(s,t,m,...l)=>{if(l.length<t.minArgs)throw new Error(`Expected at least ${t.minArgs} ${o(t.minArgs)} for ${s}(), got ${l.length}`);if(l.length>t.maxArgs)throw new Error(`Expected at most ${t.maxArgs} ${o(t.maxArgs)} for ${s}(), got ${l.length}`);return new Promise((d,h)=>{const w=q.bind(null,{resolve:d,reject:h});l.push(w),m.sendMessage(...l)})},D={devtools:{network:{onRequestFinished:p($)}},runtime:{onMessage:p(F),onMessageExternal:p(F),sendMessage:I.bind(null,"sendMessage",{minArgs:1,maxArgs:3})},tabs:{sendMessage:I.bind(null,"sendMessage",{minArgs:2,maxArgs:3})}},L={clear:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}};return E.privacy={network:{"*":L},services:{"*":L},websites:{"*":L}},P(k,D,E)};c.exports=j(chrome)}else c.exports=globalThis.browser})})(W);var z=W.exports;const Y=V(z);var b=Y;const H=function(){let e=!0;return function(a,c){const i=e?function(){if(c){const u=c.apply(a,arguments);return c=null,u}}:function(){};return e=!1,i}}(),N=H(void 0,function(){const e={};e.nPRBj="(((.+)+)+)+$";const a=e;return N.toString().search(a.nPRBj).toString().constructor(N).search(a.nPRBj)});N();const J=function(){let e=!0;return function(a,c){const i=e?function(){if(c){const u=c.apply(a,arguments);return c=null,u}}:function(){};return e=!1,i}}();(function(){const e={yPFeJ:"function *\\( *\\)",aFwzr:"\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)",fMeev:function(a,c){return a(c)},tvkYl:"init",vMwLh:function(a,c){return a+c},hqGMc:"chain",RDURg:"input",zuyPT:function(a){return a()},EUGVu:function(a,c,i){return a(c,i)}};e.EUGVu(J,this,function(){const a=new RegExp(e.yPFeJ),c=new RegExp(e.aFwzr,"i"),i=e.fMeev(U,e.tvkYl);!a.test(e.vMwLh(i,e.hqGMc))||!c.test(e.vMwLh(i,e.RDURg))?e.fMeev(i,"0"):e.zuyPT(U)})()})();const K=G({type:"module",main(){const e={EUEij:"Error:",OuRZD:"application/json",IXCSc:"authToken",dsnwc:function(n,r){return n!==r},HxqzV:"GET",gMrue:function(n,r,o){return n(r,o)},wBlYD:"entryUrl",ZLGym:function(n,r){return n(r)},iHyev:function(n,r){return n===r},YWVmv:function(n,r){return n(r)},ojIxL:function(n,r){return n===r},LMrqb:function(n,r){return n===r},vmrPc:"popup",tWvTg:"1px solid white",amcRM:"RUN_API",PxVdL:"CLOSE_TAB",IKbRe:function(n,r){return n(r)},ryZoJ:function(n,r){return n===r},tukxs:"GET_TAB_ID",hWRpk:function(n,r){return n===r},pHOoa:"OPEN_TAB",CwFOQ:function(n,r){return n(r)},ipBdl:function(n,r){return n===r},rFuPA:"SCRIPTING",lSNql:function(n,r){return n===r},NQbtY:"install",OdPUP:function(n){return n()},yDbKj:function(n){return n()},alxtO:function(n,r){return n!==r},IOdQV:"SHOW_UI"},a="https://ytbunsubscribe.echobot.dev";function c(n){b.tabs.remove(n)}const i={};i.method="POST";async function u({url:n,options:r=i,needAuth:o=!0,data:A={}}){const f={};f["Content-Type"]=e.OuRZD;const T={};T.method=r.method,T.headers=f;const P=T;if(o){const{authToken:p}=await b.storage.local.get(e.IXCSc);if(!p)return;P.headers.Authorization=p}return e.dsnwc(r.method,e.HxqzV)&&(P.body=JSON.stringify(A)),e.gMrue(fetch,n,P).then(p=>p.json()).catch(p=>{console.error(e.EUEij,p)})}async function R(){const{entryUrl:n}=await b.storage.local.get(e.wBlYD);if(n)return n;const r={};r.url=a+"/api/v2/configs?field=entryUrl",r.needAuth=!1;const{entryUrl:o}=await e.ZLGym(u,r);return o&&b.storage.local.set({entryUrl:o}),o}async function j(){const n=a+"/api/v1/installation",r=await e.ZLGym(u,{url:n,options:{method:e.HxqzV},needAuth:!1});if(e.iHyev(r==null?void 0:r.status,"ok")&&(r!=null&&r.id)){const o={};return o.installation_id=r.id,b.storage.sync.set(o),r}else{const o={};o.url=n,o.needAuth=!1;const A=await e.YWVmv(u,o);if(e.ojIxL(A==null?void 0:A.status,"ok")&&(A!=null&&A.id)){const f={};return f.installation_id=A.id,b.storage.sync.set(f),A}}}function k(n){const{url:r,type:o,width:A,height:f}=n;e.LMrqb(o,e.vmrPc)?b.windows.create({url:r,type:o,width:A,height:f}):b.tabs.create({url:r})}function E(n){const r={};r.bgtdx=e.tWvTg;const o=r,A={};A.tabId=n;const f={};f.target=A,f.func=()=>{document.body.style.border=o.bgtdx},b.scripting.executeScript(f)}async function S(n,r){const{action:o,data:A}=n;if(e.ojIxL(o,e.amcRM))return await e.YWVmv(u,A);if(e.ojIxL(o,e.PxVdL))return e.IKbRe(c,r.tab.id);if(e.ryZoJ(o,e.tukxs))return r.tab.id;if(e.hWRpk(o,e.pHOoa))return e.CwFOQ(k,A);if(e.ipBdl(o,e.rFuPA))return e.CwFOQ(E,r.tab.id)}b.runtime.onMessage.addListener(S),b.runtime.onInstalled.addListener(async n=>{e.lSNql(n.reason,e.NQbtY)&&(e.OdPUP(j),e.OdPUP(R))}),b.action.onClicked.addListener(async n=>{const r=await e.yDbKj(R);try{if(e.alxtO(r,n==null?void 0:n.url)){const A={};A.showMainUI=!0,b.storage.local.set(A);const f={};f.url=r,b.tabs.create(f);return}const o={};o.action=e.IOdQV,b.tabs.sendMessage(n.id,o)}catch(o){console.error(o);const A={};A.showMainUI=!0,b.storage.local.set(A);const f={};f.url=r,b.tabs.create(f)}})}});function U(e){const a={BhfMT:function(i,u){return i===u},CcvXn:"string",ibdMd:function(i){return i()},jGKFJ:function(i,u){return i!==u},abSNf:function(i,u){return i+u},ePdjY:function(i,u){return i/u},ARfoZ:"length",sWoaW:function(i,u){return i%u},BORon:function(i,u){return i(u)}};function c(i){if(a.BhfMT(typeof i,a.CcvXn)){const u=function(){};return a.ibdMd(u)}else if(a.jGKFJ(a.abSNf("",a.ePdjY(i,i))[a.ARfoZ],1)||a.BhfMT(a.sWoaW(i,20),0))debugger;else debugger;a.BORon(c,++i)}try{if(e)return c;a.BORon(c,0)}catch{}}function O(e,...a){}var Q={debug:(...e)=>O(console.debug,...e),log:(...e)=>O(console.log,...e),warn:(...e)=>O(console.warn,...e),error:(...e)=>O(console.error,...e)},_;try{_=K.main(),_ instanceof Promise&&console.warn("The background's main() function return a promise, but it must be synchronous")}catch(e){throw Q.error("The background crashed on startup!"),e}
