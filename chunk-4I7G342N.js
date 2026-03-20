import { a as ne, b as He } from "./chunk-JKZLGYQN.js";
import { c as ee, f as Ve } from "./chunk-EEU3LH2V.js";
import {
  F as D,
  G as tt,
  I as z,
  L as Bt,
  M as Ut,
  t as ft,
  u as Nt,
  v as Tt,
  w as te,
} from "./chunk-QMRWXCSQ.js";
import { a as st, b as it, g as ct } from "./chunk-VNDKUXGB.js";
function mt(e, n = "") {
  if (typeof e != "boolean") {
    let r = n && `"${n}"`;
    throw new Error(r + "expected boolean, got type=" + typeof e);
  }
  return e;
}
function G(e, n, r = "") {
  let t = ft(e),
    o = e?.length,
    i = n !== void 0;
  if (!t || (i && o !== n)) {
    let s = r && `"${r}" `,
      u = i ? ` of length ${n}` : "",
      l = t ? `length=${o}` : `type=${typeof e}`;
    throw new Error(s + "expected Uint8Array" + u + ", got " + l);
  }
  return e;
}
function gt(e) {
  let n = e.toString(16);
  return n.length & 1 ? "0" + n : n;
}
function re(e) {
  if (typeof e != "string")
    throw new Error("hex string expected, got " + typeof e);
  return e === "" ? Ht : BigInt("0x" + e);
}
function at(e) {
  return re(D(e));
}
function Lt(e) {
  return Tt(e), re(D(Uint8Array.from(e).reverse()));
}
function vt(e, n) {
  return tt(e.toString(16).padStart(n * 2, "0"));
}
function Kt(e, n) {
  return vt(e, n).reverse();
}
function C(e, n, r) {
  let t;
  if (typeof n == "string")
    try {
      t = tt(n);
    } catch (i) {
      throw new Error(e + " must be hex string or Uint8Array, cause: " + i);
    }
  else if (ft(n)) t = Uint8Array.from(n);
  else throw new Error(e + " must be hex string or Uint8Array");
  let o = t.length;
  if (typeof r == "number" && o !== r)
    throw new Error(e + " of length " + r + " expected, got " + o);
  return t;
}
function cn(e, n) {
  if (e.length !== n.length) return !1;
  let r = 0;
  for (let t = 0; t < e.length; t++) r |= e[t] ^ n[t];
  return r === 0;
}
function fn(e) {
  return Uint8Array.from(e);
}
function oe(e, n, r) {
  return Zt(e) && Zt(n) && Zt(r) && n <= e && e < r;
}
function se(e, n, r, t) {
  if (!oe(n, r, t))
    throw new Error(
      "expected valid " + e + ": " + r + " <= n < " + t + ", got " + n
    );
}
function xt(e) {
  let n;
  for (n = 0; e > Ht; e >>= Vt, n += 1);
  return n;
}
function ie(e, n, r) {
  if (typeof e != "number" || e < 2)
    throw new Error("hashLen must be a number");
  if (typeof n != "number" || n < 2)
    throw new Error("qByteLen must be a number");
  if (typeof r != "function") throw new Error("hmacFn must be a function");
  let t = (h) => new Uint8Array(h),
    o = (h) => Uint8Array.of(h),
    i = t(e),
    s = t(e),
    u = 0,
    l = () => {
      i.fill(1), s.fill(0), (u = 0);
    },
    m = (...h) => r(s, i, ...h),
    y = (h = t(0)) => {
      (s = m(o(0), h)),
        (i = m()),
        h.length !== 0 && ((s = m(o(1), h)), (i = m()));
    },
    S = () => {
      if (u++ >= 1e3) throw new Error("drbg: tried 1000 values");
      let h = 0,
        p = [];
      for (; h < n; ) {
        i = m();
        let x = i.slice();
        p.push(x), (h += i.length);
      }
      return z(...p);
    };
  return (h, p) => {
    l(), y(h);
    let x;
    for (; !(x = p(S())); ) y();
    return l(), x;
  };
}
function wt(e, n, r = {}) {
  if (!e || typeof e != "object")
    throw new Error("expected valid options object");
  function t(o, i, s) {
    let u = e[o];
    if (s && u === void 0) return;
    let l = typeof u;
    if (l !== i || u === null)
      throw new Error(`param "${o}" is invalid: expected ${i}, got ${l}`);
  }
  Object.entries(n).forEach(([o, i]) => t(o, i, !1)),
    Object.entries(r).forEach(([o, i]) => t(o, i, !0));
}
function Ct(e) {
  let n = new WeakMap();
  return (r, ...t) => {
    let o = n.get(r);
    if (o !== void 0) return o;
    let i = e(r, ...t);
    return n.set(r, i), i;
  };
}
var Ht,
  Vt,
  Zt,
  W,
  St = ct(() => {
    "use strict";
    Ut();
    Ut();
    (Ht = BigInt(0)), (Vt = BigInt(1));
    Zt = (e) => typeof e == "bigint" && Ht <= e;
    W = (e) => (Vt << BigInt(e)) - Vt;
  });
