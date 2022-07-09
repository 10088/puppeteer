"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[85134],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,f=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},81165:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_label:"Page.reload"},i="Page.reload() method",p={unversionedId:"api/puppeteer.page.reload",id:"version-15.3.1/api/puppeteer.page.reload",title:"Page.reload() method",description:"Signature:",source:"@site/versioned_docs/version-15.3.1/api/puppeteer.page.reload.md",sourceDirName:"api",slug:"/api/puppeteer.page.reload",permalink:"/15.3.1/api/puppeteer.page.reload",draft:!1,tags:[],version:"15.3.1",frontMatter:{sidebar_label:"Page.reload"},sidebar:"sidebar",previous:{title:"Page.queryObjects",permalink:"/15.3.1/api/puppeteer.page.queryobjects"},next:{title:"Page.screenshot",permalink:"/15.3.1/api/puppeteer.page.screenshot"}},l={},s=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}],u={toc:s};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"pagereload-method"},"Page.reload() method"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class Page {\n  reload(options?: WaitForOptions): Promise<HTTPResponse | null>;\n}\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"options"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/15.3.1/api/puppeteer.waitforoptions"},"WaitForOptions")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("i",null,"(Optional)")," Navigation parameters which might have the following properties:")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")),(0,a.kt)("p",null,"Promise","<",(0,a.kt)("a",{parentName:"p",href:"/15.3.1/api/puppeteer.httpresponse"},"HTTPResponse")," ","|"," null",">"),(0,a.kt)("p",null,"Promise which resolves to the main resource response. In case of multiple redirects, the navigation will resolve with the response of the last redirect."),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"The argument ",(0,a.kt)("inlineCode",{parentName:"p"},"options")," might have the following properties:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"timeout")," : Maximum navigation time in milliseconds, defaults to 30 seconds, pass 0 to disable timeout. The default value can be changed by using the ",(0,a.kt)("a",{parentName:"p",href:"/15.3.1/api/puppeteer.page.setdefaultnavigationtimeout"},"Page.setDefaultNavigationTimeout()")," or ",(0,a.kt)("a",{parentName:"p",href:"/15.3.1/api/puppeteer.page.setdefaulttimeout"},"Page.setDefaultTimeout()")," methods.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"waitUntil"),": When to consider navigation succeeded, defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"load"),". Given an array of event strings, navigation is considered to be successful after all events have been fired. Events can be either:",(0,a.kt)("br",null)," - ",(0,a.kt)("inlineCode",{parentName:"p"},"load")," : consider navigation to be finished when the load event is fired.",(0,a.kt)("br",null)," - ",(0,a.kt)("inlineCode",{parentName:"p"},"domcontentloaded")," : consider navigation to be finished when the DOMContentLoaded event is fired.",(0,a.kt)("br",null)," - ",(0,a.kt)("inlineCode",{parentName:"p"},"networkidle0")," : consider navigation to be finished when there are no more than 0 network connections for at least ",(0,a.kt)("inlineCode",{parentName:"p"},"500")," ms.",(0,a.kt)("br",null)," - ",(0,a.kt)("inlineCode",{parentName:"p"},"networkidle2")," : consider navigation to be finished when there are no more than 2 network connections for at least ",(0,a.kt)("inlineCode",{parentName:"p"},"500")," ms."))))}d.isMDXComponent=!0}}]);