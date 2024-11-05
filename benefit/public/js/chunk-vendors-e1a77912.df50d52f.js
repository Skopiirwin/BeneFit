"use strict";(self["webpackChunkbenefit"]=self["webpackChunkbenefit"]||[]).push([[890],{54499:function(t,n,e){e.d(n,{K:function(){return r}});var o=e(18765),i=e(22792),s=e(92394),a=e(28560);
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
class r{constructor(t){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outPackingScheme=a.BB.DENSE,this.customUniforms=[{name:"texShape",type:"ivec2"}];const n=(0,o.B)();this.outputShape=t,this.enableShapeUniforms=(0,i.ik)(this.outputShape.length),this.userCode=`\n      ivec3 outCoordsFromFlatIndex(int index) {\n        ${this.enableShapeUniforms?s.WA(["r","c","d"],t):s.UG(["r","c","d"],t)}\n        return ivec3(r, c, d);\n      }\n\n      void main() {\n        ivec2 resTexRC = ivec2(resultUV.yx * vec2(texShape[0], texShape[1]));\n        int index = 4 * (resTexRC.x * texShape[1] + resTexRC.y);\n\n        vec4 result = vec4(0.);\n\n        for (int i=0; i<4; i++) {\n          int flatIndex = index + i;\n          ivec3 rc = outCoordsFromFlatIndex(flatIndex);\n          result[i] = getA(rc.x, rc.y, rc.z);\n        }\n\n        ${n.output} = result;\n      }\n    `}}},78576:function(t,n,e){e.d(n,{S:function(){return r}});var o=e(18765),i=e(22792),s=e(92394),a=e(28560);
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
class r{constructor(t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outPackingScheme=a.BB.DENSE,this.customUniforms=[{name:"texShape",type:"ivec2"}];const n=(0,o.B)();this.outputShape=t,this.enableShapeUniforms=(0,i.ik)(this.outputShape.length),this.userCode=`\n      ivec3 outCoordsFromFlatIndex(int index) {\n        ${this.enableShapeUniforms?s.WA(["r","c","d"],t):s.UG(["r","c","d"],t)}\n        return ivec3(r, c, d);\n      }\n\n      void main() {\n        ivec2 resTexRC = ivec2(resultUV.yx * vec2(texShape[0], texShape[1]));\n        int index = 4 * (resTexRC.x * texShape[1] + resTexRC.y);\n\n        vec4 result = vec4(0.);\n\n        for (int i=0; i<4; i++) {\n          int flatIndex = index + i;\n          ivec3 rc = outCoordsFromFlatIndex(flatIndex);\n          result[i] = getChannel(getA(rc.x, rc.y, rc.z), vec2(rc.y, rc.z));\n        }\n\n        ${n.output} = result;\n      }\n    `}}},34673:function(t,n,e){e.d(n,{x:function(){return o}});
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
class o{constructor(t,n,e){this.variableNames=["x"],this.outputShape=[],this.outputShape=t,this.blockSize=n,this.dataFormat=e,this.userCode=`\n    void main() {\n      ivec4 coords = getOutputCoords();\n      int b = coords[0];\n      int h = ${this.getHeightCoordString()};\n      int w = ${this.getWidthCoordString()};\n      int d = ${this.getDepthCoordString()};\n\n      int in_h = h / ${n};\n      int offset_h = imod(h, ${n});\n      int in_w = w / ${n};\n      int offset_w = imod(w, ${n});\n      int offset_d = (offset_h * ${n} + offset_w) *\n        ${this.getOutputDepthSize()};\n      int in_d = d + offset_d;\n\n      float result = ${this.getInputSamplingString()};\n      setOutput(result);\n    }\n  `}getHeightCoordString(){return"NHWC"===this.dataFormat?"coords[1]":"coords[2]"}getWidthCoordString(){return"NHWC"===this.dataFormat?"coords[2]":"coords[3]"}getDepthCoordString(){return"NHWC"===this.dataFormat?"coords[3]":"coords[1]"}getOutputDepthSize(){return"NHWC"===this.dataFormat?this.outputShape[3]:this.outputShape[1]}getInputSamplingString(){return"NHWC"===this.dataFormat?"getX(b, in_h, in_w, in_d)":"getX(b, in_d, in_h, in_w)"}}},32068:function(t,n,e){e.d(n,{e:function(){return o}});
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
class o{constructor(t){this.variableNames=["X"],this.outputShape=[t,t],this.userCode="\n      void main() {\n          ivec2 coords = getOutputCoords();\n          float val = coords[0] == coords[1] ? getX(coords[0]) : 0.0;\n          setOutput(val);\n      }\n    "}}},79229:function(t,n,e){e.d(n,{x:function(){return o}});
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
class o{constructor(t){this.variableNames=["x","W"],this.outputShape=t.outShape;const{inHeight:n,inWidth:e,padInfo:o,strideHeight:i,strideWidth:s,filterHeight:a,filterWidth:r,dilationHeight:u,dilationWidth:c}=t,{top:l,left:h}=o;this.userCode=`\n      const ivec2 strides = ivec2(${i}, ${s});\n      const ivec2 pads = ivec2(${l}, ${h});\n      const float neg_infinity = -3.4e38;\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords.x;\n        int d1 = coords.w;\n        ivec2 outTopLeftCorner =\n            coords.yz * strides - pads;\n        int hBeg = outTopLeftCorner.x;\n        int wBeg = outTopLeftCorner.y;\n\n        float curVal = neg_infinity;\n        for (int h = 0; h < ${a}; h++) {\n          int hIn = hBeg + h * ${u};\n\n          if (hIn >= 0 && hIn < ${n}) {\n            for (int w = 0; w < ${r}; w++) {\n              int wIn = wBeg + w * ${c};\n\n              if (wIn >= 0 && wIn < ${e}) {\n                float xVal = getX(batch, hIn, wIn, d1);\n                float wVal = getW(h, w, d1);\n\n                float val = xVal + wVal;\n                if (val > curVal) {\n                  curVal = val;\n                }\n              }\n            }\n          }\n        }\n\n        float result = curVal;\n        setOutput(result);\n      }\n    `}}},35368:function(t,n,e){e.d(n,{$:function(){return a}});var o=e(18765),i=e(92394),s=e(28560);
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
class a{constructor(t){this.variableNames=["A"],this.outTexUsage=s.tT.DOWNLOAD;const n=(0,o.B)();this.outputShape=t,this.userCode=`\n      ${i.G2}\n\n      void main() {\n        float x = getAAtOutCoords();\n        ${n.output} = encode_float(x);\n      }\n    `}}},8697:function(t,n,e){e.d(n,{N:function(){return a}});var o=e(18765),i=e(92394),s=e(28560);
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
class a{constructor(t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outTexUsage=s.tT.DOWNLOAD;const n=(0,o.B)();this.outputShape=t,this.userCode=`\n      ${i.G2}\n\n      void main() {\n        ivec3 coords = getOutputCoords();\n        float x = getChannel(getAAtOutCoords(), vec2(coords.y, coords.z));\n        ${n.output} = encode_float(x);\n      }\n    `}}},24187:function(t,n,e){e.d(n,{C:function(){return r}});var o=e(18765),i=e(22792),s=e(92394);
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
const a={R:0,G:1,B:2,A:3};class r{constructor(t,n=!1,e="RGBA"){this.variableNames=["A"],this.customUniforms=[{name:"texShape",type:"ivec2"}];const r=(0,o.B)();this.outputShape=t,this.enableShapeUniforms=(0,i.ik)(this.outputShape.length);let u="result";n&&(u="floor(result * 255. + 0.5)");let c="";for(let o=0;o<e.length;o++){const t=e[o];c+=`\n          if(offset == ${o}) {\n            result = values[${a[t]}];\n          }`}this.userCode=`\n      ${this.enableShapeUniforms?s.Od():s.fM(t)}\n\n      void main() {\n        ivec3 coords = getOutputCoords();\n        int flatIndex = getFlatIndex(coords);\n        float result = 0.;\n        int offset = imod(flatIndex, ${e.length});\n\n        flatIndex = idiv(flatIndex, ${e.length}, 1.);\n\n        int r = flatIndex / texShape[1];\n        if (r < texShape[0]) {\n          int c = imod(flatIndex, texShape[1]);\n          vec2 uv = (vec2(c, r) + halfCR) / vec2(texShape[1], texShape[0]);\n          vec4 values = ${r.texture2D}(A, uv);\n          ${c}\n        }\n        ${r.output} = vec4(${u}, 0., 0., 0.);\n      }\n    `}}},75320:function(t,n,e){e.d(n,{A:function(){return a}});var o=e(18765),i=e(22792),s=e(92394);
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
class a{constructor(t,n=!1){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.customUniforms=[{name:"texShape",type:"ivec2"}];const e=(0,o.B)();this.outputShape=t,this.enableShapeUniforms=(0,i.ik)(this.outputShape.length);let a="",r="result";n&&(r="floor(result * 255. + 0.5)");for(let o=0;o<=1;o++)for(let n=0;n<=1;n++){const i=2*o+n;a+=`\n          localCoords = coords;\n          if(localCoords[2] + ${n} < ${this.enableShapeUniforms?"outShape[2]":`${t[2]}`}) {\n          localCoords[2] += ${n};\n          if (localCoords[1] + ${o} < ${this.enableShapeUniforms?"outShape[1]":`${t[1]}`}) {\n            localCoords[1] += ${o};\n\n            flatIndex = getFlatIndex(localCoords);\n            offset = imod(flatIndex, 4);\n\n            flatIndex = idiv(flatIndex, 4, 1.);\n\n            int r = flatIndex / texShape[1];\n            int c = imod(flatIndex, texShape[1]);\n            vec2 uv = (vec2(c, r) + halfCR) / vec2(texShape[1], texShape[0]);\n            values = ${e.texture2D}(A, uv);\n\n            if (offset == 0) {\n              result[${i}] = values[0];\n            } else if (offset == 1) {\n              result[${i}] = values[1];\n            } else if (offset == 2) {\n              result[${i}] = values[2];\n            } else {\n              result[${i}] = values[3];\n            }\n          }\n        }\n        `}this.userCode=`\n        ${this.enableShapeUniforms?s.Od():s.fM(t)}\n\n        void main() {\n          ivec3 coords = getOutputCoords();\n\n          vec4 result = vec4(0.);\n          int flatIndex, r, c, offset;\n          ivec3 localCoords;\n          vec2 uv;\n          vec4 values;\n\n          ${a}\n\n          ${e.output} = ${r};\n        }\n    `}}},49873:function(t,n,e){e.d(n,{R:function(){return o}});
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
class o{constructor(t,n,e){this.variableNames=["real","imag"];const o=n[1];this.outputShape=n;const i=e?`2.0 * ${Math.PI}`:`-2.0 * ${Math.PI}`,s=e?`${o}.0`:"1.0";let a;if("real"===t)a="return real * expR - imag * expI;";else{if("imag"!==t)throw new Error(`FFT component must be either "real" or "imag", got ${t}.`);a="return real * expI + imag * expR;"}this.userCode=`\n      const float exponentMultiplier = ${i};\n\n      float unaryOpComplex(float real, float expR, float imag, float expI) {\n        ${a}\n      }\n\n      float mulMatDFT(int batch, int index) {\n        float indexRatio = float(index) / float(${o});\n        float exponentMultiplierTimesIndexRatio =\n            exponentMultiplier * indexRatio;\n\n        float result = 0.0;\n\n        for (int i = 0; i < ${o}; i++) {\n          // x = (-2|2 * PI / N) * index * i;\n          float x = exponentMultiplierTimesIndexRatio * float(i);\n          float expR = cos(x);\n          float expI = sin(x);\n          float real = getReal(batch, i);\n          float imag = getImag(batch, i);\n\n          result +=\n              unaryOpComplex(real, expR, imag, expI) / ${s};\n        }\n\n        return result;\n      }\n\n      void main() {\n        ivec2 coords = getOutputCoords();\n        setOutput(mulMatDFT(coords[0], coords[1]));\n      }\n    `}}}}]);
//# sourceMappingURL=chunk-vendors-e1a77912.df50d52f.js.map