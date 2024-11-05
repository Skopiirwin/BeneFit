"use strict";(self["webpackChunkbenefit"]=self["webpackChunkbenefit"]||[]).push([[4326],{30429:function(n,t,e){
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
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
var r;function u(n,t,e){let r=new Array;if(null==e&&null==t)return r;if(null==t)while(r.length<n+e.length)r.push(-1);else r=t.slice();if(null==e)return r;if(n+e.length!==r.length)throw new Error(`rt input.shape and shape=${t} are incompatible: rt input.rank = ${n+e.length}, but shape.rank = ${r.length}`);for(let u=1;u<e.length;++u){const o=e[u],i=r[r.length-e.length+u],a=r[i];if(o>=0)if(a>=0){if(a!==o)throw new Error(`rt input.shape and shape=${t} are incompatible: rt input.shape[${u+n}] = ${o} but shape[${u+n}] = ${a}`)}else r[i]=o}return r}function o(n){const t={FIRST_DIM_SIZE:r.FIRST_DIM_SIZE,VALUE_ROWIDS:r.VALUE_ROWIDS,ROW_LENGTHS:r.ROW_LENGTHS,ROW_SPLITS:r.ROW_SPLITS,ROW_LIMITS:r.ROW_LIMITS,ROW_STARTS:r.ROW_STARTS},e=[];for(const r of n){if(!(r in t))break;e.push(t[r])}return e}function i(n){return 0===n.length?0:n[0]===r.FIRST_DIM_SIZE?n.length-1:n.length}function a(n,t){if(null==n||null==t)return;const e=n.length,r=t.length;if(e>=r)throw new Error(`defaultValue.shape=${n} and ragged tensor flatValues.shape=${t}, are incompatible: defaultValue.rank = ${e} must be less than ragged tensor input flatValues.rank = ${r})`);for(let u=0;u<Math.min(e,r-1);++u){const e=n[u],r=t[u+1];if(e>=0&&r>=0&&1!==e&&e!==r)throw new Error(`defaultValue.shape=${n}, and ragged tensor input flatValues.shape=${t} are incompatible: defaultValue.shape[${u-n.length}] = ${e} but ragged tensor input.flatValues.shape[${u-n.length}] = ${r}`)}}e.d(t,{Dw:function(){return i},U0:function(){return o},mP:function(){return a},tl:function(){return r},z4:function(){return u}}),function(n){n[n["FIRST_DIM_SIZE"]=0]="FIRST_DIM_SIZE",n[n["VALUE_ROWIDS"]=1]="VALUE_ROWIDS",n[n["ROW_LENGTHS"]=2]="ROW_LENGTHS",n[n["ROW_SPLITS"]=3]="ROW_SPLITS",n[n["ROW_LIMITS"]=4]="ROW_LIMITS",n[n["ROW_STARTS"]=5]="ROW_STARTS"}(r||(r={}))},44645:function(n,t,e){e.d(t,{y:function(){return o}});var r=e(67897),u=e(15441);
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
function o(n,t,e=1,o="float32"){if(0===e)throw new Error("Cannot have a step of zero");const i={start:n,stop:t,step:e,dtype:o};return r.T2.runKernel(u.Q6t,{},i)}},1902:function(n,t,e){e.d(t,{x:function(){return l}});var r=e(67897),u=e(15441),o=e(28189),i=e(70929);
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
function a(n){const t=(0,o.YT)(n,"input","real"),e={input:t};return r.T2.runKernel(u.LRy,e)}const l=(0,i.op)({real_:a})},29827:function(n,t,e){e.d(t,{m:function(){return u},x:function(){return o}});var r=e(45119);
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
 */const u=30;function o(n){return n<=u?n:(0,r.lK)(n,Math.floor(Math.sqrt(n)))}},90112:function(n,t,e){e.d(t,{V:function(){return l}});var r=e(67897),u=e(15441),o=e(28189),i=e(70929);
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
function a(n){const t=(0,o.YT)(n,"x","relu"),e={x:t};return r.T2.runKernel(u.fUj,e)}const l=(0,i.op)({relu_:a})},83732:function(n,t,e){e.d(t,{j:function(){return l}});var r=e(67897),u=e(15441),o=e(28189),i=e(70929);
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
function a(n){const t=(0,o.YT)(n,"x","relu6"),e={x:t};return r.T2.runKernel(u.P_L,e)}const l=(0,i.op)({relu6_:a})},62302:function(n,t,e){e.d(t,{t:function(){return l}});var r=e(67897),u=e(15441),o=e(28189),i=e(70929);
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
function a(n,t){const e=(0,o.YT)(n,"x","reshape","string_or_numeric"),i={x:e},a={shape:t};return r.T2.runKernel(u.R23,i,a)}const l=(0,i.op)({reshape_:a})},53262:function(n,t,e){e.d(t,{B:function(){return l}});var r=e(67897),u=e(15441),o=e(28189),i=e(70929);
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
function a(n,t){const e=(0,o.YT)(n,"x","reverse"),i={x:e},a={dims:t};return r.T2.runKernel(u.D7i,i,a)}const l=(0,i.op)({reverse_:a})},29192:function(n,t,e){
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
function r(n,t,e){const r=e*("number"===typeof n?n:n[0]),u=t*("number"===typeof n?n:n[1]);return[r,u]}e.d(t,{H:function(){return r}})}}]);
//# sourceMappingURL=chunk-vendors-3d8e44a4.6bdc780d.js.map