"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[47729],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>f});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},p=Object.keys(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},v=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,p=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),v=l(t),f=i,d=v["".concat(c,".").concat(f)]||v[f]||s[f]||p;return t?n.createElement(d,o(o({ref:r},u),{},{components:t})):n.createElement(d,o({ref:r},u))}));function f(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var p=t.length,o=new Array(p);o[0]=v;var a={};for(var c in r)hasOwnProperty.call(r,c)&&(a[c]=r[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var l=2;l<p;l++)o[l]=t[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}v.displayName="MDXCreateElement"},88502:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>s,frontMatter:()=>p,metadata:()=>a,toc:()=>l});var n=t(87462),i=(t(67294),t(3905));const p={sidebar_label:"Device.viewport"},o="Device.viewport property",a={unversionedId:"api/puppeteer.device.viewport",id:"version-15.3.1/api/puppeteer.device.viewport",title:"Device.viewport property",description:"Signature:",source:"@site/versioned_docs/version-15.3.1/api/puppeteer.device.viewport.md",sourceDirName:"api",slug:"/api/puppeteer.device.viewport",permalink:"/15.3.1/api/puppeteer.device.viewport",draft:!1,tags:[],version:"15.3.1",frontMatter:{sidebar_label:"Device.viewport"},sidebar:"sidebar",previous:{title:"Device.userAgent",permalink:"/15.3.1/api/puppeteer.device.useragent"},next:{title:"DevicesMap",permalink:"/15.3.1/api/puppeteer.devicesmap"}},c={},l=[],u={toc:l};function s(e){let{components:r,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"deviceviewport-property"},"Device.viewport property"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Signature:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"interface Device {\n  viewport: {\n    width: number;\n    height: number;\n    deviceScaleFactor: number;\n    isMobile: boolean;\n    hasTouch: boolean;\n    isLandscape: boolean;\n  };\n}\n")))}s.isMDXComponent=!0}}]);