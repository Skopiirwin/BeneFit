"use strict";(self["webpackChunkbenefit"]=self["webpackChunkbenefit"]||[]).push([[4802],{5744:function(t,e,r){r.d(e,{y:function(){return o}});var n=r(9495);
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
 */function o(t,e,r,o,s,a,i){const l=e[0],c=a[0],h=new Array(c),f=new Array(l),u=e[1];if(0===c){if(0!==l)throw new Error(n.C0T.getSparseFillEmptyRowsIndicesDenseShapeMismatch(l));const t=n.ZSL.getArrayFromDType(r,0),e=n.ZSL.getArrayFromDType(s,0);return[t,[0,u],e,h,f]}let g=!0,p=0;const d=new Array(c).fill(0);for(let S=0;S<l;++S){const e=t[S*u];if(e<0)throw new Error(n.C0T.getSparseFillEmptyRowsNegativeIndexErrorMessage(S,e));if(e>=c)throw new Error(n.C0T.getSparseFillEmptyRowsOutOfRangeIndexErrorMessage(S,e,c));++d[e],g=g&&e>=p,p=e}let w=!0;for(let n=0;n<c;++n){const t=0===d[n];h[n]=t,w=w&&!t,d[n]=Math.max(d[n],1),n>0&&(d[n]+=d[n-1])}if(w&&g){const e=t,r=o;for(let t=0;t<l;++t)f[t]=t;return[e,[l,u],r,h,f]}{const e=d[c-1],a=n.ZSL.getArrayFromDType(r,e*u),g=n.ZSL.getArrayFromDType(s,e),p=new Array(c).fill(0);for(let r=0;r<l;++r){const e=t[r*u],n=p[e],s=(0===e?0:d[e-1])+n;p[e]++;for(let o=0;o<u;++o)a[s*u+o]=t[r*u+o];g[s]=o[r],f[r]=s}for(let t=0;t<c;++t){const e=p[t];if(0===e){const e=0===t?0:d[t-1];a[e*u+0]=t;for(let t=1;t<u;++t)a[e*u+t]=0;g[e]=i}}return[a,[e,u],g,h,f]}}},95587:function(t,e,r){r.d(e,{l:function(){return o}});var n=r(9495);
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
 */function o(t,e,r,o,s){const a=n.ZSL.sizeFromShape(o),i=e[0],l=s.length,c=[];let h=1,f=-1;for(let S=0;S<l;++S){const t=s[S];if(-1===t){if(-1!==f)throw new Error(n.C0T.getSparseReshapeMultipleNegativeOneOutputDimErrorMessage(f,S));f=S,c.push(1)}else{if(t<0)throw new Error(n.C0T.getSparseReshapeNegativeOutputDimErrorMessage(S,t));h*=t,c.push(t)}}if(-1!==f){if(h<=0)throw new Error(n.C0T.getSparseReshapeEmptyTensorZeroOutputDimErrorMessage());const t=Math.trunc(a/h);if(h*t!==a)throw new Error(n.C0T.getSparseReshapeInputOutputMultipleErrorMessage(o,c));c[f]=t}const u=n.ZSL.sizeFromShape(c);if(u!==a)throw new Error(n.C0T.getSparseReshapeInputOutputMismatchErrorMessage(o,c));const g=o.length,p=[];if(g>0){p[g-1]=1;for(let t=g-2;t>=0;--t)p[t]=p[t+1]*o[t+1]}const d=[];if(l>0){d[l-1]=1;for(let t=l-2;t>=0;--t)d[t]=d[t+1]*c[t+1]}const w=n.ZSL.getArrayFromDType(r,i*l);for(let n=0;n<i;++n){let e=0;for(let r=0;r<g;++r)e+=t[n*g+r]*p[r];for(let t=0;t<l;++t)w[n*l+t]=Math.trunc(e/d[t]),e%=d[t]}return[w,[i,l],c]}},55589:function(t,e,r){r.d(e,{z:function(){return o}});var n=r(9495);
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
 */function o(t,e,r,o,s,a=!1,i=0){const l=o.length,c=[e[0],t.length/e[0]],h=c[1],f=l>0?s[l-1]+1:0,u=f;if(u<0)throw new Error(n.C0T.getSparseSegmentReductionNegativeSegmentIdsErrorMessage());const g=e.slice();g[0]=u;const p=g.reduce(((t,e)=>t*e),1),d=n.ZSL.getArrayFromDType(r,p);if(0===l)return u>0&&d.fill(i),[d,g];if(u<=0)throw new Error(n.C0T.getSparseSegmentReductionNegativeSegmentIdsErrorMessage());let w=0,S=1,m=0,y=s[w];while(1){let e=0;if(S<l){if(e=s[S],y===e){++S;continue}if(y>=e)throw new Error(n.C0T.getSparseSegmentReductionNonIncreasingSegmentIdsErrorMessage())}if(y<0||y>=u)throw new Error(n.C0T.getSparseSegmentReductionSegmentIdOutOfRangeErrorMessage(y,u));y>m&&d.fill(i,m*h,y*h);for(let r=w;r<S;++r){const e=o[r];if(e<0||e>=c[0])throw new Error(n.C0T.getSparseSegmentReductionIndicesOutOfRangeErrorMessage(r,o[r],c[0]));for(let r=0;r<h;r++)d[y*h+r]+=t[e*h+r]}if(a)for(let t=0;t<h;t++)d[y*h+t]/=S-w;if(w=S,++S,m=y+1,y=e,S>l)break}return m<u&&d.fill(i,m*h,u*h),[d,g]}},63252:function(t,e,r){r.d(e,{x6:function(){return a}});var n=r(9495),o=r(45705),s=r(21694);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const a=(0,o.o)((t=>Math.sqrt(t))),i=(0,s.v)(n.dFH,(t=>Math.sqrt(t)));n.dFH},17985:function(t,e,r){r.d(e,{_:function(){return a}});var n=r(9495),o=r(45705),s=r(21694);
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
const a=(0,o.o)(((t,e)=>{const{pattern:r,replaceGlobal:n,rewrite:o}=e;return t.replace(new RegExp(r,n?"g":""),o)})),i=(0,s.F)(n.GZp,a);n.GZp},67686:function(t,e,r){r.d(e,{e:function(){return o}});var n=r(9495);
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
 */function o(t,e,r,o){const s=(0,n.ra8)(t,e.dtype);for(let n=0;n<s.size;n++){const t=s.indexToLoc(n),a=new Array(t.length);for(let e=0;e<a.length;e++)a[e]=t[e]*r[e]+o[e];s.set(e.get(...a),...t)}return s}},73514:function(t,e,r){r.d(e,{G:function(){return s}});var n=r(9495);
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
 */class o{constructor(t,e,r,o,s,a){this.separator=n.ZSL.encodeString(t),this.nGramWidths=e,this.leftPad=n.ZSL.encodeString(r),this.rightPad=n.ZSL.encodeString(o),this.padWidth=s,this.preserveShort=a}getPadWidth(t){return Math.min(this.padWidth<0?t-1:this.padWidth,t-1)}getNumNGrams(t,e){const r=this.getPadWidth(e);return Math.max(0,t+2*r-e+1)}createNGrams(t,e,r,n,o,s){for(let a=0;a<o;++a){const i=this.getPadWidth(s),l=Math.max(0,i-a),c=Math.max(0,i-(o-(a+1))),h=s-(l+c),f=e+(l>0?0:a-i);let u=0;u+=l*this.leftPad.length;for(let e=0;e<h;++e)u+=t[f+e].length;u+=c*this.rightPad.length;const g=l+c+h-1;u+=g*this.separator.length,r[n+a]=new Uint8Array(u);const p=r[n+a];let d=0;const w=t=>t.forEach((t=>p[d++]=t));for(let t=0;t<l;++t)w(this.leftPad),w(this.separator);for(let e=0;e<h-1;++e)w(t[f+e]),w(this.separator);if(h>0){w(t[f+h-1]);for(let t=0;t<c;++t)w(this.separator),w(this.rightPad)}else{for(let t=0;t<c-1;++t)w(this.rightPad),w(this.separator);w(this.rightPad)}}}compute(t,e){const r=t.length,o=e.length;if(o>0){let t=e[0];if(0!==t)throw new Error(`First split value must be 0, got ${t}`);for(let n=1;n<o;++n){let o=e[n]>=t;if(o=o&&e[n]<=r,!o)throw new Error(`Invalid split value ${e[n]}, must be in [${t}, ${r}]`);t=e[n]}if(t!==r)throw new Error(`Last split value must be data size. Expected ${r}, got ${t}`)}const s=o-1,a=n.ZSL.getArrayFromDType("int32",o);if(0===r||0===o){const t=new Array(r);for(let e=0;e<=s;++e)a[e]=0;return[t,a]}a[0]=0;for(let n=1;n<=s;++n){const t=e[n]-e[n-1];let r=0;this.nGramWidths.forEach((e=>{r+=this.getNumNGrams(t,e)})),this.preserveShort&&t>0&&0===r&&(r=1),a[n]=a[n-1]+r}const i=new Array(a[s]);for(let n=0;n<s;++n){const r=e[n];let o=a[n];if(this.nGramWidths.forEach((s=>{const a=e[n+1]-e[n],l=this.getNumNGrams(a,s);this.createNGrams(t,r,i,o,l,s),o+=l})),this.preserveShort&&o===a[n]){const s=e[n+1]-e[n];if(0===s)continue;const a=s+2*this.padWidth,l=1;this.createNGrams(t,r,i,o,l,a)}}return[i,a]}}function s(t,e,r,n,s,a,i,l){return new o(r,n,s,a,i,l).compute(t,e)}},32948:function(t,e,r){r.d(e,{S:function(){return s}});var n=r(9495);
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
 */function o(t,e,r,n){if(!t.length)return;if(0===e.length){for(let e=0;e<t.length;++e)n.push(t.subarray(e,e+1));return}if(1===e.length){const o=e[0];let s=t.indexOf(o);while(-1!==s){const e=t.subarray(0,s);r&&0===e.length||n.push(e),t=t.subarray(s+1),s=t.indexOf(o)}return void(r&&0===t.length||n.push(t))}let o=0;for(let s=0;s<t.length+1;s++)if(s===t.length||-1!==e.indexOf(t[s])){const e=t.subarray(o,s);r&&0===e.length||n.push(e),o=s+1}}function s(t,e,r){const s=t.length,a=[];let i=0,l=0;const c=new Array(s);for(let n=0;n<s;++n){const s=a.length;o(t[n],e,r,a);const h=a.length-s;c[n]=h,i+=h,l=Math.max(l,h)}const h=n.ZSL.getArrayFromDType("int32",2*i),f=new Array(i),u=[s,l];let g=0;for(let n=0;n<s;++n)for(let t=0;t<c[n];++t)h[2*g]=n,h[2*g+1]=t,f[g]=a[g],++g;return[h,f,u]}},45535:function(t,e,r){r.d(e,{f:function(){return o}});var n=r(9495);
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
 */function o(t,e){const r=n.ZSL.getArrayFromDType("int32",t.length);for(let o=0;o<t.length;++o)r[o]=n.ZSL.fingerPrint64(t[o]).modulo(e).getLowBitsUnsigned();return r}},18566:function(t,e,r){r.d(e,{dl:function(){return a}});var n=r(9495),o=r(8195),s=r(98880);
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
const a=(0,o.Z)(((t,e)=>t-e)),i=(0,s.B)(((t,e,r,n)=>({real:t-r,imag:e-n}))),l=(0,s.j)(n.PbM,a,i);n.PbM},21671:function(t,e,r){r.d(e,{D:function(){return o}});var n=r(9495);
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
 */function o(t,e){const r=new Array(t.rank);for(let n=0;n<r.length;n++)r[n]=t.shape[n]*e[n];const o=(0,n.ra8)(r,t.dtype);for(let n=0;n<o.values.length;++n){const e=o.indexToLoc(n),r=new Array(t.rank);for(let n=0;n<r.length;n++)r[n]=e[n]%t.shape[n];const s=t.locToIndex(r);o.values[n]=t.values[s]}return o}},53475:function(t,e,r){r.d(e,{x:function(){return a}});var n=r(9495);
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
 */const o=(t,e)=>{const r=e.value-t.value;return 0===r?t.index-e.index:r};function s(t,e,r=0,a=t.length-1){while(a>r){if(a-r>600){const n=a-r+1,o=e-r+1,i=Math.log(n),l=.5*Math.exp(2*i/3),c=.5*Math.sqrt(i*l*(n-l)/n)*Math.sign(o-n/2),h=Math.max(r,Math.floor(e-o*l/n+c)),f=Math.min(a,Math.floor(e+(n-o)*l/n+c));s(t,e,h,f)}const i=t[e];let l=r,c=a;n.ZSL.swap(t,r,e),o(t[a],i)>0&&n.ZSL.swap(t,r,a);while(l<c){n.ZSL.swap(t,l,c),l++,c--;while(o(t[l],i)<0)l+=1;while(o(t[c],i)>0)c-=1}0===o(t[r],i)?n.ZSL.swap(t,r,c):(c+=1,n.ZSL.swap(t,c,a)),c<=e&&(r=c+1),e<=c&&(a=c-1)}}function a(t,e,r,a,i){const l=e[e.length-1],[c,h]=[t.length/l,l],f=n.ZSL.getTypedArrayFromDType(r,c*a),u=n.ZSL.getTypedArrayFromDType("int32",c*a);for(let n=0;n<c;n++){const e=n*h,r=t.subarray(e,e+h);let l=new Array(r.length);r.forEach(((t,e)=>l[e]={value:t,index:e})),a<l.length&&(s(l,a),l=l.slice(0,a)),i&&l.sort(o);const c=n*a,g=f.subarray(c,c+a),p=u.subarray(c,c+a);for(let t=0;t<a;t++)g[t]=l[t].value,p[t]=l[t].index}const g=e.slice();return g[g.length-1]=a,[(0,n.ra8)(g,r,f),(0,n.ra8)(g,"int32",u)]}},85655:function(t,e,r){r.d(e,{m:function(){return a}});var n=r(9495),o=r(97870),s=r(13396);
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
function a(t){const{inputs:e,attrs:r,backend:n}=t,{x:a}=e,{perm:i}=r;(0,o.C)(a,"transpose");const l=a.shape.length,c=new Array(l);for(let o=0;o<c.length;o++)c[o]=a.shape[i[o]];const h=n.data.get(a.dataId).values,f=(0,s._)(h,a.shape,a.dtype,i,c),u=n.write(f,c,a.dtype);return{dataId:u,shape:c,dtype:a.dtype}}n.wx0},13396:function(t,e,r){r.d(e,{_:function(){return o}});var n=r(9495);
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
 */function o(t,e,r,o,s){const a=e.length,i=n.ZSL.sizeFromShape(e),l=n.ZSL.computeStrides(e),c=n.ZSL.computeStrides(s),h=n.ZSL.getTypedArrayFromDType(r,n.ZSL.sizeFromShape(s));for(let f=0;f<i;++f){const e=n.ZSL.indexToLoc(f,a,l),r=new Array(e.length);for(let t=0;t<r.length;t++)r[t]=e[o[t]];const s=n.ZSL.locToIndex(r,a,c);h[s]=t[f]}return h}},2750:function(t,e,r){r.d(e,{w:function(){return o}});var n=r(9495);
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
 */function o(t,e,r,o){const s=n.ZSL.parseAxisParam(e,r)[0],a=[1,r[0],1];for(let n=0;n<s;n++)a[0]*=r[n];a[1]=r[s];for(let n=s+1;n<r.length;n++)a[2]*=r[n];const i=new Map,l=new Int32Array(r[s]),c=new n.ylz(a,o,t),h=[],f=1===a[0]&&1===a[2];for(let n=0;n<r[s];n++){let e;if(f)e=t[n].toString();else{const t=[];for(let e=0;e<a[0];e++)for(let r=0;r<a[2];r++)t.push(c.get(e,n,r));e=t.join(",")}const r=i.get(e);if(null!=r)l[n]=r;else{const t=i.size;i.set(e,t),l[n]=t,h.push(n)}}const u=a.slice();u[1]=i.size;const g=new n.ylz(u,o);h.forEach(((t,e)=>{for(let r=0;r<a[0];r++)for(let n=0;n<a[2];n++)g.set(c.get(r,t,n),r,e,n)}));const p=r.slice();return p[s]=u[1],{outputValues:g.values,outputShape:p,indices:l}}}}]);
//# sourceMappingURL=chunk-vendors-7d59048d.94811a38.js.map