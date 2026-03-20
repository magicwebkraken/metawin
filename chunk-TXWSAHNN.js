import {
  a as xe,
  b as ve,
  c as gn,
  h as wn,
  i as Ht,
  j as Dn,
  o as jt,
} from "./chunk-H4BANHQJ.js";
import {
  a as ln,
  b as Wt,
  c as dn,
  d as hn,
  e as pn,
  f as bn,
} from "./chunk-IV5FR2YO.js";
import { a as fn } from "./chunk-TSLWMKS5.js";
import {
  a as I,
  b as it,
  g as Ji,
  h as Y,
  i as ne,
  k as st,
  l as at,
  n as y,
} from "./chunk-VNDKUXGB.js";
var He = {};
ne(He, {
  __assign: () => Vt,
  __asyncDelegator: () => cs,
  __asyncGenerator: () => us,
  __asyncValues: () => fs,
  __await: () => We,
  __awaiter: () => rs,
  __classPrivateFieldGet: () => ps,
  __classPrivateFieldSet: () => bs,
  __createBinding: () => os,
  __decorate: () => Qi,
  __exportStar: () => is,
  __extends: () => Xi,
  __generator: () => ns,
  __importDefault: () => hs,
  __importStar: () => ds,
  __makeTemplateObject: () => ls,
  __metadata: () => ts,
  __param: () => es,
  __read: () => mn,
  __rest: () => Zi,
  __spread: () => ss,
  __spreadArrays: () => as,
  __values: () => qt,
});
function Xi(e, t) {
  Kt(e, t);
  function r() {
    this.constructor = e;
  }
  e.prototype =
    t === null ? Object.create(t) : ((r.prototype = t.prototype), new r());
}
function Zi(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) &&
      t.indexOf(n) < 0 &&
      (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, n[o]) &&
        (r[n[o]] = e[n[o]]);
  return r;
}
function Qi(e, t, r, n) {
  var o = arguments.length,
    i =
      o < 3 ? t : n === null ? (n = Object.getOwnPropertyDescriptor(t, r)) : n,
    a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(e, t, r, n);
  else
    for (var f = e.length - 1; f >= 0; f--)
      (a = e[f]) && (i = (o < 3 ? a(i) : o > 3 ? a(t, r, i) : a(t, r)) || i);
  return o > 3 && i && Object.defineProperty(t, r, i), i;
}
function es(e, t) {
  return function (r, n) {
    t(r, n, e);
  };
}
function ts(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, t);
}
function rs(e, t, r, n) {
  function o(i) {
    return i instanceof r
      ? i
      : new r(function (a) {
          a(i);
        });
  }
  return new (r || (r = Promise))(function (i, a) {
    function f(s) {
      try {
        d(n.next(s));
      } catch (c) {
        a(c);
      }
    }
    function u(s) {
      try {
        d(n.throw(s));
      } catch (c) {
        a(c);
      }
    }
    function d(s) {
      s.done ? i(s.value) : o(s.value).then(f, u);
    }
    d((n = n.apply(e, t || [])).next());
  });
}
function ns(e, t) {
  var r = {
      label: 0,
      sent: function () {
        if (i[0] & 1) throw i[1];
        return i[1];
      },
      trys: [],
      ops: [],
    },
    n,
    o,
    i,
    a;
  return (
    (a = { next: f(0), throw: f(1), return: f(2) }),
    typeof Symbol == "function" &&
      (a[Symbol.iterator] = function () {
        return this;
      }),
    a
  );
  function f(d) {
    return function (s) {
      return u([d, s]);
    };
  }
  function u(d) {
    if (n) throw new TypeError("Generator is already executing.");
    for (; r; )
      try {
        if (
          ((n = 1),
          o &&
            (i =
              d[0] & 2
                ? o.return
                : d[0]
                ? o.throw || ((i = o.return) && i.call(o), 0)
                : o.next) &&
            !(i = i.call(o, d[1])).done)
        )
          return i;
        switch (((o = 0), i && (d = [d[0] & 2, i.value]), d[0])) {
          case 0:
          case 1:
            i = d;
            break;
          case 4:
            return r.label++, { value: d[1], done: !1 };
          case 5:
            r.label++, (o = d[1]), (d = [0]);
            continue;
          case 7:
            (d = r.ops.pop()), r.trys.pop();
            continue;
          default:
            if (
              ((i = r.trys),
              !(i = i.length > 0 && i[i.length - 1]) &&
                (d[0] === 6 || d[0] === 2))
            ) {
              r = 0;
              continue;
            }
            if (d[0] === 3 && (!i || (d[1] > i[0] && d[1] < i[3]))) {
              r.label = d[1];
              break;
            }
            if (d[0] === 6 && r.label < i[1]) {
              (r.label = i[1]), (i = d);
              break;
            }
            if (i && r.label < i[2]) {
              (r.label = i[2]), r.ops.push(d);
              break;
            }
            i[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        d = t.call(e, r);
      } catch (s) {
        (d = [6, s]), (o = 0);
      } finally {
        n = i = 0;
      }
    if (d[0] & 5) throw d[1];
    return { value: d[0] ? d[1] : void 0, done: !0 };
  }
}
function os(e, t, r, n) {
  n === void 0 && (n = r), (e[n] = t[r]);
}
function is(e, t) {
  for (var r in e) r !== "default" && !t.hasOwnProperty(r) && (t[r] = e[r]);
}
function qt(e) {
  var t = typeof Symbol == "function" && Symbol.iterator,
    r = t && e[t],
    n = 0;
  if (r) return r.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function () {
        return (
          e && n >= e.length && (e = void 0), { value: e && e[n++], done: !e }
        );
      },
    };
  throw new TypeError(
    t ? "Object is not iterable." : "Symbol.iterator is not defined."
  );
}
function mn(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r) return e;
  var n = r.call(e),
    o,
    i = [],
    a;
  try {
    for (; (t === void 0 || t-- > 0) && !(o = n.next()).done; ) i.push(o.value);
  } catch (f) {
    a = { error: f };
  } finally {
    try {
      o && !o.done && (r = n.return) && r.call(n);
    } finally {
      if (a) throw a.error;
    }
  }
  return i;
}
function ss() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e = e.concat(mn(arguments[t]));
  return e;
}
function as() {
  for (var e = 0, t = 0, r = arguments.length; t < r; t++)
    e += arguments[t].length;
  for (var n = Array(e), o = 0, t = 0; t < r; t++)
    for (var i = arguments[t], a = 0, f = i.length; a < f; a++, o++)
      n[o] = i[a];
  return n;
}
function We(e) {
  return this instanceof We ? ((this.v = e), this) : new We(e);
}
function us(e, t, r) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var n = r.apply(e, t || []),
    o,
    i = [];
  return (
    (o = {}),
    a("next"),
    a("throw"),
    a("return"),
    (o[Symbol.asyncIterator] = function () {
      return this;
    }),
    o
  );
  function a(l) {
    n[l] &&
      (o[l] = function (p) {
        return new Promise(function (h, b) {
          i.push([l, p, h, b]) > 1 || f(l, p);
        });
      });
  }
  function f(l, p) {
    try {
      u(n[l](p));
    } catch (h) {
      c(i[0][3], h);
    }
  }
  function u(l) {
    l.value instanceof We
      ? Promise.resolve(l.value.v).then(d, s)
      : c(i[0][2], l);
  }
  function d(l) {
    f("next", l);
  }
  function s(l) {
    f("throw", l);
  }
  function c(l, p) {
    l(p), i.shift(), i.length && f(i[0][0], i[0][1]);
  }
}
function cs(e) {
  var t, r;
  return (
    (t = {}),
    n("next"),
    n("throw", function (o) {
      throw o;
    }),
    n("return"),
    (t[Symbol.iterator] = function () {
      return this;
    }),
    t
  );
  function n(o, i) {
    t[o] = e[o]
      ? function (a) {
          return (r = !r)
            ? { value: We(e[o](a)), done: o === "return" }
            : i
            ? i(a)
            : a;
        }
      : i;
  }
}
function fs(e) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = e[Symbol.asyncIterator],
    r;
  return t
    ? t.call(e)
    : ((e = typeof qt == "function" ? qt(e) : e[Symbol.iterator]()),
      (r = {}),
      n("next"),
      n("throw"),
      n("return"),
      (r[Symbol.asyncIterator] = function () {
        return this;
      }),
      r);
  function n(i) {
    r[i] =
      e[i] &&
      function (a) {
        return new Promise(function (f, u) {
          (a = e[i](a)), o(f, u, a.done, a.value);
        });
      };
  }
  function o(i, a, f, u) {
    Promise.resolve(u).then(function (d) {
      i({ value: d, done: f });
    }, a);
  }
}
function ls(e, t) {
  return (
    Object.defineProperty
      ? Object.defineProperty(e, "raw", { value: t })
      : (e.raw = t),
    e
  );
}
function ds(e) {
  if (e && e.__esModule) return e;
  var t = {};
  if (e != null)
    for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
  return (t.default = e), t;
}
function hs(e) {
  return e && e.__esModule ? e : { default: e };
}
function ps(e, t) {
  if (!t.has(e))
    throw new TypeError("attempted to get private field on non-instance");
  return t.get(e);
}
function bs(e, t, r) {
  if (!t.has(e))
    throw new TypeError("attempted to set private field on non-instance");
  return t.set(e, r), r;
}
var Kt,
  Vt,
  je = Ji(() => {
    "use strict";
    Kt = function (e, t) {
      return (
        (Kt =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (r, n) {
              r.__proto__ = n;
            }) ||
          function (r, n) {
            for (var o in n) n.hasOwnProperty(o) && (r[o] = n[o]);
          }),
        Kt(e, t)
      );
    };
    Vt = function () {
      return (
        (Vt =
          Object.assign ||
          function (t) {
            for (var r, n = 1, o = arguments.length; n < o; n++) {
              r = arguments[n];
              for (var i in r)
                Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
            }
            return t;
          }),
        Vt.apply(this, arguments)
      );
    };
  });
