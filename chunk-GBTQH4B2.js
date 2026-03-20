var b = { exports: {} };
function te(e) {
  try {
    return JSON.stringify(e);
  } catch {
    return '"[Circular]"';
  }
}
var re = se;
function se(e, t, r) {
  var n = (r && r.stringify) || te,
    i = 1;
  if (typeof e == "object" && e !== null) {
    var g = t.length + i;
    if (g === 1) return e;
    var h = new Array(g);
    h[0] = n(e);
    for (var c = 1; c < g; c++) h[c] = n(t[c]);
    return h.join(" ");
  }
  if (typeof e != "string") return e;
  var u = t.length;
  if (u === 0) return e;
  for (
    var s = "", o = 1 - i, l = -1, p = (e && e.length) || 0, a = 0;
    a < p;

  ) {
    if (e.charCodeAt(a) === 37 && a + 1 < p) {
      switch (((l = l > -1 ? l : 0), e.charCodeAt(a + 1))) {
        case 100:
        case 102:
          if (o >= u || t[o] == null) break;
          l < a && (s += e.slice(l, a)), (s += Number(t[o])), (l = a + 2), a++;
          break;
        case 105:
          if (o >= u || t[o] == null) break;
          l < a && (s += e.slice(l, a)),
            (s += Math.floor(Number(t[o]))),
            (l = a + 2),
            a++;
          break;
        case 79:
        case 111:
        case 106:
          if (o >= u || t[o] === void 0) break;
          l < a && (s += e.slice(l, a));
          var _ = typeof t[o];
          if (_ === "string") {
            (s += "'" + t[o] + "'"), (l = a + 2), a++;
            break;
          }
          if (_ === "function") {
            (s += t[o].name || "<anonymous>"), (l = a + 2), a++;
            break;
          }
          (s += n(t[o])), (l = a + 2), a++;
          break;
        case 115:
          if (o >= u) break;
          l < a && (s += e.slice(l, a)), (s += String(t[o])), (l = a + 2), a++;
          break;
        case 37:
          l < a && (s += e.slice(l, a)), (s += "%"), (l = a + 2), a++, o--;
          break;
      }
      ++o;
    }
    ++a;
  }
  return l === -1 ? e : (l < p && (s += e.slice(l)), s);
}
var Z = re;
b.exports = d;
var j = ye().console || {},
  ne = {
    mapHttpRequest: I,
    mapHttpResponse: I,
    wrapRequestSerializer: N,
    wrapResponseSerializer: N,
    wrapErrorSerializer: N,
    req: I,
    res: I,
    err: H,
    errWithCause: H,
  };
function m(e, t) {
  return e === "silent" ? 1 / 0 : t.levels.values[e];
}
var G = Symbol("pino.logFuncs"),
  P = Symbol("pino.hierarchy"),
  ie = {
    error: "log",
    fatal: "error",
    warn: "error",
    info: "log",
    debug: "log",
    trace: "log",
  };
