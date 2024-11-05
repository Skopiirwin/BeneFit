"use strict";(self["webpackChunkbenefit"]=self["webpackChunkbenefit"]||[]).push([[600],{7530:function(e,n,t){t.d(n,{O:function(){return i}});var a=t(9495),r=t(32068),o=t(94043);
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
function s(e){const{inputs:n,backend:t}=e,{x:s}=n,i=[...s.shape,...s.shape],u=a.ZSL.sizeFromShape(s.shape),c=(0,o.t)({inputs:{x:s},backend:t,attrs:{shape:[u]}}),l=new r.e(u),p=t.runWebGLProgram(l,[c],c.dtype),d=(0,o.t)({inputs:{x:p},backend:t,attrs:{shape:i}});return t.disposeIntermediateTensorInfo(c),t.disposeIntermediateTensorInfo(p),d}const i={kernelName:a.ORI,backendName:"webgl",kernelFunc:s}},31345:function(e,n,t){t.d(n,{F:function(){return i}});var a=t(9495),r=t(79229),o=t(94043);
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
function s(e){const{inputs:n,backend:t,attrs:s}=e,{x:i,filter:u}=n,{strides:c,pad:l,dilations:p}=s,d=a.C0T.computeDilation2DInfo(i.shape,u.shape,c,l,"NHWC",p);let f;const h=new r.x(d);f=t.runWebGLProgram(h,[i,u],"float32");const b=(0,o.t)({inputs:{x:f},backend:t,attrs:{shape:d.outShape}});return t.disposeIntermediateTensorInfo(f),b}const i={kernelName:a.jxD,backendName:"webgl",kernelFunc:s}},72718:function(e,n,t){t.d(n,{_:function(){return c}});var a=t(9495),r=t(26041),o=t(94043),s=t(19327),i=t(58246);
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
function u(e){const{inputs:n,backend:t,attrs:u}=e,{equation:c}=u,l=n,{allDims:p,summedDims:d,idDims:f}=a.C0T.decodeEinsumEquation(c,l.length);a.C0T.checkEinsumDimSizes(p.length,f,l);const{path:h,steps:b}=a.C0T.getEinsumComputePath(d,f),m=b.length;let k=null,g=p.length;const v=[];for(let x=0;x<m;++x){for(const e of b[x]){const{permutationIndices:n,expandDims:s}=a.C0T.getEinsumPermutation(g,f[e]);let u;a.C0T.isIdentityPermutation(n)?u=l[e]:(u=(0,i.m)({inputs:{x:l[e]},backend:t,attrs:{perm:n}}),v.push(u));const c=u.shape.slice();for(let e=0;e<s.length;++e)c.splice(s[e],0,1);a.ZSL.arraysEqual(u.shape,c)||(u=(0,o.t)({inputs:{x:u},backend:t,attrs:{shape:c}}),v.push(u)),null===k?k=u:(k=(0,r.l)({inputs:{a:u,b:k},backend:t}),v.push(k))}x<m-1&&(h[x]>=0&&(k=(0,s.c)({inputs:{x:k},backend:t,attrs:{axis:h[x]-(p.length-g),keepDims:!1}}),v.push(k)),g--)}for(const a of v)a!==k&&t.disposeIntermediateTensorInfo(a);return k}const c={kernelName:a.Qgm,backendName:"webgl",kernelFunc:u}},46321:function(e,n,t){t.d(n,{J:function(){return u}});var a=t(9495),r=t(15411);
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
const o="return (x >= 0.0) ? x : (exp(x) - 1.0);",s="\n  vec4 result;\n\n  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);\n  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);\n  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);\n  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);\n\n  return result;\n",i=(0,r.vi)({opSnippet:o,packedOpSnippet:s}),u={kernelName:a.Pah,backendName:"webgl",kernelFunc:i}},93057:function(e,n,t){t.d(n,{x:function(){return c}});var a=t(9495),r=t(22897),o=t(46334);
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
const s="return (b >= 0.0) ? a : a * (b + 1.0);",i="\n  vec4 bGTEZero = vec4(greaterThanEqual(b, vec4(0.)));\n  return (bGTEZero * a) + ((vec4(1.0) - bGTEZero) * (a * (b + vec4(1.0))));\n",u=e=>{const{inputs:n,backend:t}=e,{dy:u,y:c}=n,l=(0,a._K2)().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new o.VI(i,u.shape,c.shape):new r.x(s,u.shape,c.shape);return t.runWebGLProgram(l,[u,c],u.dtype)},c={kernelName:a.rsH,backendName:"webgl",kernelFunc:u}},73525:function(e,n,t){t.d(n,{R:function(){return c}});var a=t(9495),r=t(15411),o=t(76905);
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
const s="\n  return vec4(equal(a, b));\n",i="return float(a == b);",u=(0,r.j0)({opSnippet:i,packedOpSnippet:s,dtype:"bool",cpuKernelImpl:o.PP}),c={kernelName:a.BRl,backendName:"webgl",kernelFunc:u}},83910:function(e,n,t){t.d(n,{_:function(){return i}});var a=t(9495),r=t(15411);
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
const o=`\n  // Error function is calculated approximately with elementary function.\n  // See "Handbook of Mathematical Functions with Formulas,\n  // Graphs, and Mathematical Tables", Abramowitz and Stegun.\n  float p = ${a.C0T.ERF_P};\n  float a1 = ${a.C0T.ERF_A1};\n  float a2 = ${a.C0T.ERF_A2};\n  float a3 = ${a.C0T.ERF_A3};\n  float a4 = ${a.C0T.ERF_A4};\n  float a5 = ${a.C0T.ERF_A5};\n\n  float sign = sign(x);\n  x = abs(x);\n  float t = 1.0 / (1.0 + p * x);\n  return sign * (1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*exp(-x*x));\n`,s=(0,r.vi)({opSnippet:o}),i={kernelName:a._s9,backendName:"webgl",kernelFunc:s}},29450:function(e,n,t){t.d(n,{AC:function(){return c},oN:function(){return u}});var a=t(9495),r=t(15411),o=t(76905);
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
const s=r.Zt+"\n  return exp(x);\n",i="\n  vec4 result = exp(x);\n  bvec4 isNaN = isnan(x);\n  result.r = isNaN.r ? x.r : result.r;\n  result.g = isNaN.g ? x.g : result.g;\n  result.b = isNaN.b ? x.b : result.b;\n  result.a = isNaN.a ? x.a : result.a;\n\n  return result;\n",u=(0,r.vi)({opSnippet:s,packedOpSnippet:i,cpuKernelImpl:o.E$,dtype:"float32"}),c={kernelName:a.ox3,backendName:"webgl",kernelFunc:u}},98134:function(e,n,t){t.d(n,{U:function(){return o},a:function(){return s}});var a=t(9495),r=t(94043);
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
function o(e){const{inputs:n,attrs:t,backend:o}=e,{dim:s}=t,{input:i}=n,u=i.shape.length,c=i.shape.slice();let l=s;return s<0&&(a.ZSL.assert(-(u+1)<=s,(()=>`Axis must be in the interval [${-(u+1)}, ${u}]`)),l=u+s+1),c.splice(l,0,1),(0,r.t)({inputs:{x:i},backend:o,attrs:{shape:c}})}const s={kernelName:a.ybN,backendName:"webgl",kernelFunc:o}},70324:function(e,n,t){t.d(n,{Y:function(){return u}});var a=t(9495),r=t(15411),o=t(76905);
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
const s="return exp(x) - 1.0;",i=(0,r.vi)({opSnippet:s,packedOpSnippet:s,cpuKernelImpl:o.SF}),u={kernelName:a.ybj,backendName:"webgl",kernelFunc:i}},89805:function(e,n,t){t.d(n,{N:function(){return s}});var a=t(9495),r=t(98074);
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
function o(e){const{inputs:n,backend:t}=e,{input:a}=n;return(0,r.J)(a,!1,t)}const s={kernelName:a.rGP,backendName:"webgl",kernelFunc:o}},98074:function(e,n,t){t.d(n,{J:function(){return i}});var a=t(9495),r=t(49873),o=t(8993),s=t(94043);
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
function i(e,n,t){const i=t.texData.get(e.dataId),u=a.ZSL.sizeFromShape(e.shape),c=e.shape[e.shape.length-1],l=u/c,p=(0,s.t)({inputs:{x:e},backend:t,attrs:{shape:[l,c]}}),d=p.shape,f=new r.R("real",d,n),h=new r.R("imag",d,n),b=[{dataId:i.complexTensorInfos.real.dataId,dtype:i.complexTensorInfos.real.dtype,shape:d},{dataId:i.complexTensorInfos.imag.dataId,dtype:i.complexTensorInfos.imag.dtype,shape:d}],m=t.runWebGLProgram(f,b,"float32"),k=t.runWebGLProgram(h,b,"float32"),g=(0,o.f)({inputs:{real:m,imag:k},backend:t});t.disposeIntermediateTensorInfo(m),t.disposeIntermediateTensorInfo(k);const v=(0,s.t)({inputs:{x:g},backend:t,attrs:{shape:e.shape}});return t.disposeIntermediateTensorInfo(p),t.disposeIntermediateTensorInfo(g),v}},37664:function(e,n,t){t.d(n,{G:function(){return o},u:function(){return s}});var a=t(9495),r=t(27906);
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
function o(e){const{backend:n,attrs:t}=e,{shape:o,value:s}=t;let{dtype:i}=t;if(i=i||a.ZSL.inferDtype(s),"string"===i){const e=a.ZSL.getArrayFromDType(i,a.ZSL.sizeFromShape(o));return e.fill(s),n.makeTensorInfo(o,i,e)}{const e=new r.w(o,s),t=[[s]];return n.runWebGLProgram(e,[],i,t)}}const s={kernelName:a.SQl,backendName:"webgl",kernelFunc:o}},99893:function(e,n,t){t.d(n,{D:function(){return o}});var a=t(9495),r=t(54057);
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
const o={kernelName:a.BxF,backendName:"webgl",kernelFunc:({inputs:e,backend:n})=>{const{image:t}=e,a=n,o=new r.T(t.shape),s=a.runWebGLProgram(o,[t],t.dtype);return s}}},54087:function(e,n,t){t.d(n,{H:function(){return u}});var a=t(9495),r=t(15411),o=t(76905);
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
const s="return floor(x);",i=(0,r.vi)({opSnippet:s,packedOpSnippet:s,cpuKernelImpl:o.CJ}),u={kernelName:a.ZgB,backendName:"webgl",kernelFunc:i}},15328:function(e,n,t){t.d(n,{U:function(){return u}});var a=t(9495),r=t(15411);
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
const o="\n  float s = sign(a) * sign(b);\n  int ia = round(a);\n  int ib = round(b);\n  if (ib != 0) {\n    // Windows (D3D) wants guaranteed non-zero int division at compile-time.\n    return float(idiv(ia, ib, s));\n  } else {\n    return NAN;\n  }\n",s="\n  ivec4 ia = round(a);\n  ivec4 ib = round(b);\n  bvec4 cond = notEqual(ib, ivec4(0));\n  ivec4 result = ivec4(0);\n  vec4 s = sign(a) * sign(b);\n\n  // Windows (D3D) wants guaranteed non-zero int division at compile-time.\n  if (cond[0]) {\n    result[0] = idiv(ia[0], ib[0], s[0]);\n  }\n  if (cond[1]) {\n    result[1] = idiv(ia[1], ib[1], s[1]);\n  }\n  if (cond[2]) {\n    result[2] = idiv(ia[2], ib[2], s[2]);\n  }\n  if (cond[3]) {\n    result[3] = idiv(ia[3], ib[3], s[3]);\n  }\n  return vec4(result);\n",i=(0,r.j0)({opSnippet:o,packedOpSnippet:s,dtype:"int32"}),u={kernelName:a.ElG,backendName:"webgl",kernelFunc:i}},11261:function(e,n,t){t.d(n,{y:function(){return u}});var a=t(9495),r=t(28560),o=t(18765);
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
class s{constructor(e){this.variableNames=["A"];const n=(0,o.B)(),[t,a]=e;this.outputShape=e,this.userCode=`\n      void main() {\n        ivec3 coords = getOutputCoords();\n        int texR = coords[0];\n        int texC = coords[1];\n        int depth = coords[2];\n        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${a}.0, ${t}.0);\n\n        vec4 values = ${n.texture2D}(A, uv);\n        float value;\n        if (depth == 0) {\n          value = values.r;\n        } else if (depth == 1) {\n          value = values.g;\n        } else if (depth == 2) {\n          value = values.b;\n        } else if (depth == 3) {\n          value = values.a;\n        }\n\n        setOutput(floor(value * 255.0 + 0.5));\n      }\n    `}}
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
class i{constructor(e){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0;const n=(0,o.B)(),[t,a]=e;this.outputShape=e,this.userCode=`\n      void main() {\n        ivec3 coords = getOutputCoords();\n        int texR = coords[0];\n        int texC = coords[1];\n        int depth = coords[2];\n\n        vec4 result = vec4(0.);\n\n        for(int row=0; row<=1; row++) {\n          for(int col=0; col<=1; col++) {\n            texC = coords[1] + row;\n            depth = coords[2] + col;\n\n            vec2 uv = (vec2(texC, texR) + halfCR) /\n                       vec2(${a}.0, ${t}.0);\n            vec4 values = ${n.texture2D}(A, uv);\n            float value;\n            if (depth == 0) {\n              value = values.r;\n            } else if (depth == 1) {\n              value = values.g;\n            } else if (depth == 2) {\n              value = values.b;\n            } else if (depth == 3) {\n              value = values.a;\n            }\n\n            result[row * 2 + col] = floor(value * 255.0 + 0.5);\n          }\n        }\n\n        ${n.output} = result;\n      }\n    `}}
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
const u={kernelName:a.awo,backendName:"webgl",kernelFunc:p};let c,l=(0,a._K2)().getBool("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU");function p(e){const{inputs:n,backend:t,attrs:o}=e;let{pixels:u}=n;const{numChannels:p}=o,d="undefined"!==typeof HTMLVideoElement&&u instanceof HTMLVideoElement,f="undefined"!==typeof HTMLImageElement&&u instanceof HTMLImageElement,[h,b]=d?[u.videoWidth,u.videoHeight]:[u.width,u.height],m=[b,h],k=[b,h,p];if(f||d){const e=(0,a._K2)().getBool("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU");null!=c&&e===l||(l=e,c=document.createElement("canvas").getContext("2d",{willReadFrequently:l})),c.canvas.width=h,c.canvas.height=b,c.drawImage(u,0,0,h,b),u=c.canvas}const g=t.makeTensorInfo(m,"int32");t.texData.get(g.dataId).usage=r.tT.PIXELS,t.gpgpu.uploadPixelDataToTexture(t.getTexture(g.dataId),u);const v=(0,a._K2)().getBool("WEBGL_PACK")?new i(k):new s(k),x=t.runWebGLProgram(v,[g],"int32");return t.disposeData(g.dataId),x}},39882:function(e,n,t){t.d(n,{q:function(){return l}});var a=t(9495),r=t(21005),o=t(78762),s=t(15411),i=t(53002),u=t(94043);
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
function c(e){const{inputs:n,backend:t,attrs:c}=e,{x:l,filter:p,bias:d,preluActivationWeights:f}=n,{strides:h,pad:b,dataFormat:m,dilations:k,dimRoundingMode:g,activation:v,leakyreluAlpha:x}=c,I=a.C0T.convertConv2DDataFormat(m),N=a.C0T.computeConv2DInfo(l.shape,p.shape,h,k,b,g,!1,I);let S;const w=[],T=null!=d,E=null!=f,F="leakyrelu"===v,y=()=>{const e=[l,p],n=(e,n)=>{if("NCHW"===n&&1===e.shape.length&&1!==e.shape[0]){const n=(0,u.t)({inputs:{x:e},backend:t,attrs:{shape:[e.shape[0],1,1]}});return w.push(n),n}return e};if(T&&e.push(n(d,m)),E&&e.push(n(f,m)),F){const n=t.makeTensorInfo([],"float32",a.ZSL.createScalarValue(x,"float32"));e.push(n),w.push(n)}return e};if(1!==N.filterHeight||1!==N.filterWidth||1!==N.dilationHeight||1!==N.dilationWidth||1!==N.strideHeight||1!==N.strideWidth||"SAME"!==N.padInfo.type&&"VALID"!==N.padInfo.type)if(N.strideWidth<=2&&"channelsLast"===I&&(0,a._K2)().getBool("WEBGL_EXP_CONV")){const e=v?(0,s.bE)(v,!0):null,n=new o.Z(N,T,e,E,F),a=[[N.padInfo.top,N.padInfo.left],[N.strideHeight,N.strideWidth],[N.dilationHeight,N.dilationWidth],[N.inHeight,N.inWidth]],r=y();S=t.runWebGLProgram(n,r,"float32",a)}else if((0,a._K2)().getBool("WEBGL_CONV_IM2COL"))S=(0,i.J)({x:l,filter:p,convInfo:N,backend:t,bias:d,activation:v,preluActivationWeights:f,leakyreluAlpha:x});else{const e=v?(0,s.bE)(v,!1):null,n=new r.B(N,T,e,E,F),a=y();S=t.runWebGLProgram(n,a,"float32")}else S=(0,i.K)({x:l,filter:p,convInfo:N,backend:t,bias:d,activation:v,preluActivationWeights:f,leakyreluAlpha:x});const C=(0,u.t)({inputs:{x:S},backend:t,attrs:{shape:N.outShape}});return w.push(S),w.forEach((e=>t.disposeIntermediateTensorInfo(e))),C}const l={kernelName:a.aAr,backendName:"webgl",kernelFunc:c}},65057:function(e,n,t){t.d(n,{l:function(){return u}});var a=t(9495),r=t(4999),o=t(10424),s=t(15411);
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
function i(e){const{inputs:n,backend:t,attrs:i}=e,{x:u,filter:c,bias:l,preluActivationWeights:p}=n,{strides:d,pad:f,dilations:h,dimRoundingMode:b,activation:m,leakyreluAlpha:k}=i,g=[];let v=h;null==v&&(v=[1,1]),a.ZSL.assert(a.C0T.eitherStridesOrDilationsAreOne(d,v),(()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${d} and dilations '${v}'`));const x=a.C0T.computeConv2DInfo(u.shape,c.shape,d,v,f,b,!0),I=(0,a._K2)().getBool("WEBGL_PACK_DEPTHWISECONV")&&x.strideWidth<=2&&x.outChannels/x.inChannels===1,N=m?(0,s.bE)(m,I):null,S=[u,c],w=null!=l,T=null!=p,E="leakyrelu"===m;if(w&&S.push(l),T&&S.push(p),E){const e=t.makeTensorInfo([],"float32",a.ZSL.createScalarValue(k,"float32"));S.push(e),g.push(e)}let F;F=I?new o.K(x,w,N,T,E):new r.E(x,w,N,T,E);const y=[[x.padInfo.top,x.padInfo.left],[x.strideHeight,x.strideWidth],[x.dilationHeight,x.dilationWidth],[x.inHeight,x.inWidth]],C=t.runWebGLProgram(F,S,"float32",y);return g.forEach((e=>t.disposeIntermediateTensorInfo(e))),C}const u={kernelName:a.T7M,backendName:"webgl",kernelFunc:i}},66900:function(e,n,t){t.d(n,{K:function(){return u}});var a=t(9495),r=t(96911),o=t(76905),s=t(94043);
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
function i(e){const{inputs:n,backend:t}=e,{params:i,indices:u}=n,c=u.shape,l=c[c.length-1],p=a.ZSL.sizeFromShape(i.shape),[d,f,h,b]=a.C0T.prepareAndValidate(i,u),m=(0,s.t)({inputs:{x:u},backend:t,attrs:{shape:[f,l]}}),k=(0,s.t)({inputs:{x:i},backend:t,attrs:{shape:[a.ZSL.sizeFromShape(i.shape)/h,h]}});if(t.shouldExecuteOnCPU([i,u])||"string"===i.dtype){const e=t.readSync(u.dataId),n=t.bufferSync(i),a=(0,o.UF)(e,n,i.dtype,f,l,h,b,i.shape,p);return t.makeTensorInfo(d,i.dtype,a.values)}const g=new r.g(l,b,[f,h],i.shape),v=t.runWebGLProgram(g,[k,m],k.dtype),x=(0,s.t)({inputs:{x:v},backend:t,attrs:{shape:d}});return t.disposeIntermediateTensorInfo(m),t.disposeIntermediateTensorInfo(k),t.disposeIntermediateTensorInfo(v),x}const u={kernelName:a.O4G,backendName:"webgl",kernelFunc:i}},23706:function(e,n,t){t.d(n,{C:function(){return i},a:function(){return u}});var a=t(9495),r=t(60432),o=t(76905),s=t(94043);
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
function i(e){const{inputs:n,backend:t,attrs:i}=e,{x:u,indices:c}=n,{axis:l,batchDims:p}=i,d=a.ZSL.parseAxisParam(l,u.shape)[0];if((0,a._K2)().get("DEBUG")){const e=t.readSync(c.dataId),n=u.shape[d];for(let t=0;t<e.length;++t){const r=e[t];a.ZSL.assert(r<=n-1&&r>=0,(()=>`GatherV2: the index value ${r} is not in [0, ${n-1}]`))}}const f=a.C0T.segment_util.collectGatherOpShapeInfo(u,c,d,p),h=a.ZSL.sizeFromShape(c.shape),b=[],m=(0,s.t)({inputs:{x:u},backend:t,attrs:{shape:[f.batchSize,f.outerSize,f.dimSize,f.sliceSize]}}),k=(0,s.t)({inputs:{x:c},backend:t,attrs:{shape:[f.batchSize,h/f.batchSize]}});b.push(m),b.push(k);const g=[f.batchSize,f.outerSize,h/f.batchSize,f.sliceSize];if(t.shouldExecuteOnCPU([u,c])||"string"===u.dtype){const e=t.bufferSync(k),n=t.bufferSync(m),a=(0,o.QM)(n,e,g);return b.forEach((e=>t.disposeIntermediateTensorInfo(e))),t.makeTensorInfo(f.outputShape,a.dtype,a.values)}const v=new r.u(m.shape,g),x=t.runWebGLProgram(v,[m,k],m.dtype);b.push(x);const I=(0,s.t)({inputs:{x:x},backend:t,attrs:{shape:f.outputShape}});return b.forEach((e=>t.disposeIntermediateTensorInfo(e))),I}const u={kernelName:a.mxL,backendName:"webgl",kernelFunc:i}},95171:function(e,n,t){t.d(n,{x:function(){return c}});var a=t(9495),r=t(15411),o=t(76905);
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
const s="return float(a > b);",i="\n  return vec4(greaterThan(a, b));\n",u=(0,r.j0)({opSnippet:s,packedOpSnippet:i,cpuKernelImpl:o.Tm,dtype:"bool"}),c={kernelName:a.XhZ,backendName:"webgl",kernelFunc:u}},379:function(e,n,t){t.d(n,{V:function(){return c}});var a=t(9495),r=t(15411),o=t(76905);
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
const s="return float(a >= b);",i="\n  return vec4(greaterThanEqual(a, b));\n",u=(0,r.j0)({opSnippet:s,packedOpSnippet:i,dtype:"bool",cpuKernelImpl:o.BW}),c={kernelName:a.lLS,backendName:"webgl",kernelFunc:u}},66696:function(e,n,t){t.d(n,{c:function(){return s}});var a=t(9495),r=t(98074);
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
function o(e){const{inputs:n,backend:t}=e,{input:a}=n;return(0,r.J)(a,!0,t)}const s={kernelName:a.OAQ,backendName:"webgl",kernelFunc:o}},77723:function(e,n,t){t.d(n,{D:function(){return r},F:function(){return o}});var a=t(9495);
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
 */function r(e){const{inputs:n,backend:t}=e,{x:a}=n;return t.incRef(a.dataId),{dataId:a.dataId,shape:a.shape,dtype:a.dtype}}const o={kernelName:a.lzr,backendName:"webgl",kernelFunc:r}},39803:function(e,n,t){t.d(n,{l:function(){return s},n:function(){return o}});var a=t(9495),r=t(77723);
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
function o(e){const{inputs:n,backend:t}=e,{input:a}=n,o=t.texData.get(a.dataId);return(0,r.D)({inputs:{x:o.complexTensorInfos.imag},backend:t})}const s={kernelName:a.dv8,backendName:"webgl",kernelFunc:o}},83834:function(e,n,t){t.d(n,{K:function(){return i}});var a=t(9495),r=t(15411);
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
const o="return float(!isnan(x) && !isinf(x));",s=(0,r.vi)({opSnippet:o,dtype:"bool"}),i={kernelName:a.gIW,backendName:"webgl",kernelFunc:s}},95442:function(e,n,t){t.d(n,{I:function(){return i}});var a=t(9495),r=t(15411);
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
const o="return float(isinf(x));",s=(0,r.vi)({opSnippet:o,dtype:"bool"}),i={kernelName:a.E3$,backendName:"webgl",kernelFunc:s}},3872:function(e,n,t){t.d(n,{I:function(){return i}});var a=t(9495),r=t(15411);
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
const o="return float(isnan(x));",s=(0,r.vi)({opSnippet:o,dtype:"bool"}),i={kernelName:a.iPs,backendName:"webgl",kernelFunc:s}},6489:function(e,n,t){t.d(n,{x:function(){return i}});var a=t(9495),r=t(66501),o=t(19314);
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
const s=e=>{const{inputs:n,backend:t,attrs:s}=e,{x:i}=n,{depthRadius:u,bias:c,alpha:l,beta:p}=s,d=(0,a._K2)().getBool("WEBGL_PACK_NORMALIZATION")?new o.f(i.shape,u,c,l,p):new r.F(i.shape,u,c,l,p);return t.runWebGLProgram(d,[i],i.dtype)},i={kernelName:a.jM4,backendName:"webgl",kernelFunc:s}},89193:function(e,n,t){t.d(n,{j:function(){return s}});var a=t(9495),r=t(96146);
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
const o=e=>{const{inputs:n,backend:t,attrs:a}=e,{x:o,y:s,dy:i}=n,{depthRadius:u,bias:c,alpha:l,beta:p}=a,d=new r.j(o.shape,u,c,l,p);return t.runWebGLProgram(d,[o,s,i],o.dtype)},s={kernelName:a.ToN,backendName:"webgl",kernelFunc:o}}}]);
//# sourceMappingURL=chunk-vendors-32600b5e.3e56a304.js.map