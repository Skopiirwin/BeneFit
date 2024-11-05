"use strict";(self["webpackChunkbenefit"]=self["webpackChunkbenefit"]||[]).push([[2391],{63551:function(e,n,t){t.d(n,{o:function(){return a}});var s=t(67897),r=t(15441),u=t(28189),o=t(70929);
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
function i(e,n,t,o){const i=(0,u.YT)(e,"indices","sparseFillEmptyRows","int32"),a=(0,u.YT)(n,"values","sparseFillEmptyRows"),p=(0,u.YT)(t,"denseShape","sparseFillEmptyRows","int32"),c=(0,u.YT)(o,"defaultValue","sparseFillEmptyRows",a.dtype);if(2!==i.rank)throw new Error(`Indices should be Tensor2D but received shape\n        ${i.shape}`);if(1!==a.rank)throw new Error(`Values should be Tensor1D but received shape ${a.shape}`);if(1!==p.rank)throw new Error(`Dense shape should be Tensor1D but received shape ${p.shape}`);if(0!==c.rank)throw new Error(`Default value should be a scalar but received shape ${c.shape}`);const h={indices:i,values:a,denseShape:p,defaultValue:c},d=s.T2.runKernel(r.C8s,h);return{outputIndices:d[0],outputValues:d[1],emptyRowIndicator:d[2],reverseIndexMap:d[3]}}const a=(0,o.op)({sparseFillEmptyRows_:i})},77618:function(e,n,t){
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
function s(e){return`Received SparseTensor with denseShape[0] = 0 but\n  indices.shape[0] = ${e}`}function r(e,n){return`indices(${e}, 0) is invalid: ${n} < 0`}function u(e,n,t){return`indices(${e}, 0) is invalid: ${n} >= ${t}`}t.d(n,{P_:function(){return s},U8:function(){return r},zP:function(){return u}})},16112:function(e,n,t){t.d(n,{Z:function(){return a}});var s=t(67897),r=t(15441),u=t(28189),o=t(70929);
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
function i(e,n,t){const o=(0,u.YT)(e,"inputIndices","sparseReshape","int32"),i=(0,u.YT)(n,"inputShape","sparseReshape","int32"),a=(0,u.YT)(t,"newShape","sparseReshape","int32");if(2!==o.rank)throw new Error(`Input indices should be Tensor2D but received shape\n        ${o.shape}`);if(1!==i.rank)throw new Error(`Input shape should be Tensor1D but received shape ${i.shape}`);if(1!==a.rank)throw new Error(`New shape should be Tensor1D but received shape ${a.shape}`);const p={inputIndices:o,inputShape:i,newShape:a},c=s.T2.runKernel(r.BoJ,p);return{outputIndices:c[0],outputShape:c[1]}}const a=(0,o.op)({sparseReshape_:i})},83255:function(e,n,t){t.d(n,{M5:function(){return u},Ni:function(){return i},Pz:function(){return o},pC:function(){return a},yM:function(){return r}});var s=t(45119);
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
 */function r(e,n){return`only one output dimension may be -1, not both ${e} and ${n}`}function u(e,n){return`size ${e} must be non-negative, not ${n}`}function o(){return"reshape cannot infer the missing input size for an empty tensor unless all specified input sizes are non-zero"}function i(e,n){const t=(0,s.Ze)(e),r=(0,s.Ze)(n);return`Input to reshape is a SparseTensor with ${t}\n  dense values, but the requested shape requires a multiple of ${r}. inputShape=${e} outputShape= ${n}`}function a(e,n){const t=(0,s.Ze)(e),r=(0,s.Ze)(n);return`Input to reshape is a tensor with ${t} dense values, but the requested shape has ${r}. inputShape=${e} outputShape=${n}`}},34899:function(e,n,t){t.d(n,{t:function(){return a}});var s=t(67897),r=t(15441),u=t(28189),o=t(70929);
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
function i(e,n,t){const o=(0,u.YT)(e,"data","sparseSegmentMean"),i=(0,u.YT)(n,"indices","sparseSegmentMean","int32"),a=(0,u.YT)(t,"segmentIds","sparseSegmentMean","int32");if(o.rank<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(1!==i.rank)throw new Error(`Indices should be Tensor1D but received shape\n          ${i.shape}`);if(1!==a.rank)throw new Error(`Segment ids should be Tensor1D but received shape\n          ${a.shape}`);const p={data:o,indices:i,segmentIds:a};return s.T2.runKernel(r.L6G,p)}const a=(0,o.op)({sparseSegmentMean_:i})},55880:function(e,n,t){
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
function s(){return"segment ids must be >= 0"}function r(){return"segment ids are not increasing"}function u(e,n){return`Segment id ${e} out of range [0, ${n}), possibly because segmentIds input is not sorted.`}function o(e,n,t){return`Bad: indices[${e}] == ${n} out of range [0, ${t})`}t.d(n,{AP:function(){return u},dS:function(){return o},tb:function(){return r},u1:function(){return s}})},49119:function(e,n,t){t.d(n,{F:function(){return a}});var s=t(67897),r=t(15441),u=t(28189),o=t(70929);
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
function i(e,n,t){const o=(0,u.YT)(e,"data","sparseSegmentSum"),i=(0,u.YT)(n,"indices","sparseSegmentSum","int32"),a=(0,u.YT)(t,"segmentIds","sparseSegmentSum","int32");if(o.rank<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(1!==i.rank)throw new Error(`Indices should be Tensor1D but received shape\n         ${i.shape}`);if(1!==a.rank)throw new Error(`Segment ids should be Tensor1D but received shape\n         ${a.shape}`);const p={data:o,indices:i,segmentIds:a};return s.T2.runKernel(r.DvZ,p)}const a=(0,o.op)({sparseSegmentSum_:i})},41361:function(e,n,t){t.d(n,{h:function(){return a}});var s=t(67897),r=t(15441),u=t(45119),o=t(70929);
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
function i(e){(0,u.vA)("complex64"===e.dtype,(()=>`The dtype for tf.spectral.fft() must be complex64 but got ${e.dtype}.`));const n={input:e};return s.T2.runKernel(r.rGP,n)}const a=(0,o.op)({fft_:i})},13108:function(e,n,t){t.d(n,{K:function(){return a}});var s=t(67897),r=t(15441),u=t(45119),o=t(70929);
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
function i(e){(0,u.vA)("complex64"===e.dtype,(()=>`The dtype for tf.spectral.ifft() must be complex64 but got ${e.dtype}.`));const n={input:e};return s.T2.runKernel(r.OAQ,n)}const a=(0,o.op)({ifft_:i})},22292:function(e,n,t){t.d(n,{g:function(){return m}});var s=t(37148),r=t(25030),u=t(35040),o=t(9258),i=t(70929),a=t(1902),p=t(62302),c=t(53262),h=t(45702),d=t(17986),f=t(13108);
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
function l(e){const n=e.shape[e.shape.length-1],t=e.size/n;let i;if(n<=2){const s=(0,p.t)(e,[t,n]);i=(0,f.K)(s)}else{const l=[t,2*(n-1)],m=(0,p.t)((0,a.x)(e),[t,n]),b=(0,p.t)((0,u.n)(e),[t,n]),w=(0,c.B)((0,d.d)(m,[0,1],[t,n-2]),1),v=(0,o.l)((0,c.B)((0,d.d)(b,[0,1],[t,n-2]),1),(0,h.d)(-1)),$=(0,r.x)([m,w],1),g=(0,r.x)([b,v],1),T=(0,p.t)((0,s.f)($,g),[l[0],l[1]]);i=(0,f.K)(T)}if(i=(0,a.x)(i),3===e.rank&&0!==e.shape[0]){const n=i,t=e.shape[0];i=(0,p.t)(i,[t,i.shape[0]/t,i.shape[1]]),n.dispose()}return i}const m=(0,i.op)({irfft_:l})},8775:function(e,n,t){t.d(n,{z:function(){return b}});var s=t(45119),r=t(37148),u=t(25030),o=t(35040),i=t(70929),a=t(1902),p=t(62302),c=t(17986),h=t(66512),d=t(42855),f=t(55537),l=t(41361);
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
function m(e,n){(0,s.vA)("float32"===e.dtype,(()=>`The dtype for rfft() must be real value but got ${e.dtype}`));let t=e.shape[e.shape.length-1];const i=e.size/t;let m;if(null!=n&&n<t){const s=e.shape.map((e=>0)),r=e.shape.map((e=>e));r[e.shape.length-1]=n,m=(0,c.d)(e,s,r),t=n}else if(null!=n&&n>t){const s=e.shape.map((e=>e));s[e.shape.length-1]=n-t,m=(0,u.x)([e,(0,d.U)(s)],e.shape.length-1),t=n}else m=e;const b=(0,f.P)(m),w=(0,p.t)((0,r.f)(m,b),[i,t]),v=(0,l.h)(w),$=Math.floor(t/2)+1,g=(0,a.x)(v),T=(0,o.n)(v),S=(0,h.l)(g,[$,t-$],g.shape.length-1),y=(0,h.l)(T,[$,t-$],T.shape.length-1),k=m.shape.slice();return k[m.shape.length-1]=$,(0,p.t)((0,r.f)(S[0],y[0]),k)}const b=(0,i.op)({rfft_:m})}}]);
//# sourceMappingURL=chunk-vendors-e9727dea.c4fb3c2a.js.map