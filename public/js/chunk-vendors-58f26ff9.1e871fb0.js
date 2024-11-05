"use strict";(self["webpackChunkbenefit"]=self["webpackChunkbenefit"]||[]).push([[9121],{40784:function(n,t,e){e.d(t,{e:function(){return o}});
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
class o{constructor(n,t){this.variableNames=["Image"],this.outputShape=[],this.customUniforms=[{name:"params",type:"vec4"}];const e=n[1],o=n[2];this.outputShape=n;let s="";s="number"===typeof t?`float outputValue = ${t.toFixed(2)};`:`\n        vec3 fill = vec3(${t.join(",")});\n        float outputValue = fill[coords[3]];`,this.userCode=`\n        void main() {\n          ivec4 coords = getOutputCoords();\n          int x = coords[2];\n          int y = coords[1];\n          float coordXFloat = (float(x) - params[0]) * params[3] -\n            (float(y) - params[1]) * params[2];\n          float coordYFloat = (float(x) - params[0]) * params[2] +\n            (float(y) - params[1]) * params[3];\n          int coordX = int(round(coordXFloat + params[0]));\n          int coordY = int(round(coordYFloat + params[1]));\n          ${s}\n          if(coordX >= 0 && coordX < ${o} && coordY >= 0 && coordY < ${e}) {\n            outputValue = getImage(coords[0], coordY, coordX, coords[3]);\n          }\n          setOutput(outputValue);\n        }\n    `}}},8939:function(n,t,e){e.d(t,{$:function(){return s}});var o=e(27575);
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
 */class s{constructor(n,t,e,s,d,i,a=!0,u=!1){this.variableNames=["updates","indices","defaultValue"],this.outputShape=i;const r=(0,o.bf)(d.length),c=(0,o.bf)(i.length);let l="";1===e?l="i":2===e&&(l="i, j");const f=`getIndices(${l})`;let p="";1===s?p="i":2===s&&(p="i, coords[1]");const m=`getUpdates(${p})`;let h="";u&&(h="coords[0], coords[1]");const $=`getDefaultValue(${h})`,v=t>1?"strides[j]":"strides";this.userCode=`\n        ${r} strides = ${r}(${d});\n\n        void main() {\n          ${c} coords = getOutputCoords();\n          float sum = 0.0;\n          bool found = false;\n          for (int i = 0; i < ${n}; i++) {\n            int flattenedIndex = 0;\n            for (int j = 0; j < ${t}; j++) {\n              int index = round(${f});\n              flattenedIndex += index * ${v};\n            }\n            if (flattenedIndex == coords[0]) {\n              sum += ${m};\n              found = true;\n            }\n          }\n          setOutput(mix(${$}, sum, float(found)));\n        }\n      `}}},57160:function(n,t,e){e.d(t,{h:function(){return s}});var o=e(27575);
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
 */class s{constructor(n,t,e,s,d,i,a=!0,u=!1){this.variableNames=["updates","indices","defaultValue"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=i;const r=(0,o.bf)(d.length),c=(0,o.bf)(i.length);let l="";1===e?l="i":2===e&&(l="i, j");const f=`getIndices(${l})`;let p="";1===s?p="i":2===s&&(p="i, coords[1]");const m=`getUpdates(${p})`;let h="";u&&(h="coords[0], coords[1]");const $=`getDefaultValue(${h})`,v=t>1?"strides[j]":"strides",x=t>1?"strides[j + 1]":"strides";this.userCode=`\n        ${r} strides = ${r}(${d});\n\n        void main() {\n          ${c} coords = getOutputCoords();\n          vec4 sum = vec4(0.);\n          vec4 found = vec4(0.);\n          for (int i = 0; i < ${n}; i+=2) {\n            ivec2 flattenedIndex = ivec2(0);\n            for (int j = 0; j < ${t}; j+=2) {\n              ivec4 index = round(${f});\n              flattenedIndex += index.xz * ${v};\n              if (j + 1 < ${t}) {\n                flattenedIndex += index.yw * ${x};\n              }\n            }\n            if (flattenedIndex[0] == coords[0] || flattenedIndex[1] == coords[0] ||\n                flattenedIndex[0] == coords[0] + 1 || flattenedIndex[1] == coords[0] + 1) {\n              vec4 updVals = ${m};\n              if (flattenedIndex[0] == coords[0]) {\n                sum.xy += updVals.xy;\n                found.xy = vec2(1.);\n              } else if (flattenedIndex[0] == coords[0] + 1) {\n                sum.zw += updVals.xy;\n                found.zw = vec2(1.);\n              }\n              if (flattenedIndex[1] == coords[0]) {\n                sum.xy += updVals.zw;\n                found.xy = vec2(1.);\n              } else if (flattenedIndex[1] == coords[0] + 1) {\n                sum.zw += updVals.zw;\n                found.zw = vec2(1.);\n              }\n            }\n          }\n          setOutput(mix(${$}, sum, found));\n        }\n      `}}},473:function(n,t,e){e.d(t,{i:function(){return s}});var o=e(9495);
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
 */class s{constructor(n,t,e,s){this.variableNames=["sortedSequence","values"],this.customUniforms=[{name:"numInputs",type:"int"}],this.outputShape=[n,e];const d="while (left < right) {",i=`for (int i = 0; i < ${Math.ceil(Math.log2(t+1))}; ++i) { if (left >= right) break;`,a=2===(0,o._K2)().getNumber("WEBGL_VERSION")?d:i,u="left"===s?"<":"<=";this.userCode=`\n       int findBound(int batch, float value) {\n         int left = 0;\n         int right = numInputs;\n         int mid;\n         ${a}\n           mid = (left + right) / 2;\n           if (getSortedSequence(batch, mid) ${u} value) {\n             left = mid + 1;\n           } else {\n             right = mid;\n           }\n         }\n         return right;\n       }\n\n       void main() {\n         ivec2 coords = getOutputCoords();\n         int batch = coords[0];\n         int valueIndex = coords[1];\n\n         float value = getValues(batch, valueIndex);\n\n         setOutput(float(findBound(batch, value)));\n       }\n     `}}}}]);
//# sourceMappingURL=chunk-vendors-58f26ff9.1e871fb0.js.map