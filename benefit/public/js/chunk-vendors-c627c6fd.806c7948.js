"use strict";(self["webpackChunkbenefit"]=self["webpackChunkbenefit"]||[]).push([[4822],{77084:function(e,t,n){n.d(t,{Ej:function(){return g},Xf:function(){return c},jf:function(){return s},l3:function(){return a},oR:function(){return d},zV:function(){return l}});n(15685);var o=n(56734);const i="undefined"!==typeof Buffer&&("undefined"===typeof Blob||"undefined"===typeof atob||"undefined"===typeof btoa);function r(e){return i?Buffer.byteLength(e,"utf8"):new Blob([e]).size}function a(e){if(i)return Buffer.from(e).toString("base64");const t=new Uint8Array(e);let n="";for(let o=0,i=t.length;o<i;o++)n+=String.fromCharCode(t[o]);return btoa(n)}function s(e){if(i){const t=Buffer.from(e,"base64");return t.buffer.slice(t.byteOffset,t.byteOffset+t.byteLength)}const t=atob(e),n=new Uint8Array(t.length);for(let o=0;o<t.length;++o)n.set([t.charCodeAt(o)],o);return n.buffer}function l(e,t){const n={modelTopology:e.modelTopology,format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy,weightsManifest:t};return null!=e.signature&&(n.signature=e.signature),null!=e.userDefinedMetadata&&(n.userDefinedMetadata=e.userDefinedMetadata),null!=e.modelInitializer&&(n.modelInitializer=e.modelInitializer),null!=e.initializerSignature&&(n.initializerSignature=e.initializerSignature),null!=e.trainingConfig&&(n.trainingConfig=e.trainingConfig),n}function u(e,t,n){const o={modelTopology:e.modelTopology,format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy};if(null!=e.trainingConfig&&(o.trainingConfig=e.trainingConfig),null!=e.weightsManifest){if(!t)throw new Error("modelJSON has weightsManifest but weightSpecs is null");if(!n)throw new Error("modelJSON has weightsManifest but weightData is null");o.weightSpecs=t,o.weightData=n}return null!=e.signature&&(o.signature=e.signature),null!=e.userDefinedMetadata&&(o.userDefinedMetadata=e.userDefinedMetadata),null!=e.modelInitializer&&(o.modelInitializer=e.modelInitializer),null!=e.initializerSignature&&(o.initializerSignature=e.initializerSignature),o}async function g(e,t){let n,o;return null!=e.weightsManifest&&([n,o]=await t(e.weightsManifest)),u(e,n,o)}function d(e){if(e.modelTopology instanceof ArrayBuffer)throw new Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:null==e.modelTopology?0:r(JSON.stringify(e.modelTopology)),weightSpecsBytes:null==e.weightSpecs?0:r(JSON.stringify(e.weightSpecs)),weightDataBytes:null==e.weightData?0:new o.D(e.weightData).byteLength}}function c(e){const t=[];for(const n of e)t.push(...n.weights);return t}},76745:function(e,t,n){n.d(t,{Cd:function(){return b},ZT:function(){return p}});n(66652);var o=n(46574),i=n(45119),r=n(77084),a=n(56734),s=n(46669);
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
const l="/",u="tensorflowjs_models",g="info",d="model_topology",c="weight_specs",f="weight_data",h="model_metadata";function m(e){return{info:[u,e,g].join(l),topology:[u,e,d].join(l),weightSpecs:[u,e,c].join(l),weightData:[u,e,f].join(l),modelMetadata:[u,e,h].join(l)}}function y(e){for(const t of Object.values(e))window.localStorage.removeItem(t)}function w(e){const t=e.split(l);if(t.length<3)throw new Error(`Invalid key format: ${e}`);return t.slice(1,t.length-1).join(l)}function S(e){return e.startsWith(p.URL_SCHEME)?e.slice(p.URL_SCHEME.length):e}class p{constructor(e){if(!(0,o._K)().getBool("IS_BROWSER")||"undefined"===typeof window||"undefined"===typeof window.localStorage)throw new Error("The current environment does not support local storage.");if(this.LS=window.localStorage,null==e||!e)throw new Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=e,this.keys=m(this.modelPath)}async save(e){if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");{const n=JSON.stringify(e.modelTopology),o=JSON.stringify(e.weightSpecs),i=(0,r.oR)(e),s=a.D.join(e.weightData);try{this.LS.setItem(this.keys.info,JSON.stringify(i)),this.LS.setItem(this.keys.topology,n),this.LS.setItem(this.keys.weightSpecs,o),this.LS.setItem(this.keys.weightData,(0,r.l3)(s));const t={format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy,signature:null!=e.signature?e.signature:void 0,userDefinedMetadata:null!=e.userDefinedMetadata?e.userDefinedMetadata:void 0,modelInitializer:null!=e.modelInitializer?e.modelInitializer:void 0,initializerSignature:null!=e.initializerSignature?e.initializerSignature:void 0,trainingConfig:null!=e.trainingConfig?e.trainingConfig:void 0};return this.LS.setItem(this.keys.modelMetadata,JSON.stringify(t)),{modelArtifactsInfo:i}}catch(t){throw y(this.keys),new Error(`Failed to save model '${this.modelPath}' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes=${i.modelTopologyBytes}, weightSpecsBytes=${i.weightSpecsBytes}, weightDataBytes=${i.weightDataBytes}.`)}}}async load(){const e=JSON.parse(this.LS.getItem(this.keys.info));if(null==e)throw new Error(`In local storage, there is no model with name '${this.modelPath}'`);if("JSON"!==e.modelTopologyType)throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");const t={},n=JSON.parse(this.LS.getItem(this.keys.topology));if(null==n)throw new Error(`In local storage, the topology of model '${this.modelPath}' is missing.`);t.modelTopology=n;const o=JSON.parse(this.LS.getItem(this.keys.weightSpecs));if(null==o)throw new Error(`In local storage, the weight specs of model '${this.modelPath}' are missing.`);t.weightSpecs=o;const i=this.LS.getItem(this.keys.modelMetadata);if(null!=i){const e=JSON.parse(i);t.format=e.format,t.generatedBy=e.generatedBy,t.convertedBy=e.convertedBy,null!=e.signature&&(t.signature=e.signature),null!=e.userDefinedMetadata&&(t.userDefinedMetadata=e.userDefinedMetadata),null!=e.modelInitializer&&(t.modelInitializer=e.modelInitializer),null!=e.initializerSignature&&(t.initializerSignature=e.initializerSignature),null!=e.trainingConfig&&(t.trainingConfig=e.trainingConfig)}const a=this.LS.getItem(this.keys.weightData);if(null==a)throw new Error(`In local storage, the binary weight values of model '${this.modelPath}' are missing.`);return t.weightData=(0,r.jf)(a),t}}p.URL_SCHEME="localstorage://";const v=e=>(0,o._K)().getBool("IS_BROWSER")&&!Array.isArray(e)&&e.startsWith(p.URL_SCHEME)?I(e.slice(p.URL_SCHEME.length)):null;function I(e){return new p(e)}s.bM.registerSaveRouter(v),s.bM.registerLoadRouter(v);class b{constructor(){(0,i.vA)((0,o._K)().getBool("IS_BROWSER"),(()=>"Current environment is not a web browser")),(0,i.vA)("undefined"===typeof window||"undefined"!==typeof window.localStorage,(()=>"Current browser does not appear to support localStorage")),this.LS=window.localStorage}async listModels(){const e={},t=u+l,n=l+g;for(let o=0;o<this.LS.length;++o){const i=this.LS.key(o);if(i.startsWith(t)&&i.endsWith(n)){const t=w(i);e[t]=JSON.parse(this.LS.getItem(i))}}return e}async removeModel(e){e=S(e);const t=m(e);if(null==this.LS.getItem(t.info))throw new Error(`Cannot find model at path '${e}'`);const n=JSON.parse(this.LS.getItem(t.info));return y(t),n}}},66235:function(e,t,n){n.d(t,{dy:function(){return r}});var o=n(45119);n(46669);
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
const i="://";class r{constructor(){this.managers={}}static getInstance(){return null==r.instance&&(r.instance=new r),r.instance}static registerManager(e,t){(0,o.vA)(null!=e,(()=>"scheme must not be undefined or null.")),e.endsWith(i)&&(e=e.slice(0,e.indexOf(i))),(0,o.vA)(e.length>0,(()=>"scheme must not be an empty string."));const n=r.getInstance();(0,o.vA)(null==n.managers[e],(()=>`A model store manager is already registered for scheme '${e}'.`)),n.managers[e]=t}static getManager(e){const t=r.getInstance().managers[e];if(null==t)throw new Error(`Cannot find model manager for scheme '${e}'`);return t}static getSchemes(){return Object.keys(r.getInstance().managers)}}},9250:function(e,t,n){},16121:function(e,t,n){n.d(t,{U:function(){return i}});var o=n(45119);
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
 */function i(e,t,n,i){s(e),n=null==n?0:n,i=null==i?1:i,l(n,i);let r=0;const a=o=>(o.then((o=>{const a=n+ ++r/e.length*(i-n);return t(a),o})),o);function s(e){(0,o.vA)(null!=e&&Array.isArray(e)&&e.length>0,(()=>"promises must be a none empty array"))}function l(e,t){(0,o.vA)(e>=0&&e<=1,(()=>`Progress fraction must be in range [0, 1], but got startFraction ${e}`)),(0,o.vA)(t>=0&&t<=1,(()=>`Progress fraction must be in range [0, 1], but got endFraction ${t}`)),(0,o.vA)(t>=e,(()=>`startFraction must be no more than endFraction, but got startFraction ${e} and endFraction ${t}`))}return Promise.all(e.map(a))}},46669:function(e,t,n){n.d(t,{bM:function(){return o}});
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
class o{constructor(){this.saveRouters=[],this.loadRouters=[]}static getInstance(){return null==o.instance&&(o.instance=new o),o.instance}static registerSaveRouter(e){o.getInstance().saveRouters.push(e)}static registerLoadRouter(e){o.getInstance().loadRouters.push(e)}static getSaveHandlers(e){return o.getHandlers(e,"save")}static getLoadHandlers(e,t){return o.getHandlers(e,"load",t)}static getHandlers(e,t,n){const i=[],r="load"===t?o.getInstance().loadRouters:o.getInstance().saveRouters;return r.forEach((t=>{const o=t(e,n);null!==o&&i.push(o)})),i}}}}]);
//# sourceMappingURL=chunk-vendors-c627c6fd.806c7948.js.map