import { a as xe } from "./chunk-TSLWMKS5.js";
import {
  g as ft,
  h as F,
  i as oe,
  j as _,
  k as I,
  l as ut,
  n as R,
} from "./chunk-VNDKUXGB.js";
var Ce = {};
oe(Ce, {
  __assign: () => he,
  __asyncDelegator: () => Pt,
  __asyncGenerator: () => Ot,
  __asyncValues: () => At,
  __await: () => U,
  __awaiter: () => vt,
  __classPrivateFieldGet: () => Dt,
  __classPrivateFieldSet: () => Ct,
  __createBinding: () => _t,
  __decorate: () => bt,
  __exportStar: () => Rt,
  __extends: () => pt,
  __generator: () => wt,
  __importDefault: () => Bt,
  __importStar: () => St,
  __makeTemplateObject: () => Tt,
  __metadata: () => gt,
  __param: () => mt,
  __read: () => De,
  __rest: () => yt,
  __spread: () => Et,
  __spreadArrays: () => xt,
  __values: () => de,
});
function pt(e, t) {
  le(e, t);
  function r() {
    this.constructor = e;
  }
  e.prototype =
    t === null ? Object.create(t) : ((r.prototype = t.prototype), new r());
}
function yt(e, t) {
  var r = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) &&
      t.indexOf(o) < 0 &&
      (r[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, o = Object.getOwnPropertySymbols(e); a < o.length; a++)
      t.indexOf(o[a]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, o[a]) &&
        (r[o[a]] = e[o[a]]);
  return r;
}
function bt(e, t, r, o) {
  var a = arguments.length,
    s =
      a < 3 ? t : o === null ? (o = Object.getOwnPropertyDescriptor(t, r)) : o,
    f;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    s = Reflect.decorate(e, t, r, o);
  else
    for (var p = e.length - 1; p >= 0; p--)
      (f = e[p]) && (s = (a < 3 ? f(s) : a > 3 ? f(t, r, s) : f(t, r)) || s);
  return a > 3 && s && Object.defineProperty(t, r, s), s;
}
function mt(e, t) {
  return function (r, o) {
    t(r, o, e);
  };
}
function gt(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, t);
}
function vt(e, t, r, o) {
  function a(s) {
    return s instanceof r
      ? s
      : new r(function (f) {
          f(s);
        });
  }
  return new (r || (r = Promise))(function (s, f) {
    function p(m) {
      try {
        c(o.next(m));
      } catch (h) {
        f(h);
      }
    }
    function v(m) {
      try {
        c(o.throw(m));
      } catch (h) {
        f(h);
      }
    }
    function c(m) {
      m.done ? s(m.value) : a(m.value).then(p, v);
    }
    c((o = o.apply(e, t || [])).next());
  });
}
function wt(e, t) {
  var r = {
      label: 0,
      sent: function () {
        if (s[0] & 1) throw s[1];
        return s[1];
      },
      trys: [],
      ops: [],
    },
    o,
    a,
    s,
    f;
  return (
    (f = { next: p(0), throw: p(1), return: p(2) }),
    typeof Symbol == "function" &&
      (f[Symbol.iterator] = function () {
        return this;
      }),
    f
  );
  function p(c) {
    return function (m) {
      return v([c, m]);
    };
  }
  function v(c) {
    if (o) throw new TypeError("Generator is already executing.");
    for (; r; )
      try {
        if (
          ((o = 1),
          a &&
            (s =
              c[0] & 2
                ? a.return
                : c[0]
                ? a.throw || ((s = a.return) && s.call(a), 0)
                : a.next) &&
            !(s = s.call(a, c[1])).done)
        )
          return s;
        switch (((a = 0), s && (c = [c[0] & 2, s.value]), c[0])) {
          case 0:
          case 1:
            s = c;
            break;
          case 4:
            return r.label++, { value: c[1], done: !1 };
          case 5:
            r.label++, (a = c[1]), (c = [0]);
            continue;
          case 7:
            (c = r.ops.pop()), r.trys.pop();
            continue;
          default:
            if (
              ((s = r.trys),
              !(s = s.length > 0 && s[s.length - 1]) &&
                (c[0] === 6 || c[0] === 2))
            ) {
              r = 0;
              continue;
            }
            if (c[0] === 3 && (!s || (c[1] > s[0] && c[1] < s[3]))) {
              r.label = c[1];
              break;
            }
            if (c[0] === 6 && r.label < s[1]) {
              (r.label = s[1]), (s = c);
              break;
            }
            if (s && r.label < s[2]) {
              (r.label = s[2]), r.ops.push(c);
              break;
            }
            s[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        c = t.call(e, r);
      } catch (m) {
        (c = [6, m]), (a = 0);
      } finally {
        o = s = 0;
      }
    if (c[0] & 5) throw c[1];
    return { value: c[0] ? c[1] : void 0, done: !0 };
  }
}
function _t(e, t, r, o) {
  o === void 0 && (o = r), (e[o] = t[r]);
}
function Rt(e, t) {
  for (var r in e) r !== "default" && !t.hasOwnProperty(r) && (t[r] = e[r]);
}
function de(e) {
  var t = typeof Symbol == "function" && Symbol.iterator,
    r = t && e[t],
    o = 0;
  if (r) return r.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function () {
        return (
          e && o >= e.length && (e = void 0), { value: e && e[o++], done: !e }
        );
      },
    };
  throw new TypeError(
    t ? "Object is not iterable." : "Symbol.iterator is not defined."
  );
}
function De(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r) return e;
  var o = r.call(e),
    a,
    s = [],
    f;
  try {
    for (; (t === void 0 || t-- > 0) && !(a = o.next()).done; ) s.push(a.value);
  } catch (p) {
    f = { error: p };
  } finally {
    try {
      a && !a.done && (r = o.return) && r.call(o);
    } finally {
      if (f) throw f.error;
    }
  }
  return s;
}
function Et() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e = e.concat(De(arguments[t]));
  return e;
}
function xt() {
  for (var e = 0, t = 0, r = arguments.length; t < r; t++)
    e += arguments[t].length;
  for (var o = Array(e), a = 0, t = 0; t < r; t++)
    for (var s = arguments[t], f = 0, p = s.length; f < p; f++, a++)
      o[a] = s[f];
  return o;
}
function U(e) {
  return this instanceof U ? ((this.v = e), this) : new U(e);
}
function Ot(e, t, r) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var o = r.apply(e, t || []),
    a,
    s = [];
  return (
    (a = {}),
    f("next"),
    f("throw"),
    f("return"),
    (a[Symbol.asyncIterator] = function () {
      return this;
    }),
    a
  );
  function f(b) {
    o[b] &&
      (a[b] = function (O) {
        return new Promise(function (j, te) {
          s.push([b, O, j, te]) > 1 || p(b, O);
        });
      });
  }
  function p(b, O) {
    try {
      v(o[b](O));
    } catch (j) {
      h(s[0][3], j);
    }
  }
  function v(b) {
    b.value instanceof U
      ? Promise.resolve(b.value.v).then(c, m)
      : h(s[0][2], b);
  }
  function c(b) {
    p("next", b);
  }
  function m(b) {
    p("throw", b);
  }
  function h(b, O) {
    b(O), s.shift(), s.length && p(s[0][0], s[0][1]);
  }
}
function Pt(e) {
  var t, r;
  return (
    (t = {}),
    o("next"),
    o("throw", function (a) {
      throw a;
    }),
    o("return"),
    (t[Symbol.iterator] = function () {
      return this;
    }),
    t
  );
  function o(a, s) {
    t[a] = e[a]
      ? function (f) {
          return (r = !r)
            ? { value: U(e[a](f)), done: a === "return" }
            : s
            ? s(f)
            : f;
        }
      : s;
  }
}
function At(e) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = e[Symbol.asyncIterator],
    r;
  return t
    ? t.call(e)
    : ((e = typeof de == "function" ? de(e) : e[Symbol.iterator]()),
      (r = {}),
      o("next"),
      o("throw"),
      o("return"),
      (r[Symbol.asyncIterator] = function () {
        return this;
      }),
      r);
  function o(s) {
    r[s] =
      e[s] &&
      function (f) {
        return new Promise(function (p, v) {
          (f = e[s](f)), a(p, v, f.done, f.value);
        });
      };
  }
  function a(s, f, p, v) {
    Promise.resolve(v).then(function (c) {
      s({ value: c, done: p });
    }, f);
  }
}
function Tt(e, t) {
  return (
    Object.defineProperty
      ? Object.defineProperty(e, "raw", { value: t })
      : (e.raw = t),
    e
  );
}
function St(e) {
  if (e && e.__esModule) return e;
  var t = {};
  if (e != null)
    for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
  return (t.default = e), t;
}
function Bt(e) {
  return e && e.__esModule ? e : { default: e };
}
function Dt(e, t) {
  if (!t.has(e))
    throw new TypeError("attempted to get private field on non-instance");
  return t.get(e);
}
function Ct(e, t, r) {
  if (!t.has(e))
    throw new TypeError("attempted to set private field on non-instance");
  return t.set(e, r), r;
}
var le,
  he,
  je = ft(() => {
    "use strict";
    le = function (e, t) {
      return (
        (le =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (r, o) {
              r.__proto__ = o;
            }) ||
          function (r, o) {
            for (var a in o) o.hasOwnProperty(a) && (r[a] = o[a]);
          }),
        le(e, t)
      );
    };
    he = function () {
      return (
        (he =
          Object.assign ||
          function (t) {
            for (var r, o = 1, a = arguments.length; o < a; o++) {
              r = arguments[o];
              for (var s in r)
                Object.prototype.hasOwnProperty.call(r, s) && (t[s] = r[s]);
            }
            return t;
          }),
        he.apply(this, arguments)
      );
    };
  });
