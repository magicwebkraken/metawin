import { a as lr, c as dr, d as pr } from "./chunk-GBTQH4B2.js";
import {
  b as k,
  c as ar,
  d as bt,
  e as sr,
  g as or,
  i as de,
  j as ir,
  k as cr,
  l as v,
  m as ot,
  n as T,
  p as je,
} from "./chunk-2K64HG7Q.js";
import {
  a as V,
  b as X,
  c as Re,
  d as ve,
  e as J,
  f as nr,
} from "./chunk-LZ4YD47P.js";
import { h as Ye } from "./chunk-5LQ6A2AX.js";
import { lb as st } from "./chunk-5G3DVQVW.js";
import { a as l, b as h, e as rr, f as Te, n as u } from "./chunk-VNDKUXGB.js";
var kt =
    (typeof process < "u" && typeof process.env < "u"
      ? process.env.NEXT_PUBLIC_SECURE_SITE_ORIGIN
      : void 0) || "https://secure.walletconnect.org",
  Ws = [
    {
      label: "Meld.io",
      name: "meld",
      feeRange: "1-2%",
      url: "https://meldcrypto.com",
      supportedChains: ["eip155", "solana"],
    },
  ],
  js = "WXETMuFUQmqqybHuRkSgxv:25B8LJHSfpG6LVjR2ytU5Cwh7Z4Sch2ocoU",
  te = {
    FOUR_MINUTES_MS: 24e4,
    TEN_SEC_MS: 1e4,
    FIVE_SEC_MS: 5e3,
    THREE_SEC_MS: 3e3,
    ONE_SEC_MS: 1e3,
    SECURE_SITE: kt,
    SECURE_SITE_DASHBOARD: `${kt}/dashboard`,
    SECURE_SITE_FAVICON: `${kt}/images/favicon.png`,
    SOLANA_NATIVE_TOKEN_ADDRESS: "So11111111111111111111111111111111111111111",
    RESTRICTED_TIMEZONES: [
      "ASIA/SHANGHAI",
      "ASIA/URUMQI",
      "ASIA/CHONGQING",
      "ASIA/HARBIN",
      "ASIA/KASHGAR",
      "ASIA/MACAU",
      "ASIA/HONG_KONG",
      "ASIA/MACAO",
      "ASIA/BEIJING",
      "ASIA/HARBIN",
    ],
    SWAP_SUGGESTED_TOKENS: [
      "ETH",
      "UNI",
      "1INCH",
      "AAVE",
      "SOL",
      "ADA",
      "AVAX",
      "DOT",
      "LINK",
      "NITRO",
      "GAIA",
      "MILK",
      "TRX",
      "NEAR",
      "GNO",
      "WBTC",
      "DAI",
      "WETH",
      "USDC",
      "USDT",
      "ARB",
      "BAL",
      "BICO",
      "CRV",
      "ENS",
      "MATIC",
      "OP",
    ],
    SWAP_POPULAR_TOKENS: [
      "ETH",
      "UNI",
      "1INCH",
      "AAVE",
      "SOL",
      "ADA",
      "AVAX",
      "DOT",
      "LINK",
      "NITRO",
      "GAIA",
      "MILK",
      "TRX",
      "NEAR",
      "GNO",
      "WBTC",
      "DAI",
      "WETH",
      "USDC",
      "USDT",
      "ARB",
      "BAL",
      "BICO",
      "CRV",
      "ENS",
      "MATIC",
      "OP",
      "METAL",
      "DAI",
      "CHAMP",
      "WOLF",
      "SALE",
      "BAL",
      "BUSD",
      "MUST",
      "BTCpx",
      "ROUTE",
      "HEX",
      "WELT",
      "amDAI",
      "VSQ",
      "VISION",
      "AURUM",
      "pSP",
      "SNX",
      "VC",
      "LINK",
      "CHP",
      "amUSDT",
      "SPHERE",
      "FOX",
      "GIDDY",
      "GFC",
      "OMEN",
      "OX_OLD",
      "DE",
      "WNT",
    ],
    SUGGESTED_TOKENS_BY_CHAIN: { "eip155:42161": ["USD\u20AE0"] },
    BALANCE_SUPPORTED_CHAINS: [k.CHAIN.EVM, k.CHAIN.SOLANA],
    SEND_PARAMS_SUPPORTED_CHAINS: [k.CHAIN.EVM],
    SWAP_SUPPORTED_NETWORKS: [
      "eip155:1",
      "eip155:42161",
      "eip155:10",
      "eip155:324",
      "eip155:8453",
      "eip155:56",
      "eip155:137",
      "eip155:100",
      "eip155:43114",
      "eip155:250",
      "eip155:8217",
      "eip155:1313161554",
    ],
    NAMES_SUPPORTED_CHAIN_NAMESPACES: [k.CHAIN.EVM],
    ONRAMP_SUPPORTED_CHAIN_NAMESPACES: [k.CHAIN.EVM, k.CHAIN.SOLANA],
    PAY_WITH_EXCHANGE_SUPPORTED_CHAIN_NAMESPACES: [k.CHAIN.EVM, k.CHAIN.SOLANA],
    ACTIVITY_ENABLED_CHAIN_NAMESPACES: [k.CHAIN.EVM],
    NATIVE_TOKEN_ADDRESS: {
      eip155: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
      solana: "So11111111111111111111111111111111111111111",
      polkadot: "0x",
      bip122: "0x",
      cosmos: "0x",
      sui: "0x",
      stacks: "0x",
    },
    CONVERT_SLIPPAGE_TOLERANCE: 1,
    CONNECT_LABELS: {
      MOBILE: "Open and continue in the wallet app",
      WEB: "Open and continue in the wallet app",
    },
    SEND_SUPPORTED_NAMESPACES: [k.CHAIN.EVM, k.CHAIN.SOLANA],
    DEFAULT_REMOTE_FEATURES: {
      swaps: ["1inch"],
      onramp: ["meld"],
      email: !0,
      socials: [
        "google",
        "x",
        "discord",
        "farcaster",
        "github",
        "apple",
        "facebook",
      ],
      activity: !0,
      reownBranding: !0,
      multiWallet: !1,
      emailCapture: !1,
      payWithExchange: !1,
      payments: !1,
      reownAuthentication: !1,
    },
    DEFAULT_REMOTE_FEATURES_DISABLED: {
      email: !1,
      socials: !1,
      swaps: !1,
      onramp: !1,
      activity: !1,
      reownBranding: !1,
      emailCapture: !1,
      reownAuthentication: !1,
    },
    DEFAULT_FEATURES: {
      receive: !0,
      send: !0,
      emailShowWallets: !0,
      connectorTypeOrder: [
        "walletConnect",
        "recent",
        "injected",
        "featured",
        "custom",
        "external",
        "recommended",
      ],
      analytics: !0,
      allWallets: !0,
      legalCheckbox: !1,
      smartSessions: !1,
      collapseWallets: !1,
      walletFeaturesOrder: ["onramp", "swaps", "receive", "send"],
      connectMethodsOrder: void 0,
      pay: !1,
      reownAuthentication: !1,
    },
    DEFAULT_SOCIALS: [
      "google",
      "x",
      "farcaster",
      "discord",
      "apple",
      "github",
      "facebook",
    ],
    DEFAULT_ACCOUNT_TYPES: {
      bip122: "payment",
      eip155: "smartAccount",
      polkadot: "eoa",
      solana: "eoa",
    },
    ADAPTER_TYPES: {
      UNIVERSAL: "universal",
      SOLANA: "solana",
      WAGMI: "wagmi",
      ETHERS: "ethers",
      ETHERS5: "ethers5",
      BITCOIN: "bitcoin",
    },
    SIWX_DEFAULTS: { signOutOnDisconnect: !0 },
  };
var E = {
  cacheExpiry: {
    portfolio: 3e4,
    nativeBalance: 3e4,
    ens: 3e5,
    identity: 3e5,
    transactionsHistory: 15e3,
    tokenPrice: 15e3,
    latestAppKitVersion: 6048e5,
  },
  isCacheExpired(e, r) {
    return Date.now() - e > r;
  },
  getActiveNetworkProps() {
    let e = E.getActiveNamespace(),
      r = E.getActiveCaipNetworkId(),
      t = r ? r.split(":")[1] : void 0,
      n = t ? (isNaN(Number(t)) ? t : Number(t)) : void 0;
    return { namespace: e, caipNetworkId: r, chainId: n };
  },
  setWalletConnectDeepLink({ name: e, href: r }) {
    try {
      T.setItem(v.DEEPLINK_CHOICE, JSON.stringify({ href: r, name: e }));
    } catch {
      console.info("Unable to set WalletConnect deep link");
    }
  },
  getWalletConnectDeepLink() {
    try {
      let e = T.getItem(v.DEEPLINK_CHOICE);
      if (e) return JSON.parse(e);
    } catch {
      console.info("Unable to get WalletConnect deep link");
    }
  },
  deleteWalletConnectDeepLink() {
    try {
      T.removeItem(v.DEEPLINK_CHOICE);
    } catch {
      console.info("Unable to delete WalletConnect deep link");
    }
  },
  setActiveNamespace(e) {
    try {
      T.setItem(v.ACTIVE_NAMESPACE, e);
    } catch {
      console.info("Unable to set active namespace");
    }
  },
  setActiveCaipNetworkId(e) {
    try {
      T.setItem(v.ACTIVE_CAIP_NETWORK_ID, e),
        E.setActiveNamespace(e.split(":")[0]);
    } catch {
      console.info("Unable to set active caip network id");
    }
  },
  getActiveCaipNetworkId() {
    try {
      return T.getItem(v.ACTIVE_CAIP_NETWORK_ID);
    } catch {
      console.info("Unable to get active caip network id");
      return;
    }
  },
  deleteActiveCaipNetworkId() {
    try {
      T.removeItem(v.ACTIVE_CAIP_NETWORK_ID);
    } catch {
      console.info("Unable to delete active caip network id");
    }
  },
  deleteConnectedConnectorId(e) {
    try {
      let r = ot(e);
      T.removeItem(r);
    } catch {
      console.info("Unable to delete connected connector id");
    }
  },
  setAppKitRecent(e) {
    try {
      let r = E.getRecentWallets();
      r.find((n) => n.id === e.id) ||
        (r.unshift(e),
        r.length > 2 && r.pop(),
        T.setItem(v.RECENT_WALLETS, JSON.stringify(r)),
        T.setItem(v.RECENT_WALLET, JSON.stringify(e)));
    } catch {
      console.info("Unable to set AppKit recent");
    }
  },
  getRecentWallets() {
    try {
      let e = T.getItem(v.RECENT_WALLETS);
      return e ? JSON.parse(e) : [];
    } catch {
      console.info("Unable to get AppKit recent");
    }
    return [];
  },
  getRecentWallet() {
    try {
      let e = T.getItem(v.RECENT_WALLET);
      return e ? JSON.parse(e) : null;
    } catch {
      console.info("Unable to get AppKit recent");
    }
    return null;
  },
  deleteRecentWallet() {
    try {
      T.removeItem(v.RECENT_WALLET);
    } catch {
      console.info("Unable to delete AppKit recent");
    }
  },
  setConnectedConnectorId(e, r) {
    try {
      let t = ot(e);
      T.setItem(t, r);
    } catch {
      console.info("Unable to set Connected Connector Id");
    }
  },
  getActiveNamespace() {
    try {
      return T.getItem(v.ACTIVE_NAMESPACE);
    } catch {
      console.info("Unable to get active namespace");
    }
  },
  getConnectedConnectorId(e) {
    if (e)
      try {
        let r = ot(e);
        return T.getItem(r);
      } catch {
        console.info("Unable to get connected connector id in namespace", e);
      }
  },
  setConnectedSocialProvider(e) {
    try {
      T.setItem(v.CONNECTED_SOCIAL, e);
    } catch {
      console.info("Unable to set connected social provider");
    }
  },
  getConnectedSocialProvider() {
    try {
      return T.getItem(v.CONNECTED_SOCIAL);
    } catch {
      console.info("Unable to get connected social provider");
    }
  },
  deleteConnectedSocialProvider() {
    try {
      T.removeItem(v.CONNECTED_SOCIAL);
    } catch {
      console.info("Unable to delete connected social provider");
    }
  },
  getConnectedSocialUsername() {
    try {
      return T.getItem(v.CONNECTED_SOCIAL_USERNAME);
    } catch {
      console.info("Unable to get connected social username");
    }
  },
  getStoredActiveCaipNetworkId() {
    return T.getItem(v.ACTIVE_CAIP_NETWORK_ID)?.split(":")?.[1];
  },
  setConnectionStatus(e) {
    try {
      T.setItem(v.CONNECTION_STATUS, e);
    } catch {
      console.info("Unable to set connection status");
    }
  },
  getConnectionStatus() {
    try {
      return T.getItem(v.CONNECTION_STATUS);
    } catch {
      return;
    }
  },
  getConnectedNamespaces() {
    try {
      let e = T.getItem(v.CONNECTED_NAMESPACES);
      return e?.length ? e.split(",") : [];
    } catch {
      return [];
    }
  },
  setConnectedNamespaces(e) {
    try {
      let r = Array.from(new Set(e));
      T.setItem(v.CONNECTED_NAMESPACES, r.join(","));
    } catch {
      console.info("Unable to set namespaces in storage");
    }
  },
  addConnectedNamespace(e) {
    try {
      let r = E.getConnectedNamespaces();
      r.includes(e) || (r.push(e), E.setConnectedNamespaces(r));
    } catch {
      console.info("Unable to add connected namespace");
    }
  },
  removeConnectedNamespace(e) {
    try {
      let r = E.getConnectedNamespaces(),
        t = r.indexOf(e);
      t > -1 && (r.splice(t, 1), E.setConnectedNamespaces(r));
    } catch {
      console.info("Unable to remove connected namespace");
    }
  },
  getTelegramSocialProvider() {
    try {
      return T.getItem(v.TELEGRAM_SOCIAL_PROVIDER);
    } catch {
      return console.info("Unable to get telegram social provider"), null;
    }
  },
  setTelegramSocialProvider(e) {
    try {
      T.setItem(v.TELEGRAM_SOCIAL_PROVIDER, e);
    } catch {
      console.info("Unable to set telegram social provider");
    }
  },
  removeTelegramSocialProvider() {
    try {
      T.removeItem(v.TELEGRAM_SOCIAL_PROVIDER);
    } catch {
      console.info("Unable to remove telegram social provider");
    }
  },
  getBalanceCache() {
    let e = {};
    try {
      let r = T.getItem(v.PORTFOLIO_CACHE);
      e = r ? JSON.parse(r) : {};
    } catch {
      console.info("Unable to get balance cache");
    }
    return e;
  },
  removeAddressFromBalanceCache(e) {
    try {
      let r = E.getBalanceCache();
      T.setItem(
        v.PORTFOLIO_CACHE,
        JSON.stringify(h(l({}, r), { [e]: void 0 }))
      );
    } catch {
      console.info("Unable to remove address from balance cache", e);
    }
  },
  getBalanceCacheForCaipAddress(e) {
    try {
      let t = E.getBalanceCache()[e];
      if (t && !this.isCacheExpired(t.timestamp, this.cacheExpiry.portfolio))
        return t.balance;
      E.removeAddressFromBalanceCache(e);
    } catch {
      console.info("Unable to get balance cache for address", e);
    }
  },
  updateBalanceCache(e) {
    try {
      let r = E.getBalanceCache();
      (r[e.caipAddress] = e), T.setItem(v.PORTFOLIO_CACHE, JSON.stringify(r));
    } catch {
      console.info("Unable to update balance cache", e);
    }
  },
  getNativeBalanceCache() {
    let e = {};
    try {
      let r = T.getItem(v.NATIVE_BALANCE_CACHE);
      e = r ? JSON.parse(r) : {};
    } catch {
      console.info("Unable to get balance cache");
    }
    return e;
  },
  removeAddressFromNativeBalanceCache(e) {
    try {
      let r = E.getBalanceCache();
      T.setItem(
        v.NATIVE_BALANCE_CACHE,
        JSON.stringify(h(l({}, r), { [e]: void 0 }))
      );
    } catch {
      console.info("Unable to remove address from balance cache", e);
    }
  },
  getNativeBalanceCacheForCaipAddress(e) {
    try {
      let t = E.getNativeBalanceCache()[e];
      if (
        t &&
        !this.isCacheExpired(t.timestamp, this.cacheExpiry.nativeBalance)
      )
        return t;
      console.info("Discarding cache for address", e),
        E.removeAddressFromBalanceCache(e);
    } catch {
      console.info("Unable to get balance cache for address", e);
    }
  },
  updateNativeBalanceCache(e) {
    try {
      let r = E.getNativeBalanceCache();
      (r[e.caipAddress] = e),
        T.setItem(v.NATIVE_BALANCE_CACHE, JSON.stringify(r));
    } catch {
      console.info("Unable to update balance cache", e);
    }
  },
  getEnsCache() {
    let e = {};
    try {
      let r = T.getItem(v.ENS_CACHE);
      e = r ? JSON.parse(r) : {};
    } catch {
      console.info("Unable to get ens name cache");
    }
    return e;
  },
  getEnsFromCacheForAddress(e) {
    try {
      let t = E.getEnsCache()[e];
      if (t && !this.isCacheExpired(t.timestamp, this.cacheExpiry.ens))
        return t.ens;
      E.removeEnsFromCache(e);
    } catch {
      console.info("Unable to get ens name from cache", e);
    }
  },
  updateEnsCache(e) {
    try {
      let r = E.getEnsCache();
      (r[e.address] = e), T.setItem(v.ENS_CACHE, JSON.stringify(r));
    } catch {
      console.info("Unable to update ens name cache", e);
    }
  },
  removeEnsFromCache(e) {
    try {
      let r = E.getEnsCache();
      T.setItem(v.ENS_CACHE, JSON.stringify(h(l({}, r), { [e]: void 0 })));
    } catch {
      console.info("Unable to remove ens name from cache", e);
    }
  },
  getIdentityCache() {
    let e = {};
    try {
      let r = T.getItem(v.IDENTITY_CACHE);
      e = r ? JSON.parse(r) : {};
    } catch {
      console.info("Unable to get identity cache");
    }
    return e;
  },
  getIdentityFromCacheForAddress(e) {
    try {
      let t = E.getIdentityCache()[e];
      if (t && !this.isCacheExpired(t.timestamp, this.cacheExpiry.identity))
        return t.identity;
      E.removeIdentityFromCache(e);
    } catch {
      console.info("Unable to get identity from cache", e);
    }
  },
  updateIdentityCache(e) {
    try {
      let r = E.getIdentityCache();
      (r[e.address] = { identity: e.identity, timestamp: e.timestamp }),
        T.setItem(v.IDENTITY_CACHE, JSON.stringify(r));
    } catch {
      console.info("Unable to update identity cache", e);
    }
  },
  removeIdentityFromCache(e) {
    try {
      let r = E.getIdentityCache();
      T.setItem(v.IDENTITY_CACHE, JSON.stringify(h(l({}, r), { [e]: void 0 })));
    } catch {
      console.info("Unable to remove identity from cache", e);
    }
  },
  clearAddressCache() {
    try {
      T.removeItem(v.PORTFOLIO_CACHE),
        T.removeItem(v.NATIVE_BALANCE_CACHE),
        T.removeItem(v.ENS_CACHE),
        T.removeItem(v.IDENTITY_CACHE),
        T.removeItem(v.HISTORY_TRANSACTIONS_CACHE);
    } catch {
      console.info("Unable to clear address cache");
    }
  },
  setPreferredAccountTypes(e) {
    try {
      T.setItem(v.PREFERRED_ACCOUNT_TYPES, JSON.stringify(e));
    } catch {
      console.info("Unable to set preferred account types", e);
    }
  },
  getPreferredAccountTypes() {
    try {
      let e = T.getItem(v.PREFERRED_ACCOUNT_TYPES);
      return e ? JSON.parse(e) : {};
    } catch {
      console.info("Unable to get preferred account types");
    }
    return {};
  },
  setConnections(e, r) {
    try {
      let t = E.getConnections(),
        n = t[r] ?? [],
        a = new Map();
      for (let o of n) a.set(o.connectorId, l({}, o));
      for (let o of e) {
        let c = a.get(o.connectorId),
          d = o.connectorId === k.CONNECTOR_ID.AUTH;
        if (c && !d) {
          let m = new Set(c.accounts.map((g) => g.address.toLowerCase())),
            f = o.accounts.filter((g) => !m.has(g.address.toLowerCase()));
          c.accounts.push(...f);
        } else a.set(o.connectorId, l({}, o));
      }
      let s = h(l({}, t), { [r]: Array.from(a.values()) });
      T.setItem(v.CONNECTIONS, JSON.stringify(s));
    } catch (t) {
      console.error("Unable to sync connections to storage", t);
    }
  },
  getConnections() {
    try {
      let e = T.getItem(v.CONNECTIONS);
      return e ? JSON.parse(e) : {};
    } catch (e) {
      return console.error("Unable to get connections from storage", e), {};
    }
  },
  deleteAddressFromConnection({ connectorId: e, address: r, namespace: t }) {
    try {
      let n = E.getConnections(),
        a = n[t] ?? [],
        s = new Map(a.map((c) => [c.connectorId, c])),
        o = s.get(e);
      o &&
        (o.accounts.filter((d) => d.address.toLowerCase() !== r.toLowerCase())
          .length === 0
          ? s.delete(e)
          : s.set(
              e,
              h(l({}, o), {
                accounts: o.accounts.filter(
                  (d) => d.address.toLowerCase() !== r.toLowerCase()
                ),
              })
            )),
        T.setItem(
          v.CONNECTIONS,
          JSON.stringify(h(l({}, n), { [t]: Array.from(s.values()) }))
        );
    } catch {
      console.error(
        `Unable to remove address "${r}" from connector "${e}" in namespace "${t}"`
      );
    }
  },
  getDisconnectedConnectorIds() {
    try {
      let e = T.getItem(v.DISCONNECTED_CONNECTOR_IDS);
      return e ? JSON.parse(e) : {};
    } catch {
      console.info("Unable to get disconnected connector ids");
    }
    return {};
  },
  addDisconnectedConnectorId(e, r) {
    try {
      let t = E.getDisconnectedConnectorIds(),
        n = t[r] ?? [];
      n.push(e),
        T.setItem(
          v.DISCONNECTED_CONNECTOR_IDS,
          JSON.stringify(h(l({}, t), { [r]: Array.from(new Set(n)) }))
        );
    } catch {
      console.error(
        `Unable to set disconnected connector id "${e}" for namespace "${r}"`
      );
    }
  },
  removeDisconnectedConnectorId(e, r) {
    try {
      let t = E.getDisconnectedConnectorIds(),
        n = t[r] ?? [];
      (n = n.filter((a) => a.toLowerCase() !== e.toLowerCase())),
        T.setItem(
          v.DISCONNECTED_CONNECTOR_IDS,
          JSON.stringify(h(l({}, t), { [r]: Array.from(new Set(n)) }))
        );
    } catch {
      console.error(
        `Unable to remove disconnected connector id "${e}" for namespace "${r}"`
      );
    }
  },
  isConnectorDisconnected(e, r) {
    try {
      return (E.getDisconnectedConnectorIds()[r] ?? []).some(
        (a) => a.toLowerCase() === e.toLowerCase()
      );
    } catch {
      console.info(
        `Unable to get disconnected connector id "${e}" for namespace "${r}"`
      );
    }
    return !1;
  },
  getTransactionsCache() {
    try {
      let e = T.getItem(v.HISTORY_TRANSACTIONS_CACHE);
      return e ? JSON.parse(e) : {};
    } catch {
      console.info("Unable to get transactions cache");
    }
    return {};
  },
  getTransactionsCacheForAddress({ address: e, chainId: r = "" }) {
    try {
      let n = E.getTransactionsCache()[e]?.[r];
      if (
        n &&
        !this.isCacheExpired(n.timestamp, this.cacheExpiry.transactionsHistory)
      )
        return n.transactions;
      E.removeTransactionsCache({ address: e, chainId: r });
    } catch {
      console.info("Unable to get transactions cache");
    }
  },
  updateTransactionsCache({
    address: e,
    chainId: r = "",
    timestamp: t,
    transactions: n,
  }) {
    try {
      let a = E.getTransactionsCache();
      (a[e] = h(l({}, a[e]), { [r]: { timestamp: t, transactions: n } })),
        T.setItem(v.HISTORY_TRANSACTIONS_CACHE, JSON.stringify(a));
    } catch {
      console.info("Unable to update transactions cache", {
        address: e,
        chainId: r,
        timestamp: t,
        transactions: n,
      });
    }
  },
  removeTransactionsCache({ address: e, chainId: r }) {
    try {
      let n = E.getTransactionsCache(),
        t = n?.[e] || {},
        { [r]: s } = t,
        o = Te(t, [rr(r)]);
      T.setItem(
        v.HISTORY_TRANSACTIONS_CACHE,
        JSON.stringify(h(l({}, n), { [e]: o }))
      );
    } catch {
      console.info("Unable to remove transactions cache", {
        address: e,
        chainId: r,
      });
    }
  },
  getTokenPriceCache() {
    try {
      let e = T.getItem(v.TOKEN_PRICE_CACHE);
      return e ? JSON.parse(e) : {};
    } catch {
      console.info("Unable to get token price cache");
    }
    return {};
  },
  getTokenPriceCacheForAddresses(e) {
    try {
      let t = E.getTokenPriceCache()[e.join(",")];
      if (t && !this.isCacheExpired(t.timestamp, this.cacheExpiry.tokenPrice))
        return t.tokenPrice;
      E.removeTokenPriceCache(e);
    } catch {
      console.info("Unable to get token price cache for addresses", e);
    }
  },
  updateTokenPriceCache(e) {
    try {
      let r = E.getTokenPriceCache();
      (r[e.addresses.join(",")] = {
        timestamp: e.timestamp,
        tokenPrice: e.tokenPrice,
      }),
        T.setItem(v.TOKEN_PRICE_CACHE, JSON.stringify(r));
    } catch {
      console.info("Unable to update token price cache", e);
    }
  },
  removeTokenPriceCache(e) {
    try {
      let r = E.getTokenPriceCache();
      T.setItem(
        v.TOKEN_PRICE_CACHE,
        JSON.stringify(h(l({}, r), { [e.join(",")]: void 0 }))
      );
    } catch {
      console.info("Unable to remove token price cache", e);
    }
  },
  getLatestAppKitVersion() {
    try {
      let e = this.getLatestAppKitVersionCache(),
        r = e?.version;
      return r &&
        !this.isCacheExpired(e.timestamp, this.cacheExpiry.latestAppKitVersion)
        ? r
        : void 0;
    } catch {
      console.info("Unable to get latest AppKit version");
    }
  },
  getLatestAppKitVersionCache() {
    try {
      let e = T.getItem(v.LATEST_APPKIT_VERSION);
      return e ? JSON.parse(e) : {};
    } catch {
      console.info("Unable to get latest AppKit version cache");
    }
    return {};
  },
  updateLatestAppKitVersion(e) {
    try {
      let r = E.getLatestAppKitVersionCache();
      (r.timestamp = e.timestamp),
        (r.version = e.version),
        T.setItem(v.LATEST_APPKIT_VERSION, JSON.stringify(r));
    } catch {
      console.info(
        "Unable to update latest AppKit version on local storage",
        e
      );
    }
  },
};
var O = {
  isMobile() {
    return this.isClient()
      ? !!(
          (window?.matchMedia &&
            typeof window.matchMedia == "function" &&
            window.matchMedia("(pointer:coarse)")?.matches) ||
          /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(
            navigator.userAgent
          )
        )
      : !1;
  },
  checkCaipNetwork(e, r = "") {
    return e?.caipNetworkId.toLocaleLowerCase().includes(r.toLowerCase());
  },
  isAndroid() {
    if (!this.isMobile()) return !1;
    let e = window?.navigator.userAgent.toLowerCase();
    return O.isMobile() && e.includes("android");
  },
  isIos() {
    if (!this.isMobile()) return !1;
    let e = window?.navigator.userAgent.toLowerCase();
    return e.includes("iphone") || e.includes("ipad");
  },
  isSafari() {
    return this.isClient()
      ? window?.navigator.userAgent.toLowerCase().includes("safari")
      : !1;
  },
  isClient() {
    return typeof window < "u";
  },
  isPairingExpired(e) {
    return e ? e - Date.now() <= te.TEN_SEC_MS : !0;
  },
  isAllowedRetry(e, r = te.ONE_SEC_MS) {
    return Date.now() - e >= r;
  },
  copyToClopboard(e) {
    navigator.clipboard.writeText(e);
  },
  isIframe() {
    try {
      return window?.self !== window?.top;
    } catch {
      return !1;
    }
  },
  isSafeApp() {
    if (O.isClient() && window.self !== window.top)
      try {
        let e = window?.location?.ancestorOrigins?.[0],
          r = "https://app.safe.global";
        if (e) {
          let t = new URL(e),
            n = new URL(r);
          return t.hostname === n.hostname;
        }
      } catch {
        return !1;
      }
    return !1;
  },
  getPairingExpiry() {
    return Date.now() + te.FOUR_MINUTES_MS;
  },
  getNetworkId(e) {
    return e?.split(":")[1];
  },
  getPlainAddress(e) {
    return e?.split(":")[2];
  },
  wait(e) {
    return u(this, null, function* () {
      return new Promise((r) => {
        setTimeout(r, e);
      });
    });
  },
  debounce(e, r = 500) {
    let t;
    return (...n) => {
      function a() {
        e(...n);
      }
      t && clearTimeout(t), (t = setTimeout(a, r));
    };
  },
  isHttpUrl(e) {
    return e.startsWith("http://") || e.startsWith("https://");
  },
  formatNativeUrl(e, r, t = null) {
    if (O.isHttpUrl(e)) return this.formatUniversalUrl(e, r);
    let n = e,
      a = t;
    n.includes("://") ||
      ((n = e.replaceAll("/", "").replaceAll(":", "")), (n = `${n}://`)),
      n.endsWith("/") || (n = `${n}/`),
      a && !a?.endsWith("/") && (a = `${a}/`),
      this.isTelegram() && this.isAndroid() && (r = encodeURIComponent(r));
    let s = encodeURIComponent(r);
    return {
      redirect: `${n}wc?uri=${s}`,
      redirectUniversalLink: a ? `${a}wc?uri=${s}` : void 0,
      href: n,
    };
  },
  formatUniversalUrl(e, r) {
    if (!O.isHttpUrl(e)) return this.formatNativeUrl(e, r);
    let t = e;
    t.endsWith("/") || (t = `${t}/`);
    let n = encodeURIComponent(r);
    return { redirect: `${t}wc?uri=${n}`, href: t };
  },
  getOpenTargetForPlatform(e) {
    return e === "popupWindow"
      ? e
      : this.isTelegram()
      ? E.getTelegramSocialProvider()
        ? "_top"
        : "_blank"
      : e;
  },
  openHref(e, r, t) {
    window?.open(
      e,
      this.getOpenTargetForPlatform(r),
      t || "noreferrer noopener"
    );
  },
  returnOpenHref(e, r, t) {
    return window?.open(
      e,
      this.getOpenTargetForPlatform(r),
      t || "noreferrer noopener"
    );
  },
  isTelegram() {
    return (
      typeof window < "u" &&
      (!!window.TelegramWebviewProxy ||
        !!window.Telegram ||
        !!window.TelegramWebviewProxyProto)
    );
  },
  isPWA() {
    if (typeof window > "u") return !1;
    let e =
        window?.matchMedia && typeof window.matchMedia == "function"
          ? window.matchMedia("(display-mode: standalone)")?.matches
          : !1,
      r = window?.navigator?.standalone;
    return !!(e || r);
  },
  preloadImage(e) {
    return u(this, null, function* () {
      let r = new Promise((t, n) => {
        let a = new Image();
        (a.onload = t),
          (a.onerror = n),
          (a.crossOrigin = "anonymous"),
          (a.src = e);
      });
      return Promise.race([r, O.wait(2e3)]);
    });
  },
  parseBalance(e, r) {
    let t = "0.000";
    if (typeof e == "string") {
      let d = Number(e);
      if (!isNaN(d)) {
        let m = (Math.floor(d * 1e3) / 1e3).toFixed(3);
        m && (t = m);
      }
    }
    let [n, a] = t.split("."),
      s = n || "0",
      o = a || "000";
    return {
      formattedText: `${s}.${o}${r ? ` ${r}` : ""}`,
      value: s,
      decimals: o,
      symbol: r,
    };
  },
  getApiUrl() {
    return k.W3M_API_URL;
  },
  getBlockchainApiUrl() {
    return k.BLOCKCHAIN_API_RPC_URL;
  },
  getAnalyticsUrl() {
    return k.PULSE_API_URL;
  },
  getUUID() {
    return crypto?.randomUUID
      ? crypto.randomUUID()
      : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu, (e) => {
          let r = (Math.random() * 16) | 0;
          return (e === "x" ? r : (r & 3) | 8).toString(16);
        });
  },
  parseError(e) {
    return typeof e == "string"
      ? e
      : typeof e?.issues?.[0]?.message == "string"
      ? e.issues[0].message
      : e instanceof Error
      ? e.message
      : "Unknown error";
  },
  sortRequestedNetworks(e, r = []) {
    let t = {};
    return (
      r &&
        e &&
        (e.forEach((n, a) => {
          t[n] = a;
        }),
        r.sort((n, a) => {
          let s = t[n.id],
            o = t[a.id];
          return s !== void 0 && o !== void 0
            ? s - o
            : s !== void 0
            ? -1
            : o !== void 0
            ? 1
            : 0;
        })),
      r
    );
  },
  calculateBalance(e) {
    let r = 0;
    for (let t of e) r += t.value ?? 0;
    return r;
  },
  formatTokenBalance(e) {
    let r = e.toFixed(2),
      [t, n] = r.split(".");
    return { dollars: t, pennies: n };
  },
  isAddress(e, r = "eip155") {
    switch (r) {
      case "eip155":
        if (/^(?:0x)?[0-9a-f]{40}$/iu.test(e)) {
          if (
            /^(?:0x)?[0-9a-f]{40}$/iu.test(e) ||
            /^(?:0x)?[0-9A-F]{40}$/iu.test(e)
          )
            return !0;
        } else return !1;
        return !1;
      case "solana":
        return /[1-9A-HJ-NP-Za-km-z]{32,44}$/iu.test(e);
      default:
        return !1;
    }
  },
  uniqueBy(e, r) {
    let t = new Set();
    return e.filter((n) => {
      let a = n[r];
      return t.has(a) ? !1 : (t.add(a), !0);
    });
  },
  generateSdkVersion(e, r, t) {
    let a =
      e.length === 0
        ? te.ADAPTER_TYPES.UNIVERSAL
        : e.map((s) => s.adapterType).join(",");
    return `${r}-${a}-${t}`;
  },
  createAccount(e, r, t, n, a) {
    return { namespace: e, address: r, type: t, publicKey: n, path: a };
  },
  isCaipAddress(e) {
    if (typeof e != "string") return !1;
    let r = e.split(":"),
      t = r[0];
    return r.filter(Boolean).length === 3 && t in k.CHAIN_NAME_MAP;
  },
  getAccount(e) {
    return e
      ? typeof e == "string"
        ? { address: e, chainId: void 0 }
        : { address: e.address, chainId: e.chainId }
      : { address: void 0, chainId: void 0 };
  },
  isMac() {
    let e = window?.navigator.userAgent.toLowerCase();
    return e.includes("macintosh") && !e.includes("safari");
  },
  formatTelegramSocialLoginUrl(e) {
    let r = `--${encodeURIComponent(window?.location.href)}`,
      t = "state=";
    if (new URL(e).host === "auth.magic.link") {
      let a = "provider_authorization_url=",
        s = e.substring(e.indexOf(a) + a.length),
        o = this.injectIntoUrl(decodeURIComponent(s), t, r);
      return e.replace(s, encodeURIComponent(o));
    }
    return this.injectIntoUrl(e, t, r);
  },
  injectIntoUrl(e, r, t) {
    let n = e.indexOf(r);
    if (n === -1) throw new Error(`${r} parameter not found in the URL: ${e}`);
    let a = e.indexOf("&", n),
      s = r.length,
      o = a !== -1 ? a : e.length,
      c = e.substring(0, n + s),
      d = e.substring(n + s, o),
      m = e.substring(a),
      f = d + t;
    return c + f + m;
  },
};
var qr = "https://secure.walletconnect.org/sdk",
  ur =
    (typeof process < "u" && typeof process.env < "u"
      ? process.env.NEXT_PUBLIC_SECURE_SITE_SDK_URL
      : void 0) || qr,
  mr =
    (typeof process < "u" && typeof process.env < "u"
      ? process.env.NEXT_PUBLIC_DEFAULT_LOG_LEVEL
      : void 0) || "error",
  fr =
    (typeof process < "u" && typeof process.env < "u"
      ? process.env.NEXT_PUBLIC_SECURE_SITE_SDK_VERSION
      : void 0) || "4",
  y = {
    APP_EVENT_KEY: "@w3m-app/",
    FRAME_EVENT_KEY: "@w3m-frame/",
    RPC_METHOD_KEY: "RPC_",
    STORAGE_KEY: "@appkit-wallet/",
    SESSION_TOKEN_KEY: "SESSION_TOKEN_KEY",
    EMAIL_LOGIN_USED_KEY: "EMAIL_LOGIN_USED_KEY",
    LAST_USED_CHAIN_KEY: "LAST_USED_CHAIN_KEY",
    LAST_EMAIL_LOGIN_TIME: "LAST_EMAIL_LOGIN_TIME",
    EMAIL: "EMAIL",
    PREFERRED_ACCOUNT_TYPE: "PREFERRED_ACCOUNT_TYPE",
    SMART_ACCOUNT_ENABLED: "SMART_ACCOUNT_ENABLED",
    SMART_ACCOUNT_ENABLED_NETWORKS: "SMART_ACCOUNT_ENABLED_NETWORKS",
    SOCIAL_USERNAME: "SOCIAL_USERNAME",
    APP_SWITCH_NETWORK: "@w3m-app/SWITCH_NETWORK",
    APP_CONNECT_EMAIL: "@w3m-app/CONNECT_EMAIL",
    APP_CONNECT_DEVICE: "@w3m-app/CONNECT_DEVICE",
    APP_CONNECT_OTP: "@w3m-app/CONNECT_OTP",
    APP_CONNECT_SOCIAL: "@w3m-app/CONNECT_SOCIAL",
    APP_GET_SOCIAL_REDIRECT_URI: "@w3m-app/GET_SOCIAL_REDIRECT_URI",
    APP_GET_USER: "@w3m-app/GET_USER",
    APP_SIGN_OUT: "@w3m-app/SIGN_OUT",
    APP_IS_CONNECTED: "@w3m-app/IS_CONNECTED",
    APP_GET_CHAIN_ID: "@w3m-app/GET_CHAIN_ID",
    APP_RPC_REQUEST: "@w3m-app/RPC_REQUEST",
    APP_UPDATE_EMAIL: "@w3m-app/UPDATE_EMAIL",
    APP_UPDATE_EMAIL_PRIMARY_OTP: "@w3m-app/UPDATE_EMAIL_PRIMARY_OTP",
    APP_UPDATE_EMAIL_SECONDARY_OTP: "@w3m-app/UPDATE_EMAIL_SECONDARY_OTP",
    APP_AWAIT_UPDATE_EMAIL: "@w3m-app/AWAIT_UPDATE_EMAIL",
    APP_SYNC_THEME: "@w3m-app/SYNC_THEME",
    APP_SYNC_DAPP_DATA: "@w3m-app/SYNC_DAPP_DATA",
    APP_GET_SMART_ACCOUNT_ENABLED_NETWORKS:
      "@w3m-app/GET_SMART_ACCOUNT_ENABLED_NETWORKS",
    APP_INIT_SMART_ACCOUNT: "@w3m-app/INIT_SMART_ACCOUNT",
    APP_SET_PREFERRED_ACCOUNT: "@w3m-app/SET_PREFERRED_ACCOUNT",
    APP_CONNECT_FARCASTER: "@w3m-app/CONNECT_FARCASTER",
    APP_GET_FARCASTER_URI: "@w3m-app/GET_FARCASTER_URI",
    APP_RELOAD: "@w3m-app/RELOAD",
    APP_RPC_ABORT: "@w3m-app/RPC_ABORT",
    FRAME_SWITCH_NETWORK_ERROR: "@w3m-frame/SWITCH_NETWORK_ERROR",
    FRAME_SWITCH_NETWORK_SUCCESS: "@w3m-frame/SWITCH_NETWORK_SUCCESS",
    FRAME_CONNECT_EMAIL_ERROR: "@w3m-frame/CONNECT_EMAIL_ERROR",
    FRAME_CONNECT_EMAIL_SUCCESS: "@w3m-frame/CONNECT_EMAIL_SUCCESS",
    FRAME_CONNECT_DEVICE_ERROR: "@w3m-frame/CONNECT_DEVICE_ERROR",
    FRAME_CONNECT_DEVICE_SUCCESS: "@w3m-frame/CONNECT_DEVICE_SUCCESS",
    FRAME_CONNECT_OTP_SUCCESS: "@w3m-frame/CONNECT_OTP_SUCCESS",
    FRAME_CONNECT_OTP_ERROR: "@w3m-frame/CONNECT_OTP_ERROR",
    FRAME_CONNECT_SOCIAL_SUCCESS: "@w3m-frame/CONNECT_SOCIAL_SUCCESS",
    FRAME_CONNECT_SOCIAL_ERROR: "@w3m-frame/CONNECT_SOCIAL_ERROR",
    FRAME_CONNECT_FARCASTER_SUCCESS: "@w3m-frame/CONNECT_FARCASTER_SUCCESS",
    FRAME_CONNECT_FARCASTER_ERROR: "@w3m-frame/CONNECT_FARCASTER_ERROR",
    FRAME_GET_FARCASTER_URI_SUCCESS: "@w3m-frame/GET_FARCASTER_URI_SUCCESS",
    FRAME_GET_FARCASTER_URI_ERROR: "@w3m-frame/GET_FARCASTER_URI_ERROR",
    FRAME_GET_SOCIAL_REDIRECT_URI_SUCCESS:
      "@w3m-frame/GET_SOCIAL_REDIRECT_URI_SUCCESS",
    FRAME_GET_SOCIAL_REDIRECT_URI_ERROR:
      "@w3m-frame/GET_SOCIAL_REDIRECT_URI_ERROR",
    FRAME_GET_USER_SUCCESS: "@w3m-frame/GET_USER_SUCCESS",
    FRAME_GET_USER_ERROR: "@w3m-frame/GET_USER_ERROR",
    FRAME_SIGN_OUT_SUCCESS: "@w3m-frame/SIGN_OUT_SUCCESS",
    FRAME_SIGN_OUT_ERROR: "@w3m-frame/SIGN_OUT_ERROR",
    FRAME_IS_CONNECTED_SUCCESS: "@w3m-frame/IS_CONNECTED_SUCCESS",
    FRAME_IS_CONNECTED_ERROR: "@w3m-frame/IS_CONNECTED_ERROR",
    FRAME_GET_CHAIN_ID_SUCCESS: "@w3m-frame/GET_CHAIN_ID_SUCCESS",
    FRAME_GET_CHAIN_ID_ERROR: "@w3m-frame/GET_CHAIN_ID_ERROR",
    FRAME_RPC_REQUEST_SUCCESS: "@w3m-frame/RPC_REQUEST_SUCCESS",
    FRAME_RPC_REQUEST_ERROR: "@w3m-frame/RPC_REQUEST_ERROR",
    FRAME_SESSION_UPDATE: "@w3m-frame/SESSION_UPDATE",
    FRAME_UPDATE_EMAIL_SUCCESS: "@w3m-frame/UPDATE_EMAIL_SUCCESS",
    FRAME_UPDATE_EMAIL_ERROR: "@w3m-frame/UPDATE_EMAIL_ERROR",
    FRAME_UPDATE_EMAIL_PRIMARY_OTP_SUCCESS:
      "@w3m-frame/UPDATE_EMAIL_PRIMARY_OTP_SUCCESS",
    FRAME_UPDATE_EMAIL_PRIMARY_OTP_ERROR:
      "@w3m-frame/UPDATE_EMAIL_PRIMARY_OTP_ERROR",
    FRAME_UPDATE_EMAIL_SECONDARY_OTP_SUCCESS:
      "@w3m-frame/UPDATE_EMAIL_SECONDARY_OTP_SUCCESS",
    FRAME_UPDATE_EMAIL_SECONDARY_OTP_ERROR:
      "@w3m-frame/UPDATE_EMAIL_SECONDARY_OTP_ERROR",
    FRAME_SYNC_THEME_SUCCESS: "@w3m-frame/SYNC_THEME_SUCCESS",
    FRAME_SYNC_THEME_ERROR: "@w3m-frame/SYNC_THEME_ERROR",
    FRAME_SYNC_DAPP_DATA_SUCCESS: "@w3m-frame/SYNC_DAPP_DATA_SUCCESS",
    FRAME_SYNC_DAPP_DATA_ERROR: "@w3m-frame/SYNC_DAPP_DATA_ERROR",
    FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS:
      "@w3m-frame/GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS",
    FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR:
      "@w3m-frame/GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR",
    FRAME_INIT_SMART_ACCOUNT_SUCCESS: "@w3m-frame/INIT_SMART_ACCOUNT_SUCCESS",
    FRAME_INIT_SMART_ACCOUNT_ERROR: "@w3m-frame/INIT_SMART_ACCOUNT_ERROR",
    FRAME_SET_PREFERRED_ACCOUNT_SUCCESS:
      "@w3m-frame/SET_PREFERRED_ACCOUNT_SUCCESS",
    FRAME_SET_PREFERRED_ACCOUNT_ERROR: "@w3m-frame/SET_PREFERRED_ACCOUNT_ERROR",
    FRAME_READY: "@w3m-frame/READY",
    FRAME_RELOAD_SUCCESS: "@w3m-frame/RELOAD_SUCCESS",
    FRAME_RELOAD_ERROR: "@w3m-frame/RELOAD_ERROR",
    FRAME_RPC_ABORT_SUCCESS: "@w3m-frame/RPC_ABORT_SUCCESS",
    FRAME_RPC_ABORT_ERROR: "@w3m-frame/RPC_ABORT_ERROR",
    RPC_RESPONSE_TYPE_ERROR: "RPC_RESPONSE_ERROR",
    RPC_RESPONSE_TYPE_TX: "RPC_RESPONSE_TRANSACTION_HASH",
    RPC_RESPONSE_TYPE_OBJECT: "RPC_RESPONSE_OBJECT",
  },
  Q = {
    SAFE_RPC_METHODS: [
      "eth_accounts",
      "eth_blockNumber",
      "eth_call",
      "eth_chainId",
      "eth_estimateGas",
      "eth_feeHistory",
      "eth_gasPrice",
      "eth_getAccount",
      "eth_getBalance",
      "eth_getBlockByHash",
      "eth_getBlockByNumber",
      "eth_getBlockReceipts",
      "eth_getBlockTransactionCountByHash",
      "eth_getBlockTransactionCountByNumber",
      "eth_getCode",
      "eth_getFilterChanges",
      "eth_getFilterLogs",
      "eth_getLogs",
      "eth_getProof",
      "eth_getStorageAt",
      "eth_getTransactionByBlockHashAndIndex",
      "eth_getTransactionByBlockNumberAndIndex",
      "eth_getTransactionByHash",
      "eth_getTransactionCount",
      "eth_getTransactionReceipt",
      "eth_getUncleCountByBlockHash",
      "eth_getUncleCountByBlockNumber",
      "eth_maxPriorityFeePerGas",
      "eth_newBlockFilter",
      "eth_newFilter",
      "eth_newPendingTransactionFilter",
      "eth_sendRawTransaction",
      "eth_syncing",
      "eth_uninstallFilter",
      "wallet_getCapabilities",
      "wallet_getCallsStatus",
      "eth_getUserOperationReceipt",
      "eth_estimateUserOperationGas",
      "eth_getUserOperationByHash",
      "eth_supportedEntryPoints",
      "wallet_getAssets",
    ],
    NOT_SAFE_RPC_METHODS: [
      "personal_sign",
      "eth_signTypedData_v4",
      "eth_sendTransaction",
      "solana_signMessage",
      "solana_signTransaction",
      "solana_signAllTransactions",
      "solana_signAndSendTransaction",
      "wallet_sendCalls",
      "wallet_grantPermissions",
      "wallet_revokePermissions",
      "eth_sendUserOperation",
    ],
    GET_CHAIN_ID: "eth_chainId",
    RPC_METHOD_NOT_ALLOWED_MESSAGE: "Requested RPC call is not allowed",
    RPC_METHOD_NOT_ALLOWED_UI_MESSAGE: "Action not allowed",
    ACCOUNT_TYPES: { EOA: "eoa", SMART_ACCOUNT: "smartAccount" },
  };
