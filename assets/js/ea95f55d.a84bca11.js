"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[443890],{603905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(667294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),u=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,y=m["".concat(o,".").concat(d)]||m[d]||c[d]||l;return r?n.createElement(y,p(p({ref:t},s),{},{components:r})):n.createElement(y,p({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,p=new Array(l);p[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var u=2;u<l;u++)p[u]=r[u];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},425441:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=r(487462),a=(r(667294),r(603905));const l={sidebar_label:"registerCustomQueryHandler"},p="registerCustomQueryHandler() function",i={unversionedId:"api/puppeteer.registercustomqueryhandler",id:"version-15.4.2/api/puppeteer.registercustomqueryhandler",title:"registerCustomQueryHandler() function",description:"Registers a custom query handler.",source:"@site/versioned_docs/version-15.4.2/api/puppeteer.registercustomqueryhandler.md",sourceDirName:"api",slug:"/api/puppeteer.registercustomqueryhandler",permalink:"/15.4.2/api/puppeteer.registercustomqueryhandler",draft:!1,tags:[],version:"15.4.2",frontMatter:{sidebar_label:"registerCustomQueryHandler"},sidebar:"sidebar",previous:{title:"networkConditions",permalink:"/15.4.2/api/puppeteer.networkconditions"},next:{title:"unregisterCustomQueryHandler",permalink:"/15.4.2/api/puppeteer.unregistercustomqueryhandler"}},o={},u=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2}],s={toc:u};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"registercustomqueryhandler-function"},"registerCustomQueryHandler() function"),(0,a.kt)("p",null,"Registers a ",(0,a.kt)("a",{parentName:"p",href:"/15.4.2/api/puppeteer.customqueryhandler"},"custom query handler"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare function registerCustomQueryHandler(\n  name: string,\n  handler: CustomQueryHandler\n): void;\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"name"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"The name that the custom query handler will be registered under.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"handler"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/15.4.2/api/puppeteer.customqueryhandler"},"CustomQueryHandler")),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")),(0,a.kt)("p",null,"void"),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"After registration, the handler can be used everywhere where a selector is expected by prepending the selection string with ",(0,a.kt)("inlineCode",{parentName:"p"},"<name>/"),". The name is only allowed to consist of lower- and upper case latin letters."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"puppeteer.registerCustomQueryHandler('text', { \u2026 });\nconst aHandle = await page.$('text/\u2026');\n")))}c.isMDXComponent=!0}}]);