var Ne = F((T) => {
  "use strict";
  Object.defineProperty(T, "__esModule", { value: !0 });
  T.isBrowserCryptoAvailable = T.getSubtleCrypto = T.getBrowerCrypto = void 0;
  function pe() {
    return (
      (global == null ? void 0 : global.crypto) ||
      (global == null ? void 0 : global.msCrypto) ||
      {}
    );
  }
  T.getBrowerCrypto = pe;
  function Ie() {
    let e = pe();
    return e.subtle || e.webkitSubtle;
  }
  T.getSubtleCrypto = Ie;
  function jt() {
    return !!pe() && !!Ie();
  }
  T.isBrowserCryptoAvailable = jt;
});
var Me = F((S) => {
  "use strict";
  Object.defineProperty(S, "__esModule", { value: !0 });
  S.isBrowser = S.isNode = S.isReactNative = void 0;
  function Le() {
    return (
      typeof document > "u" &&
      typeof navigator < "u" &&
      navigator.product === "ReactNative"
    );
  }
  S.isReactNative = Le;
  function Ue() {
    return (
      typeof process < "u" &&
      typeof process.versions < "u" &&
      typeof process.versions.node < "u"
    );
  }
  S.isNode = Ue;
  function It() {
    return !Le() && !Ue();
  }
  S.isBrowser = It;
});
var ye = F((z) => {
  "use strict";
  Object.defineProperty(z, "__esModule", { value: !0 });
  var Je = (je(), ut(Ce));
  Je.__exportStar(Ne(), z);
  Je.__exportStar(Me(), z);
});
var ze = F((B, We) => {
  "use strict";
  var Y =
      (typeof globalThis < "u" && globalThis) ||
      (typeof self < "u" && self) ||
      (typeof global < "u" && global),
    ee = (function () {
      function e() {
        (this.fetch = !1), (this.DOMException = Y.DOMException);
      }
      return (e.prototype = Y), new e();
    })();
  (function (e) {
    var t = (function (r) {
      var o =
          (typeof e < "u" && e) ||
          (typeof self < "u" && self) ||
          (typeof global < "u" && global) ||
          {},
        a = {
          searchParams: "URLSearchParams" in o,
          iterable: "Symbol" in o && "iterator" in Symbol,
          blob:
            "FileReader" in o &&
            "Blob" in o &&
            (function () {
              try {
                return new Blob(), !0;
              } catch {
                return !1;
              }
            })(),
          formData: "FormData" in o,
          arrayBuffer: "ArrayBuffer" in o,
        };
      function s(n) {
        return n && DataView.prototype.isPrototypeOf(n);
      }
      if (a.arrayBuffer)
        var f = [
            "[object Int8Array]",
            "[object Uint8Array]",
            "[object Uint8ClampedArray]",
            "[object Int16Array]",
            "[object Uint16Array]",
            "[object Int32Array]",
            "[object Uint32Array]",
            "[object Float32Array]",
            "[object Float64Array]",
          ],
          p =
            ArrayBuffer.isView ||
            function (n) {
              return n && f.indexOf(Object.prototype.toString.call(n)) > -1;
            };
      function v(n) {
        if (
          (typeof n != "string" && (n = String(n)),
          /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(n) || n === "")
        )
          throw new TypeError(
            'Invalid character in header field name: "' + n + '"'
          );
        return n.toLowerCase();
      }
      function c(n) {
        return typeof n != "string" && (n = String(n)), n;
      }
      function m(n) {
        var i = {
          next: function () {
            var u = n.shift();
            return { done: u === void 0, value: u };
          },
        };
        return (
          a.iterable &&
            (i[Symbol.iterator] = function () {
              return i;
            }),
          i
        );
      }
      function h(n) {
        (this.map = {}),
          n instanceof h
            ? n.forEach(function (i, u) {
                this.append(u, i);
              }, this)
            : Array.isArray(n)
            ? n.forEach(function (i) {
                if (i.length != 2)
                  throw new TypeError(
                    "Headers constructor: expected name/value pair to be length 2, found" +
                      i.length
                  );
                this.append(i[0], i[1]);
              }, this)
            : n &&
              Object.getOwnPropertyNames(n).forEach(function (i) {
                this.append(i, n[i]);
              }, this);
      }
      (h.prototype.append = function (n, i) {
        (n = v(n)), (i = c(i));
        var u = this.map[n];
        this.map[n] = u ? u + ", " + i : i;
      }),
        (h.prototype.delete = function (n) {
          delete this.map[v(n)];
        }),
        (h.prototype.get = function (n) {
          return (n = v(n)), this.has(n) ? this.map[n] : null;
        }),
        (h.prototype.has = function (n) {
          return this.map.hasOwnProperty(v(n));
        }),
        (h.prototype.set = function (n, i) {
          this.map[v(n)] = c(i);
        }),
        (h.prototype.forEach = function (n, i) {
          for (var u in this.map)
            this.map.hasOwnProperty(u) && n.call(i, this.map[u], u, this);
        }),
        (h.prototype.keys = function () {
          var n = [];
          return (
            this.forEach(function (i, u) {
              n.push(u);
            }),
            m(n)
          );
        }),
        (h.prototype.values = function () {
          var n = [];
          return (
            this.forEach(function (i) {
              n.push(i);
            }),
            m(n)
          );
        }),
        (h.prototype.entries = function () {
          var n = [];
          return (
            this.forEach(function (i, u) {
              n.push([u, i]);
            }),
            m(n)
          );
        }),
        a.iterable && (h.prototype[Symbol.iterator] = h.prototype.entries);
      function b(n) {
        if (!n._noBody) {
          if (n.bodyUsed) return Promise.reject(new TypeError("Already read"));
          n.bodyUsed = !0;
        }
      }
      function O(n) {
        return new Promise(function (i, u) {
          (n.onload = function () {
            i(n.result);
          }),
            (n.onerror = function () {
              u(n.error);
            });
        });
      }
      function j(n) {
        var i = new FileReader(),
          u = O(i);
        return i.readAsArrayBuffer(n), u;
      }
      function te(n) {
        var i = new FileReader(),
          u = O(i),
          d = /charset=([A-Za-z0-9_-]+)/.exec(n.type),
          y = d ? d[1] : "utf-8";
        return i.readAsText(n, y), u;
      }
      function nt(n) {
        for (
          var i = new Uint8Array(n), u = new Array(i.length), d = 0;
          d < i.length;
          d++
        )
          u[d] = String.fromCharCode(i[d]);
        return u.join("");
      }
      function _e(n) {
        if (n.slice) return n.slice(0);
        var i = new Uint8Array(n.byteLength);
        return i.set(new Uint8Array(n)), i.buffer;
      }
      function Re() {
        return (
          (this.bodyUsed = !1),
          (this._initBody = function (n) {
            (this.bodyUsed = this.bodyUsed),
              (this._bodyInit = n),
              n
                ? typeof n == "string"
                  ? (this._bodyText = n)
                  : a.blob && Blob.prototype.isPrototypeOf(n)
                  ? (this._bodyBlob = n)
                  : a.formData && FormData.prototype.isPrototypeOf(n)
                  ? (this._bodyFormData = n)
                  : a.searchParams && URLSearchParams.prototype.isPrototypeOf(n)
                  ? (this._bodyText = n.toString())
                  : a.arrayBuffer && a.blob && s(n)
                  ? ((this._bodyArrayBuffer = _e(n.buffer)),
                    (this._bodyInit = new Blob([this._bodyArrayBuffer])))
                  : a.arrayBuffer &&
                    (ArrayBuffer.prototype.isPrototypeOf(n) || p(n))
                  ? (this._bodyArrayBuffer = _e(n))
                  : (this._bodyText = n = Object.prototype.toString.call(n))
                : ((this._noBody = !0), (this._bodyText = "")),
              this.headers.get("content-type") ||
                (typeof n == "string"
                  ? this.headers.set("content-type", "text/plain;charset=UTF-8")
                  : this._bodyBlob && this._bodyBlob.type
                  ? this.headers.set("content-type", this._bodyBlob.type)
                  : a.searchParams &&
                    URLSearchParams.prototype.isPrototypeOf(n) &&
                    this.headers.set(
                      "content-type",
                      "application/x-www-form-urlencoded;charset=UTF-8"
                    ));
          }),
          a.blob &&
            (this.blob = function () {
              var n = b(this);
              if (n) return n;
              if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
              if (this._bodyArrayBuffer)
                return Promise.resolve(new Blob([this._bodyArrayBuffer]));
              if (this._bodyFormData)
                throw new Error("could not read FormData body as blob");
              return Promise.resolve(new Blob([this._bodyText]));
            }),
          (this.arrayBuffer = function () {
            if (this._bodyArrayBuffer) {
              var n = b(this);
              return (
                n ||
                (ArrayBuffer.isView(this._bodyArrayBuffer)
                  ? Promise.resolve(
                      this._bodyArrayBuffer.buffer.slice(
                        this._bodyArrayBuffer.byteOffset,
                        this._bodyArrayBuffer.byteOffset +
                          this._bodyArrayBuffer.byteLength
                      )
                    )
                  : Promise.resolve(this._bodyArrayBuffer))
              );
            } else {
              if (a.blob) return this.blob().then(j);
              throw new Error("could not read as ArrayBuffer");
            }
          }),
          (this.text = function () {
            var n = b(this);
            if (n) return n;
            if (this._bodyBlob) return te(this._bodyBlob);
            if (this._bodyArrayBuffer)
              return Promise.resolve(nt(this._bodyArrayBuffer));
            if (this._bodyFormData)
              throw new Error("could not read FormData body as text");
            return Promise.resolve(this._bodyText);
          }),
          a.formData &&
            (this.formData = function () {
              return this.text().then(st);
            }),
          (this.json = function () {
            return this.text().then(JSON.parse);
          }),
          this
        );
      }
      var ot = [
        "CONNECT",
        "DELETE",
        "GET",
        "HEAD",
        "OPTIONS",
        "PATCH",
        "POST",
        "PUT",
        "TRACE",
      ];
      function it(n) {
        var i = n.toUpperCase();
        return ot.indexOf(i) > -1 ? i : n;
      }
      function P(n, i) {
        if (!(this instanceof P))
          throw new TypeError(
            'Please use the "new" operator, this DOM object constructor cannot be called as a function.'
          );
        i = i || {};
        var u = i.body;
        if (n instanceof P) {
          if (n.bodyUsed) throw new TypeError("Already read");
          (this.url = n.url),
            (this.credentials = n.credentials),
            i.headers || (this.headers = new h(n.headers)),
            (this.method = n.method),
            (this.mode = n.mode),
            (this.signal = n.signal),
            !u && n._bodyInit != null && ((u = n._bodyInit), (n.bodyUsed = !0));
        } else this.url = String(n);
        if (
          ((this.credentials =
            i.credentials || this.credentials || "same-origin"),
          (i.headers || !this.headers) && (this.headers = new h(i.headers)),
          (this.method = it(i.method || this.method || "GET")),
          (this.mode = i.mode || this.mode || null),
          (this.signal =
            i.signal ||
            this.signal ||
            (function () {
              if ("AbortController" in o) {
                var l = new AbortController();
                return l.signal;
              }
            })()),
          (this.referrer = null),
          (this.method === "GET" || this.method === "HEAD") && u)
        )
          throw new TypeError("Body not allowed for GET or HEAD requests");
        if (
          (this._initBody(u),
          (this.method === "GET" || this.method === "HEAD") &&
            (i.cache === "no-store" || i.cache === "no-cache"))
        ) {
          var d = /([?&])_=[^&]*/;
          if (d.test(this.url))
            this.url = this.url.replace(d, "$1_=" + new Date().getTime());
          else {
            var y = /\?/;
            this.url +=
              (y.test(this.url) ? "&" : "?") + "_=" + new Date().getTime();
          }
        }
      }
      P.prototype.clone = function () {
        return new P(this, { body: this._bodyInit });
      };
      function st(n) {
        var i = new FormData();
        return (
          n
            .trim()
            .split("&")
            .forEach(function (u) {
              if (u) {
                var d = u.split("="),
                  y = d.shift().replace(/\+/g, " "),
                  l = d.join("=").replace(/\+/g, " ");
                i.append(decodeURIComponent(y), decodeURIComponent(l));
              }
            }),
          i
        );
      }
      function at(n) {
        var i = new h(),
          u = n.replace(/\r?\n[\t ]+/g, " ");
        return (
          u
            .split("\r")
            .map(function (d) {
              return d.indexOf(`
`) === 0
                ? d.substr(1, d.length)
                : d;
            })
            .forEach(function (d) {
              var y = d.split(":"),
                l = y.shift().trim();
              if (l) {
                var H = y.join(":").trim();
                try {
                  i.append(l, H);
                } catch (ne) {
                  console.warn("Response " + ne.message);
                }
              }
            }),
          i
        );
      }
      Re.call(P.prototype);
      function x(n, i) {
        if (!(this instanceof x))
          throw new TypeError(
            'Please use the "new" operator, this DOM object constructor cannot be called as a function.'
          );
        if (
          (i || (i = {}),
          (this.type = "default"),
          (this.status = i.status === void 0 ? 200 : i.status),
          this.status < 200 || this.status > 599)
        )
          throw new RangeError(
            "Failed to construct 'Response': The status provided (0) is outside the range [200, 599]."
          );
        (this.ok = this.status >= 200 && this.status < 300),
          (this.statusText = i.statusText === void 0 ? "" : "" + i.statusText),
          (this.headers = new h(i.headers)),
          (this.url = i.url || ""),
          this._initBody(n);
      }
      Re.call(x.prototype),
        (x.prototype.clone = function () {
          return new x(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new h(this.headers),
            url: this.url,
          });
        }),
        (x.error = function () {
          var n = new x(null, { status: 200, statusText: "" });
          return (n.ok = !1), (n.status = 0), (n.type = "error"), n;
        });
      var ct = [301, 302, 303, 307, 308];
      (x.redirect = function (n, i) {
        if (ct.indexOf(i) === -1) throw new RangeError("Invalid status code");
        return new x(null, { status: i, headers: { location: n } });
      }),
        (r.DOMException = o.DOMException);
      try {
        new r.DOMException();
      } catch {
        (r.DOMException = function (i, u) {
          (this.message = i), (this.name = u);
          var d = Error(i);
          this.stack = d.stack;
        }),
          (r.DOMException.prototype = Object.create(Error.prototype)),
          (r.DOMException.prototype.constructor = r.DOMException);
      }
      function re(n, i) {
        return new Promise(function (u, d) {
          var y = new P(n, i);
          if (y.signal && y.signal.aborted)
            return d(new r.DOMException("Aborted", "AbortError"));
          var l = new XMLHttpRequest();
          function H() {
            l.abort();
          }
          (l.onload = function () {
            var g = {
              statusText: l.statusText,
              headers: at(l.getAllResponseHeaders() || ""),
            };
            y.url.indexOf("file://") === 0 && (l.status < 200 || l.status > 599)
              ? (g.status = 200)
              : (g.status = l.status),
              (g.url =
                "responseURL" in l
                  ? l.responseURL
                  : g.headers.get("X-Request-URL"));
            var D = "response" in l ? l.response : l.responseText;
            setTimeout(function () {
              u(new x(D, g));
            }, 0);
          }),
            (l.onerror = function () {
              setTimeout(function () {
                d(new TypeError("Network request failed"));
              }, 0);
            }),
            (l.ontimeout = function () {
              setTimeout(function () {
                d(new TypeError("Network request timed out"));
              }, 0);
            }),
            (l.onabort = function () {
              setTimeout(function () {
                d(new r.DOMException("Aborted", "AbortError"));
              }, 0);
            });
          function ne(g) {
            try {
              return g === "" && o.location.href ? o.location.href : g;
            } catch {
              return g;
            }
          }
          if (
            (l.open(y.method, ne(y.url), !0),
            y.credentials === "include"
              ? (l.withCredentials = !0)
              : y.credentials === "omit" && (l.withCredentials = !1),
            "responseType" in l &&
              (a.blob
                ? (l.responseType = "blob")
                : a.arrayBuffer && (l.responseType = "arraybuffer")),
            i &&
              typeof i.headers == "object" &&
              !(
                i.headers instanceof h ||
                (o.Headers && i.headers instanceof o.Headers)
              ))
          ) {
            var Ee = [];
            Object.getOwnPropertyNames(i.headers).forEach(function (g) {
              Ee.push(v(g)), l.setRequestHeader(g, c(i.headers[g]));
            }),
              y.headers.forEach(function (g, D) {
                Ee.indexOf(D) === -1 && l.setRequestHeader(D, g);
              });
          } else
            y.headers.forEach(function (g, D) {
              l.setRequestHeader(D, g);
            });
          y.signal &&
            (y.signal.addEventListener("abort", H),
            (l.onreadystatechange = function () {
              l.readyState === 4 && y.signal.removeEventListener("abort", H);
            })),
            l.send(typeof y._bodyInit > "u" ? null : y._bodyInit);
        });
      }
      return (
        (re.polyfill = !0),
        o.fetch ||
          ((o.fetch = re), (o.Headers = h), (o.Request = P), (o.Response = x)),
        (r.Headers = h),
        (r.Request = P),
        (r.Response = x),
        (r.fetch = re),
        Object.defineProperty(r, "__esModule", { value: !0 }),
        r
      );
    })({});
  })(ee);
  ee.fetch.ponyfill = !0;
  delete ee.fetch.polyfill;
  var C = Y.fetch ? Y : ee;
  B = C.fetch;
  B.default = C.fetch;
  B.fetch = C.fetch;
  B.Headers = C.Headers;
  B.Request = C.Request;
  B.Response = C.Response;
  We.exports = B;
});
var Oe = "PARSE_ERROR",
  Pe = "INVALID_REQUEST",
  Ae = "METHOD_NOT_FOUND",
  Te = "INVALID_PARAMS",
  q = "INTERNAL_ERROR",
  N = "SERVER_ERROR",
  ie = [-32700, -32600, -32601, -32602, -32603],
  V = [-32e3, -32099],
  A = {
    [Oe]: { code: -32700, message: "Parse error" },
    [Pe]: { code: -32600, message: "Invalid Request" },
    [Ae]: { code: -32601, message: "Method not found" },
    [Te]: { code: -32602, message: "Invalid params" },
    [q]: { code: -32603, message: "Internal error" },
    [N]: { code: -32e3, message: "Server error" },
  },
  L = N;
