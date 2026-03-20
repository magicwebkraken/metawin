var X = Symbol(),
  Y = Symbol();
var A = Object.getPrototypeOf,
  T = new WeakMap(),
  z = (e) =>
    e &&
    (T.has(e)
      ? T.get(e)
      : A(e) === Object.prototype || A(e) === Array.prototype);
var x = (e) => (z(e) && e[Y]) || null,
  M = (e, a = !0) => {
    T.set(e, a);
  };
var _ = (e) => typeof e == "object" && e !== null,
  W = (e) =>
    _(e) &&
    !v.has(e) &&
    (Array.isArray(e) || !(Symbol.iterator in e)) &&
    !(e instanceof WeakMap) &&
    !(e instanceof WeakSet) &&
    !(e instanceof Error) &&
    !(e instanceof Number) &&
    !(e instanceof Date) &&
    !(e instanceof String) &&
    !(e instanceof RegExp) &&
    !(e instanceof ArrayBuffer) &&
    !(e instanceof Promise),
  I = (e, a) => {
    let c = R.get(e);
    if (c?.[0] === a) return c[1];
    let n = Array.isArray(e) ? [] : Object.create(Object.getPrototypeOf(e));
    return (
      M(n, !0),
      R.set(e, [a, n]),
      Reflect.ownKeys(e).forEach((i) => {
        if (Object.getOwnPropertyDescriptor(n, i)) return;
        let s = Reflect.get(e, i),
          { enumerable: o } = Reflect.getOwnPropertyDescriptor(e, i),
          h = { value: s, enumerable: o, configurable: !0 };
        if (v.has(s)) M(s, !1);
        else if (S.has(s)) {
          let [u, t] = S.get(s);
          h.value = I(u, t());
        }
        Object.defineProperty(n, i, h);
      }),
      Object.preventExtensions(n)
    );
  },
  H = (e, a, c, n) => ({
    deleteProperty(i, s) {
      let o = Reflect.get(i, s);
      c(s);
      let h = Reflect.deleteProperty(i, s);
      return h && n(["delete", [s], o]), h;
    },
    set(i, s, o, h) {
      let u = !e() && Reflect.has(i, s),
        t = Reflect.get(i, s, h);
      if (u && (C(t, o) || (m.has(o) && C(t, m.get(o))))) return !0;
      c(s), _(o) && (o = x(o) || o);
      let r = !S.has(o) && U(o) ? b(o) : o;
      return a(s, r), Reflect.set(i, s, r, h), n(["set", [s], o, t]), !0;
    },
  }),
  S = new WeakMap(),
  v = new WeakSet(),
  R = new WeakMap(),
  E = [1],
  m = new WeakMap(),
  C = Object.is,
  J = (e, a) => new Proxy(e, a),
  U = W,
  V = I,
  $ = H;
function b(e = {}) {
  if (!_(e)) throw new Error("object required");
  let a = m.get(e);
  if (a) return a;
  let c = E[0],
    n = new Set(),
    i = (l, d = ++E[0]) => {
      c !== d && ((s = c = d), n.forEach((f) => f(l, d)));
    },
    s = c,
    o = (l = E[0]) => (
      s !== l &&
        ((s = l),
        u.forEach(([d]) => {
          let f = d[1](l);
          f > c && (c = f);
        })),
      c
    ),
    h = (l) => (d, f) => {
      let y = [...d];
      (y[1] = [l, ...y[1]]), i(y, f);
    },
    u = new Map(),
    t = (l, d) => {
      let f = !v.has(d) && S.get(d);
      if (f) {
        if (
          (import.meta.env ? import.meta.env.MODE : void 0) !== "production" &&
          u.has(l)
        )
          throw new Error("prop listener already exists");
        if (n.size) {
          let y = f[2](h(l));
          u.set(l, [f, y]);
        } else u.set(l, [f]);
      }
    },
    r = (l) => {
      var d;
      let f = u.get(l);
      f && (u.delete(l), (d = f[1]) == null || d.call(f));
    },
    p = (l) => (
      n.add(l),
      n.size === 1 &&
        u.forEach(([f, y], g) => {
          if (
            (import.meta.env ? import.meta.env.MODE : void 0) !==
              "production" &&
            y
          )
            throw new Error("remove already exists");
          let K = f[2](h(g));
          u.set(g, [f, K]);
        }),
      () => {
        n.delete(l),
          n.size === 0 &&
            u.forEach(([f, y], g) => {
              y && (y(), u.set(g, [f]));
            });
      }
    ),
    w = !0,
    L = $(() => w, t, r, i),
    P = J(e, L);
  m.set(e, P);
  let N = [e, o, p];
  return (
    S.set(P, N),
    Reflect.ownKeys(e).forEach((l) => {
      let d = Object.getOwnPropertyDescriptor(e, l);
      "value" in d && d.writable && (P[l] = e[l]);
    }),
    (w = !1),
    P
  );
}
function k(e, a, c) {
  let n = S.get(e);
  (import.meta.env ? import.meta.env.MODE : void 0) !== "production" &&
    !n &&
    console.warn("Please use proxy object");
  let i,
    s = [],
    o = n[2],
    h = !1,
    t = o((r) => {
      if ((s.push(r), c)) {
        a(s.splice(0));
        return;
      }
      i ||
        (i = Promise.resolve().then(() => {
          (i = void 0), h && a(s.splice(0));
        }));
    });
  return (
    (h = !0),
    () => {
      (h = !1), t();
    }
  );
}
function F(e) {
  let a = S.get(e);
  (import.meta.env ? import.meta.env.MODE : void 0) !== "production" &&
    !a &&
    console.warn("Please use proxy object");
  let [c, n] = a;
  return V(c, n());
}
function Z(e) {
  return v.add(e), e;
}
function D() {
  return {
    proxyStateMap: S,
    refSet: v,
    snapCache: R,
    versionHolder: E,
    proxyCache: m,
  };
}
function oe(e, a, c, n) {
  let i = e[a];
  return k(
    e,
    () => {
      let s = e[a];
      Object.is(i, s) || c((i = s));
    },
    n
  );
}
var re = Symbol();
var { proxyStateMap: B, snapCache: G } = D(),
  O = (e) => B.has(e);
