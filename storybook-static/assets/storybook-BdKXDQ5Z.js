import{j as p}from"./jsx-runtime-BZf_YgVj.js";import{g as f}from"./index-CEThVCg_.js";const b={colors:["primary","secondary","tertiary"],sizes:["sm","md","lg"]};var c={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(r){(function(){var s={}.hasOwnProperty;function n(){for(var t="",o=0;o<arguments.length;o++){var i=arguments[o];i&&(t=a(t,e(i)))}return t}function e(t){if(typeof t=="string"||typeof t=="number")return t;if(typeof t!="object")return"";if(Array.isArray(t))return n.apply(null,t);if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]"))return t.toString();var o="";for(var i in t)s.call(t,i)&&t[i]&&(o=a(o,i));return o}function a(t,o){return o?t?t+" "+o:t+o:t}r.exports?(n.default=n,r.exports=n):window.classNames=n})()})(c);var l=c.exports;const m=f(l),y=(r,s)=>r&&r[s]||s,x=(r,s)=>Object.keys(s).reduce((n,e)=>{const a=r[e];return a?{...n,[a]:s[e]}:n},{}),d=(r,s,n)=>n.reduce((e,a)=>{const t=s[a],o=r[`${a}-${t}`];return o&&t?{...e,[o]:t}:e},{}),u=r=>s=>(...n)=>m(n.map(e=>{if(Array.isArray(e))return d(r,s,e);if(typeof e=="string")return y(r,e);if(typeof e=="object")return x(r,e)})),g=(r,s)=>n=>{const e={...r.defaultProps,...n};return p.jsx(r,{...n,getStyles:u(s)(e)})},v=(r,s)=>({items:n,...e})=>n.map((a,t)=>{const o={...r.defaultProps,...e,...a};return p.jsx(r,{...o,getStyles:u(s)(o)},t)}),A=r=>({description:"**options:**",table:{type:{summary:r.map(s=>`\`${s}\``).join(" | ")}},control:{type:"select",options:r}});export{g as a,v as b,m as c,A as g,b as o};