function lt(e) {
  return e <= V[0] && e >= V[1];
}
function $(e) {
  return ie.includes(e);
}
function Se(e) {
  return typeof e == "number";
}
function G(e) {
  return Object.keys(A).includes(e) ? A[e] : A[L];
}
function W(e) {
  let t = Object.values(A).find((r) => r.code === e);
  return t || A[L];
}
function ht(e) {
  if (typeof e.error.code > "u")
    return { valid: !1, error: "Missing code for JSON-RPC error" };
  if (typeof e.error.message > "u")
    return { valid: !1, error: "Missing message for JSON-RPC error" };
  if (!Se(e.error.code))
    return {
      valid: !1,
      error: `Invalid error code type for JSON-RPC: ${e.error.code}`,
    };
  if ($(e.error.code)) {
    let t = W(e.error.code);
    if (t.message !== A[L].message && e.error.message === t.message)
      return {
        valid: !1,
        error: `Invalid error code message for JSON-RPC: ${e.error.code}`,
      };
  }
  return { valid: !0 };
}
function se(e, t, r) {
  return e.message.includes("getaddrinfo ENOTFOUND") ||
    e.message.includes("connect ECONNREFUSED")
    ? new Error(`Unavailable ${r} RPC url at ${t}`)
    : e;
}
function ae(e = 3) {
  let t = Date.now() * Math.pow(10, e),
    r = Math.floor(Math.random() * Math.pow(10, e));
  return t + r;
}
function ce(e = 6) {
  return BigInt(ae(e));
}
function fe(e, t, r) {
  return { id: r || ae(), jsonrpc: "2.0", method: e, params: t };
}
function dt(e, t) {
  return { id: e, jsonrpc: "2.0", result: t };
}
function ue(e, t, r) {
  return { id: e, jsonrpc: "2.0", error: Be(t, r) };
}
function Be(e, t) {
  return typeof e > "u"
    ? G(q)
    : (typeof e == "string" &&
        (e = Object.assign(Object.assign({}, G(N)), { message: e })),
      typeof t < "u" && (e.data = t),
      $(e.code) && (e = W(e.code)),
      e);
}
var E = {};
oe(E, {
  DEFAULT_ERROR: () => L,
  IBaseJsonRpcProvider: () => Q,
  IEvents: () => M,
  IJsonRpcConnection: () => be,
  IJsonRpcProvider: () => J,
  INTERNAL_ERROR: () => q,
  INVALID_PARAMS: () => Te,
  INVALID_REQUEST: () => Pe,
  METHOD_NOT_FOUND: () => Ae,
  PARSE_ERROR: () => Oe,
  RESERVED_ERROR_CODES: () => ie,
  SERVER_ERROR: () => N,
  SERVER_ERROR_CODE_RANGE: () => V,
  STANDARD_ERROR_MAP: () => A,
  formatErrorMessage: () => Be,
  formatJsonRpcError: () => ue,
  formatJsonRpcRequest: () => fe,
  formatJsonRpcResult: () => dt,
  getBigIntRpcId: () => ce,
  getError: () => G,
  getErrorByCode: () => W,
  isHttpUrl: () => Z,
  isJsonRpcError: () => K,
  isJsonRpcPayload: () => me,
  isJsonRpcRequest: () => Vt,
  isJsonRpcResponse: () => ge,
  isJsonRpcResult: () => Ve,
  isJsonRpcValidationInvalid: () => $t,
  isLocalhostUrl: () => qt,
  isNodeJs: () => Fe,
  isReservedErrorCode: () => $,
  isServerErrorCode: () => lt,
  isValidDefaultRoute: () => X,
  isValidErrorCode: () => Se,
  isValidLeadingWildcardRoute: () => Lt,
  isValidRoute: () => Nt,
  isValidTrailingWildcardRoute: () => Ut,
  isValidWildcardRoute: () => k,
  isWsUrl: () => Ft,
  parseConnectionError: () => se,
  payloadId: () => ae,
  validateJsonRpcError: () => ht,
});
var w = {};
oe(w, { isNodeJs: () => Fe });
var He = I(ye());
_(w, I(ye()));
var Fe = He.isNode;
_(E, w);
function Nt(e) {
  return e.includes("*") ? k(e) : !/\W/g.test(e);
}
function X(e) {
  return e === "*";
}
function k(e) {
  return X(e)
    ? !0
    : !(
        !e.includes("*") ||
        e.split("*").length !== 2 ||
        e.split("*").filter((t) => t.trim() === "").length !== 1
      );
}
function Lt(e) {
  return !X(e) && k(e) && !e.split("*")[0].trim();
}
function Ut(e) {
  return !X(e) && k(e) && !e.split("*")[1].trim();
}
var M = class {},
  be = class extends M {
    constructor(t) {
      super();
    }
  },
  Q = class extends M {
    constructor() {
      super();
    }
  },
  J = class extends Q {
    constructor(t) {
      super();
    }
  };
