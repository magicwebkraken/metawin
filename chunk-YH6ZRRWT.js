import { a as Ne } from "./chunk-AKYI4DRB.js";
import { a as ve } from "./chunk-BD3I2RUR.js";
import {
  a as P,
  c as z,
  d as O,
  e as me,
  f as Ee,
  g as G,
} from "./chunk-T7KGZUCO.js";
import { e as ye, f as Te } from "./chunk-L4ZNINEC.js";
import {
  a as Ce,
  b as fe,
  c as we,
  d as Z,
  e as Ae,
  f as j,
  g as ge,
  h as b,
} from "./chunk-HK6N7TS4.js";
import {
  A as v,
  C as ue,
  D as m,
  E as q,
  G as ae,
  H as i,
  J as M,
  c as N,
  d as f,
  e as y,
  f as se,
  g as X,
  j as h,
  k as re,
  l as ie,
  p as he,
  q as _,
  r as B,
  s as F,
  t as D,
  u as w,
  w as V,
  x as pe,
  y as oe,
} from "./chunk-U7GUEFJZ.js";
import { b as C, c as de, i as H, p as le } from "./chunk-2K64HG7Q.js";
import { W as ne } from "./chunk-5G3DVQVW.js";
import { a as g, b as R, f as K, m as ce, n as l } from "./chunk-VNDKUXGB.js";
function Se(a) {
  if (a.length >= 255) throw new TypeError("Alphabet too long");
  let e = new Uint8Array(256);
  for (let c = 0; c < e.length; c++) e[c] = 255;
  for (let c = 0; c < a.length; c++) {
    let u = a.charAt(c),
      A = u.charCodeAt(0);
    if (e[A] !== 255) throw new TypeError(u + " is ambiguous");
    e[A] = c;
  }
  let t = a.length,
    n = a.charAt(0),
    s = Math.log(t) / Math.log(256),
    r = Math.log(256) / Math.log(t);
  function o(c) {
    if (
      (c instanceof Uint8Array ||
        (ArrayBuffer.isView(c)
          ? (c = new Uint8Array(c.buffer, c.byteOffset, c.byteLength))
          : Array.isArray(c) && (c = Uint8Array.from(c))),
      !(c instanceof Uint8Array))
    )
      throw new TypeError("Expected Uint8Array");
    if (c.length === 0) return "";
    let u = 0,
      A = 0,
      E = 0,
      S = c.length;
    for (; E !== S && c[E] === 0; ) E++, u++;
    let T = ((S - E) * r + 1) >>> 0,
      k = new Uint8Array(T);
    for (; E !== S; ) {
      let I = c[E],
        L = 0;
      for (let x = T - 1; (I !== 0 || L < A) && x !== -1; x--, L++)
        (I += (256 * k[x]) >>> 0), (k[x] = I % t >>> 0), (I = (I / t) >>> 0);
      if (I !== 0) throw new Error("Non-zero carry");
      (A = L), E++;
    }
    let U = T - A;
    for (; U !== T && k[U] === 0; ) U++;
    let W = n.repeat(u);
    for (; U < T; ++U) W += a.charAt(k[U]);
    return W;
  }
  function d(c) {
    if (typeof c != "string") throw new TypeError("Expected String");
    if (c.length === 0) return new Uint8Array();
    let u = 0,
      A = 0,
      E = 0;
    for (; c[u] === n; ) A++, u++;
    let S = ((c.length - u) * s + 1) >>> 0,
      T = new Uint8Array(S);
    for (; u < c.length; ) {
      let I = c.charCodeAt(u);
      if (I > 255) return;
      let L = e[I];
      if (L === 255) return;
      let x = 0;
      for (let Y = S - 1; (L !== 0 || x < E) && Y !== -1; Y--, x++)
        (L += (t * T[Y]) >>> 0), (T[Y] = L % 256 >>> 0), (L = (L / 256) >>> 0);
      if (L !== 0) throw new Error("Non-zero carry");
      (E = x), u++;
    }
    let k = S - E;
    for (; k !== S && T[k] === 0; ) k++;
    let U = new Uint8Array(A + (S - k)),
      W = A;
    for (; k !== S; ) U[W++] = T[k++];
    return U;
  }
  function p(c) {
    let u = d(c);
    if (u) return u;
    throw new Error("Non-base" + t + " character");
  }
  return { encode: o, decodeUnsafe: d, decode: p };
}
var Ie = Se;
var Pe = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
  ke = Ie(Pe);
var $ = {
  ERROR_CODE_UNRECOGNIZED_CHAIN_ID: 4902,
  ERROR_CODE_DEFAULT: 5e3,
  ERROR_INVALID_CHAIN_ID: 32603,
};
var J = class extends Ae {
  setUniversalProvider(e) {
    return l(this, null, function* () {
      if (!this.namespace)
        throw new Error(
          "UniversalAdapter:setUniversalProvider - namespace is required"
        );
      return (
        this.addConnector(
          new ge({
            provider: e,
            caipNetworks: this.getCaipNetworks(),
            namespace: this.namespace,
          })
        ),
        Promise.resolve()
      );
    });
  }
  connect(e) {
    return l(this, null, function* () {
      return Promise.resolve({
        id: "WALLET_CONNECT",
        type: "WALLET_CONNECT",
        chainId: Number(e.chainId),
        provider: this.provider,
        address: "",
      });
    });
  }
  disconnect() {
    return l(this, null, function* () {
      try {
        yield this.getWalletConnectConnector().disconnect(),
          this.emit("disconnect");
      } catch (e) {
        console.warn("UniversalAdapter:disconnect - error", e);
      }
      return { connections: [] };
    });
  }
  syncConnections() {
    return Promise.resolve();
  }
  getAccounts(t) {
    return l(this, arguments, function* ({ namespace: e }) {
      let s =
        this.provider?.session?.namespaces?.[e]?.accounts
          ?.map((r) => {
            let [, , o] = r.split(":");
            return o;
          })
          .filter((r, o, d) => d.indexOf(r) === o) || [];
      return Promise.resolve({
        accounts: s.map((r) =>
          y.createAccount(e, r, e === "bip122" ? "payment" : "eoa")
        ),
      });
    });
  }
  syncConnectors() {
    return l(this, null, function* () {
      return Promise.resolve();
    });
  }
  getBalance(e) {
    return l(this, null, function* () {
      if (
        !(
          e.caipNetwork &&
          N.BALANCE_SUPPORTED_CHAINS.includes(e.caipNetwork?.chainNamespace)
        ) ||
        e.caipNetwork?.testnet
      )
        return {
          balance: "0.00",
          symbol: e.caipNetwork?.nativeCurrency.symbol || "",
        };
      let n = i.getAccountData();
      if (n?.balanceLoading && e.chainId === i.state.activeCaipNetwork?.id)
        return {
          balance: n?.balance || "0.00",
          symbol: n?.balanceSymbol || "",
        };
      let r = (yield i.fetchTokenBalance()).find(
        (o) =>
          o.chainId === `${e.caipNetwork?.chainNamespace}:${e.chainId}` &&
          o.symbol === e.caipNetwork?.nativeCurrency.symbol
      );
      return {
        balance: r?.quantity.numeric || "0.00",
        symbol: r?.symbol || e.caipNetwork?.nativeCurrency.symbol || "",
      };
    });
  }
  signMessage(e) {
    return l(this, null, function* () {
      let { provider: t, message: n, address: s } = e;
      if (!t)
        throw new Error("UniversalAdapter:signMessage - provider is undefined");
      let r = "";
      return (
        i.state.activeCaipNetwork?.chainNamespace === C.CHAIN.SOLANA
          ? (r = (yield t.request(
              {
                method: "solana_signMessage",
                params: {
                  message: ke.encode(new TextEncoder().encode(n)),
                  pubkey: s,
                },
              },
              i.state.activeCaipNetwork?.caipNetworkId
            )).signature)
          : (r = yield t.request(
              { method: "personal_sign", params: [n, s] },
              i.state.activeCaipNetwork?.caipNetworkId
            )),
        { signature: r }
      );
    });
  }
  estimateGas() {
    return l(this, null, function* () {
      return Promise.resolve({ gas: BigInt(0) });
    });
  }
  sendTransaction() {
    return l(this, null, function* () {
      return Promise.resolve({ hash: "" });
    });
  }
  walletGetAssets(e) {
    return Promise.resolve({});
  }
  writeContract() {
    return l(this, null, function* () {
      return Promise.resolve({ hash: "" });
    });
  }
  emitFirstAvailableConnection() {}
  parseUnits() {
    return 0n;
  }
  formatUnits() {
    return "0";
  }
  getCapabilities() {
    return l(this, null, function* () {
      return Promise.resolve({});
    });
  }
  grantPermissions() {
    return l(this, null, function* () {
      return Promise.resolve({});
    });
  }
  revokePermissions() {
    return l(this, null, function* () {
      return Promise.resolve("0x");
    });
  }
  syncConnection() {
    return l(this, null, function* () {
      return Promise.resolve({
        id: "WALLET_CONNECT",
        type: "WALLET_CONNECT",
        chainId: 1,
        provider: this.provider,
        address: "",
      });
    });
  }
  switchNetwork(e) {
    return l(this, null, function* () {
      let { caipNetwork: t } = e,
        n = this.getWalletConnectConnector();
      if (t.chainNamespace === C.CHAIN.EVM)
        try {
          yield n.provider?.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: ne(t.id) }],
          });
        } catch (s) {
          if (
            s.code === $.ERROR_CODE_UNRECOGNIZED_CHAIN_ID ||
            s.code === $.ERROR_INVALID_CHAIN_ID ||
            s.code === $.ERROR_CODE_DEFAULT ||
            s?.data?.originalError?.code === $.ERROR_CODE_UNRECOGNIZED_CHAIN_ID
          )
            try {
              yield n.provider?.request({
                method: "wallet_addEthereumChain",
                params: [
                  {
                    chainId: ne(t.id),
                    rpcUrls: [t?.rpcUrls.chainDefault?.http],
                    chainName: t.name,
                    nativeCurrency: t.nativeCurrency,
                    blockExplorerUrls: [t.blockExplorers?.default.url],
                  },
                ],
              });
            } catch {
              throw new Error("Chain is not supported");
            }
        }
      n.provider.setDefaultChain(t.caipNetworkId);
    });
  }
  getWalletConnectProvider() {
    return this.connectors.find((n) => n.type === "WALLET_CONNECT")?.provider;
  }
};
var Ue = [
    "email",
    "socials",
    "swaps",
    "onramp",
    "activity",
    "reownBranding",
    "multiWallet",
    "emailCapture",
    "payWithExchange",
    "payments",
    "reownAuthentication",
  ],
  Q = {
    email: {
      apiFeatureName: "social_login",
      localFeatureName: "email",
      returnType: !1,
      isLegacy: !1,
      isAvailableOnBasic: !1,
      processApi: (a) => {
        if (!a?.config) return !1;
        let e = a.config;
        return !!a.isEnabled && e.includes("email");
      },
      processFallback: (a) =>
        a === void 0 ? N.DEFAULT_REMOTE_FEATURES.email : !!a,
    },
    socials: {
      apiFeatureName: "social_login",
      localFeatureName: "socials",
      returnType: !1,
      isLegacy: !1,
      isAvailableOnBasic: !1,
      processApi: (a) => {
        if (!a?.config) return !1;
        let e = a.config;
        return a.isEnabled && e.length > 0
          ? e.filter((t) => t !== "email")
          : !1;
      },
      processFallback: (a) =>
        a === void 0
          ? N.DEFAULT_REMOTE_FEATURES.socials
          : typeof a == "boolean"
          ? a
            ? N.DEFAULT_REMOTE_FEATURES.socials
            : !1
          : a,
    },
    swaps: {
      apiFeatureName: "swap",
      localFeatureName: "swaps",
      returnType: !1,
      isLegacy: !1,
      isAvailableOnBasic: !1,
      processApi: (a) => {
        if (!a?.config) return !1;
        let e = a.config;
        return a.isEnabled && e.length > 0 ? e : !1;
      },
      processFallback: (a) =>
        a === void 0
          ? N.DEFAULT_REMOTE_FEATURES.swaps
          : typeof a == "boolean"
          ? a
            ? N.DEFAULT_REMOTE_FEATURES.swaps
            : !1
          : a,
    },
    onramp: {
      apiFeatureName: "onramp",
      localFeatureName: "onramp",
      returnType: !1,
      isLegacy: !1,
      isAvailableOnBasic: !1,
      processApi: (a) => {
        if (!a?.config) return !1;
        let e = a.config;
        return a.isEnabled && e.length > 0 ? e : !1;
      },
      processFallback: (a) =>
        a === void 0
          ? N.DEFAULT_REMOTE_FEATURES.onramp
          : typeof a == "boolean"
          ? a
            ? N.DEFAULT_REMOTE_FEATURES.onramp
            : !1
          : a,
    },
    activity: {
      apiFeatureName: "activity",
      localFeatureName: "history",
      returnType: !1,
      isLegacy: !0,
      isAvailableOnBasic: !1,
      processApi: (a) => !!a.isEnabled,
      processFallback: (a) =>
        a === void 0 ? N.DEFAULT_REMOTE_FEATURES.activity : !!a,
    },
    reownBranding: {
      apiFeatureName: "reown_branding",
      localFeatureName: "reownBranding",
      returnType: !1,
      isLegacy: !1,
      isAvailableOnBasic: !1,
      processApi: (a) => !!a.isEnabled,
      processFallback: (a) =>
        a === void 0 ? N.DEFAULT_REMOTE_FEATURES.reownBranding : !!a,
    },
    emailCapture: {
      apiFeatureName: "email_capture",
      localFeatureName: "emailCapture",
      returnType: !1,
      isLegacy: !1,
      isAvailableOnBasic: !1,
      processApi: (a) => a.isEnabled && (a.config ?? []),
      processFallback: (a) => !1,
    },
    multiWallet: {
      apiFeatureName: "multi_wallet",
      localFeatureName: "multiWallet",
      returnType: !1,
      isLegacy: !1,
      isAvailableOnBasic: !1,
      processApi: (a) => !!a.isEnabled,
      processFallback: () => N.DEFAULT_REMOTE_FEATURES.multiWallet,
    },
    payWithExchange: {
      apiFeatureName: "fund_from_exchange",
      localFeatureName: "payWithExchange",
      returnType: !1,
      isLegacy: !1,
      isAvailableOnBasic: !1,
      processApi: (a) => !!a.isEnabled,
      processFallback: () => N.DEFAULT_REMOTE_FEATURES.payWithExchange,
    },
    payments: {
      apiFeatureName: "payments",
      localFeatureName: "payments",
      returnType: !1,
      isLegacy: !1,
      isAvailableOnBasic: !1,
      processApi: (a) => !!a.isEnabled,
      processFallback: () => N.DEFAULT_REMOTE_FEATURES.payments,
    },
    reownAuthentication: {
      apiFeatureName: "reown_authentication",
      localFeatureName: "reownAuthentication",
      returnType: !1,
      isLegacy: !1,
      isAvailableOnBasic: !1,
      processApi: (a) => !!a.isEnabled,
      processFallback: (a) =>
        typeof a > "u" ? N.DEFAULT_REMOTE_FEATURES.reownAuthentication : !!a,
    },
  },
  Re = {
    localSettingsOverridden: new Set(),
    getApiConfig(a, e) {
      return e?.find((t) => t.id === a);
    },
    addWarning(a, e) {
      if (a !== void 0) {
        let t = Q[e],
          n = t.isLegacy
            ? `"features.${t.localFeatureName}" (now "${e}")`
            : `"features.${e}"`;
        this.localSettingsOverridden.add(n);
      }
    },
    processFeature(a, e, t, n, s) {
      let r = Q[a],
        o = e[r.localFeatureName];
      if (s && !r.isAvailableOnBasic) return !1;
      if (n) {
        let d = this.getApiConfig(r.apiFeatureName, t);
        return d?.config === null
          ? this.processFallbackFeature(a, o)
          : d?.config
          ? (o !== void 0 && this.addWarning(o, a),
            this.processApiFeature(a, d))
          : !1;
      }
      return this.processFallbackFeature(a, o);
    },
    processApiFeature(a, e) {
      return Q[a].processApi(e);
    },
    processFallbackFeature(a, e) {
      return Q[a].processFallback(e);
    },
    fetchRemoteFeatures(a) {
      return l(this, null, function* () {
        let e = a.basic ?? !1,
          t = a.features || {};
        this.localSettingsOverridden.clear();
        let n = null,
          s = !1;
        try {
          (n = yield B.fetchProjectConfig()), (s = n != null);
        } catch (o) {
          console.warn(
            "[Reown Config] Failed to fetch remote project configuration. Using local/default values.",
            o
          );
        }
        let r =
          s && !e
            ? N.DEFAULT_REMOTE_FEATURES
            : N.DEFAULT_REMOTE_FEATURES_DISABLED;
        try {
          for (let o of Ue) {
            let d = this.processFeature(o, t, n, s, e);
            Object.assign(r, { [o]: d });
          }
        } catch (o) {
          return (
            console.warn(
              "[Reown Config] Failed to process the configuration from Cloud. Using default values.",
              o
            ),
            N.DEFAULT_REMOTE_FEATURES
          );
        }
        if (s && this.localSettingsOverridden.size > 0) {
          let o = `Your local configuration for ${Array.from(
            this.localSettingsOverridden
          ).join(
            ", "
          )} was ignored because a remote configuration was successfully fetched. Please manage these features via your project dashboard on dashboard.reown.com.`;
          b.open(
            {
              debugMessage:
                O.ALERT_WARNINGS.LOCAL_CONFIGURATION_IGNORED.debugMessage(o),
            },
            "warning"
          );
        }
        return r;
      });
    },
  };
