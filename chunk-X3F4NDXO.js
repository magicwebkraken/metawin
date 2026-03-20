import { a as me, b as He } from "./chunk-JKZLGYQN.js";
import { c as vt, f as je } from "./chunk-EEU3LH2V.js";
import {
  a as Vt,
  b as mt,
  c as wt,
  d as xt,
  e as Nt,
  f as jt,
  g as D,
  h as Ht,
  i as F,
  j as Kt,
  k as P,
  l as W,
  m as Rt,
  n as gt,
  o as tt,
  p as de,
  q as at,
  r as he,
  s as et,
  t as Yt,
} from "./chunk-TRLFM7P4.js";
import { I as ue, L as _t, M as Ut, u as le } from "./chunk-QMRWXCSQ.js";
import { a as V, b as $ } from "./chunk-VNDKUXGB.js";
je();
Ut();
He();
Ut();
Ut();
var K = BigInt(0),
  j = BigInt(1),
  lt = BigInt(2),
  Ke = BigInt(3),
  ge = BigInt(4),
  be = BigInt(5),
  ye = BigInt(8);
function z(t, n) {
  let e = t % n;
  return e >= K ? e : n + e;
}
function G(t, n, e) {
  let r = t;
  for (; n-- > K; ) (r *= r), (r %= e);
  return r;
}
function Tt(t, n) {
  if (t === K) throw new Error("invert: expected non-zero number");
  if (n <= K) throw new Error("invert: expected positive modulus, got " + n);
  let e = z(t, n),
    r = n,
    s = K,
    i = j,
    c = j,
    a = K;
  for (; e !== K; ) {
    let l = r / e,
      d = r % e,
      p = s - c * l,
      x = i - a * l;
    (r = e), (e = d), (s = c), (i = a), (c = p), (a = x);
  }
  if (r !== j) throw new Error("invert: does not exist");
  return z(s, n);
}
function pe(t, n) {
  let e = (t.ORDER + j) / ge,
    r = t.pow(n, e);
  if (!t.eql(t.sqr(r), n)) throw new Error("Cannot find square root");
  return r;
}
function Ye(t, n) {
  let e = (t.ORDER - be) / ye,
    r = t.mul(n, lt),
    s = t.pow(r, e),
    i = t.mul(n, s),
    c = t.mul(t.mul(i, lt), s),
    a = t.mul(i, t.sub(c, t.ONE));
  if (!t.eql(t.sqr(a), n)) throw new Error("Cannot find square root");
  return a;
}
function De(t) {
  if (t < BigInt(3)) throw new Error("sqrt is not defined for small field");
  let n = t - j,
    e = 0;
  for (; n % lt === K; ) (n /= lt), e++;
  let r = lt,
    s = Bt(t);
  for (; we(s, r) === 1; )
    if (r++ > 1e3)
      throw new Error("Cannot find square root: probably non-prime P");
  if (e === 1) return pe;
  let i = s.pow(r, n),
    c = (n + j) / lt;
  return function (o, l) {
    if (o.is0(l)) return l;
    if (we(o, l) !== 1) throw new Error("Cannot find square root");
    let d = e,
      p = o.mul(o.ONE, i),
      x = o.pow(l, n),
      v = o.pow(l, c);
    for (; !o.eql(x, o.ONE); ) {
      if (o.is0(x)) return o.ZERO;
      let N = 1,
        w = o.sqr(x);
      for (; !o.eql(w, o.ONE); )
        if ((N++, (w = o.sqr(w)), N === d))
          throw new Error("Cannot find square root");
      let C = j << BigInt(d - N - 1),
        A = o.pow(p, C);
      (d = N), (p = o.sqr(A)), (x = o.mul(x, p)), (v = o.mul(v, A));
    }
    return v;
  };
}
function We(t) {
  return t % ge === Ke ? pe : t % ye === be ? Ye : De(t);
}
var Ge = [
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
function Zt(t) {
  let n = {
      ORDER: "bigint",
      MASK: "bigint",
      BYTES: "isSafeInteger",
      BITS: "isSafeInteger",
    },
    e = Ge.reduce((r, s) => ((r[s] = "function"), r), n);
  return et(t, e);
}
function Xe(t, n, e) {
  if (e < K) throw new Error("invalid exponent, negatives unsupported");
  if (e === K) return t.ONE;
  if (e === j) return n;
  let r = t.ONE,
    s = n;
  for (; e > K; ) e & j && (r = t.mul(r, s)), (s = t.sqr(s)), (e >>= j);
  return r;
}
function bt(t, n, e = !1) {
  let r = new Array(n.length).fill(e ? t.ZERO : void 0),
    s = n.reduce(
      (c, a, o) => (t.is0(a) ? c : ((r[o] = c), t.mul(c, a))),
      t.ONE
    ),
    i = t.inv(s);
  return (
    n.reduceRight(
      (c, a, o) => (t.is0(a) ? c : ((r[o] = t.mul(c, r[o])), t.mul(c, a))),
      i
    ),
    r
  );
}
function we(t, n) {
  let e = (t.ORDER - j) / lt,
    r = t.pow(n, e),
    s = t.eql(r, t.ONE),
    i = t.eql(r, t.ZERO),
    c = t.eql(r, t.neg(t.ONE));
  if (!s && !i && !c) throw new Error("invalid Legendre symbol result");
  return s ? 1 : i ? 0 : -1;
}
function Dt(t, n) {
  n !== void 0 && le(n);
  let e = n !== void 0 ? n : t.toString(2).length,
    r = Math.ceil(e / 8);
  return { nBitLength: e, nByteLength: r };
}
function Bt(t, n, e = !1, r = {}) {
  if (t <= K) throw new Error("invalid field: expected ORDER > 0, got " + t);
  let { nBitLength: s, nByteLength: i } = Dt(t, n);
  if (i > 2048)
    throw new Error("invalid field: expected ORDER of <= 2048 bytes");
  let c,
    a = Object.freeze({
      ORDER: t,
      isLE: e,
      BITS: s,
      BYTES: i,
      MASK: at(s),
      ZERO: K,
      ONE: j,
      create: (o) => z(o, t),
      isValid: (o) => {
        if (typeof o != "bigint")
          throw new Error(
            "invalid field element: expected bigint, got " + typeof o
          );
        return K <= o && o < t;
      },
      is0: (o) => o === K,
      isOdd: (o) => (o & j) === j,
      neg: (o) => z(-o, t),
      eql: (o, l) => o === l,
      sqr: (o) => z(o * o, t),
      add: (o, l) => z(o + l, t),
      sub: (o, l) => z(o - l, t),
      mul: (o, l) => z(o * l, t),
      pow: (o, l) => Xe(a, o, l),
      div: (o, l) => z(o * Tt(l, t), t),
      sqrN: (o) => o * o,
      addN: (o, l) => o + l,
      subN: (o, l) => o - l,
      mulN: (o, l) => o * l,
      inv: (o) => Tt(o, t),
      sqrt: r.sqrt || ((o) => (c || (c = We(t)), c(a, o))),
      toBytes: (o) => (e ? Kt(o, i) : F(o, i)),
      fromBytes: (o) => {
        if (o.length !== i)
          throw new Error(
            "Field.fromBytes: expected " + i + " bytes, got " + o.length
          );
        return e ? Ht(o) : D(o);
      },
      invertBatch: (o) => bt(a, o),
      cmov: (o, l, d) => (d ? l : o),
    });
  return Object.freeze(a);
}
function Ee(t) {
  if (typeof t != "bigint") throw new Error("field order must be bigint");
  let n = t.toString(2).length;
  return Math.ceil(n / 8);
}
function Wt(t) {
  let n = Ee(t);
  return n + Math.ceil(n / 2);
}
function xe(t, n, e = !1) {
  let r = t.length,
    s = Ee(n),
    i = Wt(n);
  if (r < 16 || r < i || r > 1024)
    throw new Error("expected " + i + "-1024 bytes of input, got " + r);
  let c = e ? Ht(t) : D(t),
    a = z(c, n - j) + j;
  return e ? Kt(a, s) : F(a, s);
}
var ve = BigInt(0),
  $t = BigInt(1);
function Gt(t, n) {
  let e = n.negate();
  return t ? e : n;
}
function Se(t, n) {
  if (!Number.isSafeInteger(t) || t <= 0 || t > n)
    throw new Error("invalid window size, expected [1.." + n + "], got W=" + t);
}
function Xt(t, n) {
  Se(t, n);
  let e = Math.ceil(n / t) + 1,
    r = 2 ** (t - 1),
    s = 2 ** t,
    i = at(t),
    c = BigInt(t);
  return { windows: e, windowSize: r, mask: i, maxNumber: s, shiftBy: c };
}
function Be(t, n, e) {
  let { windowSize: r, mask: s, maxNumber: i, shiftBy: c } = e,
    a = Number(t & s),
    o = t >> c;
  a > r && ((a -= i), (o += $t));
  let l = n * r,
    d = l + Math.abs(a) - 1,
    p = a === 0,
    x = a < 0,
    v = n % 2 !== 0;
  return { nextN: o, offset: d, isZero: p, isNeg: x, isNegF: v, offsetF: l };
}
function Qe(t, n) {
  if (!Array.isArray(t)) throw new Error("array expected");
  t.forEach((e, r) => {
    if (!(e instanceof n)) throw new Error("invalid point at index " + r);
  });
}
function Je(t, n) {
  if (!Array.isArray(t)) throw new Error("array of scalars expected");
  t.forEach((e, r) => {
    if (!n.isValid(e)) throw new Error("invalid scalar at index " + r);
  });
}
var Qt = new WeakMap(),
  Oe = new WeakMap();
function Jt(t) {
  return Oe.get(t) || 1;
}
function Ae(t, n) {
  return {
    constTimeNegate: Gt,
    hasPrecomputes(e) {
      return Jt(e) !== 1;
    },
    unsafeLadder(e, r, s = t.ZERO) {
      let i = e;
      for (; r > ve; ) r & $t && (s = s.add(i)), (i = i.double()), (r >>= $t);
      return s;
    },
    precomputeWindow(e, r) {
      let { windows: s, windowSize: i } = Xt(r, n),
        c = [],
        a = e,
        o = a;
      for (let l = 0; l < s; l++) {
        (o = a), c.push(o);
        for (let d = 1; d < i; d++) (o = o.add(a)), c.push(o);
        a = o.double();
      }
      return c;
    },
    wNAF(e, r, s) {
      let i = t.ZERO,
        c = t.BASE,
        a = Xt(e, n);
      for (let o = 0; o < a.windows; o++) {
        let {
          nextN: l,
          offset: d,
          isZero: p,
          isNeg: x,
          isNegF: v,
          offsetF: N,
        } = Be(s, o, a);
        (s = l), p ? (c = c.add(Gt(v, r[N]))) : (i = i.add(Gt(x, r[d])));
      }
      return { p: i, f: c };
    },
    wNAFUnsafe(e, r, s, i = t.ZERO) {
      let c = Xt(e, n);
      for (let a = 0; a < c.windows && s !== ve; a++) {
        let { nextN: o, offset: l, isZero: d, isNeg: p } = Be(s, a, c);
        if (((s = o), !d)) {
          let x = r[l];
          i = i.add(p ? x.negate() : x);
        }
      }
      return i;
    },
    getPrecomputes(e, r, s) {
      let i = Qt.get(r);
      return (
        i || ((i = this.precomputeWindow(r, e)), e !== 1 && Qt.set(r, s(i))), i
      );
    },
    wNAFCached(e, r, s) {
      let i = Jt(e);
      return this.wNAF(i, this.getPrecomputes(i, e, s), r);
    },
    wNAFCachedUnsafe(e, r, s, i) {
      let c = Jt(e);
      return c === 1
        ? this.unsafeLadder(e, r, i)
        : this.wNAFUnsafe(c, this.getPrecomputes(c, e, s), r, i);
    },
    setWindowSize(e, r) {
      Se(r, n), Oe.set(e, r), Qt.delete(e);
    },
  };
}
function qe(t, n, e, r) {
  Qe(e, t), Je(r, n);
  let s = e.length,
    i = r.length;
  if (s !== i)
    throw new Error("arrays of points and scalars must have equal length");
  let c = t.ZERO,
    a = de(BigInt(s)),
    o = 1;
  a > 12 ? (o = a - 3) : a > 4 ? (o = a - 2) : a > 0 && (o = 2);
  let l = at(o),
    d = new Array(Number(l) + 1).fill(c),
    p = Math.floor((n.BITS - 1) / o) * o,
    x = c;
  for (let v = p; v >= 0; v -= o) {
    d.fill(c);
    for (let w = 0; w < i; w++) {
      let C = r[w],
        A = Number((C >> BigInt(v)) & l);
      d[A] = d[A].add(e[w]);
    }
    let N = c;
    for (let w = d.length - 1, C = c; w > 0; w--)
      (C = C.add(d[w])), (N = N.add(C));
    if (((x = x.add(N)), v !== 0)) for (let w = 0; w < o; w++) x = x.double();
  }
  return x;
}
function Ft(t) {
  return (
    Zt(t.Fp),
    et(
      t,
      { n: "bigint", h: "bigint", Gx: "field", Gy: "field" },
      { nBitLength: "isSafeInteger", nByteLength: "isSafeInteger" }
    ),
    Object.freeze($(V(V({}, Dt(t.n, t.nBitLength)), t), { p: t.Fp.ORDER }))
  );
}
function Ie(t) {
  t.lowS !== void 0 && wt("lowS", t.lowS),
    t.prehash !== void 0 && wt("prehash", t.prehash);
}
function $e(t) {
  let n = Ft(t);
  et(
    n,
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
  let { endo: e, Fp: r, a: s } = n;
  if (e) {
    if (!r.eql(s, r.ZERO)) throw new Error("invalid endo: CURVE.a must be 0");
    if (
      typeof e != "object" ||
      typeof e.beta != "bigint" ||
      typeof e.splitScalar != "function"
    )
      throw new Error(
        'invalid endo: expected "beta": bigint and "splitScalar": function'
      );
  }
  return Object.freeze(V({}, n));
}
var ee = class extends Error {
    constructor(n = "") {
      super(n);
    }
  },
  nt = {
    Err: ee,
    _tlv: {
      encode: (t, n) => {
        let { Err: e } = nt;
        if (t < 0 || t > 256) throw new e("tlv.encode: wrong tag");
        if (n.length & 1) throw new e("tlv.encode: unpadded data");
        let r = n.length / 2,
          s = xt(r);
        if ((s.length / 2) & 128)
          throw new e("tlv.encode: long form length too big");
        let i = r > 127 ? xt((s.length / 2) | 128) : "";
        return xt(t) + i + s + n;
      },
      decode(t, n) {
        let { Err: e } = nt,
          r = 0;
        if (t < 0 || t > 256) throw new e("tlv.encode: wrong tag");
        if (n.length < 2 || n[r++] !== t) throw new e("tlv.decode: wrong tlv");
        let s = n[r++],
          i = !!(s & 128),
          c = 0;
        if (!i) c = s;
        else {
          let o = s & 127;
          if (!o)
            throw new e("tlv.decode(long): indefinite length not supported");
          if (o > 4) throw new e("tlv.decode(long): byte length is too big");
          let l = n.subarray(r, r + o);
          if (l.length !== o)
            throw new e("tlv.decode: length bytes not complete");
          if (l[0] === 0) throw new e("tlv.decode(long): zero leftmost byte");
          for (let d of l) c = (c << 8) | d;
          if (((r += o), c < 128))
            throw new e("tlv.decode(long): not minimal encoding");
        }
        let a = n.subarray(r, r + c);
        if (a.length !== c) throw new e("tlv.decode: wrong value length");
        return { v: a, l: n.subarray(r + c) };
      },
    },
    _int: {
      encode(t) {
        let { Err: n } = nt;
        if (t < Q) throw new n("integer: negative integers are not allowed");
        let e = xt(t);
        if ((Number.parseInt(e[0], 16) & 8 && (e = "00" + e), e.length & 1))
          throw new n("unexpected DER parsing assertion: unpadded hex");
        return e;
      },
      decode(t) {
        let { Err: n } = nt;
        if (t[0] & 128) throw new n("invalid signature integer: negative");
        if (t[0] === 0 && !(t[1] & 128))
          throw new n("invalid signature integer: unnecessary leading zero");
        return D(t);
      },
    },
    toSig(t) {
      let { Err: n, _int: e, _tlv: r } = nt,
        s = P("signature", t),
        { v: i, l: c } = r.decode(48, s);
      if (c.length) throw new n("invalid signature: left bytes after parsing");
      let { v: a, l: o } = r.decode(2, i),
        { v: l, l: d } = r.decode(2, o);
      if (d.length) throw new n("invalid signature: left bytes after parsing");
      return { r: e.decode(a), s: e.decode(l) };
    },
    hexFromSig(t) {
      let { _tlv: n, _int: e } = nt,
        r = n.encode(2, e.encode(t.r)),
        s = n.encode(2, e.encode(t.s)),
        i = r + s;
      return n.encode(48, i);
    },
  };
function te(t, n) {
  return Nt(F(t, n));
}
var Q = BigInt(0),
  k = BigInt(1),
  ot = BigInt(2),
  St = BigInt(3),
  ne = BigInt(4);
function Fe(t) {
  let n = $e(t),
    { Fp: e } = n,
    r = Bt(n.n, n.nBitLength),
    s =
      n.toBytes ||
      ((g, f, m) => {
        let b = f.toAffine();
        return W(Uint8Array.from([4]), e.toBytes(b.x), e.toBytes(b.y));
      }),
    i =
      n.fromBytes ||
      ((g) => {
        let f = g.subarray(1),
          m = e.fromBytes(f.subarray(0, e.BYTES)),
          b = e.fromBytes(f.subarray(e.BYTES, 2 * e.BYTES));
        return { x: m, y: b };
      });
  function c(g) {
    let { a: f, b: m } = n,
      b = e.sqr(g),
      E = e.mul(b, g);
    return e.add(e.add(E, e.mul(g, f)), m);
  }
  function a(g, f) {
    let m = e.sqr(f),
      b = c(g);
    return e.eql(m, b);
  }
  if (!a(n.Gx, n.Gy)) throw new Error("bad curve params: generator point");
  let o = e.mul(e.pow(n.a, St), ne),
    l = e.mul(e.sqr(n.b), BigInt(27));
  if (e.is0(e.add(o, l))) throw new Error("bad curve params: a or b");
  function d(g) {
    return gt(g, k, n.n);
  }
  function p(g) {
    let {
      allowedPrivateKeyLengths: f,
      nByteLength: m,
      wrapPrivateKey: b,
      n: E,
    } = n;
    if (f && typeof g != "bigint") {
      if ((Vt(g) && (g = Nt(g)), typeof g != "string" || !f.includes(g.length)))
        throw new Error("invalid private key");
      g = g.padStart(m * 2, "0");
    }
    let q;
    try {
      q = typeof g == "bigint" ? g : D(P("private key", g, m));
    } catch {
      throw new Error(
        "invalid private key, expected hex or " + m + " bytes, got " + typeof g
      );
    }
    return b && (q = z(q, E)), tt("private key", q, k, E), q;
  }
  function x(g) {
    if (!(g instanceof w)) throw new Error("ProjectivePoint expected");
  }
  let v = Yt((g, f) => {
      let { px: m, py: b, pz: E } = g;
      if (e.eql(E, e.ONE)) return { x: m, y: b };
      let q = g.is0();
      f == null && (f = q ? e.ONE : e.inv(E));
      let Z = e.mul(m, f),
        L = e.mul(b, f),
        B = e.mul(E, f);
      if (q) return { x: e.ZERO, y: e.ZERO };
      if (!e.eql(B, e.ONE)) throw new Error("invZ was invalid");
      return { x: Z, y: L };
    }),
    N = Yt((g) => {
      if (g.is0()) {
        if (n.allowInfinityPoint && !e.is0(g.py)) return;
        throw new Error("bad point: ZERO");
      }
      let { x: f, y: m } = g.toAffine();
      if (!e.isValid(f) || !e.isValid(m))
        throw new Error("bad point: x or y not FE");
      if (!a(f, m)) throw new Error("bad point: equation left != right");
      if (!g.isTorsionFree())
        throw new Error("bad point: not in prime-order subgroup");
      return !0;
    });
  class w {
    constructor(f, m, b) {
      if (f == null || !e.isValid(f)) throw new Error("x required");
      if (m == null || !e.isValid(m) || e.is0(m)) throw new Error("y required");
      if (b == null || !e.isValid(b)) throw new Error("z required");
      (this.px = f), (this.py = m), (this.pz = b), Object.freeze(this);
    }
    static fromAffine(f) {
      let { x: m, y: b } = f || {};
      if (!f || !e.isValid(m) || !e.isValid(b))
        throw new Error("invalid affine point");
      if (f instanceof w) throw new Error("projective point not allowed");
      let E = (q) => e.eql(q, e.ZERO);
      return E(m) && E(b) ? w.ZERO : new w(m, b, e.ONE);
    }
    get x() {
      return this.toAffine().x;
    }
    get y() {
      return this.toAffine().y;
    }
    static normalizeZ(f) {
      let m = bt(
        e,
        f.map((b) => b.pz)
      );
      return f.map((b, E) => b.toAffine(m[E])).map(w.fromAffine);
    }
    static fromHex(f) {
      let m = w.fromAffine(i(P("pointHex", f)));
      return m.assertValidity(), m;
    }
    static fromPrivateKey(f) {
      return w.BASE.multiply(p(f));
    }
    static msm(f, m) {
      return qe(w, r, f, m);
    }
    _setWindowSize(f) {
      T.setWindowSize(this, f);
    }
    assertValidity() {
      N(this);
    }
    hasEvenY() {
      let { y: f } = this.toAffine();
      if (e.isOdd) return !e.isOdd(f);
      throw new Error("Field doesn't support isOdd");
    }
    equals(f) {
      x(f);
      let { px: m, py: b, pz: E } = this,
        { px: q, py: Z, pz: L } = f,
        B = e.eql(e.mul(m, L), e.mul(q, E)),
        R = e.eql(e.mul(b, L), e.mul(Z, E));
      return B && R;
    }
    negate() {
      return new w(this.px, e.neg(this.py), this.pz);
    }
    double() {
      let { a: f, b: m } = n,
        b = e.mul(m, St),
        { px: E, py: q, pz: Z } = this,
        L = e.ZERO,
        B = e.ZERO,
        R = e.ZERO,
        S = e.mul(E, E),
        U = e.mul(q, q),
        h = e.mul(Z, Z),
        u = e.mul(E, q);
      return (
        (u = e.add(u, u)),
        (R = e.mul(E, Z)),
        (R = e.add(R, R)),
        (L = e.mul(f, R)),
        (B = e.mul(b, h)),
        (B = e.add(L, B)),
        (L = e.sub(U, B)),
        (B = e.add(U, B)),
        (B = e.mul(L, B)),
        (L = e.mul(u, L)),
        (R = e.mul(b, R)),
        (h = e.mul(f, h)),
        (u = e.sub(S, h)),
        (u = e.mul(f, u)),
        (u = e.add(u, R)),
        (R = e.add(S, S)),
        (S = e.add(R, S)),
        (S = e.add(S, h)),
        (S = e.mul(S, u)),
        (B = e.add(B, S)),
        (h = e.mul(q, Z)),
        (h = e.add(h, h)),
        (S = e.mul(h, u)),
        (L = e.sub(L, S)),
        (R = e.mul(h, U)),
        (R = e.add(R, R)),
        (R = e.add(R, R)),
        new w(L, B, R)
      );
    }
    add(f) {
      x(f);
      let { px: m, py: b, pz: E } = this,
        { px: q, py: Z, pz: L } = f,
        B = e.ZERO,
        R = e.ZERO,
        S = e.ZERO,
        U = n.a,
        h = e.mul(n.b, St),
        u = e.mul(m, q),
        y = e.mul(b, Z),
        _ = e.mul(E, L),
        O = e.add(m, b),
        I = e.add(q, Z);
      (O = e.mul(O, I)),
        (I = e.add(u, y)),
        (O = e.sub(O, I)),
        (I = e.add(m, E));
      let M = e.add(q, L);
      return (
        (I = e.mul(I, M)),
        (M = e.add(u, _)),
        (I = e.sub(I, M)),
        (M = e.add(b, E)),
        (B = e.add(Z, L)),
        (M = e.mul(M, B)),
        (B = e.add(y, _)),
        (M = e.sub(M, B)),
        (S = e.mul(U, I)),
        (B = e.mul(h, _)),
        (S = e.add(B, S)),
        (B = e.sub(y, S)),
        (S = e.add(y, S)),
        (R = e.mul(B, S)),
        (y = e.add(u, u)),
        (y = e.add(y, u)),
        (_ = e.mul(U, _)),
        (I = e.mul(h, I)),
        (y = e.add(y, _)),
        (_ = e.sub(u, _)),
        (_ = e.mul(U, _)),
        (I = e.add(I, _)),
        (u = e.mul(y, I)),
        (R = e.add(R, u)),
        (u = e.mul(M, I)),
        (B = e.mul(O, B)),
        (B = e.sub(B, u)),
        (u = e.mul(O, y)),
        (S = e.mul(M, S)),
        (S = e.add(S, u)),
        new w(B, R, S)
      );
    }
    subtract(f) {
      return this.add(f.negate());
    }
    is0() {
      return this.equals(w.ZERO);
    }
    wNAF(f) {
      return T.wNAFCached(this, f, w.normalizeZ);
    }
    multiplyUnsafe(f) {
      let { endo: m, n: b } = n;
      tt("scalar", f, Q, b);
      let E = w.ZERO;
      if (f === Q) return E;
      if (this.is0() || f === k) return this;
      if (!m || T.hasPrecomputes(this))
        return T.wNAFCachedUnsafe(this, f, w.normalizeZ);
      let { k1neg: q, k1: Z, k2neg: L, k2: B } = m.splitScalar(f),
        R = E,
        S = E,
        U = this;
      for (; Z > Q || B > Q; )
        Z & k && (R = R.add(U)),
          B & k && (S = S.add(U)),
          (U = U.double()),
          (Z >>= k),
          (B >>= k);
      return (
        q && (R = R.negate()),
        L && (S = S.negate()),
        (S = new w(e.mul(S.px, m.beta), S.py, S.pz)),
        R.add(S)
      );
    }
    multiply(f) {
      let { endo: m, n: b } = n;
      tt("scalar", f, k, b);
      let E, q;
      if (m) {
        let { k1neg: Z, k1: L, k2neg: B, k2: R } = m.splitScalar(f),
          { p: S, f: U } = this.wNAF(L),
          { p: h, f: u } = this.wNAF(R);
        (S = T.constTimeNegate(Z, S)),
          (h = T.constTimeNegate(B, h)),
          (h = new w(e.mul(h.px, m.beta), h.py, h.pz)),
          (E = S.add(h)),
          (q = U.add(u));
      } else {
        let { p: Z, f: L } = this.wNAF(f);
        (E = Z), (q = L);
      }
      return w.normalizeZ([E, q])[0];
    }
    multiplyAndAddUnsafe(f, m, b) {
      let E = w.BASE,
        q = (L, B) =>
          B === Q || B === k || !L.equals(E)
            ? L.multiplyUnsafe(B)
            : L.multiply(B),
        Z = q(this, m).add(q(f, b));
      return Z.is0() ? void 0 : Z;
    }
    toAffine(f) {
      return v(this, f);
    }
    isTorsionFree() {
      let { h: f, isTorsionFree: m } = n;
      if (f === k) return !0;
      if (m) return m(w, this);
      throw new Error(
        "isTorsionFree() has not been declared for the elliptic curve"
      );
    }
    clearCofactor() {
      let { h: f, clearCofactor: m } = n;
      return f === k ? this : m ? m(w, this) : this.multiplyUnsafe(n.h);
    }
    toRawBytes(f = !0) {
      return wt("isCompressed", f), this.assertValidity(), s(w, this, f);
    }
    toHex(f = !0) {
      return wt("isCompressed", f), Nt(this.toRawBytes(f));
    }
  }
  (w.BASE = new w(n.Gx, n.Gy, e.ONE)), (w.ZERO = new w(e.ZERO, e.ONE, e.ZERO));
  let { endo: C, nBitLength: A } = n,
    T = Ae(w, C ? Math.ceil(A / 2) : A);
  return {
    CURVE: n,
    ProjectivePoint: w,
    normPrivateKeyToScalar: p,
    weierstrassEquation: c,
    isWithinCurveOrder: d,
  };
}
function tn(t) {
  let n = Ft(t);
  return (
    et(
      n,
      { hash: "hash", hmac: "function", randomBytes: "function" },
      { bits2int: "function", bits2int_modN: "function", lowS: "boolean" }
    ),
    Object.freeze(V({ lowS: !0 }, n))
  );
}
function _e(t) {
  let n = tn(t),
    { Fp: e, n: r, nByteLength: s, nBitLength: i } = n,
    c = e.BYTES + 1,
    a = 2 * e.BYTES + 1;
  function o(h) {
    return z(h, r);
  }
  function l(h) {
    return Tt(h, r);
  }
  let {
    ProjectivePoint: d,
    normPrivateKeyToScalar: p,
    weierstrassEquation: x,
    isWithinCurveOrder: v,
  } = Fe(
    $(V({}, n), {
      toBytes(h, u, y) {
        let _ = u.toAffine(),
          O = e.toBytes(_.x),
          I = W;
        return (
          wt("isCompressed", y),
          y
            ? I(Uint8Array.from([u.hasEvenY() ? 2 : 3]), O)
            : I(Uint8Array.from([4]), O, e.toBytes(_.y))
        );
      },
      fromBytes(h) {
        let u = h.length,
          y = h[0],
          _ = h.subarray(1);
        if (u === c && (y === 2 || y === 3)) {
          let O = D(_);
          if (!gt(O, k, e.ORDER)) throw new Error("Point is not on curve");
          let I = x(O),
            M;
          try {
            M = e.sqrt(I);
          } catch (X) {
            let Y = X instanceof Error ? ": " + X.message : "";
            throw new Error("Point is not on curve" + Y);
          }
          let H = (M & k) === k;
          return ((y & 1) === 1) !== H && (M = e.neg(M)), { x: O, y: M };
        } else if (u === a && y === 4) {
          let O = e.fromBytes(_.subarray(0, e.BYTES)),
            I = e.fromBytes(_.subarray(e.BYTES, 2 * e.BYTES));
          return { x: O, y: I };
        } else {
          let O = c,
            I = a;
          throw new Error(
            "invalid Point, expected length of " +
              O +
              ", or uncompressed " +
              I +
              ", got " +
              u
          );
        }
      },
    })
  );
  function N(h) {
    let u = r >> k;
    return h > u;
  }
  function w(h) {
    return N(h) ? o(-h) : h;
  }
  let C = (h, u, y) => D(h.slice(u, y));
  class A {
    constructor(u, y, _) {
      tt("r", u, k, r),
        tt("s", y, k, r),
        (this.r = u),
        (this.s = y),
        _ != null && (this.recovery = _),
        Object.freeze(this);
    }
    static fromCompact(u) {
      let y = s;
      return (
        (u = P("compactSignature", u, y * 2)), new A(C(u, 0, y), C(u, y, 2 * y))
      );
    }
    static fromDER(u) {
      let { r: y, s: _ } = nt.toSig(P("DER", u));
      return new A(y, _);
    }
    assertValidity() {}
    addRecoveryBit(u) {
      return new A(this.r, this.s, u);
    }
    recoverPublicKey(u) {
      let { r: y, s: _, recovery: O } = this,
        I = E(P("msgHash", u));
      if (O == null || ![0, 1, 2, 3].includes(O))
        throw new Error("recovery id invalid");
      let M = O === 2 || O === 3 ? y + n.n : y;
      if (M >= e.ORDER) throw new Error("recovery id 2 or 3 invalid");
      let H = O & 1 ? "03" : "02",
        J = d.fromHex(H + te(M, e.BYTES)),
        X = l(M),
        Y = o(-I * X),
        ut = o(_ * X),
        rt = d.BASE.multiplyAndAddUnsafe(J, Y, ut);
      if (!rt) throw new Error("point at infinify");
      return rt.assertValidity(), rt;
    }
    hasHighS() {
      return N(this.s);
    }
    normalizeS() {
      return this.hasHighS() ? new A(this.r, o(-this.s), this.recovery) : this;
    }
    toDERRawBytes() {
      return jt(this.toDERHex());
    }
    toDERHex() {
      return nt.hexFromSig(this);
    }
    toCompactRawBytes() {
      return jt(this.toCompactHex());
    }
    toCompactHex() {
      let u = s;
      return te(this.r, u) + te(this.s, u);
    }
  }
  let T = {
    isValidPrivateKey(h) {
      try {
        return p(h), !0;
      } catch {
        return !1;
      }
    },
    normPrivateKeyToScalar: p,
    randomPrivateKey: () => {
      let h = Wt(n.n);
      return xe(n.randomBytes(h), n.n);
    },
    precompute(h = 8, u = d.BASE) {
      return u._setWindowSize(h), u.multiply(BigInt(3)), u;
    },
  };
  function g(h, u = !0) {
    return d.fromPrivateKey(h).toRawBytes(u);
  }
  function f(h) {
    if (typeof h == "bigint") return !1;
    if (h instanceof d) return !0;
    let y = P("key", h).length,
      _ = e.BYTES,
      O = _ + 1,
      I = 2 * _ + 1;
    if (!(n.allowedPrivateKeyLengths || s === O)) return y === O || y === I;
  }
  function m(h, u, y = !0) {
    if (f(h) === !0) throw new Error("first arg must be private key");
    if (f(u) === !1) throw new Error("second arg must be public key");
    return d.fromHex(u).multiply(p(h)).toRawBytes(y);
  }
  let b =
      n.bits2int ||
      function (h) {
        if (h.length > 8192) throw new Error("input is too large");
        let u = D(h),
          y = h.length * 8 - i;
        return y > 0 ? u >> BigInt(y) : u;
      },
    E =
      n.bits2int_modN ||
      function (h) {
        return o(b(h));
      },
    q = at(i);
  function Z(h) {
    return tt("num < 2^" + i, h, Q, q), F(h, s);
  }
  function L(h, u, y = B) {
    if (["recovered", "canonical"].some((ct) => ct in y))
      throw new Error("sign() legacy options not supported");
    let { hash: _, randomBytes: O } = n,
      { lowS: I, prehash: M, extraEntropy: H } = y;
    I == null && (I = !0),
      (h = P("msgHash", h)),
      Ie(y),
      M && (h = P("prehashed msgHash", _(h)));
    let J = E(h),
      X = p(u),
      Y = [Z(X), Z(J)];
    if (H != null && H !== !1) {
      let ct = H === !0 ? O(e.BYTES) : H;
      Y.push(P("extraEntropy", ct));
    }
    let ut = W(...Y),
      rt = J;
    function zt(ct) {
      let dt = b(ct);
      if (!v(dt)) return;
      let Pt = l(dt),
        pt = d.BASE.multiply(dt).toAffine(),
        ft = o(pt.x);
      if (ft === Q) return;
      let Et = o(Pt * o(rt + ft * X));
      if (Et === Q) return;
      let ht = (pt.x === ft ? 0 : 2) | Number(pt.y & k),
        ae = Et;
      return I && N(Et) && ((ae = w(Et)), (ht ^= 1)), new A(ft, ae, ht);
    }
    return { seed: ut, k2sig: zt };
  }
  let B = { lowS: n.lowS, prehash: !1 },
    R = { lowS: n.lowS, prehash: !1 };
  function S(h, u, y = B) {
    let { seed: _, k2sig: O } = L(h, u, y),
      I = n;
    return he(I.hash.outputLen, I.nByteLength, I.hmac)(_, O);
  }
  d.BASE._setWindowSize(8);
  function U(h, u, y, _ = R) {
    let O = h;
    (u = P("msgHash", u)), (y = P("publicKey", y));
    let { lowS: I, prehash: M, format: H } = _;
    if ((Ie(_), "strict" in _))
      throw new Error("options.strict was renamed to lowS");
    if (H !== void 0 && H !== "compact" && H !== "der")
      throw new Error("format must be compact or der");
    let J = typeof O == "string" || Vt(O),
      X =
        !J &&
        !H &&
        typeof O == "object" &&
        O !== null &&
        typeof O.r == "bigint" &&
        typeof O.s == "bigint";
    if (!J && !X)
      throw new Error(
        "invalid signature, expected Uint8Array, hex string or Signature instance"
      );
    let Y, ut;
    try {
      if ((X && (Y = new A(O.r, O.s)), J)) {
        try {
          H !== "compact" && (Y = A.fromDER(O));
        } catch (ht) {
          if (!(ht instanceof nt.Err)) throw ht;
        }
        !Y && H !== "der" && (Y = A.fromCompact(O));
      }
      ut = d.fromHex(y);
    } catch {
      return !1;
    }
    if (!Y || (I && Y.hasHighS())) return !1;
    M && (u = n.hash(u));
    let { r: rt, s: zt } = Y,
      ct = E(u),
      dt = l(zt),
      Pt = o(ct * dt),
      pt = o(rt * dt),
      ft = d.BASE.multiplyAndAddUnsafe(ut, Pt, pt)?.toAffine();
    return ft ? o(ft.x) === rt : !1;
  }
  return {
    CURVE: n,
    getPublicKey: g,
    getSharedSecret: m,
    sign: S,
    verify: U,
    ProjectivePoint: d,
    Signature: A,
    utils: T,
  };
}
function en(t, n) {
  let e = t.ORDER,
    r = Q;
  for (let N = e - k; N % ot === Q; N /= ot) r += k;
  let s = r,
    i = ot << (s - k - k),
    c = i * ot,
    a = (e - k) / c,
    o = (a - k) / ot,
    l = c - k,
    d = i,
    p = t.pow(n, a),
    x = t.pow(n, (a + k) / ot),
    v = (N, w) => {
      let C = p,
        A = t.pow(w, l),
        T = t.sqr(A);
      T = t.mul(T, w);
      let g = t.mul(N, T);
      (g = t.pow(g, o)),
        (g = t.mul(g, A)),
        (A = t.mul(g, w)),
        (T = t.mul(g, N));
      let f = t.mul(T, A);
      g = t.pow(f, d);
      let m = t.eql(g, t.ONE);
      (A = t.mul(T, x)),
        (g = t.mul(f, C)),
        (T = t.cmov(A, T, m)),
        (f = t.cmov(g, f, m));
      for (let b = s; b > k; b--) {
        let E = b - ot;
        E = ot << (E - k);
        let q = t.pow(f, E),
          Z = t.eql(q, t.ONE);
        (A = t.mul(T, C)),
          (C = t.mul(C, C)),
          (q = t.mul(f, C)),
          (T = t.cmov(A, T, Z)),
          (f = t.cmov(q, f, Z));
      }
      return { isValid: m, value: T };
    };
  if (t.ORDER % ne === St) {
    let N = (t.ORDER - St) / ne,
      w = t.sqrt(t.neg(n));
    v = (C, A) => {
      let T = t.sqr(A),
        g = t.mul(C, A);
      T = t.mul(T, g);
      let f = t.pow(T, N);
      f = t.mul(f, g);
      let m = t.mul(f, w),
        b = t.mul(t.sqr(f), A),
        E = t.eql(b, C),
        q = t.cmov(m, f, E);
      return { isValid: E, value: q };
    };
  }
  return v;
}
function Ne(t, n) {
  if ((Zt(t), !t.isValid(n.A) || !t.isValid(n.B) || !t.isValid(n.Z)))
    throw new Error("mapToCurveSimpleSWU: invalid opts");
  let e = en(t, n.Z);
  if (!t.isOdd) throw new Error("Fp.isOdd is not implemented!");
  return (r) => {
    let s, i, c, a, o, l, d, p;
    (s = t.sqr(r)),
      (s = t.mul(s, n.Z)),
      (i = t.sqr(s)),
      (i = t.add(i, s)),
      (c = t.add(i, t.ONE)),
      (c = t.mul(c, n.B)),
      (a = t.cmov(n.Z, t.neg(i), !t.eql(i, t.ZERO))),
      (a = t.mul(a, n.A)),
      (i = t.sqr(c)),
      (l = t.sqr(a)),
      (o = t.mul(l, n.A)),
      (i = t.add(i, o)),
      (i = t.mul(i, c)),
      (l = t.mul(l, a)),
      (o = t.mul(l, n.B)),
      (i = t.add(i, o)),
      (d = t.mul(s, c));
    let { isValid: x, value: v } = e(i, l);
    (p = t.mul(s, r)),
      (p = t.mul(p, v)),
      (d = t.cmov(d, c, x)),
      (p = t.cmov(p, v, x));
    let N = t.isOdd(r) === t.isOdd(p);
    p = t.cmov(t.neg(p), p, N);
    let w = bt(t, [a], !0)[0];
    return (d = t.mul(d, w)), { x: d, y: p };
  };
}
function nn(t) {
  return { hash: t, hmac: (n, ...e) => me(t, n, ue(...e)), randomBytes: _t };
}
function Re(t, n) {
  let e = (r) => _e(V(V({}, t), nn(r)));
  return $(V({}, e(n)), { create: e });
}
var rn = D;
function it(t, n) {
  if ((Ot(t), Ot(n), t < 0 || t >= 1 << (8 * n)))
    throw new Error("invalid I2OSP input: " + t);
  let e = Array.from({ length: n }).fill(0);
  for (let r = n - 1; r >= 0; r--) (e[r] = t & 255), (t >>>= 8);
  return new Uint8Array(e);
}
function on(t, n) {
  let e = new Uint8Array(t.length);
  for (let r = 0; r < t.length; r++) e[r] = t[r] ^ n[r];
  return e;
}
function Ot(t) {
  if (!Number.isSafeInteger(t)) throw new Error("number expected");
}
function sn(t, n, e, r) {
  mt(t), mt(n), Ot(e), n.length > 255 && (n = r(W(Rt("H2C-OVERSIZE-DST-"), n)));
  let { outputLen: s, blockLen: i } = r,
    c = Math.ceil(e / s);
  if (e > 65535 || c > 255)
    throw new Error("expand_message_xmd: invalid lenInBytes");
  let a = W(n, it(n.length, 1)),
    o = it(0, i),
    l = it(e, 2),
    d = new Array(c),
    p = r(W(o, t, l, it(0, 1), a));
  d[0] = r(W(p, it(1, 1), a));
  for (let v = 1; v <= c; v++) {
    let N = [on(p, d[v - 1]), it(v + 1, 1), a];
    d[v] = r(W(...N));
  }
  return W(...d).slice(0, e);
}
function cn(t, n, e, r, s) {
  if ((mt(t), mt(n), Ot(e), n.length > 255)) {
    let i = Math.ceil((2 * r) / 8);
    n = s
      .create({ dkLen: i })
      .update(Rt("H2C-OVERSIZE-DST-"))
      .update(n)
      .digest();
  }
  if (e > 65535 || n.length > 255)
    throw new Error("expand_message_xof: invalid lenInBytes");
  return s
    .create({ dkLen: e })
    .update(t)
    .update(it(e, 2))
    .update(n)
    .update(it(n.length, 1))
    .digest();
}
function Te(t, n, e) {
  et(e, {
    DST: "stringOrUint8Array",
    p: "bigint",
    m: "isSafeInteger",
    k: "isSafeInteger",
    hash: "hash",
  });
  let { p: r, k: s, m: i, hash: c, expand: a, DST: o } = e;
  mt(t), Ot(n);
  let l = typeof o == "string" ? Rt(o) : o,
    d = r.toString(2).length,
    p = Math.ceil((d + s) / 8),
    x = n * i * p,
    v;
  if (a === "xmd") v = sn(t, l, x, c);
  else if (a === "xof") v = cn(t, l, x, s, c);
  else if (a === "_internal_pass") v = t;
  else throw new Error('expand must be "xmd" or "xof"');
  let N = new Array(n);
  for (let w = 0; w < n; w++) {
    let C = new Array(i);
    for (let A = 0; A < i; A++) {
      let T = p * (A + w * i),
        g = v.subarray(T, T + p);
      C[A] = z(rn(g), r);
    }
    N[w] = C;
  }
  return N;
}
function Ze(t, n) {
  let e = n.map((r) => Array.from(r).reverse());
  return (r, s) => {
    let [i, c, a, o] = e.map((p) => p.reduce((x, v) => t.add(t.mul(x, r), v))),
      [l, d] = bt(t, [c, o], !0);
    return (r = t.mul(i, l)), (s = t.mul(s, t.mul(a, d))), { x: r, y: s };
  };
}
function Le(t, n, e) {
  if (typeof n != "function") throw new Error("mapToCurve() must be defined");
  function r(i) {
    return t.fromAffine(n(i));
  }
  function s(i) {
    let c = i.clearCofactor();
    return c.equals(t.ZERO) ? t.ZERO : (c.assertValidity(), c);
  }
  return {
    defaults: e,
    hashToCurve(i, c) {
      let a = Te(i, 2, V($(V({}, e), { DST: e.DST }), c)),
        o = r(a[0]),
        l = r(a[1]);
      return s(o.add(l));
    },
    encodeToCurve(i, c) {
      let a = Te(i, 1, V($(V({}, e), { DST: e.encodeDST }), c));
      return s(r(a[0]));
    },
    mapToCurve(i) {
      if (!Array.isArray(i)) throw new Error("expected array of bigints");
      for (let c of i)
        if (typeof c != "bigint") throw new Error("expected array of bigints");
      return s(r(i));
    },
  };
}
var It = BigInt(
    "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"
  ),
  Lt = BigInt(
    "0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"
  ),
  se = BigInt(0),
  At = BigInt(1),
  Ct = BigInt(2),
  Ce = (t, n) => (t + n / Ct) / n;
function Me(t) {
  let n = It,
    e = BigInt(3),
    r = BigInt(6),
    s = BigInt(11),
    i = BigInt(22),
    c = BigInt(23),
    a = BigInt(44),
    o = BigInt(88),
    l = (t * t * t) % n,
    d = (l * l * t) % n,
    p = (G(d, e, n) * d) % n,
    x = (G(p, e, n) * d) % n,
    v = (G(x, Ct, n) * l) % n,
    N = (G(v, s, n) * v) % n,
    w = (G(N, i, n) * N) % n,
    C = (G(w, a, n) * w) % n,
    A = (G(C, o, n) * C) % n,
    T = (G(A, a, n) * w) % n,
    g = (G(T, e, n) * d) % n,
    f = (G(g, c, n) * N) % n,
    m = (G(f, r, n) * l) % n,
    b = G(m, Ct, n);
  if (!st.eql(st.sqr(b), t)) throw new Error("Cannot find square root");
  return b;
}
var st = Bt(It, void 0, void 0, { sqrt: Me }),
  Mt = Re(
    {
      a: se,
      b: BigInt(7),
      Fp: st,
      n: Lt,
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
          let n = Lt,
            e = BigInt("0x3086d221a7d46bcde86c90e49284eb15"),
            r = -At * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),
            s = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),
            i = e,
            c = BigInt("0x100000000000000000000000000000000"),
            a = Ce(i * t, n),
            o = Ce(-r * t, n),
            l = z(t - a * e - o * s, n),
            d = z(-a * r - o * i, n),
            p = l > c,
            x = d > c;
          if ((p && (l = n - l), x && (d = n - d), l > c || d > c))
            throw new Error("splitScalar: Endomorphism failed, k=" + t);
          return { k1neg: p, k1: l, k2neg: x, k2: d };
        },
      },
    },
    vt
  ),
  ke = {};
