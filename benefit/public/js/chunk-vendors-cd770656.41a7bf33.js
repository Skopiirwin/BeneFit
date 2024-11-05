"use strict";(self["webpackChunkbenefit"]=self["webpackChunkbenefit"]||[]).push([[3317],{77126:function(e,r,n){n.d(r,{j:function(){return l}});var t=n(67897),o=n(15441),s=n(30565),a=n(28189),u=n(70929);
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
function i(e,r){let n=(0,a.YT)(e,"a","sub"),u=(0,a.YT)(r,"b","sub");[n,u]=(0,s.h0)(n,u);const i={a:n,b:u};return t.T2.runKernel(o.PbM,i)}const l=(0,u.op)({sub_:i})},83791:function(e,r,n){n.d(r,{c:function(){return l}});var t=n(67897),o=n(15441),s=n(28189),a=n(29809),u=n(70929);
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
function i(e,r=null,n=!1){let u=(0,s.YT)(e,"x","sum");"bool"===u.dtype&&(u=(0,a.w)(u,"int32"));const i={x:u},l={axis:r,keepDims:n};return t.T2.runKernel(o.WuN,i,l)}const l=(0,u.op)({sum_:i})},74027:function(e,r,n){n.d(r,{O:function(){return s}});var t=n(28189),o=n(19171);
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
function s(e,r,n){const s=(0,t.MZ)(e,n);return(0,o.Q)(e,r,s,n)}},62018:function(e,r,n){n.d(r,{t:function(){return a}});var t=n(28189),o=n(45119),s=n(19171);
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
function a(e,r){(0,o.HO)(e);const n=(0,t.MZ)(e,r);if(1!==n.length)throw new Error("tensor1d() requires values to be a flat/TypedArray");const a=null;return(0,s.Q)(e,a,n,r)}},18941:function(e,r,n){n.d(r,{K:function(){return a}});var t=n(28189),o=n(45119),s=n(19171);
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
function a(e,r,n){if((0,o.HO)(e),null!=r&&2!==r.length)throw new Error("tensor2d() requires shape to have two numbers");const a=(0,t.MZ)(e,n);if(2!==a.length&&1!==a.length)throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(1===a.length&&null==r)throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return(0,s.Q)(e,r,a,n)}},19171:function(e,r,n){n.d(r,{Q:function(){return u}});var t=n(67897),o=n(52046),s=n(45119),a=n(89783);
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
function u(e,r,n,u){if(null==u)u=(0,s.X$)(e);else if("complex64"===u)throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if((0,o.Nw)(e)||(0,o.Oj)(e)){if("float32"!==u&&"int32"!==u)throw new Error(`Creating tensor from GPU data only supports 'float32'|'int32' dtype, while the dtype is ${u}.`);return t.T2.backend.createTensorFromGPUData(e,r||n,u)}if(!(0,a.isTypedArray)(e)&&!Array.isArray(e)&&"number"!==typeof e&&"boolean"!==typeof e&&"string"!==typeof e)throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(null!=r){(0,s.SA)(r);const e=(0,s.Ze)(r),t=(0,s.Ze)(n);(0,s.vA)(e===t,(()=>`Based on the provided shape, [${r}], the tensor should have ${e} values but has ${t}`));for(let o=0;o<n.length;++o){const e=n[o],t=o!==n.length-1||e!==(0,s.Ze)(r.slice(o));(0,s.vA)(n[o]===r[o]||!t,(()=>`Error creating a new Tensor. Inferred shape (${n}) does not match the provided shape (${r}). `))}}return(0,a.isTypedArray)(e)||Array.isArray(e)||(e=[e]),r=r||n,e="string"!==u?(0,a.toTypedArray)(e,u):(0,a.flatten)(e,[],!0),t.T2.makeTensor(e,r,u)}}}]);
//# sourceMappingURL=chunk-vendors-cd770656.41a7bf33.js.map