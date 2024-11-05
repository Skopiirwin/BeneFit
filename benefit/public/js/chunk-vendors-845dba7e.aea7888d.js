"use strict";(self["webpackChunkbenefit"]=self["webpackChunkbenefit"]||[]).push([[3745],{15149:function(t,n,e){e.d(n,{GJ:function(){return u},uI:function(){return i}});
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
const r=1e-7,o=1e-4;class u{constructor(t,n){this.backend=t,this.dataMover=n,this.data=new WeakMap,this.dataIdsCount=0}get(t){return this.data.has(t)||this.dataMover.moveData(this.backend,t),this.data.get(t)}set(t,n){this.dataIdsCount++,this.data.set(t,n)}has(t){return this.data.has(t)}delete(t){return this.dataIdsCount--,this.data.delete(t)}numDataIds(){return this.dataIdsCount}}class i{refCount(t){return s("refCount")}incRef(t){return s("incRef")}timerAvailable(){return!0}time(t){return s("time")}read(t){return s("read")}readSync(t){return s("readSync")}readToGPU(t,n){return s("readToGPU")}numDataIds(){return s("numDataIds")}disposeData(t,n){return s("disposeData")}write(t,n,e){return s("write")}move(t,n,e,r,o){return s("move")}createTensorFromGPUData(t,n,e){return s("createTensorFromGPUData")}memory(){return s("memory")}floatPrecision(){return s("floatPrecision")}epsilon(){return 32===this.floatPrecision()?r:o}dispose(){return s("dispose")}}function s(t){throw new Error(`'${t}' not yet implemented or not found in the registry. This kernel may not be supported by the tfjs backend you have chosen`)}},19513:function(t,n,e){e.r(n),e.d(n,{ERF_A1:function(){return x.T4},ERF_A2:function(){return x._7},ERF_A3:function(){return x.fp},ERF_A4:function(){return x.mg},ERF_A5:function(){return x.fE},ERF_P:function(){return x.HM},PARALLELIZE_THRESHOLD:function(){return f.m},RowPartitionType:function(){return c.tl},SELU_SCALE:function(){return S.X},SELU_SCALEALPHA:function(){return S.j},applyActivation:function(){return a.f2},assertAndGetBroadcastShape:function(){return u.assertAndGetBroadcastShape},assertAxesAreInnerMostDims:function(){return o.WC},assertParamsConsistent:function(){return i.L},assignToTypedArray:function(){return D},axesAreInnerMostDims:function(){return o.WH},calculateShapes:function(){return m.l8},checkEinsumDimSizes:function(){return k},checkPadOnDimRoundingMode:function(){return s.s_},combineLocations:function(){return o.aF},combineRaggedTensorToTensorShapes:function(){return c.z4},complexWithEvenIndex:function(){return E},complexWithOddIndex:function(){return w},computeConv2DInfo:function(){return s.uf},computeConv3DInfo:function(){return s.p$},computeDefaultPad:function(){return s.G8},computeDilation2DInfo:function(){return s.YQ},computeOptimalWindowSize:function(){return f.x},computeOutAndReduceShapes:function(){return o.lb},computeOutShape:function(){return i.P},computePool2DInfo:function(){return s.E6},computePool3DInfo:function(){return s.l5},convertConv2DDataFormat:function(){return s.$Q},decodeEinsumEquation:function(){return C},eitherStridesOrDilationsAreOne:function(){return s.G0},expandShapeToKeepDim:function(){return o.SM},exponent:function(){return O},exponents:function(){return R},fromStringArrayToUint8:function(){return Z},fromUint8ToStringArray:function(){return W},getAxesPermutation:function(){return o.Em},getBroadcastDims:function(){return u.getBroadcastDims},getComplexWithIndex:function(){return I},getEinsumComputePath:function(){return _},getEinsumPermutation:function(){return $},getFusedBiasGradient:function(){return a.Do},getFusedDyActivation:function(){return a.XB},getImageCenter:function(){return p.H},getInnerMostAxes:function(){return o.fK},getPermuted:function(){return d.b$},getRaggedRank:function(){return c.Dw},getReductionAxes:function(){return u.getReductionAxes},getReshaped:function(){return d.dE},getReshapedPermuted:function(){return d.VN},getRowPartitionTypesHelper:function(){return c.U0},getSliceBeginCoords:function(){return d.Ym},getSliceSize:function(){return d.AO},getSparseFillEmptyRowsIndicesDenseShapeMismatch:function(){return B.P_},getSparseFillEmptyRowsNegativeIndexErrorMessage:function(){return B.U8},getSparseFillEmptyRowsOutOfRangeIndexErrorMessage:function(){return B.zP},getSparseReshapeEmptyTensorZeroOutputDimErrorMessage:function(){return G.Pz},getSparseReshapeInputOutputMismatchErrorMessage:function(){return G.pC},getSparseReshapeInputOutputMultipleErrorMessage:function(){return G.Ni},getSparseReshapeMultipleNegativeOneOutputDimErrorMessage:function(){return G.yM},getSparseReshapeNegativeOutputDimErrorMessage:function(){return G.M5},getSparseSegmentReductionIndicesOutOfRangeErrorMessage:function(){return N.dS},getSparseSegmentReductionNegativeSegmentIdsErrorMessage:function(){return N.u1},getSparseSegmentReductionNonIncreasingSegmentIdsErrorMessage:function(){return N.tb},getSparseSegmentReductionSegmentIdOutOfRangeErrorMessage:function(){return N.AP},getUndoAxesPermutation:function(){return o.gx},isIdentityPermutation:function(){return L},log:function(){return A.R},mergeRealAndImagArrays:function(){return M},prepareAndValidate:function(){return g.N},prepareSplitSize:function(){return z.z},segment_util:function(){return H},shouldFuse:function(){return a.zE},slice_util:function(){return l},splitRealAndImagArrays:function(){return y},stridesOrDilationsArePositive:function(){return s.qk},tupleValuesAreOne:function(){return s.Dh},upcastType:function(){return h.Tu},validateDefaultValueShape:function(){return c.mP},validateInput:function(){return m.TT},validateUpdateShape:function(){return m.Ly},warn:function(){return A.i}});var r=e(89783),o=e(21078),u=e(62198),i=e(12789),s=e(47195),a=e(55377),c=e(30429),f=e(29827),l=e(34969),h=e(52046),p=e(29192),d=e(81613),g=e(83869),m=e(26170),S=e(28576),x=e(11418),A=e(73673);
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
function M(t,n){if(t.length!==n.length)throw new Error(`Cannot merge real and imag arrays of different lengths. real:${t.length}, imag: ${n.length}.`);const e=new Float32Array(2*t.length);for(let r=0;r<e.length;r+=2)e[r]=t[r/2],e[r+1]=n[r/2];return e}function y(t){const n=new Float32Array(t.length/2),e=new Float32Array(t.length/2);for(let r=0;r<t.length;r+=2)n[r/2]=t[r],e[r/2]=t[r+1];return{real:n,imag:e}}function E(t){const n=Math.ceil(t.length/4),e=new Float32Array(n),r=new Float32Array(n);for(let o=0;o<t.length;o+=4)e[Math.floor(o/4)]=t[o],r[Math.floor(o/4)]=t[o+1];return{real:e,imag:r}}function w(t){const n=Math.floor(t.length/4),e=new Float32Array(n),r=new Float32Array(n);for(let o=2;o<t.length;o+=4)e[Math.floor(o/4)]=t[o],r[Math.floor(o/4)]=t[o+1];return{real:e,imag:r}}function I(t,n){const e=t[2*n],r=t[2*n+1];return{real:e,imag:r}}function D(t,n,e,r){t[2*r]=n,t[2*r+1]=e}function R(t,n){const e=new Float32Array(t/2),r=new Float32Array(t/2);for(let o=0;o<Math.ceil(t/2);o++){const u=(n?2:-2)*Math.PI*(o/t);e[o]=Math.cos(u),r[o]=Math.sin(u)}return{real:e,imag:r}}function O(t,n,e){const r=(e?2:-2)*Math.PI*(t/n),o=Math.cos(r),u=Math.sin(r);return{real:o,imag:u}}var v=e(45119);
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
const P="->",b=/->/g,F=",",T="...";function C(t,n){t=t.replace(/\s/g,"");const e=(t.length-t.replace(b,"").length)/P.length;if(e<1)throw new Error("Equations without an arrow are not supported.");if(e>1)throw new Error(`Equation must contain exactly one arrow ("${P}").`);const[r,o]=t.split(P);(0,v.vA)(-1===r.indexOf(T),(()=>`The ellipsis notation ("${T}") is not supported yet.`));const u=r.split(F),i=u.length;if(n!==i)throw new Error(`Expected ${i} input tensors, received ${n}`);if(i>2)throw new Error("Support for more than 2 input tensors is not implemented yet.");const s=[];for(let h=0;h<o.length;++h){const t=o[h];if(!u.some((n=>-1!==n.indexOf(t))))throw new Error(`Output subscripts contain the label ${t} not present in the input subscripts.`);-1===s.indexOf(t)&&s.push(t)}for(let h=0;h<r.length;++h){const t=r[h];-1===s.indexOf(t)&&t!==F&&s.push(t)}const a=new Array(u.length);for(let h=0;h<i;++h){if(new Set(u[h].split("")).size!==u[h].length)throw new Error(`Found duplicate axes in input component ${u[h]}. Support for duplicate axes in input is not implemented yet.`);a[h]=[];for(let t=0;t<u[h].length;++t)a[h].push(s.indexOf(u[h][t]))}const c=s.length,f=o.length,l=[];for(let h=f;h<c;++h)l.push(h);return{allDims:s,summedDims:l,idDims:a}}function $(t,n){let e=new Array(t);e.fill(-1);for(let o=0;o<n.length;++o)e[n[o]]=o;const r=[];for(let o=0;o<t;++o)-1===e[o]&&r.push(o);return e=e.filter((t=>-1!==t)),{permutationIndices:e,expandDims:r}}function k(t,n,e){const r=new Array(t);for(let o=0;o<e.length;++o){const t=e[o].shape;for(let e=0;e<n[o].length;++e)void 0===r[n[o][e]]?r[n[o][e]]=t[e]:(0,v.vA)(r[n[o][e]]===t[e],(()=>`Expected dimension ${r[n[o][e]]} at axis ${e} of input shaped ${JSON.stringify(t)}, but got dimension ${t[e]}`))}}function _(t,n){const e=t,r=[];let o=0;0===t.length&&e.push(-1),o=t.length+1;for(let i=0;i<o;++i)r.push([]);const u=[];for(let i=0;i<e.length;++i){const t=e[i],o=U(n,t);for(const n of o)-1===u.indexOf(n)&&(r[i].push(n),u.push(n))}return{path:e,steps:r}}function L(t){return t.every(((t,n)=>t===n))}function U(t,n){const e=[];for(let r=0;r<t.length;++r)0!==t[r].length&&-1===t[r].indexOf(n)&&-1!==n||e.push(r);return e}var z=e(57303),B=e(77618),G=e(83255),N=e(55880),H=e(47516);
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
function W(t){try{return t.map((t=>(0,r.decodeString)(t)))}catch(n){throw new Error(`Failed to decode encoded string bytes into utf-8, error: ${n}`)}}function Z(t){return t.map((t=>(0,r.encodeString)(t)))}},75863:function(t,n,e){e.d(n,{c7:function(){return r.c7},ZS:function(){return r.ZS},ut:function(){return r.ut},YO:function(){return u}});var r=e(43303),o=e(448);
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
function u(t,n){const e=[];for(let o=0;o<n.length;o++)n[o]&&e.push(o);const r=(0,o.r)(t,"int32"),u=(0,o.r)([e.length,t.length],"int32");for(let o=0;o<e.length;o++){const n=r.indexToLoc(e[o]),i=o*t.length;u.values.set(n,i)}return u.toTensor()}},43303:function(t,n,e){
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
function r(t,n,e){const r=o(t,n,e),u=r<0?-(r+1):r;t.splice(u,0,n)}function o(t,n,e){return i(t,n,e||u)}function u(t,n){return t>n?1:t<n?-1:0}function i(t,n,e){let r=0,o=t.length,u=0,i=!1;while(r<o){u=r+(o-r>>>1);const s=e(n,t[u]);s>0?r=u+1:(o=u,i=!s)}return i?r:-r-1}
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
function s(t,n,e,r,o){return f(t,n,e,r,o,0)}function a(t,n,e,r,o,u){return f(t,n,e,r,o,0,!1,u,!0)}function c(t,n,e,r,o,u){return f(t,n,e,r,o,u,!0)}function f(t,n,e,o,u,i,s=!1,a=!1,c=!1){const f=[];for(let r=0;r<n.length;r++)n[r]>u&&f.push({score:n[r],boxIndex:r,suppressBeginIndex:0});f.sort(p);const d=i>0?-.5/i:0,g=[],m=[];while(g.length<e&&f.length>0){const n=f.pop(),{score:e,boxIndex:i,suppressBeginIndex:s}=n;if(e<u)break;let a=!1;for(let r=g.length-1;r>=s;--r){const e=l(t,i,g[r]);if(e>=o){a=!0;break}if(n.score=n.score*h(o,d,e),n.score<=u)break}n.suppressBeginIndex=g.length,a||(n.score===e?(g.push(i),m.push(n.score)):n.score>u&&r(f,n,p))}const S=g.length,x=e-S;a&&x>0&&(g.push(...new Array(x).fill(0)),m.push(...new Array(x).fill(0)));const A={selectedIndices:g};return s&&(A["selectedScores"]=m),c&&(A["validOutputs"]=S),A}function l(t,n,e){const r=t.subarray(4*n,4*n+4),o=t.subarray(4*e,4*e+4),u=Math.min(r[0],r[2]),i=Math.min(r[1],r[3]),s=Math.max(r[0],r[2]),a=Math.max(r[1],r[3]),c=Math.min(o[0],o[2]),f=Math.min(o[1],o[3]),l=Math.max(o[0],o[2]),h=Math.max(o[1],o[3]),p=(s-u)*(a-i),d=(l-c)*(h-f);if(p<=0||d<=0)return 0;const g=Math.max(u,c),m=Math.max(i,f),S=Math.min(s,l),x=Math.min(a,h),A=Math.max(S-g,0)*Math.max(x-m,0);return A/(p+d-A)}function h(t,n,e){const r=Math.exp(n*e*e);return e<=t?r:0}function p(t,n){return t.score-n.score||t.score===n.score&&n.boxIndex-t.boxIndex}e.d(n,{c7:function(){return s},ZS:function(){return a},ut:function(){return c}})}}]);
//# sourceMappingURL=chunk-vendors-845dba7e.aea7888d.js.map