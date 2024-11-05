"use strict";(self["webpackChunkbenefit"]=self["webpackChunkbenefit"]||[]).push([[9509],{77668:function(n,t,e){e.d(t,{x:function(){return v}});var o=e(28189),s=e(45119),r=e(13337),i=e(61303),u=e(56508),a=e(67897),c=e(15441),l=e(62198),p=e(70929);
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
function h(n,t){const e=(0,o.YT)(n,"a","logicalAnd","bool"),s=(0,o.YT)(t,"b","logicalAnd","bool");(0,l.assertAndGetBroadcastShape)(e.shape,s.shape);const r={a:e,b:s};return a.T2.runKernel(c.RUm,r)}const d=(0,p.op)({logicalAnd_:h});var f=e(12644),m=e(96522),g=e(44645),T=e(62302),E=e(54268),b=e(77126),_=e(67261),Y=e(12151),S=e(42855);
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
function y(n,t,e){const a=(0,o.YT)(n,"a","bandPart");(0,s.vA)(a.rank>=2,(()=>`bandPart(): Rank must be at least 2, got ${a.rank}.`));const c=a.shape,[l,p]=a.shape.slice(-2);let h,y;"number"===typeof t?((0,s.vA)(t%1===0,(()=>`bandPart(): numLower must be an integer, got ${t}.`)),(0,s.vA)(t<=l,(()=>`bandPart(): numLower (${t}) must not be greater than the number of rows (${l}).`)),h=(0,o.YT)(t<0?l:t,"numLower","bandPart")):((0,s.vA)("int32"===t.dtype,(()=>"bandPart(): numLower's dtype must be an int32.")),h=(0,Y._)((0,i.M)(t,0),l,(0,f.B)(t,l))),"number"===typeof e?((0,s.vA)(e%1===0,(()=>`bandPart(): numUpper must be an integer, got ${e}.`)),(0,s.vA)(e<=p,(()=>`bandPart(): numUpper (${e}) must not be greater than the number of columns (${p}).`)),y=(0,o.YT)(e<0?p:e,"numUpper","bandPart")):((0,s.vA)("int32"===e.dtype,(()=>"bandPart(): numUpper's dtype must be an int32.")),y=(0,Y._)((0,i.M)(e,0),p,(0,f.B)(e,p)));const v=(0,T.t)((0,g.y)(0,l,1,"int32"),[-1,1]),N=(0,g.y)(0,p,1,"int32"),O=(0,b.j)(v,N),M=d((0,u.I)(O,h),(0,r.D)(O,(0,m.H)(y))),L=(0,S.U)([l,p],a.dtype);return(0,T.t)((0,E.t)((0,_.K)((0,T.t)(a,[-1,l,p])).map((n=>(0,Y._)(M,n,L)))),c)}const v=(0,p.op)({bandPart_:y})},76304:function(n,t,e){e.d(t,{i:function(){return m}});var o=e(67897),s=e(45119),r=e(89359),i=e(9258),u=e(92596),a=e(70929),c=e(66512),l=e(5932),p=e(54268),h=e(77126),d=e(83791);
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
function f(n){let t;if(Array.isArray(n)){t=!1,(0,s.vA)(null!=n&&n.length>0,(()=>"Gram-Schmidt process: input must not be null, undefined, or empty"));const e=n[0].shape[0];for(let t=1;t<n.length;++t)(0,s.vA)(n[t].shape[0]===e,(()=>`Gram-Schmidt: Non-unique lengths found in the input vectors: (${n[t].shape[0]} vs. ${e})`))}else t=!0,n=(0,c.l)(n,n.shape[0],0).map((n=>(0,l.r)(n,[0])));(0,s.vA)(n.length<=n[0].shape[0],(()=>`Gram-Schmidt: Number of vectors (${n.length}) exceeds number of dimensions (${n[0].shape[0]}).`));const e=[],a=n;for(let s=0;s<n.length;++s)e.push(o.T2.tidy((()=>{let n=a[s];if(s>0)for(let t=0;t<s;++t){const o=(0,i.l)((0,d.c)((0,i.l)(e[t],n)),e[t]);n=(0,h.j)(n,o)}return(0,r.y)(n,(0,u.x)(n,"euclidean"))})));return t?(0,p.t)(e,0):e}const m=(0,a.op)({gramSchmidt_:f})},5633:function(n,t,e){e.d(t,{qr:function(){return x}});var o=e(67897),s=e(35287),r=e(45119),i=e(70125),u=e(25030),a=e(89359),c=e(53621),l=e(62058),p=e(15441),h=e(30565),d=e(28189),f=e(70929);
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
function m(n,t,e=!1,s=!1){let r=(0,d.YT)(n,"a","matMul"),i=(0,d.YT)(t,"b","matMul");[r,i]=(0,h.h0)(r,i);const u={a:r,b:i},a={transposeA:e,transposeB:s};return o.T2.runKernel(p.jAQ,u,a)}const g=(0,f.op)({matMul_:m});var T=e(9258),E=e(96522),b=e(92596),_=e(62302),Y=e(17986),S=e(54268),y=e(77126),v=e(18941),N=e(7703),O=e(67261),M=e(12151);
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
function L(n,t=!1){if((0,r.vA)(n.rank>=2,(()=>`qr() requires input tensor to have a rank >= 2, but got rank ${n.rank}`)),2===n.rank)return w(n,t);{const e=n.shape.slice(0,n.shape.length-2).reduce(((n,t)=>n*t)),o=(0,O.K)((0,_.t)(n,[e,n.shape[n.shape.length-2],n.shape[n.shape.length-1]]),0),s=[],r=[];o.forEach((n=>{const[e,o]=w(n,t);s.push(e),r.push(o)}));const i=(0,_.t)((0,S.t)(s,0),n.shape),u=(0,_.t)((0,S.t)(r,0),n.shape);return[i,u]}}function w(n,t=!1){return o.T2.tidy((()=>{(0,r.vA)(2===n.shape.length,(()=>`qr2d() requires a 2D Tensor, but got a ${n.shape.length}D Tensor.`));const e=n.shape[0],p=n.shape[1];let h=(0,c.y)(e),d=(0,i.o)(n);const f=(0,v.K)([[1]],[1,1]);let m=(0,i.o)(f);const _=e>=p?p:e;for(let n=0;n<_;++n){const t=d,r=m,c=h;[m,d,h]=o.T2.tidy((()=>{const t=(0,Y.d)(d,[n,n],[e-n,1]),o=(0,b.x)(t),s=(0,Y.d)(d,[n,n],[1,1]),r=(0,M._)((0,l.r)(s,0),(0,v.K)([[-1]]),(0,v.K)([[1]])),c=(0,y.j)(s,(0,T.l)(r,o)),_=(0,a.y)(t,c);m=1===_.shape[0]?(0,i.o)(f):(0,u.x)([f,(0,Y.d)(_,[1,0],[_.shape[0]-1,_.shape[1]])],0);const S=(0,E.H)((0,a.y)(g(r,c),o)),O=(0,Y.d)(d,[n,0],[e-n,p]),L=(0,T.l)(S,m),w=(0,N.m)(m);if(0===n)d=(0,y.j)(O,g(L,g(w,O)));else{const t=(0,y.j)(O,g(L,g(w,O)));d=(0,u.x)([(0,Y.d)(d,[0,0],[n,p]),t],0)}const x=(0,N.m)(L),A=(0,Y.d)(h,[0,n],[e,h.shape[1]-n]);if(0===n)h=(0,y.j)(A,g(g(A,m),x));else{const t=(0,y.j)(A,g(g(A,m),x));h=(0,u.x)([(0,Y.d)(h,[0,0],[e,n]),t],1)}return[m,d,h]})),(0,s.AS)([t,r,c])}return!t&&e>p&&(h=(0,Y.d)(h,[0,0],[e,p]),d=(0,Y.d)(d,[0,0],[p,p])),[h,d]}))}const x=(0,f.op)({qr_:L})},44010:function(n,t,e){e.d(t,{R:function(){return a}});var o=e(67897),s=e(15441),r=e(28189),i=e(70929);
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
function u(n){const t=(0,r.YT)(n,"x","log","float32"),e={x:t};return o.T2.runKernel(s.tG8,e)}const a=(0,i.op)({log_:u})},27084:function(n,t,e){
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
var o;e.d(t,{i:function(){return o}}),function(n){n[n["NONE"]=0]="NONE",n[n["MEAN"]=1]="MEAN",n[n["SUM"]=2]="SUM",n[n["SUM_BY_NONZERO_WEIGHTS"]=3]="SUM_BY_NONZERO_WEIGHTS"}(o||(o={}))},89535:function(n,t,e){e.d(t,{n:function(){return p}});var o=e(28189),s=e(45119),r=e(4888),i=e(27084),u=e(70929),a=e(77126),c=e(69533);
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
function l(n,t,e,u=i.i.SUM_BY_NONZERO_WEIGHTS){const l=(0,o.YT)(n,"labels","absoluteDifference"),p=(0,o.YT)(t,"predictions","absoluteDifference");let h=null;null!=e&&(h=(0,o.YT)(e,"weights","absoluteDifference")),(0,s.O3)(l.shape,p.shape,"Error in absoluteDifference: ");const d=(0,r.t)((0,a.j)(l,p));return(0,c.M)(d,h,u)}const p=(0,u.op)({absoluteDifference_:l})},69533:function(n,t,e){e.d(t,{M:function(){return m}});var o=e(28189),s=e(29809),r=e(89359),i=e(27084),u=e(12611),a=e(9258),c=e(42118),l=e(61411),p=e(70929),h=e(45702),d=e(83791);function f(n,t,e=i.i.SUM_BY_NONZERO_WEIGHTS){const p=(0,o.YT)(n,"losses","computeWeightedLoss");let f=null;null!=t&&(f=(0,o.YT)(t,"weights","computeWeightedLoss"));const m=null==f?p:(0,a.l)(p,f);if(e===i.i.NONE)return m;if(e===i.i.SUM)return(0,d.c)(m);if(e===i.i.MEAN){if(null==f)return(0,u.i)(m);{const n=p.size/f.size,t=(0,r.y)((0,d.c)(m),(0,d.c)(f));return n>1?(0,r.y)(t,(0,h.d)(n)):t}}if(e===i.i.SUM_BY_NONZERO_WEIGHTS){if(null==f)return(0,r.y)((0,d.c)(m),(0,h.d)(p.size));{const n=(0,a.l)(f,(0,l.S)(p.shape)),t=(0,s.w)((0,d.c)((0,c.E)(n,(0,h.d)(0))),"float32");return(0,r.y)((0,d.c)(m),t)}}throw Error(`Unknown reduction: ${e}`)}const m=(0,p.op)({computeWeightedLoss_:f})},39417:function(n,t,e){e.d(t,{l:function(){return d}});var o=e(28189),s=e(45119),r=e(27084),i=e(9258),u=e(70929),a=e(45702),c=e(77126),l=e(83791),p=e(69533);function h(n,t,e,u,h=r.i.SUM_BY_NONZERO_WEIGHTS){const d=(0,o.YT)(n,"labels","cosineDistance"),f=(0,o.YT)(t,"predictions","cosineDistance");let m=null;null!=u&&(m=(0,o.YT)(u,"weights","cosineDistance")),(0,s.O3)(d.shape,f.shape,"Error in cosineDistance: ");const g=(0,a.d)(1),T=(0,c.j)(g,(0,l.c)((0,i.l)(d,f),e,!0));return(0,p.M)(T,m,h)}const d=(0,u.op)({cosineDistance_:h})},70327:function(n,t,e){e.d(t,{Z:function(){return d}});var o=e(28189),s=e(45119),r=e(27084),i=e(9258),u=e(70929),a=e(90112),c=e(45702),l=e(77126),p=e(69533);function h(n,t,e,u=r.i.SUM_BY_NONZERO_WEIGHTS){let h=(0,o.YT)(n,"labels","hingeLoss");const d=(0,o.YT)(t,"predictions","hingeLoss");let f=null;null!=e&&(f=(0,o.YT)(e,"weights","hingeLoss")),(0,s.O3)(h.shape,d.shape,"Error in hingeLoss: ");const m=(0,c.d)(1);h=(0,l.j)((0,i.l)((0,c.d)(2),h),m);const g=(0,a.V)((0,l.j)(m,(0,i.l)(h,d)));return(0,p.M)(g,f,u)}const d=(0,u.op)({hingeLoss_:h})},40718:function(n,t,e){e.d(t,{c:function(){return g}});var o=e(28189),s=e(45119),r=e(4888),i=e(37523),u=e(27084),a=e(12644),c=e(9258),l=e(70929),p=e(45702),h=e(45793),d=e(77126),f=e(69533);
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
function m(n,t,e,l=1,m=u.i.SUM_BY_NONZERO_WEIGHTS){const g=(0,o.YT)(n,"labels","huberLoss"),T=(0,o.YT)(t,"predictions","huberLoss");let E=null;null!=e&&(E=(0,o.YT)(e,"weights","huberLoss")),(0,s.O3)(g.shape,T.shape,"Error in huberLoss: ");const b=(0,p.d)(l),_=(0,r.t)((0,d.j)(T,g)),Y=(0,a.B)(_,b),S=(0,d.j)(_,Y),y=(0,i.W)((0,c.l)((0,p.d)(.5),(0,h.E)(Y)),(0,c.l)(b,S));return(0,f.M)(y,E,m)}const g=(0,l.op)({huberLoss_:m})},21780:function(n,t,e){e.d(t,{_:function(){return m}});var o=e(28189),s=e(45119),r=e(37523),i=e(44010),u=e(27084),a=e(9258),c=e(96522),l=e(70929),p=e(45702),h=e(77126),d=e(69533);
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
function f(n,t,e,l=1e-7,f=u.i.SUM_BY_NONZERO_WEIGHTS){const m=(0,o.YT)(n,"labels","logLoss"),g=(0,o.YT)(t,"predictions","logLoss");let T=null;null!=e&&(T=(0,o.YT)(e,"weights","logLoss")),(0,s.O3)(m.shape,g.shape,"Error in logLoss: ");const E=(0,p.d)(1),b=(0,p.d)(l),_=(0,c.H)((0,a.l)(m,(0,i.R)((0,r.W)(g,b)))),Y=(0,a.l)((0,h.j)(E,m),(0,i.R)((0,r.W)((0,h.j)(E,g),b))),S=(0,h.j)(_,Y);return(0,d.M)(S,T,f)}const m=(0,l.op)({logLoss_:f})},22150:function(n,t,e){e.d(t,{b:function(){return l}});var o=e(28189),s=e(45119),r=e(27084),i=e(70929),u=e(53427),a=e(69533);
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
function c(n,t,e,i=r.i.SUM_BY_NONZERO_WEIGHTS){const c=(0,o.YT)(n,"labels","meanSquaredError"),l=(0,o.YT)(t,"predictions","meanSquaredError");let p=null;null!=e&&(p=(0,o.YT)(e,"weights","meanSquaredError")),(0,s.O3)(c.shape,l.shape,"Error in meanSquaredError: ");const h=(0,u.P)(c,l);return(0,a.M)(h,p,i)}const l=(0,i.op)({meanSquaredError_:c})},7477:function(n,t,e){e.d(t,{k:function(){return S}});var o=e(28189),s=e(45119),r=e(4888),i=e(37523),u=e(8631),a=e(67897),c=e(15441),l=e(70929);
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
function p(n){const t=(0,o.YT)(n,"x","log1p"),e={x:t};return a.T2.runKernel(c.Cg$,e)}const h=(0,l.op)({log1p_:p});var d=e(27084),f=e(9258),m=e(96522),g=e(90112),T=e(45702),E=e(77126),b=e(69533);
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
function _(n,t){const e=(0,o.YT)(n,"labels","sigmoidCrossEntropyWithLogits"),a=(0,o.YT)(t,"logits","sigmoidCrossEntropyWithLogits");(0,s.O3)(e.shape,a.shape,"Error in sigmoidCrossEntropyWithLogits: ");const c=(0,g.V)(a),l=(0,f.l)(a,e),p=h((0,u.o)((0,m.H)((0,r.t)(a))));return(0,i.W)((0,E.j)(c,l),p)}function Y(n,t,e,r=0,u=d.i.SUM_BY_NONZERO_WEIGHTS){let a=(0,o.YT)(n,"multiClassLabels","sigmoidCrossEntropy");const c=(0,o.YT)(t,"logits","sigmoidCrossEntropy");let l=null;if(null!=e&&(l=(0,o.YT)(e,"weights","sigmoidCrossEntropy")),(0,s.O3)(a.shape,c.shape,"Error in sigmoidCrossEntropy: "),r>0){const n=(0,T.d)(r),t=(0,T.d)(1),e=(0,T.d)(.5);a=(0,i.W)((0,f.l)(a,(0,E.j)(t,n)),(0,f.l)(e,n))}const p=_(a,c);return(0,b.M)(p,l,u)}const S=(0,l.op)({sigmoidCrossEntropy_:Y})},67910:function(n,t,e){e.d(t,{C:function(){return O}});var o=e(31830),s=e(28189),r=e(45119),i=e(37523),u=e(21078),a=e(29809),c=e(89359),l=e(8631),p=e(44010),h=e(41938),d=e(70929),f=e(62302),m=e(77126),g=e(83791);
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
function T(n,t=null,e=!1){const o=(0,s.YT)(n,"x","logSumExp"),a=(0,r.Y6)(t,o.shape),c=(0,h.T)(o,a,!0),d=(0,m.j)(o,c),T=(0,l.o)(d),E=(0,g.c)(T,a),b=(0,p.R)(E),_=(0,i.W)((0,f.t)(c,b.shape),b);if(e){const n=(0,u.SM)(_.shape,a);return(0,f.t)(_,n)}return _}const E=(0,d.op)({logSumExp_:T});var b=e(27084),_=e(9258),Y=e(96522),S=e(45702),y=e(69533);
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
function v(n,t,e=-1){if(-1===e&&(e=t.rank-1),e!==t.rank-1)throw Error(`Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank ${t.rank} and dim was ${e}`);const s=(0,o._X)(((n,t,o)=>{const s=!0,r=E(t,[e],s),i=(0,m.j)((0,a.w)(t,"float32"),r);o([n,i]);const c=(0,Y.H)((0,_.l)(i,n)),p=(0,g.c)(c,[e]),h=(n,t)=>{const[o,s]=t,r=(0,u.SM)(n.shape,[e]);return[(0,_.l)((0,f.t)(n,r),(0,m.j)((0,a.w)(o,"float32"),(0,l.o)(s))),(0,_.l)((0,f.t)(n,r),(0,m.j)((0,l.o)(s),(0,a.w)(o,"float32")))]};return{value:p,gradFunc:h}}));return s(n,t)}function N(n,t,e,o=0,u=b.i.SUM_BY_NONZERO_WEIGHTS){let a=(0,s.YT)(n,"onehotLabels","softmaxCrossEntropy");const l=(0,s.YT)(t,"logits","softmaxCrossEntropy");let p=null;if(null!=e&&(p=(0,s.YT)(e,"weights","softmaxCrossEntropy")),(0,r.O3)(a.shape,l.shape,"Error in softmaxCrossEntropy: "),o>0){const n=(0,S.d)(o),t=(0,S.d)(1),e=(0,S.d)(a.shape[1]);a=(0,i.W)((0,_.l)(a,(0,m.j)(t,n)),(0,c.y)(n,e))}const h=v(a,l);return(0,y.M)(h,p,u)}const O=(0,d.op)({softmaxCrossEntropy_:N})},41938:function(n,t,e){e.d(t,{T:function(){return a}});var o=e(67897),s=e(15441),r=e(28189),i=e(70929);
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
function u(n,t=null,e=!1){const i=(0,r.YT)(n,"x","max"),u={x:i},a={reductionIndices:t,keepDims:e};return o.T2.runKernel(s.VAI,u,a)}const a=(0,i.op)({max_:u})},30178:function(n,t,e){e.d(t,{P:function(){return p}});var o=e(67897),s=e(15441),r=e(30565),i=e(28189),u=e(62198),a=e(29809),c=e(70929);
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
function l(n,t){let e=(0,i.YT)(n,"a","maximum"),c=(0,i.YT)(t,"b","maximum");[e,c]=(0,r.h0)(e,c),"bool"===e.dtype&&(e=(0,a.w)(e,"int32"),c=(0,a.w)(c,"int32")),(0,u.assertAndGetBroadcastShape)(e.shape,c.shape);const l={a:e,b:c};return o.T2.runKernel(s.LDN,l)}const p=(0,c.op)({maximum_:l})}}]);
//# sourceMappingURL=chunk-vendors-0e6201ce.23c82bc2.js.map