"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[851188],{603905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(667294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),f=c(r),d=a,m=f["".concat(i,".").concat(d)]||f[d]||s[d]||p;return r?n.createElement(m,l(l({ref:t},u),{},{components:r})):n.createElement(m,l({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,l=new Array(p);l[0]=f;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<p;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},789278:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>s,frontMatter:()=>p,metadata:()=>o,toc:()=>c});var n=r(487462),a=(r(667294),r(603905));const p={sidebar_label:"FlattenHandle"},l="FlattenHandle type",o={unversionedId:"api/puppeteer.flattenhandle",id:"version-15.4.2/api/puppeteer.flattenhandle",title:"FlattenHandle type",description:"Signature:",source:"@site/versioned_docs/version-15.4.2/api/puppeteer.flattenhandle.md",sourceDirName:"api",slug:"/api/puppeteer.flattenhandle",permalink:"/15.4.2/api/puppeteer.flattenhandle",draft:!1,tags:[],version:"15.4.2",frontMatter:{sidebar_label:"FlattenHandle"},sidebar:"sidebar",previous:{title:"FileChooser.isMultiple",permalink:"/15.4.2/api/puppeteer.filechooser.ismultiple"},next:{title:"Frame",permalink:"/15.4.2/api/puppeteer.frame"}},i={},c=[],u={toc:c};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"flattenhandle-type"},"FlattenHandle type"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare type FlattenHandle<T> = T extends HandleOr<infer U> ? U : never;\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"References:")," ",(0,a.kt)("a",{parentName:"p",href:"/15.4.2/api/puppeteer.handleor"},"HandleOr")))}s.isMDXComponent=!0}}]);