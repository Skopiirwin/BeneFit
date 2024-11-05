"use strict";(self["webpackChunkbenefit"]=self["webpackChunkbenefit"]||[]).push([[977],{37427:function(t,n,o){o.d(n,{a:function(){return r},p:function(){return i}});var e=o(45119);
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
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
 */function i(t,n,o){const e={},i={};for(let f=0;f<n.length;f++)e[n[f].id]=!0;for(let f=0;f<t.length;f++){const o=t[f],r=o.inputs;for(const t in r){const s=r[t];let u=!1;for(let t=0;t<n.length;t++)if(e[s.id]){o.outputs.forEach((t=>e[t.id]=!0)),u=!0,i[o.id]=!0;break}if(u)break}}const r={};r[o.id]=!0;const s={};for(let f=t.length-1;f>=0;f--){const n=t[f],o=n.inputs;for(let t=0;t<n.outputs.length;t++)if(r[n.outputs[t].id]){for(const t in o)r[o[t].id]=!0,s[n.id]=!0;break}}const u=[];for(let f=0;f<t.length;f++){const n=t[f];if(i[n.id]&&s[n.id]){const t={};for(const i in n.inputs){const o=n.inputs[i];e[o.id]&&(t[i]=o)}const o=Object.assign({},n);o.inputs=t,o.outputs=n.outputs,u.push(o)}}return u}function r(t,n,o,i){for(let r=n.length-1;r>=0;r--){const s=n[r],u=[];if(s.outputs.forEach((n=>{const o=t[n.id];null!=o?u.push(o):u.push(null)})),null==s.gradient)throw new Error(`Cannot compute gradient: gradient function not found for ${s.kernelName}.`);const f=s.gradient(u);for(const n in s.inputs){if(!(n in f))throw new Error(`Cannot backprop through input ${n}. Available gradients found: ${Object.keys(f)}.`);const r=o((()=>f[n]()));if("float32"!==r.dtype)throw new Error(`Error in gradient for op ${s.kernelName}. The gradient of input ${n} must have 'float32' dtype, but has '${r.dtype}'`);const u=s.inputs[n];if(!e.r1(r.shape,u.shape))throw new Error(`Error in gradient for op ${s.kernelName}. The gradient of input '${n}' has shape '${r.shape}', which does not match the shape of the input '${u.shape}'`);if(null==t[u.id])t[u.id]=r;else{const n=t[u.id];t[u.id]=i(n,r),n.dispose()}}}}}}]);
//# sourceMappingURL=chunk-vendors-c2c2696e.ec8e3cdc.js.map