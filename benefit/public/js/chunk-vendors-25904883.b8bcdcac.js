"use strict";(self["webpackChunkbenefit"]=self["webpackChunkbenefit"]||[]).push([[722],{66652:function(n,e,t){t(67897);var r=t(88580),a=t(46574);
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const d=(0,a._K)();d.registerFlag("DEBUG",(()=>!1),(n=>{n&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")})),d.registerFlag("IS_BROWSER",(()=>r.isBrowser())),d.registerFlag("IS_NODE",(()=>"undefined"!==typeof process&&"undefined"!==typeof process.versions&&"undefined"!==typeof process.versions.node)),d.registerFlag("IS_CHROME",(()=>"undefined"!==typeof navigator&&null!=navigator&&null!=navigator.userAgent&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor))),d.registerFlag("IS_SAFARI",(()=>"undefined"!==typeof navigator&&null!=navigator&&null!=navigator.userAgent&&/Safari/.test(navigator.userAgent)&&/Apple/.test(navigator.vendor))),d.registerFlag("PROD",(()=>!1)),d.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",(()=>d.getBool("DEBUG"))),d.registerFlag("DEPRECATION_WARNINGS_ENABLED",(()=>!0)),d.registerFlag("IS_TEST",(()=>!1)),d.registerFlag("CHECK_COMPUTATION_FOR_ERRORS",(()=>d.getBool("DEBUG"))),d.registerFlag("WRAP_TO_IMAGEBITMAP",(()=>!1)),d.registerFlag("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU",(()=>!1)),d.registerFlag("USE_SETTIMEOUTCUSTOM",(()=>!1))},41743:function(n,e,t){
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
let r;function a(){if(null==r){let n;if("undefined"!==typeof window)n=window;else if("undefined"!==typeof t.g)n=t.g;else if("undefined"!==typeof process)n=process;else{if("undefined"===typeof self)throw new Error("Could not find a global object");n=self}r=n}return r}function d(){const n=a();return null==n._tfGlobals&&(n._tfGlobals=new Map),n._tfGlobals}function u(n,e){const t=d();if(t.has(n))return t.get(n);{const r=e();return t.set(n,r),t.get(n)}}t.d(e,{L:function(){return a},m:function(){return u}})},35287:function(n,e,t){t.d(e,{AS:function(){return s},DZ:function(){return l},Hi:function(){return i},aC:function(){return f},gJ:function(){return c}});var r=t(67897),a=t(46574),d=t(21722),u=t(30565);function o(n){(0,a._K)().getBool("DEPRECATION_WARNINGS_ENABLED")&&console.warn(n+" You can disable deprecation warnings with tf.disableDeprecationWarnings().")}function i(){return r.T2}function l(n,e){return r.T2.tidy(n,e)}function s(n){const e=(0,u.NB)(n);e.forEach((n=>n.dispose()))}function f(n){return r.T2.keep(n)}function c(n,e,t=1){return r.T2.registerBackend(n,e,t)}(0,d.B4)(o)},31830:function(n,e,t){t.d(e,{_X:function(){return o},y7:function(){return u}});var r=t(67897),a=t(21722),d=t(45119);function u(n,e){d.vA(d.Tn(n),(()=>"The f passed in variableGrads(f) must be a function")),d.vA(null==e||Array.isArray(e)&&e.every((n=>n instanceof a.rT)),(()=>"The varList passed in variableGrads(f, varList) must be an array of variables"));const t=null!=e;if(!t){e=[];for(const n in r.T2.registeredVariables)e.push(r.T2.registeredVariables[n])}const u=t?e.filter((n=>!n.trainable)):null,o=e.length;e=e.filter((n=>n.trainable)),d.vA(e.length>0,(()=>`variableGrads() expects at least one of the input variables to be trainable, but none of the ${o} variables is trainable.`));const i=!0,{value:l,grads:s}=r.T2.gradients(n,e,null,i);d.vA(s.some((n=>null!=n)),(()=>"Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize().")),d.vA(0===l.rank,(()=>`The f passed in variableGrads(f) must return a scalar, but it returned a rank-${l.rank} tensor`));const f={};return e.forEach(((n,e)=>{null!=s[e]&&(f[n.name]=s[e])})),null!=u&&u.forEach((n=>f[n.name]=null)),{value:l,grads:f}}function o(n){return r.T2.customGrad(n)}},26286:function(n,e,t){t.d(e,{D:function(){return T},f:function(){return u}});var r=t(28570),a=t.n(r);
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const d=a()||r;function u(n){return d.fromString(n,!0,16)}const o=u("c3a5c85c97cb3127"),i=u("b492b66fbe98f273"),l=u("9ae16a3b2f90404f");function s(n){return n.xor(n.shru(47))}function f(n,e,t){const r=n.slice(e,e+t);return d.fromBytes(Array.from(r),!0,!0)}function c(n,e){return f(n,e,8)}function g(n,e){return f(n,e,4)}function m(n,e){return 0===e?n:n.shru(e).or(n.shl(64-e))}function b(n,e,t=u("9ddfea08eb382d69")){let r=n.xor(e).mul(t);r=r.xor(r.shru(47));let a=e.xor(r).mul(t);return a=a.xor(a.shru(47)),a=a.mul(t),a}function h(n,e,t,r,a,d){a=a.add(n),d=m(d.add(a).add(r),21);const u=a;return a=a.add(e),a=a.add(t),d=d.add(m(a,44)),[a.add(r),d.add(u)]}function v(n,e,t,r){return h(c(n,e),c(n,e+8),c(n,e+16),c(n,e+24),t,r)}function E(n,e=n.length){if(e>=8){const t=l.add(2*e),r=c(n,0).add(l),a=c(n,e-8),d=m(a,37).mul(t).add(r),u=m(r,25).add(a).mul(t);return b(d,u,t)}if(e>=4){const t=l.add(2*e),r=g(n,0);return b(r.shl(3).add(e),g(n,e-4),t)}if(e>0){const t=n[0],r=n[e>>1],a=n[e-1],d=t+(r<<8),u=e+(a<<2);return s(l.mul(d).xor(o.mul(u))).mul(l)}return l}function p(n,e=n.length){const t=l.add(2*e),r=c(n,0).mul(i),a=c(n,8),d=c(n,e-8).mul(t),u=c(n,e-16).mul(l);return b(m(r.add(a),43).add(m(d,30)).add(u),r.add(m(a.add(l),18)).add(d),t)}function A(n,e=n.length){const t=l.add(2*e),r=c(n,0).mul(l),a=c(n,8),d=c(n,e-8).mul(t),u=c(n,e-16).mul(l),o=m(r.add(a),43).add(m(d,30)).add(u),i=b(o,r.add(m(a.add(l),18)).add(d),t),s=c(n,16).mul(t),f=c(n,24),g=o.add(c(n,e-32)).mul(t),h=i.add(c(n,e-24)).mul(t);return b(m(s.add(f),43).add(m(g,30)).add(h),s.add(m(f.add(r),18)).add(g),t)}function T(n,e=n.length){const t=d.fromNumber(81,!0);if(e<=32)return e<=16?E(n,e):p(n,e);if(e<=64)return A(n,e);let r=t,a=t.mul(i).add(113),u=s(a.mul(l).add(113)).mul(l),f=[d.UZERO,d.UZERO],g=[d.UZERO,d.UZERO];r=r.mul(l).add(c(n,0));let h=0;const T=64*(e-1>>6),_=T+(e-1&63)-63;do{r=m(r.add(a).add(f[0]).add(c(n,h+8)),37).mul(i),a=m(a.add(f[1]).add(c(n,h+48)),42).mul(i),r=r.xor(g[1]),a=a.add(f[0]).add(c(n,h+40)),u=m(u.add(g[0]),33).mul(i),f=v(n,h,f[1].mul(i),r.add(g[0])),g=v(n,h+32,u.add(g[1]),a.add(c(n,h+16))),[u,r]=[r,u],h+=64}while(h!==T);const R=i.add(u.and(255).shl(1));return h=_,g[0]=g[0].add(e-1&63),f[0]=f[0].add(g[0]),g[0]=g[0].add(f[0]),r=m(r.add(a).add(f[0]).add(c(n,h+8)),37).mul(R),a=m(a.add(f[1]).add(c(n,h+48)),42).mul(R),r=r.xor(g[1].mul(9)),a=a.add(f[0].mul(9).add(c(n,h+40))),u=m(u.add(g[0]),33).mul(R),f=v(n,h,f[1].mul(R),r.add(g[0])),g=v(n,h+32,u.add(g[1]),a.add(c(n,h+16))),[u,r]=[r,u],b(b(f[0],g[0],R).add(s(a).mul(o)).add(u),b(f[1],g[1],R).add(r),R)}}}]);
//# sourceMappingURL=chunk-vendors-25904883.b8bcdcac.js.map