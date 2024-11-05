"use strict";(self["webpackChunkbenefit"]=self["webpackChunkbenefit"]||[]).push([[4486],{27906:function(e,E,_){_.d(E,{w:function(){return t}});
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
class t{constructor(e,E){this.outputShape=[],this.customUniforms=[{name:"value",type:"float"}],this.variableNames=["x"],this.outputShape=e,this.userCode="\n      void main() {\n        // Input can be obtained from uniform value.\n        setOutput(value);\n      }\n    "}}},86541:function(e,E,_){var t=_(9495),r=_(88380);
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
const g=(0,t._K2)();g.registerFlag("HAS_WEBGL",(()=>g.getNumber("WEBGL_VERSION")>0)),g.registerFlag("WEBGL_VERSION",(()=>(0,r.Zj)(2)?2:(0,r.Zj)(1)?1:0)),g.registerFlag("WEBGL_CHECK_NUMERICAL_PROBLEMS",(()=>!1)),g.registerFlag("WEBGL_BUFFER_SUPPORTED",(()=>2===g.get("WEBGL_VERSION"))),g.registerFlag("WEBGL_CPU_FORWARD",(()=>!0)),g.registerFlag("WEBGL_FORCE_F16_TEXTURES",(()=>!1)),g.registerFlag("WEBGL_PACK",(()=>g.getBool("HAS_WEBGL"))),g.registerFlag("WEBGL_PACK_NORMALIZATION",(()=>g.getBool("WEBGL_PACK"))),g.registerFlag("WEBGL_PACK_CLIP",(()=>g.getBool("WEBGL_PACK"))),g.registerFlag("WEBGL_PACK_DEPTHWISECONV",(()=>g.getBool("WEBGL_PACK"))),g.registerFlag("WEBGL_PACK_BINARY_OPERATIONS",(()=>g.getBool("WEBGL_PACK"))),g.registerFlag("WEBGL_PACK_UNARY_OPERATIONS",(()=>g.getBool("WEBGL_PACK"))),g.registerFlag("WEBGL_PACK_ARRAY_OPERATIONS",(()=>g.getBool("WEBGL_PACK"))),g.registerFlag("WEBGL_PACK_IMAGE_OPERATIONS",(()=>g.getBool("WEBGL_PACK"))),g.registerFlag("WEBGL_PACK_REDUCE",(()=>g.getBool("WEBGL_PACK"))),g.registerFlag("WEBGL_LAZILY_UNPACK",(()=>g.getBool("WEBGL_PACK"))),g.registerFlag("WEBGL_CONV_IM2COL",(()=>g.getBool("WEBGL_PACK"))),g.registerFlag("WEBGL_PACK_CONV2DTRANSPOSE",(()=>g.getBool("WEBGL_PACK"))),g.registerFlag("WEBGL_MAX_TEXTURE_SIZE",(()=>(0,r.Se)(g.getNumber("WEBGL_VERSION")))),g.registerFlag("WEBGL_MAX_TEXTURES_IN_SHADER",(()=>(0,r.jL)(g.getNumber("WEBGL_VERSION")))),g.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION",(()=>{const e=g.getNumber("WEBGL_VERSION");return 0===e?0:(0,r.VJ)(e)})),g.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE",(()=>g.getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0&&!t.eMq.isMobile())),g.registerFlag("WEBGL_RENDER_FLOAT32_CAPABLE",(()=>(0,r.I2)(g.getNumber("WEBGL_VERSION")))),g.registerFlag("WEBGL_RENDER_FLOAT32_ENABLED",(()=>!g.getBool("WEBGL_FORCE_F16_TEXTURES")&&g.getBool("WEBGL_RENDER_FLOAT32_CAPABLE"))),g.registerFlag("WEBGL_DOWNLOAD_FLOAT_ENABLED",(()=>(0,r.N6)(g.getNumber("WEBGL_VERSION")))),g.registerFlag("WEBGL_FENCE_API_ENABLED",(()=>(0,r.Ut)(g.getNumber("WEBGL_VERSION")))),g.registerFlag("WEBGL_SIZE_UPLOAD_UNIFORM",(()=>{const e=g.getBool("WEBGL_RENDER_FLOAT32_ENABLED");return e?4:0})),g.registerFlag("WEBGL_DELETE_TEXTURE_THRESHOLD",(()=>-1),(e=>{if("number"!==typeof e)throw new Error(`WEBGL_DELETE_TEXTURE_THRESHOLD must be a number but got ${e}.`);if(e<0&&-1!==e)throw new Error(`WEBGL_DELETE_TEXTURE_THRESHOLD must be -1 (indicating never delete) or at least 0, but got ${e}.`)})),g.registerFlag("WEBGL_FLUSH_THRESHOLD",(()=>t.eMq.isMobile()?1:-1),(e=>{if("number"!==typeof e)throw new Error(`WEBGL_FLUSH_THRESHOLD must be a number but got ${e}.`);if(e<0&&-1!==e)throw new Error(`WEBGL_FLUSH_THRESHOLD must be -1 (indicating never manual flush) or at least 0, but got ${e}.`)})),g.registerFlag("CPU_HANDOFF_SIZE_THRESHOLD",(()=>128)),g.registerFlag("WEBGL_USE_SHAPES_UNIFORMS",(()=>!1)),g.registerFlag("TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD",(()=>1e5)),g.registerFlag("TOPK_K_CPU_HANDOFF_THRESHOLD",(()=>128)),g.registerFlag("WEBGL_EXP_CONV",(()=>!1)),g.registerFlag("SOFTWARE_WEBGL_ENABLED",(()=>g.getBool("IS_TEST"))),g.registerFlag("WEBGL_MAX_SIZE_FOR_NARROW_TEXTURE",(()=>1/0)),g.registerFlag("WEBGL_AUTO_SQUARIFY_NARROW_TEXTURE_SHAPE",(()=>!1)),g.registerFlag("WEBGL2_ISNAN_CUSTOM",(()=>!1)),g.registerFlag("ENGINE_COMPILE_ONLY",(()=>!1))},54057:function(e,E,_){_.d(E,{T:function(){return t}});
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
class t{constructor(e){this.variableNames=["Image"],this.outputShape=[];const E=e[2];this.outputShape=e,this.userCode=`\n        void main() {\n          ivec4 coords = getOutputCoords();\n          int x = coords[2];\n\n          int coordX = ${E} - x - 1;\n          float outputValue;\n          if(coordX >= 0 && coordX < ${E}) {\n            outputValue = getImage(coords[0], coords[1], coordX, coords[3]);\n          } else {\n            outputValue = getImage(coords[0], coords[1], coords[2], coords[3]);\n          }\n          setOutput(outputValue);\n        }\n    `}}}}]);
//# sourceMappingURL=chunk-vendors-9869e27c.4d0015bf.js.map