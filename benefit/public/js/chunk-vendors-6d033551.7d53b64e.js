"use strict";(self["webpackChunkbenefit"]=self["webpackChunkbenefit"]||[]).push([[8454],{10043:function(n,t,s){s.d(t,{J:function(){return e}});var r=s(27575);
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
 */class e{constructor(n){this.variableNames=["source"],this.outputShape=n,this.rank=n.length;const t=(0,r.bf)(this.rank);this.customUniforms=[{name:"start",arrayIndex:this.rank,type:"int"}];const s=i(this.rank);let e;const a=n.map(((n,t)=>`sourceLoc.${o[t]} = start[${t}] + coords.${o[t]};`));e=`\n        ${t} sourceLoc;\n        ${t} coords = getOutputCoords();\n        ${a.join("\n")}\n      `,this.userCode=`\n      void main() {\n        ${e}\n        setOutput(getSource(${s}));\n      }\n    `}}const o=["x","y","z","w","u","v"];function i(n){if(1===n)return"sourceLoc";if(n<=6)return o.slice(0,n).map((n=>"sourceLoc."+n)).join(",");throw Error(`Slicing for rank ${n} is not yet supported`)}},5144:function(n,t,s){s.d(t,{V:function(){return o}});var r=s(75694),e=s(27575);
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
class o{constructor(n){this.variableNames=["source"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=n,this.rank=n.length,this.customUniforms=[{name:"start",arrayIndex:this.rank,type:"int"}];const t=(0,e.bf)(this.rank),s=(0,r.Jp)("coords",this.rank),o=(0,r.Jp)("sourceLoc",this.rank),i=1===this.rank?"sourceLoc":`vec2(${o.slice(-2).join()})`,a=`getChannel(getSource(${o.join()}), ${i})`,u=`\n      result.x = ${a};\n      if (++${s[this.rank-1]} < ${n[this.rank-1]}) {\n        ++${o[this.rank-1]};\n        result.y = ${a};\n        --${o[this.rank-1]};\n      }\n    `,c=1===this.rank?"":`\n      --${s[this.rank-1]};\n      if (++${s[this.rank-2]} < ${n[this.rank-2]}) {\n        ++${o[this.rank-2]};\n        result.z = ${a};\n        if (++${s[this.rank-1]} < ${n[this.rank-1]}) {\n          ++${o[this.rank-1]};\n          result.w = ${a};\n        }\n      }\n    `,$=this.rank<=4?`sourceLoc = coords +\n            ${t}(${n.map(((n,t)=>`start[${t}]`)).join()});`:n.map(((n,t)=>`${o[t]} = ${s[t]} + start[${t}];`)).join("\n");this.userCode=`\n      void main() {\n        ${t} coords = getOutputCoords();\n        ${t} sourceLoc;\n        ${$}\n        vec4 result = vec4(0.);\n        ${u}\n        ${c}\n        setOutput(result);\n      }\n    `}}},11039:function(n,t,s){s.d(t,{U:function(){return e}});var r=s(27575);
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
 */class e{constructor(n,t,s){this.variableNames=["x"],this.outputShape=s;const e=s.length,o=(0,r.bf)(s.length),i=(0,r.bf)(s.length);let a="";if(1===e)a="coords * strides + begin";else{let n=0;a=s.map(((t,r)=>(n++,1===s.length?`coords * strides[${r}] + begin[${r}]`:`coords[${n-1}] * strides[${r}] + begin[${r}]`))).join(",")}this.userCode=`\n      ${o} begin = ${o}(${n});\n      ${o} strides = ${o}(${t});\n\n      void main() {\n        ${i} coords = getOutputCoords();\n        setOutput(getX(${a}));\n      }\n    `}}}}]);
//# sourceMappingURL=chunk-vendors-6d033551.7d53b64e.js.map