var yn = Y((ut) => {
  "use strict";
  Object.defineProperty(ut, "__esModule", { value: !0 });
  ut.delay = void 0;
  function gs(e) {
    return new Promise((t) => {
      setTimeout(() => {
        t(!0);
      }, e);
    });
  }
  ut.delay = gs;
});
var En = Y((_e) => {
  "use strict";
  Object.defineProperty(_e, "__esModule", { value: !0 });
  _e.ONE_THOUSAND = _e.ONE_HUNDRED = void 0;
  _e.ONE_HUNDRED = 100;
  _e.ONE_THOUSAND = 1e3;
});
var xn = Y((m) => {
  "use strict";
  Object.defineProperty(m, "__esModule", { value: !0 });
  m.ONE_YEAR =
    m.FOUR_WEEKS =
    m.THREE_WEEKS =
    m.TWO_WEEKS =
    m.ONE_WEEK =
    m.THIRTY_DAYS =
    m.SEVEN_DAYS =
    m.FIVE_DAYS =
    m.THREE_DAYS =
    m.ONE_DAY =
    m.TWENTY_FOUR_HOURS =
    m.TWELVE_HOURS =
    m.SIX_HOURS =
    m.THREE_HOURS =
    m.ONE_HOUR =
    m.SIXTY_MINUTES =
    m.THIRTY_MINUTES =
    m.TEN_MINUTES =
    m.FIVE_MINUTES =
    m.ONE_MINUTE =
    m.SIXTY_SECONDS =
    m.THIRTY_SECONDS =
    m.TEN_SECONDS =
    m.FIVE_SECONDS =
    m.ONE_SECOND =
      void 0;
  m.ONE_SECOND = 1;
  m.FIVE_SECONDS = 5;
  m.TEN_SECONDS = 10;
  m.THIRTY_SECONDS = 30;
  m.SIXTY_SECONDS = 60;
  m.ONE_MINUTE = m.SIXTY_SECONDS;
  m.FIVE_MINUTES = m.ONE_MINUTE * 5;
  m.TEN_MINUTES = m.ONE_MINUTE * 10;
  m.THIRTY_MINUTES = m.ONE_MINUTE * 30;
  m.SIXTY_MINUTES = m.ONE_MINUTE * 60;
  m.ONE_HOUR = m.SIXTY_MINUTES;
  m.THREE_HOURS = m.ONE_HOUR * 3;
  m.SIX_HOURS = m.ONE_HOUR * 6;
  m.TWELVE_HOURS = m.ONE_HOUR * 12;
  m.TWENTY_FOUR_HOURS = m.ONE_HOUR * 24;
  m.ONE_DAY = m.TWENTY_FOUR_HOURS;
  m.THREE_DAYS = m.ONE_DAY * 3;
  m.FIVE_DAYS = m.ONE_DAY * 5;
  m.SEVEN_DAYS = m.ONE_DAY * 7;
  m.THIRTY_DAYS = m.ONE_DAY * 30;
  m.ONE_WEEK = m.SEVEN_DAYS;
  m.TWO_WEEKS = m.ONE_WEEK * 2;
  m.THREE_WEEKS = m.ONE_WEEK * 3;
  m.FOUR_WEEKS = m.ONE_WEEK * 4;
  m.ONE_YEAR = m.ONE_DAY * 365;
});
var $t = Y((ct) => {
  "use strict";
  Object.defineProperty(ct, "__esModule", { value: !0 });
  var vn = (je(), at(He));
  vn.__exportStar(En(), ct);
  vn.__exportStar(xn(), ct);
});
var Sn = Y((Be) => {
  "use strict";
  Object.defineProperty(Be, "__esModule", { value: !0 });
  Be.fromMiliseconds = Be.toMiliseconds = void 0;
  var An = $t();
  function ws(e) {
    return e * An.ONE_THOUSAND;
  }
  Be.toMiliseconds = ws;
  function Ds(e) {
    return Math.floor(e / An.ONE_THOUSAND);
  }
  Be.fromMiliseconds = Ds;
});
var Cn = Y((ft) => {
  "use strict";
  Object.defineProperty(ft, "__esModule", { value: !0 });
  var Fn = (je(), at(He));
  Fn.__exportStar(yn(), ft);
  Fn.__exportStar(Sn(), ft);
});
var In = Y((Ke) => {
  "use strict";
  Object.defineProperty(Ke, "__esModule", { value: !0 });
  Ke.Watch = void 0;
  var lt = class {
    constructor() {
      this.timestamps = new Map();
    }
    start(t) {
      if (this.timestamps.has(t))
        throw new Error(`Watch already started for label: ${t}`);
      this.timestamps.set(t, { started: Date.now() });
    }
    stop(t) {
      let r = this.get(t);
      if (typeof r.elapsed < "u")
        throw new Error(`Watch already stopped for label: ${t}`);
      let n = Date.now() - r.started;
      this.timestamps.set(t, { started: r.started, elapsed: n });
    }
    get(t) {
      let r = this.timestamps.get(t);
      if (typeof r > "u") throw new Error(`No timestamp found for label: ${t}`);
      return r;
    }
    elapsed(t) {
      let r = this.get(t);
      return r.elapsed || Date.now() - r.started;
    }
  };
  Ke.Watch = lt;
  Ke.default = lt;
});
var _n = Y((dt) => {
  "use strict";
  Object.defineProperty(dt, "__esModule", { value: !0 });
  dt.IWatch = void 0;
  var Gt = class {};
  dt.IWatch = Gt;
});
var Bn = Y((Yt) => {
  "use strict";
  Object.defineProperty(Yt, "__esModule", { value: !0 });
  var ms = (je(), at(He));
  ms.__exportStar(_n(), Yt);
});
var Jt = Y((Oe) => {
  "use strict";
  Object.defineProperty(Oe, "__esModule", { value: !0 });
  var ht = (je(), at(He));
  ht.__exportStar(Cn(), Oe);
  ht.__exportStar(In(), Oe);
  ht.__exportStar(Bn(), Oe);
  ht.__exportStar($t(), Oe);
});
var _o = Y((L) => {
  "use strict";
  Object.defineProperty(L, "__esModule", { value: !0 });
  L.getLocalStorage =
    L.getLocalStorageOrThrow =
    L.getCrypto =
    L.getCryptoOrThrow =
    L.getLocation =
    L.getLocationOrThrow =
    L.getNavigator =
    L.getNavigatorOrThrow =
    L.getDocument =
    L.getDocumentOrThrow =
    L.getFromWindowOrThrow =
    L.getFromWindow =
      void 0;
  function Se(e) {
    let t;
    return typeof window < "u" && typeof window[e] < "u" && (t = window[e]), t;
  }
  L.getFromWindow = Se;
  function Ue(e) {
    let t = Se(e);
    if (!t) throw new Error(`${e} is not defined in Window`);
    return t;
  }
  L.getFromWindowOrThrow = Ue;
  function pc() {
    return Ue("document");
  }
  L.getDocumentOrThrow = pc;
  function bc() {
    return Se("document");
  }
  L.getDocument = bc;
  function gc() {
    return Ue("navigator");
  }
  L.getNavigatorOrThrow = gc;
  function wc() {
    return Se("navigator");
  }
  L.getNavigator = wc;
  function Dc() {
    return Ue("location");
  }
  L.getLocationOrThrow = Dc;
  function mc() {
    return Se("location");
  }
  L.getLocation = mc;
  function yc() {
    return Ue("crypto");
  }
  L.getCryptoOrThrow = yc;
  function Ec() {
    return Se("crypto");
  }
  L.getCrypto = Ec;
  function xc() {
    return Ue("localStorage");
  }
  L.getLocalStorageOrThrow = xc;
  function vc() {
    return Se("localStorage");
  }
  L.getLocalStorage = vc;
});
var Sc = Y((vt) => {
  "use strict";
  Object.defineProperty(vt, "__esModule", { value: !0 });
  vt.getWindowMetadata = void 0;
  var Bo = _o();
  function Ac() {
    let e, t;
    try {
      (e = Bo.getDocumentOrThrow()), (t = Bo.getLocationOrThrow());
    } catch {
      return null;
    }
    function r() {
      let c = e.getElementsByTagName("link"),
        l = [];
      for (let p = 0; p < c.length; p++) {
        let h = c[p],
          b = h.getAttribute("rel");
        if (b && b.toLowerCase().indexOf("icon") > -1) {
          let g = h.getAttribute("href");
          if (g)
            if (
              g.toLowerCase().indexOf("https:") === -1 &&
              g.toLowerCase().indexOf("http:") === -1 &&
              g.indexOf("//") !== 0
            ) {
              let x = t.protocol + "//" + t.host;
              if (g.indexOf("/") === 0) x += g;
              else {
                let v = t.pathname.split("/");
                v.pop();
                let w = v.join("/");
                x += w + "/" + g;
              }
              l.push(x);
            } else if (g.indexOf("//") === 0) {
              let x = t.protocol + g;
              l.push(x);
            } else l.push(g);
        }
      }
      return l;
    }
    function n(...c) {
      let l = e.getElementsByTagName("meta");
      for (let p = 0; p < l.length; p++) {
        let h = l[p],
          b = ["itemprop", "property", "name"]
            .map((g) => h.getAttribute(g))
            .filter((g) => (g ? c.includes(g) : !1));
        if (b.length && b) {
          let g = h.getAttribute("content");
          if (g) return g;
        }
      }
      return "";
    }
    function o() {
      let c = n("name", "og:site_name", "og:title", "twitter:title");
      return c || (c = e.title), c;
    }
    function i() {
      return n(
        "description",
        "og:description",
        "twitter:description",
        "keywords"
      );
    }
    let a = o(),
      f = i(),
      u = t.origin,
      d = r();
    return { description: f, url: u, icons: d, name: a };
  }
  vt.getWindowMetadata = Ac;
});
var Cr = Y((Vl, zo) => {
  "use strict";
  var Bc = "Input must be an string, Buffer or Uint8Array";
  function Oc(e) {
    let t;
    if (e instanceof Uint8Array) t = e;
    else if (typeof e == "string") t = new TextEncoder().encode(e);
    else throw new Error(Bc);
    return t;
  }
  function Nc(e) {
    return Array.prototype.map
      .call(e, function (t) {
        return (t < 16 ? "0" : "") + t.toString(16);
      })
      .join("");
  }
  function It(e) {
    return (4294967296 + e).toString(16).substring(1);
  }
  function Tc(e, t, r) {
    let n =
      `
` +
      e +
      " = ";
    for (let o = 0; o < t.length; o += 2) {
      if (r === 32)
        (n += It(t[o]).toUpperCase()),
          (n += " "),
          (n += It(t[o + 1]).toUpperCase());
      else if (r === 64)
        (n += It(t[o + 1]).toUpperCase()), (n += It(t[o]).toUpperCase());
      else throw new Error("Invalid size " + r);
      o % 6 === 4
        ? (n +=
            `
` + new Array(e.length + 4).join(" "))
        : o < t.length - 2 && (n += " ");
    }
    console.log(n);
  }
  function Uc(e, t, r) {
    let n = new Date().getTime(),
      o = new Uint8Array(t);
    for (let a = 0; a < t; a++) o[a] = a % 256;
    let i = new Date().getTime();
    console.log("Generated random input in " + (i - n) + "ms"), (n = i);
    for (let a = 0; a < r; a++) {
      let f = e(o),
        u = new Date().getTime(),
        d = u - n;
      (n = u),
        console.log("Hashed in " + d + "ms: " + f.substring(0, 20) + "..."),
        console.log(
          Math.round((t / (1 << 20) / (d / 1e3)) * 100) / 100 + " MB PER SECOND"
        );
    }
  }
  zo.exports = { normalizeInput: Oc, toHex: Nc, debugPrint: Tc, testSpeed: Uc };
});
var Yo = Y((ql, Go) => {
  "use strict";
  var Bt = Cr();
  function _t(e, t, r) {
    let n = e[t] + e[r],
      o = e[t + 1] + e[r + 1];
    n >= 4294967296 && o++, (e[t] = n), (e[t + 1] = o);
  }
  function Wo(e, t, r, n) {
    let o = e[t] + r;
    r < 0 && (o += 4294967296);
    let i = e[t + 1] + n;
    o >= 4294967296 && i++, (e[t] = o), (e[t + 1] = i);
  }
  function Ho(e, t) {
    return e[t] ^ (e[t + 1] << 8) ^ (e[t + 2] << 16) ^ (e[t + 3] << 24);
  }
  function ge(e, t, r, n, o, i) {
    let a = Ge[o],
      f = Ge[o + 1],
      u = Ge[i],
      d = Ge[i + 1];
    _t(C, e, t), Wo(C, e, a, f);
    let s = C[n] ^ C[e],
      c = C[n + 1] ^ C[e + 1];
    (C[n] = c),
      (C[n + 1] = s),
      _t(C, r, n),
      (s = C[t] ^ C[r]),
      (c = C[t + 1] ^ C[r + 1]),
      (C[t] = (s >>> 24) ^ (c << 8)),
      (C[t + 1] = (c >>> 24) ^ (s << 8)),
      _t(C, e, t),
      Wo(C, e, u, d),
      (s = C[n] ^ C[e]),
      (c = C[n + 1] ^ C[e + 1]),
      (C[n] = (s >>> 16) ^ (c << 16)),
      (C[n + 1] = (c >>> 16) ^ (s << 16)),
      _t(C, r, n),
      (s = C[t] ^ C[r]),
      (c = C[t + 1] ^ C[r + 1]),
      (C[t] = (c >>> 31) ^ (s << 1)),
      (C[t + 1] = (s >>> 31) ^ (c << 1));
  }
  var jo = new Uint32Array([
      4089235720, 1779033703, 2227873595, 3144134277, 4271175723, 1013904242,
      1595750129, 2773480762, 2917565137, 1359893119, 725511199, 2600822924,
      4215389547, 528734635, 327033209, 1541459225,
    ]),
    Rc = [
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 14, 10, 4, 8, 9, 15,
      13, 6, 1, 12, 0, 2, 11, 7, 5, 3, 11, 8, 12, 0, 5, 2, 15, 13, 10, 14, 3, 6,
      7, 1, 9, 4, 7, 9, 3, 1, 13, 12, 11, 14, 2, 6, 5, 10, 4, 0, 15, 8, 9, 0, 5,
      7, 2, 4, 10, 15, 14, 1, 11, 12, 6, 8, 3, 13, 2, 12, 6, 10, 0, 11, 8, 3, 4,
      13, 7, 5, 15, 14, 1, 9, 12, 5, 1, 15, 14, 13, 4, 10, 0, 7, 6, 3, 9, 2, 8,
      11, 13, 11, 7, 14, 12, 1, 3, 9, 5, 0, 15, 4, 8, 6, 2, 10, 6, 15, 14, 9,
      11, 3, 0, 8, 12, 2, 13, 7, 1, 4, 10, 5, 10, 2, 8, 4, 7, 6, 1, 5, 15, 11,
      9, 14, 3, 12, 13, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
      14, 10, 4, 8, 9, 15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3,
    ],
    Z = new Uint8Array(
      Rc.map(function (e) {
        return e * 2;
      })
    ),
    C = new Uint32Array(32),
    Ge = new Uint32Array(32);
  function Ko(e, t) {
    let r = 0;
    for (r = 0; r < 16; r++) (C[r] = e.h[r]), (C[r + 16] = jo[r]);
    for (
      C[24] = C[24] ^ e.t,
        C[25] = C[25] ^ (e.t / 4294967296),
        t && ((C[28] = ~C[28]), (C[29] = ~C[29])),
        r = 0;
      r < 32;
      r++
    )
      Ge[r] = Ho(e.b, 4 * r);
    for (r = 0; r < 12; r++)
      ge(0, 8, 16, 24, Z[r * 16 + 0], Z[r * 16 + 1]),
        ge(2, 10, 18, 26, Z[r * 16 + 2], Z[r * 16 + 3]),
        ge(4, 12, 20, 28, Z[r * 16 + 4], Z[r * 16 + 5]),
        ge(6, 14, 22, 30, Z[r * 16 + 6], Z[r * 16 + 7]),
        ge(0, 10, 20, 30, Z[r * 16 + 8], Z[r * 16 + 9]),
        ge(2, 12, 22, 24, Z[r * 16 + 10], Z[r * 16 + 11]),
        ge(4, 14, 16, 26, Z[r * 16 + 12], Z[r * 16 + 13]),
        ge(6, 8, 18, 28, Z[r * 16 + 14], Z[r * 16 + 15]);
    for (r = 0; r < 16; r++) e.h[r] = e.h[r] ^ C[r] ^ C[r + 16];
  }
  var we = new Uint8Array([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);
  function Vo(e, t, r, n) {
    if (e === 0 || e > 64)
      throw new Error("Illegal output length, expected 0 < length <= 64");
    if (t && t.length > 64)
      throw new Error("Illegal key, expected Uint8Array with 0 < length <= 64");
    if (r && r.length !== 16)
      throw new Error("Illegal salt, expected Uint8Array with length is 16");
    if (n && n.length !== 16)
      throw new Error(
        "Illegal personal, expected Uint8Array with length is 16"
      );
    let o = {
      b: new Uint8Array(128),
      h: new Uint32Array(16),
      t: 0,
      c: 0,
      outlen: e,
    };
    we.fill(0),
      (we[0] = e),
      t && (we[1] = t.length),
      (we[2] = 1),
      (we[3] = 1),
      r && we.set(r, 32),
      n && we.set(n, 48);
    for (let i = 0; i < 16; i++) o.h[i] = jo[i] ^ Ho(we, i * 4);
    return t && (Ir(o, t), (o.c = 128)), o;
  }
  function Ir(e, t) {
    for (let r = 0; r < t.length; r++)
      e.c === 128 && ((e.t += e.c), Ko(e, !1), (e.c = 0)), (e.b[e.c++] = t[r]);
  }
  function qo(e) {
    for (e.t += e.c; e.c < 128; ) e.b[e.c++] = 0;
    Ko(e, !0);
    let t = new Uint8Array(e.outlen);
    for (let r = 0; r < e.outlen; r++) t[r] = e.h[r >> 2] >> (8 * (r & 3));
    return t;
  }
  function $o(e, t, r, n, o) {
    (r = r || 64),
      (e = Bt.normalizeInput(e)),
      n && (n = Bt.normalizeInput(n)),
      o && (o = Bt.normalizeInput(o));
    let i = Vo(r, t, n, o);
    return Ir(i, e), qo(i);
  }
  function Mc(e, t, r, n, o) {
    let i = $o(e, t, r, n, o);
    return Bt.toHex(i);
  }
  Go.exports = {
    blake2b: $o,
    blake2bHex: Mc,
    blake2bInit: Vo,
    blake2bUpdate: Ir,
    blake2bFinal: qo,
  };
});
var ni = Y(($l, ri) => {
  "use strict";
  var Jo = Cr();
  function Pc(e, t) {
    return e[t] ^ (e[t + 1] << 8) ^ (e[t + 2] << 16) ^ (e[t + 3] << 24);
  }
  function De(e, t, r, n, o, i) {
    (T[e] = T[e] + T[t] + o),
      (T[n] = Ot(T[n] ^ T[e], 16)),
      (T[r] = T[r] + T[n]),
      (T[t] = Ot(T[t] ^ T[r], 12)),
      (T[e] = T[e] + T[t] + i),
      (T[n] = Ot(T[n] ^ T[e], 8)),
      (T[r] = T[r] + T[n]),
      (T[t] = Ot(T[t] ^ T[r], 7));
  }
  function Ot(e, t) {
    return (e >>> t) ^ (e << (32 - t));
  }
  var Xo = new Uint32Array([
      1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924,
      528734635, 1541459225,
    ]),
    Q = new Uint8Array([
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 14, 10, 4, 8, 9, 15,
      13, 6, 1, 12, 0, 2, 11, 7, 5, 3, 11, 8, 12, 0, 5, 2, 15, 13, 10, 14, 3, 6,
      7, 1, 9, 4, 7, 9, 3, 1, 13, 12, 11, 14, 2, 6, 5, 10, 4, 0, 15, 8, 9, 0, 5,
      7, 2, 4, 10, 15, 14, 1, 11, 12, 6, 8, 3, 13, 2, 12, 6, 10, 0, 11, 8, 3, 4,
      13, 7, 5, 15, 14, 1, 9, 12, 5, 1, 15, 14, 13, 4, 10, 0, 7, 6, 3, 9, 2, 8,
      11, 13, 11, 7, 14, 12, 1, 3, 9, 5, 0, 15, 4, 8, 6, 2, 10, 6, 15, 14, 9,
      11, 3, 0, 8, 12, 2, 13, 7, 1, 4, 10, 5, 10, 2, 8, 4, 7, 6, 1, 5, 15, 11,
      9, 14, 3, 12, 13, 0,
    ]),
    T = new Uint32Array(16),
    X = new Uint32Array(16);
  function Zo(e, t) {
    let r = 0;
    for (r = 0; r < 8; r++) (T[r] = e.h[r]), (T[r + 8] = Xo[r]);
    for (
      T[12] ^= e.t, T[13] ^= e.t / 4294967296, t && (T[14] = ~T[14]), r = 0;
      r < 16;
      r++
    )
      X[r] = Pc(e.b, 4 * r);
    for (r = 0; r < 10; r++)
      De(0, 4, 8, 12, X[Q[r * 16 + 0]], X[Q[r * 16 + 1]]),
        De(1, 5, 9, 13, X[Q[r * 16 + 2]], X[Q[r * 16 + 3]]),
        De(2, 6, 10, 14, X[Q[r * 16 + 4]], X[Q[r * 16 + 5]]),
        De(3, 7, 11, 15, X[Q[r * 16 + 6]], X[Q[r * 16 + 7]]),
        De(0, 5, 10, 15, X[Q[r * 16 + 8]], X[Q[r * 16 + 9]]),
        De(1, 6, 11, 12, X[Q[r * 16 + 10]], X[Q[r * 16 + 11]]),
        De(2, 7, 8, 13, X[Q[r * 16 + 12]], X[Q[r * 16 + 13]]),
        De(3, 4, 9, 14, X[Q[r * 16 + 14]], X[Q[r * 16 + 15]]);
    for (r = 0; r < 8; r++) e.h[r] ^= T[r] ^ T[r + 8];
  }
  function Qo(e, t) {
    if (!(e > 0 && e <= 32))
      throw new Error("Incorrect output length, should be in [1, 32]");
    let r = t ? t.length : 0;
    if (t && !(r > 0 && r <= 32))
      throw new Error("Incorrect key length, should be in [1, 32]");
    let n = {
      h: new Uint32Array(Xo),
      b: new Uint8Array(64),
      c: 0,
      t: 0,
      outlen: e,
    };
    return (
      (n.h[0] ^= 16842752 ^ (r << 8) ^ e), r > 0 && (_r(n, t), (n.c = 64)), n
    );
  }
  function _r(e, t) {
    for (let r = 0; r < t.length; r++)
      e.c === 64 && ((e.t += e.c), Zo(e, !1), (e.c = 0)), (e.b[e.c++] = t[r]);
  }
  function ei(e) {
    for (e.t += e.c; e.c < 64; ) e.b[e.c++] = 0;
    Zo(e, !0);
    let t = new Uint8Array(e.outlen);
    for (let r = 0; r < e.outlen; r++)
      t[r] = (e.h[r >> 2] >> (8 * (r & 3))) & 255;
    return t;
  }
  function ti(e, t, r) {
    (r = r || 32), (e = Jo.normalizeInput(e));
    let n = Qo(r, t);
    return _r(n, e), ei(n);
  }
  function kc(e, t, r) {
    let n = ti(e, t, r);
    return Jo.toHex(n);
  }
  ri.exports = {
    blake2s: ti,
    blake2sHex: kc,
    blake2sInit: Qo,
    blake2sUpdate: _r,
    blake2sFinal: ei,
  };
});
var Lc = Y((Gl, oi) => {
  "use strict";
  var Ye = Yo(),
    Je = ni();
  oi.exports = {
    blake2b: Ye.blake2b,
    blake2bHex: Ye.blake2bHex,
    blake2bInit: Ye.blake2bInit,
    blake2bUpdate: Ye.blake2bUpdate,
    blake2bFinal: Ye.blake2bFinal,
    blake2s: Je.blake2s,
    blake2sHex: Je.blake2sHex,
    blake2sInit: Je.blake2sInit,
    blake2sUpdate: Je.blake2sUpdate,
    blake2sFinal: Je.blake2sFinal,
  };
});
var Pi = Y((Xd, Mi) => {
  "use strict";
  Mi.exports = function () {
    throw new Error(
      "ws does not work in the browser. Browser clients must use the native WebSocket object"
    );
  };
});
var Yn = st(Jt());
function ys(e) {
  return (
    e instanceof Uint8Array ||
    (ArrayBuffer.isView(e) && e.constructor.name === "Uint8Array")
  );
}
function Jn(e, ...t) {
  if (!ys(e)) throw new Error("Uint8Array expected");
  if (t.length > 0 && !t.includes(e.length))
    throw new Error(
      "Uint8Array expected of length " + t + ", got length=" + e.length
    );
}
function On(e, t = !0) {
  if (e.destroyed) throw new Error("Hash instance has been destroyed");
  if (t && e.finished) throw new Error("Hash#digest() has already been called");
}
function Es(e, t) {
  Jn(e);
  let r = t.outputLen;
  if (e.length < r)
    throw new Error(
      "digestInto() expects output buffer of length at least " + r
    );
}
var Ne =
  typeof globalThis == "object" && "crypto" in globalThis
    ? globalThis.crypto
    : void 0;
var Xt = (e) => new DataView(e.buffer, e.byteOffset, e.byteLength);
function xs(e) {
  if (typeof e != "string")
    throw new Error("utf8ToBytes expected string, got " + typeof e);
  return new Uint8Array(new TextEncoder().encode(e));
}
function Xn(e) {
  return typeof e == "string" && (e = xs(e)), Jn(e), e;
}
var ir = class {
  clone() {
    return this._cloneInto();
  }
};
function vs(e) {
  let t = (n) => e().update(Xn(n)).digest(),
    r = e();
  return (
    (t.outputLen = r.outputLen),
    (t.blockLen = r.blockLen),
    (t.create = () => e()),
    t
  );
}
function Zn(e = 32) {
  if (Ne && typeof Ne.getRandomValues == "function")
    return Ne.getRandomValues(new Uint8Array(e));
  if (Ne && typeof Ne.randomBytes == "function") return Ne.randomBytes(e);
  throw new Error("crypto.getRandomValues must be defined");
}
function As(e, t, r, n) {
  if (typeof e.setBigUint64 == "function") return e.setBigUint64(t, r, n);
  let o = BigInt(32),
    i = BigInt(4294967295),
    a = Number((r >> o) & i),
    f = Number(r & i),
    u = n ? 4 : 0,
    d = n ? 0 : 4;
  e.setUint32(t + u, a, n), e.setUint32(t + d, f, n);
}
var sr = class extends ir {
    constructor(t, r, n, o) {
      super(),
        (this.blockLen = t),
        (this.outputLen = r),
        (this.padOffset = n),
        (this.isLE = o),
        (this.finished = !1),
        (this.length = 0),
        (this.pos = 0),
        (this.destroyed = !1),
        (this.buffer = new Uint8Array(t)),
        (this.view = Xt(this.buffer));
    }
    update(t) {
      On(this);
      let { view: r, buffer: n, blockLen: o } = this;
      t = Xn(t);
      let i = t.length;
      for (let a = 0; a < i; ) {
        let f = Math.min(o - this.pos, i - a);
        if (f === o) {
          let u = Xt(t);
          for (; o <= i - a; a += o) this.process(u, a);
          continue;
        }
        n.set(t.subarray(a, a + f), this.pos),
          (this.pos += f),
          (a += f),
          this.pos === o && (this.process(r, 0), (this.pos = 0));
      }
      return (this.length += t.length), this.roundClean(), this;
    }
    digestInto(t) {
      On(this), Es(t, this), (this.finished = !0);
      let { buffer: r, view: n, blockLen: o, isLE: i } = this,
        { pos: a } = this;
      (r[a++] = 128),
        this.buffer.subarray(a).fill(0),
        this.padOffset > o - a && (this.process(n, 0), (a = 0));
      for (let c = a; c < o; c++) r[c] = 0;
      As(n, o - 8, BigInt(this.length * 8), i), this.process(n, 0);
      let f = Xt(t),
        u = this.outputLen;
      if (u % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
      let d = u / 4,
        s = this.get();
      if (d > s.length) throw new Error("_sha2: outputLen bigger than state");
      for (let c = 0; c < d; c++) f.setUint32(4 * c, s[c], i);
    }
    digest() {
      let { buffer: t, outputLen: r } = this;
      this.digestInto(t);
      let n = t.slice(0, r);
      return this.destroy(), n;
    }
    _cloneInto(t) {
      t || (t = new this.constructor()), t.set(...this.get());
      let {
        blockLen: r,
        buffer: n,
        length: o,
        finished: i,
        destroyed: a,
        pos: f,
      } = this;
      return (
        (t.length = o),
        (t.pos = f),
        (t.finished = i),
        (t.destroyed = a),
        o % r && t.buffer.set(n),
        t
      );
    }
  },
  pt = BigInt(2 ** 32 - 1),
  ar = BigInt(32);
function Qn(e, t = !1) {
  return t
    ? { h: Number(e & pt), l: Number((e >> ar) & pt) }
    : { h: Number((e >> ar) & pt) | 0, l: Number(e & pt) | 0 };
}
function Ss(e, t = !1) {
  let r = new Uint32Array(e.length),
    n = new Uint32Array(e.length);
  for (let o = 0; o < e.length; o++) {
    let { h: i, l: a } = Qn(e[o], t);
    [r[o], n[o]] = [i, a];
  }
  return [r, n];
}
var Fs = (e, t) => (BigInt(e >>> 0) << ar) | BigInt(t >>> 0),
  Cs = (e, t, r) => e >>> r,
  Is = (e, t, r) => (e << (32 - r)) | (t >>> r),
  _s = (e, t, r) => (e >>> r) | (t << (32 - r)),
  Bs = (e, t, r) => (e << (32 - r)) | (t >>> r),
  Os = (e, t, r) => (e << (64 - r)) | (t >>> (r - 32)),
  Ns = (e, t, r) => (e >>> (r - 32)) | (t << (64 - r)),
  Ts = (e, t) => t,
  Us = (e, t) => e,
  Rs = (e, t, r) => (e << r) | (t >>> (32 - r)),
  Ms = (e, t, r) => (t << r) | (e >>> (32 - r)),
  Ps = (e, t, r) => (t << (r - 32)) | (e >>> (64 - r)),
  ks = (e, t, r) => (e << (r - 32)) | (t >>> (64 - r));
function Ls(e, t, r, n) {
  let o = (t >>> 0) + (n >>> 0);
  return { h: (e + r + ((o / 2 ** 32) | 0)) | 0, l: o | 0 };
}
var zs = (e, t, r) => (e >>> 0) + (t >>> 0) + (r >>> 0),
  Ws = (e, t, r, n) => (t + r + n + ((e / 2 ** 32) | 0)) | 0,
  Hs = (e, t, r, n) => (e >>> 0) + (t >>> 0) + (r >>> 0) + (n >>> 0),
  js = (e, t, r, n, o) => (t + r + n + o + ((e / 2 ** 32) | 0)) | 0,
  Ks = (e, t, r, n, o) =>
    (e >>> 0) + (t >>> 0) + (r >>> 0) + (n >>> 0) + (o >>> 0),
  Vs = (e, t, r, n, o, i) => (t + r + n + o + i + ((e / 2 ** 32) | 0)) | 0,
  _ = {
    fromBig: Qn,
    split: Ss,
    toBig: Fs,
    shrSH: Cs,
    shrSL: Is,
    rotrSH: _s,
    rotrSL: Bs,
    rotrBH: Os,
    rotrBL: Ns,
    rotr32H: Ts,
    rotr32L: Us,
    rotlSH: Rs,
    rotlSL: Ms,
    rotlBH: Ps,
    rotlBL: ks,
    add: Ls,
    add3L: zs,
    add3H: Ws,
    add4L: Hs,
    add4H: js,
    add5H: Vs,
    add5L: Ks,
  },
  [qs, $s] = _.split(
    [
      "0x428a2f98d728ae22",
      "0x7137449123ef65cd",
      "0xb5c0fbcfec4d3b2f",
      "0xe9b5dba58189dbbc",
      "0x3956c25bf348b538",
      "0x59f111f1b605d019",
      "0x923f82a4af194f9b",
      "0xab1c5ed5da6d8118",
      "0xd807aa98a3030242",
      "0x12835b0145706fbe",
      "0x243185be4ee4b28c",
      "0x550c7dc3d5ffb4e2",
      "0x72be5d74f27b896f",
      "0x80deb1fe3b1696b1",
      "0x9bdc06a725c71235",
      "0xc19bf174cf692694",
      "0xe49b69c19ef14ad2",
      "0xefbe4786384f25e3",
      "0x0fc19dc68b8cd5b5",
      "0x240ca1cc77ac9c65",
      "0x2de92c6f592b0275",
      "0x4a7484aa6ea6e483",
      "0x5cb0a9dcbd41fbd4",
      "0x76f988da831153b5",
      "0x983e5152ee66dfab",
      "0xa831c66d2db43210",
      "0xb00327c898fb213f",
      "0xbf597fc7beef0ee4",
      "0xc6e00bf33da88fc2",
      "0xd5a79147930aa725",
      "0x06ca6351e003826f",
      "0x142929670a0e6e70",
      "0x27b70a8546d22ffc",
      "0x2e1b21385c26c926",
      "0x4d2c6dfc5ac42aed",
      "0x53380d139d95b3df",
      "0x650a73548baf63de",
      "0x766a0abb3c77b2a8",
      "0x81c2c92e47edaee6",
      "0x92722c851482353b",
      "0xa2bfe8a14cf10364",
      "0xa81a664bbc423001",
      "0xc24b8b70d0f89791",
      "0xc76c51a30654be30",
      "0xd192e819d6ef5218",
      "0xd69906245565a910",
      "0xf40e35855771202a",
      "0x106aa07032bbd1b8",
      "0x19a4c116b8d2d0c8",
      "0x1e376c085141ab53",
      "0x2748774cdf8eeb99",
      "0x34b0bcb5e19b48a8",
      "0x391c0cb3c5c95a63",
      "0x4ed8aa4ae3418acb",
      "0x5b9cca4f7763e373",
      "0x682e6ff3d6b2b8a3",
      "0x748f82ee5defb2fc",
      "0x78a5636f43172f60",
      "0x84c87814a1f0ab72",
      "0x8cc702081a6439ec",
      "0x90befffa23631e28",
      "0xa4506cebde82bde9",
      "0xbef9a3f7b2c67915",
      "0xc67178f2e372532b",
      "0xca273eceea26619c",
      "0xd186b8c721c0c207",
      "0xeada7dd6cde0eb1e",
      "0xf57d4f7fee6ed178",
      "0x06f067aa72176fba",
      "0x0a637dc5a2c898a6",
      "0x113f9804bef90dae",
      "0x1b710b35131c471b",
      "0x28db77f523047d84",
      "0x32caab7b40c72493",
      "0x3c9ebe0a15c9bebc",
      "0x431d67c49c100d4c",
      "0x4cc5d4becb3e42b6",
      "0x597f299cfc657e2a",
      "0x5fcb6fab3ad6faec",
      "0x6c44198c4a475817",
    ].map((e) => BigInt(e))
  ),
  pe = new Uint32Array(80),
  be = new Uint32Array(80),
  ur = class extends sr {
    constructor() {
      super(128, 64, 16, !1),
        (this.Ah = 1779033703),
        (this.Al = -205731576),
        (this.Bh = -1150833019),
        (this.Bl = -2067093701),
        (this.Ch = 1013904242),
        (this.Cl = -23791573),
        (this.Dh = -1521486534),
        (this.Dl = 1595750129),
        (this.Eh = 1359893119),
        (this.El = -1377402159),
        (this.Fh = -1694144372),
        (this.Fl = 725511199),
        (this.Gh = 528734635),
        (this.Gl = -79577749),
        (this.Hh = 1541459225),
        (this.Hl = 327033209);
    }
    get() {
      let {
        Ah: t,
        Al: r,
        Bh: n,
        Bl: o,
        Ch: i,
        Cl: a,
        Dh: f,
        Dl: u,
        Eh: d,
        El: s,
        Fh: c,
        Fl: l,
        Gh: p,
        Gl: h,
        Hh: b,
        Hl: g,
      } = this;
      return [t, r, n, o, i, a, f, u, d, s, c, l, p, h, b, g];
    }
    set(t, r, n, o, i, a, f, u, d, s, c, l, p, h, b, g) {
      (this.Ah = t | 0),
        (this.Al = r | 0),
        (this.Bh = n | 0),
        (this.Bl = o | 0),
        (this.Ch = i | 0),
        (this.Cl = a | 0),
        (this.Dh = f | 0),
        (this.Dl = u | 0),
        (this.Eh = d | 0),
        (this.El = s | 0),
        (this.Fh = c | 0),
        (this.Fl = l | 0),
        (this.Gh = p | 0),
        (this.Gl = h | 0),
        (this.Hh = b | 0),
        (this.Hl = g | 0);
    }
    process(t, r) {
      for (let w = 0; w < 16; w++, r += 4)
        (pe[w] = t.getUint32(r)), (be[w] = t.getUint32((r += 4)));
      for (let w = 16; w < 80; w++) {
        let A = pe[w - 15] | 0,
          B = be[w - 15] | 0,
          M = _.rotrSH(A, B, 1) ^ _.rotrSH(A, B, 8) ^ _.shrSH(A, B, 7),
          R = _.rotrSL(A, B, 1) ^ _.rotrSL(A, B, 8) ^ _.shrSL(A, B, 7),
          O = pe[w - 2] | 0,
          z = be[w - 2] | 0,
          Ce = _.rotrSH(O, z, 19) ^ _.rotrBH(O, z, 61) ^ _.shrSH(O, z, 6),
          ye = _.rotrSL(O, z, 19) ^ _.rotrBL(O, z, 61) ^ _.shrSL(O, z, 6),
          Ie = _.add4L(R, ye, be[w - 7], be[w - 16]),
          ze = _.add4H(Ie, M, Ce, pe[w - 7], pe[w - 16]);
        (pe[w] = ze | 0), (be[w] = Ie | 0);
      }
      let {
        Ah: n,
        Al: o,
        Bh: i,
        Bl: a,
        Ch: f,
        Cl: u,
        Dh: d,
        Dl: s,
        Eh: c,
        El: l,
        Fh: p,
        Fl: h,
        Gh: b,
        Gl: g,
        Hh: x,
        Hl: v,
      } = this;
      for (let w = 0; w < 80; w++) {
        let A = _.rotrSH(c, l, 14) ^ _.rotrSH(c, l, 18) ^ _.rotrBH(c, l, 41),
          B = _.rotrSL(c, l, 14) ^ _.rotrSL(c, l, 18) ^ _.rotrBL(c, l, 41),
          M = (c & p) ^ (~c & b),
          R = (l & h) ^ (~l & g),
          O = _.add5L(v, B, R, $s[w], be[w]),
          z = _.add5H(O, x, A, M, qs[w], pe[w]),
          Ce = O | 0,
          ye = _.rotrSH(n, o, 28) ^ _.rotrBH(n, o, 34) ^ _.rotrBH(n, o, 39),
          Ie = _.rotrSL(n, o, 28) ^ _.rotrBL(n, o, 34) ^ _.rotrBL(n, o, 39),
          ze = (n & i) ^ (n & f) ^ (i & f),
          Lt = (o & a) ^ (o & u) ^ (a & u);
        (x = b | 0),
          (v = g | 0),
          (b = p | 0),
          (g = h | 0),
          (p = c | 0),
          (h = l | 0),
          ({ h: c, l } = _.add(d | 0, s | 0, z | 0, Ce | 0)),
          (d = f | 0),
          (s = u | 0),
          (f = i | 0),
          (u = a | 0),
          (i = n | 0),
          (a = o | 0);
        let S = _.add3L(Ce, Ie, Lt);
        (n = _.add3H(S, z, ye, ze)), (o = S | 0);
      }
      ({ h: n, l: o } = _.add(this.Ah | 0, this.Al | 0, n | 0, o | 0)),
        ({ h: i, l: a } = _.add(this.Bh | 0, this.Bl | 0, i | 0, a | 0)),
        ({ h: f, l: u } = _.add(this.Ch | 0, this.Cl | 0, f | 0, u | 0)),
        ({ h: d, l: s } = _.add(this.Dh | 0, this.Dl | 0, d | 0, s | 0)),
        ({ h: c, l } = _.add(this.Eh | 0, this.El | 0, c | 0, l | 0)),
        ({ h: p, l: h } = _.add(this.Fh | 0, this.Fl | 0, p | 0, h | 0)),
        ({ h: b, l: g } = _.add(this.Gh | 0, this.Gl | 0, b | 0, g | 0)),
        ({ h: x, l: v } = _.add(this.Hh | 0, this.Hl | 0, x | 0, v | 0)),
        this.set(n, o, i, a, f, u, d, s, c, l, p, h, b, g, x, v);
    }
    roundClean() {
      pe.fill(0), be.fill(0);
    }
    destroy() {
      this.buffer.fill(0),
        this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    }
  },
  Gs = vs(() => new ur());
var mr = BigInt(0),
  eo = BigInt(1),
  Ys = BigInt(2);
function yr(e) {
  return (
    e instanceof Uint8Array ||
    (ArrayBuffer.isView(e) && e.constructor.name === "Uint8Array")
  );
}
function Er(e) {
  if (!yr(e)) throw new Error("Uint8Array expected");
}
function Zt(e, t) {
  if (typeof t != "boolean") throw new Error(e + " boolean expected, got " + t);
}
var Js = Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, "0"));
function xr(e) {
  Er(e);
  let t = "";
  for (let r = 0; r < e.length; r++) t += Js[e[r]];
  return t;
}
function to(e) {
  if (typeof e != "string")
    throw new Error("hex string expected, got " + typeof e);
  return e === "" ? mr : BigInt("0x" + e);
}
var fe = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
function Nn(e) {
  if (e >= fe._0 && e <= fe._9) return e - fe._0;
  if (e >= fe.A && e <= fe.F) return e - (fe.A - 10);
  if (e >= fe.a && e <= fe.f) return e - (fe.a - 10);
}
function ro(e) {
  if (typeof e != "string")
    throw new Error("hex string expected, got " + typeof e);
  let t = e.length,
    r = t / 2;
  if (t % 2)
    throw new Error("hex string expected, got unpadded hex of length " + t);
  let n = new Uint8Array(r);
  for (let o = 0, i = 0; o < r; o++, i += 2) {
    let a = Nn(e.charCodeAt(i)),
      f = Nn(e.charCodeAt(i + 1));
    if (a === void 0 || f === void 0) {
      let u = e[i] + e[i + 1];
      throw new Error(
        'hex string expected, got non-hex character "' + u + '" at index ' + i
      );
    }
    n[o] = a * 16 + f;
  }
  return n;
}
function Xs(e) {
  return to(xr(e));
}
function wt(e) {
  return Er(e), to(xr(Uint8Array.from(e).reverse()));
}
function no(e, t) {
  return ro(e.toString(16).padStart(t * 2, "0"));
}
function cr(e, t) {
  return no(e, t).reverse();
}
function le(e, t, r) {
  let n;
  if (typeof t == "string")
    try {
      n = ro(t);
    } catch (i) {
      throw new Error(e + " must be hex string or Uint8Array, cause: " + i);
    }
  else if (yr(t)) n = Uint8Array.from(t);
  else throw new Error(e + " must be hex string or Uint8Array");
  let o = n.length;
  if (typeof r == "number" && o !== r)
    throw new Error(e + " of length " + r + " expected, got " + o);
  return n;
}
function Tn(...e) {
  let t = 0;
  for (let n = 0; n < e.length; n++) {
    let o = e[n];
    Er(o), (t += o.length);
  }
  let r = new Uint8Array(t);
  for (let n = 0, o = 0; n < e.length; n++) {
    let i = e[n];
    r.set(i, o), (o += i.length);
  }
  return r;
}
var Qt = (e) => typeof e == "bigint" && mr <= e;
function Zs(e, t, r) {
  return Qt(e) && Qt(t) && Qt(r) && t <= e && e < r;
}
function Ve(e, t, r, n) {
  if (!Zs(t, r, n))
    throw new Error(
      "expected valid " + e + ": " + r + " <= n < " + n + ", got " + t
    );
}
function Qs(e) {
  let t;
  for (t = 0; e > mr; e >>= eo, t += 1);
  return t;
}
var ea = (e) => (Ys << BigInt(e - 1)) - eo,
  ta = {
    bigint: (e) => typeof e == "bigint",
    function: (e) => typeof e == "function",
    boolean: (e) => typeof e == "boolean",
    string: (e) => typeof e == "string",
    stringOrUint8Array: (e) => typeof e == "string" || yr(e),
    isSafeInteger: (e) => Number.isSafeInteger(e),
    array: (e) => Array.isArray(e),
    field: (e, t) => t.Fp.isValid(e),
    hash: (e) => typeof e == "function" && Number.isSafeInteger(e.outputLen),
  };
