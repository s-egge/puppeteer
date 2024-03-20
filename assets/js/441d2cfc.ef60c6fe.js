/*! For license information please see 441d2cfc.ef60c6fe.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[34784],{6547:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>i,default:()=>l,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var n=t(85893),o=t(11151);const s={sidebar_label:"PuppeteerNode.launch"},i="PuppeteerNode.launch() method",a={id:"api/puppeteer.puppeteernode.launch",title:"PuppeteerNode.launch() method",description:"Launches a browser instance with given arguments and options when specified.",source:"@site/versioned_docs/version-22.6.0/api/puppeteer.puppeteernode.launch.md",sourceDirName:"api",slug:"/api/puppeteer.puppeteernode.launch",permalink:"/api/puppeteer.puppeteernode.launch",draft:!1,unlisted:!1,tags:[],version:"22.6.0",frontMatter:{sidebar_label:"PuppeteerNode.launch"},sidebar:"api",previous:{title:"PuppeteerNode.executablePath",permalink:"/api/puppeteer.puppeteernode.executablepath"},next:{title:"PuppeteerNode.trimCache",permalink:"/api/puppeteer.puppeteernode.trimcache"}},p={},c=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2}];function h(e){const r={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"puppeteernodelaunch-method",children:"PuppeteerNode.launch() method"}),"\n",(0,n.jsx)(r.p,{children:"Launches a browser instance with given arguments and options when specified."}),"\n",(0,n.jsxs)(r.p,{children:["When using with ",(0,n.jsx)(r.code,{children:"puppeteer-core"}),", ",(0,n.jsx)(r.a,{href:"/api/puppeteer.launchoptions",children:"options.executablePath"})," or ",(0,n.jsx)(r.a,{href:"/api/puppeteer.launchoptions",children:"options.channel"})," must be provided."]}),"\n",(0,n.jsx)(r.h4,{id:"signature",children:"Signature:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"class PuppeteerNode {\n  launch(options?: PuppeteerLaunchOptions): Promise<Browser>;\n}\n"})}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Parameter"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"options"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/api/puppeteer.puppeteerlaunchoptions",children:"PuppeteerLaunchOptions"})}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.em,{children:"(Optional)"})," Options to configure launching behavior."]})]})})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,n.jsxs)(r.p,{children:["Promise<",(0,n.jsx)(r.a,{href:"/api/puppeteer.browser",children:"Browser"}),">"]}),"\n",(0,n.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,n.jsxs)(r.p,{children:["Puppeteer can also be used to control the Chrome browser, but it works best with the version of Chrome for Testing downloaded by default. There is no guarantee it will work with any other version. If Google Chrome (rather than Chrome for Testing) is preferred, a ",(0,n.jsx)(r.a,{href:"https://www.google.com/chrome/browser/canary.html",children:"Chrome Canary"})," or ",(0,n.jsx)(r.a,{href:"https://www.chromium.org/getting-involved/dev-channel",children:"Dev Channel"})," build is suggested. See ",(0,n.jsx)(r.a,{href:"https://www.howtogeek.com/202825/what%E2%80%99s-the-difference-between-chromium-and-chrome/",children:"this article"})," for a description of the differences between Chromium and Chrome. ",(0,n.jsx)(r.a,{href:"https://chromium.googlesource.com/chromium/src/+/lkgr/docs/chromium_browser_vs_google_chrome.md",children:"This article"})," describes some differences for Linux users. See ",(0,n.jsx)(r.a,{href:"https://developer.chrome.com/blog/chrome-for-testing/",children:"this doc"})," for the description of Chrome for Testing."]}),"\n",(0,n.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,n.jsxs)(r.p,{children:["You can use ",(0,n.jsx)(r.a,{href:"/api/puppeteer.launchoptions",children:"options.ignoreDefaultArgs"})," to filter out ",(0,n.jsx)(r.code,{children:"--mute-audio"})," from default arguments:"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",children:"const browser = await puppeteer.launch({\n  ignoreDefaultArgs: ['--mute-audio'],\n});\n"})})]})}function l(e={}){const{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},75251:(e,r,t)=>{var n=t(67294),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,t){var n,s={},c=null,h=null;for(n in void 0!==t&&(c=""+t),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(h=r.ref),r)i.call(r,n)&&!p.hasOwnProperty(n)&&(s[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===s[n]&&(s[n]=r[n]);return{$$typeof:o,type:e,key:c,ref:h,props:s,_owner:a.current}}r.Fragment=s,r.jsx=c,r.jsxs=c},85893:(e,r,t)=>{e.exports=t(75251)},11151:(e,r,t)=>{t.d(r,{Z:()=>a,a:()=>i});var n=t(67294);const o={},s=n.createContext(o);function i(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);