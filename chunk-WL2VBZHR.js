import { a as ne } from "./chunk-AKYI4DRB.js";
import { b as v, c as x, d as y, g as M } from "./chunk-T7KGZUCO.js";
import {
  d as te,
  e as Pe,
  f as Ue,
  g as Re,
  h as R,
} from "./chunk-HK6N7TS4.js";
import "./chunk-TXWSAHNN.js";
import "./chunk-H4BANHQJ.js";
import "./chunk-IV5FR2YO.js";
import "./chunk-TSLWMKS5.js";
import {
  a as he,
  b as V,
  c as z,
  d as le,
  e as B,
  g as Ce,
  i as A,
  j as ue,
  k as G,
  l as me,
  m as ge,
  o as Q,
  p as Y,
  q as pe,
  r as we,
  s as fe,
  t as Ie,
  u as Ne,
  v as Ee,
  w as Ae,
  y as ve,
} from "./chunk-QTVP2MUK.js";
import "./chunk-2CDTKQ3E.js";
import "./chunk-6II4O2PQ.js";
import "./chunk-N425SZE3.js";
import {
  H as I,
  d as T,
  e as S,
  j as k,
  o as Te,
  u as ke,
  w as ee,
  x as D,
} from "./chunk-U7GUEFJZ.js";
import "./chunk-GBTQH4B2.js";
import { b as l, c as L, j as Z, k as q } from "./chunk-2K64HG7Q.js";
import { a as ye, e as be } from "./chunk-LZ4YD47P.js";
import "./chunk-QSWUHUZZ.js";
import { qa as de } from "./chunk-IYKVXYEM.js";
import "./chunk-CP2O2YAF.js";
import "./chunk-ZRBE6OMV.js";
import "./chunk-Z3SE2D4B.js";
import "./chunk-5LQ6A2AX.js";
import {
  Z as X,
  ac as U,
  fc as O,
  ha as ae,
  ia as j,
  lb as ce,
} from "./chunk-5G3DVQVW.js";
import "./chunk-HINDXNTT.js";
import "./chunk-X3F4NDXO.js";
import "./chunk-JKZLGYQN.js";
import "./chunk-EEU3LH2V.js";
import "./chunk-TRLFM7P4.js";
import "./chunk-QMRWXCSQ.js";
import { a as N, b as P, f as F, m as se, n as a } from "./chunk-VNDKUXGB.js";
function ie(w) {
  let e = [],
    t,
    n;
  function i(c) {
    let u = I.getCaipNetworks(l.CHAIN.EVM),
      s = Number(L.parseEvmChainId(c));
    if (!u.some((m) => String(m.id) === String(c))) {
      let m = I.getActiveCaipNetwork(l.CHAIN.EVM)?.id || u[0]?.id;
      m && Number.isInteger(Number(m)) && (s = Number(m));
    }
    if (!s) throw new Error("ChainId not found in networks");
    return s;
  }
  function o() {
    return (
      t ||
        (t = ne.getInstance({
          projectId: w.options.projectId,
          chainId: D()?.caipNetworkId,
          enableLogger: w.options.enableAuthLogger,
          onTimeout: (c) => {
            c === "iframe_load_failed"
              ? R.open(y.ALERT_ERRORS.IFRAME_LOAD_FAILED, "error")
              : c === "iframe_request_timeout"
              ? R.open(y.ALERT_ERRORS.IFRAME_REQUEST_TIMEOUT, "error")
              : c === "unverified_domain" &&
                R.open(y.ALERT_ERRORS.UNVERIFIED_DOMAIN, "error");
          },
          abortController: y.EmbeddedWalletAbortController,
          getActiveCaipNetwork: (c) => D(c),
          getCaipNetworks: (c) => I.getCaipNetworks(c),
        })),
      t
    );
  }
  function g() {
    return a(this, arguments, function* (c = {}) {
      let u = o(),
        s = c.chainId;
      if (c.isReconnecting) {
        let p = L.parseEvmChainId(u.getLastUsedChainId() || ""),
          f = w.chains?.[0].id;
        if (((s = p || f), !s))
          throw new Error("ChainId not found in provider");
      }
      let m = ee("eip155"),
        {
          address: r,
          chainId: d,
          accounts: C,
        } = yield Ue.authConnectorAuthenticate({
          authConnector: u,
          chainId: s,
          preferredAccountType: m,
          socialUri: c.socialUri,
          chainNamespace: l.CHAIN.EVM,
        });
      e = C?.map((p) => p.address) || [r];
      let h = i(d);
      return {
        accounts: e,
        account: r,
        chainId: h,
        chain: { id: h, unsupported: !1 },
      };
    });
  }
  return (c) => ({
    id: l.CONNECTOR_ID.AUTH,
    name: l.CONNECTOR_NAMES.AUTH,
    type: "AUTH",
    chain: l.CHAIN.EVM,
    connect() {
      return a(this, arguments, function* (s = {}) {
        if (n) {
          let r = yield n;
          return {
            accounts: s.withCapabilities
              ? r.accounts.map((d) => ({ address: d, capabilities: {} }))
              : r.accounts,
            chainId: r.chainId,
          };
        }
        n ||
          (n = new Promise((r) => {
            r(g(s));
          }));
        let m = yield n;
        return (
          (n = void 0),
          {
            accounts: s.withCapabilities
              ? m.accounts.map((r) => ({ address: r, capabilities: {} }))
              : m.accounts,
            chainId: m.chainId,
          }
        );
      });
    },
    disconnect() {
      return a(this, null, function* () {
        yield (yield this.getProvider()).disconnect();
      });
    },
    getAccounts() {
      return e?.length
        ? (c.emitter.emit("change", { accounts: e }), Promise.resolve(e))
        : Promise.resolve([]);
    },
    getProvider() {
      return a(this, null, function* () {
        return (
          this.provider ||
            (this.provider = ne.getInstance({
              projectId: w.options.projectId,
              chainId: D()?.caipNetworkId,
              enableLogger: w.options.enableAuthLogger,
              abortController: y.EmbeddedWalletAbortController,
              onTimeout: (s) => {
                s === "iframe_load_failed"
                  ? R.open(y.ALERT_ERRORS.IFRAME_LOAD_FAILED, "error")
                  : s === "iframe_request_timeout"
                  ? R.open(y.ALERT_ERRORS.IFRAME_REQUEST_TIMEOUT, "error")
                  : s === "unverified_domain" &&
                    R.open(y.ALERT_ERRORS.UNVERIFIED_DOMAIN, "error");
              },
              getActiveCaipNetwork: (s) => D(s),
              getCaipNetworks: (s) => I.getCaipNetworks(s),
            })),
          Promise.resolve(this.provider)
        );
      });
    },
    getChainId() {
      return a(this, null, function* () {
        let s = yield this.getProvider(),
          { chainId: m } = yield s.getChainId();
        return i(m);
      });
    },
    isAuthorized() {
      return a(this, null, function* () {
        let m = I.state.activeChain === l.CHAIN.EVM;
        if (
          l.AUTH_CONNECTOR_SUPPORTED_CHAINS.some(
            (C) => ke.getConnectorId(C) === l.CONNECTOR_ID.AUTH
          ) &&
          !m
        )
          return !1;
        let d = yield this.getProvider();
        return Promise.resolve(d.getLoginEmailUsed());
      });
    },
    switchChain(m) {
      return a(this, arguments, function* ({ chainId: s }) {
        try {
          let r = c.chains.find((p) => p.id === s);
          if (!r) throw new O(new Error("chain not found on connector."));
          let d = yield this.getProvider(),
            C = ee("eip155"),
            h = yield d.connect({ chainId: s, preferredAccountType: C });
          return (
            (e = h?.accounts?.map((p) => p.address) || [h.address]),
            c.emitter.emit("change", { chainId: Number(s), accounts: e }),
            r
          );
        } catch (r) {
          throw r instanceof Error ? new O(r) : r;
        }
      });
    },
    onAccountsChanged(s) {
      s.length === 0
        ? this.onDisconnect()
        : c.emitter.emit("change", { accounts: s.map(j) });
    },
    onChainChanged(s) {
      let m = Number(s);
      c.emitter.emit("change", { chainId: m });
    },
    onDisconnect(s) {
      return a(this, null, function* () {
        yield (yield this.getProvider()).disconnect();
      });
    },
  });
}
K.type = "walletConnect";
function K(w) {
  let e = w.isNewChainsStale ?? !0,
    t,
    n,
    i,
    o,
    g,
    c,
    u;
  return (s) => ({
    id: "walletConnect",
    name: "WalletConnect",
    type: K.type,
    provider: w.universalProvider,
    setup() {
      return a(this, null, function* () {
        let r = yield this.getProvider().catch(() => null);
        r &&
          (o || ((o = this.onConnect.bind(this)), r.on("connect", o)),
          c ||
            ((c = this.onSessionDelete.bind(this)), r.on("session_delete", c)));
      });
    },
    connect() {
      return a(this, arguments, function* (d = {}) {
        var r = F(d, []);
        try {
          let C = I.getCaipNetworks(),
            h = yield this.getProvider();
          if (!h) throw new Q();
          g || ((g = this.onDisplayUri), h.on("display_uri", g));
          let p = yield this.isChainsStale();
          h.session && p && (yield h.disconnect());
          let f = k.state.universalProviderConfigOverride;
          if (!h.session || p) {
            let J = te.createNamespaces(C, f);
            yield h.connect(
              N(
                { optionalNamespaces: J },
                "pairingTopic" in r ? { pairingTopic: r.pairingTopic } : {}
              )
            ),
              this.setRequestedChainsIds(C.map((Oe) => Number(Oe.id)));
          }
          let E = yield this.getAccounts(),
            b = yield this.getChainId(),
            W = h.session?.namespaces?.eip155?.chains,
            $ = W?.some((J) => Number(J.split(":")[1]) === b),
            _ = 1;
          $ ? (_ = b) : W?.[0] && (_ = Number(W[0].split(":")[1])),
            g && (h.removeListener("display_uri", g), (g = void 0)),
            o && (h.removeListener("connect", o), (o = void 0)),
            n ||
              ((n = this.onAccountsChanged.bind(this)),
              h.on("accountsChanged", n)),
            i ||
              ((i = this.onChainChanged.bind(this)), h.on("chainChanged", i)),
            u || ((u = this.onDisconnect.bind(this)), h.on("disconnect", u)),
            c ||
              ((c = this.onSessionDelete.bind(this)),
              h.on("session_delete", c));
          let We = f?.defaultChain;
          return (
            h.setDefaultChain(We ?? `eip155:${_}`), { accounts: E, chainId: _ }
          );
        } catch (C) {
          throw /(user rejected|connection request reset)/i.test(C?.message)
            ? new U(C)
            : C;
        }
      });
    },
    disconnect() {
      return a(this, null, function* () {
        let r = yield this.getProvider();
        try {
          yield r?.disconnect();
        } catch (d) {
          if (!/No matching key/i.test(d.message)) throw d;
        } finally {
          i && (r?.removeListener("chainChanged", i), (i = void 0)),
            u && (r?.removeListener("disconnect", u), (u = void 0)),
            o || ((o = this.onConnect.bind(this)), r?.on("connect", o)),
            n && (r?.removeListener("accountsChanged", n), (n = void 0)),
            c && (r?.removeListener("session_delete", c), (c = void 0)),
            this.setRequestedChainsIds([]);
        }
      });
    },
    getAccounts() {
      return a(this, null, function* () {
        let r = yield this.getProvider();
        if (!r?.session?.namespaces) return [];
        let C =
            r?.session?.namespaces[l.CHAIN.EVM]?.accounts?.map(
              (f) => f.split(":")[2]
            ) ?? [],
          h = new Set();
        return C.filter((f) => {
          let E = f?.toLowerCase();
          return h.has(E) ? !1 : (h.add(E), !0);
        });
      });
    },
    getProvider() {
      return a(this, arguments, function* ({ chainId: r } = {}) {
        t ||
          ((t = w.universalProvider),
          t?.events.setMaxListeners(Number.POSITIVE_INFINITY));
        let d = T.getActiveNamespace(),
          C = I.getActiveCaipNetwork()?.id;
        if (r && C !== r && d) {
          let h = T.getStoredActiveCaipNetworkId(),
            f = (d ? I.getCaipNetworks(d) : [])?.find((E) => E.id === h);
          f &&
            f.chainNamespace === l.CHAIN.EVM &&
            (yield this.switchChain?.({ chainId: Number(f.id) }));
        }
        return t;
      });
    },
    getChainId() {
      return a(this, null, function* () {
        let r = I.getActiveCaipNetwork(l.CHAIN.EVM)?.id;
        if (r) return r;
        let C = (yield this.getProvider()).session?.namespaces[l.CHAIN.EVM]
          ?.chains?.[0];
        return I.getCaipNetworks().find((p) => p.id === C)?.id;
      });
    },
    isAuthorized() {
      return a(this, null, function* () {
        try {
          let [r, d] = yield Promise.all([
            this.getAccounts(),
            this.getProvider(),
          ]);
          return r.length
            ? (yield this.isChainsStale()) && d.session
              ? (yield d.disconnect().catch(() => {}), !1)
              : !0
            : !1;
        } catch {
          return !1;
        }
      });
    },
    switchChain(C) {
      return a(
        this,
        arguments,
        function* ({ addEthereumChainParameter: r, chainId: d }) {
          let h = yield this.getProvider();
          if (!h) throw new Q();
          let p = I.getCaipNetworks().find((f) => f.id === d);
          if (!p) throw new O(new he());
          try {
            yield h.request({
              method: "wallet_switchEthereumChain",
              params: [{ chainId: X(d) }],
            }),
              p?.caipNetworkId && h.setDefaultChain(p?.caipNetworkId),
              s.emitter.emit("change", { chainId: Number(d) });
            let f = yield this.getRequestedChainsIds();
            return (
              this.setRequestedChainsIds([...f, d]), P(N({}, p), { id: p.id })
            );
          } catch (f) {
            let E = f;
            if (/(?:user rejected)/iu.test(E.message)) throw new U(E);
            try {
              let b;
              r?.blockExplorerUrls
                ? (b = r.blockExplorerUrls)
                : (b = p.blockExplorers?.default.url
                    ? [p.blockExplorers?.default.url]
                    : []);
              let W = p.rpcUrls?.chainDefault?.http || [],
                $ = {
                  blockExplorerUrls: b,
                  chainId: X(d),
                  chainName: p.name,
                  iconUrls: r?.iconUrls,
                  nativeCurrency: p.nativeCurrency,
                  rpcUrls: W,
                };
              yield h.request({
                method: "wallet_addEthereumChain",
                params: [$],
              });
              let _ = yield this.getRequestedChainsIds();
              return (
                this.setRequestedChainsIds([..._, d]), P(N({}, p), { id: p.id })
              );
            } catch (b) {
              throw new U(b);
            }
          }
        }
      );
    },
    onAccountsChanged(r) {
      r.length === 0
        ? this.onDisconnect()
        : s.emitter.emit("change", { accounts: r.map((d) => j(d)) });
    },
    onChainChanged(r) {
      let d = Number(r);
      s.emitter.emit("change", { chainId: d });
    },
    onConnect(r) {
      this.setRequestedChainsIds(I.getCaipNetworks().map((d) => Number(d.id)));
    },
    onDisconnect(r) {
      return a(this, null, function* () {
        this.setRequestedChainsIds([]), s.emitter.emit("disconnect");
        let d = yield this.getProvider();
        n && (d.removeListener("accountsChanged", n), (n = void 0)),
          i && (d.removeListener("chainChanged", i), (i = void 0)),
          u && (d.removeListener("disconnect", u), (u = void 0)),
          c && (d.removeListener("session_delete", c), (c = void 0)),
          o || ((o = this.onConnect.bind(this)), d.on("connect", o));
      });
    },
    onDisplayUri(r) {
      s.emitter.emit("message", { type: "display_uri", data: r });
    },
    onSessionDelete() {
      this.onDisconnect();
    },
    getNamespaceChainsIds() {
      return t?.session?.namespaces
        ? t?.session?.namespaces[l.CHAIN.EVM]?.accounts?.map((C) =>
            Number.parseInt(C.split(":")[1] ?? "")
          ) ?? []
        : [];
    },
    getRequestedChainsIds() {
      return a(this, null, function* () {
        let r =
          (yield s.storage?.getItem(this.requestedChainsStorageKey)) ?? [];
        return [...new Set(r)];
      });
    },
    isChainsStale() {
      return a(this, null, function* () {
        if (!e) return !1;
        let r = s.chains.map((h) => h.id),
          d = this.getNamespaceChainsIds();
        if (d.length && !d.some((h) => r.includes(h))) return !1;
        let C = yield this.getRequestedChainsIds();
        return !r.every((h) => C.includes(Number(h)));
      });
    },
    setRequestedChainsIds(r) {
      return a(this, null, function* () {
        yield s.storage?.setItem(this.requestedChainsStorageKey, r);
      });
    },
    get requestedChainsStorageKey() {
      return `${this.id}.requestedChains`;
    },
  });
}
var H = ye({ pendingTransactions: 0 }),
  oe = {
    state: H,
    subscribeKey(w, e) {
      return be(H, w, e);
    },
    increase(w) {
      H[w] += 1;
    },
    decrease(w) {
      H[w] -= 1;
    },
    reset(w) {
      H[w] = 0;
    },
  };
