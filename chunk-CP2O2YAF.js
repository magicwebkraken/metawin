import { a as U, b as V } from "./chunk-EEU3LH2V.js";
import { A as C, D as l, K as D, M as j } from "./chunk-QMRWXCSQ.js";
V();
j();
var W = Uint8Array.from([7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8]),
  B = Uint8Array.from(new Array(16).fill(0).map((r, t) => t)),
  G = B.map((r) => (9 * r + 5) % 16),
  M = (() => {
    let s = [[B], [G]];
    for (let e = 0; e < 4; e++) for (let o of s) o.push(o[e].map((h) => W[h]));
    return s;
  })(),
  w = M[0],
  R = M[1],
  _ = [
    [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8],
    [12, 13, 11, 15, 6, 9, 9, 7, 12, 15, 11, 13, 7, 8, 7, 7],
    [13, 15, 14, 11, 7, 7, 6, 8, 13, 14, 13, 12, 5, 5, 6, 9],
    [14, 11, 12, 14, 8, 6, 5, 5, 15, 12, 15, 14, 9, 9, 8, 6],
    [15, 12, 13, 13, 9, 5, 8, 6, 14, 11, 12, 11, 8, 6, 5, 5],
  ].map((r) => Uint8Array.from(r)),
  S = w.map((r, t) => r.map((s) => _[t][s])),
  T = R.map((r, t) => r.map((s) => _[t][s])),
  k = Uint32Array.from([0, 1518500249, 1859775393, 2400959708, 2840853838]),
  q = Uint32Array.from([1352829926, 1548603684, 1836072691, 2053994217, 0]);
function y(r, t, s, e) {
  return r === 0
    ? t ^ s ^ e
    : r === 1
    ? (t & s) | (~t & e)
    : r === 2
    ? (t | ~s) ^ e
    : r === 3
    ? (t & e) | (s & ~e)
    : t ^ (s | ~e);
}
var u = new Uint32Array(16),
  A = class extends U {
    constructor() {
      super(64, 20, 8, !0),
        (this.h0 = 1732584193),
        (this.h1 = -271733879),
        (this.h2 = -1732584194),
        (this.h3 = 271733878),
        (this.h4 = -1009589776);
    }
    get() {
      let { h0: t, h1: s, h2: e, h3: o, h4: h } = this;
      return [t, s, e, o, h];
    }
    set(t, s, e, o, h) {
      (this.h0 = t | 0),
        (this.h1 = s | 0),
        (this.h2 = e | 0),
        (this.h3 = o | 0),
        (this.h4 = h | 0);
    }
    process(t, s) {
      for (let i = 0; i < 16; i++, s += 4) u[i] = t.getUint32(s, !0);
      let e = this.h0 | 0,
        o = e,
        h = this.h1 | 0,
        d = h,
        c = this.h2 | 0,
        x = c,
        a = this.h3 | 0,
        p = a,
        f = this.h4 | 0,
        m = f;
      for (let i = 0; i < 5; i++) {
        let g = 4 - i,
          I = k[i],
          L = q[i],
          K = w[i],
          F = R[i],
          H = S[i],
          P = T[i];
        for (let n = 0; n < 16; n++) {
          let b = (l(e + y(i, h, c, a) + u[K[n]] + I, H[n]) + f) | 0;
          (e = f), (f = a), (a = l(c, 10) | 0), (c = h), (h = b);
        }
        for (let n = 0; n < 16; n++) {
          let b = (l(o + y(g, d, x, p) + u[F[n]] + L, P[n]) + m) | 0;
          (o = m), (m = p), (p = l(x, 10) | 0), (x = d), (d = b);
        }
      }
      this.set(
        (this.h1 + c + p) | 0,
        (this.h2 + a + m) | 0,
        (this.h3 + f + o) | 0,
        (this.h4 + e + d) | 0,
        (this.h0 + h + x) | 0
      );
    }
    roundClean() {
      C(u);
    }
    destroy() {
      (this.destroyed = !0), C(this.buffer), this.set(0, 0, 0, 0, 0);
    }
  },
  E = D(() => new A());
var Y = E;
export { Y as a };
