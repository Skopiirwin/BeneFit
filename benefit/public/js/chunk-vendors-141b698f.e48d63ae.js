"use strict";(self["webpackChunkbenefit"]=self["webpackChunkbenefit"]||[]).push([[3162],{66501:function(n,t,e){e.d(t,{F:function(){return o}});
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
class o{constructor(n,t,e,o,i){this.variableNames=["x"],this.outputShape=[];const s=t,a=n[3]-1;let r;this.outputShape=n;const u=`float(${e}) + float(${o}) * sum`;r=.5===i?`inversesqrt(${u})`:1===i?`1.0/(${u})`:`exp(log(${u}) * float(-${i}));`,this.userCode=`\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int r = coords[1];\n        int c = coords[2];\n        int d = coords[3];\n        float x = getX(b, r, c, d);\n        float sum = 0.0;\n        for (int j = -${s}; j <= ${s}; j++) {\n          int idx = d + j;\n          if (idx >= 0 && idx <=  ${a}) {\n            float z = getX(b, r, c, idx);\n            sum += z * z;\n          }\n        }\n        float val = x * ${r};\n        setOutput(val);\n      }\n    `}}},96146:function(n,t,e){e.d(t,{j:function(){return o}});
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
class o{constructor(n,t,e,o,i){this.variableNames=["inputImage","outputImage","dy"],this.outputShape=[],this.outputShape=n,this.depth=n[3],this.depthRadius=t,this.bias=e,this.alpha=o,this.beta=i,this.userCode=`\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int r = coords[1];\n        int c = coords[2];\n\n        float result = 0.0;\n        for (int d = 0; d < ${this.depth}; ++d) {\n          int depthBegin = int(max(0.0, float(d - ${t})));\n          int depthEnd = int(min(float(${this.depth}),\n              float(d + ${t} + 1)));\n\n          const int MIN_DEPTH_BEGIN = 0;\n          const int MAX_DEPTH_END = ${this.depth};\n\n          float norm = 0.0;\n          for (int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k) {\n            if (k < depthBegin){\n              continue;\n            }\n            else if (k >= depthBegin && k < depthEnd) {\n              norm += getInputImage(b, r, c, k) * getInputImage(b, r, c, k);\n            }\n            else {\n              break;\n            }\n          }\n\n          norm = float(${o}) * norm + float(${e});\n\n          for(int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k){\n            if (k < depthBegin){\n              continue;\n            }\n            else if (k >= depthBegin && k < depthEnd){\n              float dyi = -2.0 * float(${o})\n                * float(${i})\n                * getInputImage(b, r, c, k) * getOutputImage(b, r, c, d)\n                / norm;\n              if (k == d) {\n                dyi += pow(norm, -1.0 * ${i});\n              }\n              if (k == coords[3]) {\n                dyi *= getDy(b, r, c, d);\n                result += dyi;\n              }\n            }\n            else {\n              break;\n            }\n          }\n      }\n      setOutput(result);\n      }\n    `}}},19314:function(n,t,e){e.d(t,{f:function(){return o}});
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
class o{constructor(n,t,e,o,i){this.variableNames=["x"],this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0;const s=t,a=n[3]-1;let r;this.outputShape=n;const u=`float(${e}) + float(${o}) * sum`;r=.5===i?`inversesqrt(${u})`:1===i?`1.0/(${u})`:`exp(log(${u}) * float(-${i}));`,this.userCode=`\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords.x;\n        int r = coords.y;\n        int c = coords.z;\n        int d = coords.w;\n\n        bool hasNextCol = d < ${this.outputShape[3]};\n        bool hasNextRow = c < ${this.outputShape[2]};\n\n        vec4 sum = vec4(0.);\n        vec4 xFragAtOutputCoords = getX(b, r, c, d);\n\n        vec4 xAtOutputCoords = vec4(\n          getChannel(xFragAtOutputCoords, vec2(c, d)),\n          hasNextCol ?\n            getChannel(xFragAtOutputCoords, vec2(c, d + 1)) : 0.0,\n          hasNextRow ?\n            getChannel(xFragAtOutputCoords , vec2(c + 1, d)) : 0.0,\n          (hasNextRow && hasNextCol) ?\n            getChannel(xFragAtOutputCoords, vec2(c + 1, d + 1)) : 0.0\n        );\n\n        int firstChannel = d - ${s};\n        vec2 cache = vec2(0.);\n        if(firstChannel >= 0){\n          vec4 firstChannelFrag = getX(b, r, c, firstChannel);\n          cache.x = getChannel(firstChannelFrag, vec2(c, firstChannel));\n            if(hasNextRow){\n              cache.y = getChannel(firstChannelFrag, vec2(c + 1, firstChannel));\n            }\n        }\n\n        ivec2 depth = ivec2(d, d + 1);\n        for (int j = - ${s}; j <= ${s}; j++) {\n          ivec2 idx = depth + j;\n          bvec2 aboveLowerBound = greaterThanEqual(idx, ivec2(0));\n          bvec2 belowUpperBound = lessThanEqual(idx, ivec2(${a}));\n\n          bool depthInRange = aboveLowerBound.x && belowUpperBound.x;\n          bool depthPlusOneInRange = aboveLowerBound.y && belowUpperBound.y;\n\n          if(depthInRange || depthPlusOneInRange){\n            vec4 z = vec4(0.);\n            vec4 xFragAtCurrentDepth;\n            z.xz = cache.xy;\n            if(depthPlusOneInRange && hasNextCol){\n              xFragAtCurrentDepth = idx.y != d ?\n                getX(b, r, c, idx.y) : xFragAtOutputCoords;\n              z.y = getChannel(xFragAtCurrentDepth, vec2(c, idx.y));\n              if(hasNextRow){\n                z.w = getChannel(xFragAtCurrentDepth, vec2(c + 1, idx.y));\n              }\n            }\n            cache.xy = z.yw;\n            sum += z * z;\n          }\n        }\n        vec4 result = xAtOutputCoords * ${r};\n        setOutput(result);\n      }\n    `}}},81017:function(n,t,e){e.d(t,{Y:function(){return i},d:function(){return o}});
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
class o{constructor(n){this.variableNames=["dy","maxPos"],this.outputShape=n.inShape;const t=n.strideHeight,e=n.strideWidth,o=n.dilationHeight,i=n.effectiveFilterHeight,s=n.effectiveFilterWidth,a=i-1-n.padInfo.top,r=s-1-n.padInfo.left,u=i*s-1;this.userCode=`\n      const ivec2 pads = ivec2(${a}, ${r});\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n\n        ivec2 dyRCCorner = coords.yz - pads;\n        int dyRCorner = dyRCCorner.x;\n        int dyCCorner = dyRCCorner.y;\n\n        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        for (int wR = 0; wR < ${i};\n          wR += ${o}) {\n          float dyR = float(dyRCorner + wR) / ${t}.0;\n\n          if (dyR < 0.0 || dyR >= ${n.outHeight}.0 || fract(dyR) > 0.0) {\n            continue;\n          }\n          int idyR = int(dyR);\n\n          for (int wC = 0; wC < ${s}; wC++) {\n            float dyC = float(dyCCorner + wC) / ${e}.0;\n\n            if (dyC < 0.0 || dyC >= ${n.outWidth}.0 ||\n                fract(dyC) > 0.0) {\n              continue;\n            }\n            int idyC = int(dyC);\n\n            float dyValue = getDy(b, idyR, idyC, d);\n            int maxPosValue = ${u} - int(getMaxPos(b, idyR, idyC, d));\n\n            // Get the current value, check it against the value from the\n            // position matrix.\n            int curPosValue = wR * ${s} + wC;\n            float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);\n\n            dotProd += dyValue * mask;\n          }\n        }\n        setOutput(dotProd);\n      }\n    `}}class i{constructor(n){this.variableNames=["dy","maxPos"],this.outputShape=n.inShape;const t=n.strideDepth,e=n.strideHeight,o=n.strideWidth,i=n.dilationDepth,s=n.dilationHeight,a=n.dilationWidth,r=n.effectiveFilterDepth,u=n.effectiveFilterHeight,c=n.effectiveFilterWidth,d=r-1-n.padInfo.front,l=u-1-n.padInfo.top,h=c-1-n.padInfo.left,f=r*u*c-1;this.userCode=`\n      const ivec3 pads = ivec3(${d}, ${l}, ${h});\n\n      void main() {\n        ivec5 coords = getOutputCoords();\n        int batch = coords.x;\n        int ch = coords.u;\n\n        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;\n        int dyDCorner = dyCorner.x;\n        int dyRCorner = dyCorner.y;\n        int dyCCorner = dyCorner.z;\n\n        // Convolve dy(?, ?, ?, ch) with pos mask(:, :, :, d) to get\n        // dx(xD, xR, xC, ch).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n\n        for (int wD = 0; wD < ${r};\n           wD += ${i}) {\n          float dyD = float(dyDCorner + wD) / ${t}.0;\n\n          if (dyD < 0.0 || dyD >= ${n.outDepth}.0 || fract(dyD) > 0.0) {\n            continue;\n          }\n          int idyD = int(dyD);\n\n          for (int wR = 0; wR < ${u};\n              wR += ${s}) {\n            float dyR = float(dyRCorner + wR) / ${e}.0;\n\n            if (dyR < 0.0 || dyR >= ${n.outHeight}.0 ||\n                fract(dyR) > 0.0) {\n              continue;\n            }\n            int idyR = int(dyR);\n\n            for (int wC = 0; wC < ${c};\n                wC += ${a}) {\n              float dyC = float(dyCCorner + wC) / ${o}.0;\n\n              if (dyC < 0.0 || dyC >= ${n.outWidth}.0 ||\n                  fract(dyC) > 0.0) {\n                continue;\n              }\n              int idyC = int(dyC);\n\n              float dyValue = getDy(batch, idyD, idyR, idyC, ch);\n              int maxPosValue = ${f} -\n                  int(getMaxPos(batch, idyD, idyR, idyC, ch));\n\n              // Get the current value, check it against the value from the\n              // position matrix.\n              int curPosValue =\n                  wD * ${u} * ${c} +\n                  wR * ${c} + wC;\n              float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);\n\n              dotProd += dyValue * mask;\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    `}}},89486:function(n,t,e){e.d(t,{C:function(){return i}});var o=e(9495);
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
 */class i{constructor(n,t){this.variableNames=["x"];const{windowSize:e,batchSize:i,inSize:s,outSize:a}=n;this.outputShape=[i,a];const r=4*Math.floor(e/4),u=e%4;let c="sumValue += dot(values, ones);";if(null!=t){const n=1/t;c=`sumValue += dot(values * ${o.ZSL.isInt(n)?n.toPrecision(2):n}, ones);`}let d="";s%e>0&&(d=`\n        if (inIdx < 0 || inIdx >= ${s}) {\n          return 0.0;\n        }\n      `),this.userCode=`\n      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);\n\n      float getValue(int batch, int inIdx) {\n        ${d}\n        return getX(batch, inIdx);\n      }\n\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int batch = coords[0];\n        int outIdx = coords[1];\n        int inOffset = outIdx * ${e};\n\n        float sumValue = 0.0;\n\n        for (int i = 0; i < ${r}; i += 4) {\n          int inIdx = inOffset + i;\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2),\n            getValue(batch, inIdx + 3)\n          );\n\n          ${c}\n        }\n\n        int inIdx = inOffset + ${r};\n        if (${1===u}) {\n          vec4 values = vec4(getValue(batch, inIdx), 0.0, 0.0, 0.0);\n\n          ${c}\n        } else if (${2===u}) {\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1), 0.0, 0.0);\n\n          ${c}\n        } else if (${3===u}) {\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2), 0.0);\n\n          ${c}\n        }\n        setOutput(sumValue);\n      }\n    `}}},51554:function(n,t,e){e.d(t,{X:function(){return i}});var o=e(27575);
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
 */class i{constructor(n,t,e){this.variableNames=["x"],this.outputShape=t.map(((t,e)=>t[0]+n[e]+t[1]));const i=n.length,s=(0,o.bf)(i),a=t.map((n=>n[0])).join(","),r=t.map(((t,e)=>t[0]+n[e])).join(","),u=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,i),c="reflect"===e?0:1;this.userCode=1!==i?`\n      ${s} start = ${s}(${a});\n      ${s} end = ${s}(${r});\n\n      void main() {\n        ${s} outC = getOutputCoords();\n        for (int i = 0; i < ${i}; i++) {\n          if (outC[i] < start[i]) {\n            outC[i] = start[i] * 2 - outC[i] - ${c};\n          } else if(outC[i] >= end[i]) {\n            outC[i] = (end[i] - 1) * 2 - outC[i] + ${c};\n          }\n        }\n        ${s} coords = outC - start;\n        setOutput(getX(${u}));\n      }\n    `:`\n        int start = ${a};\n        int end = ${r};\n\n        void main() {\n          int outC = getOutputCoords();\n          if (outC < start) {\n            outC = start * 2 - outC - ${c};\n          } else if(outC >= end) {\n            outC = (end - 1) * 2 - outC + ${c};\n          }\n          setOutput(getX(outC - start));\n        }\n      `}}},2171:function(n,t,e){e.d(t,{V:function(){return s}});var o=e(75694),i=e(27575);
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
class s{constructor(n,t,e){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t.map(((t,e)=>t[0]+n[e]+t[1]));const s=n.length,a=(0,i.bf)(s),r=t.map((n=>n[0])).join(","),u=t.map(((t,e)=>t[0]+n[e])).join(","),c=(0,o.Jp)("rc",s),d=(0,o.Jp)("source",s),l=`${c[s-1]} < ${this.outputShape[s-1]}`,h=1===s?"source":`vec2(${d.slice(-2).join()})`,f="reflect"===e?0:1;let p="";if(1===s){const n=`\n        ${a} source = rc;\n        if (source < start) {\n          source = start * 2 - source - ${f};\n        } else if (source >= end) {\n          source = (end - 1) * 2 - source + ${f};\n        }\n        source -= start;\n      `;p=`\n        ${a} rc = outputLoc;\n        ${n}\n        result[0] = getChannel(getX(${d.join()}), ${h});\n        ${c[s-1]} += 1;\n        if(${l}) {\n          ${n}\n          result[1] = getChannel(getX(${d.join()}), ${h});\n        }\n      `}else{const n=`\n        ${a} source = rc;\n        ${a} lt = ${a}(lessThan(source, start));\n        ${a} gte = ${a}(greaterThanEqual(source, end));\n        ${a} orig = 1 - (lt + gte);\n        source = orig * source +\n                lt * (start * 2 - source - ${f}) +\n                gte * ((end - 1) * 2 - source + ${f});\n        source -= start;\n      `;p=`\n        ${a} rc = outputLoc;\n        ${n}\n        result[0] = getChannel(getX(${d.join()}), ${h});\n        ${c[s-1]} += 1;\n        if(${l}) {\n          ${n}\n          result[1] = getChannel(getX(${d.join()}), ${h});\n        }\n        rc = outputLoc;\n        ${c[s-2]} += 1;\n        if(${c[s-2]} < ${this.outputShape[s-2]}) {\n          ${n}\n          result[2] = getChannel(getX(${d.join()}), ${h});\n          ${c[s-1]} += 1;\n          if(${l}) {\n            ${n}\n            result[3] = getChannel(getX(${d.join()}), ${h});\n          }\n        }\n      `}this.userCode=`\n      const ${a} start = ${a}(${r});\n      const ${a} end = ${a}(${u});\n\n      void main() {\n        ${a} outputLoc = getOutputCoords();\n        vec4 result = vec4(0.);\n        ${p}\n        setOutput(result);\n      }\n    `}}},63288:function(n,t,e){e.d(t,{P:function(){return i}});var o=e(22792);
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
 */class i{constructor(n,t,e,i=!1,s=!1,a=!1,r=null,u=!1,c=!1){this.variableNames=["matrixA","matrixB"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.enableShapeUniforms=(0,o.ik)(this.outputShape.length);const d=i?n[1]:n[2],l=Math.ceil(d/2),h=i?"i * 2, rc.y":"rc.y, i * 2",f=s?"rc.z, i * 2":"i * 2, rc.z",p=i?["a.xxyy","a.zzww"]:["a.xxzz","a.yyww"],$=s?["b.xzxz","b.ywyw"]:["b.xyxy","b.zwzw"];let C="",v="";r&&(C=u?`vec4 activation(vec4 a) {\n          vec4 b = getPreluActivationWeightsAtOutCoords();\n          ${r}\n        }`:c?`vec4 activation(vec4 a) {\n          vec4 b = getLeakyreluAlphaAtOutCoords();\n          ${r}\n        }`:`vec4 activation(vec4 x) {\n          ${r}\n        }`,v="result = activation(result);");const g=a?"result += getBiasAtOutCoords();":"";a&&this.variableNames.push("bias"),u&&this.variableNames.push("preluActivationWeights"),c&&this.variableNames.push("leakyreluAlpha");let x="rc.x",y="rc.x";n[0]<t[0]?x=`imod(rc.x, ${n[0]})`:t[0]<n[0]&&(y=`imod(rc.x, ${t[0]})`),this.userCode=`\n      ${C}\n      // Don't use uniform for sharedDimensionPacked for performance.\n      const float sharedDimension = ${l}.0;\n\n      vec4 dot2x2ARowBCol(ivec3 rc) {\n        vec4 result = vec4(0);\n        int batchA = ${x};\n        int batchB = ${y};\n        for (int i = 0; i < ${l}; i++) {\n          vec4 a = getMatrixA(batchA, ${h});\n          vec4 b = getMatrixB(batchB, ${f});\n\n          // These swizzled products need to be separately added.\n          // See: https://github.com/tensorflow/tfjs/issues/1735\n          result += (${p[0]} * ${$[0]});\n          result += (${p[1]} * ${$[1]});\n        }\n        return result;\n      }\n\n      void main() {\n        ivec3 rc = getOutputCoords();\n        vec4 result = dot2x2ARowBCol(rc);\n\n        ${g}\n\n        ${v}\n\n        setOutput(result);\n      }\n    `}}},26608:function(n,t,e){e.d(t,{O:function(){return o}});
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
class o{constructor(n,t,e){this.variableNames=["probs"],this.customUniforms=[{name:"seed",type:"float"}],this.outputShape=[n,e],this.userCode=`\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int batch = coords[0];\n\n        float r = random(seed);\n        float cdf = 0.0;\n\n        for (int i = 0; i < ${t-1}; i++) {\n          cdf += getProbs(batch, i);\n\n          if (r < cdf) {\n            setOutput(float(i));\n            return;\n          }\n        }\n\n        // If no other event happened, last event happened.\n        setOutput(float(${t-1}));\n      }\n    `}}},94804:function(n,t,e){e.d(t,{M:function(){return o}});
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
class o{constructor(n,t,e,o){this.variableNames=["indices"],this.outputShape=[n,t],this.userCode=`\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int index = round(getIndices(coords.x));\n        setOutput(mix(float(${o}), float(${e}),\n                      float(index == coords.y)));\n      }\n    `}}}}]);
//# sourceMappingURL=chunk-vendors-141b698f.e48d63ae.js.map