var Mt = "^https?:",
  Jt = "^wss?:";
function Ht(e) {
  let t = e.match(new RegExp(/^\w+:/, "gi"));
  if (!(!t || !t.length)) return t[0];
}
function qe(e, t) {
  let r = Ht(e);
  return typeof r > "u" ? !1 : new RegExp(t).test(r);
}
function Z(e) {
  return qe(e, Mt);
}
function Ft(e) {
  return qe(e, Jt);
}
function qt(e) {
  return new RegExp("wss?://localhost(:d{2,5})?").test(e);
}
function me(e) {
  return (
    typeof e == "object" && "id" in e && "jsonrpc" in e && e.jsonrpc === "2.0"
  );
}
function Vt(e) {
  return me(e) && "method" in e;
}
function ge(e) {
  return me(e) && (Ve(e) || K(e));
}
function Ve(e) {
  return "result" in e;
}
function K(e) {
  return "error" in e;
}
function $t(e) {
  return "error" in e && e.valid === !1;
}
var Ge = I(xe());
var $e = class extends J {
  constructor(t) {
    super(t),
      (this.events = new Ge.EventEmitter()),
      (this.hasRegisteredEventListeners = !1),
      (this.connection = this.setConnection(t)),
      this.connection.connected && this.registerEventListeners();
  }
  connect() {
    return R(this, arguments, function* (t = this.connection) {
      yield this.open(t);
    });
  }
  disconnect() {
    return R(this, null, function* () {
      yield this.close();
    });
  }
  on(t, r) {
    this.events.on(t, r);
  }
  once(t, r) {
    this.events.once(t, r);
  }
  off(t, r) {
    this.events.off(t, r);
  }
  removeListener(t, r) {
    this.events.removeListener(t, r);
  }
  request(t, r) {
    return R(this, null, function* () {
      return this.requestStrict(
        fe(t.method, t.params || [], t.id || ce().toString()),
        r
      );
    });
  }
  requestStrict(t, r) {
    return R(this, null, function* () {
      return new Promise((o, a) =>
        R(this, null, function* () {
          if (!this.connection.connected)
            try {
              yield this.open();
            } catch (s) {
              a(s);
            }
          this.events.on(`${t.id}`, (s) => {
            K(s) ? a(s.error) : o(s.result);
          });
          try {
            yield this.connection.send(t, r);
          } catch (s) {
            a(s);
          }
        })
      );
    });
  }
  setConnection(t = this.connection) {
    return t;
  }
  onPayload(t) {
    this.events.emit("payload", t),
      ge(t)
        ? this.events.emit(`${t.id}`, t)
        : this.events.emit("message", { type: t.method, data: t.params });
  }
  onClose(t) {
    t &&
      t.code === 3e3 &&
      this.events.emit(
        "error",
        new Error(
          `WebSocket connection closed abnormally with code: ${t.code} ${
            t.reason ? `(${t.reason})` : ""
          }`
        )
      ),
      this.events.emit("disconnect");
  }
  open() {
    return R(this, arguments, function* (t = this.connection) {
      (this.connection === t && this.connection.connected) ||
        (this.connection.connected && this.close(),
        typeof t == "string" &&
          (yield this.connection.open(t), (t = this.connection)),
        (this.connection = this.setConnection(t)),
        yield this.connection.open(),
        this.registerEventListeners(),
        this.events.emit("connect"));
    });
  }
  close() {
    return R(this, null, function* () {
      yield this.connection.close();
    });
  }
  registerEventListeners() {
    this.hasRegisteredEventListeners ||
      (this.connection.on("payload", (t) => this.onPayload(t)),
      this.connection.on("close", (t) => this.onClose(t)),
      this.connection.on("error", (t) => this.events.emit("error", t)),
      this.connection.on("register_error", (t) => this.onClose()),
      (this.hasRegisteredEventListeners = !0));
  }
};
var rt = I(xe()),
  we = I(ze());
