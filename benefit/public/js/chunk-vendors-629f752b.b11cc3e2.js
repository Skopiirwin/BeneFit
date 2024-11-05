"use strict";(self["webpackChunkbenefit"]=self["webpackChunkbenefit"]||[]).push([[3908],{25912:function(e,n,t){t.d(n,{L:function(){return u}});var r=t(67897),i=t(15441),s=t(28189),o=t(70929);
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
function a(e){const n=(0,s.YT)(e,"x","round"),t={x:n};return r.T2.runKernel(i.hVg,t)}const u=(0,o.op)({round_:a})},45702:function(e,n,t){t.d(n,{d:function(){return s}});var r=t(89783),i=t(19171);
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
function s(e,n){if(((0,r.isTypedArray)(e)&&"string"!==n||Array.isArray(e))&&"complex64"!==n)throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if("string"===n&&(0,r.isTypedArray)(e)&&!(e instanceof Uint8Array))throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");const t=[],s=[];return(0,i.Q)(e,t,s,n)}},26170:function(e,n,t){t.d(n,{Ly:function(){return i},TT:function(){return s},l8:function(){return o}});var r=t(45119);function i(e,n,t){const r=n.rank>1?n.shape[n.rank-1]:1,i=n.rank>1?n.rank-1:1,s=`Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: ${t.shape}, indices.shape: ${n.shape}, shape: ${e}, sliceDim: ${r}, and batchDim: ${i}.`;if(t.rank<i)throw new Error(s+` update.rank < ${i}. `);if(e.length<r+(t.rank-i))throw new Error(s+` Output shape length < ${r+(t.rank-i)}`);if(t.rank!==i+e.length-r)throw new Error(s+" update.rank != "+(i+e.length-r));for(let o=0;o<i;++o)if(t.shape[o]!==n.shape[o])throw new Error(s+` updates.shape[${o}] (${t.shape[o]}) != indices.shape[${o}] (${n.shape[o]}).`);for(let o=0;o<t.rank-i;++o)if(t.shape[o+i]!==e[o+r])throw new Error(s+` updates.shape[${o+i}] (${t.shape[o+i]}) != shape[${o+i}] (${e[o+i]})`)}function s(e,n,t){if(n.rank<1)throw new Error(`tf.scatterND() expects the indices to be rank 1 or higher, but the rank was ${n.rank}.`);if(e.rank<1)throw new Error(`tf.scatterND() expects the updates to be rank 1 or higher, but the rank was ${e.rank}.`);if("int32"!==n.dtype)throw new Error(`The dtype of 'indices' should be int32, but got dtype: ${n.dtype}`);if(t.length<1)throw new Error(`Output rank must be greater or equal to 1, but got shape: ${t}`);if(0===t.length){if(0===n.size)throw new Error(`Indices specified for empty output. indices shape: ${n.shape}`);if(0===e.size)throw new Error(`Updates specified for empty output. updates shape: ${e.shape}`)}i(t,n,e)}function o(e,n,t){const i=n.shape.length,s=i>1?n.shape[i-1]:1,o=t.length;let a=1;for(let r=s;r<o;++r)a*=t[r];const u=s<1?1:s,l=(0,r.Ze)(n.shape)/u,h=[...(0,r.Ur)(t.slice(0,s)),1],c=(0,r.Ze)(t);return{sliceRank:s,numUpdates:l,sliceSize:a,strides:h,outputSize:c}}},47516:function(e,n,t){t.r(n),t.d(n,{collectGatherOpShapeInfo:function(){return a},computeOutShape:function(){return o},segOpComputeOptimalWindowSize:function(){return s}});var r=t(45119),i=t(29827);
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
function s(e,n){let t,s=!1;e<=i.m?(t=e,s=!0):t=(0,r.lK)(e,Math.floor(Math.sqrt(e)));while(!s)t>n||t===e?s=!0:t=(0,r.lK)(e,t+1);return t}function o(e,n,t){const r=[],i=e.length;for(let s=0;s<i;s++)s!==n?r.push(e[s]):r.push(t);return r}function a(e,n,t,r){const i=n.shape.length,s=e.shape.length;if(0!==r&&(r<-i||r>i))throw new Error(`Expect batchDims in the range of [-${i}, ${i}], but got ${r}`);if(r<0&&(r+=i),r>s)throw new Error(`batchDims (${r}) must be less than rank(x) (\n    ${s}).`);if(t<r)throw new Error(`batchDims (${r}) must be less than or equal to axis (${t}).`);for(let c=0;c<r;++c)if(e.shape[c]!==n.shape[c])throw new Error(`x.shape[${c}]: ${e.shape[c]} should be equal to indices.shape[${c}]: ${n.shape[c]}.`);const o=e.shape[t],a=[];let u=1,l=1,h=1;for(let c=0;c<r;++c)a.push(e.shape[c]),u*=e.shape[c];for(let c=r;c<t;c++)a.push(e.shape[c]),l*=e.shape[c];for(let c=r;c<i;c++)a.push(n.shape[c]);for(let c=t+1;c<s;c++)a.push(e.shape[c]),h*=e.shape[c];return{batchSize:u,sliceSize:h,outerSize:l,dimSize:o,outputShape:a}}},28576:function(e,n,t){t.d(n,{X:function(){return i},j:function(){return r}});
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
const r=1.7580993408473768,i=1.0507009873554805},28968:function(e,n,t){t.d(n,{r:function(){return u}});var r=t(67897),i=t(15441),s=t(28189),o=t(70929);
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
function a(e){const n=(0,s.YT)(e,"x","sigmoid","float32"),t={x:n};return r.T2.runKernel(i.vI1,t)}const u=(0,o.op)({sigmoid_:a})},15920:function(e,n,t){t.d(n,{G:function(){return h}});var r=t(25030),i=t(96111),s=t(70929),o=t(62302),a=t(17986),u=t(18941);
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
function l(e,n,t,s=!1,l=0){let h=0;const c=[];while(h+n<=e.size)c.push((0,a.d)(e,h,n)),h+=t;if(s)while(h<e.size){const s=h+n-e.size,o=(0,r.x)([(0,a.d)(e,h,n-s),(0,i.G)([s],l)]);c.push(o),h+=t}return 0===c.length?(0,u.K)([],[0,n]):(0,o.t)((0,r.x)(c),[c.length,n])}const h=(0,s.op)({frame_:l})},98777:function(e,n,t){t.d(n,{W:function(){return o}});var r=t(70929),i=t(18584);
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
function s(e){return(0,i._)(e,.54,.46)}const o=(0,r.op)({hammingWindow_:s})},69157:function(e,n,t){t.d(n,{_:function(){return o}});var r=t(70929),i=t(18584);
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
function s(e){return(0,i._)(e,.5,.5)}const o=(0,r.op)({hannWindow_:s})},55732:function(e,n,t){t.d(n,{u:function(){return h}});var r=t(9258),i=t(70929),s=t(18584),o=t(8775),a=t(15920),u=t(69157);
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
function l(e,n,t,i,l=u._){null==i&&(i=(0,s.F)(n));const h=(0,a.G)(e,n,t),c=(0,r.l)(h,l(n));return(0,o.z)(c,i)}const h=(0,i.op)({stft_:l})},18584:function(e,n,t){t.d(n,{F:function(){return i},_:function(){return s}});var r=t(62018);
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
 */function i(e){return Math.floor(Math.pow(2,Math.ceil(Math.log(e)/Math.log(2))))}function s(e,n,t){const i=1-e%2,s=new Float32Array(e);for(let r=0;r<e;++r){const o=2*Math.PI*r/(e+i-1);s[r]=n-t*Math.cos(o)}return(0,r.t)(s,"float32")}},17986:function(e,n,t){t.d(n,{d:function(){return u}});var r=t(67897),i=t(15441),s=t(28189),o=t(70929);
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
function a(e,n,t){const o=(0,s.YT)(e,"x","slice","string_or_numeric");if(0===o.rank)throw new Error("Slicing scalar is not possible");const a={x:o},u={begin:n,size:t};return r.T2.runKernel(i.JiE,a,u)}const u=(0,o.op)({slice_:a})},34969:function(e,n,t){t.r(n),t.d(n,{assertParamsValid:function(){return o},computeFlatOffset:function(){return k},computeOutShape:function(){return u},getNormalizedAxes:function(){return f},isSliceContinous:function(){return w},maskToAxes:function(){return a},parseSliceParams:function(){return E},sliceInfo:function(){return A},startForAxis:function(){return b},startIndicesWithElidedDims:function(){return d},stopForAxis:function(){return m},stopIndicesWithElidedDims:function(){return p},stridesForAxis:function(){return g},stridesWithElidedDims:function(){return l}});var r=t(45119);
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
 */const i=-2,s=-1;function o(e,n,t){const i=e.shape.length;r.vA(i===n.length,(()=>`Error in slice${i}D: Length of begin ${n} must match the rank of the array (${i}).`)),r.vA(i===t.length,(()=>`Error in slice${i}D: Length of size ${t} must match the rank of the array (${i}).`));for(let s=0;s<i;++s)r.vA(n[s]+t[s]<=e.shape[s],(()=>`Error in slice${i}D: begin[${s}] + size[${s}] (${n[s]+t[s]}) would overflow input.shape[${s}] (${e.shape[s]})`))}function a(e){const n=[];let t=0;while(e>0)1&e&&n.push(t),e/=2,t++;return n}function u(e,n,t){const r=[];for(let i=0;i<e.length;i++)r[i]=Math.ceil((n[i]-e[i])/t[i]);return r}function l(e,n,t,r){const i=[...e];for(let s=i.length;s<r.length;s++)i.push(1);for(let s=0;s<t;s++)0===s?i[n]=1:(i.splice(n,0,1),i.pop());return i}function h(e,n,t){return t<=e?t:t-(n-1)}function c(e,n){const t=[];for(let r=0;r<e;r++)t.push(n+r);return t}function f(e,n,t,r,i,s,o,a,u){const h=e.length;let c=new Array(h),f=new Array(h),w=new Array(h);if(n.length&&t>0){const u=n[0],h=t+1;c=d(o,u,h,r,e),f=p(a,u,h,i,e),w=l(s,u,h,e)}else for(let l=0;l<h;l++)c[l]=b(o,r,s,e,l,u),f[l]=m(a,i,s,e,l,u),w[l]=g(s,l,u);return{begin:c,end:f,strides:w}}function d(e,n,t,r,i){const s=[...i],o=c(t,n);for(let a=0;a<s.length;a++)if(o.indexOf(a)>-1)s[a]=0;else{const i=h(n,t,a);let o=r[i];e&1<<i&&(o=0),s[a]=o}return s}function p(e,n,t,i,s){const o=[...s],a=c(t,n);for(let r=0;r<o.length;r++)if(a.indexOf(r)>-1)o[r]=Number.MAX_SAFE_INTEGER;else{const s=h(n,t,r);let a=i[s];e&1<<s&&(a=Number.MAX_SAFE_INTEGER),o[r]=a}for(let u=0;u<o.length;u++){const e=s[u];o[u]<0&&(o[u]+=e),o[u]=r.qE(0,o[u],s[u])}return o}function g(e,n,t){let r=e[n];return(t&1<<n||null==r)&&(r=1),r}function b(e,n,t,i,s,o){let a=n[s];const u=t[s]||1;(e&1<<s||o&1<<s||null==a)&&(a=u>0?Number.MIN_SAFE_INTEGER:Number.MAX_SAFE_INTEGER);const l=i[s];return a<0&&(a+=l),a=r.qE(0,a,l-1),a}function m(e,n,t,i,s,o){let a=n[s];const u=t[s]||1;(e&1<<s||o&1<<s||null==a)&&(a=u>0?Number.MAX_SAFE_INTEGER:Number.MIN_SAFE_INTEGER);const l=i[s];return a<0&&(a+=l),a=u>0?r.qE(0,a,l):r.qE(-1,a,l-1),a}function w(e,n,t){let r=t.length;for(let i=0;i<t.length;i++)if(t[i]>1){r=i;break}for(let i=r+1;i<t.length;i++)if(n[i]>0||t[i]!==e[i])return!1;return!0}function k(e,n){let t=e.length>0?e[e.length-1]:1;for(let r=0;r<e.length-1;r++)t+=e[r]*n[r];return t}function E(e,n,t){let i;const s=e.shape.length;let o;return i="number"===typeof n?[n,...new Array(s-1).fill(0)]:n.length<s?n.concat(new Array(s-n.length).fill(0)):n.slice(),i.forEach((e=>{r.vA(-1!==e,(()=>"slice() does not support negative begin indexing."))})),o=null==t?new Array(s).fill(-1):"number"===typeof t?[t,...new Array(s-1).fill(-1)]:t.length<s?t.concat(new Array(s-t.length).fill(-1)):t,o=o.map(((n,t)=>n>=0?n:(r.vA(-1===n,(()=>`Negative size values should be exactly -1 but got ${n} for the slice() size at index ${t}.`)),e.shape[t]-i[t]))),[i,o]}function A(e,n,t,r,s,o,a,u,l){let h;if(null==r?(h=new Array(n.length),h.fill(1)):h=r,null!=a&&0!==(a&a-1))throw new Error("Multiple ellipses in slice is not allowed.");let c=!1;const f={dims:h.length,numAddAxisAfterEllipsis:0,begin:n.slice(),end:t.slice(),strides:h.slice(),beginMask:s,endMask:o,ellipsisMask:a,newAxisMask:u,shrinkAxisMask:l};for(let i=0;i<f.dims;i++)c&&0!==(1<<i&u)&&f.numAddAxisAfterEllipsis++,1<<i&a&&(c=!0);c||(f.ellipsisMask|=1<<f.dims,f.dims++);const d={dims:e.length,beginMask:0,endMask:0,beginValid:!1,endValid:!1};$(f,d);let p=!0,g=!0,b=!0;const m=[],w=[];for(let i=0;i<e.length;++i){if(0===d.strides[i])throw Error(`strides[${i}] must be non-zero`);const n=!!(d.shrinkAxisMask&1<<i),t=e[i];if(-1===t){m.push(n?1:-1);continue}const r=[d.beginMask&1<<i,d.endMask&1<<i],s=[d.strides[i]>0?0:-1,d.strides[i]>0?t:t-1];if(n&&d.strides[i]<=0)throw Error("only stride 1 allowed on non-range indexing.");b=b&&1===d.strides[i];const o=!!(d.beginMask&1<<i&&d.endMask&1<<i);if(d.beginValid&&d.endValid){if(n){const e=d.begin[i]<0?t+d.begin[i]:d.begin[i];if(d.begin[i]=e,d.end[i]=d.begin[i]+1,e<0||e>=t)throw Error(`slice index ${d.begin[i]} of dimension ${i} out of bounds.`)}else d.begin[i]=S(d.begin[i],0,d.strides[i],t,r,s),d.end[i]=S(d.end[i],1,d.strides[i],t,r,s);const e=1===d.strides[i]&&0===d.begin[i]&&d.end[i]===t;p=p&&e,g=g&&(0===i&&1===d.strides[i]||e)}else p=p&&1===d.strides[i]&&o,g=g&&(0===i&&1===d.strides[i]||o);let a,u=!1;if(d.beginValid&&d.endValid?(a=d.end[i]-d.begin[i],u=!0):n?(a=1,u=!0):o&&t>=0&&(a=d.strides[i]<0?-t:t,u=!0),u){let e;e=0===a||a<0!==d.strides[i]<0?0:Math.trunc(a/d.strides[i])+(a%d.strides[i]!==0?1:0),m.push(e)}else m.push(-1)}for(let E=0;E<d.finalShapeGatherIndices.length;++E){const e=d.finalShapeGatherIndices[E];e>=0?w.push(m[e]):e===i&&w.push(1)}const k=w.filter(((e,n)=>d.finalShapeGatherIndices[n]!==i));return{finalShapeSparse:k,finalShape:w,isIdentity:p,sliceDim0:g,isSimpleSlice:b,begin:d.begin,end:d.end,strides:d.strides}}function $(e,n){n.beginMask=0,n.endMask=0,n.shrinkAxisMask=0;let t=0;n.beginValid=null!=e.begin,n.endValid=null!=e.end,n.begin=new Array(n.dims),n.end=new Array(n.dims),n.strides=new Array(n.dims),n.finalShapeGatherIndices=[],n.finalShapeGatherIndicesSparse=[],n.inputShapeGatherIndicesSparse=new Array(n.dims);for(let r=0;r<e.dims;r++)if(1<<r&e.ellipsisMask){const i=Math.min(n.dims-(e.dims-r)+1+e.numAddAxisAfterEllipsis,n.dims);for(;t<i;t++)n.begin[t]=0,n.end[t]=0,n.strides[t]=1,n.beginMask|=1<<t,n.endMask|=1<<t,n.finalShapeGatherIndices.push(t),n.finalShapeGatherIndicesSparse.push(-1),n.inputShapeGatherIndicesSparse[t]=r}else if(1<<r&e.newAxisMask)n.finalShapeGatherIndices.push(i),n.finalShapeGatherIndicesSparse.push(-1);else{if(t===n.begin.length)throw Error(`Index out of range using input dim ${t}; input has only ${n.dims} dims, ${n.begin.length}.`);null!=e.begin&&(n.begin[t]=e.begin[r]),null!=e.end&&(n.end[t]=e.end[r]),n.strides[t]=e.strides[r],e.beginMask&1<<r&&(n.beginMask|=1<<t),e.endMask&1<<r&&(n.endMask|=1<<t),e.shrinkAxisMask&1<<r?(n.finalShapeGatherIndices.push(s),n.finalShapeGatherIndicesSparse.push(-1),n.shrinkAxisMask|=1<<t):(n.finalShapeGatherIndices.push(t),n.finalShapeGatherIndicesSparse.push(r)),n.inputShapeGatherIndicesSparse[t]=r,t++}}function S(e,n,t,r,i,s){if(i[n])return t>0?s[n]:s[n+1&1];{const n=e<0?r+e:e;return n<s[0]?s[0]:n>s[1]?s[1]:n}}}}]);
//# sourceMappingURL=chunk-vendors-629f752b.b11cc3e2.js.map