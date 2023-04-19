(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerpolicy&&(l.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?l.credentials="include":i.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}})();const y={};function q(e){y.context=e}const Oe=(e,t)=>e===t,se=Symbol("solid-proxy"),$e=Symbol("solid-track"),G={equals:Oe};let Ae=ke;const N=1,X=2,Ee={owned:null,cleanups:null,context:null,owner:null},te={};var b=null;let P=null,g=null,w=null,C=null,re=0;function H(e,t){const n=g,s=b,i=e.length===0,l=i?Ee:{owned:null,cleanups:null,context:null,owner:t||s},o=i?e:()=>e(()=>L(()=>z(l)));b=l,g=null;try{return $(o,!0)}finally{g=n,b=s}}function j(e,t){t=t?Object.assign({},G,t):G;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},s=i=>(typeof i=="function"&&(i=i(n.value)),_e(n,i));return[Se.bind(n),s]}function fe(e,t,n){const s=Y(e,t,!0,N);R(s)}function O(e,t,n){const s=Y(e,t,!1,N);R(s)}function Te(e,t,n){Ae=Re;const s=Y(e,t,!1,N);s.user=!0,C?C.push(s):R(s)}function B(e,t,n){n=n?Object.assign({},G,n):G;const s=Y(e,t,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,R(s),Se.bind(s)}function Me(e,t,n){let s,i,l;arguments.length===2&&typeof t=="object"||arguments.length===1?(s=!0,i=e,l=t||{}):(s=e,i=t,l=n||{});let o=null,r=te,u=null,f=!1,c="initialValue"in l,h=typeof s=="function"&&B(s);const a=new Set,[v,_]=(l.storage||j)(l.initialValue),[k,T]=j(void 0),[M,A]=j(void 0,{equals:!1}),[x,E]=j(c?"ready":"unresolved");if(y.context){u=`${y.context.id}${y.context.count++}`;let d;l.ssrLoadFrom==="initial"?r=l.initialValue:y.load&&(d=y.load(u))&&(r=d[0])}function S(d,m,p,V){return o===d&&(o=null,c=!0,(d===r||m===r)&&l.onHydrated&&queueMicrotask(()=>l.onHydrated(V,{value:m})),r=te,J(m,p)),m}function J(d,m){$(()=>{m||_(()=>d),E(m?"errored":"ready"),T(m);for(const p of a.keys())p.decrement();a.clear()},!1)}function Z(){const d=je,m=v(),p=k();if(p&&!o)throw p;return g&&!g.user&&d&&fe(()=>{M(),o&&(d.resolved||a.has(d)||(d.increment(),a.add(d)))}),m}function ee(d=!0){if(d!==!1&&f)return;f=!1;const m=h?h():s;if(m==null||m===!1){S(o,L(v));return}const p=r!==te?r:L(()=>i(m,{value:v(),refetching:d}));return typeof p!="object"||!(p&&"then"in p)?(S(o,p,void 0,m),p):(o=p,f=!0,queueMicrotask(()=>f=!1),$(()=>{E(c?"refreshing":"pending"),A()},!1),p.then(V=>S(p,V,void 0,m),V=>S(p,void 0,Le(V),m)))}return Object.defineProperties(Z,{state:{get:()=>x()},error:{get:()=>k()},loading:{get(){const d=x();return d==="pending"||d==="refreshing"}},latest:{get(){if(!c)return Z();const d=k();if(d&&!o)throw d;return v()}}}),h?fe(()=>ee(!1)):ee(!1),[Z,{refetch:ee,mutate:_}]}function L(e){const t=g;g=null;try{return e()}finally{g=t}}function St(e){Te(()=>L(e))}function Ie(e){return b===null||(b.cleanups===null?b.cleanups=[e]:b.cleanups.push(e)),e}let je;function Se(){const e=P;if(this.sources&&(this.state||e))if(this.state===N||e)R(this);else{const t=w;w=null,$(()=>Q(this),!1),w=t}if(g){const t=this.observers?this.observers.length:0;g.sources?(g.sources.push(this),g.sourceSlots.push(t)):(g.sources=[this],g.sourceSlots=[t]),this.observers?(this.observers.push(g),this.observerSlots.push(g.sources.length-1)):(this.observers=[g],this.observerSlots=[g.sources.length-1])}return this.value}function _e(e,t,n){let s=e.value;return(!e.comparator||!e.comparator(s,t))&&(e.value=t,e.observers&&e.observers.length&&$(()=>{for(let i=0;i<e.observers.length;i+=1){const l=e.observers[i],o=P&&P.running;o&&P.disposed.has(l),(o&&!l.tState||!o&&!l.state)&&(l.pure?w.push(l):C.push(l),l.observers&&Ce(l)),o||(l.state=N)}if(w.length>1e6)throw w=[],new Error},!1)),t}function R(e){if(!e.fn)return;z(e);const t=b,n=g,s=re;g=b=e,Be(e,e.value,s),g=n,b=t}function Be(e,t,n){let s;try{s=e.fn(t)}catch(i){e.pure&&(e.state=N,e.owned&&e.owned.forEach(z),e.owned=null),Ne(i)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?_e(e,s):e.value=s,e.updatedAt=n)}function Y(e,t,n,s=N,i){const l={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:b,context:null,pure:n};return b===null||b!==Ee&&(b.owned?b.owned.push(l):b.owned=[l]),l}function W(e){const t=P;if(e.state===0||t)return;if(e.state===X||t)return Q(e);if(e.suspense&&L(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<re);)(e.state||t)&&n.push(e);for(let s=n.length-1;s>=0;s--)if(e=n[s],e.state===N||t)R(e);else if(e.state===X||t){const i=w;w=null,$(()=>Q(e,n[0]),!1),w=i}}function $(e,t){if(w)return e();let n=!1;t||(w=[]),C?n=!0:C=[],re++;try{const s=e();return De(n),s}catch(s){w||(C=null),w=null,Ne(s)}}function De(e){if(w&&(ke(w),w=null),e)return;const t=C;C=null,t.length&&$(()=>Ae(t),!1)}function ke(e){for(let t=0;t<e.length;t++)W(e[t])}function Re(e){let t,n=0;for(t=0;t<e.length;t++){const s=e[t];s.user?e[n++]=s:W(s)}for(y.context&&q(),t=0;t<n;t++)W(e[t])}function Q(e,t){const n=P;e.state=0;for(let s=0;s<e.sources.length;s+=1){const i=e.sources[s];i.sources&&(i.state===N||n?i!==t&&W(i):(i.state===X||n)&&Q(i,t))}}function Ce(e){const t=P;for(let n=0;n<e.observers.length;n+=1){const s=e.observers[n];(!s.state||t)&&(s.state=X,s.pure?w.push(s):C.push(s),s.observers&&Ce(s))}}function z(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),i=n.observers;if(i&&i.length){const l=i.pop(),o=n.observerSlots.pop();s<i.length&&(l.sourceSlots[o]=s,i[s]=l,n.observerSlots[s]=o)}}if(e.owned){for(t=0;t<e.owned.length;t++)z(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function Le(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function Ne(e){throw e=Le(e),e}const Ve=Symbol("fallback");function ue(e){for(let t=0;t<e.length;t++)e[t]()}function qe(e,t,n={}){let s=[],i=[],l=[],o=0,r=t.length>1?[]:null;return Ie(()=>ue(l)),()=>{let u=e()||[],f,c;return u[$e],L(()=>{let a=u.length,v,_,k,T,M,A,x,E,S;if(a===0)o!==0&&(ue(l),l=[],s=[],i=[],o=0,r&&(r=[])),n.fallback&&(s=[Ve],i[0]=H(J=>(l[0]=J,n.fallback())),o=1);else if(o===0){for(i=new Array(a),c=0;c<a;c++)s[c]=u[c],i[c]=H(h);o=a}else{for(k=new Array(a),T=new Array(a),r&&(M=new Array(a)),A=0,x=Math.min(o,a);A<x&&s[A]===u[A];A++);for(x=o-1,E=a-1;x>=A&&E>=A&&s[x]===u[E];x--,E--)k[E]=i[x],T[E]=l[x],r&&(M[E]=r[x]);for(v=new Map,_=new Array(E+1),c=E;c>=A;c--)S=u[c],f=v.get(S),_[c]=f===void 0?-1:f,v.set(S,c);for(f=A;f<=x;f++)S=s[f],c=v.get(S),c!==void 0&&c!==-1?(k[c]=i[f],T[c]=l[f],r&&(M[c]=r[f]),c=_[c],v.set(S,c)):l[f]();for(c=A;c<a;c++)c in k?(i[c]=k[c],l[c]=T[c],r&&(r[c]=M[c],r[c](c))):i[c]=H(h);i=i.slice(0,o=a),s=u.slice(0)}return i});function h(a){if(l[c]=a,r){const[v,_]=j(c);return r[c]=_,t(u[c],v)}return t(u[c])}}}function U(e,t){return L(()=>e(t||{}))}function F(){return!0}const Ue={get(e,t,n){return t===se?n:e.get(t)},has(e,t){return t===se?!0:e.has(t)},set:F,deleteProperty:F,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:F,deleteProperty:F}},ownKeys(e){return e.keys()}};function ne(e){return(e=typeof e=="function"?e():e)?e:{}}function _t(...e){let t=!1;for(let s=0;s<e.length;s++){const i=e[s];t=t||!!i&&se in i,e[s]=typeof i=="function"?(t=!0,B(i)):i}if(t)return new Proxy({get(s){for(let i=e.length-1;i>=0;i--){const l=ne(e[i])[s];if(l!==void 0)return l}},has(s){for(let i=e.length-1;i>=0;i--)if(s in ne(e[i]))return!0;return!1},keys(){const s=[];for(let i=0;i<e.length;i++)s.push(...Object.keys(ne(e[i])));return[...new Set(s)]}},Ue);const n={};for(let s=e.length-1;s>=0;s--)if(e[s]){const i=Object.getOwnPropertyDescriptors(e[s]);for(const l in i)l in n||Object.defineProperty(n,l,{enumerable:!0,get(){for(let o=e.length-1;o>=0;o--){const r=(e[o]||{})[l];if(r!==void 0)return r}}})}return n}function oe(e){let t,n;const s=i=>{const l=y.context;if(l){const[r,u]=j();(n||(n=e())).then(f=>{q(l),u(()=>f.default),q()}),t=r}else if(!t){const[r]=Me(()=>(n||(n=e())).then(u=>u.default));t=r}let o;return B(()=>(o=t())&&L(()=>{if(!l)return o(i);const r=y.context;q(l);const u=o(i);return q(r),u}))};return s.preload=()=>n||((n=e()).then(i=>t=()=>i.default),n),s}function Fe(e){const t="fallback"in e&&{fallback:()=>e.fallback};return B(qe(()=>e.each,e.children,t||void 0))}function kt(e){let t=!1;const n=e.keyed,s=B(()=>e.when,void 0,{equals:(i,l)=>t?i===l:!i==!l});return B(()=>{const i=s();if(i){const l=e.children,o=typeof l=="function"&&l.length>0;return t=n||o,o?L(()=>l(i)):l}return e.fallback},void 0,void 0)}const He=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],Ke=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...He]),Ge=new Set(["innerHTML","textContent","innerText","children"]),Xe=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),ae=Object.assign(Object.create(null),{class:"className",formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"}),We=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),Qe={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function Ye(e,t,n){let s=n.length,i=t.length,l=s,o=0,r=0,u=t[i-1].nextSibling,f=null;for(;o<i||r<l;){if(t[o]===n[r]){o++,r++;continue}for(;t[i-1]===n[l-1];)i--,l--;if(i===o){const c=l<s?r?n[r-1].nextSibling:n[l-r]:u;for(;r<l;)e.insertBefore(n[r++],c)}else if(l===r)for(;o<i;)(!f||!f.has(t[o]))&&t[o].remove(),o++;else if(t[o]===n[l-1]&&n[r]===t[i-1]){const c=t[--i].nextSibling;e.insertBefore(n[r++],t[o++].nextSibling),e.insertBefore(n[--l],c),t[i]=n[l]}else{if(!f){f=new Map;let h=r;for(;h<l;)f.set(n[h],h++)}const c=f.get(t[o]);if(c!=null)if(r<c&&c<l){let h=o,a=1,v;for(;++h<i&&h<l&&!((v=f.get(t[h]))==null||v!==c+a);)a++;if(a>c-r){const _=t[o];for(;r<c;)e.insertBefore(n[r++],_)}else e.replaceChild(n[r++],t[o++])}else o++;else t[o++].remove()}}}const de="_$DX_DELEGATE";function ze(e,t,n,s={}){let i;return H(l=>{i=l,t===document?e():K(t,e(),t.firstChild?null:void 0,n)},s.owner),()=>{i(),t.textContent=""}}function Je(e,t,n){const s=document.createElement("template");s.innerHTML=e;let i=s.content.firstChild;return n&&(i=i.firstChild),i}function Ze(e,t=window.document){const n=t[de]||(t[de]=new Set);for(let s=0,i=e.length;s<i;s++){const l=e[s];n.has(l)||(n.add(l),t.addEventListener(l,rt))}}function Pe(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function et(e,t,n,s){s==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,s)}function ie(e,t){t==null?e.removeAttribute("class"):e.className=t}function tt(e,t,n,s){if(s)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const i=n[0];e.addEventListener(t,n[0]=l=>i.call(e,n[1],l))}else e.addEventListener(t,n)}function nt(e,t,n={}){const s=Object.keys(t||{}),i=Object.keys(n);let l,o;for(l=0,o=i.length;l<o;l++){const r=i[l];!r||r==="undefined"||t[r]||(he(e,r,!1),delete n[r])}for(l=0,o=s.length;l<o;l++){const r=s[l],u=!!t[r];!r||r==="undefined"||n[r]===u||!u||(he(e,r,!0),n[r]=u)}return n}function st(e,t,n){if(!t)return n?Pe(e,"style"):t;const s=e.style;if(typeof t=="string")return s.cssText=t;typeof n=="string"&&(s.cssText=n=void 0),n||(n={}),t||(t={});let i,l;for(l in n)t[l]==null&&s.removeProperty(l),delete n[l];for(l in t)i=t[l],i!==n[l]&&(s.setProperty(l,i),n[l]=i);return n}function Ct(e,t={},n,s){const i={};return s||O(()=>i.children=D(e,t.children,i.children)),O(()=>t.ref&&t.ref(e)),O(()=>it(e,t,n,!0,i,!0)),i}function K(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return D(e,t,s,n);O(i=>D(e,t(),i,n),s)}function it(e,t,n,s,i={},l=!1){t||(t={});for(const o in i)if(!(o in t)){if(o==="children")continue;i[o]=ge(e,o,null,i[o],n,l)}for(const o in t){if(o==="children"){s||D(e,t.children);continue}const r=t[o];i[o]=ge(e,o,r,i[o],n,l)}}function lt(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function he(e,t,n){const s=t.trim().split(/\s+/);for(let i=0,l=s.length;i<l;i++)e.classList.toggle(s[i],n)}function ge(e,t,n,s,i,l){let o,r,u;if(t==="style")return st(e,n,s);if(t==="classList")return nt(e,n,s);if(n===s)return s;if(t==="ref")l||n(e);else if(t.slice(0,3)==="on:"){const f=t.slice(3);s&&e.removeEventListener(f,s),n&&e.addEventListener(f,n)}else if(t.slice(0,10)==="oncapture:"){const f=t.slice(10);s&&e.removeEventListener(f,s,!0),n&&e.addEventListener(f,n,!0)}else if(t.slice(0,2)==="on"){const f=t.slice(2).toLowerCase(),c=We.has(f);if(!c&&s){const h=Array.isArray(s)?s[0]:s;e.removeEventListener(f,h)}(c||n)&&(tt(e,f,n,c),c&&Ze([f]))}else if((u=Ge.has(t))||!i&&(ae[t]||(r=Ke.has(t)))||(o=e.nodeName.includes("-")))t==="class"||t==="className"?ie(e,n):o&&!r&&!u?e[lt(t)]=n:e[ae[t]||t]=n;else{const f=i&&t.indexOf(":")>-1&&Qe[t.split(":")[0]];f?et(e,f,t,n):Pe(e,Xe[t]||t,n)}return n}function rt(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),y.registry&&!y.done&&(y.done=!0,document.querySelectorAll("[id^=pl-]").forEach(s=>{for(;s&&s.nodeType!==8&&s.nodeValue!=="pl-"+e;){let i=s.nextSibling;s.remove(),s=i}s&&s.remove()}));n;){const s=n[t];if(s&&!n.disabled){const i=n[`${t}Data`];if(i!==void 0?s.call(n,i,e):s.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function D(e,t,n,s,i){for(y.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const l=typeof t,o=s!==void 0;if(e=o&&n[0]&&n[0].parentNode||e,l==="string"||l==="number"){if(y.context)return n;if(l==="number"&&(t=t.toString()),o){let r=n[0];r&&r.nodeType===3?r.data=t:r=document.createTextNode(t),n=I(e,n,s,r)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||l==="boolean"){if(y.context)return n;n=I(e,n,s)}else{if(l==="function")return O(()=>{let r=t();for(;typeof r=="function";)r=r();n=D(e,r,n,s)}),()=>n;if(Array.isArray(t)){const r=[],u=n&&Array.isArray(n);if(le(r,t,n,i))return O(()=>n=D(e,r,n,s,!0)),()=>n;if(y.context){if(!r.length)return n;for(let f=0;f<r.length;f++)if(r[f].parentNode)return n=r}if(r.length===0){if(n=I(e,n,s),o)return n}else u?n.length===0?me(e,r,s):Ye(e,n,r):(n&&I(e),me(e,r));n=r}else if(t instanceof Node){if(y.context&&t.parentNode)return n=o?[t]:t;if(Array.isArray(n)){if(o)return n=I(e,n,s,t);I(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function le(e,t,n,s){let i=!1;for(let l=0,o=t.length;l<o;l++){let r=t[l],u=n&&n[l];if(r instanceof Node)e.push(r);else if(!(r==null||r===!0||r===!1))if(Array.isArray(r))i=le(e,r,u)||i;else if(typeof r=="function")if(s){for(;typeof r=="function";)r=r();i=le(e,Array.isArray(r)?r:[r],Array.isArray(u)?u:[u])||i}else e.push(r),i=!0;else{const f=String(r);u&&u.nodeType===3&&u.data===f?e.push(u):e.push(document.createTextNode(f))}}return i}function me(e,t,n=null){for(let s=0,i=t.length;s<i;s++)e.insertBefore(t[s],n)}function I(e,t,n,s){if(n===void 0)return e.textContent="";const i=s||document.createTextNode("");if(t.length){let l=!1;for(let o=t.length-1;o>=0;o--){const r=t[o];if(i!==r){const u=r.parentNode===e;!l&&!o?u?e.replaceChild(i,r):e.insertBefore(i,n):u&&r.remove()}else l=!0}}else e.insertBefore(i,n);return[i]}const Lt=!1;const ot="modulepreload",ct=function(e){return"/css-gallery/"+e},ye={},ce=function(t,n,s){if(!n||n.length===0)return t();const i=document.getElementsByTagName("link");return Promise.all(n.map(l=>{if(l=ct(l),l in ye)return;ye[l]=!0;const o=l.endsWith(".css"),r=o?'[rel="stylesheet"]':"";if(!!s)for(let c=i.length-1;c>=0;c--){const h=i[c];if(h.href===l&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${r}`))return;const f=document.createElement("link");if(f.rel=o?"stylesheet":ot,o||(f.as="script",f.crossOrigin=""),f.href=l,document.head.appendChild(f),o)return new Promise((c,h)=>{f.addEventListener("load",c),f.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${l}`)))})})).then(()=>t())},ft="_cards_1sznv_97",we={"icon-brand_ai":"_icon-brand_ai_1sznv_35",cards:ft},ut={author:"Elwin",version:"1.0.0",gallery:[{title:"圆盘型导航",link:"circle-nav/index.html",cover:"cover/circle-nav.png",outline:"圆盘型导航"},{title:"开关灯效果",link:"light-bulb/index.html",cover:"cover/light-bulb.png",outline:"开关灯效果"},{title:"按钮悬停立体效果",link:"social-3d-hover/index.html",cover:"cover/social-3d-hover.png",outline:"按钮悬停立体效果"},{title:"超可爱的星空火箭",link:"rocket/index.html",cover:"cover/rocket.png",outline:"超可爱的星空火箭"},{title:"雪夜绽放的腊梅",link:"wintersweet/index.html",cover:"cover/wintersweet.png",outline:"雪夜绽放的腊梅"},{title:"大红灯笼高高挂",link:"lantern/index.html",cover:"cover/lantern.png",outline:"大红灯笼高高挂"}]},pe="/css-gallery/assets/vm8-107f598f.mp4",be="/css-gallery/assets/vm8-3f116d3f.png",at="/css-gallery/assets/vm7-113cc972.mp4",dt="/css-gallery/assets/vm7-6421a8bd.png",ht="/css-gallery/assets/vm6-9c9ecc0d.mp4",gt="/css-gallery/assets/vm6-ee5d9995.png",mt="/css-gallery/assets/vm5-c07a5eee.mp4",yt="/css-gallery/assets/vm5-7d7dff14.png",ve="/css-gallery/assets/vm4-31226db2.mp4",xe="/css-gallery/assets/vm4-fc35d434.png",wt=Je("<div><div></div></div>"),pt=oe(()=>ce(()=>import("./Card-4d065b62.js"),["assets/Card-4d065b62.js","assets/Card-511a7fec.css"])),bt=oe(()=>ce(()=>import("./Header-e1b1b3c3.js"),["assets/Header-e1b1b3c3.js","assets/Header-843234e2.css"])),vt=oe(()=>ce(()=>import("./Carousel-3789ded3.js"),["assets/Carousel-3789ded3.js","assets/Carousel-19a5fcf5.css"])),xt=[{video:pe,image:be},{video:ve,image:xe},{video:mt,image:yt},{video:ht,image:gt},{video:at,image:dt},{video:pe,image:be},{video:ve,image:xe}],At=()=>(()=>{const e=wt.cloneNode(!0),t=e.firstChild;return K(e,U(bt,{}),t),K(e,U(vt,{swiperList:xt}),t),K(t,U(Fe,{get each(){return ut.gallery},children:n=>U(pt,{get title(){return n.title},get link(){return n.link},get outline(){return n.outline},get cover(){return n.cover}})})),O(n=>{const s=we.App,i=we.cards;return s!==n._v$&&ie(e,n._v$=s),i!==n._v$2&&ie(t,n._v$2=i),n},{_v$:void 0,_v$2:void 0}),e})(),Et=document.getElementById("root");ze(()=>U(At,{}),Et);export{Fe as F,kt as S,Lt as a,O as b,B as c,Pe as d,st as e,j as f,U as g,nt as h,K as i,ie as j,Ze as k,tt as l,_t as m,St as o,Ct as s,Je as t};