"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[127898],{603905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var a=n(667294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=m(n),h=r,c=u["".concat(p,".").concat(h)]||u[h]||d[h]||i;return n?a.createElement(c,l(l({ref:t},s),{},{components:n})):a.createElement(c,l({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var m=2;m<i;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},762464:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var a=n(487462),r=(n(667294),n(603905));const i={sidebar_label:"ElementHandle.waitForXPath"},l="ElementHandle.waitForXPath() method",o={unversionedId:"api/puppeteer.elementhandle.waitforxpath",id:"version-15.5.0/api/puppeteer.elementhandle.waitforxpath",title:"ElementHandle.waitForXPath() method",description:"Wait for the xpath within the element. If at the moment of calling the method the xpath already exists, the method will return immediately. If the xpath doesn't appear after the timeout milliseconds of waiting, the function will throw.",source:"@site/versioned_docs/version-15.5.0/api/puppeteer.elementhandle.waitforxpath.md",sourceDirName:"api",slug:"/api/puppeteer.elementhandle.waitforxpath",permalink:"/api/puppeteer.elementhandle.waitforxpath",draft:!1,tags:[],version:"15.5.0",frontMatter:{sidebar_label:"ElementHandle.waitForXPath"},sidebar:"sidebar",previous:{title:"ElementHandle.waitForSelector",permalink:"/api/puppeteer.elementhandle.waitforselector"},next:{title:"ErrorCode",permalink:"/api/puppeteer.errorcode"}},p={},m=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}],s={toc:m};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"elementhandlewaitforxpath-method"},"ElementHandle.waitForXPath() method"),(0,r.kt)("p",null,"Wait for the ",(0,r.kt)("inlineCode",{parentName:"p"},"xpath")," within the element. If at the moment of calling the method the ",(0,r.kt)("inlineCode",{parentName:"p"},"xpath")," already exists, the method will return immediately. If the ",(0,r.kt)("inlineCode",{parentName:"p"},"xpath")," doesn't appear after the ",(0,r.kt)("inlineCode",{parentName:"p"},"timeout")," milliseconds of waiting, the function will throw."),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},"xpath")," starts with ",(0,r.kt)("inlineCode",{parentName:"p"},"//")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},".//"),", the dot will be appended automatically."),(0,r.kt)("p",null,"This method works across navigation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const puppeteer = require('puppeteer');\n(async () => {\n  const browser = await puppeteer.launch();\n  const page = await browser.newPage();\n  let currentURL;\n  page\n    .waitForXPath('//img')\n    .then(() => console.log('First URL with image: ' + currentURL));\n  for (currentURL of [\n    'https://example.com',\n    'https://google.com',\n    'https://bbc.com',\n  ]) {\n    await page.goto(currentURL);\n  }\n  await browser.close();\n})();\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Signature:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"class ElementHandle {\n  waitForXPath(\n    xpath: string,\n    options?: {\n      visible?: boolean;\n      hidden?: boolean;\n      timeout?: number;\n    }\n  ): Promise<ElementHandle<Node> | null>;\n}\n")),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"xpath"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"A ",(0,r.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/XPath"},"xpath")," of an element to wait for")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"options"),(0,r.kt)("td",{parentName:"tr",align:null},"{ visible?: boolean; hidden?: boolean; timeout?: number; }"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",null,"(Optional)")," Optional waiting parameters")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns:")),(0,r.kt)("p",null,"Promise","<",(0,r.kt)("a",{parentName:"p",href:"/api/puppeteer.elementhandle"},"ElementHandle"),"<","Node",">"," ","|"," null",">"),(0,r.kt)("p",null,"Promise which resolves when element specified by xpath string is added to DOM. Resolves to ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," if waiting for ",(0,r.kt)("inlineCode",{parentName:"p"},"hidden: true")," and xpath is not found in DOM."),(0,r.kt)("h2",{id:"remarks"},"Remarks"),(0,r.kt)("p",null,"The optional Argument ",(0,r.kt)("inlineCode",{parentName:"p"},"options")," have properties:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"visible"),": A boolean to wait for element to be present in DOM and to be visible, i.e. to not have ",(0,r.kt)("inlineCode",{parentName:"p"},"display: none")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"visibility: hidden")," CSS properties. Defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"hidden"),": A boolean wait for element to not be found in the DOM or to be hidden, i.e. have ",(0,r.kt)("inlineCode",{parentName:"p"},"display: none")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"visibility: hidden")," CSS properties. Defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"timeout"),": A number which is maximum time to wait for in milliseconds. Defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"30000")," (30 seconds). Pass ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," to disable timeout. The default value can be changed by using the ",(0,r.kt)("a",{parentName:"p",href:"/api/puppeteer.page.setdefaulttimeout"},"Page.setDefaultTimeout()")," method."))))}d.isMDXComponent=!0}}]);