function _e(w) {
  return a(this, null, function* () {
    if (S.isSafeApp()) {
      let { safe: e } = yield import("./chunk-QJMC7T32.js");
      if (e && !w.some((t) => t.type === "safe")) return e();
    }
    return null;
  });
}
function Se(w) {
  return a(this, null, function* () {
    try {
      let { baseAccount: e } = yield import("./chunk-QJMC7T32.js");
      if (e && !w.some((t) => t.id === "baseAccount")) return e();
    } catch (e) {
      console.error("Failed to import Coinbase Wallet SDK:", e);
    }
    return null;
  });
}
var Le = { enable: !1, pollingInterval: 3e4 },
  re = class w extends Pe {
    constructor(e) {
      let t = M.extendCaipNetworks(e.networks, {
        projectId: e.projectId,
        customNetworkImageUrls: {},
        customRpcUrls: e.customRpcUrls,
      });
      super(),
        (this.balancePromises = {}),
        (this.namespace = l.CHAIN.EVM),
        (this.adapterType = l.ADAPTER_TYPES.WAGMI),
        (this.projectId = e.projectId),
        (this.pendingTransactionsFilter = N(
          N({}, Le),
          e.pendingTransactionsFilter ?? {}
        )),
        this.createConfig(P(N({}, e), { networks: t })),
        this.checkChainId();
    }
    construct(e) {
      this.checkChainId(), this.setupWatchers();
    }
    getAccounts(e) {
      return a(this, null, function* () {
        let t = this.getWagmiConnector(e.id);
        if (!t) return { accounts: [] };
        if (t.id === l.CONNECTOR_ID.AUTH) {
          let o = yield t.getProvider();
          if (!o?.user) return { accounts: [] };
          let { address: g, accounts: c } = o.user;
          return Promise.resolve({
            accounts: (c || [{ address: g, type: "eoa" }]).map((u) =>
              S.createAccount("eip155", u.address, u.type)
            ),
          });
        }
        let { addresses: n, address: i } = B(this.wagmiConfig);
        return Promise.resolve({
          accounts: [...new Set(n || [i])].map((o) =>
            S.createAccount("eip155", o || "", "eoa")
          ),
        });
      });
    }
    checkChainId() {
      let { chainId: e } = B(this.wagmiConfig);
      e && this.emit("switchNetwork", { chainId: e });
    }
    getWagmiConnector(e) {
      return this.wagmiConfig.connectors.find((t) => t.id === e);
    }
    createConfig(e) {
      this.wagmiChains = e.networks.filter(
        (i) => i.chainNamespace === l.CHAIN.EVM
      );
      let t = {},
        n = [...(e.connectors ?? [])];
      this.wagmiChains.forEach((i) => {
        let o = e.transports?.[i.id],
          g = M.getCaipNetworkId(i);
        o
          ? (t[i.id] = M.extendWagmiTransports(i, e.projectId, o))
          : (t[i.id] = M.getViemTransport(
              i,
              e.projectId,
              e.customRpcUrls?.[g]
            ));
      }),
        (this.wagmiConfig = ve(
          P(N({}, e), {
            chains: this.wagmiChains,
            connectors: n,
            transports: t,
          })
        ));
    }
    setupWatchPendingTransactions() {
      if (
        !this.pendingTransactionsFilter.enable ||
        this.unwatchPendingTransactions
      )
        return;
      this.unwatchPendingTransactions = Ie(this.wagmiConfig, {
        pollingInterval: this.pendingTransactionsFilter.pollingInterval,
        onError: () => {},
        onTransactions: () => {
          this.emit("pendingTransactions"), oe.increase("pendingTransactions");
        },
      });
      let e = oe.subscribeKey("pendingTransactions", (t) => {
        t >= l.LIMITS.PENDING_TRANSACTIONS &&
          (this.unwatchPendingTransactions?.(), e());
      });
    }
    setupWatchers() {
      we(this.wagmiConfig, {
        onChange: (e) => {
          this.clearConnections(),
            this.addConnection(
              ...e.map((t) => {
                let n = this.getCaipNetworks().find((o) => o.id === t.chainId),
                  i = t.connector.id === l.CONNECTOR_ID.AUTH;
                return {
                  accounts: t.accounts.map((o) => ({
                    address: this.toChecksummedAddress(o),
                  })),
                  caipNetwork: n,
                  connectorId: t.connector.id,
                  auth: i
                    ? {
                        name: T.getConnectedSocialProvider(),
                        username: T.getConnectedSocialUsername(),
                      }
                    : void 0,
                };
              })
            );
        },
      }),
        pe(this.wagmiConfig, {
          onChange: (e, t) => {
            if (
              (e.status === "disconnected" &&
                t.address &&
                this.emit("disconnect"),
              e?.chainId &&
                e?.chainId !== t?.chainId &&
                this.emit("switchNetwork", { chainId: e.chainId }),
              e.status === "connected")
            ) {
              let n = e.address !== t?.address,
                i = e.connector.id !== t.connector?.id,
                o = t.status !== "connected";
              (n || i || o) &&
                (this.setupWatchPendingTransactions(),
                this.handleAccountChanged({
                  address: e.address,
                  chainId: e.chainId,
                  connector: e.connector,
                }));
            }
          },
        });
    }
    addThirdPartyConnectors() {
      return a(this, null, function* () {
        let e = [],
          { enableCoinbase: t } = k.state || {};
        if (t !== !1) {
          let i = yield Se(this.wagmiConfig.connectors);
          i && e.push(i);
        }
        let n = yield _e(this.wagmiConfig.connectors);
        n && e.push(n),
          yield Promise.all(
            e.map((i) => {
              let o = this.configureInternalConnector(i);
              return this.addWagmiConnector(o);
            })
          );
      });
    }
    addWagmiConnectors() {
      let e = [];
      k.state.enableInjected !== !1 && e.push(Ae({ shimDisconnect: !0 }));
      let {
          features: t,
          remoteFeatures: n,
          projectId: i,
          enableAuthLogger: o,
        } = k.state,
        g = n?.email ?? t?.email ?? !0,
        c = n?.socials ?? t?.socials,
        u = Array.isArray(c) && c?.length > 0;
      (g || u) &&
        e.push(
          ie({
            chains: this.wagmiChains,
            options: { projectId: i, enableAuthLogger: o },
          })
        ),
        e.forEach((s) => {
          this.configureInternalConnector(s);
        });
    }
    configureInternalConnector(e) {
      let t = this.wagmiConfig._internal.connectors.setup(e);
      return (
        this.wagmiConfig._internal.connectors.setState((n) => [...n, t]), t
      );
    }
    handleAccountChanged(i) {
      return a(
        this,
        arguments,
        function* ({ address: e, chainId: t, connector: n }) {
          if (!this.namespace)
            throw new Error(
              "WagmiAdapter:handleAccountChanged - namespace is required"
            );
          let o = yield n.getProvider().catch(() => {});
          this.emit("accountChanged", {
            address: this.toChecksummedAddress(e),
            chainId: t,
            connector: {
              id: n.id,
              name: v.ConnectorNamesMap[n.id] ?? n.name,
              imageId: v.ConnectorImageIds[n.id],
              type: v.ConnectorTypesMap[n.type] ?? "EXTERNAL",
              info: n.id === l.CONNECTOR_ID.INJECTED ? void 0 : { rdns: n.id },
              provider: o,
              chain: this.namespace,
              chains: [],
            },
          });
        }
      );
    }
    signMessage(e) {
      return a(this, null, function* () {
        try {
          return {
            signature: yield ge(this.wagmiConfig, {
              message: e.message,
              account: e.address,
            }),
          };
        } catch {
          throw new Error("WagmiAdapter:signMessage - Sign message failed");
        }
      });
    }
    sendTransaction(e) {
      return a(this, null, function* () {
        let { chainId: t, address: n } = B(this.wagmiConfig),
          i = {
            account: n,
            to: e.to,
            value: Number.isNaN(Number(e.value)) ? BigInt(0) : BigInt(e.value),
            gas: e.gas ? BigInt(e.gas) : void 0,
            gasPrice: e.gasPrice ? BigInt(e.gasPrice) : void 0,
            data: e.data,
            chainId: t,
            type: "legacy",
            parameters: ["nonce"],
          };
        yield ue(this.wagmiConfig, i);
        let o = yield me(this.wagmiConfig, i);
        return (
          yield Ne(this.wagmiConfig, { hash: o, timeout: 25e3 }), { hash: o }
        );
      });
    }
    writeContract(e) {
      return a(this, null, function* () {
        let g = e,
          { caipNetwork: t } = g,
          n = F(g, ["caipNetwork"]),
          i = Number(L.caipNetworkIdToNumber(t.caipNetworkId));
        return {
          hash: yield Ee(this.wagmiConfig, {
            chain: this.wagmiChains?.[i],
            chainId: i,
            address: n.tokenAddress,
            account: n.fromAddress,
            abi: n.abi,
            functionName: n.method,
            args: n.args,
            __mode: "prepared",
          }),
        };
      });
    }
    estimateGas(e) {
      return a(this, null, function* () {
        try {
          return {
            gas: yield le(this.wagmiConfig, {
              account: e.address,
              to: e.to,
              data: e.data,
              type: "legacy",
            }),
          };
        } catch {
          throw new Error("WagmiAdapter:estimateGas - error estimating gas");
        }
      });
    }
    parseUnits(e) {
      return de(e.value, e.decimals);
    }
    formatUnits(e) {
      return ce(e.value, e.decimals);
    }
    addWagmiConnector(e) {
      return a(this, null, function* () {
        if (!this.namespace)
          throw new Error(
            "WagmiAdapter:addWagmiConnector - namespace is required"
          );
        let { enableEIP6963: t } = k.state || {};
        if (
          (e.type === l.CONNECTOR_ID.INJECTED && t === !1) ||
          e.id === l.CONNECTOR_ID.AUTH ||
          e.id === l.CONNECTOR_ID.WALLET_CONNECT
        )
          return;
        let n = yield e.getProvider().catch(() => {}),
          i = Te.state.connectorImages;
        this.addConnector({
          id: e.id,
          explorerId: v.ConnectorExplorerIds[e.id],
          imageUrl: i?.[e.id] ?? e.icon,
          name: v.ConnectorNamesMap[e.id] ?? e.name,
          imageId: v.ConnectorImageIds[e.id],
          type: v.ConnectorTypesMap[e.type] ?? "EXTERNAL",
          info: e.id === l.CONNECTOR_ID.INJECTED ? void 0 : { rdns: e.id },
          provider: n,
          chain: this.namespace,
          chains: [],
        });
      });
    }
    syncConnectors() {
      return a(this, null, function* () {
        fe(this.wagmiConfig, {
          onChange: (e) => {
            e.forEach((t) => this.addWagmiConnector(t));
          },
        }),
          this.addWagmiConnectors(),
          yield Promise.all(
            this.wagmiConfig.connectors.map((e) => this.addWagmiConnector(e))
          ),
          this.addThirdPartyConnectors();
      });
    }
    syncConnections() {
      return a(this, null, function* () {
        let e = this.connectors
          .filter((t) => {
            let { hasDisconnected: n, hasConnected: i } =
              x.getConnectorStorageInfo(t.id, this.namespace);
            return !n && i;
          })
          .map((t) => this.getWagmiConnector(t.id))
          .filter(Boolean);
        yield G(this.wagmiConfig, { connectors: e });
      });
    }
    syncConnection(e) {
      return a(this, null, function* () {
        let { id: t, chainId: n } = e,
          o = A(this.wagmiConfig).find((s) => s.connector.id === t),
          c = yield this.getWagmiConnector(t)?.getProvider();
        if (S.isSafeApp() && t === l.CONNECTOR_ID.SAFE && !o?.accounts.length) {
          let s = this.getWagmiConnector("safe");
          if (s) {
            let m = yield V(this.wagmiConfig, {
                connector: s,
                chainId: Number(n),
              }),
              r = yield s.getProvider();
            return {
              chainId: Number(n),
              address: this.toChecksummedAddress(m.accounts[0]),
              provider: r,
              type: o?.connector.type?.toUpperCase(),
              id: o?.connector.id,
            };
          }
        }
        return {
          chainId: Number(o?.chainId),
          address: this.toChecksummedAddress(o?.accounts[0]),
          provider: c,
          type: o?.connector.type?.toUpperCase(),
          id: o?.connector.id,
        };
      });
    }
    connectWalletConnect(e) {
      return a(this, null, function* () {
        try {
          let t = this.getWalletConnectConnector();
          yield t.authenticate();
          let n = this.getWagmiConnector("walletConnect");
          if (!n)
            throw new Error(
              "UniversalAdapter:connectWalletConnect - connector not found"
            );
          let i = yield V(this.wagmiConfig, {
            connector: n,
            chainId: e ? Number(e) : void 0,
          });
          return (
            i.chainId !== Number(e) &&
              (yield Y(this.wagmiConfig, { chainId: i.chainId })),
            { clientId: yield t.provider.client.core.crypto.getClientId() }
          );
        } catch (t) {
          throw t instanceof U
            ? new q(t)
            : Z.isUserRejectedRequestError(t)
            ? new q(t)
            : t;
        }
      });
    }
    connect(e) {
      return a(this, null, function* () {
        try {
          let {
              id: t,
              address: n,
              provider: i,
              type: o,
              info: g,
              chainId: c,
              socialUri: u,
            } = e,
            s = this.getWagmiConnector(t);
          if (!s)
            throw new Error(
              "connectionControllerClient:connectExternal - connector is undefined"
            );
          i &&
            g &&
            s.id === l.CONNECTOR_ID.EIP6963 &&
            s.setEip6963Wallet?.({ provider: i, info: g });
          let m = this.wagmiConfig.state?.connections?.get(s.uid);
          if (m) {
            yield this.wagmiConfig.storage?.setItem("recentConnectorId", s.id);
            let d = [...m.accounts].sort((C, h) =>
              x.isLowerCaseMatch(C, n) ? -1 : x.isLowerCaseMatch(h, n) ? 1 : 0
            );
            return (
              this.wagmiConfig?.setState((C) =>
                P(N({}, C), {
                  connections: new Map(C.connections).set(s.uid, {
                    accounts: d,
                    chainId: m.chainId,
                    connector: m.connector,
                  }),
                  current: s.uid,
                  status: "connected",
                })
              ),
              {
                address: this.toChecksummedAddress(d[0]),
                chainId: m.chainId,
                provider: i,
                type: o,
                id: t,
              }
            );
          }
          let r = yield V(this.wagmiConfig, {
            connector: s,
            chainId: c ? Number(c) : void 0,
            socialUri: u,
          });
          return {
            address: this.toChecksummedAddress(r.accounts[0]),
            chainId: r.chainId,
            provider: i,
            type: o,
            id: t,
          };
        } catch (t) {
          throw t instanceof U
            ? new q(t)
            : Z.isUserRejectedRequestError(t)
            ? new q(t)
            : t;
        }
      });
    }
    get connections() {
      return Array.from(this.wagmiConfig.state.connections.values()).map(
        (e) => ({
          accounts: e.accounts.map((t) => ({
            address: this.toChecksummedAddress(t),
          })),
          connectorId: e.connector.id,
        })
      );
    }
    reconnect(e) {
      return a(this, null, function* () {
        let { id: t } = e,
          n = this.getWagmiConnector(t);
        if (!n)
          throw new Error(
            "connectionControllerClient:connectExternal - connector is undefined"
          );
        yield G(this.wagmiConfig, { connectors: [n] });
      });
    }
    getBalance(e) {
      return a(this, null, function* () {
        let t = e.address,
          n = this.getCaipNetworks().find((i) => i.id === e.chainId);
        if (!t) return Promise.resolve({ balance: "0.00", symbol: "ETH" });
        if (n && this.wagmiConfig) {
          let i = `${n.caipNetworkId}:${e.address}`,
            o = this.balancePromises[i];
          if (o) return o;
          let g = T.getNativeBalanceCacheForCaipAddress(i);
          return g
            ? { balance: g.balance, symbol: g.symbol }
            : ((this.balancePromises[i] = new Promise((c) =>
                a(this, null, function* () {
                  try {
                    let u = Number(e.chainId),
                      s = yield Ce(this.wagmiConfig, {
                        address: e.address,
                        chainId: u,
                        token: e.tokens?.[n.caipNetworkId]?.address,
                      });
                    T.updateNativeBalanceCache({
                      caipAddress: i,
                      balance: s.formatted,
                      symbol: s.symbol,
                      timestamp: Date.now(),
                    }),
                      c({ balance: s.formatted, symbol: s.symbol });
                  } catch (u) {
                    console.warn(
                      "Appkit:WagmiAdapter:getBalance - Error getting balance",
                      u
                    ),
                      c({ balance: "0.00", symbol: "ETH" });
                  }
                })
              ).finally(() => {
                delete this.balancePromises[i];
              })),
              this.balancePromises[i] || { balance: "0.00", symbol: "ETH" });
        }
        return { balance: "", symbol: "" };
      });
    }
    getWalletConnectProvider() {
      return this.getWagmiConnector("walletConnect")?.provider;
    }
    disconnect(e) {
      return a(this, null, function* () {
        if (e.id) {
          let t = this.getWagmiConnector(e.id),
            i = A(this.wagmiConfig).find((o) =>
              x.isLowerCaseMatch(o.connector.id, e.id)
            );
          return (
            yield z(this.wagmiConfig, { connector: t }),
            k.state.enableReconnect === !1 && this.deleteConnection(e.id),
            i
              ? {
                  connections: [
                    {
                      accounts: i.accounts.map((o) => ({
                        address: this.toChecksummedAddress(o),
                      })),
                      connectorId: i.connector.id,
                    },
                  ],
                }
              : { connections: [] }
          );
        }
        return this.disconnectAll();
      });
    }
    disconnectAll() {
      return a(this, null, function* () {
        let e = A(this.wagmiConfig),
          t = yield Promise.allSettled(
            e.map((n) =>
              a(this, null, function* () {
                let i = this.getWagmiConnector(n.connector.id);
                return i && (yield z(this.wagmiConfig, { connector: i })), n;
              })
            )
          );
        return (
          this.wagmiConfig.state.connections.clear(),
          {
            connections: t
              .filter((n) => n.status === "fulfilled")
              .map(({ value: n }) => ({
                accounts: n.accounts.map((i) => ({
                  address: this.toChecksummedAddress(i),
                })),
                connectorId: n.connector.id,
              })),
          }
        );
      });
    }
    switchNetwork(e) {
      return a(this, null, function* () {
        let { caipNetwork: t } = e,
          n = this.wagmiConfig.chains.find(
            (C) => C.id.toString() === t.id.toString()
          );
        if (!n)
          throw new Error(
            "connectionControllerClient:switchNetwork - wagmiChain is undefined"
          );
        let {
            name: i,
            nativeCurrency: o,
            rpcUrls: g,
            blockExplorers: c,
            id: u,
          } = n,
          s = t.rpcUrls?.chainDefault?.http?.[0] ?? g.default.http[0] ?? "",
          m = c?.default.url ?? t.blockExplorers?.default?.url ?? "",
          r = o ?? t.nativeCurrency,
          d = i ?? t.name;
        yield Y(this.wagmiConfig, {
          chainId: u,
          addEthereumChainParameter: {
            chainName: d,
            nativeCurrency: r,
            rpcUrls: [s],
            blockExplorerUrls: [m],
          },
        }),
          yield se(w.prototype, this, "switchNetwork").call(this, e);
      });
    }
    getCapabilities(e) {
      return a(this, null, function* () {
        if (!this.wagmiConfig)
          throw new Error(
            "connectionControllerClient:getCapabilities - wagmiConfig is undefined"
          );
        let n = A(this.wagmiConfig)[0],
          i = n ? this.getWagmiConnector(n.connector.id) : null;
        if (!i)
          throw new Error(
            "connectionControllerClient:getCapabilities - connector is undefined"
          );
        let o = yield i.getProvider();
        if (!o)
          throw new Error(
            "connectionControllerClient:getCapabilities - provider is undefined"
          );
        return yield o.request({
          method: "wallet_getCapabilities",
          params: [e],
        });
      });
    }
    grantPermissions(e) {
      return a(this, null, function* () {
        if (!this.wagmiConfig)
          throw new Error(
            "connectionControllerClient:grantPermissions - wagmiConfig is undefined"
          );
        let n = A(this.wagmiConfig)[0],
          i = n ? this.getWagmiConnector(n.connector.id) : null;
        if (!i)
          throw new Error(
            "connectionControllerClient:grantPermissions - connector is undefined"
          );
        let o = yield i.getProvider();
        if (!o)
          throw new Error(
            "connectionControllerClient:grantPermissions - provider is undefined"
          );
        return o.request({ method: "wallet_grantPermissions", params: e });
      });
    }
    revokePermissions(e) {
      return a(this, null, function* () {
        if (!this.wagmiConfig)
          throw new Error(
            "connectionControllerClient:revokePermissions - wagmiConfig is undefined"
          );
        let n = A(this.wagmiConfig)[0],
          i = n ? this.getWagmiConnector(n.connector.id) : null;
        if (!i)
          throw new Error(
            "connectionControllerClient:revokePermissions - connector is undefined"
          );
        let o = yield i.getProvider();
        if (!o)
          throw new Error(
            "connectionControllerClient:revokePermissions - provider is undefined"
          );
        return o.request({ method: "wallet_revokePermissions", params: e });
      });
    }
    walletGetAssets(e) {
      return a(this, null, function* () {
        if (!this.wagmiConfig)
          throw new Error(
            "connectionControllerClient:walletGetAssets - wagmiConfig is undefined"
          );
        let n = A(this.wagmiConfig)[0],
          i = n ? this.getWagmiConnector(n.connector.id) : null;
        if (!i)
          throw new Error(
            "connectionControllerClient:walletGetAssets - connector is undefined"
          );
        let o = yield i.getProvider();
        if (!o)
          throw new Error(
            "connectionControllerClient:walletGetAssets - provider is undefined"
          );
        return o.request({ method: "wallet_getAssets", params: [e] });
      });
    }
    setAuthProvider(e) {
      if (!this.namespace)
        throw new Error("WagmiAdapter:setAuthProvider - namespace is required");
      this.addConnector({
        id: l.CONNECTOR_ID.AUTH,
        type: "AUTH",
        name: l.CONNECTOR_NAMES.AUTH,
        provider: e,
        imageId: v.ConnectorImageIds[l.CONNECTOR_ID.AUTH],
        chain: this.namespace,
        chains: [],
      });
    }
    setUniversalProvider(e) {
      return a(this, null, function* () {
        e.on("connect", () => {
          let n = A(this.wagmiConfig),
            i = this.getWagmiConnector("walletConnect");
          if (i && !n.find((o) => o.connector.id === i.id)) {
            if (I.state.activeChain === "eip155") return;
            G(this.wagmiConfig, { connectors: [i] });
          }
        });
        let t = K({ universalProvider: e });
        return (
          this.configureInternalConnector(t),
          this.addConnector(
            new Re({
              provider: e,
              caipNetworks: this.getCaipNetworks(),
              namespace: "eip155",
            })
          ),
          Promise.resolve()
        );
      });
    }
    toChecksummedAddress(e) {
      return ae(e.toLowerCase());
    }
  };
export { re as WagmiAdapter, ie as authConnector };