function kt(t, ...n) {
  let e = ke[t];
  if (e === void 0) {
    let r = vt(Uint8Array.from(t, (s) => s.charCodeAt(0)));
    (e = W(r, r)), (ke[t] = e);
  }
  return vt(W(e, ...n));
}
var ce = (t) => t.toRawBytes(!0).slice(1),
  oe = (t) => F(t, 32),
  re = (t) => z(t, It),
  qt = (t) => z(t, Lt),
  fe = Mt.ProjectivePoint,
  fn = (t, n, e) => fe.BASE.multiplyAndAddUnsafe(t, n, e);
function ie(t) {
  let n = Mt.utils.normPrivateKeyToScalar(t),
    e = fe.fromPrivateKey(n);
  return { scalar: e.hasEvenY() ? n : qt(-n), bytes: ce(e) };
}
function ze(t) {
  tt("x", t, At, It);
  let n = re(t * t),
    e = re(n * t + BigInt(7)),
    r = Me(e);
  r % Ct !== se && (r = re(-r));
  let s = new fe(t, r, At);
  return s.assertValidity(), s;
}
var yt = D;
function Pe(...t) {
  return qt(yt(kt("BIP0340/challenge", ...t)));
}
function an(t) {
  return ie(t).bytes;
}
function ln(t, n, e = _t(32)) {
  let r = P("message", t),
    { bytes: s, scalar: i } = ie(n),
    c = P("auxRand", e, 32),
    a = oe(i ^ yt(kt("BIP0340/aux", c))),
    o = kt("BIP0340/nonce", a, s, r),
    l = qt(yt(o));
  if (l === se) throw new Error("sign failed: k is zero");
  let { bytes: d, scalar: p } = ie(l),
    x = Pe(d, s, r),
    v = new Uint8Array(64);
  if ((v.set(d, 0), v.set(oe(qt(p + x * i)), 32), !Ue(v, r, s)))
    throw new Error("sign: Invalid signature produced");
  return v;
}
function Ue(t, n, e) {
  let r = P("signature", t, 64),
    s = P("message", n),
    i = P("publicKey", e, 32);
  try {
    let c = ze(yt(i)),
      a = yt(r.subarray(0, 32));
    if (!gt(a, At, It)) return !1;
    let o = yt(r.subarray(32, 64));
    if (!gt(o, At, Lt)) return !1;
    let l = Pe(oe(a), ce(c), s),
      d = fn(c, o, qt(-l));
    return !(!d || !d.hasEvenY() || d.toAffine().x !== a);
  } catch {
    return !1;
  }
}
var Vn = {
    getPublicKey: an,
    sign: ln,
    verify: Ue,
    utils: {
      randomPrivateKey: Mt.utils.randomPrivateKey,
      lift_x: ze,
      pointToBytes: ce,
      numberToBytesBE: F,
      bytesToNumberBE: D,
      taggedHash: kt,
      mod: z,
    },
  },
  un = Ze(
    st,
    [
      [
        "0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa8c7",
        "0x7d3d4c80bc321d5b9f315cea7fd44c5d595d2fc0bf63b92dfff1044f17c6581",
        "0x534c328d23f234e6e2a413deca25caece4506144037c40314ecbd0b53d9dd262",
        "0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa88c",
      ],
      [
        "0xd35771193d94918a9ca34ccbb7b640dd86cd409542f8487d9fe6b745781eb49b",
        "0xedadc6f64383dc1df7c4b2d51b54225406d36b641f5e41bbc52a56612a8c6d14",
        "0x0000000000000000000000000000000000000000000000000000000000000001",
      ],
      [
        "0x4bda12f684bda12f684bda12f684bda12f684bda12f684bda12f684b8e38e23c",
        "0xc75e0c32d5cb7c0fa9d0a54b12a0a6d5647ab046d686da6fdffc90fc201d71a3",
        "0x29a6194691f91a73715209ef6512e576722830a201be2018a765e85a9ecee931",
        "0x2f684bda12f684bda12f684bda12f684bda12f684bda12f684bda12f38e38d84",
      ],
      [
        "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffff93b",
        "0x7a06534bb8bdb49fd5e9e6632722c2989467c1bfc8e8d978dfb425d2685c2573",
        "0x6484aa716545ca2cf3a70c3fa8fe337e0a3d21162f0d6299a7bf8192bfd2a76f",
        "0x0000000000000000000000000000000000000000000000000000000000000001",
      ],
    ].map((t) => t.map((n) => BigInt(n)))
  ),
  dn = Ne(st, {
    A: BigInt(
      "0x3f8731abdd661adca08a5558f0f5d272e953d363cb6f0e5d405447c01a444533"
    ),
    B: BigInt("1771"),
    Z: st.create(BigInt("-11")),
  }),
  Ve = Le(
    Mt.ProjectivePoint,
    (t) => {
      let { x: n, y: e } = dn(st.create(t[0]));
      return un(n, e);
    },
    {
      DST: "secp256k1_XMD:SHA-256_SSWU_RO_",
      encodeDST: "secp256k1_XMD:SHA-256_SSWU_NU_",
      p: st.ORDER,
      m: 1,
      k: 128,
      expand: "xmd",
      hash: vt,
    }
  ),
  jn = Ve.hashToCurve,
  Hn = Ve.encodeToCurve;
export { Mt as a, Vn as b, Ve as c, jn as d, Hn as e };
