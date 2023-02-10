"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[90420],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var n=r(67294);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,p=e.mdxType,o=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),s=l(r),y=p,v=s["".concat(c,".").concat(y)]||s[y]||f[y]||o;return r?n.createElement(v,i(i({ref:t},u),{},{components:r})):n.createElement(v,i({ref:t},u))}));function y(e,t){var r=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var o=r.length,i=new Array(o);i[0]=s;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:p,i[1]=a;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},58459:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>s,frontMatter:()=>i,metadata:()=>c,toc:()=>u});r(67294);var n=r(3905);function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},p.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}const i={sidebar_label:"PuppeteerLifeCycleEvent"},a="PuppeteerLifeCycleEvent type",c={unversionedId:"api/puppeteer.puppeteerlifecycleevent",id:"version-19.6.3/api/puppeteer.puppeteerlifecycleevent",title:"PuppeteerLifeCycleEvent type",description:"Signature:",source:"@site/versioned_docs/version-19.6.3/api/puppeteer.puppeteerlifecycleevent.md",sourceDirName:"api",slug:"/api/puppeteer.puppeteerlifecycleevent",permalink:"/api/puppeteer.puppeteerlifecycleevent",draft:!1,tags:[],version:"19.6.3",frontMatter:{sidebar_label:"PuppeteerLifeCycleEvent"},sidebar:"api",previous:{title:"PuppeteerLaunchOptions.product",permalink:"/api/puppeteer.puppeteerlaunchoptions.product"},next:{title:"PuppeteerNodeLaunchOptions",permalink:"/api/puppeteer.puppeteernodelaunchoptions"}},l={},u=[{value:"Signature:",id:"signature",level:4}],f={toc:u};function s(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)("wrapper",p({},f,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",p({},{id:"puppeteerlifecycleevent-type"}),"PuppeteerLifeCycleEvent type"),(0,n.kt)("h4",p({},{id:"signature"}),"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-typescript"}),"export type PuppeteerLifeCycleEvent =\n  | 'load'\n  | 'domcontentloaded'\n  | 'networkidle0'\n  | 'networkidle2';\n")))}s.isMDXComponent=!0}}]);