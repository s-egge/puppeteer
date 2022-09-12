"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[97820],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>c});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},p=Object.keys(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),i=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=i(e.components);return a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=i(r),c=n,k=m["".concat(u,".").concat(c)]||m[c]||s[c]||p;return r?a.createElement(k,l(l({ref:t},d),{},{components:r})):a.createElement(k,l({ref:t},d))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,l=new Array(p);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var i=2;i<p;i++)l[i]=r[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},17176:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>s,frontMatter:()=>p,metadata:()=>o,toc:()=>i});var a=r(87462),n=(r(67294),r(3905));const p={sidebar_label:"Puppeteer"},l="Puppeteer class",o={unversionedId:"api/puppeteer.puppeteer",id:"version-17.1.3/api/puppeteer.puppeteer",title:"Puppeteer class",description:"The main Puppeteer class.",source:"@site/versioned_docs/version-17.1.3/api/puppeteer.puppeteer.md",sourceDirName:"api",slug:"/api/puppeteer.puppeteer",permalink:"/api/puppeteer.puppeteer",draft:!1,tags:[],version:"17.1.3",frontMatter:{sidebar_label:"Puppeteer"},sidebar:"sidebar",previous:{title:"PuppeteerNode.product",permalink:"/api/puppeteer.puppeteernode.product"},next:{title:"Puppeteer._changedProduct",permalink:"/api/puppeteer.puppeteer._changedproduct"}},u={},i=[{value:"Remarks",id:"remarks",level:2},{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2}],d={toc:i};function s(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"puppeteer-class"},"Puppeteer class"),(0,n.kt)("p",null,"The main Puppeteer class."),(0,n.kt)("p",null,"IMPORTANT: if you are using Puppeteer in a Node environment, you will get an instance of ",(0,n.kt)("a",{parentName:"p",href:"/api/puppeteer.puppeteernode"},"PuppeteerNode")," when you import or require ",(0,n.kt)("inlineCode",{parentName:"p"},"puppeteer"),". That class extends ",(0,n.kt)("inlineCode",{parentName:"p"},"Puppeteer"),", so has all the methods documented below as well as all that are defined on ",(0,n.kt)("a",{parentName:"p",href:"/api/puppeteer.puppeteernode"},"PuppeteerNode"),"."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Signature:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare class Puppeteer\n")),(0,n.kt)("h2",{id:"remarks"},"Remarks"),(0,n.kt)("p",null,"The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",(0,n.kt)("inlineCode",{parentName:"p"},"Puppeteer")," class."),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Property"),(0,n.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/api/puppeteer.puppeteer._changedproduct"},"_","changedProduct")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"protected")),(0,n.kt)("td",{parentName:"tr",align:null},"boolean"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/api/puppeteer.puppeteer._ispuppeteercore"},"_","isPuppeteerCore")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"protected")),(0,n.kt)("td",{parentName:"tr",align:null},"boolean"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/api/puppeteer.puppeteer.devices"},"devices")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"readonly")),(0,n.kt)("td",{parentName:"tr",align:null},"typeof devices"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/api/puppeteer.puppeteer.errors"},"errors")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"readonly")),(0,n.kt)("td",{parentName:"tr",align:null},"typeof ",(0,n.kt)("a",{parentName:"td",href:"/api/puppeteer.errors"},"errors")),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/api/puppeteer.puppeteer.networkconditions"},"networkConditions")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"readonly")),(0,n.kt)("td",{parentName:"tr",align:null},"typeof ",(0,n.kt)("a",{parentName:"td",href:"/api/puppeteer.networkconditions"},"networkConditions")),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h2",{id:"methods"},"Methods"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Method"),(0,n.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/api/puppeteer.puppeteer.clearcustomqueryhandlers"},"clearCustomQueryHandlers()")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/api/puppeteer.puppeteer.connect"},"connect(options)")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"This method attaches Puppeteer to an existing browser instance.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/api/puppeteer.puppeteer.customqueryhandlernames"},"customQueryHandlerNames()")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/api/puppeteer.puppeteer.registercustomqueryhandler"},"registerCustomQueryHandler(name, queryHandler)")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/api/puppeteer.puppeteer.unregistercustomqueryhandler"},"unregisterCustomQueryHandler(name)")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})))))}s.isMDXComponent=!0}}]);