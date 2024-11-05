"use strict";(self["webpackChunkbenefit"]=self["webpackChunkbenefit"]||[]).push([[5386],{41466:function(e,t,n){n.d(t,{UD:function(){return a}});var s=n(46574),r=n(89783),o=n(45119);
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
class a{constructor(e,t){this.backendTimer=e,this.logger=t,null==t&&(this.logger=new i)}profileKernel(e,t,n){let o;const a=()=>{o=n()};let i;const c=r.now();if(this.backendTimer.timerAvailable())i=this.backendTimer.time(a);else{a();for(const e of o)e.dataSync();i=Promise.resolve({kernelMs:r.now()-c})}if((0,s._K)().getBool("CHECK_COMPUTATION_FOR_ERRORS"))for(let s=0;s<o.length;s++){const t=o[s];t.data().then((n=>{l(n,t.dtype,e)}))}const f={kernelName:e,outputs:o,inputs:t,timeMs:i.then((e=>e.kernelMs)),extraInfo:i.then((e=>null!=e.getExtraProfileInfo?e.getExtraProfileInfo():""))};return f}logKernelProfile(e){const{kernelName:t,outputs:n,timeMs:s,inputs:r,extraInfo:o}=e;n.forEach((e=>{Promise.all([e.data(),s,o]).then((n=>{this.logger.logKernelProfile(t,e,n[0],n[1],r,n[2])}))}))}}function l(e,t,n){if("float32"!==t)return!1;for(let s=0;s<e.length;s++){const t=e[s];if(isNaN(t)||!isFinite(t))return console.warn(`Found ${t} in the result of '${n}'`),!0}return!1}class i{logKernelProfile(e,t,n,s,r,a){const l="number"===typeof s?o.av(`${s}ms`,9):s["error"],i=o.av(e,25),c=t.rank,f=t.size,u=o.av(t.shape.toString(),14);let g="";for(const o in r){const e=r[o];if(null!=e){const n=e.shape||t.shape,s=n.length;g+=`${o}: ${s}D ${s>0?n:""} `}}console.log(`%c${i}\t%c${l}\t%c${c}D ${u}\t%c${f}\t%c${g}\t%c${a}`,"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue")}}},79559:function(e,t,n){n.d(t,{_w:function(){return i},yL:function(){return a}});var s=n(45119);
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
 */const r=new Map,o=new Map;class a{getClassName(){return this.constructor.className}static fromConfig(e,t){return new e(t)}}class l{constructor(){this.classNameMap={}}static getMap(){return null==l.instance&&(l.instance=new l),l.instance}static register(e){l.getMap().classNameMap[e.className]=[e,e.fromConfig]}}function i(e,t,n){(0,s.vA)(null!=e.className,(()=>"Class being registered does not have the static className property defined.")),(0,s.vA)("string"===typeof e.className,(()=>"className is required to be a string, but got type "+typeof e.className)),(0,s.vA)(e.className.length>0,(()=>"Class being registered has an empty-string as its className, which is disallowed.")),"undefined"===typeof t&&(t="Custom"),"undefined"===typeof n&&(n=e.className);const a=n,i=t+">"+a;return l.register(e),r.set(i,e),o.set(e,i),e}}}]);
//# sourceMappingURL=chunk-vendors-6db580f8.00900dd0.js.map