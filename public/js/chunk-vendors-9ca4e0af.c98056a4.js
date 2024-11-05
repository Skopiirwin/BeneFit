"use strict";(self["webpackChunkbenefit"]=self["webpackChunkbenefit"]||[]).push([[9048],{70637:function(e,n,t){t.d(n,{B:function(){return u}});var s=t(9495),a=t(8939),r=t(94043);
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
function o(e){const{inputs:n,backend:t,attrs:o}=e,{tensor:u,indices:c,updates:i}=n,{}=o,{sliceRank:p,numUpdates:d,sliceSize:l,strides:f,outputSize:h}=s.C0T.calculateShapes(i,c,u.shape),k=[h/l,l];if(0===h)return t.makeTensorInfo(u.shape,c.dtype);const m=(0,r.t)({inputs:{x:c},backend:t,attrs:{shape:[d,p]}}),b=(0,r.t)({inputs:{x:i},backend:t,attrs:{shape:[d,l]}}),g=(0,r.t)({inputs:{x:u},backend:t,attrs:{shape:k}}),I=new a.$(d,p,m.shape.length,b.shape.length,f,k,!1,!0),x=t.runWebGLProgram(I,[b,m,g],g.dtype),T=(0,r.t)({inputs:{x:x},backend:t,attrs:{shape:u.shape}});return t.disposeIntermediateTensorInfo(m),t.disposeIntermediateTensorInfo(b),t.disposeIntermediateTensorInfo(g),t.disposeIntermediateTensorInfo(x),T}const u={kernelName:s.X4r,backendName:"webgl",kernelFunc:o}},74021:function(e,n,t){t.d(n,{V:function(){return o},n:function(){return u}});var s=t(9495),a=t(76905),r=t(20771);
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
function o(e){const{inputs:n,backend:t,attrs:o}=e,{x:u}=n,{reps:c}=o;if("string"===u.dtype||u.shape.length>5){const e=t.readSync(u.dataId),n="string"===u.dtype?e.map((e=>s.ZSL.decodeString(e))):e,r=(0,s.ra8)(u.shape,u.dtype,n),o=(0,a.$O)(r,c);return t.makeTensorInfo(o.shape,o.dtype,o.values)}const i=new r.$(u.shape,c),p=t.runWebGLProgram(i,[u],u.dtype);return p}const u={kernelName:s.FAs,backendName:"webgl",kernelFunc:o}},72641:function(e,n,t){t.d(n,{p:function(){return f}});var s=t(9495),a=t(76905),r=t(76540),o=t(37664),u=t(23706),c=t(94043),i=t(29547);
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
function p(e,n){null!==n&&e.disposeIntermediateTensorInfo(n)}function d(e){let n=1;while(n<e)n*=2;return n}function l(e){const{inputs:n,backend:t,attrs:l}=e,{x:f}=n,{k:h,sorted:k}=l,m=(0,s._K2)().getNumber("TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD"),b=(0,s._K2)().getNumber("TOPK_K_CPU_HANDOFF_THRESHOLD"),g=f.shape,I=g[g.length-1];if(t.shouldExecuteOnCPU([f])||I<m||h>b){const e=t.readSync(f.dataId),[n,s]=(0,a.xt)(e,g,f.dtype,h,k);return[t.makeTensorInfo(n.shape,n.dtype,n.values),t.makeTensorInfo(s.shape,s.dtype,s.values)]}if(0===h)return g[g.length-1]=0,[t.makeTensorInfo(g,f.dtype,[]),t.makeTensorInfo(g,"int32",[])];if(1===I)return[f,(0,o.G)({attrs:{shape:g,dtype:"int32",value:0},backend:t})];const x=t.texData.get(f.dataId),T=null!==x&&x.isPacked,y=T?t.unpackTensor(f):f,w=s.ZSL.sizeFromShape(g),N=w/I,S=(0,c.t)({inputs:{x:y},attrs:{shape:[N,I]},backend:t});T&&p(t,y);const v=d(h),A=d(I);let _=null;const P=()=>null===_?[S,S]:[S,_],F=(e,n,s)=>{const a=P(),o=new r.K(s),u=null===_?1:0,c=[[I],[u],[Number.NEGATIVE_INFINITY],[e],[n]],i=_;_=t.runWebGLProgram(o,a,"int32",c),p(t,i)};for(let s=1;s<v;s*=2){const e=2*s;for(let n=s;n>=1;n/=2)F(e,n,[N,A])}for(let s=A;s>v;s/=2){const e=P(),n=new r.T([N,s/2]),a=null===_?1:0,o=[[I],[a],[v]],u=_;_=t.runWebGLProgram(n,e,"int32",o),p(t,u);const c=v/2,i=2*c;for(let t=c;t>=1;t/=2)F(i,t,_.shape)}let C=_;_=(0,i.d)({inputs:{x:_},backend:t,attrs:{begin:0,size:[N,h]}}),p(t,C);let L=(0,u.C)({inputs:{x:S,indices:_},backend:t,attrs:{axis:1,batchDims:1}});p(t,S);const O=g.slice(0,-1);O.push(h),C=_,_=(0,c.t)({inputs:{x:_},attrs:{shape:O},backend:t}),p(t,C);const E=L;return L=(0,c.t)({inputs:{x:L},attrs:{shape:O},backend:t}),p(t,E),[L,_]}const f={kernelName:s.TBb,backendName:"webgl",kernelFunc:l}},31137:function(e,n,t){t.d(n,{N:function(){return o}});var s=t(9495),a=t(23601);
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
function r(e){const{inputs:n,backend:t,attrs:s}=e,{image:r,transforms:o}=n,{interpolation:u,fillMode:c,fillValue:i,outputShape:p}=s,[d,l,f,h]=r.shape,[k,m]=null!=p?p:[l,f],b=[d,k,m,h],g=new a.R(l,f,u,c,i,b);return t.runWebGLProgram(g,[r,o],"float32")}const o={kernelName:s.dLy,backendName:"webgl",kernelFunc:r}},58246:function(e,n,t){t.d(n,{W:function(){return u},m:function(){return o}});var s=t(9495),a=t(95203),r=t(76905);
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
function o(e){const{inputs:n,backend:t,attrs:s}=e,{x:o}=n,{perm:u}=s,c=t,i=o.shape.length,p=new Array(i);for(let a=0;a<p.length;a++)p[a]=o.shape[u[a]];let d;if(c.shouldExecuteOnCPU([o])){const e=c.texData.get(o.dataId),n=e.values,t=(0,r.Q5)(n,o.shape,o.dtype,u,p);d=c.makeTensorInfo(p,o.dtype);const s=c.texData.get(d.dataId);s.values=t}else d=(0,a._)(o,u,c);return d}const u={kernelName:s.wx0,backendName:"webgl",kernelFunc:o}},95203:function(e,n,t){t.d(n,{_:function(){return o}});var s=t(9495),a=t(81322),r=t(55315);
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
function o(e,n,t){const o=(0,s._K2)().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new r.Y(e.shape,n):new a.u(e.shape,n);return t.runWebGLProgram(o,[e],e.dtype)}},29154:function(e,n,t){t.d(n,{a:function(){return u}});var s=t(9495),a=t(76905),r=t(88380);
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
function o(e){const{inputs:n,attrs:t,backend:s}=e,{axis:o}=t,{x:u}=n;(0,r.CE)(u,"unique"),console.warn("WARNING: ","UI might be locked temporarily as data is being downloaded");const c=s.readSync(u.dataId),{outputValues:i,outputShape:p,indices:d}=(0,a.M_)(c,o,u.shape,u.dtype);return[s.makeTensorInfo(p,u.dtype,i),s.makeTensorInfo([d.length],"int32",d)]}const u={kernelName:s.EwU,backendName:"webgl",kernelFunc:o}},41719:function(e,n,t){t.d(n,{B:function(){return u}});var s=t(9495),a=t(94043),r=t(29547);
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
function o(e){const{inputs:n,backend:t,attrs:s}=e,{value:o}=n;let{axis:u}=s;u<0&&(u+=o.shape.length);const c=o,i=c.shape.length,p=o.shape[u],d=new Array(i-1);let l=0;for(let a=0;a<i;a++)a!==u&&(d[l++]=c.shape[a]);const f=[],h=new Array(i).fill(0),k=c.shape.slice();k[u]=1;const m=new Array(p);for(let b=0;b<m.length;b++){h[u]=b;const e=(0,r.d)({inputs:{x:c},backend:t,attrs:{begin:h,size:k}}),n=(0,a.t)({inputs:{x:e},backend:t,attrs:{shape:d}});m[b]=n,f.push(e)}return f.forEach((e=>t.disposeIntermediateTensorInfo(e))),m}const u={kernelName:s.dXR,backendName:"webgl",kernelFunc:o}},50307:function(e,n,t){t.d(n,{b:function(){return p}});var s=t(9495),a=t(50476),r=t(39264),o=t(94043),u=t(74021),c=t(58246);
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
function i(e){const{inputs:n,backend:t,attrs:i}=e,{x:p,segmentIds:d}=n,{numSegments:l}=i,f=p.shape.length,h=[];let k=0;const m=s.C0T.getAxesPermutation([k],f);let b=p;null!=m&&(b=(0,c.m)({inputs:{x:p},backend:t,attrs:{perm:m}}),h.push(b),k=s.C0T.getInnerMostAxes(1,f)[0]);const g=s.C0T.segment_util.computeOutShape(b.shape,k,l),I=s.ZSL.sizeFromShape([b.shape[k]]),x=(0,o.t)({inputs:{x:b},backend:t,attrs:{shape:[-1,I]}});h.push(x);const T=(0,s.chL)(p.dtype),y=(e,n,o,c,i)=>{const p=e.shape[0],d=e.shape[1],l=s.C0T.segment_util.segOpComputeOptimalWindowSize(d,i),f={windowSize:l,inSize:d,batchSize:p,numSegments:i},k=new a.v(f,n),m=t.compileAndRun(k,[e,o],c);if(h.push(m),m.shape[1]===i)return m;const b=(0,r.y)({backend:t,attrs:{start:0,stop:i,step:1,dtype:"float32"}}),g=(0,u.V)({inputs:{x:b},backend:t,attrs:{reps:[d/l]}});h.push(b),h.push(g);const I=y(m,n,g,c,i);return I},w=y(x,"unsortedSegmentSum",d,T,l),N=(0,o.t)({inputs:{x:w},backend:t,attrs:{shape:g}});let S=N;if(null!=m){h.push(N);const e=s.C0T.getUndoAxesPermutation(m);S=(0,c.m)({inputs:{x:S},backend:t,attrs:{perm:e}})}return h.forEach((e=>t.disposeIntermediateTensorInfo(e))),S}const p={kernelName:s.pPe,backendName:"webgl",kernelFunc:i}},30097:function(e,n,t){t.d(n,{P:function(){return c},Z:function(){return i}});var s=t(9495),a=t(8993),r=t(37664),o=t(39803),u=t(4313);
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
function c(e){const{inputs:n,backend:t}=e,{x:s}=n;if("complex64"===s.dtype){const e=(0,u.x)({inputs:{input:s},backend:t}),n=c({inputs:{x:e},backend:t}),r=(0,o.n)({inputs:{input:s},backend:t}),i=c({inputs:{x:r},backend:t}),p=(0,a.f)({inputs:{real:n,imag:i},backend:t});return t.disposeIntermediateTensorInfo(e),t.disposeIntermediateTensorInfo(n),t.disposeIntermediateTensorInfo(r),t.disposeIntermediateTensorInfo(i),p}return(0,r.G)({attrs:{shape:s.shape,dtype:s.dtype,value:"string"===s.dtype?"":0},backend:t})}const i={kernelName:s.xJ3,backendName:"webgl",kernelFunc:c}},47149:function(e,n,t){t.d(n,{l:function(){return o}});var s=t(9495),a=t(64374);
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
function r(e){const{inputs:n,backend:t,attrs:s}=e,{a:r,b:o,bias:u,preluActivationWeights:c}=n,{transposeA:i,transposeB:p,activation:d,leakyreluAlpha:l}=s;return(0,a.L)({a:r,b:o,transposeA:i,transposeB:p,backend:t,bias:u,preluActivationWeights:c,leakyreluAlpha:l,activation:d})}const o={kernelName:s.Dr,backendName:"webgl",kernelFunc:r}}}]);
//# sourceMappingURL=chunk-vendors-9ca4e0af.c98056a4.js.map