var Ot = {
  address: /^0x(?:[A-Fa-f0-9]{40})$/u,
  transactionHash: /^0x(?:[A-Fa-f0-9]{64})$/u,
  signedMessage: /^0x(?:[a-fA-F0-9]{62,})$/u,
};
var ae = {
  set(e, r) {
    me.isClient && localStorage.setItem(`${y.STORAGE_KEY}${e}`, r);
  },
  get(e) {
    return me.isClient ? localStorage.getItem(`${y.STORAGE_KEY}${e}`) : null;
  },
  delete(e, r) {
    me.isClient &&
      (r
        ? localStorage.removeItem(e)
        : localStorage.removeItem(`${y.STORAGE_KEY}${e}`));
  },
};
var it = 30 * 1e3,
  me = {
    checkIfAllowedToTriggerEmail() {
      let e = ae.get(y.LAST_EMAIL_LOGIN_TIME);
      if (e) {
        let r = Date.now() - Number(e);
        if (r < it) {
          let t = Math.ceil((it - r) / 1e3);
          throw new Error(`Please try again after ${t} seconds`);
        }
      }
    },
    getTimeToNextEmailLogin() {
      let e = ae.get(y.LAST_EMAIL_LOGIN_TIME);
      if (e) {
        let r = Date.now() - Number(e);
        if (r < it) return Math.ceil((it - r) / 1e3);
      }
      return 0;
    },
    checkIfRequestExists(e) {
      return (
        Q.NOT_SAFE_RPC_METHODS.includes(e.method) ||
        Q.SAFE_RPC_METHODS.includes(e.method)
      );
    },
    getResponseType(e) {
      return typeof e == "string" &&
        (e?.match(Ot.transactionHash) || e?.match(Ot.signedMessage))
        ? y.RPC_RESPONSE_TYPE_TX
        : y.RPC_RESPONSE_TYPE_OBJECT;
    },
    checkIfRequestIsSafe(e) {
      return Q.SAFE_RPC_METHODS.includes(e.method);
    },
    isClient: typeof window < "u",
  };
var $;
(function (e) {
  e.assertEqual = (a) => a;
  function r(a) {}
  e.assertIs = r;
  function t(a) {
    throw new Error();
  }
  (e.assertNever = t),
    (e.arrayToEnum = (a) => {
      let s = {};
      for (let o of a) s[o] = o;
      return s;
    }),
    (e.getValidEnumValues = (a) => {
      let s = e.objectKeys(a).filter((c) => typeof a[a[c]] != "number"),
        o = {};
      for (let c of s) o[c] = a[c];
      return e.objectValues(o);
    }),
    (e.objectValues = (a) =>
      e.objectKeys(a).map(function (s) {
        return a[s];
      })),
    (e.objectKeys =
      typeof Object.keys == "function"
        ? (a) => Object.keys(a)
        : (a) => {
            let s = [];
            for (let o in a)
              Object.prototype.hasOwnProperty.call(a, o) && s.push(o);
            return s;
          }),
    (e.find = (a, s) => {
      for (let o of a) if (s(o)) return o;
    }),
    (e.isInteger =
      typeof Number.isInteger == "function"
        ? (a) => Number.isInteger(a)
        : (a) => typeof a == "number" && isFinite(a) && Math.floor(a) === a);
  function n(a, s = " | ") {
    return a.map((o) => (typeof o == "string" ? `'${o}'` : o)).join(s);
  }
  (e.joinValues = n),
    (e.jsonStringifyReplacer = (a, s) =>
      typeof s == "bigint" ? s.toString() : s);
})($ || ($ = {}));
var _r = (function (e) {
    return (e.mergeShapes = (r, t) => l(l({}, r), t)), e;
  })(_r || {}),
  A = $.arrayToEnum([
    "string",
    "nan",
    "number",
    "integer",
    "float",
    "boolean",
    "date",
    "bigint",
    "symbol",
    "function",
    "undefined",
    "null",
    "array",
    "object",
    "unknown",
    "promise",
    "void",
    "never",
    "map",
    "set",
  ]),
  Oe = (e) => {
    switch (typeof e) {
      case "undefined":
        return A.undefined;
      case "string":
        return A.string;
      case "number":
        return isNaN(e) ? A.nan : A.number;
      case "boolean":
        return A.boolean;
      case "function":
        return A.function;
      case "bigint":
        return A.bigint;
      case "symbol":
        return A.symbol;
      case "object":
        return Array.isArray(e)
          ? A.array
          : e === null
          ? A.null
          : e.then &&
            typeof e.then == "function" &&
            e.catch &&
            typeof e.catch == "function"
          ? A.promise
          : typeof Map < "u" && e instanceof Map
          ? A.map
          : typeof Set < "u" && e instanceof Set
          ? A.set
          : typeof Date < "u" && e instanceof Date
          ? A.date
          : A.object;
      default:
        return A.unknown;
    }
  },
  C = $.arrayToEnum([
    "invalid_type",
    "invalid_literal",
    "custom",
    "invalid_union",
    "invalid_union_discriminator",
    "invalid_enum_value",
    "unrecognized_keys",
    "invalid_arguments",
    "invalid_return_type",
    "invalid_date",
    "invalid_string",
    "too_small",
    "too_big",
    "invalid_intersection_types",
    "not_multiple_of",
    "not_finite",
  ]),
  zr = (e) => JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:"),
  Ie = (() => {
    class e extends Error {
      constructor(t) {
        super(),
          (this.issues = []),
          (this.addIssue = (a) => {
            this.issues = [...this.issues, a];
          }),
          (this.addIssues = (a = []) => {
            this.issues = [...this.issues, ...a];
          });
        let n = new.target.prototype;
        Object.setPrototypeOf
          ? Object.setPrototypeOf(this, n)
          : (this.__proto__ = n),
          (this.name = "ZodError"),
          (this.issues = t);
      }
      get errors() {
        return this.issues;
      }
      format(t) {
        let n =
            t ||
            function (o) {
              return o.message;
            },
          a = { _errors: [] },
          s = (o) => {
            for (let c of o.issues)
              if (c.code === "invalid_union") c.unionErrors.map(s);
              else if (c.code === "invalid_return_type") s(c.returnTypeError);
              else if (c.code === "invalid_arguments") s(c.argumentsError);
              else if (c.path.length === 0) a._errors.push(n(c));
              else {
                let d = a,
                  m = 0;
                for (; m < c.path.length; ) {
                  let f = c.path[m];
                  m === c.path.length - 1
                    ? ((d[f] = d[f] || { _errors: [] }),
                      d[f]._errors.push(n(c)))
                    : (d[f] = d[f] || { _errors: [] }),
                    (d = d[f]),
                    m++;
                }
              }
          };
        return s(this), a;
      }
      toString() {
        return this.message;
      }
      get message() {
        return JSON.stringify(this.issues, $.jsonStringifyReplacer, 2);
      }
      get isEmpty() {
        return this.issues.length === 0;
      }
      flatten(t = (n) => n.message) {
        let n = {},
          a = [];
        for (let s of this.issues)
          s.path.length > 0
            ? ((n[s.path[0]] = n[s.path[0]] || []), n[s.path[0]].push(t(s)))
            : a.push(t(s));
        return { formErrors: a, fieldErrors: n };
      }
      get formErrors() {
        return this.flatten();
      }
    }
    return (e.create = (r) => new e(r)), e;
  })(),
  ze = (e, r) => {
    let t;
    switch (e.code) {
      case C.invalid_type:
        e.received === A.undefined
          ? (t = "Required")
          : (t = `Expected ${e.expected}, received ${e.received}`);
        break;
      case C.invalid_literal:
        t = `Invalid literal value, expected ${JSON.stringify(
          e.expected,
          $.jsonStringifyReplacer
        )}`;
        break;
      case C.unrecognized_keys:
        t = `Unrecognized key(s) in object: ${$.joinValues(e.keys, ", ")}`;
        break;
      case C.invalid_union:
        t = "Invalid input";
        break;
      case C.invalid_union_discriminator:
        t = `Invalid discriminator value. Expected ${$.joinValues(e.options)}`;
        break;
      case C.invalid_enum_value:
        t = `Invalid enum value. Expected ${$.joinValues(
          e.options
        )}, received '${e.received}'`;
        break;
      case C.invalid_arguments:
        t = "Invalid function arguments";
        break;
      case C.invalid_return_type:
        t = "Invalid function return type";
        break;
      case C.invalid_date:
        t = "Invalid date";
        break;
      case C.invalid_string:
        typeof e.validation == "object"
          ? "includes" in e.validation
            ? ((t = `Invalid input: must include "${e.validation.includes}"`),
              typeof e.validation.position == "number" &&
                (t = `${t} at one or more positions greater than or equal to ${e.validation.position}`))
            : "startsWith" in e.validation
            ? (t = `Invalid input: must start with "${e.validation.startsWith}"`)
            : "endsWith" in e.validation
            ? (t = `Invalid input: must end with "${e.validation.endsWith}"`)
            : $.assertNever(e.validation)
          : e.validation !== "regex"
          ? (t = `Invalid ${e.validation}`)
          : (t = "Invalid");
        break;
      case C.too_small:
        e.type === "array"
          ? (t = `Array must contain ${
              e.exact ? "exactly" : e.inclusive ? "at least" : "more than"
            } ${e.minimum} element(s)`)
          : e.type === "string"
          ? (t = `String must contain ${
              e.exact ? "exactly" : e.inclusive ? "at least" : "over"
            } ${e.minimum} character(s)`)
          : e.type === "number"
          ? (t = `Number must be ${
              e.exact
                ? "exactly equal to "
                : e.inclusive
                ? "greater than or equal to "
                : "greater than "
            }${e.minimum}`)
          : e.type === "date"
          ? (t = `Date must be ${
              e.exact
                ? "exactly equal to "
                : e.inclusive
                ? "greater than or equal to "
                : "greater than "
            }${new Date(Number(e.minimum))}`)
          : (t = "Invalid input");
        break;
      case C.too_big:
        e.type === "array"
          ? (t = `Array must contain ${
              e.exact ? "exactly" : e.inclusive ? "at most" : "less than"
            } ${e.maximum} element(s)`)
          : e.type === "string"
          ? (t = `String must contain ${
              e.exact ? "exactly" : e.inclusive ? "at most" : "under"
            } ${e.maximum} character(s)`)
          : e.type === "number"
          ? (t = `Number must be ${
              e.exact
                ? "exactly"
                : e.inclusive
                ? "less than or equal to"
                : "less than"
            } ${e.maximum}`)
          : e.type === "bigint"
          ? (t = `BigInt must be ${
              e.exact
                ? "exactly"
                : e.inclusive
                ? "less than or equal to"
                : "less than"
            } ${e.maximum}`)
          : e.type === "date"
          ? (t = `Date must be ${
              e.exact
                ? "exactly"
                : e.inclusive
                ? "smaller than or equal to"
                : "smaller than"
            } ${new Date(Number(e.maximum))}`)
          : (t = "Invalid input");
        break;
      case C.custom:
        t = "Invalid input";
        break;
      case C.invalid_intersection_types:
        t = "Intersection results could not be merged";
        break;
      case C.not_multiple_of:
        t = `Number must be a multiple of ${e.multipleOf}`;
        break;
      case C.not_finite:
        t = "Number must be finite";
        break;
      default:
        (t = r.defaultError), $.assertNever(e);
    }
    return { message: t };
  },
  gr = ze;
function Jr(e) {
  gr = e;
}
function lt() {
  return gr;
}
var dt = (e) => {
    let { data: r, path: t, errorMaps: n, issueData: a } = e,
      s = [...t, ...(a.path || [])],
      o = h(l({}, a), { path: s }),
      c = "",
      d = n
        .filter((m) => !!m)
        .slice()
        .reverse();
    for (let m of d) c = m(o, { data: r, defaultError: c }).message;
    return h(l({}, a), { path: s, message: a.message || c });
  },
  Qr = [];
function N(e, r) {
  let t = dt({
    issueData: r,
    data: e.data,
    path: e.path,
    errorMaps: [e.common.contextualErrorMap, e.schemaErrorMap, lt(), ze].filter(
      (n) => !!n
    ),
  });
  e.common.issues.push(t);
}
var le = class e {
    constructor() {
      this.value = "valid";
    }
    dirty() {
      this.value === "valid" && (this.value = "dirty");
    }
    abort() {
      this.value !== "aborted" && (this.value = "aborted");
    }
    static mergeArray(r, t) {
      let n = [];
      for (let a of t) {
        if (a.status === "aborted") return F;
        a.status === "dirty" && r.dirty(), n.push(a.value);
      }
      return { status: r.value, value: n };
    }
    static mergeObjectAsync(r, t) {
      return u(this, null, function* () {
        let n = [];
        for (let a of t) n.push({ key: yield a.key, value: yield a.value });
        return e.mergeObjectSync(r, n);
      });
    }
    static mergeObjectSync(r, t) {
      let n = {};
      for (let a of t) {
        let { key: s, value: o } = a;
        if (s.status === "aborted" || o.status === "aborted") return F;
        s.status === "dirty" && r.dirty(),
          o.status === "dirty" && r.dirty(),
          s.value !== "__proto__" &&
            (typeof o.value < "u" || a.alwaysSet) &&
            (n[s.value] = o.value);
      }
      return { status: r.value, value: n };
    }
  },
  F = Object.freeze({ status: "aborted" }),
  Er = (e) => ({ status: "dirty", value: e }),
  pe = (e) => ({ status: "valid", value: e }),
  Pt = (e) => e.status === "aborted",
  xt = (e) => e.status === "dirty",
  Je = (e) => e.status === "valid",
  pt = (e) => typeof Promise < "u" && e instanceof Promise,
  P = (function (e) {
    return (
      (e.errToObj = (r) => (typeof r == "string" ? { message: r } : r || {})),
      (e.toString = (r) => (typeof r == "string" ? r : r?.message)),
      e
    );
  })(P || {}),
  Se = class {
    constructor(r, t, n, a) {
      (this._cachedPath = []),
        (this.parent = r),
        (this.data = t),
        (this._path = n),
        (this._key = a);
    }
    get path() {
      return (
        this._cachedPath.length ||
          (this._key instanceof Array
            ? this._cachedPath.push(...this._path, ...this._key)
            : this._cachedPath.push(...this._path, this._key)),
        this._cachedPath
      );
    }
  },
  hr = (e, r) => {
    if (Je(r)) return { success: !0, data: r.value };
    if (!e.common.issues.length)
      throw new Error("Validation failed but no issues detected.");
    return {
      success: !1,
      get error() {
        if (this._error) return this._error;
        let t = new Ie(e.common.issues);
        return (this._error = t), this._error;
      },
    };
  };
function W(e) {
  if (!e) return {};
  let {
    errorMap: r,
    invalid_type_error: t,
    required_error: n,
    description: a,
  } = e;
  if (r && (t || n))
    throw new Error(
      `Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`
    );
  return r
    ? { errorMap: r, description: a }
    : {
        errorMap: (o, c) =>
          o.code !== "invalid_type"
            ? { message: c.defaultError }
            : typeof c.data > "u"
            ? { message: n ?? c.defaultError }
            : { message: t ?? c.defaultError },
        description: a,
      };
}
var j = class {
    constructor(r) {
      (this.spa = this.safeParseAsync),
        (this._def = r),
        (this.parse = this.parse.bind(this)),
        (this.safeParse = this.safeParse.bind(this)),
        (this.parseAsync = this.parseAsync.bind(this)),
        (this.safeParseAsync = this.safeParseAsync.bind(this)),
        (this.spa = this.spa.bind(this)),
        (this.refine = this.refine.bind(this)),
        (this.refinement = this.refinement.bind(this)),
        (this.superRefine = this.superRefine.bind(this)),
        (this.optional = this.optional.bind(this)),
        (this.nullable = this.nullable.bind(this)),
        (this.nullish = this.nullish.bind(this)),
        (this.array = this.array.bind(this)),
        (this.promise = this.promise.bind(this)),
        (this.or = this.or.bind(this)),
        (this.and = this.and.bind(this)),
        (this.transform = this.transform.bind(this)),
        (this.brand = this.brand.bind(this)),
        (this.default = this.default.bind(this)),
        (this.catch = this.catch.bind(this)),
        (this.describe = this.describe.bind(this)),
        (this.pipe = this.pipe.bind(this)),
        (this.readonly = this.readonly.bind(this)),
        (this.isNullable = this.isNullable.bind(this)),
        (this.isOptional = this.isOptional.bind(this));
    }
    get description() {
      return this._def.description;
    }
    _getType(r) {
      return Oe(r.data);
    }
    _getOrReturnCtx(r, t) {
      return (
        t || {
          common: r.parent.common,
          data: r.data,
          parsedType: Oe(r.data),
          schemaErrorMap: this._def.errorMap,
          path: r.path,
          parent: r.parent,
        }
      );
    }
    _processInputParams(r) {
      return {
        status: new le(),
        ctx: {
          common: r.parent.common,
          data: r.data,
          parsedType: Oe(r.data),
          schemaErrorMap: this._def.errorMap,
          path: r.path,
          parent: r.parent,
        },
      };
    }
    _parseSync(r) {
      let t = this._parse(r);
      if (pt(t)) throw new Error("Synchronous parse encountered promise.");
      return t;
    }
    _parseAsync(r) {
      let t = this._parse(r);
      return Promise.resolve(t);
    }
    parse(r, t) {
      let n = this.safeParse(r, t);
      if (n.success) return n.data;
      throw n.error;
    }
    safeParse(r, t) {
      var n;
      let a = {
          common: {
            issues: [],
            async: (n = t?.async) !== null && n !== void 0 ? n : !1,
            contextualErrorMap: t?.errorMap,
          },
          path: t?.path || [],
          schemaErrorMap: this._def.errorMap,
          parent: null,
          data: r,
          parsedType: Oe(r),
        },
        s = this._parseSync({ data: r, path: a.path, parent: a });
      return hr(a, s);
    }
    parseAsync(r, t) {
      return u(this, null, function* () {
        let n = yield this.safeParseAsync(r, t);
        if (n.success) return n.data;
        throw n.error;
      });
    }
    safeParseAsync(r, t) {
      return u(this, null, function* () {
        let n = {
            common: { issues: [], contextualErrorMap: t?.errorMap, async: !0 },
            path: t?.path || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: r,
            parsedType: Oe(r),
          },
          a = this._parse({ data: r, path: n.path, parent: n }),
          s = yield pt(a) ? a : Promise.resolve(a);
        return hr(n, s);
      });
    }
    refine(r, t) {
      let n = (a) =>
        typeof t == "string" || typeof t > "u"
          ? { message: t }
          : typeof t == "function"
          ? t(a)
          : t;
      return this._refinement((a, s) => {
        let o = r(a),
          c = () => s.addIssue(l({ code: C.custom }, n(a)));
        return typeof Promise < "u" && o instanceof Promise
          ? o.then((d) => (d ? !0 : (c(), !1)))
          : o
          ? !0
          : (c(), !1);
      });
    }
    refinement(r, t) {
      return this._refinement((n, a) =>
        r(n) ? !0 : (a.addIssue(typeof t == "function" ? t(n, a) : t), !1)
      );
    }
    _refinement(r) {
      return new Me({
        schema: this,
        typeName: L.ZodEffects,
        effect: { type: "refinement", refinement: r },
      });
    }
    superRefine(r) {
      return this._refinement(r);
    }
    optional() {
      return Le.create(this, this._def);
    }
    nullable() {
      return Xe.create(this, this._def);
    }
    nullish() {
      return this.nullable().optional();
    }
    array() {
      return Qe.create(this, this._def);
    }
    promise() {
      return Et.create(this, this._def);
    }
    or(r) {
      return Ht.create([this, r], this._def);
    }
    and(r) {
      return Vt.create(this, r, this._def);
    }
    transform(r) {
      return new Me(
        h(l({}, W(this._def)), {
          schema: this,
          typeName: L.ZodEffects,
          effect: { type: "transform", transform: r },
        })
      );
    }
    default(r) {
      let t = typeof r == "function" ? r : () => r;
      return new $t(
        h(l({}, W(this._def)), {
          innerType: this,
          defaultValue: t,
          typeName: L.ZodDefault,
        })
      );
    }
    brand() {
      return new Ct(l({ typeName: L.ZodBranded, type: this }, W(this._def)));
    }
    catch(r) {
      let t = typeof r == "function" ? r : () => r;
      return new Tr(
        h(l({}, W(this._def)), {
          innerType: this,
          catchValue: t,
          typeName: L.ZodCatch,
        })
      );
    }
    describe(r) {
      let t = this.constructor;
      return new t(h(l({}, this._def), { description: r }));
    }
    pipe(r) {
      return et.create(this, r);
    }
    readonly() {
      return vr.create(this);
    }
    isOptional() {
      return this.safeParse(void 0).success;
    }
    isNullable() {
      return this.safeParse(null).success;
    }
  },
  Xr = /^c[^\s-]{8,}$/i,
  en = /^[a-z][a-z0-9]*$/,
  tn = /^[0-9A-HJKMNP-TV-Z]{26}$/,
  rn =
    /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
  nn =
    /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,
  an = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$",
  Ut,
  sn =
    /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,
  on =
    /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,
  cn = (e) =>
    e.precision
      ? e.offset
        ? new RegExp(
            `^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`
          )
        : new RegExp(
            `^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}Z$`
          )
      : e.precision === 0
      ? e.offset
        ? new RegExp(
            "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$"
          )
        : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$")
      : e.offset
      ? new RegExp(
          "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$"
        )
      : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");
