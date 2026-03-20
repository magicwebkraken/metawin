import {
  a as En,
  b as Xr,
  c as _n,
  d as Ze,
  f as io,
  g as oo,
  h as so,
  i as ao,
  j as Mc,
  k as Je,
  l as Pe,
  m as ea,
  n as An,
  o as ra,
  p as Qr,
  q as na,
  r as ia,
  s as oa,
  t as Tc,
  w as Rn,
  x as Pc,
} from "./chunk-4I7G342N.js";
import { a as no, b as Lc } from "./chunk-N425SZE3.js";
import { a as ro, b as Rc } from "./chunk-Z3SE2D4B.js";
import { a as eo, b as _c } from "./chunk-HINDXNTT.js";
import { d as ta, f as Ac } from "./chunk-EEU3LH2V.js";
import { F as Xs, I as to, L as Qs, t as Js } from "./chunk-QMRWXCSQ.js";
import {
  a as Q,
  b as st,
  f as je,
  g as Et,
  h as Ae,
  i as Xi,
  k as Ye,
  l as Qi,
  n as M,
} from "./chunk-VNDKUXGB.js";
var co = Ae((Ln) => {
  "use strict";
  Ln.byteLength = Uc;
  Ln.toByteArray = Nc;
  Ln.fromByteArray = Dc;
  var Fe = [],
    Me = [],
    Cc = typeof Uint8Array < "u" ? Uint8Array : Array,
    uo = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  for (yr = 0, sa = uo.length; yr < sa; ++yr)
    (Fe[yr] = uo[yr]), (Me[uo.charCodeAt(yr)] = yr);
  var yr, sa;
  Me[45] = 62;
  Me[95] = 63;
  function aa(n) {
    var t = n.length;
    if (t % 4 > 0)
      throw new Error("Invalid string. Length must be a multiple of 4");
    var e = n.indexOf("=");
    e === -1 && (e = t);
    var r = e === t ? 0 : 4 - (e % 4);
    return [e, r];
  }
  function Uc(n) {
    var t = aa(n),
      e = t[0],
      r = t[1];
    return ((e + r) * 3) / 4 - r;
  }
  function Fc(n, t, e) {
    return ((t + e) * 3) / 4 - e;
  }
  function Nc(n) {
    var t,
      e = aa(n),
      r = e[0],
      i = e[1],
      o = new Cc(Fc(n, r, i)),
      s = 0,
      f = i > 0 ? r - 4 : r,
      h;
    for (h = 0; h < f; h += 4)
      (t =
        (Me[n.charCodeAt(h)] << 18) |
        (Me[n.charCodeAt(h + 1)] << 12) |
        (Me[n.charCodeAt(h + 2)] << 6) |
        Me[n.charCodeAt(h + 3)]),
        (o[s++] = (t >> 16) & 255),
        (o[s++] = (t >> 8) & 255),
        (o[s++] = t & 255);
    return (
      i === 2 &&
        ((t = (Me[n.charCodeAt(h)] << 2) | (Me[n.charCodeAt(h + 1)] >> 4)),
        (o[s++] = t & 255)),
      i === 1 &&
        ((t =
          (Me[n.charCodeAt(h)] << 10) |
          (Me[n.charCodeAt(h + 1)] << 4) |
          (Me[n.charCodeAt(h + 2)] >> 2)),
        (o[s++] = (t >> 8) & 255),
        (o[s++] = t & 255)),
      o
    );
  }
  function Oc(n) {
    return (
      Fe[(n >> 18) & 63] + Fe[(n >> 12) & 63] + Fe[(n >> 6) & 63] + Fe[n & 63]
    );
  }
  function zc(n, t, e) {
    for (var r, i = [], o = t; o < e; o += 3)
      (r =
        ((n[o] << 16) & 16711680) +
        ((n[o + 1] << 8) & 65280) +
        (n[o + 2] & 255)),
        i.push(Oc(r));
    return i.join("");
  }
  function Dc(n) {
    for (
      var t, e = n.length, r = e % 3, i = [], o = 16383, s = 0, f = e - r;
      s < f;
      s += o
    )
      i.push(zc(n, s, s + o > f ? f : s + o));
    return (
      r === 1
        ? ((t = n[e - 1]), i.push(Fe[t >> 2] + Fe[(t << 4) & 63] + "=="))
        : r === 2 &&
          ((t = (n[e - 2] << 8) + n[e - 1]),
          i.push(Fe[t >> 10] + Fe[(t >> 4) & 63] + Fe[(t << 2) & 63] + "=")),
      i.join("")
    );
  }
});
var ho = Ae((fo) => {
  "use strict";
  fo.read = function (n, t, e, r, i) {
    var o,
      s,
      f = i * 8 - r - 1,
      h = (1 << f) - 1,
      b = h >> 1,
      B = -7,
      S = e ? i - 1 : 0,
      U = e ? -1 : 1,
      _ = n[t + S];
    for (
      S += U, o = _ & ((1 << -B) - 1), _ >>= -B, B += f;
      B > 0;
      o = o * 256 + n[t + S], S += U, B -= 8
    );
    for (
      s = o & ((1 << -B) - 1), o >>= -B, B += r;
      B > 0;
      s = s * 256 + n[t + S], S += U, B -= 8
    );
    if (o === 0) o = 1 - b;
    else {
      if (o === h) return s ? NaN : (_ ? -1 : 1) * (1 / 0);
      (s = s + Math.pow(2, r)), (o = o - b);
    }
    return (_ ? -1 : 1) * s * Math.pow(2, o - r);
  };
  fo.write = function (n, t, e, r, i, o) {
    var s,
      f,
      h,
      b = o * 8 - i - 1,
      B = (1 << b) - 1,
      S = B >> 1,
      U = i === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
      _ = r ? 0 : o - 1,
      E = r ? 1 : -1,
      T = t < 0 || (t === 0 && 1 / t < 0) ? 1 : 0;
    for (
      t = Math.abs(t),
        isNaN(t) || t === 1 / 0
          ? ((f = isNaN(t) ? 1 : 0), (s = B))
          : ((s = Math.floor(Math.log(t) / Math.LN2)),
            t * (h = Math.pow(2, -s)) < 1 && (s--, (h *= 2)),
            s + S >= 1 ? (t += U / h) : (t += U * Math.pow(2, 1 - S)),
            t * h >= 2 && (s++, (h /= 2)),
            s + S >= B
              ? ((f = 0), (s = B))
              : s + S >= 1
              ? ((f = (t * h - 1) * Math.pow(2, i)), (s = s + S))
              : ((f = t * Math.pow(2, S - 1) * Math.pow(2, i)), (s = 0)));
      i >= 8;
      n[e + _] = f & 255, _ += E, f /= 256, i -= 8
    );
    for (
      s = (s << i) | f, b += i;
      b > 0;
      n[e + _] = s & 255, _ += E, s /= 256, b -= 8
    );
    n[e + _ - E] |= T * 128;
  };
});
var en = Ae((Cr) => {
  "use strict";
  var lo = co(),
    Tr = ho(),
    ua =
      typeof Symbol == "function" && typeof Symbol.for == "function"
        ? Symbol.for("nodejs.util.inspect.custom")
        : null;
  Cr.Buffer = A;
  Cr.SlowBuffer = Hc;
  Cr.INSPECT_MAX_BYTES = 50;
  var Mn = 2147483647;
  Cr.kMaxLength = Mn;
  A.TYPED_ARRAY_SUPPORT = Kc();
  !A.TYPED_ARRAY_SUPPORT &&
    typeof console < "u" &&
    typeof console.error == "function" &&
    console.error(
      "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
    );
  function Kc() {
    try {
      let n = new Uint8Array(1),
        t = {
          foo: function () {
            return 42;
          },
        };
      return (
        Object.setPrototypeOf(t, Uint8Array.prototype),
        Object.setPrototypeOf(n, t),
        n.foo() === 42
      );
    } catch {
      return !1;
    }
  }
  Object.defineProperty(A.prototype, "parent", {
    enumerable: !0,
    get: function () {
      if (A.isBuffer(this)) return this.buffer;
    },
  });
  Object.defineProperty(A.prototype, "offset", {
    enumerable: !0,
    get: function () {
      if (A.isBuffer(this)) return this.byteOffset;
    },
  });
  function Xe(n) {
    if (n > Mn)
      throw new RangeError(
        'The value "' + n + '" is invalid for option "size"'
      );
    let t = new Uint8Array(n);
    return Object.setPrototypeOf(t, A.prototype), t;
  }
  function A(n, t, e) {
    if (typeof n == "number") {
      if (typeof t == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      return mo(n);
    }
    return la(n, t, e);
  }
  A.poolSize = 8192;
  function la(n, t, e) {
    if (typeof n == "string") return qc(n, t);
    if (ArrayBuffer.isView(n)) return $c(n);
    if (n == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
          typeof n
      );
    if (
      Ne(n, ArrayBuffer) ||
      (n && Ne(n.buffer, ArrayBuffer)) ||
      (typeof SharedArrayBuffer < "u" &&
        (Ne(n, SharedArrayBuffer) || (n && Ne(n.buffer, SharedArrayBuffer))))
    )
      return yo(n, t, e);
    if (typeof n == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    let r = n.valueOf && n.valueOf();
    if (r != null && r !== n) return A.from(r, t, e);
    let i = Vc(n);
    if (i) return i;
    if (
      typeof Symbol < "u" &&
      Symbol.toPrimitive != null &&
      typeof n[Symbol.toPrimitive] == "function"
    )
      return A.from(n[Symbol.toPrimitive]("string"), t, e);
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
        typeof n
    );
  }
  A.from = function (n, t, e) {
    return la(n, t, e);
  };
  Object.setPrototypeOf(A.prototype, Uint8Array.prototype);
  Object.setPrototypeOf(A, Uint8Array);
  function da(n) {
    if (typeof n != "number")
      throw new TypeError('"size" argument must be of type number');
    if (n < 0)
      throw new RangeError(
        'The value "' + n + '" is invalid for option "size"'
      );
  }
  function Wc(n, t, e) {
    return (
      da(n),
      n <= 0
        ? Xe(n)
        : t !== void 0
        ? typeof e == "string"
          ? Xe(n).fill(t, e)
          : Xe(n).fill(t)
        : Xe(n)
    );
  }
  A.alloc = function (n, t, e) {
    return Wc(n, t, e);
  };
  function mo(n) {
    return da(n), Xe(n < 0 ? 0 : wo(n) | 0);
  }
  A.allocUnsafe = function (n) {
    return mo(n);
  };
  A.allocUnsafeSlow = function (n) {
    return mo(n);
  };
  function qc(n, t) {
    if (((typeof t != "string" || t === "") && (t = "utf8"), !A.isEncoding(t)))
      throw new TypeError("Unknown encoding: " + t);
    let e = pa(n, t) | 0,
      r = Xe(e),
      i = r.write(n, t);
    return i !== e && (r = r.slice(0, i)), r;
  }
  function po(n) {
    let t = n.length < 0 ? 0 : wo(n.length) | 0,
      e = Xe(t);
    for (let r = 0; r < t; r += 1) e[r] = n[r] & 255;
    return e;
  }
  function $c(n) {
    if (Ne(n, Uint8Array)) {
      let t = new Uint8Array(n);
      return yo(t.buffer, t.byteOffset, t.byteLength);
    }
    return po(n);
  }
  function yo(n, t, e) {
    if (t < 0 || n.byteLength < t)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (n.byteLength < t + (e || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    let r;
    return (
      t === void 0 && e === void 0
        ? (r = new Uint8Array(n))
        : e === void 0
        ? (r = new Uint8Array(n, t))
        : (r = new Uint8Array(n, t, e)),
      Object.setPrototypeOf(r, A.prototype),
      r
    );
  }
  function Vc(n) {
    if (A.isBuffer(n)) {
      let t = wo(n.length) | 0,
        e = Xe(t);
      return e.length === 0 || n.copy(e, 0, 0, t), e;
    }
    if (n.length !== void 0)
      return typeof n.length != "number" || ko(n.length) ? Xe(0) : po(n);
    if (n.type === "Buffer" && Array.isArray(n.data)) return po(n.data);
  }
  function wo(n) {
    if (n >= Mn)
      throw new RangeError(
        "Attempt to allocate Buffer larger than maximum size: 0x" +
          Mn.toString(16) +
          " bytes"
      );
    return n | 0;
  }
  function Hc(n) {
    return +n != n && (n = 0), A.alloc(+n);
  }
  A.isBuffer = function (t) {
    return t != null && t._isBuffer === !0 && t !== A.prototype;
  };
  A.compare = function (t, e) {
    if (
      (Ne(t, Uint8Array) && (t = A.from(t, t.offset, t.byteLength)),
      Ne(e, Uint8Array) && (e = A.from(e, e.offset, e.byteLength)),
      !A.isBuffer(t) || !A.isBuffer(e))
    )
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
      );
    if (t === e) return 0;
    let r = t.length,
      i = e.length;
    for (let o = 0, s = Math.min(r, i); o < s; ++o)
      if (t[o] !== e[o]) {
        (r = t[o]), (i = e[o]);
        break;
      }
    return r < i ? -1 : i < r ? 1 : 0;
  };
  A.isEncoding = function (t) {
    switch (String(t).toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return !0;
      default:
        return !1;
    }
  };
  A.concat = function (t, e) {
    if (!Array.isArray(t))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (t.length === 0) return A.alloc(0);
    let r;
    if (e === void 0) for (e = 0, r = 0; r < t.length; ++r) e += t[r].length;
    let i = A.allocUnsafe(e),
      o = 0;
    for (r = 0; r < t.length; ++r) {
      let s = t[r];
      if (Ne(s, Uint8Array))
        o + s.length > i.length
          ? (A.isBuffer(s) || (s = A.from(s)), s.copy(i, o))
          : Uint8Array.prototype.set.call(i, s, o);
      else if (A.isBuffer(s)) s.copy(i, o);
      else throw new TypeError('"list" argument must be an Array of Buffers');
      o += s.length;
    }
    return i;
  };
  function pa(n, t) {
    if (A.isBuffer(n)) return n.length;
    if (ArrayBuffer.isView(n) || Ne(n, ArrayBuffer)) return n.byteLength;
    if (typeof n != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
          typeof n
      );
    let e = n.length,
      r = arguments.length > 2 && arguments[2] === !0;
    if (!r && e === 0) return 0;
    let i = !1;
    for (;;)
      switch (t) {
        case "ascii":
        case "latin1":
        case "binary":
          return e;
        case "utf8":
        case "utf-8":
          return go(n).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return e * 2;
        case "hex":
          return e >>> 1;
        case "base64":
          return Sa(n).length;
        default:
          if (i) return r ? -1 : go(n).length;
          (t = ("" + t).toLowerCase()), (i = !0);
      }
  }
  A.byteLength = pa;
  function Gc(n, t, e) {
    let r = !1;
    if (
      ((t === void 0 || t < 0) && (t = 0),
      t > this.length ||
        ((e === void 0 || e > this.length) && (e = this.length), e <= 0) ||
        ((e >>>= 0), (t >>>= 0), e <= t))
    )
      return "";
    for (n || (n = "utf8"); ; )
      switch (n) {
        case "hex":
          return nf(this, t, e);
        case "utf8":
        case "utf-8":
          return ga(this, t, e);
        case "ascii":
          return ef(this, t, e);
        case "latin1":
        case "binary":
          return rf(this, t, e);
        case "base64":
          return Qc(this, t, e);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return of(this, t, e);
        default:
          if (r) throw new TypeError("Unknown encoding: " + n);
          (n = (n + "").toLowerCase()), (r = !0);
      }
  }
  A.prototype._isBuffer = !0;
  function gr(n, t, e) {
    let r = n[t];
    (n[t] = n[e]), (n[e] = r);
  }
  A.prototype.swap16 = function () {
    let t = this.length;
    if (t % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let e = 0; e < t; e += 2) gr(this, e, e + 1);
    return this;
  };
  A.prototype.swap32 = function () {
    let t = this.length;
    if (t % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let e = 0; e < t; e += 4) gr(this, e, e + 3), gr(this, e + 1, e + 2);
    return this;
  };
  A.prototype.swap64 = function () {
    let t = this.length;
    if (t % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let e = 0; e < t; e += 8)
      gr(this, e, e + 7),
        gr(this, e + 1, e + 6),
        gr(this, e + 2, e + 5),
        gr(this, e + 3, e + 4);
    return this;
  };
  A.prototype.toString = function () {
    let t = this.length;
    return t === 0
      ? ""
      : arguments.length === 0
      ? ga(this, 0, t)
      : Gc.apply(this, arguments);
  };
  A.prototype.toLocaleString = A.prototype.toString;
  A.prototype.equals = function (t) {
    if (!A.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
    return this === t ? !0 : A.compare(this, t) === 0;
  };
  A.prototype.inspect = function () {
    let t = "",
      e = Cr.INSPECT_MAX_BYTES;
    return (
      (t = this.toString("hex", 0, e)
        .replace(/(.{2})/g, "$1 ")
        .trim()),
      this.length > e && (t += " ... "),
      "<Buffer " + t + ">"
    );
  };
  ua && (A.prototype[ua] = A.prototype.inspect);
  A.prototype.compare = function (t, e, r, i, o) {
    if (
      (Ne(t, Uint8Array) && (t = A.from(t, t.offset, t.byteLength)),
      !A.isBuffer(t))
    )
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
          typeof t
      );
    if (
      (e === void 0 && (e = 0),
      r === void 0 && (r = t ? t.length : 0),
      i === void 0 && (i = 0),
      o === void 0 && (o = this.length),
      e < 0 || r > t.length || i < 0 || o > this.length)
    )
      throw new RangeError("out of range index");
    if (i >= o && e >= r) return 0;
    if (i >= o) return -1;
    if (e >= r) return 1;
    if (((e >>>= 0), (r >>>= 0), (i >>>= 0), (o >>>= 0), this === t)) return 0;
    let s = o - i,
      f = r - e,
      h = Math.min(s, f),
      b = this.slice(i, o),
      B = t.slice(e, r);
    for (let S = 0; S < h; ++S)
      if (b[S] !== B[S]) {
        (s = b[S]), (f = B[S]);
        break;
      }
    return s < f ? -1 : f < s ? 1 : 0;
  };
  function ya(n, t, e, r, i) {
    if (n.length === 0) return -1;
    if (
      (typeof e == "string"
        ? ((r = e), (e = 0))
        : e > 2147483647
        ? (e = 2147483647)
        : e < -2147483648 && (e = -2147483648),
      (e = +e),
      ko(e) && (e = i ? 0 : n.length - 1),
      e < 0 && (e = n.length + e),
      e >= n.length)
    ) {
      if (i) return -1;
      e = n.length - 1;
    } else if (e < 0)
      if (i) e = 0;
      else return -1;
    if ((typeof t == "string" && (t = A.from(t, r)), A.isBuffer(t)))
      return t.length === 0 ? -1 : ca(n, t, e, r, i);
    if (typeof t == "number")
      return (
        (t = t & 255),
        typeof Uint8Array.prototype.indexOf == "function"
          ? i
            ? Uint8Array.prototype.indexOf.call(n, t, e)
            : Uint8Array.prototype.lastIndexOf.call(n, t, e)
          : ca(n, [t], e, r, i)
      );
    throw new TypeError("val must be string, number or Buffer");
  }
  function ca(n, t, e, r, i) {
    let o = 1,
      s = n.length,
      f = t.length;
    if (
      r !== void 0 &&
      ((r = String(r).toLowerCase()),
      r === "ucs2" || r === "ucs-2" || r === "utf16le" || r === "utf-16le")
    ) {
      if (n.length < 2 || t.length < 2) return -1;
      (o = 2), (s /= 2), (f /= 2), (e /= 2);
    }
    function h(B, S) {
      return o === 1 ? B[S] : B.readUInt16BE(S * o);
    }
    let b;
    if (i) {
      let B = -1;
      for (b = e; b < s; b++)
        if (h(n, b) === h(t, B === -1 ? 0 : b - B)) {
          if ((B === -1 && (B = b), b - B + 1 === f)) return B * o;
        } else B !== -1 && (b -= b - B), (B = -1);
    } else
      for (e + f > s && (e = s - f), b = e; b >= 0; b--) {
        let B = !0;
        for (let S = 0; S < f; S++)
          if (h(n, b + S) !== h(t, S)) {
            B = !1;
            break;
          }
        if (B) return b;
      }
    return -1;
  }
  A.prototype.includes = function (t, e, r) {
    return this.indexOf(t, e, r) !== -1;
  };
  A.prototype.indexOf = function (t, e, r) {
    return ya(this, t, e, r, !0);
  };
  A.prototype.lastIndexOf = function (t, e, r) {
    return ya(this, t, e, r, !1);
  };
  function jc(n, t, e, r) {
    e = Number(e) || 0;
    let i = n.length - e;
    r ? ((r = Number(r)), r > i && (r = i)) : (r = i);
    let o = t.length;
    r > o / 2 && (r = o / 2);
    let s;
    for (s = 0; s < r; ++s) {
      let f = parseInt(t.substr(s * 2, 2), 16);
      if (ko(f)) return s;
      n[e + s] = f;
    }
    return s;
  }
  function Yc(n, t, e, r) {
    return Tn(go(t, n.length - e), n, e, r);
  }
  function Zc(n, t, e, r) {
    return Tn(cf(t), n, e, r);
  }
  function Jc(n, t, e, r) {
    return Tn(Sa(t), n, e, r);
  }
  function Xc(n, t, e, r) {
    return Tn(ff(t, n.length - e), n, e, r);
  }
  A.prototype.write = function (t, e, r, i) {
    if (e === void 0) (i = "utf8"), (r = this.length), (e = 0);
    else if (r === void 0 && typeof e == "string")
      (i = e), (r = this.length), (e = 0);
    else if (isFinite(e))
      (e = e >>> 0),
        isFinite(r)
          ? ((r = r >>> 0), i === void 0 && (i = "utf8"))
          : ((i = r), (r = void 0));
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    let o = this.length - e;
    if (
      ((r === void 0 || r > o) && (r = o),
      (t.length > 0 && (r < 0 || e < 0)) || e > this.length)
    )
      throw new RangeError("Attempt to write outside buffer bounds");
    i || (i = "utf8");
    let s = !1;
    for (;;)
      switch (i) {
        case "hex":
          return jc(this, t, e, r);
        case "utf8":
        case "utf-8":
          return Yc(this, t, e, r);
        case "ascii":
        case "latin1":
        case "binary":
          return Zc(this, t, e, r);
        case "base64":
          return Jc(this, t, e, r);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return Xc(this, t, e, r);
        default:
          if (s) throw new TypeError("Unknown encoding: " + i);
          (i = ("" + i).toLowerCase()), (s = !0);
      }
  };
  A.prototype.toJSON = function () {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0),
    };
  };
  function Qc(n, t, e) {
    return t === 0 && e === n.length
      ? lo.fromByteArray(n)
      : lo.fromByteArray(n.slice(t, e));
  }
  function ga(n, t, e) {
    e = Math.min(n.length, e);
    let r = [],
      i = t;
    for (; i < e; ) {
      let o = n[i],
        s = null,
        f = o > 239 ? 4 : o > 223 ? 3 : o > 191 ? 2 : 1;
      if (i + f <= e) {
        let h, b, B, S;
        switch (f) {
          case 1:
            o < 128 && (s = o);
            break;
          case 2:
            (h = n[i + 1]),
              (h & 192) === 128 &&
                ((S = ((o & 31) << 6) | (h & 63)), S > 127 && (s = S));
            break;
          case 3:
            (h = n[i + 1]),
              (b = n[i + 2]),
              (h & 192) === 128 &&
                (b & 192) === 128 &&
                ((S = ((o & 15) << 12) | ((h & 63) << 6) | (b & 63)),
                S > 2047 && (S < 55296 || S > 57343) && (s = S));
            break;
          case 4:
            (h = n[i + 1]),
              (b = n[i + 2]),
              (B = n[i + 3]),
              (h & 192) === 128 &&
                (b & 192) === 128 &&
                (B & 192) === 128 &&
                ((S =
                  ((o & 15) << 18) |
                  ((h & 63) << 12) |
                  ((b & 63) << 6) |
                  (B & 63)),
                S > 65535 && S < 1114112 && (s = S));
        }
      }
      s === null
        ? ((s = 65533), (f = 1))
        : s > 65535 &&
          ((s -= 65536),
          r.push(((s >>> 10) & 1023) | 55296),
          (s = 56320 | (s & 1023))),
        r.push(s),
        (i += f);
    }
    return tf(r);
  }
  var fa = 4096;
  function tf(n) {
    let t = n.length;
    if (t <= fa) return String.fromCharCode.apply(String, n);
    let e = "",
      r = 0;
    for (; r < t; )
      e += String.fromCharCode.apply(String, n.slice(r, (r += fa)));
    return e;
  }
  function ef(n, t, e) {
    let r = "";
    e = Math.min(n.length, e);
    for (let i = t; i < e; ++i) r += String.fromCharCode(n[i] & 127);
    return r;
  }
  function rf(n, t, e) {
    let r = "";
    e = Math.min(n.length, e);
    for (let i = t; i < e; ++i) r += String.fromCharCode(n[i]);
    return r;
  }
  function nf(n, t, e) {
    let r = n.length;
    (!t || t < 0) && (t = 0), (!e || e < 0 || e > r) && (e = r);
    let i = "";
    for (let o = t; o < e; ++o) i += hf[n[o]];
    return i;
  }
  function of(n, t, e) {
    let r = n.slice(t, e),
      i = "";
    for (let o = 0; o < r.length - 1; o += 2)
      i += String.fromCharCode(r[o] + r[o + 1] * 256);
    return i;
  }
  A.prototype.slice = function (t, e) {
    let r = this.length;
    (t = ~~t),
      (e = e === void 0 ? r : ~~e),
      t < 0 ? ((t += r), t < 0 && (t = 0)) : t > r && (t = r),
      e < 0 ? ((e += r), e < 0 && (e = 0)) : e > r && (e = r),
      e < t && (e = t);
    let i = this.subarray(t, e);
    return Object.setPrototypeOf(i, A.prototype), i;
  };
  function ue(n, t, e) {
    if (n % 1 !== 0 || n < 0) throw new RangeError("offset is not uint");
    if (n + t > e)
      throw new RangeError("Trying to access beyond buffer length");
  }
  A.prototype.readUintLE = A.prototype.readUIntLE = function (t, e, r) {
    (t = t >>> 0), (e = e >>> 0), r || ue(t, e, this.length);
    let i = this[t],
      o = 1,
      s = 0;
    for (; ++s < e && (o *= 256); ) i += this[t + s] * o;
    return i;
  };
  A.prototype.readUintBE = A.prototype.readUIntBE = function (t, e, r) {
    (t = t >>> 0), (e = e >>> 0), r || ue(t, e, this.length);
    let i = this[t + --e],
      o = 1;
    for (; e > 0 && (o *= 256); ) i += this[t + --e] * o;
    return i;
  };
  A.prototype.readUint8 = A.prototype.readUInt8 = function (t, e) {
    return (t = t >>> 0), e || ue(t, 1, this.length), this[t];
  };
  A.prototype.readUint16LE = A.prototype.readUInt16LE = function (t, e) {
    return (
      (t = t >>> 0), e || ue(t, 2, this.length), this[t] | (this[t + 1] << 8)
    );
  };
  A.prototype.readUint16BE = A.prototype.readUInt16BE = function (t, e) {
    return (
      (t = t >>> 0), e || ue(t, 2, this.length), (this[t] << 8) | this[t + 1]
    );
  };
  A.prototype.readUint32LE = A.prototype.readUInt32LE = function (t, e) {
    return (
      (t = t >>> 0),
      e || ue(t, 4, this.length),
      (this[t] | (this[t + 1] << 8) | (this[t + 2] << 16)) +
        this[t + 3] * 16777216
    );
  };
  A.prototype.readUint32BE = A.prototype.readUInt32BE = function (t, e) {
    return (
      (t = t >>> 0),
      e || ue(t, 4, this.length),
      this[t] * 16777216 +
        ((this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3])
    );
  };
  A.prototype.readBigUInt64LE = or(function (t) {
    (t = t >>> 0), Pr(t, "offset");
    let e = this[t],
      r = this[t + 7];
    (e === void 0 || r === void 0) && tn(t, this.length - 8);
    let i = e + this[++t] * 2 ** 8 + this[++t] * 2 ** 16 + this[++t] * 2 ** 24,
      o = this[++t] + this[++t] * 2 ** 8 + this[++t] * 2 ** 16 + r * 2 ** 24;
    return BigInt(i) + (BigInt(o) << BigInt(32));
  });
  A.prototype.readBigUInt64BE = or(function (t) {
    (t = t >>> 0), Pr(t, "offset");
    let e = this[t],
      r = this[t + 7];
    (e === void 0 || r === void 0) && tn(t, this.length - 8);
    let i = e * 2 ** 24 + this[++t] * 2 ** 16 + this[++t] * 2 ** 8 + this[++t],
      o = this[++t] * 2 ** 24 + this[++t] * 2 ** 16 + this[++t] * 2 ** 8 + r;
    return (BigInt(i) << BigInt(32)) + BigInt(o);
  });
  A.prototype.readIntLE = function (t, e, r) {
    (t = t >>> 0), (e = e >>> 0), r || ue(t, e, this.length);
    let i = this[t],
      o = 1,
      s = 0;
    for (; ++s < e && (o *= 256); ) i += this[t + s] * o;
    return (o *= 128), i >= o && (i -= Math.pow(2, 8 * e)), i;
  };
  A.prototype.readIntBE = function (t, e, r) {
    (t = t >>> 0), (e = e >>> 0), r || ue(t, e, this.length);
    let i = e,
      o = 1,
      s = this[t + --i];
    for (; i > 0 && (o *= 256); ) s += this[t + --i] * o;
    return (o *= 128), s >= o && (s -= Math.pow(2, 8 * e)), s;
  };
  A.prototype.readInt8 = function (t, e) {
    return (
      (t = t >>> 0),
      e || ue(t, 1, this.length),
      this[t] & 128 ? (255 - this[t] + 1) * -1 : this[t]
    );
  };
  A.prototype.readInt16LE = function (t, e) {
    (t = t >>> 0), e || ue(t, 2, this.length);
    let r = this[t] | (this[t + 1] << 8);
    return r & 32768 ? r | 4294901760 : r;
  };
  A.prototype.readInt16BE = function (t, e) {
    (t = t >>> 0), e || ue(t, 2, this.length);
    let r = this[t + 1] | (this[t] << 8);
    return r & 32768 ? r | 4294901760 : r;
  };
  A.prototype.readInt32LE = function (t, e) {
    return (
      (t = t >>> 0),
      e || ue(t, 4, this.length),
      this[t] | (this[t + 1] << 8) | (this[t + 2] << 16) | (this[t + 3] << 24)
    );
  };
  A.prototype.readInt32BE = function (t, e) {
    return (
      (t = t >>> 0),
      e || ue(t, 4, this.length),
      (this[t] << 24) | (this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3]
    );
  };
  A.prototype.readBigInt64LE = or(function (t) {
    (t = t >>> 0), Pr(t, "offset");
    let e = this[t],
      r = this[t + 7];
    (e === void 0 || r === void 0) && tn(t, this.length - 8);
    let i =
      this[t + 4] + this[t + 5] * 2 ** 8 + this[t + 6] * 2 ** 16 + (r << 24);
    return (
      (BigInt(i) << BigInt(32)) +
      BigInt(e + this[++t] * 2 ** 8 + this[++t] * 2 ** 16 + this[++t] * 2 ** 24)
    );
  });
  A.prototype.readBigInt64BE = or(function (t) {
    (t = t >>> 0), Pr(t, "offset");
    let e = this[t],
      r = this[t + 7];
    (e === void 0 || r === void 0) && tn(t, this.length - 8);
    let i = (e << 24) + this[++t] * 2 ** 16 + this[++t] * 2 ** 8 + this[++t];
    return (
      (BigInt(i) << BigInt(32)) +
      BigInt(this[++t] * 2 ** 24 + this[++t] * 2 ** 16 + this[++t] * 2 ** 8 + r)
    );
  });
  A.prototype.readFloatLE = function (t, e) {
    return (
      (t = t >>> 0), e || ue(t, 4, this.length), Tr.read(this, t, !0, 23, 4)
    );
  };
  A.prototype.readFloatBE = function (t, e) {
    return (
      (t = t >>> 0), e || ue(t, 4, this.length), Tr.read(this, t, !1, 23, 4)
    );
  };
  A.prototype.readDoubleLE = function (t, e) {
    return (
      (t = t >>> 0), e || ue(t, 8, this.length), Tr.read(this, t, !0, 52, 8)
    );
  };
  A.prototype.readDoubleBE = function (t, e) {
    return (
      (t = t >>> 0), e || ue(t, 8, this.length), Tr.read(this, t, !1, 52, 8)
    );
  };
  function Se(n, t, e, r, i, o) {
    if (!A.isBuffer(n))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (t > i || t < o)
      throw new RangeError('"value" argument is out of bounds');
    if (e + r > n.length) throw new RangeError("Index out of range");
  }
  A.prototype.writeUintLE = A.prototype.writeUIntLE = function (t, e, r, i) {
    if (((t = +t), (e = e >>> 0), (r = r >>> 0), !i)) {
      let f = Math.pow(2, 8 * r) - 1;
      Se(this, t, e, r, f, 0);
    }
    let o = 1,
      s = 0;
    for (this[e] = t & 255; ++s < r && (o *= 256); )
      this[e + s] = (t / o) & 255;
    return e + r;
  };
  A.prototype.writeUintBE = A.prototype.writeUIntBE = function (t, e, r, i) {
    if (((t = +t), (e = e >>> 0), (r = r >>> 0), !i)) {
      let f = Math.pow(2, 8 * r) - 1;
      Se(this, t, e, r, f, 0);
    }
    let o = r - 1,
      s = 1;
    for (this[e + o] = t & 255; --o >= 0 && (s *= 256); )
      this[e + o] = (t / s) & 255;
    return e + r;
  };
  A.prototype.writeUint8 = A.prototype.writeUInt8 = function (t, e, r) {
    return (
      (t = +t),
      (e = e >>> 0),
      r || Se(this, t, e, 1, 255, 0),
      (this[e] = t & 255),
      e + 1
    );
  };
  A.prototype.writeUint16LE = A.prototype.writeUInt16LE = function (t, e, r) {
    return (
      (t = +t),
      (e = e >>> 0),
      r || Se(this, t, e, 2, 65535, 0),
      (this[e] = t & 255),
      (this[e + 1] = t >>> 8),
      e + 2
    );
  };
  A.prototype.writeUint16BE = A.prototype.writeUInt16BE = function (t, e, r) {
    return (
      (t = +t),
      (e = e >>> 0),
      r || Se(this, t, e, 2, 65535, 0),
      (this[e] = t >>> 8),
      (this[e + 1] = t & 255),
      e + 2
    );
  };
  A.prototype.writeUint32LE = A.prototype.writeUInt32LE = function (t, e, r) {
    return (
      (t = +t),
      (e = e >>> 0),
      r || Se(this, t, e, 4, 4294967295, 0),
      (this[e + 3] = t >>> 24),
      (this[e + 2] = t >>> 16),
      (this[e + 1] = t >>> 8),
      (this[e] = t & 255),
      e + 4
    );
  };
  A.prototype.writeUint32BE = A.prototype.writeUInt32BE = function (t, e, r) {
    return (
      (t = +t),
      (e = e >>> 0),
      r || Se(this, t, e, 4, 4294967295, 0),
      (this[e] = t >>> 24),
      (this[e + 1] = t >>> 16),
      (this[e + 2] = t >>> 8),
      (this[e + 3] = t & 255),
      e + 4
    );
  };
  function ma(n, t, e, r, i) {
    xa(t, r, i, n, e, 7);
    let o = Number(t & BigInt(4294967295));
    (n[e++] = o),
      (o = o >> 8),
      (n[e++] = o),
      (o = o >> 8),
      (n[e++] = o),
      (o = o >> 8),
      (n[e++] = o);
    let s = Number((t >> BigInt(32)) & BigInt(4294967295));
    return (
      (n[e++] = s),
      (s = s >> 8),
      (n[e++] = s),
      (s = s >> 8),
      (n[e++] = s),
      (s = s >> 8),
      (n[e++] = s),
      e
    );
  }
  function wa(n, t, e, r, i) {
    xa(t, r, i, n, e, 7);
    let o = Number(t & BigInt(4294967295));
    (n[e + 7] = o),
      (o = o >> 8),
      (n[e + 6] = o),
      (o = o >> 8),
      (n[e + 5] = o),
      (o = o >> 8),
      (n[e + 4] = o);
    let s = Number((t >> BigInt(32)) & BigInt(4294967295));
    return (
      (n[e + 3] = s),
      (s = s >> 8),
      (n[e + 2] = s),
      (s = s >> 8),
      (n[e + 1] = s),
      (s = s >> 8),
      (n[e] = s),
      e + 8
    );
  }
  A.prototype.writeBigUInt64LE = or(function (t, e = 0) {
    return ma(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"));
  });
  A.prototype.writeBigUInt64BE = or(function (t, e = 0) {
    return wa(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"));
  });
  A.prototype.writeIntLE = function (t, e, r, i) {
    if (((t = +t), (e = e >>> 0), !i)) {
      let h = Math.pow(2, 8 * r - 1);
      Se(this, t, e, r, h - 1, -h);
    }
    let o = 0,
      s = 1,
      f = 0;
    for (this[e] = t & 255; ++o < r && (s *= 256); )
      t < 0 && f === 0 && this[e + o - 1] !== 0 && (f = 1),
        (this[e + o] = (((t / s) >> 0) - f) & 255);
    return e + r;
  };
  A.prototype.writeIntBE = function (t, e, r, i) {
    if (((t = +t), (e = e >>> 0), !i)) {
      let h = Math.pow(2, 8 * r - 1);
      Se(this, t, e, r, h - 1, -h);
    }
    let o = r - 1,
      s = 1,
      f = 0;
    for (this[e + o] = t & 255; --o >= 0 && (s *= 256); )
      t < 0 && f === 0 && this[e + o + 1] !== 0 && (f = 1),
        (this[e + o] = (((t / s) >> 0) - f) & 255);
    return e + r;
  };
  A.prototype.writeInt8 = function (t, e, r) {
    return (
      (t = +t),
      (e = e >>> 0),
      r || Se(this, t, e, 1, 127, -128),
      t < 0 && (t = 255 + t + 1),
      (this[e] = t & 255),
      e + 1
    );
  };
  A.prototype.writeInt16LE = function (t, e, r) {
    return (
      (t = +t),
      (e = e >>> 0),
      r || Se(this, t, e, 2, 32767, -32768),
      (this[e] = t & 255),
      (this[e + 1] = t >>> 8),
      e + 2
    );
  };
  A.prototype.writeInt16BE = function (t, e, r) {
    return (
      (t = +t),
      (e = e >>> 0),
      r || Se(this, t, e, 2, 32767, -32768),
      (this[e] = t >>> 8),
      (this[e + 1] = t & 255),
      e + 2
    );
  };
  A.prototype.writeInt32LE = function (t, e, r) {
    return (
      (t = +t),
      (e = e >>> 0),
      r || Se(this, t, e, 4, 2147483647, -2147483648),
      (this[e] = t & 255),
      (this[e + 1] = t >>> 8),
      (this[e + 2] = t >>> 16),
      (this[e + 3] = t >>> 24),
      e + 4
    );
  };
  A.prototype.writeInt32BE = function (t, e, r) {
    return (
      (t = +t),
      (e = e >>> 0),
      r || Se(this, t, e, 4, 2147483647, -2147483648),
      t < 0 && (t = 4294967295 + t + 1),
      (this[e] = t >>> 24),
      (this[e + 1] = t >>> 16),
      (this[e + 2] = t >>> 8),
      (this[e + 3] = t & 255),
      e + 4
    );
  };
  A.prototype.writeBigInt64LE = or(function (t, e = 0) {
    return ma(
      this,
      t,
      e,
      -BigInt("0x8000000000000000"),
      BigInt("0x7fffffffffffffff")
    );
  });
  A.prototype.writeBigInt64BE = or(function (t, e = 0) {
    return wa(
      this,
      t,
      e,
      -BigInt("0x8000000000000000"),
      BigInt("0x7fffffffffffffff")
    );
  });
  function ba(n, t, e, r, i, o) {
    if (e + r > n.length) throw new RangeError("Index out of range");
    if (e < 0) throw new RangeError("Index out of range");
  }
  function ka(n, t, e, r, i) {
    return (
      (t = +t),
      (e = e >>> 0),
      i || ba(n, t, e, 4, 34028234663852886e22, -34028234663852886e22),
      Tr.write(n, t, e, r, 23, 4),
      e + 4
    );
  }
  A.prototype.writeFloatLE = function (t, e, r) {
    return ka(this, t, e, !0, r);
  };
  A.prototype.writeFloatBE = function (t, e, r) {
    return ka(this, t, e, !1, r);
  };
  function Ba(n, t, e, r, i) {
    return (
      (t = +t),
      (e = e >>> 0),
      i || ba(n, t, e, 8, 17976931348623157e292, -17976931348623157e292),
      Tr.write(n, t, e, r, 52, 8),
      e + 8
    );
  }
  A.prototype.writeDoubleLE = function (t, e, r) {
    return Ba(this, t, e, !0, r);
  };
  A.prototype.writeDoubleBE = function (t, e, r) {
    return Ba(this, t, e, !1, r);
  };
  A.prototype.copy = function (t, e, r, i) {
    if (!A.isBuffer(t)) throw new TypeError("argument should be a Buffer");
    if (
      (r || (r = 0),
      !i && i !== 0 && (i = this.length),
      e >= t.length && (e = t.length),
      e || (e = 0),
      i > 0 && i < r && (i = r),
      i === r || t.length === 0 || this.length === 0)
    )
      return 0;
    if (e < 0) throw new RangeError("targetStart out of bounds");
    if (r < 0 || r >= this.length) throw new RangeError("Index out of range");
    if (i < 0) throw new RangeError("sourceEnd out of bounds");
    i > this.length && (i = this.length),
      t.length - e < i - r && (i = t.length - e + r);
    let o = i - r;
    return (
      this === t && typeof Uint8Array.prototype.copyWithin == "function"
        ? this.copyWithin(e, r, i)
        : Uint8Array.prototype.set.call(t, this.subarray(r, i), e),
      o
    );
  };
  A.prototype.fill = function (t, e, r, i) {
    if (typeof t == "string") {
      if (
        (typeof e == "string"
          ? ((i = e), (e = 0), (r = this.length))
          : typeof r == "string" && ((i = r), (r = this.length)),
        i !== void 0 && typeof i != "string")
      )
        throw new TypeError("encoding must be a string");
      if (typeof i == "string" && !A.isEncoding(i))
        throw new TypeError("Unknown encoding: " + i);
      if (t.length === 1) {
        let s = t.charCodeAt(0);
        ((i === "utf8" && s < 128) || i === "latin1") && (t = s);
      }
    } else
      typeof t == "number"
        ? (t = t & 255)
        : typeof t == "boolean" && (t = Number(t));
    if (e < 0 || this.length < e || this.length < r)
      throw new RangeError("Out of range index");
    if (r <= e) return this;
    (e = e >>> 0), (r = r === void 0 ? this.length : r >>> 0), t || (t = 0);
    let o;
    if (typeof t == "number") for (o = e; o < r; ++o) this[o] = t;
    else {
      let s = A.isBuffer(t) ? t : A.from(t, i),
        f = s.length;
      if (f === 0)
        throw new TypeError(
          'The value "' + t + '" is invalid for argument "value"'
        );
      for (o = 0; o < r - e; ++o) this[o + e] = s[o % f];
    }
    return this;
  };
  var Mr = {};
  function bo(n, t, e) {
    Mr[n] = class extends e {
      constructor() {
        super(),
          Object.defineProperty(this, "message", {
            value: t.apply(this, arguments),
            writable: !0,
            configurable: !0,
          }),
          (this.name = `${this.name} [${n}]`),
          this.stack,
          delete this.name;
      }
      get code() {
        return n;
      }
      set code(i) {
        Object.defineProperty(this, "code", {
          configurable: !0,
          enumerable: !0,
          value: i,
          writable: !0,
        });
      }
      toString() {
        return `${this.name} [${n}]: ${this.message}`;
      }
    };
  }
  bo(
    "ERR_BUFFER_OUT_OF_BOUNDS",
    function (n) {
      return n
        ? `${n} is outside of buffer bounds`
        : "Attempt to access memory outside buffer bounds";
    },
    RangeError
  );
  bo(
    "ERR_INVALID_ARG_TYPE",
    function (n, t) {
      return `The "${n}" argument must be of type number. Received type ${typeof t}`;
    },
    TypeError
  );
  bo(
    "ERR_OUT_OF_RANGE",
    function (n, t, e) {
      let r = `The value of "${n}" is out of range.`,
        i = e;
      return (
        Number.isInteger(e) && Math.abs(e) > 2 ** 32
          ? (i = ha(String(e)))
          : typeof e == "bigint" &&
            ((i = String(e)),
            (e > BigInt(2) ** BigInt(32) || e < -(BigInt(2) ** BigInt(32))) &&
              (i = ha(i)),
            (i += "n")),
        (r += ` It must be ${t}. Received ${i}`),
        r
      );
    },
    RangeError
  );
  function ha(n) {
    let t = "",
      e = n.length,
      r = n[0] === "-" ? 1 : 0;
    for (; e >= r + 4; e -= 3) t = `_${n.slice(e - 3, e)}${t}`;
    return `${n.slice(0, e)}${t}`;
  }
  function sf(n, t, e) {
    Pr(t, "offset"),
      (n[t] === void 0 || n[t + e] === void 0) && tn(t, n.length - (e + 1));
  }
  function xa(n, t, e, r, i, o) {
    if (n > e || n < t) {
      let s = typeof t == "bigint" ? "n" : "",
        f;
      throw (
        (o > 3
          ? t === 0 || t === BigInt(0)
            ? (f = `>= 0${s} and < 2${s} ** ${(o + 1) * 8}${s}`)
            : (f = `>= -(2${s} ** ${(o + 1) * 8 - 1}${s}) and < 2 ** ${
                (o + 1) * 8 - 1
              }${s}`)
          : (f = `>= ${t}${s} and <= ${e}${s}`),
        new Mr.ERR_OUT_OF_RANGE("value", f, n))
      );
    }
    sf(r, i, o);
  }
  function Pr(n, t) {
    if (typeof n != "number") throw new Mr.ERR_INVALID_ARG_TYPE(t, "number", n);
  }
  function tn(n, t, e) {
    throw Math.floor(n) !== n
      ? (Pr(n, e), new Mr.ERR_OUT_OF_RANGE(e || "offset", "an integer", n))
      : t < 0
      ? new Mr.ERR_BUFFER_OUT_OF_BOUNDS()
      : new Mr.ERR_OUT_OF_RANGE(
          e || "offset",
          `>= ${e ? 1 : 0} and <= ${t}`,
          n
        );
  }
  var af = /[^+/0-9A-Za-z-_]/g;
  function uf(n) {
    if (((n = n.split("=")[0]), (n = n.trim().replace(af, "")), n.length < 2))
      return "";
    for (; n.length % 4 !== 0; ) n = n + "=";
    return n;
  }
  function go(n, t) {
    t = t || 1 / 0;
    let e,
      r = n.length,
      i = null,
      o = [];
    for (let s = 0; s < r; ++s) {
      if (((e = n.charCodeAt(s)), e > 55295 && e < 57344)) {
        if (!i) {
          if (e > 56319) {
            (t -= 3) > -1 && o.push(239, 191, 189);
            continue;
          } else if (s + 1 === r) {
            (t -= 3) > -1 && o.push(239, 191, 189);
            continue;
          }
          i = e;
          continue;
        }
        if (e < 56320) {
          (t -= 3) > -1 && o.push(239, 191, 189), (i = e);
          continue;
        }
        e = (((i - 55296) << 10) | (e - 56320)) + 65536;
      } else i && (t -= 3) > -1 && o.push(239, 191, 189);
      if (((i = null), e < 128)) {
        if ((t -= 1) < 0) break;
        o.push(e);
      } else if (e < 2048) {
        if ((t -= 2) < 0) break;
        o.push((e >> 6) | 192, (e & 63) | 128);
      } else if (e < 65536) {
        if ((t -= 3) < 0) break;
        o.push((e >> 12) | 224, ((e >> 6) & 63) | 128, (e & 63) | 128);
      } else if (e < 1114112) {
        if ((t -= 4) < 0) break;
        o.push(
          (e >> 18) | 240,
          ((e >> 12) & 63) | 128,
          ((e >> 6) & 63) | 128,
          (e & 63) | 128
        );
      } else throw new Error("Invalid code point");
    }
    return o;
  }
  function cf(n) {
    let t = [];
    for (let e = 0; e < n.length; ++e) t.push(n.charCodeAt(e) & 255);
    return t;
  }
  function ff(n, t) {
    let e,
      r,
      i,
      o = [];
    for (let s = 0; s < n.length && !((t -= 2) < 0); ++s)
      (e = n.charCodeAt(s)), (r = e >> 8), (i = e % 256), o.push(i), o.push(r);
    return o;
  }
  function Sa(n) {
    return lo.toByteArray(uf(n));
  }
  function Tn(n, t, e, r) {
    let i;
    for (i = 0; i < r && !(i + e >= t.length || i >= n.length); ++i)
      t[i + e] = n[i];
    return i;
  }
  function Ne(n, t) {
    return (
      n instanceof t ||
      (n != null &&
        n.constructor != null &&
        n.constructor.name != null &&
        n.constructor.name === t.name)
    );
  }
  function ko(n) {
    return n !== n;
  }
  var hf = (function () {
    let n = "0123456789abcdef",
      t = new Array(256);
    for (let e = 0; e < 16; ++e) {
      let r = e * 16;
      for (let i = 0; i < 16; ++i) t[r + i] = n[e] + n[i];
    }
    return t;
  })();
  function or(n) {
    return typeof BigInt > "u" ? lf : n;
  }
  function lf() {
    throw new Error("BigInt not supported");
  }
});
var Da = Ae((Or) => {
  "use strict";
  var Bo = co(),
    Fr = ho(),
    Ia =
      typeof Symbol == "function" && typeof Symbol.for == "function"
        ? Symbol.for("nodejs.util.inspect.custom")
        : null;
  Or.Buffer = R;
  Or.SlowBuffer = wf;
  Or.INSPECT_MAX_BYTES = 50;
  var Pn = 2147483647;
  Or.kMaxLength = Pn;
  R.TYPED_ARRAY_SUPPORT = df();
  !R.TYPED_ARRAY_SUPPORT &&
    typeof console < "u" &&
    typeof console.error == "function" &&
    console.error(
      "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
    );
  function df() {
    try {
      let n = new Uint8Array(1),
        t = {
          foo: function () {
            return 42;
          },
        };
      return (
        Object.setPrototypeOf(t, Uint8Array.prototype),
        Object.setPrototypeOf(n, t),
        n.foo() === 42
      );
    } catch {
      return !1;
    }
  }
  Object.defineProperty(R.prototype, "parent", {
    enumerable: !0,
    get: function () {
      if (R.isBuffer(this)) return this.buffer;
    },
  });
  Object.defineProperty(R.prototype, "offset", {
    enumerable: !0,
    get: function () {
      if (R.isBuffer(this)) return this.byteOffset;
    },
  });
  function Qe(n) {
    if (n > Pn)
      throw new RangeError(
        'The value "' + n + '" is invalid for option "size"'
      );
    let t = new Uint8Array(n);
    return Object.setPrototypeOf(t, R.prototype), t;
  }
  function R(n, t, e) {
    if (typeof n == "number") {
      if (typeof t == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      return vo(n);
    }
    return Aa(n, t, e);
  }
  R.poolSize = 8192;
  function Aa(n, t, e) {
    if (typeof n == "string") return yf(n, t);
    if (ArrayBuffer.isView(n)) return gf(n);
    if (n == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
          typeof n
      );
    if (
      Oe(n, ArrayBuffer) ||
      (n && Oe(n.buffer, ArrayBuffer)) ||
      (typeof SharedArrayBuffer < "u" &&
        (Oe(n, SharedArrayBuffer) || (n && Oe(n.buffer, SharedArrayBuffer))))
    )
      return So(n, t, e);
    if (typeof n == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    let r = n.valueOf && n.valueOf();
    if (r != null && r !== n) return R.from(r, t, e);
    let i = mf(n);
    if (i) return i;
    if (
      typeof Symbol < "u" &&
      Symbol.toPrimitive != null &&
      typeof n[Symbol.toPrimitive] == "function"
    )
      return R.from(n[Symbol.toPrimitive]("string"), t, e);
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
        typeof n
    );
  }
  R.from = function (n, t, e) {
    return Aa(n, t, e);
  };
  Object.setPrototypeOf(R.prototype, Uint8Array.prototype);
  Object.setPrototypeOf(R, Uint8Array);
  function Ra(n) {
    if (typeof n != "number")
      throw new TypeError('"size" argument must be of type number');
    if (n < 0)
      throw new RangeError(
        'The value "' + n + '" is invalid for option "size"'
      );
  }
  function pf(n, t, e) {
    return (
      Ra(n),
      n <= 0
        ? Qe(n)
        : t !== void 0
        ? typeof e == "string"
          ? Qe(n).fill(t, e)
          : Qe(n).fill(t)
        : Qe(n)
    );
  }
  R.alloc = function (n, t, e) {
    return pf(n, t, e);
  };
  function vo(n) {
    return Ra(n), Qe(n < 0 ? 0 : Eo(n) | 0);
  }
  R.allocUnsafe = function (n) {
    return vo(n);
  };
  R.allocUnsafeSlow = function (n) {
    return vo(n);
  };
  function yf(n, t) {
    if (((typeof t != "string" || t === "") && (t = "utf8"), !R.isEncoding(t)))
      throw new TypeError("Unknown encoding: " + t);
    let e = La(n, t) | 0,
      r = Qe(e),
      i = r.write(n, t);
    return i !== e && (r = r.slice(0, i)), r;
  }
  function xo(n) {
    let t = n.length < 0 ? 0 : Eo(n.length) | 0,
      e = Qe(t);
    for (let r = 0; r < t; r += 1) e[r] = n[r] & 255;
    return e;
  }
  function gf(n) {
    if (Oe(n, Uint8Array)) {
      let t = new Uint8Array(n);
      return So(t.buffer, t.byteOffset, t.byteLength);
    }
    return xo(n);
  }
  function So(n, t, e) {
    if (t < 0 || n.byteLength < t)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (n.byteLength < t + (e || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    let r;
    return (
      t === void 0 && e === void 0
        ? (r = new Uint8Array(n))
        : e === void 0
        ? (r = new Uint8Array(n, t))
        : (r = new Uint8Array(n, t, e)),
      Object.setPrototypeOf(r, R.prototype),
      r
    );
  }
  function mf(n) {
    if (R.isBuffer(n)) {
      let t = Eo(n.length) | 0,
        e = Qe(t);
      return e.length === 0 || n.copy(e, 0, 0, t), e;
    }
    if (n.length !== void 0)
      return typeof n.length != "number" || Ao(n.length) ? Qe(0) : xo(n);
    if (n.type === "Buffer" && Array.isArray(n.data)) return xo(n.data);
  }
  function Eo(n) {
    if (n >= Pn)
      throw new RangeError(
        "Attempt to allocate Buffer larger than maximum size: 0x" +
          Pn.toString(16) +
          " bytes"
      );
    return n | 0;
  }
  function wf(n) {
    return +n != n && (n = 0), R.alloc(+n);
  }
  R.isBuffer = function (t) {
    return t != null && t._isBuffer === !0 && t !== R.prototype;
  };
  R.compare = function (t, e) {
    if (
      (Oe(t, Uint8Array) && (t = R.from(t, t.offset, t.byteLength)),
      Oe(e, Uint8Array) && (e = R.from(e, e.offset, e.byteLength)),
      !R.isBuffer(t) || !R.isBuffer(e))
    )
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
      );
    if (t === e) return 0;
    let r = t.length,
      i = e.length;
    for (let o = 0, s = Math.min(r, i); o < s; ++o)
      if (t[o] !== e[o]) {
        (r = t[o]), (i = e[o]);
        break;
      }
    return r < i ? -1 : i < r ? 1 : 0;
  };
  R.isEncoding = function (t) {
    switch (String(t).toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return !0;
      default:
        return !1;
    }
  };
  R.concat = function (t, e) {
    if (!Array.isArray(t))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (t.length === 0) return R.alloc(0);
    let r;
    if (e === void 0) for (e = 0, r = 0; r < t.length; ++r) e += t[r].length;
    let i = R.allocUnsafe(e),
      o = 0;
    for (r = 0; r < t.length; ++r) {
      let s = t[r];
      if (Oe(s, Uint8Array))
        o + s.length > i.length
          ? (R.isBuffer(s) || (s = R.from(s)), s.copy(i, o))
          : Uint8Array.prototype.set.call(i, s, o);
      else if (R.isBuffer(s)) s.copy(i, o);
      else throw new TypeError('"list" argument must be an Array of Buffers');
      o += s.length;
    }
    return i;
  };
  function La(n, t) {
    if (R.isBuffer(n)) return n.length;
    if (ArrayBuffer.isView(n) || Oe(n, ArrayBuffer)) return n.byteLength;
    if (typeof n != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
          typeof n
      );
    let e = n.length,
      r = arguments.length > 2 && arguments[2] === !0;
    if (!r && e === 0) return 0;
    let i = !1;
    for (;;)
      switch (t) {
        case "ascii":
        case "latin1":
        case "binary":
          return e;
        case "utf8":
        case "utf-8":
          return Io(n).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return e * 2;
        case "hex":
          return e >>> 1;
        case "base64":
          return za(n).length;
        default:
          if (i) return r ? -1 : Io(n).length;
          (t = ("" + t).toLowerCase()), (i = !0);
      }
  }
  R.byteLength = La;
  function bf(n, t, e) {
    let r = !1;
    if (
      ((t === void 0 || t < 0) && (t = 0),
      t > this.length ||
        ((e === void 0 || e > this.length) && (e = this.length), e <= 0) ||
        ((e >>>= 0), (t >>>= 0), e <= t))
    )
      return "";
    for (n || (n = "utf8"); ; )
      switch (n) {
        case "hex":
          return Rf(this, t, e);
        case "utf8":
        case "utf-8":
          return Ta(this, t, e);
        case "ascii":
          return _f(this, t, e);
        case "latin1":
        case "binary":
          return Af(this, t, e);
        case "base64":
          return vf(this, t, e);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return Lf(this, t, e);
        default:
          if (r) throw new TypeError("Unknown encoding: " + n);
          (n = (n + "").toLowerCase()), (r = !0);
      }
  }
  R.prototype._isBuffer = !0;
  function mr(n, t, e) {
    let r = n[t];
    (n[t] = n[e]), (n[e] = r);
  }
  R.prototype.swap16 = function () {
    let t = this.length;
    if (t % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let e = 0; e < t; e += 2) mr(this, e, e + 1);
    return this;
  };
  R.prototype.swap32 = function () {
    let t = this.length;
    if (t % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let e = 0; e < t; e += 4) mr(this, e, e + 3), mr(this, e + 1, e + 2);
    return this;
  };
  R.prototype.swap64 = function () {
    let t = this.length;
    if (t % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let e = 0; e < t; e += 8)
      mr(this, e, e + 7),
        mr(this, e + 1, e + 6),
        mr(this, e + 2, e + 5),
        mr(this, e + 3, e + 4);
    return this;
  };
  R.prototype.toString = function () {
    let t = this.length;
    return t === 0
      ? ""
      : arguments.length === 0
      ? Ta(this, 0, t)
      : bf.apply(this, arguments);
  };
  R.prototype.toLocaleString = R.prototype.toString;
  R.prototype.equals = function (t) {
    if (!R.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
    return this === t ? !0 : R.compare(this, t) === 0;
  };
  R.prototype.inspect = function () {
    let t = "",
      e = Or.INSPECT_MAX_BYTES;
    return (
      (t = this.toString("hex", 0, e)
        .replace(/(.{2})/g, "$1 ")
        .trim()),
      this.length > e && (t += " ... "),
      "<Buffer " + t + ">"
    );
  };
  Ia && (R.prototype[Ia] = R.prototype.inspect);
  R.prototype.compare = function (t, e, r, i, o) {
    if (
      (Oe(t, Uint8Array) && (t = R.from(t, t.offset, t.byteLength)),
      !R.isBuffer(t))
    )
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
          typeof t
      );
    if (
      (e === void 0 && (e = 0),
      r === void 0 && (r = t ? t.length : 0),
      i === void 0 && (i = 0),
      o === void 0 && (o = this.length),
      e < 0 || r > t.length || i < 0 || o > this.length)
    )
      throw new RangeError("out of range index");
    if (i >= o && e >= r) return 0;
    if (i >= o) return -1;
    if (e >= r) return 1;
    if (((e >>>= 0), (r >>>= 0), (i >>>= 0), (o >>>= 0), this === t)) return 0;
    let s = o - i,
      f = r - e,
      h = Math.min(s, f),
      b = this.slice(i, o),
      B = t.slice(e, r);
    for (let S = 0; S < h; ++S)
      if (b[S] !== B[S]) {
        (s = b[S]), (f = B[S]);
        break;
      }
    return s < f ? -1 : f < s ? 1 : 0;
  };
  function Ma(n, t, e, r, i) {
    if (n.length === 0) return -1;
    if (
      (typeof e == "string"
        ? ((r = e), (e = 0))
        : e > 2147483647
        ? (e = 2147483647)
        : e < -2147483648 && (e = -2147483648),
      (e = +e),
      Ao(e) && (e = i ? 0 : n.length - 1),
      e < 0 && (e = n.length + e),
      e >= n.length)
    ) {
      if (i) return -1;
      e = n.length - 1;
    } else if (e < 0)
      if (i) e = 0;
      else return -1;
    if ((typeof t == "string" && (t = R.from(t, r)), R.isBuffer(t)))
      return t.length === 0 ? -1 : va(n, t, e, r, i);
    if (typeof t == "number")
      return (
        (t = t & 255),
        typeof Uint8Array.prototype.indexOf == "function"
          ? i
            ? Uint8Array.prototype.indexOf.call(n, t, e)
            : Uint8Array.prototype.lastIndexOf.call(n, t, e)
          : va(n, [t], e, r, i)
      );
    throw new TypeError("val must be string, number or Buffer");
  }
  function va(n, t, e, r, i) {
    let o = 1,
      s = n.length,
      f = t.length;
    if (
      r !== void 0 &&
      ((r = String(r).toLowerCase()),
      r === "ucs2" || r === "ucs-2" || r === "utf16le" || r === "utf-16le")
    ) {
      if (n.length < 2 || t.length < 2) return -1;
      (o = 2), (s /= 2), (f /= 2), (e /= 2);
    }
    function h(B, S) {
      return o === 1 ? B[S] : B.readUInt16BE(S * o);
    }
    let b;
    if (i) {
      let B = -1;
      for (b = e; b < s; b++)
        if (h(n, b) === h(t, B === -1 ? 0 : b - B)) {
          if ((B === -1 && (B = b), b - B + 1 === f)) return B * o;
        } else B !== -1 && (b -= b - B), (B = -1);
    } else
      for (e + f > s && (e = s - f), b = e; b >= 0; b--) {
        let B = !0;
        for (let S = 0; S < f; S++)
          if (h(n, b + S) !== h(t, S)) {
            B = !1;
            break;
          }
        if (B) return b;
      }
    return -1;
  }
  R.prototype.includes = function (t, e, r) {
    return this.indexOf(t, e, r) !== -1;
  };
  R.prototype.indexOf = function (t, e, r) {
    return Ma(this, t, e, r, !0);
  };
  R.prototype.lastIndexOf = function (t, e, r) {
    return Ma(this, t, e, r, !1);
  };
  function kf(n, t, e, r) {
    e = Number(e) || 0;
    let i = n.length - e;
    r ? ((r = Number(r)), r > i && (r = i)) : (r = i);
    let o = t.length;
    r > o / 2 && (r = o / 2);
    let s;
    for (s = 0; s < r; ++s) {
      let f = parseInt(t.substr(s * 2, 2), 16);
      if (Ao(f)) return s;
      n[e + s] = f;
    }
    return s;
  }
  function Bf(n, t, e, r) {
    return Cn(Io(t, n.length - e), n, e, r);
  }
  function xf(n, t, e, r) {
    return Cn(Cf(t), n, e, r);
  }
  function Sf(n, t, e, r) {
    return Cn(za(t), n, e, r);
  }
  function If(n, t, e, r) {
    return Cn(Uf(t, n.length - e), n, e, r);
  }
  R.prototype.write = function (t, e, r, i) {
    if (e === void 0) (i = "utf8"), (r = this.length), (e = 0);
    else if (r === void 0 && typeof e == "string")
      (i = e), (r = this.length), (e = 0);
    else if (isFinite(e))
      (e = e >>> 0),
        isFinite(r)
          ? ((r = r >>> 0), i === void 0 && (i = "utf8"))
          : ((i = r), (r = void 0));
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    let o = this.length - e;
    if (
      ((r === void 0 || r > o) && (r = o),
      (t.length > 0 && (r < 0 || e < 0)) || e > this.length)
    )
      throw new RangeError("Attempt to write outside buffer bounds");
    i || (i = "utf8");
    let s = !1;
    for (;;)
      switch (i) {
        case "hex":
          return kf(this, t, e, r);
        case "utf8":
        case "utf-8":
          return Bf(this, t, e, r);
        case "ascii":
        case "latin1":
        case "binary":
          return xf(this, t, e, r);
        case "base64":
          return Sf(this, t, e, r);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return If(this, t, e, r);
        default:
          if (s) throw new TypeError("Unknown encoding: " + i);
          (i = ("" + i).toLowerCase()), (s = !0);
      }
  };
  R.prototype.toJSON = function () {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0),
    };
  };
  function vf(n, t, e) {
    return t === 0 && e === n.length
      ? Bo.fromByteArray(n)
      : Bo.fromByteArray(n.slice(t, e));
  }
  function Ta(n, t, e) {
    e = Math.min(n.length, e);
    let r = [],
      i = t;
    for (; i < e; ) {
      let o = n[i],
        s = null,
        f = o > 239 ? 4 : o > 223 ? 3 : o > 191 ? 2 : 1;
      if (i + f <= e) {
        let h, b, B, S;
        switch (f) {
          case 1:
            o < 128 && (s = o);
            break;
          case 2:
            (h = n[i + 1]),
              (h & 192) === 128 &&
                ((S = ((o & 31) << 6) | (h & 63)), S > 127 && (s = S));
            break;
          case 3:
            (h = n[i + 1]),
              (b = n[i + 2]),
              (h & 192) === 128 &&
                (b & 192) === 128 &&
                ((S = ((o & 15) << 12) | ((h & 63) << 6) | (b & 63)),
                S > 2047 && (S < 55296 || S > 57343) && (s = S));
            break;
          case 4:
            (h = n[i + 1]),
              (b = n[i + 2]),
              (B = n[i + 3]),
              (h & 192) === 128 &&
                (b & 192) === 128 &&
                (B & 192) === 128 &&
                ((S =
                  ((o & 15) << 18) |
                  ((h & 63) << 12) |
                  ((b & 63) << 6) |
                  (B & 63)),
                S > 65535 && S < 1114112 && (s = S));
        }
      }
      s === null
        ? ((s = 65533), (f = 1))
        : s > 65535 &&
          ((s -= 65536),
          r.push(((s >>> 10) & 1023) | 55296),
          (s = 56320 | (s & 1023))),
        r.push(s),
        (i += f);
    }
    return Ef(r);
  }
  var Ea = 4096;
  function Ef(n) {
    let t = n.length;
    if (t <= Ea) return String.fromCharCode.apply(String, n);
    let e = "",
      r = 0;
    for (; r < t; )
      e += String.fromCharCode.apply(String, n.slice(r, (r += Ea)));
    return e;
  }
  function _f(n, t, e) {
    let r = "";
    e = Math.min(n.length, e);
    for (let i = t; i < e; ++i) r += String.fromCharCode(n[i] & 127);
    return r;
  }
  function Af(n, t, e) {
    let r = "";
    e = Math.min(n.length, e);
    for (let i = t; i < e; ++i) r += String.fromCharCode(n[i]);
    return r;
  }
  function Rf(n, t, e) {
    let r = n.length;
    (!t || t < 0) && (t = 0), (!e || e < 0 || e > r) && (e = r);
    let i = "";
    for (let o = t; o < e; ++o) i += Ff[n[o]];
    return i;
  }
  function Lf(n, t, e) {
    let r = n.slice(t, e),
      i = "";
    for (let o = 0; o < r.length - 1; o += 2)
      i += String.fromCharCode(r[o] + r[o + 1] * 256);
    return i;
  }
  R.prototype.slice = function (t, e) {
    let r = this.length;
    (t = ~~t),
      (e = e === void 0 ? r : ~~e),
      t < 0 ? ((t += r), t < 0 && (t = 0)) : t > r && (t = r),
      e < 0 ? ((e += r), e < 0 && (e = 0)) : e > r && (e = r),
      e < t && (e = t);
    let i = this.subarray(t, e);
    return Object.setPrototypeOf(i, R.prototype), i;
  };
  function ce(n, t, e) {
    if (n % 1 !== 0 || n < 0) throw new RangeError("offset is not uint");
    if (n + t > e)
      throw new RangeError("Trying to access beyond buffer length");
  }
  R.prototype.readUintLE = R.prototype.readUIntLE = function (t, e, r) {
    (t = t >>> 0), (e = e >>> 0), r || ce(t, e, this.length);
    let i = this[t],
      o = 1,
      s = 0;
    for (; ++s < e && (o *= 256); ) i += this[t + s] * o;
    return i;
  };
  R.prototype.readUintBE = R.prototype.readUIntBE = function (t, e, r) {
    (t = t >>> 0), (e = e >>> 0), r || ce(t, e, this.length);
    let i = this[t + --e],
      o = 1;
    for (; e > 0 && (o *= 256); ) i += this[t + --e] * o;
    return i;
  };
  R.prototype.readUint8 = R.prototype.readUInt8 = function (t, e) {
    return (t = t >>> 0), e || ce(t, 1, this.length), this[t];
  };
  R.prototype.readUint16LE = R.prototype.readUInt16LE = function (t, e) {
    return (
      (t = t >>> 0), e || ce(t, 2, this.length), this[t] | (this[t + 1] << 8)
    );
  };
  R.prototype.readUint16BE = R.prototype.readUInt16BE = function (t, e) {
    return (
      (t = t >>> 0), e || ce(t, 2, this.length), (this[t] << 8) | this[t + 1]
    );
  };
  R.prototype.readUint32LE = R.prototype.readUInt32LE = function (t, e) {
    return (
      (t = t >>> 0),
      e || ce(t, 4, this.length),
      (this[t] | (this[t + 1] << 8) | (this[t + 2] << 16)) +
        this[t + 3] * 16777216
    );
  };
  R.prototype.readUint32BE = R.prototype.readUInt32BE = function (t, e) {
    return (
      (t = t >>> 0),
      e || ce(t, 4, this.length),
      this[t] * 16777216 +
        ((this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3])
    );
  };
  R.prototype.readBigUInt64LE = sr(function (t) {
    (t = t >>> 0), Nr(t, "offset");
    let e = this[t],
      r = this[t + 7];
    (e === void 0 || r === void 0) && rn(t, this.length - 8);
    let i = e + this[++t] * 2 ** 8 + this[++t] * 2 ** 16 + this[++t] * 2 ** 24,
      o = this[++t] + this[++t] * 2 ** 8 + this[++t] * 2 ** 16 + r * 2 ** 24;
    return BigInt(i) + (BigInt(o) << BigInt(32));
  });
  R.prototype.readBigUInt64BE = sr(function (t) {
    (t = t >>> 0), Nr(t, "offset");
    let e = this[t],
      r = this[t + 7];
    (e === void 0 || r === void 0) && rn(t, this.length - 8);
    let i = e * 2 ** 24 + this[++t] * 2 ** 16 + this[++t] * 2 ** 8 + this[++t],
      o = this[++t] * 2 ** 24 + this[++t] * 2 ** 16 + this[++t] * 2 ** 8 + r;
    return (BigInt(i) << BigInt(32)) + BigInt(o);
  });
  R.prototype.readIntLE = function (t, e, r) {
    (t = t >>> 0), (e = e >>> 0), r || ce(t, e, this.length);
    let i = this[t],
      o = 1,
      s = 0;
    for (; ++s < e && (o *= 256); ) i += this[t + s] * o;
    return (o *= 128), i >= o && (i -= Math.pow(2, 8 * e)), i;
  };
  R.prototype.readIntBE = function (t, e, r) {
    (t = t >>> 0), (e = e >>> 0), r || ce(t, e, this.length);
    let i = e,
      o = 1,
      s = this[t + --i];
    for (; i > 0 && (o *= 256); ) s += this[t + --i] * o;
    return (o *= 128), s >= o && (s -= Math.pow(2, 8 * e)), s;
  };
  R.prototype.readInt8 = function (t, e) {
    return (
      (t = t >>> 0),
      e || ce(t, 1, this.length),
      this[t] & 128 ? (255 - this[t] + 1) * -1 : this[t]
    );
  };
  R.prototype.readInt16LE = function (t, e) {
    (t = t >>> 0), e || ce(t, 2, this.length);
    let r = this[t] | (this[t + 1] << 8);
    return r & 32768 ? r | 4294901760 : r;
  };
  R.prototype.readInt16BE = function (t, e) {
    (t = t >>> 0), e || ce(t, 2, this.length);
    let r = this[t + 1] | (this[t] << 8);
    return r & 32768 ? r | 4294901760 : r;
  };
  R.prototype.readInt32LE = function (t, e) {
    return (
      (t = t >>> 0),
      e || ce(t, 4, this.length),
      this[t] | (this[t + 1] << 8) | (this[t + 2] << 16) | (this[t + 3] << 24)
    );
  };
  R.prototype.readInt32BE = function (t, e) {
    return (
      (t = t >>> 0),
      e || ce(t, 4, this.length),
      (this[t] << 24) | (this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3]
    );
  };
  R.prototype.readBigInt64LE = sr(function (t) {
    (t = t >>> 0), Nr(t, "offset");
    let e = this[t],
      r = this[t + 7];
    (e === void 0 || r === void 0) && rn(t, this.length - 8);
    let i =
      this[t + 4] + this[t + 5] * 2 ** 8 + this[t + 6] * 2 ** 16 + (r << 24);
    return (
      (BigInt(i) << BigInt(32)) +
      BigInt(e + this[++t] * 2 ** 8 + this[++t] * 2 ** 16 + this[++t] * 2 ** 24)
    );
  });
  R.prototype.readBigInt64BE = sr(function (t) {
    (t = t >>> 0), Nr(t, "offset");
    let e = this[t],
      r = this[t + 7];
    (e === void 0 || r === void 0) && rn(t, this.length - 8);
    let i = (e << 24) + this[++t] * 2 ** 16 + this[++t] * 2 ** 8 + this[++t];
    return (
      (BigInt(i) << BigInt(32)) +
      BigInt(this[++t] * 2 ** 24 + this[++t] * 2 ** 16 + this[++t] * 2 ** 8 + r)
    );
  });
  R.prototype.readFloatLE = function (t, e) {
    return (
      (t = t >>> 0), e || ce(t, 4, this.length), Fr.read(this, t, !0, 23, 4)
    );
  };
  R.prototype.readFloatBE = function (t, e) {
    return (
      (t = t >>> 0), e || ce(t, 4, this.length), Fr.read(this, t, !1, 23, 4)
    );
  };
  R.prototype.readDoubleLE = function (t, e) {
    return (
      (t = t >>> 0), e || ce(t, 8, this.length), Fr.read(this, t, !0, 52, 8)
    );
  };
  R.prototype.readDoubleBE = function (t, e) {
    return (
      (t = t >>> 0), e || ce(t, 8, this.length), Fr.read(this, t, !1, 52, 8)
    );
  };
  function Ie(n, t, e, r, i, o) {
    if (!R.isBuffer(n))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (t > i || t < o)
      throw new RangeError('"value" argument is out of bounds');
    if (e + r > n.length) throw new RangeError("Index out of range");
  }
  R.prototype.writeUintLE = R.prototype.writeUIntLE = function (t, e, r, i) {
    if (((t = +t), (e = e >>> 0), (r = r >>> 0), !i)) {
      let f = Math.pow(2, 8 * r) - 1;
      Ie(this, t, e, r, f, 0);
    }
    let o = 1,
      s = 0;
    for (this[e] = t & 255; ++s < r && (o *= 256); )
      this[e + s] = (t / o) & 255;
    return e + r;
  };
  R.prototype.writeUintBE = R.prototype.writeUIntBE = function (t, e, r, i) {
    if (((t = +t), (e = e >>> 0), (r = r >>> 0), !i)) {
      let f = Math.pow(2, 8 * r) - 1;
      Ie(this, t, e, r, f, 0);
    }
    let o = r - 1,
      s = 1;
    for (this[e + o] = t & 255; --o >= 0 && (s *= 256); )
      this[e + o] = (t / s) & 255;
    return e + r;
  };
  R.prototype.writeUint8 = R.prototype.writeUInt8 = function (t, e, r) {
    return (
      (t = +t),
      (e = e >>> 0),
      r || Ie(this, t, e, 1, 255, 0),
      (this[e] = t & 255),
      e + 1
    );
  };
  R.prototype.writeUint16LE = R.prototype.writeUInt16LE = function (t, e, r) {
    return (
      (t = +t),
      (e = e >>> 0),
      r || Ie(this, t, e, 2, 65535, 0),
      (this[e] = t & 255),
      (this[e + 1] = t >>> 8),
      e + 2
    );
  };
  R.prototype.writeUint16BE = R.prototype.writeUInt16BE = function (t, e, r) {
    return (
      (t = +t),
      (e = e >>> 0),
      r || Ie(this, t, e, 2, 65535, 0),
      (this[e] = t >>> 8),
      (this[e + 1] = t & 255),
      e + 2
    );
  };
  R.prototype.writeUint32LE = R.prototype.writeUInt32LE = function (t, e, r) {
    return (
      (t = +t),
      (e = e >>> 0),
      r || Ie(this, t, e, 4, 4294967295, 0),
      (this[e + 3] = t >>> 24),
      (this[e + 2] = t >>> 16),
      (this[e + 1] = t >>> 8),
      (this[e] = t & 255),
      e + 4
    );
  };
  R.prototype.writeUint32BE = R.prototype.writeUInt32BE = function (t, e, r) {
    return (
      (t = +t),
      (e = e >>> 0),
      r || Ie(this, t, e, 4, 4294967295, 0),
      (this[e] = t >>> 24),
      (this[e + 1] = t >>> 16),
      (this[e + 2] = t >>> 8),
      (this[e + 3] = t & 255),
      e + 4
    );
  };
  function Pa(n, t, e, r, i) {
    Oa(t, r, i, n, e, 7);
    let o = Number(t & BigInt(4294967295));
    (n[e++] = o),
      (o = o >> 8),
      (n[e++] = o),
      (o = o >> 8),
      (n[e++] = o),
      (o = o >> 8),
      (n[e++] = o);
    let s = Number((t >> BigInt(32)) & BigInt(4294967295));
    return (
      (n[e++] = s),
      (s = s >> 8),
      (n[e++] = s),
      (s = s >> 8),
      (n[e++] = s),
      (s = s >> 8),
      (n[e++] = s),
      e
    );
  }
  function Ca(n, t, e, r, i) {
    Oa(t, r, i, n, e, 7);
    let o = Number(t & BigInt(4294967295));
    (n[e + 7] = o),
      (o = o >> 8),
      (n[e + 6] = o),
      (o = o >> 8),
      (n[e + 5] = o),
      (o = o >> 8),
      (n[e + 4] = o);
    let s = Number((t >> BigInt(32)) & BigInt(4294967295));
    return (
      (n[e + 3] = s),
      (s = s >> 8),
      (n[e + 2] = s),
      (s = s >> 8),
      (n[e + 1] = s),
      (s = s >> 8),
      (n[e] = s),
      e + 8
    );
  }
  R.prototype.writeBigUInt64LE = sr(function (t, e = 0) {
    return Pa(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"));
  });
  R.prototype.writeBigUInt64BE = sr(function (t, e = 0) {
    return Ca(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"));
  });
  R.prototype.writeIntLE = function (t, e, r, i) {
    if (((t = +t), (e = e >>> 0), !i)) {
      let h = Math.pow(2, 8 * r - 1);
      Ie(this, t, e, r, h - 1, -h);
    }
    let o = 0,
      s = 1,
      f = 0;
    for (this[e] = t & 255; ++o < r && (s *= 256); )
      t < 0 && f === 0 && this[e + o - 1] !== 0 && (f = 1),
        (this[e + o] = (((t / s) >> 0) - f) & 255);
    return e + r;
  };
  R.prototype.writeIntBE = function (t, e, r, i) {
    if (((t = +t), (e = e >>> 0), !i)) {
      let h = Math.pow(2, 8 * r - 1);
      Ie(this, t, e, r, h - 1, -h);
    }
    let o = r - 1,
      s = 1,
      f = 0;
    for (this[e + o] = t & 255; --o >= 0 && (s *= 256); )
      t < 0 && f === 0 && this[e + o + 1] !== 0 && (f = 1),
        (this[e + o] = (((t / s) >> 0) - f) & 255);
    return e + r;
  };
  R.prototype.writeInt8 = function (t, e, r) {
    return (
      (t = +t),
      (e = e >>> 0),
      r || Ie(this, t, e, 1, 127, -128),
      t < 0 && (t = 255 + t + 1),
      (this[e] = t & 255),
      e + 1
    );
  };
  R.prototype.writeInt16LE = function (t, e, r) {
    return (
      (t = +t),
      (e = e >>> 0),
      r || Ie(this, t, e, 2, 32767, -32768),
      (this[e] = t & 255),
      (this[e + 1] = t >>> 8),
      e + 2
    );
  };
  R.prototype.writeInt16BE = function (t, e, r) {
    return (
      (t = +t),
      (e = e >>> 0),
      r || Ie(this, t, e, 2, 32767, -32768),
      (this[e] = t >>> 8),
      (this[e + 1] = t & 255),
      e + 2
    );
  };
  R.prototype.writeInt32LE = function (t, e, r) {
    return (
      (t = +t),
      (e = e >>> 0),
      r || Ie(this, t, e, 4, 2147483647, -2147483648),
      (this[e] = t & 255),
      (this[e + 1] = t >>> 8),
      (this[e + 2] = t >>> 16),
      (this[e + 3] = t >>> 24),
      e + 4
    );
  };
  R.prototype.writeInt32BE = function (t, e, r) {
    return (
      (t = +t),
      (e = e >>> 0),
      r || Ie(this, t, e, 4, 2147483647, -2147483648),
      t < 0 && (t = 4294967295 + t + 1),
      (this[e] = t >>> 24),
      (this[e + 1] = t >>> 16),
      (this[e + 2] = t >>> 8),
      (this[e + 3] = t & 255),
      e + 4
    );
  };
  R.prototype.writeBigInt64LE = sr(function (t, e = 0) {
    return Pa(
      this,
      t,
      e,
      -BigInt("0x8000000000000000"),
      BigInt("0x7fffffffffffffff")
    );
  });
  R.prototype.writeBigInt64BE = sr(function (t, e = 0) {
    return Ca(
      this,
      t,
      e,
      -BigInt("0x8000000000000000"),
      BigInt("0x7fffffffffffffff")
    );
  });
  function Ua(n, t, e, r, i, o) {
    if (e + r > n.length) throw new RangeError("Index out of range");
    if (e < 0) throw new RangeError("Index out of range");
  }
  function Fa(n, t, e, r, i) {
    return (
      (t = +t),
      (e = e >>> 0),
      i || Ua(n, t, e, 4, 34028234663852886e22, -34028234663852886e22),
      Fr.write(n, t, e, r, 23, 4),
      e + 4
    );
  }
  R.prototype.writeFloatLE = function (t, e, r) {
    return Fa(this, t, e, !0, r);
  };
  R.prototype.writeFloatBE = function (t, e, r) {
    return Fa(this, t, e, !1, r);
  };
  function Na(n, t, e, r, i) {
    return (
      (t = +t),
      (e = e >>> 0),
      i || Ua(n, t, e, 8, 17976931348623157e292, -17976931348623157e292),
      Fr.write(n, t, e, r, 52, 8),
      e + 8
    );
  }
  R.prototype.writeDoubleLE = function (t, e, r) {
    return Na(this, t, e, !0, r);
  };
  R.prototype.writeDoubleBE = function (t, e, r) {
    return Na(this, t, e, !1, r);
  };
  R.prototype.copy = function (t, e, r, i) {
    if (!R.isBuffer(t)) throw new TypeError("argument should be a Buffer");
    if (
      (r || (r = 0),
      !i && i !== 0 && (i = this.length),
      e >= t.length && (e = t.length),
      e || (e = 0),
      i > 0 && i < r && (i = r),
      i === r || t.length === 0 || this.length === 0)
    )
      return 0;
    if (e < 0) throw new RangeError("targetStart out of bounds");
    if (r < 0 || r >= this.length) throw new RangeError("Index out of range");
    if (i < 0) throw new RangeError("sourceEnd out of bounds");
    i > this.length && (i = this.length),
      t.length - e < i - r && (i = t.length - e + r);
    let o = i - r;
    return (
      this === t && typeof Uint8Array.prototype.copyWithin == "function"
        ? this.copyWithin(e, r, i)
        : Uint8Array.prototype.set.call(t, this.subarray(r, i), e),
      o
    );
  };
  R.prototype.fill = function (t, e, r, i) {
    if (typeof t == "string") {
      if (
        (typeof e == "string"
          ? ((i = e), (e = 0), (r = this.length))
          : typeof r == "string" && ((i = r), (r = this.length)),
        i !== void 0 && typeof i != "string")
      )
        throw new TypeError("encoding must be a string");
      if (typeof i == "string" && !R.isEncoding(i))
        throw new TypeError("Unknown encoding: " + i);
      if (t.length === 1) {
        let s = t.charCodeAt(0);
        ((i === "utf8" && s < 128) || i === "latin1") && (t = s);
      }
    } else
      typeof t == "number"
        ? (t = t & 255)
        : typeof t == "boolean" && (t = Number(t));
    if (e < 0 || this.length < e || this.length < r)
      throw new RangeError("Out of range index");
    if (r <= e) return this;
    (e = e >>> 0), (r = r === void 0 ? this.length : r >>> 0), t || (t = 0);
    let o;
    if (typeof t == "number") for (o = e; o < r; ++o) this[o] = t;
    else {
      let s = R.isBuffer(t) ? t : R.from(t, i),
        f = s.length;
      if (f === 0)
        throw new TypeError(
          'The value "' + t + '" is invalid for argument "value"'
        );
      for (o = 0; o < r - e; ++o) this[o + e] = s[o % f];
    }
    return this;
  };
  var Ur = {};
  function _o(n, t, e) {
    Ur[n] = class extends e {
      constructor() {
        super(),
          Object.defineProperty(this, "message", {
            value: t.apply(this, arguments),
            writable: !0,
            configurable: !0,
          }),
          (this.name = `${this.name} [${n}]`),
          this.stack,
          delete this.name;
      }
      get code() {
        return n;
      }
      set code(i) {
        Object.defineProperty(this, "code", {
          configurable: !0,
          enumerable: !0,
          value: i,
          writable: !0,
        });
      }
      toString() {
        return `${this.name} [${n}]: ${this.message}`;
      }
    };
  }
  _o(
    "ERR_BUFFER_OUT_OF_BOUNDS",
    function (n) {
      return n
        ? `${n} is outside of buffer bounds`
        : "Attempt to access memory outside buffer bounds";
    },
    RangeError
  );
  _o(
    "ERR_INVALID_ARG_TYPE",
    function (n, t) {
      return `The "${n}" argument must be of type number. Received type ${typeof t}`;
    },
    TypeError
  );
  _o(
    "ERR_OUT_OF_RANGE",
    function (n, t, e) {
      let r = `The value of "${n}" is out of range.`,
        i = e;
      return (
        Number.isInteger(e) && Math.abs(e) > 2 ** 32
          ? (i = _a(String(e)))
          : typeof e == "bigint" &&
            ((i = String(e)),
            (e > BigInt(2) ** BigInt(32) || e < -(BigInt(2) ** BigInt(32))) &&
              (i = _a(i)),
            (i += "n")),
        (r += ` It must be ${t}. Received ${i}`),
        r
      );
    },
    RangeError
  );
  function _a(n) {
    let t = "",
      e = n.length,
      r = n[0] === "-" ? 1 : 0;
    for (; e >= r + 4; e -= 3) t = `_${n.slice(e - 3, e)}${t}`;
    return `${n.slice(0, e)}${t}`;
  }
  function Mf(n, t, e) {
    Nr(t, "offset"),
      (n[t] === void 0 || n[t + e] === void 0) && rn(t, n.length - (e + 1));
  }
  function Oa(n, t, e, r, i, o) {
    if (n > e || n < t) {
      let s = typeof t == "bigint" ? "n" : "",
        f;
      throw (
        (o > 3
          ? t === 0 || t === BigInt(0)
            ? (f = `>= 0${s} and < 2${s} ** ${(o + 1) * 8}${s}`)
            : (f = `>= -(2${s} ** ${(o + 1) * 8 - 1}${s}) and < 2 ** ${
                (o + 1) * 8 - 1
              }${s}`)
          : (f = `>= ${t}${s} and <= ${e}${s}`),
        new Ur.ERR_OUT_OF_RANGE("value", f, n))
      );
    }
    Mf(r, i, o);
  }
  function Nr(n, t) {
    if (typeof n != "number") throw new Ur.ERR_INVALID_ARG_TYPE(t, "number", n);
  }
  function rn(n, t, e) {
    throw Math.floor(n) !== n
      ? (Nr(n, e), new Ur.ERR_OUT_OF_RANGE(e || "offset", "an integer", n))
      : t < 0
      ? new Ur.ERR_BUFFER_OUT_OF_BOUNDS()
      : new Ur.ERR_OUT_OF_RANGE(
          e || "offset",
          `>= ${e ? 1 : 0} and <= ${t}`,
          n
        );
  }
  var Tf = /[^+/0-9A-Za-z-_]/g;
  function Pf(n) {
    if (((n = n.split("=")[0]), (n = n.trim().replace(Tf, "")), n.length < 2))
      return "";
    for (; n.length % 4 !== 0; ) n = n + "=";
    return n;
  }
  function Io(n, t) {
    t = t || 1 / 0;
    let e,
      r = n.length,
      i = null,
      o = [];
    for (let s = 0; s < r; ++s) {
      if (((e = n.charCodeAt(s)), e > 55295 && e < 57344)) {
        if (!i) {
          if (e > 56319) {
            (t -= 3) > -1 && o.push(239, 191, 189);
            continue;
          } else if (s + 1 === r) {
            (t -= 3) > -1 && o.push(239, 191, 189);
            continue;
          }
          i = e;
          continue;
        }
        if (e < 56320) {
          (t -= 3) > -1 && o.push(239, 191, 189), (i = e);
          continue;
        }
        e = (((i - 55296) << 10) | (e - 56320)) + 65536;
      } else i && (t -= 3) > -1 && o.push(239, 191, 189);
      if (((i = null), e < 128)) {
        if ((t -= 1) < 0) break;
        o.push(e);
      } else if (e < 2048) {
        if ((t -= 2) < 0) break;
        o.push((e >> 6) | 192, (e & 63) | 128);
      } else if (e < 65536) {
        if ((t -= 3) < 0) break;
        o.push((e >> 12) | 224, ((e >> 6) & 63) | 128, (e & 63) | 128);
      } else if (e < 1114112) {
        if ((t -= 4) < 0) break;
        o.push(
          (e >> 18) | 240,
          ((e >> 12) & 63) | 128,
          ((e >> 6) & 63) | 128,
          (e & 63) | 128
        );
      } else throw new Error("Invalid code point");
    }
    return o;
  }
  function Cf(n) {
    let t = [];
    for (let e = 0; e < n.length; ++e) t.push(n.charCodeAt(e) & 255);
    return t;
  }
  function Uf(n, t) {
    let e,
      r,
      i,
      o = [];
    for (let s = 0; s < n.length && !((t -= 2) < 0); ++s)
      (e = n.charCodeAt(s)), (r = e >> 8), (i = e % 256), o.push(i), o.push(r);
    return o;
  }
  function za(n) {
    return Bo.toByteArray(Pf(n));
  }
  function Cn(n, t, e, r) {
    let i;
    for (i = 0; i < r && !(i + e >= t.length || i >= n.length); ++i)
      t[i + e] = n[i];
    return i;
  }
  function Oe(n, t) {
    return (
      n instanceof t ||
      (n != null &&
        n.constructor != null &&
        n.constructor.name != null &&
        n.constructor.name === t.name)
    );
  }
  function Ao(n) {
    return n !== n;
  }
  var Ff = (function () {
    let n = "0123456789abcdef",
      t = new Array(256);
    for (let e = 0; e < 16; ++e) {
      let r = e * 16;
      for (let i = 0; i < 16; ++i) t[r + i] = n[e] + n[i];
    }
    return t;
  })();
  function sr(n) {
    return typeof BigInt > "u" ? Nf : n;
  }
  function Nf() {
    throw new Error("BigInt not supported");
  }
});
var Lo = Ae((Ka, Ro) => {
  "use strict";
  (function (n, t) {
    "use strict";
    function e(m, a) {
      if (!m) throw new Error(a || "Assertion failed");
    }
    function r(m, a) {
      m.super_ = a;
      var c = function () {};
      (c.prototype = a.prototype),
        (m.prototype = new c()),
        (m.prototype.constructor = m);
    }
    function i(m, a, c) {
      if (i.isBN(m)) return m;
      (this.negative = 0),
        (this.words = null),
        (this.length = 0),
        (this.red = null),
        m !== null &&
          ((a === "le" || a === "be") && ((c = a), (a = 10)),
          this._init(m || 0, a || 10, c || "be"));
    }
    typeof n == "object" ? (n.exports = i) : (t.BN = i),
      (i.BN = i),
      (i.wordSize = 26);
    var o;
    try {
      typeof window < "u" && typeof window.Buffer < "u"
        ? (o = window.Buffer)
        : (o = Da().Buffer);
    } catch {}
    (i.isBN = function (a) {
      return a instanceof i
        ? !0
        : a !== null &&
            typeof a == "object" &&
            a.constructor.wordSize === i.wordSize &&
            Array.isArray(a.words);
    }),
      (i.max = function (a, c) {
        return a.cmp(c) > 0 ? a : c;
      }),
      (i.min = function (a, c) {
        return a.cmp(c) < 0 ? a : c;
      }),
      (i.prototype._init = function (a, c, l) {
        if (typeof a == "number") return this._initNumber(a, c, l);
        if (typeof a == "object") return this._initArray(a, c, l);
        c === "hex" && (c = 16),
          e(c === (c | 0) && c >= 2 && c <= 36),
          (a = a.toString().replace(/\s+/g, ""));
        var d = 0;
        a[0] === "-" && (d++, (this.negative = 1)),
          d < a.length &&
            (c === 16
              ? this._parseHex(a, d, l)
              : (this._parseBase(a, c, d),
                l === "le" && this._initArray(this.toArray(), c, l)));
      }),
      (i.prototype._initNumber = function (a, c, l) {
        a < 0 && ((this.negative = 1), (a = -a)),
          a < 67108864
            ? ((this.words = [a & 67108863]), (this.length = 1))
            : a < 4503599627370496
            ? ((this.words = [a & 67108863, (a / 67108864) & 67108863]),
              (this.length = 2))
            : (e(a < 9007199254740992),
              (this.words = [a & 67108863, (a / 67108864) & 67108863, 1]),
              (this.length = 3)),
          l === "le" && this._initArray(this.toArray(), c, l);
      }),
      (i.prototype._initArray = function (a, c, l) {
        if ((e(typeof a.length == "number"), a.length <= 0))
          return (this.words = [0]), (this.length = 1), this;
        (this.length = Math.ceil(a.length / 3)),
          (this.words = new Array(this.length));
        for (var d = 0; d < this.length; d++) this.words[d] = 0;
        var p,
          k,
          x = 0;
        if (l === "be")
          for (d = a.length - 1, p = 0; d >= 0; d -= 3)
            (k = a[d] | (a[d - 1] << 8) | (a[d - 2] << 16)),
              (this.words[p] |= (k << x) & 67108863),
              (this.words[p + 1] = (k >>> (26 - x)) & 67108863),
              (x += 24),
              x >= 26 && ((x -= 26), p++);
        else if (l === "le")
          for (d = 0, p = 0; d < a.length; d += 3)
            (k = a[d] | (a[d + 1] << 8) | (a[d + 2] << 16)),
              (this.words[p] |= (k << x) & 67108863),
              (this.words[p + 1] = (k >>> (26 - x)) & 67108863),
              (x += 24),
              x >= 26 && ((x -= 26), p++);
        return this._strip();
      });
    function s(m, a) {
      var c = m.charCodeAt(a);
      if (c >= 48 && c <= 57) return c - 48;
      if (c >= 65 && c <= 70) return c - 55;
      if (c >= 97 && c <= 102) return c - 87;
      e(!1, "Invalid character in " + m);
    }
    function f(m, a, c) {
      var l = s(m, c);
      return c - 1 >= a && (l |= s(m, c - 1) << 4), l;
    }
    i.prototype._parseHex = function (a, c, l) {
      (this.length = Math.ceil((a.length - c) / 6)),
        (this.words = new Array(this.length));
      for (var d = 0; d < this.length; d++) this.words[d] = 0;
      var p = 0,
        k = 0,
        x;
      if (l === "be")
        for (d = a.length - 1; d >= c; d -= 2)
          (x = f(a, c, d) << p),
            (this.words[k] |= x & 67108863),
            p >= 18
              ? ((p -= 18), (k += 1), (this.words[k] |= x >>> 26))
              : (p += 8);
      else {
        var y = a.length - c;
        for (d = y % 2 === 0 ? c + 1 : c; d < a.length; d += 2)
          (x = f(a, c, d) << p),
            (this.words[k] |= x & 67108863),
            p >= 18
              ? ((p -= 18), (k += 1), (this.words[k] |= x >>> 26))
              : (p += 8);
      }
      this._strip();
    };
    function h(m, a, c, l) {
      for (var d = 0, p = 0, k = Math.min(m.length, c), x = a; x < k; x++) {
        var y = m.charCodeAt(x) - 48;
        (d *= l),
          y >= 49 ? (p = y - 49 + 10) : y >= 17 ? (p = y - 17 + 10) : (p = y),
          e(y >= 0 && p < l, "Invalid character"),
          (d += p);
      }
      return d;
    }
    (i.prototype._parseBase = function (a, c, l) {
      (this.words = [0]), (this.length = 1);
      for (var d = 0, p = 1; p <= 67108863; p *= c) d++;
      d--, (p = (p / c) | 0);
      for (
        var k = a.length - l,
          x = k % d,
          y = Math.min(k, k - x) + l,
          u = 0,
          w = l;
        w < y;
        w += d
      )
        (u = h(a, w, w + d, c)),
          this.imuln(p),
          this.words[0] + u < 67108864 ? (this.words[0] += u) : this._iaddn(u);
      if (x !== 0) {
        var V = 1;
        for (u = h(a, w, a.length, c), w = 0; w < x; w++) V *= c;
        this.imuln(V),
          this.words[0] + u < 67108864 ? (this.words[0] += u) : this._iaddn(u);
      }
      this._strip();
    }),
      (i.prototype.copy = function (a) {
        a.words = new Array(this.length);
        for (var c = 0; c < this.length; c++) a.words[c] = this.words[c];
        (a.length = this.length),
          (a.negative = this.negative),
          (a.red = this.red);
      });
    function b(m, a) {
      (m.words = a.words),
        (m.length = a.length),
        (m.negative = a.negative),
        (m.red = a.red);
    }
    if (
      ((i.prototype._move = function (a) {
        b(a, this);
      }),
      (i.prototype.clone = function () {
        var a = new i(null);
        return this.copy(a), a;
      }),
      (i.prototype._expand = function (a) {
        for (; this.length < a; ) this.words[this.length++] = 0;
        return this;
      }),
      (i.prototype._strip = function () {
        for (; this.length > 1 && this.words[this.length - 1] === 0; )
          this.length--;
        return this._normSign();
      }),
      (i.prototype._normSign = function () {
        return (
          this.length === 1 && this.words[0] === 0 && (this.negative = 0), this
        );
      }),
      typeof Symbol < "u" && typeof Symbol.for == "function")
    )
      try {
        i.prototype[Symbol.for("nodejs.util.inspect.custom")] = B;
      } catch {
        i.prototype.inspect = B;
      }
    else i.prototype.inspect = B;
    function B() {
      return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
    }
    var S = [
        "",
        "0",
        "00",
        "000",
        "0000",
        "00000",
        "000000",
        "0000000",
        "00000000",
        "000000000",
        "0000000000",
        "00000000000",
        "000000000000",
        "0000000000000",
        "00000000000000",
        "000000000000000",
        "0000000000000000",
        "00000000000000000",
        "000000000000000000",
        "0000000000000000000",
        "00000000000000000000",
        "000000000000000000000",
        "0000000000000000000000",
        "00000000000000000000000",
        "000000000000000000000000",
        "0000000000000000000000000",
      ],
      U = [
        0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5,
        5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
      ],
      _ = [
        0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607,
        16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536,
        11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101,
        5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368,
        20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875,
        60466176,
      ];
    (i.prototype.toString = function (a, c) {
      (a = a || 10), (c = c | 0 || 1);
      var l;
      if (a === 16 || a === "hex") {
        l = "";
        for (var d = 0, p = 0, k = 0; k < this.length; k++) {
          var x = this.words[k],
            y = (((x << d) | p) & 16777215).toString(16);
          (p = (x >>> (24 - d)) & 16777215),
            (d += 2),
            d >= 26 && ((d -= 26), k--),
            p !== 0 || k !== this.length - 1
              ? (l = S[6 - y.length] + y + l)
              : (l = y + l);
        }
        for (p !== 0 && (l = p.toString(16) + l); l.length % c !== 0; )
          l = "0" + l;
        return this.negative !== 0 && (l = "-" + l), l;
      }
      if (a === (a | 0) && a >= 2 && a <= 36) {
        var u = U[a],
          w = _[a];
        l = "";
        var V = this.clone();
        for (V.negative = 0; !V.isZero(); ) {
          var G = V.modrn(w).toString(a);
          (V = V.idivn(w)),
            V.isZero() ? (l = G + l) : (l = S[u - G.length] + G + l);
        }
        for (this.isZero() && (l = "0" + l); l.length % c !== 0; ) l = "0" + l;
        return this.negative !== 0 && (l = "-" + l), l;
      }
      e(!1, "Base should be between 2 and 36");
    }),
      (i.prototype.toNumber = function () {
        var a = this.words[0];
        return (
          this.length === 2
            ? (a += this.words[1] * 67108864)
            : this.length === 3 && this.words[2] === 1
            ? (a += 4503599627370496 + this.words[1] * 67108864)
            : this.length > 2 &&
              e(!1, "Number can only safely store up to 53 bits"),
          this.negative !== 0 ? -a : a
        );
      }),
      (i.prototype.toJSON = function () {
        return this.toString(16, 2);
      }),
      o &&
        (i.prototype.toBuffer = function (a, c) {
          return this.toArrayLike(o, a, c);
        }),
      (i.prototype.toArray = function (a, c) {
        return this.toArrayLike(Array, a, c);
      });
    var E = function (a, c) {
      return a.allocUnsafe ? a.allocUnsafe(c) : new a(c);
    };
    (i.prototype.toArrayLike = function (a, c, l) {
      this._strip();
      var d = this.byteLength(),
        p = l || Math.max(1, d);
      e(d <= p, "byte array longer than desired length"),
        e(p > 0, "Requested array length <= 0");
      var k = E(a, p),
        x = c === "le" ? "LE" : "BE";
      return this["_toArrayLike" + x](k, d), k;
    }),
      (i.prototype._toArrayLikeLE = function (a, c) {
        for (var l = 0, d = 0, p = 0, k = 0; p < this.length; p++) {
          var x = (this.words[p] << k) | d;
          (a[l++] = x & 255),
            l < a.length && (a[l++] = (x >> 8) & 255),
            l < a.length && (a[l++] = (x >> 16) & 255),
            k === 6
              ? (l < a.length && (a[l++] = (x >> 24) & 255), (d = 0), (k = 0))
              : ((d = x >>> 24), (k += 2));
        }
        if (l < a.length) for (a[l++] = d; l < a.length; ) a[l++] = 0;
      }),
      (i.prototype._toArrayLikeBE = function (a, c) {
        for (var l = a.length - 1, d = 0, p = 0, k = 0; p < this.length; p++) {
          var x = (this.words[p] << k) | d;
          (a[l--] = x & 255),
            l >= 0 && (a[l--] = (x >> 8) & 255),
            l >= 0 && (a[l--] = (x >> 16) & 255),
            k === 6
              ? (l >= 0 && (a[l--] = (x >> 24) & 255), (d = 0), (k = 0))
              : ((d = x >>> 24), (k += 2));
        }
        if (l >= 0) for (a[l--] = d; l >= 0; ) a[l--] = 0;
      }),
      Math.clz32
        ? (i.prototype._countBits = function (a) {
            return 32 - Math.clz32(a);
          })
        : (i.prototype._countBits = function (a) {
            var c = a,
              l = 0;
            return (
              c >= 4096 && ((l += 13), (c >>>= 13)),
              c >= 64 && ((l += 7), (c >>>= 7)),
              c >= 8 && ((l += 4), (c >>>= 4)),
              c >= 2 && ((l += 2), (c >>>= 2)),
              l + c
            );
          }),
      (i.prototype._zeroBits = function (a) {
        if (a === 0) return 26;
        var c = a,
          l = 0;
        return (
          c & 8191 || ((l += 13), (c >>>= 13)),
          c & 127 || ((l += 7), (c >>>= 7)),
          c & 15 || ((l += 4), (c >>>= 4)),
          c & 3 || ((l += 2), (c >>>= 2)),
          c & 1 || l++,
          l
        );
      }),
      (i.prototype.bitLength = function () {
        var a = this.words[this.length - 1],
          c = this._countBits(a);
        return (this.length - 1) * 26 + c;
      });
    function T(m) {
      for (var a = new Array(m.bitLength()), c = 0; c < a.length; c++) {
        var l = (c / 26) | 0,
          d = c % 26;
        a[c] = (m.words[l] >>> d) & 1;
      }
      return a;
    }
    (i.prototype.zeroBits = function () {
      if (this.isZero()) return 0;
      for (var a = 0, c = 0; c < this.length; c++) {
        var l = this._zeroBits(this.words[c]);
        if (((a += l), l !== 26)) break;
      }
      return a;
    }),
      (i.prototype.byteLength = function () {
        return Math.ceil(this.bitLength() / 8);
      }),
      (i.prototype.toTwos = function (a) {
        return this.negative !== 0
          ? this.abs().inotn(a).iaddn(1)
          : this.clone();
      }),
      (i.prototype.fromTwos = function (a) {
        return this.testn(a - 1) ? this.notn(a).iaddn(1).ineg() : this.clone();
      }),
      (i.prototype.isNeg = function () {
        return this.negative !== 0;
      }),
      (i.prototype.neg = function () {
        return this.clone().ineg();
      }),
      (i.prototype.ineg = function () {
        return this.isZero() || (this.negative ^= 1), this;
      }),
      (i.prototype.iuor = function (a) {
        for (; this.length < a.length; ) this.words[this.length++] = 0;
        for (var c = 0; c < a.length; c++)
          this.words[c] = this.words[c] | a.words[c];
        return this._strip();
      }),
      (i.prototype.ior = function (a) {
        return e((this.negative | a.negative) === 0), this.iuor(a);
      }),
      (i.prototype.or = function (a) {
        return this.length > a.length
          ? this.clone().ior(a)
          : a.clone().ior(this);
      }),
      (i.prototype.uor = function (a) {
        return this.length > a.length
          ? this.clone().iuor(a)
          : a.clone().iuor(this);
      }),
      (i.prototype.iuand = function (a) {
        var c;
        this.length > a.length ? (c = a) : (c = this);
        for (var l = 0; l < c.length; l++)
          this.words[l] = this.words[l] & a.words[l];
        return (this.length = c.length), this._strip();
      }),
      (i.prototype.iand = function (a) {
        return e((this.negative | a.negative) === 0), this.iuand(a);
      }),
      (i.prototype.and = function (a) {
        return this.length > a.length
          ? this.clone().iand(a)
          : a.clone().iand(this);
      }),
      (i.prototype.uand = function (a) {
        return this.length > a.length
          ? this.clone().iuand(a)
          : a.clone().iuand(this);
      }),
      (i.prototype.iuxor = function (a) {
        var c, l;
        this.length > a.length ? ((c = this), (l = a)) : ((c = a), (l = this));
        for (var d = 0; d < l.length; d++)
          this.words[d] = c.words[d] ^ l.words[d];
        if (this !== c) for (; d < c.length; d++) this.words[d] = c.words[d];
        return (this.length = c.length), this._strip();
      }),
      (i.prototype.ixor = function (a) {
        return e((this.negative | a.negative) === 0), this.iuxor(a);
      }),
      (i.prototype.xor = function (a) {
        return this.length > a.length
          ? this.clone().ixor(a)
          : a.clone().ixor(this);
      }),
      (i.prototype.uxor = function (a) {
        return this.length > a.length
          ? this.clone().iuxor(a)
          : a.clone().iuxor(this);
      }),
      (i.prototype.inotn = function (a) {
        e(typeof a == "number" && a >= 0);
        var c = Math.ceil(a / 26) | 0,
          l = a % 26;
        this._expand(c), l > 0 && c--;
        for (var d = 0; d < c; d++) this.words[d] = ~this.words[d] & 67108863;
        return (
          l > 0 && (this.words[d] = ~this.words[d] & (67108863 >> (26 - l))),
          this._strip()
        );
      }),
      (i.prototype.notn = function (a) {
        return this.clone().inotn(a);
      }),
      (i.prototype.setn = function (a, c) {
        e(typeof a == "number" && a >= 0);
        var l = (a / 26) | 0,
          d = a % 26;
        return (
          this._expand(l + 1),
          c
            ? (this.words[l] = this.words[l] | (1 << d))
            : (this.words[l] = this.words[l] & ~(1 << d)),
          this._strip()
        );
      }),
      (i.prototype.iadd = function (a) {
        var c;
        if (this.negative !== 0 && a.negative === 0)
          return (
            (this.negative = 0),
            (c = this.isub(a)),
            (this.negative ^= 1),
            this._normSign()
          );
        if (this.negative === 0 && a.negative !== 0)
          return (
            (a.negative = 0),
            (c = this.isub(a)),
            (a.negative = 1),
            c._normSign()
          );
        var l, d;
        this.length > a.length ? ((l = this), (d = a)) : ((l = a), (d = this));
        for (var p = 0, k = 0; k < d.length; k++)
          (c = (l.words[k] | 0) + (d.words[k] | 0) + p),
            (this.words[k] = c & 67108863),
            (p = c >>> 26);
        for (; p !== 0 && k < l.length; k++)
          (c = (l.words[k] | 0) + p),
            (this.words[k] = c & 67108863),
            (p = c >>> 26);
        if (((this.length = l.length), p !== 0))
          (this.words[this.length] = p), this.length++;
        else if (l !== this)
          for (; k < l.length; k++) this.words[k] = l.words[k];
        return this;
      }),
      (i.prototype.add = function (a) {
        var c;
        return a.negative !== 0 && this.negative === 0
          ? ((a.negative = 0), (c = this.sub(a)), (a.negative ^= 1), c)
          : a.negative === 0 && this.negative !== 0
          ? ((this.negative = 0), (c = a.sub(this)), (this.negative = 1), c)
          : this.length > a.length
          ? this.clone().iadd(a)
          : a.clone().iadd(this);
      }),
      (i.prototype.isub = function (a) {
        if (a.negative !== 0) {
          a.negative = 0;
          var c = this.iadd(a);
          return (a.negative = 1), c._normSign();
        } else if (this.negative !== 0)
          return (
            (this.negative = 0),
            this.iadd(a),
            (this.negative = 1),
            this._normSign()
          );
        var l = this.cmp(a);
        if (l === 0)
          return (
            (this.negative = 0), (this.length = 1), (this.words[0] = 0), this
          );
        var d, p;
        l > 0 ? ((d = this), (p = a)) : ((d = a), (p = this));
        for (var k = 0, x = 0; x < p.length; x++)
          (c = (d.words[x] | 0) - (p.words[x] | 0) + k),
            (k = c >> 26),
            (this.words[x] = c & 67108863);
        for (; k !== 0 && x < d.length; x++)
          (c = (d.words[x] | 0) + k),
            (k = c >> 26),
            (this.words[x] = c & 67108863);
        if (k === 0 && x < d.length && d !== this)
          for (; x < d.length; x++) this.words[x] = d.words[x];
        return (
          (this.length = Math.max(this.length, x)),
          d !== this && (this.negative = 1),
          this._strip()
        );
      }),
      (i.prototype.sub = function (a) {
        return this.clone().isub(a);
      });
    function C(m, a, c) {
      c.negative = a.negative ^ m.negative;
      var l = (m.length + a.length) | 0;
      (c.length = l), (l = (l - 1) | 0);
      var d = m.words[0] | 0,
        p = a.words[0] | 0,
        k = d * p,
        x = k & 67108863,
        y = (k / 67108864) | 0;
      c.words[0] = x;
      for (var u = 1; u < l; u++) {
        for (
          var w = y >>> 26,
            V = y & 67108863,
            G = Math.min(u, a.length - 1),
            Y = Math.max(0, u - m.length + 1);
          Y <= G;
          Y++
        ) {
          var et = (u - Y) | 0;
          (d = m.words[et] | 0),
            (p = a.words[Y] | 0),
            (k = d * p + V),
            (w += (k / 67108864) | 0),
            (V = k & 67108863);
        }
        (c.words[u] = V | 0), (y = w | 0);
      }
      return y !== 0 ? (c.words[u] = y | 0) : c.length--, c._strip();
    }
    var L = function (a, c, l) {
      var d = a.words,
        p = c.words,
        k = l.words,
        x = 0,
        y,
        u,
        w,
        V = d[0] | 0,
        G = V & 8191,
        Y = V >>> 13,
        et = d[1] | 0,
        pt = et & 8191,
        bt = et >>> 13,
        ir = d[2] | 0,
        kt = ir & 8191,
        St = ir >>> 13,
        Cs = d[3] | 0,
        At = Cs & 8191,
        Rt = Cs >>> 13,
        Us = d[4] | 0,
        Lt = Us & 8191,
        Mt = Us >>> 13,
        Fs = d[5] | 0,
        Tt = Fs & 8191,
        Pt = Fs >>> 13,
        Ns = d[6] | 0,
        Ct = Ns & 8191,
        Ut = Ns >>> 13,
        Os = d[7] | 0,
        Ft = Os & 8191,
        Nt = Os >>> 13,
        zs = d[8] | 0,
        Ot = zs & 8191,
        zt = zs >>> 13,
        Ds = d[9] | 0,
        Dt = Ds & 8191,
        Kt = Ds >>> 13,
        Ks = p[0] | 0,
        Wt = Ks & 8191,
        qt = Ks >>> 13,
        Ws = p[1] | 0,
        $t = Ws & 8191,
        Vt = Ws >>> 13,
        qs = p[2] | 0,
        Ht = qs & 8191,
        Gt = qs >>> 13,
        $s = p[3] | 0,
        jt = $s & 8191,
        Yt = $s >>> 13,
        Vs = p[4] | 0,
        Zt = Vs & 8191,
        Jt = Vs >>> 13,
        Hs = p[5] | 0,
        Xt = Hs & 8191,
        Qt = Hs >>> 13,
        Gs = p[6] | 0,
        te = Gs & 8191,
        ee = Gs >>> 13,
        js = p[7] | 0,
        re = js & 8191,
        ne = js >>> 13,
        Ys = p[8] | 0,
        ie = Ys & 8191,
        oe = Ys >>> 13,
        Zs = p[9] | 0,
        se = Zs & 8191,
        ae = Zs >>> 13;
      (l.negative = a.negative ^ c.negative),
        (l.length = 19),
        (y = Math.imul(G, Wt)),
        (u = Math.imul(G, qt)),
        (u = (u + Math.imul(Y, Wt)) | 0),
        (w = Math.imul(Y, qt));
      var Pi = (((x + y) | 0) + ((u & 8191) << 13)) | 0;
      (x = (((w + (u >>> 13)) | 0) + (Pi >>> 26)) | 0),
        (Pi &= 67108863),
        (y = Math.imul(pt, Wt)),
        (u = Math.imul(pt, qt)),
        (u = (u + Math.imul(bt, Wt)) | 0),
        (w = Math.imul(bt, qt)),
        (y = (y + Math.imul(G, $t)) | 0),
        (u = (u + Math.imul(G, Vt)) | 0),
        (u = (u + Math.imul(Y, $t)) | 0),
        (w = (w + Math.imul(Y, Vt)) | 0);
      var Ci = (((x + y) | 0) + ((u & 8191) << 13)) | 0;
      (x = (((w + (u >>> 13)) | 0) + (Ci >>> 26)) | 0),
        (Ci &= 67108863),
        (y = Math.imul(kt, Wt)),
        (u = Math.imul(kt, qt)),
        (u = (u + Math.imul(St, Wt)) | 0),
        (w = Math.imul(St, qt)),
        (y = (y + Math.imul(pt, $t)) | 0),
        (u = (u + Math.imul(pt, Vt)) | 0),
        (u = (u + Math.imul(bt, $t)) | 0),
        (w = (w + Math.imul(bt, Vt)) | 0),
        (y = (y + Math.imul(G, Ht)) | 0),
        (u = (u + Math.imul(G, Gt)) | 0),
        (u = (u + Math.imul(Y, Ht)) | 0),
        (w = (w + Math.imul(Y, Gt)) | 0);
      var Ui = (((x + y) | 0) + ((u & 8191) << 13)) | 0;
      (x = (((w + (u >>> 13)) | 0) + (Ui >>> 26)) | 0),
        (Ui &= 67108863),
        (y = Math.imul(At, Wt)),
        (u = Math.imul(At, qt)),
        (u = (u + Math.imul(Rt, Wt)) | 0),
        (w = Math.imul(Rt, qt)),
        (y = (y + Math.imul(kt, $t)) | 0),
        (u = (u + Math.imul(kt, Vt)) | 0),
        (u = (u + Math.imul(St, $t)) | 0),
        (w = (w + Math.imul(St, Vt)) | 0),
        (y = (y + Math.imul(pt, Ht)) | 0),
        (u = (u + Math.imul(pt, Gt)) | 0),
        (u = (u + Math.imul(bt, Ht)) | 0),
        (w = (w + Math.imul(bt, Gt)) | 0),
        (y = (y + Math.imul(G, jt)) | 0),
        (u = (u + Math.imul(G, Yt)) | 0),
        (u = (u + Math.imul(Y, jt)) | 0),
        (w = (w + Math.imul(Y, Yt)) | 0);
      var Fi = (((x + y) | 0) + ((u & 8191) << 13)) | 0;
      (x = (((w + (u >>> 13)) | 0) + (Fi >>> 26)) | 0),
        (Fi &= 67108863),
        (y = Math.imul(Lt, Wt)),
        (u = Math.imul(Lt, qt)),
        (u = (u + Math.imul(Mt, Wt)) | 0),
        (w = Math.imul(Mt, qt)),
        (y = (y + Math.imul(At, $t)) | 0),
        (u = (u + Math.imul(At, Vt)) | 0),
        (u = (u + Math.imul(Rt, $t)) | 0),
        (w = (w + Math.imul(Rt, Vt)) | 0),
        (y = (y + Math.imul(kt, Ht)) | 0),
        (u = (u + Math.imul(kt, Gt)) | 0),
        (u = (u + Math.imul(St, Ht)) | 0),
        (w = (w + Math.imul(St, Gt)) | 0),
        (y = (y + Math.imul(pt, jt)) | 0),
        (u = (u + Math.imul(pt, Yt)) | 0),
        (u = (u + Math.imul(bt, jt)) | 0),
        (w = (w + Math.imul(bt, Yt)) | 0),
        (y = (y + Math.imul(G, Zt)) | 0),
        (u = (u + Math.imul(G, Jt)) | 0),
        (u = (u + Math.imul(Y, Zt)) | 0),
        (w = (w + Math.imul(Y, Jt)) | 0);
      var Ni = (((x + y) | 0) + ((u & 8191) << 13)) | 0;
      (x = (((w + (u >>> 13)) | 0) + (Ni >>> 26)) | 0),
        (Ni &= 67108863),
        (y = Math.imul(Tt, Wt)),
        (u = Math.imul(Tt, qt)),
        (u = (u + Math.imul(Pt, Wt)) | 0),
        (w = Math.imul(Pt, qt)),
        (y = (y + Math.imul(Lt, $t)) | 0),
        (u = (u + Math.imul(Lt, Vt)) | 0),
        (u = (u + Math.imul(Mt, $t)) | 0),
        (w = (w + Math.imul(Mt, Vt)) | 0),
        (y = (y + Math.imul(At, Ht)) | 0),
        (u = (u + Math.imul(At, Gt)) | 0),
        (u = (u + Math.imul(Rt, Ht)) | 0),
        (w = (w + Math.imul(Rt, Gt)) | 0),
        (y = (y + Math.imul(kt, jt)) | 0),
        (u = (u + Math.imul(kt, Yt)) | 0),
        (u = (u + Math.imul(St, jt)) | 0),
        (w = (w + Math.imul(St, Yt)) | 0),
        (y = (y + Math.imul(pt, Zt)) | 0),
        (u = (u + Math.imul(pt, Jt)) | 0),
        (u = (u + Math.imul(bt, Zt)) | 0),
        (w = (w + Math.imul(bt, Jt)) | 0),
        (y = (y + Math.imul(G, Xt)) | 0),
        (u = (u + Math.imul(G, Qt)) | 0),
        (u = (u + Math.imul(Y, Xt)) | 0),
        (w = (w + Math.imul(Y, Qt)) | 0);
      var Oi = (((x + y) | 0) + ((u & 8191) << 13)) | 0;
      (x = (((w + (u >>> 13)) | 0) + (Oi >>> 26)) | 0),
        (Oi &= 67108863),
        (y = Math.imul(Ct, Wt)),
        (u = Math.imul(Ct, qt)),
        (u = (u + Math.imul(Ut, Wt)) | 0),
        (w = Math.imul(Ut, qt)),
        (y = (y + Math.imul(Tt, $t)) | 0),
        (u = (u + Math.imul(Tt, Vt)) | 0),
        (u = (u + Math.imul(Pt, $t)) | 0),
        (w = (w + Math.imul(Pt, Vt)) | 0),
        (y = (y + Math.imul(Lt, Ht)) | 0),
        (u = (u + Math.imul(Lt, Gt)) | 0),
        (u = (u + Math.imul(Mt, Ht)) | 0),
        (w = (w + Math.imul(Mt, Gt)) | 0),
        (y = (y + Math.imul(At, jt)) | 0),
        (u = (u + Math.imul(At, Yt)) | 0),
        (u = (u + Math.imul(Rt, jt)) | 0),
        (w = (w + Math.imul(Rt, Yt)) | 0),
        (y = (y + Math.imul(kt, Zt)) | 0),
        (u = (u + Math.imul(kt, Jt)) | 0),
        (u = (u + Math.imul(St, Zt)) | 0),
        (w = (w + Math.imul(St, Jt)) | 0),
        (y = (y + Math.imul(pt, Xt)) | 0),
        (u = (u + Math.imul(pt, Qt)) | 0),
        (u = (u + Math.imul(bt, Xt)) | 0),
        (w = (w + Math.imul(bt, Qt)) | 0),
        (y = (y + Math.imul(G, te)) | 0),
        (u = (u + Math.imul(G, ee)) | 0),
        (u = (u + Math.imul(Y, te)) | 0),
        (w = (w + Math.imul(Y, ee)) | 0);
      var zi = (((x + y) | 0) + ((u & 8191) << 13)) | 0;
      (x = (((w + (u >>> 13)) | 0) + (zi >>> 26)) | 0),
        (zi &= 67108863),
        (y = Math.imul(Ft, Wt)),
        (u = Math.imul(Ft, qt)),
        (u = (u + Math.imul(Nt, Wt)) | 0),
        (w = Math.imul(Nt, qt)),
        (y = (y + Math.imul(Ct, $t)) | 0),
        (u = (u + Math.imul(Ct, Vt)) | 0),
        (u = (u + Math.imul(Ut, $t)) | 0),
        (w = (w + Math.imul(Ut, Vt)) | 0),
        (y = (y + Math.imul(Tt, Ht)) | 0),
        (u = (u + Math.imul(Tt, Gt)) | 0),
        (u = (u + Math.imul(Pt, Ht)) | 0),
        (w = (w + Math.imul(Pt, Gt)) | 0),
        (y = (y + Math.imul(Lt, jt)) | 0),
        (u = (u + Math.imul(Lt, Yt)) | 0),
        (u = (u + Math.imul(Mt, jt)) | 0),
        (w = (w + Math.imul(Mt, Yt)) | 0),
        (y = (y + Math.imul(At, Zt)) | 0),
        (u = (u + Math.imul(At, Jt)) | 0),
        (u = (u + Math.imul(Rt, Zt)) | 0),
        (w = (w + Math.imul(Rt, Jt)) | 0),
        (y = (y + Math.imul(kt, Xt)) | 0),
        (u = (u + Math.imul(kt, Qt)) | 0),
        (u = (u + Math.imul(St, Xt)) | 0),
        (w = (w + Math.imul(St, Qt)) | 0),
        (y = (y + Math.imul(pt, te)) | 0),
        (u = (u + Math.imul(pt, ee)) | 0),
        (u = (u + Math.imul(bt, te)) | 0),
        (w = (w + Math.imul(bt, ee)) | 0),
        (y = (y + Math.imul(G, re)) | 0),
        (u = (u + Math.imul(G, ne)) | 0),
        (u = (u + Math.imul(Y, re)) | 0),
        (w = (w + Math.imul(Y, ne)) | 0);
      var Di = (((x + y) | 0) + ((u & 8191) << 13)) | 0;
      (x = (((w + (u >>> 13)) | 0) + (Di >>> 26)) | 0),
        (Di &= 67108863),
        (y = Math.imul(Ot, Wt)),
        (u = Math.imul(Ot, qt)),
        (u = (u + Math.imul(zt, Wt)) | 0),
        (w = Math.imul(zt, qt)),
        (y = (y + Math.imul(Ft, $t)) | 0),
        (u = (u + Math.imul(Ft, Vt)) | 0),
        (u = (u + Math.imul(Nt, $t)) | 0),
        (w = (w + Math.imul(Nt, Vt)) | 0),
        (y = (y + Math.imul(Ct, Ht)) | 0),
        (u = (u + Math.imul(Ct, Gt)) | 0),
        (u = (u + Math.imul(Ut, Ht)) | 0),
        (w = (w + Math.imul(Ut, Gt)) | 0),
        (y = (y + Math.imul(Tt, jt)) | 0),
        (u = (u + Math.imul(Tt, Yt)) | 0),
        (u = (u + Math.imul(Pt, jt)) | 0),
        (w = (w + Math.imul(Pt, Yt)) | 0),
        (y = (y + Math.imul(Lt, Zt)) | 0),
        (u = (u + Math.imul(Lt, Jt)) | 0),
        (u = (u + Math.imul(Mt, Zt)) | 0),
        (w = (w + Math.imul(Mt, Jt)) | 0),
        (y = (y + Math.imul(At, Xt)) | 0),
        (u = (u + Math.imul(At, Qt)) | 0),
        (u = (u + Math.imul(Rt, Xt)) | 0),
        (w = (w + Math.imul(Rt, Qt)) | 0),
        (y = (y + Math.imul(kt, te)) | 0),
        (u = (u + Math.imul(kt, ee)) | 0),
        (u = (u + Math.imul(St, te)) | 0),
        (w = (w + Math.imul(St, ee)) | 0),
        (y = (y + Math.imul(pt, re)) | 0),
        (u = (u + Math.imul(pt, ne)) | 0),
        (u = (u + Math.imul(bt, re)) | 0),
        (w = (w + Math.imul(bt, ne)) | 0),
        (y = (y + Math.imul(G, ie)) | 0),
        (u = (u + Math.imul(G, oe)) | 0),
        (u = (u + Math.imul(Y, ie)) | 0),
        (w = (w + Math.imul(Y, oe)) | 0);
      var Ki = (((x + y) | 0) + ((u & 8191) << 13)) | 0;
      (x = (((w + (u >>> 13)) | 0) + (Ki >>> 26)) | 0),
        (Ki &= 67108863),
        (y = Math.imul(Dt, Wt)),
        (u = Math.imul(Dt, qt)),
        (u = (u + Math.imul(Kt, Wt)) | 0),
        (w = Math.imul(Kt, qt)),
        (y = (y + Math.imul(Ot, $t)) | 0),
        (u = (u + Math.imul(Ot, Vt)) | 0),
        (u = (u + Math.imul(zt, $t)) | 0),
        (w = (w + Math.imul(zt, Vt)) | 0),
        (y = (y + Math.imul(Ft, Ht)) | 0),
        (u = (u + Math.imul(Ft, Gt)) | 0),
        (u = (u + Math.imul(Nt, Ht)) | 0),
        (w = (w + Math.imul(Nt, Gt)) | 0),
        (y = (y + Math.imul(Ct, jt)) | 0),
        (u = (u + Math.imul(Ct, Yt)) | 0),
        (u = (u + Math.imul(Ut, jt)) | 0),
        (w = (w + Math.imul(Ut, Yt)) | 0),
        (y = (y + Math.imul(Tt, Zt)) | 0),
        (u = (u + Math.imul(Tt, Jt)) | 0),
        (u = (u + Math.imul(Pt, Zt)) | 0),
        (w = (w + Math.imul(Pt, Jt)) | 0),
        (y = (y + Math.imul(Lt, Xt)) | 0),
        (u = (u + Math.imul(Lt, Qt)) | 0),
        (u = (u + Math.imul(Mt, Xt)) | 0),
        (w = (w + Math.imul(Mt, Qt)) | 0),
        (y = (y + Math.imul(At, te)) | 0),
        (u = (u + Math.imul(At, ee)) | 0),
        (u = (u + Math.imul(Rt, te)) | 0),
        (w = (w + Math.imul(Rt, ee)) | 0),
        (y = (y + Math.imul(kt, re)) | 0),
        (u = (u + Math.imul(kt, ne)) | 0),
        (u = (u + Math.imul(St, re)) | 0),
        (w = (w + Math.imul(St, ne)) | 0),
        (y = (y + Math.imul(pt, ie)) | 0),
        (u = (u + Math.imul(pt, oe)) | 0),
        (u = (u + Math.imul(bt, ie)) | 0),
        (w = (w + Math.imul(bt, oe)) | 0),
        (y = (y + Math.imul(G, se)) | 0),
        (u = (u + Math.imul(G, ae)) | 0),
        (u = (u + Math.imul(Y, se)) | 0),
        (w = (w + Math.imul(Y, ae)) | 0);
      var Wi = (((x + y) | 0) + ((u & 8191) << 13)) | 0;
      (x = (((w + (u >>> 13)) | 0) + (Wi >>> 26)) | 0),
        (Wi &= 67108863),
        (y = Math.imul(Dt, $t)),
        (u = Math.imul(Dt, Vt)),
        (u = (u + Math.imul(Kt, $t)) | 0),
        (w = Math.imul(Kt, Vt)),
        (y = (y + Math.imul(Ot, Ht)) | 0),
        (u = (u + Math.imul(Ot, Gt)) | 0),
        (u = (u + Math.imul(zt, Ht)) | 0),
        (w = (w + Math.imul(zt, Gt)) | 0),
        (y = (y + Math.imul(Ft, jt)) | 0),
        (u = (u + Math.imul(Ft, Yt)) | 0),
        (u = (u + Math.imul(Nt, jt)) | 0),
        (w = (w + Math.imul(Nt, Yt)) | 0),
        (y = (y + Math.imul(Ct, Zt)) | 0),
        (u = (u + Math.imul(Ct, Jt)) | 0),
        (u = (u + Math.imul(Ut, Zt)) | 0),
        (w = (w + Math.imul(Ut, Jt)) | 0),
        (y = (y + Math.imul(Tt, Xt)) | 0),
        (u = (u + Math.imul(Tt, Qt)) | 0),
        (u = (u + Math.imul(Pt, Xt)) | 0),
        (w = (w + Math.imul(Pt, Qt)) | 0),
        (y = (y + Math.imul(Lt, te)) | 0),
        (u = (u + Math.imul(Lt, ee)) | 0),
        (u = (u + Math.imul(Mt, te)) | 0),
        (w = (w + Math.imul(Mt, ee)) | 0),
        (y = (y + Math.imul(At, re)) | 0),
        (u = (u + Math.imul(At, ne)) | 0),
        (u = (u + Math.imul(Rt, re)) | 0),
        (w = (w + Math.imul(Rt, ne)) | 0),
        (y = (y + Math.imul(kt, ie)) | 0),
        (u = (u + Math.imul(kt, oe)) | 0),
        (u = (u + Math.imul(St, ie)) | 0),
        (w = (w + Math.imul(St, oe)) | 0),
        (y = (y + Math.imul(pt, se)) | 0),
        (u = (u + Math.imul(pt, ae)) | 0),
        (u = (u + Math.imul(bt, se)) | 0),
        (w = (w + Math.imul(bt, ae)) | 0);
      var qi = (((x + y) | 0) + ((u & 8191) << 13)) | 0;
      (x = (((w + (u >>> 13)) | 0) + (qi >>> 26)) | 0),
        (qi &= 67108863),
        (y = Math.imul(Dt, Ht)),
        (u = Math.imul(Dt, Gt)),
        (u = (u + Math.imul(Kt, Ht)) | 0),
        (w = Math.imul(Kt, Gt)),
        (y = (y + Math.imul(Ot, jt)) | 0),
        (u = (u + Math.imul(Ot, Yt)) | 0),
        (u = (u + Math.imul(zt, jt)) | 0),
        (w = (w + Math.imul(zt, Yt)) | 0),
        (y = (y + Math.imul(Ft, Zt)) | 0),
        (u = (u + Math.imul(Ft, Jt)) | 0),
        (u = (u + Math.imul(Nt, Zt)) | 0),
        (w = (w + Math.imul(Nt, Jt)) | 0),
        (y = (y + Math.imul(Ct, Xt)) | 0),
        (u = (u + Math.imul(Ct, Qt)) | 0),
        (u = (u + Math.imul(Ut, Xt)) | 0),
        (w = (w + Math.imul(Ut, Qt)) | 0),
        (y = (y + Math.imul(Tt, te)) | 0),
        (u = (u + Math.imul(Tt, ee)) | 0),
        (u = (u + Math.imul(Pt, te)) | 0),
        (w = (w + Math.imul(Pt, ee)) | 0),
        (y = (y + Math.imul(Lt, re)) | 0),
        (u = (u + Math.imul(Lt, ne)) | 0),
        (u = (u + Math.imul(Mt, re)) | 0),
        (w = (w + Math.imul(Mt, ne)) | 0),
        (y = (y + Math.imul(At, ie)) | 0),
        (u = (u + Math.imul(At, oe)) | 0),
        (u = (u + Math.imul(Rt, ie)) | 0),
        (w = (w + Math.imul(Rt, oe)) | 0),
        (y = (y + Math.imul(kt, se)) | 0),
        (u = (u + Math.imul(kt, ae)) | 0),
        (u = (u + Math.imul(St, se)) | 0),
        (w = (w + Math.imul(St, ae)) | 0);
      var $i = (((x + y) | 0) + ((u & 8191) << 13)) | 0;
      (x = (((w + (u >>> 13)) | 0) + ($i >>> 26)) | 0),
        ($i &= 67108863),
        (y = Math.imul(Dt, jt)),
        (u = Math.imul(Dt, Yt)),
        (u = (u + Math.imul(Kt, jt)) | 0),
        (w = Math.imul(Kt, Yt)),
        (y = (y + Math.imul(Ot, Zt)) | 0),
        (u = (u + Math.imul(Ot, Jt)) | 0),
        (u = (u + Math.imul(zt, Zt)) | 0),
        (w = (w + Math.imul(zt, Jt)) | 0),
        (y = (y + Math.imul(Ft, Xt)) | 0),
        (u = (u + Math.imul(Ft, Qt)) | 0),
        (u = (u + Math.imul(Nt, Xt)) | 0),
        (w = (w + Math.imul(Nt, Qt)) | 0),
        (y = (y + Math.imul(Ct, te)) | 0),
        (u = (u + Math.imul(Ct, ee)) | 0),
        (u = (u + Math.imul(Ut, te)) | 0),
        (w = (w + Math.imul(Ut, ee)) | 0),
        (y = (y + Math.imul(Tt, re)) | 0),
        (u = (u + Math.imul(Tt, ne)) | 0),
        (u = (u + Math.imul(Pt, re)) | 0),
        (w = (w + Math.imul(Pt, ne)) | 0),
        (y = (y + Math.imul(Lt, ie)) | 0),
        (u = (u + Math.imul(Lt, oe)) | 0),
        (u = (u + Math.imul(Mt, ie)) | 0),
        (w = (w + Math.imul(Mt, oe)) | 0),
        (y = (y + Math.imul(At, se)) | 0),
        (u = (u + Math.imul(At, ae)) | 0),
        (u = (u + Math.imul(Rt, se)) | 0),
        (w = (w + Math.imul(Rt, ae)) | 0);
      var Vi = (((x + y) | 0) + ((u & 8191) << 13)) | 0;
      (x = (((w + (u >>> 13)) | 0) + (Vi >>> 26)) | 0),
        (Vi &= 67108863),
        (y = Math.imul(Dt, Zt)),
        (u = Math.imul(Dt, Jt)),
        (u = (u + Math.imul(Kt, Zt)) | 0),
        (w = Math.imul(Kt, Jt)),
        (y = (y + Math.imul(Ot, Xt)) | 0),
        (u = (u + Math.imul(Ot, Qt)) | 0),
        (u = (u + Math.imul(zt, Xt)) | 0),
        (w = (w + Math.imul(zt, Qt)) | 0),
        (y = (y + Math.imul(Ft, te)) | 0),
        (u = (u + Math.imul(Ft, ee)) | 0),
        (u = (u + Math.imul(Nt, te)) | 0),
        (w = (w + Math.imul(Nt, ee)) | 0),
        (y = (y + Math.imul(Ct, re)) | 0),
        (u = (u + Math.imul(Ct, ne)) | 0),
        (u = (u + Math.imul(Ut, re)) | 0),
        (w = (w + Math.imul(Ut, ne)) | 0),
        (y = (y + Math.imul(Tt, ie)) | 0),
        (u = (u + Math.imul(Tt, oe)) | 0),
        (u = (u + Math.imul(Pt, ie)) | 0),
        (w = (w + Math.imul(Pt, oe)) | 0),
        (y = (y + Math.imul(Lt, se)) | 0),
        (u = (u + Math.imul(Lt, ae)) | 0),
        (u = (u + Math.imul(Mt, se)) | 0),
        (w = (w + Math.imul(Mt, ae)) | 0);
      var Hi = (((x + y) | 0) + ((u & 8191) << 13)) | 0;
      (x = (((w + (u >>> 13)) | 0) + (Hi >>> 26)) | 0),
        (Hi &= 67108863),
        (y = Math.imul(Dt, Xt)),
        (u = Math.imul(Dt, Qt)),
        (u = (u + Math.imul(Kt, Xt)) | 0),
        (w = Math.imul(Kt, Qt)),
        (y = (y + Math.imul(Ot, te)) | 0),
        (u = (u + Math.imul(Ot, ee)) | 0),
        (u = (u + Math.imul(zt, te)) | 0),
        (w = (w + Math.imul(zt, ee)) | 0),
        (y = (y + Math.imul(Ft, re)) | 0),
        (u = (u + Math.imul(Ft, ne)) | 0),
        (u = (u + Math.imul(Nt, re)) | 0),
        (w = (w + Math.imul(Nt, ne)) | 0),
        (y = (y + Math.imul(Ct, ie)) | 0),
        (u = (u + Math.imul(Ct, oe)) | 0),
        (u = (u + Math.imul(Ut, ie)) | 0),
        (w = (w + Math.imul(Ut, oe)) | 0),
        (y = (y + Math.imul(Tt, se)) | 0),
        (u = (u + Math.imul(Tt, ae)) | 0),
        (u = (u + Math.imul(Pt, se)) | 0),
        (w = (w + Math.imul(Pt, ae)) | 0);
      var Gi = (((x + y) | 0) + ((u & 8191) << 13)) | 0;
      (x = (((w + (u >>> 13)) | 0) + (Gi >>> 26)) | 0),
        (Gi &= 67108863),
        (y = Math.imul(Dt, te)),
        (u = Math.imul(Dt, ee)),
        (u = (u + Math.imul(Kt, te)) | 0),
        (w = Math.imul(Kt, ee)),
        (y = (y + Math.imul(Ot, re)) | 0),
        (u = (u + Math.imul(Ot, ne)) | 0),
        (u = (u + Math.imul(zt, re)) | 0),
        (w = (w + Math.imul(zt, ne)) | 0),
        (y = (y + Math.imul(Ft, ie)) | 0),
        (u = (u + Math.imul(Ft, oe)) | 0),
        (u = (u + Math.imul(Nt, ie)) | 0),
        (w = (w + Math.imul(Nt, oe)) | 0),
        (y = (y + Math.imul(Ct, se)) | 0),
        (u = (u + Math.imul(Ct, ae)) | 0),
        (u = (u + Math.imul(Ut, se)) | 0),
        (w = (w + Math.imul(Ut, ae)) | 0);
      var ji = (((x + y) | 0) + ((u & 8191) << 13)) | 0;
      (x = (((w + (u >>> 13)) | 0) + (ji >>> 26)) | 0),
        (ji &= 67108863),
        (y = Math.imul(Dt, re)),
        (u = Math.imul(Dt, ne)),
        (u = (u + Math.imul(Kt, re)) | 0),
        (w = Math.imul(Kt, ne)),
        (y = (y + Math.imul(Ot, ie)) | 0),
        (u = (u + Math.imul(Ot, oe)) | 0),
        (u = (u + Math.imul(zt, ie)) | 0),
        (w = (w + Math.imul(zt, oe)) | 0),
        (y = (y + Math.imul(Ft, se)) | 0),
        (u = (u + Math.imul(Ft, ae)) | 0),
        (u = (u + Math.imul(Nt, se)) | 0),
        (w = (w + Math.imul(Nt, ae)) | 0);
      var Yi = (((x + y) | 0) + ((u & 8191) << 13)) | 0;
      (x = (((w + (u >>> 13)) | 0) + (Yi >>> 26)) | 0),
        (Yi &= 67108863),
        (y = Math.imul(Dt, ie)),
        (u = Math.imul(Dt, oe)),
        (u = (u + Math.imul(Kt, ie)) | 0),
        (w = Math.imul(Kt, oe)),
        (y = (y + Math.imul(Ot, se)) | 0),
        (u = (u + Math.imul(Ot, ae)) | 0),
        (u = (u + Math.imul(zt, se)) | 0),
        (w = (w + Math.imul(zt, ae)) | 0);
      var Zi = (((x + y) | 0) + ((u & 8191) << 13)) | 0;
      (x = (((w + (u >>> 13)) | 0) + (Zi >>> 26)) | 0),
        (Zi &= 67108863),
        (y = Math.imul(Dt, se)),
        (u = Math.imul(Dt, ae)),
        (u = (u + Math.imul(Kt, se)) | 0),
        (w = Math.imul(Kt, ae));
      var Ji = (((x + y) | 0) + ((u & 8191) << 13)) | 0;
      return (
        (x = (((w + (u >>> 13)) | 0) + (Ji >>> 26)) | 0),
        (Ji &= 67108863),
        (k[0] = Pi),
        (k[1] = Ci),
        (k[2] = Ui),
        (k[3] = Fi),
        (k[4] = Ni),
        (k[5] = Oi),
        (k[6] = zi),
        (k[7] = Di),
        (k[8] = Ki),
        (k[9] = Wi),
        (k[10] = qi),
        (k[11] = $i),
        (k[12] = Vi),
        (k[13] = Hi),
        (k[14] = Gi),
        (k[15] = ji),
        (k[16] = Yi),
        (k[17] = Zi),
        (k[18] = Ji),
        x !== 0 && ((k[19] = x), l.length++),
        l
      );
    };
    Math.imul || (L = C);
    function N(m, a, c) {
      (c.negative = a.negative ^ m.negative), (c.length = m.length + a.length);
      for (var l = 0, d = 0, p = 0; p < c.length - 1; p++) {
        var k = d;
        d = 0;
        for (
          var x = l & 67108863,
            y = Math.min(p, a.length - 1),
            u = Math.max(0, p - m.length + 1);
          u <= y;
          u++
        ) {
          var w = p - u,
            V = m.words[w] | 0,
            G = a.words[u] | 0,
            Y = V * G,
            et = Y & 67108863;
          (k = (k + ((Y / 67108864) | 0)) | 0),
            (et = (et + x) | 0),
            (x = et & 67108863),
            (k = (k + (et >>> 26)) | 0),
            (d += k >>> 26),
            (k &= 67108863);
        }
        (c.words[p] = x), (l = k), (k = d);
      }
      return l !== 0 ? (c.words[p] = l) : c.length--, c._strip();
    }
    function W(m, a, c) {
      return N(m, a, c);
    }
    i.prototype.mulTo = function (a, c) {
      var l,
        d = this.length + a.length;
      return (
        this.length === 10 && a.length === 10
          ? (l = L(this, a, c))
          : d < 63
          ? (l = C(this, a, c))
          : d < 1024
          ? (l = N(this, a, c))
          : (l = W(this, a, c)),
        l
      );
    };
    function q(m, a) {
      (this.x = m), (this.y = a);
    }
    (q.prototype.makeRBT = function (a) {
      for (
        var c = new Array(a), l = i.prototype._countBits(a) - 1, d = 0;
        d < a;
        d++
      )
        c[d] = this.revBin(d, l, a);
      return c;
    }),
      (q.prototype.revBin = function (a, c, l) {
        if (a === 0 || a === l - 1) return a;
        for (var d = 0, p = 0; p < c; p++)
          (d |= (a & 1) << (c - p - 1)), (a >>= 1);
        return d;
      }),
      (q.prototype.permute = function (a, c, l, d, p, k) {
        for (var x = 0; x < k; x++) (d[x] = c[a[x]]), (p[x] = l[a[x]]);
      }),
      (q.prototype.transform = function (a, c, l, d, p, k) {
        this.permute(k, a, c, l, d, p);
        for (var x = 1; x < p; x <<= 1)
          for (
            var y = x << 1,
              u = Math.cos((2 * Math.PI) / y),
              w = Math.sin((2 * Math.PI) / y),
              V = 0;
            V < p;
            V += y
          )
            for (var G = u, Y = w, et = 0; et < x; et++) {
              var pt = l[V + et],
                bt = d[V + et],
                ir = l[V + et + x],
                kt = d[V + et + x],
                St = G * ir - Y * kt;
              (kt = G * kt + Y * ir),
                (ir = St),
                (l[V + et] = pt + ir),
                (d[V + et] = bt + kt),
                (l[V + et + x] = pt - ir),
                (d[V + et + x] = bt - kt),
                et !== y &&
                  ((St = u * G - w * Y), (Y = u * Y + w * G), (G = St));
            }
      }),
      (q.prototype.guessLen13b = function (a, c) {
        var l = Math.max(c, a) | 1,
          d = l & 1,
          p = 0;
        for (l = (l / 2) | 0; l; l = l >>> 1) p++;
        return 1 << (p + 1 + d);
      }),
      (q.prototype.conjugate = function (a, c, l) {
        if (!(l <= 1))
          for (var d = 0; d < l / 2; d++) {
            var p = a[d];
            (a[d] = a[l - d - 1]),
              (a[l - d - 1] = p),
              (p = c[d]),
              (c[d] = -c[l - d - 1]),
              (c[l - d - 1] = -p);
          }
      }),
      (q.prototype.normalize13b = function (a, c) {
        for (var l = 0, d = 0; d < c / 2; d++) {
          var p =
            Math.round(a[2 * d + 1] / c) * 8192 + Math.round(a[2 * d] / c) + l;
          (a[d] = p & 67108863),
            p < 67108864 ? (l = 0) : (l = (p / 67108864) | 0);
        }
        return a;
      }),
      (q.prototype.convert13b = function (a, c, l, d) {
        for (var p = 0, k = 0; k < c; k++)
          (p = p + (a[k] | 0)),
            (l[2 * k] = p & 8191),
            (p = p >>> 13),
            (l[2 * k + 1] = p & 8191),
            (p = p >>> 13);
        for (k = 2 * c; k < d; ++k) l[k] = 0;
        e(p === 0), e((p & -8192) === 0);
      }),
      (q.prototype.stub = function (a) {
        for (var c = new Array(a), l = 0; l < a; l++) c[l] = 0;
        return c;
      }),
      (q.prototype.mulp = function (a, c, l) {
        var d = 2 * this.guessLen13b(a.length, c.length),
          p = this.makeRBT(d),
          k = this.stub(d),
          x = new Array(d),
          y = new Array(d),
          u = new Array(d),
          w = new Array(d),
          V = new Array(d),
          G = new Array(d),
          Y = l.words;
        (Y.length = d),
          this.convert13b(a.words, a.length, x, d),
          this.convert13b(c.words, c.length, w, d),
          this.transform(x, k, y, u, d, p),
          this.transform(w, k, V, G, d, p);
        for (var et = 0; et < d; et++) {
          var pt = y[et] * V[et] - u[et] * G[et];
          (u[et] = y[et] * G[et] + u[et] * V[et]), (y[et] = pt);
        }
        return (
          this.conjugate(y, u, d),
          this.transform(y, u, Y, k, d, p),
          this.conjugate(Y, k, d),
          this.normalize13b(Y, d),
          (l.negative = a.negative ^ c.negative),
          (l.length = a.length + c.length),
          l._strip()
        );
      }),
      (i.prototype.mul = function (a) {
        var c = new i(null);
        return (c.words = new Array(this.length + a.length)), this.mulTo(a, c);
      }),
      (i.prototype.mulf = function (a) {
        var c = new i(null);
        return (c.words = new Array(this.length + a.length)), W(this, a, c);
      }),
      (i.prototype.imul = function (a) {
        return this.clone().mulTo(a, this);
      }),
      (i.prototype.imuln = function (a) {
        var c = a < 0;
        c && (a = -a), e(typeof a == "number"), e(a < 67108864);
        for (var l = 0, d = 0; d < this.length; d++) {
          var p = (this.words[d] | 0) * a,
            k = (p & 67108863) + (l & 67108863);
          (l >>= 26),
            (l += (p / 67108864) | 0),
            (l += k >>> 26),
            (this.words[d] = k & 67108863);
        }
        return (
          l !== 0 && ((this.words[d] = l), this.length++),
          (this.length = a === 0 ? 1 : this.length),
          c ? this.ineg() : this
        );
      }),
      (i.prototype.muln = function (a) {
        return this.clone().imuln(a);
      }),
      (i.prototype.sqr = function () {
        return this.mul(this);
      }),
      (i.prototype.isqr = function () {
        return this.imul(this.clone());
      }),
      (i.prototype.pow = function (a) {
        var c = T(a);
        if (c.length === 0) return new i(1);
        for (var l = this, d = 0; d < c.length && c[d] === 0; d++, l = l.sqr());
        if (++d < c.length)
          for (var p = l.sqr(); d < c.length; d++, p = p.sqr())
            c[d] !== 0 && (l = l.mul(p));
        return l;
      }),
      (i.prototype.iushln = function (a) {
        e(typeof a == "number" && a >= 0);
        var c = a % 26,
          l = (a - c) / 26,
          d = (67108863 >>> (26 - c)) << (26 - c),
          p;
        if (c !== 0) {
          var k = 0;
          for (p = 0; p < this.length; p++) {
            var x = this.words[p] & d,
              y = ((this.words[p] | 0) - x) << c;
            (this.words[p] = y | k), (k = x >>> (26 - c));
          }
          k && ((this.words[p] = k), this.length++);
        }
        if (l !== 0) {
          for (p = this.length - 1; p >= 0; p--)
            this.words[p + l] = this.words[p];
          for (p = 0; p < l; p++) this.words[p] = 0;
          this.length += l;
        }
        return this._strip();
      }),
      (i.prototype.ishln = function (a) {
        return e(this.negative === 0), this.iushln(a);
      }),
      (i.prototype.iushrn = function (a, c, l) {
        e(typeof a == "number" && a >= 0);
        var d;
        c ? (d = (c - (c % 26)) / 26) : (d = 0);
        var p = a % 26,
          k = Math.min((a - p) / 26, this.length),
          x = 67108863 ^ ((67108863 >>> p) << p),
          y = l;
        if (((d -= k), (d = Math.max(0, d)), y)) {
          for (var u = 0; u < k; u++) y.words[u] = this.words[u];
          y.length = k;
        }
        if (k !== 0)
          if (this.length > k)
            for (this.length -= k, u = 0; u < this.length; u++)
              this.words[u] = this.words[u + k];
          else (this.words[0] = 0), (this.length = 1);
        var w = 0;
        for (u = this.length - 1; u >= 0 && (w !== 0 || u >= d); u--) {
          var V = this.words[u] | 0;
          (this.words[u] = (w << (26 - p)) | (V >>> p)), (w = V & x);
        }
        return (
          y && w !== 0 && (y.words[y.length++] = w),
          this.length === 0 && ((this.words[0] = 0), (this.length = 1)),
          this._strip()
        );
      }),
      (i.prototype.ishrn = function (a, c, l) {
        return e(this.negative === 0), this.iushrn(a, c, l);
      }),
      (i.prototype.shln = function (a) {
        return this.clone().ishln(a);
      }),
      (i.prototype.ushln = function (a) {
        return this.clone().iushln(a);
      }),
      (i.prototype.shrn = function (a) {
        return this.clone().ishrn(a);
      }),
      (i.prototype.ushrn = function (a) {
        return this.clone().iushrn(a);
      }),
      (i.prototype.testn = function (a) {
        e(typeof a == "number" && a >= 0);
        var c = a % 26,
          l = (a - c) / 26,
          d = 1 << c;
        if (this.length <= l) return !1;
        var p = this.words[l];
        return !!(p & d);
      }),
      (i.prototype.imaskn = function (a) {
        e(typeof a == "number" && a >= 0);
        var c = a % 26,
          l = (a - c) / 26;
        if (
          (e(this.negative === 0, "imaskn works only with positive numbers"),
          this.length <= l)
        )
          return this;
        if (
          (c !== 0 && l++, (this.length = Math.min(l, this.length)), c !== 0)
        ) {
          var d = 67108863 ^ ((67108863 >>> c) << c);
          this.words[this.length - 1] &= d;
        }
        return (
          this.length === 0 && ((this.words[0] = 0), (this.length = 1)),
          this._strip()
        );
      }),
      (i.prototype.maskn = function (a) {
        return this.clone().imaskn(a);
      }),
      (i.prototype.iaddn = function (a) {
        return (
          e(typeof a == "number"),
          e(a < 67108864),
          a < 0
            ? this.isubn(-a)
            : this.negative !== 0
            ? this.length === 1 && (this.words[0] | 0) <= a
              ? ((this.words[0] = a - (this.words[0] | 0)),
                (this.negative = 0),
                this)
              : ((this.negative = 0), this.isubn(a), (this.negative = 1), this)
            : this._iaddn(a)
        );
      }),
      (i.prototype._iaddn = function (a) {
        this.words[0] += a;
        for (var c = 0; c < this.length && this.words[c] >= 67108864; c++)
          (this.words[c] -= 67108864),
            c === this.length - 1
              ? (this.words[c + 1] = 1)
              : this.words[c + 1]++;
        return (this.length = Math.max(this.length, c + 1)), this;
      }),
      (i.prototype.isubn = function (a) {
        if ((e(typeof a == "number"), e(a < 67108864), a < 0))
          return this.iaddn(-a);
        if (this.negative !== 0)
          return (this.negative = 0), this.iaddn(a), (this.negative = 1), this;
        if (((this.words[0] -= a), this.length === 1 && this.words[0] < 0))
          (this.words[0] = -this.words[0]), (this.negative = 1);
        else
          for (var c = 0; c < this.length && this.words[c] < 0; c++)
            (this.words[c] += 67108864), (this.words[c + 1] -= 1);
        return this._strip();
      }),
      (i.prototype.addn = function (a) {
        return this.clone().iaddn(a);
      }),
      (i.prototype.subn = function (a) {
        return this.clone().isubn(a);
      }),
      (i.prototype.iabs = function () {
        return (this.negative = 0), this;
      }),
      (i.prototype.abs = function () {
        return this.clone().iabs();
      }),
      (i.prototype._ishlnsubmul = function (a, c, l) {
        var d = a.length + l,
          p;
        this._expand(d);
        var k,
          x = 0;
        for (p = 0; p < a.length; p++) {
          k = (this.words[p + l] | 0) + x;
          var y = (a.words[p] | 0) * c;
          (k -= y & 67108863),
            (x = (k >> 26) - ((y / 67108864) | 0)),
            (this.words[p + l] = k & 67108863);
        }
        for (; p < this.length - l; p++)
          (k = (this.words[p + l] | 0) + x),
            (x = k >> 26),
            (this.words[p + l] = k & 67108863);
        if (x === 0) return this._strip();
        for (e(x === -1), x = 0, p = 0; p < this.length; p++)
          (k = -(this.words[p] | 0) + x),
            (x = k >> 26),
            (this.words[p] = k & 67108863);
        return (this.negative = 1), this._strip();
      }),
      (i.prototype._wordDiv = function (a, c) {
        var l = this.length - a.length,
          d = this.clone(),
          p = a,
          k = p.words[p.length - 1] | 0,
          x = this._countBits(k);
        (l = 26 - x),
          l !== 0 &&
            ((p = p.ushln(l)), d.iushln(l), (k = p.words[p.length - 1] | 0));
        var y = d.length - p.length,
          u;
        if (c !== "mod") {
          (u = new i(null)),
            (u.length = y + 1),
            (u.words = new Array(u.length));
          for (var w = 0; w < u.length; w++) u.words[w] = 0;
        }
        var V = d.clone()._ishlnsubmul(p, 1, y);
        V.negative === 0 && ((d = V), u && (u.words[y] = 1));
        for (var G = y - 1; G >= 0; G--) {
          var Y =
            (d.words[p.length + G] | 0) * 67108864 +
            (d.words[p.length + G - 1] | 0);
          for (
            Y = Math.min((Y / k) | 0, 67108863), d._ishlnsubmul(p, Y, G);
            d.negative !== 0;

          )
            Y--,
              (d.negative = 0),
              d._ishlnsubmul(p, 1, G),
              d.isZero() || (d.negative ^= 1);
          u && (u.words[G] = Y);
        }
        return (
          u && u._strip(),
          d._strip(),
          c !== "div" && l !== 0 && d.iushrn(l),
          { div: u || null, mod: d }
        );
      }),
      (i.prototype.divmod = function (a, c, l) {
        if ((e(!a.isZero()), this.isZero()))
          return { div: new i(0), mod: new i(0) };
        var d, p, k;
        return this.negative !== 0 && a.negative === 0
          ? ((k = this.neg().divmod(a, c)),
            c !== "mod" && (d = k.div.neg()),
            c !== "div" &&
              ((p = k.mod.neg()), l && p.negative !== 0 && p.iadd(a)),
            { div: d, mod: p })
          : this.negative === 0 && a.negative !== 0
          ? ((k = this.divmod(a.neg(), c)),
            c !== "mod" && (d = k.div.neg()),
            { div: d, mod: k.mod })
          : this.negative & a.negative
          ? ((k = this.neg().divmod(a.neg(), c)),
            c !== "div" &&
              ((p = k.mod.neg()), l && p.negative !== 0 && p.isub(a)),
            { div: k.div, mod: p })
          : a.length > this.length || this.cmp(a) < 0
          ? { div: new i(0), mod: this }
          : a.length === 1
          ? c === "div"
            ? { div: this.divn(a.words[0]), mod: null }
            : c === "mod"
            ? { div: null, mod: new i(this.modrn(a.words[0])) }
            : { div: this.divn(a.words[0]), mod: new i(this.modrn(a.words[0])) }
          : this._wordDiv(a, c);
      }),
      (i.prototype.div = function (a) {
        return this.divmod(a, "div", !1).div;
      }),
      (i.prototype.mod = function (a) {
        return this.divmod(a, "mod", !1).mod;
      }),
      (i.prototype.umod = function (a) {
        return this.divmod(a, "mod", !0).mod;
      }),
      (i.prototype.divRound = function (a) {
        var c = this.divmod(a);
        if (c.mod.isZero()) return c.div;
        var l = c.div.negative !== 0 ? c.mod.isub(a) : c.mod,
          d = a.ushrn(1),
          p = a.andln(1),
          k = l.cmp(d);
        return k < 0 || (p === 1 && k === 0)
          ? c.div
          : c.div.negative !== 0
          ? c.div.isubn(1)
          : c.div.iaddn(1);
      }),
      (i.prototype.modrn = function (a) {
        var c = a < 0;
        c && (a = -a), e(a <= 67108863);
        for (var l = (1 << 26) % a, d = 0, p = this.length - 1; p >= 0; p--)
          d = (l * d + (this.words[p] | 0)) % a;
        return c ? -d : d;
      }),
      (i.prototype.modn = function (a) {
        return this.modrn(a);
      }),
      (i.prototype.idivn = function (a) {
        var c = a < 0;
        c && (a = -a), e(a <= 67108863);
        for (var l = 0, d = this.length - 1; d >= 0; d--) {
          var p = (this.words[d] | 0) + l * 67108864;
          (this.words[d] = (p / a) | 0), (l = p % a);
        }
        return this._strip(), c ? this.ineg() : this;
      }),
      (i.prototype.divn = function (a) {
        return this.clone().idivn(a);
      }),
      (i.prototype.egcd = function (a) {
        e(a.negative === 0), e(!a.isZero());
        var c = this,
          l = a.clone();
        c.negative !== 0 ? (c = c.umod(a)) : (c = c.clone());
        for (
          var d = new i(1), p = new i(0), k = new i(0), x = new i(1), y = 0;
          c.isEven() && l.isEven();

        )
          c.iushrn(1), l.iushrn(1), ++y;
        for (var u = l.clone(), w = c.clone(); !c.isZero(); ) {
          for (var V = 0, G = 1; !(c.words[0] & G) && V < 26; ++V, G <<= 1);
          if (V > 0)
            for (c.iushrn(V); V-- > 0; )
              (d.isOdd() || p.isOdd()) && (d.iadd(u), p.isub(w)),
                d.iushrn(1),
                p.iushrn(1);
          for (var Y = 0, et = 1; !(l.words[0] & et) && Y < 26; ++Y, et <<= 1);
          if (Y > 0)
            for (l.iushrn(Y); Y-- > 0; )
              (k.isOdd() || x.isOdd()) && (k.iadd(u), x.isub(w)),
                k.iushrn(1),
                x.iushrn(1);
          c.cmp(l) >= 0
            ? (c.isub(l), d.isub(k), p.isub(x))
            : (l.isub(c), k.isub(d), x.isub(p));
        }
        return { a: k, b: x, gcd: l.iushln(y) };
      }),
      (i.prototype._invmp = function (a) {
        e(a.negative === 0), e(!a.isZero());
        var c = this,
          l = a.clone();
        c.negative !== 0 ? (c = c.umod(a)) : (c = c.clone());
        for (
          var d = new i(1), p = new i(0), k = l.clone();
          c.cmpn(1) > 0 && l.cmpn(1) > 0;

        ) {
          for (var x = 0, y = 1; !(c.words[0] & y) && x < 26; ++x, y <<= 1);
          if (x > 0)
            for (c.iushrn(x); x-- > 0; ) d.isOdd() && d.iadd(k), d.iushrn(1);
          for (var u = 0, w = 1; !(l.words[0] & w) && u < 26; ++u, w <<= 1);
          if (u > 0)
            for (l.iushrn(u); u-- > 0; ) p.isOdd() && p.iadd(k), p.iushrn(1);
          c.cmp(l) >= 0 ? (c.isub(l), d.isub(p)) : (l.isub(c), p.isub(d));
        }
        var V;
        return (
          c.cmpn(1) === 0 ? (V = d) : (V = p), V.cmpn(0) < 0 && V.iadd(a), V
        );
      }),
      (i.prototype.gcd = function (a) {
        if (this.isZero()) return a.abs();
        if (a.isZero()) return this.abs();
        var c = this.clone(),
          l = a.clone();
        (c.negative = 0), (l.negative = 0);
        for (var d = 0; c.isEven() && l.isEven(); d++) c.iushrn(1), l.iushrn(1);
        do {
          for (; c.isEven(); ) c.iushrn(1);
          for (; l.isEven(); ) l.iushrn(1);
          var p = c.cmp(l);
          if (p < 0) {
            var k = c;
            (c = l), (l = k);
          } else if (p === 0 || l.cmpn(1) === 0) break;
          c.isub(l);
        } while (!0);
        return l.iushln(d);
      }),
      (i.prototype.invm = function (a) {
        return this.egcd(a).a.umod(a);
      }),
      (i.prototype.isEven = function () {
        return (this.words[0] & 1) === 0;
      }),
      (i.prototype.isOdd = function () {
        return (this.words[0] & 1) === 1;
      }),
      (i.prototype.andln = function (a) {
        return this.words[0] & a;
      }),
      (i.prototype.bincn = function (a) {
        e(typeof a == "number");
        var c = a % 26,
          l = (a - c) / 26,
          d = 1 << c;
        if (this.length <= l)
          return this._expand(l + 1), (this.words[l] |= d), this;
        for (var p = d, k = l; p !== 0 && k < this.length; k++) {
          var x = this.words[k] | 0;
          (x += p), (p = x >>> 26), (x &= 67108863), (this.words[k] = x);
        }
        return p !== 0 && ((this.words[k] = p), this.length++), this;
      }),
      (i.prototype.isZero = function () {
        return this.length === 1 && this.words[0] === 0;
      }),
      (i.prototype.cmpn = function (a) {
        var c = a < 0;
        if (this.negative !== 0 && !c) return -1;
        if (this.negative === 0 && c) return 1;
        this._strip();
        var l;
        if (this.length > 1) l = 1;
        else {
          c && (a = -a), e(a <= 67108863, "Number is too big");
          var d = this.words[0] | 0;
          l = d === a ? 0 : d < a ? -1 : 1;
        }
        return this.negative !== 0 ? -l | 0 : l;
      }),
      (i.prototype.cmp = function (a) {
        if (this.negative !== 0 && a.negative === 0) return -1;
        if (this.negative === 0 && a.negative !== 0) return 1;
        var c = this.ucmp(a);
        return this.negative !== 0 ? -c | 0 : c;
      }),
      (i.prototype.ucmp = function (a) {
        if (this.length > a.length) return 1;
        if (this.length < a.length) return -1;
        for (var c = 0, l = this.length - 1; l >= 0; l--) {
          var d = this.words[l] | 0,
            p = a.words[l] | 0;
          if (d !== p) {
            d < p ? (c = -1) : d > p && (c = 1);
            break;
          }
        }
        return c;
      }),
      (i.prototype.gtn = function (a) {
        return this.cmpn(a) === 1;
      }),
      (i.prototype.gt = function (a) {
        return this.cmp(a) === 1;
      }),
      (i.prototype.gten = function (a) {
        return this.cmpn(a) >= 0;
      }),
      (i.prototype.gte = function (a) {
        return this.cmp(a) >= 0;
      }),
      (i.prototype.ltn = function (a) {
        return this.cmpn(a) === -1;
      }),
      (i.prototype.lt = function (a) {
        return this.cmp(a) === -1;
      }),
      (i.prototype.lten = function (a) {
        return this.cmpn(a) <= 0;
      }),
      (i.prototype.lte = function (a) {
        return this.cmp(a) <= 0;
      }),
      (i.prototype.eqn = function (a) {
        return this.cmpn(a) === 0;
      }),
      (i.prototype.eq = function (a) {
        return this.cmp(a) === 0;
      }),
      (i.red = function (a) {
        return new j(a);
      }),
      (i.prototype.toRed = function (a) {
        return (
          e(!this.red, "Already a number in reduction context"),
          e(this.negative === 0, "red works only with positives"),
          a.convertTo(this)._forceRed(a)
        );
      }),
      (i.prototype.fromRed = function () {
        return (
          e(this.red, "fromRed works only with numbers in reduction context"),
          this.red.convertFrom(this)
        );
      }),
      (i.prototype._forceRed = function (a) {
        return (this.red = a), this;
      }),
      (i.prototype.forceRed = function (a) {
        return (
          e(!this.red, "Already a number in reduction context"),
          this._forceRed(a)
        );
      }),
      (i.prototype.redAdd = function (a) {
        return (
          e(this.red, "redAdd works only with red numbers"),
          this.red.add(this, a)
        );
      }),
      (i.prototype.redIAdd = function (a) {
        return (
          e(this.red, "redIAdd works only with red numbers"),
          this.red.iadd(this, a)
        );
      }),
      (i.prototype.redSub = function (a) {
        return (
          e(this.red, "redSub works only with red numbers"),
          this.red.sub(this, a)
        );
      }),
      (i.prototype.redISub = function (a) {
        return (
          e(this.red, "redISub works only with red numbers"),
          this.red.isub(this, a)
        );
      }),
      (i.prototype.redShl = function (a) {
        return (
          e(this.red, "redShl works only with red numbers"),
          this.red.shl(this, a)
        );
      }),
      (i.prototype.redMul = function (a) {
        return (
          e(this.red, "redMul works only with red numbers"),
          this.red._verify2(this, a),
          this.red.mul(this, a)
        );
      }),
      (i.prototype.redIMul = function (a) {
        return (
          e(this.red, "redMul works only with red numbers"),
          this.red._verify2(this, a),
          this.red.imul(this, a)
        );
      }),
      (i.prototype.redSqr = function () {
        return (
          e(this.red, "redSqr works only with red numbers"),
          this.red._verify1(this),
          this.red.sqr(this)
        );
      }),
      (i.prototype.redISqr = function () {
        return (
          e(this.red, "redISqr works only with red numbers"),
          this.red._verify1(this),
          this.red.isqr(this)
        );
      }),
      (i.prototype.redSqrt = function () {
        return (
          e(this.red, "redSqrt works only with red numbers"),
          this.red._verify1(this),
          this.red.sqrt(this)
        );
      }),
      (i.prototype.redInvm = function () {
        return (
          e(this.red, "redInvm works only with red numbers"),
          this.red._verify1(this),
          this.red.invm(this)
        );
      }),
      (i.prototype.redNeg = function () {
        return (
          e(this.red, "redNeg works only with red numbers"),
          this.red._verify1(this),
          this.red.neg(this)
        );
      }),
      (i.prototype.redPow = function (a) {
        return (
          e(this.red && !a.red, "redPow(normalNum)"),
          this.red._verify1(this),
          this.red.pow(this, a)
        );
      });
    var ut = { k256: null, p224: null, p192: null, p25519: null };
    function tt(m, a) {
      (this.name = m),
        (this.p = new i(a, 16)),
        (this.n = this.p.bitLength()),
        (this.k = new i(1).iushln(this.n).isub(this.p)),
        (this.tmp = this._tmp());
    }
    (tt.prototype._tmp = function () {
      var a = new i(null);
      return (a.words = new Array(Math.ceil(this.n / 13))), a;
    }),
      (tt.prototype.ireduce = function (a) {
        var c = a,
          l;
        do
          this.split(c, this.tmp),
            (c = this.imulK(c)),
            (c = c.iadd(this.tmp)),
            (l = c.bitLength());
        while (l > this.n);
        var d = l < this.n ? -1 : c.ucmp(this.p);
        return (
          d === 0
            ? ((c.words[0] = 0), (c.length = 1))
            : d > 0
            ? c.isub(this.p)
            : c.strip !== void 0
            ? c.strip()
            : c._strip(),
          c
        );
      }),
      (tt.prototype.split = function (a, c) {
        a.iushrn(this.n, 0, c);
      }),
      (tt.prototype.imulK = function (a) {
        return a.imul(this.k);
      });
    function ot() {
      tt.call(
        this,
        "k256",
        "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f"
      );
    }
    r(ot, tt),
      (ot.prototype.split = function (a, c) {
        for (var l = 4194303, d = Math.min(a.length, 9), p = 0; p < d; p++)
          c.words[p] = a.words[p];
        if (((c.length = d), a.length <= 9)) {
          (a.words[0] = 0), (a.length = 1);
          return;
        }
        var k = a.words[9];
        for (c.words[c.length++] = k & l, p = 10; p < a.length; p++) {
          var x = a.words[p] | 0;
          (a.words[p - 10] = ((x & l) << 4) | (k >>> 22)), (k = x);
        }
        (k >>>= 22),
          (a.words[p - 10] = k),
          k === 0 && a.length > 10 ? (a.length -= 10) : (a.length -= 9);
      }),
      (ot.prototype.imulK = function (a) {
        (a.words[a.length] = 0), (a.words[a.length + 1] = 0), (a.length += 2);
        for (var c = 0, l = 0; l < a.length; l++) {
          var d = a.words[l] | 0;
          (c += d * 977),
            (a.words[l] = c & 67108863),
            (c = d * 64 + ((c / 67108864) | 0));
        }
        return (
          a.words[a.length - 1] === 0 &&
            (a.length--, a.words[a.length - 1] === 0 && a.length--),
          a
        );
      });
    function lt() {
      tt.call(
        this,
        "p224",
        "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001"
      );
    }
    r(lt, tt);
    function $() {
      tt.call(
        this,
        "p192",
        "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff"
      );
    }
    r($, tt);
    function J() {
      tt.call(
        this,
        "25519",
        "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed"
      );
    }
    r(J, tt),
      (J.prototype.imulK = function (a) {
        for (var c = 0, l = 0; l < a.length; l++) {
          var d = (a.words[l] | 0) * 19 + c,
            p = d & 67108863;
          (d >>>= 26), (a.words[l] = p), (c = d);
        }
        return c !== 0 && (a.words[a.length++] = c), a;
      }),
      (i._prime = function (a) {
        if (ut[a]) return ut[a];
        var c;
        if (a === "k256") c = new ot();
        else if (a === "p224") c = new lt();
        else if (a === "p192") c = new $();
        else if (a === "p25519") c = new J();
        else throw new Error("Unknown prime " + a);
        return (ut[a] = c), c;
      });
    function j(m) {
      if (typeof m == "string") {
        var a = i._prime(m);
        (this.m = a.p), (this.prime = a);
      } else
        e(m.gtn(1), "modulus must be greater than 1"),
          (this.m = m),
          (this.prime = null);
    }
    (j.prototype._verify1 = function (a) {
      e(a.negative === 0, "red works only with positives"),
        e(a.red, "red works only with red numbers");
    }),
      (j.prototype._verify2 = function (a, c) {
        e((a.negative | c.negative) === 0, "red works only with positives"),
          e(a.red && a.red === c.red, "red works only with red numbers");
      }),
      (j.prototype.imod = function (a) {
        return this.prime
          ? this.prime.ireduce(a)._forceRed(this)
          : (b(a, a.umod(this.m)._forceRed(this)), a);
      }),
      (j.prototype.neg = function (a) {
        return a.isZero() ? a.clone() : this.m.sub(a)._forceRed(this);
      }),
      (j.prototype.add = function (a, c) {
        this._verify2(a, c);
        var l = a.add(c);
        return l.cmp(this.m) >= 0 && l.isub(this.m), l._forceRed(this);
      }),
      (j.prototype.iadd = function (a, c) {
        this._verify2(a, c);
        var l = a.iadd(c);
        return l.cmp(this.m) >= 0 && l.isub(this.m), l;
      }),
      (j.prototype.sub = function (a, c) {
        this._verify2(a, c);
        var l = a.sub(c);
        return l.cmpn(0) < 0 && l.iadd(this.m), l._forceRed(this);
      }),
      (j.prototype.isub = function (a, c) {
        this._verify2(a, c);
        var l = a.isub(c);
        return l.cmpn(0) < 0 && l.iadd(this.m), l;
      }),
      (j.prototype.shl = function (a, c) {
        return this._verify1(a), this.imod(a.ushln(c));
      }),
      (j.prototype.imul = function (a, c) {
        return this._verify2(a, c), this.imod(a.imul(c));
      }),
      (j.prototype.mul = function (a, c) {
        return this._verify2(a, c), this.imod(a.mul(c));
      }),
      (j.prototype.isqr = function (a) {
        return this.imul(a, a.clone());
      }),
      (j.prototype.sqr = function (a) {
        return this.mul(a, a);
      }),
      (j.prototype.sqrt = function (a) {
        if (a.isZero()) return a.clone();
        var c = this.m.andln(3);
        if ((e(c % 2 === 1), c === 3)) {
          var l = this.m.add(new i(1)).iushrn(2);
          return this.pow(a, l);
        }
        for (var d = this.m.subn(1), p = 0; !d.isZero() && d.andln(1) === 0; )
          p++, d.iushrn(1);
        e(!d.isZero());
        var k = new i(1).toRed(this),
          x = k.redNeg(),
          y = this.m.subn(1).iushrn(1),
          u = this.m.bitLength();
        for (u = new i(2 * u * u).toRed(this); this.pow(u, y).cmp(x) !== 0; )
          u.redIAdd(x);
        for (
          var w = this.pow(u, d),
            V = this.pow(a, d.addn(1).iushrn(1)),
            G = this.pow(a, d),
            Y = p;
          G.cmp(k) !== 0;

        ) {
          for (var et = G, pt = 0; et.cmp(k) !== 0; pt++) et = et.redSqr();
          e(pt < Y);
          var bt = this.pow(w, new i(1).iushln(Y - pt - 1));
          (V = V.redMul(bt)), (w = bt.redSqr()), (G = G.redMul(w)), (Y = pt);
        }
        return V;
      }),
      (j.prototype.invm = function (a) {
        var c = a._invmp(this.m);
        return c.negative !== 0
          ? ((c.negative = 0), this.imod(c).redNeg())
          : this.imod(c);
      }),
      (j.prototype.pow = function (a, c) {
        if (c.isZero()) return new i(1).toRed(this);
        if (c.cmpn(1) === 0) return a.clone();
        var l = 4,
          d = new Array(1 << l);
        (d[0] = new i(1).toRed(this)), (d[1] = a);
        for (var p = 2; p < d.length; p++) d[p] = this.mul(d[p - 1], a);
        var k = d[0],
          x = 0,
          y = 0,
          u = c.bitLength() % 26;
        for (u === 0 && (u = 26), p = c.length - 1; p >= 0; p--) {
          for (var w = c.words[p], V = u - 1; V >= 0; V--) {
            var G = (w >> V) & 1;
            if ((k !== d[0] && (k = this.sqr(k)), G === 0 && x === 0)) {
              y = 0;
              continue;
            }
            (x <<= 1),
              (x |= G),
              y++,
              !(y !== l && (p !== 0 || V !== 0)) &&
                ((k = this.mul(k, d[x])), (y = 0), (x = 0));
          }
          u = 26;
        }
        return k;
      }),
      (j.prototype.convertTo = function (a) {
        var c = a.umod(this.m);
        return c === a ? c.clone() : c;
      }),
      (j.prototype.convertFrom = function (a) {
        var c = a.clone();
        return (c.red = null), c;
      }),
      (i.mont = function (a) {
        return new dt(a);
      });
    function dt(m) {
      j.call(this, m),
        (this.shift = this.m.bitLength()),
        this.shift % 26 !== 0 && (this.shift += 26 - (this.shift % 26)),
        (this.r = new i(1).iushln(this.shift)),
        (this.r2 = this.imod(this.r.sqr())),
        (this.rinv = this.r._invmp(this.m)),
        (this.minv = this.rinv.mul(this.r).isubn(1).div(this.m)),
        (this.minv = this.minv.umod(this.r)),
        (this.minv = this.r.sub(this.minv));
    }
    r(dt, j),
      (dt.prototype.convertTo = function (a) {
        return this.imod(a.ushln(this.shift));
      }),
      (dt.prototype.convertFrom = function (a) {
        var c = this.imod(a.mul(this.rinv));
        return (c.red = null), c;
      }),
      (dt.prototype.imul = function (a, c) {
        if (a.isZero() || c.isZero())
          return (a.words[0] = 0), (a.length = 1), a;
        var l = a.imul(c),
          d = l.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
          p = l.isub(d).iushrn(this.shift),
          k = p;
        return (
          p.cmp(this.m) >= 0
            ? (k = p.isub(this.m))
            : p.cmpn(0) < 0 && (k = p.iadd(this.m)),
          k._forceRed(this)
        );
      }),
      (dt.prototype.mul = function (a, c) {
        if (a.isZero() || c.isZero()) return new i(0)._forceRed(this);
        var l = a.mul(c),
          d = l.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
          p = l.isub(d).iushrn(this.shift),
          k = p;
        return (
          p.cmp(this.m) >= 0
            ? (k = p.isub(this.m))
            : p.cmpn(0) < 0 && (k = p.iadd(this.m)),
          k._forceRed(this)
        );
      }),
      (dt.prototype.invm = function (a) {
        var c = this.imod(a._invmp(this.m).mul(this.r2));
        return c._forceRed(this);
      });
  })(typeof Ro > "u" || Ro, Ka);
});
var $a = Ae((Mo, qa) => {
  "use strict";
  var Un = en(),
    ze = Un.Buffer;
  function Wa(n, t) {
    for (var e in n) t[e] = n[e];
  }
  ze.from && ze.alloc && ze.allocUnsafe && ze.allocUnsafeSlow
    ? (qa.exports = Un)
    : (Wa(Un, Mo), (Mo.Buffer = wr));
  function wr(n, t, e) {
    return ze(n, t, e);
  }
  wr.prototype = Object.create(ze.prototype);
  Wa(ze, wr);
  wr.from = function (n, t, e) {
    if (typeof n == "number")
      throw new TypeError("Argument must not be a number");
    return ze(n, t, e);
  };
  wr.alloc = function (n, t, e) {
    if (typeof n != "number") throw new TypeError("Argument must be a number");
    var r = ze(n);
    return (
      t !== void 0
        ? typeof e == "string"
          ? r.fill(t, e)
          : r.fill(t)
        : r.fill(0),
      r
    );
  };
  wr.allocUnsafe = function (n) {
    if (typeof n != "number") throw new TypeError("Argument must be a number");
    return ze(n);
  };
  wr.allocUnsafeSlow = function (n) {
    if (typeof n != "number") throw new TypeError("Argument must be a number");
    return Un.SlowBuffer(n);
  };
});
var Ha = Ae((p0, Va) => {
  "use strict";
  var Fn = $a().Buffer;
  function Of(n) {
    if (n.length >= 255) throw new TypeError("Alphabet too long");
    for (var t = new Uint8Array(256), e = 0; e < t.length; e++) t[e] = 255;
    for (var r = 0; r < n.length; r++) {
      var i = n.charAt(r),
        o = i.charCodeAt(0);
      if (t[o] !== 255) throw new TypeError(i + " is ambiguous");
      t[o] = r;
    }
    var s = n.length,
      f = n.charAt(0),
      h = Math.log(s) / Math.log(256),
      b = Math.log(256) / Math.log(s);
    function B(_) {
      if (
        ((Array.isArray(_) || _ instanceof Uint8Array) && (_ = Fn.from(_)),
        !Fn.isBuffer(_))
      )
        throw new TypeError("Expected Buffer");
      if (_.length === 0) return "";
      for (var E = 0, T = 0, C = 0, L = _.length; C !== L && _[C] === 0; )
        C++, E++;
      for (var N = ((L - C) * b + 1) >>> 0, W = new Uint8Array(N); C !== L; ) {
        for (
          var q = _[C], ut = 0, tt = N - 1;
          (q !== 0 || ut < T) && tt !== -1;
          tt--, ut++
        )
          (q += (256 * W[tt]) >>> 0),
            (W[tt] = q % s >>> 0),
            (q = (q / s) >>> 0);
        if (q !== 0) throw new Error("Non-zero carry");
        (T = ut), C++;
      }
      for (var ot = N - T; ot !== N && W[ot] === 0; ) ot++;
      for (var lt = f.repeat(E); ot < N; ++ot) lt += n.charAt(W[ot]);
      return lt;
    }
    function S(_) {
      if (typeof _ != "string") throw new TypeError("Expected String");
      if (_.length === 0) return Fn.alloc(0);
      for (var E = 0, T = 0, C = 0; _[E] === f; ) T++, E++;
      for (
        var L = ((_.length - E) * h + 1) >>> 0, N = new Uint8Array(L);
        E < _.length;

      ) {
        var W = _.charCodeAt(E);
        if (W > 255) return;
        var q = t[W];
        if (q === 255) return;
        for (
          var ut = 0, tt = L - 1;
          (q !== 0 || ut < C) && tt !== -1;
          tt--, ut++
        )
          (q += (s * N[tt]) >>> 0),
            (N[tt] = q % 256 >>> 0),
            (q = (q / 256) >>> 0);
        if (q !== 0) throw new Error("Non-zero carry");
        (C = ut), E++;
      }
      for (var ot = L - C; ot !== L && N[ot] === 0; ) ot++;
      var lt = Fn.allocUnsafe(T + (L - ot));
      lt.fill(0, 0, T);
      for (var $ = T; ot !== L; ) lt[$++] = N[ot++];
      return lt;
    }
    function U(_) {
      var E = S(_);
      if (E) return E;
      throw new Error("Non-base" + s + " character");
    }
    return { encode: B, decodeUnsafe: S, decode: U };
  }
  Va.exports = Of;
});
var To = Ae((y0, Ga) => {
  "use strict";
  var zf = Ha(),
    Df = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
  Ga.exports = zf(Df);
});
function Wf(n, t, e, r) {
  let i = n.sqr(e),
    o = n.sqr(r),
    s = n.add(n.mul(t.a, i), o),
    f = n.add(n.ONE, n.mul(t.d, n.mul(i, o)));
  return n.eql(s, f);
}
function qf(n, t = {}) {
  let e = oa("edwards", n, t, t.FpFnLE),
    { Fp: r, Fn: i } = e,
    o = e.CURVE,
    { h: s } = o;
  so(t, {}, { uvRatio: "function" });
  let f = Po << (BigInt(i.BYTES * 8) - fe),
    h = (C) => r.create(C),
    b =
      t.uvRatio ||
      ((C, L) => {
        try {
          return { isValid: !0, value: r.sqrt(r.div(C, L)) };
        } catch {
          return { isValid: !1, value: ar };
        }
      });
  if (!Wf(r, o, o.Gx, o.Gy))
    throw new Error("bad curve params: generator point");
  function B(C, L, N = !1) {
    let W = N ? fe : ar;
    return oo("coordinate " + C, L, W, f), L;
  }
  function S(C) {
    if (!(C instanceof E)) throw new Error("ExtendedPoint expected");
  }
  let U = ao((C, L) => {
      let { X: N, Y: W, Z: q } = C,
        ut = C.is0();
      L == null && (L = ut ? Kf : r.inv(q));
      let tt = h(N * L),
        ot = h(W * L),
        lt = r.mul(q, L);
      if (ut) return { x: ar, y: fe };
      if (lt !== fe) throw new Error("invZ was invalid");
      return { x: tt, y: ot };
    }),
    _ = ao((C) => {
      let { a: L, d: N } = o;
      if (C.is0()) throw new Error("bad point: ZERO");
      let { X: W, Y: q, Z: ut, T: tt } = C,
        ot = h(W * W),
        lt = h(q * q),
        $ = h(ut * ut),
        J = h($ * $),
        j = h(ot * L),
        dt = h($ * h(j + lt)),
        m = h(J + h(N * h(ot * lt)));
      if (dt !== m) throw new Error("bad point: equation left != right (1)");
      let a = h(W * q),
        c = h(ut * tt);
      if (a !== c) throw new Error("bad point: equation left != right (2)");
      return !0;
    });
  class E {
    constructor(L, N, W, q) {
      (this.X = B("x", L)),
        (this.Y = B("y", N)),
        (this.Z = B("z", W, !0)),
        (this.T = B("t", q)),
        Object.freeze(this);
    }
    static CURVE() {
      return o;
    }
    static fromAffine(L) {
      if (L instanceof E) throw new Error("extended point not allowed");
      let { x: N, y: W } = L || {};
      return B("x", N), B("y", W), new E(N, W, fe, h(N * W));
    }
    static fromBytes(L, N = !1) {
      let W = r.BYTES,
        { a: q, d: ut } = o;
      (L = io(Xr(L, W, "point"))), En(N, "zip215");
      let tt = io(L),
        ot = L[W - 1];
      tt[W - 1] = ot & -129;
      let lt = _n(tt),
        $ = N ? f : r.ORDER;
      oo("point.y", lt, ar, $);
      let J = h(lt * lt),
        j = h(J - fe),
        dt = h(ut * J - q),
        { isValid: m, value: a } = b(j, dt);
      if (!m) throw new Error("bad point: invalid y coordinate");
      let c = (a & fe) === fe,
        l = (ot & 128) !== 0;
      if (!N && a === ar && l) throw new Error("bad point: x=0 and x_0=1");
      return l !== c && (a = h(-a)), E.fromAffine({ x: a, y: lt });
    }
    static fromHex(L, N = !1) {
      return E.fromBytes(Ze("point", L), N);
    }
    get x() {
      return this.toAffine().x;
    }
    get y() {
      return this.toAffine().y;
    }
    precompute(L = 8, N = !0) {
      return T.createCache(this, L), N || this.multiply(Po), this;
    }
    assertValidity() {
      _(this);
    }
    equals(L) {
      S(L);
      let { X: N, Y: W, Z: q } = this,
        { X: ut, Y: tt, Z: ot } = L,
        lt = h(N * ot),
        $ = h(ut * q),
        J = h(W * ot),
        j = h(tt * q);
      return lt === $ && J === j;
    }
    is0() {
      return this.equals(E.ZERO);
    }
    negate() {
      return new E(h(-this.X), this.Y, this.Z, h(-this.T));
    }
    double() {
      let { a: L } = o,
        { X: N, Y: W, Z: q } = this,
        ut = h(N * N),
        tt = h(W * W),
        ot = h(Po * h(q * q)),
        lt = h(L * ut),
        $ = N + W,
        J = h(h($ * $) - ut - tt),
        j = lt + tt,
        dt = j - ot,
        m = lt - tt,
        a = h(J * dt),
        c = h(j * m),
        l = h(J * m),
        d = h(dt * j);
      return new E(a, c, d, l);
    }
    add(L) {
      S(L);
      let { a: N, d: W } = o,
        { X: q, Y: ut, Z: tt, T: ot } = this,
        { X: lt, Y: $, Z: J, T: j } = L,
        dt = h(q * lt),
        m = h(ut * $),
        a = h(ot * W * j),
        c = h(tt * J),
        l = h((q + ut) * (lt + $) - dt - m),
        d = c - a,
        p = c + a,
        k = h(m - N * dt),
        x = h(l * d),
        y = h(p * k),
        u = h(l * k),
        w = h(d * p);
      return new E(x, y, w, u);
    }
    subtract(L) {
      return this.add(L.negate());
    }
    multiply(L) {
      if (!i.isValidNot0(L))
        throw new Error("invalid scalar: expected 1 <= sc < curve.n");
      let { p: N, f: W } = T.cached(this, L, (q) => Qr(E, q));
      return Qr(E, [N, W])[0];
    }
    multiplyUnsafe(L, N = E.ZERO) {
      if (!i.isValid(L))
        throw new Error("invalid scalar: expected 0 <= sc < curve.n");
      return L === ar
        ? E.ZERO
        : this.is0() || L === fe
        ? this
        : T.unsafe(this, L, (W) => Qr(E, W), N);
    }
    isSmallOrder() {
      return this.multiplyUnsafe(s).is0();
    }
    isTorsionFree() {
      return T.unsafe(this, o.n).is0();
    }
    toAffine(L) {
      return U(this, L);
    }
    clearCofactor() {
      return s === fe ? this : this.multiplyUnsafe(s);
    }
    toBytes() {
      let { x: L, y: N } = this.toAffine(),
        W = r.toBytes(N);
      return (W[W.length - 1] |= L & fe ? 128 : 0), W;
    }
    toHex() {
      return Xs(this.toBytes());
    }
    toString() {
      return `<Point ${this.is0() ? "ZERO" : this.toHex()}>`;
    }
    get ex() {
      return this.X;
    }
    get ey() {
      return this.Y;
    }
    get ez() {
      return this.Z;
    }
    get et() {
      return this.T;
    }
    static normalizeZ(L) {
      return Qr(E, L);
    }
    static msm(L, N) {
      return ia(E, i, L, N);
    }
    _setWindowSize(L) {
      this.precompute(L);
    }
    toRawBytes() {
      return this.toBytes();
    }
  }
  (E.BASE = new E(o.Gx, o.Gy, fe, h(o.Gx * o.Gy))),
    (E.ZERO = new E(ar, fe, fe, ar)),
    (E.Fp = r),
    (E.Fn = i);
  let T = new na(E, i.BITS);
  return E.BASE.precompute(8), E;
}
function $f(n, t, e = {}) {
  if (typeof t != "function")
    throw new Error('"hash" function param is required');
  so(
    e,
    {},
    {
      adjustScalarBytes: "function",
      randomBytes: "function",
      domain: "function",
      prehash: "function",
      mapToCurve: "function",
    }
  );
  let { prehash: r } = e,
    { BASE: i, Fp: o, Fn: s } = n,
    f = e.randomBytes || Qs,
    h = e.adjustScalarBytes || (($) => $),
    b =
      e.domain ||
      (($, J, j) => {
        if ((En(j, "phflag"), J.length || j))
          throw new Error("Contexts/pre-hash are not supported");
        return $;
      });
  function B($) {
    return s.create(_n($));
  }
  function S($) {
    let J = W.secretKey;
    $ = Ze("private key", $, J);
    let j = Ze("hashed private key", t($), 2 * J),
      dt = h(j.slice(0, J)),
      m = j.slice(J, 2 * J),
      a = B(dt);
    return { head: dt, prefix: m, scalar: a };
  }
  function U($) {
    let { head: J, prefix: j, scalar: dt } = S($),
      m = i.multiply(dt),
      a = m.toBytes();
    return { head: J, prefix: j, scalar: dt, point: m, pointBytes: a };
  }
  function _($) {
    return U($).pointBytes;
  }
  function E($ = Uint8Array.of(), ...J) {
    let j = to(...J);
    return B(t(b(j, Ze("context", $), !!r)));
  }
  function T($, J, j = {}) {
    ($ = Ze("message", $)), r && ($ = r($));
    let { prefix: dt, scalar: m, pointBytes: a } = U(J),
      c = E(j.context, dt, $),
      l = i.multiply(c).toBytes(),
      d = E(j.context, l, a, $),
      p = s.create(c + d * m);
    if (!s.isValid(p)) throw new Error("sign failed: invalid s");
    let k = to(l, s.toBytes(p));
    return Xr(k, W.signature, "result");
  }
  let C = { zip215: !0 };
  function L($, J, j, dt = C) {
    let { context: m, zip215: a } = dt,
      c = W.signature;
    ($ = Ze("signature", $, c)),
      (J = Ze("message", J)),
      (j = Ze("publicKey", j, W.publicKey)),
      a !== void 0 && En(a, "zip215"),
      r && (J = r(J));
    let l = c / 2,
      d = $.subarray(0, l),
      p = _n($.subarray(l, c)),
      k,
      x,
      y;
    try {
      (k = n.fromBytes(j, a)),
        (x = n.fromBytes(d, a)),
        (y = i.multiplyUnsafe(p));
    } catch {
      return !1;
    }
    if (!a && k.isSmallOrder()) return !1;
    let u = E(m, x.toBytes(), k.toBytes(), J);
    return x.add(k.multiplyUnsafe(u)).subtract(y).clearCofactor().is0();
  }
  let N = o.BYTES,
    W = { secretKey: N, publicKey: N, signature: 2 * N, seed: N };
  function q($ = f(W.seed)) {
    return Xr($, W.seed, "seed");
  }
  function ut($) {
    let J = lt.randomSecretKey($);
    return { secretKey: J, publicKey: _(J) };
  }
  function tt($) {
    return Js($) && $.length === s.BYTES;
  }
  function ot($, J) {
    try {
      return !!n.fromBytes($, J);
    } catch {
      return !1;
    }
  }
  let lt = {
    getExtendedPublicKey: U,
    randomSecretKey: q,
    isValidSecretKey: tt,
    isValidPublicKey: ot,
    toMontgomery($) {
      let { y: J } = n.fromBytes($),
        j = W.publicKey,
        dt = j === 32;
      if (!dt && j !== 57) throw new Error("only defined for 25519 and 448");
      let m = dt ? o.div(fe + J, fe - J) : o.div(J - fe, J + fe);
      return o.toBytes(m);
    },
    toMontgomerySecret($) {
      let J = W.secretKey;
      Xr($, J);
      let j = t($.subarray(0, J));
      return h(j).subarray(0, J);
    },
    randomPrivateKey: q,
    precompute($ = 8, J = n.BASE) {
      return J.precompute($, !1);
    },
  };
  return Object.freeze({
    keygen: ut,
    getPublicKey: _,
    sign: T,
    verify: L,
    utils: lt,
    Point: n,
    lengths: W,
  });
}
function Vf(n) {
  let t = { a: n.a, d: n.d, p: n.Fp.ORDER, n: n.n, h: n.h, Gx: n.Gx, Gy: n.Gy },
    e = n.Fp,
    r = An(t.n, n.nBitLength, !0),
    i = { Fp: e, Fn: r, uvRatio: n.uvRatio },
    o = {
      randomBytes: n.randomBytes,
      adjustScalarBytes: n.adjustScalarBytes,
      domain: n.domain,
      prehash: n.prehash,
      mapToCurve: n.mapToCurve,
    };
  return { CURVE: t, curveOpts: i, hash: n.hash, eddsaOpts: o };
}
function Hf(n, t) {
  let e = t.Point;
  return Object.assign({}, t, {
    ExtendedPoint: e,
    CURVE: n,
    nBitLength: e.Fn.BITS,
    nByteLength: e.Fn.BYTES,
  });
}
function ja(n) {
  let { CURVE: t, curveOpts: e, hash: r, eddsaOpts: i } = Vf(n),
    o = qf(t, e),
    s = $f(o, r, i);
  return Hf(n, s);
}
var ar,
  fe,
  Po,
  Kf,
  Ya = Et(() => {
    "use strict";
    Mc();
    Tc();
    ra();
    (ar = BigInt(0)), (fe = BigInt(1)), (Po = BigInt(2)), (Kf = BigInt(8));
  });
function Zf(n) {
  let t = BigInt(10),
    e = BigInt(20),
    r = BigInt(40),
    i = BigInt(80),
    o = Co,
    f = (((n * n) % o) * n) % o,
    h = (Pe(f, Za, o) * f) % o,
    b = (Pe(h, Gf, o) * n) % o,
    B = (Pe(b, jf, o) * b) % o,
    S = (Pe(B, t, o) * B) % o,
    U = (Pe(S, e, o) * S) % o,
    _ = (Pe(U, r, o) * U) % o,
    E = (Pe(_, i, o) * _) % o,
    T = (Pe(E, i, o) * _) % o,
    C = (Pe(T, t, o) * B) % o;
  return { pow_p_5_8: (Pe(C, Za, o) * n) % o, b2: f };
}
function Jf(n) {
  return (n[0] &= 248), (n[31] &= 127), (n[31] |= 64), n;
}
function Xf(n, t) {
  let e = Co,
    r = Je(t * t * t, e),
    i = Je(r * r * t, e),
    o = Zf(n * i).pow_p_5_8,
    s = Je(n * r * o, e),
    f = Je(t * s * s, e),
    h = s,
    b = Je(s * Ja, e),
    B = f === n,
    S = f === Je(-n, e),
    U = f === Je(-n * Ja, e);
  return (
    B && (s = h),
    (S || U) && (s = b),
    ea(s, e) && (s = Je(-s, e)),
    { isValid: B || S, value: s }
  );
}
var Gf,
  Za,
  _0,
  jf,
  Yf,
  Co,
  Xa,
  Ja,
  Qf,
  th,
  br,
  Qa = Et(() => {
    "use strict";
    Ac();
    Ya();
    ra();
    (Gf = BigInt(1)),
      (Za = BigInt(2)),
      (_0 = BigInt(3)),
      (jf = BigInt(5)),
      (Yf = BigInt(8)),
      (Co = BigInt(
        "0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffed"
      )),
      (Xa = {
        p: Co,
        n: BigInt(
          "0x1000000000000000000000000000000014def9dea2f79cd65812631a5cf5d3ed"
        ),
        h: Yf,
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
      });
    Ja = BigInt(
      "19681161376707505956807079304988542015446066515923890162744021073123829784752"
    );
    (Qf = An(Xa.p, { isLE: !0 })),
      (th = st(Q({}, Xa), {
        Fp: Qf,
        hash: ta,
        adjustScalarBytes: Jf,
        uvRatio: Xf,
      })),
      (br = ja(th));
  });
var tu = {};
Xi(tu, { TextDecoder: () => zn, TextEncoder: () => Dn });
function tr(n, t, e) {
  return t <= n && n <= e;
}
function Kn(n) {
  if (n === void 0) return {};
  if (n === Object(n)) return n;
  throw TypeError("Could not convert argument to dictionary");
}
function eh(n) {
  for (var t = String(n), e = t.length, r = 0, i = []; r < e; ) {
    var o = t.charCodeAt(r);
    if (o < 55296 || o > 57343) i.push(o);
    else if (56320 <= o && o <= 57343) i.push(65533);
    else if (55296 <= o && o <= 56319)
      if (r === e - 1) i.push(65533);
      else {
        var s = n.charCodeAt(r + 1);
        if (56320 <= s && s <= 57343) {
          var f = o & 1023,
            h = s & 1023;
          i.push(65536 + (f << 10) + h), (r += 1);
        } else i.push(65533);
      }
    r += 1;
  }
  return i;
}
function rh(n) {
  for (var t = "", e = 0; e < n.length; ++e) {
    var r = n[e];
    r <= 65535
      ? (t += String.fromCharCode(r))
      : ((r -= 65536),
        (t += String.fromCharCode((r >> 10) + 55296, (r & 1023) + 56320)));
  }
  return t;
}
function Fo(n) {
  this.tokens = [].slice.call(n);
}
function Uo(n, t) {
  if (n) throw TypeError("Decoder error");
  return t || 65533;
}
function nh() {}
function ih() {}
function zn(n, t) {
  if (!(this instanceof zn)) return new zn(n, t);
  if (((n = n !== void 0 ? String(n).toLowerCase() : On), n !== On))
    throw new Error("Encoding not supported. Only utf-8 is supported");
  (t = Kn(t)),
    (this._streaming = !1),
    (this._BOMseen = !1),
    (this._decoder = null),
    (this._fatal = !!t.fatal),
    (this._ignoreBOM = !!t.ignoreBOM),
    Object.defineProperty(this, "encoding", { value: "utf-8" }),
    Object.defineProperty(this, "fatal", { value: this._fatal }),
    Object.defineProperty(this, "ignoreBOM", { value: this._ignoreBOM });
}
function Dn(n, t) {
  if (!(this instanceof Dn)) return new Dn(n, t);
  if (((n = n !== void 0 ? String(n).toLowerCase() : On), n !== On))
    throw new Error("Encoding not supported. Only utf-8 is supported");
  (t = Kn(t)),
    (this._streaming = !1),
    (this._encoder = null),
    (this._options = { fatal: !!t.fatal }),
    Object.defineProperty(this, "encoding", { value: "utf-8" });
}
function oh(n) {
  var t = n.fatal,
    e = 0,
    r = 0,
    i = 0,
    o = 128,
    s = 191;
  this.handler = function (f, h) {
    if (h === Nn && i !== 0) return (i = 0), Uo(t);
    if (h === Nn) return zr;
    if (i === 0) {
      if (tr(h, 0, 127)) return h;
      if (tr(h, 194, 223)) (i = 1), (e = h - 192);
      else if (tr(h, 224, 239))
        h === 224 && (o = 160), h === 237 && (s = 159), (i = 2), (e = h - 224);
      else if (tr(h, 240, 244))
        h === 240 && (o = 144), h === 244 && (s = 143), (i = 3), (e = h - 240);
      else return Uo(t);
      return (e = e << (6 * i)), null;
    }
    if (!tr(h, o, s))
      return (e = i = r = 0), (o = 128), (s = 191), f.prepend(h), Uo(t);
    if (
      ((o = 128),
      (s = 191),
      (r += 1),
      (e += (h - 128) << (6 * (i - r))),
      r !== i)
    )
      return null;
    var b = e;
    return (e = i = r = 0), b;
  };
}
function sh(n) {
  var t = n.fatal;
  this.handler = function (e, r) {
    if (r === Nn) return zr;
    if (tr(r, 0, 127)) return r;
    var i, o;
    tr(r, 128, 2047)
      ? ((i = 1), (o = 192))
      : tr(r, 2048, 65535)
      ? ((i = 2), (o = 224))
      : tr(r, 65536, 1114111) && ((i = 3), (o = 240));
    for (var s = [(r >> (6 * i)) + o]; i > 0; ) {
      var f = r >> (6 * (i - 1));
      s.push(128 | (f & 63)), (i -= 1);
    }
    return s;
  };
}
var Nn,
  zr,
  On,
  eu = Et(() => {
    "use strict";
    Nn = -1;
    Fo.prototype = {
      endOfStream: function () {
        return !this.tokens.length;
      },
      read: function () {
        return this.tokens.length ? this.tokens.shift() : Nn;
      },
      prepend: function (n) {
        if (Array.isArray(n))
          for (var t = n; t.length; ) this.tokens.unshift(t.pop());
        else this.tokens.unshift(n);
      },
      push: function (n) {
        if (Array.isArray(n))
          for (var t = n; t.length; ) this.tokens.push(t.shift());
        else this.tokens.push(n);
      },
    };
    zr = -1;
    nh.prototype = { handler: function (n, t) {} };
    ih.prototype = { handler: function (n, t) {} };
    On = "utf-8";
    zn.prototype = {
      decode: function (t, e) {
        var r;
        typeof t == "object" && t instanceof ArrayBuffer
          ? (r = new Uint8Array(t))
          : typeof t == "object" &&
            "buffer" in t &&
            t.buffer instanceof ArrayBuffer
          ? (r = new Uint8Array(t.buffer, t.byteOffset, t.byteLength))
          : (r = new Uint8Array(0)),
          (e = Kn(e)),
          this._streaming ||
            ((this._decoder = new oh({ fatal: this._fatal })),
            (this._BOMseen = !1)),
          (this._streaming = !!e.stream);
        for (
          var i = new Fo(r), o = [], s;
          !i.endOfStream() &&
          ((s = this._decoder.handler(i, i.read())), s !== zr);

        )
          s !== null && (Array.isArray(s) ? o.push.apply(o, s) : o.push(s));
        if (!this._streaming) {
          do {
            if (((s = this._decoder.handler(i, i.read())), s === zr)) break;
            s !== null && (Array.isArray(s) ? o.push.apply(o, s) : o.push(s));
          } while (!i.endOfStream());
          this._decoder = null;
        }
        return (
          o.length &&
            ["utf-8"].indexOf(this.encoding) !== -1 &&
            !this._ignoreBOM &&
            !this._BOMseen &&
            (o[0] === 65279
              ? ((this._BOMseen = !0), o.shift())
              : (this._BOMseen = !0)),
          rh(o)
        );
      },
    };
    Dn.prototype = {
      encode: function (t, e) {
        (t = t ? String(t) : ""),
          (e = Kn(e)),
          this._streaming || (this._encoder = new sh(this._options)),
          (this._streaming = !!e.stream);
        for (
          var r = [], i = new Fo(eh(t)), o;
          !i.endOfStream() &&
          ((o = this._encoder.handler(i, i.read())), o !== zr);

        )
          Array.isArray(o) ? r.push.apply(r, o) : r.push(o);
        if (!this._streaming) {
          for (; (o = this._encoder.handler(i, i.read())), o !== zr; )
            Array.isArray(o) ? r.push.apply(r, o) : r.push(o);
          this._encoder = null;
        }
        return new Uint8Array(r);
      },
    };
  });
var su = Ae((wt) => {
  "use strict";
  var ah =
      (wt && wt.__createBinding) ||
      (Object.create
        ? function (n, t, e, r) {
            r === void 0 && (r = e),
              Object.defineProperty(n, r, {
                enumerable: !0,
                get: function () {
                  return t[e];
                },
              });
          }
        : function (n, t, e, r) {
            r === void 0 && (r = e), (n[r] = t[e]);
          }),
    uh =
      (wt && wt.__setModuleDefault) ||
      (Object.create
        ? function (n, t) {
            Object.defineProperty(n, "default", { enumerable: !0, value: t });
          }
        : function (n, t) {
            n.default = t;
          }),
    De =
      (wt && wt.__decorate) ||
      function (n, t, e, r) {
        var i = arguments.length,
          o =
            i < 3
              ? t
              : r === null
              ? (r = Object.getOwnPropertyDescriptor(t, e))
              : r,
          s;
        if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
          o = Reflect.decorate(n, t, e, r);
        else
          for (var f = n.length - 1; f >= 0; f--)
            (s = n[f]) &&
              (o = (i < 3 ? s(o) : i > 3 ? s(t, e, o) : s(t, e)) || o);
        return i > 3 && o && Object.defineProperty(t, e, o), o;
      },
    ch =
      (wt && wt.__importStar) ||
      function (n) {
        if (n && n.__esModule) return n;
        var t = {};
        if (n != null)
          for (var e in n)
            e !== "default" && Object.hasOwnProperty.call(n, e) && ah(t, n, e);
        return uh(t, n), t;
      },
    ru =
      (wt && wt.__importDefault) ||
      function (n) {
        return n && n.__esModule ? n : { default: n };
      };
  Object.defineProperty(wt, "__esModule", { value: !0 });
  wt.deserializeUnchecked =
    wt.deserialize =
    wt.serialize =
    wt.BinaryReader =
    wt.BinaryWriter =
    wt.BorshError =
    wt.baseDecode =
    wt.baseEncode =
      void 0;
  var ur = ru(Lo()),
    nu = ru(To()),
    fh = ch((eu(), Qi(tu))),
    hh = typeof TextDecoder != "function" ? fh.TextDecoder : TextDecoder,
    lh = new hh("utf-8", { fatal: !0 });
  function dh(n) {
    return (
      typeof n == "string" && (n = Buffer.from(n, "utf8")),
      nu.default.encode(Buffer.from(n))
    );
  }
  wt.baseEncode = dh;
  function ph(n) {
    return Buffer.from(nu.default.decode(n));
  }
  wt.baseDecode = ph;
  var No = 1024,
    de = class extends Error {
      constructor(t) {
        super(t), (this.fieldPath = []), (this.originalMessage = t);
      }
      addToFieldPath(t) {
        this.fieldPath.splice(0, 0, t),
          (this.message =
            this.originalMessage + ": " + this.fieldPath.join("."));
      }
    };
  wt.BorshError = de;
  var Wn = class {
    constructor() {
      (this.buf = Buffer.alloc(No)), (this.length = 0);
    }
    maybeResize() {
      this.buf.length < 16 + this.length &&
        (this.buf = Buffer.concat([this.buf, Buffer.alloc(No)]));
    }
    writeU8(t) {
      this.maybeResize(),
        this.buf.writeUInt8(t, this.length),
        (this.length += 1);
    }
    writeU16(t) {
      this.maybeResize(),
        this.buf.writeUInt16LE(t, this.length),
        (this.length += 2);
    }
    writeU32(t) {
      this.maybeResize(),
        this.buf.writeUInt32LE(t, this.length),
        (this.length += 4);
    }
    writeU64(t) {
      this.maybeResize(),
        this.writeBuffer(Buffer.from(new ur.default(t).toArray("le", 8)));
    }
    writeU128(t) {
      this.maybeResize(),
        this.writeBuffer(Buffer.from(new ur.default(t).toArray("le", 16)));
    }
    writeU256(t) {
      this.maybeResize(),
        this.writeBuffer(Buffer.from(new ur.default(t).toArray("le", 32)));
    }
    writeU512(t) {
      this.maybeResize(),
        this.writeBuffer(Buffer.from(new ur.default(t).toArray("le", 64)));
    }
    writeBuffer(t) {
      (this.buf = Buffer.concat([
        Buffer.from(this.buf.subarray(0, this.length)),
        t,
        Buffer.alloc(No),
      ])),
        (this.length += t.length);
    }
    writeString(t) {
      this.maybeResize();
      let e = Buffer.from(t, "utf8");
      this.writeU32(e.length), this.writeBuffer(e);
    }
    writeFixedArray(t) {
      this.writeBuffer(Buffer.from(t));
    }
    writeArray(t, e) {
      this.maybeResize(), this.writeU32(t.length);
      for (let r of t) this.maybeResize(), e(r);
    }
    toArray() {
      return this.buf.subarray(0, this.length);
    }
  };
  wt.BinaryWriter = Wn;
  function Ke(n, t, e) {
    let r = e.value;
    e.value = function (...i) {
      try {
        return r.apply(this, i);
      } catch (o) {
        if (o instanceof RangeError) {
          let s = o.code;
          if (["ERR_BUFFER_OUT_OF_BOUNDS", "ERR_OUT_OF_RANGE"].indexOf(s) >= 0)
            throw new de("Reached the end of buffer when deserializing");
        }
        throw o;
      }
    };
  }
  var xe = class {
    constructor(t) {
      (this.buf = t), (this.offset = 0);
    }
    readU8() {
      let t = this.buf.readUInt8(this.offset);
      return (this.offset += 1), t;
    }
    readU16() {
      let t = this.buf.readUInt16LE(this.offset);
      return (this.offset += 2), t;
    }
    readU32() {
      let t = this.buf.readUInt32LE(this.offset);
      return (this.offset += 4), t;
    }
    readU64() {
      let t = this.readBuffer(8);
      return new ur.default(t, "le");
    }
    readU128() {
      let t = this.readBuffer(16);
      return new ur.default(t, "le");
    }
    readU256() {
      let t = this.readBuffer(32);
      return new ur.default(t, "le");
    }
    readU512() {
      let t = this.readBuffer(64);
      return new ur.default(t, "le");
    }
    readBuffer(t) {
      if (this.offset + t > this.buf.length)
        throw new de(`Expected buffer length ${t} isn't within bounds`);
      let e = this.buf.slice(this.offset, this.offset + t);
      return (this.offset += t), e;
    }
    readString() {
      let t = this.readU32(),
        e = this.readBuffer(t);
      try {
        return lh.decode(e);
      } catch (r) {
        throw new de(`Error decoding UTF-8 string: ${r}`);
      }
    }
    readFixedArray(t) {
      return new Uint8Array(this.readBuffer(t));
    }
    readArray(t) {
      let e = this.readU32(),
        r = Array();
      for (let i = 0; i < e; ++i) r.push(t());
      return r;
    }
  };
  De([Ke], xe.prototype, "readU8", null);
  De([Ke], xe.prototype, "readU16", null);
  De([Ke], xe.prototype, "readU32", null);
  De([Ke], xe.prototype, "readU64", null);
  De([Ke], xe.prototype, "readU128", null);
  De([Ke], xe.prototype, "readU256", null);
  De([Ke], xe.prototype, "readU512", null);
  De([Ke], xe.prototype, "readString", null);
  De([Ke], xe.prototype, "readFixedArray", null);
  De([Ke], xe.prototype, "readArray", null);
  wt.BinaryReader = xe;
  function iu(n) {
    return n.charAt(0).toUpperCase() + n.slice(1);
  }
  function kr(n, t, e, r, i) {
    try {
      if (typeof r == "string") i[`write${iu(r)}`](e);
      else if (r instanceof Array)
        if (typeof r[0] == "number") {
          if (e.length !== r[0])
            throw new de(
              `Expecting byte array of length ${r[0]}, but got ${e.length} bytes`
            );
          i.writeFixedArray(e);
        } else if (r.length === 2 && typeof r[1] == "number") {
          if (e.length !== r[1])
            throw new de(
              `Expecting byte array of length ${r[1]}, but got ${e.length} bytes`
            );
          for (let o = 0; o < r[1]; o++) kr(n, null, e[o], r[0], i);
        } else
          i.writeArray(e, (o) => {
            kr(n, t, o, r[0], i);
          });
      else if (r.kind !== void 0)
        switch (r.kind) {
          case "option": {
            e == null ? i.writeU8(0) : (i.writeU8(1), kr(n, t, e, r.type, i));
            break;
          }
          case "map": {
            i.writeU32(e.size),
              e.forEach((o, s) => {
                kr(n, t, s, r.key, i), kr(n, t, o, r.value, i);
              });
            break;
          }
          default:
            throw new de(`FieldType ${r} unrecognized`);
        }
      else ou(n, e, i);
    } catch (o) {
      throw (o instanceof de && o.addToFieldPath(t), o);
    }
  }
  function ou(n, t, e) {
    if (typeof t.borshSerialize == "function") {
      t.borshSerialize(e);
      return;
    }
    let r = n.get(t.constructor);
    if (!r) throw new de(`Class ${t.constructor.name} is missing in schema`);
    if (r.kind === "struct")
      r.fields.map(([i, o]) => {
        kr(n, i, t[i], o, e);
      });
    else if (r.kind === "enum") {
      let i = t[r.field];
      for (let o = 0; o < r.values.length; ++o) {
        let [s, f] = r.values[o];
        if (s === i) {
          e.writeU8(o), kr(n, s, t[s], f, e);
          break;
        }
      }
    } else
      throw new de(
        `Unexpected schema kind: ${r.kind} for ${t.constructor.name}`
      );
  }
  function yh(n, t, e = Wn) {
    let r = new e();
    return ou(n, t, r), r.toArray();
  }
  wt.serialize = yh;
  function Br(n, t, e, r) {
    try {
      if (typeof e == "string") return r[`read${iu(e)}`]();
      if (e instanceof Array) {
        if (typeof e[0] == "number") return r.readFixedArray(e[0]);
        if (typeof e[1] == "number") {
          let i = [];
          for (let o = 0; o < e[1]; o++) i.push(Br(n, null, e[0], r));
          return i;
        } else return r.readArray(() => Br(n, t, e[0], r));
      }
      if (e.kind === "option") return r.readU8() ? Br(n, t, e.type, r) : void 0;
      if (e.kind === "map") {
        let i = new Map(),
          o = r.readU32();
        for (let s = 0; s < o; s++) {
          let f = Br(n, t, e.key, r),
            h = Br(n, t, e.value, r);
          i.set(f, h);
        }
        return i;
      }
      return Oo(n, e, r);
    } catch (i) {
      throw (i instanceof de && i.addToFieldPath(t), i);
    }
  }
  function Oo(n, t, e) {
    if (typeof t.borshDeserialize == "function") return t.borshDeserialize(e);
    let r = n.get(t);
    if (!r) throw new de(`Class ${t.name} is missing in schema`);
    if (r.kind === "struct") {
      let i = {};
      for (let [o, s] of n.get(t).fields) i[o] = Br(n, o, s, e);
      return new t(i);
    }
    if (r.kind === "enum") {
      let i = e.readU8();
      if (i >= r.values.length)
        throw new de(`Enum index: ${i} is out of range`);
      let [o, s] = r.values[i],
        f = Br(n, o, s, e);
      return new t({ [o]: f });
    }
    throw new de(`Unexpected schema kind: ${r.kind} for ${t.constructor.name}`);
  }
  function gh(n, t, e, r = xe) {
    let i = new r(e),
      o = Oo(n, t, i);
    if (i.offset < e.length)
      throw new de(
        `Unexpected ${e.length - i.offset} bytes after deserialized data`
      );
    return o;
  }
  wt.deserialize = gh;
  function mh(n, t, e, r = xe) {
    let i = new r(e);
    return Oo(n, t, i);
  }
  wt.deserializeUnchecked = mh;
});
var Wo = Ae((v) => {
  "use strict";
  Object.defineProperty(v, "__esModule", { value: !0 });
  v.s16 =
    v.s8 =
    v.nu64be =
    v.u48be =
    v.u40be =
    v.u32be =
    v.u24be =
    v.u16be =
    v.nu64 =
    v.u48 =
    v.u40 =
    v.u32 =
    v.u24 =
    v.u16 =
    v.u8 =
    v.offset =
    v.greedy =
    v.Constant =
    v.UTF8 =
    v.CString =
    v.Blob =
    v.Boolean =
    v.BitField =
    v.BitStructure =
    v.VariantLayout =
    v.Union =
    v.UnionLayoutDiscriminator =
    v.UnionDiscriminator =
    v.Structure =
    v.Sequence =
    v.DoubleBE =
    v.Double =
    v.FloatBE =
    v.Float =
    v.NearInt64BE =
    v.NearInt64 =
    v.NearUInt64BE =
    v.NearUInt64 =
    v.IntBE =
    v.Int =
    v.UIntBE =
    v.UInt =
    v.OffsetLayout =
    v.GreedyCount =
    v.ExternalLayout =
    v.bindConstructorLayout =
    v.nameWithProperty =
    v.Layout =
    v.uint8ArrayToBuffer =
    v.checkUint8Array =
      void 0;
  v.constant =
    v.utf8 =
    v.cstr =
    v.blob =
    v.unionLayoutDiscriminator =
    v.union =
    v.seq =
    v.bits =
    v.struct =
    v.f64be =
    v.f64 =
    v.f32be =
    v.f32 =
    v.ns64be =
    v.s48be =
    v.s40be =
    v.s32be =
    v.s24be =
    v.s16be =
    v.ns64 =
    v.s48 =
    v.s40 =
    v.s32 =
    v.s24 =
      void 0;
  var Do = en();
  function Wr(n) {
    if (!(n instanceof Uint8Array))
      throw new TypeError("b must be a Uint8Array");
  }
  v.checkUint8Array = Wr;
  function ct(n) {
    return Wr(n), Do.Buffer.from(n.buffer, n.byteOffset, n.length);
  }
  v.uint8ArrayToBuffer = ct;
  var ht = class {
    constructor(t, e) {
      if (!Number.isInteger(t)) throw new TypeError("span must be an integer");
      (this.span = t), (this.property = e);
    }
    makeDestinationObject() {
      return {};
    }
    getSpan(t, e) {
      if (0 > this.span) throw new RangeError("indeterminate span");
      return this.span;
    }
    replicate(t) {
      let e = Object.create(this.constructor.prototype);
      return Object.assign(e, this), (e.property = t), e;
    }
    fromArray(t) {}
  };
  v.Layout = ht;
  function Ko(n, t) {
    return t.property ? n + "[" + t.property + "]" : n;
  }
  v.nameWithProperty = Ko;
  function wh(n, t) {
    if (typeof n != "function")
      throw new TypeError("Class must be constructor");
    if (Object.prototype.hasOwnProperty.call(n, "layout_"))
      throw new Error("Class is already bound to a layout");
    if (!(t && t instanceof ht)) throw new TypeError("layout must be a Layout");
    if (Object.prototype.hasOwnProperty.call(t, "boundConstructor_"))
      throw new Error("layout is already bound to a constructor");
    (n.layout_ = t),
      (t.boundConstructor_ = n),
      (t.makeDestinationObject = () => new n()),
      Object.defineProperty(n.prototype, "encode", {
        value(e, r) {
          return t.encode(this, e, r);
        },
        writable: !0,
      }),
      Object.defineProperty(n, "decode", {
        value(e, r) {
          return t.decode(e, r);
        },
        writable: !0,
      });
  }
  v.bindConstructorLayout = wh;
  var ge = class extends ht {
    isCount() {
      throw new Error("ExternalLayout is abstract");
    }
  };
  v.ExternalLayout = ge;
  var qn = class extends ge {
    constructor(t = 1, e) {
      if (!Number.isInteger(t) || 0 >= t)
        throw new TypeError("elementSpan must be a (positive) integer");
      super(-1, e), (this.elementSpan = t);
    }
    isCount() {
      return !0;
    }
    decode(t, e = 0) {
      Wr(t);
      let r = t.length - e;
      return Math.floor(r / this.elementSpan);
    }
    encode(t, e, r) {
      return 0;
    }
  };
  v.GreedyCount = qn;
  var nn = class extends ge {
    constructor(t, e = 0, r) {
      if (!(t instanceof ht)) throw new TypeError("layout must be a Layout");
      if (!Number.isInteger(e))
        throw new TypeError("offset must be integer or undefined");
      super(t.span, r || t.property), (this.layout = t), (this.offset = e);
    }
    isCount() {
      return this.layout instanceof ve || this.layout instanceof Re;
    }
    decode(t, e = 0) {
      return this.layout.decode(t, e + this.offset);
    }
    encode(t, e, r = 0) {
      return this.layout.encode(t, e, r + this.offset);
    }
  };
  v.OffsetLayout = nn;
  var ve = class extends ht {
    constructor(t, e) {
      if ((super(t, e), 6 < this.span))
        throw new RangeError("span must not exceed 6 bytes");
    }
    decode(t, e = 0) {
      return ct(t).readUIntLE(e, this.span);
    }
    encode(t, e, r = 0) {
      return ct(e).writeUIntLE(t, r, this.span), this.span;
    }
  };
  v.UInt = ve;
  var Re = class extends ht {
    constructor(t, e) {
      if ((super(t, e), 6 < this.span))
        throw new RangeError("span must not exceed 6 bytes");
    }
    decode(t, e = 0) {
      return ct(t).readUIntBE(e, this.span);
    }
    encode(t, e, r = 0) {
      return ct(e).writeUIntBE(t, r, this.span), this.span;
    }
  };
  v.UIntBE = Re;
  var er = class extends ht {
    constructor(t, e) {
      if ((super(t, e), 6 < this.span))
        throw new RangeError("span must not exceed 6 bytes");
    }
    decode(t, e = 0) {
      return ct(t).readIntLE(e, this.span);
    }
    encode(t, e, r = 0) {
      return ct(e).writeIntLE(t, r, this.span), this.span;
    }
  };
  v.Int = er;
  var cr = class extends ht {
    constructor(t, e) {
      if ((super(t, e), 6 < this.span))
        throw new RangeError("span must not exceed 6 bytes");
    }
    decode(t, e = 0) {
      return ct(t).readIntBE(e, this.span);
    }
    encode(t, e, r = 0) {
      return ct(e).writeIntBE(t, r, this.span), this.span;
    }
  };
  v.IntBE = cr;
  var zo = Math.pow(2, 32);
  function si(n) {
    let t = Math.floor(n / zo),
      e = n - t * zo;
    return { hi32: t, lo32: e };
  }
  function ai(n, t) {
    return n * zo + t;
  }
  var $n = class extends ht {
    constructor(t) {
      super(8, t);
    }
    decode(t, e = 0) {
      let r = ct(t),
        i = r.readUInt32LE(e),
        o = r.readUInt32LE(e + 4);
      return ai(o, i);
    }
    encode(t, e, r = 0) {
      let i = si(t),
        o = ct(e);
      return o.writeUInt32LE(i.lo32, r), o.writeUInt32LE(i.hi32, r + 4), 8;
    }
  };
  v.NearUInt64 = $n;
  var Vn = class extends ht {
    constructor(t) {
      super(8, t);
    }
    decode(t, e = 0) {
      let r = ct(t),
        i = r.readUInt32BE(e),
        o = r.readUInt32BE(e + 4);
      return ai(i, o);
    }
    encode(t, e, r = 0) {
      let i = si(t),
        o = ct(e);
      return o.writeUInt32BE(i.hi32, r), o.writeUInt32BE(i.lo32, r + 4), 8;
    }
  };
  v.NearUInt64BE = Vn;
  var Hn = class extends ht {
    constructor(t) {
      super(8, t);
    }
    decode(t, e = 0) {
      let r = ct(t),
        i = r.readUInt32LE(e),
        o = r.readInt32LE(e + 4);
      return ai(o, i);
    }
    encode(t, e, r = 0) {
      let i = si(t),
        o = ct(e);
      return o.writeUInt32LE(i.lo32, r), o.writeInt32LE(i.hi32, r + 4), 8;
    }
  };
  v.NearInt64 = Hn;
  var Gn = class extends ht {
    constructor(t) {
      super(8, t);
    }
    decode(t, e = 0) {
      let r = ct(t),
        i = r.readInt32BE(e),
        o = r.readUInt32BE(e + 4);
      return ai(i, o);
    }
    encode(t, e, r = 0) {
      let i = si(t),
        o = ct(e);
      return o.writeInt32BE(i.hi32, r), o.writeUInt32BE(i.lo32, r + 4), 8;
    }
  };
  v.NearInt64BE = Gn;
  var jn = class extends ht {
    constructor(t) {
      super(4, t);
    }
    decode(t, e = 0) {
      return ct(t).readFloatLE(e);
    }
    encode(t, e, r = 0) {
      return ct(e).writeFloatLE(t, r), 4;
    }
  };
  v.Float = jn;
  var Yn = class extends ht {
    constructor(t) {
      super(4, t);
    }
    decode(t, e = 0) {
      return ct(t).readFloatBE(e);
    }
    encode(t, e, r = 0) {
      return ct(e).writeFloatBE(t, r), 4;
    }
  };
  v.FloatBE = Yn;
  var Zn = class extends ht {
    constructor(t) {
      super(8, t);
    }
    decode(t, e = 0) {
      return ct(t).readDoubleLE(e);
    }
    encode(t, e, r = 0) {
      return ct(e).writeDoubleLE(t, r), 8;
    }
  };
  v.Double = Zn;
  var Jn = class extends ht {
    constructor(t) {
      super(8, t);
    }
    decode(t, e = 0) {
      return ct(t).readDoubleBE(e);
    }
    encode(t, e, r = 0) {
      return ct(e).writeDoubleBE(t, r), 8;
    }
  };
  v.DoubleBE = Jn;
  var Xn = class extends ht {
    constructor(t, e, r) {
      if (!(t instanceof ht))
        throw new TypeError("elementLayout must be a Layout");
      if (
        !((e instanceof ge && e.isCount()) || (Number.isInteger(e) && 0 <= e))
      )
        throw new TypeError(
          "count must be non-negative integer or an unsigned integer ExternalLayout"
        );
      let i = -1;
      !(e instanceof ge) && 0 < t.span && (i = e * t.span),
        super(i, r),
        (this.elementLayout = t),
        (this.count = e);
    }
    getSpan(t, e = 0) {
      if (0 <= this.span) return this.span;
      let r = 0,
        i = this.count;
      if (
        (i instanceof ge && (i = i.decode(t, e)), 0 < this.elementLayout.span)
      )
        r = i * this.elementLayout.span;
      else {
        let o = 0;
        for (; o < i; ) (r += this.elementLayout.getSpan(t, e + r)), ++o;
      }
      return r;
    }
    decode(t, e = 0) {
      let r = [],
        i = 0,
        o = this.count;
      for (o instanceof ge && (o = o.decode(t, e)); i < o; )
        r.push(this.elementLayout.decode(t, e)),
          (e += this.elementLayout.getSpan(t, e)),
          (i += 1);
      return r;
    }
    encode(t, e, r = 0) {
      let i = this.elementLayout,
        o = t.reduce((s, f) => s + i.encode(f, e, r + s), 0);
      return this.count instanceof ge && this.count.encode(t.length, e, r), o;
    }
  };
  v.Sequence = Xn;
  var Qn = class extends ht {
    constructor(t, e, r) {
      if (!(Array.isArray(t) && t.reduce((o, s) => o && s instanceof ht, !0)))
        throw new TypeError("fields must be array of Layout instances");
      typeof e == "boolean" && r === void 0 && ((r = e), (e = void 0));
      for (let o of t)
        if (0 > o.span && o.property === void 0)
          throw new Error(
            "fields cannot contain unnamed variable-length layout"
          );
      let i = -1;
      try {
        i = t.reduce((o, s) => o + s.getSpan(), 0);
      } catch {}
      super(i, e), (this.fields = t), (this.decodePrefixes = !!r);
    }
    getSpan(t, e = 0) {
      if (0 <= this.span) return this.span;
      let r = 0;
      try {
        r = this.fields.reduce((i, o) => {
          let s = o.getSpan(t, e);
          return (e += s), i + s;
        }, 0);
      } catch {
        throw new RangeError("indeterminate span");
      }
      return r;
    }
    decode(t, e = 0) {
      Wr(t);
      let r = this.makeDestinationObject();
      for (let i of this.fields)
        if (
          (i.property !== void 0 && (r[i.property] = i.decode(t, e)),
          (e += i.getSpan(t, e)),
          this.decodePrefixes && t.length === e)
        )
          break;
      return r;
    }
    encode(t, e, r = 0) {
      let i = r,
        o = 0,
        s = 0;
      for (let f of this.fields) {
        let h = f.span;
        if (((s = 0 < h ? h : 0), f.property !== void 0)) {
          let b = t[f.property];
          b !== void 0 &&
            ((s = f.encode(b, e, r)), 0 > h && (h = f.getSpan(e, r)));
        }
        (o = r), (r += h);
      }
      return o + s - i;
    }
    fromArray(t) {
      let e = this.makeDestinationObject();
      for (let r of this.fields)
        r.property !== void 0 && 0 < t.length && (e[r.property] = t.shift());
      return e;
    }
    layoutFor(t) {
      if (typeof t != "string") throw new TypeError("property must be string");
      for (let e of this.fields) if (e.property === t) return e;
    }
    offsetOf(t) {
      if (typeof t != "string") throw new TypeError("property must be string");
      let e = 0;
      for (let r of this.fields) {
        if (r.property === t) return e;
        0 > r.span ? (e = -1) : 0 <= e && (e += r.span);
      }
    }
  };
  v.Structure = Qn;
  var on = class {
    constructor(t) {
      this.property = t;
    }
    decode(t, e) {
      throw new Error("UnionDiscriminator is abstract");
    }
    encode(t, e, r) {
      throw new Error("UnionDiscriminator is abstract");
    }
  };
  v.UnionDiscriminator = on;
  var Kr = class extends on {
    constructor(t, e) {
      if (!(t instanceof ge && t.isCount()))
        throw new TypeError(
          "layout must be an unsigned integer ExternalLayout"
        );
      super(e || t.property || "variant"), (this.layout = t);
    }
    decode(t, e) {
      return this.layout.decode(t, e);
    }
    encode(t, e, r) {
      return this.layout.encode(t, e, r);
    }
  };
  v.UnionLayoutDiscriminator = Kr;
  var sn = class extends ht {
    constructor(t, e, r) {
      let i;
      if (t instanceof ve || t instanceof Re) i = new Kr(new nn(t));
      else if (t instanceof ge && t.isCount()) i = new Kr(t);
      else if (t instanceof on) i = t;
      else
        throw new TypeError(
          "discr must be a UnionDiscriminator or an unsigned integer layout"
        );
      if ((e === void 0 && (e = null), !(e === null || e instanceof ht)))
        throw new TypeError("defaultLayout must be null or a Layout");
      if (e !== null) {
        if (0 > e.span)
          throw new Error("defaultLayout must have constant span");
        e.property === void 0 && (e = e.replicate("content"));
      }
      let o = -1;
      e &&
        ((o = e.span),
        0 <= o && (t instanceof ve || t instanceof Re) && (o += i.layout.span)),
        super(o, r),
        (this.discriminator = i),
        (this.usesPrefixDiscriminator = t instanceof ve || t instanceof Re),
        (this.defaultLayout = e),
        (this.registry = {});
      let s = this.defaultGetSourceVariant.bind(this);
      (this.getSourceVariant = function (f) {
        return s(f);
      }),
        (this.configGetSourceVariant = function (f) {
          s = f.bind(this);
        });
    }
    getSpan(t, e = 0) {
      if (0 <= this.span) return this.span;
      let r = this.getVariant(t, e);
      if (!r)
        throw new Error("unable to determine span for unrecognized variant");
      return r.getSpan(t, e);
    }
    defaultGetSourceVariant(t) {
      if (
        Object.prototype.hasOwnProperty.call(t, this.discriminator.property)
      ) {
        if (
          this.defaultLayout &&
          this.defaultLayout.property &&
          Object.prototype.hasOwnProperty.call(t, this.defaultLayout.property)
        )
          return;
        let e = this.registry[t[this.discriminator.property]];
        if (
          e &&
          (!e.layout ||
            (e.property && Object.prototype.hasOwnProperty.call(t, e.property)))
        )
          return e;
      } else
        for (let e in this.registry) {
          let r = this.registry[e];
          if (r.property && Object.prototype.hasOwnProperty.call(t, r.property))
            return r;
        }
      throw new Error("unable to infer src variant");
    }
    decode(t, e = 0) {
      let r,
        i = this.discriminator,
        o = i.decode(t, e),
        s = this.registry[o];
      if (s === void 0) {
        let f = this.defaultLayout,
          h = 0;
        this.usesPrefixDiscriminator && (h = i.layout.span),
          (r = this.makeDestinationObject()),
          (r[i.property] = o),
          (r[f.property] = f.decode(t, e + h));
      } else r = s.decode(t, e);
      return r;
    }
    encode(t, e, r = 0) {
      let i = this.getSourceVariant(t);
      if (i === void 0) {
        let o = this.discriminator,
          s = this.defaultLayout,
          f = 0;
        return (
          this.usesPrefixDiscriminator && (f = o.layout.span),
          o.encode(t[o.property], e, r),
          f + s.encode(t[s.property], e, r + f)
        );
      }
      return i.encode(t, e, r);
    }
    addVariant(t, e, r) {
      let i = new ti(this, t, e, r);
      return (this.registry[t] = i), i;
    }
    getVariant(t, e = 0) {
      let r;
      return (
        t instanceof Uint8Array
          ? (r = this.discriminator.decode(t, e))
          : (r = t),
        this.registry[r]
      );
    }
  };
  v.Union = sn;
  var ti = class extends ht {
    constructor(t, e, r, i) {
      if (!(t instanceof sn)) throw new TypeError("union must be a Union");
      if (!Number.isInteger(e) || 0 > e)
        throw new TypeError("variant must be a (non-negative) integer");
      if ((typeof r == "string" && i === void 0 && ((i = r), (r = null)), r)) {
        if (!(r instanceof ht)) throw new TypeError("layout must be a Layout");
        if (
          t.defaultLayout !== null &&
          0 <= r.span &&
          r.span > t.defaultLayout.span
        )
          throw new Error("variant span exceeds span of containing union");
        if (typeof i != "string")
          throw new TypeError("variant must have a String property");
      }
      let o = t.span;
      0 > t.span &&
        ((o = r ? r.span : 0),
        0 <= o &&
          t.usesPrefixDiscriminator &&
          (o += t.discriminator.layout.span)),
        super(o, i),
        (this.union = t),
        (this.variant = e),
        (this.layout = r || null);
    }
    getSpan(t, e = 0) {
      if (0 <= this.span) return this.span;
      let r = 0;
      this.union.usesPrefixDiscriminator &&
        (r = this.union.discriminator.layout.span);
      let i = 0;
      return this.layout && (i = this.layout.getSpan(t, e + r)), r + i;
    }
    decode(t, e = 0) {
      let r = this.makeDestinationObject();
      if (this !== this.union.getVariant(t, e))
        throw new Error("variant mismatch");
      let i = 0;
      return (
        this.union.usesPrefixDiscriminator &&
          (i = this.union.discriminator.layout.span),
        this.layout
          ? (r[this.property] = this.layout.decode(t, e + i))
          : this.property
          ? (r[this.property] = !0)
          : this.union.usesPrefixDiscriminator &&
            (r[this.union.discriminator.property] = this.variant),
        r
      );
    }
    encode(t, e, r = 0) {
      let i = 0;
      if (
        (this.union.usesPrefixDiscriminator &&
          (i = this.union.discriminator.layout.span),
        this.layout && !Object.prototype.hasOwnProperty.call(t, this.property))
      )
        throw new TypeError("variant lacks property " + this.property);
      this.union.discriminator.encode(this.variant, e, r);
      let o = i;
      if (
        this.layout &&
        (this.layout.encode(t[this.property], e, r + i),
        (o += this.layout.getSpan(e, r + i)),
        0 <= this.union.span && o > this.union.span)
      )
        throw new Error("encoded variant overruns containing union");
      return o;
    }
    fromArray(t) {
      if (this.layout) return this.layout.fromArray(t);
    }
  };
  v.VariantLayout = ti;
  function Dr(n) {
    return 0 > n && (n += 4294967296), n;
  }
  var an = class extends ht {
    constructor(t, e, r) {
      if (!(t instanceof ve || t instanceof Re))
        throw new TypeError("word must be a UInt or UIntBE layout");
      if (
        (typeof e == "string" && r === void 0 && ((r = e), (e = !1)),
        4 < t.span)
      )
        throw new RangeError("word cannot exceed 32 bits");
      super(t.span, r), (this.word = t), (this.msb = !!e), (this.fields = []);
      let i = 0;
      (this._packedSetValue = function (o) {
        return (i = Dr(o)), this;
      }),
        (this._packedGetValue = function () {
          return i;
        });
    }
    decode(t, e = 0) {
      let r = this.makeDestinationObject(),
        i = this.word.decode(t, e);
      this._packedSetValue(i);
      for (let o of this.fields)
        o.property !== void 0 && (r[o.property] = o.decode(t));
      return r;
    }
    encode(t, e, r = 0) {
      let i = this.word.decode(e, r);
      this._packedSetValue(i);
      for (let o of this.fields)
        if (o.property !== void 0) {
          let s = t[o.property];
          s !== void 0 && o.encode(s);
        }
      return this.word.encode(this._packedGetValue(), e, r);
    }
    addField(t, e) {
      let r = new un(this, t, e);
      return this.fields.push(r), r;
    }
    addBoolean(t) {
      let e = new ei(this, t);
      return this.fields.push(e), e;
    }
    fieldFor(t) {
      if (typeof t != "string") throw new TypeError("property must be string");
      for (let e of this.fields) if (e.property === t) return e;
    }
  };
  v.BitStructure = an;
  var un = class {
    constructor(t, e, r) {
      if (!(t instanceof an))
        throw new TypeError("container must be a BitStructure");
      if (!Number.isInteger(e) || 0 >= e)
        throw new TypeError("bits must be positive integer");
      let i = 8 * t.span,
        o = t.fields.reduce((s, f) => s + f.bits, 0);
      if (e + o > i)
        throw new Error(
          "bits too long for span remainder (" +
            (i - o) +
            " of " +
            i +
            " remain)"
        );
      (this.container = t),
        (this.bits = e),
        (this.valueMask = (1 << e) - 1),
        e === 32 && (this.valueMask = 4294967295),
        (this.start = o),
        this.container.msb && (this.start = i - o - e),
        (this.wordMask = Dr(this.valueMask << this.start)),
        (this.property = r);
    }
    decode(t, e) {
      let r = this.container._packedGetValue();
      return Dr(r & this.wordMask) >>> this.start;
    }
    encode(t) {
      if (
        typeof t != "number" ||
        !Number.isInteger(t) ||
        t !== Dr(t & this.valueMask)
      )
        throw new TypeError(
          Ko("BitField.encode", this) +
            " value must be integer not exceeding " +
            this.valueMask
        );
      let e = this.container._packedGetValue(),
        r = Dr(t << this.start);
      this.container._packedSetValue(Dr(e & ~this.wordMask) | r);
    }
  };
  v.BitField = un;
  var ei = class extends un {
    constructor(t, e) {
      super(t, 1, e);
    }
    decode(t, e) {
      return !!super.decode(t, e);
    }
    encode(t) {
      typeof t == "boolean" && (t = +t), super.encode(t);
    }
  };
  v.Boolean = ei;
  var ri = class extends ht {
    constructor(t, e) {
      if (
        !((t instanceof ge && t.isCount()) || (Number.isInteger(t) && 0 <= t))
      )
        throw new TypeError(
          "length must be positive integer or an unsigned integer ExternalLayout"
        );
      let r = -1;
      t instanceof ge || (r = t), super(r, e), (this.length = t);
    }
    getSpan(t, e) {
      let r = this.span;
      return 0 > r && (r = this.length.decode(t, e)), r;
    }
    decode(t, e = 0) {
      let r = this.span;
      return 0 > r && (r = this.length.decode(t, e)), ct(t).slice(e, e + r);
    }
    encode(t, e, r) {
      let i = this.length;
      if (
        (this.length instanceof ge && (i = t.length),
        !(t instanceof Uint8Array && i === t.length))
      )
        throw new TypeError(
          Ko("Blob.encode", this) +
            " requires (length " +
            i +
            ") Uint8Array as src"
        );
      if (r + i > e.length)
        throw new RangeError("encoding overruns Uint8Array");
      let o = ct(t);
      return (
        ct(e).write(o.toString("hex"), r, i, "hex"),
        this.length instanceof ge && this.length.encode(i, e, r),
        i
      );
    }
  };
  v.Blob = ri;
  var ni = class extends ht {
    constructor(t) {
      super(-1, t);
    }
    getSpan(t, e = 0) {
      Wr(t);
      let r = e;
      for (; r < t.length && t[r] !== 0; ) r += 1;
      return 1 + r - e;
    }
    decode(t, e = 0) {
      let r = this.getSpan(t, e);
      return ct(t)
        .slice(e, e + r - 1)
        .toString("utf-8");
    }
    encode(t, e, r = 0) {
      typeof t != "string" && (t = String(t));
      let i = Do.Buffer.from(t, "utf8"),
        o = i.length;
      if (r + o > e.length) throw new RangeError("encoding overruns Buffer");
      let s = ct(e);
      return i.copy(s, r), (s[r + o] = 0), o + 1;
    }
  };
  v.CString = ni;
  var ii = class extends ht {
    constructor(t, e) {
      if (
        (typeof t == "string" && e === void 0 && ((e = t), (t = void 0)),
        t === void 0)
      )
        t = -1;
      else if (!Number.isInteger(t))
        throw new TypeError("maxSpan must be an integer");
      super(-1, e), (this.maxSpan = t);
    }
    getSpan(t, e = 0) {
      return Wr(t), t.length - e;
    }
    decode(t, e = 0) {
      let r = this.getSpan(t, e);
      if (0 <= this.maxSpan && this.maxSpan < r)
        throw new RangeError("text length exceeds maxSpan");
      return ct(t)
        .slice(e, e + r)
        .toString("utf-8");
    }
    encode(t, e, r = 0) {
      typeof t != "string" && (t = String(t));
      let i = Do.Buffer.from(t, "utf8"),
        o = i.length;
      if (0 <= this.maxSpan && this.maxSpan < o)
        throw new RangeError("text length exceeds maxSpan");
      if (r + o > e.length) throw new RangeError("encoding overruns Buffer");
      return i.copy(ct(e), r), o;
    }
  };
  v.UTF8 = ii;
  var oi = class extends ht {
    constructor(t, e) {
      super(0, e), (this.value = t);
    }
    decode(t, e) {
      return this.value;
    }
    encode(t, e, r) {
      return 0;
    }
  };
  v.Constant = oi;
  v.greedy = (n, t) => new qn(n, t);
  v.offset = (n, t, e) => new nn(n, t, e);
  v.u8 = (n) => new ve(1, n);
  v.u16 = (n) => new ve(2, n);
  v.u24 = (n) => new ve(3, n);
  v.u32 = (n) => new ve(4, n);
  v.u40 = (n) => new ve(5, n);
  v.u48 = (n) => new ve(6, n);
  v.nu64 = (n) => new $n(n);
  v.u16be = (n) => new Re(2, n);
  v.u24be = (n) => new Re(3, n);
  v.u32be = (n) => new Re(4, n);
  v.u40be = (n) => new Re(5, n);
  v.u48be = (n) => new Re(6, n);
  v.nu64be = (n) => new Vn(n);
  v.s8 = (n) => new er(1, n);
  v.s16 = (n) => new er(2, n);
  v.s24 = (n) => new er(3, n);
  v.s32 = (n) => new er(4, n);
  v.s40 = (n) => new er(5, n);
  v.s48 = (n) => new er(6, n);
  v.ns64 = (n) => new Hn(n);
  v.s16be = (n) => new cr(2, n);
  v.s24be = (n) => new cr(3, n);
  v.s32be = (n) => new cr(4, n);
  v.s40be = (n) => new cr(5, n);
  v.s48be = (n) => new cr(6, n);
  v.ns64be = (n) => new Gn(n);
  v.f32 = (n) => new jn(n);
  v.f32be = (n) => new Yn(n);
  v.f64 = (n) => new Zn(n);
  v.f64be = (n) => new Jn(n);
  v.struct = (n, t, e) => new Qn(n, t, e);
  v.bits = (n, t, e) => new an(n, t, e);
  v.seq = (n, t, e) => new Xn(n, t, e);
  v.union = (n, t, e) => new sn(n, t, e);
  v.unionLayoutDiscriminator = (n, t) => new Kr(n, t);
  v.blob = (n, t) => new ri(n, t);
  v.cstr = (n) => new ni(n);
  v.utf8 = (n, t) => new ii(n, t);
  v.constant = (n, t) => new oi(n, t);
});
var au = Ae((qr) => {
  "use strict";
  Object.defineProperty(qr, "__esModule", { value: !0 });
  var ui;
  function bh(n) {
    {
      let t = Buffer.from(n);
      t.reverse();
      let e = t.toString("hex");
      return e.length === 0 ? BigInt(0) : BigInt(`0x${e}`);
    }
    return ui.toBigInt(n, !1);
  }
  qr.toBigIntLE = bh;
  function kh(n) {
    {
      let t = n.toString("hex");
      return t.length === 0 ? BigInt(0) : BigInt(`0x${t}`);
    }
    return ui.toBigInt(n, !0);
  }
  qr.toBigIntBE = kh;
  function Bh(n, t) {
    {
      let e = n.toString(16),
        r = Buffer.from(e.padStart(t * 2, "0").slice(0, t * 2), "hex");
      return r.reverse(), r;
    }
    return ui.fromBigInt(n, Buffer.allocUnsafe(t), !1);
  }
  qr.toBufferLE = Bh;
  function xh(n, t) {
    {
      let e = n.toString(16);
      return Buffer.from(e.padStart(t * 2, "0").slice(0, t * 2), "hex");
    }
    return ui.fromBigInt(n, Buffer.allocUnsafe(t), !0);
  }
  qr.toBufferBE = xh;
});
function Sh(n) {
  return cn(n) && typeof n[Symbol.iterator] == "function";
}
function cn(n) {
  return typeof n == "object" && n != null;
}
function ci(n) {
  return cn(n) && !Array.isArray(n);
}
function Ce(n) {
  return typeof n == "symbol"
    ? n.toString()
    : typeof n == "string"
    ? JSON.stringify(n)
    : `${n}`;
}
function Ih(n) {
  let { done: t, value: e } = n.next();
  return t ? void 0 : e;
}
function vh(n, t, e, r) {
  if (n === !0) return;
  n === !1 ? (n = {}) : typeof n == "string" && (n = { message: n });
  let { path: i, branch: o } = t,
    { type: s } = e,
    {
      refinement: f,
      message: h = `Expected a value of type \`${s}\`${
        f ? ` with refinement \`${f}\`` : ""
      }, but received: \`${Ce(r)}\``,
    } = n;
  return st(
    Q(
      {
        value: r,
        type: s,
        refinement: f,
        key: i[i.length - 1],
        path: i,
        branch: o,
      },
      n
    ),
    { message: h }
  );
}
function* uu(n, t, e, r) {
  Sh(n) || (n = [n]);
  for (let i of n) {
    let o = vh(i, t, e, r);
    o && (yield o);
  }
}
function* $o(n, t, e = {}) {
  let { path: r = [], branch: i = [n], coerce: o = !1, mask: s = !1 } = e,
    f = { path: r, branch: i, mask: s };
  o && (n = t.coercer(n, f));
  let h = "valid";
  for (let b of t.validator(n, f))
    (b.explanation = e.message), (h = "not_valid"), yield [b, void 0];
  for (let [b, B, S] of t.entries(n, f)) {
    let U = $o(B, S, {
      path: b === void 0 ? r : [...r, b],
      branch: b === void 0 ? i : [...i, B],
      coerce: o,
      mask: s,
      message: e.message,
    });
    for (let _ of U)
      _[0]
        ? ((h = _[0].refinement != null ? "not_refined" : "not_valid"),
          yield [_[0], void 0])
        : o &&
          ((B = _[1]),
          b === void 0
            ? (n = B)
            : n instanceof Map
            ? n.set(b, B)
            : n instanceof Set
            ? n.add(B)
            : cn(n) && (B !== void 0 || b in n) && (n[b] = B));
  }
  if (h !== "not_valid")
    for (let b of t.refiner(n, f))
      (b.explanation = e.message), (h = "not_refined"), yield [b, void 0];
  h === "valid" && (yield [void 0, n]);
}
function Vo(n, t, e) {
  let r = fn(n, t, { message: e });
  if (r[0]) throw r[0];
}
function O(n, t, e) {
  let r = fn(n, t, { coerce: !0, message: e });
  if (r[0]) throw r[0];
  return r[1];
}
function Eh(n, t, e) {
  let r = fn(n, t, { coerce: !0, mask: !0, message: e });
  if (r[0]) throw r[0];
  return r[1];
}
function cu(n, t) {
  return !fn(n, t)[0];
}
function fn(n, t, e = {}) {
  let r = $o(n, t, e),
    i = Ih(r);
  return i[0]
    ? [
        new qo(i[0], function* () {
          for (let s of r) s[0] && (yield s[0]);
        }),
        void 0,
      ]
    : [void 0, i[1]];
}
function xr(n, t) {
  return new Te({ type: n, schema: null, validator: t });
}
function fu() {
  return xr("any", () => !0);
}
function D(n) {
  return new Te({
    type: "array",
    schema: n,
    *entries(t) {
      if (n && Array.isArray(t))
        for (let [e, r] of t.entries()) yield [e, r, n];
    },
    coercer(t) {
      return Array.isArray(t) ? t.slice() : t;
    },
    validator(t) {
      return (
        Array.isArray(t) || `Expected an array value, but received: ${Ce(t)}`
      );
    },
  });
}
function Ue() {
  return xr("boolean", (n) => typeof n == "boolean");
}
function fi(n) {
  return xr(
    "instance",
    (t) =>
      t instanceof n ||
      `Expected a \`${n.name}\` instance, but received: ${Ce(t)}`
  );
}
function It(n) {
  let t = Ce(n),
    e = typeof n;
  return new Te({
    type: "literal",
    schema: e === "string" || e === "number" || e === "boolean" ? n : null,
    validator(r) {
      return r === n || `Expected the literal \`${t}\`, but received: ${Ce(r)}`;
    },
  });
}
function _h() {
  return xr("never", () => !1);
}
function K(n) {
  return new Te(
    st(Q({}, n), {
      validator: (t, e) => t === null || n.validator(t, e),
      refiner: (t, e) => t === null || n.refiner(t, e),
    })
  );
}
function I() {
  return xr(
    "number",
    (n) =>
      (typeof n == "number" && !isNaN(n)) ||
      `Expected a number, but received: ${Ce(n)}`
  );
}
function Z(n) {
  return new Te(
    st(Q({}, n), {
      validator: (t, e) => t === void 0 || n.validator(t, e),
      refiner: (t, e) => t === void 0 || n.refiner(t, e),
    })
  );
}
function Ho(n, t) {
  return new Te({
    type: "record",
    schema: null,
    *entries(e) {
      if (cn(e))
        for (let r in e) {
          let i = e[r];
          yield [r, r, n], yield [r, i, t];
        }
    },
    validator(e) {
      return ci(e) || `Expected an object, but received: ${Ce(e)}`;
    },
    coercer(e) {
      return ci(e) ? Q({}, e) : e;
    },
  });
}
function F() {
  return xr(
    "string",
    (n) => typeof n == "string" || `Expected a string, but received: ${Ce(n)}`
  );
}
function hi(n) {
  let t = _h();
  return new Te({
    type: "tuple",
    schema: null,
    *entries(e) {
      if (Array.isArray(e)) {
        let r = Math.max(n.length, e.length);
        for (let i = 0; i < r; i++) yield [i, e[i], n[i] || t];
      }
    },
    validator(e) {
      return Array.isArray(e) || `Expected an array, but received: ${Ce(e)}`;
    },
    coercer(e) {
      return Array.isArray(e) ? e.slice() : e;
    },
  });
}
function P(n) {
  let t = Object.keys(n);
  return new Te({
    type: "type",
    schema: n,
    *entries(e) {
      if (cn(e)) for (let r of t) yield [r, e[r], n[r]];
    },
    validator(e) {
      return ci(e) || `Expected an object, but received: ${Ce(e)}`;
    },
    coercer(e) {
      return ci(e) ? Q({}, e) : e;
    },
  });
}
function me(n) {
  let t = n.map((e) => e.type).join(" | ");
  return new Te({
    type: "union",
    schema: null,
    coercer(e, r) {
      for (let i of n) {
        let [o, s] = i.validate(e, { coerce: !0, mask: r.mask });
        if (!o) return s;
      }
      return e;
    },
    validator(e, r) {
      let i = [];
      for (let o of n) {
        let [...s] = $o(e, o, r),
          [f] = s;
        if (f[0]) for (let [h] of s) h && i.push(h);
        else return [];
      }
      return [
        `Expected the value to satisfy a union of \`${t}\`, but received: ${Ce(
          e
        )}`,
        ...i,
      ];
    },
  });
}
function Sr() {
  return xr("unknown", () => !0);
}
function $r(n, t, e) {
  return new Te(
    st(Q({}, n), {
      coercer: (r, i) => (cu(r, t) ? n.coercer(e(r, i), i) : n.coercer(r, i)),
    })
  );
}
var qo,
  Te,
  hu = Et(() => {
    "use strict";
    qo = class extends TypeError {
      constructor(t, e) {
        let r,
          b = t,
          { message: i, explanation: o } = b,
          s = je(b, ["message", "explanation"]),
          { path: f } = t,
          h = f.length === 0 ? i : `At path: ${f.join(".")} -- ${i}`;
        super(o ?? h),
          o != null && (this.cause = h),
          Object.assign(this, s),
          (this.name = this.constructor.name),
          (this.failures = () => r ?? (r = [t, ...e()]));
      }
    };
    Te = class {
      constructor(t) {
        let {
          type: e,
          schema: r,
          validator: i,
          refiner: o,
          coercer: s = (h) => h,
          entries: f = function* () {},
        } = t;
        (this.type = e),
          (this.schema = r),
          (this.entries = f),
          (this.coercer = s),
          i
            ? (this.validator = (h, b) => {
                let B = i(h, b);
                return uu(B, b, this, h);
              })
            : (this.validator = () => []),
          o
            ? (this.refiner = (h, b) => {
                let B = o(h, b);
                return uu(B, b, this, h);
              })
            : (this.refiner = () => []);
      }
      assert(t, e) {
        return Vo(t, this, e);
      }
      create(t, e) {
        return O(t, this, e);
      }
      is(t) {
        return cu(t, this);
      }
      mask(t, e) {
        return Eh(t, this, e);
      }
      validate(t, e = {}) {
        return fn(t, this, e);
      }
    };
  });
function hn() {
  if (
    !li &&
    ((li =
      (typeof crypto < "u" &&
        crypto.getRandomValues &&
        crypto.getRandomValues.bind(crypto)) ||
      (typeof msCrypto < "u" &&
        typeof msCrypto.getRandomValues == "function" &&
        msCrypto.getRandomValues.bind(msCrypto))),
    !li)
  )
    throw new Error(
      "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
    );
  return li(Ah);
}
var li,
  Ah,
  Go = Et(() => {
    "use strict";
    Ah = new Uint8Array(16);
  });
var lu,
  du = Et(() => {
    "use strict";
    lu =
      /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
  });
function Rh(n) {
  return typeof n == "string" && lu.test(n);
}
var fr,
  ln = Et(() => {
    "use strict";
    du();
    fr = Rh;
  });
function Lh(n) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
    e = (
      pe[n[t + 0]] +
      pe[n[t + 1]] +
      pe[n[t + 2]] +
      pe[n[t + 3]] +
      "-" +
      pe[n[t + 4]] +
      pe[n[t + 5]] +
      "-" +
      pe[n[t + 6]] +
      pe[n[t + 7]] +
      "-" +
      pe[n[t + 8]] +
      pe[n[t + 9]] +
      "-" +
      pe[n[t + 10]] +
      pe[n[t + 11]] +
      pe[n[t + 12]] +
      pe[n[t + 13]] +
      pe[n[t + 14]] +
      pe[n[t + 15]]
    ).toLowerCase();
  if (!fr(e)) throw TypeError("Stringified UUID is invalid");
  return e;
}
var pe,
  di,
  hr,
  dn = Et(() => {
    "use strict";
    ln();
    pe = [];
    for (di = 0; di < 256; ++di) pe.push((di + 256).toString(16).substr(1));
    hr = Lh;
  });
function Mh(n, t, e) {
  var r = (t && e) || 0,
    i = t || new Array(16);
  n = n || {};
  var o = n.node || pu,
    s = n.clockseq !== void 0 ? n.clockseq : jo;
  if (o == null || s == null) {
    var f = n.random || (n.rng || hn)();
    o == null && (o = pu = [f[0] | 1, f[1], f[2], f[3], f[4], f[5]]),
      s == null && (s = jo = ((f[6] << 8) | f[7]) & 16383);
  }
  var h = n.msecs !== void 0 ? n.msecs : Date.now(),
    b = n.nsecs !== void 0 ? n.nsecs : Zo + 1,
    B = h - Yo + (b - Zo) / 1e4;
  if (
    (B < 0 && n.clockseq === void 0 && (s = (s + 1) & 16383),
    (B < 0 || h > Yo) && n.nsecs === void 0 && (b = 0),
    b >= 1e4)
  )
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  (Yo = h), (Zo = b), (jo = s), (h += 122192928e5);
  var S = ((h & 268435455) * 1e4 + b) % 4294967296;
  (i[r++] = (S >>> 24) & 255),
    (i[r++] = (S >>> 16) & 255),
    (i[r++] = (S >>> 8) & 255),
    (i[r++] = S & 255);
  var U = ((h / 4294967296) * 1e4) & 268435455;
  (i[r++] = (U >>> 8) & 255),
    (i[r++] = U & 255),
    (i[r++] = ((U >>> 24) & 15) | 16),
    (i[r++] = (U >>> 16) & 255),
    (i[r++] = (s >>> 8) | 128),
    (i[r++] = s & 255);
  for (var _ = 0; _ < 6; ++_) i[r + _] = o[_];
  return t || hr(i);
}
var pu,
  jo,
  Yo,
  Zo,
  yu,
  gu = Et(() => {
    "use strict";
    Go();
    dn();
    (Yo = 0), (Zo = 0);
    yu = Mh;
  });
function Th(n) {
  if (!fr(n)) throw TypeError("Invalid UUID");
  var t,
    e = new Uint8Array(16);
  return (
    (e[0] = (t = parseInt(n.slice(0, 8), 16)) >>> 24),
    (e[1] = (t >>> 16) & 255),
    (e[2] = (t >>> 8) & 255),
    (e[3] = t & 255),
    (e[4] = (t = parseInt(n.slice(9, 13), 16)) >>> 8),
    (e[5] = t & 255),
    (e[6] = (t = parseInt(n.slice(14, 18), 16)) >>> 8),
    (e[7] = t & 255),
    (e[8] = (t = parseInt(n.slice(19, 23), 16)) >>> 8),
    (e[9] = t & 255),
    (e[10] = ((t = parseInt(n.slice(24, 36), 16)) / 1099511627776) & 255),
    (e[11] = (t / 4294967296) & 255),
    (e[12] = (t >>> 24) & 255),
    (e[13] = (t >>> 16) & 255),
    (e[14] = (t >>> 8) & 255),
    (e[15] = t & 255),
    e
  );
}
var pi,
  Jo = Et(() => {
    "use strict";
    ln();
    pi = Th;
  });
function Ph(n) {
  n = unescape(encodeURIComponent(n));
  for (var t = [], e = 0; e < n.length; ++e) t.push(n.charCodeAt(e));
  return t;
}
function yi(n, t, e) {
  function r(i, o, s, f) {
    if (
      (typeof i == "string" && (i = Ph(i)),
      typeof o == "string" && (o = pi(o)),
      o.length !== 16)
    )
      throw TypeError(
        "Namespace must be array-like (16 iterable integer values, 0-255)"
      );
    var h = new Uint8Array(16 + i.length);
    if (
      (h.set(o),
      h.set(i, o.length),
      (h = e(h)),
      (h[6] = (h[6] & 15) | t),
      (h[8] = (h[8] & 63) | 128),
      s)
    ) {
      f = f || 0;
      for (var b = 0; b < 16; ++b) s[f + b] = h[b];
      return s;
    }
    return hr(h);
  }
  try {
    r.name = n;
  } catch {}
  return (r.DNS = Ch), (r.URL = Uh), r;
}
var Ch,
  Uh,
  Xo = Et(() => {
    "use strict";
    dn();
    Jo();
    (Ch = "6ba7b810-9dad-11d1-80b4-00c04fd430c8"),
      (Uh = "6ba7b811-9dad-11d1-80b4-00c04fd430c8");
  });
function Fh(n) {
  if (typeof n == "string") {
    var t = unescape(encodeURIComponent(n));
    n = new Uint8Array(t.length);
    for (var e = 0; e < t.length; ++e) n[e] = t.charCodeAt(e);
  }
  return Nh(Oh(zh(n), n.length * 8));
}
function Nh(n) {
  for (
    var t = [], e = n.length * 32, r = "0123456789abcdef", i = 0;
    i < e;
    i += 8
  ) {
    var o = (n[i >> 5] >>> i % 32) & 255,
      s = parseInt(r.charAt((o >>> 4) & 15) + r.charAt(o & 15), 16);
    t.push(s);
  }
  return t;
}
function mu(n) {
  return (((n + 64) >>> 9) << 4) + 14 + 1;
}
function Oh(n, t) {
  (n[t >> 5] |= 128 << t % 32), (n[mu(t) - 1] = t);
  for (
    var e = 1732584193, r = -271733879, i = -1732584194, o = 271733878, s = 0;
    s < n.length;
    s += 16
  ) {
    var f = e,
      h = r,
      b = i,
      B = o;
    (e = we(e, r, i, o, n[s], 7, -680876936)),
      (o = we(o, e, r, i, n[s + 1], 12, -389564586)),
      (i = we(i, o, e, r, n[s + 2], 17, 606105819)),
      (r = we(r, i, o, e, n[s + 3], 22, -1044525330)),
      (e = we(e, r, i, o, n[s + 4], 7, -176418897)),
      (o = we(o, e, r, i, n[s + 5], 12, 1200080426)),
      (i = we(i, o, e, r, n[s + 6], 17, -1473231341)),
      (r = we(r, i, o, e, n[s + 7], 22, -45705983)),
      (e = we(e, r, i, o, n[s + 8], 7, 1770035416)),
      (o = we(o, e, r, i, n[s + 9], 12, -1958414417)),
      (i = we(i, o, e, r, n[s + 10], 17, -42063)),
      (r = we(r, i, o, e, n[s + 11], 22, -1990404162)),
      (e = we(e, r, i, o, n[s + 12], 7, 1804603682)),
      (o = we(o, e, r, i, n[s + 13], 12, -40341101)),
      (i = we(i, o, e, r, n[s + 14], 17, -1502002290)),
      (r = we(r, i, o, e, n[s + 15], 22, 1236535329)),
      (e = be(e, r, i, o, n[s + 1], 5, -165796510)),
      (o = be(o, e, r, i, n[s + 6], 9, -1069501632)),
      (i = be(i, o, e, r, n[s + 11], 14, 643717713)),
      (r = be(r, i, o, e, n[s], 20, -373897302)),
      (e = be(e, r, i, o, n[s + 5], 5, -701558691)),
      (o = be(o, e, r, i, n[s + 10], 9, 38016083)),
      (i = be(i, o, e, r, n[s + 15], 14, -660478335)),
      (r = be(r, i, o, e, n[s + 4], 20, -405537848)),
      (e = be(e, r, i, o, n[s + 9], 5, 568446438)),
      (o = be(o, e, r, i, n[s + 14], 9, -1019803690)),
      (i = be(i, o, e, r, n[s + 3], 14, -187363961)),
      (r = be(r, i, o, e, n[s + 8], 20, 1163531501)),
      (e = be(e, r, i, o, n[s + 13], 5, -1444681467)),
      (o = be(o, e, r, i, n[s + 2], 9, -51403784)),
      (i = be(i, o, e, r, n[s + 7], 14, 1735328473)),
      (r = be(r, i, o, e, n[s + 12], 20, -1926607734)),
      (e = ke(e, r, i, o, n[s + 5], 4, -378558)),
      (o = ke(o, e, r, i, n[s + 8], 11, -2022574463)),
      (i = ke(i, o, e, r, n[s + 11], 16, 1839030562)),
      (r = ke(r, i, o, e, n[s + 14], 23, -35309556)),
      (e = ke(e, r, i, o, n[s + 1], 4, -1530992060)),
      (o = ke(o, e, r, i, n[s + 4], 11, 1272893353)),
      (i = ke(i, o, e, r, n[s + 7], 16, -155497632)),
      (r = ke(r, i, o, e, n[s + 10], 23, -1094730640)),
      (e = ke(e, r, i, o, n[s + 13], 4, 681279174)),
      (o = ke(o, e, r, i, n[s], 11, -358537222)),
      (i = ke(i, o, e, r, n[s + 3], 16, -722521979)),
      (r = ke(r, i, o, e, n[s + 6], 23, 76029189)),
      (e = ke(e, r, i, o, n[s + 9], 4, -640364487)),
      (o = ke(o, e, r, i, n[s + 12], 11, -421815835)),
      (i = ke(i, o, e, r, n[s + 15], 16, 530742520)),
      (r = ke(r, i, o, e, n[s + 2], 23, -995338651)),
      (e = Be(e, r, i, o, n[s], 6, -198630844)),
      (o = Be(o, e, r, i, n[s + 7], 10, 1126891415)),
      (i = Be(i, o, e, r, n[s + 14], 15, -1416354905)),
      (r = Be(r, i, o, e, n[s + 5], 21, -57434055)),
      (e = Be(e, r, i, o, n[s + 12], 6, 1700485571)),
      (o = Be(o, e, r, i, n[s + 3], 10, -1894986606)),
      (i = Be(i, o, e, r, n[s + 10], 15, -1051523)),
      (r = Be(r, i, o, e, n[s + 1], 21, -2054922799)),
      (e = Be(e, r, i, o, n[s + 8], 6, 1873313359)),
      (o = Be(o, e, r, i, n[s + 15], 10, -30611744)),
      (i = Be(i, o, e, r, n[s + 6], 15, -1560198380)),
      (r = Be(r, i, o, e, n[s + 13], 21, 1309151649)),
      (e = Be(e, r, i, o, n[s + 4], 6, -145523070)),
      (o = Be(o, e, r, i, n[s + 11], 10, -1120210379)),
      (i = Be(i, o, e, r, n[s + 2], 15, 718787259)),
      (r = Be(r, i, o, e, n[s + 9], 21, -343485551)),
      (e = lr(e, f)),
      (r = lr(r, h)),
      (i = lr(i, b)),
      (o = lr(o, B));
  }
  return [e, r, i, o];
}
function zh(n) {
  if (n.length === 0) return [];
  for (var t = n.length * 8, e = new Uint32Array(mu(t)), r = 0; r < t; r += 8)
    e[r >> 5] |= (n[r / 8] & 255) << r % 32;
  return e;
}
function lr(n, t) {
  var e = (n & 65535) + (t & 65535),
    r = (n >> 16) + (t >> 16) + (e >> 16);
  return (r << 16) | (e & 65535);
}
function Dh(n, t) {
  return (n << t) | (n >>> (32 - t));
}
function gi(n, t, e, r, i, o) {
  return lr(Dh(lr(lr(t, n), lr(r, o)), i), e);
}
function we(n, t, e, r, i, o, s) {
  return gi((t & e) | (~t & r), n, t, i, o, s);
}
function be(n, t, e, r, i, o, s) {
  return gi((t & r) | (e & ~r), n, t, i, o, s);
}
function ke(n, t, e, r, i, o, s) {
  return gi(t ^ e ^ r, n, t, i, o, s);
}
function Be(n, t, e, r, i, o, s) {
  return gi(e ^ (t | ~r), n, t, i, o, s);
}
var wu,
  bu = Et(() => {
    "use strict";
    wu = Fh;
  });
var Kh,
  ku,
  Bu = Et(() => {
    "use strict";
    Xo();
    bu();
    (Kh = yi("v3", 48, wu)), (ku = Kh);
  });
function Wh(n, t, e) {
  n = n || {};
  var r = n.random || (n.rng || hn)();
  if (((r[6] = (r[6] & 15) | 64), (r[8] = (r[8] & 63) | 128), t)) {
    e = e || 0;
    for (var i = 0; i < 16; ++i) t[e + i] = r[i];
    return t;
  }
  return hr(r);
}
var xu,
  Su = Et(() => {
    "use strict";
    Go();
    dn();
    xu = Wh;
  });
function qh(n, t, e, r) {
  switch (n) {
    case 0:
      return (t & e) ^ (~t & r);
    case 1:
      return t ^ e ^ r;
    case 2:
      return (t & e) ^ (t & r) ^ (e & r);
    case 3:
      return t ^ e ^ r;
  }
}
function Qo(n, t) {
  return (n << t) | (n >>> (32 - t));
}
function $h(n) {
  var t = [1518500249, 1859775393, 2400959708, 3395469782],
    e = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
  if (typeof n == "string") {
    var r = unescape(encodeURIComponent(n));
    n = [];
    for (var i = 0; i < r.length; ++i) n.push(r.charCodeAt(i));
  } else Array.isArray(n) || (n = Array.prototype.slice.call(n));
  n.push(128);
  for (
    var o = n.length / 4 + 2, s = Math.ceil(o / 16), f = new Array(s), h = 0;
    h < s;
    ++h
  ) {
    for (var b = new Uint32Array(16), B = 0; B < 16; ++B)
      b[B] =
        (n[h * 64 + B * 4] << 24) |
        (n[h * 64 + B * 4 + 1] << 16) |
        (n[h * 64 + B * 4 + 2] << 8) |
        n[h * 64 + B * 4 + 3];
    f[h] = b;
  }
  (f[s - 1][14] = ((n.length - 1) * 8) / Math.pow(2, 32)),
    (f[s - 1][14] = Math.floor(f[s - 1][14])),
    (f[s - 1][15] = ((n.length - 1) * 8) & 4294967295);
  for (var S = 0; S < s; ++S) {
    for (var U = new Uint32Array(80), _ = 0; _ < 16; ++_) U[_] = f[S][_];
    for (var E = 16; E < 80; ++E)
      U[E] = Qo(U[E - 3] ^ U[E - 8] ^ U[E - 14] ^ U[E - 16], 1);
    for (
      var T = e[0], C = e[1], L = e[2], N = e[3], W = e[4], q = 0;
      q < 80;
      ++q
    ) {
      var ut = Math.floor(q / 20),
        tt = (Qo(T, 5) + qh(ut, C, L, N) + W + t[ut] + U[q]) >>> 0;
      (W = N), (N = L), (L = Qo(C, 30) >>> 0), (C = T), (T = tt);
    }
    (e[0] = (e[0] + T) >>> 0),
      (e[1] = (e[1] + C) >>> 0),
      (e[2] = (e[2] + L) >>> 0),
      (e[3] = (e[3] + N) >>> 0),
      (e[4] = (e[4] + W) >>> 0);
  }
  return [
    (e[0] >> 24) & 255,
    (e[0] >> 16) & 255,
    (e[0] >> 8) & 255,
    e[0] & 255,
    (e[1] >> 24) & 255,
    (e[1] >> 16) & 255,
    (e[1] >> 8) & 255,
    e[1] & 255,
    (e[2] >> 24) & 255,
    (e[2] >> 16) & 255,
    (e[2] >> 8) & 255,
    e[2] & 255,
    (e[3] >> 24) & 255,
    (e[3] >> 16) & 255,
    (e[3] >> 8) & 255,
    e[3] & 255,
    (e[4] >> 24) & 255,
    (e[4] >> 16) & 255,
    (e[4] >> 8) & 255,
    e[4] & 255,
  ];
}
var Iu,
  vu = Et(() => {
    "use strict";
    Iu = $h;
  });
var Vh,
  Eu,
  _u = Et(() => {
    "use strict";
    Xo();
    vu();
    (Vh = yi("v5", 80, Iu)), (Eu = Vh);
  });
var Au,
  Ru = Et(() => {
    "use strict";
    Au = "00000000-0000-0000-0000-000000000000";
  });
function Hh(n) {
  if (!fr(n)) throw TypeError("Invalid UUID");
  return parseInt(n.substr(14, 1), 16);
}
var Lu,
  Mu = Et(() => {
    "use strict";
    ln();
    Lu = Hh;
  });
var ts = {};
Xi(ts, {
  NIL: () => Au,
  parse: () => pi,
  stringify: () => hr,
  v1: () => yu,
  v3: () => ku,
  v4: () => xu,
  v5: () => Eu,
  validate: () => fr,
  version: () => Lu,
});
var es = Et(() => {
  "use strict";
  gu();
  Bu();
  Su();
  _u();
  Ru();
  Mu();
  ln();
  dn();
  Jo();
});
var Pu = Ae((bp, Tu) => {
  "use strict";
  var Gh = (es(), Qi(ts)).v4,
    jh = function (n, t, e, r) {
      if (typeof n != "string") throw new TypeError(n + " must be a string");
      r = r || {};
      let i = typeof r.version == "number" ? r.version : 2;
      if (i !== 1 && i !== 2) throw new TypeError(i + " must be 1 or 2");
      let o = { method: n };
      if ((i === 2 && (o.jsonrpc = "2.0"), t)) {
        if (typeof t != "object" && !Array.isArray(t))
          throw new TypeError(t + " must be an object, array or omitted");
        o.params = t;
      }
      if (typeof e > "u") {
        let s =
          typeof r.generator == "function"
            ? r.generator
            : function () {
                return Gh();
              };
        o.id = s(o, r);
      } else
        i === 2 && e === null
          ? r.notificationIdNull && (o.id = null)
          : (o.id = e);
      return o;
    };
  Tu.exports = jh;
});
var Uu = Ae((kp, Cu) => {
  "use strict";
  var Yh = (es(), Qi(ts)).v4,
    Zh = Pu(),
    pn = function (n, t) {
      if (!(this instanceof pn)) return new pn(n, t);
      t || (t = {}),
        (this.options = {
          reviver: typeof t.reviver < "u" ? t.reviver : null,
          replacer: typeof t.replacer < "u" ? t.replacer : null,
          generator:
            typeof t.generator < "u"
              ? t.generator
              : function () {
                  return Yh();
                },
          version: typeof t.version < "u" ? t.version : 2,
          notificationIdNull:
            typeof t.notificationIdNull == "boolean"
              ? t.notificationIdNull
              : !1,
        }),
        (this.callServer = n);
    };
  Cu.exports = pn;
  pn.prototype.request = function (n, t, e, r) {
    let i = this,
      o = null,
      s = Array.isArray(n) && typeof t == "function";
    if (this.options.version === 1 && s)
      throw new TypeError("JSON-RPC 1.0 does not support batching");
    if (s || (!s && n && typeof n == "object" && typeof t == "function"))
      (r = t), (o = n);
    else {
      typeof e == "function" && ((r = e), (e = void 0));
      let b = typeof r == "function";
      try {
        o = Zh(n, t, e, {
          generator: this.options.generator,
          version: this.options.version,
          notificationIdNull: this.options.notificationIdNull,
        });
      } catch (B) {
        if (b) {
          r(B);
          return;
        }
        throw B;
      }
      if (!b) return o;
    }
    let h;
    try {
      h = JSON.stringify(o, this.options.replacer);
    } catch (b) {
      r(b);
      return;
    }
    return (
      this.callServer(h, function (b, B) {
        i._parseResponse(b, B, r);
      }),
      o
    );
  };
  pn.prototype._parseResponse = function (n, t, e) {
    if (n) {
      e(n);
      return;
    }
    if (!t) {
      e();
      return;
    }
    let r;
    try {
      r = JSON.parse(t, this.options.reviver);
    } catch (i) {
      e(i);
      return;
    }
    if (e.length === 3)
      if (Array.isArray(r)) {
        let i = function (s) {
            return typeof s.error < "u";
          },
          o = function (s) {
            return !i(s);
          };
        e(null, r.filter(i), r.filter(o));
        return;
      } else {
        e(null, r.error, r.result);
        return;
      }
    e(null, r);
  };
});
function Nu(n, t) {
  return new Jh(n, t);
}
var Fu,
  Jh,
  Xh,
  Ou,
  zu = Et(() => {
    "use strict";
    Fu = Ye(en(), 1);
    Lc();
    Jh = class extends no.default {
      socket;
      constructor(n, t) {
        super(),
          (this.socket = new window.WebSocket(n, t.protocols)),
          (this.socket.onopen = () => this.emit("open")),
          (this.socket.onmessage = (e) => this.emit("message", e.data)),
          (this.socket.onerror = (e) => this.emit("error", e)),
          (this.socket.onclose = (e) => {
            this.emit("close", e.code, e.reason);
          });
      }
      send(n, t, e) {
        let r = e || t;
        try {
          this.socket.send(n), r();
        } catch (i) {
          r(i);
        }
      }
      close(n, t) {
        this.socket.close(n, t);
      }
      addEventListener(n, t, e) {
        this.socket.addEventListener(n, t, e);
      }
    };
    (Xh = class {
      encode(n) {
        return JSON.stringify(n);
      }
      decode(n) {
        return JSON.parse(n);
      }
    }),
      (Ou = class extends no.default {
        address;
        rpc_id;
        queue;
        options;
        autoconnect;
        ready;
        reconnect;
        reconnect_timer_id;
        reconnect_interval;
        max_reconnects;
        rest_options;
        current_reconnects;
        generate_request_id;
        socket;
        webSocketFactory;
        dataPack;
        constructor(n, t = "ws://localhost:8080", b = {}, f, h) {
          var B = b,
            {
              autoconnect: e = !0,
              reconnect: r = !0,
              reconnect_interval: i = 1e3,
              max_reconnects: o = 5,
            } = B,
            s = je(B, [
              "autoconnect",
              "reconnect",
              "reconnect_interval",
              "max_reconnects",
            ]);
          super(),
            (this.webSocketFactory = n),
            (this.queue = {}),
            (this.rpc_id = 0),
            (this.address = t),
            (this.autoconnect = e),
            (this.ready = !1),
            (this.reconnect = r),
            (this.reconnect_timer_id = void 0),
            (this.reconnect_interval = i),
            (this.max_reconnects = o),
            (this.rest_options = s),
            (this.current_reconnects = 0),
            (this.generate_request_id =
              f ||
              (() =>
                typeof this.rpc_id == "number"
                  ? ++this.rpc_id
                  : Number(this.rpc_id) + 1)),
            h ? (this.dataPack = h) : (this.dataPack = new Xh()),
            this.autoconnect &&
              this._connect(
                this.address,
                Q(
                  {
                    autoconnect: this.autoconnect,
                    reconnect: this.reconnect,
                    reconnect_interval: this.reconnect_interval,
                    max_reconnects: this.max_reconnects,
                  },
                  this.rest_options
                )
              );
        }
        connect() {
          this.socket ||
            this._connect(
              this.address,
              Q(
                {
                  autoconnect: this.autoconnect,
                  reconnect: this.reconnect,
                  reconnect_interval: this.reconnect_interval,
                  max_reconnects: this.max_reconnects,
                },
                this.rest_options
              )
            );
        }
        call(n, t, e, r) {
          return (
            !r && typeof e == "object" && ((r = e), (e = null)),
            new Promise((i, o) => {
              if (!this.ready) return o(new Error("socket not ready"));
              let s = this.generate_request_id(n, t),
                f = { jsonrpc: "2.0", method: n, params: t || void 0, id: s };
              this.socket.send(this.dataPack.encode(f), r, (h) => {
                if (h) return o(h);
                (this.queue[s] = { promise: [i, o] }),
                  e &&
                    (this.queue[s].timeout = setTimeout(() => {
                      delete this.queue[s], o(new Error("reply timeout"));
                    }, e));
              });
            })
          );
        }
        login(n) {
          return M(this, null, function* () {
            let t = yield this.call("rpc.login", n);
            if (!t) throw new Error("authentication failed");
            return t;
          });
        }
        listMethods() {
          return M(this, null, function* () {
            return yield this.call("__listMethods");
          });
        }
        notify(n, t) {
          return new Promise((e, r) => {
            if (!this.ready) return r(new Error("socket not ready"));
            let i = { jsonrpc: "2.0", method: n, params: t };
            this.socket.send(this.dataPack.encode(i), (o) => {
              if (o) return r(o);
              e();
            });
          });
        }
        subscribe(n) {
          return M(this, null, function* () {
            typeof n == "string" && (n = [n]);
            let t = yield this.call("rpc.on", n);
            if (typeof n == "string" && t[n] !== "ok")
              throw new Error(
                "Failed subscribing to an event '" + n + "' with: " + t[n]
              );
            return t;
          });
        }
        unsubscribe(n) {
          return M(this, null, function* () {
            typeof n == "string" && (n = [n]);
            let t = yield this.call("rpc.off", n);
            if (typeof n == "string" && t[n] !== "ok")
              throw new Error("Failed unsubscribing from an event with: " + t);
            return t;
          });
        }
        close(n, t) {
          this.socket && this.socket.close(n || 1e3, t);
        }
        setAutoReconnect(n) {
          this.reconnect = n;
        }
        setReconnectInterval(n) {
          this.reconnect_interval = n;
        }
        setMaxReconnects(n) {
          this.max_reconnects = n;
        }
        getCurrentReconnects() {
          return this.current_reconnects;
        }
        getMaxReconnects() {
          return this.max_reconnects;
        }
        isReconnecting() {
          return this.reconnect_timer_id !== void 0;
        }
        willReconnect() {
          return (
            this.reconnect &&
            (this.max_reconnects === 0 ||
              this.current_reconnects < this.max_reconnects)
          );
        }
        _connect(n, t) {
          clearTimeout(this.reconnect_timer_id),
            (this.socket = this.webSocketFactory(n, t)),
            this.socket.addEventListener("open", () => {
              (this.ready = !0),
                this.emit("open"),
                (this.current_reconnects = 0);
            }),
            this.socket.addEventListener("message", ({ data: e }) => {
              e instanceof ArrayBuffer && (e = Fu.Buffer.from(e).toString());
              try {
                e = this.dataPack.decode(e);
              } catch {
                return;
              }
              if (e.notification && this.listeners(e.notification).length) {
                if (!Object.keys(e.params).length)
                  return this.emit(e.notification);
                let r = [e.notification];
                if (e.params.constructor === Object) r.push(e.params);
                else
                  for (let i = 0; i < e.params.length; i++) r.push(e.params[i]);
                return Promise.resolve().then(() => {
                  this.emit.apply(this, r);
                });
              }
              if (!this.queue[e.id])
                return e.method
                  ? Promise.resolve().then(() => {
                      this.emit(e.method, e?.params);
                    })
                  : void 0;
              "error" in e == "result" in e &&
                this.queue[e.id].promise[1](
                  new Error(
                    'Server response malformed. Response must include either "result" or "error", but not both.'
                  )
                ),
                this.queue[e.id].timeout &&
                  clearTimeout(this.queue[e.id].timeout),
                e.error
                  ? this.queue[e.id].promise[1](e.error)
                  : this.queue[e.id].promise[0](e.result),
                delete this.queue[e.id];
            }),
            this.socket.addEventListener("error", (e) => this.emit("error", e)),
            this.socket.addEventListener("close", ({ code: e, reason: r }) => {
              this.ready && setTimeout(() => this.emit("close", e, r), 0),
                (this.ready = !1),
                (this.socket = void 0),
                e !== 1e3 &&
                  (this.current_reconnects++,
                  this.reconnect &&
                  (this.max_reconnects > this.current_reconnects ||
                    this.max_reconnects === 0)
                    ? (this.reconnect_timer_id = setTimeout(
                        () => this._connect(n, t),
                        this.reconnect_interval
                      ))
                    : this.reconnect &&
                      this.max_reconnects > 0 &&
                      this.current_reconnects >= this.max_reconnects &&
                      setTimeout(
                        () => this.emit("max_reconnects_reached", e, r),
                        1
                      ));
            });
        }
      });
  });
var s0 = {};
Xi(s0, {
  Account: () => fs,
  AddressLookupTableAccount: () => Bn,
  AddressLookupTableInstruction: () => Ss,
  AddressLookupTableProgram: () => Sn,
  Authorized: () => Ai,
  BLOCKHASH_CACHE_TIMEOUT_MS: () => pc,
  BPF_LOADER_DEPRECATED_PROGRAM_ID: () => rl,
  BPF_LOADER_PROGRAM_ID: () => Bl,
  BpfLoader: () => ms,
  COMPUTE_BUDGET_INSTRUCTION_LAYOUTS: () => $e,
  ComputeBudgetInstruction: () => Is,
  ComputeBudgetProgram: () => In,
  Connection: () => xs,
  Ed25519Program: () => Ei,
  Enum: () => cs,
  EpochSchedule: () => Si,
  FeeCalculatorLayout: () => hc,
  Keypair: () => vi,
  LAMPORTS_PER_SOL: () => o0,
  LOOKUP_TABLE_INSTRUCTION_LAYOUTS: () => nr,
  Loader: () => gs,
  Lockup: () => Ar,
  MAX_SEED_LENGTH: () => ac,
  Message: () => Ge,
  MessageAccountKeys: () => Er,
  MessageV0: () => Vr,
  NONCE_ACCOUNT_LENGTH: () => ps,
  NonceAccount: () => xi,
  PACKET_DATA_SIZE: () => pr,
  PUBLIC_KEY_LENGTH: () => He,
  PublicKey: () => z,
  SIGNATURE_LENGTH_IN_BYTES: () => wn,
  SOLANA_SCHEMA: () => gn,
  STAKE_CONFIG_ID: () => vc,
  STAKE_INSTRUCTION_LAYOUTS: () => he,
  SYSTEM_INSTRUCTION_LAYOUTS: () => xt,
  SYSVAR_CLOCK_PUBKEY: () => We,
  SYSVAR_EPOCH_SCHEDULE_PUBKEY: () => ll,
  SYSVAR_INSTRUCTIONS_PUBKEY: () => dl,
  SYSVAR_RECENT_BLOCKHASHES_PUBKEY: () => wi,
  SYSVAR_RENT_PUBKEY: () => Hr,
  SYSVAR_REWARDS_PUBKEY: () => pl,
  SYSVAR_SLOT_HASHES_PUBKEY: () => yl,
  SYSVAR_SLOT_HISTORY_PUBKEY: () => gl,
  SYSVAR_STAKE_HISTORY_PUBKEY: () => bi,
  Secp256k1Program: () => _i,
  SendTransactionError: () => _r,
  SolanaJSONRPCError: () => H,
  SolanaJSONRPCErrorCode: () => ml,
  StakeAuthorizationLayout: () => Zd,
  StakeInstruction: () => vs,
  StakeProgram: () => jr,
  Struct: () => mn,
  SystemInstruction: () => ys,
  SystemProgram: () => ye,
  Transaction: () => gt,
  TransactionExpiredBlockheightExceededError: () => bn,
  TransactionExpiredNonceInvalidError: () => dr,
  TransactionExpiredTimeoutError: () => kn,
  TransactionInstruction: () => mt,
  TransactionMessage: () => hs,
  TransactionStatus: () => rr,
  VALIDATOR_INFO_KEY: () => Ec,
  VERSION_PREFIX_MASK: () => Li,
  VOTE_PROGRAM_ID: () => Qd,
  ValidatorInfo: () => _s,
  VersionedMessage: () => Ls,
  VersionedTransaction: () => ls,
  VoteAccount: () => As,
  VoteAuthorizationLayout: () => Jd,
  VoteInit: () => Ri,
  VoteInstruction: () => Es,
  VoteProgram: () => Yr,
  clusterApiUrl: () => n0,
  sendAndConfirmRawTransaction: () => i0,
  sendAndConfirmTransaction: () => ds,
});
function Ku(n) {
  try {
    return br.ExtendedPoint.fromHex(n), !0;
  } catch {
    return !1;
  }
}
function el(n) {
  return n._bn !== void 0;
}
function uc(n, t) {
  let e = (i) => {
      if (i.span >= 0) return i.span;
      if (typeof i.alloc == "function") return i.alloc(t[i.property]);
      if ("count" in i && "elementLayout" in i) {
        let o = t[i.property];
        if (Array.isArray(o)) return o.length * e(i.elementLayout);
      } else if ("fields" in i) return uc({ layout: i }, t[i.property]);
      return 0;
    },
    r = 0;
  return (
    n.layout.fields.forEach((i) => {
      r += e(i);
    }),
    r
  );
}
function Ee(n) {
  let t = 0,
    e = 0;
  for (;;) {
    let r = n.shift();
    if (((t |= (r & 127) << (e * 7)), (e += 1), !(r & 128))) break;
  }
  return t;
}
function Le(n, t) {
  let e = t;
  for (;;) {
    let r = e & 127;
    if (((e >>= 7), e == 0)) {
      n.push(r);
      break;
    } else (r |= 128), n.push(r);
  }
}
function ft(n, t) {
  if (!n) throw new Error(t || "Assertion failed");
}
function qe(n) {
  if (n.length === 0) throw new Error(cc);
  return n.shift();
}
function _e(n, ...t) {
  let [e] = t;
  if (t.length === 2 ? e + (t[1] ?? 0) > n.length : e >= n.length)
    throw new Error(cc);
  return n.splice(...t);
}
function ds(n, t, e, r) {
  return M(this, null, function* () {
    let i = r && {
        skipPreflight: r.skipPreflight,
        preflightCommitment: r.preflightCommitment || r.commitment,
        maxRetries: r.maxRetries,
        minContextSlot: r.minContextSlot,
      },
      o = yield n.sendTransaction(t, e, i),
      s;
    if (t.recentBlockhash != null && t.lastValidBlockHeight != null)
      s = (yield n.confirmTransaction(
        {
          abortSignal: r?.abortSignal,
          signature: o,
          blockhash: t.recentBlockhash,
          lastValidBlockHeight: t.lastValidBlockHeight,
        },
        r && r.commitment
      )).value;
    else if (t.minNonceContextSlot != null && t.nonceInfo != null) {
      let { nonceInstruction: f } = t.nonceInfo,
        h = f.keys[0].pubkey;
      s = (yield n.confirmTransaction(
        {
          abortSignal: r?.abortSignal,
          minContextSlot: t.minNonceContextSlot,
          nonceAccountPubkey: h,
          nonceValue: t.nonceInfo.nonce,
          signature: o,
        },
        r && r.commitment
      )).value;
    } else
      r?.abortSignal != null &&
        console.warn(
          "sendAndConfirmTransaction(): A transaction with a deprecated confirmation strategy was supplied along with an `abortSignal`. Only transactions having `lastValidBlockHeight` or a combination of `nonceInfo` and `minNonceContextSlot` are abortable."
        ),
        (s = (yield n.confirmTransaction(o, r && r.commitment)).value);
    if (s.err)
      throw o != null
        ? new _r({
            action: "send",
            signature: o,
            transactionMessage: `Status: (${JSON.stringify(s)})`,
          })
        : new Error(`Transaction ${o} failed (${JSON.stringify(s)})`);
    return o;
  });
}
function Ir(n) {
  return new Promise((t) => setTimeout(t, n));
}
function at(n, t) {
  let e = n.layout.span >= 0 ? n.layout.span : uc(n, t),
    r = X.Buffer.alloc(e),
    i = Object.assign({ instruction: n.index }, t);
  return n.layout.encode(i, r), r;
}
function yt(n, t) {
  let e;
  try {
    e = n.layout.decode(t);
  } catch (r) {
    throw new Error("invalid instruction; " + r);
  }
  if (e.instruction !== n.index)
    throw new Error(
      `invalid instruction; instruction index mismatch ${e.instruction} != ${n.index}`
    );
  return e;
}
function xl(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default")
    ? n.default
    : n;
}
function Sl() {
  if (qu) return rs;
  qu = 1;
  var n = Object.prototype.toString,
    t =
      Object.keys ||
      function (r) {
        var i = [];
        for (var o in r) i.push(o);
        return i;
      };
  function e(r, i) {
    var o, s, f, h, b, B, S;
    if (r === !0) return "true";
    if (r === !1) return "false";
    switch (typeof r) {
      case "object":
        if (r === null) return null;
        if (r.toJSON && typeof r.toJSON == "function") return e(r.toJSON(), i);
        if (((S = n.call(r)), S === "[object Array]")) {
          for (f = "[", s = r.length - 1, o = 0; o < s; o++)
            f += e(r[o], !0) + ",";
          return s > -1 && (f += e(r[o], !0)), f + "]";
        } else if (S === "[object Object]") {
          for (h = t(r).sort(), s = h.length, f = "", o = 0; o < s; )
            (b = h[o]),
              (B = e(r[b], !1)),
              B !== void 0 &&
                (f && (f += ","), (f += JSON.stringify(b) + ":" + B)),
              o++;
          return "{" + f + "}";
        } else return JSON.stringify(r);
      case "function":
      case "undefined":
        return i ? null : void 0;
      case "string":
        return JSON.stringify(r);
      default:
        return isFinite(r) ? r : null;
    }
  }
  return (
    (rs = function (r) {
      var i = e(r, !1);
      if (i !== void 0) return "" + i;
    }),
    rs
  );
}
function ns(n) {
  let t = 0;
  for (; n > 1; ) (n /= 2), t++;
  return t;
}
function vl(n) {
  return n === 0
    ? 1
    : (n--,
      (n |= n >> 1),
      (n |= n >> 2),
      (n |= n >> 4),
      (n |= n >> 8),
      (n |= n >> 16),
      (n |= n >> 32),
      n + 1);
}
function _l(n, t) {
  let e;
  try {
    e = n.layout.decode(t);
  } catch (r) {
    throw new Error("invalid instruction; " + r);
  }
  if (e.typeIndex !== n.index)
    throw new Error(
      `invalid account data; account type mismatch ${e.typeIndex} != ${n.index}`
    );
  return e;
}
function Ll(n) {
  let t = n.match(Rl);
  if (t == null) throw TypeError(`Failed to validate endpoint URL \`${n}\``);
  let [e, r, i, o] = t,
    s = n.startsWith("https:") ? "wss:" : "ws:",
    f = i == null ? null : parseInt(i.slice(1), 10),
    h = f == null ? "" : `:${f + 1}`;
  return `${s}//${r}${h}${o}`;
}
function Ml(n) {
  if (/^https?:/.test(n) === !1)
    throw new TypeError("Endpoint URL must start with `http:` or `https:`.");
  return n;
}
function Bt(n) {
  let t, e;
  if (typeof n == "string") t = n;
  else if (n) {
    let r = n,
      { commitment: i } = r,
      o = je(r, ["commitment"]);
    (t = i), (e = o);
  }
  return { commitment: t, config: e };
}
function Hu(n) {
  return n.map((t) =>
    "memcmp" in t
      ? st(Q({}, t), {
          memcmp: st(Q({}, t.memcmp), {
            encoding: t.memcmp.encoding ?? "base58",
          }),
        })
      : t
  );
}
function yc(n) {
  return me([
    P({ jsonrpc: It("2.0"), id: F(), result: n }),
    P({
      jsonrpc: It("2.0"),
      id: F(),
      error: P({ code: Sr(), message: F(), data: Z(fu()) }),
    }),
  ]);
}
function rt(n) {
  return $r(yc(n), Tl, (t) =>
    "error" in t ? t : st(Q({}, t), { result: O(t.result, n) })
  );
}
function _t(n) {
  return rt(P({ context: P({ slot: I() }), value: n }));
}
function Mi(n) {
  return P({ context: P({ slot: I() }), value: n });
}
function is(n, t) {
  return n === 0
    ? new Vr({
        header: t.header,
        staticAccountKeys: t.accountKeys.map((e) => new z(e)),
        recentBlockhash: t.recentBlockhash,
        compiledInstructions: t.instructions.map((e) => ({
          programIdIndex: e.programIdIndex,
          accountKeyIndexes: e.accounts,
          data: le.default.decode(e.data),
        })),
        addressTableLookups: t.addressTableLookups,
      })
    : new Ge(t);
}
function Hl(n, t, e, r, i, o) {
  let s = e || El,
    f;
  o != null &&
    console.warn(
      "You have supplied an `httpAgent` when creating a `Connection` in a browser environment.It has been ignored; `httpAgent` is only used in Node environments."
    );
  let h;
  return (
    r &&
      (h = (B, S) =>
        M(this, null, function* () {
          let U = yield new Promise((_, E) => {
            try {
              r(B, S, (T, C) => _([T, C]));
            } catch (T) {
              E(T);
            }
          });
          return yield s(...U);
        })),
    new oc.default(
      (B, S) =>
        M(this, null, function* () {
          let U = {
            method: "POST",
            body: B,
            agent: f,
            headers: Object.assign(
              { "Content-Type": "application/json" },
              t || {},
              Hd
            ),
          };
          try {
            let _ = 5,
              E,
              T = 500;
            for (
              ;
              h ? (E = yield h(n, U)) : (E = yield s(n, U)),
                !(E.status !== 429 || i === !0 || ((_ -= 1), _ === 0));

            )
              console.error(
                `Server responded with ${E.status} ${E.statusText}.  Retrying after ${T}ms delay...`
              ),
                yield Ir(T),
                (T *= 2);
            let C = yield E.text();
            E.ok
              ? S(null, C)
              : S(new Error(`${E.status} ${E.statusText}: ${C}`));
          } catch (_) {
            _ instanceof Error && S(_);
          }
        }),
      {}
    )
  );
}
function Gl(n) {
  return (t, e) =>
    new Promise((r, i) => {
      n.request(t, e, (o, s) => {
        if (o) {
          i(o);
          return;
        }
        r(s);
      });
    });
}
function jl(n) {
  return (t) =>
    new Promise((e, r) => {
      t.length === 0 && e([]);
      let i = t.map((o) => n.request(o.methodName, o.args));
      n.request(i, (o, s) => {
        if (o) {
          r(o);
          return;
        }
        e(s);
      });
    });
}
function e0({ authorizedVoter: n, epoch: t }) {
  return { epoch: t, authorizedVoter: new z(n) };
}
function rc({
  authorizedPubkey: n,
  epochOfLastAuthorizedSwitch: t,
  targetEpoch: e,
}) {
  return {
    authorizedPubkey: new z(n),
    epochOfLastAuthorizedSwitch: t,
    targetEpoch: e,
  };
}
function r0({ buf: n, idx: t, isEmpty: e }) {
  return e ? [] : [...n.slice(t + 1).map(rc), ...n.slice(0, t).map(rc)];
}
function n0(n, t) {
  let e = t === !1 ? "http" : "https";
  if (!n) return nc[e].devnet;
  let r = nc[e][n];
  if (!r) throw new Error(`Unknown ${e} cluster: ${n}`);
  return r;
}
function i0(n, t, e, r) {
  return M(this, null, function* () {
    let i, o;
    (e && Object.prototype.hasOwnProperty.call(e, "lastValidBlockHeight")) ||
    (e && Object.prototype.hasOwnProperty.call(e, "nonceValue"))
      ? ((i = e), (o = r))
      : (o = e);
    let s = o && {
        skipPreflight: o.skipPreflight,
        preflightCommitment: o.preflightCommitment || o.commitment,
        minContextSlot: o.minContextSlot,
      },
      f = yield n.sendRawTransaction(t, s),
      h = o && o.commitment,
      B = (yield i ? n.confirmTransaction(i, h) : n.confirmTransaction(f, h))
        .value;
    if (B.err)
      throw f != null
        ? new _r({
            action: s?.skipPreflight ? "send" : "simulate",
            signature: f,
            transactionMessage: `Status: (${JSON.stringify(B)})`,
          })
        : new Error(`Raw transaction ${f} failed (${JSON.stringify(B)})`);
    return f;
  });
}
var X,
  us,
  le,
  Zr,
  g,
  ic,
  vn,
  oc,
  Qh,
  Du,
  ki,
  Rs,
  tl,
  nt,
  mn,
  cs,
  gn,
  sc,
  ac,
  He,
  Wu,
  z,
  fs,
  rl,
  pr,
  Li,
  wn,
  bn,
  kn,
  dr,
  Er,
  it,
  nl,
  vr,
  il,
  ol,
  sl,
  al,
  Bi,
  cc,
  Ge,
  Vr,
  Ls,
  rr,
  ul,
  mt,
  gt,
  hs,
  ls,
  cl,
  fl,
  hl,
  fc,
  We,
  ll,
  dl,
  wi,
  Hr,
  pl,
  yl,
  gl,
  bi,
  _r,
  ml,
  H,
  hc,
  lc,
  ps,
  xi,
  wl,
  bl,
  Gr,
  ys,
  xt,
  ye,
  kl,
  gs,
  Bl,
  ms,
  rs,
  qu,
  Il,
  $u,
  yn,
  Si,
  El,
  ws,
  Vu,
  Bn,
  Al,
  Rl,
  vt,
  dc,
  Ms,
  pc,
  Tl,
  Pl,
  Cl,
  Ul,
  Fl,
  Nl,
  Ol,
  zl,
  Rr,
  Dl,
  Kl,
  Wl,
  ql,
  $l,
  Gu,
  Vl,
  Yl,
  Zl,
  Jl,
  Xl,
  Ql,
  td,
  ed,
  rd,
  bs,
  nd,
  id,
  ks,
  od,
  sd,
  xn,
  ad,
  ud,
  Bs,
  cd,
  fd,
  hd,
  ld,
  dd,
  pd,
  yd,
  gd,
  md,
  wd,
  bd,
  kd,
  Bd,
  xd,
  ju,
  Sd,
  Id,
  vd,
  Ed,
  _d,
  gc,
  Ts,
  mc,
  wc,
  bc,
  kc,
  Ad,
  Rd,
  Bc,
  xc,
  Ii,
  Sc,
  Ti,
  Ps,
  Jr,
  Lr,
  Ld,
  Md,
  Td,
  Pd,
  Cd,
  Ud,
  Fd,
  Yu,
  os,
  mi,
  Nd,
  Od,
  zd,
  Dd,
  Kd,
  Wd,
  qd,
  $d,
  Vd,
  Hd,
  xs,
  vi,
  nr,
  Ss,
  Sn,
  Is,
  $e,
  In,
  Zu,
  Ju,
  Xu,
  Qu,
  Ei,
  Gd,
  jd,
  tc,
  ss,
  ec,
  Yd,
  as,
  _i,
  Ic,
  vc,
  Ai,
  Ar,
  vs,
  he,
  Zd,
  jr,
  Ri,
  Es,
  Ve,
  Jd,
  Yr,
  Ec,
  Xd,
  _s,
  Qd,
  t0,
  As,
  nc,
  o0,
  a0 = Et(() => {
    "use strict";
    X = Ye(en());
    Qa();
    (us = Ye(Lo())), (le = Ye(To()));
    Rc();
    (Zr = Ye(su())), (g = Ye(Wo())), (ic = Ye(Wo())), (vn = Ye(au()));
    hu();
    oc = Ye(Uu());
    zu();
    _c();
    Pc();
    (Qh = br.utils.randomPrivateKey),
      (Du = () => {
        let n = br.utils.randomPrivateKey(),
          t = ki(n),
          e = new Uint8Array(64);
        return e.set(n), e.set(t, 32), { publicKey: t, secretKey: e };
      }),
      (ki = br.getPublicKey);
    (Rs = (n, t) => br.sign(n, t.slice(0, 32))),
      (tl = br.verify),
      (nt = (n) =>
        X.Buffer.isBuffer(n)
          ? n
          : n instanceof Uint8Array
          ? X.Buffer.from(n.buffer, n.byteOffset, n.byteLength)
          : X.Buffer.from(n)),
      (mn = class {
        constructor(t) {
          Object.assign(this, t);
        }
        encode() {
          return X.Buffer.from((0, Zr.serialize)(gn, this));
        }
        static decode(t) {
          return (0, Zr.deserialize)(gn, this, t);
        }
        static decodeUnchecked(t) {
          return (0, Zr.deserializeUnchecked)(gn, this, t);
        }
      }),
      (cs = class extends mn {
        constructor(t) {
          if ((super(t), (this.enum = ""), Object.keys(t).length !== 1))
            throw new Error("Enum can only take single value");
          Object.keys(t).map((e) => {
            this.enum = e;
          });
        }
      }),
      (gn = new Map()),
      (ac = 32),
      (He = 32);
    (Wu = 1),
      (z = class n extends mn {
        constructor(t) {
          if ((super({}), (this._bn = void 0), el(t))) this._bn = t._bn;
          else {
            if (typeof t == "string") {
              let e = le.default.decode(t);
              if (e.length != He) throw new Error("Invalid public key input");
              this._bn = new us.default(e);
            } else this._bn = new us.default(t);
            if (this._bn.byteLength() > He)
              throw new Error("Invalid public key input");
          }
        }
        static unique() {
          let t = new n(Wu);
          return (Wu += 1), new n(t.toBuffer());
        }
        equals(t) {
          return this._bn.eq(t._bn);
        }
        toBase58() {
          return le.default.encode(this.toBytes());
        }
        toJSON() {
          return this.toBase58();
        }
        toBytes() {
          let t = this.toBuffer();
          return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
        }
        toBuffer() {
          let t = this._bn.toArrayLike(X.Buffer);
          if (t.length === He) return t;
          let e = X.Buffer.alloc(32);
          return t.copy(e, 32 - t.length), e;
        }
        get [Symbol.toStringTag]() {
          return `PublicKey(${this.toString()})`;
        }
        toString() {
          return this.toBase58();
        }
        static createWithSeed(t, e, r) {
          return M(this, null, function* () {
            let i = X.Buffer.concat([
                t.toBuffer(),
                X.Buffer.from(e),
                r.toBuffer(),
              ]),
              o = ro(i);
            return new n(o);
          });
        }
        static createProgramAddressSync(t, e) {
          let r = X.Buffer.alloc(0);
          t.forEach(function (o) {
            if (o.length > ac) throw new TypeError("Max seed length exceeded");
            r = X.Buffer.concat([r, nt(o)]);
          }),
            (r = X.Buffer.concat([
              r,
              e.toBuffer(),
              X.Buffer.from("ProgramDerivedAddress"),
            ]));
          let i = ro(r);
          if (Ku(i))
            throw new Error("Invalid seeds, address must fall off the curve");
          return new n(i);
        }
        static createProgramAddress(t, e) {
          return M(this, null, function* () {
            return this.createProgramAddressSync(t, e);
          });
        }
        static findProgramAddressSync(t, e) {
          let r = 255,
            i;
          for (; r != 0; ) {
            try {
              let o = t.concat(X.Buffer.from([r]));
              i = this.createProgramAddressSync(o, e);
            } catch (o) {
              if (o instanceof TypeError) throw o;
              r--;
              continue;
            }
            return [i, r];
          }
          throw new Error("Unable to find a viable program address nonce");
        }
        static findProgramAddress(t, e) {
          return M(this, null, function* () {
            return this.findProgramAddressSync(t, e);
          });
        }
        static isOnCurve(t) {
          let e = new n(t);
          return Ku(e.toBytes());
        }
      });
    sc = z;
    z.default = new sc("11111111111111111111111111111111");
    gn.set(z, { kind: "struct", fields: [["_bn", "u256"]] });
    (fs = class {
      constructor(t) {
        if (((this._publicKey = void 0), (this._secretKey = void 0), t)) {
          let e = nt(t);
          if (t.length !== 64) throw new Error("bad secret key size");
          (this._publicKey = e.slice(32, 64)),
            (this._secretKey = e.slice(0, 32));
        } else
          (this._secretKey = nt(Qh())),
            (this._publicKey = nt(ki(this._secretKey)));
      }
      get publicKey() {
        return new z(this._publicKey);
      }
      get secretKey() {
        return X.Buffer.concat([this._secretKey, this._publicKey], 64);
      }
    }),
      (rl = new z("BPFLoader1111111111111111111111111111111111")),
      (pr = 1232),
      (Li = 127),
      (wn = 64),
      (bn = class extends Error {
        constructor(t) {
          super(`Signature ${t} has expired: block height exceeded.`),
            (this.signature = void 0),
            (this.signature = t);
        }
      });
    Object.defineProperty(bn.prototype, "name", {
      value: "TransactionExpiredBlockheightExceededError",
    });
    kn = class extends Error {
      constructor(t, e) {
        super(
          `Transaction was not confirmed in ${e.toFixed(
            2
          )} seconds. It is unknown if it succeeded or failed. Check signature ${t} using the Solana Explorer or CLI tools.`
        ),
          (this.signature = void 0),
          (this.signature = t);
      }
    };
    Object.defineProperty(kn.prototype, "name", {
      value: "TransactionExpiredTimeoutError",
    });
    dr = class extends Error {
      constructor(t) {
        super(`Signature ${t} has expired: the nonce is no longer valid.`),
          (this.signature = void 0),
          (this.signature = t);
      }
    };
    Object.defineProperty(dr.prototype, "name", {
      value: "TransactionExpiredNonceInvalidError",
    });
    (Er = class {
      constructor(t, e) {
        (this.staticAccountKeys = void 0),
          (this.accountKeysFromLookups = void 0),
          (this.staticAccountKeys = t),
          (this.accountKeysFromLookups = e);
      }
      keySegments() {
        let t = [this.staticAccountKeys];
        return (
          this.accountKeysFromLookups &&
            (t.push(this.accountKeysFromLookups.writable),
            t.push(this.accountKeysFromLookups.readonly)),
          t
        );
      }
      get(t) {
        for (let e of this.keySegments()) {
          if (t < e.length) return e[t];
          t -= e.length;
        }
      }
      get length() {
        return this.keySegments().flat().length;
      }
      compileInstructions(t) {
        if (this.length > 256)
          throw new Error(
            "Account index overflow encountered during compilation"
          );
        let r = new Map();
        this.keySegments()
          .flat()
          .forEach((o, s) => {
            r.set(o.toBase58(), s);
          });
        let i = (o) => {
          let s = r.get(o.toBase58());
          if (s === void 0)
            throw new Error(
              "Encountered an unknown instruction account key during compilation"
            );
          return s;
        };
        return t.map((o) => ({
          programIdIndex: i(o.programId),
          accountKeyIndexes: o.keys.map((s) => i(s.pubkey)),
          data: o.data,
        }));
      }
    }),
      (it = (n = "publicKey") => g.blob(32, n)),
      (nl = (n = "signature") => g.blob(64, n)),
      (vr = (n = "string") => {
        let t = g.struct(
            [
              g.u32("length"),
              g.u32("lengthPadding"),
              g.blob(g.offset(g.u32(), -8), "chars"),
            ],
            n
          ),
          e = t.decode.bind(t),
          r = t.encode.bind(t),
          i = t;
        return (
          (i.decode = (o, s) => e(o, s).chars.toString()),
          (i.encode = (o, s, f) => {
            let h = { chars: X.Buffer.from(o, "utf8") };
            return r(h, s, f);
          }),
          (i.alloc = (o) =>
            g.u32().span + g.u32().span + X.Buffer.from(o, "utf8").length),
          i
        );
      }),
      (il = (n = "authorized") =>
        g.struct([it("staker"), it("withdrawer")], n)),
      (ol = (n = "lockup") =>
        g.struct(
          [g.ns64("unixTimestamp"), g.ns64("epoch"), it("custodian")],
          n
        )),
      (sl = (n = "voteInit") =>
        g.struct(
          [
            it("nodePubkey"),
            it("authorizedVoter"),
            it("authorizedWithdrawer"),
            g.u8("commission"),
          ],
          n
        )),
      (al = (n = "voteAuthorizeWithSeedArgs") =>
        g.struct(
          [
            g.u32("voteAuthorizationType"),
            it("currentAuthorityDerivedKeyOwnerPubkey"),
            vr("currentAuthorityDerivedKeySeed"),
            it("newAuthorized"),
          ],
          n
        ));
    (Bi = class n {
      constructor(t, e) {
        (this.payer = void 0),
          (this.keyMetaMap = void 0),
          (this.payer = t),
          (this.keyMetaMap = e);
      }
      static compile(t, e) {
        let r = new Map(),
          i = (s) => {
            let f = s.toBase58(),
              h = r.get(f);
            return (
              h === void 0 &&
                ((h = { isSigner: !1, isWritable: !1, isInvoked: !1 }),
                r.set(f, h)),
              h
            );
          },
          o = i(e);
        (o.isSigner = !0), (o.isWritable = !0);
        for (let s of t) {
          i(s.programId).isInvoked = !0;
          for (let f of s.keys) {
            let h = i(f.pubkey);
            (h.isSigner ||= f.isSigner), (h.isWritable ||= f.isWritable);
          }
        }
        return new n(e, r);
      }
      getMessageComponents() {
        let t = [...this.keyMetaMap.entries()];
        ft(t.length <= 256, "Max static account keys length exceeded");
        let e = t.filter(([, h]) => h.isSigner && h.isWritable),
          r = t.filter(([, h]) => h.isSigner && !h.isWritable),
          i = t.filter(([, h]) => !h.isSigner && h.isWritable),
          o = t.filter(([, h]) => !h.isSigner && !h.isWritable),
          s = {
            numRequiredSignatures: e.length + r.length,
            numReadonlySignedAccounts: r.length,
            numReadonlyUnsignedAccounts: o.length,
          };
        {
          ft(e.length > 0, "Expected at least one writable signer key");
          let [h] = e[0];
          ft(
            h === this.payer.toBase58(),
            "Expected first writable signer key to be the fee payer"
          );
        }
        let f = [
          ...e.map(([h]) => new z(h)),
          ...r.map(([h]) => new z(h)),
          ...i.map(([h]) => new z(h)),
          ...o.map(([h]) => new z(h)),
        ];
        return [s, f];
      }
      extractTableLookup(t) {
        let [e, r] = this.drainKeysFoundInLookupTable(
            t.state.addresses,
            (s) => !s.isSigner && !s.isInvoked && s.isWritable
          ),
          [i, o] = this.drainKeysFoundInLookupTable(
            t.state.addresses,
            (s) => !s.isSigner && !s.isInvoked && !s.isWritable
          );
        if (!(e.length === 0 && i.length === 0))
          return [
            { accountKey: t.key, writableIndexes: e, readonlyIndexes: i },
            { writable: r, readonly: o },
          ];
      }
      drainKeysFoundInLookupTable(t, e) {
        let r = new Array(),
          i = new Array();
        for (let [o, s] of this.keyMetaMap.entries())
          if (e(s)) {
            let f = new z(o),
              h = t.findIndex((b) => b.equals(f));
            h >= 0 &&
              (ft(h < 256, "Max lookup table index exceeded"),
              r.push(h),
              i.push(f),
              this.keyMetaMap.delete(o));
          }
        return [r, i];
      }
    }),
      (cc = "Reached end of buffer unexpectedly");
    (Ge = class n {
      constructor(t) {
        (this.header = void 0),
          (this.accountKeys = void 0),
          (this.recentBlockhash = void 0),
          (this.instructions = void 0),
          (this.indexToProgramIds = new Map()),
          (this.header = t.header),
          (this.accountKeys = t.accountKeys.map((e) => new z(e))),
          (this.recentBlockhash = t.recentBlockhash),
          (this.instructions = t.instructions),
          this.instructions.forEach((e) =>
            this.indexToProgramIds.set(
              e.programIdIndex,
              this.accountKeys[e.programIdIndex]
            )
          );
      }
      get version() {
        return "legacy";
      }
      get staticAccountKeys() {
        return this.accountKeys;
      }
      get compiledInstructions() {
        return this.instructions.map((t) => ({
          programIdIndex: t.programIdIndex,
          accountKeyIndexes: t.accounts,
          data: le.default.decode(t.data),
        }));
      }
      get addressTableLookups() {
        return [];
      }
      getAccountKeys() {
        return new Er(this.staticAccountKeys);
      }
      static compile(t) {
        let e = Bi.compile(t.instructions, t.payerKey),
          [r, i] = e.getMessageComponents(),
          s = new Er(i)
            .compileInstructions(t.instructions)
            .map((f) => ({
              programIdIndex: f.programIdIndex,
              accounts: f.accountKeyIndexes,
              data: le.default.encode(f.data),
            }));
        return new n({
          header: r,
          accountKeys: i,
          recentBlockhash: t.recentBlockhash,
          instructions: s,
        });
      }
      isAccountSigner(t) {
        return t < this.header.numRequiredSignatures;
      }
      isAccountWritable(t) {
        let e = this.header.numRequiredSignatures;
        if (t >= this.header.numRequiredSignatures) {
          let r = t - e,
            o =
              this.accountKeys.length -
              e -
              this.header.numReadonlyUnsignedAccounts;
          return r < o;
        } else {
          let r = e - this.header.numReadonlySignedAccounts;
          return t < r;
        }
      }
      isProgramId(t) {
        return this.indexToProgramIds.has(t);
      }
      programIds() {
        return [...this.indexToProgramIds.values()];
      }
      nonProgramIds() {
        return this.accountKeys.filter((t, e) => !this.isProgramId(e));
      }
      serialize() {
        let t = this.accountKeys.length,
          e = [];
        Le(e, t);
        let r = this.instructions.map((S) => {
            let { accounts: U, programIdIndex: _ } = S,
              E = Array.from(le.default.decode(S.data)),
              T = [];
            Le(T, U.length);
            let C = [];
            return (
              Le(C, E.length),
              {
                programIdIndex: _,
                keyIndicesCount: X.Buffer.from(T),
                keyIndices: U,
                dataLength: X.Buffer.from(C),
                data: E,
              }
            );
          }),
          i = [];
        Le(i, r.length);
        let o = X.Buffer.alloc(pr);
        X.Buffer.from(i).copy(o);
        let s = i.length;
        r.forEach((S) => {
          let _ = g
            .struct([
              g.u8("programIdIndex"),
              g.blob(S.keyIndicesCount.length, "keyIndicesCount"),
              g.seq(g.u8("keyIndex"), S.keyIndices.length, "keyIndices"),
              g.blob(S.dataLength.length, "dataLength"),
              g.seq(g.u8("userdatum"), S.data.length, "data"),
            ])
            .encode(S, o, s);
          s += _;
        }),
          (o = o.slice(0, s));
        let f = g.struct([
            g.blob(1, "numRequiredSignatures"),
            g.blob(1, "numReadonlySignedAccounts"),
            g.blob(1, "numReadonlyUnsignedAccounts"),
            g.blob(e.length, "keyCount"),
            g.seq(it("key"), t, "keys"),
            it("recentBlockhash"),
          ]),
          h = {
            numRequiredSignatures: X.Buffer.from([
              this.header.numRequiredSignatures,
            ]),
            numReadonlySignedAccounts: X.Buffer.from([
              this.header.numReadonlySignedAccounts,
            ]),
            numReadonlyUnsignedAccounts: X.Buffer.from([
              this.header.numReadonlyUnsignedAccounts,
            ]),
            keyCount: X.Buffer.from(e),
            keys: this.accountKeys.map((S) => nt(S.toBytes())),
            recentBlockhash: le.default.decode(this.recentBlockhash),
          },
          b = X.Buffer.alloc(2048),
          B = f.encode(h, b);
        return o.copy(b, B), b.slice(0, B + o.length);
      }
      static from(t) {
        let e = [...t],
          r = qe(e);
        if (r !== (r & Li))
          throw new Error(
            "Versioned messages must be deserialized with VersionedMessage.deserialize()"
          );
        let i = qe(e),
          o = qe(e),
          s = Ee(e),
          f = [];
        for (let U = 0; U < s; U++) {
          let _ = _e(e, 0, He);
          f.push(new z(X.Buffer.from(_)));
        }
        let h = _e(e, 0, He),
          b = Ee(e),
          B = [];
        for (let U = 0; U < b; U++) {
          let _ = qe(e),
            E = Ee(e),
            T = _e(e, 0, E),
            C = Ee(e),
            L = _e(e, 0, C),
            N = le.default.encode(X.Buffer.from(L));
          B.push({ programIdIndex: _, accounts: T, data: N });
        }
        let S = {
          header: {
            numRequiredSignatures: r,
            numReadonlySignedAccounts: i,
            numReadonlyUnsignedAccounts: o,
          },
          recentBlockhash: le.default.encode(X.Buffer.from(h)),
          accountKeys: f,
          instructions: B,
        };
        return new n(S);
      }
    }),
      (Vr = class n {
        constructor(t) {
          (this.header = void 0),
            (this.staticAccountKeys = void 0),
            (this.recentBlockhash = void 0),
            (this.compiledInstructions = void 0),
            (this.addressTableLookups = void 0),
            (this.header = t.header),
            (this.staticAccountKeys = t.staticAccountKeys),
            (this.recentBlockhash = t.recentBlockhash),
            (this.compiledInstructions = t.compiledInstructions),
            (this.addressTableLookups = t.addressTableLookups);
        }
        get version() {
          return 0;
        }
        get numAccountKeysFromLookups() {
          let t = 0;
          for (let e of this.addressTableLookups)
            t += e.readonlyIndexes.length + e.writableIndexes.length;
          return t;
        }
        getAccountKeys(t) {
          let e;
          if (t && "accountKeysFromLookups" in t && t.accountKeysFromLookups) {
            if (
              this.numAccountKeysFromLookups !=
              t.accountKeysFromLookups.writable.length +
                t.accountKeysFromLookups.readonly.length
            )
              throw new Error(
                "Failed to get account keys because of a mismatch in the number of account keys from lookups"
              );
            e = t.accountKeysFromLookups;
          } else if (
            t &&
            "addressLookupTableAccounts" in t &&
            t.addressLookupTableAccounts
          )
            e = this.resolveAddressTableLookups(t.addressLookupTableAccounts);
          else if (this.addressTableLookups.length > 0)
            throw new Error(
              "Failed to get account keys because address table lookups were not resolved"
            );
          return new Er(this.staticAccountKeys, e);
        }
        isAccountSigner(t) {
          return t < this.header.numRequiredSignatures;
        }
        isAccountWritable(t) {
          let e = this.header.numRequiredSignatures,
            r = this.staticAccountKeys.length;
          if (t >= r) {
            let i = t - r,
              o = this.addressTableLookups.reduce(
                (s, f) => s + f.writableIndexes.length,
                0
              );
            return i < o;
          } else if (t >= this.header.numRequiredSignatures) {
            let i = t - e,
              s = r - e - this.header.numReadonlyUnsignedAccounts;
            return i < s;
          } else {
            let i = e - this.header.numReadonlySignedAccounts;
            return t < i;
          }
        }
        resolveAddressTableLookups(t) {
          let e = { writable: [], readonly: [] };
          for (let r of this.addressTableLookups) {
            let i = t.find((o) => o.key.equals(r.accountKey));
            if (!i)
              throw new Error(
                `Failed to find address lookup table account for table key ${r.accountKey.toBase58()}`
              );
            for (let o of r.writableIndexes)
              if (o < i.state.addresses.length)
                e.writable.push(i.state.addresses[o]);
              else
                throw new Error(
                  `Failed to find address for index ${o} in address lookup table ${r.accountKey.toBase58()}`
                );
            for (let o of r.readonlyIndexes)
              if (o < i.state.addresses.length)
                e.readonly.push(i.state.addresses[o]);
              else
                throw new Error(
                  `Failed to find address for index ${o} in address lookup table ${r.accountKey.toBase58()}`
                );
          }
          return e;
        }
        static compile(t) {
          let e = Bi.compile(t.instructions, t.payerKey),
            r = new Array(),
            i = { writable: new Array(), readonly: new Array() },
            o = t.addressLookupTableAccounts || [];
          for (let B of o) {
            let S = e.extractTableLookup(B);
            if (S !== void 0) {
              let [U, { writable: _, readonly: E }] = S;
              r.push(U), i.writable.push(..._), i.readonly.push(...E);
            }
          }
          let [s, f] = e.getMessageComponents(),
            b = new Er(f, i).compileInstructions(t.instructions);
          return new n({
            header: s,
            staticAccountKeys: f,
            recentBlockhash: t.recentBlockhash,
            compiledInstructions: b,
            addressTableLookups: r,
          });
        }
        serialize() {
          let t = Array();
          Le(t, this.staticAccountKeys.length);
          let e = this.serializeInstructions(),
            r = Array();
          Le(r, this.compiledInstructions.length);
          let i = this.serializeAddressTableLookups(),
            o = Array();
          Le(o, this.addressTableLookups.length);
          let s = g.struct([
              g.u8("prefix"),
              g.struct(
                [
                  g.u8("numRequiredSignatures"),
                  g.u8("numReadonlySignedAccounts"),
                  g.u8("numReadonlyUnsignedAccounts"),
                ],
                "header"
              ),
              g.blob(t.length, "staticAccountKeysLength"),
              g.seq(it(), this.staticAccountKeys.length, "staticAccountKeys"),
              it("recentBlockhash"),
              g.blob(r.length, "instructionsLength"),
              g.blob(e.length, "serializedInstructions"),
              g.blob(o.length, "addressTableLookupsLength"),
              g.blob(i.length, "serializedAddressTableLookups"),
            ]),
            f = new Uint8Array(pr),
            b = s.encode(
              {
                prefix: 128,
                header: this.header,
                staticAccountKeysLength: new Uint8Array(t),
                staticAccountKeys: this.staticAccountKeys.map((B) =>
                  B.toBytes()
                ),
                recentBlockhash: le.default.decode(this.recentBlockhash),
                instructionsLength: new Uint8Array(r),
                serializedInstructions: e,
                addressTableLookupsLength: new Uint8Array(o),
                serializedAddressTableLookups: i,
              },
              f
            );
          return f.slice(0, b);
        }
        serializeInstructions() {
          let t = 0,
            e = new Uint8Array(pr);
          for (let r of this.compiledInstructions) {
            let i = Array();
            Le(i, r.accountKeyIndexes.length);
            let o = Array();
            Le(o, r.data.length);
            let s = g.struct([
              g.u8("programIdIndex"),
              g.blob(i.length, "encodedAccountKeyIndexesLength"),
              g.seq(g.u8(), r.accountKeyIndexes.length, "accountKeyIndexes"),
              g.blob(o.length, "encodedDataLength"),
              g.blob(r.data.length, "data"),
            ]);
            t += s.encode(
              {
                programIdIndex: r.programIdIndex,
                encodedAccountKeyIndexesLength: new Uint8Array(i),
                accountKeyIndexes: r.accountKeyIndexes,
                encodedDataLength: new Uint8Array(o),
                data: r.data,
              },
              e,
              t
            );
          }
          return e.slice(0, t);
        }
        serializeAddressTableLookups() {
          let t = 0,
            e = new Uint8Array(pr);
          for (let r of this.addressTableLookups) {
            let i = Array();
            Le(i, r.writableIndexes.length);
            let o = Array();
            Le(o, r.readonlyIndexes.length);
            let s = g.struct([
              it("accountKey"),
              g.blob(i.length, "encodedWritableIndexesLength"),
              g.seq(g.u8(), r.writableIndexes.length, "writableIndexes"),
              g.blob(o.length, "encodedReadonlyIndexesLength"),
              g.seq(g.u8(), r.readonlyIndexes.length, "readonlyIndexes"),
            ]);
            t += s.encode(
              {
                accountKey: r.accountKey.toBytes(),
                encodedWritableIndexesLength: new Uint8Array(i),
                writableIndexes: r.writableIndexes,
                encodedReadonlyIndexesLength: new Uint8Array(o),
                readonlyIndexes: r.readonlyIndexes,
              },
              e,
              t
            );
          }
          return e.slice(0, t);
        }
        static deserialize(t) {
          let e = [...t],
            r = qe(e),
            i = r & Li;
          ft(r !== i, "Expected versioned message but received legacy message");
          let o = i;
          ft(
            o === 0,
            `Expected versioned message with version 0 but found version ${o}`
          );
          let s = {
              numRequiredSignatures: qe(e),
              numReadonlySignedAccounts: qe(e),
              numReadonlyUnsignedAccounts: qe(e),
            },
            f = [],
            h = Ee(e);
          for (let E = 0; E < h; E++) f.push(new z(_e(e, 0, He)));
          let b = le.default.encode(_e(e, 0, He)),
            B = Ee(e),
            S = [];
          for (let E = 0; E < B; E++) {
            let T = qe(e),
              C = Ee(e),
              L = _e(e, 0, C),
              N = Ee(e),
              W = new Uint8Array(_e(e, 0, N));
            S.push({ programIdIndex: T, accountKeyIndexes: L, data: W });
          }
          let U = Ee(e),
            _ = [];
          for (let E = 0; E < U; E++) {
            let T = new z(_e(e, 0, He)),
              C = Ee(e),
              L = _e(e, 0, C),
              N = Ee(e),
              W = _e(e, 0, N);
            _.push({ accountKey: T, writableIndexes: L, readonlyIndexes: W });
          }
          return new n({
            header: s,
            staticAccountKeys: f,
            recentBlockhash: b,
            compiledInstructions: S,
            addressTableLookups: _,
          });
        }
      }),
      (Ls = {
        deserializeMessageVersion(n) {
          let t = n[0],
            e = t & Li;
          return e === t ? "legacy" : e;
        },
        deserialize: (n) => {
          let t = Ls.deserializeMessageVersion(n);
          if (t === "legacy") return Ge.from(n);
          if (t === 0) return Vr.deserialize(n);
          throw new Error(
            `Transaction message version ${t} deserialization is not supported`
          );
        },
      }),
      (rr = (function (n) {
        return (
          (n[(n.BLOCKHEIGHT_EXCEEDED = 0)] = "BLOCKHEIGHT_EXCEEDED"),
          (n[(n.PROCESSED = 1)] = "PROCESSED"),
          (n[(n.TIMED_OUT = 2)] = "TIMED_OUT"),
          (n[(n.NONCE_INVALID = 3)] = "NONCE_INVALID"),
          n
        );
      })({})),
      (ul = X.Buffer.alloc(wn).fill(0)),
      (mt = class {
        constructor(t) {
          (this.keys = void 0),
            (this.programId = void 0),
            (this.data = X.Buffer.alloc(0)),
            (this.programId = t.programId),
            (this.keys = t.keys),
            t.data && (this.data = t.data);
        }
        toJSON() {
          return {
            keys: this.keys.map(
              ({ pubkey: t, isSigner: e, isWritable: r }) => ({
                pubkey: t.toJSON(),
                isSigner: e,
                isWritable: r,
              })
            ),
            programId: this.programId.toJSON(),
            data: [...this.data],
          };
        }
      }),
      (gt = class n {
        get signature() {
          return this.signatures.length > 0
            ? this.signatures[0].signature
            : null;
        }
        constructor(t) {
          if (
            ((this.signatures = []),
            (this.feePayer = void 0),
            (this.instructions = []),
            (this.recentBlockhash = void 0),
            (this.lastValidBlockHeight = void 0),
            (this.nonceInfo = void 0),
            (this.minNonceContextSlot = void 0),
            (this._message = void 0),
            (this._json = void 0),
            !!t)
          )
            if (
              (t.feePayer && (this.feePayer = t.feePayer),
              t.signatures && (this.signatures = t.signatures),
              Object.prototype.hasOwnProperty.call(t, "nonceInfo"))
            ) {
              let { minContextSlot: e, nonceInfo: r } = t;
              (this.minNonceContextSlot = e), (this.nonceInfo = r);
            } else if (
              Object.prototype.hasOwnProperty.call(t, "lastValidBlockHeight")
            ) {
              let { blockhash: e, lastValidBlockHeight: r } = t;
              (this.recentBlockhash = e), (this.lastValidBlockHeight = r);
            } else {
              let { recentBlockhash: e, nonceInfo: r } = t;
              r && (this.nonceInfo = r), (this.recentBlockhash = e);
            }
        }
        toJSON() {
          return {
            recentBlockhash: this.recentBlockhash || null,
            feePayer: this.feePayer ? this.feePayer.toJSON() : null,
            nonceInfo: this.nonceInfo
              ? {
                  nonce: this.nonceInfo.nonce,
                  nonceInstruction: this.nonceInfo.nonceInstruction.toJSON(),
                }
              : null,
            instructions: this.instructions.map((t) => t.toJSON()),
            signers: this.signatures.map(({ publicKey: t }) => t.toJSON()),
          };
        }
        add(...t) {
          if (t.length === 0) throw new Error("No instructions");
          return (
            t.forEach((e) => {
              "instructions" in e
                ? (this.instructions = this.instructions.concat(e.instructions))
                : "data" in e && "programId" in e && "keys" in e
                ? this.instructions.push(e)
                : this.instructions.push(new mt(e));
            }),
            this
          );
        }
        compileMessage() {
          if (
            this._message &&
            JSON.stringify(this.toJSON()) === JSON.stringify(this._json)
          )
            return this._message;
          let t, e;
          if (
            (this.nonceInfo
              ? ((t = this.nonceInfo.nonce),
                this.instructions[0] != this.nonceInfo.nonceInstruction
                  ? (e = [
                      this.nonceInfo.nonceInstruction,
                      ...this.instructions,
                    ])
                  : (e = this.instructions))
              : ((t = this.recentBlockhash), (e = this.instructions)),
            !t)
          )
            throw new Error("Transaction recentBlockhash required");
          e.length < 1 && console.warn("No instructions provided");
          let r;
          if (this.feePayer) r = this.feePayer;
          else if (this.signatures.length > 0 && this.signatures[0].publicKey)
            r = this.signatures[0].publicKey;
          else throw new Error("Transaction fee payer required");
          for (let T = 0; T < e.length; T++)
            if (e[T].programId === void 0)
              throw new Error(
                `Transaction instruction index ${T} has undefined program id`
              );
          let i = [],
            o = [];
          e.forEach((T) => {
            T.keys.forEach((L) => {
              o.push(Q({}, L));
            });
            let C = T.programId.toString();
            i.includes(C) || i.push(C);
          }),
            i.forEach((T) => {
              o.push({ pubkey: new z(T), isSigner: !1, isWritable: !1 });
            });
          let s = [];
          o.forEach((T) => {
            let C = T.pubkey.toString(),
              L = s.findIndex((N) => N.pubkey.toString() === C);
            L > -1
              ? ((s[L].isWritable = s[L].isWritable || T.isWritable),
                (s[L].isSigner = s[L].isSigner || T.isSigner))
              : s.push(T);
          }),
            s.sort(function (T, C) {
              if (T.isSigner !== C.isSigner) return T.isSigner ? -1 : 1;
              if (T.isWritable !== C.isWritable) return T.isWritable ? -1 : 1;
              let L = {
                localeMatcher: "best fit",
                usage: "sort",
                sensitivity: "variant",
                ignorePunctuation: !1,
                numeric: !1,
                caseFirst: "lower",
              };
              return T.pubkey
                .toBase58()
                .localeCompare(C.pubkey.toBase58(), "en", L);
            });
          let f = s.findIndex((T) => T.pubkey.equals(r));
          if (f > -1) {
            let [T] = s.splice(f, 1);
            (T.isSigner = !0), (T.isWritable = !0), s.unshift(T);
          } else s.unshift({ pubkey: r, isSigner: !0, isWritable: !0 });
          for (let T of this.signatures) {
            let C = s.findIndex((L) => L.pubkey.equals(T.publicKey));
            if (C > -1)
              s[C].isSigner ||
                ((s[C].isSigner = !0),
                console.warn(
                  "Transaction references a signature that is unnecessary, only the fee payer and instruction signer accounts should sign a transaction. This behavior is deprecated and will throw an error in the next major version release."
                ));
            else throw new Error(`unknown signer: ${T.publicKey.toString()}`);
          }
          let h = 0,
            b = 0,
            B = 0,
            S = [],
            U = [];
          s.forEach(({ pubkey: T, isSigner: C, isWritable: L }) => {
            C
              ? (S.push(T.toString()), (h += 1), L || (b += 1))
              : (U.push(T.toString()), L || (B += 1));
          });
          let _ = S.concat(U),
            E = e.map((T) => {
              let { data: C, programId: L } = T;
              return {
                programIdIndex: _.indexOf(L.toString()),
                accounts: T.keys.map((N) => _.indexOf(N.pubkey.toString())),
                data: le.default.encode(C),
              };
            });
          return (
            E.forEach((T) => {
              ft(T.programIdIndex >= 0), T.accounts.forEach((C) => ft(C >= 0));
            }),
            new Ge({
              header: {
                numRequiredSignatures: h,
                numReadonlySignedAccounts: b,
                numReadonlyUnsignedAccounts: B,
              },
              accountKeys: _,
              recentBlockhash: t,
              instructions: E,
            })
          );
        }
        _compile() {
          let t = this.compileMessage(),
            e = t.accountKeys.slice(0, t.header.numRequiredSignatures);
          return (
            (this.signatures.length === e.length &&
              this.signatures.every((i, o) => e[o].equals(i.publicKey))) ||
              (this.signatures = e.map((r) => ({
                signature: null,
                publicKey: r,
              }))),
            t
          );
        }
        serializeMessage() {
          return this._compile().serialize();
        }
        getEstimatedFee(t) {
          return M(this, null, function* () {
            return (yield t.getFeeForMessage(this.compileMessage())).value;
          });
        }
        setSigners(...t) {
          if (t.length === 0) throw new Error("No signers");
          let e = new Set();
          this.signatures = t
            .filter((r) => {
              let i = r.toString();
              return e.has(i) ? !1 : (e.add(i), !0);
            })
            .map((r) => ({ signature: null, publicKey: r }));
        }
        sign(...t) {
          if (t.length === 0) throw new Error("No signers");
          let e = new Set(),
            r = [];
          for (let o of t) {
            let s = o.publicKey.toString();
            e.has(s) || (e.add(s), r.push(o));
          }
          this.signatures = r.map((o) => ({
            signature: null,
            publicKey: o.publicKey,
          }));
          let i = this._compile();
          this._partialSign(i, ...r);
        }
        partialSign(...t) {
          if (t.length === 0) throw new Error("No signers");
          let e = new Set(),
            r = [];
          for (let o of t) {
            let s = o.publicKey.toString();
            e.has(s) || (e.add(s), r.push(o));
          }
          let i = this._compile();
          this._partialSign(i, ...r);
        }
        _partialSign(t, ...e) {
          let r = t.serialize();
          e.forEach((i) => {
            let o = Rs(r, i.secretKey);
            this._addSignature(i.publicKey, nt(o));
          });
        }
        addSignature(t, e) {
          this._compile(), this._addSignature(t, e);
        }
        _addSignature(t, e) {
          ft(e.length === 64);
          let r = this.signatures.findIndex((i) => t.equals(i.publicKey));
          if (r < 0) throw new Error(`unknown signer: ${t.toString()}`);
          this.signatures[r].signature = X.Buffer.from(e);
        }
        verifySignatures(t = !0) {
          return !this._getMessageSignednessErrors(this.serializeMessage(), t);
        }
        _getMessageSignednessErrors(t, e) {
          let r = {};
          for (let { signature: i, publicKey: o } of this.signatures)
            i === null
              ? e && (r.missing ||= []).push(o)
              : tl(i, t, o.toBytes()) || (r.invalid ||= []).push(o);
          return r.invalid || r.missing ? r : void 0;
        }
        serialize(t) {
          let { requireAllSignatures: e, verifySignatures: r } = Object.assign(
              { requireAllSignatures: !0, verifySignatures: !0 },
              t
            ),
            i = this.serializeMessage();
          if (r) {
            let o = this._getMessageSignednessErrors(i, e);
            if (o) {
              let s = "Signature verification failed.";
              throw (
                (o.invalid &&
                  (s += `
Invalid signature for public key${
                    o.invalid.length === 1 ? "" : "(s)"
                  } [\`${o.invalid.map((f) => f.toBase58()).join("`, `")}\`].`),
                o.missing &&
                  (s += `
Missing signature for public key${
                    o.missing.length === 1 ? "" : "(s)"
                  } [\`${o.missing.map((f) => f.toBase58()).join("`, `")}\`].`),
                new Error(s))
              );
            }
          }
          return this._serialize(i);
        }
        _serialize(t) {
          let { signatures: e } = this,
            r = [];
          Le(r, e.length);
          let i = r.length + e.length * 64 + t.length,
            o = X.Buffer.alloc(i);
          return (
            ft(e.length < 256),
            X.Buffer.from(r).copy(o, 0),
            e.forEach(({ signature: s }, f) => {
              s !== null &&
                (ft(s.length === 64, "signature has invalid length"),
                X.Buffer.from(s).copy(o, r.length + f * 64));
            }),
            t.copy(o, r.length + e.length * 64),
            ft(o.length <= pr, `Transaction too large: ${o.length} > ${pr}`),
            o
          );
        }
        get keys() {
          return (
            ft(this.instructions.length === 1),
            this.instructions[0].keys.map((t) => t.pubkey)
          );
        }
        get programId() {
          return (
            ft(this.instructions.length === 1), this.instructions[0].programId
          );
        }
        get data() {
          return ft(this.instructions.length === 1), this.instructions[0].data;
        }
        static from(t) {
          let e = [...t],
            r = Ee(e),
            i = [];
          for (let o = 0; o < r; o++) {
            let s = _e(e, 0, wn);
            i.push(le.default.encode(X.Buffer.from(s)));
          }
          return n.populate(Ge.from(e), i);
        }
        static populate(t, e = []) {
          let r = new n();
          return (
            (r.recentBlockhash = t.recentBlockhash),
            t.header.numRequiredSignatures > 0 &&
              (r.feePayer = t.accountKeys[0]),
            e.forEach((i, o) => {
              let s = {
                signature:
                  i == le.default.encode(ul) ? null : le.default.decode(i),
                publicKey: t.accountKeys[o],
              };
              r.signatures.push(s);
            }),
            t.instructions.forEach((i) => {
              let o = i.accounts.map((s) => {
                let f = t.accountKeys[s];
                return {
                  pubkey: f,
                  isSigner:
                    r.signatures.some(
                      (h) => h.publicKey.toString() === f.toString()
                    ) || t.isAccountSigner(s),
                  isWritable: t.isAccountWritable(s),
                };
              });
              r.instructions.push(
                new mt({
                  keys: o,
                  programId: t.accountKeys[i.programIdIndex],
                  data: le.default.decode(i.data),
                })
              );
            }),
            (r._message = t),
            (r._json = r.toJSON()),
            r
          );
        }
      }),
      (hs = class n {
        constructor(t) {
          (this.payerKey = void 0),
            (this.instructions = void 0),
            (this.recentBlockhash = void 0),
            (this.payerKey = t.payerKey),
            (this.instructions = t.instructions),
            (this.recentBlockhash = t.recentBlockhash);
        }
        static decompile(t, e) {
          let { header: r, compiledInstructions: i, recentBlockhash: o } = t,
            {
              numRequiredSignatures: s,
              numReadonlySignedAccounts: f,
              numReadonlyUnsignedAccounts: h,
            } = r,
            b = s - f;
          ft(b > 0, "Message header is invalid");
          let B = t.staticAccountKeys.length - s - h;
          ft(B >= 0, "Message header is invalid");
          let S = t.getAccountKeys(e),
            U = S.get(0);
          if (U === void 0)
            throw new Error(
              "Failed to decompile message because no account keys were found"
            );
          let _ = [];
          for (let E of i) {
            let T = [];
            for (let L of E.accountKeyIndexes) {
              let N = S.get(L);
              if (N === void 0)
                throw new Error(
                  `Failed to find key for account key index ${L}`
                );
              let W = L < s,
                q;
              W
                ? (q = L < b)
                : L < S.staticAccountKeys.length
                ? (q = L - s < B)
                : (q =
                    L - S.staticAccountKeys.length <
                    S.accountKeysFromLookups.writable.length),
                T.push({
                  pubkey: N,
                  isSigner: L < r.numRequiredSignatures,
                  isWritable: q,
                });
            }
            let C = S.get(E.programIdIndex);
            if (C === void 0)
              throw new Error(
                `Failed to find program id for program id index ${E.programIdIndex}`
              );
            _.push(new mt({ programId: C, data: nt(E.data), keys: T }));
          }
          return new n({ payerKey: U, instructions: _, recentBlockhash: o });
        }
        compileToLegacyMessage() {
          return Ge.compile({
            payerKey: this.payerKey,
            recentBlockhash: this.recentBlockhash,
            instructions: this.instructions,
          });
        }
        compileToV0Message(t) {
          return Vr.compile({
            payerKey: this.payerKey,
            recentBlockhash: this.recentBlockhash,
            instructions: this.instructions,
            addressLookupTableAccounts: t,
          });
        }
      }),
      (ls = class n {
        get version() {
          return this.message.version;
        }
        constructor(t, e) {
          if (
            ((this.signatures = void 0), (this.message = void 0), e !== void 0)
          )
            ft(
              e.length === t.header.numRequiredSignatures,
              "Expected signatures length to be equal to the number of required signatures"
            ),
              (this.signatures = e);
          else {
            let r = [];
            for (let i = 0; i < t.header.numRequiredSignatures; i++)
              r.push(new Uint8Array(wn));
            this.signatures = r;
          }
          this.message = t;
        }
        serialize() {
          let t = this.message.serialize(),
            e = Array();
          Le(e, this.signatures.length);
          let r = g.struct([
              g.blob(e.length, "encodedSignaturesLength"),
              g.seq(nl(), this.signatures.length, "signatures"),
              g.blob(t.length, "serializedMessage"),
            ]),
            i = new Uint8Array(2048),
            o = r.encode(
              {
                encodedSignaturesLength: new Uint8Array(e),
                signatures: this.signatures,
                serializedMessage: t,
              },
              i
            );
          return i.slice(0, o);
        }
        static deserialize(t) {
          let e = [...t],
            r = [],
            i = Ee(e);
          for (let s = 0; s < i; s++) r.push(new Uint8Array(_e(e, 0, wn)));
          let o = Ls.deserialize(new Uint8Array(e));
          return new n(o, r);
        }
        sign(t) {
          let e = this.message.serialize(),
            r = this.message.staticAccountKeys.slice(
              0,
              this.message.header.numRequiredSignatures
            );
          for (let i of t) {
            let o = r.findIndex((s) => s.equals(i.publicKey));
            ft(
              o >= 0,
              `Cannot sign with non signer key ${i.publicKey.toBase58()}`
            ),
              (this.signatures[o] = Rs(e, i.secretKey));
          }
        }
        addSignature(t, e) {
          ft(e.byteLength === 64, "Signature must be 64 bytes long");
          let i = this.message.staticAccountKeys
            .slice(0, this.message.header.numRequiredSignatures)
            .findIndex((o) => o.equals(t));
          ft(
            i >= 0,
            `Can not add signature; \`${t.toBase58()}\` is not required to sign this transaction`
          ),
            (this.signatures[i] = e);
        }
      }),
      (cl = 160),
      (fl = 64),
      (hl = cl / fl),
      (fc = 1e3 / hl),
      (We = new z("SysvarC1ock11111111111111111111111111111111")),
      (ll = new z("SysvarEpochSchedu1e111111111111111111111111")),
      (dl = new z("Sysvar1nstructions1111111111111111111111111")),
      (wi = new z("SysvarRecentB1ockHashes11111111111111111111")),
      (Hr = new z("SysvarRent111111111111111111111111111111111")),
      (pl = new z("SysvarRewards111111111111111111111111111111")),
      (yl = new z("SysvarS1otHashes111111111111111111111111111")),
      (gl = new z("SysvarS1otHistory11111111111111111111111111")),
      (bi = new z("SysvarStakeHistory1111111111111111111111111")),
      (_r = class extends Error {
        constructor({
          action: t,
          signature: e,
          transactionMessage: r,
          logs: i,
        }) {
          let o = i
              ? `Logs: 
${JSON.stringify(i.slice(-10), null, 2)}. `
              : "",
            s =
              "\nCatch the `SendTransactionError` and call `getLogs()` on it for full details.",
            f;
          switch (t) {
            case "send":
              f =
                `Transaction ${e} resulted in an error. 
${r}. ` +
                o +
                s;
              break;
            case "simulate":
              f =
                `Simulation failed. 
Message: ${r}. 
` +
                o +
                s;
              break;
            default:
              f = `Unknown action '${((h) => h)(t)}'`;
          }
          super(f),
            (this.signature = void 0),
            (this.transactionMessage = void 0),
            (this.transactionLogs = void 0),
            (this.signature = e),
            (this.transactionMessage = r),
            (this.transactionLogs = i || void 0);
        }
        get transactionError() {
          return {
            message: this.transactionMessage,
            logs: Array.isArray(this.transactionLogs)
              ? this.transactionLogs
              : void 0,
          };
        }
        get logs() {
          let t = this.transactionLogs;
          if (!(t != null && typeof t == "object" && "then" in t)) return t;
        }
        getLogs(t) {
          return M(this, null, function* () {
            return (
              Array.isArray(this.transactionLogs) ||
                (this.transactionLogs = new Promise((e, r) => {
                  t.getTransaction(this.signature)
                    .then((i) => {
                      if (i && i.meta && i.meta.logMessages) {
                        let o = i.meta.logMessages;
                        (this.transactionLogs = o), e(o);
                      } else r(new Error("Log messages not found"));
                    })
                    .catch(r);
                })),
              yield this.transactionLogs
            );
          });
        }
      }),
      (ml = {
        JSON_RPC_SERVER_ERROR_BLOCK_CLEANED_UP: -32001,
        JSON_RPC_SERVER_ERROR_SEND_TRANSACTION_PREFLIGHT_FAILURE: -32002,
        JSON_RPC_SERVER_ERROR_TRANSACTION_SIGNATURE_VERIFICATION_FAILURE:
          -32003,
        JSON_RPC_SERVER_ERROR_BLOCK_NOT_AVAILABLE: -32004,
        JSON_RPC_SERVER_ERROR_NODE_UNHEALTHY: -32005,
        JSON_RPC_SERVER_ERROR_TRANSACTION_PRECOMPILE_VERIFICATION_FAILURE:
          -32006,
        JSON_RPC_SERVER_ERROR_SLOT_SKIPPED: -32007,
        JSON_RPC_SERVER_ERROR_NO_SNAPSHOT: -32008,
        JSON_RPC_SERVER_ERROR_LONG_TERM_STORAGE_SLOT_SKIPPED: -32009,
        JSON_RPC_SERVER_ERROR_KEY_EXCLUDED_FROM_SECONDARY_INDEX: -32010,
        JSON_RPC_SERVER_ERROR_TRANSACTION_HISTORY_NOT_AVAILABLE: -32011,
        JSON_RPC_SCAN_ERROR: -32012,
        JSON_RPC_SERVER_ERROR_TRANSACTION_SIGNATURE_LEN_MISMATCH: -32013,
        JSON_RPC_SERVER_ERROR_BLOCK_STATUS_NOT_AVAILABLE_YET: -32014,
        JSON_RPC_SERVER_ERROR_UNSUPPORTED_TRANSACTION_VERSION: -32015,
        JSON_RPC_SERVER_ERROR_MIN_CONTEXT_SLOT_NOT_REACHED: -32016,
      }),
      (H = class extends Error {
        constructor({ code: t, message: e, data: r }, i) {
          super(i != null ? `${i}: ${e}` : e),
            (this.code = void 0),
            (this.data = void 0),
            (this.code = t),
            (this.data = r),
            (this.name = "SolanaJSONRPCError");
        }
      });
    (hc = g.nu64("lamportsPerSignature")),
      (lc = g.struct([
        g.u32("version"),
        g.u32("state"),
        it("authorizedPubkey"),
        it("nonce"),
        g.struct([hc], "feeCalculator"),
      ])),
      (ps = lc.span),
      (xi = class n {
        constructor(t) {
          (this.authorizedPubkey = void 0),
            (this.nonce = void 0),
            (this.feeCalculator = void 0),
            (this.authorizedPubkey = t.authorizedPubkey),
            (this.nonce = t.nonce),
            (this.feeCalculator = t.feeCalculator);
        }
        static fromAccountData(t) {
          let e = lc.decode(nt(t), 0);
          return new n({
            authorizedPubkey: new z(e.authorizedPubkey),
            nonce: new z(e.nonce).toString(),
            feeCalculator: e.feeCalculator,
          });
        }
      }),
      (wl = (n) => {
        let t = n.decode.bind(n),
          e = n.encode.bind(n);
        return { decode: t, encode: e };
      }),
      (bl = (n) => (t) => {
        let e = (0, ic.blob)(n, t),
          { encode: r, decode: i } = wl(e),
          o = e;
        return (
          (o.decode = (s, f) => {
            let h = i(s, f);
            return (0, vn.toBigIntLE)(X.Buffer.from(h));
          }),
          (o.encode = (s, f, h) => {
            let b = (0, vn.toBufferLE)(s, n);
            return r(b, f, h);
          }),
          o
        );
      }),
      (Gr = bl(8)),
      (ys = class {
        constructor() {}
        static decodeInstructionType(t) {
          this.checkProgramId(t.programId);
          let r = g.u32("instruction").decode(t.data),
            i;
          for (let [o, s] of Object.entries(xt))
            if (s.index == r) {
              i = o;
              break;
            }
          if (!i)
            throw new Error(
              "Instruction type incorrect; not a SystemInstruction"
            );
          return i;
        }
        static decodeCreateAccount(t) {
          this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 2);
          let { lamports: e, space: r, programId: i } = yt(xt.Create, t.data);
          return {
            fromPubkey: t.keys[0].pubkey,
            newAccountPubkey: t.keys[1].pubkey,
            lamports: e,
            space: r,
            programId: new z(i),
          };
        }
        static decodeTransfer(t) {
          this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 2);
          let { lamports: e } = yt(xt.Transfer, t.data);
          return {
            fromPubkey: t.keys[0].pubkey,
            toPubkey: t.keys[1].pubkey,
            lamports: e,
          };
        }
        static decodeTransferWithSeed(t) {
          this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 3);
          let {
            lamports: e,
            seed: r,
            programId: i,
          } = yt(xt.TransferWithSeed, t.data);
          return {
            fromPubkey: t.keys[0].pubkey,
            basePubkey: t.keys[1].pubkey,
            toPubkey: t.keys[2].pubkey,
            lamports: e,
            seed: r,
            programId: new z(i),
          };
        }
        static decodeAllocate(t) {
          this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 1);
          let { space: e } = yt(xt.Allocate, t.data);
          return { accountPubkey: t.keys[0].pubkey, space: e };
        }
        static decodeAllocateWithSeed(t) {
          this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 1);
          let {
            base: e,
            seed: r,
            space: i,
            programId: o,
          } = yt(xt.AllocateWithSeed, t.data);
          return {
            accountPubkey: t.keys[0].pubkey,
            basePubkey: new z(e),
            seed: r,
            space: i,
            programId: new z(o),
          };
        }
        static decodeAssign(t) {
          this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 1);
          let { programId: e } = yt(xt.Assign, t.data);
          return { accountPubkey: t.keys[0].pubkey, programId: new z(e) };
        }
        static decodeAssignWithSeed(t) {
          this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 1);
          let {
            base: e,
            seed: r,
            programId: i,
          } = yt(xt.AssignWithSeed, t.data);
          return {
            accountPubkey: t.keys[0].pubkey,
            basePubkey: new z(e),
            seed: r,
            programId: new z(i),
          };
        }
        static decodeCreateWithSeed(t) {
          this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 2);
          let {
            base: e,
            seed: r,
            lamports: i,
            space: o,
            programId: s,
          } = yt(xt.CreateWithSeed, t.data);
          return {
            fromPubkey: t.keys[0].pubkey,
            newAccountPubkey: t.keys[1].pubkey,
            basePubkey: new z(e),
            seed: r,
            lamports: i,
            space: o,
            programId: new z(s),
          };
        }
        static decodeNonceInitialize(t) {
          this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 3);
          let { authorized: e } = yt(xt.InitializeNonceAccount, t.data);
          return { noncePubkey: t.keys[0].pubkey, authorizedPubkey: new z(e) };
        }
        static decodeNonceAdvance(t) {
          return (
            this.checkProgramId(t.programId),
            this.checkKeyLength(t.keys, 3),
            yt(xt.AdvanceNonceAccount, t.data),
            {
              noncePubkey: t.keys[0].pubkey,
              authorizedPubkey: t.keys[2].pubkey,
            }
          );
        }
        static decodeNonceWithdraw(t) {
          this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 5);
          let { lamports: e } = yt(xt.WithdrawNonceAccount, t.data);
          return {
            noncePubkey: t.keys[0].pubkey,
            toPubkey: t.keys[1].pubkey,
            authorizedPubkey: t.keys[4].pubkey,
            lamports: e,
          };
        }
        static decodeNonceAuthorize(t) {
          this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 2);
          let { authorized: e } = yt(xt.AuthorizeNonceAccount, t.data);
          return {
            noncePubkey: t.keys[0].pubkey,
            authorizedPubkey: t.keys[1].pubkey,
            newAuthorizedPubkey: new z(e),
          };
        }
        static checkProgramId(t) {
          if (!t.equals(ye.programId))
            throw new Error(
              "invalid instruction; programId is not SystemProgram"
            );
        }
        static checkKeyLength(t, e) {
          if (t.length < e)
            throw new Error(
              `invalid instruction; found ${t.length} keys, expected at least ${e}`
            );
        }
      }),
      (xt = Object.freeze({
        Create: {
          index: 0,
          layout: g.struct([
            g.u32("instruction"),
            g.ns64("lamports"),
            g.ns64("space"),
            it("programId"),
          ]),
        },
        Assign: {
          index: 1,
          layout: g.struct([g.u32("instruction"), it("programId")]),
        },
        Transfer: {
          index: 2,
          layout: g.struct([g.u32("instruction"), Gr("lamports")]),
        },
        CreateWithSeed: {
          index: 3,
          layout: g.struct([
            g.u32("instruction"),
            it("base"),
            vr("seed"),
            g.ns64("lamports"),
            g.ns64("space"),
            it("programId"),
          ]),
        },
        AdvanceNonceAccount: {
          index: 4,
          layout: g.struct([g.u32("instruction")]),
        },
        WithdrawNonceAccount: {
          index: 5,
          layout: g.struct([g.u32("instruction"), g.ns64("lamports")]),
        },
        InitializeNonceAccount: {
          index: 6,
          layout: g.struct([g.u32("instruction"), it("authorized")]),
        },
        AuthorizeNonceAccount: {
          index: 7,
          layout: g.struct([g.u32("instruction"), it("authorized")]),
        },
        Allocate: {
          index: 8,
          layout: g.struct([g.u32("instruction"), g.ns64("space")]),
        },
        AllocateWithSeed: {
          index: 9,
          layout: g.struct([
            g.u32("instruction"),
            it("base"),
            vr("seed"),
            g.ns64("space"),
            it("programId"),
          ]),
        },
        AssignWithSeed: {
          index: 10,
          layout: g.struct([
            g.u32("instruction"),
            it("base"),
            vr("seed"),
            it("programId"),
          ]),
        },
        TransferWithSeed: {
          index: 11,
          layout: g.struct([
            g.u32("instruction"),
            Gr("lamports"),
            vr("seed"),
            it("programId"),
          ]),
        },
        UpgradeNonceAccount: {
          index: 12,
          layout: g.struct([g.u32("instruction")]),
        },
      })),
      (ye = class n {
        constructor() {}
        static createAccount(t) {
          let e = xt.Create,
            r = at(e, {
              lamports: t.lamports,
              space: t.space,
              programId: nt(t.programId.toBuffer()),
            });
          return new mt({
            keys: [
              { pubkey: t.fromPubkey, isSigner: !0, isWritable: !0 },
              { pubkey: t.newAccountPubkey, isSigner: !0, isWritable: !0 },
            ],
            programId: this.programId,
            data: r,
          });
        }
        static transfer(t) {
          let e, r;
          if ("basePubkey" in t) {
            let i = xt.TransferWithSeed;
            (e = at(i, {
              lamports: BigInt(t.lamports),
              seed: t.seed,
              programId: nt(t.programId.toBuffer()),
            })),
              (r = [
                { pubkey: t.fromPubkey, isSigner: !1, isWritable: !0 },
                { pubkey: t.basePubkey, isSigner: !0, isWritable: !1 },
                { pubkey: t.toPubkey, isSigner: !1, isWritable: !0 },
              ]);
          } else {
            let i = xt.Transfer;
            (e = at(i, { lamports: BigInt(t.lamports) })),
              (r = [
                { pubkey: t.fromPubkey, isSigner: !0, isWritable: !0 },
                { pubkey: t.toPubkey, isSigner: !1, isWritable: !0 },
              ]);
          }
          return new mt({ keys: r, programId: this.programId, data: e });
        }
        static assign(t) {
          let e, r;
          if ("basePubkey" in t) {
            let i = xt.AssignWithSeed;
            (e = at(i, {
              base: nt(t.basePubkey.toBuffer()),
              seed: t.seed,
              programId: nt(t.programId.toBuffer()),
            })),
              (r = [
                { pubkey: t.accountPubkey, isSigner: !1, isWritable: !0 },
                { pubkey: t.basePubkey, isSigner: !0, isWritable: !1 },
              ]);
          } else {
            let i = xt.Assign;
            (e = at(i, { programId: nt(t.programId.toBuffer()) })),
              (r = [{ pubkey: t.accountPubkey, isSigner: !0, isWritable: !0 }]);
          }
          return new mt({ keys: r, programId: this.programId, data: e });
        }
        static createAccountWithSeed(t) {
          let e = xt.CreateWithSeed,
            r = at(e, {
              base: nt(t.basePubkey.toBuffer()),
              seed: t.seed,
              lamports: t.lamports,
              space: t.space,
              programId: nt(t.programId.toBuffer()),
            }),
            i = [
              { pubkey: t.fromPubkey, isSigner: !0, isWritable: !0 },
              { pubkey: t.newAccountPubkey, isSigner: !1, isWritable: !0 },
            ];
          return (
            t.basePubkey.equals(t.fromPubkey) ||
              i.push({ pubkey: t.basePubkey, isSigner: !0, isWritable: !1 }),
            new mt({ keys: i, programId: this.programId, data: r })
          );
        }
        static createNonceAccount(t) {
          let e = new gt();
          "basePubkey" in t && "seed" in t
            ? e.add(
                n.createAccountWithSeed({
                  fromPubkey: t.fromPubkey,
                  newAccountPubkey: t.noncePubkey,
                  basePubkey: t.basePubkey,
                  seed: t.seed,
                  lamports: t.lamports,
                  space: ps,
                  programId: this.programId,
                })
              )
            : e.add(
                n.createAccount({
                  fromPubkey: t.fromPubkey,
                  newAccountPubkey: t.noncePubkey,
                  lamports: t.lamports,
                  space: ps,
                  programId: this.programId,
                })
              );
          let r = {
            noncePubkey: t.noncePubkey,
            authorizedPubkey: t.authorizedPubkey,
          };
          return e.add(this.nonceInitialize(r)), e;
        }
        static nonceInitialize(t) {
          let e = xt.InitializeNonceAccount,
            r = at(e, { authorized: nt(t.authorizedPubkey.toBuffer()) }),
            i = {
              keys: [
                { pubkey: t.noncePubkey, isSigner: !1, isWritable: !0 },
                { pubkey: wi, isSigner: !1, isWritable: !1 },
                { pubkey: Hr, isSigner: !1, isWritable: !1 },
              ],
              programId: this.programId,
              data: r,
            };
          return new mt(i);
        }
        static nonceAdvance(t) {
          let e = xt.AdvanceNonceAccount,
            r = at(e),
            i = {
              keys: [
                { pubkey: t.noncePubkey, isSigner: !1, isWritable: !0 },
                { pubkey: wi, isSigner: !1, isWritable: !1 },
                { pubkey: t.authorizedPubkey, isSigner: !0, isWritable: !1 },
              ],
              programId: this.programId,
              data: r,
            };
          return new mt(i);
        }
        static nonceWithdraw(t) {
          let e = xt.WithdrawNonceAccount,
            r = at(e, { lamports: t.lamports });
          return new mt({
            keys: [
              { pubkey: t.noncePubkey, isSigner: !1, isWritable: !0 },
              { pubkey: t.toPubkey, isSigner: !1, isWritable: !0 },
              { pubkey: wi, isSigner: !1, isWritable: !1 },
              { pubkey: Hr, isSigner: !1, isWritable: !1 },
              { pubkey: t.authorizedPubkey, isSigner: !0, isWritable: !1 },
            ],
            programId: this.programId,
            data: r,
          });
        }
        static nonceAuthorize(t) {
          let e = xt.AuthorizeNonceAccount,
            r = at(e, { authorized: nt(t.newAuthorizedPubkey.toBuffer()) });
          return new mt({
            keys: [
              { pubkey: t.noncePubkey, isSigner: !1, isWritable: !0 },
              { pubkey: t.authorizedPubkey, isSigner: !0, isWritable: !1 },
            ],
            programId: this.programId,
            data: r,
          });
        }
        static allocate(t) {
          let e, r;
          if ("basePubkey" in t) {
            let i = xt.AllocateWithSeed;
            (e = at(i, {
              base: nt(t.basePubkey.toBuffer()),
              seed: t.seed,
              space: t.space,
              programId: nt(t.programId.toBuffer()),
            })),
              (r = [
                { pubkey: t.accountPubkey, isSigner: !1, isWritable: !0 },
                { pubkey: t.basePubkey, isSigner: !0, isWritable: !1 },
              ]);
          } else {
            let i = xt.Allocate;
            (e = at(i, { space: t.space })),
              (r = [{ pubkey: t.accountPubkey, isSigner: !0, isWritable: !0 }]);
          }
          return new mt({ keys: r, programId: this.programId, data: e });
        }
      });
    ye.programId = new z("11111111111111111111111111111111");
    (kl = pr - 300),
      (gs = (() => {
        class n {
          constructor() {}
          static getMinNumSignatures(e) {
            return 2 * (Math.ceil(e / n.chunkSize) + 1 + 1);
          }
          static load(e, r, i, o, s) {
            return M(this, null, function* () {
              {
                let U = yield e.getMinimumBalanceForRentExemption(s.length),
                  _ = yield e.getAccountInfo(i.publicKey, "confirmed"),
                  E = null;
                if (_ !== null) {
                  if (_.executable)
                    return (
                      console.error(
                        "Program load failed, account is already executable"
                      ),
                      !1
                    );
                  _.data.length !== s.length &&
                    ((E = E || new gt()),
                    E.add(
                      ye.allocate({
                        accountPubkey: i.publicKey,
                        space: s.length,
                      })
                    )),
                    _.owner.equals(o) ||
                      ((E = E || new gt()),
                      E.add(
                        ye.assign({ accountPubkey: i.publicKey, programId: o })
                      )),
                    _.lamports < U &&
                      ((E = E || new gt()),
                      E.add(
                        ye.transfer({
                          fromPubkey: r.publicKey,
                          toPubkey: i.publicKey,
                          lamports: U - _.lamports,
                        })
                      ));
                } else E = new gt().add(ye.createAccount({ fromPubkey: r.publicKey, newAccountPubkey: i.publicKey, lamports: U > 0 ? U : 1, space: s.length, programId: o }));
                E !== null &&
                  (yield ds(e, E, [r, i], { commitment: "confirmed" }));
              }
              let f = g.struct([
                  g.u32("instruction"),
                  g.u32("offset"),
                  g.u32("bytesLength"),
                  g.u32("bytesLengthPadding"),
                  g.seq(g.u8("byte"), g.offset(g.u32(), -8), "bytes"),
                ]),
                h = n.chunkSize,
                b = 0,
                B = s,
                S = [];
              for (; B.length > 0; ) {
                let U = B.slice(0, h),
                  _ = X.Buffer.alloc(h + 16);
                f.encode(
                  {
                    instruction: 0,
                    offset: b,
                    bytes: U,
                    bytesLength: 0,
                    bytesLengthPadding: 0,
                  },
                  _
                );
                let E = new gt().add({
                  keys: [{ pubkey: i.publicKey, isSigner: !0, isWritable: !0 }],
                  programId: o,
                  data: _,
                });
                S.push(ds(e, E, [r, i], { commitment: "confirmed" })),
                  e._rpcEndpoint.includes("solana.com") && (yield Ir(1e3 / 4)),
                  (b += h),
                  (B = B.slice(h));
              }
              yield Promise.all(S);
              {
                let U = g.struct([g.u32("instruction")]),
                  _ = X.Buffer.alloc(U.span);
                U.encode({ instruction: 1 }, _);
                let E = new gt().add({
                    keys: [
                      { pubkey: i.publicKey, isSigner: !0, isWritable: !0 },
                      { pubkey: Hr, isSigner: !1, isWritable: !1 },
                    ],
                    programId: o,
                    data: _,
                  }),
                  T = "processed",
                  C = yield e.sendTransaction(E, [r, i], {
                    preflightCommitment: T,
                  }),
                  { context: L, value: N } = yield e.confirmTransaction(
                    {
                      signature: C,
                      lastValidBlockHeight: E.lastValidBlockHeight,
                      blockhash: E.recentBlockhash,
                    },
                    T
                  );
                if (N.err)
                  throw new Error(
                    `Transaction ${C} failed (${JSON.stringify(N)})`
                  );
                for (;;) {
                  try {
                    if ((yield e.getSlot({ commitment: T })) > L.slot) break;
                  } catch {}
                  yield new Promise((W) => setTimeout(W, Math.round(fc / 2)));
                }
              }
              return !0;
            });
          }
        }
        return (n.chunkSize = kl), n;
      })()),
      (Bl = new z("BPFLoader2111111111111111111111111111111111")),
      (ms = class {
        static getMinNumSignatures(t) {
          return gs.getMinNumSignatures(t);
        }
        static load(t, e, r, i, o) {
          return gs.load(t, e, r, o, i);
        }
      });
    (Il = Sl()), ($u = xl(Il)), (yn = 32);
    (Si = class {
      constructor(t, e, r, i, o) {
        (this.slotsPerEpoch = void 0),
          (this.leaderScheduleSlotOffset = void 0),
          (this.warmup = void 0),
          (this.firstNormalEpoch = void 0),
          (this.firstNormalSlot = void 0),
          (this.slotsPerEpoch = t),
          (this.leaderScheduleSlotOffset = e),
          (this.warmup = r),
          (this.firstNormalEpoch = i),
          (this.firstNormalSlot = o);
      }
      getEpoch(t) {
        return this.getEpochAndSlotIndex(t)[0];
      }
      getEpochAndSlotIndex(t) {
        if (t < this.firstNormalSlot) {
          let e = ns(vl(t + yn + 1)) - ns(yn) - 1,
            r = this.getSlotsInEpoch(e),
            i = t - (r - yn);
          return [e, i];
        } else {
          let e = t - this.firstNormalSlot,
            r = Math.floor(e / this.slotsPerEpoch),
            i = this.firstNormalEpoch + r,
            o = e % this.slotsPerEpoch;
          return [i, o];
        }
      }
      getFirstSlotInEpoch(t) {
        return t <= this.firstNormalEpoch
          ? (Math.pow(2, t) - 1) * yn
          : (t - this.firstNormalEpoch) * this.slotsPerEpoch +
              this.firstNormalSlot;
      }
      getLastSlotInEpoch(t) {
        return this.getFirstSlotInEpoch(t) + this.getSlotsInEpoch(t) - 1;
      }
      getSlotsInEpoch(t) {
        return t < this.firstNormalEpoch
          ? Math.pow(2, t + ns(yn))
          : this.slotsPerEpoch;
      }
    }),
      (El = globalThis.fetch),
      (ws = class extends Ou {
        constructor(t, e, r) {
          let i = (o) => {
            let s = Nu(
              o,
              Q(
                {
                  autoconnect: !0,
                  max_reconnects: 5,
                  reconnect: !0,
                  reconnect_interval: 1e3,
                },
                e
              )
            );
            return (
              "socket" in s
                ? (this.underlyingSocket = s.socket)
                : (this.underlyingSocket = s),
              s
            );
          };
          super(i, t, e, r), (this.underlyingSocket = void 0);
        }
        call(...t) {
          let e = this.underlyingSocket?.readyState;
          return e === 1
            ? super.call(...t)
            : Promise.reject(
                new Error(
                  "Tried to call a JSON-RPC method `" +
                    t[0] +
                    "` but the socket was not `CONNECTING` or `OPEN` (`readyState` was " +
                    e +
                    ")"
                )
              );
        }
        notify(...t) {
          let e = this.underlyingSocket?.readyState;
          return e === 1
            ? super.notify(...t)
            : Promise.reject(
                new Error(
                  "Tried to send a JSON-RPC notification `" +
                    t[0] +
                    "` but the socket was not `CONNECTING` or `OPEN` (`readyState` was " +
                    e +
                    ")"
                )
              );
        }
      });
    (Vu = 56),
      (Bn = class {
        constructor(t) {
          (this.key = void 0),
            (this.state = void 0),
            (this.key = t.key),
            (this.state = t.state);
        }
        isActive() {
          let t = BigInt("0xffffffffffffffff");
          return this.state.deactivationSlot === t;
        }
        static deserialize(t) {
          let e = _l(Al, t),
            r = t.length - Vu;
          ft(r >= 0, "lookup table is invalid"),
            ft(r % 32 === 0, "lookup table is invalid");
          let i = r / 32,
            { addresses: o } = g
              .struct([g.seq(it(), i, "addresses")])
              .decode(t.slice(Vu));
          return {
            deactivationSlot: e.deactivationSlot,
            lastExtendedSlot: e.lastExtendedSlot,
            lastExtendedSlotStartIndex: e.lastExtendedStartIndex,
            authority:
              e.authority.length !== 0 ? new z(e.authority[0]) : void 0,
            addresses: o.map((s) => new z(s)),
          };
        }
      }),
      (Al = {
        index: 1,
        layout: g.struct([
          g.u32("typeIndex"),
          Gr("deactivationSlot"),
          g.nu64("lastExtendedSlot"),
          g.u8("lastExtendedStartIndex"),
          g.u8(),
          g.seq(it(), g.offset(g.u8(), -1), "authority"),
        ]),
      }),
      (Rl = /^[^:]+:\/\/([^:[]+|\[[^\]]+\])(:\d+)?(.*)/i);
    (vt = $r(fi(z), F(), (n) => new z(n))),
      (dc = hi([F(), It("base64")])),
      (Ms = $r(fi(X.Buffer), dc, (n) => X.Buffer.from(n[0], "base64"))),
      (pc = 30 * 1e3);
    Tl = yc(Sr());
    (Pl = P({
      foundation: I(),
      foundationTerm: I(),
      initial: I(),
      taper: I(),
      terminal: I(),
    })),
      (Cl = rt(
        D(
          K(
            P({
              epoch: I(),
              effectiveSlot: I(),
              amount: I(),
              postBalance: I(),
              commission: Z(K(I())),
            })
          )
        )
      )),
      (Ul = D(P({ slot: I(), prioritizationFee: I() }))),
      (Fl = P({ total: I(), validator: I(), foundation: I(), epoch: I() })),
      (Nl = P({
        epoch: I(),
        slotIndex: I(),
        slotsInEpoch: I(),
        absoluteSlot: I(),
        blockHeight: Z(I()),
        transactionCount: Z(I()),
      })),
      (Ol = P({
        slotsPerEpoch: I(),
        leaderScheduleSlotOffset: I(),
        warmup: Ue(),
        firstNormalEpoch: I(),
        firstNormalSlot: I(),
      })),
      (zl = Ho(F(), D(I()))),
      (Rr = K(me([P({}), F()]))),
      (Dl = P({ err: Rr })),
      (Kl = It("receivedSignature")),
      (Wl = P({ "solana-core": F(), "feature-set": Z(I()) })),
      (ql = P({ program: F(), programId: vt, parsed: Sr() })),
      ($l = P({ programId: vt, accounts: D(vt), data: F() })),
      (Gu = _t(
        P({
          err: K(me([P({}), F()])),
          logs: K(D(F())),
          accounts: Z(
            K(
              D(
                K(
                  P({
                    executable: Ue(),
                    owner: F(),
                    lamports: I(),
                    data: D(F()),
                    rentEpoch: Z(I()),
                  })
                )
              )
            )
          ),
          unitsConsumed: Z(I()),
          returnData: Z(
            K(P({ programId: F(), data: hi([F(), It("base64")]) }))
          ),
          innerInstructions: Z(
            K(D(P({ index: I(), instructions: D(me([ql, $l])) })))
          ),
        })
      )),
      (Vl = _t(
        P({
          byIdentity: Ho(F(), D(I())),
          range: P({ firstSlot: I(), lastSlot: I() }),
        })
      ));
    (Yl = rt(Pl)),
      (Zl = rt(Fl)),
      (Jl = rt(Ul)),
      (Xl = rt(Nl)),
      (Ql = rt(Ol)),
      (td = rt(zl)),
      (ed = rt(I())),
      (rd = _t(
        P({
          total: I(),
          circulating: I(),
          nonCirculating: I(),
          nonCirculatingAccounts: D(vt),
        })
      )),
      (bs = P({
        amount: F(),
        uiAmount: K(I()),
        decimals: I(),
        uiAmountString: Z(F()),
      })),
      (nd = _t(
        D(
          P({
            address: vt,
            amount: F(),
            uiAmount: K(I()),
            decimals: I(),
            uiAmountString: Z(F()),
          })
        )
      )),
      (id = _t(
        D(
          P({
            pubkey: vt,
            account: P({
              executable: Ue(),
              owner: vt,
              lamports: I(),
              data: Ms,
              rentEpoch: I(),
            }),
          })
        )
      )),
      (ks = P({ program: F(), parsed: Sr(), space: I() })),
      (od = _t(
        D(
          P({
            pubkey: vt,
            account: P({
              executable: Ue(),
              owner: vt,
              lamports: I(),
              data: ks,
              rentEpoch: I(),
            }),
          })
        )
      )),
      (sd = _t(D(P({ lamports: I(), address: vt })))),
      (xn = P({
        executable: Ue(),
        owner: vt,
        lamports: I(),
        data: Ms,
        rentEpoch: I(),
      })),
      (ad = P({ pubkey: vt, account: xn })),
      (ud = $r(me([fi(X.Buffer), ks]), me([dc, ks]), (n) =>
        Array.isArray(n) ? O(n, Ms) : n
      )),
      (Bs = P({
        executable: Ue(),
        owner: vt,
        lamports: I(),
        data: ud,
        rentEpoch: I(),
      })),
      (cd = P({ pubkey: vt, account: Bs })),
      (fd = P({
        state: me([
          It("active"),
          It("inactive"),
          It("activating"),
          It("deactivating"),
        ]),
        active: I(),
        inactive: I(),
      })),
      (hd = rt(
        D(
          P({
            signature: F(),
            slot: I(),
            err: Rr,
            memo: K(F()),
            blockTime: Z(K(I())),
          })
        )
      )),
      (ld = rt(
        D(
          P({
            signature: F(),
            slot: I(),
            err: Rr,
            memo: K(F()),
            blockTime: Z(K(I())),
          })
        )
      )),
      (dd = P({ subscription: I(), result: Mi(xn) })),
      (pd = P({ pubkey: vt, account: xn })),
      (yd = P({ subscription: I(), result: Mi(pd) })),
      (gd = P({ parent: I(), slot: I(), root: I() })),
      (md = P({ subscription: I(), result: gd })),
      (wd = me([
        P({
          type: me([
            It("firstShredReceived"),
            It("completed"),
            It("optimisticConfirmation"),
            It("root"),
          ]),
          slot: I(),
          timestamp: I(),
        }),
        P({ type: It("createdBank"), parent: I(), slot: I(), timestamp: I() }),
        P({
          type: It("frozen"),
          slot: I(),
          timestamp: I(),
          stats: P({
            numTransactionEntries: I(),
            numSuccessfulTransactions: I(),
            numFailedTransactions: I(),
            maxTransactionsPerEntry: I(),
          }),
        }),
        P({ type: It("dead"), slot: I(), timestamp: I(), err: F() }),
      ])),
      (bd = P({ subscription: I(), result: wd })),
      (kd = P({ subscription: I(), result: Mi(me([Dl, Kl])) })),
      (Bd = P({ subscription: I(), result: I() })),
      (xd = P({
        pubkey: F(),
        gossip: K(F()),
        tpu: K(F()),
        rpc: K(F()),
        version: K(F()),
      })),
      (ju = P({
        votePubkey: F(),
        nodePubkey: F(),
        activatedStake: I(),
        epochVoteAccount: Ue(),
        epochCredits: D(hi([I(), I(), I()])),
        commission: I(),
        lastVote: I(),
        rootSlot: K(I()),
      })),
      (Sd = rt(P({ current: D(ju), delinquent: D(ju) }))),
      (Id = me([It("processed"), It("confirmed"), It("finalized")])),
      (vd = P({
        slot: I(),
        confirmations: K(I()),
        err: Rr,
        confirmationStatus: Z(Id),
      })),
      (Ed = _t(D(K(vd)))),
      (_d = rt(I())),
      (gc = P({
        accountKey: vt,
        writableIndexes: D(I()),
        readonlyIndexes: D(I()),
      })),
      (Ts = P({
        signatures: D(F()),
        message: P({
          accountKeys: D(F()),
          header: P({
            numRequiredSignatures: I(),
            numReadonlySignedAccounts: I(),
            numReadonlyUnsignedAccounts: I(),
          }),
          instructions: D(
            P({ accounts: D(I()), data: F(), programIdIndex: I() })
          ),
          recentBlockhash: F(),
          addressTableLookups: Z(D(gc)),
        }),
      })),
      (mc = P({
        pubkey: vt,
        signer: Ue(),
        writable: Ue(),
        source: Z(me([It("transaction"), It("lookupTable")])),
      })),
      (wc = P({ accountKeys: D(mc), signatures: D(F()) })),
      (bc = P({ parsed: Sr(), program: F(), programId: vt })),
      (kc = P({ accounts: D(vt), data: F(), programId: vt })),
      (Ad = me([kc, bc])),
      (Rd = me([
        P({ parsed: Sr(), program: F(), programId: F() }),
        P({ accounts: D(F()), data: F(), programId: F() }),
      ])),
      (Bc = $r(Ad, Rd, (n) => ("accounts" in n ? O(n, kc) : O(n, bc)))),
      (xc = P({
        signatures: D(F()),
        message: P({
          accountKeys: D(mc),
          instructions: D(Bc),
          recentBlockhash: F(),
          addressTableLookups: Z(K(D(gc))),
        }),
      })),
      (Ii = P({
        accountIndex: I(),
        mint: F(),
        owner: Z(F()),
        programId: Z(F()),
        uiTokenAmount: bs,
      })),
      (Sc = P({ writable: D(vt), readonly: D(vt) })),
      (Ti = P({
        err: Rr,
        fee: I(),
        innerInstructions: Z(
          K(
            D(
              P({
                index: I(),
                instructions: D(
                  P({ accounts: D(I()), data: F(), programIdIndex: I() })
                ),
              })
            )
          )
        ),
        preBalances: D(I()),
        postBalances: D(I()),
        logMessages: Z(K(D(F()))),
        preTokenBalances: Z(K(D(Ii))),
        postTokenBalances: Z(K(D(Ii))),
        loadedAddresses: Z(Sc),
        computeUnitsConsumed: Z(I()),
      })),
      (Ps = P({
        err: Rr,
        fee: I(),
        innerInstructions: Z(K(D(P({ index: I(), instructions: D(Bc) })))),
        preBalances: D(I()),
        postBalances: D(I()),
        logMessages: Z(K(D(F()))),
        preTokenBalances: Z(K(D(Ii))),
        postTokenBalances: Z(K(D(Ii))),
        loadedAddresses: Z(Sc),
        computeUnitsConsumed: Z(I()),
      })),
      (Jr = me([It(0), It("legacy")])),
      (Lr = P({
        pubkey: F(),
        lamports: I(),
        postBalance: K(I()),
        rewardType: K(F()),
        commission: Z(K(I())),
      })),
      (Ld = rt(
        K(
          P({
            blockhash: F(),
            previousBlockhash: F(),
            parentSlot: I(),
            transactions: D(
              P({ transaction: Ts, meta: K(Ti), version: Z(Jr) })
            ),
            rewards: Z(D(Lr)),
            blockTime: K(I()),
            blockHeight: K(I()),
          })
        )
      )),
      (Md = rt(
        K(
          P({
            blockhash: F(),
            previousBlockhash: F(),
            parentSlot: I(),
            rewards: Z(D(Lr)),
            blockTime: K(I()),
            blockHeight: K(I()),
          })
        )
      )),
      (Td = rt(
        K(
          P({
            blockhash: F(),
            previousBlockhash: F(),
            parentSlot: I(),
            transactions: D(
              P({ transaction: wc, meta: K(Ti), version: Z(Jr) })
            ),
            rewards: Z(D(Lr)),
            blockTime: K(I()),
            blockHeight: K(I()),
          })
        )
      )),
      (Pd = rt(
        K(
          P({
            blockhash: F(),
            previousBlockhash: F(),
            parentSlot: I(),
            transactions: D(
              P({ transaction: xc, meta: K(Ps), version: Z(Jr) })
            ),
            rewards: Z(D(Lr)),
            blockTime: K(I()),
            blockHeight: K(I()),
          })
        )
      )),
      (Cd = rt(
        K(
          P({
            blockhash: F(),
            previousBlockhash: F(),
            parentSlot: I(),
            transactions: D(
              P({ transaction: wc, meta: K(Ps), version: Z(Jr) })
            ),
            rewards: Z(D(Lr)),
            blockTime: K(I()),
            blockHeight: K(I()),
          })
        )
      )),
      (Ud = rt(
        K(
          P({
            blockhash: F(),
            previousBlockhash: F(),
            parentSlot: I(),
            rewards: Z(D(Lr)),
            blockTime: K(I()),
            blockHeight: K(I()),
          })
        )
      )),
      (Fd = rt(
        K(
          P({
            blockhash: F(),
            previousBlockhash: F(),
            parentSlot: I(),
            transactions: D(P({ transaction: Ts, meta: K(Ti) })),
            rewards: Z(D(Lr)),
            blockTime: K(I()),
          })
        )
      )),
      (Yu = rt(
        K(
          P({
            blockhash: F(),
            previousBlockhash: F(),
            parentSlot: I(),
            signatures: D(F()),
            blockTime: K(I()),
          })
        )
      )),
      (os = rt(
        K(
          P({
            slot: I(),
            meta: K(Ti),
            blockTime: Z(K(I())),
            transaction: Ts,
            version: Z(Jr),
          })
        )
      )),
      (mi = rt(
        K(
          P({
            slot: I(),
            transaction: xc,
            meta: K(Ps),
            blockTime: Z(K(I())),
            version: Z(Jr),
          })
        )
      )),
      (Nd = _t(P({ blockhash: F(), lastValidBlockHeight: I() }))),
      (Od = _t(Ue())),
      (zd = P({
        slot: I(),
        numTransactions: I(),
        numSlots: I(),
        samplePeriodSecs: I(),
      })),
      (Dd = rt(D(zd))),
      (Kd = _t(K(P({ feeCalculator: P({ lamportsPerSignature: I() }) })))),
      (Wd = rt(F())),
      (qd = rt(F())),
      ($d = P({ err: Rr, logs: D(F()), signature: F() })),
      (Vd = P({ result: Mi($d), subscription: I() })),
      (Hd = { "solana-client": "js/1.0.0-maintenance" }),
      (xs = class {
        constructor(t, e) {
          (this._commitment = void 0),
            (this._confirmTransactionInitialTimeout = void 0),
            (this._rpcEndpoint = void 0),
            (this._rpcWsEndpoint = void 0),
            (this._rpcClient = void 0),
            (this._rpcRequest = void 0),
            (this._rpcBatchRequest = void 0),
            (this._rpcWebSocket = void 0),
            (this._rpcWebSocketConnected = !1),
            (this._rpcWebSocketHeartbeat = null),
            (this._rpcWebSocketIdleTimeout = null),
            (this._rpcWebSocketGeneration = 0),
            (this._disableBlockhashCaching = !1),
            (this._pollingBlockhash = !1),
            (this._blockhashInfo = {
              latestBlockhash: null,
              lastFetch: 0,
              transactionSignatures: [],
              simulatedSignatures: [],
            }),
            (this._nextClientSubscriptionId = 0),
            (this._subscriptionDisposeFunctionsByClientSubscriptionId = {}),
            (this._subscriptionHashByClientSubscriptionId = {}),
            (this._subscriptionStateChangeCallbacksByHash = {}),
            (this._subscriptionCallbacksByServerSubscriptionId = {}),
            (this._subscriptionsByHash = {}),
            (this._subscriptionsAutoDisposedByRpc = new Set()),
            (this.getBlockHeight = (() => {
              let b = {};
              return (B) =>
                M(this, null, function* () {
                  let { commitment: S, config: U } = Bt(B),
                    _ = this._buildArgs([], S, void 0, U),
                    E = $u(_);
                  return (
                    (b[E] =
                      b[E] ??
                      M(this, null, function* () {
                        try {
                          let T = yield this._rpcRequest("getBlockHeight", _),
                            C = O(T, rt(I()));
                          if ("error" in C)
                            throw new H(
                              C.error,
                              "failed to get block height information"
                            );
                          return C.result;
                        } finally {
                          delete b[E];
                        }
                      })),
                    yield b[E]
                  );
                });
            })());
          let r, i, o, s, f, h;
          e && typeof e == "string"
            ? (this._commitment = e)
            : e &&
              ((this._commitment = e.commitment),
              (this._confirmTransactionInitialTimeout =
                e.confirmTransactionInitialTimeout),
              (r = e.wsEndpoint),
              (i = e.httpHeaders),
              (o = e.fetch),
              (s = e.fetchMiddleware),
              (f = e.disableRetryOnRateLimit),
              (h = e.httpAgent)),
            (this._rpcEndpoint = Ml(t)),
            (this._rpcWsEndpoint = r || Ll(t)),
            (this._rpcClient = Hl(t, i, o, s, f, h)),
            (this._rpcRequest = Gl(this._rpcClient)),
            (this._rpcBatchRequest = jl(this._rpcClient)),
            (this._rpcWebSocket = new ws(this._rpcWsEndpoint, {
              autoconnect: !1,
              max_reconnects: 1 / 0,
            })),
            this._rpcWebSocket.on("open", this._wsOnOpen.bind(this)),
            this._rpcWebSocket.on("error", this._wsOnError.bind(this)),
            this._rpcWebSocket.on("close", this._wsOnClose.bind(this)),
            this._rpcWebSocket.on(
              "accountNotification",
              this._wsOnAccountNotification.bind(this)
            ),
            this._rpcWebSocket.on(
              "programNotification",
              this._wsOnProgramAccountNotification.bind(this)
            ),
            this._rpcWebSocket.on(
              "slotNotification",
              this._wsOnSlotNotification.bind(this)
            ),
            this._rpcWebSocket.on(
              "slotsUpdatesNotification",
              this._wsOnSlotUpdatesNotification.bind(this)
            ),
            this._rpcWebSocket.on(
              "signatureNotification",
              this._wsOnSignatureNotification.bind(this)
            ),
            this._rpcWebSocket.on(
              "rootNotification",
              this._wsOnRootNotification.bind(this)
            ),
            this._rpcWebSocket.on(
              "logsNotification",
              this._wsOnLogsNotification.bind(this)
            );
        }
        get commitment() {
          return this._commitment;
        }
        get rpcEndpoint() {
          return this._rpcEndpoint;
        }
        getBalanceAndContext(t, e) {
          return M(this, null, function* () {
            let { commitment: r, config: i } = Bt(e),
              o = this._buildArgs([t.toBase58()], r, void 0, i),
              s = yield this._rpcRequest("getBalance", o),
              f = O(s, _t(I()));
            if ("error" in f)
              throw new H(f.error, `failed to get balance for ${t.toBase58()}`);
            return f.result;
          });
        }
        getBalance(t, e) {
          return M(this, null, function* () {
            return yield this.getBalanceAndContext(t, e)
              .then((r) => r.value)
              .catch((r) => {
                throw new Error(
                  "failed to get balance of account " + t.toBase58() + ": " + r
                );
              });
          });
        }
        getBlockTime(t) {
          return M(this, null, function* () {
            let e = yield this._rpcRequest("getBlockTime", [t]),
              r = O(e, rt(K(I())));
            if ("error" in r)
              throw new H(r.error, `failed to get block time for slot ${t}`);
            return r.result;
          });
        }
        getMinimumLedgerSlot() {
          return M(this, null, function* () {
            let t = yield this._rpcRequest("minimumLedgerSlot", []),
              e = O(t, rt(I()));
            if ("error" in e)
              throw new H(e.error, "failed to get minimum ledger slot");
            return e.result;
          });
        }
        getFirstAvailableBlock() {
          return M(this, null, function* () {
            let t = yield this._rpcRequest("getFirstAvailableBlock", []),
              e = O(t, ed);
            if ("error" in e)
              throw new H(e.error, "failed to get first available block");
            return e.result;
          });
        }
        getSupply(t) {
          return M(this, null, function* () {
            let e = {};
            typeof t == "string"
              ? (e = { commitment: t })
              : t
              ? (e = st(Q({}, t), {
                  commitment: (t && t.commitment) || this.commitment,
                }))
              : (e = { commitment: this.commitment });
            let r = yield this._rpcRequest("getSupply", [e]),
              i = O(r, rd);
            if ("error" in i) throw new H(i.error, "failed to get supply");
            return i.result;
          });
        }
        getTokenSupply(t, e) {
          return M(this, null, function* () {
            let r = this._buildArgs([t.toBase58()], e),
              i = yield this._rpcRequest("getTokenSupply", r),
              o = O(i, _t(bs));
            if ("error" in o)
              throw new H(o.error, "failed to get token supply");
            return o.result;
          });
        }
        getTokenAccountBalance(t, e) {
          return M(this, null, function* () {
            let r = this._buildArgs([t.toBase58()], e),
              i = yield this._rpcRequest("getTokenAccountBalance", r),
              o = O(i, _t(bs));
            if ("error" in o)
              throw new H(o.error, "failed to get token account balance");
            return o.result;
          });
        }
        getTokenAccountsByOwner(t, e, r) {
          return M(this, null, function* () {
            let { commitment: i, config: o } = Bt(r),
              s = [t.toBase58()];
            "mint" in e
              ? s.push({ mint: e.mint.toBase58() })
              : s.push({ programId: e.programId.toBase58() });
            let f = this._buildArgs(s, i, "base64", o),
              h = yield this._rpcRequest("getTokenAccountsByOwner", f),
              b = O(h, id);
            if ("error" in b)
              throw new H(
                b.error,
                `failed to get token accounts owned by account ${t.toBase58()}`
              );
            return b.result;
          });
        }
        getParsedTokenAccountsByOwner(t, e, r) {
          return M(this, null, function* () {
            let i = [t.toBase58()];
            "mint" in e
              ? i.push({ mint: e.mint.toBase58() })
              : i.push({ programId: e.programId.toBase58() });
            let o = this._buildArgs(i, r, "jsonParsed"),
              s = yield this._rpcRequest("getTokenAccountsByOwner", o),
              f = O(s, od);
            if ("error" in f)
              throw new H(
                f.error,
                `failed to get token accounts owned by account ${t.toBase58()}`
              );
            return f.result;
          });
        }
        getLargestAccounts(t) {
          return M(this, null, function* () {
            let e = st(Q({}, t), {
                commitment: (t && t.commitment) || this.commitment,
              }),
              r = e.filter || e.commitment ? [e] : [],
              i = yield this._rpcRequest("getLargestAccounts", r),
              o = O(i, sd);
            if ("error" in o)
              throw new H(o.error, "failed to get largest accounts");
            return o.result;
          });
        }
        getTokenLargestAccounts(t, e) {
          return M(this, null, function* () {
            let r = this._buildArgs([t.toBase58()], e),
              i = yield this._rpcRequest("getTokenLargestAccounts", r),
              o = O(i, nd);
            if ("error" in o)
              throw new H(o.error, "failed to get token largest accounts");
            return o.result;
          });
        }
        getAccountInfoAndContext(t, e) {
          return M(this, null, function* () {
            let { commitment: r, config: i } = Bt(e),
              o = this._buildArgs([t.toBase58()], r, "base64", i),
              s = yield this._rpcRequest("getAccountInfo", o),
              f = O(s, _t(K(xn)));
            if ("error" in f)
              throw new H(
                f.error,
                `failed to get info about account ${t.toBase58()}`
              );
            return f.result;
          });
        }
        getParsedAccountInfo(t, e) {
          return M(this, null, function* () {
            let { commitment: r, config: i } = Bt(e),
              o = this._buildArgs([t.toBase58()], r, "jsonParsed", i),
              s = yield this._rpcRequest("getAccountInfo", o),
              f = O(s, _t(K(Bs)));
            if ("error" in f)
              throw new H(
                f.error,
                `failed to get info about account ${t.toBase58()}`
              );
            return f.result;
          });
        }
        getAccountInfo(t, e) {
          return M(this, null, function* () {
            try {
              return (yield this.getAccountInfoAndContext(t, e)).value;
            } catch (r) {
              throw new Error(
                "failed to get info about account " + t.toBase58() + ": " + r
              );
            }
          });
        }
        getMultipleParsedAccounts(t, e) {
          return M(this, null, function* () {
            let { commitment: r, config: i } = Bt(e),
              o = t.map((b) => b.toBase58()),
              s = this._buildArgs([o], r, "jsonParsed", i),
              f = yield this._rpcRequest("getMultipleAccounts", s),
              h = O(f, _t(D(K(Bs))));
            if ("error" in h)
              throw new H(h.error, `failed to get info for accounts ${o}`);
            return h.result;
          });
        }
        getMultipleAccountsInfoAndContext(t, e) {
          return M(this, null, function* () {
            let { commitment: r, config: i } = Bt(e),
              o = t.map((b) => b.toBase58()),
              s = this._buildArgs([o], r, "base64", i),
              f = yield this._rpcRequest("getMultipleAccounts", s),
              h = O(f, _t(D(K(xn))));
            if ("error" in h)
              throw new H(h.error, `failed to get info for accounts ${o}`);
            return h.result;
          });
        }
        getMultipleAccountsInfo(t, e) {
          return M(this, null, function* () {
            return (yield this.getMultipleAccountsInfoAndContext(t, e)).value;
          });
        }
        getStakeActivation(t, e, r) {
          return M(this, null, function* () {
            let { commitment: i, config: o } = Bt(e),
              s = this._buildArgs(
                [t.toBase58()],
                i,
                void 0,
                st(Q({}, o), { epoch: r ?? o?.epoch })
              ),
              f = yield this._rpcRequest("getStakeActivation", s),
              h = O(f, rt(fd));
            if ("error" in h)
              throw new H(
                h.error,
                `failed to get Stake Activation ${t.toBase58()}`
              );
            return h.result;
          });
        }
        getProgramAccounts(t, e) {
          return M(this, null, function* () {
            let { commitment: r, config: i } = Bt(e),
              S = i || {},
              { encoding: o } = S,
              s = je(S, ["encoding"]),
              f = this._buildArgs(
                [t.toBase58()],
                r,
                o || "base64",
                Q(Q({}, s), s.filters ? { filters: Hu(s.filters) } : null)
              ),
              h = yield this._rpcRequest("getProgramAccounts", f),
              b = D(ad),
              B = s.withContext === !0 ? O(h, _t(b)) : O(h, rt(b));
            if ("error" in B)
              throw new H(
                B.error,
                `failed to get accounts owned by program ${t.toBase58()}`
              );
            return B.result;
          });
        }
        getParsedProgramAccounts(t, e) {
          return M(this, null, function* () {
            let { commitment: r, config: i } = Bt(e),
              o = this._buildArgs([t.toBase58()], r, "jsonParsed", i),
              s = yield this._rpcRequest("getProgramAccounts", o),
              f = O(s, rt(D(cd)));
            if ("error" in f)
              throw new H(
                f.error,
                `failed to get accounts owned by program ${t.toBase58()}`
              );
            return f.result;
          });
        }
        confirmTransaction(t, e) {
          return M(this, null, function* () {
            let r;
            if (typeof t == "string") r = t;
            else {
              let o = t;
              if (o.abortSignal?.aborted)
                return Promise.reject(o.abortSignal.reason);
              r = o.signature;
            }
            let i;
            try {
              i = le.default.decode(r);
            } catch {
              throw new Error("signature must be base58 encoded: " + r);
            }
            return (
              ft(i.length === 64, "signature has invalid length"),
              typeof t == "string"
                ? yield this.confirmTransactionUsingLegacyTimeoutStrategy({
                    commitment: e || this.commitment,
                    signature: r,
                  })
                : "lastValidBlockHeight" in t
                ? yield this.confirmTransactionUsingBlockHeightExceedanceStrategy(
                    { commitment: e || this.commitment, strategy: t }
                  )
                : yield this.confirmTransactionUsingDurableNonceStrategy({
                    commitment: e || this.commitment,
                    strategy: t,
                  })
            );
          });
        }
        getCancellationPromise(t) {
          return new Promise((e, r) => {
            t != null &&
              (t.aborted
                ? r(t.reason)
                : t.addEventListener("abort", () => {
                    r(t.reason);
                  }));
          });
        }
        getTransactionConfirmationPromise({ commitment: t, signature: e }) {
          let r,
            i,
            o = !1,
            s = new Promise((h, b) => {
              try {
                r = this.onSignature(
                  e,
                  (S, U) => {
                    r = void 0;
                    let _ = { context: U, value: S };
                    h({ __type: rr.PROCESSED, response: _ });
                  },
                  t
                );
                let B = new Promise((S) => {
                  r == null
                    ? S()
                    : (i = this._onSubscriptionStateChange(r, (U) => {
                        U === "subscribed" && S();
                      }));
                });
                M(this, null, function* () {
                  if ((yield B, o)) return;
                  let S = yield this.getSignatureStatus(e);
                  if (o || S == null) return;
                  let { context: U, value: _ } = S;
                  if (_ != null)
                    if (_?.err) b(_.err);
                    else {
                      switch (t) {
                        case "confirmed":
                        case "single":
                        case "singleGossip": {
                          if (_.confirmationStatus === "processed") return;
                          break;
                        }
                        case "finalized":
                        case "max":
                        case "root": {
                          if (
                            _.confirmationStatus === "processed" ||
                            _.confirmationStatus === "confirmed"
                          )
                            return;
                          break;
                        }
                        case "processed":
                        case "recent":
                      }
                      (o = !0),
                        h({
                          __type: rr.PROCESSED,
                          response: { context: U, value: _ },
                        });
                    }
                });
              } catch (B) {
                b(B);
              }
            });
          return {
            abortConfirmation: () => {
              i && (i(), (i = void 0)),
                r != null && (this.removeSignatureListener(r), (r = void 0));
            },
            confirmationPromise: s,
          };
        }
        confirmTransactionUsingBlockHeightExceedanceStrategy(o) {
          return M(
            this,
            arguments,
            function* ({
              commitment: t,
              strategy: {
                abortSignal: e,
                lastValidBlockHeight: r,
                signature: i,
              },
            }) {
              let s = !1,
                f = new Promise((U) => {
                  let _ = () =>
                    M(this, null, function* () {
                      try {
                        return yield this.getBlockHeight(t);
                      } catch {
                        return -1;
                      }
                    });
                  M(this, null, function* () {
                    let E = yield _();
                    if (!s) {
                      for (; E <= r; )
                        if ((yield Ir(1e3), s || ((E = yield _()), s))) return;
                      U({ __type: rr.BLOCKHEIGHT_EXCEEDED });
                    }
                  });
                }),
                { abortConfirmation: h, confirmationPromise: b } =
                  this.getTransactionConfirmationPromise({
                    commitment: t,
                    signature: i,
                  }),
                B = this.getCancellationPromise(e),
                S;
              try {
                let U = yield Promise.race([B, b, f]);
                if (U.__type === rr.PROCESSED) S = U.response;
                else throw new bn(i);
              } finally {
                (s = !0), h();
              }
              return S;
            }
          );
        }
        confirmTransactionUsingDurableNonceStrategy(f) {
          return M(
            this,
            arguments,
            function* ({
              commitment: t,
              strategy: {
                abortSignal: e,
                minContextSlot: r,
                nonceAccountPubkey: i,
                nonceValue: o,
                signature: s,
              },
            }) {
              let h = !1,
                b = new Promise((E) => {
                  let T = o,
                    C = null,
                    L = () =>
                      M(this, null, function* () {
                        try {
                          let { context: N, value: W } =
                            yield this.getNonceAndContext(i, {
                              commitment: t,
                              minContextSlot: r,
                            });
                          return (C = N.slot), W?.nonce;
                        } catch {
                          return T;
                        }
                      });
                  M(this, null, function* () {
                    if (((T = yield L()), !h))
                      for (;;) {
                        if (o !== T) {
                          E({
                            __type: rr.NONCE_INVALID,
                            slotInWhichNonceDidAdvance: C,
                          });
                          return;
                        }
                        if ((yield Ir(2e3), h || ((T = yield L()), h))) return;
                      }
                  });
                }),
                { abortConfirmation: B, confirmationPromise: S } =
                  this.getTransactionConfirmationPromise({
                    commitment: t,
                    signature: s,
                  }),
                U = this.getCancellationPromise(e),
                _;
              try {
                let E = yield Promise.race([U, S, b]);
                if (E.__type === rr.PROCESSED) _ = E.response;
                else {
                  let T;
                  for (;;) {
                    let C = yield this.getSignatureStatus(s);
                    if (C == null) break;
                    if (C.context.slot < (E.slotInWhichNonceDidAdvance ?? r)) {
                      yield Ir(400);
                      continue;
                    }
                    T = C;
                    break;
                  }
                  if (T?.value) {
                    let C = t || "finalized",
                      { confirmationStatus: L } = T.value;
                    switch (C) {
                      case "processed":
                      case "recent":
                        if (
                          L !== "processed" &&
                          L !== "confirmed" &&
                          L !== "finalized"
                        )
                          throw new dr(s);
                        break;
                      case "confirmed":
                      case "single":
                      case "singleGossip":
                        if (L !== "confirmed" && L !== "finalized")
                          throw new dr(s);
                        break;
                      case "finalized":
                      case "max":
                      case "root":
                        if (L !== "finalized") throw new dr(s);
                        break;
                      default:
                    }
                    _ = { context: T.context, value: { err: T.value.err } };
                  } else throw new dr(s);
                }
              } finally {
                (h = !0), B();
              }
              return _;
            }
          );
        }
        confirmTransactionUsingLegacyTimeoutStrategy(r) {
          return M(
            this,
            arguments,
            function* ({ commitment: t, signature: e }) {
              let i,
                o = new Promise((b) => {
                  let B = this._confirmTransactionInitialTimeout || 6e4;
                  switch (t) {
                    case "processed":
                    case "recent":
                    case "single":
                    case "confirmed":
                    case "singleGossip": {
                      B = this._confirmTransactionInitialTimeout || 3e4;
                      break;
                    }
                  }
                  i = setTimeout(
                    () => b({ __type: rr.TIMED_OUT, timeoutMs: B }),
                    B
                  );
                }),
                { abortConfirmation: s, confirmationPromise: f } =
                  this.getTransactionConfirmationPromise({
                    commitment: t,
                    signature: e,
                  }),
                h;
              try {
                let b = yield Promise.race([f, o]);
                if (b.__type === rr.PROCESSED) h = b.response;
                else throw new kn(e, b.timeoutMs / 1e3);
              } finally {
                clearTimeout(i), s();
              }
              return h;
            }
          );
        }
        getClusterNodes() {
          return M(this, null, function* () {
            let t = yield this._rpcRequest("getClusterNodes", []),
              e = O(t, rt(D(xd)));
            if ("error" in e)
              throw new H(e.error, "failed to get cluster nodes");
            return e.result;
          });
        }
        getVoteAccounts(t) {
          return M(this, null, function* () {
            let e = this._buildArgs([], t),
              r = yield this._rpcRequest("getVoteAccounts", e),
              i = O(r, Sd);
            if ("error" in i)
              throw new H(i.error, "failed to get vote accounts");
            return i.result;
          });
        }
        getSlot(t) {
          return M(this, null, function* () {
            let { commitment: e, config: r } = Bt(t),
              i = this._buildArgs([], e, void 0, r),
              o = yield this._rpcRequest("getSlot", i),
              s = O(o, rt(I()));
            if ("error" in s) throw new H(s.error, "failed to get slot");
            return s.result;
          });
        }
        getSlotLeader(t) {
          return M(this, null, function* () {
            let { commitment: e, config: r } = Bt(t),
              i = this._buildArgs([], e, void 0, r),
              o = yield this._rpcRequest("getSlotLeader", i),
              s = O(o, rt(F()));
            if ("error" in s) throw new H(s.error, "failed to get slot leader");
            return s.result;
          });
        }
        getSlotLeaders(t, e) {
          return M(this, null, function* () {
            let r = [t, e],
              i = yield this._rpcRequest("getSlotLeaders", r),
              o = O(i, rt(D(vt)));
            if ("error" in o)
              throw new H(o.error, "failed to get slot leaders");
            return o.result;
          });
        }
        getSignatureStatus(t, e) {
          return M(this, null, function* () {
            let { context: r, value: i } = yield this.getSignatureStatuses(
              [t],
              e
            );
            ft(i.length === 1);
            let o = i[0];
            return { context: r, value: o };
          });
        }
        getSignatureStatuses(t, e) {
          return M(this, null, function* () {
            let r = [t];
            e && r.push(e);
            let i = yield this._rpcRequest("getSignatureStatuses", r),
              o = O(i, Ed);
            if ("error" in o)
              throw new H(o.error, "failed to get signature status");
            return o.result;
          });
        }
        getTransactionCount(t) {
          return M(this, null, function* () {
            let { commitment: e, config: r } = Bt(t),
              i = this._buildArgs([], e, void 0, r),
              o = yield this._rpcRequest("getTransactionCount", i),
              s = O(o, rt(I()));
            if ("error" in s)
              throw new H(s.error, "failed to get transaction count");
            return s.result;
          });
        }
        getTotalSupply(t) {
          return M(this, null, function* () {
            return (yield this.getSupply({
              commitment: t,
              excludeNonCirculatingAccountsList: !0,
            })).value.total;
          });
        }
        getInflationGovernor(t) {
          return M(this, null, function* () {
            let e = this._buildArgs([], t),
              r = yield this._rpcRequest("getInflationGovernor", e),
              i = O(r, Yl);
            if ("error" in i) throw new H(i.error, "failed to get inflation");
            return i.result;
          });
        }
        getInflationReward(t, e, r) {
          return M(this, null, function* () {
            let { commitment: i, config: o } = Bt(r),
              s = this._buildArgs(
                [t.map((b) => b.toBase58())],
                i,
                void 0,
                st(Q({}, o), { epoch: e ?? o?.epoch })
              ),
              f = yield this._rpcRequest("getInflationReward", s),
              h = O(f, Cl);
            if ("error" in h)
              throw new H(h.error, "failed to get inflation reward");
            return h.result;
          });
        }
        getInflationRate() {
          return M(this, null, function* () {
            let t = yield this._rpcRequest("getInflationRate", []),
              e = O(t, Zl);
            if ("error" in e)
              throw new H(e.error, "failed to get inflation rate");
            return e.result;
          });
        }
        getEpochInfo(t) {
          return M(this, null, function* () {
            let { commitment: e, config: r } = Bt(t),
              i = this._buildArgs([], e, void 0, r),
              o = yield this._rpcRequest("getEpochInfo", i),
              s = O(o, Xl);
            if ("error" in s) throw new H(s.error, "failed to get epoch info");
            return s.result;
          });
        }
        getEpochSchedule() {
          return M(this, null, function* () {
            let t = yield this._rpcRequest("getEpochSchedule", []),
              e = O(t, Ql);
            if ("error" in e)
              throw new H(e.error, "failed to get epoch schedule");
            let r = e.result;
            return new Si(
              r.slotsPerEpoch,
              r.leaderScheduleSlotOffset,
              r.warmup,
              r.firstNormalEpoch,
              r.firstNormalSlot
            );
          });
        }
        getLeaderSchedule() {
          return M(this, null, function* () {
            let t = yield this._rpcRequest("getLeaderSchedule", []),
              e = O(t, td);
            if ("error" in e)
              throw new H(e.error, "failed to get leader schedule");
            return e.result;
          });
        }
        getMinimumBalanceForRentExemption(t, e) {
          return M(this, null, function* () {
            let r = this._buildArgs([t], e),
              i = yield this._rpcRequest(
                "getMinimumBalanceForRentExemption",
                r
              ),
              o = O(i, _d);
            return "error" in o
              ? (console.warn(
                  "Unable to fetch minimum balance for rent exemption"
                ),
                0)
              : o.result;
          });
        }
        getRecentBlockhashAndContext(t) {
          return M(this, null, function* () {
            let {
              context: e,
              value: { blockhash: r },
            } = yield this.getLatestBlockhashAndContext(t);
            return {
              context: e,
              value: {
                blockhash: r,
                feeCalculator: {
                  get lamportsPerSignature() {
                    throw new Error(
                      "The capability to fetch `lamportsPerSignature` using the `getRecentBlockhash` API is no longer offered by the network. Use the `getFeeForMessage` API to obtain the fee for a given message."
                    );
                  },
                  toJSON() {
                    return {};
                  },
                },
              },
            };
          });
        }
        getRecentPerformanceSamples(t) {
          return M(this, null, function* () {
            let e = yield this._rpcRequest(
                "getRecentPerformanceSamples",
                t ? [t] : []
              ),
              r = O(e, Dd);
            if ("error" in r)
              throw new H(r.error, "failed to get recent performance samples");
            return r.result;
          });
        }
        getFeeCalculatorForBlockhash(t, e) {
          return M(this, null, function* () {
            let r = this._buildArgs([t], e),
              i = yield this._rpcRequest("getFeeCalculatorForBlockhash", r),
              o = O(i, Kd);
            if ("error" in o)
              throw new H(o.error, "failed to get fee calculator");
            let { context: s, value: f } = o.result;
            return { context: s, value: f !== null ? f.feeCalculator : null };
          });
        }
        getFeeForMessage(t, e) {
          return M(this, null, function* () {
            let r = nt(t.serialize()).toString("base64"),
              i = this._buildArgs([r], e),
              o = yield this._rpcRequest("getFeeForMessage", i),
              s = O(o, _t(K(I())));
            if ("error" in s)
              throw new H(s.error, "failed to get fee for message");
            if (s.result === null) throw new Error("invalid blockhash");
            return s.result;
          });
        }
        getRecentPrioritizationFees(t) {
          return M(this, null, function* () {
            let e = t?.lockedWritableAccounts?.map((s) => s.toBase58()),
              r = e?.length ? [e] : [],
              i = yield this._rpcRequest("getRecentPrioritizationFees", r),
              o = O(i, Jl);
            if ("error" in o)
              throw new H(o.error, "failed to get recent prioritization fees");
            return o.result;
          });
        }
        getRecentBlockhash(t) {
          return M(this, null, function* () {
            try {
              return (yield this.getRecentBlockhashAndContext(t)).value;
            } catch (e) {
              throw new Error("failed to get recent blockhash: " + e);
            }
          });
        }
        getLatestBlockhash(t) {
          return M(this, null, function* () {
            try {
              return (yield this.getLatestBlockhashAndContext(t)).value;
            } catch (e) {
              throw new Error("failed to get recent blockhash: " + e);
            }
          });
        }
        getLatestBlockhashAndContext(t) {
          return M(this, null, function* () {
            let { commitment: e, config: r } = Bt(t),
              i = this._buildArgs([], e, void 0, r),
              o = yield this._rpcRequest("getLatestBlockhash", i),
              s = O(o, Nd);
            if ("error" in s)
              throw new H(s.error, "failed to get latest blockhash");
            return s.result;
          });
        }
        isBlockhashValid(t, e) {
          return M(this, null, function* () {
            let { commitment: r, config: i } = Bt(e),
              o = this._buildArgs([t], r, void 0, i),
              s = yield this._rpcRequest("isBlockhashValid", o),
              f = O(s, Od);
            if ("error" in f)
              throw new H(
                f.error,
                "failed to determine if the blockhash `" + t + "`is valid"
              );
            return f.result;
          });
        }
        getVersion() {
          return M(this, null, function* () {
            let t = yield this._rpcRequest("getVersion", []),
              e = O(t, rt(Wl));
            if ("error" in e) throw new H(e.error, "failed to get version");
            return e.result;
          });
        }
        getGenesisHash() {
          return M(this, null, function* () {
            let t = yield this._rpcRequest("getGenesisHash", []),
              e = O(t, rt(F()));
            if ("error" in e)
              throw new H(e.error, "failed to get genesis hash");
            return e.result;
          });
        }
        getBlock(t, e) {
          return M(this, null, function* () {
            let { commitment: r, config: i } = Bt(e),
              o = this._buildArgsAtLeastConfirmed([t], r, void 0, i),
              s = yield this._rpcRequest("getBlock", o);
            try {
              switch (i?.transactionDetails) {
                case "accounts": {
                  let f = O(s, Td);
                  if ("error" in f) throw f.error;
                  return f.result;
                }
                case "none": {
                  let f = O(s, Md);
                  if ("error" in f) throw f.error;
                  return f.result;
                }
                default: {
                  let f = O(s, Ld);
                  if ("error" in f) throw f.error;
                  let { result: h } = f;
                  return h
                    ? st(Q({}, h), {
                        transactions: h.transactions.map(
                          ({ transaction: b, meta: B, version: S }) => ({
                            meta: B,
                            transaction: st(Q({}, b), {
                              message: is(S, b.message),
                            }),
                            version: S,
                          })
                        ),
                      })
                    : null;
                }
              }
            } catch (f) {
              throw new H(f, "failed to get confirmed block");
            }
          });
        }
        getParsedBlock(t, e) {
          return M(this, null, function* () {
            let { commitment: r, config: i } = Bt(e),
              o = this._buildArgsAtLeastConfirmed([t], r, "jsonParsed", i),
              s = yield this._rpcRequest("getBlock", o);
            try {
              switch (i?.transactionDetails) {
                case "accounts": {
                  let f = O(s, Cd);
                  if ("error" in f) throw f.error;
                  return f.result;
                }
                case "none": {
                  let f = O(s, Ud);
                  if ("error" in f) throw f.error;
                  return f.result;
                }
                default: {
                  let f = O(s, Pd);
                  if ("error" in f) throw f.error;
                  return f.result;
                }
              }
            } catch (f) {
              throw new H(f, "failed to get block");
            }
          });
        }
        getBlockProduction(t) {
          return M(this, null, function* () {
            let e, r;
            if (typeof t == "string") r = t;
            else if (t) {
              let f = t,
                { commitment: h } = f,
                b = je(f, ["commitment"]);
              (r = h), (e = b);
            }
            let i = this._buildArgs([], r, "base64", e),
              o = yield this._rpcRequest("getBlockProduction", i),
              s = O(o, Vl);
            if ("error" in s)
              throw new H(
                s.error,
                "failed to get block production information"
              );
            return s.result;
          });
        }
        getTransaction(t, e) {
          return M(this, null, function* () {
            let { commitment: r, config: i } = Bt(e),
              o = this._buildArgsAtLeastConfirmed([t], r, void 0, i),
              s = yield this._rpcRequest("getTransaction", o),
              f = O(s, os);
            if ("error" in f) throw new H(f.error, "failed to get transaction");
            let h = f.result;
            return (
              h &&
              st(Q({}, h), {
                transaction: st(Q({}, h.transaction), {
                  message: is(h.version, h.transaction.message),
                }),
              })
            );
          });
        }
        getParsedTransaction(t, e) {
          return M(this, null, function* () {
            let { commitment: r, config: i } = Bt(e),
              o = this._buildArgsAtLeastConfirmed([t], r, "jsonParsed", i),
              s = yield this._rpcRequest("getTransaction", o),
              f = O(s, mi);
            if ("error" in f) throw new H(f.error, "failed to get transaction");
            return f.result;
          });
        }
        getParsedTransactions(t, e) {
          return M(this, null, function* () {
            let { commitment: r, config: i } = Bt(e),
              o = t.map((h) => ({
                methodName: "getTransaction",
                args: this._buildArgsAtLeastConfirmed([h], r, "jsonParsed", i),
              }));
            return (yield this._rpcBatchRequest(o)).map((h) => {
              let b = O(h, mi);
              if ("error" in b)
                throw new H(b.error, "failed to get transactions");
              return b.result;
            });
          });
        }
        getTransactions(t, e) {
          return M(this, null, function* () {
            let { commitment: r, config: i } = Bt(e),
              o = t.map((h) => ({
                methodName: "getTransaction",
                args: this._buildArgsAtLeastConfirmed([h], r, void 0, i),
              }));
            return (yield this._rpcBatchRequest(o)).map((h) => {
              let b = O(h, os);
              if ("error" in b)
                throw new H(b.error, "failed to get transactions");
              let B = b.result;
              return (
                B &&
                st(Q({}, B), {
                  transaction: st(Q({}, B.transaction), {
                    message: is(B.version, B.transaction.message),
                  }),
                })
              );
            });
          });
        }
        getConfirmedBlock(t, e) {
          return M(this, null, function* () {
            let r = this._buildArgsAtLeastConfirmed([t], e),
              i = yield this._rpcRequest("getBlock", r),
              o = O(i, Fd);
            if ("error" in o)
              throw new H(o.error, "failed to get confirmed block");
            let s = o.result;
            if (!s) throw new Error("Confirmed block " + t + " not found");
            let f = st(Q({}, s), {
              transactions: s.transactions.map(
                ({ transaction: h, meta: b }) => {
                  let B = new Ge(h.message);
                  return { meta: b, transaction: st(Q({}, h), { message: B }) };
                }
              ),
            });
            return st(Q({}, f), {
              transactions: f.transactions.map(
                ({ transaction: h, meta: b }) => ({
                  meta: b,
                  transaction: gt.populate(h.message, h.signatures),
                })
              ),
            });
          });
        }
        getBlocks(t, e, r) {
          return M(this, null, function* () {
            let i = this._buildArgsAtLeastConfirmed(
                e !== void 0 ? [t, e] : [t],
                r
              ),
              o = yield this._rpcRequest("getBlocks", i),
              s = O(o, rt(D(I())));
            if ("error" in s) throw new H(s.error, "failed to get blocks");
            return s.result;
          });
        }
        getBlockSignatures(t, e) {
          return M(this, null, function* () {
            let r = this._buildArgsAtLeastConfirmed([t], e, void 0, {
                transactionDetails: "signatures",
                rewards: !1,
              }),
              i = yield this._rpcRequest("getBlock", r),
              o = O(i, Yu);
            if ("error" in o) throw new H(o.error, "failed to get block");
            let s = o.result;
            if (!s) throw new Error("Block " + t + " not found");
            return s;
          });
        }
        getConfirmedBlockSignatures(t, e) {
          return M(this, null, function* () {
            let r = this._buildArgsAtLeastConfirmed([t], e, void 0, {
                transactionDetails: "signatures",
                rewards: !1,
              }),
              i = yield this._rpcRequest("getBlock", r),
              o = O(i, Yu);
            if ("error" in o)
              throw new H(o.error, "failed to get confirmed block");
            let s = o.result;
            if (!s) throw new Error("Confirmed block " + t + " not found");
            return s;
          });
        }
        getConfirmedTransaction(t, e) {
          return M(this, null, function* () {
            let r = this._buildArgsAtLeastConfirmed([t], e),
              i = yield this._rpcRequest("getTransaction", r),
              o = O(i, os);
            if ("error" in o) throw new H(o.error, "failed to get transaction");
            let s = o.result;
            if (!s) return s;
            let f = new Ge(s.transaction.message),
              h = s.transaction.signatures;
            return st(Q({}, s), { transaction: gt.populate(f, h) });
          });
        }
        getParsedConfirmedTransaction(t, e) {
          return M(this, null, function* () {
            let r = this._buildArgsAtLeastConfirmed([t], e, "jsonParsed"),
              i = yield this._rpcRequest("getTransaction", r),
              o = O(i, mi);
            if ("error" in o)
              throw new H(o.error, "failed to get confirmed transaction");
            return o.result;
          });
        }
        getParsedConfirmedTransactions(t, e) {
          return M(this, null, function* () {
            let r = t.map((s) => ({
              methodName: "getTransaction",
              args: this._buildArgsAtLeastConfirmed([s], e, "jsonParsed"),
            }));
            return (yield this._rpcBatchRequest(r)).map((s) => {
              let f = O(s, mi);
              if ("error" in f)
                throw new H(f.error, "failed to get confirmed transactions");
              return f.result;
            });
          });
        }
        getConfirmedSignaturesForAddress(t, e, r) {
          return M(this, null, function* () {
            let i = {},
              o = yield this.getFirstAvailableBlock();
            for (; !("until" in i) && (e--, !(e <= 0 || e < o)); )
              try {
                let h = yield this.getConfirmedBlockSignatures(e, "finalized");
                h.signatures.length > 0 &&
                  (i.until = h.signatures[h.signatures.length - 1].toString());
              } catch (h) {
                if (h instanceof Error && h.message.includes("skipped"))
                  continue;
                throw h;
              }
            let s = yield this.getSlot("finalized");
            for (; !("before" in i) && (r++, !(r > s)); )
              try {
                let h = yield this.getConfirmedBlockSignatures(r);
                h.signatures.length > 0 &&
                  (i.before = h.signatures[h.signatures.length - 1].toString());
              } catch (h) {
                if (h instanceof Error && h.message.includes("skipped"))
                  continue;
                throw h;
              }
            return (yield this.getConfirmedSignaturesForAddress2(t, i)).map(
              (h) => h.signature
            );
          });
        }
        getConfirmedSignaturesForAddress2(t, e, r) {
          return M(this, null, function* () {
            let i = this._buildArgsAtLeastConfirmed(
                [t.toBase58()],
                r,
                void 0,
                e
              ),
              o = yield this._rpcRequest(
                "getConfirmedSignaturesForAddress2",
                i
              ),
              s = O(o, hd);
            if ("error" in s)
              throw new H(
                s.error,
                "failed to get confirmed signatures for address"
              );
            return s.result;
          });
        }
        getSignaturesForAddress(t, e, r) {
          return M(this, null, function* () {
            let i = this._buildArgsAtLeastConfirmed(
                [t.toBase58()],
                r,
                void 0,
                e
              ),
              o = yield this._rpcRequest("getSignaturesForAddress", i),
              s = O(o, ld);
            if ("error" in s)
              throw new H(s.error, "failed to get signatures for address");
            return s.result;
          });
        }
        getAddressLookupTable(t, e) {
          return M(this, null, function* () {
            let { context: r, value: i } = yield this.getAccountInfoAndContext(
                t,
                e
              ),
              o = null;
            return (
              i !== null &&
                (o = new Bn({ key: t, state: Bn.deserialize(i.data) })),
              { context: r, value: o }
            );
          });
        }
        getNonceAndContext(t, e) {
          return M(this, null, function* () {
            let { context: r, value: i } = yield this.getAccountInfoAndContext(
                t,
                e
              ),
              o = null;
            return (
              i !== null && (o = xi.fromAccountData(i.data)),
              { context: r, value: o }
            );
          });
        }
        getNonce(t, e) {
          return M(this, null, function* () {
            return yield this.getNonceAndContext(t, e)
              .then((r) => r.value)
              .catch((r) => {
                throw new Error(
                  "failed to get nonce for account " + t.toBase58() + ": " + r
                );
              });
          });
        }
        requestAirdrop(t, e) {
          return M(this, null, function* () {
            let r = yield this._rpcRequest("requestAirdrop", [t.toBase58(), e]),
              i = O(r, Wd);
            if ("error" in i)
              throw new H(i.error, `airdrop to ${t.toBase58()} failed`);
            return i.result;
          });
        }
        _blockhashWithExpiryBlockHeight(t) {
          return M(this, null, function* () {
            if (!t) {
              for (; this._pollingBlockhash; ) yield Ir(100);
              let r = Date.now() - this._blockhashInfo.lastFetch >= pc;
              if (this._blockhashInfo.latestBlockhash !== null && !r)
                return this._blockhashInfo.latestBlockhash;
            }
            return yield this._pollNewBlockhash();
          });
        }
        _pollNewBlockhash() {
          return M(this, null, function* () {
            this._pollingBlockhash = !0;
            try {
              let t = Date.now(),
                e = this._blockhashInfo.latestBlockhash,
                r = e ? e.blockhash : null;
              for (let i = 0; i < 50; i++) {
                let o = yield this.getLatestBlockhash("finalized");
                if (r !== o.blockhash)
                  return (
                    (this._blockhashInfo = {
                      latestBlockhash: o,
                      lastFetch: Date.now(),
                      transactionSignatures: [],
                      simulatedSignatures: [],
                    }),
                    o
                  );
                yield Ir(fc / 2);
              }
              throw new Error(
                `Unable to obtain a new blockhash after ${Date.now() - t}ms`
              );
            } finally {
              this._pollingBlockhash = !1;
            }
          });
        }
        getStakeMinimumDelegation(t) {
          return M(this, null, function* () {
            let { commitment: e, config: r } = Bt(t),
              i = this._buildArgs([], e, "base64", r),
              o = yield this._rpcRequest("getStakeMinimumDelegation", i),
              s = O(o, _t(I()));
            if ("error" in s)
              throw new H(s.error, "failed to get stake minimum delegation");
            return s.result;
          });
        }
        simulateTransaction(t, e, r) {
          return M(this, null, function* () {
            if ("message" in t) {
              let T = t.serialize(),
                C = X.Buffer.from(T).toString("base64");
              if (Array.isArray(e) || r !== void 0)
                throw new Error("Invalid arguments");
              let L = e || {};
              (L.encoding = "base64"),
                "commitment" in L || (L.commitment = this.commitment),
                e &&
                  typeof e == "object" &&
                  "innerInstructions" in e &&
                  (L.innerInstructions = e.innerInstructions);
              let N = [C, L],
                W = yield this._rpcRequest("simulateTransaction", N),
                q = O(W, Gu);
              if ("error" in q)
                throw new Error(
                  "failed to simulate transaction: " + q.error.message
                );
              return q.result;
            }
            let i;
            if (t instanceof gt) {
              let E = t;
              (i = new gt()),
                (i.feePayer = E.feePayer),
                (i.instructions = t.instructions),
                (i.nonceInfo = E.nonceInfo),
                (i.signatures = E.signatures);
            } else (i = gt.populate(t)), (i._message = i._json = void 0);
            if (e !== void 0 && !Array.isArray(e))
              throw new Error("Invalid arguments");
            let o = e;
            if (i.nonceInfo && o) i.sign(...o);
            else {
              let E = this._disableBlockhashCaching;
              for (;;) {
                let T = yield this._blockhashWithExpiryBlockHeight(E);
                if (
                  ((i.lastValidBlockHeight = T.lastValidBlockHeight),
                  (i.recentBlockhash = T.blockhash),
                  !o)
                )
                  break;
                if ((i.sign(...o), !i.signature)) throw new Error("!signature");
                let C = i.signature.toString("base64");
                if (
                  !this._blockhashInfo.simulatedSignatures.includes(C) &&
                  !this._blockhashInfo.transactionSignatures.includes(C)
                ) {
                  this._blockhashInfo.simulatedSignatures.push(C);
                  break;
                } else E = !0;
              }
            }
            let s = i._compile(),
              f = s.serialize(),
              b = i._serialize(f).toString("base64"),
              B = { encoding: "base64", commitment: this.commitment };
            if (r) {
              let E = (Array.isArray(r) ? r : s.nonProgramIds()).map((T) =>
                T.toBase58()
              );
              B.accounts = { encoding: "base64", addresses: E };
            }
            o && (B.sigVerify = !0),
              e &&
                typeof e == "object" &&
                "innerInstructions" in e &&
                (B.innerInstructions = e.innerInstructions);
            let S = [b, B],
              U = yield this._rpcRequest("simulateTransaction", S),
              _ = O(U, Gu);
            if ("error" in _) {
              let E;
              if (
                "data" in _.error &&
                ((E = _.error.data.logs), E && Array.isArray(E))
              ) {
                let T = `
    `,
                  C = T + E.join(T);
                console.error(_.error.message, C);
              }
              throw new _r({
                action: "simulate",
                signature: "",
                transactionMessage: _.error.message,
                logs: E,
              });
            }
            return _.result;
          });
        }
        sendTransaction(t, e, r) {
          return M(this, null, function* () {
            if ("version" in t) {
              if (e && Array.isArray(e)) throw new Error("Invalid arguments");
              let s = t.serialize();
              return yield this.sendRawTransaction(s, e);
            }
            if (e === void 0 || !Array.isArray(e))
              throw new Error("Invalid arguments");
            let i = e;
            if (t.nonceInfo) t.sign(...i);
            else {
              let s = this._disableBlockhashCaching;
              for (;;) {
                let f = yield this._blockhashWithExpiryBlockHeight(s);
                if (
                  ((t.lastValidBlockHeight = f.lastValidBlockHeight),
                  (t.recentBlockhash = f.blockhash),
                  t.sign(...i),
                  !t.signature)
                )
                  throw new Error("!signature");
                let h = t.signature.toString("base64");
                if (this._blockhashInfo.transactionSignatures.includes(h))
                  s = !0;
                else {
                  this._blockhashInfo.transactionSignatures.push(h);
                  break;
                }
              }
            }
            let o = t.serialize();
            return yield this.sendRawTransaction(o, r);
          });
        }
        sendRawTransaction(t, e) {
          return M(this, null, function* () {
            let r = nt(t).toString("base64");
            return yield this.sendEncodedTransaction(r, e);
          });
        }
        sendEncodedTransaction(t, e) {
          return M(this, null, function* () {
            let r = { encoding: "base64" },
              i = e && e.skipPreflight,
              o =
                i === !0
                  ? "processed"
                  : (e && e.preflightCommitment) || this.commitment;
            e && e.maxRetries != null && (r.maxRetries = e.maxRetries),
              e &&
                e.minContextSlot != null &&
                (r.minContextSlot = e.minContextSlot),
              i && (r.skipPreflight = i),
              o && (r.preflightCommitment = o);
            let s = [t, r],
              f = yield this._rpcRequest("sendTransaction", s),
              h = O(f, qd);
            if ("error" in h) {
              let b;
              throw (
                ("data" in h.error && (b = h.error.data.logs),
                new _r({
                  action: i ? "send" : "simulate",
                  signature: "",
                  transactionMessage: h.error.message,
                  logs: b,
                }))
              );
            }
            return h.result;
          });
        }
        _wsOnOpen() {
          (this._rpcWebSocketConnected = !0),
            (this._rpcWebSocketHeartbeat = setInterval(() => {
              M(this, null, function* () {
                try {
                  yield this._rpcWebSocket.notify("ping");
                } catch {}
              });
            }, 5e3)),
            this._updateSubscriptions();
        }
        _wsOnError(t) {
          (this._rpcWebSocketConnected = !1),
            console.error("ws error:", t.message);
        }
        _wsOnClose(t) {
          if (
            ((this._rpcWebSocketConnected = !1),
            (this._rpcWebSocketGeneration =
              (this._rpcWebSocketGeneration + 1) % Number.MAX_SAFE_INTEGER),
            this._rpcWebSocketIdleTimeout &&
              (clearTimeout(this._rpcWebSocketIdleTimeout),
              (this._rpcWebSocketIdleTimeout = null)),
            this._rpcWebSocketHeartbeat &&
              (clearInterval(this._rpcWebSocketHeartbeat),
              (this._rpcWebSocketHeartbeat = null)),
            t === 1e3)
          ) {
            this._updateSubscriptions();
            return;
          }
          (this._subscriptionCallbacksByServerSubscriptionId = {}),
            Object.entries(this._subscriptionsByHash).forEach(([e, r]) => {
              this._setSubscription(e, st(Q({}, r), { state: "pending" }));
            });
        }
        _setSubscription(t, e) {
          let r = this._subscriptionsByHash[t]?.state;
          if (((this._subscriptionsByHash[t] = e), r !== e.state)) {
            let i = this._subscriptionStateChangeCallbacksByHash[t];
            i &&
              i.forEach((o) => {
                try {
                  o(e.state);
                } catch {}
              });
          }
        }
        _onSubscriptionStateChange(t, e) {
          let r = this._subscriptionHashByClientSubscriptionId[t];
          if (r == null) return () => {};
          let i = (this._subscriptionStateChangeCallbacksByHash[r] ||=
            new Set());
          return (
            i.add(e),
            () => {
              i.delete(e),
                i.size === 0 &&
                  delete this._subscriptionStateChangeCallbacksByHash[r];
            }
          );
        }
        _updateSubscriptions() {
          return M(this, null, function* () {
            if (Object.keys(this._subscriptionsByHash).length === 0) {
              this._rpcWebSocketConnected &&
                ((this._rpcWebSocketConnected = !1),
                (this._rpcWebSocketIdleTimeout = setTimeout(() => {
                  this._rpcWebSocketIdleTimeout = null;
                  try {
                    this._rpcWebSocket.close();
                  } catch (r) {
                    r instanceof Error &&
                      console.log(
                        `Error when closing socket connection: ${r.message}`
                      );
                  }
                }, 500)));
              return;
            }
            if (
              (this._rpcWebSocketIdleTimeout !== null &&
                (clearTimeout(this._rpcWebSocketIdleTimeout),
                (this._rpcWebSocketIdleTimeout = null),
                (this._rpcWebSocketConnected = !0)),
              !this._rpcWebSocketConnected)
            ) {
              this._rpcWebSocket.connect();
              return;
            }
            let t = this._rpcWebSocketGeneration,
              e = () => t === this._rpcWebSocketGeneration;
            yield Promise.all(
              Object.keys(this._subscriptionsByHash).map((r) =>
                M(this, null, function* () {
                  let i = this._subscriptionsByHash[r];
                  if (i !== void 0)
                    switch (i.state) {
                      case "pending":
                      case "unsubscribed":
                        if (i.callbacks.size === 0) {
                          delete this._subscriptionsByHash[r],
                            i.state === "unsubscribed" &&
                              delete this
                                ._subscriptionCallbacksByServerSubscriptionId[
                                i.serverSubscriptionId
                              ],
                            yield this._updateSubscriptions();
                          return;
                        }
                        yield M(this, null, function* () {
                          let { args: o, method: s } = i;
                          try {
                            this._setSubscription(
                              r,
                              st(Q({}, i), { state: "subscribing" })
                            );
                            let f = yield this._rpcWebSocket.call(s, o);
                            this._setSubscription(
                              r,
                              st(Q({}, i), {
                                serverSubscriptionId: f,
                                state: "subscribed",
                              })
                            ),
                              (this._subscriptionCallbacksByServerSubscriptionId[
                                f
                              ] = i.callbacks),
                              yield this._updateSubscriptions();
                          } catch (f) {
                            if (
                              (console.error(
                                `Received ${
                                  f instanceof Error ? "" : "JSON-RPC "
                                }error calling \`${s}\``,
                                { args: o, error: f }
                              ),
                              !e())
                            )
                              return;
                            this._setSubscription(
                              r,
                              st(Q({}, i), { state: "pending" })
                            ),
                              yield this._updateSubscriptions();
                          }
                        });
                        break;
                      case "subscribed":
                        i.callbacks.size === 0 &&
                          (yield M(this, null, function* () {
                            let {
                              serverSubscriptionId: o,
                              unsubscribeMethod: s,
                            } = i;
                            if (this._subscriptionsAutoDisposedByRpc.has(o))
                              this._subscriptionsAutoDisposedByRpc.delete(o);
                            else {
                              this._setSubscription(
                                r,
                                st(Q({}, i), { state: "unsubscribing" })
                              ),
                                this._setSubscription(
                                  r,
                                  st(Q({}, i), { state: "unsubscribing" })
                                );
                              try {
                                yield this._rpcWebSocket.call(s, [o]);
                              } catch (f) {
                                if (
                                  (f instanceof Error &&
                                    console.error(`${s} error:`, f.message),
                                  !e())
                                )
                                  return;
                                this._setSubscription(
                                  r,
                                  st(Q({}, i), { state: "subscribed" })
                                ),
                                  yield this._updateSubscriptions();
                                return;
                              }
                            }
                            this._setSubscription(
                              r,
                              st(Q({}, i), { state: "unsubscribed" })
                            ),
                              yield this._updateSubscriptions();
                          }));
                        break;
                    }
                })
              )
            );
          });
        }
        _handleServerNotification(t, e) {
          let r = this._subscriptionCallbacksByServerSubscriptionId[t];
          r !== void 0 &&
            r.forEach((i) => {
              try {
                i(...e);
              } catch (o) {
                console.error(o);
              }
            });
        }
        _wsOnAccountNotification(t) {
          let { result: e, subscription: r } = O(t, dd);
          this._handleServerNotification(r, [e.value, e.context]);
        }
        _makeSubscription(t, e) {
          let r = this._nextClientSubscriptionId++,
            i = $u([t.method, e]),
            o = this._subscriptionsByHash[i];
          return (
            o === void 0
              ? (this._subscriptionsByHash[i] = st(Q({}, t), {
                  args: e,
                  callbacks: new Set([t.callback]),
                  state: "pending",
                }))
              : o.callbacks.add(t.callback),
            (this._subscriptionHashByClientSubscriptionId[r] = i),
            (this._subscriptionDisposeFunctionsByClientSubscriptionId[r] = () =>
              M(this, null, function* () {
                delete this._subscriptionDisposeFunctionsByClientSubscriptionId[
                  r
                ],
                  delete this._subscriptionHashByClientSubscriptionId[r];
                let s = this._subscriptionsByHash[i];
                ft(
                  s !== void 0,
                  `Could not find a \`Subscription\` when tearing down client subscription #${r}`
                ),
                  s.callbacks.delete(t.callback),
                  yield this._updateSubscriptions();
              })),
            this._updateSubscriptions(),
            r
          );
        }
        onAccountChange(t, e, r) {
          let { commitment: i, config: o } = Bt(r),
            s = this._buildArgs(
              [t.toBase58()],
              i || this._commitment || "finalized",
              "base64",
              o
            );
          return this._makeSubscription(
            {
              callback: e,
              method: "accountSubscribe",
              unsubscribeMethod: "accountUnsubscribe",
            },
            s
          );
        }
        removeAccountChangeListener(t) {
          return M(this, null, function* () {
            yield this._unsubscribeClientSubscription(t, "account change");
          });
        }
        _wsOnProgramAccountNotification(t) {
          let { result: e, subscription: r } = O(t, yd);
          this._handleServerNotification(r, [
            { accountId: e.value.pubkey, accountInfo: e.value.account },
            e.context,
          ]);
        }
        onProgramAccountChange(t, e, r, i) {
          let { commitment: o, config: s } = Bt(r),
            f = this._buildArgs(
              [t.toBase58()],
              o || this._commitment || "finalized",
              "base64",
              s || (i ? { filters: Hu(i) } : void 0)
            );
          return this._makeSubscription(
            {
              callback: e,
              method: "programSubscribe",
              unsubscribeMethod: "programUnsubscribe",
            },
            f
          );
        }
        removeProgramAccountChangeListener(t) {
          return M(this, null, function* () {
            yield this._unsubscribeClientSubscription(
              t,
              "program account change"
            );
          });
        }
        onLogs(t, e, r) {
          let i = this._buildArgs(
            [typeof t == "object" ? { mentions: [t.toString()] } : t],
            r || this._commitment || "finalized"
          );
          return this._makeSubscription(
            {
              callback: e,
              method: "logsSubscribe",
              unsubscribeMethod: "logsUnsubscribe",
            },
            i
          );
        }
        removeOnLogsListener(t) {
          return M(this, null, function* () {
            yield this._unsubscribeClientSubscription(t, "logs");
          });
        }
        _wsOnLogsNotification(t) {
          let { result: e, subscription: r } = O(t, Vd);
          this._handleServerNotification(r, [e.value, e.context]);
        }
        _wsOnSlotNotification(t) {
          let { result: e, subscription: r } = O(t, md);
          this._handleServerNotification(r, [e]);
        }
        onSlotChange(t) {
          return this._makeSubscription(
            {
              callback: t,
              method: "slotSubscribe",
              unsubscribeMethod: "slotUnsubscribe",
            },
            []
          );
        }
        removeSlotChangeListener(t) {
          return M(this, null, function* () {
            yield this._unsubscribeClientSubscription(t, "slot change");
          });
        }
        _wsOnSlotUpdatesNotification(t) {
          let { result: e, subscription: r } = O(t, bd);
          this._handleServerNotification(r, [e]);
        }
        onSlotUpdate(t) {
          return this._makeSubscription(
            {
              callback: t,
              method: "slotsUpdatesSubscribe",
              unsubscribeMethod: "slotsUpdatesUnsubscribe",
            },
            []
          );
        }
        removeSlotUpdateListener(t) {
          return M(this, null, function* () {
            yield this._unsubscribeClientSubscription(t, "slot update");
          });
        }
        _unsubscribeClientSubscription(t, e) {
          return M(this, null, function* () {
            let r = this._subscriptionDisposeFunctionsByClientSubscriptionId[t];
            r
              ? yield r()
              : console.warn(
                  `Ignored unsubscribe request because an active subscription with id \`${t}\` for '${e}' events could not be found.`
                );
          });
        }
        _buildArgs(t, e, r, i) {
          let o = e || this._commitment;
          if (o || r || i) {
            let s = {};
            r && (s.encoding = r),
              o && (s.commitment = o),
              i && (s = Object.assign(s, i)),
              t.push(s);
          }
          return t;
        }
        _buildArgsAtLeastConfirmed(t, e, r, i) {
          let o = e || this._commitment;
          if (o && !["confirmed", "finalized"].includes(o))
            throw new Error(
              "Using Connection with default commitment: `" +
                this._commitment +
                "`, but method requires at least `confirmed`"
            );
          return this._buildArgs(t, e, r, i);
        }
        _wsOnSignatureNotification(t) {
          let { result: e, subscription: r } = O(t, kd);
          e.value !== "receivedSignature" &&
            this._subscriptionsAutoDisposedByRpc.add(r),
            this._handleServerNotification(
              r,
              e.value === "receivedSignature"
                ? [{ type: "received" }, e.context]
                : [{ type: "status", result: e.value }, e.context]
            );
        }
        onSignature(t, e, r) {
          let i = this._buildArgs([t], r || this._commitment || "finalized"),
            o = this._makeSubscription(
              {
                callback: (s, f) => {
                  if (s.type === "status") {
                    e(s.result, f);
                    try {
                      this.removeSignatureListener(o);
                    } catch {}
                  }
                },
                method: "signatureSubscribe",
                unsubscribeMethod: "signatureUnsubscribe",
              },
              i
            );
          return o;
        }
        onSignatureWithOptions(t, e, r) {
          let h = st(Q({}, r), {
              commitment:
                (r && r.commitment) || this._commitment || "finalized",
            }),
            { commitment: i } = h,
            o = je(h, ["commitment"]),
            s = this._buildArgs([t], i, void 0, o),
            f = this._makeSubscription(
              {
                callback: (b, B) => {
                  e(b, B);
                  try {
                    this.removeSignatureListener(f);
                  } catch {}
                },
                method: "signatureSubscribe",
                unsubscribeMethod: "signatureUnsubscribe",
              },
              s
            );
          return f;
        }
        removeSignatureListener(t) {
          return M(this, null, function* () {
            yield this._unsubscribeClientSubscription(t, "signature result");
          });
        }
        _wsOnRootNotification(t) {
          let { result: e, subscription: r } = O(t, Bd);
          this._handleServerNotification(r, [e]);
        }
        onRootChange(t) {
          return this._makeSubscription(
            {
              callback: t,
              method: "rootSubscribe",
              unsubscribeMethod: "rootUnsubscribe",
            },
            []
          );
        }
        removeRootChangeListener(t) {
          return M(this, null, function* () {
            yield this._unsubscribeClientSubscription(t, "root change");
          });
        }
      }),
      (vi = class n {
        constructor(t) {
          (this._keypair = void 0), (this._keypair = t ?? Du());
        }
        static generate() {
          return new n(Du());
        }
        static fromSecretKey(t, e) {
          if (t.byteLength !== 64) throw new Error("bad secret key size");
          let r = t.slice(32, 64);
          if (!e || !e.skipValidation) {
            let i = t.slice(0, 32),
              o = ki(i);
            for (let s = 0; s < 32; s++)
              if (r[s] !== o[s])
                throw new Error("provided secretKey is invalid");
          }
          return new n({ publicKey: r, secretKey: t });
        }
        static fromSeed(t) {
          let e = ki(t),
            r = new Uint8Array(64);
          return r.set(t), r.set(e, 32), new n({ publicKey: e, secretKey: r });
        }
        get publicKey() {
          return new z(this._keypair.publicKey);
        }
        get secretKey() {
          return new Uint8Array(this._keypair.secretKey);
        }
      }),
      (nr = Object.freeze({
        CreateLookupTable: {
          index: 0,
          layout: g.struct([
            g.u32("instruction"),
            Gr("recentSlot"),
            g.u8("bumpSeed"),
          ]),
        },
        FreezeLookupTable: {
          index: 1,
          layout: g.struct([g.u32("instruction")]),
        },
        ExtendLookupTable: {
          index: 2,
          layout: g.struct([
            g.u32("instruction"),
            Gr(),
            g.seq(it(), g.offset(g.u32(), -8), "addresses"),
          ]),
        },
        DeactivateLookupTable: {
          index: 3,
          layout: g.struct([g.u32("instruction")]),
        },
        CloseLookupTable: {
          index: 4,
          layout: g.struct([g.u32("instruction")]),
        },
      })),
      (Ss = class {
        constructor() {}
        static decodeInstructionType(t) {
          this.checkProgramId(t.programId);
          let r = g.u32("instruction").decode(t.data),
            i;
          for (let [o, s] of Object.entries(nr))
            if (s.index == r) {
              i = o;
              break;
            }
          if (!i)
            throw new Error(
              "Invalid Instruction. Should be a LookupTable Instruction"
            );
          return i;
        }
        static decodeCreateLookupTable(t) {
          this.checkProgramId(t.programId), this.checkKeysLength(t.keys, 4);
          let { recentSlot: e } = yt(nr.CreateLookupTable, t.data);
          return {
            authority: t.keys[1].pubkey,
            payer: t.keys[2].pubkey,
            recentSlot: Number(e),
          };
        }
        static decodeExtendLookupTable(t) {
          if ((this.checkProgramId(t.programId), t.keys.length < 2))
            throw new Error(
              `invalid instruction; found ${t.keys.length} keys, expected at least 2`
            );
          let { addresses: e } = yt(nr.ExtendLookupTable, t.data);
          return {
            lookupTable: t.keys[0].pubkey,
            authority: t.keys[1].pubkey,
            payer: t.keys.length > 2 ? t.keys[2].pubkey : void 0,
            addresses: e.map((r) => new z(r)),
          };
        }
        static decodeCloseLookupTable(t) {
          return (
            this.checkProgramId(t.programId),
            this.checkKeysLength(t.keys, 3),
            {
              lookupTable: t.keys[0].pubkey,
              authority: t.keys[1].pubkey,
              recipient: t.keys[2].pubkey,
            }
          );
        }
        static decodeFreezeLookupTable(t) {
          return (
            this.checkProgramId(t.programId),
            this.checkKeysLength(t.keys, 2),
            { lookupTable: t.keys[0].pubkey, authority: t.keys[1].pubkey }
          );
        }
        static decodeDeactivateLookupTable(t) {
          return (
            this.checkProgramId(t.programId),
            this.checkKeysLength(t.keys, 2),
            { lookupTable: t.keys[0].pubkey, authority: t.keys[1].pubkey }
          );
        }
        static checkProgramId(t) {
          if (!t.equals(Sn.programId))
            throw new Error(
              "invalid instruction; programId is not AddressLookupTable Program"
            );
        }
        static checkKeysLength(t, e) {
          if (t.length < e)
            throw new Error(
              `invalid instruction; found ${t.length} keys, expected at least ${e}`
            );
        }
      }),
      (Sn = class {
        constructor() {}
        static createLookupTable(t) {
          let [e, r] = z.findProgramAddressSync(
              [
                t.authority.toBuffer(),
                (0, vn.toBufferLE)(BigInt(t.recentSlot), 8),
              ],
              this.programId
            ),
            i = nr.CreateLookupTable,
            o = at(i, { recentSlot: BigInt(t.recentSlot), bumpSeed: r }),
            s = [
              { pubkey: e, isSigner: !1, isWritable: !0 },
              { pubkey: t.authority, isSigner: !0, isWritable: !1 },
              { pubkey: t.payer, isSigner: !0, isWritable: !0 },
              { pubkey: ye.programId, isSigner: !1, isWritable: !1 },
            ];
          return [new mt({ programId: this.programId, keys: s, data: o }), e];
        }
        static freezeLookupTable(t) {
          let e = nr.FreezeLookupTable,
            r = at(e),
            i = [
              { pubkey: t.lookupTable, isSigner: !1, isWritable: !0 },
              { pubkey: t.authority, isSigner: !0, isWritable: !1 },
            ];
          return new mt({ programId: this.programId, keys: i, data: r });
        }
        static extendLookupTable(t) {
          let e = nr.ExtendLookupTable,
            r = at(e, { addresses: t.addresses.map((o) => o.toBytes()) }),
            i = [
              { pubkey: t.lookupTable, isSigner: !1, isWritable: !0 },
              { pubkey: t.authority, isSigner: !0, isWritable: !1 },
            ];
          return (
            t.payer &&
              i.push(
                { pubkey: t.payer, isSigner: !0, isWritable: !0 },
                { pubkey: ye.programId, isSigner: !1, isWritable: !1 }
              ),
            new mt({ programId: this.programId, keys: i, data: r })
          );
        }
        static deactivateLookupTable(t) {
          let e = nr.DeactivateLookupTable,
            r = at(e),
            i = [
              { pubkey: t.lookupTable, isSigner: !1, isWritable: !0 },
              { pubkey: t.authority, isSigner: !0, isWritable: !1 },
            ];
          return new mt({ programId: this.programId, keys: i, data: r });
        }
        static closeLookupTable(t) {
          let e = nr.CloseLookupTable,
            r = at(e),
            i = [
              { pubkey: t.lookupTable, isSigner: !1, isWritable: !0 },
              { pubkey: t.authority, isSigner: !0, isWritable: !1 },
              { pubkey: t.recipient, isSigner: !1, isWritable: !0 },
            ];
          return new mt({ programId: this.programId, keys: i, data: r });
        }
      });
    Sn.programId = new z("AddressLookupTab1e1111111111111111111111111");
    (Is = class {
      constructor() {}
      static decodeInstructionType(t) {
        this.checkProgramId(t.programId);
        let r = g.u8("instruction").decode(t.data),
          i;
        for (let [o, s] of Object.entries($e))
          if (s.index == r) {
            i = o;
            break;
          }
        if (!i)
          throw new Error(
            "Instruction type incorrect; not a ComputeBudgetInstruction"
          );
        return i;
      }
      static decodeRequestUnits(t) {
        this.checkProgramId(t.programId);
        let { units: e, additionalFee: r } = yt($e.RequestUnits, t.data);
        return { units: e, additionalFee: r };
      }
      static decodeRequestHeapFrame(t) {
        this.checkProgramId(t.programId);
        let { bytes: e } = yt($e.RequestHeapFrame, t.data);
        return { bytes: e };
      }
      static decodeSetComputeUnitLimit(t) {
        this.checkProgramId(t.programId);
        let { units: e } = yt($e.SetComputeUnitLimit, t.data);
        return { units: e };
      }
      static decodeSetComputeUnitPrice(t) {
        this.checkProgramId(t.programId);
        let { microLamports: e } = yt($e.SetComputeUnitPrice, t.data);
        return { microLamports: e };
      }
      static checkProgramId(t) {
        if (!t.equals(In.programId))
          throw new Error(
            "invalid instruction; programId is not ComputeBudgetProgram"
          );
      }
    }),
      ($e = Object.freeze({
        RequestUnits: {
          index: 0,
          layout: g.struct([
            g.u8("instruction"),
            g.u32("units"),
            g.u32("additionalFee"),
          ]),
        },
        RequestHeapFrame: {
          index: 1,
          layout: g.struct([g.u8("instruction"), g.u32("bytes")]),
        },
        SetComputeUnitLimit: {
          index: 2,
          layout: g.struct([g.u8("instruction"), g.u32("units")]),
        },
        SetComputeUnitPrice: {
          index: 3,
          layout: g.struct([g.u8("instruction"), Gr("microLamports")]),
        },
      })),
      (In = class {
        constructor() {}
        static requestUnits(t) {
          let e = $e.RequestUnits,
            r = at(e, t);
          return new mt({ keys: [], programId: this.programId, data: r });
        }
        static requestHeapFrame(t) {
          let e = $e.RequestHeapFrame,
            r = at(e, t);
          return new mt({ keys: [], programId: this.programId, data: r });
        }
        static setComputeUnitLimit(t) {
          let e = $e.SetComputeUnitLimit,
            r = at(e, t);
          return new mt({ keys: [], programId: this.programId, data: r });
        }
        static setComputeUnitPrice(t) {
          let e = $e.SetComputeUnitPrice,
            r = at(e, { microLamports: BigInt(t.microLamports) });
          return new mt({ keys: [], programId: this.programId, data: r });
        }
      });
    In.programId = new z("ComputeBudget111111111111111111111111111111");
    (Zu = 64),
      (Ju = 32),
      (Xu = 64),
      (Qu = g.struct([
        g.u8("numSignatures"),
        g.u8("padding"),
        g.u16("signatureOffset"),
        g.u16("signatureInstructionIndex"),
        g.u16("publicKeyOffset"),
        g.u16("publicKeyInstructionIndex"),
        g.u16("messageDataOffset"),
        g.u16("messageDataSize"),
        g.u16("messageInstructionIndex"),
      ])),
      (Ei = class n {
        constructor() {}
        static createInstructionWithPublicKey(t) {
          let {
            publicKey: e,
            message: r,
            signature: i,
            instructionIndex: o,
          } = t;
          ft(
            e.length === Ju,
            `Public Key must be ${Ju} bytes but received ${e.length} bytes`
          ),
            ft(
              i.length === Xu,
              `Signature must be ${Xu} bytes but received ${i.length} bytes`
            );
          let s = Qu.span,
            f = s + e.length,
            h = f + i.length,
            b = 1,
            B = X.Buffer.alloc(h + r.length),
            S = o ?? 65535;
          return (
            Qu.encode(
              {
                numSignatures: b,
                padding: 0,
                signatureOffset: f,
                signatureInstructionIndex: S,
                publicKeyOffset: s,
                publicKeyInstructionIndex: S,
                messageDataOffset: h,
                messageDataSize: r.length,
                messageInstructionIndex: S,
              },
              B
            ),
            B.fill(e, s),
            B.fill(i, f),
            B.fill(r, h),
            new mt({ keys: [], programId: n.programId, data: B })
          );
        }
        static createInstructionWithPrivateKey(t) {
          let { privateKey: e, message: r, instructionIndex: i } = t;
          ft(
            e.length === Zu,
            `Private key must be ${Zu} bytes but received ${e.length} bytes`
          );
          try {
            let o = vi.fromSecretKey(e),
              s = o.publicKey.toBytes(),
              f = Rs(r, o.secretKey);
            return this.createInstructionWithPublicKey({
              publicKey: s,
              message: r,
              signature: f,
              instructionIndex: i,
            });
          } catch (o) {
            throw new Error(`Error creating instruction; ${o}`);
          }
        }
      });
    Ei.programId = new z("Ed25519SigVerify111111111111111111111111111");
    Gd = (n, t) => {
      let e = Rn.sign(n, t);
      return [e.toCompactRawBytes(), e.recovery];
    };
    Rn.utils.isValidPrivateKey;
    (jd = Rn.getPublicKey),
      (tc = 32),
      (ss = 20),
      (ec = 64),
      (Yd = 11),
      (as = g.struct([
        g.u8("numSignatures"),
        g.u16("signatureOffset"),
        g.u8("signatureInstructionIndex"),
        g.u16("ethAddressOffset"),
        g.u8("ethAddressInstructionIndex"),
        g.u16("messageDataOffset"),
        g.u16("messageDataSize"),
        g.u8("messageInstructionIndex"),
        g.blob(20, "ethAddress"),
        g.blob(64, "signature"),
        g.u8("recoveryId"),
      ])),
      (_i = class n {
        constructor() {}
        static publicKeyToEthAddress(t) {
          ft(
            t.length === ec,
            `Public key must be ${ec} bytes but received ${t.length} bytes`
          );
          try {
            return X.Buffer.from(eo(nt(t))).slice(-ss);
          } catch (e) {
            throw new Error(`Error constructing Ethereum address: ${e}`);
          }
        }
        static createInstructionWithPublicKey(t) {
          let {
            publicKey: e,
            message: r,
            signature: i,
            recoveryId: o,
            instructionIndex: s,
          } = t;
          return n.createInstructionWithEthAddress({
            ethAddress: n.publicKeyToEthAddress(e),
            message: r,
            signature: i,
            recoveryId: o,
            instructionIndex: s,
          });
        }
        static createInstructionWithEthAddress(t) {
          let {
              ethAddress: e,
              message: r,
              signature: i,
              recoveryId: o,
              instructionIndex: s = 0,
            } = t,
            f;
          typeof e == "string"
            ? e.startsWith("0x")
              ? (f = X.Buffer.from(e.substr(2), "hex"))
              : (f = X.Buffer.from(e, "hex"))
            : (f = e),
            ft(
              f.length === ss,
              `Address must be ${ss} bytes but received ${f.length} bytes`
            );
          let h = 1 + Yd,
            b = h,
            B = h + f.length,
            S = B + i.length + 1,
            U = 1,
            _ = X.Buffer.alloc(as.span + r.length);
          return (
            as.encode(
              {
                numSignatures: U,
                signatureOffset: B,
                signatureInstructionIndex: s,
                ethAddressOffset: b,
                ethAddressInstructionIndex: s,
                messageDataOffset: S,
                messageDataSize: r.length,
                messageInstructionIndex: s,
                signature: nt(i),
                ethAddress: nt(f),
                recoveryId: o,
              },
              _
            ),
            _.fill(nt(r), as.span),
            new mt({ keys: [], programId: n.programId, data: _ })
          );
        }
        static createInstructionWithPrivateKey(t) {
          let { privateKey: e, message: r, instructionIndex: i } = t;
          ft(
            e.length === tc,
            `Private key must be ${tc} bytes but received ${e.length} bytes`
          );
          try {
            let o = nt(e),
              s = jd(o, !1).slice(1),
              f = X.Buffer.from(eo(nt(r))),
              [h, b] = Gd(f, o);
            return this.createInstructionWithPublicKey({
              publicKey: s,
              message: r,
              signature: h,
              recoveryId: b,
              instructionIndex: i,
            });
          } catch (o) {
            throw new Error(`Error creating instruction; ${o}`);
          }
        }
      });
    _i.programId = new z("KeccakSecp256k11111111111111111111111111111");
    (vc = new z("StakeConfig11111111111111111111111111111111")),
      (Ai = class {
        constructor(t, e) {
          (this.staker = void 0),
            (this.withdrawer = void 0),
            (this.staker = t),
            (this.withdrawer = e);
        }
      }),
      (Ar = class {
        constructor(t, e, r) {
          (this.unixTimestamp = void 0),
            (this.epoch = void 0),
            (this.custodian = void 0),
            (this.unixTimestamp = t),
            (this.epoch = e),
            (this.custodian = r);
        }
      });
    Ic = Ar;
    Ar.default = new Ic(0, 0, z.default);
    (vs = class {
      constructor() {}
      static decodeInstructionType(t) {
        this.checkProgramId(t.programId);
        let r = g.u32("instruction").decode(t.data),
          i;
        for (let [o, s] of Object.entries(he))
          if (s.index == r) {
            i = o;
            break;
          }
        if (!i)
          throw new Error("Instruction type incorrect; not a StakeInstruction");
        return i;
      }
      static decodeInitialize(t) {
        this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 2);
        let { authorized: e, lockup: r } = yt(he.Initialize, t.data);
        return {
          stakePubkey: t.keys[0].pubkey,
          authorized: new Ai(new z(e.staker), new z(e.withdrawer)),
          lockup: new Ar(r.unixTimestamp, r.epoch, new z(r.custodian)),
        };
      }
      static decodeDelegate(t) {
        return (
          this.checkProgramId(t.programId),
          this.checkKeyLength(t.keys, 6),
          yt(he.Delegate, t.data),
          {
            stakePubkey: t.keys[0].pubkey,
            votePubkey: t.keys[1].pubkey,
            authorizedPubkey: t.keys[5].pubkey,
          }
        );
      }
      static decodeAuthorize(t) {
        this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 3);
        let { newAuthorized: e, stakeAuthorizationType: r } = yt(
            he.Authorize,
            t.data
          ),
          i = {
            stakePubkey: t.keys[0].pubkey,
            authorizedPubkey: t.keys[2].pubkey,
            newAuthorizedPubkey: new z(e),
            stakeAuthorizationType: { index: r },
          };
        return t.keys.length > 3 && (i.custodianPubkey = t.keys[3].pubkey), i;
      }
      static decodeAuthorizeWithSeed(t) {
        this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 2);
        let {
            newAuthorized: e,
            stakeAuthorizationType: r,
            authoritySeed: i,
            authorityOwner: o,
          } = yt(he.AuthorizeWithSeed, t.data),
          s = {
            stakePubkey: t.keys[0].pubkey,
            authorityBase: t.keys[1].pubkey,
            authoritySeed: i,
            authorityOwner: new z(o),
            newAuthorizedPubkey: new z(e),
            stakeAuthorizationType: { index: r },
          };
        return t.keys.length > 3 && (s.custodianPubkey = t.keys[3].pubkey), s;
      }
      static decodeSplit(t) {
        this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 3);
        let { lamports: e } = yt(he.Split, t.data);
        return {
          stakePubkey: t.keys[0].pubkey,
          splitStakePubkey: t.keys[1].pubkey,
          authorizedPubkey: t.keys[2].pubkey,
          lamports: e,
        };
      }
      static decodeMerge(t) {
        return (
          this.checkProgramId(t.programId),
          this.checkKeyLength(t.keys, 3),
          yt(he.Merge, t.data),
          {
            stakePubkey: t.keys[0].pubkey,
            sourceStakePubKey: t.keys[1].pubkey,
            authorizedPubkey: t.keys[4].pubkey,
          }
        );
      }
      static decodeWithdraw(t) {
        this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 5);
        let { lamports: e } = yt(he.Withdraw, t.data),
          r = {
            stakePubkey: t.keys[0].pubkey,
            toPubkey: t.keys[1].pubkey,
            authorizedPubkey: t.keys[4].pubkey,
            lamports: e,
          };
        return t.keys.length > 5 && (r.custodianPubkey = t.keys[5].pubkey), r;
      }
      static decodeDeactivate(t) {
        return (
          this.checkProgramId(t.programId),
          this.checkKeyLength(t.keys, 3),
          yt(he.Deactivate, t.data),
          { stakePubkey: t.keys[0].pubkey, authorizedPubkey: t.keys[2].pubkey }
        );
      }
      static checkProgramId(t) {
        if (!t.equals(jr.programId))
          throw new Error("invalid instruction; programId is not StakeProgram");
      }
      static checkKeyLength(t, e) {
        if (t.length < e)
          throw new Error(
            `invalid instruction; found ${t.length} keys, expected at least ${e}`
          );
      }
    }),
      (he = Object.freeze({
        Initialize: {
          index: 0,
          layout: g.struct([g.u32("instruction"), il(), ol()]),
        },
        Authorize: {
          index: 1,
          layout: g.struct([
            g.u32("instruction"),
            it("newAuthorized"),
            g.u32("stakeAuthorizationType"),
          ]),
        },
        Delegate: { index: 2, layout: g.struct([g.u32("instruction")]) },
        Split: {
          index: 3,
          layout: g.struct([g.u32("instruction"), g.ns64("lamports")]),
        },
        Withdraw: {
          index: 4,
          layout: g.struct([g.u32("instruction"), g.ns64("lamports")]),
        },
        Deactivate: { index: 5, layout: g.struct([g.u32("instruction")]) },
        Merge: { index: 7, layout: g.struct([g.u32("instruction")]) },
        AuthorizeWithSeed: {
          index: 8,
          layout: g.struct([
            g.u32("instruction"),
            it("newAuthorized"),
            g.u32("stakeAuthorizationType"),
            vr("authoritySeed"),
            it("authorityOwner"),
          ]),
        },
      })),
      (Zd = Object.freeze({ Staker: { index: 0 }, Withdrawer: { index: 1 } })),
      (jr = class {
        constructor() {}
        static initialize(t) {
          let { stakePubkey: e, authorized: r, lockup: i } = t,
            o = i || Ar.default,
            s = he.Initialize,
            f = at(s, {
              authorized: {
                staker: nt(r.staker.toBuffer()),
                withdrawer: nt(r.withdrawer.toBuffer()),
              },
              lockup: {
                unixTimestamp: o.unixTimestamp,
                epoch: o.epoch,
                custodian: nt(o.custodian.toBuffer()),
              },
            }),
            h = {
              keys: [
                { pubkey: e, isSigner: !1, isWritable: !0 },
                { pubkey: Hr, isSigner: !1, isWritable: !1 },
              ],
              programId: this.programId,
              data: f,
            };
          return new mt(h);
        }
        static createAccountWithSeed(t) {
          let e = new gt();
          e.add(
            ye.createAccountWithSeed({
              fromPubkey: t.fromPubkey,
              newAccountPubkey: t.stakePubkey,
              basePubkey: t.basePubkey,
              seed: t.seed,
              lamports: t.lamports,
              space: this.space,
              programId: this.programId,
            })
          );
          let { stakePubkey: r, authorized: i, lockup: o } = t;
          return e.add(
            this.initialize({ stakePubkey: r, authorized: i, lockup: o })
          );
        }
        static createAccount(t) {
          let e = new gt();
          e.add(
            ye.createAccount({
              fromPubkey: t.fromPubkey,
              newAccountPubkey: t.stakePubkey,
              lamports: t.lamports,
              space: this.space,
              programId: this.programId,
            })
          );
          let { stakePubkey: r, authorized: i, lockup: o } = t;
          return e.add(
            this.initialize({ stakePubkey: r, authorized: i, lockup: o })
          );
        }
        static delegate(t) {
          let { stakePubkey: e, authorizedPubkey: r, votePubkey: i } = t,
            o = he.Delegate,
            s = at(o);
          return new gt().add({
            keys: [
              { pubkey: e, isSigner: !1, isWritable: !0 },
              { pubkey: i, isSigner: !1, isWritable: !1 },
              { pubkey: We, isSigner: !1, isWritable: !1 },
              { pubkey: bi, isSigner: !1, isWritable: !1 },
              { pubkey: vc, isSigner: !1, isWritable: !1 },
              { pubkey: r, isSigner: !0, isWritable: !1 },
            ],
            programId: this.programId,
            data: s,
          });
        }
        static authorize(t) {
          let {
              stakePubkey: e,
              authorizedPubkey: r,
              newAuthorizedPubkey: i,
              stakeAuthorizationType: o,
              custodianPubkey: s,
            } = t,
            f = he.Authorize,
            h = at(f, {
              newAuthorized: nt(i.toBuffer()),
              stakeAuthorizationType: o.index,
            }),
            b = [
              { pubkey: e, isSigner: !1, isWritable: !0 },
              { pubkey: We, isSigner: !1, isWritable: !0 },
              { pubkey: r, isSigner: !0, isWritable: !1 },
            ];
          return (
            s && b.push({ pubkey: s, isSigner: !0, isWritable: !1 }),
            new gt().add({ keys: b, programId: this.programId, data: h })
          );
        }
        static authorizeWithSeed(t) {
          let {
              stakePubkey: e,
              authorityBase: r,
              authoritySeed: i,
              authorityOwner: o,
              newAuthorizedPubkey: s,
              stakeAuthorizationType: f,
              custodianPubkey: h,
            } = t,
            b = he.AuthorizeWithSeed,
            B = at(b, {
              newAuthorized: nt(s.toBuffer()),
              stakeAuthorizationType: f.index,
              authoritySeed: i,
              authorityOwner: nt(o.toBuffer()),
            }),
            S = [
              { pubkey: e, isSigner: !1, isWritable: !0 },
              { pubkey: r, isSigner: !0, isWritable: !1 },
              { pubkey: We, isSigner: !1, isWritable: !1 },
            ];
          return (
            h && S.push({ pubkey: h, isSigner: !0, isWritable: !1 }),
            new gt().add({ keys: S, programId: this.programId, data: B })
          );
        }
        static splitInstruction(t) {
          let {
              stakePubkey: e,
              authorizedPubkey: r,
              splitStakePubkey: i,
              lamports: o,
            } = t,
            s = he.Split,
            f = at(s, { lamports: o });
          return new mt({
            keys: [
              { pubkey: e, isSigner: !1, isWritable: !0 },
              { pubkey: i, isSigner: !1, isWritable: !0 },
              { pubkey: r, isSigner: !0, isWritable: !1 },
            ],
            programId: this.programId,
            data: f,
          });
        }
        static split(t, e) {
          let r = new gt();
          return (
            r.add(
              ye.createAccount({
                fromPubkey: t.authorizedPubkey,
                newAccountPubkey: t.splitStakePubkey,
                lamports: e,
                space: this.space,
                programId: this.programId,
              })
            ),
            r.add(this.splitInstruction(t))
          );
        }
        static splitWithSeed(t, e) {
          let {
              stakePubkey: r,
              authorizedPubkey: i,
              splitStakePubkey: o,
              basePubkey: s,
              seed: f,
              lamports: h,
            } = t,
            b = new gt();
          return (
            b.add(
              ye.allocate({
                accountPubkey: o,
                basePubkey: s,
                seed: f,
                space: this.space,
                programId: this.programId,
              })
            ),
            e &&
              e > 0 &&
              b.add(
                ye.transfer({
                  fromPubkey: t.authorizedPubkey,
                  toPubkey: o,
                  lamports: e,
                })
              ),
            b.add(
              this.splitInstruction({
                stakePubkey: r,
                authorizedPubkey: i,
                splitStakePubkey: o,
                lamports: h,
              })
            )
          );
        }
        static merge(t) {
          let { stakePubkey: e, sourceStakePubKey: r, authorizedPubkey: i } = t,
            o = he.Merge,
            s = at(o);
          return new gt().add({
            keys: [
              { pubkey: e, isSigner: !1, isWritable: !0 },
              { pubkey: r, isSigner: !1, isWritable: !0 },
              { pubkey: We, isSigner: !1, isWritable: !1 },
              { pubkey: bi, isSigner: !1, isWritable: !1 },
              { pubkey: i, isSigner: !0, isWritable: !1 },
            ],
            programId: this.programId,
            data: s,
          });
        }
        static withdraw(t) {
          let {
              stakePubkey: e,
              authorizedPubkey: r,
              toPubkey: i,
              lamports: o,
              custodianPubkey: s,
            } = t,
            f = he.Withdraw,
            h = at(f, { lamports: o }),
            b = [
              { pubkey: e, isSigner: !1, isWritable: !0 },
              { pubkey: i, isSigner: !1, isWritable: !0 },
              { pubkey: We, isSigner: !1, isWritable: !1 },
              { pubkey: bi, isSigner: !1, isWritable: !1 },
              { pubkey: r, isSigner: !0, isWritable: !1 },
            ];
          return (
            s && b.push({ pubkey: s, isSigner: !0, isWritable: !1 }),
            new gt().add({ keys: b, programId: this.programId, data: h })
          );
        }
        static deactivate(t) {
          let { stakePubkey: e, authorizedPubkey: r } = t,
            i = he.Deactivate,
            o = at(i);
          return new gt().add({
            keys: [
              { pubkey: e, isSigner: !1, isWritable: !0 },
              { pubkey: We, isSigner: !1, isWritable: !1 },
              { pubkey: r, isSigner: !0, isWritable: !1 },
            ],
            programId: this.programId,
            data: o,
          });
        }
      });
    jr.programId = new z("Stake11111111111111111111111111111111111111");
    jr.space = 200;
    (Ri = class {
      constructor(t, e, r, i) {
        (this.nodePubkey = void 0),
          (this.authorizedVoter = void 0),
          (this.authorizedWithdrawer = void 0),
          (this.commission = void 0),
          (this.nodePubkey = t),
          (this.authorizedVoter = e),
          (this.authorizedWithdrawer = r),
          (this.commission = i);
      }
    }),
      (Es = class {
        constructor() {}
        static decodeInstructionType(t) {
          this.checkProgramId(t.programId);
          let r = g.u32("instruction").decode(t.data),
            i;
          for (let [o, s] of Object.entries(Ve))
            if (s.index == r) {
              i = o;
              break;
            }
          if (!i)
            throw new Error(
              "Instruction type incorrect; not a VoteInstruction"
            );
          return i;
        }
        static decodeInitializeAccount(t) {
          this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 4);
          let { voteInit: e } = yt(Ve.InitializeAccount, t.data);
          return {
            votePubkey: t.keys[0].pubkey,
            nodePubkey: t.keys[3].pubkey,
            voteInit: new Ri(
              new z(e.nodePubkey),
              new z(e.authorizedVoter),
              new z(e.authorizedWithdrawer),
              e.commission
            ),
          };
        }
        static decodeAuthorize(t) {
          this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 3);
          let { newAuthorized: e, voteAuthorizationType: r } = yt(
            Ve.Authorize,
            t.data
          );
          return {
            votePubkey: t.keys[0].pubkey,
            authorizedPubkey: t.keys[2].pubkey,
            newAuthorizedPubkey: new z(e),
            voteAuthorizationType: { index: r },
          };
        }
        static decodeAuthorizeWithSeed(t) {
          this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 3);
          let {
            voteAuthorizeWithSeedArgs: {
              currentAuthorityDerivedKeyOwnerPubkey: e,
              currentAuthorityDerivedKeySeed: r,
              newAuthorized: i,
              voteAuthorizationType: o,
            },
          } = yt(Ve.AuthorizeWithSeed, t.data);
          return {
            currentAuthorityDerivedKeyBasePubkey: t.keys[2].pubkey,
            currentAuthorityDerivedKeyOwnerPubkey: new z(e),
            currentAuthorityDerivedKeySeed: r,
            newAuthorizedPubkey: new z(i),
            voteAuthorizationType: { index: o },
            votePubkey: t.keys[0].pubkey,
          };
        }
        static decodeWithdraw(t) {
          this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 3);
          let { lamports: e } = yt(Ve.Withdraw, t.data);
          return {
            votePubkey: t.keys[0].pubkey,
            authorizedWithdrawerPubkey: t.keys[2].pubkey,
            lamports: e,
            toPubkey: t.keys[1].pubkey,
          };
        }
        static checkProgramId(t) {
          if (!t.equals(Yr.programId))
            throw new Error(
              "invalid instruction; programId is not VoteProgram"
            );
        }
        static checkKeyLength(t, e) {
          if (t.length < e)
            throw new Error(
              `invalid instruction; found ${t.length} keys, expected at least ${e}`
            );
        }
      }),
      (Ve = Object.freeze({
        InitializeAccount: {
          index: 0,
          layout: g.struct([g.u32("instruction"), sl()]),
        },
        Authorize: {
          index: 1,
          layout: g.struct([
            g.u32("instruction"),
            it("newAuthorized"),
            g.u32("voteAuthorizationType"),
          ]),
        },
        Withdraw: {
          index: 3,
          layout: g.struct([g.u32("instruction"), g.ns64("lamports")]),
        },
        UpdateValidatorIdentity: {
          index: 4,
          layout: g.struct([g.u32("instruction")]),
        },
        AuthorizeWithSeed: {
          index: 10,
          layout: g.struct([g.u32("instruction"), al()]),
        },
      })),
      (Jd = Object.freeze({ Voter: { index: 0 }, Withdrawer: { index: 1 } })),
      (Yr = class n {
        constructor() {}
        static initializeAccount(t) {
          let { votePubkey: e, nodePubkey: r, voteInit: i } = t,
            o = Ve.InitializeAccount,
            s = at(o, {
              voteInit: {
                nodePubkey: nt(i.nodePubkey.toBuffer()),
                authorizedVoter: nt(i.authorizedVoter.toBuffer()),
                authorizedWithdrawer: nt(i.authorizedWithdrawer.toBuffer()),
                commission: i.commission,
              },
            }),
            f = {
              keys: [
                { pubkey: e, isSigner: !1, isWritable: !0 },
                { pubkey: Hr, isSigner: !1, isWritable: !1 },
                { pubkey: We, isSigner: !1, isWritable: !1 },
                { pubkey: r, isSigner: !0, isWritable: !1 },
              ],
              programId: this.programId,
              data: s,
            };
          return new mt(f);
        }
        static createAccount(t) {
          let e = new gt();
          return (
            e.add(
              ye.createAccount({
                fromPubkey: t.fromPubkey,
                newAccountPubkey: t.votePubkey,
                lamports: t.lamports,
                space: this.space,
                programId: this.programId,
              })
            ),
            e.add(
              this.initializeAccount({
                votePubkey: t.votePubkey,
                nodePubkey: t.voteInit.nodePubkey,
                voteInit: t.voteInit,
              })
            )
          );
        }
        static authorize(t) {
          let {
              votePubkey: e,
              authorizedPubkey: r,
              newAuthorizedPubkey: i,
              voteAuthorizationType: o,
            } = t,
            s = Ve.Authorize,
            f = at(s, {
              newAuthorized: nt(i.toBuffer()),
              voteAuthorizationType: o.index,
            }),
            h = [
              { pubkey: e, isSigner: !1, isWritable: !0 },
              { pubkey: We, isSigner: !1, isWritable: !1 },
              { pubkey: r, isSigner: !0, isWritable: !1 },
            ];
          return new gt().add({ keys: h, programId: this.programId, data: f });
        }
        static authorizeWithSeed(t) {
          let {
              currentAuthorityDerivedKeyBasePubkey: e,
              currentAuthorityDerivedKeyOwnerPubkey: r,
              currentAuthorityDerivedKeySeed: i,
              newAuthorizedPubkey: o,
              voteAuthorizationType: s,
              votePubkey: f,
            } = t,
            h = Ve.AuthorizeWithSeed,
            b = at(h, {
              voteAuthorizeWithSeedArgs: {
                currentAuthorityDerivedKeyOwnerPubkey: nt(r.toBuffer()),
                currentAuthorityDerivedKeySeed: i,
                newAuthorized: nt(o.toBuffer()),
                voteAuthorizationType: s.index,
              },
            }),
            B = [
              { pubkey: f, isSigner: !1, isWritable: !0 },
              { pubkey: We, isSigner: !1, isWritable: !1 },
              { pubkey: e, isSigner: !0, isWritable: !1 },
            ];
          return new gt().add({ keys: B, programId: this.programId, data: b });
        }
        static withdraw(t) {
          let {
              votePubkey: e,
              authorizedWithdrawerPubkey: r,
              lamports: i,
              toPubkey: o,
            } = t,
            s = Ve.Withdraw,
            f = at(s, { lamports: i }),
            h = [
              { pubkey: e, isSigner: !1, isWritable: !0 },
              { pubkey: o, isSigner: !1, isWritable: !0 },
              { pubkey: r, isSigner: !0, isWritable: !1 },
            ];
          return new gt().add({ keys: h, programId: this.programId, data: f });
        }
        static safeWithdraw(t, e, r) {
          if (t.lamports > e - r)
            throw new Error(
              "Withdraw will leave vote account with insufficient funds."
            );
          return n.withdraw(t);
        }
        static updateValidatorIdentity(t) {
          let {
              votePubkey: e,
              authorizedWithdrawerPubkey: r,
              nodePubkey: i,
            } = t,
            o = Ve.UpdateValidatorIdentity,
            s = at(o),
            f = [
              { pubkey: e, isSigner: !1, isWritable: !0 },
              { pubkey: i, isSigner: !0, isWritable: !1 },
              { pubkey: r, isSigner: !0, isWritable: !1 },
            ];
          return new gt().add({ keys: f, programId: this.programId, data: s });
        }
      });
    Yr.programId = new z("Vote111111111111111111111111111111111111111");
    Yr.space = 3762;
    (Ec = new z("Va1idator1nfo111111111111111111111111111111")),
      (Xd = P({
        name: F(),
        website: Z(F()),
        details: Z(F()),
        iconUrl: Z(F()),
        keybaseUsername: Z(F()),
      })),
      (_s = class n {
        constructor(t, e) {
          (this.key = void 0),
            (this.info = void 0),
            (this.key = t),
            (this.info = e);
        }
        static fromConfigData(t) {
          let e = [...t];
          if (Ee(e) !== 2) return null;
          let i = [];
          for (let o = 0; o < 2; o++) {
            let s = new z(_e(e, 0, He)),
              f = qe(e) === 1;
            i.push({ publicKey: s, isSigner: f });
          }
          if (i[0].publicKey.equals(Ec) && i[1].isSigner) {
            let o = vr().decode(X.Buffer.from(e)),
              s = JSON.parse(o);
            return Vo(s, Xd), new n(i[1].publicKey, s);
          }
          return null;
        }
      }),
      (Qd = new z("Vote111111111111111111111111111111111111111")),
      (t0 = g.struct([
        it("nodePubkey"),
        it("authorizedWithdrawer"),
        g.u8("commission"),
        g.nu64(),
        g.seq(
          g.struct([g.nu64("slot"), g.u32("confirmationCount")]),
          g.offset(g.u32(), -8),
          "votes"
        ),
        g.u8("rootSlotValid"),
        g.nu64("rootSlot"),
        g.nu64(),
        g.seq(
          g.struct([g.nu64("epoch"), it("authorizedVoter")]),
          g.offset(g.u32(), -8),
          "authorizedVoters"
        ),
        g.struct(
          [
            g.seq(
              g.struct([
                it("authorizedPubkey"),
                g.nu64("epochOfLastAuthorizedSwitch"),
                g.nu64("targetEpoch"),
              ]),
              32,
              "buf"
            ),
            g.nu64("idx"),
            g.u8("isEmpty"),
          ],
          "priorVoters"
        ),
        g.nu64(),
        g.seq(
          g.struct([g.nu64("epoch"), g.nu64("credits"), g.nu64("prevCredits")]),
          g.offset(g.u32(), -8),
          "epochCredits"
        ),
        g.struct([g.nu64("slot"), g.nu64("timestamp")], "lastTimestamp"),
      ])),
      (As = class n {
        constructor(t) {
          (this.nodePubkey = void 0),
            (this.authorizedWithdrawer = void 0),
            (this.commission = void 0),
            (this.rootSlot = void 0),
            (this.votes = void 0),
            (this.authorizedVoters = void 0),
            (this.priorVoters = void 0),
            (this.epochCredits = void 0),
            (this.lastTimestamp = void 0),
            (this.nodePubkey = t.nodePubkey),
            (this.authorizedWithdrawer = t.authorizedWithdrawer),
            (this.commission = t.commission),
            (this.rootSlot = t.rootSlot),
            (this.votes = t.votes),
            (this.authorizedVoters = t.authorizedVoters),
            (this.priorVoters = t.priorVoters),
            (this.epochCredits = t.epochCredits),
            (this.lastTimestamp = t.lastTimestamp);
        }
        static fromAccountData(t) {
          let r = t0.decode(nt(t), 4),
            i = r.rootSlot;
          return (
            r.rootSlotValid || (i = null),
            new n({
              nodePubkey: new z(r.nodePubkey),
              authorizedWithdrawer: new z(r.authorizedWithdrawer),
              commission: r.commission,
              votes: r.votes,
              rootSlot: i,
              authorizedVoters: r.authorizedVoters.map(e0),
              priorVoters: r0(r.priorVoters),
              epochCredits: r.epochCredits,
              lastTimestamp: r.lastTimestamp,
            })
          );
        }
      });
    nc = {
      http: {
        devnet: "http://api.devnet.solana.com",
        testnet: "http://api.testnet.solana.com",
        "mainnet-beta": "http://api.mainnet-beta.solana.com/",
      },
      https: {
        devnet: "https://api.devnet.solana.com",
        testnet: "https://api.testnet.solana.com",
        "mainnet-beta": "https://api.mainnet-beta.solana.com/",
      },
    };
    o0 = 1e9;
  });
export {
  en as a,
  br as b,
  Qa as c,
  Lo as d,
  Ha as e,
  To as f,
  su as g,
  Wo as h,
  au as i,
  Uu as j,
  Nu as k,
  Ou as l,
  zu as m,
  z as n,
  mt as o,
  gt as p,
  hs as q,
  ls as r,
  We as s,
  Hr as t,
  _r as u,
  ps as v,
  ye as w,
  s0 as x,
  a0 as y,
};