var Gt = (e) =>
    JSON.stringify(e, (t, r) =>
      typeof r == "bigint" ? r.toString() + "n" : r
    ),
  Wt = (e) => {
    let t =
        /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g,
      r = e.replace(t, '$1"$2n"$3');
    return JSON.parse(r, (o, a) =>
      typeof a == "string" && a.match(/^\d+n$/)
        ? BigInt(a.substring(0, a.length - 1))
        : a
    );
  };
function Xe(e) {
  if (typeof e != "string")
    throw new Error(`Cannot safe json parse value of type ${typeof e}`);
  try {
    return Wt(e);
  } catch {
    return e;
  }
}
function ve(e) {
  return typeof e == "string" ? e : Gt(e) || "";
}
var zt = Object.defineProperty,
  Xt = Object.defineProperties,
  kt = Object.getOwnPropertyDescriptors,
  ke = Object.getOwnPropertySymbols,
  Qt = Object.prototype.hasOwnProperty,
  Zt = Object.prototype.propertyIsEnumerable,
  Qe = (e, t, r) =>
    t in e
      ? zt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  Ze = (e, t) => {
    for (var r in t || (t = {})) Qt.call(t, r) && Qe(e, r, t[r]);
    if (ke) for (var r of ke(t)) Zt.call(t, r) && Qe(e, r, t[r]);
    return e;
  },
  Ke = (e, t) => Xt(e, kt(t)),
  Kt = { Accept: "application/json", "Content-Type": "application/json" },
  Yt = "POST",
  Ye = { headers: Kt, method: Yt },
  et = 10,
  tt = class {
    constructor(t, r = !1) {
      if (
        ((this.url = t),
        (this.disableProviderPing = r),
        (this.events = new rt.EventEmitter()),
        (this.isAvailable = !1),
        (this.registering = !1),
        !Z(t))
      )
        throw new Error(
          `Provided URL is not compatible with HTTP connection: ${t}`
        );
      (this.url = t), (this.disableProviderPing = r);
    }
    get connected() {
      return this.isAvailable;
    }
    get connecting() {
      return this.registering;
    }
    on(t, r) {
      this.events.on(t, r);
    }
    once(t, r) {
      this.events.once(t, r);
    }
    off(t, r) {
      this.events.off(t, r);
    }
    removeListener(t, r) {
      this.events.removeListener(t, r);
    }
    open() {
      return R(this, arguments, function* (t = this.url) {
        yield this.register(t);
      });
    }
    close() {
      return R(this, null, function* () {
        if (!this.isAvailable) throw new Error("Connection already closed");
        this.onClose();
      });
    }
    send(t) {
      return R(this, null, function* () {
        this.isAvailable || (yield this.register());
        try {
          let r = ve(t),
            o = yield (yield (0, we.default)(
              this.url,
              Ke(Ze({}, Ye), { body: r })
            )).json();
          this.onPayload({ data: o });
        } catch (r) {
          this.onError(t.id, r);
        }
      });
    }
    register() {
      return R(this, arguments, function* (t = this.url) {
        if (!Z(t))
          throw new Error(
            `Provided URL is not compatible with HTTP connection: ${t}`
          );
        if (this.registering) {
          let r = this.events.getMaxListeners();
          return (
            (this.events.listenerCount("register_error") >= r ||
              this.events.listenerCount("open") >= r) &&
              this.events.setMaxListeners(r + 1),
            new Promise((o, a) => {
              this.events.once("register_error", (s) => {
                this.resetMaxListeners(), a(s);
              }),
                this.events.once("open", () => {
                  if ((this.resetMaxListeners(), typeof this.isAvailable > "u"))
                    return a(
                      new Error("HTTP connection is missing or invalid")
                    );
                  o();
                });
            })
          );
        }
        (this.url = t), (this.registering = !0);
        try {
          if (!this.disableProviderPing) {
            let r = ve({ id: 1, jsonrpc: "2.0", method: "test", params: [] });
            yield (0, we.default)(t, Ke(Ze({}, Ye), { body: r }));
          }
          this.onOpen();
        } catch (r) {
          let o = this.parseError(r);
          throw (this.events.emit("register_error", o), this.onClose(), o);
        }
      });
    }
    onOpen() {
      (this.isAvailable = !0),
        (this.registering = !1),
        this.events.emit("open");
    }
    onClose() {
      (this.isAvailable = !1),
        (this.registering = !1),
        this.events.emit("close");
    }
    onPayload(t) {
      if (typeof t.data > "u") return;
      let r = typeof t.data == "string" ? Xe(t.data) : t.data;
      this.events.emit("payload", r);
    }
    onError(t, r) {
      let o = this.parseError(r),
        a = o.message || o.toString(),
        s = ue(t, a);
      this.events.emit("payload", s);
    }
    parseError(t, r = this.url) {
      return se(t, r, "HTTP");
    }
    resetMaxListeners() {
      this.events.getMaxListeners() > et && this.events.setMaxListeners(et);
    }
  };
export {
  Xe as a,
  ve as b,
  se as c,
  ae as d,
  ce as e,
  fe as f,
  dt as g,
  ue as h,
  Ft as i,
  qt as j,
  Vt as k,
  ge as l,
  Ve as m,
  K as n,
  E as o,
  $e as p,
  tt as q,
};
