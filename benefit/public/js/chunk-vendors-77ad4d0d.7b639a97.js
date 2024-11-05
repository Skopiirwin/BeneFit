"use strict";(self["webpackChunkbenefit"]=self["webpackChunkbenefit"]||[]).push([[2684],{73673:function(n,t,e){e.d(t,{R:function(){return i},i:function(){return o}});var r=e(46574);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function o(...n){(0,r._K)().getBool("IS_TEST")||(0,r._K)().getBool("PROD")||console.warn(...n)}function i(...n){(0,r._K)().getBool("IS_TEST")||(0,r._K)().getBool("PROD")||console.log(...n)}},4888:function(n,t,e){e.d(t,{t:function(){return s}});var r=e(67897),o=e(15441),i=e(28189),u=e(70929);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
function c(n){const t=(0,i.YT)(n,"x","abs");if("complex64"===t.dtype){const n={x:t};return r.T2.runKernel(o.$zE,n)}{const n={x:t};return r.T2.runKernel(o.ljI,n)}}const s=(0,u.op)({abs_:c})},37523:function(n,t,e){e.d(t,{W:function(){return a}});var r=e(67897),o=e(15441),i=e(30565),u=e(28189),c=e(70929);
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
function s(n,t){let e=(0,u.YT)(n,"a","add"),c=(0,u.YT)(t,"b","add");[e,c]=(0,i.h0)(e,c);const s={a:e,b:c};return r.T2.runKernel(o.OMN,s)}const a=(0,c.op)({add_:s})},81613:function(n,t,e){
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
function r(n,t,e,r=!0){let o=[];if(r)o=o.concat(t.slice(0)),o.push(n[0]/e),o=o.concat(n.slice(1));else{o=o.concat(n[0]);const e=t.length;for(let r=0;r<e;++r)o=o.concat([n[r+1]/t[r],t[r]]);o=o.concat(n.slice(e+1))}return o}function o(n,t,e=!0){const r=[];if(e){r.push(t);for(let e=t+1;e<n;++e)e<=2*t?(r.push(e),r.push(e-(t+1))):r.push(e)}else{const e=[],o=[];for(let r=1;r<n;++r)r>=2*t+1||r%2===1?o.push(r):e.push(r);r.push(...e),r.push(0),r.push(...o)}return r}function i(n,t,e,r=!0){const o=[];r?o.push(n[0]/e):o.push(n[0]*e);for(let i=1;i<n.length;++i)i<=t.length?r?o.push(t[i-1]*n[i]):o.push(n[i]/t[i-1]):o.push(n[i]);return o}function u(n,t){const e=[0];for(let r=0;r<t;++r)e.push(n[r][0]);return e}function c(n,t,e){const r=n.slice(0,1);for(let o=0;o<e;++o)r.push(n[o+1]-t[o][0]-t[o][1]);return r}e.d(t,{AO:function(){return c},VN:function(){return i},Ym:function(){return u},b$:function(){return o},dE:function(){return r}})},21078:function(n,t,e){e.d(t,{Em:function(){return a},SM:function(){return c},WC:function(){return s},WH:function(){return o},aF:function(){return i},fK:function(){return l},gx:function(){return f},lb:function(){return u}});var r=e(45119);
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
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
 */function o(n,t){for(let e=0;e<n.length;++e)if(n[n.length-e-1]!==t-1-e)return!1;return!0}function i(n,t,e){const r=n.length+t.length,o=[];let i=0,u=0;for(let c=0;c<r;c++)-1===e.indexOf(c)?o.push(n[i++]):o.push(t[u++]);return o}function u(n,t){const e=[],r=n.length;for(let i=0;i<r;i++)-1===t.indexOf(i)&&e.push(n[i]);const o=t.map((t=>n[t]));return[e,o]}function c(n,t){const e=t.map((n=>1));return i(n,e,t)}function s(n,t,e){r.vA(o(t,e),(()=>`${n} supports only inner-most axes for now. Got axes ${t} and rank-${e} input.`))}function a(n,t){if(o(n,t))return null;const e=[];for(let r=0;r<t;++r)-1===n.indexOf(r)&&e.push(r);return n.forEach((n=>e.push(n))),e}function f(n){return n.map(((n,t)=>[t,n])).sort(((n,t)=>n[1]-t[1])).map((n=>n[0]))}function l(n,t){const e=[];for(let r=t-n;r<t;++r)e.push(r);return e}},40758:function(n,t,e){e.d(t,{H:function(){return a}});var r=e(67897),o=e(15441),i=e(28189),u=e(45119),c=e(70929);
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
function s(n,t,e){const c=(0,i.YT)(n,"x","bincount"),s=(0,i.YT)(t,"weights","bincount");u.vA("int32"===c.dtype,(()=>`Error in bincount: input dtype must be int32, but got ${c.dtype}`)),u.vA(e>=0,(()=>`size must be non-negative, but got ${e}.`)),u.vA(s.size===c.size||0===s.size,(()=>`Error in bincount: weights must have the same size as input or0-length, but got input shape: ${c.shape}, weights shape: ${s.shape}.`));const a={x:c,weights:s},f={size:e};return r.T2.runKernel(o.N4F,a,f)}const a=(0,c.op)({bincount_:s})},63567:function(n,t,e){e.d(t,{h:function(){return l}});var r=e(67897),o=e(15441),i=e(28189),u=e(45119),c=e(70125),s=e(70929),a=e(62302);
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
function f(n,t){let e=(0,i.YT)(n,"broadcastTo","x");const s=e.shape;if((0,u.SA)(t),t.length<e.rank)throw new Error(`broadcastTo(): shape.length=${t.length} < input.rank=${e.rank}.`);if(t.length>e.rank){const n=e.shape.slice();while(n.length<t.length)n.unshift(1);e=(0,a.t)(e,n)}const f=e.shape,l=Array.from(t);for(let r=t.length-1;r>=0;r--)if(f[r]===t[r])l[r]=1;else if(1!==e.shape[r])throw new Error(`broadcastTo(): [${s}] cannot be broadcast to [${t}].`);const h=l.map(((n,t)=>n>1?t:-1)).filter((n=>n>=0));if(0===h.length)return(0,c.o)(e);const p={x:e},d={reps:l};return r.T2.runKernel(o.FAs,p,d)}const l=(0,s.op)({broadcastTo_:f})},62198:function(n,t,e){
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
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
function r(n,t){const e=n.length,r=[];for(let o=0;o<e;o++){const i=e-1-o,u=n[i]||1,c=t[t.length-1-o]||1;c>1&&1===u&&r.unshift(i)}return r}function o(n,t){const e=[];for(let r=0;r<t.length;r++){const o=n[n.length-r-1],i=t.length-r-1,u=t[i];(null==o||1===o&&u>1)&&e.unshift(i)}return e}function i(n,t){const e=Math.max(n.length,t.length),r=new Array(e);for(let o=0;o<e;o++){let i=n[n.length-o-1];null==i&&(i=1);let u=t[t.length-o-1];if(null==u&&(u=1),1===i)r[e-o-1]=u;else if(1===u)r[e-o-1]=i;else{if(i!==u){const e=`Operands could not be broadcast together with shapes ${n} and ${t}.`;throw Error(e)}r[e-o-1]=i}}return r}e.r(t),e.d(t,{assertAndGetBroadcastShape:function(){return i},getBroadcastDims:function(){return r},getReductionAxes:function(){return o}})},448:function(n,t,e){e.d(t,{r:function(){return i}});var r=e(21722),o=e(45119);
/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
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
function i(n,t="float32",e){return t=t||"float32",o.SA(n),new r.yl(n,t,e)}},29809:function(n,t,e){e.d(t,{w:function(){return a}});var r=e(67897),o=e(15441),i=e(28189),u=e(45119),c=e(70929);
/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
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
function s(n,t){const e=(0,i.YT)(n,"x","cast");if(!u.xn(t))throw new Error(`Failed to cast to unknown dtype ${t}`);if("string"===t&&"string"!==e.dtype||"string"!==t&&"string"===e.dtype)throw new Error("Only strings can be casted to strings");const c={x:e},s={dtype:t};return r.T2.runKernel(o.KXH,c,s)}const a=(0,c.op)({cast_:s})},70125:function(n,t,e){e.d(t,{o:function(){return s}});var r=e(67897),o=e(15441),i=e(28189),u=e(70929);
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
function c(n){const t=(0,i.YT)(n,"x","clone","string_or_numeric"),e={x:t};return r.T2.runKernel(o.lzr,e)}const s=(0,u.op)({clone_:c})},37148:function(n,t,e){e.d(t,{f:function(){return a}});var r=e(67897),o=e(15441),i=e(28189),u=e(45119),c=e(70929);
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
function s(n,t){const e=(0,i.YT)(n,"real","complex"),c=(0,i.YT)(t,"imag","complex");u.O3(e.shape,c.shape,`real and imag shapes, ${e.shape} and ${c.shape}, must match in call to tf.complex().`);const s={real:e,imag:c};return r.T2.runKernel(o.pr3,s)}const a=(0,c.op)({complex_:s})},25030:function(n,t,e){e.d(t,{x:function(){return f}});var r=e(67897),o=e(15441),i=e(28189),u=e(45119),c=e(70125),s=e(70929);
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
function a(n,t=0){(0,u.vA)(n.length>=1,(()=>"Pass at least one tensor to concat"));const e=(0,i.j1)(n,"tensors","concat","string_or_numeric");if("complex64"===e[0].dtype&&e.forEach((n=>{if("complex64"!==n.dtype)throw new Error(`Cannot concatenate complex64 tensors with a tensor\n          with dtype ${n.dtype}. `)})),1===e.length)return(0,c.o)(e[0]);const s=e,a={axis:t};return r.T2.runKernel(o.$dB,s,a)}const f=(0,s.op)({concat_:a})},12789:function(n,t,e){e.d(t,{L:function(){return o},P:function(){return i}});var r=e(45119);
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
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
 */function o(n,t){const e=n[0].length;n.forEach(((n,t)=>{r.vA(n.length===e,(()=>`Error in concat${e}D: rank of tensors[${t}] must be the same as the rank of the rest (${e})`))})),r.vA(t>=0&&t<e,(()=>`Error in concat${e}D: axis must be between 0 and ${e-1}.`));const o=n[0];n.forEach(((n,i)=>{for(let u=0;u<e;u++)r.vA(u===t||n[u]===o[u],(()=>`Error in concat${e}D: Shape of tensors[${i}] (${n}) does not match the shape of the rest (${o}) along the non-concatenated axis ${i}.`))}))}function i(n,t){const e=n[0].slice();for(let r=1;r<n.length;r++)e[t]+=n[r][t];return e}},47195:function(n,t,e){e.d(t,{$Q:function(){return x},Dh:function(){return w},E6:function(){return i},G0:function(){return $},G8:function(){return l},YQ:function(){return o},l5:function(){return u},p$:function(){return s},qk:function(){return E},s_:function(){return v},uf:function(){return c}});var r=e(45119);
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
 */function o(n,t,e,r,o="NHWC",i){const u=n[3],s=[...t,u],a=x(o);return c(n,s,e,i,r,null,null,a)}function i(n,t,e,r,o,i,u="channelsLast"){const[s,a]=h(t);let f;if("channelsLast"===u)f=[s,a,n[3],n[3]];else{if("channelsFirst"!==u)throw new Error(`Unknown dataFormat ${u}`);f=[s,a,n[1],n[1]]}return c(n,f,e,r,o,i,!1,u)}function u(n,t,e,r,o,i,u="NDHWC"){const[c,a,f]=p(t);let l,h;if("NDHWC"===u)h="channelsLast",l=[c,a,f,n[4],n[4]];else{if("NCDHW"!==u)throw new Error(`Unknown dataFormat ${u}`);h="channelsFirst",l=[c,a,f,n[1],n[1]]}return s(n,l,e,r,o,!1,h,i)}function c(n,t,e,r,o,i,u=!1,c="channelsLast"){let[s,a,f,l]=[-1,-1,-1,-1];if("channelsLast"===c)[s,a,f,l]=n;else{if("channelsFirst"!==c)throw new Error(`Unknown dataFormat ${c}`);[s,l,a,f]=n}const[p,m,,b]=t,[w,$]=h(e),[E,x]=h(r),v=d(p,E),y=d(m,x),{padInfo:T,outHeight:M,outWidth:_}=g(o,a,f,w,$,v,y,i,c),D=u?b*l:b;let k;return"channelsFirst"===c?k=[s,D,M,_]:"channelsLast"===c&&(k=[s,M,_,D]),{batchSize:s,dataFormat:c,inHeight:a,inWidth:f,inChannels:l,outHeight:M,outWidth:_,outChannels:D,padInfo:T,strideHeight:w,strideWidth:$,filterHeight:p,filterWidth:m,effectiveFilterHeight:v,effectiveFilterWidth:y,dilationHeight:E,dilationWidth:x,inShape:n,outShape:k,filterShape:t}}function s(n,t,e,r,o,i=!1,u="channelsLast",c){let[s,a,f,l,h]=[-1,-1,-1,-1,-1];if("channelsLast"===u)[s,a,f,l,h]=n;else{if("channelsFirst"!==u)throw new Error(`Unknown dataFormat ${u}`);[s,h,a,f,l]=n}const[g,b,w,,$]=t,[E,x,v]=p(e),[y,T,M]=p(r),_=d(g,y),D=d(b,T),k=d(w,M),{padInfo:A,outDepth:H,outHeight:W,outWidth:F}=m(o,a,f,l,E,x,v,_,D,k,c),K=i?$*h:$;let L;return"channelsFirst"===u?L=[s,K,H,W,F]:"channelsLast"===u&&(L=[s,H,W,F,K]),{batchSize:s,dataFormat:u,inDepth:a,inHeight:f,inWidth:l,inChannels:h,outDepth:H,outHeight:W,outWidth:F,outChannels:K,padInfo:A,strideDepth:E,strideHeight:x,strideWidth:v,filterDepth:g,filterHeight:b,filterWidth:w,effectiveFilterDepth:_,effectiveFilterHeight:D,effectiveFilterWidth:k,dilationDepth:y,dilationHeight:T,dilationWidth:M,inShape:n,outShape:L,filterShape:t}}function a(n,t,e,r,o){null==r&&(r=l(n,t,e));const i=n[0],u=n[1],c=b((i-t+2*r)/e+1,o),s=b((u-t+2*r)/e+1,o);return[c,s]}function f(n,t,e,r,o,i){null==o&&(o=l(n,t[0],r[0]));const u=[0,0,0,e];for(let c=0;c<3;c++)n[c]+2*o>=t[c]&&(u[c]=b((n[c]-t[c]+2*o)/r[c]+1,i));return u}function l(n,t,e,r=1){const o=d(t,r);return Math.floor((n[0]*(e-1)-e+o)/2)}function h(n){return"number"===typeof n?[n,n,n]:2===n.length?[n[0],n[1],1]:n}function p(n){return"number"===typeof n?[n,n,n]:n}function d(n,t){return t<=1?n:n+(n-1)*(t-1)}function g(n,t,e,r,o,i,u,c,s){let f,l,h;if("number"===typeof n){const o=0===n?"VALID":"NUMBER";f={top:n,bottom:n,left:n,right:n,type:o};const u=a([t,e],i,r,n,c);l=u[0],h=u[1]}else if("same"===n){l=Math.ceil(t/r),h=Math.ceil(e/o);const n=Math.max(0,(l-1)*r+i-t),c=Math.max(0,(h-1)*o+u-e),s=Math.floor(n/2),a=n-s,p=Math.floor(c/2),d=c-p;f={top:s,bottom:a,left:p,right:d,type:"SAME"}}else if("valid"===n)f={top:0,bottom:0,left:0,right:0,type:"VALID"},l=Math.ceil((t-i+1)/r),h=Math.ceil((e-u+1)/o);else{if("object"!==typeof n)throw Error(`Unknown padding parameter: ${n}`);{const a="channelsLast"===s?n[1][0]:n[2][0],p="channelsLast"===s?n[1][1]:n[2][1],d="channelsLast"===s?n[2][0]:n[3][0],g="channelsLast"===s?n[2][1]:n[3][1],m=0===a&&0===p&&0===d&&0===g?"VALID":"EXPLICIT";f={top:a,bottom:p,left:d,right:g,type:m},l=b((t-i+a+p)/r+1,c),h=b((e-u+d+g)/o+1,c)}}return{padInfo:f,outHeight:l,outWidth:h}}function m(n,t,e,r,o,i,u,c,s,a,l){let h,p,d,g;if("valid"===n&&(n=0),"number"===typeof n){const m=0===n?"VALID":"NUMBER";h={top:n,bottom:n,left:n,right:n,front:n,back:n,type:m};const b=f([t,e,r,1],[c,s,a],1,[o,i,u],n,l);p=b[0],d=b[1],g=b[2]}else{if("same"!==n)throw Error(`Unknown padding parameter: ${n}`);{p=Math.ceil(t/o),d=Math.ceil(e/i),g=Math.ceil(r/u);const n=(p-1)*o+c-t,f=(d-1)*i+s-e,l=(g-1)*u+a-r,m=Math.floor(n/2),b=n-m,w=Math.floor(f/2),$=f-w,E=Math.floor(l/2),x=l-E;h={top:w,bottom:$,left:E,right:x,front:m,back:b,type:"SAME"}}}return{padInfo:h,outDepth:p,outHeight:d,outWidth:g}}function b(n,t){if(!t)return Math.trunc(n);switch(t){case"round":return Math.round(n);case"ceil":return Math.ceil(n);case"floor":return Math.floor(n);default:throw new Error(`Unknown roundingMode ${t}`)}}function w(n){const[t,e,r]=h(n);return 1===t&&1===e&&1===r}function $(n,t){return w(n)||w(t)}function E(n){return h(n).every((n=>n>0))}function x(n){if("NHWC"===n)return"channelsLast";if("NCHW"===n)return"channelsFirst";throw new Error(`Unknown dataFormat ${n}`)}function v(n,t,e){if(null!=e){if("string"===typeof t)throw Error(`Error in ${n}: pad must be an integer when using dimRoundingMode ${e} but got pad ${t}.`);if("number"===typeof t)r.vA(r.E6(t),(()=>`Error in ${n}: pad must be an integer when using dimRoundingMode ${e} but got pad ${t}.`));else{if("object"!==typeof t)throw Error(`Error in ${n}: Unknown padding parameter: ${t}`);t.forEach((t=>{t.forEach((t=>{r.vA(r.E6(t),(()=>`Error in ${n}: pad must be an integer when using dimRoundingMode ${e} but got pad ${t}.`))}))}))}}}},89359:function(n,t,e){e.d(t,{y:function(){return f}});var r=e(67897),o=e(15441),i=e(30565),u=e(28189),c=e(88991),s=e(70929);
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
function a(n,t){let e=(0,u.YT)(n,"a","div"),s=(0,u.YT)(t,"b","div");if([e,s]=(0,i.h0)(e,s),"int32"===e.dtype&&"int32"===s.dtype)return(0,c.w)(e,s);const a={a:e,b:s},f={};return r.T2.runKernel(o.sDr,a,f)}const f=(0,s.op)({div_:a})},79853:function(n,t,e){e.d(t,{_:function(){return s}});var r=e(67897),o=e(15441),i=e(28189),u=e(70929);
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
function c(n,...t){const e=t.map(((n,t)=>(0,i.YT)(n,`tensors${t}`,"einsum"))),u={equation:n};return r.T2.runKernel(o.Qgm,e,u)}const s=(0,u.op)({einsum_:c})},83416:function(n,t,e){e.d(t,{P:function(){return s}});var r=e(67897),o=e(15441),i=e(28189),u=e(70929);
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
function c(n){const t=(0,i.YT)(n,"x","elu","float32"),e={x:t};return r.T2.runKernel(o.Pah,e)}const s=(0,u.op)({elu_:c})},11418:function(n,t,e){e.d(t,{HM:function(){return r},T4:function(){return o},_7:function(){return i},fE:function(){return s},fp:function(){return u},mg:function(){return c}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
const r=.3275911,o=.254829592,i=-.284496736,u=1.421413741,c=-1.453152027,s=1.061405429},8631:function(n,t,e){e.d(t,{o:function(){return s}});var r=e(67897),o=e(15441),i=e(28189),u=e(70929);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
function c(n){const t=(0,i.YT)(n,"x","exp"),e={x:t};return r.T2.runKernel(o.ox3,e)}const s=(0,u.op)({exp_:c})},8710:function(n,t,e){e.d(t,{U:function(){return a}});var r=e(67897),o=e(15441),i=e(28189),u=e(45119),c=e(70929);
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
function s(n,t=0){const e=(0,i.YT)(n,"x","expandDims","string_or_numeric");u.vA(t<=e.rank,(()=>"Axis must be <= rank of the tensor"));const c={input:e},s={dim:t};return r.T2.runKernel(o.ybN,c,s)}const a=(0,c.op)({expandDims_:s})},53621:function(n,t,e){e.d(t,{y:function(){return a}});var r=e(448),o=e(8710),i=e(70929),u=e(62302),c=e(64826);
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
function s(n,t,e,i="float32"){null==t&&(t=n);const s=(0,r.r)([n,t],i),a=n<=t?n:t;for(let r=0;r<a;++r)s.set(1,r,r);const f=(0,u.t)(s.toTensor(),[n,t]);if(null==e)return f;if(1===e.length)return(0,c.V)((0,o.U)(f,0),[e[0],1,1]);if(2===e.length)return(0,c.V)((0,o.U)((0,o.U)(f,0),0),[e[0],e[1],1,1]);if(3===e.length)return(0,c.V)((0,o.U)((0,o.U)((0,o.U)(f,0),0),0),[e[0],e[1],e[2],1,1]);throw new Error(`eye() currently supports only 1D and 2D batchShapes, but received ${e.length}D.`)}const a=(0,i.op)({eye_:s})}}]);
//# sourceMappingURL=chunk-vendors-77ad4d0d.7b639a97.js.map