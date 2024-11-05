"use strict";(self["webpackChunkbenefit"]=self["webpackChunkbenefit"]||[]).push([[7662],{18892:function(n,t,e){e.d(t,{BF:function(){return v.BF},Dk:function(){return A.Dk},Dw:function(){return Y.D},GE:function(){return I.G},GG:function(){return m.G},GK:function(){return W.G},HS:function(){return H.HS},He:function(){return L.He},Ku:function(){return D.K},Nk:function(){return u.N},SP:function(){return X.S},WR:function(){return S.WR},XI:function(){return u.X},YG:function(){return i.YG},Zy:function(){return z.Zy},_B:function(){return C._B},_X:function(){return J._},_f:function(){return B._},_m:function(){return j._},bu:function(){return F.b},cl:function(){return b.cl},ct:function(){return c.ct},cu:function(){return y.cu},dH:function(){return r.dH},dl:function(){return N.dl},eW:function(){return K.e},f6:function(){return a.f6},hE:function(){return k.hE},hH:function(){return s.h},jC:function(){return Z.j},l3:function(){return q.l},lg:function(){return T.lg},mx:function(){return o.mx},px:function(){return x.px},qB:function(){return g.q},qy:function(){return w.q},rq:function(){return h.rq},sG:function(){return d.sG},uM:function(){return l.uM},ub:function(){return G.u},vS:function(){return p.vS},wz:function(){return O.w},x6:function(){return U.x6},xT:function(){return P.x},yH:function(){return _.y},yr:function(){return M.f},z3:function(){return f.z3},z9:function(){return R.z},zv:function(){return E.zv}});var r=e(62680),o=e(95315),u=e(86995),a=e(94890),c=e(13713),i=e(14759),s=e(97763),f=e(99292),d=e(66423),l=e(26789),p=e(85526),g=e(57100),m=e(43842),h=e(14346),T=e(86768),S=e(45207),y=e(3087),I=e(64190),x=e(1802),Z=e(3759),L=e(66114),k=e(48580),v=e(65646),A=e(37962),b=e(97113),C=e(51675),G=e(15844),B=e(47620),D=e(80814),w=e(52610),z=e(4092),F=e(19095),E=e(64904),H=e(87906),_=e(5744),q=e(95587),R=e(55589),U=e(63252),j=e(17985),K=e(67686),W=e(73514),X=e(32948),M=e(45535),N=e(18566),Y=e(21671),P=e(53475),J=e(13396),O=e(2750)},8195:function(n,t,e){e.d(t,{Z:function(){return o}});var r=e(9495);
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
 */function o(n){return(t,e,o,u,a)=>{const c=r.C0T.assertAndGetBroadcastShape(t,e),i=c.length,s=r.ZSL.computeStrides(c),f=r.ZSL.sizeFromShape(c),d=r.ZSL.getTypedArrayFromDType(a,f),l=t.length,p=e.length,g=r.ZSL.computeStrides(t),m=r.ZSL.computeStrides(e),h=r.C0T.getBroadcastDims(t,c),T=r.C0T.getBroadcastDims(e,c);if(h.length+T.length===0)for(let r=0;r<d.length;++r)d[r]=n(o[r%o.length],u[r%u.length]);else for(let S=0;S<d.length;++S){const t=r.ZSL.indexToLoc(S,i,s),e=t.slice(-l);h.forEach((n=>e[n]=0));const a=r.ZSL.locToIndex(e,l,g),c=t.slice(-p);T.forEach((n=>c[n]=0));const f=r.ZSL.locToIndex(c,p,m);d[S]=n(o[a],u[f])}return[d,c]}}},98880:function(n,t,e){e.d(t,{B:function(){return i},j:function(){return c}});var r=e(9495),o=e(97870),u=e(13713),a=e(89436);
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
function c(n,t,e,c){return null==e?({inputs:e,backend:u})=>{const{a:a,b:i}=e,s=u;(0,o.C)([a,i],n);const f=s.data.get(a.dataId).values,d=s.data.get(i.dataId).values,l="string"===a.dtype?r.C0T.fromUint8ToStringArray(f):f,p="string"===a.dtype?r.C0T.fromUint8ToStringArray(d):d,g=c||a.dtype,[m,h]=t(a.shape,i.shape,l,p,g);return s.makeTensorInfo(h,g,m)}:({inputs:n,backend:r})=>{const{a:o,b:i}=n,s=r;if("complex64"===o.dtype||"complex64"===i.dtype){const n=(0,u.wg)({inputs:{x:o},backend:s,attrs:{dtype:"complex64"}}),t=s.data.get(n.dataId),r=t.complexTensorInfos.real,c=t.complexTensorInfos.imag,f=s.data.get(r.dataId).values,d=s.data.get(c.dataId).values,l=(0,u.wg)({inputs:{x:i},backend:s,attrs:{dtype:"complex64"}}),p=s.data.get(l.dataId),g=p.complexTensorInfos.real,m=p.complexTensorInfos.imag,h=s.data.get(g.dataId).values,T=s.data.get(m.dataId).values,[S,y,I]=e(o.shape,i.shape,f,d,h,T),x=s.makeTensorInfo(I,"float32",S),Z=s.makeTensorInfo(I,"float32",y),L=(0,a.f)({inputs:{real:x,imag:Z},backend:s});return s.disposeIntermediateTensorInfo(n),s.disposeIntermediateTensorInfo(l),s.disposeIntermediateTensorInfo(x),s.disposeIntermediateTensorInfo(Z),L}{const n=s.data.get(o.dataId).values,e=s.data.get(i.dataId).values,r=c||o.dtype,[u,a]=t(o.shape,i.shape,n,e,r);return s.makeTensorInfo(a,r,u)}}}function i(n){return(t,e,o,u,a,c)=>{const i=r.C0T.assertAndGetBroadcastShape(t,e),s=r.ZSL.sizeFromShape(i),f=i.length,d=r.ZSL.computeStrides(i),l=r.ZSL.getTypedArrayFromDType("float32",s),p=r.ZSL.getTypedArrayFromDType("float32",s),g=r.C0T.getBroadcastDims(t,i),m=r.C0T.getBroadcastDims(e,i),h=r.C0T.mergeRealAndImagArrays(o,u),T=r.C0T.mergeRealAndImagArrays(a,c),S=t.length,y=r.ZSL.computeStrides(t),I=e.length,x=r.ZSL.computeStrides(e);if(g.length+m.length===0)for(let r=0;r<l.length;r++){const t=r%h.length,e=r%T.length,o=n(h[2*t],h[2*t+1],T[2*e],T[2*e+1]);l[r]=o.real,p[r]=o.imag}else for(let Z=0;Z<l.length;Z++){const t=r.ZSL.indexToLoc(Z,f,d),e=t.slice(-S);g.forEach((n=>e[n]=0));const o=r.ZSL.locToIndex(e,S,y),u=t.slice(-I);m.forEach((n=>u[n]=0));const a=r.ZSL.locToIndex(u,I,x),c=n(h[2*o],h[2*o+1],T[2*a],T[2*a+1]);l[Z]=c.real,p[Z]=c.imag}return[l,p,i]}}},45705:function(n,t,e){e.d(t,{o:function(){return o}});var r=e(9495);
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
 */function o(n){return(t,e,o)=>{const u=r.ZSL.getArrayFromDType(e,t.length);for(let r=0;r<t.length;++r)u[r]=n(t[r],o);return u}}},21694:function(n,t,e){e.d(t,{F:function(){return c},v:function(){return a}});var r=e(9495),o=e(97870),u=e(45705);
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
function a(n,t,e){const r=(0,u.o)(t);return c(n,r,e)}function c(n,t,e){return({inputs:u,attrs:a,backend:c})=>{const{x:i}=u;(0,o.C)(i,n);const s=c,f=s.data.get(i.dataId).values;let d;if("string"===i.dtype){if(!Array.isArray(f))throw new Error("String tensor's value was not an instance of Array");d=r.C0T.fromUint8ToStringArray(f)}else d=f;const l=e||i.dtype,p=t(d,l,a);return s.makeTensorInfo(i.shape,l,p)}}},11317:function(n,t,e){e.d(t,{U:function(){return u}});var r=e(9495),o=e(89436);
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
function u(n,t,e="float32"){if("complex64"===e){const e=u(n,t,"float32"),r=u(n,t,"float32");return(0,o.f)({inputs:{real:e,imag:r},backend:n})}const a=r.ZSL.makeZerosTypedArray(r.ZSL.sizeFromShape(t),e);return n.makeTensorInfo(t,e,a)}}}]);
//# sourceMappingURL=chunk-vendors-3c39e9f5.3cdc5269.js.map