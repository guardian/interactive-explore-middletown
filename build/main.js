!function(e){function r(e,r,o){return 4===arguments.length?t.apply(this,arguments):void n(e,{declarative:!0,deps:r,declare:o})}function t(e,r,t,o){n(e,{declarative:!1,deps:r,executingRequire:t,execute:o})}function n(e,r){r.name=e,e in v||(v[e]=r),r.normalizedDeps=r.deps}function o(e,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==g.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var t=0,n=e.normalizedDeps.length;n>t;t++){var a=e.normalizedDeps[t],u=v[a];if(u&&!u.evaluated){var d=e.groupIndex+(u.declarative!=e.declarative);if(void 0===u.groupIndex||u.groupIndex<d){if(void 0!==u.groupIndex&&(r[u.groupIndex].splice(g.call(r[u.groupIndex],u),1),0==r[u.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");u.groupIndex=d}o(u,r)}}}}function a(e){var r=v[e];r.groupIndex=0;var t=[];o(r,t);for(var n=!!r.declarative==t.length%2,a=t.length-1;a>=0;a--){for(var u=t[a],i=0;i<u.length;i++){var s=u[i];n?d(s):l(s)}n=!n}}function u(e){return y[e]||(y[e]={name:e,dependencies:[],exports:{},importers:[]})}function d(r){if(!r.module){var t=r.module=u(r.name),n=r.module.exports,o=r.declare.call(e,function(e,r){if(t.locked=!0,"object"==typeof e)for(var o in e)n[o]=e[o];else n[e]=r;for(var a=0,u=t.importers.length;u>a;a++){var d=t.importers[a];if(!d.locked)for(var i=0;i<d.dependencies.length;++i)d.dependencies[i]===t&&d.setters[i](n)}return t.locked=!1,r},{id:r.name});t.setters=o.setters,t.execute=o.execute;for(var a=0,i=r.normalizedDeps.length;i>a;a++){var l,s=r.normalizedDeps[a],c=v[s],f=y[s];f?l=f.exports:c&&!c.declarative?l=c.esModule:c?(d(c),f=c.module,l=f.exports):l=p(s),f&&f.importers?(f.importers.push(t),t.dependencies.push(f)):t.dependencies.push(null),t.setters[a]&&t.setters[a](l)}}}function i(e){var r,t=v[e];if(t)t.declarative?f(e,[]):t.evaluated||l(t),r=t.module.exports;else if(r=p(e),!r)throw new Error("Unable to load dependency "+e+".");return(!t||t.declarative)&&r&&r.__useDefault?r["default"]:r}function l(r){if(!r.module){var t={},n=r.module={exports:t,id:r.name};if(!r.executingRequire)for(var o=0,a=r.normalizedDeps.length;a>o;o++){var u=r.normalizedDeps[o],d=v[u];d&&l(d)}r.evaluated=!0;var c=r.execute.call(e,function(e){for(var t=0,n=r.deps.length;n>t;t++)if(r.deps[t]==e)return i(r.normalizedDeps[t]);throw new TypeError("Module "+e+" not declared as a dependency.")},t,n);c&&(n.exports=c),t=n.exports,t&&t.__esModule?r.esModule=t:r.esModule=s(t)}}function s(r){var t={};if(("object"==typeof r||"function"==typeof r)&&r!==e)if(m)for(var n in r)"default"!==n&&c(t,r,n);else{var o=r&&r.hasOwnProperty;for(var n in r)"default"===n||o&&!r.hasOwnProperty(n)||(t[n]=r[n])}return t["default"]=r,x(t,"__useDefault",{value:!0}),t}function c(e,r,t){try{var n;(n=Object.getOwnPropertyDescriptor(r,t))&&x(e,t,n)}catch(o){return e[t]=r[t],!1}}function f(r,t){var n=v[r];if(n&&!n.evaluated&&n.declarative){t.push(r);for(var o=0,a=n.normalizedDeps.length;a>o;o++){var u=n.normalizedDeps[o];-1==g.call(t,u)&&(v[u]?f(u,t):p(u))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}function p(e){if(I[e])return I[e];if("@node/"==e.substr(0,6))return I[e]=s(D(e.substr(6)));var r=v[e];if(!r)throw"Module "+e+" not present.";return a(e),f(e,[]),v[e]=void 0,r.declarative&&x(r.module.exports,"__esModule",{value:!0}),I[e]=r.declarative?r.module.exports:r.esModule}var v={},g=Array.prototype.indexOf||function(e){for(var r=0,t=this.length;t>r;r++)if(this[r]===e)return r;return-1},m=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(h){m=!1}var x;!function(){try{Object.defineProperty({},"a",{})&&(x=Object.defineProperty)}catch(e){x=function(e,r,t){try{e[r]=t.value||t.get.call(e)}catch(n){}}}}();var y={},D="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&require.resolve&&"undefined"!=typeof process&&require,I={"@empty":{}};return function(e,n,o,a){return function(u){u(function(u){for(var d={_nodeRequire:D,register:r,registerDynamic:t,get:p,set:function(e,r){I[e]=r},newModule:function(e){return e}},i=0;i<n.length;i++)(function(e,r){r&&r.__esModule?I[e]=r:I[e]=s(r)})(n[i],arguments[i]);a(d);var l=p(e[0]);if(e.length>1)for(var i=1;i<e.length;i++)p(e[i]);return o?l["default"]:l})}}}("undefined"!=typeof self?self:global)

(["1"], [], false, function($__System) {
var require = this.require, exports = this.exports, module = this.module;
$__System.registerDynamic("2", [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = "<div class=\"interactive-container\" id='g-explore-middletown'>\n  <div class='header full-width-section'>\n    <a class='header__logo' href='https://www.theguardian.com/'>\n      <svg width=\"168\" height=\"32\" viewBox=\"201 10 168 32\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M249.3 37.15c.07-.8.6-1.82 1.96-1.92h4.5c1.33 0 1.96 1.06 1.96 1.92 0 1.7-1.05 2.34-4.36 2.34-2.9 0-4.1-1.2-4.05-2.4zm6.05-14.35c0 3.04-.68 3.47-1.83 3.47-1.16 0-2.1-.43-2.1-3.47 0-3.1.94-4 2.1-4 1.15 0 1.83 1.07 1.83 4zm-3.93 7.47c-.64 0-1.32-.43-1.32-1.02 0-.42.32-.9.74-1.22.84.26 1.57.32 2.62.32 4.1 0 6.94-1.98 6.94-5.55 0-1.6-.7-2.45-1.7-3.4l2.7.73v-3.2l-4.3.86c-1-.4-2.38-.9-3.7-.9-4.1 0-6.92 2.2-6.92 5.7 0 2.2 1.05 3.8 2.62 4.7l.1.1c-.88.6-2.77 2.1-2.77 3.8 0 1.3.78 2.5 2.52 2.9-1.8.4-3.84 1.3-3.84 3.4 0 2.2 3.1 4.3 8.2 4.3 6.2 0 8.7-3.1 8.7-7 0-3.28-1.4-4.8-5-4.8h-5.5zm16.96 4.1c.2 0 .47 0 .68-.05 1.84-.16 3.52-1.07 4.4-2.24v2.2l6.3-.8V32.4l-1.56-1.07v-14.4h-.53l-6.3 1.23v1.44l2.1.9v9.77c-.58.42-1.26.7-2.2.7-1.32 0-2.52-.44-2.52-2.3V16.93h-.53l-6.3 1.34v1.38l2.1.86v8.7c0 2.9 1.15 5.2 4.36 5.2zm72.84-2.98c-1 0-2.1-.6-2.1-2.5 0-1.3 1.26-2.5 2.52-2.7l1.15-.3v4.5s-1 .8-1.6.8zm-1.2-12.3c2.04 0 2.77 1 2.77 3.1V24l-3.2.57c-3.1.6-5.5 1.55-5.5 4.96 0 2.74 1.8 4.66 4.3 4.66 2 0 3.8-.9 4.5-2.4h.1c.2 1.7 1.7 2.3 3.3 2.3 1.23 0 2.5-.3 3-.88v-1l-1.56-.8V22c0-3.73-2.74-5-7-5-2.77 0-4.5.68-6 1.38v4.18h2.5l1.06-3.2c.58-.23 1.2-.23 1.4-.23zM287.1 31.4c-1 0-2.1-.6-2.1-2.47 0-1.28 1.27-2.5 2.53-2.66l1.15-.27v4.53s-1 .86-1.57.86zm-1.2-12.23c2.05 0 2.78 1.07 2.78 3.15v1.87l-3.2.5c-3.1.6-5.46 1.5-5.46 4.9 0 2.7 1.83 4.6 4.35 4.6 2 0 3.88-.9 4.56-2.4h.16c.2 1.8 1.7 2.3 3.3 2.3 1.2 0 2.5-.33 3-.86v-1l-1.6-.8V22c0-3.73-2.8-5-7-5-2.8 0-4.6.68-6 1.38v4.18h2.4l1-3.2c.6-.25 1.2-.25 1.42-.25zm10.13.43l1.58.8v11.15l-1.5.8V34h8.9v-1.65l-2.1-.8v-8.7c1-.74 2.2-1 3.6-1 .5 0 .9.1 1.2.15v-4.8c-.1-.05-.3-.1-.6-.1-1.7 0-3.1 1.17-4.1 3.3v-3.47h-.5L296.1 18v1.6zm22.06-1.8c-.7-.5-1.8-.76-2.7-.76-3.9 0-7.6 2.35-7.6 8.96 0 6.35 3.7 8.37 6.2 8.37 2 0 3.3-.9 4-1.8h.1v1.75h.4l6.2-.75v-1.22l-1.6-.96V10.3h-.57l-6.6 1.07v1.48l1.9.8v4.1zm0 13c-.4.32-.9.6-1.7.6-2.1 0-3.1-1.77-3.1-5.83 0-4.64 1.2-6.18 2.9-6.18.9 0 1.4.3 1.8.7v10.7zm7.3-12.75v1.5l1.6.85v11.15l-1.6.8V34h8.4v-1.65l-1.6-.8V17h-.6l-6.3 1.05zm4.3-7.84c-1.6 0-2.9 1.3-2.9 3 0 1.6 1.2 2.9 2.8 2.9 1.5 0 2.8-1.3 2.8-2.9-.1-1.6-1.4-2.9-2.9-2.9zM350.1 34h8.4v-1.6l-1.57-.8V20.97c.63-.48 1.47-.58 2.26-.58 1.4 0 1.9.4 1.9 2.1v9l-1.6.8V34h8.4v-1.6l-1.6-.8V21.47c0-3.04-1.1-4.43-3.7-4.43-2.2 0-4.3.8-5.7 2.13v-2.24h-.5L350 18.1v1.45l1.72.85v11.2l-1.58.8V34zm-147-4.6c0 3.05 1.47 4.97 4.67 4.97 1.63 0 3.26-.42 4.26-1.22v-2.03c-.42.16-1 .27-1.52.27-1.5 0-2.1-.9-2.1-2.5v-8.8h3.7v-2.7h-3.7v-4l-5.2.8v3.2l-2.2.6v2.1h2.1v9.3zm17.33 4.6v-1.6l-1.57-.8V21.2c.63-.48 1.68-.9 2.52-.9 1.47 0 2.25.85 2.2 2.23v9.07l-1.57.8V34h8.4v-1.6l-1.5-.8V21.47c0-3.04-1.7-4.43-4-4.43-2.1 0-4.5.7-5.9 2.03V10h-.5l-6.3 1.07v1.6l2.1.8V31.6l-1.6.8V34h7.9zm24.16-8c0-6.93-2.7-9-6.9-9-4.8 0-7.9 3.3-7.9 8.73 0 5.6 2.9 8.64 8.3 8.64 2.9 0 5.1-1.44 5.9-2.5v-1.6c-1.1.37-2.1.64-4.1.64-3 0-4.9-1.7-4.9-4.9h9.4zm-4.9-2.03l-4.4.38c0-4.22.9-5.5 2.4-5.5 1.3 0 2 .96 2 5.12z\" fill=\"#FFF\" fill-rule=\"evenodd\"/></svg>\n    </a>\n  </div>\n  <div class='middletown full-width-section'>\n    <div class='middletown__logo'>\n      <svg width=\"242\" height=\"61\" viewBox=\"9 73 242 61\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" fill-rule=\"evenodd\"><path d=\"M102.37 106.2c1.4 0 2.48-.33 3.04-.7v-2.22c-.3.1-.7.16-1.1.16-1 0-1.5-.33-1.5-1.44v-6.08h2.6v-2.57h-2.5V90.4h-3.4l-.5 2.93-1.7.63v1.96h1.4v6.8c0 2.65 1.5 3.48 4 3.48zm3.87-.26h6.67v-2.15l-.9-.3v-6.9c.5-.2 1-.4 1.6-.4 1 0 1.5.3 1.5 1.3v5.8l-1 .2v2.1h6.6v-2.2l-1.2-.4v-7c0-2.3-1.3-3.1-3.2-3.1-1.7 0-2.8.6-4 1.5h-.1v-6.1l-.4-.2-5.3.5V91l1.4.37v12.1l-1.3.32v2.1zm21.7.3c2.4 0 3.88-.63 4.77-1.24v-2.3c-.8.3-1.9.6-3.6.6-2 0-3.1-.8-3.4-3h7.6c0-5.28-1.8-7.2-5.7-7.2-3.8 0-6.4 2.4-6.4 6.52 0 4.24 2.4 6.63 6.8 6.63zm-2.25-7.94c.1-2.1.8-2.7 1.8-2.7.9 0 1.6.6 1.6 2.56l-3.5.14zm17.1 7.64h4.1l3.8-10.1 1-.35v-2.2h-5.3v2.1l1.1.2-2 5.9h-.1l-2-6 1-.3v-2.1H138v2.1l1.03.3 3.84 10.1zm9.4 0h6.9v-2.15l-1.3-.4V93.3l-.4-.17-5.4.6v2.2l1.4.38v7.3l-1.4.4v2.2zm3.4-13.6c1.3 0 2.3-.8 2.3-2.13 0-1.2-1.1-2-2.4-2-1.3 0-2.4.8-2.4 2.1s1.1 2.1 2.4 2.1zm10.9 13.9c2.4 0 3.9-.63 4.8-1.24v-2.3c-.9.3-2 .6-3.6.6-2 0-3.2-.8-3.4-3h7.6c0-5.28-1.9-7.2-5.7-7.2-3.9 0-6.4 2.4-6.4 6.52 0 4.24 2.3 6.63 6.7 6.63zm-2.3-7.94c.1-2.1.8-2.7 1.8-2.7.9 0 1.6.6 1.6 2.56l-3.5.14zm12.1 7.64h3.7l2.1-7.1 2 7.1h3.7l3-10.1.9-.35v-2.2h-5v2.1l1 .3-1.3 5.1h-.1l-2.3-7.6h-3l-2.2 7.5h-.1l-1.38-5.1 1.07-.3v-2.1h-6.3v2.1l.9.3 3 10.1zm20.3 0h7.3v-2.15l-1.7-.4v-7.5h2.3v-2.6h-2.3v-.6c0-1.3.5-1.6 1.6-1.6.6 0 1 0 1.4.1v-2.6c-.5-.2-1.4-.5-2.7-.5-2.4 0-4.6 1-4.6 4v1.1l-1.4.5v1.9h1.4v7.5l-1.4.3v2.1zm8.5 0h7.4v-2.15l-1.8-.4v-6.1c.7-.4 1.5-.5 2.6-.5.4 0 .9 0 1.1.1v-3.8c-.1-.1-.4-.1-.6-.1-1.5 0-2.5.9-3.2 2h-.1v-1.8l-.4-.2-5.2.6v2.2l1.4.3v7.2l-1.4.3v2.1zm16.6.3c3.6 0 6.5-2.35 6.5-6.67 0-4.12-2.3-6.48-6.6-6.48-3.6 0-6.5 2.3-6.5 6.6 0 4 2.3 6.5 6.5 6.5zm0-2.6c-1.2 0-2-.8-2-4.07 0-3.18.8-3.9 1.9-3.9 1.2 0 2 .82 2 4.07 0 3.1-.8 3.9-1.9 3.9zm7.2 2.3h6.6v-2.15l-1-.3v-6.9c.5-.2.8-.4 1.5-.4.9 0 1.4.3 1.4 1.4v5.7l-1 .2v2.1h6.2v-2.1l-1-.3V97c0-.2 0-.44-.1-.54.5-.2 1-.34 1.5-.34 1 0 1.4.38 1.4 1.46v5.74l-.9.26v2.15h6.5v-2.1l-1.26-.36v-7.2c0-2.2-1.4-3.14-3.2-3.14-1.7 0-3.1.7-4.18 1.6h-.1c-.5-1.1-1.6-1.6-2.9-1.6-1.8 0-2.9.6-4 1.47h-.2v-1.3l-.38-.17-5.2.54v2.2l1.45.37v7.26l-1.35.35v2.2zM97 130.6h6.65v-2.16l-1-.26v-6.86c.5-.2.82-.33 1.5-.33.92 0 1.34.3 1.34 1.4v5.7l-1 .2v2.1h6.3v-2.2l-.9-.2v-6.9c.5-.2.9-.4 1.5-.4 1 0 1.4.3 1.4 1.4v5.8l-1 .2v2.1h6.5V128l-1.3-.3v-7.2c0-2.25-1.4-3.2-3.3-3.2-1.8 0-3.1.7-4.2 1.6h-.1c-.5-1.1-1.6-1.6-2.9-1.6-1.8 0-2.9.6-4 1.5h-.18v-1.3l-.4-.15-5.2.6v2.2l1.4.37v7.3l-1.36.33v2.15zm21.95 0h6.9v-2.16l-1.3-.33V118l-.4-.17-5.4.54v2.2l1.5.38v7.26l-1.3.4v2.2zm3.33-13.62c1.3 0 2.37-.8 2.37-2.12 0-1.3-1.05-2.1-2.37-2.1-1.3 0-2.4.8-2.4 2.1 0 1.32 1.1 2.12 2.4 2.12zm9.2 13.9c1.6 0 2.9-.58 3.54-1.45h.12v1.23l.4.16 4.9-.56v-2.15l-1.36-.3v-14.7l-.4-.1-5.4.6v2.2l1.5.4v2.1c-.53-.2-1.07-.4-2.04-.4-3.44 0-6.1 1.8-6.1 6.9 0 4.8 2.52 6.3 4.9 6.3zm1.67-3.03c-1.3 0-2.04-.92-2.04-3.7 0-3.06.9-3.8 2.2-3.8.8 0 1.1.22 1.5.45v6.65c-.4.2-.9.4-1.5.4zm13 3.02c1.6 0 2.88-.57 3.54-1.44h.1v1.23l.3.16 4.8-.56v-2.15l-1.4-.3v-14.7l-.4-.1-5.4.6v2.2l1.5.4v2.1c-.6-.2-1.1-.4-2.1-.4-3.4 0-6.1 1.8-6.1 6.9 0 4.8 2.5 6.3 4.9 6.3zm1.68-3.02c-1.3 0-2.07-.92-2.07-3.7 0-3.06.86-3.8 2.2-3.8.74 0 1.1.22 1.43.45v6.65c-.4.2-.9.4-1.6.4zm7.9 2.74h7.1v-2.2l-1.4-.4v-15l-.36-.2-5.5.5v2.1l1.5.4V128l-1.4.36v2.17zm14.4.3c2.4 0 3.9-.7 4.8-1.3v-2.3c-.9.3-1.97.6-3.6.6-2 0-3.18-.8-3.4-3h7.6c0-5.3-1.86-7.2-5.7-7.2s-6.4 2.4-6.4 6.5c0 4.2 2.3 6.6 6.7 6.6zm-2.24-8c.1-2.1.8-2.7 1.8-2.7.9 0 1.6.6 1.6 2.5l-3.5.1zm13.6 7.9c1.4 0 2.5-.4 3-.7v-2.3c-.4.1-.8.1-1.2.1-1.1 0-1.6-.4-1.6-1.5v-6.1h2.6V118H182v-2.95h-3.4l-.52 2.92-1.76.64v2h1.3v6.8c0 2.7 1.43 3.5 3.96 3.5zm10.4 0c3.6 0 6.5-2.4 6.5-6.7 0-4.2-2.3-6.5-6.5-6.5-3.7 0-6.5 2.3-6.5 6.6 0 3.9 2.3 6.5 6.5 6.5zm0-2.6c-1.2 0-2-.8-2-4.1 0-3.2.7-3.9 1.9-3.9s2 .8 2 4c0 3.1-.8 3.9-1.9 3.9zm10.9 2.3h3.8l2.1-7.1h.1l2.1 7.1h3.7l3-10.2 1-.4v-2h-5.2v2.1l.9.3-1.3 5.1h-.1l-2.2-7.5h-3l-2.2 7.5h-.1l-1.3-5.1 1-.3v-2H199v2.1l.96.3 3.02 10.1zm16.2 0h6.7v-2.2l-1-.3v-6.9c.5-.2 1-.3 1.6-.3 1 0 1.5.3 1.5 1.3v5.8l-1 .2v2.1h6.5V128l-1.3-.3v-7.27c0-2.24-1.4-3.1-3.3-3.1-1.8 0-3 .6-4.2 1.52h-.2v-1.36l-.34-.2-5.2.5v2.2l1.4.3v7.3l-1.35.3v2.1zM100.7 83.8c1.3 0 2.13-.35 2.6-.7v-1.2c-.47.14-1.05.3-1.95.3-1.1 0-1.72-.43-1.85-1.63h4.1c0-2.88-1-3.93-3.1-3.93S97 77.94 97 80.2c0 2.32 1.28 3.62 3.68 3.62zm-1.2-4.34c.07-1.14.47-1.46 1-1.46.5 0 .87.33.87 1.4l-1.88.07zm4.55 4.17h3.85v-1.17l-.8-.18v-8.2l-.2-.1-2.98.3v1.18l.82.2v6.6l-.77.12v1.17zm7.9.17c1.3 0 2.1-.34 2.6-.7v-1.2c-.5.14-1.07.3-1.97.3-1.1 0-1.72-.43-1.85-1.63h4.14c0-2.88-1-3.93-3.1-3.93s-3.5 1.3-3.5 3.56c0 2.32 1.26 3.62 3.67 3.62zm-1.23-4.33c.1-1.14.5-1.46 1-1.46s.9.4.9 1.4l-1.83.1zm8.2 4.34c1.2 0 2-.3 2.4-.6v-1.3c-.3.2-.9.3-1.6.3-1.2 0-1.82-.5-1.82-2.1 0-1.5.45-2 1.2-2 .3 0 .43.1.53.1l.18 1h1.5V77c-.4-.13-1.2-.26-2.1-.26-2.3 0-3.8 1.1-3.8 3.63 0 2.2 1.2 3.56 3.6 3.56zm5.8 0c.76 0 1.36-.2 1.66-.4v-1.2l-.62.1c-.55 0-.82-.1-.82-.7v-3.4h1.4v-1.4h-1.4v-1.6H123l-.3 1.6-.95.4v1.1h.74V82c0 1.46.7 1.9 2.1 1.9zm2.1-.2h3.8v-1.2l-.7-.1v-5.6l-.2-.1-2.95.3v1.2l.8.2v4l-.72.2v1.2zm1.87-7.4c.7 0 1.3-.4 1.3-1.2 0-.7-.6-1.1-1.3-1.1-.7 0-1.3.5-1.3 1.2s.6 1.2 1.3 1.2zm5.8 7.6c1.9 0 3.5-1.3 3.5-3.6 0-2.2-1.3-3.5-3.6-3.5-2 0-3.6 1.3-3.6 3.7 0 2.2 1.2 3.6 3.5 3.6zm0-1.4c-.7 0-1.1-.4-1.1-2.2 0-1.7.4-2.1 1.1-2.1.6 0 1.1.5 1.1 2.3 0 1.7-.4 2.2-1.1 2.2zm3.9 1.3h3.6v-1.2l-.6-.1v-3.7c.3-.1.5-.1.8-.1.5 0 .8.2.8.7v3.2l-.6.1v1.2h3.6v-1.1l-.7-.2v-4c0-1.2-.7-1.7-1.8-1.7-1 0-1.6.4-2.3.9h-.1v-.8l-.2-.1-2.8.3v1.2l.7.2v3.9l-.8.2v1.2zm10.4 0h6.2l.2-2.6h-1.4l-.4.9h-2.2l1.1-.8c1.6-1.1 2.6-2.2 2.6-3.7 0-1.7-1.1-2.7-3.1-2.7-1.2 0-2.3.4-2.9.8V77c.5-.2 1.3-.3 1.9-.3 1 0 1.4.4 1.4 1.27 0 .9-.6 1.6-1.6 2.54l-2.1 2v1.4zm11 .2c2.1 0 3.9-1.4 3.9-4.6 0-3.1-1.7-4.5-3.9-4.5-2.1 0-4 1.4-4 4.7 0 3.2 1.7 4.6 3.9 4.6zm0-1.5c-.9 0-1.3-.8-1.3-3.2 0-2.1.4-3 1.2-3 .9 0 1.2.8 1.2 3.2 0 2.2-.4 3-1.3 3zm4.6 1.4h4.8v-1.2l-1.2-.2v-7.6h-1.3l-2.6 1.3v1.2l1.2-.1v5.2l-1.2.2v1.3zm9.2.2c2.4 0 3.6-1.5 3.6-3.1s-1-2.7-2.9-2.7c-.7 0-1.4.3-1.9.5.1-1.7 1.1-2.1 2.3-2.1.6 0 1.3.1 1.7.2v-1.4c-.5-.3-1.3-.5-2.4-.5-2.3 0-4.4 1.5-4.4 4.9 0 2.6 1.3 4.3 3.8 4.3zm0-1.5c-.8 0-1.2-.6-1.2-2.2V80c.2-.1.6-.2 1-.2.7 0 1 .3 1 1.3 0 1.03-.3 1.5-1 1.5z\" fill=\"#FFF\"/><path d=\"M66.52 107h15.7v-4.75h-15.7V107zm-54.3 0h14.65v-4.75H12.2V107zm-1.28-26.1h68.28v-4.75H10.94v4.74zm-.16 43.5h16.1v-4.74h-16.1v4.74zm55.74 0h12.54v-4.74H66.52v4.74zm-52.74 8.7h70v-4.74h-70v4.74zm6.6-17.4h6.5v-4.74h-6.5v4.74zm46.14 0H85.4v-4.74H66.5v4.74zM14.38 89.6h12.5v-4.75h-12.5v4.74zm52.14 0H84.4v-4.75H66.5v4.74zM9 98.3h17.87v-4.75H9v4.74zm57.52 0h10.76v-4.75H66.52v4.74z\" fill=\"#F6F6F6\"/></g></svg>\n    </div>\n    <div class='middletown__intro'>\n      <p>Ahead of this presidential election, I want to get beyond the polls, made-for-TV rallies and 24-hour punditry and look at the themes and issues motivating voters.</p>\n      <p class='by-line'>Gary Younge</p>\n    </div>\n  </div>\n  <div class='what'>\n    <div class='what__headline full-width-section'><span>What is the view from\u2028 Middletown?</span></div>\n    <div class='what__video full-width-section'>\n      <div class='cover' style='background-image:url(\"https://uploads.guim.co.uk/2016/10/09/gary-video-cover.jpg\")' data-link-name='middletown series page : video play'>\n        <div class='play-button'>\n          <span class='play-button__icon'><svg width=\"20\" height=\"17\" viewBox=\"14 16 20 17\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"#333\" fill-rule=\"evenodd\" d=\"M34 24.97v-.88L14.7 16l-.7.56V32.5l.7.5\"/></svg></span>\n          <span class='play-button__duration'>1:46</span>\n        </div>\n      </div>\n      <iframe class='embed' data-src=\"https://www.youtube.com/embed/Y2s0ZKZZ0vc?autoplay=1&modestbranding=1&rel=0&showinfo=0\" frameborder=\"0\" allowfullscreen></iframe>\n    </div>\n    <div class='what__text'>\n      <p>I’ll be reporting from the mid-western town of Muncie, Indiana to try and understand not only who will win this election, but why. What can we learn about the electorate’s view of politics and politicians?</p>\n      <h5>Why Muncie?</h5>\n      <p>Usually when journalists cover elections they swoop into towns and then leave. We wanted to stay a while. I chose Muncie for two reasons. First, it sits in Delaware County which voted for both Donald Trump and Bernie Sanders in the primaries. Second, because in the 1920's Muncie was the focus of an extensive sociological study into middle America called Middletown. Find out more in chapter two.</p>\n      <h5>How to follow this series</h5>\n      <p>We will publish new chapters twice a week – on Tuesdays and Thursdays – until the election on November 8, and then one long, in-depth concluding article afterwards. You can find new content by bookmarking this page, using the timeline in articles, following me on social media, or signing up for email alerts when there are new chapters to read.</p>\n      <h5>Participate in this project</h5>\n      <p>This project is part of an experiment in collaborative reporting. I hope that readers will help shape this series, guide my coverage, and contribute experience and knowledge – whether you are in Muncie or living in Middletowns around the globe.</p>\n      <h5>Support this journalism</h5>\n      <p>Producing in-depth, thoughtful, well-reported journalism is expensive – but supporting us isn’t. If you value and enjoy this approach to covering politics, please <a href='https://contribute.theguardian.com/' data-link-name='middletown series page : contribution link'>help to fund our journalism through either a one-off or regular contribution</a>.</p>\n      <h5>Contacts</h5>\n      <p>Email: gary.younge@theguardian.com<br>\n      Twitter: @garyyounge<br>\n      Instagram: Caroline/Eleni to provide/Gary to chat to Caroline<br>\n      Facebook: Caroline/Ross/Mike to provide</p>\n      <div class='newsletter'>\n        <h5>Coming on Thursday 13 November</h5>\n        <p>Gary will ipsum aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>\n        <form>\n          <label for='email'>Would you like an email reminder when articles come out?</label>\n          <input type='email' placeholder='Your email' name='email' id='email'>\n          <input type='button' value='Sign up' data-link-name='middletown : newsletter sign up'>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n";
  return module.exports;
});
$__System.register('1', ['2'], function (_export) {
  // import reqwest from 'reqwest'

  // import share from './lib/share'
  // import template from './text/template.html!text'
  // import handlebars from 'handlebars'

  // var shareFn = share('Interactive title', 'http://gu.com/p/URL', '#Interactive');
  'use strict';

  var mainHTML, el, data;

  _export('init', init);

  function init(dom, context, config, mediator) {
    el = dom;
    el.innerHTML = mainHTML.replace(/%assetPath%/g, config.assetPath);

    // play video on click
    document.querySelector('.what__video .cover').onclick = function () {
      document.querySelector('.what__video').classList.add('will-play');
      var embed = document.querySelector('.what__video .embed');
      embed.setAttribute('src', embed.getAttribute('data-src'));
    };

    var middletown = document.getElementById('g-explore-middletown');
    if (getParameterByName('mode')) {
      middletown.setAttribute('data-component', 'middletown series page : ' + getParameterByName('mode'));
    } else {
      middletown.setAttribute('data-component', 'middletown series page : separate page');
    }
  }

  function getParameterByName(name) {
    var url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }
  return {
    setters: [function (_) {
      mainHTML = _['default'];
    }],
    execute: function () {}
  };
});
})
(function(factory) {
  define([], factory);
});
//# sourceMappingURL=main.js.map