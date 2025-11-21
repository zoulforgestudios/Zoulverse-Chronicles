(function(){const k=document.createElement("link").relList;if(k&&k.supports&&k.supports("modulepreload"))return;for(const I of document.querySelectorAll('link[rel="modulepreload"]'))b(I);new MutationObserver(I=>{for(const H of I)if(H.type==="childList")for(const _ of H.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&b(_)}).observe(document,{childList:!0,subtree:!0});function c(I){const H={};return I.integrity&&(H.integrity=I.integrity),I.referrerPolicy&&(H.referrerPolicy=I.referrerPolicy),I.crossOrigin==="use-credentials"?H.credentials="include":I.crossOrigin==="anonymous"?H.credentials="omit":H.credentials="same-origin",H}function b(I){if(I.ep)return;I.ep=!0;const H=c(I);fetch(I.href,H)}})();var Cl={exports:{}},kr={},bl={exports:{}},R={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fu;function Ph(){if(Fu)return R;Fu=1;var v=Symbol.for("react.element"),k=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),I=Symbol.for("react.profiler"),H=Symbol.for("react.provider"),_=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),pe=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),O=Symbol.iterator;function K(h){return h===null||typeof h!="object"?null:(h=O&&h[O]||h["@@iterator"],typeof h=="function"?h:null)}var We={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ue=Object.assign,re={};function J(h,y,P){this.props=h,this.context=y,this.refs=re,this.updater=P||We}J.prototype.isReactComponent={},J.prototype.setState=function(h,y){if(typeof h!="object"&&typeof h!="function"&&h!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,h,y,"setState")},J.prototype.forceUpdate=function(h){this.updater.enqueueForceUpdate(this,h,"forceUpdate")};function wt(){}wt.prototype=J.prototype;function dt(h,y,P){this.props=h,this.context=y,this.refs=re,this.updater=P||We}var et=dt.prototype=new wt;et.constructor=dt,Ue(et,J.prototype),et.isPureReactComponent=!0;var Ne=Array.isArray,tt=Object.prototype.hasOwnProperty,Fe={current:null},_e={key:!0,ref:!0,__self:!0,__source:!0};function Ge(h,y,P){var B,U={},G=null,q=null;if(y!=null)for(B in y.ref!==void 0&&(q=y.ref),y.key!==void 0&&(G=""+y.key),y)tt.call(y,B)&&!_e.hasOwnProperty(B)&&(U[B]=y[B]);var $=arguments.length-2;if($===1)U.children=P;else if(1<$){for(var oe=Array($),Re=0;Re<$;Re++)oe[Re]=arguments[Re+2];U.children=oe}if(h&&h.defaultProps)for(B in $=h.defaultProps,$)U[B]===void 0&&(U[B]=$[B]);return{$$typeof:v,type:h,key:G,ref:q,props:U,_owner:Fe.current}}function Ft(h,y){return{$$typeof:v,type:h.type,key:y,ref:h.ref,props:h.props,_owner:h._owner}}function vt(h){return typeof h=="object"&&h!==null&&h.$$typeof===v}function Yt(h){var y={"=":"=0",":":"=2"};return"$"+h.replace(/[=:]/g,function(P){return y[P]})}var ht=/\/+/g;function Pe(h,y){return typeof h=="object"&&h!==null&&h.key!=null?Yt(""+h.key):y.toString(36)}function nt(h,y,P,B,U){var G=typeof h;(G==="undefined"||G==="boolean")&&(h=null);var q=!1;if(h===null)q=!0;else switch(G){case"string":case"number":q=!0;break;case"object":switch(h.$$typeof){case v:case k:q=!0}}if(q)return q=h,U=U(q),h=B===""?"."+Pe(q,0):B,Ne(U)?(P="",h!=null&&(P=h.replace(ht,"$&/")+"/"),nt(U,y,P,"",function(Re){return Re})):U!=null&&(vt(U)&&(U=Ft(U,P+(!U.key||q&&q.key===U.key?"":(""+U.key).replace(ht,"$&/")+"/")+h)),y.push(U)),1;if(q=0,B=B===""?".":B+":",Ne(h))for(var $=0;$<h.length;$++){G=h[$];var oe=B+Pe(G,$);q+=nt(G,y,P,oe,U)}else if(oe=K(h),typeof oe=="function")for(h=oe.call(h),$=0;!(G=h.next()).done;)G=G.value,oe=B+Pe(G,$++),q+=nt(G,y,P,oe,U);else if(G==="object")throw y=String(h),Error("Objects are not valid as a React child (found: "+(y==="[object Object]"?"object with keys {"+Object.keys(h).join(", ")+"}":y)+"). If you meant to render a collection of children, use an array instead.");return q}function ct(h,y,P){if(h==null)return h;var B=[],U=0;return nt(h,B,"","",function(G){return y.call(P,G,U++)}),B}function ze(h){if(h._status===-1){var y=h._result;y=y(),y.then(function(P){(h._status===0||h._status===-1)&&(h._status=1,h._result=P)},function(P){(h._status===0||h._status===-1)&&(h._status=2,h._result=P)}),h._status===-1&&(h._status=0,h._result=y)}if(h._status===1)return h._result.default;throw h._result}var se={current:null},N={transition:null},L={ReactCurrentDispatcher:se,ReactCurrentBatchConfig:N,ReactCurrentOwner:Fe};function C(){throw Error("act(...) is not supported in production builds of React.")}return R.Children={map:ct,forEach:function(h,y,P){ct(h,function(){y.apply(this,arguments)},P)},count:function(h){var y=0;return ct(h,function(){y++}),y},toArray:function(h){return ct(h,function(y){return y})||[]},only:function(h){if(!vt(h))throw Error("React.Children.only expected to receive a single React element child.");return h}},R.Component=J,R.Fragment=c,R.Profiler=I,R.PureComponent=dt,R.StrictMode=b,R.Suspense=Z,R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L,R.act=C,R.cloneElement=function(h,y,P){if(h==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+h+".");var B=Ue({},h.props),U=h.key,G=h.ref,q=h._owner;if(y!=null){if(y.ref!==void 0&&(G=y.ref,q=Fe.current),y.key!==void 0&&(U=""+y.key),h.type&&h.type.defaultProps)var $=h.type.defaultProps;for(oe in y)tt.call(y,oe)&&!_e.hasOwnProperty(oe)&&(B[oe]=y[oe]===void 0&&$!==void 0?$[oe]:y[oe])}var oe=arguments.length-2;if(oe===1)B.children=P;else if(1<oe){$=Array(oe);for(var Re=0;Re<oe;Re++)$[Re]=arguments[Re+2];B.children=$}return{$$typeof:v,type:h.type,key:U,ref:G,props:B,_owner:q}},R.createContext=function(h){return h={$$typeof:_,_currentValue:h,_currentValue2:h,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},h.Provider={$$typeof:H,_context:h},h.Consumer=h},R.createElement=Ge,R.createFactory=function(h){var y=Ge.bind(null,h);return y.type=h,y},R.createRef=function(){return{current:null}},R.forwardRef=function(h){return{$$typeof:z,render:h}},R.isValidElement=vt,R.lazy=function(h){return{$$typeof:X,_payload:{_status:-1,_result:h},_init:ze}},R.memo=function(h,y){return{$$typeof:pe,type:h,compare:y===void 0?null:y}},R.startTransition=function(h){var y=N.transition;N.transition={};try{h()}finally{N.transition=y}},R.unstable_act=C,R.useCallback=function(h,y){return se.current.useCallback(h,y)},R.useContext=function(h){return se.current.useContext(h)},R.useDebugValue=function(){},R.useDeferredValue=function(h){return se.current.useDeferredValue(h)},R.useEffect=function(h,y){return se.current.useEffect(h,y)},R.useId=function(){return se.current.useId()},R.useImperativeHandle=function(h,y,P){return se.current.useImperativeHandle(h,y,P)},R.useInsertionEffect=function(h,y){return se.current.useInsertionEffect(h,y)},R.useLayoutEffect=function(h,y){return se.current.useLayoutEffect(h,y)},R.useMemo=function(h,y){return se.current.useMemo(h,y)},R.useReducer=function(h,y,P){return se.current.useReducer(h,y,P)},R.useRef=function(h){return se.current.useRef(h)},R.useState=function(h){return se.current.useState(h)},R.useSyncExternalStore=function(h,y,P){return se.current.useSyncExternalStore(h,y,P)},R.useTransition=function(){return se.current.useTransition()},R.version="18.3.1",R}var Eu;function zl(){return Eu||(Eu=1,bl.exports=Ph()),bl.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ju;function Rh(){if(ju)return kr;ju=1;var v=zl(),k=Symbol.for("react.element"),c=Symbol.for("react.fragment"),b=Object.prototype.hasOwnProperty,I=v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,H={key:!0,ref:!0,__self:!0,__source:!0};function _(z,Z,pe){var X,O={},K=null,We=null;pe!==void 0&&(K=""+pe),Z.key!==void 0&&(K=""+Z.key),Z.ref!==void 0&&(We=Z.ref);for(X in Z)b.call(Z,X)&&!H.hasOwnProperty(X)&&(O[X]=Z[X]);if(z&&z.defaultProps)for(X in Z=z.defaultProps,Z)O[X]===void 0&&(O[X]=Z[X]);return{$$typeof:k,type:z,key:K,ref:We,props:O,_owner:I.current}}return kr.Fragment=c,kr.jsx=_,kr.jsxs=_,kr}var _u;function Oh(){return _u||(_u=1,Cl.exports=Rh()),Cl.exports}var a=Oh(),zo={},Fl={exports:{}},Me={},El={exports:{}},jl={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zu;function Bh(){return zu||(zu=1,(function(v){function k(N,L){var C=N.length;N.push(L);e:for(;0<C;){var h=C-1>>>1,y=N[h];if(0<I(y,L))N[h]=L,N[C]=y,C=h;else break e}}function c(N){return N.length===0?null:N[0]}function b(N){if(N.length===0)return null;var L=N[0],C=N.pop();if(C!==L){N[0]=C;e:for(var h=0,y=N.length,P=y>>>1;h<P;){var B=2*(h+1)-1,U=N[B],G=B+1,q=N[G];if(0>I(U,C))G<y&&0>I(q,U)?(N[h]=q,N[G]=C,h=G):(N[h]=U,N[B]=C,h=B);else if(G<y&&0>I(q,C))N[h]=q,N[G]=C,h=G;else break e}}return L}function I(N,L){var C=N.sortIndex-L.sortIndex;return C!==0?C:N.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var H=performance;v.unstable_now=function(){return H.now()}}else{var _=Date,z=_.now();v.unstable_now=function(){return _.now()-z}}var Z=[],pe=[],X=1,O=null,K=3,We=!1,Ue=!1,re=!1,J=typeof setTimeout=="function"?setTimeout:null,wt=typeof clearTimeout=="function"?clearTimeout:null,dt=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function et(N){for(var L=c(pe);L!==null;){if(L.callback===null)b(pe);else if(L.startTime<=N)b(pe),L.sortIndex=L.expirationTime,k(Z,L);else break;L=c(pe)}}function Ne(N){if(re=!1,et(N),!Ue)if(c(Z)!==null)Ue=!0,ze(tt);else{var L=c(pe);L!==null&&se(Ne,L.startTime-N)}}function tt(N,L){Ue=!1,re&&(re=!1,wt(Ge),Ge=-1),We=!0;var C=K;try{for(et(L),O=c(Z);O!==null&&(!(O.expirationTime>L)||N&&!Yt());){var h=O.callback;if(typeof h=="function"){O.callback=null,K=O.priorityLevel;var y=h(O.expirationTime<=L);L=v.unstable_now(),typeof y=="function"?O.callback=y:O===c(Z)&&b(Z),et(L)}else b(Z);O=c(Z)}if(O!==null)var P=!0;else{var B=c(pe);B!==null&&se(Ne,B.startTime-L),P=!1}return P}finally{O=null,K=C,We=!1}}var Fe=!1,_e=null,Ge=-1,Ft=5,vt=-1;function Yt(){return!(v.unstable_now()-vt<Ft)}function ht(){if(_e!==null){var N=v.unstable_now();vt=N;var L=!0;try{L=_e(!0,N)}finally{L?Pe():(Fe=!1,_e=null)}}else Fe=!1}var Pe;if(typeof dt=="function")Pe=function(){dt(ht)};else if(typeof MessageChannel<"u"){var nt=new MessageChannel,ct=nt.port2;nt.port1.onmessage=ht,Pe=function(){ct.postMessage(null)}}else Pe=function(){J(ht,0)};function ze(N){_e=N,Fe||(Fe=!0,Pe())}function se(N,L){Ge=J(function(){N(v.unstable_now())},L)}v.unstable_IdlePriority=5,v.unstable_ImmediatePriority=1,v.unstable_LowPriority=4,v.unstable_NormalPriority=3,v.unstable_Profiling=null,v.unstable_UserBlockingPriority=2,v.unstable_cancelCallback=function(N){N.callback=null},v.unstable_continueExecution=function(){Ue||We||(Ue=!0,ze(tt))},v.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ft=0<N?Math.floor(1e3/N):5},v.unstable_getCurrentPriorityLevel=function(){return K},v.unstable_getFirstCallbackNode=function(){return c(Z)},v.unstable_next=function(N){switch(K){case 1:case 2:case 3:var L=3;break;default:L=K}var C=K;K=L;try{return N()}finally{K=C}},v.unstable_pauseExecution=function(){},v.unstable_requestPaint=function(){},v.unstable_runWithPriority=function(N,L){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var C=K;K=N;try{return L()}finally{K=C}},v.unstable_scheduleCallback=function(N,L,C){var h=v.unstable_now();switch(typeof C=="object"&&C!==null?(C=C.delay,C=typeof C=="number"&&0<C?h+C:h):C=h,N){case 1:var y=-1;break;case 2:y=250;break;case 5:y=1073741823;break;case 4:y=1e4;break;default:y=5e3}return y=C+y,N={id:X++,callback:L,priorityLevel:N,startTime:C,expirationTime:y,sortIndex:-1},C>h?(N.sortIndex=C,k(pe,N),c(Z)===null&&N===c(pe)&&(re?(wt(Ge),Ge=-1):re=!0,se(Ne,C-h))):(N.sortIndex=y,k(Z,N),Ue||We||(Ue=!0,ze(tt))),N},v.unstable_shouldYield=Yt,v.unstable_wrapCallback=function(N){var L=K;return function(){var C=K;K=L;try{return N.apply(this,arguments)}finally{K=C}}}})(jl)),jl}var Iu;function Zh(){return Iu||(Iu=1,El.exports=Bh()),El.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hu;function Xh(){if(Hu)return Me;Hu=1;var v=zl(),k=Zh();function c(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var b=new Set,I={};function H(e,t){_(e,t),_(e+"Capture",t)}function _(e,t){for(I[e]=t,e=0;e<t.length;e++)b.add(t[e])}var z=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Z=Object.prototype.hasOwnProperty,pe=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,X={},O={};function K(e){return Z.call(O,e)?!0:Z.call(X,e)?!1:pe.test(e)?O[e]=!0:(X[e]=!0,!1)}function We(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ue(e,t,n,r){if(t===null||typeof t>"u"||We(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function re(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var J={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){J[e]=new re(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];J[t]=new re(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){J[e]=new re(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){J[e]=new re(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){J[e]=new re(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){J[e]=new re(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){J[e]=new re(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){J[e]=new re(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){J[e]=new re(e,5,!1,e.toLowerCase(),null,!1,!1)});var wt=/[\-:]([a-z])/g;function dt(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(wt,dt);J[t]=new re(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(wt,dt);J[t]=new re(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(wt,dt);J[t]=new re(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){J[e]=new re(e,1,!1,e.toLowerCase(),null,!1,!1)}),J.xlinkHref=new re("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){J[e]=new re(e,1,!1,e.toLowerCase(),null,!0,!0)});function et(e,t,n,r){var o=J.hasOwnProperty(t)?J[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Ue(t,n,o,r)&&(n=null),r||o===null?K(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ne=v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,tt=Symbol.for("react.element"),Fe=Symbol.for("react.portal"),_e=Symbol.for("react.fragment"),Ge=Symbol.for("react.strict_mode"),Ft=Symbol.for("react.profiler"),vt=Symbol.for("react.provider"),Yt=Symbol.for("react.context"),ht=Symbol.for("react.forward_ref"),Pe=Symbol.for("react.suspense"),nt=Symbol.for("react.suspense_list"),ct=Symbol.for("react.memo"),ze=Symbol.for("react.lazy"),se=Symbol.for("react.offscreen"),N=Symbol.iterator;function L(e){return e===null||typeof e!="object"?null:(e=N&&e[N]||e["@@iterator"],typeof e=="function"?e:null)}var C=Object.assign,h;function y(e){if(h===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);h=t&&t[1]||""}return`
`+h+e}var P=!1;function B(e,t){if(!e||P)return"";P=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(m){var r=m}Reflect.construct(e,[],t)}else{try{t.call()}catch(m){r=m}e.call(t.prototype)}else{try{throw Error()}catch(m){r=m}e()}}catch(m){if(m&&r&&typeof m.stack=="string"){for(var o=m.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,s=i.length-1;1<=l&&0<=s&&o[l]!==i[s];)s--;for(;1<=l&&0<=s;l--,s--)if(o[l]!==i[s]){if(l!==1||s!==1)do if(l--,s--,0>s||o[l]!==i[s]){var u=`
`+o[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=s);break}}}finally{P=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?y(e):""}function U(e){switch(e.tag){case 5:return y(e.type);case 16:return y("Lazy");case 13:return y("Suspense");case 19:return y("SuspenseList");case 0:case 2:case 15:return e=B(e.type,!1),e;case 11:return e=B(e.type.render,!1),e;case 1:return e=B(e.type,!0),e;default:return""}}function G(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case _e:return"Fragment";case Fe:return"Portal";case Ft:return"Profiler";case Ge:return"StrictMode";case Pe:return"Suspense";case nt:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Yt:return(e.displayName||"Context")+".Consumer";case vt:return(e._context.displayName||"Context")+".Provider";case ht:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ct:return t=e.displayName||null,t!==null?t:G(e.type)||"Memo";case ze:t=e._payload,e=e._init;try{return G(e(t))}catch{}}return null}function q(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return G(t);case 8:return t===Ge?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function $(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function oe(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Re(e){var t=oe(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function xr(e){e._valueTracker||(e._valueTracker=Re(e))}function Hl(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=oe(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Sr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Io(e,t){var n=t.checked;return C({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Vl(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=$(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Dl(e,t){t=t.checked,t!=null&&et(e,"checked",t,!1)}function Ho(e,t){Dl(e,t);var n=$(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Vo(e,t.type,n):t.hasOwnProperty("defaultValue")&&Vo(e,t.type,$(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ll(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Vo(e,t,n){(t!=="number"||Sr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Vn=Array.isArray;function dn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+$(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Do(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(c(91));return C({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ml(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(c(92));if(Vn(n)){if(1<n.length)throw Error(c(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:$(n)}}function Pl(e,t){var n=$(t.value),r=$(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Rl(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ol(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Lo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ol(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Nr,Bl=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Nr=Nr||document.createElement("div"),Nr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Nr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Dn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ln={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Zu=["Webkit","ms","Moz","O"];Object.keys(Ln).forEach(function(e){Zu.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ln[t]=Ln[e]})});function Zl(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ln.hasOwnProperty(e)&&Ln[e]?(""+t).trim():t+"px"}function Xl(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Zl(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Xu=C({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Mo(e,t){if(t){if(Xu[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(c(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(c(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(c(61))}if(t.style!=null&&typeof t.style!="object")throw Error(c(62))}}function Po(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ro=null;function Oo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Bo=null,hn=null,cn=null;function Wl(e){if(e=ir(e)){if(typeof Bo!="function")throw Error(c(280));var t=e.stateNode;t&&(t=Ur(t),Bo(e.stateNode,e.type,t))}}function Ul(e){hn?cn?cn.push(e):cn=[e]:hn=e}function Gl(){if(hn){var e=hn,t=cn;if(cn=hn=null,Wl(e),t)for(e=0;e<t.length;e++)Wl(t[e])}}function Yl(e,t){return e(t)}function $l(){}var Zo=!1;function Ql(e,t,n){if(Zo)return e(t,n);Zo=!0;try{return Yl(e,t,n)}finally{Zo=!1,(hn!==null||cn!==null)&&($l(),Gl())}}function Mn(e,t){var n=e.stateNode;if(n===null)return null;var r=Ur(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(c(231,t,typeof n));return n}var Xo=!1;if(z)try{var Pn={};Object.defineProperty(Pn,"passive",{get:function(){Xo=!0}}),window.addEventListener("test",Pn,Pn),window.removeEventListener("test",Pn,Pn)}catch{Xo=!1}function Wu(e,t,n,r,o,i,l,s,u){var m=Array.prototype.slice.call(arguments,3);try{t.apply(n,m)}catch(w){this.onError(w)}}var Rn=!1,Tr=null,Ar=!1,Wo=null,Uu={onError:function(e){Rn=!0,Tr=e}};function Gu(e,t,n,r,o,i,l,s,u){Rn=!1,Tr=null,Wu.apply(Uu,arguments)}function Yu(e,t,n,r,o,i,l,s,u){if(Gu.apply(this,arguments),Rn){if(Rn){var m=Tr;Rn=!1,Tr=null}else throw Error(c(198));Ar||(Ar=!0,Wo=m)}}function $t(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Jl(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Kl(e){if($t(e)!==e)throw Error(c(188))}function $u(e){var t=e.alternate;if(!t){if(t=$t(e),t===null)throw Error(c(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Kl(o),e;if(i===r)return Kl(o),t;i=i.sibling}throw Error(c(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l)throw Error(c(189))}}if(n.alternate!==r)throw Error(c(190))}if(n.tag!==3)throw Error(c(188));return n.stateNode.current===n?e:t}function ql(e){return e=$u(e),e!==null?ea(e):null}function ea(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ea(e);if(t!==null)return t;e=e.sibling}return null}var ta=k.unstable_scheduleCallback,na=k.unstable_cancelCallback,Qu=k.unstable_shouldYield,Ju=k.unstable_requestPaint,de=k.unstable_now,Ku=k.unstable_getCurrentPriorityLevel,Uo=k.unstable_ImmediatePriority,ra=k.unstable_UserBlockingPriority,Cr=k.unstable_NormalPriority,qu=k.unstable_LowPriority,oa=k.unstable_IdlePriority,br=null,ft=null;function ed(e){if(ft&&typeof ft.onCommitFiberRoot=="function")try{ft.onCommitFiberRoot(br,e,void 0,(e.current.flags&128)===128)}catch{}}var rt=Math.clz32?Math.clz32:rd,td=Math.log,nd=Math.LN2;function rd(e){return e>>>=0,e===0?32:31-(td(e)/nd|0)|0}var Fr=64,Er=4194304;function On(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function jr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~o;s!==0?r=On(s):(i&=l,i!==0&&(r=On(i)))}else l=n&~o,l!==0?r=On(l):i!==0&&(r=On(i));if(r===0)return 0;if(t!==0&&t!==r&&(t&o)===0&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-rt(t),o=1<<n,r|=e[n],t&=~o;return r}function od(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function id(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-rt(i),s=1<<l,u=o[l];u===-1?((s&n)===0||(s&r)!==0)&&(o[l]=od(s,t)):u<=t&&(e.expiredLanes|=s),i&=~s}}function Go(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ia(){var e=Fr;return Fr<<=1,(Fr&4194240)===0&&(Fr=64),e}function Yo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Bn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-rt(t),e[t]=n}function ld(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-rt(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function $o(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-rt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var Q=0;function la(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var aa,Qo,sa,ua,da,Jo=!1,_r=[],Et=null,jt=null,_t=null,Zn=new Map,Xn=new Map,zt=[],ad="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ha(e,t){switch(e){case"focusin":case"focusout":Et=null;break;case"dragenter":case"dragleave":jt=null;break;case"mouseover":case"mouseout":_t=null;break;case"pointerover":case"pointerout":Zn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xn.delete(t.pointerId)}}function Wn(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=ir(t),t!==null&&Qo(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function sd(e,t,n,r,o){switch(t){case"focusin":return Et=Wn(Et,e,t,n,r,o),!0;case"dragenter":return jt=Wn(jt,e,t,n,r,o),!0;case"mouseover":return _t=Wn(_t,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Zn.set(i,Wn(Zn.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Xn.set(i,Wn(Xn.get(i)||null,e,t,n,r,o)),!0}return!1}function ca(e){var t=Qt(e.target);if(t!==null){var n=$t(t);if(n!==null){if(t=n.tag,t===13){if(t=Jl(n),t!==null){e.blockedOn=t,da(e.priority,function(){sa(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function zr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=qo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ro=r,n.target.dispatchEvent(r),Ro=null}else return t=ir(n),t!==null&&Qo(t),e.blockedOn=n,!1;t.shift()}return!0}function fa(e,t,n){zr(e)&&n.delete(t)}function ud(){Jo=!1,Et!==null&&zr(Et)&&(Et=null),jt!==null&&zr(jt)&&(jt=null),_t!==null&&zr(_t)&&(_t=null),Zn.forEach(fa),Xn.forEach(fa)}function Un(e,t){e.blockedOn===t&&(e.blockedOn=null,Jo||(Jo=!0,k.unstable_scheduleCallback(k.unstable_NormalPriority,ud)))}function Gn(e){function t(o){return Un(o,e)}if(0<_r.length){Un(_r[0],e);for(var n=1;n<_r.length;n++){var r=_r[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Et!==null&&Un(Et,e),jt!==null&&Un(jt,e),_t!==null&&Un(_t,e),Zn.forEach(t),Xn.forEach(t),n=0;n<zt.length;n++)r=zt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<zt.length&&(n=zt[0],n.blockedOn===null);)ca(n),n.blockedOn===null&&zt.shift()}var fn=Ne.ReactCurrentBatchConfig,Ir=!0;function dd(e,t,n,r){var o=Q,i=fn.transition;fn.transition=null;try{Q=1,Ko(e,t,n,r)}finally{Q=o,fn.transition=i}}function hd(e,t,n,r){var o=Q,i=fn.transition;fn.transition=null;try{Q=4,Ko(e,t,n,r)}finally{Q=o,fn.transition=i}}function Ko(e,t,n,r){if(Ir){var o=qo(e,t,n,r);if(o===null)gi(e,t,r,Hr,n),ha(e,r);else if(sd(o,e,t,n,r))r.stopPropagation();else if(ha(e,r),t&4&&-1<ad.indexOf(e)){for(;o!==null;){var i=ir(o);if(i!==null&&aa(i),i=qo(e,t,n,r),i===null&&gi(e,t,r,Hr,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else gi(e,t,r,null,n)}}var Hr=null;function qo(e,t,n,r){if(Hr=null,e=Oo(r),e=Qt(e),e!==null)if(t=$t(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Jl(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Hr=e,null}function pa(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ku()){case Uo:return 1;case ra:return 4;case Cr:case qu:return 16;case oa:return 536870912;default:return 16}default:return 16}}var It=null,ei=null,Vr=null;function ma(){if(Vr)return Vr;var e,t=ei,n=t.length,r,o="value"in It?It.value:It.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return Vr=o.slice(e,1<r?1-r:void 0)}function Dr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Lr(){return!0}function ga(){return!1}function Oe(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Lr:ga,this.isPropagationStopped=ga,this}return C(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Lr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Lr)},persist:function(){},isPersistent:Lr}),t}var pn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ti=Oe(pn),Yn=C({},pn,{view:0,detail:0}),cd=Oe(Yn),ni,ri,$n,Mr=C({},Yn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ii,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==$n&&($n&&e.type==="mousemove"?(ni=e.screenX-$n.screenX,ri=e.screenY-$n.screenY):ri=ni=0,$n=e),ni)},movementY:function(e){return"movementY"in e?e.movementY:ri}}),ya=Oe(Mr),fd=C({},Mr,{dataTransfer:0}),pd=Oe(fd),md=C({},Yn,{relatedTarget:0}),oi=Oe(md),gd=C({},pn,{animationName:0,elapsedTime:0,pseudoElement:0}),yd=Oe(gd),wd=C({},pn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),vd=Oe(wd),kd=C({},pn,{data:0}),wa=Oe(kd),xd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Nd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Td(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Nd[e])?!!t[e]:!1}function ii(){return Td}var Ad=C({},Yn,{key:function(e){if(e.key){var t=xd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Dr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Sd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ii,charCode:function(e){return e.type==="keypress"?Dr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Dr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Cd=Oe(Ad),bd=C({},Mr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),va=Oe(bd),Fd=C({},Yn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ii}),Ed=Oe(Fd),jd=C({},pn,{propertyName:0,elapsedTime:0,pseudoElement:0}),_d=Oe(jd),zd=C({},Mr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Id=Oe(zd),Hd=[9,13,27,32],li=z&&"CompositionEvent"in window,Qn=null;z&&"documentMode"in document&&(Qn=document.documentMode);var Vd=z&&"TextEvent"in window&&!Qn,ka=z&&(!li||Qn&&8<Qn&&11>=Qn),xa=" ",Sa=!1;function Na(e,t){switch(e){case"keyup":return Hd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ta(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var mn=!1;function Dd(e,t){switch(e){case"compositionend":return Ta(t);case"keypress":return t.which!==32?null:(Sa=!0,xa);case"textInput":return e=t.data,e===xa&&Sa?null:e;default:return null}}function Ld(e,t){if(mn)return e==="compositionend"||!li&&Na(e,t)?(e=ma(),Vr=ei=It=null,mn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ka&&t.locale!=="ko"?null:t.data;default:return null}}var Md={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Aa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Md[e.type]:t==="textarea"}function Ca(e,t,n,r){Ul(r),t=Zr(t,"onChange"),0<t.length&&(n=new ti("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Jn=null,Kn=null;function Pd(e){Xa(e,0)}function Pr(e){var t=kn(e);if(Hl(t))return e}function Rd(e,t){if(e==="change")return t}var ba=!1;if(z){var ai;if(z){var si="oninput"in document;if(!si){var Fa=document.createElement("div");Fa.setAttribute("oninput","return;"),si=typeof Fa.oninput=="function"}ai=si}else ai=!1;ba=ai&&(!document.documentMode||9<document.documentMode)}function Ea(){Jn&&(Jn.detachEvent("onpropertychange",ja),Kn=Jn=null)}function ja(e){if(e.propertyName==="value"&&Pr(Kn)){var t=[];Ca(t,Kn,e,Oo(e)),Ql(Pd,t)}}function Od(e,t,n){e==="focusin"?(Ea(),Jn=t,Kn=n,Jn.attachEvent("onpropertychange",ja)):e==="focusout"&&Ea()}function Bd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Pr(Kn)}function Zd(e,t){if(e==="click")return Pr(t)}function Xd(e,t){if(e==="input"||e==="change")return Pr(t)}function Wd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ot=typeof Object.is=="function"?Object.is:Wd;function qn(e,t){if(ot(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Z.call(t,o)||!ot(e[o],t[o]))return!1}return!0}function _a(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function za(e,t){var n=_a(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=_a(n)}}function Ia(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ia(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ha(){for(var e=window,t=Sr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Sr(e.document)}return t}function ui(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Ud(e){var t=Ha(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ia(n.ownerDocument.documentElement,n)){if(r!==null&&ui(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=za(n,i);var l=za(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Gd=z&&"documentMode"in document&&11>=document.documentMode,gn=null,di=null,er=null,hi=!1;function Va(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;hi||gn==null||gn!==Sr(r)||(r=gn,"selectionStart"in r&&ui(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),er&&qn(er,r)||(er=r,r=Zr(di,"onSelect"),0<r.length&&(t=new ti("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=gn)))}function Rr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var yn={animationend:Rr("Animation","AnimationEnd"),animationiteration:Rr("Animation","AnimationIteration"),animationstart:Rr("Animation","AnimationStart"),transitionend:Rr("Transition","TransitionEnd")},ci={},Da={};z&&(Da=document.createElement("div").style,"AnimationEvent"in window||(delete yn.animationend.animation,delete yn.animationiteration.animation,delete yn.animationstart.animation),"TransitionEvent"in window||delete yn.transitionend.transition);function Or(e){if(ci[e])return ci[e];if(!yn[e])return e;var t=yn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Da)return ci[e]=t[n];return e}var La=Or("animationend"),Ma=Or("animationiteration"),Pa=Or("animationstart"),Ra=Or("transitionend"),Oa=new Map,Ba="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ht(e,t){Oa.set(e,t),H(t,[e])}for(var fi=0;fi<Ba.length;fi++){var pi=Ba[fi],Yd=pi.toLowerCase(),$d=pi[0].toUpperCase()+pi.slice(1);Ht(Yd,"on"+$d)}Ht(La,"onAnimationEnd"),Ht(Ma,"onAnimationIteration"),Ht(Pa,"onAnimationStart"),Ht("dblclick","onDoubleClick"),Ht("focusin","onFocus"),Ht("focusout","onBlur"),Ht(Ra,"onTransitionEnd"),_("onMouseEnter",["mouseout","mouseover"]),_("onMouseLeave",["mouseout","mouseover"]),_("onPointerEnter",["pointerout","pointerover"]),_("onPointerLeave",["pointerout","pointerover"]),H("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),H("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),H("onBeforeInput",["compositionend","keypress","textInput","paste"]),H("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),H("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),H("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var tr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qd=new Set("cancel close invalid load scroll toggle".split(" ").concat(tr));function Za(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Yu(r,t,void 0,e),e.currentTarget=null}function Xa(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],u=s.instance,m=s.currentTarget;if(s=s.listener,u!==i&&o.isPropagationStopped())break e;Za(o,s,m),i=u}else for(l=0;l<r.length;l++){if(s=r[l],u=s.instance,m=s.currentTarget,s=s.listener,u!==i&&o.isPropagationStopped())break e;Za(o,s,m),i=u}}}if(Ar)throw e=Wo,Ar=!1,Wo=null,e}function te(e,t){var n=t[Si];n===void 0&&(n=t[Si]=new Set);var r=e+"__bubble";n.has(r)||(Wa(t,e,2,!1),n.add(r))}function mi(e,t,n){var r=0;t&&(r|=4),Wa(n,e,r,t)}var Br="_reactListening"+Math.random().toString(36).slice(2);function nr(e){if(!e[Br]){e[Br]=!0,b.forEach(function(n){n!=="selectionchange"&&(Qd.has(n)||mi(n,!1,e),mi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Br]||(t[Br]=!0,mi("selectionchange",!1,t))}}function Wa(e,t,n,r){switch(pa(t)){case 1:var o=dd;break;case 4:o=hd;break;default:o=Ko}n=o.bind(null,t,n,e),o=void 0,!Xo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function gi(e,t,n,r,o){var i=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===o||u.nodeType===8&&u.parentNode===o))return;l=l.return}for(;s!==null;){if(l=Qt(s),l===null)return;if(u=l.tag,u===5||u===6){r=i=l;continue e}s=s.parentNode}}r=r.return}Ql(function(){var m=i,w=Oo(n),x=[];e:{var g=Oa.get(e);if(g!==void 0){var T=ti,F=e;switch(e){case"keypress":if(Dr(n)===0)break e;case"keydown":case"keyup":T=Cd;break;case"focusin":F="focus",T=oi;break;case"focusout":F="blur",T=oi;break;case"beforeblur":case"afterblur":T=oi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":T=ya;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":T=pd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":T=Ed;break;case La:case Ma:case Pa:T=yd;break;case Ra:T=_d;break;case"scroll":T=cd;break;case"wheel":T=Id;break;case"copy":case"cut":case"paste":T=vd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":T=va}var E=(t&4)!==0,he=!E&&e==="scroll",f=E?g!==null?g+"Capture":null:g;E=[];for(var d=m,p;d!==null;){p=d;var S=p.stateNode;if(p.tag===5&&S!==null&&(p=S,f!==null&&(S=Mn(d,f),S!=null&&E.push(rr(d,S,p)))),he)break;d=d.return}0<E.length&&(g=new T(g,F,null,n,w),x.push({event:g,listeners:E}))}}if((t&7)===0){e:{if(g=e==="mouseover"||e==="pointerover",T=e==="mouseout"||e==="pointerout",g&&n!==Ro&&(F=n.relatedTarget||n.fromElement)&&(Qt(F)||F[kt]))break e;if((T||g)&&(g=w.window===w?w:(g=w.ownerDocument)?g.defaultView||g.parentWindow:window,T?(F=n.relatedTarget||n.toElement,T=m,F=F?Qt(F):null,F!==null&&(he=$t(F),F!==he||F.tag!==5&&F.tag!==6)&&(F=null)):(T=null,F=m),T!==F)){if(E=ya,S="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(E=va,S="onPointerLeave",f="onPointerEnter",d="pointer"),he=T==null?g:kn(T),p=F==null?g:kn(F),g=new E(S,d+"leave",T,n,w),g.target=he,g.relatedTarget=p,S=null,Qt(w)===m&&(E=new E(f,d+"enter",F,n,w),E.target=p,E.relatedTarget=he,S=E),he=S,T&&F)t:{for(E=T,f=F,d=0,p=E;p;p=wn(p))d++;for(p=0,S=f;S;S=wn(S))p++;for(;0<d-p;)E=wn(E),d--;for(;0<p-d;)f=wn(f),p--;for(;d--;){if(E===f||f!==null&&E===f.alternate)break t;E=wn(E),f=wn(f)}E=null}else E=null;T!==null&&Ua(x,g,T,E,!1),F!==null&&he!==null&&Ua(x,he,F,E,!0)}}e:{if(g=m?kn(m):window,T=g.nodeName&&g.nodeName.toLowerCase(),T==="select"||T==="input"&&g.type==="file")var j=Rd;else if(Aa(g))if(ba)j=Xd;else{j=Bd;var V=Od}else(T=g.nodeName)&&T.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(j=Zd);if(j&&(j=j(e,m))){Ca(x,j,n,w);break e}V&&V(e,g,m),e==="focusout"&&(V=g._wrapperState)&&V.controlled&&g.type==="number"&&Vo(g,"number",g.value)}switch(V=m?kn(m):window,e){case"focusin":(Aa(V)||V.contentEditable==="true")&&(gn=V,di=m,er=null);break;case"focusout":er=di=gn=null;break;case"mousedown":hi=!0;break;case"contextmenu":case"mouseup":case"dragend":hi=!1,Va(x,n,w);break;case"selectionchange":if(Gd)break;case"keydown":case"keyup":Va(x,n,w)}var D;if(li)e:{switch(e){case"compositionstart":var M="onCompositionStart";break e;case"compositionend":M="onCompositionEnd";break e;case"compositionupdate":M="onCompositionUpdate";break e}M=void 0}else mn?Na(e,n)&&(M="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(M="onCompositionStart");M&&(ka&&n.locale!=="ko"&&(mn||M!=="onCompositionStart"?M==="onCompositionEnd"&&mn&&(D=ma()):(It=w,ei="value"in It?It.value:It.textContent,mn=!0)),V=Zr(m,M),0<V.length&&(M=new wa(M,e,null,n,w),x.push({event:M,listeners:V}),D?M.data=D:(D=Ta(n),D!==null&&(M.data=D)))),(D=Vd?Dd(e,n):Ld(e,n))&&(m=Zr(m,"onBeforeInput"),0<m.length&&(w=new wa("onBeforeInput","beforeinput",null,n,w),x.push({event:w,listeners:m}),w.data=D))}Xa(x,t)})}function rr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Zr(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Mn(e,n),i!=null&&r.unshift(rr(e,i,o)),i=Mn(e,t),i!=null&&r.push(rr(e,i,o))),e=e.return}return r}function wn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ua(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var s=n,u=s.alternate,m=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&m!==null&&(s=m,o?(u=Mn(n,i),u!=null&&l.unshift(rr(n,u,s))):o||(u=Mn(n,i),u!=null&&l.push(rr(n,u,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Jd=/\r\n?/g,Kd=/\u0000|\uFFFD/g;function Ga(e){return(typeof e=="string"?e:""+e).replace(Jd,`
`).replace(Kd,"")}function Xr(e,t,n){if(t=Ga(t),Ga(e)!==t&&n)throw Error(c(425))}function Wr(){}var yi=null,wi=null;function vi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ki=typeof setTimeout=="function"?setTimeout:void 0,qd=typeof clearTimeout=="function"?clearTimeout:void 0,Ya=typeof Promise=="function"?Promise:void 0,eh=typeof queueMicrotask=="function"?queueMicrotask:typeof Ya<"u"?function(e){return Ya.resolve(null).then(e).catch(th)}:ki;function th(e){setTimeout(function(){throw e})}function xi(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Gn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Gn(t)}function Vt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function $a(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var vn=Math.random().toString(36).slice(2),pt="__reactFiber$"+vn,or="__reactProps$"+vn,kt="__reactContainer$"+vn,Si="__reactEvents$"+vn,nh="__reactListeners$"+vn,rh="__reactHandles$"+vn;function Qt(e){var t=e[pt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[kt]||n[pt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=$a(e);e!==null;){if(n=e[pt])return n;e=$a(e)}return t}e=n,n=e.parentNode}return null}function ir(e){return e=e[pt]||e[kt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function kn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(c(33))}function Ur(e){return e[or]||null}var Ni=[],xn=-1;function Dt(e){return{current:e}}function ne(e){0>xn||(e.current=Ni[xn],Ni[xn]=null,xn--)}function ee(e,t){xn++,Ni[xn]=e.current,e.current=t}var Lt={},Te=Dt(Lt),Ie=Dt(!1),Jt=Lt;function Sn(e,t){var n=e.type.contextTypes;if(!n)return Lt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function He(e){return e=e.childContextTypes,e!=null}function Gr(){ne(Ie),ne(Te)}function Qa(e,t,n){if(Te.current!==Lt)throw Error(c(168));ee(Te,t),ee(Ie,n)}function Ja(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(c(108,q(e)||"Unknown",o));return C({},n,r)}function Yr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Lt,Jt=Te.current,ee(Te,e),ee(Ie,Ie.current),!0}function Ka(e,t,n){var r=e.stateNode;if(!r)throw Error(c(169));n?(e=Ja(e,t,Jt),r.__reactInternalMemoizedMergedChildContext=e,ne(Ie),ne(Te),ee(Te,e)):ne(Ie),ee(Ie,n)}var xt=null,$r=!1,Ti=!1;function qa(e){xt===null?xt=[e]:xt.push(e)}function oh(e){$r=!0,qa(e)}function Mt(){if(!Ti&&xt!==null){Ti=!0;var e=0,t=Q;try{var n=xt;for(Q=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}xt=null,$r=!1}catch(o){throw xt!==null&&(xt=xt.slice(e+1)),ta(Uo,Mt),o}finally{Q=t,Ti=!1}}return null}var Nn=[],Tn=0,Qr=null,Jr=0,Ye=[],$e=0,Kt=null,St=1,Nt="";function qt(e,t){Nn[Tn++]=Jr,Nn[Tn++]=Qr,Qr=e,Jr=t}function es(e,t,n){Ye[$e++]=St,Ye[$e++]=Nt,Ye[$e++]=Kt,Kt=e;var r=St;e=Nt;var o=32-rt(r)-1;r&=~(1<<o),n+=1;var i=32-rt(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,St=1<<32-rt(t)+o|n<<o|r,Nt=i+e}else St=1<<i|n<<o|r,Nt=e}function Ai(e){e.return!==null&&(qt(e,1),es(e,1,0))}function Ci(e){for(;e===Qr;)Qr=Nn[--Tn],Nn[Tn]=null,Jr=Nn[--Tn],Nn[Tn]=null;for(;e===Kt;)Kt=Ye[--$e],Ye[$e]=null,Nt=Ye[--$e],Ye[$e]=null,St=Ye[--$e],Ye[$e]=null}var Be=null,Ze=null,ie=!1,it=null;function ts(e,t){var n=qe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ns(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Be=e,Ze=Vt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Be=e,Ze=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Kt!==null?{id:St,overflow:Nt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=qe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Be=e,Ze=null,!0):!1;default:return!1}}function bi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Fi(e){if(ie){var t=Ze;if(t){var n=t;if(!ns(e,t)){if(bi(e))throw Error(c(418));t=Vt(n.nextSibling);var r=Be;t&&ns(e,t)?ts(r,n):(e.flags=e.flags&-4097|2,ie=!1,Be=e)}}else{if(bi(e))throw Error(c(418));e.flags=e.flags&-4097|2,ie=!1,Be=e}}}function rs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Be=e}function Kr(e){if(e!==Be)return!1;if(!ie)return rs(e),ie=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!vi(e.type,e.memoizedProps)),t&&(t=Ze)){if(bi(e))throw os(),Error(c(418));for(;t;)ts(e,t),t=Vt(t.nextSibling)}if(rs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ze=Vt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ze=null}}else Ze=Be?Vt(e.stateNode.nextSibling):null;return!0}function os(){for(var e=Ze;e;)e=Vt(e.nextSibling)}function An(){Ze=Be=null,ie=!1}function Ei(e){it===null?it=[e]:it.push(e)}var ih=Ne.ReactCurrentBatchConfig;function lr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(c(309));var r=n.stateNode}if(!r)throw Error(c(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var s=o.refs;l===null?delete s[i]:s[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(c(284));if(!n._owner)throw Error(c(290,e))}return e}function qr(e,t){throw e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function is(e){var t=e._init;return t(e._payload)}function ls(e){function t(f,d){if(e){var p=f.deletions;p===null?(f.deletions=[d],f.flags|=16):p.push(d)}}function n(f,d){if(!e)return null;for(;d!==null;)t(f,d),d=d.sibling;return null}function r(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function o(f,d){return f=Ut(f,d),f.index=0,f.sibling=null,f}function i(f,d,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<d?(f.flags|=2,d):p):(f.flags|=2,d)):(f.flags|=1048576,d)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,d,p,S){return d===null||d.tag!==6?(d=kl(p,f.mode,S),d.return=f,d):(d=o(d,p),d.return=f,d)}function u(f,d,p,S){var j=p.type;return j===_e?w(f,d,p.props.children,S,p.key):d!==null&&(d.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===ze&&is(j)===d.type)?(S=o(d,p.props),S.ref=lr(f,d,p),S.return=f,S):(S=To(p.type,p.key,p.props,null,f.mode,S),S.ref=lr(f,d,p),S.return=f,S)}function m(f,d,p,S){return d===null||d.tag!==4||d.stateNode.containerInfo!==p.containerInfo||d.stateNode.implementation!==p.implementation?(d=xl(p,f.mode,S),d.return=f,d):(d=o(d,p.children||[]),d.return=f,d)}function w(f,d,p,S,j){return d===null||d.tag!==7?(d=sn(p,f.mode,S,j),d.return=f,d):(d=o(d,p),d.return=f,d)}function x(f,d,p){if(typeof d=="string"&&d!==""||typeof d=="number")return d=kl(""+d,f.mode,p),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case tt:return p=To(d.type,d.key,d.props,null,f.mode,p),p.ref=lr(f,null,d),p.return=f,p;case Fe:return d=xl(d,f.mode,p),d.return=f,d;case ze:var S=d._init;return x(f,S(d._payload),p)}if(Vn(d)||L(d))return d=sn(d,f.mode,p,null),d.return=f,d;qr(f,d)}return null}function g(f,d,p,S){var j=d!==null?d.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return j!==null?null:s(f,d,""+p,S);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case tt:return p.key===j?u(f,d,p,S):null;case Fe:return p.key===j?m(f,d,p,S):null;case ze:return j=p._init,g(f,d,j(p._payload),S)}if(Vn(p)||L(p))return j!==null?null:w(f,d,p,S,null);qr(f,p)}return null}function T(f,d,p,S,j){if(typeof S=="string"&&S!==""||typeof S=="number")return f=f.get(p)||null,s(d,f,""+S,j);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case tt:return f=f.get(S.key===null?p:S.key)||null,u(d,f,S,j);case Fe:return f=f.get(S.key===null?p:S.key)||null,m(d,f,S,j);case ze:var V=S._init;return T(f,d,p,V(S._payload),j)}if(Vn(S)||L(S))return f=f.get(p)||null,w(d,f,S,j,null);qr(d,S)}return null}function F(f,d,p,S){for(var j=null,V=null,D=d,M=d=0,ke=null;D!==null&&M<p.length;M++){D.index>M?(ke=D,D=null):ke=D.sibling;var Y=g(f,D,p[M],S);if(Y===null){D===null&&(D=ke);break}e&&D&&Y.alternate===null&&t(f,D),d=i(Y,d,M),V===null?j=Y:V.sibling=Y,V=Y,D=ke}if(M===p.length)return n(f,D),ie&&qt(f,M),j;if(D===null){for(;M<p.length;M++)D=x(f,p[M],S),D!==null&&(d=i(D,d,M),V===null?j=D:V.sibling=D,V=D);return ie&&qt(f,M),j}for(D=r(f,D);M<p.length;M++)ke=T(D,f,M,p[M],S),ke!==null&&(e&&ke.alternate!==null&&D.delete(ke.key===null?M:ke.key),d=i(ke,d,M),V===null?j=ke:V.sibling=ke,V=ke);return e&&D.forEach(function(Gt){return t(f,Gt)}),ie&&qt(f,M),j}function E(f,d,p,S){var j=L(p);if(typeof j!="function")throw Error(c(150));if(p=j.call(p),p==null)throw Error(c(151));for(var V=j=null,D=d,M=d=0,ke=null,Y=p.next();D!==null&&!Y.done;M++,Y=p.next()){D.index>M?(ke=D,D=null):ke=D.sibling;var Gt=g(f,D,Y.value,S);if(Gt===null){D===null&&(D=ke);break}e&&D&&Gt.alternate===null&&t(f,D),d=i(Gt,d,M),V===null?j=Gt:V.sibling=Gt,V=Gt,D=ke}if(Y.done)return n(f,D),ie&&qt(f,M),j;if(D===null){for(;!Y.done;M++,Y=p.next())Y=x(f,Y.value,S),Y!==null&&(d=i(Y,d,M),V===null?j=Y:V.sibling=Y,V=Y);return ie&&qt(f,M),j}for(D=r(f,D);!Y.done;M++,Y=p.next())Y=T(D,f,M,Y.value,S),Y!==null&&(e&&Y.alternate!==null&&D.delete(Y.key===null?M:Y.key),d=i(Y,d,M),V===null?j=Y:V.sibling=Y,V=Y);return e&&D.forEach(function(Mh){return t(f,Mh)}),ie&&qt(f,M),j}function he(f,d,p,S){if(typeof p=="object"&&p!==null&&p.type===_e&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case tt:e:{for(var j=p.key,V=d;V!==null;){if(V.key===j){if(j=p.type,j===_e){if(V.tag===7){n(f,V.sibling),d=o(V,p.props.children),d.return=f,f=d;break e}}else if(V.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===ze&&is(j)===V.type){n(f,V.sibling),d=o(V,p.props),d.ref=lr(f,V,p),d.return=f,f=d;break e}n(f,V);break}else t(f,V);V=V.sibling}p.type===_e?(d=sn(p.props.children,f.mode,S,p.key),d.return=f,f=d):(S=To(p.type,p.key,p.props,null,f.mode,S),S.ref=lr(f,d,p),S.return=f,f=S)}return l(f);case Fe:e:{for(V=p.key;d!==null;){if(d.key===V)if(d.tag===4&&d.stateNode.containerInfo===p.containerInfo&&d.stateNode.implementation===p.implementation){n(f,d.sibling),d=o(d,p.children||[]),d.return=f,f=d;break e}else{n(f,d);break}else t(f,d);d=d.sibling}d=xl(p,f.mode,S),d.return=f,f=d}return l(f);case ze:return V=p._init,he(f,d,V(p._payload),S)}if(Vn(p))return F(f,d,p,S);if(L(p))return E(f,d,p,S);qr(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,d!==null&&d.tag===6?(n(f,d.sibling),d=o(d,p),d.return=f,f=d):(n(f,d),d=kl(p,f.mode,S),d.return=f,f=d),l(f)):n(f,d)}return he}var Cn=ls(!0),as=ls(!1),eo=Dt(null),to=null,bn=null,ji=null;function _i(){ji=bn=to=null}function zi(e){var t=eo.current;ne(eo),e._currentValue=t}function Ii(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Fn(e,t){to=e,ji=bn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Ve=!0),e.firstContext=null)}function Qe(e){var t=e._currentValue;if(ji!==e)if(e={context:e,memoizedValue:t,next:null},bn===null){if(to===null)throw Error(c(308));bn=e,to.dependencies={lanes:0,firstContext:e}}else bn=bn.next=e;return t}var en=null;function Hi(e){en===null?en=[e]:en.push(e)}function ss(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Hi(t)):(n.next=o.next,o.next=n),t.interleaved=n,Tt(e,r)}function Tt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Pt=!1;function Vi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function us(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function At(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Rt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(W&2)!==0){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Tt(e,n)}return o=r.interleaved,o===null?(t.next=t,Hi(r)):(t.next=o.next,o.next=t),r.interleaved=t,Tt(e,n)}function no(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,$o(e,n)}}function ds(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ro(e,t,n,r){var o=e.updateQueue;Pt=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var u=s,m=u.next;u.next=null,l===null?i=m:l.next=m,l=u;var w=e.alternate;w!==null&&(w=w.updateQueue,s=w.lastBaseUpdate,s!==l&&(s===null?w.firstBaseUpdate=m:s.next=m,w.lastBaseUpdate=u))}if(i!==null){var x=o.baseState;l=0,w=m=u=null,s=i;do{var g=s.lane,T=s.eventTime;if((r&g)===g){w!==null&&(w=w.next={eventTime:T,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var F=e,E=s;switch(g=t,T=n,E.tag){case 1:if(F=E.payload,typeof F=="function"){x=F.call(T,x,g);break e}x=F;break e;case 3:F.flags=F.flags&-65537|128;case 0:if(F=E.payload,g=typeof F=="function"?F.call(T,x,g):F,g==null)break e;x=C({},x,g);break e;case 2:Pt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,g=o.effects,g===null?o.effects=[s]:g.push(s))}else T={eventTime:T,lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},w===null?(m=w=T,u=x):w=w.next=T,l|=g;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;g=s,s=g.next,g.next=null,o.lastBaseUpdate=g,o.shared.pending=null}}while(!0);if(w===null&&(u=x),o.baseState=u,o.firstBaseUpdate=m,o.lastBaseUpdate=w,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);rn|=l,e.lanes=l,e.memoizedState=x}}function hs(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(c(191,o));o.call(r)}}}var ar={},mt=Dt(ar),sr=Dt(ar),ur=Dt(ar);function tn(e){if(e===ar)throw Error(c(174));return e}function Di(e,t){switch(ee(ur,t),ee(sr,e),ee(mt,ar),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Lo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Lo(t,e)}ne(mt),ee(mt,t)}function En(){ne(mt),ne(sr),ne(ur)}function cs(e){tn(ur.current);var t=tn(mt.current),n=Lo(t,e.type);t!==n&&(ee(sr,e),ee(mt,n))}function Li(e){sr.current===e&&(ne(mt),ne(sr))}var le=Dt(0);function oo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Mi=[];function Pi(){for(var e=0;e<Mi.length;e++)Mi[e]._workInProgressVersionPrimary=null;Mi.length=0}var io=Ne.ReactCurrentDispatcher,Ri=Ne.ReactCurrentBatchConfig,nn=0,ae=null,ge=null,we=null,lo=!1,dr=!1,hr=0,lh=0;function Ae(){throw Error(c(321))}function Oi(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ot(e[n],t[n]))return!1;return!0}function Bi(e,t,n,r,o,i){if(nn=i,ae=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,io.current=e===null||e.memoizedState===null?dh:hh,e=n(r,o),dr){i=0;do{if(dr=!1,hr=0,25<=i)throw Error(c(301));i+=1,we=ge=null,t.updateQueue=null,io.current=ch,e=n(r,o)}while(dr)}if(io.current=uo,t=ge!==null&&ge.next!==null,nn=0,we=ge=ae=null,lo=!1,t)throw Error(c(300));return e}function Zi(){var e=hr!==0;return hr=0,e}function gt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return we===null?ae.memoizedState=we=e:we=we.next=e,we}function Je(){if(ge===null){var e=ae.alternate;e=e!==null?e.memoizedState:null}else e=ge.next;var t=we===null?ae.memoizedState:we.next;if(t!==null)we=t,ge=e;else{if(e===null)throw Error(c(310));ge=e,e={memoizedState:ge.memoizedState,baseState:ge.baseState,baseQueue:ge.baseQueue,queue:ge.queue,next:null},we===null?ae.memoizedState=we=e:we=we.next=e}return we}function cr(e,t){return typeof t=="function"?t(e):t}function Xi(e){var t=Je(),n=t.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=e;var r=ge,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=l=null,u=null,m=i;do{var w=m.lane;if((nn&w)===w)u!==null&&(u=u.next={lane:0,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null}),r=m.hasEagerState?m.eagerState:e(r,m.action);else{var x={lane:w,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null};u===null?(s=u=x,l=r):u=u.next=x,ae.lanes|=w,rn|=w}m=m.next}while(m!==null&&m!==i);u===null?l=r:u.next=s,ot(r,t.memoizedState)||(Ve=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,ae.lanes|=i,rn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Wi(e){var t=Je(),n=t.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);ot(i,t.memoizedState)||(Ve=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function fs(){}function ps(e,t){var n=ae,r=Je(),o=t(),i=!ot(r.memoizedState,o);if(i&&(r.memoizedState=o,Ve=!0),r=r.queue,Ui(ys.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||we!==null&&we.memoizedState.tag&1){if(n.flags|=2048,fr(9,gs.bind(null,n,r,o,t),void 0,null),ve===null)throw Error(c(349));(nn&30)!==0||ms(n,t,o)}return o}function ms(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ae.updateQueue,t===null?(t={lastEffect:null,stores:null},ae.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function gs(e,t,n,r){t.value=n,t.getSnapshot=r,ws(t)&&vs(e)}function ys(e,t,n){return n(function(){ws(t)&&vs(e)})}function ws(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ot(e,n)}catch{return!0}}function vs(e){var t=Tt(e,1);t!==null&&ut(t,e,1,-1)}function ks(e){var t=gt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:cr,lastRenderedState:e},t.queue=e,e=e.dispatch=uh.bind(null,ae,e),[t.memoizedState,e]}function fr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ae.updateQueue,t===null?(t={lastEffect:null,stores:null},ae.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function xs(){return Je().memoizedState}function ao(e,t,n,r){var o=gt();ae.flags|=e,o.memoizedState=fr(1|t,n,void 0,r===void 0?null:r)}function so(e,t,n,r){var o=Je();r=r===void 0?null:r;var i=void 0;if(ge!==null){var l=ge.memoizedState;if(i=l.destroy,r!==null&&Oi(r,l.deps)){o.memoizedState=fr(t,n,i,r);return}}ae.flags|=e,o.memoizedState=fr(1|t,n,i,r)}function Ss(e,t){return ao(8390656,8,e,t)}function Ui(e,t){return so(2048,8,e,t)}function Ns(e,t){return so(4,2,e,t)}function Ts(e,t){return so(4,4,e,t)}function As(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Cs(e,t,n){return n=n!=null?n.concat([e]):null,so(4,4,As.bind(null,t,e),n)}function Gi(){}function bs(e,t){var n=Je();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Oi(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Fs(e,t){var n=Je();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Oi(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Es(e,t,n){return(nn&21)===0?(e.baseState&&(e.baseState=!1,Ve=!0),e.memoizedState=n):(ot(n,t)||(n=ia(),ae.lanes|=n,rn|=n,e.baseState=!0),t)}function ah(e,t){var n=Q;Q=n!==0&&4>n?n:4,e(!0);var r=Ri.transition;Ri.transition={};try{e(!1),t()}finally{Q=n,Ri.transition=r}}function js(){return Je().memoizedState}function sh(e,t,n){var r=Xt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},_s(e))zs(t,n);else if(n=ss(e,t,n,r),n!==null){var o=je();ut(n,e,r,o),Is(n,t,r)}}function uh(e,t,n){var r=Xt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(_s(e))zs(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,s=i(l,n);if(o.hasEagerState=!0,o.eagerState=s,ot(s,l)){var u=t.interleaved;u===null?(o.next=o,Hi(t)):(o.next=u.next,u.next=o),t.interleaved=o;return}}catch{}finally{}n=ss(e,t,o,r),n!==null&&(o=je(),ut(n,e,r,o),Is(n,t,r))}}function _s(e){var t=e.alternate;return e===ae||t!==null&&t===ae}function zs(e,t){dr=lo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Is(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,$o(e,n)}}var uo={readContext:Qe,useCallback:Ae,useContext:Ae,useEffect:Ae,useImperativeHandle:Ae,useInsertionEffect:Ae,useLayoutEffect:Ae,useMemo:Ae,useReducer:Ae,useRef:Ae,useState:Ae,useDebugValue:Ae,useDeferredValue:Ae,useTransition:Ae,useMutableSource:Ae,useSyncExternalStore:Ae,useId:Ae,unstable_isNewReconciler:!1},dh={readContext:Qe,useCallback:function(e,t){return gt().memoizedState=[e,t===void 0?null:t],e},useContext:Qe,useEffect:Ss,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ao(4194308,4,As.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ao(4194308,4,e,t)},useInsertionEffect:function(e,t){return ao(4,2,e,t)},useMemo:function(e,t){var n=gt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=gt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=sh.bind(null,ae,e),[r.memoizedState,e]},useRef:function(e){var t=gt();return e={current:e},t.memoizedState=e},useState:ks,useDebugValue:Gi,useDeferredValue:function(e){return gt().memoizedState=e},useTransition:function(){var e=ks(!1),t=e[0];return e=ah.bind(null,e[1]),gt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ae,o=gt();if(ie){if(n===void 0)throw Error(c(407));n=n()}else{if(n=t(),ve===null)throw Error(c(349));(nn&30)!==0||ms(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Ss(ys.bind(null,r,i,e),[e]),r.flags|=2048,fr(9,gs.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=gt(),t=ve.identifierPrefix;if(ie){var n=Nt,r=St;n=(r&~(1<<32-rt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=hr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=lh++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},hh={readContext:Qe,useCallback:bs,useContext:Qe,useEffect:Ui,useImperativeHandle:Cs,useInsertionEffect:Ns,useLayoutEffect:Ts,useMemo:Fs,useReducer:Xi,useRef:xs,useState:function(){return Xi(cr)},useDebugValue:Gi,useDeferredValue:function(e){var t=Je();return Es(t,ge.memoizedState,e)},useTransition:function(){var e=Xi(cr)[0],t=Je().memoizedState;return[e,t]},useMutableSource:fs,useSyncExternalStore:ps,useId:js,unstable_isNewReconciler:!1},ch={readContext:Qe,useCallback:bs,useContext:Qe,useEffect:Ui,useImperativeHandle:Cs,useInsertionEffect:Ns,useLayoutEffect:Ts,useMemo:Fs,useReducer:Wi,useRef:xs,useState:function(){return Wi(cr)},useDebugValue:Gi,useDeferredValue:function(e){var t=Je();return ge===null?t.memoizedState=e:Es(t,ge.memoizedState,e)},useTransition:function(){var e=Wi(cr)[0],t=Je().memoizedState;return[e,t]},useMutableSource:fs,useSyncExternalStore:ps,useId:js,unstable_isNewReconciler:!1};function lt(e,t){if(e&&e.defaultProps){t=C({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Yi(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:C({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ho={isMounted:function(e){return(e=e._reactInternals)?$t(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=je(),o=Xt(e),i=At(r,o);i.payload=t,n!=null&&(i.callback=n),t=Rt(e,i,o),t!==null&&(ut(t,e,o,r),no(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=je(),o=Xt(e),i=At(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Rt(e,i,o),t!==null&&(ut(t,e,o,r),no(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=je(),r=Xt(e),o=At(n,r);o.tag=2,t!=null&&(o.callback=t),t=Rt(e,o,r),t!==null&&(ut(t,e,r,n),no(t,e,r))}};function Hs(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!qn(n,r)||!qn(o,i):!0}function Vs(e,t,n){var r=!1,o=Lt,i=t.contextType;return typeof i=="object"&&i!==null?i=Qe(i):(o=He(t)?Jt:Te.current,r=t.contextTypes,i=(r=r!=null)?Sn(e,o):Lt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ho,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Ds(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ho.enqueueReplaceState(t,t.state,null)}function $i(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Vi(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Qe(i):(i=He(t)?Jt:Te.current,o.context=Sn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Yi(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&ho.enqueueReplaceState(o,o.state,null),ro(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function jn(e,t){try{var n="",r=t;do n+=U(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Qi(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ji(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var fh=typeof WeakMap=="function"?WeakMap:Map;function Ls(e,t,n){n=At(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){wo||(wo=!0,cl=r),Ji(e,t)},n}function Ms(e,t,n){n=At(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Ji(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Ji(e,t),typeof r!="function"&&(Bt===null?Bt=new Set([this]):Bt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Ps(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new fh;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=bh.bind(null,e,t,n),t.then(e,e))}function Rs(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Os(e,t,n,r,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=At(-1,1),t.tag=2,Rt(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var ph=Ne.ReactCurrentOwner,Ve=!1;function Ee(e,t,n,r){t.child=e===null?as(t,null,n,r):Cn(t,e.child,n,r)}function Bs(e,t,n,r,o){n=n.render;var i=t.ref;return Fn(t,o),r=Bi(e,t,n,r,i,o),n=Zi(),e!==null&&!Ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ct(e,t,o)):(ie&&n&&Ai(t),t.flags|=1,Ee(e,t,r,o),t.child)}function Zs(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!vl(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Xs(e,t,i,r,o)):(e=To(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,(e.lanes&o)===0){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:qn,n(l,r)&&e.ref===t.ref)return Ct(e,t,o)}return t.flags|=1,e=Ut(i,r),e.ref=t.ref,e.return=t,t.child=e}function Xs(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(qn(i,r)&&e.ref===t.ref)if(Ve=!1,t.pendingProps=r=i,(e.lanes&o)!==0)(e.flags&131072)!==0&&(Ve=!0);else return t.lanes=e.lanes,Ct(e,t,o)}return Ki(e,t,n,r,o)}function Ws(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ee(zn,Xe),Xe|=n;else{if((n&1073741824)===0)return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ee(zn,Xe),Xe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,ee(zn,Xe),Xe|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,ee(zn,Xe),Xe|=r;return Ee(e,t,o,n),t.child}function Us(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ki(e,t,n,r,o){var i=He(n)?Jt:Te.current;return i=Sn(t,i),Fn(t,o),n=Bi(e,t,n,r,i,o),r=Zi(),e!==null&&!Ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ct(e,t,o)):(ie&&r&&Ai(t),t.flags|=1,Ee(e,t,n,o),t.child)}function Gs(e,t,n,r,o){if(He(n)){var i=!0;Yr(t)}else i=!1;if(Fn(t,o),t.stateNode===null)fo(e,t),Vs(t,n,r),$i(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var u=l.context,m=n.contextType;typeof m=="object"&&m!==null?m=Qe(m):(m=He(n)?Jt:Te.current,m=Sn(t,m));var w=n.getDerivedStateFromProps,x=typeof w=="function"||typeof l.getSnapshotBeforeUpdate=="function";x||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||u!==m)&&Ds(t,l,r,m),Pt=!1;var g=t.memoizedState;l.state=g,ro(t,r,l,o),u=t.memoizedState,s!==r||g!==u||Ie.current||Pt?(typeof w=="function"&&(Yi(t,n,w,r),u=t.memoizedState),(s=Pt||Hs(t,n,s,r,g,u,m))?(x||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),l.props=r,l.state=u,l.context=m,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,us(e,t),s=t.memoizedProps,m=t.type===t.elementType?s:lt(t.type,s),l.props=m,x=t.pendingProps,g=l.context,u=n.contextType,typeof u=="object"&&u!==null?u=Qe(u):(u=He(n)?Jt:Te.current,u=Sn(t,u));var T=n.getDerivedStateFromProps;(w=typeof T=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==x||g!==u)&&Ds(t,l,r,u),Pt=!1,g=t.memoizedState,l.state=g,ro(t,r,l,o);var F=t.memoizedState;s!==x||g!==F||Ie.current||Pt?(typeof T=="function"&&(Yi(t,n,T,r),F=t.memoizedState),(m=Pt||Hs(t,n,m,r,g,F,u)||!1)?(w||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,F,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,F,u)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=F),l.props=r,l.state=F,l.context=u,r=m):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return qi(e,t,n,r,i,o)}function qi(e,t,n,r,o,i){Us(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&Ka(t,n,!1),Ct(e,t,i);r=t.stateNode,ph.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Cn(t,e.child,null,i),t.child=Cn(t,null,s,i)):Ee(e,t,s,i),t.memoizedState=r.state,o&&Ka(t,n,!0),t.child}function Ys(e){var t=e.stateNode;t.pendingContext?Qa(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Qa(e,t.context,!1),Di(e,t.containerInfo)}function $s(e,t,n,r,o){return An(),Ei(o),t.flags|=256,Ee(e,t,n,r),t.child}var el={dehydrated:null,treeContext:null,retryLane:0};function tl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Qs(e,t,n){var r=t.pendingProps,o=le.current,i=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),ee(le,o&1),e===null)return Fi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},(r&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=l):i=Ao(l,r,0,null),e=sn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=tl(n),t.memoizedState=el,e):nl(t,l));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return mh(e,t,l,r,s,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,s=o.sibling;var u={mode:"hidden",children:r.children};return(l&1)===0&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Ut(o,u),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=Ut(s,i):(i=sn(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?tl(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=el,r}return i=e.child,e=i.sibling,r=Ut(i,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function nl(e,t){return t=Ao({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function co(e,t,n,r){return r!==null&&Ei(r),Cn(t,e.child,null,n),e=nl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function mh(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=Qi(Error(c(422))),co(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Ao({mode:"visible",children:r.children},o,0,null),i=sn(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,(t.mode&1)!==0&&Cn(t,e.child,null,l),t.child.memoizedState=tl(l),t.memoizedState=el,i);if((t.mode&1)===0)return co(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(c(419)),r=Qi(i,r,void 0),co(e,t,l,r)}if(s=(l&e.childLanes)!==0,Ve||s){if(r=ve,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|l))!==0?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Tt(e,o),ut(r,e,o,-1))}return wl(),r=Qi(Error(c(421))),co(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Fh.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Ze=Vt(o.nextSibling),Be=t,ie=!0,it=null,e!==null&&(Ye[$e++]=St,Ye[$e++]=Nt,Ye[$e++]=Kt,St=e.id,Nt=e.overflow,Kt=t),t=nl(t,r.children),t.flags|=4096,t)}function Js(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ii(e.return,t,n)}function rl(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Ks(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Ee(e,t,r.children,n),r=le.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Js(e,n,t);else if(e.tag===19)Js(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ee(le,r),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&oo(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),rl(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&oo(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}rl(t,!0,n,null,i);break;case"together":rl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function fo(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ct(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),rn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,n=Ut(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ut(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function gh(e,t,n){switch(t.tag){case 3:Ys(t),An();break;case 5:cs(t);break;case 1:He(t.type)&&Yr(t);break;case 4:Di(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;ee(eo,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ee(le,le.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Qs(e,t,n):(ee(le,le.current&1),e=Ct(e,t,n),e!==null?e.sibling:null);ee(le,le.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Ks(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),ee(le,le.current),r)break;return null;case 22:case 23:return t.lanes=0,Ws(e,t,n)}return Ct(e,t,n)}var qs,ol,eu,tu;qs=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},ol=function(){},eu=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,tn(mt.current);var i=null;switch(n){case"input":o=Io(e,o),r=Io(e,r),i=[];break;case"select":o=C({},o,{value:void 0}),r=C({},r,{value:void 0}),i=[];break;case"textarea":o=Do(e,o),r=Do(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Wr)}Mo(n,r);var l;n=null;for(m in o)if(!r.hasOwnProperty(m)&&o.hasOwnProperty(m)&&o[m]!=null)if(m==="style"){var s=o[m];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else m!=="dangerouslySetInnerHTML"&&m!=="children"&&m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(I.hasOwnProperty(m)?i||(i=[]):(i=i||[]).push(m,null));for(m in r){var u=r[m];if(s=o?.[m],r.hasOwnProperty(m)&&u!==s&&(u!=null||s!=null))if(m==="style")if(s){for(l in s)!s.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in u)u.hasOwnProperty(l)&&s[l]!==u[l]&&(n||(n={}),n[l]=u[l])}else n||(i||(i=[]),i.push(m,n)),n=u;else m==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(i=i||[]).push(m,u)):m==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(m,""+u):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&(I.hasOwnProperty(m)?(u!=null&&m==="onScroll"&&te("scroll",e),i||s===u||(i=[])):(i=i||[]).push(m,u))}n&&(i=i||[]).push("style",n);var m=i;(t.updateQueue=m)&&(t.flags|=4)}},tu=function(e,t,n,r){n!==r&&(t.flags|=4)};function pr(e,t){if(!ie)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ce(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function yh(e,t,n){var r=t.pendingProps;switch(Ci(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ce(t),null;case 1:return He(t.type)&&Gr(),Ce(t),null;case 3:return r=t.stateNode,En(),ne(Ie),ne(Te),Pi(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Kr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,it!==null&&(ml(it),it=null))),ol(e,t),Ce(t),null;case 5:Li(t);var o=tn(ur.current);if(n=t.type,e!==null&&t.stateNode!=null)eu(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(c(166));return Ce(t),null}if(e=tn(mt.current),Kr(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[pt]=t,r[or]=i,e=(t.mode&1)!==0,n){case"dialog":te("cancel",r),te("close",r);break;case"iframe":case"object":case"embed":te("load",r);break;case"video":case"audio":for(o=0;o<tr.length;o++)te(tr[o],r);break;case"source":te("error",r);break;case"img":case"image":case"link":te("error",r),te("load",r);break;case"details":te("toggle",r);break;case"input":Vl(r,i),te("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},te("invalid",r);break;case"textarea":Ml(r,i),te("invalid",r)}Mo(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var s=i[l];l==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&Xr(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&Xr(r.textContent,s,e),o=["children",""+s]):I.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&te("scroll",r)}switch(n){case"input":xr(r),Ll(r,i,!0);break;case"textarea":xr(r),Rl(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Wr)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ol(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[pt]=t,e[or]=r,qs(e,t,!1,!1),t.stateNode=e;e:{switch(l=Po(n,r),n){case"dialog":te("cancel",e),te("close",e),o=r;break;case"iframe":case"object":case"embed":te("load",e),o=r;break;case"video":case"audio":for(o=0;o<tr.length;o++)te(tr[o],e);o=r;break;case"source":te("error",e),o=r;break;case"img":case"image":case"link":te("error",e),te("load",e),o=r;break;case"details":te("toggle",e),o=r;break;case"input":Vl(e,r),o=Io(e,r),te("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=C({},r,{value:void 0}),te("invalid",e);break;case"textarea":Ml(e,r),o=Do(e,r),te("invalid",e);break;default:o=r}Mo(n,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var u=s[i];i==="style"?Xl(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Bl(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Dn(e,u):typeof u=="number"&&Dn(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(I.hasOwnProperty(i)?u!=null&&i==="onScroll"&&te("scroll",e):u!=null&&et(e,i,u,l))}switch(n){case"input":xr(e),Ll(e,r,!1);break;case"textarea":xr(e),Rl(e);break;case"option":r.value!=null&&e.setAttribute("value",""+$(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?dn(e,!!r.multiple,i,!1):r.defaultValue!=null&&dn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Wr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ce(t),null;case 6:if(e&&t.stateNode!=null)tu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(c(166));if(n=tn(ur.current),tn(mt.current),Kr(t)){if(r=t.stateNode,n=t.memoizedProps,r[pt]=t,(i=r.nodeValue!==n)&&(e=Be,e!==null))switch(e.tag){case 3:Xr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Xr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[pt]=t,t.stateNode=r}return Ce(t),null;case 13:if(ne(le),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ie&&Ze!==null&&(t.mode&1)!==0&&(t.flags&128)===0)os(),An(),t.flags|=98560,i=!1;else if(i=Kr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(c(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(c(317));i[pt]=t}else An(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ce(t),i=!1}else it!==null&&(ml(it),it=null),i=!0;if(!i)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(le.current&1)!==0?ye===0&&(ye=3):wl())),t.updateQueue!==null&&(t.flags|=4),Ce(t),null);case 4:return En(),ol(e,t),e===null&&nr(t.stateNode.containerInfo),Ce(t),null;case 10:return zi(t.type._context),Ce(t),null;case 17:return He(t.type)&&Gr(),Ce(t),null;case 19:if(ne(le),i=t.memoizedState,i===null)return Ce(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)pr(i,!1);else{if(ye!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(l=oo(e),l!==null){for(t.flags|=128,pr(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ee(le,le.current&1|2),t.child}e=e.sibling}i.tail!==null&&de()>In&&(t.flags|=128,r=!0,pr(i,!1),t.lanes=4194304)}else{if(!r)if(e=oo(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),pr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!ie)return Ce(t),null}else 2*de()-i.renderingStartTime>In&&n!==1073741824&&(t.flags|=128,r=!0,pr(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=de(),t.sibling=null,n=le.current,ee(le,r?n&1|2:n&1),t):(Ce(t),null);case 22:case 23:return yl(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(Xe&1073741824)!==0&&(Ce(t),t.subtreeFlags&6&&(t.flags|=8192)):Ce(t),null;case 24:return null;case 25:return null}throw Error(c(156,t.tag))}function wh(e,t){switch(Ci(t),t.tag){case 1:return He(t.type)&&Gr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return En(),ne(Ie),ne(Te),Pi(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Li(t),null;case 13:if(ne(le),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));An()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ne(le),null;case 4:return En(),null;case 10:return zi(t.type._context),null;case 22:case 23:return yl(),null;case 24:return null;default:return null}}var po=!1,be=!1,vh=typeof WeakSet=="function"?WeakSet:Set,A=null;function _n(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ue(e,t,r)}else n.current=null}function il(e,t,n){try{n()}catch(r){ue(e,t,r)}}var nu=!1;function kh(e,t){if(yi=Ir,e=Ha(),ui(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,s=-1,u=-1,m=0,w=0,x=e,g=null;t:for(;;){for(var T;x!==n||o!==0&&x.nodeType!==3||(s=l+o),x!==i||r!==0&&x.nodeType!==3||(u=l+r),x.nodeType===3&&(l+=x.nodeValue.length),(T=x.firstChild)!==null;)g=x,x=T;for(;;){if(x===e)break t;if(g===n&&++m===o&&(s=l),g===i&&++w===r&&(u=l),(T=x.nextSibling)!==null)break;x=g,g=x.parentNode}x=T}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(wi={focusedElem:e,selectionRange:n},Ir=!1,A=t;A!==null;)if(t=A,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,A=e;else for(;A!==null;){t=A;try{var F=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(F!==null){var E=F.memoizedProps,he=F.memoizedState,f=t.stateNode,d=f.getSnapshotBeforeUpdate(t.elementType===t.type?E:lt(t.type,E),he);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(c(163))}}catch(S){ue(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,A=e;break}A=t.return}return F=nu,nu=!1,F}function mr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&il(t,n,i)}o=o.next}while(o!==r)}}function mo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ll(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function ru(e){var t=e.alternate;t!==null&&(e.alternate=null,ru(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[pt],delete t[or],delete t[Si],delete t[nh],delete t[rh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ou(e){return e.tag===5||e.tag===3||e.tag===4}function iu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ou(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function al(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Wr));else if(r!==4&&(e=e.child,e!==null))for(al(e,t,n),e=e.sibling;e!==null;)al(e,t,n),e=e.sibling}function sl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(sl(e,t,n),e=e.sibling;e!==null;)sl(e,t,n),e=e.sibling}var xe=null,at=!1;function Ot(e,t,n){for(n=n.child;n!==null;)lu(e,t,n),n=n.sibling}function lu(e,t,n){if(ft&&typeof ft.onCommitFiberUnmount=="function")try{ft.onCommitFiberUnmount(br,n)}catch{}switch(n.tag){case 5:be||_n(n,t);case 6:var r=xe,o=at;xe=null,Ot(e,t,n),xe=r,at=o,xe!==null&&(at?(e=xe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):xe.removeChild(n.stateNode));break;case 18:xe!==null&&(at?(e=xe,n=n.stateNode,e.nodeType===8?xi(e.parentNode,n):e.nodeType===1&&xi(e,n),Gn(e)):xi(xe,n.stateNode));break;case 4:r=xe,o=at,xe=n.stateNode.containerInfo,at=!0,Ot(e,t,n),xe=r,at=o;break;case 0:case 11:case 14:case 15:if(!be&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&((i&2)!==0||(i&4)!==0)&&il(n,t,l),o=o.next}while(o!==r)}Ot(e,t,n);break;case 1:if(!be&&(_n(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){ue(n,t,s)}Ot(e,t,n);break;case 21:Ot(e,t,n);break;case 22:n.mode&1?(be=(r=be)||n.memoizedState!==null,Ot(e,t,n),be=r):Ot(e,t,n);break;default:Ot(e,t,n)}}function au(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new vh),t.forEach(function(r){var o=Eh.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function st(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:xe=s.stateNode,at=!1;break e;case 3:xe=s.stateNode.containerInfo,at=!0;break e;case 4:xe=s.stateNode.containerInfo,at=!0;break e}s=s.return}if(xe===null)throw Error(c(160));lu(i,l,o),xe=null,at=!1;var u=o.alternate;u!==null&&(u.return=null),o.return=null}catch(m){ue(o,t,m)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)su(t,e),t=t.sibling}function su(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(st(t,e),yt(e),r&4){try{mr(3,e,e.return),mo(3,e)}catch(E){ue(e,e.return,E)}try{mr(5,e,e.return)}catch(E){ue(e,e.return,E)}}break;case 1:st(t,e),yt(e),r&512&&n!==null&&_n(n,n.return);break;case 5:if(st(t,e),yt(e),r&512&&n!==null&&_n(n,n.return),e.flags&32){var o=e.stateNode;try{Dn(o,"")}catch(E){ue(e,e.return,E)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&Dl(o,i),Po(s,l);var m=Po(s,i);for(l=0;l<u.length;l+=2){var w=u[l],x=u[l+1];w==="style"?Xl(o,x):w==="dangerouslySetInnerHTML"?Bl(o,x):w==="children"?Dn(o,x):et(o,w,x,m)}switch(s){case"input":Ho(o,i);break;case"textarea":Pl(o,i);break;case"select":var g=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var T=i.value;T!=null?dn(o,!!i.multiple,T,!1):g!==!!i.multiple&&(i.defaultValue!=null?dn(o,!!i.multiple,i.defaultValue,!0):dn(o,!!i.multiple,i.multiple?[]:"",!1))}o[or]=i}catch(E){ue(e,e.return,E)}}break;case 6:if(st(t,e),yt(e),r&4){if(e.stateNode===null)throw Error(c(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(E){ue(e,e.return,E)}}break;case 3:if(st(t,e),yt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Gn(t.containerInfo)}catch(E){ue(e,e.return,E)}break;case 4:st(t,e),yt(e);break;case 13:st(t,e),yt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(hl=de())),r&4&&au(e);break;case 22:if(w=n!==null&&n.memoizedState!==null,e.mode&1?(be=(m=be)||w,st(t,e),be=m):st(t,e),yt(e),r&8192){if(m=e.memoizedState!==null,(e.stateNode.isHidden=m)&&!w&&(e.mode&1)!==0)for(A=e,w=e.child;w!==null;){for(x=A=w;A!==null;){switch(g=A,T=g.child,g.tag){case 0:case 11:case 14:case 15:mr(4,g,g.return);break;case 1:_n(g,g.return);var F=g.stateNode;if(typeof F.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,F.props=t.memoizedProps,F.state=t.memoizedState,F.componentWillUnmount()}catch(E){ue(r,n,E)}}break;case 5:_n(g,g.return);break;case 22:if(g.memoizedState!==null){hu(x);continue}}T!==null?(T.return=g,A=T):hu(x)}w=w.sibling}e:for(w=null,x=e;;){if(x.tag===5){if(w===null){w=x;try{o=x.stateNode,m?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=x.stateNode,u=x.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=Zl("display",l))}catch(E){ue(e,e.return,E)}}}else if(x.tag===6){if(w===null)try{x.stateNode.nodeValue=m?"":x.memoizedProps}catch(E){ue(e,e.return,E)}}else if((x.tag!==22&&x.tag!==23||x.memoizedState===null||x===e)&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===e)break e;for(;x.sibling===null;){if(x.return===null||x.return===e)break e;w===x&&(w=null),x=x.return}w===x&&(w=null),x.sibling.return=x.return,x=x.sibling}}break;case 19:st(t,e),yt(e),r&4&&au(e);break;case 21:break;default:st(t,e),yt(e)}}function yt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(ou(n)){var r=n;break e}n=n.return}throw Error(c(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Dn(o,""),r.flags&=-33);var i=iu(e);sl(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,s=iu(e);al(e,s,l);break;default:throw Error(c(161))}}catch(u){ue(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function xh(e,t,n){A=e,uu(e)}function uu(e,t,n){for(var r=(e.mode&1)!==0;A!==null;){var o=A,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||po;if(!l){var s=o.alternate,u=s!==null&&s.memoizedState!==null||be;s=po;var m=be;if(po=l,(be=u)&&!m)for(A=o;A!==null;)l=A,u=l.child,l.tag===22&&l.memoizedState!==null?cu(o):u!==null?(u.return=l,A=u):cu(o);for(;i!==null;)A=i,uu(i),i=i.sibling;A=o,po=s,be=m}du(e)}else(o.subtreeFlags&8772)!==0&&i!==null?(i.return=o,A=i):du(e)}}function du(e){for(;A!==null;){var t=A;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:be||mo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!be)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:lt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&hs(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}hs(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var m=t.alternate;if(m!==null){var w=m.memoizedState;if(w!==null){var x=w.dehydrated;x!==null&&Gn(x)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(c(163))}be||t.flags&512&&ll(t)}catch(g){ue(t,t.return,g)}}if(t===e){A=null;break}if(n=t.sibling,n!==null){n.return=t.return,A=n;break}A=t.return}}function hu(e){for(;A!==null;){var t=A;if(t===e){A=null;break}var n=t.sibling;if(n!==null){n.return=t.return,A=n;break}A=t.return}}function cu(e){for(;A!==null;){var t=A;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{mo(4,t)}catch(u){ue(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(u){ue(t,o,u)}}var i=t.return;try{ll(t)}catch(u){ue(t,i,u)}break;case 5:var l=t.return;try{ll(t)}catch(u){ue(t,l,u)}}}catch(u){ue(t,t.return,u)}if(t===e){A=null;break}var s=t.sibling;if(s!==null){s.return=t.return,A=s;break}A=t.return}}var Sh=Math.ceil,go=Ne.ReactCurrentDispatcher,ul=Ne.ReactCurrentOwner,Ke=Ne.ReactCurrentBatchConfig,W=0,ve=null,me=null,Se=0,Xe=0,zn=Dt(0),ye=0,gr=null,rn=0,yo=0,dl=0,yr=null,De=null,hl=0,In=1/0,bt=null,wo=!1,cl=null,Bt=null,vo=!1,Zt=null,ko=0,wr=0,fl=null,xo=-1,So=0;function je(){return(W&6)!==0?de():xo!==-1?xo:xo=de()}function Xt(e){return(e.mode&1)===0?1:(W&2)!==0&&Se!==0?Se&-Se:ih.transition!==null?(So===0&&(So=ia()),So):(e=Q,e!==0||(e=window.event,e=e===void 0?16:pa(e.type)),e)}function ut(e,t,n,r){if(50<wr)throw wr=0,fl=null,Error(c(185));Bn(e,n,r),((W&2)===0||e!==ve)&&(e===ve&&((W&2)===0&&(yo|=n),ye===4&&Wt(e,Se)),Le(e,r),n===1&&W===0&&(t.mode&1)===0&&(In=de()+500,$r&&Mt()))}function Le(e,t){var n=e.callbackNode;id(e,t);var r=jr(e,e===ve?Se:0);if(r===0)n!==null&&na(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&na(n),t===1)e.tag===0?oh(pu.bind(null,e)):qa(pu.bind(null,e)),eh(function(){(W&6)===0&&Mt()}),n=null;else{switch(la(r)){case 1:n=Uo;break;case 4:n=ra;break;case 16:n=Cr;break;case 536870912:n=oa;break;default:n=Cr}n=Su(n,fu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function fu(e,t){if(xo=-1,So=0,(W&6)!==0)throw Error(c(327));var n=e.callbackNode;if(Hn()&&e.callbackNode!==n)return null;var r=jr(e,e===ve?Se:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=No(e,r);else{t=r;var o=W;W|=2;var i=gu();(ve!==e||Se!==t)&&(bt=null,In=de()+500,ln(e,t));do try{Ah();break}catch(s){mu(e,s)}while(!0);_i(),go.current=i,W=o,me!==null?t=0:(ve=null,Se=0,t=ye)}if(t!==0){if(t===2&&(o=Go(e),o!==0&&(r=o,t=pl(e,o))),t===1)throw n=gr,ln(e,0),Wt(e,r),Le(e,de()),n;if(t===6)Wt(e,r);else{if(o=e.current.alternate,(r&30)===0&&!Nh(o)&&(t=No(e,r),t===2&&(i=Go(e),i!==0&&(r=i,t=pl(e,i))),t===1))throw n=gr,ln(e,0),Wt(e,r),Le(e,de()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(c(345));case 2:an(e,De,bt);break;case 3:if(Wt(e,r),(r&130023424)===r&&(t=hl+500-de(),10<t)){if(jr(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){je(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=ki(an.bind(null,e,De,bt),t);break}an(e,De,bt);break;case 4:if(Wt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-rt(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=de()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Sh(r/1960))-r,10<r){e.timeoutHandle=ki(an.bind(null,e,De,bt),r);break}an(e,De,bt);break;case 5:an(e,De,bt);break;default:throw Error(c(329))}}}return Le(e,de()),e.callbackNode===n?fu.bind(null,e):null}function pl(e,t){var n=yr;return e.current.memoizedState.isDehydrated&&(ln(e,t).flags|=256),e=No(e,t),e!==2&&(t=De,De=n,t!==null&&ml(t)),e}function ml(e){De===null?De=e:De.push.apply(De,e)}function Nh(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!ot(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Wt(e,t){for(t&=~dl,t&=~yo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-rt(t),r=1<<n;e[n]=-1,t&=~r}}function pu(e){if((W&6)!==0)throw Error(c(327));Hn();var t=jr(e,0);if((t&1)===0)return Le(e,de()),null;var n=No(e,t);if(e.tag!==0&&n===2){var r=Go(e);r!==0&&(t=r,n=pl(e,r))}if(n===1)throw n=gr,ln(e,0),Wt(e,t),Le(e,de()),n;if(n===6)throw Error(c(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,an(e,De,bt),Le(e,de()),null}function gl(e,t){var n=W;W|=1;try{return e(t)}finally{W=n,W===0&&(In=de()+500,$r&&Mt())}}function on(e){Zt!==null&&Zt.tag===0&&(W&6)===0&&Hn();var t=W;W|=1;var n=Ke.transition,r=Q;try{if(Ke.transition=null,Q=1,e)return e()}finally{Q=r,Ke.transition=n,W=t,(W&6)===0&&Mt()}}function yl(){Xe=zn.current,ne(zn)}function ln(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,qd(n)),me!==null)for(n=me.return;n!==null;){var r=n;switch(Ci(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Gr();break;case 3:En(),ne(Ie),ne(Te),Pi();break;case 5:Li(r);break;case 4:En();break;case 13:ne(le);break;case 19:ne(le);break;case 10:zi(r.type._context);break;case 22:case 23:yl()}n=n.return}if(ve=e,me=e=Ut(e.current,null),Se=Xe=t,ye=0,gr=null,dl=yo=rn=0,De=yr=null,en!==null){for(t=0;t<en.length;t++)if(n=en[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}en=null}return e}function mu(e,t){do{var n=me;try{if(_i(),io.current=uo,lo){for(var r=ae.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}lo=!1}if(nn=0,we=ge=ae=null,dr=!1,hr=0,ul.current=null,n===null||n.return===null){ye=1,gr=t,me=null;break}e:{var i=e,l=n.return,s=n,u=t;if(t=Se,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var m=u,w=s,x=w.tag;if((w.mode&1)===0&&(x===0||x===11||x===15)){var g=w.alternate;g?(w.updateQueue=g.updateQueue,w.memoizedState=g.memoizedState,w.lanes=g.lanes):(w.updateQueue=null,w.memoizedState=null)}var T=Rs(l);if(T!==null){T.flags&=-257,Os(T,l,s,i,t),T.mode&1&&Ps(i,m,t),t=T,u=m;var F=t.updateQueue;if(F===null){var E=new Set;E.add(u),t.updateQueue=E}else F.add(u);break e}else{if((t&1)===0){Ps(i,m,t),wl();break e}u=Error(c(426))}}else if(ie&&s.mode&1){var he=Rs(l);if(he!==null){(he.flags&65536)===0&&(he.flags|=256),Os(he,l,s,i,t),Ei(jn(u,s));break e}}i=u=jn(u,s),ye!==4&&(ye=2),yr===null?yr=[i]:yr.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=Ls(i,u,t);ds(i,f);break e;case 1:s=u;var d=i.type,p=i.stateNode;if((i.flags&128)===0&&(typeof d.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Bt===null||!Bt.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var S=Ms(i,s,t);ds(i,S);break e}}i=i.return}while(i!==null)}wu(n)}catch(j){t=j,me===n&&n!==null&&(me=n=n.return);continue}break}while(!0)}function gu(){var e=go.current;return go.current=uo,e===null?uo:e}function wl(){(ye===0||ye===3||ye===2)&&(ye=4),ve===null||(rn&268435455)===0&&(yo&268435455)===0||Wt(ve,Se)}function No(e,t){var n=W;W|=2;var r=gu();(ve!==e||Se!==t)&&(bt=null,ln(e,t));do try{Th();break}catch(o){mu(e,o)}while(!0);if(_i(),W=n,go.current=r,me!==null)throw Error(c(261));return ve=null,Se=0,ye}function Th(){for(;me!==null;)yu(me)}function Ah(){for(;me!==null&&!Qu();)yu(me)}function yu(e){var t=xu(e.alternate,e,Xe);e.memoizedProps=e.pendingProps,t===null?wu(e):me=t,ul.current=null}function wu(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=yh(n,t,Xe),n!==null){me=n;return}}else{if(n=wh(n,t),n!==null){n.flags&=32767,me=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ye=6,me=null;return}}if(t=t.sibling,t!==null){me=t;return}me=t=e}while(t!==null);ye===0&&(ye=5)}function an(e,t,n){var r=Q,o=Ke.transition;try{Ke.transition=null,Q=1,Ch(e,t,n,r)}finally{Ke.transition=o,Q=r}return null}function Ch(e,t,n,r){do Hn();while(Zt!==null);if((W&6)!==0)throw Error(c(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(c(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(ld(e,i),e===ve&&(me=ve=null,Se=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||vo||(vo=!0,Su(Cr,function(){return Hn(),null})),i=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||i){i=Ke.transition,Ke.transition=null;var l=Q;Q=1;var s=W;W|=4,ul.current=null,kh(e,n),su(n,e),Ud(wi),Ir=!!yi,wi=yi=null,e.current=n,xh(n),Ju(),W=s,Q=l,Ke.transition=i}else e.current=n;if(vo&&(vo=!1,Zt=e,ko=o),i=e.pendingLanes,i===0&&(Bt=null),ed(n.stateNode),Le(e,de()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(wo)throw wo=!1,e=cl,cl=null,e;return(ko&1)!==0&&e.tag!==0&&Hn(),i=e.pendingLanes,(i&1)!==0?e===fl?wr++:(wr=0,fl=e):wr=0,Mt(),null}function Hn(){if(Zt!==null){var e=la(ko),t=Ke.transition,n=Q;try{if(Ke.transition=null,Q=16>e?16:e,Zt===null)var r=!1;else{if(e=Zt,Zt=null,ko=0,(W&6)!==0)throw Error(c(331));var o=W;for(W|=4,A=e.current;A!==null;){var i=A,l=i.child;if((A.flags&16)!==0){var s=i.deletions;if(s!==null){for(var u=0;u<s.length;u++){var m=s[u];for(A=m;A!==null;){var w=A;switch(w.tag){case 0:case 11:case 15:mr(8,w,i)}var x=w.child;if(x!==null)x.return=w,A=x;else for(;A!==null;){w=A;var g=w.sibling,T=w.return;if(ru(w),w===m){A=null;break}if(g!==null){g.return=T,A=g;break}A=T}}}var F=i.alternate;if(F!==null){var E=F.child;if(E!==null){F.child=null;do{var he=E.sibling;E.sibling=null,E=he}while(E!==null)}}A=i}}if((i.subtreeFlags&2064)!==0&&l!==null)l.return=i,A=l;else e:for(;A!==null;){if(i=A,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:mr(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,A=f;break e}A=i.return}}var d=e.current;for(A=d;A!==null;){l=A;var p=l.child;if((l.subtreeFlags&2064)!==0&&p!==null)p.return=l,A=p;else e:for(l=d;A!==null;){if(s=A,(s.flags&2048)!==0)try{switch(s.tag){case 0:case 11:case 15:mo(9,s)}}catch(j){ue(s,s.return,j)}if(s===l){A=null;break e}var S=s.sibling;if(S!==null){S.return=s.return,A=S;break e}A=s.return}}if(W=o,Mt(),ft&&typeof ft.onPostCommitFiberRoot=="function")try{ft.onPostCommitFiberRoot(br,e)}catch{}r=!0}return r}finally{Q=n,Ke.transition=t}}return!1}function vu(e,t,n){t=jn(n,t),t=Ls(e,t,1),e=Rt(e,t,1),t=je(),e!==null&&(Bn(e,1,t),Le(e,t))}function ue(e,t,n){if(e.tag===3)vu(e,e,n);else for(;t!==null;){if(t.tag===3){vu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Bt===null||!Bt.has(r))){e=jn(n,e),e=Ms(t,e,1),t=Rt(t,e,1),e=je(),t!==null&&(Bn(t,1,e),Le(t,e));break}}t=t.return}}function bh(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=je(),e.pingedLanes|=e.suspendedLanes&n,ve===e&&(Se&n)===n&&(ye===4||ye===3&&(Se&130023424)===Se&&500>de()-hl?ln(e,0):dl|=n),Le(e,t)}function ku(e,t){t===0&&((e.mode&1)===0?t=1:(t=Er,Er<<=1,(Er&130023424)===0&&(Er=4194304)));var n=je();e=Tt(e,t),e!==null&&(Bn(e,t,n),Le(e,n))}function Fh(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),ku(e,n)}function Eh(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(c(314))}r!==null&&r.delete(t),ku(e,n)}var xu;xu=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ie.current)Ve=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Ve=!1,gh(e,t,n);Ve=(e.flags&131072)!==0}else Ve=!1,ie&&(t.flags&1048576)!==0&&es(t,Jr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;fo(e,t),e=t.pendingProps;var o=Sn(t,Te.current);Fn(t,n),o=Bi(null,t,r,e,o,n);var i=Zi();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,He(r)?(i=!0,Yr(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Vi(t),o.updater=ho,t.stateNode=o,o._reactInternals=t,$i(t,r,e,n),t=qi(null,t,r,!0,i,n)):(t.tag=0,ie&&i&&Ai(t),Ee(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(fo(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=_h(r),e=lt(r,e),o){case 0:t=Ki(null,t,r,e,n);break e;case 1:t=Gs(null,t,r,e,n);break e;case 11:t=Bs(null,t,r,e,n);break e;case 14:t=Zs(null,t,r,lt(r.type,e),n);break e}throw Error(c(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:lt(r,o),Ki(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:lt(r,o),Gs(e,t,r,o,n);case 3:e:{if(Ys(t),e===null)throw Error(c(387));r=t.pendingProps,i=t.memoizedState,o=i.element,us(e,t),ro(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=jn(Error(c(423)),t),t=$s(e,t,r,n,o);break e}else if(r!==o){o=jn(Error(c(424)),t),t=$s(e,t,r,n,o);break e}else for(Ze=Vt(t.stateNode.containerInfo.firstChild),Be=t,ie=!0,it=null,n=as(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(An(),r===o){t=Ct(e,t,n);break e}Ee(e,t,r,n)}t=t.child}return t;case 5:return cs(t),e===null&&Fi(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,vi(r,o)?l=null:i!==null&&vi(r,i)&&(t.flags|=32),Us(e,t),Ee(e,t,l,n),t.child;case 6:return e===null&&Fi(t),null;case 13:return Qs(e,t,n);case 4:return Di(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Cn(t,null,r,n):Ee(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:lt(r,o),Bs(e,t,r,o,n);case 7:return Ee(e,t,t.pendingProps,n),t.child;case 8:return Ee(e,t,t.pendingProps.children,n),t.child;case 12:return Ee(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,ee(eo,r._currentValue),r._currentValue=l,i!==null)if(ot(i.value,l)){if(i.children===o.children&&!Ie.current){t=Ct(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){l=i.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=At(-1,n&-n),u.tag=2;var m=i.updateQueue;if(m!==null){m=m.shared;var w=m.pending;w===null?u.next=u:(u.next=w.next,w.next=u),m.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Ii(i.return,n,t),s.lanes|=n;break}u=u.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(c(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),Ii(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}Ee(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Fn(t,n),o=Qe(o),r=r(o),t.flags|=1,Ee(e,t,r,n),t.child;case 14:return r=t.type,o=lt(r,t.pendingProps),o=lt(r.type,o),Zs(e,t,r,o,n);case 15:return Xs(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:lt(r,o),fo(e,t),t.tag=1,He(r)?(e=!0,Yr(t)):e=!1,Fn(t,n),Vs(t,r,o),$i(t,r,o,n),qi(null,t,r,!0,e,n);case 19:return Ks(e,t,n);case 22:return Ws(e,t,n)}throw Error(c(156,t.tag))};function Su(e,t){return ta(e,t)}function jh(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qe(e,t,n,r){return new jh(e,t,n,r)}function vl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function _h(e){if(typeof e=="function")return vl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ht)return 11;if(e===ct)return 14}return 2}function Ut(e,t){var n=e.alternate;return n===null?(n=qe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function To(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")vl(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case _e:return sn(n.children,o,i,t);case Ge:l=8,o|=8;break;case Ft:return e=qe(12,n,t,o|2),e.elementType=Ft,e.lanes=i,e;case Pe:return e=qe(13,n,t,o),e.elementType=Pe,e.lanes=i,e;case nt:return e=qe(19,n,t,o),e.elementType=nt,e.lanes=i,e;case se:return Ao(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case vt:l=10;break e;case Yt:l=9;break e;case ht:l=11;break e;case ct:l=14;break e;case ze:l=16,r=null;break e}throw Error(c(130,e==null?e:typeof e,""))}return t=qe(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function sn(e,t,n,r){return e=qe(7,e,r,t),e.lanes=n,e}function Ao(e,t,n,r){return e=qe(22,e,r,t),e.elementType=se,e.lanes=n,e.stateNode={isHidden:!1},e}function kl(e,t,n){return e=qe(6,e,null,t),e.lanes=n,e}function xl(e,t,n){return t=qe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function zh(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Yo(0),this.expirationTimes=Yo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yo(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Sl(e,t,n,r,o,i,l,s,u){return e=new zh(e,t,n,s,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=qe(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Vi(i),e}function Ih(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Fe,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Nu(e){if(!e)return Lt;e=e._reactInternals;e:{if($t(e)!==e||e.tag!==1)throw Error(c(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(He(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(c(171))}if(e.tag===1){var n=e.type;if(He(n))return Ja(e,n,t)}return t}function Tu(e,t,n,r,o,i,l,s,u){return e=Sl(n,r,!0,e,o,i,l,s,u),e.context=Nu(null),n=e.current,r=je(),o=Xt(n),i=At(r,o),i.callback=t??null,Rt(n,i,o),e.current.lanes=o,Bn(e,o,r),Le(e,r),e}function Co(e,t,n,r){var o=t.current,i=je(),l=Xt(o);return n=Nu(n),t.context===null?t.context=n:t.pendingContext=n,t=At(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Rt(o,t,l),e!==null&&(ut(e,o,l,i),no(e,o,l)),l}function bo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Au(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Nl(e,t){Au(e,t),(e=e.alternate)&&Au(e,t)}function Hh(){return null}var Cu=typeof reportError=="function"?reportError:function(e){console.error(e)};function Tl(e){this._internalRoot=e}Fo.prototype.render=Tl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));Co(e,t,null,null)},Fo.prototype.unmount=Tl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;on(function(){Co(null,e,null,null)}),t[kt]=null}};function Fo(e){this._internalRoot=e}Fo.prototype.unstable_scheduleHydration=function(e){if(e){var t=ua();e={blockedOn:null,target:e,priority:t};for(var n=0;n<zt.length&&t!==0&&t<zt[n].priority;n++);zt.splice(n,0,e),n===0&&ca(e)}};function Al(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Eo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function bu(){}function Vh(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var m=bo(l);i.call(m)}}var l=Tu(t,r,e,0,null,!1,!1,"",bu);return e._reactRootContainer=l,e[kt]=l.current,nr(e.nodeType===8?e.parentNode:e),on(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var m=bo(u);s.call(m)}}var u=Sl(e,0,!1,null,null,!1,!1,"",bu);return e._reactRootContainer=u,e[kt]=u.current,nr(e.nodeType===8?e.parentNode:e),on(function(){Co(t,u,n,r)}),u}function jo(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var s=o;o=function(){var u=bo(l);s.call(u)}}Co(t,l,e,o)}else l=Vh(n,t,e,o,r);return bo(l)}aa=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=On(t.pendingLanes);n!==0&&($o(t,n|1),Le(t,de()),(W&6)===0&&(In=de()+500,Mt()))}break;case 13:on(function(){var r=Tt(e,1);if(r!==null){var o=je();ut(r,e,1,o)}}),Nl(e,1)}},Qo=function(e){if(e.tag===13){var t=Tt(e,134217728);if(t!==null){var n=je();ut(t,e,134217728,n)}Nl(e,134217728)}},sa=function(e){if(e.tag===13){var t=Xt(e),n=Tt(e,t);if(n!==null){var r=je();ut(n,e,t,r)}Nl(e,t)}},ua=function(){return Q},da=function(e,t){var n=Q;try{return Q=e,t()}finally{Q=n}},Bo=function(e,t,n){switch(t){case"input":if(Ho(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Ur(r);if(!o)throw Error(c(90));Hl(r),Ho(r,o)}}}break;case"textarea":Pl(e,n);break;case"select":t=n.value,t!=null&&dn(e,!!n.multiple,t,!1)}},Yl=gl,$l=on;var Dh={usingClientEntryPoint:!1,Events:[ir,kn,Ur,Ul,Gl,gl]},vr={findFiberByHostInstance:Qt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Lh={bundleType:vr.bundleType,version:vr.version,rendererPackageName:vr.rendererPackageName,rendererConfig:vr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ne.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ql(e),e===null?null:e.stateNode},findFiberByHostInstance:vr.findFiberByHostInstance||Hh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _o=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_o.isDisabled&&_o.supportsFiber)try{br=_o.inject(Lh),ft=_o}catch{}}return Me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Dh,Me.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Al(t))throw Error(c(200));return Ih(e,t,null,n)},Me.createRoot=function(e,t){if(!Al(e))throw Error(c(299));var n=!1,r="",o=Cu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Sl(e,1,!1,null,null,n,!1,r,o),e[kt]=t.current,nr(e.nodeType===8?e.parentNode:e),new Tl(t)},Me.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=ql(t),e=e===null?null:e.stateNode,e},Me.flushSync=function(e){return on(e)},Me.hydrate=function(e,t,n){if(!Eo(t))throw Error(c(200));return jo(null,e,t,!0,n)},Me.hydrateRoot=function(e,t,n){if(!Al(e))throw Error(c(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=Cu;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Tu(t,null,e,1,n??null,o,!1,i,l),e[kt]=t.current,nr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Fo(t)},Me.render=function(e,t,n){if(!Eo(t))throw Error(c(200));return jo(null,e,t,!1,n)},Me.unmountComponentAtNode=function(e){if(!Eo(e))throw Error(c(40));return e._reactRootContainer?(on(function(){jo(null,null,e,!1,function(){e._reactRootContainer=null,e[kt]=null})}),!0):!1},Me.unstable_batchedUpdates=gl,Me.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Eo(n))throw Error(c(200));if(e==null||e._reactInternals===void 0)throw Error(c(38));return jo(e,t,n,!1,r)},Me.version="18.3.1-next-f1338f8080-20240426",Me}var Vu;function Wh(){if(Vu)return Fl.exports;Vu=1;function v(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(v)}catch(k){console.error(k)}}return v(),Fl.exports=Xh(),Fl.exports}var Du;function Uh(){if(Du)return zo;Du=1;var v=Wh();return zo.createRoot=v.createRoot,zo.hydrateRoot=v.hydrateRoot,zo}var Gh=Uh(),ce=zl();const Yh="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";function Il(v){const[k,c]=ce.useState(!1),b=()=>{c(!0)},{src:I,alt:H,style:_,className:z,...Z}=v;return k?a.jsx("div",{className:`inline-block bg-gray-100 text-center align-middle ${z??""}`,style:_,children:a.jsx("div",{className:"flex items-center justify-center w-full h-full",children:a.jsx("img",{src:Yh,alt:"Error loading image",...Z,"data-original-url":I})})}):a.jsx("img",{src:I,alt:H,className:z,style:_,...Z,onError:b})}/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $h=v=>v.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Qh=v=>v.replace(/^([A-Z])|[\s-_]+(\w)/g,(k,c,b)=>b?b.toUpperCase():c.toLowerCase()),Lu=v=>{const k=Qh(v);return k.charAt(0).toUpperCase()+k.slice(1)},Pu=(...v)=>v.filter((k,c,b)=>!!k&&k.trim()!==""&&b.indexOf(k)===c).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Jh={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kh=ce.forwardRef(({color:v="currentColor",size:k=24,strokeWidth:c=2,absoluteStrokeWidth:b,className:I="",children:H,iconNode:_,...z},Z)=>ce.createElement("svg",{ref:Z,...Jh,width:k,height:k,stroke:v,strokeWidth:b?Number(c)*24/Number(k):c,className:Pu("lucide",I),...z},[..._.map(([pe,X])=>ce.createElement(pe,X)),...Array.isArray(H)?H:[H]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fe=(v,k)=>{const c=ce.forwardRef(({className:b,...I},H)=>ce.createElement(Kh,{ref:H,iconNode:k,className:Pu(`lucide-${$h(Lu(v))}`,`lucide-${v}`,b),...I}));return c.displayName=Lu(v),c};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qh=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],ec=fe("arrow-left",qh);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tc=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Ru=fe("book-open",tc);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nc=[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z",key:"169p4p"}],["path",{d:"m9 10 2 2 4-4",key:"1gnqz4"}]],_l=fe("bookmark-check",nc);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rc=[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]],oc=fe("bookmark",rc);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ic=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],lc=fe("calendar",ic);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ac=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],sc=fe("chevron-down",ac);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uc=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],dc=fe("chevron-left",uc);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hc=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],cc=fe("chevron-right",hc);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fc=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],pc=fe("chevron-up",fc);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mc=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],gc=fe("globe",mc);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yc=[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]],wc=fe("heart",yc);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vc=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],kc=fe("instagram",vc);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xc=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],Sc=fe("layers",xc);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nc=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],Ou=fe("mail",Nc);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tc=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],Ac=fe("menu",Tc);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cc=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],bc=fe("send",Cc);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fc=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],un=fe("sparkles",Fc);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ec=[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]],jc=fe("twitter",Ec);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _c=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],zc=fe("x",_c);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ic=[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]],Hc=fe("youtube",Ic);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vc=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Dc=fe("zap",Vc);function Mu({onStartReading:v}){return a.jsxs("section",{className:"min-h-screen flex items-center justify-center relative overflow-hidden pt-16",children:[a.jsxs("div",{className:"absolute inset-0 z-0",children:[a.jsx(Il,{src:"https://images.unsplash.com/photo-1681673819379-a183d9acf860?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtaWMlMjBuZWJ1bGElMjBzcGFjZXxlbnwxfHx8fDE3NjM2NTI1Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080",alt:"Cosmic Background",className:"w-full h-full object-cover opacity-30"}),a.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-[#0E1120]/50 via-[#0E1120]/80 to-[#0E1120]"})]}),a.jsxs("div",{className:"relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center",children:[a.jsxs("div",{className:"flex items-center justify-center mb-8 space-x-2",children:[a.jsx(un,{className:"text-[#FFD46A] w-8 h-8 animate-pulse"}),a.jsx(un,{className:"text-[#8A5DFF] w-12 h-12 animate-pulse delay-75"}),a.jsx(un,{className:"text-[#24C3FF] w-8 h-8 animate-pulse delay-150"})]}),a.jsx("h1",{className:"font-['Cinzel'] text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6 bg-gradient-to-r from-[#8A5DFF] via-[#24C3FF] to-[#FFD46A] bg-clip-text text-transparent animate-fade-in",children:"Welcome to the Zoulverse"}),a.jsx("p",{className:"font-['Cinzel'] text-xl sm:text-2xl md:text-3xl mb-8 text-[#24C3FF] tracking-wide",children:"Where Souls Forge Reality"}),a.jsxs("div",{className:"max-w-3xl mx-auto mb-12 space-y-4 text-gray-300 font-['Lora']",children:[a.jsx("p",{className:"text-lg leading-relaxed",children:"Welcome to the Zoulverse — a boundless multiverse forged from the essence of the First Soul, ZOUL. Here, creation and destruction breathe as living forces, shaping infinite realities, ancient realms, and celestial beings beyond imagination."}),a.jsx("p",{className:"text-lg leading-relaxed",children:"This is not just a story. This is a universe of souls, a cosmic mythology unfolding piece by piece."}),a.jsx("p",{className:"text-lg leading-relaxed italic text-[#8A5DFF]",children:"Begin your journey. Uncover the origins. Walk through light, shadow, and balance."}),a.jsx("p",{className:"text-xl text-[#FFD46A] font-['Cinzel']",children:"The Zoulverse awaits you."})]}),a.jsxs("button",{onClick:v,className:"group relative px-8 py-4 bg-gradient-to-r from-[#8A5DFF] to-[#24C3FF] rounded-full text-white font-['Bebas_Neue'] text-xl tracking-wider overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(138,93,255,0.6)] hover:scale-105",children:[a.jsxs("span",{className:"relative z-10 flex items-center gap-2",children:["Start Reading",a.jsx(un,{className:"w-5 h-5"})]}),a.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-[#24C3FF] to-[#FFD46A] opacity-0 group-hover:opacity-100 transition-opacity duration-300"})]}),a.jsx("div",{className:"absolute top-20 left-10 w-32 h-32 rounded-full bg-[#8A5DFF]/10 blur-3xl animate-pulse"}),a.jsx("div",{className:"absolute bottom-20 right-10 w-40 h-40 rounded-full bg-[#24C3FF]/10 blur-3xl animate-pulse delay-75"})]})]})}function Lc(){const v=[{title:"Origin of the Soul",icon:a.jsx(un,{className:"w-8 h-8"}),content:"In the beginning, there was only ZOUL—the First Soul, the essence of all existence. From ZOUL's infinite energy, reality itself was born, splitting into countless dimensions, realms, and universes."},{title:"Creation of ZOUL",icon:a.jsx(Sc,{className:"w-8 h-8"}),content:"ZOUL did not create itself—it simply was. Eternal, boundless, and without origin. It exists beyond time, beyond space, beyond comprehension. ZOUL is creation and destruction, light and shadow, beginning and end."},{title:"Light, Shadow, and Balance",icon:a.jsx(wc,{className:"w-8 h-8"}),content:"From ZOUL emerged two fundamental forces: Light—the power of creation, hope, and life. Shadow—the power of destruction, mystery, and transformation. Neither good nor evil, both necessary for existence to continue."},{title:"Multiverse Structure",icon:a.jsx(Dc,{className:"w-8 h-8"}),content:"The Zoulverse consists of infinite Realities—parallel universes with different laws. Ancient Realms—dimensions where powerful beings reside. And Hidden Dimensions—spaces between spaces where souls travel and evolve."}];return a.jsx("section",{className:"min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8",children:a.jsxs("div",{className:"max-w-6xl mx-auto",children:[a.jsxs("div",{className:"text-center mb-16",children:[a.jsx("h2",{className:"font-['Cinzel'] text-4xl sm:text-5xl md:text-6xl mb-4 bg-gradient-to-r from-[#8A5DFF] to-[#24C3FF] bg-clip-text text-transparent",children:"About the Zoulverse"}),a.jsx("p",{className:"font-['Bebas_Neue'] text-xl text-gray-400 tracking-wider",children:"Understanding the Cosmic Mythology"})]}),a.jsx("div",{className:"grid gap-8 md:grid-cols-2 mb-16",children:v.map((k,c)=>a.jsxs("div",{className:"group bg-gradient-to-br from-[#0B0F29] to-[#141A40] rounded-2xl p-8 border border-[#8A5DFF]/20 hover:border-[#8A5DFF]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(138,93,255,0.2)]",children:[a.jsxs("div",{className:"flex items-center gap-4 mb-4",children:[a.jsx("div",{className:"p-3 rounded-lg bg-gradient-to-br from-[#8A5DFF]/20 to-[#24C3FF]/20 text-[#8A5DFF] group-hover:shadow-[0_0_20px_rgba(138,93,255,0.3)] transition-all",children:k.icon}),a.jsx("h3",{className:"font-['Cinzel'] text-2xl text-white",children:k.title})]}),a.jsx("p",{className:"font-['Lora'] text-gray-400 leading-relaxed",children:k.content})]},c))}),a.jsxs("div",{className:"bg-gradient-to-br from-[#0B0F29] to-[#141A40] rounded-2xl p-8 border border-[#FFD46A]/20",children:[a.jsx("h3",{className:"font-['Cinzel'] text-3xl mb-6 text-center bg-gradient-to-r from-[#FFD46A] to-[#8A5DFF] bg-clip-text text-transparent",children:"The Prophecy of Three"}),a.jsxs("div",{className:"font-['Lora'] text-gray-300 space-y-4 leading-relaxed text-center max-w-3xl mx-auto",children:[a.jsx("p",{children:'"When the shadows grow bold and light begins to fade, three souls will awaken bearing ancient marks. One carries the incomplete heart—a vessel for power beyond comprehension."'}),a.jsx("p",{children:'"Together they will stand against the darkness. Apart, they will fall. United, they will forge a new reality."'}),a.jsx("p",{className:"text-[#FFD46A] italic",children:'"The Zoulverse awaits its chosen three."'})]})]})]})})}const Bu=[{id:1,title:"Zourubāsu: Kimi no Sōzō o Koete (Zoulverse: Beyond Your Imagination)",description:"Follow Veon, Zharc, and Xyla as they discover their hidden powers and face the shadows threatening their world. Three ordinary students. Three spirit beasts. One incomplete heart mark that changes everything.",cover:"https://images.unsplash.com/photo-1604305526688-935181d17565?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYWxheHklMjBzdGFycyUyMHB1cnBsZXxlbnwxfHx8fDE3NjM2NjMyNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",chapters:[{id:1,title:"Chapter 1 — New Beginnings",content:`(Zharc = good at story writing, bad at drawing)

The first day in a new school always feels heavier than it should.

Veon stood at the doorway of his new classroom, adjusting his glasses, pretending the weight on his chest wasn't real.
New faces. New air. New uncertainty.

He stepped in.

Groups were already formed.
Laughter bounced around the room.
Everyone seemed to belong.

Except him.

"Oi. You're new, right?"

A tall boy with a messy hairstyle and too-confident smile approached him.

"I'm Zander. You?"

"…Veon."

"Well, Veon," Zander said, throwing his arm over his shoulder,
"lucky for you, I know the perfect guy for quiet people."

He dragged Veon to a desk by the window.

A boy sat there, scribbling in a notebook.
Not drawing…
writing.

But on the page beside it was the world's ugliest dragon ever drawn.

Zander grinned. "Zharc! I brought someone for you."

Zharc glanced up, calm and unreadable.
"You're Veon?"

"...Yeah."

Zharc gave a small nod — accepting him instantly.
Then he closed his notebook quickly, embarrassed.

Veon asked, "What were you writing?"

Zharc sighed. "A story."
He held up the horrible dragon drawing.
"And that… is my attempt at drawing the monster in it."

Veon actually laughed a little.
Zander smacked Zharc's back. "He writes crazy cool stories. But he draws like a potato trying to hold a pencil."

Zharc rolled his eyes but didn't deny it.

Something clicked between them — not friendship immediately, but understanding.

Days passed.

They solved problems together.
Shared jokes no one else got.
Had the same thoughts before saying them aloud.

A rhythm.

Zander slowly drifted to other groups… like a character whose arc had ended.

Then one afternoon, Veon met her.

"Zharc, can I borrow your pen?" Xyla asked, leaning over with a bright smile.

Zharc handed it without looking — still writing.

A minute later:

"Oh no… I think I lost it."

Veon's eyebrows twitched. "You WHAT?"

Xyla grinned, waving it from behind her back. "Just kidding~"

Veon didn't laugh.
"That wasn't funny."

Xyla blinked.
Zharc quickly intervened:

"She's like this. Don't worry about it."

But the tension stayed.

That night…

Far from them, in a realm they didn't know existed — a shadowy figure spoke:

"Prepare the armies. The time is near."

Shadow soldiers bowed in obedience.

Back in his room, Veon lay awake.
Replay after replay of his day swirled in his head.

Zharc's calmness.
Xyla's smug grin.
The weird feeling that something was watching him.

Then—
A flicker in the corner of his room.

A shadow moved.

The lights shut off.

And the night swallowed him.

Chapter One Ends.`},{id:2,title:"Chapter 2 — The Beginning of Something Strange",content:`(Zharc = good story writer)

School got easier.

Zharc had become like a brother.
Quiet.
Creative.
A mind full of stories he never showed anyone.

He'd write entire worlds in his notebook, characters fighting monsters he couldn't draw.

"Why don't you publish these?" Veon once asked.

"Not yet," Zharc said with a sigh.
"I'm still learning to finish what I start."

But something else began happening to Veon.

Something impossible.

One day he muttered,

"I wish our Social Science teacher was absent…"

Five minutes later, the announcement came:

"Social Science period is cancelled."

Veon froze.

Then another day, during rain:

"I wish the rain stopped…"

And in one second—
The sky obeyed.

Veon stood alone on the silent road, heart pounding.

What… is this?

Back in school, test papers were returned.

Xyla slammed her desk.
"WHY is it ALWAYS 42?! Am I cursed?"

Zharc smirked, twirling his pen.
"Forty-six. Consistency is a strength."

Veon walked in with a grin.
"Forty-five."

Xyla: "EH?!"
Zharc: "Nice. You're catching up."

Xyla pointed at Veon dramatically.
"You are now my academic rival!"

Veon rolled his eyes.
"Sure."

This time, he actually smiled at her joke.

That evening, Veon sat in his workshop corner.
PVC pipes everywhere.

Trying to build something dumb, something fun.

Zharc's advice echoed:

"Do something reckless for once, Veon."

He pushed the pipe—
too hard.

Scrrch.

"Ah—!"

It cut his palm.

Blood dripped.

He wrapped it…
then froze.

The wound glowed.

A mark formed—
A heart… but not complete.
The right side didn't connect.

A broken heart?
A half-heart?
No…

It pulsed softly, like a heartbeat.

Veon's breath shook.

"What… is happening to me?"

The incomplete heart seemed to whisper a future he didn't yet understand.

Chapter Two Ends.`},{id:3,title:"Chapter 3 — The Mark Veon Shouldn't Have",content:`Veon woke up late the next morning, still shaken.

His palm still held the incomplete heart symbol, glowing faintly beneath the skin.
He tried washing it, scrubbing it, scratching it.

Nothing changed.

It pulsed.
Once.
Twice.
Like it had a heartbeat.

He hid his hand under his sleeve.
"It's just a mark… it doesn't mean anything."

But even he didn't believe that.

1 — The Hidden Awakening (Unknown to Veon)

(This part is NOT known to any of the characters. Only the reader.)

Zharc — Alone Behind School

Zharc stayed late after school, working on his notebook of stories.

A burning wind blew behind him.

A deep voice rumbled:

"Zharc."

He turned.

A massive flaming tiger stood there.

Zyth bowed.

"I choose you as my host."

Zharc froze.
He couldn't even scream.

And in a burst of heat—
Zyth vanished.

Zharc stood alone.
Breathing hard.
Heart racing.

"…What the hell was that?"

Nobody saw it.
Nobody knew.

Xyla — Alone on the Rooftop

Xyla sat kicking her legs on the rooftop wall, eating chocolate.

A quiet shimmer of light surrounded her.

A soft, melodic voice whispered:

"Xyla."

She turned.

A glowing leopard stood before her, elegant and radiant.

Xernes bowed.

"I choose you."

Xyla stared, mouth open, chocolate falling out of her hand.

A second later—
Xernes disappeared into light.

Xyla blinked repeatedly.

"Did… did that really just happen?"

Nobody saw it.
Nobody knew.

Veon — Alone in His Room

Veon sketched quietly, trying to distract himself from the mark.

The air shifted.

A heavy pressure filled the room.

A deep, ancient voice whispered:

"…Veon."

A lion made of green-gold energy appeared behind him.
Massive.
Majestic.

Verse looked down at him.

"I choose you as my host."

Veon stumbled backward.

"W–What?! Why—why me—?!"

Verse bowed.

"You carry something… ancient. I sensed it."

"The… mark?"

Verse blinked.
"What mark?"

Veon lifted his sleeve.

The incomplete heart glowed.

Verse's eyes widened—
not with recognition…

…but with fear.

"…That symbol is not from my realm."

And then—
Verse vanished.

Leaving Veon trembling alone.

Nobody saw it.
Nobody knew.

2 — The Secret Veon Cannot Hide

The next day at school…

Zharc noticed Veon's sleeve tightly covering his palm.

"Bro… why are you acting weird?"

"I'm not," Veon said too quickly.

Xyla popped up between them.
"Yes, you ARE. You look like you swallowed a ghost."

Veon hesitated.

Then finally…

"Fine… I'll show you."

He lifted his sleeve.

Both of them leaned closer.

The mark pulsed.

Xyla gasped.
Zharc's eyes widened.

"What the…"
"What IS that?"

Veon whispered,
"It's been glowing since yesterday."

Xyla touched her chest.
"That doesn't look like a wound."

Zharc analyzed it carefully.

"It's… symmetrical. Intentional. Like a symbol. A seal."

Veon swallowed.

"You guys… have anything strange happening lately?"

They both stiffened.

Both wanted to scream "YES!"

Both wanted to tell him:

Zharc: A giant flaming tiger chose me.
Xyla: A glowing leopard chose me.

But both said:

"…no."

Veon looked relieved.
But the fear in his chest didn't vanish.

3 — The Vow of Silence

None of them talk about it again that day.

Xyla keeps touching her chest, remembering Xernes.
Zharc keeps staring at his hands, remembering Zyth.

They desperately want to tell Veon.

But they can't.

Because each one believes:

"Maybe I was hallucinating."
"Maybe it was just a dream."
"Maybe I'm going crazy."

The mark on Veon's palm continues to glow softly.

A sign.

A warning.

A destiny.

But for the first 10 chapters…

None of them know the truth about each other.

Only the reader knows:

Three hosts have been chosen

Three spirit beasts have awakened

And only Veon carries Zoul's ancient vessel mark

Chapter 3 Ends.`},{id:4,title:"Chapter 4 — Shadows in the School",content:`The day felt normal.

Too normal.

Xyla munching chocolate before class.
Zharc writing story drafts instead of listening.
Veon sketching quietly with his purple headphones on.

Everything was peaceful.

Until 11:41 AM.

1 — When the Lights Died

The hallway lights flickered.

Once.
Twice.

Then—

BZZT.

Darkness swallowed the entire school.

Screams erupted.

"Who turned off the power?!"
"Why is it so cold?!"
"Someone call the teachers!"

But Veon felt something different.

No power outage made the air feel this heavy.
No electricity failure made shadows… move.

A dark ripple crawled across the floor.

Something formed from it—
humanoid, twisted, dripping like liquid shadow.

A Hadial.

No name.
No sound.
Only glowing hollow red eyes.

It turned toward running students.

Veon's heartbeat spiked.

And his incomplete heart mark
—the symbol no one understood—
burned purple.

A voice echoed in his mind.

Calm. Deep.

"Veon… call my name."

Veon whispered shakily,

"…Verse."

2 — VZX's First Battle (Unseen)

A purple burst exploded around him.

Wind spiraled.
Light cracked through the darkness.
His hair lifted.
His eyes glowed bright violet.

The air pulsed like a heartbeat—

VZX had awakened.

But nobody saw him.

No one was there.

The Hadial lunged.

VZX moved faster.

A single purple slash—

F W S S H !!

The creature split and evaporated into mist.

But VZX wasn't relieved.

The mark burned again—
deeper, louder, almost reacting on its own.

"…Why are you doing this…?"

Verse said nothing.

The transformation faded.

Veon ran before anyone arrived.

3 — Zharc's Battle (Zyth's First Call)

Downstairs, near the computer lab—
another Hadial crawled out of the ventilation vent.

Students screamed and ran.

Zharc froze.
His heartbeat thundered.

"What… what IS that?!"

A voice roared in his mind.

Fierce. Violent.

🔥 "Zharc. Call my name." 🔥

His breath shook.

"…Zyth."

Flames spiraled around him—
heat blasting through the hallway.
Red and gold patterns crawled up his arms.
His eyes turned molten gold.

ZULFIRE had awakened.

The Hadial slashed—

Zulfire vanished in a burst of flames.

He reappeared behind it.

"…Bad mistake attacking me."

His fist ignited—

B A A A M !!

The Hadial disintegrated instantly.

His flames died down.

Zharc breathed hard.

🔥 "Tell no one."

"…I won't."

He left before anyone could spot him.

4 — Xyla's Battle (Xernes's First Call)

On the rooftop—
Xyla had escaped to eat chocolate quietly.

Then a Hadial crawled from the water tank pipe.

It screeched.

Xyla froze.

"…nope nope nope—"

The monster lunged—

A gentle, soothing voice spoke in her mind:

✨ "Xyla… call my name." ✨

"…Xernes."

Light burst outward—
golden trails spiraling around her form.
Her eyes turned star-like.
A glowing fox-like mask formed.

XANTHARA had awakened.

The Hadial struck—
Xanthara vanished
leaving behind a streak of golden photons.

A single flash.

The creature split and vanished.

Xyla trembled.

"…I actually did that?"

✨ "You did wonderfully."

She smiled nervously, picked up her chocolate,
and slipped back downstairs unseen.

5 — Aftermath

Three Hadials.
Three battles.
Three victories.

None of the hosts saw each other transform.
None knew the others were chosen.
None knew they weren't alone.

Veon walked back into class quietly.
Zharc returned with his notebook.
Xyla slipped in with chocolate crumbs on her sleeves.

Three seats apart.
Three secrets.
One fate forming silently.

The mark on Veon's chest pulsed once.

Purple.
Unexplained.
Unnoticed.

And no one—
not Verse, not the beasts, not the monsters,
not even the shadows watching—
understood what it meant.

Chapter 4 Ends.`},{id:5,title:"Chapter 5 — The Night the Shadows Moved",content:`1 — An Uneasy Silence

The day after the "power outage,"
the entire school felt wrong.

Not dangerous.
Not chaotic.
Just… heavier.

Like the air was watching.

Veon noticed it first.

Every shadow on the walls felt sharper.
Deeper.
As if something inside them was awake.

He sat in class, sketching quietly,
when the incomplete heart mark pulsed—
just once.

A soft purple glow under his shirt.

He covered it quickly.

"Not now… please not now…"

2 — Almost Reveal #1 (Xyla → Veon)

After school, Veon walked down the empty corridor.
Xyla turned the corner at the same moment.

Pulse.

Veon felt a surge of golden light energy behind him.
He froze.

Xyla felt a surge of purple aura in front of her.
She froze too.

Their eyes met.

Something passed between them—
not recognition,
but a strange feeling.

As if they were both hiding the same type of secret.

Xyla smiled awkwardly.

"Uhh… hey Veon! Why are you standing like a ghost?"

Veon laughed nervously.

"I—I was gonna ask you the same thing."

Their marks and auras quieted.

They walked past each other.

Neither spoke.

Both thought the same thing:

"Why did their presence feel familiar…?"

3 — Almost Reveal #2 (Zharc → Xyla)

At the school gate,
Zharc bumped into Xyla.

A faint spark of red fire aura slipped out of him.
A spark of golden light escaped from her.

Both auras vanished instantly.

Zharc blinked.
Xyla blinked.

They stared.

"…did you feel that?" Xyla asked.

"No," Zharc lied too quickly.

"Oh. Cool. Me neither."

They parted ways silently.

Both thinking:

"That was NOT normal."

4 — The Night Deepens

At 7:42 PM, the town lights flickered.

Not like the school.

Worse.

Half the streetlamps went out.
The sky darkened unnaturally.
The air thickened—
like something was walking between worlds.

A cold wind blew.

Everyone felt it.

But only three reacted.

5 — A Stronger Hadial Appears

It emerged in the old alley behind the market.
Not like the ones before.

Bigger.
Twisted.
Faster.

Shadow tendrils rippled off its body.
Its eyes glowed brighter.

This one wasn't hunting randomly.

It was searching.

For something.

Or someone.

6 — Veon's Second Fight (VZX)

Veon arrived first.

His mark pulsed violently—
purple cracks of energy spreading across his skin.

The Hadial turned its head sharply.

It recognized him.

Veon whispered:

"…Verse."

V W O O O M —

Purple energy burst around him.

VZX appeared in the alley.

But before he attacked,
the Hadial disappeared—

Gone in one blink.

"What—?"

Its claw came from the side,
tearing across the wall.

VZX dodged and countered,
purple energy shaking the pavement.

This Hadial was smarter.
Adaptive.
Deadly.

VZX was pushed back.
Breathing hard.

"…this isn't like last time."

7 — Zharc Arrives (Almost Reveal #3)

As VZX struggled,
a burst of red heat cut across the alley.

Zharc arrived—
but he was hidden behind a building,
out of Veon's sight.

He saw the monster.
He saw purple energy.

And he whispered:

"…Zyth."

F O O O O O M —

Red lava flames erupted behind the building.

But VZX didn't see Zharc.
Zharc didn't see VZX clearly.
Only purple light and shadows.

The Hadial sensed two energies
and panicked—

It fled.

VZX dashed left.
Zharc dashed right.

Neither saw each other.

8 — Xyla Arrives (Almost Reveal #4)

Xyla reached the alley seconds later.

A golden trail flickered behind her.

She sensed two fading auras:
one purple,
one red.

She whispered:

"…Xernes."

Light exploded.
XANTHARA appeared.

But both boys were already gone.

She looked around, confused.

"Someone else was here…"

Her heart pounded.

"…two someones."

9 — The Second Hadial Appears (Three Battles, Still Separate)

The first monster fled into the drainage canal.

Three more appeared in different spots.

One near the park.
One behind the supermarket.
One near the school.

Each host sensed a different location.

Each ran in a different direction.

Each fought alone.

Purple flashes tore through the trees.

Red flames scorched the rooftop of an old shed.

Gold streaks danced across the night sky.

Three battles.

Three victories.

Three secrets.

None knew they were only meters apart.

10 — Nightfall Quiet

By 9 PM, the shadows retreated.

The streets returned to normal.

Everyone went home.

Except three teenagers
who stared at their hands
wondering…

"Why am I not the only one?"

Veon's mark pulsed one last time.

Then fell silent.

Chapter 5 Ends.`},{id:6,title:"Chapter 6 — The Demon Dragon of the Night",content:`The moon wasn't supposed to do that.

At 10:09 PM, Veon looked out his window and saw the moon being swallowed by shadow—
not clouds,
not smoke,
but something alive.

Purple lightning spread across his skin.

His mark pulsed violently.

Something is coming.

Far across town, Zharc felt heat erupt beneath him.
A deep instinct growled inside his chest:

🔥 Something massive has awakened.

Xyla froze on her balcony, chocolate halfway to her mouth.
The stars dimmed.

Her heart raced.

✨ Xyla… you must go.

All three ran toward the same place.
Unaware of each other.
Drawn by fate.

In the abandoned construction site near the river,
a crater ripped open.

Shadows leaked out like ink.

Then—

A giant claw rose from it.

Twisted. Cracked.
Glowing with demonic corruption.

Another claw.
A horned skull.
Rows of burning red eyes.

The ground vibrated.

A monstrous roar shook the city—

R R R R A A A A A A A A A G H H H !!!

Windows shattered.
Streetlights burst.
The river trembled.

A corrupted Demon Dragon towered above the city—
dripping shadow fire,
wings cracked and melting,
eyes glowing with hatred.

It searched.

Hunting.

Hungry.

Veon reached the site first, chest heaving.

His mark burned.

"…Let's do this."

V W O O O O O O M —

Purple energy exploded out of him.

His casual clothes dissolved into a sleek combat form lined with deep violet flow.
A full-face mask snapped over his head—smooth black,
with glowing purple eye patterns that shined like sharp blades.

VZX stood ready.

The dragon turned.

Hundreds of red eyes focused on him.

It opened its jaws—
shadow energy swelling.

VZX braced—

K A A A A B O O O M !!

The blast threw him through concrete.

He coughed dust.

"…I can't beat this alone…"

A voice echoed gently:

You are not meant to.

Heat erupted.

Zharc dropped onto the pavement, flames rising behind him.

"…Alright."

F O O O O O O M !!

Blazing armor formed around him, dark red with molten streaks.
A full-face mask sealed on—black with blazing tiger-like crimson eyes.

ZULFIRE stood.

The dragon swung—
Zulfire sprinted up its arm, punching its skull with a volcanic blow.

It screeched.

Zulfire wiped his knuckles.

"…Not enough power."

A quiet voice inside him growled:

🔥 You are not alone tonight.

A golden streak pierced the sky.

S H R O O O M !!

XANTHARA landed softly on a rooftop.

Her outfit shimmered radiant white and gold.
A full-face white mask wrapped around her,
its glowing golden star-shaped eyes shining like miniature suns.

She exhaled.

"…Okay… don't panic…"

The dragon snapped at her—

She vanished in a flash, slicing through its shadow limbs with golden arcs.

She landed beside VZX, mask glowing.

He looked at her.

"…Who are you?"

Her voice echoed softly behind the mask.

"…Xanthara… I think."

Zulfire landed beside them, fire dispersing beneath him.

Three masked figures.
Three colors.
Three strangers.

VZX stepped forward.

"…I'm VZX."

Zulfire nodded.

"…Zulfire."

Xanthara raised a hand nervously.

"…Xanthara."

The dragon roared—
city lights flickered.

VZX turned.

"…We're doing this together."

Zulfire smirked.

"I was waiting for that."

Xanthara tightened her stance.

"…Same here."

The Demon Dragon attacked.

Shadow flames surged.

VZX created a purple soul barrier,
Zulfire reinforced it with fire,
Xanthara redirected impact with golden light.

The explosion shook the district.

They split.

Zulfire charged up the dragon's arm, fists blazing.
VZX slid beneath it, firing waves of violet energy.
Xanthara danced along its wings, cutting corruption tendrils with golden blades.

The beast staggered.

They regrouped—
injured, breathing hard, but standing.

Zulfire muttered:

"…Didn't catch your names."

VZX answered:

"You weren't supposed to."

Xanthara added softly:

"…Maybe someday."

The dragon rose, forming a massive corruption storm.

A final attack.

VZX summoned purple energy.
Zulfire ignited flames.
Xanthara brightened like a dawn star.

"NOW!!"

Purple—
Red—
Gold—

Their combined strike detonated—

S O U L S T R I K E

The dragon exploded into dark ash.

Silence followed.

The three masked warriors stood in the ruins.

Alive.
Silent.
Still strangers.

VZX backed away.

"…We should go."

Zulfire nodded.
Xanthara agreed.

They vanished—
three trails of purple, red, and gold.

Three unknowns.

One destiny.

Chapter 6 Ends.`},{id:7,title:"Chapter 7 — Reflections of the Unknown",content:`The town felt different the next morning.

Not destroyed.
Not chaotic.
Just… heavier.

As if the shadows from last night were still watching.

Veon walked down the school hallway slowly, hands deep in his pockets, eyes half-focused. His body felt normal—but his mind wouldn't slow down.

Every few steps, he felt something.

A pulse.
A memory.
A flash of purple energy in the back of his vision.

The battle replayed in his head:

A fire-wreathed warrior.
A golden streak of light.
And himself… masked, unrecognizable, unnatural.

Three strangers standing together like they had always been one.

Why does it feel like I know them?

Veon shook his head.

He couldn't focus.

The incomplete heart mark on his hand throbbed beneath his sleeve—
softly, but enough to remind him:

You're not normal.

Not anymore.

In class, Zharc slumped into his seat, hair messy, eyes half-dead.

He hid his bandaged knuckles under the desk.

Every time he closed his eyes, he saw the full-face purple mask.
And the golden one.

The way the three of them moved together…

"That wasn't luck," he muttered under his breath.
"That was… something else."

A quiet instinct inside him whispered what he already feared:

Those two… I've met them before.

Not like that.
But before.

Zharc clicked his pen, frustrated.

He wanted answers.
He wasn't sure he wanted the truth.

Xyla, meanwhile, looked completely normal.

Smiling.
Eating chocolate.
Talking too much.

But inside?

Her heart was racing.

Every time she blinked, she saw the purple glow, the red flames, the massive dragon shattering into dust.

She had fought it.

She had survived it.

She had helped defeat it.

And standing next to her… masked, mysterious… two figures she felt she should have recognized.

Xyla pressed her fingers against her lips.

Could… one of them be Veon?
Or Zharc?

Her heart thumped at the thought.

But no.
That wasn't possible.
Right?

She looked across the room.

Veon was sketching something intensely.
Zharc was half-asleep.

Too normal.
Too calm.

No way they were secretly masked warriors.

"…no way… right?" she whispered.

During lunch break, the three ended up eating together like usual.

Not one of them mentioned the dragon.
Not one of them mentioned the energy.
Not one of them mentioned the masked warriors they met last night.

It was almost comical how normal they tried to act.

Zharc yawned.

Xyla kicked his leg.

Veon stared at his food, lost.

Finally, Xyla spoke:

"Did… anyone… feel weird last night?"

Veon froze.

Zharc looked up sharply.

Xyla waved her hands fast.
"No no no, not like weird weird—I mean like… um… I don't know… the moon was acting funny?"

She said it with a laugh, but Veon noticed her eyes.

They weren't joking eyes.

They were scared eyes.

Zharc nudged his tray forward.

"Yeah. Night felt… strange."

Veon swallowed.

"Yeah. Same."

None of them looked at each other after that.

None of them dared.

The silence said everything they couldn't.

When school ended, Veon walked home alone.

He hesitated at the entrance of the construction site from last night.

The crater was gone.

The debris cleaned.

As if nothing ever happened.

As if the battle… the dragon… the three masked warriors… never existed at all.

"Impossible…"

His mark pulsed.

Something flickered in his peripheral vision.

A shape.
A silhouette.
Standing on a rooftop far away.

A figure with… glowing red eyes?

Veon's breath hitched.

But when he blinked, the figure was gone.

Only the cold wind remained.

Across town, Zharc and Xyla separately felt it too:

A presence.
A watcher.
Something that didn't feel human.

Something corrupted…
but intelligent.

Something that hadn't been destroyed last night.

The demon dragon was just the beginning.

Something stronger was watching them.

Waiting.

Smiling.

Later that night, all three lay awake in their beds.

Veon stared at the incomplete-heart mark glowing faintly.
Zharc clenched his sheet with heat rising from his palms.
Xyla curled under her blanket, clutching her pillow tighter.

Their thoughts overlapped without them knowing:

Who were those masked warriors?
What is happening to this town?
Am I the only one… changing?

Three hearts.
Three minds.
Three secrets.

All beating toward the same future.

The Zoulverse was opening.

And none of them were ready.

Chapter 7 Ends.`},{id:8,title:"Chapter 8 — The One Who Watches",content:`The night didn't feel like night anymore.

It felt awake.

Something in the air breathed softly,
moved silently,
and watched carefully.

Veon woke before the sun rose, sitting upright as if pulled by an invisible thread.

His room was still.

Too still.

His mark glowed faintly beneath his sleeve—soft, steady, and cautious.

"…you again," he whispered.

He stepped to the window slowly.

Nothing outside.
An empty road.
Quiet houses.
Motionless trees.

But the mark pulsed sharply, like a heartbeat warning him:

Someone is watching.

Veon stepped back, chills running down his arms.

Sleep was impossible.

Across town, Zharc's eyes snapped open in the darkness.

A faint heat pressed against his chest.

Not warm.
Not painful.
Just… alert.

He stared at the corner of his room.

He didn't move.
He didn't breathe.

A shape stood there.

Long.
Still.
Bent forward, like listening.

Zharc's heart stopped—

Blink.

Gone.

The heat in his chest didn't fade.

It sharpened.

"…if you come again…" he muttered shakily,
"…I'll… try."

His words had confidence.
His hands did not.

Xyla lay wide awake, hugging her pillow.

Light shimmered faintly around her feet—
uncontrolled, flickering like nervous sparks.

She stared at her window.

Nothing outside.
But the silence felt deliberate.
As if something waited patiently, just out of sight.

She whispered:

"Xernes… you're here, right?"

Warmth answered inside her chest.

She calmed a little.

But only a little.

After last night, after that battle, after sensing two powerful masked figures—

She felt something else.

Something that wasn't them.

Something colder.

Something that watched.

Morning at School

Students laughed.
Teachers shouted.
Everything looked normal.

But Veon, Zharc, and Xyla walked through the halls slower than usual.

Their steps were careful.

Their eyes scanned corners no one else looked at.

They didn't speak to each other.
They didn't act strange.
They didn't share anything.

Yet all three felt it:

The same invisible pressure.

A presence moving behind them.

Not following them.
Following the energy they carried.

The Stairwell

Zharc stepped into the empty stairwell during break.

He just wanted silence.

He closed his eyes.

Tap.
Tap.

Footsteps above him.

He looked up sharply.

A silhouette stood at the top.

Not human-shaped.
Not shadow-shaped.

Something in between.

Zharc stepped back.

"…hello?"

The figure didn't respond.

Didn't move.

Didn't blink.

Zharc clenched his hand, sparks of heat forming—

"Zharc?"

Xyla's voice echoed from below.

He flinched.

The figure vanished instantly.

Xyla walked up the steps slowly.

"…are you okay?"

Zharc straightened his posture.

"Yeah. Just tired."

But his eyes stayed fixed on the empty space where the figure stood.

The Library Incident

Veon sat in the library pretending to read.

A sudden thump made him look up.

A book had fallen from the top shelf on its own.

He walked toward it cautiously.

It lay open to a page showing a sketch:

A tall, thin creature with dim red eyes.

The same shape he sensed at dawn.

Veon touched the page.

Warm.

Fresh.

Drawn recently.

Too recently.

"Veon?"

Xyla appeared behind him.

He closed the book instantly.

"It's nothing."

She nodded slowly, but she saw the tension in his grip.

Something was wrong.

Something close.

Lunchtime Silence

The three of them sat together, eating quietly.

The air felt heavier.

None of them spoke about what they felt.
None of them asked questions.
None of them connected dots.

They couldn't.

Even if they tried, they had no reason to believe the others sensed anything.

Veon rubbed his thumb over his sleeve where his mark was hidden.
Zharc kept tapping his foot unconsciously.
Xyla kept glancing over her shoulder.

But none of them said a word.

Not here.

Not about that.

The Cold Wind

When the final bell rang, a freezing gust swept through the hallways.

Students flinched.

Teachers frowned.

But three people froze completely.

Veon.
Zharc.
Xyla.

Each one felt the same thing:

A familiar cold pressure.

The same coldness that filled the air the night the Demon Dragon appeared.

Something was outside.

Something powerful.

Something aware.

They didn't look at each other.
They didn't talk.
They didn't react openly.

Each one simply tightened their grip on their bag and walked out of the building at different times.

Three students.
Three separate paths.
Three unspoken fears.

None of them knew the others felt the same thing.

None of them knew they were being watched by the same presence.

None of them knew the watcher was growing stronger,
closer,
and smarter.

Not a beast.
Not a roar.
Not a monster.

A shadow—

Silent.
Learning.
Waiting.

The One Who Watches.

Chapter 8 Ends.`},{id:9,title:"Chapter 9 — Footsteps Without a Body",content:`The day ended, but the tension didn't.

Even after leaving school, the three walked home with the same uneasy rhythm—
looking normal,
acting normal,
but feeling anything except normal.

The sky above the town dimmed to gray,
but the darkness settling over the streets wasn't from the clouds.

It was from something else.

Something moving.

Something shifting.

Something watching.

Veon — The Moving Shadow

Veon cut through the narrow lane near his home, sketchbook in hand.

He kept telling himself it was just his imagination.

Just leftover fear from the dragon fight.
Just tiredness.
Just stress.

But then—

A shadow stretched along the wall beside him.

Not his own.

Not shaped like anything he recognized.

Too tall.
Too thin.
Too slow to be wind,
too smooth to be human.

Veon froze.

The shadow paused too.

He held his breath.

Then—

The shadow bent slightly,
as if lowering its head to observe him.

Veon stepped back.

His mark pulsed once under his sleeve.

The shadow suddenly snapped out of shape—

and vanished.

Only the quiet street remained.

Veon exhaled shakily.

"…not again…"

He began walking faster.

Zharc — The Whispering Silence

Zharc walked along the main road, acting annoyed, not scared.

He kicked a stray pebble, hands in pockets.

If something was following him, he would know.

He refused to look behind him.

Refused to give it satisfaction.

But the silence was loud.

Too loud.

Cars passed.
Dogs barked.
People talked.

But behind him—
behind him—
there was nothing.

Not a footstep.
Not a breath.
Not a sound.

Just emptiness.

A silence that wasn't natural.

Zharc stopped walking.

He didn't turn.

He didn't want to.

"…you're still there, aren't you?"

A faint vibration moved through the ground.

Something very light stepped.

Something that didn't weigh enough to make a proper sound.

Zharc clenched his jaw and kept walking.

He didn't want to see it.

Not tonight.

Xyla — The Eyes in the Park

Xyla took her usual shortcut through the park.

She wasn't scared.

Just… alert.

Her steps softened when the wind stopped suddenly.

No leaves rustled.
No swings creaked.
No birds chirped.

The silence was too perfect.

She took another step—

Snap.

A twig broke behind her.

She turned fast.

Nothing.

Then she noticed:

On the ground behind her—

a footprint.

Not a human one.

Long. Narrow. Deep at the front, hardly any weight at the heel.

Something had taken a step right behind her.

Xyla's breath hitched.

She slowly stepped backward, not taking her eyes off the footprint.

Then she ran.

She didn't stop until she reached her home gate.

Only then did she allow herself to breathe again.

The Watcher Moves

Night fell.

Streetlights flickered.

Windows shut.

Families slept.

But high above the town—
on the rooftop of an empty building—
the watcher crouched.

It had no solid form.
Its body rippled like smoke trapped in a shape.
And its eyes—
faint, red, unblinking—
shifted to three different directions.

Toward Veon's house.
Toward Zharc's neighborhood.
Toward Xyla's block.

It didn't know their faces.
It didn't know their names.
It didn't know their identities.

It only followed the lingering traces of the energies they unleashed.

The watcher tilted its head.

Studying.
Analyzing.
Learning.

Then it moved—
not crawling,
not walking—

but sliding across the rooftop like a stretched shadow.

Silent.
Fast.
Predatory.

It dissolved into the darkness of the night.

Three Rooms, One Fear

Veon lay awake, staring at the ceiling.
Zharc sat by his window, fist on his knee.
Xyla hugged her pillow, unable to close her eyes.

Three different houses.
Three different rooms.
Three different fears.

None of them knew the others were awake.

None of them knew the same shadow moved near each of their homes.

And none of them knew—

A Hadial that doesn't roar
A Hadial that doesn't fight
A Hadial that doesn't reveal itself

is the most dangerous kind of all.

The kind that learns your patterns.
Learns your energy.
Learns your weaknesses.

The kind that waits for the perfect moment.

Somewhere outside, unseen by all three—

A faint, echoing step sounded.

Tap.

Then disappeared.

Chapter 9 Ends.`},{id:10,title:"Chapter 10 — The Guardian in the Shadows",content:`Night returned like a slow exhale over the town.
But tonight, the shadows felt different.
They felt alive.

1 — Something Follows Veon

Veon walked home alone, bag slung over his shoulder. The streetlights flickered behind him, one by one, as if something passed beneath each bulb.

He didn't look back.
He didn't need to.
The presence was already there.

Cold.
Silent.
Watching.

His mark throbbed beneath his sleeve.

"…again…"

He sped up.

A cat hissed from a rooftop, fur standing straight.
It wasn't hissing at Veon.
It was hissing at the thing behind him.

Something tall.
Something thin.
Something that didn't walk—
but glided.

Veon turned quickly—
Nothing.

Just a long, stretched shadow fading into darkness.

He shivered.

Kept walking.

He didn't know it…
But the Guardian followed him the entire way home,
matching every step with unnatural precision.

2 — Xyla's Narrow Escape

Xyla had taken a shortcut through the alley behind her apartment.

Bad idea.

Two low-level Hadials slithered from the trash bins—
smaller than the dragon, but feral and hungry.

Xyla froze.

Her breath caught.

She whispered:

"…not again… not here…"

She was about to call Xernes—

When something dropped between her and the monsters.

Tall.
Silent.
Unmoving.

The Hadials recoiled immediately, screeching, sensing something ancient.

Xyla couldn't breathe.

The shadow figure didn't move.

Didn't speak.

Didn't turn.

It just existed—

And the Hadials broke.

They fled, vanishing into the deeper alley before the figure even lifted a finger.

Xyla slammed her back against the wall, trembling.

The figure slowly turned its head toward her—

A faceless mask.
Two faint purple rings.

Xyla gasped—

Blink.

Gone.

Completely vanished as if it had never been there.

She slid down to the ground, shaking.

"…what… was that…?"

3 — Zharc Sees Too Much

Zharc sat on the rooftop of his building, knees pulled close, staring at the night sky.

He felt watched.

He always felt watched now.

"Come out," he muttered.

Nothing.

Only the wind.

He sighed.

Until—

The TV antenna next to him bent… by itself.

Zharc jolted to his feet.

A shadow rose behind him.

Long.
Thin.
Silent.

He stepped back.

His heartbeat thundered in his ears.

He whispered to himself:

"…is this a Hadial… or something worse?"

The figure leaned closer.

Zharc nearly transformed on instinct—

But suddenly,
from the alley below,
a Hadial screeched in pain.

Zharc rushed to look—

The creature below had been crushed into the pavement by an unseen force.

When he turned back—

The shadow figure was gone.

Zharc swallowed hard.

"…what… are you?"

4 — The Silent Confrontation

The next day, after school,
all three met on the way home.

The air was uneasy.
Their eyes restless.

They walked the empty road in silence.

Xyla stopped first.

"…Guys… I need to say something."

Zharc nodded.

Veon stayed silent, but the tension around him was sharp.

"I… I saw something last night," Xyla whispered.

Zharc exhaled shakily.

"I saw it too."

Veon's pulse jumped.

"…describe it."

They all spoke at the same time:

"Tall."
"Thin."
"Shadow-like."

They all froze.

The same description.

The same creature.

The same night.

A cold wind split the silence.

Veon's mark burned.

They turned—

And there it was.

Standing in the middle of the road.

Tall.
Still.
Mask-like face with faint purple eyes.

No threat.
No motion.

Just watching.

Xyla grabbed Veon's sleeve unconsciously.

Zharc clenched his fists, heat gathering in his palms.

Veon took one step forward—

The figure tilted its head slightly.

A gesture almost…
Curious.

Then—

S H R R R P

It dissolved into the ground,
melting into the shadow of a passing truck,
and vanished.

Just like that.

Silence.

No roar.
No attack.
No warning.

Xyla exhaled shakily.

"…it didn't attack…"

Zharc's voice was low.

"It was looking at Veon."

Veon's blood ran cold.

He didn't know why.
He didn't know what it wanted.

But his mark pulsed once—

Not in fear.

In recognition.

5 — The Truth the Reader Knows

Deep inside an abandoned warehouse,
the Guardian reformed in the corner.

It knelt.

A silent bow.

Its core—the swirling purple energy—pulsed softly.

Zoul's voice echoed inside it.

Not words.

Just a command.

Protect the vessel.

The Guardian bowed deeper.

Then melted back into the shadows.

Waiting.
Watching.

Always near Veon.

Always unseen.

Always protecting.

Even if they feared it.

Even if they thought it was a monster.

For the Guardian did not care for fear.

It cared only for its purpose—

Protect Zoul's chosen soul.

Chapter 10 Ends.`},{id:11,title:"Chapter 11 — Festival of Shadows",content:`The school festival was louder than usual.

Bright lights, colorful stalls, cheesy decorations, and students screaming about food coupons.
A normal festival… at least on the surface.

Veon, Zharc, and Xyla entered together, pretending everything was normal.
But the tension between them said otherwise.

All three felt it.

That same pressure from the night of the Demon Dragon.
That same quiet breath watching them from behind.
A presence that didn't belong in a place filled with laughter.

Xyla clutched her chocolate shake a little too tightly.
Veon kept glancing at shadows that didn't move right.
Zharc scanned every corner like a predator waiting for another predator.

They weren't paranoid.

Something was here.

Something waiting.

A group of classmates ran up to them wearing maid outfits, shouting:

"WELCOME TO CLASS 9-A CAFÉ!"

Zharc immediately turned around.

Veon forced a smile.

Xyla tried not to choke laughing.

But even as they laughed, even as they walked through the decorated halls, something in the festival air felt wrong. Every shadow beneath the tents stretched too far. Every quiet corner felt like eyes were staring back.

Near the auditorium, Xyla suddenly stopped.

Her voice dropped to a whisper.

"…Guys… look."

There was a stall filled with bright paper lanterns.

Except for one.
A black one.

And inside it, faintly glowing, were two thin purple rings.

A symbol.

A warning.

Veon's mark pulsed through his sleeve.

Zharc touched the lantern.

It was warm, as if someone had placed it there only seconds ago.

None of them spoke, but all three understood:

The watcher was here.

And it wanted them to know.

A scream tore through the auditorium.
Students ran out, terrified, shouting about something breaking backstage.

The trio didn't hesitate.

They slipped through the crowds and into the dark backroom.

The festival lights disappeared behind them.

The quiet replaced everything.

Inside the backstage hall, the lights were shattered.
Curtains clawed open.
A long, violent tear ran across the wall.

This wasn't an accident.

A massive Hadial stood in the shadows.
Its body pulsed with corruption, twice as big as the ones before.
Horns cracked with dark energy, arms thick enough to crush a car.

It saw them.

It roared, shaking the entire backstage.

Veon stepped forward.

But the Hadial… wasn't charging at them.

It was staring behind them.

Veon felt cold run up his spine.

Slowly, the three turned.

And saw it.

The Zoul Guardian stood silently in the hallway.

One demonic wing.
One angelic wing.
Two curved black horns.
A cracked purple halo rotating above its head.
A skull-like mask with glowing purple rings staring emptily at them.

It didn't breathe.
It didn't move.
It didn't speak.

Yet it felt like death had stepped into the room.

The Hadial charged first.

The Guardian didn't flinch.

The monster swung its massive arm at the Guardian's skull—

And the Guardian caught it with two fingers.

Two.

The Hadial screamed in pain.

With a small tilt of its head, the Guardian crushed the monster's arm like dry sand. The Hadial staggered back, regenerating violently, but before it could attack again—

The Guardian stepped forward once.

That single step broke the floor beneath it.

The Hadial swung wildly.

The Guardian's hand shot forward—

S N A P.

The monster's entire torso collapsed inward like it had been folded by an invisible force.

It tried to rise again.

Shadow tendrils burst out of its back, reaching toward the ceiling.

The Guardian lifted one hand.

A small purple circle formed behind its palm.

Calm.
Silent.
Divine.

Then—

F W O O O O O M

A beam of purifying purple light obliterated the Hadial completely.

No body.
No shadow.
Not even dust.

The backstage returned to silence.

The Guardian slowly turned toward the trio.

Xyla stepped back until her heel hit a broken light stand.
Zharc's fists trembled.
Veon's breath stopped.

The Guardian walked toward them.
Graceful.
Terrifying.
Holier than anything they had ever seen.

It stopped in front of Veon.

The skull face lowered slightly, as if bowing.
Just a small motion.

But enough to freeze Veon's heart.

And then—

S H R R P.

It dissolved into the ground, melting into the darkness, vanishing as if it had never existed.

Only silence remained.

Outside, the festival continued.

Music.
Laughing.
Fireworks.

Inside the ruined backstage, the three stood together, unable to move.

Zharc finally spoke, voice barely steady:

"…That… wasn't a Hadial."

Xyla hugged her arms, shaking.

"It looked straight at Veon…"

Veon said nothing.

His sleeve tightened around his wrist as he hid his mark.

Because his mark was burning again.

Responding.

Recognizing.

And for the first time in his life—
Veon felt like something ancient was kneeling to him.

Something powerful enough to erase monsters effortlessly.

Something he didn't understand.

Not yet.

But it understood him.

It always had.

Chapter 11 Ends.`},{id:12,title:"Chapter 12 — When the Mark Awakens",content:`Veon didn't go home straight after the festival.

He couldn't.

His hands were still shaking from the moment the Guardian bowed its skull-like head toward him.
The image replayed again and again in his mind…

One demon wing.
One angel wing.
A cracked purple halo.
That reaper-skull mask.
And those violet rings staring right into his soul.

And worst of all—

The feeling that the thing wasn't threatening him…

It was recognizing him.

Veon ran to an empty park behind the school and collapsed onto a bench, breathing hard.

He pushed up his sleeve.

His mark glowed.

Not faint.

Not soft.

But violently.

The incomplete heart pulsed like a second heartbeat under his skin, each pulse shaking his fingers.

"…what's happening to me?"

The mark had always been strange—
sometimes warm, sometimes cold—
but never like this.

Purple lines began spreading from the mark, faint but visible under the skin, like roots of light.

Veon grabbed his wrist.

"No—no—stop—"

But the mark didn't listen.

It burned—

S H R R R P

A ring of purple energy burst quietly from his arm, shaking the bench beneath him. The streetlight flickered violently.

Suddenly—
the world around him… paused.

Crickets fell silent.
Leaves stopped moving.
The wind halted mid-breeze.

Everything froze.

Veon looked around slowly.

"…hello?"

No answer.

Then—

A whisper.

Not from the outside.

Inside him.

"You are awakening."

Veon stiffened.

That voice wasn't Verse's.
It wasn't memory.
And it wasn't human.

His fingers curled.

"…who are you?"

Silence.

Then—

Another pulse shot through his mark, and a faint shape formed in front of him.

A figure made entirely of purple mist.

Tall.
Undefined.
Halo-like rings forming and breaking behind its head.

Its face was a blur—
but Veon could see the outline of a skull.
The same shape as the Guardian.

Veon stepped back.

The figure raised a hand.

"Fear not."

Its voice was layered—
deep and echoing,
like countless voices speaking as one.

Veon swallowed as his heart hammered.

"…are you the Guardian?"

The figure didn't move.

But the air shifted.

"No."

Its tone was calm.

"I am the echo of what you will become."

Veon's blood turned cold.

"What I will… what?"

The figure pointed at his glowing mark.

The shape of the broken heart rotated like a symbol awakening.

"The Guardian bowed because it recognized this."

The purple silhouette continued:

"Your evolution has begun. What sleeps in you… is older than souls."

Veon's breath hitched.

He didn't understand.
Not fully.
But part of him felt the truth in those words.

Something inside him wasn't normal.
Wasn't human.
Wasn't even just a host for Verse.

The incomplete heart blazed brighter—
filling his entire arm with warmth.

The figure stepped closer.

Veon felt no fear.
Only pressure.
A cosmic weight sitting on his chest.

"When the heart completes…"

Veon whispered:

"…what happens to me?"

The figure paused.

Its vague face tilted toward Veon's.

"You will stop being who you think you are."

The park snapped back to life.
Wind.
Sound.
Movement.

And the figure dissolved into purple smoke—

gone.

But Veon's mark didn't stop glowing.

It changed.

The incomplete heart's two halves began to shift closer—
not connected yet,
but no longer far apart.

Veon stared in horror.

"…it's evolving…"

A shiver crawled down his spine.

He didn't know what he was becoming—
but whatever the Guardian recognized…

It wasn't VZX.
It wasn't Veon.

It was something deeper.

Something ancient.

Something awakening.

Chapter 12 Ends.`},{id:13,title:"Chapter 13 — The Day the Walls Screamed",content:`School mornings were supposed to be loud.

Teachers yelling,
students running,
Xyla finishing chocolate before assembly,
Zharc half-asleep
and Veon pretending everything was normal.

But today—

The building felt dead.

Silent.
Too silent.

Almost like the school itself was holding its breath.

Veon walked through the corridor, hoodie pulled up, eyes dim with exhaustion. His mark still throbbed beneath his sleeve, reacting to something he couldn't see.

Xyla entered minutes later, rubbing her arms.

"It feels cold today… really cold."

Zharc arrived last, scanning every shadow like it might attack him.

He didn't tell the others, but he hadn't slept at all.

Something was outside his window at 3 AM.
Something with a skull-shaped face.

Something that disappeared when he blinked.

He wasn't sure if it was real.

But now?

The cold air pressing against the school walls told him he wasn't imagining anything.

And then it began.

First — a faint tremor.

Second — a low, vibrating hum in the floors.

Third —

A scream. Not human. Not alive.
Something between metal and bone being torn apart.

Students froze.
Teachers dropped their papers.

Then the walls broke.

—K R R R R R R A A A A S S H!!

Black cracks ripped through the corridor tiles, crawling like veins. A gust of freezing air blew through the hallway, extinguishing the lights.

Everything turned dark blue.

Then purple.

Then—

Stillness.

Xyla swallowed hard.

"…what was that?"

No one answered.

The tiles began to split.

Shadows rippled upward, rising like claws.

And then it burst out.

A Hadial unlike any before.

But this one wasn't huge like the Demon Dragon.

It wasn't loud.

It wasn't fast.

It was worse.

Thin.
Long.
Wrong.

Standing seven feet tall, with limbs like cracked glass filled with purple frost.

Its skull-like face stared at the students.

Not with hunger.

But with recognition.

And it whispered—

"F o u n d y o u . . ."

The glass windows exploded.

Students screamed.
Teachers ran.

The Hadial didn't move.

It only watched.

Studying.

Its hollow purple eye-sockets locked onto three people:

Veon.
Zharc.
Xyla.

Only them.

Veon's mark burned.

Hard.

Too hard.

His hand shot to his sleeve.

Not now—
not here—
not in front of everyone—

But the mark reacted on its own:

V O O O O O M —

Veon stumbled, teeth clenched, trying to suppress the glow leaking through his hoodie.

No.

Not in front of Zharc and Xyla.

No one can see.

The Hadial tilted its head toward him.

"T h e h e a r t . . . e v o l v e d . . ."

Veon froze.

Zharc stepped forward instinctively, grabbing Veon's shoulder.

"You okay?"

Veon shook him off quickly.

"Don't—touch—me—"

Not out of anger.

Fear.

The mark was seconds away from activating on its own.

Xyla screamed as the Hadial moved.

Not running.
Not charging.

Just appearing.

One blink.

Empty hallway.

Another blink.

It was right in front of her.

Xyla dropped her books and stumbled back.

The skull-like head lowered toward her.

"…your light… incomplete…"

Xyla felt her heart collapse into panic—

until something slammed into the Hadial's head, knocking it sideways.

Zharc.

Eyes cold.
Fist burning.
Jaw clenched.

"Stay away from her."

The Hadial slowly straightened, unfazed.

Its body cracked as it adjusted its crooked limbs.

This was not a normal Hadial.

This was something else.

The alarms blared.

Teachers yelled evacuation orders.

Students flooded toward exits.

But the Hadial didn't care.

It only watched the trio.

Veon backed away, voice low:

"We need to get somewhere empty."

Zharc nodded.

Xyla grabbed Veon's sleeve:

"The gym! It's big!"

They ran.

The Hadial followed.

Silent.
Cold.
Unstoppable.

The Gym Doors Slammed Shut

Veon locked them behind.

Breathing hard.

Heart racing.

Mark burning.

Zharc stepped beside him, scanning for danger.

Xyla stood behind them, trembling but ready.

The gym was empty.

The door began to crack.

—KRRR KRRR KRRRR—

It wasn't trying to break in fast.

It was peeling the metal open slowly.

Enjoying it.

Veon whispered:

"…we transform."

Zharc clenched his fists.

Xyla nodded.

But Veon's mark pulsed—

Not like before.

Not normally.

B O O O O M —

A blast of purple light erupted from his arm, cracking the wooden floor beneath him.

Zharc and Xyla stepped back, eyes wide.

"Veon—?!"

Veon's breath hitched as a second ring of purple energy formed around his wrist like a halo.

His mark glowed violently—

Almost completing itself.

Veon gritted his teeth.

"Not… now…!"

The gym doors finally snapped open.

The Hadial stepped inside.

Zharc and Xyla prepared to speak their transformation calls—

but Veon's mark flared, cutting the air with violet sparks.

The Hadial bowed its head slightly.

"T h e e v o l u t i o n… b e g i n s."

Veon's eyes widened.

"…what are you talking about?"

The Hadial pointed one crooked finger at his glowing mark—

"Y o u… a r e n o t r e a d y . . ."

Its body froze—

then turned into smoke—
escaping through the cracked ceiling.

Gone.

Just like that.

Leaving Veon trembling on his knees.

Xyla rushed to his side.

Zharc knelt too.

None transformed.

No identities were revealed.

But the truth was clear:

This wasn't an attack.

It was a warning.

A message.

A test.

And Veon's mark continued glowing even after the Hadial left.

He stared at it, terrified.

"…why won't you stop…?"

The heart was almost complete.

Almost awakened.

Almost something else.

Something neither he nor Verse understood.

Chapter 13 Ends.`},{id:14,title:"Chapter 14 — The Day Zenlora Hit the News",content:`Morning arrived like a punch.

Zenlora Higher Secondary School—usually buzzing with noise—was surrounded by police cars, parents, camera crews, and yellow tape.

The front gate was blocked off.

Students stood everywhere, whispering, crying, recording videos.

News vans were parked outside, and the biggest headline in bold letters played on giant screens:

"MYSTERIOUS INCIDENT AT ZENLORA: WALLS CRACK, STUDENTS PANIC."
"WITNESSES REPORT 'CREATURE' IN HALLWAY."
"GOVERNMENT SENDS INVESTIGATORS."

All three:

Veon.
Zharc.
Xyla.

arrived separately…

…but they all froze at the exact same moment.

Because one headline stood out more than the others:

"3 STUDENTS TARGETED — INVESTIGATION UNDERWAY."

Xyla's heart nearly burst.

"They know… they actually know…"

Zharc muttered, jaw tight:

"They don't know it was us… but someone does."

Veon's chest tightened.
His sleeve was hiding the almost-complete heart mark still glowing faintly.

He glanced at the police barricade.

Investigators scanned the hallway where the Hadial appeared.

Thermal scanners.
Drone lights.
Forensic dust.
Reporters shoving microphones at teachers.

It was chaos.

And worse—

Footage from inside Zenlora leaked.

Students' shaky mobile videos.

Screams.

Cracks spreading through the walls.

A shadow figure at the end of the hall.

A skull-like head.

Blurred, but unmistakable to them.

The Zoul Guardian.

It was everywhere now.

Played.
Replayed.
Analyzed.

People online were calling it:

"The Zenlora Phantom."
"The Skull-Man."
"A Demon."
"An Angel."

The trio watched from the crowd.

None spoke.

None blinked.

None breathed easily.

Veon whispered:

"…this is bad."

Zharc nodded silently.

Xyla stared at the news screen, hugging herself.

"It came for us," she said.
"And now the whole world knows something happened."

But before they could react—

A reporter approached a panicking student and shoved a microphone at him.

"What did you see inside Zenlora? Was it a person?"

The student's voice shook:

"I—I don't know… it wasn't human. It looked straight at me… like it was looking for someone—"

The audio cut.

News anchors blurred his face.

But the trio heard enough.

The tension between them thickened.

Zharc crossed his arms.

"It wasn't attacking the school. It was searching. We were just… in the way."

Xyla whispered:

"…no. It was searching for us."

Veon's sleeve pulsed.

He looked down.

His mark glowed faintly even through the cloth.

A deep, hollow ache spread through his wrist.

He swallowed.

"…and it found us."

The three of them slowly turned to each other.

Not as classmates.

Not as friends.

Not as people forced together by coincidence.

But as the three chosen hosts who finally shared one terrifying realization:

"This isn't random anymore."

Xyla nodded weakly.

"The dragon… the watcher… now this…"

Zharc clenched his jaw.

"…they're not just monsters."

Veon looked toward the school entrance where investigators interviewed teachers, surrounded by shattered windows and cracked floors.

His voice was low.

Shaking.

"Someone is controlling them."

A silence fell.

Cold.

Heavy.

Unavoidable.

The three stood there, in the middle of the crowd, as Zenlora Higher Secondary School became the center of national news.

The world was watching.

But more importantly—

something else was watching too.

Something stronger.
Something older.
Something awakening.

And Veon, Zharc, and Xyla could all feel it:

This was only the beginning.

Chapter 14 Ends.`},{id:15,title:"Chapter 15 — The Second Evolution of the Heart",content:`The night after the school attack felt heavier than any before.

Not because of fear.

Not because of danger.

But because of the mark.

Veon sat alone on his rooftop, hoodie off, sleeve rolled up, staring at the symbol carved into his skin.

The incomplete heart.
The mark that first appeared when that PVC pipe scratched him.
The mark that started everything.

Except now—

It wasn't the same anymore.

It pulsed in two layers.
Two heartbeats.
Two rhythms.

Purple light leaked out slowly, like veins spreading under his skin.

"…stop already," Veon whispered, pressing his thumb against the mark.

It didn't stop.

It burned brighter.

Like something inside him was waking up.
And it wasn't Verse.

Verse's voice appeared, serious in a way Veon had never heard:

"Veon… this evolution is not mine. I do not understand this energy."

Veon swallowed.

Of course Verse didn't understand.

This wasn't his mark.

This belonged to something far beyond spirit beasts.

Something older than creation.

Veon gripped his arm as the light intensified.

"Why now…?"

The wind around him shifted—sharp, cold, electric.

He looked up.

The sky above Zenlora Higher Secondary School glowed with thin streaks of purple, like cracks in the air.

Zharc felt it too.

He stood on his balcony, fire flickering through his fingertips.

"…Veon. What's happening to you?"

Even Xyla jolted awake, light bursting from her hands uncontrollably.

"Veon…? Are you okay…?"

They didn't need phones.
They didn't need messages.

They felt him.

Veon's energy was overflowing—escaping—echoing across the entire town.

The second evolution had begun.

The Pain

Veon fell to his knees.

The mark spread.

The heart shape stretched, lines branching out, turning sharper—more ancient.

A second ring of purple light spun around his wrist.

Then—

A third.

His breath collapsed.

His vision turned white.

Verse shouted in panic:

"Veon! Stay conscious! Veon!"

But Veon barely heard him.

Instead…

He heard another voice.

Deep.
Echoing.
Calm.

Like it wasn't speaking into his ears, but into his soul.

"Awakening… incomplete… vessel… unstable…"

Veon's eyes widened.

"Who… who are you?"

No answer.

The mark burned harder.

He screamed—a raw, cracking sound swallowed by the night.

Purple lightning shot into the sky.

Zharc Moves First

The blast shook Zharc's entire building.

Zyth snarled inside his mind:

🔥 "THIS IS NOT NORMAL EVOLUTION."

🔥 "GO. NOW."

Zharc didn't waste a second.

He leaped off his balcony and sprinted toward Veon's house.

Xyla's Light Breaks Loose

Xyla's bedroom filled with golden sparks.

Her hands trembled.

"Xernes—what is happening to Veon?!"

✨ "His soul is changing. But… not into us."

Xyla didn't understand.

But she didn't need to.

She grabbed her shoes and ran.

When They Arrived

Zharc reached Veon's rooftop first.

What he saw froze him.

Veon kneeling.
Purple cracks glowing under his skin.
Energy spiraling around him like a storm.

The heart mark had changed:

Now two curved lines had formed around it, like wings—
but sharp, broken, torn.

Not angelic.

Not demonic.

Something else.

Something unknown.

Zharc stepped forward.

"Veon!! Can you hear me?!"

Veon looked up—eyes glowing purple.

For a moment, Zharc saw something behind those eyes.

A shadow.
A presence.
Watching from inside him.

Xyla reached the rooftop seconds later.

Her breath caught.

"Oh my god… Veon…"

The purple aura dragged the air upward like gravity was reversed.

Veon tried to speak, but the mark pulsed again—

B O O O O O M —

A wave of purple force blasted outward.
Zharc shielded Xyla with flames.
Xyla shielded Zharc with light.

Veon screamed again—

And the mark completed its second evolution.

Two rings.
Two wings.
Two pulses.

Not a heart anymore.

A symbol of awakening.

A key.

A warning.

The purple storm slowly died down.

Veon collapsed forward.

The mark dimmed.

Verse finally spoke—terrified:

"Veon…
that power wasn't mine.
It wasn't from any Soul I know."

Zharc and Xyla rushed to support him as he struggled to stay conscious.

"…I'm okay," Veon whispered, even though he clearly wasn't.

Xyla held his shoulders, tears in her eyes.

"What happened to you…?"

Veon stared at the mark.

It stared back.

And in a shaken, hollow voice, he answered:

"I think…
something else is inside me."

Chapter 15 Ends.`}]}];function Mc({onStorySelect:v}){return a.jsx("section",{className:"min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8",children:a.jsxs("div",{className:"max-w-7xl mx-auto",children:[a.jsxs("div",{className:"text-center mb-16",children:[a.jsx("h2",{className:"font-['Cinzel'] text-4xl sm:text-5xl md:text-6xl mb-4 bg-gradient-to-r from-[#8A5DFF] to-[#24C3FF] bg-clip-text text-transparent",children:"Story Library"}),a.jsx("p",{className:"font-['Bebas_Neue'] text-xl text-gray-400 tracking-wider",children:"Explore the Chronicles of the Zoulverse"})]}),a.jsx("div",{className:"grid gap-8 md:grid-cols-2 lg:grid-cols-3",children:Bu.map(k=>a.jsxs("div",{className:"group relative bg-gradient-to-br from-[#0B0F29] to-[#141A40] rounded-2xl overflow-hidden border border-[#8A5DFF]/20 hover:border-[#8A5DFF]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(138,93,255,0.3)] hover:scale-105",children:[a.jsxs("div",{className:"relative h-64 overflow-hidden",children:[a.jsx(Il,{src:k.cover,alt:k.title,className:"w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"}),a.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#0B0F29] via-transparent to-transparent"})]}),a.jsxs("div",{className:"p-6",children:[a.jsx("h3",{className:"font-['Cinzel'] text-xl mb-3 text-white line-clamp-2",children:k.title}),a.jsx("p",{className:"font-['Lora'] text-gray-400 text-sm mb-4 line-clamp-3",children:k.description}),a.jsxs("div",{className:"flex items-center gap-2 mb-4 text-[#24C3FF]",children:[a.jsx(Ru,{className:"w-4 h-4"}),a.jsxs("span",{className:"font-['Bebas_Neue'] text-sm tracking-wider",children:[k.chapters.length," Chapters"]})]}),a.jsx("button",{onClick:()=>v(k.id),className:"w-full py-3 bg-gradient-to-r from-[#8A5DFF] to-[#24C3FF] rounded-lg text-white font-['Bebas_Neue'] text-lg tracking-wider hover:shadow-[0_0_20px_rgba(138,93,255,0.5)] transition-all duration-300 group-hover:from-[#24C3FF] group-hover:to-[#FFD46A]",children:"Start Reading"})]})]},k.id))})]})})}function Pc({storyId:v,onBack:k}){const c=Bu.find(X=>X.id===v),[b,I]=ce.useState(0),[H,_]=ce.useState([]);ce.useEffect(()=>{const X=localStorage.getItem(`zoulverse-bookmark-${v}`);X&&_(JSON.parse(X));const O=localStorage.getItem(`zoulverse-last-chapter-${v}`);O&&I(parseInt(O))},[v]),ce.useEffect(()=>{localStorage.setItem(`zoulverse-last-chapter-${v}`,b.toString())},[b,v]);const z=()=>{const X=c.chapters[b].id;let O;H.includes(X)?O=H.filter(K=>K!==X):O=[...H,X],_(O),localStorage.setItem(`zoulverse-bookmark-${v}`,JSON.stringify(O))};if(!c)return a.jsx("div",{className:"min-h-screen flex items-center justify-center pt-16",children:a.jsxs("div",{className:"text-center",children:[a.jsx("p",{className:"text-2xl text-gray-400 mb-4",children:"Story not found"}),a.jsx("button",{onClick:k,className:"px-6 py-3 bg-[#8A5DFF] rounded-lg text-white hover:bg-[#7347cc] transition-colors",children:"Back to Library"})]})});const Z=c.chapters[b],pe=H.includes(Z.id);return a.jsxs("div",{className:"min-h-screen bg-[#0E1120] pt-16",children:[a.jsx("div",{className:"sticky top-16 z-40 bg-[#0B0F29]/95 backdrop-blur-md border-b border-[#8A5DFF]/20",children:a.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4",children:[a.jsxs("div",{className:"flex items-center justify-between mb-4",children:[a.jsxs("button",{onClick:k,className:"flex items-center gap-2 text-gray-400 hover:text-white transition-colors",children:[a.jsx(ec,{className:"w-5 h-5"}),a.jsx("span",{className:"font-['Bebas_Neue'] tracking-wider",children:"Back to Library"})]}),a.jsx("button",{onClick:z,className:`p-2 rounded-lg transition-all ${pe?"text-[#FFD46A] bg-[#FFD46A]/10":"text-gray-400 hover:text-[#FFD46A] hover:bg-[#141A40]"}`,children:pe?a.jsx(_l,{className:"w-5 h-5"}):a.jsx(oc,{className:"w-5 h-5"})})]}),a.jsx("h1",{className:"font-['Cinzel'] text-2xl sm:text-3xl text-white mb-2 line-clamp-2",children:c.title}),a.jsx("p",{className:"font-['Bebas_Neue'] text-[#24C3FF] tracking-wider",children:Z.title})]})}),a.jsxs("div",{className:"hidden lg:block fixed left-4 top-32 w-64 max-h-[calc(100vh-10rem)] overflow-y-auto bg-[#0B0F29] rounded-xl border border-[#8A5DFF]/20 p-4",children:[a.jsx("h3",{className:"font-['Bebas_Neue'] text-lg text-[#8A5DFF] mb-4 tracking-wider",children:"Chapters"}),a.jsx("div",{className:"space-y-2",children:c.chapters.map((X,O)=>a.jsx("button",{onClick:()=>I(O),className:`w-full text-left px-3 py-2 rounded-lg transition-all font-['Lora'] text-sm ${O===b?"bg-[#8A5DFF] text-white":"text-gray-400 hover:text-white hover:bg-[#141A40]"}`,children:a.jsxs("div",{className:"flex items-center gap-2",children:[H.includes(X.id)&&a.jsx(_l,{className:"w-4 h-4 text-[#FFD46A]"}),a.jsx("span",{className:"line-clamp-2",children:X.title})]})},X.id))})]}),a.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[a.jsx("div",{className:"bg-[#0B0F29] rounded-2xl border border-[#8A5DFF]/20 p-6 sm:p-8 md:p-12 mb-8",children:a.jsx("div",{className:"font-['Lora'] text-base sm:text-lg leading-relaxed text-gray-300 whitespace-pre-line",children:Z.content})}),a.jsxs("div",{className:"flex items-center justify-between gap-4",children:[a.jsxs("button",{onClick:()=>I(Math.max(0,b-1)),disabled:b===0,className:`flex items-center gap-2 px-6 py-3 rounded-lg font-['Bebas_Neue'] tracking-wider transition-all ${b===0?"bg-gray-800 text-gray-600 cursor-not-allowed":"bg-[#8A5DFF] text-white hover:shadow-[0_0_20px_rgba(138,93,255,0.5)]"}`,children:[a.jsx(dc,{className:"w-5 h-5"}),"Previous"]}),a.jsxs("span",{className:"font-['Bebas_Neue'] text-gray-400 tracking-wider",children:[b+1," / ",c.chapters.length]}),a.jsxs("button",{onClick:()=>I(Math.min(c.chapters.length-1,b+1)),disabled:b===c.chapters.length-1,className:`flex items-center gap-2 px-6 py-3 rounded-lg font-['Bebas_Neue'] tracking-wider transition-all ${b===c.chapters.length-1?"bg-gray-800 text-gray-600 cursor-not-allowed":"bg-[#8A5DFF] text-white hover:shadow-[0_0_20px_rgba(138,93,255,0.5)]"}`,children:["Next",a.jsx(cc,{className:"w-5 h-5"})]})]}),a.jsx("div",{className:"lg:hidden mt-8",children:a.jsxs("details",{className:"bg-[#0B0F29] rounded-xl border border-[#8A5DFF]/20 p-4",children:[a.jsx("summary",{className:"font-['Bebas_Neue'] text-lg text-[#8A5DFF] cursor-pointer tracking-wider",children:"All Chapters"}),a.jsx("div",{className:"mt-4 space-y-2",children:c.chapters.map((X,O)=>a.jsx("button",{onClick:()=>I(O),className:`w-full text-left px-3 py-2 rounded-lg transition-all font-['Lora'] text-sm ${O===b?"bg-[#8A5DFF] text-white":"text-gray-400 hover:text-white hover:bg-[#141A40]"}`,children:a.jsxs("div",{className:"flex items-center gap-2",children:[H.includes(X.id)&&a.jsx(_l,{className:"w-4 h-4 text-[#FFD46A]"}),a.jsx("span",{children:X.title})]})},X.id))})]})})]})]})}function Rc(){const v=[{name:"ZOUL",title:"The First Soul",image:"https://images.unsplash.com/photo-1736678595826-2d3e0b94638c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxteXN0aWNhbCUyMGNvc21pYyUyMGVuZXJneXxlbnwxfHx8fDE3NjM3NDU5NTN8MA&ixlib=rb-4.1.0&q=80&w=1080",powers:"Omnipotent Soul Energy, Reality Manipulation, Creation & Destruction",role:"The Origin of All Existence",lore:"ZOUL is not a being, but the essence itself. All souls, all realities, all dimensions stem from ZOUL's infinite energy. It exists beyond time and comprehension."},{name:"Veon (VZX)",title:"Bearer of the Incomplete Heart",image:"https://images.unsplash.com/photo-1604305526688-935181d17565?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYWxheHklMjBzdGFycyUyMHB1cnBsZXxlbnwxfHx8fDE3NjM2NjMyNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",powers:"Purple Soul Energy, Reality Wishes, Verse (Lion Spirit)",role:"The Mysterious Vessel",lore:"Veon carries a mark that even Verse doesn't understand. His incomplete heart symbol reacts to ancient energies, and the Zoul Guardian bows to him. His true purpose remains hidden."},{name:"Zharc (Zulfire)",title:"The Flame Writer",image:"https://images.unsplash.com/photo-1762217235246-4235328d882b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwZmFudGFzeSUyMGNoYXJhY3RlcnxlbnwxfHx8fDE3NjM3NDU5NTR8MA&ixlib=rb-4.1.0&q=80&w=1080",powers:"Red-Gold Fire Manipulation, Zyth (Tiger Spirit), Volcanic Strength",role:"The Creative Warrior",lore:"A talented writer with terrible drawing skills, Zharc was chosen by Zyth, the Flaming Tiger. His fire burns with the intensity of molten lava and volcanic fury."},{name:"Xyla (Xanthara)",title:"The Lightbearer",image:"https://images.unsplash.com/photo-1681673819379-a183d9acf860?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtaWMlMjBuZWJ1bGElMjBzcGFjZXxlbnwxfHx8fDE3NjM2NTI1Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080",powers:"Golden Light Energy, Xernes (Leopard Spirit), Photon Speed",role:"The Radiant Guardian",lore:"Cheerful and energetic, Xyla was chosen by Xernes, the Glowing Leopard. Her light can heal, protect, and cut through darkness with blinding precision."},{name:"Verse",title:"The Soul Lion",image:"https://images.unsplash.com/photo-1604305526688-935181d17565?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYWxheHklMjBzdGFycyUyMHB1cnBsZXxlbnwxfHx8fDE3NjM2NjMyNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",powers:"Soul Energy Projection, Purple Lightning, Ancient Wisdom",role:"Spirit Beast Partner of Veon",lore:"A majestic lion of green-gold energy who chose Veon as his host. Even Verse fears the incomplete heart mark, recognizing it as something beyond his realm."},{name:"Zyth",title:"The Flame Tiger",image:"https://images.unsplash.com/photo-1762217235246-4235328d882b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwZmFudGFzeSUyMGNoYXJhY3RlcnxlbnwxfHx8fDE3NjM3NDU5NTR8MA&ixlib=rb-4.1.0&q=80&w=1080",powers:"Volcanic Fire, Heat Manipulation, Explosive Combat",role:"Spirit Beast Partner of Zharc",lore:"A fierce and violent tiger spirit wreathed in flames. Zyth's power burns with the intensity of molten earth, granting Zharc devastating offensive abilities."},{name:"Xernes",title:"The Light Leopard",image:"https://images.unsplash.com/photo-1681673819379-a183d9acf860?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtaWMlMjBuZWJ1bGElMjBzcGFjZXxlbnwxfHx8fDE3NjM2NTI1Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080",powers:"Radiant Light, Healing Energy, Photon Manipulation",role:"Spirit Beast Partner of Xyla",lore:"An elegant leopard made of pure golden light. Xernes is gentle yet powerful, offering Xyla both protection and incredible speed."},{name:"The Zoul Guardian",title:"The Skull Reaper",image:"https://images.unsplash.com/photo-1736678595826-2d3e0b94638c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxteXN0aWNhbCUyMGNvc21pYyUyMGVuZXJneXxlbnwxfHx8fDE3NjM3NDU5NTN8MA&ixlib=rb-4.1.0&q=80&w=1080",powers:"Absolute Protection, Soul Purification, Reality Erasure",role:"Protector of the Vessel",lore:"A mysterious entity with one demon wing, one angel wing, and a cracked purple halo. It watches over Veon silently, destroying threats before they reach him. Its true nature remains unknown."}];return a.jsx("section",{className:"min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8",children:a.jsxs("div",{className:"max-w-7xl mx-auto",children:[a.jsxs("div",{className:"text-center mb-16",children:[a.jsx("h2",{className:"font-['Cinzel'] text-4xl sm:text-5xl md:text-6xl mb-4 bg-gradient-to-r from-[#8A5DFF] to-[#24C3FF] bg-clip-text text-transparent",children:"Characters"}),a.jsx("p",{className:"font-['Bebas_Neue'] text-xl text-gray-400 tracking-wider",children:"Meet the Souls of the Zoulverse"})]}),a.jsx("div",{className:"grid gap-8 md:grid-cols-2 lg:grid-cols-3",children:v.map((k,c)=>a.jsxs("div",{className:"group bg-gradient-to-br from-[#0B0F29] to-[#141A40] rounded-2xl overflow-hidden border border-[#8A5DFF]/20 hover:border-[#8A5DFF]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(138,93,255,0.3)] hover:scale-105",children:[a.jsxs("div",{className:"relative h-56 overflow-hidden",children:[a.jsx(Il,{src:k.image,alt:k.name,className:"w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"}),a.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#0B0F29] via-transparent to-transparent"})]}),a.jsxs("div",{className:"p-6",children:[a.jsx("h3",{className:"font-['Cinzel'] text-2xl mb-1 text-white",children:k.name}),a.jsx("p",{className:"font-['Bebas_Neue'] text-sm text-[#24C3FF] mb-4 tracking-wider",children:k.title}),a.jsxs("div",{className:"space-y-3 mb-4",children:[a.jsxs("div",{children:[a.jsx("h4",{className:"font-['Bebas_Neue'] text-xs text-[#FFD46A] mb-1 tracking-wider",children:"Powers"}),a.jsx("p",{className:"font-['Lora'] text-sm text-gray-400",children:k.powers})]}),a.jsxs("div",{children:[a.jsx("h4",{className:"font-['Bebas_Neue'] text-xs text-[#FFD46A] mb-1 tracking-wider",children:"Role"}),a.jsx("p",{className:"font-['Lora'] text-sm text-gray-400",children:k.role})]})]}),a.jsx("p",{className:"font-['Lora'] text-sm text-gray-500 italic",children:k.lore})]})]},c))})]})})}function Oc(){const[v,k]=ce.useState(null),c=[{id:1,era:"The Origin",title:"ZOUL Awakens",description:"In the void of nonexistence, ZOUL simply... was. The First Soul, eternal and infinite, begins to pulse with creative energy.",details:"From this first pulse, the concept of reality itself was born. Time began. Space expanded. Dimensions fractured into infinite possibilities."},{id:2,era:"Age of Creation",title:"Birth of Light and Shadow",description:"ZOUL splits its essence, creating two fundamental forces that would shape all existence.",details:"Light—the force of creation, hope, and life. Shadow—the force of mystery, transformation, and necessary destruction. Neither good nor evil, both essential for balance."},{id:3,era:"The Fracture",title:"Multiverse Formation",description:"Reality splits into countless branches, creating infinite universes, realms, and dimensions.",details:"Each reality follows different laws. Some flourish with life, others burn with chaos. Ancient beings emerge from the strongest realms, becoming guardians and destroyers."},{id:4,era:"Age of Spirits",title:"Spirit Beasts Awaken",description:"Powerful soul entities take form as Spirit Beasts, seeking worthy hosts to bond with.",details:"Verse, Zyth, Xernes, and countless others emerge from concentrated soul energy. They search across dimensions for hosts who resonate with their essence."},{id:5,era:"The Corruption",title:"Hadials Appear",description:"Shadow energy twists and corrupts, creating mindless monsters called Hadials that threaten all realms.",details:"These creatures hunt souls, consuming energy to grow stronger. They emerge from cracks between dimensions, spreading chaos wherever they appear."},{id:6,era:"Modern Era",title:"Three Hosts Chosen",description:"In an ordinary town, three students are chosen by Spirit Beasts, awakening powers they don't understand.",details:"Veon, Zharc, and Xyla begin their transformation. None know the others' secrets. None understand the ancient forces awakening inside them."},{id:7,era:"The Incomplete Heart",title:"Mark of ZOUL Appears",description:"Veon discovers a glowing mark on his palm—an incomplete heart that pulses with unknown power.",details:"Even Verse, his Spirit Beast, fears this symbol. It responds to ancient energies and draws the attention of something called the Zoul Guardian."},{id:8,era:"Current Time",title:"The Guardian Watches",description:"A mysterious entity with one demon wing and one angel wing begins protecting Veon from the shadows.",details:"The Zoul Guardian destroys threats silently, bowing to Veon as if recognizing something within him. Its purpose remains unknown. Its power is absolute."}];return a.jsx("section",{className:"min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8",children:a.jsxs("div",{className:"max-w-5xl mx-auto",children:[a.jsxs("div",{className:"text-center mb-16",children:[a.jsx("h2",{className:"font-['Cinzel'] text-4xl sm:text-5xl md:text-6xl mb-4 bg-gradient-to-r from-[#8A5DFF] to-[#24C3FF] bg-clip-text text-transparent",children:"Lore Archive"}),a.jsx("p",{className:"font-['Bebas_Neue'] text-xl text-gray-400 tracking-wider",children:"Timeline of the Zoulverse"})]}),a.jsxs("div",{className:"relative",children:[a.jsx("div",{className:"absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#8A5DFF] via-[#24C3FF] to-[#FFD46A]"}),a.jsx("div",{className:"space-y-8",children:c.map(b=>a.jsxs("div",{className:"relative pl-20",children:[a.jsx("div",{className:"absolute left-5 top-6 w-6 h-6 rounded-full bg-gradient-to-br from-[#8A5DFF] to-[#24C3FF] shadow-[0_0_15px_rgba(138,93,255,0.5)] border-4 border-[#0E1120]"}),a.jsxs("div",{className:"bg-gradient-to-br from-[#0B0F29] to-[#141A40] rounded-xl p-6 border border-[#8A5DFF]/20 hover:border-[#8A5DFF]/50 transition-all duration-300 hover:shadow-[0_0_25px_rgba(138,93,255,0.2)]",children:[a.jsx("div",{className:"mb-2",children:a.jsx("span",{className:"inline-block px-3 py-1 rounded-full bg-[#8A5DFF]/20 text-[#8A5DFF] font-['Bebas_Neue'] text-xs tracking-wider",children:b.era})}),a.jsx("h3",{className:"font-['Cinzel'] text-2xl mb-3 text-white",children:b.title}),a.jsx("p",{className:"font-['Lora'] text-gray-400 mb-4",children:b.description}),a.jsx("button",{onClick:()=>k(v===b.id?null:b.id),className:"flex items-center gap-2 text-[#24C3FF] hover:text-[#FFD46A] transition-colors font-['Bebas_Neue'] text-sm tracking-wider",children:v===b.id?a.jsxs(a.Fragment,{children:["Hide Details ",a.jsx(pc,{className:"w-4 h-4"})]}):a.jsxs(a.Fragment,{children:["Show Details ",a.jsx(sc,{className:"w-4 h-4"})]})}),v===b.id&&a.jsx("div",{className:"mt-4 pt-4 border-t border-[#8A5DFF]/20",children:a.jsx("p",{className:"font-['Lora'] text-gray-300 italic",children:b.details})})]})]},b.id))})]})]})})}function Bc(){const[v,k]=ce.useState(""),[c,b]=ce.useState(!1),I=_=>{_.preventDefault(),v&&(b(!0),setTimeout(()=>{b(!1),k("")},3e3))},H=[{id:1,date:"November 21, 2025",category:"New Chapter",title:"Chapter 15: The Second Evolution Released!",description:"Veon's mark undergoes a dramatic transformation as the incomplete heart evolves. What ancient power is awakening within him?",icon:a.jsx(Ru,{className:"w-5 h-5"})},{id:2,date:"November 15, 2025",category:"Announcement",title:"Zoulverse Chronicles: Anime Adaptation in Development",description:"Exciting news! Discussions are underway to bring the Zoulverse to life as an animated series. Stay tuned for more updates!",icon:a.jsx(un,{className:"w-5 h-5"})},{id:3,date:"November 10, 2025",category:"Lore Drop",title:"The Origin of the Zoul Guardian Revealed",description:"New lore has been added to the archive explaining the mysterious entity with one demon wing and one angel wing.",icon:a.jsx(lc,{className:"w-5 h-5"})},{id:4,date:"November 1, 2025",category:"Community",title:"Fan Art Contest Winners Announced",description:"Thank you to everyone who submitted their amazing Zoulverse fan art! Check out the winning entries in our gallery.",icon:a.jsx(un,{className:"w-5 h-5"})}];return a.jsx("section",{className:"min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8",children:a.jsxs("div",{className:"max-w-5xl mx-auto",children:[a.jsxs("div",{className:"text-center mb-16",children:[a.jsx("h2",{className:"font-['Cinzel'] text-4xl sm:text-5xl md:text-6xl mb-4 bg-gradient-to-r from-[#8A5DFF] to-[#24C3FF] bg-clip-text text-transparent",children:"News & Updates"}),a.jsx("p",{className:"font-['Bebas_Neue'] text-xl text-gray-400 tracking-wider",children:"Stay Connected to the Zoulverse"})]}),a.jsxs("div",{className:"mb-12 bg-gradient-to-br from-[#8A5DFF]/10 to-[#24C3FF]/10 rounded-2xl p-8 border border-[#8A5DFF]/30",children:[a.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[a.jsx(Ou,{className:"w-6 h-6 text-[#FFD46A]"}),a.jsx("h3",{className:"font-['Cinzel'] text-2xl text-white",children:"Subscribe to Updates"})]}),a.jsx("p",{className:"font-['Lora'] text-gray-400 mb-6",children:"Get notified about new chapters, lore drops, and exclusive Zoulverse content."}),a.jsxs("form",{onSubmit:I,className:"flex gap-3",children:[a.jsx("input",{type:"email",value:v,onChange:_=>k(_.target.value),placeholder:"Enter your email",className:"flex-1 px-4 py-3 bg-[#0B0F29] border border-[#8A5DFF]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#8A5DFF] transition-colors",required:!0}),a.jsx("button",{type:"submit",className:"px-6 py-3 bg-gradient-to-r from-[#8A5DFF] to-[#24C3FF] rounded-lg text-white font-['Bebas_Neue'] tracking-wider hover:shadow-[0_0_20px_rgba(138,93,255,0.5)] transition-all",children:"Subscribe"})]}),c&&a.jsx("p",{className:"mt-4 text-[#FFD46A] font-['Bebas_Neue'] tracking-wider",children:"✨ Successfully subscribed! Thank you for joining the Zoulverse community!"})]}),a.jsx("div",{className:"space-y-6",children:H.map(_=>a.jsx("div",{className:"group bg-gradient-to-br from-[#0B0F29] to-[#141A40] rounded-xl p-6 border border-[#8A5DFF]/20 hover:border-[#8A5DFF]/50 transition-all duration-300 hover:shadow-[0_0_25px_rgba(138,93,255,0.2)]",children:a.jsxs("div",{className:"flex items-start gap-4",children:[a.jsx("div",{className:"p-3 rounded-lg bg-gradient-to-br from-[#8A5DFF]/20 to-[#24C3FF]/20 text-[#8A5DFF] group-hover:shadow-[0_0_15px_rgba(138,93,255,0.3)] transition-all",children:_.icon}),a.jsxs("div",{className:"flex-1",children:[a.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[a.jsx("span",{className:"font-['Bebas_Neue'] text-xs text-gray-500 tracking-wider",children:_.date}),a.jsx("span",{className:"px-2 py-1 rounded-full bg-[#24C3FF]/20 text-[#24C3FF] font-['Bebas_Neue'] text-xs tracking-wider",children:_.category})]}),a.jsx("h3",{className:"font-['Cinzel'] text-xl mb-2 text-white group-hover:text-[#8A5DFF] transition-colors",children:_.title}),a.jsx("p",{className:"font-['Lora'] text-gray-400",children:_.description})]})]})},_.id))})]})})}function Zc(){const[v,k]=ce.useState({name:"",email:"",message:""}),[c,b]=ce.useState(!1),I=z=>{z.preventDefault(),b(!0),setTimeout(()=>{b(!1),k({name:"",email:"",message:""})},3e3)},H=z=>{k({...v,[z.target.name]:z.target.value})},_=[{name:"Twitter",icon:a.jsx(jc,{className:"w-6 h-6"}),url:"#"},{name:"Instagram",icon:a.jsx(kc,{className:"w-6 h-6"}),url:"#"},{name:"YouTube",icon:a.jsx(Hc,{className:"w-6 h-6"}),url:"#"},{name:"Website",icon:a.jsx(gc,{className:"w-6 h-6"}),url:"#"}];return a.jsx("section",{className:"min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8",children:a.jsxs("div",{className:"max-w-5xl mx-auto",children:[a.jsxs("div",{className:"text-center mb-16",children:[a.jsx("h2",{className:"font-['Cinzel'] text-4xl sm:text-5xl md:text-6xl mb-4 bg-gradient-to-r from-[#8A5DFF] to-[#24C3FF] bg-clip-text text-transparent",children:"Contact & Community"}),a.jsx("p",{className:"font-['Bebas_Neue'] text-xl text-gray-400 tracking-wider",children:"Join the Zoulverse Journey"})]}),a.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[a.jsxs("div",{className:"bg-gradient-to-br from-[#0B0F29] to-[#141A40] rounded-2xl p-8 border border-[#8A5DFF]/20",children:[a.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[a.jsx(Ou,{className:"w-6 h-6 text-[#8A5DFF]"}),a.jsx("h3",{className:"font-['Cinzel'] text-2xl text-white",children:"Get in Touch"})]}),a.jsxs("form",{onSubmit:I,className:"space-y-4",children:[a.jsxs("div",{children:[a.jsx("label",{className:"block font-['Bebas_Neue'] text-sm text-gray-400 mb-2 tracking-wider",children:"Your Name"}),a.jsx("input",{type:"text",name:"name",value:v.name,onChange:H,className:"w-full px-4 py-3 bg-[#0E1120] border border-[#8A5DFF]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#8A5DFF] transition-colors",placeholder:"Enter your name",required:!0})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block font-['Bebas_Neue'] text-sm text-gray-400 mb-2 tracking-wider",children:"Email Address"}),a.jsx("input",{type:"email",name:"email",value:v.email,onChange:H,className:"w-full px-4 py-3 bg-[#0E1120] border border-[#8A5DFF]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#8A5DFF] transition-colors",placeholder:"your@email.com",required:!0})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block font-['Bebas_Neue'] text-sm text-gray-400 mb-2 tracking-wider",children:"Message"}),a.jsx("textarea",{name:"message",value:v.message,onChange:H,rows:5,className:"w-full px-4 py-3 bg-[#0E1120] border border-[#8A5DFF]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#8A5DFF] transition-colors resize-none",placeholder:"Tell us what's on your mind...",required:!0})]}),a.jsxs("button",{type:"submit",className:"w-full py-3 bg-gradient-to-r from-[#8A5DFF] to-[#24C3FF] rounded-lg text-white font-['Bebas_Neue'] text-lg tracking-wider hover:shadow-[0_0_20px_rgba(138,93,255,0.5)] transition-all flex items-center justify-center gap-2",children:["Send Message",a.jsx(bc,{className:"w-5 h-5"})]})]}),c&&a.jsx("p",{className:"mt-4 text-center text-[#FFD46A] font-['Bebas_Neue'] tracking-wider",children:"✨ Message sent! We'll get back to you soon!"})]}),a.jsxs("div",{className:"space-y-8",children:[a.jsxs("div",{className:"bg-gradient-to-br from-[#8A5DFF]/10 to-[#24C3FF]/10 rounded-2xl p-8 border border-[#8A5DFF]/30",children:[a.jsx("h3",{className:"font-['Cinzel'] text-2xl mb-4 text-white",children:"Join the Zoulverse Community"}),a.jsx("p",{className:"font-['Lora'] text-gray-400 mb-6",children:"Connect with fellow readers, share fan theories, create art, and be part of the growing Zoulverse universe. Every soul matters in our community."}),a.jsxs("div",{className:"flex flex-wrap gap-4",children:[a.jsx("span",{className:"px-4 py-2 bg-[#8A5DFF]/20 rounded-full text-[#8A5DFF] font-['Bebas_Neue'] text-sm tracking-wider",children:"Fan Theories"}),a.jsx("span",{className:"px-4 py-2 bg-[#24C3FF]/20 rounded-full text-[#24C3FF] font-['Bebas_Neue'] text-sm tracking-wider",children:"Fan Art"}),a.jsx("span",{className:"px-4 py-2 bg-[#FFD46A]/20 rounded-full text-[#FFD46A] font-['Bebas_Neue'] text-sm tracking-wider",children:"Discussions"})]})]}),a.jsxs("div",{className:"bg-gradient-to-br from-[#0B0F29] to-[#141A40] rounded-2xl p-8 border border-[#8A5DFF]/20",children:[a.jsx("h3",{className:"font-['Cinzel'] text-2xl mb-6 text-white",children:"Follow Zoul Forge Studios"}),a.jsx("div",{className:"grid grid-cols-2 gap-4",children:_.map(z=>a.jsxs("a",{href:z.url,className:"flex items-center justify-center gap-3 p-4 bg-[#0E1120] rounded-lg border border-[#8A5DFF]/20 hover:border-[#8A5DFF]/50 hover:shadow-[0_0_15px_rgba(138,93,255,0.3)] transition-all group",children:[a.jsx("div",{className:"text-[#8A5DFF] group-hover:text-[#24C3FF] transition-colors",children:z.icon}),a.jsx("span",{className:"font-['Bebas_Neue'] text-gray-400 group-hover:text-white transition-colors tracking-wider",children:z.name})]},z.name))})]}),a.jsxs("div",{className:"bg-gradient-to-br from-[#FFD46A]/10 to-[#8A5DFF]/10 rounded-2xl p-8 border border-[#FFD46A]/30",children:[a.jsx("p",{className:"font-['Lora'] text-gray-300 italic text-center",children:'"Thank you for being part of the Zoulverse. Every reader, every comment, every share helps this universe grow. The story has just begun."'}),a.jsx("p",{className:"font-['Cinzel'] text-[#FFD46A] text-center mt-4",children:"— Zoulzx, Creator"})]})]})]})]})})}function Xc({currentSection:v,onNavigate:k}){const[c,b]=ce.useState(!1),I=[{id:"hero",label:"Home"},{id:"about",label:"About"},{id:"library",label:"Stories"},{id:"characters",label:"Characters"},{id:"lore",label:"Lore"},{id:"news",label:"News"},{id:"contact",label:"Contact"}],H=_=>{k(_),b(!1),window.scrollTo({top:0,behavior:"smooth"})};return a.jsxs("nav",{className:"fixed top-0 left-0 right-0 z-50 bg-[#0B0F29]/90 backdrop-blur-md border-b border-[#8A5DFF]/20",children:[a.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:a.jsxs("div",{className:"flex items-center justify-between h-16",children:[a.jsxs("button",{onClick:()=>H("hero"),className:"flex items-center space-x-2 group",children:[a.jsx("div",{className:"w-10 h-10 rounded-full bg-gradient-to-br from-[#8A5DFF] to-[#24C3FF] flex items-center justify-center shadow-[0_0_20px_rgba(138,93,255,0.5)]",children:a.jsx("span",{className:"text-xl",children:"⭐"})}),a.jsx("span",{className:"font-['Cinzel_Decorative'] text-2xl bg-gradient-to-r from-[#8A5DFF] via-[#24C3FF] to-[#FFD46A] bg-clip-text text-transparent",children:"Zoulverse"})]}),a.jsx("div",{className:"hidden md:flex items-center space-x-1",children:I.map(_=>a.jsx("button",{onClick:()=>H(_.id),className:`px-4 py-2 rounded-lg transition-all duration-300 font-['Bebas_Neue'] tracking-wider ${v===_.id?"bg-[#8A5DFF] text-white shadow-[0_0_15px_rgba(138,93,255,0.5)]":"text-gray-300 hover:text-white hover:bg-[#141A40]"}`,children:_.label},_.id))}),a.jsx("button",{onClick:()=>b(!c),className:"md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-[#141A40] transition-colors",children:c?a.jsx(zc,{size:24}):a.jsx(Ac,{size:24})})]})}),c&&a.jsx("div",{className:"md:hidden bg-[#0B0F29] border-t border-[#8A5DFF]/20",children:a.jsx("div",{className:"px-4 py-4 space-y-2",children:I.map(_=>a.jsx("button",{onClick:()=>H(_.id),className:`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 font-['Bebas_Neue'] tracking-wider ${v===_.id?"bg-[#8A5DFF] text-white shadow-[0_0_15px_rgba(138,93,255,0.5)]":"text-gray-300 hover:text-white hover:bg-[#141A40]"}`,children:_.label},_.id))})})]})}function Wc(){const v=ce.useRef(null);return ce.useEffect(()=>{const k=v.current;if(!k)return;const c=k.getContext("2d");if(!c)return;k.width=window.innerWidth,k.height=window.innerHeight;const b=[],I=["#8A5DFF","#24C3FF","#FFD46A"];for(let z=0;z<100;z++)b.push({x:Math.random()*k.width,y:Math.random()*k.height,vx:(Math.random()-.5)*.5,vy:(Math.random()-.5)*.5,size:Math.random()*2+1,color:I[Math.floor(Math.random()*I.length)]});function H(){!c||!k||(c.fillStyle="rgba(14, 17, 32, 0.05)",c.fillRect(0,0,k.width,k.height),b.forEach(z=>{z.x+=z.vx,z.y+=z.vy,(z.x<0||z.x>k.width)&&(z.vx*=-1),(z.y<0||z.y>k.height)&&(z.vy*=-1),c.beginPath(),c.arc(z.x,z.y,z.size,0,Math.PI*2),c.fillStyle=z.color,c.shadowBlur=10,c.shadowColor=z.color,c.fill()}),requestAnimationFrame(H))}H();const _=()=>{k.width=window.innerWidth,k.height=window.innerHeight};return window.addEventListener("resize",_),()=>{window.removeEventListener("resize",_)}},[]),a.jsx("canvas",{ref:v,className:"fixed inset-0 z-0 pointer-events-none"})}function Uc(){const[v,k]=ce.useState("hero"),[c,b]=ce.useState(null);ce.useEffect(()=>{c!==null&&k("reader")},[c]);const I=z=>{b(z)},H=()=>{b(null),k("library")},_=()=>{if(v==="reader"&&c!==null)return a.jsx(Pc,{storyId:c,onBack:H});switch(v){case"hero":return a.jsx(Mu,{onStartReading:()=>k("library")});case"about":return a.jsx(Lc,{});case"library":return a.jsx(Mc,{onStorySelect:I});case"characters":return a.jsx(Rc,{});case"lore":return a.jsx(Oc,{});case"news":return a.jsx(Bc,{});case"contact":return a.jsx(Zc,{});default:return a.jsx(Mu,{onStartReading:()=>k("library")})}};return a.jsxs("div",{className:"min-h-screen relative bg-[#0E1120] text-white overflow-x-hidden",children:[a.jsx(Wc,{}),a.jsx(Xc,{currentSection:v,onNavigate:k}),a.jsx("main",{className:"relative z-10",children:_()})]})}Gh.createRoot(document.getElementById("root")).render(a.jsx(Uc,{}));