function j(e, n) {
  let r = e % n;
  return r >= M ? r : n + r;
}
function Y(e, n, r) {
  let t = e;
  for (; n-- > M; ) (t *= t), (t %= r);
  return t;
}
function ce(e, n) {
  if (e === M) throw new Error("invert: expected non-zero number");
  if (n <= M) throw new Error("invert: expected positive modulus, got " + n);
  let r = j(e, n),
    t = n,
    o = M,
    i = L,
    s = L,
    u = M;
  for (; r !== M; ) {
    let m = t / r,
      y = t % r,
      S = o - s * m,
      f = i - u * m;
    (t = r), (r = y), (o = s), (i = u), (s = S), (u = f);
  }
  if (t !== L) throw new Error("invert: does not exist");
  return j(o, n);
}
function Mt(e, n, r) {
  if (!e.eql(e.sqr(n), r)) throw new Error("Cannot find square root");
}
function me(e, n) {
  let r = (e.ORDER + L) / ue,
    t = e.pow(n, r);
  return Mt(e, t, n), t;
}
function Ce(e, n) {
  let r = (e.ORDER - le) / de,
    t = e.mul(n, et),
    o = e.pow(t, r),
    i = e.mul(n, o),
    s = e.mul(e.mul(i, et), o),
    u = e.mul(i, e.sub(s, e.ONE));
  return Mt(e, u, n), u;
}
function Me(e) {
  let n = Q(e),
    r = ge(e),
    t = r(n, n.neg(n.ONE)),
    o = r(n, t),
    i = r(n, n.neg(t)),
    s = (e + Le) / he;
  return (u, l) => {
    let m = u.pow(l, s),
      y = u.mul(m, t),
      S = u.mul(m, o),
      f = u.mul(m, i),
      h = u.eql(u.sqr(y), l),
      p = u.eql(u.sqr(S), l);
    (m = u.cmov(m, y, h)), (y = u.cmov(f, S, p));
    let x = u.eql(u.sqr(y), l),
      R = u.cmov(m, y, x);
    return Mt(u, R, l), R;
  };
}
function ge(e) {
  if (e < ae) throw new Error("sqrt is not defined for small field");
  let n = e - L,
    r = 0;
  for (; n % et === M; ) (n /= et), r++;
  let t = et,
    o = Q(e);
  for (; fe(o, t) === 1; )
    if (t++ > 1e3)
      throw new Error("Cannot find square root: probably non-prime P");
  if (r === 1) return me;
  let i = o.pow(t, n),
    s = (n + L) / et;
  return function (l, m) {
    if (l.is0(m)) return m;
    if (fe(l, m) !== 1) throw new Error("Cannot find square root");
    let y = r,
      S = l.mul(l.ONE, i),
      f = l.pow(m, n),
      h = l.pow(m, s);
    for (; !l.eql(f, l.ONE); ) {
      if (l.is0(f)) return l.ZERO;
      let p = 1,
        x = l.sqr(f);
      for (; !l.eql(x, l.ONE); )
        if ((p++, (x = l.sqr(x)), p === y))
          throw new Error("Cannot find square root");
      let R = L << BigInt(y - p - 1),
        U = l.pow(S, R);
      (y = p), (S = l.sqr(U)), (f = l.mul(f, S)), (h = l.mul(h, U));
    }
    return h;
  };
}
function ke(e) {
  return e % ue === ae
    ? me
    : e % de === le
    ? Ce
    : e % he === Ke
    ? Me(e)
    : ge(e);
}
function kt(e) {
  let n = { ORDER: "bigint", MASK: "bigint", BYTES: "number", BITS: "number" },
    r = je.reduce((t, o) => ((t[o] = "function"), t), n);
  return wt(e, r), e;
}
function Ye(e, n, r) {
  if (r < M) throw new Error("invalid exponent, negatives unsupported");
  if (r === M) return e.ONE;
  if (r === L) return n;
  let t = e.ONE,
    o = n;
  for (; r > M; ) r & L && (t = e.mul(t, o)), (o = e.sqr(o)), (r >>= L);
  return t;
}
function It(e, n, r = !1) {
  let t = new Array(n.length).fill(r ? e.ZERO : void 0),
    o = n.reduce(
      (s, u, l) => (e.is0(u) ? s : ((t[l] = s), e.mul(s, u))),
      e.ONE
    ),
    i = e.inv(o);
  return (
    n.reduceRight(
      (s, u, l) => (e.is0(u) ? s : ((t[l] = e.mul(s, t[l])), e.mul(s, u))),
      i
    ),
    t
  );
}
function fe(e, n) {
  let r = (e.ORDER - L) / et,
    t = e.pow(n, r),
    o = e.eql(t, e.ONE),
    i = e.eql(t, e.ZERO),
    s = e.eql(t, e.neg(e.ONE));
  if (!o && !i && !s) throw new Error("invalid Legendre symbol result");
  return o ? 1 : i ? 0 : -1;
}
function _t(e, n) {
  n !== void 0 && Nt(n);
  let r = n !== void 0 ? n : e.toString(2).length,
    t = Math.ceil(r / 8);
  return { nBitLength: r, nByteLength: t };
}
function Q(e, n, r = !1, t = {}) {
  if (e <= M) throw new Error("invalid field: expected ORDER > 0, got " + e);
  let o,
    i,
    s = !1,
    u;
  if (typeof n == "object" && n != null) {
    if (t.sqrt || r) throw new Error("cannot specify opts in two arguments");
    let f = n;
    f.BITS && (o = f.BITS),
      f.sqrt && (i = f.sqrt),
      typeof f.isLE == "boolean" && (r = f.isLE),
      typeof f.modFromBytes == "boolean" && (s = f.modFromBytes),
      (u = f.allowedLengths);
  } else typeof n == "number" && (o = n), t.sqrt && (i = t.sqrt);
  let { nBitLength: l, nByteLength: m } = _t(e, o);
  if (m > 2048)
    throw new Error("invalid field: expected ORDER of <= 2048 bytes");
  let y,
    S = Object.freeze({
      ORDER: e,
      isLE: r,
      BITS: l,
      BYTES: m,
      MASK: W(l),
      ZERO: M,
      ONE: L,
      allowedLengths: u,
      create: (f) => j(f, e),
      isValid: (f) => {
        if (typeof f != "bigint")
          throw new Error(
            "invalid field element: expected bigint, got " + typeof f
          );
        return M <= f && f < e;
      },
      is0: (f) => f === M,
      isValidNot0: (f) => !S.is0(f) && S.isValid(f),
      isOdd: (f) => (f & L) === L,
      neg: (f) => j(-f, e),
      eql: (f, h) => f === h,
      sqr: (f) => j(f * f, e),
      add: (f, h) => j(f + h, e),
      sub: (f, h) => j(f - h, e),
      mul: (f, h) => j(f * h, e),
      pow: (f, h) => Ye(S, f, h),
      div: (f, h) => j(f * ce(h, e), e),
      sqrN: (f) => f * f,
      addN: (f, h) => f + h,
      subN: (f, h) => f - h,
      mulN: (f, h) => f * h,
      inv: (f) => ce(f, e),
      sqrt: i || ((f) => (y || (y = ke(e)), y(S, f))),
      toBytes: (f) => (r ? Kt(f, m) : vt(f, m)),
      fromBytes: (f, h = !0) => {
        if (u) {
          if (!u.includes(f.length) || f.length > m)
            throw new Error(
              "Field.fromBytes: expected " + u + " bytes, got " + f.length
            );
          let x = new Uint8Array(m);
          x.set(f, r ? 0 : x.length - f.length), (f = x);
        }
        if (f.length !== m)
          throw new Error(
            "Field.fromBytes: expected " + m + " bytes, got " + f.length
          );
        let p = r ? Lt(f) : at(f);
        if ((s && (p = j(p, e)), !h && !S.isValid(p)))
          throw new Error("invalid field element: outside of range 0..ORDER");
        return p;
      },
      invertBatch: (f) => It(S, f),
      cmov: (f, h, p) => (p ? h : f),
    });
  return Object.freeze(S);
}
function we(e) {
  if (typeof e != "bigint") throw new Error("field order must be bigint");
  let n = e.toString(2).length;
  return Math.ceil(n / 8);
}
function jt(e) {
  let n = we(e);
  return n + Math.ceil(n / 2);
}
function Yt(e, n, r = !1) {
  let t = e.length,
    o = we(n),
    i = jt(n);
  if (t < 16 || t < i || t > 1024)
    throw new Error("expected " + i + "-1024 bytes of input, got " + t);
  let s = r ? Lt(e) : at(e),
    u = j(s, n - L) + L;
  return r ? Kt(u, o) : vt(u, o);
}
var M,
  L,
  et,
  ae,
  ue,
  le,
  Le,
  de,
  Ke,
  he,
  dn,
  je,
  Ot = ct(() => {
    "use strict";
    St();
    (M = BigInt(0)),
      (L = BigInt(1)),
      (et = BigInt(2)),
      (ae = BigInt(3)),
      (ue = BigInt(4)),
      (le = BigInt(5)),
      (Le = BigInt(7)),
      (de = BigInt(8)),
      (Ke = BigInt(9)),
      (he = BigInt(16));
    (dn = (e, n) => (j(e, n) & L) === L),
      (je = [
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
      ]);
  });
