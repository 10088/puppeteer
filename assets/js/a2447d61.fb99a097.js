"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[24091],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(n),f=o,d=m["".concat(u,".").concat(f)]||m[f]||l[f]||i;return n?r.createElement(d,a(a({ref:t},s),{},{components:n})):r.createElement(d,a({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},64272:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const i={sidebar_label:"FrameWaitForFunctionOptions.timeout"},a="FrameWaitForFunctionOptions.timeout property",p={unversionedId:"api/puppeteer.framewaitforfunctionoptions.timeout",id:"version-15.3.0/api/puppeteer.framewaitforfunctionoptions.timeout",title:"FrameWaitForFunctionOptions.timeout property",description:"Maximum time to wait in milliseconds. Defaults to 30000 (30 seconds). Pass 0 to disable the timeout. Puppeteer's default timeout can be changed using Page.setDefaultTimeout().",source:"@site/versioned_docs/version-15.3.0/api/puppeteer.framewaitforfunctionoptions.timeout.md",sourceDirName:"api",slug:"/api/puppeteer.framewaitforfunctionoptions.timeout",permalink:"/15.3.0/api/puppeteer.framewaitforfunctionoptions.timeout",draft:!1,tags:[],version:"15.3.0",frontMatter:{sidebar_label:"FrameWaitForFunctionOptions.timeout"},sidebar:"sidebar",previous:{title:"FrameWaitForFunctionOptions.polling",permalink:"/15.3.0/api/puppeteer.framewaitforfunctionoptions.polling"},next:{title:"GeolocationOptions",permalink:"/15.3.0/api/puppeteer.geolocationoptions"}},u={},c=[],s={toc:c};function l(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"framewaitforfunctionoptionstimeout-property"},"FrameWaitForFunctionOptions.timeout property"),(0,o.kt)("p",null,"Maximum time to wait in milliseconds. Defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"30000")," (30 seconds). Pass ",(0,o.kt)("inlineCode",{parentName:"p"},"0")," to disable the timeout. Puppeteer's default timeout can be changed using ",(0,o.kt)("a",{parentName:"p",href:"/15.3.0/api/puppeteer.page.setdefaulttimeout"},"Page.setDefaultTimeout()"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Signature:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"interface FrameWaitForFunctionOptions {\n  timeout?: number;\n}\n")))}l.isMDXComponent=!0}}]);