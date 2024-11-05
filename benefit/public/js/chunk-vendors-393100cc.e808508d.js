"use strict";(self["webpackChunkbenefit"]=self["webpackChunkbenefit"]||[]).push([[1663],{48223:function(e,n,s){s.d(n,{j:function(){return c}});var a=s(9495),t=s(46334),r=s(15411);
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
const o="\n  if(a < 0.0 && floor(b) < b){\n    return NAN;\n  }\n  if (b == 0.0) {\n    return 1.0;\n  }\n  return (round(mod(b, 2.0)) != 1) ?\n      pow(abs(a), b) : sign(a) * pow(abs(a), b);\n",u="\n  // isModRound1 has 1 for components with round(mod(b, 2.0)) == 1, 0 otherwise.\n  vec4 isModRound1 = vec4(equal(round(mod(b, 2.0)), ivec4(1)));\n  vec4 multiplier = sign(a) * isModRound1 + (vec4(1.0) - isModRound1);\n  vec4 result = multiplier * pow(abs(a), b);\n\n  // Ensure that a^0 = 1, including 0^0 = 1 as this correspond to TF and JS\n  bvec4 isExpZero = equal(b, vec4(0.0));\n  result.r = isExpZero.r ? 1.0 : result.r;\n  result.g = isExpZero.g ? 1.0 : result.g;\n  result.b = isExpZero.b ? 1.0 : result.b;\n  result.a = isExpZero.a ? 1.0 : result.a;\n\n  bvec4 isNaN1 = lessThan(a, vec4(0.0));\n  bvec4 isNaN2 = lessThan(floor(b), b);\n  bvec4 isNaN = bvec4(isNaN1.x && isNaN2.x, isNaN1.y && isNaN2.y, isNaN1.z && isNaN2.z, isNaN1.w && isNaN2.w);\n  "+t.qq+"\n  return result;\n",i=(0,r.j0)({opSnippet:o,packedOpSnippet:u}),c={kernelName:a.pyJ,backendName:"webgl",kernelFunc:i}},14899:function(e,n,s){s.d(n,{CN:function(){return u},DH:function(){return o},HK:function(){return c}});var a=s(9495),t=s(22897),r=s(46334);
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
const o="return (a < 0.) ? b * a : a;",u="\n  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));\n  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);\n";function i(e){const{inputs:n,backend:s}=e,{x:i,alpha:c}=n,p=(0,a._K2)().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new r.VI(u,i.shape,c.shape):new t.x(o,i.shape,c.shape);return s.runWebGLProgram(p,[i,c],"float32")}const c={kernelName:a.Ncv,backendName:"webgl",kernelFunc:i}},74952:function(e,n,s){s.d(n,{S:function(){return c}});var a=s(9495),t=s(68754),r=s(76905),o=s(94043),u=s(58246);
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
function i(e){const{inputs:n,backend:s,attrs:i}=e,{x:c}=n,{axis:p,keepDims:l}=i,d=c.shape.length,b=[],h=a.ZSL.parseAxisParam(p,c.shape);let N=h;const f=a.C0T.getAxesPermutation(N,d);let m,k=c;if(null!=f&&(k=(0,u.m)({inputs:{x:c},backend:s,attrs:{perm:f}}),N=a.C0T.getInnerMostAxes(N.length,d),b.push(k)),a.C0T.assertAxesAreInnerMostDims("prod",N,d),s.shouldExecuteOnCPU([k])){const e=s.texData.get(k.dataId).values,{outVals:n,outShape:a,outDtype:t}=(0,r.Og)(k.shape,k.dtype,e,N);m=s.makeTensorInfo(a,t,n)}else{const[e,n]=a.C0T.computeOutAndReduceShapes(k.shape,N),r=a.ZSL.sizeFromShape(n),u=(0,o.t)({inputs:{x:k},backend:s,attrs:{shape:[-1,r]}}),i=(0,a.chL)(c.dtype),p=(0,t.T)(u,i,"prod",s);m=(0,o.t)({inputs:{x:p},backend:s,attrs:{shape:e}}),b.push(u),b.push(p)}if(l){b.push(m);const e=a.C0T.expandShapeToKeepDim(m.shape,h);m=(0,o.t)({inputs:{x:m},backend:s,attrs:{shape:e}})}return b.forEach((e=>s.disposeIntermediateTensorInfo(e))),m}const c={kernelName:a.kdj,backendName:"webgl",kernelFunc:i}}}]);
//# sourceMappingURL=chunk-vendors-393100cc.e808508d.js.map