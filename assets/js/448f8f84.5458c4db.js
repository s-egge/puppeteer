"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[283161],{603905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>d});var n=a(667294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),u=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},s=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=u(a),d=r,g=m["".concat(i,".").concat(d)]||m[d]||c[d]||l;return a?n.createElement(g,p(p({ref:t},s),{},{components:a})):n.createElement(g,p({ref:t},s))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,p=new Array(l);p[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,p[1]=o;for(var u=2;u<l;u++)p[u]=a[u];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},900188:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=a(487462),r=(a(667294),a(603905));const l={sidebar_label:"Page.$eval"},p="Page.$eval() method",o={unversionedId:"api/puppeteer.page._eval",id:"version-15.4.2/api/puppeteer.page._eval",title:"Page.$eval() method",description:"This method runs document.querySelector within the page and passes the result as the first argument to the pageFunction.",source:"@site/versioned_docs/version-15.4.2/api/puppeteer.page._eval.md",sourceDirName:"api",slug:"/api/puppeteer.page._eval",permalink:"/15.4.2/api/puppeteer.page._eval",draft:!1,tags:[],version:"15.4.2",frontMatter:{sidebar_label:"Page.$eval"},sidebar:"sidebar",previous:{title:"Page.$$eval",permalink:"/15.4.2/api/puppeteer.page.__eval"},next:{title:"Page.$x",permalink:"/15.4.2/api/puppeteer.page._x"}},i={},u=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Example 3",id:"example-3",level:2}],s={toc:u};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"pageeval-method"},"Page.$eval() method"),(0,r.kt)("p",null,"This method runs ",(0,r.kt)("inlineCode",{parentName:"p"},"document.querySelector")," within the page and passes the result as the first argument to the ",(0,r.kt)("inlineCode",{parentName:"p"},"pageFunction"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Signature:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"class Page {\n  $eval<\n    Selector extends string,\n    Params extends unknown[],\n    Func extends EvaluateFunc<\n      [ElementHandle<NodeFor<Selector>>, ...Params]\n    > = EvaluateFunc<[ElementHandle<NodeFor<Selector>>, ...Params]>\n  >(\n    selector: Selector,\n    pageFunction: Func | string,\n    ...args: Params\n  ): Promise<Awaited<ReturnType<Func>>>;\n}\n")),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"selector"),(0,r.kt)("td",{parentName:"tr",align:null},"Selector"),(0,r.kt)("td",{parentName:"tr",align:null},"the ",(0,r.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors"},"selector")," to query for")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pageFunction"),(0,r.kt)("td",{parentName:"tr",align:null},"Func ","|"," string"),(0,r.kt)("td",{parentName:"tr",align:null},"the function to be evaluated in the page context. Will be passed the result of ",(0,r.kt)("code",null,"document.querySelector(selector)")," as its first argument.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"args"),(0,r.kt)("td",{parentName:"tr",align:null},"Params"),(0,r.kt)("td",{parentName:"tr",align:null},"any additional arguments to pass through to ",(0,r.kt)("code",null,"pageFunction"),".")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns:")),(0,r.kt)("p",null,"Promise","<","Awaited","<","ReturnType","<","Func",">",">",">"),(0,r.kt)("p",null,"The result of calling ",(0,r.kt)("inlineCode",{parentName:"p"},"pageFunction"),". If it returns an element it is wrapped in an ",(0,r.kt)("a",{parentName:"p",href:"/15.4.2/api/puppeteer.elementhandle"},"ElementHandle"),", else the raw value itself is returned."),(0,r.kt)("h2",{id:"remarks"},"Remarks"),(0,r.kt)("p",null,"If no element is found matching ",(0,r.kt)("inlineCode",{parentName:"p"},"selector"),", the method will throw an error."),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},"pageFunction")," returns a promise ",(0,r.kt)("inlineCode",{parentName:"p"},"$eval")," will wait for the promise to resolve and then return its value."),(0,r.kt)("h2",{id:"example-1"},"Example 1"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const searchValue = await page.$eval('#search', el => el.value);\nconst preloadHref = await page.$eval('link[rel=preload]', el => el.href);\nconst html = await page.$eval('.main-container', el => el.outerHTML);\n")),(0,r.kt)("p",null,"If you are using TypeScript, you may have to provide an explicit type to the first argument of the ",(0,r.kt)("inlineCode",{parentName:"p"},"pageFunction"),". By default it is typed as ",(0,r.kt)("inlineCode",{parentName:"p"},"Element"),", but you may need to provide a more specific sub-type:"),(0,r.kt)("h2",{id:"example-2"},"Example 2"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// if you don't provide HTMLInputElement here, TS will error\n// as `value` is not on `Element`\nconst searchValue = await page.$eval(\n  '#search',\n  (el: HTMLInputElement) => el.value\n);\n")),(0,r.kt)("p",null,"The compiler should be able to infer the return type from the ",(0,r.kt)("inlineCode",{parentName:"p"},"pageFunction")," you provide. If it is unable to, you can use the generic type to tell the compiler what return type you expect from ",(0,r.kt)("inlineCode",{parentName:"p"},"$eval"),":"),(0,r.kt)("h2",{id:"example-3"},"Example 3"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// The compiler can infer the return type in this case, but if it can't\n// or if you want to be more explicit, provide it as the generic type.\nconst searchValue = await page.$eval<string>(\n  '#search',\n  (el: HTMLInputElement) => el.value\n);\n")))}c.isMDXComponent=!0}}]);