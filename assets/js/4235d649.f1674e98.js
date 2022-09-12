"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[91368],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||s;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<s;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9489:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const s={sidebar_label:"Accessibility.snapshot"},o="Accessibility.snapshot() method",i={unversionedId:"api/puppeteer.accessibility.snapshot",id:"api/puppeteer.accessibility.snapshot",title:"Accessibility.snapshot() method",description:"Captures the current state of the accessibility tree. The returned object represents the root accessible node of the page.",source:"@site/../docs/api/puppeteer.accessibility.snapshot.md",sourceDirName:"api",slug:"/api/puppeteer.accessibility.snapshot",permalink:"/next/api/puppeteer.accessibility.snapshot",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Accessibility.snapshot"},sidebar:"sidebar",previous:{title:"Accessibility",permalink:"/next/api/puppeteer.accessibility"},next:{title:"Keyboard",permalink:"/next/api/puppeteer.keyboard"}},p={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2}],c={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"accessibilitysnapshot-method"},"Accessibility.snapshot() method"),(0,a.kt)("p",null,"Captures the current state of the accessibility tree. The returned object represents the root accessible node of the page."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class Accessibility {\n  snapshot(options?: SnapshotOptions): Promise<SerializedAXNode | null>;\n}\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"options"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/next/api/puppeteer.snapshotoptions"},"SnapshotOptions")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("i",null,"(Optional)"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")),(0,a.kt)("p",null,"Promise","<",(0,a.kt)("a",{parentName:"p",href:"/next/api/puppeteer.serializedaxnode"},"SerializedAXNode")," ","|"," null",">"),(0,a.kt)("p",null,"An AXNode object representing the snapshot."),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"NOTE")," The Chromium accessibility tree contains nodes that go unused on most platforms and by most screen readers. Puppeteer will discard them as well for an easier to process tree, unless ",(0,a.kt)("inlineCode",{parentName:"p"},"interestingOnly")," is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,a.kt)("h2",{id:"example-1"},"Example 1"),(0,a.kt)("p",null,"An example of dumping the entire accessibility tree:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const snapshot = await page.accessibility.snapshot();\nconsole.log(snapshot);\n")),(0,a.kt)("h2",{id:"example-2"},"Example 2"),(0,a.kt)("p",null,"An example of logging the focused node's name:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const snapshot = await page.accessibility.snapshot();\nconst node = findFocusedNode(snapshot);\nconsole.log(node && node.name);\n\nfunction findFocusedNode(node) {\n  if (node.focused) return node;\n  for (const child of node.children || []) {\n    const foundNode = findFocusedNode(child);\n    return foundNode;\n  }\n  return null;\n}\n")))}u.isMDXComponent=!0}}]);