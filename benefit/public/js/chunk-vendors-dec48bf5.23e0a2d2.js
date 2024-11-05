"use strict";(self["webpackChunkbenefit"]=self["webpackChunkbenefit"]||[]).push([[9232],{97870:function(t,n,e){e.d(n,{C:function(){return r}});var o=e(9495);
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
 */function r(t,n){Array.isArray(t)||(t=[t]),t.forEach((t=>{null!=t&&o.ZSL.assert("complex64"!==t.dtype,(()=>`${n} does not support complex64 tensors in the CPU backend.`))}))}},62680:function(t,n,e){e.d(n,{dH:function(){return a}});var o=e(9495),r=e(97870);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function a(t){const n=new Float32Array(t.length);for(let e=0;e<t.length;++e)n[e]=Math.abs(t[e]);return n}const s=t=>{const{x:n}=t.inputs,e=t.backend;(0,r.C)(n,"abs");let s=new Float32Array(o.ZSL.sizeFromShape(n.shape));const u=e.data.get(n.dataId).values;return s=a(u),e.makeOutput(s,n.shape,n.dtype)};o.ljI},95315:function(t,n,e){e.d(n,{mx:function(){return s}});var o=e(9495),r=e(8195),a=e(98880);
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
const s=(0,r.Z)(((t,n)=>t+n)),u=(0,a.B)(((t,n,e,o)=>({real:t+e,imag:n+o}))),c=(0,a.j)(o.OMN,s,u);o.OMN},86995:function(t,n,e){e.d(n,{N:function(){return a},X:function(){return r}});var o=e(9495);
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
 */function r(t,n,e,r,a){const s=o.ZSL.sizeFromShape(r),u=o.ZSL.makeZerosTypedArray(a,e);for(let o=0;o<t.length;o++){const e=t[o];if(e<0)throw new Error("Input x must be non-negative!");e>=a||(u[e]+=s>0?n[o]:1)}return u}function a(t,n,e,r=!1){const a=t.shape[0],s=t.shape[1],u=(0,o.ra8)([a,e],n.dtype);for(let o=0;o<a;o++)for(let a=0;a<s;a++){const s=t.get(o,a);if(s<0)throw new Error("Input x must be non-negative!");s>=e||(r?u.set(1,o,s):n.size>0?u.set(u.get(o,s)+n.get(o,a),o,s):u.set(u.get(o,s)+1,o,s))}return u}},94890:function(t,n,e){e.d(n,{f6:function(){return s}});var o=e(9495),r=e(8195),a=e(98880);
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
const s=(0,r.Z)(((t,n)=>t&n)),u=(0,a.j)(o.HNs,s);o.HNs},13713:function(t,n,e){e.d(n,{ct:function(){return i},wg:function(){return f}});var o=e(9495),r=e(8195),a=e(11317),s=e(89436),u=e(46936),c=e(85806);
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
function i(t,n,e,a){if("int32"===a){const e=Int32Array.from(t);return[n,"int32",e]}if("bool"===a){const a=o.ZSL.toTypedArray([0],e),[s,u]=(0,r.Z)(((t,n)=>t!==n?1:0))(n,[],t,a,"bool");return[u,"bool",s]}throw new Error(`Error in Cast: failed to cast ${e} to ${a}`)}function f(t){const{inputs:n,backend:e,attrs:r}=t,{x:d}=n,{dtype:p}=r;if("complex64"===p){if("complex64"===d.dtype)return(0,u.D)({inputs:{x:d},backend:e});const t=(0,a.U)(e,d.shape,d.dtype),n=f({inputs:{x:d},backend:e,attrs:{dtype:"float32"}}),o=(0,s.f)({inputs:{real:n,imag:t},backend:e});return e.disposeIntermediateTensorInfo(t),e.disposeIntermediateTensorInfo(n),o}if("complex64"===d.dtype){const t=(0,c.x)({inputs:{input:d},backend:e}),n=f({inputs:{x:t},backend:e,attrs:{dtype:p}});return e.disposeIntermediateTensorInfo(t),n}if(!o.ZSL.hasEncodingLoss(d.dtype,p)){const t=(0,u.D)({inputs:{x:d},backend:e});return{dataId:t.dataId,shape:t.shape,dtype:p}}const l=e.data.get(d.dataId).values,[h,m,g]=i(l,d.shape,d.dtype,p);return e.makeTensorInfo(h,m,g)}o.KXH},14759:function(t,n,e){e.d(n,{YG:function(){return s}});var o=e(9495),r=e(45705),a=e(21694);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const s=(0,r.o)((t=>Math.ceil(t))),u=(0,a.F)(o.QDP,s);o.QDP},89436:function(t,n,e){e.d(n,{f:function(){return r}});var o=e(9495);
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
 */function r(t){const{inputs:n,backend:e}=t,{real:o,imag:r}=n,a=e.data.get(o.dataId).values,s=e.data.get(r.dataId).values,u=e.makeTensorInfo(o.shape,"complex64"),c=e.data.get(u.dataId);return c.complexTensorInfos={real:e.makeTensorInfo(o.shape,"float32",a),imag:e.makeTensorInfo(r.shape,"float32",s)},u}o.pr3},97763:function(t,n,e){e.d(n,{h:function(){return r}});var o=e(9495);
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
 */function r(t,n,e,r){const a=o.ZSL.getArrayFromDType(e,o.ZSL.sizeFromShape(n));if(r&&"string"!==e){let n=0;t.forEach((t=>{const e=o.ZSL.sizeFromShape(t.shape);a.set(t.vals,n),n+=e}))}else{let r=0;t.forEach((t=>{const s="string"===e?o.C0T.fromUint8ToStringArray(t.vals):t.vals;let u=0;for(let e=0;e<t.shape[0];++e){const o=e*n[1]+r;for(let n=0;n<t.shape[1];++n)a[o+n]=s[u++]}r+=t.shape[1]}))}return a}},99292:function(t,n,e){e.d(n,{z3:function(){return s}});var o=e(9495),r=e(8195),a=e(98880);
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
const s=(0,r.Z)(((t,n)=>t===n?1:0)),u=(0,a.j)(o.BRl,s,null,"bool");o.BRl},66423:function(t,n,e){e.d(n,{sG:function(){return s}});var o=e(9495),r=e(45705),a=e(21694);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const s=(0,r.o)((t=>Math.exp(t))),u=(0,a.F)(o.ox3,s,"float32");o.ox3},26789:function(t,n,e){e.d(n,{uM:function(){return s}});var o=e(9495),r=e(45705),a=e(21694);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const s=(0,r.o)((t=>Math.expm1(t))),u=(0,a.F)(o.ybj,s);o.ybj},85526:function(t,n,e){e.d(n,{vS:function(){return s}});var o=e(9495),r=e(45705),a=e(21694);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const s=(0,r.o)((t=>Math.floor(t))),u=(0,a.F)(o.ZgB,s);o.ZgB}}]);
//# sourceMappingURL=chunk-vendors-dec48bf5.23e0a2d2.js.map