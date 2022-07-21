"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[555400],{603905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var a=n(667294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),d=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=d(n),h=r,c=u["".concat(i,".").concat(h)]||u[h]||s[h]||l;return n?a.createElement(c,p(p({ref:t},m),{},{components:n})):a.createElement(c,p({ref:t},m))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,p=new Array(l);p[0]=u;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,p[1]=o;for(var d=2;d<l;d++)p[d]=n[d];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},667e3:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=n(487462),r=(n(667294),n(603905));const l={sidebar_label:"ElementHandle"},p="ElementHandle class",o={unversionedId:"api/puppeteer.elementhandle",id:"version-15.4.2/api/puppeteer.elementhandle",title:"ElementHandle class",description:"ElementHandle represents an in-page DOM element.",source:"@site/versioned_docs/version-15.4.2/api/puppeteer.elementhandle.md",sourceDirName:"api",slug:"/api/puppeteer.elementhandle",permalink:"/15.4.2/api/puppeteer.elementhandle",draft:!1,tags:[],version:"15.4.2",frontMatter:{sidebar_label:"ElementHandle"},sidebar:"sidebar",previous:{title:"EVALUATION_SCRIPT_URL",permalink:"/15.4.2/api/puppeteer.evaluation_script_url"},next:{title:"ElementHandle.$",permalink:"/15.4.2/api/puppeteer.elementhandle._"}},i={},d=[{value:"Remarks",id:"remarks",level:2},{value:"Methods",id:"methods",level:2}],m={toc:d};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"elementhandle-class"},"ElementHandle class"),(0,r.kt)("p",null,"ElementHandle represents an in-page DOM element."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Signature:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare class ElementHandle<ElementType extends Node = Element> extends JSHandle<ElementType>\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Extends:")," ",(0,r.kt)("a",{parentName:"p",href:"/15.4.2/api/puppeteer.jshandle"},"JSHandle")),(0,r.kt)("h2",{id:"remarks"},"Remarks"),(0,r.kt)("p",null,"ElementHandles can be created with the ",(0,r.kt)("a",{parentName:"p",href:"/15.4.2/api/puppeteer.page._"},"Page.$()")," method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const puppeteer = require('puppeteer');\n\n(async () => {\n  const browser = await puppeteer.launch();\n  const page = await browser.newPage();\n  await page.goto('https://example.com');\n  const hrefElement = await page.$('a');\n  await hrefElement.click();\n  // ...\n})();\n")),(0,r.kt)("p",null,"ElementHandle prevents the DOM element from being garbage-collected unless the handle is ",(0,r.kt)("a",{parentName:"p",href:"/15.4.2/api/puppeteer.jshandle.dispose"},"disposed"),". ElementHandles are auto-disposed when their origin frame gets navigated."),(0,r.kt)("p",null,"ElementHandle instances can be used as arguments in ",(0,r.kt)("a",{parentName:"p",href:"/15.4.2/api/puppeteer.page._eval"},"Page.$eval()")," and ",(0,r.kt)("a",{parentName:"p",href:"/15.4.2/api/puppeteer.page.evaluate"},"Page.evaluate()")," methods."),(0,r.kt)("p",null,"If you're using TypeScript, ElementHandle takes a generic argument that denotes the type of element the handle is holding within. For example, if you have a handle to a ",(0,r.kt)("inlineCode",{parentName:"p"},"<select>")," element, you can type it as ",(0,r.kt)("inlineCode",{parentName:"p"},"ElementHandle<HTMLSelectElement>")," and you get some nicer type checks."),(0,r.kt)("p",null,"The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",(0,r.kt)("inlineCode",{parentName:"p"},"ElementHandle")," class."),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Method"),(0,r.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/15.4.2/api/puppeteer.elementhandle._"},"$(selector)")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Runs ",(0,r.kt)("code",null,"element.querySelector")," within the page.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/15.4.2/api/puppeteer.elementhandle.__"},"$$(selector)")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Runs ",(0,r.kt)("code",null,"element.querySelectorAll")," within the page.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/15.4.2/api/puppeteer.elementhandle.__eval"},"$$eval(selector, pageFunction, args)")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,"This method runs ",(0,r.kt)("code",null,"document.querySelectorAll")," within the element and passes it as the first argument to ",(0,r.kt)("code",null,"pageFunction"),". If there's no element matching ",(0,r.kt)("code",null,"selector"),", the method throws an error."),(0,r.kt)("p",null,"If ",(0,r.kt)("code",null,"pageFunction")," returns a Promise, then ",(0,r.kt)("code",null,"frame.$$eval")," would wait for the promise to resolve and return its value."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/15.4.2/api/puppeteer.elementhandle._eval"},"$eval(selector, pageFunction, args)")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,"This method runs ",(0,r.kt)("code",null,"document.querySelector")," within the element and passes it as the first argument to ",(0,r.kt)("code",null,"pageFunction"),". If there's no element matching ",(0,r.kt)("code",null,"selector"),", the method throws an error."),(0,r.kt)("p",null,"If ",(0,r.kt)("code",null,"pageFunction")," returns a Promise, then ",(0,r.kt)("code",null,"frame.$eval")," would wait for the promise to resolve and return its value."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/15.4.2/api/puppeteer.elementhandle._x"},"$x(expression)")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"The method evaluates the XPath expression relative to the elementHandle. If there are no such elements, the method will resolve to an empty array.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/15.4.2/api/puppeteer.elementhandle.aselement"},"asElement()")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/15.4.2/api/puppeteer.elementhandle.boundingbox"},"boundingBox()")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"This method returns the bounding box of the element (relative to the main frame), or ",(0,r.kt)("code",null,"null")," if the element is not visible.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/15.4.2/api/puppeteer.elementhandle.boxmodel"},"boxModel()")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"This method returns boxes of the element, or ",(0,r.kt)("code",null,"null")," if the element is not visible.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/15.4.2/api/puppeteer.elementhandle.click"},"click(this, options)")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"This method scrolls element into view if needed, and then uses ",(0,r.kt)("a",{parentName:"td",href:"/15.4.2/api/puppeteer.page.mouse"},"Page.mouse")," to click in the center of the element. If the element is detached from DOM, the method throws an error.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/15.4.2/api/puppeteer.elementhandle.clickablepoint"},"clickablePoint(offset)")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Returns the middle point within an element unless a specific offset is provided.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/15.4.2/api/puppeteer.elementhandle.contentframe"},"contentFrame()")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Resolves to the content frame for element handles referencing iframe nodes, or null otherwise")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/15.4.2/api/puppeteer.elementhandle.drag"},"drag(this, target)")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"This method creates and captures a dragevent from the element.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/15.4.2/api/puppeteer.elementhandle.draganddrop"},"dragAndDrop(this, target, options)")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"This method triggers a dragenter, dragover, and drop on the element.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/15.4.2/api/puppeteer.elementhandle.dragenter"},"dragEnter(this, data)")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"This method creates a ",(0,r.kt)("code",null,"dragenter")," event on the element.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/15.4.2/api/puppeteer.elementhandle.dragover"},"dragOver(this, data)")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"This method creates a ",(0,r.kt)("code",null,"dragover")," event on the element.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/15.4.2/api/puppeteer.elementhandle.drop"},"drop(this, data)")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"This method triggers a drop on the element.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/15.4.2/api/puppeteer.elementhandle.focus"},"focus()")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Calls ",(0,r.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus"},"focus")," on the element.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/15.4.2/api/puppeteer.elementhandle.hover"},"hover(this)")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"This method scrolls element into view if needed, and then uses ",(0,r.kt)("a",{parentName:"td",href:"/15.4.2/api/puppeteer.page.mouse"},"Page.mouse")," to hover over the center of the element. If the element is detached from DOM, the method throws an error.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/15.4.2/api/puppeteer.elementhandle.isintersectingviewport"},"isIntersectingViewport(this, options)")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Resolves to true if the element is visible in the current viewport.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/15.4.2/api/puppeteer.elementhandle.press"},"press(key, options)")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Focuses the element, and then uses ",(0,r.kt)("a",{parentName:"td",href:"/15.4.2/api/puppeteer.keyboard.down"},"Keyboard.down()")," and ",(0,r.kt)("a",{parentName:"td",href:"/15.4.2/api/puppeteer.keyboard.up"},"Keyboard.up()"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/15.4.2/api/puppeteer.elementhandle.screenshot"},"screenshot(this, options)")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"This method scrolls element into view if needed, and then uses ",(0,r.kt)("a",{parentName:"td",href:"/15.4.2/api/puppeteer.page.screenshot"},"Page.screenshot()")," to take a screenshot of the element. If the element is detached from DOM, the method throws an error.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/15.4.2/api/puppeteer.elementhandle.select"},"select(values)")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Triggers a ",(0,r.kt)("code",null,"change")," and ",(0,r.kt)("code",null,"input")," event once all the provided options have been selected. If there's no ",(0,r.kt)("code",null,"<","select",">")," element matching ",(0,r.kt)("code",null,"selector"),", the method throws an error.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/15.4.2/api/puppeteer.elementhandle.tap"},"tap(this)")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"This method scrolls element into view if needed, and then uses ",(0,r.kt)("a",{parentName:"td",href:"/15.4.2/api/puppeteer.touchscreen.tap"},"Touchscreen.tap()")," to tap in the center of the element. If the element is detached from DOM, the method throws an error.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/15.4.2/api/puppeteer.elementhandle.type"},"type(text, options)")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,"Focuses the element, and then sends a ",(0,r.kt)("code",null,"keydown"),", ",(0,r.kt)("code",null,"keypress"),"/",(0,r.kt)("code",null,"input"),", and ",(0,r.kt)("code",null,"keyup")," event for each character in the text."),(0,r.kt)("p",null,"To press a special key, like ",(0,r.kt)("code",null,"Control")," or ",(0,r.kt)("code",null,"ArrowDown"),", use ",(0,r.kt)("a",{parentName:"td",href:"/15.4.2/api/puppeteer.elementhandle.press"},"ElementHandle.press()"),"."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/15.4.2/api/puppeteer.elementhandle.uploadfile"},"uploadFile(this, filePaths)")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"This method expects ",(0,r.kt)("code",null,"elementHandle")," to point to an ",(0,r.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input"},"input element"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/15.4.2/api/puppeteer.elementhandle.waitforselector"},"waitForSelector(selector, options)")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,"Wait for the ",(0,r.kt)("code",null,"selector")," to appear within the element. If at the moment of calling the method the ",(0,r.kt)("code",null,"selector")," already exists, the method will return immediately. If the ",(0,r.kt)("code",null,"selector")," doesn't appear after the ",(0,r.kt)("code",null,"timeout")," milliseconds of waiting, the function will throw."),(0,r.kt)("p",null,"This method does not work across navigations or if the element is detached from DOM."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/15.4.2/api/puppeteer.elementhandle.waitforxpath"},"waitForXPath(xpath, options)")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,"Wait for the ",(0,r.kt)("code",null,"xpath")," within the element. If at the moment of calling the method the ",(0,r.kt)("code",null,"xpath")," already exists, the method will return immediately. If the ",(0,r.kt)("code",null,"xpath")," doesn't appear after the ",(0,r.kt)("code",null,"timeout")," milliseconds of waiting, the function will throw."),(0,r.kt)("p",null,"If ",(0,r.kt)("code",null,"xpath")," starts with ",(0,r.kt)("code",null,"//")," instead of ",(0,r.kt)("code",null,".//"),", the dot will be appended automatically."),(0,r.kt)("p",null,"This method works across navigation"))))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const puppeteer = require('puppeteer');\n(async () => {\n  const browser = await puppeteer.launch();\n  const page = await browser.newPage();\n  let currentURL;\n  page\n    .waitForXPath('//img')\n    .then(() => console.log('First URL with image: ' + currentURL));\n  for (currentURL of [\n    'https://example.com',\n    'https://google.com',\n    'https://bbc.com',\n  ]) {\n    await page.goto(currentURL);\n  }\n  await browser.close();\n})();\n")),(0,r.kt)("p",null,"|"))}s.isMDXComponent=!0}}]);