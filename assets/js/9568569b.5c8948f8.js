"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[97333],{603905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(667294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,h=u["".concat(i,".").concat(d)]||u[d]||m[d]||l;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},329058:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var r=n(487462),a=(n(667294),n(603905));const l={sidebar_label:"ElementHandle.select"},o="ElementHandle.select() method",p={unversionedId:"api/puppeteer.elementhandle.select",id:"version-15.5.0/api/puppeteer.elementhandle.select",title:"ElementHandle.select() method",description:"Triggers a change and input event once all the provided options have been selected. If there's no ` element matching selector`, the method throws an error.",source:"@site/versioned_docs/version-15.5.0/api/puppeteer.elementhandle.select.md",sourceDirName:"api",slug:"/api/puppeteer.elementhandle.select",permalink:"/api/puppeteer.elementhandle.select",draft:!1,tags:[],version:"15.5.0",frontMatter:{sidebar_label:"ElementHandle.select"},sidebar:"sidebar",previous:{title:"ElementHandle.screenshot",permalink:"/api/puppeteer.elementhandle.screenshot"},next:{title:"ElementHandle.tap",permalink:"/api/puppeteer.elementhandle.tap"}},i={},s=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}],c={toc:s};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"elementhandleselect-method"},"ElementHandle.select() method"),(0,a.kt)("p",null,"Triggers a ",(0,a.kt)("inlineCode",{parentName:"p"},"change")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"input")," event once all the provided options have been selected. If there's no ",(0,a.kt)("inlineCode",{parentName:"p"},"<select>")," element matching ",(0,a.kt)("inlineCode",{parentName:"p"},"selector"),", the method throws an error."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class ElementHandle {\n  select(...values: string[]): Promise<string[]>;\n}\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"values"),(0,a.kt)("td",{parentName:"tr",align:null},"string","[","]"),(0,a.kt)("td",{parentName:"tr",align:null},"Values of options to select. If the ",(0,a.kt)("code",null,"<","select",">")," has the ",(0,a.kt)("code",null,"multiple")," attribute, all values are considered, otherwise only the first one is taken into account.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")),(0,a.kt)("p",null,"Promise","<","string","[","]",">"),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"handle.select('blue'); // single selection\nhandle.select('red', 'green', 'blue'); // multiple selections\n")))}m.isMDXComponent=!0}}]);