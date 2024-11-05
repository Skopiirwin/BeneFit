"use strict";(self["webpackChunkbenefit"]=self["webpackChunkbenefit"]||[]).push([[1462],{66921:function(e,n,t){t.d(n,{B1:function(){return o},aw:function(){return u},zp:function(){return i}});var a=t(9495),r=t(22897),s=t(46334);
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
const o="return (a < 0.) ? b * a : a;",u="\n  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));\n  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);\n";function c(e){const{inputs:n,backend:t,attrs:c}=e,{x:i}=n,{alpha:p}=c,d=t.makeTensorInfo([],"float32",a.ZSL.createScalarValue(p,"float32")),l=(0,a._K2)().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new s.VI(u,i.shape,d.shape):new r.x(o,i.shape,d.shape),m=t.runWebGLProgram(l,[i,d],"float32");return t.disposeIntermediateTensorInfo(d),m}const i={kernelName:a.X0$,backendName:"webgl",kernelFunc:c}},26132:function(e,n,t){t.d(n,{Y:function(){return i}});var a=t(9495),r=t(15411),s=t(76905);
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
const o="return float(a < b);",u="\n  return vec4(lessThan(a, b));\n",c=(0,r.j0)({opSnippet:o,packedOpSnippet:u,cpuKernelImpl:s.uw,dtype:"bool"}),i={kernelName:a.mIA,backendName:"webgl",kernelFunc:c}},4094:function(e,n,t){t.d(n,{Q:function(){return i}});var a=t(9495),r=t(15411),s=t(76905);
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
const o="return float(a <= b);",u="\n  return vec4(lessThanEqual(a, b));\n",c=(0,r.j0)({opSnippet:o,packedOpSnippet:u,cpuKernelImpl:s.mo,dtype:"bool"}),i={kernelName:a.CwD,backendName:"webgl",kernelFunc:c}},22970:function(e,n,t){t.d(n,{o:function(){return o}});var a=t(9495),r=t(76905);
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
function s(e){const{backend:n,attrs:t}=e,{start:a,stop:s,num:o}=t,u=(0,r.AC)(a,s,o);return n.makeTensorInfo([u.length],"float32",u)}const o={kernelName:a.mnI,backendName:"webgl",kernelFunc:s}},71739:function(e,n,t){t.d(n,{F:function(){return i}});var a=t(9495),r=t(15411),s=t(76905);
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
const o=r.Zt+"\n  return x < 0.0 ? 0./0. : log(x);\n",u="\n  vec4 result = log(x);\n  bvec4 isNaN = isnan(x);\n  result.r = isNaN.r ? x.r : (x.r < 0.0 ? 0./0. : result.r);\n  result.g = isNaN.g ? x.g : (x.g < 0.0 ? 0./0. : result.g);\n  result.b = isNaN.b ? x.b : (x.b < 0.0 ? 0./0. : result.b);\n  result.a = isNaN.a ? x.a : (x.a < 0.0 ? 0./0. : result.a);\n  return result;\n",c=(0,r.vi)({opSnippet:o,packedOpSnippet:u,cpuKernelImpl:s.rI}),i={kernelName:a.tG8,backendName:"webgl",kernelFunc:c}},12462:function(e,n,t){t.d(n,{W:function(){return u}});var a=t(9495),r=t(15411);
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
const s=r.Zt+"\n  return log(1.0 + x);\n",o=(0,r.vi)({opSnippet:s}),u={kernelName:a.Cg$,backendName:"webgl",kernelFunc:o}},57133:function(e,n,t){t.d(n,{V:function(){return c}});var a=t(9495),r=t(15411);
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
const s="return float(a >= 1.0 && b >= 1.0);",o="\n  return vec4(\n    vec4(greaterThanEqual(a, vec4(1.0))) *\n    vec4(greaterThanEqual(b, vec4(1.0))));\n",u=(0,r.j0)({opSnippet:s,packedOpSnippet:o,dtype:"bool"}),c={kernelName:a.RUm,backendName:"webgl",kernelFunc:u}},4873:function(e,n,t){t.d(n,{f:function(){return u}});var a=t(9495),r=t(15411);
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
const s="return float(!(x >= 1.0));",o=(0,r.vi)({opSnippet:s}),u={kernelName:a.nZd,backendName:"webgl",kernelFunc:o}},10695:function(e,n,t){t.d(n,{r:function(){return c}});var a=t(9495),r=t(15411);
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
const s="return float(a >= 1.0 || b >= 1.0);",o="\n  return min(\n    vec4(greaterThanEqual(a, vec4(1.0))) +\n    vec4(greaterThanEqual(b, vec4(1.0))),\n    vec4(1.0));\n",u=(0,r.j0)({opSnippet:s,packedOpSnippet:o,dtype:"bool"}),c={kernelName:a.LXA,backendName:"webgl",kernelFunc:u}},82795:function(e,n,t){t.d(n,{T:function(){return i},l:function(){return p}});var a=t(9495),r=t(76905),s=t(68754),o=t(94043);
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
function u(e,n,t,r){const u=a.ZSL.sizeFromShape(n),c=a.ZSL.sizeFromShape(e.shape),i=c/u,p=(0,o.t)({inputs:{x:e},attrs:{shape:[i,u]},backend:r}),d=(0,s.T)(p,e.dtype,"max",r),l=(0,o.t)({inputs:{x:d},attrs:{shape:t},backend:r});return r.disposeIntermediateTensorInfo(p),r.disposeIntermediateTensorInfo(d),l}var c=t(95203);
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
function i(e){const{inputs:n,backend:t,attrs:s}=e,{x:o}=n,{reductionIndices:i,keepDims:p}=s,d=o.shape.length,l=a.ZSL.parseAxisParam(i,o.shape);let m=l;const f=a.C0T.getAxesPermutation(m,d),b=null!=f,N=t.shouldExecuteOnCPU([o]);let k=o;if(b){if(N){const e=t.texData.get(k.dataId),n=e.values,a=new Array(d);for(let t=0;t<a.length;t++)a[t]=o.shape[f[t]];const s=(0,r.Q5)(n,o.shape,o.dtype,f,a);k=t.makeTensorInfo(a,o.dtype);const u=t.texData.get(k.dataId);u.values=s}else k=(0,c._)(o,f,t);m=a.C0T.getInnerMostAxes(m.length,d)}a.C0T.assertAxesAreInnerMostDims("max",m,d);const[h,g]=a.C0T.computeOutAndReduceShapes(k.shape,m);let x,I=h;if(p&&(I=a.C0T.expandShapeToKeepDim(h,l)),N){const e=t.texData.get(k.dataId),n=e.values,s=(0,r.rw)(n,a.ZSL.sizeFromShape(g),I,o.dtype);x=t.makeTensorInfo(I,o.dtype);const u=t.texData.get(x.dataId);u.values=s}else x=u(k,g,I,t);return b&&t.disposeIntermediateTensorInfo(k),x}const p={kernelName:a.VAI,backendName:"webgl",kernelFunc:i}},18801:function(e,n,t){t.d(n,{$:function(){return c}});var a=t(9495),r=t(80297),s=t(88380),o=t(77723);
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
function u(e){const{inputs:n,backend:t,attrs:u}=e,{x:c}=n;(0,s.CE)(c,"maxPool");const{filterSize:i,strides:p,pad:d,dimRoundingMode:l}=u,m=1;a.ZSL.assert(a.C0T.eitherStridesOrDilationsAreOne(p,m),(()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${p} and dilations '${m}'`));const f=a.C0T.computePool2DInfo(c.shape,i,p,m,d,l);if(1===f.filterWidth&&1===f.filterHeight&&a.ZSL.arraysEqual(f.inShape,f.outShape))return(0,o.D)({inputs:{x:c},backend:t});const b=new r.h(f,"max",!1);return t.runWebGLProgram(b,[c],c.dtype)}const c={kernelName:a.t3d,backendName:"webgl",kernelFunc:u}},92914:function(e,n,t){t.d(n,{A:function(){return o}});var a=t(9495),r=t(80297);
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
function s(e){const{inputs:n,backend:t,attrs:s}=e,{x:o}=n,{filterSize:u,strides:c,pad:i,dataFormat:p,dimRoundingMode:d}=s,l=[1,1,1],m=a.C0T.computePool3DInfo(o.shape,u,c,l,i,d,p),f=new r.U(m,"max",!1);return t.runWebGLProgram(f,[o],o.dtype)}const o={kernelName:a.ySp,backendName:"webgl",kernelFunc:s}},65886:function(e,n,t){t.d(n,{S:function(){return u}});var a=t(9495),r=t(81017),s=t(80297);
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
function o(e){const{inputs:n,backend:t,attrs:o}=e,{dy:u,input:c}=n,i=c,{filterSize:p,strides:d,pad:l,dimRoundingMode:m}=o,f=[1,1,1],b=a.C0T.computePool3DInfo(i.shape,p,d,f,l,m),N=new s.U(b,"max",!0),k=t.runWebGLProgram(N,[i],i.dtype),h=new r.Y(b),g=t.runWebGLProgram(h,[u,k],i.dtype);return t.disposeIntermediateTensorInfo(k),g}const u={kernelName:a.cHb,backendName:"webgl",kernelFunc:o}},17249:function(e,n,t){t.d(n,{P:function(){return c}});var a=t(9495),r=t(81017),s=t(80297),o=t(88380);
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
function u(e){const{inputs:n,backend:t,attrs:u}=e,{dy:c,input:i,output:p}=n,d=i;(0,o.CE)([i,p],"maxPoolGrad");const{filterSize:l,strides:m,pad:f,dimRoundingMode:b}=u,N=a.C0T.computePool2DInfo(d.shape,l,m,1,f,b),k=!0,h=new s.h(N,"max",k),g=t.runWebGLProgram(h,[d],d.dtype),x=new r.d(N),I=t.runWebGLProgram(x,[c,g],d.dtype);return t.disposeIntermediateTensorInfo(g),I}const c={kernelName:a.RXX,backendName:"webgl",kernelFunc:u}},97745:function(e,n,t){t.d(n,{l:function(){return o}});var a=t(9495),r=t(80297);
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
function s(e,n,t,a){let s=new r.h(t,"max",!1);const o=a.runWebGLProgram(s,[e],"float32");s=new r.h(t,"max",!0,!0,n);const u=a.runWebGLProgram(s,[e],"float32");return[o,u]}
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
const o={kernelName:a.TL8,backendName:"webgl",kernelFunc:({inputs:e,attrs:n,backend:t})=>{const{x:r}=e,{filterSize:o,strides:u,pad:c,includeBatchInIndex:i}=n,p=t;a.ZSL.assert(4===r.shape.length,(()=>`Error in maxPool: input must be rank 4 but got rank ${r.shape.length}.`));const d=[1,1];a.ZSL.assert(a.C0T.eitherStridesOrDilationsAreOne(u,d),(()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${u} and dilations '${d}'`));const l=a.C0T.computePool2DInfo(r.shape,o,u,d,c),[m,f]=s(r,i,l,p);return[m,f]}}},23007:function(e,n,t){t.d(n,{l:function(){return d}});var a=t(9495),r=t(22897),s=t(46334),o=t(15411),u=t(76905);
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
const c=r.dR+"\n  return max(a, b);\n",i="\n  vec4 result = vec4(max(a, b));\n  bvec4 isNaNA = isnan(a);\n  bvec4 isNaNB = isnan(b);\n  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);\n  "+s.qq+"\n  return result;\n",p=(0,o.j0)({opSnippet:c,packedOpSnippet:i,cpuKernelImpl:u.Dy}),d={kernelName:a.LDN,backendName:"webgl",kernelFunc:p}},28333:function(e,n,t){t.d(n,{M:function(){return i}});var a=t(9495),r=t(68754),s=t(94043);
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
function o(e,n,t,o){const u=a.ZSL.sizeFromShape(n),c=a.ZSL.sizeFromShape(e.shape),i=c/u,p=(0,s.t)({inputs:{x:e},attrs:{shape:[i,u]},backend:o}),d=(0,r.T)(p,"float32","mean",o),l=(0,s.t)({inputs:{x:d},attrs:{shape:t},backend:o});return o.disposeIntermediateTensorInfo(p),o.disposeIntermediateTensorInfo(d),l}var u=t(76905),c=t(95203);
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
const i={kernelName:a.g5A,backendName:"webgl",kernelFunc:({inputs:e,attrs:n,backend:t})=>{const{x:r}=e,{keepDims:s,axis:i}=n,p=t,d=r.shape.length,l=a.ZSL.parseAxisParam(i,r.shape);let m=l;const f=a.C0T.getAxesPermutation(m,d),b=null!=f,N=p.shouldExecuteOnCPU([r]),k=[];let h=r;if(b){if(N){const e=p.texData.get(h.dataId),n=e.values,t=new Array(d);for(let o=0;o<t.length;o++)t[o]=r.shape[f[o]];const a=(0,u.Q5)(n,r.shape,r.dtype,f,t);h=p.makeTensorInfo(t,r.dtype);const s=p.texData.get(h.dataId);s.values=a}else h=(0,c._)(r,f,p);k.push(h),m=a.C0T.getInnerMostAxes(m.length,d)}a.C0T.assertAxesAreInnerMostDims("sum",m,d);const[g,x]=a.C0T.computeOutAndReduceShapes(h.shape,m);let I=g;s&&(I=a.C0T.expandShapeToKeepDim(g,l));const T=o(h,x,I,p);for(const a of k)p.disposeIntermediateTensorInfo(a);return T}}},69941:function(e,n,t){t.d(n,{j:function(){return c}});var a=t(9495),r=t(68754),s=t(94043),o=t(58246);
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
function u(e){const{inputs:n,backend:t,attrs:u}=e,{x:c}=n,{axis:i,keepDims:p}=u,d=c.shape.length,l=a.ZSL.parseAxisParam(i,c.shape);let m=l;const f=a.C0T.getAxesPermutation(m,d);let b=c;null!=f&&(b=(0,o.m)({inputs:{x:c},backend:t,attrs:{perm:f}}),m=a.C0T.getInnerMostAxes(m.length,c.shape.length)),a.C0T.assertAxesAreInnerMostDims("min",m,d);const[N,k]=a.C0T.computeOutAndReduceShapes(b.shape,m),h=a.ZSL.sizeFromShape(k),g=(0,s.t)({inputs:{x:b},backend:t,attrs:{shape:[-1,h]}}),x=(0,r.T)(g,g.dtype,"min",t);let I;if(p){const e=a.C0T.expandShapeToKeepDim(N,l);I=(0,s.t)({inputs:{x:x},backend:t,attrs:{shape:e}})}else I=(0,s.t)({inputs:{x:x},backend:t,attrs:{shape:N}});return t.disposeIntermediateTensorInfo(g),t.disposeIntermediateTensorInfo(x),null!=f&&t.disposeIntermediateTensorInfo(b),I}const c={kernelName:a.lNG,backendName:"webgl",kernelFunc:u}},25621:function(e,n,t){t.d(n,{N:function(){return d}});var a=t(9495),r=t(22897),s=t(46334),o=t(15411),u=t(76905);
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
const c=r.dR+"\n  return min(a, b);\n",i="\n  vec4 result = vec4(min(a, b));\n  bvec4 isNaNA = isnan(a);\n  bvec4 isNaNB = isnan(b);\n  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);\n  "+s.qq+"\n  return result;\n",p=(0,o.j0)({opSnippet:c,packedOpSnippet:i,cpuKernelImpl:u.h}),d={kernelName:a.LG0,backendName:"webgl",kernelFunc:p}},94449:function(e,n,t){t.d(n,{V:function(){return u}});var a=t(9495),r=t(51554),s=t(2171);
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
const o=({inputs:e,backend:n,attrs:t})=>{const{x:o}=e,{paddings:u,mode:c}=t,i=(0,a._K2)().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new s.V(o.shape,u,c):new r.X(o.shape,u,c),p=n.runWebGLProgram(i,[o],o.dtype);return p},u={kernelName:a.x7F,backendName:"webgl",kernelFunc:o}},19013:function(e,n,t){t.d(n,{X:function(){return i}});var a=t(9495),r=t(46334),s=t(15411);
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
const o="if (b == 0.0) return NAN;\n  return mod(a, b);",u="\n  vec4 result = mod(a, b);\n  bvec4 isNaN = equal(b, vec4(0.0));\n  "+r.qq+"\n  return result;\n",c=(0,s.j0)({opSnippet:o,packedOpSnippet:u}),i={kernelName:a.BLA,backendName:"webgl",kernelFunc:c}},89488:function(e,n,t){t.d(n,{a:function(){return u}});var a=t(9495),r=t(26608),s=t(62667);
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
function o(e){const{inputs:n,backend:t,attrs:a}=e,{logits:o}=n,{numSamples:u,seed:c,normalized:i}=a,p=i?o:(0,s.V)({inputs:{logits:o},backend:t,attrs:{dim:o.shape.length-1}}),d=p.shape[0],l=p.shape[1],m=new r.O(d,l,u),f=[[c]],b=t.runWebGLProgram(m,[p],"int32",f);return i||t.disposeIntermediateTensorInfo(p),b}const u={kernelName:a.WT3,backendName:"webgl",kernelFunc:o}},26041:function(e,n,t){t.d(n,{l:function(){return p},t:function(){return d}});var a=t(9495),r=t(65274),s=t(22897),o=t(46334),u=t(76905),c=t(8993);
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
const i="return a * b;";function p(e){const{inputs:n,backend:t}=e,{a:p,b:d}=n,l=a.C0T.upcastType(p.dtype,d.dtype);if("complex64"===p.dtype){const e=t.texData.get(p.dataId),n=t.texData.get(d.dataId),a=new r.f(r.C.REAL,p.shape,d.shape),s=new r.f(r.C.IMAG,p.shape,d.shape),o=[{dataId:e.complexTensorInfos.real.dataId,dtype:e.complexTensorInfos.real.dtype,shape:p.shape},{dataId:e.complexTensorInfos.imag.dataId,dtype:e.complexTensorInfos.imag.dtype,shape:p.shape},{dataId:n.complexTensorInfos.real.dataId,dtype:n.complexTensorInfos.real.dtype,shape:d.shape},{dataId:n.complexTensorInfos.imag.dataId,dtype:n.complexTensorInfos.imag.dtype,shape:d.shape}],u=t.runWebGLProgram(a,o,"float32"),i=t.runWebGLProgram(s,o,"float32"),l=(0,c.f)({inputs:{real:u,imag:i},backend:t});return t.disposeIntermediateTensorInfo(u),t.disposeIntermediateTensorInfo(i),l}if(t.shouldExecuteOnCPU([p,d])){const e=t.texData.get(p.dataId),n=t.texData.get(d.dataId),[a,r]=(0,u.Xe)(p.shape,d.shape,e.values,n.values,l),s=t.makeTensorInfo(r,l),o=t.texData.get(s.dataId);return o.values=a,s}let m;return m=(0,a._K2)().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new o.VI(i,p.shape,d.shape):new s.x(i,p.shape,d.shape),t.runWebGLProgram(m,[p,d],l)}const d={kernelName:a.xu7,backendName:"webgl",kernelFunc:p}},40279:function(e,n,t){t.d(n,{h:function(){return p}});var a=t(9495),r=t(76905),s=t(68173),o=t(74890);
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
const u=s.dR+"\n  return -x;\n",c="\n  vec4 result = -x;\n  bvec4 isNaN = isnan(x);\n\n  result.r = isNaN.r ? x.r : result.r;\n  result.g = isNaN.g ? x.g : result.g;\n  result.b = isNaN.b ? x.b : result.b;\n  result.a = isNaN.a ? x.a : result.a;\n\n  return result;\n";function i(e){const{inputs:n,backend:t}=e,{x:i}=n;if(t.shouldExecuteOnCPU([i])){const e=t.texData.get(i.dataId),[n,a]=(0,r.rQ)(e.values,i.shape,i.dtype);return t.makeTensorInfo(a,i.dtype,n)}let p;return p=(0,a._K2)().getBool("WEBGL_PACK_UNARY_OPERATIONS")?new o.rf(i.shape,c):new s.hE(i.shape,u),t.runWebGLProgram(p,[i],i.dtype)}const p={kernelName:a.l0G,backendName:"webgl",kernelFunc:i}}}]);
//# sourceMappingURL=chunk-vendors-69fa63f0.cc87c66a.js.map