function yt(e, n) {
  let r = n.negate();
  return e ? r : n;
}
function Rt(e, n) {
  let r = It(
    e.Fp,
    n.map((t) => t.Z)
  );
  return n.map((t, o) => e.fromAffine(t.toAffine(r[o])));
}
function Ee(e, n) {
  if (!Number.isSafeInteger(e) || e <= 0 || e > n)
    throw new Error("invalid window size, expected [1.." + n + "], got W=" + e);
}
function zt(e, n) {
  Ee(e, n);
  let r = Math.ceil(n / e) + 1,
    t = 2 ** (e - 1),
    o = 2 ** e,
    i = W(e),
    s = BigInt(e);
  return { windows: r, windowSize: t, mask: i, maxNumber: o, shiftBy: s };
}
function ye(e, n, r) {
  let { windowSize: t, mask: o, maxNumber: i, shiftBy: s } = r,
    u = Number(e & o),
    l = e >> s;
  u > t && ((u -= i), (l += nt));
  let m = n * t,
    y = m + Math.abs(u) - 1,
    S = u === 0,
    f = u < 0,
    h = n % 2 !== 0;
  return { nextN: l, offset: y, isZero: S, isNeg: f, isNegF: h, offsetF: m };
}
function ze(e, n) {
  if (!Array.isArray(e)) throw new Error("array expected");
  e.forEach((r, t) => {
    if (!(r instanceof n)) throw new Error("invalid point at index " + t);
  });
}
function De(e, n) {
  if (!Array.isArray(e)) throw new Error("array of scalars expected");
  e.forEach((r, t) => {
    if (!n.isValid(r)) throw new Error("invalid scalar at index " + t);
  });
}
function Pt(e) {
  return Be.get(e) || 1;
}
function be(e) {
  if (e !== ut) throw new Error("invalid wNAF");
}
function ve(e, n, r, t) {
  let o = n,
    i = e.ZERO,
    s = e.ZERO;
  for (; r > ut || t > ut; )
    r & nt && (i = i.add(o)),
      t & nt && (s = s.add(o)),
      (o = o.double()),
      (r >>= nt),
      (t >>= nt);
  return { p1: i, p2: s };
}
function xe(e, n, r, t) {
  ze(r, e), De(t, n);
  let o = r.length,
    i = t.length;
  if (o !== i)
    throw new Error("arrays of points and scalars must have equal length");
  let s = e.ZERO,
    u = xt(BigInt(o)),
    l = 1;
  u > 12 ? (l = u - 3) : u > 4 ? (l = u - 2) : u > 0 && (l = 2);
  let m = W(l),
    y = new Array(Number(m) + 1).fill(s),
    S = Math.floor((n.BITS - 1) / l) * l,
    f = s;
  for (let h = S; h >= 0; h -= l) {
    y.fill(s);
    for (let x = 0; x < i; x++) {
      let R = t[x],
        U = Number((R >> BigInt(h)) & m);
      y[U] = y[U].add(r[x]);
    }
    let p = s;
    for (let x = y.length - 1, R = s; x > 0; x--)
      (R = R.add(y[x])), (p = p.add(R));
    if (((f = f.add(p)), h !== 0)) for (let x = 0; x < l; x++) f = f.double();
  }
  return f;
}
function pe(e, n, r) {
  if (n) {
    if (n.ORDER !== e)
      throw new Error("Field.ORDER must match order: Fp == p, Fn == n");
    return kt(n), n;
  } else return Q(e, { isLE: r });
}
function Se(e, n, r = {}, t) {
  if ((t === void 0 && (t = e === "edwards"), !n || typeof n != "object"))
    throw new Error(`expected valid ${e} CURVE object`);
  for (let l of ["p", "n", "h"]) {
    let m = n[l];
    if (!(typeof m == "bigint" && m > ut))
      throw new Error(`CURVE.${l} must be positive bigint`);
  }
  let o = pe(n.p, r.Fp, t),
    i = pe(n.n, r.Fn, t),
    u = ["Gx", "Gy", "a", e === "weierstrass" ? "b" : "d"];
  for (let l of u)
    if (!o.isValid(n[l]))
      throw new Error(`CURVE.${l} must be valid field element of CURVE.Fp`);
  return (n = Object.freeze(Object.assign({}, n))), { CURVE: n, Fp: o, Fn: i };
}
var ut,
  nt,
  Dt,
  Be,
  qt,
  Ie = ct(() => {
    "use strict";
    St();
    Ot();
    (ut = BigInt(0)), (nt = BigInt(1));
    (Dt = new WeakMap()), (Be = new WeakMap());
    qt = class {
      constructor(n, r) {
        (this.BASE = n.BASE),
          (this.ZERO = n.ZERO),
          (this.Fn = n.Fn),
          (this.bits = r);
      }
      _unsafeLadder(n, r, t = this.ZERO) {
        let o = n;
        for (; r > ut; ) r & nt && (t = t.add(o)), (o = o.double()), (r >>= nt);
        return t;
      }
      precomputeWindow(n, r) {
        let { windows: t, windowSize: o } = zt(r, this.bits),
          i = [],
          s = n,
          u = s;
        for (let l = 0; l < t; l++) {
          (u = s), i.push(u);
          for (let m = 1; m < o; m++) (u = u.add(s)), i.push(u);
          s = u.double();
        }
        return i;
      }
      wNAF(n, r, t) {
        if (!this.Fn.isValid(t)) throw new Error("invalid scalar");
        let o = this.ZERO,
          i = this.BASE,
          s = zt(n, this.bits);
        for (let u = 0; u < s.windows; u++) {
          let {
            nextN: l,
            offset: m,
            isZero: y,
            isNeg: S,
            isNegF: f,
            offsetF: h,
          } = ye(t, u, s);
          (t = l), y ? (i = i.add(yt(f, r[h]))) : (o = o.add(yt(S, r[m])));
        }
        return be(t), { p: o, f: i };
      }
      wNAFUnsafe(n, r, t, o = this.ZERO) {
        let i = zt(n, this.bits);
        for (let s = 0; s < i.windows && t !== ut; s++) {
          let { nextN: u, offset: l, isZero: m, isNeg: y } = ye(t, s, i);
          if (((t = u), !m)) {
            let S = r[l];
            o = o.add(y ? S.negate() : S);
          }
        }
        return be(t), o;
      }
      getPrecomputes(n, r, t) {
        let o = Dt.get(r);
        return (
          o ||
            ((o = this.precomputeWindow(r, n)),
            n !== 1 && (typeof t == "function" && (o = t(o)), Dt.set(r, o))),
          o
        );
      }
      cached(n, r, t) {
        let o = Pt(n);
        return this.wNAF(o, this.getPrecomputes(o, n, t), r);
      }
      unsafe(n, r, t, o) {
        let i = Pt(n);
        return i === 1
          ? this._unsafeLadder(n, r, o)
          : this.wNAFUnsafe(i, this.getPrecomputes(i, n, t), r, o);
      }
      createCache(n, r) {
        Ee(r, this.bits), Be.set(n, r), Dt.delete(n);
      }
      hasCache(n) {
        return Pt(n) !== 1;
      }
    };
  });
