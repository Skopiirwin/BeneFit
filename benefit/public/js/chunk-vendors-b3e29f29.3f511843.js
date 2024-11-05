"use strict";(self["webpackChunkbenefit"]=self["webpackChunkbenefit"]||[]).push([[7895],{36446:function(e,n,t){t.d(n,{M:function(){return d}});var a=t(9495),s=t(76905),r=t(8993),o=t(77723),i=t(98890),u=t(4313),c=t(7199);
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
function p(e){const{inputs:n,backend:t,attrs:d}=e,{x:l}=n,{dtype:h}=d;if("complex64"===h){if("complex64"===l.dtype)return(0,o.D)({inputs:{x:l},backend:t});const e=a.Ul9(l.shape),n=p({inputs:{x:l},backend:t,attrs:{dtype:"float32"}}),s=(0,r.f)({inputs:{real:n,imag:e},backend:t});return e.dispose(),t.disposeIntermediateTensorInfo(n),s}if("complex64"===l.dtype){const e=(0,u.x)({inputs:{input:l},backend:t}),n=p({inputs:{x:e},backend:t,attrs:{dtype:h}});return t.disposeIntermediateTensorInfo(e),n}if(!a.ZSL.hasEncodingLoss(l.dtype,h)){const e=(0,o.D)({inputs:{x:l},backend:t});return{dataId:e.dataId,shape:e.shape,dtype:h}}if(t.shouldExecuteOnCPU([l])){const e=t.texData.get(l.dataId).values,[n,a,r]=(0,s.Kf)(e,l.shape,l.dtype,h);return t.makeTensorInfo(n,a,r)}if("int32"===h)return(0,c.W)(l,t);if("bool"===h){const e=t.makeTensorInfo([],"bool",a.ZSL.getTypedArrayFromDType("bool",1)),n={a:l,b:e},s=(0,i.E)({inputs:n,backend:t});return t.disposeIntermediateTensorInfo(e),s}throw new Error(`Error in Cast: failed to cast ${l.dtype} to ${h}`)}const d={kernelName:a.KXH,backendName:"webgl",kernelFunc:p}},35960:function(e,n,t){t.d(n,{u:function(){return u}});var a=t(9495),s=t(15411),r=t(76905);
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
const o="return ceil(x);",i=(0,s.vi)({opSnippet:o,packedOpSnippet:o,cpuKernelImpl:r.Md}),u={kernelName:a.QDP,backendName:"webgl",kernelFunc:i}},47357:function(e,n,t){t.d(n,{F:function(){return i}});var a=t(9495),s=t(80273),r=t(9662);
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
function o(e){const{inputs:n,backend:t,attrs:o}=e,{x:i}=n,{clipValueMin:u,clipValueMax:c}=o;let p;p=(0,a._K2)().getBool("WEBGL_PACK_CLIP")?new r.$(i.shape):new s.T(i.shape);const d=[[u],[c]];return t.runWebGLProgram(p,[i],i.dtype,d)}const i={kernelName:a.vaV,backendName:"webgl",kernelFunc:o}},8993:function(e,n,t){t.d(n,{f:function(){return r},v:function(){return o}});var a=t(9495),s=t(77723);
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
function r(e){const{inputs:n,backend:t}=e,{real:a,imag:r}=n,o=t.makeTensorInfo(a.shape,"complex64"),i=t.texData.get(o.dataId),u=(0,s.D)({inputs:{x:a},backend:t}),c=(0,s.D)({inputs:{x:r},backend:t});return i.complexTensorInfos={real:u,imag:c},o}const o={kernelName:a.pr3,backendName:"webgl",kernelFunc:r}},37053:function(e,n,t){t.d(n,{t:function(){return i}});var a=t(9495),s=t(67282);
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
function r(e,n){return{dataId:n.dataId,dtype:n.dtype,shape:e.shape}}function o(e){const{inputs:n,backend:t}=e,{x:a}=n,o=t.texData.get(a.dataId),i=new s.t(a.shape),u=[r(a,o.complexTensorInfos.real),r(a,o.complexTensorInfos.imag)];return t.runWebGLProgram(i,u,u[0].dtype)}const i={kernelName:a.$zE,backendName:"webgl",kernelFunc:o}},24973:function(e,n,t){t.d(n,{x:function(){return b},V:function(){return k}});var a=t(9495),s=t(14151),r=t(82676),o=t(76905),i=t(68173),u=t(74890),c=t(8993),p=t(39803),d=t(4313),l=t(94043);
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
function h(e,n,t){const m=e[0].dtype;if("complex64"===m){const a=e.map((e=>(0,d.x)({inputs:{input:e},backend:t}))),s=e.map((e=>(0,p.n)({inputs:{input:e},backend:t}))),r=h(a,n,t),o=h(s,n,t),i=(0,c.f)({inputs:{real:r,imag:o},backend:t});return a.forEach((e=>t.disposeIntermediateTensorInfo(e))),s.forEach((e=>t.disposeIntermediateTensorInfo(e))),t.disposeIntermediateTensorInfo(r),t.disposeIntermediateTensorInfo(o),i}let b=t.shouldExecuteOnCPU(e);if("string"===m&&(b=!0),b){const s=e.map((e=>{const s=a.ZSL.sizeFromShape(e.shape.slice(n)),r=[-1,s];return(0,l.t)({inputs:{x:e},backend:t,attrs:{shape:r}})})),r=s.map((e=>({vals:t.readSync(e.dataId),shape:e.shape}))),i=a.C0T.computeOutShape(s.map((e=>e.shape)),1),u=1===s[0].shape[0],c=(0,o.dv)(r,i,m,u),p=a.C0T.computeOutShape(e.map((e=>e.shape)),n),d=t.makeTensorInfo(p,m,c);return s.forEach((e=>t.disposeIntermediateTensorInfo(e))),d}const k=e.filter((e=>a.ZSL.sizeFromShape(e.shape)>0)),g=(0,a._K2)().getBool("WEBGL_PACK_ARRAY_OPERATIONS")&&k[0].shape.length>1;if(1===k.length){const n=g?new i.hE(e[0].shape,i.UC):new u.rf(e[0].shape,i.UC);return t.runWebGLProgram(n,e,m)}const I=(0,a._K2)().getNumber("WEBGL_MAX_TEXTURES_IN_SHADER");if(k.length>I){const e=[];for(let s=0;s<k.length;s+=I){const a=k.slice(s,s+I);e.push(h(a,n,t))}const a=h(e,n,t);for(const n of e)t.disposeIntermediateTensorInfo(n);return a}if(g){const e=new r.V(k.map((e=>e.shape)),n);return t.runWebGLProgram(e,k,m)}const{tensors2D:x,outShape:C}=f(k,n,t),v=new s.P(x.map((e=>e.shape))),S=t.runWebGLProgram(v,x,m);x.forEach((e=>t.disposeIntermediateTensorInfo(e)));const N=(0,l.t)({inputs:{x:S},attrs:{shape:C},backend:t});return t.disposeIntermediateTensorInfo(S),N}function f(e,n,t){const s=a.C0T.computeOutShape(e.map((e=>e.shape)),n),r=e.map((e=>(0,l.t)({inputs:{x:e},attrs:{shape:[-1,a.ZSL.sizeFromShape(e.shape.slice(n))]},backend:t})));return{tensors2D:r,outShape:s}}var m=t(77723);
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
function b(e){const{inputs:n,backend:t,attrs:s}=e,{axis:r}=s,o=a.ZSL.parseAxisParam(r,n[0].shape)[0],i=n.map((e=>e.shape));a.C0T.assertParamsConsistent(i,o);const u=a.C0T.computeOutShape(n.map((e=>e.shape)),o);if(0===a.ZSL.sizeFromShape(u))return t.makeTensorInfo(u,n[0].dtype,[]);const c=n.filter((e=>a.ZSL.sizeFromShape(e.shape)>0));return 1===c.length?(0,m.D)({inputs:{x:c[0]},backend:t}):h(c,o,t)}const k={kernelName:a.$dB,backendName:"webgl",kernelFunc:b}},66045:function(e,n,t){t.d(n,{x:function(){return c}});var a=t(9495),s=t(21005),r=t(78762),o=t(53002),i=t(94043);
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
function u(e){const{inputs:n,backend:t,attrs:u}=e,{x:c,filter:p}=n,{strides:d,pad:l,dataFormat:h,dilations:f,dimRoundingMode:m}=u,b=a.C0T.convertConv2DDataFormat(h),k=a.C0T.computeConv2DInfo(c.shape,p.shape,d,f,l,m,!1,b);let g;if(1!==k.filterHeight||1!==k.filterWidth||1!==k.dilationHeight||1!==k.dilationWidth||1!==k.strideHeight||1!==k.strideWidth||"SAME"!==k.padInfo.type&&"VALID"!==k.padInfo.type)if(k.strideWidth<=2&&"channelsLast"===b&&(0,a._K2)().getBool("WEBGL_EXP_CONV")){const e=new r.Z(k),n=[[k.padInfo.top,k.padInfo.left],[k.strideHeight,k.strideWidth],[k.dilationHeight,k.dilationWidth],[k.inHeight,k.inWidth]];g=t.runWebGLProgram(e,[c,p],"float32",n)}else if((0,a._K2)().getBool("WEBGL_CONV_IM2COL"))g=(0,o.J)({x:c,filter:p,convInfo:k,backend:t});else{const e=new s.B(k);g=t.runWebGLProgram(e,[c,p],"float32")}else g=(0,o.K)({x:c,filter:p,convInfo:k,backend:t});const I=(0,i.t)({inputs:{x:g},backend:t,attrs:{shape:k.outShape}});return t.disposeIntermediateTensorInfo(g),I}const c={kernelName:a.p2J,backendName:"webgl",kernelFunc:u}},91241:function(e,n,t){t.d(n,{r:function(){return o}});var a=t(9495),s=t(3604);
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
function r(e){const{inputs:n,backend:t,attrs:r}=e,{x:o,dy:i}=n,{strides:u,pad:c,dataFormat:p,dimRoundingMode:d,filterShape:l}=r,h=a.C0T.convertConv2DDataFormat(p),f=a.C0T.computeConv2DInfo(o.shape,l,u,1,c,d,!1,h),m=new s.S5(f);return t.runWebGLProgram(m,[o,i],"float32")}const o={kernelName:a.rFm,backendName:"webgl",kernelFunc:r}},4879:function(e,n,t){t.d(n,{f:function(){return i}});var a=t(9495),s=t(3604),r=t(37701);
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
function o(e){const{inputs:n,backend:t,attrs:o}=e,{dy:i,filter:u}=n,{inputShape:c,strides:p,pad:d,dataFormat:l,dimRoundingMode:h}=o,f=a.C0T.convertConv2DDataFormat(l),m=a.C0T.computeConv2DInfo(c,u.shape,p,1,d,h,!1,f);if((0,a._K2)().getBool("WEBGL_PACK_CONV2DTRANSPOSE")&&"channelsLast"===f){const e=[[m.strideHeight,m.strideWidth]],n=new r.g(m);return t.runWebGLProgram(n,[i,u],"float32",e)}{const e=new s.eS(m);return t.runWebGLProgram(e,[i,u],"float32")}}const i={kernelName:a.jfg,backendName:"webgl",kernelFunc:o}},53002:function(e,n,t){t.d(n,{J:function(){return h},K:function(){return l}});var a=t(9495),s=t(58638),r=t(15411),o=t(63288),i=t(88380),u=t(64374),c=t(77723),p=t(94043);
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
function d(e,n){const t=e.length;return t>=3?n?[...e.slice(0,-3),e[t-3]*e[t-2],e[t-1]]:[...e.slice(0,-3),e[t-3],e[t-2]*e[t-1]]:!n&&1===t&&e[0]>1?[e[0],1]:null}function l({x:e,filter:n,convInfo:t,backend:s,bias:r=null,preluActivationWeights:o=null,leakyreluAlpha:l=0,activation:h=null}){const f=e.shape,m=s.texData.get(e.dataId),b=t.inChannels,k=f[0]*f[1]*f[2],g=t.outChannels,I="channelsLast"===t.dataFormat,x=!1,C=!1;let v;const S=[];if(null!=o){const e=d(o.shape,I);null!=e&&(o=(0,p.t)({inputs:{x:o},backend:s,attrs:{shape:e}}),S.push(o))}if(null!=r){const e=d(r.shape,I);null!=e&&(r=(0,p.t)({inputs:{x:r},backend:s,attrs:{shape:e}}),S.push(r))}const N=(1===k||1===g)&&b>u.U,T=!N&&m.isPacked&&I&&null!=m.texture&&f[2]%2!==0&&a.ZSL.arraysEqual(m.shape.slice(-3),f.slice(-3));if(T){const d=f[0]*f[1]*(f[2]+1),b={dataId:e.dataId,shape:[1,d,t.inChannels],dtype:e.dtype},k=m.shape;m.shape=m.shape.slice(),m.shape[m.shape.length-2]++,a.ZSL.assert(i.P0(m.shape,b.shape),(()=>`packed reshape ${m.shape} to ${b.shape} isn't free`));const g=(0,p.t)({inputs:{x:n},backend:s,attrs:{shape:[1,t.inChannels,t.outChannels]}});S.push(g);const I=(0,u.L)({a:b,b:g,backend:s,transposeA:x,transposeB:C,bias:r,activation:h,preluActivationWeights:o,leakyreluAlpha:l}),N=s.texData.get(I.dataId);a.ZSL.assert(N.isPacked,(()=>"batchMatMul result is expected to be packed")),m.shape=k,N.shape=t.outShape,v=(0,c.D)({inputs:{x:I},backend:s}),v.shape=t.outShape,S.push(I)}else{const a=t.outHeight*t.outWidth,i=(0,p.t)({inputs:{x:e},backend:s,attrs:{shape:I?[t.batchSize,a,t.inChannels]:[t.batchSize,t.inChannels,a]}}),c=(0,p.t)({inputs:{x:n},backend:s,attrs:{shape:[1,t.inChannels,t.outChannels]}}),d=(0,u.L)({a:I?i:c,b:I?c:i,transposeA:!I,transposeB:C,backend:s,bias:r,activation:h,preluActivationWeights:o,leakyreluAlpha:l});v=(0,p.t)({inputs:{x:d},backend:s,attrs:{shape:t.outShape}}),S.push(i),S.push(c),S.push(d)}for(const a of S)s.disposeIntermediateTensorInfo(a);return v}function h({x:e,filter:n,convInfo:t,backend:i,bias:u=null,preluActivationWeights:c=null,leakyreluAlpha:l=0,activation:h=null}){const{filterWidth:f,filterHeight:m,inChannels:b,outWidth:k,outHeight:g,dataFormat:I}=t,x="channelsLast"===I,C=f*m*b,v=g*k,S=[t.batchSize,C,v],N=!0,T=!1,W=[];if(null!=c){const e=d(c.shape,x);null!=e&&(c=(0,p.t)({inputs:{x:c},backend:i,attrs:{shape:e}}),W.push(c))}if(null!=u){const e=d(u.shape,x);null!=e&&(u=(0,p.t)({inputs:{x:u},backend:i,attrs:{shape:e}}),W.push(u))}const w=(0,p.t)({inputs:{x:n},backend:i,attrs:{shape:[1,C,a.ZSL.sizeFromShape(n.shape)/C]}});W.push(w);const L=new s.D(S,t),y=[e.shape,[t.padInfo.top,t.padInfo.left],[t.strideHeight,t.strideWidth],[t.dilationHeight,t.dilationWidth],[t.inChannels],[t.filterWidth*t.inChannels],[t.outWidth]],P=i.runWebGLProgram(L,[e],"float32",y),F=(0,p.t)({inputs:{x:P},backend:i,attrs:{shape:S}});W.push(P),W.push(F);const G=null!=u,D=null!=c,E="leakyrelu"===h,A=h?(0,r.bE)(h,!0):null,_=new o.P(x?F.shape:w.shape,x?w.shape:F.shape,x?[t.batchSize,v,t.outChannels]:[t.batchSize,t.outChannels,v],N,T,G,A,D,E),H=x?[F,w]:[w,F];if(u&&H.push(u),D&&H.push(c),E){const e=i.makeTensorInfo([],"float32",a.ZSL.createScalarValue(l,"float32"));H.push(e),W.push(e)}const M=i.runWebGLProgram(_,H,"float32"),O=(0,p.t)({inputs:{x:M},backend:i,attrs:{shape:t.outShape}});W.push(M);for(const a of W)i.disposeIntermediateTensorInfo(a);return O}},14992:function(e,n,t){t.d(n,{i:function(){return o}});var a=t(9495),s=t(21005);
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
function r(e){const{inputs:n,backend:t,attrs:r}=e,{x:o,filter:i}=n,{strides:u,pad:c,dilations:p}=r,d=a.C0T.computeConv3DInfo(o.shape,i.shape,u,p,c),l=new s.w(d);return t.runWebGLProgram(l,[o,i],"float32")}const o={kernelName:a.A1h,backendName:"webgl",kernelFunc:r}},7664:function(e,n,t){t.d(n,{i:function(){return o}});var a=t(9495),s=t(3604);
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
function r(e){const{inputs:n,backend:t,attrs:r}=e,{x:o,dy:i}=n,{strides:u,pad:c,filterShape:p}=r,d=a.C0T.computeConv3DInfo(o.shape,p,u,1,c),l=new s.N7(d);return t.runWebGLProgram(l,[o,i],"float32")}const o={kernelName:a.iGz,backendName:"webgl",kernelFunc:r}},94948:function(e,n,t){t.d(n,{Y:function(){return o}});var a=t(9495),s=t(3604);
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
function r(e){const{inputs:n,backend:t,attrs:r}=e,{dy:o,filter:i}=n,{pad:u,strides:c,inputShape:p}=r,d=a.C0T.computeConv3DInfo(p,i.shape,c,1,u),l=new s.tR(d);return t.runWebGLProgram(l,[o,i],"float32")}const o={kernelName:a.gC7,backendName:"webgl",kernelFunc:r}},15354:function(e,n,t){t.d(n,{o:function(){return c}});var a=t(9495),s=t(46334),r=t(15411);
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
const o=r.Zt+"\n  return cos(x);\n",i=`\n  vec4 result = cos(x);\n  bvec4 isNaN = isnan(x);\n  ${s.qq}\n  return result;\n`,u=(0,r.vi)({opSnippet:o,packedOpSnippet:i}),c={kernelName:a.Mn0,backendName:"webgl",kernelFunc:u}},86856:function(e,n,t){t.d(n,{k:function(){return i}});var a=t(9495),s=t(15411);
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
const r="\n  float e2x = exp(-x);\n  return (e2x + 1.0 / e2x) / 2.0;\n",o=(0,s.vi)({opSnippet:r}),i={kernelName:a.MnK,backendName:"webgl",kernelFunc:o}},16998:function(e,n,t){t.d(n,{O:function(){return o}});var a=t(9495),s=t(59396);
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
const r=e=>{const{inputs:n,backend:t,attrs:a}=e,{image:r,boxes:o,boxInd:i}=n,{cropSize:u,method:c,extrapolationValue:p}=a,d=new s.c(r.shape,o.shape,u,c,p);return t.runWebGLProgram(d,[r,o,i],"float32")},o={kernelName:a.MRQ,backendName:"webgl",kernelFunc:r}},36511:function(e,n,t){t.d(n,{G:function(){return i}});var a=t(9495),s=t(76434),r=t(77723),o=t(58246);
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
function i(e,n,t,i,u,c){const p=n.shape.length,d=a.C0T.getAxesPermutation([i],p);let l=n;null!=d&&(l=(0,o.m)({inputs:{x:n},backend:t,attrs:{perm:d}}));const h=a.C0T.getInnerMostAxes(1,p)[0];if(h!==p-1)throw new Error(`WebGL cumprod shader expects an inner-most axis=${n.shape.length-1} but got axis=${i}`);const f=l.shape[h];let m=(0,r.D)({inputs:{x:l},backend:t});for(let a=0;a<=Math.ceil(Math.log2(f))-1;a++){const n=new s.G(e,l.shape,!1,c),r=[[a]],o=m;m=t.runWebGLProgram(n,[m],m.dtype,r),t.disposeIntermediateTensorInfo(o)}if(u){const n=new s.G(e,l.shape,u,c),a=m;m=t.runWebGLProgram(n,[m],m.dtype),t.disposeIntermediateTensorInfo(a)}if(null!=d){const e=a.C0T.getUndoAxesPermutation(d),n=(0,o.m)({inputs:{x:m},backend:t,attrs:{perm:e}});return t.disposeIntermediateTensorInfo(m),t.disposeIntermediateTensorInfo(l),n}return m}},97591:function(e,n,t){t.d(n,{T:function(){return i}});var a=t(9495),s=t(76434),r=t(36511);
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
function o(e){const{inputs:n,backend:t,attrs:a}=e,{x:o}=n,{axis:i,exclusive:u,reverse:c}=a;return(0,r.G)(s.z.Prod,o,t,i,u,c)}const i={kernelName:a.jj_,backendName:"webgl",kernelFunc:o}},5171:function(e,n,t){t.d(n,{$:function(){return i}});var a=t(9495),s=t(76434),r=t(36511);
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
function o(e){const{inputs:n,backend:t,attrs:a}=e,{x:o}=n,{axis:i,exclusive:u,reverse:c}=a;return(0,r.G)(s.z.Sum,o,t,i,u,c)}const i={kernelName:a.nY8,backendName:"webgl",kernelFunc:o}},99590:function(e,n,t){t.d(n,{Y:function(){return o}});var a=t(9495),s=t(76905);
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
function r(e){const{inputs:n,backend:t,attrs:a}=e,{x:r,weights:o}=n,{size:i,binaryOutput:u}=a;if(1===r.shape.length){const e=t.readSync(r.dataId),n=t.readSync(o.dataId),a=(0,s.jm)(e,n,o.dtype,o.shape,i);return t.makeTensorInfo([i],o.dtype,a)}if(2===r.shape.length){const e=t.bufferSync(r),n=t.bufferSync(o),a=(0,s.h0)(e,n,i,u);return t.makeTensorInfo(a.shape,o.dtype,a.values)}throw new Error(`Error in denseBincount: input must be at most rank 2, but got rank${r.shape.length}.`)}const o={kernelName:a.wNW,backendName:"webgl",kernelFunc:r}},46355:function(e,n,t){t.d(n,{R:function(){return o}});var a=t(9495),s=t(34673);
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
function r(e){const{inputs:n,backend:t,attrs:a}=e,{x:r}=n,{blockSize:o,dataFormat:i}=a,u=r.shape[0],c="NHWC"===i?r.shape[1]:r.shape[2],p="NHWC"===i?r.shape[2]:r.shape[3],d="NHWC"===i?r.shape[3]:r.shape[1],l=c*o,h=p*o,f=d/(o*o),m="NHWC"===i?[u,l,h,f]:[u,f,l,h],b=new s.x(m,o,i);return t.runWebGLProgram(b,[r],r.dtype)}const o={kernelName:a.TMz,backendName:"webgl",kernelFunc:r}},14947:function(e,n,t){t.d(n,{v:function(){return i}});var a=t(9495),s=t(4999),r=t(10424);
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
function o(e){const{inputs:n,backend:t,attrs:o}=e,{x:i,filter:u}=n,{strides:c,pad:p,dilations:d,dimRoundingMode:l}=o;let h=d;null==h&&(h=[1,1]),a.ZSL.assert(a.C0T.eitherStridesOrDilationsAreOne(c,h),(()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${c} and dilations '${h}'`));const f=a.C0T.computeConv2DInfo(i.shape,u.shape,c,h,p,l,!0);let m;m=(0,a._K2)().getBool("WEBGL_PACK_DEPTHWISECONV")&&f.strideWidth<=2&&f.outChannels/f.inChannels===1?new r.K(f):new s.E(f);const b=[[f.padInfo.top,f.padInfo.left],[f.strideHeight,f.strideWidth],[f.dilationHeight,f.dilationWidth],[f.inHeight,f.inWidth]];return t.runWebGLProgram(m,[i,u],"float32",b)}const i={kernelName:a.tGH,backendName:"webgl",kernelFunc:o}},86099:function(e,n,t){t.d(n,{n:function(){return o}});var a=t(9495),s=t(52966);
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
function r(e){const{inputs:n,backend:t,attrs:r}=e,{x:o,dy:i}=n,{strides:u,dilations:c,pad:p,dimRoundingMode:d,filterShape:l}=r,h=a.C0T.computeConv2DInfo(o.shape,l,u,c,p,d,!0),f=new s.f(h);return t.runWebGLProgram(f,[o,i],"float32")}const o={kernelName:a.X$8,backendName:"webgl",kernelFunc:r}},48689:function(e,n,t){t.d(n,{V:function(){return o}});var a=t(9495),s=t(52966);
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
function r(e){const{inputs:n,backend:t,attrs:r}=e,{dy:o,filter:i}=n,{strides:u,dilations:c,pad:p,dimRoundingMode:d,inputShape:l}=r,h=a.C0T.computeConv2DInfo(l,i.shape,u,c,p,d,!0),f=new s.R(h);return t.runWebGLProgram(f,[o,i],"float32")}const o={kernelName:a.nVu,backendName:"webgl",kernelFunc:r}}}]);
//# sourceMappingURL=chunk-vendors-b3e29f29.3f511843.js.map