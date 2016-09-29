!function(e){function r(e,r,o){return 4===arguments.length?t.apply(this,arguments):void n(e,{declarative:!0,deps:r,declare:o})}function t(e,r,t,o){n(e,{declarative:!1,deps:r,executingRequire:t,execute:o})}function n(e,r){r.name=e,e in v||(v[e]=r),r.normalizedDeps=r.deps}function o(e,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==g.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var t=0,n=e.normalizedDeps.length;n>t;t++){var a=e.normalizedDeps[t],u=v[a];if(u&&!u.evaluated){var d=e.groupIndex+(u.declarative!=e.declarative);if(void 0===u.groupIndex||u.groupIndex<d){if(void 0!==u.groupIndex&&(r[u.groupIndex].splice(g.call(r[u.groupIndex],u),1),0==r[u.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");u.groupIndex=d}o(u,r)}}}}function a(e){var r=v[e];r.groupIndex=0;var t=[];o(r,t);for(var n=!!r.declarative==t.length%2,a=t.length-1;a>=0;a--){for(var u=t[a],i=0;i<u.length;i++){var s=u[i];n?d(s):l(s)}n=!n}}function u(e){return y[e]||(y[e]={name:e,dependencies:[],exports:{},importers:[]})}function d(r){if(!r.module){var t=r.module=u(r.name),n=r.module.exports,o=r.declare.call(e,function(e,r){if(t.locked=!0,"object"==typeof e)for(var o in e)n[o]=e[o];else n[e]=r;for(var a=0,u=t.importers.length;u>a;a++){var d=t.importers[a];if(!d.locked)for(var i=0;i<d.dependencies.length;++i)d.dependencies[i]===t&&d.setters[i](n)}return t.locked=!1,r},{id:r.name});t.setters=o.setters,t.execute=o.execute;for(var a=0,i=r.normalizedDeps.length;i>a;a++){var l,s=r.normalizedDeps[a],c=v[s],f=y[s];f?l=f.exports:c&&!c.declarative?l=c.esModule:c?(d(c),f=c.module,l=f.exports):l=p(s),f&&f.importers?(f.importers.push(t),t.dependencies.push(f)):t.dependencies.push(null),t.setters[a]&&t.setters[a](l)}}}function i(e){var r,t=v[e];if(t)t.declarative?f(e,[]):t.evaluated||l(t),r=t.module.exports;else if(r=p(e),!r)throw new Error("Unable to load dependency "+e+".");return(!t||t.declarative)&&r&&r.__useDefault?r["default"]:r}function l(r){if(!r.module){var t={},n=r.module={exports:t,id:r.name};if(!r.executingRequire)for(var o=0,a=r.normalizedDeps.length;a>o;o++){var u=r.normalizedDeps[o],d=v[u];d&&l(d)}r.evaluated=!0;var c=r.execute.call(e,function(e){for(var t=0,n=r.deps.length;n>t;t++)if(r.deps[t]==e)return i(r.normalizedDeps[t]);throw new TypeError("Module "+e+" not declared as a dependency.")},t,n);c&&(n.exports=c),t=n.exports,t&&t.__esModule?r.esModule=t:r.esModule=s(t)}}function s(r){var t={};if(("object"==typeof r||"function"==typeof r)&&r!==e)if(m)for(var n in r)"default"!==n&&c(t,r,n);else{var o=r&&r.hasOwnProperty;for(var n in r)"default"===n||o&&!r.hasOwnProperty(n)||(t[n]=r[n])}return t["default"]=r,x(t,"__useDefault",{value:!0}),t}function c(e,r,t){try{var n;(n=Object.getOwnPropertyDescriptor(r,t))&&x(e,t,n)}catch(o){return e[t]=r[t],!1}}function f(r,t){var n=v[r];if(n&&!n.evaluated&&n.declarative){t.push(r);for(var o=0,a=n.normalizedDeps.length;a>o;o++){var u=n.normalizedDeps[o];-1==g.call(t,u)&&(v[u]?f(u,t):p(u))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}function p(e){if(I[e])return I[e];if("@node/"==e.substr(0,6))return I[e]=s(D(e.substr(6)));var r=v[e];if(!r)throw"Module "+e+" not present.";return a(e),f(e,[]),v[e]=void 0,r.declarative&&x(r.module.exports,"__esModule",{value:!0}),I[e]=r.declarative?r.module.exports:r.esModule}var v={},g=Array.prototype.indexOf||function(e){for(var r=0,t=this.length;t>r;r++)if(this[r]===e)return r;return-1},m=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(h){m=!1}var x;!function(){try{Object.defineProperty({},"a",{})&&(x=Object.defineProperty)}catch(e){x=function(e,r,t){try{e[r]=t.value||t.get.call(e)}catch(n){}}}}();var y={},D="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&require.resolve&&"undefined"!=typeof process&&require,I={"@empty":{}};return function(e,n,o,a){return function(u){u(function(u){for(var d={_nodeRequire:D,register:r,registerDynamic:t,get:p,set:function(e,r){I[e]=r},newModule:function(e){return e}},i=0;i<n.length;i++)(function(e,r){r&&r.__esModule?I[e]=r:I[e]=s(r)})(n[i],arguments[i]);a(d);var l=p(e[0]);if(e.length>1)for(var i=1;i<e.length;i++)p(e[i]);return o?l["default"]:l})}}}("undefined"!=typeof self?self:global)

(["1"], [], false, function($__System) {
var require = this.require, exports = this.exports, module = this.module;
!function(e){function n(e,n){e=e.replace(l,"");var r=e.match(u),t=(r[1].split(",")[n]||"require").replace(s,""),i=p[t]||(p[t]=new RegExp(a+t+f,"g"));i.lastIndex=0;for(var o,c=[];o=i.exec(e);)c.push(o[2]||o[3]);return c}function r(e,n,t,o){if("object"==typeof e&&!(e instanceof Array))return r.apply(null,Array.prototype.splice.call(arguments,1,arguments.length-1));if("string"==typeof e&&"function"==typeof n&&(e=[e]),!(e instanceof Array)){if("string"==typeof e){var l=i.get(e);return l.__useDefault?l["default"]:l}throw new TypeError("Invalid require")}for(var a=[],f=0;f<e.length;f++)a.push(i["import"](e[f],o));Promise.all(a).then(function(e){n&&n.apply(null,e)},t)}function t(t,l,a){"string"!=typeof t&&(a=l,l=t,t=null),l instanceof Array||(a=l,l=["require","exports","module"].splice(0,a.length)),"function"!=typeof a&&(a=function(e){return function(){return e}}(a)),void 0===l[l.length-1]&&l.pop();var f,u,s;-1!=(f=o.call(l,"require"))&&(l.splice(f,1),t||(l=l.concat(n(a.toString(),f)))),-1!=(u=o.call(l,"exports"))&&l.splice(u,1),-1!=(s=o.call(l,"module"))&&l.splice(s,1);var p={name:t,deps:l,execute:function(n,t,o){for(var p=[],c=0;c<l.length;c++)p.push(n(l[c]));o.uri=o.id,o.config=function(){},-1!=s&&p.splice(s,0,o),-1!=u&&p.splice(u,0,t),-1!=f&&p.splice(f,0,function(e,t,l){return"string"==typeof e&&"function"!=typeof t?n(e):r.call(i,e,t,l,o.id)});var d=a.apply(-1==u?e:t,p);return"undefined"==typeof d&&o&&(d=o.exports),"undefined"!=typeof d?d:void 0}};if(t)c.anonDefine||c.isBundle?c.anonDefine&&c.anonDefine.name&&(c.anonDefine=null):c.anonDefine=p,c.isBundle=!0,i.registerDynamic(p.name,p.deps,!1,p.execute);else{if(c.anonDefine&&!c.anonDefine.name)throw new Error("Multiple anonymous defines in module "+t);c.anonDefine=p}}var i=$__System,o=Array.prototype.indexOf||function(e){for(var n=0,r=this.length;r>n;n++)if(this[n]===e)return n;return-1},l=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,a="(?:^|[^$_a-zA-Z\\xA0-\\uFFFF.])",f="\\s*\\(\\s*(\"([^\"]+)\"|'([^']+)')\\s*\\)",u=/\(([^\)]*)\)/,s=/^\s+|\s+$/g,p={};t.amd={};var c={isBundle:!1,anonDefine:null};i.amdDefine=t,i.amdRequire=r}("undefined"!=typeof self?self:global);
(function() {
var define = $__System.amdDefine;
!function(name, context, definition) {
  if (typeof module != 'undefined' && module.exports)
    module.exports = definition();
  else if (typeof define == 'function' && define.amd)
    define("2", [], definition);
  else
    context[name] = definition();
}('reqwest', this, function() {
  var win = window,
      doc = document,
      httpsRe = /^http/,
      protocolRe = /(^\w+):\/\//,
      twoHundo = /^(20\d|1223)$/,
      byTag = 'getElementsByTagName',
      readyState = 'readyState',
      contentType = 'Content-Type',
      requestedWith = 'X-Requested-With',
      head = doc[byTag]('head')[0],
      uniqid = 0,
      callbackPrefix = 'reqwest_' + (+new Date()),
      lastValue,
      xmlHttpRequest = 'XMLHttpRequest',
      xDomainRequest = 'XDomainRequest',
      noop = function() {},
      isArray = typeof Array.isArray == 'function' ? Array.isArray : function(a) {
        return a instanceof Array;
      },
      defaultHeaders = {
        'contentType': 'application/x-www-form-urlencoded',
        'requestedWith': xmlHttpRequest,
        'accept': {
          '*': 'text/javascript, text/html, application/xml, text/xml, */*',
          'xml': 'application/xml, text/xml',
          'html': 'text/html',
          'text': 'text/plain',
          'json': 'application/json, text/javascript',
          'js': 'application/javascript, text/javascript'
        }
      },
      xhr = function(o) {
        if (o['crossOrigin'] === true) {
          var xhr = win[xmlHttpRequest] ? new XMLHttpRequest() : null;
          if (xhr && 'withCredentials' in xhr) {
            return xhr;
          } else if (win[xDomainRequest]) {
            return new XDomainRequest();
          } else {
            throw new Error('Browser does not support cross-origin requests');
          }
        } else if (win[xmlHttpRequest]) {
          return new XMLHttpRequest();
        } else {
          return new ActiveXObject('Microsoft.XMLHTTP');
        }
      },
      globalSetupOptions = {dataFilter: function(data) {
          return data;
        }};
  function succeed(r) {
    var protocol = protocolRe.exec(r.url);
    protocol = (protocol && protocol[1]) || window.location.protocol;
    return httpsRe.test(protocol) ? twoHundo.test(r.request.status) : !!r.request.response;
  }
  function handleReadyState(r, success, error) {
    return function() {
      if (r._aborted)
        return error(r.request);
      if (r._timedOut)
        return error(r.request, 'Request is aborted: timeout');
      if (r.request && r.request[readyState] == 4) {
        r.request.onreadystatechange = noop;
        if (succeed(r))
          success(r.request);
        else
          error(r.request);
      }
    };
  }
  function setHeaders(http, o) {
    var headers = o['headers'] || {},
        h;
    headers['Accept'] = headers['Accept'] || defaultHeaders['accept'][o['type']] || defaultHeaders['accept']['*'];
    var isAFormData = typeof FormData === 'function' && (o['data'] instanceof FormData);
    if (!o['crossOrigin'] && !headers[requestedWith])
      headers[requestedWith] = defaultHeaders['requestedWith'];
    if (!headers[contentType] && !isAFormData)
      headers[contentType] = o['contentType'] || defaultHeaders['contentType'];
    for (h in headers)
      headers.hasOwnProperty(h) && 'setRequestHeader' in http && http.setRequestHeader(h, headers[h]);
  }
  function setCredentials(http, o) {
    if (typeof o['withCredentials'] !== 'undefined' && typeof http.withCredentials !== 'undefined') {
      http.withCredentials = !!o['withCredentials'];
    }
  }
  function generalCallback(data) {
    lastValue = data;
  }
  function urlappend(url, s) {
    return url + (/\?/.test(url) ? '&' : '?') + s;
  }
  function handleJsonp(o, fn, err, url) {
    var reqId = uniqid++,
        cbkey = o['jsonpCallback'] || 'callback',
        cbval = o['jsonpCallbackName'] || reqwest.getcallbackPrefix(reqId),
        cbreg = new RegExp('((^|\\?|&)' + cbkey + ')=([^&]+)'),
        match = url.match(cbreg),
        script = doc.createElement('script'),
        loaded = 0,
        isIE10 = navigator.userAgent.indexOf('MSIE 10.0') !== -1;
    if (match) {
      if (match[3] === '?') {
        url = url.replace(cbreg, '$1=' + cbval);
      } else {
        cbval = match[3];
      }
    } else {
      url = urlappend(url, cbkey + '=' + cbval);
    }
    win[cbval] = generalCallback;
    script.type = 'text/javascript';
    script.src = url;
    script.async = true;
    if (typeof script.onreadystatechange !== 'undefined' && !isIE10) {
      script.htmlFor = script.id = '_reqwest_' + reqId;
    }
    script.onload = script.onreadystatechange = function() {
      if ((script[readyState] && script[readyState] !== 'complete' && script[readyState] !== 'loaded') || loaded) {
        return false;
      }
      script.onload = script.onreadystatechange = null;
      script.onclick && script.onclick();
      fn(lastValue);
      lastValue = undefined;
      head.removeChild(script);
      loaded = 1;
    };
    head.appendChild(script);
    return {abort: function() {
        script.onload = script.onreadystatechange = null;
        err({}, 'Request is aborted: timeout', {});
        lastValue = undefined;
        head.removeChild(script);
        loaded = 1;
      }};
  }
  function getRequest(fn, err) {
    var o = this.o,
        method = (o['method'] || 'GET').toUpperCase(),
        url = typeof o === 'string' ? o : o['url'],
        data = (o['processData'] !== false && o['data'] && typeof o['data'] !== 'string') ? reqwest.toQueryString(o['data']) : (o['data'] || null),
        http,
        sendWait = false;
    if ((o['type'] == 'jsonp' || method == 'GET') && data) {
      url = urlappend(url, data);
      data = null;
    }
    if (o['type'] == 'jsonp')
      return handleJsonp(o, fn, err, url);
    http = (o.xhr && o.xhr(o)) || xhr(o);
    http.open(method, url, o['async'] === false ? false : true);
    setHeaders(http, o);
    setCredentials(http, o);
    if (win[xDomainRequest] && http instanceof win[xDomainRequest]) {
      http.onload = fn;
      http.onerror = err;
      http.onprogress = function() {};
      sendWait = true;
    } else {
      http.onreadystatechange = handleReadyState(this, fn, err);
    }
    o['before'] && o['before'](http);
    if (sendWait) {
      setTimeout(function() {
        http.send(data);
      }, 200);
    } else {
      http.send(data);
    }
    return http;
  }
  function Reqwest(o, fn) {
    this.o = o;
    this.fn = fn;
    init.apply(this, arguments);
  }
  function setType(header) {
    if (header.match('json'))
      return 'json';
    if (header.match('javascript'))
      return 'js';
    if (header.match('text'))
      return 'html';
    if (header.match('xml'))
      return 'xml';
  }
  function init(o, fn) {
    this.url = typeof o == 'string' ? o : o['url'];
    this.timeout = null;
    this._fulfilled = false;
    this._successHandler = function() {};
    this._fulfillmentHandlers = [];
    this._errorHandlers = [];
    this._completeHandlers = [];
    this._erred = false;
    this._responseArgs = {};
    var self = this;
    fn = fn || function() {};
    if (o['timeout']) {
      this.timeout = setTimeout(function() {
        timedOut();
      }, o['timeout']);
    }
    if (o['success']) {
      this._successHandler = function() {
        o['success'].apply(o, arguments);
      };
    }
    if (o['error']) {
      this._errorHandlers.push(function() {
        o['error'].apply(o, arguments);
      });
    }
    if (o['complete']) {
      this._completeHandlers.push(function() {
        o['complete'].apply(o, arguments);
      });
    }
    function complete(resp) {
      o['timeout'] && clearTimeout(self.timeout);
      self.timeout = null;
      while (self._completeHandlers.length > 0) {
        self._completeHandlers.shift()(resp);
      }
    }
    function success(resp) {
      var type = o['type'] || resp && setType(resp.getResponseHeader('Content-Type'));
      resp = (type !== 'jsonp') ? self.request : resp;
      var filteredResponse = globalSetupOptions.dataFilter(resp.responseText, type),
          r = filteredResponse;
      try {
        resp.responseText = r;
      } catch (e) {}
      if (r) {
        switch (type) {
          case 'json':
            try {
              resp = win.JSON ? win.JSON.parse(r) : eval('(' + r + ')');
            } catch (err) {
              return error(resp, 'Could not parse JSON in response', err);
            }
            break;
          case 'js':
            resp = eval(r);
            break;
          case 'html':
            resp = r;
            break;
          case 'xml':
            resp = resp.responseXML && resp.responseXML.parseError && resp.responseXML.parseError.errorCode && resp.responseXML.parseError.reason ? null : resp.responseXML;
            break;
        }
      }
      self._responseArgs.resp = resp;
      self._fulfilled = true;
      fn(resp);
      self._successHandler(resp);
      while (self._fulfillmentHandlers.length > 0) {
        resp = self._fulfillmentHandlers.shift()(resp);
      }
      complete(resp);
    }
    function timedOut() {
      self._timedOut = true;
      self.request.abort();
    }
    function error(resp, msg, t) {
      resp = self.request;
      self._responseArgs.resp = resp;
      self._responseArgs.msg = msg;
      self._responseArgs.t = t;
      self._erred = true;
      while (self._errorHandlers.length > 0) {
        self._errorHandlers.shift()(resp, msg, t);
      }
      complete(resp);
    }
    this.request = getRequest.call(this, success, error);
  }
  Reqwest.prototype = {
    abort: function() {
      this._aborted = true;
      this.request.abort();
    },
    retry: function() {
      init.call(this, this.o, this.fn);
    },
    then: function(success, fail) {
      success = success || function() {};
      fail = fail || function() {};
      if (this._fulfilled) {
        this._responseArgs.resp = success(this._responseArgs.resp);
      } else if (this._erred) {
        fail(this._responseArgs.resp, this._responseArgs.msg, this._responseArgs.t);
      } else {
        this._fulfillmentHandlers.push(success);
        this._errorHandlers.push(fail);
      }
      return this;
    },
    always: function(fn) {
      if (this._fulfilled || this._erred) {
        fn(this._responseArgs.resp);
      } else {
        this._completeHandlers.push(fn);
      }
      return this;
    },
    fail: function(fn) {
      if (this._erred) {
        fn(this._responseArgs.resp, this._responseArgs.msg, this._responseArgs.t);
      } else {
        this._errorHandlers.push(fn);
      }
      return this;
    },
    'catch': function(fn) {
      return this.fail(fn);
    }
  };
  function reqwest(o, fn) {
    return new Reqwest(o, fn);
  }
  function normalize(s) {
    return s ? s.replace(/\r?\n/g, '\r\n') : '';
  }
  function serial(el, cb) {
    var n = el.name,
        t = el.tagName.toLowerCase(),
        optCb = function(o) {
          if (o && !o['disabled'])
            cb(n, normalize(o['attributes']['value'] && o['attributes']['value']['specified'] ? o['value'] : o['text']));
        },
        ch,
        ra,
        val,
        i;
    if (el.disabled || !n)
      return;
    switch (t) {
      case 'input':
        if (!/reset|button|image|file/i.test(el.type)) {
          ch = /checkbox/i.test(el.type);
          ra = /radio/i.test(el.type);
          val = el.value;
          ;
          (!(ch || ra) || el.checked) && cb(n, normalize(ch && val === '' ? 'on' : val));
        }
        break;
      case 'textarea':
        cb(n, normalize(el.value));
        break;
      case 'select':
        if (el.type.toLowerCase() === 'select-one') {
          optCb(el.selectedIndex >= 0 ? el.options[el.selectedIndex] : null);
        } else {
          for (i = 0; el.length && i < el.length; i++) {
            el.options[i].selected && optCb(el.options[i]);
          }
        }
        break;
    }
  }
  function eachFormElement() {
    var cb = this,
        e,
        i,
        serializeSubtags = function(e, tags) {
          var i,
              j,
              fa;
          for (i = 0; i < tags.length; i++) {
            fa = e[byTag](tags[i]);
            for (j = 0; j < fa.length; j++)
              serial(fa[j], cb);
          }
        };
    for (i = 0; i < arguments.length; i++) {
      e = arguments[i];
      if (/input|select|textarea/i.test(e.tagName))
        serial(e, cb);
      serializeSubtags(e, ['input', 'select', 'textarea']);
    }
  }
  function serializeQueryString() {
    return reqwest.toQueryString(reqwest.serializeArray.apply(null, arguments));
  }
  function serializeHash() {
    var hash = {};
    eachFormElement.apply(function(name, value) {
      if (name in hash) {
        hash[name] && !isArray(hash[name]) && (hash[name] = [hash[name]]);
        hash[name].push(value);
      } else
        hash[name] = value;
    }, arguments);
    return hash;
  }
  reqwest.serializeArray = function() {
    var arr = [];
    eachFormElement.apply(function(name, value) {
      arr.push({
        name: name,
        value: value
      });
    }, arguments);
    return arr;
  };
  reqwest.serialize = function() {
    if (arguments.length === 0)
      return '';
    var opt,
        fn,
        args = Array.prototype.slice.call(arguments, 0);
    opt = args.pop();
    opt && opt.nodeType && args.push(opt) && (opt = null);
    opt && (opt = opt.type);
    if (opt == 'map')
      fn = serializeHash;
    else if (opt == 'array')
      fn = reqwest.serializeArray;
    else
      fn = serializeQueryString;
    return fn.apply(null, args);
  };
  reqwest.toQueryString = function(o, trad) {
    var prefix,
        i,
        traditional = trad || false,
        s = [],
        enc = encodeURIComponent,
        add = function(key, value) {
          value = ('function' === typeof value) ? value() : (value == null ? '' : value);
          s[s.length] = enc(key) + '=' + enc(value);
        };
    if (isArray(o)) {
      for (i = 0; o && i < o.length; i++)
        add(o[i]['name'], o[i]['value']);
    } else {
      for (prefix in o) {
        if (o.hasOwnProperty(prefix))
          buildParams(prefix, o[prefix], traditional, add);
      }
    }
    return s.join('&').replace(/%20/g, '+');
  };
  function buildParams(prefix, obj, traditional, add) {
    var name,
        i,
        v,
        rbracket = /\[\]$/;
    if (isArray(obj)) {
      for (i = 0; obj && i < obj.length; i++) {
        v = obj[i];
        if (traditional || rbracket.test(prefix)) {
          add(prefix, v);
        } else {
          buildParams(prefix + '[' + (typeof v === 'object' ? i : '') + ']', v, traditional, add);
        }
      }
    } else if (obj && obj.toString() === '[object Object]') {
      for (name in obj) {
        buildParams(prefix + '[' + name + ']', obj[name], traditional, add);
      }
    } else {
      add(prefix, obj);
    }
  }
  reqwest.getcallbackPrefix = function() {
    return callbackPrefix;
  };
  reqwest.compat = function(o, fn) {
    if (o) {
      o['type'] && (o['method'] = o['type']) && delete o['type'];
      o['dataType'] && (o['type'] = o['dataType']);
      o['jsonpCallback'] && (o['jsonpCallbackName'] = o['jsonpCallback']) && delete o['jsonpCallback'];
      o['jsonp'] && (o['jsonpCallback'] = o['jsonp']);
    }
    return new Reqwest(o, fn);
  };
  reqwest.ajaxSetup = function(options) {
    options = options || {};
    for (var k in options) {
      globalSetupOptions[k] = options[k];
    }
  };
  return reqwest;
});

})();
(function() {
var define = $__System.amdDefine;
define("3", ["2"], function(main) {
  return main;
});

})();
$__System.registerDynamic("4", [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = "<div class=\"interactive-container\" id='g-independence-10-16'>\n  <div class='top'>\n    <div class='top__copy full-width-wrapper'>\n      <div class='tic sentences'>\n        <div class='sentence sentences__no-investors'>\n          <svg width=\"247\" height=\"33\" viewBox=\"8 8 247 33\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M8.55 40h11.88v-3.82l-1.76-.46V23.5c.88-.3 1.72-.55 2.8-.55 1.82 0 2.66.6 2.66 2.4V35.7l-1.8.46V40h11.7v-3.82l-2.22-.6V22.66c0-4-2.3-5.54-5.8-5.54-3.1 0-5.2 1.1-7.4 2.74h-.2v-2.4l-.6-.3-9.2.98v3.9l2.6.68v12.9l-2.4.58V40zm38.34.55c6.4 0 11.5-4.2 11.5-11.9 0-7.34-4.1-11.54-11.7-11.54-6.5 0-11.6 4.2-11.6 11.9 0 7.1 4.1 11.6 11.6 11.6zm0-4.62c-2.2 0-3.6-1.47-3.6-7.27 0-5.67 1.4-6.97 3.4-6.97 2.1 0 3.5 1.4 3.5 7.2 0 5.5-1.4 7-3.4 7zM67.1 40h12.38v-3.82l-2.26-.6V17.46l-.72-.3-9.62.97v3.9l2.65.68v12.9l-2.44.6V40zm6.04-24.23c2.35 0 4.24-1.43 4.24-3.78 0-2.4-1.9-3.8-4.24-3.8-2.3 0-4.24 1.4-4.24 3.7 0 2.3 1.93 3.7 4.24 3.7zM80.54 40H92.4v-3.82l-1.76-.46V23.5c.88-.3 1.72-.55 2.8-.55 1.82 0 2.66.6 2.66 2.4V35.7l-1.8.46V40H106v-3.82l-2.22-.6V22.66c0-4-2.4-5.54-5.84-5.54-3.1 0-5.25 1.1-7.4 2.74h-.24v-2.4l-.63-.3-9.3.98v3.9l2.57.68v12.9l-2.44.58V40zm34.94 0h7.26l6.8-18.02 1.8-.6v-3.8h-9.44v3.8l2.02.48-3.53 10.58h-.2l-3.5-10.58 1.9-.47v-3.9h-11.9v3.8l1.8.6 7 18.1zm28.85.55c4.3 0 6.93-1.14 8.53-2.23v-4.07c-1.6.5-3.5 1.05-6.43 1.05-3.57 0-5.63-1.43-6.05-5.34h13.53c0-9.4-3.2-12.85-10.1-12.85-6.8 0-11.4 4.3-11.4 11.7 0 7.6 4.1 11.8 12 11.8zm-4-14.16c.26-3.8 1.57-4.8 3.3-4.8 1.63 0 2.84 1 2.84 4.5l-6.13.2zm23.37 14.1c7.44 0 10.55-3.2 10.55-8 0-3.4-1.77-5.7-6.3-6.7l-2.7-.7c-2.26-.6-3.06-1-3.06-2.2 0-1.3 1.3-1.8 2.9-1.8 1.2 0 2 .22 2.5.52l.5 2.2h4.6v-5.8c-1.9-.77-4.7-1.23-7.5-1.23-7 0-10.06 3.13-10.06 7.5 0 3.96 2.2 5.8 6.4 6.8l2.46.6c2 .46 2.7.9 2.7 2.2 0 1.23-1.12 1.95-3 1.95-1.3 0-2.4-.4-2.9-.7l-.8-2.4h-4.75l.4 6.13c2.3.9 5.4 1.4 7.9 1.4zm21.22-.1c2.47 0 4.4-.6 5.4-1.2v-4c-.57.1-1.33.3-2.04.3-1.85 0-2.73-.6-2.73-2.6V22.1h4.53v-4.57h-4.5V12.3h-6.06l-.97 5.2-3.06 1.15v3.5h2.4v12.1c0 4.73 2.5 6.2 7 6.2zm18.64.1c6.42 0 11.6-4.2 11.6-11.9 0-7.4-4.13-11.6-11.65-11.6-6.4 0-11.6 4.1-11.6 11.8 0 7.1 4.2 11.6 11.7 11.6zm.04-4.7c-2.14 0-3.56-1.5-3.56-7.3 0-5.7 1.38-7 3.44-7 2.1 0 3.53 1.4 3.53 7.2 0 5.5-1.3 6.94-3.4 6.94zm12.8 4.1h13.28v-3.8l-3.15-.6V24.7c1.26-.57 2.68-.83 4.74-.83.72 0 1.5.1 1.98.22v-6.8c-.3-.1-.76-.2-1.14-.2-2.5 0-4.4 1.6-5.6 3.6h-.2v-3.3l-.6-.3-9.3.9v4l2.6.7v12.9l-2.4.6V40zm26.3.5c7.47 0 10.58-3.2 10.58-8 0-3.4-1.76-5.6-6.3-6.68l-2.7-.63c-2.26-.57-3.05-1-3.05-2.2 0-1.26 1.3-1.77 2.9-1.77 1.25 0 2 .26 2.56.56l.5 2.24h4.6v-5.8c-1.9-.77-4.7-1.23-7.5-1.23-7 0-10.1 3.18-10.1 7.55 0 3.9 2.2 5.8 6.4 6.8l2.5.6c1.9.4 2.7.9 2.7 2.15s-1.2 2-3 2c-1.3 0-2.4-.36-2.9-.65l-.8-2.45h-4.8l.4 6.15c2.3.93 5.3 1.4 7.9 1.4z\" fill=\"#FFF\" fill-rule=\"evenodd\"/></svg>\n        </div>\n        <div class='sentence sentences__no-agenda transform-top-right'>\n          <svg width=\"204\" height=\"41\" viewBox=\"162 41 204 41\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M162.55 73h11.88v-3.82l-1.76-.46V56.5c.88-.3 1.72-.55 2.8-.55 1.82 0 2.66.6 2.66 2.4V68.7l-1.8.46V73h11.7v-3.82l-2.22-.6V55.66c0-4-2.3-5.54-5.8-5.54-3.1 0-5.2 1.1-7.4 2.74h-.2v-2.4l-.6-.3-9.2.98v3.9l2.6.68v12.9l-2.4.58V73zm38.34.55c6.4 0 11.5-4.2 11.5-11.9 0-7.34-4.1-11.54-11.7-11.54-6.5 0-11.6 4.2-11.6 11.9 0 7.1 4.1 11.6 11.6 11.6zm0-4.62c-2.2 0-3.6-1.47-3.6-7.27 0-5.67 1.4-6.97 3.4-6.97 2.1 0 3.5 1.4 3.5 7.2 0 5.5-1.4 7-3.4 7zm26.7 4.62c2.8 0 4.9-1.22 6-2.65h.2c.6 1.85 2.1 2.6 4.5 2.6 1.8 0 3.7-.54 4.5-1.05V68.8h-.77c-.8 0-1.5-.3-1.5-1.34v-10c0-5-2.55-7.35-8.2-7.35-3.77 0-7.26.8-9.4 1.6v4.5c1.5-.2 3.8-.4 5.76-.4 3.36 0 4.2.9 4.2 3.1V60l-3.9.75c-5.1.93-8.2 2.35-8.2 6.76 0 3.7 2.6 6.2 6.7 6.2zm3.2-4.46c-1.6 0-2.3-.9-2.3-2.8 0-1.8.7-2.7 2.4-2.8l2-.1v4.8c-.4.4-1.3.8-2.2.8zM254 81.5c9.2 0 12.94-3.9 12.94-8.57 0-4.46-3.03-6.14-6.93-6.14h-7.2c-1.1 0-1.5-.6-1.5-1.2 0-.4.2-.9.5-1.3 1 .2 2 .3 3.1.3 6 0 9.9-2.7 9.9-7.6 0-1.2-.4-2.1-1-3l3.1.1v-4.5l-7.2 1c-1.3-.45-2.8-.7-4.7-.7-5.9 0-9.9 2.7-9.9 7.56 0 2.6 1.4 4.53 3.5 5.66-1.8 1.2-3.2 2.93-3.2 4.74 0 1.8.95 3 2.9 3.6v.2c-2.46.7-4.7 2.1-4.7 4.56 0 3 3.5 5.12 10.64 5.12zm.6-4.3c-3 0-4.08-.87-4.08-2.1 0-1.04.54-1.67 1.42-2.04h5.3c1.93 0 2.64.37 2.64 1.6 0 1.4-1.38 2.55-5.3 2.55zm.2-16.24c-1.47 0-2.6-.88-2.6-3.65 0-2.6 1.13-3.5 2.6-3.5 1.5 0 2.7.7 2.7 3.7 0 2.7-1.2 3.5-2.7 3.5zm25.07 12.52c4.28 0 6.92-1.14 8.52-2.23V67.2c-1.6.5-3.5 1.05-6.5 1.05-3.6 0-5.7-1.46-6.1-5.37h13.5c0-9.4-3.3-12.84-10.2-12.84-6.9 0-11.4 4.3-11.4 11.63 0 7.56 4.1 11.8 11.9 11.8zm-4-14.16c.26-3.75 1.56-4.8 3.28-4.8 1.64 0 2.86 1.05 2.86 4.54l-6.1.27zM290.8 73h11.9v-3.82l-1.76-.46V56.5c.88-.3 1.72-.55 2.8-.55 1.82 0 2.66.6 2.66 2.4V68.7l-1.8.46V73h11.7v-3.82l-2.22-.6V55.66c0-4-2.4-5.54-5.84-5.54-3.1 0-5.25 1.1-7.4 2.74h-.24v-2.4l-.63-.3-9.28.98v3.9l2.5.68v12.9l-2.5.58V73zm35.63.5c2.86 0 5.12-1 6.3-2.56h.25v2.2l.67.28 8.66-1V68.6l-2.4-.7V41.85l-.7-.3-9.6.97v3.9l2.7.7v3.65c-.9-.38-1.9-.63-3.6-.63-6.1 0-10.9 3.24-10.9 12.23 0 8.57 4.6 11.17 8.8 11.17zm2.98-5.37c-2.3 0-3.6-1.64-3.6-6.6 0-5.46 1.6-6.76 3.9-6.76 1.4 0 2 .38 2.6.8V67.4c-.7.4-1.6.73-2.8.73zm20.8 5.42c2.8 0 4.9-1.22 6.1-2.65h.3c.7 1.85 2.1 2.6 4.5 2.6 1.9 0 3.8-.54 4.6-1.05V68.8h-.7c-.8 0-1.5-.3-1.5-1.34v-10c0-5-2.6-7.35-8.23-7.35-3.8 0-7.25.8-9.4 1.6v4.5c1.5-.2 3.78-.4 5.76-.4 3.37 0 4.2.9 4.2 3.1V60l-3.9.75c-5.1.93-8.2 2.35-8.2 6.76 0 3.7 2.6 6.2 6.7 6.2zm3.3-4.46c-1.6 0-2.2-.9-2.2-2.8 0-1.8.8-2.7 2.5-2.8l2-.1v4.8c-.4.4-1.22.8-2.2.8z\" fill=\"#FFF\" fill-rule=\"evenodd\"/></svg>\n        </div>\n        <div class='double sentence sentences__no-hidden-influences'>\n          <svg width=\"265\" height=\"68\" viewBox=\"10 75 265 68\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"#FFF\" fill-rule=\"evenodd\"><path d=\"M68.55 107h11.88v-3.82l-1.76-.46V90.5c.88-.3 1.72-.6 2.8-.6 1.82 0 2.66.64 2.66 2.44v10.38l-1.8.46V107h11.7v-3.82l-2.22-.6V89.66c0-4-2.3-5.54-5.8-5.54-3.1 0-5.1 1.1-7.1 2.66h-.2V75.84l-.7-.34-9.4.97v3.9l2.6.67v21.55l-2.4.5v3.9zm26.58 0h12.4v-3.82l-2.28-.6V84.46l-.7-.3-9.63.97v3.9l2.65.68v12.9l-2.44.6v3.8zm6.05-24.23c2.35 0 4.24-1.43 4.24-3.78 0-2.4-1.9-3.8-4.24-3.8-2.3 0-4.24 1.4-4.24 3.7 0 2.3 1.93 3.7 4.24 3.7zm16.42 24.73c2.86 0 5.13-1 6.3-2.56h.25v2.2l.68.28 8.65-1v-3.83l-2.4-.7V75.8l-.7-.3-9.63.97v3.9l2.65.7v3.65c-.97-.38-1.93-.63-3.66-.63-6.1 0-10.87 3.2-10.87 12.2 0 8.5 4.53 11.1 8.73 11.1zm2.98-5.37c-2.35 0-3.65-1.64-3.65-6.6 0-5.46 1.55-6.76 3.9-6.76 1.35 0 1.98.38 2.57.8v11.84c-.72.4-1.64.8-2.82.8zm23.15 5.37c2.85 0 5.12-1 6.3-2.56h.25v2.2l.67.28 8.65-1v-3.83l-2.4-.7V75.8l-.7-.3-9.62.97v3.9l2.64.7v3.65c-.96-.38-1.93-.63-3.65-.63-6.1 0-10.88 3.2-10.88 12.2 0 8.5 4.5 11.1 8.7 11.1zm2.98-5.37c-2.3 0-3.6-1.64-3.6-6.6 0-5.46 1.6-6.76 3.9-6.76 1.4 0 2 .38 2.6.8v11.84c-.7.4-1.6.8-2.8.8zm26.3 5.42c4.3 0 7-1.14 8.5-2.23v-4.07c-1.6.5-3.5 1.05-6.4 1.05-3.5 0-5.6-1.43-6-5.34h13.5c0-9.4-3.2-12.85-10.1-12.85-6.8 0-11.4 4.3-11.4 11.7 0 7.6 4.1 11.8 12 11.8zm-4-14.16c.3-3.8 1.6-4.8 3.3-4.8 1.7 0 2.9 1 2.9 4.5l-6.1.2zm14.9 13.6h11.9v-3.9l-1.7-.5V90.5c.9-.3 1.7-.55 2.8-.55 1.8 0 2.7.6 2.7 2.4v10.37l-1.8.46V107h11.7v-3.82l-2.2-.6V89.66c0-4-2.4-5.54-5.8-5.54-3.1 0-5.2 1.1-7.4 2.74h-.2v-2.4l-.6-.3-9.3.98v3.9l2.6.68v12.9l-2.4.58v3.8z\" fill-opacity=\".2\"/><path d=\"M10.55 107h11.88v-3.82l-1.76-.46V90.5c.88-.3 1.72-.55 2.8-.55 1.82 0 2.66.6 2.66 2.4v10.37l-1.8.46V107h11.7v-3.82l-2.22-.6V89.66c0-4-2.3-5.54-5.8-5.54-3.1 0-5.2 1.1-7.4 2.74h-.2v-2.4l-.6-.3-9.2.98v3.9l2.6.68v12.9l-2.4.58v3.8zm38.34.55c6.4 0 11.5-4.2 11.5-11.9 0-7.34-4.1-11.54-11.7-11.54-6.5 0-11.6 4.2-11.6 11.9 0 7.1 4.1 11.6 11.6 11.6zm0-4.62c-2.2 0-3.6-1.47-3.6-7.27 0-5.67 1.4-6.97 3.4-6.97 2.1 0 3.5 1.4 3.5 7.2 0 5.5-1.4 7-3.4 7zm18.2 39.4h12.4v-3.82l-2.3-.5v-18.2l-.7-.3-9.6 1v3.9l2.6.7V138l-2.5.57v3.83zm6-24.23c2.3 0 4.2-1.43 4.2-3.78 0-2.3-1.9-3.74-4.3-3.74-2.3 0-4.3 1.43-4.3 3.74 0 2.35 1.9 3.78 4.2 3.78zm7.4 24.23h11.9v-3.82l-1.8-.4v-12.2c.8-.3 1.7-.5 2.8-.5 1.8 0 2.6.6 2.6 2.4v10.4l-1.8.5v3.9H106v-3.8l-2.2-.6v-13c0-4-2.4-5.5-5.85-5.5-3.1 0-5.26 1.1-7.4 2.8h-.25V120l-.62-.28-9.28.9v3.9l2.56.7V138l-2.44.6v3.8zm40.4 0h11.8v-3.82l-2.4-.4v-26.9l-.7-.3-5.5 1.1c-1.5-.4-3.8-1-6.2-1-4.6 0-8.7 1.7-8.7 7.1v2.1l-2.5 1v3.5h2.5V138l-2.5.6v3.8h12v-3.8l-1.8-.47v-13.6h3.42v-4.57H117v-1.13c0-2.26.97-2.8 2.98-2.8 1 0 1.77.12 2.56.4v21.64l-1.78.46v3.84zm21.5.5c3.1 0 5.2-1.3 6.7-2.8h.2v2.43l.7.3 9.1-1v-3.84l-2.4-.67v-17.43l-.7-.33-9.3.8v3.8l2.2.7v11.4c-.8.3-1.6.6-3 .6-1.9 0-2.5-.8-2.5-2.7v-14.6l-.7-.3-9.4.8v3.9l2.34.7v11.6c0 3.9 1.85 6.3 6.47 6.3zm30.1.05c4.3 0 6.9-1.13 8.5-2.23v-4.07c-1.6.5-3.5 1.05-6.4 1.05-3.6 0-5.7-1.43-6.1-5.33H182c0-9.4-3.3-12.86-10.18-12.86-6.86 0-11.4 4.3-11.4 11.64 0 7.56 4.12 11.8 12 11.8zm-4-14.15c.2-3.74 1.5-4.8 3.2-4.8 1.6 0 2.8 1.06 2.8 4.54l-6.1.26zm14.9 13.6h11.9v-3.82l-1.8-.4v-12.2c.9-.3 1.7-.5 2.8-.5 1.8 0 2.6.6 2.6 2.4v10.4l-1.8.5v3.9H209v-3.8l-2.2-.6v-13c0-4-2.4-5.5-5.85-5.5-3.1 0-5.25 1.1-7.4 2.8h-.24V120l-.6-.28-9.3.9v3.9l2.6.7V138l-2.4.6v3.8zm38.4.55c3.8 0 6.4-1.1 7.7-2.06v-4.16c-1.2.47-3.1.93-5.3.93-3.8 0-6.1-1.7-6.1-7 0-4.9 1.4-6.7 3.9-6.7 1 0 1.4.1 1.7.3l.6 3h4.9v-7.1c-1.4-.5-4.1-.9-6.9-.9-7.5 0-12.5 3.6-12.5 11.8 0 7.1 3.8 11.6 11.7 11.6zm21.5 0c4.3 0 6.9-1.13 8.5-2.23v-4.07c-1.6.5-3.5 1.05-6.5 1.05-3.6 0-5.7-1.43-6.1-5.33H253c0-9.4-3.3-12.86-10.17-12.86-6.85 0-11.38 4.3-11.38 11.64 0 7.56 4.1 11.8 11.96 11.8zm-4-14.15c.2-3.74 1.5-4.8 3.2-4.8 1.6 0 2.8 1.06 2.8 4.54l-6.1.26zm23.3 14.15c7.5 0 10.6-3.2 10.6-7.94 0-3.4-1.8-5.63-6.3-6.68l-2.7-.63c-2.3-.54-3.1-1-3.1-2.18 0-1.26 1.3-1.76 2.9-1.76 1.3 0 2 .2 2.6.5l.5 2.2h4.7v-5.9c-1.9-.8-4.7-1.2-7.5-1.2-7 0-10 3.1-10 7.5 0 4 2.2 5.8 6.4 6.8l2.4.6c2 .4 2.7.9 2.7 2.2 0 1.2-1.14 1.9-3 1.9-1.3 0-2.38-.4-2.9-.7l-.83-2.5h-4.8l.4 6.1c2.3.9 5.35 1.3 7.9 1.3z\"/></g></svg>\n        </div>\n      </div>\n      <div class='tac sentences'>\n        <div class='sentence sentences__just-open'>\n          <svg width=\"197\" height=\"41\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M4.18 40.32c6.18 0 8.57-2.82 8.57-8.07V9.45l-.7-.3-9.63.97v3.9l2.65.68v17.68c0 2.22-1.05 2.94-3 2.94-.62 0-1.25-.04-1.88-.17v4.45c.9.38 2.2.72 3.9.72zM8.72 7.77c2.35 0 4.24-1.43 4.24-3.78 0-2.4-1.9-3.8-4.24-3.8C6.42.2 4.48 1.7 4.48 4c0 2.34 1.93 3.77 4.24 3.77zm15.2 24.73c3.15 0 5.25-1.3 6.77-2.8h.2v2.43l.6.3 9.15-1.02v-3.8l-2.43-.6V9.5l-.68-.35-9.26.88v3.87l2.22.7v11.5c-.75.3-1.55.63-2.98.63-1.9 0-2.54-.8-2.54-2.64V9.5l-.6-.35-9.4.88v3.87l2.36.7v11.7c0 3.9 1.84 6.2 6.46 6.2zm26.46.05c7.48 0 10.6-3.2 10.6-7.94 0-3.4-1.78-5.6-6.3-6.6l-2.7-.6c-2.27-.52-3.07-1-3.07-2.15 0-1.26 1.4-1.77 2.9-1.77 1.3 0 2.1.25 2.6.55l.5 2.24h4.7v-5.9c-1.8-.76-4.6-1.22-7.4-1.22-6.94 0-10 3.16-10 7.53 0 3.9 2.18 5.8 6.38 6.8l2.5.6c1.96.4 2.7.9 2.7 2.13s-1.16 1.98-3 1.98c-1.3 0-2.4-.37-2.9-.66L46.9 25h-4.8l.4 6.14c2.3.92 5.32 1.4 7.88 1.4zm21.26-.1c2.47 0 4.4-.58 5.4-1.2v-4c-.57.17-1.33.3-2.04.3-1.85 0-2.73-.6-2.73-2.56V14.1h4.53V9.57h-4.53V4.32h-6.05l-.97 5.2-3.06 1.14v3.5h2.3v12.1c0 4.73 2.52 6.2 7.02 6.2zm26 .1c6.42 0 11.6-4.2 11.6-11.9 0-7.34-4.13-11.54-11.65-11.54C91.1 9.1 86 13.3 86 21c0 7.1 4.14 11.6 11.6 11.6zm.04-4.62c-2.15 0-3.57-1.47-3.57-7.27 0-5.67 1.4-6.97 3.5-6.97s3.6 1.4 3.6 7.2c0 5.5-1.35 7-3.4 7zm12.76 12.47h12.86v-3.74l-2.78-.5V32.3c.8.16 1.47.25 3.1.25 6.48 0 11.44-3.45 11.44-12.65 0-8.4-4.08-10.83-8.1-10.83-3.03 0-5.22 1.38-6.48 2.56h-.25V9.45l-.67-.3-9.24.97v3.9l2.52.68v21.42l-2.4.54v3.74zm12.65-12.43c-1.4 0-2.1-.38-2.6-.76v-12c.7-.3 1.6-.6 2.8-.6 2.4 0 3.6 1.6 3.6 6.3 0 5.8-1.5 7.1-3.9 7.1zm25.4 4.58c4.3 0 6.9-1.14 8.5-2.23v-4.07c-1.6.5-3.5 1.05-6.4 1.05-3.6 0-5.7-1.43-6.1-5.34H158c0-9.4-3.25-12.85-10.14-12.85-6.84 0-11.37 4.3-11.37 11.7 0 7.6 4.1 11.8 11.94 11.8zm-4-14.16c.2-3.8 1.5-4.8 3.3-4.8 1.6 0 2.8 1 2.8 4.5l-6.16.2zM159.4 32h11.88v-3.82l-1.75-.46V15.5c.84-.3 1.7-.55 2.8-.55 1.8 0 2.62.6 2.62 2.4V27.7l-1.8.46V32h11.7v-3.82l-2.2-.6V14.66c0-4-2.4-5.54-5.86-5.54-3.1 0-5.27 1.1-7.4 2.74h-.27v-2.4l-.6-.3-9.27.98v3.9l2.57.68v12.9l-2.46.58V32zm27.6 3.4h5.18c1.38-2.94 2.26-6.38 2.6-10.16h-7.3c0 4.07-.18 6.97-.47 10.16z\" fill=\"#4BC6DF\" fill-rule=\"evenodd\"/></svg>\n        </div>\n        <div class='sentence sentences__honest transform-top-right'>\n          <svg width=\"138\" height=\"33\" viewBox=\"93 41 138 33\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M94.05 73.23h11.88V69.4l-1.76-.46V56.72c.88-.3 1.72-.6 2.8-.6 1.82 0 2.66.64 2.66 2.45v10.37l-1.8.46v3.83h11.7V69.4l-2.22-.58V55.88c0-4-2.3-5.54-5.8-5.54-3.1 0-5.1 1.1-7.1 2.64h-.2V42.06l-.7-.33-9.5.96v3.9l2.57.6v21.6l-2.42.6v3.8zm38.3.54c6.43 0 11.6-4.2 11.6-11.88 0-7.4-4.12-11.6-11.64-11.6-6.4 0-11.5 4.1-11.5 11.8 0 7.1 4.16 11.6 11.64 11.6zm.04-4.62c-2.2 0-3.6-1.47-3.6-7.26 0-5.7 1.4-7 3.4-7 2.1 0 3.5 1.4 3.5 7.2 0 5.5-1.35 6.96-3.4 6.96zm12.7 4.08H157V69.4l-1.77-.46V56.72c.88-.3 1.72-.55 2.82-.55 1.8 0 2.63.6 2.63 2.4v10.37l-1.8.46v3.83h11.7V69.4l-2.2-.58V55.88c0-4-2.4-5.54-5.85-5.54-3.12 0-5.26 1.1-7.4 2.73h-.25v-2.4l-.6-.3-9.3.97v3.9l2.57.68v12.9l-2.44.58v3.83zm38.7.54c4.3 0 6.9-1.13 8.5-2.22v-4.08c-1.6.5-3.5 1.05-6.44 1.05-3.56 0-5.6-1.43-6.04-5.33h13.52c0-9.5-3.3-12.9-10.2-12.9-6.84 0-11.38 4.3-11.38 11.6 0 7.54 4.12 11.8 11.97 11.8zm-4-14.15c.22-3.74 1.53-4.8 3.3-4.8 1.6 0 2.8 1.06 2.8 4.55l-6.13.25zm23.32 14.15c7.47 0 10.6-3.2 10.6-7.94 0-3.4-1.8-5.62-6.3-6.67l-2.7-.63c-2.28-.55-3.08-1-3.08-2.2 0-1.25 1.3-1.75 2.9-1.75 1.24 0 2 .25 2.54.54l.5 2.23h4.66V51.5c-1.84-.74-4.65-1.2-7.42-1.2-6.98 0-10.04 3.14-10.04 7.5 0 4 2.2 5.85 6.4 6.86l2.5.6c1.96.45 2.7.9 2.7 2.17 0 1.26-1.16 1.97-3 1.97-1.3 0-2.4-.37-2.9-.67l-.84-2.48h-4.8l.4 6.14c2.3.9 5.3 1.3 7.87 1.3zm21.25-.08c2.47 0 4.4-.6 5.4-1.3v-4c-.57.2-1.33.3-2.04.3-1.85 0-2.73-.6-2.73-2.58V55.4h4.53v-4.6H225v-5.25h-6l-.96 5.2L215 51.9v3.48h2.4v12.1c0 4.74 2.56 6.2 7.06 6.2z\" fill=\"#4BC6DF\" fill-rule=\"evenodd\"/></svg>\n        </div>\n        <div class='sentence sentences__fearless'>\n          <svg width=\"157\" height=\"33\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M.55 32h13.02v-3.82l-2.9-.6V14.16h4.1v-4.6h-4.1v-1.1c0-2.25.96-2.8 2.94-2.8 1.1 0 1.8.1 2.5.26V1.34c-.9-.34-2.5-.8-4.9-.8C7 .54 3 2.3 3 7.72V9.7l-2.48.96v3.5H3V27.6l-2.43.57V32zm27.38.55c4.28 0 6.93-1.14 8.53-2.23v-4.07c-1.6.5-3.5 1.05-6.43 1.05-3.57 0-5.63-1.43-6.05-5.34H37.5c0-9.4-3.27-12.85-10.16-12.85-6.84 0-11.38 4.3-11.38 11.7 0 7.6 4.12 11.8 11.97 11.8zm-4-14.16c.26-3.8 1.56-4.8 3.3-4.8 1.62 0 2.84 1 2.84 4.5l-6.13.2zM45.5 32.5c2.8 0 4.9-1.22 6.03-2.65h.26c.6 1.84 2.1 2.6 4.4 2.6 1.8 0 3.7-.55 4.5-1.06v-3.6H60c-.85 0-1.5-.3-1.5-1.4v-10c0-5-2.6-7.4-8.25-7.4-3.78 0-7.27.8-9.4 1.6V15c1.5-.26 3.77-.4 5.74-.4 3.3 0 4.2.83 4.2 3.1v1.1l-3.9.74c-5.1.9-8.2 2.33-8.2 6.74 0 3.6 2.6 6.14 6.7 6.14zm3.22-4.46c-1.6 0-2.27-.9-2.27-2.78 0-1.8.76-2.7 2.48-2.8l1.97-.1v4.82c-.42.42-1.26.84-2.18.84zM61.74 32H75v-3.82l-3.14-.6V16.76c1.26-.58 2.7-.84 4.75-.84.8 0 1.6.1 2 .22v-6.8c-.3-.08-.7-.13-1.1-.13-2.5 0-4.4 1.6-5.6 3.6h-.2V9.5l-.7-.3-9.3.97v3.9l2.6.68v12.9l-2.4.6V32zm17.85 0h12.5v-3.82l-2.4-.6V.85l-.7-.3-9.7.97V5.4l2.7.7v21.5l-2.5.6V32zm25.7.55c4.3 0 6.9-1.14 8.5-2.23v-4.07c-1.6.5-3.5 1.05-6.4 1.05-3.6 0-5.7-1.43-6.1-5.34h13.5c0-9.4-3.3-12.85-10.2-12.85-6.9 0-11.4 4.3-11.4 11.7 0 7.6 4.1 11.8 11.9 11.8zm-4-14.16c.2-3.8 1.5-4.8 3.3-4.8 1.6 0 2.8 1 2.8 4.5l-6.2.2zm23.3 14.1c7.4 0 10.5-3.2 10.5-8 0-3.4-1.8-5.7-6.3-6.7l-2.7-.7c-2.3-.6-3.1-1-3.1-2.2 0-1.3 1.3-1.8 2.9-1.8 1.22 0 2 .24 2.52.54l.5 2.2h4.67v-5.8c-1.85-.73-4.68-1.2-7.44-1.2-6.97 0-10.04 3.17-10.04 7.54 0 4 2.2 5.8 6.4 6.8l2.46.6c1.95.5 2.7.9 2.7 2.2 0 1.3-1.17 2-3 2-1.3 0-2.4-.4-2.9-.66l-.8-2.45h-4.8l.4 6.14c2.3.95 5.3 1.4 7.9 1.4zm20.3 0c7.4 0 10.6-3.2 10.6-8 0-3.4-1.8-5.7-6.3-6.7l-2.7-.7c-2.3-.6-3.1-1-3.1-2.2 0-1.3 1.3-1.8 2.9-1.8 1.2 0 2 .24 2.5.54l.5 2.2h4.7v-5.8c-1.84-.75-4.64-1.2-7.4-1.2-7 0-10.07 3.15-10.07 7.52 0 3.93 2.2 5.8 6.4 6.8l2.5.6c2 .43 2.7.9 2.7 2.15s-1.12 2-3 2c-1.3 0-2.4-.4-2.9-.7l-.8-2.45h-4.8l.4 6.13c2.3.9 5.33 1.4 7.9 1.4z\" fill=\"#4BC6DF\" fill-rule=\"evenodd\"/></svg>\n        </div>\n        <div class='sentence sentences__journalism transform-top-right'>\n          <svg width=\"221\" height=\"41\" viewBox=\"29 35 221 41\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M33.75 75.52c6.17 0 8.57-2.8 8.57-8.06v-22.8l-.72-.3-9.62.97v3.9l2.65.67v17.7c0 2.2-1.05 2.93-2.98 2.93-.63 0-1.26-.05-1.9-.17v4.45c.93.4 2.23.8 4 .8zm4.53-32.55c2.36 0 4.25-1.42 4.25-3.78s-1.9-3.8-4.25-3.8c-2.3 0-4.24 1.4-4.24 3.7 0 2.3 1.93 3.7 4.24 3.7zm18.4 24.78c6.43 0 11.6-4.2 11.6-11.88 0-7.35-4.12-11.55-11.64-11.55-6.47 0-11.6 4.1-11.6 11.84 0 7.1 4.16 11.6 11.64 11.6zm.04-4.62c-2.14 0-3.57-1.47-3.57-7.26 0-5.67 1.4-6.97 3.45-6.97 2.1 0 3.52 1.47 3.52 7.26 0 5.5-1.34 6.97-3.4 6.97zm21.34 4.58c3.15 0 5.25-1.3 6.76-2.8h.25v2.5l.67.3 9.16-1v-3.9l-2.44-.6V44.7l-.67-.34-9.3.88v3.87l2.2.8v11.4c-.8.3-1.6.7-3 .7-1.9 0-2.6-.8-2.6-2.6V44.7l-.7-.34-9.4.88v3.87l2.3.8v11.6c0 3.9 1.83 6.2 6.45 6.2zm18.02-.5h13.27v-3.8l-3.15-.6V52c1.26-.6 2.7-.84 4.74-.84.72 0 1.52.1 1.98.2v-6.8c-.3-.08-.76-.12-1.14-.12-2.56 0-4.45 1.6-5.67 3.6h-.2V44.7l-.6-.3-9.3.98v3.9l2.6.67v12.9l-2.4.6v3.8zm17.85 0h11.88v-3.8l-1.7-.4V50.7c.9-.3 1.7-.54 2.8-.54 1.8 0 2.7.58 2.7 2.4V62.9l-1.8.47v3.8h11.7v-3.8l-2.2-.6v-12.9c0-4-2.4-5.55-5.8-5.55-3.1 0-5.2 1.1-7.4 2.73h-.2v-2.4l-.6-.3-9.2.98v3.9l2.55.67v12.9l-2.42.6v3.8zm33.22.6c2.8 0 4.9-1.2 6.05-2.6h.25c.63 1.9 2.1 2.6 4.5 2.6 1.84 0 3.73-.5 4.53-1V63h-.72c-.84 0-1.5-.3-1.5-1.34v-10c0-5-2.57-7.34-8.24-7.34-3.78 0-7.27.8-9.4 1.55v4.45c1.5-.25 3.77-.42 5.75-.42 3.36 0 4.2.84 4.2 3.1v1.1l-3.9.76c-5.1.92-8.2 2.35-8.2 6.76 0 3.6 2.6 6.13 6.68 6.13zm3.23-4.4c-1.6 0-2.27-.8-2.27-2.7 0-1.8.8-2.7 2.5-2.8l2-.1v4.9c-.4.4-1.2.9-2.2.9zm13.02 3.9h12.56v-3.8l-2.4-.6V36.1l-.67-.3-9.7 1v3.84l2.6.7v21.5l-2.5.6v3.8zm13.7 0h12.38v-3.8l-2.26-.6V44.7l-.72-.3-9.62 1v3.9l2.65.65v12.9l-2.44.6v3.8zm6.04-24.3c2.35 0 4.24-1.4 4.24-3.7 0-2.3-1.9-3.7-4.24-3.7-2.3 0-4.24 1.4-4.24 3.8s1.93 3.8 4.24 3.8zm15.84 24.8c7.47 0 10.58-3.2 10.58-7.9 0-3.4-1.76-5.6-6.3-6.7l-2.7-.6c-2.26-.5-3.05-1-3.05-2.2 0-1.2 1.3-1.7 2.9-1.7 1.3 0 2.1.3 2.6.6l.5 2.2h4.7v-5.9c-1.8-.7-4.6-1.2-7.4-1.2-6.9 0-10 3.2-10 7.5 0 4 2.2 5.9 6.4 6.9l2.5.6c2 .48 2.7.9 2.7 2.2s-1.1 2-3 2c-1.3 0-2.4-.4-2.9-.7l-.8-2.4h-4.8l.4 6.18c2.3.9 5.4 1.4 7.9 1.4zm11.92-.5h11.85v-3.8l-1.72-.5V50.7c.88-.33 1.5-.6 2.68-.6 1.7 0 2.5.64 2.5 2.58v10.24l-1.7.47v3.8h11.1v-3.8l-1.7-.5V51.7c0-.4 0-.84-.1-1 .9-.34 1.8-.6 2.7-.6 1.8 0 2.5.63 2.5 2.57V62.9l-1.7.48v3.8h11.6v-3.8l-2.2-.6V49.95c0-3.95-2.5-5.63-5.8-5.63-3.1 0-5.6 1.26-7.4 2.85h-.2c-.9-1.97-2.8-2.85-5.1-2.85-3.1 0-5.2 1.1-7.1 2.64h-.2v-2.3l-.62-.3-9.3.97v3.9l2.55.67v12.9l-2.4.6v3.8z\" fill=\"#4BC6DF\" fill-rule=\"evenodd\"/></svg>\n        </div>\n      </div>\n      <div class='clear'></div>\n    </div>\n    <div class='top__theguardian full-width-wrapper'>\n      <svg width=\"216\" height=\"42\" viewBox=\"26 29 216 42\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"#FFF\" fill-rule=\"evenodd\"><path d=\"M191.34 29.67c-2.03 0-3.66 1.62-3.66 3.63 0 1.98 1.63 3.6 3.66 3.6 2 0 3.67-1.62 3.67-3.6 0-2-1.6-3.63-3.6-3.63m26 29.98h11.2v-1.9l-2.1-1.04V43.3c.8-.6 1.8-.8 2.8-.8 1.9 0 2.8.8 2.8 2.95v11.3L230 57.8v1.9h11v-1.9l-2.25-1V43.9c0-3.84-1.7-5.55-5.1-5.55-2.77 0-5.46 1-7.3 2.7v-2.7h-.56l-8.5 1.38v1.83l2.3 1.05v14.1l-2.2 1.1v1.9m-31.6-20v1.9l2.3 1.1v14l-2.1 1.1v2h11v-2l-2.2-1V38.3h-.6l-8.4 1.36m-9.5 16.23c-.5.4-1 .7-2 .7-2.7 0-3.9-2.3-3.9-7.4 0-5.9 1.6-7.9 3.7-7.9 1.2 0 1.7.4 2.2.9v13.6zm0-16.5c-.8-.6-2.1-.9-3.2-.9-5 0-9.8 3-9.8 11.4 0 8 4.8 10.6 8 10.6 2.5 0 4.3-1.1 5.1-2.3h.2v2.2h.6l8.1-1v-1.6l-2.1-1.2V29.9h-.5l-8.5 1.4v1.9l2.3 1.05v5.1zm-28.2.3v1.9l2.3 1.1v14l-2.1 1v1.9H160v-1.9l-2.8-1.1v-11c1.2-1 2.7-1.3 4.5-1.3.58 0 1.3 0 1.7.2v-6.1c-.2-.1-.64-.1-1-.1-2.22 0-4.25 1.4-5.45 4.2v-4.3h-.56l-8.2 1.3m-14.4 1.6c.4-.2 1.4-.2 1.8-.2 2.6 0 3.3 1.3 3.3 4v2.3l-3.9.8c-4 .7-7 2-7 6.2 0 3.4 2.3 5.8 5.6 5.8 2.5 0 4.9-1.1 5.8-2.9h.2c.3 2.2 2.2 2.9 4.3 2.9 1.6 0 3.2-.56 3.8-1.26v-1.2l-2.2-1v-12c0-4.7-3.3-6.4-8.8-6.4-3.6 0-5.9.9-7.8 1.82v5.25h3.1l1.4-4.1zm5.1 14.2c-.4.5-1.1.9-1.9.9-1.3 0-2.5-.8-2.5-3.1 0-1.6 1.4-3.1 3-3.4l1.3-.3v5.7zm63.7-14.1c.4-.2 1.4-.3 1.8-.3 2.6 0 3.3 1.3 3.3 3.9v2.3l-3.9.8c-4 .7-7 1.93-7 6.2 0 3.44 2.4 5.83 5.6 5.83 2.5 0 4.9-1.1 5.8-2.98h.12c.3 2.2 2.2 2.9 4.3 2.9 1.62 0 3.2-.5 3.8-1.2v-1.2l-2.14-1.06v-12c0-4.7-3.3-6.4-8.75-6.4-3.5 0-5.9.9-7.8 1.8v5.3h3.2l1.4-4.1zm5.1 14.1c-.4.5-1.1.9-1.8.9-1.3 0-2.5-.8-2.5-3.1 0-1.6 1.4-3.1 3-3.3l1.3-.3v5.8zM107 53.5c0 3.6 1.75 6.68 5.85 6.68 2.72 0 5.12-1.2 6.42-2.8v2.85h.55l8.23-1V57.7l-2.28-1.24V38.3h-.55l-8.45 1.38v1.9l2.25 1.08V55.2c-.76.5-1.27.73-2.46.73-1.73 0-2.8-.5-2.8-2.9V38.3h-.6l-8.46 1.38v1.9l2.28 1.08V53.6m-8.44 1.56h-7.26c-.8 0-1.46-.6-1.46-1.34 0-.56.4-1.15.9-1.53 1.1.3 2 .4 3.35.4 5.25 0 8.84-2.4 8.84-7 0-2.1-.8-3.2-2.1-4.4l3.5 1.1v-4.1l-5.5 1c-1.3-.5-3-1.1-4.7-1.1-5.2 0-8.8 2.7-8.8 7.2 0 2.8 1.4 4.8 3.4 6l.2.1c-1.2.8-3.6 2.7-3.6 4.9 0 1.6 1.1 3.2 3.3 3.7-2.3.4-4.8 1.4-4.8 4.2s4 5.5 10.3 5.5c8 0 11.4-3.9 11.4-8.8 0-4.1-2.2-6-6.7-6m-4.6-14.3c1.5 0 2.5 1 2.5 4.8s-1 4.6-2.4 4.6-2.4-.8-2.4-4.6c0-4 1-4.8 2.4-4.8M94 66.5c-3.75 0-5.1-1.45-5.03-2.9.06-.98.55-2.25 2.3-2.37H97c1.68 0 2.74 1.2 2.74 2.3 0 2.2-1.58 3.1-5.83 3.1M83 49.9c0-8.74-3.77-11.6-9-11.6-6.05 0-10 4.05-10 10.93 0 7.1 3.6 11 10.54 11 3.7 0 6.66-2 7.6-3.3l.1-1.7c-1.4.48-2.86.7-5.43.7-3.7 0-5.9-1.9-5.9-6H83zm-9.12-9.38c1.7 0 2.6 1.2 2.6 6.3l-5.7.3c.1-5.2 1.22-6.65 3.1-6.65z\"/><path d=\"M41.8 59.65h11.15v-1.9L50.8 56.7V43.3c.8-.58 1.74-.88 2.76-.88 1.86 0 2.78 1.2 2.75 3v11.3l-2.1 1.05v1.9h11.1v-1.9l-2.2-1.04V43.85C63.1 40 61 38.3 58 38.3c-2.73 0-5.43 1-7.3 2.7V29.4h-.5l-8.44 1.37v1.83l2.34 1.08V56.7l-2.23 1.05v1.9M29.7 53.93c0 3.85 1.8 6.27 5.85 6.27 2.1 0 4.37-.56 5.65-1.54V56.1c-.53.17-1.46.33-2.2.33-1.96 0-2.5-1.04-2.5-3.1v-11h4.45v-3.6h-4.5v-4.9l-6.8.98v4l-3.14.6v3h3.2V54\"/></g></svg>\n    </div>\n  </div>\n  <div class='text-block full-width-wrapper'>\n    <div class='text-block__body'>\n      <h2 class='headline'>Independence matters.</h2>\n      <p>Our independent ownership means that we can pursue a story without fear of where it might take us. We can expose corruption or wrongdoing wherever we find it. No government, shareholders or advertisers can tell us to censor, edit or drop a story.</p>\n      <p>The Scott Trust, the unique owner of\u2028 the Guardian, is designed to safeguard our journalism. It allows us to bring our readers the stories that truly matter.</p>\n      <p>Think the whistleblowing of Edward Snowden, End FGM, The counted,\u2028The Panama Papers.</p>\n      <p>All these stories below show the true value of our structure. But the greatest safeguard of our independence is you.\u2028To maintain our reporting and that unique structure, we need your help.</p>\n      <div class='find-out-more'>Find out more now about how you can support us</div>\n    </div>\n    <div class='text-block__scott half-width-rule'>\n      <h3 class='headline'>The Scott Trust</h3>\n      <p>Set up in 1936, all profits of the organisation are\u2028re-invested in journalism. The constitution of\u2028The Scott Trust Limited contains provisions to\u2028ensure that no shareholder can benefit financially</p>\n      <div class='find-out-more'>Find out more</div>\n    </div>\n    <div class='text-block__furniture'>\n      <div class='date half-width-rule'>27 April 2016</div>\n      <div class='social half-width-rule'>\n        <i></i><i></i><i></i><i></i>\n      </div>\n    </div>\n  </div>\n</div>\n";
  return module.exports;
});
$__System.register('5', [], function (_export) {
    'use strict';

    var twitterBaseUrl, facebookBaseUrl, googleBaseUrl;

    _export('default', share);

    function share(title, shareURL, fbImg, twImg, hashTag) {
        var twImgText = twImg ? ' ' + twImg.trim() + ' ' : ' ';
        var fbImgQry = fbImg ? '&picture=' + encodeURIComponent(fbImg) : '';
        return function (network) {
            var extra = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];

            var twitterMessage = '' + extra + title + twImgText + hashTag;
            var shareWindow;

            if (network === 'twitter') {
                shareWindow = twitterBaseUrl + encodeURIComponent(twitterMessage + ' ') + shareURL;
            } else if (network === 'facebook') {
                shareWindow = facebookBaseUrl + shareURL + fbImgQry;
            } else if (network === 'email') {
                shareWindow = 'mailto:?subject=' + encodeURIComponent(title) + '&body=' + shareURL;
            } else if (network === 'google') {
                shareWindow = googleBaseUrl + shareURL;
            }

            window.open(shareWindow, network + 'share', 'width=640,height=320');
        };
    }

    return {
        setters: [],
        execute: function () {
            twitterBaseUrl = 'https://twitter.com/intent/tweet?text=';
            facebookBaseUrl = 'https://www.facebook.com/dialog/feed?display=popup&app_id=741666719251986&redirect_uri=http://www.theguardian.com&link=';
            googleBaseUrl = 'https://plus.google.com/share?url=';
        }
    };
});
$__System.register('1', ['3', '4', '5'], function (_export) {
    // import template from './text/template.html!text'
    // import handlebars from 'handlebars'

    'use strict';

    var reqwest, mainHTML, share, shareFn, el, data;

    _export('init', init);

    function init(dom, context, config, mediator) {
        el = dom;
        el.innerHTML = mainHTML.replace(/%assetPath%/g, config.assetPath);

        // var url = "https://interactive.guim.co.uk/docsdata-test/1lZsRxsU6rF4sAruy7MEIBbOlz3x3egAF9PE1wnbQPVU.json"
        // reqwest({
        //     url: url,
        //     type: 'json',
        //     crossOrigin: true,
        //     success: function(resp){
        //         data = resp;
        //         templateInit(config)
        //     }
        // });
    }

    function templateInit(config) {
        // console.log(data)
        // // Header
        // var introText = data.intro_quote.split(' ');
        // var introTextLength = introText.length;
        // var newIntroText = "";
        //
        // introText.forEach(function(word,i){
        //     newIntroText += word + " ";
        //     if(i === introTextLength - 10){
        //         newIntroText += '<img src="' + config.assetPath + '/assets/imgs/Ewen.png" class="img-ewen"/>'
        //     }
        // })
        //
        // el.querySelector('#header-standfirst span').innerHTML = newIntroText;
        //
        // removeHeaderContent();
        //
        // // Rest of page
        // var mainTemplate = Handlebars.compile(template);
        // var mainTemplateParsed = mainTemplate(data).replace(/%assetPath%/g,config.assetPath);
        //
        // el.querySelector('#interactive-content').innerHTML = mainTemplateParsed;
        //
        // var playContainers = document.querySelectorAll('.talking-head');
        //
        // for(var i =0;i <playContainers.length; i++){
        //     playContainers[i].addEventListener('click',function(e){
        //         var isActive = e.target.parentElement.className.indexOf('video-active') > -1 ? true : false;
        //         for(var j =0;j < playContainers.length; j++){
        //             playContainers[j].className = " talking-head";
        //             playContainers[j].querySelector('video').pause();
        //         }
        //         if(!isActive){
        //             e.target.parentElement.className += " video-active";
        //             e.target.parentElement.querySelector('video').play();
        //             e.target.parentElement.querySelector('video').autoplay = true;
        //         }
        //     })
        // }
        //
        // var placeHolder = document.querySelector('.video-placeholder');
        //
        // placeHolder.addEventListener('click',function(e){
        //     el.querySelector('.interactive-video-container iframe').src = data.section_video.video_url + "#autoplay"
        //     placeHolder.style.display = "none"
        // })
    }
    return {
        setters: [function (_) {
            reqwest = _['default'];
        }, function (_2) {
            mainHTML = _2['default'];
        }, function (_3) {
            share = _3['default'];
        }],
        execute: function () {
            shareFn = share('Interactive title', 'http://gu.com/p/URL', '#Interactive');
        }
    };
});
})
(function(factory) {
  define([], factory);
});
//# sourceMappingURL=main.js.map