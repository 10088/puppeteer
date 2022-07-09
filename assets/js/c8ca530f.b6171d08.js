"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[73657],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>g});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=o.createContext({}),i=function(e){var r=o.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},l=function(e){var r=i(e.components);return o.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},v=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),v=i(t),g=n,m=v["".concat(c,".").concat(g)]||v[g]||u[g]||a;return t?o.createElement(m,p(p({ref:r},l),{},{components:t})):o.createElement(m,p({ref:r},l))}));function g(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,p=new Array(a);p[0]=v;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,p[1]=s;for(var i=2;i<a;i++)p[i]=t[i];return o.createElement.apply(null,p)}return o.createElement.apply(null,t)}v.displayName="MDXCreateElement"},92511:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>p,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>i});var o=t(87462),n=(t(67294),t(3905));const a={sidebar_label:"Coverage.stopJSCoverage"},p="Coverage.stopJSCoverage() method",s={unversionedId:"api/puppeteer.coverage.stopjscoverage",id:"version-15.3.1/api/puppeteer.coverage.stopjscoverage",title:"Coverage.stopJSCoverage() method",description:"Signature:",source:"@site/versioned_docs/version-15.3.1/api/puppeteer.coverage.stopjscoverage.md",sourceDirName:"api",slug:"/api/puppeteer.coverage.stopjscoverage",permalink:"/15.3.1/api/puppeteer.coverage.stopjscoverage",draft:!1,tags:[],version:"15.3.1",frontMatter:{sidebar_label:"Coverage.stopJSCoverage"},sidebar:"sidebar",previous:{title:"Coverage.stopCSSCoverage",permalink:"/15.3.1/api/puppeteer.coverage.stopcsscoverage"},next:{title:"CoverageEntry",permalink:"/15.3.1/api/puppeteer.coverageentry"}},c={},i=[{value:"Remarks",id:"remarks",level:2}],l={toc:i};function u(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,o.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"coveragestopjscoverage-method"},"Coverage.stopJSCoverage() method"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Signature:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"class Coverage {\n  stopJSCoverage(): Promise<JSCoverageEntry[]>;\n}\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")),(0,n.kt)("p",null,"Promise","<",(0,n.kt)("a",{parentName:"p",href:"/15.3.1/api/puppeteer.jscoverageentry"},"JSCoverageEntry"),"[","]",">"),(0,n.kt)("p",null,"Promise that resolves to the array of coverage reports for all scripts."),(0,n.kt)("h2",{id:"remarks"},"Remarks"),(0,n.kt)("p",null,"JavaScript Coverage doesn't include anonymous scripts by default. However, scripts with sourceURLs are reported."))}u.isMDXComponent=!0}}]);