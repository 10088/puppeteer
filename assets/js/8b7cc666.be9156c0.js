"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[13740],{3905:(e,n,r)=>{r.d(n,{Zo:()=>c,kt:()=>b});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=t.createContext({}),p=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},c=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(r),b=o,f=m["".concat(s,".").concat(b)]||m[b]||u[b]||a;return r?t.createElement(f,i(i({ref:n},c),{},{components:r})):t.createElement(f,i({ref:n},c))}));function b(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},29986:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var t=r(87462),o=(r(67294),r(3905));const a={sidebar_label:"ConsoleMessageLocation.lineNumber"},i="ConsoleMessageLocation.lineNumber property",l={unversionedId:"api/puppeteer.consolemessagelocation.linenumber",id:"version-15.3.1/api/puppeteer.consolemessagelocation.linenumber",title:"ConsoleMessageLocation.lineNumber property",description:"0-based line number in the resource if known or undefined otherwise.",source:"@site/versioned_docs/version-15.3.1/api/puppeteer.consolemessagelocation.linenumber.md",sourceDirName:"api",slug:"/api/puppeteer.consolemessagelocation.linenumber",permalink:"/15.3.1/api/puppeteer.consolemessagelocation.linenumber",draft:!1,tags:[],version:"15.3.1",frontMatter:{sidebar_label:"ConsoleMessageLocation.lineNumber"},sidebar:"sidebar",previous:{title:"ConsoleMessageLocation.columnNumber",permalink:"/15.3.1/api/puppeteer.consolemessagelocation.columnnumber"},next:{title:"ConsoleMessageLocation.url",permalink:"/15.3.1/api/puppeteer.consolemessagelocation.url"}},s={},p=[],c={toc:p};function u(e){let{components:n,...r}=e;return(0,o.kt)("wrapper",(0,t.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"consolemessagelocationlinenumber-property"},"ConsoleMessageLocation.lineNumber property"),(0,o.kt)("p",null,"0-based line number in the resource if known or ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined")," otherwise."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Signature:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"interface ConsoleMessageLocation {\n  lineNumber?: number;\n}\n")))}u.isMDXComponent=!0}}]);