var ee = class {
  constructor(e) {
    (this.chainNamespaces = []),
      (this.features = {}),
      (this.remoteFeatures = {}),
      (this.reportedAlertErrors = {}),
      (this.getCaipNetwork = (t, n) => {
        if (t) {
          let s = i.getCaipNetworks(t)?.find((d) => d.id === n);
          if (s) return s;
          let r = i.getNetworkData(t)?.caipNetwork;
          return (
            r ||
            i
              .getRequestedCaipNetworks(t)
              .filter((d) => d.chainNamespace === t)?.[0]
          );
        }
        return i.state.activeCaipNetwork || this.defaultCaipNetwork;
      }),
      (this.getCaipNetworkId = () => {
        let t = this.getCaipNetwork();
        if (t) return t.id;
      }),
      (this.getCaipNetworks = (t) => i.getCaipNetworks(t)),
      (this.getActiveChainNamespace = () => i.state.activeChain),
      (this.setRequestedCaipNetworks = (t, n) => {
        i.setRequestedCaipNetworks(t, n);
      }),
      (this.getApprovedCaipNetworkIds = () => i.getAllApprovedCaipNetworkIds()),
      (this.getCaipAddress = (t) =>
        i.state.activeChain === t || !t
          ? i.state.activeCaipAddress
          : i.state.chains.get(t)?.accountState?.caipAddress),
      (this.setClientId = (t) => {
        ie.setClientId(t);
      }),
      (this.getProvider = (t) => m.getProvider(t)),
      (this.getProviderType = (t) => m.getProviderId(t)),
      (this.getPreferredAccountType = (t) => V(t)),
      (this.setCaipAddress = (t, n, s = !1) => {
        i.setAccountProp("caipAddress", t, n, s),
          i.setAccountProp("address", y.getPlainAddress(t), n, s);
      }),
      (this.setBalance = (t, n, s) => {
        i.setAccountProp("balance", t, s),
          i.setAccountProp("balanceSymbol", n, s);
      }),
      (this.setProfileName = (t, n) => {
        i.setAccountProp("profileName", t, n);
      }),
      (this.setProfileImage = (t, n) => {
        i.setAccountProp("profileImage", t, n);
      }),
      (this.setUser = (t, n) => {
        i.setAccountProp("user", t, n);
      }),
      (this.resetAccount = (t) => {
        i.resetAccount(t);
      }),
      (this.setCaipNetwork = (t) => {
        i.setActiveCaipNetwork(t);
      }),
      (this.setCaipNetworkOfNamespace = (t, n) => {
        i.setChainNetworkData(n, { caipNetwork: t });
      }),
      (this.setStatus = (t, n) => {
        i.setAccountProp("status", t, n),
          w.isConnected()
            ? f.setConnectionStatus("connected")
            : f.setConnectionStatus("disconnected");
      }),
      (this.getAddressByChainNamespace = (t) => i.getAccountData(t)?.address),
      (this.setConnectors = (t) => {
        let n = [...w.state.allConnectors, ...t];
        w.setConnectors(n);
      }),
      (this.setConnections = (t, n) => {
        f.setConnections(t, n), v.setConnections(t, n);
      }),
      (this.fetchIdentity = (t) => ie.fetchIdentity(t)),
      (this.getReownName = (t) => we.getNamesForAddress(t)),
      (this.getConnectors = () => w.getConnectors()),
      (this.getConnectorImage = (t) => he.getConnectorImage(t)),
      (this.getConnections = (t) =>
        this.remoteFeatures.multiWallet
          ? oe.getConnectionsData(t).connections
          : (b.open(
              C.REMOTE_FEATURES_ALERTS.MULTI_WALLET_NOT_ENABLED.DEFAULT,
              "info"
            ),
            [])),
      (this.getRecentConnections = (t) =>
        this.remoteFeatures.multiWallet
          ? oe.getConnectionsData(t).recentConnections
          : (b.open(
              C.REMOTE_FEATURES_ALERTS.MULTI_WALLET_NOT_ENABLED.DEFAULT,
              "info"
            ),
            [])),
      (this.switchConnection = (t) =>
        l(this, null, function* () {
          if (!this.remoteFeatures.multiWallet) {
            b.open(
              C.REMOTE_FEATURES_ALERTS.MULTI_WALLET_NOT_ENABLED.DEFAULT,
              "info"
            );
            return;
          }
          yield v.switchConnection(t);
        })),
      (this.deleteConnection = (t) => {
        if (!this.remoteFeatures.multiWallet) {
          b.open(
            C.REMOTE_FEATURES_ALERTS.MULTI_WALLET_NOT_ENABLED.DEFAULT,
            "info"
          );
          return;
        }
        f.deleteAddressFromConnection(t), v.syncStorageConnections();
      }),
      (this.setConnectedWalletInfo = (t, n) => {
        let s = m.getProviderId(n),
          r = t ? R(g({}, t), { type: s }) : void 0;
        i.setAccountProp("connectedWalletInfo", r, n);
      }),
      (this.getIsConnectedState = () => !!i.state.activeCaipAddress),
      (this.addAddressLabel = (t, n, s) => {
        let r = i.getAccountData(s)?.addressLabels || {};
        i.setAccountProp("addressLabels", R(g({}, r), { [t]: n }), s);
      }),
      (this.removeAddressLabel = (t, n) => {
        let s = i.getAccountData(n)?.addressLabels || {};
        i.setAccountProp("addressLabels", R(g({}, s), { [t]: void 0 }), n);
      }),
      (this.getAddress = (t) => {
        let n = t || i.state.activeChain;
        return i.getAccountData(n)?.address;
      }),
      (this.resetNetwork = (t) => {
        i.resetNetwork(t);
      }),
      (this.addConnector = (t) => {
        w.addConnector(t);
      }),
      (this.resetWcConnection = () => {
        v.resetWcConnection();
      }),
      (this.setAddressExplorerUrl = (t, n) => {
        i.setAccountProp("addressExplorerUrl", t, n);
      }),
      (this.setSmartAccountDeployed = (t, n) => {
        i.setAccountProp("smartAccountDeployed", t, n);
      }),
      (this.setPreferredAccountType = (t, n) => {
        i.setAccountProp("preferredAccountType", t, n);
      }),
      (this.setEIP6963Enabled = (t) => {
        h.setEIP6963Enabled(t);
      }),
      (this.handleUnsafeRPCRequest = () => {
        if (this.isOpen()) {
          if (this.isTransactionStackEmpty()) return;
          this.redirect("ApproveTransaction");
        } else this.open({ view: "ApproveTransaction" });
      }),
      (this.options = e),
      (this.version = e.sdkVersion),
      (this.caipNetworks = this.extendCaipNetworks(e)),
      (this.chainNamespaces = this.getChainNamespacesSet(
        e.adapters,
        this.caipNetworks
      )),
      (this.defaultCaipNetwork = this.extendDefaultCaipNetwork(e)),
      (this.chainAdapters = this.createAdapters(e.adapters)),
      (this.readyPromise = this.initialize(e));
  }
  getChainNamespacesSet(e, t) {
    let n = e?.map((r) => r.namespace).filter((r) => !!r);
    if (n?.length) return [...new Set(n)];
    let s = t?.map((r) => r.chainNamespace);
    return [...new Set(s)];
  }
  initialize(e) {
    return l(this, null, function* () {
      if (
        (this.initializeProjectSettings(e),
        this.initControllers(e),
        yield this.initChainAdapters(),
        this.sendInitializeEvent(e),
        h.state.enableReconnect
          ? (yield this.syncExistingConnection(),
            yield this.syncAdapterConnections())
          : yield this.unSyncExistingConnection(),
        !e.basic &&
          !e.manualWCControl &&
          (this.remoteFeatures = yield Re.fetchRemoteFeatures(e)),
        yield B.fetchUsage(),
        h.setRemoteFeatures(this.remoteFeatures),
        this.remoteFeatures.onramp &&
          Ce.setOnrampProviders(this.remoteFeatures.onramp),
        (h.state.remoteFeatures?.email ||
          (Array.isArray(h.state.remoteFeatures?.socials) &&
            h.state.remoteFeatures?.socials.length > 0)) &&
          (yield this.checkAllowedOrigins()),
        h.state.features?.reownAuthentication ||
          h.state.remoteFeatures?.reownAuthentication)
      ) {
        let { ReownAuthentication: t } = yield import("./chunk-M3GU33AJ.js"),
          n = h.state.siwx;
        n instanceof t ||
          (n &&
            console.warn(
              "ReownAuthentication option is enabled, SIWX configuration will be overridden."
            ),
          h.setSIWX(new t()));
      }
    });
  }
  openSend(e) {
    return l(this, null, function* () {
      let t = e.namespace || i.state.activeChain,
        n = this.getCaipAddress(t),
        s = this.getCaipNetwork(t)?.id;
      if (!n) throw new Error("openSend: caipAddress not found");
      if (s?.toString() !== e.chainId.toString()) {
        let r = i.getCaipNetworkById(e.chainId, t);
        if (!r)
          throw new Error(
            `openSend: caipNetwork with chainId ${e.chainId} not found`
          );
        yield this.switchNetwork(r, { throwOnFailure: !0 });
      }
      try {
        let r = me.getTokenSymbolByAddress(e.assetAddress);
        r && (yield B.fetchTokenImages([r]));
      } catch {}
      return (
        yield M.open({ view: "WalletSend", data: { send: e } }),
        new Promise((r, o) => {
          let d = ae.subscribeKey("hash", (u) => {
              u && (c(), r({ hash: u }));
            }),
            p = M.subscribe((u) => {
              u.open || (c(), o(new Error("Modal closed")));
            }),
            c = this.createCleanupHandler([d, p]);
        })
      );
    });
  }
  toModalOptions() {
    function e(n) {
      return n?.view === "Swap";
    }
    function t(n) {
      return n?.view === "WalletSend";
    }
    return { isSwap: e, isSend: t };
  }
  checkAllowedOrigins() {
    return l(this, null, function* () {
      try {
        let e = yield B.fetchAllowedOrigins();
        if (!y.isClient()) return;
        let t = window.location.origin;
        Z.isOriginAllowed(t, e, C.DEFAULT_ALLOWED_ANCESTORS) ||
          b.open(O.ALERT_ERRORS.ORIGIN_NOT_ALLOWED, "error");
      } catch (e) {
        if (!(e instanceof Error)) return;
        switch (e.message) {
          case "RATE_LIMITED":
            b.open(O.ALERT_ERRORS.RATE_LIMITED_APP_CONFIGURATION, "error");
            break;
          case "SERVER_ERROR": {
            let t = e.cause instanceof Error ? e.cause : e;
            b.open(
              {
                displayMessage:
                  O.ALERT_ERRORS.SERVER_ERROR_APP_CONFIGURATION.displayMessage,
                debugMessage:
                  O.ALERT_ERRORS.SERVER_ERROR_APP_CONFIGURATION.debugMessage(
                    t.message
                  ),
              },
              "error"
            );
            break;
          }
          default:
            break;
        }
      }
    });
  }
  createCleanupHandler(e) {
    return () => {
      e.forEach((t) => {
        try {
          t();
        } catch {}
      });
    };
  }
  sendInitializeEvent(e) {
    let t = K(e, []);
    delete t.adapters,
      delete t.universalProvider,
      _.sendEvent({
        type: "track",
        event: "INITIALIZE",
        properties: R(g({}, t), {
          networks: e.networks.map((n) => n.id),
          siweConfig: { options: e.siweConfig?.options || {} },
        }),
      });
  }
  initControllers(e) {
    this.initializeOptionsController(e),
      this.initializeChainController(e),
      this.initializeThemeController(e),
      this.initializeConnectionController(e),
      this.initializeConnectorController();
  }
  initAdapterController() {
    ue.initialize(this.chainAdapters);
  }
  initializeThemeController(e) {
    e.themeMode && D.setThemeMode(e.themeMode),
      e.themeVariables && D.setThemeVariables(e.themeVariables);
  }
  initializeChainController(e) {
    if (!this.connectionControllerClient)
      throw new Error("ConnectionControllerClient must be set");
    i.initialize(e.adapters ?? [], this.caipNetworks, {
      connectionControllerClient: this.connectionControllerClient,
    });
    let t = this.getDefaultNetwork();
    t && i.setActiveCaipNetwork(t);
  }
  initializeConnectionController(e) {
    v.initialize(e.adapters ?? []), v.setWcBasic(e.basic ?? !1);
  }
  initializeConnectorController() {
    w.initialize(this.chainNamespaces);
  }
  initializeProjectSettings(e) {
    h.setProjectId(e.projectId), h.setSdkVersion(e.sdkVersion);
  }
  initializeOptionsController(e) {
    h.setDebug(e.debug !== !1),
      h.setEnableWalletGuide(e.enableWalletGuide !== !1),
      h.setEnableWallets(e.enableWallets !== !1),
      h.setEIP6963Enabled(e.enableEIP6963 !== !1),
      h.setEnableNetworkSwitch(e.enableNetworkSwitch !== !1),
      h.setEnableReconnect(e.enableReconnect !== !1),
      h.setEnableMobileFullScreen(e.enableMobileFullScreen === !0),
      h.setCoinbasePreference(e.coinbasePreference),
      h.setEnableAuthLogger(e.enableAuthLogger !== !1),
      h.setCustomRpcUrls(e.customRpcUrls),
      h.setEnableEmbedded(e.enableEmbedded),
      h.setAllWallets(e.allWallets),
      h.setIncludeWalletIds(e.includeWalletIds),
      h.setExcludeWalletIds(e.excludeWalletIds),
      h.setFeaturedWalletIds(e.featuredWalletIds),
      h.setTokens(e.tokens),
      h.setTermsConditionsUrl(e.termsConditionsUrl),
      h.setPrivacyPolicyUrl(e.privacyPolicyUrl),
      h.setCustomWallets(e.customWallets),
      h.setFeatures(e.features),
      h.setAllowUnsupportedChain(e.allowUnsupportedChain),
      h.setUniversalProviderConfigOverride(e.universalProviderConfigOverride),
      h.setPreferUniversalLinks(e.experimental_preferUniversalLinks),
      h.setDefaultAccountTypes(e.defaultAccountTypes);
    let t = this.getDefaultMetaData();
    if (
      (!e.metadata && t && (e.metadata = t),
      h.setMetadata(e.metadata),
      h.setDisableAppend(e.disableAppend),
      h.setEnableEmbedded(e.enableEmbedded),
      h.setSIWX(e.siwx),
      (this.features = h.state.features ?? {}),
      !e.projectId)
    ) {
      b.open(O.ALERT_ERRORS.PROJECT_ID_NOT_CONFIGURED, "error");
      return;
    }
    if (e.adapters?.find((s) => s.namespace === C.CHAIN.EVM) && e.siweConfig) {
      if (e.siwx)
        throw new Error("Cannot set both `siweConfig` and `siwx` options");
      h.setSIWX(e.siweConfig.mapToSIWX());
    }
  }
  getDefaultMetaData() {
    return y.isClient()
      ? {
          name: document.getElementsByTagName("title")?.[0]?.textContent || "",
          description:
            document.querySelector('meta[property="og:description"]')
              ?.content || "",
          url: window.location.origin,
          icons: [document.querySelector('link[rel~="icon"]')?.href || ""],
        }
      : null;
  }
  setUnsupportedNetwork(e) {
    let t = this.getActiveChainNamespace();
    if (t) {
      let n = G.getUnsupportedNetwork(`${t}:${e}`);
      i.setActiveCaipNetwork(n);
    }
  }
  getDefaultNetwork() {
    return G.getCaipNetworkFromStorage(this.defaultCaipNetwork);
  }
  extendCaipNetwork(e, t) {
    return G.extendCaipNetwork(e, {
      customNetworkImageUrls: t.chainImages,
      projectId: t.projectId,
    });
  }
  extendCaipNetworks(e) {
    return G.extendCaipNetworks(e.networks, {
      customNetworkImageUrls: e.chainImages,
      customRpcUrls: e.customRpcUrls,
      projectId: e.projectId,
    });
  }
  extendDefaultCaipNetwork(e) {
    let t = e.networks.find((s) => s.id === e.defaultNetwork?.id);
    return t
      ? G.extendCaipNetwork(t, {
          customNetworkImageUrls: e.chainImages,
          customRpcUrls: e.customRpcUrls,
          projectId: e.projectId,
        })
      : void 0;
  }
  disconnectConnector(e, t) {
    return l(this, null, function* () {
      try {
        this.setLoading(!0, e);
        let n = { connections: [] },
          s = this.getAdapter(e);
        return (
          (i.state.chains.get(e)?.accountState?.caipAddress ||
            !h.state.enableReconnect) &&
            s?.disconnect &&
            (n = yield s.disconnect({ id: t })),
          this.setLoading(!1, e),
          n
        );
      } catch (n) {
        throw (
          (this.setLoading(!1, e),
          new Error(`Failed to disconnect chains: ${n.message}`))
        );
      }
    });
  }
  createClients() {
    (this.connectionControllerClient = {
      connectWalletConnect: () =>
        l(this, null, function* () {
          let e = i.state.activeChain,
            t = this.getAdapter(e),
            n = this.getCaipNetwork(e)?.id,
            s = v.getConnections(e),
            r = this.remoteFeatures.multiWallet,
            o = s.length > 0;
          if (!t) throw new Error("Adapter not found");
          let d = yield t.connectWalletConnect(n);
          (!o || !r) && this.close(),
            this.setClientId(d?.clientId || null),
            f.setConnectedNamespaces([...i.state.chains.keys()]),
            yield this.syncWalletConnectAccount(),
            yield j.initializeIfEnabled();
        }),
      connectExternal: (e) =>
        l(this, null, function* () {
          let t = yield this.onConnectExternal(e);
          return (
            yield this.connectInactiveNamespaces(e, t),
            t ? { address: t.address } : void 0
          );
        }),
      reconnectExternal: (r) =>
        l(this, [r], function* ({ id: e, info: t, type: n, provider: s }) {
          let o = i.state.activeChain,
            d = this.getAdapter(o);
          if (!o) throw new Error("reconnectExternal: namespace not found");
          if (!d) throw new Error("reconnectExternal: adapter not found");
          d?.reconnect &&
            (yield d?.reconnect({
              id: e,
              info: t,
              type: n,
              provider: s,
              chainId: this.getCaipNetwork()?.id,
            }),
            f.addConnectedNamespace(o),
            this.syncConnectedWalletInfo(o));
        }),
      disconnectConnector: (e) =>
        l(this, null, function* () {
          yield this.disconnectConnector(e.namespace, e.id);
        }),
      disconnect: (e) =>
        l(this, null, function* () {
          let { id: t, chainNamespace: n, initialDisconnect: s } = e || {},
            r = n || i.state.activeChain,
            o = w.getConnectorId(r),
            d = t === C.CONNECTOR_ID.AUTH || o === C.CONNECTOR_ID.AUTH,
            p =
              t === C.CONNECTOR_ID.WALLET_CONNECT ||
              o === C.CONNECTOR_ID.WALLET_CONNECT;
          try {
            let c = Array.from(i.state.chains.keys()),
              u = n ? [n] : c;
            (p || d) && (u = c);
            let A = u.map((T) =>
                l(this, null, function* () {
                  let k = w.getConnectorId(T),
                    U = t || k,
                    W = yield this.disconnectConnector(T, U);
                  W &&
                    (d && f.deleteConnectedSocialProvider(),
                    W.connections.forEach((I) => {
                      f.addDisconnectedConnectorId(I.connectorId, T);
                    })),
                    s &&
                      this.onDisconnectNamespace({
                        chainNamespace: T,
                        closeModal: !1,
                      });
                })
              ),
              E = yield Promise.allSettled(A);
            ae.resetSend(),
              v.resetWcConnection(),
              j.getSIWX()?.signOutOnDisconnect && (yield j.clearSessions()),
              w.setFilterByNamespace(void 0),
              v.syncStorageConnections();
            let S = E.filter((T) => T.status === "rejected");
            if (S.length > 0)
              throw new Error(S.map((T) => T.reason.message).join(", "));
            _.sendEvent({
              type: "track",
              event: "DISCONNECT_SUCCESS",
              properties: { namespace: n || "all" },
            });
          } catch (c) {
            throw new Error(`Failed to disconnect chains: ${c.message}`);
          }
        }),
      checkInstalled: (e) =>
        e ? e.some((t) => !!window.ethereum?.[String(t)]) : !!window.ethereum,
      signMessage: (e) =>
        l(this, null, function* () {
          let t = i.state.activeChain,
            n = this.getAdapter(i.state.activeChain);
          if (!t) throw new Error("signMessage: namespace not found");
          if (!n) throw new Error("signMessage: adapter not found");
          let s = this.getAddress(t);
          if (!s) throw new Error("signMessage: address not found");
          return (
            (yield n?.signMessage({
              message: e,
              address: s,
              provider: m.getProvider(t),
            }))?.signature || ""
          );
        }),
      sendTransaction: (e) =>
        l(this, null, function* () {
          let t = e.chainNamespace;
          if (!t) throw new Error("sendTransaction: namespace not found");
          if (N.SEND_SUPPORTED_NAMESPACES.includes(t)) {
            let n = this.getAdapter(t);
            if (!n) throw new Error("sendTransaction: adapter not found");
            let s = m.getProvider(t);
            return (
              (yield n?.sendTransaction(
                R(g({}, e), { caipNetwork: this.getCaipNetwork(), provider: s })
              ))?.hash || ""
            );
          }
          return "";
        }),
      estimateGas: (e) =>
        l(this, null, function* () {
          let t = e.chainNamespace;
          if (t === C.CHAIN.EVM) {
            let n = this.getAdapter(t);
            if (!n)
              throw new Error(
                "estimateGas: adapter is required but got undefined"
              );
            let s = m.getProvider(t),
              r = this.getCaipNetwork();
            if (!r)
              throw new Error(
                "estimateGas: caipNetwork is required but got undefined"
              );
            return (
              (yield n?.estimateGas(
                R(g({}, e), { provider: s, caipNetwork: r })
              ))?.gas || 0n
            );
          }
          return 0n;
        }),
      getEnsAvatar: () =>
        l(this, null, function* () {
          let e = i.state.activeChain;
          if (!e)
            throw new Error(
              "getEnsAvatar: namespace is required but got undefined"
            );
          let t = this.getAddress(e);
          if (!t) throw new Error("getEnsAvatar: address not found");
          return (
            yield this.syncIdentity({
              address: t,
              chainId: Number(this.getCaipNetwork()?.id),
              chainNamespace: e,
            }),
            i.getAccountData()?.profileImage || !1
          );
        }),
      getEnsAddress: (e) =>
        l(this, null, function* () {
          return yield Z.resolveReownName(e);
        }),
      writeContract: (e) =>
        l(this, null, function* () {
          let t = i.state.activeChain,
            n = this.getAdapter(t);
          if (!t)
            throw new Error(
              "writeContract: namespace is required but got undefined"
            );
          if (!n)
            throw new Error(
              "writeContract: adapter is required but got undefined"
            );
          let s = this.getCaipNetwork(),
            r = this.getCaipAddress(),
            o = m.getProvider(t);
          if (!s || !r)
            throw new Error(
              "writeContract: caipNetwork or caipAddress is required but got undefined"
            );
          return (yield n?.writeContract(
            R(g({}, e), { caipNetwork: s, provider: o, caipAddress: r })
          ))?.hash;
        }),
      parseUnits: (e, t) => {
        let n = this.getAdapter(i.state.activeChain);
        if (!n)
          throw new Error("parseUnits: adapter is required but got undefined");
        return n?.parseUnits({ value: e, decimals: t }) ?? 0n;
      },
      formatUnits: (e, t) => {
        let n = this.getAdapter(i.state.activeChain);
        if (!n)
          throw new Error("formatUnits: adapter is required but got undefined");
        return n?.formatUnits({ value: e, decimals: t }) ?? "0";
      },
      getCapabilities: (e) =>
        l(this, null, function* () {
          let t = this.getAdapter(i.state.activeChain);
          if (!t)
            throw new Error(
              "getCapabilities: adapter is required but got undefined"
            );
          return yield t?.getCapabilities(e);
        }),
      grantPermissions: (e) =>
        l(this, null, function* () {
          let t = this.getAdapter(i.state.activeChain);
          if (!t)
            throw new Error(
              "grantPermissions: adapter is required but got undefined"
            );
          return yield t?.grantPermissions(e);
        }),
      revokePermissions: (e) =>
        l(this, null, function* () {
          let t = this.getAdapter(i.state.activeChain);
          if (!t)
            throw new Error(
              "revokePermissions: adapter is required but got undefined"
            );
          return t?.revokePermissions ? yield t.revokePermissions(e) : "0x";
        }),
      walletGetAssets: (e) =>
        l(this, null, function* () {
          let t = this.getAdapter(i.state.activeChain);
          if (!t)
            throw new Error(
              "walletGetAssets: adapter is required but got undefined"
            );
          return (yield t?.walletGetAssets(e)) ?? {};
        }),
      updateBalance: (e) => {
        let t = this.getAddress(e),
          n = this.getCaipNetwork(e);
        !n || !t || this.updateNativeBalance(t, n?.id, e);
      },
    }),
      v.setClient(this.connectionControllerClient);
  }
  onConnectExternal(e) {
    return l(this, null, function* () {
      let t = i.state.activeChain,
        n = e.chain || t,
        s = this.getAdapter(n),
        r = !0;
      if (
        (e.type === P.CONNECTOR_TYPE_AUTH &&
          C.AUTH_CONNECTOR_SUPPORTED_CHAINS.some(
            (A) => w.getConnectorId(A) === C.CONNECTOR_ID.AUTH
          ) &&
          e.chain !== t &&
          (r = !1),
        e.chain && e.chain !== t && !e.caipNetwork)
      ) {
        let c = this.getCaipNetworks().find(
          (u) => u.chainNamespace === e.chain
        );
        c && r && this.setCaipNetwork(c);
      }
      if (!n) throw new Error("connectExternal: namespace not found");
      if (!s) throw new Error("connectExternal: adapter not found");
      let o = this.getCaipNetwork(n),
        d = e.caipNetwork || o,
        p = yield s.connect({
          id: e.id,
          address: e.address,
          info: e.info,
          type: e.type,
          provider: e.provider,
          socialUri: e.socialUri,
          chainId: e.caipNetwork?.id || o?.id,
          rpcUrl:
            e.caipNetwork?.rpcUrls?.default?.http?.[0] ||
            o?.rpcUrls?.default?.http?.[0],
        });
      if (p)
        return (
          f.addConnectedNamespace(n),
          this.syncProvider(R(g({}, p), { chainNamespace: n })),
          this.setStatus("connected", n),
          this.syncConnectedWalletInfo(n),
          f.removeDisconnectedConnectorId(e.id, n),
          { address: p.address, connectedCaipNetwork: d }
        );
    });
  }
  connectInactiveNamespaces(e, t) {
    return l(this, null, function* () {
      let n = e.type === P.CONNECTOR_TYPE_AUTH,
        s = z.getOtherAuthNamespaces(t?.connectedCaipNetwork?.chainNamespace),
        r = i.state.activeCaipNetwork,
        o = this.getAdapter(r?.chainNamespace);
      n &&
        (yield Promise.all(
          s.map((d) =>
            l(this, null, function* () {
              try {
                let p = m.getProvider(d),
                  c = this.getCaipNetwork(d);
                (yield this.getAdapter(d)?.connect(
                  R(g({}, e), {
                    provider: p,
                    socialUri: void 0,
                    chainId: c?.id,
                    rpcUrl: c?.rpcUrls?.default?.http?.[0],
                  })
                )) &&
                  (f.addConnectedNamespace(d),
                  f.removeDisconnectedConnectorId(e.id, d),
                  this.setStatus("connected", d),
                  this.syncConnectedWalletInfo(d));
              } catch (p) {
                b.warn(
                  O.ALERT_WARNINGS.INACTIVE_NAMESPACE_NOT_CONNECTED
                    .displayMessage,
                  O.ALERT_WARNINGS.INACTIVE_NAMESPACE_NOT_CONNECTED.debugMessage(
                    d,
                    p instanceof Error ? p.message : void 0
                  ),
                  O.ALERT_WARNINGS.INACTIVE_NAMESPACE_NOT_CONNECTED.code
                );
              }
            })
          )
        ),
        r && (yield o?.switchNetwork({ caipNetwork: r })));
    });
  }
  getApprovedCaipNetworksData() {
    if (
      m.getProviderId(i.state.activeChain) === P.CONNECTOR_TYPE_WALLET_CONNECT
    ) {
      let t = this.universalProvider?.session?.namespaces;
      return {
        supportsAllNetworks:
          this.universalProvider?.session?.peer?.metadata.name ===
          "MetaMask Wallet",
        approvedCaipNetworkIds: this.getChainsFromNamespaces(t),
      };
    }
    return { supportsAllNetworks: !0, approvedCaipNetworkIds: [] };
  }
  switchCaipNetwork(e) {
    return l(this, null, function* () {
      let t = e.chainNamespace;
      if (this.getAddressByChainNamespace(e.chainNamespace)) {
        let s = m.getProviderId(t);
        if (e.chainNamespace === i.state.activeChain)
          yield this.getAdapter(t)?.switchNetwork({ caipNetwork: e });
        else if (
          (this.setCaipNetwork(e), s === P.CONNECTOR_TYPE_WALLET_CONNECT)
        )
          this.syncWalletConnectAccount();
        else {
          let r = this.getAddressByChainNamespace(t);
          r &&
            this.syncAccount({ address: r, chainId: e.id, chainNamespace: t });
        }
      } else this.setCaipNetwork(e);
    });
  }
  getChainsFromNamespaces(e = {}) {
    return Object.values(e).flatMap((t) => {
      let n = t.chains || [],
        s = t.accounts.map((r) => {
          let { chainId: o, chainNamespace: d } = H.parseCaipAddress(r);
          return `${d}:${o}`;
        });
      return Array.from(new Set([...n, ...s]));
    });
  }
  createAdapters(e) {
    return (
      this.createClients(),
      this.chainNamespaces.reduce((t, n) => {
        let s = e?.find((r) => r.namespace === n);
        return (
          s
            ? (s.construct({
                namespace: n,
                projectId: this.options?.projectId,
                networks: this.caipNetworks?.filter(
                  ({ chainNamespace: r }) => r === n
                ),
              }),
              (t[n] = s))
            : (t[n] = new J({
                namespace: n,
                networks: this.getCaipNetworks(),
              })),
          t
        );
      }, {})
    );
  }
  initChainAdapter(e) {
    return l(this, null, function* () {
      this.onConnectors(e), this.listenAdapter(e);
      let t = this.getAdapter(e);
      if (!t) throw new Error("adapter not found");
      yield t.syncConnectors(), yield this.createUniversalProviderForAdapter(e);
    });
  }
  initChainAdapters() {
    return l(this, null, function* () {
      yield Promise.all(
        this.chainNamespaces.map((e) =>
          l(this, null, function* () {
            yield this.initChainAdapter(e);
          })
        )
      ),
        this.initAdapterController();
    });
  }
  onConnectors(e) {
    this.getAdapter(e)?.on("connectors", this.setConnectors.bind(this));
  }
  listenAdapter(e) {
    let t = this.getAdapter(e);
    if (!t) return;
    let n = f.getConnectionStatus();
    h.state.enableReconnect === !1
      ? this.setStatus("disconnected", e)
      : n === "connected"
      ? this.setStatus("connecting", e)
      : n === "disconnected"
      ? (f.clearAddressCache(), this.setStatus(n, e))
      : this.setStatus(n, e),
      t.on("switchNetwork", ({ address: s, chainId: r }) => {
        let o = this.getCaipNetworks().find(
            (c) =>
              c.id.toString() === r.toString() ||
              c.caipNetworkId.toString() === r.toString()
          ),
          d = i.state.activeChain === e,
          p = i.state.chains.get(e)?.accountState?.address;
        if (o) {
          let c = d && s ? s : p;
          c &&
            this.syncAccount({ address: c, chainId: o.id, chainNamespace: e });
        } else this.setUnsupportedNetwork(r);
      }),
      t.on("disconnect", () => {
        let s = this.remoteFeatures.multiWallet,
          r = Array.from(v.state.connections.values()).flat();
        this.onDisconnectNamespace({
          chainNamespace: e,
          closeModal: !s || r.length === 0,
        });
      }),
      t.on("connections", (s) => {
        this.setConnections(s, e);
      }),
      t.on("pendingTransactions", () => {
        let s = this.getAddress(e),
          r = i.state.activeCaipNetwork;
        !s || !r?.id || this.updateNativeBalance(s, r.id, r.chainNamespace);
      }),
      t.on("accountChanged", ({ address: s, chainId: r, connector: o }) => {
        this.handlePreviousConnectorConnection(o);
        let d = i.state.activeChain === e;
        o?.provider &&
          (this.syncProvider({
            id: o.id,
            type: o.type,
            provider: o?.provider,
            chainNamespace: e,
          }),
          this.syncConnectedWalletInfo(e));
        let p = i.getNetworkData(e)?.caipNetwork?.id,
          c = r || p;
        d && c
          ? this.syncAccount({ address: s, chainId: c, chainNamespace: e })
          : !d && c
          ? (this.syncAccountInfo(s, c, e),
            this.syncBalance({ address: s, chainId: c, chainNamespace: e }))
          : this.syncAccountInfo(s, r, e),
          f.addConnectedNamespace(e);
      });
  }
  handlePreviousConnectorConnection(e) {
    return l(this, null, function* () {
      let t = e?.chain,
        n = e?.id,
        s = w.getConnectorId(t),
        r = h.state.remoteFeatures?.multiWallet,
        d = t && n && s && s !== n && !r;
      try {
        d && (yield v.disconnect({ id: s, namespace: t }));
      } catch (p) {
        console.warn("Error disconnecting previous connector", p);
      }
    });
  }
  createUniversalProviderForAdapter(e) {
    return l(this, null, function* () {
      yield this.getUniversalProvider(),
        this.universalProvider &&
          (yield this.chainAdapters?.[e]?.setUniversalProvider?.(
            this.universalProvider
          ));
    });
  }
  syncExistingConnection() {
    return l(this, null, function* () {
      yield Promise.allSettled(
        this.chainNamespaces.map((e) => this.syncNamespaceConnection(e))
      );
    });
  }
  unSyncExistingConnection() {
    return l(this, null, function* () {
      try {
        yield Promise.allSettled(
          this.chainNamespaces.map((e) =>
            v.disconnect({ namespace: e, initialDisconnect: !0 })
          )
        );
      } catch (e) {
        console.error("Error disconnecting existing connections:", e);
      }
    });
  }
  reconnectWalletConnect() {
    return l(this, null, function* () {
      yield this.syncWalletConnectAccount();
      let e = this.getAddress();
      this.getCaipAddress() || f.deleteRecentWallet();
      let t = f.getRecentWallet();
      _.sendEvent({
        type: "track",
        event: "CONNECT_SUCCESS",
        address: e,
        properties: {
          method: y.isMobile() ? "mobile" : "qrcode",
          name: t?.name || "Unknown",
          reconnect: !0,
          view: F.state.view,
          walletRank: t?.order,
        },
      });
    });
  }
  syncNamespaceConnection(e) {
    return l(this, null, function* () {
      try {
        e === C.CHAIN.EVM &&
          y.isSafeApp() &&
          w.setConnectorId(C.CONNECTOR_ID.SAFE, e);
        let t = w.getConnectorId(e);
        switch ((this.setStatus("connecting", e), t)) {
          case C.CONNECTOR_ID.WALLET_CONNECT:
            yield this.reconnectWalletConnect();
            break;
          case C.CONNECTOR_ID.AUTH:
            break;
          default:
            yield this.syncAdapterConnection(e);
        }
      } catch (t) {
        console.warn("AppKit couldn't sync existing connection", t),
          this.setStatus("disconnected", e);
      }
    });
  }
  onDisconnectNamespace(e) {
    let { chainNamespace: t, closeModal: n } = e || {};
    i.resetAccount(t), i.resetNetwork(t), f.removeConnectedNamespace(t);
    let s = Array.from(i.state.chains.keys());
    (t ? [t] : s).forEach((o) =>
      f.addDisconnectedConnectorId(w.getConnectorId(o) || "", o)
    ),
      w.removeConnectorId(t),
      m.resetChain(t),
      this.setUser(null, t),
      this.setStatus("disconnected", t),
      this.setConnectedWalletInfo(null, t),
      n !== !1 && M.close();
  }
  syncAdapterConnections() {
    return l(this, null, function* () {
      yield Promise.allSettled(
        this.chainNamespaces.map((e) => {
          let t = this.getAdapter(e),
            n = this.getCaipAddress(e),
            s = this.getCaipNetwork(e);
          return t?.syncConnections({
            connectToFirstConnector: !n,
            caipNetwork: s,
          });
        })
      );
    });
  }
  syncAdapterConnection(e) {
    return l(this, null, function* () {
      let t = this.getAdapter(e),
        n = this.getCaipNetwork(e),
        s = w.getConnectorId(e),
        o = w.getConnectors(e).find((d) => d.id === s);
      try {
        if (!t || !o)
          throw new Error(`Adapter or connector not found for namespace ${e}`);
        if (!n?.id) throw new Error("CaipNetwork not found");
        let d = yield t?.syncConnection({
          namespace: e,
          id: o.id,
          chainId: n.id,
          rpcUrl: n?.rpcUrls?.default?.http?.[0],
        });
        d
          ? (this.syncProvider(R(g({}, d), { chainNamespace: e })),
            yield this.syncAccount(R(g({}, d), { chainNamespace: e })),
            this.setStatus("connected", e),
            _.sendEvent({
              type: "track",
              event: "CONNECT_SUCCESS",
              address: d.address,
              properties: {
                method: "browser",
                name: o.info?.name || o.name || "Unknown",
                reconnect: !0,
                view: F.state.view,
                walletRank: void 0,
              },
            }))
          : this.setStatus("disconnected", e);
      } catch {
        this.onDisconnectNamespace({ chainNamespace: e, closeModal: !1 });
      }
    });
  }
  syncWalletConnectAccount() {
    return l(this, null, function* () {
      let e = Object.keys(this.universalProvider?.session?.namespaces || {}),
        t = this.chainNamespaces.map((n) =>
          l(this, null, function* () {
            let s = this.getAdapter(n);
            if (!s) return;
            let r =
                this.universalProvider?.session?.namespaces?.[n]?.accounts ||
                [],
              o = i.state.activeCaipNetwork?.id,
              d =
                r.find((c) => {
                  let { chainId: u } = H.parseCaipAddress(c);
                  return u === o?.toString();
                }) || r[0];
            if (d) {
              let c = H.validateCaipAddress(d),
                { chainId: u, address: A } = H.parseCaipAddress(c);
              if (
                (m.setProviderId(n, P.CONNECTOR_TYPE_WALLET_CONNECT),
                this.caipNetworks &&
                  i.state.activeCaipNetwork &&
                  s.namespace !== C.CHAIN.EVM)
              ) {
                let E = s.getWalletConnectProvider({
                  caipNetworks: this.getCaipNetworks(),
                  provider: this.universalProvider,
                  activeCaipNetwork: i.state.activeCaipNetwork,
                });
                m.setProvider(n, E);
              } else m.setProvider(n, this.universalProvider);
              w.setConnectorId(C.CONNECTOR_ID.WALLET_CONNECT, n),
                f.addConnectedNamespace(n),
                yield this.syncAccount({
                  address: A,
                  chainId: u,
                  chainNamespace: n,
                });
            } else e.includes(n) && this.setStatus("disconnected", n);
            let p = this.getApprovedCaipNetworksData();
            this.syncConnectedWalletInfo(n),
              i.setApprovedCaipNetworksData(n, {
                approvedCaipNetworkIds: p.approvedCaipNetworkIds,
                supportsAllNetworks: p.supportsAllNetworks,
              });
          })
        );
      yield Promise.all(t);
    });
  }
  syncProvider({ type: e, provider: t, id: n, chainNamespace: s }) {
    m.setProviderId(s, e), m.setProvider(s, t), w.setConnectorId(n, s);
  }
  syncAccount(e) {
    return l(this, null, function* () {
      let t = e.chainNamespace === i.state.activeChain,
        n = i.getCaipNetworkByNamespace(e.chainNamespace, e.chainId),
        { address: s, chainId: r, chainNamespace: o } = e,
        { chainId: d } = f.getActiveNetworkProps(),
        p = n?.id || d,
        c = i.state.activeCaipNetwork?.name === C.UNSUPPORTED_NETWORK_NAME,
        u = i.getNetworkProp("supportsAllNetworks", o);
      if ((this.setStatus("connected", o), !(c && !u) && p)) {
        let A = this.getCaipNetworks().find(
            (k) => k.id.toString() === p.toString()
          ),
          E = this.getCaipNetworks().find((k) => k.chainNamespace === o);
        if (!u && !A && !E) {
          let k = this.getApprovedCaipNetworkIds() || [],
            U = k.find(
              (I) => H.parseCaipNetworkId(I)?.chainId === p.toString()
            ),
            W = k.find((I) => H.parseCaipNetworkId(I)?.chainNamespace === o);
          (A = this.getCaipNetworks().find((I) => I.caipNetworkId === U)),
            (E = this.getCaipNetworks().find(
              (I) =>
                I.caipNetworkId === W ||
                ("deprecatedCaipNetworkId" in I &&
                  I.deprecatedCaipNetworkId === W)
            ));
        }
        let S = A || E;
        S?.chainNamespace === i.state.activeChain
          ? h.state.enableNetworkSwitch &&
            !h.state.allowUnsupportedChain &&
            i.state.activeCaipNetwork?.name === C.UNSUPPORTED_NETWORK_NAME
            ? i.showUnsupportedChainUI()
            : this.setCaipNetwork(S)
          : t || (n && this.setCaipNetworkOfNamespace(n, o)),
          this.syncConnectedWalletInfo(o);
        let T = this.getAddress(o);
        z.isLowerCaseMatch(s, T) || this.syncAccountInfo(s, S?.id, o),
          t
            ? yield this.syncBalance({
                address: s,
                chainId: S?.id,
                chainNamespace: o,
              })
            : yield this.syncBalance({
                address: s,
                chainId: n?.id,
                chainNamespace: o,
              }),
          this.syncIdentity({ address: s, chainId: r, chainNamespace: o });
      }
    });
  }
  syncAccountInfo(e, t, n) {
    return l(this, null, function* () {
      let s = this.getCaipAddress(n),
        r = t || s?.split(":")[1];
      if (!r) return;
      let o = `${n}:${r}:${e}`;
      this.setCaipAddress(o, n, !0),
        yield this.syncIdentity({ address: e, chainId: r, chainNamespace: n });
    });
  }
  syncReownName(e, t) {
    return l(this, null, function* () {
      try {
        let n = yield this.getReownName(e);
        if (n[0]) {
          let s = n[0];
          this.setProfileName(s.name, t);
        } else this.setProfileName(null, t);
      } catch {
        this.setProfileName(null, t);
      }
    });
  }
  syncConnectedWalletInfo(e) {
    let t = w.getConnectorId(e),
      n = m.getProviderId(e);
    if (n === P.CONNECTOR_TYPE_ANNOUNCED || n === P.CONNECTOR_TYPE_INJECTED) {
      if (t) {
        let r = this.getConnectors().find((o) => {
          let d = o.id === t,
            p = o.info?.rdns === t,
            c = o.connectors?.some((u) => u.id === t || u.info?.rdns === t);
          return d || p || !!c;
        });
        if (r) {
          let { info: o, name: d, imageUrl: p } = r,
            c = p || this.getConnectorImage(r);
          this.setConnectedWalletInfo(g({ name: d, icon: c }, o), e);
        }
      }
    } else if (n === P.CONNECTOR_TYPE_WALLET_CONNECT) {
      let s = m.getProvider(e);
      s?.session &&
        this.setConnectedWalletInfo(
          R(g({}, s.session.peer.metadata), {
            name: s.session.peer.metadata.name,
            icon: s.session.peer.metadata.icons?.[0],
          }),
          e
        );
    } else if (
      t &&
      (t === C.CONNECTOR_ID.COINBASE_SDK || t === C.CONNECTOR_ID.COINBASE)
    ) {
      let s = this.getConnectors().find((p) => p.id === t),
        r = s?.name || "Coinbase Wallet",
        o = s?.imageUrl || this.getConnectorImage(s),
        d = s?.info;
      this.setConnectedWalletInfo(R(g({}, d), { name: r, icon: o }), e);
    }
  }
  syncBalance(e) {
    return l(this, null, function* () {
      !de
        .getNetworksByNamespace(this.getCaipNetworks(), e.chainNamespace)
        .find((n) => n.id.toString() === e.chainId?.toString()) ||
        !e.chainId ||
        (yield this.updateNativeBalance(
          e.address,
          e.chainId,
          e.chainNamespace
        ));
    });
  }
  ready() {
    return l(this, null, function* () {
      yield this.readyPromise;
    });
  }
  updateNativeBalance(e, t, n) {
    return l(this, null, function* () {
      let s = this.getAdapter(n),
        r = i.getCaipNetworkByNamespace(n, t);
      if (s) {
        let o = yield s.getBalance({
          address: e,
          chainId: t,
          caipNetwork: r,
          tokens: this.options.tokens,
        });
        return this.setBalance(o.balance, o.symbol, n), o;
      }
    });
  }
  initializeUniversalAdapter() {
    return l(this, null, function* () {
      let e = Ee.createLogger((s, ...r) => {
          s && this.handleAlertError(s), console.error(...r);
        }),
        t = {
          projectId: this.options?.projectId,
          metadata: {
            name: this.options?.metadata ? this.options?.metadata.name : "",
            description: this.options?.metadata
              ? this.options?.metadata.description
              : "",
            url: this.options?.metadata ? this.options?.metadata.url : "",
            icons: this.options?.metadata ? this.options?.metadata.icons : [""],
          },
          logger: e,
        };
      h.setManualWCControl(!!this.options?.manualWCControl),
        (this.universalProvider =
          this.options.universalProvider ?? (yield fe.init(t)));
      let n = this.universalProvider.disconnect.bind(this.universalProvider);
      (this.universalProvider.disconnect = () =>
        l(this, null, function* () {
          try {
            return yield n();
          } catch (s) {
            if (
              s instanceof Error &&
              s.message.includes(
                "Missing or invalid. Record was recently deleted"
              )
            )
              return;
            throw s;
          }
        })),
        h.state.enableReconnect === !1 &&
          this.universalProvider.session &&
          (yield this.universalProvider.disconnect()),
        this.listenWalletConnect();
    });
  }
  listenWalletConnect() {
    this.universalProvider &&
      this.chainNamespaces.forEach((e) => {
        Z.listenWcProvider({
          universalProvider: this.universalProvider,
          namespace: e,
          onDisplayUri: (t) => {
            v.setUri(t);
          },
          onConnect: (t) => {
            let { address: n } = y.getAccount(t[0]);
            v.finalizeWcConnection(n);
          },
          onDisconnect: () => {
            i.state.noAdapters && this.resetAccount(e), v.resetWcConnection();
          },
          onChainChanged: (t) => {
            let n = i.state.activeChain,
              s =
                n &&
                w.state.activeConnectorIds[n] === C.CONNECTOR_ID.WALLET_CONNECT;
            if (n === e && (i.state.noAdapters || s)) {
              let r = this.getCaipNetworks().find(
                  (d) =>
                    d.id.toString() === t.toString() ||
                    d.caipNetworkId.toString() === t.toString()
                ),
                o = this.getCaipNetwork();
              if (!r) {
                this.setUnsupportedNetwork(t);
                return;
              }
              o?.id.toString() !== r?.id.toString() &&
                o?.chainNamespace === r?.chainNamespace &&
                this.setCaipNetwork(r);
            }
          },
          onAccountsChanged: (t) => {
            let n = i.state.activeChain,
              s =
                n &&
                w.state.activeConnectorIds[n] === C.CONNECTOR_ID.WALLET_CONNECT;
            if (n === e && (i.state.noAdapters || s)) {
              let r = t?.[0];
              r &&
                this.syncAccount({
                  address: r.address,
                  chainId: r.chainId,
                  chainNamespace: r.chainNamespace,
                });
            }
          },
        });
      });
  }
  createUniversalProvider() {
    return (
      !this.universalProviderInitPromise &&
        y.isClient() &&
        this.options?.projectId &&
        (this.universalProviderInitPromise = this.initializeUniversalAdapter()),
      this.universalProviderInitPromise
    );
  }
  getUniversalProvider() {
    return l(this, null, function* () {
      if (!this.universalProvider)
        try {
          yield this.createUniversalProvider();
        } catch (e) {
          _.sendEvent({
            type: "error",
            event: "INTERNAL_SDK_ERROR",
            properties: {
              errorType: "UniversalProviderInitError",
              errorMessage: e instanceof Error ? e.message : "Unknown",
              uncaught: !1,
            },
          }),
            console.error(
              "AppKit:getUniversalProvider - Cannot create provider",
              e
            );
        }
      return this.universalProvider;
    });
  }
  getDisabledCaipNetworks() {
    let e = i.getAllApprovedCaipNetworkIds(),
      t = i.getAllRequestedCaipNetworks();
    return y
      .sortRequestedNetworks(e, t)
      .filter((s) => i.isCaipNetworkDisabled(s));
  }
  handleAlertError(e) {
    let t = Object.entries(O.UniversalProviderErrors).find(
        ([, { message: d }]) => e.message.includes(d)
      ),
      [n, s] = t ?? [],
      { message: r, alertErrorKey: o } = s ?? {};
    if (n && r && !this.reportedAlertErrors[n]) {
      let d = O.ALERT_ERRORS[o];
      d && (b.open(d, "error"), (this.reportedAlertErrors[n] = !0));
    }
  }
  getAdapter(e) {
    if (e) return this.chainAdapters?.[e];
  }
  createAdapter(e) {
    if (!e) return;
    let t = e.namespace;
    if (!t) return;
    this.createClients();
    let n = e;
    (n.namespace = t),
      n.construct({
        namespace: t,
        projectId: this.options?.projectId,
        networks: this.caipNetworks?.filter(({ chainNamespace: s }) => s === t),
      }),
      this.chainNamespaces.includes(t) || this.chainNamespaces.push(t),
      this.chainAdapters && (this.chainAdapters[t] = n);
  }
  open(e) {
    return l(this, null, function* () {
      yield this.injectModalUi(), e?.uri && v.setUri(e.uri);
      let { isSwap: t, isSend: n } = this.toModalOptions();
      return t(e)
        ? M.open(R(g({}, e), { data: { swap: e.arguments } }))
        : n(e) && e.arguments
        ? this.openSend(e.arguments)
        : M.open(e);
    });
  }
  close() {
    return l(this, null, function* () {
      yield this.injectModalUi(), M.close();
    });
  }
  setLoading(e, t) {
    M.setLoading(e, t);
  }
  disconnect(e) {
    return l(this, null, function* () {
      yield v.disconnect({ namespace: e });
    });
  }
  getSIWX() {
    return h.state.siwx;
  }
  getError() {
    return "";
  }
  getChainId() {
    return i.state.activeCaipNetwork?.id;
  }
  switchNetwork(n) {
    return l(this, arguments, function* (e, { throwOnFailure: t = !1 } = {}) {
      let s = this.getCaipNetworks().find((r) => r.id === e.id);
      if (!s) {
        b.open(O.ALERT_ERRORS.SWITCH_NETWORK_NOT_FOUND, "error");
        return;
      }
      yield i.switchActiveNetwork(s, { throwOnFailure: t });
    });
  }
  getWalletProvider() {
    return i.state.activeChain ? m.state.providers[i.state.activeChain] : null;
  }
  getWalletProviderType() {
    return m.getProviderId(i.state.activeChain);
  }
  subscribeProviders(e) {
    return m.subscribeProviders(e);
  }
  getThemeMode() {
    return D.state.themeMode;
  }
  getThemeVariables() {
    return D.state.themeVariables;
  }
  setThemeMode(e) {
    D.setThemeMode(e), ye(D.state.themeMode);
  }
  setTermsConditionsUrl(e) {
    h.setTermsConditionsUrl(e);
  }
  setPrivacyPolicyUrl(e) {
    h.setPrivacyPolicyUrl(e);
  }
  setThemeVariables(e) {
    D.setThemeVariables(e), Te(D.state.themeVariables);
  }
  subscribeTheme(e) {
    return D.subscribe(e);
  }
  subscribeConnections(e) {
    return this.remoteFeatures.multiWallet
      ? v.subscribe(e)
      : (b.open(
          C.REMOTE_FEATURES_ALERTS.MULTI_WALLET_NOT_ENABLED.DEFAULT,
          "info"
        ),
        () => {});
  }
  getWalletInfo(e) {
    return e
      ? i.state.chains.get(e)?.accountState?.connectedWalletInfo
      : i.getAccountData()?.connectedWalletInfo;
  }
  getAccount(e) {
    let t = e || i.state.activeChain,
      n = w.getAuthConnector(t),
      s = i.getAccountData(t),
      r = f.getConnectedConnectorId(i.state.activeChain),
      o = v.getConnections(t);
    if (!t) throw new Error("AppKit:getAccount - namespace is required");
    let d = o.flatMap((p) =>
      p.accounts.map(({ address: c, type: u, publicKey: A }) =>
        y.createAccount(t, c, u || "eoa", A)
      )
    );
    if (s)
      return {
        allAccounts: d,
        caipAddress: s.caipAddress,
        address: y.getPlainAddress(s.caipAddress),
        isConnected: !!s.caipAddress,
        status: s.status,
        embeddedWalletInfo:
          n && r === C.CONNECTOR_ID.AUTH
            ? {
                user: s.user
                  ? R(g({}, s.user), {
                      username: f.getConnectedSocialUsername(),
                    })
                  : void 0,
                authProvider: s.socialProvider || "email",
                accountType: V(t),
                isSmartAccountDeployed: !!s.smartAccountDeployed,
              }
            : void 0,
      };
  }
  subscribeAccount(e, t) {
    let n = () => {
      let s = this.getAccount(t);
      s && e(s);
    };
    t ? i.subscribeChainProp("accountState", n, t) : i.subscribe(n),
      w.subscribe(n);
  }
  subscribeNetwork(e) {
    return i.subscribe(({ activeCaipNetwork: t }) => {
      e({ caipNetwork: t, chainId: t?.id, caipNetworkId: t?.caipNetworkId });
    });
  }
  subscribeWalletInfo(e, t) {
    return t
      ? i.subscribeChainProp(
          "accountState",
          (n) => e(n?.connectedWalletInfo),
          t
        )
      : i.subscribeChainProp("accountState", (n) => e(n?.connectedWalletInfo));
  }
  subscribeShouldUpdateToAddress(e) {
    i.subscribeChainProp("accountState", (t) => e(t?.shouldUpdateToAddress));
  }
  subscribeCaipNetworkChange(e) {
    i.subscribeKey("activeCaipNetwork", e);
  }
  getState() {
    return q.state;
  }
  getRemoteFeatures() {
    return h.state.remoteFeatures;
  }
  subscribeState(e) {
    return q.subscribe(e);
  }
  subscribeRemoteFeatures(e) {
    return h.subscribeKey("remoteFeatures", e);
  }
  showErrorMessage(e) {
    re.showError(e);
  }
  showSuccessMessage(e) {
    re.showSuccess(e);
  }
  getEvent() {
    return g({}, _.state);
  }
  subscribeEvents(e) {
    return _.subscribe(e);
  }
  replace(e) {
    F.replace(e);
  }
  redirect(e) {
    F.push(e);
  }
  popTransactionStack(e) {
    F.popTransactionStack(e);
  }
  isOpen() {
    return M.state.open;
  }
  isTransactionStackEmpty() {
    return F.state.transactionStack.length === 0;
  }
  static getInstance() {
    return this.instance;
  }
  updateFeatures(e) {
    h.setFeatures(e);
  }
  updateRemoteFeatures(e) {
    h.setRemoteFeatures(e);
  }
  updateOptions(e) {
    let t = h.state || {},
      n = g(g({}, t), e);
    h.setOptions(n);
  }
  setConnectMethodsOrder(e) {
    h.setConnectMethodsOrder(e);
  }
  setWalletFeaturesOrder(e) {
    h.setWalletFeaturesOrder(e);
  }
  setCollapseWallets(e) {
    h.setCollapseWallets(e);
  }
  setSocialsOrder(e) {
    h.setSocialsOrder(e);
  }
  getConnectMethodsOrder() {
    return ve.getConnectOrderMethod(h.state.features, w.getConnectors());
  }
  addNetwork(e, t) {
    if (this.chainAdapters && !this.chainAdapters[e])
      throw new Error(`Adapter for namespace ${e} doesn't exist`);
    let n = this.extendCaipNetwork(t, this.options);
    this.getCaipNetworks().find((s) => s.id === n.id) || i.addNetwork(n);
  }
  removeNetwork(e, t) {
    if (this.chainAdapters && !this.chainAdapters[e])
      throw new Error(`Adapter for namespace ${e} doesn't exist`);
    this.getCaipNetworks().find((s) => s.id === t) && i.removeNetwork(e, t);
  }
};
var be = !1,
  te = class a extends ee {
    onAuthProviderConnected(e) {
      return l(this, null, function* () {
        let t = z.userChainIdToChainNamespace(e?.chainId);
        if (
          (e.message &&
            e.signature &&
            e.siwxMessage &&
            (yield j.addEmbeddedWalletSession(
              {
                chainId: e.siwxMessage.chainId,
                accountAddress: e.address,
                notBefore: e.siwxMessage.notBefore,
                statement: e.siwxMessage.statement,
                resources: e.siwxMessage.resources,
                requestId: e.siwxMessage.requestId,
                issuedAt: e.siwxMessage.issuedAt,
                domain: e.siwxMessage.domain,
                uri: e.siwxMessage.uri,
                version: e.siwxMessage.version,
                nonce: e.siwxMessage.nonce,
              },
              e.message,
              e.signature
            )),
          !t)
        )
          throw new Error(
            "AppKit:onAuthProviderConnected - namespace is required"
          );
        let n =
            t === C.CHAIN.EVM
              ? `eip155:${e.chainId}:${e.address}`
              : `${e.chainId}:${e.address}`,
          s = h.state.defaultAccountTypes[t],
          r = V(t),
          o = e.preferredAccountType || r || s;
        this.setCaipAddress(n, t);
        let E = e,
          { signature: d, siwxMessage: p, message: c } = E,
          u = K(E, ["signature", "siwxMessage", "message"]),
          A = i.getAccountData(t);
        this.setUser(g(g({}, A?.user || {}), u), t),
          this.setSmartAccountDeployed(!!e.smartAccountDeployed, t),
          this.setPreferredAccountType(o, t),
          yield Promise.all([
            this.syncAuthConnectorTheme(this.authProvider),
            this.syncAccount({
              address: e.address,
              chainId: e.chainId,
              chainNamespace: t,
            }),
          ]),
          this.setLoading(!1, t);
      });
    }
    setupAuthConnectorListeners(e) {
      e.onRpcRequest((t) => {
        X.checkIfRequestExists(t)
          ? X.checkIfRequestIsSafe(t) || this.handleUnsafeRPCRequest()
          : (this.open(),
            console.error(se.RPC_METHOD_NOT_ALLOWED_MESSAGE, {
              method: t.method,
            }),
            setTimeout(() => {
              this.showErrorMessage(se.RPC_METHOD_NOT_ALLOWED_UI_MESSAGE);
            }, 300),
            e.rejectRpcRequests());
      }),
        e.onRpcError(() => {
          this.isOpen() &&
            (this.isTransactionStackEmpty()
              ? this.close()
              : this.popTransactionStack("error"));
        }),
        e.onRpcSuccess((t, n) => {
          let s = X.checkIfRequestIsSafe(n),
            r = this.getAddress(),
            o = i.state.activeCaipNetwork;
          s ||
            (r && o?.id && this.updateNativeBalance(r, o.id, o.chainNamespace),
            this.isTransactionStackEmpty()
              ? this.close()
              : this.popTransactionStack("success"));
        }),
        e.onNotConnected(() => {
          let t = i.state.activeChain;
          if (!t)
            throw new Error("AppKit:onNotConnected - namespace is required");
          w.getConnectorId(t) === C.CONNECTOR_ID.AUTH &&
            (this.setCaipAddress(null, t), this.setLoading(!1, t));
        }),
        e.onConnect(this.onAuthProviderConnected.bind(this)),
        e.onSocialConnected(this.onAuthProviderConnected.bind(this)),
        e.onSetPreferredAccount(({ address: t, type: n }) => {
          let s = i.state.activeChain;
          if (!s)
            throw new Error(
              "AppKit:onSetPreferredAccount - namespace is required"
            );
          t && this.setPreferredAccountType(n, s);
        });
    }
    syncAuthConnectorTheme(e) {
      return l(this, null, function* () {
        if (!e) return;
        let t = D.getSnapshot();
        yield e.syncTheme({
          themeMode: t.themeMode,
          themeVariables: t.themeVariables,
          w3mThemeVariables: le(t.themeVariables, t.themeMode),
        });
      });
    }
    syncAuthConnector(e, t) {
      return l(this, null, function* () {
        let n = C.AUTH_CONNECTOR_SUPPORTED_CHAINS.includes(t),
          s = t === i.state.activeChain;
        if (!n) return;
        this.setLoading(!0, t);
        let r = e.getLoginEmailUsed();
        this.setLoading(r, t), r && this.setStatus("connecting", t);
        let o = e.getEmail(),
          d = e.getUsername(),
          p = i.getAccountData(t)?.user || {};
        this.setUser(R(g({}, p), { username: d, email: o }), t),
          this.setupAuthConnectorListeners(e);
        let { isConnected: c } = yield e.isConnected();
        if (t && n && s)
          if (c && this.connectionControllerClient?.connectExternal) {
            yield e.init(),
              yield this.syncAuthConnectorTheme(e),
              yield this.connectionControllerClient?.connectExternal({
                id: C.CONNECTOR_ID.AUTH,
                info: { name: C.CONNECTOR_ID.AUTH },
                type: P.CONNECTOR_TYPE_AUTH,
                provider: e,
                chainId: i.getNetworkData(t)?.caipNetwork?.id,
                chain: t,
              }),
              this.setStatus("connected", t);
            let u = f.getConnectedSocialProvider();
            u
              ? _.sendEvent({
                  type: "track",
                  event: "SOCIAL_LOGIN_SUCCESS",
                  address: this.getAddress(),
                  properties: { provider: u, reconnect: !0 },
                })
              : _.sendEvent({
                  type: "track",
                  event: "CONNECT_SUCCESS",
                  address: this.getAddress(),
                  properties: {
                    method: "email",
                    name:
                      this.universalProvider?.session?.peer?.metadata?.name ||
                      "Unknown",
                    reconnect: !0,
                    view: F.state.view,
                    walletRank: void 0,
                  },
                });
          } else
            w.getConnectorId(t) === C.CONNECTOR_ID.AUTH &&
              (this.setStatus("disconnected", t),
              f.removeConnectedNamespace(t));
        this.setLoading(!1, t);
      });
    }
    checkExistingTelegramSocialConnection(e) {
      return l(this, null, function* () {
        try {
          if (!y.isTelegram()) return;
          let t = f.getTelegramSocialProvider();
          if (!t || !y.isClient()) return;
          let s = new URL(window.location.href).searchParams.get("result_uri");
          if (!s) return;
          t && i.setAccountProp("socialProvider", t, e),
            yield this.authProvider?.init();
          let r = w.getAuthConnector();
          t &&
            r &&
            (this.setLoading(!0, e),
            yield v.connectExternal(
              { id: r.id, type: r.type, socialUri: s },
              r.chain
            ),
            f.setConnectedSocialProvider(t),
            f.removeTelegramSocialProvider(),
            _.sendEvent({
              type: "track",
              event: "SOCIAL_LOGIN_SUCCESS",
              properties: { provider: t },
            }));
        } catch (t) {
          this.setLoading(!1, e),
            console.error("checkExistingSTelegramocialConnection error", t);
        }
        try {
          let t = new URL(window.location.href);
          t.searchParams.delete("result_uri"),
            window.history.replaceState({}, document.title, t.toString());
        } catch (t) {
          console.error("tma social login failed", t);
        }
      });
    }
    createAuthProvider(e) {
      if (!C.AUTH_CONNECTOR_SUPPORTED_CHAINS.includes(e)) return;
      let n = this.remoteFeatures?.email,
        s =
          Array.isArray(this.remoteFeatures?.socials) &&
          this.remoteFeatures.socials.length > 0,
        r = n || s,
        d = z.getActiveNamespaceConnectedToAuth() || e;
      !this.authProvider &&
        this.options?.projectId &&
        r &&
        ((this.authProvider = Ne.getInstance({
          projectId: this.options.projectId,
          enableLogger: this.options.enableAuthLogger,
          chainId: this.getCaipNetwork(d)?.caipNetworkId,
          abortController: O.EmbeddedWalletAbortController,
          onTimeout: (c) => {
            c === "iframe_load_failed"
              ? b.open(O.ALERT_ERRORS.IFRAME_LOAD_FAILED, "error")
              : c === "iframe_request_timeout"
              ? b.open(O.ALERT_ERRORS.IFRAME_REQUEST_TIMEOUT, "error")
              : c === "unverified_domain" &&
                b.open(O.ALERT_ERRORS.UNVERIFIED_DOMAIN, "error");
          },
          getActiveCaipNetwork: (c) => pe(c),
          getCaipNetworks: (c) => i.getCaipNetworks(c),
        })),
        q.subscribeOpen((c) => {
          !c &&
            this.isTransactionStackEmpty() &&
            this.authProvider?.rejectRpcRequests();
        }));
      let p = e === i.state.activeChain && h.state.enableReconnect;
      h.state.enableReconnect === !1
        ? this.syncAuthConnectorTheme(this.authProvider)
        : this.authProvider &&
          p &&
          (this.syncAuthConnector(this.authProvider, e),
          this.checkExistingTelegramSocialConnection(e));
    }
    createAuthProviderForAdapter(e) {
      this.createAuthProvider(e),
        this.authProvider &&
          this.chainAdapters?.[e]?.setAuthProvider?.(this.authProvider);
    }
    initControllers(e) {
      super.initControllers(e),
        this.options.excludeWalletIds &&
          B.initializeExcludedWallets({ ids: this.options.excludeWalletIds });
    }
    switchCaipNetwork(e) {
      return l(this, null, function* () {
        if (!e) return;
        let t = i.state.activeChain,
          n = e.chainNamespace,
          s = this.getAddressByChainNamespace(n);
        if (n === t && i.getAccountData(n)?.caipAddress)
          yield this.getAdapter(n)?.switchNetwork({ caipNetwork: e }),
            this.setCaipNetwork(e);
        else {
          let d = m.getProviderId(t) === P.CONNECTOR_TYPE_AUTH,
            p = m.getProviderId(n),
            c = p === P.CONNECTOR_TYPE_AUTH,
            u = C.AUTH_CONNECTOR_SUPPORTED_CHAINS.includes(n);
          if (!n)
            throw new Error(
              "AppKit:switchCaipNetwork - networkNamespace is required"
            );
          if (((d && p === void 0) || c) && u)
            try {
              (i.state.activeChain = e.chainNamespace),
                s
                  ? yield this.getAdapter(n)?.switchNetwork({ caipNetwork: e })
                  : yield this.connectionControllerClient?.connectExternal?.({
                      id: C.CONNECTOR_ID.AUTH,
                      provider: this.authProvider,
                      chain: n,
                      chainId: e.id,
                      type: P.CONNECTOR_TYPE_AUTH,
                      caipNetwork: e,
                    }),
                this.setCaipNetwork(e);
            } catch {
              yield this.getAdapter(n)?.switchNetwork({ caipNetwork: e });
            }
          else
            p === P.CONNECTOR_TYPE_WALLET_CONNECT
              ? (i.state.noAdapters ||
                  (yield this.getAdapter(n)?.switchNetwork({ caipNetwork: e })),
                this.setCaipNetwork(e),
                this.syncWalletConnectAccount())
              : (this.setCaipNetwork(e),
                s &&
                  this.syncAccount({
                    address: s,
                    chainId: e.id,
                    chainNamespace: n,
                  }));
        }
      });
    }
    initialize(e) {
      return l(this, null, function* () {
        yield ce(a.prototype, this, "initialize").call(this, e),
          this.chainNamespaces?.forEach((t) => {
            this.createAuthProviderForAdapter(t);
          }),
          yield this.injectModalUi(),
          q.set({ initialized: !0 });
      });
    }
    syncIdentity(s) {
      return l(
        this,
        arguments,
        function* ({ address: e, chainId: t, chainNamespace: n }) {
          let r = `${n}:${t}`;
          if (this.caipNetworks?.find((p) => p.caipNetworkId === r)?.testnet) {
            this.setProfileName(null, n), this.setProfileImage(null, n);
            return;
          }
          let d = w.getConnectorId(n) === C.CONNECTOR_ID.AUTH;
          try {
            let { name: p, avatar: c } = yield this.fetchIdentity({
              address: e,
            });
            !p && d
              ? yield this.syncReownName(e, n)
              : (this.setProfileName(p, n), this.setProfileImage(c, n));
          } catch {
            t !== 1 && this.setProfileImage(null, n);
          }
        }
      );
    }
    syncConnectedWalletInfo(e) {
      let t = m.getProviderId(e);
      if (t === P.CONNECTOR_TYPE_AUTH) {
        let n = this.authProvider;
        if (n) {
          let s = f.getConnectedSocialProvider() ?? "email",
            r = n.getEmail() ?? n.getUsername();
          this.setConnectedWalletInfo({ name: t, identifier: r, social: s }, e);
        }
      } else super.syncConnectedWalletInfo(e);
    }
    injectModalUi() {
      return l(this, null, function* () {
        if (y.isClient() && !be)
          try {
            let e = g(g({}, N.DEFAULT_FEATURES), this.options.features),
              t = this.remoteFeatures;
            if (
              (yield this.loadModalComponents(e, t),
              y.isClient() && !document.querySelector("w3m-modal"))
            ) {
              let s = document.createElement("w3m-modal");
              !h.state.disableAppend &&
                !h.state.enableEmbedded &&
                document.body.insertAdjacentElement("beforeend", s);
            }
            be = !0;
          } catch (e) {
            console.error("Error injecting modal UI:", e);
          }
      });
    }
    loadModalComponents(e, t) {
      return l(this, null, function* () {
        if (!y.isClient()) return;
        let n = [];
        (t.email || (t.socials && t.socials.length > 0)) &&
          n.push(import("./chunk-M5U6SFRT.js")),
          t.email && n.push(import("./chunk-6PFA5H2C.js")),
          t.socials && n.push(import("./chunk-MLX3NXGB.js")),
          t.swaps &&
            t.swaps.length > 0 &&
            n.push(import("./chunk-AYWQU33T.js")),
          e.send && n.push(import("./chunk-KAJWT75R.js")),
          e.receive && n.push(import("./chunk-Q42PDBSB.js")),
          t.onramp &&
            t.onramp.length > 0 &&
            n.push(import("./chunk-LVSLXWGQ.js")),
          t.payWithExchange && n.push(import("./chunk-EUCIGG3A.js")),
          t.activity && n.push(import("./chunk-5OQU5CVM.js")),
          (e.pay || t.payments) && n.push(import("./chunk-AGIKCEPE.js")),
          t.emailCapture && n.push(import("./chunk-YCJYMJ6Q.js")),
          yield Promise.all([
            ...n,
            import("./chunk-UZW3DHST.js"),
            import("./chunk-YXWY27HO.js"),
          ]);
      });
    }
  };
var Oe = "1.8.12";
function Rt(a) {
  return new te(
    R(g({}, a), {
      sdkVersion: y.generateSdkVersion(a.adapters ?? [], "html", Oe),
    })
  );
}
export { $ as a, te as b, Rt as c };
