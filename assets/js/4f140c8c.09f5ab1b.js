"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6584],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),s=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=s(a),c=r,g=m["".concat(i,".").concat(c)]||m[c]||d[c]||o;return a?n.createElement(g,l(l({ref:t},u),{},{components:a})):n.createElement(g,l({ref:t},u))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},57819:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>u});a(67294);var n=a(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const l={sidebar_label:"Mouse"},p="Mouse class",i={unversionedId:"api/puppeteer.mouse",id:"version-17.1.3/api/puppeteer.mouse",title:"Mouse class",description:"The Mouse class operates in main-frame CSS pixels relative to the top-left corner of the viewport.",source:"@site/versioned_docs/version-17.1.3/api/puppeteer.mouse.md",sourceDirName:"api",slug:"/api/puppeteer.mouse",permalink:"/api/puppeteer.mouse",draft:!1,tags:[],version:"17.1.3",frontMatter:{sidebar_label:"Mouse"},sidebar:"sidebar",previous:{title:"Keyboard.up",permalink:"/api/puppeteer.keyboard.up"},next:{title:"Mouse.click",permalink:"/api/puppeteer.mouse.click"}},s={},u=[{value:"Remarks",id:"remarks",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Methods",id:"methods",level:2}],d={toc:u};function m(e){var{components:t}=e,a=o(e,["components"]);return(0,n.kt)("wrapper",r({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",r({},{id:"mouse-class"}),"Mouse class"),(0,n.kt)("p",null,"The Mouse class operates in main-frame CSS pixels relative to the top-left corner of the viewport."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Signature:")),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-typescript"}),"export declare class Mouse\n")),(0,n.kt)("h2",r({},{id:"remarks"}),"Remarks"),(0,n.kt)("p",null,"Every ",(0,n.kt)("inlineCode",{parentName:"p"},"page")," object has its own Mouse, accessible with ","[",(0,n.kt)("inlineCode",{parentName:"p"},"page.mouse"),"]","(","#","pagemouse)."),(0,n.kt)("p",null,"The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",(0,n.kt)("inlineCode",{parentName:"p"},"Mouse")," class."),(0,n.kt)("h2",r({},{id:"example-1"}),"Example 1"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-ts"}),"// Using \u2018page.mouse\u2019 to trace a 100x100 square.\nawait page.mouse.move(0, 0);\nawait page.mouse.down();\nawait page.mouse.move(0, 100);\nawait page.mouse.move(100, 100);\nawait page.mouse.move(100, 0);\nawait page.mouse.move(0, 0);\nawait page.mouse.up();\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note"),": The mouse events trigger synthetic ",(0,n.kt)("inlineCode",{parentName:"p"},"MouseEvent"),"s. This means that it does not fully replicate the functionality of what a normal user would be able to do with their mouse."),(0,n.kt)("p",null,"For example, dragging and selecting text is not possible using ",(0,n.kt)("inlineCode",{parentName:"p"},"page.mouse"),". Instead, you can use the ",(0,n.kt)("a",r({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/DocumentOrShadowRoot/getSelection"}),"`","DocumentOrShadowRoot.getSelection()","`")," functionality implemented in the platform."),(0,n.kt)("h2",r({},{id:"example-2"}),"Example 2"),(0,n.kt)("p",null,"For example, if you want to select all content between nodes:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-ts"}),"await page.evaluate(\n  (from, to) => {\n    const selection = from.getRootNode().getSelection();\n    const range = document.createRange();\n    range.setStartBefore(from);\n    range.setEndAfter(to);\n    selection.removeAllRanges();\n    selection.addRange(range);\n  },\n  fromJSHandle,\n  toJSHandle\n);\n")),(0,n.kt)("p",null,"If you then would want to copy-paste your selection, you can use the clipboard api:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-ts"}),"// The clipboard api does not allow you to copy, unless the tab is focused.\nawait page.bringToFront();\nawait page.evaluate(() => {\n  // Copy the selected content to the clipboard\n  document.execCommand('copy');\n  // Obtain the content of the clipboard as a string\n  return navigator.clipboard.readText();\n});\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note"),": If you want access to the clipboard API, you have to give it permission to do so:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-ts"}),"await browser\n  .defaultBrowserContext()\n  .overridePermissions('<your origin>', ['clipboard-read', 'clipboard-write']);\n")),(0,n.kt)("h2",r({},{id:"methods"}),"Methods"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Method"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Modifiers"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"/api/puppeteer.mouse.click"}),"click(x, y, options)")),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Shortcut for ",(0,n.kt)("code",null,"mouse.move"),", ",(0,n.kt)("code",null,"mouse.down")," and ",(0,n.kt)("code",null,"mouse.up"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"/api/puppeteer.mouse.down"}),"down(options)")),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Dispatches a ",(0,n.kt)("code",null,"mousedown")," event.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"/api/puppeteer.mouse.drag"}),"drag(start, target)")),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Dispatches a ",(0,n.kt)("code",null,"drag")," event.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"/api/puppeteer.mouse.draganddrop"}),"dragAndDrop(start, target, options)")),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Performs a drag, dragenter, dragover, and drop in sequence.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"/api/puppeteer.mouse.dragenter"}),"dragEnter(target, data)")),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Dispatches a ",(0,n.kt)("code",null,"dragenter")," event.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"/api/puppeteer.mouse.dragover"}),"dragOver(target, data)")),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Dispatches a ",(0,n.kt)("code",null,"dragover")," event.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"/api/puppeteer.mouse.drop"}),"drop(target, data)")),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Performs a dragenter, dragover, and drop in sequence.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"/api/puppeteer.mouse.move"}),"move(x, y, options)")),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Dispatches a ",(0,n.kt)("code",null,"mousemove")," event.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"/api/puppeteer.mouse.up"}),"up(options)")),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Dispatches a ",(0,n.kt)("code",null,"mouseup")," event.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"/api/puppeteer.mouse.wheel"}),"wheel(options)")),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Dispatches a ",(0,n.kt)("code",null,"mousewheel")," event.")))))}m.isMDXComponent=!0}}]);