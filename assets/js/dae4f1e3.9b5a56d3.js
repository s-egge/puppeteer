"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[954570],{603905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(667294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=s(r),m=a,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||p;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,i=new Array(p);i[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<p;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},546623:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>p,metadata:()=>o,toc:()=>s});var n=r(487462),a=(r(667294),r(603905));const p={sidebar_label:"FrameAddScriptTagOptions.path"},i="FrameAddScriptTagOptions.path property",o={unversionedId:"api/puppeteer.frameaddscripttagoptions.path",id:"version-15.5.0/api/puppeteer.frameaddscripttagoptions.path",title:"FrameAddScriptTagOptions.path property",description:"The path to a JavaScript file to be injected into the frame.",source:"@site/versioned_docs/version-15.5.0/api/puppeteer.frameaddscripttagoptions.path.md",sourceDirName:"api",slug:"/api/puppeteer.frameaddscripttagoptions.path",permalink:"/api/puppeteer.frameaddscripttagoptions.path",draft:!1,tags:[],version:"15.5.0",frontMatter:{sidebar_label:"FrameAddScriptTagOptions.path"},sidebar:"sidebar",previous:{title:"FrameAddScriptTagOptions.content",permalink:"/api/puppeteer.frameaddscripttagoptions.content"},next:{title:"FrameAddScriptTagOptions.type",permalink:"/api/puppeteer.frameaddscripttagoptions.type"}},c={},s=[{value:"Remarks",id:"remarks",level:2}],l={toc:s};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"frameaddscripttagoptionspath-property"},"FrameAddScriptTagOptions.path property"),(0,a.kt)("p",null,"The path to a JavaScript file to be injected into the frame."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface FrameAddScriptTagOptions {\n  path?: string;\n}\n")),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"If ",(0,a.kt)("inlineCode",{parentName:"p"},"path")," is a relative path, it is resolved relative to the current working directory (",(0,a.kt)("inlineCode",{parentName:"p"},"process.cwd()")," in Node.js)."))}d.isMDXComponent=!0}}]);