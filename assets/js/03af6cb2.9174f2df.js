/*! For license information please see 03af6cb2.9174f2df.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[77041],{76982:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var i=n(85893),r=n(11151);const a={sidebar_label:"Page.waitForNavigation"},o="Page.waitForNavigation() method",s={id:"api/puppeteer.page.waitfornavigation",title:"Page.waitForNavigation() method",description:"Waits for the page to navigate to a new URL or to reload. It is useful when you run code that will indirectly cause the page to navigate.",source:"@site/../docs/api/puppeteer.page.waitfornavigation.md",sourceDirName:"api",slug:"/api/puppeteer.page.waitfornavigation",permalink:"/next/api/puppeteer.page.waitfornavigation",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Page.waitForNavigation"},sidebar:"api",previous:{title:"Page.waitForFunction",permalink:"/next/api/puppeteer.page.waitforfunction"},next:{title:"Page.waitForNetworkIdle",permalink:"/next/api/puppeteer.page.waitfornetworkidle"}},l={},p=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2}];function c(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"pagewaitfornavigation-method",children:"Page.waitForNavigation() method"}),"\n",(0,i.jsx)(t.p,{children:"Waits for the page to navigate to a new URL or to reload. It is useful when you run code that will indirectly cause the page to navigate."}),"\n",(0,i.jsx)(t.h4,{id:"signature",children:"Signature:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:"class Page {\n  waitForNavigation(options?: WaitForOptions): Promise<HTTPResponse | null>;\n}\n"})}),"\n",(0,i.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:(0,i.jsx)(t.p,{children:"Parameter"})}),(0,i.jsx)("th",{children:(0,i.jsx)(t.p,{children:"Type"})}),(0,i.jsx)("th",{children:(0,i.jsx)(t.p,{children:"Description"})})]})}),(0,i.jsx)("tbody",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(t.p,{children:"options"})}),(0,i.jsx)("td",{children:(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"/next/api/puppeteer.waitforoptions",children:"WaitForOptions"})})}),(0,i.jsx)("td",{children:(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.em,{children:"(Optional)"})," Navigation parameters which might have the following properties:"]})})]})})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,i.jsxs)(t.p,{children:["Promise<",(0,i.jsx)(t.a,{href:"/next/api/puppeteer.httpresponse",children:"HTTPResponse"})," | null>"]}),"\n",(0,i.jsxs)(t.p,{children:["A ",(0,i.jsx)(t.code,{children:"Promise"})," which resolves to the main resource response."]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["In case of multiple redirects, the navigation will resolve with the response of the last redirect. - In case of navigation to a different anchor or navigation due to History API usage, the navigation will resolve with ",(0,i.jsx)(t.code,{children:"null"}),"."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,i.jsxs)(t.p,{children:["Usage of the ",(0,i.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/History_API",children:"History API"})," to change the URL is considered a navigation."]}),"\n",(0,i.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"const [response] = await Promise.all([\n  page.waitForNavigation(), // The promise resolves after navigation has finished\n  page.click('a.my-link'), // Clicking the link will indirectly cause a navigation\n]);\n"})})]})}function d(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},75251:(e,t,n)=>{var i=n(67294),r=Symbol.for("react.element"),a=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,s=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function p(e,t,n){var i,a={},p=null,c=null;for(i in void 0!==n&&(p=""+n),void 0!==t.key&&(p=""+t.key),void 0!==t.ref&&(c=t.ref),t)o.call(t,i)&&!l.hasOwnProperty(i)&&(a[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===a[i]&&(a[i]=t[i]);return{$$typeof:r,type:e,key:p,ref:c,props:a,_owner:s.current}}t.Fragment=a,t.jsx=p,t.jsxs=p},85893:(e,t,n)=>{e.exports=n(75251)},11151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>o});var i=n(67294);const r={},a=i.createContext(r);function o(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);