function ie(e) {
  let a = [],
    c = 0,
    n = new Map(),
    i = new WeakMap(),
    s = () => {
      let t = G.get(h),
        r = t?.[1];
      if (r && !i.has(r)) {
        let p = new Map(n);
        i.set(r, p);
      }
    },
    o = (t) => i.get(t) || n;
  if (e) {
    if (typeof e[Symbol.iterator] != "function")
      throw new TypeError(`proxyMap:
	initial state must be iterable
		tip: structure should be [[key, value]]`);
    for (let [t, r] of e) n.set(t, c), (a[c++] = r);
  }
  let h = {
      data: a,
      index: c,
      epoch: 0,
      get size() {
        return O(this) || s(), o(this).size;
      },
      get(t) {
        let p = o(this).get(t);
        if (p === void 0) {
          this.epoch;
          return;
        }
        return this.data[p];
      },
      has(t) {
        let r = o(this);
        return this.epoch, r.has(t);
      },
      set(t, r) {
        if (!O(this)) throw new Error("Cannot perform mutations on a snapshot");
        let p = n.get(t);
        return (
          p === void 0
            ? (n.set(t, this.index), (this.data[this.index++] = r))
            : (this.data[p] = r),
          this.epoch++,
          this
        );
      },
      delete(t) {
        if (!O(this)) throw new Error("Cannot perform mutations on a snapshot");
        let r = n.get(t);
        return r === void 0
          ? !1
          : (delete this.data[r], n.delete(t), this.epoch++, !0);
      },
      clear() {
        if (!O(this)) throw new Error("Cannot perform mutations on a snapshot");
        (this.data.length = 0), (this.index = 0), this.epoch++, n.clear();
      },
      forEach(t) {
        this.epoch,
          o(this).forEach((p, w) => {
            t(this.data[p], w, this);
          });
      },
      *entries() {
        this.epoch;
        let t = o(this);
        for (let [r, p] of t) yield [r, this.data[p]];
      },
      *keys() {
        this.epoch;
        let t = o(this);
        for (let r of t.keys()) yield r;
      },
      *values() {
        this.epoch;
        let t = o(this);
        for (let r of t.values()) yield this.data[r];
      },
      [Symbol.iterator]() {
        return this.entries();
      },
      get [Symbol.toStringTag]() {
        return "Map";
      },
      toJSON() {
        return new Map(this.entries());
      },
    },
    u = b(h);
  return (
    Object.defineProperties(u, {
      size: { enumerable: !1 },
      index: { enumerable: !1 },
      epoch: { enumerable: !1 },
      data: { enumerable: !1 },
      toJSON: { enumerable: !1 },
    }),
    Object.seal(u),
    u
  );
}
var { proxyStateMap: ae, snapCache: ce } = D();
export { b as a, k as b, F as c, Z as d, oe as e, ie as f };
