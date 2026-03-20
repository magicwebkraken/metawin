import { a as U } from "./chunk-O63J7XX2.js";
import { c as I } from "./chunk-T7KGZUCO.js";
import {
  A as B,
  H as S,
  d as W,
  e as N,
  i as R,
  j as p,
  r as C,
  u as f,
} from "./chunk-U7GUEFJZ.js";
import { b } from "./chunk-2K64HG7Q.js";
import { a as x, b as A, n as T } from "./chunk-VNDKUXGB.js";
var g = {
  getConnectorsByType(e, t, n) {
    let { customWallets: o } = p.state,
      l = W.getRecentWallets(),
      i = E.filterOutDuplicateWallets(t),
      s = E.filterOutDuplicateWallets(n),
      r = e.filter((c) => c.type === "MULTI_CHAIN"),
      m = e.filter((c) => c.type === "ANNOUNCED"),
      d = e.filter((c) => c.type === "INJECTED"),
      u = e.filter((c) => c.type === "EXTERNAL");
    return {
      custom: o,
      recent: l,
      external: u,
      multiChain: r,
      announced: m,
      injected: d,
      recommended: i,
      featured: s,
    };
  },
  showConnector(e) {
    let t = e.info?.rdns,
      n = !!t && C.state.excludedWallets.some((l) => !!l.rdns && l.rdns === t),
      o =
        !!e.name &&
        C.state.excludedWallets.some((l) => I.isLowerCaseMatch(l.name, e.name));
    return !(
      (e.type === "INJECTED" &&
        ((e.name === "Browser Wallet" &&
          (!N.isMobile() || (N.isMobile() && !t && !B.checkInstalled()))) ||
          n ||
          o)) ||
      ((e.type === "ANNOUNCED" || e.type === "EXTERNAL") && (n || o))
    );
  },
  getIsConnectedWithWC() {
    return Array.from(S.state.chains.values()).some(
      (n) => f.getConnectorId(n.namespace) === b.CONNECTOR_ID.WALLET_CONNECT
    );
  },
  getConnectorTypeOrder({
    recommended: e,
    featured: t,
    custom: n,
    recent: o,
    announced: l,
    injected: i,
    multiChain: s,
    external: r,
    overriddenConnectors: m = p.state.features?.connectorTypeOrder ?? [],
  }) {
    let u = [
        { type: "walletConnect", isEnabled: !0 },
        { type: "recent", isEnabled: o.length > 0 },
        { type: "injected", isEnabled: [...i, ...l, ...s].length > 0 },
        { type: "featured", isEnabled: t.length > 0 },
        { type: "custom", isEnabled: n && n.length > 0 },
        { type: "external", isEnabled: r.length > 0 },
        { type: "recommended", isEnabled: e.length > 0 },
      ].filter((a) => a.isEnabled),
      c = new Set(u.map((a) => a.type)),
      y = m.filter((a) => c.has(a)).map((a) => ({ type: a, isEnabled: !0 })),
      O = u.filter(({ type: a }) => !y.some(({ type: D }) => D === a));
    return Array.from(new Set([...y, ...O].map(({ type: a }) => a)));
  },
  sortConnectorsByExplorerWallet(e) {
    return [...e].sort((t, n) =>
      t.explorerWallet && n.explorerWallet
        ? (t.explorerWallet.order ?? 0) - (n.explorerWallet.order ?? 0)
        : t.explorerWallet
        ? -1
        : n.explorerWallet
        ? 1
        : 0
    );
  },
  getAuthName({ email: e, socialUsername: t, socialProvider: n }) {
    return t
      ? n && n === "discord" && t.endsWith("0")
        ? t.slice(0, -1)
        : t
      : e.length > 30
      ? `${e.slice(0, -3)}...`
      : e;
  },
  fetchProviderData(e) {
    return T(this, null, function* () {
      try {
        if (e.name === "Browser Wallet" && !N.isMobile())
          return { accounts: [], chainId: void 0 };
        if (e.id === b.CONNECTOR_ID.AUTH)
          return { accounts: [], chainId: void 0 };
        let [t, n] = yield Promise.all([
          e.provider?.request({ method: "eth_accounts" }),
          e.provider?.request({ method: "eth_chainId" }).then((o) => Number(o)),
        ]);
        return { accounts: t, chainId: n };
      } catch (t) {
        return (
          console.warn(`Failed to fetch provider data for ${e.name}`, t),
          { accounts: [], chainId: void 0 }
        );
      }
    });
  },
  getFilteredCustomWallets(e) {
    let t = W.getRecentWallets(),
      n = f.state.connectors.map((s) => s.info?.rdns).filter(Boolean),
      o = t.map((s) => s.rdns).filter(Boolean),
      l = n.concat(o);
    if (l.includes("io.metamask.mobile") && N.isMobile()) {
      let s = l.indexOf("io.metamask.mobile");
      l[s] = "io.metamask";
    }
    return e.filter((s) => !l.includes(String(s?.rdns)));
  },
  hasWalletConnector(e) {
    return f.state.connectors.some((t) => t.id === e.id || t.name === e.name);
  },
  isWalletCompatibleWithCurrentChain(e) {
    let t = S.state.activeChain;
    return t && e.chains
      ? e.chains.some((n) => {
          let o = n.split(":")[0];
          return t === o;
        })
      : !0;
  },
  getFilteredRecentWallets() {
    return W.getRecentWallets()
      .filter((n) => !E.isExcluded(n))
      .filter((n) => !this.hasWalletConnector(n))
      .filter((n) => this.isWalletCompatibleWithCurrentChain(n));
  },
  getCappedRecommendedWallets(e) {
    let { connectors: t } = f.state,
      { customWallets: n, featuredWalletIds: o } = p.state,
      l = t.find((h) => h.id === "walletConnect"),
      i = t.filter(
        (h) =>
          h.type === "INJECTED" ||
          h.type === "ANNOUNCED" ||
          h.type === "MULTI_CHAIN"
      );
    if (!l && !i.length && !n?.length) return [];
    let s = R.isEmailEnabled(),
      r = R.isSocialsEnabled(),
      m = i.filter((h) => h.name !== "Browser Wallet"),
      d = o?.length || 0,
      u = n?.length || 0,
      c = m.length || 0,
      y = s ? 1 : 0,
      O = r ? 1 : 0,
      a = d + u + c + y + O,
      D = Math.max(0, 4 - a);
    return D <= 0 ? [] : E.filterOutDuplicateWallets(e).slice(0, D);
  },
};
var E = {
  filterOutDuplicatesByRDNS(e) {
    let t = p.state.enableEIP6963 ? f.state.connectors : [],
      n = W.getRecentWallets(),
      o = t.map((r) => r.info?.rdns).filter(Boolean),
      l = n.map((r) => r.rdns).filter(Boolean),
      i = o.concat(l);
    if (i.includes("io.metamask.mobile") && N.isMobile()) {
      let r = i.indexOf("io.metamask.mobile");
      i[r] = "io.metamask";
    }
    return e.filter(
      (r) =>
        !(
          (r?.rdns && i.includes(String(r.rdns))) ||
          (!r?.rdns && t.some((d) => d.name === r.name))
        )
    );
  },
  filterOutDuplicatesByIds(e) {
    let t = f.state.connectors.filter(
        (r) => r.type === "ANNOUNCED" || r.type === "INJECTED"
      ),
      n = W.getRecentWallets(),
      o = t.map((r) => r.explorerId),
      l = n.map((r) => r.id),
      i = o.concat(l);
    return e.filter((r) => !i.includes(r?.id));
  },
  filterOutDuplicateWallets(e) {
    let t = this.filterOutDuplicatesByRDNS(e);
    return this.filterOutDuplicatesByIds(t);
  },
  markWalletsAsInstalled(e) {
    let { connectors: t } = f.state,
      { featuredWalletIds: n } = p.state,
      o = t
        .filter((s) => s.type === "ANNOUNCED")
        .reduce((s, r) => (r.info?.rdns && (s[r.info.rdns] = !0), s), {});
    return e
      .map((s) => A(x({}, s), { installed: !!s.rdns && !!o[s.rdns ?? ""] }))
      .sort((s, r) => {
        let m = Number(r.installed) - Number(s.installed);
        if (m !== 0) return m;
        if (n?.length) {
          let d = n.indexOf(s.id),
            u = n.indexOf(r.id);
          if (d !== -1 && u !== -1) return d - u;
          if (d !== -1) return -1;
          if (u !== -1) return 1;
        }
        return 0;
      });
  },
  getConnectOrderMethod(e, t) {
    let n = e?.connectMethodsOrder || p.state.features?.connectMethodsOrder,
      o = t || f.state.connectors;
    if (n) return n;
    let { injected: l, announced: i } = g.getConnectorsByType(
        o,
        C.state.recommended,
        C.state.featured
      ),
      s = l.filter(g.showConnector),
      r = i.filter(g.showConnector);
    return s.length || r.length
      ? ["wallet", "email", "social"]
      : U.DEFAULT_CONNECT_METHOD_ORDER;
  },
  isExcluded(e) {
    let t = !!e.rdns && C.state.excludedWallets.some((o) => o.rdns === e.rdns),
      n =
        !!e.name &&
        C.state.excludedWallets.some((o) => I.isLowerCaseMatch(o.name, e.name));
    return t || n;
  },
  markWalletsWithDisplayIndex(e) {
    return e.map((t, n) => A(x({}, t), { display_index: n }));
  },
};
export { E as a, g as b };