function vr(e, t, r = {}) {
  let n = (o, i, a) => {
    let f = ta[i];
    if (typeof f != "function") throw new Error("invalid validator function");
    let u = e[o];
    if (!(a && u === void 0) && !f(u, e))
      throw new Error(
        "param " + String(o) + " is invalid. Expected " + i + ", got " + u
      );
  };
  for (let [o, i] of Object.entries(t)) n(o, i, !1);
  for (let [o, i] of Object.entries(r)) n(o, i, !0);
  return e;
}
function Un(e) {
  let t = new WeakMap();
  return (r, ...n) => {
    let o = t.get(r);
    if (o !== void 0) return o;
    let i = e(r, ...n);
    return t.set(r, i), i;
  };
}
var $ = BigInt(0),
  K = BigInt(1),
  Ae = BigInt(2),
  ra = BigInt(3),
  fr = BigInt(4),
  Rn = BigInt(5),
  Mn = BigInt(8);
function V(e, t) {
  let r = e % t;
  return r >= $ ? r : t + r;
}
function na(e, t, r) {
  if (t < $) throw new Error("invalid exponent, negatives unsupported");
  if (r <= $) throw new Error("invalid modulus");
  if (r === K) return $;
  let n = K;
  for (; t > $; ) t & K && (n = (n * e) % r), (e = (e * e) % r), (t >>= K);
  return n;
}
function se(e, t, r) {
  let n = e;
  for (; t-- > $; ) (n *= n), (n %= r);
  return n;
}
function Pn(e, t) {
  if (e === $) throw new Error("invert: expected non-zero number");
  if (t <= $) throw new Error("invert: expected positive modulus, got " + t);
  let r = V(e, t),
    n = t,
    o = $,
    i = K;
  for (; r !== $; ) {
    let a = n / r,
      f = n % r,
      u = o - i * a;
    (n = r), (r = f), (o = i), (i = u);
  }
  if (n !== K) throw new Error("invert: does not exist");
  return V(o, t);
}
function oa(e) {
  let t = (e - K) / Ae,
    r,
    n,
    o;
  for (r = e - K, n = 0; r % Ae === $; r /= Ae, n++);
  for (o = Ae; o < e && na(o, t, e) !== e - K; o++)
    if (o > 1e3) throw new Error("Cannot find square root: likely non-prime P");
  if (n === 1) {
    let a = (e + K) / fr;
    return function (f, u) {
      let d = f.pow(u, a);
      if (!f.eql(f.sqr(d), u)) throw new Error("Cannot find square root");
      return d;
    };
  }
  let i = (r + K) / Ae;
  return function (a, f) {
    if (a.pow(f, t) === a.neg(a.ONE))
      throw new Error("Cannot find square root");
    let u = n,
      d = a.pow(a.mul(a.ONE, o), r),
      s = a.pow(f, i),
      c = a.pow(f, r);
    for (; !a.eql(c, a.ONE); ) {
      if (a.eql(c, a.ZERO)) return a.ZERO;
      let l = 1;
      for (let h = a.sqr(c); l < u && !a.eql(h, a.ONE); l++) h = a.sqr(h);
      let p = a.pow(d, K << BigInt(u - l - 1));
      (d = a.sqr(p)), (s = a.mul(s, p)), (c = a.mul(c, d)), (u = l);
    }
    return s;
  };
}
function ia(e) {
  if (e % fr === ra) {
    let t = (e + K) / fr;
    return function (r, n) {
      let o = r.pow(n, t);
      if (!r.eql(r.sqr(o), n)) throw new Error("Cannot find square root");
      return o;
    };
  }
  if (e % Mn === Rn) {
    let t = (e - Rn) / Mn;
    return function (r, n) {
      let o = r.mul(n, Ae),
        i = r.pow(o, t),
        a = r.mul(n, i),
        f = r.mul(r.mul(a, Ae), i),
        u = r.mul(a, r.sub(f, r.ONE));
      if (!r.eql(r.sqr(u), n)) throw new Error("Cannot find square root");
      return u;
    };
  }
  return oa(e);
}
var sa = (e, t) => (V(e, t) & K) === K,
  aa = [
    "create",
    "isValid",
    "is0",
    "neg",
    "inv",
    "sqrt",
    "sqr",
    "eql",
    "add",
    "sub",
    "mul",
    "pow",
    "div",
    "addN",
    "subN",
    "mulN",
    "sqrN",
  ];
function ua(e) {
  let t = {
      ORDER: "bigint",
      MASK: "bigint",
      BYTES: "isSafeInteger",
      BITS: "isSafeInteger",
    },
    r = aa.reduce((n, o) => ((n[o] = "function"), n), t);
  return vr(e, r);
}
function ca(e, t, r) {
  if (r < $) throw new Error("invalid exponent, negatives unsupported");
  if (r === $) return e.ONE;
  if (r === K) return t;
  let n = e.ONE,
    o = t;
  for (; r > $; ) r & K && (n = e.mul(n, o)), (o = e.sqr(o)), (r >>= K);
  return n;
}
function fa(e, t) {
  let r = new Array(t.length),
    n = t.reduce(
      (i, a, f) => (e.is0(a) ? i : ((r[f] = i), e.mul(i, a))),
      e.ONE
    ),
    o = e.inv(n);
  return (
    t.reduceRight(
      (i, a, f) => (e.is0(a) ? i : ((r[f] = e.mul(i, r[f])), e.mul(i, a))),
      o
    ),
    r
  );
}
function oo(e, t) {
  let r = t !== void 0 ? t : e.toString(2).length,
    n = Math.ceil(r / 8);
  return { nBitLength: r, nByteLength: n };
}
function io(e, t, r = !1, n = {}) {
  if (e <= $) throw new Error("invalid field: expected ORDER > 0, got " + e);
  let { nBitLength: o, nByteLength: i } = oo(e, t);
  if (i > 2048)
    throw new Error("invalid field: expected ORDER of <= 2048 bytes");
  let a,
    f = Object.freeze({
      ORDER: e,
      isLE: r,
      BITS: o,
      BYTES: i,
      MASK: ea(o),
      ZERO: $,
      ONE: K,
      create: (u) => V(u, e),
      isValid: (u) => {
        if (typeof u != "bigint")
          throw new Error(
            "invalid field element: expected bigint, got " + typeof u
          );
        return $ <= u && u < e;
      },
      is0: (u) => u === $,
      isOdd: (u) => (u & K) === K,
      neg: (u) => V(-u, e),
      eql: (u, d) => u === d,
      sqr: (u) => V(u * u, e),
      add: (u, d) => V(u + d, e),
      sub: (u, d) => V(u - d, e),
      mul: (u, d) => V(u * d, e),
      pow: (u, d) => ca(f, u, d),
      div: (u, d) => V(u * Pn(d, e), e),
      sqrN: (u) => u * u,
      addN: (u, d) => u + d,
      subN: (u, d) => u - d,
      mulN: (u, d) => u * d,
      inv: (u) => Pn(u, e),
      sqrt: n.sqrt || ((u) => (a || (a = ia(e)), a(f, u))),
      invertBatch: (u) => fa(f, u),
      cmov: (u, d, s) => (s ? d : u),
      toBytes: (u) => (r ? cr(u, i) : no(u, i)),
      fromBytes: (u) => {
        if (u.length !== i)
          throw new Error(
            "Field.fromBytes: expected " + i + " bytes, got " + u.length
          );
        return r ? wt(u) : Xs(u);
      },
    });
  return Object.freeze(f);
}
var kn = BigInt(0),
  bt = BigInt(1);
function er(e, t) {
  let r = t.negate();
  return e ? r : t;
}
function so(e, t) {
  if (!Number.isSafeInteger(e) || e <= 0 || e > t)
    throw new Error("invalid window size, expected [1.." + t + "], got W=" + e);
}
function tr(e, t) {
  so(e, t);
  let r = Math.ceil(t / e) + 1,
    n = 2 ** (e - 1);
  return { windows: r, windowSize: n };
}
function la(e, t) {
  if (!Array.isArray(e)) throw new Error("array expected");
  e.forEach((r, n) => {
    if (!(r instanceof t)) throw new Error("invalid point at index " + n);
  });
}
function da(e, t) {
  if (!Array.isArray(e)) throw new Error("array of scalars expected");
  e.forEach((r, n) => {
    if (!t.isValid(r)) throw new Error("invalid scalar at index " + n);
  });
}
var rr = new WeakMap(),
  ao = new WeakMap();