function K(e, t) {
  let r = { logger: t, parent: e[P] };
  t[P] = r;
}
function oe(e, t, r) {
  let n = {};
  t.forEach((i) => {
    n[i] = r[i] ? r[i] : j[i] || j[ie[i] || "log"] || z;
  }),
    (e[G] = n);
}
function le(e, t) {
  return Array.isArray(e)
    ? e.filter(function (r) {
        return r !== "!stdSerializers.err";
      })
    : e === !0
    ? Object.keys(t)
    : !1;
}
function d(e) {
  (e = e || {}), (e.browser = e.browser || {});
  let t = e.browser.transmit;
  if (t && typeof t.send != "function")
    throw Error("pino: transmit option must have a send function");
  let r = e.browser.write || j;
  e.browser.write && (e.browser.asObject = !0);
  let n = e.serializers || {},
    i = le(e.browser.serialize, n),
    g = e.browser.serialize;
  Array.isArray(e.browser.serialize) &&
    e.browser.serialize.indexOf("!stdSerializers.err") > -1 &&
    (g = !1);
  let h = Object.keys(e.customLevels || {}),
    c = ["error", "fatal", "warn", "info", "debug", "trace"].concat(h);
  typeof r == "function" &&
    c.forEach(function (f) {
      r[f] = r;
    }),
    (e.enabled === !1 || e.browser.disabled) && (e.level = "silent");
  let u = e.level || "info",
    s = Object.create(r);
  s.log || (s.log = z),
    oe(s, c, r),
    K({}, s),
    Object.defineProperty(s, "levelVal", { get: l }),
    Object.defineProperty(s, "level", { get: p, set: a });
  let o = {
    transmit: t,
    serialize: i,
    asObject: e.browser.asObject,
    asObjectBindingsOnly: e.browser.asObjectBindingsOnly,
    formatters: e.browser.formatters,
    levels: c,
    timestamp: ve(e),
    messageKey: e.messageKey || "msg",
    onChild: e.onChild || z,
  };
  (s.levels = ae(e)),
    (s.level = u),
    (s.isLevelEnabled = function (f) {
      return this.levels.values[f]
        ? this.levels.values[f] >= this.levels.values[this.level]
        : !1;
    }),
    (s.setMaxListeners =
      s.getMaxListeners =
      s.emit =
      s.addListener =
      s.on =
      s.prependListener =
      s.once =
      s.prependOnceListener =
      s.removeListener =
      s.removeAllListeners =
      s.listeners =
      s.listenerCount =
      s.eventNames =
      s.write =
      s.flush =
        z),
    (s.serializers = n),
    (s._serialize = i),
    (s._stdErrSerialize = g),
    (s.child = function (...f) {
      return _.call(this, o, ...f);
    }),
    t && (s._logEvent = D());
  function l() {
    return m(this.level, this);
  }
  function p() {
    return this._level;
  }
  function a(f) {
    if (f !== "silent" && !this.levels.values[f])
      throw Error("unknown level " + f);
    (this._level = f),
      L(this, o, s, "error"),
      L(this, o, s, "fatal"),
      L(this, o, s, "warn"),
      L(this, o, s, "info"),
      L(this, o, s, "debug"),
      L(this, o, s, "trace"),
      h.forEach((v) => {
        L(this, o, s, v);
      });
  }
  function _(f, v, S) {
    if (!v) throw new Error("missing bindings for child Pino");
    (S = S || {}), i && v.serializers && (S.serializers = v.serializers);
    let Y = S.serializers;
    if (i && Y) {
      var k = Object.assign({}, n, Y),
        $ = e.browser.serialize === !0 ? Object.keys(k) : i;
      delete v.serializers, U([v], $, k, this._stdErrSerialize);
    }
    function F(x) {
      (this._childLevel = (x._childLevel | 0) + 1),
        (this.bindings = v),
        k && ((this.serializers = k), (this._serialize = $)),
        t && (this._logEvent = D([].concat(x._logEvent.bindings, v)));
    }
    F.prototype = this;
    let E = new F(this);
    return (
      K(this, E),
      (E.child = function (...x) {
        return _.call(this, f, ...x);
      }),
      (E.level = S.level || this.level),
      f.onChild(E),
      E
    );
  }
  return s;
}
function ae(e) {
  let t = e.customLevels || {},
    r = Object.assign({}, d.levels.values, t),
    n = Object.assign({}, d.levels.labels, ce(t));
  return { values: r, labels: n };
}
function ce(e) {
  let t = {};
  return (
    Object.keys(e).forEach(function (r) {
      t[e[r]] = r;
    }),
    t
  );
}
(d.levels = {
  values: { fatal: 60, error: 50, warn: 40, info: 30, debug: 20, trace: 10 },
  labels: {
    10: "trace",
    20: "debug",
    30: "info",
    40: "warn",
    50: "error",
    60: "fatal",
  },
}),
  (d.stdSerializers = ne),
  (d.stdTimeFunctions = Object.assign(
    {},
    { nullTime: Q, epochTime: ee, unixTime: de, isoTime: pe }
  ));
