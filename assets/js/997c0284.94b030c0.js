"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[72478],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=l(r),f=o,m=d["".concat(s,".").concat(f)]||d[f]||c[f]||i;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},86727:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const i={sidebar_label:"HTTPRequest.isInterceptResolutionHandled"},a="HTTPRequest.isInterceptResolutionHandled() method",p={unversionedId:"api/puppeteer.httprequest.isinterceptresolutionhandled",id:"api/puppeteer.httprequest.isinterceptresolutionhandled",title:"HTTPRequest.isInterceptResolutionHandled() method",description:"Signature:",source:"@site/../docs/api/puppeteer.httprequest.isinterceptresolutionhandled.md",sourceDirName:"api",slug:"/api/puppeteer.httprequest.isinterceptresolutionhandled",permalink:"/next/api/puppeteer.httprequest.isinterceptresolutionhandled",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"HTTPRequest.isInterceptResolutionHandled"},sidebar:"sidebar",previous:{title:"HTTPRequest.interceptResolutionState",permalink:"/next/api/puppeteer.httprequest.interceptresolutionstate"},next:{title:"HTTPRequest.isNavigationRequest",permalink:"/next/api/puppeteer.httprequest.isnavigationrequest"}},s={},l=[],u={toc:l};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"httprequestisinterceptresolutionhandled-method"},"HTTPRequest.isInterceptResolutionHandled() method"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Signature:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"class HTTPRequest {\n  isInterceptResolutionHandled(): boolean;\n}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")),(0,o.kt)("p",null,"boolean"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"true")," if the intercept resolution has already been handled, ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," otherwise."))}c.isMDXComponent=!0}}]);