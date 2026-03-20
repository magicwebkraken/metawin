import { a as g, b as T, f as E } from "./chunk-VNDKUXGB.js";
var C = new Map(),
  O = (d) => {
    let i = C.get(d);
    return i
      ? Object.fromEntries(
          Object.entries(i.stores).map(([t, n]) => [t, n.getState()])
        )
      : {};
  },
  R = (d, i, t) => {
    if (d === void 0) return { type: "untracked", connection: i.connect(t) };
    let n = C.get(t.name);
    if (n) return g({ type: "tracked", store: d }, n);
    let e = { connection: i.connect(t), stores: {} };
    return C.set(t.name, e), g({ type: "tracked", store: d }, e);
  },
  D =
    (d, i = {}) =>
    (t, n, e) => {
      let u = i,
        { enabled: a, anonymousActionType: p, store: o } = u,
        S = E(u, ["enabled", "anonymousActionType", "store"]),
        f;
      try {
        f =
          (a ??
            (import.meta.env ? import.meta.env.MODE : void 0) !==
              "production") &&
          window.__REDUX_DEVTOOLS_EXTENSION__;
      } catch {}
      if (!f) return d(t, n, e);
      let _ = R(o, f, S),
        { connection: s } = _,
        h = E(_, ["connection"]),
        y = !0;
      e.setState = (l, c, r) => {
        let v = t(l, c);
        if (!y) return v;
        let I =
          r === void 0
            ? { type: p || "anonymous" }
            : typeof r == "string"
            ? { type: r }
            : r;
        return o === void 0
          ? (s?.send(I, n()), v)
          : (s?.send(
              T(g({}, I), { type: `${o}/${I.type}` }),
              T(g({}, O(S.name)), { [o]: e.getState() })
            ),
            v);
      };
      let m = (...l) => {
          let c = y;
          (y = !1), t(...l), (y = c);
        },
        b = d(e.setState, n, e);
      if (
        (h.type === "untracked"
          ? s?.init(b)
          : ((h.stores[h.store] = e),
            s?.init(
              Object.fromEntries(
                Object.entries(h.stores).map(([l, c]) => [
                  l,
                  l === h.store ? b : c.getState(),
                ])
              )
            )),
        e.dispatchFromDevtools && typeof e.dispatch == "function")
      ) {
        let l = !1,
          c = e.dispatch;
        e.dispatch = (...r) => {
          (import.meta.env ? import.meta.env.MODE : void 0) !== "production" &&
            r[0].type === "__setState" &&
            !l &&
            (console.warn(
              '[zustand devtools middleware] "__setState" action type is reserved to set state from the devtools. Avoid using it.'
            ),
            (l = !0)),
            c(...r);
        };
      }
      return (
        s.subscribe((l) => {
          var c;
          switch (l.type) {
            case "ACTION":
              if (typeof l.payload != "string") {
                console.error(
                  "[zustand devtools middleware] Unsupported action format"
                );
                return;
              }
              return w(l.payload, (r) => {
                if (r.type === "__setState") {
                  if (o === void 0) {
                    m(r.state);
                    return;
                  }
                  Object.keys(r.state).length !== 1 &&
                    console.error(`
                    [zustand devtools middleware] Unsupported __setState action format.
                    When using 'store' option in devtools(), the 'state' should have only one key, which is a value of 'store' that was passed in devtools(),
                    and value of this only key should be a state object. Example: { "type": "__setState", "state": { "abc123Store": { "foo": "bar" } } }
                    `);
                  let v = r.state[o];
                  if (v == null) return;
                  JSON.stringify(e.getState()) !== JSON.stringify(v) && m(v);
                  return;
                }
                e.dispatchFromDevtools &&
                  typeof e.dispatch == "function" &&
                  e.dispatch(r);
              });
            case "DISPATCH":
              switch (l.payload.type) {
                case "RESET":
                  return (
                    m(b),
                    o === void 0 ? s?.init(e.getState()) : s?.init(O(S.name))
                  );
                case "COMMIT":
                  if (o === void 0) {
                    s?.init(e.getState());
                    return;
                  }
                  return s?.init(O(S.name));
                case "ROLLBACK":
                  return w(l.state, (r) => {
                    if (o === void 0) {
                      m(r), s?.init(e.getState());
                      return;
                    }
                    m(r[o]), s?.init(O(S.name));
                  });
                case "JUMP_TO_STATE":
                case "JUMP_TO_ACTION":
                  return w(l.state, (r) => {
                    if (o === void 0) {
                      m(r);
                      return;
                    }
                    JSON.stringify(e.getState()) !== JSON.stringify(r[o]) &&
                      m(r[o]);
                  });
                case "IMPORT_STATE": {
                  let { nextLiftedState: r } = l.payload,
                    v =
                      (c = r.computedStates.slice(-1)[0]) == null
                        ? void 0
                        : c.state;
                  if (!v) return;
                  m(o === void 0 ? v : v[o]), s?.send(null, r);
                  return;
                }
                case "PAUSE_RECORDING":
                  return (y = !y);
              }
              return;
          }
        }),
        b
      );
    },
  F = D,
  w = (d, i) => {
    let t;
    try {
      t = JSON.parse(d);
    } catch (n) {
      console.error(
        "[zustand devtools middleware] Could not parse the received json",
        n
      );
    }
    t !== void 0 && i(t);
  },
  J = (d) => (i, t, n) => {
    let e = n.subscribe;
    return (
      (n.subscribe = (p, o, S) => {
        let f = p;
        if (o) {
          let s = S?.equalityFn || Object.is,
            h = p(n.getState());
          (f = (y) => {
            let m = p(y);
            if (!s(h, m)) {
              let b = h;
              o((h = m), b);
            }
          }),
            S?.fireImmediately && o(h, h);
        }
        return e(f);
      }),
      d(i, t, n)
    );
  },
  A = J;
