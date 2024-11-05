"use strict";(self["webpackChunkbenefit"]=self["webpackChunkbenefit"]||[]).push([[7688],{66512:function(n,e,t){t.d(e,{l:function(){return i}});var r=t(67897),s=t(15441),u=t(28189),o=t(70929);
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
function c(n,e,t=0){const o=(0,u.YT)(n,"x","split"),c={x:o},i={numOrSizeSplits:e,axis:t};return r.T2.runKernel(s.Blb,c,i)}const i=(0,o.op)({split_:c})},57303:function(n,e,t){t.d(e,{z:function(){return s}});var r=t(45119);function s(n,e,t=0){let s=[];if("number"===typeof e)(0,r.vA)(n.shape[t]%e===0,(()=>"Number of splits must evenly divide the axis.")),s=new Array(e).fill(n.shape[t]/e);else{const u=e.reduce(((n,e)=>(-1===e&&(n+=1),n)),0);(0,r.vA)(u<=1,(()=>"There should be only one negative value in split array."));const o=e.indexOf(-1);if(-1!==o){const r=e.reduce(((n,e)=>e>0?n+e:n));e[o]=n.shape[t]-r}(0,r.vA)(n.shape[t]===e.reduce(((n,e)=>n+e)),(()=>"The sum of sizes must match the size of the axis dimension.")),s=e}return s}},79348:function(n,e,t){t.d(e,{R:function(){return i}});var r=t(67897),s=t(15441),u=t(28189),o=t(70929);
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
function c(n){const e=(0,u.YT)(n,"x","sqrt","float32"),t={x:e};return r.T2.runKernel(s.dFH,t)}const i=(0,o.op)({sqrt_:c})},45793:function(n,e,t){t.d(e,{E:function(){return c}});var r=t(67897),s=t(28189),u=t(70929);
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
function o(n){const e=(0,s.YT)(n,"x","square"),t={};return r.T2.runKernel("Square",{x:e},t)}const c=(0,u.op)({square_:o})},53427:function(n,e,t){t.d(e,{P:function(){return f}});var r=t(67897),s=t(15441),u=t(30565),o=t(28189),c=t(62198),i=t(70929);
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
function a(n,e){let t=(0,o.YT)(n,"a","squaredDifference"),i=(0,o.YT)(e,"b","squaredDifference");[t,i]=(0,u.h0)(t,i),(0,c.assertAndGetBroadcastShape)(t.shape,i.shape);const a={a:t,b:i},f={};return r.T2.runKernel(s.Ddj,a,f)}const f=(0,i.op)({squaredDifference_:a})},5932:function(n,e,t){t.d(e,{r:function(){return i}});var r=t(28189),s=t(45119),u=t(70929),o=t(62302);
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
function c(n,e){const t=(0,r.YT)(n,"x","squeeze","string_or_numeric");return(0,o.t)(t,(0,s.gx)(t.shape,e).newShape)}const i=(0,u.op)({squeeze_:c})},54268:function(n,e,t){t.d(e,{t:function(){return a}});var r=t(67897),s=t(15441),u=t(28189),o=t(45119),c=t(70929);
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
function i(n,e=0){const t=(0,u.j1)(n,"tensors","stack","string_or_numeric");o.vA(t.length>=1,(()=>"Pass at least one tensor to tf.stack")),t.length>0&&o.vA(e<=t[0].rank,(()=>"Axis must be <= rank of the tensor"));const c=t,i={axis:e};return r.T2.runKernel(s.mM$,c,i)}const a=(0,c.op)({stack_:i})},10700:function(n,e,t){t.d(e,{P:function(){return i}});var r=t(67897),s=t(15441),u=t(28189),o=t(70929);
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
function c(n,e=0){const t=(0,u.YT)(n,"x","step"),o={x:t},c={alpha:e};return r.T2.runKernel(s.pnw,o,c)}const i=(0,o.op)({step_:c})}}]);
//# sourceMappingURL=chunk-vendors-d233abe7.b2693365.js.map