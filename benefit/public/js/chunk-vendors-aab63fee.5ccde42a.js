"use strict";(self["webpackChunkbenefit"]=self["webpackChunkbenefit"]||[]).push([[9126],{96111:function(e,n,r){r.d(n,{G:function(){return a}});var t=r(67897),s=r(15441),o=r(45119);
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
function a(e,n,r){(0,o.SA)(e),r=r||(0,o.X$)(n);const a={shape:e,value:n,dtype:r};return t.T2.runKernel(s.SQl,{},a)}},88991:function(e,n,r){r.d(n,{w:function(){return c}});var t=r(67897),s=r(15441),o=r(30565),a=r(28189),i=r(70929);
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
function u(e,n){let r=(0,a.YT)(e,"a","floorDiv"),i=(0,a.YT)(n,"b","floorDiv");[r,i]=(0,o.h0)(r,i);const u={a:r,b:i};return t.T2.runKernel(s.ElG,u)}const c=(0,i.op)({floorDiv_:u})},55377:function(e,n,r){r.d(n,{f2:function(){return x},Do:function(){return v},XB:function(){return k},zE:function(){return A}});var t=r(62198),s=r(83416),o=r(67897),a=r(15441),i=r(28189),u=r(70929);
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
function c(e,n=.2){const r=(0,i.YT)(e,"x","leakyRelu"),t={x:r},s={alpha:n};return o.T2.runKernel(a.X0$,t,s)}const l=(0,u.op)({leakyRelu_:c});var h=r(9258),p=r(64394),f=r(90112),d=r(83732),m=r(62302),b=r(28968),g=r(10700),T=r(83791);
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
function k(e,n,r){if(null==r||"linear"===r)return e;if("relu"===r)return(0,h.l)(e,(0,g.P)(n));throw new Error(`Cannot compute gradient for fused activation ${r}.`)}function v(e,n){let r=n;const s=t.getReductionAxes(e.shape,n.shape);return s.length>0&&(r=(0,T.c)(r,s)),(0,m.t)(r,e.shape)}function x(e,n,r,t){if("linear"===n)return e;if("relu"===n)return(0,f.V)(e);if("elu"===n)return(0,s.P)(e);if("relu6"===n)return(0,d.j)(e);if("prelu"===n)return(0,p.N)(e,r);if("leakyrelu"===n)return l(e,t);if("sigmoid"===n)return(0,b.r)(e);throw new Error(`Unknown fused activation ${n}.`)}const A=(e,n)=>{const r=e>0;return!r||"linear"===n}},83869:function(e,n,r){r.d(n,{N:function(){return s}});var t=r(45119);function s(e,n){const r=e.shape.length,s=n.shape.length;if(r<1)throw new Error(`tf.gatherND() expects the input to be rank 1 or higher, but the rank was ${r}.`);if(s<1)throw new Error(`tf.gatherND() expects the indices to be rank 1 or higher, but the rank was ${s}.`);if("int32"!==n.dtype)throw new Error(`tf.gatherND() expects the indices to be int32 type, but the dtype was ${n.dtype}.`);if(n.shape[s-1]>r)throw new Error(`index innermost dimension length must be <= tensor rank; saw: ${n.shape[s-1]} vs. ${r}`);if(0===(0,t.Ze)(e.shape))throw new Error(`Requested more than 0 entries, but input is empty. Input shape: ${e.shape}.`);const o=n.shape,a=o[o.length-1];let i=1;for(let t=0;t<o.length-1;++t)i*=o[t];const u=e.shape,c=o.slice();c.pop();let l=1;for(let t=a;t<r;++t)l*=u[t],c.push(u[t]);const h=[...(0,t.Ur)(e.shape).map((e=>e/l)),1].slice(0,a);return[c,i,l,h]}},62058:function(e,n,r){r.d(n,{r:function(){return l}});var t=r(67897),s=r(15441),o=r(30565),a=r(28189),i=r(62198),u=r(70929);
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
function c(e,n){let r=(0,a.YT)(e,"a","greater","string_or_numeric"),u=(0,a.YT)(n,"b","greater","string_or_numeric");[r,u]=(0,o.h0)(r,u),(0,i.assertAndGetBroadcastShape)(r.shape,u.shape);const c={a:r,b:u};return t.T2.runKernel(s.XhZ,c)}const l=(0,u.op)({greater_:c})},13337:function(e,n,r){r.d(n,{D:function(){return l}});var t=r(67897),s=r(15441),o=r(30565),a=r(28189),i=r(62198),u=r(70929);
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
function c(e,n){let r=(0,a.YT)(e,"a","greaterEqual","string_or_numeric"),u=(0,a.YT)(n,"b","greaterEqual","string_or_numeric");[r,u]=(0,o.h0)(r,u),(0,i.assertAndGetBroadcastShape)(r.shape,u.shape);const c={a:r,b:u};return t.T2.runKernel(s.lLS,c)}const l=(0,u.op)({greaterEqual_:c})},35040:function(e,n,r){r.d(n,{n:function(){return u}});var t=r(67897),s=r(15441),o=r(28189),a=r(70929);
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
function i(e){const n=(0,o.YT)(e,"input","imag"),r={input:n};return t.T2.runKernel(s.dv8,r)}const u=(0,a.op)({imag_:i})},31951:function(e,n,r){r.d(n,{C:function(){return c}});var t=r(67897),s=r(15441),o=r(28189),a=r(45119),i=r(70929);
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
function u(e,n,r,i,u="bilinear",c=0){const l=(0,o.YT)(e,"image","cropAndResize"),h=(0,o.YT)(n,"boxes","cropAndResize","float32"),p=(0,o.YT)(r,"boxInd","cropAndResize","int32"),f=h.shape[0];a.vA(4===l.rank,(()=>`Error in cropAndResize: image must be rank 4,but got rank ${l.rank}.`)),a.vA(2===h.rank&&4===h.shape[1],(()=>`Error in cropAndResize: boxes must be have size [${f},4] but had shape ${h.shape}.`)),a.vA(1===p.rank&&p.shape[0]===f,(()=>`Error in cropAndResize: boxInd must be have size [${f}] but had shape ${h.shape}.`)),a.vA(2===i.length,(()=>`Error in cropAndResize: cropSize must be of length 2, but got length ${i.length}.`)),a.vA(i[0]>=1&&i[1]>=1,(()=>`cropSize must be atleast [1,1], but was ${i}`)),a.vA("bilinear"===u||"nearest"===u,(()=>`method must be bilinear or nearest, but was ${u}`));const d={image:l,boxes:h,boxInd:p},m={method:u,extrapolationValue:c,cropSize:i},b=t.T2.runKernel(s.MRQ,d,m);return b}const c=(0,i.op)({cropAndResize_:u})},73866:function(e,n,r){r.d(n,{n:function(){return c}});var t=r(67897),s=r(15441),o=r(28189),a=r(45119),i=r(70929);
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
function u(e){const n=(0,o.YT)(e,"image","flipLeftRight","float32");a.vA(4===n.rank,(()=>`Error in flipLeftRight: image must be rank 4,but got rank ${n.rank}.`));const r={image:n},i=t.T2.runKernel(s.BxF,r,{});return i}const c=(0,i.op)({flipLeftRight_:u})},41477:function(e,n,r){r.d(n,{C:function(){return u}});var t=r(28189),s=r(45119),o=r(70929),a=r(64826);
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
function i(e){const n=(0,t.YT)(e,"image","grayscaleToRGB"),r=n.rank-1,o=n.shape[r];s.vA(n.rank>=2,(()=>`Error in grayscaleToRGB: images must be at least rank 2, but got rank ${n.rank}.`)),s.vA(1===o,(()=>`Error in grayscaleToRGB: last dimension of a grayscale image should be size 1, but got size ${o}.`));const i=new Array(n.rank);return i.fill(1,0,r),i[r]=3,(0,a.V)(n,i)}const u=(0,o.op)({grayscaleToRGB_:i})},56248:function(e,n,r){r.d(n,{L:function(){return c}});var t=r(67897),s=r(15441),o=r(28189),a=r(68712),i=r(70929);
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
function u(e,n,r,i=.5,u=Number.NEGATIVE_INFINITY){const c=(0,o.YT)(e,"boxes","nonMaxSuppression","float32"),l=(0,o.YT)(n,"scores","nonMaxSuppression","float32"),h=(0,a.W)(c,l,r,i,u);r=h.maxOutputSize,i=h.iouThreshold,u=h.scoreThreshold;const p={maxOutputSize:r,iouThreshold:i,scoreThreshold:u};return t.T2.runKernel(s.SDM,{boxes:c,scores:l},p)}const c=(0,i.op)({nonMaxSuppression_:u})},70215:function(e,n,r){r.d(n,{z:function(){return u}});var t=r(43303),s=r(28189),o=r(68712),a=r(62018);
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
async function i(e,n,r,i=.5,u=Number.NEGATIVE_INFINITY){const c=(0,s.YT)(e,"boxes","nonMaxSuppressionAsync"),l=(0,s.YT)(n,"scores","nonMaxSuppressionAsync"),h=(0,o.W)(c,l,r,i,u);r=h.maxOutputSize,i=h.iouThreshold,u=h.scoreThreshold;const p=await Promise.all([c.data(),l.data()]),f=p[0],d=p[1],{selectedIndices:m}=(0,t.c7)(f,d,r,i,u);return c!==e&&c.dispose(),l!==n&&l.dispose(),(0,a.t)(m,"int32")}const u=i},84305:function(e,n,r){r.d(n,{H:function(){return c}});var t=r(67897),s=r(15441),o=r(28189),a=r(68712),i=r(70929);
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
function u(e,n,r,i=.5,u=Number.NEGATIVE_INFINITY,c=!1){const l=(0,o.YT)(e,"boxes","nonMaxSuppression"),h=(0,o.YT)(n,"scores","nonMaxSuppression"),p=(0,a.W)(l,h,r,i,u,null),f=p.maxOutputSize,d=p.iouThreshold,m=p.scoreThreshold,b={boxes:l,scores:h},g={maxOutputSize:f,iouThreshold:d,scoreThreshold:m,padToMaxOutputSize:c},T=t.T2.runKernel(s.Zl4,b,g);return{selectedIndices:T[0],validOutputs:T[1]}}const c=(0,i.op)({nonMaxSuppressionPadded_:u})},5902:function(e,n,r){r.d(n,{R:function(){return c}});var t=r(43303),s=r(28189),o=r(68712),a=r(45702),i=r(62018);
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
async function u(e,n,r,u=.5,c=Number.NEGATIVE_INFINITY,l=!1){const h=(0,s.YT)(e,"boxes","nonMaxSuppressionAsync"),p=(0,s.YT)(n,"scores","nonMaxSuppressionAsync"),f=(0,o.W)(h,p,r,u,c,null),d=f.maxOutputSize,m=f.iouThreshold,b=f.scoreThreshold,[g,T]=await Promise.all([h.data(),p.data()]),{selectedIndices:k,validOutputs:v}=(0,t.ZS)(g,T,d,m,b,l);return h!==e&&h.dispose(),p!==n&&p.dispose(),{selectedIndices:(0,i.t)(k,"int32"),validOutputs:(0,a.d)(v,"int32")}}const c=u},95634:function(e,n,r){r.d(n,{f:function(){return c}});var t=r(67897),s=r(15441),o=r(28189),a=r(68712),i=r(70929);
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
function u(e,n,r,i=.5,u=Number.NEGATIVE_INFINITY,c=0){const l=(0,o.YT)(e,"boxes","nonMaxSuppression"),h=(0,o.YT)(n,"scores","nonMaxSuppression"),p=(0,a.W)(l,h,r,i,u,c);r=p.maxOutputSize,i=p.iouThreshold,u=p.scoreThreshold,c=p.softNmsSigma;const f={boxes:l,scores:h},d={maxOutputSize:r,iouThreshold:i,scoreThreshold:u,softNmsSigma:c},m=t.T2.runKernel(s.e0f,f,d);return{selectedIndices:m[0],selectedScores:m[1]}}const c=(0,i.op)({nonMaxSuppressionWithScore_:u})},7425:function(e,n,r){r.d(n,{l:function(){return u}});var t=r(43303),s=r(28189),o=r(68712),a=r(62018);
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
async function i(e,n,r,i=.5,u=Number.NEGATIVE_INFINITY,c=0){const l=(0,s.YT)(e,"boxes","nonMaxSuppressionAsync"),h=(0,s.YT)(n,"scores","nonMaxSuppressionAsync"),p=(0,o.W)(l,h,r,i,u,c);r=p.maxOutputSize,i=p.iouThreshold,u=p.scoreThreshold,c=p.softNmsSigma;const f=await Promise.all([l.data(),h.data()]),d=f[0],m=f[1],{selectedIndices:b,selectedScores:g}=(0,t.ut)(d,m,r,i,u,c);return l!==e&&l.dispose(),h!==n&&h.dispose(),{selectedIndices:(0,a.t)(b,"int32"),selectedScores:(0,a.t)(g)}}const u=i},44711:function(e,n,r){r.d(n,{v:function(){return l}});var t=r(67897),s=r(15441),o=r(28189),a=r(45119),i=r(70929),u=r(62302);
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
function c(e,n,r=!1,i=!1){const c=(0,o.YT)(e,"images","resizeBilinear");a.vA(3===c.rank||4===c.rank,(()=>`Error in resizeBilinear: x must be rank 3 or 4, but got rank ${c.rank}.`)),a.vA(2===n.length,(()=>`Error in resizeBilinear: new shape must 2D, but got shape ${n}.`)),a.vA(!1===i||!1===r,(()=>"Error in resizeBilinear: If halfPixelCenters is true, alignCorners must be false."));let l=c,h=!1;3===c.rank&&(h=!0,l=(0,u.t)(c,[1,c.shape[0],c.shape[1],c.shape[2]]));const[]=n,p={images:l},f={alignCorners:r,halfPixelCenters:i,size:n},d=t.T2.runKernel(s.hgw,p,f);return h?(0,u.t)(d,[d.shape[1],d.shape[2],d.shape[3]]):d}const l=(0,i.op)({resizeBilinear_:c})},42954:function(e,n,r){r.d(n,{b:function(){return l}});var t=r(67897),s=r(15441),o=r(28189),a=r(45119),i=r(70929),u=r(62302);
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
function c(e,n,r=!1,i=!1){const c=(0,o.YT)(e,"images","resizeNearestNeighbor");a.vA(3===c.rank||4===c.rank,(()=>`Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank ${c.rank}.`)),a.vA(2===n.length,(()=>`Error in resizeNearestNeighbor: new shape must 2D, but got shape ${n}.`)),a.vA("float32"===c.dtype||"int32"===c.dtype,(()=>"`images` must have `int32` or `float32` as dtype")),a.vA(!1===i||!1===r,(()=>"Error in resizeNearestNeighbor: If halfPixelCenters is true, alignCorners must be false."));let l=c,h=!1;3===c.rank&&(h=!0,l=(0,u.t)(c,[1,c.shape[0],c.shape[1],c.shape[2]]));const[]=n,p={images:l},f={alignCorners:r,halfPixelCenters:i,size:n},d=t.T2.runKernel(s.jOE,p,f);return h?(0,u.t)(d,[d.shape[1],d.shape[2],d.shape[3]]):d}const l=(0,i.op)({resizeNearestNeighbor_:c})},21557:function(e,n,r){r.d(n,{S:function(){return h}});var t=r(28189),s=r(45119),o=r(29809),a=r(79853),i=r(8710),u=r(70929),c=r(62018);
/**
 * @license
 * Copyright 2023 Google LLC.
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
function l(e){const n=(0,t.YT)(e,"image","RGBToGrayscale"),r=n.rank-1,u=n.shape[r];s.vA(n.rank>=2,(()=>`Error in RGBToGrayscale: images must be at least rank 2, but got rank ${n.rank}.`)),s.vA(3===u,(()=>`Error in RGBToGrayscale: last dimension of an RGB image should be size 3, but got size ${u}.`));const l=n.dtype,h=(0,o.w)(n,"float32"),p=(0,c.t)([.2989,.587,.114]);let f;switch(n.rank){case 2:f=(0,a._)("ij,j->i",h,p);break;case 3:f=(0,a._)("ijk,k->ij",h,p);break;case 4:f=(0,a._)("ijkl,l->ijk",h,p);break;case 5:f=(0,a._)("ijklm,m->ijkl",h,p);break;case 6:f=(0,a._)("ijklmn,n->ijklm",h,p);break;default:throw new Error("Not a valid tensor rank.")}return f=(0,i.U)(f,-1),(0,o.w)(f,l)}const h=(0,u.op)({rgbToGrayscale_:l})},64658:function(e,n,r){r.d(n,{x:function(){return c}});var t=r(67897),s=r(15441),o=r(28189),a=r(45119),i=r(70929);
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
function u(e,n,r=0,i=.5){const u=(0,o.YT)(e,"image","rotateWithOffset","float32");a.vA(4===u.rank,(()=>`Error in rotateWithOffset: image must be rank 4,but got rank ${u.rank}.`));const c={image:u},l={radians:n,fillValue:r,center:i},h=t.T2.runKernel(s.BK4,c,l);return h}const c=(0,i.op)({rotateWithOffset_:u})},80525:function(e,n,r){r.d(n,{E:function(){return _}});var t=r(62018),s=r(70929),o=r(29809),a=r(66512),i=r(40758),u=r(56508),c=r(62058),l=r(83791),h=r(37523),p=r(9258),f=r(89359),d=r(77126),m=r(25912),b=r(12151),g=r(96111),T=r(17986),k=r(44645),v=r(74027),x=r(45119),A=r(28189);
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function E(e,n="binary",r=!1,s=.5){const l=(0,A.YT)(e,"image","threshold"),f=.2989,d=.587,b=.114,g=l.shape[0]*l.shape[1];let T,k,E,_,S=(0,p.l)((0,t.t)([s]),255);if(x.vA(3===l.rank,(()=>`Error in threshold: image must be rank 3,but got rank ${l.rank}.`)),x.vA(3===l.shape[2]||1===l.shape[2],(()=>`Error in threshold: image color channel must be equal to 3 or 1but got ${l.shape[2]}.`)),x.vA("int32"===l.dtype||"float32"===l.dtype,(()=>`Error in dtype: image dtype must be int32 or float32,but got dtype ${l.dtype}.`)),x.vA("otsu"===n||"binary"===n,(()=>`Method must be binary or otsu, but was ${n}`)),3===l.shape[2]){[T,k,E]=(0,a.l)(l,[1,1,1],-1);const e=(0,p.l)(T,f),n=(0,p.l)(k,d),r=(0,p.l)(E,b);_=(0,h.W)((0,h.W)(e,n),r)}else _=e;if("otsu"===n){const e=(0,i.H)((0,o.w)((0,m.L)(_),"int32"),(0,v.O)([]),256);S=y(e,g)}const z=r?(0,u.I)(_,S):(0,c.r)(_,S),N=(0,o.w)((0,p.l)(z,255),"int32");return N}function y(e,n){let r,s,o,a,i,u,m=(0,t.t)([-1]),v=(0,t.t)([0]),x=(0,t.t)([0]);for(let A=0;A<e.size-1;A++){r=(0,T.d)(e,0,A+1),s=(0,T.d)(e,A+1),i=(0,f.y)((0,l.c)(r),n),u=(0,f.y)((0,l.c)(s),n);const E=(0,l.c)((0,p.l)(r,(0,k.y)(0,r.size)));o=(0,f.y)(E,(0,l.c)(r));const y=(0,g.G)(s.shape,r.size),_=(0,h.W)((0,k.y)(0,s.size),y),S=(0,p.l)(s,_);a=(0,f.y)((0,l.c)(S),(0,l.c)(s));const z=(0,d.j)(o,a),N=(0,d.j)(o,a),Y=(0,p.l)(i,u);x=(0,p.l)((0,p.l)(Y,z),N);const w=(0,c.r)(x,v);v=(0,b._)(w,x,v),m=(0,b._)(w,(0,t.t)([A]),m)}return m}const _=(0,s.op)({threshold_:E})},1242:function(e,n,r){r.d(n,{p:function(){return c}});var t=r(67897),s=r(15441),o=r(28189),a=r(45119),i=r(70929);
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
function u(e,n,r="nearest",i="constant",u=0,c){const l=(0,o.YT)(e,"image","transform","float32"),h=(0,o.YT)(n,"transforms","transform","float32");a.vA(4===l.rank,(()=>`Error in transform: image must be rank 4,but got rank ${l.rank}.`)),a.vA(2===h.rank&&(h.shape[0]===l.shape[0]||1===h.shape[0])&&8===h.shape[1],(()=>"Error in transform: Input transform should be batch x 8 or 1 x 8")),a.vA(null==c||2===c.length,(()=>`Error in transform: outputShape must be [height, width] or null, but got ${c}.`));const p={image:l,transforms:h},f={interpolation:r,fillMode:i,fillValue:u,outputShape:c};return t.T2.runKernel(s.dLy,p,f)}const c=(0,i.op)({transform_:u})},61303:function(e,n,r){r.d(n,{M:function(){return l}});var t=r(67897),s=r(15441),o=r(30565),a=r(28189),i=r(62198),u=r(70929);
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
function c(e,n){let r=(0,a.YT)(e,"a","less","string_or_numeric"),u=(0,a.YT)(n,"b","less","string_or_numeric");[r,u]=(0,o.h0)(r,u),(0,i.assertAndGetBroadcastShape)(r.shape,u.shape);const c={a:r,b:u};return t.T2.runKernel(s.mIA,c)}const l=(0,u.op)({less_:c})},56508:function(e,n,r){r.d(n,{I:function(){return l}});var t=r(67897),s=r(15441),o=r(30565),a=r(28189),i=r(62198),u=r(70929);
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
function c(e,n){let r=(0,a.YT)(e,"a","lessEqual","string_or_numeric"),u=(0,a.YT)(n,"b","lessEqual","string_or_numeric");[r,u]=(0,o.h0)(r,u),(0,i.assertAndGetBroadcastShape)(r.shape,u.shape);const c={a:r,b:u};return t.T2.runKernel(s.CwD,c)}const l=(0,u.op)({lessEqual_:c})}}]);
//# sourceMappingURL=chunk-vendors-aab63fee.5ccde42a.js.map