function k(d, i) {
  let t;
  try {
    t = d();
  } catch {
    return;
  }
  return {
    getItem: (e) => {
      var a;
      let p = (S) => (S === null ? null : JSON.parse(S, i?.reviver)),
        o = (a = t.getItem(e)) != null ? a : null;
      return o instanceof Promise ? o.then(p) : p(o);
    },
    setItem: (e, a) => t.setItem(e, JSON.stringify(a, i?.replacer)),
    removeItem: (e) => t.removeItem(e),
  };
}
var j = (d) => (i) => {
    try {
      let t = d(i);
      return t instanceof Promise
        ? t
        : {
            then(n) {
              return j(n)(t);
            },
            catch(n) {
              return this;
            },
          };
    } catch (t) {
      return {
        then(n) {
          return this;
        },
        catch(n) {
          return j(n)(t);
        },
      };
    }
  },
  x = (d, i) => (t, n, e) => {
    let a = g(
        {
          storage: k(() => localStorage),
          partialize: (u) => u,
          version: 0,
          merge: (u, _) => g(g({}, _), u),
        },
        i
      ),
      p = !1,
      o = new Set(),
      S = new Set(),
      f = a.storage;
    if (!f)
      return d(
        (...u) => {
          console.warn(
            `[zustand persist middleware] Unable to update item '${a.name}', the given storage is currently unavailable.`
          ),
            t(...u);
        },
        n,
        e
      );
    let s = () => {
        let u = a.partialize(g({}, n()));
        return f.setItem(a.name, { state: u, version: a.version });
      },
      h = e.setState;
    e.setState = (u, _) => {
      h(u, _), s();
    };
    let y = d(
      (...u) => {
        t(...u), s();
      },
      n,
      e
    );
    e.getInitialState = () => y;
    let m,
      b = () => {
        var u, _;
        if (!f) return;
        (p = !1),
          o.forEach((c) => {
            var r;
            return c((r = n()) != null ? r : y);
          });
        let l =
          ((_ = a.onRehydrateStorage) == null
            ? void 0
            : _.call(a, (u = n()) != null ? u : y)) || void 0;
        return j(f.getItem.bind(f))(a.name)
          .then((c) => {
            if (c)
              if (typeof c.version == "number" && c.version !== a.version) {
                if (a.migrate) {
                  let r = a.migrate(c.state, c.version);
                  return r instanceof Promise
                    ? r.then((v) => [!0, v])
                    : [!0, r];
                }
                console.error(
                  "State loaded from storage couldn't be migrated since no migrate function was provided"
                );
              } else return [!1, c.state];
            return [!1, void 0];
          })
          .then((c) => {
            var r;
            let [v, I] = c;
            if (((m = a.merge(I, (r = n()) != null ? r : y)), t(m, !0), v))
              return s();
          })
          .then(() => {
            l?.(m, void 0), (m = n()), (p = !0), S.forEach((c) => c(m));
          })
          .catch((c) => {
            l?.(void 0, c);
          });
      };
    return (
      (e.persist = {
        setOptions: (u) => {
          (a = g(g({}, a), u)), u.storage && (f = u.storage);
        },
        clearStorage: () => {
          f?.removeItem(a.name);
        },
        getOptions: () => a,
        rehydrate: () => b(),
        hasHydrated: () => p,
        onHydrate: (u) => (
          o.add(u),
          () => {
            o.delete(u);
          }
        ),
        onFinishHydration: (u) => (
          S.add(u),
          () => {
            S.delete(u);
          }
        ),
      }),
      a.skipHydration || b(),
      m || y
    );
  },
  M = x;
var N = (d) => {
    let i,
      t = new Set(),
      n = (f, s) => {
        let h = typeof f == "function" ? f(i) : f;
        if (!Object.is(h, i)) {
          let y = i;
          (i =
            s ?? (typeof h != "object" || h === null)
              ? h
              : Object.assign({}, i, h)),
            t.forEach((m) => m(i, y));
        }
      },
      e = () => i,
      o = {
        setState: n,
        getState: e,
        getInitialState: () => S,
        subscribe: (f) => (t.add(f), () => t.delete(f)),
      },
      S = (i = d(n, e, o));
    return o;
  },
  U = (d) => (d ? N(d) : N);
export { F as a, A as b, k as c, M as d, U as e };
