"use strict";var precacheConfig=[["index.html","bb22144e1aaa8d98c98c33dd70f5a39e"],["service-worker.js","e087dabd869e7ef9a6bde965a515f094"],["static/css/app.d966ad6be1e37d4976b659d1fdf5d915.css","f60f8fc4b0b725743f089d5ac7787df7"],["static/js/0.6d69c6b4c070bb18956b.js","4b8a0df0cf7d76a6549c71cc6faa850a"],["static/js/1.d59a4d1ba8c6dd53ca14.js","59f963c7912553b043e8b2b87241e688"],["static/js/2.e23e46cbce493d8f3af6.js","8857d594bbd5cb593c81cf0b0b5f2798"],["static/js/3.7fc60f4d79b91381b30a.js","fc08ac4fac2411396dc85ef837f91f13"],["static/js/4.f592fe62a2eaad6d2ac5.js","62f8580ea78054769192104323d4be45"],["static/js/5.ab7d9db9e6cbda04839d.js","5452149ae7ecc0e53bc8b8e35a038115"],["static/js/6.e354480c4f4b67db21a5.js","904d0f2c5dc3d79bacf56e66d49526db"],["static/js/7.710cde65f82a2e13a3d6.js","db4b5d02eda8a1dfb443a26ba7120307"],["static/js/8.b77df42fb67a83847594.js","dce3d15cf9605f2d6e4380114eeb39fa"],["static/js/9.0393a6eb70c9a73e2732.js","989f262b4c5e079bc64adb6d1760168a"],["static/js/app.efdf5edb0528e2a3d189.js","b3a0ad56c9bcfaa1f0ae3049d53767e1"],["static/js/manifest.098534cf16f427383a84.js","04405ed42aefd51fbc9026eca2081082"],["static/js/vendor.4d1fd4b2d6c3ae7caca9.js","09d1f1d5d142f0a6170ce7c8faeaa95d"],["static/sw.js","d41d8cd98f00b204e9800998ecf8427e"]],cacheName="sw-precache-v3-one-music-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,!1);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));0,t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});