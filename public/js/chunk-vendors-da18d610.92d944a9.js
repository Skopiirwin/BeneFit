"use strict";(self["webpackChunkbenefit"]=self["webpackChunkbenefit"]||[]).push([[1262],{64826:function(t,e,a){a.d(e,{V:function(){return l}});var s=a(67897),i=a(15441),n=a(28189),r=a(45119),c=a(70929);
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
function o(t,e){const a=(0,n.YT)(t,"x","tile","string_or_numeric");r.vA(a.rank===e.length,(()=>`Error in transpose: rank of input ${a.rank} must match length of reps ${e}.`));const c={x:a},o={reps:e};return s.T2.runKernel(i.FAs,c,o)}const l=(0,c.op)({tile_:o})},7703:function(t,e,a){a.d(e,{m:function(){return g}});var s=a(67897),i=a(35287),n=a(15441),r=a(28189),c=a(45119),o=a(37148),l=a(35040),u=a(96522),h=a(70929),m=a(1902);
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
function d(t,e,a){const h=(0,r.YT)(t,"x","transpose");if(null==e&&(e=h.shape.map(((t,e)=>e)).reverse()),c.vA(h.rank===e.length,(()=>`Error in transpose: rank of input ${h.rank} must match length of perm ${e}.`)),e.forEach((t=>{c.vA(t>=0&&t<h.rank,(()=>"All entries in 'perm' must be between 0 and "+(h.rank-1)+` but got ${e}`))})),h.rank<=1)return h.clone();const d={x:h},g={perm:e};return"complex64"===h.dtype?(0,i.DZ)((()=>{let t=(0,m.x)(h),e=(0,l.n)(h);return t=s.T2.runKernel(n.wx0,{x:t},g),e=s.T2.runKernel(n.wx0,{x:e},g),a&&(e=(0,u.H)(e)),(0,o.f)(t,e)})):s.T2.runKernel(n.wx0,d,g)}const g=(0,h.op)({transpose_:d})},67261:function(t,e,a){a.d(e,{K:function(){return l}});var s=a(67897),i=a(15441),n=a(28189),r=a(45119),c=a(70929);
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
function o(t,e=0){const a=(0,n.YT)(t,"x","unstack","string_or_numeric");r.vA(e>=-a.shape.length&&e<a.shape.length,(()=>`Axis = ${e} is not in [-${a.shape.length}, ${a.shape.length})`));const c={value:a},o={axis:e};return s.T2.runKernel(i.dXR,c,o)}const l=(0,c.op)({unstack_:o})},12151:function(t,e,a){a.d(e,{_:function(){return u}});var s=a(67897),i=a(15441),n=a(28189),r=a(63567),c=a(62198),o=a(70929);
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
function l(t,e,a){const o=(0,n.YT)(e,"a","where"),l=(0,n.YT)(a,"b","where"),u=(0,n.YT)(t,"condition","where","bool"),h=(0,c.assertAndGetBroadcastShape)((0,c.assertAndGetBroadcastShape)(u.shape,o.shape),l.shape),m=(0,r.h)(u,h),d=(0,r.h)(o,h),g=(0,r.h)(l,h),p={condition:m,t:d,e:g};return s.T2.runKernel(i.l6P,p)}const u=(0,o.op)({where_:l})},42855:function(t,e,a){a.d(e,{U:function(){return r}});var s=a(67897),i=a(45119),n=a(37148);
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
function r(t,e="float32"){if((0,i.SA)(t),"complex64"===e){const e=r(t,"float32"),a=r(t,"float32");return(0,n.f)(e,a)}const a=(0,i.Ty)((0,i.Ze)(t),e);return s.T2.makeTensor(a,t,e)}},55537:function(t,e,a){a.d(e,{P:function(){return o}});var s=a(67897),i=a(15441),n=a(28189),r=a(70929);
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
function c(t){const e=(0,n.YT)(t,"x","zerosLike"),a={x:e};return s.T2.runKernel(i.xJ3,a)}const o=(0,r.op)({zerosLike_:c})},68737:function(t,e,a){a.d(e,{i:function(){return E}});var s=a(67897),i=a(35287),n=a(37523),r=a(89359),c=a(9258),o=a(79348),l=a(45793),u=a(55537),h=a(31830),m=a(45702),d=a(79559);
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
class g extends d.yL{minimize(t,e=!1,a){const{value:s,grads:n}=this.computeGradients(t,a);if(null!=a){const t=a.map((t=>({name:t.name,tensor:n[t.name]})));this.applyGradients(t)}else this.applyGradients(n);return(0,i.AS)(n),e?s:(s.dispose(),null)}get iterations(){return null==this.iterations_&&(this.iterations_=0),this.iterations_}incrementIterations(){this.iterations_=this.iterations+1}computeGradients(t,e){return(0,h.y7)(t,e)}dispose(){null!=this.iterations_&&(0,i.AS)(this.iterations_)}async saveIterations(){return null==this.iterations_&&(this.iterations_=0),{name:"iter",tensor:(0,m.d)(this.iterations_,"int32")}}async getWeights(){throw new Error("getWeights() is not implemented for this optimizer yet.")}async setWeights(t){throw new Error(`setWeights() is not implemented for this optimizer class ${this.getClassName()}`)}async extractIterations(t){return this.iterations_=(await t[0].tensor.data())[0],t.slice(1)}}Object.defineProperty(g,Symbol.hasInstance,{value:t=>null!=t.minimize&&null!=t.computeGradients&&null!=t.applyGradients});
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
class p extends g{static get className(){return"Adadelta"}constructor(t,e,a=null){super(),this.learningRate=t,this.rho=e,this.epsilon=a,this.accumulatedGrads=[],this.accumulatedUpdates=[],null==a&&(this.epsilon=s.T2.backend.epsilon())}applyGradients(t){const e=Array.isArray(t)?t.map((t=>t.name)):Object.keys(t);e.forEach(((e,a)=>{const h=s.T2.registeredVariables[e],m=!1;null==this.accumulatedGrads[a]&&(this.accumulatedGrads[a]={originalName:`${e}/accum_grad`,variable:(0,i.DZ)((()=>(0,u.P)(h).variable(m)))}),null==this.accumulatedUpdates[a]&&(this.accumulatedUpdates[a]={originalName:`${e}/accum_var`,variable:(0,i.DZ)((()=>(0,u.P)(h).variable(m)))});const d=Array.isArray(t)?t[a].tensor:t[e];if(null==d)return;const g=this.accumulatedGrads[a].variable,p=this.accumulatedUpdates[a].variable;(0,i.DZ)((()=>{const t=(0,n.W)((0,c.l)(g,this.rho),(0,c.l)((0,l.E)(d),1-this.rho)),e=(0,c.l)((0,r.y)((0,o.R)((0,n.W)(p,this.epsilon)),(0,o.R)((0,n.W)(g,this.epsilon))),d),a=(0,n.W)((0,c.l)(p,this.rho),(0,c.l)((0,l.E)(e),1-this.rho));g.assign(t),p.assign(a);const s=(0,n.W)((0,c.l)(e,-this.learningRate),h);h.assign(s)}))})),this.incrementIterations()}dispose(){null!=this.accumulatedUpdates&&((0,i.AS)(this.accumulatedGrads.map((t=>t.variable))),(0,i.AS)(this.accumulatedUpdates.map((t=>t.variable))))}async getWeights(){const t=[...this.accumulatedGrads,...this.accumulatedUpdates];return[await this.saveIterations()].concat(t.map((t=>({name:t.originalName,tensor:t.variable}))))}async setWeights(t){t=await this.extractIterations(t);const e=t.length/2,a=!1;this.accumulatedGrads=t.slice(0,e).map((t=>({originalName:t.name,variable:t.tensor.variable(a)}))),this.accumulatedUpdates=t.slice(e,2*e).map((t=>({originalName:t.name,variable:t.tensor.variable(a)})))}getConfig(){return{learningRate:this.learningRate,rho:this.rho,epsilon:this.epsilon}}static fromConfig(t,e){return new t(e["learningRate"],e["rho"],e["epsilon"])}}var b=a(96111);
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
class f extends g{static get className(){return"Adagrad"}constructor(t,e=.1){super(),this.learningRate=t,this.initialAccumulatorValue=e,this.accumulatedGrads=[]}applyGradients(t){const e=Array.isArray(t)?t.map((t=>t.name)):Object.keys(t);e.forEach(((e,a)=>{const u=s.T2.registeredVariables[e];if(null==this.accumulatedGrads[a]){const t=!1;this.accumulatedGrads[a]={originalName:`${e}/accumulator`,variable:(0,i.DZ)((()=>(0,b.G)(u.shape,this.initialAccumulatorValue).variable(t)))}}const h=Array.isArray(t)?t[a].tensor:t[e];if(null==h)return;const m=this.accumulatedGrads[a].variable;(0,i.DZ)((()=>{const t=(0,n.W)(m,(0,l.E)(h));m.assign(t);const e=(0,n.W)((0,c.l)((0,r.y)(h,(0,o.R)((0,n.W)(t,s.T2.backend.epsilon()))),-this.learningRate),u);u.assign(e)}))})),this.incrementIterations()}dispose(){null!=this.accumulatedGrads&&(0,i.AS)(this.accumulatedGrads.map((t=>t.variable)))}async getWeights(){return[await this.saveIterations()].concat(this.accumulatedGrads.map((t=>({name:t.originalName,tensor:t.variable}))))}async setWeights(t){t=await this.extractIterations(t);const e=!1;this.accumulatedGrads=t.map((t=>({originalName:t.name,variable:t.tensor.variable(e)})))}getConfig(){return{learningRate:this.learningRate,initialAccumulatorValue:this.initialAccumulatorValue}}static fromConfig(t,e){return new t(e["learningRate"],e["initialAccumulatorValue"])}}var y=a(98990),v=a(77126);
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
class A extends g{static get className(){return"Adam"}constructor(t,e,a,n=null){super(),this.learningRate=t,this.beta1=e,this.beta2=a,this.epsilon=n,this.accumulatedFirstMoment=[],this.accumulatedSecondMoment=[],(0,i.DZ)((()=>{this.accBeta1=(0,m.d)(e).variable(),this.accBeta2=(0,m.d)(a).variable()})),null==n&&(this.epsilon=s.T2.backend.epsilon())}applyGradients(t){const e=Array.isArray(t)?t.map((t=>t.name)):Object.keys(t);(0,i.DZ)((()=>{const a=(0,v.j)(1,this.accBeta1),h=(0,v.j)(1,this.accBeta2);e.forEach(((e,m)=>{const d=s.T2.registeredVariables[e],g=!1;null==this.accumulatedFirstMoment[m]&&(this.accumulatedFirstMoment[m]={originalName:`${e}/m`,variable:(0,i.DZ)((()=>(0,u.P)(d).variable(g)))}),null==this.accumulatedSecondMoment[m]&&(this.accumulatedSecondMoment[m]={originalName:`${e}/v`,variable:(0,i.DZ)((()=>(0,u.P)(d).variable(g)))});const p=Array.isArray(t)?t[m].tensor:t[e];if(null==p)return;const b=this.accumulatedFirstMoment[m].variable,f=this.accumulatedSecondMoment[m].variable,y=(0,n.W)((0,c.l)(b,this.beta1),(0,c.l)(p,1-this.beta1)),v=(0,n.W)((0,c.l)(f,this.beta2),(0,c.l)((0,l.E)(p),1-this.beta2)),A=(0,r.y)(y,a),w=(0,r.y)(v,h);b.assign(y),f.assign(v);const M=(0,n.W)((0,c.l)((0,r.y)(A,(0,n.W)((0,o.R)(w),this.epsilon)),-this.learningRate),d);d.assign(M)})),this.accBeta1.assign((0,c.l)(this.accBeta1,this.beta1)),this.accBeta2.assign((0,c.l)(this.accBeta2,this.beta2))})),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.accBeta2.dispose(),null!=this.accumulatedFirstMoment&&(0,i.AS)(this.accumulatedFirstMoment.map((t=>t.variable))),null!=this.accumulatedSecondMoment&&(0,i.AS)(this.accumulatedSecondMoment.map((t=>t.variable)))}async getWeights(){const t=[...this.accumulatedFirstMoment,...this.accumulatedSecondMoment];return[await this.saveIterations()].concat(t.map((t=>({name:t.originalName,tensor:t.variable}))))}async setWeights(t){t=await this.extractIterations(t),(0,i.DZ)((()=>{this.accBeta1.assign((0,y.n)(this.beta1,this.iterations_+1)),this.accBeta2.assign((0,y.n)(this.beta2,this.iterations_+1))}));const e=t.length/2,a=!1;this.accumulatedFirstMoment=t.slice(0,e).map((t=>({originalName:t.name,variable:t.tensor.variable(a)}))),this.accumulatedSecondMoment=t.slice(e,2*e).map((t=>({originalName:t.name,variable:t.tensor.variable(a)})))}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon}}static fromConfig(t,e){return new t(e["learningRate"],e["beta1"],e["beta2"],e["epsilon"])}}var w=a(4888),M=a(30178);
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
class R extends g{static get className(){return"Adamax"}constructor(t,e,a,n=null,r=0){super(),this.learningRate=t,this.beta1=e,this.beta2=a,this.epsilon=n,this.decay=r,this.accumulatedFirstMoment=[],this.accumulatedWeightedInfNorm=[],(0,i.DZ)((()=>{this.iteration=(0,m.d)(0).variable(),this.accBeta1=(0,m.d)(e).variable()})),null==n&&(this.epsilon=s.T2.backend.epsilon())}applyGradients(t){const e=Array.isArray(t)?t.map((t=>t.name)):Object.keys(t);(0,i.DZ)((()=>{const a=(0,v.j)(1,this.accBeta1),i=(0,r.y)(-this.learningRate,(0,n.W)((0,c.l)(this.iteration,this.decay),1));e.forEach(((e,o)=>{const l=s.T2.registeredVariables[e],h=!1;null==this.accumulatedFirstMoment[o]&&(this.accumulatedFirstMoment[o]={originalName:`${e}/m`,variable:(0,u.P)(l).variable(h)}),null==this.accumulatedWeightedInfNorm[o]&&(this.accumulatedWeightedInfNorm[o]={originalName:`${e}/v`,variable:(0,u.P)(l).variable(h)});const m=Array.isArray(t)?t[o].tensor:t[e];if(null==m)return;const d=this.accumulatedFirstMoment[o].variable,g=this.accumulatedWeightedInfNorm[o].variable,p=(0,n.W)((0,c.l)(d,this.beta1),(0,c.l)(m,1-this.beta1)),b=(0,c.l)(g,this.beta2),f=(0,w.t)(m),y=(0,M.P)(b,f);d.assign(p),g.assign(y);const v=(0,n.W)((0,c.l)((0,r.y)(i,a),(0,r.y)(p,(0,n.W)(y,this.epsilon))),l);l.assign(v)})),this.iteration.assign((0,n.W)(this.iteration,1)),this.accBeta1.assign((0,c.l)(this.accBeta1,this.beta1))})),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.iteration.dispose(),null!=this.accumulatedFirstMoment&&(0,i.AS)(this.accumulatedFirstMoment.map((t=>t.variable))),null!=this.accumulatedWeightedInfNorm&&(0,i.AS)(this.accumulatedWeightedInfNorm.map((t=>t.variable)))}async getWeights(){throw new Error("getWeights() is not implemented for Adamax yet.")}async setWeights(t){throw new Error("setWeights() is not implemented for Adamax yet.")}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon,decay:this.decay}}static fromConfig(t,e){return new t(e["learningRate"],e["beta1"],e["beta2"],e["epsilon"],e["decay"])}}
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
class W extends g{static get className(){return"SGD"}constructor(t){super(),this.learningRate=t,this.setLearningRate(t)}applyGradients(t){const e=Array.isArray(t)?t.map((t=>t.name)):Object.keys(t);e.forEach(((e,a)=>{const r=Array.isArray(t)?t[a].tensor:t[e];if(null==r)return;const o=s.T2.registeredVariables[e];(0,i.DZ)((()=>{const t=(0,n.W)((0,c.l)(this.c,r),o);o.assign(t)}))})),this.incrementIterations()}setLearningRate(t){this.learningRate=t,null!=this.c&&this.c.dispose(),this.c=(0,i.aC)((0,m.d)(-t))}dispose(){this.c.dispose()}async getWeights(){return[await this.saveIterations()]}async setWeights(t){if(t=await this.extractIterations(t),0!==t.length)throw new Error("SGD optimizer does not have settable weights.")}getConfig(){return{learningRate:this.learningRate}}static fromConfig(t,e){return new t(e["learningRate"])}}
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
class N extends W{static get className(){return"Momentum"}constructor(t,e,a=!1){super(t),this.learningRate=t,this.momentum=e,this.useNesterov=a,this.accumulations=[],this.m=(0,m.d)(this.momentum)}applyGradients(t){const e=Array.isArray(t)?t.map((t=>t.name)):Object.keys(t);e.forEach(((e,a)=>{const r=s.T2.registeredVariables[e];if(null==this.accumulations[a]){const t=!1;this.accumulations[a]={originalName:`${e}/momentum`,variable:(0,i.DZ)((()=>(0,u.P)(r).variable(t)))}}const o=this.accumulations[a].variable,l=Array.isArray(t)?t[a].tensor:t[e];null!=l&&(0,i.DZ)((()=>{let t;const e=(0,n.W)((0,c.l)(this.m,o),l);t=this.useNesterov?(0,n.W)((0,c.l)(this.c,(0,n.W)(l,(0,c.l)(e,this.m))),r):(0,n.W)((0,c.l)(this.c,e),r),o.assign(e),r.assign(t)}))})),this.incrementIterations()}dispose(){this.m.dispose(),null!=this.accumulations&&(0,i.AS)(this.accumulations.map((t=>t.variable)))}setMomentum(t){this.momentum=t}async getWeights(){return[await this.saveIterations()].concat(this.accumulations.map((t=>({name:t.originalName,tensor:t.variable}))))}async setWeights(t){t=await this.extractIterations(t);const e=!1;this.accumulations=t.map((t=>({originalName:t.name,variable:t.tensor.variable(e)})))}getConfig(){return{learningRate:this.learningRate,momentum:this.momentum,useNesterov:this.useNesterov}}static fromConfig(t,e){return new t(e["learningRate"],e["momentum"],e["useNesterov"])}}
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
class x extends g{static get className(){return"RMSProp"}constructor(t,e=.9,a=0,i=null,n=!1){if(super(),this.learningRate=t,this.decay=e,this.momentum=a,this.epsilon=i,this.accumulatedMeanSquares=[],this.accumulatedMoments=[],this.accumulatedMeanGrads=[],this.centered=n,null==i&&(this.epsilon=s.T2.backend.epsilon()),null==t)throw new Error("learningRate for RMSPropOptimizer must be defined.")}applyGradients(t){const e=Array.isArray(t)?t.map((t=>t.name)):Object.keys(t);e.forEach(((e,a)=>{const h=s.T2.registeredVariables[e],m=!1;null==this.accumulatedMeanSquares[a]&&(this.accumulatedMeanSquares[a]={originalName:`${e}/rms`,variable:(0,i.DZ)((()=>(0,u.P)(h).variable(m)))}),null==this.accumulatedMoments[a]&&(this.accumulatedMoments[a]={originalName:`${e}/momentum`,variable:(0,i.DZ)((()=>(0,u.P)(h).variable(m)))}),null==this.accumulatedMeanGrads[a]&&this.centered&&(this.accumulatedMeanGrads[a]={originalName:`${e}/mg`,variable:(0,i.DZ)((()=>(0,u.P)(h).variable(m)))});const d=Array.isArray(t)?t[a].tensor:t[e];if(null==d)return;const g=this.accumulatedMeanSquares[a].variable,p=this.accumulatedMoments[a].variable;(0,i.DZ)((()=>{const t=(0,n.W)((0,c.l)(g,this.decay),(0,c.l)((0,l.E)(d),1-this.decay));if(this.centered){const e=this.accumulatedMeanGrads[a].variable,s=(0,n.W)((0,c.l)(e,this.decay),(0,c.l)(d,1-this.decay)),i=(0,r.y)((0,c.l)(d,this.learningRate),(0,o.R)((0,v.j)(t,(0,n.W)((0,l.E)(s),this.epsilon)))),u=(0,n.W)((0,c.l)(p,this.momentum),i);g.assign(t),e.assign(s),p.assign(u);const m=(0,v.j)(h,u);h.assign(m)}else{const t=(0,n.W)((0,c.l)(g,this.decay),(0,c.l)((0,l.E)(d),1-this.decay)),e=(0,n.W)((0,c.l)(p,this.momentum),(0,r.y)((0,c.l)(d,this.learningRate),(0,o.R)((0,n.W)(t,this.epsilon))));g.assign(t),p.assign(e);const a=(0,v.j)(h,e);h.assign(a)}}))})),this.incrementIterations()}dispose(){null!=this.accumulatedMeanSquares&&(0,i.AS)(this.accumulatedMeanSquares.map((t=>t.variable))),null!=this.accumulatedMeanGrads&&this.centered&&(0,i.AS)(this.accumulatedMeanGrads.map((t=>t.variable))),null!=this.accumulatedMoments&&(0,i.AS)(this.accumulatedMoments.map((t=>t.variable)))}async getWeights(){const t=[...this.accumulatedMeanSquares,...this.accumulatedMoments];return this.centered&&t.push(...this.accumulatedMeanGrads),[await this.saveIterations()].concat(t.map((t=>({name:t.originalName,tensor:t.variable}))))}async setWeights(t){t=await this.extractIterations(t);const e=this.centered?t.length/3:t.length/2,a=!1;this.accumulatedMeanSquares=t.slice(0,e).map((t=>({originalName:t.name,variable:t.tensor.variable(a)}))),this.accumulatedMoments=t.slice(e,2*e).map((t=>({originalName:t.name,variable:t.tensor.variable(a)}))),this.centered&&(this.accumulatedMeanGrads=t.slice(2*e,3*e).map((t=>({originalName:t.name,variable:t.tensor.variable(a)}))))}getConfig(){return{learningRate:this.learningRate,decay:this.decay,momentum:this.momentum,epsilon:this.epsilon,centered:this.centered}}static fromConfig(t,e){return new t(e["learningRate"],e["decay"],e["momentum"],e["epsilon"],e["centered"])}}
/**
 * @license
 * Copyright 2022 Google LLC.
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
const S=[p,f,A,R,N,x,W];function E(){for(const t of S)(0,d._w)(t)}},86448:function(t,e,a){
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
function s(t){return t instanceof Float32Array||t instanceof Int32Array||t instanceof Uint8Array||t instanceof Uint8ClampedArray}a.d(e,{Y:function(){return s}})},15618:function(t,e,a){a(66652);var s=a(46574),i=a(30522),n=a(76745),r=a(66235),c=a(86448);
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
class o{constructor(){this.messageName="setTimeoutCustom",this.functionRefs=[],this.handledMessageCount=0,this.hasEventListener=!1}fetch(t,e){return fetch(t,e)}now(){return performance.now()}encode(t,e){if("utf-8"!==e&&"utf8"!==e)throw new Error(`Browser's encoder only supports utf-8, but got ${e}`);return null==this.textEncoder&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(t)}decode(t,e){return new TextDecoder(e).decode(t)}setTimeoutCustom(t,e){"undefined"!==typeof window&&(0,s._K)().getBool("USE_SETTIMEOUTCUSTOM")?(this.functionRefs.push(t),setTimeout((()=>{window.postMessage({name:this.messageName,index:this.functionRefs.length-1},"*")}),e),this.hasEventListener||(this.hasEventListener=!0,window.addEventListener("message",(t=>{if(t.source===window&&t.data.name===this.messageName){t.stopPropagation();const e=this.functionRefs[t.data.index];e(),this.handledMessageCount++,this.handledMessageCount===this.functionRefs.length&&(this.functionRefs=[],this.handledMessageCount=0)}}),!0))):setTimeout(t,e)}isTypedArray(t){return(0,c.Y)(t)}}if((0,s._K)().get("IS_BROWSER")){(0,s._K)().setPlatform("browser",new o);try{r.dy.registerManager(n.ZT.URL_SCHEME,new n.Cd)}catch(l){}try{r.dy.registerManager(i.mn.URL_SCHEME,new i.lQ)}catch(l){}}},83672:function(t,e,a){var s=a(46574);
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
 */const i={importFetch:()=>a(85817)};let n;class r{constructor(){this.util=a(18590),this.textEncoder=new this.util.TextEncoder}fetch(t,e){return null!=(0,s._K)().global.fetch?(0,s._K)().global.fetch(t,e):(null==n&&(n=i.importFetch()),n(t,e))}now(){const t=process.hrtime();return 1e3*t[0]+t[1]/1e6}encode(t,e){if("utf-8"!==e&&"utf8"!==e)throw new Error(`Node built-in encoder only supports utf-8, but got ${e}`);return this.textEncoder.encode(t)}decode(t,e){return 0===t.length?"":new this.util.TextDecoder(e).decode(t)}isTypedArray(t){return this.util.types.isFloat32Array(t)||this.util.types.isInt32Array(t)||this.util.types.isUint8Array(t)||this.util.types.isUint8ClampedArray(t)}}(0,s._K)().get("IS_NODE")&&!(0,s._K)().get("IS_BROWSER")&&(0,s._K)().setPlatform("node",new r)}}]);
//# sourceMappingURL=chunk-vendors-da18d610.92d944a9.js.map