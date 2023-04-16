(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerpolicy&&(l.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?l.credentials="include":i.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}})();const m={};function q(e){m.context=e}const $e=(e,t)=>e===t,le=Symbol("solid-proxy"),Oe=Symbol("solid-track"),X={equals:$e};let Ae=Ce;const N=1,W=2,Ee={owned:null,cleanups:null,context:null,owner:null},ne={};var b=null;let P=null,g=null,w=null,k=null,oe=0;function H(e,t){const n=g,s=b,i=e.length===0,l=i?Ee:{owned:null,cleanups:null,context:null,owner:t||s},o=i?e:()=>e(()=>L(()=>Z(l)));b=l,g=null;try{return O(o,!0)}finally{g=n,b=s}}function j(e,t){t=t?Object.assign({},X,t):X;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},s=i=>(typeof i=="function"&&(i=i(n.value)),_e(n,i));return[Se.bind(n),s]}function ue(e,t,n){const s=J(e,t,!0,N);R(s)}function $(e,t,n){const s=J(e,t,!1,N);R(s)}function Te(e,t,n){Ae=Re;const s=J(e,t,!1,N);s.user=!0,k?k.push(s):R(s)}function B(e,t,n){n=n?Object.assign({},X,n):X;const s=J(e,t,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,R(s),Se.bind(s)}function Me(e,t,n){let s,i,l;arguments.length===2&&typeof t=="object"||arguments.length===1?(s=!0,i=e,l=t||{}):(s=e,i=t,l=n||{});let o=null,r=ne,u=null,c=!1,f="initialValue"in l,h=typeof s=="function"&&B(s);const a=new Set,[v,_]=(l.storage||j)(l.initialValue),[C,T]=j(void 0),[M,A]=j(void 0,{equals:!1}),[x,E]=j(f?"ready":"unresolved");if(m.context){u=`${m.context.id}${m.context.count++}`;let d;l.ssrLoadFrom==="initial"?r=l.initialValue:m.load&&(d=m.load(u))&&(r=d[0])}function S(d,y,p,V){return o===d&&(o=null,f=!0,(d===r||y===r)&&l.onHydrated&&queueMicrotask(()=>l.onHydrated(V,{value:y})),r=ne,z(y,p)),y}function z(d,y){O(()=>{y||_(()=>d),E(y?"errored":"ready"),T(y);for(const p of a.keys())p.decrement();a.clear()},!1)}function ee(){const d=je,y=v(),p=C();if(p&&!o)throw p;return g&&!g.user&&d&&ue(()=>{M(),o&&(d.resolved||a.has(d)||(d.increment(),a.add(d)))}),y}function te(d=!0){if(d!==!1&&c)return;c=!1;const y=h?h():s;if(y==null||y===!1){S(o,L(v));return}const p=r!==ne?r:L(()=>i(y,{value:v(),refetching:d}));return typeof p!="object"||!(p&&"then"in p)?(S(o,p,void 0,y),p):(o=p,c=!0,queueMicrotask(()=>c=!1),O(()=>{E(f?"refreshing":"pending"),A()},!1),p.then(V=>S(p,V,void 0,y),V=>S(p,void 0,Le(V),y)))}return Object.defineProperties(ee,{state:{get:()=>x()},error:{get:()=>C()},loading:{get(){const d=x();return d==="pending"||d==="refreshing"}},latest:{get(){if(!f)return ee();const d=C();if(d&&!o)throw d;return v()}}}),h?ue(()=>te(!1)):te(!1),[ee,{refetch:te,mutate:_}]}function L(e){const t=g;g=null;try{return e()}finally{g=t}}function Et(e){Te(()=>L(e))}function Ie(e){return b===null||(b.cleanups===null?b.cleanups=[e]:b.cleanups.push(e)),e}let je;function Se(){const e=P;if(this.sources&&(this.state||e))if(this.state===N||e)R(this);else{const t=w;w=null,O(()=>Y(this),!1),w=t}if(g){const t=this.observers?this.observers.length:0;g.sources?(g.sources.push(this),g.sourceSlots.push(t)):(g.sources=[this],g.sourceSlots=[t]),this.observers?(this.observers.push(g),this.observerSlots.push(g.sources.length-1)):(this.observers=[g],this.observerSlots=[g.sources.length-1])}return this.value}function _e(e,t,n){let s=e.value;return(!e.comparator||!e.comparator(s,t))&&(e.value=t,e.observers&&e.observers.length&&O(()=>{for(let i=0;i<e.observers.length;i+=1){const l=e.observers[i],o=P&&P.running;o&&P.disposed.has(l),(o&&!l.tState||!o&&!l.state)&&(l.pure?w.push(l):k.push(l),l.observers&&ke(l)),o||(l.state=N)}if(w.length>1e6)throw w=[],new Error},!1)),t}function R(e){if(!e.fn)return;Z(e);const t=b,n=g,s=oe;g=b=e,Be(e,e.value,s),g=n,b=t}function Be(e,t,n){let s;try{s=e.fn(t)}catch(i){e.pure&&(e.state=N,e.owned&&e.owned.forEach(Z),e.owned=null),Ne(i)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?_e(e,s):e.value=s,e.updatedAt=n)}function J(e,t,n,s=N,i){const l={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:b,context:null,pure:n};return b===null||b!==Ee&&(b.owned?b.owned.push(l):b.owned=[l]),l}function Q(e){const t=P;if(e.state===0||t)return;if(e.state===W||t)return Y(e);if(e.suspense&&L(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<oe);)(e.state||t)&&n.push(e);for(let s=n.length-1;s>=0;s--)if(e=n[s],e.state===N||t)R(e);else if(e.state===W||t){const i=w;w=null,O(()=>Y(e,n[0]),!1),w=i}}function O(e,t){if(w)return e();let n=!1;t||(w=[]),k?n=!0:k=[],oe++;try{const s=e();return De(n),s}catch(s){w||(k=null),w=null,Ne(s)}}function De(e){if(w&&(Ce(w),w=null),e)return;const t=k;k=null,t.length&&O(()=>Ae(t),!1)}function Ce(e){for(let t=0;t<e.length;t++)Q(e[t])}function Re(e){let t,n=0;for(t=0;t<e.length;t++){const s=e[t];s.user?e[n++]=s:Q(s)}for(m.context&&q(),t=0;t<n;t++)Q(e[t])}function Y(e,t){const n=P;e.state=0;for(let s=0;s<e.sources.length;s+=1){const i=e.sources[s];i.sources&&(i.state===N||n?i!==t&&Q(i):(i.state===W||n)&&Y(i,t))}}function ke(e){const t=P;for(let n=0;n<e.observers.length;n+=1){const s=e.observers[n];(!s.state||t)&&(s.state=W,s.pure?w.push(s):k.push(s),s.observers&&ke(s))}}function Z(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),i=n.observers;if(i&&i.length){const l=i.pop(),o=n.observerSlots.pop();s<i.length&&(l.sourceSlots[o]=s,i[s]=l,n.observerSlots[s]=o)}}if(e.owned){for(t=0;t<e.owned.length;t++)Z(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function Le(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function Ne(e){throw e=Le(e),e}const Ve=Symbol("fallback");function ae(e){for(let t=0;t<e.length;t++)e[t]()}function qe(e,t,n={}){let s=[],i=[],l=[],o=0,r=t.length>1?[]:null;return Ie(()=>ae(l)),()=>{let u=e()||[],c,f;return u[Oe],L(()=>{let a=u.length,v,_,C,T,M,A,x,E,S;if(a===0)o!==0&&(ae(l),l=[],s=[],i=[],o=0,r&&(r=[])),n.fallback&&(s=[Ve],i[0]=H(z=>(l[0]=z,n.fallback())),o=1);else if(o===0){for(i=new Array(a),f=0;f<a;f++)s[f]=u[f],i[f]=H(h);o=a}else{for(C=new Array(a),T=new Array(a),r&&(M=new Array(a)),A=0,x=Math.min(o,a);A<x&&s[A]===u[A];A++);for(x=o-1,E=a-1;x>=A&&E>=A&&s[x]===u[E];x--,E--)C[E]=i[x],T[E]=l[x],r&&(M[E]=r[x]);for(v=new Map,_=new Array(E+1),f=E;f>=A;f--)S=u[f],c=v.get(S),_[f]=c===void 0?-1:c,v.set(S,f);for(c=A;c<=x;c++)S=s[c],f=v.get(S),f!==void 0&&f!==-1?(C[f]=i[c],T[f]=l[c],r&&(M[f]=r[c]),f=_[f],v.set(S,f)):l[c]();for(f=A;f<a;f++)f in C?(i[f]=C[f],l[f]=T[f],r&&(r[f]=M[f],r[f](f))):i[f]=H(h);i=i.slice(0,o=a),s=u.slice(0)}return i});function h(a){if(l[f]=a,r){const[v,_]=j(f);return r[f]=_,t(u[f],v)}return t(u[f])}}}function U(e,t){return L(()=>e(t||{}))}function F(){return!0}const Ue={get(e,t,n){return t===le?n:e.get(t)},has(e,t){return t===le?!0:e.has(t)},set:F,deleteProperty:F,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:F,deleteProperty:F}},ownKeys(e){return e.keys()}};function se(e){return(e=typeof e=="function"?e():e)?e:{}}function St(...e){let t=!1;for(let s=0;s<e.length;s++){const i=e[s];t=t||!!i&&le in i,e[s]=typeof i=="function"?(t=!0,B(i)):i}if(t)return new Proxy({get(s){for(let i=e.length-1;i>=0;i--){const l=se(e[i])[s];if(l!==void 0)return l}},has(s){for(let i=e.length-1;i>=0;i--)if(s in se(e[i]))return!0;return!1},keys(){const s=[];for(let i=0;i<e.length;i++)s.push(...Object.keys(se(e[i])));return[...new Set(s)]}},Ue);const n={};for(let s=e.length-1;s>=0;s--)if(e[s]){const i=Object.getOwnPropertyDescriptors(e[s]);for(const l in i)l in n||Object.defineProperty(n,l,{enumerable:!0,get(){for(let o=e.length-1;o>=0;o--){const r=(e[o]||{})[l];if(r!==void 0)return r}}})}return n}function fe(e){let t,n;const s=i=>{const l=m.context;if(l){const[r,u]=j();(n||(n=e())).then(c=>{q(l),u(()=>c.default),q()}),t=r}else if(!t){const[r]=Me(()=>(n||(n=e())).then(u=>u.default));t=r}let o;return B(()=>(o=t())&&L(()=>{if(!l)return o(i);const r=m.context;q(l);const u=o(i);return q(r),u}))};return s.preload=()=>n||((n=e()).then(i=>t=()=>i.default),n),s}function Fe(e){const t="fallback"in e&&{fallback:()=>e.fallback};return B(qe(()=>e.each,e.children,t||void 0))}function _t(e){let t=!1;const n=e.keyed,s=B(()=>e.when,void 0,{equals:(i,l)=>t?i===l:!i==!l});return B(()=>{const i=s();if(i){const l=e.children,o=typeof l=="function"&&l.length>0;return t=n||o,o?L(()=>l(i)):l}return e.fallback},void 0,void 0)}const He=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],Ke=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...He]),Ge=new Set(["innerHTML","textContent","innerText","children"]),Xe=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),de=Object.assign(Object.create(null),{class:"className",formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"}),We=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),Qe={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function Ye(e,t,n){let s=n.length,i=t.length,l=s,o=0,r=0,u=t[i-1].nextSibling,c=null;for(;o<i||r<l;){if(t[o]===n[r]){o++,r++;continue}for(;t[i-1]===n[l-1];)i--,l--;if(i===o){const f=l<s?r?n[r-1].nextSibling:n[l-r]:u;for(;r<l;)e.insertBefore(n[r++],f)}else if(l===r)for(;o<i;)(!c||!c.has(t[o]))&&t[o].remove(),o++;else if(t[o]===n[l-1]&&n[r]===t[i-1]){const f=t[--i].nextSibling;e.insertBefore(n[r++],t[o++].nextSibling),e.insertBefore(n[--l],f),t[i]=n[l]}else{if(!c){c=new Map;let h=r;for(;h<l;)c.set(n[h],h++)}const f=c.get(t[o]);if(f!=null)if(r<f&&f<l){let h=o,a=1,v;for(;++h<i&&h<l&&!((v=c.get(t[h]))==null||v!==f+a);)a++;if(a>f-r){const _=t[o];for(;r<f;)e.insertBefore(n[r++],_)}else e.replaceChild(n[r++],t[o++])}else o++;else t[o++].remove()}}}const he="_$DX_DELEGATE";function Je(e,t,n,s={}){let i;return H(l=>{i=l,t===document?e():G(t,e(),t.firstChild?null:void 0,n)},s.owner),()=>{i(),t.textContent=""}}function Ze(e,t,n){const s=document.createElement("template");s.innerHTML=e;let i=s.content.firstChild;return n&&(i=i.firstChild),i}function ze(e,t=window.document){const n=t[he]||(t[he]=new Set);for(let s=0,i=e.length;s<i;s++){const l=e[s];n.has(l)||(n.add(l),t.addEventListener(l,rt))}}function Pe(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function et(e,t,n,s){s==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,s)}function K(e,t){t==null?e.removeAttribute("class"):e.className=t}function tt(e,t,n,s){if(s)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const i=n[0];e.addEventListener(t,n[0]=l=>i.call(e,n[1],l))}else e.addEventListener(t,n)}function nt(e,t,n={}){const s=Object.keys(t||{}),i=Object.keys(n);let l,o;for(l=0,o=i.length;l<o;l++){const r=i[l];!r||r==="undefined"||t[r]||(ge(e,r,!1),delete n[r])}for(l=0,o=s.length;l<o;l++){const r=s[l],u=!!t[r];!r||r==="undefined"||n[r]===u||!u||(ge(e,r,!0),n[r]=u)}return n}function st(e,t,n){if(!t)return n?Pe(e,"style"):t;const s=e.style;if(typeof t=="string")return s.cssText=t;typeof n=="string"&&(s.cssText=n=void 0),n||(n={}),t||(t={});let i,l;for(l in n)t[l]==null&&s.removeProperty(l),delete n[l];for(l in t)i=t[l],i!==n[l]&&(s.setProperty(l,i),n[l]=i);return n}function Ct(e,t={},n,s){const i={};return s||$(()=>i.children=D(e,t.children,i.children)),$(()=>t.ref&&t.ref(e)),$(()=>it(e,t,n,!0,i,!0)),i}function G(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return D(e,t,s,n);$(i=>D(e,t(),i,n),s)}function it(e,t,n,s,i={},l=!1){t||(t={});for(const o in i)if(!(o in t)){if(o==="children")continue;i[o]=ye(e,o,null,i[o],n,l)}for(const o in t){if(o==="children"){s||D(e,t.children);continue}const r=t[o];i[o]=ye(e,o,r,i[o],n,l)}}function lt(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function ge(e,t,n){const s=t.trim().split(/\s+/);for(let i=0,l=s.length;i<l;i++)e.classList.toggle(s[i],n)}function ye(e,t,n,s,i,l){let o,r,u;if(t==="style")return st(e,n,s);if(t==="classList")return nt(e,n,s);if(n===s)return s;if(t==="ref")l||n(e);else if(t.slice(0,3)==="on:"){const c=t.slice(3);s&&e.removeEventListener(c,s),n&&e.addEventListener(c,n)}else if(t.slice(0,10)==="oncapture:"){const c=t.slice(10);s&&e.removeEventListener(c,s,!0),n&&e.addEventListener(c,n,!0)}else if(t.slice(0,2)==="on"){const c=t.slice(2).toLowerCase(),f=We.has(c);if(!f&&s){const h=Array.isArray(s)?s[0]:s;e.removeEventListener(c,h)}(f||n)&&(tt(e,c,n,f),f&&ze([c]))}else if((u=Ge.has(t))||!i&&(de[t]||(r=Ke.has(t)))||(o=e.nodeName.includes("-")))t==="class"||t==="className"?K(e,n):o&&!r&&!u?e[lt(t)]=n:e[de[t]||t]=n;else{const c=i&&t.indexOf(":")>-1&&Qe[t.split(":")[0]];c?et(e,c,t,n):Pe(e,Xe[t]||t,n)}return n}function rt(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),m.registry&&!m.done&&(m.done=!0,document.querySelectorAll("[id^=pl-]").forEach(s=>{for(;s&&s.nodeType!==8&&s.nodeValue!=="pl-"+e;){let i=s.nextSibling;s.remove(),s=i}s&&s.remove()}));n;){const s=n[t];if(s&&!n.disabled){const i=n[`${t}Data`];if(i!==void 0?s.call(n,i,e):s.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function D(e,t,n,s,i){for(m.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const l=typeof t,o=s!==void 0;if(e=o&&n[0]&&n[0].parentNode||e,l==="string"||l==="number"){if(m.context)return n;if(l==="number"&&(t=t.toString()),o){let r=n[0];r&&r.nodeType===3?r.data=t:r=document.createTextNode(t),n=I(e,n,s,r)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||l==="boolean"){if(m.context)return n;n=I(e,n,s)}else{if(l==="function")return $(()=>{let r=t();for(;typeof r=="function";)r=r();n=D(e,r,n,s)}),()=>n;if(Array.isArray(t)){const r=[],u=n&&Array.isArray(n);if(re(r,t,n,i))return $(()=>n=D(e,r,n,s,!0)),()=>n;if(m.context){if(!r.length)return n;for(let c=0;c<r.length;c++)if(r[c].parentNode)return n=r}if(r.length===0){if(n=I(e,n,s),o)return n}else u?n.length===0?me(e,r,s):Ye(e,n,r):(n&&I(e),me(e,r));n=r}else if(t instanceof Node){if(m.context&&t.parentNode)return n=o?[t]:t;if(Array.isArray(n)){if(o)return n=I(e,n,s,t);I(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function re(e,t,n,s){let i=!1;for(let l=0,o=t.length;l<o;l++){let r=t[l],u=n&&n[l];if(r instanceof Node)e.push(r);else if(!(r==null||r===!0||r===!1))if(Array.isArray(r))i=re(e,r,u)||i;else if(typeof r=="function")if(s){for(;typeof r=="function";)r=r();i=re(e,Array.isArray(r)?r:[r],Array.isArray(u)?u:[u])||i}else e.push(r),i=!0;else{const c=String(r);u&&u.nodeType===3&&u.data===c?e.push(u):e.push(document.createTextNode(c))}}return i}function me(e,t,n=null){for(let s=0,i=t.length;s<i;s++)e.insertBefore(t[s],n)}function I(e,t,n,s){if(n===void 0)return e.textContent="";const i=s||document.createTextNode("");if(t.length){let l=!1;for(let o=t.length-1;o>=0;o--){const r=t[o];if(i!==r){const u=r.parentNode===e;!l&&!o?u?e.replaceChild(i,r):e.insertBefore(i,n):u&&r.remove()}else l=!0}}else e.insertBefore(i,n);return[i]}const kt=!1;const ot="modulepreload",ft=function(e){return"/css-gallery/"+e},we={},ce=function(t,n,s){if(!n||n.length===0)return t();const i=document.getElementsByTagName("link");return Promise.all(n.map(l=>{if(l=ft(l),l in we)return;we[l]=!0;const o=l.endsWith(".css"),r=o?'[rel="stylesheet"]':"";if(!!s)for(let f=i.length-1;f>=0;f--){const h=i[f];if(h.href===l&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${r}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":ot,o||(c.as="script",c.crossOrigin=""),c.href=l,document.head.appendChild(c),o)return new Promise((f,h)=>{c.addEventListener("load",f),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${l}`)))})})).then(()=>t())},ie={"icon-brand_ai":"_icon-brand_ai_oxtw4_35"},ct={author:"Elwin",version:"1.0.0",gallery:[{title:"圆盘型导航",link:"circle-nav/index.html",cover:"cover/circle-nav.png",outline:"圆盘型导航"},{title:"开关灯效果",link:"light-bulb/index.html",cover:"cover/light-bulb.png",outline:"开关灯效果"},{title:"按钮悬停立体效果",link:"social-3d-hover/index.html",cover:"cover/social-3d-hover.png",outline:"按钮悬停立体效果"}]},pe="/css-gallery/assets/vm8-107f598f.mp4",be="/css-gallery/assets/vm8-3f116d3f.png",ut="/css-gallery/assets/vm7-113cc972.mp4",at="/css-gallery/assets/vm7-6421a8bd.png",dt="/css-gallery/assets/vm6-9c9ecc0d.mp4",ht="/css-gallery/assets/vm6-ee5d9995.png",gt="/css-gallery/assets/vm5-c07a5eee.mp4",yt="/css-gallery/assets/vm5-7d7dff14.png",ve="/css-gallery/assets/vm4-31226db2.mp4",xe="/css-gallery/assets/vm4-fc35d434.png",mt=Ze("<div><div><div></div></div></div>"),wt=fe(()=>ce(()=>import("./Card-8c50859c.js"),["assets/Card-8c50859c.js","assets/Card-511a7fec.css"])),pt=fe(()=>ce(()=>import("./Header-2245bd3e.js"),["assets/Header-2245bd3e.js","assets/Header-843234e2.css"])),bt=fe(()=>ce(()=>import("./Carousel-223991af.js"),["assets/Carousel-223991af.js","assets/Carousel-19a5fcf5.css"])),vt=[{video:pe,image:be},{video:ve,image:xe},{video:gt,image:yt},{video:dt,image:ht},{video:ut,image:at},{video:pe,image:be},{video:ve,image:xe}],xt=()=>(()=>{const e=mt.cloneNode(!0),t=e.firstChild,n=t.firstChild;return G(e,U(pt,{}),t),G(e,U(bt,{swiperList:vt}),t),G(n,U(Fe,{get each(){return ct.gallery},children:s=>U(wt,{get title(){return s.title},get link(){return s.link},get outline(){return s.outline},get cover(){return s.cover}})})),$(s=>{const i=ie.App,l=ie.container,o=ie.row;return i!==s._v$&&K(e,s._v$=i),l!==s._v$2&&K(t,s._v$2=l),o!==s._v$3&&K(n,s._v$3=o),s},{_v$:void 0,_v$2:void 0,_v$3:void 0}),e})(),At=document.getElementById("root");Je(()=>U(xt,{}),At);export{Fe as F,_t as S,kt as a,$ as b,B as c,Pe as d,st as e,j as f,U as g,nt as h,G as i,K as j,ze as k,tt as l,St as m,Et as o,Ct as s,Ze as t};