"use strict";(self["webpackChunkbenefit"]=self["webpackChunkbenefit"]||[]).push([[4644],{73008:function(e,n,t){t.d(n,{i:function(){return u}});var a=t(9495),r=t(76905);
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
function s(e){const{inputs:n,backend:t,attrs:a}=e,{paramsNestedSplits:s,paramsDenseValues:u,indices:c}=n,{outputRaggedRank:o}=a,i=s.map((e=>t.readSync(e.dataId))),l=s.map((e=>e.shape)),d=t.readSync(u.dataId),p=t.readSync(c.dataId),[b,f,k]=(0,r.G4)(i,l,d,u.shape,u.dtype,p,c.shape,o),m=b.map((e=>t.makeTensorInfo([e.length],"int32",e))),h=t.makeTensorInfo(k,u.dtype,f);return m.concat([h])}const u={kernelName:a.oJ2,backendName:"webgl",kernelFunc:s}},53874:function(e,n,t){t.d(n,{Y:function(){return u}});var a=t(9495),r=t(76905);
/**
 * @license
 * Copyright 2022 Google LLC.
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
function s(e){const{inputs:n,backend:t}=e,{starts:a,limits:s,deltas:u}=n,c=t.readSync(a.dataId),o=t.readSync(s.dataId),i=t.readSync(u.dataId),[l,d]=(0,r.Oy)(c,a.shape,a.dtype,o,s.shape,i,u.shape),p=t.makeTensorInfo([l.length],"int32",l),b=t.makeTensorInfo([d.length],a.dtype,d);return[p,b]}const u={kernelName:a.CQC,backendName:"webgl",kernelFunc:s}},67926:function(e,n,t){t.d(n,{g:function(){return u}});var a=t(9495),r=t(76905);
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
function s(e){const{inputs:n,backend:t,attrs:a}=e,{shape:s,values:u,defaultValue:c,rowPartitionTensors:o}=n,{rowPartitionTypes:i}=a,l=t.readSync(s.dataId),d=t.readSync(u.dataId),p=t.readSync(c.dataId),b=o.map((e=>t.readSync(e.dataId))),f=o.map((e=>e.shape)),[k,m]=(0,r.G3)(l,s.shape,d,u.shape,u.dtype,p,c.shape,b,f,i);return t.makeTensorInfo(k,u.dtype,m)}const u={kernelName:a.mH5,backendName:"webgl",kernelFunc:s}},39264:function(e,n,t){t.d(n,{i:function(){return u},y:function(){return s}});var a=t(9495),r=t(76905);
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
const s=e=>{const{backend:n,attrs:t}=e,{start:a,stop:s,step:u,dtype:c}=t,o=(0,r.we)(a,s,u,c);return n.makeTensorInfo([o.length],c,o)},u={kernelName:a.Q6t,backendName:"webgl",kernelFunc:s}},4313:function(e,n,t){t.d(n,{r:function(){return u},x:function(){return s}});var a=t(9495),r=t(77723);
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
function s(e){const{inputs:n,backend:t}=e,{input:a}=n,s=t.texData.get(a.dataId);return(0,r.D)({inputs:{x:s.complexTensorInfos.real},backend:t})}const u={kernelName:a.LRy,backendName:"webgl",kernelFunc:s}},4490:function(e,n,t){t.d(n,{G:function(){return o},M:function(){return c}});var a=t(9495),r=t(15411);
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
const s="\nif (a == b) {\n  return 1.0;\n};\nreturn a / b;",u="\n  // vec4 one = vec4(equal(a, b));\n  // return one + (vec4(1.0) - one) * a / b;\n  vec4 result = a / b;\n  if(a.x == b.x) {\n    result.x = 1.;\n  }\n  if(a.y == b.y) {\n    result.y = 1.;\n  }\n  if(a.z == b.z) {\n    result.z = 1.;\n  }\n  if(a.w == b.w) {\n    result.w = 1.;\n  }\n\n  return result;\n",c=(0,r.j0)({opSnippet:s,packedOpSnippet:u,checkOutOfBounds:!0}),o={kernelName:a.sDr,backendName:"webgl",kernelFunc:c}},49649:function(e,n,t){t.d(n,{l:function(){return c}});var a=t(9495),r=t(15411);
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
const s="return 1.0 / x;",u=(0,r.vi)({opSnippet:s}),c={kernelName:a.huO,backendName:"webgl",kernelFunc:u}},37647:function(e,n,t){t.d(n,{z:function(){return i}});var a=t(9495),r=t(15411),s=t(68173);
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
const u=s.dR+"\n  return (x < 0.0) ? 0.0 : x;\n",c="\n  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));\n  bvec4 isNaN = isnan(x);\n\n  result.r = isNaN.r ? x.r : result.r;\n  result.g = isNaN.g ? x.g : result.g;\n  result.b = isNaN.b ? x.b : result.b;\n  result.a = isNaN.a ? x.a : result.a;\n\n  return result;\n",o=(0,r.vi)({opSnippet:u,packedOpSnippet:c}),i={kernelName:a.fUj,backendName:"webgl",kernelFunc:o}},14421:function(e,n,t){t.d(n,{X:function(){return i}});var a=t(9495),r=t(15411),s=t(68173);
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
const u=s.dR+"\n  return (x < 0.0) ? 0.0 : min(6.0, x);\n",c="\n  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));\n  bvec4 isNaN = isnan(x);\n\n  result.r = isNaN.r ? x.r : result.r;\n  result.g = isNaN.g ? x.g : result.g;\n  result.b = isNaN.b ? x.b : result.b;\n  result.a = isNaN.a ? x.a : result.a;\n\n  return result;\n",o=(0,r.vi)({opSnippet:u,packedOpSnippet:c}),i={kernelName:a.P_L,backendName:"webgl",kernelFunc:o}},94043:function(e,n,t){t.d(n,{V:function(){return c},t:function(){return u}});var a=t(9495),r=t(99992),s=t(88380);
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
function u(e){const{inputs:n,backend:t,attrs:u}=e,{x:c}=n,{shape:o}=u,i=t,l=a.ZSL.sizeFromShape(c.shape),d=a.ZSL.inferFromImplicitShape(o,l),p=a.ZSL.sizeFromShape(d);a.ZSL.assert(l===p,(()=>`The new shape (${d}) has ${p} elements and the old shape (${c.shape}) has ${l} elements. The new shape and old shape must have the same number of elements.`));const b=i.texData.get(c.dataId);return!b.isPacked||(0,s.P0)(c.shape,d)||null!==b.texture&&(0,s.P0)(b.shape,d)?(i.incRef(c.dataId),{dataId:c.dataId,shape:d,dtype:c.dtype}):(0,r.p)(c,d,i)}const c={kernelName:a.R23,backendName:"webgl",kernelFunc:u}},2249:function(e,n,t){t.d(n,{T:function(){return c}});var a=t(9495),r=t(26180),s=t(16853);
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
function u(e){const{inputs:n,backend:t,attrs:u}=e,{images:c}=n,{alignCorners:o,halfPixelCenters:i,size:l}=u,[d,p]=l,b=(0,a._K2)().getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new s.x(c.shape,d,p,o,i):new r.z(c.shape,d,p,o,i);return t.runWebGLProgram(b,[c],"float32")}const c={kernelName:a.hgw,backendName:"webgl",kernelFunc:u}},68889:function(e,n,t){t.d(n,{j:function(){return u}});var a=t(9495),r=t(47791);
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
function s(e){const{inputs:n,backend:t,attrs:a}=e,{images:s,dy:u}=n,{alignCorners:c}=a,o=new r.h(u.shape,s.shape,c);return t.runWebGLProgram(o,[u],u.dtype)}const u={kernelName:a.FCQ,backendName:"webgl",kernelFunc:s}},43137:function(e,n,t){t.d(n,{j:function(){return c}});var a=t(9495),r=t(6917),s=t(59250);
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
function u(e){const{inputs:n,backend:t,attrs:u}=e,{images:c}=n,{alignCorners:o,halfPixelCenters:i,size:l}=u,[d,p]=l,b=(0,a._K2)().getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new s.z(c.shape,d,p,o,i):new r.$(c.shape,d,p,o,i);return t.runWebGLProgram(b,[c],c.dtype)}const c={kernelName:a.jOE,backendName:"webgl",kernelFunc:u}},96017:function(e,n,t){t.d(n,{n:function(){return u}});var a=t(9495),r=t(27436);
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
function s(e){const{inputs:n,backend:t,attrs:a}=e,{images:s,dy:u}=n,{alignCorners:c}=a,o=new r.x(u.shape,s.shape,c);return t.runWebGLProgram(o,[u],u.dtype)}const u={kernelName:a.XQy,backendName:"webgl",kernelFunc:s}},86567:function(e,n,t){t.d(n,{r:function(){return o}});var a=t(9495),r=t(71967),s=t(68636),u=t(77723);
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
function c(e){const{inputs:n,backend:t,attrs:c}=e,{x:o}=n,{dims:i}=c,l=o.shape.length,d=a.ZSL.parseAxisParam(i,o.shape);if(0===l)return(0,u.D)({inputs:{x:o},backend:t});const p=(0,a._K2)().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new s.X(o.shape,d):new r.N(o.shape,d);return t.runWebGLProgram(p,[o],o.dtype)}const o={kernelName:a.D7i,backendName:"webgl",kernelFunc:c}},24929:function(e,n,t){t.d(n,{f:function(){return s}});var a=t(9495),r=t(40784);
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
const s={kernelName:a.BK4,backendName:"webgl",kernelFunc:({inputs:e,attrs:n,backend:t})=>{const{image:s}=e,{radians:u,fillValue:c,center:o}=n,i=t,l=new r.e(s.shape,c),[d,p]=a.C0T.getImageCenter(o,s.shape[1],s.shape[2]),b=[[d,p,Math.sin(u),Math.cos(u)]],f=i.runWebGLProgram(l,[s],s.dtype,b);return f}}},84745:function(e,n,t){t.d(n,{$:function(){return c}});var a=t(9495),r=t(15411);
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
const s="\n  // OpenGL ES does not support round function.\n  // The algorithm is based on banker's rounding.\n  float base = floor(x);\n  if ((x - base) < 0.5) {\n    return floor(x);\n  } else if ((x - base) > 0.5) {\n    return ceil(x);\n  } else {\n    if (mod(base, 2.0) == 0.0) {\n      return base;\n    } else {\n      return base + 1.0;\n    }\n  }\n",u=(0,r.vi)({opSnippet:s}),c={kernelName:a.hVg,backendName:"webgl",kernelFunc:u}},34733:function(e,n,t){t.d(n,{L:function(){return o}});var a=t(9495),r=t(15411),s=t(76905);
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
const u="return inversesqrt(x);",c=(0,r.vi)({opSnippet:u,cpuKernelImpl:s.tc}),o={kernelName:a.TOR,backendName:"webgl",kernelFunc:c}},35137:function(e,n,t){t.d(n,{H:function(){return o}});var a=t(9495),r=t(8939),s=t(57160),u=t(94043);
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
function c(e){const{inputs:n,backend:t,attrs:c}=e,{indices:o,updates:i}=n,{shape:l}=c,{sliceRank:d,numUpdates:p,sliceSize:b,strides:f,outputSize:k}=a.C0T.calculateShapes(i,o,l),m=[k/b,b];if(0===k)return t.makeTensorInfo(l,o.dtype);const h=(0,u.t)({inputs:{x:o},backend:t,attrs:{shape:[p,d]}}),g=(0,u.t)({inputs:{x:i},backend:t,attrs:{shape:[p,b]}}),N=t.makeTensorInfo([],"float32",new Float32Array([0]));let x;x=(0,a._K2)().getBool("WEBGL_PACK")?new s.h(p,d,h.shape.length,g.shape.length,f,m):new r.$(p,d,h.shape.length,g.shape.length,f,m);const w=t.runWebGLProgram(x,[g,h,N],g.dtype),v=(0,u.t)({inputs:{x:w},backend:t,attrs:{shape:l}});return t.disposeIntermediateTensorInfo(h),t.disposeIntermediateTensorInfo(g),t.disposeIntermediateTensorInfo(w),t.disposeIntermediateTensorInfo(N),v}const o={kernelName:a.pJc,backendName:"webgl",kernelFunc:c}},33556:function(e,n,t){t.d(n,{M:function(){return u}});var a=t(9495),r=t(473);
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
function s(e){const{inputs:n,backend:t,attrs:a}=e,{sortedSequence:s,values:u}=n,{side:c}=a,o=new r.i(s.shape[0],s.shape[1],u.shape[1],c),i=[[s.shape[1]]];return t.runWebGLProgram(o,[s,u],"int32",i)}const u={kernelName:a.uWl,backendName:"webgl",kernelFunc:s}},51361:function(e,n,t){t.d(n,{z:function(){return u}});var a=t(9495),r=t(81847);
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
function s(e){const{inputs:n,backend:t}=e,{condition:s,t:u,e:c}=n,o=new r.T(s.shape.length,u.shape,u.shape.length);return t.runWebGLProgram(o,[s,u,c],(0,a.TuY)(u.dtype,c.dtype))}const u={kernelName:a.l6P,backendName:"webgl",kernelFunc:s}},64770:function(e,n,t){t.d(n,{k:function(){return c}});var a=t(9495),r=t(15411);
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
const s=`\n  // Stable and Attracting Fixed Point (0, 1) for Normalized Weights.\n  // see: https://arxiv.org/abs/1706.02515\n  float scaleAlpha = ${a.C0T.SELU_SCALEALPHA};\n  float scale = ${a.C0T.SELU_SCALE};\n  return (x >= 0.0) ? scale * x : scaleAlpha * (exp(x) - 1.0);\n`,u=(0,r.vi)({opSnippet:s}),c={kernelName:a.u$b,backendName:"webgl",kernelFunc:u}}}]);
//# sourceMappingURL=chunk-vendors-beadea9d.0c0c4dac.js.map