function ln(e, r) {
  return !!(
    ((r === "v4" || !r) && sn.test(e)) ||
    ((r === "v6" || !r) && on.test(e))
  );
}
var _t = (() => {
  class e extends j {
    _parse(t) {
      if (
        (this._def.coerce && (t.data = String(t.data)),
        this._getType(t) !== A.string)
      ) {
        let o = this._getOrReturnCtx(t);
        return (
          N(o, {
            code: C.invalid_type,
            expected: A.string,
            received: o.parsedType,
          }),
          F
        );
      }
      let a = new le(),
        s;
      for (let o of this._def.checks)
        if (o.kind === "min")
          t.data.length < o.value &&
            ((s = this._getOrReturnCtx(t, s)),
            N(s, {
              code: C.too_small,
              minimum: o.value,
              type: "string",
              inclusive: !0,
              exact: !1,
              message: o.message,
            }),
            a.dirty());
        else if (o.kind === "max")
          t.data.length > o.value &&
            ((s = this._getOrReturnCtx(t, s)),
            N(s, {
              code: C.too_big,
              maximum: o.value,
              type: "string",
              inclusive: !0,
              exact: !1,
              message: o.message,
            }),
            a.dirty());
        else if (o.kind === "length") {
          let c = t.data.length > o.value,
            d = t.data.length < o.value;
          (c || d) &&
            ((s = this._getOrReturnCtx(t, s)),
            c
              ? N(s, {
                  code: C.too_big,
                  maximum: o.value,
                  type: "string",
                  inclusive: !0,
                  exact: !0,
                  message: o.message,
                })
              : d &&
                N(s, {
                  code: C.too_small,
                  minimum: o.value,
                  type: "string",
                  inclusive: !0,
                  exact: !0,
                  message: o.message,
                }),
            a.dirty());
        } else if (o.kind === "email")
          nn.test(t.data) ||
            ((s = this._getOrReturnCtx(t, s)),
            N(s, {
              validation: "email",
              code: C.invalid_string,
              message: o.message,
            }),
            a.dirty());
        else if (o.kind === "emoji")
          Ut || (Ut = new RegExp(an, "u")),
            Ut.test(t.data) ||
              ((s = this._getOrReturnCtx(t, s)),
              N(s, {
                validation: "emoji",
                code: C.invalid_string,
                message: o.message,
              }),
              a.dirty());
        else if (o.kind === "uuid")
          rn.test(t.data) ||
            ((s = this._getOrReturnCtx(t, s)),
            N(s, {
              validation: "uuid",
              code: C.invalid_string,
              message: o.message,
            }),
            a.dirty());
        else if (o.kind === "cuid")
          Xr.test(t.data) ||
            ((s = this._getOrReturnCtx(t, s)),
            N(s, {
              validation: "cuid",
              code: C.invalid_string,
              message: o.message,
            }),
            a.dirty());
        else if (o.kind === "cuid2")
          en.test(t.data) ||
            ((s = this._getOrReturnCtx(t, s)),
            N(s, {
              validation: "cuid2",
              code: C.invalid_string,
              message: o.message,
            }),
            a.dirty());
        else if (o.kind === "ulid")
          tn.test(t.data) ||
            ((s = this._getOrReturnCtx(t, s)),
            N(s, {
              validation: "ulid",
              code: C.invalid_string,
              message: o.message,
            }),
            a.dirty());
        else if (o.kind === "url")
          try {
            new URL(t.data);
          } catch {
            (s = this._getOrReturnCtx(t, s)),
              N(s, {
                validation: "url",
                code: C.invalid_string,
                message: o.message,
              }),
              a.dirty();
          }
        else
          o.kind === "regex"
            ? ((o.regex.lastIndex = 0),
              o.regex.test(t.data) ||
                ((s = this._getOrReturnCtx(t, s)),
                N(s, {
                  validation: "regex",
                  code: C.invalid_string,
                  message: o.message,
                }),
                a.dirty()))
            : o.kind === "trim"
            ? (t.data = t.data.trim())
            : o.kind === "includes"
            ? t.data.includes(o.value, o.position) ||
              ((s = this._getOrReturnCtx(t, s)),
              N(s, {
                code: C.invalid_string,
                validation: { includes: o.value, position: o.position },
                message: o.message,
              }),
              a.dirty())
            : o.kind === "toLowerCase"
            ? (t.data = t.data.toLowerCase())
            : o.kind === "toUpperCase"
            ? (t.data = t.data.toUpperCase())
            : o.kind === "startsWith"
            ? t.data.startsWith(o.value) ||
              ((s = this._getOrReturnCtx(t, s)),
              N(s, {
                code: C.invalid_string,
                validation: { startsWith: o.value },
                message: o.message,
              }),
              a.dirty())
            : o.kind === "endsWith"
            ? t.data.endsWith(o.value) ||
              ((s = this._getOrReturnCtx(t, s)),
              N(s, {
                code: C.invalid_string,
                validation: { endsWith: o.value },
                message: o.message,
              }),
              a.dirty())
            : o.kind === "datetime"
            ? cn(o).test(t.data) ||
              ((s = this._getOrReturnCtx(t, s)),
              N(s, {
                code: C.invalid_string,
                validation: "datetime",
                message: o.message,
              }),
              a.dirty())
            : o.kind === "ip"
            ? ln(t.data, o.version) ||
              ((s = this._getOrReturnCtx(t, s)),
              N(s, {
                validation: "ip",
                code: C.invalid_string,
                message: o.message,
              }),
              a.dirty())
            : $.assertNever(o);
      return { status: a.value, value: t.data };
    }
    _regex(t, n, a) {
      return this.refinement(
        (s) => t.test(s),
        l({ validation: n, code: C.invalid_string }, P.errToObj(a))
      );
    }
    _addCheck(t) {
      return new e(h(l({}, this._def), { checks: [...this._def.checks, t] }));
    }
    email(t) {
      return this._addCheck(l({ kind: "email" }, P.errToObj(t)));
    }
    url(t) {
      return this._addCheck(l({ kind: "url" }, P.errToObj(t)));
    }
    emoji(t) {
      return this._addCheck(l({ kind: "emoji" }, P.errToObj(t)));
    }
    uuid(t) {
      return this._addCheck(l({ kind: "uuid" }, P.errToObj(t)));
    }
    cuid(t) {
      return this._addCheck(l({ kind: "cuid" }, P.errToObj(t)));
    }
    cuid2(t) {
      return this._addCheck(l({ kind: "cuid2" }, P.errToObj(t)));
    }
    ulid(t) {
      return this._addCheck(l({ kind: "ulid" }, P.errToObj(t)));
    }
    ip(t) {
      return this._addCheck(l({ kind: "ip" }, P.errToObj(t)));
    }
    datetime(t) {
      var n;
      return typeof t == "string"
        ? this._addCheck({
            kind: "datetime",
            precision: null,
            offset: !1,
            message: t,
          })
        : this._addCheck(
            l(
              {
                kind: "datetime",
                precision: typeof t?.precision > "u" ? null : t?.precision,
                offset: (n = t?.offset) !== null && n !== void 0 ? n : !1,
              },
              P.errToObj(t?.message)
            )
          );
    }
    regex(t, n) {
      return this._addCheck(l({ kind: "regex", regex: t }, P.errToObj(n)));
    }
    includes(t, n) {
      return this._addCheck(
        l(
          { kind: "includes", value: t, position: n?.position },
          P.errToObj(n?.message)
        )
      );
    }
    startsWith(t, n) {
      return this._addCheck(l({ kind: "startsWith", value: t }, P.errToObj(n)));
    }
    endsWith(t, n) {
      return this._addCheck(l({ kind: "endsWith", value: t }, P.errToObj(n)));
    }
    min(t, n) {
      return this._addCheck(l({ kind: "min", value: t }, P.errToObj(n)));
    }
    max(t, n) {
      return this._addCheck(l({ kind: "max", value: t }, P.errToObj(n)));
    }
    length(t, n) {
      return this._addCheck(l({ kind: "length", value: t }, P.errToObj(n)));
    }
    nonempty(t) {
      return this.min(1, P.errToObj(t));
    }
    trim() {
      return new e(
        h(l({}, this._def), { checks: [...this._def.checks, { kind: "trim" }] })
      );
    }
    toLowerCase() {
      return new e(
        h(l({}, this._def), {
          checks: [...this._def.checks, { kind: "toLowerCase" }],
        })
      );
    }
    toUpperCase() {
      return new e(
        h(l({}, this._def), {
          checks: [...this._def.checks, { kind: "toUpperCase" }],
        })
      );
    }
    get isDatetime() {
      return !!this._def.checks.find((t) => t.kind === "datetime");
    }
    get isEmail() {
      return !!this._def.checks.find((t) => t.kind === "email");
    }
    get isURL() {
      return !!this._def.checks.find((t) => t.kind === "url");
    }
    get isEmoji() {
      return !!this._def.checks.find((t) => t.kind === "emoji");
    }
    get isUUID() {
      return !!this._def.checks.find((t) => t.kind === "uuid");
    }
    get isCUID() {
      return !!this._def.checks.find((t) => t.kind === "cuid");
    }
    get isCUID2() {
      return !!this._def.checks.find((t) => t.kind === "cuid2");
    }
    get isULID() {
      return !!this._def.checks.find((t) => t.kind === "ulid");
    }
    get isIP() {
      return !!this._def.checks.find((t) => t.kind === "ip");
    }
    get minLength() {
      let t = null;
      for (let n of this._def.checks)
        n.kind === "min" && (t === null || n.value > t) && (t = n.value);
      return t;
    }
    get maxLength() {
      let t = null;
      for (let n of this._def.checks)
        n.kind === "max" && (t === null || n.value < t) && (t = n.value);
      return t;
    }
  }
  return (
    (e.create = (r) => {
      var t;
      return new e(
        l(
          {
            checks: [],
            typeName: L.ZodString,
            coerce: (t = r?.coerce) !== null && t !== void 0 ? t : !1,
          },
          W(r)
        )
      );
    }),
    e
  );
})();
function dn(e, r) {
  let t = (e.toString().split(".")[1] || "").length,
    n = (r.toString().split(".")[1] || "").length,
    a = t > n ? t : n,
    s = parseInt(e.toFixed(a).replace(".", "")),
    o = parseInt(r.toFixed(a).replace(".", ""));
  return (s % o) / Math.pow(10, a);
}
var Mt = (() => {
    class e extends j {
      constructor() {
        super(...arguments),
          (this.min = this.gte),
          (this.max = this.lte),
          (this.step = this.multipleOf);
      }
      _parse(t) {
        if (
          (this._def.coerce && (t.data = Number(t.data)),
          this._getType(t) !== A.number)
        ) {
          let o = this._getOrReturnCtx(t);
          return (
            N(o, {
              code: C.invalid_type,
              expected: A.number,
              received: o.parsedType,
            }),
            F
          );
        }
        let a,
          s = new le();
        for (let o of this._def.checks)
          o.kind === "int"
            ? $.isInteger(t.data) ||
              ((a = this._getOrReturnCtx(t, a)),
              N(a, {
                code: C.invalid_type,
                expected: "integer",
                received: "float",
                message: o.message,
              }),
              s.dirty())
            : o.kind === "min"
            ? (o.inclusive ? t.data < o.value : t.data <= o.value) &&
              ((a = this._getOrReturnCtx(t, a)),
              N(a, {
                code: C.too_small,
                minimum: o.value,
                type: "number",
                inclusive: o.inclusive,
                exact: !1,
                message: o.message,
              }),
              s.dirty())
            : o.kind === "max"
            ? (o.inclusive ? t.data > o.value : t.data >= o.value) &&
              ((a = this._getOrReturnCtx(t, a)),
              N(a, {
                code: C.too_big,
                maximum: o.value,
                type: "number",
                inclusive: o.inclusive,
                exact: !1,
                message: o.message,
              }),
              s.dirty())
            : o.kind === "multipleOf"
            ? dn(t.data, o.value) !== 0 &&
              ((a = this._getOrReturnCtx(t, a)),
              N(a, {
                code: C.not_multiple_of,
                multipleOf: o.value,
                message: o.message,
              }),
              s.dirty())
            : o.kind === "finite"
            ? Number.isFinite(t.data) ||
              ((a = this._getOrReturnCtx(t, a)),
              N(a, { code: C.not_finite, message: o.message }),
              s.dirty())
            : $.assertNever(o);
        return { status: s.value, value: t.data };
      }
      gte(t, n) {
        return this.setLimit("min", t, !0, P.toString(n));
      }
      gt(t, n) {
        return this.setLimit("min", t, !1, P.toString(n));
      }
      lte(t, n) {
        return this.setLimit("max", t, !0, P.toString(n));
      }
      lt(t, n) {
        return this.setLimit("max", t, !1, P.toString(n));
      }
      setLimit(t, n, a, s) {
        return new e(
          h(l({}, this._def), {
            checks: [
              ...this._def.checks,
              { kind: t, value: n, inclusive: a, message: P.toString(s) },
            ],
          })
        );
      }
      _addCheck(t) {
        return new e(h(l({}, this._def), { checks: [...this._def.checks, t] }));
      }
      int(t) {
        return this._addCheck({ kind: "int", message: P.toString(t) });
      }
      positive(t) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: !1,
          message: P.toString(t),
        });
      }
      negative(t) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: !1,
          message: P.toString(t),
        });
      }
      nonpositive(t) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: !0,
          message: P.toString(t),
        });
      }
      nonnegative(t) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: !0,
          message: P.toString(t),
        });
      }
      multipleOf(t, n) {
        return this._addCheck({
          kind: "multipleOf",
          value: t,
          message: P.toString(n),
        });
      }
      finite(t) {
        return this._addCheck({ kind: "finite", message: P.toString(t) });
      }
      safe(t) {
        return this._addCheck({
          kind: "min",
          inclusive: !0,
          value: Number.MIN_SAFE_INTEGER,
          message: P.toString(t),
        })._addCheck({
          kind: "max",
          inclusive: !0,
          value: Number.MAX_SAFE_INTEGER,
          message: P.toString(t),
        });
      }
      get minValue() {
        let t = null;
        for (let n of this._def.checks)
          n.kind === "min" && (t === null || n.value > t) && (t = n.value);
        return t;
      }
      get maxValue() {
        let t = null;
        for (let n of this._def.checks)
          n.kind === "max" && (t === null || n.value < t) && (t = n.value);
        return t;
      }
      get isInt() {
        return !!this._def.checks.find(
          (t) =>
            t.kind === "int" ||
            (t.kind === "multipleOf" && $.isInteger(t.value))
        );
      }
      get isFinite() {
        let t = null,
          n = null;
        for (let a of this._def.checks) {
          if (
            a.kind === "finite" ||
            a.kind === "int" ||
            a.kind === "multipleOf"
          )
            return !0;
          a.kind === "min"
            ? (n === null || a.value > n) && (n = a.value)
            : a.kind === "max" && (t === null || a.value < t) && (t = a.value);
        }
        return Number.isFinite(n) && Number.isFinite(t);
      }
    }
    return (
      (e.create = (r) =>
        new e(
          l(
            { checks: [], typeName: L.ZodNumber, coerce: r?.coerce || !1 },
            W(r)
          )
        )),
      e
    );
  })(),
  Dt = (() => {
    class e extends j {
      constructor() {
        super(...arguments), (this.min = this.gte), (this.max = this.lte);
      }
      _parse(t) {
        if (
          (this._def.coerce && (t.data = BigInt(t.data)),
          this._getType(t) !== A.bigint)
        ) {
          let o = this._getOrReturnCtx(t);
          return (
            N(o, {
              code: C.invalid_type,
              expected: A.bigint,
              received: o.parsedType,
            }),
            F
          );
        }
        let a,
          s = new le();
        for (let o of this._def.checks)
          o.kind === "min"
            ? (o.inclusive ? t.data < o.value : t.data <= o.value) &&
              ((a = this._getOrReturnCtx(t, a)),
              N(a, {
                code: C.too_small,
                type: "bigint",
                minimum: o.value,
                inclusive: o.inclusive,
                message: o.message,
              }),
              s.dirty())
            : o.kind === "max"
            ? (o.inclusive ? t.data > o.value : t.data >= o.value) &&
              ((a = this._getOrReturnCtx(t, a)),
              N(a, {
                code: C.too_big,
                type: "bigint",
                maximum: o.value,
                inclusive: o.inclusive,
                message: o.message,
              }),
              s.dirty())
            : o.kind === "multipleOf"
            ? t.data % o.value !== BigInt(0) &&
              ((a = this._getOrReturnCtx(t, a)),
              N(a, {
                code: C.not_multiple_of,
                multipleOf: o.value,
                message: o.message,
              }),
              s.dirty())
            : $.assertNever(o);
        return { status: s.value, value: t.data };
      }
      gte(t, n) {
        return this.setLimit("min", t, !0, P.toString(n));
      }
      gt(t, n) {
        return this.setLimit("min", t, !1, P.toString(n));
      }
      lte(t, n) {
        return this.setLimit("max", t, !0, P.toString(n));
      }
      lt(t, n) {
        return this.setLimit("max", t, !1, P.toString(n));
      }
      setLimit(t, n, a, s) {
        return new e(
          h(l({}, this._def), {
            checks: [
              ...this._def.checks,
              { kind: t, value: n, inclusive: a, message: P.toString(s) },
            ],
          })
        );
      }
      _addCheck(t) {
        return new e(h(l({}, this._def), { checks: [...this._def.checks, t] }));
      }
      positive(t) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: !1,
          message: P.toString(t),
        });
      }
      negative(t) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: !1,
          message: P.toString(t),
        });
      }
      nonpositive(t) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: !0,
          message: P.toString(t),
        });
      }
      nonnegative(t) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: !0,
          message: P.toString(t),
        });
      }
      multipleOf(t, n) {
        return this._addCheck({
          kind: "multipleOf",
          value: t,
          message: P.toString(n),
        });
      }
      get minValue() {
        let t = null;
        for (let n of this._def.checks)
          n.kind === "min" && (t === null || n.value > t) && (t = n.value);
        return t;
      }
      get maxValue() {
        let t = null;
        for (let n of this._def.checks)
          n.kind === "max" && (t === null || n.value < t) && (t = n.value);
        return t;
      }
    }
    return (
      (e.create = (r) => {
        var t;
        return new e(
          l(
            {
              checks: [],
              typeName: L.ZodBigInt,
              coerce: (t = r?.coerce) !== null && t !== void 0 ? t : !1,
            },
            W(r)
          )
        );
      }),
      e
    );
  })(),
  Ft = (() => {
    class e extends j {
      _parse(t) {
        if (
          (this._def.coerce && (t.data = !!t.data),
          this._getType(t) !== A.boolean)
        ) {
          let a = this._getOrReturnCtx(t);
          return (
            N(a, {
              code: C.invalid_type,
              expected: A.boolean,
              received: a.parsedType,
            }),
            F
          );
        }
        return pe(t.data);
      }
    }
    return (
      (e.create = (r) =>
        new e(l({ typeName: L.ZodBoolean, coerce: r?.coerce || !1 }, W(r)))),
      e
    );
  })(),
  Bt = (() => {
    class e extends j {
      _parse(t) {
        if (
          (this._def.coerce && (t.data = new Date(t.data)),
          this._getType(t) !== A.date)
        ) {
          let o = this._getOrReturnCtx(t);
          return (
            N(o, {
              code: C.invalid_type,
              expected: A.date,
              received: o.parsedType,
            }),
            F
          );
        }
        if (isNaN(t.data.getTime())) {
          let o = this._getOrReturnCtx(t);
          return N(o, { code: C.invalid_date }), F;
        }
        let a = new le(),
          s;
        for (let o of this._def.checks)
          o.kind === "min"
            ? t.data.getTime() < o.value &&
              ((s = this._getOrReturnCtx(t, s)),
              N(s, {
                code: C.too_small,
                message: o.message,
                inclusive: !0,
                exact: !1,
                minimum: o.value,
                type: "date",
              }),
              a.dirty())
            : o.kind === "max"
            ? t.data.getTime() > o.value &&
              ((s = this._getOrReturnCtx(t, s)),
              N(s, {
                code: C.too_big,
                message: o.message,
                inclusive: !0,
                exact: !1,
                maximum: o.value,
                type: "date",
              }),
              a.dirty())
            : $.assertNever(o);
        return { status: a.value, value: new Date(t.data.getTime()) };
      }
      _addCheck(t) {
        return new e(h(l({}, this._def), { checks: [...this._def.checks, t] }));
      }
      min(t, n) {
        return this._addCheck({
          kind: "min",
          value: t.getTime(),
          message: P.toString(n),
        });
      }
      max(t, n) {
        return this._addCheck({
          kind: "max",
          value: t.getTime(),
          message: P.toString(n),
        });
      }
      get minDate() {
        let t = null;
        for (let n of this._def.checks)
          n.kind === "min" && (t === null || n.value > t) && (t = n.value);
        return t != null ? new Date(t) : null;
      }
      get maxDate() {
        let t = null;
        for (let n of this._def.checks)
          n.kind === "max" && (t === null || n.value < t) && (t = n.value);
        return t != null ? new Date(t) : null;
      }
    }
    return (
      (e.create = (r) =>
        new e(
          l({ checks: [], coerce: r?.coerce || !1, typeName: L.ZodDate }, W(r))
        )),
      e
    );
  })(),
  yr = (() => {
    class e extends j {
      _parse(t) {
        if (this._getType(t) !== A.symbol) {
          let a = this._getOrReturnCtx(t);
          return (
            N(a, {
              code: C.invalid_type,
              expected: A.symbol,
              received: a.parsedType,
            }),
            F
          );
        }
        return pe(t.data);
      }
    }
    return (e.create = (r) => new e(l({ typeName: L.ZodSymbol }, W(r)))), e;
  })(),
  Wt = (() => {
    class e extends j {
      _parse(t) {
        if (this._getType(t) !== A.undefined) {
          let a = this._getOrReturnCtx(t);
          return (
            N(a, {
              code: C.invalid_type,
              expected: A.undefined,
              received: a.parsedType,
            }),
            F
          );
        }
        return pe(t.data);
      }
    }
    return (e.create = (r) => new e(l({ typeName: L.ZodUndefined }, W(r)))), e;
  })(),
  jt = (() => {
    class e extends j {
      _parse(t) {
        if (this._getType(t) !== A.null) {
          let a = this._getOrReturnCtx(t);
          return (
            N(a, {
              code: C.invalid_type,
              expected: A.null,
              received: a.parsedType,
            }),
            F
          );
        }
        return pe(t.data);
      }
    }
    return (e.create = (r) => new e(l({ typeName: L.ZodNull }, W(r)))), e;
  })(),
  ut = (() => {
    class e extends j {
      constructor() {
        super(...arguments), (this._any = !0);
      }
      _parse(t) {
        return pe(t.data);
      }
    }
    return (e.create = (r) => new e(l({ typeName: L.ZodAny }, W(r)))), e;
  })(),
  qe = (() => {
    class e extends j {
      constructor() {
        super(...arguments), (this._unknown = !0);
      }
      _parse(t) {
        return pe(t.data);
      }
    }
    return (e.create = (r) => new e(l({ typeName: L.ZodUnknown }, W(r)))), e;
  })(),
  xe = (() => {
    class e extends j {
      _parse(t) {
        let n = this._getOrReturnCtx(t);
        return (
          N(n, {
            code: C.invalid_type,
            expected: A.never,
            received: n.parsedType,
          }),
          F
        );
      }
    }
    return (e.create = (r) => new e(l({ typeName: L.ZodNever }, W(r)))), e;
  })(),
  Ar = (() => {
    class e extends j {
      _parse(t) {
        if (this._getType(t) !== A.undefined) {
          let a = this._getOrReturnCtx(t);
          return (
            N(a, {
              code: C.invalid_type,
              expected: A.void,
              received: a.parsedType,
            }),
            F
          );
        }
        return pe(t.data);
      }
    }
    return (e.create = (r) => new e(l({ typeName: L.ZodVoid }, W(r)))), e;
  })(),
  Qe = (() => {
    class e extends j {
      _parse(t) {
        let { ctx: n, status: a } = this._processInputParams(t),
          s = this._def;
        if (n.parsedType !== A.array)
          return (
            N(n, {
              code: C.invalid_type,
              expected: A.array,
              received: n.parsedType,
            }),
            F
          );
        if (s.exactLength !== null) {
          let c = n.data.length > s.exactLength.value,
            d = n.data.length < s.exactLength.value;
          (c || d) &&
            (N(n, {
              code: c ? C.too_big : C.too_small,
              minimum: d ? s.exactLength.value : void 0,
              maximum: c ? s.exactLength.value : void 0,
              type: "array",
              inclusive: !0,
              exact: !0,
              message: s.exactLength.message,
            }),
            a.dirty());
        }
        if (
          (s.minLength !== null &&
            n.data.length < s.minLength.value &&
            (N(n, {
              code: C.too_small,
              minimum: s.minLength.value,
              type: "array",
              inclusive: !0,
              exact: !1,
              message: s.minLength.message,
            }),
            a.dirty()),
          s.maxLength !== null &&
            n.data.length > s.maxLength.value &&
            (N(n, {
              code: C.too_big,
              maximum: s.maxLength.value,
              type: "array",
              inclusive: !0,
              exact: !1,
              message: s.maxLength.message,
            }),
            a.dirty()),
          n.common.async)
        )
          return Promise.all(
            [...n.data].map((c, d) =>
              s.type._parseAsync(new Se(n, c, n.path, d))
            )
          ).then((c) => le.mergeArray(a, c));
        let o = [...n.data].map((c, d) =>
          s.type._parseSync(new Se(n, c, n.path, d))
        );
        return le.mergeArray(a, o);
      }
      get element() {
        return this._def.type;
      }
      min(t, n) {
        return new e(
          h(l({}, this._def), {
            minLength: { value: t, message: P.toString(n) },
          })
        );
      }
      max(t, n) {
        return new e(
          h(l({}, this._def), {
            maxLength: { value: t, message: P.toString(n) },
          })
        );
      }
      length(t, n) {
        return new e(
          h(l({}, this._def), {
            exactLength: { value: t, message: P.toString(n) },
          })
        );
      }
      nonempty(t) {
        return this.min(1, t);
      }
    }
    return (
      (e.create = (r, t) =>
        new e(
          l(
            {
              type: r,
              minLength: null,
              maxLength: null,
              exactLength: null,
              typeName: L.ZodArray,
            },
            W(t)
          )
        )),
      e
    );
  })();
function He(e) {
  if (e instanceof Ve) {
    let r = {};
    for (let t in e.shape) {
      let n = e.shape[t];
      r[t] = Le.create(He(n));
    }
    return new Ve(h(l({}, e._def), { shape: () => r }));
  } else
    return e instanceof Qe
      ? new Qe(h(l({}, e._def), { type: He(e.element) }))
      : e instanceof Le
      ? Le.create(He(e.unwrap()))
      : e instanceof Xe
      ? Xe.create(He(e.unwrap()))
      : e instanceof Ge
      ? Ge.create(e.items.map((r) => He(r)))
      : e;
}
var Ve = (() => {
    class e extends j {
      constructor() {
        super(...arguments),
          (this._cached = null),
          (this.nonstrict = this.passthrough),
          (this.augment = this.extend);
      }
      _getCached() {
        if (this._cached !== null) return this._cached;
        let t = this._def.shape(),
          n = $.objectKeys(t);
        return (this._cached = { shape: t, keys: n });
      }
      _parse(t) {
        if (this._getType(t) !== A.object) {
          let f = this._getOrReturnCtx(t);
          return (
            N(f, {
              code: C.invalid_type,
              expected: A.object,
              received: f.parsedType,
            }),
            F
          );
        }
        let { status: a, ctx: s } = this._processInputParams(t),
          { shape: o, keys: c } = this._getCached(),
          d = [];
        if (
          !(
            this._def.catchall instanceof xe &&
            this._def.unknownKeys === "strip"
          )
        )
          for (let f in s.data) c.includes(f) || d.push(f);
        let m = [];
        for (let f of c) {
          let g = o[f],
            Z = s.data[f];
          m.push({
            key: { status: "valid", value: f },
            value: g._parse(new Se(s, Z, s.path, f)),
            alwaysSet: f in s.data,
          });
        }
        if (this._def.catchall instanceof xe) {
          let f = this._def.unknownKeys;
          if (f === "passthrough")
            for (let g of d)
              m.push({
                key: { status: "valid", value: g },
                value: { status: "valid", value: s.data[g] },
              });
          else if (f === "strict")
            d.length > 0 &&
              (N(s, { code: C.unrecognized_keys, keys: d }), a.dirty());
          else if (f !== "strip")
            throw new Error(
              "Internal ZodObject error: invalid unknownKeys value."
            );
        } else {
          let f = this._def.catchall;
          for (let g of d) {
            let Z = s.data[g];
            m.push({
              key: { status: "valid", value: g },
              value: f._parse(new Se(s, Z, s.path, g)),
              alwaysSet: g in s.data,
            });
          }
        }
        return s.common.async
          ? Promise.resolve()
              .then(() =>
                u(this, null, function* () {
                  let f = [];
                  for (let g of m) {
                    let Z = yield g.key;
                    f.push({
                      key: Z,
                      value: yield g.value,
                      alwaysSet: g.alwaysSet,
                    });
                  }
                  return f;
                })
              )
              .then((f) => le.mergeObjectSync(a, f))
          : le.mergeObjectSync(a, m);
      }
      get shape() {
        return this._def.shape();
      }
      strict(t) {
        return (
          P.errToObj,
          new e(
            l(
              h(l({}, this._def), { unknownKeys: "strict" }),
              t !== void 0
                ? {
                    errorMap: (n, a) => {
                      var s, o, c, d;
                      let m =
                        (c =
                          (o = (s = this._def).errorMap) === null ||
                          o === void 0
                            ? void 0
                            : o.call(s, n, a).message) !== null && c !== void 0
                          ? c
                          : a.defaultError;
                      return n.code === "unrecognized_keys"
                        ? {
                            message:
                              (d = P.errToObj(t).message) !== null &&
                              d !== void 0
                                ? d
                                : m,
                          }
                        : { message: m };
                    },
                  }
                : {}
            )
          )
        );
      }
      strip() {
        return new e(h(l({}, this._def), { unknownKeys: "strip" }));
      }
      passthrough() {
        return new e(h(l({}, this._def), { unknownKeys: "passthrough" }));
      }
      extend(t) {
        return new e(
          h(l({}, this._def), { shape: () => l(l({}, this._def.shape()), t) })
        );
      }
      merge(t) {
        return new e({
          unknownKeys: t._def.unknownKeys,
          catchall: t._def.catchall,
          shape: () => l(l({}, this._def.shape()), t._def.shape()),
          typeName: L.ZodObject,
        });
      }
      setKey(t, n) {
        return this.augment({ [t]: n });
      }
      catchall(t) {
        return new e(h(l({}, this._def), { catchall: t }));
      }
      pick(t) {
        let n = {};
        return (
          $.objectKeys(t).forEach((a) => {
            t[a] && this.shape[a] && (n[a] = this.shape[a]);
          }),
          new e(h(l({}, this._def), { shape: () => n }))
        );
      }
      omit(t) {
        let n = {};
        return (
          $.objectKeys(this.shape).forEach((a) => {
            t[a] || (n[a] = this.shape[a]);
          }),
          new e(h(l({}, this._def), { shape: () => n }))
        );
      }
      deepPartial() {
        return He(this);
      }
      partial(t) {
        let n = {};
        return (
          $.objectKeys(this.shape).forEach((a) => {
            let s = this.shape[a];
            t && !t[a] ? (n[a] = s) : (n[a] = s.optional());
          }),
          new e(h(l({}, this._def), { shape: () => n }))
        );
      }
      required(t) {
        let n = {};
        return (
          $.objectKeys(this.shape).forEach((a) => {
            if (t && !t[a]) n[a] = this.shape[a];
            else {
              let o = this.shape[a];
              for (; o instanceof Le; ) o = o._def.innerType;
              n[a] = o;
            }
          }),
          new e(h(l({}, this._def), { shape: () => n }))
        );
      }
      keyof() {
        return Nr($.objectKeys(this.shape));
      }
    }
    return (
      (e.create = (r, t) =>
        new e(
          l(
            {
              shape: () => r,
              unknownKeys: "strip",
              catchall: xe.create(),
              typeName: L.ZodObject,
            },
            W(t)
          )
        )),
      (e.strictCreate = (r, t) =>
        new e(
          l(
            {
              shape: () => r,
              unknownKeys: "strict",
              catchall: xe.create(),
              typeName: L.ZodObject,
            },
            W(t)
          )
        )),
      (e.lazycreate = (r, t) =>
        new e(
          l(
            {
              shape: r,
              unknownKeys: "strip",
              catchall: xe.create(),
              typeName: L.ZodObject,
            },
            W(t)
          )
        )),
      e
    );
  })(),
  Ht = (() => {
    class e extends j {
      _parse(t) {
        let { ctx: n } = this._processInputParams(t),
          a = this._def.options;
        function s(o) {
          for (let d of o) if (d.result.status === "valid") return d.result;
          for (let d of o)
            if (d.result.status === "dirty")
              return n.common.issues.push(...d.ctx.common.issues), d.result;
          let c = o.map((d) => new Ie(d.ctx.common.issues));
          return N(n, { code: C.invalid_union, unionErrors: c }), F;
        }
        if (n.common.async)
          return Promise.all(
            a.map((o) =>
              u(this, null, function* () {
                let c = h(l({}, n), {
                  common: h(l({}, n.common), { issues: [] }),
                  parent: null,
                });
                return {
                  result: yield o._parseAsync({
                    data: n.data,
                    path: n.path,
                    parent: c,
                  }),
                  ctx: c,
                };
              })
            )
          ).then(s);
        {
          let o,
            c = [];
          for (let m of a) {
            let f = h(l({}, n), {
                common: h(l({}, n.common), { issues: [] }),
                parent: null,
              }),
              g = m._parseSync({ data: n.data, path: n.path, parent: f });
            if (g.status === "valid") return g;
            g.status === "dirty" && !o && (o = { result: g, ctx: f }),
              f.common.issues.length && c.push(f.common.issues);
          }
          if (o) return n.common.issues.push(...o.ctx.common.issues), o.result;
          let d = c.map((m) => new Ie(m));
          return N(n, { code: C.invalid_union, unionErrors: d }), F;
        }
      }
      get options() {
        return this._def.options;
      }
    }
    return (
      (e.create = (r, t) =>
        new e(l({ options: r, typeName: L.ZodUnion }, W(t)))),
      e
    );
  })(),
  ct = (e) =>
    e instanceof Gt
      ? ct(e.schema)
      : e instanceof Me
      ? ct(e.innerType())
      : e instanceof Zt
      ? [e.value]
      : e instanceof gt
      ? e.options
      : e instanceof Kt
      ? Object.keys(e.enum)
      : e instanceof $t
      ? ct(e._def.innerType)
      : e instanceof Wt
      ? [void 0]
      : e instanceof jt
      ? [null]
      : null,
  mt = class e extends j {
    _parse(r) {
      let { ctx: t } = this._processInputParams(r);
      if (t.parsedType !== A.object)
        return (
          N(t, {
            code: C.invalid_type,
            expected: A.object,
            received: t.parsedType,
          }),
          F
        );
      let n = this.discriminator,
        a = t.data[n],
        s = this.optionsMap.get(a);
      return s
        ? t.common.async
          ? s._parseAsync({ data: t.data, path: t.path, parent: t })
          : s._parseSync({ data: t.data, path: t.path, parent: t })
        : (N(t, {
            code: C.invalid_union_discriminator,
            options: Array.from(this.optionsMap.keys()),
            path: [n],
          }),
          F);
    }
    get discriminator() {
      return this._def.discriminator;
    }
    get options() {
      return this._def.options;
    }
    get optionsMap() {
      return this._def.optionsMap;
    }
    static create(r, t, n) {
      let a = new Map();
      for (let s of t) {
        let o = ct(s.shape[r]);
        if (!o)
          throw new Error(
            `A discriminator value for key \`${r}\` could not be extracted from all schema options`
          );
        for (let c of o) {
          if (a.has(c))
            throw new Error(
              `Discriminator property ${String(r)} has duplicate value ${String(
                c
              )}`
            );
          a.set(c, s);
        }
      }
      return new e(
        l(
          {
            typeName: L.ZodDiscriminatedUnion,
            discriminator: r,
            options: t,
            optionsMap: a,
          },
          W(n)
        )
      );
    }
  };
function Lt(e, r) {
  let t = Oe(e),
    n = Oe(r);
  if (e === r) return { valid: !0, data: e };
  if (t === A.object && n === A.object) {
    let a = $.objectKeys(r),
      s = $.objectKeys(e).filter((c) => a.indexOf(c) !== -1),
      o = l(l({}, e), r);
    for (let c of s) {
      let d = Lt(e[c], r[c]);
      if (!d.valid) return { valid: !1 };
      o[c] = d.data;
    }
    return { valid: !0, data: o };
  } else if (t === A.array && n === A.array) {
    if (e.length !== r.length) return { valid: !1 };
    let a = [];
    for (let s = 0; s < e.length; s++) {
      let o = e[s],
        c = r[s],
        d = Lt(o, c);
      if (!d.valid) return { valid: !1 };
      a.push(d.data);
    }
    return { valid: !0, data: a };
  } else
    return t === A.date && n === A.date && +e == +r
      ? { valid: !0, data: e }
      : { valid: !1 };
}
var Vt = (() => {
    class e extends j {
      _parse(t) {
        let { status: n, ctx: a } = this._processInputParams(t),
          s = (o, c) => {
            if (Pt(o) || Pt(c)) return F;
            let d = Lt(o.value, c.value);
            return d.valid
              ? ((xt(o) || xt(c)) && n.dirty(),
                { status: n.value, value: d.data })
              : (N(a, { code: C.invalid_intersection_types }), F);
          };
        return a.common.async
          ? Promise.all([
              this._def.left._parseAsync({
                data: a.data,
                path: a.path,
                parent: a,
              }),
              this._def.right._parseAsync({
                data: a.data,
                path: a.path,
                parent: a,
              }),
            ]).then(([o, c]) => s(o, c))
          : s(
              this._def.left._parseSync({
                data: a.data,
                path: a.path,
                parent: a,
              }),
              this._def.right._parseSync({
                data: a.data,
                path: a.path,
                parent: a,
              })
            );
      }
    }
    return (
      (e.create = (r, t, n) =>
        new e(l({ left: r, right: t, typeName: L.ZodIntersection }, W(n)))),
      e
    );
  })(),
  Ge = (() => {
    class e extends j {
      _parse(t) {
        let { status: n, ctx: a } = this._processInputParams(t);
        if (a.parsedType !== A.array)
          return (
            N(a, {
              code: C.invalid_type,
              expected: A.array,
              received: a.parsedType,
            }),
            F
          );
        if (a.data.length < this._def.items.length)
          return (
            N(a, {
              code: C.too_small,
              minimum: this._def.items.length,
              inclusive: !0,
              exact: !1,
              type: "array",
            }),
            F
          );
        !this._def.rest &&
          a.data.length > this._def.items.length &&
          (N(a, {
            code: C.too_big,
            maximum: this._def.items.length,
            inclusive: !0,
            exact: !1,
            type: "array",
          }),
          n.dirty());
        let o = [...a.data]
          .map((c, d) => {
            let m = this._def.items[d] || this._def.rest;
            return m ? m._parse(new Se(a, c, a.path, d)) : null;
          })
          .filter((c) => !!c);
        return a.common.async
          ? Promise.all(o).then((c) => le.mergeArray(n, c))
          : le.mergeArray(n, o);
      }
      get items() {
        return this._def.items;
      }
      rest(t) {
        return new e(h(l({}, this._def), { rest: t }));
      }
    }
    return (
      (e.create = (r, t) => {
        if (!Array.isArray(r))
          throw new Error(
            "You must pass an array of schemas to z.tuple([ ... ])"
          );
        return new e(l({ items: r, typeName: L.ZodTuple, rest: null }, W(t)));
      }),
      e
    );
  })(),
  ft = class e extends j {
    get keySchema() {
      return this._def.keyType;
    }
    get valueSchema() {
      return this._def.valueType;
    }
    _parse(r) {
      let { status: t, ctx: n } = this._processInputParams(r);
      if (n.parsedType !== A.object)
        return (
          N(n, {
            code: C.invalid_type,
            expected: A.object,
            received: n.parsedType,
          }),
          F
        );
      let a = [],
        s = this._def.keyType,
        o = this._def.valueType;
      for (let c in n.data)
        a.push({
          key: s._parse(new Se(n, c, n.path, c)),
          value: o._parse(new Se(n, n.data[c], n.path, c)),
        });
      return n.common.async
        ? le.mergeObjectAsync(t, a)
        : le.mergeObjectSync(t, a);
    }
    get element() {
      return this._def.valueType;
    }
    static create(r, t, n) {
      return t instanceof j
        ? new e(l({ keyType: r, valueType: t, typeName: L.ZodRecord }, W(n)))
        : new e(
            l(
              { keyType: _t.create(), valueType: r, typeName: L.ZodRecord },
              W(t)
            )
          );
    }
  },
  wr = (() => {
    class e extends j {
      get keySchema() {
        return this._def.keyType;
      }
      get valueSchema() {
        return this._def.valueType;
      }
      _parse(t) {
        let { status: n, ctx: a } = this._processInputParams(t);
        if (a.parsedType !== A.map)
          return (
            N(a, {
              code: C.invalid_type,
              expected: A.map,
              received: a.parsedType,
            }),
            F
          );
        let s = this._def.keyType,
          o = this._def.valueType,
          c = [...a.data.entries()].map(([d, m], f) => ({
            key: s._parse(new Se(a, d, a.path, [f, "key"])),
            value: o._parse(new Se(a, m, a.path, [f, "value"])),
          }));
        if (a.common.async) {
          let d = new Map();
          return Promise.resolve().then(() =>
            u(this, null, function* () {
              for (let m of c) {
                let f = yield m.key,
                  g = yield m.value;
                if (f.status === "aborted" || g.status === "aborted") return F;
                (f.status === "dirty" || g.status === "dirty") && n.dirty(),
                  d.set(f.value, g.value);
              }
              return { status: n.value, value: d };
            })
          );
        } else {
          let d = new Map();
          for (let m of c) {
            let f = m.key,
              g = m.value;
            if (f.status === "aborted" || g.status === "aborted") return F;
            (f.status === "dirty" || g.status === "dirty") && n.dirty(),
              d.set(f.value, g.value);
          }
          return { status: n.value, value: d };
        }
      }
    }
    return (
      (e.create = (r, t, n) =>
        new e(l({ valueType: t, keyType: r, typeName: L.ZodMap }, W(n)))),
      e
    );
  })(),
  Sr = (() => {
    class e extends j {
      _parse(t) {
        let { status: n, ctx: a } = this._processInputParams(t);
        if (a.parsedType !== A.set)
          return (
            N(a, {
              code: C.invalid_type,
              expected: A.set,
              received: a.parsedType,
            }),
            F
          );
        let s = this._def;
        s.minSize !== null &&
          a.data.size < s.minSize.value &&
          (N(a, {
            code: C.too_small,
            minimum: s.minSize.value,
            type: "set",
            inclusive: !0,
            exact: !1,
            message: s.minSize.message,
          }),
          n.dirty()),
          s.maxSize !== null &&
            a.data.size > s.maxSize.value &&
            (N(a, {
              code: C.too_big,
              maximum: s.maxSize.value,
              type: "set",
              inclusive: !0,
              exact: !1,
              message: s.maxSize.message,
            }),
            n.dirty());
        let o = this._def.valueType;
        function c(m) {
          let f = new Set();
          for (let g of m) {
            if (g.status === "aborted") return F;
            g.status === "dirty" && n.dirty(), f.add(g.value);
          }
          return { status: n.value, value: f };
        }
        let d = [...a.data.values()].map((m, f) =>
          o._parse(new Se(a, m, a.path, f))
        );
        return a.common.async ? Promise.all(d).then((m) => c(m)) : c(d);
      }
      min(t, n) {
        return new e(
          h(l({}, this._def), { minSize: { value: t, message: P.toString(n) } })
        );
      }
      max(t, n) {
        return new e(
          h(l({}, this._def), { maxSize: { value: t, message: P.toString(n) } })
        );
      }
      size(t, n) {
        return this.min(t, n).max(t, n);
      }
      nonempty(t) {
        return this.min(1, t);
      }
    }
    return (
      (e.create = (r, t) =>
        new e(
          l(
            { valueType: r, minSize: null, maxSize: null, typeName: L.ZodSet },
            W(t)
          )
        )),
      e
    );
  })(),
  ht = class e extends j {
    constructor() {
      super(...arguments), (this.validate = this.implement);
    }
    _parse(r) {
      let { ctx: t } = this._processInputParams(r);
      if (t.parsedType !== A.function)
        return (
          N(t, {
            code: C.invalid_type,
            expected: A.function,
            received: t.parsedType,
          }),
          F
        );
      function n(c, d) {
        return dt({
          data: c,
          path: t.path,
          errorMaps: [
            t.common.contextualErrorMap,
            t.schemaErrorMap,
            lt(),
            ze,
          ].filter((m) => !!m),
          issueData: { code: C.invalid_arguments, argumentsError: d },
        });
      }
      function a(c, d) {
        return dt({
          data: c,
          path: t.path,
          errorMaps: [
            t.common.contextualErrorMap,
            t.schemaErrorMap,
            lt(),
            ze,
          ].filter((m) => !!m),
          issueData: { code: C.invalid_return_type, returnTypeError: d },
        });
      }
      let s = { errorMap: t.common.contextualErrorMap },
        o = t.data;
      if (this._def.returns instanceof Et) {
        let c = this;
        return pe(function (...d) {
          return u(this, null, function* () {
            let m = new Ie([]),
              f = yield c._def.args.parseAsync(d, s).catch((ne) => {
                throw (m.addIssue(n(d, ne)), m);
              }),
              g = yield Reflect.apply(o, this, f);
            return yield c._def.returns._def.type
              .parseAsync(g, s)
              .catch((ne) => {
                throw (m.addIssue(a(g, ne)), m);
              });
          });
        });
      } else {
        let c = this;
        return pe(function (...d) {
          let m = c._def.args.safeParse(d, s);
          if (!m.success) throw new Ie([n(d, m.error)]);
          let f = Reflect.apply(o, this, m.data),
            g = c._def.returns.safeParse(f, s);
          if (!g.success) throw new Ie([a(f, g.error)]);
          return g.data;
        });
      }
    }
    parameters() {
      return this._def.args;
    }
    returnType() {
      return this._def.returns;
    }
    args(...r) {
      return new e(
        h(l({}, this._def), { args: Ge.create(r).rest(qe.create()) })
      );
    }
    returns(r) {
      return new e(h(l({}, this._def), { returns: r }));
    }
    implement(r) {
      return this.parse(r);
    }
    strictImplement(r) {
      return this.parse(r);
    }
    static create(r, t, n) {
      return new e(
        l(
          {
            args: r || Ge.create([]).rest(qe.create()),
            returns: t || qe.create(),
            typeName: L.ZodFunction,
          },
          W(n)
        )
      );
    }
  },
  Gt = (() => {
    class e extends j {
      get schema() {
        return this._def.getter();
      }
      _parse(t) {
        let { ctx: n } = this._processInputParams(t);
        return this._def
          .getter()
          ._parse({ data: n.data, path: n.path, parent: n });
      }
    }
    return (
      (e.create = (r, t) => new e(l({ getter: r, typeName: L.ZodLazy }, W(t)))),
      e
    );
  })(),
  Zt = (() => {
    class e extends j {
      _parse(t) {
        if (t.data !== this._def.value) {
          let n = this._getOrReturnCtx(t);
          return (
            N(n, {
              received: n.data,
              code: C.invalid_literal,
              expected: this._def.value,
            }),
            F
          );
        }
        return { status: "valid", value: t.data };
      }
      get value() {
        return this._def.value;
      }
    }
    return (
      (e.create = (r, t) =>
        new e(l({ value: r, typeName: L.ZodLiteral }, W(t)))),
      e
    );
  })();
