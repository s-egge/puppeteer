"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[854926],{603905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(667294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),f=c(r),m=a,v=f["".concat(u,".").concat(m)]||f[m]||s[m]||p;return r?n.createElement(v,o(o({ref:t},l),{},{components:r})):n.createElement(v,o({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,o=new Array(p);o[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<p;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3576:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>s,frontMatter:()=>p,metadata:()=>i,toc:()=>c});var n=r(487462),a=(r(667294),r(603905));const p={sidebar_label:"EvaluateFunc"},o="EvaluateFunc type",i={unversionedId:"api/puppeteer.evaluatefunc",id:"version-15.4.2/api/puppeteer.evaluatefunc",title:"EvaluateFunc type",description:"Signature:",source:"@site/versioned_docs/version-15.4.2/api/puppeteer.evaluatefunc.md",sourceDirName:"api",slug:"/api/puppeteer.evaluatefunc",permalink:"/15.4.2/api/puppeteer.evaluatefunc",draft:!1,tags:[],version:"15.4.2",frontMatter:{sidebar_label:"EvaluateFunc"},sidebar:"sidebar",previous:{title:"ErrorCode",permalink:"/15.4.2/api/puppeteer.errorcode"},next:{title:"EventEmitter",permalink:"/15.4.2/api/puppeteer.eventemitter"}},u={},c=[],l={toc:c};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"evaluatefunc-type"},"EvaluateFunc type"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare type EvaluateFunc<T extends unknown[]> = (\n  ...params: InnerParams<T>\n) => Awaitable<unknown>;\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"References:")," ",(0,a.kt)("a",{parentName:"p",href:"/15.4.2/api/puppeteer.innerparams"},"InnerParams"),", ",(0,a.kt)("a",{parentName:"p",href:"/15.4.2/api/puppeteer.awaitable"},"Awaitable")))}s.isMDXComponent=!0}}]);