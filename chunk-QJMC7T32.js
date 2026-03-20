import { A as P, a as x, o as k, w as V, x as B } from "./chunk-QTVP2MUK.js";
import "./chunk-2CDTKQ3E.js";
import "./chunk-6II4O2PQ.js";
import "./chunk-N425SZE3.js";
import { I as E, O as Y } from "./chunk-IYKVXYEM.js";
import "./chunk-CP2O2YAF.js";
import "./chunk-ZRBE6OMV.js";
import "./chunk-Z3SE2D4B.js";
import "./chunk-5LQ6A2AX.js";
import {
  U as Z,
  Xb as Q,
  Z as z,
  ac as j,
  fc as O,
  ia as C,
} from "./chunk-5G3DVQVW.js";
import "./chunk-HINDXNTT.js";
import "./chunk-X3F4NDXO.js";
import "./chunk-JKZLGYQN.js";
import "./chunk-EEU3LH2V.js";
import "./chunk-TRLFM7P4.js";
import "./chunk-QMRWXCSQ.js";
import { a as A, b as S, f as b, n as o } from "./chunk-VNDKUXGB.js";
function F(y = {}) {
  let f, I, p, D;
  return (M) => ({
    id: "baseAccount",
    name: "Base Account",
    rdns: "app.base.account",
    type: "baseAccount",
    connect() {
      return o(this, arguments, function* (s = {}) {
        var t = s,
          { chainId: e, withCapabilities: r } = t,
          w = b(t, ["chainId", "withCapabilities"]);
        try {
          let c = yield this.getProvider(),
            n = e ?? M.chains[0]?.id;
          if (!n) throw new x();
          let { accounts: i, currentChainId: h } = yield o(
            this,
            null,
            function* () {
              if (w.isReconnecting)
                return {
                  accounts: (yield c.request({
                    method: "eth_accounts",
                    params: [],
                  })).map((u) => ({ address: C(u) })),
                  currentChainId: yield this.getChainId(),
                };
              let g = yield c.request({
                method: "wallet_connect",
                params: [
                  {
                    capabilities:
                      "capabilities" in w && w.capabilities
                        ? w.capabilities
                        : {},
                    chainIds: [
                      z(n),
                      ...M.chains.filter((u) => u.id !== n).map((u) => z(u.id)),
                    ],
                  },
                ],
              });
              return {
                accounts: (yield c.request({ method: "eth_accounts" }))
                  .map(
                    (u) =>
                      g.accounts.find((N) => N.address === u) ?? { address: u }
                  )
                  .map((u) => ({
                    address: C(u.address),
                    capabilities: u.capabilities ?? {},
                  })),
                currentChainId: Number(g.chainIds[0]),
              };
            }
          );
          return (
            I ||
              ((I = this.onAccountsChanged.bind(this)),
              c.on("accountsChanged", I)),
            p ||
              ((p = this.onChainChanged.bind(this)), c.on("chainChanged", p)),
            D || ((D = this.onDisconnect.bind(this)), c.on("disconnect", D)),
            e &&
              h !== e &&
              (h =
                (yield this.switchChain({ chainId: e }).catch((l) => {
                  if (l.code === j.code) throw l;
                  return { id: h };
                }))?.id ?? h),
            { accounts: r ? i : i.map((g) => g.address), chainId: h }
          );
        } catch (c) {
          throw /(user closed modal|accounts received is empty|user denied account|request rejected)/i.test(
            c.message
          )
            ? new j(c)
            : c;
        }
      });
    },
    disconnect() {
      return o(this, null, function* () {
        let e = yield this.getProvider();
        I && (e.removeListener("accountsChanged", I), (I = void 0)),
          p && (e.removeListener("chainChanged", p), (p = void 0)),
          D && (e.removeListener("disconnect", D), (D = void 0)),
          e.disconnect();
      });
    },
    getAccounts() {
      return o(this, null, function* () {
        return (yield (yield this.getProvider()).request({
          method: "eth_accounts",
        })).map((r) => C(r));
      });
    },
    getChainId() {
      return o(this, null, function* () {
        let r = yield (yield this.getProvider()).request({
          method: "eth_chainId",
        });
        return Number(r);
      });
    },
    getProvider() {
      return o(this, null, function* () {
        if (!f) {
          let e =
              typeof y.preference == "string"
                ? { options: y.preference }
                : S(A({}, y.preference), {
                    options: y.preference?.options ?? "all",
                  }),
            { createBaseAccountSDK: r } = yield (() => {
              try {
                return import("./chunk-XOZK47WX.js");
              } catch {
                throw new Error('dependency "@base-org/account" not found');
              }
            })();
          f = r(
            S(A({}, y), {
              appChainIds: M.chains.map((s) => s.id),
              preference: e,
            })
          ).getProvider();
        }
        return f;
      });
    },
    isAuthorized() {
      return o(this, null, function* () {
        try {
          return !!(yield this.getAccounts()).length;
        } catch {
          return !1;
        }
      });
    },
    switchChain(w) {
      return o(
        this,
        arguments,
        function* ({ addEthereumChainParameter: e, chainId: r }) {
          let s = M.chains.find((c) => c.id === r);
          if (!s) throw new O(new x());
          let t = yield this.getProvider();
          try {
            return (
              yield t.request({
                method: "wallet_switchEthereumChain",
                params: [{ chainId: z(s.id) }],
              }),
              s
            );
          } catch (c) {
            if (c.code === 4902)
              try {
                let n;
                e?.blockExplorerUrls
                  ? (n = e.blockExplorerUrls)
                  : (n = s.blockExplorers?.default.url
                      ? [s.blockExplorers?.default.url]
                      : []);
                let i;
                e?.rpcUrls?.length
                  ? (i = e.rpcUrls)
                  : (i = [s.rpcUrls.default?.http[0] ?? ""]);
                let h = {
                  blockExplorerUrls: n,
                  chainId: z(r),
                  chainName: e?.chainName ?? s.name,
                  iconUrls: e?.iconUrls,
                  nativeCurrency: e?.nativeCurrency ?? s.nativeCurrency,
                  rpcUrls: i,
                };
                return (
                  yield t.request({
                    method: "wallet_addEthereumChain",
                    params: [h],
                  }),
                  s
                );
              } catch (n) {
                throw new j(n);
              }
            throw new O(c);
          }
        }
      );
    },
    onAccountsChanged(e) {
      e.length === 0
        ? this.onDisconnect()
        : M.emitter.emit("change", { accounts: e.map((r) => C(r)) });
    },
    onChainChanged(e) {
      let r = Number(e);
      M.emitter.emit("change", { chainId: r });
    },
    onDisconnect(e) {
      return o(this, null, function* () {
        M.emitter.emit("disconnect");
        let r = yield this.getProvider();
        I && (r.removeListener("accountsChanged", I), (I = void 0)),
          p && (r.removeListener("chainChanged", p), (p = void 0)),
          D && (r.removeListener("disconnect", D), (D = void 0));
      });
    },
  });
}
q.type = "coinbaseWallet";
function q(y = {}) {
  let f, I, p, D;
  return (M) => ({
    id: "coinbaseWalletSDK",
    name: "Coinbase Wallet",
    rdns: "com.coinbase.wallet",
    type: q.type,
    connect() {
      return o(this, arguments, function* (s = {}) {
        var t = s,
          { chainId: e, withCapabilities: r } = t,
          w = b(t, ["chainId", "withCapabilities"]);
        try {
          let c = yield this.getProvider(),
            n = (yield c.request({
              method: "eth_requestAccounts",
              params:
                "instantOnboarding" in w && w.instantOnboarding
                  ? [{ onboarding: "instant" }]
                  : [],
            })).map((h) => C(h));
          I ||
            ((I = this.onAccountsChanged.bind(this)),
            c.on("accountsChanged", I)),
            p ||
              ((p = this.onChainChanged.bind(this)), c.on("chainChanged", p)),
            D || ((D = this.onDisconnect.bind(this)), c.on("disconnect", D));
          let i = yield this.getChainId();
          return (
            e &&
              i !== e &&
              (i =
                (yield this.switchChain({ chainId: e }).catch((g) => {
                  if (g.code === j.code) throw g;
                  return { id: i };
                }))?.id ?? i),
            {
              accounts: r
                ? n.map((h) => ({ address: h, capabilities: {} }))
                : n,
              chainId: i,
            }
          );
        } catch (c) {
          throw /(user closed modal|accounts received is empty|user denied account|request rejected)/i.test(
            c.message
          )
            ? new j(c)
            : c;
        }
      });
    },
    disconnect() {
      return o(this, null, function* () {
        let e = yield this.getProvider();
        I && (e.removeListener("accountsChanged", I), (I = void 0)),
          p && (e.removeListener("chainChanged", p), (p = void 0)),
          D && (e.removeListener("disconnect", D), (D = void 0)),
          e.disconnect(),
          e.close?.();
      });
    },
    getAccounts() {
      return o(this, null, function* () {
        return (yield (yield this.getProvider()).request({
          method: "eth_accounts",
        })).map((r) => C(r));
      });
    },
    getChainId() {
      return o(this, null, function* () {
        let r = yield (yield this.getProvider()).request({
          method: "eth_chainId",
        });
        return Number(r);
      });
    },
    getProvider() {
      return o(this, null, function* () {
        if (!f) {
          let { createCoinbaseWalletSDK: e } = yield (() => {
            try {
              return import("./chunk-AALJW57G.js");
            } catch {
              throw new Error('dependency "@coinbase/wallet-sdk" not found');
            }
          })();
          f = e(
            S(A({}, y), {
              appChainIds: M.chains.map((w) => w.id),
              preference: A({ options: "all" }, y.preference ?? {}),
            })
          ).getProvider();
        }
        return f;
      });
    },
    isAuthorized() {
      return o(this, null, function* () {
        try {
          return !!(yield this.getAccounts()).length;
        } catch {
          return !1;
        }
      });
    },
    switchChain(w) {
      return o(
        this,
        arguments,
        function* ({ addEthereumChainParameter: e, chainId: r }) {
          let s = M.chains.find((c) => c.id === r);
          if (!s) throw new O(new x());
          let t = yield this.getProvider();
          try {
            return (
              yield t.request({
                method: "wallet_switchEthereumChain",
                params: [{ chainId: z(s.id) }],
              }),
              s
            );
          } catch (c) {
            if (c.code === 4902)
              try {
                let n;
                e?.blockExplorerUrls
                  ? (n = e.blockExplorerUrls)
                  : (n = s.blockExplorers?.default.url
                      ? [s.blockExplorers?.default.url]
                      : []);
                let i;
                e?.rpcUrls?.length
                  ? (i = e.rpcUrls)
                  : (i = [s.rpcUrls.default?.http[0] ?? ""]);
                let h = {
                  blockExplorerUrls: n,
                  chainId: z(r),
                  chainName: e?.chainName ?? s.name,
                  iconUrls: e?.iconUrls,
                  nativeCurrency: e?.nativeCurrency ?? s.nativeCurrency,
                  rpcUrls: i,
                };
                return (
                  yield t.request({
                    method: "wallet_addEthereumChain",
                    params: [h],
                  }),
                  s
                );
              } catch (n) {
                throw new j(n);
              }
            throw new O(c);
          }
        }
      );
    },
    onAccountsChanged(e) {
      e.length === 0
        ? this.onDisconnect()
        : M.emitter.emit("change", { accounts: e.map((r) => C(r)) });
    },
    onChainChanged(e) {
      let r = Number(e);
      M.emitter.emit("change", { chainId: r });
    },
    onDisconnect(e) {
      return o(this, null, function* () {
        M.emitter.emit("disconnect");
        let r = yield this.getProvider();
        I && (r.removeListener("accountsChanged", I), (I = void 0)),
          p && (r.removeListener("chainChanged", p), (p = void 0)),
          D && (r.removeListener("disconnect", D), (D = void 0));
      });
    },
  });
}
R.type = "metaMask";
function R(y = {}) {
  let f, I, p, D, M, a, e, r;
  return (w) => ({
    id: "metaMaskSDK",
    name: "MetaMask",
    rdns: ["io.metamask", "io.metamask.mobile"],
    type: R.type,
    setup() {
      return o(this, null, function* () {
        let t = yield this.getProvider();
        t?.on &&
          (a || ((a = this.onConnect.bind(this)), t.on("connect", a)),
          D ||
            ((D = this.onAccountsChanged.bind(this)),
            t.on("accountsChanged", D)));
      });
    },
    connect() {
      return o(
        this,
        arguments,
        function* ({
          chainId: t,
          isReconnecting: c,
          withCapabilities: n,
        } = {}) {
          let i = yield this.getProvider();
          e || ((e = this.onDisplayUri), i.on("display_uri", e));
          let h = [];
          c && (h = yield this.getAccounts().catch(() => []));
          try {
            let g, l;
            h?.length ||
              (y.connectAndSign || y.connectWith
                ? (y.connectAndSign
                    ? (g = yield f.connectAndSign({ msg: y.connectAndSign }))
                    : y.connectWith &&
                      (l = yield f.connectWith({
                        method: y.connectWith.method,
                        params: y.connectWith.params,
                      })),
                  (h = yield this.getAccounts()))
                : (h = (yield f.connect()).map((N) => C(N))));
            let d = yield this.getChainId();
            return (
              t &&
                d !== t &&
                (d =
                  (yield this.switchChain({ chainId: t }).catch((N) => {
                    if (N.code === j.code) throw N;
                    return { id: d };
                  }))?.id ?? d),
              e && (i.removeListener("display_uri", e), (e = void 0)),
              g
                ? i.emit("connectAndSign", {
                    accounts: h,
                    chainId: d,
                    signResponse: g,
                  })
                : l &&
                  i.emit("connectWith", {
                    accounts: h,
                    chainId: d,
                    connectWithResponse: l,
                  }),
              a && (i.removeListener("connect", a), (a = void 0)),
              D ||
                ((D = this.onAccountsChanged.bind(this)),
                i.on("accountsChanged", D)),
              M ||
                ((M = this.onChainChanged.bind(this)), i.on("chainChanged", M)),
              r || ((r = this.onDisconnect.bind(this)), i.on("disconnect", r)),
              {
                accounts: n
                  ? h.map((u) => ({ address: u, capabilities: {} }))
                  : h,
                chainId: d,
              }
            );
          } catch (g) {
            let l = g;
            throw l.code === j.code
              ? new j(l)
              : l.code === Q.code
              ? new Q(l)
              : l;
          }
        }
      );
    },
    disconnect() {
      return o(this, null, function* () {
        let t = yield this.getProvider();
        M && (t.removeListener("chainChanged", M), (M = void 0)),
          r && (t.removeListener("disconnect", r), (r = void 0)),
          a || ((a = this.onConnect.bind(this)), t.on("connect", a)),
          yield f.terminate();
      });
    },
    getAccounts() {
      return o(this, null, function* () {
        return (yield (yield this.getProvider()).request({
          method: "eth_accounts",
        })).map((n) => C(n));
      });
    },
    getChainId() {
      return o(this, null, function* () {
        let t = yield this.getProvider(),
          c = t.getChainId() || (yield t?.request({ method: "eth_chainId" }));
        return Number(c);
      });
    },
    getProvider() {
      return o(this, null, function* () {
        function t() {
          return o(this, null, function* () {
            let c = yield o(this, null, function* () {
                let { default: g } = yield (() => {
                  try {
                    return import("./chunk-NGMJZBP5.js");
                  } catch {
                    throw new Error('dependency "@metamask/sdk" not found');
                  }
                })();
                return typeof g != "function" && typeof g.default == "function"
                  ? g.default
                  : g;
              }),
              n = {};
            for (let g of w.chains)
              n[z(g.id)] = P({ chain: g, transports: w.transports })?.[0];
            f = new c(
              S(A({}, y), {
                _source: "wagmi",
                forceDeleteProvider: !1,
                forceInjectProvider: !1,
                injectProvider: !1,
                readonlyRPCMap: n,
                dappMetadata: S(A({}, y.dappMetadata), {
                  name: y.dappMetadata?.name ? y.dappMetadata?.name : "wagmi",
                  url: y.dappMetadata?.url
                    ? y.dappMetadata?.url
                    : typeof window < "u"
                    ? window.location.origin
                    : "https://wagmi.sh",
                }),
                useDeeplink: !0,
              })
            );
            let i = yield f.init(),
              h = i?.activeProvider ? i.activeProvider : f.getProvider();
            if (!h) throw new k();
            return h;
          });
        }
        return I || (p || (p = t()), (I = yield p)), I;
      });
    },
    isAuthorized() {
      return o(this, null, function* () {
        try {
          return !!(yield E(
            () => Y(() => this.getAccounts(), { timeout: 200 }),
            { delay: 201, retryCount: 3 }
          )).length;
        } catch {
          return !1;
        }
      });
    },
    switchChain(n) {
      return o(
        this,
        arguments,
        function* ({ addEthereumChainParameter: t, chainId: c }) {
          let i = yield this.getProvider(),
            h = w.chains.find((d) => d.id === c);
          if (!h) throw new O(new x());
          try {
            return (
              yield i.request({
                method: "wallet_switchEthereumChain",
                params: [{ chainId: z(c) }],
              }),
              yield g(),
              yield l(c),
              h
            );
          } catch (d) {
            let u = d;
            if (u.code === j.code) throw new j(u);
            if (u.code === 4902 || u?.data?.originalError?.code === 4902)
              try {
                return (
                  yield i.request({
                    method: "wallet_addEthereumChain",
                    params: [
                      {
                        blockExplorerUrls: (() => {
                          let v = h.blockExplorers ?? {},
                            { default: N } = v,
                            m = b(v, ["default"]);
                          if (t?.blockExplorerUrls) return t.blockExplorerUrls;
                          if (N)
                            return [
                              N.url,
                              ...Object.values(m).map((L) => L.url),
                            ];
                        })(),
                        chainId: z(c),
                        chainName: t?.chainName ?? h.name,
                        iconUrls: t?.iconUrls,
                        nativeCurrency: t?.nativeCurrency ?? h.nativeCurrency,
                        rpcUrls: t?.rpcUrls?.length
                          ? t.rpcUrls
                          : [h.rpcUrls.default?.http[0] ?? ""],
                      },
                    ],
                  }),
                  yield g(),
                  yield l(c),
                  h
                );
              } catch (N) {
                let m = N;
                throw m.code === j.code ? new j(m) : new O(m);
              }
            throw new O(u);
          }
          function g() {
            return o(this, null, function* () {
              yield E(
                () =>
                  o(this, null, function* () {
                    let d = Z(yield i.request({ method: "eth_chainId" }));
                    if (d !== c)
                      throw new Error(
                        "User rejected switch after adding network."
                      );
                    return d;
                  }),
                { delay: 50, retryCount: 20 }
              );
            });
          }
          function l(d) {
            return o(this, null, function* () {
              yield new Promise((u) => {
                let N = (m) => {
                  "chainId" in m &&
                    m.chainId === d &&
                    (w.emitter.off("change", N), u());
                };
                w.emitter.on("change", N),
                  w.emitter.emit("change", { chainId: d });
              });
            });
          }
        }
      );
    },
    onAccountsChanged(t) {
      return o(this, null, function* () {
        if (t.length === 0)
          if (f.isExtensionActive()) this.onDisconnect();
          else return;
        else if (w.emitter.listenerCount("connect")) {
          let c = (yield this.getChainId()).toString();
          this.onConnect({ chainId: c });
        } else w.emitter.emit("change", { accounts: t.map((c) => C(c)) });
      });
    },
    onChainChanged(t) {
      let c = Number(t);
      w.emitter.emit("change", { chainId: c });
    },
    onConnect(t) {
      return o(this, null, function* () {
        let c = yield this.getAccounts();
        if (c.length === 0) return;
        let n = Number(t.chainId);
        w.emitter.emit("connect", { accounts: c, chainId: n });
        let i = yield this.getProvider();
        a && (i.removeListener("connect", a), (a = void 0)),
          D ||
            ((D = this.onAccountsChanged.bind(this)),
            i.on("accountsChanged", D)),
          M || ((M = this.onChainChanged.bind(this)), i.on("chainChanged", M)),
          r || ((r = this.onDisconnect.bind(this)), i.on("disconnect", r));
      });
    },
    onDisconnect(t) {
      return o(this, null, function* () {
        let c = yield this.getProvider();
        (t && t.code === 1013 && c && (yield this.getAccounts()).length) ||
          (w.emitter.emit("disconnect"),
          M && (c.removeListener("chainChanged", M), (M = void 0)),
          r && (c.removeListener("disconnect", r), (r = void 0)),
          a || ((a = this.onConnect.bind(this)), c.on("connect", a)));
      });
    },
    onDisplayUri(t) {
      w.emitter.emit("message", { type: "display_uri", data: t });
    },
  });
}
function J(y = {}) {
  return (f) => {
    let I = f.chains ?? y.chains ?? [],
      p = f.transports ? f.transports : y.transports,
      D,
      M,
      a,
      e,
      r;
    return {
      connect() {
        return o(this, arguments, function* (c = {}) {
          var n = c,
            { chainId: s = I[0].id } = n,
            t = b(n, ["chainId"]);
          let i = ("isReconnecting" in t && t.isReconnecting) || !1,
            h = ("withCapabilities" in t && t.withCapabilities) || !1,
            g = [],
            l;
          i &&
            (([g, l] = yield Promise.all([
              this.getAccounts().catch(() => []),
              this.getChainId().catch(() => {}),
            ])),
            s &&
              l !== s &&
              (l =
                (yield this.switchChain({ chainId: s }).catch((N) => {
                  if (N.code === j.code) throw N;
                  return { id: l };
                }))?.id ?? l));
          let d = yield this.getProvider();
          try {
            if (!g?.length && !i) {
              let { RpcSchema: u } = yield (() => {
                  try {
                    return import("./chunk-YISKBLUW.js");
                  } catch {
                    throw new Error('dependency "porto" not found');
                  }
                })(),
                { z: N } = yield (() => {
                  try {
                    return import("./chunk-FEHSLAB7.js");
                  } catch {
                    throw new Error('dependency "porto/internal" not found');
                  }
                })(),
                m = yield d.request({
                  method: "wallet_connect",
                  params: [
                    S(
                      A(
                        {},
                        "capabilities" in t
                          ? {
                              capabilities: N.encode(
                                u.wallet_connect.Capabilities,
                                t.capabilities ?? {}
                              ),
                            }
                          : {}
                      ),
                      {
                        chainIds: [
                          z(s),
                          ...I.filter((v) => v.id !== s).map((v) => z(v.id)),
                        ],
                      }
                    ),
                  ],
                });
              (g = m.accounts), (l = Number(m.chainIds[0]));
            }
            if (!l) throw new x();
            return (
              e && (d.removeListener("connect", e), (e = void 0)),
              M ||
                ((M = this.onAccountsChanged.bind(this)),
                d.on("accountsChanged", M)),
              a ||
                ((a = this.onChainChanged.bind(this)), d.on("chainChanged", a)),
              r || ((r = this.onDisconnect.bind(this)), d.on("disconnect", r)),
              {
                accounts: g.map((u) =>
                  typeof u == "object"
                    ? h
                      ? u
                      : u.address
                    : h
                    ? { address: u, capabilities: {} }
                    : u
                ),
                chainId: l,
              }
            );
          } catch (u) {
            let N = u;
            throw N.code === j.code ? new j(N) : N;
          }
        });
      },
      disconnect() {
        return o(this, null, function* () {
          let s = yield this.getProvider();
          a && (s.removeListener("chainChanged", a), (a = void 0)),
            r && (s.removeListener("disconnect", r), (r = void 0)),
            e || ((e = this.onConnect.bind(this)), s.on("connect", e)),
            yield s.request({ method: "wallet_disconnect" });
        });
      },
      getAccounts() {
        return o(this, null, function* () {
          return (yield (yield this.getProvider()).request({
            method: "eth_accounts",
          })).map((c) => C(c));
        });
      },
      getChainId() {
        return o(this, null, function* () {
          let t = yield (yield this.getProvider()).request({
            method: "eth_chainId",
          });
          return Number(t);
        });
      },
      getPortoInstance() {
        return o(this, null, function* () {
          return (
            (D ??= o(this, null, function* () {
              let { Porto: s } = yield (() => {
                try {
                  return import("./chunk-YISKBLUW.js");
                } catch {
                  throw new Error('dependency "porto" not found');
                }
              })();
              return s.create(
                S(A({}, y), { announceProvider: !1, chains: I, transports: p })
              );
            })),
            yield D
          );
        });
      },
      getProvider() {
        return o(this, null, function* () {
          return (yield this.getPortoInstance()).provider;
        });
      },
      icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDIyIiBoZWlnaHQ9IjQyMiIgdmlld0JveD0iMCAwIDQyMiA0MjIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MjIiIGhlaWdodD0iNDIyIiBmaWxsPSJibGFjayIvPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfMV8xNSkiPgo8cGF0aCBkPSJNODEgMjg2LjM2NkM4MSAyODAuODkzIDg1LjQ1MDUgMjc2LjQ1NSA5MC45NDA0IDI3Ni40NTVIMzI5LjUxMUMzMzUuMDAxIDI3Ni40NTUgMzM5LjQ1MiAyODAuODkzIDMzOS40NTIgMjg2LjM2NlYzMDYuMTg4QzMzOS40NTIgMzExLjY2MiAzMzUuMDAxIDMxNi4wOTkgMzI5LjUxMSAzMTYuMDk5SDkwLjk0MDRDODUuNDUwNSAzMTYuMDk5IDgxIDMxMS42NjIgODEgMzA2LjE4OFYyODYuMzY2WiIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC41Ii8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNOTAuOTQwNCAyMzQuODI4Qzg1LjQ1MDUgMjM0LjgyOCA4MSAyMzkuMjY2IDgxIDI0NC43MzlWMjcxLjUzMUM4My44NDMyIDI2OS42MzMgODcuMjYyMiAyNjguNTI2IDkwLjk0MDQgMjY4LjUyNkgzMjkuNTExQzMzMy4xODggMjY4LjUyNiAzMzYuNjA4IDI2OS42MzMgMzM5LjQ1MiAyNzEuNTMxVjI0NC43MzlDMzM5LjQ1MiAyMzkuMjY2IDMzNS4wMDEgMjM0LjgyOCAzMjkuNTExIDIzNC44MjhIOTAuOTQwNFpNMzM5LjQ1MiAyODYuMzY2QzMzOS40NTIgMjgwLjg5MyAzMzUuMDAxIDI3Ni40NTUgMzI5LjUxMSAyNzYuNDU1SDkwLjk0MDRDODUuNDUwNSAyNzYuNDU1IDgxIDI4MC44OTMgODEgMjg2LjM2NlYzMDYuMTlDODEgMzExLjY2NCA4NS40NTA1IDMxNi4xMDEgOTAuOTQwNCAzMTYuMTAxSDMyOS41MTFDMzM1LjAwMSAzMTYuMTAxIDMzOS40NTIgMzExLjY2NCAzMzkuNDUyIDMwNi4xOVYyODYuMzY2WiIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC41Ii8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNOTAuOTQwNCAxOTMuMjAxQzg1LjQ1MDUgMTkzLjIwMSA4MSAxOTcuNjM4IDgxIDIwMy4xMTJWMjI5LjkwM0M4My44NDMyIDIyOC4wMDYgODcuMjYyMiAyMjYuODk5IDkwLjk0MDQgMjI2Ljg5OUgzMjkuNTExQzMzMy4xODggMjI2Ljg5OSAzMzYuNjA4IDIyOC4wMDYgMzM5LjQ1MiAyMjkuOTAzVjIwMy4xMTJDMzM5LjQ1MiAxOTcuNjM4IDMzNS4wMDEgMTkzLjIwMSAzMjkuNTExIDE5My4yMDFIOTAuOTQwNFpNMzM5LjQ1MiAyNDQuNzM5QzMzOS40NTIgMjM5LjI2NSAzMzUuMDAxIDIzNC44MjggMzI5LjUxMSAyMzQuODI4SDkwLjk0MDRDODUuNDUwNSAyMzQuODI4IDgxIDIzOS4yNjUgODEgMjQ0LjczOVYyNzEuNTNDODEuMjE3NSAyNzEuMzg1IDgxLjQzODMgMjcxLjI0NSA4MS42NjI0IDI3MS4xMDlDODMuODMyNSAyNjkuNzk0IDg2LjMwNTQgMjY4LjkyNyA4OC45NTIzIDI2OC42MzVDODkuNjA1MSAyNjguNTYzIDkwLjI2ODQgMjY4LjUyNiA5MC45NDA0IDI2OC41MjZIMzI5LjUxMUMzMzAuMTgzIDI2OC41MjYgMzMwLjg0NiAyNjguNTYzIDMzMS40OTggMjY4LjYzNUMzMzQuNDE5IDI2OC45NTcgMzM3LjEyOCAyNjkuOTggMzM5LjQ1MiAyNzEuNTNWMjQ0LjczOVpNMzM5LjQ1MiAyODYuMzY2QzMzOS40NTIgMjgxLjAyMSAzMzUuMjA2IDI3Ni42NjMgMzI5Ljg5MyAyNzYuNDYyQzMyOS43NjcgMjc2LjQ1NyAzMjkuNjQgMjc2LjQ1NSAzMjkuNTExIDI3Ni40NTVIOTAuOTQwNEM4NS40NTA1IDI3Ni40NTUgODEgMjgwLjg5MyA4MSAyODYuMzY2VjMwNi4xODhDODEgMzExLjY2MiA4NS40NTA1IDMxNi4xMDEgOTAuOTQwNCAzMTYuMTAxSDMyOS41MTFDMzM1LjAwMSAzMTYuMTAxIDMzOS40NTIgMzExLjY2MiAzMzkuNDUyIDMwNi4xODhWMjg2LjM2NloiIGZpbGw9IndoaXRlIiBmaWxsLW9wYWNpdHk9IjAuNSIvPgo8cGF0aCBvcGFjaXR5PSIwLjMiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNOTguMDE0NiAxMDRDODguNjE3NyAxMDQgODEgMTExLjU5NSA4MSAxMjAuOTY1VjE4OC4yNzZDODMuODQzMiAxODYuMzc5IDg3LjI2MjIgMTg1LjI3MiA5MC45NDA0IDE4NS4yNzJIMzI5LjUxMUMzMzMuMTg4IDE4NS4yNzIgMzM2LjYwOCAxODYuMzc5IDMzOS40NTIgMTg4LjI3NlYxMjAuOTY1QzMzOS40NTIgMTExLjU5NSAzMzEuODMzIDEwNCAzMjIuNDM3IDEwNEg5OC4wMTQ2Wk0zMzkuNDUyIDIwMy4xMTJDMzM5LjQ1MiAxOTcuNjM4IDMzNS4wMDEgMTkzLjIwMSAzMjkuNTExIDE5My4yMDFIOTAuOTQwNEM4NS40NTA1IDE5My4yMDEgODEgMTk3LjYzOCA4MSAyMDMuMTEyVjIyOS45MDNDODEuMjE3NSAyMjkuNzU4IDgxLjQzODMgMjI5LjYxOCA4MS42NjI0IDIyOS40ODJDODMuODMyNSAyMjguMTY3IDg2LjMwNTQgMjI3LjMgODguOTUyMyAyMjcuMDA4Qzg5LjYwNTEgMjI2LjkzNiA5MC4yNjg0IDIyNi44OTkgOTAuOTQwNCAyMjYuODk5SDMyOS41MTFDMzMwLjE4MyAyMjYuODk5IDMzMC44NDYgMjI2LjkzNiAzMzEuNDk4IDIyNy4wMDhDMzM0LjQxOSAyMjcuMzMgMzM3LjEyOCAyMjguMzUyIDMzOS40NTIgMjI5LjkwM1YyMDMuMTEyWk0zMzkuNDUyIDI0NC43MzlDMzM5LjQ1MiAyMzkuMzkzIDMzNS4yMDYgMjM1LjAzNiAzMjkuODkzIDIzNC44MzVDMzI5Ljc2NyAyMzQuODMgMzI5LjY0IDIzNC44MjggMzI5LjUxMSAyMzQuODI4SDkwLjk0MDRDODUuNDUwNSAyMzQuODI4IDgxIDIzOS4yNjUgODEgMjQ0LjczOVYyNzEuNTNMODEuMDcwNyAyNzEuNDgzQzgxLjI2NTMgMjcxLjM1NSA4MS40NjI1IDI3MS4yMyA4MS42NjI0IDI3MS4xMDlDODEuOTA4MyAyNzAuOTYgODIuMTU4MSAyNzAuODE3IDgyLjQxMTcgMjcwLjY3OUM4NC4zOTUzIDI2OS42MDUgODYuNjA1NCAyNjguODk0IDg4Ljk1MjMgMjY4LjYzNUM4OS4wMDUyIDI2OC42MjkgODkuMDU4IDI2OC42MjQgODkuMTExIDI2OC42MThDODkuNzEyNSAyNjguNTU3IDkwLjMyMjggMjY4LjUyNiA5MC45NDA0IDI2OC41MjZIMzI5LjUxMUMzMjkuNzM4IDI2OC41MjYgMzI5Ljk2NSAyNjguNTMgMzMwLjE5MiAyNjguNTM5QzMzMC42MzEgMjY4LjU1NSAzMzEuMDY3IDI2OC41ODcgMzMxLjQ5OCAyNjguNjM1QzMzNC40MTkgMjY4Ljk1NyAzMzcuMTI4IDI2OS45OCAzMzkuNDUyIDI3MS41M1YyNDQuNzM5Wk0zMzkuNDUyIDI4Ni4zNjZDMzM5LjQ1MiAyODEuMDIxIDMzNS4yMDYgMjc2LjY2MyAzMjkuODkzIDI3Ni40NjJMMzI5Ljg2NSAyNzYuNDYxQzMyOS43NDggMjc2LjQ1NyAzMjkuNjI5IDI3Ni40NTUgMzI5LjUxMSAyNzYuNDU1SDkwLjk0MDRDODUuNDUwNSAyNzYuNDU1IDgxIDI4MC44OTMgODEgMjg2LjM2NlYzMDYuMTg4QzgxIDMxMS42NjIgODUuNDUwNSAzMTYuMTAxIDkwLjk0MDQgMzE2LjEwMUgzMjkuNTExQzMzNS4wMDEgMzE2LjEwMSAzMzkuNDUyIDMxMS42NjIgMzM5LjQ1MiAzMDYuMTg4VjI4Ni4zNjZaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMjY5Ljg2OCAxMzEuNzUyQzI2OS44NjggMTI2LjI3OCAyNzQuMzE4IDEyMS44NCAyNzkuODA4IDEyMS44NEgzMTEuNjE4QzMxNy4xMDggMTIxLjg0IDMyMS41NTggMTI2LjI3OCAzMjEuNTU4IDEzMS43NTJWMTYxLjQ4NUMzMjEuNTU4IDE2Ni45NTkgMzE3LjEwOCAxNzEuMzk2IDMxMS42MTggMTcxLjM5NkgyNzkuODA4QzI3NC4zMTggMTcxLjM5NiAyNjkuODY4IDE2Ni45NTkgMjY5Ljg2OCAxNjEuNDg1VjEzMS43NTJaIiBmaWxsPSJ3aGl0ZSIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzFfMTUiPgo8cmVjdCB3aWR0aD0iMjU5IiBoZWlnaHQ9IjIxMyIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDgxIDEwNCkiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K",
      id: "xyz.ithaca.porto",
      isAuthorized() {
        return o(this, null, function* () {
          try {
            return !!(yield E(() => this.getAccounts())).length;
          } catch {
            return !1;
          }
        });
      },
      name: "Porto",
      onAccountsChanged(s) {
        return o(this, null, function* () {
          f.emitter.emit("change", { accounts: s.map((t) => C(t)) });
        });
      },
      onChainChanged(s) {
        let t = Number(s);
        f.emitter.emit("change", { chainId: t });
      },
      onConnect(s) {
        return o(this, null, function* () {
          let t = yield this.getAccounts();
          if (t.length === 0) return;
          let c = Number(s.chainId);
          f.emitter.emit("connect", { accounts: t, chainId: c });
          let n = yield this.getProvider();
          n &&
            (e && (n.removeListener("connect", e), (e = void 0)),
            M ||
              ((M = this.onAccountsChanged.bind(this)),
              n.on("accountsChanged", M)),
            a ||
              ((a = this.onChainChanged.bind(this)), n.on("chainChanged", a)),
            r || ((r = this.onDisconnect.bind(this)), n.on("disconnect", r)));
        });
      },
      onDisconnect(s) {
        return o(this, null, function* () {
          let t = yield this.getProvider();
          f.emitter.emit("disconnect"),
            t &&
              (a && (t.removeListener("chainChanged", a), (a = void 0)),
              r && (t.removeListener("disconnect", r), (r = void 0)),
              e || ((e = this.onConnect.bind(this)), t.on("connect", e)));
        });
      },
      setup() {
        return o(this, null, function* () {
          if (!e) {
            let s = yield this.getProvider();
            (e = this.onConnect.bind(this)), s.on("connect", e);
          }
        });
      },
      switchChain(t) {
        return o(this, arguments, function* ({ chainId: s }) {
          let c = I.find((i) => i.id === s);
          if (!c) throw new O(new x());
          return (
            yield (yield this.getProvider()).request({
              method: "wallet_switchEthereumChain",
              params: [{ chainId: z(s) }],
            }),
            c
          );
        });
      },
      type: "injected",
    };
  };
}
_.type = "safe";
function _(y = {}) {
  let { shimDisconnect: f = !1 } = y,
    I,
    p;
  return (D) => ({
    id: "safe",
    name: "Safe",
    type: _.type,
    connect() {
      return o(this, arguments, function* ({ withCapabilities: a } = {}) {
        let e = yield this.getProvider();
        if (!e) throw new k();
        let r = yield this.getAccounts(),
          w = yield this.getChainId();
        return (
          p || ((p = this.onDisconnect.bind(this)), e.on("disconnect", p)),
          f && (yield D.storage?.removeItem("safe.disconnected")),
          {
            accounts: a ? r.map((s) => ({ address: s, capabilities: {} })) : r,
            chainId: w,
          }
        );
      });
    },
    disconnect() {
      return o(this, null, function* () {
        let a = yield this.getProvider();
        if (!a) throw new k();
        p && (a.removeListener("disconnect", p), (p = void 0)),
          f && (yield D.storage?.setItem("safe.disconnected", !0));
      });
    },
    getAccounts() {
      return o(this, null, function* () {
        let a = yield this.getProvider();
        if (!a) throw new k();
        return (yield a.request({ method: "eth_accounts" })).map(C);
      });
    },
    getProvider() {
      return o(this, null, function* () {
        if (typeof window < "u" && window?.parent !== window) {
          if (!I) {
            let { default: e } = yield (() => {
                try {
                  return import("./chunk-DGO2ZUWA.js");
                } catch {
                  throw new Error(
                    'dependency "@safe-global/safe-apps-sdk" not found'
                  );
                }
              })(),
              r = new e(y),
              w = yield Y(() => r.safe.getInfo(), {
                timeout: y.unstable_getInfoTimeout ?? 10,
              });
            if (!w) throw new Error("Could not load Safe information");
            let s = yield o(this, null, function* () {
              let t = yield (() => {
                try {
                  return import("./chunk-BJUDBDVP.js");
                } catch {
                  throw new Error(
                    'dependency "@safe-global/safe-apps-provider" not found'
                  );
                }
              })();
              return typeof t.SafeAppProvider != "function" &&
                typeof t.default.SafeAppProvider == "function"
                ? t.default.SafeAppProvider
                : t.SafeAppProvider;
            });
            I = new s(w, r);
          }
          return I;
        }
      });
    },
    getChainId() {
      return o(this, null, function* () {
        let a = yield this.getProvider();
        if (!a) throw new k();
        return Number(a.chainId);
      });
    },
    isAuthorized() {
      return o(this, null, function* () {
        try {
          return f && (yield D.storage?.getItem("safe.disconnected"))
            ? !1
            : !!(yield this.getAccounts()).length;
        } catch {
          return !1;
        }
      });
    },
    onAccountsChanged() {},
    onChainChanged() {},
    onDisconnect() {
      D.emitter.emit("disconnect");
    },
  });
}
var H = "7.2.1";
W.type = "walletConnect";
function W(y) {
  let f = y.isNewChainsStale ?? !0,
    I,
    p,
    D = "eip155",
    M,
    a,
    e,
    r,
    w,
    s;
  return (t) => ({
    id: "walletConnect",
    name: "WalletConnect",
    type: W.type,
    setup() {
      return o(this, null, function* () {
        let n = yield this.getProvider().catch(() => null);
        n &&
          (e || ((e = this.onConnect.bind(this)), n.on("connect", e)),
          w ||
            ((w = this.onSessionDelete.bind(this)), n.on("session_delete", w)));
      });
    },
    connect() {
      return o(this, arguments, function* (g = {}) {
        var l = g,
          { chainId: n, withCapabilities: i } = l,
          h = b(l, ["chainId", "withCapabilities"]);
        try {
          let d = yield this.getProvider();
          if (!d) throw new k();
          r || ((r = this.onDisplayUri), d.on("display_uri", r));
          let u = n;
          if (!u) {
            let L = (yield t.storage?.getItem("state")) ?? {};
            t.chains.some((G) => G.id === L.chainId)
              ? (u = L.chainId)
              : (u = t.chains[0]?.id);
          }
          if (!u) throw new Error("No chains found on connector.");
          let N = yield this.isChainsStale();
          if ((d.session && N && (yield d.disconnect()), !d.session || N)) {
            let L = t.chains.filter((T) => T.id !== u).map((T) => T.id);
            yield d.connect(
              A(
                { optionalChains: [u, ...L] },
                "pairingTopic" in h ? { pairingTopic: h.pairingTopic } : {}
              )
            ),
              this.setRequestedChainsIds(t.chains.map((T) => T.id));
          }
          let m = (yield d.enable()).map((L) => C(L)),
            v = yield this.getChainId();
          return (
            n &&
              v !== n &&
              (v =
                (yield this.switchChain({ chainId: n }).catch((T) => {
                  if (
                    T.code === j.code &&
                    T.cause?.message !==
                      "Missing or invalid. request() method: wallet_addEthereumChain"
                  )
                    throw T;
                  return { id: v };
                }))?.id ?? v),
            r && (d.removeListener("display_uri", r), (r = void 0)),
            e && (d.removeListener("connect", e), (e = void 0)),
            M ||
              ((M = this.onAccountsChanged.bind(this)),
              d.on("accountsChanged", M)),
            a ||
              ((a = this.onChainChanged.bind(this)), d.on("chainChanged", a)),
            s || ((s = this.onDisconnect.bind(this)), d.on("disconnect", s)),
            w ||
              ((w = this.onSessionDelete.bind(this)),
              d.on("session_delete", w)),
            {
              accounts: i
                ? m.map((L) => ({ address: L, capabilities: {} }))
                : m,
              chainId: v,
            }
          );
        } catch (d) {
          throw /(user rejected|connection request reset)/i.test(d?.message)
            ? new j(d)
            : d;
        }
      });
    },
    disconnect() {
      return o(this, null, function* () {
        let n = yield this.getProvider();
        try {
          yield n?.disconnect();
        } catch (i) {
          if (!/No matching key/i.test(i.message)) throw i;
        } finally {
          a && (n?.removeListener("chainChanged", a), (a = void 0)),
            s && (n?.removeListener("disconnect", s), (s = void 0)),
            e || ((e = this.onConnect.bind(this)), n?.on("connect", e)),
            M && (n?.removeListener("accountsChanged", M), (M = void 0)),
            w && (n?.removeListener("session_delete", w), (w = void 0)),
            this.setRequestedChainsIds([]);
        }
      });
    },
    getAccounts() {
      return o(this, null, function* () {
        return (yield this.getProvider()).accounts.map((i) => C(i));
      });
    },
    getProvider() {
      return o(this, arguments, function* ({ chainId: n } = {}) {
        function i() {
          return o(this, null, function* () {
            let h = t.chains.map((l) => l.id);
            if (!h.length) return;
            let { EthereumProvider: g } = yield (() => {
              try {
                return import("./chunk-EBNEVISR.js");
              } catch {
                throw new Error(
                  'dependency "@walletconnect/ethereum-provider" not found'
                );
              }
            })();
            return yield g.init(
              S(A({}, y), {
                disableProviderPing: !0,
                optionalChains: h,
                projectId: y.projectId,
                rpcMap: Object.fromEntries(
                  t.chains.map((l) => {
                    let [d] = P({ chain: l, transports: t.transports });
                    return [l.id, d];
                  })
                ),
                showQrModal: y.showQrModal ?? !0,
              })
            );
          });
        }
        return (
          I ||
            (p || (p = i()),
            (I = yield p),
            I?.events.setMaxListeners(Number.POSITIVE_INFINITY)),
          n && (yield this.switchChain?.({ chainId: n })),
          I
        );
      });
    },
    getChainId() {
      return o(this, null, function* () {
        return (yield this.getProvider()).chainId;
      });
    },
    isAuthorized() {
      return o(this, null, function* () {
        try {
          let [n, i] = yield Promise.all([
            this.getAccounts(),
            this.getProvider(),
          ]);
          return n.length
            ? (yield this.isChainsStale()) && i.session
              ? (yield i.disconnect().catch(() => {}), !1)
              : !0
            : !1;
        } catch {
          return !1;
        }
      });
    },
    switchChain(h) {
      return o(
        this,
        arguments,
        function* ({ addEthereumChainParameter: n, chainId: i }) {
          let g = yield this.getProvider();
          if (!g) throw new k();
          let l = t.chains.find((d) => d.id === i);
          if (!l) throw new O(new x());
          try {
            yield Promise.all([
              new Promise((u) => {
                let N = ({ chainId: m }) => {
                  m === i && (t.emitter.off("change", N), u());
                };
                t.emitter.on("change", N);
              }),
              g.request({
                method: "wallet_switchEthereumChain",
                params: [{ chainId: z(i) }],
              }),
            ]);
            let d = yield this.getRequestedChainsIds();
            return this.setRequestedChainsIds([...d, i]), l;
          } catch (d) {
            let u = d;
            if (/(user rejected)/i.test(u.message)) throw new j(u);
            try {
              let N;
              n?.blockExplorerUrls
                ? (N = n.blockExplorerUrls)
                : (N = l.blockExplorers?.default.url
                    ? [l.blockExplorers?.default.url]
                    : []);
              let m;
              n?.rpcUrls?.length
                ? (m = n.rpcUrls)
                : (m = [...l.rpcUrls.default.http]);
              let v = {
                blockExplorerUrls: N,
                chainId: z(i),
                chainName: n?.chainName ?? l.name,
                iconUrls: n?.iconUrls,
                nativeCurrency: n?.nativeCurrency ?? l.nativeCurrency,
                rpcUrls: m,
              };
              yield g.request({
                method: "wallet_addEthereumChain",
                params: [v],
              });
              let L = yield this.getRequestedChainsIds();
              return this.setRequestedChainsIds([...L, i]), l;
            } catch (N) {
              throw new j(N);
            }
          }
        }
      );
    },
    onAccountsChanged(n) {
      n.length === 0
        ? this.onDisconnect()
        : t.emitter.emit("change", { accounts: n.map((i) => C(i)) });
    },
    onChainChanged(n) {
      let i = Number(n);
      t.emitter.emit("change", { chainId: i });
    },
    onConnect(n) {
      return o(this, null, function* () {
        let i = Number(n.chainId),
          h = yield this.getAccounts();
        t.emitter.emit("connect", { accounts: h, chainId: i });
      });
    },
    onDisconnect(n) {
      return o(this, null, function* () {
        this.setRequestedChainsIds([]), t.emitter.emit("disconnect");
        let i = yield this.getProvider();
        M && (i.removeListener("accountsChanged", M), (M = void 0)),
          a && (i.removeListener("chainChanged", a), (a = void 0)),
          s && (i.removeListener("disconnect", s), (s = void 0)),
          w && (i.removeListener("session_delete", w), (w = void 0)),
          e || ((e = this.onConnect.bind(this)), i.on("connect", e));
      });
    },
    onDisplayUri(n) {
      t.emitter.emit("message", { type: "display_uri", data: n });
    },
    onSessionDelete() {
      this.onDisconnect();
    },
    getNamespaceChainsIds() {
      return I
        ? I.session?.namespaces[D]?.accounts?.map((i) =>
            Number.parseInt(i.split(":")[1] || "", 10)
          ) ?? []
        : [];
    },
    getRequestedChainsIds() {
      return o(this, null, function* () {
        return (yield t.storage?.getItem(this.requestedChainsStorageKey)) ?? [];
      });
    },
    isChainsStale() {
      return o(this, null, function* () {
        if (!f) return !1;
        let n = t.chains.map((g) => g.id),
          i = this.getNamespaceChainsIds();
        if (i.length && !i.some((g) => n.includes(g))) return !1;
        let h = yield this.getRequestedChainsIds();
        return !n.every((g) => h.includes(g));
      });
    },
    setRequestedChainsIds(n) {
      return o(this, null, function* () {
        yield t.storage?.setItem(this.requestedChainsStorageKey, n);
      });
    },
    get requestedChainsStorageKey() {
      return `${this.id}.requestedChains`;
    },
  });
}
export {
  F as baseAccount,
  q as coinbaseWallet,
  V as injected,
  R as metaMask,
  B as mock,
  J as porto,
  _ as safe,
  H as version,
  W as walletConnect,
};