function ue(e) {
  let t = [];
  e.bindings && t.push(e.bindings);
  let r = e[P];
  for (; r.parent; )
    (r = r.parent), r.logger.bindings && t.push(r.logger.bindings);
  return t.reverse();
}
function L(e, t, r, n) {
  if (
    (Object.defineProperty(e, n, {
      value: m(e.level, r) > m(n, r) ? z : r[G][n],
      writable: !0,
      enumerable: !0,
      configurable: !0,
    }),
    e[n] === z)
  ) {
    if (!t.transmit) return;
    let g = t.transmit.level || e.level,
      h = m(g, r);
    if (m(n, r) < h) return;
  }
  e[n] = he(e, t, r, n);
  let i = ue(e);
  i.length !== 0 && (e[n] = ge(i, e[n]));
}
function ge(e, t) {
  return function () {
    return t.apply(this, [...e, ...arguments]);
  };
}
function he(e, t, r, n) {
  return (function (i) {
    return function () {
      let g = t.timestamp(),
        h = new Array(arguments.length),
        c =
          Object.getPrototypeOf && Object.getPrototypeOf(this) === j ? j : this;
      for (var u = 0; u < h.length; u++) h[u] = arguments[u];
      var s = !1;
      if (
        (t.serialize &&
          (U(h, this._serialize, this.serializers, this._stdErrSerialize),
          (s = !0)),
        t.asObject || t.formatters
          ? i.call(c, ...fe(this, n, h, g, t))
          : i.apply(c, h),
        t.transmit)
      ) {
        let o = t.transmit.level || e._level,
          l = m(o, r),
          p = m(n, r);
        if (p < l) return;
        be(
          this,
          {
            ts: g,
            methodLevel: n,
            methodValue: p,
            transmitLevel: o,
            transmitValue: r.levels.values[t.transmit.level || e._level],
            send: t.transmit.send,
            val: m(e._level, r),
          },
          h,
          s
        );
      }
    };
  })(e[G][n]);
}
function fe(e, t, r, n, i) {
  let { level: g, log: h = (l) => l } = i.formatters || {},
    c = r.slice(),
    u = c[0],
    s = {},
    o = (e._childLevel | 0) + 1;
  if ((o < 1 && (o = 1), n && (s.time = n), g)) {
    let l = g(t, e.levels.values[t]);
    Object.assign(s, l);
  } else s.level = e.levels.values[t];
  if (i.asObjectBindingsOnly) {
    if (u !== null && typeof u == "object")
      for (; o-- && typeof c[0] == "object"; ) Object.assign(s, c.shift());
    return [h(s), ...c];
  } else {
    if (u !== null && typeof u == "object") {
      for (; o-- && typeof c[0] == "object"; ) Object.assign(s, c.shift());
      u = c.length ? Z(c.shift(), c) : void 0;
    } else typeof u == "string" && (u = Z(c.shift(), c));
    return u !== void 0 && (s[i.messageKey] = u), [h(s)];
  }
}
function U(e, t, r, n) {
  for (let i in e)
    if (n && e[i] instanceof Error) e[i] = d.stdSerializers.err(e[i]);
    else if (typeof e[i] == "object" && !Array.isArray(e[i]) && t)
      for (let g in e[i])
        t.indexOf(g) > -1 && g in r && (e[i][g] = r[g](e[i][g]));
}
function be(e, t, r, n = !1) {
  let i = t.send,
    g = t.ts,
    h = t.methodLevel,
    c = t.methodValue,
    u = t.val,
    s = e._logEvent.bindings;
  n ||
    U(
      r,
      e._serialize || Object.keys(e.serializers),
      e.serializers,
      e._stdErrSerialize === void 0 ? !0 : e._stdErrSerialize
    ),
    (e._logEvent.ts = g),
    (e._logEvent.messages = r.filter(function (o) {
      return s.indexOf(o) === -1;
    })),
    (e._logEvent.level.label = h),
    (e._logEvent.level.value = c),
    i(h, e._logEvent, u),
    (e._logEvent = D(s));
}
function D(e) {
  return {
    ts: 0,
    messages: [],
    bindings: e || [],
    level: { label: "", value: 0 },
  };
}
function H(e) {
  let t = { type: e.constructor.name, msg: e.message, stack: e.stack };
  for (let r in e) t[r] === void 0 && (t[r] = e[r]);
  return t;
}
function ve(e) {
  return typeof e.timestamp == "function"
    ? e.timestamp
    : e.timestamp === !1
    ? Q
    : ee;
}
function I() {
  return {};
}
function N(e) {
  return e;
}
function z() {}
function Q() {
  return !1;
}
function ee() {
  return Date.now();
}
function de() {
  return Math.round(Date.now() / 1e3);
}
function pe() {
  return new Date(Date.now()).toISOString();
}
function ye() {
  function e(t) {
    return typeof t < "u" && t;
  }
  try {
    return (
      typeof globalThis < "u" ||
        Object.defineProperty(Object.prototype, "globalThis", {
          get: function () {
            return delete Object.prototype.globalThis, (this.globalThis = this);
          },
          configurable: !0,
        }),
      globalThis
    );
  } catch {
    return e(self) || e(window) || e(this) || {};
  }
}
b.exports.default = d;
var Ge = (b.exports.pino = d),
  me = { level: "info" },
  A = "custom_context",
  X = 1e3 * 1024,
  we = Object.defineProperty,
  Oe = (e, t, r) =>
    t in e
      ? we(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  y = (e, t, r) => Oe(e, typeof t != "symbol" ? t + "" : t, r),
  V = class {
    constructor(t) {
      y(this, "nodeValue"),
        y(this, "sizeInBytes"),
        y(this, "next"),
        (this.nodeValue = t),
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
  T = class {
    constructor(t) {
      y(this, "lengthInNodes"),
        y(this, "sizeInBytes"),
        y(this, "head"),
        y(this, "tail"),
        y(this, "maxSizeInBytes"),
        (this.head = null),
        (this.tail = null),
        (this.lengthInNodes = 0),
        (this.maxSizeInBytes = t),
        (this.sizeInBytes = 0);
    }
    append(t) {
      let r = new V(t);
      if (r.size > this.maxSizeInBytes)
        throw new Error(
          `[LinkedList] Value too big to insert into list: ${t} with size ${r.size}`
        );
      for (; this.size + r.size > this.maxSizeInBytes; ) this.shift();
      this.head
        ? (this.tail && (this.tail.next = r), (this.tail = r))
        : ((this.head = r), (this.tail = r)),
        this.lengthInNodes++,
        (this.sizeInBytes += r.size);
    }
    shift() {
      if (!this.head) return;
      let t = this.head;
      (this.head = this.head.next),
        this.head || (this.tail = null),
        this.lengthInNodes--,
        (this.sizeInBytes -= t.size);
    }
    toArray() {
      let t = [],
        r = this.head;
      for (; r !== null; ) t.push(r.value), (r = r.next);
      return t;
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
      let t = this.head;
      return {
        next: () => {
          if (!t) return { done: !0, value: null };
          let r = t.value;
          return (t = t.next), { done: !1, value: r };
        },
      };
    }
  },
  Le = (e) =>
    JSON.stringify(e, (t, r) =>
      typeof r == "bigint" ? r.toString() + "n" : r
    );
function q(e) {
  return typeof e == "string" ? e : Le(e) || "";
}
var ze = Object.defineProperty,
  _e = (e, t, r) =>
    t in e
      ? ze(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  C = (e, t, r) => _e(e, typeof t != "symbol" ? t + "" : t, r),
  B = class {
    constructor(t, r = X) {
      C(this, "logs"),
        C(this, "level"),
        C(this, "levelValue"),
        C(this, "MAX_LOG_SIZE_IN_BYTES"),
        (this.level = t ?? "error"),
        (this.levelValue = b.exports.levels.values[this.level]),
        (this.MAX_LOG_SIZE_IN_BYTES = r),
        (this.logs = new T(this.MAX_LOG_SIZE_IN_BYTES));
    }
    forwardToConsole(t, r) {
      r === b.exports.levels.values.error
        ? console.error(t)
        : r === b.exports.levels.values.warn
        ? console.warn(t)
        : r === b.exports.levels.values.debug
        ? console.debug(t)
        : r === b.exports.levels.values.trace
        ? console.trace(t)
        : console.log(t);
    }
    appendToLogs(t) {
      this.logs.append(q({ timestamp: new Date().toISOString(), log: t }));
      let r = typeof t == "string" ? JSON.parse(t).level : t.level;
      r >= this.levelValue && this.forwardToConsole(t, r);
    }
    getLogs() {
      return this.logs;
    }
    clearLogs() {
      this.logs = new T(this.MAX_LOG_SIZE_IN_BYTES);
    }
    getLogArray() {
      return Array.from(this.logs);
    }
    logsToBlob(t) {
      let r = this.getLogArray();
      return (
        r.push(q({ extraMetadata: t })),
        new Blob(r, { type: "application/json" })
      );
    }
  },
  Se = Object.defineProperty,
  Ee = (e, t, r) =>
    t in e
      ? Se(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  je = (e, t, r) => Ee(e, typeof t != "symbol" ? t + "" : t, r),
  M = class {
    constructor(t, r = X) {
      je(this, "baseChunkLogger"), (this.baseChunkLogger = new B(t, r));
    }
    write(t) {
      this.baseChunkLogger.appendToLogs(t);
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
    logsToBlob(t) {
      return this.baseChunkLogger.logsToBlob(t);
    }
    downloadLogsBlobInBrowser(t) {
      let r = URL.createObjectURL(this.logsToBlob(t)),
        n = document.createElement("a");
      (n.href = r),
        (n.download = `walletconnect-logs-${new Date().toISOString()}.txt`),
        document.body.appendChild(n),
        n.click(),
        document.body.removeChild(n),
        URL.revokeObjectURL(r);
    }
  },
  ke = Object.defineProperty,
  xe = (e, t, r) =>
    t in e
      ? ke(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  Ie = (e, t, r) => xe(e, typeof t != "symbol" ? t + "" : t, r),
  R = class {
    constructor(t, r = X) {
      Ie(this, "baseChunkLogger"), (this.baseChunkLogger = new B(t, r));
    }
    write(t) {
      this.baseChunkLogger.appendToLogs(t);
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
    logsToBlob(t) {
      return this.baseChunkLogger.logsToBlob(t);
    }
  },
  Ce = Object.defineProperty,
  Te = Object.defineProperties,
  Be = Object.getOwnPropertyDescriptors,
  J = Object.getOwnPropertySymbols,
  Ae = Object.prototype.hasOwnProperty,
  Ne = Object.prototype.propertyIsEnumerable,
  W = (e, t, r) =>
    t in e
      ? Ce(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  w = (e, t) => {
    for (var r in t || (t = {})) Ae.call(t, r) && W(e, r, t[r]);
    if (J) for (var r of J(t)) Ne.call(t, r) && W(e, r, t[r]);
    return e;
  },
  O = (e, t) => Te(e, Be(t));
function Ue(e) {
  return O(w({}, e), { level: e?.level || me.level });
}
function Pe(e, t, r = A) {
  return (e[r] = t), e;
}
function De(e, t = A) {
  return e[t] || "";
}
function Ve(e, t, r = A) {
  let n = De(e, r);
  return n.trim() ? `${n}/${t}` : t;
}
function Xe(e, t, r = A) {
  let n = Ve(e, t, r),
    i = e.child({ context: n });
  return Pe(i, n, r);
}
function Me(e) {
  var t, r;
  let n = new M((t = e.opts) == null ? void 0 : t.level, e.maxSizeInBytes);
  return {
    logger: b.exports(
      O(w({}, e.opts), {
        level: "trace",
        browser: O(w({}, (r = e.opts) == null ? void 0 : r.browser), {
          write: (i) => n.write(i),
        }),
      })
    ),
    chunkLoggerController: n,
  };
}
function Re(e) {
  var t, r;
  let n = new R((t = e.opts) == null ? void 0 : t.level, e.maxSizeInBytes);
  return {
    logger: b.exports(
      O(w({}, e.opts), {
        level: "trace",
        browser: O(w({}, (r = e.opts) == null ? void 0 : r.browser), {
          write: (i) => n.write(i),
        }),
      }),
      n
    ),
    chunkLoggerController: n,
  };
}
function Ye(e) {
  var t;
  if (typeof e.loggerOverride < "u" && typeof e.loggerOverride != "string")
    return { logger: e.loggerOverride, chunkLoggerController: null };
  let r = O(w({}, e.opts), {
    level:
      typeof e.loggerOverride == "string"
        ? e.loggerOverride
        : (t = e.opts) == null
        ? void 0
        : t.level,
  });
  return typeof window < "u"
    ? Me(O(w({}, e), { opts: r }))
    : Re(O(w({}, e), { opts: r }));
}
export { Ue as a, De as b, Xe as c, Ye as d };
