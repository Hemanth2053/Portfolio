!function e(t,n){if("object"==typeof exports&&"object"==typeof module)module.exports=n();else if("function"==typeof define&&define.amd)define([],n);else{var i=n();for(var o in i)("object"==typeof exports?exports:t)[o]=i[o]}}(this,(function(){return function(){"use strict";var e={r:function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};function n(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function i(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),Object.defineProperty(e,"prototype",{writable:!1}),e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(){if("string"==typeof self.origin&&~self.origin.indexOf("://"))return self.origin;var e=document.location,t=e.protocol,n=e.host,i;return"".concat(t,"//").concat(n)}e.r(t);var s,l,u,d,f,p,g,m,y,h,v,w,b,S,E,k,C,O={i18n:{ready:!0,currency:{active:!0,changed:!0,showOverlay:!0},language:{active:!0,changed:!0,showOverlay:!0},nationality:{isVATApplicable:!0,isInEU:!0}},page:{linkClick:!0,loadImages:!0,resize:!0,componentInitialized:!0,initMobile:!0},taxonomy:{fetchLogoWall:!0,getTemplate:!0,getCustomerExample:!0},components:{domainsApp:{inputFilled:!0,inputEmptied:!0,placeholderDelete:!0},emailCapture:{submit:!0,onSuccess:!0,onError:!0},featuredCustomersSlideshow:{triggerFlipIn:!0,triggerFlipOut:!0},footer:{setVisible:!0,setHidden:!0},form:{submit:!0,onSuccess:!0,onError:!0},heroCampaignVideo:{openVideoOverlay:!0},sideBySideFullBleedSlideshow:{startAutoplay:!0,stopAutoplay:!0},uiShowcase:{setActive:!0,setActiveIndex:!0},q3mm2021Hero:{openVideoOverlay:!0},q3mm2021Menu:{hoverLinkIndex:!0,updatePagePosition:!0},q3mm2021MenuSticky:{setActiveContentSection:!0},q3mm2021Video:{pageLengthChanged:!0}},siteNavigation:{setDarkBackground:!0,setLightBackground:!0,disableSticky:!0,enableSticky:!0,setVisible:!0,setHidden:!0}},T="sqs",A={},j,I;function N(e){return Object.freeze(e),Object.getOwnPropertyNames(e).forEach((function(t){!e.hasOwnProperty(t)||null===e[t]||"object"!==a(e[t])&&"function"!=typeof e[t]||Object.isFrozen(e[t])||N(e[t])})),e}function q(e){return e.origin===c()&&("object"===a(e.data)&&("sqs"===e.data.namespace&&"string"==typeof e.data.key))}function B(e,t,n){var i;A[e]&&A[e].filter((function(e){return!n||e.signature===n})).forEach((function(e){e.callback.apply(null,[t])}))}function P(e,t,n){try{var i={namespace:"sqs",key:e,payload:t,signature:n};window.postMessage(i,c())}catch(e){console.error(e)}}function H(e,t,n){void 0===A[e]&&(A[e]=[]),A[e].push({callback:t,signature:n})}function _(e,t){A[e]=A[e].filter((function(e){return e.callback!==t}))}function x(e,t){return new Promise((function(n){var i;H(e,(function t(i){_(e,t),n(i)}),t)}))}function z(e,t,n){H("".concat(e,"-request"),(function(){t().then((function(t){P("".concat(e,"-response"),t,n)}))}),n)}function W(e,t){var n=x("".concat(e,"-response"),t).then((function(e){return e}));return P("".concat(e,"-request"),t),n}function L(e,t){var n=[],i=function e(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";n.push({object:t,path:i})};for(i(e);n.length>0;)for(var o=n.pop(),r=o.object,c=o.path,s,l=0,u=Object.keys(r);l<u.length;l++){var d=u[l],f=r[d],p=""===c?d:"".concat(c,".").concat(d);"object"===a(f)?i(f,p):r[d]=t(f,p)}return e}function M(e){var t;return N(L(e,(function(e,t){return t})))}function R(e,t,n){try{if(void 0===n){var i,o=Array.from(document.querySelectorAll("[data-component-id]")).filter((function(e){var n=""===e.dataset.componentId,i=e.dataset.componentName===t;return n&&i}));if(o.length<=0)throw Error("No uninitialized component containers found.");n=o.pop()}var r=window.componentId();n.dataset.componentId=r;var a=new e(n,r);return P(O.page.componentInitialized,{componentName:t,id:r}),a}catch(e){console.error("Unable to initialize component.",e)}}function V(e){return e.dataset.componentId}function $(e){return e.dataset.componentName}function F(e){var t=e.template,n=e.content,i=e.parentElement;return new Promise((function(e,o){if(i||o("Must specify parentElement of component."),!j){var r=document.getElementById("cdn-lark");j=r?r.dataset.src.split("assets")[0]:"/"}if(!I){var a=window.__templateVersion;I=a?"?".concat(a):"?"}var c=document.createElement("div"),s,l;(c.innerHTML=t(n),"/"!==j)&&Array.from(c.getElementsByTagName("link")).forEach((function(e){var t,n=e.getAttribute("href").split("styles")[1],i="".concat(j,"assets/styles").concat(n);e.setAttribute("href",i)}));Array.from(c.getElementsByTagName("squarespace:script")).forEach((function(e){var t=e.getAttribute("src"),n="".concat(j,"scripts/").concat(t).concat(I),i=document.createElement("script");i.setAttribute("src",n),e.parentElement.appendChild(i),e.parentElement.removeChild(e)}));var u=Array.from(c.children),d=u.find((function(e){return void 0!==e.dataset.componentId})),f=u.find((function(e){return"LINK"===e.tagName})),p=u.find((function(e){return"SCRIPT"===e.tagName}));f.addEventListener("load",(function(){i.appendChild(d),i.appendChild(p),p.addEventListener("load",(function(){e(d)}))})),i.appendChild(f)}))}M(O),"undefined"!=typeof window&&window.addEventListener("message",(function(e){if(q(e)){var t=e.data,n,i,o;B(t.key,t.payload,t.signature)}}));var D=function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(!n.querySelector)throw Error("You can not query the DOM from this element.",n);return null===i?n.querySelectorAll(t):"!"===i?n.querySelector(t):"#"===i?document.getElementById(t):"."===i?n.getElementsByClassName(t):""===i?n.getElementsByTagName(t):void 0},Y=function e(t){var n={};for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)){var o=void 0,r=void 0,a=t[i],c=a[0],s=null;if("string"==typeof a){var l=(a=a.trim()).split(/[\.#:\[~\*\$\s]/),u=a.substring(a.length-1);if("!"===u&&(l.pop(),a=a.substring(0,a.length-1).trim()),"$"===c){var d=l[1];if(!(r=n[d])||!r.nodeType||1!==r.nodeType)throw Error("This parent ref is not a valid DOM Node:",d);var f=new RegExp("\\$".concat(d," (.*)"));c=(a=a.match(f)[1])[0],l.splice(0,2)}2===l.length?(s=c,a=a.substring(1)):1===l.length?s="":"!"===u&&(s=u),o=D(a,r,s),"!"===u&&o&&void 0!==o.length&&(o=o[0])}else o=a;o&&void 0!==o.length&&(o=Array.from(o)),n[i]=o}return n},U;return R(i((function e(t){var n=this;o(this,e),r(this,"setSectionTop",(function(){var e=document.querySelector("#www-navigation-container");n.siteNavHeight=0,e&&(n.siteNavHeight=e.clientHeight);var t=n.refs.imagesWrapper.getBoundingClientRect().top,i,o,r=n.refs.innerStickyWrapper.getBoundingClientRect().top-parseInt(window.getComputedStyle(n.refs.container).paddingTop);n.refs.sections.forEach((function(e){e.style.top=t-r+n.siteNavHeight+"px"}))})),r(this,"setSwitchTriggers",(function(){var e=[];n.refs.sections.forEach((function(t){var i,o=t.getBoundingClientRect().top,r=parseInt(window.getComputedStyle(n.refs.sections[0]).getPropertyValue("top"))+n.refs.imagesWrapper.clientHeight/2;e.push(o+window.pageYOffset-r)})),n.sectionHeight=n.refs.sections[0].getBoundingClientRect().height,n.switchTriggers=e})),r(this,"setActiveContent",(function(){n.switchTriggers&&(window.pageYOffset<n.switchTriggers[1]?n.refs.container.dataset.activeContent=0:window.pageYOffset<n.switchTriggers[2]?n.refs.container.dataset.activeContent=1:n.refs.container.dataset.activeContent=2)})),r(this,"handleScroll",(function(){window.innerWidth>window.innerHeight&&window.innerWidth>=1024&&n.setActiveContent(!0)})),r(this,"handleResize",(function(){window.innerWidth>window.innerHeight&&window.innerWidth>=1024&&(n.setSectionTop(),n.setSwitchTriggers())})),this.refs=Y({container:t,sectionsWrapper:"$container .side-by-side-sticky__sections-wrapper !",sections:"$container .side-by-side-sticky__section",innerStickyWrapper:"$container .side-by-side-sticky__inner-sticky-wrapper !",imagesWrapper:"$container .side-by-side-sticky__dynamic-content-wrapper !"}),H(O.page.resize,this.handleResize),window.addEventListener("scroll",this.handleScroll,{passive:!0}),this.handleResize(),this.handleScroll()})),"side-by-side-sticky"),t}()}));