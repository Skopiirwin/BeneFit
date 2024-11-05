"use strict";(self["webpackChunkbenefit"]=self["webpackChunkbenefit"]||[]).push([[8093],{73388:function(n,t,e){e.d(t,{f:function(){return s}});var r=e(9495),u=e(60287),o=e(62780),i=e(94043);
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
function a(n,t,e,o=null){let i=t.shape[0],c=t.shape[1];null!=o&&(i=o.shape[0],c=o.shape[1]);const s=r.C0T.computeOptimalWindowSize(c),p={windowSize:s,inSize:c,batchSize:i,outSize:Math.ceil(c/s)},f=new u.l(p,e,null==o),d=[t];null!=o&&d.push(o);const l=n.runWebGLProgram(f,d,"int32");if(1===l.shape[1])return l;const h=a(n,t,e,l);return n.disposeIntermediateTensorInfo(l),h}function c(n,t,e,u=null){const i=null!=u?u.shape:t.shape,a=i[i.length-1],s=r.C0T.computeOptimalWindowSize(a),p=new o.l(i,s,e,null==u),f=null==u?[t]:[t,u],d=n.runWebGLProgram(p,f,"int32");if(d.shape.length===t.shape.length){const r=c(n,t,e,d);return n.disposeIntermediateTensorInfo(d),r}return d}function s(n,t,e,u){const o=[e];if(r.C0T.assertAxesAreInnerMostDims("arg"+u.charAt(0).toUpperCase()+u.slice(1),o,t.shape.length),!(0,r._K2)().getBool("WEBGL_PACK_REDUCE")||t.shape.length<=2){const e=[],c=n.texData.get(t.dataId),s=null!==c&&c.isPacked;let p=t;s&&(p=n.unpackTensor(t),e.push(p));const[f,d]=r.C0T.computeOutAndReduceShapes(p.shape,o),l=r.ZSL.sizeFromShape(d),h=(0,i.t)({inputs:{x:p},backend:n,attrs:{shape:[-1,l]}});e.push(h);const m=a(n,h,u);e.push(m);const I=(0,i.t)({inputs:{x:m},backend:n,attrs:{shape:f}});return e.forEach((t=>n.disposeIntermediateTensorInfo(t))),I}return c(n,t,u)}},7199:function(n,t,e){e.d(t,{W:function(){return o}});var r=e(68173);
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
 */const u="return float(int(x));";function o(n,t){const e=new r.hE(n.shape,u),o=t.runWebGLProgram(e,[n],"int32");return{dataId:o.dataId,shape:o.shape,dtype:o.dtype}}},15411:function(n,t,e){e.d(t,{Zt:function(){return f},bE:function(){return h},j0:function(){return l},vi:function(){return d}});var r=e(9495),u=e(22897),o=e(46334),i=e(8993),a=e(66921),c=e(14899),s=e(68173),p=e(74890);
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
const f="if (isnan(x)) return x;";function d({opSnippet:n,packedOpSnippet:t,cpuKernelImpl:e,dtype:u}){return({inputs:o,backend:i})=>{const{x:a}=o,c=i,f=u||a.dtype;if(c.shouldExecuteOnCPU([a])&&null!=e){const n=c.texData.get(a.dataId),t=e(n.values,f);return c.makeTensorInfo(a.shape,f,t)}const d=(0,r._K2)().getBool("WEBGL_PACK_UNARY_OPERATIONS")&&null!=t;let l;return l=d?new p.rf(a.shape,t):new s.hE(a.shape,n),c.runWebGLProgram(l,[a],f)}}function l({opSnippet:n,packedOpSnippet:t,checkOutOfBounds:e=!1,supportsComplex:a=!1,cpuKernelImpl:c,dtype:s}){return({inputs:p,backend:f})=>{const{a:d,b:l}=p,h=f;if(a&&"complex64"===d.dtype){const t=h.texData.get(d.dataId),e=h.texData.get(l.dataId),[o,a]=[[t.complexTensorInfos.real,e.complexTensorInfos.real],[t.complexTensorInfos.imag,e.complexTensorInfos.imag]].map((t=>{const[e,o]=t,i={dataId:e.dataId,dtype:e.dtype,shape:d.shape},a={dataId:o.dataId,dtype:o.dtype,shape:l.shape},c=new u.x(n,d.shape,l.shape);return h.runWebGLProgram(c,[i,a],(0,r.TuY)(e.dtype,o.dtype))})),c=(0,i.f)({inputs:{real:o,imag:a},backend:h});return h.disposeIntermediateTensorInfo(o),h.disposeIntermediateTensorInfo(a),c}const m=s||(0,r.TuY)(d.dtype,l.dtype);if(("string"===d.dtype||"string"===l.dtype||h.shouldExecuteOnCPU([d,l]))&&null!=c){const n=h.texData.get(d.dataId).values,t=h.texData.get(l.dataId).values,e="string"===d.dtype?r.C0T.fromUint8ToStringArray(n):n,u="string"===d.dtype?r.C0T.fromUint8ToStringArray(t):t,[o,i]=c(d.shape,l.shape,e,u,m),a=h.makeTensorInfo(i,m),s=h.texData.get(a.dataId);return s.values=o,a}const I=(0,r._K2)().getBool("WEBGL_PACK_BINARY_OPERATIONS")&&null!=t;let S;return S=I?new o.VI(t,d.shape,l.shape,e):new u.x(n,d.shape,l.shape),h.runWebGLProgram(S,[d,l],m)}}function h(n,t=!1){if("linear"===n)return t?p._Q:s._Q;if("relu"===n)return t?p.X8:s.X8;if("elu"===n)return t?p.X0:s.X0;if("relu6"===n)return t?p.Nb:s.Nb;if("prelu"===n)return t?c.CN:c.DH;if("leakyrelu"===n)return t?a.aw:a.B1;if("sigmoid"===n)return t?p.Hq:s.Hq;throw new Error(`Activation ${n} has not been implemented for the WebGL backend.`)}},68754:function(n,t,e){e.d(t,{T:function(){return a}});var r=e(9495),u=e(89486),o=e(18541);
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
function i(n){const t=[];while(0===t.length||1!==t[t.length-1].outSize){const e=t.length?t[t.length-1].outSize:n[1],u=r.C0T.computeOptimalWindowSize(e);t.push({inSize:e,windowSize:u,outSize:Math.ceil(e/u)})}return t}function a(n,t,e,r){const a=i(n.shape);let c=n;for(let i=0;i<a.length;i++){const{inSize:s,windowSize:p,outSize:f}=a[i];let d,l;d="mean"===e?0===i?new u.C({windowSize:p,inSize:s,batchSize:n.shape[0],outSize:f},s):new u.C({windowSize:p,inSize:s,batchSize:n.shape[0],outSize:f}):new o.t({windowSize:p,inSize:s,batchSize:n.shape[0],outSize:f},e),l=c,c=r.runWebGLProgram(d,[c],t),l.dataId!==n.dataId&&r.disposeIntermediateTensorInfo(l)}return c}},99992:function(n,t,e){e.d(t,{p:function(){return o}});var r=e(1404),u=e(88380);
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
function o(n,t,e){const o=[(0,u.N0)(n.shape),...(0,u.Ph)(n.shape)],i={dtype:n.dtype,shape:o,dataId:n.dataId},a=[(0,u.N0)(t),...(0,u.Ph)(t)],c=new r.R(a,o),s=!0,p=[o],f=e.runWebGLProgram(c,[i],n.dtype,p,s);return{dataId:f.dataId,shape:t,dtype:f.dtype}}},76905:function(n,t,e){e.d(t,{$O:function(){return Z},AC:function(){return z},BC:function(){return L},BW:function(){return g},CJ:function(){return h},Dy:function(){return T},E$:function(){return d},G3:function(){return O},G4:function(){return _},Gs:function(){return u},J3:function(){return K},Kf:function(){return c},LF:function(){return R},M_:function(){return J},Md:function(){return s},Og:function(){return W},Oy:function(){return E},PA:function(){return a},PP:function(){return f},Q5:function(){return $},QM:function(){return I},S6:function(){return F},SF:function(){return l},Tm:function(){return S},UC:function(){return q},UF:function(){return m},Xe:function(){return P},ad:function(){return k},cy:function(){return X},dv:function(){return p},f8:function(){return D},fC:function(){return B},fW:function(){return Q},h:function(){return C},h0:function(){return i},jm:function(){return o},lL:function(){return Y},mo:function(){return y},rI:function(){return b},rQ:function(){return G},rw:function(){return x},sB:function(){return N},tc:function(){return A},uw:function(){return w},vo:function(){return U},we:function(){return v},xt:function(){return j},yZ:function(){return M},zN:function(){return H}});var r=e(18892);
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
 */const{mx:u,XI:o,Nk:i,f6:a,ct:c,YG:s,hH:p,z3:f,sG:d,uM:l,vS:h,qB:m,GG:I,rq:S,lg:g,WR:w,cu:y,GE:z,px:b,jC:x,He:T,hE:C,BF:P,Dk:G,cl:k,_B:W,ub:_,_f:E,Ku:O,qy:v,Zy:A,bu:B,zv:L,dH:D,HS:K,yH:N,l3:U,z9:H,x6:R,_m:M,eW:X,GK:q,SP:F,yr:Q,dl:Y,Dw:Z,xT:j,_X:$,wz:J}=r}}]);
//# sourceMappingURL=chunk-vendors-ceb9740b.32bf2593.js.map