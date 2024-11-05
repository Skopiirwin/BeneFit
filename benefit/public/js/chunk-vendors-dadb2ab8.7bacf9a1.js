"use strict";(self["webpackChunkbenefit"]=self["webpackChunkbenefit"]||[]).push([[2939],{68712:function(n,r,t){t.d(r,{W:function(){return o}});var e=t(45119);
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
 */function o(n,r,t,o,i,u){null==o&&(o=.5),null==i&&(i=Number.NEGATIVE_INFINITY),null==u&&(u=0);const a=n.shape[0];return t=Math.min(t,a),e.vA(0<=o&&o<=1,(()=>`iouThreshold must be in [0, 1], but was '${o}'`)),e.vA(2===n.rank,(()=>`boxes must be a 2D tensor, but was of rank '${n.rank}'`)),e.vA(4===n.shape[1],(()=>`boxes must have 4 columns, but 2nd dimension was ${n.shape[1]}`)),e.vA(1===r.rank,(()=>"scores must be a 1D tensor")),e.vA(r.shape[0]===a,(()=>`scores has incompatible shape with boxes. Expected ${a}, but was ${r.shape[0]}`)),e.vA(0<=u&&u<=1,(()=>`softNmsSigma must be in [0, 1], but was '${u}'`)),{maxOutputSize:t,iouThreshold:o,scoreThreshold:i,softNmsSigma:u}}},92596:function(n,r,t){t.d(r,{x:function(){return w}});var e=t(28189),o=t(45119),i=t(4888),u=t(21078),a=t(41938),s=t(57436),c=t(70929),l=t(98990),f=t(62302),h=t(45702),p=t(79348),d=t(45793),m=t(83791);
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
function b(n,r="euclidean",t=null,i=!1){n=(0,e.YT)(n,"x","norm");const a=v(n,r,t);let s=a.shape;if(i){const r=(0,o.Y6)(t,n.shape);s=u.SM(a.shape,r)}return(0,f.t)(a,s)}function v(n,r,t=null){if(0===n.rank)return(0,i.t)(n);if(1!==n.rank&&null===t)return v((0,f.t)(n,[-1]),r,t);if(1===n.rank||"number"===typeof t||Array.isArray(t)&&1===t.length){if(1===r)return(0,m.c)((0,i.t)(n),t);if(r===1/0)return(0,a.T)((0,i.t)(n),t);if(r===-1/0)return(0,s.j)((0,i.t)(n),t);if("euclidean"===r||2===r)return(0,p.R)((0,m.c)((0,l.n)((0,i.t)(n),(0,h.d)(2,"int32")),t));throw new Error(`Error in norm: invalid ord value: ${r}`)}if(Array.isArray(t)&&2===t.length){if(1===r)return(0,a.T)((0,m.c)((0,i.t)(n),t[0]),t[1]-1);if(r===1/0)return(0,a.T)((0,m.c)((0,i.t)(n),t[1]),t[0]);if(r===-1/0)return(0,s.j)((0,m.c)((0,i.t)(n),t[1]),t[0]);if("fro"===r||"euclidean"===r)return(0,p.R)((0,m.c)((0,d.E)(n),t));throw new Error(`Error in norm: invalid ord value: ${r}`)}throw new Error(`Error in norm: invalid axis: ${t}`)}const w=(0,c.op)({norm_:b})},42118:function(n,r,t){t.d(r,{E:function(){return l}});var e=t(67897),o=t(15441),i=t(30565),u=t(28189),a=t(62198),s=t(70929);
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
function c(n,r){let t=(0,u.YT)(n,"a","notEqual","string_or_numeric"),s=(0,u.YT)(r,"b","notEqual","string_or_numeric");[t,s]=(0,i.h0)(t,s),(0,a.assertAndGetBroadcastShape)(t.shape,s.shape);const c={a:t,b:s};return e.T2.runKernel(o.ylV,c)}const l=(0,s.op)({notEqual_:c})},61411:function(n,r,t){t.d(r,{S:function(){return a}});var e=t(67897),o=t(45119),i=t(37148),u=t(42855);
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
function a(n,r="float32"){if((0,o.SA)(n),"complex64"===r){const r=a(n,"float32"),t=(0,u.U)(n,"float32");return(0,i.f)(r,t)}const t=(0,o.FZ)((0,o.Ze)(n),r);return e.T2.makeTensor(t,n,r)}},70929:function(n,r,t){t.d(r,{op:function(){return u}});var e=t(67897),o=t(45119);
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
const i="__op";function u(n){const r=Object.keys(n);if(1!==r.length)throw new Error(`Please provide an object with a single key (operation name) mapping to a function. Got an object with ${r.length} keys.`);let t=r[0];const u=n[t];t.endsWith("_")&&(t=t.substring(0,t.length-1)),t+=i;const a=(...n)=>{e.T2.startScope(t);try{const r=u(...n);return(0,o.yL)(r)&&console.error("Cannot return a Promise inside of tidy."),e.T2.endScope(r),r}catch(r){throw e.T2.endScope(null),r}};return Object.defineProperty(a,"name",{value:t,configurable:!0}),a}}}]);
//# sourceMappingURL=chunk-vendors-dadb2ab8.7bacf9a1.js.map