function Pe(e, n, r) {
  let [[t, o], [i, s]] = n,
    u = _e(s * e, r),
    l = _e(-o * e, r),
    m = e - u * t - l * i,
    y = -u * o - l * s,
    S = m < X,
    f = y < X;
  S && (m = -m), f && (y = -y);
  let h = W(Math.ceil(xt(r) / 2)) + dt;
  if (m < X || m >= h || y < X || y >= h)
    throw new Error("splitScalar (endomorphism): failed, k=" + e);
  return { k1neg: S, k1: m, k2neg: f, k2: y };
}
function $t(e) {
  if (!["compact", "recovered", "der"].includes(e))
    throw new Error(
      'Signature format must be "compact", "recovered", or "der"'
    );
  return e;
}
function Xt(e, n) {
  let r = {};
  for (let t of Object.keys(n)) r[t] = e[t] === void 0 ? n[t] : e[t];
  return (
    mt(r.lowS, "lowS"),
    mt(r.prehash, "prehash"),
    r.format !== void 0 && $t(r.format),
    r
  );
}
function lt(e, n) {
  let { BYTES: r } = e,
    t;
  if (typeof n == "bigint") t = n;
  else {
    let o = C("private key", n);
    try {
      t = e.fromBytes(o);
    } catch {
      throw new Error(
        `invalid private key: expected ui8a of size ${r}, got ${typeof n}`
      );
    }
  }
  if (!e.isValidNot0(t))
    throw new Error("invalid private key: out of range [1..N-1]");
  return t;
}
function $e(e, n = {}) {
  let r = Se("weierstrass", e, n),
    { Fp: t, Fn: o } = r,
    i = r.CURVE,
    { h: s, n: u } = i;
  wt(
    n,
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
  let { endo: l } = n;
  if (
    l &&
    (!t.is0(i.a) || typeof l.beta != "bigint" || !Array.isArray(l.basises))
  )
    throw new Error(
      'invalid endo: expected "beta": bigint and "basises": array'
    );
  let m = Re(t, o);
  function y() {
    if (!t.isOdd)
      throw new Error(
        "compression is not supported: Field does not have .isOdd()"
      );
  }
  function S(q, d, a) {
    let { x: c, y: g } = d.toAffine(),
      w = t.toBytes(c);
    if ((mt(a, "isCompressed"), a)) {
      y();
      let B = !t.isOdd(g);
      return z(qe(B), w);
    } else return z(Uint8Array.of(4), w, t.toBytes(g));
  }
  function f(q) {
    G(q, void 0, "Point");
    let { publicKey: d, publicKeyUncompressed: a } = m,
      c = q.length,
      g = q[0],
      w = q.subarray(1);
    if (c === d && (g === 2 || g === 3)) {
      let B = t.fromBytes(w);
      if (!t.isValid(B)) throw new Error("bad point: is not on curve, wrong x");
      let E = x(B),
        b;
      try {
        b = t.sqrt(E);
      } catch (V) {
        let A = V instanceof Error ? ": " + V.message : "";
        throw new Error("bad point: is not on curve, sqrt error" + A);
      }
      y();
      let v = t.isOdd(b);
      return ((g & 1) === 1) !== v && (b = t.neg(b)), { x: B, y: b };
    } else if (c === a && g === 4) {
      let B = t.BYTES,
        E = t.fromBytes(w.subarray(0, B)),
        b = t.fromBytes(w.subarray(B, B * 2));
      if (!R(E, b)) throw new Error("bad point: is not on curve");
      return { x: E, y: b };
    } else
      throw new Error(
        `bad point: got length ${c}, expected compressed=${d} or uncompressed=${a}`
      );
  }
  let h = n.toBytes || S,
    p = n.fromBytes || f;
  function x(q) {
    let d = t.sqr(q),
      a = t.mul(d, q);
    return t.add(t.add(a, t.mul(q, i.a)), i.b);
  }
  function R(q, d) {
    let a = t.sqr(d),
      c = x(q);
    return t.eql(a, c);
  }
  if (!R(i.Gx, i.Gy)) throw new Error("bad curve params: generator point");
  let U = t.mul(t.pow(i.a, At), Xe),
    ht = t.mul(t.sqr(i.b), BigInt(27));
  if (t.is0(t.add(U, ht))) throw new Error("bad curve params: a or b");
  function Z(q, d, a = !1) {
    if (!t.isValid(d) || (a && t.is0(d)))
      throw new Error(`bad point coordinate ${q}`);
    return d;
  }
  function J(q) {
    if (!(q instanceof _)) throw new Error("ProjectivePoint expected");
  }
  function $(q) {
    if (!l || !l.basises) throw new Error("no endo");
    return Pe(q, l.basises, o.ORDER);
  }
  let rt = Ct((q, d) => {
      let { X: a, Y: c, Z: g } = q;
      if (t.eql(g, t.ONE)) return { x: a, y: c };
      let w = q.is0();
      d == null && (d = w ? t.ONE : t.inv(g));
      let B = t.mul(a, d),
        E = t.mul(c, d),
        b = t.mul(g, d);
      if (w) return { x: t.ZERO, y: t.ZERO };
      if (!t.eql(b, t.ONE)) throw new Error("invZ was invalid");
      return { x: B, y: E };
    }),
    bt = Ct((q) => {
      if (q.is0()) {
        if (n.allowInfinityPoint && !t.is0(q.Y)) return;
        throw new Error("bad point: ZERO");
      }
      let { x: d, y: a } = q.toAffine();
      if (!t.isValid(d) || !t.isValid(a))
        throw new Error("bad point: x or y not field elements");
      if (!R(d, a)) throw new Error("bad point: equation left != right");
      if (!q.isTorsionFree())
        throw new Error("bad point: not in prime-order subgroup");
      return !0;
    });
  function ot(q, d, a, c, g) {
    return (
      (a = new _(t.mul(a.X, q), a.Y, a.Z)),
      (d = yt(c, d)),
      (a = yt(g, a)),
      d.add(a)
    );
  }
  class _ {
    constructor(d, a, c) {
      (this.X = Z("x", d)),
        (this.Y = Z("y", a, !0)),
        (this.Z = Z("z", c)),
        Object.freeze(this);
    }
    static CURVE() {
      return i;
    }
    static fromAffine(d) {
      let { x: a, y: c } = d || {};
      if (!d || !t.isValid(a) || !t.isValid(c))
        throw new Error("invalid affine point");
      if (d instanceof _) throw new Error("projective point not allowed");
      return t.is0(a) && t.is0(c) ? _.ZERO : new _(a, c, t.ONE);
    }
    static fromBytes(d) {
      let a = _.fromAffine(p(G(d, void 0, "point")));
      return a.assertValidity(), a;
    }
    static fromHex(d) {
      return _.fromBytes(C("pointHex", d));
    }
    get x() {
      return this.toAffine().x;
    }
    get y() {
      return this.toAffine().y;
    }
    precompute(d = 8, a = !0) {
      return F.createCache(this, d), a || this.multiply(At), this;
    }
    assertValidity() {
      bt(this);
    }
    hasEvenY() {
      let { y: d } = this.toAffine();
      if (!t.isOdd) throw new Error("Field doesn't support isOdd");
      return !t.isOdd(d);
    }
    equals(d) {
      J(d);
      let { X: a, Y: c, Z: g } = this,
        { X: w, Y: B, Z: E } = d,
        b = t.eql(t.mul(a, E), t.mul(w, g)),
        v = t.eql(t.mul(c, E), t.mul(B, g));
      return b && v;
    }
    negate() {
      return new _(this.X, t.neg(this.Y), this.Z);
    }
    double() {
      let { a: d, b: a } = i,
        c = t.mul(a, At),
        { X: g, Y: w, Z: B } = this,
        E = t.ZERO,
        b = t.ZERO,
        v = t.ZERO,
        I = t.mul(g, g),
        V = t.mul(w, w),
        A = t.mul(B, B),
        O = t.mul(g, w);
      return (
        (O = t.add(O, O)),
        (v = t.mul(g, B)),
        (v = t.add(v, v)),
        (E = t.mul(d, v)),
        (b = t.mul(c, A)),
        (b = t.add(E, b)),
        (E = t.sub(V, b)),
        (b = t.add(V, b)),
        (b = t.mul(E, b)),
        (E = t.mul(O, E)),
        (v = t.mul(c, v)),
        (A = t.mul(d, A)),
        (O = t.sub(I, A)),
        (O = t.mul(d, O)),
        (O = t.add(O, v)),
        (v = t.add(I, I)),
        (I = t.add(v, I)),
        (I = t.add(I, A)),
        (I = t.mul(I, O)),
        (b = t.add(b, I)),
        (A = t.mul(w, B)),
        (A = t.add(A, A)),
        (I = t.mul(A, O)),
        (E = t.sub(E, I)),
        (v = t.mul(A, V)),
        (v = t.add(v, v)),
        (v = t.add(v, v)),
        new _(E, b, v)
      );
    }
    add(d) {
      J(d);
      let { X: a, Y: c, Z: g } = this,
        { X: w, Y: B, Z: E } = d,
        b = t.ZERO,
        v = t.ZERO,
        I = t.ZERO,
        V = i.a,
        A = t.mul(i.b, At),
        O = t.mul(a, w),
        N = t.mul(c, B),
        H = t.mul(g, E),
        k = t.add(a, c),
        T = t.add(w, B);
      (k = t.mul(k, T)),
        (T = t.add(O, N)),
        (k = t.sub(k, T)),
        (T = t.add(a, g));
      let K = t.add(w, E);
      return (
        (T = t.mul(T, K)),
        (K = t.add(O, H)),
        (T = t.sub(T, K)),
        (K = t.add(c, g)),
        (b = t.add(B, E)),
        (K = t.mul(K, b)),
        (b = t.add(N, H)),
        (K = t.sub(K, b)),
        (I = t.mul(V, T)),
        (b = t.mul(A, H)),
        (I = t.add(b, I)),
        (b = t.sub(N, I)),
        (I = t.add(N, I)),
        (v = t.mul(b, I)),
        (N = t.add(O, O)),
        (N = t.add(N, O)),
        (H = t.mul(V, H)),
        (T = t.mul(A, T)),
        (N = t.add(N, H)),
        (H = t.sub(O, H)),
        (H = t.mul(V, H)),
        (T = t.add(T, H)),
        (O = t.mul(N, T)),
        (v = t.add(v, O)),
        (O = t.mul(K, T)),
        (b = t.mul(k, b)),
        (b = t.sub(b, O)),
        (O = t.mul(k, N)),
        (I = t.mul(K, I)),
        (I = t.add(I, O)),
        new _(b, v, I)
      );
    }
    subtract(d) {
      return this.add(d.negate());
    }
    is0() {
      return this.equals(_.ZERO);
    }
    multiply(d) {
      let { endo: a } = n;
      if (!o.isValidNot0(d)) throw new Error("invalid scalar: out of range");
      let c,
        g,
        w = (B) => F.cached(this, B, (E) => Rt(_, E));
      if (a) {
        let { k1neg: B, k1: E, k2neg: b, k2: v } = $(d),
          { p: I, f: V } = w(E),
          { p: A, f: O } = w(v);
        (g = V.add(O)), (c = ot(a.beta, I, A, B, b));
      } else {
        let { p: B, f: E } = w(d);
        (c = B), (g = E);
      }
      return Rt(_, [c, g])[0];
    }
    multiplyUnsafe(d) {
      let { endo: a } = n,
        c = this;
      if (!o.isValid(d)) throw new Error("invalid scalar: out of range");
      if (d === X || c.is0()) return _.ZERO;
      if (d === dt) return c;
      if (F.hasCache(this)) return this.multiply(d);
      if (a) {
        let { k1neg: g, k1: w, k2neg: B, k2: E } = $(d),
          { p1: b, p2: v } = ve(_, c, w, E);
        return ot(a.beta, b, v, g, B);
      } else return F.unsafe(c, d);
    }
    multiplyAndAddUnsafe(d, a, c) {
      let g = this.multiplyUnsafe(a).add(d.multiplyUnsafe(c));
      return g.is0() ? void 0 : g;
    }
    toAffine(d) {
      return rt(this, d);
    }
    isTorsionFree() {
      let { isTorsionFree: d } = n;
      return s === dt ? !0 : d ? d(_, this) : F.unsafe(this, u).is0();
    }
    clearCofactor() {
      let { clearCofactor: d } = n;
      return s === dt ? this : d ? d(_, this) : this.multiplyUnsafe(s);
    }
    isSmallOrder() {
      return this.multiplyUnsafe(s).is0();
    }
    toBytes(d = !0) {
      return mt(d, "isCompressed"), this.assertValidity(), h(_, this, d);
    }
    toHex(d = !0) {
      return D(this.toBytes(d));
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
    toRawBytes(d = !0) {
      return this.toBytes(d);
    }
    _setWindowSize(d) {
      this.precompute(d);
    }
    static normalizeZ(d) {
      return Rt(_, d);
    }
    static msm(d, a) {
      return xe(_, o, d, a);
    }
    static fromPrivateKey(d) {
      return _.BASE.multiply(lt(o, d));
    }
  }
  (_.BASE = new _(i.Gx, i.Gy, t.ONE)),
    (_.ZERO = new _(t.ZERO, t.ONE, t.ZERO)),
    (_.Fp = t),
    (_.Fn = o);
  let pt = o.BITS,
    F = new qt(_, n.endo ? Math.ceil(pt / 2) : pt);
  return _.BASE.precompute(8), _;
}
function qe(e) {
  return Uint8Array.of(e ? 2 : 3);
}
function Re(e, n) {
  return {
    secretKey: n.BYTES,
    publicKey: 1 + e.BYTES,
    publicKeyUncompressed: 1 + 2 * e.BYTES,
    publicKeyHasPrefix: !0,
    signature: 2 * n.BYTES,
  };
}
function Ge(e, n = {}) {
  let { Fn: r } = e,
    t = n.randomBytes || Bt,
    o = Object.assign(Re(e.Fp, r), { seed: jt(r.ORDER) });
  function i(h) {
    try {
      return !!lt(r, h);
    } catch {
      return !1;
    }
  }
  function s(h, p) {
    let { publicKey: x, publicKeyUncompressed: R } = o;
    try {
      let U = h.length;
      return (p === !0 && U !== x) || (p === !1 && U !== R)
        ? !1
        : !!e.fromBytes(h);
    } catch {
      return !1;
    }
  }
  function u(h = t(o.seed)) {
    return Yt(G(h, o.seed, "seed"), r.ORDER);
  }
  function l(h, p = !0) {
    return e.BASE.multiply(lt(r, h)).toBytes(p);
  }
  function m(h) {
    let p = u(h);
    return { secretKey: p, publicKey: l(p) };
  }
  function y(h) {
    if (typeof h == "bigint") return !1;
    if (h instanceof e) return !0;
    let { secretKey: p, publicKey: x, publicKeyUncompressed: R } = o;
    if (r.allowedLengths || p === x) return;
    let U = C("key", h).length;
    return U === x || U === R;
  }
  function S(h, p, x = !0) {
    if (y(h) === !0) throw new Error("first arg must be private key");
    if (y(p) === !1) throw new Error("second arg must be public key");
    let R = lt(r, h);
    return e.fromHex(p).multiply(R).toBytes(x);
  }
  return Object.freeze({
    getPublicKey: l,
    getSharedSecret: S,
    keygen: m,
    Point: e,
    utils: {
      isValidSecretKey: i,
      isValidPublicKey: s,
      randomSecretKey: u,
      isValidPrivateKey: i,
      randomPrivateKey: u,
      normPrivateKeyToScalar: (h) => lt(r, h),
      precompute(h = 8, p = e.BASE) {
        return p.precompute(h, !1);
      },
    },
    lengths: o,
  });
}
function We(e, n, r = {}) {
  te(n),
    wt(
      r,
      {},
      {
        hmac: "function",
        lowS: "boolean",
        randomBytes: "function",
        bits2int: "function",
        bits2int_modN: "function",
      }
    );
  let t = r.randomBytes || Bt,
    o = r.hmac || ((a, ...c) => ne(n, a, z(...c))),
    { Fp: i, Fn: s } = e,
    { ORDER: u, BITS: l } = s,
    {
      keygen: m,
      getPublicKey: y,
      getSharedSecret: S,
      utils: f,
      lengths: h,
    } = Ge(e, r),
    p = {
      prehash: !1,
      lowS: typeof r.lowS == "boolean" ? r.lowS : !1,
      format: void 0,
      extraEntropy: !1,
    },
    x = "compact";
  function R(a) {
    let c = u >> dt;
    return a > c;
  }
  function U(a, c) {
    if (!s.isValidNot0(c))
      throw new Error(`invalid signature ${a}: out of range 1..Point.Fn.ORDER`);
    return c;
  }
  function ht(a, c) {
    $t(c);
    let g = h.signature,
      w = c === "compact" ? g : c === "recovered" ? g + 1 : void 0;
    return G(a, w, `${c} signature`);
  }
  class Z {
    constructor(c, g, w) {
      (this.r = U("r", c)),
        (this.s = U("s", g)),
        w != null && (this.recovery = w),
        Object.freeze(this);
    }
    static fromBytes(c, g = x) {
      ht(c, g);
      let w;
      if (g === "der") {
        let { r: v, s: I } = P.toSig(G(c));
        return new Z(v, I);
      }
      g === "recovered" && ((w = c[0]), (g = "compact"), (c = c.subarray(1)));
      let B = s.BYTES,
        E = c.subarray(0, B),
        b = c.subarray(B, B * 2);
      return new Z(s.fromBytes(E), s.fromBytes(b), w);
    }
    static fromHex(c, g) {
      return this.fromBytes(tt(c), g);
    }
    addRecoveryBit(c) {
      return new Z(this.r, this.s, c);
    }
    recoverPublicKey(c) {
      let g = i.ORDER,
        { r: w, s: B, recovery: E } = this;
      if (E == null || ![0, 1, 2, 3].includes(E))
        throw new Error("recovery id invalid");
      if (u * Oe < g && E > 1)
        throw new Error("recovery id is ambiguous for h>1 curve");
      let v = E === 2 || E === 3 ? w + u : w;
      if (!i.isValid(v)) throw new Error("recovery id 2 or 3 invalid");
      let I = i.toBytes(v),
        V = e.fromBytes(z(qe((E & 1) === 0), I)),
        A = s.inv(v),
        O = $(C("msgHash", c)),
        N = s.create(-O * A),
        H = s.create(B * A),
        k = e.BASE.multiplyUnsafe(N).add(V.multiplyUnsafe(H));
      if (k.is0()) throw new Error("point at infinify");
      return k.assertValidity(), k;
    }
    hasHighS() {
      return R(this.s);
    }
    toBytes(c = x) {
      if (($t(c), c === "der")) return tt(P.hexFromSig(this));
      let g = s.toBytes(this.r),
        w = s.toBytes(this.s);
      if (c === "recovered") {
        if (this.recovery == null)
          throw new Error("recovery bit must be present");
        return z(Uint8Array.of(this.recovery), g, w);
      }
      return z(g, w);
    }
    toHex(c) {
      return D(this.toBytes(c));
    }
    assertValidity() {}
    static fromCompact(c) {
      return Z.fromBytes(C("sig", c), "compact");
    }
    static fromDER(c) {
      return Z.fromBytes(C("sig", c), "der");
    }
    normalizeS() {
      return this.hasHighS()
        ? new Z(this.r, s.neg(this.s), this.recovery)
        : this;
    }
    toDERRawBytes() {
      return this.toBytes("der");
    }
    toDERHex() {
      return D(this.toBytes("der"));
    }
    toCompactRawBytes() {
      return this.toBytes("compact");
    }
    toCompactHex() {
      return D(this.toBytes("compact"));
    }
  }
  let J =
      r.bits2int ||
      function (c) {
        if (c.length > 8192) throw new Error("input is too large");
        let g = at(c),
          w = c.length * 8 - l;
        return w > 0 ? g >> BigInt(w) : g;
      },
    $ =
      r.bits2int_modN ||
      function (c) {
        return s.create(J(c));
      },
    rt = W(l);
  function bt(a) {
    return se("num < 2^" + l, a, X, rt), s.toBytes(a);
  }
  function ot(a, c) {
    return (
      G(a, void 0, "message"), c ? G(n(a), void 0, "prehashed message") : a
    );
  }
  function _(a, c, g) {
    if (["recovered", "canonical"].some((N) => N in g))
      throw new Error("sign() legacy options not supported");
    let { lowS: w, prehash: B, extraEntropy: E } = Xt(g, p);
    a = ot(a, B);
    let b = $(a),
      v = lt(s, c),
      I = [bt(v), bt(b)];
    if (E != null && E !== !1) {
      let N = E === !0 ? t(h.secretKey) : E;
      I.push(C("extraEntropy", N));
    }
    let V = z(...I),
      A = b;
    function O(N) {
      let H = J(N);
      if (!s.isValidNot0(H)) return;
      let k = s.inv(H),
        T = e.BASE.multiply(H).toAffine(),
        K = s.create(T.x);
      if (K === X) return;
      let Et = s.create(k * s.create(A + K * v));
      if (Et === X) return;
      let Jt = (T.x === K ? 0 : 2) | Number(T.y & dt),
        Ft = Et;
      return w && R(Et) && ((Ft = s.neg(Et)), (Jt ^= 1)), new Z(K, Ft, Jt);
    }
    return { seed: V, k2sig: O };
  }
  function pt(a, c, g = {}) {
    a = C("message", a);
    let { seed: w, k2sig: B } = _(a, c, g);
    return ie(n.outputLen, s.BYTES, o)(w, B);
  }
  function F(a) {
    let c,
      g = typeof a == "string" || ft(a),
      w =
        !g &&
        a !== null &&
        typeof a == "object" &&
        typeof a.r == "bigint" &&
        typeof a.s == "bigint";
    if (!g && !w)
      throw new Error(
        "invalid signature, expected Uint8Array, hex string or Signature instance"
      );
    if (w) c = new Z(a.r, a.s);
    else if (g) {
      try {
        c = Z.fromBytes(C("sig", a), "der");
      } catch (B) {
        if (!(B instanceof P.Err)) throw B;
      }
      if (!c)
        try {
          c = Z.fromBytes(C("sig", a), "compact");
        } catch {
          return !1;
        }
    }
    return c || !1;
  }
  function q(a, c, g, w = {}) {
    let { lowS: B, prehash: E, format: b } = Xt(w, p);
    if (((g = C("publicKey", g)), (c = ot(C("message", c), E)), "strict" in w))
      throw new Error("options.strict was renamed to lowS");
    let v = b === void 0 ? F(a) : Z.fromBytes(C("sig", a), b);
    if (v === !1) return !1;
    try {
      let I = e.fromBytes(g);
      if (B && v.hasHighS()) return !1;
      let { r: V, s: A } = v,
        O = $(c),
        N = s.inv(A),
        H = s.create(O * N),
        k = s.create(V * N),
        T = e.BASE.multiplyUnsafe(H).add(I.multiplyUnsafe(k));
      return T.is0() ? !1 : s.create(T.x) === V;
    } catch {
      return !1;
    }
  }
  function d(a, c, g = {}) {
    let { prehash: w } = Xt(g, p);
    return (
      (c = ot(c, w)), Z.fromBytes(a, "recovered").recoverPublicKey(c).toBytes()
    );
  }
  return Object.freeze({
    keygen: m,
    getPublicKey: y,
    getSharedSecret: S,
    utils: f,
    lengths: h,
    Point: e,
    sign: pt,
    verify: q,
    recoverPublicKey: d,
    Signature: Z,
    hash: n,
  });
}
function Qe(e) {
  let n = { a: e.a, b: e.b, p: e.Fp.ORDER, n: e.n, h: e.h, Gx: e.Gx, Gy: e.Gy },
    r = e.Fp,
    t = e.allowedPrivateKeyLengths
      ? Array.from(
          new Set(e.allowedPrivateKeyLengths.map((s) => Math.ceil(s / 2)))
        )
      : void 0,
    o = Q(n.n, {
      BITS: e.nBitLength,
      allowedLengths: t,
      modFromBytes: e.wrapPrivateKey,
    }),
    i = {
      Fp: r,
      Fn: o,
      allowInfinityPoint: e.allowInfinityPoint,
      endo: e.endo,
      isTorsionFree: e.isTorsionFree,
      clearCofactor: e.clearCofactor,
      fromBytes: e.fromBytes,
      toBytes: e.toBytes,
    };
  return { CURVE: n, curveOpts: i };
}
function Je(e) {
  let { CURVE: n, curveOpts: r } = Qe(e),
    t = {
      hmac: e.hmac,
      randomBytes: e.randomBytes,
      lowS: e.lowS,
      bits2int: e.bits2int,
      bits2int_modN: e.bits2int_modN,
    };
  return { CURVE: n, curveOpts: r, hash: e.hash, ecdsaOpts: t };
}
function Fe(e, n) {
  let r = n.Point;
  return Object.assign({}, n, {
    ProjectivePoint: r,
    CURVE: Object.assign({}, e, _t(r.Fn.ORDER, r.Fn.BITS)),
  });
}
function Ae(e) {
  let { CURVE: n, curveOpts: r, hash: t, ecdsaOpts: o } = Je(e),
    i = $e(n, r),
    s = We(i, t, o);
  return Fe(e, s);
}
var _e,
  Gt,
  P,
  X,
  dt,
  Oe,
  At,
  Xe,
  Ne = ct(() => {
    "use strict";
    He();
    Ut();
    St();
    Ie();
    Ot();
    _e = (e, n) => (e + (e >= 0 ? n : -n) / Oe) / n;
    (Gt = class extends Error {
      constructor(n = "") {
        super(n);
      }
    }),
      (P = {
        Err: Gt,
        _tlv: {
          encode: (e, n) => {
            let { Err: r } = P;
            if (e < 0 || e > 256) throw new r("tlv.encode: wrong tag");
            if (n.length & 1) throw new r("tlv.encode: unpadded data");
            let t = n.length / 2,
              o = gt(t);
            if ((o.length / 2) & 128)
              throw new r("tlv.encode: long form length too big");
            let i = t > 127 ? gt((o.length / 2) | 128) : "";
            return gt(e) + i + o + n;
          },
          decode(e, n) {
            let { Err: r } = P,
              t = 0;
            if (e < 0 || e > 256) throw new r("tlv.encode: wrong tag");
            if (n.length < 2 || n[t++] !== e)
              throw new r("tlv.decode: wrong tlv");
            let o = n[t++],
              i = !!(o & 128),
              s = 0;
            if (!i) s = o;
            else {
              let l = o & 127;
              if (!l)
                throw new r(
                  "tlv.decode(long): indefinite length not supported"
                );
              if (l > 4)
                throw new r("tlv.decode(long): byte length is too big");
              let m = n.subarray(t, t + l);
              if (m.length !== l)
                throw new r("tlv.decode: length bytes not complete");
              if (m[0] === 0)
                throw new r("tlv.decode(long): zero leftmost byte");
              for (let y of m) s = (s << 8) | y;
              if (((t += l), s < 128))
                throw new r("tlv.decode(long): not minimal encoding");
            }
            let u = n.subarray(t, t + s);
            if (u.length !== s) throw new r("tlv.decode: wrong value length");
            return { v: u, l: n.subarray(t + s) };
          },
        },
        _int: {
          encode(e) {
            let { Err: n } = P;
            if (e < X)
              throw new n("integer: negative integers are not allowed");
            let r = gt(e);
            if ((Number.parseInt(r[0], 16) & 8 && (r = "00" + r), r.length & 1))
              throw new n("unexpected DER parsing assertion: unpadded hex");
            return r;
          },
          decode(e) {
            let { Err: n } = P;
            if (e[0] & 128) throw new n("invalid signature integer: negative");
            if (e[0] === 0 && !(e[1] & 128))
              throw new n(
                "invalid signature integer: unnecessary leading zero"
              );
            return at(e);
          },
        },
        toSig(e) {
          let { Err: n, _int: r, _tlv: t } = P,
            o = C("signature", e),
            { v: i, l: s } = t.decode(48, o);
          if (s.length)
            throw new n("invalid signature: left bytes after parsing");
          let { v: u, l } = t.decode(2, i),
            { v: m, l: y } = t.decode(2, l);
          if (y.length)
            throw new n("invalid signature: left bytes after parsing");
          return { r: r.decode(u), s: r.decode(m) };
        },
        hexFromSig(e) {
          let { _tlv: n, _int: r } = P,
            t = n.encode(2, r.encode(e.r)),
            o = n.encode(2, r.encode(e.s)),
            i = t + o;
          return n.encode(48, i);
        },
      }),
      (X = BigInt(0)),
      (dt = BigInt(1)),
      (Oe = BigInt(2)),
      (At = BigInt(3)),
      (Xe = BigInt(4));
  });
function Te(e, n) {
  let r = (t) => Ae(it(st({}, e), { hash: t }));
  return it(st({}, r(n)), { create: r });
}
var Ue = ct(() => {
  "use strict";
  Ne();
});
function en(e) {
  let n = Qt.p,
    r = BigInt(3),
    t = BigInt(6),
    o = BigInt(11),
    i = BigInt(22),
    s = BigInt(23),
    u = BigInt(44),
    l = BigInt(88),
    m = (e * e * e) % n,
    y = (m * m * e) % n,
    S = (Y(y, r, n) * y) % n,
    f = (Y(S, r, n) * y) % n,
    h = (Y(f, Ze, n) * m) % n,
    p = (Y(h, o, n) * h) % n,
    x = (Y(p, i, n) * p) % n,
    R = (Y(x, u, n) * x) % n,
    U = (Y(R, l, n) * R) % n,
    ht = (Y(U, u, n) * x) % n,
    Z = (Y(ht, r, n) * y) % n,
    J = (Y(Z, s, n) * p) % n,
    $ = (Y(J, t, n) * m) % n,
    rt = Y($, Ze, n);
  if (!Wt.eql(Wt.sqr(rt), e)) throw new Error("Cannot find square root");
  return rt;
}
var Qt,
  tn,
  Ze,
  Wt,
  Nn,
  nn = ct(() => {
    "use strict";
    Ve();
    Ue();
    Ot();
    (Qt = {
      p: BigInt(
        "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"
      ),
      n: BigInt(
        "0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"
      ),
      h: BigInt(1),
      a: BigInt(0),
      b: BigInt(7),
      Gx: BigInt(
        "0x79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"
      ),
      Gy: BigInt(
        "0x483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8"
      ),
    }),
      (tn = {
        beta: BigInt(
          "0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"
        ),
        basises: [
          [
            BigInt("0x3086d221a7d46bcde86c90e49284eb15"),
            -BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),
          ],
          [
            BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),
            BigInt("0x3086d221a7d46bcde86c90e49284eb15"),
          ],
        ],
      }),
      (Ze = BigInt(2));
    (Wt = Q(Qt.p, { sqrt: en })),
      (Nn = Te(it(st({}, Qt), { Fp: Wt, lowS: !0, endo: tn }), ee));
  });
export {
  mt as a,
  G as b,
  Lt as c,
  C as d,
  cn as e,
  fn as f,
  se as g,
  wt as h,
  Ct as i,
  St as j,
  j as k,
  Y as l,
  dn as m,
  Q as n,
  Ot as o,
  Rt as p,
  qt as q,
  xe as r,
  Se as s,
  Ie as t,
  Te as u,
  Ue as v,
  Nn as w,
  nn as x,
};
