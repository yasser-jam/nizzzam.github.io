if(!self.define){let n,l={};const e=(e,u)=>(e=new URL(e+".js",u).href,l[e]||new Promise((l=>{if("document"in self){const n=document.createElement("script");n.src=e,n.onload=l,document.head.appendChild(n)}else n=e,importScripts(e),l()})).then((()=>{let n=l[e];if(!n)throw new Error(`Module ${e} didn’t register its module`);return n})));self.define=(u,i)=>{const r=n||("document"in self?document.currentScript.src:"")||location.href;if(l[r])return;let s={};const o=n=>e(n,r),t={module:{uri:r},exports:s,require:o};l[r]=Promise.all(u.map((n=>t[n]||o(n)))).then((n=>(i(...n),s)))}}define(["./workbox-c3dd8e30"],(function(n){"use strict";self.skipWaiting(),n.clientsClaim(),n.precacheAndRoute([{url:"_nuxt/_commonjsHelpers.1J56E-h6.js",revision:null},{url:"_nuxt/_id_.5ggv9Yz-.js",revision:null},{url:"_nuxt/add-amount.biIa__1g.js",revision:null},{url:"_nuxt/add-field.BRbykTIh.js",revision:null},{url:"_nuxt/add-task.N6EePb3D.js",revision:null},{url:"_nuxt/asyncData.0gLUjW4y.js",revision:null},{url:"_nuxt/browser.CuAA09Dl.js",revision:null},{url:"_nuxt/Btn.tbeCejdA.js",revision:null},{url:"_nuxt/builds/latest.json",revision:"6a57e5f3570ea8465894b904833c8bd6"},{url:"_nuxt/builds/meta/7531794f-798b-4554-b4d8-666e69fd2f22.json",revision:null},{url:"_nuxt/Card.vue.3uaZqBiQ.js",revision:null},{url:"_nuxt/default.ndlMzt8D.js",revision:null},{url:"_nuxt/default.Ta8ec1ax.css",revision:null},{url:"_nuxt/Dialog.vue.e_O16lx3.js",revision:null},{url:"_nuxt/entry.jsRjgOGe.js",revision:null},{url:"_nuxt/entry.V2lAEFOC.css",revision:null},{url:"_nuxt/error-404._nGOvEFv.js",revision:null},{url:"_nuxt/error-404.YohpCKtd.css",revision:null},{url:"_nuxt/error-500.qFGCLNRm.css",revision:null},{url:"_nuxt/error-500.wyMExhow.js",revision:null},{url:"_nuxt/general-info.WSAFrUZB.js",revision:null},{url:"_nuxt/goals.cre8Lixg.css",revision:null},{url:"_nuxt/goals.jNB7wJ7p.js",revision:null},{url:"_nuxt/Icon.vofJJezV.js",revision:null},{url:"_nuxt/Icon.vue.dMJNaCP2.js",revision:null},{url:"_nuxt/IconSvg.2Kx5laq_.css",revision:null},{url:"_nuxt/IconSvg.ncU8MRgj.js",revision:null},{url:"_nuxt/IconTw.F64AQYvK.js",revision:null},{url:"_nuxt/IconTw.vue.xcgtDhQd.js",revision:null},{url:"_nuxt/index.8cHoYuLw.js",revision:null},{url:"_nuxt/index.X_R8aOxi.js",revision:null},{url:"_nuxt/Label.Fz1CQNm7.js",revision:null},{url:"_nuxt/nuxt-link.QtsS_iL6.js",revision:null},{url:"_nuxt/payment_field.-8eq-Bq2.js",revision:null},{url:"_nuxt/payment.c0LHTof2.js",revision:null},{url:"_nuxt/payment.lthUQ3JO.css",revision:null},{url:"_nuxt/payment.oNVZcbJh.js",revision:null},{url:"_nuxt/personal-avatar.LSamd9bE.jpg",revision:null},{url:"_nuxt/Subtitle.AiAnpjeN.js",revision:null},{url:"_nuxt/Table.vue.Kp840pZf.js",revision:null},{url:"_nuxt/Title.CDQEiIPK.js",revision:null},{url:"_nuxt/workbox-window.prod.es5.prqDwDSL.js",revision:null},{url:"200",revision:"57df2b0d434b66742d41733a780b897c"},{url:"404",revision:"57df2b0d434b66742d41733a780b897c"},{url:"apple-touch-icon-180x180.png",revision:"1950caff03be66486f69ef92357fd9f7"},{url:"favicon.ico",revision:"b9dffa334ffb7044bc5b20c7aa4bb5be"},{url:"general-info",revision:"57df2b0d434b66742d41733a780b897c"},{url:"goals/add-task",revision:"57df2b0d434b66742d41733a780b897c"},{url:"goals",revision:"57df2b0d434b66742d41733a780b897c"},{url:"/",revision:"57df2b0d434b66742d41733a780b897c"},{url:"logo.png",revision:"105cf904efa95e5df9c5e8f543bd6843"},{url:"maskable-icon-512x512.png",revision:"f1011c50fcebfe83a0c2e7d794ae28b0"},{url:"payment/add-amount",revision:"57df2b0d434b66742d41733a780b897c"},{url:"payment/add-field",revision:"57df2b0d434b66742d41733a780b897c"},{url:"payment",revision:"57df2b0d434b66742d41733a780b897c"},{url:"pwa-192x192.png",revision:"6686667cfa2727ea203457df0978580c"},{url:"pwa-512x512.png",revision:"762e776ad761013b6f81fa999be68b34"},{url:"pwa-64x64.png",revision:"915a8ceff04d39627125cf2be2bc7174"},{url:"manifest.webmanifest",revision:"846d51f0f9b3fe096a0d63eb7b134b70"}],{}),n.cleanupOutdatedCaches(),n.registerRoute("/",new n.NetworkFirst,"GET"),n.registerRoute(/^https:\/\/api\.mapbox\.com\/.*/i,new n.CacheFirst({cacheName:"mapbox-cache",plugins:[new n.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
