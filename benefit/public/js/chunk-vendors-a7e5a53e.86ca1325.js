"use strict";(self["webpackChunkbenefit"]=self["webpackChunkbenefit"]||[]).push([[1201],{73816:function(e,n,t){t.d(n,{m:function(){return o}});var s=t(9495);
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
 */const a=s.kpo.c7;function r(e){s.C0T.warn("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");const{inputs:n,backend:t,attrs:r}=e,{boxes:o,scores:c}=n,{maxOutputSize:u,iouThreshold:d,scoreThreshold:i}=r,p=t.readSync(o.dataId),l=t.readSync(c.dataId),{selectedIndices:k}=a(p,l,u,d,i);return t.makeTensorInfo([k.length],"int32",new Int32Array(k))}const o={kernelName:s.SDM,backendName:"webgl",kernelFunc:r}},14669:function(e,n,t){t.d(n,{F:function(){return o}});var s=t(9495);
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
 */const a=s.kpo.ZS;function r(e){s.C0T.warn("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");const{inputs:n,backend:t,attrs:r}=e,{boxes:o,scores:c}=n,{maxOutputSize:u,iouThreshold:d,scoreThreshold:i,padToMaxOutputSize:p}=r,l=t.readSync(o.dataId),k=t.readSync(c.dataId),{selectedIndices:f,validOutputs:h}=a(l,k,u,d,i,p);return[t.makeTensorInfo([f.length],"int32",new Int32Array(f)),t.makeTensorInfo([],"int32",new Int32Array([h]))]}const o={kernelName:s.Zl4,backendName:"webgl",kernelFunc:r}},70318:function(e,n,t){t.d(n,{u:function(){return o}});var s=t(9495);
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
 */const a=s.kpo.ut;function r(e){s.C0T.warn("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");const{inputs:n,backend:t,attrs:r}=e,{boxes:o,scores:c}=n,{maxOutputSize:u,iouThreshold:d,scoreThreshold:i,softNmsSigma:p}=r,l=t.readSync(o.dataId),k=t.readSync(c.dataId),f=u,h=d,m=i,b=p,{selectedIndices:I,selectedScores:S}=a(l,k,f,h,m,b);return[t.makeTensorInfo([I.length],"int32",new Int32Array(I)),t.makeTensorInfo([S.length],"float32",new Float32Array(S))]}const o={kernelName:s.e0f,backendName:"webgl",kernelFunc:r}},98890:function(e,n,t){t.d(n,{A:function(){return u},E:function(){return c}});var s=t(9495),a=t(15411),r=t(76905);
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
const o="return float(a != b);",c=(0,a.j0)({opSnippet:o,cpuKernelImpl:r.ad,dtype:"bool"}),u={kernelName:s.ylV,backendName:"webgl",kernelFunc:c}},62642:function(e,n,t){t.d(n,{_:function(){return c}});var s=t(9495),a=t(94804),r=t(94043);
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
const o=e=>{const{inputs:n,backend:t,attrs:o}=e,{indices:c}=n,{dtype:u,depth:d,onValue:i,offValue:p}=o,l=s.ZSL.sizeFromShape(c.shape),k=new a.M(l,d,i,p),f=(0,r.t)({inputs:{x:c},backend:t,attrs:{shape:[l]}}),h=t.runWebGLProgram(k,[f],u);t.disposeIntermediateTensorInfo(f);const m=[...c.shape,d],b=(0,r.t)({inputs:{x:h},backend:t,attrs:{shape:m}});return t.disposeIntermediateTensorInfo(h),b},c={kernelName:s.urI,backendName:"webgl",kernelFunc:o}},64635:function(e,n,t){t.d(n,{h:function(){return i}});var s=t(9495),a=t(8993),r=t(37664),o=t(39803),c=t(4313),u=t(30097);
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
function d(e){const{inputs:n,backend:t}=e,{x:s}=n;if("string"===s.dtype)throw new Error("onesLike is not supported under string dtype");if("complex64"===s.dtype){const e=(0,c.x)({inputs:{input:s},backend:t}),n=d({inputs:{x:e},backend:t}),r=(0,o.n)({inputs:{input:s},backend:t}),i=(0,u.P)({inputs:{x:r},backend:t}),p=(0,a.f)({inputs:{real:n,imag:i},backend:t});return t.disposeIntermediateTensorInfo(e),t.disposeIntermediateTensorInfo(n),t.disposeIntermediateTensorInfo(r),t.disposeIntermediateTensorInfo(i),p}return(0,r.G)({attrs:{shape:s.shape,dtype:s.dtype,value:1},backend:t})}const i={kernelName:s.LWX,backendName:"webgl",kernelFunc:d}},54532:function(e,n,t){t.d(n,{q:function(){return c}});var s=t(9495),a=t(24973),r=t(98134);
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
function o(e){const{inputs:n,backend:t,attrs:o}=e,{axis:c}=o;if(1===n.length)return(0,r.U)({inputs:{input:n[0]},backend:t,attrs:{dim:c}});const u=n[0].shape,d=n[0].dtype;n.forEach((e=>{s.ZSL.assertShapesMatch(u,e.shape,"All tensors passed to stack must have matching shapes"),s.ZSL.assert(d===e.dtype,(()=>"All tensors passed to stack must have matching dtypes"))}));const i=[],p=n.map((e=>{const n=(0,r.U)({inputs:{input:e},backend:t,attrs:{dim:c}});return i.push(n),n})),l=(0,a.x)({inputs:p,backend:t,attrs:{axis:c}});return i.forEach((e=>t.disposeIntermediateTensorInfo(e))),l}const c={kernelName:s.mM$,backendName:"webgl",kernelFunc:o}},92616:function(e,n,t){t.d(n,{e:function(){return u},w:function(){return c}});var s=t(9495),a=t(59344),r=t(11601),o=t(37664);
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
const c=e=>{const{inputs:n,backend:t,attrs:c}=e,{x:u}=n,{paddings:d,constantValue:i}=c;if(0===s.ZSL.sizeFromShape(u.shape)){const e=d.map(((e,n)=>e[0]+u.shape[n]+e[1]));return(0,o.G)({backend:t,attrs:{shape:e,value:i,dtype:u.dtype}})}const p=(0,s._K2)().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new r._(u.shape,d,i):new a.e(u.shape,d,i),l=[[i]];return t.runWebGLProgram(p,[u],u.dtype,l)},u={kernelName:s.ODT,backendName:"webgl",kernelFunc:c}}}]);
//# sourceMappingURL=chunk-vendors-a7e5a53e.86ca1325.js.map