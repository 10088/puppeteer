"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[73727],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=s(r),d=a,f=u["".concat(p,".").concat(d)]||u[d]||c[d]||o;return r?n.createElement(f,i(i({ref:t},m),{},{components:r})):n.createElement(f,i({ref:t},m))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},38497:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={sidebar_label:"Page.waitForSelector"},i="Page.waitForSelector() method",l={unversionedId:"api/puppeteer.page.waitforselector",id:"version-15.3.0/api/puppeteer.page.waitforselector",title:"Page.waitForSelector() method",description:"Wait for the selector to appear in page. If at the moment of calling the method the selector already exists, the method will return immediately. If the selector doesn't appear after the timeout milliseconds of waiting, the function will throw.",source:"@site/versioned_docs/version-15.3.0/api/puppeteer.page.waitforselector.md",sourceDirName:"api",slug:"/api/puppeteer.page.waitforselector",permalink:"/15.3.0/api/puppeteer.page.waitforselector",draft:!1,tags:[],version:"15.3.0",frontMatter:{sidebar_label:"Page.waitForSelector"},sidebar:"sidebar",previous:{title:"Page.waitForResponse",permalink:"/15.3.0/api/puppeteer.page.waitforresponse"},next:{title:"Page.waitForSelector_1",permalink:"/15.3.0/api/puppeteer.page.waitforselector_1"}},p={},s=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}],m={toc:s};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"pagewaitforselector-method"},"Page.waitForSelector() method"),(0,a.kt)("p",null,"Wait for the ",(0,a.kt)("inlineCode",{parentName:"p"},"selector")," to appear in page. If at the moment of calling the method the ",(0,a.kt)("inlineCode",{parentName:"p"},"selector")," already exists, the method will return immediately. If the ",(0,a.kt)("inlineCode",{parentName:"p"},"selector")," doesn't appear after the ",(0,a.kt)("inlineCode",{parentName:"p"},"timeout")," milliseconds of waiting, the function will throw."),(0,a.kt)("p",null,"This method works across navigations:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const puppeteer = require('puppeteer');\n(async () => {\n  const browser = await puppeteer.launch();\n  const page = await browser.newPage();\n  let currentURL;\n  page\n    .waitForSelector('img')\n    .then(() => console.log('First URL with image: ' + currentURL));\n  for (currentURL of [\n    'https://example.com',\n    'https://google.com',\n    'https://bbc.com',\n  ]) {\n    await page.goto(currentURL);\n  }\n  await browser.close();\n})();\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class Page {\n  waitForSelector<Selector extends keyof HTMLElementTagNameMap>(\n    selector: Selector,\n    options?: Exclude<WaitForSelectorOptions, 'root'>\n  ): Promise<ElementHandle<HTMLElementTagNameMap[Selector]> | null>;\n}\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"selector"),(0,a.kt)("td",{parentName:"tr",align:null},"Selector"),(0,a.kt)("td",{parentName:"tr",align:null},"A ",(0,a.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors"},"selector")," of an element to wait for")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"options"),(0,a.kt)("td",{parentName:"tr",align:null},"Exclude","<",(0,a.kt)("a",{parentName:"td",href:"/15.3.0/api/puppeteer.waitforselectoroptions"},"WaitForSelectorOptions"),", 'root'",">"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("i",null,"(Optional)")," Optional waiting parameters")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")),(0,a.kt)("p",null,"Promise","<",(0,a.kt)("a",{parentName:"p",href:"/15.3.0/api/puppeteer.elementhandle"},"ElementHandle"),"<","HTMLElementTagNameMap","[","Selector","]",">"," ","|"," null",">"),(0,a.kt)("p",null,"Promise which resolves when element specified by selector string is added to DOM. Resolves to ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," if waiting for hidden: ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," and selector is not found in DOM."),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"The optional Parameter in Arguments ",(0,a.kt)("inlineCode",{parentName:"p"},"options")," are :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"Visible"),": A boolean wait for element to be present in DOM and to be visible, i.e. to not have ",(0,a.kt)("inlineCode",{parentName:"p"},"display: none")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"visibility: hidden")," CSS properties. Defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"hidden"),": ait for element to not be found in the DOM or to be hidden, i.e. have ",(0,a.kt)("inlineCode",{parentName:"p"},"display: none")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"visibility: hidden")," CSS properties. Defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"timeout"),": maximum time to wait for in milliseconds. Defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"30000")," (30 seconds). Pass ",(0,a.kt)("inlineCode",{parentName:"p"},"0")," to disable timeout. The default value can be changed by using the ",(0,a.kt)("a",{parentName:"p",href:"/15.3.0/api/puppeteer.page.setdefaulttimeout"},"Page.setDefaultTimeout()")," method."))))}c.isMDXComponent=!0}}]);