"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[722806],{603905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var r=n(667294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,o=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=s(n),c=a,k=m["".concat(o,".").concat(c)]||m[c]||u[c]||p;return n?r.createElement(k,l(l({ref:t},d),{},{components:n})):r.createElement(k,l({ref:t},d))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,l=new Array(p);l[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<p;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},746344:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>p,metadata:()=>i,toc:()=>s});var r=n(487462),a=(n(667294),n(603905));const p={sidebar_label:"ElementHandle.press"},l="ElementHandle.press() method",i={unversionedId:"api/puppeteer.elementhandle.press",id:"version-15.4.2/api/puppeteer.elementhandle.press",title:"ElementHandle.press() method",description:"Focuses the element, and then uses Keyboard.down() and Keyboard.up().",source:"@site/versioned_docs/version-15.4.2/api/puppeteer.elementhandle.press.md",sourceDirName:"api",slug:"/api/puppeteer.elementhandle.press",permalink:"/15.4.2/api/puppeteer.elementhandle.press",draft:!1,tags:[],version:"15.4.2",frontMatter:{sidebar_label:"ElementHandle.press"},sidebar:"sidebar",previous:{title:"ElementHandle.isIntersectingViewport",permalink:"/15.4.2/api/puppeteer.elementhandle.isintersectingviewport"},next:{title:"ElementHandle.screenshot",permalink:"/15.4.2/api/puppeteer.elementhandle.screenshot"}},o={},s=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}],d={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"elementhandlepress-method"},"ElementHandle.press() method"),(0,a.kt)("p",null,"Focuses the element, and then uses ",(0,a.kt)("a",{parentName:"p",href:"/15.4.2/api/puppeteer.keyboard.down"},"Keyboard.down()")," and ",(0,a.kt)("a",{parentName:"p",href:"/15.4.2/api/puppeteer.keyboard.up"},"Keyboard.up()"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class ElementHandle {\n  press(key: KeyInput, options?: PressOptions): Promise<void>;\n}\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"key"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/15.4.2/api/puppeteer.keyinput"},"KeyInput")),(0,a.kt)("td",{parentName:"tr",align:null},"Name of key to press, such as ",(0,a.kt)("code",null,"ArrowLeft"),". See ",(0,a.kt)("a",{parentName:"td",href:"/15.4.2/api/puppeteer.keyinput"},"KeyInput")," for a list of all key names.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"options"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/15.4.2/api/puppeteer.pressoptions"},"PressOptions")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("i",null,"(Optional)"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")),(0,a.kt)("p",null,"Promise","<","void",">"),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"If ",(0,a.kt)("inlineCode",{parentName:"p"},"key")," is a single character and no modifier keys besides ",(0,a.kt)("inlineCode",{parentName:"p"},"Shift")," are being held down, a ",(0,a.kt)("inlineCode",{parentName:"p"},"keypress"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"input")," event will also be generated. The ",(0,a.kt)("inlineCode",{parentName:"p"},"text")," option can be specified to force an input event to be generated."),(0,a.kt)("p",null,"*","*","NOTE","*","*"," Modifier keys DO affect ",(0,a.kt)("inlineCode",{parentName:"p"},"elementHandle.press"),". Holding down ",(0,a.kt)("inlineCode",{parentName:"p"},"Shift")," will type the text in upper case."))}u.isMDXComponent=!0}}]);