function nr(e) {
  return ao.get(e) || 1;
}
function ha(e, t) {
  return {
    constTimeNegate: er,
    hasPrecomputes(r) {
      return nr(r) !== 1;
    },
    unsafeLadder(r, n, o = e.ZERO) {
      let i = r;
      for (; n > kn; ) n & bt && (o = o.add(i)), (i = i.double()), (n >>= bt);
      return o;
    },
    precomputeWindow(r, n) {
      let { windows: o, windowSize: i } = tr(n, t),
        a = [],
        f = r,
        u = f;
      for (let d = 0; d < o; d++) {
        (u = f), a.push(u);
        for (let s = 1; s < i; s++) (u = u.add(f)), a.push(u);
        f = u.double();
      }
      return a;
    },
    wNAF(r, n, o) {
      let { windows: i, windowSize: a } = tr(r, t),
        f = e.ZERO,
        u = e.BASE,
        d = BigInt(2 ** r - 1),
        s = 2 ** r,
        c = BigInt(r);
      for (let l = 0; l < i; l++) {
        let p = l * a,
          h = Number(o & d);
        (o >>= c), h > a && ((h -= s), (o += bt));
        let b = p,
          g = p + Math.abs(h) - 1,
          x = l % 2 !== 0,
          v = h < 0;
        h === 0 ? (u = u.add(er(x, n[b]))) : (f = f.add(er(v, n[g])));
      }
      return { p: f, f: u };
    },
    wNAFUnsafe(r, n, o, i = e.ZERO) {
      let { windows: a, windowSize: f } = tr(r, t),
        u = BigInt(2 ** r - 1),
        d = 2 ** r,
        s = BigInt(r);
      for (let c = 0; c < a; c++) {
        let l = c * f;
        if (o === kn) break;
        let p = Number(o & u);
        if (((o >>= s), p > f && ((p -= d), (o += bt)), p === 0)) continue;
        let h = n[l + Math.abs(p) - 1];
        p < 0 && (h = h.negate()), (i = i.add(h));
      }
      return i;
    },
    getPrecomputes(r, n, o) {
      let i = rr.get(n);
      return (
        i || ((i = this.precomputeWindow(n, r)), r !== 1 && rr.set(n, o(i))), i
      );
    },
    wNAFCached(r, n, o) {
      let i = nr(r);
      return this.wNAF(i, this.getPrecomputes(i, r, o), n);
    },
    wNAFCachedUnsafe(r, n, o, i) {
      let a = nr(r);
      return a === 1
        ? this.unsafeLadder(r, n, i)
        : this.wNAFUnsafe(a, this.getPrecomputes(a, r, o), n, i);
    },
    setWindowSize(r, n) {
      so(n, t), ao.set(r, n), rr.delete(r);
    },
  };
}
function pa(e, t, r, n) {
  if ((la(r, e), da(n, t), r.length !== n.length))
    throw new Error("arrays of points and scalars must have equal length");
  let o = e.ZERO,
    i = Qs(BigInt(r.length)),
    a = i > 12 ? i - 3 : i > 4 ? i - 2 : i ? 2 : 1,
    f = (1 << a) - 1,
    u = new Array(f + 1).fill(o),
    d = Math.floor((t.BITS - 1) / a) * a,
    s = o;
  for (let c = d; c >= 0; c -= a) {
    u.fill(o);
    for (let p = 0; p < n.length; p++) {
      let h = n[p],
        b = Number((h >> BigInt(c)) & BigInt(f));
      u[b] = u[b].add(r[p]);
    }
    let l = o;
    for (let p = u.length - 1, h = o; p > 0; p--)
      (h = h.add(u[p])), (l = l.add(h));
    if (((s = s.add(l)), c !== 0)) for (let p = 0; p < a; p++) s = s.double();
  }
  return s;
}
function ba(e) {
  return (
    ua(e.Fp),
    vr(
      e,
      { n: "bigint", h: "bigint", Gx: "field", Gy: "field" },
      { nBitLength: "isSafeInteger", nByteLength: "isSafeInteger" }
    ),
    Object.freeze(it(I(I({}, oo(e.n, e.nBitLength)), e), { p: e.Fp.ORDER }))
  );
}
var ie = BigInt(0),
  re = BigInt(1),
  gt = BigInt(2),
  ga = BigInt(8),
  wa = { zip215: !0 };
function Da(e) {
  let t = ba(e);
  return (
    vr(
      e,
      { hash: "function", a: "bigint", d: "bigint", randomBytes: "function" },
      {
        adjustScalarBytes: "function",
        domain: "function",
        uvRatio: "function",
        mapToCurve: "function",
      }
    ),
    Object.freeze(I({}, t))
  );
}
function ma(e) {
  let t = Da(e),
    { Fp: r, n, prehash: o, hash: i, randomBytes: a, nByteLength: f, h: u } = t,
    d = gt << (BigInt(f * 8) - re),
    s = r.create,
    c = io(t.n, t.nBitLength),
    l =
      t.uvRatio ||
      ((S, D) => {
        try {
          return { isValid: !0, value: r.sqrt(S * r.inv(D)) };
        } catch {
          return { isValid: !1, value: ie };
        }
      }),
    p = t.adjustScalarBytes || ((S) => S),
    h =
      t.domain ||
      ((S, D, E) => {
        if ((Zt("phflag", E), D.length || E))
          throw new Error("Contexts/pre-hash are not supported");
        return S;
      });
  function b(S, D) {
    Ve("coordinate " + S, D, ie, d);
  }
  function g(S) {
    if (!(S instanceof w)) throw new Error("ExtendedPoint expected");
  }
  let x = Un((S, D) => {
      let { ex: E, ey: F, ez: N } = S,
        U = S.is0();
      D == null && (D = U ? ga : r.inv(N));
      let P = s(E * D),
        W = s(F * D),
        k = s(N * D);
      if (U) return { x: ie, y: re };
      if (k !== re) throw new Error("invZ was invalid");
      return { x: P, y: W };
    }),
    v = Un((S) => {
      let { a: D, d: E } = t;
      if (S.is0()) throw new Error("bad point: ZERO");
      let { ex: F, ey: N, ez: U, et: P } = S,
        W = s(F * F),
        k = s(N * N),
        H = s(U * U),
        G = s(H * H),
        te = s(W * D),
        ue = s(H * s(te + k)),
        ce = s(G + s(E * s(W * k)));
      if (ue !== ce) throw new Error("bad point: equation left != right (1)");
      let oe = s(F * N),
        he = s(U * P);
      if (oe !== he) throw new Error("bad point: equation left != right (2)");
      return !0;
    });
  class w {
    constructor(D, E, F, N) {
      (this.ex = D),
        (this.ey = E),
        (this.ez = F),
        (this.et = N),
        b("x", D),
        b("y", E),
        b("z", F),
        b("t", N),
        Object.freeze(this);
    }
    get x() {
      return this.toAffine().x;
    }
    get y() {
      return this.toAffine().y;
    }
    static fromAffine(D) {
      if (D instanceof w) throw new Error("extended point not allowed");
      let { x: E, y: F } = D || {};
      return b("x", E), b("y", F), new w(E, F, re, s(E * F));
    }
    static normalizeZ(D) {
      let E = r.invertBatch(D.map((F) => F.ez));
      return D.map((F, N) => F.toAffine(E[N])).map(w.fromAffine);
    }
    static msm(D, E) {
      return pa(w, c, D, E);
    }
    _setWindowSize(D) {
      M.setWindowSize(this, D);
    }
    assertValidity() {
      v(this);
    }
    equals(D) {
      g(D);
      let { ex: E, ey: F, ez: N } = this,
        { ex: U, ey: P, ez: W } = D,
        k = s(E * W),
        H = s(U * N),
        G = s(F * W),
        te = s(P * N);
      return k === H && G === te;
    }
    is0() {
      return this.equals(w.ZERO);
    }
    negate() {
      return new w(s(-this.ex), this.ey, this.ez, s(-this.et));
    }
    double() {
      let { a: D } = t,
        { ex: E, ey: F, ez: N } = this,
        U = s(E * E),
        P = s(F * F),
        W = s(gt * s(N * N)),
        k = s(D * U),
        H = E + F,
        G = s(s(H * H) - U - P),
        te = k + P,
        ue = te - W,
        ce = k - P,
        oe = s(G * ue),
        he = s(te * ce),
        Ee = s(G * ce),
        ot = s(ue * te);
      return new w(oe, he, ot, Ee);
    }
    add(D) {
      g(D);
      let { a: E, d: F } = t,
        { ex: N, ey: U, ez: P, et: W } = this,
        { ex: k, ey: H, ez: G, et: te } = D;
      if (E === BigInt(-1)) {
        let rn = s((U - N) * (H + k)),
          nn = s((U + N) * (H - k)),
          zt = s(nn - rn);
        if (zt === ie) return this.double();
        let on = s(P * gt * te),
          sn = s(W * gt * G),
          an = sn + on,
          un = nn + rn,
          cn = sn - on,
          qi = s(an * zt),
          $i = s(un * cn),
          Gi = s(an * cn),
          Yi = s(zt * un);
        return new w(qi, $i, Yi, Gi);
      }
      let ue = s(N * k),
        ce = s(U * H),
        oe = s(W * F * te),
        he = s(P * G),
        Ee = s((N + U) * (k + H) - ue - ce),
        ot = he - oe,
        en = he + oe,
        tn = s(ce - E * ue),
        Hi = s(Ee * ot),
        ji = s(en * tn),
        Ki = s(Ee * tn),
        Vi = s(ot * en);
      return new w(Hi, ji, Vi, Ki);
    }
    subtract(D) {
      return this.add(D.negate());
    }
    wNAF(D) {
      return M.wNAFCached(this, D, w.normalizeZ);
    }
    multiply(D) {
      let E = D;
      Ve("scalar", E, re, n);
      let { p: F, f: N } = this.wNAF(E);
      return w.normalizeZ([F, N])[0];
    }
    multiplyUnsafe(D, E = w.ZERO) {
      let F = D;
      return (
        Ve("scalar", F, ie, n),
        F === ie
          ? B
          : this.is0() || F === re
          ? this
          : M.wNAFCachedUnsafe(this, F, w.normalizeZ, E)
      );
    }
    isSmallOrder() {
      return this.multiplyUnsafe(u).is0();
    }
    isTorsionFree() {
      return M.unsafeLadder(this, n).is0();
    }
    toAffine(D) {
      return x(this, D);
    }
    clearCofactor() {
      let { h: D } = t;
      return D === re ? this : this.multiplyUnsafe(D);
    }
    static fromHex(D, E = !1) {
      let { d: F, a: N } = t,
        U = r.BYTES;
      (D = le("pointHex", D, U)), Zt("zip215", E);
      let P = D.slice(),
        W = D[U - 1];
      P[U - 1] = W & -129;
      let k = wt(P),
        H = E ? d : r.ORDER;
      Ve("pointHex.y", k, ie, H);
      let G = s(k * k),
        te = s(G - re),
        ue = s(F * G - N),
        { isValid: ce, value: oe } = l(te, ue);
      if (!ce) throw new Error("Point.fromHex: invalid y coordinate");
      let he = (oe & re) === re,
        Ee = (W & 128) !== 0;
      if (!E && oe === ie && Ee)
        throw new Error("Point.fromHex: x=0 and x_0=1");
      return Ee !== he && (oe = s(-oe)), w.fromAffine({ x: oe, y: k });
    }
    static fromPrivateKey(D) {
      return z(D).point;
    }
    toRawBytes() {
      let { x: D, y: E } = this.toAffine(),
        F = cr(E, r.BYTES);
      return (F[F.length - 1] |= D & re ? 128 : 0), F;
    }
    toHex() {
      return xr(this.toRawBytes());
    }
  }
  (w.BASE = new w(t.Gx, t.Gy, re, s(t.Gx * t.Gy))),
    (w.ZERO = new w(ie, re, re, ie));
  let { BASE: A, ZERO: B } = w,
    M = ha(w, f * 8);
  function R(S) {
    return V(S, n);
  }
  function O(S) {
    return R(wt(S));
  }
  function z(S) {
    let D = r.BYTES;
    S = le("private key", S, D);
    let E = le("hashed private key", i(S), 2 * D),
      F = p(E.slice(0, D)),
      N = E.slice(D, 2 * D),
      U = O(F),
      P = A.multiply(U),
      W = P.toRawBytes();
    return { head: F, prefix: N, scalar: U, point: P, pointBytes: W };
  }
  function Ce(S) {
    return z(S).pointBytes;
  }
  function ye(S = new Uint8Array(), ...D) {
    let E = Tn(...D);
    return O(i(h(E, le("context", S), !!o)));
  }
  function Ie(S, D, E = {}) {
    (S = le("message", S)), o && (S = o(S));
    let { prefix: F, scalar: N, pointBytes: U } = z(D),
      P = ye(E.context, F, S),
      W = A.multiply(P).toRawBytes(),
      k = ye(E.context, W, U, S),
      H = R(P + k * N);
    Ve("signature.s", H, ie, n);
    let G = Tn(W, cr(H, r.BYTES));
    return le("result", G, r.BYTES * 2);
  }
  let ze = wa;
  function Lt(S, D, E, F = ze) {
    let { context: N, zip215: U } = F,
      P = r.BYTES;
    (S = le("signature", S, 2 * P)),
      (D = le("message", D)),
      (E = le("publicKey", E, P)),
      U !== void 0 && Zt("zip215", U),
      o && (D = o(D));
    let W = wt(S.slice(P, 2 * P)),
      k,
      H,
      G;
    try {
      (k = w.fromHex(E, U)),
        (H = w.fromHex(S.slice(0, P), U)),
        (G = A.multiplyUnsafe(W));
    } catch {
      return !1;
    }
    if (!U && k.isSmallOrder()) return !1;
    let te = ye(N, H.toRawBytes(), k.toRawBytes(), D);
    return H.add(k.multiplyUnsafe(te))
      .subtract(G)
      .clearCofactor()
      .equals(w.ZERO);
  }
  return (
    A._setWindowSize(8),
    {
      CURVE: t,
      getPublicKey: Ce,
      sign: Ie,
      verify: Lt,
      ExtendedPoint: w,
      utils: {
        getExtendedPublicKey: z,
        randomPrivateKey: () => a(r.BYTES),
        precompute(S = 8, D = w.BASE) {
          return D._setWindowSize(S), D.multiply(BigInt(3)), D;
        },
      },
    }
  );
}
BigInt(0), BigInt(1);
var Ar = BigInt(
    "57896044618658097711785492504343953926634992332820282019728792003956564819949"
  ),
  Ln = BigInt(
    "19681161376707505956807079304988542015446066515923890162744021073123829784752"
  );
BigInt(0);
var ya = BigInt(1),
  zn = BigInt(2);
BigInt(3);
var Ea = BigInt(5),
  xa = BigInt(8);
function va(e) {
  let t = BigInt(10),
    r = BigInt(20),
    n = BigInt(40),
    o = BigInt(80),
    i = Ar,
    a = (((e * e) % i) * e) % i,
    f = (se(a, zn, i) * a) % i,
    u = (se(f, ya, i) * e) % i,
    d = (se(u, Ea, i) * u) % i,
    s = (se(d, t, i) * d) % i,
    c = (se(s, r, i) * s) % i,
    l = (se(c, n, i) * c) % i,
    p = (se(l, o, i) * l) % i,
    h = (se(p, o, i) * l) % i,
    b = (se(h, t, i) * d) % i;
  return { pow_p_5_8: (se(b, zn, i) * e) % i, b2: a };
}
function Aa(e) {
  return (e[0] &= 248), (e[31] &= 127), (e[31] |= 64), e;
}
function Sa(e, t) {
  let r = Ar,
    n = V(t * t * t, r),
    o = V(n * n * t, r),
    i = va(e * o).pow_p_5_8,
    a = V(e * n * i, r),
    f = V(t * a * a, r),
    u = a,
    d = V(a * Ln, r),
    s = f === e,
    c = f === V(-e, r),
    l = f === V(-e * Ln, r);
  return (
    s && (a = u),
    (c || l) && (a = d),
    sa(a, r) && (a = V(-a, r)),
    { isValid: s || c, value: a }
  );
}
var Fa = io(Ar, void 0, !0),
  Ca = {
    a: BigInt(-1),
    d: BigInt(
      "37095705934669439343138083508754565189542113879843219016388785533085940283555"
    ),
    Fp: Fa,
    n: BigInt(
      "7237005577332262213973186563042994240857116359379907606001950938285454250989"
    ),
    h: xa,
    Gx: BigInt(
      "15112221349535400772501151409588531511454012693041857206046113283949847762202"
    ),
    Gy: BigInt(
      "46316835694926478169428394003475163141307993866256225615783033603165251855960"
    ),
    hash: Gs,
    randomBytes: Zn,
    adjustScalarBytes: Aa,
    uvRatio: Sa,
  },
  uo = ma(Ca),
  Ia = "EdDSA",
  _a = "JWT",
  Dt = ".",
  yt = "base64url",
  co = "utf8",
  fo = "utf8",
  Ba = ":",
  Oa = "did",
  Na = "key",
  Wn = "base58btc",
  Ta = "z",
  Ua = "K36";
