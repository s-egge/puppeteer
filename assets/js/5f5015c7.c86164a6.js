"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[885431],{603905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var r=a(667294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),s=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=s(a),d=n,g=m["".concat(o,".").concat(d)]||m[d]||c[d]||l;return a?r.createElement(g,i(i({ref:t},u),{},{components:a})):r.createElement(g,i({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var s=2;s<l;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},178069:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var r=a(487462),n=(a(667294),a(603905));const l={sidebar_label:"Page.emulateIdleState"},i="Page.emulateIdleState() method",p={unversionedId:"api/puppeteer.page.emulateidlestate",id:"version-15.4.2/api/puppeteer.page.emulateidlestate",title:"Page.emulateIdleState() method",description:"Emulates the idle state. If no arguments set, clears idle state emulation.",source:"@site/versioned_docs/version-15.4.2/api/puppeteer.page.emulateidlestate.md",sourceDirName:"api",slug:"/api/puppeteer.page.emulateidlestate",permalink:"/15.4.2/api/puppeteer.page.emulateidlestate",draft:!1,tags:[],version:"15.4.2",frontMatter:{sidebar_label:"Page.emulateIdleState"},sidebar:"sidebar",previous:{title:"Page.emulateCPUThrottling",permalink:"/15.4.2/api/puppeteer.page.emulatecputhrottling"},next:{title:"Page.emulateMediaFeatures",permalink:"/15.4.2/api/puppeteer.page.emulatemediafeatures"}},o={},s=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}],u={toc:s};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"pageemulateidlestate-method"},"Page.emulateIdleState() method"),(0,n.kt)("p",null,"Emulates the idle state. If no arguments set, clears idle state emulation."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Signature:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"class Page {\n  emulateIdleState(overrides?: {\n    isUserActive: boolean;\n    isScreenUnlocked: boolean;\n  }): Promise<void>;\n}\n")),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"overrides"),(0,n.kt)("td",{parentName:"tr",align:null},"{ isUserActive: boolean; isScreenUnlocked: boolean; }"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("i",null,"(Optional)")," Mock idle state. If not set, clears idle overrides")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")),(0,n.kt)("p",null,"Promise","<","void",">"),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"// set idle emulation\nawait page.emulateIdleState({isUserActive: true, isScreenUnlocked: false});\n\n// do some checks here\n...\n\n// clear idle emulation\nawait page.emulateIdleState();\n")))}c.isMDXComponent=!0}}]);