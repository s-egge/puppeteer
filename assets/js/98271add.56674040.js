"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[294659],{603905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(667294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),o=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=o(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),f=o(r),m=a,d=f["".concat(u,".").concat(m)]||f[m]||c[m]||i;return r?n.createElement(d,l(l({ref:t},s),{},{components:r})):n.createElement(d,l({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=f;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var o=2;o<i;o++)l[o]=r[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},369271:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>o});var n=r(487462),a=(r(667294),r(603905));const i={sidebar_label:"HTTPRequest.failure"},l="HTTPRequest.failure() method",p={unversionedId:"api/puppeteer.httprequest.failure",id:"version-15.5.0/api/puppeteer.httprequest.failure",title:"HTTPRequest.failure() method",description:"Access information about the request's failure.",source:"@site/versioned_docs/version-15.5.0/api/puppeteer.httprequest.failure.md",sourceDirName:"api",slug:"/api/puppeteer.httprequest.failure",permalink:"/api/puppeteer.httprequest.failure",draft:!1,tags:[],version:"15.5.0",frontMatter:{sidebar_label:"HTTPRequest.failure"},sidebar:"sidebar",previous:{title:"HTTPRequest.enqueueInterceptAction",permalink:"/api/puppeteer.httprequest.enqueueinterceptaction"},next:{title:"HTTPRequest.finalizeInterceptions",permalink:"/api/puppeteer.httprequest.finalizeinterceptions"}},u={},o=[{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2}],s={toc:o};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"httprequestfailure-method"},"HTTPRequest.failure() method"),(0,a.kt)("p",null,"Access information about the request's failure."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class HTTPRequest {\n  failure(): {\n    errorText: string;\n  } | null;\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")),(0,a.kt)("p",null,"{ errorText: string; } ","|"," null"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"null")," unless the request failed. If the request fails this can return an object with ",(0,a.kt)("inlineCode",{parentName:"p"},"errorText")," containing a human-readable error message, e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"net::ERR_FAILED"),". It is not guaranteed that there will be failure text if the request fails."),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"Example of logging all failed requests:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"page.on('requestfailed', request => {\n  console.log(request.url() + ' ' + request.failure().errorText);\n});\n")))}c.isMDXComponent=!0}}]);