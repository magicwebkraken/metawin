var x = Object.create;
var m = Object.defineProperty,
  y = Object.defineProperties,
  z = Object.getOwnPropertyDescriptor,
  A = Object.getOwnPropertyDescriptors,
  B = Object.getOwnPropertyNames,
  n = Object.getOwnPropertySymbols,
  t = Object.getPrototypeOf,
  p = Object.prototype.hasOwnProperty,
  u = Object.prototype.propertyIsEnumerable,
  C = Reflect.get;
var l = (a, b) => ((b = Symbol[a]) ? b : Symbol.for("Symbol." + a)),
  D = (a) => {
    throw TypeError(a);
  };
var s = (a, b, c) =>
    b in a
      ? m(a, b, { enumerable: !0, configurable: !0, writable: !0, value: c })
      : (a[b] = c),
  E = (a, b) => {
    for (var c in (b ||= {})) p.call(b, c) && s(a, c, b[c]);
    if (n) for (var c of n(b)) u.call(b, c) && s(a, c, b[c]);
    return a;
  },
  F = (a, b) => y(a, A(b));
var G = ((a) =>
    typeof require < "u"
      ? require
      : typeof Proxy < "u"
      ? new Proxy(a, { get: (b, c) => (typeof require < "u" ? require : b)[c] })
      : a)(function (a) {
    if (typeof require < "u") return require.apply(this, arguments);
    throw Error('Dynamic require of "' + a + '" is not supported');
  }),
  H = (a) => (b) => {
    var c = a[b];
    if (c) return c();
    throw new Error("Module not found in bundle: " + b);
  },
  I = (a) => (typeof a == "symbol" ? a : a + ""),
  J = (a, b) => {
    var c = {};
    for (var d in a) p.call(a, d) && b.indexOf(d) < 0 && (c[d] = a[d]);
    if (a != null && n)
      for (var d of n(a)) b.indexOf(d) < 0 && u.call(a, d) && (c[d] = a[d]);
    return c;
  };
var K = (a, b) => () => (a && (b = a((a = 0))), b);
var L = (a, b) => () => (b || a((b = { exports: {} }).exports, b), b.exports),
  M = (a, b) => {
    for (var c in b) m(a, c, { get: b[c], enumerable: !0 });
  },
  o = (a, b, c, d) => {
    if ((b && typeof b == "object") || typeof b == "function")
      for (let e of B(b))
        !p.call(a, e) &&
          e !== c &&
          m(a, e, {
            get: () => b[e],
            enumerable: !(d = z(b, e)) || d.enumerable,
          });
    return a;
  },
  N = (a, b, c) => (o(a, b, "default"), c && o(c, b, "default")),
  O = (a, b, c) => (
    (c = a != null ? x(t(a)) : {}),
    o(
      b || !a || !a.__esModule
        ? m(c, "default", { value: a, enumerable: !0 })
        : c,
      a
    )
  ),
  P = (a) => o(m({}, "__esModule", { value: !0 }), a);
var Q = (a, b, c) => C(t(a), c, b);
var R = (a, b, c) =>
    new Promise((d, e) => {
      var f = (g) => {
          try {
            i(c.next(g));
          } catch (j) {
            e(j);
          }
        },
        h = (g) => {
          try {
            i(c.throw(g));
          } catch (j) {
            e(j);
          }
        },
        i = (g) => (g.done ? d(g.value) : Promise.resolve(g.value).then(f, h));
      i((c = c.apply(a, b)).next());
    }),
  v = function (a, b) {
    (this[0] = a), (this[1] = b);
  },
  S = (a, b, c) => {
    var d = (h, i, g, j) => {
        try {
          var q = c[h](i),
            r = (i = q.value) instanceof v,
            w = q.done;
          Promise.resolve(r ? i[0] : i)
            .then((k) =>
              r
                ? d(
                    h === "return" ? h : "next",
                    i[1] ? { done: k.done, value: k.value } : k,
                    g,
                    j
                  )
                : g({ value: k, done: w })
            )
            .catch((k) => d("throw", k, g, j));
        } catch (k) {
          j(k);
        }
      },
      e = (h) => (f[h] = (i) => new Promise((g, j) => d(h, i, g, j))),
      f = {};
    return (
      (c = c.apply(a, b)),
      (f[l("asyncIterator")] = () => f),
      e("next"),
      e("throw"),
      e("return"),
      f
    );
  },
  T = (a) => {
    var b = a[l("asyncIterator")],
      c = !1,
      d,
      e = {};
    return (
      b == null
        ? ((b = a[l("iterator")]()), (d = (f) => (e[f] = (h) => b[f](h))))
        : ((b = b.call(a)),
          (d = (f) =>
            (e[f] = (h) => {
              if (c) {
                if (((c = !1), f === "throw")) throw h;
                return h;
              }
              return (
                (c = !0),
                {
                  done: !1,
                  value: new v(
                    new Promise((i) => {
                      var g = b[f](h);
                      g instanceof Object || D("Object expected"), i(g);
                    }),
                    1
                  ),
                }
              );
            }))),
      (e[l("iterator")] = () => e),
      d("next"),
      "throw" in b
        ? d("throw")
        : (e.throw = (f) => {
            throw f;
          }),
      "return" in b && d("return"),
      e
    );
  },
  U = (a, b, c) =>
    (b = a[l("asyncIterator")])
      ? b.call(a)
      : ((a = a[l("iterator")]()),
        (b = {}),
        (c = (d, e) =>
          (e = a[d]) &&
          (b[d] = (f) =>
            new Promise(
              (h, i, g) => (
                (f = e.call(a, f)),
                (g = f.done),
                Promise.resolve(f.value).then(
                  (j) => h({ value: j, done: g }),
                  i
                )
              )
            ))),
        c("next"),
        c("return"),
        b);
export {
  E as a,
  F as b,
  G as c,
  H as d,
  I as e,
  J as f,
  K as g,
  L as h,
  M as i,
  N as j,
  O as k,
  P as l,
  Q as m,
  R as n,
  v as o,
  S as p,
  T as q,
  U as r,
};
