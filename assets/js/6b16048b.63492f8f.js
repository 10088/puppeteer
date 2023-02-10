"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[51269],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),f=l(r),g=a,d=f["".concat(u,".").concat(g)]||f[g]||c[g]||o;return r?n.createElement(d,i(i({ref:t},s),{},{components:r})):n.createElement(d,i({ref:t},s))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1372:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>f,frontMatter:()=>i,metadata:()=>u,toc:()=>s});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={sidebar_label:"LaunchOptions.ignoreDefaultArgs"},p="LaunchOptions.ignoreDefaultArgs property",u={unversionedId:"api/puppeteer.launchoptions.ignoredefaultargs",id:"version-19.6.3/api/puppeteer.launchoptions.ignoredefaultargs",title:"LaunchOptions.ignoreDefaultArgs property",description:"If true, do not use puppeteer.defaultArgs() when creating a browser. If an array is provided, these args will be filtered out. Use this with care - you probably want the default arguments Puppeteer uses.",source:"@site/versioned_docs/version-19.6.3/api/puppeteer.launchoptions.ignoredefaultargs.md",sourceDirName:"api",slug:"/api/puppeteer.launchoptions.ignoredefaultargs",permalink:"/api/puppeteer.launchoptions.ignoredefaultargs",draft:!1,tags:[],version:"19.6.3",frontMatter:{sidebar_label:"LaunchOptions.ignoreDefaultArgs"},sidebar:"api",previous:{title:"LaunchOptions.handleSIGTERM",permalink:"/api/puppeteer.launchoptions.handlesigterm"},next:{title:"LaunchOptions.pipe",permalink:"/api/puppeteer.launchoptions.pipe"}},l={},s=[{value:"Signature:",id:"signature",level:4},{value:"Default value:",id:"default-value",level:4}],c={toc:s};function f(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)("wrapper",a({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",a({},{id:"launchoptionsignoredefaultargs-property"}),"LaunchOptions.ignoreDefaultArgs property"),(0,n.kt)("p",null,"If ",(0,n.kt)("inlineCode",{parentName:"p"},"true"),", do not use ",(0,n.kt)("inlineCode",{parentName:"p"},"puppeteer.defaultArgs()")," when creating a browser. If an array is provided, these args will be filtered out. Use this with care - you probably want the default arguments Puppeteer uses."),(0,n.kt)("h4",a({},{id:"signature"}),"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-typescript"}),"interface LaunchOptions {\n  ignoreDefaultArgs?: boolean | string[];\n}\n")),(0,n.kt)("h4",a({},{id:"default-value"}),"Default value:"),(0,n.kt)("p",null,"false"))}f.isMDXComponent=!0}}]);