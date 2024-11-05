"use strict";(self["webpackChunkbenefit"]=self["webpackChunkbenefit"]||[]).push([[5780],{7539:function(t,n,r){r.d(n,{E:function(){return u}});var e=r(67897),s=r(15441),i=r(28189),a=r(70929);
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
function o(t,n,r,a=!0){const o=(0,i.YT)(t,"input","staticRegexReplace","string"),u={pattern:n,rewrite:r,replaceGlobal:a};return e.T2.runKernel(s.GZp,{x:o},u)}const u=(0,a.op)({staticRegexReplace_:o})},96557:function(t,n,r){r.d(n,{A:function(){return u}});var e=r(67897),s=r(15441),i=r(28189),a=r(70929);
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
function o(t,n,r,a,o,u,c,p){const l=(0,i.YT)(t,"data","stringNGrams","string");if("string"!==l.dtype)throw new Error("Data must be of datatype string");if(1!==l.shape.length)throw new Error(`Data must be a vector, saw: ${l.shape}`);const f=(0,i.YT)(n,"dataSplits","stringNGrams");if("int32"!==f.dtype)throw new Error("Data splits must be of datatype int32");const h={separator:r,nGramWidths:a,leftPad:o,rightPad:u,padWidth:c,preserveShortSequences:p},d={data:l,dataSplits:f},g=e.T2.runKernel(s.YAb,d,h);return{nGrams:g[0],nGramsSplits:g[1]}}const u=(0,a.op)({stringNGrams_:o})},87984:function(t,n,r){r.d(n,{c:function(){return u}});var e=r(67897),s=r(15441),i=r(28189),a=r(70929);
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
function o(t,n,r=!0){const a=(0,i.YT)(t,"input","stringSplit","string"),o=(0,i.YT)(n,"delimiter","stringSplit","string");if(1!==a.rank)throw new Error(`Input should be Tensor1D but received shape ${a.shape}`);if(0!==o.rank)throw new Error(`Delimiter should be a scalar but received shape ${o.shape}`);const u={skipEmpty:r},c={input:a,delimiter:o},p=e.T2.runKernel(s.iW0,c,u);return{indices:p[0],values:p[1],shape:p[2]}}const u=(0,a.op)({stringSplit_:o})},1788:function(t,n,r){r.d(n,{N:function(){return u}});var e=r(67897),s=r(15441),i=r(28189),a=r(70929);
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
function o(t,n){const r=(0,i.YT)(t,"input","stringToHashBucketFast","string"),a={numBuckets:n};if(n<=0)throw new Error("Number of buckets must be at least 1");const o={input:r};return e.T2.runKernel(s.$jE,o,a)}const u=(0,a.op)({stringToHashBucketFast_:o})}}]);
//# sourceMappingURL=chunk-vendors-1df7d678.bf391f48.js.map