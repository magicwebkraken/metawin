import {
  a as ea,
  b as nr,
  c as ir,
  d as Qu,
  e as eh,
  f as th,
  g as mn,
  h as sa,
  i as sh,
  j as rh,
  k as nh,
  l as Um,
  m as ih,
  o as ra,
  p as oh,
  q as Lm,
  r as ah,
} from "./chunk-TXWSAHNN.js";
import {
  a as ta,
  b as gn,
  d as us,
  e as hs,
  f as yt,
  g as Rs,
  h as hi,
  k as yn,
  l as wn,
  m as Mt,
  n as Pt,
  o as na,
  p as bn,
  q as di,
} from "./chunk-H4BANHQJ.js";
import { a as ui } from "./chunk-TSLWMKS5.js";
import {
  A as it,
  B as Ju,
  D as li,
  F as Rr,
  H as Y,
  J as mt,
  a as Qo,
  b as Zu,
  c as rr,
  d as dn,
  e as Ae,
  f as Nr,
  j as _e,
  k as Ee,
  l as Pe,
  n as jt,
  q as Qe,
  r as ci,
  s as de,
  u as ss,
  v as fn,
  w as Ns,
  x as pn,
} from "./chunk-U7GUEFJZ.js";
import { b as we, e as be, i as sr, k as Xu } from "./chunk-2K64HG7Q.js";
import { a as rt, b as Ct, e as nt } from "./chunk-LZ4YD47P.js";
import { a as Gu, b as Rm } from "./chunk-HINDXNTT.js";
import { a as Yu, b as Bm } from "./chunk-JKZLGYQN.js";
import { c as Wu, f as km } from "./chunk-EEU3LH2V.js";
import { I as Vu, L as Hu, M as Ku, u as zu } from "./chunk-QMRWXCSQ.js";
import {
  a as V,
  b as ye,
  h as Mu,
  i as Fu,
  k as gt,
  n as f,
  o as Xo,
  p as $u,
  q as Zo,
  r as Jo,
} from "./chunk-VNDKUXGB.js";
var lh = Mu((a_, ch) => {
  "use strict";
  function jm(t) {
    try {
      return JSON.stringify(t);
    } catch {
      return '"[Circular]"';
    }
  }
  ch.exports = Mm;
  function Mm(t, e, s) {
    var r = (s && s.stringify) || jm,
      n = 1;
    if (typeof t == "object" && t !== null) {
      var i = e.length + n;
      if (i === 1) return t;
      var o = new Array(i);
      o[0] = r(t);
      for (var a = 1; a < i; a++) o[a] = r(e[a]);
      return o.join(" ");
    }
    if (typeof t != "string") return t;
    var c = e.length;
    if (c === 0) return t;
    for (
      var l = "", u = 1 - n, h = -1, d = (t && t.length) || 0, p = 0;
      p < d;

    ) {
      if (t.charCodeAt(p) === 37 && p + 1 < d) {
        switch (((h = h > -1 ? h : 0), t.charCodeAt(p + 1))) {
          case 100:
          case 102:
            if (u >= c || e[u] == null) break;
            h < p && (l += t.slice(h, p)),
              (l += Number(e[u])),
              (h = p + 2),
              p++;
            break;
          case 105:
            if (u >= c || e[u] == null) break;
            h < p && (l += t.slice(h, p)),
              (l += Math.floor(Number(e[u]))),
              (h = p + 2),
              p++;
            break;
          case 79:
          case 111:
          case 106:
            if (u >= c || e[u] === void 0) break;
            h < p && (l += t.slice(h, p));
            var m = typeof e[u];
            if (m === "string") {
              (l += "'" + e[u] + "'"), (h = p + 2), p++;
              break;
            }
            if (m === "function") {
              (l += e[u].name || "<anonymous>"), (h = p + 2), p++;
              break;
            }
            (l += r(e[u])), (h = p + 2), p++;
            break;
          case 115:
            if (u >= c) break;
            h < p && (l += t.slice(h, p)),
              (l += String(e[u])),
              (h = p + 2),
              p++;
            break;
          case 37:
            h < p && (l += t.slice(h, p)), (l += "%"), (h = p + 2), p++, u--;
            break;
        }
        ++u;
      }
      ++p;
    }
    return h === -1 ? t : (h < d && (l += t.slice(h)), l);
  }
});
var da = Mu((c_, pi) => {
  "use strict";
  var uh = lh();
  pi.exports = ds;
  var En = ty().console || {},
    Fm = {
      mapHttpRequest: fi,
      mapHttpResponse: fi,
      wrapRequestSerializer: aa,
      wrapResponseSerializer: aa,
      wrapErrorSerializer: aa,
      req: fi,
      res: fi,
      err: dh,
      errWithCause: dh,
    };
  function ks(t, e) {
    return t === "silent" ? 1 / 0 : e.levels.values[t];
  }
  var ua = Symbol("pino.logFuncs"),
    ca = Symbol("pino.hierarchy"),
    $m = {
      error: "log",
      fatal: "error",
      warn: "error",
      info: "log",
      debug: "log",
      trace: "log",
    };
  function hh(t, e) {
    let s = { logger: e, parent: t[ca] };
    e[ca] = s;
  }
  function zm(t, e, s) {
    let r = {};
    e.forEach((n) => {
      r[n] = s[n] ? s[n] : En[n] || En[$m[n] || "log"] || kr;
    }),
      (t[ua] = r);
  }
  function Vm(t, e) {
    return Array.isArray(t)
      ? t.filter(function (r) {
          return r !== "!stdSerializers.err";
        })
      : t === !0
      ? Object.keys(e)
      : !1;
  }
  function ds(t) {
    (t = t || {}), (t.browser = t.browser || {});
    let e = t.browser.transmit;
    if (e && typeof e.send != "function")
      throw Error("pino: transmit option must have a send function");
    let s = t.browser.write || En;
    t.browser.write && (t.browser.asObject = !0);
    let r = t.serializers || {},
      n = Vm(t.browser.serialize, r),
      i = t.browser.serialize;
    Array.isArray(t.browser.serialize) &&
      t.browser.serialize.indexOf("!stdSerializers.err") > -1 &&
      (i = !1);
    let o = Object.keys(t.customLevels || {}),
      a = ["error", "fatal", "warn", "info", "debug", "trace"].concat(o);
    typeof s == "function" &&
      a.forEach(function (g) {
        s[g] = s;
      }),
      (t.enabled === !1 || t.browser.disabled) && (t.level = "silent");
    let c = t.level || "info",
      l = Object.create(s);
    l.log || (l.log = kr),
      zm(l, a, s),
      hh({}, l),
      Object.defineProperty(l, "levelVal", { get: h }),
      Object.defineProperty(l, "level", { get: d, set: p });
    let u = {
      transmit: e,
      serialize: n,
      asObject: t.browser.asObject,
      asObjectBindingsOnly: t.browser.asObjectBindingsOnly,
      formatters: t.browser.formatters,
      levels: a,
      timestamp: Jm(t),
      messageKey: t.messageKey || "msg",
      onChild: t.onChild || kr,
    };
    (l.levels = Hm(t)),
      (l.level = c),
      (l.isLevelEnabled = function (g) {
        return this.levels.values[g]
          ? this.levels.values[g] >= this.levels.values[this.level]
          : !1;
      }),
      (l.setMaxListeners =
        l.getMaxListeners =
        l.emit =
        l.addListener =
        l.on =
        l.prependListener =
        l.once =
        l.prependOnceListener =
        l.removeListener =
        l.removeAllListeners =
        l.listeners =
        l.listenerCount =
        l.eventNames =
        l.write =
        l.flush =
          kr),
      (l.serializers = r),
      (l._serialize = n),
      (l._stdErrSerialize = i),
      (l.child = function (...g) {
        return m.call(this, u, ...g);
      }),
      e && (l._logEvent = la());
    function h() {
      return ks(this.level, this);
    }
    function d() {
      return this._level;
    }
    function p(g) {
      if (g !== "silent" && !this.levels.values[g])
        throw Error("unknown level " + g);
      (this._level = g),
        or(this, u, l, "error"),
        or(this, u, l, "fatal"),
        or(this, u, l, "warn"),
        or(this, u, l, "info"),
        or(this, u, l, "debug"),
        or(this, u, l, "trace"),
        o.forEach((w) => {
          or(this, u, l, w);
        });
    }
    function m(g, w, R) {
      if (!w) throw new Error("missing bindings for child Pino");
      (R = R || {}), n && w.serializers && (R.serializers = w.serializers);
      let B = R.serializers;
      if (n && B) {
        var T = Object.assign({}, r, B),
          S = t.browser.serialize === !0 ? Object.keys(T) : n;
        delete w.serializers, ha([w], S, T, this._stdErrSerialize);
      }
      function A(U) {
        (this._childLevel = (U._childLevel | 0) + 1),
          (this.bindings = w),
          T && ((this.serializers = T), (this._serialize = S)),
          e && (this._logEvent = la([].concat(U._logEvent.bindings, w)));
      }
      A.prototype = this;
      let O = new A(this);
      return (
        hh(this, O),
        (O.child = function (...U) {
          return m.call(this, g, ...U);
        }),
        (O.level = R.level || this.level),
        g.onChild(O),
        O
      );
    }
    return l;
  }
  function Hm(t) {
    let e = t.customLevels || {},
      s = Object.assign({}, ds.levels.values, e),
      r = Object.assign({}, ds.levels.labels, Km(e));
    return { values: s, labels: r };
  }
  function Km(t) {
    let e = {};
    return (
      Object.keys(t).forEach(function (s) {
        e[t[s]] = s;
      }),
      e
    );
  }
  ds.levels = {
    values: { fatal: 60, error: 50, warn: 40, info: 30, debug: 20, trace: 10 },
    labels: {
      10: "trace",
      20: "debug",
      30: "info",
      40: "warn",
      50: "error",
      60: "fatal",
    },
  };
  ds.stdSerializers = Fm;
  ds.stdTimeFunctions = Object.assign(
    {},
    { nullTime: fh, epochTime: ph, unixTime: Qm, isoTime: ey }
  );
  function Gm(t) {
    let e = [];
    t.bindings && e.push(t.bindings);
    let s = t[ca];
    for (; s.parent; )
      (s = s.parent), s.logger.bindings && e.push(s.logger.bindings);
    return e.reverse();
  }
  function or(t, e, s, r) {
    if (
      (Object.defineProperty(t, r, {
        value: ks(t.level, s) > ks(r, s) ? kr : s[ua][r],
        writable: !0,
        enumerable: !0,
        configurable: !0,
      }),
      t[r] === kr)
    ) {
      if (!e.transmit) return;
      let i = e.transmit.level || t.level,
        o = ks(i, s);
      if (ks(r, s) < o) return;
    }
    t[r] = Ym(t, e, s, r);
    let n = Gm(t);
    n.length !== 0 && (t[r] = Wm(n, t[r]));
  }
  function Wm(t, e) {
    return function () {
      return e.apply(this, [...t, ...arguments]);
    };
  }
  function Ym(t, e, s, r) {
    return (function (n) {
      return function () {
        let o = e.timestamp(),
          a = new Array(arguments.length),
          c =
            Object.getPrototypeOf && Object.getPrototypeOf(this) === En
              ? En
              : this;
        for (var l = 0; l < a.length; l++) a[l] = arguments[l];
        var u = !1;
        if (
          (e.serialize &&
            (ha(a, this._serialize, this.serializers, this._stdErrSerialize),
            (u = !0)),
          e.asObject || e.formatters
            ? n.call(c, ...Xm(this, r, a, o, e))
            : n.apply(c, a),
          e.transmit)
        ) {
          let h = e.transmit.level || t._level,
            d = ks(h, s),
            p = ks(r, s);
          if (p < d) return;
          Zm(
            this,
            {
              ts: o,
              methodLevel: r,
              methodValue: p,
              transmitLevel: h,
              transmitValue: s.levels.values[e.transmit.level || t._level],
              send: e.transmit.send,
              val: ks(t._level, s),
            },
            a,
            u
          );
        }
      };
    })(t[ua][r]);
  }
  function Xm(t, e, s, r, n) {
    let { level: i, log: o = (h) => h } = n.formatters || {},
      a = s.slice(),
      c = a[0],
      l = {},
      u = (t._childLevel | 0) + 1;
    if ((u < 1 && (u = 1), r && (l.time = r), i)) {
      let h = i(e, t.levels.values[e]);
      Object.assign(l, h);
    } else l.level = t.levels.values[e];
    if (n.asObjectBindingsOnly) {
      if (c !== null && typeof c == "object")
        for (; u-- && typeof a[0] == "object"; ) Object.assign(l, a.shift());
      return [o(l), ...a];
    } else {
      if (c !== null && typeof c == "object") {
        for (; u-- && typeof a[0] == "object"; ) Object.assign(l, a.shift());
        c = a.length ? uh(a.shift(), a) : void 0;
      } else typeof c == "string" && (c = uh(a.shift(), a));
      return c !== void 0 && (l[n.messageKey] = c), [o(l)];
    }
  }
  function ha(t, e, s, r) {
    for (let n in t)
      if (r && t[n] instanceof Error) t[n] = ds.stdSerializers.err(t[n]);
      else if (typeof t[n] == "object" && !Array.isArray(t[n]) && e)
        for (let i in t[n])
          e.indexOf(i) > -1 && i in s && (t[n][i] = s[i](t[n][i]));
  }
  function Zm(t, e, s, r = !1) {
    let n = e.send,
      i = e.ts,
      o = e.methodLevel,
      a = e.methodValue,
      c = e.val,
      l = t._logEvent.bindings;
    r ||
      ha(
        s,
        t._serialize || Object.keys(t.serializers),
        t.serializers,
        t._stdErrSerialize === void 0 ? !0 : t._stdErrSerialize
      ),
      (t._logEvent.ts = i),
      (t._logEvent.messages = s.filter(function (u) {
        return l.indexOf(u) === -1;
      })),
      (t._logEvent.level.label = o),
      (t._logEvent.level.value = a),
      n(o, t._logEvent, c),
      (t._logEvent = la(l));
  }
  function la(t) {
    return {
      ts: 0,
      messages: [],
      bindings: t || [],
      level: { label: "", value: 0 },
    };
  }
  function dh(t) {
    let e = { type: t.constructor.name, msg: t.message, stack: t.stack };
    for (let s in t) e[s] === void 0 && (e[s] = t[s]);
    return e;
  }
  function Jm(t) {
    return typeof t.timestamp == "function"
      ? t.timestamp
      : t.timestamp === !1
      ? fh
      : ph;
  }
  function fi() {
    return {};
  }
  function aa(t) {
    return t;
  }
  function kr() {}
  function fh() {
    return !1;
  }
  function ph() {
    return Date.now();
  }
  function Qm() {
    return Math.round(Date.now() / 1e3);
  }
  function ey() {
    return new Date(Date.now()).toISOString();
  }
  function ty() {
    function t(e) {
      return typeof e < "u" && e;
    }
    try {
      return (
        typeof globalThis < "u" ||
          Object.defineProperty(Object.prototype, "globalThis", {
            get: function () {
              return (
                delete Object.prototype.globalThis, (this.globalThis = this)
              );
            },
            configurable: !0,
          }),
        globalThis
      );
    } catch {
      return t(self) || t(window) || t(this) || {};
    }
  }
  pi.exports.default = ds;
  pi.exports.pino = ds;
});
var vn = {
    id: "2b92315d-eab7-5bef-84fa-089a131333f5",
    name: "USD Coin",
    symbol: "USDC",
    networks: [
      {
        name: "ethereum-mainnet",
        display_name: "Ethereum",
        chain_id: "1",
        contract_address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
      },
      {
        name: "polygon-mainnet",
        display_name: "Polygon",
        chain_id: "137",
        contract_address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
      },
    ],
  },
  ia = {
    id: "USD",
    payment_method_limits: [
      { id: "card", min: "10.00", max: "7500.00" },
      { id: "ach_bank_account", min: "10.00", max: "25000.00" },
    ],
  },
  Dm = {
    providers: Qo,
    selectedProvider: null,
    error: null,
    purchaseCurrency: vn,
    paymentCurrency: ia,
    purchaseCurrencies: [vn],
    paymentCurrencies: [],
    quotesLoading: !1,
  },
  ne = rt(Dm),
  qm = {
    state: ne,
    subscribe(t) {
      return Ct(ne, () => t(ne));
    },
    subscribeKey(t, e) {
      return nt(ne, t, e);
    },
    setSelectedProvider(t) {
      if (t && t.name === "meld") {
        let e = Y.state.activeChain,
          s = e === we.CHAIN.SOLANA ? "SOL" : "USDC",
          r = e ? Y.state.chains.get(e)?.accountState?.address ?? "" : "",
          n = new URL(t.url);
        n.searchParams.append("publicKey", Zu),
          n.searchParams.append("destinationCurrencyCode", s),
          n.searchParams.append("walletAddress", r),
          n.searchParams.append("externalCustomerId", _e.state.projectId),
          (ne.selectedProvider = ye(V({}, t), { url: n.toString() }));
      } else ne.selectedProvider = t;
    },
    setOnrampProviders(t) {
      if (Array.isArray(t) && t.every((e) => typeof e == "string")) {
        let e = t,
          s = Qo.filter((r) => e.includes(r.name));
        ne.providers = s;
      } else ne.providers = [];
    },
    setPurchaseCurrency(t) {
      ne.purchaseCurrency = t;
    },
    setPaymentCurrency(t) {
      ne.paymentCurrency = t;
    },
    setPurchaseAmount(t) {
      oa.state.purchaseAmount = t;
    },
    setPaymentAmount(t) {
      oa.state.paymentAmount = t;
    },
    getAvailableCurrencies() {
      return f(this, null, function* () {
        let t = yield Pe.getOnrampOptions();
        (ne.purchaseCurrencies = t.purchaseCurrencies),
          (ne.paymentCurrencies = t.paymentCurrencies),
          (ne.paymentCurrency = t.paymentCurrencies[0] || ia),
          (ne.purchaseCurrency = t.purchaseCurrencies[0] || vn),
          yield ci.fetchCurrencyImages(t.paymentCurrencies.map((e) => e.id)),
          yield ci.fetchTokenImages(t.purchaseCurrencies.map((e) => e.symbol));
      });
    },
    getQuote() {
      return f(this, null, function* () {
        ne.quotesLoading = !0;
        try {
          let t = yield Pe.getOnrampQuote({
            purchaseCurrency: ne.purchaseCurrency,
            paymentCurrency: ne.paymentCurrency,
            amount: ne.paymentAmount?.toString() || "0",
            network: ne.purchaseCurrency?.symbol,
          });
          return (
            (ne.quotesLoading = !1),
            (ne.purchaseAmount = Number(t?.purchaseAmount.amount)),
            t
          );
        } catch (t) {
          return (ne.error = t.message), (ne.quotesLoading = !1), null;
        } finally {
          ne.quotesLoading = !1;
        }
      });
    },
    resetState() {
      (ne.selectedProvider = null),
        (ne.error = null),
        (ne.purchaseCurrency = vn),
        (ne.paymentCurrency = ia),
        (ne.purchaseCurrencies = [vn]),
        (ne.paymentCurrencies = []),
        (ne.paymentAmount = void 0),
        (ne.purchaseAmount = void 0),
        (ne.quotesLoading = !1);
    },
  },
  oa = jt(qm);
var $o = gt(ui(), 1);
var Cs = gt(ui(), 1);
var fs = gt(da()),
  sy = gt(da());
var ry = { level: "info" },
  vi = "custom_context",
  ma = 1e3 * 1024,
  ny = Object.defineProperty,
  iy = (t, e, s) =>
    e in t
      ? ny(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (t[e] = s),
  Bs = (t, e, s) => iy(t, typeof e != "symbol" ? e + "" : e, s),
  fa = class {
    constructor(e) {
      Bs(this, "nodeValue"),
        Bs(this, "sizeInBytes"),
        Bs(this, "next"),
        (this.nodeValue = e),
        (this.sizeInBytes = new TextEncoder().encode(this.nodeValue).length),
        (this.next = null);
    }
    get value() {
      return this.nodeValue;
    }
    get size() {
      return this.sizeInBytes;
    }
  },
  mi = class {
    constructor(e) {
      Bs(this, "lengthInNodes"),
        Bs(this, "sizeInBytes"),
        Bs(this, "head"),
        Bs(this, "tail"),
        Bs(this, "maxSizeInBytes"),
        (this.head = null),
        (this.tail = null),
        (this.lengthInNodes = 0),
        (this.maxSizeInBytes = e),
        (this.sizeInBytes = 0);
    }
    append(e) {
      let s = new fa(e);
      if (s.size > this.maxSizeInBytes)
        throw new Error(
          `[LinkedList] Value too big to insert into list: ${e} with size ${s.size}`
        );
      for (; this.size + s.size > this.maxSizeInBytes; ) this.shift();
      this.head
        ? (this.tail && (this.tail.next = s), (this.tail = s))
        : ((this.head = s), (this.tail = s)),
        this.lengthInNodes++,
        (this.sizeInBytes += s.size);
    }
    shift() {
      if (!this.head) return;
      let e = this.head;
      (this.head = this.head.next),
        this.head || (this.tail = null),
        this.lengthInNodes--,
        (this.sizeInBytes -= e.size);
    }
    toArray() {
      let e = [],
        s = this.head;
      for (; s !== null; ) e.push(s.value), (s = s.next);
      return e;
    }
    get length() {
      return this.lengthInNodes;
    }
    get size() {
      return this.sizeInBytes;
    }
    toOrderedArray() {
      return Array.from(this);
    }
    [Symbol.iterator]() {
      let e = this.head;
      return {
        next: () => {
          if (!e) return { done: !0, value: null };
          let s = e.value;
          return (e = e.next), { done: !1, value: s };
        },
      };
    }
  },
  oy = Object.defineProperty,
  ay = (t, e, s) =>
    e in t
      ? oy(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (t[e] = s),
  gi = (t, e, s) => ay(t, typeof e != "symbol" ? e + "" : e, s),
  yi = class {
    constructor(e, s = ma) {
      gi(this, "logs"),
        gi(this, "level"),
        gi(this, "levelValue"),
        gi(this, "MAX_LOG_SIZE_IN_BYTES"),
        (this.level = e ?? "error"),
        (this.levelValue = fs.levels.values[this.level]),
        (this.MAX_LOG_SIZE_IN_BYTES = s),
        (this.logs = new mi(this.MAX_LOG_SIZE_IN_BYTES));
    }
    forwardToConsole(e, s) {
      s === fs.levels.values.error
        ? console.error(e)
        : s === fs.levels.values.warn
        ? console.warn(e)
        : s === fs.levels.values.debug
        ? console.debug(e)
        : s === fs.levels.values.trace
        ? console.trace(e)
        : console.log(e);
    }
    appendToLogs(e) {
      this.logs.append(gn({ timestamp: new Date().toISOString(), log: e }));
      let s = typeof e == "string" ? JSON.parse(e).level : e.level;
      s >= this.levelValue && this.forwardToConsole(e, s);
    }
    getLogs() {
      return this.logs;
    }
    clearLogs() {
      this.logs = new mi(this.MAX_LOG_SIZE_IN_BYTES);
    }
    getLogArray() {
      return Array.from(this.logs);
    }
    logsToBlob(e) {
      let s = this.getLogArray();
      return (
        s.push(gn({ extraMetadata: e })),
        new Blob(s, { type: "application/json" })
      );
    }
  },
  cy = Object.defineProperty,
  ly = (t, e, s) =>
    e in t
      ? cy(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (t[e] = s),
  uy = (t, e, s) => ly(t, typeof e != "symbol" ? e + "" : e, s),
  pa = class {
    constructor(e, s = ma) {
      uy(this, "baseChunkLogger"), (this.baseChunkLogger = new yi(e, s));
    }
    write(e) {
      this.baseChunkLogger.appendToLogs(e);
    }
    getLogs() {
      return this.baseChunkLogger.getLogs();
    }
    clearLogs() {
      this.baseChunkLogger.clearLogs();
    }
    getLogArray() {
      return this.baseChunkLogger.getLogArray();
    }
    logsToBlob(e) {
      return this.baseChunkLogger.logsToBlob(e);
    }
    downloadLogsBlobInBrowser(e) {
      let s = URL.createObjectURL(this.logsToBlob(e)),
        r = document.createElement("a");
      (r.href = s),
        (r.download = `walletconnect-logs-${new Date().toISOString()}.txt`),
        document.body.appendChild(r),
        r.click(),
        document.body.removeChild(r),
        URL.revokeObjectURL(s);
    }
  },
  hy = Object.defineProperty,
  dy = (t, e, s) =>
    e in t
      ? hy(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (t[e] = s),
  fy = (t, e, s) => dy(t, typeof e != "symbol" ? e + "" : e, s),
  ga = class {
    constructor(e, s = ma) {
      fy(this, "baseChunkLogger"), (this.baseChunkLogger = new yi(e, s));
    }
    write(e) {
      this.baseChunkLogger.appendToLogs(e);
    }
    getLogs() {
      return this.baseChunkLogger.getLogs();
    }
    clearLogs() {
      this.baseChunkLogger.clearLogs();
    }
    getLogArray() {
      return this.baseChunkLogger.getLogArray();
    }
    logsToBlob(e) {
      return this.baseChunkLogger.logsToBlob(e);
    }
  },
  py = Object.defineProperty,
  gy = Object.defineProperties,
  my = Object.getOwnPropertyDescriptors,
  gh = Object.getOwnPropertySymbols,
  yy = Object.prototype.hasOwnProperty,
  wy = Object.prototype.propertyIsEnumerable,
  mh = (t, e, s) =>
    e in t
      ? py(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (t[e] = s),
  wi = (t, e) => {
    for (var s in e || (e = {})) yy.call(e, s) && mh(t, s, e[s]);
    if (gh) for (var s of gh(e)) wy.call(e, s) && mh(t, s, e[s]);
    return t;
  },
  bi = (t, e) => gy(t, my(e));
function yh(t) {
  return bi(wi({}, t), { level: t?.level || ry.level });
}
function by(t, e, s = vi) {
  return (t[s] = e), t;
}
function qe(t, e = vi) {
  return t[e] || "";
}
function vy(t, e, s = vi) {
  let r = qe(t, s);
  return r.trim() ? `${r}/${e}` : e;
}
function ot(t, e, s = vi) {
  let r = vy(t, e, s),
    n = t.child({ context: r });
  return by(n, r, s);
}
function Ey(t) {
  var e, s;
  let r = new pa((e = t.opts) == null ? void 0 : e.level, t.maxSizeInBytes);
  return {
    logger: (0, fs.default)(
      bi(wi({}, t.opts), {
        level: "trace",
        browser: bi(wi({}, (s = t.opts) == null ? void 0 : s.browser), {
          write: (n) => r.write(n),
        }),
      })
    ),
    chunkLoggerController: r,
  };
}
function xy(t) {
  var e;
  let s = new ga((e = t.opts) == null ? void 0 : e.level, t.maxSizeInBytes);
  return {
    logger: (0, fs.default)(bi(wi({}, t.opts), { level: "trace" }), s),
    chunkLoggerController: s,
  };
}
function Ei(t) {
  return typeof t.loggerOverride < "u" && typeof t.loggerOverride != "string"
    ? { logger: t.loggerOverride, chunkLoggerController: null }
    : typeof window < "u"
    ? Ey(t)
    : xy(t);
}
var vh = gt(ui()),
  Sy = Object.defineProperty,
  Iy = (t, e, s) =>
    e in t
      ? Sy(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (t[e] = s),
  wh = (t, e, s) => Iy(t, typeof e != "symbol" ? e + "" : e, s),
  xi = class extends nr {
    constructor(e) {
      super(),
        (this.opts = e),
        wh(this, "protocol", "wc"),
        wh(this, "version", 2);
    }
  };
var _y = Object.defineProperty,
  Ty = (t, e, s) =>
    e in t
      ? _y(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (t[e] = s),
  Ay = (t, e, s) => Ty(t, typeof e != "symbol" ? e + "" : e, s),
  Si = class extends nr {
    constructor(e, s) {
      super(),
        (this.core = e),
        (this.logger = s),
        Ay(this, "records", new Map());
    }
  },
  Ii = class {
    constructor(e, s) {
      (this.logger = e), (this.core = s);
    }
  },
  _i = class extends nr {
    constructor(e, s) {
      super(), (this.relayer = e), (this.logger = s);
    }
  },
  Ti = class extends nr {
    constructor(e) {
      super();
    }
  },
  Ai = class {
    constructor(e, s, r, n) {
      (this.core = e), (this.logger = s), (this.name = r);
    }
  };
var Ci = class extends nr {
  constructor(e, s) {
    super(), (this.relayer = e), (this.logger = s);
  }
};
var Pi = class extends nr {
  constructor(e, s) {
    super(), (this.core = e), (this.logger = s);
  }
};
var Oi = class {
    constructor(e, s, r) {
      (this.core = e), (this.logger = s), (this.store = r);
    }
  },
  Ni = class {
    constructor(e, s) {
      (this.projectId = e), (this.logger = s);
    }
  },
  Ri = class {
    constructor(e, s, r) {
      (this.core = e), (this.logger = s), (this.telemetryEnabled = r);
    }
  },
  Cy = Object.defineProperty,
  Py = (t, e, s) =>
    e in t
      ? Cy(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (t[e] = s),
  bh = (t, e, s) => Py(t, typeof e != "symbol" ? e + "" : e, s);
var ki = class {
  constructor(e) {
    (this.opts = e), bh(this, "protocol", "wc"), bh(this, "version", 2);
  }
};
var Bi = class {
  constructor(e) {
    this.client = e;
  }
};
var K = gt(ea(), 1);
var Ss = gt(ea(), 1),
  Kt = gt(nh(), 1),
  gf = gt(Um(), 1);
var Eh = "0.1.1";
function xh() {
  return Eh;
}
var ce = class t extends Error {
  constructor(e, s = {}) {
    let r = (() => {
        if (s.cause instanceof t) {
          if (s.cause.details) return s.cause.details;
          if (s.cause.shortMessage) return s.cause.shortMessage;
        }
        return s.cause &&
          "details" in s.cause &&
          typeof s.cause.details == "string"
          ? s.cause.details
          : s.cause?.message
          ? s.cause.message
          : s.details;
      })(),
      n = (s.cause instanceof t && s.cause.docsPath) || s.docsPath,
      o = `https://oxlib.sh${n ?? ""}`,
      a = [
        e || "An error occurred.",
        ...(s.metaMessages ? ["", ...s.metaMessages] : []),
        ...(r || n
          ? ["", r ? `Details: ${r}` : void 0, n ? `See: ${o}` : void 0]
          : []),
      ].filter((c) => typeof c == "string").join(`
`);
    super(a, s.cause ? { cause: s.cause } : void 0),
      Object.defineProperty(this, "details", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "docs", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "docsPath", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "shortMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "cause", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "BaseError",
      }),
      Object.defineProperty(this, "version", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: `ox@${xh()}`,
      }),
      (this.cause = s.cause),
      (this.details = r),
      (this.docs = o),
      (this.docsPath = n),
      (this.shortMessage = e);
  }
  walk(e) {
    return Sh(this, e);
  }
};
function Sh(t, e) {
  return e?.(t)
    ? t
    : t && typeof t == "object" && "cause" in t && t.cause
    ? Sh(t.cause, e)
    : e
    ? null
    : t;
}
Rm();
var va = BigInt(0),
  ba = BigInt(1);
function Ur(t) {
  return (
    t instanceof Uint8Array ||
    (ArrayBuffer.isView(t) && t.constructor.name === "Uint8Array")
  );
}
function Ea(t) {
  if (!Ur(t)) throw new Error("Uint8Array expected");
}
function Lr(t, e) {
  if (typeof e != "boolean") throw new Error(t + " boolean expected, got " + e);
}
function xn(t) {
  let e = t.toString(16);
  return e.length & 1 ? "0" + e : e;
}
function Th(t) {
  if (typeof t != "string")
    throw new Error("hex string expected, got " + typeof t);
  return t === "" ? va : BigInt("0x" + t);
}
var Ah =
    typeof Uint8Array.from([]).toHex == "function" &&
    typeof Uint8Array.fromHex == "function",
  Oy = Array.from({ length: 256 }, (t, e) => e.toString(16).padStart(2, "0"));
function Dr(t) {
  if ((Ea(t), Ah)) return t.toHex();
  let e = "";
  for (let s = 0; s < t.length; s++) e += Oy[t[s]];
  return e;
}
var ps = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
function Ih(t) {
  if (t >= ps._0 && t <= ps._9) return t - ps._0;
  if (t >= ps.A && t <= ps.F) return t - (ps.A - 10);
  if (t >= ps.a && t <= ps.f) return t - (ps.a - 10);
}
function Sn(t) {
  if (typeof t != "string")
    throw new Error("hex string expected, got " + typeof t);
  if (Ah) return Uint8Array.fromHex(t);
  let e = t.length,
    s = e / 2;
  if (e % 2)
    throw new Error("hex string expected, got unpadded hex of length " + e);
  let r = new Uint8Array(s);
  for (let n = 0, i = 0; n < s; n++, i += 2) {
    let o = Ih(t.charCodeAt(i)),
      a = Ih(t.charCodeAt(i + 1));
    if (o === void 0 || a === void 0) {
      let c = t[i] + t[i + 1];
      throw new Error(
        'hex string expected, got non-hex character "' + c + '" at index ' + i
      );
    }
    r[n] = o * 16 + a;
  }
  return r;
}
function gs(t) {
  return Th(Dr(t));
}
function xa(t) {
  return Ea(t), Th(Dr(Uint8Array.from(t).reverse()));
}
function ar(t, e) {
  return Sn(t.toString(16).padStart(e * 2, "0"));
}
function Sa(t, e) {
  return ar(t, e).reverse();
}
function at(t, e, s) {
  let r;
  if (typeof e == "string")
    try {
      r = Sn(e);
    } catch (i) {
      throw new Error(t + " must be hex string or Uint8Array, cause: " + i);
    }
  else if (Ur(e)) r = Uint8Array.from(e);
  else throw new Error(t + " must be hex string or Uint8Array");
  let n = r.length;
  if (typeof s == "number" && n !== s)
    throw new Error(t + " of length " + s + " expected, got " + n);
  return r;
}
function In(...t) {
  let e = 0;
  for (let r = 0; r < t.length; r++) {
    let n = t[r];
    Ea(n), (e += n.length);
  }
  let s = new Uint8Array(e);
  for (let r = 0, n = 0; r < t.length; r++) {
    let i = t[r];
    s.set(i, n), (n += i.length);
  }
  return s;
}
var ya = (t) => typeof t == "bigint" && va <= t;
function Ui(t, e, s) {
  return ya(t) && ya(e) && ya(s) && e <= t && t < s;
}
function cr(t, e, s, r) {
  if (!Ui(e, s, r))
    throw new Error(
      "expected valid " + t + ": " + s + " <= n < " + r + ", got " + e
    );
}
function Ch(t) {
  let e;
  for (e = 0; t > va; t >>= ba, e += 1);
  return e;
}
var lr = (t) => (ba << BigInt(t)) - ba,
  wa = (t) => new Uint8Array(t),
  _h = (t) => Uint8Array.from(t);
function Ph(t, e, s) {
  if (typeof t != "number" || t < 2)
    throw new Error("hashLen must be a number");
  if (typeof e != "number" || e < 2)
    throw new Error("qByteLen must be a number");
  if (typeof s != "function") throw new Error("hmacFn must be a function");
  let r = wa(t),
    n = wa(t),
    i = 0,
    o = () => {
      r.fill(1), n.fill(0), (i = 0);
    },
    a = (...h) => s(n, r, ...h),
    c = (h = wa(0)) => {
      (n = a(_h([0]), h)),
        (r = a()),
        h.length !== 0 && ((n = a(_h([1]), h)), (r = a()));
    },
    l = () => {
      if (i++ >= 1e3) throw new Error("drbg: tried 1000 values");
      let h = 0,
        d = [];
      for (; h < e; ) {
        r = a();
        let p = r.slice();
        d.push(p), (h += r.length);
      }
      return In(...d);
    };
  return (h, d) => {
    o(), c(h);
    let p;
    for (; !(p = d(l())); ) c();
    return o(), p;
  };
}
var Ny = {
  bigint: (t) => typeof t == "bigint",
  function: (t) => typeof t == "function",
  boolean: (t) => typeof t == "boolean",
  string: (t) => typeof t == "string",
  stringOrUint8Array: (t) => typeof t == "string" || Ur(t),
  isSafeInteger: (t) => Number.isSafeInteger(t),
  array: (t) => Array.isArray(t),
  field: (t, e) => e.Fp.isValid(t),
  hash: (t) => typeof t == "function" && Number.isSafeInteger(t.outputLen),
};
function ur(t, e, s = {}) {
  let r = (n, i, o) => {
    let a = Ny[i];
    if (typeof a != "function") throw new Error("invalid validator function");
    let c = t[n];
    if (!(o && c === void 0) && !a(c, t))
      throw new Error(
        "param " + String(n) + " is invalid. Expected " + i + ", got " + c
      );
  };
  for (let [n, i] of Object.entries(e)) r(n, i, !1);
  for (let [n, i] of Object.entries(s)) r(n, i, !0);
  return t;
}
function Ia(t) {
  let e = new WeakMap();
  return (s, ...r) => {
    let n = e.get(s);
    if (n !== void 0) return n;
    let i = t(s, ...r);
    return e.set(s, i), i;
  };
}
function Oh(t, e) {
  if (_a(t) > e) throw new Li({ givenSize: _a(t), maxSize: e });
}
var ms = { zero: 48, nine: 57, A: 65, F: 70, a: 97, f: 102 };
function Ta(t) {
  if (t >= ms.zero && t <= ms.nine) return t - ms.zero;
  if (t >= ms.A && t <= ms.F) return t - (ms.A - 10);
  if (t >= ms.a && t <= ms.f) return t - (ms.a - 10);
}
function Nh(t, e = {}) {
  let { dir: s, size: r = 32 } = e;
  if (r === 0) return t;
  if (t.length > r)
    throw new Di({ size: t.length, targetSize: r, type: "Bytes" });
  let n = new Uint8Array(r);
  for (let i = 0; i < r; i++) {
    let o = s === "right";
    n[o ? i : r - i - 1] = t[o ? i : t.length - i - 1];
  }
  return n;
}
function qi(t, e) {
  if (Ot(t) > e) throw new ji({ givenSize: Ot(t), maxSize: e });
}
function Rh(t, e) {
  if (typeof e == "number" && e > 0 && e > Ot(t) - 1)
    throw new _n({ offset: e, position: "start", size: Ot(t) });
}
function kh(t, e, s) {
  if (typeof e == "number" && typeof s == "number" && Ot(t) !== s - e)
    throw new _n({ offset: s, position: "end", size: Ot(t) });
}
function Aa(t, e = {}) {
  let { dir: s, size: r = 32 } = e;
  if (r === 0) return t;
  let n = t.replace("0x", "");
  if (n.length > r * 2)
    throw new Mi({ size: Math.ceil(n.length / 2), targetSize: r, type: "Hex" });
  return `0x${n[s === "right" ? "padEnd" : "padStart"](r * 2, "0")}`;
}
function Bh(t, e = {}) {
  let { dir: s = "left" } = e,
    r = t.replace("0x", ""),
    n = 0;
  for (
    let i = 0;
    i < r.length - 1 &&
    r[s === "left" ? i : r.length - i - 1].toString() === "0";
    i++
  )
    n++;
  return (
    (r = s === "left" ? r.slice(n) : r.slice(0, r.length - n)),
    r === "0"
      ? "0x"
      : s === "right" && r.length % 2 === 1
      ? `0x${r}0`
      : `0x${r}`
  );
}
var ky = "#__bigint";
function Us(t, e, s) {
  return JSON.stringify(
    t,
    (r, n) =>
      typeof e == "function"
        ? e(r, n)
        : typeof n == "bigint"
        ? n.toString() + ky
        : n,
    s
  );
}
var By = Array.from({ length: 256 }, (t, e) => e.toString(16).padStart(2, "0"));
function Uy(t, e = {}) {
  let { strict: s = !1 } = e;
  if (!t) throw new Fi(t);
  if (typeof t != "string") throw new Fi(t);
  if (s && !/^0x[0-9a-fA-F]*$/.test(t)) throw new $i(t);
  if (!t.startsWith("0x")) throw new $i(t);
}
function zi(...t) {
  return `0x${t.reduce((e, s) => e + s.replace("0x", ""), "")}`;
}
function rs(t) {
  return t instanceof Uint8Array
    ? wt(t)
    : Array.isArray(t)
    ? wt(new Uint8Array(t))
    : t;
}
function wt(t, e = {}) {
  let s = "";
  for (let n = 0; n < t.length; n++) s += By[t[n]];
  let r = `0x${s}`;
  return typeof e.size == "number" ? (qi(r, e.size), Pa(r, e.size)) : r;
}
function bt(t, e = {}) {
  let { signed: s, size: r } = e,
    n = BigInt(t),
    i;
  r
    ? s
      ? (i = (1n << (BigInt(r) * 8n - 1n)) - 1n)
      : (i = 2n ** (BigInt(r) * 8n) - 1n)
    : typeof t == "number" && (i = BigInt(Number.MAX_SAFE_INTEGER));
  let o = typeof i == "bigint" && s ? -i - 1n : 0;
  if ((i && n > i) || n < o) {
    let l = typeof t == "bigint" ? "n" : "";
    throw new Ca({
      max: i ? `${i}${l}` : void 0,
      min: `${o}${l}`,
      signed: s,
      size: r,
      value: `${t}${l}`,
    });
  }
  let c = `0x${(s && n < 0 ? (1n << BigInt(r * 8)) + BigInt(n) : n).toString(
    16
  )}`;
  return r ? Ly(c, r) : c;
}
function Ly(t, e) {
  return Aa(t, { dir: "left", size: e });
}
function Pa(t, e) {
  return Aa(t, { dir: "right", size: e });
}
function Ft(t, e, s, r = {}) {
  let { strict: n } = r;
  Rh(t, e);
  let i = `0x${t.replace("0x", "").slice((e ?? 0) * 2, (s ?? t.length) * 2)}`;
  return n && kh(i, e, s), i;
}
function Ot(t) {
  return Math.ceil((t.length - 2) / 2);
}
function Oa(t) {
  return Bh(t, { dir: "left" });
}
function Na(t, e = {}) {
  let { strict: s = !1 } = e;
  try {
    return Uy(t, { strict: s }), !0;
  } catch {
    return !1;
  }
}
var Ca = class extends ce {
  constructor({ max: e, min: s, signed: r, size: n, value: i }) {
    super(
      `Number \`${i}\` is not in safe${n ? ` ${n * 8}-bit` : ""}${
        r ? " signed" : " unsigned"
      } integer range ${e ? `(\`${s}\` to \`${e}\`)` : `(above \`${s}\`)`}`
    ),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "Hex.IntegerOutOfRangeError",
      });
  }
};
var Fi = class extends ce {
    constructor(e) {
      super(
        `Value \`${
          typeof e == "object" ? Us(e) : e
        }\` of type \`${typeof e}\` is an invalid hex type.`,
        { metaMessages: ['Hex types must be represented as `"0x${string}"`.'] }
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "Hex.InvalidHexTypeError",
        });
    }
  },
  $i = class extends ce {
    constructor(e) {
      super(`Value \`${e}\` is an invalid hex value.`, {
        metaMessages: [
          'Hex values must start with `"0x"` and contain only hexadecimal characters (0-9, a-f, A-F).',
        ],
      }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "Hex.InvalidHexValueError",
        });
    }
  };
var ji = class extends ce {
    constructor({ givenSize: e, maxSize: s }) {
      super(`Size cannot exceed \`${s}\` bytes. Given size: \`${e}\` bytes.`),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "Hex.SizeOverflowError",
        });
    }
  },
  _n = class extends ce {
    constructor({ offset: e, position: s, size: r }) {
      super(
        `Slice ${
          s === "start" ? "starting" : "ending"
        } at offset \`${e}\` is out-of-bounds (size: \`${r}\`).`
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "Hex.SliceOffsetOutOfBoundsError",
        });
    }
  },
  Mi = class extends ce {
    constructor({ size: e, targetSize: s, type: r }) {
      super(
        `${r.charAt(0).toUpperCase()}${r
          .slice(1)
          .toLowerCase()} size (\`${e}\`) exceeds padding size (\`${s}\`).`
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "Hex.SizeExceedsPaddingSizeError",
        });
    }
  };
var Dy = new TextEncoder();
function qy(t) {
  if (!(t instanceof Uint8Array)) {
    if (!t) throw new qr(t);
    if (typeof t != "object") throw new qr(t);
    if (!("BYTES_PER_ELEMENT" in t)) throw new qr(t);
    if (t.BYTES_PER_ELEMENT !== 1 || t.constructor.name !== "Uint8Array")
      throw new qr(t);
  }
}
function jr(t) {
  return t instanceof Uint8Array ? t : typeof t == "string" ? An(t) : jy(t);
}
function jy(t) {
  return t instanceof Uint8Array ? t : new Uint8Array(t);
}
function An(t, e = {}) {
  let { size: s } = e,
    r = t;
  s && (qi(t, s), (r = Pa(t, s)));
  let n = r.slice(2);
  n.length % 2 && (n = `0${n}`);
  let i = n.length / 2,
    o = new Uint8Array(i);
  for (let a = 0, c = 0; a < i; a++) {
    let l = Ta(n.charCodeAt(c++)),
      u = Ta(n.charCodeAt(c++));
    if (l === void 0 || u === void 0)
      throw new ce(
        `Invalid byte sequence ("${n[c - 2]}${n[c - 1]}" in "${n}").`
      );
    o[a] = l * 16 + u;
  }
  return o;
}
function Lh(t, e = {}) {
  let { size: s } = e,
    r = Dy.encode(t);
  return typeof s == "number" ? (Oh(r, s), My(r, s)) : r;
}
function My(t, e) {
  return Nh(t, { dir: "right", size: e });
}
function _a(t) {
  return t.length;
}
function Dh(t) {
  try {
    return qy(t), !0;
  } catch {
    return !1;
  }
}
var qr = class extends ce {
    constructor(e) {
      super(
        `Value \`${
          typeof e == "object" ? Us(e) : e
        }\` of type \`${typeof e}\` is an invalid Bytes value.`,
        { metaMessages: ["Bytes values must be of type `Bytes`."] }
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "Bytes.InvalidBytesTypeError",
        });
    }
  },
  Li = class extends ce {
    constructor({ givenSize: e, maxSize: s }) {
      super(`Size cannot exceed \`${s}\` bytes. Given size: \`${e}\` bytes.`),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "Bytes.SizeOverflowError",
        });
    }
  };
var Di = class extends ce {
  constructor({ size: e, targetSize: s, type: r }) {
    super(
      `${r.charAt(0).toUpperCase()}${r
        .slice(1)
        .toLowerCase()} size (\`${e}\`) exceeds padding size (\`${s}\`).`
    ),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "Bytes.SizeExceedsPaddingSizeError",
      });
  }
};
function Ra(t, e = {}) {
  let { as: s = typeof t == "string" ? "Hex" : "Bytes" } = e,
    r = Gu(jr(t));
  return s === "Bytes" ? r : wt(r);
}
var Vi = class extends Map {
  constructor(e) {
    super(),
      Object.defineProperty(this, "maxSize", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      (this.maxSize = e);
  }
  get(e) {
    let s = super.get(e);
    return super.has(e) && s !== void 0 && (this.delete(e), super.set(e, s)), s;
  }
  set(e, s) {
    if ((super.set(e, s), this.maxSize && this.size > this.maxSize)) {
      let r = this.keys().next().value;
      r && this.delete(r);
    }
    return this;
  }
};
var Fy = { checksum: new Vi(8192) },
  Hi = Fy.checksum;
function Mh(t, e = {}) {
  let { compressed: s } = e,
    { prefix: r, x: n, y: i } = t;
  if (s === !1 || (typeof n == "bigint" && typeof i == "bigint")) {
    if (r !== 4) throw new Ki({ prefix: r, cause: new Ua() });
    return;
  }
  if (s === !0 || (typeof n == "bigint" && typeof i > "u")) {
    if (r !== 3 && r !== 2) throw new Ki({ prefix: r, cause: new Ba() });
    return;
  }
  throw new ka({ publicKey: t });
}
function Da(t) {
  let e = (() => {
    if (Na(t)) return Fh(t);
    if (Dh(t)) return $y(t);
    let { prefix: s, x: r, y: n } = t;
    return typeof r == "bigint" && typeof n == "bigint"
      ? { prefix: s ?? 4, x: r, y: n }
      : { prefix: s, x: r };
  })();
  return Mh(e), e;
}
function $y(t) {
  return Fh(wt(t));
}
function Fh(t) {
  if (t.length !== 132 && t.length !== 130 && t.length !== 68)
    throw new La({ publicKey: t });
  if (t.length === 130) {
    let r = BigInt(Ft(t, 0, 32)),
      n = BigInt(Ft(t, 32, 64));
    return { prefix: 4, x: r, y: n };
  }
  if (t.length === 132) {
    let r = Number(Ft(t, 0, 1)),
      n = BigInt(Ft(t, 1, 33)),
      i = BigInt(Ft(t, 33, 65));
    return { prefix: r, x: n, y: i };
  }
  let e = Number(Ft(t, 0, 1)),
    s = BigInt(Ft(t, 1, 33));
  return { prefix: e, x: s };
}
function $h(t, e = {}) {
  return An(Cn(t, e));
}
function Cn(t, e = {}) {
  Mh(t);
  let { prefix: s, x: r, y: n } = t,
    { includePrefix: i = !0 } = e;
  return zi(
    i ? bt(s, { size: 1 }) : "0x",
    bt(r, { size: 32 }),
    typeof n == "bigint" ? bt(n, { size: 32 }) : "0x"
  );
}
var ka = class extends ce {
    constructor({ publicKey: e }) {
      super(`Value \`${Us(e)}\` is not a valid public key.`, {
        metaMessages: [
          "Public key must contain:",
          "- an `x` and `prefix` value (compressed)",
          "- an `x`, `y`, and `prefix` value (uncompressed)",
        ],
      }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "PublicKey.InvalidError",
        });
    }
  },
  Ki = class extends ce {
    constructor({ prefix: e, cause: s }) {
      super(`Prefix "${e}" is invalid.`, { cause: s }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "PublicKey.InvalidPrefixError",
        });
    }
  },
  Ba = class extends ce {
    constructor() {
      super("Prefix must be 2 or 3 for compressed public keys."),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "PublicKey.InvalidCompressedPrefixError",
        });
    }
  },
  Ua = class extends ce {
    constructor() {
      super("Prefix must be 4 for uncompressed public keys."),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "PublicKey.InvalidUncompressedPrefixError",
        });
    }
  },
  La = class extends ce {
    constructor({ publicKey: e }) {
      super(`Value \`${e}\` is an invalid public key size.`, {
        metaMessages: [
          "Expected: 33 bytes (compressed + prefix), 64 bytes (uncompressed) or 65 bytes (uncompressed + prefix).",
          `Received ${Ot(rs(e))} bytes.`,
        ],
      }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "PublicKey.InvalidSerializedSizeError",
        });
    }
  };
var zy = /^0x[a-fA-F0-9]{40}$/;
function Gi(t, e = {}) {
  let { strict: s = !0 } = e;
  if (!zy.test(t)) throw new Wi({ address: t, cause: new ja() });
  if (s) {
    if (t.toLowerCase() === t) return;
    if (zh(t) !== t) throw new Wi({ address: t, cause: new Ma() });
  }
}
function zh(t) {
  if (Hi.has(t)) return Hi.get(t);
  Gi(t, { strict: !1 });
  let e = t.substring(2).toLowerCase(),
    s = Ra(Lh(e), { as: "Bytes" }),
    r = e.split("");
  for (let i = 0; i < 40; i += 2)
    s[i >> 1] >> 4 >= 8 && r[i] && (r[i] = r[i].toUpperCase()),
      (s[i >> 1] & 15) >= 8 && r[i + 1] && (r[i + 1] = r[i + 1].toUpperCase());
  let n = `0x${r.join("")}`;
  return Hi.set(t, n), n;
}
function Vy(t, e = {}) {
  let { checksum: s = !1 } = e;
  return Gi(t), s ? zh(t) : t;
}
function Vh(t, e = {}) {
  let s = Ra(`0x${Cn(t).slice(4)}`).substring(26);
  return Vy(`0x${s}`, e);
}
function Hh(t, e) {
  return (
    Gi(t, { strict: !1 }),
    Gi(e, { strict: !1 }),
    t.toLowerCase() === e.toLowerCase()
  );
}
var Wi = class extends ce {
    constructor({ address: e, cause: s }) {
      super(`Address "${e}" is invalid.`, { cause: s }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "Address.InvalidAddressError",
        });
    }
  },
  ja = class extends ce {
    constructor() {
      super("Address is not a 20 byte (40 hexadecimal character) value."),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "Address.InvalidInputError",
        });
    }
  },
  Ma = class extends ce {
    constructor() {
      super("Address does not match its checksum counterpart."),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "Address.InvalidChecksumError",
        });
    }
  };
var A_ = 2n ** (8n - 1n) - 1n,
  C_ = 2n ** (16n - 1n) - 1n,
  P_ = 2n ** (24n - 1n) - 1n,
  O_ = 2n ** (32n - 1n) - 1n,
  N_ = 2n ** (40n - 1n) - 1n,
  R_ = 2n ** (48n - 1n) - 1n,
  k_ = 2n ** (56n - 1n) - 1n,
  B_ = 2n ** (64n - 1n) - 1n,
  U_ = 2n ** (72n - 1n) - 1n,
  L_ = 2n ** (80n - 1n) - 1n,
  D_ = 2n ** (88n - 1n) - 1n,
  q_ = 2n ** (96n - 1n) - 1n,
  j_ = 2n ** (104n - 1n) - 1n,
  M_ = 2n ** (112n - 1n) - 1n,
  F_ = 2n ** (120n - 1n) - 1n,
  $_ = 2n ** (128n - 1n) - 1n,
  z_ = 2n ** (136n - 1n) - 1n,
  V_ = 2n ** (144n - 1n) - 1n,
  H_ = 2n ** (152n - 1n) - 1n,
  K_ = 2n ** (160n - 1n) - 1n,
  G_ = 2n ** (168n - 1n) - 1n,
  W_ = 2n ** (176n - 1n) - 1n,
  Y_ = 2n ** (184n - 1n) - 1n,
  X_ = 2n ** (192n - 1n) - 1n,
  Z_ = 2n ** (200n - 1n) - 1n,
  J_ = 2n ** (208n - 1n) - 1n,
  Q_ = 2n ** (216n - 1n) - 1n,
  eT = 2n ** (224n - 1n) - 1n,
  tT = 2n ** (232n - 1n) - 1n,
  sT = 2n ** (240n - 1n) - 1n,
  rT = 2n ** (248n - 1n) - 1n,
  nT = 2n ** (256n - 1n) - 1n,
  iT = -(2n ** (8n - 1n)),
  oT = -(2n ** (16n - 1n)),
  aT = -(2n ** (24n - 1n)),
  cT = -(2n ** (32n - 1n)),
  lT = -(2n ** (40n - 1n)),
  uT = -(2n ** (48n - 1n)),
  hT = -(2n ** (56n - 1n)),
  dT = -(2n ** (64n - 1n)),
  fT = -(2n ** (72n - 1n)),
  pT = -(2n ** (80n - 1n)),
  gT = -(2n ** (88n - 1n)),
  mT = -(2n ** (96n - 1n)),
  yT = -(2n ** (104n - 1n)),
  wT = -(2n ** (112n - 1n)),
  bT = -(2n ** (120n - 1n)),
  vT = -(2n ** (128n - 1n)),
  ET = -(2n ** (136n - 1n)),
  xT = -(2n ** (144n - 1n)),
  ST = -(2n ** (152n - 1n)),
  IT = -(2n ** (160n - 1n)),
  _T = -(2n ** (168n - 1n)),
  TT = -(2n ** (176n - 1n)),
  AT = -(2n ** (184n - 1n)),
  CT = -(2n ** (192n - 1n)),
  PT = -(2n ** (200n - 1n)),
  OT = -(2n ** (208n - 1n)),
  NT = -(2n ** (216n - 1n)),
  RT = -(2n ** (224n - 1n)),
  kT = -(2n ** (232n - 1n)),
  BT = -(2n ** (240n - 1n)),
  UT = -(2n ** (248n - 1n)),
  LT = -(2n ** (256n - 1n)),
  DT = 2n ** 8n - 1n,
  qT = 2n ** 16n - 1n,
  jT = 2n ** 24n - 1n,
  MT = 2n ** 32n - 1n,
  FT = 2n ** 40n - 1n,
  $T = 2n ** 48n - 1n,
  zT = 2n ** 56n - 1n,
  VT = 2n ** 64n - 1n,
  HT = 2n ** 72n - 1n,
  KT = 2n ** 80n - 1n,
  GT = 2n ** 88n - 1n,
  WT = 2n ** 96n - 1n,
  YT = 2n ** 104n - 1n,
  XT = 2n ** 112n - 1n,
  ZT = 2n ** 120n - 1n,
  JT = 2n ** 128n - 1n,
  QT = 2n ** 136n - 1n,
  eA = 2n ** 144n - 1n,
  tA = 2n ** 152n - 1n,
  sA = 2n ** 160n - 1n,
  rA = 2n ** 168n - 1n,
  nA = 2n ** 176n - 1n,
  iA = 2n ** 184n - 1n,
  oA = 2n ** 192n - 1n,
  aA = 2n ** 200n - 1n,
  cA = 2n ** 208n - 1n,
  lA = 2n ** 216n - 1n,
  uA = 2n ** 224n - 1n,
  hA = 2n ** 232n - 1n,
  dA = 2n ** 240n - 1n,
  fA = 2n ** 248n - 1n,
  Fa = 2n ** 256n - 1n;
var so = {};
Fu(so, {
  InvalidRError: () => Zi,
  InvalidSError: () => Ji,
  InvalidSerializedSizeError: () => Xi,
  InvalidVError: () => Qi,
  InvalidYParityError: () => pr,
  MissingPropertiesError: () => Mr,
  assert: () => eo,
  extract: () => aw,
  from: () => nc,
  fromBytes: () => fd,
  fromDerBytes: () => cw,
  fromDerHex: () => pd,
  fromHex: () => rc,
  fromLegacy: () => gd,
  fromRpc: () => md,
  fromTuple: () => lw,
  toBytes: () => uw,
  toDerBytes: () => hw,
  toDerHex: () => dw,
  toHex: () => yd,
  toLegacy: () => fw,
  toRpc: () => pw,
  toTuple: () => gw,
  vToYParity: () => to,
  validate: () => mw,
  yParityToV: () => ic,
});
km();
Bm();
Ku();
Ku();
var et = BigInt(0),
  Me = BigInt(1),
  fr = BigInt(2),
  Hy = BigInt(3),
  Yh = BigInt(4),
  Xh = BigInt(5),
  Zh = BigInt(8);
function je(t, e) {
  let s = t % e;
  return s >= et ? s : e + s;
}
function vt(t, e, s) {
  let r = t;
  for (; e-- > et; ) (r *= r), (r %= s);
  return r;
}
function Yi(t, e) {
  if (t === et) throw new Error("invert: expected non-zero number");
  if (e <= et) throw new Error("invert: expected positive modulus, got " + e);
  let s = je(t, e),
    r = e,
    n = et,
    i = Me,
    o = Me,
    a = et;
  for (; s !== et; ) {
    let l = r / s,
      u = r % s,
      h = n - o * l,
      d = i - a * l;
    (r = s), (s = u), (n = o), (i = a), (o = h), (a = d);
  }
  if (r !== Me) throw new Error("invert: does not exist");
  return je(n, e);
}
function Jh(t, e) {
  let s = (t.ORDER + Me) / Yh,
    r = t.pow(e, s);
  if (!t.eql(t.sqr(r), e)) throw new Error("Cannot find square root");
  return r;
}
function Ky(t, e) {
  let s = (t.ORDER - Xh) / Zh,
    r = t.mul(e, fr),
    n = t.pow(r, s),
    i = t.mul(e, n),
    o = t.mul(t.mul(i, fr), n),
    a = t.mul(i, t.sub(o, t.ONE));
  if (!t.eql(t.sqr(a), e)) throw new Error("Cannot find square root");
  return a;
}
function Gy(t) {
  if (t < BigInt(3)) throw new Error("sqrt is not defined for small field");
  let e = t - Me,
    s = 0;
  for (; e % fr === et; ) (e /= fr), s++;
  let r = fr,
    n = Pn(t);
  for (; Wh(n, r) === 1; )
    if (r++ > 1e3)
      throw new Error("Cannot find square root: probably non-prime P");
  if (s === 1) return Jh;
  let i = n.pow(r, e),
    o = (e + Me) / fr;
  return function (c, l) {
    if (c.is0(l)) return l;
    if (Wh(c, l) !== 1) throw new Error("Cannot find square root");
    let u = s,
      h = c.mul(c.ONE, i),
      d = c.pow(l, e),
      p = c.pow(l, o);
    for (; !c.eql(d, c.ONE); ) {
      if (c.is0(d)) return c.ZERO;
      let m = 1,
        g = c.sqr(d);
      for (; !c.eql(g, c.ONE); )
        if ((m++, (g = c.sqr(g)), m === u))
          throw new Error("Cannot find square root");
      let w = Me << BigInt(u - m - 1),
        R = c.pow(h, w);
      (u = m), (h = c.sqr(R)), (d = c.mul(d, h)), (p = c.mul(p, R));
    }
    return p;
  };
}
function Wy(t) {
  return t % Yh === Hy ? Jh : t % Zh === Xh ? Ky : Gy(t);
}
var Yy = [
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
function $a(t) {
  let e = {
      ORDER: "bigint",
      MASK: "bigint",
      BYTES: "isSafeInteger",
      BITS: "isSafeInteger",
    },
    s = Yy.reduce((r, n) => ((r[n] = "function"), r), e);
  return ur(t, s);
}
function Xy(t, e, s) {
  if (s < et) throw new Error("invalid exponent, negatives unsupported");
  if (s === et) return t.ONE;
  if (s === Me) return e;
  let r = t.ONE,
    n = e;
  for (; s > et; ) s & Me && (r = t.mul(r, n)), (n = t.sqr(n)), (s >>= Me);
  return r;
}
function za(t, e, s = !1) {
  let r = new Array(e.length).fill(s ? t.ZERO : void 0),
    n = e.reduce(
      (o, a, c) => (t.is0(a) ? o : ((r[c] = o), t.mul(o, a))),
      t.ONE
    ),
    i = t.inv(n);
  return (
    e.reduceRight(
      (o, a, c) => (t.is0(a) ? o : ((r[c] = t.mul(o, r[c])), t.mul(o, a))),
      i
    ),
    r
  );
}
function Wh(t, e) {
  let s = (t.ORDER - Me) / fr,
    r = t.pow(e, s),
    n = t.eql(r, t.ONE),
    i = t.eql(r, t.ZERO),
    o = t.eql(r, t.neg(t.ONE));
  if (!n && !i && !o) throw new Error("invalid Legendre symbol result");
  return n ? 1 : i ? 0 : -1;
}
function Va(t, e) {
  e !== void 0 && zu(e);
  let s = e !== void 0 ? e : t.toString(2).length,
    r = Math.ceil(s / 8);
  return { nBitLength: s, nByteLength: r };
}
function Pn(t, e, s = !1, r = {}) {
  if (t <= et) throw new Error("invalid field: expected ORDER > 0, got " + t);
  let { nBitLength: n, nByteLength: i } = Va(t, e);
  if (i > 2048)
    throw new Error("invalid field: expected ORDER of <= 2048 bytes");
  let o,
    a = Object.freeze({
      ORDER: t,
      isLE: s,
      BITS: n,
      BYTES: i,
      MASK: lr(n),
      ZERO: et,
      ONE: Me,
      create: (c) => je(c, t),
      isValid: (c) => {
        if (typeof c != "bigint")
          throw new Error(
            "invalid field element: expected bigint, got " + typeof c
          );
        return et <= c && c < t;
      },
      is0: (c) => c === et,
      isOdd: (c) => (c & Me) === Me,
      neg: (c) => je(-c, t),
      eql: (c, l) => c === l,
      sqr: (c) => je(c * c, t),
      add: (c, l) => je(c + l, t),
      sub: (c, l) => je(c - l, t),
      mul: (c, l) => je(c * l, t),
      pow: (c, l) => Xy(a, c, l),
      div: (c, l) => je(c * Yi(l, t), t),
      sqrN: (c) => c * c,
      addN: (c, l) => c + l,
      subN: (c, l) => c - l,
      mulN: (c, l) => c * l,
      inv: (c) => Yi(c, t),
      sqrt: r.sqrt || ((c) => (o || (o = Wy(t)), o(a, c))),
      toBytes: (c) => (s ? Sa(c, i) : ar(c, i)),
      fromBytes: (c) => {
        if (c.length !== i)
          throw new Error(
            "Field.fromBytes: expected " + i + " bytes, got " + c.length
          );
        return s ? xa(c) : gs(c);
      },
      invertBatch: (c) => za(a, c),
      cmov: (c, l, u) => (u ? l : c),
    });
  return Object.freeze(a);
}
function Qh(t) {
  if (typeof t != "bigint") throw new Error("field order must be bigint");
  let e = t.toString(2).length;
  return Math.ceil(e / 8);
}
function Ha(t) {
  let e = Qh(t);
  return e + Math.ceil(e / 2);
}
function ed(t, e, s = !1) {
  let r = t.length,
    n = Qh(e),
    i = Ha(e);
  if (r < 16 || r < i || r > 1024)
    throw new Error("expected " + i + "-1024 bytes of input, got " + r);
  let o = s ? xa(t) : gs(t),
    a = je(o, e - Me) + Me;
  return s ? Sa(a, n) : ar(a, n);
}
var td = BigInt(0),
  Xa = BigInt(1);
function Ka(t, e) {
  let s = e.negate();
  return t ? s : e;
}
function rd(t, e) {
  if (!Number.isSafeInteger(t) || t <= 0 || t > e)
    throw new Error("invalid window size, expected [1.." + e + "], got W=" + t);
}
function Ga(t, e) {
  rd(t, e);
  let s = Math.ceil(e / t) + 1,
    r = 2 ** (t - 1),
    n = 2 ** t,
    i = lr(t),
    o = BigInt(t);
  return { windows: s, windowSize: r, mask: i, maxNumber: n, shiftBy: o };
}
function sd(t, e, s) {
  let { windowSize: r, mask: n, maxNumber: i, shiftBy: o } = s,
    a = Number(t & n),
    c = t >> o;
  a > r && ((a -= i), (c += Xa));
  let l = e * r,
    u = l + Math.abs(a) - 1,
    h = a === 0,
    d = a < 0,
    p = e % 2 !== 0;
  return { nextN: c, offset: u, isZero: h, isNeg: d, isNegF: p, offsetF: l };
}
function Zy(t, e) {
  if (!Array.isArray(t)) throw new Error("array expected");
  t.forEach((s, r) => {
    if (!(s instanceof e)) throw new Error("invalid point at index " + r);
  });
}
function Jy(t, e) {
  if (!Array.isArray(t)) throw new Error("array of scalars expected");
  t.forEach((s, r) => {
    if (!e.isValid(s)) throw new Error("invalid scalar at index " + r);
  });
}
var Wa = new WeakMap(),
  nd = new WeakMap();
function Ya(t) {
  return nd.get(t) || 1;
}
function id(t, e) {
  return {
    constTimeNegate: Ka,
    hasPrecomputes(s) {
      return Ya(s) !== 1;
    },
    unsafeLadder(s, r, n = t.ZERO) {
      let i = s;
      for (; r > td; ) r & Xa && (n = n.add(i)), (i = i.double()), (r >>= Xa);
      return n;
    },
    precomputeWindow(s, r) {
      let { windows: n, windowSize: i } = Ga(r, e),
        o = [],
        a = s,
        c = a;
      for (let l = 0; l < n; l++) {
        (c = a), o.push(c);
        for (let u = 1; u < i; u++) (c = c.add(a)), o.push(c);
        a = c.double();
      }
      return o;
    },
    wNAF(s, r, n) {
      let i = t.ZERO,
        o = t.BASE,
        a = Ga(s, e);
      for (let c = 0; c < a.windows; c++) {
        let {
          nextN: l,
          offset: u,
          isZero: h,
          isNeg: d,
          isNegF: p,
          offsetF: m,
        } = sd(n, c, a);
        (n = l), h ? (o = o.add(Ka(p, r[m]))) : (i = i.add(Ka(d, r[u])));
      }
      return { p: i, f: o };
    },
    wNAFUnsafe(s, r, n, i = t.ZERO) {
      let o = Ga(s, e);
      for (let a = 0; a < o.windows && n !== td; a++) {
        let { nextN: c, offset: l, isZero: u, isNeg: h } = sd(n, a, o);
        if (((n = c), !u)) {
          let d = r[l];
          i = i.add(h ? d.negate() : d);
        }
      }
      return i;
    },
    getPrecomputes(s, r, n) {
      let i = Wa.get(r);
      return (
        i || ((i = this.precomputeWindow(r, s)), s !== 1 && Wa.set(r, n(i))), i
      );
    },
    wNAFCached(s, r, n) {
      let i = Ya(s);
      return this.wNAF(i, this.getPrecomputes(i, s, n), r);
    },
    wNAFCachedUnsafe(s, r, n, i) {
      let o = Ya(s);
      return o === 1
        ? this.unsafeLadder(s, r, i)
        : this.wNAFUnsafe(o, this.getPrecomputes(o, s, n), r, i);
    },
    setWindowSize(s, r) {
      rd(r, e), nd.set(s, r), Wa.delete(s);
    },
  };
}
function od(t, e, s, r) {
  Zy(s, t), Jy(r, e);
  let n = s.length,
    i = r.length;
  if (n !== i)
    throw new Error("arrays of points and scalars must have equal length");
  let o = t.ZERO,
    a = Ch(BigInt(n)),
    c = 1;
  a > 12 ? (c = a - 3) : a > 4 ? (c = a - 2) : a > 0 && (c = 2);
  let l = lr(c),
    u = new Array(Number(l) + 1).fill(o),
    h = Math.floor((e.BITS - 1) / c) * c,
    d = o;
  for (let p = h; p >= 0; p -= c) {
    u.fill(o);
    for (let g = 0; g < i; g++) {
      let w = r[g],
        R = Number((w >> BigInt(p)) & l);
      u[R] = u[R].add(s[g]);
    }
    let m = o;
    for (let g = u.length - 1, w = o; g > 0; g--)
      (w = w.add(u[g])), (m = m.add(w));
    if (((d = d.add(m)), p !== 0)) for (let g = 0; g < c; g++) d = d.double();
  }
  return d;
}
function Za(t) {
  return (
    $a(t.Fp),
    ur(
      t,
      { n: "bigint", h: "bigint", Gx: "field", Gy: "field" },
      { nBitLength: "isSafeInteger", nByteLength: "isSafeInteger" }
    ),
    Object.freeze(ye(V(V({}, Va(t.n, t.nBitLength)), t), { p: t.Fp.ORDER }))
  );
}
function ad(t) {
  t.lowS !== void 0 && Lr("lowS", t.lowS),
    t.prehash !== void 0 && Lr("prehash", t.prehash);
}
function Qy(t) {
  let e = Za(t);
  ur(
    e,
    { a: "field", b: "field" },
    {
      allowInfinityPoint: "boolean",
      allowedPrivateKeyLengths: "array",
      clearCofactor: "function",
      fromBytes: "function",
      isTorsionFree: "function",
      toBytes: "function",
      wrapPrivateKey: "boolean",
    }
  );
  let { endo: s, Fp: r, a: n } = e;
  if (s) {
    if (!r.eql(n, r.ZERO)) throw new Error("invalid endo: CURVE.a must be 0");
    if (
      typeof s != "object" ||
      typeof s.beta != "bigint" ||
      typeof s.splitScalar != "function"
    )
      throw new Error(
        'invalid endo: expected "beta": bigint and "splitScalar": function'
      );
  }
  return Object.freeze(V({}, e));
}
var ec = class extends Error {
    constructor(e = "") {
      super(e);
    }
  },
  ys = {
    Err: ec,
    _tlv: {
      encode: (t, e) => {
        let { Err: s } = ys;
        if (t < 0 || t > 256) throw new s("tlv.encode: wrong tag");
        if (e.length & 1) throw new s("tlv.encode: unpadded data");
        let r = e.length / 2,
          n = xn(r);
        if ((n.length / 2) & 128)
          throw new s("tlv.encode: long form length too big");
        let i = r > 127 ? xn((n.length / 2) | 128) : "";
        return xn(t) + i + n + e;
      },
      decode(t, e) {
        let { Err: s } = ys,
          r = 0;
        if (t < 0 || t > 256) throw new s("tlv.encode: wrong tag");
        if (e.length < 2 || e[r++] !== t) throw new s("tlv.decode: wrong tlv");
        let n = e[r++],
          i = !!(n & 128),
          o = 0;
        if (!i) o = n;
        else {
          let c = n & 127;
          if (!c)
            throw new s("tlv.decode(long): indefinite length not supported");
          if (c > 4) throw new s("tlv.decode(long): byte length is too big");
          let l = e.subarray(r, r + c);
          if (l.length !== c)
            throw new s("tlv.decode: length bytes not complete");
          if (l[0] === 0) throw new s("tlv.decode(long): zero leftmost byte");
          for (let u of l) o = (o << 8) | u;
          if (((r += c), o < 128))
            throw new s("tlv.decode(long): not minimal encoding");
        }
        let a = e.subarray(r, r + o);
        if (a.length !== o) throw new s("tlv.decode: wrong value length");
        return { v: a, l: e.subarray(r + o) };
      },
    },
    _int: {
      encode(t) {
        let { Err: e } = ys;
        if (t < ws) throw new e("integer: negative integers are not allowed");
        let s = xn(t);
        if ((Number.parseInt(s[0], 16) & 8 && (s = "00" + s), s.length & 1))
          throw new e("unexpected DER parsing assertion: unpadded hex");
        return s;
      },
      decode(t) {
        let { Err: e } = ys;
        if (t[0] & 128) throw new e("invalid signature integer: negative");
        if (t[0] === 0 && !(t[1] & 128))
          throw new e("invalid signature integer: unnecessary leading zero");
        return gs(t);
      },
    },
    toSig(t) {
      let { Err: e, _int: s, _tlv: r } = ys,
        n = at("signature", t),
        { v: i, l: o } = r.decode(48, n);
      if (o.length) throw new e("invalid signature: left bytes after parsing");
      let { v: a, l: c } = r.decode(2, i),
        { v: l, l: u } = r.decode(2, c);
      if (u.length) throw new e("invalid signature: left bytes after parsing");
      return { r: s.decode(a), s: s.decode(l) };
    },
    hexFromSig(t) {
      let { _tlv: e, _int: s } = ys,
        r = e.encode(2, s.encode(t.r)),
        n = e.encode(2, s.encode(t.s)),
        i = r + n;
      return e.encode(48, i);
    },
  };
function Ja(t, e) {
  return Dr(ar(t, e));
}
var ws = BigInt(0),
  Oe = BigInt(1),
  IA = BigInt(2),
  Qa = BigInt(3),
  ew = BigInt(4);
function tw(t) {
  let e = Qy(t),
    { Fp: s } = e,
    r = Pn(e.n, e.nBitLength),
    n =
      e.toBytes ||
      ((T, S, A) => {
        let O = S.toAffine();
        return In(Uint8Array.from([4]), s.toBytes(O.x), s.toBytes(O.y));
      }),
    i =
      e.fromBytes ||
      ((T) => {
        let S = T.subarray(1),
          A = s.fromBytes(S.subarray(0, s.BYTES)),
          O = s.fromBytes(S.subarray(s.BYTES, 2 * s.BYTES));
        return { x: A, y: O };
      });
  function o(T) {
    let { a: S, b: A } = e,
      O = s.sqr(T),
      U = s.mul(O, T);
    return s.add(s.add(U, s.mul(T, S)), A);
  }
  function a(T, S) {
    let A = s.sqr(S),
      O = o(T);
    return s.eql(A, O);
  }
  if (!a(e.Gx, e.Gy)) throw new Error("bad curve params: generator point");
  let c = s.mul(s.pow(e.a, Qa), ew),
    l = s.mul(s.sqr(e.b), BigInt(27));
  if (s.is0(s.add(c, l))) throw new Error("bad curve params: a or b");
  function u(T) {
    return Ui(T, Oe, e.n);
  }
  function h(T) {
    let {
      allowedPrivateKeyLengths: S,
      nByteLength: A,
      wrapPrivateKey: O,
      n: U,
    } = e;
    if (S && typeof T != "bigint") {
      if ((Ur(T) && (T = Dr(T)), typeof T != "string" || !S.includes(T.length)))
        throw new Error("invalid private key");
      T = T.padStart(A * 2, "0");
    }
    let q;
    try {
      q = typeof T == "bigint" ? T : gs(at("private key", T, A));
    } catch {
      throw new Error(
        "invalid private key, expected hex or " + A + " bytes, got " + typeof T
      );
    }
    return O && (q = je(q, U)), cr("private key", q, Oe, U), q;
  }
  function d(T) {
    if (!(T instanceof g)) throw new Error("ProjectivePoint expected");
  }
  let p = Ia((T, S) => {
      let { px: A, py: O, pz: U } = T;
      if (s.eql(U, s.ONE)) return { x: A, y: O };
      let q = T.is0();
      S == null && (S = q ? s.ONE : s.inv(U));
      let N = s.mul(A, S),
        $ = s.mul(O, S),
        j = s.mul(U, S);
      if (q) return { x: s.ZERO, y: s.ZERO };
      if (!s.eql(j, s.ONE)) throw new Error("invZ was invalid");
      return { x: N, y: $ };
    }),
    m = Ia((T) => {
      if (T.is0()) {
        if (e.allowInfinityPoint && !s.is0(T.py)) return;
        throw new Error("bad point: ZERO");
      }
      let { x: S, y: A } = T.toAffine();
      if (!s.isValid(S) || !s.isValid(A))
        throw new Error("bad point: x or y not FE");
      if (!a(S, A)) throw new Error("bad point: equation left != right");
      if (!T.isTorsionFree())
        throw new Error("bad point: not in prime-order subgroup");
      return !0;
    });
  class g {
    constructor(S, A, O) {
      if (S == null || !s.isValid(S)) throw new Error("x required");
      if (A == null || !s.isValid(A) || s.is0(A)) throw new Error("y required");
      if (O == null || !s.isValid(O)) throw new Error("z required");
      (this.px = S), (this.py = A), (this.pz = O), Object.freeze(this);
    }
    static fromAffine(S) {
      let { x: A, y: O } = S || {};
      if (!S || !s.isValid(A) || !s.isValid(O))
        throw new Error("invalid affine point");
      if (S instanceof g) throw new Error("projective point not allowed");
      let U = (q) => s.eql(q, s.ZERO);
      return U(A) && U(O) ? g.ZERO : new g(A, O, s.ONE);
    }
    get x() {
      return this.toAffine().x;
    }
    get y() {
      return this.toAffine().y;
    }
    static normalizeZ(S) {
      let A = za(
        s,
        S.map((O) => O.pz)
      );
      return S.map((O, U) => O.toAffine(A[U])).map(g.fromAffine);
    }
    static fromHex(S) {
      let A = g.fromAffine(i(at("pointHex", S)));
      return A.assertValidity(), A;
    }
    static fromPrivateKey(S) {
      return g.BASE.multiply(h(S));
    }
    static msm(S, A) {
      return od(g, r, S, A);
    }
    _setWindowSize(S) {
      B.setWindowSize(this, S);
    }
    assertValidity() {
      m(this);
    }
    hasEvenY() {
      let { y: S } = this.toAffine();
      if (s.isOdd) return !s.isOdd(S);
      throw new Error("Field doesn't support isOdd");
    }
    equals(S) {
      d(S);
      let { px: A, py: O, pz: U } = this,
        { px: q, py: N, pz: $ } = S,
        j = s.eql(s.mul(A, $), s.mul(q, U)),
        P = s.eql(s.mul(O, $), s.mul(N, U));
      return j && P;
    }
    negate() {
      return new g(this.px, s.neg(this.py), this.pz);
    }
    double() {
      let { a: S, b: A } = e,
        O = s.mul(A, Qa),
        { px: U, py: q, pz: N } = this,
        $ = s.ZERO,
        j = s.ZERO,
        P = s.ZERO,
        v = s.mul(U, U),
        I = s.mul(q, q),
        y = s.mul(N, N),
        b = s.mul(U, q);
      return (
        (b = s.add(b, b)),
        (P = s.mul(U, N)),
        (P = s.add(P, P)),
        ($ = s.mul(S, P)),
        (j = s.mul(O, y)),
        (j = s.add($, j)),
        ($ = s.sub(I, j)),
        (j = s.add(I, j)),
        (j = s.mul($, j)),
        ($ = s.mul(b, $)),
        (P = s.mul(O, P)),
        (y = s.mul(S, y)),
        (b = s.sub(v, y)),
        (b = s.mul(S, b)),
        (b = s.add(b, P)),
        (P = s.add(v, v)),
        (v = s.add(P, v)),
        (v = s.add(v, y)),
        (v = s.mul(v, b)),
        (j = s.add(j, v)),
        (y = s.mul(q, N)),
        (y = s.add(y, y)),
        (v = s.mul(y, b)),
        ($ = s.sub($, v)),
        (P = s.mul(y, I)),
        (P = s.add(P, P)),
        (P = s.add(P, P)),
        new g($, j, P)
      );
    }
    add(S) {
      d(S);
      let { px: A, py: O, pz: U } = this,
        { px: q, py: N, pz: $ } = S,
        j = s.ZERO,
        P = s.ZERO,
        v = s.ZERO,
        I = e.a,
        y = s.mul(e.b, Qa),
        b = s.mul(A, q),
        _ = s.mul(O, N),
        k = s.mul(U, $),
        x = s.add(A, O),
        C = s.add(q, N);
      (x = s.mul(x, C)),
        (C = s.add(b, _)),
        (x = s.sub(x, C)),
        (C = s.add(A, U));
      let D = s.add(q, $);
      return (
        (C = s.mul(C, D)),
        (D = s.add(b, k)),
        (C = s.sub(C, D)),
        (D = s.add(O, U)),
        (j = s.add(N, $)),
        (D = s.mul(D, j)),
        (j = s.add(_, k)),
        (D = s.sub(D, j)),
        (v = s.mul(I, C)),
        (j = s.mul(y, k)),
        (v = s.add(j, v)),
        (j = s.sub(_, v)),
        (v = s.add(_, v)),
        (P = s.mul(j, v)),
        (_ = s.add(b, b)),
        (_ = s.add(_, b)),
        (k = s.mul(I, k)),
        (C = s.mul(y, C)),
        (_ = s.add(_, k)),
        (k = s.sub(b, k)),
        (k = s.mul(I, k)),
        (C = s.add(C, k)),
        (b = s.mul(_, C)),
        (P = s.add(P, b)),
        (b = s.mul(D, C)),
        (j = s.mul(x, j)),
        (j = s.sub(j, b)),
        (b = s.mul(x, _)),
        (v = s.mul(D, v)),
        (v = s.add(v, b)),
        new g(j, P, v)
      );
    }
    subtract(S) {
      return this.add(S.negate());
    }
    is0() {
      return this.equals(g.ZERO);
    }
    wNAF(S) {
      return B.wNAFCached(this, S, g.normalizeZ);
    }
    multiplyUnsafe(S) {
      let { endo: A, n: O } = e;
      cr("scalar", S, ws, O);
      let U = g.ZERO;
      if (S === ws) return U;
      if (this.is0() || S === Oe) return this;
      if (!A || B.hasPrecomputes(this))
        return B.wNAFCachedUnsafe(this, S, g.normalizeZ);
      let { k1neg: q, k1: N, k2neg: $, k2: j } = A.splitScalar(S),
        P = U,
        v = U,
        I = this;
      for (; N > ws || j > ws; )
        N & Oe && (P = P.add(I)),
          j & Oe && (v = v.add(I)),
          (I = I.double()),
          (N >>= Oe),
          (j >>= Oe);
      return (
        q && (P = P.negate()),
        $ && (v = v.negate()),
        (v = new g(s.mul(v.px, A.beta), v.py, v.pz)),
        P.add(v)
      );
    }
    multiply(S) {
      let { endo: A, n: O } = e;
      cr("scalar", S, Oe, O);
      let U, q;
      if (A) {
        let { k1neg: N, k1: $, k2neg: j, k2: P } = A.splitScalar(S),
          { p: v, f: I } = this.wNAF($),
          { p: y, f: b } = this.wNAF(P);
        (v = B.constTimeNegate(N, v)),
          (y = B.constTimeNegate(j, y)),
          (y = new g(s.mul(y.px, A.beta), y.py, y.pz)),
          (U = v.add(y)),
          (q = I.add(b));
      } else {
        let { p: N, f: $ } = this.wNAF(S);
        (U = N), (q = $);
      }
      return g.normalizeZ([U, q])[0];
    }
    multiplyAndAddUnsafe(S, A, O) {
      let U = g.BASE,
        q = ($, j) =>
          j === ws || j === Oe || !$.equals(U)
            ? $.multiplyUnsafe(j)
            : $.multiply(j),
        N = q(this, A).add(q(S, O));
      return N.is0() ? void 0 : N;
    }
    toAffine(S) {
      return p(this, S);
    }
    isTorsionFree() {
      let { h: S, isTorsionFree: A } = e;
      if (S === Oe) return !0;
      if (A) return A(g, this);
      throw new Error(
        "isTorsionFree() has not been declared for the elliptic curve"
      );
    }
    clearCofactor() {
      let { h: S, clearCofactor: A } = e;
      return S === Oe ? this : A ? A(g, this) : this.multiplyUnsafe(e.h);
    }
    toRawBytes(S = !0) {
      return Lr("isCompressed", S), this.assertValidity(), n(g, this, S);
    }
    toHex(S = !0) {
      return Lr("isCompressed", S), Dr(this.toRawBytes(S));
    }
  }
  (g.BASE = new g(e.Gx, e.Gy, s.ONE)), (g.ZERO = new g(s.ZERO, s.ONE, s.ZERO));
  let { endo: w, nBitLength: R } = e,
    B = id(g, w ? Math.ceil(R / 2) : R);
  return {
    CURVE: e,
    ProjectivePoint: g,
    normPrivateKeyToScalar: h,
    weierstrassEquation: o,
    isWithinCurveOrder: u,
  };
}
function sw(t) {
  let e = Za(t);
  return (
    ur(
      e,
      { hash: "hash", hmac: "function", randomBytes: "function" },
      { bits2int: "function", bits2int_modN: "function", lowS: "boolean" }
    ),
    Object.freeze(V({ lowS: !0 }, e))
  );
}
function cd(t) {
  let e = sw(t),
    { Fp: s, n: r, nByteLength: n, nBitLength: i } = e,
    o = s.BYTES + 1,
    a = 2 * s.BYTES + 1;
  function c(y) {
    return je(y, r);
  }
  function l(y) {
    return Yi(y, r);
  }
  let {
    ProjectivePoint: u,
    normPrivateKeyToScalar: h,
    weierstrassEquation: d,
    isWithinCurveOrder: p,
  } = tw(
    ye(V({}, e), {
      toBytes(y, b, _) {
        let k = b.toAffine(),
          x = s.toBytes(k.x),
          C = In;
        return (
          Lr("isCompressed", _),
          _
            ? C(Uint8Array.from([b.hasEvenY() ? 2 : 3]), x)
            : C(Uint8Array.from([4]), x, s.toBytes(k.y))
        );
      },
      fromBytes(y) {
        let b = y.length,
          _ = y[0],
          k = y.subarray(1);
        if (b === o && (_ === 2 || _ === 3)) {
          let x = gs(k);
          if (!Ui(x, Oe, s.ORDER)) throw new Error("Point is not on curve");
          let C = d(x),
            D;
          try {
            D = s.sqrt(C);
          } catch (G) {
            let H = G instanceof Error ? ": " + G.message : "";
            throw new Error("Point is not on curve" + H);
          }
          let M = (D & Oe) === Oe;
          return ((_ & 1) === 1) !== M && (D = s.neg(D)), { x, y: D };
        } else if (b === a && _ === 4) {
          let x = s.fromBytes(k.subarray(0, s.BYTES)),
            C = s.fromBytes(k.subarray(s.BYTES, 2 * s.BYTES));
          return { x, y: C };
        } else {
          let x = o,
            C = a;
          throw new Error(
            "invalid Point, expected length of " +
              x +
              ", or uncompressed " +
              C +
              ", got " +
              b
          );
        }
      },
    })
  );
  function m(y) {
    let b = r >> Oe;
    return y > b;
  }
  function g(y) {
    return m(y) ? c(-y) : y;
  }
  let w = (y, b, _) => gs(y.slice(b, _));
  class R {
    constructor(b, _, k) {
      cr("r", b, Oe, r),
        cr("s", _, Oe, r),
        (this.r = b),
        (this.s = _),
        k != null && (this.recovery = k),
        Object.freeze(this);
    }
    static fromCompact(b) {
      let _ = n;
      return (
        (b = at("compactSignature", b, _ * 2)),
        new R(w(b, 0, _), w(b, _, 2 * _))
      );
    }
    static fromDER(b) {
      let { r: _, s: k } = ys.toSig(at("DER", b));
      return new R(_, k);
    }
    assertValidity() {}
    addRecoveryBit(b) {
      return new R(this.r, this.s, b);
    }
    recoverPublicKey(b) {
      let { r: _, s: k, recovery: x } = this,
        C = U(at("msgHash", b));
      if (x == null || ![0, 1, 2, 3].includes(x))
        throw new Error("recovery id invalid");
      let D = x === 2 || x === 3 ? _ + e.n : _;
      if (D >= s.ORDER) throw new Error("recovery id 2 or 3 invalid");
      let M = x & 1 ? "03" : "02",
        J = u.fromHex(M + Ja(D, s.BYTES)),
        G = l(D),
        H = c(-C * G),
        ee = c(k * G),
        Z = u.BASE.multiplyAndAddUnsafe(J, H, ee);
      if (!Z) throw new Error("point at infinify");
      return Z.assertValidity(), Z;
    }
    hasHighS() {
      return m(this.s);
    }
    normalizeS() {
      return this.hasHighS() ? new R(this.r, c(-this.s), this.recovery) : this;
    }
    toDERRawBytes() {
      return Sn(this.toDERHex());
    }
    toDERHex() {
      return ys.hexFromSig(this);
    }
    toCompactRawBytes() {
      return Sn(this.toCompactHex());
    }
    toCompactHex() {
      let b = n;
      return Ja(this.r, b) + Ja(this.s, b);
    }
  }
  let B = {
    isValidPrivateKey(y) {
      try {
        return h(y), !0;
      } catch {
        return !1;
      }
    },
    normPrivateKeyToScalar: h,
    randomPrivateKey: () => {
      let y = Ha(e.n);
      return ed(e.randomBytes(y), e.n);
    },
    precompute(y = 8, b = u.BASE) {
      return b._setWindowSize(y), b.multiply(BigInt(3)), b;
    },
  };
  function T(y, b = !0) {
    return u.fromPrivateKey(y).toRawBytes(b);
  }
  function S(y) {
    if (typeof y == "bigint") return !1;
    if (y instanceof u) return !0;
    let _ = at("key", y).length,
      k = s.BYTES,
      x = k + 1,
      C = 2 * k + 1;
    if (!(e.allowedPrivateKeyLengths || n === x)) return _ === x || _ === C;
  }
  function A(y, b, _ = !0) {
    if (S(y) === !0) throw new Error("first arg must be private key");
    if (S(b) === !1) throw new Error("second arg must be public key");
    return u.fromHex(b).multiply(h(y)).toRawBytes(_);
  }
  let O =
      e.bits2int ||
      function (y) {
        if (y.length > 8192) throw new Error("input is too large");
        let b = gs(y),
          _ = y.length * 8 - i;
        return _ > 0 ? b >> BigInt(_) : b;
      },
    U =
      e.bits2int_modN ||
      function (y) {
        return c(O(y));
      },
    q = lr(i);
  function N(y) {
    return cr("num < 2^" + i, y, ws, q), ar(y, n);
  }
  function $(y, b, _ = j) {
    if (["recovered", "canonical"].some((Q) => Q in _))
      throw new Error("sign() legacy options not supported");
    let { hash: k, randomBytes: x } = e,
      { lowS: C, prehash: D, extraEntropy: M } = _;
    C == null && (C = !0),
      (y = at("msgHash", y)),
      ad(_),
      D && (y = at("prehashed msgHash", k(y)));
    let J = U(y),
      G = h(b),
      H = [N(G), N(J)];
    if (M != null && M !== !1) {
      let Q = M === !0 ? x(s.BYTES) : M;
      H.push(at("extraEntropy", Q));
    }
    let ee = In(...H),
      Z = J;
    function le(Q) {
      let he = O(Q);
      if (!p(he)) return;
      let Ze = l(he),
        st = u.BASE.multiply(he).toAffine(),
        Je = c(st.x);
      if (Je === ws) return;
      let At = c(Ze * c(Z + Je * G));
      if (At === ws) return;
      let Os = (st.x === Je ? 0 : 2) | Number(st.y & Oe),
        ju = At;
      return C && m(At) && ((ju = g(At)), (Os ^= 1)), new R(Je, ju, Os);
    }
    return { seed: ee, k2sig: le };
  }
  let j = { lowS: e.lowS, prehash: !1 },
    P = { lowS: e.lowS, prehash: !1 };
  function v(y, b, _ = j) {
    let { seed: k, k2sig: x } = $(y, b, _),
      C = e;
    return Ph(C.hash.outputLen, C.nByteLength, C.hmac)(k, x);
  }
  u.BASE._setWindowSize(8);
  function I(y, b, _, k = P) {
    let x = y;
    (b = at("msgHash", b)), (_ = at("publicKey", _));
    let { lowS: C, prehash: D, format: M } = k;
    if ((ad(k), "strict" in k))
      throw new Error("options.strict was renamed to lowS");
    if (M !== void 0 && M !== "compact" && M !== "der")
      throw new Error("format must be compact or der");
    let J = typeof x == "string" || Ur(x),
      G =
        !J &&
        !M &&
        typeof x == "object" &&
        x !== null &&
        typeof x.r == "bigint" &&
        typeof x.s == "bigint";
    if (!J && !G)
      throw new Error(
        "invalid signature, expected Uint8Array, hex string or Signature instance"
      );
    let H, ee;
    try {
      if ((G && (H = new R(x.r, x.s)), J)) {
        try {
          M !== "compact" && (H = R.fromDER(x));
        } catch (Os) {
          if (!(Os instanceof ys.Err)) throw Os;
        }
        !H && M !== "der" && (H = R.fromCompact(x));
      }
      ee = u.fromHex(_);
    } catch {
      return !1;
    }
    if (!H || (C && H.hasHighS())) return !1;
    D && (b = e.hash(b));
    let { r: Z, s: le } = H,
      Q = U(b),
      he = l(le),
      Ze = c(Q * he),
      st = c(Z * he),
      Je = u.BASE.multiplyAndAddUnsafe(ee, Ze, st)?.toAffine();
    return Je ? c(Je.x) === Z : !1;
  }
  return {
    CURVE: e,
    getPublicKey: T,
    getSharedSecret: A,
    sign: v,
    verify: I,
    ProjectivePoint: u,
    Signature: R,
    utils: B,
  };
}
function rw(t) {
  return { hash: t, hmac: (e, ...s) => Yu(t, e, Vu(...s)), randomBytes: Hu };
}
function ld(t, e) {
  let s = (r) => cd(V(V({}, t), rw(r)));
  return ye(V({}, s(e)), { create: s });
}
var dd = BigInt(
    "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"
  ),
  ud = BigInt(
    "0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"
  ),
  nw = BigInt(0),
  iw = BigInt(1),
  tc = BigInt(2),
  hd = (t, e) => (t + e / tc) / e;
function ow(t) {
  let e = dd,
    s = BigInt(3),
    r = BigInt(6),
    n = BigInt(11),
    i = BigInt(22),
    o = BigInt(23),
    a = BigInt(44),
    c = BigInt(88),
    l = (t * t * t) % e,
    u = (l * l * t) % e,
    h = (vt(u, s, e) * u) % e,
    d = (vt(h, s, e) * u) % e,
    p = (vt(d, tc, e) * l) % e,
    m = (vt(p, n, e) * p) % e,
    g = (vt(m, i, e) * m) % e,
    w = (vt(g, a, e) * g) % e,
    R = (vt(w, c, e) * w) % e,
    B = (vt(R, a, e) * g) % e,
    T = (vt(B, s, e) * u) % e,
    S = (vt(T, o, e) * m) % e,
    A = (vt(S, r, e) * l) % e,
    O = vt(A, tc, e);
  if (!sc.eql(sc.sqr(O), t)) throw new Error("Cannot find square root");
  return O;
}
var sc = Pn(dd, void 0, void 0, { sqrt: ow }),
  Et = ld(
    {
      a: nw,
      b: BigInt(7),
      Fp: sc,
      n: ud,
      Gx: BigInt(
        "55066263022277343669578718895168534326250603453777594175500187360389116729240"
      ),
      Gy: BigInt(
        "32670510020758816978083085130507043184471273380659243275938904335757337482424"
      ),
      h: BigInt(1),
      lowS: !0,
      endo: {
        beta: BigInt(
          "0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"
        ),
        splitScalar: (t) => {
          let e = ud,
            s = BigInt("0x3086d221a7d46bcde86c90e49284eb15"),
            r = -iw * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),
            n = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),
            i = s,
            o = BigInt("0x100000000000000000000000000000000"),
            a = hd(i * t, e),
            c = hd(-r * t, e),
            l = je(t - a * s - c * n, e),
            u = je(-a * r - c * i, e),
            h = l > o,
            d = u > o;
          if ((h && (l = e - l), d && (u = e - u), l > o || u > o))
            throw new Error("splitScalar: Endomorphism failed, k=" + t);
          return { k1neg: h, k1: l, k2neg: d, k2: u };
        },
      },
    },
    Wu
  );
function eo(t, e = {}) {
  let { recovered: s } = e;
  if (typeof t.r > "u") throw new Mr({ signature: t });
  if (typeof t.s > "u") throw new Mr({ signature: t });
  if (s && typeof t.yParity > "u") throw new Mr({ signature: t });
  if (t.r < 0n || t.r > Fa) throw new Zi({ value: t.r });
  if (t.s < 0n || t.s > Fa) throw new Ji({ value: t.s });
  if (typeof t.yParity == "number" && t.yParity !== 0 && t.yParity !== 1)
    throw new pr({ value: t.yParity });
}
function fd(t) {
  return rc(wt(t));
}
function rc(t) {
  if (t.length !== 130 && t.length !== 132) throw new Xi({ signature: t });
  let e = BigInt(Ft(t, 0, 32)),
    s = BigInt(Ft(t, 32, 64)),
    r = (() => {
      let n = +`0x${t.slice(130)}`;
      if (!Number.isNaN(n))
        try {
          return to(n);
        } catch {
          throw new pr({ value: n });
        }
    })();
  return typeof r > "u" ? { r: e, s } : { r: e, s, yParity: r };
}
function aw(t) {
  if (!(typeof t.r > "u") && !(typeof t.s > "u")) return nc(t);
}
function nc(t) {
  let e =
    typeof t == "string"
      ? rc(t)
      : t instanceof Uint8Array
      ? fd(t)
      : typeof t.r == "string"
      ? md(t)
      : t.v
      ? gd(t)
      : V(
          { r: t.r, s: t.s },
          typeof t.yParity < "u" ? { yParity: t.yParity } : {}
        );
  return eo(e), e;
}
function cw(t) {
  return pd(wt(t));
}
function pd(t) {
  let { r: e, s } = Et.Signature.fromDER(rs(t).slice(2));
  return { r: e, s };
}
function gd(t) {
  return { r: t.r, s: t.s, yParity: to(t.v) };
}
function md(t) {
  let e = (() => {
    let s = t.v ? Number(t.v) : void 0,
      r = t.yParity ? Number(t.yParity) : void 0;
    if (
      (typeof s == "number" && typeof r != "number" && (r = to(s)),
      typeof r != "number")
    )
      throw new pr({ value: t.yParity });
    return r;
  })();
  return { r: BigInt(t.r), s: BigInt(t.s), yParity: e };
}
function lw(t) {
  let [e, s, r] = t;
  return nc({
    r: s === "0x" ? 0n : BigInt(s),
    s: r === "0x" ? 0n : BigInt(r),
    yParity: e === "0x" ? 0 : Number(e),
  });
}
function uw(t) {
  return An(yd(t));
}
function yd(t) {
  eo(t);
  let e = t.r,
    s = t.s;
  return zi(
    bt(e, { size: 32 }),
    bt(s, { size: 32 }),
    typeof t.yParity == "number" ? bt(ic(t.yParity), { size: 1 }) : "0x"
  );
}
function hw(t) {
  return new Et.Signature(t.r, t.s).toDERRawBytes();
}
function dw(t) {
  return `0x${new Et.Signature(t.r, t.s).toDERHex()}`;
}
function fw(t) {
  return { r: t.r, s: t.s, v: ic(t.yParity) };
}
function pw(t) {
  let { r: e, s, yParity: r } = t;
  return {
    r: bt(e, { size: 32 }),
    s: bt(s, { size: 32 }),
    yParity: r === 0 ? "0x0" : "0x1",
  };
}
function gw(t) {
  let { r: e, s, yParity: r } = t;
  return [
    r ? "0x01" : "0x",
    e === 0n ? "0x" : Oa(bt(e)),
    s === 0n ? "0x" : Oa(bt(s)),
  ];
}
function mw(t, e = {}) {
  try {
    return eo(t, e), !0;
  } catch {
    return !1;
  }
}
function to(t) {
  if (t === 0 || t === 27) return 0;
  if (t === 1 || t === 28) return 1;
  if (t >= 35) return t % 2 === 0 ? 1 : 0;
  throw new Qi({ value: t });
}
function ic(t) {
  if (t === 0) return 27;
  if (t === 1) return 28;
  throw new pr({ value: t });
}
var Xi = class extends ce {
    constructor({ signature: e }) {
      super(`Value \`${e}\` is an invalid signature size.`, {
        metaMessages: [
          "Expected: 64 bytes or 65 bytes.",
          `Received ${Ot(rs(e))} bytes.`,
        ],
      }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "Signature.InvalidSerializedSizeError",
        });
    }
  },
  Mr = class extends ce {
    constructor({ signature: e }) {
      super(
        `Signature \`${Us(
          e
        )}\` is missing either an \`r\`, \`s\`, or \`yParity\` property.`
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "Signature.MissingPropertiesError",
        });
    }
  },
  Zi = class extends ce {
    constructor({ value: e }) {
      super(
        `Value \`${e}\` is an invalid r value. r must be a positive integer less than 2^256.`
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "Signature.InvalidRError",
        });
    }
  },
  Ji = class extends ce {
    constructor({ value: e }) {
      super(
        `Value \`${e}\` is an invalid s value. s must be a positive integer less than 2^256.`
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "Signature.InvalidSError",
        });
    }
  },
  pr = class extends ce {
    constructor({ value: e }) {
      super(
        `Value \`${e}\` is an invalid y-parity value. Y-parity must be 0 or 1.`
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "Signature.InvalidYParityError",
        });
    }
  },
  Qi = class extends ce {
    constructor({ value: e }) {
      super(`Value \`${e}\` is an invalid v value. v must be 27, 28 or >=35.`),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "Signature.InvalidVError",
        });
    }
  };
var ro = {};
Fu(ro, {
  createKeyPair: () => bw,
  getPublicKey: () => bd,
  getSharedSecret: () => vw,
  noble: () => ww,
  randomPrivateKey: () => vd,
  recoverAddress: () => Ed,
  recoverPublicKey: () => xd,
  sign: () => Ew,
  verify: () => xw,
});
var wd = !1;
var ww = Et;
function bw(t = {}) {
  let { as: e = "Hex" } = t,
    s = vd({ as: e }),
    r = bd({ privateKey: s });
  return { privateKey: s, publicKey: r };
}
function bd(t) {
  let { privateKey: e } = t,
    s = Et.ProjectivePoint.fromPrivateKey(rs(e).slice(2));
  return Da(s);
}
function vw(t) {
  let { as: e = "Hex", privateKey: s, publicKey: r } = t,
    o = Et.ProjectivePoint.fromHex(Cn(r).slice(2))
      .multiply(Et.utils.normPrivateKeyToScalar(rs(s).slice(2)))
      .toRawBytes(!0);
  return e === "Hex" ? wt(o) : o;
}
function vd(t = {}) {
  let { as: e = "Hex" } = t,
    s = Et.utils.randomPrivateKey();
  return e === "Hex" ? wt(s) : s;
}
function Ed(t) {
  return Vh(xd(t));
}
function xd(t) {
  let { payload: e, signature: s } = t,
    { r, s: n, yParity: i } = s,
    a = new Et.Signature(BigInt(r), BigInt(n))
      .addRecoveryBit(i)
      .recoverPublicKey(rs(e).substring(2));
  return Da(a);
}
function Ew(t) {
  let { extraEntropy: e = wd, hash: s, payload: r, privateKey: n } = t,
    {
      r: i,
      s: o,
      recovery: a,
    } = Et.sign(
      jr(r),
      jr(n),
      V(
        { extraEntropy: typeof e == "boolean" ? e : rs(e).slice(2), lowS: !0 },
        s ? { prehash: !0 } : {}
      )
    );
  return { r: i, s: o, yParity: a };
}
function xw(t) {
  let { address: e, hash: s, payload: r, publicKey: n, signature: i } = t;
  return e
    ? Hh(e, Ed({ payload: r, signature: i }))
    : Et.verify(i, jr(r), $h(n), ...(s ? [{ prehash: !0, lowS: !0 }] : []));
}
function Sw(t) {
  if (t.length >= 255) throw new TypeError("Alphabet too long");
  let e = new Uint8Array(256);
  for (let l = 0; l < e.length; l++) e[l] = 255;
  for (let l = 0; l < t.length; l++) {
    let u = t.charAt(l),
      h = u.charCodeAt(0);
    if (e[h] !== 255) throw new TypeError(u + " is ambiguous");
    e[h] = l;
  }
  let s = t.length,
    r = t.charAt(0),
    n = Math.log(s) / Math.log(256),
    i = Math.log(256) / Math.log(s);
  function o(l) {
    if (
      (l instanceof Uint8Array ||
        (ArrayBuffer.isView(l)
          ? (l = new Uint8Array(l.buffer, l.byteOffset, l.byteLength))
          : Array.isArray(l) && (l = Uint8Array.from(l))),
      !(l instanceof Uint8Array))
    )
      throw new TypeError("Expected Uint8Array");
    if (l.length === 0) return "";
    let u = 0,
      h = 0,
      d = 0,
      p = l.length;
    for (; d !== p && l[d] === 0; ) d++, u++;
    let m = ((p - d) * i + 1) >>> 0,
      g = new Uint8Array(m);
    for (; d !== p; ) {
      let B = l[d],
        T = 0;
      for (let S = m - 1; (B !== 0 || T < h) && S !== -1; S--, T++)
        (B += (256 * g[S]) >>> 0), (g[S] = B % s >>> 0), (B = (B / s) >>> 0);
      if (B !== 0) throw new Error("Non-zero carry");
      (h = T), d++;
    }
    let w = m - h;
    for (; w !== m && g[w] === 0; ) w++;
    let R = r.repeat(u);
    for (; w < m; ++w) R += t.charAt(g[w]);
    return R;
  }
  function a(l) {
    if (typeof l != "string") throw new TypeError("Expected String");
    if (l.length === 0) return new Uint8Array();
    let u = 0,
      h = 0,
      d = 0;
    for (; l[u] === r; ) h++, u++;
    let p = ((l.length - u) * n + 1) >>> 0,
      m = new Uint8Array(p);
    for (; u < l.length; ) {
      let B = l.charCodeAt(u);
      if (B > 255) return;
      let T = e[B];
      if (T === 255) return;
      let S = 0;
      for (let A = p - 1; (T !== 0 || S < d) && A !== -1; A--, S++)
        (T += (s * m[A]) >>> 0), (m[A] = T % 256 >>> 0), (T = (T / 256) >>> 0);
      if (T !== 0) throw new Error("Non-zero carry");
      (d = S), u++;
    }
    let g = p - d;
    for (; g !== p && m[g] === 0; ) g++;
    let w = new Uint8Array(h + (p - g)),
      R = h;
    for (; g !== p; ) w[R++] = m[g++];
    return w;
  }
  function c(l) {
    let u = a(l);
    if (u) return u;
    throw new Error("Non-base" + s + " character");
  }
  return { encode: o, decodeUnsafe: a, decode: c };
}
var Sd = Sw;
var Iw = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
  Fr = Sd(Iw);
function Id(t) {
  let e = t.length,
    s = 0,
    r = 0;
  for (; r < e; ) {
    let n = t.charCodeAt(r++);
    if (n & 4294967168)
      if (!(n & 4294965248)) s += 2;
      else {
        if (n >= 55296 && n <= 56319 && r < e) {
          let i = t.charCodeAt(r);
          (i & 64512) === 56320 &&
            (++r, (n = ((n & 1023) << 10) + (i & 1023) + 65536));
        }
        n & 4294901760 ? (s += 4) : (s += 3);
      }
    else {
      s++;
      continue;
    }
  }
  return s;
}
function _w(t, e, s) {
  let r = t.length,
    n = s,
    i = 0;
  for (; i < r; ) {
    let o = t.charCodeAt(i++);
    if (o & 4294967168)
      if (!(o & 4294965248)) e[n++] = ((o >> 6) & 31) | 192;
      else {
        if (o >= 55296 && o <= 56319 && i < r) {
          let a = t.charCodeAt(i);
          (a & 64512) === 56320 &&
            (++i, (o = ((o & 1023) << 10) + (a & 1023) + 65536));
        }
        o & 4294901760
          ? ((e[n++] = ((o >> 18) & 7) | 240),
            (e[n++] = ((o >> 12) & 63) | 128),
            (e[n++] = ((o >> 6) & 63) | 128))
          : ((e[n++] = ((o >> 12) & 15) | 224),
            (e[n++] = ((o >> 6) & 63) | 128));
      }
    else {
      e[n++] = o;
      continue;
    }
    e[n++] = (o & 63) | 128;
  }
}
var Tw = new TextEncoder(),
  Aw = 50;
function Cw(t, e, s) {
  Tw.encodeInto(t, e.subarray(s));
}
function _d(t, e, s) {
  t.length > Aw ? Cw(t, e, s) : _w(t, e, s);
}
var Pw = 4096;
function oc(t, e, s) {
  let r = e,
    n = r + s,
    i = [],
    o = "";
  for (; r < n; ) {
    let a = t[r++];
    if (!(a & 128)) i.push(a);
    else if ((a & 224) === 192) {
      let c = t[r++] & 63;
      i.push(((a & 31) << 6) | c);
    } else if ((a & 240) === 224) {
      let c = t[r++] & 63,
        l = t[r++] & 63;
      i.push(((a & 31) << 12) | (c << 6) | l);
    } else if ((a & 248) === 240) {
      let c = t[r++] & 63,
        l = t[r++] & 63,
        u = t[r++] & 63,
        h = ((a & 7) << 18) | (c << 12) | (l << 6) | u;
      h > 65535 &&
        ((h -= 65536),
        i.push(((h >>> 10) & 1023) | 55296),
        (h = 56320 | (h & 1023))),
        i.push(h);
    } else i.push(a);
    i.length >= Pw && ((o += String.fromCharCode(...i)), (i.length = 0));
  }
  return i.length > 0 && (o += String.fromCharCode(...i)), o;
}
var Ow = new TextDecoder(),
  Nw = 200;
function Rw(t, e, s) {
  let r = t.subarray(e, e + s);
  return Ow.decode(r);
}
function Td(t, e, s) {
  return s > Nw ? Rw(t, e, s) : oc(t, e, s);
}
var gr = class {
  constructor(e, s) {
    (this.type = e), (this.data = s);
  }
};
var ct = class t extends Error {
  constructor(e) {
    super(e);
    let s = Object.create(t.prototype);
    Object.setPrototypeOf(this, s),
      Object.defineProperty(this, "name", {
        configurable: !0,
        enumerable: !1,
        value: t.name,
      });
  }
};
function Ad(t, e, s) {
  let r = s / 4294967296,
    n = s;
  t.setUint32(e, r), t.setUint32(e + 4, n);
}
function no(t, e, s) {
  let r = Math.floor(s / 4294967296),
    n = s;
  t.setUint32(e, r), t.setUint32(e + 4, n);
}
function io(t, e) {
  let s = t.getInt32(e),
    r = t.getUint32(e + 4);
  return s * 4294967296 + r;
}
function Cd(t, e) {
  let s = t.getUint32(e),
    r = t.getUint32(e + 4);
  return s * 4294967296 + r;
}
var kw = -1,
  Bw = 4294967296 - 1,
  Uw = 17179869184 - 1;
function Lw({ sec: t, nsec: e }) {
  if (t >= 0 && e >= 0 && t <= Uw)
    if (e === 0 && t <= Bw) {
      let s = new Uint8Array(4);
      return new DataView(s.buffer).setUint32(0, t), s;
    } else {
      let s = t / 4294967296,
        r = t & 4294967295,
        n = new Uint8Array(8),
        i = new DataView(n.buffer);
      return i.setUint32(0, (e << 2) | (s & 3)), i.setUint32(4, r), n;
    }
  else {
    let s = new Uint8Array(12),
      r = new DataView(s.buffer);
    return r.setUint32(0, e), no(r, 4, t), s;
  }
}
function Dw(t) {
  let e = t.getTime(),
    s = Math.floor(e / 1e3),
    r = (e - s * 1e3) * 1e6,
    n = Math.floor(r / 1e9);
  return { sec: s + n, nsec: r - n * 1e9 };
}
function qw(t) {
  if (t instanceof Date) {
    let e = Dw(t);
    return Lw(e);
  } else return null;
}
function jw(t) {
  let e = new DataView(t.buffer, t.byteOffset, t.byteLength);
  switch (t.byteLength) {
    case 4:
      return { sec: e.getUint32(0), nsec: 0 };
    case 8: {
      let s = e.getUint32(0),
        r = e.getUint32(4),
        n = (s & 3) * 4294967296 + r,
        i = s >>> 2;
      return { sec: n, nsec: i };
    }
    case 12: {
      let s = io(e, 4),
        r = e.getUint32(0);
      return { sec: s, nsec: r };
    }
    default:
      throw new ct(
        `Unrecognized data size for timestamp (expected 4, 8, or 12): ${t.length}`
      );
  }
}
function Mw(t) {
  let e = jw(t);
  return new Date(e.sec * 1e3 + e.nsec / 1e6);
}
var Pd = { type: kw, encode: qw, decode: Mw };
var Ls = class {
  constructor() {
    (this.builtInEncoders = []),
      (this.builtInDecoders = []),
      (this.encoders = []),
      (this.decoders = []),
      this.register(Pd);
  }
  register({ type: e, encode: s, decode: r }) {
    if (e >= 0) (this.encoders[e] = s), (this.decoders[e] = r);
    else {
      let n = -1 - e;
      (this.builtInEncoders[n] = s), (this.builtInDecoders[n] = r);
    }
  }
  tryToEncode(e, s) {
    for (let r = 0; r < this.builtInEncoders.length; r++) {
      let n = this.builtInEncoders[r];
      if (n != null) {
        let i = n(e, s);
        if (i != null) {
          let o = -1 - r;
          return new gr(o, i);
        }
      }
    }
    for (let r = 0; r < this.encoders.length; r++) {
      let n = this.encoders[r];
      if (n != null) {
        let i = n(e, s);
        if (i != null) {
          let o = r;
          return new gr(o, i);
        }
      }
    }
    return e instanceof gr ? e : null;
  }
  decode(e, s, r) {
    let n = s < 0 ? this.builtInDecoders[-1 - s] : this.decoders[s];
    return n ? n(e, s, r) : new gr(s, e);
  }
};
Ls.defaultCodec = new Ls();
function Fw(t) {
  return (
    t instanceof ArrayBuffer ||
    (typeof SharedArrayBuffer < "u" && t instanceof SharedArrayBuffer)
  );
}
function On(t) {
  return t instanceof Uint8Array
    ? t
    : ArrayBuffer.isView(t)
    ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength)
    : Fw(t)
    ? new Uint8Array(t)
    : Uint8Array.from(t);
}
var $w = 100,
  zw = 2048,
  oo = class t {
    constructor(e) {
      (this.entered = !1),
        (this.extensionCodec = e?.extensionCodec ?? Ls.defaultCodec),
        (this.context = e?.context),
        (this.useBigInt64 = e?.useBigInt64 ?? !1),
        (this.maxDepth = e?.maxDepth ?? $w),
        (this.initialBufferSize = e?.initialBufferSize ?? zw),
        (this.sortKeys = e?.sortKeys ?? !1),
        (this.forceFloat32 = e?.forceFloat32 ?? !1),
        (this.ignoreUndefined = e?.ignoreUndefined ?? !1),
        (this.forceIntegerToFloat = e?.forceIntegerToFloat ?? !1),
        (this.pos = 0),
        (this.view = new DataView(new ArrayBuffer(this.initialBufferSize))),
        (this.bytes = new Uint8Array(this.view.buffer));
    }
    clone() {
      return new t({
        extensionCodec: this.extensionCodec,
        context: this.context,
        useBigInt64: this.useBigInt64,
        maxDepth: this.maxDepth,
        initialBufferSize: this.initialBufferSize,
        sortKeys: this.sortKeys,
        forceFloat32: this.forceFloat32,
        ignoreUndefined: this.ignoreUndefined,
        forceIntegerToFloat: this.forceIntegerToFloat,
      });
    }
    reinitializeState() {
      this.pos = 0;
    }
    encodeSharedRef(e) {
      if (this.entered) return this.clone().encodeSharedRef(e);
      try {
        return (
          (this.entered = !0),
          this.reinitializeState(),
          this.doEncode(e, 1),
          this.bytes.subarray(0, this.pos)
        );
      } finally {
        this.entered = !1;
      }
    }
    encode(e) {
      if (this.entered) return this.clone().encode(e);
      try {
        return (
          (this.entered = !0),
          this.reinitializeState(),
          this.doEncode(e, 1),
          this.bytes.slice(0, this.pos)
        );
      } finally {
        this.entered = !1;
      }
    }
    doEncode(e, s) {
      if (s > this.maxDepth) throw new Error(`Too deep objects in depth ${s}`);
      e == null
        ? this.encodeNil()
        : typeof e == "boolean"
        ? this.encodeBoolean(e)
        : typeof e == "number"
        ? this.forceIntegerToFloat
          ? this.encodeNumberAsFloat(e)
          : this.encodeNumber(e)
        : typeof e == "string"
        ? this.encodeString(e)
        : this.useBigInt64 && typeof e == "bigint"
        ? this.encodeBigInt64(e)
        : this.encodeObject(e, s);
    }
    ensureBufferSizeToWrite(e) {
      let s = this.pos + e;
      this.view.byteLength < s && this.resizeBuffer(s * 2);
    }
    resizeBuffer(e) {
      let s = new ArrayBuffer(e),
        r = new Uint8Array(s),
        n = new DataView(s);
      r.set(this.bytes), (this.view = n), (this.bytes = r);
    }
    encodeNil() {
      this.writeU8(192);
    }
    encodeBoolean(e) {
      e === !1 ? this.writeU8(194) : this.writeU8(195);
    }
    encodeNumber(e) {
      !this.forceIntegerToFloat && Number.isSafeInteger(e)
        ? e >= 0
          ? e < 128
            ? this.writeU8(e)
            : e < 256
            ? (this.writeU8(204), this.writeU8(e))
            : e < 65536
            ? (this.writeU8(205), this.writeU16(e))
            : e < 4294967296
            ? (this.writeU8(206), this.writeU32(e))
            : this.useBigInt64
            ? this.encodeNumberAsFloat(e)
            : (this.writeU8(207), this.writeU64(e))
          : e >= -32
          ? this.writeU8(224 | (e + 32))
          : e >= -128
          ? (this.writeU8(208), this.writeI8(e))
          : e >= -32768
          ? (this.writeU8(209), this.writeI16(e))
          : e >= -2147483648
          ? (this.writeU8(210), this.writeI32(e))
          : this.useBigInt64
          ? this.encodeNumberAsFloat(e)
          : (this.writeU8(211), this.writeI64(e))
        : this.encodeNumberAsFloat(e);
    }
    encodeNumberAsFloat(e) {
      this.forceFloat32
        ? (this.writeU8(202), this.writeF32(e))
        : (this.writeU8(203), this.writeF64(e));
    }
    encodeBigInt64(e) {
      e >= BigInt(0)
        ? (this.writeU8(207), this.writeBigUint64(e))
        : (this.writeU8(211), this.writeBigInt64(e));
    }
    writeStringHeader(e) {
      if (e < 32) this.writeU8(160 + e);
      else if (e < 256) this.writeU8(217), this.writeU8(e);
      else if (e < 65536) this.writeU8(218), this.writeU16(e);
      else if (e < 4294967296) this.writeU8(219), this.writeU32(e);
      else throw new Error(`Too long string: ${e} bytes in UTF-8`);
    }
    encodeString(e) {
      let r = Id(e);
      this.ensureBufferSizeToWrite(5 + r),
        this.writeStringHeader(r),
        _d(e, this.bytes, this.pos),
        (this.pos += r);
    }
    encodeObject(e, s) {
      let r = this.extensionCodec.tryToEncode(e, this.context);
      if (r != null) this.encodeExtension(r);
      else if (Array.isArray(e)) this.encodeArray(e, s);
      else if (ArrayBuffer.isView(e)) this.encodeBinary(e);
      else if (typeof e == "object") this.encodeMap(e, s);
      else
        throw new Error(
          `Unrecognized object: ${Object.prototype.toString.apply(e)}`
        );
    }
    encodeBinary(e) {
      let s = e.byteLength;
      if (s < 256) this.writeU8(196), this.writeU8(s);
      else if (s < 65536) this.writeU8(197), this.writeU16(s);
      else if (s < 4294967296) this.writeU8(198), this.writeU32(s);
      else throw new Error(`Too large binary: ${s}`);
      let r = On(e);
      this.writeU8a(r);
    }
    encodeArray(e, s) {
      let r = e.length;
      if (r < 16) this.writeU8(144 + r);
      else if (r < 65536) this.writeU8(220), this.writeU16(r);
      else if (r < 4294967296) this.writeU8(221), this.writeU32(r);
      else throw new Error(`Too large array: ${r}`);
      for (let n of e) this.doEncode(n, s + 1);
    }
    countWithoutUndefined(e, s) {
      let r = 0;
      for (let n of s) e[n] !== void 0 && r++;
      return r;
    }
    encodeMap(e, s) {
      let r = Object.keys(e);
      this.sortKeys && r.sort();
      let n = this.ignoreUndefined
        ? this.countWithoutUndefined(e, r)
        : r.length;
      if (n < 16) this.writeU8(128 + n);
      else if (n < 65536) this.writeU8(222), this.writeU16(n);
      else if (n < 4294967296) this.writeU8(223), this.writeU32(n);
      else throw new Error(`Too large map object: ${n}`);
      for (let i of r) {
        let o = e[i];
        (this.ignoreUndefined && o === void 0) ||
          (this.encodeString(i), this.doEncode(o, s + 1));
      }
    }
    encodeExtension(e) {
      if (typeof e.data == "function") {
        let r = e.data(this.pos + 6),
          n = r.length;
        if (n >= 4294967296)
          throw new Error(`Too large extension object: ${n}`);
        this.writeU8(201),
          this.writeU32(n),
          this.writeI8(e.type),
          this.writeU8a(r);
        return;
      }
      let s = e.data.length;
      if (s === 1) this.writeU8(212);
      else if (s === 2) this.writeU8(213);
      else if (s === 4) this.writeU8(214);
      else if (s === 8) this.writeU8(215);
      else if (s === 16) this.writeU8(216);
      else if (s < 256) this.writeU8(199), this.writeU8(s);
      else if (s < 65536) this.writeU8(200), this.writeU16(s);
      else if (s < 4294967296) this.writeU8(201), this.writeU32(s);
      else throw new Error(`Too large extension object: ${s}`);
      this.writeI8(e.type), this.writeU8a(e.data);
    }
    writeU8(e) {
      this.ensureBufferSizeToWrite(1),
        this.view.setUint8(this.pos, e),
        this.pos++;
    }
    writeU8a(e) {
      let s = e.length;
      this.ensureBufferSizeToWrite(s),
        this.bytes.set(e, this.pos),
        (this.pos += s);
    }
    writeI8(e) {
      this.ensureBufferSizeToWrite(1),
        this.view.setInt8(this.pos, e),
        this.pos++;
    }
    writeU16(e) {
      this.ensureBufferSizeToWrite(2),
        this.view.setUint16(this.pos, e),
        (this.pos += 2);
    }
    writeI16(e) {
      this.ensureBufferSizeToWrite(2),
        this.view.setInt16(this.pos, e),
        (this.pos += 2);
    }
    writeU32(e) {
      this.ensureBufferSizeToWrite(4),
        this.view.setUint32(this.pos, e),
        (this.pos += 4);
    }
    writeI32(e) {
      this.ensureBufferSizeToWrite(4),
        this.view.setInt32(this.pos, e),
        (this.pos += 4);
    }
    writeF32(e) {
      this.ensureBufferSizeToWrite(4),
        this.view.setFloat32(this.pos, e),
        (this.pos += 4);
    }
    writeF64(e) {
      this.ensureBufferSizeToWrite(8),
        this.view.setFloat64(this.pos, e),
        (this.pos += 8);
    }
    writeU64(e) {
      this.ensureBufferSizeToWrite(8),
        Ad(this.view, this.pos, e),
        (this.pos += 8);
    }
    writeI64(e) {
      this.ensureBufferSizeToWrite(8),
        no(this.view, this.pos, e),
        (this.pos += 8);
    }
    writeBigUint64(e) {
      this.ensureBufferSizeToWrite(8),
        this.view.setBigUint64(this.pos, e),
        (this.pos += 8);
    }
    writeBigInt64(e) {
      this.ensureBufferSizeToWrite(8),
        this.view.setBigInt64(this.pos, e),
        (this.pos += 8);
    }
  };
function ac(t, e) {
  return new oo(e).encodeSharedRef(t);
}
function ao(t) {
  return `${t < 0 ? "-" : ""}0x${Math.abs(t).toString(16).padStart(2, "0")}`;
}
var Vw = 16,
  Hw = 16,
  co = class {
    constructor(e = Vw, s = Hw) {
      (this.hit = 0),
        (this.miss = 0),
        (this.maxKeyLength = e),
        (this.maxLengthPerKey = s),
        (this.caches = []);
      for (let r = 0; r < this.maxKeyLength; r++) this.caches.push([]);
    }
    canBeCached(e) {
      return e > 0 && e <= this.maxKeyLength;
    }
    find(e, s, r) {
      let n = this.caches[r - 1];
      e: for (let i of n) {
        let o = i.bytes;
        for (let a = 0; a < r; a++) if (o[a] !== e[s + a]) continue e;
        return i.str;
      }
      return null;
    }
    store(e, s) {
      let r = this.caches[e.length - 1],
        n = { bytes: e, str: s };
      r.length >= this.maxLengthPerKey
        ? (r[(Math.random() * r.length) | 0] = n)
        : r.push(n);
    }
    decode(e, s, r) {
      let n = this.find(e, s, r);
      if (n != null) return this.hit++, n;
      this.miss++;
      let i = oc(e, s, r),
        o = Uint8Array.prototype.slice.call(e, s, s + r);
      return this.store(o, i), i;
    }
  };
var cc = "array",
  kn = "map_key",
  Nd = "map_value",
  Kw = (t) => {
    if (typeof t == "string" || typeof t == "number") return t;
    throw new ct("The type of key must be string or number but " + typeof t);
  },
  lc = class {
    constructor() {
      (this.stack = []), (this.stackHeadPosition = -1);
    }
    get length() {
      return this.stackHeadPosition + 1;
    }
    top() {
      return this.stack[this.stackHeadPosition];
    }
    pushArrayState(e) {
      let s = this.getUninitializedStateFromPool();
      (s.type = cc), (s.position = 0), (s.size = e), (s.array = new Array(e));
    }
    pushMapState(e) {
      let s = this.getUninitializedStateFromPool();
      (s.type = kn), (s.readCount = 0), (s.size = e), (s.map = {});
    }
    getUninitializedStateFromPool() {
      if (
        (this.stackHeadPosition++, this.stackHeadPosition === this.stack.length)
      ) {
        let e = {
          type: void 0,
          size: 0,
          array: void 0,
          position: 0,
          readCount: 0,
          map: void 0,
          key: null,
        };
        this.stack.push(e);
      }
      return this.stack[this.stackHeadPosition];
    }
    release(e) {
      if (this.stack[this.stackHeadPosition] !== e)
        throw new Error(
          "Invalid stack state. Released state is not on top of the stack."
        );
      if (e.type === cc) {
        let r = e;
        (r.size = 0), (r.array = void 0), (r.position = 0), (r.type = void 0);
      }
      if (e.type === kn || e.type === Nd) {
        let r = e;
        (r.size = 0), (r.map = void 0), (r.readCount = 0), (r.type = void 0);
      }
      this.stackHeadPosition--;
    }
    reset() {
      (this.stack.length = 0), (this.stackHeadPosition = -1);
    }
  },
  Rn = -1,
  uc = new DataView(new ArrayBuffer(0)),
  Gw = new Uint8Array(uc.buffer);
try {
  uc.getInt8(0);
} catch (t) {
  if (!(t instanceof RangeError))
    throw new Error(
      "This module is not supported in the current JavaScript engine because DataView does not throw RangeError on out-of-bounds access"
    );
}
var Od = new RangeError("Insufficient data"),
  Ww = new co(),
  lo = class t {
    constructor(e) {
      (this.totalPos = 0),
        (this.pos = 0),
        (this.view = uc),
        (this.bytes = Gw),
        (this.headByte = Rn),
        (this.stack = new lc()),
        (this.entered = !1),
        (this.extensionCodec = e?.extensionCodec ?? Ls.defaultCodec),
        (this.context = e?.context),
        (this.useBigInt64 = e?.useBigInt64 ?? !1),
        (this.rawStrings = e?.rawStrings ?? !1),
        (this.maxStrLength = e?.maxStrLength ?? 4294967295),
        (this.maxBinLength = e?.maxBinLength ?? 4294967295),
        (this.maxArrayLength = e?.maxArrayLength ?? 4294967295),
        (this.maxMapLength = e?.maxMapLength ?? 4294967295),
        (this.maxExtLength = e?.maxExtLength ?? 4294967295),
        (this.keyDecoder = e?.keyDecoder !== void 0 ? e.keyDecoder : Ww),
        (this.mapKeyConverter = e?.mapKeyConverter ?? Kw);
    }
    clone() {
      return new t({
        extensionCodec: this.extensionCodec,
        context: this.context,
        useBigInt64: this.useBigInt64,
        rawStrings: this.rawStrings,
        maxStrLength: this.maxStrLength,
        maxBinLength: this.maxBinLength,
        maxArrayLength: this.maxArrayLength,
        maxMapLength: this.maxMapLength,
        maxExtLength: this.maxExtLength,
        keyDecoder: this.keyDecoder,
      });
    }
    reinitializeState() {
      (this.totalPos = 0), (this.headByte = Rn), this.stack.reset();
    }
    setBuffer(e) {
      let s = On(e);
      (this.bytes = s),
        (this.view = new DataView(s.buffer, s.byteOffset, s.byteLength)),
        (this.pos = 0);
    }
    appendBuffer(e) {
      if (this.headByte === Rn && !this.hasRemaining(1)) this.setBuffer(e);
      else {
        let s = this.bytes.subarray(this.pos),
          r = On(e),
          n = new Uint8Array(s.length + r.length);
        n.set(s), n.set(r, s.length), this.setBuffer(n);
      }
    }
    hasRemaining(e) {
      return this.view.byteLength - this.pos >= e;
    }
    createExtraByteError(e) {
      let { view: s, pos: r } = this;
      return new RangeError(
        `Extra ${s.byteLength - r} of ${
          s.byteLength
        } byte(s) found at buffer[${e}]`
      );
    }
    decode(e) {
      if (this.entered) return this.clone().decode(e);
      try {
        (this.entered = !0), this.reinitializeState(), this.setBuffer(e);
        let s = this.doDecodeSync();
        if (this.hasRemaining(1)) throw this.createExtraByteError(this.pos);
        return s;
      } finally {
        this.entered = !1;
      }
    }
    *decodeMulti(e) {
      if (this.entered) {
        let s = this.clone();
        yield* Zo(s.decodeMulti(e));
        return;
      }
      try {
        for (
          this.entered = !0, this.reinitializeState(), this.setBuffer(e);
          this.hasRemaining(1);

        )
          yield this.doDecodeSync();
      } finally {
        this.entered = !1;
      }
    }
    decodeAsync(e) {
      return f(this, null, function* () {
        if (this.entered) return this.clone().decodeAsync(e);
        try {
          this.entered = !0;
          let o = !1,
            a;
          try {
            for (
              var s = Jo(e), r, n, i;
              (r = !(n = yield s.next()).done);
              r = !1
            ) {
              let h = n.value;
              if (o)
                throw (
                  ((this.entered = !1),
                  this.createExtraByteError(this.totalPos))
                );
              this.appendBuffer(h);
              try {
                (a = this.doDecodeSync()), (o = !0);
              } catch (d) {
                if (!(d instanceof RangeError)) throw d;
              }
              this.totalPos += this.pos;
            }
          } catch {
            i = [n];
          } finally {
            try {
              r && (n = s.return) && (yield n.call(s));
            } finally {
              if (i) throw i[0];
            }
          }
          if (o) {
            if (this.hasRemaining(1))
              throw this.createExtraByteError(this.totalPos);
            return a;
          }
          let { headByte: c, pos: l, totalPos: u } = this;
          throw new RangeError(
            `Insufficient data in parsing ${ao(
              c
            )} at ${u} (${l} in the current buffer)`
          );
        } finally {
          this.entered = !1;
        }
      });
    }
    decodeArrayStream(e) {
      return this.decodeMultiAsync(e, !0);
    }
    decodeStream(e) {
      return this.decodeMultiAsync(e, !1);
    }
    decodeMultiAsync(e, s) {
      return $u(this, null, function* () {
        if (this.entered) {
          let a = this.clone();
          yield* Zo(a.decodeMultiAsync(e, s));
          return;
        }
        try {
          this.entered = !0;
          let a = s,
            c = -1;
          try {
            for (
              var r = Jo(e), n, i, o;
              (n = !(i = yield new Xo(r.next())).done);
              n = !1
            ) {
              let l = i.value;
              if (s && c === 0) throw this.createExtraByteError(this.totalPos);
              this.appendBuffer(l),
                a && ((c = this.readArraySize()), (a = !1), this.complete());
              try {
                for (; yield this.doDecodeSync(), --c !== 0; );
              } catch (u) {
                if (!(u instanceof RangeError)) throw u;
              }
              this.totalPos += this.pos;
            }
          } catch {
            o = [i];
          } finally {
            try {
              n && (i = r.return) && (yield new Xo(i.call(r)));
            } finally {
              if (o) throw o[0];
            }
          }
        } finally {
          this.entered = !1;
        }
      });
    }
    doDecodeSync() {
      e: for (;;) {
        let e = this.readHeadByte(),
          s;
        if (e >= 224) s = e - 256;
        else if (e < 192)
          if (e < 128) s = e;
          else if (e < 144) {
            let n = e - 128;
            if (n !== 0) {
              this.pushMapState(n), this.complete();
              continue e;
            } else s = {};
          } else if (e < 160) {
            let n = e - 144;
            if (n !== 0) {
              this.pushArrayState(n), this.complete();
              continue e;
            } else s = [];
          } else {
            let n = e - 160;
            s = this.decodeString(n, 0);
          }
        else if (e === 192) s = null;
        else if (e === 194) s = !1;
        else if (e === 195) s = !0;
        else if (e === 202) s = this.readF32();
        else if (e === 203) s = this.readF64();
        else if (e === 204) s = this.readU8();
        else if (e === 205) s = this.readU16();
        else if (e === 206) s = this.readU32();
        else if (e === 207)
          this.useBigInt64
            ? (s = this.readU64AsBigInt())
            : (s = this.readU64());
        else if (e === 208) s = this.readI8();
        else if (e === 209) s = this.readI16();
        else if (e === 210) s = this.readI32();
        else if (e === 211)
          this.useBigInt64
            ? (s = this.readI64AsBigInt())
            : (s = this.readI64());
        else if (e === 217) {
          let n = this.lookU8();
          s = this.decodeString(n, 1);
        } else if (e === 218) {
          let n = this.lookU16();
          s = this.decodeString(n, 2);
        } else if (e === 219) {
          let n = this.lookU32();
          s = this.decodeString(n, 4);
        } else if (e === 220) {
          let n = this.readU16();
          if (n !== 0) {
            this.pushArrayState(n), this.complete();
            continue e;
          } else s = [];
        } else if (e === 221) {
          let n = this.readU32();
          if (n !== 0) {
            this.pushArrayState(n), this.complete();
            continue e;
          } else s = [];
        } else if (e === 222) {
          let n = this.readU16();
          if (n !== 0) {
            this.pushMapState(n), this.complete();
            continue e;
          } else s = {};
        } else if (e === 223) {
          let n = this.readU32();
          if (n !== 0) {
            this.pushMapState(n), this.complete();
            continue e;
          } else s = {};
        } else if (e === 196) {
          let n = this.lookU8();
          s = this.decodeBinary(n, 1);
        } else if (e === 197) {
          let n = this.lookU16();
          s = this.decodeBinary(n, 2);
        } else if (e === 198) {
          let n = this.lookU32();
          s = this.decodeBinary(n, 4);
        } else if (e === 212) s = this.decodeExtension(1, 0);
        else if (e === 213) s = this.decodeExtension(2, 0);
        else if (e === 214) s = this.decodeExtension(4, 0);
        else if (e === 215) s = this.decodeExtension(8, 0);
        else if (e === 216) s = this.decodeExtension(16, 0);
        else if (e === 199) {
          let n = this.lookU8();
          s = this.decodeExtension(n, 1);
        } else if (e === 200) {
          let n = this.lookU16();
          s = this.decodeExtension(n, 2);
        } else if (e === 201) {
          let n = this.lookU32();
          s = this.decodeExtension(n, 4);
        } else throw new ct(`Unrecognized type byte: ${ao(e)}`);
        this.complete();
        let r = this.stack;
        for (; r.length > 0; ) {
          let n = r.top();
          if (n.type === cc)
            if (
              ((n.array[n.position] = s), n.position++, n.position === n.size)
            )
              (s = n.array), r.release(n);
            else continue e;
          else if (n.type === kn) {
            if (s === "__proto__")
              throw new ct("The key __proto__ is not allowed");
            (n.key = this.mapKeyConverter(s)), (n.type = Nd);
            continue e;
          } else if (
            ((n.map[n.key] = s), n.readCount++, n.readCount === n.size)
          )
            (s = n.map), r.release(n);
          else {
            (n.key = null), (n.type = kn);
            continue e;
          }
        }
        return s;
      }
    }
    readHeadByte() {
      return (
        this.headByte === Rn && (this.headByte = this.readU8()), this.headByte
      );
    }
    complete() {
      this.headByte = Rn;
    }
    readArraySize() {
      let e = this.readHeadByte();
      switch (e) {
        case 220:
          return this.readU16();
        case 221:
          return this.readU32();
        default: {
          if (e < 160) return e - 144;
          throw new ct(`Unrecognized array type byte: ${ao(e)}`);
        }
      }
    }
    pushMapState(e) {
      if (e > this.maxMapLength)
        throw new ct(
          `Max length exceeded: map length (${e}) > maxMapLengthLength (${this.maxMapLength})`
        );
      this.stack.pushMapState(e);
    }
    pushArrayState(e) {
      if (e > this.maxArrayLength)
        throw new ct(
          `Max length exceeded: array length (${e}) > maxArrayLength (${this.maxArrayLength})`
        );
      this.stack.pushArrayState(e);
    }
    decodeString(e, s) {
      return !this.rawStrings || this.stateIsMapKey()
        ? this.decodeUtf8String(e, s)
        : this.decodeBinary(e, s);
    }
    decodeUtf8String(e, s) {
      if (e > this.maxStrLength)
        throw new ct(
          `Max length exceeded: UTF-8 byte length (${e}) > maxStrLength (${this.maxStrLength})`
        );
      if (this.bytes.byteLength < this.pos + s + e) throw Od;
      let r = this.pos + s,
        n;
      return (
        this.stateIsMapKey() && this.keyDecoder?.canBeCached(e)
          ? (n = this.keyDecoder.decode(this.bytes, r, e))
          : (n = Td(this.bytes, r, e)),
        (this.pos += s + e),
        n
      );
    }
    stateIsMapKey() {
      return this.stack.length > 0 ? this.stack.top().type === kn : !1;
    }
    decodeBinary(e, s) {
      if (e > this.maxBinLength)
        throw new ct(
          `Max length exceeded: bin length (${e}) > maxBinLength (${this.maxBinLength})`
        );
      if (!this.hasRemaining(e + s)) throw Od;
      let r = this.pos + s,
        n = this.bytes.subarray(r, r + e);
      return (this.pos += s + e), n;
    }
    decodeExtension(e, s) {
      if (e > this.maxExtLength)
        throw new ct(
          `Max length exceeded: ext length (${e}) > maxExtLength (${this.maxExtLength})`
        );
      let r = this.view.getInt8(this.pos + s),
        n = this.decodeBinary(e, s + 1);
      return this.extensionCodec.decode(n, r, this.context);
    }
    lookU8() {
      return this.view.getUint8(this.pos);
    }
    lookU16() {
      return this.view.getUint16(this.pos);
    }
    lookU32() {
      return this.view.getUint32(this.pos);
    }
    readU8() {
      let e = this.view.getUint8(this.pos);
      return this.pos++, e;
    }
    readI8() {
      let e = this.view.getInt8(this.pos);
      return this.pos++, e;
    }
    readU16() {
      let e = this.view.getUint16(this.pos);
      return (this.pos += 2), e;
    }
    readI16() {
      let e = this.view.getInt16(this.pos);
      return (this.pos += 2), e;
    }
    readU32() {
      let e = this.view.getUint32(this.pos);
      return (this.pos += 4), e;
    }
    readI32() {
      let e = this.view.getInt32(this.pos);
      return (this.pos += 4), e;
    }
    readU64() {
      let e = Cd(this.view, this.pos);
      return (this.pos += 8), e;
    }
    readI64() {
      let e = io(this.view, this.pos);
      return (this.pos += 8), e;
    }
    readU64AsBigInt() {
      let e = this.view.getBigUint64(this.pos);
      return (this.pos += 8), e;
    }
    readI64AsBigInt() {
      let e = this.view.getBigInt64(this.pos);
      return (this.pos += 8), e;
    }
    readF32() {
      let e = this.view.getFloat32(this.pos);
      return (this.pos += 4), e;
    }
    readF64() {
      let e = this.view.getFloat64(this.pos);
      return (this.pos += 8), e;
    }
  };
function hc(t, e) {
  return new lo(e).decode(t);
}
function mr(t) {
  return globalThis.Buffer != null
    ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength)
    : t;
}
function Bn(t = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null
    ? mr(globalThis.Buffer.allocUnsafe(t))
    : new Uint8Array(t);
}
function yr(t, e) {
  e || (e = t.reduce((n, i) => n + i.length, 0));
  let s = Bn(e),
    r = 0;
  for (let n of t) s.set(n, r), (r += n.length);
  return mr(s);
}
function kd(t, e, s, r) {
  return {
    name: t,
    prefix: e,
    encoder: { name: t, prefix: e, encode: s },
    decoder: { decode: r },
  };
}
var Rd = kd(
    "utf8",
    "u",
    (t) => "u" + new TextDecoder("utf8").decode(t),
    (t) => new TextEncoder().encode(t.substring(1))
  ),
  dc = kd(
    "ascii",
    "a",
    (t) => {
      let e = "a";
      for (let s = 0; s < t.length; s++) e += String.fromCharCode(t[s]);
      return e;
    },
    (t) => {
      t = t.substring(1);
      let e = Bn(t.length);
      for (let s = 0; s < t.length; s++) e[s] = t.charCodeAt(s);
      return e;
    }
  ),
  Yw = V(
    {
      utf8: Rd,
      "utf-8": Rd,
      hex: ra.base16,
      latin1: dc,
      ascii: dc,
      binary: dc,
    },
    ra
  ),
  uo = Yw;
function lt(t, e = "utf8") {
  let s = uo[e];
  if (!s) throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") &&
    globalThis.Buffer != null &&
    globalThis.Buffer.from != null
    ? mr(globalThis.Buffer.from(t, "utf-8"))
    : s.decoder.decode(`${s.prefix}${t}`);
}
function ke(t, e = "utf8") {
  let s = uo[e];
  if (!s) throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") &&
    globalThis.Buffer != null &&
    globalThis.Buffer.from != null
    ? globalThis.Buffer.from(t.buffer, t.byteOffset, t.byteLength).toString(
        "utf8"
      )
    : s.encoder.encode(t).substring(1);
}
var mf = gt(Lm(), 1);
var Xw = ":";
function Wt(t) {
  let [e, s] = t.split(Xw);
  return { namespace: e, reference: s };
}
function yf(t, e) {
  return t.includes(":") ? [t] : e.chains || [];
}
var Zw = Object.defineProperty,
  Jw = Object.defineProperties,
  Qw = Object.getOwnPropertyDescriptors,
  Bd = Object.getOwnPropertySymbols,
  e0 = Object.prototype.hasOwnProperty,
  t0 = Object.prototype.propertyIsEnumerable,
  _c = (t, e, s) =>
    e in t
      ? Zw(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (t[e] = s),
  Ud = (t, e) => {
    for (var s in e || (e = {})) e0.call(e, s) && _c(t, s, e[s]);
    if (Bd) for (var s of Bd(e)) t0.call(e, s) && _c(t, s, e[s]);
    return t;
  },
  s0 = (t, e) => Jw(t, Qw(e)),
  Ld = (t, e, s) => _c(t, typeof e != "symbol" ? e + "" : e, s),
  r0 = "ReactNative",
  ht = {
    reactNative: "react-native",
    node: "node",
    browser: "browser",
    unknown: "unknown",
  };
var n0 = "js";
function zn() {
  return (
    typeof process < "u" &&
    typeof process.versions < "u" &&
    typeof process.versions.node < "u"
  );
}
function _s() {
  return (
    !(0, Kt.getDocument)() &&
    !!(0, Kt.getNavigator)() &&
    navigator.product === r0
  );
}
function wf() {
  return (
    _s() &&
    typeof global < "u" &&
    typeof (global == null ? void 0 : global.Platform) < "u" &&
    (global == null ? void 0 : global.Platform.OS) === "android"
  );
}
function bf() {
  return (
    _s() &&
    typeof global < "u" &&
    typeof (global == null ? void 0 : global.Platform) < "u" &&
    (global == null ? void 0 : global.Platform.OS) === "ios"
  );
}
function Sr() {
  return !zn() && !!(0, Kt.getNavigator)() && !!(0, Kt.getDocument)();
}
function Vn() {
  return _s()
    ? ht.reactNative
    : zn()
    ? ht.node
    : Sr()
    ? ht.browser
    : ht.unknown;
}
function Hc() {
  var t;
  try {
    return _s() &&
      typeof global < "u" &&
      typeof (global == null ? void 0 : global.Application) < "u"
      ? (t = global.Application) == null
        ? void 0
        : t.applicationId
      : void 0;
  } catch {
    return;
  }
}
function i0(t, e) {
  let s = new URLSearchParams(t);
  return (
    Object.entries(e)
      .sort(([r], [n]) => r.localeCompare(n))
      .forEach(([r, n]) => {
        n != null && s.set(r, String(n));
      }),
    s.toString()
  );
}
function vf(t) {
  var e, s;
  let r = Kc();
  try {
    return (
      t != null &&
        t.url &&
        r.url &&
        new URL(t.url).host !== new URL(r.url).host &&
        (console.warn(
          `The configured WalletConnect 'metadata.url':${t.url} differs from the actual page url:${r.url}. This is probably unintended and can lead to issues.`
        ),
        (t.url = r.url)),
      (e = t?.icons) != null &&
        e.length &&
        t.icons.length > 0 &&
        (t.icons = t.icons.filter((n) => n !== "")),
      s0(Ud(Ud({}, r), t), {
        url: t?.url || r.url,
        name: t?.name || r.name,
        description: t?.description || r.description,
        icons:
          (s = t?.icons) != null && s.length && t.icons.length > 0
            ? t.icons
            : r.icons,
      })
    );
  } catch (n) {
    return console.warn("Error populating app metadata", n), t || r;
  }
}
function Kc() {
  return (
    (0, gf.getWindowMetadata)() || {
      name: "",
      description: "",
      url: "",
      icons: [""],
    }
  );
}
function o0() {
  if (
    Vn() === ht.reactNative &&
    typeof global < "u" &&
    typeof (global == null ? void 0 : global.Platform) < "u"
  ) {
    let { OS: s, Version: r } = global.Platform;
    return [s, r].join("-");
  }
  let t = rh();
  if (t === null) return "unknown";
  let e = t.os ? t.os.replace(" ", "").toLowerCase() : "unknown";
  return t.type === "browser"
    ? [e, t.name, t.version].join("-")
    : [e, t.version].join("-");
}
function a0() {
  var t;
  let e = Vn();
  return e === ht.browser
    ? [
        e,
        ((t = (0, Kt.getLocation)()) == null ? void 0 : t.host) || "unknown",
      ].join(":")
    : e;
}
function Gc(t, e, s) {
  let r = o0(),
    n = a0();
  return [[t, e].join("-"), [n0, s].join("-"), r, n].join("/");
}
function Ef({
  protocol: t,
  version: e,
  relayUrl: s,
  sdkVersion: r,
  auth: n,
  projectId: i,
  useOnCloseEvent: o,
  bundleId: a,
  packageName: c,
}) {
  let l = s.split("?"),
    u = Gc(t, e, r),
    h = {
      auth: n,
      ua: u,
      projectId: i,
      useOnCloseEvent: o || void 0,
      packageName: c || void 0,
      bundleId: a || void 0,
    },
    d = i0(l[1] || "", h);
  return l[0] + "?" + d;
}
function wr(t, e) {
  return t.filter((s) => e.includes(s)).length === t.length;
}
function _o(t) {
  return Object.fromEntries(t.entries());
}
function To(t) {
  return new Map(Object.entries(t));
}
function Ts(t = Ss.FIVE_MINUTES, e) {
  let s = (0, Ss.toMiliseconds)(t || Ss.FIVE_MINUTES),
    r,
    n,
    i,
    o;
  return {
    resolve: (a) => {
      i && r && (clearTimeout(i), r(a), (o = Promise.resolve(a)));
    },
    reject: (a) => {
      i && n && (clearTimeout(i), n(a));
    },
    done: () =>
      new Promise((a, c) => {
        if (o) return a(o);
        (i = setTimeout(() => {
          let l = new Error(e);
          (o = Promise.reject(l)), c(l);
        }, s)),
          (r = a),
          (n = c);
      }),
  };
}
function Yt(t, e, s) {
  return new Promise((r, n) =>
    f(this, null, function* () {
      let i = setTimeout(() => n(new Error(s)), e);
      try {
        let o = yield t;
        r(o);
      } catch (o) {
        n(o);
      }
      clearTimeout(i);
    })
  );
}
function xf(t, e) {
  if (typeof e == "string" && e.startsWith(`${t}:`)) return e;
  if (t.toLowerCase() === "topic") {
    if (typeof e != "string")
      throw new Error('Value must be "string" for expirer target type: topic');
    return `topic:${e}`;
  } else if (t.toLowerCase() === "id") {
    if (typeof e != "number")
      throw new Error('Value must be "number" for expirer target type: id');
    return `id:${e}`;
  }
  throw new Error(`Unknown expirer target type: ${t}`);
}
function Sf(t) {
  return xf("topic", t);
}
function If(t) {
  return xf("id", t);
}
function Ao(t) {
  let [e, s] = t.split(":"),
    r = { id: void 0, topic: void 0 };
  if (e === "topic" && typeof s == "string") r.topic = s;
  else if (e === "id" && Number.isInteger(Number(s))) r.id = Number(s);
  else
    throw new Error(
      `Invalid target, expected id:number or topic:string, got ${e}:${s}`
    );
  return r;
}
function ve(t, e) {
  return (0, Ss.fromMiliseconds)((e || Date.now()) + (0, Ss.toMiliseconds)(t));
}
function St(t) {
  return Date.now() >= (0, Ss.toMiliseconds)(t);
}
function oe(t, e) {
  return `${t}${e ? `:${e}` : ""}`;
}
function Vt(t = [], e = []) {
  return [...new Set([...t, ...e])];
}
function _f(r) {
  return f(this, arguments, function* ({ id: t, topic: e, wcDeepLink: s }) {
    var n;
    try {
      if (!s) return;
      let i = typeof s == "string" ? JSON.parse(s) : s,
        o = i?.href;
      if (typeof o != "string") return;
      let a = c0(o, t, e),
        c = Vn();
      if (c === ht.browser) {
        if (!((n = (0, Kt.getDocument)()) != null && n.hasFocus())) {
          console.warn("Document does not have focus, skipping deeplink.");
          return;
        }
        l0(a);
      } else c === ht.reactNative && typeof (global == null ? void 0 : global.Linking) < "u" && (yield global.Linking.openURL(a));
    } catch (i) {
      console.error(i);
    }
  });
}
function c0(t, e, s) {
  let r = `requestId=${e}&sessionTopic=${s}`;
  t.endsWith("/") && (t = t.slice(0, -1));
  let n = `${t}`;
  if (t.startsWith("https://t.me")) {
    let i = t.includes("?") ? "&startapp=" : "?startapp=";
    n = `${n}${i}${d0(r, !0)}`;
  } else n = `${n}/wc?${r}`;
  return n;
}
function l0(t) {
  let e = "_self";
  h0()
    ? (e = "_top")
    : (u0() || t.startsWith("https://") || t.startsWith("http://")) &&
      (e = "_blank"),
    window.open(t, e, "noreferrer noopener");
}
function Tf(t, e) {
  return f(this, null, function* () {
    let s = "";
    try {
      if (Sr() && ((s = localStorage.getItem(e)), s)) return s;
      s = yield t.getItem(e);
    } catch (r) {
      console.error(r);
    }
    return s;
  });
}
function Wc(t, e) {
  if (!t.includes(e)) return null;
  let s = t.split(/([&,?,=])/),
    r = s.indexOf(e);
  return s[r + 2];
}
function Yc() {
  return typeof crypto < "u" && crypto != null && crypto.randomUUID
    ? crypto.randomUUID()
    : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu, (t) => {
        let e = (Math.random() * 16) | 0;
        return (t === "x" ? e : (e & 3) | 8).toString(16);
      });
}
function Hn() {
  return typeof process < "u" && process.env.IS_VITEST === "true";
}
function u0() {
  return (
    typeof window < "u" &&
    (!!window.TelegramWebviewProxy ||
      !!window.Telegram ||
      !!window.TelegramWebviewProxyProto)
  );
}
function h0() {
  try {
    return window.self !== window.top;
  } catch {
    return !1;
  }
}
function d0(t, e = !1) {
  let s = Buffer.from(t).toString("base64");
  return e ? s.replace(/[=]/g, "") : s;
}
function Af(t) {
  return Buffer.from(t, "base64").toString("utf-8");
}
function Cf(t) {
  return new Promise((e) => setTimeout(e, t));
}
var yo = class {
    constructor({ limit: e }) {
      Ld(this, "limit"),
        Ld(this, "set"),
        (this.limit = e),
        (this.set = new Set());
    }
    add(e) {
      if (!this.set.has(e)) {
        if (this.set.size >= this.limit) {
          let s = this.set.values().next().value;
          s && this.set.delete(s);
        }
        this.set.add(e);
      }
    }
    has(e) {
      return this.set.has(e);
    }
  },
  ho = BigInt(2 ** 32 - 1),
  Dd = BigInt(32);
function Pf(t, e = !1) {
  return e
    ? { h: Number(t & ho), l: Number((t >> Dd) & ho) }
    : { h: Number((t >> Dd) & ho) | 0, l: Number(t & ho) | 0 };
}
function Of(t, e = !1) {
  let s = t.length,
    r = new Uint32Array(s),
    n = new Uint32Array(s);
  for (let i = 0; i < s; i++) {
    let { h: o, l: a } = Pf(t[i], e);
    [r[i], n[i]] = [o, a];
  }
  return [r, n];
}
var qd = (t, e, s) => t >>> s,
  jd = (t, e, s) => (t << (32 - s)) | (e >>> s),
  zs = (t, e, s) => (t >>> s) | (e << (32 - s)),
  Vs = (t, e, s) => (t << (32 - s)) | (e >>> s),
  Dn = (t, e, s) => (t << (64 - s)) | (e >>> (s - 32)),
  qn = (t, e, s) => (t >>> (s - 32)) | (e << (64 - s)),
  f0 = (t, e) => e,
  p0 = (t, e) => t,
  g0 = (t, e, s) => (t << s) | (e >>> (32 - s)),
  m0 = (t, e, s) => (e << s) | (t >>> (32 - s)),
  y0 = (t, e, s) => (e << (s - 32)) | (t >>> (64 - s)),
  w0 = (t, e, s) => (t << (s - 32)) | (e >>> (64 - s));
function zt(t, e, s, r) {
  let n = (e >>> 0) + (r >>> 0);
  return { h: (t + s + ((n / 2 ** 32) | 0)) | 0, l: n | 0 };
}
var Xc = (t, e, s) => (t >>> 0) + (e >>> 0) + (s >>> 0),
  Zc = (t, e, s, r) => (e + s + r + ((t / 2 ** 32) | 0)) | 0,
  b0 = (t, e, s, r) => (t >>> 0) + (e >>> 0) + (s >>> 0) + (r >>> 0),
  v0 = (t, e, s, r, n) => (e + s + r + n + ((t / 2 ** 32) | 0)) | 0,
  E0 = (t, e, s, r, n) =>
    (t >>> 0) + (e >>> 0) + (s >>> 0) + (r >>> 0) + (n >>> 0),
  x0 = (t, e, s, r, n, i) => (e + s + r + n + i + ((t / 2 ** 32) | 0)) | 0,
  $r =
    typeof globalThis == "object" && "crypto" in globalThis
      ? globalThis.crypto
      : void 0;
function Co(t) {
  return (
    t instanceof Uint8Array ||
    (ArrayBuffer.isView(t) && t.constructor.name === "Uint8Array")
  );
}
function Is(t) {
  if (!Number.isSafeInteger(t) || t < 0)
    throw new Error("positive integer expected, got " + t);
}
function Gt(t, ...e) {
  if (!Co(t)) throw new Error("Uint8Array expected");
  if (e.length > 0 && !e.includes(t.length))
    throw new Error(
      "Uint8Array expected of length " + e + ", got length=" + t.length
    );
}
function Po(t) {
  if (typeof t != "function" || typeof t.create != "function")
    throw new Error("Hash should be wrapped by utils.createHasher");
  Is(t.outputLen), Is(t.blockLen);
}
function Ws(t, e = !0) {
  if (t.destroyed) throw new Error("Hash instance has been destroyed");
  if (e && t.finished) throw new Error("Hash#digest() has already been called");
}
function Jc(t, e) {
  Gt(t);
  let s = e.outputLen;
  if (t.length < s)
    throw new Error(
      "digestInto() expects output buffer of length at least " + s
    );
}
function Mn(t) {
  return new Uint32Array(t.buffer, t.byteOffset, Math.floor(t.byteLength / 4));
}
function Nt(...t) {
  for (let e = 0; e < t.length; e++) t[e].fill(0);
}
function fc(t) {
  return new DataView(t.buffer, t.byteOffset, t.byteLength);
}
function ns(t, e) {
  return (t << (32 - e)) | (t >>> e);
}
var Nf = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
function Rf(t) {
  return (
    ((t << 24) & 4278190080) |
    ((t << 8) & 16711680) |
    ((t >>> 8) & 65280) |
    ((t >>> 24) & 255)
  );
}
var vs = Nf ? (t) => t : (t) => Rf(t);
function S0(t) {
  for (let e = 0; e < t.length; e++) t[e] = Rf(t[e]);
  return t;
}
var Hs = Nf ? (t) => t : S0,
  kf =
    typeof Uint8Array.from([]).toHex == "function" &&
    typeof Uint8Array.fromHex == "function",
  I0 = Array.from({ length: 256 }, (t, e) => e.toString(16).padStart(2, "0"));
function Hr(t) {
  if ((Gt(t), kf)) return t.toHex();
  let e = "";
  for (let s = 0; s < t.length; s++) e += I0[t[s]];
  return e;
}
var bs = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
function Md(t) {
  if (t >= bs._0 && t <= bs._9) return t - bs._0;
  if (t >= bs.A && t <= bs.F) return t - (bs.A - 10);
  if (t >= bs.a && t <= bs.f) return t - (bs.a - 10);
}
function wo(t) {
  if (typeof t != "string")
    throw new Error("hex string expected, got " + typeof t);
  if (kf) return Uint8Array.fromHex(t);
  let e = t.length,
    s = e / 2;
  if (e % 2)
    throw new Error("hex string expected, got unpadded hex of length " + e);
  let r = new Uint8Array(s);
  for (let n = 0, i = 0; n < s; n++, i += 2) {
    let o = Md(t.charCodeAt(i)),
      a = Md(t.charCodeAt(i + 1));
    if (o === void 0 || a === void 0) {
      let c = t[i] + t[i + 1];
      throw new Error(
        'hex string expected, got non-hex character "' + c + '" at index ' + i
      );
    }
    r[n] = o * 16 + a;
  }
  return r;
}
function Bf(t) {
  if (typeof t != "string") throw new Error("string expected");
  return new Uint8Array(new TextEncoder().encode(t));
}
function Ht(t) {
  return typeof t == "string" && (t = Bf(t)), Gt(t), t;
}
function Ks(...t) {
  let e = 0;
  for (let r = 0; r < t.length; r++) {
    let n = t[r];
    Gt(n), (e += n.length);
  }
  let s = new Uint8Array(e);
  for (let r = 0, n = 0; r < t.length; r++) {
    let i = t[r];
    s.set(i, n), (n += i.length);
  }
  return s;
}
var Gr = class {};
function Kn(t) {
  let e = (r) => t().update(Ht(r)).digest(),
    s = t();
  return (
    (e.outputLen = s.outputLen),
    (e.blockLen = s.blockLen),
    (e.create = () => t()),
    e
  );
}
function _0(t) {
  let e = (r, n) => t(n).update(Ht(r)).digest(),
    s = t({});
  return (
    (e.outputLen = s.outputLen),
    (e.blockLen = s.blockLen),
    (e.create = (r) => t(r)),
    e
  );
}
function Ir(t = 32) {
  if ($r && typeof $r.getRandomValues == "function")
    return $r.getRandomValues(new Uint8Array(t));
  if ($r && typeof $r.randomBytes == "function")
    return Uint8Array.from($r.randomBytes(t));
  throw new Error("crypto.getRandomValues must be defined");
}
var T0 = BigInt(0),
  Un = BigInt(1),
  A0 = BigInt(2),
  C0 = BigInt(7),
  P0 = BigInt(256),
  O0 = BigInt(113),
  Uf = [],
  Lf = [],
  Df = [];
for (let t = 0, e = Un, s = 1, r = 0; t < 24; t++) {
  ([s, r] = [r, (2 * s + 3 * r) % 5]),
    Uf.push(2 * (5 * r + s)),
    Lf.push((((t + 1) * (t + 2)) / 2) % 64);
  let n = T0;
  for (let i = 0; i < 7; i++)
    (e = ((e << Un) ^ ((e >> C0) * O0)) % P0),
      e & A0 && (n ^= Un << ((Un << BigInt(i)) - Un));
  Df.push(n);
}
var qf = Of(Df, !0),
  N0 = qf[0],
  R0 = qf[1],
  Fd = (t, e, s) => (s > 32 ? y0(t, e, s) : g0(t, e, s)),
  $d = (t, e, s) => (s > 32 ? w0(t, e, s) : m0(t, e, s));
function k0(t, e = 24) {
  let s = new Uint32Array(10);
  for (let r = 24 - e; r < 24; r++) {
    for (let o = 0; o < 10; o++)
      s[o] = t[o] ^ t[o + 10] ^ t[o + 20] ^ t[o + 30] ^ t[o + 40];
    for (let o = 0; o < 10; o += 2) {
      let a = (o + 8) % 10,
        c = (o + 2) % 10,
        l = s[c],
        u = s[c + 1],
        h = Fd(l, u, 1) ^ s[a],
        d = $d(l, u, 1) ^ s[a + 1];
      for (let p = 0; p < 50; p += 10) (t[o + p] ^= h), (t[o + p + 1] ^= d);
    }
    let n = t[2],
      i = t[3];
    for (let o = 0; o < 24; o++) {
      let a = Lf[o],
        c = Fd(n, i, a),
        l = $d(n, i, a),
        u = Uf[o];
      (n = t[u]), (i = t[u + 1]), (t[u] = c), (t[u + 1] = l);
    }
    for (let o = 0; o < 50; o += 10) {
      for (let a = 0; a < 10; a++) s[a] = t[o + a];
      for (let a = 0; a < 10; a++)
        t[o + a] ^= ~s[(a + 2) % 10] & s[(a + 4) % 10];
    }
    (t[0] ^= N0[r]), (t[1] ^= R0[r]);
  }
  Nt(s);
}
var Tc = class t extends Gr {
    constructor(e, s, r, n = !1, i = 24) {
      if (
        (super(),
        (this.pos = 0),
        (this.posOut = 0),
        (this.finished = !1),
        (this.destroyed = !1),
        (this.enableXOF = !1),
        (this.blockLen = e),
        (this.suffix = s),
        (this.outputLen = r),
        (this.enableXOF = n),
        (this.rounds = i),
        Is(r),
        !(0 < e && e < 200))
      )
        throw new Error("only keccak-f1600 function is supported");
      (this.state = new Uint8Array(200)), (this.state32 = Mn(this.state));
    }
    clone() {
      return this._cloneInto();
    }
    keccak() {
      Hs(this.state32),
        k0(this.state32, this.rounds),
        Hs(this.state32),
        (this.posOut = 0),
        (this.pos = 0);
    }
    update(e) {
      Ws(this), (e = Ht(e)), Gt(e);
      let { blockLen: s, state: r } = this,
        n = e.length;
      for (let i = 0; i < n; ) {
        let o = Math.min(s - this.pos, n - i);
        for (let a = 0; a < o; a++) r[this.pos++] ^= e[i++];
        this.pos === s && this.keccak();
      }
      return this;
    }
    finish() {
      if (this.finished) return;
      this.finished = !0;
      let { state: e, suffix: s, pos: r, blockLen: n } = this;
      (e[r] ^= s),
        s & 128 && r === n - 1 && this.keccak(),
        (e[n - 1] ^= 128),
        this.keccak();
    }
    writeInto(e) {
      Ws(this, !1), Gt(e), this.finish();
      let s = this.state,
        { blockLen: r } = this;
      for (let n = 0, i = e.length; n < i; ) {
        this.posOut >= r && this.keccak();
        let o = Math.min(r - this.posOut, i - n);
        e.set(s.subarray(this.posOut, this.posOut + o), n),
          (this.posOut += o),
          (n += o);
      }
      return e;
    }
    xofInto(e) {
      if (!this.enableXOF)
        throw new Error("XOF is not possible for this instance");
      return this.writeInto(e);
    }
    xof(e) {
      return Is(e), this.xofInto(new Uint8Array(e));
    }
    digestInto(e) {
      if ((Jc(e, this), this.finished))
        throw new Error("digest() was already called");
      return this.writeInto(e), this.destroy(), e;
    }
    digest() {
      return this.digestInto(new Uint8Array(this.outputLen));
    }
    destroy() {
      (this.destroyed = !0), Nt(this.state);
    }
    _cloneInto(e) {
      let {
        blockLen: s,
        suffix: r,
        outputLen: n,
        rounds: i,
        enableXOF: o,
      } = this;
      return (
        e || (e = new t(s, r, n, o, i)),
        e.state32.set(this.state32),
        (e.pos = this.pos),
        (e.posOut = this.posOut),
        (e.finished = this.finished),
        (e.rounds = i),
        (e.suffix = r),
        (e.outputLen = n),
        (e.enableXOF = o),
        (e.destroyed = this.destroyed),
        e
      );
    }
  },
  B0 = (t, e, s) => Kn(() => new Tc(e, t, s)),
  U0 = B0(1, 136, 256 / 8);
function L0(t, e, s, r) {
  if (typeof t.setBigUint64 == "function") return t.setBigUint64(e, s, r);
  let n = BigInt(32),
    i = BigInt(4294967295),
    o = Number((s >> n) & i),
    a = Number(s & i),
    c = r ? 4 : 0,
    l = r ? 0 : 4;
  t.setUint32(e + c, o, r), t.setUint32(e + l, a, r);
}
function D0(t, e, s) {
  return (t & e) ^ (~t & s);
}
function q0(t, e, s) {
  return (t & e) ^ (t & s) ^ (e & s);
}
var bo = class extends Gr {
    constructor(e, s, r, n) {
      super(),
        (this.finished = !1),
        (this.length = 0),
        (this.pos = 0),
        (this.destroyed = !1),
        (this.blockLen = e),
        (this.outputLen = s),
        (this.padOffset = r),
        (this.isLE = n),
        (this.buffer = new Uint8Array(e)),
        (this.view = fc(this.buffer));
    }
    update(e) {
      Ws(this), (e = Ht(e)), Gt(e);
      let { view: s, buffer: r, blockLen: n } = this,
        i = e.length;
      for (let o = 0; o < i; ) {
        let a = Math.min(n - this.pos, i - o);
        if (a === n) {
          let c = fc(e);
          for (; n <= i - o; o += n) this.process(c, o);
          continue;
        }
        r.set(e.subarray(o, o + a), this.pos),
          (this.pos += a),
          (o += a),
          this.pos === n && (this.process(s, 0), (this.pos = 0));
      }
      return (this.length += e.length), this.roundClean(), this;
    }
    digestInto(e) {
      Ws(this), Jc(e, this), (this.finished = !0);
      let { buffer: s, view: r, blockLen: n, isLE: i } = this,
        { pos: o } = this;
      (s[o++] = 128),
        Nt(this.buffer.subarray(o)),
        this.padOffset > n - o && (this.process(r, 0), (o = 0));
      for (let h = o; h < n; h++) s[h] = 0;
      L0(r, n - 8, BigInt(this.length * 8), i), this.process(r, 0);
      let a = fc(e),
        c = this.outputLen;
      if (c % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
      let l = c / 4,
        u = this.get();
      if (l > u.length) throw new Error("_sha2: outputLen bigger than state");
      for (let h = 0; h < l; h++) a.setUint32(4 * h, u[h], i);
    }
    digest() {
      let { buffer: e, outputLen: s } = this;
      this.digestInto(e);
      let r = e.slice(0, s);
      return this.destroy(), r;
    }
    _cloneInto(e) {
      e || (e = new this.constructor()), e.set(...this.get());
      let {
        blockLen: s,
        buffer: r,
        length: n,
        finished: i,
        destroyed: o,
        pos: a,
      } = this;
      return (
        (e.destroyed = o),
        (e.finished = i),
        (e.length = n),
        (e.pos = a),
        n % s && e.buffer.set(r),
        e
      );
    }
    clone() {
      return this._cloneInto();
    }
  },
  Ds = Uint32Array.from([
    1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924,
    528734635, 1541459225,
  ]),
  Fe = Uint32Array.from([
    3418070365, 3238371032, 1654270250, 914150663, 2438529370, 812702999,
    355462360, 4144912697, 1731405415, 4290775857, 2394180231, 1750603025,
    3675008525, 1694076839, 1203062813, 3204075428,
  ]),
  $e = Uint32Array.from([
    1779033703, 4089235720, 3144134277, 2227873595, 1013904242, 4271175723,
    2773480762, 1595750129, 1359893119, 2917565137, 2600822924, 725511199,
    528734635, 4215389547, 1541459225, 327033209,
  ]),
  j0 = Uint32Array.from([
    1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
    2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
    1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774,
    264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986,
    2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711,
    113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291,
    1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411,
    3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344,
    430227734, 506948616, 659060556, 883997877, 958139571, 1322822218,
    1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424,
    2428436474, 2756734187, 3204031479, 3329325298,
  ]),
  qs = new Uint32Array(64),
  Ac = class extends bo {
    constructor(e = 32) {
      super(64, e, 8, !1),
        (this.A = Ds[0] | 0),
        (this.B = Ds[1] | 0),
        (this.C = Ds[2] | 0),
        (this.D = Ds[3] | 0),
        (this.E = Ds[4] | 0),
        (this.F = Ds[5] | 0),
        (this.G = Ds[6] | 0),
        (this.H = Ds[7] | 0);
    }
    get() {
      let { A: e, B: s, C: r, D: n, E: i, F: o, G: a, H: c } = this;
      return [e, s, r, n, i, o, a, c];
    }
    set(e, s, r, n, i, o, a, c) {
      (this.A = e | 0),
        (this.B = s | 0),
        (this.C = r | 0),
        (this.D = n | 0),
        (this.E = i | 0),
        (this.F = o | 0),
        (this.G = a | 0),
        (this.H = c | 0);
    }
    process(e, s) {
      for (let h = 0; h < 16; h++, s += 4) qs[h] = e.getUint32(s, !1);
      for (let h = 16; h < 64; h++) {
        let d = qs[h - 15],
          p = qs[h - 2],
          m = ns(d, 7) ^ ns(d, 18) ^ (d >>> 3),
          g = ns(p, 17) ^ ns(p, 19) ^ (p >>> 10);
        qs[h] = (g + qs[h - 7] + m + qs[h - 16]) | 0;
      }
      let { A: r, B: n, C: i, D: o, E: a, F: c, G: l, H: u } = this;
      for (let h = 0; h < 64; h++) {
        let d = ns(a, 6) ^ ns(a, 11) ^ ns(a, 25),
          p = (u + d + D0(a, c, l) + j0[h] + qs[h]) | 0,
          m = ((ns(r, 2) ^ ns(r, 13) ^ ns(r, 22)) + q0(r, n, i)) | 0;
        (u = l),
          (l = c),
          (c = a),
          (a = (o + p) | 0),
          (o = i),
          (i = n),
          (n = r),
          (r = (p + m) | 0);
      }
      (r = (r + this.A) | 0),
        (n = (n + this.B) | 0),
        (i = (i + this.C) | 0),
        (o = (o + this.D) | 0),
        (a = (a + this.E) | 0),
        (c = (c + this.F) | 0),
        (l = (l + this.G) | 0),
        (u = (u + this.H) | 0),
        this.set(r, n, i, o, a, c, l, u);
    }
    roundClean() {
      Nt(qs);
    }
    destroy() {
      this.set(0, 0, 0, 0, 0, 0, 0, 0), Nt(this.buffer);
    }
  },
  jf = Of(
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
    ].map((t) => BigInt(t))
  ),
  M0 = jf[0],
  F0 = jf[1],
  js = new Uint32Array(80),
  Ms = new Uint32Array(80),
  Fn = class extends bo {
    constructor(e = 64) {
      super(128, e, 16, !1),
        (this.Ah = $e[0] | 0),
        (this.Al = $e[1] | 0),
        (this.Bh = $e[2] | 0),
        (this.Bl = $e[3] | 0),
        (this.Ch = $e[4] | 0),
        (this.Cl = $e[5] | 0),
        (this.Dh = $e[6] | 0),
        (this.Dl = $e[7] | 0),
        (this.Eh = $e[8] | 0),
        (this.El = $e[9] | 0),
        (this.Fh = $e[10] | 0),
        (this.Fl = $e[11] | 0),
        (this.Gh = $e[12] | 0),
        (this.Gl = $e[13] | 0),
        (this.Hh = $e[14] | 0),
        (this.Hl = $e[15] | 0);
    }
    get() {
      let {
        Ah: e,
        Al: s,
        Bh: r,
        Bl: n,
        Ch: i,
        Cl: o,
        Dh: a,
        Dl: c,
        Eh: l,
        El: u,
        Fh: h,
        Fl: d,
        Gh: p,
        Gl: m,
        Hh: g,
        Hl: w,
      } = this;
      return [e, s, r, n, i, o, a, c, l, u, h, d, p, m, g, w];
    }
    set(e, s, r, n, i, o, a, c, l, u, h, d, p, m, g, w) {
      (this.Ah = e | 0),
        (this.Al = s | 0),
        (this.Bh = r | 0),
        (this.Bl = n | 0),
        (this.Ch = i | 0),
        (this.Cl = o | 0),
        (this.Dh = a | 0),
        (this.Dl = c | 0),
        (this.Eh = l | 0),
        (this.El = u | 0),
        (this.Fh = h | 0),
        (this.Fl = d | 0),
        (this.Gh = p | 0),
        (this.Gl = m | 0),
        (this.Hh = g | 0),
        (this.Hl = w | 0);
    }
    process(e, s) {
      for (let T = 0; T < 16; T++, s += 4)
        (js[T] = e.getUint32(s)), (Ms[T] = e.getUint32((s += 4)));
      for (let T = 16; T < 80; T++) {
        let S = js[T - 15] | 0,
          A = Ms[T - 15] | 0,
          O = zs(S, A, 1) ^ zs(S, A, 8) ^ qd(S, A, 7),
          U = Vs(S, A, 1) ^ Vs(S, A, 8) ^ jd(S, A, 7),
          q = js[T - 2] | 0,
          N = Ms[T - 2] | 0,
          $ = zs(q, N, 19) ^ Dn(q, N, 61) ^ qd(q, N, 6),
          j = Vs(q, N, 19) ^ qn(q, N, 61) ^ jd(q, N, 6),
          P = b0(U, j, Ms[T - 7], Ms[T - 16]),
          v = v0(P, O, $, js[T - 7], js[T - 16]);
        (js[T] = v | 0), (Ms[T] = P | 0);
      }
      let {
        Ah: r,
        Al: n,
        Bh: i,
        Bl: o,
        Ch: a,
        Cl: c,
        Dh: l,
        Dl: u,
        Eh: h,
        El: d,
        Fh: p,
        Fl: m,
        Gh: g,
        Gl: w,
        Hh: R,
        Hl: B,
      } = this;
      for (let T = 0; T < 80; T++) {
        let S = zs(h, d, 14) ^ zs(h, d, 18) ^ Dn(h, d, 41),
          A = Vs(h, d, 14) ^ Vs(h, d, 18) ^ qn(h, d, 41),
          O = (h & p) ^ (~h & g),
          U = (d & m) ^ (~d & w),
          q = E0(B, A, U, F0[T], Ms[T]),
          N = x0(q, R, S, O, M0[T], js[T]),
          $ = q | 0,
          j = zs(r, n, 28) ^ Dn(r, n, 34) ^ Dn(r, n, 39),
          P = Vs(r, n, 28) ^ qn(r, n, 34) ^ qn(r, n, 39),
          v = (r & i) ^ (r & a) ^ (i & a),
          I = (n & o) ^ (n & c) ^ (o & c);
        (R = g | 0),
          (B = w | 0),
          (g = p | 0),
          (w = m | 0),
          (p = h | 0),
          (m = d | 0),
          ({ h, l: d } = zt(l | 0, u | 0, N | 0, $ | 0)),
          (l = a | 0),
          (u = c | 0),
          (a = i | 0),
          (c = o | 0),
          (i = r | 0),
          (o = n | 0);
        let y = Xc($, P, I);
        (r = Zc(y, N, j, v)), (n = y | 0);
      }
      ({ h: r, l: n } = zt(this.Ah | 0, this.Al | 0, r | 0, n | 0)),
        ({ h: i, l: o } = zt(this.Bh | 0, this.Bl | 0, i | 0, o | 0)),
        ({ h: a, l: c } = zt(this.Ch | 0, this.Cl | 0, a | 0, c | 0)),
        ({ h: l, l: u } = zt(this.Dh | 0, this.Dl | 0, l | 0, u | 0)),
        ({ h, l: d } = zt(this.Eh | 0, this.El | 0, h | 0, d | 0)),
        ({ h: p, l: m } = zt(this.Fh | 0, this.Fl | 0, p | 0, m | 0)),
        ({ h: g, l: w } = zt(this.Gh | 0, this.Gl | 0, g | 0, w | 0)),
        ({ h: R, l: B } = zt(this.Hh | 0, this.Hl | 0, R | 0, B | 0)),
        this.set(r, n, i, o, a, c, l, u, h, d, p, m, g, w, R, B);
    }
    roundClean() {
      Nt(js, Ms);
    }
    destroy() {
      Nt(this.buffer), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    }
  },
  Cc = class extends Fn {
    constructor() {
      super(48),
        (this.Ah = Fe[0] | 0),
        (this.Al = Fe[1] | 0),
        (this.Bh = Fe[2] | 0),
        (this.Bl = Fe[3] | 0),
        (this.Ch = Fe[4] | 0),
        (this.Cl = Fe[5] | 0),
        (this.Dh = Fe[6] | 0),
        (this.Dl = Fe[7] | 0),
        (this.Eh = Fe[8] | 0),
        (this.El = Fe[9] | 0),
        (this.Fh = Fe[10] | 0),
        (this.Fl = Fe[11] | 0),
        (this.Gh = Fe[12] | 0),
        (this.Gl = Fe[13] | 0),
        (this.Hh = Fe[14] | 0),
        (this.Hl = Fe[15] | 0);
    }
  },
  ze = Uint32Array.from([
    573645204, 4230739756, 2673172387, 3360449730, 596883563, 1867755857,
    2520282905, 1497426621, 2519219938, 2827943907, 3193839141, 1401305490,
    721525244, 746961066, 246885852, 2177182882,
  ]),
  Pc = class extends Fn {
    constructor() {
      super(32),
        (this.Ah = ze[0] | 0),
        (this.Al = ze[1] | 0),
        (this.Bh = ze[2] | 0),
        (this.Bl = ze[3] | 0),
        (this.Ch = ze[4] | 0),
        (this.Cl = ze[5] | 0),
        (this.Dh = ze[6] | 0),
        (this.Dl = ze[7] | 0),
        (this.Eh = ze[8] | 0),
        (this.El = ze[9] | 0),
        (this.Fh = ze[10] | 0),
        (this.Fl = ze[11] | 0),
        (this.Gh = ze[12] | 0),
        (this.Gl = ze[13] | 0),
        (this.Hh = ze[14] | 0),
        (this.Hl = ze[15] | 0);
    }
  },
  Oo = Kn(() => new Ac()),
  $0 = Kn(() => new Fn()),
  z0 = Kn(() => new Cc()),
  V0 = Kn(() => new Pc()),
  H0 = Uint8Array.from([
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 14, 10, 4, 8, 9, 15,
    13, 6, 1, 12, 0, 2, 11, 7, 5, 3, 11, 8, 12, 0, 5, 2, 15, 13, 10, 14, 3, 6,
    7, 1, 9, 4, 7, 9, 3, 1, 13, 12, 11, 14, 2, 6, 5, 10, 4, 0, 15, 8, 9, 0, 5,
    7, 2, 4, 10, 15, 14, 1, 11, 12, 6, 8, 3, 13, 2, 12, 6, 10, 0, 11, 8, 3, 4,
    13, 7, 5, 15, 14, 1, 9, 12, 5, 1, 15, 14, 13, 4, 10, 0, 7, 6, 3, 9, 2, 8,
    11, 13, 11, 7, 14, 12, 1, 3, 9, 5, 0, 15, 4, 8, 6, 2, 10, 6, 15, 14, 9, 11,
    3, 0, 8, 12, 2, 13, 7, 1, 4, 10, 5, 10, 2, 8, 4, 7, 6, 1, 5, 15, 11, 9, 14,
    3, 12, 13, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 14, 10,
    4, 8, 9, 15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3, 11, 8, 12, 0, 5, 2, 15, 13,
    10, 14, 3, 6, 7, 1, 9, 4, 7, 9, 3, 1, 13, 12, 11, 14, 2, 6, 5, 10, 4, 0, 15,
    8, 9, 0, 5, 7, 2, 4, 10, 15, 14, 1, 11, 12, 6, 8, 3, 13, 2, 12, 6, 10, 0,
    11, 8, 3, 4, 13, 7, 5, 15, 14, 1, 9,
  ]),
  Ce = Uint32Array.from([
    4089235720, 1779033703, 2227873595, 3144134277, 4271175723, 1013904242,
    1595750129, 2773480762, 2917565137, 1359893119, 725511199, 2600822924,
    4215389547, 528734635, 327033209, 1541459225,
  ]),
  z = new Uint32Array(32);
function Fs(t, e, s, r, n, i) {
  let o = n[i],
    a = n[i + 1],
    c = z[2 * t],
    l = z[2 * t + 1],
    u = z[2 * e],
    h = z[2 * e + 1],
    d = z[2 * s],
    p = z[2 * s + 1],
    m = z[2 * r],
    g = z[2 * r + 1],
    w = Xc(c, u, o);
  (l = Zc(w, l, h, a)),
    (c = w | 0),
    ({ Dh: g, Dl: m } = { Dh: g ^ l, Dl: m ^ c }),
    ({ Dh: g, Dl: m } = { Dh: f0(g, m), Dl: p0(g) }),
    ({ h: p, l: d } = zt(p, d, g, m)),
    ({ Bh: h, Bl: u } = { Bh: h ^ p, Bl: u ^ d }),
    ({ Bh: h, Bl: u } = { Bh: zs(h, u, 24), Bl: Vs(h, u, 24) }),
    (z[2 * t] = c),
    (z[2 * t + 1] = l),
    (z[2 * e] = u),
    (z[2 * e + 1] = h),
    (z[2 * s] = d),
    (z[2 * s + 1] = p),
    (z[2 * r] = m),
    (z[2 * r + 1] = g);
}
function $s(t, e, s, r, n, i) {
  let o = n[i],
    a = n[i + 1],
    c = z[2 * t],
    l = z[2 * t + 1],
    u = z[2 * e],
    h = z[2 * e + 1],
    d = z[2 * s],
    p = z[2 * s + 1],
    m = z[2 * r],
    g = z[2 * r + 1],
    w = Xc(c, u, o);
  (l = Zc(w, l, h, a)),
    (c = w | 0),
    ({ Dh: g, Dl: m } = { Dh: g ^ l, Dl: m ^ c }),
    ({ Dh: g, Dl: m } = { Dh: zs(g, m, 16), Dl: Vs(g, m, 16) }),
    ({ h: p, l: d } = zt(p, d, g, m)),
    ({ Bh: h, Bl: u } = { Bh: h ^ p, Bl: u ^ d }),
    ({ Bh: h, Bl: u } = { Bh: Dn(h, u, 63), Bl: qn(h, u, 63) }),
    (z[2 * t] = c),
    (z[2 * t + 1] = l),
    (z[2 * e] = u),
    (z[2 * e + 1] = h),
    (z[2 * s] = d),
    (z[2 * s + 1] = p),
    (z[2 * r] = m),
    (z[2 * r + 1] = g);
}
function K0(t, e = {}, s, r, n) {
  if ((Is(s), t < 0 || t > s)) throw new Error("outputLen bigger than keyLen");
  let { key: i, salt: o, personalization: a } = e;
  if (i !== void 0 && (i.length < 1 || i.length > s))
    throw new Error("key length must be undefined or 1.." + s);
  if (o !== void 0 && o.length !== r)
    throw new Error("salt must be undefined or " + r);
  if (a !== void 0 && a.length !== n)
    throw new Error("personalization must be undefined or " + n);
}
var Oc = class extends Gr {
    constructor(e, s) {
      super(),
        (this.finished = !1),
        (this.destroyed = !1),
        (this.length = 0),
        (this.pos = 0),
        Is(e),
        Is(s),
        (this.blockLen = e),
        (this.outputLen = s),
        (this.buffer = new Uint8Array(e)),
        (this.buffer32 = Mn(this.buffer));
    }
    update(e) {
      Ws(this), (e = Ht(e)), Gt(e);
      let { blockLen: s, buffer: r, buffer32: n } = this,
        i = e.length,
        o = e.byteOffset,
        a = e.buffer;
      for (let c = 0; c < i; ) {
        this.pos === s &&
          (Hs(n), this.compress(n, 0, !1), Hs(n), (this.pos = 0));
        let l = Math.min(s - this.pos, i - c),
          u = o + c;
        if (l === s && !(u % 4) && c + l < i) {
          let h = new Uint32Array(a, u, Math.floor((i - c) / 4));
          Hs(h);
          for (let d = 0; c + s < i; d += n.length, c += s)
            (this.length += s), this.compress(h, d, !1);
          Hs(h);
          continue;
        }
        r.set(e.subarray(c, c + l), this.pos),
          (this.pos += l),
          (this.length += l),
          (c += l);
      }
      return this;
    }
    digestInto(e) {
      Ws(this), Jc(e, this);
      let { pos: s, buffer32: r } = this;
      (this.finished = !0),
        Nt(this.buffer.subarray(s)),
        Hs(r),
        this.compress(r, 0, !0),
        Hs(r);
      let n = Mn(e);
      this.get().forEach((i, o) => (n[o] = vs(i)));
    }
    digest() {
      let { buffer: e, outputLen: s } = this;
      this.digestInto(e);
      let r = e.slice(0, s);
      return this.destroy(), r;
    }
    _cloneInto(e) {
      let {
        buffer: s,
        length: r,
        finished: n,
        destroyed: i,
        outputLen: o,
        pos: a,
      } = this;
      return (
        e || (e = new this.constructor({ dkLen: o })),
        e.set(...this.get()),
        e.buffer.set(s),
        (e.destroyed = i),
        (e.finished = n),
        (e.length = r),
        (e.pos = a),
        (e.outputLen = o),
        e
      );
    }
    clone() {
      return this._cloneInto();
    }
  },
  Nc = class extends Oc {
    constructor(e = {}) {
      let s = e.dkLen === void 0 ? 64 : e.dkLen;
      super(128, s),
        (this.v0l = Ce[0] | 0),
        (this.v0h = Ce[1] | 0),
        (this.v1l = Ce[2] | 0),
        (this.v1h = Ce[3] | 0),
        (this.v2l = Ce[4] | 0),
        (this.v2h = Ce[5] | 0),
        (this.v3l = Ce[6] | 0),
        (this.v3h = Ce[7] | 0),
        (this.v4l = Ce[8] | 0),
        (this.v4h = Ce[9] | 0),
        (this.v5l = Ce[10] | 0),
        (this.v5h = Ce[11] | 0),
        (this.v6l = Ce[12] | 0),
        (this.v6h = Ce[13] | 0),
        (this.v7l = Ce[14] | 0),
        (this.v7h = Ce[15] | 0),
        K0(s, e, 64, 16, 16);
      let { key: r, personalization: n, salt: i } = e,
        o = 0;
      if (
        (r !== void 0 && ((r = Ht(r)), (o = r.length)),
        (this.v0l ^= this.outputLen | (o << 8) | 65536 | (1 << 24)),
        i !== void 0)
      ) {
        i = Ht(i);
        let a = Mn(i);
        (this.v4l ^= vs(a[0])),
          (this.v4h ^= vs(a[1])),
          (this.v5l ^= vs(a[2])),
          (this.v5h ^= vs(a[3]));
      }
      if (n !== void 0) {
        n = Ht(n);
        let a = Mn(n);
        (this.v6l ^= vs(a[0])),
          (this.v6h ^= vs(a[1])),
          (this.v7l ^= vs(a[2])),
          (this.v7h ^= vs(a[3]));
      }
      if (r !== void 0) {
        let a = new Uint8Array(this.blockLen);
        a.set(r), this.update(a);
      }
    }
    get() {
      let {
        v0l: e,
        v0h: s,
        v1l: r,
        v1h: n,
        v2l: i,
        v2h: o,
        v3l: a,
        v3h: c,
        v4l: l,
        v4h: u,
        v5l: h,
        v5h: d,
        v6l: p,
        v6h: m,
        v7l: g,
        v7h: w,
      } = this;
      return [e, s, r, n, i, o, a, c, l, u, h, d, p, m, g, w];
    }
    set(e, s, r, n, i, o, a, c, l, u, h, d, p, m, g, w) {
      (this.v0l = e | 0),
        (this.v0h = s | 0),
        (this.v1l = r | 0),
        (this.v1h = n | 0),
        (this.v2l = i | 0),
        (this.v2h = o | 0),
        (this.v3l = a | 0),
        (this.v3h = c | 0),
        (this.v4l = l | 0),
        (this.v4h = u | 0),
        (this.v5l = h | 0),
        (this.v5h = d | 0),
        (this.v6l = p | 0),
        (this.v6h = m | 0),
        (this.v7l = g | 0),
        (this.v7h = w | 0);
    }
    compress(e, s, r) {
      this.get().forEach((c, l) => (z[l] = c)), z.set(Ce, 16);
      let { h: n, l: i } = Pf(BigInt(this.length));
      (z[24] = Ce[8] ^ i),
        (z[25] = Ce[9] ^ n),
        r && ((z[28] = ~z[28]), (z[29] = ~z[29]));
      let o = 0,
        a = H0;
      for (let c = 0; c < 12; c++)
        Fs(0, 4, 8, 12, e, s + 2 * a[o++]),
          $s(0, 4, 8, 12, e, s + 2 * a[o++]),
          Fs(1, 5, 9, 13, e, s + 2 * a[o++]),
          $s(1, 5, 9, 13, e, s + 2 * a[o++]),
          Fs(2, 6, 10, 14, e, s + 2 * a[o++]),
          $s(2, 6, 10, 14, e, s + 2 * a[o++]),
          Fs(3, 7, 11, 15, e, s + 2 * a[o++]),
          $s(3, 7, 11, 15, e, s + 2 * a[o++]),
          Fs(0, 5, 10, 15, e, s + 2 * a[o++]),
          $s(0, 5, 10, 15, e, s + 2 * a[o++]),
          Fs(1, 6, 11, 12, e, s + 2 * a[o++]),
          $s(1, 6, 11, 12, e, s + 2 * a[o++]),
          Fs(2, 7, 8, 13, e, s + 2 * a[o++]),
          $s(2, 7, 8, 13, e, s + 2 * a[o++]),
          Fs(3, 4, 9, 14, e, s + 2 * a[o++]),
          $s(3, 4, 9, 14, e, s + 2 * a[o++]);
      (this.v0l ^= z[0] ^ z[16]),
        (this.v0h ^= z[1] ^ z[17]),
        (this.v1l ^= z[2] ^ z[18]),
        (this.v1h ^= z[3] ^ z[19]),
        (this.v2l ^= z[4] ^ z[20]),
        (this.v2h ^= z[5] ^ z[21]),
        (this.v3l ^= z[6] ^ z[22]),
        (this.v3h ^= z[7] ^ z[23]),
        (this.v4l ^= z[8] ^ z[24]),
        (this.v4h ^= z[9] ^ z[25]),
        (this.v5l ^= z[10] ^ z[26]),
        (this.v5h ^= z[11] ^ z[27]),
        (this.v6l ^= z[12] ^ z[28]),
        (this.v6h ^= z[13] ^ z[29]),
        (this.v7l ^= z[14] ^ z[30]),
        (this.v7h ^= z[15] ^ z[31]),
        Nt(z);
    }
    destroy() {
      (this.destroyed = !0),
        Nt(this.buffer32),
        this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    }
  },
  G0 = _0((t) => new Nc(t)),
  W0 = "https://rpc.walletconnect.org/v1";
function Mf(t) {
  let e = `Ethereum Signed Message:
${t.length}`,
    s = new TextEncoder().encode(e + t);
  return "0x" + Buffer.from(U0(s)).toString("hex");
}
function Y0(t, e, s, r, n, i) {
  return f(this, null, function* () {
    switch (s.t) {
      case "eip191":
        return yield X0(t, e, s.s);
      case "eip1271":
        return yield Z0(t, e, s.s, r, n, i);
      default:
        throw new Error(
          `verifySignature failed: Attempted to verify CacaoSignature with unknown type: ${s.t}`
        );
    }
  });
}
function X0(t, e, s) {
  let r = so.fromHex(s);
  return (
    ro.recoverAddress({ payload: Mf(e), signature: r }).toLowerCase() ===
    t.toLowerCase()
  );
}
function Z0(t, e, s, r, n, i) {
  return f(this, null, function* () {
    let o = Wt(r);
    if (!o.namespace || !o.reference)
      throw new Error(
        `isValidEip1271Signature failed: chainId must be in CAIP-2 format, received: ${r}`
      );
    try {
      let a = "0x1626ba7e",
        c = "0000000000000000000000000000000000000000000000000000000000000040",
        l = s.substring(2),
        u = (l.length / 2).toString(16).padStart(64, "0"),
        h = (e.startsWith("0x") ? e : Mf(e)).substring(2),
        d = a + h + c + u + l,
        p = yield fetch(`${i || W0}/?chainId=${r}&projectId=${n}`, {
          headers: { "Content-Type": "application/json" },
          method: "POST",
          body: JSON.stringify({
            id: J0(),
            jsonrpc: "2.0",
            method: "eth_call",
            params: [{ to: t, data: d }, "latest"],
          }),
        }),
        { result: m } = yield p.json();
      return m ? m.slice(0, a.length).toLowerCase() === a.toLowerCase() : !1;
    } catch (a) {
      return console.error("isValidEip1271Signature: ", a), !1;
    }
  });
}
function J0() {
  return Date.now() + Math.floor(Math.random() * 1e3);
}
function Ff(t) {
  let e = atob(t),
    s = new Uint8Array(e.length);
  for (let o = 0; o < e.length; o++) s[o] = e.charCodeAt(o);
  let r = s[0];
  if (r === 0) throw new Error("No signatures found");
  let n = 1 + r * 64;
  if (s.length < n)
    throw new Error("Transaction data too short for claimed signature count");
  if (s.length < 100) throw new Error("Transaction too short");
  let i = Buffer.from(t, "base64").slice(1, 65);
  return Fr.encode(i);
}
function $f(t) {
  let e = new Uint8Array(Buffer.from(t, "base64")),
    s = Array.from("TransactionData::").map((i) => i.charCodeAt(0)),
    r = new Uint8Array(s.length + e.length);
  r.set(s), r.set(e, s.length);
  let n = G0(r, { dkLen: 32 });
  return Fr.encode(n);
}
function Qc(t) {
  let e = new Uint8Array(Oo(Q0(t)));
  return Fr.encode(e);
}
function Q0(t) {
  if (t instanceof Uint8Array) return t;
  if (Array.isArray(t)) return new Uint8Array(t);
  if (typeof t == "object" && t != null && t.data)
    return new Uint8Array(Object.values(t.data));
  if (typeof t == "object" && t) return new Uint8Array(Object.values(t));
  throw new Error(
    "getNearUint8ArrayFromBytes: Unexpected result type from bytes array"
  );
}
function el(t) {
  let e = Buffer.from(t, "base64"),
    s = hc(e).txn;
  if (!s) throw new Error("Invalid signed transaction: missing 'txn' field");
  let r = ac(s),
    n = Buffer.from("TX"),
    i = Buffer.concat([n, Buffer.from(r)]),
    o = V0(i);
  return ih.encode(o).replace(/=+$/, "");
}
function pc(t) {
  let e = [],
    s = BigInt(t);
  for (; s >= BigInt(128); )
    e.push(Number((s & BigInt(127)) | BigInt(128))), (s >>= BigInt(7));
  return e.push(Number(s)), Buffer.from(e);
}
function zf(t) {
  let e = Buffer.from(t.signed.bodyBytes, "base64"),
    s = Buffer.from(t.signed.authInfoBytes, "base64"),
    r = Buffer.from(t.signature.signature, "base64"),
    n = [];
  n.push(Buffer.from([10])),
    n.push(pc(e.length)),
    n.push(e),
    n.push(Buffer.from([18])),
    n.push(pc(s.length)),
    n.push(s),
    n.push(Buffer.from([26])),
    n.push(pc(r.length)),
    n.push(r);
  let i = Buffer.concat(n),
    o = Oo(i);
  return Buffer.from(o).toString("hex").toUpperCase();
}
function Vf(t) {
  var e, s;
  let r = [];
  try {
    if (typeof t == "string") return r.push(t), r;
    if (typeof t != "object") return r;
    t != null && t.id && r.push(t.id);
    let n =
      (s = (e = t?.capabilities) == null ? void 0 : e.caip345) == null
        ? void 0
        : s.transactionHashes;
    n && r.push(...n);
  } catch (n) {
    console.warn("getWalletSendCallsHashes failed: ", n);
  }
  return r;
}
var eb = Object.defineProperty,
  tb = Object.defineProperties,
  sb = Object.getOwnPropertyDescriptors,
  zd = Object.getOwnPropertySymbols,
  rb = Object.prototype.hasOwnProperty,
  nb = Object.prototype.propertyIsEnumerable,
  Vd = (t, e, s) =>
    e in t
      ? eb(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (t[e] = s),
  ib = (t, e) => {
    for (var s in e || (e = {})) rb.call(e, s) && Vd(t, s, e[s]);
    if (zd) for (var s of zd(e)) nb.call(e, s) && Vd(t, s, e[s]);
    return t;
  },
  ob = (t, e) => tb(t, sb(e)),
  ab = "did:pkh:",
  tl = (t) => t?.split(":"),
  cb = (t) => {
    let e = t && tl(t);
    if (e) return t.includes(ab) ? e[3] : e[1];
  },
  No = (t) => {
    let e = t && tl(t);
    if (e) return e[2] + ":" + e[3];
  },
  Gn = (t) => {
    let e = t && tl(t);
    if (e) return e.pop();
  };
function sl(t) {
  return f(this, null, function* () {
    let { cacao: e, projectId: s } = t,
      { s: r, p: n } = e,
      i = rl(n, n.iss),
      o = Gn(n.iss);
    return yield Y0(o, i, r, No(n.iss), s);
  });
}
var rl = (t, e) => {
  let s = `${t.domain} wants you to sign in with your Ethereum account:`,
    r = Gn(e);
  if (!t.aud && !t.uri)
    throw new Error(
      "Either `aud` or `uri` is required to construct the message"
    );
  let n = t.statement || void 0,
    i = `URI: ${t.aud || t.uri}`,
    o = `Version: ${t.version}`,
    a = `Chain ID: ${cb(e)}`,
    c = `Nonce: ${t.nonce}`,
    l = `Issued At: ${t.iat}`,
    u = t.exp ? `Expiration Time: ${t.exp}` : void 0,
    h = t.nbf ? `Not Before: ${t.nbf}` : void 0,
    d = t.requestId ? `Request ID: ${t.requestId}` : void 0,
    p = t.resources
      ? `Resources:${t.resources
          .map(
            (g) => `
- ${g}`
          )
          .join("")}`
      : void 0,
    m = Wn(t.resources);
  if (m) {
    let g = $n(m);
    n = gb(n, g);
  }
  return [s, r, "", n, "", i, o, a, c, l, u, h, d, p].filter((g) => g != null)
    .join(`
`);
};
function lb(t) {
  return Buffer.from(JSON.stringify(t)).toString("base64");
}
function ub(t) {
  return JSON.parse(Buffer.from(t, "base64").toString("utf-8"));
}
function xr(t) {
  if (!t) throw new Error("No recap provided, value is undefined");
  if (!t.att) throw new Error("No `att` property found");
  let e = Object.keys(t.att);
  if (!(e != null && e.length))
    throw new Error("No resources found in `att` property");
  e.forEach((s) => {
    let r = t.att[s];
    if (Array.isArray(r)) throw new Error(`Resource must be an object: ${s}`);
    if (typeof r != "object")
      throw new Error(`Resource must be an object: ${s}`);
    if (!Object.keys(r).length)
      throw new Error(`Resource object is empty: ${s}`);
    Object.keys(r).forEach((n) => {
      let i = r[n];
      if (!Array.isArray(i))
        throw new Error(
          `Ability limits ${n} must be an array of objects, found: ${i}`
        );
      if (!i.length)
        throw new Error(
          `Value of ${n} is empty array, must be an array with objects`
        );
      i.forEach((o) => {
        if (typeof o != "object")
          throw new Error(
            `Ability limits (${n}) must be an array of objects, found: ${o}`
          );
      });
    });
  });
}
function hb(t, e, s, r = {}) {
  return s?.sort((n, i) => n.localeCompare(i)), { att: { [t]: db(e, s, r) } };
}
function db(t, e, s = {}) {
  e = e?.sort((n, i) => n.localeCompare(i));
  let r = e.map((n) => ({ [`${t}/${n}`]: [s] }));
  return Object.assign({}, ...r);
}
function Hf(t) {
  return xr(t), `urn:recap:${lb(t).replace(/=/g, "")}`;
}
function $n(t) {
  let e = ub(t.replace("urn:recap:", ""));
  return xr(e), e;
}
function Kf(t, e, s) {
  let r = hb(t, e, s);
  return Hf(r);
}
function fb(t) {
  return t && t.includes("urn:recap:");
}
function Gf(t, e) {
  let s = $n(t),
    r = $n(e),
    n = pb(s, r);
  return Hf(n);
}
function pb(t, e) {
  xr(t), xr(e);
  let s = Object.keys(t.att)
      .concat(Object.keys(e.att))
      .sort((n, i) => n.localeCompare(i)),
    r = { att: {} };
  return (
    s.forEach((n) => {
      var i, o;
      Object.keys(((i = t.att) == null ? void 0 : i[n]) || {})
        .concat(Object.keys(((o = e.att) == null ? void 0 : o[n]) || {}))
        .sort((a, c) => a.localeCompare(c))
        .forEach((a) => {
          var c, l;
          r.att[n] = ob(ib({}, r.att[n]), {
            [a]:
              ((c = t.att[n]) == null ? void 0 : c[a]) ||
              ((l = e.att[n]) == null ? void 0 : l[a]),
          });
        });
    }),
    r
  );
}
function gb(t = "", e) {
  xr(e);
  let s =
    "I further authorize the stated URI to perform the following actions on my behalf: ";
  if (t.includes(s)) return t;
  let r = [],
    n = 0;
  Object.keys(e.att).forEach((a) => {
    let c = Object.keys(e.att[a]).map((h) => ({
      ability: h.split("/")[0],
      action: h.split("/")[1],
    }));
    c.sort((h, d) => h.action.localeCompare(d.action));
    let l = {};
    c.forEach((h) => {
      l[h.ability] || (l[h.ability] = []), l[h.ability].push(h.action);
    });
    let u = Object.keys(l).map(
      (h) => (n++, `(${n}) '${h}': '${l[h].join("', '")}' for '${a}'.`)
    );
    r.push(u.join(", ").replace(".,", "."));
  });
  let i = r.join(" "),
    o = `${s}${i}`;
  return `${t ? t + " " : ""}${o}`;
}
function nl(t) {
  var e;
  let s = $n(t);
  xr(s);
  let r = (e = s.att) == null ? void 0 : e.eip155;
  return r ? Object.keys(r).map((n) => n.split("/")[1]) : [];
}
function il(t) {
  let e = $n(t);
  xr(e);
  let s = [];
  return (
    Object.values(e.att).forEach((r) => {
      Object.values(r).forEach((n) => {
        var i;
        (i = n?.[0]) != null && i.chains && s.push(n[0].chains);
      });
    }),
    [...new Set(s.flat())]
  );
}
function Wn(t) {
  if (!t) return;
  let e = t?.[t.length - 1];
  return fb(e) ? e : void 0;
}
function Wf(t) {
  return (
    t instanceof Uint8Array ||
    (ArrayBuffer.isView(t) && t.constructor.name === "Uint8Array")
  );
}
function Rc(t) {
  if (typeof t != "boolean") throw new Error(`boolean expected, not ${t}`);
}
function gc(t) {
  if (!Number.isSafeInteger(t) || t < 0)
    throw new Error("positive integer expected, got " + t);
}
function ut(t, ...e) {
  if (!Wf(t)) throw new Error("Uint8Array expected");
  if (e.length > 0 && !e.includes(t.length))
    throw new Error(
      "Uint8Array expected of length " + e + ", got length=" + t.length
    );
}
function Hd(t, e = !0) {
  if (t.destroyed) throw new Error("Hash instance has been destroyed");
  if (e && t.finished) throw new Error("Hash#digest() has already been called");
}
function mb(t, e) {
  ut(t);
  let s = e.outputLen;
  if (t.length < s)
    throw new Error(
      "digestInto() expects output buffer of length at least " + s
    );
}
function Gs(t) {
  return new Uint32Array(t.buffer, t.byteOffset, Math.floor(t.byteLength / 4));
}
function Wr(...t) {
  for (let e = 0; e < t.length; e++) t[e].fill(0);
}
function yb(t) {
  return new DataView(t.buffer, t.byteOffset, t.byteLength);
}
var wb = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
function bb(t) {
  if (typeof t != "string") throw new Error("string expected");
  return new Uint8Array(new TextEncoder().encode(t));
}
function kc(t) {
  if (typeof t == "string") t = bb(t);
  else if (Wf(t)) t = Bc(t);
  else throw new Error("Uint8Array expected, got " + typeof t);
  return t;
}
function vb(t, e) {
  if (e == null || typeof e != "object")
    throw new Error("options must be defined");
  return Object.assign(t, e);
}
function Eb(t, e) {
  if (t.length !== e.length) return !1;
  let s = 0;
  for (let r = 0; r < t.length; r++) s |= t[r] ^ e[r];
  return s === 0;
}
var xb = (t, e) => {
  function s(r, ...n) {
    if ((ut(r), !wb))
      throw new Error("Non little-endian hardware is not yet supported");
    if (t.nonceLength !== void 0) {
      let l = n[0];
      if (!l) throw new Error("nonce / iv required");
      t.varSizeNonce ? ut(l) : ut(l, t.nonceLength);
    }
    let i = t.tagLength;
    i && n[1] !== void 0 && ut(n[1]);
    let o = e(r, ...n),
      a = (l, u) => {
        if (u !== void 0) {
          if (l !== 2) throw new Error("cipher output not supported");
          ut(u);
        }
      },
      c = !1;
    return {
      encrypt(l, u) {
        if (c) throw new Error("cannot encrypt() twice with same key + nonce");
        return (c = !0), ut(l), a(o.encrypt.length, u), o.encrypt(l, u);
      },
      decrypt(l, u) {
        if ((ut(l), i && l.length < i))
          throw new Error(
            "invalid ciphertext length: smaller than tagLength=" + i
          );
        return a(o.decrypt.length, u), o.decrypt(l, u);
      },
    };
  }
  return Object.assign(s, t), s;
};
function Kd(t, e, s = !0) {
  if (e === void 0) return new Uint8Array(t);
  if (e.length !== t)
    throw new Error(
      "invalid output length, expected " + t + ", got: " + e.length
    );
  if (s && !Ib(e)) throw new Error("invalid output, must be aligned");
  return e;
}
function Gd(t, e, s, r) {
  if (typeof t.setBigUint64 == "function") return t.setBigUint64(e, s, r);
  let n = BigInt(32),
    i = BigInt(4294967295),
    o = Number((s >> n) & i),
    a = Number(s & i),
    c = r ? 4 : 0,
    l = r ? 0 : 4;
  t.setUint32(e + c, o, r), t.setUint32(e + l, a, r);
}
function Sb(t, e, s) {
  Rc(s);
  let r = new Uint8Array(16),
    n = yb(r);
  return Gd(n, 0, BigInt(e), s), Gd(n, 8, BigInt(t), s), r;
}
function Ib(t) {
  return t.byteOffset % 4 === 0;
}
function Bc(t) {
  return Uint8Array.from(t);
}
var Yf = (t) => Uint8Array.from(t.split("").map((e) => e.charCodeAt(0))),
  _b = Yf("expand 16-byte k"),
  Tb = Yf("expand 32-byte k"),
  Ab = Gs(_b),
  Cb = Gs(Tb);
function ie(t, e) {
  return (t << e) | (t >>> (32 - e));
}
function Uc(t) {
  return t.byteOffset % 4 === 0;
}
var fo = 64,
  Pb = 16,
  Xf = 2 ** 32 - 1,
  Wd = new Uint32Array();
function Ob(t, e, s, r, n, i, o, a) {
  let c = n.length,
    l = new Uint8Array(fo),
    u = Gs(l),
    h = Uc(n) && Uc(i),
    d = h ? Gs(n) : Wd,
    p = h ? Gs(i) : Wd;
  for (let m = 0; m < c; o++) {
    if ((t(e, s, r, u, o, a), o >= Xf))
      throw new Error("arx: counter overflow");
    let g = Math.min(fo, c - m);
    if (h && g === fo) {
      let w = m / 4;
      if (m % 4 !== 0) throw new Error("arx: invalid block position");
      for (let R = 0, B; R < Pb; R++) (B = w + R), (p[B] = d[B] ^ u[R]);
      m += fo;
      continue;
    }
    for (let w = 0, R; w < g; w++) (R = m + w), (i[R] = n[R] ^ l[w]);
    m += g;
  }
}
function Nb(t, e) {
  let {
    allowShortKeys: s,
    extendNonceFn: r,
    counterLength: n,
    counterRight: i,
    rounds: o,
  } = vb(
    { allowShortKeys: !1, counterLength: 8, counterRight: !1, rounds: 20 },
    e
  );
  if (typeof t != "function") throw new Error("core must be a function");
  return (
    gc(n),
    gc(o),
    Rc(i),
    Rc(s),
    (a, c, l, u, h = 0) => {
      ut(a), ut(c), ut(l);
      let d = l.length;
      if (
        (u === void 0 && (u = new Uint8Array(d)),
        ut(u),
        gc(h),
        h < 0 || h >= Xf)
      )
        throw new Error("arx: counter overflow");
      if (u.length < d)
        throw new Error(
          `arx: output (${u.length}) is shorter than data (${d})`
        );
      let p = [],
        m = a.length,
        g,
        w;
      if (m === 32) p.push((g = Bc(a))), (w = Cb);
      else if (m === 16 && s)
        (g = new Uint8Array(32)), g.set(a), g.set(a, 16), (w = Ab), p.push(g);
      else throw new Error(`arx: invalid 32-byte key, got length=${m}`);
      Uc(c) || p.push((c = Bc(c)));
      let R = Gs(g);
      if (r) {
        if (c.length !== 24)
          throw new Error("arx: extended nonce must be 24 bytes");
        r(w, R, Gs(c.subarray(0, 16)), R), (c = c.subarray(16));
      }
      let B = 16 - n;
      if (B !== c.length)
        throw new Error(`arx: nonce must be ${B} or 16 bytes`);
      if (B !== 12) {
        let S = new Uint8Array(12);
        S.set(c, i ? 0 : 12 - c.length), (c = S), p.push(c);
      }
      let T = Gs(c);
      return Ob(t, w, R, T, l, u, h, o), Wr(...p), u;
    }
  );
}
var Be = (t, e) => (t[e++] & 255) | ((t[e++] & 255) << 8),
  Lc = class {
    constructor(e) {
      (this.blockLen = 16),
        (this.outputLen = 16),
        (this.buffer = new Uint8Array(16)),
        (this.r = new Uint16Array(10)),
        (this.h = new Uint16Array(10)),
        (this.pad = new Uint16Array(8)),
        (this.pos = 0),
        (this.finished = !1),
        (e = kc(e)),
        ut(e, 32);
      let s = Be(e, 0),
        r = Be(e, 2),
        n = Be(e, 4),
        i = Be(e, 6),
        o = Be(e, 8),
        a = Be(e, 10),
        c = Be(e, 12),
        l = Be(e, 14);
      (this.r[0] = s & 8191),
        (this.r[1] = ((s >>> 13) | (r << 3)) & 8191),
        (this.r[2] = ((r >>> 10) | (n << 6)) & 7939),
        (this.r[3] = ((n >>> 7) | (i << 9)) & 8191),
        (this.r[4] = ((i >>> 4) | (o << 12)) & 255),
        (this.r[5] = (o >>> 1) & 8190),
        (this.r[6] = ((o >>> 14) | (a << 2)) & 8191),
        (this.r[7] = ((a >>> 11) | (c << 5)) & 8065),
        (this.r[8] = ((c >>> 8) | (l << 8)) & 8191),
        (this.r[9] = (l >>> 5) & 127);
      for (let u = 0; u < 8; u++) this.pad[u] = Be(e, 16 + 2 * u);
    }
    process(e, s, r = !1) {
      let n = r ? 0 : 2048,
        { h: i, r: o } = this,
        a = o[0],
        c = o[1],
        l = o[2],
        u = o[3],
        h = o[4],
        d = o[5],
        p = o[6],
        m = o[7],
        g = o[8],
        w = o[9],
        R = Be(e, s + 0),
        B = Be(e, s + 2),
        T = Be(e, s + 4),
        S = Be(e, s + 6),
        A = Be(e, s + 8),
        O = Be(e, s + 10),
        U = Be(e, s + 12),
        q = Be(e, s + 14),
        N = i[0] + (R & 8191),
        $ = i[1] + (((R >>> 13) | (B << 3)) & 8191),
        j = i[2] + (((B >>> 10) | (T << 6)) & 8191),
        P = i[3] + (((T >>> 7) | (S << 9)) & 8191),
        v = i[4] + (((S >>> 4) | (A << 12)) & 8191),
        I = i[5] + ((A >>> 1) & 8191),
        y = i[6] + (((A >>> 14) | (O << 2)) & 8191),
        b = i[7] + (((O >>> 11) | (U << 5)) & 8191),
        _ = i[8] + (((U >>> 8) | (q << 8)) & 8191),
        k = i[9] + ((q >>> 5) | n),
        x = 0,
        C = x + N * a + $ * (5 * w) + j * (5 * g) + P * (5 * m) + v * (5 * p);
      (x = C >>> 13),
        (C &= 8191),
        (C +=
          I * (5 * d) + y * (5 * h) + b * (5 * u) + _ * (5 * l) + k * (5 * c)),
        (x += C >>> 13),
        (C &= 8191);
      let D = x + N * c + $ * a + j * (5 * w) + P * (5 * g) + v * (5 * m);
      (x = D >>> 13),
        (D &= 8191),
        (D +=
          I * (5 * p) + y * (5 * d) + b * (5 * h) + _ * (5 * u) + k * (5 * l)),
        (x += D >>> 13),
        (D &= 8191);
      let M = x + N * l + $ * c + j * a + P * (5 * w) + v * (5 * g);
      (x = M >>> 13),
        (M &= 8191),
        (M +=
          I * (5 * m) + y * (5 * p) + b * (5 * d) + _ * (5 * h) + k * (5 * u)),
        (x += M >>> 13),
        (M &= 8191);
      let J = x + N * u + $ * l + j * c + P * a + v * (5 * w);
      (x = J >>> 13),
        (J &= 8191),
        (J +=
          I * (5 * g) + y * (5 * m) + b * (5 * p) + _ * (5 * d) + k * (5 * h)),
        (x += J >>> 13),
        (J &= 8191);
      let G = x + N * h + $ * u + j * l + P * c + v * a;
      (x = G >>> 13),
        (G &= 8191),
        (G +=
          I * (5 * w) + y * (5 * g) + b * (5 * m) + _ * (5 * p) + k * (5 * d)),
        (x += G >>> 13),
        (G &= 8191);
      let H = x + N * d + $ * h + j * u + P * l + v * c;
      (x = H >>> 13),
        (H &= 8191),
        (H += I * a + y * (5 * w) + b * (5 * g) + _ * (5 * m) + k * (5 * p)),
        (x += H >>> 13),
        (H &= 8191);
      let ee = x + N * p + $ * d + j * h + P * u + v * l;
      (x = ee >>> 13),
        (ee &= 8191),
        (ee += I * c + y * a + b * (5 * w) + _ * (5 * g) + k * (5 * m)),
        (x += ee >>> 13),
        (ee &= 8191);
      let Z = x + N * m + $ * p + j * d + P * h + v * u;
      (x = Z >>> 13),
        (Z &= 8191),
        (Z += I * l + y * c + b * a + _ * (5 * w) + k * (5 * g)),
        (x += Z >>> 13),
        (Z &= 8191);
      let le = x + N * g + $ * m + j * p + P * d + v * h;
      (x = le >>> 13),
        (le &= 8191),
        (le += I * u + y * l + b * c + _ * a + k * (5 * w)),
        (x += le >>> 13),
        (le &= 8191);
      let Q = x + N * w + $ * g + j * m + P * p + v * d;
      (x = Q >>> 13),
        (Q &= 8191),
        (Q += I * h + y * u + b * l + _ * c + k * a),
        (x += Q >>> 13),
        (Q &= 8191),
        (x = ((x << 2) + x) | 0),
        (x = (x + C) | 0),
        (C = x & 8191),
        (x = x >>> 13),
        (D += x),
        (i[0] = C),
        (i[1] = D),
        (i[2] = M),
        (i[3] = J),
        (i[4] = G),
        (i[5] = H),
        (i[6] = ee),
        (i[7] = Z),
        (i[8] = le),
        (i[9] = Q);
    }
    finalize() {
      let { h: e, pad: s } = this,
        r = new Uint16Array(10),
        n = e[1] >>> 13;
      e[1] &= 8191;
      for (let a = 2; a < 10; a++)
        (e[a] += n), (n = e[a] >>> 13), (e[a] &= 8191);
      (e[0] += n * 5),
        (n = e[0] >>> 13),
        (e[0] &= 8191),
        (e[1] += n),
        (n = e[1] >>> 13),
        (e[1] &= 8191),
        (e[2] += n),
        (r[0] = e[0] + 5),
        (n = r[0] >>> 13),
        (r[0] &= 8191);
      for (let a = 1; a < 10; a++)
        (r[a] = e[a] + n), (n = r[a] >>> 13), (r[a] &= 8191);
      r[9] -= 8192;
      let i = (n ^ 1) - 1;
      for (let a = 0; a < 10; a++) r[a] &= i;
      i = ~i;
      for (let a = 0; a < 10; a++) e[a] = (e[a] & i) | r[a];
      (e[0] = (e[0] | (e[1] << 13)) & 65535),
        (e[1] = ((e[1] >>> 3) | (e[2] << 10)) & 65535),
        (e[2] = ((e[2] >>> 6) | (e[3] << 7)) & 65535),
        (e[3] = ((e[3] >>> 9) | (e[4] << 4)) & 65535),
        (e[4] = ((e[4] >>> 12) | (e[5] << 1) | (e[6] << 14)) & 65535),
        (e[5] = ((e[6] >>> 2) | (e[7] << 11)) & 65535),
        (e[6] = ((e[7] >>> 5) | (e[8] << 8)) & 65535),
        (e[7] = ((e[8] >>> 8) | (e[9] << 5)) & 65535);
      let o = e[0] + s[0];
      e[0] = o & 65535;
      for (let a = 1; a < 8; a++)
        (o = (((e[a] + s[a]) | 0) + (o >>> 16)) | 0), (e[a] = o & 65535);
      Wr(r);
    }
    update(e) {
      Hd(this), (e = kc(e)), ut(e);
      let { buffer: s, blockLen: r } = this,
        n = e.length;
      for (let i = 0; i < n; ) {
        let o = Math.min(r - this.pos, n - i);
        if (o === r) {
          for (; r <= n - i; i += r) this.process(e, i);
          continue;
        }
        s.set(e.subarray(i, i + o), this.pos),
          (this.pos += o),
          (i += o),
          this.pos === r && (this.process(s, 0, !1), (this.pos = 0));
      }
      return this;
    }
    destroy() {
      Wr(this.h, this.r, this.buffer, this.pad);
    }
    digestInto(e) {
      Hd(this), mb(e, this), (this.finished = !0);
      let { buffer: s, h: r } = this,
        { pos: n } = this;
      if (n) {
        for (s[n++] = 1; n < 16; n++) s[n] = 0;
        this.process(s, 0, !0);
      }
      this.finalize();
      let i = 0;
      for (let o = 0; o < 8; o++) (e[i++] = r[o] >>> 0), (e[i++] = r[o] >>> 8);
      return e;
    }
    digest() {
      let { buffer: e, outputLen: s } = this;
      this.digestInto(e);
      let r = e.slice(0, s);
      return this.destroy(), r;
    }
  };
function Rb(t) {
  let e = (r, n) => t(n).update(kc(r)).digest(),
    s = t(new Uint8Array(32));
  return (
    (e.outputLen = s.outputLen),
    (e.blockLen = s.blockLen),
    (e.create = (r) => t(r)),
    e
  );
}
var kb = Rb((t) => new Lc(t));
function Bb(t, e, s, r, n, i = 20) {
  let o = t[0],
    a = t[1],
    c = t[2],
    l = t[3],
    u = e[0],
    h = e[1],
    d = e[2],
    p = e[3],
    m = e[4],
    g = e[5],
    w = e[6],
    R = e[7],
    B = n,
    T = s[0],
    S = s[1],
    A = s[2],
    O = o,
    U = a,
    q = c,
    N = l,
    $ = u,
    j = h,
    P = d,
    v = p,
    I = m,
    y = g,
    b = w,
    _ = R,
    k = B,
    x = T,
    C = S,
    D = A;
  for (let J = 0; J < i; J += 2)
    (O = (O + $) | 0),
      (k = ie(k ^ O, 16)),
      (I = (I + k) | 0),
      ($ = ie($ ^ I, 12)),
      (O = (O + $) | 0),
      (k = ie(k ^ O, 8)),
      (I = (I + k) | 0),
      ($ = ie($ ^ I, 7)),
      (U = (U + j) | 0),
      (x = ie(x ^ U, 16)),
      (y = (y + x) | 0),
      (j = ie(j ^ y, 12)),
      (U = (U + j) | 0),
      (x = ie(x ^ U, 8)),
      (y = (y + x) | 0),
      (j = ie(j ^ y, 7)),
      (q = (q + P) | 0),
      (C = ie(C ^ q, 16)),
      (b = (b + C) | 0),
      (P = ie(P ^ b, 12)),
      (q = (q + P) | 0),
      (C = ie(C ^ q, 8)),
      (b = (b + C) | 0),
      (P = ie(P ^ b, 7)),
      (N = (N + v) | 0),
      (D = ie(D ^ N, 16)),
      (_ = (_ + D) | 0),
      (v = ie(v ^ _, 12)),
      (N = (N + v) | 0),
      (D = ie(D ^ N, 8)),
      (_ = (_ + D) | 0),
      (v = ie(v ^ _, 7)),
      (O = (O + j) | 0),
      (D = ie(D ^ O, 16)),
      (b = (b + D) | 0),
      (j = ie(j ^ b, 12)),
      (O = (O + j) | 0),
      (D = ie(D ^ O, 8)),
      (b = (b + D) | 0),
      (j = ie(j ^ b, 7)),
      (U = (U + P) | 0),
      (k = ie(k ^ U, 16)),
      (_ = (_ + k) | 0),
      (P = ie(P ^ _, 12)),
      (U = (U + P) | 0),
      (k = ie(k ^ U, 8)),
      (_ = (_ + k) | 0),
      (P = ie(P ^ _, 7)),
      (q = (q + v) | 0),
      (x = ie(x ^ q, 16)),
      (I = (I + x) | 0),
      (v = ie(v ^ I, 12)),
      (q = (q + v) | 0),
      (x = ie(x ^ q, 8)),
      (I = (I + x) | 0),
      (v = ie(v ^ I, 7)),
      (N = (N + $) | 0),
      (C = ie(C ^ N, 16)),
      (y = (y + C) | 0),
      ($ = ie($ ^ y, 12)),
      (N = (N + $) | 0),
      (C = ie(C ^ N, 8)),
      (y = (y + C) | 0),
      ($ = ie($ ^ y, 7));
  let M = 0;
  (r[M++] = (o + O) | 0),
    (r[M++] = (a + U) | 0),
    (r[M++] = (c + q) | 0),
    (r[M++] = (l + N) | 0),
    (r[M++] = (u + $) | 0),
    (r[M++] = (h + j) | 0),
    (r[M++] = (d + P) | 0),
    (r[M++] = (p + v) | 0),
    (r[M++] = (m + I) | 0),
    (r[M++] = (g + y) | 0),
    (r[M++] = (w + b) | 0),
    (r[M++] = (R + _) | 0),
    (r[M++] = (B + k) | 0),
    (r[M++] = (T + x) | 0),
    (r[M++] = (S + C) | 0),
    (r[M++] = (A + D) | 0);
}
var Ub = Nb(Bb, { counterRight: !1, counterLength: 4, allowShortKeys: !1 }),
  Lb = new Uint8Array(16),
  Yd = (t, e) => {
    t.update(e);
    let s = e.length % 16;
    s && t.update(Lb.subarray(s));
  },
  Db = new Uint8Array(32);
function Xd(t, e, s, r, n) {
  let i = t(e, s, Db),
    o = kb.create(i);
  n && Yd(o, n), Yd(o, r);
  let a = Sb(r.length, n ? n.length : 0, !0);
  o.update(a);
  let c = o.digest();
  return Wr(i, a), c;
}
var qb = (t) => (e, s, r) => ({
    encrypt(n, i) {
      let o = n.length;
      (i = Kd(o + 16, i, !1)), i.set(n);
      let a = i.subarray(0, -16);
      t(e, s, a, a, 1);
      let c = Xd(t, e, s, a, r);
      return i.set(c, o), Wr(c), i;
    },
    decrypt(n, i) {
      i = Kd(n.length - 16, i, !1);
      let o = n.subarray(0, -16),
        a = n.subarray(-16),
        c = Xd(t, e, s, o, r);
      if (!Eb(a, c)) throw new Error("invalid tag");
      return i.set(n.subarray(0, -16)), t(e, s, i, i, 1), Wr(c), i;
    },
  }),
  Zf = xb({ blockSize: 64, nonceLength: 12, tagLength: 16 }, qb(Ub)),
  vo = class extends Gr {
    constructor(e, s) {
      super(), (this.finished = !1), (this.destroyed = !1), Po(e);
      let r = Ht(s);
      if (((this.iHash = e.create()), typeof this.iHash.update != "function"))
        throw new Error("Expected instance of class which extends utils.Hash");
      (this.blockLen = this.iHash.blockLen),
        (this.outputLen = this.iHash.outputLen);
      let n = this.blockLen,
        i = new Uint8Array(n);
      i.set(r.length > n ? e.create().update(r).digest() : r);
      for (let o = 0; o < i.length; o++) i[o] ^= 54;
      this.iHash.update(i), (this.oHash = e.create());
      for (let o = 0; o < i.length; o++) i[o] ^= 106;
      this.oHash.update(i), Nt(i);
    }
    update(e) {
      return Ws(this), this.iHash.update(e), this;
    }
    digestInto(e) {
      Ws(this),
        Gt(e, this.outputLen),
        (this.finished = !0),
        this.iHash.digestInto(e),
        this.oHash.update(e),
        this.oHash.digestInto(e),
        this.destroy();
    }
    digest() {
      let e = new Uint8Array(this.oHash.outputLen);
      return this.digestInto(e), e;
    }
    _cloneInto(e) {
      e || (e = Object.create(Object.getPrototypeOf(this), {}));
      let {
        oHash: s,
        iHash: r,
        finished: n,
        destroyed: i,
        blockLen: o,
        outputLen: a,
      } = this;
      return (
        (e = e),
        (e.finished = n),
        (e.destroyed = i),
        (e.blockLen = o),
        (e.outputLen = a),
        (e.oHash = s._cloneInto(e.oHash)),
        (e.iHash = r._cloneInto(e.iHash)),
        e
      );
    }
    clone() {
      return this._cloneInto();
    }
    destroy() {
      (this.destroyed = !0), this.oHash.destroy(), this.iHash.destroy();
    }
  },
  Ro = (t, e, s) => new vo(t, e).update(s).digest();
Ro.create = (t, e) => new vo(t, e);
function jb(t, e, s) {
  return (
    Po(t),
    s === void 0 && (s = new Uint8Array(t.outputLen)),
    Ro(t, Ht(s), Ht(e))
  );
}
var mc = Uint8Array.from([0]),
  Zd = Uint8Array.of();
function Mb(t, e, s, r = 32) {
  Po(t), Is(r);
  let n = t.outputLen;
  if (r > 255 * n) throw new Error("Length should be <= 255*HashLen");
  let i = Math.ceil(r / n);
  s === void 0 && (s = Zd);
  let o = new Uint8Array(i * n),
    a = Ro.create(t, e),
    c = a._cloneInto(),
    l = new Uint8Array(a.outputLen);
  for (let u = 0; u < i; u++)
    (mc[0] = u + 1),
      c
        .update(u === 0 ? Zd : l)
        .update(s)
        .update(mc)
        .digestInto(l),
      o.set(l, n * u),
      a._cloneInto(c);
  return a.destroy(), c.destroy(), Nt(l, mc), o.slice(0, r);
}
var Fb = (t, e, s, r, n) => Mb(t, jb(t, e, s), r, n),
  ko = Oo,
  ol = BigInt(0),
  Dc = BigInt(1);
function Eo(t, e = "") {
  if (typeof t != "boolean") {
    let s = e && `"${e}"`;
    throw new Error(s + "expected boolean, got type=" + typeof t);
  }
  return t;
}
function br(t, e, s = "") {
  let r = Co(t),
    n = t?.length,
    i = e !== void 0;
  if (!r || (i && n !== e)) {
    let o = s && `"${s}" `,
      a = i ? ` of length ${e}` : "",
      c = r ? `length=${n}` : `type=${typeof t}`;
    throw new Error(o + "expected Uint8Array" + a + ", got " + c);
  }
  return t;
}
function po(t) {
  let e = t.toString(16);
  return e.length & 1 ? "0" + e : e;
}
function Jf(t) {
  if (typeof t != "string")
    throw new Error("hex string expected, got " + typeof t);
  return t === "" ? ol : BigInt("0x" + t);
}
function Bo(t) {
  return Jf(Hr(t));
}
function xo(t) {
  return Gt(t), Jf(Hr(Uint8Array.from(t).reverse()));
}
function al(t, e) {
  return wo(t.toString(16).padStart(e * 2, "0"));
}
function cl(t, e) {
  return al(t, e).reverse();
}
function Ve(t, e, s) {
  let r;
  if (typeof e == "string")
    try {
      r = wo(e);
    } catch (i) {
      throw new Error(t + " must be hex string or Uint8Array, cause: " + i);
    }
  else if (Co(e)) r = Uint8Array.from(e);
  else throw new Error(t + " must be hex string or Uint8Array");
  let n = r.length;
  if (typeof s == "number" && n !== s)
    throw new Error(t + " of length " + s + " expected, got " + n);
  return r;
}
var yc = (t) => typeof t == "bigint" && ol <= t;
function $b(t, e, s) {
  return yc(t) && yc(e) && yc(s) && e <= t && t < s;
}
function qc(t, e, s, r) {
  if (!$b(e, s, r))
    throw new Error(
      "expected valid " + t + ": " + s + " <= n < " + r + ", got " + e
    );
}
function Qf(t) {
  let e;
  for (e = 0; t > ol; t >>= Dc, e += 1);
  return e;
}
var Yn = (t) => (Dc << BigInt(t)) - Dc;
function zb(t, e, s) {
  if (typeof t != "number" || t < 2)
    throw new Error("hashLen must be a number");
  if (typeof e != "number" || e < 2)
    throw new Error("qByteLen must be a number");
  if (typeof s != "function") throw new Error("hmacFn must be a function");
  let r = (d) => new Uint8Array(d),
    n = (d) => Uint8Array.of(d),
    i = r(t),
    o = r(t),
    a = 0,
    c = () => {
      i.fill(1), o.fill(0), (a = 0);
    },
    l = (...d) => s(o, i, ...d),
    u = (d = r(0)) => {
      (o = l(n(0), d)),
        (i = l()),
        d.length !== 0 && ((o = l(n(1), d)), (i = l()));
    },
    h = () => {
      if (a++ >= 1e3) throw new Error("drbg: tried 1000 values");
      let d = 0,
        p = [];
      for (; d < e; ) {
        i = l();
        let m = i.slice();
        p.push(m), (d += i.length);
      }
      return Ks(...p);
    };
  return (d, p) => {
    c(), u(d);
    let m;
    for (; !(m = p(h())); ) u();
    return c(), m;
  };
}
function Uo(t, e, s = {}) {
  if (!t || typeof t != "object")
    throw new Error("expected valid options object");
  function r(n, i, o) {
    let a = t[n];
    if (o && a === void 0) return;
    let c = typeof a;
    if (c !== i || a === null)
      throw new Error(`param "${n}" is invalid: expected ${i}, got ${c}`);
  }
  Object.entries(e).forEach(([n, i]) => r(n, i, !1)),
    Object.entries(s).forEach(([n, i]) => r(n, i, !0));
}
function Jd(t) {
  let e = new WeakMap();
  return (s, ...r) => {
    let n = e.get(s);
    if (n !== void 0) return n;
    let i = t(s, ...r);
    return e.set(s, i), i;
  };
}
var dt = BigInt(0),
  tt = BigInt(1),
  vr = BigInt(2),
  ep = BigInt(3),
  tp = BigInt(4),
  sp = BigInt(5),
  Vb = BigInt(7),
  rp = BigInt(8),
  Hb = BigInt(9),
  np = BigInt(16);
function xt(t, e) {
  let s = t % e;
  return s >= dt ? s : e + s;
}
function $t(t, e, s) {
  let r = t;
  for (; e-- > dt; ) (r *= r), (r %= s);
  return r;
}
function Qd(t, e) {
  if (t === dt) throw new Error("invert: expected non-zero number");
  if (e <= dt) throw new Error("invert: expected positive modulus, got " + e);
  let s = xt(t, e),
    r = e,
    n = dt,
    i = tt;
  for (; s !== dt; ) {
    let o = r / s,
      a = r % s,
      c = n - i * o;
    (r = s), (s = a), (n = i), (i = c);
  }
  if (r !== tt) throw new Error("invert: does not exist");
  return xt(n, e);
}
function ll(t, e, s) {
  if (!t.eql(t.sqr(e), s)) throw new Error("Cannot find square root");
}
function ip(t, e) {
  let s = (t.ORDER + tt) / tp,
    r = t.pow(e, s);
  return ll(t, r, e), r;
}
function Kb(t, e) {
  let s = (t.ORDER - sp) / rp,
    r = t.mul(e, vr),
    n = t.pow(r, s),
    i = t.mul(e, n),
    o = t.mul(t.mul(i, vr), n),
    a = t.mul(i, t.sub(o, t.ONE));
  return ll(t, a, e), a;
}
function Gb(t) {
  let e = Zs(t),
    s = op(t),
    r = s(e, e.neg(e.ONE)),
    n = s(e, r),
    i = s(e, e.neg(r)),
    o = (t + Vb) / np;
  return (a, c) => {
    let l = a.pow(c, o),
      u = a.mul(l, r),
      h = a.mul(l, n),
      d = a.mul(l, i),
      p = a.eql(a.sqr(u), c),
      m = a.eql(a.sqr(h), c);
    (l = a.cmov(l, u, p)), (u = a.cmov(d, h, m));
    let g = a.eql(a.sqr(u), c),
      w = a.cmov(l, u, g);
    return ll(a, w, c), w;
  };
}
function op(t) {
  if (t < ep) throw new Error("sqrt is not defined for small field");
  let e = t - tt,
    s = 0;
  for (; e % vr === dt; ) (e /= vr), s++;
  let r = vr,
    n = Zs(t);
  for (; ef(n, r) === 1; )
    if (r++ > 1e3)
      throw new Error("Cannot find square root: probably non-prime P");
  if (s === 1) return ip;
  let i = n.pow(r, e),
    o = (e + tt) / vr;
  return function (a, c) {
    if (a.is0(c)) return c;
    if (ef(a, c) !== 1) throw new Error("Cannot find square root");
    let l = s,
      u = a.mul(a.ONE, i),
      h = a.pow(c, e),
      d = a.pow(c, o);
    for (; !a.eql(h, a.ONE); ) {
      if (a.is0(h)) return a.ZERO;
      let p = 1,
        m = a.sqr(h);
      for (; !a.eql(m, a.ONE); )
        if ((p++, (m = a.sqr(m)), p === l))
          throw new Error("Cannot find square root");
      let g = tt << BigInt(l - p - 1),
        w = a.pow(u, g);
      (l = p), (u = a.sqr(w)), (h = a.mul(h, u)), (d = a.mul(d, w));
    }
    return d;
  };
}
function Wb(t) {
  return t % tp === ep
    ? ip
    : t % rp === sp
    ? Kb
    : t % np === Hb
    ? Gb(t)
    : op(t);
}
var Yb = [
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
function Xb(t) {
  let e = { ORDER: "bigint", MASK: "bigint", BYTES: "number", BITS: "number" },
    s = Yb.reduce((r, n) => ((r[n] = "function"), r), e);
  return Uo(t, s), t;
}
function Zb(t, e, s) {
  if (s < dt) throw new Error("invalid exponent, negatives unsupported");
  if (s === dt) return t.ONE;
  if (s === tt) return e;
  let r = t.ONE,
    n = e;
  for (; s > dt; ) s & tt && (r = t.mul(r, n)), (n = t.sqr(n)), (s >>= tt);
  return r;
}
function ap(t, e, s = !1) {
  let r = new Array(e.length).fill(s ? t.ZERO : void 0),
    n = e.reduce(
      (o, a, c) => (t.is0(a) ? o : ((r[c] = o), t.mul(o, a))),
      t.ONE
    ),
    i = t.inv(n);
  return (
    e.reduceRight(
      (o, a, c) => (t.is0(a) ? o : ((r[c] = t.mul(o, r[c])), t.mul(o, a))),
      i
    ),
    r
  );
}
function ef(t, e) {
  let s = (t.ORDER - tt) / vr,
    r = t.pow(e, s),
    n = t.eql(r, t.ONE),
    i = t.eql(r, t.ZERO),
    o = t.eql(r, t.neg(t.ONE));
  if (!n && !i && !o) throw new Error("invalid Legendre symbol result");
  return n ? 1 : i ? 0 : -1;
}
function cp(t, e) {
  e !== void 0 && Is(e);
  let s = e !== void 0 ? e : t.toString(2).length,
    r = Math.ceil(s / 8);
  return { nBitLength: s, nByteLength: r };
}
function Zs(t, e, s = !1, r = {}) {
  if (t <= dt) throw new Error("invalid field: expected ORDER > 0, got " + t);
  let n,
    i,
    o = !1,
    a;
  if (typeof e == "object" && e != null) {
    if (r.sqrt || s) throw new Error("cannot specify opts in two arguments");
    let d = e;
    d.BITS && (n = d.BITS),
      d.sqrt && (i = d.sqrt),
      typeof d.isLE == "boolean" && (s = d.isLE),
      typeof d.modFromBytes == "boolean" && (o = d.modFromBytes),
      (a = d.allowedLengths);
  } else typeof e == "number" && (n = e), r.sqrt && (i = r.sqrt);
  let { nBitLength: c, nByteLength: l } = cp(t, n);
  if (l > 2048)
    throw new Error("invalid field: expected ORDER of <= 2048 bytes");
  let u,
    h = Object.freeze({
      ORDER: t,
      isLE: s,
      BITS: c,
      BYTES: l,
      MASK: Yn(c),
      ZERO: dt,
      ONE: tt,
      allowedLengths: a,
      create: (d) => xt(d, t),
      isValid: (d) => {
        if (typeof d != "bigint")
          throw new Error(
            "invalid field element: expected bigint, got " + typeof d
          );
        return dt <= d && d < t;
      },
      is0: (d) => d === dt,
      isValidNot0: (d) => !h.is0(d) && h.isValid(d),
      isOdd: (d) => (d & tt) === tt,
      neg: (d) => xt(-d, t),
      eql: (d, p) => d === p,
      sqr: (d) => xt(d * d, t),
      add: (d, p) => xt(d + p, t),
      sub: (d, p) => xt(d - p, t),
      mul: (d, p) => xt(d * p, t),
      pow: (d, p) => Zb(h, d, p),
      div: (d, p) => xt(d * Qd(p, t), t),
      sqrN: (d) => d * d,
      addN: (d, p) => d + p,
      subN: (d, p) => d - p,
      mulN: (d, p) => d * p,
      inv: (d) => Qd(d, t),
      sqrt: i || ((d) => (u || (u = Wb(t)), u(h, d))),
      toBytes: (d) => (s ? cl(d, l) : al(d, l)),
      fromBytes: (d, p = !0) => {
        if (a) {
          if (!a.includes(d.length) || d.length > l)
            throw new Error(
              "Field.fromBytes: expected " + a + " bytes, got " + d.length
            );
          let g = new Uint8Array(l);
          g.set(d, s ? 0 : g.length - d.length), (d = g);
        }
        if (d.length !== l)
          throw new Error(
            "Field.fromBytes: expected " + l + " bytes, got " + d.length
          );
        let m = s ? xo(d) : Bo(d);
        if ((o && (m = xt(m, t)), !p && !h.isValid(m)))
          throw new Error("invalid field element: outside of range 0..ORDER");
        return m;
      },
      invertBatch: (d) => ap(h, d),
      cmov: (d, p, m) => (m ? p : d),
    });
  return Object.freeze(h);
}
function lp(t) {
  if (typeof t != "bigint") throw new Error("field order must be bigint");
  let e = t.toString(2).length;
  return Math.ceil(e / 8);
}
function up(t) {
  let e = lp(t);
  return e + Math.ceil(e / 2);
}
function Jb(t, e, s = !1) {
  let r = t.length,
    n = lp(e),
    i = up(e);
  if (r < 16 || r < i || r > 1024)
    throw new Error("expected " + i + "-1024 bytes of input, got " + r);
  let o = s ? xo(t) : Bo(t),
    a = xt(o, e - tt) + tt;
  return s ? cl(a, n) : al(a, n);
}
var Yr = BigInt(0),
  Er = BigInt(1);
function So(t, e) {
  let s = e.negate();
  return t ? s : e;
}
function wc(t, e) {
  let s = ap(
    t.Fp,
    e.map((r) => r.Z)
  );
  return e.map((r, n) => t.fromAffine(r.toAffine(s[n])));
}
function hp(t, e) {
  if (!Number.isSafeInteger(t) || t <= 0 || t > e)
    throw new Error("invalid window size, expected [1.." + e + "], got W=" + t);
}
function bc(t, e) {
  hp(t, e);
  let s = Math.ceil(e / t) + 1,
    r = 2 ** (t - 1),
    n = 2 ** t,
    i = Yn(t),
    o = BigInt(t);
  return { windows: s, windowSize: r, mask: i, maxNumber: n, shiftBy: o };
}
function tf(t, e, s) {
  let { windowSize: r, mask: n, maxNumber: i, shiftBy: o } = s,
    a = Number(t & n),
    c = t >> o;
  a > r && ((a -= i), (c += Er));
  let l = e * r,
    u = l + Math.abs(a) - 1,
    h = a === 0,
    d = a < 0,
    p = e % 2 !== 0;
  return { nextN: c, offset: u, isZero: h, isNeg: d, isNegF: p, offsetF: l };
}
function Qb(t, e) {
  if (!Array.isArray(t)) throw new Error("array expected");
  t.forEach((s, r) => {
    if (!(s instanceof e)) throw new Error("invalid point at index " + r);
  });
}
function ev(t, e) {
  if (!Array.isArray(t)) throw new Error("array of scalars expected");
  t.forEach((s, r) => {
    if (!e.isValid(s)) throw new Error("invalid scalar at index " + r);
  });
}
var vc = new WeakMap(),
  dp = new WeakMap();
function Ec(t) {
  return dp.get(t) || 1;
}
function sf(t) {
  if (t !== Yr) throw new Error("invalid wNAF");
}
var jc = class {
  constructor(e, s) {
    (this.BASE = e.BASE),
      (this.ZERO = e.ZERO),
      (this.Fn = e.Fn),
      (this.bits = s);
  }
  _unsafeLadder(e, s, r = this.ZERO) {
    let n = e;
    for (; s > Yr; ) s & Er && (r = r.add(n)), (n = n.double()), (s >>= Er);
    return r;
  }
  precomputeWindow(e, s) {
    let { windows: r, windowSize: n } = bc(s, this.bits),
      i = [],
      o = e,
      a = o;
    for (let c = 0; c < r; c++) {
      (a = o), i.push(a);
      for (let l = 1; l < n; l++) (a = a.add(o)), i.push(a);
      o = a.double();
    }
    return i;
  }
  wNAF(e, s, r) {
    if (!this.Fn.isValid(r)) throw new Error("invalid scalar");
    let n = this.ZERO,
      i = this.BASE,
      o = bc(e, this.bits);
    for (let a = 0; a < o.windows; a++) {
      let {
        nextN: c,
        offset: l,
        isZero: u,
        isNeg: h,
        isNegF: d,
        offsetF: p,
      } = tf(r, a, o);
      (r = c), u ? (i = i.add(So(d, s[p]))) : (n = n.add(So(h, s[l])));
    }
    return sf(r), { p: n, f: i };
  }
  wNAFUnsafe(e, s, r, n = this.ZERO) {
    let i = bc(e, this.bits);
    for (let o = 0; o < i.windows && r !== Yr; o++) {
      let { nextN: a, offset: c, isZero: l, isNeg: u } = tf(r, o, i);
      if (((r = a), !l)) {
        let h = s[c];
        n = n.add(u ? h.negate() : h);
      }
    }
    return sf(r), n;
  }
  getPrecomputes(e, s, r) {
    let n = vc.get(s);
    return (
      n ||
        ((n = this.precomputeWindow(s, e)),
        e !== 1 && (typeof r == "function" && (n = r(n)), vc.set(s, n))),
      n
    );
  }
  cached(e, s, r) {
    let n = Ec(e);
    return this.wNAF(n, this.getPrecomputes(n, e, r), s);
  }
  unsafe(e, s, r, n) {
    let i = Ec(e);
    return i === 1
      ? this._unsafeLadder(e, s, n)
      : this.wNAFUnsafe(i, this.getPrecomputes(i, e, r), s, n);
  }
  createCache(e, s) {
    hp(s, this.bits), dp.set(e, s), vc.delete(e);
  }
  hasCache(e) {
    return Ec(e) !== 1;
  }
};
function tv(t, e, s, r) {
  let n = e,
    i = t.ZERO,
    o = t.ZERO;
  for (; s > Yr || r > Yr; )
    s & Er && (i = i.add(n)),
      r & Er && (o = o.add(n)),
      (n = n.double()),
      (s >>= Er),
      (r >>= Er);
  return { p1: i, p2: o };
}
function sv(t, e, s, r) {
  Qb(s, t), ev(r, e);
  let n = s.length,
    i = r.length;
  if (n !== i)
    throw new Error("arrays of points and scalars must have equal length");
  let o = t.ZERO,
    a = Qf(BigInt(n)),
    c = 1;
  a > 12 ? (c = a - 3) : a > 4 ? (c = a - 2) : a > 0 && (c = 2);
  let l = Yn(c),
    u = new Array(Number(l) + 1).fill(o),
    h = Math.floor((e.BITS - 1) / c) * c,
    d = o;
  for (let p = h; p >= 0; p -= c) {
    u.fill(o);
    for (let g = 0; g < i; g++) {
      let w = r[g],
        R = Number((w >> BigInt(p)) & l);
      u[R] = u[R].add(s[g]);
    }
    let m = o;
    for (let g = u.length - 1, w = o; g > 0; g--)
      (w = w.add(u[g])), (m = m.add(w));
    if (((d = d.add(m)), p !== 0)) for (let g = 0; g < c; g++) d = d.double();
  }
  return d;
}
function rf(t, e, s) {
  if (e) {
    if (e.ORDER !== t)
      throw new Error("Field.ORDER must match order: Fp == p, Fn == n");
    return Xb(e), e;
  } else return Zs(t, { isLE: s });
}
function rv(t, e, s = {}, r) {
  if ((r === void 0 && (r = t === "edwards"), !e || typeof e != "object"))
    throw new Error(`expected valid ${t} CURVE object`);
  for (let a of ["p", "n", "h"]) {
    let c = e[a];
    if (!(typeof c == "bigint" && c > Yr))
      throw new Error(`CURVE.${a} must be positive bigint`);
  }
  let n = rf(e.p, s.Fp, r),
    i = rf(e.n, s.Fn, r),
    o = ["Gx", "Gy", "a", t === "weierstrass" ? "b" : "d"];
  for (let a of o)
    if (!n.isValid(e[a]))
      throw new Error(`CURVE.${a} must be valid field element of CURVE.Fp`);
  return (e = Object.freeze(Object.assign({}, e))), { CURVE: e, Fp: n, Fn: i };
}
BigInt(0), BigInt(1), BigInt(2), BigInt(8), Bf("HashToScalar-");
var Ln = BigInt(0),
  zr = BigInt(1),
  go = BigInt(2);
function nv(t) {
  return (
    Uo(t, { adjustScalarBytes: "function", powPminus2: "function" }),
    Object.freeze(V({}, t))
  );
}
function iv(t) {
  let e = nv(t),
    { P: s, type: r, adjustScalarBytes: n, powPminus2: i, randomBytes: o } = e,
    a = r === "x25519";
  if (!a && r !== "x448") throw new Error("invalid type");
  let c = o || Ir,
    l = a ? 255 : 448,
    u = a ? 32 : 56,
    h = BigInt(a ? 9 : 5),
    d = BigInt(a ? 121665 : 39081),
    p = a ? go ** BigInt(254) : go ** BigInt(447),
    m = a
      ? BigInt(8) * go ** BigInt(251) - zr
      : BigInt(4) * go ** BigInt(445) - zr,
    g = p + m + zr,
    w = (P) => xt(P, s),
    R = B(h);
  function B(P) {
    return cl(w(P), u);
  }
  function T(P) {
    let v = Ve("u coordinate", P, u);
    return a && (v[31] &= 127), w(xo(v));
  }
  function S(P) {
    return xo(n(Ve("scalar", P, u)));
  }
  function A(P, v) {
    let I = q(T(v), S(P));
    if (I === Ln) throw new Error("invalid private or public key received");
    return B(I);
  }
  function O(P) {
    return A(P, R);
  }
  function U(P, v, I) {
    let y = w(P * (v - I));
    return (v = w(v - y)), (I = w(I + y)), { x_2: v, x_3: I };
  }
  function q(P, v) {
    qc("u", P, Ln, s), qc("scalar", v, p, g);
    let I = v,
      y = P,
      b = zr,
      _ = Ln,
      k = P,
      x = zr,
      C = Ln;
    for (let M = BigInt(l - 1); M >= Ln; M--) {
      let J = (I >> M) & zr;
      (C ^= J),
        ({ x_2: b, x_3: k } = U(C, b, k)),
        ({ x_2: _, x_3: x } = U(C, _, x)),
        (C = J);
      let G = b + _,
        H = w(G * G),
        ee = b - _,
        Z = w(ee * ee),
        le = H - Z,
        Q = k + x,
        he = k - x,
        Ze = w(he * G),
        st = w(Q * ee),
        Je = Ze + st,
        At = Ze - st;
      (k = w(Je * Je)),
        (x = w(y * w(At * At))),
        (b = w(H * Z)),
        (_ = w(le * (H + w(d * le))));
    }
    ({ x_2: b, x_3: k } = U(C, b, k)), ({ x_2: _, x_3: x } = U(C, _, x));
    let D = i(_);
    return w(b * D);
  }
  let N = { secretKey: u, publicKey: u, seed: u },
    $ = (P = c(u)) => (Gt(P, N.seed), P);
  function j(P) {
    let v = $(P);
    return { secretKey: v, publicKey: O(v) };
  }
  return {
    keygen: j,
    getSharedSecret: (P, v) => A(P, v),
    getPublicKey: (P) => O(P),
    scalarMult: A,
    scalarMultBase: O,
    utils: { randomSecretKey: $, randomPrivateKey: $ },
    GuBytes: R.slice(),
    lengths: N,
  };
}
var ov = BigInt(1),
  nf = BigInt(2),
  av = BigInt(3),
  cv = BigInt(5),
  lv = BigInt(8),
  fp = BigInt(
    "0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffed"
  ),
  uv = {
    p: fp,
    n: BigInt(
      "0x1000000000000000000000000000000014def9dea2f79cd65812631a5cf5d3ed"
    ),
    h: lv,
    a: BigInt(
      "0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffec"
    ),
    d: BigInt(
      "0x52036cee2b6ffe738cc740797779e89800700a4d4141d8ab75eb4dca135978a3"
    ),
    Gx: BigInt(
      "0x216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a"
    ),
    Gy: BigInt(
      "0x6666666666666666666666666666666666666666666666666666666666666658"
    ),
  };
function hv(t) {
  let e = BigInt(10),
    s = BigInt(20),
    r = BigInt(40),
    n = BigInt(80),
    i = fp,
    o = (((t * t) % i) * t) % i,
    a = ($t(o, nf, i) * o) % i,
    c = ($t(a, ov, i) * t) % i,
    l = ($t(c, cv, i) * c) % i,
    u = ($t(l, e, i) * l) % i,
    h = ($t(u, s, i) * u) % i,
    d = ($t(h, r, i) * h) % i,
    p = ($t(d, n, i) * d) % i,
    m = ($t(p, n, i) * d) % i,
    g = ($t(m, e, i) * l) % i;
  return { pow_p_5_8: ($t(g, nf, i) * t) % i, b2: o };
}
function dv(t) {
  return (t[0] &= 248), (t[31] &= 127), (t[31] |= 64), t;
}
var fv = Zs(uv.p, { isLE: !0 }),
  Mc = (() => {
    let t = fv.ORDER;
    return iv({
      P: t,
      type: "x25519",
      powPminus2: (e) => {
        let { pow_p_5_8: s, b2: r } = hv(e);
        return xt($t(s, av, t) * r, t);
      },
      adjustScalarBytes: dv,
    });
  })(),
  of = (t, e) => (t + (t >= 0 ? e : -e) / pp) / e;
function pv(t, e, s) {
  let [[r, n], [i, o]] = e,
    a = of(o * t, s),
    c = of(-n * t, s),
    l = t - a * r - c * i,
    u = -a * n - c * o,
    h = l < xs,
    d = u < xs;
  h && (l = -l), d && (u = -u);
  let p = Yn(Math.ceil(Qf(s) / 2)) + Kr;
  if (l < xs || l >= p || u < xs || u >= p)
    throw new Error("splitScalar (endomorphism): failed, k=" + t);
  return { k1neg: h, k1: l, k2neg: d, k2: u };
}
function Fc(t) {
  if (!["compact", "recovered", "der"].includes(t))
    throw new Error(
      'Signature format must be "compact", "recovered", or "der"'
    );
  return t;
}
function xc(t, e) {
  let s = {};
  for (let r of Object.keys(e)) s[r] = t[r] === void 0 ? e[r] : t[r];
  return (
    Eo(s.lowS, "lowS"),
    Eo(s.prehash, "prehash"),
    s.format !== void 0 && Fc(s.format),
    s
  );
}
var $c = class extends Error {
    constructor(e = "") {
      super(e);
    }
  },
  Es = {
    Err: $c,
    _tlv: {
      encode: (t, e) => {
        let { Err: s } = Es;
        if (t < 0 || t > 256) throw new s("tlv.encode: wrong tag");
        if (e.length & 1) throw new s("tlv.encode: unpadded data");
        let r = e.length / 2,
          n = po(r);
        if ((n.length / 2) & 128)
          throw new s("tlv.encode: long form length too big");
        let i = r > 127 ? po((n.length / 2) | 128) : "";
        return po(t) + i + n + e;
      },
      decode(t, e) {
        let { Err: s } = Es,
          r = 0;
        if (t < 0 || t > 256) throw new s("tlv.encode: wrong tag");
        if (e.length < 2 || e[r++] !== t) throw new s("tlv.decode: wrong tlv");
        let n = e[r++],
          i = !!(n & 128),
          o = 0;
        if (!i) o = n;
        else {
          let c = n & 127;
          if (!c)
            throw new s("tlv.decode(long): indefinite length not supported");
          if (c > 4) throw new s("tlv.decode(long): byte length is too big");
          let l = e.subarray(r, r + c);
          if (l.length !== c)
            throw new s("tlv.decode: length bytes not complete");
          if (l[0] === 0) throw new s("tlv.decode(long): zero leftmost byte");
          for (let u of l) o = (o << 8) | u;
          if (((r += c), o < 128))
            throw new s("tlv.decode(long): not minimal encoding");
        }
        let a = e.subarray(r, r + o);
        if (a.length !== o) throw new s("tlv.decode: wrong value length");
        return { v: a, l: e.subarray(r + o) };
      },
    },
    _int: {
      encode(t) {
        let { Err: e } = Es;
        if (t < xs) throw new e("integer: negative integers are not allowed");
        let s = po(t);
        if ((Number.parseInt(s[0], 16) & 8 && (s = "00" + s), s.length & 1))
          throw new e("unexpected DER parsing assertion: unpadded hex");
        return s;
      },
      decode(t) {
        let { Err: e } = Es;
        if (t[0] & 128) throw new e("invalid signature integer: negative");
        if (t[0] === 0 && !(t[1] & 128))
          throw new e("invalid signature integer: unnecessary leading zero");
        return Bo(t);
      },
    },
    toSig(t) {
      let { Err: e, _int: s, _tlv: r } = Es,
        n = Ve("signature", t),
        { v: i, l: o } = r.decode(48, n);
      if (o.length) throw new e("invalid signature: left bytes after parsing");
      let { v: a, l: c } = r.decode(2, i),
        { v: l, l: u } = r.decode(2, c);
      if (u.length) throw new e("invalid signature: left bytes after parsing");
      return { r: s.decode(a), s: s.decode(l) };
    },
    hexFromSig(t) {
      let { _tlv: e, _int: s } = Es,
        r = e.encode(2, s.encode(t.r)),
        n = e.encode(2, s.encode(t.s)),
        i = r + n;
      return e.encode(48, i);
    },
  },
  xs = BigInt(0),
  Kr = BigInt(1),
  pp = BigInt(2),
  mo = BigInt(3),
  gv = BigInt(4);
function Vr(t, e) {
  let { BYTES: s } = t,
    r;
  if (typeof e == "bigint") r = e;
  else {
    let n = Ve("private key", e);
    try {
      r = t.fromBytes(n);
    } catch {
      throw new Error(
        `invalid private key: expected ui8a of size ${s}, got ${typeof e}`
      );
    }
  }
  if (!t.isValidNot0(r))
    throw new Error("invalid private key: out of range [1..N-1]");
  return r;
}
function mv(t, e = {}) {
  let s = rv("weierstrass", t, e),
    { Fp: r, Fn: n } = s,
    i = s.CURVE,
    { h: o, n: a } = i;
  Uo(
    e,
    {},
    {
      allowInfinityPoint: "boolean",
      clearCofactor: "function",
      isTorsionFree: "function",
      fromBytes: "function",
      toBytes: "function",
      endo: "object",
      wrapPrivateKey: "boolean",
    }
  );
  let { endo: c } = e;
  if (
    c &&
    (!r.is0(i.a) || typeof c.beta != "bigint" || !Array.isArray(c.basises))
  )
    throw new Error(
      'invalid endo: expected "beta": bigint and "basises": array'
    );
  let l = mp(r, n);
  function u() {
    if (!r.isOdd)
      throw new Error(
        "compression is not supported: Field does not have .isOdd()"
      );
  }
  function h(P, v, I) {
    let { x: y, y: b } = v.toAffine(),
      _ = r.toBytes(y);
    if ((Eo(I, "isCompressed"), I)) {
      u();
      let k = !r.isOdd(b);
      return Ks(gp(k), _);
    } else return Ks(Uint8Array.of(4), _, r.toBytes(b));
  }
  function d(P) {
    br(P, void 0, "Point");
    let { publicKey: v, publicKeyUncompressed: I } = l,
      y = P.length,
      b = P[0],
      _ = P.subarray(1);
    if (y === v && (b === 2 || b === 3)) {
      let k = r.fromBytes(_);
      if (!r.isValid(k)) throw new Error("bad point: is not on curve, wrong x");
      let x = g(k),
        C;
      try {
        C = r.sqrt(x);
      } catch (M) {
        let J = M instanceof Error ? ": " + M.message : "";
        throw new Error("bad point: is not on curve, sqrt error" + J);
      }
      u();
      let D = r.isOdd(C);
      return ((b & 1) === 1) !== D && (C = r.neg(C)), { x: k, y: C };
    } else if (y === I && b === 4) {
      let k = r.BYTES,
        x = r.fromBytes(_.subarray(0, k)),
        C = r.fromBytes(_.subarray(k, k * 2));
      if (!w(x, C)) throw new Error("bad point: is not on curve");
      return { x, y: C };
    } else
      throw new Error(
        `bad point: got length ${y}, expected compressed=${v} or uncompressed=${I}`
      );
  }
  let p = e.toBytes || h,
    m = e.fromBytes || d;
  function g(P) {
    let v = r.sqr(P),
      I = r.mul(v, P);
    return r.add(r.add(I, r.mul(P, i.a)), i.b);
  }
  function w(P, v) {
    let I = r.sqr(v),
      y = g(P);
    return r.eql(I, y);
  }
  if (!w(i.Gx, i.Gy)) throw new Error("bad curve params: generator point");
  let R = r.mul(r.pow(i.a, mo), gv),
    B = r.mul(r.sqr(i.b), BigInt(27));
  if (r.is0(r.add(R, B))) throw new Error("bad curve params: a or b");
  function T(P, v, I = !1) {
    if (!r.isValid(v) || (I && r.is0(v)))
      throw new Error(`bad point coordinate ${P}`);
    return v;
  }
  function S(P) {
    if (!(P instanceof N)) throw new Error("ProjectivePoint expected");
  }
  function A(P) {
    if (!c || !c.basises) throw new Error("no endo");
    return pv(P, c.basises, n.ORDER);
  }
  let O = Jd((P, v) => {
      let { X: I, Y: y, Z: b } = P;
      if (r.eql(b, r.ONE)) return { x: I, y };
      let _ = P.is0();
      v == null && (v = _ ? r.ONE : r.inv(b));
      let k = r.mul(I, v),
        x = r.mul(y, v),
        C = r.mul(b, v);
      if (_) return { x: r.ZERO, y: r.ZERO };
      if (!r.eql(C, r.ONE)) throw new Error("invZ was invalid");
      return { x: k, y: x };
    }),
    U = Jd((P) => {
      if (P.is0()) {
        if (e.allowInfinityPoint && !r.is0(P.Y)) return;
        throw new Error("bad point: ZERO");
      }
      let { x: v, y: I } = P.toAffine();
      if (!r.isValid(v) || !r.isValid(I))
        throw new Error("bad point: x or y not field elements");
      if (!w(v, I)) throw new Error("bad point: equation left != right");
      if (!P.isTorsionFree())
        throw new Error("bad point: not in prime-order subgroup");
      return !0;
    });
  function q(P, v, I, y, b) {
    return (
      (I = new N(r.mul(I.X, P), I.Y, I.Z)),
      (v = So(y, v)),
      (I = So(b, I)),
      v.add(I)
    );
  }
  class N {
    constructor(v, I, y) {
      (this.X = T("x", v)),
        (this.Y = T("y", I, !0)),
        (this.Z = T("z", y)),
        Object.freeze(this);
    }
    static CURVE() {
      return i;
    }
    static fromAffine(v) {
      let { x: I, y } = v || {};
      if (!v || !r.isValid(I) || !r.isValid(y))
        throw new Error("invalid affine point");
      if (v instanceof N) throw new Error("projective point not allowed");
      return r.is0(I) && r.is0(y) ? N.ZERO : new N(I, y, r.ONE);
    }
    static fromBytes(v) {
      let I = N.fromAffine(m(br(v, void 0, "point")));
      return I.assertValidity(), I;
    }
    static fromHex(v) {
      return N.fromBytes(Ve("pointHex", v));
    }
    get x() {
      return this.toAffine().x;
    }
    get y() {
      return this.toAffine().y;
    }
    precompute(v = 8, I = !0) {
      return j.createCache(this, v), I || this.multiply(mo), this;
    }
    assertValidity() {
      U(this);
    }
    hasEvenY() {
      let { y: v } = this.toAffine();
      if (!r.isOdd) throw new Error("Field doesn't support isOdd");
      return !r.isOdd(v);
    }
    equals(v) {
      S(v);
      let { X: I, Y: y, Z: b } = this,
        { X: _, Y: k, Z: x } = v,
        C = r.eql(r.mul(I, x), r.mul(_, b)),
        D = r.eql(r.mul(y, x), r.mul(k, b));
      return C && D;
    }
    negate() {
      return new N(this.X, r.neg(this.Y), this.Z);
    }
    double() {
      let { a: v, b: I } = i,
        y = r.mul(I, mo),
        { X: b, Y: _, Z: k } = this,
        x = r.ZERO,
        C = r.ZERO,
        D = r.ZERO,
        M = r.mul(b, b),
        J = r.mul(_, _),
        G = r.mul(k, k),
        H = r.mul(b, _);
      return (
        (H = r.add(H, H)),
        (D = r.mul(b, k)),
        (D = r.add(D, D)),
        (x = r.mul(v, D)),
        (C = r.mul(y, G)),
        (C = r.add(x, C)),
        (x = r.sub(J, C)),
        (C = r.add(J, C)),
        (C = r.mul(x, C)),
        (x = r.mul(H, x)),
        (D = r.mul(y, D)),
        (G = r.mul(v, G)),
        (H = r.sub(M, G)),
        (H = r.mul(v, H)),
        (H = r.add(H, D)),
        (D = r.add(M, M)),
        (M = r.add(D, M)),
        (M = r.add(M, G)),
        (M = r.mul(M, H)),
        (C = r.add(C, M)),
        (G = r.mul(_, k)),
        (G = r.add(G, G)),
        (M = r.mul(G, H)),
        (x = r.sub(x, M)),
        (D = r.mul(G, J)),
        (D = r.add(D, D)),
        (D = r.add(D, D)),
        new N(x, C, D)
      );
    }
    add(v) {
      S(v);
      let { X: I, Y: y, Z: b } = this,
        { X: _, Y: k, Z: x } = v,
        C = r.ZERO,
        D = r.ZERO,
        M = r.ZERO,
        J = i.a,
        G = r.mul(i.b, mo),
        H = r.mul(I, _),
        ee = r.mul(y, k),
        Z = r.mul(b, x),
        le = r.add(I, y),
        Q = r.add(_, k);
      (le = r.mul(le, Q)),
        (Q = r.add(H, ee)),
        (le = r.sub(le, Q)),
        (Q = r.add(I, b));
      let he = r.add(_, x);
      return (
        (Q = r.mul(Q, he)),
        (he = r.add(H, Z)),
        (Q = r.sub(Q, he)),
        (he = r.add(y, b)),
        (C = r.add(k, x)),
        (he = r.mul(he, C)),
        (C = r.add(ee, Z)),
        (he = r.sub(he, C)),
        (M = r.mul(J, Q)),
        (C = r.mul(G, Z)),
        (M = r.add(C, M)),
        (C = r.sub(ee, M)),
        (M = r.add(ee, M)),
        (D = r.mul(C, M)),
        (ee = r.add(H, H)),
        (ee = r.add(ee, H)),
        (Z = r.mul(J, Z)),
        (Q = r.mul(G, Q)),
        (ee = r.add(ee, Z)),
        (Z = r.sub(H, Z)),
        (Z = r.mul(J, Z)),
        (Q = r.add(Q, Z)),
        (H = r.mul(ee, Q)),
        (D = r.add(D, H)),
        (H = r.mul(he, Q)),
        (C = r.mul(le, C)),
        (C = r.sub(C, H)),
        (H = r.mul(le, ee)),
        (M = r.mul(he, M)),
        (M = r.add(M, H)),
        new N(C, D, M)
      );
    }
    subtract(v) {
      return this.add(v.negate());
    }
    is0() {
      return this.equals(N.ZERO);
    }
    multiply(v) {
      let { endo: I } = e;
      if (!n.isValidNot0(v)) throw new Error("invalid scalar: out of range");
      let y,
        b,
        _ = (k) => j.cached(this, k, (x) => wc(N, x));
      if (I) {
        let { k1neg: k, k1: x, k2neg: C, k2: D } = A(v),
          { p: M, f: J } = _(x),
          { p: G, f: H } = _(D);
        (b = J.add(H)), (y = q(I.beta, M, G, k, C));
      } else {
        let { p: k, f: x } = _(v);
        (y = k), (b = x);
      }
      return wc(N, [y, b])[0];
    }
    multiplyUnsafe(v) {
      let { endo: I } = e,
        y = this;
      if (!n.isValid(v)) throw new Error("invalid scalar: out of range");
      if (v === xs || y.is0()) return N.ZERO;
      if (v === Kr) return y;
      if (j.hasCache(this)) return this.multiply(v);
      if (I) {
        let { k1neg: b, k1: _, k2neg: k, k2: x } = A(v),
          { p1: C, p2: D } = tv(N, y, _, x);
        return q(I.beta, C, D, b, k);
      } else return j.unsafe(y, v);
    }
    multiplyAndAddUnsafe(v, I, y) {
      let b = this.multiplyUnsafe(I).add(v.multiplyUnsafe(y));
      return b.is0() ? void 0 : b;
    }
    toAffine(v) {
      return O(this, v);
    }
    isTorsionFree() {
      let { isTorsionFree: v } = e;
      return o === Kr ? !0 : v ? v(N, this) : j.unsafe(this, a).is0();
    }
    clearCofactor() {
      let { clearCofactor: v } = e;
      return o === Kr ? this : v ? v(N, this) : this.multiplyUnsafe(o);
    }
    isSmallOrder() {
      return this.multiplyUnsafe(o).is0();
    }
    toBytes(v = !0) {
      return Eo(v, "isCompressed"), this.assertValidity(), p(N, this, v);
    }
    toHex(v = !0) {
      return Hr(this.toBytes(v));
    }
    toString() {
      return `<Point ${this.is0() ? "ZERO" : this.toHex()}>`;
    }
    get px() {
      return this.X;
    }
    get py() {
      return this.X;
    }
    get pz() {
      return this.Z;
    }
    toRawBytes(v = !0) {
      return this.toBytes(v);
    }
    _setWindowSize(v) {
      this.precompute(v);
    }
    static normalizeZ(v) {
      return wc(N, v);
    }
    static msm(v, I) {
      return sv(N, n, v, I);
    }
    static fromPrivateKey(v) {
      return N.BASE.multiply(Vr(n, v));
    }
  }
  (N.BASE = new N(i.Gx, i.Gy, r.ONE)),
    (N.ZERO = new N(r.ZERO, r.ONE, r.ZERO)),
    (N.Fp = r),
    (N.Fn = n);
  let $ = n.BITS,
    j = new jc(N, e.endo ? Math.ceil($ / 2) : $);
  return N.BASE.precompute(8), N;
}
function gp(t) {
  return Uint8Array.of(t ? 2 : 3);
}
function mp(t, e) {
  return {
    secretKey: e.BYTES,
    publicKey: 1 + t.BYTES,
    publicKeyUncompressed: 1 + 2 * t.BYTES,
    publicKeyHasPrefix: !0,
    signature: 2 * e.BYTES,
  };
}
function yv(t, e = {}) {
  let { Fn: s } = t,
    r = e.randomBytes || Ir,
    n = Object.assign(mp(t.Fp, s), { seed: up(s.ORDER) });
  function i(d) {
    try {
      return !!Vr(s, d);
    } catch {
      return !1;
    }
  }
  function o(d, p) {
    let { publicKey: m, publicKeyUncompressed: g } = n;
    try {
      let w = d.length;
      return (p === !0 && w !== m) || (p === !1 && w !== g)
        ? !1
        : !!t.fromBytes(d);
    } catch {
      return !1;
    }
  }
  function a(d = r(n.seed)) {
    return Jb(br(d, n.seed, "seed"), s.ORDER);
  }
  function c(d, p = !0) {
    return t.BASE.multiply(Vr(s, d)).toBytes(p);
  }
  function l(d) {
    let p = a(d);
    return { secretKey: p, publicKey: c(p) };
  }
  function u(d) {
    if (typeof d == "bigint") return !1;
    if (d instanceof t) return !0;
    let { secretKey: p, publicKey: m, publicKeyUncompressed: g } = n;
    if (s.allowedLengths || p === m) return;
    let w = Ve("key", d).length;
    return w === m || w === g;
  }
  function h(d, p, m = !0) {
    if (u(d) === !0) throw new Error("first arg must be private key");
    if (u(p) === !1) throw new Error("second arg must be public key");
    let g = Vr(s, d);
    return t.fromHex(p).multiply(g).toBytes(m);
  }
  return Object.freeze({
    getPublicKey: c,
    getSharedSecret: h,
    keygen: l,
    Point: t,
    utils: {
      isValidSecretKey: i,
      isValidPublicKey: o,
      randomSecretKey: a,
      isValidPrivateKey: i,
      randomPrivateKey: a,
      normPrivateKeyToScalar: (d) => Vr(s, d),
      precompute(d = 8, p = t.BASE) {
        return p.precompute(d, !1);
      },
    },
    lengths: n,
  });
}
function wv(t, e, s = {}) {
  Po(e),
    Uo(
      s,
      {},
      {
        hmac: "function",
        lowS: "boolean",
        randomBytes: "function",
        bits2int: "function",
        bits2int_modN: "function",
      }
    );
  let r = s.randomBytes || Ir,
    n = s.hmac || ((I, ...y) => Ro(e, I, Ks(...y))),
    { Fp: i, Fn: o } = t,
    { ORDER: a, BITS: c } = o,
    {
      keygen: l,
      getPublicKey: u,
      getSharedSecret: h,
      utils: d,
      lengths: p,
    } = yv(t, s),
    m = {
      prehash: !1,
      lowS: typeof s.lowS == "boolean" ? s.lowS : !1,
      format: void 0,
      extraEntropy: !1,
    },
    g = "compact";
  function w(I) {
    let y = a >> Kr;
    return I > y;
  }
  function R(I, y) {
    if (!o.isValidNot0(y))
      throw new Error(`invalid signature ${I}: out of range 1..Point.Fn.ORDER`);
    return y;
  }
  function B(I, y) {
    Fc(y);
    let b = p.signature,
      _ = y === "compact" ? b : y === "recovered" ? b + 1 : void 0;
    return br(I, _, `${y} signature`);
  }
  class T {
    constructor(y, b, _) {
      (this.r = R("r", y)),
        (this.s = R("s", b)),
        _ != null && (this.recovery = _),
        Object.freeze(this);
    }
    static fromBytes(y, b = g) {
      B(y, b);
      let _;
      if (b === "der") {
        let { r: D, s: M } = Es.toSig(br(y));
        return new T(D, M);
      }
      b === "recovered" && ((_ = y[0]), (b = "compact"), (y = y.subarray(1)));
      let k = o.BYTES,
        x = y.subarray(0, k),
        C = y.subarray(k, k * 2);
      return new T(o.fromBytes(x), o.fromBytes(C), _);
    }
    static fromHex(y, b) {
      return this.fromBytes(wo(y), b);
    }
    addRecoveryBit(y) {
      return new T(this.r, this.s, y);
    }
    recoverPublicKey(y) {
      let b = i.ORDER,
        { r: _, s: k, recovery: x } = this;
      if (x == null || ![0, 1, 2, 3].includes(x))
        throw new Error("recovery id invalid");
      if (a * pp < b && x > 1)
        throw new Error("recovery id is ambiguous for h>1 curve");
      let C = x === 2 || x === 3 ? _ + a : _;
      if (!i.isValid(C)) throw new Error("recovery id 2 or 3 invalid");
      let D = i.toBytes(C),
        M = t.fromBytes(Ks(gp((x & 1) === 0), D)),
        J = o.inv(C),
        G = A(Ve("msgHash", y)),
        H = o.create(-G * J),
        ee = o.create(k * J),
        Z = t.BASE.multiplyUnsafe(H).add(M.multiplyUnsafe(ee));
      if (Z.is0()) throw new Error("point at infinify");
      return Z.assertValidity(), Z;
    }
    hasHighS() {
      return w(this.s);
    }
    toBytes(y = g) {
      if ((Fc(y), y === "der")) return wo(Es.hexFromSig(this));
      let b = o.toBytes(this.r),
        _ = o.toBytes(this.s);
      if (y === "recovered") {
        if (this.recovery == null)
          throw new Error("recovery bit must be present");
        return Ks(Uint8Array.of(this.recovery), b, _);
      }
      return Ks(b, _);
    }
    toHex(y) {
      return Hr(this.toBytes(y));
    }
    assertValidity() {}
    static fromCompact(y) {
      return T.fromBytes(Ve("sig", y), "compact");
    }
    static fromDER(y) {
      return T.fromBytes(Ve("sig", y), "der");
    }
    normalizeS() {
      return this.hasHighS()
        ? new T(this.r, o.neg(this.s), this.recovery)
        : this;
    }
    toDERRawBytes() {
      return this.toBytes("der");
    }
    toDERHex() {
      return Hr(this.toBytes("der"));
    }
    toCompactRawBytes() {
      return this.toBytes("compact");
    }
    toCompactHex() {
      return Hr(this.toBytes("compact"));
    }
  }
  let S =
      s.bits2int ||
      function (I) {
        if (I.length > 8192) throw new Error("input is too large");
        let y = Bo(I),
          b = I.length * 8 - c;
        return b > 0 ? y >> BigInt(b) : y;
      },
    A =
      s.bits2int_modN ||
      function (I) {
        return o.create(S(I));
      },
    O = Yn(c);
  function U(I) {
    return qc("num < 2^" + c, I, xs, O), o.toBytes(I);
  }
  function q(I, y) {
    return (
      br(I, void 0, "message"), y ? br(e(I), void 0, "prehashed message") : I
    );
  }
  function N(I, y, b) {
    if (["recovered", "canonical"].some((ee) => ee in b))
      throw new Error("sign() legacy options not supported");
    let { lowS: _, prehash: k, extraEntropy: x } = xc(b, m);
    I = q(I, k);
    let C = A(I),
      D = Vr(o, y),
      M = [U(D), U(C)];
    if (x != null && x !== !1) {
      let ee = x === !0 ? r(p.secretKey) : x;
      M.push(Ve("extraEntropy", ee));
    }
    let J = Ks(...M),
      G = C;
    function H(ee) {
      let Z = S(ee);
      if (!o.isValidNot0(Z)) return;
      let le = o.inv(Z),
        Q = t.BASE.multiply(Z).toAffine(),
        he = o.create(Q.x);
      if (he === xs) return;
      let Ze = o.create(le * o.create(G + he * D));
      if (Ze === xs) return;
      let st = (Q.x === he ? 0 : 2) | Number(Q.y & Kr),
        Je = Ze;
      return _ && w(Ze) && ((Je = o.neg(Ze)), (st ^= 1)), new T(he, Je, st);
    }
    return { seed: J, k2sig: H };
  }
  function $(I, y, b = {}) {
    I = Ve("message", I);
    let { seed: _, k2sig: k } = N(I, y, b);
    return zb(e.outputLen, o.BYTES, n)(_, k);
  }
  function j(I) {
    let y,
      b = typeof I == "string" || Co(I),
      _ =
        !b &&
        I !== null &&
        typeof I == "object" &&
        typeof I.r == "bigint" &&
        typeof I.s == "bigint";
    if (!b && !_)
      throw new Error(
        "invalid signature, expected Uint8Array, hex string or Signature instance"
      );
    if (_) y = new T(I.r, I.s);
    else if (b) {
      try {
        y = T.fromBytes(Ve("sig", I), "der");
      } catch (k) {
        if (!(k instanceof Es.Err)) throw k;
      }
      if (!y)
        try {
          y = T.fromBytes(Ve("sig", I), "compact");
        } catch {
          return !1;
        }
    }
    return y || !1;
  }
  function P(I, y, b, _ = {}) {
    let { lowS: k, prehash: x, format: C } = xc(_, m);
    if (((b = Ve("publicKey", b)), (y = q(Ve("message", y), x)), "strict" in _))
      throw new Error("options.strict was renamed to lowS");
    let D = C === void 0 ? j(I) : T.fromBytes(Ve("sig", I), C);
    if (D === !1) return !1;
    try {
      let M = t.fromBytes(b);
      if (k && D.hasHighS()) return !1;
      let { r: J, s: G } = D,
        H = A(y),
        ee = o.inv(G),
        Z = o.create(H * ee),
        le = o.create(J * ee),
        Q = t.BASE.multiplyUnsafe(Z).add(M.multiplyUnsafe(le));
      return Q.is0() ? !1 : o.create(Q.x) === J;
    } catch {
      return !1;
    }
  }
  function v(I, y, b = {}) {
    let { prehash: _ } = xc(b, m);
    return (
      (y = q(y, _)), T.fromBytes(I, "recovered").recoverPublicKey(y).toBytes()
    );
  }
  return Object.freeze({
    keygen: l,
    getPublicKey: u,
    getSharedSecret: h,
    utils: d,
    lengths: p,
    Point: t,
    sign: $,
    verify: P,
    recoverPublicKey: v,
    Signature: T,
    hash: e,
  });
}
function bv(t) {
  let e = { a: t.a, b: t.b, p: t.Fp.ORDER, n: t.n, h: t.h, Gx: t.Gx, Gy: t.Gy },
    s = t.Fp,
    r = t.allowedPrivateKeyLengths
      ? Array.from(
          new Set(t.allowedPrivateKeyLengths.map((o) => Math.ceil(o / 2)))
        )
      : void 0,
    n = Zs(e.n, {
      BITS: t.nBitLength,
      allowedLengths: r,
      modFromBytes: t.wrapPrivateKey,
    }),
    i = {
      Fp: s,
      Fn: n,
      allowInfinityPoint: t.allowInfinityPoint,
      endo: t.endo,
      isTorsionFree: t.isTorsionFree,
      clearCofactor: t.clearCofactor,
      fromBytes: t.fromBytes,
      toBytes: t.toBytes,
    };
  return { CURVE: e, curveOpts: i };
}
function vv(t) {
  let { CURVE: e, curveOpts: s } = bv(t),
    r = {
      hmac: t.hmac,
      randomBytes: t.randomBytes,
      lowS: t.lowS,
      bits2int: t.bits2int,
      bits2int_modN: t.bits2int_modN,
    };
  return { CURVE: e, curveOpts: s, hash: t.hash, ecdsaOpts: r };
}
function Ev(t, e) {
  let s = e.Point;
  return Object.assign({}, e, {
    ProjectivePoint: s,
    CURVE: Object.assign({}, t, cp(s.Fn.ORDER, s.Fn.BITS)),
  });
}
function xv(t) {
  let { CURVE: e, curveOpts: s, hash: r, ecdsaOpts: n } = vv(t),
    i = mv(e, s),
    o = wv(i, r, n);
  return Ev(t, o);
}
function zc(t, e) {
  let s = (r) => xv(ye(V({}, t), { hash: r }));
  return ye(V({}, s(e)), { create: s });
}
var yp = {
    p: BigInt(
      "0xffffffff00000001000000000000000000000000ffffffffffffffffffffffff"
    ),
    n: BigInt(
      "0xffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551"
    ),
    h: BigInt(1),
    a: BigInt(
      "0xffffffff00000001000000000000000000000000fffffffffffffffffffffffc"
    ),
    b: BigInt(
      "0x5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b"
    ),
    Gx: BigInt(
      "0x6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c296"
    ),
    Gy: BigInt(
      "0x4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5"
    ),
  },
  wp = {
    p: BigInt(
      "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffff0000000000000000ffffffff"
    ),
    n: BigInt(
      "0xffffffffffffffffffffffffffffffffffffffffffffffffc7634d81f4372ddf581a0db248b0a77aecec196accc52973"
    ),
    h: BigInt(1),
    a: BigInt(
      "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffff0000000000000000fffffffc"
    ),
    b: BigInt(
      "0xb3312fa7e23ee7e4988e056be3f82d19181d9c6efe8141120314088f5013875ac656398d8a2ed19d2a85c8edd3ec2aef"
    ),
    Gx: BigInt(
      "0xaa87ca22be8b05378eb1c71ef320ad746e1d3b628ba79b9859f741e082542a385502f25dbf55296c3a545e3872760ab7"
    ),
    Gy: BigInt(
      "0x3617de4a96262c6f5d9e98bf9292dc29f8f41dbd289a147ce9da3113b5f0b8c00a60b1ce1d7e819d7a431d7c90ea0e5f"
    ),
  },
  bp = {
    p: BigInt(
      "0x1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
    ),
    n: BigInt(
      "0x01fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa51868783bf2f966b7fcc0148f709a5d03bb5c9b8899c47aebb6fb71e91386409"
    ),
    h: BigInt(1),
    a: BigInt(
      "0x1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc"
    ),
    b: BigInt(
      "0x0051953eb9618e1c9a1f929a21a0b68540eea2da725b99b315f3b8b489918ef109e156193951ec7e937b1652c0bd3bb1bf073573df883d2c34f1ef451fd46b503f00"
    ),
    Gx: BigInt(
      "0x00c6858e06b70404e9cd9e3ecb662395b4429c648139053fb521f828af606b4d3dbaa14b5e77efe75928fe1dc127a2ffa8de3348b3c1856a429bf97e7e31c2e5bd66"
    ),
    Gy: BigInt(
      "0x011839296a789a3bc0045c8a5fb42c7d1bd998f54449579b446817afbd17273e662c97ee72995ef42640c550b9013fad0761353c7086a272c24088be94769fd16650"
    ),
  },
  Sv = Zs(yp.p),
  Iv = Zs(wp.p),
  _v = Zs(bp.p),
  Tv = zc(ye(V({}, yp), { Fp: Sv, lowS: !1 }), Oo);
zc(ye(V({}, wp), { Fp: Iv, lowS: !1 }), z0),
  zc(
    ye(V({}, bp), {
      Fp: _v,
      lowS: !1,
      allowedPrivateKeyLengths: [130, 131, 132],
    }),
    $0
  );
var Av = Tv,
  vp = "base10",
  He = "base16",
  Ke = "base64pad",
  As = "base64url",
  Xn = "utf8",
  Ep = 0,
  Xt = 1,
  Xr = 2,
  Cv = 0,
  af = 1,
  jn = 12,
  ul = 32;
function xp() {
  let t = Mc.utils.randomPrivateKey(),
    e = Mc.getPublicKey(t);
  return { privateKey: ke(t, He), publicKey: ke(e, He) };
}
function Lo() {
  let t = Ir(ul);
  return ke(t, He);
}
function Sp(t, e) {
  let s = Mc.getSharedSecret(lt(t, He), lt(e, He)),
    r = Fb(ko, s, void 0, void 0, ul);
  return ke(r, He);
}
function Zr(t) {
  let e = ko(lt(t, He));
  return ke(e, He);
}
function ft(t) {
  let e = ko(lt(t, Xn));
  return ke(e, He);
}
function Ip(t) {
  return lt(`${t}`, vp);
}
function Ys(t) {
  return Number(ke(t, vp));
}
function _p(t) {
  return t.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}
function Tp(t) {
  let e = t.replace(/-/g, "+").replace(/_/g, "/"),
    s = (4 - (e.length % 4)) % 4;
  return e + "=".repeat(s);
}
function Ap(t) {
  let e = Ip(typeof t.type < "u" ? t.type : Ep);
  if (Ys(e) === Xt && typeof t.senderPublicKey > "u")
    throw new Error("Missing sender public key for type 1 envelope");
  let s = typeof t.senderPublicKey < "u" ? lt(t.senderPublicKey, He) : void 0,
    r = typeof t.iv < "u" ? lt(t.iv, He) : Ir(jn),
    n = lt(t.symKey, He),
    i = Zf(n, r).encrypt(lt(t.message, Xn)),
    o = Np({ type: e, sealed: i, iv: r, senderPublicKey: s });
  return t.encoding === As ? _p(o) : o;
}
function Cp(t) {
  let e = lt(t.symKey, He),
    { sealed: s, iv: r } = Jr({ encoded: t.encoded, encoding: t.encoding }),
    n = Zf(e, r).decrypt(s);
  if (n === null) throw new Error("Failed to decrypt");
  return ke(n, Xn);
}
function Pp(t, e) {
  let s = Ip(Xr),
    r = Ir(jn),
    n = lt(t, Xn),
    i = Np({ type: s, sealed: n, iv: r });
  return e === As ? _p(i) : i;
}
function Op(t, e) {
  let { sealed: s } = Jr({ encoded: t, encoding: e });
  return ke(s, Xn);
}
function Np(t) {
  if (Ys(t.type) === Xr) return ke(yr([t.type, t.sealed]), Ke);
  if (Ys(t.type) === Xt) {
    if (typeof t.senderPublicKey > "u")
      throw new Error("Missing sender public key for type 1 envelope");
    return ke(yr([t.type, t.senderPublicKey, t.iv, t.sealed]), Ke);
  }
  return ke(yr([t.type, t.iv, t.sealed]), Ke);
}
function Jr(t) {
  let e = (t.encoding || Ke) === As ? Tp(t.encoded) : t.encoded,
    s = lt(e, Ke),
    r = s.slice(Cv, af),
    n = af;
  if (Ys(r) === Xt) {
    let c = n + ul,
      l = c + jn,
      u = s.slice(n, c),
      h = s.slice(c, l),
      d = s.slice(l);
    return { type: r, sealed: d, iv: h, senderPublicKey: u };
  }
  if (Ys(r) === Xr) {
    let c = s.slice(n),
      l = Ir(jn);
    return { type: r, sealed: c, iv: l };
  }
  let i = n + jn,
    o = s.slice(n, i),
    a = s.slice(i);
  return { type: r, sealed: a, iv: o };
}
function Rp(t, e) {
  let s = Jr({ encoded: t, encoding: e?.encoding });
  return hl({
    type: Ys(s.type),
    senderPublicKey:
      typeof s.senderPublicKey < "u" ? ke(s.senderPublicKey, He) : void 0,
    receiverPublicKey: e?.receiverPublicKey,
  });
}
function hl(t) {
  let e = t?.type || Ep;
  if (e === Xt) {
    if (typeof t?.senderPublicKey > "u")
      throw new Error("missing sender public key");
    if (typeof t?.receiverPublicKey > "u")
      throw new Error("missing receiver public key");
  }
  return {
    type: e,
    senderPublicKey: t?.senderPublicKey,
    receiverPublicKey: t?.receiverPublicKey,
  };
}
function dl(t) {
  return (
    t.type === Xt &&
    typeof t.senderPublicKey == "string" &&
    typeof t.receiverPublicKey == "string"
  );
}
function fl(t) {
  return t.type === Xr;
}
function Pv(t) {
  let e = Buffer.from(t.x, "base64"),
    s = Buffer.from(t.y, "base64");
  return yr([new Uint8Array([4]), e, s]);
}
function kp(t, e) {
  let [s, r, n] = t.split("."),
    i = Buffer.from(Tp(n), "base64");
  if (i.length !== 64) throw new Error("Invalid signature length");
  let o = i.slice(0, 32),
    a = i.slice(32, 64),
    c = `${s}.${r}`,
    l = ko(c),
    u = Pv(e);
  if (!Av.verify(yr([o, a]), l, u)) throw new Error("Invalid signature");
  return mn(t).payload;
}
var Ov = "irn";
function Zn(t) {
  return t?.relay || { protocol: Ov };
}
function _r(t) {
  let e = oh[t];
  if (typeof e > "u") throw new Error(`Relay Protocol not supported: ${t}`);
  return e;
}
var Nv = Object.defineProperty,
  Rv = Object.defineProperties,
  kv = Object.getOwnPropertyDescriptors,
  cf = Object.getOwnPropertySymbols,
  Bv = Object.prototype.hasOwnProperty,
  Uv = Object.prototype.propertyIsEnumerable,
  lf = (t, e, s) =>
    e in t
      ? Nv(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (t[e] = s),
  Sc = (t, e) => {
    for (var s in e || (e = {})) Bv.call(e, s) && lf(t, s, e[s]);
    if (cf) for (var s of cf(e)) Uv.call(e, s) && lf(t, s, e[s]);
    return t;
  },
  Lv = (t, e) => Rv(t, kv(e));
function Dv(t, e = "-") {
  let s = {},
    r = "relay" + e;
  return (
    Object.keys(t).forEach((n) => {
      if (n.startsWith(r)) {
        let i = n.replace(r, ""),
          o = t[n];
        s[i] = o;
      }
    }),
    s
  );
}
function pl(t) {
  if (!t.includes("wc:")) {
    let l = Af(t);
    l != null && l.includes("wc:") && (t = l);
  }
  (t = t.includes("wc://") ? t.replace("wc://", "") : t),
    (t = t.includes("wc:") ? t.replace("wc:", "") : t);
  let e = t.indexOf(":"),
    s = t.indexOf("?") !== -1 ? t.indexOf("?") : void 0,
    r = t.substring(0, e),
    n = t.substring(e + 1, s).split("@"),
    i = typeof s < "u" ? t.substring(s) : "",
    o = new URLSearchParams(i),
    a = Object.fromEntries(o.entries()),
    c = typeof a.methods == "string" ? a.methods.split(",") : void 0;
  return {
    protocol: r,
    topic: qv(n[0]),
    version: parseInt(n[1], 10),
    symKey: a.symKey,
    relay: Dv(a),
    methods: c,
    expiryTimestamp: a.expiryTimestamp
      ? parseInt(a.expiryTimestamp, 10)
      : void 0,
  };
}
function qv(t) {
  return t.startsWith("//") ? t.substring(2) : t;
}
function jv(t, e = "-") {
  let s = "relay",
    r = {};
  return (
    Object.keys(t).forEach((n) => {
      let i = n,
        o = s + e + i;
      t[i] && (r[o] = t[i]);
    }),
    r
  );
}
function gl(t) {
  let e = new URLSearchParams(),
    s = Sc(
      Sc(
        Lv(Sc({}, jv(t.relay)), { symKey: t.symKey }),
        t.expiryTimestamp && { expiryTimestamp: t.expiryTimestamp.toString() }
      ),
      t.methods && { methods: t.methods.join(",") }
    );
  return (
    Object.entries(s)
      .sort(([r], [n]) => r.localeCompare(n))
      .forEach(([r, n]) => {
        n !== void 0 && e.append(r, String(n));
      }),
    `${t.protocol}:${t.topic}@${t.version}?${e}`
  );
}
function Jn(t, e, s) {
  return `${t}?wc_ev=${s}&topic=${e}`;
}
var Mv = Object.defineProperty,
  Fv = Object.defineProperties,
  $v = Object.getOwnPropertyDescriptors,
  uf = Object.getOwnPropertySymbols,
  zv = Object.prototype.hasOwnProperty,
  Vv = Object.prototype.propertyIsEnumerable,
  hf = (t, e, s) =>
    e in t
      ? Mv(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (t[e] = s),
  Hv = (t, e) => {
    for (var s in e || (e = {})) zv.call(e, s) && hf(t, s, e[s]);
    if (uf) for (var s of uf(e)) Vv.call(e, s) && hf(t, s, e[s]);
    return t;
  },
  Kv = (t, e) => Fv(t, $v(e));
function Qr(t) {
  let e = [];
  return (
    t.forEach((s) => {
      let [r, n] = s.split(":");
      e.push(`${r}:${n}`);
    }),
    e
  );
}
function Gv(t) {
  let e = [];
  return (
    Object.values(t).forEach((s) => {
      e.push(...Qr(s.accounts));
    }),
    e
  );
}
function Wv(t, e) {
  let s = [];
  return (
    Object.values(t).forEach((r) => {
      Qr(r.accounts).includes(e) && s.push(...r.methods);
    }),
    s
  );
}
function Yv(t, e) {
  let s = [];
  return (
    Object.values(t).forEach((r) => {
      Qr(r.accounts).includes(e) && s.push(...r.events);
    }),
    s
  );
}
function Qn(t) {
  return t.includes(":");
}
function Tr(t) {
  return Qn(t) ? t.split(":")[0] : t;
}
function df(t) {
  var e, s, r;
  let n = {};
  if (!Rt(t)) return n;
  for (let [i, o] of Object.entries(t)) {
    let a = Qn(i) ? [i] : o.chains,
      c = o.methods || [],
      l = o.events || [],
      u = Tr(i);
    n[u] = Kv(Hv({}, n[u]), {
      chains: Vt(a, (e = n[u]) == null ? void 0 : e.chains),
      methods: Vt(c, (s = n[u]) == null ? void 0 : s.methods),
      events: Vt(l, (r = n[u]) == null ? void 0 : r.events),
    });
  }
  return n;
}
function Xv(t) {
  let e = {};
  return (
    t?.forEach((s) => {
      var r;
      let [n, i] = s.split(":");
      e[n] || (e[n] = { accounts: [], chains: [], events: [], methods: [] }),
        e[n].accounts.push(s),
        (r = e[n].chains) == null || r.push(`${n}:${i}`);
    }),
    e
  );
}
function ml(t, e) {
  e = e.map((r) => r.replace("did:pkh:", ""));
  let s = Xv(e);
  for (let [r, n] of Object.entries(s))
    n.methods ? (n.methods = Vt(n.methods, t)) : (n.methods = t),
      (n.events = ["chainChanged", "accountsChanged"]);
  return s;
}
function Bp(t, e) {
  var s, r, n, i, o, a;
  let c = df(t),
    l = df(e),
    u = {},
    h = Object.keys(c).concat(Object.keys(l));
  for (let d of h)
    u[d] = {
      chains: Vt(
        (s = c[d]) == null ? void 0 : s.chains,
        (r = l[d]) == null ? void 0 : r.chains
      ),
      methods: Vt(
        (n = c[d]) == null ? void 0 : n.methods,
        (i = l[d]) == null ? void 0 : i.methods
      ),
      events: Vt(
        (o = c[d]) == null ? void 0 : o.events,
        (a = l[d]) == null ? void 0 : a.events
      ),
    };
  return u;
}
var Zv = {
    INVALID_METHOD: { message: "Invalid method.", code: 1001 },
    INVALID_EVENT: { message: "Invalid event.", code: 1002 },
    INVALID_UPDATE_REQUEST: { message: "Invalid update request.", code: 1003 },
    INVALID_EXTEND_REQUEST: { message: "Invalid extend request.", code: 1004 },
    INVALID_SESSION_SETTLE_REQUEST: {
      message: "Invalid session settle request.",
      code: 1005,
    },
    UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 },
    UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 },
    UNAUTHORIZED_UPDATE_REQUEST: {
      message: "Unauthorized update request.",
      code: 3003,
    },
    UNAUTHORIZED_EXTEND_REQUEST: {
      message: "Unauthorized extend request.",
      code: 3004,
    },
    USER_REJECTED: { message: "User rejected.", code: 5e3 },
    USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 },
    USER_REJECTED_METHODS: { message: "User rejected methods.", code: 5002 },
    USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 },
    UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 },
    UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 },
    UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 },
    UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 },
    UNSUPPORTED_NAMESPACE_KEY: {
      message: "Unsupported namespace key.",
      code: 5104,
    },
    USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 },
    SESSION_SETTLEMENT_FAILED: {
      message: "Session settlement failed.",
      code: 7e3,
    },
    WC_METHOD_UNSUPPORTED: { message: "Unsupported wc_ method.", code: 10001 },
  },
  Jv = {
    NOT_INITIALIZED: { message: "Not initialized.", code: 1 },
    NO_MATCHING_KEY: { message: "No matching key.", code: 2 },
    RESTORE_WILL_OVERRIDE: { message: "Restore will override.", code: 3 },
    RESUBSCRIBED: { message: "Resubscribed.", code: 4 },
    MISSING_OR_INVALID: { message: "Missing or invalid.", code: 5 },
    EXPIRED: { message: "Expired.", code: 6 },
    UNKNOWN_TYPE: { message: "Unknown type.", code: 7 },
    MISMATCHED_TOPIC: { message: "Mismatched topic.", code: 8 },
    NON_CONFORMING_NAMESPACES: {
      message: "Non conforming namespaces.",
      code: 9,
    },
  };
function F(t, e) {
  let { message: s, code: r } = Jv[t];
  return { message: e ? `${s} ${e}` : s, code: r };
}
function fe(t, e) {
  let { message: s, code: r } = Zv[t];
  return { message: e ? `${s} ${e}` : s, code: r };
}
function Zt(t, e) {
  return Array.isArray(t) ? (typeof e < "u" && t.length ? t.every(e) : !0) : !1;
}
function Rt(t) {
  return Object.getPrototypeOf(t) === Object.prototype && Object.keys(t).length;
}
function Ie(t) {
  return typeof t > "u";
}
function xe(t, e) {
  return e && Ie(t) ? !0 : typeof t == "string" && !!t.trim().length;
}
function yl(t, e) {
  return e && Ie(t) ? !0 : typeof t == "number" && !isNaN(t);
}
function Up(t, e) {
  let { requiredNamespaces: s } = e,
    r = Object.keys(t.namespaces),
    n = Object.keys(s),
    i = !0;
  return wr(n, r)
    ? (r.forEach((o) => {
        let { accounts: a, methods: c, events: l } = t.namespaces[o],
          u = Qr(a),
          h = s[o];
        (!wr(yf(o, h), u) || !wr(h.methods, c) || !wr(h.events, l)) && (i = !1);
      }),
      i)
    : !1;
}
function Io(t) {
  return xe(t, !1) && t.includes(":") ? t.split(":").length === 2 : !1;
}
function Qv(t) {
  if (xe(t, !1) && t.includes(":")) {
    let e = t.split(":");
    if (e.length === 3) {
      let s = e[0] + ":" + e[1];
      return !!e[2] && Io(s);
    }
  }
  return !1;
}
function Lp(t) {
  function e(s) {
    try {
      return typeof new URL(s) < "u";
    } catch {
      return !1;
    }
  }
  try {
    if (xe(t, !1)) {
      if (e(t)) return !0;
      let s = Af(t);
      return e(s);
    }
  } catch {}
  return !1;
}
function Dp(t) {
  var e;
  return (e = t?.proposer) == null ? void 0 : e.publicKey;
}
function qp(t) {
  return t?.topic;
}
function jp(t, e) {
  let s = null;
  return (
    xe(t?.publicKey, !1) ||
      (s = F(
        "MISSING_OR_INVALID",
        `${e} controller public key should be a string`
      )),
    s
  );
}
function ff(t) {
  let e = !0;
  return Zt(t) ? t.length && (e = t.every((s) => xe(s, !1))) : (e = !1), e;
}
function e1(t, e, s) {
  let r = null;
  return (
    Zt(e) && e.length
      ? e.forEach((n) => {
          r ||
            Io(n) ||
            (r = fe(
              "UNSUPPORTED_CHAINS",
              `${s}, chain ${n} should be a string and conform to "namespace:chainId" format`
            ));
        })
      : Io(t) ||
        (r = fe(
          "UNSUPPORTED_CHAINS",
          `${s}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`
        )),
    r
  );
}
function t1(t, e, s) {
  let r = null;
  return (
    Object.entries(t).forEach(([n, i]) => {
      if (r) return;
      let o = e1(n, yf(n, i), `${e} ${s}`);
      o && (r = o);
    }),
    r
  );
}
function s1(t, e) {
  let s = null;
  return (
    Zt(t)
      ? t.forEach((r) => {
          s ||
            Qv(r) ||
            (s = fe(
              "UNSUPPORTED_ACCOUNTS",
              `${e}, account ${r} should be a string and conform to "namespace:chainId:address" format`
            ));
        })
      : (s = fe(
          "UNSUPPORTED_ACCOUNTS",
          `${e}, accounts should be an array of strings conforming to "namespace:chainId:address" format`
        )),
    s
  );
}
function r1(t, e) {
  let s = null;
  return (
    Object.values(t).forEach((r) => {
      if (s) return;
      let n = s1(r?.accounts, `${e} namespace`);
      n && (s = n);
    }),
    s
  );
}
function n1(t, e) {
  let s = null;
  return (
    ff(t?.methods)
      ? ff(t?.events) ||
        (s = fe(
          "UNSUPPORTED_EVENTS",
          `${e}, events should be an array of strings or empty array for no events`
        ))
      : (s = fe(
          "UNSUPPORTED_METHODS",
          `${e}, methods should be an array of strings or empty array for no methods`
        )),
    s
  );
}
function Mp(t, e) {
  let s = null;
  return (
    Object.values(t).forEach((r) => {
      if (s) return;
      let n = n1(r, `${e}, namespace`);
      n && (s = n);
    }),
    s
  );
}
function Fp(t, e, s) {
  let r = null;
  if (t && Rt(t)) {
    let n = Mp(t, e);
    n && (r = n);
    let i = t1(t, e, s);
    i && (r = i);
  } else
    r = F("MISSING_OR_INVALID", `${e}, ${s} should be an object with data`);
  return r;
}
function Do(t, e) {
  let s = null;
  if (t && Rt(t)) {
    let r = Mp(t, e);
    r && (s = r);
    let n = r1(t, e);
    n && (s = n);
  } else
    s = F(
      "MISSING_OR_INVALID",
      `${e}, namespaces should be an object with data`
    );
  return s;
}
function wl(t) {
  return xe(t.protocol, !0);
}
function $p(t, e) {
  let s = !1;
  return (
    e && !t
      ? (s = !0)
      : t &&
        Zt(t) &&
        t.length &&
        t.forEach((r) => {
          s = wl(r);
        }),
    s
  );
}
function zp(t) {
  return typeof t == "number";
}
function Ge(t) {
  return typeof t < "u" && typeof t !== null;
}
function Vp(t) {
  return !(
    !t ||
    typeof t != "object" ||
    !t.code ||
    !yl(t.code, !1) ||
    !t.message ||
    !xe(t.message, !1)
  );
}
function Hp(t) {
  return !(Ie(t) || !xe(t.method, !1));
}
function Kp(t) {
  return !(
    Ie(t) ||
    (Ie(t.result) && Ie(t.error)) ||
    !yl(t.id, !1) ||
    !xe(t.jsonrpc, !1)
  );
}
function Gp(t) {
  return !(Ie(t) || !xe(t.name, !1));
}
function bl(t, e) {
  return !(!Io(e) || !Gv(t).includes(e));
}
function Wp(t, e, s) {
  return xe(s, !1) ? Wv(t, e).includes(s) : !1;
}
function Yp(t, e, s) {
  return xe(s, !1) ? Yv(t, e).includes(s) : !1;
}
function vl(t, e, s) {
  let r = null,
    n = i1(t),
    i = o1(e),
    o = Object.keys(n),
    a = Object.keys(i),
    c = pf(Object.keys(t)),
    l = pf(Object.keys(e)),
    u = c.filter((h) => !l.includes(h));
  return (
    u.length &&
      (r = F(
        "NON_CONFORMING_NAMESPACES",
        `${s} namespaces keys don't satisfy requiredNamespaces.
      Required: ${u.toString()}
      Received: ${Object.keys(e).toString()}`
      )),
    wr(o, a) ||
      (r = F(
        "NON_CONFORMING_NAMESPACES",
        `${s} namespaces chains don't satisfy required namespaces.
      Required: ${o.toString()}
      Approved: ${a.toString()}`
      )),
    Object.keys(e).forEach((h) => {
      if (!h.includes(":") || r) return;
      let d = Qr(e[h].accounts);
      d.includes(h) ||
        (r = F(
          "NON_CONFORMING_NAMESPACES",
          `${s} namespaces accounts don't satisfy namespace accounts for ${h}
        Required: ${h}
        Approved: ${d.toString()}`
        ));
    }),
    o.forEach((h) => {
      r ||
        (wr(n[h].methods, i[h].methods)
          ? wr(n[h].events, i[h].events) ||
            (r = F(
              "NON_CONFORMING_NAMESPACES",
              `${s} namespaces events don't satisfy namespace events for ${h}`
            ))
          : (r = F(
              "NON_CONFORMING_NAMESPACES",
              `${s} namespaces methods don't satisfy namespace methods for ${h}`
            )));
    }),
    r
  );
}
function i1(t) {
  let e = {};
  return (
    Object.keys(t).forEach((s) => {
      var r;
      s.includes(":")
        ? (e[s] = t[s])
        : (r = t[s].chains) == null ||
          r.forEach((n) => {
            e[n] = { methods: t[s].methods, events: t[s].events };
          });
    }),
    e
  );
}
function pf(t) {
  return [...new Set(t.map((e) => (e.includes(":") ? e.split(":")[0] : e)))];
}
function o1(t) {
  let e = {};
  return (
    Object.keys(t).forEach((s) => {
      s.includes(":")
        ? (e[s] = t[s])
        : Qr(t[s].accounts)?.forEach((n) => {
            e[n] = {
              accounts: t[s].accounts.filter((i) => i.includes(`${n}:`)),
              methods: t[s].methods,
              events: t[s].events,
            };
          });
    }),
    e
  );
}
function Xp(t, e) {
  return yl(t, !1) && t <= e.max && t >= e.min;
}
function El() {
  let t = Vn();
  return new Promise((e) => {
    switch (t) {
      case ht.browser:
        e(a1());
        break;
      case ht.reactNative:
        e(c1());
        break;
      case ht.node:
        e(l1());
        break;
      default:
        e(!0);
    }
  });
}
function a1() {
  return Sr() && navigator?.onLine;
}
function c1() {
  return f(this, null, function* () {
    return _s() && typeof global < "u" && global != null && global.NetInfo
      ? (yield global == null ? void 0 : global.NetInfo.fetch())?.isConnected
      : !0;
  });
}
function l1() {
  return !0;
}
function Zp(t) {
  switch (Vn()) {
    case ht.browser:
      u1(t);
      break;
    case ht.reactNative:
      h1(t);
      break;
    case ht.node:
      break;
  }
}
function u1(t) {
  !_s() &&
    Sr() &&
    (window.addEventListener("online", () => t(!0)),
    window.addEventListener("offline", () => t(!1)));
}
function h1(t) {
  _s() &&
    typeof global < "u" &&
    global != null &&
    global.NetInfo &&
    global?.NetInfo.addEventListener((e) => t(e?.isConnected));
}
function Jp() {
  var t;
  return Sr() && (0, Kt.getDocument)()
    ? ((t = (0, Kt.getDocument)()) == null ? void 0 : t.visibilityState) ===
        "visible"
    : !0;
}
var Ic = {},
  Xs = class {
    static get(e) {
      return Ic[e];
    }
    static set(e, s) {
      Ic[e] = s;
    }
    static delete(e) {
      delete Ic[e];
    }
  };
function d1(t) {
  let e = Fr.decode(t);
  if (e.length < 33) throw new Error("Too short to contain a public key");
  return e.slice(1, 33);
}
function f1({ publicKey: t, signature: e, payload: s }) {
  var r;
  let n = Vc(s.method),
    i =
      128 | parseInt(((r = s.version) == null ? void 0 : r.toString()) || "4"),
    o = m1(s.address),
    a = s.era === "00" ? new Uint8Array([0]) : Vc(s.era);
  if (a.length !== 1 && a.length !== 2) throw new Error("Invalid era length");
  let c = parseInt(s.nonce, 16),
    l = new Uint8Array([c & 255, (c >> 8) & 255]),
    u = BigInt(`0x${g1(s.tip)}`),
    h = w1(u),
    d = new Uint8Array([0, ...t, o, ...e, ...a, ...l, ...h, ...n]),
    p = y1(d.length + 1);
  return new Uint8Array([...p, i, ...d]);
}
function p1(t) {
  let e = Vc(t),
    s = (0, mf.blake2b)(e, void 0, 32);
  return "0x" + Buffer.from(s).toString("hex");
}
function Vc(t) {
  return new Uint8Array(
    t
      .replace(/^0x/, "")
      .match(/.{1,2}/g)
      .map((e) => parseInt(e, 16))
  );
}
function g1(t) {
  return t.startsWith("0x") ? t.slice(2) : t;
}
function m1(t) {
  let e = Fr.decode(t)[0];
  return e === 42 ? 0 : e === 60 ? 2 : 1;
}
function y1(t) {
  if (t < 64) return new Uint8Array([t << 2]);
  if (t < 16384) {
    let e = (t << 2) | 1;
    return new Uint8Array([e & 255, (e >> 8) & 255]);
  } else if (t < 1 << 30) {
    let e = (t << 2) | 2;
    return new Uint8Array([
      e & 255,
      (e >> 8) & 255,
      (e >> 16) & 255,
      (e >> 24) & 255,
    ]);
  } else throw new Error("Compact encoding > 2^30 not supported");
}
function w1(t) {
  if (t < BigInt(1) << BigInt(6))
    return new Uint8Array([Number(t << BigInt(2))]);
  if (t < BigInt(1) << BigInt(14)) {
    let e = (t << BigInt(2)) | BigInt(1);
    return new Uint8Array([
      Number(e & BigInt(255)),
      Number((e >> BigInt(8)) & BigInt(255)),
    ]);
  } else if (t < BigInt(1) << BigInt(30)) {
    let e = (t << BigInt(2)) | BigInt(2);
    return new Uint8Array([
      Number(e & BigInt(255)),
      Number((e >> BigInt(8)) & BigInt(255)),
      Number((e >> BigInt(16)) & BigInt(255)),
      Number((e >> BigInt(24)) & BigInt(255)),
    ]);
  } else throw new Error("BigInt compact encoding not supported > 2^30");
}
function Qp(t) {
  let e = Uint8Array.from(Buffer.from(t.signature, "hex")),
    s = d1(t.transaction.address),
    r = f1({ publicKey: s, signature: e, payload: t.transaction }),
    n = Buffer.from(r).toString("hex");
  return p1(n);
}
function en({ logger: t, name: e }) {
  let s = typeof t == "string" ? Ei({ opts: { level: t, name: e } }).logger : t;
  return (s.level = typeof t == "string" ? t : t.level), s;
}
var Ig = gt(nh(), 1);
var _g = "wc",
  Tg = 2,
  jo = "core",
  as = `${_g}@2:${jo}:`,
  b1 = { name: jo, logger: "error" },
  v1 = { database: ":memory:" },
  E1 = "crypto",
  eg = "client_ed25519_seed",
  x1 = K.ONE_DAY,
  S1 = "keychain",
  I1 = "0.3",
  _1 = "messages",
  T1 = "0.3",
  A1 = K.SIX_HOURS,
  C1 = "publisher",
  tu = "irn",
  P1 = "error",
  Ag = "wss://relay.walletconnect.org",
  O1 = "relayer",
  Se = {
    message: "relayer_message",
    message_ack: "relayer_message_ack",
    connect: "relayer_connect",
    disconnect: "relayer_disconnect",
    error: "relayer_error",
    connection_stalled: "relayer_connection_stalled",
    transport_closed: "relayer_transport_closed",
    publish: "relayer_publish",
  },
  N1 = "_subscription",
  kt = {
    payload: "payload",
    connect: "connect",
    disconnect: "disconnect",
    error: "error",
  },
  R1 = 0.1;
var _l = "2.22.4";
var me = { link_mode: "link_mode", relay: "relay" },
  qo = { inbound: "inbound", outbound: "outbound" },
  k1 = "0.3",
  B1 = "WALLETCONNECT_CLIENT_ID",
  tg = "WALLETCONNECT_LINK_MODE_APPS",
  _t = {
    created: "subscription_created",
    deleted: "subscription_deleted",
    expired: "subscription_expired",
    disabled: "subscription_disabled",
    sync: "subscription_sync",
    resubscribed: "subscription_resubscribed",
  };
var U1 = "subscription",
  L1 = "0.3",
  AO = K.FIVE_SECONDS * 1e3,
  D1 = "pairing",
  q1 = "0.3";
var ei = {
    wc_pairingDelete: {
      req: { ttl: K.ONE_DAY, prompt: !1, tag: 1e3 },
      res: { ttl: K.ONE_DAY, prompt: !1, tag: 1001 },
    },
    wc_pairingPing: {
      req: { ttl: K.THIRTY_SECONDS, prompt: !1, tag: 1002 },
      res: { ttl: K.THIRTY_SECONDS, prompt: !1, tag: 1003 },
    },
    unregistered_method: {
      req: { ttl: K.ONE_DAY, prompt: !1, tag: 0 },
      res: { ttl: K.ONE_DAY, prompt: !1, tag: 0 },
    },
  },
  Js = {
    create: "pairing_create",
    expire: "pairing_expire",
    delete: "pairing_delete",
    ping: "pairing_ping",
  },
  Jt = {
    created: "history_created",
    updated: "history_updated",
    deleted: "history_deleted",
    sync: "history_sync",
  },
  j1 = "history",
  M1 = "0.3",
  F1 = "expirer",
  Tt = {
    created: "expirer_created",
    deleted: "expirer_deleted",
    expired: "expirer_expired",
    sync: "expirer_sync",
  },
  $1 = "0.3";
var z1 = "verify-api",
  V1 = "https://verify.walletconnect.com",
  Cg = "https://verify.walletconnect.org",
  rn = Cg,
  H1 = `${rn}/v3`,
  K1 = [V1, Cg],
  G1 = "echo",
  W1 = "https://echo.walletconnect.com";
var Qt = {
    pairing_started: "pairing_started",
    pairing_uri_validation_success: "pairing_uri_validation_success",
    pairing_uri_not_expired: "pairing_uri_not_expired",
    store_new_pairing: "store_new_pairing",
    subscribing_pairing_topic: "subscribing_pairing_topic",
    subscribe_pairing_topic_success: "subscribe_pairing_topic_success",
    existing_pairing: "existing_pairing",
    pairing_not_expired: "pairing_not_expired",
    emit_inactive_pairing: "emit_inactive_pairing",
    emit_session_proposal: "emit_session_proposal",
    subscribing_to_pairing_topic: "subscribing_to_pairing_topic",
  },
  os = {
    no_wss_connection: "no_wss_connection",
    no_internet_connection: "no_internet_connection",
    malformed_pairing_uri: "malformed_pairing_uri",
    active_pairing_already_exists: "active_pairing_already_exists",
    subscribe_pairing_topic_failure: "subscribe_pairing_topic_failure",
    pairing_expired: "pairing_expired",
    proposal_expired: "proposal_expired",
    proposal_listener_not_found: "proposal_listener_not_found",
  },
  Ut = {
    session_approve_started: "session_approve_started",
    proposal_not_expired: "proposal_not_expired",
    session_namespaces_validation_success:
      "session_namespaces_validation_success",
    create_session_topic: "create_session_topic",
    subscribing_session_topic: "subscribing_session_topic",
    subscribe_session_topic_success: "subscribe_session_topic_success",
    publishing_session_approve: "publishing_session_approve",
    session_approve_publish_success: "session_approve_publish_success",
    store_session: "store_session",
    publishing_session_settle: "publishing_session_settle",
    session_settle_publish_success: "session_settle_publish_success",
    session_request_response_started: "session_request_response_started",
    session_request_response_validation_success:
      "session_request_response_validation_success",
    session_request_response_publish_started:
      "session_request_response_publish_started",
  },
  Qs = {
    no_internet_connection: "no_internet_connection",
    no_wss_connection: "no_wss_connection",
    proposal_expired: "proposal_expired",
    subscribe_session_topic_failure: "subscribe_session_topic_failure",
    session_approve_publish_failure: "session_approve_publish_failure",
    session_settle_publish_failure: "session_settle_publish_failure",
    session_approve_namespace_validation_failure:
      "session_approve_namespace_validation_failure",
    proposal_not_found: "proposal_not_found",
    session_request_response_validation_failure:
      "session_request_response_validation_failure",
    session_request_response_publish_failure:
      "session_request_response_publish_failure",
  },
  er = {
    authenticated_session_approve_started:
      "authenticated_session_approve_started",
    authenticated_session_not_expired: "authenticated_session_not_expired",
    chains_caip2_compliant: "chains_caip2_compliant",
    chains_evm_compliant: "chains_evm_compliant",
    create_authenticated_session_topic: "create_authenticated_session_topic",
    cacaos_verified: "cacaos_verified",
    store_authenticated_session: "store_authenticated_session",
    subscribing_authenticated_session_topic:
      "subscribing_authenticated_session_topic",
    subscribe_authenticated_session_topic_success:
      "subscribe_authenticated_session_topic_success",
    publishing_authenticated_session_approve:
      "publishing_authenticated_session_approve",
    authenticated_session_approve_publish_success:
      "authenticated_session_approve_publish_success",
  },
  nn = {
    no_internet_connection: "no_internet_connection",
    no_wss_connection: "no_wss_connection",
    missing_session_authenticate_request:
      "missing_session_authenticate_request",
    session_authenticate_request_expired:
      "session_authenticate_request_expired",
    chains_caip2_compliant_failure: "chains_caip2_compliant_failure",
    chains_evm_compliant_failure: "chains_evm_compliant_failure",
    invalid_cacao: "invalid_cacao",
    subscribe_authenticated_session_topic_failure:
      "subscribe_authenticated_session_topic_failure",
    authenticated_session_approve_publish_failure:
      "authenticated_session_approve_publish_failure",
    authenticated_session_pending_request_not_found:
      "authenticated_session_pending_request_not_found",
  },
  Y1 = 0.1,
  X1 = "event-client",
  Z1 = 86400,
  J1 = "https://pulse.walletconnect.org/batch";
function Q1(t, e) {
  if (t.length >= 255) throw new TypeError("Alphabet too long");
  for (var s = new Uint8Array(256), r = 0; r < s.length; r++) s[r] = 255;
  for (var n = 0; n < t.length; n++) {
    var i = t.charAt(n),
      o = i.charCodeAt(0);
    if (s[o] !== 255) throw new TypeError(i + " is ambiguous");
    s[o] = n;
  }
  var a = t.length,
    c = t.charAt(0),
    l = Math.log(a) / Math.log(256),
    u = Math.log(256) / Math.log(a);
  function h(m) {
    if (
      (m instanceof Uint8Array ||
        (ArrayBuffer.isView(m)
          ? (m = new Uint8Array(m.buffer, m.byteOffset, m.byteLength))
          : Array.isArray(m) && (m = Uint8Array.from(m))),
      !(m instanceof Uint8Array))
    )
      throw new TypeError("Expected Uint8Array");
    if (m.length === 0) return "";
    for (var g = 0, w = 0, R = 0, B = m.length; R !== B && m[R] === 0; )
      R++, g++;
    for (var T = ((B - R) * u + 1) >>> 0, S = new Uint8Array(T); R !== B; ) {
      for (
        var A = m[R], O = 0, U = T - 1;
        (A !== 0 || O < w) && U !== -1;
        U--, O++
      )
        (A += (256 * S[U]) >>> 0), (S[U] = A % a >>> 0), (A = (A / a) >>> 0);
      if (A !== 0) throw new Error("Non-zero carry");
      (w = O), R++;
    }
    for (var q = T - w; q !== T && S[q] === 0; ) q++;
    for (var N = c.repeat(g); q < T; ++q) N += t.charAt(S[q]);
    return N;
  }
  function d(m) {
    if (typeof m != "string") throw new TypeError("Expected String");
    if (m.length === 0) return new Uint8Array();
    var g = 0;
    if (m[g] !== " ") {
      for (var w = 0, R = 0; m[g] === c; ) w++, g++;
      for (
        var B = ((m.length - g) * l + 1) >>> 0, T = new Uint8Array(B);
        m[g];

      ) {
        var S = s[m.charCodeAt(g)];
        if (S === 255) return;
        for (var A = 0, O = B - 1; (S !== 0 || A < R) && O !== -1; O--, A++)
          (S += (a * T[O]) >>> 0),
            (T[O] = S % 256 >>> 0),
            (S = (S / 256) >>> 0);
        if (S !== 0) throw new Error("Non-zero carry");
        (R = A), g++;
      }
      if (m[g] !== " ") {
        for (var U = B - R; U !== B && T[U] === 0; ) U++;
        for (var q = new Uint8Array(w + (B - U)), N = w; U !== B; )
          q[N++] = T[U++];
        return q;
      }
    }
  }
  function p(m) {
    var g = d(m);
    if (g) return g;
    throw new Error(`Non-${e} character`);
  }
  return { encode: h, decodeUnsafe: d, decode: p };
}
var eE = Q1,
  tE = eE,
  Pg = (t) => {
    if (t instanceof Uint8Array && t.constructor.name === "Uint8Array")
      return t;
    if (t instanceof ArrayBuffer) return new Uint8Array(t);
    if (ArrayBuffer.isView(t))
      return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
    throw new Error("Unknown type, must be binary type");
  },
  sE = (t) => new TextEncoder().encode(t),
  rE = (t) => new TextDecoder().decode(t),
  Tl = class {
    constructor(e, s, r) {
      (this.name = e), (this.prefix = s), (this.baseEncode = r);
    }
    encode(e) {
      if (e instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e)}`;
      throw Error("Unknown type, must be binary type");
    }
  },
  Al = class {
    constructor(e, s, r) {
      if (((this.name = e), (this.prefix = s), s.codePointAt(0) === void 0))
        throw new Error("Invalid prefix character");
      (this.prefixCodePoint = s.codePointAt(0)), (this.baseDecode = r);
    }
    decode(e) {
      if (typeof e == "string") {
        if (e.codePointAt(0) !== this.prefixCodePoint)
          throw Error(
            `Unable to decode multibase string ${JSON.stringify(e)}, ${
              this.name
            } decoder only supports inputs prefixed with ${this.prefix}`
          );
        return this.baseDecode(e.slice(this.prefix.length));
      } else throw Error("Can only multibase decode strings");
    }
    or(e) {
      return Og(this, e);
    }
  },
  Cl = class {
    constructor(e) {
      this.decoders = e;
    }
    or(e) {
      return Og(this, e);
    }
    decode(e) {
      let s = e[0],
        r = this.decoders[s];
      if (r) return r.decode(e);
      throw RangeError(
        `Unable to decode multibase string ${JSON.stringify(
          e
        )}, only inputs prefixed with ${Object.keys(
          this.decoders
        )} are supported`
      );
    }
  },
  Og = (t, e) =>
    new Cl(
      V(V({}, t.decoders || { [t.prefix]: t }), e.decoders || { [e.prefix]: e })
    ),
  Pl = class {
    constructor(e, s, r, n) {
      (this.name = e),
        (this.prefix = s),
        (this.baseEncode = r),
        (this.baseDecode = n),
        (this.encoder = new Tl(e, s, r)),
        (this.decoder = new Al(e, s, n));
    }
    encode(e) {
      return this.encoder.encode(e);
    }
    decode(e) {
      return this.decoder.decode(e);
    }
  },
  Mo = ({ name: t, prefix: e, encode: s, decode: r }) => new Pl(t, e, s, r),
  ii = ({ prefix: t, name: e, alphabet: s }) => {
    let { encode: r, decode: n } = tE(s, e);
    return Mo({ prefix: t, name: e, encode: r, decode: (i) => Pg(n(i)) });
  },
  nE = (t, e, s, r) => {
    let n = {};
    for (let u = 0; u < e.length; ++u) n[e[u]] = u;
    let i = t.length;
    for (; t[i - 1] === "="; ) --i;
    let o = new Uint8Array(((i * s) / 8) | 0),
      a = 0,
      c = 0,
      l = 0;
    for (let u = 0; u < i; ++u) {
      let h = n[t[u]];
      if (h === void 0) throw new SyntaxError(`Non-${r} character`);
      (c = (c << s) | h),
        (a += s),
        a >= 8 && ((a -= 8), (o[l++] = 255 & (c >> a)));
    }
    if (a >= s || 255 & (c << (8 - a)))
      throw new SyntaxError("Unexpected end of data");
    return o;
  },
  iE = (t, e, s) => {
    let r = e[e.length - 1] === "=",
      n = (1 << s) - 1,
      i = "",
      o = 0,
      a = 0;
    for (let c = 0; c < t.length; ++c)
      for (a = (a << 8) | t[c], o += 8; o > s; )
        (o -= s), (i += e[n & (a >> o)]);
    if ((o && (i += e[n & (a << (s - o))]), r))
      for (; (i.length * s) & 7; ) i += "=";
    return i;
  },
  Le = ({ name: t, prefix: e, bitsPerChar: s, alphabet: r }) =>
    Mo({
      prefix: e,
      name: t,
      encode(n) {
        return iE(n, r, s);
      },
      decode(n) {
        return nE(n, r, s, t);
      },
    }),
  oE = Mo({
    prefix: "\0",
    name: "identity",
    encode: (t) => rE(t),
    decode: (t) => sE(t),
  }),
  aE = Object.freeze({ __proto__: null, identity: oE }),
  cE = Le({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 }),
  lE = Object.freeze({ __proto__: null, base2: cE }),
  uE = Le({ prefix: "7", name: "base8", alphabet: "01234567", bitsPerChar: 3 }),
  hE = Object.freeze({ __proto__: null, base8: uE }),
  dE = ii({ prefix: "9", name: "base10", alphabet: "0123456789" }),
  fE = Object.freeze({ __proto__: null, base10: dE }),
  pE = Le({
    prefix: "f",
    name: "base16",
    alphabet: "0123456789abcdef",
    bitsPerChar: 4,
  }),
  gE = Le({
    prefix: "F",
    name: "base16upper",
    alphabet: "0123456789ABCDEF",
    bitsPerChar: 4,
  }),
  mE = Object.freeze({ __proto__: null, base16: pE, base16upper: gE }),
  yE = Le({
    prefix: "b",
    name: "base32",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
    bitsPerChar: 5,
  }),
  wE = Le({
    prefix: "B",
    name: "base32upper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
    bitsPerChar: 5,
  }),
  bE = Le({
    prefix: "c",
    name: "base32pad",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
    bitsPerChar: 5,
  }),
  vE = Le({
    prefix: "C",
    name: "base32padupper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
    bitsPerChar: 5,
  }),
  EE = Le({
    prefix: "v",
    name: "base32hex",
    alphabet: "0123456789abcdefghijklmnopqrstuv",
    bitsPerChar: 5,
  }),
  xE = Le({
    prefix: "V",
    name: "base32hexupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
    bitsPerChar: 5,
  }),
  SE = Le({
    prefix: "t",
    name: "base32hexpad",
    alphabet: "0123456789abcdefghijklmnopqrstuv=",
    bitsPerChar: 5,
  }),
  IE = Le({
    prefix: "T",
    name: "base32hexpadupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
    bitsPerChar: 5,
  }),
  _E = Le({
    prefix: "h",
    name: "base32z",
    alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
    bitsPerChar: 5,
  }),
  TE = Object.freeze({
    __proto__: null,
    base32: yE,
    base32upper: wE,
    base32pad: bE,
    base32padupper: vE,
    base32hex: EE,
    base32hexupper: xE,
    base32hexpad: SE,
    base32hexpadupper: IE,
    base32z: _E,
  }),
  AE = ii({
    prefix: "k",
    name: "base36",
    alphabet: "0123456789abcdefghijklmnopqrstuvwxyz",
  }),
  CE = ii({
    prefix: "K",
    name: "base36upper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  }),
  PE = Object.freeze({ __proto__: null, base36: AE, base36upper: CE }),
  OE = ii({
    name: "base58btc",
    prefix: "z",
    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
  }),
  NE = ii({
    name: "base58flickr",
    prefix: "Z",
    alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",
  }),
  RE = Object.freeze({ __proto__: null, base58btc: OE, base58flickr: NE }),
  kE = Le({
    prefix: "m",
    name: "base64",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    bitsPerChar: 6,
  }),
  BE = Le({
    prefix: "M",
    name: "base64pad",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    bitsPerChar: 6,
  }),
  UE = Le({
    prefix: "u",
    name: "base64url",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
    bitsPerChar: 6,
  }),
  LE = Le({
    prefix: "U",
    name: "base64urlpad",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
    bitsPerChar: 6,
  }),
  DE = Object.freeze({
    __proto__: null,
    base64: kE,
    base64pad: BE,
    base64url: UE,
    base64urlpad: LE,
  }),
  Ng = Array.from(
    "\u{1F680}\u{1FA90}\u2604\u{1F6F0}\u{1F30C}\u{1F311}\u{1F312}\u{1F313}\u{1F314}\u{1F315}\u{1F316}\u{1F317}\u{1F318}\u{1F30D}\u{1F30F}\u{1F30E}\u{1F409}\u2600\u{1F4BB}\u{1F5A5}\u{1F4BE}\u{1F4BF}\u{1F602}\u2764\u{1F60D}\u{1F923}\u{1F60A}\u{1F64F}\u{1F495}\u{1F62D}\u{1F618}\u{1F44D}\u{1F605}\u{1F44F}\u{1F601}\u{1F525}\u{1F970}\u{1F494}\u{1F496}\u{1F499}\u{1F622}\u{1F914}\u{1F606}\u{1F644}\u{1F4AA}\u{1F609}\u263A\u{1F44C}\u{1F917}\u{1F49C}\u{1F614}\u{1F60E}\u{1F607}\u{1F339}\u{1F926}\u{1F389}\u{1F49E}\u270C\u2728\u{1F937}\u{1F631}\u{1F60C}\u{1F338}\u{1F64C}\u{1F60B}\u{1F497}\u{1F49A}\u{1F60F}\u{1F49B}\u{1F642}\u{1F493}\u{1F929}\u{1F604}\u{1F600}\u{1F5A4}\u{1F603}\u{1F4AF}\u{1F648}\u{1F447}\u{1F3B6}\u{1F612}\u{1F92D}\u2763\u{1F61C}\u{1F48B}\u{1F440}\u{1F62A}\u{1F611}\u{1F4A5}\u{1F64B}\u{1F61E}\u{1F629}\u{1F621}\u{1F92A}\u{1F44A}\u{1F973}\u{1F625}\u{1F924}\u{1F449}\u{1F483}\u{1F633}\u270B\u{1F61A}\u{1F61D}\u{1F634}\u{1F31F}\u{1F62C}\u{1F643}\u{1F340}\u{1F337}\u{1F63B}\u{1F613}\u2B50\u2705\u{1F97A}\u{1F308}\u{1F608}\u{1F918}\u{1F4A6}\u2714\u{1F623}\u{1F3C3}\u{1F490}\u2639\u{1F38A}\u{1F498}\u{1F620}\u261D\u{1F615}\u{1F33A}\u{1F382}\u{1F33B}\u{1F610}\u{1F595}\u{1F49D}\u{1F64A}\u{1F639}\u{1F5E3}\u{1F4AB}\u{1F480}\u{1F451}\u{1F3B5}\u{1F91E}\u{1F61B}\u{1F534}\u{1F624}\u{1F33C}\u{1F62B}\u26BD\u{1F919}\u2615\u{1F3C6}\u{1F92B}\u{1F448}\u{1F62E}\u{1F646}\u{1F37B}\u{1F343}\u{1F436}\u{1F481}\u{1F632}\u{1F33F}\u{1F9E1}\u{1F381}\u26A1\u{1F31E}\u{1F388}\u274C\u270A\u{1F44B}\u{1F630}\u{1F928}\u{1F636}\u{1F91D}\u{1F6B6}\u{1F4B0}\u{1F353}\u{1F4A2}\u{1F91F}\u{1F641}\u{1F6A8}\u{1F4A8}\u{1F92C}\u2708\u{1F380}\u{1F37A}\u{1F913}\u{1F619}\u{1F49F}\u{1F331}\u{1F616}\u{1F476}\u{1F974}\u25B6\u27A1\u2753\u{1F48E}\u{1F4B8}\u2B07\u{1F628}\u{1F31A}\u{1F98B}\u{1F637}\u{1F57A}\u26A0\u{1F645}\u{1F61F}\u{1F635}\u{1F44E}\u{1F932}\u{1F920}\u{1F927}\u{1F4CC}\u{1F535}\u{1F485}\u{1F9D0}\u{1F43E}\u{1F352}\u{1F617}\u{1F911}\u{1F30A}\u{1F92F}\u{1F437}\u260E\u{1F4A7}\u{1F62F}\u{1F486}\u{1F446}\u{1F3A4}\u{1F647}\u{1F351}\u2744\u{1F334}\u{1F4A3}\u{1F438}\u{1F48C}\u{1F4CD}\u{1F940}\u{1F922}\u{1F445}\u{1F4A1}\u{1F4A9}\u{1F450}\u{1F4F8}\u{1F47B}\u{1F910}\u{1F92E}\u{1F3BC}\u{1F975}\u{1F6A9}\u{1F34E}\u{1F34A}\u{1F47C}\u{1F48D}\u{1F4E3}\u{1F942}"
  ),
  qE = Ng.reduce((t, e, s) => ((t[s] = e), t), []),
  jE = Ng.reduce((t, e, s) => ((t[e.codePointAt(0)] = s), t), []);
function ME(t) {
  return t.reduce((e, s) => ((e += qE[s]), e), "");
}
function FE(t) {
  let e = [];
  for (let s of t) {
    let r = jE[s.codePointAt(0)];
    if (r === void 0) throw new Error(`Non-base256emoji character: ${s}`);
    e.push(r);
  }
  return new Uint8Array(e);
}
var $E = Mo({
    prefix: "\u{1F680}",
    name: "base256emoji",
    encode: ME,
    decode: FE,
  }),
  zE = Object.freeze({ __proto__: null, base256emoji: $E }),
  VE = Rg,
  sg = 128,
  HE = 127,
  KE = ~HE,
  GE = Math.pow(2, 31);
function Rg(t, e, s) {
  (e = e || []), (s = s || 0);
  for (var r = s; t >= GE; ) (e[s++] = (t & 255) | sg), (t /= 128);
  for (; t & KE; ) (e[s++] = (t & 255) | sg), (t >>>= 7);
  return (e[s] = t | 0), (Rg.bytes = s - r + 1), e;
}
var WE = Ol,
  YE = 128,
  rg = 127;
function Ol(t, r) {
  var s = 0,
    r = r || 0,
    n = 0,
    i = r,
    o,
    a = t.length;
  do {
    if (i >= a)
      throw ((Ol.bytes = 0), new RangeError("Could not decode varint"));
    (o = t[i++]),
      (s += n < 28 ? (o & rg) << n : (o & rg) * Math.pow(2, n)),
      (n += 7);
  } while (o >= YE);
  return (Ol.bytes = i - r), s;
}
var XE = Math.pow(2, 7),
  ZE = Math.pow(2, 14),
  JE = Math.pow(2, 21),
  QE = Math.pow(2, 28),
  ex = Math.pow(2, 35),
  tx = Math.pow(2, 42),
  sx = Math.pow(2, 49),
  rx = Math.pow(2, 56),
  nx = Math.pow(2, 63),
  ix = function (t) {
    return t < XE
      ? 1
      : t < ZE
      ? 2
      : t < JE
      ? 3
      : t < QE
      ? 4
      : t < ex
      ? 5
      : t < tx
      ? 6
      : t < sx
      ? 7
      : t < rx
      ? 8
      : t < nx
      ? 9
      : 10;
  },
  ox = { encode: VE, decode: WE, encodingLength: ix },
  kg = ox,
  ng = (t, e, s = 0) => (kg.encode(t, e, s), e),
  ig = (t) => kg.encodingLength(t),
  Nl = (t, e) => {
    let s = e.byteLength,
      r = ig(t),
      n = r + ig(s),
      i = new Uint8Array(n + s);
    return ng(t, i, 0), ng(s, i, r), i.set(e, n), new Rl(t, s, e, i);
  },
  Rl = class {
    constructor(e, s, r, n) {
      (this.code = e), (this.size = s), (this.digest = r), (this.bytes = n);
    }
  },
  Bg = ({ name: t, code: e, encode: s }) => new kl(t, e, s),
  kl = class {
    constructor(e, s, r) {
      (this.name = e), (this.code = s), (this.encode = r);
    }
    digest(e) {
      if (e instanceof Uint8Array) {
        let s = this.encode(e);
        return s instanceof Uint8Array
          ? Nl(this.code, s)
          : s.then((r) => Nl(this.code, r));
      } else throw Error("Unknown type, must be binary type");
    }
  },
  Ug = (t) => (e) =>
    f(void 0, null, function* () {
      return new Uint8Array(yield crypto.subtle.digest(t, e));
    }),
  ax = Bg({ name: "sha2-256", code: 18, encode: Ug("SHA-256") }),
  cx = Bg({ name: "sha2-512", code: 19, encode: Ug("SHA-512") }),
  lx = Object.freeze({ __proto__: null, sha256: ax, sha512: cx }),
  Lg = 0,
  ux = "identity",
  Dg = Pg,
  hx = (t) => Nl(Lg, Dg(t)),
  dx = { code: Lg, name: ux, encode: Dg, digest: hx },
  fx = Object.freeze({ __proto__: null, identity: dx });
new TextEncoder(), new TextDecoder();
var og = V(
  V(V(V(V(V(V(V(V(V({}, aE), lE), hE), fE), mE), TE), PE), RE), DE),
  zE
);
V(V({}, lx), fx);
function qg(t) {
  return globalThis.Buffer != null
    ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength)
    : t;
}
function px(t = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null
    ? qg(globalThis.Buffer.allocUnsafe(t))
    : new Uint8Array(t);
}
function jg(t, e, s, r) {
  return {
    name: t,
    prefix: e,
    encoder: { name: t, prefix: e, encode: s },
    decoder: { decode: r },
  };
}
var ag = jg(
    "utf8",
    "u",
    (t) => "u" + new TextDecoder("utf8").decode(t),
    (t) => new TextEncoder().encode(t.substring(1))
  ),
  xl = jg(
    "ascii",
    "a",
    (t) => {
      let e = "a";
      for (let s = 0; s < t.length; s++) e += String.fromCharCode(t[s]);
      return e;
    },
    (t) => {
      t = t.substring(1);
      let e = px(t.length);
      for (let s = 0; s < t.length; s++) e[s] = t.charCodeAt(s);
      return e;
    }
  ),
  gx = V(
    {
      utf8: ag,
      "utf-8": ag,
      hex: og.base16,
      latin1: xl,
      ascii: xl,
      binary: xl,
    },
    og
  );
function mx(t, e = "utf8") {
  let s = gx[e];
  if (!s) throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") &&
    globalThis.Buffer != null &&
    globalThis.Buffer.from != null
    ? qg(globalThis.Buffer.from(t, "utf-8"))
    : s.decoder.decode(`${s.prefix}${t}`);
}
var yx = Object.defineProperty,
  wx = (t, e, s) =>
    e in t
      ? yx(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (t[e] = s),
  is = (t, e, s) => wx(t, typeof e != "symbol" ? e + "" : e, s),
  Bl = class {
    constructor(e, s) {
      (this.core = e),
        (this.logger = s),
        is(this, "keychain", new Map()),
        is(this, "name", S1),
        is(this, "version", I1),
        is(this, "initialized", !1),
        is(this, "storagePrefix", as),
        is(this, "init", () =>
          f(this, null, function* () {
            if (!this.initialized) {
              let r = yield this.getKeyChain();
              typeof r < "u" && (this.keychain = r), (this.initialized = !0);
            }
          })
        ),
        is(this, "has", (r) => (this.isInitialized(), this.keychain.has(r))),
        is(this, "set", (r, n) =>
          f(this, null, function* () {
            this.isInitialized(), this.keychain.set(r, n), yield this.persist();
          })
        ),
        is(this, "get", (r) => {
          this.isInitialized();
          let n = this.keychain.get(r);
          if (typeof n > "u") {
            let { message: i } = F("NO_MATCHING_KEY", `${this.name}: ${r}`);
            throw new Error(i);
          }
          return n;
        }),
        is(this, "del", (r) =>
          f(this, null, function* () {
            this.isInitialized(), this.keychain.delete(r), yield this.persist();
          })
        ),
        (this.core = e),
        (this.logger = ot(s, this.name));
    }
    get context() {
      return qe(this.logger);
    }
    get storageKey() {
      return (
        this.storagePrefix +
        this.version +
        this.core.customStoragePrefix +
        "//" +
        this.name
      );
    }
    setKeyChain(e) {
      return f(this, null, function* () {
        yield this.core.storage.setItem(this.storageKey, _o(e));
      });
    }
    getKeyChain() {
      return f(this, null, function* () {
        let e = yield this.core.storage.getItem(this.storageKey);
        return typeof e < "u" ? To(e) : void 0;
      });
    }
    persist() {
      return f(this, null, function* () {
        yield this.setKeyChain(this.keychain);
      });
    }
    isInitialized() {
      if (!this.initialized) {
        let { message: e } = F("NOT_INITIALIZED", this.name);
        throw new Error(e);
      }
    }
  },
  bx = Object.defineProperty,
  vx = (t, e, s) =>
    e in t
      ? bx(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (t[e] = s),
  Ne = (t, e, s) => vx(t, typeof e != "symbol" ? e + "" : e, s),
  Ul = class {
    constructor(e, s, r) {
      (this.core = e),
        (this.logger = s),
        Ne(this, "name", E1),
        Ne(this, "keychain"),
        Ne(this, "randomSessionIdentifier", Lo()),
        Ne(this, "initialized", !1),
        Ne(this, "clientId"),
        Ne(this, "init", () =>
          f(this, null, function* () {
            this.initialized ||
              (yield this.keychain.init(), (this.initialized = !0));
          })
        ),
        Ne(
          this,
          "hasKeys",
          (n) => (this.isInitialized(), this.keychain.has(n))
        ),
        Ne(this, "getClientId", () =>
          f(this, null, function* () {
            if ((this.isInitialized(), this.clientId)) return this.clientId;
            let n = yield this.getClientSeed(),
              i = sa(n),
              o = th(i.publicKey);
            return (this.clientId = o), o;
          })
        ),
        Ne(this, "generateKeyPair", () => {
          this.isInitialized();
          let n = xp();
          return this.setPrivateKey(n.publicKey, n.privateKey);
        }),
        Ne(this, "signJWT", (n) =>
          f(this, null, function* () {
            this.isInitialized();
            let i = yield this.getClientSeed(),
              o = sa(i),
              a = this.randomSessionIdentifier;
            return yield sh(a, n, x1, o);
          })
        ),
        Ne(this, "generateSharedKey", (n, i, o) => {
          this.isInitialized();
          let a = this.getPrivateKey(n),
            c = Sp(a, i);
          return this.setSymKey(c, o);
        }),
        Ne(this, "setSymKey", (n, i) =>
          f(this, null, function* () {
            this.isInitialized();
            let o = i || Zr(n);
            return yield this.keychain.set(o, n), o;
          })
        ),
        Ne(this, "deleteKeyPair", (n) =>
          f(this, null, function* () {
            this.isInitialized(), yield this.keychain.del(n);
          })
        ),
        Ne(this, "deleteSymKey", (n) =>
          f(this, null, function* () {
            this.isInitialized(), yield this.keychain.del(n);
          })
        ),
        Ne(this, "encode", (n, i, o) =>
          f(this, null, function* () {
            this.isInitialized();
            let a = hl(o),
              c = gn(i);
            if (fl(a)) return Pp(c, o?.encoding);
            if (dl(a)) {
              let d = a.senderPublicKey,
                p = a.receiverPublicKey;
              n = yield this.generateSharedKey(d, p);
            }
            let l = this.getSymKey(n),
              { type: u, senderPublicKey: h } = a;
            return Ap({
              type: u,
              symKey: l,
              message: c,
              senderPublicKey: h,
              encoding: o?.encoding,
            });
          })
        ),
        Ne(this, "decode", (n, i, o) =>
          f(this, null, function* () {
            this.isInitialized();
            let a = Rp(i, o);
            if (fl(a)) {
              let c = Op(i, o?.encoding);
              return ta(c);
            }
            if (dl(a)) {
              let c = a.receiverPublicKey,
                l = a.senderPublicKey;
              n = yield this.generateSharedKey(c, l);
            }
            try {
              let c = this.getSymKey(n),
                l = Cp({ symKey: c, encoded: i, encoding: o?.encoding });
              return ta(l);
            } catch (c) {
              this.logger.error(
                `Failed to decode message from topic: '${n}', clientId: '${yield this.getClientId()}'`
              ),
                this.logger.error(c);
            }
          })
        ),
        Ne(this, "getPayloadType", (n, i = Ke) => {
          let o = Jr({ encoded: n, encoding: i });
          return Ys(o.type);
        }),
        Ne(this, "getPayloadSenderPublicKey", (n, i = Ke) => {
          let o = Jr({ encoded: n, encoding: i });
          return o.senderPublicKey ? ke(o.senderPublicKey, He) : void 0;
        }),
        (this.core = e),
        (this.logger = ot(s, this.name)),
        (this.keychain = r || new Bl(this.core, this.logger));
    }
    get context() {
      return qe(this.logger);
    }
    setPrivateKey(e, s) {
      return f(this, null, function* () {
        return yield this.keychain.set(e, s), e;
      });
    }
    getPrivateKey(e) {
      return this.keychain.get(e);
    }
    getClientSeed() {
      return f(this, null, function* () {
        let e = "";
        try {
          e = this.keychain.get(eg);
        } catch {
          (e = Lo()), yield this.keychain.set(eg, e);
        }
        return mx(e, "base16");
      });
    }
    getSymKey(e) {
      return this.keychain.get(e);
    }
    isInitialized() {
      if (!this.initialized) {
        let { message: e } = F("NOT_INITIALIZED", this.name);
        throw new Error(e);
      }
    }
  },
  Ex = Object.defineProperty,
  xx = Object.defineProperties,
  Sx = Object.getOwnPropertyDescriptors,
  cg = Object.getOwnPropertySymbols,
  Ix = Object.prototype.hasOwnProperty,
  _x = Object.prototype.propertyIsEnumerable,
  Ll = (t, e, s) =>
    e in t
      ? Ex(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (t[e] = s),
  Tx = (t, e) => {
    for (var s in e || (e = {})) Ix.call(e, s) && Ll(t, s, e[s]);
    if (cg) for (var s of cg(e)) _x.call(e, s) && Ll(t, s, e[s]);
    return t;
  },
  Ax = (t, e) => xx(t, Sx(e)),
  It = (t, e, s) => Ll(t, typeof e != "symbol" ? e + "" : e, s),
  Dl = class extends Ii {
    constructor(e, s) {
      super(e, s),
        (this.logger = e),
        (this.core = s),
        It(this, "messages", new Map()),
        It(this, "messagesWithoutClientAck", new Map()),
        It(this, "name", _1),
        It(this, "version", T1),
        It(this, "initialized", !1),
        It(this, "storagePrefix", as),
        It(this, "init", () =>
          f(this, null, function* () {
            if (!this.initialized) {
              this.logger.trace("Initialized");
              try {
                let r = yield this.getRelayerMessages();
                typeof r < "u" && (this.messages = r);
                let n = yield this.getRelayerMessagesWithoutClientAck();
                typeof n < "u" && (this.messagesWithoutClientAck = n),
                  this.logger.debug(
                    `Successfully Restored records for ${this.name}`
                  ),
                  this.logger.trace({
                    type: "method",
                    method: "restore",
                    size: this.messages.size,
                  });
              } catch (r) {
                this.logger.debug(`Failed to Restore records for ${this.name}`),
                  this.logger.error(r);
              } finally {
                this.initialized = !0;
              }
            }
          })
        ),
        It(this, "set", (r, n, i) =>
          f(this, null, function* () {
            this.isInitialized();
            let o = ft(n),
              a = this.messages.get(r);
            if ((typeof a > "u" && (a = {}), typeof a[o] < "u")) return o;
            if (((a[o] = n), this.messages.set(r, a), i === qo.inbound)) {
              let c = this.messagesWithoutClientAck.get(r) || {};
              this.messagesWithoutClientAck.set(r, Ax(Tx({}, c), { [o]: n }));
            }
            return yield this.persist(), o;
          })
        ),
        It(this, "get", (r) => {
          this.isInitialized();
          let n = this.messages.get(r);
          return typeof n > "u" && (n = {}), n;
        }),
        It(this, "getWithoutAck", (r) => {
          this.isInitialized();
          let n = {};
          for (let i of r) {
            let o = this.messagesWithoutClientAck.get(i) || {};
            n[i] = Object.values(o);
          }
          return n;
        }),
        It(this, "has", (r, n) => {
          this.isInitialized();
          let i = this.get(r),
            o = ft(n);
          return typeof i[o] < "u";
        }),
        It(this, "ack", (r, n) =>
          f(this, null, function* () {
            this.isInitialized();
            let i = this.messagesWithoutClientAck.get(r);
            if (typeof i > "u") return;
            let o = ft(n);
            delete i[o],
              Object.keys(i).length === 0
                ? this.messagesWithoutClientAck.delete(r)
                : this.messagesWithoutClientAck.set(r, i),
              yield this.persist();
          })
        ),
        It(this, "del", (r) =>
          f(this, null, function* () {
            this.isInitialized(),
              this.messages.delete(r),
              this.messagesWithoutClientAck.delete(r),
              yield this.persist();
          })
        ),
        (this.logger = ot(e, this.name)),
        (this.core = s);
    }
    get context() {
      return qe(this.logger);
    }
    get storageKey() {
      return (
        this.storagePrefix +
        this.version +
        this.core.customStoragePrefix +
        "//" +
        this.name
      );
    }
    get storageKeyWithoutClientAck() {
      return (
        this.storagePrefix +
        this.version +
        this.core.customStoragePrefix +
        "//" +
        this.name +
        "_withoutClientAck"
      );
    }
    setRelayerMessages(e) {
      return f(this, null, function* () {
        yield this.core.storage.setItem(this.storageKey, _o(e));
      });
    }
    setRelayerMessagesWithoutClientAck(e) {
      return f(this, null, function* () {
        yield this.core.storage.setItem(this.storageKeyWithoutClientAck, _o(e));
      });
    }
    getRelayerMessages() {
      return f(this, null, function* () {
        let e = yield this.core.storage.getItem(this.storageKey);
        return typeof e < "u" ? To(e) : void 0;
      });
    }
    getRelayerMessagesWithoutClientAck() {
      return f(this, null, function* () {
        let e = yield this.core.storage.getItem(
          this.storageKeyWithoutClientAck
        );
        return typeof e < "u" ? To(e) : void 0;
      });
    }
    persist() {
      return f(this, null, function* () {
        yield this.setRelayerMessages(this.messages),
          yield this.setRelayerMessagesWithoutClientAck(
            this.messagesWithoutClientAck
          );
      });
    }
    isInitialized() {
      if (!this.initialized) {
        let { message: e } = F("NOT_INITIALIZED", this.name);
        throw new Error(e);
      }
    }
  },
  Cx = Object.defineProperty,
  Px = Object.defineProperties,
  Ox = Object.getOwnPropertyDescriptors,
  lg = Object.getOwnPropertySymbols,
  Nx = Object.prototype.hasOwnProperty,
  Rx = Object.prototype.propertyIsEnumerable,
  ql = (t, e, s) =>
    e in t
      ? Cx(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (t[e] = s),
  tn = (t, e) => {
    for (var s in e || (e = {})) Nx.call(e, s) && ql(t, s, e[s]);
    if (lg) for (var s of lg(e)) Rx.call(e, s) && ql(t, s, e[s]);
    return t;
  },
  ug = (t, e) => Px(t, Ox(e)),
  Bt = (t, e, s) => ql(t, typeof e != "symbol" ? e + "" : e, s),
  jl = class extends _i {
    constructor(e, s) {
      super(e, s),
        (this.relayer = e),
        (this.logger = s),
        Bt(this, "events", new Cs.EventEmitter()),
        Bt(this, "name", C1),
        Bt(this, "queue", new Map()),
        Bt(this, "publishTimeout", (0, K.toMiliseconds)(K.ONE_MINUTE)),
        Bt(
          this,
          "initialPublishTimeout",
          (0, K.toMiliseconds)(K.ONE_SECOND * 15)
        ),
        Bt(this, "needsTransportRestart", !1),
        Bt(this, "publish", (r, n, i) =>
          f(this, null, function* () {
            var o, a, c, l, u;
            this.logger.debug("Publishing Payload"),
              this.logger.trace({
                type: "method",
                method: "publish",
                params: { topic: r, message: n, opts: i },
              });
            let h = i?.ttl || A1,
              d = i?.prompt || !1,
              p = i?.tag || 0,
              m = i?.id || hs().toString(),
              g = _r(Zn().protocol),
              w = {
                id: m,
                method: i?.publishMethod || g.publish,
                params: tn(
                  {
                    topic: r,
                    message: n,
                    ttl: h,
                    prompt: d,
                    tag: p,
                    attestation: i?.attestation,
                  },
                  i?.tvf
                ),
              },
              R = `Failed to publish payload, please try again. id:${m} tag:${p}`;
            try {
              Ie((o = w.params) == null ? void 0 : o.prompt) &&
                ((a = w.params) == null || delete a.prompt),
                Ie((c = w.params) == null ? void 0 : c.tag) &&
                  ((l = w.params) == null || delete l.tag);
              let B = new Promise((T) =>
                f(this, null, function* () {
                  let S = ({ id: O }) => {
                    var U;
                    ((U = w.id) == null ? void 0 : U.toString()) ===
                      O.toString() &&
                      (this.removeRequestFromQueue(O),
                      this.relayer.events.removeListener(Se.publish, S),
                      T());
                  };
                  this.relayer.events.on(Se.publish, S);
                  let A = Yt(
                    new Promise((O, U) => {
                      this.rpcPublish(w, i)
                        .then(O)
                        .catch((q) => {
                          this.logger.warn(q, q?.message), U(q);
                        });
                    }),
                    this.initialPublishTimeout,
                    `Failed initial publish, retrying.... id:${m} tag:${p}`
                  );
                  try {
                    yield A, this.events.removeListener(Se.publish, S);
                  } catch (O) {
                    this.queue.set(m, { request: w, opts: i, attempt: 1 }),
                      this.logger.warn(O, O?.message);
                  }
                })
              );
              this.logger.trace({
                type: "method",
                method: "publish",
                params: { id: m, topic: r, message: n, opts: i },
              }),
                yield Yt(B, this.publishTimeout, R);
            } catch (B) {
              if (
                (this.logger.debug("Failed to Publish Payload"),
                this.logger.error(B),
                (u = i?.internal) != null && u.throwOnFailedPublish)
              )
                throw B;
            } finally {
              this.queue.delete(m);
            }
          })
        ),
        Bt(this, "publishCustom", (r) =>
          f(this, null, function* () {
            var n, i, o, a, c;
            this.logger.debug("Publishing custom payload"),
              this.logger.trace({
                type: "method",
                method: "publishCustom",
                params: r,
              });
            let { payload: l, opts: u = {} } = r,
              {
                attestation: h,
                tvf: d,
                publishMethod: p,
                prompt: m,
                tag: g,
                ttl: w = K.FIVE_MINUTES,
              } = u,
              R = u.id || hs().toString(),
              B = _r(Zn().protocol),
              T = p || B.publish,
              S = {
                id: R,
                method: T,
                params: tn(
                  ug(tn({}, l), { ttl: w, prompt: m, tag: g, attestation: h }),
                  d
                ),
              },
              A = `Failed to publish custom payload, please try again. id:${R} tag:${g}`;
            try {
              Ie((n = S.params) == null ? void 0 : n.prompt) &&
                ((i = S.params) == null || delete i.prompt),
                Ie((o = S.params) == null ? void 0 : o.tag) &&
                  ((a = S.params) == null || delete a.tag);
              let O = new Promise((U) =>
                f(this, null, function* () {
                  let q = ({ id: $ }) => {
                    var j;
                    ((j = S.id) == null ? void 0 : j.toString()) ===
                      $.toString() &&
                      (this.removeRequestFromQueue($),
                      this.relayer.events.removeListener(Se.publish, q),
                      U());
                  };
                  this.relayer.events.on(Se.publish, q);
                  let N = Yt(
                    new Promise(($, j) => {
                      this.rpcPublish(S, u)
                        .then($)
                        .catch((P) => {
                          this.logger.warn(P, P?.message), j(P);
                        });
                    }),
                    this.initialPublishTimeout,
                    `Failed initial custom payload publish, retrying.... method:${T} id:${R} tag:${g}`
                  );
                  try {
                    yield N, this.events.removeListener(Se.publish, q);
                  } catch ($) {
                    this.queue.set(R, { request: S, opts: u, attempt: 1 }),
                      this.logger.warn($, $?.message);
                  }
                })
              );
              this.logger.trace({
                type: "method",
                method: "publish",
                params: { id: R, payload: l, opts: u },
              }),
                yield Yt(O, this.publishTimeout, A);
            } catch (O) {
              if (
                (this.logger.debug("Failed to Publish Payload"),
                this.logger.error(O),
                (c = u?.internal) != null && c.throwOnFailedPublish)
              )
                throw O;
            } finally {
              this.queue.delete(R);
            }
          })
        ),
        Bt(this, "on", (r, n) => {
          this.events.on(r, n);
        }),
        Bt(this, "once", (r, n) => {
          this.events.once(r, n);
        }),
        Bt(this, "off", (r, n) => {
          this.events.off(r, n);
        }),
        Bt(this, "removeListener", (r, n) => {
          this.events.removeListener(r, n);
        }),
        (this.relayer = e),
        (this.logger = ot(s, this.name)),
        this.registerEventListeners();
    }
    get context() {
      return qe(this.logger);
    }
    rpcPublish(e, s) {
      return f(this, null, function* () {
        this.logger.debug("Outgoing Relay Payload"),
          this.logger.trace({
            type: "message",
            direction: "outgoing",
            request: e,
          });
        let r = yield this.relayer.request(e);
        return (
          this.relayer.events.emit(Se.publish, tn(tn({}, e), s)),
          this.logger.debug("Successfully Published Payload"),
          r
        );
      });
    }
    removeRequestFromQueue(e) {
      this.queue.delete(e);
    }
    checkQueue() {
      this.queue.forEach((e, s) =>
        f(this, null, function* () {
          var r;
          let n = e.attempt + 1;
          this.queue.set(s, ug(tn({}, e), { attempt: n })),
            this.logger.warn(
              {},
              `Publisher: queue->publishing: ${e.request.id}, tag: ${
                (r = e.request.params) == null ? void 0 : r.tag
              }, attempt: ${n}`
            ),
            yield this.rpcPublish(e.request, e.opts),
            this.logger.warn(
              {},
              `Publisher: queue->published: ${e.request.id}`
            );
        })
      );
    }
    registerEventListeners() {
      this.relayer.core.heartbeat.on(ir.pulse, () => {
        if (this.needsTransportRestart) {
          (this.needsTransportRestart = !1),
            this.relayer.events.emit(Se.connection_stalled);
          return;
        }
        this.checkQueue();
      }),
        this.relayer.on(Se.message_ack, (e) => {
          this.removeRequestFromQueue(e.id.toString());
        });
    }
  },
  kx = Object.defineProperty,
  Bx = (t, e, s) =>
    e in t
      ? kx(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (t[e] = s),
  sn = (t, e, s) => Bx(t, typeof e != "symbol" ? e + "" : e, s),
  Ml = class {
    constructor() {
      sn(this, "map", new Map()),
        sn(this, "set", (e, s) => {
          let r = this.get(e);
          this.exists(e, s) || this.map.set(e, [...r, s]);
        }),
        sn(this, "get", (e) => this.map.get(e) || []),
        sn(this, "exists", (e, s) => this.get(e).includes(s)),
        sn(this, "delete", (e, s) => {
          if (typeof s > "u") {
            this.map.delete(e);
            return;
          }
          if (!this.map.has(e)) return;
          let r = this.get(e);
          if (!this.exists(e, s)) return;
          let n = r.filter((i) => i !== s);
          if (!n.length) {
            this.map.delete(e);
            return;
          }
          this.map.set(e, n);
        }),
        sn(this, "clear", () => {
          this.map.clear();
        });
    }
    get topics() {
      return Array.from(this.map.keys());
    }
  },
  Ux = Object.defineProperty,
  Lx = Object.defineProperties,
  Dx = Object.getOwnPropertyDescriptors,
  hg = Object.getOwnPropertySymbols,
  qx = Object.prototype.hasOwnProperty,
  jx = Object.prototype.propertyIsEnumerable,
  Fl = (t, e, s) =>
    e in t
      ? Ux(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (t[e] = s),
  ti = (t, e) => {
    for (var s in e || (e = {})) qx.call(e, s) && Fl(t, s, e[s]);
    if (hg) for (var s of hg(e)) jx.call(e, s) && Fl(t, s, e[s]);
    return t;
  },
  Sl = (t, e) => Lx(t, Dx(e)),
  pe = (t, e, s) => Fl(t, typeof e != "symbol" ? e + "" : e, s),
  $l = class extends Ci {
    constructor(e, s) {
      super(e, s),
        (this.relayer = e),
        (this.logger = s),
        pe(this, "subscriptions", new Map()),
        pe(this, "topicMap", new Ml()),
        pe(this, "events", new Cs.EventEmitter()),
        pe(this, "name", U1),
        pe(this, "version", L1),
        pe(this, "pending", new Map()),
        pe(this, "cached", []),
        pe(this, "initialized", !1),
        pe(this, "storagePrefix", as),
        pe(this, "subscribeTimeout", (0, K.toMiliseconds)(K.ONE_MINUTE)),
        pe(
          this,
          "initialSubscribeTimeout",
          (0, K.toMiliseconds)(K.ONE_SECOND * 15)
        ),
        pe(this, "clientId"),
        pe(this, "batchSubscribeTopicsLimit", 500),
        pe(this, "init", () =>
          f(this, null, function* () {
            this.initialized ||
              (this.logger.trace("Initialized"),
              this.registerEventListeners(),
              yield this.restore()),
              (this.initialized = !0);
          })
        ),
        pe(this, "subscribe", (r, n) =>
          f(this, null, function* () {
            var i;
            this.isInitialized(),
              this.logger.debug("Subscribing Topic"),
              this.logger.trace({
                type: "method",
                method: "subscribe",
                params: { topic: r, opts: n },
              });
            try {
              let o = Zn(n),
                a = { topic: r, relay: o, transportType: n?.transportType };
              ((i = n?.internal) != null && i.skipSubscribe) ||
                this.pending.set(r, a);
              let c = yield this.rpcSubscribe(r, o, n);
              return (
                typeof c == "string" &&
                  (this.onSubscribe(c, a),
                  this.logger.debug("Successfully Subscribed Topic"),
                  this.logger.trace({
                    type: "method",
                    method: "subscribe",
                    params: { topic: r, opts: n },
                  })),
                c
              );
            } catch (o) {
              throw (
                (this.logger.debug("Failed to Subscribe Topic"),
                this.logger.error(o),
                o)
              );
            }
          })
        ),
        pe(this, "unsubscribe", (r, n) =>
          f(this, null, function* () {
            this.isInitialized(),
              typeof n?.id < "u"
                ? yield this.unsubscribeById(r, n.id, n)
                : yield this.unsubscribeByTopic(r, n);
          })
        ),
        pe(
          this,
          "isSubscribed",
          (r) =>
            new Promise((n) => {
              n(this.topicMap.topics.includes(r));
            })
        ),
        pe(
          this,
          "isKnownTopic",
          (r) =>
            new Promise((n) => {
              n(
                this.topicMap.topics.includes(r) ||
                  this.pending.has(r) ||
                  this.cached.some((i) => i.topic === r)
              );
            })
        ),
        pe(this, "on", (r, n) => {
          this.events.on(r, n);
        }),
        pe(this, "once", (r, n) => {
          this.events.once(r, n);
        }),
        pe(this, "off", (r, n) => {
          this.events.off(r, n);
        }),
        pe(this, "removeListener", (r, n) => {
          this.events.removeListener(r, n);
        }),
        pe(this, "start", () =>
          f(this, null, function* () {
            yield this.onConnect();
          })
        ),
        pe(this, "stop", () =>
          f(this, null, function* () {
            yield this.onDisconnect();
          })
        ),
        pe(this, "restart", () =>
          f(this, null, function* () {
            yield this.restore(), yield this.onRestart();
          })
        ),
        pe(this, "checkPending", () =>
          f(this, null, function* () {
            if (
              this.pending.size === 0 &&
              (!this.initialized || !this.relayer.connected)
            )
              return;
            let r = [];
            this.pending.forEach((n) => {
              r.push(n);
            }),
              yield this.batchSubscribe(r);
          })
        ),
        pe(this, "registerEventListeners", () => {
          this.relayer.core.heartbeat.on(ir.pulse, () =>
            f(this, null, function* () {
              yield this.checkPending();
            })
          ),
            this.events.on(_t.created, (r) =>
              f(this, null, function* () {
                let n = _t.created;
                this.logger.info(`Emitting ${n}`),
                  this.logger.debug({ type: "event", event: n, data: r }),
                  yield this.persist();
              })
            ),
            this.events.on(_t.deleted, (r) =>
              f(this, null, function* () {
                let n = _t.deleted;
                this.logger.info(`Emitting ${n}`),
                  this.logger.debug({ type: "event", event: n, data: r }),
                  yield this.persist();
              })
            );
        }),
        (this.relayer = e),
        (this.logger = ot(s, this.name)),
        (this.clientId = "");
    }
    get context() {
      return qe(this.logger);
    }
    get storageKey() {
      return (
        this.storagePrefix +
        this.version +
        this.relayer.core.customStoragePrefix +
        "//" +
        this.name
      );
    }
    get length() {
      return this.subscriptions.size;
    }
    get ids() {
      return Array.from(this.subscriptions.keys());
    }
    get values() {
      return Array.from(this.subscriptions.values());
    }
    get topics() {
      return this.topicMap.topics;
    }
    get hasAnyTopics() {
      return (
        this.topicMap.topics.length > 0 ||
        this.pending.size > 0 ||
        this.cached.length > 0 ||
        this.subscriptions.size > 0
      );
    }
    hasSubscription(e, s) {
      let r = !1;
      try {
        r = this.getSubscription(e).topic === s;
      } catch {}
      return r;
    }
    reset() {
      (this.cached = []), (this.initialized = !0);
    }
    onDisable() {
      this.values.length > 0 && (this.cached = this.values),
        this.subscriptions.clear(),
        this.topicMap.clear();
    }
    unsubscribeByTopic(e, s) {
      return f(this, null, function* () {
        let r = this.topicMap.get(e);
        yield Promise.all(
          r.map((n) =>
            f(this, null, function* () {
              return yield this.unsubscribeById(e, n, s);
            })
          )
        );
      });
    }
    unsubscribeById(e, s, r) {
      return f(this, null, function* () {
        this.logger.debug("Unsubscribing Topic"),
          this.logger.trace({
            type: "method",
            method: "unsubscribe",
            params: { topic: e, id: s, opts: r },
          });
        try {
          let n = Zn(r);
          yield this.restartToComplete({ topic: e, id: s, relay: n }),
            yield this.rpcUnsubscribe(e, s, n);
          let i = fe("USER_DISCONNECTED", `${this.name}, ${e}`);
          yield this.onUnsubscribe(e, s, i),
            this.logger.debug("Successfully Unsubscribed Topic"),
            this.logger.trace({
              type: "method",
              method: "unsubscribe",
              params: { topic: e, id: s, opts: r },
            });
        } catch (n) {
          throw (
            (this.logger.debug("Failed to Unsubscribe Topic"),
            this.logger.error(n),
            n)
          );
        }
      });
    }
    rpcSubscribe(e, s, r) {
      return f(this, null, function* () {
        var n, i;
        let o = yield this.getSubscriptionId(e);
        if ((n = r?.internal) != null && n.skipSubscribe) return o;
        (!r || r?.transportType === me.relay) &&
          (yield this.restartToComplete({ topic: e, id: e, relay: s }));
        let a = { method: _r(s.protocol).subscribe, params: { topic: e } };
        this.logger.debug("Outgoing Relay Payload"),
          this.logger.trace({
            type: "payload",
            direction: "outgoing",
            request: a,
          });
        let c = (i = r?.internal) == null ? void 0 : i.throwOnFailedPublish;
        try {
          if (r?.transportType === me.link_mode)
            return (
              setTimeout(() => {
                (this.relayer.connected || this.relayer.connecting) &&
                  this.relayer.request(a).catch((h) => this.logger.warn(h));
              }, (0, K.toMiliseconds)(K.ONE_SECOND)),
              o
            );
          let l = new Promise((h) =>
              f(this, null, function* () {
                let d = (p) => {
                  p.topic === e &&
                    (this.events.removeListener(_t.created, d), h(p.id));
                };
                this.events.on(_t.created, d);
                try {
                  let p = yield Yt(
                    new Promise((m, g) => {
                      this.relayer
                        .request(a)
                        .catch((w) => {
                          this.logger.warn(w, w?.message), g(w);
                        })
                        .then(m);
                    }),
                    this.initialSubscribeTimeout,
                    `Subscribing to ${e} failed, please try again`
                  );
                  this.events.removeListener(_t.created, d), h(p);
                } catch {}
              })
            ),
            u = yield Yt(
              l,
              this.subscribeTimeout,
              `Subscribing to ${e} failed, please try again`
            );
          if (!u && c)
            throw new Error(`Subscribing to ${e} failed, please try again`);
          return u ? o : null;
        } catch (l) {
          if (
            (this.logger.debug("Outgoing Relay Subscribe Payload stalled"),
            this.relayer.events.emit(Se.connection_stalled),
            c)
          )
            throw l;
        }
        return null;
      });
    }
    rpcBatchSubscribe(e) {
      return f(this, null, function* () {
        if (!e.length) return;
        let s = e[0].relay,
          r = {
            method: _r(s.protocol).batchSubscribe,
            params: { topics: e.map((n) => n.topic) },
          };
        this.logger.debug("Outgoing Relay Payload"),
          this.logger.trace({
            type: "payload",
            direction: "outgoing",
            request: r,
          });
        try {
          yield yield Yt(
            new Promise((n) => {
              this.relayer
                .request(r)
                .catch((i) => this.logger.warn(i))
                .then(n);
            }),
            this.subscribeTimeout,
            "rpcBatchSubscribe failed, please try again"
          );
        } catch {
          this.relayer.events.emit(Se.connection_stalled);
        }
      });
    }
    rpcBatchFetchMessages(e) {
      return f(this, null, function* () {
        if (!e.length) return;
        let s = e[0].relay,
          r = {
            method: _r(s.protocol).batchFetchMessages,
            params: { topics: e.map((i) => i.topic) },
          };
        this.logger.debug("Outgoing Relay Payload"),
          this.logger.trace({
            type: "payload",
            direction: "outgoing",
            request: r,
          });
        let n;
        try {
          n = yield yield Yt(
            new Promise((i, o) => {
              this.relayer
                .request(r)
                .catch((a) => {
                  this.logger.warn(a), o(a);
                })
                .then(i);
            }),
            this.subscribeTimeout,
            "rpcBatchFetchMessages failed, please try again"
          );
        } catch {
          this.relayer.events.emit(Se.connection_stalled);
        }
        return n;
      });
    }
    rpcUnsubscribe(e, s, r) {
      let n = {
        method: _r(r.protocol).unsubscribe,
        params: { topic: e, id: s },
      };
      return (
        this.logger.debug("Outgoing Relay Payload"),
        this.logger.trace({
          type: "payload",
          direction: "outgoing",
          request: n,
        }),
        this.relayer.request(n)
      );
    }
    onSubscribe(e, s) {
      this.setSubscription(e, Sl(ti({}, s), { id: e })),
        this.pending.delete(s.topic);
    }
    onBatchSubscribe(e) {
      e.length &&
        e.forEach((s) => {
          this.setSubscription(s.id, ti({}, s)), this.pending.delete(s.topic);
        });
    }
    onUnsubscribe(e, s, r) {
      return f(this, null, function* () {
        this.events.removeAllListeners(s),
          this.hasSubscription(s, e) && this.deleteSubscription(s, r),
          yield this.relayer.messages.del(e);
      });
    }
    setRelayerSubscriptions(e) {
      return f(this, null, function* () {
        yield this.relayer.core.storage.setItem(this.storageKey, e);
      });
    }
    getRelayerSubscriptions() {
      return f(this, null, function* () {
        return yield this.relayer.core.storage.getItem(this.storageKey);
      });
    }
    setSubscription(e, s) {
      this.logger.debug("Setting subscription"),
        this.logger.trace({
          type: "method",
          method: "setSubscription",
          id: e,
          subscription: s,
        }),
        this.addSubscription(e, s);
    }
    addSubscription(e, s) {
      this.subscriptions.set(e, ti({}, s)),
        this.topicMap.set(s.topic, e),
        this.events.emit(_t.created, s);
    }
    getSubscription(e) {
      this.logger.debug("Getting subscription"),
        this.logger.trace({ type: "method", method: "getSubscription", id: e });
      let s = this.subscriptions.get(e);
      if (!s) {
        let { message: r } = F("NO_MATCHING_KEY", `${this.name}: ${e}`);
        throw new Error(r);
      }
      return s;
    }
    deleteSubscription(e, s) {
      this.logger.debug("Deleting subscription"),
        this.logger.trace({
          type: "method",
          method: "deleteSubscription",
          id: e,
          reason: s,
        });
      let r = this.getSubscription(e);
      this.subscriptions.delete(e),
        this.topicMap.delete(r.topic, e),
        this.events.emit(_t.deleted, Sl(ti({}, r), { reason: s }));
    }
    persist() {
      return f(this, null, function* () {
        yield this.setRelayerSubscriptions(this.values),
          this.events.emit(_t.sync);
      });
    }
    onRestart() {
      return f(this, null, function* () {
        if (this.cached.length) {
          let e = [...this.cached],
            s = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
          for (let r = 0; r < s; r++) {
            let n = e.splice(0, this.batchSubscribeTopicsLimit);
            yield this.batchSubscribe(n);
          }
        }
        this.events.emit(_t.resubscribed);
      });
    }
    restore() {
      return f(this, null, function* () {
        try {
          let e = yield this.getRelayerSubscriptions();
          if (typeof e > "u" || !e.length) return;
          if (
            this.subscriptions.size &&
            !e.every((s) => {
              var r;
              return (
                s.topic ===
                ((r = this.subscriptions.get(s.id)) == null ? void 0 : r.topic)
              );
            })
          ) {
            let { message: s } = F("RESTORE_WILL_OVERRIDE", this.name);
            throw (
              (this.logger.error(s),
              this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`),
              new Error(s))
            );
          }
          (this.cached = e),
            this.logger.debug(
              `Successfully Restored subscriptions for ${this.name}`
            ),
            this.logger.trace({
              type: "method",
              method: "restore",
              subscriptions: this.values,
            });
        } catch (e) {
          this.logger.debug(`Failed to Restore subscriptions for ${this.name}`),
            this.logger.error(e);
        }
      });
    }
    batchSubscribe(e) {
      return f(this, null, function* () {
        e.length &&
          (yield this.rpcBatchSubscribe(e),
          this.onBatchSubscribe(
            yield Promise.all(
              e.map((s) =>
                f(this, null, function* () {
                  return Sl(ti({}, s), {
                    id: yield this.getSubscriptionId(s.topic),
                  });
                })
              )
            )
          ));
      });
    }
    batchFetchMessages(e) {
      return f(this, null, function* () {
        if (!e.length) return;
        this.logger.trace(
          `Fetching batch messages for ${e.length} subscriptions`
        );
        let s = yield this.rpcBatchFetchMessages(e);
        s &&
          s.messages &&
          (yield Cf((0, K.toMiliseconds)(K.ONE_SECOND)),
          yield this.relayer.handleBatchMessageEvents(s.messages));
      });
    }
    onConnect() {
      return f(this, null, function* () {
        yield this.restart(), this.reset();
      });
    }
    onDisconnect() {
      this.onDisable();
    }
    isInitialized() {
      if (!this.initialized) {
        let { message: e } = F("NOT_INITIALIZED", this.name);
        throw new Error(e);
      }
    }
    restartToComplete(e) {
      return f(this, null, function* () {
        !this.relayer.connected &&
          !this.relayer.connecting &&
          (this.cached.push(e), yield this.relayer.transportOpen());
      });
    }
    getClientId() {
      return f(this, null, function* () {
        return (
          this.clientId ||
            (this.clientId = yield this.relayer.core.crypto.getClientId()),
          this.clientId
        );
      });
    }
    getSubscriptionId(e) {
      return f(this, null, function* () {
        return ft(e + (yield this.getClientId()));
      });
    }
  },
  Mx = Object.defineProperty,
  dg = Object.getOwnPropertySymbols,
  Fx = Object.prototype.hasOwnProperty,
  $x = Object.prototype.propertyIsEnumerable,
  zl = (t, e, s) =>
    e in t
      ? Mx(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (t[e] = s),
  fg = (t, e) => {
    for (var s in e || (e = {})) Fx.call(e, s) && zl(t, s, e[s]);
    if (dg) for (var s of dg(e)) $x.call(e, s) && zl(t, s, e[s]);
    return t;
  },
  ae = (t, e, s) => zl(t, typeof e != "symbol" ? e + "" : e, s),
  Vl = class extends Ti {
    constructor(e) {
      var s;
      super(e),
        ae(this, "protocol", "wc"),
        ae(this, "version", 2),
        ae(this, "core"),
        ae(this, "logger"),
        ae(this, "events", new Cs.EventEmitter()),
        ae(this, "provider"),
        ae(this, "messages"),
        ae(this, "subscriber"),
        ae(this, "publisher"),
        ae(this, "name", O1),
        ae(this, "transportExplicitlyClosed", !1),
        ae(this, "initialized", !1),
        ae(this, "connectionAttemptInProgress", !1),
        ae(this, "relayUrl"),
        ae(this, "projectId"),
        ae(this, "packageName"),
        ae(this, "bundleId"),
        ae(this, "hasExperiencedNetworkDisruption", !1),
        ae(this, "pingTimeout"),
        ae(
          this,
          "heartBeatTimeout",
          (0, K.toMiliseconds)(K.THIRTY_SECONDS + K.FIVE_SECONDS)
        ),
        ae(this, "reconnectTimeout"),
        ae(this, "connectPromise"),
        ae(this, "reconnectInProgress", !1),
        ae(this, "requestsInFlight", []),
        ae(this, "connectTimeout", (0, K.toMiliseconds)(K.ONE_SECOND * 15)),
        ae(this, "request", (r) =>
          f(this, null, function* () {
            var n, i;
            this.logger.debug("Publishing Request Payload");
            let o = r.id || hs().toString();
            yield this.toEstablishConnection();
            try {
              this.logger.trace(
                {
                  id: o,
                  method: r.method,
                  topic: (n = r.params) == null ? void 0 : n.topic,
                },
                "relayer.request - publishing..."
              );
              let a = `${o}:${((i = r.params) == null ? void 0 : i.tag) || ""}`;
              this.requestsInFlight.push(a);
              let c = yield this.provider.request(r);
              return (
                (this.requestsInFlight = this.requestsInFlight.filter(
                  (l) => l !== a
                )),
                c
              );
            } catch (a) {
              throw (this.logger.debug(`Failed to Publish Request: ${o}`), a);
            }
          })
        ),
        ae(this, "resetPingTimeout", () => {
          zn() &&
            (clearTimeout(this.pingTimeout),
            (this.pingTimeout = setTimeout(() => {
              var r, n, i, o;
              try {
                this.logger.debug(
                  {},
                  "pingTimeout: Connection stalled, terminating..."
                ),
                  (o =
                    (i =
                      (n =
                        (r = this.provider) == null ? void 0 : r.connection) ==
                      null
                        ? void 0
                        : n.socket) == null
                      ? void 0
                      : i.terminate) == null || o.call(i);
              } catch (a) {
                this.logger.warn(a, a?.message);
              }
            }, this.heartBeatTimeout)));
        }),
        ae(this, "onPayloadHandler", (r) => {
          this.onProviderPayload(r), this.resetPingTimeout();
        }),
        ae(this, "onConnectHandler", () => {
          this.logger.warn({}, "Relayer connected \u{1F6DC}"),
            this.startPingTimeout(),
            this.events.emit(Se.connect);
        }),
        ae(this, "onDisconnectHandler", () => {
          this.logger.warn({}, "Relayer disconnected \u{1F6D1}"),
            (this.requestsInFlight = []),
            this.onProviderDisconnect();
        }),
        ae(this, "onProviderErrorHandler", (r) => {
          this.logger.fatal(`Fatal socket error: ${r.message}`),
            this.events.emit(Se.error, r),
            this.logger.fatal("Fatal socket error received, closing transport"),
            this.transportClose();
        }),
        ae(this, "registerProviderListeners", () => {
          this.provider.on(kt.payload, this.onPayloadHandler),
            this.provider.on(kt.connect, this.onConnectHandler),
            this.provider.on(kt.disconnect, this.onDisconnectHandler),
            this.provider.on(kt.error, this.onProviderErrorHandler);
        }),
        (this.core = e.core),
        (this.logger = en({
          logger: (s = e.logger) != null ? s : P1,
          name: this.name,
        })),
        (this.messages = new Dl(this.logger, e.core)),
        (this.subscriber = new $l(this, this.logger)),
        (this.publisher = new jl(this, this.logger)),
        (this.projectId = e?.projectId),
        (this.relayUrl = e?.relayUrl || Ag),
        wf() ? (this.packageName = Hc()) : bf() && (this.bundleId = Hc()),
        (this.provider = {});
    }
    init() {
      return f(this, null, function* () {
        this.logger.trace("Initialized"),
          this.registerEventListeners(),
          yield Promise.all([this.messages.init(), this.subscriber.init()]),
          (this.initialized = !0),
          this.transportOpen().catch((e) => this.logger.warn(e, e?.message));
      });
    }
    get context() {
      return qe(this.logger);
    }
    get connected() {
      var e, s, r;
      return (
        ((r =
          (s = (e = this.provider) == null ? void 0 : e.connection) == null
            ? void 0
            : s.socket) == null
          ? void 0
          : r.readyState) === 1 || !1
      );
    }
    get connecting() {
      var e, s, r;
      return (
        ((r =
          (s = (e = this.provider) == null ? void 0 : e.connection) == null
            ? void 0
            : s.socket) == null
          ? void 0
          : r.readyState) === 0 ||
        this.connectPromise !== void 0 ||
        !1
      );
    }
    publish(e, s, r) {
      return f(this, null, function* () {
        this.isInitialized(),
          yield this.publisher.publish(e, s, r),
          yield this.recordMessageEvent(
            {
              topic: e,
              message: s,
              publishedAt: Date.now(),
              transportType: me.relay,
            },
            qo.outbound
          );
      });
    }
    publishCustom(e) {
      return f(this, null, function* () {
        this.isInitialized(), yield this.publisher.publishCustom(e);
      });
    }
    subscribe(e, s) {
      return f(this, null, function* () {
        var r, n, i;
        this.isInitialized(),
          (!(s != null && s.transportType) || s?.transportType === "relay") &&
            (yield this.toEstablishConnection());
        let o =
            typeof ((r = s?.internal) == null
              ? void 0
              : r.throwOnFailedPublish) > "u"
              ? !0
              : (n = s?.internal) == null
              ? void 0
              : n.throwOnFailedPublish,
          a =
            ((i = this.subscriber.topicMap.get(e)) == null ? void 0 : i[0]) ||
            "",
          c,
          l = (u) => {
            u.topic === e && (this.subscriber.off(_t.created, l), c());
          };
        return (
          yield Promise.all([
            new Promise((u) => {
              (c = u), this.subscriber.on(_t.created, l);
            }),
            new Promise((u, h) =>
              f(this, null, function* () {
                (a =
                  (yield this.subscriber
                    .subscribe(
                      e,
                      fg({ internal: { throwOnFailedPublish: o } }, s)
                    )
                    .catch((d) => {
                      o && h(d);
                    })) || a),
                  u();
              })
            ),
          ]),
          a
        );
      });
    }
    unsubscribe(e, s) {
      return f(this, null, function* () {
        this.isInitialized(), yield this.subscriber.unsubscribe(e, s);
      });
    }
    on(e, s) {
      this.events.on(e, s);
    }
    once(e, s) {
      this.events.once(e, s);
    }
    off(e, s) {
      this.events.off(e, s);
    }
    removeListener(e, s) {
      this.events.removeListener(e, s);
    }
    transportDisconnect() {
      return f(this, null, function* () {
        this.provider.disconnect &&
        (this.hasExperiencedNetworkDisruption || this.connected)
          ? yield Yt(
              this.provider.disconnect(),
              2e3,
              "provider.disconnect()"
            ).catch(() => this.onProviderDisconnect())
          : this.onProviderDisconnect();
      });
    }
    transportClose() {
      return f(this, null, function* () {
        (this.transportExplicitlyClosed = !0), yield this.transportDisconnect();
      });
    }
    transportOpen(e) {
      return f(this, null, function* () {
        if (!this.subscriber.hasAnyTopics) {
          this.logger.info(
            "Starting WS connection skipped because the client has no topics to work with."
          );
          return;
        }
        if (
          (this.connectPromise
            ? (this.logger.debug(
                {},
                "Waiting for existing connection attempt to resolve..."
              ),
              yield this.connectPromise,
              this.logger.debug({}, "Existing connection attempt resolved"))
            : ((this.connectPromise = new Promise((s, r) =>
                f(this, null, function* () {
                  yield this.connect(e)
                    .then(s)
                    .catch(r)
                    .finally(() => {
                      this.connectPromise = void 0;
                    });
                })
              )),
              yield this.connectPromise),
          !this.connected)
        )
          throw new Error(
            `Couldn't establish socket connection to the relay server: ${this.relayUrl}`
          );
      });
    }
    restartTransport(e) {
      return f(this, null, function* () {
        this.logger.debug({}, "Restarting transport..."),
          !this.connectionAttemptInProgress &&
            ((this.relayUrl = e || this.relayUrl),
            yield this.confirmOnlineStateOrThrow(),
            yield this.transportClose(),
            yield this.transportOpen());
      });
    }
    confirmOnlineStateOrThrow() {
      return f(this, null, function* () {
        if (!(yield El()))
          throw new Error(
            "No internet connection detected. Please restart your network and try again."
          );
      });
    }
    handleBatchMessageEvents(e) {
      return f(this, null, function* () {
        if (e?.length === 0) {
          this.logger.trace("Batch message events is empty. Ignoring...");
          return;
        }
        let s = e.sort((r, n) => r.publishedAt - n.publishedAt);
        this.logger.debug(`Batch of ${s.length} message events sorted`);
        for (let r of s)
          try {
            yield this.onMessageEvent(r);
          } catch (n) {
            this.logger.warn(
              n,
              "Error while processing batch message event: " + n?.message
            );
          }
        this.logger.trace(`Batch of ${s.length} message events processed`);
      });
    }
    onLinkMessageEvent(e, s) {
      return f(this, null, function* () {
        let { topic: r } = e;
        if (!s.sessionExists) {
          let n = ve(K.FIVE_MINUTES),
            i = { topic: r, expiry: n, relay: { protocol: "irn" }, active: !1 };
          yield this.core.pairing.pairings.set(r, i);
        }
        this.events.emit(Se.message, e),
          yield this.recordMessageEvent(e, qo.inbound);
      });
    }
    connect(e) {
      return f(this, null, function* () {
        yield this.confirmOnlineStateOrThrow(),
          e &&
            e !== this.relayUrl &&
            ((this.relayUrl = e), yield this.transportDisconnect()),
          (this.connectionAttemptInProgress = !0),
          (this.transportExplicitlyClosed = !1);
        let s = 1;
        for (; s < 6; ) {
          try {
            if (this.transportExplicitlyClosed) break;
            this.logger.debug(
              {},
              `Connecting to ${this.relayUrl}, attempt: ${s}...`
            ),
              yield this.createProvider(),
              yield new Promise((r, n) =>
                f(this, null, function* () {
                  let i = () => {
                    n(
                      new Error(
                        "Connection interrupted while trying to connect"
                      )
                    );
                  };
                  this.provider.once(kt.disconnect, i),
                    yield Yt(
                      new Promise((o, a) => {
                        this.provider.connect().then(o).catch(a);
                      }),
                      this.connectTimeout,
                      `Socket stalled when trying to connect to ${this.relayUrl}`
                    )
                      .catch((o) => {
                        n(o);
                      })
                      .finally(() => {
                        this.provider.off(kt.disconnect, i),
                          clearTimeout(this.reconnectTimeout);
                      }),
                    yield new Promise((o, a) =>
                      f(this, null, function* () {
                        let c = () => {
                          n(
                            new Error(
                              "Connection interrupted while trying to subscribe"
                            )
                          );
                        };
                        this.provider.once(kt.disconnect, c),
                          yield this.subscriber
                            .start()
                            .then(o)
                            .catch(a)
                            .finally(() => {
                              this.provider.off(kt.disconnect, c);
                            });
                      })
                    ),
                    (this.hasExperiencedNetworkDisruption = !1),
                    r();
                })
              );
          } catch (r) {
            yield this.subscriber.stop();
            let n = r;
            this.logger.warn({}, n.message),
              (this.hasExperiencedNetworkDisruption = !0);
          } finally {
            this.connectionAttemptInProgress = !1;
          }
          if (this.connected) {
            this.logger.debug(
              {},
              `Connected to ${this.relayUrl} successfully on attempt: ${s}`
            );
            break;
          }
          yield new Promise((r) => setTimeout(r, (0, K.toMiliseconds)(s * 1))),
            s++;
        }
      });
    }
    startPingTimeout() {
      var e, s, r, n, i;
      if (zn())
        try {
          (s = (e = this.provider) == null ? void 0 : e.connection) != null &&
            s.socket &&
            ((i =
              (n = (r = this.provider) == null ? void 0 : r.connection) == null
                ? void 0
                : n.socket) == null ||
              i.on("ping", () => {
                this.resetPingTimeout();
              })),
            this.resetPingTimeout();
        } catch (o) {
          this.logger.warn(o, o?.message);
        }
    }
    createProvider() {
      return f(this, null, function* () {
        this.provider.connection && this.unregisterProviderListeners();
        let e = yield this.core.crypto.signJWT(this.relayUrl);
        (this.provider = new bn(
          new ah(
            Ef({
              sdkVersion: _l,
              protocol: this.protocol,
              version: this.version,
              relayUrl: this.relayUrl,
              projectId: this.projectId,
              auth: e,
              useOnCloseEvent: !0,
              bundleId: this.bundleId,
              packageName: this.packageName,
            })
          )
        )),
          this.registerProviderListeners();
      });
    }
    recordMessageEvent(e, s) {
      return f(this, null, function* () {
        let { topic: r, message: n } = e;
        yield this.messages.set(r, n, s);
      });
    }
    shouldIgnoreMessageEvent(e) {
      return f(this, null, function* () {
        let { topic: s, message: r } = e;
        if (!r || r.length === 0)
          return this.logger.warn(`Ignoring invalid/empty message: ${r}`), !0;
        if (!(yield this.subscriber.isKnownTopic(s)))
          return (
            this.logger.warn(`Ignoring message for unknown topic ${s}`), !0
          );
        let n = this.messages.has(s, r);
        return n && this.logger.warn(`Ignoring duplicate message: ${r}`), n;
      });
    }
    onProviderPayload(e) {
      return f(this, null, function* () {
        if (
          (this.logger.debug("Incoming Relay Payload"),
          this.logger.trace({
            type: "payload",
            direction: "incoming",
            payload: e,
          }),
          yn(e))
        ) {
          if (!e.method.endsWith(N1)) return;
          let s = e.params,
            { topic: r, message: n, publishedAt: i, attestation: o } = s.data,
            a = {
              topic: r,
              message: n,
              publishedAt: i,
              transportType: me.relay,
              attestation: o,
            };
          this.logger.debug("Emitting Relayer Payload"),
            this.logger.trace(fg({ type: "event", event: s.id }, a)),
            this.events.emit(s.id, a),
            yield this.acknowledgePayload(e),
            yield this.onMessageEvent(a);
        } else wn(e) && this.events.emit(Se.message_ack, e);
      });
    }
    onMessageEvent(e) {
      return f(this, null, function* () {
        (yield this.shouldIgnoreMessageEvent(e)) ||
          (yield this.recordMessageEvent(e, qo.inbound),
          this.events.emit(Se.message, e));
      });
    }
    acknowledgePayload(e) {
      return f(this, null, function* () {
        let s = Rs(e.id, !0);
        yield this.provider.connection.send(s);
      });
    }
    unregisterProviderListeners() {
      this.provider.off(kt.payload, this.onPayloadHandler),
        this.provider.off(kt.connect, this.onConnectHandler),
        this.provider.off(kt.disconnect, this.onDisconnectHandler),
        this.provider.off(kt.error, this.onProviderErrorHandler),
        clearTimeout(this.pingTimeout);
    }
    registerEventListeners() {
      return f(this, null, function* () {
        let e = yield El();
        Zp((s) =>
          f(this, null, function* () {
            e !== s &&
              ((e = s),
              s
                ? yield this.transportOpen().catch((r) =>
                    this.logger.error(r, r?.message)
                  )
                : ((this.hasExperiencedNetworkDisruption = !0),
                  yield this.transportDisconnect(),
                  (this.transportExplicitlyClosed = !1)));
          })
        ),
          this.core.heartbeat.on(ir.pulse, () =>
            f(this, null, function* () {
              if (!this.transportExplicitlyClosed && !this.connected && Jp())
                try {
                  yield this.confirmOnlineStateOrThrow(),
                    yield this.transportOpen();
                } catch (s) {
                  this.logger.warn(s, s?.message);
                }
            })
          );
      });
    }
    onProviderDisconnect() {
      return f(this, null, function* () {
        clearTimeout(this.pingTimeout),
          this.events.emit(Se.disconnect),
          (this.connectionAttemptInProgress = !1),
          !this.reconnectInProgress &&
            ((this.reconnectInProgress = !0),
            yield this.subscriber.stop(),
            this.subscriber.hasAnyTopics &&
              (this.transportExplicitlyClosed ||
                (this.reconnectTimeout = setTimeout(
                  () =>
                    f(this, null, function* () {
                      yield this.transportOpen().catch((e) =>
                        this.logger.error(e, e?.message)
                      ),
                        (this.reconnectTimeout = void 0),
                        (this.reconnectInProgress = !1);
                    }),
                  (0, K.toMiliseconds)(R1)
                ))));
      });
    }
    isInitialized() {
      if (!this.initialized) {
        let { message: e } = F("NOT_INITIALIZED", this.name);
        throw new Error(e);
      }
    }
    toEstablishConnection() {
      return f(this, null, function* () {
        if ((yield this.confirmOnlineStateOrThrow(), !this.connected)) {
          if (this.connectPromise) {
            yield this.connectPromise;
            return;
          }
          yield this.connect();
        }
      });
    }
  };
function zx(t, e) {
  return t === e || (Number.isNaN(t) && Number.isNaN(e));
}
function pg(t) {
  return Object.getOwnPropertySymbols(t).filter((e) =>
    Object.prototype.propertyIsEnumerable.call(t, e)
  );
}
function gg(t) {
  return t == null
    ? t === void 0
      ? "[object Undefined]"
      : "[object Null]"
    : Object.prototype.toString.call(t);
}
var Vx = "[object RegExp]",
  Hx = "[object String]",
  Kx = "[object Number]",
  Gx = "[object Boolean]",
  mg = "[object Arguments]",
  Wx = "[object Symbol]",
  Yx = "[object Date]",
  Xx = "[object Map]",
  Zx = "[object Set]",
  Jx = "[object Array]",
  Qx = "[object Function]",
  eS = "[object ArrayBuffer]",
  Il = "[object Object]",
  tS = "[object Error]",
  sS = "[object DataView]",
  rS = "[object Uint8Array]",
  nS = "[object Uint8ClampedArray]",
  iS = "[object Uint16Array]",
  oS = "[object Uint32Array]",
  aS = "[object BigUint64Array]",
  cS = "[object Int8Array]",
  lS = "[object Int16Array]",
  uS = "[object Int32Array]",
  hS = "[object BigInt64Array]",
  dS = "[object Float32Array]",
  fS = "[object Float64Array]";
function pS() {}
function yg(t) {
  if (!t || typeof t != "object") return !1;
  let e = Object.getPrototypeOf(t);
  return e === null ||
    e === Object.prototype ||
    Object.getPrototypeOf(e) === null
    ? Object.prototype.toString.call(t) === "[object Object]"
    : !1;
}
function gS(t, e, s) {
  return ri(t, e, void 0, void 0, void 0, void 0, s);
}
function ri(t, e, s, r, n, i, o) {
  let a = o(t, e, s, r, n, i);
  if (a !== void 0) return a;
  if (typeof t == typeof e)
    switch (typeof t) {
      case "bigint":
      case "string":
      case "boolean":
      case "symbol":
      case "undefined":
        return t === e;
      case "number":
        return t === e || Object.is(t, e);
      case "function":
        return t === e;
      case "object":
        return ni(t, e, i, o);
    }
  return ni(t, e, i, o);
}
function ni(t, e, s, r) {
  if (Object.is(t, e)) return !0;
  let n = gg(t),
    i = gg(e);
  if ((n === mg && (n = Il), i === mg && (i = Il), n !== i)) return !1;
  switch (n) {
    case Hx:
      return t.toString() === e.toString();
    case Kx: {
      let c = t.valueOf(),
        l = e.valueOf();
      return zx(c, l);
    }
    case Gx:
    case Yx:
    case Wx:
      return Object.is(t.valueOf(), e.valueOf());
    case Vx:
      return t.source === e.source && t.flags === e.flags;
    case Qx:
      return t === e;
  }
  s = s ?? new Map();
  let o = s.get(t),
    a = s.get(e);
  if (o != null && a != null) return o === e;
  s.set(t, e), s.set(e, t);
  try {
    switch (n) {
      case Xx: {
        if (t.size !== e.size) return !1;
        for (let [c, l] of t.entries())
          if (!e.has(c) || !ri(l, e.get(c), c, t, e, s, r)) return !1;
        return !0;
      }
      case Zx: {
        if (t.size !== e.size) return !1;
        let c = Array.from(t.values()),
          l = Array.from(e.values());
        for (let u = 0; u < c.length; u++) {
          let h = c[u],
            d = l.findIndex((p) => ri(h, p, void 0, t, e, s, r));
          if (d === -1) return !1;
          l.splice(d, 1);
        }
        return !0;
      }
      case Jx:
      case rS:
      case nS:
      case iS:
      case oS:
      case aS:
      case cS:
      case lS:
      case uS:
      case hS:
      case dS:
      case fS: {
        if (
          (typeof Buffer < "u" && Buffer.isBuffer(t) !== Buffer.isBuffer(e)) ||
          t.length !== e.length
        )
          return !1;
        for (let c = 0; c < t.length; c++)
          if (!ri(t[c], e[c], c, t, e, s, r)) return !1;
        return !0;
      }
      case eS:
        return t.byteLength !== e.byteLength
          ? !1
          : ni(new Uint8Array(t), new Uint8Array(e), s, r);
      case sS:
        return t.byteLength !== e.byteLength || t.byteOffset !== e.byteOffset
          ? !1
          : ni(new Uint8Array(t), new Uint8Array(e), s, r);
      case tS:
        return t.name === e.name && t.message === e.message;
      case Il: {
        if (!(ni(t.constructor, e.constructor, s, r) || (yg(t) && yg(e))))
          return !1;
        let c = [...Object.keys(t), ...pg(t)],
          l = [...Object.keys(e), ...pg(e)];
        if (c.length !== l.length) return !1;
        for (let u = 0; u < c.length; u++) {
          let h = c[u],
            d = t[h];
          if (!Object.hasOwn(e, h)) return !1;
          let p = e[h];
          if (!ri(d, p, h, t, e, s, r)) return !1;
        }
        return !0;
      }
      default:
        return !1;
    }
  } finally {
    s.delete(t), s.delete(e);
  }
}
function mS(t, e) {
  return gS(t, e, pS);
}
var yS = Object.defineProperty,
  wg = Object.getOwnPropertySymbols,
  wS = Object.prototype.hasOwnProperty,
  bS = Object.prototype.propertyIsEnumerable,
  Hl = (t, e, s) =>
    e in t
      ? yS(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (t[e] = s),
  bg = (t, e) => {
    for (var s in e || (e = {})) wS.call(e, s) && Hl(t, s, e[s]);
    if (wg) for (var s of wg(e)) bS.call(e, s) && Hl(t, s, e[s]);
    return t;
  },
  pt = (t, e, s) => Hl(t, typeof e != "symbol" ? e + "" : e, s),
  cs = class extends Ai {
    constructor(e, s, r, n = as, i = void 0) {
      super(e, s, r, n),
        (this.core = e),
        (this.logger = s),
        (this.name = r),
        pt(this, "map", new Map()),
        pt(this, "version", k1),
        pt(this, "cached", []),
        pt(this, "initialized", !1),
        pt(this, "getKey"),
        pt(this, "storagePrefix", as),
        pt(this, "recentlyDeleted", []),
        pt(this, "recentlyDeletedLimit", 200),
        pt(this, "init", () =>
          f(this, null, function* () {
            this.initialized ||
              (this.logger.trace("Initialized"),
              yield this.restore(),
              this.cached.forEach((o) => {
                this.getKey && o !== null && !Ie(o)
                  ? this.map.set(this.getKey(o), o)
                  : Dp(o)
                  ? this.map.set(o.id, o)
                  : qp(o) && this.map.set(o.topic, o);
              }),
              (this.cached = []),
              (this.initialized = !0));
          })
        ),
        pt(this, "set", (o, a) =>
          f(this, null, function* () {
            this.isInitialized(),
              this.map.has(o)
                ? yield this.update(o, a)
                : (this.logger.debug("Setting value"),
                  this.logger.trace({
                    type: "method",
                    method: "set",
                    key: o,
                    value: a,
                  }),
                  this.map.set(o, a),
                  yield this.persist());
          })
        ),
        pt(
          this,
          "get",
          (o) => (
            this.isInitialized(),
            this.logger.debug("Getting value"),
            this.logger.trace({ type: "method", method: "get", key: o }),
            this.getData(o)
          )
        ),
        pt(
          this,
          "getAll",
          (o) => (
            this.isInitialized(),
            o
              ? this.values.filter((a) =>
                  Object.keys(o).every((c) => mS(a[c], o[c]))
                )
              : this.values
          )
        ),
        pt(this, "update", (o, a) =>
          f(this, null, function* () {
            this.isInitialized(),
              this.logger.debug("Updating value"),
              this.logger.trace({
                type: "method",
                method: "update",
                key: o,
                update: a,
              });
            let c = bg(bg({}, this.getData(o)), a);
            this.map.set(o, c), yield this.persist();
          })
        ),
        pt(this, "delete", (o, a) =>
          f(this, null, function* () {
            this.isInitialized(),
              this.map.has(o) &&
                (this.logger.debug("Deleting value"),
                this.logger.trace({
                  type: "method",
                  method: "delete",
                  key: o,
                  reason: a,
                }),
                this.map.delete(o),
                this.addToRecentlyDeleted(o),
                yield this.persist());
          })
        ),
        (this.logger = ot(s, this.name)),
        (this.storagePrefix = n),
        (this.getKey = i);
    }
    get context() {
      return qe(this.logger);
    }
    get storageKey() {
      return (
        this.storagePrefix +
        this.version +
        this.core.customStoragePrefix +
        "//" +
        this.name
      );
    }
    get length() {
      return this.map.size;
    }
    get keys() {
      return Array.from(this.map.keys());
    }
    get values() {
      return Array.from(this.map.values());
    }
    addToRecentlyDeleted(e) {
      this.recentlyDeleted.push(e),
        this.recentlyDeleted.length >= this.recentlyDeletedLimit &&
          this.recentlyDeleted.splice(0, this.recentlyDeletedLimit / 2);
    }
    setDataStore(e) {
      return f(this, null, function* () {
        yield this.core.storage.setItem(this.storageKey, e);
      });
    }
    getDataStore() {
      return f(this, null, function* () {
        return yield this.core.storage.getItem(this.storageKey);
      });
    }
    getData(e) {
      let s = this.map.get(e);
      if (!s) {
        if (this.recentlyDeleted.includes(e)) {
          let { message: n } = F(
            "MISSING_OR_INVALID",
            `Record was recently deleted - ${this.name}: ${e}`
          );
          throw (this.logger.error(n), new Error(n));
        }
        let { message: r } = F("NO_MATCHING_KEY", `${this.name}: ${e}`);
        throw (this.logger.error(r), new Error(r));
      }
      return s;
    }
    persist() {
      return f(this, null, function* () {
        yield this.setDataStore(this.values);
      });
    }
    restore() {
      return f(this, null, function* () {
        try {
          let e = yield this.getDataStore();
          if (typeof e > "u" || !e.length) return;
          if (this.map.size) {
            let { message: s } = F("RESTORE_WILL_OVERRIDE", this.name);
            throw (this.logger.error(s), new Error(s));
          }
          (this.cached = e),
            this.logger.debug(`Successfully Restored value for ${this.name}`),
            this.logger.trace({
              type: "method",
              method: "restore",
              value: this.values,
            });
        } catch (e) {
          this.logger.debug(`Failed to Restore value for ${this.name}`),
            this.logger.error(e);
        }
      });
    }
    isInitialized() {
      if (!this.initialized) {
        let { message: e } = F("NOT_INITIALIZED", this.name);
        throw new Error(e);
      }
    }
  },
  vS = Object.defineProperty,
  ES = (t, e, s) =>
    e in t
      ? vS(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (t[e] = s),
  se = (t, e, s) => ES(t, typeof e != "symbol" ? e + "" : e, s),
  Kl = class {
    constructor(e, s) {
      (this.core = e),
        (this.logger = s),
        se(this, "name", D1),
        se(this, "version", q1),
        se(this, "events", new Cs.default()),
        se(this, "pairings"),
        se(this, "initialized", !1),
        se(this, "storagePrefix", as),
        se(this, "ignoredPayloadTypes", [Xt]),
        se(this, "registeredMethods", []),
        se(this, "init", () =>
          f(this, null, function* () {
            this.initialized ||
              (yield this.pairings.init(),
              yield this.cleanup(),
              this.registerRelayerEvents(),
              this.registerExpirerEvents(),
              (this.initialized = !0),
              this.logger.trace("Initialized"));
          })
        ),
        se(this, "register", ({ methods: r }) => {
          this.isInitialized(),
            (this.registeredMethods = [
              ...new Set([...this.registeredMethods, ...r]),
            ]);
        }),
        se(this, "create", (r) =>
          f(this, null, function* () {
            this.isInitialized();
            let n = Lo(),
              i = yield this.core.crypto.setSymKey(n),
              o = ve(K.FIVE_MINUTES),
              a = { protocol: tu },
              c = {
                topic: i,
                expiry: o,
                relay: a,
                active: !1,
                methods: r?.methods,
              },
              l = gl({
                protocol: this.core.protocol,
                version: this.core.version,
                topic: i,
                symKey: n,
                relay: a,
                expiryTimestamp: o,
                methods: r?.methods,
              });
            return (
              this.events.emit(Js.create, c),
              this.core.expirer.set(i, o),
              yield this.pairings.set(i, c),
              yield this.core.relayer.subscribe(i, {
                transportType: r?.transportType,
                internal: r?.internal,
              }),
              { topic: i, uri: l }
            );
          })
        ),
        se(this, "pair", (r) =>
          f(this, null, function* () {
            this.isInitialized();
            let n = this.core.eventClient.createEvent({
              properties: { topic: r?.uri, trace: [Qt.pairing_started] },
            });
            this.isValidPair(r, n);
            let {
              topic: i,
              symKey: o,
              relay: a,
              expiryTimestamp: c,
              methods: l,
            } = pl(r.uri);
            (n.props.properties.topic = i),
              n.addTrace(Qt.pairing_uri_validation_success),
              n.addTrace(Qt.pairing_uri_not_expired);
            let u;
            if (this.pairings.keys.includes(i)) {
              if (
                ((u = this.pairings.get(i)),
                n.addTrace(Qt.existing_pairing),
                u.active)
              )
                throw (
                  (n.setError(os.active_pairing_already_exists),
                  new Error(
                    `Pairing already exists: ${i}. Please try again with a new connection URI.`
                  ))
                );
              n.addTrace(Qt.pairing_not_expired);
            }
            let h = c || ve(K.FIVE_MINUTES),
              d = { topic: i, relay: a, expiry: h, active: !1, methods: l };
            this.core.expirer.set(i, h),
              yield this.pairings.set(i, d),
              n.addTrace(Qt.store_new_pairing),
              r.activatePairing && (yield this.activate({ topic: i })),
              this.events.emit(Js.create, d),
              n.addTrace(Qt.emit_inactive_pairing),
              this.core.crypto.keychain.has(i) ||
                (yield this.core.crypto.setSymKey(o, i)),
              n.addTrace(Qt.subscribing_pairing_topic);
            try {
              yield this.core.relayer.confirmOnlineStateOrThrow();
            } catch {
              n.setError(os.no_internet_connection);
            }
            try {
              yield this.core.relayer.subscribe(i, { relay: a });
            } catch (p) {
              throw (n.setError(os.subscribe_pairing_topic_failure), p);
            }
            return n.addTrace(Qt.subscribe_pairing_topic_success), d;
          })
        ),
        se(this, "activate", (n) =>
          f(this, [n], function* ({ topic: r }) {
            this.isInitialized();
            let i = ve(K.FIVE_MINUTES);
            this.core.expirer.set(r, i),
              yield this.pairings.update(r, { active: !0, expiry: i });
          })
        ),
        se(this, "ping", (r) =>
          f(this, null, function* () {
            this.isInitialized(),
              yield this.isValidPing(r),
              this.logger.warn(
                "ping() is deprecated and will be removed in the next major release."
              );
            let { topic: n } = r;
            if (this.pairings.keys.includes(n)) {
              let i = yield this.sendRequest(n, "wc_pairingPing", {}),
                { done: o, resolve: a, reject: c } = Ts();
              this.events.once(oe("pairing_ping", i), ({ error: l }) => {
                l ? c(l) : a();
              }),
                yield o();
            }
          })
        ),
        se(this, "updateExpiry", (i) =>
          f(this, [i], function* ({ topic: r, expiry: n }) {
            this.isInitialized(), yield this.pairings.update(r, { expiry: n });
          })
        ),
        se(this, "updateMetadata", (i) =>
          f(this, [i], function* ({ topic: r, metadata: n }) {
            this.isInitialized(),
              yield this.pairings.update(r, { peerMetadata: n });
          })
        ),
        se(
          this,
          "getPairings",
          () => (this.isInitialized(), this.pairings.values)
        ),
        se(this, "disconnect", (r) =>
          f(this, null, function* () {
            this.isInitialized(), yield this.isValidDisconnect(r);
            let { topic: n } = r;
            this.pairings.keys.includes(n) &&
              (yield this.sendRequest(
                n,
                "wc_pairingDelete",
                fe("USER_DISCONNECTED")
              ),
              yield this.deletePairing(n));
          })
        ),
        se(this, "formatUriFromPairing", (r) => {
          this.isInitialized();
          let { topic: n, relay: i, expiry: o, methods: a } = r,
            c = this.core.crypto.keychain.get(n);
          return gl({
            protocol: this.core.protocol,
            version: this.core.version,
            topic: n,
            symKey: c,
            relay: i,
            expiryTimestamp: o,
            methods: a,
          });
        }),
        se(this, "sendRequest", (r, n, i) =>
          f(this, null, function* () {
            let o = yt(n, i),
              a = yield this.core.crypto.encode(r, o),
              c = ei[n].req;
            return (
              this.core.history.set(r, o),
              this.core.relayer.publish(r, a, c),
              o.id
            );
          })
        ),
        se(this, "sendResult", (r, n, i) =>
          f(this, null, function* () {
            let o = Rs(r, i),
              a = yield this.core.crypto.encode(n, o),
              c = (yield this.core.history.get(n, r)).request.method,
              l = ei[c].res;
            yield this.core.relayer.publish(n, a, l),
              yield this.core.history.resolve(o);
          })
        ),
        se(this, "sendError", (r, n, i) =>
          f(this, null, function* () {
            let o = hi(r, i),
              a = yield this.core.crypto.encode(n, o),
              c = (yield this.core.history.get(n, r)).request.method,
              l = ei[c] ? ei[c].res : ei.unregistered_method.res;
            yield this.core.relayer.publish(n, a, l),
              yield this.core.history.resolve(o);
          })
        ),
        se(this, "deletePairing", (r, n) =>
          f(this, null, function* () {
            yield this.core.relayer.unsubscribe(r),
              yield Promise.all([
                this.pairings.delete(r, fe("USER_DISCONNECTED")),
                this.core.crypto.deleteSymKey(r),
                n ? Promise.resolve() : this.core.expirer.del(r),
              ]);
          })
        ),
        se(this, "cleanup", () =>
          f(this, null, function* () {
            let r = this.pairings.getAll().filter((n) => St(n.expiry));
            yield Promise.all(r.map((n) => this.deletePairing(n.topic)));
          })
        ),
        se(this, "onRelayEventRequest", (r) =>
          f(this, null, function* () {
            let { topic: n, payload: i } = r;
            switch (i.method) {
              case "wc_pairingPing":
                return yield this.onPairingPingRequest(n, i);
              case "wc_pairingDelete":
                return yield this.onPairingDeleteRequest(n, i);
              default:
                return yield this.onUnknownRpcMethodRequest(n, i);
            }
          })
        ),
        se(this, "onRelayEventResponse", (r) =>
          f(this, null, function* () {
            let { topic: n, payload: i } = r,
              o = (yield this.core.history.get(n, i.id)).request.method;
            switch (o) {
              case "wc_pairingPing":
                return this.onPairingPingResponse(n, i);
              default:
                return this.onUnknownRpcMethodResponse(o);
            }
          })
        ),
        se(this, "onPairingPingRequest", (r, n) =>
          f(this, null, function* () {
            let { id: i } = n;
            try {
              this.isValidPing({ topic: r }),
                yield this.sendResult(i, r, !0),
                this.events.emit(Js.ping, { id: i, topic: r });
            } catch (o) {
              yield this.sendError(i, r, o), this.logger.error(o);
            }
          })
        ),
        se(this, "onPairingPingResponse", (r, n) => {
          let { id: i } = n;
          setTimeout(() => {
            Mt(n)
              ? this.events.emit(oe("pairing_ping", i), {})
              : Pt(n) &&
                this.events.emit(oe("pairing_ping", i), { error: n.error });
          }, 500);
        }),
        se(this, "onPairingDeleteRequest", (r, n) =>
          f(this, null, function* () {
            let { id: i } = n;
            try {
              this.isValidDisconnect({ topic: r }),
                yield this.deletePairing(r),
                this.events.emit(Js.delete, { id: i, topic: r });
            } catch (o) {
              yield this.sendError(i, r, o), this.logger.error(o);
            }
          })
        ),
        se(this, "onUnknownRpcMethodRequest", (r, n) =>
          f(this, null, function* () {
            let { id: i, method: o } = n;
            try {
              if (this.registeredMethods.includes(o)) return;
              let a = fe("WC_METHOD_UNSUPPORTED", o);
              yield this.sendError(i, r, a), this.logger.error(a);
            } catch (a) {
              yield this.sendError(i, r, a), this.logger.error(a);
            }
          })
        ),
        se(this, "onUnknownRpcMethodResponse", (r) => {
          this.registeredMethods.includes(r) ||
            this.logger.error(fe("WC_METHOD_UNSUPPORTED", r));
        }),
        se(this, "isValidPair", (r, n) => {
          var i;
          if (!Ge(r)) {
            let { message: a } = F("MISSING_OR_INVALID", `pair() params: ${r}`);
            throw (n.setError(os.malformed_pairing_uri), new Error(a));
          }
          if (!Lp(r.uri)) {
            let { message: a } = F(
              "MISSING_OR_INVALID",
              `pair() uri: ${r.uri}`
            );
            throw (n.setError(os.malformed_pairing_uri), new Error(a));
          }
          let o = pl(r?.uri);
          if (!((i = o?.relay) != null && i.protocol)) {
            let { message: a } = F(
              "MISSING_OR_INVALID",
              "pair() uri#relay-protocol"
            );
            throw (n.setError(os.malformed_pairing_uri), new Error(a));
          }
          if (!(o != null && o.symKey)) {
            let { message: a } = F("MISSING_OR_INVALID", "pair() uri#symKey");
            throw (n.setError(os.malformed_pairing_uri), new Error(a));
          }
          if (
            o != null &&
            o.expiryTimestamp &&
            (0, K.toMiliseconds)(o?.expiryTimestamp) < Date.now()
          ) {
            n.setError(os.pairing_expired);
            let { message: a } = F(
              "EXPIRED",
              "pair() URI has expired. Please try again with a new connection URI."
            );
            throw new Error(a);
          }
        }),
        se(this, "isValidPing", (r) =>
          f(this, null, function* () {
            if (!Ge(r)) {
              let { message: i } = F(
                "MISSING_OR_INVALID",
                `ping() params: ${r}`
              );
              throw new Error(i);
            }
            let { topic: n } = r;
            yield this.isValidPairingTopic(n);
          })
        ),
        se(this, "isValidDisconnect", (r) =>
          f(this, null, function* () {
            if (!Ge(r)) {
              let { message: i } = F(
                "MISSING_OR_INVALID",
                `disconnect() params: ${r}`
              );
              throw new Error(i);
            }
            let { topic: n } = r;
            yield this.isValidPairingTopic(n);
          })
        ),
        se(this, "isValidPairingTopic", (r) =>
          f(this, null, function* () {
            if (!xe(r, !1)) {
              let { message: n } = F(
                "MISSING_OR_INVALID",
                `pairing topic should be a string: ${r}`
              );
              throw new Error(n);
            }
            if (!this.pairings.keys.includes(r)) {
              let { message: n } = F(
                "NO_MATCHING_KEY",
                `pairing topic doesn't exist: ${r}`
              );
              throw new Error(n);
            }
            if (St(this.pairings.get(r).expiry)) {
              yield this.deletePairing(r);
              let { message: n } = F("EXPIRED", `pairing topic: ${r}`);
              throw new Error(n);
            }
          })
        ),
        (this.core = e),
        (this.logger = ot(s, this.name)),
        (this.pairings = new cs(
          this.core,
          this.logger,
          this.name,
          this.storagePrefix
        ));
    }
    get context() {
      return qe(this.logger);
    }
    isInitialized() {
      if (!this.initialized) {
        let { message: e } = F("NOT_INITIALIZED", this.name);
        throw new Error(e);
      }
    }
    registerRelayerEvents() {
      this.core.relayer.on(Se.message, (e) =>
        f(this, null, function* () {
          let { topic: s, message: r, transportType: n } = e;
          if (
            this.pairings.keys.includes(s) &&
            n !== me.link_mode &&
            !this.ignoredPayloadTypes.includes(
              this.core.crypto.getPayloadType(r)
            )
          )
            try {
              let i = yield this.core.crypto.decode(s, r);
              yn(i)
                ? (this.core.history.set(s, i),
                  yield this.onRelayEventRequest({ topic: s, payload: i }))
                : wn(i) &&
                  (yield this.core.history.resolve(i),
                  yield this.onRelayEventResponse({ topic: s, payload: i }),
                  this.core.history.delete(s, i.id)),
                yield this.core.relayer.messages.ack(s, r);
            } catch (i) {
              this.logger.error(i);
            }
        })
      );
    }
    registerExpirerEvents() {
      this.core.expirer.on(Tt.expired, (e) =>
        f(this, null, function* () {
          let { topic: s } = Ao(e.target);
          s &&
            this.pairings.keys.includes(s) &&
            (yield this.deletePairing(s, !0),
            this.events.emit(Js.expire, { topic: s }));
        })
      );
    }
  },
  xS = Object.defineProperty,
  SS = (t, e, s) =>
    e in t
      ? xS(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (t[e] = s),
  Ue = (t, e, s) => SS(t, typeof e != "symbol" ? e + "" : e, s),
  Gl = class extends Si {
    constructor(e, s) {
      super(e, s),
        (this.core = e),
        (this.logger = s),
        Ue(this, "records", new Map()),
        Ue(this, "events", new Cs.EventEmitter()),
        Ue(this, "name", j1),
        Ue(this, "version", M1),
        Ue(this, "cached", []),
        Ue(this, "initialized", !1),
        Ue(this, "storagePrefix", as),
        Ue(this, "init", () =>
          f(this, null, function* () {
            this.initialized ||
              (this.logger.trace("Initialized"),
              yield this.restore(),
              this.cached.forEach((r) => this.records.set(r.id, r)),
              (this.cached = []),
              this.registerEventListeners(),
              (this.initialized = !0));
          })
        ),
        Ue(this, "set", (r, n, i) => {
          if (
            (this.isInitialized(),
            this.logger.debug("Setting JSON-RPC request history record"),
            this.logger.trace({
              type: "method",
              method: "set",
              topic: r,
              request: n,
              chainId: i,
            }),
            this.records.has(n.id))
          )
            return;
          let o = {
            id: n.id,
            topic: r,
            request: { method: n.method, params: n.params || null },
            chainId: i,
            expiry: ve(K.THIRTY_DAYS),
          };
          this.records.set(o.id, o),
            this.persist(),
            this.events.emit(Jt.created, o);
        }),
        Ue(this, "resolve", (r) =>
          f(this, null, function* () {
            if (
              (this.isInitialized(),
              this.logger.debug("Updating JSON-RPC response history record"),
              this.logger.trace({
                type: "method",
                method: "update",
                response: r,
              }),
              !this.records.has(r.id))
            )
              return;
            let n = yield this.getRecord(r.id);
            typeof n.response > "u" &&
              ((n.response = Pt(r) ? { error: r.error } : { result: r.result }),
              this.records.set(n.id, n),
              this.persist(),
              this.events.emit(Jt.updated, n));
          })
        ),
        Ue(this, "get", (r, n) =>
          f(this, null, function* () {
            return (
              this.isInitialized(),
              this.logger.debug("Getting record"),
              this.logger.trace({
                type: "method",
                method: "get",
                topic: r,
                id: n,
              }),
              yield this.getRecord(n)
            );
          })
        ),
        Ue(this, "delete", (r, n) => {
          this.isInitialized(),
            this.logger.debug("Deleting record"),
            this.logger.trace({ type: "method", method: "delete", id: n }),
            this.values.forEach((i) => {
              if (i.topic === r) {
                if (typeof n < "u" && i.id !== n) return;
                this.records.delete(i.id), this.events.emit(Jt.deleted, i);
              }
            }),
            this.persist();
        }),
        Ue(this, "exists", (r, n) =>
          f(this, null, function* () {
            return (
              this.isInitialized(),
              this.records.has(n) ? (yield this.getRecord(n)).topic === r : !1
            );
          })
        ),
        Ue(this, "on", (r, n) => {
          this.events.on(r, n);
        }),
        Ue(this, "once", (r, n) => {
          this.events.once(r, n);
        }),
        Ue(this, "off", (r, n) => {
          this.events.off(r, n);
        }),
        Ue(this, "removeListener", (r, n) => {
          this.events.removeListener(r, n);
        }),
        (this.logger = ot(s, this.name));
    }
    get context() {
      return qe(this.logger);
    }
    get storageKey() {
      return (
        this.storagePrefix +
        this.version +
        this.core.customStoragePrefix +
        "//" +
        this.name
      );
    }
    get size() {
      return this.records.size;
    }
    get keys() {
      return Array.from(this.records.keys());
    }
    get values() {
      return Array.from(this.records.values());
    }
    get pending() {
      let e = [];
      return (
        this.values.forEach((s) => {
          if (typeof s.response < "u") return;
          let r = {
            topic: s.topic,
            request: yt(s.request.method, s.request.params, s.id),
            chainId: s.chainId,
          };
          return e.push(r);
        }),
        e
      );
    }
    setJsonRpcRecords(e) {
      return f(this, null, function* () {
        yield this.core.storage.setItem(this.storageKey, e);
      });
    }
    getJsonRpcRecords() {
      return f(this, null, function* () {
        return yield this.core.storage.getItem(this.storageKey);
      });
    }
    getRecord(e) {
      this.isInitialized();
      let s = this.records.get(e);
      if (!s) {
        let { message: r } = F("NO_MATCHING_KEY", `${this.name}: ${e}`);
        throw new Error(r);
      }
      return s;
    }
    persist() {
      return f(this, null, function* () {
        yield this.setJsonRpcRecords(this.values), this.events.emit(Jt.sync);
      });
    }
    restore() {
      return f(this, null, function* () {
        try {
          let e = yield this.getJsonRpcRecords();
          if (typeof e > "u" || !e.length) return;
          if (this.records.size) {
            let { message: s } = F("RESTORE_WILL_OVERRIDE", this.name);
            throw (this.logger.error(s), new Error(s));
          }
          (this.cached = e),
            this.logger.debug(`Successfully Restored records for ${this.name}`),
            this.logger.trace({
              type: "method",
              method: "restore",
              records: this.values,
            });
        } catch (e) {
          this.logger.debug(`Failed to Restore records for ${this.name}`),
            this.logger.error(e);
        }
      });
    }
    registerEventListeners() {
      this.events.on(Jt.created, (e) => {
        let s = Jt.created;
        this.logger.info(`Emitting ${s}`),
          this.logger.debug({ type: "event", event: s, record: e });
      }),
        this.events.on(Jt.updated, (e) => {
          let s = Jt.updated;
          this.logger.info(`Emitting ${s}`),
            this.logger.debug({ type: "event", event: s, record: e });
        }),
        this.events.on(Jt.deleted, (e) => {
          let s = Jt.deleted;
          this.logger.info(`Emitting ${s}`),
            this.logger.debug({ type: "event", event: s, record: e });
        }),
        this.core.heartbeat.on(ir.pulse, () => {
          this.cleanup();
        });
    }
    cleanup() {
      try {
        this.isInitialized();
        let e = !1;
        this.records.forEach((s) => {
          (0, K.toMiliseconds)(s.expiry || 0) - Date.now() <= 0 &&
            (this.logger.info(`Deleting expired history log: ${s.id}`),
            this.records.delete(s.id),
            this.events.emit(Jt.deleted, s, !1),
            (e = !0));
        }),
          e && this.persist();
      } catch (e) {
        this.logger.warn(e);
      }
    }
    isInitialized() {
      if (!this.initialized) {
        let { message: e } = F("NOT_INITIALIZED", this.name);
        throw new Error(e);
      }
    }
  },
  IS = Object.defineProperty,
  _S = (t, e, s) =>
    e in t
      ? IS(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (t[e] = s),
  We = (t, e, s) => _S(t, typeof e != "symbol" ? e + "" : e, s),
  Wl = class extends Pi {
    constructor(e, s) {
      super(e, s),
        (this.core = e),
        (this.logger = s),
        We(this, "expirations", new Map()),
        We(this, "events", new Cs.EventEmitter()),
        We(this, "name", F1),
        We(this, "version", $1),
        We(this, "cached", []),
        We(this, "initialized", !1),
        We(this, "storagePrefix", as),
        We(this, "init", () =>
          f(this, null, function* () {
            this.initialized ||
              (this.logger.trace("Initialized"),
              yield this.restore(),
              this.cached.forEach((r) => this.expirations.set(r.target, r)),
              (this.cached = []),
              this.registerEventListeners(),
              (this.initialized = !0));
          })
        ),
        We(this, "has", (r) => {
          try {
            let n = this.formatTarget(r);
            return typeof this.getExpiration(n) < "u";
          } catch {
            return !1;
          }
        }),
        We(this, "set", (r, n) => {
          this.isInitialized();
          let i = this.formatTarget(r),
            o = { target: i, expiry: n };
          this.expirations.set(i, o),
            this.checkExpiry(i, o),
            this.events.emit(Tt.created, { target: i, expiration: o });
        }),
        We(this, "get", (r) => {
          this.isInitialized();
          let n = this.formatTarget(r);
          return this.getExpiration(n);
        }),
        We(this, "del", (r) => {
          if ((this.isInitialized(), this.has(r))) {
            let n = this.formatTarget(r),
              i = this.getExpiration(n);
            this.expirations.delete(n),
              this.events.emit(Tt.deleted, { target: n, expiration: i });
          }
        }),
        We(this, "on", (r, n) => {
          this.events.on(r, n);
        }),
        We(this, "once", (r, n) => {
          this.events.once(r, n);
        }),
        We(this, "off", (r, n) => {
          this.events.off(r, n);
        }),
        We(this, "removeListener", (r, n) => {
          this.events.removeListener(r, n);
        }),
        (this.logger = ot(s, this.name));
    }
    get context() {
      return qe(this.logger);
    }
    get storageKey() {
      return (
        this.storagePrefix +
        this.version +
        this.core.customStoragePrefix +
        "//" +
        this.name
      );
    }
    get length() {
      return this.expirations.size;
    }
    get keys() {
      return Array.from(this.expirations.keys());
    }
    get values() {
      return Array.from(this.expirations.values());
    }
    formatTarget(e) {
      if (typeof e == "string") return Sf(e);
      if (typeof e == "number") return If(e);
      let { message: s } = F("UNKNOWN_TYPE", `Target type: ${typeof e}`);
      throw new Error(s);
    }
    setExpirations(e) {
      return f(this, null, function* () {
        yield this.core.storage.setItem(this.storageKey, e);
      });
    }
    getExpirations() {
      return f(this, null, function* () {
        return yield this.core.storage.getItem(this.storageKey);
      });
    }
    persist() {
      return f(this, null, function* () {
        yield this.setExpirations(this.values), this.events.emit(Tt.sync);
      });
    }
    restore() {
      return f(this, null, function* () {
        try {
          let e = yield this.getExpirations();
          if (typeof e > "u" || !e.length) return;
          if (this.expirations.size) {
            let { message: s } = F("RESTORE_WILL_OVERRIDE", this.name);
            throw (this.logger.error(s), new Error(s));
          }
          (this.cached = e),
            this.logger.debug(
              `Successfully Restored expirations for ${this.name}`
            ),
            this.logger.trace({
              type: "method",
              method: "restore",
              expirations: this.values,
            });
        } catch (e) {
          this.logger.debug(`Failed to Restore expirations for ${this.name}`),
            this.logger.error(e);
        }
      });
    }
    getExpiration(e) {
      let s = this.expirations.get(e);
      if (!s) {
        let { message: r } = F("NO_MATCHING_KEY", `${this.name}: ${e}`);
        throw (this.logger.warn(r), new Error(r));
      }
      return s;
    }
    checkExpiry(e, s) {
      let { expiry: r } = s;
      (0, K.toMiliseconds)(r) - Date.now() <= 0 && this.expire(e, s);
    }
    expire(e, s) {
      this.expirations.delete(e),
        this.events.emit(Tt.expired, { target: e, expiration: s });
    }
    checkExpirations() {
      this.core.relayer.connected &&
        this.expirations.forEach((e, s) => this.checkExpiry(s, e));
    }
    registerEventListeners() {
      this.core.heartbeat.on(ir.pulse, () => this.checkExpirations()),
        this.events.on(Tt.created, (e) => {
          let s = Tt.created;
          this.logger.info(`Emitting ${s}`),
            this.logger.debug({ type: "event", event: s, data: e }),
            this.persist();
        }),
        this.events.on(Tt.expired, (e) => {
          let s = Tt.expired;
          this.logger.info(`Emitting ${s}`),
            this.logger.debug({ type: "event", event: s, data: e }),
            this.persist();
        }),
        this.events.on(Tt.deleted, (e) => {
          let s = Tt.deleted;
          this.logger.info(`Emitting ${s}`),
            this.logger.debug({ type: "event", event: s, data: e }),
            this.persist();
        });
    }
    isInitialized() {
      if (!this.initialized) {
        let { message: e } = F("NOT_INITIALIZED", this.name);
        throw new Error(e);
      }
    }
  },
  TS = Object.defineProperty,
  AS = (t, e, s) =>
    e in t
      ? TS(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (t[e] = s),
  Te = (t, e, s) => AS(t, typeof e != "symbol" ? e + "" : e, s),
  Yl = class extends Oi {
    constructor(e, s, r) {
      super(e, s, r),
        (this.core = e),
        (this.logger = s),
        (this.store = r),
        Te(this, "name", z1),
        Te(this, "abortController"),
        Te(this, "isDevEnv"),
        Te(this, "verifyUrlV3", H1),
        Te(this, "storagePrefix", as),
        Te(this, "version", Tg),
        Te(this, "publicKey"),
        Te(this, "fetchPromise"),
        Te(this, "init", () =>
          f(this, null, function* () {
            var n;
            this.isDevEnv ||
              ((this.publicKey = yield this.store.getItem(this.storeKey)),
              this.publicKey &&
                (0, K.toMiliseconds)(
                  (n = this.publicKey) == null ? void 0 : n.expiresAt
                ) < Date.now() &&
                (this.logger.debug("verify v2 public key expired"),
                yield this.removePublicKey()));
          })
        ),
        Te(this, "register", (n) =>
          f(this, null, function* () {
            if (!Sr() || this.isDevEnv) return;
            let i = window.location.origin,
              { id: o, decryptedId: a } = n,
              c = `${this.verifyUrlV3}/attestation?projectId=${this.core.projectId}&origin=${i}&id=${o}&decryptedId=${a}`;
            try {
              let l = (0, Ig.getDocument)(),
                u = this.startAbortTimer(K.ONE_SECOND * 5),
                h = yield new Promise((d, p) => {
                  let m = () => {
                    window.removeEventListener("message", w),
                      l.body.removeChild(g),
                      p("attestation aborted");
                  };
                  this.abortController.signal.addEventListener("abort", m);
                  let g = l.createElement("iframe");
                  (g.src = c),
                    (g.style.display = "none"),
                    g.addEventListener("error", m, {
                      signal: this.abortController.signal,
                    });
                  let w = (R) => {
                    if (R.data && typeof R.data == "string")
                      try {
                        let B = JSON.parse(R.data);
                        if (B.type === "verify_attestation") {
                          if (mn(B.attestation).payload.id !== o) return;
                          clearInterval(u),
                            l.body.removeChild(g),
                            this.abortController.signal.removeEventListener(
                              "abort",
                              m
                            ),
                            window.removeEventListener("message", w),
                            d(B.attestation === null ? "" : B.attestation);
                        }
                      } catch (B) {
                        this.logger.warn(B);
                      }
                  };
                  l.body.appendChild(g),
                    window.addEventListener("message", w, {
                      signal: this.abortController.signal,
                    });
                });
              return this.logger.debug(h, "jwt attestation"), h;
            } catch (l) {
              this.logger.warn(l);
            }
            return "";
          })
        ),
        Te(this, "resolve", (n) =>
          f(this, null, function* () {
            if (this.isDevEnv) return "";
            let { attestationId: i, hash: o, encryptedId: a } = n;
            if (i === "") {
              this.logger.debug("resolve: attestationId is empty, skipping");
              return;
            }
            if (i) {
              if (mn(i).payload.id !== a) return;
              let l = yield this.isValidJwtAttestation(i);
              if (l) {
                if (!l.isVerified) {
                  this.logger.warn(
                    "resolve: jwt attestation: origin url not verified"
                  );
                  return;
                }
                return l;
              }
            }
            if (!o) return;
            let c = this.getVerifyUrl(n?.verifyUrl);
            return this.fetchAttestation(o, c);
          })
        ),
        Te(this, "fetchAttestation", (n, i) =>
          f(this, null, function* () {
            this.logger.debug(`resolving attestation: ${n} from url: ${i}`);
            let o = this.startAbortTimer(K.ONE_SECOND * 5),
              a = yield fetch(`${i}/attestation/${n}?v2Supported=true`, {
                signal: this.abortController.signal,
              });
            return clearTimeout(o), a.status === 200 ? yield a.json() : void 0;
          })
        ),
        Te(this, "getVerifyUrl", (n) => {
          let i = n || rn;
          return (
            K1.includes(i) ||
              (this.logger.info(
                `verify url: ${i}, not included in trusted list, assigning default: ${rn}`
              ),
              (i = rn)),
            i
          );
        }),
        Te(this, "fetchPublicKey", () =>
          f(this, null, function* () {
            try {
              this.logger.debug(
                `fetching public key from: ${this.verifyUrlV3}`
              );
              let n = this.startAbortTimer(K.FIVE_SECONDS),
                i = yield fetch(`${this.verifyUrlV3}/public-key`, {
                  signal: this.abortController.signal,
                });
              return clearTimeout(n), yield i.json();
            } catch (n) {
              this.logger.warn(n);
            }
          })
        ),
        Te(this, "persistPublicKey", (n) =>
          f(this, null, function* () {
            this.logger.debug(n, "persisting public key to local storage"),
              yield this.store.setItem(this.storeKey, n),
              (this.publicKey = n);
          })
        ),
        Te(this, "removePublicKey", () =>
          f(this, null, function* () {
            this.logger.debug("removing verify v2 public key from storage"),
              yield this.store.removeItem(this.storeKey),
              (this.publicKey = void 0);
          })
        ),
        Te(this, "isValidJwtAttestation", (n) =>
          f(this, null, function* () {
            let i = yield this.getPublicKey();
            try {
              if (i) return this.validateAttestation(n, i);
            } catch (a) {
              this.logger.error(a),
                this.logger.warn("error validating attestation");
            }
            let o = yield this.fetchAndPersistPublicKey();
            try {
              if (o) return this.validateAttestation(n, o);
            } catch (a) {
              this.logger.error(a),
                this.logger.warn("error validating attestation");
            }
          })
        ),
        Te(this, "getPublicKey", () =>
          f(this, null, function* () {
            return this.publicKey
              ? this.publicKey
              : yield this.fetchAndPersistPublicKey();
          })
        ),
        Te(this, "fetchAndPersistPublicKey", () =>
          f(this, null, function* () {
            if (this.fetchPromise)
              return yield this.fetchPromise, this.publicKey;
            this.fetchPromise = new Promise((i) =>
              f(this, null, function* () {
                let o = yield this.fetchPublicKey();
                o && (yield this.persistPublicKey(o), i(o));
              })
            );
            let n = yield this.fetchPromise;
            return (this.fetchPromise = void 0), n;
          })
        ),
        Te(this, "validateAttestation", (n, i) => {
          let o = kp(n, i.publicKey),
            a = {
              hasExpired: (0, K.toMiliseconds)(o.exp) < Date.now(),
              payload: o,
            };
          if (a.hasExpired)
            throw (
              (this.logger.warn("resolve: jwt attestation expired"),
              new Error("JWT attestation expired"))
            );
          return {
            origin: a.payload.origin,
            isScam: a.payload.isScam,
            isVerified: a.payload.isVerified,
          };
        }),
        (this.logger = ot(s, this.name)),
        (this.abortController = new AbortController()),
        (this.isDevEnv = Hn()),
        this.init();
    }
    get storeKey() {
      return (
        this.storagePrefix +
        this.version +
        this.core.customStoragePrefix +
        "//verify:public:key"
      );
    }
    get context() {
      return qe(this.logger);
    }
    startAbortTimer(e) {
      return (
        (this.abortController = new AbortController()),
        setTimeout(() => this.abortController.abort(), (0, K.toMiliseconds)(e))
      );
    }
  },
  CS = Object.defineProperty,
  PS = (t, e, s) =>
    e in t
      ? CS(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (t[e] = s),
  vg = (t, e, s) => PS(t, typeof e != "symbol" ? e + "" : e, s),
  Xl = class extends Ni {
    constructor(e, s) {
      super(e, s),
        (this.projectId = e),
        (this.logger = s),
        vg(this, "context", G1),
        vg(this, "registerDeviceToken", (r) =>
          f(this, null, function* () {
            let {
                clientId: n,
                token: i,
                notificationType: o,
                enableEncrypted: a = !1,
              } = r,
              c = `${W1}/${this.projectId}/clients`;
            yield fetch(c, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                client_id: n,
                type: o,
                token: i,
                always_raw: a,
              }),
            });
          })
        ),
        (this.logger = ot(s, this.context));
    }
  },
  OS = Object.defineProperty,
  Eg = Object.getOwnPropertySymbols,
  NS = Object.prototype.hasOwnProperty,
  RS = Object.prototype.propertyIsEnumerable,
  Zl = (t, e, s) =>
    e in t
      ? OS(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (t[e] = s),
  si = (t, e) => {
    for (var s in e || (e = {})) NS.call(e, s) && Zl(t, s, e[s]);
    if (Eg) for (var s of Eg(e)) RS.call(e, s) && Zl(t, s, e[s]);
    return t;
  },
  Re = (t, e, s) => Zl(t, typeof e != "symbol" ? e + "" : e, s),
  Jl = class extends Ri {
    constructor(e, s, r = !0) {
      super(e, s, r),
        (this.core = e),
        (this.logger = s),
        Re(this, "context", X1),
        Re(this, "storagePrefix", as),
        Re(this, "storageVersion", Y1),
        Re(this, "events", new Map()),
        Re(this, "shouldPersist", !1),
        Re(this, "init", () =>
          f(this, null, function* () {
            if (!Hn())
              try {
                let n = {
                  eventId: Yc(),
                  timestamp: Date.now(),
                  domain: this.getAppDomain(),
                  props: {
                    event: "INIT",
                    type: "",
                    properties: {
                      client_id: yield this.core.crypto.getClientId(),
                      user_agent: Gc(
                        this.core.relayer.protocol,
                        this.core.relayer.version,
                        _l
                      ),
                    },
                  },
                };
                yield this.sendEvent([n]);
              } catch (n) {
                this.logger.warn(n);
              }
          })
        ),
        Re(this, "createEvent", (n) => {
          let {
              event: i = "ERROR",
              type: o = "",
              properties: { topic: a, trace: c },
            } = n,
            l = Yc(),
            u = this.core.projectId || "",
            h = Date.now(),
            d = si(
              {
                eventId: l,
                timestamp: h,
                props: {
                  event: i,
                  type: o,
                  properties: { topic: a, trace: c },
                },
                bundleId: u,
                domain: this.getAppDomain(),
              },
              this.setMethods(l)
            );
          return (
            this.telemetryEnabled &&
              (this.events.set(l, d), (this.shouldPersist = !0)),
            d
          );
        }),
        Re(this, "getEvent", (n) => {
          let { eventId: i, topic: o } = n;
          if (i) return this.events.get(i);
          let a = Array.from(this.events.values()).find(
            (c) => c.props.properties.topic === o
          );
          if (a) return si(si({}, a), this.setMethods(a.eventId));
        }),
        Re(this, "deleteEvent", (n) => {
          let { eventId: i } = n;
          this.events.delete(i), (this.shouldPersist = !0);
        }),
        Re(this, "setEventListeners", () => {
          this.core.heartbeat.on(ir.pulse, () =>
            f(this, null, function* () {
              this.shouldPersist && (yield this.persist()),
                this.events.forEach((n) => {
                  (0, K.fromMiliseconds)(Date.now()) -
                    (0, K.fromMiliseconds)(n.timestamp) >
                    Z1 &&
                    (this.events.delete(n.eventId), (this.shouldPersist = !0));
                });
            })
          );
        }),
        Re(this, "setMethods", (n) => ({
          addTrace: (i) => this.addTrace(n, i),
          setError: (i) => this.setError(n, i),
        })),
        Re(this, "addTrace", (n, i) => {
          let o = this.events.get(n);
          o &&
            (o.props.properties.trace.push(i),
            this.events.set(n, o),
            (this.shouldPersist = !0));
        }),
        Re(this, "setError", (n, i) => {
          let o = this.events.get(n);
          o &&
            ((o.props.type = i),
            (o.timestamp = Date.now()),
            this.events.set(n, o),
            (this.shouldPersist = !0));
        }),
        Re(this, "persist", () =>
          f(this, null, function* () {
            yield this.core.storage.setItem(
              this.storageKey,
              Array.from(this.events.values())
            ),
              (this.shouldPersist = !1);
          })
        ),
        Re(this, "restore", () =>
          f(this, null, function* () {
            try {
              let n = (yield this.core.storage.getItem(this.storageKey)) || [];
              if (!n.length) return;
              n.forEach((i) => {
                this.events.set(
                  i.eventId,
                  si(si({}, i), this.setMethods(i.eventId))
                );
              });
            } catch (n) {
              this.logger.warn(n);
            }
          })
        ),
        Re(this, "submit", () =>
          f(this, null, function* () {
            if (!this.telemetryEnabled || this.events.size === 0) return;
            let n = [];
            for (let [i, o] of this.events) o.props.type && n.push(o);
            if (n.length !== 0)
              try {
                if ((yield this.sendEvent(n)).ok)
                  for (let i of n)
                    this.events.delete(i.eventId), (this.shouldPersist = !0);
              } catch (i) {
                this.logger.warn(i);
              }
          })
        ),
        Re(this, "sendEvent", (n) =>
          f(this, null, function* () {
            let i = this.getAppDomain() ? "" : "&sp=desktop";
            return yield fetch(
              `${J1}?projectId=${this.core.projectId}&st=events_sdk&sv=js-${_l}${i}`,
              { method: "POST", body: JSON.stringify(n) }
            );
          })
        ),
        Re(this, "getAppDomain", () => Kc().url),
        (this.logger = ot(s, this.context)),
        (this.telemetryEnabled = r),
        r
          ? this.restore().then(() =>
              f(this, null, function* () {
                yield this.submit(), this.setEventListeners();
              })
            )
          : this.persist();
    }
    get storageKey() {
      return (
        this.storagePrefix +
        this.storageVersion +
        this.core.customStoragePrefix +
        "//" +
        this.context
      );
    }
  },
  kS = Object.defineProperty,
  xg = Object.getOwnPropertySymbols,
  BS = Object.prototype.hasOwnProperty,
  US = Object.prototype.propertyIsEnumerable,
  Ql = (t, e, s) =>
    e in t
      ? kS(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (t[e] = s),
  Sg = (t, e) => {
    for (var s in e || (e = {})) BS.call(e, s) && Ql(t, s, e[s]);
    if (xg) for (var s of xg(e)) US.call(e, s) && Ql(t, s, e[s]);
    return t;
  },
  ge = (t, e, s) => Ql(t, typeof e != "symbol" ? e + "" : e, s),
  eu = class t extends xi {
    constructor(e) {
      var s;
      super(e),
        ge(this, "protocol", _g),
        ge(this, "version", Tg),
        ge(this, "name", jo),
        ge(this, "relayUrl"),
        ge(this, "projectId"),
        ge(this, "customStoragePrefix"),
        ge(this, "events", new Cs.EventEmitter()),
        ge(this, "logger"),
        ge(this, "heartbeat"),
        ge(this, "relayer"),
        ge(this, "crypto"),
        ge(this, "storage"),
        ge(this, "history"),
        ge(this, "expirer"),
        ge(this, "pairing"),
        ge(this, "verify"),
        ge(this, "echoClient"),
        ge(this, "linkModeSupportedApps"),
        ge(this, "eventClient"),
        ge(this, "initialized", !1),
        ge(this, "logChunkController"),
        ge(this, "on", (a, c) => this.events.on(a, c)),
        ge(this, "once", (a, c) => this.events.once(a, c)),
        ge(this, "off", (a, c) => this.events.off(a, c)),
        ge(this, "removeListener", (a, c) => this.events.removeListener(a, c)),
        ge(
          this,
          "dispatchEnvelope",
          ({ topic: a, message: c, sessionExists: l }) => {
            if (!a || !c) return;
            let u = {
              topic: a,
              message: c,
              publishedAt: Date.now(),
              transportType: me.link_mode,
            };
            this.relayer.onLinkMessageEvent(u, { sessionExists: l });
          }
        );
      let r = this.getGlobalCore(e?.customStoragePrefix);
      if (r)
        try {
          return (
            (this.customStoragePrefix = r.customStoragePrefix),
            (this.logger = r.logger),
            (this.heartbeat = r.heartbeat),
            (this.crypto = r.crypto),
            (this.history = r.history),
            (this.expirer = r.expirer),
            (this.storage = r.storage),
            (this.relayer = r.relayer),
            (this.pairing = r.pairing),
            (this.verify = r.verify),
            (this.echoClient = r.echoClient),
            (this.linkModeSupportedApps = r.linkModeSupportedApps),
            (this.eventClient = r.eventClient),
            (this.initialized = r.initialized),
            (this.logChunkController = r.logChunkController),
            r
          );
        } catch (a) {
          console.warn("Failed to copy global core", a);
        }
      (this.projectId = e?.projectId),
        (this.relayUrl = e?.relayUrl || Ag),
        (this.customStoragePrefix =
          e != null && e.customStoragePrefix
            ? `:${e.customStoragePrefix}`
            : "");
      let n = yh({
          level:
            typeof e?.logger == "string" && e.logger ? e.logger : b1.logger,
          name: jo,
        }),
        { logger: i, chunkLoggerController: o } = Ei({
          opts: n,
          maxSizeInBytes: e?.maxLogBlobSizeInBytes,
          loggerOverride: e?.logger,
        });
      (this.logChunkController = o),
        (s = this.logChunkController) != null &&
          s.downloadLogsBlobInBrowser &&
          (window.downloadLogsBlobInBrowser = () =>
            f(this, null, function* () {
              var a, c;
              (a = this.logChunkController) != null &&
                a.downloadLogsBlobInBrowser &&
                ((c = this.logChunkController) == null ||
                  c.downloadLogsBlobInBrowser({
                    clientId: yield this.crypto.getClientId(),
                  }));
            })),
        (this.logger = ot(i, this.name)),
        (this.heartbeat = new Qu()),
        (this.crypto = new Ul(this, this.logger, e?.keychain)),
        (this.history = new Gl(this, this.logger)),
        (this.expirer = new Wl(this, this.logger)),
        (this.storage =
          e != null && e.storage
            ? e.storage
            : new eh(Sg(Sg({}, v1), e?.storageOptions))),
        (this.relayer = new Vl({
          core: this,
          logger: this.logger,
          relayUrl: this.relayUrl,
          projectId: this.projectId,
        })),
        (this.pairing = new Kl(this, this.logger)),
        (this.verify = new Yl(this, this.logger, this.storage)),
        (this.echoClient = new Xl(this.projectId || "", this.logger)),
        (this.linkModeSupportedApps = []),
        (this.eventClient = new Jl(this, this.logger, e?.telemetryEnabled)),
        this.setGlobalCore(this);
    }
    static init(e) {
      return f(this, null, function* () {
        let s = new t(e);
        yield s.initialize();
        let r = yield s.crypto.getClientId();
        return yield s.storage.setItem(B1, r), s;
      });
    }
    get context() {
      return qe(this.logger);
    }
    start() {
      return f(this, null, function* () {
        this.initialized || (yield this.initialize());
      });
    }
    getLogsBlob() {
      return f(this, null, function* () {
        var e;
        return (e = this.logChunkController) == null
          ? void 0
          : e.logsToBlob({ clientId: yield this.crypto.getClientId() });
      });
    }
    addLinkModeSupportedApp(e) {
      return f(this, null, function* () {
        this.linkModeSupportedApps.includes(e) ||
          (this.linkModeSupportedApps.push(e),
          yield this.storage.setItem(tg, this.linkModeSupportedApps));
      });
    }
    initialize() {
      return f(this, null, function* () {
        this.logger.trace("Initialized");
        try {
          yield this.crypto.init(),
            yield this.history.init(),
            yield this.expirer.init(),
            yield this.relayer.init(),
            yield this.heartbeat.init(),
            yield this.pairing.init(),
            (this.linkModeSupportedApps =
              (yield this.storage.getItem(tg)) || []),
            (this.initialized = !0),
            this.logger.info("Core Initialization Success");
        } catch (e) {
          throw (
            (this.logger.warn(
              e,
              `Core Initialization Failure at epoch ${Date.now()}`
            ),
            this.logger.error(e.message),
            e)
          );
        }
      });
    }
    getGlobalCore(e = "") {
      try {
        if (this.isGlobalCoreDisabled()) return;
        let s = `_walletConnectCore_${e}`,
          r = `${s}_count`;
        return (
          (globalThis[r] = (globalThis[r] || 0) + 1),
          globalThis[r] > 1 &&
            console.warn(
              `WalletConnect Core is already initialized. This is probably a mistake and can lead to unexpected behavior. Init() was called ${globalThis[r]} times.`
            ),
          globalThis[s]
        );
      } catch (s) {
        console.warn("Failed to get global WalletConnect core", s);
        return;
      }
    }
    setGlobalCore(e) {
      var s;
      try {
        if (this.isGlobalCoreDisabled()) return;
        let r = `_walletConnectCore_${
          ((s = e.opts) == null ? void 0 : s.customStoragePrefix) || ""
        }`;
        globalThis[r] = e;
      } catch (r) {
        console.warn("Failed to set global WalletConnect core", r);
      }
    }
    isGlobalCoreDisabled() {
      try {
        return (
          typeof process < "u" && process.env.DISABLE_GLOBAL_CORE === "true"
        );
      } catch {
        return !0;
      }
    }
  },
  Mg = eu;
var te = gt(ea(), 1);
var Vg = "wc",
  Hg = 2,
  Kg = "client",
  gu = `${Vg}@${Hg}:${Kg}:`,
  su = {
    name: Kg,
    logger: "error",
    controller: !1,
    relayUrl: "wss://relay.walletconnect.org",
  };
var Fg = "WALLETCONNECT_DEEPLINK_CHOICE";
var LS = "proposal";
var $g = "Proposal expired",
  DS = "session",
  on = te.SEVEN_DAYS,
  qS = "engine",
  De = {
    wc_sessionPropose: {
      req: { ttl: te.FIVE_MINUTES, prompt: !0, tag: 1100 },
      res: { ttl: te.FIVE_MINUTES, prompt: !1, tag: 1101 },
      reject: { ttl: te.FIVE_MINUTES, prompt: !1, tag: 1120 },
      autoReject: { ttl: te.FIVE_MINUTES, prompt: !1, tag: 1121 },
    },
    wc_sessionSettle: {
      req: { ttl: te.FIVE_MINUTES, prompt: !1, tag: 1102 },
      res: { ttl: te.FIVE_MINUTES, prompt: !1, tag: 1103 },
    },
    wc_sessionUpdate: {
      req: { ttl: te.ONE_DAY, prompt: !1, tag: 1104 },
      res: { ttl: te.ONE_DAY, prompt: !1, tag: 1105 },
    },
    wc_sessionExtend: {
      req: { ttl: te.ONE_DAY, prompt: !1, tag: 1106 },
      res: { ttl: te.ONE_DAY, prompt: !1, tag: 1107 },
    },
    wc_sessionRequest: {
      req: { ttl: te.FIVE_MINUTES, prompt: !0, tag: 1108 },
      res: { ttl: te.FIVE_MINUTES, prompt: !1, tag: 1109 },
    },
    wc_sessionEvent: {
      req: { ttl: te.FIVE_MINUTES, prompt: !0, tag: 1110 },
      res: { ttl: te.FIVE_MINUTES, prompt: !1, tag: 1111 },
    },
    wc_sessionDelete: {
      req: { ttl: te.ONE_DAY, prompt: !1, tag: 1112 },
      res: { ttl: te.ONE_DAY, prompt: !1, tag: 1113 },
    },
    wc_sessionPing: {
      req: { ttl: te.ONE_DAY, prompt: !1, tag: 1114 },
      res: { ttl: te.ONE_DAY, prompt: !1, tag: 1115 },
    },
    wc_sessionAuthenticate: {
      req: { ttl: te.ONE_HOUR, prompt: !0, tag: 1116 },
      res: { ttl: te.ONE_HOUR, prompt: !1, tag: 1117 },
      reject: { ttl: te.FIVE_MINUTES, prompt: !1, tag: 1118 },
      autoReject: { ttl: te.FIVE_MINUTES, prompt: !1, tag: 1119 },
    },
  },
  ru = { min: te.FIVE_MINUTES, max: te.SEVEN_DAYS },
  ls = { idle: "IDLE", active: "ACTIVE" },
  jS = {
    eth_sendTransaction: { key: "" },
    eth_sendRawTransaction: { key: "" },
    wallet_sendCalls: { key: "" },
    solana_signTransaction: { key: "signature" },
    solana_signAllTransactions: { key: "transactions" },
    solana_signAndSendTransaction: { key: "signature" },
    sui_signAndExecuteTransaction: { key: "digest" },
    sui_signTransaction: { key: "" },
    hedera_signAndExecuteTransaction: { key: "transactionId" },
    hedera_executeTransaction: { key: "transactionId" },
    near_signTransaction: { key: "" },
    near_signTransactions: { key: "" },
    tron_signTransaction: { key: "txID" },
    xrpl_signTransaction: { key: "" },
    xrpl_signTransactionFor: { key: "" },
    algo_signTxn: { key: "" },
    sendTransfer: { key: "txid" },
    stacks_stxTransfer: { key: "txId" },
    polkadot_signTransaction: { key: "" },
    cosmos_signDirect: { key: "" },
  },
  MS = "request",
  FS = [
    "wc_sessionPropose",
    "wc_sessionRequest",
    "wc_authRequest",
    "wc_sessionAuthenticate",
  ],
  $S = "wc";
var zS = "auth",
  VS = "authKeys",
  HS = "pairingTopics",
  KS = "requests",
  zo = `${$S}@${1.5}:${zS}:`,
  Fo = `${zo}:PUB_KEY`,
  GS = Object.defineProperty,
  WS = Object.defineProperties,
  YS = Object.getOwnPropertyDescriptors,
  zg = Object.getOwnPropertySymbols,
  XS = Object.prototype.hasOwnProperty,
  ZS = Object.prototype.propertyIsEnumerable,
  iu = (t, e, s) =>
    e in t
      ? GS(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (t[e] = s),
  ue = (t, e) => {
    for (var s in e || (e = {})) XS.call(e, s) && iu(t, s, e[s]);
    if (zg) for (var s of zg(e)) ZS.call(e, s) && iu(t, s, e[s]);
    return t;
  },
  Ye = (t, e) => WS(t, YS(e)),
  L = (t, e, s) => iu(t, typeof e != "symbol" ? e + "" : e, s),
  ou = class extends Bi {
    constructor(e) {
      super(e),
        L(this, "name", qS),
        L(this, "events", new $o.default()),
        L(this, "initialized", !1),
        L(this, "requestQueue", { state: ls.idle, queue: [] }),
        L(this, "sessionRequestQueue", { state: ls.idle, queue: [] }),
        L(this, "emittedSessionRequests", new yo({ limit: 500 })),
        L(this, "requestQueueDelay", te.ONE_SECOND),
        L(this, "expectedPairingMethodMap", new Map()),
        L(this, "recentlyDeletedMap", new Map()),
        L(this, "recentlyDeletedLimit", 200),
        L(this, "relayMessageCache", []),
        L(this, "pendingSessions", new Map()),
        L(this, "init", () =>
          f(this, null, function* () {
            this.initialized ||
              (yield this.cleanup(),
              this.registerRelayerEvents(),
              this.registerExpirerEvents(),
              this.registerPairingEvents(),
              yield this.registerLinkModeListeners(),
              this.client.core.pairing.register({ methods: Object.keys(De) }),
              (this.initialized = !0),
              setTimeout(
                () =>
                  f(this, null, function* () {
                    yield this.processPendingMessageEvents(),
                      (this.sessionRequestQueue.queue =
                        this.getPendingSessionRequests()),
                      this.processSessionRequestQueue();
                  }),
                (0, te.toMiliseconds)(this.requestQueueDelay)
              ));
          })
        ),
        L(this, "connect", (s) =>
          f(this, null, function* () {
            this.isInitialized(), yield this.confirmOnlineStateOrThrow();
            let r = Ye(ue({}, s), {
              requiredNamespaces: s.requiredNamespaces || {},
              optionalNamespaces: s.optionalNamespaces || {},
            });
            yield this.isValidConnect(r),
              (r.optionalNamespaces = Bp(
                r.requiredNamespaces,
                r.optionalNamespaces
              )),
              (r.requiredNamespaces = {});
            let {
                pairingTopic: n,
                requiredNamespaces: i,
                optionalNamespaces: o,
                sessionProperties: a,
                scopedProperties: c,
                relays: l,
              } = r,
              u = n,
              h,
              d = !1;
            try {
              if (u) {
                let O = this.client.core.pairing.pairings.get(u);
                this.client.logger.warn(
                  "connect() with existing pairing topic is deprecated and will be removed in the next major release."
                ),
                  (d = O.active);
              }
            } catch (O) {
              throw (
                (this.client.logger.error(
                  `connect() -> pairing.get(${u}) failed`
                ),
                O)
              );
            }
            if (!u || !d) {
              let { topic: O, uri: U } = yield this.client.core.pairing.create({
                internal: { skipSubscribe: !0 },
              });
              (u = O), (h = U);
            }
            if (!u) {
              let { message: O } = F(
                "NO_MATCHING_KEY",
                `connect() pairing topic: ${u}`
              );
              throw new Error(O);
            }
            let p = yield this.client.core.crypto.generateKeyPair(),
              m = De.wc_sessionPropose.req.ttl || te.FIVE_MINUTES,
              g = ve(m),
              w = Ye(
                ue(
                  ue(
                    {
                      requiredNamespaces: i,
                      optionalNamespaces: o,
                      relays: l ?? [{ protocol: tu }],
                      proposer: {
                        publicKey: p,
                        metadata: this.client.metadata,
                      },
                      expiryTimestamp: g,
                      pairingTopic: u,
                    },
                    a && { sessionProperties: a }
                  ),
                  c && { scopedProperties: c }
                ),
                { id: us() }
              ),
              R = oe("session_connect", w.id),
              { reject: B, resolve: T, done: S } = Ts(m, $g),
              A = ({ id: O }) => {
                O === w.id &&
                  (this.client.events.off("proposal_expire", A),
                  this.pendingSessions.delete(w.id),
                  this.events.emit(R, { error: { message: $g, code: 0 } }));
              };
            return (
              this.client.events.on("proposal_expire", A),
              this.events.once(R, ({ error: O, session: U }) => {
                this.client.events.off("proposal_expire", A),
                  O ? B(O) : U && T(U);
              }),
              yield this.sendProposeSession({
                proposal: w,
                publishOpts: {
                  internal: { throwOnFailedPublish: !0 },
                  tvf: { correlationId: w.id },
                },
              }),
              yield this.setProposal(w.id, w),
              { uri: h, approval: S }
            );
          })
        ),
        L(this, "pair", (s) =>
          f(this, null, function* () {
            this.isInitialized(), yield this.confirmOnlineStateOrThrow();
            try {
              return yield this.client.core.pairing.pair(s);
            } catch (r) {
              throw (this.client.logger.error("pair() failed"), r);
            }
          })
        ),
        L(this, "approve", (s) =>
          f(this, null, function* () {
            var r, n, i;
            let o = this.client.core.eventClient.createEvent({
              properties: {
                topic: (r = s?.id) == null ? void 0 : r.toString(),
                trace: [Ut.session_approve_started],
              },
            });
            try {
              this.isInitialized(), yield this.confirmOnlineStateOrThrow();
            } catch (N) {
              throw (o.setError(Qs.no_internet_connection), N);
            }
            try {
              yield this.isValidProposalId(s?.id);
            } catch (N) {
              throw (
                (this.client.logger.error(
                  `approve() -> proposal.get(${s?.id}) failed`
                ),
                o.setError(Qs.proposal_not_found),
                N)
              );
            }
            try {
              yield this.isValidApprove(s);
            } catch (N) {
              throw (
                (this.client.logger.error(
                  "approve() -> isValidApprove() failed"
                ),
                o.setError(Qs.session_approve_namespace_validation_failure),
                N)
              );
            }
            let {
                id: a,
                relayProtocol: c,
                namespaces: l,
                sessionProperties: u,
                scopedProperties: h,
                sessionConfig: d,
              } = s,
              p = this.client.proposal.get(a);
            this.client.core.eventClient.deleteEvent({ eventId: o.eventId });
            let {
                pairingTopic: m,
                proposer: g,
                requiredNamespaces: w,
                optionalNamespaces: R,
              } = p,
              B =
                (n = this.client.core.eventClient) == null
                  ? void 0
                  : n.getEvent({ topic: m });
            B ||
              (B =
                (i = this.client.core.eventClient) == null
                  ? void 0
                  : i.createEvent({
                      type: Ut.session_approve_started,
                      properties: {
                        topic: m,
                        trace: [
                          Ut.session_approve_started,
                          Ut.session_namespaces_validation_success,
                        ],
                      },
                    }));
            let T = yield this.client.core.crypto.generateKeyPair(),
              S = g.publicKey,
              A = yield this.client.core.crypto.generateSharedKey(T, S),
              O = ue(
                ue(
                  ue(
                    {
                      relay: { protocol: c ?? "irn" },
                      namespaces: l,
                      controller: {
                        publicKey: T,
                        metadata: this.client.metadata,
                      },
                      expiry: ve(on),
                    },
                    u && { sessionProperties: u }
                  ),
                  h && { scopedProperties: h }
                ),
                d && { sessionConfig: d }
              ),
              U = me.relay;
            B.addTrace(Ut.subscribing_session_topic);
            try {
              yield this.client.core.relayer.subscribe(A, {
                transportType: U,
                internal: { skipSubscribe: !0 },
              });
            } catch (N) {
              throw (B.setError(Qs.subscribe_session_topic_failure), N);
            }
            B.addTrace(Ut.subscribe_session_topic_success);
            let q = Ye(ue({}, O), {
              topic: A,
              requiredNamespaces: w,
              optionalNamespaces: R,
              pairingTopic: m,
              acknowledged: !1,
              self: O.controller,
              peer: { publicKey: g.publicKey, metadata: g.metadata },
              controller: T,
              transportType: me.relay,
            });
            yield this.client.session.set(A, q), B.addTrace(Ut.store_session);
            try {
              yield this.sendApproveSession({
                sessionTopic: A,
                proposal: p,
                pairingProposalResponse: {
                  relay: { protocol: c ?? "irn" },
                  responderPublicKey: T,
                },
                sessionSettleRequest: O,
                publishOpts: {
                  internal: { throwOnFailedPublish: !0 },
                  tvf: { correlationId: a },
                },
              }),
                B.addTrace(Ut.session_approve_publish_success);
            } catch (N) {
              throw (
                (this.client.logger.error(N),
                this.client.session.delete(A, fe("USER_DISCONNECTED")),
                yield this.client.core.relayer.unsubscribe(A),
                N)
              );
            }
            return (
              this.client.core.eventClient.deleteEvent({ eventId: B.eventId }),
              yield this.client.core.pairing.updateMetadata({
                topic: m,
                metadata: g.metadata,
              }),
              yield this.deleteProposal(a),
              yield this.client.core.pairing.activate({ topic: m }),
              yield this.setExpiry(A, ve(on)),
              {
                topic: A,
                acknowledged: () => Promise.resolve(this.client.session.get(A)),
              }
            );
          })
        ),
        L(this, "reject", (s) =>
          f(this, null, function* () {
            this.isInitialized(), yield this.confirmOnlineStateOrThrow();
            try {
              yield this.isValidReject(s);
            } catch (o) {
              throw (
                (this.client.logger.error("reject() -> isValidReject() failed"),
                o)
              );
            }
            let { id: r, reason: n } = s,
              i;
            try {
              i = this.client.proposal.get(r).pairingTopic;
            } catch (o) {
              throw (
                (this.client.logger.error(
                  `reject() -> proposal.get(${r}) failed`
                ),
                o)
              );
            }
            i &&
              (yield this.sendError({
                id: r,
                topic: i,
                error: n,
                rpcOpts: De.wc_sessionPropose.reject,
              })),
              yield this.deleteProposal(r);
          })
        ),
        L(this, "update", (s) =>
          f(this, null, function* () {
            this.isInitialized(), yield this.confirmOnlineStateOrThrow();
            try {
              yield this.isValidUpdate(s);
            } catch (h) {
              throw (
                (this.client.logger.error("update() -> isValidUpdate() failed"),
                h)
              );
            }
            let { topic: r, namespaces: n } = s,
              { done: i, resolve: o, reject: a } = Ts(),
              c = us(),
              l = hs().toString(),
              u = this.client.session.get(r).namespaces;
            return (
              this.events.once(oe("session_update", c), ({ error: h }) => {
                h ? a(h) : o();
              }),
              yield this.client.session.update(r, { namespaces: n }),
              yield this.sendRequest({
                topic: r,
                method: "wc_sessionUpdate",
                params: { namespaces: n },
                throwOnFailedPublish: !0,
                clientRpcId: c,
                relayRpcId: l,
              }).catch((h) => {
                this.client.logger.error(h),
                  this.client.session.update(r, { namespaces: u }),
                  a(h);
              }),
              { acknowledged: i }
            );
          })
        ),
        L(this, "extend", (s) =>
          f(this, null, function* () {
            this.isInitialized(), yield this.confirmOnlineStateOrThrow();
            try {
              yield this.isValidExtend(s);
            } catch (c) {
              throw (
                (this.client.logger.error("extend() -> isValidExtend() failed"),
                c)
              );
            }
            let { topic: r } = s,
              n = us(),
              { done: i, resolve: o, reject: a } = Ts();
            return (
              this.events.once(oe("session_extend", n), ({ error: c }) => {
                c ? a(c) : o();
              }),
              yield this.setExpiry(r, ve(on)),
              this.sendRequest({
                topic: r,
                method: "wc_sessionExtend",
                params: {},
                clientRpcId: n,
                throwOnFailedPublish: !0,
              }).catch((c) => {
                a(c);
              }),
              { acknowledged: i }
            );
          })
        ),
        L(this, "request", (s) =>
          f(this, null, function* () {
            this.isInitialized();
            try {
              yield this.isValidRequest(s);
            } catch (w) {
              throw (
                (this.client.logger.error(
                  "request() -> isValidRequest() failed"
                ),
                w)
              );
            }
            let {
                chainId: r,
                request: n,
                topic: i,
                expiry: o = De.wc_sessionRequest.req.ttl,
              } = s,
              a = this.client.session.get(i);
            a?.transportType === me.relay &&
              (yield this.confirmOnlineStateOrThrow());
            let c = us(),
              l = hs().toString(),
              {
                done: u,
                resolve: h,
                reject: d,
              } = Ts(o, "Request expired. Please try again.");
            this.events.once(
              oe("session_request", c),
              ({ error: w, result: R }) => {
                w ? d(w) : h(R);
              }
            );
            let p = "wc_sessionRequest",
              m = this.getAppLinkIfEnabled(a.peer.metadata, a.transportType);
            if (m)
              return (
                yield this.sendRequest({
                  clientRpcId: c,
                  relayRpcId: l,
                  topic: i,
                  method: p,
                  params: {
                    request: Ye(ue({}, n), { expiryTimestamp: ve(o) }),
                    chainId: r,
                  },
                  expiry: o,
                  throwOnFailedPublish: !0,
                  appLink: m,
                }).catch((w) => d(w)),
                this.client.events.emit("session_request_sent", {
                  topic: i,
                  request: n,
                  chainId: r,
                  id: c,
                }),
                yield u()
              );
            let g = {
              request: Ye(ue({}, n), { expiryTimestamp: ve(o) }),
              chainId: r,
            };
            return yield Promise.all([
              new Promise((w) =>
                f(this, null, function* () {
                  yield this.sendRequest({
                    clientRpcId: c,
                    relayRpcId: l,
                    topic: i,
                    method: p,
                    params: g,
                    expiry: o,
                    throwOnFailedPublish: !0,
                    tvf: this.getTVFParams(c, g),
                  }).catch((R) => d(R)),
                    this.client.events.emit("session_request_sent", {
                      topic: i,
                      request: n,
                      chainId: r,
                      id: c,
                    }),
                    w();
                })
              ),
              new Promise((w) =>
                f(this, null, function* () {
                  var R;
                  if (!((R = a.sessionConfig) != null && R.disableDeepLink)) {
                    let B = yield Tf(this.client.core.storage, Fg);
                    yield _f({ id: c, topic: i, wcDeepLink: B });
                  }
                  w();
                })
              ),
              u(),
            ]).then((w) => w[2]);
          })
        ),
        L(this, "respond", (s) =>
          f(this, null, function* () {
            var r, n;
            this.isInitialized();
            let i = this.client.core.eventClient.createEvent({
              properties: {
                topic:
                  s?.topic ||
                  ((n = (r = s?.response) == null ? void 0 : r.id) == null
                    ? void 0
                    : n.toString()),
                trace: [Ut.session_request_response_started],
              },
            });
            try {
              yield this.isValidRespond(s);
            } catch (h) {
              throw (
                (i.addTrace(h?.message),
                i.setError(Qs.session_request_response_validation_failure),
                h)
              );
            }
            i.addTrace(Ut.session_request_response_validation_success);
            let { topic: o, response: a } = s,
              { id: c } = a,
              l = this.client.session.get(o);
            l.transportType === me.relay &&
              (yield this.confirmOnlineStateOrThrow());
            let u = this.getAppLinkIfEnabled(l.peer.metadata, l.transportType);
            try {
              i.addTrace(Ut.session_request_response_publish_started),
                Mt(a)
                  ? yield this.sendResult({
                      id: c,
                      topic: o,
                      result: a.result,
                      throwOnFailedPublish: !0,
                      appLink: u,
                    })
                  : Pt(a) &&
                    (yield this.sendError({
                      id: c,
                      topic: o,
                      error: a.error,
                      appLink: u,
                    })),
                this.cleanupAfterResponse(s);
            } catch (h) {
              throw (
                (i.addTrace(h?.message),
                i.setError(Qs.session_request_response_publish_failure),
                h)
              );
            }
          })
        ),
        L(this, "ping", (s) =>
          f(this, null, function* () {
            this.isInitialized(), yield this.confirmOnlineStateOrThrow();
            try {
              yield this.isValidPing(s);
            } catch (n) {
              throw (
                (this.client.logger.error("ping() -> isValidPing() failed"), n)
              );
            }
            let { topic: r } = s;
            if (this.client.session.keys.includes(r)) {
              let n = us(),
                i = hs().toString(),
                { done: o, resolve: a, reject: c } = Ts();
              this.events.once(oe("session_ping", n), ({ error: l }) => {
                l ? c(l) : a();
              }),
                yield Promise.all([
                  this.sendRequest({
                    topic: r,
                    method: "wc_sessionPing",
                    params: {},
                    throwOnFailedPublish: !0,
                    clientRpcId: n,
                    relayRpcId: i,
                  }),
                  o(),
                ]);
            } else this.client.core.pairing.pairings.keys.includes(r) && (this.client.logger.warn("ping() on pairing topic is deprecated and will be removed in the next major release."), yield this.client.core.pairing.ping({ topic: r }));
          })
        ),
        L(this, "emit", (s) =>
          f(this, null, function* () {
            this.isInitialized(),
              yield this.confirmOnlineStateOrThrow(),
              yield this.isValidEmit(s);
            let { topic: r, event: n, chainId: i } = s,
              o = hs().toString(),
              a = us();
            yield this.sendRequest({
              topic: r,
              method: "wc_sessionEvent",
              params: { event: n, chainId: i },
              throwOnFailedPublish: !0,
              relayRpcId: o,
              clientRpcId: a,
            });
          })
        ),
        L(this, "disconnect", (s) =>
          f(this, null, function* () {
            this.isInitialized(),
              yield this.confirmOnlineStateOrThrow(),
              yield this.isValidDisconnect(s);
            let { topic: r } = s;
            if (this.client.session.keys.includes(r))
              yield this.sendRequest({
                topic: r,
                method: "wc_sessionDelete",
                params: fe("USER_DISCONNECTED"),
                throwOnFailedPublish: !0,
              }),
                yield this.deleteSession({ topic: r, emitEvent: !1 });
            else if (this.client.core.pairing.pairings.keys.includes(r))
              yield this.client.core.pairing.disconnect({ topic: r });
            else {
              let { message: n } = F(
                "MISMATCHED_TOPIC",
                `Session or pairing topic not found: ${r}`
              );
              throw new Error(n);
            }
          })
        ),
        L(
          this,
          "find",
          (s) => (
            this.isInitialized(),
            this.client.session.getAll().filter((r) => Up(r, s))
          )
        ),
        L(this, "getPendingSessionRequests", () =>
          this.client.pendingRequest.getAll()
        ),
        L(this, "authenticate", (s, r) =>
          f(this, null, function* () {
            var n;
            this.isInitialized(), this.isValidAuthenticate(s);
            let i =
                r &&
                this.client.core.linkModeSupportedApps.includes(r) &&
                ((n = this.client.metadata.redirect) == null
                  ? void 0
                  : n.linkMode),
              o = i ? me.link_mode : me.relay;
            o === me.relay && (yield this.confirmOnlineStateOrThrow());
            let {
                chains: a,
                statement: c = "",
                uri: l,
                domain: u,
                nonce: h,
                type: d,
                exp: p,
                nbf: m,
                methods: g = [],
                expiry: w,
              } = s,
              R = [...(s.resources || [])],
              { topic: B, uri: T } = yield this.client.core.pairing.create({
                methods: ["wc_sessionAuthenticate"],
                transportType: o,
              });
            this.client.logger.info({
              message: "Generated new pairing",
              pairing: { topic: B, uri: T },
            });
            let S = yield this.client.core.crypto.generateKeyPair(),
              A = Zr(S);
            if (
              (yield Promise.all([
                this.client.auth.authKeys.set(Fo, {
                  responseTopic: A,
                  publicKey: S,
                }),
                this.client.auth.pairingTopics.set(A, {
                  topic: A,
                  pairingTopic: B,
                }),
              ]),
              yield this.client.core.relayer.subscribe(A, { transportType: o }),
              this.client.logger.info(
                `sending request to new pairing topic: ${B}`
              ),
              g.length > 0)
            ) {
              let { namespace: x } = Wt(a[0]),
                C = Kf(x, "request", g);
              Wn(R) && (C = Gf(C, R.pop())), R.push(C);
            }
            let O =
                w && w > De.wc_sessionAuthenticate.req.ttl
                  ? w
                  : De.wc_sessionAuthenticate.req.ttl,
              U = {
                authPayload: {
                  type: d ?? "caip122",
                  chains: a,
                  statement: c,
                  aud: l,
                  domain: u,
                  version: "1",
                  nonce: h,
                  iat: new Date().toISOString(),
                  exp: p,
                  nbf: m,
                  resources: R,
                },
                requester: { publicKey: S, metadata: this.client.metadata },
                expiryTimestamp: ve(O),
              },
              q = {
                eip155: {
                  chains: a,
                  methods: [...new Set(["personal_sign", ...g])],
                  events: ["chainChanged", "accountsChanged"],
                },
              },
              N = {
                requiredNamespaces: {},
                optionalNamespaces: q,
                relays: [{ protocol: "irn" }],
                pairingTopic: B,
                proposer: { publicKey: S, metadata: this.client.metadata },
                expiryTimestamp: ve(De.wc_sessionPropose.req.ttl),
                id: us(),
              },
              { done: $, resolve: j, reject: P } = Ts(O, "Request expired"),
              v = us(),
              I = oe("session_connect", N.id),
              y = oe("session_request", v),
              b = (D) =>
                f(this, [D], function* ({ error: x, session: C }) {
                  this.events.off(y, _), x ? P(x) : C && j({ session: C });
                }),
              _ = (x) =>
                f(this, null, function* () {
                  var C, D, M;
                  if (
                    (yield this.deletePendingAuthRequest(v, {
                      message: "fulfilled",
                      code: 0,
                    }),
                    x.error)
                  ) {
                    let Q = fe(
                      "WC_METHOD_UNSUPPORTED",
                      "wc_sessionAuthenticate"
                    );
                    return x.error.code === Q.code
                      ? void 0
                      : (this.events.off(I, b), P(x.error.message));
                  }
                  yield this.deleteProposal(N.id), this.events.off(I, b);
                  let { cacaos: J, responder: G } = x.result,
                    H = [],
                    ee = [];
                  for (let Q of J) {
                    (yield sl({
                      cacao: Q,
                      projectId: this.client.core.projectId,
                    })) ||
                      (this.client.logger.error(
                        Q,
                        "Signature verification failed"
                      ),
                      P(
                        fe(
                          "SESSION_SETTLEMENT_FAILED",
                          "Signature verification failed"
                        )
                      ));
                    let { p: he } = Q,
                      Ze = Wn(he.resources),
                      st = [No(he.iss)],
                      Je = Gn(he.iss);
                    if (Ze) {
                      let At = nl(Ze),
                        Os = il(Ze);
                      H.push(...At), st.push(...Os);
                    }
                    for (let At of st) ee.push(`${At}:${Je}`);
                  }
                  let Z = yield this.client.core.crypto.generateSharedKey(
                      S,
                      G.publicKey
                    ),
                    le;
                  H.length > 0 &&
                    ((le = {
                      topic: Z,
                      acknowledged: !0,
                      self: { publicKey: S, metadata: this.client.metadata },
                      peer: G,
                      controller: G.publicKey,
                      expiry: ve(on),
                      requiredNamespaces: {},
                      optionalNamespaces: {},
                      relay: { protocol: "irn" },
                      pairingTopic: B,
                      namespaces: ml([...new Set(H)], [...new Set(ee)]),
                      transportType: o,
                    }),
                    yield this.client.core.relayer.subscribe(Z, {
                      transportType: o,
                    }),
                    yield this.client.session.set(Z, le),
                    B &&
                      (yield this.client.core.pairing.updateMetadata({
                        topic: B,
                        metadata: G.metadata,
                      })),
                    (le = this.client.session.get(Z))),
                    (C = this.client.metadata.redirect) != null &&
                      C.linkMode &&
                      (D = G.metadata.redirect) != null &&
                      D.linkMode &&
                      (M = G.metadata.redirect) != null &&
                      M.universal &&
                      r &&
                      (this.client.core.addLinkModeSupportedApp(
                        G.metadata.redirect.universal
                      ),
                      this.client.session.update(Z, {
                        transportType: me.link_mode,
                      })),
                    j({ auths: J, session: le });
                });
            this.events.once(I, b), this.events.once(y, _);
            let k;
            try {
              if (i) {
                let x = yt("wc_sessionAuthenticate", U, v);
                this.client.core.history.set(B, x);
                let C = yield this.client.core.crypto.encode("", x, {
                  type: Xr,
                  encoding: As,
                });
                k = Jn(r, B, C);
              } else yield Promise.all([this.sendRequest({ topic: B, method: "wc_sessionAuthenticate", params: U, expiry: s.expiry, throwOnFailedPublish: !0, clientRpcId: v }), this.sendRequest({ topic: B, method: "wc_sessionPropose", params: N, expiry: De.wc_sessionPropose.req.ttl, throwOnFailedPublish: !0, clientRpcId: N.id })]);
            } catch (x) {
              throw (this.events.off(I, b), this.events.off(y, _), x);
            }
            return (
              yield this.setProposal(N.id, N),
              yield this.setAuthRequest(v, {
                request: Ye(ue({}, U), { verifyContext: {} }),
                pairingTopic: B,
                transportType: o,
              }),
              { uri: k ?? T, response: $ }
            );
          })
        ),
        L(this, "approveSessionAuthenticate", (s) =>
          f(this, null, function* () {
            let { id: r, auths: n } = s,
              i = this.client.core.eventClient.createEvent({
                properties: {
                  topic: r.toString(),
                  trace: [er.authenticated_session_approve_started],
                },
              });
            try {
              this.isInitialized();
            } catch (w) {
              throw (i.setError(nn.no_internet_connection), w);
            }
            let o = this.getPendingAuthRequest(r);
            if (!o)
              throw (
                (i.setError(nn.authenticated_session_pending_request_not_found),
                new Error(`Could not find pending auth request with id ${r}`))
              );
            let a = o.transportType || me.relay;
            a === me.relay && (yield this.confirmOnlineStateOrThrow());
            let c = o.requester.publicKey,
              l = yield this.client.core.crypto.generateKeyPair(),
              u = Zr(c),
              h = { type: Xt, receiverPublicKey: c, senderPublicKey: l },
              d = [],
              p = [];
            for (let w of n) {
              if (
                !(yield sl({ cacao: w, projectId: this.client.core.projectId }))
              ) {
                i.setError(nn.invalid_cacao);
                let A = fe(
                  "SESSION_SETTLEMENT_FAILED",
                  "Signature verification failed"
                );
                throw (
                  (yield this.sendError({
                    id: r,
                    topic: u,
                    error: A,
                    encodeOpts: h,
                  }),
                  new Error(A.message))
                );
              }
              i.addTrace(er.cacaos_verified);
              let { p: R } = w,
                B = Wn(R.resources),
                T = [No(R.iss)],
                S = Gn(R.iss);
              if (B) {
                let A = nl(B),
                  O = il(B);
                d.push(...A), T.push(...O);
              }
              for (let A of T) p.push(`${A}:${S}`);
            }
            let m = yield this.client.core.crypto.generateSharedKey(l, c);
            i.addTrace(er.create_authenticated_session_topic);
            let g;
            if (d?.length > 0) {
              (g = {
                topic: m,
                acknowledged: !0,
                self: { publicKey: l, metadata: this.client.metadata },
                peer: { publicKey: c, metadata: o.requester.metadata },
                controller: c,
                expiry: ve(on),
                authentication: n,
                requiredNamespaces: {},
                optionalNamespaces: {},
                relay: { protocol: "irn" },
                pairingTopic: o.pairingTopic,
                namespaces: ml([...new Set(d)], [...new Set(p)]),
                transportType: a,
              }),
                i.addTrace(er.subscribing_authenticated_session_topic);
              try {
                yield this.client.core.relayer.subscribe(m, {
                  transportType: a,
                });
              } catch (w) {
                throw (
                  (i.setError(nn.subscribe_authenticated_session_topic_failure),
                  w)
                );
              }
              i.addTrace(er.subscribe_authenticated_session_topic_success),
                yield this.client.session.set(m, g),
                i.addTrace(er.store_authenticated_session),
                yield this.client.core.pairing.updateMetadata({
                  topic: o.pairingTopic,
                  metadata: o.requester.metadata,
                });
            }
            i.addTrace(er.publishing_authenticated_session_approve);
            try {
              yield this.sendResult({
                topic: u,
                id: r,
                result: {
                  cacaos: n,
                  responder: { publicKey: l, metadata: this.client.metadata },
                },
                encodeOpts: h,
                throwOnFailedPublish: !0,
                appLink: this.getAppLinkIfEnabled(o.requester.metadata, a),
              });
            } catch (w) {
              throw (
                (i.setError(nn.authenticated_session_approve_publish_failure),
                w)
              );
            }
            return (
              yield this.client.auth.requests.delete(r, {
                message: "fulfilled",
                code: 0,
              }),
              yield this.client.core.pairing.activate({
                topic: o.pairingTopic,
              }),
              this.client.core.eventClient.deleteEvent({ eventId: i.eventId }),
              { session: g }
            );
          })
        ),
        L(this, "rejectSessionAuthenticate", (s) =>
          f(this, null, function* () {
            this.isInitialized();
            let { id: r, reason: n } = s,
              i = this.getPendingAuthRequest(r);
            if (!i)
              throw new Error(
                `Could not find pending auth request with id ${r}`
              );
            i.transportType === me.relay &&
              (yield this.confirmOnlineStateOrThrow());
            let o = i.requester.publicKey,
              a = yield this.client.core.crypto.generateKeyPair(),
              c = Zr(o),
              l = { type: Xt, receiverPublicKey: o, senderPublicKey: a };
            yield this.sendError({
              id: r,
              topic: c,
              error: n,
              encodeOpts: l,
              rpcOpts: De.wc_sessionAuthenticate.reject,
              appLink: this.getAppLinkIfEnabled(
                i.requester.metadata,
                i.transportType
              ),
            }),
              yield this.client.auth.requests.delete(r, {
                message: "rejected",
                code: 0,
              }),
              yield this.deleteProposal(r);
          })
        ),
        L(this, "formatAuthMessage", (s) => {
          this.isInitialized();
          let { request: r, iss: n } = s;
          return rl(r, n);
        }),
        L(this, "processRelayMessageCache", () => {
          setTimeout(
            () =>
              f(this, null, function* () {
                if (this.relayMessageCache.length !== 0)
                  for (; this.relayMessageCache.length > 0; )
                    try {
                      let s = this.relayMessageCache.shift();
                      s && (yield this.onRelayMessage(s));
                    } catch (s) {
                      this.client.logger.error(s);
                    }
              }),
            50
          );
        }),
        L(this, "cleanupDuplicatePairings", (s) =>
          f(this, null, function* () {
            if (s.pairingTopic)
              try {
                let r = this.client.core.pairing.pairings.get(s.pairingTopic),
                  n = this.client.core.pairing.pairings.getAll().filter((i) => {
                    var o, a;
                    return (
                      ((o = i.peerMetadata) == null ? void 0 : o.url) &&
                      ((a = i.peerMetadata) == null ? void 0 : a.url) ===
                        s.peer.metadata.url &&
                      i.topic &&
                      i.topic !== r.topic
                    );
                  });
                if (n.length === 0) return;
                this.client.logger.info(
                  `Cleaning up ${n.length} duplicate pairing(s)`
                ),
                  yield Promise.all(
                    n.map((i) =>
                      this.client.core.pairing.disconnect({ topic: i.topic })
                    )
                  ),
                  this.client.logger.info(
                    "Duplicate pairings clean up finished"
                  );
              } catch (r) {
                this.client.logger.error(r);
              }
          })
        ),
        L(this, "deleteSession", (s) =>
          f(this, null, function* () {
            var r;
            let {
                topic: n,
                expirerHasDeleted: i = !1,
                emitEvent: o = !0,
                id: a = 0,
              } = s,
              { self: c } = this.client.session.get(n);
            yield this.client.core.relayer.unsubscribe(n),
              yield this.client.session.delete(n, fe("USER_DISCONNECTED")),
              this.addToRecentlyDeleted(n, "session"),
              this.client.core.crypto.keychain.has(c.publicKey) &&
                (yield this.client.core.crypto.deleteKeyPair(c.publicKey)),
              this.client.core.crypto.keychain.has(n) &&
                (yield this.client.core.crypto.deleteSymKey(n)),
              i || this.client.core.expirer.del(n),
              this.client.core.storage
                .removeItem(Fg)
                .catch((l) => this.client.logger.warn(l)),
              this.getPendingSessionRequests().forEach((l) => {
                l.topic === n &&
                  this.deletePendingSessionRequest(
                    l.id,
                    fe("USER_DISCONNECTED")
                  );
              }),
              n ===
                ((r = this.sessionRequestQueue.queue[0]) == null
                  ? void 0
                  : r.topic) && (this.sessionRequestQueue.state = ls.idle),
              o &&
                this.client.events.emit("session_delete", { id: a, topic: n });
          })
        ),
        L(this, "deleteProposal", (s, r) =>
          f(this, null, function* () {
            if (r)
              try {
                let n = this.client.proposal.get(s);
                this.client.core.eventClient
                  .getEvent({ topic: n.pairingTopic })
                  ?.setError(Qs.proposal_expired);
              } catch {}
            yield Promise.all([
              this.client.proposal.delete(s, fe("USER_DISCONNECTED")),
              r ? Promise.resolve() : this.client.core.expirer.del(s),
            ]),
              this.addToRecentlyDeleted(s, "proposal");
          })
        ),
        L(this, "deletePendingSessionRequest", (s, r, n = !1) =>
          f(this, null, function* () {
            yield Promise.all([
              this.client.pendingRequest.delete(s, r),
              n ? Promise.resolve() : this.client.core.expirer.del(s),
            ]),
              this.addToRecentlyDeleted(s, "request"),
              (this.sessionRequestQueue.queue =
                this.sessionRequestQueue.queue.filter((i) => i.id !== s)),
              n &&
                ((this.sessionRequestQueue.state = ls.idle),
                this.client.events.emit("session_request_expire", { id: s }));
          })
        ),
        L(this, "deletePendingAuthRequest", (s, r, n = !1) =>
          f(this, null, function* () {
            yield Promise.all([
              this.client.auth.requests.delete(s, r),
              n ? Promise.resolve() : this.client.core.expirer.del(s),
            ]);
          })
        ),
        L(this, "setExpiry", (s, r) =>
          f(this, null, function* () {
            this.client.session.keys.includes(s) &&
              (this.client.core.expirer.set(s, r),
              yield this.client.session.update(s, { expiry: r }));
          })
        ),
        L(this, "setProposal", (s, r) =>
          f(this, null, function* () {
            this.client.core.expirer.set(s, ve(De.wc_sessionPropose.req.ttl)),
              yield this.client.proposal.set(s, r);
          })
        ),
        L(this, "setAuthRequest", (s, r) =>
          f(this, null, function* () {
            let {
              request: n,
              pairingTopic: i,
              transportType: o = me.relay,
            } = r;
            this.client.core.expirer.set(s, n.expiryTimestamp),
              yield this.client.auth.requests.set(s, {
                authPayload: n.authPayload,
                requester: n.requester,
                expiryTimestamp: n.expiryTimestamp,
                id: s,
                pairingTopic: i,
                verifyContext: n.verifyContext,
                transportType: o,
              });
          })
        ),
        L(this, "setPendingSessionRequest", (s) =>
          f(this, null, function* () {
            let { id: r, topic: n, params: i, verifyContext: o } = s,
              a = i.request.expiryTimestamp || ve(De.wc_sessionRequest.req.ttl);
            this.client.core.expirer.set(r, a),
              yield this.client.pendingRequest.set(r, {
                id: r,
                topic: n,
                params: i,
                verifyContext: o,
              });
          })
        ),
        L(this, "sendRequest", (s) =>
          f(this, null, function* () {
            let {
                topic: r,
                method: n,
                params: i,
                expiry: o,
                relayRpcId: a,
                clientRpcId: c,
                throwOnFailedPublish: l,
                appLink: u,
                tvf: h,
                publishOpts: d = {},
              } = s,
              p = yt(n, i, c),
              m,
              g = !!u;
            try {
              let B = g ? As : Ke;
              m = yield this.client.core.crypto.encode(r, p, { encoding: B });
            } catch (B) {
              throw (
                (yield this.cleanup(),
                this.client.logger.error(
                  `sendRequest() -> core.crypto.encode() for topic ${r} failed`
                ),
                B)
              );
            }
            let w;
            if (FS.includes(n)) {
              let B = ft(JSON.stringify(p)),
                T = ft(m);
              w = yield this.client.core.verify.register({
                id: T,
                decryptedId: B,
              });
            }
            let R = ue(ue({}, De[n].req), d);
            if (
              ((R.attestation = w),
              o && (R.ttl = o),
              a && (R.id = a),
              this.client.core.history.set(r, p),
              g)
            ) {
              let B = Jn(u, r, m);
              yield global.Linking.openURL(B, this.client.name);
            } else (R.tvf = Ye(ue({}, h), { correlationId: p.id })), l ? ((R.internal = Ye(ue({}, R.internal), { throwOnFailedPublish: !0 })), yield this.client.core.relayer.publish(r, m, R)) : this.client.core.relayer.publish(r, m, R).catch((B) => this.client.logger.error(B));
            return p.id;
          })
        ),
        L(this, "sendProposeSession", (s) =>
          f(this, null, function* () {
            let { proposal: r, publishOpts: n } = s,
              i = yt("wc_sessionPropose", r, r.id);
            this.client.core.history.set(r.pairingTopic, i);
            let o = yield this.client.core.crypto.encode(r.pairingTopic, i, {
                encoding: Ke,
              }),
              a = ft(JSON.stringify(i)),
              c = ft(o),
              l = yield this.client.core.verify.register({
                id: c,
                decryptedId: a,
              });
            yield this.client.core.relayer.publishCustom({
              payload: { pairingTopic: r.pairingTopic, sessionProposal: o },
              opts: Ye(ue({}, n), {
                publishMethod: "wc_proposeSession",
                attestation: l,
              }),
            });
          })
        ),
        L(this, "sendApproveSession", (s) =>
          f(this, null, function* () {
            let {
                sessionTopic: r,
                pairingProposalResponse: n,
                proposal: i,
                sessionSettleRequest: o,
                publishOpts: a,
              } = s,
              c = Rs(i.id, n),
              l = yield this.client.core.crypto.encode(i.pairingTopic, c, {
                encoding: Ke,
              }),
              u = yt("wc_sessionSettle", o, a?.id),
              h = yield this.client.core.crypto.encode(r, u, { encoding: Ke });
            this.client.core.history.set(r, u),
              yield this.client.core.relayer.publishCustom({
                payload: {
                  sessionTopic: r,
                  pairingTopic: i.pairingTopic,
                  sessionProposalResponse: l,
                  sessionSettlementRequest: h,
                },
                opts: Ye(ue({}, a), { publishMethod: "wc_approveSession" }),
              });
          })
        ),
        L(this, "sendResult", (s) =>
          f(this, null, function* () {
            let {
                id: r,
                topic: n,
                result: i,
                throwOnFailedPublish: o,
                encodeOpts: a,
                appLink: c,
              } = s,
              l = Rs(r, i),
              u,
              h = c && typeof (global == null ? void 0 : global.Linking) < "u";
            try {
              let m = h ? As : Ke;
              u = yield this.client.core.crypto.encode(
                n,
                l,
                Ye(ue({}, a || {}), { encoding: m })
              );
            } catch (m) {
              throw (
                (yield this.cleanup(),
                this.client.logger.error(
                  `sendResult() -> core.crypto.encode() for topic ${n} failed`
                ),
                m)
              );
            }
            let d, p;
            try {
              d = yield this.client.core.history.get(n, r);
              let m = d.request;
              try {
                p = this.getTVFParams(r, m.params, i);
              } catch (g) {
                this.client.logger.warn(
                  `sendResult() -> getTVFParams() failed: ${g?.message}`
                );
              }
            } catch (m) {
              throw (
                (this.client.logger.error(
                  `sendResult() -> history.get(${n}, ${r}) failed`
                ),
                m)
              );
            }
            if (h) {
              let m = Jn(c, n, u);
              yield global.Linking.openURL(m, this.client.name);
            } else {
              let m = d.request.method,
                g = De[m].res;
              (g.tvf = Ye(ue({}, p), { correlationId: r })),
                o
                  ? ((g.internal = Ye(ue({}, g.internal), {
                      throwOnFailedPublish: !0,
                    })),
                    yield this.client.core.relayer.publish(n, u, g))
                  : this.client.core.relayer
                      .publish(n, u, g)
                      .catch((w) => this.client.logger.error(w));
            }
            yield this.client.core.history.resolve(l);
          })
        ),
        L(this, "sendError", (s) =>
          f(this, null, function* () {
            let {
                id: r,
                topic: n,
                error: i,
                encodeOpts: o,
                rpcOpts: a,
                appLink: c,
              } = s,
              l = hi(r, i),
              u,
              h = c && typeof (global == null ? void 0 : global.Linking) < "u";
            try {
              let p = h ? As : Ke;
              u = yield this.client.core.crypto.encode(
                n,
                l,
                Ye(ue({}, o || {}), { encoding: p })
              );
            } catch (p) {
              throw (
                (yield this.cleanup(),
                this.client.logger.error(
                  `sendError() -> core.crypto.encode() for topic ${n} failed`
                ),
                p)
              );
            }
            let d;
            try {
              d = yield this.client.core.history.get(n, r);
            } catch (p) {
              throw (
                (this.client.logger.error(
                  `sendError() -> history.get(${n}, ${r}) failed`
                ),
                p)
              );
            }
            if (h) {
              let p = Jn(c, n, u);
              yield global.Linking.openURL(p, this.client.name);
            } else {
              let p = d.request.method,
                m = a || De[p].res;
              this.client.core.relayer.publish(n, u, m);
            }
            yield this.client.core.history.resolve(l);
          })
        ),
        L(this, "cleanup", () =>
          f(this, null, function* () {
            let s = [],
              r = [];
            this.client.session.getAll().forEach((n) => {
              let i = !1;
              St(n.expiry) && (i = !0),
                this.client.core.crypto.keychain.has(n.topic) || (i = !0),
                i && s.push(n.topic);
            }),
              this.client.proposal.getAll().forEach((n) => {
                St(n.expiryTimestamp) && r.push(n.id);
              }),
              yield Promise.all([
                ...s.map((n) => this.deleteSession({ topic: n })),
                ...r.map((n) => this.deleteProposal(n)),
              ]);
          })
        ),
        L(this, "onProviderMessageEvent", (s) =>
          f(this, null, function* () {
            !this.initialized || this.relayMessageCache.length > 0
              ? this.relayMessageCache.push(s)
              : yield this.onRelayMessage(s);
          })
        ),
        L(this, "onRelayEventRequest", (s) =>
          f(this, null, function* () {
            this.requestQueue.queue.push(s), yield this.processRequestsQueue();
          })
        ),
        L(this, "processRequestsQueue", () =>
          f(this, null, function* () {
            if (this.requestQueue.state === ls.active) {
              this.client.logger.info(
                "Request queue already active, skipping..."
              );
              return;
            }
            for (
              this.client.logger.info(
                `Request queue starting with ${this.requestQueue.queue.length} requests`
              );
              this.requestQueue.queue.length > 0;

            ) {
              this.requestQueue.state = ls.active;
              let s = this.requestQueue.queue.shift();
              if (s)
                try {
                  yield this.processRequest(s);
                } catch (r) {
                  this.client.logger.warn(r);
                }
            }
            this.requestQueue.state = ls.idle;
          })
        ),
        L(this, "processRequest", (s) =>
          f(this, null, function* () {
            let {
                topic: r,
                payload: n,
                attestation: i,
                transportType: o,
                encryptedId: a,
              } = s,
              c = n.method;
            if (
              !this.shouldIgnorePairingRequest({ topic: r, requestMethod: c })
            )
              switch (c) {
                case "wc_sessionPropose":
                  return yield this.onSessionProposeRequest({
                    topic: r,
                    payload: n,
                    attestation: i,
                    encryptedId: a,
                  });
                case "wc_sessionSettle":
                  return yield this.onSessionSettleRequest(r, n);
                case "wc_sessionUpdate":
                  return yield this.onSessionUpdateRequest(r, n);
                case "wc_sessionExtend":
                  return yield this.onSessionExtendRequest(r, n);
                case "wc_sessionPing":
                  return yield this.onSessionPingRequest(r, n);
                case "wc_sessionDelete":
                  return yield this.onSessionDeleteRequest(r, n);
                case "wc_sessionRequest":
                  return yield this.onSessionRequest({
                    topic: r,
                    payload: n,
                    attestation: i,
                    encryptedId: a,
                    transportType: o,
                  });
                case "wc_sessionEvent":
                  return yield this.onSessionEventRequest(r, n);
                case "wc_sessionAuthenticate":
                  return yield this.onSessionAuthenticateRequest({
                    topic: r,
                    payload: n,
                    attestation: i,
                    encryptedId: a,
                    transportType: o,
                  });
                default:
                  return this.client.logger.info(
                    `Unsupported request method ${c}`
                  );
              }
          })
        ),
        L(this, "onRelayEventResponse", (s) =>
          f(this, null, function* () {
            let { topic: r, payload: n, transportType: i } = s,
              o = (yield this.client.core.history.get(r, n.id)).request.method;
            switch (o) {
              case "wc_sessionPropose":
                return this.onSessionProposeResponse(r, n, i);
              case "wc_sessionSettle":
                return this.onSessionSettleResponse(r, n);
              case "wc_sessionUpdate":
                return this.onSessionUpdateResponse(r, n);
              case "wc_sessionExtend":
                return this.onSessionExtendResponse(r, n);
              case "wc_sessionPing":
                return this.onSessionPingResponse(r, n);
              case "wc_sessionRequest":
                return this.onSessionRequestResponse(r, n);
              case "wc_sessionAuthenticate":
                return this.onSessionAuthenticateResponse(r, n);
              default:
                return this.client.logger.info(
                  `Unsupported response method ${o}`
                );
            }
          })
        ),
        L(this, "onRelayEventUnknownPayload", (s) => {
          let { topic: r } = s,
            { message: n } = F(
              "MISSING_OR_INVALID",
              `Decoded payload on topic ${r} is not identifiable as a JSON-RPC request or a response.`
            );
          throw new Error(n);
        }),
        L(this, "shouldIgnorePairingRequest", (s) => {
          let { topic: r, requestMethod: n } = s,
            i = this.expectedPairingMethodMap.get(r);
          return !i || i.includes(n)
            ? !1
            : !!(
                i.includes("wc_sessionAuthenticate") &&
                this.client.events.listenerCount("session_authenticate") > 0
              );
        }),
        L(this, "onSessionProposeRequest", (s) =>
          f(this, null, function* () {
            let { topic: r, payload: n, attestation: i, encryptedId: o } = s,
              { params: a, id: c } = n;
            try {
              let l = this.client.core.eventClient.getEvent({ topic: r });
              this.client.events.listenerCount("session_proposal") === 0 &&
                (console.warn("No listener for session_proposal event"),
                l?.setError(os.proposal_listener_not_found)),
                this.isValidConnect(ue({}, n.params));
              let u = a.expiryTimestamp || ve(De.wc_sessionPropose.req.ttl),
                h = ue(
                  {
                    id: c,
                    pairingTopic: r,
                    expiryTimestamp: u,
                    attestation: i,
                    encryptedId: o,
                  },
                  a
                );
              yield this.setProposal(c, h);
              let d = yield this.getVerifyContext({
                attestationId: i,
                hash: ft(JSON.stringify(n)),
                encryptedId: o,
                metadata: h.proposer.metadata,
              });
              l?.addTrace(Qt.emit_session_proposal),
                this.client.events.emit("session_proposal", {
                  id: c,
                  params: h,
                  verifyContext: d,
                });
            } catch (l) {
              yield this.sendError({
                id: c,
                topic: r,
                error: l,
                rpcOpts: De.wc_sessionPropose.autoReject,
              }),
                this.client.logger.error(l);
            }
          })
        ),
        L(this, "onSessionProposeResponse", (s, r, n) =>
          f(this, null, function* () {
            let { id: i } = r;
            if (Mt(r)) {
              let { result: o } = r;
              this.client.logger.trace({
                type: "method",
                method: "onSessionProposeResponse",
                result: o,
              });
              let a = this.client.proposal.get(i);
              this.client.logger.trace({
                type: "method",
                method: "onSessionProposeResponse",
                proposal: a,
              });
              let c = a.proposer.publicKey;
              this.client.logger.trace({
                type: "method",
                method: "onSessionProposeResponse",
                selfPublicKey: c,
              });
              let l = o.responderPublicKey;
              this.client.logger.trace({
                type: "method",
                method: "onSessionProposeResponse",
                peerPublicKey: l,
              });
              let u = yield this.client.core.crypto.generateSharedKey(c, l);
              this.pendingSessions.set(i, {
                sessionTopic: u,
                pairingTopic: s,
                proposalId: i,
                publicKey: c,
              });
              let h = yield this.client.core.relayer.subscribe(u, {
                transportType: n,
              });
              this.client.logger.trace({
                type: "method",
                method: "onSessionProposeResponse",
                subscriptionId: h,
              }),
                yield this.client.core.pairing.activate({ topic: s });
            } else if (Pt(r)) {
              yield this.deleteProposal(i);
              let o = oe("session_connect", i);
              if (this.events.listenerCount(o) === 0)
                throw new Error(`emitting ${o} without any listeners, 954`);
              this.events.emit(o, { error: r.error });
            }
          })
        ),
        L(this, "onSessionSettleRequest", (s, r) =>
          f(this, null, function* () {
            let { id: n, params: i } = r;
            try {
              this.isValidSessionSettleRequest(i);
              let {
                  relay: o,
                  controller: a,
                  expiry: c,
                  namespaces: l,
                  sessionProperties: u,
                  scopedProperties: h,
                  sessionConfig: d,
                } = r.params,
                p = [...this.pendingSessions.values()].find(
                  (w) => w.sessionTopic === s
                );
              if (!p)
                return this.client.logger.error(
                  `Pending session not found for topic ${s}`
                );
              let m = this.client.proposal.get(p.proposalId),
                g = Ye(
                  ue(
                    ue(
                      ue(
                        {
                          topic: s,
                          relay: o,
                          expiry: c,
                          namespaces: l,
                          acknowledged: !0,
                          pairingTopic: p.pairingTopic,
                          requiredNamespaces: m.requiredNamespaces,
                          optionalNamespaces: m.optionalNamespaces,
                          controller: a.publicKey,
                          self: {
                            publicKey: p.publicKey,
                            metadata: this.client.metadata,
                          },
                          peer: {
                            publicKey: a.publicKey,
                            metadata: a.metadata,
                          },
                        },
                        u && { sessionProperties: u }
                      ),
                      h && { scopedProperties: h }
                    ),
                    d && { sessionConfig: d }
                  ),
                  { transportType: me.relay }
                );
              yield this.client.session.set(g.topic, g),
                yield this.setExpiry(g.topic, g.expiry),
                yield this.client.core.pairing.updateMetadata({
                  topic: p.pairingTopic,
                  metadata: g.peer.metadata,
                }),
                this.client.events.emit("session_connect", { session: g }),
                this.events.emit(oe("session_connect", p.proposalId), {
                  session: g,
                }),
                this.pendingSessions.delete(p.proposalId),
                this.deleteProposal(p.proposalId, !1),
                this.cleanupDuplicatePairings(g),
                yield this.sendResult({ id: r.id, topic: s, result: !0 });
            } catch (o) {
              yield this.sendError({ id: n, topic: s, error: o }),
                this.client.logger.error(o);
            }
          })
        ),
        L(this, "onSessionSettleResponse", (s, r) =>
          f(this, null, function* () {
            let { id: n } = r;
            Mt(r)
              ? (yield this.client.session.update(s, { acknowledged: !0 }),
                this.events.emit(oe("session_approve", n), {}))
              : Pt(r) &&
                (yield this.client.session.delete(s, fe("USER_DISCONNECTED")),
                this.events.emit(oe("session_approve", n), { error: r.error }));
          })
        ),
        L(this, "onSessionUpdateRequest", (s, r) =>
          f(this, null, function* () {
            let { params: n, id: i } = r;
            try {
              let o = `${s}_session_update`,
                a = Xs.get(o);
              if (a && this.isRequestOutOfSync(a, i)) {
                this.client.logger.warn(
                  `Discarding out of sync request - ${i}`
                ),
                  this.sendError({
                    id: i,
                    topic: s,
                    error: fe("INVALID_UPDATE_REQUEST"),
                  });
                return;
              }
              this.isValidUpdate(ue({ topic: s }, n));
              try {
                Xs.set(o, i),
                  yield this.client.session.update(s, {
                    namespaces: n.namespaces,
                  }),
                  yield this.sendResult({ id: i, topic: s, result: !0 });
              } catch (c) {
                throw (Xs.delete(o), c);
              }
              this.client.events.emit("session_update", {
                id: i,
                topic: s,
                params: n,
              });
            } catch (o) {
              yield this.sendError({ id: i, topic: s, error: o }),
                this.client.logger.error(o);
            }
          })
        ),
        L(
          this,
          "isRequestOutOfSync",
          (s, r) => r.toString().slice(0, -3) < s.toString().slice(0, -3)
        ),
        L(this, "onSessionUpdateResponse", (s, r) => {
          let { id: n } = r,
            i = oe("session_update", n);
          if (this.events.listenerCount(i) === 0)
            throw new Error(`emitting ${i} without any listeners`);
          Mt(r)
            ? this.events.emit(oe("session_update", n), {})
            : Pt(r) &&
              this.events.emit(oe("session_update", n), { error: r.error });
        }),
        L(this, "onSessionExtendRequest", (s, r) =>
          f(this, null, function* () {
            let { id: n } = r;
            try {
              this.isValidExtend({ topic: s }),
                yield this.setExpiry(s, ve(on)),
                yield this.sendResult({ id: n, topic: s, result: !0 }),
                this.client.events.emit("session_extend", { id: n, topic: s });
            } catch (i) {
              yield this.sendError({ id: n, topic: s, error: i }),
                this.client.logger.error(i);
            }
          })
        ),
        L(this, "onSessionExtendResponse", (s, r) => {
          let { id: n } = r,
            i = oe("session_extend", n);
          if (this.events.listenerCount(i) === 0)
            throw new Error(`emitting ${i} without any listeners`);
          Mt(r)
            ? this.events.emit(oe("session_extend", n), {})
            : Pt(r) &&
              this.events.emit(oe("session_extend", n), { error: r.error });
        }),
        L(this, "onSessionPingRequest", (s, r) =>
          f(this, null, function* () {
            let { id: n } = r;
            try {
              this.isValidPing({ topic: s }),
                yield this.sendResult({
                  id: n,
                  topic: s,
                  result: !0,
                  throwOnFailedPublish: !0,
                }),
                this.client.events.emit("session_ping", { id: n, topic: s });
            } catch (i) {
              yield this.sendError({ id: n, topic: s, error: i }),
                this.client.logger.error(i);
            }
          })
        ),
        L(this, "onSessionPingResponse", (s, r) => {
          let { id: n } = r,
            i = oe("session_ping", n);
          setTimeout(() => {
            if (this.events.listenerCount(i) === 0)
              throw new Error(`emitting ${i} without any listeners 2176`);
            Mt(r)
              ? this.events.emit(oe("session_ping", n), {})
              : Pt(r) &&
                this.events.emit(oe("session_ping", n), { error: r.error });
          }, 500);
        }),
        L(this, "onSessionDeleteRequest", (s, r) =>
          f(this, null, function* () {
            let { id: n } = r;
            try {
              this.isValidDisconnect({ topic: s, reason: r.params }),
                yield Promise.all([
                  new Promise((i) => {
                    this.client.core.relayer.once(Se.publish, () =>
                      f(this, null, function* () {
                        i(yield this.deleteSession({ topic: s, id: n }));
                      })
                    );
                  }),
                  this.sendResult({ id: n, topic: s, result: !0 }),
                  this.cleanupPendingSentRequestsForTopic({
                    topic: s,
                    error: fe("USER_DISCONNECTED"),
                  }),
                ]).catch((i) => this.client.logger.error(i));
            } catch (i) {
              this.client.logger.error(i);
            }
          })
        ),
        L(this, "onSessionRequest", (s) =>
          f(this, null, function* () {
            var r, n, i;
            let {
                topic: o,
                payload: a,
                attestation: c,
                encryptedId: l,
                transportType: u,
              } = s,
              { id: h, params: d } = a;
            try {
              yield this.isValidRequest(ue({ topic: o }, d));
              let p = this.client.session.get(o),
                m = yield this.getVerifyContext({
                  attestationId: c,
                  hash: ft(JSON.stringify(yt("wc_sessionRequest", d, h))),
                  encryptedId: l,
                  metadata: p.peer.metadata,
                  transportType: u,
                }),
                g = { id: h, topic: o, params: d, verifyContext: m };
              yield this.setPendingSessionRequest(g),
                u === me.link_mode &&
                  (r = p.peer.metadata.redirect) != null &&
                  r.universal &&
                  this.client.core.addLinkModeSupportedApp(
                    (n = p.peer.metadata.redirect) == null
                      ? void 0
                      : n.universal
                  ),
                (i = this.client.signConfig) != null && i.disableRequestQueue
                  ? this.emitSessionRequest(g)
                  : (this.addSessionRequestToSessionRequestQueue(g),
                    this.processSessionRequestQueue());
            } catch (p) {
              yield this.sendError({ id: h, topic: o, error: p }),
                this.client.logger.error(p);
            }
          })
        ),
        L(this, "onSessionRequestResponse", (s, r) => {
          let { id: n } = r,
            i = oe("session_request", n);
          if (this.events.listenerCount(i) === 0)
            throw new Error(`emitting ${i} without any listeners`);
          Mt(r)
            ? this.events.emit(oe("session_request", n), { result: r.result })
            : Pt(r) &&
              this.events.emit(oe("session_request", n), { error: r.error });
        }),
        L(this, "onSessionEventRequest", (s, r) =>
          f(this, null, function* () {
            let { id: n, params: i } = r;
            try {
              let o = `${s}_session_event_${i.event.name}`,
                a = Xs.get(o);
              if (a && this.isRequestOutOfSync(a, n)) {
                this.client.logger.info(
                  `Discarding out of sync request - ${n}`
                );
                return;
              }
              this.isValidEmit(ue({ topic: s }, i)),
                this.client.events.emit("session_event", {
                  id: n,
                  topic: s,
                  params: i,
                }),
                Xs.set(o, n);
            } catch (o) {
              yield this.sendError({ id: n, topic: s, error: o }),
                this.client.logger.error(o);
            }
          })
        ),
        L(this, "onSessionAuthenticateResponse", (s, r) => {
          let { id: n } = r;
          this.client.logger.trace({
            type: "method",
            method: "onSessionAuthenticateResponse",
            topic: s,
            payload: r,
          }),
            Mt(r)
              ? this.events.emit(oe("session_request", n), { result: r.result })
              : Pt(r) &&
                this.events.emit(oe("session_request", n), { error: r.error });
        }),
        L(this, "onSessionAuthenticateRequest", (s) =>
          f(this, null, function* () {
            var r;
            let {
              topic: n,
              payload: i,
              attestation: o,
              encryptedId: a,
              transportType: c,
            } = s;
            try {
              let {
                  requester: l,
                  authPayload: u,
                  expiryTimestamp: h,
                } = i.params,
                d = yield this.getVerifyContext({
                  attestationId: o,
                  hash: ft(JSON.stringify(i)),
                  encryptedId: a,
                  metadata: l.metadata,
                  transportType: c,
                }),
                p = {
                  requester: l,
                  pairingTopic: n,
                  id: i.id,
                  authPayload: u,
                  verifyContext: d,
                  expiryTimestamp: h,
                };
              yield this.setAuthRequest(i.id, {
                request: p,
                pairingTopic: n,
                transportType: c,
              }),
                c === me.link_mode &&
                  (r = l.metadata.redirect) != null &&
                  r.universal &&
                  this.client.core.addLinkModeSupportedApp(
                    l.metadata.redirect.universal
                  ),
                this.client.events.emit("session_authenticate", {
                  topic: n,
                  params: i.params,
                  id: i.id,
                  verifyContext: d,
                });
            } catch (l) {
              this.client.logger.error(l);
              let u = i.params.requester.publicKey,
                h = yield this.client.core.crypto.generateKeyPair(),
                d = this.getAppLinkIfEnabled(i.params.requester.metadata, c),
                p = { type: Xt, receiverPublicKey: u, senderPublicKey: h };
              yield this.sendError({
                id: i.id,
                topic: n,
                error: l,
                encodeOpts: p,
                rpcOpts: De.wc_sessionAuthenticate.autoReject,
                appLink: d,
              });
            }
          })
        ),
        L(this, "addSessionRequestToSessionRequestQueue", (s) => {
          this.sessionRequestQueue.queue.push(s);
        }),
        L(this, "cleanupAfterResponse", (s) => {
          this.deletePendingSessionRequest(s.response.id, {
            message: "fulfilled",
            code: 0,
          }),
            setTimeout(() => {
              (this.sessionRequestQueue.state = ls.idle),
                this.processSessionRequestQueue();
            }, (0, te.toMiliseconds)(this.requestQueueDelay));
        }),
        L(
          this,
          "cleanupPendingSentRequestsForTopic",
          ({ topic: s, error: r }) => {
            let n = this.client.core.history.pending;
            n.length > 0 &&
              n
                .filter(
                  (i) =>
                    i.topic === s && i.request.method === "wc_sessionRequest"
                )
                .forEach((i) => {
                  let o = i.request.id,
                    a = oe("session_request", o);
                  if (this.events.listenerCount(a) === 0)
                    throw new Error(`emitting ${a} without any listeners`);
                  this.events.emit(oe("session_request", i.request.id), {
                    error: r,
                  });
                });
          }
        ),
        L(this, "processSessionRequestQueue", () => {
          if (this.sessionRequestQueue.state === ls.active) {
            this.client.logger.info("session request queue is already active.");
            return;
          }
          let s = this.sessionRequestQueue.queue[0];
          if (!s) {
            this.client.logger.info("session request queue is empty.");
            return;
          }
          try {
            this.emitSessionRequest(s);
          } catch (r) {
            this.client.logger.error(r);
          }
        }),
        L(this, "emitSessionRequest", (s) => {
          if (this.emittedSessionRequests.has(s.id)) {
            this.client.logger.warn(
              { id: s.id },
              `Skipping emitting \`session_request\` event for duplicate request. id: ${s.id}`
            );
            return;
          }
          (this.sessionRequestQueue.state = ls.active),
            this.emittedSessionRequests.add(s.id),
            this.client.events.emit("session_request", s);
        }),
        L(this, "onPairingCreated", (s) => {
          if (
            (s.methods && this.expectedPairingMethodMap.set(s.topic, s.methods),
            s.active)
          )
            return;
          let r = this.client.proposal
            .getAll()
            .find((n) => n.pairingTopic === s.topic);
          r &&
            this.onSessionProposeRequest({
              topic: s.topic,
              payload: yt(
                "wc_sessionPropose",
                Ye(ue({}, r), {
                  requiredNamespaces: r.requiredNamespaces,
                  optionalNamespaces: r.optionalNamespaces,
                  relays: r.relays,
                  proposer: r.proposer,
                  sessionProperties: r.sessionProperties,
                  scopedProperties: r.scopedProperties,
                }),
                r.id
              ),
              attestation: r.attestation,
              encryptedId: r.encryptedId,
            });
        }),
        L(this, "isValidConnect", (s) =>
          f(this, null, function* () {
            if (!Ge(s)) {
              let { message: l } = F(
                "MISSING_OR_INVALID",
                `connect() params: ${JSON.stringify(s)}`
              );
              throw new Error(l);
            }
            let {
              pairingTopic: r,
              requiredNamespaces: n,
              optionalNamespaces: i,
              sessionProperties: o,
              scopedProperties: a,
              relays: c,
            } = s;
            if ((Ie(r) || (yield this.isValidPairingTopic(r)), !$p(c, !0))) {
              let { message: l } = F(
                "MISSING_OR_INVALID",
                `connect() relays: ${c}`
              );
              throw new Error(l);
            }
            if (n && !Ie(n) && Rt(n) !== 0) {
              let l =
                "requiredNamespaces are deprecated and are automatically assigned to optionalNamespaces";
              ["fatal", "error", "silent"].includes(this.client.logger.level)
                ? console.warn(l)
                : this.client.logger.warn(l),
                this.validateNamespaces(n, "requiredNamespaces");
            }
            if (
              (i &&
                !Ie(i) &&
                Rt(i) !== 0 &&
                this.validateNamespaces(i, "optionalNamespaces"),
              o && !Ie(o) && this.validateSessionProps(o, "sessionProperties"),
              a && !Ie(a))
            ) {
              this.validateSessionProps(a, "scopedProperties");
              let l = Object.keys(n || {}).concat(Object.keys(i || {}));
              if (!Object.keys(a).every((u) => l.includes(u.split(":")[0])))
                throw new Error(
                  `Scoped properties must be a subset of required/optional namespaces, received: ${JSON.stringify(
                    a
                  )}, required/optional namespaces: ${JSON.stringify(l)}`
                );
            }
          })
        ),
        L(this, "validateNamespaces", (s, r) => {
          let n = Fp(s, "connect()", r);
          if (n) throw new Error(n.message);
        }),
        L(this, "isValidApprove", (s) =>
          f(this, null, function* () {
            if (!Ge(s))
              throw new Error(
                F("MISSING_OR_INVALID", `approve() params: ${s}`).message
              );
            let {
              id: r,
              namespaces: n,
              relayProtocol: i,
              sessionProperties: o,
              scopedProperties: a,
            } = s;
            this.checkRecentlyDeleted(r), yield this.isValidProposalId(r);
            let c = this.client.proposal.get(r),
              l = Do(n, "approve()");
            if (l) throw new Error(l.message);
            let u = vl(c.requiredNamespaces, n, "approve()");
            if (u) throw new Error(u.message);
            if (!xe(i, !0)) {
              let { message: h } = F(
                "MISSING_OR_INVALID",
                `approve() relayProtocol: ${i}`
              );
              throw new Error(h);
            }
            if (
              (o && !Ie(o) && this.validateSessionProps(o, "sessionProperties"),
              a && !Ie(a))
            ) {
              this.validateSessionProps(a, "scopedProperties");
              let h = new Set(Object.keys(n));
              if (!Object.keys(a).every((d) => h.has(d.split(":")[0])))
                throw new Error(
                  `Scoped properties must be a subset of approved namespaces, received: ${JSON.stringify(
                    a
                  )}, approved namespaces: ${Array.from(h).join(", ")}`
                );
            }
          })
        ),
        L(this, "isValidReject", (s) =>
          f(this, null, function* () {
            if (!Ge(s)) {
              let { message: i } = F(
                "MISSING_OR_INVALID",
                `reject() params: ${s}`
              );
              throw new Error(i);
            }
            let { id: r, reason: n } = s;
            if (
              (this.checkRecentlyDeleted(r),
              yield this.isValidProposalId(r),
              !Vp(n))
            ) {
              let { message: i } = F(
                "MISSING_OR_INVALID",
                `reject() reason: ${JSON.stringify(n)}`
              );
              throw new Error(i);
            }
          })
        ),
        L(this, "isValidSessionSettleRequest", (s) => {
          if (!Ge(s)) {
            let { message: l } = F(
              "MISSING_OR_INVALID",
              `onSessionSettleRequest() params: ${s}`
            );
            throw new Error(l);
          }
          let { relay: r, controller: n, namespaces: i, expiry: o } = s;
          if (!wl(r)) {
            let { message: l } = F(
              "MISSING_OR_INVALID",
              "onSessionSettleRequest() relay protocol should be a string"
            );
            throw new Error(l);
          }
          let a = jp(n, "onSessionSettleRequest()");
          if (a) throw new Error(a.message);
          let c = Do(i, "onSessionSettleRequest()");
          if (c) throw new Error(c.message);
          if (St(o)) {
            let { message: l } = F("EXPIRED", "onSessionSettleRequest()");
            throw new Error(l);
          }
        }),
        L(this, "isValidUpdate", (s) =>
          f(this, null, function* () {
            if (!Ge(s)) {
              let { message: c } = F(
                "MISSING_OR_INVALID",
                `update() params: ${s}`
              );
              throw new Error(c);
            }
            let { topic: r, namespaces: n } = s;
            this.checkRecentlyDeleted(r), yield this.isValidSessionTopic(r);
            let i = this.client.session.get(r),
              o = Do(n, "update()");
            if (o) throw new Error(o.message);
            let a = vl(i.requiredNamespaces, n, "update()");
            if (a) throw new Error(a.message);
          })
        ),
        L(this, "isValidExtend", (s) =>
          f(this, null, function* () {
            if (!Ge(s)) {
              let { message: n } = F(
                "MISSING_OR_INVALID",
                `extend() params: ${s}`
              );
              throw new Error(n);
            }
            let { topic: r } = s;
            this.checkRecentlyDeleted(r), yield this.isValidSessionTopic(r);
          })
        ),
        L(this, "isValidRequest", (s) =>
          f(this, null, function* () {
            if (!Ge(s)) {
              let { message: c } = F(
                "MISSING_OR_INVALID",
                `request() params: ${s}`
              );
              throw new Error(c);
            }
            let { topic: r, request: n, chainId: i, expiry: o } = s;
            this.checkRecentlyDeleted(r), yield this.isValidSessionTopic(r);
            let { namespaces: a } = this.client.session.get(r);
            if (!bl(a, i)) {
              let { message: c } = F(
                "MISSING_OR_INVALID",
                `request() chainId: ${i}`
              );
              throw new Error(c);
            }
            if (!Hp(n)) {
              let { message: c } = F(
                "MISSING_OR_INVALID",
                `request() ${JSON.stringify(n)}`
              );
              throw new Error(c);
            }
            if (!Wp(a, i, n.method)) {
              let { message: c } = F(
                "MISSING_OR_INVALID",
                `request() method: ${n.method}`
              );
              throw new Error(c);
            }
            if (o && !Xp(o, ru)) {
              let { message: c } = F(
                "MISSING_OR_INVALID",
                `request() expiry: ${o}. Expiry must be a number (in seconds) between ${ru.min} and ${ru.max}`
              );
              throw new Error(c);
            }
          })
        ),
        L(this, "isValidRespond", (s) =>
          f(this, null, function* () {
            var r;
            if (!Ge(s)) {
              let { message: a } = F(
                "MISSING_OR_INVALID",
                `respond() params: ${s}`
              );
              throw new Error(a);
            }
            let { topic: n, response: i } = s;
            try {
              yield this.isValidSessionTopic(n);
            } catch (a) {
              throw (
                ((r = s?.response) != null &&
                  r.id &&
                  this.cleanupAfterResponse(s),
                a)
              );
            }
            if (!Kp(i)) {
              let { message: a } = F(
                "MISSING_OR_INVALID",
                `respond() response: ${JSON.stringify(i)}`
              );
              throw new Error(a);
            }
            let o = this.client.pendingRequest.get(i.id);
            if (o.topic !== n) {
              let { message: a } = F(
                "MISMATCHED_TOPIC",
                `Request response topic mismatch. reqId: ${i.id}, expected topic: ${o.topic}, received topic: ${n}`
              );
              throw new Error(a);
            }
          })
        ),
        L(this, "isValidPing", (s) =>
          f(this, null, function* () {
            if (!Ge(s)) {
              let { message: n } = F(
                "MISSING_OR_INVALID",
                `ping() params: ${s}`
              );
              throw new Error(n);
            }
            let { topic: r } = s;
            yield this.isValidSessionOrPairingTopic(r);
          })
        ),
        L(this, "isValidEmit", (s) =>
          f(this, null, function* () {
            if (!Ge(s)) {
              let { message: a } = F(
                "MISSING_OR_INVALID",
                `emit() params: ${s}`
              );
              throw new Error(a);
            }
            let { topic: r, event: n, chainId: i } = s;
            yield this.isValidSessionTopic(r);
            let { namespaces: o } = this.client.session.get(r);
            if (!bl(o, i)) {
              let { message: a } = F(
                "MISSING_OR_INVALID",
                `emit() chainId: ${i}`
              );
              throw new Error(a);
            }
            if (!Gp(n)) {
              let { message: a } = F(
                "MISSING_OR_INVALID",
                `emit() event: ${JSON.stringify(n)}`
              );
              throw new Error(a);
            }
            if (!Yp(o, i, n.name)) {
              let { message: a } = F(
                "MISSING_OR_INVALID",
                `emit() event: ${JSON.stringify(n)}`
              );
              throw new Error(a);
            }
          })
        ),
        L(this, "isValidDisconnect", (s) =>
          f(this, null, function* () {
            if (!Ge(s)) {
              let { message: n } = F(
                "MISSING_OR_INVALID",
                `disconnect() params: ${s}`
              );
              throw new Error(n);
            }
            let { topic: r } = s;
            yield this.isValidSessionOrPairingTopic(r);
          })
        ),
        L(this, "isValidAuthenticate", (s) => {
          let { chains: r, uri: n, domain: i, nonce: o } = s;
          if (!Array.isArray(r) || r.length === 0)
            throw new Error("chains is required and must be a non-empty array");
          if (!xe(n, !1)) throw new Error("uri is required parameter");
          if (!xe(i, !1)) throw new Error("domain is required parameter");
          if (!xe(o, !1)) throw new Error("nonce is required parameter");
          if ([...new Set(r.map((c) => Wt(c).namespace))].length > 1)
            throw new Error(
              "Multi-namespace requests are not supported. Please request single namespace only."
            );
          let { namespace: a } = Wt(r[0]);
          if (a !== "eip155")
            throw new Error(
              "Only eip155 namespace is supported for authenticated sessions. Please use .connect() for non-eip155 chains."
            );
        }),
        L(this, "getVerifyContext", (s) =>
          f(this, null, function* () {
            let {
                attestationId: r,
                hash: n,
                encryptedId: i,
                metadata: o,
                transportType: a,
              } = s,
              c = {
                verified: {
                  verifyUrl: o.verifyUrl || rn,
                  validation: "UNKNOWN",
                  origin: o.url || "",
                },
              };
            try {
              if (a === me.link_mode) {
                let u = this.getAppLinkIfEnabled(o, a);
                return (
                  (c.verified.validation =
                    u && new URL(u).origin === new URL(o.url).origin
                      ? "VALID"
                      : "INVALID"),
                  c
                );
              }
              let l = yield this.client.core.verify.resolve({
                attestationId: r,
                hash: n,
                encryptedId: i,
                verifyUrl: o.verifyUrl,
              });
              l &&
                ((c.verified.origin = l.origin),
                (c.verified.isScam = l.isScam),
                (c.verified.validation =
                  l.origin === new URL(o.url).origin ? "VALID" : "INVALID"));
            } catch (l) {
              this.client.logger.warn(l);
            }
            return (
              this.client.logger.debug(`Verify context: ${JSON.stringify(c)}`),
              c
            );
          })
        ),
        L(this, "validateSessionProps", (s, r) => {
          Object.values(s).forEach((n, i) => {
            if (n == null) {
              let { message: o } = F(
                "MISSING_OR_INVALID",
                `${r} must contain an existing value for each key. Received: ${n} for key ${
                  Object.keys(s)[i]
                }`
              );
              throw new Error(o);
            }
          });
        }),
        L(this, "getPendingAuthRequest", (s) => {
          let r = this.client.auth.requests.get(s);
          return typeof r == "object" ? r : void 0;
        }),
        L(this, "addToRecentlyDeleted", (s, r) => {
          if (
            (this.recentlyDeletedMap.set(s, r),
            this.recentlyDeletedMap.size >= this.recentlyDeletedLimit)
          ) {
            let n = 0,
              i = this.recentlyDeletedLimit / 2;
            for (let o of this.recentlyDeletedMap.keys()) {
              if (n++ >= i) break;
              this.recentlyDeletedMap.delete(o);
            }
          }
        }),
        L(this, "checkRecentlyDeleted", (s) => {
          let r = this.recentlyDeletedMap.get(s);
          if (r) {
            let { message: n } = F(
              "MISSING_OR_INVALID",
              `Record was recently deleted - ${r}: ${s}`
            );
            throw new Error(n);
          }
        }),
        L(this, "isLinkModeEnabled", (s, r) => {
          var n, i, o, a, c, l, u, h, d;
          return !s || r !== me.link_mode
            ? !1
            : ((i = (n = this.client.metadata) == null ? void 0 : n.redirect) ==
              null
                ? void 0
                : i.linkMode) === !0 &&
                ((a =
                  (o = this.client.metadata) == null ? void 0 : o.redirect) ==
                null
                  ? void 0
                  : a.universal) !== void 0 &&
                ((l =
                  (c = this.client.metadata) == null ? void 0 : c.redirect) ==
                null
                  ? void 0
                  : l.universal) !== "" &&
                ((u = s?.redirect) == null ? void 0 : u.universal) !== void 0 &&
                ((h = s?.redirect) == null ? void 0 : h.universal) !== "" &&
                ((d = s?.redirect) == null ? void 0 : d.linkMode) === !0 &&
                this.client.core.linkModeSupportedApps.includes(
                  s.redirect.universal
                ) &&
                typeof (global == null ? void 0 : global.Linking) < "u";
        }),
        L(this, "getAppLinkIfEnabled", (s, r) => {
          var n;
          return this.isLinkModeEnabled(s, r)
            ? (n = s?.redirect) == null
              ? void 0
              : n.universal
            : void 0;
        }),
        L(this, "handleLinkModeMessage", ({ url: s }) => {
          if (!s || !s.includes("wc_ev") || !s.includes("topic")) return;
          let r = Wc(s, "topic") || "",
            n = decodeURIComponent(Wc(s, "wc_ev") || ""),
            i = this.client.session.keys.includes(r);
          i && this.client.session.update(r, { transportType: me.link_mode }),
            this.client.core.dispatchEnvelope({
              topic: r,
              message: n,
              sessionExists: i,
            });
        }),
        L(this, "registerLinkModeListeners", () =>
          f(this, null, function* () {
            var s;
            if (
              Hn() ||
              (_s() &&
                (s = this.client.metadata.redirect) != null &&
                s.linkMode)
            ) {
              let r = global == null ? void 0 : global.Linking;
              if (typeof r < "u") {
                r.addEventListener(
                  "url",
                  this.handleLinkModeMessage,
                  this.client.name
                );
                let n = yield r.getInitialURL();
                n &&
                  setTimeout(() => {
                    this.handleLinkModeMessage({ url: n });
                  }, 50);
              }
            }
          })
        ),
        L(this, "getTVFParams", (s, r, n) => {
          var i, o, a;
          if (!((i = r.request) != null && i.method)) return {};
          let c = {
            correlationId: s,
            rpcMethods: [r.request.method],
            chainId: r.chainId,
          };
          try {
            let l = this.extractTxHashesFromResult(r.request, n);
            (c.txHashes = l),
              (c.contractAddresses = this.isValidContractData(r.request.params)
                ? [
                    (a = (o = r.request.params) == null ? void 0 : o[0]) == null
                      ? void 0
                      : a.to,
                  ]
                : []);
          } catch (l) {
            this.client.logger.warn(l, "Error getting TVF params");
          }
          return c;
        }),
        L(this, "isValidContractData", (s) => {
          var r;
          if (!s) return !1;
          try {
            let n = s?.data || ((r = s?.[0]) == null ? void 0 : r.data);
            if (!n.startsWith("0x")) return !1;
            let i = n.slice(2);
            return /^[0-9a-fA-F]*$/.test(i) ? i.length % 2 === 0 : !1;
          } catch {}
          return !1;
        }),
        L(this, "extractTxHashesFromResult", (s, r) => {
          var n;
          try {
            if (!r) return [];
            let i = s.method,
              o = jS[i];
            if (i === "sui_signTransaction") return [$f(r.transactionBytes)];
            if (i === "near_signTransaction") return [Qc(r)];
            if (i === "near_signTransactions") return r.map((c) => Qc(c));
            if (i === "xrpl_signTransactionFor" || i === "xrpl_signTransaction")
              return [(n = r.tx_json) == null ? void 0 : n.hash];
            if (i === "polkadot_signTransaction")
              return [
                Qp({
                  transaction: s.params.transactionPayload,
                  signature: r.signature,
                }),
              ];
            if (i === "algo_signTxn")
              return Zt(r) ? r.map((c) => el(c)) : [el(r)];
            if (i === "cosmos_signDirect") return [zf(r)];
            if (i === "wallet_sendCalls") return Vf(r);
            if (typeof r == "string") return [r];
            let a = r[o.key];
            if (Zt(a))
              return i === "solana_signAllTransactions"
                ? a.map((c) => Ff(c))
                : a;
            if (typeof a == "string") return [a];
          } catch (i) {
            this.client.logger.warn(
              i,
              "Error extracting tx hashes from result"
            );
          }
          return [];
        });
    }
    processPendingMessageEvents() {
      return f(this, null, function* () {
        try {
          let e = this.client.session.keys,
            s = this.client.core.relayer.messages.getWithoutAck(e);
          for (let [r, n] of Object.entries(s))
            for (let i of n)
              try {
                yield this.onProviderMessageEvent({
                  topic: r,
                  message: i,
                  publishedAt: Date.now(),
                });
              } catch {
                this.client.logger.warn(
                  `Error processing pending message event for topic: ${r}, message: ${i}`
                );
              }
        } catch (e) {
          this.client.logger.warn(e, "processPendingMessageEvents failed");
        }
      });
    }
    isInitialized() {
      if (!this.initialized) {
        let { message: e } = F("NOT_INITIALIZED", this.name);
        throw new Error(e);
      }
    }
    confirmOnlineStateOrThrow() {
      return f(this, null, function* () {
        yield this.client.core.relayer.confirmOnlineStateOrThrow();
      });
    }
    registerRelayerEvents() {
      this.client.core.relayer.on(Se.message, (e) => {
        this.onProviderMessageEvent(e);
      });
    }
    onRelayMessage(e) {
      return f(this, null, function* () {
        let { topic: s, message: r, attestation: n, transportType: i } = e,
          { publicKey: o } = this.client.auth.authKeys.keys.includes(Fo)
            ? this.client.auth.authKeys.get(Fo)
            : { responseTopic: void 0, publicKey: void 0 };
        try {
          let a = yield this.client.core.crypto.decode(s, r, {
            receiverPublicKey: o,
            encoding: i === me.link_mode ? As : Ke,
          });
          yn(a)
            ? (this.client.core.history.set(s, a),
              yield this.onRelayEventRequest({
                topic: s,
                payload: a,
                attestation: n,
                transportType: i,
                encryptedId: ft(r),
              }))
            : wn(a)
            ? (yield this.client.core.history.resolve(a),
              yield this.onRelayEventResponse({
                topic: s,
                payload: a,
                transportType: i,
              }),
              this.client.core.history.delete(s, a.id))
            : yield this.onRelayEventUnknownPayload({
                topic: s,
                payload: a,
                transportType: i,
              }),
            yield this.client.core.relayer.messages.ack(s, r);
        } catch (a) {
          this.client.logger.error(a);
        }
      });
    }
    registerExpirerEvents() {
      this.client.core.expirer.on(Tt.expired, (e) =>
        f(this, null, function* () {
          let { topic: s, id: r } = Ao(e.target);
          if (r && this.client.pendingRequest.keys.includes(r))
            return yield this.deletePendingSessionRequest(r, F("EXPIRED"), !0);
          if (r && this.client.auth.requests.keys.includes(r))
            return yield this.deletePendingAuthRequest(r, F("EXPIRED"), !0);
          s
            ? this.client.session.keys.includes(s) &&
              (yield this.deleteSession({ topic: s, expirerHasDeleted: !0 }),
              this.client.events.emit("session_expire", { topic: s }))
            : r &&
              (yield this.deleteProposal(r, !0),
              this.client.events.emit("proposal_expire", { id: r }));
        })
      );
    }
    registerPairingEvents() {
      this.client.core.pairing.events.on(Js.create, (e) =>
        this.onPairingCreated(e)
      ),
        this.client.core.pairing.events.on(Js.delete, (e) => {
          this.addToRecentlyDeleted(e.topic, "pairing");
        });
    }
    isValidPairingTopic(e) {
      if (!xe(e, !1)) {
        let { message: s } = F(
          "MISSING_OR_INVALID",
          `pairing topic should be a string: ${e}`
        );
        throw new Error(s);
      }
      if (!this.client.core.pairing.pairings.keys.includes(e)) {
        let { message: s } = F(
          "NO_MATCHING_KEY",
          `pairing topic doesn't exist: ${e}`
        );
        throw new Error(s);
      }
      if (St(this.client.core.pairing.pairings.get(e).expiry)) {
        let { message: s } = F("EXPIRED", `pairing topic: ${e}`);
        throw new Error(s);
      }
    }
    isValidSessionTopic(e) {
      return f(this, null, function* () {
        if (!xe(e, !1)) {
          let { message: s } = F(
            "MISSING_OR_INVALID",
            `session topic should be a string: ${e}`
          );
          throw new Error(s);
        }
        if (
          (this.checkRecentlyDeleted(e), !this.client.session.keys.includes(e))
        ) {
          let { message: s } = F(
            "NO_MATCHING_KEY",
            `session topic doesn't exist: ${e}`
          );
          throw new Error(s);
        }
        if (St(this.client.session.get(e).expiry)) {
          yield this.deleteSession({ topic: e });
          let { message: s } = F("EXPIRED", `session topic: ${e}`);
          throw new Error(s);
        }
        if (!this.client.core.crypto.keychain.has(e)) {
          let { message: s } = F(
            "MISSING_OR_INVALID",
            `session topic does not exist in keychain: ${e}`
          );
          throw (yield this.deleteSession({ topic: e }), new Error(s));
        }
      });
    }
    isValidSessionOrPairingTopic(e) {
      return f(this, null, function* () {
        if (
          (this.checkRecentlyDeleted(e), this.client.session.keys.includes(e))
        )
          yield this.isValidSessionTopic(e);
        else if (this.client.core.pairing.pairings.keys.includes(e))
          this.isValidPairingTopic(e);
        else if (xe(e, !1)) {
          let { message: s } = F(
            "NO_MATCHING_KEY",
            `session or pairing topic doesn't exist: ${e}`
          );
          throw new Error(s);
        } else {
          let { message: s } = F(
            "MISSING_OR_INVALID",
            `session or pairing topic should be a string: ${e}`
          );
          throw new Error(s);
        }
      });
    }
    isValidProposalId(e) {
      return f(this, null, function* () {
        if (!zp(e)) {
          let { message: s } = F(
            "MISSING_OR_INVALID",
            `proposal id should be a number: ${e}`
          );
          throw new Error(s);
        }
        if (!this.client.proposal.keys.includes(e)) {
          let { message: s } = F(
            "NO_MATCHING_KEY",
            `proposal id doesn't exist: ${e}`
          );
          throw new Error(s);
        }
        if (St(this.client.proposal.get(e).expiryTimestamp)) {
          yield this.deleteProposal(e);
          let { message: s } = F("EXPIRED", `proposal id: ${e}`);
          throw new Error(s);
        }
      });
    }
  },
  au = class extends cs {
    constructor(e, s) {
      super(e, s, LS, gu), (this.core = e), (this.logger = s);
    }
  },
  cu = class extends cs {
    constructor(e, s) {
      super(e, s, DS, gu), (this.core = e), (this.logger = s);
    }
  },
  lu = class extends cs {
    constructor(e, s) {
      super(e, s, MS, gu, (r) => r.id), (this.core = e), (this.logger = s);
    }
  },
  uu = class extends cs {
    constructor(e, s) {
      super(e, s, VS, zo, () => Fo), (this.core = e), (this.logger = s);
    }
  },
  hu = class extends cs {
    constructor(e, s) {
      super(e, s, HS, zo), (this.core = e), (this.logger = s);
    }
  },
  du = class extends cs {
    constructor(e, s) {
      super(e, s, KS, zo, (r) => r.id), (this.core = e), (this.logger = s);
    }
  },
  JS = Object.defineProperty,
  QS = (t, e, s) =>
    e in t
      ? JS(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (t[e] = s),
  nu = (t, e, s) => QS(t, typeof e != "symbol" ? e + "" : e, s),
  fu = class {
    constructor(e, s) {
      (this.core = e),
        (this.logger = s),
        nu(this, "authKeys"),
        nu(this, "pairingTopics"),
        nu(this, "requests"),
        (this.authKeys = new uu(this.core, this.logger)),
        (this.pairingTopics = new hu(this.core, this.logger)),
        (this.requests = new du(this.core, this.logger));
    }
    init() {
      return f(this, null, function* () {
        yield this.authKeys.init(),
          yield this.pairingTopics.init(),
          yield this.requests.init();
      });
    }
  },
  eI = Object.defineProperty,
  tI = (t, e, s) =>
    e in t
      ? eI(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (t[e] = s),
  re = (t, e, s) => tI(t, typeof e != "symbol" ? e + "" : e, s),
  pu = class t extends ki {
    constructor(e) {
      super(e),
        re(this, "protocol", Vg),
        re(this, "version", Hg),
        re(this, "name", su.name),
        re(this, "metadata"),
        re(this, "core"),
        re(this, "logger"),
        re(this, "events", new $o.EventEmitter()),
        re(this, "engine"),
        re(this, "session"),
        re(this, "proposal"),
        re(this, "pendingRequest"),
        re(this, "auth"),
        re(this, "signConfig"),
        re(this, "on", (r, n) => this.events.on(r, n)),
        re(this, "once", (r, n) => this.events.once(r, n)),
        re(this, "off", (r, n) => this.events.off(r, n)),
        re(this, "removeListener", (r, n) => this.events.removeListener(r, n)),
        re(this, "removeAllListeners", (r) =>
          this.events.removeAllListeners(r)
        ),
        re(this, "connect", (r) =>
          f(this, null, function* () {
            try {
              return yield this.engine.connect(r);
            } catch (n) {
              throw (this.logger.error(n.message), n);
            }
          })
        ),
        re(this, "pair", (r) =>
          f(this, null, function* () {
            try {
              return yield this.engine.pair(r);
            } catch (n) {
              throw (this.logger.error(n.message), n);
            }
          })
        ),
        re(this, "approve", (r) =>
          f(this, null, function* () {
            try {
              return yield this.engine.approve(r);
            } catch (n) {
              throw (this.logger.error(n.message), n);
            }
          })
        ),
        re(this, "reject", (r) =>
          f(this, null, function* () {
            try {
              return yield this.engine.reject(r);
            } catch (n) {
              throw (this.logger.error(n.message), n);
            }
          })
        ),
        re(this, "update", (r) =>
          f(this, null, function* () {
            try {
              return yield this.engine.update(r);
            } catch (n) {
              throw (this.logger.error(n.message), n);
            }
          })
        ),
        re(this, "extend", (r) =>
          f(this, null, function* () {
            try {
              return yield this.engine.extend(r);
            } catch (n) {
              throw (this.logger.error(n.message), n);
            }
          })
        ),
        re(this, "request", (r) =>
          f(this, null, function* () {
            try {
              return yield this.engine.request(r);
            } catch (n) {
              throw (this.logger.error(n.message), n);
            }
          })
        ),
        re(this, "respond", (r) =>
          f(this, null, function* () {
            try {
              return yield this.engine.respond(r);
            } catch (n) {
              throw (this.logger.error(n.message), n);
            }
          })
        ),
        re(this, "ping", (r) =>
          f(this, null, function* () {
            try {
              return yield this.engine.ping(r);
            } catch (n) {
              throw (this.logger.error(n.message), n);
            }
          })
        ),
        re(this, "emit", (r) =>
          f(this, null, function* () {
            try {
              return yield this.engine.emit(r);
            } catch (n) {
              throw (this.logger.error(n.message), n);
            }
          })
        ),
        re(this, "disconnect", (r) =>
          f(this, null, function* () {
            try {
              return yield this.engine.disconnect(r);
            } catch (n) {
              throw (this.logger.error(n.message), n);
            }
          })
        ),
        re(this, "find", (r) => {
          try {
            return this.engine.find(r);
          } catch (n) {
            throw (this.logger.error(n.message), n);
          }
        }),
        re(this, "getPendingSessionRequests", () => {
          try {
            return this.engine.getPendingSessionRequests();
          } catch (r) {
            throw (this.logger.error(r.message), r);
          }
        }),
        re(this, "authenticate", (r, n) =>
          f(this, null, function* () {
            try {
              return yield this.engine.authenticate(r, n);
            } catch (i) {
              throw (this.logger.error(i.message), i);
            }
          })
        ),
        re(this, "formatAuthMessage", (r) => {
          try {
            return this.engine.formatAuthMessage(r);
          } catch (n) {
            throw (this.logger.error(n.message), n);
          }
        }),
        re(this, "approveSessionAuthenticate", (r) =>
          f(this, null, function* () {
            try {
              return yield this.engine.approveSessionAuthenticate(r);
            } catch (n) {
              throw (this.logger.error(n.message), n);
            }
          })
        ),
        re(this, "rejectSessionAuthenticate", (r) =>
          f(this, null, function* () {
            try {
              return yield this.engine.rejectSessionAuthenticate(r);
            } catch (n) {
              throw (this.logger.error(n.message), n);
            }
          })
        ),
        (this.name = e?.name || su.name),
        (this.metadata = vf(e?.metadata)),
        (this.signConfig = e?.signConfig);
      let s = en({ logger: e?.logger || su.logger, name: this.name });
      (this.logger = s),
        (this.core = e?.core || new Mg(e)),
        (this.session = new cu(this.core, this.logger)),
        (this.proposal = new au(this.core, this.logger)),
        (this.pendingRequest = new lu(this.core, this.logger)),
        (this.engine = new ou(this)),
        (this.auth = new fu(this.core, this.logger));
    }
    static init(e) {
      return f(this, null, function* () {
        let s = new t(e);
        return yield s.initialize(), s;
      });
    }
    get context() {
      return qe(this.logger);
    }
    get pairing() {
      return this.core.pairing.pairings;
    }
    initialize() {
      return f(this, null, function* () {
        this.logger.trace("Initialized");
        try {
          yield this.core.start(),
            yield this.session.init(),
            yield this.proposal.init(),
            yield this.pendingRequest.init(),
            yield this.auth.init(),
            yield this.engine.init(),
            this.logger.info("SignClient Initialization Success");
        } catch (e) {
          throw (
            (this.logger.info("SignClient Initialization Failure"),
            this.logger.error(e.message),
            e)
          );
        }
      });
    }
  };
var Gg = pu;
var pm = gt(ui(), 1);
function Cu(t) {
  return t == null || (typeof t != "object" && typeof t != "function");
}
function gm(t) {
  return Object.getOwnPropertySymbols(t).filter((e) =>
    Object.prototype.propertyIsEnumerable.call(t, e)
  );
}
function mm(t) {
  return t == null
    ? t === void 0
      ? "[object Undefined]"
      : "[object Null]"
    : Object.prototype.toString.call(t);
}
var sI = "[object RegExp]",
  ym = "[object String]",
  wm = "[object Number]",
  bm = "[object Boolean]",
  vm = "[object Arguments]",
  rI = "[object Symbol]",
  nI = "[object Date]",
  iI = "[object Map]",
  oI = "[object Set]",
  aI = "[object Array]",
  cI = "[object ArrayBuffer]",
  lI = "[object Object]",
  uI = "[object DataView]",
  hI = "[object Uint8Array]",
  dI = "[object Uint8ClampedArray]",
  fI = "[object Uint16Array]",
  pI = "[object Uint32Array]",
  gI = "[object Int8Array]",
  mI = "[object Int16Array]",
  yI = "[object Int32Array]",
  wI = "[object Float32Array]",
  bI = "[object Float64Array]";
function Pu(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function vI(t, e) {
  return cn(t, void 0, t, new Map(), e);
}
function cn(t, e, s, r = new Map(), n = void 0) {
  let i = n?.(t, e, s, r);
  if (i != null) return i;
  if (Cu(t)) return t;
  if (r.has(t)) return r.get(t);
  if (Array.isArray(t)) {
    let o = new Array(t.length);
    r.set(t, o);
    for (let a = 0; a < t.length; a++) o[a] = cn(t[a], a, s, r, n);
    return (
      Object.hasOwn(t, "index") && (o.index = t.index),
      Object.hasOwn(t, "input") && (o.input = t.input),
      o
    );
  }
  if (t instanceof Date) return new Date(t.getTime());
  if (t instanceof RegExp) {
    let o = new RegExp(t.source, t.flags);
    return (o.lastIndex = t.lastIndex), o;
  }
  if (t instanceof Map) {
    let o = new Map();
    r.set(t, o);
    for (let [a, c] of t) o.set(a, cn(c, a, s, r, n));
    return o;
  }
  if (t instanceof Set) {
    let o = new Set();
    r.set(t, o);
    for (let a of t) o.add(cn(a, void 0, s, r, n));
    return o;
  }
  if (typeof Buffer < "u" && Buffer.isBuffer(t)) return t.subarray();
  if (Pu(t)) {
    let o = new (Object.getPrototypeOf(t).constructor)(t.length);
    r.set(t, o);
    for (let a = 0; a < t.length; a++) o[a] = cn(t[a], a, s, r, n);
    return o;
  }
  if (
    t instanceof ArrayBuffer ||
    (typeof SharedArrayBuffer < "u" && t instanceof SharedArrayBuffer)
  )
    return t.slice(0);
  if (t instanceof DataView) {
    let o = new DataView(t.buffer.slice(0), t.byteOffset, t.byteLength);
    return r.set(t, o), Cr(o, t, s, r, n), o;
  }
  if (typeof File < "u" && t instanceof File) {
    let o = new File([t], t.name, { type: t.type });
    return r.set(t, o), Cr(o, t, s, r, n), o;
  }
  if (t instanceof Blob) {
    let o = new Blob([t], { type: t.type });
    return r.set(t, o), Cr(o, t, s, r, n), o;
  }
  if (t instanceof Error) {
    let o = new t.constructor();
    return (
      r.set(t, o),
      (o.message = t.message),
      (o.name = t.name),
      (o.stack = t.stack),
      (o.cause = t.cause),
      Cr(o, t, s, r, n),
      o
    );
  }
  if (typeof t == "object" && EI(t)) {
    let o = Object.create(Object.getPrototypeOf(t));
    return r.set(t, o), Cr(o, t, s, r, n), o;
  }
  return t;
}
function Cr(t, e, s = t, r, n) {
  let i = [...Object.keys(e), ...gm(e)];
  for (let o = 0; o < i.length; o++) {
    let a = i[o],
      c = Object.getOwnPropertyDescriptor(t, a);
    (c == null || c.writable) && (t[a] = cn(e[a], a, s, r, n));
  }
}
function EI(t) {
  switch (mm(t)) {
    case vm:
    case aI:
    case cI:
    case uI:
    case bm:
    case nI:
    case wI:
    case bI:
    case gI:
    case mI:
    case yI:
    case iI:
    case wm:
    case lI:
    case sI:
    case oI:
    case ym:
    case rI:
    case hI:
    case dI:
    case fI:
    case pI:
      return !0;
    default:
      return !1;
  }
}
function xI(t, e) {
  return vI(t, (s, r, n, i) => {
    let o = e?.(s, r, n, i);
    if (o != null) return o;
    if (typeof t == "object")
      switch (Object.prototype.toString.call(t)) {
        case wm:
        case ym:
        case bm: {
          let a = new t.constructor(t?.valueOf());
          return Cr(a, t), a;
        }
        case vm: {
          let a = {};
          return (
            Cr(a, t),
            (a.length = t.length),
            (a[Symbol.iterator] = t[Symbol.iterator]),
            a
          );
        }
        default:
          return;
      }
  });
}
function Wg(t) {
  return xI(t);
}
function Yg(t) {
  return t !== null && typeof t == "object" && mm(t) === "[object Arguments]";
}
function Xg(t) {
  return typeof t == "object" && t !== null;
}
function SI() {}
function II(t) {
  return Pu(t);
}
function _I(t) {
  if (typeof t != "object" || t == null) return !1;
  if (Object.getPrototypeOf(t) === null) return !0;
  if (Object.prototype.toString.call(t) !== "[object Object]") {
    let s = t[Symbol.toStringTag];
    return s == null ||
      !Object.getOwnPropertyDescriptor(t, Symbol.toStringTag)?.writable
      ? !1
      : t.toString() === `[object ${s}]`;
  }
  let e = t;
  for (; Object.getPrototypeOf(e) !== null; ) e = Object.getPrototypeOf(e);
  return Object.getPrototypeOf(t) === e;
}
function TI(t) {
  if (Cu(t)) return t;
  if (
    Array.isArray(t) ||
    Pu(t) ||
    t instanceof ArrayBuffer ||
    (typeof SharedArrayBuffer < "u" && t instanceof SharedArrayBuffer)
  )
    return t.slice(0);
  let e = Object.getPrototypeOf(t),
    s = e.constructor;
  if (t instanceof Date || t instanceof Map || t instanceof Set)
    return new s(t);
  if (t instanceof RegExp) {
    let r = new s(t);
    return (r.lastIndex = t.lastIndex), r;
  }
  if (t instanceof DataView) return new s(t.buffer.slice(0));
  if (t instanceof Error) {
    let r = new s(t.message);
    return (r.stack = t.stack), (r.name = t.name), (r.cause = t.cause), r;
  }
  if (typeof File < "u" && t instanceof File)
    return new s([t], t.name, { type: t.type, lastModified: t.lastModified });
  if (typeof t == "object") {
    let r = Object.create(e);
    return Object.assign(r, t);
  }
  return t;
}
function AI(t, ...e) {
  let s = e.slice(0, -1),
    r = e[e.length - 1],
    n = t;
  for (let i = 0; i < s.length; i++) {
    let o = s[i];
    n = xu(n, o, r, new Map());
  }
  return n;
}
function xu(t, e, s, r) {
  if ((Cu(t) && (t = Object(t)), e == null || typeof e != "object")) return t;
  if (r.has(e)) return TI(r.get(e));
  if ((r.set(e, t), Array.isArray(e))) {
    e = e.slice();
    for (let i = 0; i < e.length; i++) e[i] = e[i] ?? void 0;
  }
  let n = [...Object.keys(e), ...gm(e)];
  for (let i = 0; i < n.length; i++) {
    let o = n[i],
      a = e[o],
      c = t[o];
    if (
      (Yg(a) && (a = V({}, a)),
      Yg(c) && (c = V({}, c)),
      typeof Buffer < "u" && Buffer.isBuffer(a) && (a = Wg(a)),
      Array.isArray(a))
    )
      if (typeof c == "object" && c != null) {
        let u = [],
          h = Reflect.ownKeys(c);
        for (let d = 0; d < h.length; d++) {
          let p = h[d];
          u[p] = c[p];
        }
        c = u;
      } else c = [];
    let l = s(c, a, o, t, e, r);
    l != null
      ? (t[o] = l)
      : Array.isArray(a) || (Xg(c) && Xg(a))
      ? (t[o] = xu(c, a, s, r))
      : c == null && _I(a)
      ? (t[o] = xu({}, a, s, r))
      : c == null && II(a)
      ? (t[o] = Wg(a))
      : (c === void 0 || a !== void 0) && (t[o] = a);
  }
  return t;
}
function CI(t, ...e) {
  return AI(t, ...e, SI);
}
var Zg = "error",
  PI = "wss://relay.walletconnect.org",
  OI = "wc",
  Em = "universal_provider",
  Vo = `${OI}@2:${Em}:`,
  xm = "https://rpc.walletconnect.org/v1/",
  Sm = "generic",
  NI = `${xm}bundler`,
  ln = "call_status",
  RI = 86400,
  Ou = { DEFAULT_CHAIN_CHANGED: "default_chain_changed" },
  kI = Object.defineProperty,
  BI = Object.defineProperties,
  UI = Object.getOwnPropertyDescriptors,
  Jg = Object.getOwnPropertySymbols,
  LI = Object.prototype.hasOwnProperty,
  DI = Object.prototype.propertyIsEnumerable,
  Qg = (t, e, s) =>
    e in t
      ? kI(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (t[e] = s),
  Ho = (t, e) => {
    for (var s in e || (e = {})) LI.call(e, s) && Qg(t, s, e[s]);
    if (Jg) for (var s of Jg(e)) DI.call(e, s) && Qg(t, s, e[s]);
    return t;
  },
  qI = (t, e) => BI(t, UI(e));
function Im(t, e, s) {
  var r;
  let n = Wt(t);
  return (
    ((r = e.rpcMap) == null ? void 0 : r[n.reference]) ||
    `${xm}?chainId=${n.namespace}:${n.reference}&projectId=${s}`
  );
}
function jI(t) {
  return t.includes(":") ? t.split(":")[1] : t;
}
function _m(t) {
  return t.map((e) => `${e.split(":")[0]}:${e.split(":")[1]}`);
}
function MI(t, e) {
  let s = Object.keys(e.namespaces).filter((n) => n.includes(t));
  if (!s.length) return [];
  let r = [];
  return (
    s.forEach((n) => {
      let i = e.namespaces[n].accounts;
      r.push(...i);
    }),
    r
  );
}
function em(t) {
  return Object.fromEntries(
    Object.entries(t).filter(([e, s]) => {
      var r, n;
      return (
        ((r = s?.chains) == null ? void 0 : r.length) &&
        ((n = s?.chains) == null ? void 0 : n.length) > 0
      );
    })
  );
}
function Ko(t = {}, e = {}) {
  let s = em(tm(t)),
    r = em(tm(e));
  return CI(s, r);
}
function tm(t) {
  var e, s, r, n, i;
  let o = {};
  if (!Rt(t)) return o;
  for (let [a, c] of Object.entries(t)) {
    let l = Qn(a) ? [a] : c.chains,
      u = c.methods || [],
      h = c.events || [],
      d = c.rpcMap || {},
      p = Tr(a);
    (o[p] = qI(Ho(Ho({}, o[p]), c), {
      chains: Vt(l, (e = o[p]) == null ? void 0 : e.chains),
      methods: Vt(u, (s = o[p]) == null ? void 0 : s.methods),
      events: Vt(h, (r = o[p]) == null ? void 0 : r.events),
    })),
      (Rt(d) || Rt(((n = o[p]) == null ? void 0 : n.rpcMap) || {})) &&
        (o[p].rpcMap = Ho(Ho({}, d), (i = o[p]) == null ? void 0 : i.rpcMap));
  }
  return o;
}
function sm(t) {
  return t.includes(":") ? t.split(":")[2] : t;
}
function rm(t) {
  let e = {};
  for (let [s, r] of Object.entries(t)) {
    let n = r.methods || [],
      i = r.events || [],
      o = r.accounts || [],
      a = Qn(s) ? [s] : r.chains ? r.chains : _m(r.accounts);
    e[s] = { chains: a, methods: n, events: i, accounts: o };
  }
  return e;
}
function mu(t) {
  return typeof t == "number"
    ? t
    : t.includes("0x")
    ? parseInt(t, 16)
    : ((t = t.includes(":") ? t.split(":")[1] : t),
      isNaN(Number(t)) ? t : Number(t));
}
function FI(t) {
  try {
    let e = JSON.parse(t);
    return typeof e == "object" && e !== null && !Array.isArray(e);
  } catch {
    return !1;
  }
}
var Tm = {},
  un = (t) => Tm[t],
  yu = (t, e) => {
    Tm[t] = e;
  },
  $I = Object.defineProperty,
  nm = Object.getOwnPropertySymbols,
  zI = Object.prototype.hasOwnProperty,
  VI = Object.prototype.propertyIsEnumerable,
  im = (t, e, s) =>
    e in t
      ? $I(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (t[e] = s),
  om = (t, e) => {
    for (var s in e || (e = {})) zI.call(e, s) && im(t, s, e[s]);
    if (nm) for (var s of nm(e)) VI.call(e, s) && im(t, s, e[s]);
    return t;
  },
  am = "eip155",
  HI = [
    "atomic",
    "flow-control",
    "paymasterService",
    "sessionKeys",
    "auxiliaryFunds",
  ],
  KI = (t) => (t && t.startsWith("0x") ? BigInt(t).toString(10) : t),
  wu = (t) => (t && t.startsWith("0x") ? t : `0x${BigInt(t).toString(16)}`),
  cm = (t) =>
    Object.keys(t)
      .filter((e) => HI.includes(e))
      .reduce((e, s) => ((e[s] = GI(t[s])), e), {}),
  GI = (t) => (typeof t == "string" && FI(t) ? JSON.parse(t) : t),
  WI = (t, e, s) => {
    let { sessionProperties: r = {}, scopedProperties: n = {} } = t,
      i = {};
    if (!Rt(n) && !Rt(r)) return;
    let o = cm(r);
    for (let a of s) {
      let c = KI(a);
      if (!c) continue;
      i[wu(c)] = o;
      let l = n?.[`${am}:${c}`];
      if (l) {
        let u = l?.[`${am}:${c}:${e}`];
        i[wu(c)] = om(om({}, i[wu(c)]), cm(u || l));
      }
    }
    for (let [a, c] of Object.entries(i))
      Object.keys(c).length === 0 && delete i[a];
    return Object.keys(i).length > 0 ? i : void 0;
  },
  YI = Object.defineProperty,
  XI = (t, e, s) =>
    e in t
      ? YI(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (t[e] = s),
  ZI = (t, e, s) => XI(t, typeof e != "symbol" ? e + "" : e, s),
  bu,
  Su = class t {
    constructor(e) {
      ZI(this, "storage"), (this.storage = e);
    }
    getItem(e) {
      return f(this, null, function* () {
        return yield this.storage.getItem(e);
      });
    }
    setItem(e, s) {
      return f(this, null, function* () {
        return yield this.storage.setItem(e, s);
      });
    }
    removeItem(e) {
      return f(this, null, function* () {
        return yield this.storage.removeItem(e);
      });
    }
    static getStorage(e) {
      return bu || (bu = new t(e)), bu;
    }
  },
  JI = Object.defineProperty,
  QI = Object.defineProperties,
  e2 = Object.getOwnPropertyDescriptors,
  lm = Object.getOwnPropertySymbols,
  t2 = Object.prototype.hasOwnProperty,
  s2 = Object.prototype.propertyIsEnumerable,
  um = (t, e, s) =>
    e in t
      ? JI(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (t[e] = s),
  r2 = (t, e) => {
    for (var s in e || (e = {})) t2.call(e, s) && um(t, s, e[s]);
    if (lm) for (var s of lm(e)) s2.call(e, s) && um(t, s, e[s]);
    return t;
  },
  n2 = (t, e) => QI(t, e2(e));
function i2(t, e) {
  return f(this, null, function* () {
    let s = Wt(t.result.capabilities.caip345.caip2),
      r = t.result.capabilities.caip345.transactionHashes,
      n = yield Promise.allSettled(r.map((h) => o2(s.reference, h, e))),
      i = n
        .filter((h) => h.status === "fulfilled")
        .map((h) => h.value)
        .filter((h) => h);
    n.filter((h) => h.status === "rejected").forEach((h) =>
      console.warn("Failed to fetch transaction receipt:", h.reason)
    );
    let o = !i.length || i.some((h) => !h),
      a = i.every((h) => h?.status === "0x1"),
      c = i.every((h) => h?.status === "0x0"),
      l = i.some((h) => h?.status === "0x0"),
      u;
    return (
      o ? (u = 100) : a ? (u = 200) : c ? (u = 500) : l && (u = 600),
      {
        id: t.result.id,
        version: t.request.version,
        atomic: t.request.atomicRequired,
        chainId: t.request.chainId,
        capabilities: t.result.capabilities,
        receipts: i,
        status: u,
      }
    );
  });
}
function o2(t, e, s) {
  return f(this, null, function* () {
    return yield s(parseInt(t)).request(yt("eth_getTransactionReceipt", [e]));
  });
}
function a2(s) {
  return f(this, arguments, function* ({ sendCalls: t, storage: e }) {
    let r = yield e.getItem(ln);
    yield e.setItem(
      ln,
      n2(r2({}, r), {
        [t.result.id]: { request: t.request, result: t.result, expiry: ve(RI) },
      })
    );
  });
}
function c2(s) {
  return f(this, arguments, function* ({ resultId: t, storage: e }) {
    let r = yield e.getItem(ln);
    if (r) {
      delete r[t], yield e.setItem(ln, r);
      for (let n in r) St(r[n].expiry) && delete r[n];
      yield e.setItem(ln, r);
    }
  });
}
function l2(s) {
  return f(this, arguments, function* ({ resultId: t, storage: e }) {
    let r = yield e.getItem(ln),
      n = r?.[t];
    if (n && !St(n.expiry)) return n;
    yield c2({ resultId: t, storage: e });
  });
}
var u2 = Object.defineProperty,
  h2 = Object.defineProperties,
  d2 = Object.getOwnPropertyDescriptors,
  hm = Object.getOwnPropertySymbols,
  f2 = Object.prototype.hasOwnProperty,
  p2 = Object.prototype.propertyIsEnumerable,
  Iu = (t, e, s) =>
    e in t
      ? u2(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (t[e] = s),
  vu = (t, e) => {
    for (var s in e || (e = {})) f2.call(e, s) && Iu(t, s, e[s]);
    if (hm) for (var s of hm(e)) p2.call(e, s) && Iu(t, s, e[s]);
    return t;
  },
  Eu = (t, e) => h2(t, d2(e)),
  Ar = (t, e, s) => Iu(t, typeof e != "symbol" ? e + "" : e, s),
  _u = class {
    constructor(e) {
      Ar(this, "name", "eip155"),
        Ar(this, "client"),
        Ar(this, "chainId"),
        Ar(this, "namespace"),
        Ar(this, "httpProviders"),
        Ar(this, "events"),
        Ar(this, "storage"),
        (this.namespace = e.namespace),
        (this.events = un("events")),
        (this.client = un("client")),
        (this.httpProviders = this.createHttpProviders()),
        (this.chainId = parseInt(this.getDefaultChain())),
        (this.storage = Su.getStorage(this.client.core.storage));
    }
    request(e) {
      return f(this, null, function* () {
        switch (e.request.method) {
          case "eth_requestAccounts":
            return this.getAccounts();
          case "eth_accounts":
            return this.getAccounts();
          case "wallet_switchEthereumChain":
            return yield this.handleSwitchChain(e);
          case "eth_chainId":
            return parseInt(this.getDefaultChain());
          case "wallet_getCapabilities":
            return yield this.getCapabilities(e);
          case "wallet_getCallsStatus":
            return yield this.getCallStatus(e);
          case "wallet_sendCalls":
            return yield this.sendCalls(e);
        }
        return this.namespace.methods.includes(e.request.method)
          ? yield this.client.request(e)
          : this.getHttpProvider().request(e.request);
      });
    }
    updateNamespace(e) {
      this.namespace = Object.assign(this.namespace, e);
    }
    setDefaultChain(e, s) {
      this.httpProviders[e] || this.setHttpProvider(parseInt(e), s);
      let r = this.chainId;
      (this.chainId = parseInt(e)),
        this.events.emit(Ou.DEFAULT_CHAIN_CHANGED, {
          currentCaipChainId: `${this.name}:${e}`,
          previousCaipChainId: `${this.name}:${r}`,
        });
    }
    requestAccounts() {
      return this.getAccounts();
    }
    getDefaultChain() {
      if (this.chainId) return this.chainId.toString();
      if (this.namespace.defaultChain) return this.namespace.defaultChain;
      let e = this.namespace.chains[0];
      if (!e) throw new Error("ChainId not found");
      return e.split(":")[1];
    }
    createHttpProvider(e, s) {
      let r =
        s ||
        Im(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
      if (!r) throw new Error(`No RPC url provided for chainId: ${e}`);
      return new bn(new di(r, un("disableProviderPing")));
    }
    setHttpProvider(e, s) {
      let r = this.createHttpProvider(e, s);
      r && (this.httpProviders[e] = r);
    }
    createHttpProviders() {
      let e = {};
      return (
        this.namespace.chains.forEach((s) => {
          var r;
          let n = parseInt(jI(s));
          e[n] = this.createHttpProvider(
            n,
            (r = this.namespace.rpcMap) == null ? void 0 : r[s]
          );
        }),
        e
      );
    }
    getAccounts() {
      let e = this.namespace.accounts;
      return e
        ? [
            ...new Set(
              e
                .filter((s) => s.split(":")[1] === this.chainId.toString())
                .map((s) => s.split(":")[2])
            ),
          ]
        : [];
    }
    getHttpProvider(e) {
      let s = e || this.chainId;
      return (
        this.httpProviders[s] ||
        ((this.httpProviders = Eu(vu({}, this.httpProviders), {
          [s]: this.createHttpProvider(s),
        })),
        this.httpProviders[s])
      );
    }
    handleSwitchChain(e) {
      return f(this, null, function* () {
        var s, r;
        let n = e.request.params
          ? (s = e.request.params[0]) == null
            ? void 0
            : s.chainId
          : "0x0";
        n = n.startsWith("0x") ? n : `0x${n}`;
        let i = parseInt(n, 16);
        if (this.isChainApproved(i)) this.setDefaultChain(`${i}`);
        else if (this.namespace.methods.includes("wallet_switchEthereumChain"))
          yield this.client.request({
            topic: e.topic,
            request: { method: e.request.method, params: [{ chainId: n }] },
            chainId: (r = this.namespace.chains) == null ? void 0 : r[0],
          }),
            this.setDefaultChain(`${i}`);
        else
          throw new Error(
            `Failed to switch to chain 'eip155:${i}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`
          );
        return null;
      });
    }
    isChainApproved(e) {
      return this.namespace.chains.includes(`${this.name}:${e}`);
    }
    getCapabilities(e) {
      return f(this, null, function* () {
        var s, r, n, i, o;
        let a =
            (r = (s = e.request) == null ? void 0 : s.params) == null
              ? void 0
              : r[0],
          c =
            ((i = (n = e.request) == null ? void 0 : n.params) == null
              ? void 0
              : i[1]) || [];
        if (!a)
          throw new Error(
            "Missing address parameter in `wallet_getCapabilities` request"
          );
        let l = this.client.session.get(e.topic),
          u =
            ((o = l?.sessionProperties) == null ? void 0 : o.capabilities) ||
            {},
          h = `${a}${c.join(",")}`,
          d = u?.[h];
        if (d) return d;
        let p;
        try {
          p = WI(l, a, c);
        } catch (g) {
          console.warn("Failed to extract capabilities from session", g);
        }
        if (p) return p;
        let m = yield this.client.request(e);
        try {
          yield this.client.session.update(e.topic, {
            sessionProperties: Eu(vu({}, l.sessionProperties || {}), {
              capabilities: Eu(vu({}, u || {}), { [h]: m }),
            }),
          });
        } catch (g) {
          console.warn("Failed to update session with capabilities", g);
        }
        return m;
      });
    }
    getCallStatus(e) {
      return f(this, null, function* () {
        var s, r, n;
        let i = this.client.session.get(e.topic),
          o = (s = i.sessionProperties) == null ? void 0 : s.bundler_name;
        if (o) {
          let l = this.getBundlerUrl(e.chainId, o);
          try {
            return yield this.getUserOperationReceipt(l, e);
          } catch (u) {
            console.warn("Failed to fetch call status from bundler", u, l);
          }
        }
        let a = (r = i.sessionProperties) == null ? void 0 : r.bundler_url;
        if (a)
          try {
            return yield this.getUserOperationReceipt(a, e);
          } catch (l) {
            console.warn(
              "Failed to fetch call status from custom bundler",
              l,
              a
            );
          }
        let c = yield l2({
          resultId: (n = e.request.params) == null ? void 0 : n[0],
          storage: this.storage,
        });
        if (c)
          try {
            return yield i2(c, this.getHttpProvider.bind(this));
          } catch (l) {
            console.warn(
              "Failed to fetch call status from stored send calls",
              l,
              c
            );
          }
        if (this.namespace.methods.includes(e.request.method))
          return yield this.client.request(e);
        throw new Error("Fetching call status not approved by the wallet.");
      });
    }
    getUserOperationReceipt(e, s) {
      return f(this, null, function* () {
        var r;
        let n = new URL(e),
          i = yield fetch(n, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(
              yt("eth_getUserOperationReceipt", [
                (r = s.request.params) == null ? void 0 : r[0],
              ])
            ),
          });
        if (!i.ok)
          throw new Error(
            `Failed to fetch user operation receipt - ${i.status}`
          );
        return yield i.json();
      });
    }
    getBundlerUrl(e, s) {
      return `${NI}?projectId=${this.client.core.projectId}&chainId=${e}&bundler=${s}`;
    }
    sendCalls(e) {
      return f(this, null, function* () {
        var s, r, n;
        let i = yield this.client.request(e),
          o = (s = e.request.params) == null ? void 0 : s[0],
          a = i?.id,
          c = i?.capabilities || {},
          l = (r = c?.caip345) == null ? void 0 : r.caip2,
          u = (n = c?.caip345) == null ? void 0 : n.transactionHashes;
        return (
          !a ||
            !l ||
            !(u != null && u.length) ||
            (yield a2({
              sendCalls: { request: o, result: i },
              storage: this.storage,
            })),
          i
        );
      });
    }
  },
  g2 = Object.defineProperty,
  m2 = (t, e, s) =>
    e in t
      ? g2(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (t[e] = s),
  an = (t, e, s) => m2(t, typeof e != "symbol" ? e + "" : e, s),
  Tu = class {
    constructor(e) {
      an(this, "name", Sm),
        an(this, "client"),
        an(this, "httpProviders"),
        an(this, "events"),
        an(this, "namespace"),
        an(this, "chainId"),
        (this.namespace = e.namespace),
        (this.events = un("events")),
        (this.client = un("client")),
        (this.chainId = this.getDefaultChain()),
        (this.name = this.getNamespaceName()),
        (this.httpProviders = this.createHttpProviders());
    }
    updateNamespace(e) {
      (this.namespace.chains = [
        ...new Set((this.namespace.chains || []).concat(e.chains || [])),
      ]),
        (this.namespace.accounts = [
          ...new Set((this.namespace.accounts || []).concat(e.accounts || [])),
        ]),
        (this.namespace.methods = [
          ...new Set((this.namespace.methods || []).concat(e.methods || [])),
        ]),
        (this.namespace.events = [
          ...new Set((this.namespace.events || []).concat(e.events || [])),
        ]),
        (this.httpProviders = this.createHttpProviders());
    }
    requestAccounts() {
      return this.getAccounts();
    }
    request(e) {
      return this.namespace.methods.includes(e.request.method)
        ? this.client.request(e)
        : this.getHttpProvider(e.chainId).request(e.request);
    }
    setDefaultChain(e, s) {
      this.httpProviders[e] || this.setHttpProvider(e, s);
      let r = this.chainId;
      (this.chainId = e),
        this.events.emit(Ou.DEFAULT_CHAIN_CHANGED, {
          currentCaipChainId: `${this.name}:${e}`,
          previousCaipChainId: `${this.name}:${r}`,
        });
    }
    getDefaultChain() {
      if (this.chainId) return this.chainId;
      if (this.namespace.defaultChain) return this.namespace.defaultChain;
      let e = this.namespace.chains[0];
      if (!e) throw new Error("ChainId not found");
      return e.split(":")[1];
    }
    getNamespaceName() {
      let e = this.namespace.chains[0];
      if (!e) throw new Error("ChainId not found");
      return Wt(e).namespace;
    }
    getAccounts() {
      let e = this.namespace.accounts;
      return e
        ? [
            ...new Set(
              e
                .filter((s) => s.split(":")[1] === this.chainId.toString())
                .map((s) => s.split(":")[2])
            ),
          ]
        : [];
    }
    createHttpProviders() {
      var e, s;
      let r = {};
      return (
        (s = (e = this.namespace) == null ? void 0 : e.accounts) == null ||
          s.forEach((n) => {
            var i, o;
            let a = Wt(n),
              c =
                (o = (i = this.namespace) == null ? void 0 : i.rpcMap) == null
                  ? void 0
                  : o[`${a.namespace}:${a.reference}`];
            r[a.reference] = this.createHttpProvider(n, c);
          }),
        r
      );
    }
    getHttpProvider(e) {
      let s = Wt(e).reference,
        r = this.httpProviders[s];
      if (typeof r > "u")
        throw new Error(`JSON-RPC provider for ${e} not found`);
      return r;
    }
    setHttpProvider(e, s) {
      let r = this.createHttpProvider(e, s);
      r && (this.httpProviders[e] = r);
    }
    createHttpProvider(e, s) {
      let r = s || Im(e, this.namespace, this.client.core.projectId);
      if (!r) throw new Error(`No RPC url provided for chainId: ${e}`);
      return new bn(new di(r, un("disableProviderPing")));
    }
  },
  y2 = Object.defineProperty,
  w2 = Object.defineProperties,
  b2 = Object.getOwnPropertyDescriptors,
  dm = Object.getOwnPropertySymbols,
  v2 = Object.prototype.hasOwnProperty,
  E2 = Object.prototype.propertyIsEnumerable,
  Au = (t, e, s) =>
    e in t
      ? y2(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (t[e] = s),
  oi = (t, e) => {
    for (var s in e || (e = {})) v2.call(e, s) && Au(t, s, e[s]);
    if (dm) for (var s of dm(e)) E2.call(e, s) && Au(t, s, e[s]);
    return t;
  },
  Go = (t, e) => w2(t, b2(e)),
  Lt = (t, e, s) => Au(t, typeof e != "symbol" ? e + "" : e, s),
  fm = class t {
    constructor(e) {
      Lt(this, "client"),
        Lt(this, "namespaces"),
        Lt(this, "optionalNamespaces"),
        Lt(this, "sessionProperties"),
        Lt(this, "scopedProperties"),
        Lt(this, "events", new pm.default()),
        Lt(this, "rpcProviders", {}),
        Lt(this, "session"),
        Lt(this, "providerOpts"),
        Lt(this, "logger"),
        Lt(this, "uri"),
        Lt(this, "disableProviderPing", !1);
      var s, r;
      (this.providerOpts = e),
        (this.logger = en({
          logger: (s = e.logger) != null ? s : Zg,
          name: (r = this.providerOpts.name) != null ? r : Em,
        })),
        (this.disableProviderPing = e?.disableProviderPing || !1);
    }
    static init(e) {
      return f(this, null, function* () {
        let s = new t(e);
        return yield s.initialize(), s;
      });
    }
    request(e, s, r) {
      return f(this, null, function* () {
        let [n, i] = this.validateChain(s);
        if (!this.session)
          throw new Error("Please call connect() before request()");
        return yield this.getProvider(n).request({
          request: oi({}, e),
          chainId: `${n}:${i}`,
          topic: this.session.topic,
          expiry: r,
        });
      });
    }
    sendAsync(e, s, r, n) {
      let i = new Date().getTime();
      this.request(e, r, n)
        .then((o) => s(null, Rs(i, o)))
        .catch((o) => s(o, void 0));
    }
    enable() {
      return f(this, null, function* () {
        if (!this.client) throw new Error("Sign Client not initialized");
        return (
          this.session ||
            (yield this.connect({
              namespaces: this.namespaces,
              optionalNamespaces: this.optionalNamespaces,
              sessionProperties: this.sessionProperties,
              scopedProperties: this.scopedProperties,
            })),
          yield this.requestAccounts()
        );
      });
    }
    disconnect() {
      return f(this, null, function* () {
        var e;
        if (!this.session)
          throw new Error("Please call connect() before enable()");
        yield this.client.disconnect({
          topic: (e = this.session) == null ? void 0 : e.topic,
          reason: fe("USER_DISCONNECTED"),
        }),
          yield this.cleanup();
      });
    }
    connect(e) {
      return f(this, null, function* () {
        if (!this.client) throw new Error("Sign Client not initialized");
        if (
          (this.setNamespaces(e), this.cleanupPendingPairings(), !e.skipPairing)
        )
          return yield this.pair(e.pairingTopic);
      });
    }
    authenticate(e, s) {
      return f(this, null, function* () {
        if (!this.client) throw new Error("Sign Client not initialized");
        this.setNamespaces(e), yield this.cleanupPendingPairings();
        let { uri: r, response: n } = yield this.client.authenticate(e, s);
        r && ((this.uri = r), this.events.emit("display_uri", r));
        let i = yield n();
        if (((this.session = i.session), this.session)) {
          let o = rm(this.session.namespaces);
          (this.namespaces = Ko(this.namespaces, o)),
            yield this.persist("namespaces", this.namespaces),
            this.onConnect();
        }
        return i;
      });
    }
    on(e, s) {
      this.events.on(e, s);
    }
    once(e, s) {
      this.events.once(e, s);
    }
    removeListener(e, s) {
      this.events.removeListener(e, s);
    }
    off(e, s) {
      this.events.off(e, s);
    }
    get isWalletConnect() {
      return !0;
    }
    pair(e) {
      return f(this, null, function* () {
        let { uri: s, approval: r } = yield this.client.connect({
          pairingTopic: e,
          requiredNamespaces: this.namespaces,
          optionalNamespaces: this.optionalNamespaces,
          sessionProperties: this.sessionProperties,
          scopedProperties: this.scopedProperties,
        });
        s && ((this.uri = s), this.events.emit("display_uri", s));
        let n = yield r();
        this.session = n;
        let i = rm(n.namespaces);
        return (
          (this.namespaces = Ko(this.namespaces, i)),
          yield this.persist("namespaces", this.namespaces),
          yield this.persist("optionalNamespaces", this.optionalNamespaces),
          this.onConnect(),
          this.session
        );
      });
    }
    setDefaultChain(e, s) {
      try {
        if (!this.session) return;
        let [r, n] = this.validateChain(e);
        this.getProvider(r).setDefaultChain(n, s);
      } catch (r) {
        if (!/Please call connect/.test(r.message)) throw r;
      }
    }
    cleanupPendingPairings() {
      return f(this, arguments, function* (e = {}) {
        try {
          this.logger.info("Cleaning up inactive pairings...");
          let s = this.client.pairing.getAll();
          if (!Zt(s)) return;
          for (let r of s)
            e.deletePairings
              ? this.client.core.expirer.set(r.topic, 0)
              : yield this.client.core.relayer.subscriber.unsubscribe(r.topic);
          this.logger.info(`Inactive pairings cleared: ${s.length}`);
        } catch (s) {
          this.logger.warn(s, "Failed to cleanup pending pairings");
        }
      });
    }
    abortPairingAttempt() {
      this.logger.warn(
        "abortPairingAttempt is deprecated. This is now a no-op."
      );
    }
    checkStorage() {
      return f(this, null, function* () {
        (this.namespaces = (yield this.getFromStore("namespaces")) || {}),
          (this.optionalNamespaces =
            (yield this.getFromStore("optionalNamespaces")) || {}),
          this.session && this.createProviders();
      });
    }
    initialize() {
      return f(this, null, function* () {
        this.logger.trace("Initialized"),
          yield this.createClient(),
          yield this.checkStorage(),
          this.registerEventListeners();
      });
    }
    createClient() {
      return f(this, null, function* () {
        var e, s;
        if (
          ((this.client =
            this.providerOpts.client ||
            (yield Gg.init({
              core: this.providerOpts.core,
              logger: this.providerOpts.logger || Zg,
              relayUrl: this.providerOpts.relayUrl || PI,
              projectId: this.providerOpts.projectId,
              metadata: this.providerOpts.metadata,
              storageOptions: this.providerOpts.storageOptions,
              storage: this.providerOpts.storage,
              name: this.providerOpts.name,
              customStoragePrefix: this.providerOpts.customStoragePrefix,
              telemetryEnabled: this.providerOpts.telemetryEnabled,
            }))),
          this.providerOpts.session)
        )
          try {
            this.session = this.client.session.get(
              this.providerOpts.session.topic
            );
          } catch (r) {
            throw (
              (this.logger.error(r, "Failed to get session"),
              new Error(
                `The provided session: ${
                  (s = (e = this.providerOpts) == null ? void 0 : e.session) ==
                  null
                    ? void 0
                    : s.topic
                } doesn't exist in the Sign client`
              ))
            );
          }
        else {
          let r = this.client.session.getAll();
          this.session = r[0];
        }
        this.logger.trace("SignClient Initialized");
      });
    }
    createProviders() {
      if (!this.client) throw new Error("Sign Client not initialized");
      if (!this.session)
        throw new Error(
          "Session not initialized. Please call connect() before enable()"
        );
      let e = [
        ...new Set(Object.keys(this.session.namespaces).map((s) => Tr(s))),
      ];
      yu("client", this.client),
        yu("events", this.events),
        yu("disableProviderPing", this.disableProviderPing),
        e.forEach((s) => {
          if (!this.session) return;
          let r = MI(s, this.session);
          if (r?.length === 0) return;
          let n = _m(r),
            i = Ko(this.namespaces, this.optionalNamespaces),
            o = Go(oi({}, i[s]), { accounts: r, chains: n });
          switch (s) {
            case "eip155":
              this.rpcProviders[s] = new _u({ namespace: o });
              break;
            default:
              this.rpcProviders[s] = new Tu({ namespace: o });
          }
        });
    }
    registerEventListeners() {
      if (typeof this.client > "u")
        throw new Error("Sign Client is not initialized");
      this.client.on("session_ping", (e) => {
        var s;
        let { topic: r } = e;
        r === ((s = this.session) == null ? void 0 : s.topic) &&
          this.events.emit("session_ping", e);
      }),
        this.client.on("session_event", (e) => {
          var s;
          let { params: r, topic: n } = e;
          if (n !== ((s = this.session) == null ? void 0 : s.topic)) return;
          let { event: i } = r;
          if (i.name === "accountsChanged") {
            let o = i.data;
            o && Zt(o) && this.events.emit("accountsChanged", o.map(sm));
          } else if (i.name === "chainChanged") {
            let o = r.chainId,
              a = r.event.data,
              c = Tr(o),
              l = mu(o) !== mu(a) ? `${c}:${mu(a)}` : o;
            this.onChainChanged({ currentCaipChainId: l });
          } else this.events.emit(i.name, i.data);
          this.events.emit("session_event", e);
        }),
        this.client.on("session_update", ({ topic: e, params: s }) => {
          var r, n;
          if (e !== ((r = this.session) == null ? void 0 : r.topic)) return;
          let { namespaces: i } = s,
            o = (n = this.client) == null ? void 0 : n.session.get(e);
          (this.session = Go(oi({}, o), { namespaces: i })),
            this.onSessionUpdate(),
            this.events.emit("session_update", { topic: e, params: s });
        }),
        this.client.on("session_delete", (e) =>
          f(this, null, function* () {
            var s;
            e.topic === ((s = this.session) == null ? void 0 : s.topic) &&
              (yield this.cleanup(),
              this.events.emit("session_delete", e),
              this.events.emit(
                "disconnect",
                Go(oi({}, fe("USER_DISCONNECTED")), { data: e.topic })
              ));
          })
        ),
        this.on(Ou.DEFAULT_CHAIN_CHANGED, (e) => {
          this.onChainChanged(Go(oi({}, e), { internal: !0 }));
        });
    }
    getProvider(e) {
      return this.rpcProviders[e] || this.rpcProviders[Sm];
    }
    onSessionUpdate() {
      Object.keys(this.rpcProviders).forEach((e) => {
        var s;
        this.getProvider(e).updateNamespace(
          (s = this.session) == null ? void 0 : s.namespaces[e]
        );
      });
    }
    setNamespaces(e) {
      let {
        namespaces: s = {},
        optionalNamespaces: r = {},
        sessionProperties: n,
        scopedProperties: i,
      } = e;
      (this.optionalNamespaces = Ko(s, r)),
        (this.sessionProperties = n),
        (this.scopedProperties = i);
    }
    validateChain(e) {
      let [s, r] = e?.split(":") || ["", ""];
      if (!this.namespaces || !Object.keys(this.namespaces).length)
        return [s, r];
      if (
        s &&
        !Object.keys(this.namespaces || {})
          .map((o) => Tr(o))
          .includes(s)
      )
        throw new Error(
          `Namespace '${s}' is not configured. Please call connect() first with namespace config.`
        );
      if (s && r) return [s, r];
      let n = Tr(Object.keys(this.namespaces)[0]),
        i = this.rpcProviders[n].getDefaultChain();
      return [n, i];
    }
    requestAccounts() {
      return f(this, null, function* () {
        let [e] = this.validateChain();
        return yield this.getProvider(e).requestAccounts();
      });
    }
    onChainChanged(n) {
      return f(
        this,
        arguments,
        function* ({
          currentCaipChainId: e,
          previousCaipChainId: s,
          internal: r = !1,
        }) {
          if (!this.namespaces) return;
          let [i, o] = this.validateChain(e);
          o &&
            (this.updateNamespaceChain(i, o),
            r
              ? (this.events.emit("chainChanged", o),
                this.emitAccountsChangedOnChainChange({
                  namespace: i,
                  currentCaipChainId: e,
                  previousCaipChainId: s,
                }))
              : this.getProvider(i).setDefaultChain(o),
            yield this.persist("namespaces", this.namespaces));
        }
      );
    }
    emitAccountsChangedOnChainChange({
      namespace: e,
      currentCaipChainId: s,
      previousCaipChainId: r,
    }) {
      var n, i;
      try {
        if (r === s) return;
        let o =
          (i = (n = this.session) == null ? void 0 : n.namespaces[e]) == null
            ? void 0
            : i.accounts;
        if (!o) return;
        let a = o.filter((c) => c.includes(`${s}:`)).map(sm);
        if (!Zt(a)) return;
        this.events.emit("accountsChanged", a);
      } catch (o) {
        this.logger.warn(o, "Failed to emit accountsChanged on chain change");
      }
    }
    updateNamespaceChain(e, s) {
      if (!this.namespaces) return;
      let r = this.namespaces[e] ? e : `${e}:${s}`,
        n = { chains: [], methods: [], events: [], defaultChain: s };
      this.namespaces[r]
        ? this.namespaces[r] && (this.namespaces[r].defaultChain = s)
        : (this.namespaces[r] = n);
    }
    onConnect() {
      this.createProviders(),
        this.events.emit("connect", { session: this.session });
    }
    cleanup() {
      return f(this, null, function* () {
        (this.namespaces = void 0),
          (this.optionalNamespaces = void 0),
          (this.sessionProperties = void 0),
          yield this.deleteFromStore("namespaces"),
          yield this.deleteFromStore("optionalNamespaces"),
          yield this.deleteFromStore("sessionProperties"),
          (this.session = void 0),
          this.cleanupPendingPairings({ deletePairings: !0 }),
          yield this.cleanupStorage();
      });
    }
    persist(e, s) {
      return f(this, null, function* () {
        var r;
        let n = ((r = this.session) == null ? void 0 : r.topic) || "";
        yield this.client.core.storage.setItem(`${Vo}/${e}${n}`, s);
      });
    }
    getFromStore(e) {
      return f(this, null, function* () {
        var s;
        let r = ((s = this.session) == null ? void 0 : s.topic) || "";
        return yield this.client.core.storage.getItem(`${Vo}/${e}${r}`);
      });
    }
    deleteFromStore(e) {
      return f(this, null, function* () {
        var s;
        let r = ((s = this.session) == null ? void 0 : s.topic) || "";
        yield this.client.core.storage.removeItem(`${Vo}/${e}${r}`);
      });
    }
    cleanupStorage() {
      return f(this, null, function* () {
        var e;
        try {
          if (((e = this.client) == null ? void 0 : e.session.length) > 0)
            return;
          let s = yield this.client.core.storage.getKeys();
          for (let r of s)
            r.startsWith(Vo) && (yield this.client.core.storage.removeItem(r));
        } catch (s) {
          this.logger.warn(s, "Failed to cleanup storage");
        }
      });
    }
  };
var Am = {
  convertEVMChainIdToCoinType(t) {
    if (t >= 2147483648) throw new Error("Invalid chainId");
    return (2147483648 | t) >>> 0;
  },
};
var Dt = rt({ suggestions: [], loading: !1 }),
  x2 = {
    state: Dt,
    subscribe(t) {
      return Ct(Dt, () => t(Dt));
    },
    subscribeKey(t, e) {
      return nt(Dt, t, e);
    },
    resolveName(t) {
      return f(this, null, function* () {
        try {
          return yield Pe.lookupEnsName(t);
        } catch (e) {
          let s = e;
          throw new Error(
            s?.reasons?.[0]?.description || "Error resolving name"
          );
        }
      });
    },
    isNameRegistered(t) {
      return f(this, null, function* () {
        try {
          return yield Pe.lookupEnsName(t), !0;
        } catch {
          return !1;
        }
      });
    },
    getSuggestions(t) {
      return f(this, null, function* () {
        try {
          (Dt.loading = !0), (Dt.suggestions = []);
          let e = yield Pe.getEnsNameSuggestions(t);
          return (Dt.suggestions = e.suggestions || []), Dt.suggestions;
        } catch (e) {
          let s = hn.parseEnsApiError(e, "Error fetching name suggestions");
          throw new Error(s);
        } finally {
          Dt.loading = !1;
        }
      });
    },
    getNamesForAddress(t) {
      return f(this, null, function* () {
        try {
          if (!Y.state.activeCaipNetwork) return [];
          let s = dn.getEnsFromCacheForAddress(t);
          if (s) return s;
          let r = yield Pe.reverseLookupEnsName({ address: t });
          return (
            dn.updateEnsCache({ address: t, ens: r, timestamp: Date.now() }), r
          );
        } catch (e) {
          let s = hn.parseEnsApiError(e, "Error fetching names for address");
          throw new Error(s);
        }
      });
    },
    registerName(t) {
      return f(this, null, function* () {
        let e = Y.state.activeCaipNetwork,
          s = Y.getAccountData(e?.chainNamespace)?.address,
          r = ss.getAuthConnector();
        if (!e) throw new Error("Network not found");
        if (!s || !r) throw new Error("Address or auth connector not found");
        Dt.loading = !0;
        try {
          let n = JSON.stringify({
            name: t,
            attributes: {},
            timestamp: Math.floor(Date.now() / 1e3),
          });
          de.pushTransactionStack({
            onCancel() {
              de.replace("RegisterAccountName");
            },
          });
          let i = yield it.signMessage(n);
          Dt.loading = !1;
          let o = e.id;
          if (!o) throw new Error("Network not found");
          let a = Am.convertEVMChainIdToCoinType(Number(o));
          yield Pe.registerEnsName({
            coinType: a,
            address: s,
            signature: i,
            message: n,
          }),
            Y.setAccountProp("profileName", t, e.chainNamespace),
            dn.updateEnsCache({
              address: s,
              ens: [
                {
                  name: t,
                  registered_at: new Date().toISOString(),
                  updated_at: void 0,
                  addresses: {},
                  attributes: [],
                },
              ],
              timestamp: Date.now(),
            }),
            de.replace("RegisterAccountNameSuccess");
        } catch (n) {
          let i = hn.parseEnsApiError(n, `Error registering name ${t}`);
          throw (de.replace("RegisterAccountName"), new Error(i));
        } finally {
          Dt.loading = !1;
        }
      });
    },
    validateName(t) {
      return /^[a-zA-Z0-9-]{4,}$/u.test(t);
    },
    parseEnsApiError(t, e) {
      return t?.reasons?.[0]?.description || e;
    },
  },
  hn = jt(x2);
var S2 = {
    solana: [
      "solana_signMessage",
      "solana_signTransaction",
      "solana_requestAccounts",
      "solana_getAccounts",
      "solana_signAllTransactions",
      "solana_signAndSendTransaction",
    ],
    eip155: [
      "eth_accounts",
      "eth_requestAccounts",
      "eth_sendRawTransaction",
      "eth_sign",
      "eth_signTransaction",
      "eth_signTypedData",
      "eth_signTypedData_v3",
      "eth_signTypedData_v4",
      "eth_sendTransaction",
      "personal_sign",
      "wallet_switchEthereumChain",
      "wallet_addEthereumChain",
      "wallet_getPermissions",
      "wallet_requestPermissions",
      "wallet_registerOnboarding",
      "wallet_watchAsset",
      "wallet_scanQRCode",
      "wallet_getCallsStatus",
      "wallet_showCallsStatus",
      "wallet_sendCalls",
      "wallet_getCapabilities",
      "wallet_grantPermissions",
      "wallet_revokePermissions",
      "wallet_getAssets",
    ],
    bip122: ["sendTransfer", "signMessage", "signPsbt", "getAccountAddresses"],
  },
  Pr = {
    RPC_ERROR_CODE: { USER_REJECTED: 5e3, USER_REJECTED_METHODS: 5002 },
    getMethodsByChainNamespace(t) {
      return S2[t] || [];
    },
    createDefaultNamespace(t) {
      return {
        methods: this.getMethodsByChainNamespace(t),
        events: ["accountsChanged", "chainChanged"],
        chains: [],
        rpcMap: {},
      };
    },
    applyNamespaceOverrides(t, e) {
      if (!e) return V({}, t);
      let s = V({}, t),
        r = new Set();
      if (
        (e.methods && Object.keys(e.methods).forEach((n) => r.add(n)),
        e.chains && Object.keys(e.chains).forEach((n) => r.add(n)),
        e.events && Object.keys(e.events).forEach((n) => r.add(n)),
        e.rpcMap &&
          Object.keys(e.rpcMap).forEach((n) => {
            let [i] = n.split(":");
            i && r.add(i);
          }),
        r.forEach((n) => {
          s[n] || (s[n] = this.createDefaultNamespace(n));
        }),
        e.methods &&
          Object.entries(e.methods).forEach(([n, i]) => {
            s[n] && (s[n].methods = i);
          }),
        e.chains &&
          Object.entries(e.chains).forEach(([n, i]) => {
            s[n] && (s[n].chains = i);
          }),
        e.events &&
          Object.entries(e.events).forEach(([n, i]) => {
            s[n] && (s[n].events = i);
          }),
        e.rpcMap)
      ) {
        let n = new Set();
        Object.entries(e.rpcMap).forEach(([i, o]) => {
          let [a, c] = i.split(":");
          !a ||
            !c ||
            !s[a] ||
            (s[a].rpcMap || (s[a].rpcMap = {}),
            n.has(a) || ((s[a].rpcMap = {}), n.add(a)),
            (s[a].rpcMap[c] = o));
        });
      }
      return s;
    },
    createNamespaces(t, e) {
      let s = t.reduce((r, n) => {
        let { id: i, chainNamespace: o, rpcUrls: a } = n,
          c = a.default.http[0];
        r[o] || (r[o] = this.createDefaultNamespace(o));
        let l = `${o}:${i}`,
          u = r[o];
        switch ((u.chains.push(l), l)) {
          case "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp":
            u.chains.push("solana:4sGjMW1sUnHzSxGspuhpqLDx6wiyjNtZ");
            break;
          case "solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1":
            u.chains.push("solana:8E9rvCKLFQia2Y35HXjjpWzj8weVo44K");
            break;
          default:
        }
        return u?.rpcMap && c && (u.rpcMap[i] = c), r;
      }, {});
      return this.applyNamespaceOverrides(s, e);
    },
    resolveReownName: (t) =>
      f(void 0, null, function* () {
        let e = yield hn.resolveName(t);
        return (Object.values(e?.addresses) || [])[0]?.address || !1;
      }),
    getChainsFromNamespaces(t = {}) {
      return Object.values(t).flatMap((e) => {
        let s = e.chains || [],
          r = e.accounts.map((n) => {
            let [i, o] = n.split(":");
            return `${i}:${o}`;
          });
        return Array.from(new Set([...s, ...r]));
      });
    },
    isSessionEventData(t) {
      return (
        typeof t == "object" &&
        t !== null &&
        "id" in t &&
        "topic" in t &&
        "params" in t &&
        typeof t.params == "object" &&
        t.params !== null &&
        "chainId" in t.params &&
        "event" in t.params &&
        typeof t.params.event == "object" &&
        t.params.event !== null
      );
    },
    isUserRejectedRequestError(t) {
      try {
        if (typeof t == "object" && t !== null) {
          let e = t,
            s = typeof e.code == "number",
            r = s && e.code === Pr.RPC_ERROR_CODE.USER_REJECTED_METHODS,
            n = s && e.code === Pr.RPC_ERROR_CODE.USER_REJECTED;
          return r || n;
        }
        return !1;
      } catch {
        return !1;
      }
    },
    isOriginAllowed(t, e, s) {
      for (let r of [...e, ...s])
        if (r.includes("*")) {
          let i = `^${r
            .replace(/[.*+?^${}()|[\]\\]/gu, "\\$&")
            .replace(/\\\*/gu, ".*")}$`;
          if (new RegExp(i, "u").test(t)) return !0;
        } else
          try {
            if (new URL(r).origin === t) return !0;
          } catch {
            if (r === t) return !0;
          }
      return !1;
    },
    listenWcProvider({
      universalProvider: t,
      namespace: e,
      onConnect: s,
      onDisconnect: r,
      onAccountsChanged: n,
      onChainChanged: i,
      onDisplayUri: o,
    }) {
      s &&
        t.on("connect", () => {
          let a = Pr.getWalletConnectAccounts(t, e);
          s(a);
        }),
        r &&
          t.on("disconnect", () => {
            r();
          }),
        n &&
          t.on("accountsChanged", (a) => {
            try {
              let c = t.session?.namespaces?.[e]?.accounts || [],
                l = t.rpcProviders?.[e]?.getDefaultChain(),
                u = a
                  .map((h) => {
                    let d = c.find((g) => g.includes(`${e}:${l}:${h}`));
                    if (!d) return;
                    let { chainId: p, chainNamespace: m } =
                      sr.parseCaipAddress(d);
                    return { address: h, chainId: p, chainNamespace: m };
                  })
                  .filter((h) => h !== void 0);
              u.length > 0 && n(u);
            } catch (c) {
              console.warn(
                "Failed to parse accounts for namespace on accountsChanged event",
                e,
                a,
                c
              );
            }
          }),
        i &&
          t.on("chainChanged", (a) => {
            i(a);
          }),
        o &&
          t.on("display_uri", (a) => {
            o(a);
          });
    },
    getWalletConnectAccounts(t, e) {
      let s = new Set(),
        r = t?.session?.namespaces?.[e]?.accounts
          ?.map((n) => sr.parseCaipAddress(n))
          .filter(({ address: n }) =>
            s.has(n.toLowerCase()) ? !1 : (s.add(n.toLowerCase()), !0)
          );
      return r && r.length > 0 ? r : [];
    },
  };
var I2 = [we.CONNECTOR_ID.AUTH, we.CONNECTOR_ID.WALLET_CONNECT],
  Nu = class {
    constructor(e) {
      (this.availableConnectors = []),
        (this.availableConnections = []),
        (this.providerHandlers = {}),
        (this.eventListeners = new Map()),
        (this.getCaipNetworks = (s) => Y.getCaipNetworks(s)),
        (this.getConnectorId = (s) => ss.getConnectorId(s)),
        e && this.construct(e);
    }
    construct(e) {
      (this.projectId = e.projectId),
        (this.namespace = e.namespace),
        (this.adapterType = e.adapterType);
    }
    get connectors() {
      return this.availableConnectors;
    }
    get connections() {
      return this.availableConnections;
    }
    get networks() {
      return this.getCaipNetworks(this.namespace);
    }
    onAuthConnected({ accounts: e, chainId: s }) {
      let r = this.getCaipNetworks()
        .filter((n) => n.chainNamespace === this.namespace)
        .find((n) => n.id.toString() === s?.toString());
      e &&
        r &&
        this.addConnection({
          connectorId: we.CONNECTOR_ID.AUTH,
          accounts: e,
          caipNetwork: r,
        });
    }
    setAuthProvider(e) {
      e.onConnect(this.onAuthConnected.bind(this)),
        e.onSocialConnected(this.onAuthConnected.bind(this)),
        this.addConnector({
          id: we.CONNECTOR_ID.AUTH,
          type: "AUTH",
          name: we.CONNECTOR_NAMES.AUTH,
          provider: e,
          imageId: void 0,
          chain: this.namespace,
          chains: [],
        });
    }
    addConnector(...e) {
      let s = new Set();
      (this.availableConnectors = [...e, ...this.availableConnectors].filter(
        (r) => (s.has(r.id) ? !1 : (s.add(r.id), !0))
      )),
        this.emit("connectors", this.availableConnectors);
    }
    addConnection(...e) {
      let s = new Set();
      (this.availableConnections = [...e, ...this.availableConnections].filter(
        (r) =>
          s.has(r.connectorId.toLowerCase())
            ? !1
            : (s.add(r.connectorId.toLowerCase()), !0)
      )),
        this.emit("connections", this.availableConnections);
    }
    deleteConnection(e) {
      (this.availableConnections = this.availableConnections.filter(
        (s) => s.connectorId.toLowerCase() !== e.toLowerCase()
      )),
        this.emit("connections", this.availableConnections);
    }
    clearConnections(e = !1) {
      (this.availableConnections = []),
        e && this.emit("connections", this.availableConnections);
    }
    setStatus(e, s) {
      Y.setAccountProp("status", e, s);
    }
    on(e, s) {
      this.eventListeners.has(e) || this.eventListeners.set(e, new Set()),
        this.eventListeners.get(e)?.add(s);
    }
    off(e, s) {
      let r = this.eventListeners.get(e);
      r && r.delete(s);
    }
    removeAllEventListeners() {
      this.eventListeners.forEach((e) => {
        e.clear();
      });
    }
    emit(e, s) {
      let r = this.eventListeners.get(e);
      r && r.forEach((n) => n(s));
    }
    connectWalletConnect(e) {
      return f(this, null, function* () {
        try {
          return {
            clientId:
              (yield this.getWalletConnectConnector().connectWalletConnect())
                .clientId,
          };
        } catch (s) {
          throw Pr.isUserRejectedRequestError(s) ? new Xu(s) : s;
        }
      });
    }
    switchNetwork(e) {
      return f(this, null, function* () {
        let { caipNetwork: s } = e,
          r = li.getProviderId(s.chainNamespace),
          n = li.getProvider(s.chainNamespace);
        if (!n) throw new Error("Provider not found");
        if (r === "WALLET_CONNECT") {
          n.setDefaultChain(s.caipNetworkId);
          return;
        }
        if (r === "AUTH") {
          let i = ss.getAuthConnector()?.provider;
          if (!i) throw new Error("Auth provider not found");
          let o = Ns(s.chainNamespace);
          yield i.switchNetwork({ chainId: s.caipNetworkId });
          let a = yield i.getUser({
            chainId: s.caipNetworkId,
            preferredAccountType: o,
          });
          this.emit("switchNetwork", a);
        }
      });
    }
    getWalletConnectConnector() {
      let e = this.connectors.find((s) => s.id === "walletConnect");
      if (!e) throw new Error("WalletConnectConnector not found");
      return e;
    }
    onConnect(e, s) {
      if (e.length > 0) {
        let { address: r, chainId: n } = Ae.getAccount(e[0]),
          i = this.getCaipNetworks()
            .filter((a) => a.chainNamespace === this.namespace)
            .find((a) => a.id.toString() === n?.toString()),
          o = this.connectors.find((a) => a.id === s);
        r &&
          (this.emit("accountChanged", {
            address: r,
            chainId: n,
            connector: o,
          }),
          this.addConnection({
            connectorId: s,
            accounts: e.map((a) => {
              let { address: c } = Ae.getAccount(a);
              return { address: c };
            }),
            caipNetwork: i,
          }));
      }
    }
    onAccountsChanged(e, s, r = !0) {
      if (e.length > 0) {
        let { address: n } = Ae.getAccount(e[0]),
          i = this.getConnection({
            connectorId: s,
            connections: this.connections,
            connectors: this.connectors,
          });
        n &&
          this.getConnectorId(we.CHAIN.EVM)?.toLowerCase() ===
            s.toLowerCase() &&
          this.emit("accountChanged", {
            address: n,
            chainId: i?.caipNetwork?.id,
            connector: i?.connector,
          }),
          this.addConnection({
            connectorId: s,
            accounts: e.map((o) => {
              let { address: a } = Ae.getAccount(o);
              return { address: a };
            }),
            caipNetwork: i?.caipNetwork,
          });
      } else r && this.onDisconnect(s);
    }
    onDisconnect(e) {
      this.removeProviderListeners(e),
        this.deleteConnection(e),
        this.getConnectorId(we.CHAIN.EVM)?.toLowerCase() === e.toLowerCase() &&
          this.emitFirstAvailableConnection(),
        this.connections.length === 0 && this.emit("disconnect");
    }
    onChainChanged(e, s) {
      let r =
          typeof e == "string" && e.startsWith("0x")
            ? parseInt(e, 16).toString()
            : e.toString(),
        n = this.getConnection({
          connectorId: s,
          connections: this.connections,
          connectors: this.connectors,
        }),
        i = this.getCaipNetworks()
          .filter((o) => o.chainNamespace === this.namespace)
          .find((o) => o.id.toString() === r);
      n &&
        this.addConnection({
          connectorId: s,
          accounts: n.accounts,
          caipNetwork: i,
        }),
        this.getConnectorId(we.CHAIN.EVM)?.toLowerCase() === s.toLowerCase() &&
          this.emit("switchNetwork", { chainId: r });
    }
    listenProviderEvents(e, s) {
      if (I2.includes(e)) return;
      let r = (o) => this.onAccountsChanged(o, e),
        n = (o) => this.onChainChanged(o, e),
        i = () => this.onDisconnect(e);
      this.providerHandlers[e] ||
        (s.on("disconnect", i),
        s.on("accountsChanged", r),
        s.on("chainChanged", n),
        (this.providerHandlers[e] = {
          provider: s,
          disconnect: i,
          accountsChanged: r,
          chainChanged: n,
        }));
    }
    removeProviderListeners(e) {
      if (this.providerHandlers[e]) {
        let {
          provider: s,
          disconnect: r,
          accountsChanged: n,
          chainChanged: i,
        } = this.providerHandlers[e];
        s.removeListener("disconnect", r),
          s.removeListener("accountsChanged", n),
          s.removeListener("chainChanged", i),
          (this.providerHandlers[e] = null);
      }
    }
    emitFirstAvailableConnection() {
      let e = this.getConnection({
        connections: this.connections,
        connectors: this.connectors,
      });
      if (e) {
        let [s] = e.accounts;
        this.emit("accountChanged", {
          address: s?.address,
          chainId: e.caipNetwork?.id,
          connector: e.connector,
        });
      }
    }
    getConnection({
      address: e,
      connectorId: s,
      connections: r,
      connectors: n,
    }) {
      if (s) {
        let o = r.find((l) => l.connectorId.toLowerCase() === s.toLowerCase());
        if (!o) return null;
        let a = n.find(
            (l) => l.id.toLowerCase() === o.connectorId.toLowerCase()
          ),
          c = e
            ? o.accounts.find(
                (l) => l.address.toLowerCase() === e.toLowerCase()
              )
            : o.accounts[0];
        return ye(V({}, o), { account: c, connector: a });
      }
      let i = r.find(
        (o) =>
          o.accounts.length > 0 &&
          n.some((a) => a.id.toLowerCase() === o.connectorId.toLowerCase())
      );
      if (i) {
        let [o] = i.accounts,
          a = n.find((c) => c.id.toLowerCase() === i.connectorId.toLowerCase());
        return ye(V({}, i), { account: o, connector: a });
      }
      return null;
    }
  };
var Or = null,
  qt = {
    getSIWX() {
      return _e.state.siwx;
    },
    initializeIfEnabled() {
      return f(this, arguments, function* (t = Y.getActiveCaipAddress()) {
        let e = _e.state.siwx;
        if (!(e && t)) return;
        let [s, r, n] = t.split(":");
        if (Y.checkIfSupportedNetwork(s, `${s}:${r}`))
          try {
            if (_e.state.remoteFeatures?.emailCapture) {
              let o = Y.getAccountData(s)?.user;
              yield mt.open({
                view: "DataCapture",
                data: { email: o?.email ?? void 0 },
              });
              return;
            }
            if (
              (Or && (yield Or), (yield e.getSessions(`${s}:${r}`, n)).length)
            )
              return;
            yield mt.open({ view: "SIWXSignMessage" });
          } catch (i) {
            console.error("SIWXUtil:initializeIfEnabled", i),
              Qe.sendEvent({
                type: "track",
                event: "SIWX_AUTH_ERROR",
                properties: this.getSIWXEventProperties(i),
              }),
              yield it._getClient()?.disconnect().catch(console.error),
              de.reset("Connect"),
              Ee.showError(
                "A problem occurred while trying initialize authentication"
              );
          }
      });
    },
    isAuthenticated() {
      return f(this, arguments, function* (t = Y.getActiveCaipAddress()) {
        if (!_e.state.siwx || !t) return !0;
        let {
            chainNamespace: s,
            chainId: r,
            address: n,
          } = sr.parseCaipAddress(t),
          i = `${s}:${r}`;
        return (
          (yield qt.getSessions({ address: n, caipNetworkId: i })).length > 0
        );
      });
    },
    requestSignMessage() {
      return f(this, null, function* () {
        let t = _e.state.siwx,
          e = Ae.getPlainAddress(Y.getActiveCaipAddress()),
          s = pn();
        if (!t) throw new Error("SIWX is not enabled");
        if (!e) throw new Error("No ActiveCaipAddress found");
        if (!s) throw new Error("No ActiveCaipNetwork or client found");
        try {
          let r = yield t.createMessage({
              chainId: s.caipNetworkId,
              accountAddress: e,
            }),
            n = r.toString(),
            i = "";
          t.signMessage
            ? (i = yield t.signMessage({
                message: n,
                chainId: s.caipNetworkId,
                accountAddress: e,
              }))
            : (ss.getConnectorId(s.chainNamespace) === we.CONNECTOR_ID.AUTH &&
                de.pushTransactionStack({}),
              (i = (yield it.signMessage(n)) || "")),
            yield t.addSession({ data: r, message: n, signature: i }),
            Y.setLastConnectedSIWECaipNetwork(s),
            mt.close(),
            Qe.sendEvent({
              type: "track",
              event: "SIWX_AUTH_SUCCESS",
              properties: this.getSIWXEventProperties(),
            });
        } catch (r) {
          (!mt.state.open || de.state.view === "ApproveTransaction") &&
            (yield mt.open({ view: "SIWXSignMessage" })),
            Ee.showError("Error signing message"),
            Qe.sendEvent({
              type: "track",
              event: "SIWX_AUTH_ERROR",
              properties: this.getSIWXEventProperties(r),
            }),
            console.error("SWIXUtil:requestSignMessage", r);
        }
      });
    },
    cancelSignMessage() {
      return f(this, null, function* () {
        try {
          let t = this.getSIWX();
          if (t?.getRequired?.()) {
            let s = Y.getLastConnectedSIWECaipNetwork();
            if (s) {
              let r = yield t?.getSessions(
                s?.caipNetworkId,
                Ae.getPlainAddress(Y.getActiveCaipAddress()) || ""
              );
              r && r.length > 0
                ? yield Y.switchActiveNetwork(s)
                : yield it.disconnect();
            } else yield it.disconnect();
          } else mt.close();
          mt.close(),
            Qe.sendEvent({
              event: "CLICK_CANCEL_SIWX",
              type: "track",
              properties: this.getSIWXEventProperties(),
            });
        } catch (t) {
          console.error("SIWXUtil:cancelSignMessage", t);
        }
      });
    },
    getAllSessions() {
      return f(this, null, function* () {
        let t = this.getSIWX(),
          e = Y.getAllRequestedCaipNetworks(),
          s = [];
        return (
          yield Promise.all(
            e.map((r) =>
              f(this, null, function* () {
                let n = yield t?.getSessions(
                  r.caipNetworkId,
                  Ae.getPlainAddress(Y.getActiveCaipAddress()) || ""
                );
                n && s.push(...n);
              })
            )
          ),
          s
        );
      });
    },
    getSessions(t) {
      return f(this, null, function* () {
        let e = _e.state.siwx,
          s = t?.address;
        if (!s) {
          let n = Y.getActiveCaipAddress();
          s = Ae.getPlainAddress(n);
        }
        let r = t?.caipNetworkId;
        return (
          r || (r = Y.getActiveCaipNetwork()?.caipNetworkId),
          e && s && r ? e.getSessions(r, s) : []
        );
      });
    },
    isSIWXCloseDisabled() {
      return f(this, null, function* () {
        let t = this.getSIWX();
        if (t) {
          let e = de.state.view === "ApproveTransaction",
            s = de.state.view === "SIWXSignMessage";
          if (e || s)
            return t.getRequired?.() && (yield this.getSessions()).length === 0;
        }
        return !1;
      });
    },
    authConnectorAuthenticate(i) {
      return f(
        this,
        arguments,
        function* ({
          authConnector: t,
          chainId: e,
          socialUri: s,
          preferredAccountType: r,
          chainNamespace: n,
        }) {
          let o = qt.getSIWX(),
            a = pn();
          if (
            !o ||
            !n.includes(we.CHAIN.EVM) ||
            _e.state.remoteFeatures?.emailCapture
          ) {
            let d = yield t.connect({
              chainId: e,
              socialUri: s,
              preferredAccountType: r,
            });
            return {
              address: d.address,
              chainId: d.chainId,
              accounts: d.accounts,
            };
          }
          let c = `${n}:${e}`,
            l = yield o.createMessage({
              chainId: c,
              accountAddress: "<<AccountAddress>>",
            }),
            u = {
              accountAddress: l.accountAddress,
              chainId: l.chainId,
              domain: l.domain,
              uri: l.uri,
              version: l.version,
              nonce: l.nonce,
              notBefore: l.notBefore,
              statement: l.statement,
              resources: l.resources,
              requestId: l.requestId,
              issuedAt: l.issuedAt,
              expirationTime: l.expirationTime,
              serializedMessage: l.toString(),
            },
            h = yield t.connect({
              chainId: e,
              socialUri: s,
              siwxMessage: u,
              preferredAccountType: r,
            });
          return (
            (u.accountAddress = h.address),
            (u.serializedMessage = h.message || ""),
            h.signature &&
              h.message &&
              (yield qt.addEmbeddedWalletSession(u, h.message, h.signature)),
            Y.setLastConnectedSIWECaipNetwork(a),
            { address: h.address, chainId: h.chainId, accounts: h.accounts }
          );
        }
      );
    },
    addEmbeddedWalletSession(t, e, s) {
      return f(this, null, function* () {
        if (Or) return Or;
        let r = qt.getSIWX();
        return r
          ? ((Or = r
              .addSession({ data: t, message: e, signature: s })
              .finally(() => {
                Or = null;
              })),
            Or)
          : Promise.resolve();
      });
    },
    universalProviderAuthenticate(r) {
      return f(
        this,
        arguments,
        function* ({ universalProvider: t, chains: e, methods: s }) {
          let n = qt.getSIWX(),
            i = pn(),
            o = new Set(e.map((u) => u.split(":")[0]));
          if (!n || o.size !== 1 || !o.has("eip155")) return !1;
          let a = yield n.createMessage({
              chainId: pn()?.caipNetworkId || "",
              accountAddress: "",
            }),
            c = yield t.authenticate({
              nonce: a.nonce,
              domain: a.domain,
              uri: a.uri,
              exp: a.expirationTime,
              iat: a.issuedAt,
              nbf: a.notBefore,
              requestId: a.requestId,
              version: a.version,
              resources: a.resources,
              statement: a.statement,
              chainId: a.chainId,
              methods: s,
              chains: [a.chainId, ...e.filter((u) => u !== a.chainId)],
            });
          Ee.showLoading("Authenticating...", { autoClose: !1 });
          let l = ye(V({}, c.session.peer.metadata), {
            name: c.session.peer.metadata.name,
            icon: c.session.peer.metadata.icons?.[0],
            type: "WALLET_CONNECT",
          });
          if (
            (Y.setAccountProp("connectedWalletInfo", l, Array.from(o)[0]),
            c?.auths?.length)
          ) {
            let u = c.auths.map((h) => {
              let d = t.client.formatAuthMessage({
                request: h.p,
                iss: h.p.iss,
              });
              return {
                data: ye(V({}, h.p), {
                  accountAddress: h.p.iss.split(":").slice(-1).join(""),
                  chainId: h.p.iss.split(":").slice(2, 4).join(":"),
                  uri: h.p.aud,
                  version: h.p.version || a.version,
                  expirationTime: h.p.exp,
                  issuedAt: h.p.iat,
                  notBefore: h.p.nbf,
                }),
                message: d,
                signature: h.s.s,
                cacao: h,
              };
            });
            try {
              yield n.setSessions(u),
                i && Y.setLastConnectedSIWECaipNetwork(i),
                Qe.sendEvent({
                  type: "track",
                  event: "SIWX_AUTH_SUCCESS",
                  properties: qt.getSIWXEventProperties(),
                });
            } catch (h) {
              throw (
                (console.error(
                  "SIWX:universalProviderAuth - failed to set sessions",
                  h
                ),
                Qe.sendEvent({
                  type: "track",
                  event: "SIWX_AUTH_ERROR",
                  properties: qt.getSIWXEventProperties(h),
                }),
                yield t.disconnect().catch(console.error),
                h)
              );
            } finally {
              Ee.hide();
            }
          }
          return !0;
        }
      );
    },
    getSIWXEventProperties(t) {
      let e = Y.state.activeChain;
      if (!e)
        throw new Error(
          "SIWXUtil:getSIWXEventProperties - namespace is required"
        );
      return {
        network: Y.state.activeCaipNetwork?.caipNetworkId || "",
        isSmartAccount: Ns(e) === Nr.ACCOUNT_TYPES.SMART_ACCOUNT,
        message: t ? Ae.parseError(t) : void 0,
      };
    },
    clearSessions() {
      return f(this, null, function* () {
        let t = this.getSIWX();
        t && (yield t.setSessions([]));
      });
    },
  };
var Ru = class {
    constructor({ provider: e, namespace: s }) {
      (this.id = we.CONNECTOR_ID.WALLET_CONNECT),
        (this.name = "WalletConnect"),
        (this.type = "WALLET_CONNECT"),
        (this.imageId = "ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400"),
        (this.getCaipNetworks = Y.getCaipNetworks.bind(Y)),
        (this.caipNetworks = this.getCaipNetworks()),
        (this.provider = e),
        (this.chain = s);
    }
    get chains() {
      return this.getCaipNetworks();
    }
    connectWalletConnect() {
      return f(this, null, function* () {
        if (!(yield this.authenticate())) {
          let s = this.getCaipNetworks(),
            r = _e.state.universalProviderConfigOverride,
            n = Pr.createNamespaces(s, r);
          yield this.provider.connect({ optionalNamespaces: n });
        }
        return {
          clientId: yield this.provider.client.core.crypto.getClientId(),
          session: this.provider.session,
        };
      });
    }
    disconnect() {
      return f(this, null, function* () {
        yield this.provider.disconnect();
      });
    }
    authenticate() {
      return f(this, null, function* () {
        let e = this.chains.map((s) => s.caipNetworkId);
        return qt.universalProviderAuthenticate({
          universalProvider: this.provider,
          chains: e,
          methods: _2,
        });
      });
    }
  },
  _2 = [
    "eth_accounts",
    "eth_requestAccounts",
    "eth_sendRawTransaction",
    "eth_sign",
    "eth_signTransaction",
    "eth_signTypedData",
    "eth_signTypedData_v3",
    "eth_signTypedData_v4",
    "eth_sendTransaction",
    "personal_sign",
    "wallet_switchEthereumChain",
    "wallet_addEthereumChain",
    "wallet_getPermissions",
    "wallet_requestPermissions",
    "wallet_registerOnboarding",
    "wallet_watchAsset",
    "wallet_scanQRCode",
    "wallet_getCallsStatus",
    "wallet_sendCalls",
    "wallet_getCapabilities",
    "wallet_grantPermissions",
    "wallet_revokePermissions",
    "wallet_getAssets",
  ];
var Ps = {
  getGasPriceInEther(t, e) {
    let s = e * t;
    return Number(s) / 1e18;
  },
  getGasPriceInUSD(t, e, s) {
    let r = Ps.getGasPriceInEther(e, s);
    return be.bigNumber(t).times(r).toNumber();
  },
  getPriceImpact({
    sourceTokenAmount: t,
    sourceTokenPriceInUSD: e,
    toTokenPriceInUSD: s,
    toTokenAmount: r,
  }) {
    let n = be.bigNumber(t).times(e),
      i = be.bigNumber(r).times(s);
    return n.minus(i).div(n).times(100).toNumber();
  },
  getMaxSlippage(t, e) {
    let s = be.bigNumber(t).div(100);
    return be.multiply(e, s).toNumber();
  },
  getProviderFee(t, e = 0.0085) {
    return be.bigNumber(t).times(e).toString();
  },
  isInsufficientNetworkTokenForGas(t, e) {
    let s = e || "0";
    return be.bigNumber(t).eq(0) ? !0 : be.bigNumber(be.bigNumber(s)).gt(t);
  },
  isInsufficientSourceTokenForSwap(t, e, s) {
    let r = s?.find((i) => i.address === e)?.quantity?.numeric;
    return be.bigNumber(r || "0").lt(t);
  },
};
var es = rt({ message: "", variant: "info", open: !1 }),
  T2 = {
    state: es,
    subscribeKey(t, e) {
      return nt(es, t, e);
    },
    open(t, e) {
      let { debug: s } = _e.state,
        { code: r, displayMessage: n, debugMessage: i } = t;
      n && s && ((es.message = n), (es.variant = e), (es.open = !0)),
        i &&
          console.error(
            typeof i == "function" ? i() : i,
            r ? { code: r } : void 0
          );
    },
    warn(t, e, s) {
      (es.open = !0),
        (es.message = t),
        (es.variant = "warning"),
        e && console.warn(e, s);
    },
    close() {
      (es.open = !1), (es.message = ""), (es.variant = "info");
    },
  },
  ku = jt(T2);
var Cm = 15e4,
  A2 = 6;
var Xe = {
    initializing: !1,
    initialized: !1,
    loadingPrices: !1,
    loadingQuote: !1,
    loadingApprovalTransaction: !1,
    loadingBuildTransaction: !1,
    loadingTransaction: !1,
    switchingTokens: !1,
    fetchError: !1,
    approvalTransaction: void 0,
    swapTransaction: void 0,
    transactionError: void 0,
    sourceToken: void 0,
    sourceTokenAmount: "",
    sourceTokenPriceInUSD: 0,
    toToken: void 0,
    toTokenAmount: "",
    toTokenPriceInUSD: 0,
    networkPrice: "0",
    networkBalanceInUSD: "0",
    networkTokenSymbol: "",
    inputError: void 0,
    slippage: rr.CONVERT_SLIPPAGE_TOLERANCE,
    tokens: void 0,
    popularTokens: void 0,
    suggestedTokens: void 0,
    foundTokens: void 0,
    myTokensWithBalance: void 0,
    tokensPriceMap: {},
    gasFee: "0",
    gasPriceInUSD: 0,
    priceImpact: void 0,
    maxSlippage: void 0,
    providerFee: void 0,
  },
  E = rt(V({}, Xe)),
  Wo = {
    state: E,
    subscribe(t) {
      return Ct(E, () => t(E));
    },
    subscribeKey(t, e) {
      return nt(E, t, e);
    },
    getParams() {
      let t = Y.state.activeChain,
        e = Y.getAccountData(t)?.caipAddress ?? Y.state.activeCaipAddress,
        s = Ae.getPlainAddress(e),
        r = fn(),
        n = ss.getConnectorId(Y.state.activeChain);
      if (!s) throw new Error("No address found to swap the tokens from.");
      let i = !E.toToken?.address || !E.toToken?.decimals,
        o =
          !E.sourceToken?.address ||
          !E.sourceToken?.decimals ||
          !be.bigNumber(E.sourceTokenAmount).gt(0),
        a = !E.sourceTokenAmount;
      return {
        networkAddress: r,
        fromAddress: s,
        fromCaipAddress: e,
        sourceTokenAddress: E.sourceToken?.address,
        toTokenAddress: E.toToken?.address,
        toTokenAmount: E.toTokenAmount,
        toTokenDecimals: E.toToken?.decimals,
        sourceTokenAmount: E.sourceTokenAmount,
        sourceTokenDecimals: E.sourceToken?.decimals,
        invalidToToken: i,
        invalidSourceToken: o,
        invalidSourceTokenAmount: a,
        availableToSwap: e && !i && !o && !a,
        isAuthConnector: n === we.CONNECTOR_ID.AUTH,
      };
    },
    setSourceToken(t) {
      return f(this, null, function* () {
        if (!t) {
          (E.sourceToken = t),
            (E.sourceTokenAmount = ""),
            (E.sourceTokenPriceInUSD = 0);
          return;
        }
        (E.sourceToken = t), yield X.setTokenPrice(t.address, "sourceToken");
      });
    },
    setSourceTokenAmount(t) {
      E.sourceTokenAmount = t;
    },
    setToToken(t) {
      return f(this, null, function* () {
        if (!t) {
          (E.toToken = t), (E.toTokenAmount = ""), (E.toTokenPriceInUSD = 0);
          return;
        }
        (E.toToken = t), yield X.setTokenPrice(t.address, "toToken");
      });
    },
    setToTokenAmount(t) {
      E.toTokenAmount = t ? be.toFixed(t, A2) : "";
    },
    setTokenPrice(t, e) {
      return f(this, null, function* () {
        let s = E.tokensPriceMap[t] || 0;
        s || ((E.loadingPrices = !0), (s = yield X.getAddressPrice(t))),
          e === "sourceToken"
            ? (E.sourceTokenPriceInUSD = s)
            : e === "toToken" && (E.toTokenPriceInUSD = s),
          E.loadingPrices && (E.loadingPrices = !1),
          X.getParams().availableToSwap && !E.switchingTokens && X.swapTokens();
      });
    },
    switchTokens() {
      return f(this, null, function* () {
        if (!(E.initializing || !E.initialized || E.switchingTokens)) {
          E.switchingTokens = !0;
          try {
            let t = E.toToken ? V({}, E.toToken) : void 0,
              e = E.sourceToken ? V({}, E.sourceToken) : void 0,
              s = t && E.toTokenAmount === "" ? "1" : E.toTokenAmount;
            X.setSourceTokenAmount(s),
              X.setToTokenAmount(""),
              yield X.setSourceToken(t),
              yield X.setToToken(e),
              (E.switchingTokens = !1),
              X.swapTokens();
          } catch (t) {
            throw ((E.switchingTokens = !1), t);
          }
        }
      });
    },
    resetState() {
      (E.myTokensWithBalance = Xe.myTokensWithBalance),
        (E.tokensPriceMap = Xe.tokensPriceMap),
        (E.initialized = Xe.initialized),
        (E.initializing = Xe.initializing),
        (E.switchingTokens = Xe.switchingTokens),
        (E.sourceToken = Xe.sourceToken),
        (E.sourceTokenAmount = Xe.sourceTokenAmount),
        (E.sourceTokenPriceInUSD = Xe.sourceTokenPriceInUSD),
        (E.toToken = Xe.toToken),
        (E.toTokenAmount = Xe.toTokenAmount),
        (E.toTokenPriceInUSD = Xe.toTokenPriceInUSD),
        (E.networkPrice = Xe.networkPrice),
        (E.networkTokenSymbol = Xe.networkTokenSymbol),
        (E.networkBalanceInUSD = Xe.networkBalanceInUSD),
        (E.inputError = Xe.inputError);
    },
    resetValues() {
      let { networkAddress: t } = X.getParams(),
        e = E.tokens?.find((s) => s.address === t);
      X.setSourceToken(e), X.setToToken(void 0);
    },
    getApprovalLoadingState() {
      return E.loadingApprovalTransaction;
    },
    clearError() {
      E.transactionError = void 0;
    },
    initializeState() {
      return f(this, null, function* () {
        if (!E.initializing) {
          if (((E.initializing = !0), !E.initialized))
            try {
              yield X.fetchTokens(), (E.initialized = !0);
            } catch {
              (E.initialized = !1),
                Ee.showError("Failed to initialize swap"),
                de.goBack();
            }
          E.initializing = !1;
        }
      });
    },
    fetchTokens() {
      return f(this, null, function* () {
        let { networkAddress: t } = X.getParams();
        yield X.getNetworkTokenPrice(), yield X.getMyTokensWithBalance();
        let e = E.myTokensWithBalance?.find((s) => s.address === t);
        e &&
          ((E.networkTokenSymbol = e.symbol),
          X.setSourceToken(e),
          X.setSourceTokenAmount("0"));
      });
    },
    getTokenList() {
      return f(this, null, function* () {
        let t = Y.state.activeCaipNetwork?.caipNetworkId;
        if (!(E.caipNetworkId === t && E.tokens))
          try {
            E.tokensLoading = !0;
            let e = yield Rr.getTokenList(t);
            (E.tokens = e),
              (E.caipNetworkId = t),
              (E.popularTokens = e.sort((o, a) =>
                o.symbol < a.symbol ? -1 : o.symbol > a.symbol ? 1 : 0
              ));
            let r = ((t && rr.SUGGESTED_TOKENS_BY_CHAIN?.[t]) || [])
                .map((o) => e.find((a) => a.symbol === o))
                .filter((o) => !!o),
              i = (rr.SWAP_SUGGESTED_TOKENS || [])
                .map((o) => e.find((a) => a.symbol === o))
                .filter((o) => !!o)
                .filter((o) => !r.some((a) => a.address === o.address));
            E.suggestedTokens = [...r, ...i];
          } catch {
            (E.tokens = []), (E.popularTokens = []), (E.suggestedTokens = []);
          } finally {
            E.tokensLoading = !1;
          }
      });
    },
    getAddressPrice(t) {
      return f(this, null, function* () {
        let e = E.tokensPriceMap[t];
        if (e) return e;
        let r = (yield Pe.fetchTokenPrice({ addresses: [t] }))?.fungibles || [],
          i = [...(E.tokens || []), ...(E.myTokensWithBalance || [])]?.find(
            (c) => c.address === t
          )?.symbol,
          o =
            r.find((c) => c.symbol.toLowerCase() === i?.toLowerCase())?.price ||
            0,
          a = parseFloat(o.toString());
        return (E.tokensPriceMap[t] = a), a;
      });
    },
    getNetworkTokenPrice() {
      return f(this, null, function* () {
        let { networkAddress: t } = X.getParams(),
          s = (yield Pe.fetchTokenPrice({ addresses: [t] }).catch(
            () => (
              Ee.showError("Failed to fetch network token price"),
              { fungibles: [] }
            )
          )).fungibles?.[0],
          r = s?.price.toString() || "0";
        (E.tokensPriceMap[t] = parseFloat(r)),
          (E.networkTokenSymbol = s?.symbol || ""),
          (E.networkPrice = r);
      });
    },
    getMyTokensWithBalance(t) {
      return f(this, null, function* () {
        let e = yield Ju.getMyTokensWithBalance(t),
          s = Rr.mapBalancesToSwapTokens(e);
        s && (yield X.getInitialGasPrice(), X.setBalances(s));
      });
    },
    setBalances(t) {
      let { networkAddress: e } = X.getParams(),
        s = Y.state.activeCaipNetwork;
      if (!s) return;
      let r = t.find((n) => n.address === e);
      t.forEach((n) => {
        E.tokensPriceMap[n.address] = n.price || 0;
      }),
        (E.myTokensWithBalance = t.filter((n) =>
          n.address.startsWith(s.caipNetworkId)
        )),
        (E.networkBalanceInUSD = r
          ? be.multiply(r.quantity.numeric, r.price).toString()
          : "0");
    },
    getInitialGasPrice() {
      return f(this, null, function* () {
        let t = yield Rr.fetchGasPrice();
        if (!t) return { gasPrice: null, gasPriceInUSD: null };
        switch (Y.state?.activeCaipNetwork?.chainNamespace) {
          case we.CHAIN.SOLANA:
            return (
              (E.gasFee = t.standard ?? "0"),
              (E.gasPriceInUSD = be
                .multiply(t.standard, E.networkPrice)
                .div(1e9)
                .toNumber()),
              {
                gasPrice: BigInt(E.gasFee),
                gasPriceInUSD: Number(E.gasPriceInUSD),
              }
            );
          case we.CHAIN.EVM:
          default:
            let e = t.standard ?? "0",
              s = BigInt(e),
              r = BigInt(Cm),
              n = Ps.getGasPriceInUSD(E.networkPrice, r, s);
            return (
              (E.gasFee = e),
              (E.gasPriceInUSD = n),
              { gasPrice: s, gasPriceInUSD: n }
            );
        }
      });
    },
    swapTokens() {
      return f(this, null, function* () {
        let t = Y.getAccountData()?.address,
          e = E.sourceToken,
          s = E.toToken,
          r = be.bigNumber(E.sourceTokenAmount).gt(0);
        if (
          (r || X.setToTokenAmount(""), !s || !e || E.loadingPrices || !r || !t)
        )
          return;
        E.loadingQuote = !0;
        let n = be
          .bigNumber(E.sourceTokenAmount)
          .times(10 ** e.decimals)
          .round(0);
        try {
          let i = yield Pe.fetchSwapQuote({
            userAddress: t,
            from: e.address,
            to: s.address,
            gasPrice: E.gasFee,
            amount: n.toString(),
          });
          E.loadingQuote = !1;
          let o = i?.quotes?.[0]?.toAmount;
          if (!o) {
            ku.open(
              {
                displayMessage: "Incorrect amount",
                debugMessage: "Please enter a valid amount",
              },
              "error"
            );
            return;
          }
          let a = be
            .bigNumber(o)
            .div(10 ** s.decimals)
            .toString();
          X.setToTokenAmount(a),
            X.hasInsufficientToken(E.sourceTokenAmount, e.address)
              ? (E.inputError = "Insufficient balance")
              : ((E.inputError = void 0), X.setTransactionDetails());
        } catch (i) {
          let o = yield Rr.handleSwapError(i);
          (E.loadingQuote = !1), (E.inputError = o || "Insufficient balance");
        }
      });
    },
    getTransaction() {
      return f(this, null, function* () {
        let { fromCaipAddress: t, availableToSwap: e } = X.getParams(),
          s = E.sourceToken,
          r = E.toToken;
        if (!(!t || !e || !s || !r || E.loadingQuote))
          try {
            E.loadingBuildTransaction = !0;
            let n = yield Rr.fetchSwapAllowance({
                userAddress: t,
                tokenAddress: s.address,
                sourceTokenAmount: E.sourceTokenAmount,
                sourceTokenDecimals: s.decimals,
              }),
              i;
            return (
              n
                ? (i = yield X.createSwapTransaction())
                : (i = yield X.createAllowanceTransaction()),
              (E.loadingBuildTransaction = !1),
              (E.fetchError = !1),
              i
            );
          } catch {
            de.goBack(),
              Ee.showError("Failed to check allowance"),
              (E.loadingBuildTransaction = !1),
              (E.approvalTransaction = void 0),
              (E.swapTransaction = void 0),
              (E.fetchError = !0);
            return;
          }
      });
    },
    createAllowanceTransaction() {
      return f(this, null, function* () {
        let {
          fromCaipAddress: t,
          sourceTokenAddress: e,
          toTokenAddress: s,
        } = X.getParams();
        if (!(!t || !s)) {
          if (!e)
            throw new Error(
              "createAllowanceTransaction - No source token address found."
            );
          try {
            let r = yield Pe.generateApproveCalldata({
                from: e,
                to: s,
                userAddress: t,
              }),
              n = Ae.getPlainAddress(r.tx.from);
            if (!n)
              throw new Error(
                "SwapController:createAllowanceTransaction - address is required"
              );
            let i = {
              data: r.tx.data,
              to: n,
              gasPrice: BigInt(r.tx.eip155.gasPrice),
              value: BigInt(r.tx.value),
              toAmount: E.toTokenAmount,
            };
            return (
              (E.swapTransaction = void 0),
              (E.approvalTransaction = {
                data: i.data,
                to: i.to,
                gasPrice: i.gasPrice,
                value: i.value,
                toAmount: i.toAmount,
              }),
              {
                data: i.data,
                to: i.to,
                gasPrice: i.gasPrice,
                value: i.value,
                toAmount: i.toAmount,
              }
            );
          } catch {
            de.goBack(),
              Ee.showError("Failed to create approval transaction"),
              (E.approvalTransaction = void 0),
              (E.swapTransaction = void 0),
              (E.fetchError = !0);
            return;
          }
        }
      });
    },
    createSwapTransaction() {
      return f(this, null, function* () {
        let {
            networkAddress: t,
            fromCaipAddress: e,
            sourceTokenAmount: s,
          } = X.getParams(),
          r = E.sourceToken,
          n = E.toToken;
        if (!e || !s || !r || !n) return;
        let i = it.parseUnits(s, r.decimals)?.toString();
        try {
          let o = yield Pe.generateSwapCalldata({
              userAddress: e,
              from: r.address,
              to: n.address,
              amount: i,
              disableEstimate: !0,
            }),
            a = r.address === t,
            c = BigInt(o.tx.eip155.gas),
            l = BigInt(o.tx.eip155.gasPrice),
            u = Ae.getPlainAddress(o.tx.to);
          if (!u)
            throw new Error(
              "SwapController:createSwapTransaction - address is required"
            );
          let h = {
            data: o.tx.data,
            to: u,
            gas: c,
            gasPrice: l,
            value: BigInt(a ? i ?? "0" : "0"),
            toAmount: E.toTokenAmount,
          };
          return (
            (E.gasPriceInUSD = Ps.getGasPriceInUSD(E.networkPrice, c, l)),
            (E.approvalTransaction = void 0),
            (E.swapTransaction = h),
            h
          );
        } catch {
          de.goBack(),
            Ee.showError("Failed to create transaction"),
            (E.approvalTransaction = void 0),
            (E.swapTransaction = void 0),
            (E.fetchError = !0);
          return;
        }
      });
    },
    onEmbeddedWalletApprovalSuccess() {
      Ee.showLoading("Approve limit increase in your wallet"),
        de.replace("SwapPreview");
    },
    sendTransactionForApproval(t) {
      return f(this, null, function* () {
        let { fromAddress: e, isAuthConnector: s } = X.getParams();
        (E.loadingApprovalTransaction = !0),
          s
            ? de.pushTransactionStack({
                onSuccess: X.onEmbeddedWalletApprovalSuccess,
              })
            : Ee.showLoading("Approve limit increase in your wallet");
        try {
          yield it.sendTransaction({
            address: e,
            to: t.to,
            data: t.data,
            value: t.value,
            chainNamespace: we.CHAIN.EVM,
          }),
            yield X.swapTokens(),
            yield X.getTransaction(),
            (E.approvalTransaction = void 0),
            (E.loadingApprovalTransaction = !1);
        } catch (n) {
          let i = n;
          (E.transactionError = i?.displayMessage),
            (E.loadingApprovalTransaction = !1),
            Ee.showError(i?.displayMessage || "Transaction error"),
            Qe.sendEvent({
              type: "track",
              event: "SWAP_APPROVAL_ERROR",
              properties: {
                message: i?.displayMessage || i?.message || "Unknown",
                network: Y.state.activeCaipNetwork?.caipNetworkId || "",
                swapFromToken: X.state.sourceToken?.symbol || "",
                swapToToken: X.state.toToken?.symbol || "",
                swapFromAmount: X.state.sourceTokenAmount || "",
                swapToAmount: X.state.toTokenAmount || "",
                isSmartAccount:
                  Ns(we.CHAIN.EVM) === Nr.ACCOUNT_TYPES.SMART_ACCOUNT,
              },
            });
        }
      });
    },
    sendTransactionForSwap(t) {
      return f(this, null, function* () {
        if (!t) return;
        let {
          fromAddress: e,
          toTokenAmount: s,
          isAuthConnector: r,
        } = X.getParams();
        E.loadingTransaction = !0;
        let n = `Swapping ${
            E.sourceToken?.symbol
          } to ${be.formatNumberToLocalString(s, 3)} ${E.toToken?.symbol}`,
          i = `Swapped ${
            E.sourceToken?.symbol
          } to ${be.formatNumberToLocalString(s, 3)} ${E.toToken?.symbol}`;
        r
          ? de.pushTransactionStack({
              onSuccess() {
                de.replace("Account"), Ee.showLoading(n), Wo.resetState();
              },
            })
          : Ee.showLoading("Confirm transaction in your wallet");
        try {
          let o = [E.sourceToken?.address, E.toToken?.address].join(","),
            a = yield it.sendTransaction({
              address: e,
              to: t.to,
              data: t.data,
              value: t.value,
              chainNamespace: we.CHAIN.EVM,
            });
          return (
            (E.loadingTransaction = !1),
            Ee.showSuccess(i),
            Qe.sendEvent({
              type: "track",
              event: "SWAP_SUCCESS",
              properties: {
                network: Y.state.activeCaipNetwork?.caipNetworkId || "",
                swapFromToken: X.state.sourceToken?.symbol || "",
                swapToToken: X.state.toToken?.symbol || "",
                swapFromAmount: X.state.sourceTokenAmount || "",
                swapToAmount: X.state.toTokenAmount || "",
                isSmartAccount:
                  Ns(we.CHAIN.EVM) === Nr.ACCOUNT_TYPES.SMART_ACCOUNT,
              },
            }),
            Wo.resetState(),
            r || de.replace("Account"),
            Wo.getMyTokensWithBalance(o),
            a
          );
        } catch (o) {
          let a = o;
          (E.transactionError = a?.displayMessage),
            (E.loadingTransaction = !1),
            Ee.showError(a?.displayMessage || "Transaction error"),
            Qe.sendEvent({
              type: "track",
              event: "SWAP_ERROR",
              properties: {
                message: a?.displayMessage || a?.message || "Unknown",
                network: Y.state.activeCaipNetwork?.caipNetworkId || "",
                swapFromToken: X.state.sourceToken?.symbol || "",
                swapToToken: X.state.toToken?.symbol || "",
                swapFromAmount: X.state.sourceTokenAmount || "",
                swapToAmount: X.state.toTokenAmount || "",
                isSmartAccount:
                  Ns(we.CHAIN.EVM) === Nr.ACCOUNT_TYPES.SMART_ACCOUNT,
              },
            });
          return;
        }
      });
    },
    hasInsufficientToken(t, e) {
      return Ps.isInsufficientSourceTokenForSwap(t, e, E.myTokensWithBalance);
    },
    setTransactionDetails() {
      let { toTokenAddress: t, toTokenDecimals: e } = X.getParams();
      !t ||
        !e ||
        ((E.gasPriceInUSD = Ps.getGasPriceInUSD(
          E.networkPrice,
          BigInt(E.gasFee),
          BigInt(Cm)
        )),
        (E.priceImpact = Ps.getPriceImpact({
          sourceTokenAmount: E.sourceTokenAmount,
          sourceTokenPriceInUSD: E.sourceTokenPriceInUSD,
          toTokenPriceInUSD: E.toTokenPriceInUSD,
          toTokenAmount: E.toTokenAmount,
        })),
        (E.maxSlippage = Ps.getMaxSlippage(E.slippage, E.toTokenAmount)),
        (E.providerFee = Ps.getProviderFee(E.sourceTokenAmount)));
    },
  },
  X = jt(Wo);
var ts = rt({
    message: "",
    open: !1,
    triggerRect: { width: 0, height: 0, top: 0, left: 0 },
    variant: "shade",
  }),
  C2 = {
    state: ts,
    subscribe(t) {
      return Ct(ts, () => t(ts));
    },
    subscribeKey(t, e) {
      return nt(ts, t, e);
    },
    showTooltip({ message: t, triggerRect: e, variant: s }) {
      (ts.open = !0), (ts.message = t), (ts.triggerRect = e), (ts.variant = s);
    },
    hide() {
      (ts.open = !1),
        (ts.message = ""),
        (ts.triggerRect = { width: 0, height: 0, top: 0, left: 0 });
    },
  },
  P2 = jt(C2);
var ai = rt({ isLegalCheckboxChecked: !1 }),
  O2 = {
    state: ai,
    subscribe(t) {
      return Ct(ai, () => t(ai));
    },
    subscribeKey(t, e) {
      return nt(ai, t, e);
    },
    setIsLegalCheckboxChecked(t) {
      ai.isLegalCheckboxChecked = t;
    },
  };
var N2 = {
    eip155: {
      native: { assetNamespace: "slip44", assetReference: "60" },
      defaultTokenNamespace: "erc20",
    },
    solana: {
      native: { assetNamespace: "slip44", assetReference: "501" },
      defaultTokenNamespace: "token",
    },
  },
  Bu = class extends Error {};
function R2() {
  let { sdkType: t, sdkVersion: e, projectId: s } = _e.getSnapshot(),
    r = new URL("https://rpc.walletconnect.org/v1/json-rpc");
  return (
    r.searchParams.set("projectId", s),
    r.searchParams.set("st", t),
    r.searchParams.set("sv", e),
    r.searchParams.set("source", "fund-wallet"),
    r.toString()
  );
}
function Uu(t, e) {
  return f(this, null, function* () {
    let s = R2(),
      { projectId: r } = _e.getSnapshot(),
      n = {
        jsonrpc: "2.0",
        id: 1,
        method: t,
        params: ye(V({}, e || {}), { projectId: r }),
      },
      o = yield (yield fetch(s, {
        method: "POST",
        body: JSON.stringify(n),
        headers: { "Content-Type": "application/json" },
      })).json();
    if (o.error) throw new Bu(o.error.message);
    return o;
  });
}
function Lu(t) {
  return f(this, null, function* () {
    return (yield Uu("reown_getExchanges", t)).result;
  });
}
function Du(t) {
  return f(this, null, function* () {
    return (yield Uu("reown_getExchangePayUrl", t)).result;
  });
}
function Pm(t) {
  return f(this, null, function* () {
    return (yield Uu("reown_getExchangeBuyStatus", t)).result;
  });
}
function Yo(t, e) {
  let { chainNamespace: s, chainId: r } = sr.parseCaipNetworkId(t),
    n = N2[s];
  if (!n)
    throw new Error(`Unsupported chain namespace for CAIP-19 formatting: ${s}`);
  let i = n.native.assetNamespace,
    o = n.native.assetReference;
  return (
    e !== "native" && ((i = n.defaultTokenNamespace), (o = e)),
    `${`${s}:${r}`}/${i}:${o}`
  );
}
var k2 = {
    network: "eip155:1",
    asset: "native",
    metadata: { name: "Ethereum", symbol: "ETH", decimals: 18 },
  },
  B2 = {
    network: "eip155:8453",
    asset: "native",
    metadata: { name: "Ethereum", symbol: "ETH", decimals: 18 },
  },
  Om = {
    network: "eip155:8453",
    asset: "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",
    metadata: { name: "USD Coin", symbol: "USDC", decimals: 6 },
  },
  U2 = {
    network: "eip155:84532",
    asset: "0x036CbD53842c5426634e7929541eC2318f3dCF7e",
    metadata: { name: "USD Coin", symbol: "USDC", decimals: 6 },
  },
  L2 = {
    network: "eip155:84532",
    asset: "native",
    metadata: { name: "Ethereum", symbol: "ETH", decimals: 18 },
  },
  D2 = {
    network: "eip155:1",
    asset: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    metadata: { name: "USD Coin", symbol: "USDC", decimals: 6 },
  },
  q2 = {
    network: "eip155:42161",
    asset: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
    metadata: { name: "USD Coin", symbol: "USDC", decimals: 6 },
  },
  j2 = {
    network: "eip155:137",
    asset: "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
    metadata: { name: "USD Coin", symbol: "USDC", decimals: 6 },
  },
  M2 = {
    network: "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",
    asset: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
    metadata: { name: "USD Coin", symbol: "USDC", decimals: 6 },
  },
  F2 = {
    network: "eip155:1",
    asset: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
    metadata: { name: "Tether USD", symbol: "USDT", decimals: 6 },
  },
  $2 = {
    network: "eip155:10",
    asset: "0x94b008aA00579c1307B0EF2c499aD98a8ce58e58",
    metadata: { name: "Tether USD", symbol: "USDT", decimals: 6 },
  },
  z2 = {
    network: "eip155:42161",
    asset: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
    metadata: { name: "Tether USD", symbol: "USDT", decimals: 6 },
  },
  V2 = {
    network: "eip155:137",
    asset: "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
    metadata: { name: "Tether USD", symbol: "USDT", decimals: 6 },
  },
  H2 = {
    network: "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",
    asset: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
    metadata: { name: "Tether USD", symbol: "USDT", decimals: 6 },
  },
  K2 = {
    network: "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",
    asset: "native",
    metadata: { name: "Solana", symbol: "SOL", decimals: 9 },
  },
  G2 = {
    ethereumETH: k2,
    baseETH: B2,
    baseUSDC: Om,
    baseSepoliaETH: L2,
    ethereumUSDC: D2,
    arbitrumUSDC: q2,
    polygonUSDC: j2,
    solanaUSDC: M2,
    ethereumUSDT: F2,
    optimismUSDT: $2,
    arbitrumUSDT: z2,
    polygonUSDT: V2,
    solanaUSDT: H2,
    solanaSOL: K2,
  };
function qu(t) {
  return Object.values(G2).filter((e) => e.network === t);
}
var W2 = 0,
  Nm = {
    paymentAsset: null,
    amount: null,
    tokenAmount: 0,
    priceLoading: !1,
    error: null,
    exchanges: [],
    isLoading: !1,
    currentPayment: void 0,
    isPaymentInProgress: !1,
    paymentId: "",
    assets: [],
  },
  W = rt(Nm),
  tr = {
    state: W,
    subscribe(t) {
      return Ct(W, () => t(W));
    },
    subscribeKey(t, e) {
      return nt(W, t, e);
    },
    resetState() {
      Object.assign(W, V({}, Nm));
    },
    getAssetsForNetwork(t) {
      return f(this, null, function* () {
        let e = qu(t),
          s = yield tr.getAssetsImageAndPrice(e),
          r = e.map((n) => {
            let i = n.asset === "native" ? fn() : `${n.network}:${n.asset}`,
              o = s.find(
                (a) =>
                  a.fungibles?.[0]?.address?.toLowerCase() === i.toLowerCase()
              );
            return ye(V({}, n), {
              price: o?.fungibles?.[0]?.price || 1,
              metadata: ye(V({}, n.metadata), {
                iconUrl: o?.fungibles?.[0]?.iconUrl,
              }),
            });
          });
        return (W.assets = r), r;
      });
    },
    getAssetsImageAndPrice(t) {
      return f(this, null, function* () {
        let e = t.map((r) =>
          r.asset === "native" ? fn() : `${r.network}:${r.asset}`
        );
        return yield Promise.all(
          e.map((r) => Pe.fetchTokenPrice({ addresses: [r] }))
        );
      });
    },
    getTokenAmount() {
      if (!W?.paymentAsset?.price) throw new Error("Cannot get token price");
      let t = be.bigNumber(W.amount ?? 0).round(8),
        e = be.bigNumber(W.paymentAsset.price).round(8);
      return t.div(e).round(8).toNumber();
    },
    setAmount(t) {
      (W.amount = t),
        W.paymentAsset?.price && (W.tokenAmount = tr.getTokenAmount());
    },
    setPaymentAsset(t) {
      W.paymentAsset = t;
    },
    isPayWithExchangeEnabled() {
      return _e.state.remoteFeatures?.payWithExchange;
    },
    isPayWithExchangeSupported() {
      return (
        tr.isPayWithExchangeEnabled() &&
        Y.state.activeCaipNetwork &&
        rr.PAY_WITH_EXCHANGE_SUPPORTED_CHAIN_NAMESPACES.includes(
          Y.state.activeCaipNetwork.chainNamespace
        )
      );
    },
    fetchExchanges() {
      return f(this, null, function* () {
        try {
          let t = tr.isPayWithExchangeSupported();
          if (!W.paymentAsset || !t) {
            (W.exchanges = []), (W.isLoading = !1);
            return;
          }
          W.isLoading = !0;
          let e = yield Lu({
            page: W2,
            asset: Yo(W.paymentAsset.network, W.paymentAsset.asset),
            amount: W.amount?.toString() ?? "0",
          });
          W.exchanges = e.exchanges.slice(0, 2);
        } catch {
          throw (
            (Ee.showError("Unable to get exchanges"),
            new Error("Unable to get exchanges"))
          );
        } finally {
          W.isLoading = !1;
        }
      });
    },
    getPayUrl(t, e) {
      return f(this, null, function* () {
        try {
          let s = Number(e.amount),
            r = yield Du({
              exchangeId: t,
              asset: Yo(e.network, e.asset),
              amount: s.toString(),
              recipient: `${e.network}:${e.recipient}`,
            });
          return (
            Qe.sendEvent({
              type: "track",
              event: "PAY_EXCHANGE_SELECTED",
              properties: {
                exchange: { id: t },
                configuration: {
                  network: e.network,
                  asset: e.asset,
                  recipient: e.recipient,
                  amount: s,
                },
                currentPayment: { type: "exchange", exchangeId: t },
                source: "fund-from-exchange",
                headless: !1,
              },
            }),
            r
          );
        } catch (s) {
          throw s instanceof Error && s.message.includes("is not supported")
            ? new Error("Asset not supported")
            : new Error(s.message);
        }
      });
    },
    handlePayWithExchange(t) {
      return f(this, null, function* () {
        try {
          let e = Y.getAccountData()?.address;
          if (!e) throw new Error("No account connected");
          if (!W.paymentAsset) throw new Error("No payment asset selected");
          let s = Ae.returnOpenHref(
            "",
            "popupWindow",
            "scrollbar=yes,width=480,height=720"
          );
          if (!s) throw new Error("Could not create popup window");
          (W.isPaymentInProgress = !0),
            (W.paymentId = crypto.randomUUID()),
            (W.currentPayment = { type: "exchange", exchangeId: t });
          let { network: r, asset: n } = W.paymentAsset,
            i = { network: r, asset: n, amount: W.tokenAmount, recipient: e },
            o = yield tr.getPayUrl(t, i);
          if (!o) {
            try {
              s.close();
            } catch (a) {
              console.error("Unable to close popup window", a);
            }
            throw new Error("Unable to initiate payment");
          }
          (W.currentPayment.sessionId = o.sessionId),
            (W.currentPayment.status = "IN_PROGRESS"),
            (W.currentPayment.exchangeId = t),
            (s.location.href = o.url);
        } catch {
          (W.error = "Unable to initiate payment"), Ee.showError(W.error);
        }
      });
    },
    waitUntilComplete(n) {
      return f(
        this,
        arguments,
        function* ({
          exchangeId: t,
          sessionId: e,
          paymentId: s,
          retries: r = 20,
        }) {
          let i = yield tr.getBuyStatus(t, e, s);
          if (i.status === "SUCCESS" || i.status === "FAILED") return i;
          if (r === 0) throw new Error("Unable to get deposit status");
          return (
            yield new Promise((o) => {
              setTimeout(o, 5e3);
            }),
            tr.waitUntilComplete({
              exchangeId: t,
              sessionId: e,
              paymentId: s,
              retries: r - 1,
            })
          );
        }
      );
    },
    getBuyStatus(t, e, s) {
      return f(this, null, function* () {
        try {
          if (!W.currentPayment) throw new Error("No current payment");
          let r = yield Pm({ sessionId: e, exchangeId: t });
          if (
            ((W.currentPayment.status = r.status),
            r.status === "SUCCESS" || r.status === "FAILED")
          ) {
            let n = Y.getAccountData()?.address;
            (W.currentPayment.result = r.txHash),
              (W.isPaymentInProgress = !1),
              Qe.sendEvent({
                type: "track",
                event: r.status === "SUCCESS" ? "PAY_SUCCESS" : "PAY_ERROR",
                properties: {
                  message:
                    r.status === "FAILED" ? Ae.parseError(W.error) : void 0,
                  source: "fund-from-exchange",
                  paymentId: s,
                  configuration: {
                    network: W.paymentAsset?.network || "",
                    asset: W.paymentAsset?.asset || "",
                    recipient: n || "",
                    amount: W.amount ?? 0,
                  },
                  currentPayment: {
                    type: "exchange",
                    exchangeId: W.currentPayment?.exchangeId,
                    sessionId: W.currentPayment?.sessionId,
                    result: r.txHash,
                  },
                },
              });
          }
          return r;
        } catch {
          return { status: "UNKNOWN", txHash: "" };
        }
      });
    },
    reset() {
      (W.currentPayment = void 0),
        (W.isPaymentInProgress = !1),
        (W.paymentId = ""),
        (W.paymentAsset = null),
        (W.amount = 0),
        (W.tokenAmount = 0),
        (W.priceLoading = !1),
        (W.error = null),
        (W.exchanges = []),
        (W.isLoading = !1);
    },
  };
var Y2 = {
  isUnsupportedChainView() {
    return (
      de.state.view === "UnsupportedChain" ||
      (de.state.view === "SwitchNetwork" &&
        de.state.history.includes("UnsupportedChain"))
    );
  },
  safeClose() {
    return f(this, null, function* () {
      if (this.isUnsupportedChainView()) {
        mt.shake();
        return;
      }
      if (yield qt.isSIWXCloseDisabled()) {
        mt.shake();
        return;
      }
      (de.state.view === "DataCapture" ||
        de.state.view === "DataCaptureOtpConfirm") &&
        it.disconnect(),
        mt.close();
    });
  },
};
export {
  oa as a,
  fm as b,
  hn as c,
  Pr as d,
  Nu as e,
  qt as f,
  Ru as g,
  ku as h,
  X as i,
  P2 as j,
  O2 as k,
  Om as l,
  U2 as m,
  tr as n,
  Y2 as o,
};
