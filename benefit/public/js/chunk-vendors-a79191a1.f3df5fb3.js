"use strict";(self["webpackChunkbenefit"]=self["webpackChunkbenefit"]||[]).push([[455],{65253:function(e,n,t){t.d(n,{l:function(){return c}});var r=t(9495),a=t(76905),s=t(68173),o=t(74890);
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
const i="return abs(x);";function u(e){const{inputs:n,backend:t}=e,{x:u}=n;if(t.shouldExecuteOnCPU([u])&&"complex64"!==u.dtype){const e=t.texData.get(u.dataId),n=(0,a.f8)(e.values);return t.makeTensorInfo(u.shape,u.dtype,n)}let c;return c=(0,r._K2)().getBool("WEBGL_PACK_UNARY_OPERATIONS")?new o.rf(u.shape,i):new s.hE(u.shape,i),t.runWebGLProgram(c,[u],u.dtype)}const c={kernelName:r.ljI,backendName:"webgl",kernelFunc:u}},32019:function(e,n,t){t.d(n,{t:function(){return u}});var r=t(9495),a=t(15411),s=t(68173);
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
const o=s.dR+"\n  if (abs(x) > 1.) {\n    return NAN;\n  }\n  return acos(x);\n",i=(0,a.vi)({opSnippet:o}),u={kernelName:r.Vvy,backendName:"webgl",kernelFunc:i}},92619:function(e,n,t){t.d(n,{D:function(){return u}});var r=t(9495),a=t(15411),s=t(68173);
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
const o=s.dR+"\n  if (x < 1.0) return NAN;\nreturn log(x + sqrt(x * x - 1.0));",i=(0,a.vi)({opSnippet:o}),u={kernelName:r.PH8,backendName:"webgl",kernelFunc:i}},8982:function(e,n,t){t.d(n,{U:function(){return u}});var r=t(9495),a=t(15411),s=t(76905);
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
const o="return a + b;",i=(0,a.j0)({opSnippet:o,packedOpSnippet:o,supportsComplex:!0,cpuKernelImpl:s.Gs}),u={kernelName:r.OMN,backendName:"webgl",kernelFunc:i}},40154:function(e,n,t){t.d(n,{y:function(){return u}});var r=t(9495),a=t(90212),s=t(31445),o=t(77723);
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
function i(e){const{inputs:n,backend:t}=e,u=n;if(1===u.length)return(0,o.D)({inputs:{x:u[0]},backend:t});if(u.length>(0,r._K2)().getNumber("WEBGL_MAX_TEXTURES_IN_SHADER")){const e=Math.floor(u.length/2),n=i({inputs:u.slice(0,e),backend:t}),r=i({inputs:u.slice(e),backend:t});return i({inputs:[n,r],backend:t})}const c=u.map((e=>e.dtype)).reduce(((e,n)=>(0,r.TuY)(e,n))),p=u.map((e=>e.shape)),l=(0,r._K2)().getBool("WEBGL_PACK"),d=l?new s.c(u[0].shape,p):new a.K(u[0].shape,p);return t.runWebGLProgram(d,u,c)}const u={kernelName:r.EkD,backendName:"webgl",kernelFunc:i}},63990:function(e,n,t){t.d(n,{k:function(){return u}});var r=t(9495),a=t(68754),s=t(94043),o=t(58246);
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
function i(e){const{inputs:n,backend:t,attrs:i}=e,{x:u}=n,{axis:c,keepDims:p}=i,l=u.shape.length,d=r.ZSL.parseAxisParam(c,u.shape);let m=d;const k=r.C0T.getAxesPermutation(m,l);let f=u;null!=k&&(f=(0,o.m)({inputs:{x:u},backend:t,attrs:{perm:k}}),m=r.C0T.getInnerMostAxes(m.length,l)),r.C0T.assertAxesAreInnerMostDims("all",m,l);const[b,N]=r.C0T.computeOutAndReduceShapes(f.shape,m),h=r.ZSL.sizeFromShape(N),x=(0,s.t)({inputs:{x:f},backend:t,attrs:{shape:[-1,h]}}),g=(0,a.T)(x,x.dtype,"all",t);let T;if(p){const e=r.C0T.expandShapeToKeepDim(b,d);T=(0,s.t)({inputs:{x:g},backend:t,attrs:{shape:e}})}else T=(0,s.t)({inputs:{x:g},backend:t,attrs:{shape:b}});return t.disposeIntermediateTensorInfo(x),t.disposeIntermediateTensorInfo(g),null!=k&&t.disposeIntermediateTensorInfo(f),T}const u={kernelName:r.u8Z,backendName:"webgl",kernelFunc:i}},72335:function(e,n,t){t.d(n,{l:function(){return u}});var r=t(9495),a=t(68754),s=t(94043),o=t(58246);
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
function i(e){const{inputs:n,backend:t,attrs:i}=e,{x:u}=n,{axis:c,keepDims:p}=i,l=u.shape.length,d=r.ZSL.parseAxisParam(c,u.shape);let m=d;const k=r.C0T.getAxesPermutation(m,l);let f=u;null!=k&&(f=(0,o.m)({inputs:{x:u},backend:t,attrs:{perm:k}}),m=r.C0T.getInnerMostAxes(m.length,l)),r.C0T.assertAxesAreInnerMostDims("any",m,l);const[b,N]=r.C0T.computeOutAndReduceShapes(f.shape,m),h=r.ZSL.sizeFromShape(N),x=(0,s.t)({inputs:{x:f},backend:t,attrs:{shape:[-1,h]}}),g=(0,a.T)(x,x.dtype,"any",t);let T;if(p){const e=r.C0T.expandShapeToKeepDim(b,d);T=(0,s.t)({inputs:{x:g},backend:t,attrs:{shape:e}})}else T=(0,s.t)({inputs:{x:g},backend:t,attrs:{shape:b}});return t.disposeIntermediateTensorInfo(x),t.disposeIntermediateTensorInfo(g),null!=k&&t.disposeIntermediateTensorInfo(f),T}const u={kernelName:r.FSt,backendName:"webgl",kernelFunc:i}},45247:function(e,n,t){t.d(n,{n:function(){return i}});var r=t(9495),a=t(73388),s=t(58246);
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
function o(e){const{inputs:n,backend:t,attrs:o}=e,{x:i}=n,{axis:u}=o;let c=r.ZSL.parseAxisParam(u,i.shape);const p=r.C0T.getAxesPermutation(c,i.shape.length);let l=i;const d=[];null!=p&&(l=(0,s.m)({inputs:{x:i},backend:t,attrs:{perm:p}}),d.push(l),c=r.C0T.getInnerMostAxes(c.length,l.shape.length)),r.C0T.assertAxesAreInnerMostDims("argMax",[c[0]],l.shape.length);const m=(0,a.f)(t,l,c[0],"max");return d.forEach((e=>t.disposeIntermediateTensorInfo(e))),m}const i={kernelName:r.Jp_,backendName:"webgl",kernelFunc:o}},90085:function(e,n,t){t.d(n,{l:function(){return i}});var r=t(9495),a=t(73388),s=t(58246);
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
function o(e){const{inputs:n,backend:t,attrs:o}=e,{x:i}=n,{axis:u}=o;let c=r.ZSL.parseAxisParam(u,i.shape);const p=r.C0T.getAxesPermutation(c,i.shape.length);let l=i;const d=[];null!=p&&(l=(0,s.m)({inputs:{x:i},backend:t,attrs:{perm:p}}),d.push(l),c=r.C0T.getInnerMostAxes(c.length,l.shape.length)),r.C0T.assertAxesAreInnerMostDims("argMin",[c[0]],l.shape.length);const m=(0,a.f)(t,l,c[0],"min");return d.forEach((e=>t.disposeIntermediateTensorInfo(e))),m}const i={kernelName:r.p_m,backendName:"webgl",kernelFunc:o}},1806:function(e,n,t){t.d(n,{S:function(){return u}});var r=t(9495),a=t(15411),s=t(68173);
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
const o=s.dR+"\n  if (abs(x) > 1.) {\n    return NAN;\n  }\n  return asin(x);\n",i=(0,a.vi)({opSnippet:o}),u={kernelName:r.QKF,backendName:"webgl",kernelFunc:i}},73844:function(e,n,t){t.d(n,{M:function(){return u}});var r=t(9495),a=t(15411),s=t(68173);
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
const o=s.dR+"return log(x + sqrt(x * x + 1.0));",i=(0,a.vi)({opSnippet:o}),u={kernelName:r.epO,backendName:"webgl",kernelFunc:i}},25007:function(e,n,t){t.d(n,{L:function(){return u}});var r=t(9495),a=t(15411),s=t(68173);
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
const o=s.dR+"\n  return atan(x);\n",i=(0,a.vi)({opSnippet:o}),u={kernelName:r.TyE,backendName:"webgl",kernelFunc:i}},37913:function(e,n,t){t.d(n,{r:function(){return p}});var r=t(9495),a=t(22897),s=t(46334),o=t(15411);
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
const i=a.dR+"\n  return atan(a, b);\n",u="\n  vec4 result = atan(a, b);\n  bvec4 isNaNA = isnan(a);\n  bvec4 isNaNB = isnan(b);\n  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);\n  "+s.qq+"\n  return result;\n",c=(0,o.j0)({opSnippet:i,packedOpSnippet:u}),p={kernelName:r.lxb,backendName:"webgl",kernelFunc:c}},97743:function(e,n,t){t.d(n,{l:function(){return u}});var r=t(9495),a=t(15411),s=t(68173);
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
const o=s.dR+"\n  if ((x < -1.0) || (x > 1.0)) return NAN;\nreturn (log(1.0 + x) - log(1.0 - x)) / 2.0;",i=(0,a.vi)({opSnippet:o}),u={kernelName:r.zP9,backendName:"webgl",kernelFunc:i}},21119:function(e,n,t){t.d(n,{R:function(){return u}});var r=t(9495),a=t(80297),s=t(88380),o=t(77723);
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
function i(e){const{inputs:n,backend:t,attrs:i}=e,{x:u}=n;(0,s.CE)(u,"avgPool");const{filterSize:c,strides:p,pad:l,dimRoundingMode:d}=i,m=1;r.ZSL.assert(r.C0T.eitherStridesOrDilationsAreOne(p,m),(()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${p} and dilations '${m}'`));const k=r.C0T.computePool2DInfo(u.shape,c,p,m,l,d);if(1===k.filterWidth&&1===k.filterHeight&&r.ZSL.arraysEqual(k.inShape,k.outShape))return(0,o.D)({inputs:{x:u},backend:t});const f=new a.h(k,"avg",!1);return t.runWebGLProgram(f,[u],"float32")}const u={kernelName:r.ho8,backendName:"webgl",kernelFunc:i}},78060:function(e,n,t){t.d(n,{O:function(){return o}});var r=t(9495),a=t(80297);
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
function s(e){const{inputs:n,backend:t,attrs:s}=e,{x:o}=n,{filterSize:i,strides:u,pad:c,dimRoundingMode:p,dataFormat:l}=s,d=[1,1,1],m=r.C0T.computePool3DInfo(o.shape,i,u,d,c,p,l),k=new a.U(m,"avg",!1);return t.runWebGLProgram(k,[o],"float32")}const o={kernelName:r.cS,backendName:"webgl",kernelFunc:s}},83312:function(e,n,t){t.d(n,{m:function(){return o}});var r=t(9495),a=t(94491);
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
function s(e){const{inputs:n,backend:t,attrs:s}=e,{dy:o,input:i}=n,u=i,{filterSize:c,strides:p,pad:l,dimRoundingMode:d}=s,m=[1,1,1],k=r.C0T.computePool3DInfo(u.shape,c,p,m,l,d),f=new a.q(k);return t.runWebGLProgram(f,[o],u.dtype)}const o={kernelName:r.wwC,backendName:"webgl",kernelFunc:s}},84631:function(e,n,t){t.d(n,{$:function(){return i}});var r=t(9495),a=t(94491),s=t(88380);
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
function o(e){const{inputs:n,backend:t,attrs:o}=e,{dy:i,input:u}=n,c=u;(0,s.CE)([i,u],"avgPoolGrad");const{filterSize:p,strides:l,pad:d}=o,m=r.C0T.computePool2DInfo(c.shape,p,l,1,d),k=new a.x(m);return t.runWebGLProgram(k,[i],c.dtype)}const i={kernelName:r.VCH,backendName:"webgl",kernelFunc:o}}}]);
//# sourceMappingURL=chunk-vendors-a79191a1.f3df5fb3.js.map