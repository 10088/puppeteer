"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8793],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),o=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},m=function(e){var t=o(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=o(a),d=n,f=s["".concat(u,".").concat(d)]||s[d]||c[d]||l;return a?r.createElement(f,p(p({ref:t},m),{},{components:a})):r.createElement(f,p({ref:t},m))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,p=new Array(l);p[0]=s;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,p[1]=i;for(var o=2;o<l;o++)p[o]=a[o];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},46058:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var r=a(87462),n=(a(67294),a(3905));const l={sidebar_label:"Frame.evaluateHandle"},p="Frame.evaluateHandle() method",i={unversionedId:"api/puppeteer.frame.evaluatehandle",id:"api/puppeteer.frame.evaluatehandle",title:"Frame.evaluateHandle() method",description:"Signature:",source:"@site/../docs/api/puppeteer.frame.evaluatehandle.md",sourceDirName:"api",slug:"/api/puppeteer.frame.evaluatehandle",permalink:"/next/api/puppeteer.frame.evaluatehandle",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Frame.evaluateHandle"},sidebar:"sidebar",previous:{title:"Frame.evaluate",permalink:"/next/api/puppeteer.frame.evaluate"},next:{title:"Frame.executionContext",permalink:"/next/api/puppeteer.frame.executioncontext"}},u={},o=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}],m={toc:o};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"frameevaluatehandle-method"},"Frame.evaluateHandle() method"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Signature:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"class Frame {\n  evaluateHandle<\n    Params extends unknown[],\n    Func extends EvaluateFunc<Params> = EvaluateFunc<Params>\n  >(\n    pageFunction: Func | string,\n    ...args: Params\n  ): Promise<HandleFor<Awaited<ReturnType<Func>>>>;\n}\n")),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"pageFunction"),(0,n.kt)("td",{parentName:"tr",align:null},"Func ","|"," string"),(0,n.kt)("td",{parentName:"tr",align:null},"a function that is run within the frame")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"args"),(0,n.kt)("td",{parentName:"tr",align:null},"Params"),(0,n.kt)("td",{parentName:"tr",align:null},"arguments to be passed to the pageFunction")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")),(0,n.kt)("p",null,"Promise","<",(0,n.kt)("a",{parentName:"p",href:"/next/api/puppeteer.handlefor"},"HandleFor"),"<","Awaited","<","ReturnType","<","Func",">",">",">",">"),(0,n.kt)("h2",{id:"remarks"},"Remarks"),(0,n.kt)("p",null,"The only difference between ",(0,n.kt)("a",{parentName:"p",href:"/next/api/puppeteer.frame.evaluate"},"Frame.evaluate()")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"frame.evaluateHandle")," is that ",(0,n.kt)("inlineCode",{parentName:"p"},"evaluateHandle")," will return the value wrapped in an in-page object."),(0,n.kt)("p",null,"This method behaves identically to ",(0,n.kt)("a",{parentName:"p",href:"/next/api/puppeteer.page.evaluatehandle"},"Page.evaluateHandle()")," except it's run within the context of the ",(0,n.kt)("inlineCode",{parentName:"p"},"frame"),", rather than the entire page."))}c.isMDXComponent=!0}}]);