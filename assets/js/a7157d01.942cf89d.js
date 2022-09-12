"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8751],{3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function p(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?p(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},p=Object.keys(t);for(n=0;n<p.length;n++)r=p[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(t);for(n=0;n<p.length;n++)r=p[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var o=n.createContext({}),d=function(t){var e=n.useContext(o),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},c=function(t){var e=d(t.components);return n.createElement(o.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,p=t.originalType,o=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),s=d(r),m=a,f=s["".concat(o,".").concat(m)]||s[m]||u[m]||p;return r?n.createElement(f,i(i({ref:e},c),{},{components:r})):n.createElement(f,i({ref:e},c))}));function m(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var p=r.length,i=new Array(p);i[0]=s;var l={};for(var o in e)hasOwnProperty.call(e,o)&&(l[o]=e[o]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var d=2;d<p;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},33410:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>p,metadata:()=>l,toc:()=>d});var n=r(87462),a=(r(67294),r(3905));const p={sidebar_label:"FrameAddScriptTagOptions"},i="FrameAddScriptTagOptions interface",l={unversionedId:"api/puppeteer.frameaddscripttagoptions",id:"api/puppeteer.frameaddscripttagoptions",title:"FrameAddScriptTagOptions interface",description:"Signature:",source:"@site/../docs/api/puppeteer.frameaddscripttagoptions.md",sourceDirName:"api",slug:"/api/puppeteer.frameaddscripttagoptions",permalink:"/next/api/puppeteer.frameaddscripttagoptions",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"FrameAddScriptTagOptions"},sidebar:"sidebar",previous:{title:"FlattenHandle",permalink:"/next/api/puppeteer.flattenhandle"},next:{title:"FrameAddScriptTagOptions.content",permalink:"/next/api/puppeteer.frameaddscripttagoptions.content"}},o={},d=[{value:"Properties",id:"properties",level:2}],c={toc:d};function u(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"frameaddscripttagoptions-interface"},"FrameAddScriptTagOptions interface"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface FrameAddScriptTagOptions\n")),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/next/api/puppeteer.frameaddscripttagoptions.content"},"content?")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("i",null,"(Optional)")," JavaScript to be injected into the frame.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/next/api/puppeteer.frameaddscripttagoptions.id"},"id?")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("i",null,"(Optional)")," Sets the ",(0,a.kt)("code",null,"id")," of the script.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/next/api/puppeteer.frameaddscripttagoptions.path"},"path?")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("i",null,"(Optional)")," Path to a JavaScript file to be injected into the frame.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/next/api/puppeteer.frameaddscripttagoptions.type"},"type?")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("i",null,"(Optional)")," Sets the ",(0,a.kt)("code",null,"type")," of the script. Use ",(0,a.kt)("code",null,"module")," in order to load an ES2015 module.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/next/api/puppeteer.frameaddscripttagoptions.url"},"url?")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("i",null,"(Optional)")," URL of the script to be added.")))))}u.isMDXComponent=!0}}]);