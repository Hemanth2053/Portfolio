"use strict";!function(){const t={conversionType:"conversion_type",price:"aepp",currency:"aepc",name:"aepn"},n="js-web",e="js-gtm",o="internal",a="bad_integration",i="TEADS_PIXEL_LOADED",c="TEADS_PIXEL_DEBUG",r="TEADS_PIXEL_EVENT",d="TEADS_SDK_PARAMETERS";function s(t){var n;let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};var o;null!==(n=window.opener)&&void 0!==n&&n.postMessage&&window.opener.postMessage({type:t,id:null===(o=window)||void 0===o?void 0:o.name,...e},"*")}function l(){window.opener&&window.addEventListener&&(s(i),window.addEventListener("message",t=>{var n,e,o,a;(null==t||null===(n=t.data)||void 0===n?void 0:n.type)===c&&(a=!0,window.teads_debug_mode=a),(null==t||null===(e=t.data)||void 0===e?void 0:e.type)===d&&null!=t&&null!==(o=t.data)&&void 0!==o&&o.teadsClickId&&(U(t.data.teadsClickId),k())}))}function u(t){return"[object Function]"===toString.call(t)}function p(t,n){let e=0;function o(e,o){o?!1!==e.gdprApplies&&"tcloaded"!==e.eventStatus&&"useractioncomplete"!==e.eventStatus||t(e):n("CMP unable to register callback function. Please check CMP setup.")}function a(){return!(!window.$sf||!window.$sf.ext)}function i(t,n){window.$sf.ext.register(1,1,(function(e,o){if("cmpReturn"===e){const e="getConsentData"===t?o.vendorConsentData:o.vendorConsents;n(e)}})),window.$sf.ext.cmp(t)}function c(t){const n="".concat(2===e?"__tcfapi":"__cmp","Return"),o="string"==typeof t.data&&"".concat(t.data).includes(n)?JSON.parse(t.data):t.data;if(o[n]&&o[n].callId){const t=o[n];void 0!==s[t.callId]&&s[t.callId](t.returnValue,t.success)}}function r(t,n,o){const a=2===e?"__tcfapi":"__cmp",i="".concat(a,"Call");2===e?(window[a]=(t,e,o,a)=>{const c="".concat(Math.random()),r={[i]:{command:t,version:e,parameter:a,callId:c}};s[c]=o,n.postMessage(r,"*")},window.addEventListener("message",c,!1),window[a](t,e,o)):(window[a]=(t,e,o)=>{const a="".concat(Math.random()),c={[i]:{command:t,parameter:e,callId:a}};s[a]=o,n.postMessage(c,"*")},window.addEventListener("message",c,!1),window[a](t,void 0,o))}const d=function(){const n={};function e(){n.getConsentData&&n.getVendorConsents&&t(n)}return{consentDataCallback(t){n.getConsentData=t,e()},vendorConsentsCallback(t){n.getVendorConsents=t,e()}}}(),s={},{cmpFrame:l,cmpFunction:p}=function(){let t,n,o=window;for(;!t;){try{if("function"==typeof o.__tcfapi||"function"==typeof o.__cmp){"function"==typeof o.__tcfapi?(e=2,n=o.__tcfapi):(e=1,n=o.__cmp),t=o;break}}catch(t){}try{if(o.frames.__tcfapiLocator){e=2,t=o;break}}catch(t){}try{if(o.frames.__cmpLocator){e=1,t=o;break}}catch(t){}if(o===window.top)break;o=o.parent}return{cmpFrame:t,cmpFunction:n}}();if(!l)return!1;if(new Promise((t,n)=>{u(p)?p("ping",null,()=>t()):1===e&&a()&&"function"==typeof window.$sf.ext.cmp?i("ping",()=>t()):r("ping",l,()=>t()),setTimeout(()=>n(),100)}).catch(()=>n("Unable to ping the CMP")),u(p)){if(1===e)return p("getConsentData",null,d.consentDataCallback),p("getVendorConsents",null,d.vendorConsentsCallback),!0;if(2===e)return p("addEventListener",e,o),!0}else{if(1===e&&a()&&"function"==typeof window.$sf.ext.cmp)return i("getConsentData",d.consentDataCallback),i("getVendorConsents",d.vendorConsentsCallback),!0;if(1===e)return r("getConsentData",l,d.consentDataCallback),r("getVendorConsents",l,d.vendorConsentsCallback),!0;if(2===e)return r("addEventListener",l,o),!0}return!1}function w(t,n){function e(t,n,e){window.__uspapi=(t,e,o)=>{const i="".concat(Math.random()),c={__uspapiCall:{command:t,version:e,callId:i}};a[i]=o,n.postMessage(c,"*")},window.addEventListener("message",(function(t){const n=t&&t.data&&t.data.__uspapiReturn;n&&n.callId&&void 0!==a[n.callId]&&(a[n.callId](n.returnValue,n.success),delete a[n.callId])}),!1),window.__uspapi(t,1,e)}const o=function(){const e={};return{consentDataCallback:(o,a)=>{a&&o.uspString&&(e.usPrivacy=o.uspString),e.usPrivacy?t(e):n("Unable to get USP consent string.")}}}(),a={},{uspapiFrame:i,uspapiFunction:c}=function(){let t,n,e=window;for(;!t;){try{if("function"==typeof e.__uspapi){n=e.__uspapi,t=e;break}}catch(t){}try{if(e.frames.__uspapiLocator){t=e;break}}catch(t){}if(e===window.top)break;e=e.parent}return{uspapiFrame:t,uspapiFunction:n}}();if(!i)return!1;return new Promise((t,n)=>{u(c)?c("getUSPData",null,()=>t()):e("getUSPData",i,()=>t()),setTimeout(()=>n(),100)}).catch(()=>n("Unable to ping the USP")),u(c)?c("getUSPData",1,o.consentDataCallback):e("getUSPData",i,o.consentDataCallback),!0}function v(t){let n="";const e=function(t){let n=t,e=!1;try{for(let t=0;n.parent.document!==n.document||t<50;t+=1){if(!n.parent.document){e=!0;break}n=n.parent}}catch(t){e=!0}return{topFrame:n,err:e}}(t),{topFrame:o}=e;if(e.err)try{n=o.top.location.href}catch(t){n=o.location.href}else n=o.location.href;return n}function f(t,n,e){try{const o={errorMessage:t,topUrl:v(window),userAgent:void 0!==window.navigator&&void 0!==window.navigator.userAgent?window.navigator.userAgent:"",exception:n||"",version:"5.5.4_dee72da",type:e||a};t=JSON.stringify(o)}catch(t){}document.createElement("img").src="".concat("https://l.teads.tv/performance/http-source","?").concat(encodeURIComponent(t))}function m(t){const n=document.createElement("img");n.width=0,n.height=0,n.alt="",n.style.position="absolute",n.src=t,(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]||document.getElementsByTagName("script")[0].parentNode).insertBefore(n,null),window.teads_debug_mode&&s(r,{trackingUrl:t,ts:Date.now()})}function _(t){fetch?fetch(t).catch(()=>{m(t)}):m(t)}function g(t){try{const n=new RegExp(/(?:\?|&|%3F|%26)auctid(?:=|%3D)([0-9a-zA-Z-_]*)/).exec(t);if(n&&n.length>=2)return n[1]}catch(t){f("Error when extracting Auction ID from url",null==t?void 0:t.message,o)}}async function y(t,a,i){var c,r;const d=M(),s=X(),l=function(){if(!window.teads_env||![n,e].includes(window.teads_env))return n;return window.teads_env}(),u=function(t){const n=[];return Object.keys(t).forEach(e=>{n.push("".concat(e,"=").concat(encodeURIComponent(t[e])))}),n.join("&")}(a),p=v(window),w=function(t){let n=A();if(!n){let e=t;t||(e=v(window)),n=g(e),n&&U(n)}return n}(p),m=D(),_=T(),y=window.teads_gdpr_advertiser,h=window.teads_ccpa_advertiser,b=null===(C=document)||void 0===C?void 0:C.title;var C;const k=await async function(){let t=null;try{if(E()){const n=await document.browsingTopics();n&&(t=btoa(JSON.stringify(n)))}}catch(t){f("Error when retrieving topics from Topics API",null==t?void 0:t.message,o)}return t}(),I=function(t){const n=["account","password","pass","secret","secretkey","username","user","login","ordernumber","orderid","email","mail","user.email","user.password","user.name","user.mail","user.lastname","user.firstname","user.phone","user.phonenumber","lastname","firstname","name","address","phonenumber","phone","client_secret","guid"];if(""!==t){const e=t.split("?").length>1?t.split("?")[1]:void 0;if(void 0!==e){let o="".concat(t.split("?")[0],"?");const a=e.split("&");for(let t=0;t<a.length;t+=1){const e=a[t].split(/=(.+)/);o="".concat(o+(0===t?"":"&")+e[0],"=").concat(n.indexOf(e[0])>=0?"XXXXXXXX":e[1])}t=o}}return t}(p);let P="".concat(i,"?action=").concat(t,"&env=").concat(encodeURIComponent(l),"&tag_version=").concat(encodeURIComponent("5.5.4_dee72da"));return u.length>0&&(P="".concat(P,"&").concat(u)),void 0!==s?P="".concat(P,"&buyer_pixel_id=").concat(encodeURIComponent(s)):void 0!==d&&(P="".concat(P,"&advertiser_id=").concat(encodeURIComponent(d))),P="".concat(P,"&referer=").concat(encodeURIComponent(I)),void 0!==w&&(P="".concat(P,"&auctid=").concat(w)),b&&(P="".concat(P,"&cohort_id=").concat(encodeURIComponent(b))),k&&(P="".concat(P,"&browser_topics=").concat(k)),void 0!==(null==m||null===(c=m.data)||void 0===c?void 0:c.tcString)&&(P="".concat(P,"&gdpr_consent=").concat(m.data.tcString)),null!=y&&y.apply?P="".concat(P,"&gdpr_status=12"):void 0!==(null==y?void 0:y.apply)&&(P="".concat(P,"&gdpr_status=0")),y&&(void 0!==y.apply&&(P="".concat(P,"&gdpr_apply=").concat(y.apply)),void 0!==y.teadsConsent&&(P="".concat(P,"&gtc=").concat(y.teadsConsent)),void 0!==y.isServiceSpecific&&(P="".concat(P,"&gdpr_is_service_specific=").concat(y.isServiceSpecific)),void 0!==y.cmpId&&(P="".concat(P,"&gdpr_cmp_id=").concat(y.cmpId)),void 0!==y.apiVersion&&(P="".concat(P,"&gdpr_api_version=").concat(y.apiVersion))),void 0!==(null==_||null===(r=_.data)||void 0===r?void 0:r.usPrivacy)&&(P="".concat(P,"&ccpa_consent=").concat(_.data.usPrivacy)),h&&(void 0!==h.apply&&(P="".concat(P,"&ca=").concat(h.apply)),void 0!==h.teadsConsent&&(P="".concat(P,"&ctc=").concat(h.teadsConsent))),P}async function h(){if(void 0!==window.teads_e){const t=[];for(;window.teads_e.length;)t.push(j(window.teads_e.shift()));await Promise.all(t)}else f("The event queue is not defined.")}function b(t){try{const n="".concat(t,"="),e=document.cookie.split(";");for(let t=0;t<e.length;t+=1)if(e[t]=e[t].trim(),0===e[t].indexOf(n))return e[t].substring(n.length,e[t].length)}catch(n){f('Error while reading first-party cookie with key "'.concat(t,'"'),null==n?void 0:n.message,o)}return""}function C(t,n){let e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,c="".concat(t,"=").concat(n);a&&(c+=";path=".concat(a)),"number"==typeof o&&(c+=";max-age=".concat(o)),e&&(c+=";domain=.".concat(e)),i&&(c+=";samesite=".concat(i)),document.cookie=c}function k(){L()&&A()&&function(t,n,e){try{C(t,n,e,2592e3,"/","strict")}catch(n){f('Error while setting cookie on domain with key "'.concat(t,'"'),null==n?void 0:n.message,o)}}("tfpai",A(),window.advertiser_domain)}async function I(){var t;const n=M(),e=X(),a=v(window);let i="referer=".concat(encodeURIComponent(a));void 0!==e?i+="&buyer_pixel_id=".concat(encodeURIComponent(e)):void 0!==n&&(i+="&advertiser_id=".concat(encodeURIComponent(n)));const c=D();var r,d,s,l,u,p;c&&(void 0!==(null==c||null===(r=c.data)||void 0===r?void 0:r.gdprApplies)?i+="&gdpr_applies=".concat(encodeURIComponent(c.data.gdprApplies)):void 0!==(null==c||null===(d=c.data)||void 0===d||null===(s=d.getConsentData)||void 0===s?void 0:s.gdprApplies)&&(i+="&gdpr_applies=".concat(encodeURIComponent(c.data.getConsentData.gdprApplies))),null!=c&&null!==(l=c.data)&&void 0!==l&&l.tcString?i+="&gdpr_consent=".concat(encodeURIComponent(c.data.tcString)):null!=c&&null!==(u=c.data)&&void 0!==u&&null!==(p=u.getConsentData)&&void 0!==p&&p.consentData&&(i+="&gdpr_consent=".concat(encodeURIComponent(c.data.getConsentData.consentData))),null!=c&&c.error&&(i+="&gdpr_error=".concat(encodeURIComponent(c.error))));const w=T();null!=w&&null!==(t=w.data)&&void 0!==t&&t.usPrivacy&&(i+="&ccpa_consent=".concat(encodeURIComponent(w.data.usPrivacy))),null!=w&&w.error&&(i+="&ccpa_error=".concat(encodeURIComponent(w.error)));const m=function(){const t=b("optout");if(t)return"1"===t;return}();void 0!==m&&(i+="&web_opt_out=".concat(encodeURIComponent(m)));try{const t=await fetch("".concat("https://cm.teads.tv","/v2/advertiser?").concat(i));if(200===(null==t?void 0:t.status)){var _,y,h,C,k,I;const n=await t.json();return{trackingAllowed:!1!==(null==n?void 0:n.tracking_allowed),firstPartyCookieAllowed:!0===(null==n?void 0:n.first_party_cookie_allowed),auctionId:null==n?void 0:n.auction_id,domain:null==n?void 0:n.domain,ccpa:null!=n&&n.ccpa?{apply:null===(_=n.ccpa)||void 0===_?void 0:_.apply,teadsConsent:null===(y=n.ccpa)||void 0===y?void 0:y.teads_consent}:void 0,gdpr:null!=n&&n.gdpr?{apply:null===(h=n.gdpr)||void 0===h?void 0:h.apply,teadsConsent:null===(C=n.gdpr)||void 0===C?void 0:C.teads_consent,apiVersion:null===(k=n.gdpr)||void 0===k?void 0:k.api_version,cmpId:null===(I=n.gdpr)||void 0===I?void 0:I.cmp_id,isServiceSpecific:null==n?void 0:n.gdpr.is_service_specific}:void 0}}}catch(t){f("Error while trigger API to know advertiser information",null==t?void 0:t.message,o)}const E=g(a);return E?{trackingAllowed:!0,firstPartyCookieAllowed:!1,auctionId:E}:{trackingAllowed:!0,firstPartyCookieAllowed:!1}}function E(){var t,n,e,o,a;return!(!("browsingTopics"in document)||null===(t=document)||void 0===t||null===(n=t.featurePolicy)||void 0===n||null===(e=n.allowedFeatures)||void 0===e||null===(o=e.call(n))||void 0===o||null===(a=o.includes)||void 0===a||!a.call(o,"browsing-topics"))}async function P(t,n){try{if(null!==(e=document)&&void 0!==e&&null!==(a=e.featurePolicy)&&void 0!==a&&null!==(i=a.allowedFeatures)&&void 0!==i&&null!==(c=i.call(a))&&void 0!==c&&null!==(r=c.includes)&&void 0!==r&&r.call(c,"attribution-reporting")){m(await y(t,n,"".concat("https://cm.teads.tv","/v3/conversion")))}}catch(t){f("Error when triggering attribution reporting conversion",null==t?void 0:t.message,o)}var e,a,i,c,r}function U(t){window.teads_auction_id=t}function A(){return window.teads_auction_id}function S(t){window.teads_iab_consent_data=t}function D(){return window.teads_iab_consent_data}function R(t){window.teads_usp_consent_data=t}function T(){return window.teads_usp_consent_data}function x(){return!0===window.teads_tracking_allowed}function L(){return!0!==window.teads_disable_first_party_cookie&&window.first_party_cookie_allowed}async function O(){try{const{auctionId:i,gdpr:c,ccpa:r,firstPartyCookieAllowed:d,domain:s,trackingAllowed:l}=await I();if(a=d,window.first_party_cookie_allowed=a,l&&(e=l,window.teads_tracking_allowed=e),c&&(n=c,window.teads_gdpr_advertiser=n),r&&function(t){window.teads_ccpa_advertiser=t}(r),s&&(t=s,window.advertiser_domain=t),i&&U(i),L()){const t=b("tfpai");!A()&&t&&U(t),k()}else!function(t,n){try{C(t,"",n,0,"/","strict")}catch(n){f('Error while deleting cookie on domain with key "'.concat(t,'"'),null==n?void 0:n.message,o)}}("tfpai",s)}catch(t){f("Error while initializing advertiser",null==t?void 0:t.message,o)}var t,n,e,a}async function F(){const t=M(),n=X();"number"!=typeof t&&"number"!=typeof n||(await O(),await async function(){if(!x())return;!function(){if(E()){const t=document.createElement("iframe");t.referrerPolicy="no-referrer-when-downgrade",t.width="0",t.height="0",t.src="https://p.teads.tv/topics.html",(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]||document.getElementsByTagName("script")[0].parentNode).insertBefore(t,null)}}();m(await y("pageView",{},"https://t.teads.tv/track")),await P("pageView",{});let t=!1;const n=await y("timeSpent",{},"https://t.teads.tv/track");document.addEventListener("visibilitychange",()=>{"hidden"!==document.visibilityState||t||(t=!0,function(t){const n=navigator.sendBeacon&&navigator.sendBeacon.bind(navigator);try{n&&n(t)||_(t)}catch(n){_(t)}}(n))})}())}async function V(){N();try{window.teads_adv_id||Object.defineProperty(window,"teads_adv_id",{set(t){this._teads_adv_id=t,F()},get(){return this._teads_adv_id},configurable:!0}),window.teads_buyer_pixel_id||Object.defineProperty(window,"teads_buyer_pixel_id",{set(t){this._teads_buyer_pixel_id=t,F()},get(){return this._teads_buyer_pixel_id},configurable:!0})}catch(t){f("Error while binding advertiser and pixel ids",null==t?void 0:t.message)}await F();const t=window.teads_e||[];window.teads_e=[],window.teads_e.push=function(){for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];return Array.prototype.push.apply(this,n),h(),window.teads_e.length},window.teads_e.push(...t)}function M(){if(void 0!==window.teads&&void 0!==window.teads.advertiserId){if("number"==typeof window.teads.advertiserId)return window.teads.advertiserId;f("The format of AdvertiserId is not valid.")}else{if(void 0===window.teads_cv||void 0===window.teads_cv.advertiserId)return window.teads_adv_id;if("number"==typeof window.teads_cv.advertiserId)return window.teads_cv.advertiserId;f("The format of AdvertiserId is not valid.")}}function X(){return window.teads_buyer_pixel_id}async function j(n){if(!x())return;const e=function(n,e){const o={};return Object.keys(n).forEach(a=>{const i=a,c=n[a];Object.prototype.hasOwnProperty.call(t,i)?o[t[i]]=c+(e||""):f("Invalid parameter specified in event: ".concat(i))}),o}(n);m(await y("conversion",e,"https://t.teads.tv/track")),await P("conversion",e)}function N(){const t=document.createElement("meta");t.httpEquiv="origin-trial",t.content="A3TnmCYheX1/A4Pqu0Qib4yXjIqWQEcdA9GJee7RDIRUV6VG/zUXn3vw6IG7OlNLrMIdHBLFsS3nd5GHYuSnSwUAAAB+eyJvcmlnaW4iOiJodHRwczovL3RlYWRzLnR2OjQ0MyIsImZlYXR1cmUiOiJQcml2YWN5U2FuZGJveEFkc0FQSXMiLCJleHBpcnkiOjE2NjEyOTkxOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9",document.head.appendChild(t)}function B(t,n){return new Promise(e=>{t(t=>{n({data:t}),e()},t=>{n({error:t}),e()})||e()})}async function J(t){try{"undefined"!=typeof window&&await new Promise((n,e)=>{setTimeout(()=>{l(),Promise.all([B(p,S),B(w,R)]).then(()=>V()).then(n).catch(e)},t>0?t:0)})}catch(t){f("Unhandled exception",null==t?void 0:t.message,o)}}J(0),"undefined"!=typeof module&&void 0!==module.exports&&(module.exports.tag=J,module.exports.getTopUrl=v,module.exports.setPrivacySandboxRelevanceAndMeasurementTrialToken=N)}();