(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{339:function(e,n,t){"use strict";var a=t(2),i=t(36).find,s=t(106),r=!0;"find"in[]&&Array(1).find((function(){r=!1})),a({target:"Array",proto:!0,forced:r},{find:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),s("find")},342:function(e,n){function t(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach((function(n){var a=e[n];"object"!=typeof a||Object.isFrozen(a)||t(a)})),e}var a=t,i=t;a.default=i;class s{constructor(e){void 0===e.data&&(e.data={}),this.data=e.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function r(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function o(e,...n){const t=Object.create(null);for(const n in e)t[n]=e[n];return n.forEach((function(e){for(const n in e)t[n]=e[n]})),t}const l=e=>!!e.kind;class c{constructor(e,n){this.buffer="",this.classPrefix=n.classPrefix,e.walk(this)}addText(e){this.buffer+=r(e)}openNode(e){if(!l(e))return;let n=e.kind;e.sublanguage||(n=`${this.classPrefix}${n}`),this.span(n)}closeNode(e){l(e)&&(this.buffer+="</span>")}value(){return this.buffer}span(e){this.buffer+=`<span class="${e}">`}}class g{constructor(){this.rootNode={children:[]},this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){this.top.children.push(e)}openNode(e){const n={kind:e,children:[]};this.add(n),this.stack.push(n)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,n){return"string"==typeof n?e.addText(n):n.children&&(e.openNode(n),n.children.forEach(n=>this._walk(e,n)),e.closeNode(n)),e}static _collapse(e){"string"!=typeof e&&e.children&&(e.children.every(e=>"string"==typeof e)?e.children=[e.children.join("")]:e.children.forEach(e=>{g._collapse(e)}))}}class u extends g{constructor(e){super(),this.options=e}addKeyword(e,n){""!==e&&(this.openNode(n),this.addText(e),this.closeNode())}addText(e){""!==e&&this.add(e)}addSublanguage(e,n){const t=e.root;t.kind=n,t.sublanguage=!0,this.add(t)}toHTML(){return new c(this,this.options).value()}finalize(){return!0}}function d(e){return e?"string"==typeof e?e:e.source:null}const h=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;const f="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",b={begin:"\\\\[\\s\\S]",relevance:0},m={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[b]},p={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[b]},E={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},N=function(e,n,t={}){const a=o({className:"comment",begin:e,end:n,contains:[]},t);return a.contains.push(E),a.contains.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):",relevance:0}),a},w=N("//","$"),x=N("/\\*","\\*/"),_=N("#","$"),y={className:"number",begin:"\\b\\d+(\\.\\d+)?",relevance:0},v={className:"number",begin:f,relevance:0},R={className:"number",begin:"\\b(0b[01]+)",relevance:0},O={className:"number",begin:"\\b\\d+(\\.\\d+)?(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},A={begin:/(?=\/[^/\n]*\/)/,contains:[{className:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[b,{begin:/\[/,end:/\]/,relevance:0,contains:[b]}]}]},M={className:"title",begin:"[a-zA-Z]\\w*",relevance:0},k={className:"title",begin:"[a-zA-Z_]\\w*",relevance:0},T={begin:"\\.\\s*[a-zA-Z_]\\w*",relevance:0};var I=Object.freeze({__proto__:null,MATCH_NOTHING_RE:/\b\B/,IDENT_RE:"[a-zA-Z]\\w*",UNDERSCORE_IDENT_RE:"[a-zA-Z_]\\w*",NUMBER_RE:"\\b\\d+(\\.\\d+)?",C_NUMBER_RE:f,BINARY_NUMBER_RE:"\\b(0b[01]+)",RE_STARTERS_RE:"!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",SHEBANG:(e={})=>{const n=/^#![ ]*\//;return e.binary&&(e.begin=function(...e){return e.map(e=>d(e)).join("")}(n,/.*\b/,e.binary,/\b.*/)),o({className:"meta",begin:n,end:/$/,relevance:0,"on:begin":(e,n)=>{0!==e.index&&n.ignoreMatch()}},e)},BACKSLASH_ESCAPE:b,APOS_STRING_MODE:m,QUOTE_STRING_MODE:p,PHRASAL_WORDS_MODE:E,COMMENT:N,C_LINE_COMMENT_MODE:w,C_BLOCK_COMMENT_MODE:x,HASH_COMMENT_MODE:_,NUMBER_MODE:y,C_NUMBER_MODE:v,BINARY_NUMBER_MODE:R,CSS_NUMBER_MODE:O,REGEXP_MODE:A,TITLE_MODE:M,UNDERSCORE_TITLE_MODE:k,METHOD_GUARD:T,END_SAME_AS_BEGIN:function(e){return Object.assign(e,{"on:begin":(e,n)=>{n.data._beginMatch=e[1]},"on:end":(e,n)=>{n.data._beginMatch!==e[1]&&n.ignoreMatch()}})}});function S(e,n){"."===e.input[e.index-1]&&n.ignoreMatch()}function L(e,n){n&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=S,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,void 0===e.relevance&&(e.relevance=0))}function D(e,n){Array.isArray(e.illegal)&&(e.illegal=function(...e){return"("+e.map(e=>d(e)).join("|")+")"}(...e.illegal))}function B(e,n){if(e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function j(e,n){void 0===e.relevance&&(e.relevance=1)}const P=["of","and","for","in","not","or","if","then","parent","list","value"];function C(e,n){return n?Number(n):function(e){return P.includes(e.toLowerCase())}(e)?0:1}function U(e,{plugins:n}){function t(n,t){return new RegExp(d(n),"m"+(e.case_insensitive?"i":"")+(t?"g":""))}class a{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(e,n){n.position=this.position++,this.matchIndexes[this.matchAt]=n,this.regexes.push([n,e]),this.matchAt+=function(e){return new RegExp(e.toString()+"|").exec("").length-1}(e)+1}compile(){0===this.regexes.length&&(this.exec=()=>null);const e=this.regexes.map(e=>e[1]);this.matcherRe=t(function(e,n="|"){let t=0;return e.map(e=>{t+=1;const n=t;let a=d(e),i="";for(;a.length>0;){const e=h.exec(a);if(!e){i+=a;break}i+=a.substring(0,e.index),a=a.substring(e.index+e[0].length),"\\"===e[0][0]&&e[1]?i+="\\"+String(Number(e[1])+n):(i+=e[0],"("===e[0]&&t++)}return i}).map(e=>`(${e})`).join(n)}(e),!0),this.lastIndex=0}exec(e){this.matcherRe.lastIndex=this.lastIndex;const n=this.matcherRe.exec(e);if(!n)return null;const t=n.findIndex((e,n)=>n>0&&void 0!==e),a=this.matchIndexes[t];return n.splice(0,t),Object.assign(n,a)}}class i{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(e){if(this.multiRegexes[e])return this.multiRegexes[e];const n=new a;return this.rules.slice(e).forEach(([e,t])=>n.addRule(e,t)),n.compile(),this.multiRegexes[e]=n,n}resumingScanAtSamePosition(){return 0!==this.regexIndex}considerAll(){this.regexIndex=0}addRule(e,n){this.rules.push([e,n]),"begin"===n.type&&this.count++}exec(e){const n=this.getMatcher(this.regexIndex);n.lastIndex=this.lastIndex;let t=n.exec(e);if(this.resumingScanAtSamePosition())if(t&&t.index===this.lastIndex);else{const n=this.getMatcher(0);n.lastIndex=this.lastIndex+1,t=n.exec(e)}return t&&(this.regexIndex+=t.position+1,this.regexIndex===this.count&&this.considerAll()),t}}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=o(e.classNameAliases||{}),function n(a,s){const r=a;if(a.isCompiled)return r;[B].forEach(e=>e(a,s)),e.compilerExtensions.forEach(e=>e(a,s)),a.__beforeBegin=null,[L,D,j].forEach(e=>e(a,s)),a.isCompiled=!0;let l=null;if("object"==typeof a.keywords&&(l=a.keywords.$pattern,delete a.keywords.$pattern),a.keywords&&(a.keywords=function e(n,t,a="keyword"){const i={};return"string"==typeof n?s(a,n.split(" ")):Array.isArray(n)?s(a,n):Object.keys(n).forEach((function(a){Object.assign(i,e(n[a],t,a))})),i;function s(e,n){t&&(n=n.map(e=>e.toLowerCase())),n.forEach((function(n){const t=n.split("|");i[t[0]]=[e,C(t[0],t[1])]}))}}(a.keywords,e.case_insensitive)),a.lexemes&&l)throw new Error("ERR: Prefer `keywords.$pattern` to `mode.lexemes`, BOTH are not allowed. (see mode reference) ");return l=l||a.lexemes||/\w+/,r.keywordPatternRe=t(l,!0),s&&(a.begin||(a.begin=/\B|\b/),r.beginRe=t(a.begin),a.endSameAsBegin&&(a.end=a.begin),a.end||a.endsWithParent||(a.end=/\B|\b/),a.end&&(r.endRe=t(a.end)),r.terminatorEnd=d(a.end)||"",a.endsWithParent&&s.terminatorEnd&&(r.terminatorEnd+=(a.end?"|":"")+s.terminatorEnd)),a.illegal&&(r.illegalRe=t(a.illegal)),a.contains||(a.contains=[]),a.contains=[].concat(...a.contains.map((function(e){return function(e){e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map((function(n){return o(e,{variants:null},n)})));if(e.cachedVariants)return e.cachedVariants;if(function e(n){return!!n&&(n.endsWithParent||e(n.starts))}(e))return o(e,{starts:e.starts?o(e.starts):null});if(Object.isFrozen(e))return o(e);return e}("self"===e?a:e)}))),a.contains.forEach((function(e){n(e,r)})),a.starts&&n(a.starts,s),r.matcher=function(e){const n=new i;return e.contains.forEach(e=>n.addRule(e.begin,{rule:e,type:"begin"})),e.terminatorEnd&&n.addRule(e.terminatorEnd,{type:"end"}),e.illegal&&n.addRule(e.illegal,{type:"illegal"}),n}(r),r}(e)}function H(e){const n={props:["language","code","autodetect"],data:function(){return{detectedLanguage:"",unknownLanguage:!1}},computed:{className(){return this.unknownLanguage?"":"hljs "+this.detectedLanguage},highlighted(){if(!this.autoDetect&&!e.getLanguage(this.language))return console.warn(`The language "${this.language}" you specified could not be found.`),this.unknownLanguage=!0,r(this.code);let n={};return this.autoDetect?(n=e.highlightAuto(this.code),this.detectedLanguage=n.language):(n=e.highlight(this.language,this.code,this.ignoreIllegals),this.detectedLanguage=this.language),n.value},autoDetect(){return!this.language||(e=this.autodetect,Boolean(e||""===e));var e},ignoreIllegals:()=>!0},render(e){return e("pre",{},[e("code",{class:this.className,domProps:{innerHTML:this.highlighted}})])}};return{Component:n,VuePlugin:{install(e){e.component("highlightjs",n)}}}}const $={"after:highlightElement":({el:e,result:n,text:t})=>{const a=G(e);if(!a.length)return;const i=document.createElement("div");i.innerHTML=n.value,n.value=function(e,n,t){let a=0,i="";const s=[];function o(){return e.length&&n.length?e[0].offset!==n[0].offset?e[0].offset<n[0].offset?e:n:"start"===n[0].event?e:n:e.length?e:n}function l(e){i+="<"+z(e)+[].map.call(e.attributes,(function(e){return" "+e.nodeName+'="'+r(e.value)+'"'})).join("")+">"}function c(e){i+="</"+z(e)+">"}function g(e){("start"===e.event?l:c)(e.node)}for(;e.length||n.length;){let n=o();if(i+=r(t.substring(a,n[0].offset)),a=n[0].offset,n===e){s.reverse().forEach(c);do{g(n.splice(0,1)[0]),n=o()}while(n===e&&n.length&&n[0].offset===a);s.reverse().forEach(l)}else"start"===n[0].event?s.push(n[0].node):s.pop(),g(n.splice(0,1)[0])}return i+r(t.substr(a))}(a,G(i),t)}};function z(e){return e.nodeName.toLowerCase()}function G(e){const n=[];return function e(t,a){for(let i=t.firstChild;i;i=i.nextSibling)3===i.nodeType?a+=i.nodeValue.length:1===i.nodeType&&(n.push({event:"start",offset:a,node:i}),a=e(i,a),z(i).match(/br|hr|img|input/)||n.push({event:"stop",offset:a,node:i}));return a}(e,0),n}const K=e=>{console.error(e)},Z=(e,...n)=>{console.log("WARN: "+e,...n)},F=(e,n)=>{console.log(`Deprecated as of ${e}. ${n}`)},W=r,X=o,q=Symbol("nomatch");var V=function(e){const n=Object.create(null),t=Object.create(null),i=[];let r=!0;const o=/(^(<[^>]+>|\t|)+|\n)/gm,l="Could not find the language '{}', did you forget to load/include a language module?",c={disableAutodetect:!0,name:"Plain text",contains:[]};let g={noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:null,__emitter:u};function d(e){return g.noHighlightRe.test(e)}function h(e,n,t,a){let i="",s="";"object"==typeof n?(i=e,t=n.ignoreIllegals,s=n.language,a=void 0):(F("10.7.0","highlight(lang, code, ...args) has been deprecated."),F("10.7.0","Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"),s=e,i=n);const r={code:i,language:s};O("before:highlight",r);const o=r.result?r.result:f(r.language,r.code,t,a);return o.code=r.code,O("after:highlight",o),o}function f(e,t,a,o){function c(e,n){const t=w.case_insensitive?n[0].toLowerCase():n[0];return Object.prototype.hasOwnProperty.call(e.keywords,t)&&e.keywords[t]}function u(){null!=v.subLanguage?function(){if(""===A)return;let e=null;if("string"==typeof v.subLanguage){if(!n[v.subLanguage])return void O.addText(A);e=f(v.subLanguage,A,!0,R[v.subLanguage]),R[v.subLanguage]=e.top}else e=b(A,v.subLanguage.length?v.subLanguage:null);v.relevance>0&&(M+=e.relevance),O.addSublanguage(e.emitter,e.language)}():function(){if(!v.keywords)return void O.addText(A);let e=0;v.keywordPatternRe.lastIndex=0;let n=v.keywordPatternRe.exec(A),t="";for(;n;){t+=A.substring(e,n.index);const a=c(v,n);if(a){const[e,i]=a;if(O.addText(t),t="",M+=i,e.startsWith("_"))t+=n[0];else{const t=w.classNameAliases[e]||e;O.addKeyword(n[0],t)}}else t+=n[0];e=v.keywordPatternRe.lastIndex,n=v.keywordPatternRe.exec(A)}t+=A.substr(e),O.addText(t)}(),A=""}function d(e){return e.className&&O.openNode(w.classNameAliases[e.className]||e.className),v=Object.create(e,{parent:{value:v}}),v}function h(e){return 0===v.matcher.regexIndex?(A+=e[0],1):(I=!0,0)}function m(e){const n=e[0],t=e.rule,a=new s(t),i=[t.__beforeBegin,t["on:begin"]];for(const t of i)if(t&&(t(e,a),a.isMatchIgnored))return h(n);return t&&t.endSameAsBegin&&(t.endRe=new RegExp(n.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),"m")),t.skip?A+=n:(t.excludeBegin&&(A+=n),u(),t.returnBegin||t.excludeBegin||(A=n)),d(t),t.returnBegin?0:n.length}function p(e){const n=e[0],a=t.substr(e.index),i=function e(n,t,a){let i=function(e,n){const t=e&&e.exec(n);return t&&0===t.index}(n.endRe,a);if(i){if(n["on:end"]){const e=new s(n);n["on:end"](t,e),e.isMatchIgnored&&(i=!1)}if(i){for(;n.endsParent&&n.parent;)n=n.parent;return n}}if(n.endsWithParent)return e(n.parent,t,a)}(v,e,a);if(!i)return q;const r=v;r.skip?A+=n:(r.returnEnd||r.excludeEnd||(A+=n),u(),r.excludeEnd&&(A=n));do{v.className&&O.closeNode(),v.skip||v.subLanguage||(M+=v.relevance),v=v.parent}while(v!==i.parent);return i.starts&&(i.endSameAsBegin&&(i.starts.endRe=i.endRe),d(i.starts)),r.returnEnd?0:n.length}let E={};function N(n,i){const s=i&&i[0];if(A+=n,null==s)return u(),0;if("begin"===E.type&&"end"===i.type&&E.index===i.index&&""===s){if(A+=t.slice(i.index,i.index+1),!r){const n=new Error("0 width match regex");throw n.languageName=e,n.badRule=E.rule,n}return 1}if(E=i,"begin"===i.type)return m(i);if("illegal"===i.type&&!a){const e=new Error('Illegal lexeme "'+s+'" for mode "'+(v.className||"<unnamed>")+'"');throw e.mode=v,e}if("end"===i.type){const e=p(i);if(e!==q)return e}if("illegal"===i.type&&""===s)return 1;if(T>1e5&&T>3*i.index){throw new Error("potential infinite loop, way more iterations than matches")}return A+=s,s.length}const w=y(e);if(!w)throw K(l.replace("{}",e)),new Error('Unknown language: "'+e+'"');const x=U(w,{plugins:i});let _="",v=o||x;const R={},O=new g.__emitter(g);!function(){const e=[];for(let n=v;n!==w;n=n.parent)n.className&&e.unshift(n.className);e.forEach(e=>O.openNode(e))}();let A="",M=0,k=0,T=0,I=!1;try{for(v.matcher.considerAll();;){T++,I?I=!1:v.matcher.considerAll(),v.matcher.lastIndex=k;const e=v.matcher.exec(t);if(!e)break;const n=N(t.substring(k,e.index),e);k=e.index+n}return N(t.substr(k)),O.closeAllNodes(),O.finalize(),_=O.toHTML(),{relevance:Math.floor(M),value:_,language:e,illegal:!1,emitter:O,top:v}}catch(n){if(n.message&&n.message.includes("Illegal"))return{illegal:!0,illegalBy:{msg:n.message,context:t.slice(k-100,k+100),mode:n.mode},sofar:_,relevance:0,value:W(t),emitter:O};if(r)return{illegal:!1,relevance:0,value:W(t),emitter:O,language:e,top:v,errorRaised:n};throw n}}function b(e,t){t=t||g.languages||Object.keys(n);const a=function(e){const n={relevance:0,emitter:new g.__emitter(g),value:W(e),illegal:!1,top:c};return n.emitter.addText(e),n}(e),i=t.filter(y).filter(R).map(n=>f(n,e,!1));i.unshift(a);const s=i.sort((e,n)=>{if(e.relevance!==n.relevance)return n.relevance-e.relevance;if(e.language&&n.language){if(y(e.language).supersetOf===n.language)return 1;if(y(n.language).supersetOf===e.language)return-1}return 0}),[r,o]=s,l=r;return l.second_best=o,l}const m={"before:highlightElement":({el:e})=>{g.useBR&&(e.innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ /]*>/g,"\n"))},"after:highlightElement":({result:e})=>{g.useBR&&(e.value=e.value.replace(/\n/g,"<br>"))}},p=/^(<[^>]+>|\t)+/gm,E={"after:highlightElement":({result:e})=>{g.tabReplace&&(e.value=e.value.replace(p,e=>e.replace(/\t/g,g.tabReplace)))}};function N(e){let n=null;const a=function(e){let n=e.className+" ";n+=e.parentNode?e.parentNode.className:"";const t=g.languageDetectRe.exec(n);if(t){const n=y(t[1]);return n||(Z(l.replace("{}",t[1])),Z("Falling back to no-highlight mode for this block.",e)),n?t[1]:"no-highlight"}return n.split(/\s+/).find(e=>d(e)||y(e))}(e);if(d(a))return;O("before:highlightElement",{el:e,language:a}),n=e;const i=n.textContent,s=a?h(i,{language:a,ignoreIllegals:!0}):b(i);O("after:highlightElement",{el:e,result:s,text:i}),e.innerHTML=s.value,function(e,n,a){const i=n?t[n]:a;e.classList.add("hljs"),i&&e.classList.add(i)}(e,a,s.language),e.result={language:s.language,re:s.relevance,relavance:s.relevance},s.second_best&&(e.second_best={language:s.second_best.language,re:s.second_best.relevance,relavance:s.second_best.relevance})}const w=()=>{if(w.called)return;w.called=!0,F("10.6.0","initHighlighting() is deprecated.  Use highlightAll() instead.");document.querySelectorAll("pre code").forEach(N)};let x=!1;function _(){if("loading"===document.readyState)return void(x=!0);document.querySelectorAll("pre code").forEach(N)}function y(e){return e=(e||"").toLowerCase(),n[e]||n[t[e]]}function v(e,{languageName:n}){"string"==typeof e&&(e=[e]),e.forEach(e=>{t[e.toLowerCase()]=n})}function R(e){const n=y(e);return n&&!n.disableAutodetect}function O(e,n){const t=e;i.forEach((function(e){e[t]&&e[t](n)}))}"undefined"!=typeof window&&window.addEventListener&&window.addEventListener("DOMContentLoaded",(function(){x&&_()}),!1),Object.assign(e,{highlight:h,highlightAuto:b,highlightAll:_,fixMarkup:function(e){return F("10.2.0","fixMarkup will be removed entirely in v11.0"),F("10.2.0","Please see https://github.com/highlightjs/highlight.js/issues/2534"),n=e,g.tabReplace||g.useBR?n.replace(o,e=>"\n"===e?g.useBR?"<br>":e:g.tabReplace?e.replace(/\t/g,g.tabReplace):e):n;var n},highlightElement:N,highlightBlock:function(e){return F("10.7.0","highlightBlock will be removed entirely in v12.0"),F("10.7.0","Please use highlightElement now."),N(e)},configure:function(e){e.useBR&&(F("10.3.0","'useBR' will be removed entirely in v11.0"),F("10.3.0","Please see https://github.com/highlightjs/highlight.js/issues/2559")),g=X(g,e)},initHighlighting:w,initHighlightingOnLoad:function(){F("10.6.0","initHighlightingOnLoad() is deprecated.  Use highlightAll() instead."),x=!0},registerLanguage:function(t,a){let i=null;try{i=a(e)}catch(e){if(K("Language definition for '{}' could not be registered.".replace("{}",t)),!r)throw e;K(e),i=c}i.name||(i.name=t),n[t]=i,i.rawDefinition=a.bind(null,e),i.aliases&&v(i.aliases,{languageName:t})},unregisterLanguage:function(e){delete n[e];for(const n of Object.keys(t))t[n]===e&&delete t[n]},listLanguages:function(){return Object.keys(n)},getLanguage:y,registerAliases:v,requireLanguage:function(e){F("10.4.0","requireLanguage will be removed entirely in v11."),F("10.4.0","Please see https://github.com/highlightjs/highlight.js/pull/2844");const n=y(e);if(n)return n;throw new Error("The '{}' language is required, but not loaded.".replace("{}",e))},autoDetection:R,inherit:X,addPlugin:function(e){!function(e){e["before:highlightBlock"]&&!e["before:highlightElement"]&&(e["before:highlightElement"]=n=>{e["before:highlightBlock"](Object.assign({block:n.el},n))}),e["after:highlightBlock"]&&!e["after:highlightElement"]&&(e["after:highlightElement"]=n=>{e["after:highlightBlock"](Object.assign({block:n.el},n))})}(e),i.push(e)},vuePlugin:H(e).VuePlugin}),e.debugMode=function(){r=!1},e.safeMode=function(){r=!0},e.versionString="10.7.1";for(const e in I)"object"==typeof I[e]&&a(I[e]);return Object.assign(e,I),e.addPlugin(m),e.addPlugin($),e.addPlugin(E),e}({});e.exports=V},343:function(e,n){function t(e){return e?"string"==typeof e?e:e.source:null}function a(...e){return e.map(e=>t(e)).join("")}e.exports=function(e){const n={"builtin-name":["action","bindattr","collection","component","concat","debugger","each","each-in","get","hash","if","in","input","link-to","loc","log","lookup","mut","outlet","partial","query-params","render","template","textarea","unbound","unless","view","with","yield"]},i=/\[\]|\[[^\]]+\]/,s=/[^\s!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~]+/,r=function(...e){return"("+e.map(e=>t(e)).join("|")+")"}(/""|"[^"]+"/,/''|'[^']+'/,i,s),o=a(a("(",/\.|\.\/|\//,")?"),r,function(e){return a("(",e,")*")}(a(/(\.|\/)/,r))),l=a("(",i,"|",s,")(?==)"),c={begin:o,lexemes:/[\w.\/]+/},g=e.inherit(c,{keywords:{literal:["true","false","undefined","null"]}}),u={begin:/\(/,end:/\)/},d={className:"attr",begin:l,relevance:0,starts:{begin:/=/,end:/=/,starts:{contains:[e.NUMBER_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,g,u]}}},h={contains:[e.NUMBER_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,{begin:/as\s+\|/,keywords:{keyword:"as"},end:/\|/,contains:[{begin:/\w+/}]},d,g,u],returnEnd:!0},f=e.inherit(c,{className:"name",keywords:n,starts:e.inherit(h,{end:/\)/})});u.contains=[f];const b=e.inherit(c,{keywords:n,className:"name",starts:e.inherit(h,{end:/\}\}/})}),m=e.inherit(c,{keywords:n,className:"name"}),p=e.inherit(c,{className:"name",keywords:n,starts:e.inherit(h,{end:/\}\}/})});return{name:"Handlebars",aliases:["hbs","html.hbs","html.handlebars","htmlbars"],case_insensitive:!0,subLanguage:"xml",contains:[{begin:/\\\{\{/,skip:!0},{begin:/\\\\(?=\{\{)/,skip:!0},e.COMMENT(/\{\{!--/,/--\}\}/),e.COMMENT(/\{\{!/,/\}\}/),{className:"template-tag",begin:/\{\{\{\{(?!\/)/,end:/\}\}\}\}/,contains:[b],starts:{end:/\{\{\{\{\//,returnEnd:!0,subLanguage:"xml"}},{className:"template-tag",begin:/\{\{\{\{\//,end:/\}\}\}\}/,contains:[m]},{className:"template-tag",begin:/\{\{#/,end:/\}\}/,contains:[b]},{className:"template-tag",begin:/\{\{(?=else\}\})/,end:/\}\}/,keywords:"else"},{className:"template-tag",begin:/\{\{(?=else if)/,end:/\}\}/,keywords:"else if"},{className:"template-tag",begin:/\{\{\//,end:/\}\}/,contains:[m]},{className:"template-variable",begin:/\{\{\{/,end:/\}\}\}/,contains:[p]},{className:"template-variable",begin:/\{\{/,end:/\}\}/,contains:[p]}]}}},344:function(e,n){const t=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],a=["true","false","null","undefined","NaN","Infinity"],i=[].concat(["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],["arguments","this","super","console","window","document","localStorage","module","global"],["Intl","DataView","Number","Math","Date","String","RegExp","Object","Function","Boolean","Error","Symbol","Set","Map","WeakSet","WeakMap","Proxy","Reflect","JSON","Promise","Float64Array","Int16Array","Int32Array","Int8Array","Uint16Array","Uint32Array","Float32Array","Array","Uint8Array","Uint8ClampedArray","ArrayBuffer","BigInt64Array","BigUint64Array","BigInt"],["EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"]);function s(e){return r("(?=",e,")")}function r(...e){return e.map(e=>{return(n=e)?"string"==typeof n?n:n.source:null;var n}).join("")}e.exports=function(e){const n="[A-Za-z$_][0-9A-Za-z$_]*",o="<>",l="</>",c={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(e,n)=>{const t=e[0].length+e.index,a=e.input[t];"<"!==a?">"===a&&(((e,{after:n})=>{const t="</"+e[0].slice(1);return-1!==e.input.indexOf(t,n)})(e,{after:t})||n.ignoreMatch()):n.ignoreMatch()}},g={$pattern:"[A-Za-z$_][0-9A-Za-z$_]*",keyword:t,literal:a,built_in:i},u="\\.([0-9](_?[0-9])*)",d={className:"number",variants:[{begin:`(\\b(0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*)((${u})|\\.)?|(${u}))[eE][+-]?([0-9](_?[0-9])*)\\b`},{begin:`\\b(0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*)\\b((${u})\\b|\\.)?|(${u})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},h={className:"subst",begin:"\\$\\{",end:"\\}",keywords:g,contains:[]},f={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,h],subLanguage:"xml"}},b={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,h],subLanguage:"css"}},m={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,h]},p={className:"comment",variants:[e.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+",contains:[{className:"type",begin:"\\{",end:"\\}",relevance:0},{className:"variable",begin:n+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},E=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,f,b,m,d,e.REGEXP_MODE];h.contains=E.concat({begin:/\{/,end:/\}/,keywords:g,contains:["self"].concat(E)});const N=[].concat(p,h.contains),w=N.concat([{begin:/\(/,end:/\)/,keywords:g,contains:["self"].concat(N)}]),x={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:g,contains:w};return{name:"Javascript",aliases:["js","jsx","mjs","cjs"],keywords:g,exports:{PARAMS_CONTAINS:w},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),{label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,f,b,m,p,d,{begin:r(/[{,\n]\s*/,s(r(/(((\/\/.*$)|(\/\*(\*[^/]|[^*])*\*\/))\s*)*/,n+"\\s*:"))),relevance:0,contains:[{className:"attr",begin:n+s("\\s*:"),relevance:0}]},{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",contains:[p,e.REGEXP_MODE,{className:"function",begin:"(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:g,contains:w}]}]},{begin:/,/,relevance:0},{className:"",begin:/\s/,end:/\s*/,skip:!0},{variants:[{begin:o,end:l},{begin:c.begin,"on:begin":c.isTrulyOpeningTag,end:c.end}],subLanguage:"xml",contains:[{begin:c.begin,end:c.end,skip:!0,contains:["self"]}]}],relevance:0},{className:"function",beginKeywords:"function",end:/[{;]/,excludeEnd:!0,keywords:g,contains:["self",e.inherit(e.TITLE_MODE,{begin:n}),x],illegal:/%/},{beginKeywords:"while if switch catch for"},{className:"function",begin:e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,contains:[x,e.inherit(e.TITLE_MODE,{begin:n})]},{variants:[{begin:"\\."+n},{begin:"\\$"+n}],relevance:0},{className:"class",beginKeywords:"class",end:/[{;=]/,excludeEnd:!0,illegal:/[:"[\]]/,contains:[{beginKeywords:"extends"},e.UNDERSCORE_TITLE_MODE]},{begin:/\b(?=constructor)/,end:/[{;]/,excludeEnd:!0,contains:[e.inherit(e.TITLE_MODE,{begin:n}),"self",x]},{begin:"(get|set)\\s+(?="+n+"\\()",end:/\{/,keywords:"get set",contains:[e.inherit(e.TITLE_MODE,{begin:n}),{begin:/\(\)/},x]},{begin:/\$[(.]/}]}}},345:function(e,n){function t(e){return e?"string"==typeof e?e:e.source:null}function a(e){return i("(?=",e,")")}function i(...e){return e.map(e=>t(e)).join("")}function s(...e){return"("+e.map(e=>t(e)).join("|")+")"}e.exports=function(e){const n=i(/[A-Z_]/,i("(",/[A-Z0-9_.-]*:/,")?"),/[A-Z0-9_.-]*/),t={className:"symbol",begin:/&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/},r={begin:/\s/,contains:[{className:"meta-keyword",begin:/#?[a-z_][a-z1-9_-]+/,illegal:/\n/}]},o=e.inherit(r,{begin:/\(/,end:/\)/}),l=e.inherit(e.APOS_STRING_MODE,{className:"meta-string"}),c=e.inherit(e.QUOTE_STRING_MODE,{className:"meta-string"}),g={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:/[A-Za-z0-9._:-]+/,relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[t]},{begin:/'/,end:/'/,contains:[t]},{begin:/[^\s"'=<>`]+/}]}]}]};return{name:"HTML, XML",aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],case_insensitive:!0,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,relevance:10,contains:[r,c,l,o,{begin:/\[/,end:/\]/,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,contains:[r,o,c,l]}]}]},e.COMMENT(/<!--/,/-->/,{relevance:10}),{begin:/<!\[CDATA\[/,end:/\]\]>/,relevance:10},t,{className:"meta",begin:/<\?xml/,end:/\?>/,relevance:10},{className:"tag",begin:/<style(?=\s|>)/,end:/>/,keywords:{name:"style"},contains:[g],starts:{end:/<\/style>/,returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:/<script(?=\s|>)/,end:/>/,keywords:{name:"script"},contains:[g],starts:{end:/<\/script>/,returnEnd:!0,subLanguage:["javascript","handlebars","xml"]}},{className:"tag",begin:/<>|<\/>/},{className:"tag",begin:i(/</,a(i(n,s(/\/>/,/>/,/\s/)))),end:/\/?>/,contains:[{className:"name",begin:n,relevance:0,starts:g}]},{className:"tag",begin:i(/<\//,a(i(n,/>/))),contains:[{className:"name",begin:n,relevance:0},{begin:/>/,relevance:0,endsParent:!0}]}]}}},346:function(e,n){e.exports=function(e){return{name:"Plain text",aliases:["text","txt"],disableAutodetect:!0}}}}]);