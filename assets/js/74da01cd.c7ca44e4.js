"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[345106],{603905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>g});var n=t(667294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),l=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},c=function(e){var r=l(e.components);return n.createElement(i.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),f=l(t),g=a,b=f["".concat(i,".").concat(g)]||f[g]||u[g]||o;return t?n.createElement(b,s(s({ref:r},c),{},{components:t})):n.createElement(b,s({ref:r},c))}));function g(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=f;var p={};for(var i in r)hasOwnProperty.call(r,i)&&(p[i]=r[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,s[1]=p;for(var l=2;l<o;l++)s[l]=t[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},260478:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var n=t(487462),a=(t(667294),t(603905));const o={sidebar_label:"Browser.targets"},s="Browser.targets() method",p={unversionedId:"api/puppeteer.browser.targets",id:"version-15.5.0/api/puppeteer.browser.targets",title:"Browser.targets() method",description:"All active targets inside the Browser. In case of multiple browser contexts, returns an array with all the targets in all browser contexts.",source:"@site/versioned_docs/version-15.5.0/api/puppeteer.browser.targets.md",sourceDirName:"api",slug:"/api/puppeteer.browser.targets",permalink:"/api/puppeteer.browser.targets",draft:!1,tags:[],version:"15.5.0",frontMatter:{sidebar_label:"Browser.targets"},sidebar:"sidebar",previous:{title:"Browser.target",permalink:"/api/puppeteer.browser.target"},next:{title:"Browser.userAgent",permalink:"/api/puppeteer.browser.useragent"}},i={},l=[],c={toc:l};function u(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"browsertargets-method"},"Browser.targets() method"),(0,a.kt)("p",null,"All active targets inside the Browser. In case of multiple browser contexts, returns an array with all the targets in all browser contexts."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class Browser {\n  targets(): Target[];\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/puppeteer.target"},"Target"),"[","]"))}u.isMDXComponent=!0}}]);