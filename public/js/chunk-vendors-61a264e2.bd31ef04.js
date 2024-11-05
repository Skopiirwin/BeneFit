"use strict";(self["webpackChunkbenefit"]=self["webpackChunkbenefit"]||[]).push([[428],{86819:function(t,e,n){var a=n(9495),s=n(77546),o=n(80393);
/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
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
a.eMq.isBrowser()&&(0,a.gJX)("webgl",(()=>new s.Q6),2);o.bP},29643:function(t,e,n){n.d(e,{f:function(){return s}});var a=n(9495);
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
 */class s{constructor(t,e,n,s,o,r){this.outputShape=[],this.variableNames=["x","mean","variance"],a.C0T.assertAndGetBroadcastShape(t,e),a.C0T.assertAndGetBroadcastShape(t,n);let u="0.0";null!=s&&(a.C0T.assertAndGetBroadcastShape(t,s),this.variableNames.push("offset"),u="getOffsetAtOutCoords()");let l="1.0";null!=o&&(a.C0T.assertAndGetBroadcastShape(t,o),this.variableNames.push("scale"),l="getScaleAtOutCoords()"),this.outputShape=t,this.userCode=`\n      void main() {\n        float x = getXAtOutCoords();\n        float mean = getMeanAtOutCoords();\n        float variance = getVarianceAtOutCoords();\n        float offset = ${u};\n        float scale = ${l};\n        float inv = scale * inversesqrt(variance + float(${r}));\n        setOutput(dot(vec3(x, -mean, offset), vec3(inv, inv, 1)));\n      }\n    `}}},68616:function(t,e,n){n.d(e,{x:function(){return s}});var a=n(9495);
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
 */class s{constructor(t,e,n,s,o,r){this.packedInputs=!0,this.packedOutput=!0,this.variableNames=["x","mean","variance"],a.C0T.assertAndGetBroadcastShape(t,e),a.C0T.assertAndGetBroadcastShape(t,n);let u="vec4(0.0)";null!=s&&(a.C0T.assertAndGetBroadcastShape(t,s),this.variableNames.push("offset"),u="getOffsetAtOutCoords()");let l="vec4(1.0)";null!=o&&(a.C0T.assertAndGetBroadcastShape(t,o),this.variableNames.push("scale"),l="getScaleAtOutCoords()"),this.outputShape=t,this.userCode=`\n      void main() {\n        vec4 offset = ${u};\n        vec4 scale = ${l};\n\n        vec4 x = getXAtOutCoords();\n        vec4 mean = getMeanAtOutCoords();\n        vec4 variance = getVarianceAtOutCoords();\n\n        vec4 inv = scale * inversesqrt(variance + vec4(${r}));\n\n        setOutput((x - mean) * inv + offset);\n      }\n    `}}},65274:function(t,e,n){n.d(e,{C:function(){return s},f:function(){return o}});var a=n(9495);
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
 */const s={REAL:"return areal * breal - aimag * bimag;",IMAG:"return areal * bimag + aimag * breal;"};class o{constructor(t,e,n){this.variableNames=["AReal","AImag","BReal","BImag"],this.outputShape=a.C0T.assertAndGetBroadcastShape(e,n),this.userCode=`\n      float binaryOpComplex(\n          float areal, float aimag, float breal, float bimag) {\n        ${t}\n      }\n\n      void main() {\n        float areal = getARealAtOutCoords();\n        float aimag = getAImagAtOutCoords();\n        float breal = getBRealAtOutCoords();\n        float bimag = getBImagAtOutCoords();\n        setOutput(binaryOpComplex(areal, aimag, breal, bimag));\n      }\n    `}}},22897:function(t,e,n){n.d(e,{dR:function(){return o},x:function(){return r}});var a=n(9495),s=n(22792);
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
 */
const o="\n  if (isnan(a)) return a;\n  if (isnan(b)) return b;\n";class r{constructor(t,e,n){this.variableNames=["A","B"],this.outputShape=a.C0T.assertAndGetBroadcastShape(e,n),this.enableShapeUniforms=(0,s.ik)(this.outputShape.length),this.userCode=`\n      float binaryOperation(float a, float b) {\n        ${t}\n      }\n\n      void main() {\n        float a = getAAtOutCoords();\n        float b = getBAtOutCoords();\n        setOutput(binaryOperation(a, b));\n      }\n    `}}},46334:function(t,e,n){n.d(e,{VI:function(){return l},qq:function(){return u}});var a=n(9495),s=n(22792),o=n(75694),r=n(27575);
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
const u="\n  result.r = isNaN.r ? NAN : result.r;\n  result.g = isNaN.g ? NAN : result.g;\n  result.b = isNaN.b ? NAN : result.b;\n  result.a = isNaN.a ? NAN : result.a;\n";class l{constructor(t,e,n,u=!1){this.variableNames=["A","B"],this.supportsBroadcasting=!0,this.packedInputs=!0,this.packedOutput=!0,this.outputShape=a.C0T.assertAndGetBroadcastShape(e,n);const l=this.outputShape.length;this.enableShapeUniforms=(0,s.ik)(l);let i="";if(u)if(0===l||1===a.ZSL.sizeFromShape(this.outputShape))i="\n          result.y = 0.;\n          result.z = 0.;\n          result.w = 0.;\n        ";else{const t=(0,r.bf)(l);if(i=`\n          ${t} coords = getOutputCoords();\n        `,1===l)this.enableShapeUniforms?i+="\n            result.y = (coords + 1) >= outShape ? 0. : result.y;\n            result.z = 0.;\n            result.w = 0.;\n          ":i+=`\n            result.y = (coords + 1) >= ${this.outputShape[0]} ? 0. : result.y;\n            result.z = 0.;\n            result.w = 0.;\n          `;else{const t=(0,o.Jp)("coords",l);this.enableShapeUniforms?i+=`\n            bool nextRowOutOfBounds =\n              (${t[l-2]} + 1) >= outShape[${l} - 2];\n            bool nextColOutOfBounds =\n              (${t[l-1]} + 1) >= outShape[${l} - 1];\n            result.y = nextColOutOfBounds ? 0. : result.y;\n            result.z = nextRowOutOfBounds ? 0. : result.z;\n            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;\n          `:i+=`\n            bool nextRowOutOfBounds =\n              (${t[l-2]} + 1) >= ${this.outputShape[l-2]};\n            bool nextColOutOfBounds =\n              (${t[l-1]} + 1) >= ${this.outputShape[l-1]};\n            result.y = nextColOutOfBounds ? 0. : result.y;\n            result.z = nextRowOutOfBounds ? 0. : result.z;\n            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;\n          `}}this.userCode=`\n      vec4 binaryOperation(vec4 a, vec4 b) {\n        ${t}\n      }\n\n      void main() {\n        vec4 a = getAAtOutCoords();\n        vec4 b = getBAtOutCoords();\n\n        vec4 result = binaryOperation(a, b);\n        ${i}\n\n        setOutput(result);\n      }\n    `}}},597:function(t,e,n){n.d(e,{bU:function(){return u},lj:function(){return r}});var a=n(9495);
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
 */const s={},o={alpha:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1,depth:!1,stencil:!1,failIfMajorPerformanceCaveat:!0};function r(t,e){s[t]=e}function u(t,e){if(!(t in s)||null!=e){const n=i(t,e);if(null===n)return console.log("Could not get context for WebGL version",t),null;s[t]=n}const n=s[t];return null==n||n.isContextLost()?(delete s[t],u(t)):(n.disable(n.DEPTH_TEST),n.disable(n.STENCIL_TEST),n.disable(n.BLEND),n.disable(n.DITHER),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SAMPLE_COVERAGE),n.enable(n.SCISSOR_TEST),n.enable(n.CULL_FACE),n.cullFace(n.BACK),s[t])}function l(t){if((0,a._K2)().getBool("IS_SAFARI")||"undefined"===typeof OffscreenCanvas||2!==t){if("undefined"!==typeof document)return document.createElement("canvas");throw new Error("Cannot create a canvas in this context")}return new OffscreenCanvas(300,150)}function i(t,e){if(1!==t&&2!==t)throw new Error("Cannot get WebGL rendering context, WebGL is disabled.");const n=null==e?l(t):e;return n.addEventListener("webglcontextlost",(e=>{e.preventDefault(),delete s[t]}),!1),(0,a._K2)().getBool("SOFTWARE_WEBGL_ENABLED")&&(o.failIfMajorPerformanceCaveat=!1),1===t?n.getContext("webgl",o)||n.getContext("experimental-webgl",o):n.getContext("webgl2",o)}},80273:function(t,e,n){n.d(e,{T:function(){return a}});
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
 */
class a{constructor(t){this.variableNames=["A"],this.customUniforms=[{name:"minVal",type:"float"},{name:"maxVal",type:"float"}],this.outputShape=t,this.userCode="\n\n      void main() {\n        float value = getAAtOutCoords();\n        if (isnan(value)) {\n          setOutput(value);\n          return;\n        }\n\n        setOutput(clamp(value, minVal, maxVal));\n      }\n    "}}},9662:function(t,e,n){n.d(e,{$:function(){return a}});
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
class a{constructor(t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"minVal",type:"float"},{name:"maxVal",type:"float"}],this.outputShape=t,this.userCode="\n      void main() {\n        vec4 value = getAAtOutCoords();\n\n        if (any(isnan(value))) {\n          setOutput(value);\n          return;\n        }\n\n        setOutput(clamp(value, vec4(minVal), vec4(maxVal)));\n      }\n    "}}},67282:function(t,e,n){n.d(e,{t:function(){return a}});
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
class a{constructor(t){this.variableNames=["real","imag"],this.outputShape=t,this.userCode="\n      void main() {\n        float re = abs(getRealAtOutCoords());\n        float im = abs(getImagAtOutCoords());\n        float mx = max(re, im);\n\n        // sadly the length function in glsl is not underflow-safe\n        // (at least not on Intel GPUs). So the safe solution is\n        // to ensure underflow-safety in all cases.\n        setOutput(\n          mx == 0.0 ? 0.0 : mx * length(vec2(1, min(re, im)/mx))\n        );\n      }\n    "}}}}]);
//# sourceMappingURL=chunk-vendors-61a264e2.bd31ef04.js.map