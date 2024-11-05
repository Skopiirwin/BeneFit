"use strict";(self["webpackChunkbenefit"]=self["webpackChunkbenefit"]||[]).push([[9861],{24129:function(e,n,t){t.d(n,{X:function(){return u}});var a=t(9495),r=t(15411),s=t(76905);
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
const o=r.Zt+"\n  return 1.0 / (1.0 + exp(-1.0 * x));\n",i="\n  vec4 result = 1.0 / (1.0 + exp(-1.0 * x));\n  bvec4 isNaN = isnan(x);\n\n  result.r = isNaN.r ? x.r : result.r;\n  result.g = isNaN.g ? x.g : result.g;\n  result.b = isNaN.b ? x.b : result.b;\n  result.a = isNaN.a ? x.a : result.a;\n\n  return result;\n",c=(0,r.vi)({opSnippet:o,packedOpSnippet:i,cpuKernelImpl:s.BC}),u={kernelName:a.vI1,backendName:"webgl",kernelFunc:c}},43168:function(e,n,t){t.d(n,{C:function(){return i}});var a=t(9495),r=t(15411);
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
const s="\n  if (isnan(x)) { return 0.0; }\n  return sign(x);\n",o=(0,r.vi)({opSnippet:s}),i={kernelName:a.YVe,backendName:"webgl",kernelFunc:o}},60739:function(e,n,t){t.d(n,{b:function(){return u}});var a=t(9495),r=t(46334),s=t(15411);
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
const o=s.Zt+"\n  return sin(x);\n",i=`\n  vec4 result = sin(x);\n  bvec4 isNaN = isnan(x);\n  ${r.qq}\n  return result;\n`,c=(0,s.vi)({opSnippet:o,packedOpSnippet:i}),u={kernelName:a.hql,backendName:"webgl",kernelFunc:c}},49627:function(e,n,t){t.d(n,{$:function(){return i}});var a=t(9495),r=t(15411);
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
const s="\n  float e2x = exp(x);\n  return (e2x - 1.0 / e2x) / 2.0;\n",o=(0,r.vi)({opSnippet:s}),i={kernelName:a.J3C,backendName:"webgl",kernelFunc:o}},29547:function(e,n,t){t.d(n,{d:function(){return c},l:function(){return u}});var a=t(9495),r=t(76905),s=t(10043),o=t(5144);
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
function i(e,n,t,r){const s=r.texData.get(e.dataId),o=r.makeTensorInfo(t,e.dtype),i=r.texData.get(o.dataId);Object.assign(i,s),i.refCount=1,i.shape=t,i.dtype=e.dtype;let c=a.Kro.computeFlatOffset(n,a.ZSL.computeStrides(e.shape));s.slice&&(c+=s.slice.flatOffset),i.slice={flatOffset:c,origDataId:s.slice&&s.slice.origDataId||e.dataId};const u=r.dataRefCount.get(i.slice.origDataId)||1;return r.dataRefCount.set(i.slice.origDataId,u+1),o}function c(e){const{inputs:n,backend:t,attrs:c}=e,{x:u}=n,{begin:d,size:p}=c,[l,h]=a.Kro.parseSliceParams(u,d,p);if(a.Kro.assertParamsValid(u,l,h),0===a.ZSL.sizeFromShape(h))return t.makeTensorInfo(h,u.dtype,[]);if(t.shouldExecuteOnCPU([u])||"string"===u.dtype){const e=t.texData.get(u.dataId),n=(0,r.J3)(e.values,l,h,u.shape,u.dtype);return t.makeTensorInfo(h,u.dtype,n)}const{isPacked:f}=t.texData.get(u.dataId),k=a.Kro.isSliceContinous(u.shape,l,h);if(f||!k){const e=(0,a._K2)().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new o.V(h):new s.J(h),n=[l];return t.runWebGLProgram(e,[u],u.dtype,n)}return t.uploadToGPU(u.dataId),i(u,l,h,t)}const u={kernelName:a.JiE,backendName:"webgl",kernelFunc:c}},62667:function(e,n,t){t.d(n,{$:function(){return p},V:function(){return d}});var a=t(9495),r=t(29450),s=t(82795),o=t(4490),i=t(94043),c=t(38483),u=t(19327);
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
function d(e){const{inputs:n,backend:t,attrs:d}=e,{logits:p}=n,{dim:l}=d,h=a.ZSL.parseAxisParam([l],p.shape),f=(0,s.T)({inputs:{x:p},backend:t,attrs:{reductionIndices:h,keepDims:!1}}),k=a.C0T.expandShapeToKeepDim(f.shape,h),b=(0,i.t)({inputs:{x:f},backend:t,attrs:{shape:k}}),m=(0,c.j)({inputs:{a:p,b:b},backend:t}),g=(0,r.oN)({inputs:{x:m},backend:t}),I=(0,u.c)({inputs:{x:g},backend:t,attrs:{axis:h,keepDims:!1}}),x=(0,i.t)({inputs:{x:I},backend:t,attrs:{shape:k}}),w=(0,o.M)({inputs:{a:g,b:x},backend:t});return t.disposeIntermediateTensorInfo(f),t.disposeIntermediateTensorInfo(b),t.disposeIntermediateTensorInfo(m),t.disposeIntermediateTensorInfo(g),t.disposeIntermediateTensorInfo(I),t.disposeIntermediateTensorInfo(x),w}const p={kernelName:a.rFG,backendName:"webgl",kernelFunc:d}},68065:function(e,n,t){t.d(n,{Z:function(){return i}});var a=t(9495),r=t(15411);
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
const s="\n  float epsilon = 1.1920928955078125e-7;\n  float threshold = log(epsilon) + 2.0;\n\n  bool too_large = x > -threshold;\n  bool too_small = x < threshold;\n\n  float result;\n  float exp_x = exp(x);\n\n  if (too_large){\n    result = x;\n  }\n  else if (too_small){\n    result = exp_x;\n  }\n  else{\n    result = log(exp_x + 1.0);\n  }\n  return result;\n",o=(0,r.vi)({opSnippet:s}),i={kernelName:a.Fin,backendName:"webgl",kernelFunc:o}},50894:function(e,n,t){t.d(n,{W:function(){return c}});var a=t(9495),r=t(92616),s=t(94043),o=t(58246);
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
const i=e=>{const{inputs:n,backend:t,attrs:i}=e,{x:c}=n,{blockShape:u,paddings:d}=i;a.ZSL.assert(c.shape.length<=4,(()=>"spaceToBatchND for rank > 4 with a WebGL backend not implemented yet"));const p=u.reduce(((e,n)=>e*n)),l=[[0,0]];l.push(...d);for(let a=1+u.length;a<c.shape.length;++a)l.push([0,0]);const h=[],f=(0,r.w)({inputs:{x:c},backend:t,attrs:{paddings:l,constantValue:0}}),k=a.C0T.getReshaped(f.shape,u,p,!1),b=a.C0T.getPermuted(k.length,u.length,!1),m=a.C0T.getReshapedPermuted(f.shape,u,p,!1),g=(0,s.t)({inputs:{x:f},backend:t,attrs:{shape:k}}),I=(0,o.m)({inputs:{x:g},backend:t,attrs:{perm:b}}),x=(0,s.t)({inputs:{x:I},backend:t,attrs:{shape:m}});return h.push(f),h.push(g),h.push(I),h.forEach((e=>t.disposeIntermediateTensorInfo(e))),x},c={kernelName:a.A8B,backendName:"webgl",kernelFunc:i}},49442:function(e,n,t){t.d(n,{K:function(){return o}});var a=t(9495),r=t(76905);
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
function s(e){const{inputs:n,backend:t}=e,{indices:a,values:s,denseShape:o,defaultValue:i}=n;if(1!==o.shape.length)throw new Error(`Dense shape must be a vector, saw:\n         ${o.shape}`);if(2!==a.shape.length)throw new Error(`Indices must be a matrix, saw:\n         ${a.shape}`);if(1!==s.shape.length)throw new Error(`Values must be a vector, saw:\n         ${s.shape}`);if(0!==i.shape.length)throw new Error(`Default value must be a scalar, saw:\n        ${i.shape}`);const c=t.readSync(a.dataId),u=t.readSync(s.dataId),d=t.readSync(o.dataId),p=t.readSync(i.dataId)[0],[l,h,f,k,b]=(0,r.sB)(c,a.shape,a.dtype,u,s.dtype,d,p);return[t.makeTensorInfo(h,a.dtype,l),t.makeTensorInfo([h[0]],s.dtype,f),t.makeTensorInfo([k.length],"bool",new Uint8Array(k.map((e=>Number(e))))),t.makeTensorInfo([b.length],a.dtype,new Int32Array(b))]}const o={kernelName:a.C8s,backendName:"webgl",kernelFunc:s}},25103:function(e,n,t){t.d(n,{F:function(){return o}});var a=t(9495),r=t(76905);
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
function s(e){const{inputs:n,backend:t}=e,{inputIndices:a,inputShape:s,newShape:o}=n;if(2!==a.shape.length)throw new Error(`Input indices should be a matrix but received shape ${a.shape}`);if(1!==s.shape.length)throw new Error(`Input shape should be a vector but received shape ${s.shape}`);if(1!==o.shape.length)throw new Error(`Target shape should be a vector but received shape ${o.shape}`);const i=Array.from(t.readSync(s.dataId)),c=t.readSync(a.dataId),u=Array.from(t.readSync(o.dataId)),[d,p,l]=(0,r.vo)(c,a.shape,a.dtype,i,u);return[t.makeTensorInfo(p,a.dtype,d),t.makeTensorInfo([l.length],o.dtype,new Int32Array(l))]}const o={kernelName:a.BoJ,backendName:"webgl",kernelFunc:s}},58137:function(e,n,t){t.d(n,{v:function(){return o}});var a=t(9495),r=t(76905);
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
function s(e){const{inputs:n,backend:t}=e,{data:a,indices:s,segmentIds:o}=n;if(a.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(1!==s.shape.length)throw new Error(`Indices should be a vector but received shape\n              ${s.shape}`);if(1!==o.shape.length)throw new Error(`Segment ids should be a vector but received shape\n              ${o.shape}`);const i=t.readSync(a.dataId),c=t.readSync(s.dataId),u=t.readSync(o.dataId),[d,p]=(0,r.zN)(i,a.shape,a.dtype,c,u,!0);return t.makeTensorInfo(p,a.dtype,d)}const o={kernelName:a.L6G,backendName:"webgl",kernelFunc:s}},40257:function(e,n,t){t.d(n,{j:function(){return o}});var a=t(9495),r=t(76905);
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
function s(e){const{inputs:n,backend:t}=e,{data:a,indices:s,segmentIds:o}=n;if(a.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(1!==s.shape.length)throw new Error(`Indices should be a vector but received shape\n             ${s.shape}`);if(1!==o.shape.length)throw new Error(`Segment ids should be a vector but received shape\n             ${o.shape}`);const i=t.readSync(a.dataId),c=t.readSync(s.dataId),u=t.readSync(o.dataId),[d,p]=(0,r.zN)(i,a.shape,a.dtype,c,u);return t.makeTensorInfo(p,a.dtype,d)}const o={kernelName:a.DvZ,backendName:"webgl",kernelFunc:s}},80809:function(e,n,t){t.d(n,{x:function(){return c}});var a=t(9495),r=t(76905),s=t(8939),o=t(94043);
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
function i(e){const{inputs:n,backend:t,attrs:i}=e,{sparseIndices:c,sparseValues:u,defaultValue:d}=n,{outputShape:p}=i,{sliceRank:l,numUpdates:h,sliceSize:f,strides:k,outputSize:b}=a.C0T.calculateShapes(u,c,p),m=!1;if("string"===u.dtype){const e=t.bufferSync(c),n=t.bufferSync(u),s=a.ZSL.decodeString(t.readSync(d.dataId)[0]),o=(0,r.fC)(e,n,p,b,f,h,l,k,s,m);return t.makeTensorInfo(p,o.dtype,o.values)}const g=new s.$(h,l,c.shape.length,u.shape.length,k,[b,1],m),I=t.runWebGLProgram(g,[u,c,d],u.dtype),x=(0,o.t)({inputs:{x:I},backend:t,attrs:{shape:p}});return t.disposeIntermediateTensorInfo(I),x}const c={kernelName:a.jgd,backendName:"webgl",kernelFunc:i}},63575:function(e,n,t){t.d(n,{t:function(){return o}});var a=t(9495),r=t(29547);
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
function s(e){const{inputs:n,backend:t,attrs:s}=e,{x:o}=n,{numOrSizeSplits:i,axis:c}=s,u=a.ZSL.parseAxisParam(c,o.shape)[0],d=a.C0T.prepareSplitSize(o,i,u),p=o.shape.length,l=new Array(p).fill(0),h=o.shape.slice();return d.map((e=>{const n=[...h];n[u]=e;const a=(0,r.d)({inputs:{x:o},backend:t,attrs:{begin:l,size:n}});return l[u]+=e,a}))}const o={kernelName:a.Blb,backendName:"webgl",kernelFunc:s}},5643:function(e,n,t){t.d(n,{F:function(){return c}});var a=t(9495),r=t(15411),s=t(76905);
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
const o="return sqrt(x);",i=(0,r.vi)({opSnippet:o,packedOpSnippet:o,cpuKernelImpl:s.LF}),c={kernelName:a.dFH,backendName:"webgl",kernelFunc:i}},12030:function(e,n,t){t.d(n,{e:function(){return i}});var a=t(9495),r=t(15411);
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
const s="return x * x;",o=(0,r.vi)({opSnippet:s}),i={kernelName:a.M6A,backendName:"webgl",kernelFunc:o}},55571:function(e,n,t){t.d(n,{b:function(){return i}});var a=t(9495),r=t(15411);
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
const s="return (a - b) * (a - b);",o=(0,r.j0)({opSnippet:s,packedOpSnippet:s}),i={kernelName:a.Ddj,backendName:"webgl",kernelFunc:o}},44342:function(e,n,t){t.d(n,{C:function(){return o}});var a=t(9495),r=t(76905);
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
function s(e){const{inputs:n,backend:t,attrs:s}=e,{x:o}=n;if("string"!==o.dtype)throw new Error("Input must be of datatype string");const i=t.readSync(o.dataId),c=a.C0T.fromUint8ToStringArray(i),u=(0,r.yZ)(c,"string",s);return t.makeTensorInfo(o.shape,"string",u)}const o={kernelName:a.GZp,backendName:"webgl",kernelFunc:s}},97667:function(e,n,t){t.d(n,{t:function(){return o}});var a=t(9495),r=t(68173);
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
function s({inputs:e,attrs:n,backend:t}){const{x:a}=e,s=r.dR+`\n    return x > 0.0 ? 1.0 : float(${n.alpha});\n  `,o=new r.hE(a.shape,s);return t.runWebGLProgram(o,[a],a.dtype)}const o={kernelName:a.pnw,backendName:"webgl",kernelFunc:s}},5466:function(e,n,t){t.d(n,{c:function(){return u}});var a=t(9495),r=t(76905),s=t(11039),o=t(94043),i=t(29547);
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
function c(e){const{inputs:n,backend:t,attrs:c}=e,{x:u}=n,{begin:d,end:p,strides:l,beginMask:h,endMask:f,ellipsisMask:k,newAxisMask:b,shrinkAxisMask:m}=c,{finalShapeSparse:g,finalShape:I,isIdentity:x,sliceDim0:w,isSimpleSlice:S,begin:N,end:y,strides:v}=a.Kro.sliceInfo(u.shape,d,p,l,h,f,k,b,m);let T;if(x)T=(0,o.t)({inputs:{x:u},backend:t,attrs:{shape:I}});else if(w||S){a.ZSL.assert(u.shape.length>=1,(()=>`Input must have rank at least 1, got: ${u.shape.length}`));const e=a.Kro.computeOutShape(N,y,v),n=(0,i.d)({inputs:{x:u},backend:t,attrs:{begin:N,size:e}});T=(0,o.t)({inputs:{x:n},backend:t,attrs:{shape:I}}),t.disposeIntermediateTensorInfo(n)}else{const e=t.shouldExecuteOnCPU([u]);if(e){const e=t.readSync(u.dataId),n=(0,a.ra8)(u.shape,u.dtype,e),s=(0,r.cy)(g,n,v,N);T=t.makeTensorInfo(I,u.dtype,s.values)}else{const e=new s.U(N,v,g);T=t.runWebGLProgram(e,[u],u.dtype)}}const F=(0,o.t)({inputs:{x:T},backend:t,attrs:{shape:I}});return t.disposeIntermediateTensorInfo(T),F}const u={kernelName:a.UcO,backendName:"webgl",kernelFunc:c}},79862:function(e,n,t){t.d(n,{Q:function(){return o}});var a=t(9495),r=t(76905);
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
function s(e){const{inputs:n,backend:t,attrs:a}=e,{separator:s,nGramWidths:o,leftPad:i,rightPad:c,padWidth:u,preserveShortSequences:d}=a,{data:p,dataSplits:l}=n,h=t.readSync(p.dataId),f=t.readSync(l.dataId),[k,b]=(0,r.UC)(h,f,s,o,i,c,u,d);return[t.makeTensorInfo([k.length],"string",k),t.makeTensorInfo(l.shape,"int32",b)]}const o={kernelName:a.YAb,backendName:"webgl",kernelFunc:s}},13726:function(e,n,t){t.d(n,{o:function(){return o}});var a=t(9495),r=t(76905);
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
function s(e){const{inputs:n,backend:t,attrs:a}=e,{skipEmpty:s}=a,{input:o,delimiter:i}=n;if("string"!==o.dtype)throw new Error("Input must be of datatype string");if(1!==o.shape.length)throw new Error(`Input must be a vector, got shape: ${o.shape}`);if(0!==i.shape.length)throw new Error(`Delimiter must be a scalar, got shape: ${i.shape}`);const c=t.readSync(o.dataId),u=t.readSync(i.dataId)[0],[d,p,l]=(0,r.S6)(c,u,s),h=p.length;return[t.makeTensorInfo([h,2],"int32",d),t.makeTensorInfo([h],"string",p),t.makeTensorInfo([2],"int32",new Int32Array(l))]}const o={kernelName:a.iW0,backendName:"webgl",kernelFunc:s}},64593:function(e,n,t){t.d(n,{J:function(){return o}});var a=t(9495),r=t(76905);
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
function s(e){const{inputs:n,backend:t,attrs:a}=e,{numBuckets:s}=a,{input:o}=n;if("string"!==o.dtype)throw new Error("Input must be of datatype string");if(s<=0)throw new Error("Number of buckets must be at least 1");const i=t.readSync(o.dataId),c=(0,r.fW)(i,s);return t.makeTensorInfo(o.shape,"int32",c)}const o={kernelName:a.$jE,backendName:"webgl",kernelFunc:s}},38483:function(e,n,t){t.d(n,{Z:function(){return c},j:function(){return i}});var a=t(9495),r=t(15411),s=t(76905);
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
const o="return a - b;",i=(0,r.j0)({opSnippet:o,packedOpSnippet:o,supportsComplex:!0,cpuKernelImpl:s.lL}),c={kernelName:a.PbM,backendName:"webgl",kernelFunc:i}},19327:function(e,n,t){t.d(n,{c:function(){return c},q:function(){return u}});var a=t(9495),r=t(68754),s=t(94043),o=t(95203);
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
function i(e,n,t,i){const c=n,u=e.shape.length,d=a.ZSL.parseAxisParam(c,e.shape);let p=d;const l=a.C0T.getAxesPermutation(p,u),h=null!=l;let f=e;h&&(f=(0,o._)(e,l,i),p=a.C0T.getInnerMostAxes(p.length,u)),a.C0T.assertAxesAreInnerMostDims("sum",p,u);const[k,b]=a.C0T.computeOutAndReduceShapes(f.shape,p);let m=k;t&&(m=a.C0T.expandShapeToKeepDim(k,d));const g=a.ZSL.sizeFromShape(b),I=a.ZSL.sizeFromShape(e.shape),x=I/g,w=(0,s.t)({inputs:{x:f},attrs:{shape:[x,g]},backend:i}),S=(0,a.chL)(e.dtype),N=(0,r.T)(w,S,"sum",i),y=(0,s.t)({inputs:{x:N},attrs:{shape:m},backend:i});return i.disposeIntermediateTensorInfo(w),i.disposeIntermediateTensorInfo(N),h&&i.disposeIntermediateTensorInfo(f),y}
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
function c(e){const{inputs:n,backend:t,attrs:a}=e,{x:r}=n,{axis:s,keepDims:o}=a;return i(r,s,o,t)}const u={kernelName:a.WuN,backendName:"webgl",kernelFunc:c}},43178:function(e,n,t){t.d(n,{W:function(){return i}});var a=t(9495),r=t(15411);
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
const s="return tan(x);",o=(0,r.vi)({opSnippet:s}),i={kernelName:a.oFs,backendName:"webgl",kernelFunc:o}},85048:function(e,n,t){t.d(n,{i:function(){return i}});var a=t(9495),r=t(15411);
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
const s="\n  float e2x = exp(-2.0 * abs(x));\n  return sign(x) * (1.0 - e2x) / (1.0 + e2x);\n",o=(0,r.vi)({opSnippet:s}),i={kernelName:a.iuW,backendName:"webgl",kernelFunc:o}}}]);
//# sourceMappingURL=chunk-vendors-9ae68186.a44e0ec0.js.map