function Nr(e, r) {
  return new gt(l({ values: e, typeName: L.ZodEnum }, W(r)));
}
var gt = (() => {
    class e extends j {
      _parse(t) {
        if (typeof t.data != "string") {
          let n = this._getOrReturnCtx(t),
            a = this._def.values;
          return (
            N(n, {
              expected: $.joinValues(a),
              received: n.parsedType,
              code: C.invalid_type,
            }),
            F
          );
        }
        if (this._def.values.indexOf(t.data) === -1) {
          let n = this._getOrReturnCtx(t),
            a = this._def.values;
          return (
            N(n, { received: n.data, code: C.invalid_enum_value, options: a }),
            F
          );
        }
        return pe(t.data);
      }
      get options() {
        return this._def.values;
      }
      get enum() {
        let t = {};
        for (let n of this._def.values) t[n] = n;
        return t;
      }
      get Values() {
        let t = {};
        for (let n of this._def.values) t[n] = n;
        return t;
      }
      get Enum() {
        let t = {};
        for (let n of this._def.values) t[n] = n;
        return t;
      }
      extract(t) {
        return e.create(t);
      }
      exclude(t) {
        return e.create(this.options.filter((n) => !t.includes(n)));
      }
    }
    return (e.create = Nr), e;
  })(),
  Kt = (() => {
    class e extends j {
      _parse(t) {
        let n = $.getValidEnumValues(this._def.values),
          a = this._getOrReturnCtx(t);
        if (a.parsedType !== A.string && a.parsedType !== A.number) {
          let s = $.objectValues(n);
          return (
            N(a, {
              expected: $.joinValues(s),
              received: a.parsedType,
              code: C.invalid_type,
            }),
            F
          );
        }
        if (n.indexOf(t.data) === -1) {
          let s = $.objectValues(n);
          return (
            N(a, { received: a.data, code: C.invalid_enum_value, options: s }),
            F
          );
        }
        return pe(t.data);
      }
      get enum() {
        return this._def.values;
      }
    }
    return (
      (e.create = (r, t) =>
        new e(l({ values: r, typeName: L.ZodNativeEnum }, W(t)))),
      e
    );
  })(),
  Et = (() => {
    class e extends j {
      unwrap() {
        return this._def.type;
      }
      _parse(t) {
        let { ctx: n } = this._processInputParams(t);
        if (n.parsedType !== A.promise && n.common.async === !1)
          return (
            N(n, {
              code: C.invalid_type,
              expected: A.promise,
              received: n.parsedType,
            }),
            F
          );
        let a = n.parsedType === A.promise ? n.data : Promise.resolve(n.data);
        return pe(
          a.then((s) =>
            this._def.type.parseAsync(s, {
              path: n.path,
              errorMap: n.common.contextualErrorMap,
            })
          )
        );
      }
    }
    return (
      (e.create = (r, t) =>
        new e(l({ type: r, typeName: L.ZodPromise }, W(t)))),
      e
    );
  })(),
  Me = (() => {
    class e extends j {
      innerType() {
        return this._def.schema;
      }
      sourceType() {
        return this._def.schema._def.typeName === L.ZodEffects
          ? this._def.schema.sourceType()
          : this._def.schema;
      }
      _parse(t) {
        let { status: n, ctx: a } = this._processInputParams(t),
          s = this._def.effect || null,
          o = {
            addIssue: (c) => {
              N(a, c), c.fatal ? n.abort() : n.dirty();
            },
            get path() {
              return a.path;
            },
          };
        if (((o.addIssue = o.addIssue.bind(o)), s.type === "preprocess")) {
          let c = s.transform(a.data, o);
          return a.common.issues.length
            ? { status: "dirty", value: a.data }
            : a.common.async
            ? Promise.resolve(c).then((d) =>
                this._def.schema._parseAsync({
                  data: d,
                  path: a.path,
                  parent: a,
                })
              )
            : this._def.schema._parseSync({ data: c, path: a.path, parent: a });
        }
        if (s.type === "refinement") {
          let c = (d) => {
            let m = s.refinement(d, o);
            if (a.common.async) return Promise.resolve(m);
            if (m instanceof Promise)
              throw new Error(
                "Async refinement encountered during synchronous parse operation. Use .parseAsync instead."
              );
            return d;
          };
          if (a.common.async === !1) {
            let d = this._def.schema._parseSync({
              data: a.data,
              path: a.path,
              parent: a,
            });
            return d.status === "aborted"
              ? F
              : (d.status === "dirty" && n.dirty(),
                c(d.value),
                { status: n.value, value: d.value });
          } else
            return this._def.schema
              ._parseAsync({ data: a.data, path: a.path, parent: a })
              .then((d) =>
                d.status === "aborted"
                  ? F
                  : (d.status === "dirty" && n.dirty(),
                    c(d.value).then(() => ({
                      status: n.value,
                      value: d.value,
                    })))
              );
        }
        if (s.type === "transform")
          if (a.common.async === !1) {
            let c = this._def.schema._parseSync({
              data: a.data,
              path: a.path,
              parent: a,
            });
            if (!Je(c)) return c;
            let d = s.transform(c.value, o);
            if (d instanceof Promise)
              throw new Error(
                "Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead."
              );
            return { status: n.value, value: d };
          } else
            return this._def.schema
              ._parseAsync({ data: a.data, path: a.path, parent: a })
              .then((c) =>
                Je(c)
                  ? Promise.resolve(s.transform(c.value, o)).then((d) => ({
                      status: n.value,
                      value: d,
                    }))
                  : c
              );
        $.assertNever(s);
      }
    }
    return (
      (e.create = (r, t, n) =>
        new e(l({ schema: r, typeName: L.ZodEffects, effect: t }, W(n)))),
      (e.createWithPreprocess = (r, t, n) =>
        new e(
          l(
            {
              schema: t,
              effect: { type: "preprocess", transform: r },
              typeName: L.ZodEffects,
            },
            W(n)
          )
        )),
      e
    );
  })(),
  Le = (() => {
    class e extends j {
      _parse(t) {
        return this._getType(t) === A.undefined
          ? pe(void 0)
          : this._def.innerType._parse(t);
      }
      unwrap() {
        return this._def.innerType;
      }
    }
    return (
      (e.create = (r, t) =>
        new e(l({ innerType: r, typeName: L.ZodOptional }, W(t)))),
      e
    );
  })(),
  Xe = (() => {
    class e extends j {
      _parse(t) {
        return this._getType(t) === A.null
          ? pe(null)
          : this._def.innerType._parse(t);
      }
      unwrap() {
        return this._def.innerType;
      }
    }
    return (
      (e.create = (r, t) =>
        new e(l({ innerType: r, typeName: L.ZodNullable }, W(t)))),
      e
    );
  })(),
  $t = (() => {
    class e extends j {
      _parse(t) {
        let { ctx: n } = this._processInputParams(t),
          a = n.data;
        return (
          n.parsedType === A.undefined && (a = this._def.defaultValue()),
          this._def.innerType._parse({ data: a, path: n.path, parent: n })
        );
      }
      removeDefault() {
        return this._def.innerType;
      }
    }
    return (
      (e.create = (r, t) =>
        new e(
          l(
            {
              innerType: r,
              typeName: L.ZodDefault,
              defaultValue:
                typeof t.default == "function" ? t.default : () => t.default,
            },
            W(t)
          )
        )),
      e
    );
  })(),
  Tr = (() => {
    class e extends j {
      _parse(t) {
        let { ctx: n } = this._processInputParams(t),
          a = h(l({}, n), { common: h(l({}, n.common), { issues: [] }) }),
          s = this._def.innerType._parse({
            data: a.data,
            path: a.path,
            parent: l({}, a),
          });
        return pt(s)
          ? s.then((o) => ({
              status: "valid",
              value:
                o.status === "valid"
                  ? o.value
                  : this._def.catchValue({
                      get error() {
                        return new Ie(a.common.issues);
                      },
                      input: a.data,
                    }),
            }))
          : {
              status: "valid",
              value:
                s.status === "valid"
                  ? s.value
                  : this._def.catchValue({
                      get error() {
                        return new Ie(a.common.issues);
                      },
                      input: a.data,
                    }),
            };
      }
      removeCatch() {
        return this._def.innerType;
      }
    }
    return (
      (e.create = (r, t) =>
        new e(
          l(
            {
              innerType: r,
              typeName: L.ZodCatch,
              catchValue:
                typeof t.catch == "function" ? t.catch : () => t.catch,
            },
            W(t)
          )
        )),
      e
    );
  })(),
  Rr = (() => {
    class e extends j {
      _parse(t) {
        if (this._getType(t) !== A.nan) {
          let a = this._getOrReturnCtx(t);
          return (
            N(a, {
              code: C.invalid_type,
              expected: A.nan,
              received: a.parsedType,
            }),
            F
          );
        }
        return { status: "valid", value: t.data };
      }
    }
    return (e.create = (r) => new e(l({ typeName: L.ZodNaN }, W(r)))), e;
  })(),
  pn = Symbol("zod_brand"),
  Ct = class extends j {
    _parse(r) {
      let { ctx: t } = this._processInputParams(r),
        n = t.data;
      return this._def.type._parse({ data: n, path: t.path, parent: t });
    }
    unwrap() {
      return this._def.type;
    }
  },
  et = class e extends j {
    _parse(r) {
      let { status: t, ctx: n } = this._processInputParams(r);
      if (n.common.async)
        return u(this, null, function* () {
          let s = yield this._def.in._parseAsync({
            data: n.data,
            path: n.path,
            parent: n,
          });
          return s.status === "aborted"
            ? F
            : s.status === "dirty"
            ? (t.dirty(), Er(s.value))
            : this._def.out._parseAsync({
                data: s.value,
                path: n.path,
                parent: n,
              });
        });
      {
        let a = this._def.in._parseSync({
          data: n.data,
          path: n.path,
          parent: n,
        });
        return a.status === "aborted"
          ? F
          : a.status === "dirty"
          ? (t.dirty(), { status: "dirty", value: a.value })
          : this._def.out._parseSync({
              data: a.value,
              path: n.path,
              parent: n,
            });
      }
    }
    static create(r, t) {
      return new e({ in: r, out: t, typeName: L.ZodPipeline });
    }
  },
  vr = (() => {
    class e extends j {
      _parse(t) {
        let n = this._def.innerType._parse(t);
        return Je(n) && (n.value = Object.freeze(n.value)), n;
      }
    }
    return (
      (e.create = (r, t) =>
        new e(l({ innerType: r, typeName: L.ZodReadonly }, W(t)))),
      e
    );
  })(),
  Ir = (e, r = {}, t) =>
    e
      ? ut.create().superRefine((n, a) => {
          var s, o;
          if (!e(n)) {
            let c =
                typeof r == "function"
                  ? r(n)
                  : typeof r == "string"
                  ? { message: r }
                  : r,
              d =
                (o = (s = c.fatal) !== null && s !== void 0 ? s : t) !== null &&
                o !== void 0
                  ? o
                  : !0,
              m = typeof c == "string" ? { message: c } : c;
            a.addIssue(h(l({ code: "custom" }, m), { fatal: d }));
          }
        })
      : ut.create(),
  un = { object: Ve.lazycreate },
  L = (function (e) {
    return (
      (e.ZodString = "ZodString"),
      (e.ZodNumber = "ZodNumber"),
      (e.ZodNaN = "ZodNaN"),
      (e.ZodBigInt = "ZodBigInt"),
      (e.ZodBoolean = "ZodBoolean"),
      (e.ZodDate = "ZodDate"),
      (e.ZodSymbol = "ZodSymbol"),
      (e.ZodUndefined = "ZodUndefined"),
      (e.ZodNull = "ZodNull"),
      (e.ZodAny = "ZodAny"),
      (e.ZodUnknown = "ZodUnknown"),
      (e.ZodNever = "ZodNever"),
      (e.ZodVoid = "ZodVoid"),
      (e.ZodArray = "ZodArray"),
      (e.ZodObject = "ZodObject"),
      (e.ZodUnion = "ZodUnion"),
      (e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion"),
      (e.ZodIntersection = "ZodIntersection"),
      (e.ZodTuple = "ZodTuple"),
      (e.ZodRecord = "ZodRecord"),
      (e.ZodMap = "ZodMap"),
      (e.ZodSet = "ZodSet"),
      (e.ZodFunction = "ZodFunction"),
      (e.ZodLazy = "ZodLazy"),
      (e.ZodLiteral = "ZodLiteral"),
      (e.ZodEnum = "ZodEnum"),
      (e.ZodEffects = "ZodEffects"),
      (e.ZodNativeEnum = "ZodNativeEnum"),
      (e.ZodOptional = "ZodOptional"),
      (e.ZodNullable = "ZodNullable"),
      (e.ZodDefault = "ZodDefault"),
      (e.ZodCatch = "ZodCatch"),
      (e.ZodPromise = "ZodPromise"),
      (e.ZodBranded = "ZodBranded"),
      (e.ZodPipeline = "ZodPipeline"),
      (e.ZodReadonly = "ZodReadonly"),
      e
    );
  })(L || {}),
  mn = (e, r = { message: `Input not instance of ${e.name}` }) =>
    Ir((t) => t instanceof e, r),
  br = _t.create,
  kr = Mt.create,
  fn = Rr.create,
  hn = Dt.create,
  Or = Ft.create,
  Cn = Bt.create,
  _n = yr.create,
  gn = Wt.create,
  En = jt.create,
  yn = ut.create,
  An = qe.create,
  wn = xe.create,
  Sn = Ar.create,
  Nn = Qe.create,
  Tn = Ve.create,
  Rn = Ve.strictCreate,
  vn = Ht.create,
  In = mt.create,
  bn = Vt.create,
  kn = Ge.create,
  On = ft.create,
  Un = wr.create,
  Pn = Sr.create,
  xn = ht.create,
  Ln = Gt.create,
  Mn = Zt.create,
  Dn = gt.create,
  Fn = Kt.create,
  Bn = Et.create,
  Cr = Me.create,
  Wn = Le.create,
  jn = Xe.create,
  Hn = Me.createWithPreprocess,
  Vn = et.create,
  Gn = () => br().optional(),
  Zn = () => kr().optional(),
  Kn = () => Or().optional(),
  $n = {
    string: (e) => _t.create(h(l({}, e), { coerce: !0 })),
    number: (e) => Mt.create(h(l({}, e), { coerce: !0 })),
    boolean: (e) => Ft.create(h(l({}, e), { coerce: !0 })),
    bigint: (e) => Dt.create(h(l({}, e), { coerce: !0 })),
    date: (e) => Bt.create(h(l({}, e), { coerce: !0 })),
  },
  Yn = F,
  i = Object.freeze({
    __proto__: null,
    defaultErrorMap: ze,
    setErrorMap: Jr,
    getErrorMap: lt,
    makeIssue: dt,
    EMPTY_PATH: Qr,
    addIssueToContext: N,
    ParseStatus: le,
    INVALID: F,
    DIRTY: Er,
    OK: pe,
    isAborted: Pt,
    isDirty: xt,
    isValid: Je,
    isAsync: pt,
    get util() {
      return $;
    },
    get objectUtil() {
      return _r;
    },
    ZodParsedType: A,
    getParsedType: Oe,
    ZodType: j,
    ZodString: _t,
    ZodNumber: Mt,
    ZodBigInt: Dt,
    ZodBoolean: Ft,
    ZodDate: Bt,
    ZodSymbol: yr,
    ZodUndefined: Wt,
    ZodNull: jt,
    ZodAny: ut,
    ZodUnknown: qe,
    ZodNever: xe,
    ZodVoid: Ar,
    ZodArray: Qe,
    ZodObject: Ve,
    ZodUnion: Ht,
    ZodDiscriminatedUnion: mt,
    ZodIntersection: Vt,
    ZodTuple: Ge,
    ZodRecord: ft,
    ZodMap: wr,
    ZodSet: Sr,
    ZodFunction: ht,
    ZodLazy: Gt,
    ZodLiteral: Zt,
    ZodEnum: gt,
    ZodNativeEnum: Kt,
    ZodPromise: Et,
    ZodEffects: Me,
    ZodTransformer: Me,
    ZodOptional: Le,
    ZodNullable: Xe,
    ZodDefault: $t,
    ZodCatch: Tr,
    ZodNaN: Rr,
    BRAND: pn,
    ZodBranded: Ct,
    ZodPipeline: et,
    ZodReadonly: vr,
    custom: Ir,
    Schema: j,
    ZodSchema: j,
    late: un,
    get ZodFirstPartyTypeKind() {
      return L;
    },
    coerce: $n,
    any: yn,
    array: Nn,
    bigint: hn,
    boolean: Or,
    date: Cn,
    discriminatedUnion: In,
    effect: Cr,
    enum: Dn,
    function: xn,
    instanceof: mn,
    intersection: bn,
    lazy: Ln,
    literal: Mn,
    map: Un,
    nan: fn,
    nativeEnum: Fn,
    never: wn,
    null: En,
    nullable: jn,
    number: kr,
    object: Tn,
    oboolean: Kn,
    onumber: Zn,
    optional: Wn,
    ostring: Gn,
    pipeline: Vn,
    preprocess: Hn,
    promise: Bn,
    record: On,
    set: Pn,
    strictObject: Rn,
    string: br,
    symbol: _n,
    transformer: Cr,
    tuple: kn,
    undefined: gn,
    union: vn,
    unknown: An,
    void: Sn,
    NEVER: Yn,
    ZodIssueCode: C,
    quotelessJson: zr,
    ZodError: Ie,
  });
var se = i.object({ message: i.string() });
function w(e) {
  return i.literal(y[e]);
}
var yt = i.object({
    serializedMessage: i.string().optional(),
    accountAddress: i.string(),
    chainId: i.string(),
    notBefore: i.string().optional(),
    domain: i.string(),
    uri: i.string(),
    version: i.string(),
    nonce: i.string(),
    statement: i.string().optional(),
    resources: i.array(i.string()).optional(),
    requestId: i.string().optional(),
    issuedAt: i.string().optional(),
    expirationTime: i.string().optional(),
  }),
  po = i.object({
    accessList: i.array(i.string()),
    blockHash: i.string().nullable(),
    blockNumber: i.string().nullable(),
    chainId: i.string().or(i.number()),
    from: i.string(),
    gas: i.string(),
    hash: i.string(),
    input: i.string().nullable(),
    maxFeePerGas: i.string(),
    maxPriorityFeePerGas: i.string(),
    nonce: i.string(),
    r: i.string(),
    s: i.string(),
    to: i.string(),
    transactionIndex: i.string().nullable(),
    type: i.string(),
    v: i.string(),
    value: i.string(),
  }),
  qn = i.object({
    chainId: i.string().or(i.number()),
    rpcUrl: i.optional(i.string()),
  }),
  zn = i.object({ email: i.string().email() }),
  Jn = i.object({ otp: i.string() }),
  Qn = i.object({
    uri: i.string(),
    preferredAccountType: i.optional(i.string()),
    chainId: i.optional(i.string().or(i.number())),
    siwxMessage: i.optional(yt),
    rpcUrl: i.optional(i.string()),
  }),
  Xn = i.object({
    chainId: i.optional(i.string().or(i.number())),
    preferredAccountType: i.optional(i.string()),
    socialUri: i.optional(i.string()),
    siwxMessage: i.optional(yt),
    rpcUrl: i.optional(i.string()),
  }),
  ea = i.object({
    provider: i.enum(["google", "github", "apple", "facebook", "x", "discord"]),
  }),
  ta = i.object({ email: i.string().email() }),
  ra = i.object({ otp: i.string() }),
  na = i.object({ otp: i.string() }),
  aa = i.object({
    themeMode: i.optional(i.enum(["light", "dark"])),
    themeVariables: i.optional(i.record(i.string(), i.string().or(i.number()))),
    w3mThemeVariables: i.optional(i.record(i.string(), i.string())),
  }),
  sa = i.object({
    metadata: i
      .object({
        name: i.string(),
        description: i.string(),
        url: i.string(),
        icons: i.array(i.string()),
      })
      .optional(),
    sdkVersion: i.string().optional(),
    sdkType: i.string().optional(),
    projectId: i.string(),
  }),
  oa = i.object({ type: i.string() }),
  ia = i.object({ action: i.enum(["VERIFY_DEVICE", "VERIFY_OTP", "CONNECT"]) }),
  ca = i.object({ url: i.string() }),
  la = i.object({ userName: i.string() }),
  da = i.object({
    email: i.string().optional().nullable(),
    address: i.string(),
    chainId: i.string().or(i.number()),
    accounts: i
      .array(
        i.object({
          address: i.string(),
          type: i.enum([Q.ACCOUNT_TYPES.EOA, Q.ACCOUNT_TYPES.SMART_ACCOUNT]),
        })
      )
      .optional(),
    userName: i.string().optional().nullable(),
    preferredAccountType: i.optional(i.string()),
    signature: i.string().optional(),
    message: i.string().optional(),
    siwxMessage: i.optional(yt),
  }),
  pa = i.object({
    action: i.enum(["VERIFY_PRIMARY_OTP", "VERIFY_SECONDARY_OTP"]),
  }),
  ua = i.object({
    email: i.string().email().optional().nullable(),
    address: i.string(),
    chainId: i.string().or(i.number()),
    smartAccountDeployed: i.optional(i.boolean()),
    accounts: i
      .array(
        i.object({
          address: i.string(),
          type: i.enum([Q.ACCOUNT_TYPES.EOA, Q.ACCOUNT_TYPES.SMART_ACCOUNT]),
        })
      )
      .optional(),
    preferredAccountType: i.optional(i.string()),
    signature: i.string().optional(),
    message: i.string().optional(),
    siwxMessage: i.optional(yt),
  }),
  ma = i.object({ uri: i.string() }),
  fa = i.object({ isConnected: i.boolean() }),
  ha = i.object({ chainId: i.string().or(i.number()) }),
  Ca = i.object({ chainId: i.string().or(i.number()) }),
  _a = i.object({ newEmail: i.string().email() }),
  ga = i.object({ smartAccountEnabledNetworks: i.array(i.number()) }),
  uo = i.object({ address: i.string(), isDeployed: i.boolean() }),
  Ea = i.object({ version: i.string().optional() }),
  ya = i.object({ type: i.string(), address: i.string() }),
  Aa = i.any(),
  wa = i.object({ method: i.literal("eth_accounts") }),
  Sa = i.object({ method: i.literal("eth_blockNumber") }),
  Na = i.object({ method: i.literal("eth_call"), params: i.array(i.any()) }),
  Ta = i.object({ method: i.literal("eth_chainId") }),
  Ra = i.object({
    method: i.literal("eth_estimateGas"),
    params: i.array(i.any()),
  }),
  va = i.object({
    method: i.literal("eth_feeHistory"),
    params: i.array(i.any()),
  }),
  Ia = i.object({ method: i.literal("eth_gasPrice") }),
  ba = i.object({
    method: i.literal("eth_getAccount"),
    params: i.array(i.any()),
  }),
  ka = i.object({
    method: i.literal("eth_getBalance"),
    params: i.array(i.any()),
  }),
  Oa = i.object({
    method: i.literal("eth_getBlockByHash"),
    params: i.array(i.any()),
  }),
  Ua = i.object({
    method: i.literal("eth_getBlockByNumber"),
    params: i.array(i.any()),
  }),
  Pa = i.object({
    method: i.literal("eth_getBlockReceipts"),
    params: i.array(i.any()),
  }),
  xa = i.object({
    method: i.literal("eth_getBlockTransactionCountByHash"),
    params: i.array(i.any()),
  }),
  La = i.object({
    method: i.literal("eth_getBlockTransactionCountByNumber"),
    params: i.array(i.any()),
  }),
  Ma = i.object({ method: i.literal("eth_getCode"), params: i.array(i.any()) }),
  Da = i.object({
    method: i.literal("eth_getFilterChanges"),
    params: i.array(i.any()),
  }),
  Fa = i.object({
    method: i.literal("eth_getFilterLogs"),
    params: i.array(i.any()),
  }),
  Ba = i.object({ method: i.literal("eth_getLogs"), params: i.array(i.any()) }),
  Wa = i.object({
    method: i.literal("eth_getProof"),
    params: i.array(i.any()),
  }),
  ja = i.object({
    method: i.literal("eth_getStorageAt"),
    params: i.array(i.any()),
  }),
  Ha = i.object({
    method: i.literal("eth_getTransactionByBlockHashAndIndex"),
    params: i.array(i.any()),
  }),
  Va = i.object({
    method: i.literal("eth_getTransactionByBlockNumberAndIndex"),
    params: i.array(i.any()),
  }),
  Ga = i.object({
    method: i.literal("eth_getTransactionByHash"),
    params: i.array(i.any()),
  }),
  Za = i.object({
    method: i.literal("eth_getTransactionCount"),
    params: i.array(i.any()),
  }),
  Ka = i.object({
    method: i.literal("eth_getTransactionReceipt"),
    params: i.array(i.any()),
  }),
  $a = i.object({
    method: i.literal("eth_getUncleCountByBlockHash"),
    params: i.array(i.any()),
  }),
  Ya = i.object({
    method: i.literal("eth_getUncleCountByBlockNumber"),
    params: i.array(i.any()),
  }),
  qa = i.object({ method: i.literal("eth_maxPriorityFeePerGas") }),
  za = i.object({ method: i.literal("eth_newBlockFilter") }),
  Ja = i.object({
    method: i.literal("eth_newFilter"),
    params: i.array(i.any()),
  }),
  Qa = i.object({ method: i.literal("eth_newPendingTransactionFilter") }),
  Xa = i.object({
    method: i.literal("eth_sendRawTransaction"),
    params: i.array(i.any()),
  }),
  es = i.object({ method: i.literal("eth_syncing"), params: i.array(i.any()) }),
  ts = i.object({
    method: i.literal("eth_uninstallFilter"),
    params: i.array(i.any()),
  }),
  Ur = i.object({
    method: i.literal("personal_sign"),
    params: i.array(i.any()),
  }),
  rs = i.object({
    method: i.literal("eth_signTypedData_v4"),
    params: i.array(i.any()),
  }),
  ns = i.object({
    method: i.literal("eth_sendTransaction"),
    params: i.array(i.any()),
  }),
  as = i.object({
    method: i.literal("solana_signMessage"),
    params: i.object({ message: i.string(), pubkey: i.string() }),
  }),
  ss = i.object({
    method: i.literal("solana_signTransaction"),
    params: i.object({ transaction: i.string() }),
  }),
  os = i.object({
    method: i.literal("solana_signAllTransactions"),
    params: i.object({ transactions: i.array(i.string()) }),
  }),
  is = i.object({
    method: i.literal("solana_signAndSendTransaction"),
    params: i.object({
      transaction: i.string(),
      options: i
        .object({
          skipPreflight: i.boolean().optional(),
          preflightCommitment: i
            .enum([
              "processed",
              "confirmed",
              "finalized",
              "recent",
              "single",
              "singleGossip",
              "root",
              "max",
            ])
            .optional(),
          maxRetries: i.number().optional(),
          minContextSlot: i.number().optional(),
        })
        .optional(),
    }),
  }),
  cs = i.object({
    method: i.literal("wallet_sendCalls"),
    params: i.array(
      i.object({
        chainId: i.string().or(i.number()).optional(),
        from: i.string().optional(),
        version: i.string().optional(),
        capabilities: i.any().optional(),
        calls: i.array(
          i.object({
            to: i.string().startsWith("0x"),
            data: i.string().startsWith("0x").optional(),
            value: i.string().optional(),
          })
        ),
      })
    ),
  }),
  ls = i.object({
    method: i.literal("wallet_getCallsStatus"),
    params: i.array(i.string()),
  }),
  ds = i.object({
    method: i.literal("wallet_getCapabilities"),
    params: i.array(i.string().or(i.number()).optional()).optional(),
  }),
  ps = i.object({
    method: i.literal("wallet_grantPermissions"),
    params: i.array(i.any()),
  }),
  us = i.object({
    method: i.literal("wallet_revokePermissions"),
    params: i.any(),
  }),
  ms = i.object({ method: i.literal("wallet_getAssets"), params: i.any() }),
  Pr = i.object({ token: i.string() }),
  S = i.object({ id: i.string().optional() }),
  At = {
    appEvent: S.extend({ type: w("APP_SWITCH_NETWORK"), payload: qn })
      .or(S.extend({ type: w("APP_CONNECT_EMAIL"), payload: zn }))
      .or(S.extend({ type: w("APP_CONNECT_DEVICE") }))
      .or(S.extend({ type: w("APP_CONNECT_OTP"), payload: Jn }))
      .or(S.extend({ type: w("APP_CONNECT_SOCIAL"), payload: Qn }))
      .or(S.extend({ type: w("APP_GET_FARCASTER_URI") }))
      .or(S.extend({ type: w("APP_CONNECT_FARCASTER") }))
      .or(S.extend({ type: w("APP_GET_USER"), payload: i.optional(Xn) }))
      .or(S.extend({ type: w("APP_GET_SOCIAL_REDIRECT_URI"), payload: ea }))
      .or(S.extend({ type: w("APP_SIGN_OUT") }))
      .or(S.extend({ type: w("APP_IS_CONNECTED"), payload: i.optional(Pr) }))
      .or(S.extend({ type: w("APP_GET_CHAIN_ID") }))
      .or(S.extend({ type: w("APP_GET_SMART_ACCOUNT_ENABLED_NETWORKS") }))
      .or(S.extend({ type: w("APP_INIT_SMART_ACCOUNT") }))
      .or(S.extend({ type: w("APP_SET_PREFERRED_ACCOUNT"), payload: oa }))
      .or(
        S.extend({
          type: w("APP_RPC_REQUEST"),
          payload: Ur.or(ms)
            .or(wa)
            .or(Sa)
            .or(Na)
            .or(Ta)
            .or(Ra)
            .or(va)
            .or(Ia)
            .or(ba)
            .or(ka)
            .or(Oa)
            .or(Ua)
            .or(Pa)
            .or(xa)
            .or(La)
            .or(Ma)
            .or(Da)
            .or(Fa)
            .or(Ba)
            .or(Wa)
            .or(ja)
            .or(Ha)
            .or(Va)
            .or(Ga)
            .or(Za)
            .or(Ka)
            .or($a)
            .or(Ya)
            .or(qa)
            .or(za)
            .or(Ja)
            .or(Qa)
            .or(Xa)
            .or(es)
            .or(ts)
            .or(Ur)
            .or(rs)
            .or(ns)
            .or(as)
            .or(ss)
            .or(os)
            .or(is)
            .or(ls)
            .or(cs)
            .or(ds)
            .or(ps)
            .or(us)
            .and(
              i.object({
                chainId: i.string().or(i.number()).optional(),
                chainNamespace: i
                  .enum(["eip155", "solana", "polkadot", "bip122", "cosmos"])
                  .optional(),
                rpcUrl: i.string().optional(),
              })
            ),
        })
      )
      .or(S.extend({ type: w("APP_UPDATE_EMAIL"), payload: ta }))
      .or(S.extend({ type: w("APP_UPDATE_EMAIL_PRIMARY_OTP"), payload: ra }))
      .or(S.extend({ type: w("APP_UPDATE_EMAIL_SECONDARY_OTP"), payload: na }))
      .or(S.extend({ type: w("APP_SYNC_THEME"), payload: aa }))
      .or(S.extend({ type: w("APP_SYNC_DAPP_DATA"), payload: sa }))
      .or(S.extend({ type: w("APP_RELOAD") }))
      .or(S.extend({ type: w("APP_RPC_ABORT") })),
    frameEvent: S.extend({ type: w("FRAME_SWITCH_NETWORK_ERROR"), payload: se })
      .or(S.extend({ type: w("FRAME_SWITCH_NETWORK_SUCCESS"), payload: Ca }))
      .or(S.extend({ type: w("FRAME_CONNECT_EMAIL_SUCCESS"), payload: ia }))
      .or(S.extend({ type: w("FRAME_CONNECT_EMAIL_ERROR"), payload: se }))
      .or(S.extend({ type: w("FRAME_GET_FARCASTER_URI_SUCCESS"), payload: ca }))
      .or(S.extend({ type: w("FRAME_GET_FARCASTER_URI_ERROR"), payload: se }))
      .or(S.extend({ type: w("FRAME_CONNECT_FARCASTER_SUCCESS"), payload: la }))
      .or(S.extend({ type: w("FRAME_CONNECT_FARCASTER_ERROR"), payload: se }))
      .or(S.extend({ type: w("FRAME_CONNECT_OTP_ERROR"), payload: se }))
      .or(S.extend({ type: w("FRAME_CONNECT_OTP_SUCCESS") }))
      .or(S.extend({ type: w("FRAME_CONNECT_DEVICE_ERROR"), payload: se }))
      .or(S.extend({ type: w("FRAME_CONNECT_DEVICE_SUCCESS") }))
      .or(S.extend({ type: w("FRAME_CONNECT_SOCIAL_SUCCESS"), payload: da }))
      .or(S.extend({ type: w("FRAME_CONNECT_SOCIAL_ERROR"), payload: se }))
      .or(S.extend({ type: w("FRAME_GET_USER_ERROR"), payload: se }))
      .or(S.extend({ type: w("FRAME_GET_USER_SUCCESS"), payload: ua }))
      .or(
        S.extend({
          type: w("FRAME_GET_SOCIAL_REDIRECT_URI_ERROR"),
          payload: se,
        })
      )
      .or(
        S.extend({
          type: w("FRAME_GET_SOCIAL_REDIRECT_URI_SUCCESS"),
          payload: ma,
        })
      )
      .or(S.extend({ type: w("FRAME_SIGN_OUT_ERROR"), payload: se }))
      .or(S.extend({ type: w("FRAME_SIGN_OUT_SUCCESS") }))
      .or(S.extend({ type: w("FRAME_IS_CONNECTED_ERROR"), payload: se }))
      .or(S.extend({ type: w("FRAME_IS_CONNECTED_SUCCESS"), payload: fa }))
      .or(S.extend({ type: w("FRAME_GET_CHAIN_ID_ERROR"), payload: se }))
      .or(S.extend({ type: w("FRAME_GET_CHAIN_ID_SUCCESS"), payload: ha }))
      .or(S.extend({ type: w("FRAME_RPC_REQUEST_ERROR"), payload: se }))
      .or(S.extend({ type: w("FRAME_RPC_REQUEST_SUCCESS"), payload: Aa }))
      .or(S.extend({ type: w("FRAME_SESSION_UPDATE"), payload: Pr }))
      .or(S.extend({ type: w("FRAME_UPDATE_EMAIL_ERROR"), payload: se }))
      .or(S.extend({ type: w("FRAME_UPDATE_EMAIL_SUCCESS"), payload: pa }))
      .or(
        S.extend({
          type: w("FRAME_UPDATE_EMAIL_PRIMARY_OTP_ERROR"),
          payload: se,
        })
      )
      .or(S.extend({ type: w("FRAME_UPDATE_EMAIL_PRIMARY_OTP_SUCCESS") }))
      .or(
        S.extend({
          type: w("FRAME_UPDATE_EMAIL_SECONDARY_OTP_ERROR"),
          payload: se,
        })
      )
      .or(
        S.extend({
          type: w("FRAME_UPDATE_EMAIL_SECONDARY_OTP_SUCCESS"),
          payload: _a,
        })
      )
      .or(S.extend({ type: w("FRAME_SYNC_THEME_ERROR"), payload: se }))
      .or(S.extend({ type: w("FRAME_SYNC_THEME_SUCCESS") }))
      .or(S.extend({ type: w("FRAME_SYNC_DAPP_DATA_ERROR"), payload: se }))
      .or(S.extend({ type: w("FRAME_SYNC_DAPP_DATA_SUCCESS") }))
      .or(
        S.extend({
          type: w("FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS"),
          payload: ga,
        })
      )
      .or(
        S.extend({
          type: w("FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR"),
          payload: se,
        })
      )
      .or(S.extend({ type: w("FRAME_INIT_SMART_ACCOUNT_ERROR"), payload: se }))
      .or(
        S.extend({
          type: w("FRAME_SET_PREFERRED_ACCOUNT_SUCCESS"),
          payload: ya,
        })
      )
      .or(
        S.extend({ type: w("FRAME_SET_PREFERRED_ACCOUNT_ERROR"), payload: se })
      )
      .or(S.extend({ type: w("FRAME_READY"), payload: Ea }))
      .or(S.extend({ type: w("FRAME_RELOAD_ERROR"), payload: se }))
      .or(S.extend({ type: w("FRAME_RELOAD_SUCCESS") })),
  };
function Yt(e, r = {}) {
  return typeof r?.type == "string" && r?.type?.includes(e);
}
function fs({
  projectId: e,
  chainId: r,
  enableLogger: t,
  rpcUrl: n = k.BLOCKCHAIN_API_RPC_URL,
  enableCloudAuthAccount: a = !1,
}) {
  let s = new URL(ur);
  return (
    s.searchParams.set("projectId", e),
    s.searchParams.set("chainId", String(r)),
    s.searchParams.set("version", fr),
    s.searchParams.set("enableLogger", String(t)),
    s.searchParams.set("rpcUrl", n),
    a && s.searchParams.set("enableCloudAuthAccount", "true"),
    s.toString()
  );
}
var wt = class {
  constructor({
    projectId: r,
    isAppClient: t = !1,
    chainId: n = "eip155:1",
    enableLogger: a = !0,
    enableCloudAuthAccount: s = !1,
    rpcUrl: o = k.BLOCKCHAIN_API_RPC_URL,
  }) {
    if (
      ((this.iframe = null),
      (this.iframeIsReady = !1),
      (this.initFrame = () => {
        let c = document.getElementById("w3m-iframe");
        this.iframe && !c && document.body.appendChild(this.iframe);
      }),
      (this.events = {
        registerFrameEventHandler: (c, d, m) => {
          function f({ data: g }) {
            if (!Yt(y.FRAME_EVENT_KEY, g)) return;
            let Z = At.frameEvent.safeParse(g);
            if (!Z.success) {
              console.warn("W3mFrame: invalid frame event", Z.error.message);
              return;
            }
            Z.data?.id === c &&
              (d(Z.data), window.removeEventListener("message", f));
          }
          me.isClient &&
            (window.addEventListener("message", f),
            m.addEventListener("abort", () => {
              window.removeEventListener("message", f);
            }));
        },
        onFrameEvent: (c) => {
          me.isClient &&
            window.addEventListener("message", ({ data: d }) => {
              if (!Yt(y.FRAME_EVENT_KEY, d)) return;
              let m = At.frameEvent.safeParse(d);
              m.success
                ? c(m.data)
                : console.warn(
                    "W3mFrame: invalid frame event",
                    m.error.message
                  );
            });
        },
        onAppEvent: (c) => {
          me.isClient &&
            window.addEventListener("message", ({ data: d }) => {
              if (!Yt(y.APP_EVENT_KEY, d)) return;
              let m = At.appEvent.safeParse(d);
              m.success ||
                console.warn("W3mFrame: invalid app event", m.error.message),
                c(d);
            });
        },
        postAppEvent: (c) => {
          if (me.isClient) {
            if (!this.iframe?.contentWindow)
              throw new Error("W3mFrame: iframe is not set");
            this.iframe.contentWindow.postMessage(c, "*");
          }
        },
        postFrameEvent: (c) => {
          if (me.isClient) {
            if (!parent) throw new Error("W3mFrame: parent is not set");
            parent.postMessage(c, "*");
          }
        },
      }),
      (this.projectId = r),
      (this.frameLoadPromise = new Promise((c, d) => {
        this.frameLoadPromiseResolver = { resolve: c, reject: d };
      })),
      (this.rpcUrl = o),
      t &&
        ((this.frameLoadPromise = new Promise((c, d) => {
          this.frameLoadPromiseResolver = { resolve: c, reject: d };
        })),
        me.isClient))
    ) {
      let c = document.createElement("iframe");
      (c.id = "w3m-iframe"),
        (c.src = fs({
          projectId: r,
          chainId: n,
          enableLogger: a,
          rpcUrl: this.rpcUrl,
          enableCloudAuthAccount: s,
        })),
        (c.name = "w3m-secure-iframe"),
        (c.style.position = "fixed"),
        (c.style.zIndex = "999999"),
        (c.style.display = "none"),
        (c.style.border = "none"),
        (c.style.animationDelay = "0s, 50ms"),
        (c.style.borderBottomLeftRadius =
          "clamp(0px, var(--apkt-borderRadius-8), 44px)"),
        (c.style.borderBottomRightRadius =
          "clamp(0px, var(--apkt-borderRadius-8), 44px)"),
        (this.iframe = c),
        (this.iframe.onerror = () => {
          this.frameLoadPromiseResolver?.reject(
            "Unable to load email login dependency"
          );
        }),
        this.events.onFrameEvent((d) => {
          d.type === "@w3m-frame/READY" &&
            ((this.iframeIsReady = !0),
            this.frameLoadPromiseResolver?.resolve(void 0));
        });
    }
  }
  get networks() {
    let r = [
      "eip155:1",
      "eip155:5",
      "eip155:11155111",
      "eip155:10",
      "eip155:420",
      "eip155:42161",
      "eip155:421613",
      "eip155:137",
      "eip155:80001",
      "eip155:42220",
      "eip155:1313161554",
      "eip155:1313161555",
      "eip155:56",
      "eip155:97",
      "eip155:43114",
      "eip155:43113",
      "eip155:324",
      "eip155:280",
      "eip155:100",
      "eip155:8453",
      "eip155:84531",
      "eip155:84532",
      "eip155:7777777",
      "eip155:999",
      "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",
      "solana:4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z",
      "solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1",
    ].map((t) => ({
      [t]: {
        rpcUrl: `${this.rpcUrl}/v1/?chainId=${t}&projectId=${this.projectId}`,
        chainId: t,
      },
    }));
    return Object.assign({}, ...r);
  }
};
var St = class {
  constructor(r) {
    let t = lr({ level: mr }),
      { logger: n, chunkLoggerController: a } = pr({ opts: t });
    (this.logger = dr(n, this.constructor.name)),
      (this.chunkLoggerController = a),
      typeof window < "u" &&
        this.chunkLoggerController?.downloadLogsBlobInBrowser &&
        (window.downloadAppKitLogsBlob || (window.downloadAppKitLogsBlob = {}),
        (window.downloadAppKitLogsBlob.sdk = () => {
          this.chunkLoggerController?.downloadLogsBlobInBrowser &&
            this.chunkLoggerController.downloadLogsBlobInBrowser({
              projectId: r,
            });
        }));
  }
};
var qt = class {
  constructor({
    projectId: r,
    chainId: t,
    enableLogger: n = !0,
    onTimeout: a,
    abortController: s,
    getActiveCaipNetwork: o,
    getCaipNetworks: c,
    enableCloudAuthAccount: d,
    metadata: m,
    sdkVersion: f,
    sdkType: g,
  }) {
    (this.openRpcRequests = new Map()),
      (this.isInitialized = !1),
      n && (this.w3mLogger = new St(r)),
      (this.abortController = s),
      (this.getActiveCaipNetwork = o),
      (this.getCaipNetworks = c);
    let Z = this.getRpcUrl(t);
    (this.projectId = r),
      (this.sdkVersion = f),
      (this.sdkType = g),
      (this.metadata = m),
      (this.w3mFrame = new wt({
        projectId: r,
        isAppClient: !0,
        chainId: t,
        enableLogger: n,
        rpcUrl: Z,
        enableCloudAuthAccount: d,
      })),
      (this.onTimeout = a),
      this.getLoginEmailUsed() && this.createFrame();
  }
  createFrame() {
    return u(this, null, function* () {
      this.w3mFrame.initFrame(),
        (this.initPromise = new Promise((r) => {
          this.w3mFrame.events.onFrameEvent((t) => {
            t.type === y.FRAME_READY &&
              setTimeout(() => {
                r();
              }, 500);
          });
        })),
        yield this.initPromise,
        yield this.syncDappData({
          metadata: this.metadata,
          projectId: this.projectId,
          sdkVersion: this.sdkVersion,
          sdkType: this.sdkType,
        }),
        yield this.getSmartAccountEnabledNetworks(),
        (this.isInitialized = !0),
        (this.initPromise = void 0);
    });
  }
  init() {
    return u(this, null, function* () {
      if (!this.isInitialized) {
        if (this.initPromise) {
          yield this.initPromise;
          return;
        }
        yield this.createFrame();
      }
    });
  }
  getLoginEmailUsed() {
    return !!ae.get(y.EMAIL_LOGIN_USED_KEY);
  }
  getEmail() {
    return ae.get(y.EMAIL);
  }
  getUsername() {
    return ae.get(y.SOCIAL_USERNAME);
  }
  reload() {
    return u(this, null, function* () {
      try {
        yield this.appEvent({ type: y.APP_RELOAD });
      } catch (r) {
        throw (
          (this.w3mLogger?.logger.error({ error: r }, "Error reloading iframe"),
          r)
        );
      }
    });
  }
  connectEmail(r) {
    return u(this, null, function* () {
      try {
        me.checkIfAllowedToTriggerEmail(), yield this.init();
        let t = yield this.appEvent({ type: y.APP_CONNECT_EMAIL, payload: r });
        return this.setNewLastEmailLoginTime(), t;
      } catch (t) {
        throw (
          (this.w3mLogger?.logger.error({ error: t }, "Error connecting email"),
          t)
        );
      }
    });
  }
  connectDevice() {
    return u(this, null, function* () {
      try {
        return this.appEvent({ type: y.APP_CONNECT_DEVICE });
      } catch (r) {
        throw (
          (this.w3mLogger?.logger.error(
            { error: r },
            "Error connecting device"
          ),
          r)
        );
      }
    });
  }
  connectOtp(r) {
    return u(this, null, function* () {
      try {
        return this.appEvent({ type: y.APP_CONNECT_OTP, payload: r });
      } catch (t) {
        throw (
          (this.w3mLogger?.logger.error({ error: t }, "Error connecting otp"),
          t)
        );
      }
    });
  }
  isConnected() {
    return u(this, null, function* () {
      try {
        if (!this.getLoginEmailUsed()) return { isConnected: !1 };
        let r = yield this.appEvent({ type: y.APP_IS_CONNECTED });
        return r?.isConnected || this.deleteAuthLoginCache(), r;
      } catch (r) {
        throw (
          (this.deleteAuthLoginCache(),
          this.w3mLogger?.logger.error(
            { error: r },
            "Error checking connection"
          ),
          r)
        );
      }
    });
  }
  getChainId() {
    return u(this, null, function* () {
      try {
        let r = yield this.appEvent({ type: y.APP_GET_CHAIN_ID });
        return this.setLastUsedChainId(r.chainId), r;
      } catch (r) {
        throw (
          (this.w3mLogger?.logger.error({ error: r }, "Error getting chain id"),
          r)
        );
      }
    });
  }
  getSocialRedirectUri(r) {
    return u(this, null, function* () {
      try {
        return (
          yield this.init(),
          this.appEvent({ type: y.APP_GET_SOCIAL_REDIRECT_URI, payload: r })
        );
      } catch (t) {
        throw (
          (this.w3mLogger?.logger.error(
            { error: t },
            "Error getting social redirect uri"
          ),
          t)
        );
      }
    });
  }
  updateEmail(r) {
    return u(this, null, function* () {
      try {
        let t = yield this.appEvent({ type: y.APP_UPDATE_EMAIL, payload: r });
        return this.setNewLastEmailLoginTime(), t;
      } catch (t) {
        throw (
          (this.w3mLogger?.logger.error({ error: t }, "Error updating email"),
          t)
        );
      }
    });
  }
  updateEmailPrimaryOtp(r) {
    return u(this, null, function* () {
      try {
        return this.appEvent({
          type: y.APP_UPDATE_EMAIL_PRIMARY_OTP,
          payload: r,
        });
      } catch (t) {
        throw (
          (this.w3mLogger?.logger.error(
            { error: t },
            "Error updating email primary otp"
          ),
          t)
        );
      }
    });
  }
  updateEmailSecondaryOtp(r) {
    return u(this, null, function* () {
      try {
        let t = yield this.appEvent({
          type: y.APP_UPDATE_EMAIL_SECONDARY_OTP,
          payload: r,
        });
        return this.setLoginSuccess(t.newEmail), t;
      } catch (t) {
        throw (
          (this.w3mLogger?.logger.error(
            { error: t },
            "Error updating email secondary otp"
          ),
          t)
        );
      }
    });
  }
  syncTheme(r) {
    return u(this, null, function* () {
      try {
        return this.appEvent({ type: y.APP_SYNC_THEME, payload: r });
      } catch (t) {
        throw (
          (this.w3mLogger?.logger.error({ error: t }, "Error syncing theme"), t)
        );
      }
    });
  }
  syncDappData(r) {
    return u(this, null, function* () {
      try {
        return this.appEvent({ type: y.APP_SYNC_DAPP_DATA, payload: r });
      } catch (t) {
        throw (
          (this.w3mLogger?.logger.error(
            { error: t },
            "Error syncing dapp data"
          ),
          t)
        );
      }
    });
  }
  getSmartAccountEnabledNetworks() {
    return u(this, null, function* () {
      try {
        let r = yield this.appEvent({
          type: y.APP_GET_SMART_ACCOUNT_ENABLED_NETWORKS,
        });
        return (
          this.persistSmartAccountEnabledNetworks(
            r.smartAccountEnabledNetworks
          ),
          r
        );
      } catch (r) {
        throw (
          (this.persistSmartAccountEnabledNetworks([]),
          this.w3mLogger?.logger.error(
            { error: r },
            "Error getting smart account enabled networks"
          ),
          r)
        );
      }
    });
  }
  setPreferredAccount(r) {
    return u(this, null, function* () {
      try {
        return this.appEvent({
          type: y.APP_SET_PREFERRED_ACCOUNT,
          payload: { type: r },
        });
      } catch (t) {
        throw (
          (this.w3mLogger?.logger.error(
            { error: t },
            "Error setting preferred account"
          ),
          t)
        );
      }
    });
  }
  connect(r) {
    return u(this, null, function* () {
      if (r?.socialUri)
        try {
          yield this.init();
          let t = this.getRpcUrl(r.chainId),
            n = yield this.appEvent({
              type: y.APP_CONNECT_SOCIAL,
              payload: {
                uri: r.socialUri,
                preferredAccountType: r.preferredAccountType,
                chainId: r.chainId,
                siwxMessage: r.siwxMessage,
                rpcUrl: t,
              },
            });
          return (
            n.userName && this.setSocialLoginSuccess(n.userName),
            this.setLoginSuccess(n.email),
            this.setLastUsedChainId(n.chainId),
            (this.user = n),
            n
          );
        } catch (t) {
          throw (
            (this.w3mLogger?.logger.error(
              { error: t },
              "Error connecting social"
            ),
            t)
          );
        }
      else
        try {
          let t = r?.chainId || this.getLastUsedChainId() || 1,
            n = yield this.getUser({
              chainId: t,
              preferredAccountType: r?.preferredAccountType,
              siwxMessage: r?.siwxMessage,
              rpcUrl: this.getRpcUrl(t),
            });
          return (
            this.setLoginSuccess(n.email),
            this.setLastUsedChainId(n.chainId),
            (this.user = n),
            n
          );
        } catch (t) {
          throw (
            (this.w3mLogger?.logger.error({ error: t }, "Error connecting"), t)
          );
        }
    });
  }
  getUser(r) {
    return u(this, null, function* () {
      try {
        yield this.init();
        let t = r?.chainId || this.getLastUsedChainId() || 1,
          n = yield this.appEvent({
            type: y.APP_GET_USER,
            payload: h(l({}, r), { chainId: t, rpcUrl: this.getRpcUrl(t) }),
          });
        return (this.user = n), n;
      } catch (t) {
        throw (
          (this.w3mLogger?.logger.error({ error: t }, "Error connecting"), t)
        );
      }
    });
  }
  connectSocial(a) {
    return u(
      this,
      arguments,
      function* ({ uri: r, chainId: t, preferredAccountType: n }) {
        try {
          yield this.init();
          let s = this.getRpcUrl(t),
            o = yield this.appEvent({
              type: y.APP_CONNECT_SOCIAL,
              payload: {
                uri: r,
                chainId: t,
                rpcUrl: s,
                preferredAccountType: n,
              },
            });
          return o.userName && this.setSocialLoginSuccess(o.userName), o;
        } catch (s) {
          throw (
            (this.w3mLogger?.logger.error(
              { error: s },
              "Error connecting social"
            ),
            s)
          );
        }
      }
    );
  }
  getFarcasterUri() {
    return u(this, null, function* () {
      try {
        return (
          yield this.init(),
          yield this.appEvent({ type: y.APP_GET_FARCASTER_URI })
        );
      } catch (r) {
        throw (
          (this.w3mLogger?.logger.error(
            { error: r },
            "Error getting farcaster uri"
          ),
          r)
        );
      }
    });
  }
  connectFarcaster() {
    return u(this, null, function* () {
      try {
        let r = yield this.appEvent({ type: y.APP_CONNECT_FARCASTER });
        return r.userName && this.setSocialLoginSuccess(r.userName), r;
      } catch (r) {
        throw (
          (this.w3mLogger?.logger.error(
            { error: r },
            "Error connecting farcaster"
          ),
          r)
        );
      }
    });
  }
  switchNetwork(t) {
    return u(this, arguments, function* ({ chainId: r }) {
      try {
        let n = this.getRpcUrl(r),
          a = yield this.appEvent({
            type: y.APP_SWITCH_NETWORK,
            payload: { chainId: r, rpcUrl: n },
          });
        return this.setLastUsedChainId(a.chainId), a;
      } catch (n) {
        throw (
          (this.w3mLogger?.logger.error(
            { error: n },
            "Error switching network"
          ),
          n)
        );
      }
    });
  }
  disconnect() {
    return u(this, null, function* () {
      try {
        return (
          this.deleteAuthLoginCache(),
          yield new Promise((t) =>
            u(this, null, function* () {
              let n = setTimeout(() => {
                t();
              }, 3e3);
              yield this.appEvent({ type: y.APP_SIGN_OUT }),
                clearTimeout(n),
                t();
            })
          )
        );
      } catch (r) {
        throw (
          (this.w3mLogger?.logger.error({ error: r }, "Error disconnecting"), r)
        );
      }
    });
  }
  request(r) {
    return u(this, null, function* () {
      let t = r;
      try {
        if (Q.GET_CHAIN_ID === r.method) return this.getLastUsedChainId();
        let n = r.chainNamespace || "eip155",
          a = this.getActiveCaipNetwork(n)?.id;
        (t.chainNamespace = n),
          (t.chainId = a),
          (t.rpcUrl = this.getRpcUrl(a)),
          this.rpcRequestHandler?.(r);
        let s = yield this.appEvent({ type: y.APP_RPC_REQUEST, payload: t });
        return this.rpcSuccessHandler?.(s, t), s;
      } catch (n) {
        throw (
          (this.rpcErrorHandler?.(n, t),
          this.w3mLogger?.logger.error({ error: n }, "Error requesting"),
          n)
        );
      }
    });
  }
  onRpcRequest(r) {
    this.rpcRequestHandler = r;
  }
  onRpcSuccess(r) {
    this.rpcSuccessHandler = r;
  }
  onRpcError(r) {
    this.rpcErrorHandler = r;
  }
  onIsConnected(r) {
    this.w3mFrame.events.onFrameEvent((t) => {
      t.type === y.FRAME_IS_CONNECTED_SUCCESS && t.payload.isConnected && r();
    });
  }
  onNotConnected(r) {
    this.w3mFrame.events.onFrameEvent((t) => {
      t.type === y.FRAME_IS_CONNECTED_ERROR && r(),
        t.type === y.FRAME_IS_CONNECTED_SUCCESS &&
          !t.payload.isConnected &&
          r();
    });
  }
  onConnect(r) {
    this.w3mFrame.events.onFrameEvent((t) => {
      t.type === y.FRAME_GET_USER_SUCCESS && r(t.payload);
    });
  }
  onSocialConnected(r) {
    this.w3mFrame.events.onFrameEvent((t) => {
      t.type === y.FRAME_CONNECT_SOCIAL_SUCCESS && r(t.payload);
    });
  }
  getCapabilities() {
    return u(this, null, function* () {
      try {
        return (yield this.request({ method: "wallet_getCapabilities" })) || {};
      } catch {
        return {};
      }
    });
  }
  onSetPreferredAccount(r) {
    this.w3mFrame.events.onFrameEvent((t) => {
      t.type === y.FRAME_SET_PREFERRED_ACCOUNT_SUCCESS
        ? r(t.payload)
        : t.type === y.FRAME_SET_PREFERRED_ACCOUNT_ERROR &&
          r({ type: Q.ACCOUNT_TYPES.EOA });
    });
  }
  getAvailableChainIds() {
    return Object.keys(this.w3mFrame.networks);
  }
  rejectRpcRequests() {
    return u(this, null, function* () {
      try {
        yield Promise.all(
          Array.from(this.openRpcRequests.values()).map((n) =>
            u(this, [n], function* ({ abortController: r, method: t }) {
              Q.SAFE_RPC_METHODS.includes(t) || r.abort(),
                yield this.appEvent({ type: y.APP_RPC_ABORT });
            })
          )
        ),
          this.openRpcRequests.clear();
      } catch (r) {
        this.w3mLogger?.logger.error(
          { error: r },
          "Error aborting RPC request"
        );
      }
    });
  }
  appEvent(r) {
    return u(this, null, function* () {
      let t, n;
      function a(d) {
        return d.replace("@w3m-app/", "");
      }
      let s = [
          y.APP_SYNC_DAPP_DATA,
          y.APP_SYNC_THEME,
          y.APP_SET_PREFERRED_ACCOUNT,
        ],
        o = a(r.type);
      return (
        !this.w3mFrame.iframeIsReady &&
          !s.includes(r.type) &&
          (n = setTimeout(() => {
            this.onTimeout?.("iframe_load_failed"),
              this.abortController.abort();
          }, 2e4)),
        yield this.w3mFrame.frameLoadPromise,
        clearTimeout(n),
        [
          y.APP_CONNECT_EMAIL,
          y.APP_CONNECT_DEVICE,
          y.APP_CONNECT_OTP,
          y.APP_CONNECT_SOCIAL,
          y.APP_GET_SOCIAL_REDIRECT_URI,
        ]
          .map(a)
          .includes(o) &&
          (t = setTimeout(() => {
            this.onTimeout?.("iframe_request_timeout"),
              this.abortController.abort();
          }, 12e4)),
        new Promise((d, m) => {
          let f = Math.random().toString(36).substring(7);
          this.w3mLogger?.logger.info?.(
            { event: r, id: f },
            "Sending app event"
          ),
            this.w3mFrame.events.postAppEvent(h(l({}, r), { id: f }));
          let g = new AbortController();
          if (o === "RPC_REQUEST") {
            let ne = r;
            this.openRpcRequests.set(
              f,
              h(l({}, ne.payload), { abortController: g })
            );
          }
          g.signal.addEventListener("abort", () => {
            o === "RPC_REQUEST"
              ? m(new Error("Request was aborted"))
              : o !== "GET_FARCASTER_URI" &&
                m(new Error("Something went wrong"));
          });
          let Z = (ne, Ae) => {
            ne.id === f &&
              (Ae?.logger.info?.(
                { framEvent: ne, id: f },
                "Received frame response"
              ),
              this.openRpcRequests.delete(ne.id),
              ne.type === `@w3m-frame/${o}_SUCCESS`
                ? (t && clearTimeout(t),
                  n && clearTimeout(n),
                  "payload" in ne && d(ne.payload),
                  d(void 0))
                : ne.type === `@w3m-frame/${o}_ERROR` &&
                  (t && clearTimeout(t),
                  n && clearTimeout(n),
                  "payload" in ne &&
                    m(new Error(ne.payload?.message || "An error occurred")),
                  m(new Error("An error occurred"))));
          };
          this.w3mFrame.events.registerFrameEventHandler(
            f,
            (ne) => Z(ne, this.w3mLogger),
            this.abortController.signal
          );
        })
      );
    });
  }
  setNewLastEmailLoginTime() {
    ae.set(y.LAST_EMAIL_LOGIN_TIME, Date.now().toString());
  }
  setSocialLoginSuccess(r) {
    ae.set(y.SOCIAL_USERNAME, r);
  }
  setLoginSuccess(r) {
    r && ae.set(y.EMAIL, r),
      ae.set(y.EMAIL_LOGIN_USED_KEY, "true"),
      ae.delete(y.LAST_EMAIL_LOGIN_TIME);
  }
  deleteAuthLoginCache() {
    ae.delete(y.EMAIL_LOGIN_USED_KEY),
      ae.delete(y.EMAIL),
      ae.delete(y.LAST_USED_CHAIN_KEY),
      ae.delete(y.SOCIAL_USERNAME);
  }
  setLastUsedChainId(r) {
    r && ae.set(y.LAST_USED_CHAIN_KEY, String(r));
  }
  getLastUsedChainId() {
    let r = ae.get(y.LAST_USED_CHAIN_KEY) ?? void 0,
      t = Number(r);
    return isNaN(t) ? r : t;
  }
  persistSmartAccountEnabledNetworks(r) {
    ae.set(y.SMART_ACCOUNT_ENABLED_NETWORKS, r.join(","));
  }
  getRpcUrl(r) {
    let t = r === void 0 ? void 0 : "eip155";
    typeof r == "string" &&
      (r.includes(":")
        ? (t = de.parseCaipNetworkId(r)?.chainNamespace)
        : Number.isInteger(Number(r))
        ? (t = "eip155")
        : (t = "solana"));
    let n = this.getCaipNetworks(t);
    return (
      r
        ? n.find((s) => String(s.id) === String(r) || s.caipNetworkId === r)
        : n[0]
    )?.rpcUrls.default.http?.[0];
  }
};
function tt(...e) {
  return u(this, null, function* () {
    let r = yield fetch(...e);
    if (!r.ok) throw new Error(`HTTP status code: ${r.status}`, { cause: r });
    return r;
  });
}
var Ne = class {
  constructor({ baseUrl: r, clientId: t }) {
    (this.baseUrl = r), (this.clientId = t);
  }
  get(s) {
    return u(this, null, function* () {
      var o = s,
        { headers: r, signal: t, cache: n } = o,
        a = Te(o, ["headers", "signal", "cache"]);
      let c = this.createUrl(a);
      return (yield tt(c, {
        method: "GET",
        headers: r,
        signal: t,
        cache: n,
      })).json();
    });
  }
  getBlob(a) {
    return u(this, null, function* () {
      var s = a,
        { headers: r, signal: t } = s,
        n = Te(s, ["headers", "signal"]);
      let o = this.createUrl(n);
      return (yield tt(o, { method: "GET", headers: r, signal: t })).blob();
    });
  }
  post(s) {
    return u(this, null, function* () {
      var o = s,
        { body: r, headers: t, signal: n } = o,
        a = Te(o, ["body", "headers", "signal"]);
      let c = this.createUrl(a);
      return (yield tt(c, {
        method: "POST",
        headers: t,
        body: r ? JSON.stringify(r) : void 0,
        signal: n,
      })).json();
    });
  }
  put(s) {
    return u(this, null, function* () {
      var o = s,
        { body: r, headers: t, signal: n } = o,
        a = Te(o, ["body", "headers", "signal"]);
      let c = this.createUrl(a);
      return (yield tt(c, {
        method: "PUT",
        headers: t,
        body: r ? JSON.stringify(r) : void 0,
        signal: n,
      })).json();
    });
  }
  delete(s) {
    return u(this, null, function* () {
      var o = s,
        { body: r, headers: t, signal: n } = o,
        a = Te(o, ["body", "headers", "signal"]);
      let c = this.createUrl(a);
      return (yield tt(c, {
        method: "DELETE",
        headers: t,
        body: r ? JSON.stringify(r) : void 0,
        signal: n,
      })).json();
    });
  }
  createUrl({ path: r, params: t }) {
    let n = new URL(r, this.baseUrl);
    return (
      t &&
        Object.entries(t).forEach(([a, s]) => {
          s && n.searchParams.append(a, s);
        }),
      this.clientId && n.searchParams.append("clientId", this.clientId),
      n
    );
  }
  sendBeacon(n) {
    var a = n,
      { body: r } = a,
      t = Te(a, ["body"]);
    let s = this.createUrl(t);
    return navigator.sendBeacon(s.toString(), r ? JSON.stringify(r) : void 0);
  }
};
var R = V({
    features: te.DEFAULT_FEATURES,
    projectId: "",
    sdkType: "appkit",
    sdkVersion: "html-wagmi-undefined",
    defaultAccountTypes: te.DEFAULT_ACCOUNT_TYPES,
    enableNetworkSwitch: !0,
    experimental_preferUniversalLinks: !1,
    remoteFeatures: {},
    enableMobileFullScreen: !1,
    coinbasePreference: "all",
  }),
  x = {
    state: R,
    subscribeKey(e, r) {
      return J(R, e, r);
    },
    setOptions(e) {
      Object.assign(R, e);
    },
    setRemoteFeatures(e) {
      if (!e) return;
      let r = l(l({}, R.remoteFeatures), e);
      (R.remoteFeatures = r),
        R.remoteFeatures?.socials &&
          (R.remoteFeatures.socials = xr.filterSocialsByPlatform(
            R.remoteFeatures.socials
          )),
        R.features?.pay &&
          ((R.remoteFeatures.email = !1), (R.remoteFeatures.socials = !1));
    },
    setFeatures(e) {
      if (!e) return;
      R.features || (R.features = te.DEFAULT_FEATURES);
      let r = l(l({}, R.features), e);
      (R.features = r),
        R.features?.pay &&
          R.remoteFeatures &&
          ((R.remoteFeatures.email = !1), (R.remoteFeatures.socials = !1));
    },
    setProjectId(e) {
      R.projectId = e;
    },
    setCustomRpcUrls(e) {
      R.customRpcUrls = e;
    },
    setAllWallets(e) {
      R.allWallets = e;
    },
    setIncludeWalletIds(e) {
      R.includeWalletIds = e;
    },
    setExcludeWalletIds(e) {
      R.excludeWalletIds = e;
    },
    setFeaturedWalletIds(e) {
      R.featuredWalletIds = e;
    },
    setTokens(e) {
      R.tokens = e;
    },
    setTermsConditionsUrl(e) {
      R.termsConditionsUrl = e;
    },
    setPrivacyPolicyUrl(e) {
      R.privacyPolicyUrl = e;
    },
    setCustomWallets(e) {
      R.customWallets = e;
    },
    setIsSiweEnabled(e) {
      R.isSiweEnabled = e;
    },
    setIsUniversalProvider(e) {
      R.isUniversalProvider = e;
    },
    setSdkVersion(e) {
      R.sdkVersion = e;
    },
    setMetadata(e) {
      R.metadata = e;
    },
    setDisableAppend(e) {
      R.disableAppend = e;
    },
    setEIP6963Enabled(e) {
      R.enableEIP6963 = e;
    },
    setDebug(e) {
      R.debug = e;
    },
    setEnableWalletGuide(e) {
      R.enableWalletGuide = e;
    },
    setEnableAuthLogger(e) {
      R.enableAuthLogger = e;
    },
    setEnableWallets(e) {
      R.enableWallets = e;
    },
    setPreferUniversalLinks(e) {
      R.experimental_preferUniversalLinks = e;
    },
    setSIWX(e) {
      if (e) for (let [r, t] of Object.entries(te.SIWX_DEFAULTS)) e[r] ??= t;
      R.siwx = e;
    },
    setConnectMethodsOrder(e) {
      R.features = h(l({}, R.features), { connectMethodsOrder: e });
    },
    setWalletFeaturesOrder(e) {
      R.features = h(l({}, R.features), { walletFeaturesOrder: e });
    },
    setSocialsOrder(e) {
      R.remoteFeatures = h(l({}, R.remoteFeatures), { socials: e });
    },
    setCollapseWallets(e) {
      R.features = h(l({}, R.features), { collapseWallets: e });
    },
    setEnableEmbedded(e) {
      R.enableEmbedded = e;
    },
    setAllowUnsupportedChain(e) {
      R.allowUnsupportedChain = e;
    },
    setManualWCControl(e) {
      R.manualWCControl = e;
    },
    setEnableNetworkSwitch(e) {
      R.enableNetworkSwitch = e;
    },
    setEnableMobileFullScreen(e) {
      R.enableMobileFullScreen = O.isMobile() && e;
    },
    setEnableReconnect(e) {
      R.enableReconnect = e;
    },
    setCoinbasePreference(e) {
      R.coinbasePreference = e;
    },
    setDefaultAccountTypes(e = {}) {
      Object.entries(e).forEach(([r, t]) => {
        t && (R.defaultAccountTypes[r] = t);
      });
    },
    setUniversalProviderConfigOverride(e) {
      R.universalProviderConfigOverride = e;
    },
    getUniversalProviderConfigOverride() {
      return R.universalProviderConfigOverride;
    },
    getSnapshot() {
      return Re(R);
    },
  };
var xr = {
  getFeatureValue(e, r) {
    let t = r?.[e];
    return t === void 0 ? te.DEFAULT_FEATURES[e] : t;
  },
  filterSocialsByPlatform(e) {
    if (!e || !e.length) return e;
    let r = e;
    return (
      O.isTelegram() &&
        (O.isIos() && (r = r.filter((t) => t !== "google")),
        O.isMac() && (r = r.filter((t) => t !== "x")),
        O.isAndroid() && (r = r.filter((t) => !["facebook", "x"].includes(t)))),
      O.isMobile() && (r = r.filter((t) => t !== "facebook")),
      r
    );
  },
  isSocialsEnabled() {
    return (
      (Array.isArray(x.state.features?.socials) &&
        x.state.features?.socials.length > 0) ||
      (Array.isArray(x.state.remoteFeatures?.socials) &&
        x.state.remoteFeatures?.socials.length > 0)
    );
  },
  isEmailEnabled() {
    return !!(x.state.features?.email || x.state.remoteFeatures?.email);
  },
};
var De = Object.freeze({
    message: "",
    variant: "success",
    svg: void 0,
    open: !1,
    autoClose: !0,
  }),
  ie = V(l({}, De)),
  hs = {
    state: ie,
    subscribeKey(e, r) {
      return J(ie, e, r);
    },
    showLoading(e, r = {}) {
      this._showMessage(l({ message: e, variant: "loading" }, r));
    },
    showSuccess(e) {
      this._showMessage({ message: e, variant: "success" });
    },
    showSvg(e, r) {
      this._showMessage({ message: e, svg: r });
    },
    showError(e) {
      let r = O.parseError(e);
      this._showMessage({ message: r, variant: "error" });
    },
    hide() {
      (ie.message = De.message),
        (ie.variant = De.variant),
        (ie.svg = De.svg),
        (ie.open = De.open),
        (ie.autoClose = De.autoClose);
    },
    _showMessage({
      message: e,
      svg: r,
      variant: t = "success",
      autoClose: n = De.autoClose,
    }) {
      ie.open
        ? ((ie.open = !1),
          setTimeout(() => {
            (ie.message = e),
              (ie.variant = t),
              (ie.svg = r),
              (ie.open = !0),
              (ie.autoClose = n);
          }, 150))
        : ((ie.message = e),
          (ie.variant = t),
          (ie.svg = r),
          (ie.open = !0),
          (ie.autoClose = n));
    },
  },
  Ue = hs;
var ge = {
    PHANTOM: {
      id: "a797aa35c0fadbfc1a53e7f675162ed5226968b44a19ee3d24385c64d1d3c393",
      url: "https://phantom.app",
    },
    SOLFLARE: {
      id: "1ca0bdd4747578705b1939af023d120677c64fe6ca76add81fda36e350605e79",
      url: "https://solflare.com",
    },
    COINBASE: {
      id: "fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",
      url: "https://go.cb-w.com",
    },
    BINANCE: {
      id: "2fafea35bb471d22889ccb49c08d99dd0a18a37982602c33f696a5723934ba25",
      appId: "yFK5FCqYprrXDiVFbhyRx7",
      deeplink: "bnc://app.binance.com/mp/app",
      url: "https://app.binance.com/en/download",
    },
  },
  Lr = {
    handleMobileDeeplinkRedirect(e, r) {
      let t = window.location.href,
        n = encodeURIComponent(t);
      if (e === ge.PHANTOM.id && !("phantom" in window)) {
        let a = t.startsWith("https") ? "https" : "http",
          s = t.split("/")[2],
          o = encodeURIComponent(`${a}://${s}`);
        window.location.href = `${ge.PHANTOM.url}/ul/browse/${n}?ref=${o}`;
      }
      if (
        (e === ge.SOLFLARE.id &&
          !("solflare" in window) &&
          (window.location.href = `${ge.SOLFLARE.url}/ul/v1/browse/${n}?ref=${n}`),
        r === k.CHAIN.SOLANA &&
          e === ge.COINBASE.id &&
          !("coinbaseSolana" in window) &&
          (window.location.href = `${ge.COINBASE.url}/dapp?cb_url=${n}`),
        r === k.CHAIN.BITCOIN &&
          e === ge.BINANCE.id &&
          !("binancew3w" in window))
      ) {
        let a = p.state.activeCaipNetwork,
          s = window.btoa("/pages/browser/index"),
          o = window.btoa(`url=${n}&defaultChainId=${a?.id ?? 1}`),
          c = new URL(ge.BINANCE.deeplink);
        c.searchParams.set("appId", ge.BINANCE.appId),
          c.searchParams.set("startPagePath", s),
          c.searchParams.set("startPageQuery", o);
        let d = new URL(ge.BINANCE.url);
        d.searchParams.set("_dp", window.btoa(c.toString())),
          (window.location.href = d.toString());
      }
    },
  };
var Cs = Object.freeze({ enabled: !0, events: [] }),
  _s = new Ne({ baseUrl: O.getAnalyticsUrl(), clientId: null }),
  gs = 5,
  Es = 60 * 1e3,
  Pe = V(l({}, Cs)),
  Mr = {
    state: Pe,
    subscribeKey(e, r) {
      return J(Pe, e, r);
    },
    sendError(e, r) {
      return u(this, null, function* () {
        if (!Pe.enabled) return;
        let t = Date.now();
        if (
          Pe.events.filter((s) => {
            let o = new Date(s.properties.timestamp || "").getTime();
            return t - o < Es;
          }).length >= gs
        )
          return;
        let a = {
          type: "error",
          event: r,
          properties: {
            errorType: e.name,
            errorMessage: e.message,
            stackTrace: e.stack,
            timestamp: new Date().toISOString(),
          },
        };
        Pe.events.push(a);
        try {
          if (typeof window > "u") return;
          let { projectId: s, sdkType: o, sdkVersion: c } = x.state;
          yield _s.post({
            path: "/e",
            params: { projectId: s, st: o, sv: c || "html-wagmi-4.2.2" },
            body: {
              eventId: O.getUUID(),
              url: window.location.href,
              domain: window.location.hostname,
              timestamp: new Date().toISOString(),
              props: {
                type: "error",
                event: r,
                errorType: e.name,
                errorMessage: e.message,
                stackTrace: e.stack,
              },
            },
          });
        } catch {}
      });
    },
    enable() {
      Pe.enabled = !0;
    },
    disable() {
      Pe.enabled = !1;
    },
    clearEvents() {
      Pe.events = [];
    },
  };
var Fe = class e extends Error {
  constructor(r, t, n) {
    super(r),
      (this.originalName = "AppKitError"),
      (this.name = "AppKitError"),
      (this.category = t),
      (this.originalError = n),
      n && n instanceof Error && (this.originalName = n.name),
      Object.setPrototypeOf(this, e.prototype);
    let a = !1;
    if (n instanceof Error && typeof n.stack == "string" && n.stack) {
      let s = n.stack,
        o = s.indexOf(`
`);
      if (o > -1) {
        let c = s.substring(o + 1);
        (this.stack = `${this.name}: ${this.message}
${c}`),
          (a = !0);
      }
    }
    a ||
      (Error.captureStackTrace
        ? Error.captureStackTrace(this, e)
        : this.stack || (this.stack = `${this.name}: ${this.message}`));
  }
};
function Dr(e, r) {
  let t = "";
  try {
    e instanceof Error
      ? (t = e.message)
      : typeof e == "string"
      ? (t = e)
      : typeof e == "object" && e !== null
      ? Object.keys(e).length === 0
        ? (t = "Unknown error")
        : (t = e?.message || JSON.stringify(e))
      : (t = String(e));
  } catch (a) {
    (t = "Unknown error"), console.error("Error parsing error message", a);
  }
  let n = e instanceof Fe ? e : new Fe(t, r, e);
  throw (Mr.sendError(n, n.category), n);
}
function ce(e, r = "INTERNAL_SDK_ERROR") {
  let t = {};
  return (
    Object.keys(e).forEach((n) => {
      let a = e[n];
      if (typeof a == "function") {
        let s = a;
        a.constructor.name === "AsyncFunction"
          ? (s = (...o) =>
              u(this, null, function* () {
                try {
                  return yield a(...o);
                } catch (c) {
                  return Dr(c, r);
                }
              }))
          : (s = (...o) => {
              try {
                return a(...o);
              } catch (c) {
                return Dr(c, r);
              }
            }),
          (t[n] = s);
      } else t[n] = a;
    }),
    t
  );
}
var Ee = V({
    walletImages: {},
    networkImages: {},
    chainImages: {},
    connectorImages: {},
    tokenImages: {},
    currencyImages: {},
  }),
  ys = {
    state: Ee,
    subscribeNetworkImages(e) {
      return X(Ee.networkImages, () => e(Ee.networkImages));
    },
    subscribeKey(e, r) {
      return J(Ee, e, r);
    },
    subscribe(e) {
      return X(Ee, () => e(Ee));
    },
    setWalletImage(e, r) {
      Ee.walletImages[e] = r;
    },
    setNetworkImage(e, r) {
      Ee.networkImages[e] = r;
    },
    setChainImage(e, r) {
      Ee.chainImages[e] = r;
    },
    setConnectorImage(e, r) {
      Ee.connectorImages = h(l({}, Ee.connectorImages), { [e]: r });
    },
    setTokenImage(e, r) {
      Ee.tokenImages[e] = r;
    },
    setCurrencyImage(e, r) {
      Ee.currencyImages[e] = r;
    },
  },
  fe = ce(ys);
var As = {
    eip155: "ba0ba0cd-17c6-4806-ad93-f9d174f17900",
    solana: "a1b58899-f671-4276-6a5e-56ca5bd59700",
    polkadot: "",
    bip122: "0b4838db-0161-4ffe-022d-532bf03dba00",
    cosmos: "",
    sui: "",
    stacks: "",
  },
  zt = V({ networkImagePromises: {} }),
  Fr = {
    fetchWalletImage(e) {
      return u(this, null, function* () {
        if (e) return yield U._fetchWalletImage(e), this.getWalletImageById(e);
      });
    },
    fetchNetworkImage(e) {
      return u(this, null, function* () {
        if (!e) return;
        let r = this.getNetworkImageById(e);
        return (
          r ||
          (zt.networkImagePromises[e] ||
            (zt.networkImagePromises[e] = U._fetchNetworkImage(e)),
          yield zt.networkImagePromises[e],
          this.getNetworkImageById(e))
        );
      });
    },
    getWalletImageById(e) {
      if (e) return fe.state.walletImages[e];
    },
    getWalletImage(e) {
      if (e?.image_url) return e?.image_url;
      if (e?.image_id) return fe.state.walletImages[e.image_id];
    },
    getNetworkImage(e) {
      if (e?.assets?.imageUrl) return e?.assets?.imageUrl;
      if (e?.assets?.imageId) return fe.state.networkImages[e.assets.imageId];
    },
    getNetworkImageById(e) {
      if (e) return fe.state.networkImages[e];
    },
    getConnectorImage(e) {
      if (e?.imageUrl) return e.imageUrl;
      if (e?.info?.icon) return e.info.icon;
      if (e?.imageId) return fe.state.connectorImages[e.imageId];
    },
    getChainImage(e) {
      return fe.state.networkImages[As[e]];
    },
    getTokenImage(e) {
      if (e) return fe.state.tokenImages[e];
    },
  };
var ws = O.getAnalyticsUrl(),
  Ss = new Ne({ baseUrl: ws, clientId: null }),
  Ns = ["MODAL_CREATED"],
  Ts = 45,
  Br = 1e3 * 10,
  oe = V({
    timestamp: Date.now(),
    lastFlush: Date.now(),
    reportedErrors: {},
    data: { type: "track", event: "MODAL_CREATED" },
    pendingEvents: [],
    subscribedToVisibilityChange: !1,
    walletImpressions: [],
  }),
  K = {
    state: oe,
    subscribe(e) {
      return X(oe, () => e(oe));
    },
    getSdkProperties() {
      let { projectId: e, sdkType: r, sdkVersion: t } = x.state;
      return { projectId: e, st: r, sv: t || "html-wagmi-4.2.2" };
    },
    shouldFlushEvents() {
      let e = JSON.stringify(oe.pendingEvents).length / 1024 > Ts,
        r = oe.lastFlush + Br < Date.now();
      return e || r;
    },
    _setPendingEvent(e) {
      try {
        let r = p.getAccountData()?.address;
        if (
          ("address" in e.data && e.data.address && (r = e.data.address),
          Ns.includes(e.data.event) || typeof window > "u")
        )
          return;
        let t = p.getActiveCaipNetwork()?.caipNetworkId;
        this.state.pendingEvents.push({
          eventId: O.getUUID(),
          url: window.location.href,
          domain: window.location.hostname,
          timestamp: e.timestamp,
          props: h(l({}, e.data), {
            address: r,
            properties: h(
              l({}, "properties" in e.data ? e.data.properties : {}),
              { caipNetworkId: t }
            ),
          }),
        }),
          (oe.reportedErrors.FORBIDDEN = !1),
          K.shouldFlushEvents() && K._submitPendingEvents();
      } catch (r) {
        console.warn("_setPendingEvent", r);
      }
    },
    sendEvent(e) {
      (oe.timestamp = Date.now()), (oe.data = e);
      let r = ["INITIALIZE", "CONNECT_SUCCESS", "SOCIAL_LOGIN_SUCCESS"];
      (x.state.features?.analytics || r.includes(e.event)) &&
        K._setPendingEvent(oe),
        this.subscribeToFlushTriggers();
    },
    sendWalletImpressionEvent(e) {
      oe.walletImpressions.push(e);
    },
    _transformPendingEventsForBatch(e) {
      try {
        return e.filter((r) => r.props.event !== "WALLET_IMPRESSION_V2");
      } catch {
        return e;
      }
    },
    _submitPendingEvents() {
      if (
        ((oe.lastFlush = Date.now()),
        !(oe.pendingEvents.length === 0 && oe.walletImpressions.length === 0))
      )
        try {
          let e = K._transformPendingEventsForBatch(oe.pendingEvents);
          oe.walletImpressions.length &&
            e.push({
              eventId: O.getUUID(),
              url: window.location.href,
              domain: window.location.hostname,
              timestamp: Date.now(),
              props: {
                type: "track",
                event: "WALLET_IMPRESSION_V2",
                items: [...oe.walletImpressions],
              },
            }),
            Ss.sendBeacon({
              path: "/batch",
              params: K.getSdkProperties(),
              body: e,
            }),
            (oe.reportedErrors.FORBIDDEN = !1),
            (oe.pendingEvents = []),
            (oe.walletImpressions = []);
        } catch {
          oe.reportedErrors.FORBIDDEN = !0;
        }
    },
    subscribeToFlushTriggers() {
      oe.subscribedToVisibilityChange ||
        typeof document > "u" ||
        ((oe.subscribedToVisibilityChange = !0),
        document?.addEventListener?.("visibilitychange", () => {
          document.visibilityState === "hidden" && K._submitPendingEvents();
        }),
        document?.addEventListener?.("freeze", () => {
          K._submitPendingEvents();
        }),
        window?.addEventListener?.("pagehide", () => {
          K._submitPendingEvents();
        }),
        setInterval(() => {
          K._submitPendingEvents();
        }, Br));
    },
  };
var Rs = O.getApiUrl(),
  ue = new Ne({ baseUrl: Rs, clientId: null }),
  vs = 40,
  Wr = 4,
  Is = 20,
  M = V({
    promises: {},
    page: 1,
    count: 0,
    featured: [],
    allFeatured: [],
    recommended: [],
    allRecommended: [],
    wallets: [],
    filteredWallets: [],
    search: [],
    isAnalyticsEnabled: !1,
    excludedWallets: [],
    isFetchingRecommendedWallets: !1,
    explorerWallets: [],
    explorerFilteredWallets: [],
    plan: {
      tier: "none",
      hasExceededUsageLimit: !1,
      limits: { isAboveRpcLimit: !1, isAboveMauLimit: !1 },
    },
  }),
  U = {
    state: M,
    subscribeKey(e, r) {
      return J(M, e, r);
    },
    _getSdkProperties() {
      let { projectId: e, sdkType: r, sdkVersion: t } = x.state;
      return { projectId: e, st: r || "appkit", sv: t || "html-wagmi-4.2.2" };
    },
    _filterOutExtensions(e) {
      return x.state.isUniversalProvider
        ? e.filter((r) => !!(r.mobile_link || r.desktop_link || r.webapp_link))
        : e;
    },
    _fetchWalletImage(e) {
      return u(this, null, function* () {
        let r = `${ue.baseUrl}/getWalletImage/${e}`,
          t = yield ue.getBlob({ path: r, params: U._getSdkProperties() });
        fe.setWalletImage(e, URL.createObjectURL(t));
      });
    },
    _fetchNetworkImage(e) {
      return u(this, null, function* () {
        let r = `${ue.baseUrl}/public/getAssetImage/${e}`,
          t = yield ue.getBlob({ path: r, params: U._getSdkProperties() });
        fe.setNetworkImage(e, URL.createObjectURL(t));
      });
    },
    _fetchConnectorImage(e) {
      return u(this, null, function* () {
        let r = `${ue.baseUrl}/public/getAssetImage/${e}`,
          t = yield ue.getBlob({ path: r, params: U._getSdkProperties() });
        fe.setConnectorImage(e, URL.createObjectURL(t));
      });
    },
    _fetchCurrencyImage(e) {
      return u(this, null, function* () {
        let r = `${ue.baseUrl}/public/getCurrencyImage/${e}`,
          t = yield ue.getBlob({ path: r, params: U._getSdkProperties() });
        fe.setCurrencyImage(e, URL.createObjectURL(t));
      });
    },
    _fetchTokenImage(e) {
      return u(this, null, function* () {
        let r = `${ue.baseUrl}/public/getTokenImage/${e}`,
          t = yield ue.getBlob({ path: r, params: U._getSdkProperties() });
        fe.setTokenImage(e, URL.createObjectURL(t));
      });
    },
    _filterWalletsByPlatform(e) {
      let r = e.length,
        t = O.isMobile()
          ? e?.filter((a) =>
              a.mobile_link || a.webapp_link
                ? !0
                : Object.values(ge)
                    .map((o) => o.id)
                    .includes(a.id)
            )
          : e,
        n = r - t.length;
      return { filteredWallets: t, mobileFilteredOutWalletsLength: n };
    },
    fetchProjectConfig() {
      return u(this, null, function* () {
        return (yield ue.get({
          path: "/appkit/v1/config",
          params: U._getSdkProperties(),
        })).features;
      });
    },
    fetchUsage() {
      return u(this, null, function* () {
        try {
          let e = yield ue.get({
              path: "/appkit/v1/project-limits",
              params: U._getSdkProperties(),
            }),
            { tier: r, isAboveMauLimit: t, isAboveRpcLimit: n } = e.planLimits,
            a = r === "starter",
            s = t || n;
          U.state.plan = {
            tier: r,
            hasExceededUsageLimit: a && s,
            limits: { isAboveRpcLimit: n, isAboveMauLimit: t },
          };
        } catch (e) {
          console.warn("Failed to fetch usage", e);
        }
      });
    },
    fetchAllowedOrigins() {
      return u(this, null, function* () {
        try {
          let { allowedOrigins: e } = yield ue.get({
            path: "/projects/v1/origins",
            params: U._getSdkProperties(),
          });
          return e;
        } catch (e) {
          if (e instanceof Error && e.cause instanceof Response) {
            let r = e.cause.status;
            if (r === k.HTTP_STATUS_CODES.TOO_MANY_REQUESTS)
              throw new Error("RATE_LIMITED", { cause: e });
            if (r >= k.HTTP_STATUS_CODES.SERVER_ERROR && r < 600)
              throw new Error("SERVER_ERROR", { cause: e });
            return [];
          }
          return [];
        }
      });
    },
    fetchNetworkImages() {
      return u(this, null, function* () {
        let r = p
          .getAllRequestedCaipNetworks()
          ?.map(({ assets: t }) => t?.imageId)
          .filter(Boolean)
          .filter((t) => !Fr.getNetworkImageById(t));
        r && (yield Promise.allSettled(r.map((t) => U._fetchNetworkImage(t))));
      });
    },
    fetchConnectorImages() {
      return u(this, null, function* () {
        let { connectors: e } = I.state,
          r = e.map(({ imageId: t }) => t).filter(Boolean);
        yield Promise.allSettled(r.map((t) => U._fetchConnectorImage(t)));
      });
    },
    fetchCurrencyImages() {
      return u(this, arguments, function* (e = []) {
        yield Promise.allSettled(e.map((r) => U._fetchCurrencyImage(r)));
      });
    },
    fetchTokenImages() {
      return u(this, arguments, function* (e = []) {
        yield Promise.allSettled(e.map((r) => U._fetchTokenImage(r)));
      });
    },
    fetchWallets(e) {
      return u(this, null, function* () {
        let r = e.exclude ?? [];
        U._getSdkProperties().sv.startsWith("html-core-") &&
          r.push(...Object.values(ge).map((o) => o.id));
        let n = yield ue.get({
            path: "/getWallets",
            params: h(l(l({}, U._getSdkProperties()), e), {
              page: String(e.page),
              entries: String(e.entries),
              include: e.include?.join(","),
              exclude: r.join(","),
            }),
          }),
          { filteredWallets: a, mobileFilteredOutWalletsLength: s } =
            U._filterWalletsByPlatform(n?.data);
        return {
          data: a || [],
          count: n?.count,
          mobileFilteredOutWalletsLength: s,
        };
      });
    },
    prefetchWalletRanks() {
      return u(this, null, function* () {
        let e = I.state.connectors;
        if (!e?.length) return;
        let r = { page: 1, entries: 20, badge: "certified" };
        if (
          ((r.names = e.map((a) => a.name).join(",")),
          p.state.activeChain === k.CHAIN.EVM)
        ) {
          let a = [
            ...e.flatMap((s) => s.connectors?.map((o) => o.info?.rdns) || []),
            ...e.map((s) => s.info?.rdns),
          ].filter((s) => typeof s == "string" && s.length > 0);
          a.length && (r.rdns = a.join(","));
        }
        let { data: t } = yield U.fetchWallets(r);
        M.explorerWallets = t;
        let n = p.getRequestedCaipNetworkIds().join(",");
        M.explorerFilteredWallets = t.filter((a) =>
          a.chains?.some((s) => n.includes(s))
        );
      });
    },
    fetchFeaturedWallets() {
      return u(this, null, function* () {
        let { featuredWalletIds: e } = x.state;
        if (e?.length) {
          let r = h(l({}, U._getSdkProperties()), {
              page: 1,
              entries: e?.length ?? Wr,
              include: e,
            }),
            { data: t } = yield U.fetchWallets(r),
            n = [...t].sort((s, o) => e.indexOf(s.id) - e.indexOf(o.id)),
            a = n.map((s) => s.image_id).filter(Boolean);
          yield Promise.allSettled(a.map((s) => U._fetchWalletImage(s))),
            (M.featured = n),
            (M.allFeatured = n);
        }
      });
    },
    fetchRecommendedWallets() {
      return u(this, null, function* () {
        try {
          M.isFetchingRecommendedWallets = !0;
          let {
              includeWalletIds: e,
              excludeWalletIds: r,
              featuredWalletIds: t,
            } = x.state,
            n = [...(r ?? []), ...(t ?? [])].filter(Boolean),
            a = p.getRequestedCaipNetworkIds().join(","),
            s = { page: 1, entries: Wr, include: e, exclude: n, chains: a },
            { data: o, count: c } = yield U.fetchWallets(s),
            d = E.getRecentWallets(),
            m = o.map((g) => g.image_id).filter(Boolean),
            f = d.map((g) => g.image_id).filter(Boolean);
          yield Promise.allSettled(
            [...m, ...f].map((g) => U._fetchWalletImage(g))
          ),
            (M.recommended = o),
            (M.allRecommended = o),
            (M.count = c ?? 0);
        } catch {
        } finally {
          M.isFetchingRecommendedWallets = !1;
        }
      });
    },
    fetchWalletsByPage(r) {
      return u(this, arguments, function* ({ page: e }) {
        let {
            includeWalletIds: t,
            excludeWalletIds: n,
            featuredWalletIds: a,
          } = x.state,
          s = p.getRequestedCaipNetworkIds().join(","),
          o = [
            ...M.recommended.map(({ id: Z }) => Z),
            ...(n ?? []),
            ...(a ?? []),
          ].filter(Boolean),
          c = { page: e, entries: vs, include: t, exclude: o, chains: s },
          {
            data: d,
            count: m,
            mobileFilteredOutWalletsLength: f,
          } = yield U.fetchWallets(c);
        M.mobileFilteredOutWalletsLength =
          f + (M.mobileFilteredOutWalletsLength ?? 0);
        let g = d
          .slice(0, Is)
          .map((Z) => Z.image_id)
          .filter(Boolean);
        yield Promise.allSettled(g.map((Z) => U._fetchWalletImage(Z))),
          (M.wallets = O.uniqueBy(
            [...M.wallets, ...U._filterOutExtensions(d)],
            "id"
          ).filter((Z) => Z.chains?.some((ne) => s.includes(ne)))),
          (M.count = m > M.count ? m : M.count),
          (M.page = e);
      });
    },
    initializeExcludedWallets(r) {
      return u(this, arguments, function* ({ ids: e }) {
        let t = { page: 1, entries: e.length, include: e },
          { data: n } = yield U.fetchWallets(t);
        n &&
          n.forEach((a) => {
            M.excludedWallets.push({ rdns: a.rdns, name: a.name });
          });
      });
    },
    searchWallet(t) {
      return u(this, arguments, function* ({ search: e, badge: r }) {
        let { includeWalletIds: n, excludeWalletIds: a } = x.state,
          s = p.getRequestedCaipNetworkIds().join(",");
        M.search = [];
        let o = {
            page: 1,
            entries: 100,
            search: e?.trim(),
            badge_type: r,
            include: n,
            exclude: a,
            chains: s,
          },
          { data: c } = yield U.fetchWallets(o);
        K.sendEvent({
          type: "track",
          event: "SEARCH_WALLET",
          properties: { badge: r ?? "", search: e ?? "" },
        });
        let d = c.map((m) => m.image_id).filter(Boolean);
        yield Promise.allSettled([
          ...d.map((m) => U._fetchWalletImage(m)),
          O.wait(300),
        ]),
          (M.search = U._filterOutExtensions(c));
      });
    },
    initPromise(e, r) {
      let t = M.promises[e];
      return t || (M.promises[e] = r());
    },
    prefetch({
      fetchConnectorImages: e = !0,
      fetchFeaturedWallets: r = !0,
      fetchRecommendedWallets: t = !0,
      fetchNetworkImages: n = !0,
      fetchWalletRanks: a = !0,
    } = {}) {
      let s = [
        e && U.initPromise("connectorImages", U.fetchConnectorImages),
        r && U.initPromise("featuredWallets", U.fetchFeaturedWallets),
        t && U.initPromise("recommendedWallets", U.fetchRecommendedWallets),
        n && U.initPromise("networkImages", U.fetchNetworkImages),
        a && U.initPromise("walletRanks", U.prefetchWalletRanks),
      ].filter(Boolean);
      return Promise.allSettled(s);
    },
    prefetchAnalyticsConfig() {
      x.state.features?.analytics && U.fetchAnalyticsConfig();
    },
    fetchAnalyticsConfig() {
      return u(this, null, function* () {
        try {
          let { isAnalyticsEnabled: e } = yield ue.get({
            path: "/getAnalyticsConfig",
            params: U._getSdkProperties(),
          });
          x.setFeatures({ analytics: e });
        } catch {
          x.setFeatures({ analytics: !1 });
        }
      });
    },
    filterByNamespaces(e) {
      if (!e?.length) {
        (M.featured = M.allFeatured), (M.recommended = M.allRecommended);
        return;
      }
      let r = p.getRequestedCaipNetworkIds().join(",");
      (M.featured = M.allFeatured.filter((t) =>
        t.chains?.some((n) => r.includes(n))
      )),
        (M.recommended = M.allRecommended.filter((t) =>
          t.chains?.some((n) => r.includes(n))
        )),
        (M.filteredWallets = M.wallets.filter((t) =>
          t.chains?.some((n) => r.includes(n))
        ));
    },
    clearFilterByNamespaces() {
      M.filteredWallets = [];
    },
    setFilterByNamespace(e) {
      if (!e) {
        (M.featured = M.allFeatured), (M.recommended = M.allRecommended);
        return;
      }
      let r = p.getRequestedCaipNetworkIds().join(",");
      (M.featured = M.allFeatured.filter((t) =>
        t.chains?.some((n) => r.includes(n))
      )),
        (M.recommended = M.allRecommended.filter((t) =>
          t.chains?.some((n) => r.includes(n))
        )),
        (M.filteredWallets = M.wallets.filter((t) =>
          t.chains?.some((n) => r.includes(n))
        ));
    },
  };
var jr = {
  onSwitchNetwork({ network: e, ignoreSwitchConfirmation: r = !1 }) {
    let t = p.state.activeCaipNetwork,
      n = p.state.activeChain,
      a = B.state.data;
    if (e.id === t?.id) return;
    let o = !!p.getAccountData(n)?.address,
      c = !!p.getAccountData(e.chainNamespace)?.address,
      d = e.chainNamespace !== n,
      f = I.getConnectorId(n) === k.CONNECTOR_ID.AUTH,
      g = k.AUTH_CONNECTOR_SUPPORTED_CHAINS.find((Z) => Z === e.chainNamespace);
    r || (f && g)
      ? B.push("SwitchNetwork", h(l({}, a), { network: e }))
      : o && d && !c
      ? B.push("SwitchActiveChain", {
          switchToChain: e.chainNamespace,
          navigateTo: "Connect",
          navigateWithReplace: !0,
          network: e,
        })
      : B.push("SwitchNetwork", h(l({}, a), { network: e }));
  },
};
var Ze = V({
    loading: !1,
    open: !1,
    selectedNetworkId: void 0,
    activeChain: void 0,
    initialized: !1,
  }),
  be = {
    state: Ze,
    subscribe(e) {
      return X(Ze, () => e(Ze));
    },
    subscribeOpen(e) {
      return J(Ze, "open", e);
    },
    set(e) {
      Object.assign(Ze, l(l({}, Ze), e));
    },
  };
var he = V({
    loading: !1,
    loadingNamespaceMap: new Map(),
    open: !1,
    shake: !1,
    namespace: void 0,
  }),
  bs = {
    state: he,
    subscribe(e) {
      return X(he, () => e(he));
    },
    subscribeKey(e, r) {
      return J(he, e, r);
    },
    open(e) {
      return u(this, null, function* () {
        let r = e?.namespace,
          t = p.state.activeChain,
          n = r && r !== t,
          a = p.getAccountData(e?.namespace)?.caipAddress,
          s = p.state.noAdapters;
        if (
          (b.state.wcBasic
            ? U.prefetch({
                fetchNetworkImages: !1,
                fetchConnectorImages: !1,
                fetchWalletRanks: !1,
              })
            : yield U.prefetch(),
          I.setFilterByNamespace(e?.namespace),
          ee.setLoading(!0, r),
          r && n)
        ) {
          let o =
            p.getNetworkData(r)?.caipNetwork ||
            p.getRequestedCaipNetworks(r)[0];
          o &&
            (s
              ? (yield p.switchActiveNetwork(o),
                B.push("ConnectingWalletConnectBasic"))
              : jr.onSwitchNetwork({
                  network: o,
                  ignoreSwitchConfirmation: !0,
                }));
        } else x.state.manualWCControl || (s && !a) ? (O.isMobile() ? B.reset("AllWallets") : B.reset("ConnectingWalletConnectBasic")) : e?.view ? B.reset(e.view, e.data) : a ? B.reset("Account") : B.reset("Connect");
        (he.open = !0),
          be.set({ open: !0 }),
          K.sendEvent({
            type: "track",
            event: "MODAL_OPEN",
            properties: { connected: !!a },
          });
      });
    },
    close() {
      let e = x.state.enableEmbedded,
        r = !!p.state.activeCaipAddress;
      he.open &&
        K.sendEvent({
          type: "track",
          event: "MODAL_CLOSE",
          properties: { connected: r },
        }),
        (he.open = !1),
        B.reset("Connect"),
        ee.clearLoading(),
        e
          ? r
            ? B.replace("Account")
            : B.push("Connect")
          : be.set({ open: !1 }),
        b.resetUri();
    },
    setLoading(e, r) {
      r && he.loadingNamespaceMap.set(r, e),
        (he.loading = e),
        be.set({ loading: e });
    },
    clearLoading() {
      he.loadingNamespaceMap.clear(),
        (he.loading = !1),
        be.set({ loading: !1 });
    },
    shake() {
      he.shake ||
        ((he.shake = !0),
        setTimeout(() => {
          he.shake = !1;
        }, 500));
    },
  },
  ee = ce(bs);
var ks = [
    "ConnectingExternal",
    "ConnectingMultiChain",
    "ConnectingSocial",
    "ConnectingFarcaster",
  ],
  z = V({ view: "Connect", history: ["Connect"], transactionStack: [] }),
  Os = {
    state: z,
    subscribeKey(e, r) {
      return J(z, e, r);
    },
    pushTransactionStack(e) {
      z.transactionStack.push(e);
    },
    popTransactionStack(e) {
      let r = z.transactionStack.pop();
      if (!r) return;
      let { onSuccess: t, onError: n, onCancel: a } = r;
      switch (e) {
        case "success":
          t?.();
          break;
        case "error":
          n?.(), B.goBack();
          break;
        case "cancel":
          a?.(), B.goBack();
          break;
        default:
      }
    },
    push(e, r) {
      let t = e,
        n = r;
      U.state.plan.hasExceededUsageLimit &&
        ks.includes(e) &&
        ((t = "UsageExceeded"), (n = void 0)),
        t !== z.view && ((z.view = t), z.history.push(t), (z.data = n));
    },
    reset(e, r) {
      (z.view = e), (z.history = [e]), (z.data = r);
    },
    replace(e, r) {
      z.history.at(-1) === e ||
        ((z.view = e), (z.history[z.history.length - 1] = e), (z.data = r));
    },
    goBack() {
      let e = p.state.activeCaipAddress,
        r = B.state.view === "ConnectingFarcaster",
        t = !e && r;
      if (z.history.length > 1) {
        z.history.pop();
        let [n] = z.history.slice(-1);
        n && (e && n === "Connect" ? (z.view = "Account") : (z.view = n));
      } else ee.close();
      z.data?.wallet && (z.data.wallet = void 0),
        z.data?.redirectView && (z.data.redirectView = void 0),
        setTimeout(() => {
          if (t) {
            p.setAccountProp("farcasterUrl", void 0, p.state.activeChain);
            let n = I.getAuthConnector();
            n?.provider?.reload();
            let a = Re(x.state);
            n?.provider?.syncDappData?.({
              metadata: a.metadata,
              sdkVersion: a.sdkVersion,
              projectId: a.projectId,
              sdkType: a.sdkType,
            });
          }
        }, 100);
    },
    goBackToIndex(e) {
      if (z.history.length > 1) {
        z.history = z.history.slice(0, e + 1);
        let [r] = z.history.slice(-1);
        r && (z.view = r);
      }
    },
    goBackOrCloseModal() {
      B.state.history.length > 1 ? B.goBack() : ee.close();
    },
  },
  B = ce(Os);
var ke = V({
    themeMode: "dark",
    themeVariables: {},
    w3mThemeVariables: void 0,
  }),
  Jt = {
    state: ke,
    subscribe(e) {
      return X(ke, () => e(ke));
    },
    setThemeMode(e) {
      ke.themeMode = e;
      try {
        let r = I.getAuthConnector();
        if (r) {
          let t = Jt.getSnapshot().themeVariables;
          r.provider.syncTheme({
            themeMode: e,
            themeVariables: t,
            w3mThemeVariables: je(t, e),
          });
        }
      } catch {
        console.info("Unable to sync theme to auth connector");
      }
    },
    setThemeVariables(e) {
      ke.themeVariables = l(l({}, ke.themeVariables), e);
      try {
        let r = I.getAuthConnector();
        if (r) {
          let t = Jt.getSnapshot().themeVariables;
          r.provider.syncTheme({
            themeVariables: t,
            w3mThemeVariables: je(ke.themeVariables, ke.themeMode),
          });
        }
      } catch {
        console.info("Unable to sync theme to auth connector");
      }
    },
    getSnapshot() {
      return Re(ke);
    },
  },
  rt = ce(Jt);
var Hr = Object.fromEntries(bt.map((e) => [e, void 0])),
  Us = Object.fromEntries(bt.map((e) => [e, !0])),
  Y = V({
    allConnectors: [],
    connectors: [],
    activeConnector: void 0,
    filterByNamespace: void 0,
    activeConnectorIds: Hr,
    filterByNamespaceMap: Us,
  }),
  Ps = {
    state: Y,
    subscribe(e) {
      return X(Y, () => {
        e(Y);
      });
    },
    subscribeKey(e, r) {
      return J(Y, e, r);
    },
    initialize(e) {
      e.forEach((r) => {
        let t = E.getConnectedConnectorId(r);
        t && I.setConnectorId(t, r);
      });
    },
    setActiveConnector(e) {
      e && (Y.activeConnector = ve(e));
    },
    setConnectors(e) {
      e.filter(
        (a) =>
          !Y.allConnectors.some(
            (s) =>
              s.id === a.id &&
              I.getConnectorName(s.name) === I.getConnectorName(a.name) &&
              s.chain === a.chain
          )
      ).forEach((a) => {
        a.type !== "MULTI_CHAIN" && Y.allConnectors.push(ve(a));
      });
      let t = I.getEnabledNamespaces(),
        n = I.getEnabledConnectors(t);
      Y.connectors = I.mergeMultiChainConnectors(n);
    },
    filterByNamespaces(e) {
      Object.keys(Y.filterByNamespaceMap).forEach((r) => {
        Y.filterByNamespaceMap[r] = !1;
      }),
        e.forEach((r) => {
          Y.filterByNamespaceMap[r] = !0;
        }),
        I.updateConnectorsForEnabledNamespaces();
    },
    filterByNamespace(e, r) {
      (Y.filterByNamespaceMap[e] = r), I.updateConnectorsForEnabledNamespaces();
    },
    updateConnectorsForEnabledNamespaces() {
      let e = I.getEnabledNamespaces(),
        r = I.getEnabledConnectors(e),
        t = I.areAllNamespacesEnabled();
      (Y.connectors = I.mergeMultiChainConnectors(r)),
        t ? U.clearFilterByNamespaces() : U.filterByNamespaces(e);
    },
    getEnabledNamespaces() {
      return Object.entries(Y.filterByNamespaceMap)
        .filter(([e, r]) => r)
        .map(([e]) => e);
    },
    getEnabledConnectors(e) {
      return Y.allConnectors.filter((r) => e.includes(r.chain));
    },
    areAllNamespacesEnabled() {
      return Object.values(Y.filterByNamespaceMap).every((e) => e);
    },
    mergeMultiChainConnectors(e) {
      let r = I.generateConnectorMapByName(e),
        t = [];
      return (
        r.forEach((n) => {
          let a = n[0],
            s = a?.id === k.CONNECTOR_ID.AUTH;
          n.length > 1 && a
            ? t.push({
                name: a.name,
                imageUrl: a.imageUrl,
                imageId: a.imageId,
                connectors: [...n],
                type: s ? "AUTH" : "MULTI_CHAIN",
                chain: "eip155",
                id: a?.id || "",
              })
            : a && t.push(a);
        }),
        t
      );
    },
    generateConnectorMapByName(e) {
      let r = new Map();
      return (
        e.forEach((t) => {
          let { name: n } = t,
            a = I.getConnectorName(n);
          if (!a) return;
          let s = r.get(a) || [];
          s.find((c) => c.chain === t.chain) || s.push(t), r.set(a, s);
        }),
        r
      );
    },
    getConnectorName(e) {
      return e && ({ "Trust Wallet": "Trust" }[e] || e);
    },
    getUniqueConnectorsByName(e) {
      let r = [];
      return (
        e.forEach((t) => {
          r.find((n) => n.chain === t.chain) || r.push(t);
        }),
        r
      );
    },
    addConnector(e) {
      if (e.id === k.CONNECTOR_ID.AUTH) {
        let r = e,
          t = Re(x.state),
          n = rt.getSnapshot().themeMode,
          a = rt.getSnapshot().themeVariables;
        r?.provider?.syncDappData?.({
          metadata: t.metadata,
          sdkVersion: t.sdkVersion,
          projectId: t.projectId,
          sdkType: t.sdkType,
        }),
          r?.provider?.syncTheme({
            themeMode: n,
            themeVariables: a,
            w3mThemeVariables: je(a, n),
          }),
          I.setConnectors([e]);
      } else I.setConnectors([e]);
    },
    getAuthConnector(e) {
      let r = e || p.state.activeChain,
        t = Y.connectors.find((n) => n.id === k.CONNECTOR_ID.AUTH);
      if (t)
        return t?.connectors?.length
          ? t.connectors.find((a) => a.chain === r)
          : t;
    },
    getAnnouncedConnectorRdns() {
      return Y.connectors
        .filter((e) => e.type === "ANNOUNCED")
        .map((e) => e.info?.rdns);
    },
    getConnectorById(e) {
      return Y.allConnectors.find((r) => r.id === e);
    },
    getConnector({ id: e, rdns: r, namespace: t }) {
      let n = t || p.state.activeChain;
      return Y.allConnectors
        .filter((s) => s.chain === n)
        .find((s) => s.explorerId === e || s.info?.rdns === r);
    },
    syncIfAuthConnector(e) {
      if (e.id !== "AUTH") return;
      let r = e,
        t = Re(x.state),
        n = rt.getSnapshot().themeMode,
        a = rt.getSnapshot().themeVariables;
      r?.provider?.syncDappData?.({
        metadata: t.metadata,
        sdkVersion: t.sdkVersion,
        sdkType: t.sdkType,
        projectId: t.projectId,
      }),
        r.provider.syncTheme({
          themeMode: n,
          themeVariables: a,
          w3mThemeVariables: je(a, n),
        });
    },
    getConnectorsByNamespace(e) {
      let r = Y.allConnectors.filter((t) => t.chain === e);
      return I.mergeMultiChainConnectors(r);
    },
    canSwitchToSmartAccount(e) {
      return p.checkIfSmartAccountEnabled() && ye(e) === Q.ACCOUNT_TYPES.EOA;
    },
    selectWalletConnector(e) {
      let r = B.state.data?.redirectView,
        t = I.getConnector({ id: e.id, rdns: e.rdns });
      Lr.handleMobileDeeplinkRedirect(
        t?.explorerId || e.id,
        p.state.activeChain
      ),
        t
          ? B.push("ConnectingExternal", {
              connector: t,
              wallet: e,
              redirectView: r,
            })
          : B.push("ConnectingWalletConnect", { wallet: e, redirectView: r });
    },
    getConnectors(e) {
      return e
        ? I.getConnectorsByNamespace(e)
        : I.mergeMultiChainConnectors(Y.allConnectors);
    },
    setFilterByNamespace(e) {
      (Y.filterByNamespace = e),
        (Y.connectors = I.getConnectors(e)),
        U.setFilterByNamespace(e);
    },
    setConnectorId(e, r) {
      e &&
        ((Y.activeConnectorIds = h(l({}, Y.activeConnectorIds), { [r]: e })),
        E.setConnectedConnectorId(r, e));
    },
    removeConnectorId(e) {
      (Y.activeConnectorIds = h(l({}, Y.activeConnectorIds), { [e]: void 0 })),
        E.deleteConnectedConnectorId(e);
    },
    getConnectorId(e) {
      if (e) return Y.activeConnectorIds[e];
    },
    isConnected(e) {
      return e
        ? !!Y.activeConnectorIds[e]
        : Object.values(Y.activeConnectorIds).some((r) => !!r);
    },
    resetConnectorIds() {
      Y.activeConnectorIds = l({}, Hr);
    },
  },
  I = ce(Ps);
var xs = 1e3,
  Ke = {
    checkNamespaceConnectorId(e, r) {
      return I.getConnectorId(e) === r;
    },
    isSocialProvider(e) {
      return te.DEFAULT_REMOTE_FEATURES.socials.includes(e);
    },
    connectWalletConnect({
      walletConnect: e,
      connector: r,
      closeModalOnConnect: t = !0,
      redirectViewOnModalClose: n = "Connect",
      onOpen: a,
      onConnect: s,
    }) {
      return new Promise((o, c) => {
        if ((e && I.setActiveConnector(r), a?.(O.isMobile() && e), n)) {
          let m = ee.subscribeKey("open", (f) => {
            f ||
              (B.state.view !== n && B.replace(n),
              m(),
              c(new Error("Modal closed")));
          });
        }
        let d = p.subscribeKey("activeCaipAddress", (m) => {
          m && (s?.(), t && ee.close(), d(), o(de.parseCaipAddress(m)));
        });
      });
    },
    connectExternal(e) {
      return new Promise((r, t) => {
        let n = p.subscribeKey("activeCaipAddress", (a) => {
          a && (ee.close(), n(), r(de.parseCaipAddress(a)));
        });
        b.connectExternal(e, e.chain).catch(() => {
          n(), t(new Error("Connection rejected"));
        });
      });
    },
    connectSocial({
      social: e,
      namespace: r,
      closeModalOnConnect: t = !0,
      onOpenFarcaster: n,
      onConnect: a,
    }) {
      let s,
        o = !1,
        c = null,
        d = r || p.state.activeChain,
        m = p.subscribeKey("activeCaipAddress", (f) => {
          f && (t && ee.close(), m());
        });
      return new Promise((f, g) => {
        function Z(Ae) {
          return u(this, null, function* () {
            if (Ae.data?.resultUri)
              if (Ae.origin === k.SECURE_SITE_SDK_ORIGIN) {
                window.removeEventListener("message", Z, !1);
                try {
                  let we = I.getAuthConnector(d);
                  if (we && !o) {
                    s && s.close(), (o = !0);
                    let We = Ae.data.resultUri;
                    K.sendEvent({
                      type: "track",
                      event: "SOCIAL_LOGIN_REQUEST_USER_DATA",
                      properties: { provider: e },
                    }),
                      E.setConnectedSocialProvider(e),
                      yield b.connectExternal(
                        { id: we.id, type: we.type, socialUri: We },
                        we.chain
                      );
                    let at = p.state.activeCaipAddress;
                    if (!at) {
                      g(new Error("Failed to connect"));
                      return;
                    }
                    f(de.parseCaipAddress(at)),
                      K.sendEvent({
                        type: "track",
                        event: "SOCIAL_LOGIN_SUCCESS",
                        properties: { provider: e },
                      });
                  }
                } catch (we) {
                  K.sendEvent({
                    type: "track",
                    event: "SOCIAL_LOGIN_ERROR",
                    properties: { provider: e, message: O.parseError(we) },
                  }),
                    g(new Error("Failed to connect"));
                }
              } else
                K.sendEvent({
                  type: "track",
                  event: "SOCIAL_LOGIN_ERROR",
                  properties: { provider: e, message: "Untrusted Origin" },
                });
          });
        }
        function ne() {
          return u(this, null, function* () {
            if (
              (K.sendEvent({
                type: "track",
                event: "SOCIAL_LOGIN_STARTED",
                properties: { provider: e },
              }),
              e === "farcaster")
            ) {
              n?.();
              let Ae = ee.subscribeKey("open", (We) => {
                  !We &&
                    e === "farcaster" &&
                    (g(new Error("Popup closed")), a?.(), Ae());
                }),
                we = I.getAuthConnector();
              if (we && !p.getAccountData(d)?.farcasterUrl)
                try {
                  let { url: at } = yield we.provider.getFarcasterUri();
                  p.setAccountProp("farcasterUrl", at, d);
                } catch {
                  g(new Error("Failed to connect to farcaster"));
                }
            } else {
              let Ae = I.getAuthConnector();
              c = O.returnOpenHref(
                `${k.SECURE_SITE_SDK_ORIGIN}/loading`,
                "popupWindow",
                "width=600,height=800,scrollbars=yes"
              );
              try {
                if (Ae) {
                  let { uri: we } = yield Ae.provider.getSocialRedirectUri({
                    provider: e,
                  });
                  if (c && we) {
                    (c.location.href = we), (s = c);
                    let We = setInterval(() => {
                      s?.closed &&
                        !o &&
                        (g(new Error("Popup closed")), clearInterval(We));
                    }, 1e3);
                    window.addEventListener("message", Z, !1);
                  } else
                    c?.close(),
                      g(new Error("Failed to initiate social connection"));
                }
              } catch {
                g(new Error("Failed to initiate social connection")),
                  c?.close();
              }
            }
          });
        }
        ne();
      });
    },
    connectEmail({
      closeModalOnConnect: e = !0,
      redirectViewOnModalClose: r = "Connect",
      onOpen: t,
      onConnect: n,
    }) {
      return new Promise((a, s) => {
        if ((t?.(), r)) {
          let c = ee.subscribeKey("open", (d) => {
            d ||
              (B.state.view !== r && B.replace(r),
              c(),
              s(new Error("Modal closed")));
          });
        }
        let o = p.subscribeKey("activeCaipAddress", (c) => {
          c && (n?.(), e && ee.close(), o(), a(de.parseCaipAddress(c)));
        });
      });
    },
    updateEmail() {
      return u(this, null, function* () {
        let e = E.getConnectedConnectorId(p.state.activeChain),
          r = I.getAuthConnector();
        if (!r) throw new Error("No auth connector found");
        if (e !== k.CONNECTOR_ID.AUTH)
          throw new Error("Not connected to email or social");
        let t = r.provider.getEmail() ?? "";
        return (
          yield ee.open({
            view: "UpdateEmailWallet",
            data: { email: t, redirectView: void 0 },
          }),
          new Promise((n, a) => {
            let s = setInterval(() => {
                let c = r.provider.getEmail() ?? "";
                c !== t && (ee.close(), clearInterval(s), o(), n({ email: c }));
              }, xs),
              o = ee.subscribeKey("open", (c) => {
                c ||
                  (B.state.view !== "Connect" && B.push("Connect"),
                  clearInterval(s),
                  o(),
                  a(new Error("Modal closed")));
              });
          })
        );
      });
    },
    canSwitchToSmartAccount(e) {
      return p.checkIfSmartAccountEnabled() && ye(e) === Q.ACCOUNT_TYPES.EOA;
    },
  };
function Nt() {
  let e = p.state.activeCaipNetwork?.chainNamespace || "eip155",
    r = p.state.activeCaipNetwork?.id || 1,
    t = te.NATIVE_TOKEN_ADDRESS[e];
  return `${e}:${r}:${t}`;
}
function ye(e) {
  return p.getAccountData(e)?.preferredAccountType;
}
function dl(e) {
  return e
    ? p.state.chains.get(e)?.networkState?.caipNetwork
    : p.state.activeCaipNetwork;
}
var Qt = {
  getConnectionStatus(e, r) {
    let t = I.state.activeConnectorIds[r],
      n = b.getConnections(r);
    return !!t && e.connectorId === t
      ? "connected"
      : n.some(
          (o) => o.connectorId.toLowerCase() === e.connectorId.toLowerCase()
        )
      ? "active"
      : "disconnected";
  },
  excludeConnectorAddressFromConnections({
    connections: e,
    connectorId: r,
    addresses: t,
  }) {
    return e.map((n) => {
      if ((r ? n.connectorId.toLowerCase() === r.toLowerCase() : !1) && t) {
        let s = n.accounts.filter(
          (o) => !t.some((d) => d.toLowerCase() === o.address.toLowerCase())
        );
        return h(l({}, n), { accounts: s });
      }
      return n;
    });
  },
  excludeExistingConnections(e, r) {
    let t = new Set(e);
    return r.filter((n) => !t.has(n.connectorId));
  },
  getConnectionsByConnectorId(e, r) {
    return e.filter((t) => t.connectorId.toLowerCase() === r.toLowerCase());
  },
  getConnectionsData(e) {
    let r = !!x.state.remoteFeatures?.multiWallet,
      t = I.state.activeConnectorIds[e],
      n = b.getConnections(e),
      s = (b.state.recentConnections.get(e) ?? []).filter((c) =>
        I.getConnectorById(c.connectorId)
      ),
      o = Qt.excludeExistingConnections(
        [...n.map((c) => c.connectorId), ...(t ? [t] : [])],
        s
      );
    return r
      ? { connections: n, recentConnections: o }
      : {
          connections: n.filter(
            (c) => c.connectorId.toLowerCase() === t?.toLowerCase()
          ),
          recentConnections: [],
        };
  },
};
var re = V({
    transactions: [],
    transactionsByYear: {},
    lastNetworkInView: void 0,
    loading: !1,
    empty: !1,
    next: void 0,
  }),
  Ls = {
    state: re,
    subscribe(e) {
      return X(re, () => e(re));
    },
    setLastNetworkInView(e) {
      re.lastNetworkInView = e;
    },
    fetchTransactions(e) {
      return u(this, null, function* () {
        if (!e)
          throw new Error(
            "Transactions can't be fetched without an accountAddress"
          );
        re.loading = !0;
        try {
          let r = yield D.fetchTransactions({
              account: e,
              cursor: re.next,
              chainId: p.state.activeCaipNetwork?.caipNetworkId,
            }),
            t = nt.filterSpamTransactions(r.data),
            n = nt.filterByConnectedChain(t),
            a = [...re.transactions, ...n];
          (re.loading = !1),
            (re.transactions = a),
            (re.transactionsByYear = nt.groupTransactionsByYearAndMonth(
              re.transactionsByYear,
              n
            )),
            (re.empty = a.length === 0),
            (re.next = r.next ? r.next : void 0);
        } catch {
          let t = p.state.activeChain;
          K.sendEvent({
            type: "track",
            event: "ERROR_FETCH_TRANSACTIONS",
            properties: {
              address: e,
              projectId: x.state.projectId,
              cursor: re.next,
              isSmartAccount: ye(t) === Q.ACCOUNT_TYPES.SMART_ACCOUNT,
            },
          }),
            Ue.showError("Failed to fetch transactions"),
            (re.loading = !1),
            (re.empty = !0),
            (re.next = void 0);
        }
      });
    },
    groupTransactionsByYearAndMonth(e = {}, r = []) {
      let t = e;
      return (
        r.forEach((n) => {
          let a = new Date(n.metadata.minedAt).getFullYear(),
            s = new Date(n.metadata.minedAt).getMonth(),
            o = t[a] ?? {},
            d = (o[s] ?? []).filter((m) => m.id !== n.id);
          t[a] = h(l({}, o), {
            [s]: [...d, n].sort(
              (m, f) =>
                new Date(f.metadata.minedAt).getTime() -
                new Date(m.metadata.minedAt).getTime()
            ),
          });
        }),
        t
      );
    },
    filterSpamTransactions(e) {
      return e.filter(
        (r) => !r.transfers.every((n) => n.nft_info?.flags.is_spam === !0)
      );
    },
    filterByConnectedChain(e) {
      let r = p.state.activeCaipNetwork?.caipNetworkId;
      return e.filter((n) => n.metadata.chain === r);
    },
    clearCursor() {
      re.next = void 0;
    },
    resetTransactions() {
      (re.transactions = []),
        (re.transactionsByYear = {}),
        (re.lastNetworkInView = void 0),
        (re.loading = !1),
        (re.empty = !1),
        (re.next = void 0);
    },
  },
  nt = ce(Ls, "API_ERROR");
var q = V({
    connections: new Map(),
    recentConnections: new Map(),
    isSwitchingConnection: !1,
    wcError: !1,
    buffering: !1,
    status: "disconnected",
  }),
  Be,
  Ms = {
    state: q,
    subscribe(e) {
      return X(q, () => e(q));
    },
    subscribeKey(e, r) {
      return J(q, e, r);
    },
    _getClient() {
      return q._client;
    },
    setClient(e) {
      q._client = ve(e);
    },
    initialize(e) {
      let r = e.filter((t) => !!t.namespace).map((t) => t.namespace);
      b.syncStorageConnections(r);
    },
    syncStorageConnections(e) {
      let r = E.getConnections(),
        t = e ?? Array.from(p.state.chains.keys());
      for (let n of t) {
        let a = r[n] ?? [],
          s = new Map(q.recentConnections);
        s.set(n, a), (q.recentConnections = s);
      }
    },
    getConnections(e) {
      return e ? q.connections.get(e) ?? [] : [];
    },
    hasAnyConnection(e) {
      let r = b.state.connections;
      return Array.from(r.values())
        .flatMap((t) => t)
        .some(({ connectorId: t }) => t === e);
    },
    connectWalletConnect() {
      return u(this, arguments, function* ({ cache: e = "auto" } = {}) {
        let r = O.isTelegram() || (O.isSafari() && O.isIos());
        if (e === "always" || (e === "auto" && r)) {
          if (Be) {
            yield Be, (Be = void 0);
            return;
          }
          if (!O.isPairingExpired(q?.wcPairingExpiry)) {
            let t = q.wcUri;
            q.wcUri = t;
            return;
          }
          (Be = b
            ._getClient()
            ?.connectWalletConnect?.()
            .catch(() => {})),
            (b.state.status = "connecting"),
            yield Be,
            (Be = void 0),
            (q.wcPairingExpiry = void 0),
            (b.state.status = "connected");
        } else yield b._getClient()?.connectWalletConnect?.();
      });
    },
    connectExternal(e, r, t = !0) {
      return u(this, null, function* () {
        let n = yield b._getClient()?.connectExternal?.(e);
        return t && p.setActiveNamespace(r), n;
      });
    },
    reconnectExternal(e) {
      return u(this, null, function* () {
        yield b._getClient()?.reconnectExternal?.(e);
        let r = e.chain || p.state.activeChain;
        r && I.setConnectorId(e.id, r);
      });
    },
    setPreferredAccountType(e, r) {
      return u(this, null, function* () {
        if (!r) return;
        ee.setLoading(!0, p.state.activeChain);
        let t = I.getAuthConnector();
        t &&
          (p.setAccountProp("preferredAccountType", e, r),
          yield t.provider.setPreferredAccount(e),
          E.setPreferredAccountTypes(
            Object.entries(p.state.chains).reduce((n, [a, s]) => {
              let o = a,
                c = ye(o);
              return c !== void 0 && (n[o] = c), n;
            }, {})
          ),
          yield b.reconnectExternal(t),
          ee.setLoading(!1, p.state.activeChain),
          K.sendEvent({
            type: "track",
            event: "SET_PREFERRED_ACCOUNT_TYPE",
            properties: {
              accountType: e,
              network: p.state.activeCaipNetwork?.caipNetworkId || "",
            },
          }));
      });
    },
    signMessage(e) {
      return u(this, null, function* () {
        return b._getClient()?.signMessage(e);
      });
    },
    parseUnits(e, r) {
      return b._getClient()?.parseUnits(e, r);
    },
    formatUnits(e, r) {
      return b._getClient()?.formatUnits(e, r);
    },
    updateBalance(e) {
      return b._getClient()?.updateBalance(e);
    },
    sendTransaction(e) {
      return u(this, null, function* () {
        return b._getClient()?.sendTransaction(e);
      });
    },
    getCapabilities(e) {
      return u(this, null, function* () {
        return b._getClient()?.getCapabilities(e);
      });
    },
    grantPermissions(e) {
      return u(this, null, function* () {
        return b._getClient()?.grantPermissions(e);
      });
    },
    walletGetAssets(e) {
      return u(this, null, function* () {
        return b._getClient()?.walletGetAssets(e) ?? {};
      });
    },
    estimateGas(e) {
      return u(this, null, function* () {
        return b._getClient()?.estimateGas(e);
      });
    },
    writeContract(e) {
      return u(this, null, function* () {
        return b._getClient()?.writeContract(e);
      });
    },
    getEnsAddress(e) {
      return u(this, null, function* () {
        return b._getClient()?.getEnsAddress(e);
      });
    },
    getEnsAvatar(e) {
      return u(this, null, function* () {
        return b._getClient()?.getEnsAvatar(e);
      });
    },
    checkInstalled(e) {
      return b._getClient()?.checkInstalled?.(e) || !1;
    },
    resetWcConnection() {
      (q.wcUri = void 0),
        (q.wcPairingExpiry = void 0),
        (q.wcLinking = void 0),
        (q.recentWallet = void 0),
        (q.status = "disconnected"),
        nt.resetTransactions(),
        E.deleteWalletConnectDeepLink(),
        E.deleteRecentWallet();
    },
    resetUri() {
      (q.wcUri = void 0), (q.wcPairingExpiry = void 0), (Be = void 0);
    },
    finalizeWcConnection(e) {
      let { wcLinking: r, recentWallet: t } = b.state;
      r && E.setWalletConnectDeepLink(r),
        t && E.setAppKitRecent(t),
        e &&
          K.sendEvent({
            type: "track",
            event: "CONNECT_SUCCESS",
            address: e,
            properties: {
              method: r ? "mobile" : "qrcode",
              name: B.state.data?.wallet?.name || "Unknown",
              view: B.state.view,
              walletRank: t?.order,
            },
          });
    },
    setWcBasic(e) {
      q.wcBasic = e;
    },
    setUri(e) {
      (q.wcUri = e), (q.wcPairingExpiry = O.getPairingExpiry());
    },
    setWcLinking(e) {
      q.wcLinking = e;
    },
    setWcError(e) {
      (q.wcError = e), (q.buffering = !1);
    },
    setRecentWallet(e) {
      q.recentWallet = e;
    },
    setBuffering(e) {
      q.buffering = e;
    },
    setStatus(e) {
      q.status = e;
    },
    setIsSwitchingConnection(e) {
      q.isSwitchingConnection = e;
    },
    disconnect() {
      return u(
        this,
        arguments,
        function* ({ id: e, namespace: r, initialDisconnect: t } = {}) {
          try {
            yield b
              ._getClient()
              ?.disconnect({ id: e, chainNamespace: r, initialDisconnect: t });
          } catch (n) {
            throw new Fe("Failed to disconnect", "INTERNAL_SDK_ERROR", n);
          }
        }
      );
    },
    disconnectConnector(t) {
      return u(this, arguments, function* ({ id: e, namespace: r }) {
        try {
          yield b._getClient()?.disconnectConnector({ id: e, namespace: r });
        } catch (n) {
          throw new Fe(
            "Failed to disconnect connector",
            "INTERNAL_SDK_ERROR",
            n
          );
        }
      });
    },
    setConnections(e, r) {
      let t = new Map(q.connections);
      t.set(r, e), (q.connections = t);
    },
    handleAuthAccountSwitch(t) {
      return u(this, arguments, function* ({ address: e, namespace: r }) {
        let a = p
            .getAccountData(r)
            ?.user?.accounts?.find((o) => o.type === "smartAccount"),
          s =
            a &&
            a.address.toLowerCase() === e.toLowerCase() &&
            Ke.canSwitchToSmartAccount(r)
              ? "smartAccount"
              : "eoa";
        yield b.setPreferredAccountType(s, r);
      });
    },
    handleActiveConnection(n) {
      return u(
        this,
        arguments,
        function* ({ connection: e, namespace: r, address: t }) {
          let a = I.getConnectorById(e.connectorId),
            s = e.connectorId === k.CONNECTOR_ID.AUTH;
          if (!a)
            throw new Error(
              `No connector found for connection: ${e.connectorId}`
            );
          if (s)
            t &&
              (yield b.handleAuthAccountSwitch({ address: t, namespace: r }));
          else
            return (yield b.connectExternal(
              {
                id: a.id,
                type: a.type,
                provider: a.provider,
                address: t,
                chain: r,
              },
              r
            ))?.address;
          return t;
        }
      );
    },
    handleDisconnectedConnection(a) {
      return u(
        this,
        arguments,
        function* ({
          connection: e,
          namespace: r,
          address: t,
          closeModalOnConnect: n,
        }) {
          let s = I.getConnectorById(e.connectorId),
            o = e.auth?.name?.toLowerCase(),
            c = e.connectorId === k.CONNECTOR_ID.AUTH,
            d = e.connectorId === k.CONNECTOR_ID.WALLET_CONNECT;
          if (!s)
            throw new Error(
              `No connector found for connection: ${e.connectorId}`
            );
          let m;
          if (c)
            if (o && Ke.isSocialProvider(o)) {
              let { address: f } = yield Ke.connectSocial({
                social: o,
                closeModalOnConnect: n,
                onOpenFarcaster() {
                  ee.open({ view: "ConnectingFarcaster" });
                },
                onConnect() {
                  B.replace("ProfileWallets");
                },
              });
              m = f;
            } else {
              let { address: f } = yield Ke.connectEmail({
                closeModalOnConnect: n,
                onOpen() {
                  ee.open({ view: "EmailLogin" });
                },
                onConnect() {
                  B.replace("ProfileWallets");
                },
              });
              m = f;
            }
          else if (d) {
            let { address: f } = yield Ke.connectWalletConnect({
              walletConnect: !0,
              connector: s,
              closeModalOnConnect: n,
              onOpen(g) {
                let Z = g ? "AllWallets" : "ConnectingWalletConnect";
                ee.state.open ? B.push(Z) : ee.open({ view: Z });
              },
              onConnect() {
                B.replace("ProfileWallets");
              },
            });
            m = f;
          } else {
            let f = yield b.connectExternal(
              { id: s.id, type: s.type, provider: s.provider, chain: r },
              r
            );
            f && (m = f.address);
          }
          return (
            c &&
              t &&
              (yield b.handleAuthAccountSwitch({ address: t, namespace: r })),
            m
          );
        }
      );
    },
    switchConnection(s) {
      return u(
        this,
        arguments,
        function* ({
          connection: e,
          address: r,
          namespace: t,
          closeModalOnConnect: n,
          onChange: a,
        }) {
          let o,
            c = p.getAccountData(t)?.caipAddress;
          if (c) {
            let { address: m } = de.parseCaipAddress(c);
            o = m;
          }
          let d = Qt.getConnectionStatus(e, t);
          switch (d) {
            case "connected":
            case "active": {
              let m = yield b.handleActiveConnection({
                connection: e,
                namespace: t,
                address: r,
              });
              if (o && m) {
                let f = m.toLowerCase() !== o.toLowerCase();
                a?.({
                  address: m,
                  namespace: t,
                  hasSwitchedAccount: f,
                  hasSwitchedWallet: d === "active",
                });
              }
              break;
            }
            case "disconnected": {
              let m = yield b.handleDisconnectedConnection({
                connection: e,
                namespace: t,
                address: r,
                closeModalOnConnect: n,
              });
              m &&
                a?.({
                  address: m,
                  namespace: t,
                  hasSwitchedAccount: !0,
                  hasSwitchedWallet: !0,
                });
              break;
            }
            default:
              throw new Error(`Invalid connection status: ${d}`);
          }
        }
      );
    },
  },
  b = ce(Ms);
var Tt = {
  createBalance(e, r) {
    let t = {
      name: e.metadata.name || "",
      symbol: e.metadata.symbol || "",
      decimals: e.metadata.decimals || 0,
      value: e.metadata.value || 0,
      price: e.metadata.price || 0,
      iconUrl: e.metadata.iconUrl || "",
    };
    return {
      name: t.name,
      symbol: t.symbol,
      chainId: r,
      address:
        e.address === "native"
          ? void 0
          : this.convertAddressToCAIP10Address(e.address, r),
      value: t.value,
      price: t.price,
      quantity: {
        decimals: t.decimals.toString(),
        numeric: this.convertHexToBalance({
          hex: e.balance,
          decimals: t.decimals,
        }),
      },
      iconUrl: t.iconUrl,
    };
  },
  convertHexToBalance({ hex: e, decimals: r }) {
    return st(BigInt(e), r);
  },
  convertAddressToCAIP10Address(e, r) {
    return `${r}:${e}`;
  },
  createCAIP2ChainId(e, r) {
    return `${r}:${parseInt(e, 16)}`;
  },
  getChainIdHexFromCAIP2ChainId(e) {
    let r = e.split(":");
    if (r.length < 2 || !r[1]) return "0x0";
    let t = r[1],
      n = parseInt(t, 10);
    return isNaN(n) ? "0x0" : `0x${n.toString(16)}`;
  },
  isWalletGetAssetsResponse(e) {
    return typeof e != "object" || e === null
      ? !1
      : Object.values(e).every(
          (r) => Array.isArray(r) && r.every((t) => this.isValidAsset(t))
        );
  },
  isValidAsset(e) {
    return (
      typeof e == "object" &&
      e !== null &&
      typeof e.address == "string" &&
      typeof e.balance == "string" &&
      (e.type === "ERC20" || e.type === "NATIVE") &&
      typeof e.metadata == "object" &&
      e.metadata !== null &&
      typeof e.metadata.name == "string" &&
      typeof e.metadata.symbol == "string" &&
      typeof e.metadata.decimals == "number" &&
      typeof e.metadata.price == "number" &&
      typeof e.metadata.iconUrl == "string"
    );
  },
};
var Xt;
function Vr() {
  return u(this, null, function* () {
    if (!Xt) {
      let {
        createPublicClient: e,
        http: r,
        defineChain: t,
      } = yield import("./chunk-3ELEEFHK.js");
      Xt = { createPublicClient: e, http: r, defineChain: t };
    }
    return Xt;
  });
}
var Rt = {
  getBlockchainApiRpcUrl(e, r) {
    let t = new URL("https://rpc.walletconnect.org/v1/");
    return (
      t.searchParams.set("chainId", e),
      t.searchParams.set("projectId", r),
      t.toString()
    );
  },
  getViemChain(e) {
    return u(this, null, function* () {
      let { defineChain: r } = yield Vr(),
        { chainId: t } = de.parseCaipNetworkId(e.caipNetworkId);
      return r(h(l({}, e), { id: Number(t) }));
    });
  },
  createViemPublicClient(e) {
    return u(this, null, function* () {
      let { createPublicClient: r, http: t } = yield Vr(),
        n = x.state.projectId,
        a = yield Rt.getViemChain(e);
      if (!a)
        throw new Error(`Chain ${e.caipNetworkId} not found in viem/chains`);
      return r({
        chain: a,
        transport: t(Rt.getBlockchainApiRpcUrl(e.caipNetworkId, n)),
      });
    });
  },
};
var $e = {
  getMyTokensWithBalance(e) {
    return u(this, null, function* () {
      let r = p.getAccountData()?.address,
        t = p.state.activeCaipNetwork,
        n = I.getConnectorId("eip155") === k.CONNECTOR_ID.AUTH;
      if (!r || !t) return [];
      let a = `${t.caipNetworkId}:${r}`,
        s = E.getBalanceCacheForCaipAddress(a);
      if (s) return s.balances;
      if (t.chainNamespace === k.CHAIN.EVM && n) {
        let c = yield this.getEIP155Balances(r, t);
        if (c) return this.filterLowQualityTokens(c);
      }
      let o = yield D.getBalance(r, t.caipNetworkId, e);
      return this.filterLowQualityTokens(o.balances);
    });
  },
  getEIP155Balances(e, r) {
    return u(this, null, function* () {
      try {
        let t = Tt.getChainIdHexFromCAIP2ChainId(r.caipNetworkId);
        if (!(yield b.getCapabilities(e))?.[t]?.assetDiscovery?.supported)
          return null;
        let a = yield b.walletGetAssets({ account: e, chainFilter: [t] });
        if (!Tt.isWalletGetAssetsResponse(a)) return null;
        let o = (a[t] || []).map((c) => Tt.createBalance(c, r.caipNetworkId));
        return (
          E.updateBalanceCache({
            caipAddress: `${r.caipNetworkId}:${e}`,
            balance: { balances: o },
            timestamp: Date.now(),
          }),
          o
        );
      } catch {
        return null;
      }
    });
  },
  filterLowQualityTokens(e) {
    return e.filter((r) => r.quantity.decimals !== "0");
  },
  fetchERC20Balance(n) {
    return u(
      this,
      arguments,
      function* ({ caipAddress: e, assetAddress: r, caipNetwork: t }) {
        let a = yield Rt.createViemPublicClient(t),
          { address: s } = de.parseCaipAddress(e),
          [{ result: o }, { result: c }, { result: d }, { result: m }] =
            yield a.multicall({
              contracts: [
                { address: r, functionName: "name", args: [], abi: Ye },
                { address: r, functionName: "symbol", args: [], abi: Ye },
                { address: r, functionName: "balanceOf", args: [s], abi: Ye },
                { address: r, functionName: "decimals", args: [], abi: Ye },
              ],
            });
        return {
          name: o,
          symbol: c,
          decimals: m,
          balance: d && m ? st(d, m) : "0",
        };
      }
    );
  },
};
var er = { adapters: {} },
  Gr = {
    state: er,
    initialize(e) {
      er.adapters = l({}, e);
    },
    get(e) {
      return er.adapters[e];
    },
  };
var vt = {
    eip155: void 0,
    solana: void 0,
    polkadot: void 0,
    bip122: void 0,
    cosmos: void 0,
    sui: void 0,
    stacks: void 0,
  },
  Ce = V({ providers: l({}, vt), providerIds: l({}, vt) }),
  Zr = {
    state: Ce,
    subscribeKey(e, r) {
      return J(Ce, e, r);
    },
    subscribe(e) {
      return X(Ce, () => {
        e(Ce);
      });
    },
    subscribeProviders(e) {
      return X(Ce.providers, () => e(Ce.providers));
    },
    setProvider(e, r) {
      e && r && (Ce.providers[e] = ve(r));
    },
    getProvider(e) {
      if (e) return Ce.providers[e];
    },
    setProviderId(e, r) {
      r && (Ce.providerIds[e] = r);
    },
    getProviderId(e) {
      if (e) return Ce.providerIds[e];
    },
    reset() {
      (Ce.providers = l({}, vt)), (Ce.providerIds = l({}, vt));
    },
    resetChain(e) {
      (Ce.providers[e] = void 0), (Ce.providerIds[e] = void 0);
    },
  };
var Kr = {
  getTokenList(e) {
    return u(this, null, function* () {
      return (
        (yield D.fetchSwapTokens({ chainId: e }))?.tokens?.map((n) =>
          h(l({}, n), {
            eip2612: !1,
            quantity: { decimals: "0", numeric: "0" },
            price: 0,
            value: 0,
          })
        ) || []
      );
    });
  },
  fetchGasPrice() {
    return u(this, null, function* () {
      let e = p.state.activeCaipNetwork;
      if (!e) return null;
      try {
        switch (e.chainNamespace) {
          case "solana":
            let r = (yield b?.estimateGas({
              chainNamespace: "solana",
            }))?.toString();
            return { standard: r, fast: r, instant: r };
          case "eip155":
          default:
            return yield D.fetchGasPrice({ chainId: e.caipNetworkId });
        }
      } catch {
        return null;
      }
    });
  },
  fetchSwapAllowance(a) {
    return u(
      this,
      arguments,
      function* ({
        tokenAddress: e,
        userAddress: r,
        sourceTokenAmount: t,
        sourceTokenDecimals: n,
      }) {
        let s = yield D.fetchSwapAllowance({ tokenAddress: e, userAddress: r });
        if (s?.allowance && t && n) {
          let o = b.parseUnits(t, n) || 0;
          return BigInt(s.allowance) >= o;
        }
        return !1;
      }
    );
  },
  getMyTokensWithBalance(e) {
    return u(this, null, function* () {
      let r = yield $e.getMyTokensWithBalance(e);
      return (
        p.setAccountProp("tokenBalance", r, p.state.activeChain),
        this.mapBalancesToSwapTokens(r)
      );
    });
  },
  mapBalancesToSwapTokens(e) {
    return (
      e?.map((r) =>
        h(l({}, r), {
          address: r?.address ? r.address : Nt(),
          decimals: parseInt(r.quantity.decimals, 10),
          logoUri: r.iconUrl,
          eip2612: !1,
        })
      ) || []
    );
  },
  handleSwapError(e) {
    return u(this, null, function* () {
      try {
        let r = e?.cause;
        return r?.json &&
          (yield r.json())?.reasons?.[0]?.description?.includes(
            "insufficient liquidity"
          )
          ? "Insufficient liquidity"
          : void 0;
      } catch {
        return;
      }
    });
  },
};
var G = V({ tokenBalances: [], loading: !1 }),
  Ds = {
    state: G,
    subscribe(e) {
      return X(G, () => e(G));
    },
    subscribeKey(e, r) {
      return J(G, e, r);
    },
    setToken(e) {
      e && (G.token = ve(e));
    },
    setTokenAmount(e) {
      G.sendTokenAmount = e;
    },
    setReceiverAddress(e) {
      G.receiverAddress = e;
    },
    setReceiverProfileImageUrl(e) {
      G.receiverProfileImageUrl = e;
    },
    setReceiverProfileName(e) {
      G.receiverProfileName = e;
    },
    setNetworkBalanceInUsd(e) {
      G.networkBalanceInUSD = e;
    },
    setLoading(e) {
      G.loading = e;
    },
    getSdkEventProperties(e) {
      return {
        message: O.parseError(e),
        isSmartAccount:
          ye(p.state.activeChain) === Q.ACCOUNT_TYPES.SMART_ACCOUNT,
        token: G.token?.symbol || "",
        amount: G.sendTokenAmount ?? 0,
        network: p.state.activeCaipNetwork?.caipNetworkId || "",
      };
    },
    sendToken() {
      return u(this, null, function* () {
        try {
          switch (
            (H.setLoading(!0), p.state.activeCaipNetwork?.chainNamespace)
          ) {
            case "eip155":
              yield H.sendEvmToken();
              return;
            case "solana":
              yield H.sendSolanaToken();
              return;
            default:
              throw new Error("Unsupported chain");
          }
        } catch (e) {
          throw ir.isUserRejectedRequestError(e) ? new cr(e) : e;
        } finally {
          H.setLoading(!1);
        }
      });
    },
    sendEvmToken() {
      return u(this, null, function* () {
        let e = p.state.activeChain;
        if (!e)
          throw new Error(
            "SendController:sendEvmToken - activeChainNamespace is required"
          );
        let r = ye(e);
        if (!H.state.sendTokenAmount || !H.state.receiverAddress)
          throw new Error("An amount and receiver address are required");
        if (!H.state.token) throw new Error("A token is required");
        if (H.state.token?.address) {
          K.sendEvent({
            type: "track",
            event: "SEND_INITIATED",
            properties: {
              isSmartAccount: r === Q.ACCOUNT_TYPES.SMART_ACCOUNT,
              token: H.state.token.address,
              amount: H.state.sendTokenAmount,
              network: p.state.activeCaipNetwork?.caipNetworkId || "",
            },
          });
          let { hash: t } = yield H.sendERC20Token({
            receiverAddress: H.state.receiverAddress,
            tokenAddress: H.state.token.address,
            sendTokenAmount: H.state.sendTokenAmount,
            decimals: H.state.token.quantity.decimals,
          });
          t && (G.hash = t);
        } else {
          K.sendEvent({
            type: "track",
            event: "SEND_INITIATED",
            properties: {
              isSmartAccount: r === Q.ACCOUNT_TYPES.SMART_ACCOUNT,
              token: H.state.token.symbol || "",
              amount: H.state.sendTokenAmount,
              network: p.state.activeCaipNetwork?.caipNetworkId || "",
            },
          });
          let { hash: t } = yield H.sendNativeToken({
            receiverAddress: H.state.receiverAddress,
            sendTokenAmount: H.state.sendTokenAmount,
            decimals: H.state.token.quantity.decimals,
          });
          t && (G.hash = t);
        }
      });
    },
    fetchTokenBalance(e) {
      return u(this, null, function* () {
        G.loading = !0;
        let r = p.state.activeChain,
          t = p.state.activeCaipNetwork?.caipNetworkId,
          n = p.state.activeCaipNetwork?.chainNamespace,
          a = p.getAccountData(r)?.caipAddress ?? p.state.activeCaipAddress,
          s = a ? O.getPlainAddress(a) : void 0;
        if (G.lastRetry && !O.isAllowedRetry(G.lastRetry, 30 * te.ONE_SEC_MS))
          return (G.loading = !1), [];
        try {
          if (s && t && n) {
            let o = yield $e.getMyTokensWithBalance();
            return (G.tokenBalances = o), (G.lastRetry = void 0), o;
          }
        } catch (o) {
          (G.lastRetry = Date.now()),
            e?.(o),
            Ue.showError("Token Balance Unavailable");
        } finally {
          G.loading = !1;
        }
        return [];
      });
    },
    fetchNetworkBalance() {
      if (G.tokenBalances.length === 0) return;
      let e = Kr.mapBalancesToSwapTokens(G.tokenBalances);
      if (!e) return;
      let r = e.find((t) => t.address === Nt());
      r &&
        (G.networkBalanceInUSD = r
          ? sr.multiply(r.quantity.numeric, r.price).toString()
          : "0");
    },
    sendNativeToken(e) {
      return u(this, null, function* () {
        B.pushTransactionStack({});
        let r = e.receiverAddress,
          t = p.getAccountData()?.address,
          n = b.parseUnits(e.sendTokenAmount.toString(), Number(e.decimals)),
          s = yield b.sendTransaction({
            chainNamespace: k.CHAIN.EVM,
            to: r,
            address: t,
            data: "0x",
            value: n ?? BigInt(0),
          });
        return (
          K.sendEvent({
            type: "track",
            event: "SEND_SUCCESS",
            properties: {
              isSmartAccount: ye("eip155") === Q.ACCOUNT_TYPES.SMART_ACCOUNT,
              token: H.state.token?.symbol || "",
              amount: e.sendTokenAmount,
              network: p.state.activeCaipNetwork?.caipNetworkId || "",
              hash: s || "",
            },
          }),
          b._getClient()?.updateBalance("eip155"),
          H.resetSend(),
          { hash: s }
        );
      });
    },
    sendERC20Token(e) {
      return u(this, null, function* () {
        B.pushTransactionStack({
          onSuccess() {
            B.replace("Account");
          },
        });
        let r = b.parseUnits(e.sendTokenAmount.toString(), Number(e.decimals)),
          t = p.getAccountData()?.address;
        if (t && e.sendTokenAmount && e.receiverAddress && e.tokenAddress) {
          let n = O.getPlainAddress(e.tokenAddress);
          if (!n)
            throw new Error(
              "SendController:sendERC20Token - tokenAddress is required"
            );
          let a = yield b.writeContract({
            fromAddress: t,
            tokenAddress: n,
            args: [e.receiverAddress, r ?? BigInt(0)],
            method: "transfer",
            abi: or.getERC20Abi(n),
            chainNamespace: k.CHAIN.EVM,
          });
          return (
            K.sendEvent({
              type: "track",
              event: "SEND_SUCCESS",
              properties: {
                isSmartAccount: ye("eip155") === Q.ACCOUNT_TYPES.SMART_ACCOUNT,
                token: H.state.token?.symbol || "",
                amount: e.sendTokenAmount,
                network: p.state.activeCaipNetwork?.caipNetworkId || "",
                hash: a || "",
              },
            }),
            H.resetSend(),
            { hash: a }
          );
        }
        return { hash: void 0 };
      });
    },
    sendSolanaToken() {
      return u(this, null, function* () {
        if (!H.state.sendTokenAmount || !H.state.receiverAddress)
          throw new Error("An amount and receiver address are required");
        B.pushTransactionStack({
          onSuccess() {
            B.replace("Account");
          },
        });
        let e;
        H.state.token &&
          H.state.token.address !== te.SOLANA_NATIVE_TOKEN_ADDRESS &&
          (O.isCaipAddress(H.state.token.address)
            ? (e = O.getPlainAddress(H.state.token.address))
            : (e = H.state.token.address));
        let r = yield b.sendTransaction({
          chainNamespace: "solana",
          tokenMint: e,
          to: H.state.receiverAddress,
          value: H.state.sendTokenAmount,
        });
        r && (G.hash = r),
          b._getClient()?.updateBalance("solana"),
          K.sendEvent({
            type: "track",
            event: "SEND_SUCCESS",
            properties: {
              isSmartAccount: !1,
              token: H.state.token?.symbol || "",
              amount: H.state.sendTokenAmount,
              network: p.state.activeCaipNetwork?.caipNetworkId || "",
              hash: r || "",
            },
          }),
          H.resetSend();
      });
    },
    resetSend() {
      (G.token = void 0),
        (G.sendTokenAmount = void 0),
        (G.receiverAddress = void 0),
        (G.receiverProfileImageUrl = void 0),
        (G.receiverProfileName = void 0),
        (G.loading = !1),
        (G.tokenBalances = []);
    },
  },
  H = ce(Ds);
var tr = {
    currentTab: 0,
    tokenBalance: [],
    smartAccountDeployed: !1,
    addressLabels: new Map(),
    user: void 0,
    preferredAccountType: void 0,
  },
  It = {
    caipNetwork: void 0,
    supportsAllNetworks: !0,
    smartAccountEnabledNetworks: [],
  },
  _ = V({
    chains: nr(),
    activeCaipAddress: void 0,
    activeChain: void 0,
    activeCaipNetwork: void 0,
    noAdapters: !1,
    universalAdapter: { connectionControllerClient: void 0 },
    isSwitchingNamespace: !1,
  }),
  $r = {
    state: _,
    subscribe(e) {
      return X(_, () => {
        e(_);
      });
    },
    subscribeKey(e, r) {
      return J(_, e, r);
    },
    subscribeAccountStateProp(e, r, t) {
      let n = t || _.activeChain;
      return n ? J(_.chains.get(n)?.accountState || {}, e, r) : () => {};
    },
    subscribeChainProp(e, r, t) {
      let n;
      return X(_.chains, () => {
        let a = t || _.activeChain;
        if (a) {
          let s = _.chains.get(a)?.[e];
          n !== s && ((n = s), r(s));
        }
      });
    },
    initialize(e, r, t) {
      let { chainId: n, namespace: a } = E.getActiveNetworkProps(),
        s = r?.find((f) => f.id.toString() === n?.toString()),
        c = e.find((f) => f?.namespace === a) || e?.[0],
        d = e.map((f) => f.namespace).filter((f) => f !== void 0),
        m = x.state.enableEmbedded
          ? new Set([...d])
          : new Set([...(r?.map((f) => f.chainNamespace) ?? [])]);
      (e?.length === 0 || !c) && (_.noAdapters = !0),
        _.noAdapters ||
          ((_.activeChain = c?.namespace),
          (_.activeCaipNetwork = s),
          p.setChainNetworkData(c?.namespace, { caipNetwork: s }),
          _.activeChain && be.set({ activeChain: c?.namespace })),
        m.forEach((f) => {
          let g = r?.filter((Ae) => Ae.chainNamespace === f),
            Z = E.getPreferredAccountTypes() || {},
            ne = l(l({}, x.state.defaultAccountTypes), Z);
          p.state.chains.set(
            f,
            l(
              {
                namespace: f,
                networkState: V(h(l({}, It), { caipNetwork: g?.[0] })),
                accountState: V(h(l({}, tr), { preferredAccountType: ne[f] })),
                caipNetworks: g ?? [],
              },
              t
            )
          ),
            p.setRequestedCaipNetworks(g ?? [], f);
        });
    },
    removeAdapter(e) {
      if (_.activeChain === e) {
        let r = Array.from(_.chains.entries()).find(([t]) => t !== e);
        if (r) {
          let t = r[1]?.caipNetworks?.[0];
          t && p.setActiveCaipNetwork(t);
        }
      }
      _.chains.delete(e);
    },
    addAdapter(e, { connectionControllerClient: r }, t) {
      if (!e.namespace)
        throw new Error(
          "ChainController:addAdapter - adapter must have a namespace"
        );
      _.chains.set(e.namespace, {
        namespace: e.namespace,
        networkState: h(l({}, It), { caipNetwork: t[0] }),
        accountState: l({}, tr),
        caipNetworks: t,
        connectionControllerClient: r,
      }),
        p.setRequestedCaipNetworks(
          t?.filter((n) => n.chainNamespace === e.namespace) ?? [],
          e.namespace
        );
    },
    addNetwork(e) {
      let r = _.chains.get(e.chainNamespace);
      if (r) {
        let t = [...(r.caipNetworks || [])];
        r.caipNetworks?.find((n) => n.id === e.id) || t.push(e),
          _.chains.set(e.chainNamespace, h(l({}, r), { caipNetworks: t })),
          p.setRequestedCaipNetworks(t, e.chainNamespace),
          I.filterByNamespace(e.chainNamespace, !0);
      }
    },
    removeNetwork(e, r) {
      let t = _.chains.get(e);
      if (t) {
        let n = _.activeCaipNetwork?.id === r,
          a = [...(t.caipNetworks?.filter((s) => s.id !== r) || [])];
        n && t?.caipNetworks?.[0] && p.setActiveCaipNetwork(t.caipNetworks[0]),
          _.chains.set(e, h(l({}, t), { caipNetworks: a })),
          p.setRequestedCaipNetworks(a || [], e),
          a.length === 0 && I.filterByNamespace(e, !1);
      }
    },
    setAdapterNetworkState(e, r) {
      let t = _.chains.get(e);
      t &&
        ((t.networkState = l(l({}, t.networkState || It), r)),
        _.chains.set(e, t));
    },
    setChainAccountData(e, r, t = !0) {
      if (!e) throw new Error("Chain is required to update chain account data");
      let n = _.chains.get(e);
      if (n) {
        let a = l(l({}, n.accountState || tr), r);
        _.chains.set(e, h(l({}, n), { accountState: a })),
          (_.chains.size === 1 || _.activeChain === e) &&
            r.caipAddress &&
            (_.activeCaipAddress = r.caipAddress);
      }
    },
    setChainNetworkData(e, r) {
      if (!e) return;
      let t = _.chains.get(e);
      if (t) {
        let n = l(l({}, t.networkState || It), r);
        _.chains.set(e, h(l({}, t), { networkState: n }));
      }
    },
    setAccountProp(e, r, t, n = !0) {
      p.setChainAccountData(t, { [e]: r }, n);
    },
    setActiveNamespace(e) {
      _.activeChain = e;
      let r = e ? _.chains.get(e) : void 0,
        t = r?.networkState?.caipNetwork;
      t?.id &&
        e &&
        ((_.activeCaipAddress = r?.accountState?.caipAddress),
        (_.activeCaipNetwork = t),
        p.setChainNetworkData(e, { caipNetwork: t }),
        E.setActiveCaipNetworkId(t?.caipNetworkId),
        be.set({ activeChain: e, selectedNetworkId: t?.caipNetworkId }));
    },
    setActiveCaipNetwork(e) {
      if (!e) return;
      let r = _.activeChain === e.chainNamespace;
      r || p.setIsSwitchingNamespace(!0);
      let t = _.chains.get(e.chainNamespace);
      (_.activeChain = e.chainNamespace),
        (_.activeCaipNetwork = e),
        p.setChainNetworkData(e.chainNamespace, { caipNetwork: e });
      let n = t?.accountState?.address;
      if (n) _.activeCaipAddress = `${e.chainNamespace}:${e.id}:${n}`;
      else if (r && _.activeCaipAddress) {
        let { address: s } = de.parseCaipAddress(_.activeCaipAddress);
        (n = s), (_.activeCaipAddress = `${e.caipNetworkId}:${n}`);
      } else _.activeCaipAddress = void 0;
      p.setChainAccountData(e.chainNamespace, {
        address: n,
        caipAddress: _.activeCaipAddress,
      }),
        H.resetSend(),
        be.set({
          activeChain: _.activeChain,
          selectedNetworkId: _.activeCaipNetwork?.caipNetworkId,
        }),
        E.setActiveCaipNetworkId(e.caipNetworkId),
        !p.checkIfSupportedNetwork(e.chainNamespace) &&
          x.state.enableNetworkSwitch &&
          !x.state.allowUnsupportedChain &&
          !b.state.wcBasic &&
          p.showUnsupportedChainUI();
    },
    addCaipNetwork(e) {
      if (!e) return;
      let r = _.chains.get(e.chainNamespace);
      r && r?.caipNetworks?.push(e);
    },
    switchActiveNamespace(e) {
      return u(this, null, function* () {
        if (!e) return;
        let r = e !== p.state.activeChain,
          t = p.getNetworkData(e)?.caipNetwork,
          n = p.getCaipNetworkByNamespace(e, t?.id);
        r && n && (yield p.switchActiveNetwork(n));
      });
    },
    switchActiveNetwork(t) {
      return u(this, arguments, function* (e, { throwOnFailure: r = !1 } = {}) {
        let n = p.state.activeChain;
        if (!n)
          throw new Error(
            "ChainController:switchActiveNetwork - namespace is required"
          );
        let a = Zr.getProviderId(_.activeChain) === "AUTH",
          s = p.getAccountData(n)?.address,
          o = k.AUTH_CONNECTOR_SUPPORTED_CHAINS.includes(e.chainNamespace);
        try {
          if ((s && e.chainNamespace === n) || (a && o)) {
            let c = Gr.get(e.chainNamespace);
            if (!c) throw new Error("Adapter not found");
            yield c.switchNetwork({ caipNetwork: e });
          }
          p.setActiveCaipNetwork(e);
        } catch (c) {
          if (r) throw c;
        }
        K.sendEvent({
          type: "track",
          event: "SWITCH_NETWORK",
          properties: { network: e.caipNetworkId },
        });
      });
    },
    getConnectionControllerClient(e) {
      let r = e || _.activeChain;
      if (!r)
        throw new Error(
          "Chain is required to get connection controller client"
        );
      let t = _.chains.get(r);
      if (!t?.connectionControllerClient)
        throw new Error("ConnectionController client not set");
      return t.connectionControllerClient;
    },
    getNetworkProp(e, r) {
      let t = _.chains.get(r)?.networkState;
      if (t) return t[e];
    },
    getRequestedCaipNetworks(e) {
      let r = _.chains.get(e),
        { approvedCaipNetworkIds: t = [], requestedCaipNetworks: n = [] } =
          r?.networkState || {};
      return O.sortRequestedNetworks(t, n).filter((o) => o?.id);
    },
    getAllRequestedCaipNetworks() {
      let e = [];
      return (
        _.chains.forEach((r) => {
          if (!r.namespace)
            throw new Error(
              "ChainController:getAllRequestedCaipNetworks - chainAdapter must have a namespace"
            );
          let t = p.getRequestedCaipNetworks(r.namespace);
          e.push(...t);
        }),
        e
      );
    },
    setRequestedCaipNetworks(e, r) {
      p.setAdapterNetworkState(r, { requestedCaipNetworks: e });
      let n = p.getAllRequestedCaipNetworks().map((s) => s.chainNamespace),
        a = Array.from(new Set(n));
      I.filterByNamespaces(a);
    },
    getAllApprovedCaipNetworkIds() {
      let e = [];
      return (
        _.chains.forEach((r) => {
          if (!r.namespace)
            throw new Error(
              "ChainController:getAllApprovedCaipNetworkIds - chainAdapter must have a namespace"
            );
          let t = p.getApprovedCaipNetworkIds(r.namespace);
          e.push(...t);
        }),
        e
      );
    },
    getActiveCaipNetwork(e) {
      return e
        ? _.chains.get(e)?.networkState?.caipNetwork
        : _.activeCaipNetwork;
    },
    getActiveCaipAddress() {
      return _.activeCaipAddress;
    },
    getApprovedCaipNetworkIds(e) {
      return _.chains.get(e)?.networkState?.approvedCaipNetworkIds || [];
    },
    setApprovedCaipNetworksData(e, r) {
      p.setAdapterNetworkState(e, r);
    },
    checkIfSupportedNetwork(e, r) {
      let t = r || _.activeCaipNetwork?.caipNetworkId,
        n = p.getRequestedCaipNetworks(e);
      return n.length ? n?.some((a) => a.caipNetworkId === t) : !0;
    },
    checkIfSupportedChainId(e) {
      return _.activeChain
        ? p.getRequestedCaipNetworks(_.activeChain)?.some((t) => t.id === e)
        : !0;
    },
    checkIfSmartAccountEnabled() {
      let e = ar.caipNetworkIdToNumber(_.activeCaipNetwork?.caipNetworkId);
      return !_.activeChain || !e
        ? !1
        : !!(
            ae.get(y.SMART_ACCOUNT_ENABLED_NETWORKS)?.split(",") || []
          )?.includes(e.toString());
    },
    showUnsupportedChainUI() {
      ee.open({ view: "UnsupportedChain" });
    },
    checkIfNamesSupported() {
      let e = _.activeCaipNetwork;
      return !!(
        e?.chainNamespace &&
        te.NAMES_SUPPORTED_CHAIN_NAMESPACES.includes(e.chainNamespace)
      );
    },
    resetNetwork(e) {
      p.setAdapterNetworkState(e, {
        approvedCaipNetworkIds: void 0,
        supportsAllNetworks: !0,
      });
    },
    resetAccount(e) {
      let r = e;
      if (!r) throw new Error("Chain is required to set account prop");
      let t = p.state.chains.get(r)?.accountState?.preferredAccountType,
        n = x.state.defaultAccountTypes[r];
      (_.activeCaipAddress = void 0),
        p.setChainAccountData(r, {
          smartAccountDeployed: !1,
          currentTab: 0,
          caipAddress: void 0,
          address: void 0,
          balance: void 0,
          balanceSymbol: void 0,
          profileName: void 0,
          profileImage: void 0,
          addressExplorerUrl: void 0,
          tokenBalance: [],
          connectedWalletInfo: void 0,
          preferredAccountType: n || t,
          socialProvider: void 0,
          socialWindow: void 0,
          farcasterUrl: void 0,
          user: void 0,
          status: "disconnected",
        }),
        I.removeConnectorId(r);
    },
    setIsSwitchingNamespace(e) {
      _.isSwitchingNamespace = e;
    },
    getFirstCaipNetworkSupportsAuthConnector() {
      let e = [],
        r;
      if (
        (_.chains.forEach((t) => {
          k.AUTH_CONNECTOR_SUPPORTED_CHAINS.find((n) => n === t.namespace) &&
            t.namespace &&
            e.push(t.namespace);
        }),
        e.length > 0)
      ) {
        let t = e[0];
        return (r = t ? _.chains.get(t)?.caipNetworks?.[0] : void 0), r;
      }
    },
    getAccountData(e) {
      let r = e || _.activeChain;
      if (r) return p.state.chains.get(r)?.accountState;
    },
    getNetworkData(e) {
      let r = e || _.activeChain;
      if (r) return p.state.chains.get(r)?.networkState;
    },
    getCaipNetworkByNamespace(e, r) {
      if (!e) return;
      let t = p.state.chains.get(e),
        n = t?.caipNetworks?.find((a) => a.id.toString() === r?.toString());
      return n || t?.networkState?.caipNetwork || t?.caipNetworks?.[0];
    },
    getRequestedCaipNetworkIds() {
      let e = I.state.filterByNamespace;
      return (e ? [_.chains.get(e)] : Array.from(_.chains.values()))
        .flatMap((t) => t?.caipNetworks || [])
        .map((t) => t.caipNetworkId);
    },
    getCaipNetworks(e) {
      return e
        ? p.getRequestedCaipNetworks(e)
        : p.getAllRequestedCaipNetworks();
    },
    getCaipNetworkById(e, r) {
      return $r
        .getCaipNetworks(r)
        .find(
          (t) =>
            t.id.toString() === e.toString() ||
            t.caipNetworkId.toString() === e.toString()
        );
    },
    setLastConnectedSIWECaipNetwork(e) {
      _.lastConnectedSIWECaipNetwork = e;
    },
    getLastConnectedSIWECaipNetwork() {
      return _.lastConnectedSIWECaipNetwork;
    },
    fetchTokenBalance(e) {
      return u(this, null, function* () {
        let r = p.getAccountData();
        if (!r) return [];
        let t = p.state.activeCaipNetwork?.caipNetworkId,
          n = p.state.activeCaipNetwork?.chainNamespace,
          a = p.state.activeCaipAddress,
          s = a ? O.getPlainAddress(a) : void 0;
        if (
          (p.setAccountProp("balanceLoading", !0, n),
          r.lastRetry && !O.isAllowedRetry(r.lastRetry, 30 * te.ONE_SEC_MS))
        )
          return p.setAccountProp("balanceLoading", !1, n), [];
        try {
          if (s && t && n) {
            let o = yield $e.getMyTokensWithBalance();
            return (
              p.setAccountProp("tokenBalance", o, n),
              p.setAccountProp("lastRetry", void 0, n),
              p.setAccountProp("balanceLoading", !1, n),
              o
            );
          }
        } catch (o) {
          p.setAccountProp("lastRetry", Date.now(), n),
            e?.(o),
            Ue.showError("Token Balance Unavailable");
        } finally {
          p.setAccountProp("balanceLoading", !1, n);
        }
        return [];
      });
    },
    isCaipNetworkDisabled(e) {
      let r = e.chainNamespace,
        t = !!p.getAccountData(r)?.caipAddress,
        n = p.getAllApprovedCaipNetworkIds(),
        a = p.getNetworkProp("supportsAllNetworks", r) !== !1,
        s = I.getConnectorId(r),
        o = I.getAuthConnector(),
        c = s === k.CONNECTOR_ID.AUTH && o;
      return !t || a || c ? !1 : !n?.includes(e.caipNetworkId);
    },
  },
  p = ce($r);
var Fs = {
    purchaseCurrencies: [
      {
        id: "2b92315d-eab7-5bef-84fa-089a131333f5",
        name: "USD Coin",
        symbol: "USDC",
        networks: [
          {
            name: "ethereum-mainnet",
            display_name: "Ethereum",
            chain_id: "1",
            contract_address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
          },
          {
            name: "polygon-mainnet",
            display_name: "Polygon",
            chain_id: "137",
            contract_address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
          },
        ],
      },
      {
        id: "2b92315d-eab7-5bef-84fa-089a131333f5",
        name: "Ether",
        symbol: "ETH",
        networks: [
          {
            name: "ethereum-mainnet",
            display_name: "Ethereum",
            chain_id: "1",
            contract_address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
          },
          {
            name: "polygon-mainnet",
            display_name: "Polygon",
            chain_id: "137",
            contract_address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
          },
        ],
      },
    ],
    paymentCurrencies: [
      {
        id: "USD",
        payment_method_limits: [
          { id: "card", min: "10.00", max: "7500.00" },
          { id: "ach_bank_account", min: "10.00", max: "25000.00" },
        ],
      },
      {
        id: "EUR",
        payment_method_limits: [
          { id: "card", min: "10.00", max: "7500.00" },
          { id: "ach_bank_account", min: "10.00", max: "25000.00" },
        ],
      },
    ],
  },
  Yr = O.getBlockchainApiUrl(),
  _e = V({
    clientId: null,
    api: new Ne({ baseUrl: Yr, clientId: null }),
    supportedChains: { http: [], ws: [] },
  }),
  D = {
    state: _e,
    get(e) {
      return u(this, null, function* () {
        let { st: r, sv: t } = D.getSdkProperties(),
          n = x.state.projectId,
          a = h(l({}, e.params || {}), { st: r, sv: t, projectId: n });
        return _e.api.get(h(l({}, e), { params: a }));
      });
    },
    getSdkProperties() {
      let { sdkType: e, sdkVersion: r } = x.state;
      return { st: e || "unknown", sv: r || "unknown" };
    },
    isNetworkSupported(e) {
      return u(this, null, function* () {
        if (!e) return !1;
        try {
          _e.supportedChains.http.length || (yield D.getSupportedNetworks());
        } catch {
          return !1;
        }
        return _e.supportedChains.http.includes(e);
      });
    },
    getSupportedNetworks() {
      return u(this, null, function* () {
        try {
          let e = yield D.get({ path: "v1/supported-chains" });
          return (_e.supportedChains = e), e;
        } catch {
          return _e.supportedChains;
        }
      });
    },
    fetchIdentity(r) {
      return u(this, arguments, function* ({ address: e }) {
        let t = E.getIdentityFromCacheForAddress(e);
        if (t) return t;
        let n = yield D.get({
          path: `/v1/identity/${e}`,
          params: {
            sender: p.state.activeCaipAddress
              ? O.getPlainAddress(p.state.activeCaipAddress)
              : void 0,
          },
        });
        return (
          E.updateIdentityCache({
            address: e,
            identity: n,
            timestamp: Date.now(),
          }),
          n
        );
      });
    },
    fetchTransactions(s) {
      return u(
        this,
        arguments,
        function* ({ account: e, cursor: r, signal: t, cache: n, chainId: a }) {
          if (
            !(yield D.isNetworkSupported(
              p.state.activeCaipNetwork?.caipNetworkId
            ))
          )
            return { data: [], next: void 0 };
          let c = E.getTransactionsCacheForAddress({ address: e, chainId: a });
          if (c) return c;
          let d = yield D.get({
            path: `/v1/account/${e}/history`,
            params: { cursor: r, chainId: a },
            signal: t,
            cache: n,
          });
          return (
            E.updateTransactionsCache({
              address: e,
              chainId: a,
              timestamp: Date.now(),
              transactions: d,
            }),
            d
          );
        }
      );
    },
    fetchSwapQuote(s) {
      return u(
        this,
        arguments,
        function* ({ amount: e, userAddress: r, from: t, to: n, gasPrice: a }) {
          return (yield D.isNetworkSupported(
            p.state.activeCaipNetwork?.caipNetworkId
          ))
            ? D.get({
                path: "/v1/convert/quotes",
                headers: { "Content-Type": "application/json" },
                params: {
                  amount: e,
                  userAddress: r,
                  from: t,
                  to: n,
                  gasPrice: a,
                },
              })
            : { quotes: [] };
        }
      );
    },
    fetchSwapTokens(r) {
      return u(this, arguments, function* ({ chainId: e }) {
        return (yield D.isNetworkSupported(
          p.state.activeCaipNetwork?.caipNetworkId
        ))
          ? D.get({ path: "/v1/convert/tokens", params: { chainId: e } })
          : { tokens: [] };
      });
    },
    fetchTokenPrice(r) {
      return u(this, arguments, function* ({ addresses: e }) {
        if (
          !(yield D.isNetworkSupported(
            p.state.activeCaipNetwork?.caipNetworkId
          ))
        )
          return { fungibles: [] };
        let n = E.getTokenPriceCacheForAddresses(e);
        if (n) return n;
        let a = yield _e.api.post({
          path: "/v1/fungible/price",
          body: { currency: "usd", addresses: e, projectId: x.state.projectId },
          headers: { "Content-Type": "application/json" },
        });
        return (
          E.updateTokenPriceCache({
            addresses: e,
            timestamp: Date.now(),
            tokenPrice: a,
          }),
          a
        );
      });
    },
    fetchSwapAllowance(t) {
      return u(
        this,
        arguments,
        function* ({ tokenAddress: e, userAddress: r }) {
          return (yield D.isNetworkSupported(
            p.state.activeCaipNetwork?.caipNetworkId
          ))
            ? D.get({
                path: "/v1/convert/allowance",
                params: { tokenAddress: e, userAddress: r },
                headers: { "Content-Type": "application/json" },
              })
            : { allowance: "0" };
        }
      );
    },
    fetchGasPrice(r) {
      return u(this, arguments, function* ({ chainId: e }) {
        let { st: t, sv: n } = D.getSdkProperties();
        if (
          !(yield D.isNetworkSupported(
            p.state.activeCaipNetwork?.caipNetworkId
          ))
        )
          throw new Error("Network not supported for Gas Price");
        return D.get({
          path: "/v1/convert/gas-price",
          headers: { "Content-Type": "application/json" },
          params: { chainId: e, st: t, sv: n },
        });
      });
    },
    generateSwapCalldata(s) {
      return u(
        this,
        arguments,
        function* ({
          amount: e,
          from: r,
          to: t,
          userAddress: n,
          disableEstimate: a,
        }) {
          if (
            !(yield D.isNetworkSupported(
              p.state.activeCaipNetwork?.caipNetworkId
            ))
          )
            throw new Error("Network not supported for Swaps");
          return _e.api.post({
            path: "/v1/convert/build-transaction",
            headers: { "Content-Type": "application/json" },
            body: {
              amount: e,
              eip155: { slippage: te.CONVERT_SLIPPAGE_TOLERANCE },
              projectId: x.state.projectId,
              from: r,
              to: t,
              userAddress: n,
              disableEstimate: a,
            },
          });
        }
      );
    },
    generateApproveCalldata(n) {
      return u(this, arguments, function* ({ from: e, to: r, userAddress: t }) {
        let { st: a, sv: s } = D.getSdkProperties();
        if (
          !(yield D.isNetworkSupported(
            p.state.activeCaipNetwork?.caipNetworkId
          ))
        )
          throw new Error("Network not supported for Swaps");
        return D.get({
          path: "/v1/convert/build-approve",
          headers: { "Content-Type": "application/json" },
          params: { userAddress: t, from: e, to: r, st: a, sv: s },
        });
      });
    },
    getBalance(e, r, t) {
      return u(this, null, function* () {
        let { st: n, sv: a } = D.getSdkProperties();
        if (
          !(yield D.isNetworkSupported(
            p.state.activeCaipNetwork?.caipNetworkId
          ))
        )
          return Ue.showError("Token Balance Unavailable"), { balances: [] };
        let o = `${r}:${e}`,
          c = E.getBalanceCacheForCaipAddress(o);
        if (c) return c;
        let d = yield D.get({
          path: `/v1/account/${e}/balance`,
          params: { currency: "usd", chainId: r, forceUpdate: t, st: n, sv: a },
        });
        return (
          E.updateBalanceCache({
            caipAddress: o,
            balance: d,
            timestamp: Date.now(),
          }),
          d
        );
      });
    },
    lookupEnsName(e) {
      return u(this, null, function* () {
        return (yield D.isNetworkSupported(
          p.state.activeCaipNetwork?.caipNetworkId
        ))
          ? D.get({
              path: `/v1/profile/account/${e}`,
              params: { apiVersion: "2" },
            })
          : { addresses: {}, attributes: [] };
      });
    },
    reverseLookupEnsName(r) {
      return u(this, arguments, function* ({ address: e }) {
        if (
          !(yield D.isNetworkSupported(
            p.state.activeCaipNetwork?.caipNetworkId
          ))
        )
          return [];
        let n = p.getAccountData()?.address;
        return D.get({
          path: `/v1/profile/reverse/${e}`,
          params: { sender: n, apiVersion: "2" },
        });
      });
    },
    getEnsNameSuggestions(e) {
      return u(this, null, function* () {
        return (yield D.isNetworkSupported(
          p.state.activeCaipNetwork?.caipNetworkId
        ))
          ? D.get({
              path: `/v1/profile/suggestions/${e}`,
              params: { zone: "reown.id" },
            })
          : { suggestions: [] };
      });
    },
    registerEnsName(a) {
      return u(
        this,
        arguments,
        function* ({ coinType: e, address: r, message: t, signature: n }) {
          return (yield D.isNetworkSupported(
            p.state.activeCaipNetwork?.caipNetworkId
          ))
            ? _e.api.post({
                path: "/v1/profile/account",
                body: { coin_type: e, address: r, message: t, signature: n },
                headers: { "Content-Type": "application/json" },
              })
            : { success: !1 };
        }
      );
    },
    generateOnRampURL(s) {
      return u(
        this,
        arguments,
        function* ({
          destinationWallets: e,
          partnerUserId: r,
          defaultNetwork: t,
          purchaseAmount: n,
          paymentAmount: a,
        }) {
          return (yield D.isNetworkSupported(
            p.state.activeCaipNetwork?.caipNetworkId
          ))
            ? (yield _e.api.post({
                path: "/v1/generators/onrampurl",
                params: { projectId: x.state.projectId },
                body: {
                  destinationWallets: e,
                  defaultNetwork: t,
                  partnerUserId: r,
                  defaultExperience: "buy",
                  presetCryptoAmount: n,
                  presetFiatAmount: a,
                },
              })).url
            : "";
        }
      );
    },
    getOnrampOptions() {
      return u(this, null, function* () {
        if (
          !(yield D.isNetworkSupported(
            p.state.activeCaipNetwork?.caipNetworkId
          ))
        )
          return { paymentCurrencies: [], purchaseCurrencies: [] };
        try {
          return yield D.get({ path: "/v1/onramp/options" });
        } catch {
          return Fs;
        }
      });
    },
    getOnrampQuote(a) {
      return u(
        this,
        arguments,
        function* ({
          purchaseCurrency: e,
          paymentCurrency: r,
          amount: t,
          network: n,
        }) {
          try {
            return (yield D.isNetworkSupported(
              p.state.activeCaipNetwork?.caipNetworkId
            ))
              ? yield _e.api.post({
                  path: "/v1/onramp/quote",
                  params: { projectId: x.state.projectId },
                  body: {
                    purchaseCurrency: e,
                    paymentCurrency: r,
                    amount: t,
                    network: n,
                  },
                })
              : null;
          } catch {
            return {
              networkFee: { amount: t, currency: r.id },
              paymentSubtotal: { amount: t, currency: r.id },
              paymentTotal: { amount: t, currency: r.id },
              purchaseAmount: { amount: t, currency: r.id },
              quoteId: "mocked-quote-id",
            };
          }
        }
      );
    },
    getSmartSessions(e) {
      return u(this, null, function* () {
        return (yield D.isNetworkSupported(
          p.state.activeCaipNetwork?.caipNetworkId
        ))
          ? D.get({ path: `/v1/sessions/${e}` })
          : [];
      });
    },
    revokeSmartSession(e, r, t) {
      return u(this, null, function* () {
        return (yield D.isNetworkSupported(
          p.state.activeCaipNetwork?.caipNetworkId
        ))
          ? _e.api.post({
              path: `/v1/sessions/${e}/revoke`,
              params: { projectId: x.state.projectId },
              body: { pci: r, signature: t },
            })
          : { success: !1 };
      });
    },
    setClientId(e) {
      (_e.clientId = e), (_e.api = new Ne({ baseUrl: Yr, clientId: e }));
    },
  };
export {
  Ws as a,
  js as b,
  te as c,
  E as d,
  O as e,
  Q as f,
  me as g,
  qt as h,
  xr as i,
  x as j,
  Ue as k,
  D as l,
  Fe as m,
  ce as n,
  fe as o,
  Fr as p,
  K as q,
  U as r,
  B as s,
  rt as t,
  I as u,
  Nt as v,
  ye as w,
  dl as x,
  Qt as y,
  nt as z,
  b as A,
  $e as B,
  Gr as C,
  Zr as D,
  be as E,
  Kr as F,
  H as G,
  p as H,
  jr as I,
  ee as J,
};
