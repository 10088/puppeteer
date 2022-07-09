"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[19018],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),m=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=m(e.components);return a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=m(r),d=n,f=c["".concat(i,".").concat(d)]||c[d]||s[d]||l;return r?a.createElement(f,p(p({ref:t},u),{},{components:r})):a.createElement(f,p({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,p=new Array(l);p[0]=c;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,p[1]=o;for(var m=2;m<l;m++)p[m]=r[m];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},22469:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var a=r(87462),n=(r(67294),r(3905));const l={sidebar_label:"Frame.$$eval"},p="Frame.$$eval() method",o={unversionedId:"api/puppeteer.frame.__eval",id:"version-15.3.0/api/puppeteer.frame.__eval",title:"Frame.$$eval() method",description:"Signature:",source:"@site/versioned_docs/version-15.3.0/api/puppeteer.frame.__eval.md",sourceDirName:"api",slug:"/api/puppeteer.frame.__eval",permalink:"/15.3.0/api/puppeteer.frame.__eval",draft:!1,tags:[],version:"15.3.0",frontMatter:{sidebar_label:"Frame.$$eval"},sidebar:"sidebar",previous:{title:"Frame.$$_1",permalink:"/15.3.0/api/puppeteer.frame.___1"},next:{title:"Frame.$$eval_1",permalink:"/15.3.0/api/puppeteer.frame.__eval_1"}},i={},m=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2}],u={toc:m};function s(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"frameeval-method"},"Frame.$$eval() method"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Signature:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"class Frame {\n  $$eval<\n    Selector extends keyof HTMLElementTagNameMap,\n    Params extends unknown[],\n    Func extends EvaluateFunc<\n      [HTMLElementTagNameMap[Selector][], ...Params]\n    > = EvaluateFunc<[HTMLElementTagNameMap[Selector][], ...Params]>\n  >(\n    selector: Selector,\n    pageFunction: Func | string,\n    ...args: Params\n  ): Promise<Awaited<ReturnType<Func>>>;\n}\n")),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"selector"),(0,n.kt)("td",{parentName:"tr",align:null},"Selector"),(0,n.kt)("td",{parentName:"tr",align:null},"the selector to query for")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"pageFunction"),(0,n.kt)("td",{parentName:"tr",align:null},"Func ","|"," string"),(0,n.kt)("td",{parentName:"tr",align:null},"the function to be evaluated in the frame's context")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"args"),(0,n.kt)("td",{parentName:"tr",align:null},"Params"),(0,n.kt)("td",{parentName:"tr",align:null},"additional arguments to pass to ",(0,n.kt)("code",null,"pageFunction"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")),(0,n.kt)("p",null,"Promise","<","Awaited","<","ReturnType","<","Func",">",">",">"),(0,n.kt)("h2",{id:"remarks"},"Remarks"),(0,n.kt)("p",null,"This method runs ",(0,n.kt)("inlineCode",{parentName:"p"},"Array.from(document.querySelectorAll(selector))")," within the frame and passes it as the first argument to ",(0,n.kt)("inlineCode",{parentName:"p"},"pageFunction"),"."),(0,n.kt)("p",null,"If ",(0,n.kt)("inlineCode",{parentName:"p"},"pageFunction")," returns a Promise, then ",(0,n.kt)("inlineCode",{parentName:"p"},"frame.$$eval")," would wait for the promise to resolve and return its value."),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"const divsCounts = await frame.$$eval('div', divs => divs.length);\n")))}s.isMDXComponent=!0}}]);