var Ra = 32;
function Sr(e) {
  return globalThis.Buffer != null
    ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength)
    : e;
}
function lo(e = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null
    ? Sr(globalThis.Buffer.allocUnsafe(e))
    : new Uint8Array(e);
}
function ho(e, t) {
  t || (t = e.reduce((o, i) => o + i.length, 0));
  let r = lo(t),
    n = 0;
  for (let o of e) r.set(o, n), (n += o.length);
  return Sr(r);
}
function Ma(e, t) {
  if (e.length >= 255) throw new TypeError("Alphabet too long");
  for (var r = new Uint8Array(256), n = 0; n < r.length; n++) r[n] = 255;
  for (var o = 0; o < e.length; o++) {
    var i = e.charAt(o),
      a = i.charCodeAt(0);
    if (r[a] !== 255) throw new TypeError(i + " is ambiguous");
    r[a] = o;
  }
  var f = e.length,
    u = e.charAt(0),
    d = Math.log(f) / Math.log(256),
    s = Math.log(256) / Math.log(f);
  function c(h) {
    if (
      (h instanceof Uint8Array ||
        (ArrayBuffer.isView(h)
          ? (h = new Uint8Array(h.buffer, h.byteOffset, h.byteLength))
          : Array.isArray(h) && (h = Uint8Array.from(h))),
      !(h instanceof Uint8Array))
    )
      throw new TypeError("Expected Uint8Array");
    if (h.length === 0) return "";
    for (var b = 0, g = 0, x = 0, v = h.length; x !== v && h[x] === 0; )
      x++, b++;
    for (var w = ((v - x) * s + 1) >>> 0, A = new Uint8Array(w); x !== v; ) {
      for (
        var B = h[x], M = 0, R = w - 1;
        (B !== 0 || M < g) && R !== -1;
        R--, M++
      )
        (B += (256 * A[R]) >>> 0), (A[R] = B % f >>> 0), (B = (B / f) >>> 0);
      if (B !== 0) throw new Error("Non-zero carry");
      (g = M), x++;
    }
    for (var O = w - g; O !== w && A[O] === 0; ) O++;
    for (var z = u.repeat(b); O < w; ++O) z += e.charAt(A[O]);
    return z;
  }
  function l(h) {
    if (typeof h != "string") throw new TypeError("Expected String");
    if (h.length === 0) return new Uint8Array();
    var b = 0;
    if (h[b] !== " ") {
      for (var g = 0, x = 0; h[b] === u; ) g++, b++;
      for (
        var v = ((h.length - b) * d + 1) >>> 0, w = new Uint8Array(v);
        h[b];

      ) {
        var A = r[h.charCodeAt(b)];
        if (A === 255) return;
        for (var B = 0, M = v - 1; (A !== 0 || B < x) && M !== -1; M--, B++)
          (A += (f * w[M]) >>> 0),
            (w[M] = A % 256 >>> 0),
            (A = (A / 256) >>> 0);
        if (A !== 0) throw new Error("Non-zero carry");
        (x = B), b++;
      }
      if (h[b] !== " ") {
        for (var R = v - x; R !== v && w[R] === 0; ) R++;
        for (var O = new Uint8Array(g + (v - R)), z = g; R !== v; )
          O[z++] = w[R++];
        return O;
      }
    }
  }
  function p(h) {
    var b = l(h);
    if (b) return b;
    throw new Error(`Non-${t} character`);
  }
  return { encode: c, decodeUnsafe: l, decode: p };
}
var Pa = Ma,
  ka = Pa,
  po = (e) => {
    if (e instanceof Uint8Array && e.constructor.name === "Uint8Array")
      return e;
    if (e instanceof ArrayBuffer) return new Uint8Array(e);
    if (ArrayBuffer.isView(e))
      return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
    throw new Error("Unknown type, must be binary type");
  },
  La = (e) => new TextEncoder().encode(e),
  za = (e) => new TextDecoder().decode(e),
  lr = class {
    constructor(t, r, n) {
      (this.name = t), (this.prefix = r), (this.baseEncode = n);
    }
    encode(t) {
      if (t instanceof Uint8Array) return `${this.prefix}${this.baseEncode(t)}`;
      throw Error("Unknown type, must be binary type");
    }
  },
  dr = class {
    constructor(t, r, n) {
      if (((this.name = t), (this.prefix = r), r.codePointAt(0) === void 0))
        throw new Error("Invalid prefix character");
      (this.prefixCodePoint = r.codePointAt(0)), (this.baseDecode = n);
    }
    decode(t) {
      if (typeof t == "string") {
        if (t.codePointAt(0) !== this.prefixCodePoint)
          throw Error(
            `Unable to decode multibase string ${JSON.stringify(t)}, ${
              this.name
            } decoder only supports inputs prefixed with ${this.prefix}`
          );
        return this.baseDecode(t.slice(this.prefix.length));
      } else throw Error("Can only multibase decode strings");
    }
    or(t) {
      return bo(this, t);
    }
  },
  hr = class {
    constructor(t) {
      this.decoders = t;
    }
    or(t) {
      return bo(this, t);
    }
    decode(t) {
      let r = t[0],
        n = this.decoders[r];
      if (n) return n.decode(t);
      throw RangeError(
        `Unable to decode multibase string ${JSON.stringify(
          t
        )}, only inputs prefixed with ${Object.keys(
          this.decoders
        )} are supported`
      );
    }
  },
  bo = (e, t) =>
    new hr(
      I(I({}, e.decoders || { [e.prefix]: e }), t.decoders || { [t.prefix]: t })
    ),
  pr = class {
    constructor(t, r, n, o) {
      (this.name = t),
        (this.prefix = r),
        (this.baseEncode = n),
        (this.baseDecode = o),
        (this.encoder = new lr(t, r, n)),
        (this.decoder = new dr(t, r, o));
    }
    encode(t) {
      return this.encoder.encode(t);
    }
    decode(t) {
      return this.decoder.decode(t);
    }
  },
  Et = ({ name: e, prefix: t, encode: r, decode: n }) => new pr(e, t, r, n),
  qe = ({ prefix: e, name: t, alphabet: r }) => {
    let { encode: n, decode: o } = ka(r, t);
    return Et({ prefix: e, name: t, encode: n, decode: (i) => po(o(i)) });
  },
  Wa = (e, t, r, n) => {
    let o = {};
    for (let s = 0; s < t.length; ++s) o[t[s]] = s;
    let i = e.length;
    for (; e[i - 1] === "="; ) --i;
    let a = new Uint8Array(((i * r) / 8) | 0),
      f = 0,
      u = 0,
      d = 0;
    for (let s = 0; s < i; ++s) {
      let c = o[e[s]];
      if (c === void 0) throw new SyntaxError(`Non-${n} character`);
      (u = (u << r) | c),
        (f += r),
        f >= 8 && ((f -= 8), (a[d++] = 255 & (u >> f)));
    }
    if (f >= r || 255 & (u << (8 - f)))
      throw new SyntaxError("Unexpected end of data");
    return a;
  },
  Ha = (e, t, r) => {
    let n = t[t.length - 1] === "=",
      o = (1 << r) - 1,
      i = "",
      a = 0,
      f = 0;
    for (let u = 0; u < e.length; ++u)
      for (f = (f << 8) | e[u], a += 8; a > r; )
        (a -= r), (i += t[o & (f >> a)]);
    if ((a && (i += t[o & (f << (r - a))]), n))
      for (; (i.length * r) & 7; ) i += "=";
    return i;
  },
  J = ({ name: e, prefix: t, bitsPerChar: r, alphabet: n }) =>
    Et({
      prefix: t,
      name: e,
      encode(o) {
        return Ha(o, n, r);
      },
      decode(o) {
        return Wa(o, n, r, e);
      },
    }),
  ja = Et({
    prefix: "\0",
    name: "identity",
    encode: (e) => za(e),
    decode: (e) => La(e),
  }),
  Ka = Object.freeze({ __proto__: null, identity: ja }),
  Va = J({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 }),
  qa = Object.freeze({ __proto__: null, base2: Va }),
  $a = J({ prefix: "7", name: "base8", alphabet: "01234567", bitsPerChar: 3 }),
  Ga = Object.freeze({ __proto__: null, base8: $a }),
  Ya = qe({ prefix: "9", name: "base10", alphabet: "0123456789" }),
  Ja = Object.freeze({ __proto__: null, base10: Ya }),
  Xa = J({
    prefix: "f",
    name: "base16",
    alphabet: "0123456789abcdef",
    bitsPerChar: 4,
  }),
  Za = J({
    prefix: "F",
    name: "base16upper",
    alphabet: "0123456789ABCDEF",
    bitsPerChar: 4,
  }),
  Qa = Object.freeze({ __proto__: null, base16: Xa, base16upper: Za }),
  eu = J({
    prefix: "b",
    name: "base32",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
    bitsPerChar: 5,
  }),
  tu = J({
    prefix: "B",
    name: "base32upper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
    bitsPerChar: 5,
  }),
  ru = J({
    prefix: "c",
    name: "base32pad",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
    bitsPerChar: 5,
  }),
  nu = J({
    prefix: "C",
    name: "base32padupper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
    bitsPerChar: 5,
  }),
  ou = J({
    prefix: "v",
    name: "base32hex",
    alphabet: "0123456789abcdefghijklmnopqrstuv",
    bitsPerChar: 5,
  }),
  iu = J({
    prefix: "V",
    name: "base32hexupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
    bitsPerChar: 5,
  }),
  su = J({
    prefix: "t",
    name: "base32hexpad",
    alphabet: "0123456789abcdefghijklmnopqrstuv=",
    bitsPerChar: 5,
  }),
  au = J({
    prefix: "T",
    name: "base32hexpadupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
    bitsPerChar: 5,
  }),
  uu = J({
    prefix: "h",
    name: "base32z",
    alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
    bitsPerChar: 5,
  }),
  cu = Object.freeze({
    __proto__: null,
    base32: eu,
    base32upper: tu,
    base32pad: ru,
    base32padupper: nu,
    base32hex: ou,
    base32hexupper: iu,
    base32hexpad: su,
    base32hexpadupper: au,
    base32z: uu,
  }),
  fu = qe({
    prefix: "k",
    name: "base36",
    alphabet: "0123456789abcdefghijklmnopqrstuvwxyz",
  }),
  lu = qe({
    prefix: "K",
    name: "base36upper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  }),
  du = Object.freeze({ __proto__: null, base36: fu, base36upper: lu }),
  hu = qe({
    name: "base58btc",
    prefix: "z",
    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
  }),
  pu = qe({
    name: "base58flickr",
    prefix: "Z",
    alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",
  }),
  bu = Object.freeze({ __proto__: null, base58btc: hu, base58flickr: pu }),
  gu = J({
    prefix: "m",
    name: "base64",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    bitsPerChar: 6,
  }),
  wu = J({
    prefix: "M",
    name: "base64pad",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    bitsPerChar: 6,
  }),
  Du = J({
    prefix: "u",
    name: "base64url",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
    bitsPerChar: 6,
  }),
  mu = J({
    prefix: "U",
    name: "base64urlpad",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
    bitsPerChar: 6,
  }),
  yu = Object.freeze({
    __proto__: null,
    base64: gu,
    base64pad: wu,
    base64url: Du,
    base64urlpad: mu,
  }),
  go = Array.from(
    "\u{1F680}\u{1FA90}\u2604\u{1F6F0}\u{1F30C}\u{1F311}\u{1F312}\u{1F313}\u{1F314}\u{1F315}\u{1F316}\u{1F317}\u{1F318}\u{1F30D}\u{1F30F}\u{1F30E}\u{1F409}\u2600\u{1F4BB}\u{1F5A5}\u{1F4BE}\u{1F4BF}\u{1F602}\u2764\u{1F60D}\u{1F923}\u{1F60A}\u{1F64F}\u{1F495}\u{1F62D}\u{1F618}\u{1F44D}\u{1F605}\u{1F44F}\u{1F601}\u{1F525}\u{1F970}\u{1F494}\u{1F496}\u{1F499}\u{1F622}\u{1F914}\u{1F606}\u{1F644}\u{1F4AA}\u{1F609}\u263A\u{1F44C}\u{1F917}\u{1F49C}\u{1F614}\u{1F60E}\u{1F607}\u{1F339}\u{1F926}\u{1F389}\u{1F49E}\u270C\u2728\u{1F937}\u{1F631}\u{1F60C}\u{1F338}\u{1F64C}\u{1F60B}\u{1F497}\u{1F49A}\u{1F60F}\u{1F49B}\u{1F642}\u{1F493}\u{1F929}\u{1F604}\u{1F600}\u{1F5A4}\u{1F603}\u{1F4AF}\u{1F648}\u{1F447}\u{1F3B6}\u{1F612}\u{1F92D}\u2763\u{1F61C}\u{1F48B}\u{1F440}\u{1F62A}\u{1F611}\u{1F4A5}\u{1F64B}\u{1F61E}\u{1F629}\u{1F621}\u{1F92A}\u{1F44A}\u{1F973}\u{1F625}\u{1F924}\u{1F449}\u{1F483}\u{1F633}\u270B\u{1F61A}\u{1F61D}\u{1F634}\u{1F31F}\u{1F62C}\u{1F643}\u{1F340}\u{1F337}\u{1F63B}\u{1F613}\u2B50\u2705\u{1F97A}\u{1F308}\u{1F608}\u{1F918}\u{1F4A6}\u2714\u{1F623}\u{1F3C3}\u{1F490}\u2639\u{1F38A}\u{1F498}\u{1F620}\u261D\u{1F615}\u{1F33A}\u{1F382}\u{1F33B}\u{1F610}\u{1F595}\u{1F49D}\u{1F64A}\u{1F639}\u{1F5E3}\u{1F4AB}\u{1F480}\u{1F451}\u{1F3B5}\u{1F91E}\u{1F61B}\u{1F534}\u{1F624}\u{1F33C}\u{1F62B}\u26BD\u{1F919}\u2615\u{1F3C6}\u{1F92B}\u{1F448}\u{1F62E}\u{1F646}\u{1F37B}\u{1F343}\u{1F436}\u{1F481}\u{1F632}\u{1F33F}\u{1F9E1}\u{1F381}\u26A1\u{1F31E}\u{1F388}\u274C\u270A\u{1F44B}\u{1F630}\u{1F928}\u{1F636}\u{1F91D}\u{1F6B6}\u{1F4B0}\u{1F353}\u{1F4A2}\u{1F91F}\u{1F641}\u{1F6A8}\u{1F4A8}\u{1F92C}\u2708\u{1F380}\u{1F37A}\u{1F913}\u{1F619}\u{1F49F}\u{1F331}\u{1F616}\u{1F476}\u{1F974}\u25B6\u27A1\u2753\u{1F48E}\u{1F4B8}\u2B07\u{1F628}\u{1F31A}\u{1F98B}\u{1F637}\u{1F57A}\u26A0\u{1F645}\u{1F61F}\u{1F635}\u{1F44E}\u{1F932}\u{1F920}\u{1F927}\u{1F4CC}\u{1F535}\u{1F485}\u{1F9D0}\u{1F43E}\u{1F352}\u{1F617}\u{1F911}\u{1F30A}\u{1F92F}\u{1F437}\u260E\u{1F4A7}\u{1F62F}\u{1F486}\u{1F446}\u{1F3A4}\u{1F647}\u{1F351}\u2744\u{1F334}\u{1F4A3}\u{1F438}\u{1F48C}\u{1F4CD}\u{1F940}\u{1F922}\u{1F445}\u{1F4A1}\u{1F4A9}\u{1F450}\u{1F4F8}\u{1F47B}\u{1F910}\u{1F92E}\u{1F3BC}\u{1F975}\u{1F6A9}\u{1F34E}\u{1F34A}\u{1F47C}\u{1F48D}\u{1F4E3}\u{1F942}"
  ),
  Eu = go.reduce((e, t, r) => ((e[r] = t), e), []),
  xu = go.reduce((e, t, r) => ((e[t.codePointAt(0)] = r), e), []);
function vu(e) {
  return e.reduce((t, r) => ((t += Eu[r]), t), "");
}
function Au(e) {
  let t = [];
  for (let r of e) {
    let n = xu[r.codePointAt(0)];
    if (n === void 0) throw new Error(`Non-base256emoji character: ${r}`);
    t.push(n);
  }
  return new Uint8Array(t);
}
var Su = Et({
    prefix: "\u{1F680}",
    name: "base256emoji",
    encode: vu,
    decode: Au,
  }),
  Fu = Object.freeze({ __proto__: null, base256emoji: Su }),
  Cu = wo,
  Hn = 128,
  Iu = 127,
  _u = ~Iu,
  Bu = Math.pow(2, 31);
function wo(e, t, r) {
  (t = t || []), (r = r || 0);
  for (var n = r; e >= Bu; ) (t[r++] = (e & 255) | Hn), (e /= 128);
  for (; e & _u; ) (t[r++] = (e & 255) | Hn), (e >>>= 7);
  return (t[r] = e | 0), (wo.bytes = r - n + 1), t;
}
var Ou = br,
  Nu = 128,
  jn = 127;
function br(e, n) {
  var r = 0,
    n = n || 0,
    o = 0,
    i = n,
    a,
    f = e.length;
  do {
    if (i >= f)
      throw ((br.bytes = 0), new RangeError("Could not decode varint"));
    (a = e[i++]),
      (r += o < 28 ? (a & jn) << o : (a & jn) * Math.pow(2, o)),
      (o += 7);
  } while (a >= Nu);
  return (br.bytes = i - n), r;
}
var Tu = Math.pow(2, 7),
  Uu = Math.pow(2, 14),
  Ru = Math.pow(2, 21),
  Mu = Math.pow(2, 28),
  Pu = Math.pow(2, 35),
  ku = Math.pow(2, 42),
  Lu = Math.pow(2, 49),
  zu = Math.pow(2, 56),
  Wu = Math.pow(2, 63),
  Hu = function (e) {
    return e < Tu
      ? 1
      : e < Uu
      ? 2
      : e < Ru
      ? 3
      : e < Mu
      ? 4
      : e < Pu
      ? 5
      : e < ku
      ? 6
      : e < Lu
      ? 7
      : e < zu
      ? 8
      : e < Wu
      ? 9
      : 10;
  },
  ju = { encode: Cu, decode: Ou, encodingLength: Hu },
  Do = ju,
  Kn = (e, t, r = 0) => (Do.encode(e, t, r), t),
  Vn = (e) => Do.encodingLength(e),
  gr = (e, t) => {
    let r = t.byteLength,
      n = Vn(e),
      o = n + Vn(r),
      i = new Uint8Array(o + r);
    return Kn(e, i, 0), Kn(r, i, n), i.set(t, o), new wr(e, r, t, i);
  },
  wr = class {
    constructor(t, r, n, o) {
      (this.code = t), (this.size = r), (this.digest = n), (this.bytes = o);
    }
  },
  mo = ({ name: e, code: t, encode: r }) => new Dr(e, t, r),
  Dr = class {
    constructor(t, r, n) {
      (this.name = t), (this.code = r), (this.encode = n);
    }
    digest(t) {
      if (t instanceof Uint8Array) {
        let r = this.encode(t);
        return r instanceof Uint8Array
          ? gr(this.code, r)
          : r.then((n) => gr(this.code, n));
      } else throw Error("Unknown type, must be binary type");
    }
  },
  yo = (e) => (t) =>
    y(void 0, null, function* () {
      return new Uint8Array(yield crypto.subtle.digest(e, t));
    }),
  Ku = mo({ name: "sha2-256", code: 18, encode: yo("SHA-256") }),
  Vu = mo({ name: "sha2-512", code: 19, encode: yo("SHA-512") }),
  qu = Object.freeze({ __proto__: null, sha256: Ku, sha512: Vu }),
  Eo = 0,
  $u = "identity",
  xo = po,
  Gu = (e) => gr(Eo, xo(e)),
  Yu = { code: Eo, name: $u, encode: xo, digest: Gu },
  Ju = Object.freeze({ __proto__: null, identity: Yu });
new TextEncoder(), new TextDecoder();
var qn = I(
  I(I(I(I(I(I(I(I(I({}, Ka), qa), Ga), Ja), Qa), cu), du), bu), yu),
  Fu
);
I(I({}, qu), Ju);
function vo(e, t, r, n) {
  return {
    name: e,
    prefix: t,
    encoder: { name: e, prefix: t, encode: r },
    decoder: { decode: n },
  };
}
var $n = vo(
    "utf8",
    "u",
    (e) => "u" + new TextDecoder("utf8").decode(e),
    (e) => new TextEncoder().encode(e.substring(1))
  ),
  or = vo(
    "ascii",
    "a",
    (e) => {
      let t = "a";
      for (let r = 0; r < e.length; r++) t += String.fromCharCode(e[r]);
      return t;
    },
    (e) => {
      e = e.substring(1);
      let t = lo(e.length);
      for (let r = 0; r < e.length; r++) t[r] = e.charCodeAt(r);
      return t;
    }
  ),
  Ao = I(
    {
      utf8: $n,
      "utf-8": $n,
      hex: qn.base16,
      latin1: or,
      ascii: or,
      binary: or,
    },
    qn
  );
function xt(e, t = "utf8") {
  let r = Ao[t];
  if (!r) throw new Error(`Unsupported encoding "${t}"`);
  return (t === "utf8" || t === "utf-8") &&
    globalThis.Buffer != null &&
    globalThis.Buffer.from != null
    ? globalThis.Buffer.from(e.buffer, e.byteOffset, e.byteLength).toString(
        "utf8"
      )
    : r.encoder.encode(e).substring(1);
}
function Te(e, t = "utf8") {
  let r = Ao[t];
  if (!r) throw new Error(`Unsupported encoding "${t}"`);
  return (t === "utf8" || t === "utf-8") &&
    globalThis.Buffer != null &&
    globalThis.Buffer.from != null
    ? Sr(globalThis.Buffer.from(e, "utf-8"))
    : r.decoder.decode(`${r.prefix}${e}`);
}
function Gn(e) {
  return xe(xt(Te(e, yt), co));
}
function mt(e) {
  return xt(Te(ve(e), co), yt);
}
function Xu(e) {
  let t = Te(Ua, Wn),
    r = Ta + xt(ho([t, e]), Wn);
  return [Oa, Na, r].join(Ba);
}
function Zu(e) {
  return xt(e, yt);
}
function Qu(e) {
  return Te(e, yt);
}
function ec(e) {
  return Te([mt(e.header), mt(e.payload)].join(Dt), fo);
}
function tc(e) {
  return [mt(e.header), mt(e.payload), Zu(e.signature)].join(Dt);
}
function Ol(e) {
  let t = e.split(Dt),
    r = Gn(t[0]),
    n = Gn(t[1]),
    o = Qu(t[2]),
    i = Te(t.slice(0, 2).join(Dt), fo);
  return { header: r, payload: n, signature: o, data: i };
}
function Nl(e = Zn(Ra)) {
  let t = uo.getPublicKey(e);
  return { secretKey: ho([e, t]), publicKey: t };
}
function Tl(i, a, f, u) {
  return y(
    this,
    arguments,
    function* (e, t, r, n, o = (0, Yn.fromMiliseconds)(Date.now())) {
      let d = { alg: Ia, typ: _a },
        s = Xu(n.publicKey),
        c = o + r,
        l = { iss: s, sub: e, aud: t, iat: o, exp: c },
        p = ec({ header: d, payload: l }),
        h = uo.sign(p, n.secretKey.slice(0, 32));
      return tc({ header: d, payload: l, signature: h });
    }
  );
}
var So = function (e, t, r) {
    if (r || arguments.length === 2)
      for (var n = 0, o = t.length, i; n < o; n++)
        (i || !(n in t)) &&
          (i || (i = Array.prototype.slice.call(t, 0, n)), (i[n] = t[n]));
    return e.concat(i || Array.prototype.slice.call(t));
  },
  rc = (function () {
    function e(t, r, n) {
      (this.name = t),
        (this.version = r),
        (this.os = n),
        (this.type = "browser");
    }
    return e;
  })();
var nc = (function () {
  function e(t) {
    (this.version = t),
      (this.type = "node"),
      (this.name = "node"),
      (this.os = process.platform);
  }
  return e;
})();
var oc = (function () {
  function e(t, r, n, o) {
    (this.name = t),
      (this.version = r),
      (this.os = n),
      (this.bot = o),
      (this.type = "bot-device");
  }
  return e;
})();
var ic = (function () {
  function e() {
    (this.type = "bot"),
      (this.bot = !0),
      (this.name = "bot"),
      (this.version = null),
      (this.os = null);
  }
  return e;
})();
var sc = (function () {
  function e() {
    (this.type = "react-native"),
      (this.name = "react-native"),
      (this.version = null),
      (this.os = null);
  }
  return e;
})();
var ac =
    /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/,
  uc =
    /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,
  Fo = 3,
  cc = [
    ["aol", /AOLShield\/([0-9\._]+)/],
    ["edge", /Edge\/([0-9\._]+)/],
    ["edge-ios", /EdgiOS\/([0-9\._]+)/],
    ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
    ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
    ["samsung", /SamsungBrowser\/([0-9\.]+)/],
    ["silk", /\bSilk\/([0-9._-]+)\b/],
    ["miui", /MiuiBrowser\/([0-9\.]+)$/],
    ["beaker", /BeakerBrowser\/([0-9\.]+)/],
    ["edge-chromium", /EdgA?\/([0-9\.]+)/],
    [
      "chromium-webview",
      /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/,
    ],
    ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
    ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
    ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
    ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
    ["fxios", /FxiOS\/([0-9\.]+)/],
    ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
    ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
    ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
    ["pie", /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],
    [
      "pie",
      /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/,
    ],
    ["netfront", /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],
    ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
    ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
    ["ie", /MSIE\s(7\.0)/],
    ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
    ["android", /Android\s([0-9\.]+)/],
    ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
    ["safari", /Version\/([0-9\._]+).*Safari/],
    ["facebook", /FB[AS]V\/([0-9\.]+)/],
    ["instagram", /Instagram\s([0-9\.]+)/],
    ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
    ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
    ["curl", /^curl\/([0-9\.]+)$/],
    ["searchbot", ac],
  ],
  Co = [
    ["iOS", /iP(hone|od|ad)/],
    ["Android OS", /Android/],
    ["BlackBerry OS", /BlackBerry|BB10/],
    ["Windows Mobile", /IEMobile/],
    ["Amazon OS", /Kindle/],
    ["Windows 3.11", /Win16/],
    ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
    ["Windows 98", /(Windows 98)|(Win98)/],
    ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
    ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
    ["Windows Server 2003", /(Windows NT 5.2)/],
    ["Windows Vista", /(Windows NT 6.0)/],
    ["Windows 7", /(Windows NT 6.1)/],
    ["Windows 8", /(Windows NT 6.2)/],
    ["Windows 8.1", /(Windows NT 6.3)/],
    ["Windows 10", /(Windows NT 10.0)/],
    ["Windows ME", /Windows ME/],
    ["Windows CE", /Windows CE|WinCE|Microsoft Pocket Internet Explorer/],
    ["Open BSD", /OpenBSD/],
    ["Sun OS", /SunOS/],
    ["Chrome OS", /CrOS/],
    ["Linux", /(Linux)|(X11)/],
    ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
    ["QNX", /QNX/],
    ["BeOS", /BeOS/],
    ["OS/2", /OS\/2/],
  ];
function Ml(e) {
  return e
    ? Io(e)
    : typeof document > "u" &&
      typeof navigator < "u" &&
      navigator.product === "ReactNative"
    ? new sc()
    : typeof navigator < "u"
    ? Io(navigator.userAgent)
    : dc();
}
function fc(e) {
  return (
    e !== "" &&
    cc.reduce(function (t, r) {
      var n = r[0],
        o = r[1];
      if (t) return t;
      var i = o.exec(e);
      return !!i && [n, i];
    }, !1)
  );
}
function Io(e) {
  var t = fc(e);
  if (!t) return null;
  var r = t[0],
    n = t[1];
  if (r === "searchbot") return new ic();
  var o = n[1] && n[1].split(".").join("_").split("_").slice(0, 3);
  o
    ? o.length < Fo && (o = So(So([], o, !0), hc(Fo - o.length), !0))
    : (o = []);
  var i = o.join("."),
    a = lc(e),
    f = uc.exec(e);
  return f && f[1] ? new oc(r, i, a, f[1]) : new rc(r, i, a);
}
function lc(e) {
  for (var t = 0, r = Co.length; t < r; t++) {
    var n = Co[t],
      o = n[0],
      i = n[1],
      a = i.exec(e);
    if (a) return o;
  }
  return null;
}
function dc() {
  var e = typeof process < "u" && process.version;
  return e ? new nc(process.version.slice(1)) : null;
}
function hc(e) {
  for (var t = [], r = 0; r < e; r++) t.push("0");
  return t;
}
function To(e) {
  return (
    e instanceof Uint8Array ||
    (ArrayBuffer.isView(e) && e.constructor.name === "Uint8Array")
  );
}
function Uo(e, t) {
  return Array.isArray(t)
    ? t.length === 0
      ? !0
      : e
      ? t.every((r) => typeof r == "string")
      : t.every((r) => Number.isSafeInteger(r))
    : !1;
}
function At(e, t) {
  if (typeof t != "string") throw new Error(`${e}: string expected`);
  return !0;
}
function $e(e) {
  if (!Number.isSafeInteger(e)) throw new Error(`invalid integer: ${e}`);
}
function St(e) {
  if (!Array.isArray(e)) throw new Error("array expected");
}
function Ft(e, t) {
  if (!Uo(!0, t)) throw new Error(`${e}: array of strings expected`);
}
function Ro(e, t) {
  if (!Uo(!1, t)) throw new Error(`${e}: array of numbers expected`);
}
function Mo(...e) {
  let t = (i) => i,
    r = (i, a) => (f) => i(a(f)),
    n = e.map((i) => i.encode).reduceRight(r, t),
    o = e.map((i) => i.decode).reduce(r, t);
  return { encode: n, decode: o };
}
function Po(e) {
  let t = typeof e == "string" ? e.split("") : e,
    r = t.length;
  Ft("alphabet", t);
  let n = new Map(t.map((o, i) => [o, i]));
  return {
    encode: (o) => (
      St(o),
      o.map((i) => {
        if (!Number.isSafeInteger(i) || i < 0 || i >= r)
          throw new Error(
            `alphabet.encode: digit index outside alphabet "${i}". Allowed: ${e}`
          );
        return t[i];
      })
    ),
    decode: (o) => (
      St(o),
      o.map((i) => {
        At("alphabet.decode", i);
        let a = n.get(i);
        if (a === void 0)
          throw new Error(`Unknown letter: "${i}". Allowed: ${e}`);
        return a;
      })
    ),
  };
}
function ko(e = "") {
  return (
    At("join", e),
    {
      encode: (t) => (Ft("join.decode", t), t.join(e)),
      decode: (t) => (At("join.decode", t), t.split(e)),
    }
  );
}
function Fc(e, t = "=") {
  return (
    $e(e),
    At("padding", t),
    {
      encode(r) {
        for (Ft("padding.encode", r); (r.length * e) % 8; ) r.push(t);
        return r;
      },
      decode(r) {
        Ft("padding.decode", r);
        let n = r.length;
        if ((n * e) % 8)
          throw new Error(
            "padding: invalid, string should have whole number of bytes"
          );
        for (; n > 0 && r[n - 1] === t; n--)
          if (((n - 1) * e) % 8 === 0)
            throw new Error("padding: invalid, string has too much padding");
        return r.slice(0, n);
      },
    }
  );
}
function Oo(e, t, r) {
  if (t < 2)
    throw new Error(
      `convertRadix: invalid from=${t}, base cannot be less than 2`
    );
  if (r < 2)
    throw new Error(
      `convertRadix: invalid to=${r}, base cannot be less than 2`
    );
  if ((St(e), !e.length)) return [];
  let n = 0,
    o = [],
    i = Array.from(e, (f) => {
      if (($e(f), f < 0 || f >= t)) throw new Error(`invalid integer: ${f}`);
      return f;
    }),
    a = i.length;
  for (;;) {
    let f = 0,
      u = !0;
    for (let d = n; d < a; d++) {
      let s = i[d],
        c = t * f,
        l = c + s;
      if (!Number.isSafeInteger(l) || c / t !== f || l - s !== c)
        throw new Error("convertRadix: carry overflow");
      let p = l / r;
      f = l % r;
      let h = Math.floor(p);
      if (((i[d] = h), !Number.isSafeInteger(h) || h * r + f !== l))
        throw new Error("convertRadix: carry overflow");
      if (u) h ? (u = !1) : (n = d);
      else continue;
    }
    if ((o.push(f), u)) break;
  }
  for (let f = 0; f < e.length - 1 && e[f] === 0; f++) o.push(0);
  return o.reverse();
}
var Lo = (e, t) => (t === 0 ? e : Lo(t, e % t)),
  Ct = (e, t) => e + (t - Lo(e, t)),
  Fr = (() => {
    let e = [];
    for (let t = 0; t < 40; t++) e.push(2 ** t);
    return e;
  })();
function No(e, t, r, n) {
  if ((St(e), t <= 0 || t > 32))
    throw new Error(`convertRadix2: wrong from=${t}`);
  if (r <= 0 || r > 32) throw new Error(`convertRadix2: wrong to=${r}`);
  if (Ct(t, r) > 32)
    throw new Error(
      `convertRadix2: carry overflow from=${t} to=${r} carryBits=${Ct(t, r)}`
    );
  let o = 0,
    i = 0,
    a = Fr[t],
    f = Fr[r] - 1,
    u = [];
  for (let d of e) {
    if (($e(d), d >= a))
      throw new Error(`convertRadix2: invalid data word=${d} from=${t}`);
    if (((o = (o << t) | d), i + t > 32))
      throw new Error(`convertRadix2: carry overflow pos=${i} from=${t}`);
    for (i += t; i >= r; i -= r) u.push(((o >> (i - r)) & f) >>> 0);
    let s = Fr[i];
    if (s === void 0) throw new Error("invalid carry");
    o &= s - 1;
  }
  if (((o = (o << (r - i)) & f), !n && i >= t))
    throw new Error("Excess padding");
  if (!n && o > 0) throw new Error(`Non-zero padding: ${o}`);
  return n && i > 0 && u.push(o >>> 0), u;
}
function Cc(e) {
  $e(e);
  let t = 2 ** 8;
  return {
    encode: (r) => {
      if (!To(r)) throw new Error("radix.encode input should be Uint8Array");
      return Oo(Array.from(r), t, e);
    },
    decode: (r) => (Ro("radix.decode", r), Uint8Array.from(Oo(r, e, t))),
  };
}
function Ic(e, t = !1) {
  if (($e(e), e <= 0 || e > 32))
    throw new Error("radix2: bits should be in (0..32]");
  if (Ct(8, e) > 32 || Ct(e, 8) > 32) throw new Error("radix2: carry overflow");
  return {
    encode: (r) => {
      if (!To(r)) throw new Error("radix2.encode input should be Uint8Array");
      return No(Array.from(r), 8, e, !t);
    },
    decode: (r) => (Ro("radix2.decode", r), Uint8Array.from(No(r, e, 8, t))),
  };
}
var zl = Mo(Ic(5), Po("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"), Fc(5), ko(""));
var _c = (e) => Mo(Cc(58), Po(e), ko("")),
  Wl = _c("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz");
var jl = {
  waku: {
    publish: "waku_publish",
    batchPublish: "waku_batchPublish",
    subscribe: "waku_subscribe",
    batchSubscribe: "waku_batchSubscribe",
    subscription: "waku_subscription",
    unsubscribe: "waku_unsubscribe",
    batchUnsubscribe: "waku_batchUnsubscribe",
    batchFetchMessages: "waku_batchFetchMessages",
  },
  irn: {
    publish: "irn_publish",
    batchPublish: "irn_batchPublish",
    subscribe: "irn_subscribe",
    batchSubscribe: "irn_batchSubscribe",
    subscription: "irn_subscription",
    unsubscribe: "irn_unsubscribe",
    batchUnsubscribe: "irn_batchUnsubscribe",
    batchFetchMessages: "irn_batchFetchMessages",
  },
  iridium: {
    publish: "iridium_publish",
    batchPublish: "iridium_batchPublish",
    subscribe: "iridium_subscribe",
    batchSubscribe: "iridium_batchSubscribe",
    subscription: "iridium_subscription",
    unsubscribe: "iridium_unsubscribe",
    batchUnsubscribe: "iridium_batchUnsubscribe",
    batchFetchMessages: "iridium_batchFetchMessages",
  },
};
var Nt = class {};
var ai = st(fn()),
  Tt = st(Jt());
var Br = class extends Nt {
    constructor(t) {
      super();
    }
  },
  ii = Tt.FIVE_SECONDS,
  zc = { pulse: "heartbeat_pulse" },
  si = class e extends Br {
    constructor(t) {
      super(t),
        (this.events = new ai.EventEmitter()),
        (this.interval = ii),
        (this.interval = t?.interval || ii);
    }
    static init(t) {
      return y(this, null, function* () {
        let r = new e(t);
        return yield r.init(), r;
      });
    }
    init() {
      return y(this, null, function* () {
        yield this.initialize();
      });
    }
    stop() {
      clearInterval(this.intervalRef);
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
    initialize() {
      return y(this, null, function* () {
        this.intervalRef = setInterval(
          () => this.pulse(),
          (0, Tt.toMiliseconds)(this.interval)
        );
      });
    }
    pulse() {
      this.events.emit(zc.pulse);
    }
  };
var Wc =
    /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
  Hc =
    /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
  jc = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function Kc(e, t) {
  if (
    e === "__proto__" ||
    (e === "constructor" && t && typeof t == "object" && "prototype" in t)
  ) {
    Vc(e);
    return;
  }
  return t;
}
function Vc(e) {
  console.warn(`[destr] Dropping "${e}" key to prevent prototype pollution.`);
}
function Xe(e, t = {}) {
  if (typeof e != "string") return e;
  if (e[0] === '"' && e[e.length - 1] === '"' && e.indexOf("\\") === -1)
    return e.slice(1, -1);
  let r = e.trim();
  if (r.length <= 9)
    switch (r.toLowerCase()) {
      case "true":
        return !0;
      case "false":
        return !1;
      case "undefined":
        return;
      case "null":
        return null;
      case "nan":
        return Number.NaN;
      case "infinity":
        return Number.POSITIVE_INFINITY;
      case "-infinity":
        return Number.NEGATIVE_INFINITY;
    }
  if (!jc.test(e)) {
    if (t.strict) throw new SyntaxError("[destr] Invalid JSON");
    return e;
  }
  try {
    if (Wc.test(e) || Hc.test(e)) {
      if (t.strict) throw new Error("[destr] Possible prototype pollution");
      return JSON.parse(e, Kc);
    }
    return JSON.parse(e);
  } catch (n) {
    if (t.strict) throw n;
    return e;
  }
}
function qc(e) {
  return !e || typeof e.then != "function" ? Promise.resolve(e) : e;
}
function q(e, ...t) {
  try {
    return qc(e(...t));
  } catch (r) {
    return Promise.reject(r);
  }
}
function $c(e) {
  let t = typeof e;
  return e === null || (t !== "object" && t !== "function");
}
function Gc(e) {
  let t = Object.getPrototypeOf(e);
  return !t || t.isPrototypeOf(Object);
}
function Ze(e) {
  if ($c(e)) return String(e);
  if (Gc(e) || Array.isArray(e)) return JSON.stringify(e);
  if (typeof e.toJSON == "function") return Ze(e.toJSON());
  throw new Error("[unstorage] Cannot stringify value!");
}
var Or = "base64:";
function ui(e) {
  return typeof e == "string" ? e : Or + Jc(e);
}
function ci(e) {
  return typeof e != "string" || !e.startsWith(Or) ? e : Yc(e.slice(Or.length));
}
function Yc(e) {
  return globalThis.Buffer
    ? Buffer.from(e, "base64")
    : Uint8Array.from(globalThis.atob(e), (t) => t.codePointAt(0));
}
function Jc(e) {
  return globalThis.Buffer
    ? Buffer.from(e).toString("base64")
    : globalThis.btoa(String.fromCodePoint(...e));
}
function ee(e) {
  return (
    (e &&
      e
        .split("?")[0]
        ?.replace(/[/\\]/g, ":")
        .replace(/:+/g, ":")
        .replace(/^:|:$/g, "")) ||
    ""
  );
}
function fi(...e) {
  return ee(e.join(":"));
}
function Qe(e) {
  return (e = ee(e)), e ? e + ":" : "";
}
function li(e, t) {
  if (t === void 0) return !0;
  let r = 0,
    n = e.indexOf(":");
  for (; n > -1; ) r++, (n = e.indexOf(":", n + 1));
  return r <= t;
}
function di(e, t) {
  return t
    ? e.startsWith(t) && e[e.length - 1] !== "$"
    : e[e.length - 1] !== "$";
}
var Xc = "memory",
  Zc = () => {
    let e = new Map();
    return {
      name: Xc,
      getInstance: () => e,
      hasItem(t) {
        return e.has(t);
      },
      getItem(t) {
        return e.get(t) ?? null;
      },
      getItemRaw(t) {
        return e.get(t) ?? null;
      },
      setItem(t, r) {
        e.set(t, r);
      },
      setItemRaw(t, r) {
        e.set(t, r);
      },
      removeItem(t) {
        e.delete(t);
      },
      getKeys() {
        return [...e.keys()];
      },
      clear() {
        e.clear();
      },
      dispose() {
        e.clear();
      },
    };
  };
function bi(e = {}) {
  let t = {
      mounts: { "": e.driver || Zc() },
      mountpoints: [""],
      watching: !1,
      watchListeners: [],
      unwatch: {},
    },
    r = (s) => {
      for (let c of t.mountpoints)
        if (s.startsWith(c))
          return {
            base: c,
            relativeKey: s.slice(c.length),
            driver: t.mounts[c],
          };
      return { base: "", relativeKey: s, driver: t.mounts[""] };
    },
    n = (s, c) =>
      t.mountpoints
        .filter((l) => l.startsWith(s) || (c && s.startsWith(l)))
        .map((l) => ({
          relativeBase: s.length > l.length ? s.slice(l.length) : void 0,
          mountpoint: l,
          driver: t.mounts[l],
        })),
    o = (s, c) => {
      if (t.watching) {
        c = ee(c);
        for (let l of t.watchListeners) l(s, c);
      }
    },
    i = () =>
      y(this, null, function* () {
        if (!t.watching) {
          t.watching = !0;
          for (let s in t.mounts) t.unwatch[s] = yield hi(t.mounts[s], o, s);
        }
      }),
    a = () =>
      y(this, null, function* () {
        if (t.watching) {
          for (let s in t.unwatch) yield t.unwatch[s]();
          (t.unwatch = {}), (t.watching = !1);
        }
      }),
    f = (s, c, l) => {
      let p = new Map(),
        h = (b) => {
          let g = p.get(b.base);
          return (
            g ||
              ((g = { driver: b.driver, base: b.base, items: [] }),
              p.set(b.base, g)),
            g
          );
        };
      for (let b of s) {
        let g = typeof b == "string",
          x = ee(g ? b : b.key),
          v = g ? void 0 : b.value,
          w = g || !b.options ? c : I(I({}, c), b.options),
          A = r(x);
        h(A).items.push({
          key: x,
          value: v,
          relativeKey: A.relativeKey,
          options: w,
        });
      }
      return Promise.all([...p.values()].map((b) => l(b))).then((b) =>
        b.flat()
      );
    },
    u = {
      hasItem(s, c = {}) {
        s = ee(s);
        let { relativeKey: l, driver: p } = r(s);
        return q(p.hasItem, l, c);
      },
      getItem(s, c = {}) {
        s = ee(s);
        let { relativeKey: l, driver: p } = r(s);
        return q(p.getItem, l, c).then((h) => Xe(h));
      },
      getItems(s, c = {}) {
        return f(s, c, (l) =>
          l.driver.getItems
            ? q(
                l.driver.getItems,
                l.items.map((p) => ({
                  key: p.relativeKey,
                  options: p.options,
                })),
                c
              ).then((p) =>
                p.map((h) => ({ key: fi(l.base, h.key), value: Xe(h.value) }))
              )
            : Promise.all(
                l.items.map((p) =>
                  q(l.driver.getItem, p.relativeKey, p.options).then((h) => ({
                    key: p.key,
                    value: Xe(h),
                  }))
                )
              )
        );
      },
      getItemRaw(s, c = {}) {
        s = ee(s);
        let { relativeKey: l, driver: p } = r(s);
        return p.getItemRaw
          ? q(p.getItemRaw, l, c)
          : q(p.getItem, l, c).then((h) => ci(h));
      },
      setItem(p, h) {
        return y(this, arguments, function* (s, c, l = {}) {
          if (c === void 0) return u.removeItem(s);
          s = ee(s);
          let { relativeKey: b, driver: g } = r(s);
          g.setItem &&
            (yield q(g.setItem, b, Ze(c), l), g.watch || o("update", s));
        });
      },
      setItems(s, c) {
        return y(this, null, function* () {
          yield f(s, c, (l) =>
            y(this, null, function* () {
              if (l.driver.setItems)
                return q(
                  l.driver.setItems,
                  l.items.map((p) => ({
                    key: p.relativeKey,
                    value: Ze(p.value),
                    options: p.options,
                  })),
                  c
                );
              l.driver.setItem &&
                (yield Promise.all(
                  l.items.map((p) =>
                    q(l.driver.setItem, p.relativeKey, Ze(p.value), p.options)
                  )
                ));
            })
          );
        });
      },
      setItemRaw(p, h) {
        return y(this, arguments, function* (s, c, l = {}) {
          if (c === void 0) return u.removeItem(s, l);
          s = ee(s);
          let { relativeKey: b, driver: g } = r(s);
          if (g.setItemRaw) yield q(g.setItemRaw, b, c, l);
          else if (g.setItem) yield q(g.setItem, b, ui(c), l);
          else return;
          g.watch || o("update", s);
        });
      },
      removeItem(l) {
        return y(this, arguments, function* (s, c = {}) {
          typeof c == "boolean" && (c = { removeMeta: c }), (s = ee(s));
          let { relativeKey: p, driver: h } = r(s);
          h.removeItem &&
            (yield q(h.removeItem, p, c),
            (c.removeMeta || c.removeMata) &&
              (yield q(h.removeItem, p + "$", c)),
            h.watch || o("remove", s));
        });
      },
      getMeta(l) {
        return y(this, arguments, function* (s, c = {}) {
          typeof c == "boolean" && (c = { nativeOnly: c }), (s = ee(s));
          let { relativeKey: p, driver: h } = r(s),
            b = Object.create(null);
          if (
            (h.getMeta && Object.assign(b, yield q(h.getMeta, p, c)),
            !c.nativeOnly)
          ) {
            let g = yield q(h.getItem, p + "$", c).then((x) => Xe(x));
            g &&
              typeof g == "object" &&
              (typeof g.atime == "string" && (g.atime = new Date(g.atime)),
              typeof g.mtime == "string" && (g.mtime = new Date(g.mtime)),
              Object.assign(b, g));
          }
          return b;
        });
      },
      setMeta(s, c, l = {}) {
        return this.setItem(s + "$", c, l);
      },
      removeMeta(s, c = {}) {
        return this.removeItem(s + "$", c);
      },
      getKeys(l) {
        return y(this, arguments, function* (s, c = {}) {
          s = Qe(s);
          let p = n(s, !0),
            h = [],
            b = [],
            g = !0;
          for (let v of p) {
            v.driver.flags?.maxDepth || (g = !1);
            let w = yield q(v.driver.getKeys, v.relativeBase, c);
            for (let A of w) {
              let B = v.mountpoint + ee(A);
              h.some((M) => B.startsWith(M)) || b.push(B);
            }
            h = [v.mountpoint, ...h.filter((A) => !A.startsWith(v.mountpoint))];
          }
          let x = c.maxDepth !== void 0 && !g;
          return b.filter((v) => (!x || li(v, c.maxDepth)) && di(v, s));
        });
      },
      clear(l) {
        return y(this, arguments, function* (s, c = {}) {
          (s = Qe(s)),
            yield Promise.all(
              n(s, !1).map((p) =>
                y(this, null, function* () {
                  if (p.driver.clear)
                    return q(p.driver.clear, p.relativeBase, c);
                  if (p.driver.removeItem) {
                    let h = yield p.driver.getKeys(p.relativeBase || "", c);
                    return Promise.all(h.map((b) => p.driver.removeItem(b, c)));
                  }
                })
              )
            );
        });
      },
      dispose() {
        return y(this, null, function* () {
          yield Promise.all(Object.values(t.mounts).map((s) => pi(s)));
        });
      },
      watch(s) {
        return y(this, null, function* () {
          return (
            yield i(),
            t.watchListeners.push(s),
            () =>
              y(this, null, function* () {
                (t.watchListeners = t.watchListeners.filter((c) => c !== s)),
                  t.watchListeners.length === 0 && (yield a());
              })
          );
        });
      },
      unwatch() {
        return y(this, null, function* () {
          (t.watchListeners = []), yield a();
        });
      },
      mount(s, c) {
        if (((s = Qe(s)), s && t.mounts[s]))
          throw new Error(`already mounted at ${s}`);
        return (
          s &&
            (t.mountpoints.push(s),
            t.mountpoints.sort((l, p) => p.length - l.length)),
          (t.mounts[s] = c),
          t.watching &&
            Promise.resolve(hi(c, o, s))
              .then((l) => {
                t.unwatch[s] = l;
              })
              .catch(console.error),
          u
        );
      },
      unmount(s, c = !0) {
        return y(this, null, function* () {
          (s = Qe(s)),
            !(!s || !t.mounts[s]) &&
              (t.watching &&
                s in t.unwatch &&
                (t.unwatch[s]?.(), delete t.unwatch[s]),
              c && (yield pi(t.mounts[s])),
              (t.mountpoints = t.mountpoints.filter((l) => l !== s)),
              delete t.mounts[s]);
        });
      },
      getMount(s = "") {
        s = ee(s) + ":";
        let c = r(s);
        return { driver: c.driver, base: c.base };
      },
      getMounts(s = "", c = {}) {
        return (
          (s = ee(s)),
          n(s, c.parents).map((p) => ({ driver: p.driver, base: p.mountpoint }))
        );
      },
      keys: (s, c = {}) => u.getKeys(s, c),
      get: (s, c = {}) => u.getItem(s, c),
      set: (s, c, l = {}) => u.setItem(s, c, l),
      has: (s, c = {}) => u.hasItem(s, c),
      del: (s, c = {}) => u.removeItem(s, c),
      remove: (s, c = {}) => u.removeItem(s, c),
    };
  return u;
}
function hi(e, t, r) {
  return e.watch ? e.watch((n, o) => t(n, r + o)) : () => {};
}
function pi(e) {
  return y(this, null, function* () {
    typeof e.dispose == "function" && (yield q(e.dispose));
  });
}
var Qc = "idb-keyval",
  ef = (e = {}) => {
    let t = e.base && e.base.length > 0 ? `${e.base}:` : "",
      r = (i) => t + i,
      n;
    return (
      e.dbName && e.storeName && (n = ln(e.dbName, e.storeName)),
      {
        name: Qc,
        options: e,
        hasItem(i) {
          return y(this, null, function* () {
            return !(typeof (yield Wt(r(i), n)) > "u");
          });
        },
        getItem(i) {
          return y(this, null, function* () {
            return (yield Wt(r(i), n)) ?? null;
          });
        },
        setItem(i, a) {
          return dn(r(i), a, n);
        },
        removeItem(i) {
          return hn(r(i), n);
        },
        getKeys() {
          return bn(n);
        },
        clear() {
          return pn(n);
        },
      }
    );
  },
  tf = "WALLET_CONNECT_V2_INDEXED_DB",
  rf = "keyvaluestorage",
  Tr = class {
    constructor() {
      this.indexedDb = bi({ driver: ef({ dbName: tf, storeName: rf }) });
    }
    getKeys() {
      return y(this, null, function* () {
        return this.indexedDb.getKeys();
      });
    }
    getEntries() {
      return y(this, null, function* () {
        return (yield this.indexedDb.getItems(
          yield this.indexedDb.getKeys()
        )).map((t) => [t.key, t.value]);
      });
    }
    getItem(t) {
      return y(this, null, function* () {
        let r = yield this.indexedDb.getItem(t);
        if (r !== null) return r;
      });
    }
    setItem(t, r) {
      return y(this, null, function* () {
        yield this.indexedDb.setItem(t, ve(r));
      });
    }
    removeItem(t) {
      return y(this, null, function* () {
        yield this.indexedDb.removeItem(t);
      });
    }
  },
  Nr =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : typeof self < "u"
      ? self
      : {},
  Ut = { exports: {} };
(function () {
  let e;
  function t() {}
  (e = t),
    (e.prototype.getItem = function (r) {
      return this.hasOwnProperty(r) ? String(this[r]) : null;
    }),
    (e.prototype.setItem = function (r, n) {
      this[r] = String(n);
    }),
    (e.prototype.removeItem = function (r) {
      delete this[r];
    }),
    (e.prototype.clear = function () {
      let r = this;
      Object.keys(r).forEach(function (n) {
        (r[n] = void 0), delete r[n];
      });
    }),
    (e.prototype.key = function (r) {
      return (r = r || 0), Object.keys(this)[r];
    }),
    e.prototype.__defineGetter__("length", function () {
      return Object.keys(this).length;
    }),
    typeof Nr < "u" && Nr.localStorage
      ? (Ut.exports = Nr.localStorage)
      : typeof window < "u" && window.localStorage
      ? (Ut.exports = window.localStorage)
      : (Ut.exports = new t());
})();
function nf(e) {
  var t;
  return [e[0], xe((t = e[1]) != null ? t : "")];
}
var Ur = class {
    constructor() {
      this.localStorage = Ut.exports;
    }
    getKeys() {
      return y(this, null, function* () {
        return Object.keys(this.localStorage);
      });
    }
    getEntries() {
      return y(this, null, function* () {
        return Object.entries(this.localStorage).map(nf);
      });
    }
    getItem(t) {
      return y(this, null, function* () {
        let r = this.localStorage.getItem(t);
        if (r !== null) return xe(r);
      });
    }
    setItem(t, r) {
      return y(this, null, function* () {
        this.localStorage.setItem(t, ve(r));
      });
    }
    removeItem(t) {
      return y(this, null, function* () {
        this.localStorage.removeItem(t);
      });
    }
  },
  of = "wc_storage_version",
  gi = 1,
  sf = (e, t, r) =>
    y(void 0, null, function* () {
      let n = of,
        o = yield t.getItem(n);
      if (o && o >= gi) {
        r(t);
        return;
      }
      let i = yield e.getKeys();
      if (!i.length) {
        r(t);
        return;
      }
      let a = [];
      for (; i.length; ) {
        let f = i.shift();
        if (!f) continue;
        let u = f.toLowerCase();
        if (
          u.includes("wc@") ||
          u.includes("walletconnect") ||
          u.includes("wc_") ||
          u.includes("wallet_connect")
        ) {
          let d = yield e.getItem(f);
          yield t.setItem(f, d), a.push(f);
        }
      }
      yield t.setItem(n, gi), r(t), af(e, a);
    }),
  af = (e, t) =>
    y(void 0, null, function* () {
      t.length &&
        t.forEach((r) =>
          y(void 0, null, function* () {
            yield e.removeItem(r);
          })
        );
    }),
  wi = class {
    constructor() {
      (this.initialized = !1),
        (this.setInitialized = (r) => {
          (this.storage = r), (this.initialized = !0);
        });
      let t = new Ur();
      this.storage = t;
      try {
        let r = new Tr();
        sf(t, r, this.setInitialized);
      } catch {
        this.initialized = !0;
      }
    }
    getKeys() {
      return y(this, null, function* () {
        return yield this.initialize(), this.storage.getKeys();
      });
    }
    getEntries() {
      return y(this, null, function* () {
        return yield this.initialize(), this.storage.getEntries();
      });
    }
    getItem(t) {
      return y(this, null, function* () {
        return yield this.initialize(), this.storage.getItem(t);
      });
    }
    setItem(t, r) {
      return y(this, null, function* () {
        return yield this.initialize(), this.storage.setItem(t, r);
      });
    }
    removeItem(t) {
      return y(this, null, function* () {
        return yield this.initialize(), this.storage.removeItem(t);
      });
    }
    initialize() {
      return y(this, null, function* () {
        this.initialized ||
          (yield new Promise((t) => {
            let r = setInterval(() => {
              this.initialized && (clearInterval(r), t());
            }, 20);
          }));
      });
    }
  };
var Lr = {};
ne(Lr, { identity: () => hf });
function uf(e, t) {
  if (e.length >= 255) throw new TypeError("Alphabet too long");
  for (var r = new Uint8Array(256), n = 0; n < r.length; n++) r[n] = 255;
  for (var o = 0; o < e.length; o++) {
    var i = e.charAt(o),
      a = i.charCodeAt(0);
    if (r[a] !== 255) throw new TypeError(i + " is ambiguous");
    r[a] = o;
  }
  var f = e.length,
    u = e.charAt(0),
    d = Math.log(f) / Math.log(256),
    s = Math.log(256) / Math.log(f);
  function c(h) {
    if (
      (h instanceof Uint8Array ||
        (ArrayBuffer.isView(h)
          ? (h = new Uint8Array(h.buffer, h.byteOffset, h.byteLength))
          : Array.isArray(h) && (h = Uint8Array.from(h))),
      !(h instanceof Uint8Array))
    )
      throw new TypeError("Expected Uint8Array");
    if (h.length === 0) return "";
    for (var b = 0, g = 0, x = 0, v = h.length; x !== v && h[x] === 0; )
      x++, b++;
    for (var w = ((v - x) * s + 1) >>> 0, A = new Uint8Array(w); x !== v; ) {
      for (
        var B = h[x], M = 0, R = w - 1;
        (B !== 0 || M < g) && R !== -1;
        R--, M++
      )
        (B += (256 * A[R]) >>> 0), (A[R] = B % f >>> 0), (B = (B / f) >>> 0);
      if (B !== 0) throw new Error("Non-zero carry");
      (g = M), x++;
    }
    for (var O = w - g; O !== w && A[O] === 0; ) O++;
    for (var z = u.repeat(b); O < w; ++O) z += e.charAt(A[O]);
    return z;
  }
  function l(h) {
    if (typeof h != "string") throw new TypeError("Expected String");
    if (h.length === 0) return new Uint8Array();
    var b = 0;
    if (h[b] !== " ") {
      for (var g = 0, x = 0; h[b] === u; ) g++, b++;
      for (
        var v = ((h.length - b) * d + 1) >>> 0, w = new Uint8Array(v);
        h[b];

      ) {
        var A = r[h.charCodeAt(b)];
        if (A === 255) return;
        for (var B = 0, M = v - 1; (A !== 0 || B < x) && M !== -1; M--, B++)
          (A += (f * w[M]) >>> 0),
            (w[M] = A % 256 >>> 0),
            (A = (A / 256) >>> 0);
        if (A !== 0) throw new Error("Non-zero carry");
        (x = B), b++;
      }
      if (h[b] !== " ") {
        for (var R = v - x; R !== v && w[R] === 0; ) R++;
        for (var O = new Uint8Array(g + (v - R)), z = g; R !== v; )
          O[z++] = w[R++];
        return O;
      }
    }
  }
  function p(h) {
    var b = l(h);
    if (b) return b;
    throw new Error(`Non-${t} character`);
  }
  return { encode: c, decodeUnsafe: l, decode: p };
}
var cf = uf,
  ff = cf,
  Di = ff;
var bd = new Uint8Array(0);
var mi = (e, t) => {
    if (e === t) return !0;
    if (e.byteLength !== t.byteLength) return !1;
    for (let r = 0; r < e.byteLength; r++) if (e[r] !== t[r]) return !1;
    return !0;
  },
  de = (e) => {
    if (e instanceof Uint8Array && e.constructor.name === "Uint8Array")
      return e;
    if (e instanceof ArrayBuffer) return new Uint8Array(e);
    if (ArrayBuffer.isView(e))
      return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
    throw new Error("Unknown type, must be binary type");
  };
var yi = (e) => new TextEncoder().encode(e),
  Ei = (e) => new TextDecoder().decode(e);
var Rr = class {
    constructor(t, r, n) {
      (this.name = t), (this.prefix = r), (this.baseEncode = n);
    }
    encode(t) {
      if (t instanceof Uint8Array) return `${this.prefix}${this.baseEncode(t)}`;
      throw Error("Unknown type, must be binary type");
    }
  },
  Mr = class {
    constructor(t, r, n) {
      if (((this.name = t), (this.prefix = r), r.codePointAt(0) === void 0))
        throw new Error("Invalid prefix character");
      (this.prefixCodePoint = r.codePointAt(0)), (this.baseDecode = n);
    }
    decode(t) {
      if (typeof t == "string") {
        if (t.codePointAt(0) !== this.prefixCodePoint)
          throw Error(
            `Unable to decode multibase string ${JSON.stringify(t)}, ${
              this.name
            } decoder only supports inputs prefixed with ${this.prefix}`
          );
        return this.baseDecode(t.slice(this.prefix.length));
      } else throw Error("Can only multibase decode strings");
    }
    or(t) {
      return vi(this, t);
    }
  },
  Pr = class {
    constructor(t) {
      this.decoders = t;
    }
    or(t) {
      return vi(this, t);
    }
    decode(t) {
      let r = t[0],
        n = this.decoders[r];
      if (n) return n.decode(t);
      throw RangeError(
        `Unable to decode multibase string ${JSON.stringify(
          t
        )}, only inputs prefixed with ${Object.keys(
          this.decoders
        )} are supported`
      );
    }
  },
  vi = (e, t) =>
    new Pr(
      I(I({}, e.decoders || { [e.prefix]: e }), t.decoders || { [t.prefix]: t })
    ),
  kr = class {
    constructor(t, r, n, o) {
      (this.name = t),
        (this.prefix = r),
        (this.baseEncode = n),
        (this.baseDecode = o),
        (this.encoder = new Rr(t, r, n)),
        (this.decoder = new Mr(t, r, o));
    }
    encode(t) {
      return this.encoder.encode(t);
    }
    decode(t) {
      return this.decoder.decode(t);
    }
  },
  Re = ({ name: e, prefix: t, encode: r, decode: n }) => new kr(e, t, r, n),
  me = ({ prefix: e, name: t, alphabet: r }) => {
    let { encode: n, decode: o } = Di(r, t);
    return Re({ prefix: e, name: t, encode: n, decode: (i) => de(o(i)) });
  },
  lf = (e, t, r, n) => {
    let o = {};
    for (let s = 0; s < t.length; ++s) o[t[s]] = s;
    let i = e.length;
    for (; e[i - 1] === "="; ) --i;
    let a = new Uint8Array(((i * r) / 8) | 0),
      f = 0,
      u = 0,
      d = 0;
    for (let s = 0; s < i; ++s) {
      let c = o[e[s]];
      if (c === void 0) throw new SyntaxError(`Non-${n} character`);
      (u = (u << r) | c),
        (f += r),
        f >= 8 && ((f -= 8), (a[d++] = 255 & (u >> f)));
    }
    if (f >= r || 255 & (u << (8 - f)))
      throw new SyntaxError("Unexpected end of data");
    return a;
  },
  df = (e, t, r) => {
    let n = t[t.length - 1] === "=",
      o = (1 << r) - 1,
      i = "",
      a = 0,
      f = 0;
    for (let u = 0; u < e.length; ++u)
      for (f = (f << 8) | e[u], a += 8; a > r; )
        (a -= r), (i += t[o & (f >> a)]);
    if ((a && (i += t[o & (f << (r - a))]), n))
      for (; (i.length * r) & 7; ) i += "=";
    return i;
  },
  j = ({ name: e, prefix: t, bitsPerChar: r, alphabet: n }) =>
    Re({
      prefix: t,
      name: e,
      encode(o) {
        return df(o, n, r);
      },
      decode(o) {
        return lf(o, n, r, e);
      },
    });
var hf = Re({
  prefix: "\0",
  name: "identity",
  encode: (e) => Ei(e),
  decode: (e) => yi(e),
});
var zr = {};
ne(zr, { base2: () => pf });
var pf = j({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 });
var Wr = {};
ne(Wr, { base8: () => bf });
var bf = j({
  prefix: "7",
  name: "base8",
  alphabet: "01234567",
  bitsPerChar: 3,
});
var Hr = {};
ne(Hr, { base10: () => gf });
var gf = me({ prefix: "9", name: "base10", alphabet: "0123456789" });
var jr = {};
ne(jr, { base16: () => wf, base16upper: () => Df });
var wf = j({
    prefix: "f",
    name: "base16",
    alphabet: "0123456789abcdef",
    bitsPerChar: 4,
  }),
  Df = j({
    prefix: "F",
    name: "base16upper",
    alphabet: "0123456789ABCDEF",
    bitsPerChar: 4,
  });
var Kr = {};
ne(Kr, {
  base32: () => Me,
  base32hex: () => xf,
  base32hexpad: () => Af,
  base32hexpadupper: () => Sf,
  base32hexupper: () => vf,
  base32pad: () => yf,
  base32padupper: () => Ef,
  base32upper: () => mf,
  base32z: () => Ff,
});
var Me = j({
    prefix: "b",
    name: "base32",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
    bitsPerChar: 5,
  }),
  mf = j({
    prefix: "B",
    name: "base32upper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
    bitsPerChar: 5,
  }),
  yf = j({
    prefix: "c",
    name: "base32pad",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
    bitsPerChar: 5,
  }),
  Ef = j({
    prefix: "C",
    name: "base32padupper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
    bitsPerChar: 5,
  }),
  xf = j({
    prefix: "v",
    name: "base32hex",
    alphabet: "0123456789abcdefghijklmnopqrstuv",
    bitsPerChar: 5,
  }),
  vf = j({
    prefix: "V",
    name: "base32hexupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
    bitsPerChar: 5,
  }),
  Af = j({
    prefix: "t",
    name: "base32hexpad",
    alphabet: "0123456789abcdefghijklmnopqrstuv=",
    bitsPerChar: 5,
  }),
  Sf = j({
    prefix: "T",
    name: "base32hexpadupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
    bitsPerChar: 5,
  }),
  Ff = j({
    prefix: "h",
    name: "base32z",
    alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
    bitsPerChar: 5,
  });
var Vr = {};
ne(Vr, { base36: () => Cf, base36upper: () => If });
var Cf = me({
    prefix: "k",
    name: "base36",
    alphabet: "0123456789abcdefghijklmnopqrstuvwxyz",
  }),
  If = me({
    prefix: "K",
    name: "base36upper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  });
var qr = {};
ne(qr, { base58btc: () => ae, base58flickr: () => _f });
var ae = me({
    name: "base58btc",
    prefix: "z",
    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
  }),
  _f = me({
    name: "base58flickr",
    prefix: "Z",
    alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",
  });
var $r = {};
ne($r, {
  base64: () => Bf,
  base64pad: () => Of,
  base64url: () => Nf,
  base64urlpad: () => Tf,
});
var Bf = j({
    prefix: "m",
    name: "base64",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    bitsPerChar: 6,
  }),
  Of = j({
    prefix: "M",
    name: "base64pad",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    bitsPerChar: 6,
  }),
  Nf = j({
    prefix: "u",
    name: "base64url",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
    bitsPerChar: 6,
  }),
  Tf = j({
    prefix: "U",
    name: "base64urlpad",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
    bitsPerChar: 6,
  });
var Gr = {};
ne(Gr, { base256emoji: () => kf });
var Ai = Array.from(
    "\u{1F680}\u{1FA90}\u2604\u{1F6F0}\u{1F30C}\u{1F311}\u{1F312}\u{1F313}\u{1F314}\u{1F315}\u{1F316}\u{1F317}\u{1F318}\u{1F30D}\u{1F30F}\u{1F30E}\u{1F409}\u2600\u{1F4BB}\u{1F5A5}\u{1F4BE}\u{1F4BF}\u{1F602}\u2764\u{1F60D}\u{1F923}\u{1F60A}\u{1F64F}\u{1F495}\u{1F62D}\u{1F618}\u{1F44D}\u{1F605}\u{1F44F}\u{1F601}\u{1F525}\u{1F970}\u{1F494}\u{1F496}\u{1F499}\u{1F622}\u{1F914}\u{1F606}\u{1F644}\u{1F4AA}\u{1F609}\u263A\u{1F44C}\u{1F917}\u{1F49C}\u{1F614}\u{1F60E}\u{1F607}\u{1F339}\u{1F926}\u{1F389}\u{1F49E}\u270C\u2728\u{1F937}\u{1F631}\u{1F60C}\u{1F338}\u{1F64C}\u{1F60B}\u{1F497}\u{1F49A}\u{1F60F}\u{1F49B}\u{1F642}\u{1F493}\u{1F929}\u{1F604}\u{1F600}\u{1F5A4}\u{1F603}\u{1F4AF}\u{1F648}\u{1F447}\u{1F3B6}\u{1F612}\u{1F92D}\u2763\u{1F61C}\u{1F48B}\u{1F440}\u{1F62A}\u{1F611}\u{1F4A5}\u{1F64B}\u{1F61E}\u{1F629}\u{1F621}\u{1F92A}\u{1F44A}\u{1F973}\u{1F625}\u{1F924}\u{1F449}\u{1F483}\u{1F633}\u270B\u{1F61A}\u{1F61D}\u{1F634}\u{1F31F}\u{1F62C}\u{1F643}\u{1F340}\u{1F337}\u{1F63B}\u{1F613}\u2B50\u2705\u{1F97A}\u{1F308}\u{1F608}\u{1F918}\u{1F4A6}\u2714\u{1F623}\u{1F3C3}\u{1F490}\u2639\u{1F38A}\u{1F498}\u{1F620}\u261D\u{1F615}\u{1F33A}\u{1F382}\u{1F33B}\u{1F610}\u{1F595}\u{1F49D}\u{1F64A}\u{1F639}\u{1F5E3}\u{1F4AB}\u{1F480}\u{1F451}\u{1F3B5}\u{1F91E}\u{1F61B}\u{1F534}\u{1F624}\u{1F33C}\u{1F62B}\u26BD\u{1F919}\u2615\u{1F3C6}\u{1F92B}\u{1F448}\u{1F62E}\u{1F646}\u{1F37B}\u{1F343}\u{1F436}\u{1F481}\u{1F632}\u{1F33F}\u{1F9E1}\u{1F381}\u26A1\u{1F31E}\u{1F388}\u274C\u270A\u{1F44B}\u{1F630}\u{1F928}\u{1F636}\u{1F91D}\u{1F6B6}\u{1F4B0}\u{1F353}\u{1F4A2}\u{1F91F}\u{1F641}\u{1F6A8}\u{1F4A8}\u{1F92C}\u2708\u{1F380}\u{1F37A}\u{1F913}\u{1F619}\u{1F49F}\u{1F331}\u{1F616}\u{1F476}\u{1F974}\u25B6\u27A1\u2753\u{1F48E}\u{1F4B8}\u2B07\u{1F628}\u{1F31A}\u{1F98B}\u{1F637}\u{1F57A}\u26A0\u{1F645}\u{1F61F}\u{1F635}\u{1F44E}\u{1F932}\u{1F920}\u{1F927}\u{1F4CC}\u{1F535}\u{1F485}\u{1F9D0}\u{1F43E}\u{1F352}\u{1F617}\u{1F911}\u{1F30A}\u{1F92F}\u{1F437}\u260E\u{1F4A7}\u{1F62F}\u{1F486}\u{1F446}\u{1F3A4}\u{1F647}\u{1F351}\u2744\u{1F334}\u{1F4A3}\u{1F438}\u{1F48C}\u{1F4CD}\u{1F940}\u{1F922}\u{1F445}\u{1F4A1}\u{1F4A9}\u{1F450}\u{1F4F8}\u{1F47B}\u{1F910}\u{1F92E}\u{1F3BC}\u{1F975}\u{1F6A9}\u{1F34E}\u{1F34A}\u{1F47C}\u{1F48D}\u{1F4E3}\u{1F942}"
  ),
  Uf = Ai.reduce((e, t, r) => ((e[r] = t), e), []),
  Rf = Ai.reduce((e, t, r) => ((e[t.codePointAt(0)] = r), e), []);
function Mf(e) {
  return e.reduce((t, r) => ((t += Uf[r]), t), "");
}
function Pf(e) {
  let t = [];
  for (let r of e) {
    let n = Rf[r.codePointAt(0)];
    if (n === void 0) throw new Error(`Non-base256emoji character: ${r}`);
    t.push(n);
  }
  return new Uint8Array(t);
}
var kf = Re({
  prefix: "\u{1F680}",
  name: "base256emoji",
  encode: Mf,
  decode: Pf,
});
var Zr = {};
ne(Zr, { sha256: () => nl, sha512: () => ol });
var Lf = Ci,
  Si = 128,
  zf = 127,
  Wf = ~zf,
  Hf = Math.pow(2, 31);
function Ci(e, t, r) {
  (t = t || []), (r = r || 0);
  for (var n = r; e >= Hf; ) (t[r++] = (e & 255) | Si), (e /= 128);
  for (; e & Wf; ) (t[r++] = (e & 255) | Si), (e >>>= 7);
  return (t[r] = e | 0), (Ci.bytes = r - n + 1), t;
}
var jf = Yr,
  Kf = 128,
  Fi = 127;
function Yr(e, n) {
  var r = 0,
    n = n || 0,
    o = 0,
    i = n,
    a,
    f = e.length;
  do {
    if (i >= f)
      throw ((Yr.bytes = 0), new RangeError("Could not decode varint"));
    (a = e[i++]),
      (r += o < 28 ? (a & Fi) << o : (a & Fi) * Math.pow(2, o)),
      (o += 7);
  } while (a >= Kf);
  return (Yr.bytes = i - n), r;
}
var Vf = Math.pow(2, 7),
  qf = Math.pow(2, 14),
  $f = Math.pow(2, 21),
  Gf = Math.pow(2, 28),
  Yf = Math.pow(2, 35),
  Jf = Math.pow(2, 42),
  Xf = Math.pow(2, 49),
  Zf = Math.pow(2, 56),
  Qf = Math.pow(2, 63),
  el = function (e) {
    return e < Vf
      ? 1
      : e < qf
      ? 2
      : e < $f
      ? 3
      : e < Gf
      ? 4
      : e < Yf
      ? 5
      : e < Jf
      ? 6
      : e < Xf
      ? 7
      : e < Zf
      ? 8
      : e < Qf
      ? 9
      : 10;
  },
  tl = { encode: Lf, decode: jf, encodingLength: el },
  rl = tl,
  et = rl;
var tt = (e, t = 0) => [et.decode(e, t), et.decode.bytes],
  Pe = (e, t, r = 0) => (et.encode(e, t, r), t),
  ke = (e) => et.encodingLength(e);
var Fe = (e, t) => {
    let r = t.byteLength,
      n = ke(e),
      o = n + ke(r),
      i = new Uint8Array(o + r);
    return Pe(e, i, 0), Pe(r, i, n), i.set(t, o), new Le(e, r, t, i);
  },
  Ii = (e) => {
    let t = de(e),
      [r, n] = tt(t),
      [o, i] = tt(t.subarray(n)),
      a = t.subarray(n + i);
    if (a.byteLength !== o) throw new Error("Incorrect length");
    return new Le(r, o, a, t);
  },
  _i = (e, t) =>
    e === t
      ? !0
      : e.code === t.code && e.size === t.size && mi(e.bytes, t.bytes),
  Le = class {
    constructor(t, r, n, o) {
      (this.code = t), (this.size = r), (this.digest = n), (this.bytes = o);
    }
  };
var Xr = ({ name: e, code: t, encode: r }) => new Jr(e, t, r),
  Jr = class {
    constructor(t, r, n) {
      (this.name = t), (this.code = r), (this.encode = n);
    }
    digest(t) {
      if (t instanceof Uint8Array) {
        let r = this.encode(t);
        return r instanceof Uint8Array
          ? Fe(this.code, r)
          : r.then((n) => Fe(this.code, n));
      } else throw Error("Unknown type, must be binary type");
    }
  };
var Oi = (e) => (t) =>
    y(void 0, null, function* () {
      return new Uint8Array(yield crypto.subtle.digest(e, t));
    }),
  nl = Xr({ name: "sha2-256", code: 18, encode: Oi("SHA-256") }),
  ol = Xr({ name: "sha2-512", code: 19, encode: Oi("SHA-512") });
var Qr = {};
ne(Qr, { identity: () => al });
var Ni = 0,
  il = "identity",
  Ti = de,
  sl = (e) => Fe(Ni, Ti(e)),
  al = { code: Ni, name: il, encode: Ti, digest: sl };
var kd = new TextEncoder(),
  Ld = new TextDecoder();
var kt = class e {
    constructor(t, r, n, o) {
      (this.code = r),
        (this.version = t),
        (this.multihash = n),
        (this.bytes = o),
        (this.byteOffset = o.byteOffset),
        (this.byteLength = o.byteLength),
        (this.asCID = this),
        (this._baseCache = new Map()),
        Object.defineProperties(this, {
          byteOffset: Pt,
          byteLength: Pt,
          code: Mt,
          version: Mt,
          multihash: Mt,
          bytes: Mt,
          _baseCache: Pt,
          asCID: Pt,
        });
    }
    toV0() {
      switch (this.version) {
        case 0:
          return this;
        default: {
          let { code: t, multihash: r } = this;
          if (t !== nt)
            throw new Error("Cannot convert a non dag-pb CID to CIDv0");
          if (r.code !== hl)
            throw new Error(
              "Cannot convert non sha2-256 multihash CID to CIDv0"
            );
          return e.createV0(r);
        }
      }
    }
    toV1() {
      switch (this.version) {
        case 0: {
          let { code: t, digest: r } = this.multihash,
            n = Fe(t, r);
          return e.createV1(this.code, n);
        }
        case 1:
          return this;
        default:
          throw Error(
            `Can not convert CID version ${this.version} to version 0. This is a bug please report`
          );
      }
    }
    equals(t) {
      return (
        t &&
        this.code === t.code &&
        this.version === t.version &&
        _i(this.multihash, t.multihash)
      );
    }
    toString(t) {
      let { bytes: r, version: n, _baseCache: o } = this;
      switch (n) {
        case 0:
          return ll(r, o, t || ae.encoder);
        default:
          return dl(r, o, t || Me.encoder);
      }
    }
    toJSON() {
      return {
        code: this.code,
        version: this.version,
        hash: this.multihash.bytes,
      };
    }
    get [Symbol.toStringTag]() {
      return "CID";
    }
    [Symbol.for("nodejs.util.inspect.custom")]() {
      return "CID(" + this.toString() + ")";
    }
    static isCID(t) {
      return bl(/^0\.0/, gl), !!(t && (t[Ri] || t.asCID === t));
    }
    get toBaseEncodedString() {
      throw new Error("Deprecated, use .toString()");
    }
    get codec() {
      throw new Error(
        '"codec" property is deprecated, use integer "code" property instead'
      );
    }
    get buffer() {
      throw new Error(
        "Deprecated .buffer property, use .bytes to get Uint8Array instead"
      );
    }
    get multibaseName() {
      throw new Error('"multibaseName" property is deprecated');
    }
    get prefix() {
      throw new Error('"prefix" property is deprecated');
    }
    static asCID(t) {
      if (t instanceof e) return t;
      if (t != null && t.asCID === t) {
        let { version: r, code: n, multihash: o, bytes: i } = t;
        return new e(r, n, o, i || Ui(r, n, o.bytes));
      } else if (t != null && t[Ri] === !0) {
        let { version: r, multihash: n, code: o } = t,
          i = Ii(n);
        return e.create(r, o, i);
      } else return null;
    }
    static create(t, r, n) {
      if (typeof r != "number")
        throw new Error("String codecs are no longer supported");
      switch (t) {
        case 0: {
          if (r !== nt)
            throw new Error(
              `Version 0 CID must use dag-pb (code: ${nt}) block encoding`
            );
          return new e(t, r, n, n.bytes);
        }
        case 1: {
          let o = Ui(t, r, n.bytes);
          return new e(t, r, n, o);
        }
        default:
          throw new Error("Invalid version");
      }
    }
    static createV0(t) {
      return e.create(0, nt, t);
    }
    static createV1(t, r) {
      return e.create(1, t, r);
    }
    static decode(t) {
      let [r, n] = e.decodeFirst(t);
      if (n.length) throw new Error("Incorrect length");
      return r;
    }
    static decodeFirst(t) {
      let r = e.inspectBytes(t),
        n = r.size - r.multihashSize,
        o = de(t.subarray(n, n + r.multihashSize));
      if (o.byteLength !== r.multihashSize) throw new Error("Incorrect length");
      let i = o.subarray(r.multihashSize - r.digestSize),
        a = new Le(r.multihashCode, r.digestSize, i, o);
      return [
        r.version === 0 ? e.createV0(a) : e.createV1(r.codec, a),
        t.subarray(r.size),
      ];
    }
    static inspectBytes(t) {
      let r = 0,
        n = () => {
          let [c, l] = tt(t.subarray(r));
          return (r += l), c;
        },
        o = n(),
        i = nt;
      if (
        (o === 18 ? ((o = 0), (r = 0)) : o === 1 && (i = n()),
        o !== 0 && o !== 1)
      )
        throw new RangeError(`Invalid CID version ${o}`);
      let a = r,
        f = n(),
        u = n(),
        d = r + u,
        s = d - a;
      return {
        version: o,
        codec: i,
        multihashCode: f,
        digestSize: u,
        multihashSize: s,
        size: d,
      };
    }
    static parse(t, r) {
      let [n, o] = fl(t, r),
        i = e.decode(o);
      return i._baseCache.set(n, t), i;
    }
  },
  fl = (e, t) => {
    switch (e[0]) {
      case "Q": {
        let r = t || ae;
        return [ae.prefix, r.decode(`${ae.prefix}${e}`)];
      }
      case ae.prefix: {
        let r = t || ae;
        return [ae.prefix, r.decode(e)];
      }
      case Me.prefix: {
        let r = t || Me;
        return [Me.prefix, r.decode(e)];
      }
      default: {
        if (t == null)
          throw Error(
            "To parse non base32 or base58btc encoded CID multibase decoder must be provided"
          );
        return [e[0], t.decode(e)];
      }
    }
  },
  ll = (e, t, r) => {
    let { prefix: n } = r;
    if (n !== ae.prefix)
      throw Error(`Cannot string encode V0 in ${r.name} encoding`);
    let o = t.get(n);
    if (o == null) {
      let i = r.encode(e).slice(1);
      return t.set(n, i), i;
    } else return o;
  },
  dl = (e, t, r) => {
    let { prefix: n } = r,
      o = t.get(n);
    if (o == null) {
      let i = r.encode(e);
      return t.set(n, i), i;
    } else return o;
  },
  nt = 112,
  hl = 18,
  Ui = (e, t, r) => {
    let n = ke(e),
      o = n + ke(t),
      i = new Uint8Array(o + r.byteLength);
    return Pe(e, i, 0), Pe(t, i, n), i.set(r, o), i;
  },
  Ri = Symbol.for("@ipld/js-cid/CID"),
  Mt = { writable: !1, configurable: !1, enumerable: !0 },
  Pt = { writable: !1, enumerable: !1, configurable: !1 },
  pl = "0.0.0-dev",
  bl = (e, t) => {
    if (e.test(pl)) console.warn(t);
    else throw new Error(t);
  },
  gl = `CID.isCID(v) is deprecated and will be removed in the next major release.
Following code pattern:

if (CID.isCID(value)) {
  doSomethingWithCID(value)
}

Is replaced with:

const cid = CID.asCID(value)
if (cid) {
  // Make sure to use cid instead of value
  doSomethingWithCID(cid)
}
`;
var $d = I(
    I(I(I(I(I(I(I(I(I({}, Lr), zr), Wr), Hr), jr), Kr), Vr), qr), $r),
    Gr
  ),
  Gd = I(I({}, Zr), Qr);
var Wi = st(fn());
var wl = () =>
    typeof WebSocket < "u"
      ? WebSocket
      : typeof global < "u" && typeof global.WebSocket < "u"
      ? global.WebSocket
      : typeof window < "u" && typeof window.WebSocket < "u"
      ? window.WebSocket
      : typeof self < "u" && typeof self.WebSocket < "u"
      ? self.WebSocket
      : Pi(),
  Dl = () =>
    typeof WebSocket < "u" ||
    (typeof global < "u" && typeof global.WebSocket < "u") ||
    (typeof window < "u" && typeof window.WebSocket < "u") ||
    (typeof self < "u" && typeof self.WebSocket < "u"),
  ki = (e) => e.split("?")[0],
  Li = 10,
  ml = wl(),
  zi = class {
    constructor(t) {
      if (
        ((this.url = t),
        (this.events = new Wi.EventEmitter()),
        (this.registering = !1),
        !Ht(t))
      )
        throw new Error(
          `Provided URL is not compatible with WebSocket connection: ${t}`
        );
      this.url = t;
    }
    get connected() {
      return typeof this.socket < "u";
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
      return y(this, arguments, function* (t = this.url) {
        yield this.register(t);
      });
    }
    close() {
      return y(this, null, function* () {
        return new Promise((t, r) => {
          if (typeof this.socket > "u") {
            r(new Error("Connection already closed"));
            return;
          }
          (this.socket.onclose = (n) => {
            this.onClose(n), t();
          }),
            this.socket.close();
        });
      });
    }
    send(t) {
      return y(this, null, function* () {
        typeof this.socket > "u" && (this.socket = yield this.register());
        try {
          this.socket.send(ve(t));
        } catch (r) {
          this.onError(t.id, r);
        }
      });
    }
    register(t = this.url) {
      if (!Ht(t))
        throw new Error(
          `Provided URL is not compatible with WebSocket connection: ${t}`
        );
      if (this.registering) {
        let r = this.events.getMaxListeners();
        return (
          (this.events.listenerCount("register_error") >= r ||
            this.events.listenerCount("open") >= r) &&
            this.events.setMaxListeners(r + 1),
          new Promise((n, o) => {
            this.events.once("register_error", (i) => {
              this.resetMaxListeners(), o(i);
            }),
              this.events.once("open", () => {
                if ((this.resetMaxListeners(), typeof this.socket > "u"))
                  return o(
                    new Error("WebSocket connection is missing or invalid")
                  );
                n(this.socket);
              });
          })
        );
      }
      return (
        (this.url = t),
        (this.registering = !0),
        new Promise((r, n) => {
          let o = (0, jt.isReactNative)()
              ? void 0
              : { rejectUnauthorized: !Dn(t) },
            i = new ml(t, [], o);
          Dl()
            ? (i.onerror = (a) => {
                let f = a;
                n(this.emitError(f.error));
              })
            : i.on("error", (a) => {
                n(this.emitError(a));
              }),
            (i.onopen = () => {
              this.onOpen(i), r(i);
            });
        })
      );
    }
    onOpen(t) {
      (t.onmessage = (r) => this.onPayload(r)),
        (t.onclose = (r) => this.onClose(r)),
        (this.socket = t),
        (this.registering = !1),
        this.events.emit("open");
    }
    onClose(t) {
      (this.socket = void 0),
        (this.registering = !1),
        this.events.emit("close", t);
    }
    onPayload(t) {
      if (typeof t.data > "u") return;
      let r = typeof t.data == "string" ? xe(t.data) : t.data;
      this.events.emit("payload", r);
    }
    onError(t, r) {
      let n = this.parseError(r),
        o = n.message || n.toString(),
        i = wn(t, o);
      this.events.emit("payload", i);
    }
    parseError(t, r = this.url) {
      return gn(t, ki(r), "WS");
    }
    resetMaxListeners() {
      this.events.getMaxListeners() > Li && this.events.setMaxListeners(Li);
    }
    emitError(t) {
      let r = this.parseError(
        new Error(
          t?.message || `WebSocket connection failed for host: ${ki(this.url)}`
        )
      );
      return this.events.emit("register_error", r), r;
    }
  };
export {
  Jt as a,
  Nt as b,
  zc as c,
  si as d,
  wi as e,
  Xu as f,
  Ol as g,
  Nl as h,
  Tl as i,
  Ml as j,
  _o as k,
  Sc as l,
  zl as m,
  Wl as n,
  $d as o,
  jl as p,
  Lc as q,
  zi as r,
};
