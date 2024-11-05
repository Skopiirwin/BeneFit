"use strict";(self["webpackChunkbenefit"]=self["webpackChunkbenefit"]||[]).push([[9633],{8537:function(e,n,a){a.d(n,{X:function(){return p}});var t=a(9495),s=a(64374);
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
function r(e){const{inputs:n,backend:a,attrs:t}=e,{a:r,b:p}=n,{transposeA:u,transposeB:c}=t;return(0,s.L)({a:r,b:p,transposeA:u,transposeB:c,backend:a})}const p={kernelName:t.jAQ,backendName:"webgl",kernelFunc:r}},64374:function(e,n,a){a.d(n,{L:function(){return i},U:function(){return l}});var t=a(9495),s=a(15411),r=a(63288),p=a(26041),u=a(94043),c=a(19327),o=a(58246);
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
const l=1e3;function i({a:e,b:n,transposeA:a,transposeB:i,backend:h,bias:d=null,preluActivationWeights:b=null,leakyreluAlpha:k=0,activation:m=null}){const f=e.shape.length,g=n.shape.length,S=a?e.shape[f-2]:e.shape[f-1],x=i?n.shape[g-1]:n.shape[g-2],I=a?e.shape[f-1]:e.shape[f-2],N=i?n.shape[g-2]:n.shape[g-1],v=e.shape.slice(0,-2),A=n.shape.slice(0,-2),L=t.ZSL.sizeFromShape(v),y=t.ZSL.sizeFromShape(A),T=t.ZEY.assertAndGetBroadcastShape(e.shape.slice(0,-2),n.shape.slice(0,-2)),w=T.concat([I,N]);t.ZSL.assert(S===x,(()=>`Error in matMul: inner shapes (${S}) and (${x}) of Tensors with shapes ${e.shape} and ${n.shape} and transposeA=${a} and transposeB=${i} must match.`));const B=a?[L,S,I]:[L,I,S],C=i?[y,N,x]:[y,x,N],E=(0,u.t)({inputs:{x:e},backend:h,attrs:{shape:B}}),P=(0,u.t)({inputs:{x:n},backend:h,attrs:{shape:C}}),Z=[E,P],F=Math.max(L,y),G=a?E.shape[1]:E.shape[2],_=null!=d,z=null!=b,W="leakyrelu"===m,R=null!=m?(0,s.bE)(m,!0):null,q=_||z||W||null!=R;let O;if((1===I||1===N)&&G>l&&!1===q){let e=E,n=P;a&&(e=(0,o.m)({inputs:{x:E},backend:h,attrs:{perm:[0,2,1]}}),Z.push(e)),i&&(n=(0,o.m)({inputs:{x:P},backend:h,attrs:{perm:[0,2,1]}}),Z.push(n));const t=1!==N,s=1===N;let r=e;t&&(r=(0,u.t)({inputs:{x:e},backend:h,attrs:{shape:[F,G,1]}}),Z.push(r));const l=1===N?2:1;let d=n;s&&(d=(0,u.t)({inputs:{x:n},backend:h,attrs:{shape:[F,1,G]}}),Z.push(d));const b=(0,p.l)({inputs:{a:r,b:d},backend:h});O=(0,c.c)({inputs:{x:b},backend:h,attrs:{axis:l,keepDims:!0}}),Z.push(b)}else{const s=(0,t.TuY)(e.dtype,n.dtype),p=new r.P(B,C,[F,I,N],a,i,_,R,z,W),u=[E,P];if(null!=d&&u.push(d),z&&u.push(b),W){const e=h.makeTensorInfo([],"float32",t.ZSL.createScalarValue(k,"float32"));u.push(e),Z.push(e)}O=h.runWebGLProgram(p,u,s)}const $=(0,u.t)({inputs:{x:O},backend:h,attrs:{shape:w}});Z.push(O);for(const t of Z)h.disposeIntermediateTensorInfo(t);return $}},82339:function(e,n,a){a.d(n,{V:function(){return u}});var t=a(9495),s=a(29643),r=a(68616);
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
const p=({inputs:e,backend:n,attrs:a})=>{const{x:p,mean:u,variance:c,offset:o,scale:l}=e;t.ZSL.assert(u.shape.length===c.shape.length,(()=>"Batch normalization gradient requires mean and variance to have equal ranks.")),t.ZSL.assert(null==o||u.shape.length===o.shape.length,(()=>"Batch normalization gradient requires mean and offset to have equal ranks.")),t.ZSL.assert(null==l||u.shape.length===l.shape.length,(()=>"Batch normalization gradient requires mean and scale to have equal ranks."));let{varianceEpsilon:i}=a;null==i&&(i=.001);const h=[p,u,c];let d=null;null!=o&&(d=o.shape,h.push(o));let b=null;null!=l&&(b=l.shape,h.push(l));const k=(0,t._K2)().getBool("WEBGL_PACK_NORMALIZATION")?new r.x(p.shape,u.shape,c.shape,d,b,i):new s.f(p.shape,u.shape,c.shape,d,b,i),m=n.runWebGLProgram(k,h,h[0].dtype);return m},u={kernelName:t.i5R,backendName:"webgl",kernelFunc:p}},65514:function(e,n,a){a.d(n,{e:function(){return c}});var t=a(9495),s=a(94043),r=a(29547),p=a(58246);
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
const u=e=>{const{inputs:n,backend:a,attrs:u}=e,{x:c}=n,{blockShape:o,crops:l}=u;t.ZSL.assert(c.shape.length<=4,(()=>"batchToSpaceND for rank > 4 with a WebGL backend not implemented yet"));const i=o.reduce(((e,n)=>e*n)),h=t.C0T.getReshaped(c.shape,o,i),d=t.C0T.getPermuted(h.length,o.length),b=t.C0T.getReshapedPermuted(c.shape,o,i),k=t.C0T.getSliceBeginCoords(l,o.length),m=t.C0T.getSliceSize(b,l,o.length),f=[],g=(0,s.t)({inputs:{x:c},backend:a,attrs:{shape:h}}),S=(0,p.m)({inputs:{x:g},backend:a,attrs:{perm:d}}),x=(0,s.t)({inputs:{x:S},backend:a,attrs:{shape:b}}),I=(0,r.d)({inputs:{x:x},backend:a,attrs:{begin:k,size:m}});return f.push(g),f.push(S),f.push(x),f.forEach((e=>a.disposeIntermediateTensorInfo(e))),I},c={kernelName:t.Ik2,backendName:"webgl",kernelFunc:u}},72517:function(e,n,a){a.d(n,{l:function(){return p}});var t=a(9495),s=a(76905);
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
function r(e){const{inputs:n,backend:a,attrs:t}=e,{x:r,weights:p}=n,{size:u}=t,c=a.readSync(r.dataId),o=a.readSync(p.dataId),l=(0,s.jm)(c,o,p.dtype,p.shape,u);return a.makeTensorInfo([u],p.dtype,l)}const p={kernelName:t.N4F,backendName:"webgl",kernelFunc:r}},17845:function(e,n,a){a.d(n,{LY:function(){return l}});var t=a(9495),s=a(22897),r=a(46334),p=a(76905);
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
const u="\n  int r = int(a.r) & int(b.r);\n  int g = int(a.g) & int(b.g);\n  int rb = int(a.b) & int(b.b);\n  int ra = int(a.a) & int(b.a);\n  return vec4(r, g, rb, ra);\n",c="\n  return float(int(a.r) & int(b.r));\n";function o(e){const{inputs:n,backend:a}=e,{a:o,b:l}=n,i=(0,t._K2)().getBool("WEBGL_PACK_BINARY_OPERATIONS"),h=(0,t._K2)().getNumber("WEBGL_VERSION");if(a.shouldExecuteOnCPU([o,l])||1===h){const e=a.texData.get(o.dataId).values,n=a.texData.get(l.dataId).values,[t,s]=(0,p.PA)(o.shape,l.shape,e,n,o.dtype),r=a.makeTensorInfo(s,o.dtype),u=a.texData.get(r.dataId);return u.values=t,r}let d;return d=i?new r.VI(u,o.shape,l.shape,!1):new s.x(c,o.shape,l.shape),a.runWebGLProgram(d,[o,l],o.dtype)}const l={kernelName:t.HNs,backendName:"webgl",kernelFunc:o}},36951:function(e,n,a){a.d(n,{N:function(){return r}});var t=a(9495);
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
 */function s(e){const{inputs:n,backend:a}=e,{s0:s,s1:r}=n,p=a.readSync(s.dataId),u=a.readSync(r.dataId),c=t.C0T.assertAndGetBroadcastShape(Array.from(p),Array.from(u));return a.makeTensorInfo([c.length],"int32",Int32Array.from(c))}const r={kernelName:t.vj7,backendName:"webgl",kernelFunc:s}}}]);
//# sourceMappingURL=chunk-vendors-517ae7f8.410a7725.js.map