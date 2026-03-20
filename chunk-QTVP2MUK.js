import { b as Lt } from "./chunk-2CDTKQ3E.js";
import { a as Gt, b as pe } from "./chunk-N425SZE3.js";
import {
  Ea as Ut,
  Fa as Bt,
  Ga as $t,
  I as Nt,
  La as zt,
  Ma as Wt,
  O as Rt,
  Oa as ct,
  P as ot,
  Xa as J,
  Ya as Ht,
  e as Tt,
  s as kt,
  ta as Ft,
  ua as Dt,
  v as jt,
  w as Ot,
  x as Mt,
  za as qt,
} from "./chunk-IYKVXYEM.js";
import { ga as Pt } from "./chunk-5LQ6A2AX.js";
import {
  Eb as At,
  Lb as nt,
  Q as xt,
  R as ht,
  V as et,
  Xb as rt,
  Z as H,
  _ as It,
  ac as j,
  ea as St,
  eb as _t,
  fc as G,
  ia as F,
  kb as Et,
  lb as mt,
} from "./chunk-5G3DVQVW.js";
import { a as h, b as C, f as I, n as m } from "./chunk-VNDKUXGB.js";
var L = "2.17.0";
var Jt = () => `@wagmi/core@${L}`;
var Kt = function (t, e, n, r) {
    if (n === "a" && !r)
      throw new TypeError("Private accessor was defined without a getter");
    if (typeof e == "function" ? t !== e || !r : !e.has(t))
      throw new TypeError(
        "Cannot read private member from an object whose class did not declare it"
      );
    return n === "m" ? r : n === "a" ? r.call(t) : r ? r.value : e.get(t);
  },
  it,
  Vt,
  M = class t extends Error {
    get docsBaseUrl() {
      return "https://wagmi.sh/core";
    }
    get version() {
      return Jt();
    }
    constructor(e, n = {}) {
      super(),
        it.add(this),
        Object.defineProperty(this, "details", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "docsPath", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "metaMessages", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "shortMessage", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "WagmiCoreError",
        });
      let r =
          n.cause instanceof t
            ? n.cause.details
            : n.cause?.message
            ? n.cause.message
            : n.details,
        i = (n.cause instanceof t && n.cause.docsPath) || n.docsPath;
      (this.message = [
        e || "An error occurred.",
        "",
        ...(n.metaMessages ? [...n.metaMessages, ""] : []),
        ...(i
          ? [
              `Docs: ${this.docsBaseUrl}${i}.html${
                n.docsSlug ? `#${n.docsSlug}` : ""
              }`,
            ]
          : []),
        ...(r ? [`Details: ${r}`] : []),
        `Version: ${this.version}`,
      ].join(`
`)),
        n.cause && (this.cause = n.cause),
        (this.details = r),
        (this.docsPath = i),
        (this.metaMessages = n.metaMessages),
        (this.shortMessage = e);
    }
    walk(e) {
      return Kt(this, it, "m", Vt).call(this, this, e);
    }
  };
(it = new WeakSet()),
  (Vt = function t(e, n) {
    return n?.(e)
      ? e
      : e.cause
      ? Kt(this, it, "m", t).call(this, e.cause, n)
      : e;
  });
var N = class extends M {
    constructor() {
      super("Chain not configured."),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "ChainNotConfiguredError",
        });
    }
  },
  K = class extends M {
    constructor() {
      super("Connector already connected."),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "ConnectorAlreadyConnectedError",
        });
    }
  },
  z = class extends M {
    constructor() {
      super("Connector not connected."),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "ConnectorNotConnectedError",
        });
    }
  };
var V = class extends M {
    constructor({ address: e, connector: n }) {
      super(`Account "${e}" not found for connector "${n.name}".`),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "ConnectorAccountNotFoundError",
        });
    }
  },
  X = class extends M {
    constructor({ connectionChainId: e, connectorChainId: n }) {
      super(
        `The current chain of the connector (id: ${n}) does not match the connection's chain (id: ${e}).`,
        { metaMessages: [`Current Chain ID:  ${n}`, `Expected Chain ID: ${e}`] }
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "ConnectorChainMismatchError",
        });
    }
  },
  Z = class extends M {
    constructor({ connector: e }) {
      super(`Connector "${e.name}" unavailable while reconnecting.`, {
        details: [
          "During the reconnection step, the only connector methods guaranteed to be available are: `id`, `name`, `type`, `uid`.",
          "All other methods are not guaranteed to be available until reconnection completes and connectors are fully restored.",
          "This error commonly occurs for connectors that asynchronously inject after reconnection has already started.",
        ].join(" "),
      }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "ConnectorUnavailableReconnectingError",
        });
    }
  };
var q = class extends M {
    constructor() {
      super("Provider not found."),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "ProviderNotFoundError",
        });
    }
  },
  Q = class extends M {
    constructor({ connector: e }) {
      super(`"${e.name}" does not support programmatic chain switching.`),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "SwitchChainNotSupportedError",
        });
    }
  };
Y.type = "injected";
function Y(t = {}) {
  let { shimDisconnect: e = !0, unstable_shimAsyncInject: n } = t;
  function r() {
    let s = t.target;
    if (typeof s == "function") {
      let d = s();
      if (d) return d;
    }
    return typeof s == "object"
      ? s
      : typeof s == "string"
      ? h(
          {},
          ge[s] ?? {
            id: s,
            name: `${s[0].toUpperCase()}${s.slice(1)}`,
            provider: `is${s[0].toUpperCase()}${s.slice(1)}`,
          }
        )
      : {
          id: "injected",
          name: "Injected",
          provider(d) {
            return d?.ethereum;
          },
        };
  }
  let i, o, u, a;
  return (s) => ({
    get icon() {
      return r().icon;
    },
    get id() {
      return r().id;
    },
    get name() {
      return r().name;
    },
    get supportsSimulation() {
      return !0;
    },
    type: Y.type,
    setup() {
      return m(this, null, function* () {
        let c = yield this.getProvider();
        c?.on &&
          t.target &&
          (u || ((u = this.onConnect.bind(this)), c.on("connect", u)),
          i ||
            ((i = this.onAccountsChanged.bind(this)),
            c.on("accountsChanged", i)));
      });
    },
    connect() {
      return m(
        this,
        arguments,
        function* ({ chainId: c, isReconnecting: l } = {}) {
          let y = yield this.getProvider();
          if (!y) throw new q();
          let g = [];
          if (l) g = yield this.getAccounts().catch(() => []);
          else if (e)
            try {
              (g = (yield y.request({
                method: "wallet_requestPermissions",
                params: [{ eth_accounts: {} }],
              }))[0]?.caveats?.[0]?.value?.map((v) => F(v))),
                g.length > 0 && (g = yield this.getAccounts());
            } catch (b) {
              let v = b;
              if (v.code === j.code) throw new j(v);
              if (v.code === rt.code) throw v;
            }
          try {
            !g?.length &&
              !l &&
              (g = (yield y.request({ method: "eth_requestAccounts" })).map(
                (x) => F(x)
              )),
              u && (y.removeListener("connect", u), (u = void 0)),
              i ||
                ((i = this.onAccountsChanged.bind(this)),
                y.on("accountsChanged", i)),
              o ||
                ((o = this.onChainChanged.bind(this)), y.on("chainChanged", o)),
              a || ((a = this.onDisconnect.bind(this)), y.on("disconnect", a));
            let b = yield this.getChainId();
            return (
              c &&
                b !== c &&
                (b =
                  (yield this.switchChain({ chainId: c }).catch((x) => {
                    if (x.code === j.code) throw x;
                    return { id: b };
                  }))?.id ?? b),
              e && (yield s.storage?.removeItem(`${this.id}.disconnected`)),
              t.target || (yield s.storage?.setItem("injected.connected", !0)),
              { accounts: g, chainId: b }
            );
          } catch (b) {
            let v = b;
            throw v.code === j.code
              ? new j(v)
              : v.code === rt.code
              ? new rt(v)
              : v;
          }
        }
      );
    },
    disconnect() {
      return m(this, null, function* () {
        let c = yield this.getProvider();
        if (!c) throw new q();
        o && (c.removeListener("chainChanged", o), (o = void 0)),
          a && (c.removeListener("disconnect", a), (a = void 0)),
          u || ((u = this.onConnect.bind(this)), c.on("connect", u));
        try {
          yield Rt(
            () =>
              c.request({
                method: "wallet_revokePermissions",
                params: [{ eth_accounts: {} }],
              }),
            { timeout: 100 }
          );
        } catch {}
        e && (yield s.storage?.setItem(`${this.id}.disconnected`, !0)),
          t.target || (yield s.storage?.removeItem("injected.connected"));
      });
    },
    getAccounts() {
      return m(this, null, function* () {
        let c = yield this.getProvider();
        if (!c) throw new q();
        return (yield c.request({ method: "eth_accounts" })).map((y) => F(y));
      });
    },
    getChainId() {
      return m(this, null, function* () {
        let c = yield this.getProvider();
        if (!c) throw new q();
        let l = yield c.request({ method: "eth_chainId" });
        return Number(l);
      });
    },
    getProvider() {
      return m(this, null, function* () {
        if (typeof window > "u") return;
        let c,
          l = r();
        return (
          typeof l.provider == "function"
            ? (c = l.provider(window))
            : typeof l.provider == "string"
            ? (c = st(window, l.provider))
            : (c = l.provider),
          c &&
            !c.removeListener &&
            ("off" in c && typeof c.off == "function"
              ? (c.removeListener = c.off)
              : (c.removeListener = () => {})),
          c
        );
      });
    },
    isAuthorized() {
      return m(this, null, function* () {
        try {
          if (
            (e && (yield s.storage?.getItem(`${this.id}.disconnected`))) ||
            (!t.target && !(yield s.storage?.getItem("injected.connected")))
          )
            return !1;
          if (!(yield this.getProvider())) {
            if (n !== void 0 && n !== !1) {
              let g = () =>
                  m(this, null, function* () {
                    return (
                      typeof window < "u" &&
                        window.removeEventListener("ethereum#initialized", g),
                      !!(yield this.getProvider())
                    );
                  }),
                b = typeof n == "number" ? n : 1e3;
              if (
                yield Promise.race([
                  ...(typeof window < "u"
                    ? [
                        new Promise((x) =>
                          window.addEventListener(
                            "ethereum#initialized",
                            () => x(g()),
                            { once: !0 }
                          )
                        ),
                      ]
                    : []),
                  new Promise((x) => setTimeout(() => x(g()), b)),
                ])
              )
                return !0;
            }
            throw new q();
          }
          return !!(yield Nt(() => this.getAccounts())).length;
        } catch {
          return !1;
        }
      });
    },
    switchChain(y) {
      return m(
        this,
        arguments,
        function* ({ addEthereumChainParameter: c, chainId: l }) {
          let g = yield this.getProvider();
          if (!g) throw new q();
          let b = s.chains.find((T) => T.id === l);
          if (!b) throw new G(new N());
          let v = new Promise((T) => {
            let S = (P) => {
              "chainId" in P &&
                P.chainId === l &&
                (s.emitter.off("change", S), T());
            };
            s.emitter.on("change", S);
          });
          try {
            return (
              yield Promise.all([
                g
                  .request({
                    method: "wallet_switchEthereumChain",
                    params: [{ chainId: H(l) }],
                  })
                  .then(() =>
                    m(this, null, function* () {
                      (yield this.getChainId()) === l &&
                        s.emitter.emit("change", { chainId: l });
                    })
                  ),
                v,
              ]),
              b
            );
          } catch (T) {
            let S = T;
            if (S.code === 4902 || S?.data?.originalError?.code === 4902)
              try {
                let x = b.blockExplorers ?? {},
                  { default: P } = x,
                  O = I(x, ["default"]),
                  k;
                c?.blockExplorerUrls
                  ? (k = c.blockExplorerUrls)
                  : P && (k = [P.url, ...Object.values(O).map((p) => p.url)]);
                let f;
                c?.rpcUrls?.length
                  ? (f = c.rpcUrls)
                  : (f = [b.rpcUrls.default?.http[0] ?? ""]);
                let w = {
                  blockExplorerUrls: k,
                  chainId: H(l),
                  chainName: c?.chainName ?? b.name,
                  iconUrls: c?.iconUrls,
                  nativeCurrency: c?.nativeCurrency ?? b.nativeCurrency,
                  rpcUrls: f,
                };
                return (
                  yield Promise.all([
                    g
                      .request({
                        method: "wallet_addEthereumChain",
                        params: [w],
                      })
                      .then(() =>
                        m(this, null, function* () {
                          if ((yield this.getChainId()) === l)
                            s.emitter.emit("change", { chainId: l });
                          else
                            throw new j(
                              new Error(
                                "User rejected switch after adding network."
                              )
                            );
                        })
                      ),
                    v,
                  ]),
                  b
                );
              } catch (P) {
                throw new j(P);
              }
            throw S.code === j.code ? new j(S) : new G(S);
          }
        }
      );
    },
    onAccountsChanged(c) {
      return m(this, null, function* () {
        if (c.length === 0) this.onDisconnect();
        else if (s.emitter.listenerCount("connect")) {
          let l = (yield this.getChainId()).toString();
          this.onConnect({ chainId: l }),
            e && (yield s.storage?.removeItem(`${this.id}.disconnected`));
        } else s.emitter.emit("change", { accounts: c.map((l) => F(l)) });
      });
    },
    onChainChanged(c) {
      let l = Number(c);
      s.emitter.emit("change", { chainId: l });
    },
    onConnect(c) {
      return m(this, null, function* () {
        let l = yield this.getAccounts();
        if (l.length === 0) return;
        let y = Number(c.chainId);
        s.emitter.emit("connect", { accounts: l, chainId: y });
        let g = yield this.getProvider();
        g &&
          (u && (g.removeListener("connect", u), (u = void 0)),
          i ||
            ((i = this.onAccountsChanged.bind(this)),
            g.on("accountsChanged", i)),
          o || ((o = this.onChainChanged.bind(this)), g.on("chainChanged", o)),
          a || ((a = this.onDisconnect.bind(this)), g.on("disconnect", a)));
      });
    },
    onDisconnect(c) {
      return m(this, null, function* () {
        let l = yield this.getProvider();
        (c && c.code === 1013 && l && (yield this.getAccounts()).length) ||
          (s.emitter.emit("disconnect"),
          l &&
            (o && (l.removeListener("chainChanged", o), (o = void 0)),
            a && (l.removeListener("disconnect", a), (a = void 0)),
            u || ((u = this.onConnect.bind(this)), l.on("connect", u))));
      });
    },
  });
}
var ge = {
  coinbaseWallet: {
    id: "coinbaseWallet",
    name: "Coinbase Wallet",
    provider(t) {
      return t?.coinbaseWalletExtension
        ? t.coinbaseWalletExtension
        : st(t, "isCoinbaseWallet");
    },
  },
  metaMask: {
    id: "metaMask",
    name: "MetaMask",
    provider(t) {
      return st(t, (e) => {
        if (!e.isMetaMask || (e.isBraveWallet && !e._events && !e._state))
          return !1;
        let n = [
          "isApexWallet",
          "isAvalanche",
          "isBitKeep",
          "isBlockWallet",
          "isKuCoinWallet",
          "isMathWallet",
          "isOkxWallet",
          "isOKExWallet",
          "isOneInchIOSWallet",
          "isOneInchAndroidWallet",
          "isOpera",
          "isPhantom",
          "isPortal",
          "isRabby",
          "isTokenPocket",
          "isTokenary",
          "isUniswapWallet",
          "isZerion",
        ];
        for (let r of n) if (e[r]) return !1;
        return !0;
      });
    },
  },
  phantom: {
    id: "phantom",
    name: "Phantom",
    provider(t) {
      return t?.phantom?.ethereum ? t.phantom?.ethereum : st(t, "isPhantom");
    },
  },
};
function st(t, e) {
  function n(i) {
    return typeof e == "function" ? e(i) : typeof e == "string" ? i[e] : !0;
  }
  let r = t.ethereum;
  if (r?.providers) return r.providers.find((i) => n(i));
  if (r && n(r)) return r;
}
pt.type = "mock";
function pt(t) {
  let e = new Map(),
    n = t.features ?? { defaultConnected: !1 },
    r = n.defaultConnected,
    i;
  return (o) => ({
    id: "mock",
    name: "Mock Connector",
    type: pt.type,
    setup() {
      return m(this, null, function* () {
        i = o.chains[0].id;
      });
    },
    connect() {
      return m(this, arguments, function* ({ chainId: a } = {}) {
        if (n.connectError)
          throw typeof n.connectError == "boolean"
            ? new j(new Error("Failed to connect."))
            : n.connectError;
        let d = yield (yield this.getProvider()).request({
            method: "eth_requestAccounts",
          }),
          c = yield this.getChainId();
        return (
          a && c !== a && (c = (yield this.switchChain({ chainId: a })).id),
          (r = !0),
          { accounts: d.map((l) => F(l)), chainId: c }
        );
      });
    },
    disconnect() {
      return m(this, null, function* () {
        r = !1;
      });
    },
    getAccounts() {
      return m(this, null, function* () {
        if (!r) throw new z();
        return (yield (yield this.getProvider()).request({
          method: "eth_accounts",
        })).map((d) => F(d));
      });
    },
    getChainId() {
      return m(this, null, function* () {
        let s = yield (yield this.getProvider()).request({
          method: "eth_chainId",
        });
        return ht(s, "number");
      });
    },
    isAuthorized() {
      return m(this, null, function* () {
        return !n.reconnect || !r ? !1 : !!(yield this.getAccounts()).length;
      });
    },
    switchChain(s) {
      return m(this, arguments, function* ({ chainId: a }) {
        let d = yield this.getProvider(),
          c = o.chains.find((l) => l.id === a);
        if (!c) throw new G(new N());
        return (
          yield d.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: H(a) }],
          }),
          c
        );
      });
    },
    onAccountsChanged(a) {
      a.length === 0
        ? this.onDisconnect()
        : o.emitter.emit("change", { accounts: a.map((s) => F(s)) });
    },
    onChainChanged(a) {
      let s = Number(a);
      o.emitter.emit("change", { chainId: s });
    },
    onDisconnect(a) {
      return m(this, null, function* () {
        o.emitter.emit("disconnect"), (r = !1);
      });
    },
    getProvider() {
      return m(this, arguments, function* ({ chainId: a } = {}) {
        let d = (o.chains.find((l) => l.id === a) ?? o.chains[0]).rpcUrls
          .default.http[0];
        return J({
          request: (g) =>
            m(this, [g], function* ({ method: l, params: y }) {
              if (l === "eth_chainId") return H(i);
              if (l === "eth_requestAccounts") return t.accounts;
              if (l === "eth_signTypedData_v4" && n.signTypedDataError)
                throw typeof n.signTypedDataError == "boolean"
                  ? new j(new Error("Failed to sign typed data."))
                  : n.signTypedDataError;
              if (l === "wallet_switchEthereumChain") {
                if (n.switchChainError)
                  throw typeof n.switchChainError == "boolean"
                    ? new j(new Error("Failed to switch chain."))
                    : n.switchChainError;
                (i = ht(y[0].chainId, "number")),
                  this.onChainChanged(i.toString());
                return;
              }
              if (l === "wallet_watchAsset") {
                if (n.watchAssetError)
                  throw typeof n.watchAssetError == "boolean"
                    ? new j(new Error("Failed to switch chain."))
                    : n.watchAssetError;
                return r;
              }
              if (l === "wallet_getCapabilities")
                return {
                  "0x2105": {
                    paymasterService: {
                      supported:
                        y[0] === "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
                    },
                    sessionKeys: { supported: !0 },
                  },
                  "0x14A34": {
                    paymasterService: {
                      supported:
                        y[0] === "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
                    },
                  },
                };
              if (l === "wallet_sendCalls") {
                let T = [],
                  S = y[0].calls;
                for (let O of S) {
                  let { result: k, error: f } = yield ot.http(d, {
                    body: { method: "eth_sendTransaction", params: [O] },
                  });
                  if (f)
                    throw new nt({
                      body: { method: l, params: y },
                      error: f,
                      url: d,
                    });
                  T.push(k);
                }
                let P = St(It(JSON.stringify(S)));
                return e.set(P, T), { id: P };
              }
              if (l === "wallet_getCallsStatus") {
                let T = e.get(y[0]);
                if (!T)
                  return {
                    atomic: !1,
                    chainId: "0x1",
                    id: y[0],
                    status: 100,
                    receipts: [],
                    version: "2.0.0",
                  };
                let P = (yield Promise.all(
                  T.map((O) =>
                    m(this, null, function* () {
                      let { result: k, error: f } = yield ot.http(d, {
                        body: {
                          method: "eth_getTransactionReceipt",
                          params: [O],
                          id: 0,
                        },
                      });
                      if (f)
                        throw new nt({
                          body: { method: l, params: y },
                          error: f,
                          url: d,
                        });
                      return k
                        ? {
                            blockHash: k.blockHash,
                            blockNumber: k.blockNumber,
                            gasUsed: k.gasUsed,
                            logs: k.logs,
                            status: k.status,
                            transactionHash: k.transactionHash,
                          }
                        : null;
                    })
                  )
                )).filter((O) => O !== null);
                return P.length === 0
                  ? {
                      atomic: !1,
                      chainId: "0x1",
                      id: y[0],
                      status: 100,
                      receipts: [],
                      version: "2.0.0",
                    }
                  : {
                      atomic: !1,
                      chainId: "0x1",
                      id: y[0],
                      status: 200,
                      receipts: P,
                      version: "2.0.0",
                    };
              }
              if (l === "wallet_showCallsStatus") return;
              if (l === "personal_sign") {
                if (n.signMessageError)
                  throw typeof n.signMessageError == "boolean"
                    ? new j(new Error("Failed to sign message."))
                    : n.signMessageError;
                (l = "eth_sign"), (y = [y[1], y[0]]);
              }
              let b = { method: l, params: y },
                { error: v, result: x } = yield ot.http(d, { body: b });
              if (v) throw new nt({ body: b, error: v, url: d });
              return x;
            }),
        })({ retryCount: 0 });
      });
    },
  });
}
function E(t, e, n) {
  let r = t[e.name];
  if (typeof r == "function") return r;
  let i = t[n];
  return typeof i == "function" ? i : (o) => e(t, o);
}
function we(t, e) {
  return m(this, null, function* () {
    let n;
    if (
      (typeof e.connector == "function"
        ? (n = t._internal.connectors.setup(e.connector))
        : (n = e.connector),
      n.uid === t.state.current)
    )
      throw new K();
    try {
      t.setState((s) => C(h({}, s), { status: "connecting" })),
        n.emitter.emit("message", { type: "connecting" });
      let r = e,
        { connector: i } = r,
        o = I(r, ["connector"]),
        u = yield n.connect(o),
        a = u.accounts;
      return (
        n.emitter.off("connect", t._internal.events.connect),
        n.emitter.on("change", t._internal.events.change),
        n.emitter.on("disconnect", t._internal.events.disconnect),
        yield t.storage?.setItem("recentConnectorId", n.id),
        t.setState((s) =>
          C(h({}, s), {
            connections: new Map(s.connections).set(n.uid, {
              accounts: a,
              chainId: u.chainId,
              connector: n,
            }),
            current: n.uid,
            status: "connected",
          })
        ),
        { accounts: a, chainId: u.chainId }
      );
    } catch (i) {
      throw (
        (t.setState((o) =>
          C(h({}, o), { status: o.current ? "connected" : "disconnected" })
        ),
        i)
      );
    }
  });
}
function U(n) {
  return m(this, arguments, function* (t, e = {}) {
    let r;
    if (e.connector) {
      let { connector: c } = e;
      if (t.state.status === "reconnecting" && !c.getAccounts && !c.getChainId)
        throw new Z({ connector: c });
      let [l, y] = yield Promise.all([
        c.getAccounts().catch((g) => {
          if (e.account === null) return [];
          throw g;
        }),
        c.getChainId(),
      ]);
      r = { accounts: l, chainId: y, connector: c };
    } else r = t.state.connections.get(t.state.current);
    if (!r) throw new z();
    let i = e.chainId ?? r.chainId,
      o = yield r.connector.getChainId();
    if (o !== r.chainId)
      throw new X({ connectionChainId: r.chainId, connectorChainId: o });
    let u = r.connector;
    if (u.getClient) return u.getClient({ chainId: i });
    let a = _t(e.account ?? r.accounts[0]);
    if (
      (a && (a.address = F(a.address)),
      e.account &&
        !r.accounts.some((c) => c.toLowerCase() === a.address.toLowerCase()))
    )
      throw new V({ address: a.address, connector: u });
    let s = t.chains.find((c) => c.id === i),
      d = yield r.connector.getProvider({ chainId: i });
    return ct({
      account: a,
      chain: s,
      name: "Connector Client",
      transport: (c) => J(d)(C(h({}, c), { retryCount: 0 })),
    });
  });
}
function ye(n) {
  return m(this, arguments, function* (t, e = {}) {
    let r;
    if (e.connector) r = e.connector;
    else {
      let { connections: o, current: u } = t.state;
      r = o.get(u)?.connector;
    }
    let i = t.state.connections;
    r &&
      (yield r.disconnect(),
      r.emitter.off("change", t._internal.events.change),
      r.emitter.off("disconnect", t._internal.events.disconnect),
      r.emitter.on("connect", t._internal.events.connect),
      i.delete(r.uid)),
      t.setState((o) => {
        if (i.size === 0)
          return C(h({}, o), {
            connections: new Map(),
            current: null,
            status: "disconnected",
          });
        let u = i.values().next().value;
        return C(h({}, o), {
          connections: new Map(i),
          current: u.connector.uid,
        });
      });
    {
      let o = t.state.current;
      if (!o) return;
      let u = t.state.connections.get(o)?.connector;
      if (!u) return;
      yield t.storage?.setItem("recentConnectorId", u.id);
    }
  });
}
function Ce(t, e) {
  return m(this, null, function* () {
    let s = e,
      { chainId: n, connector: r } = s,
      i = I(s, ["chainId", "connector"]),
      o;
    e.account
      ? (o = e.account)
      : (o = (yield U(t, { account: e.account, chainId: n, connector: r }))
          .account);
    let u = t.getClient({ chainId: n });
    return E(u, Ot, "estimateGas")(C(h({}, i), { account: o }));
  });
}
function gt(t) {
  return typeof t == "number" ? t : t === "wei" ? 0 : Math.abs(Et[t]);
}
function tt(t) {
  let e = t.state.current,
    n = t.state.connections.get(e),
    r = n?.accounts,
    i = r?.[0],
    o = t.chains.find((a) => a.id === n?.chainId),
    u = t.state.status;
  switch (u) {
    case "connected":
      return {
        address: i,
        addresses: r,
        chain: o,
        chainId: n?.chainId,
        connector: n?.connector,
        isConnected: !0,
        isConnecting: !1,
        isDisconnected: !1,
        isReconnecting: !1,
        status: u,
      };
    case "reconnecting":
      return {
        address: i,
        addresses: r,
        chain: o,
        chainId: n?.chainId,
        connector: n?.connector,
        isConnected: !!i,
        isConnecting: !1,
        isDisconnected: !1,
        isReconnecting: !0,
        status: u,
      };
    case "connecting":
      return {
        address: i,
        addresses: r,
        chain: o,
        chainId: n?.chainId,
        connector: n?.connector,
        isConnected: !1,
        isConnecting: !0,
        isDisconnected: !1,
        isReconnecting: !1,
        status: u,
      };
    case "disconnected":
      return {
        address: void 0,
        addresses: void 0,
        chain: void 0,
        chainId: void 0,
        connector: void 0,
        isConnected: !1,
        isConnecting: !1,
        isDisconnected: !0,
        isReconnecting: !1,
        status: u,
      };
  }
}
function Xt(t, e) {
  return m(this, null, function* () {
    let s = e,
      { allowFailure: n = !0, chainId: r, contracts: i } = s,
      o = I(s, ["allowFailure", "chainId", "contracts"]),
      u = t.getClient({ chainId: r });
    return E(u, Dt, "multicall")(h({ allowFailure: n, contracts: i }, o));
  });
}
function Zt(t, e) {
  let u = e,
    { chainId: n } = u,
    r = I(u, ["chainId"]),
    i = t.getClient({ chainId: n });
  return E(i, Tt, "readContract")(r);
}
function wt(t, e) {
  return m(this, null, function* () {
    let a = e,
      { allowFailure: n = !0, blockNumber: r, blockTag: i } = a,
      o = I(a, ["allowFailure", "blockNumber", "blockTag"]),
      u = e.contracts;
    try {
      let s = {};
      for (let [y, g] of u.entries()) {
        let b = g.chainId ?? t.state.chainId;
        s[b] || (s[b] = []), s[b]?.push({ contract: g, index: y });
      }
      let d = () =>
          Object.entries(s).map(([y, g]) =>
            Xt(
              t,
              C(h({}, o), {
                allowFailure: n,
                blockNumber: r,
                blockTag: i,
                chainId: Number.parseInt(y),
                contracts: g.map(({ contract: b }) => b),
              })
            )
          ),
        c = (yield Promise.all(d())).flat(),
        l = Object.values(s).flatMap((y) => y.map(({ index: g }) => g));
      return c.reduce((y, g, b) => (y && (y[l[b]] = g), y), []);
    } catch (s) {
      if (s instanceof At) throw s;
      let d = () =>
        u.map((c) => Zt(t, C(h({}, c), { blockNumber: r, blockTag: i })));
      return n
        ? (yield Promise.allSettled(d())).map((c) =>
            c.status === "fulfilled"
              ? { result: c.value, status: "success" }
              : { error: c.reason, result: void 0, status: "failure" }
          )
        : yield Promise.all(d());
    }
  });
}
function Yt(t, e) {
  return m(this, null, function* () {
    let {
      address: n,
      blockNumber: r,
      blockTag: i,
      chainId: o,
      token: u,
      unit: a = "ether",
    } = e;
    if (u)
      try {
        return yield Qt(t, {
          balanceAddress: n,
          chainId: o,
          symbolType: "string",
          tokenAddress: u,
        });
      } catch (y) {
        if (y.name === "ContractFunctionExecutionError") {
          let g = yield Qt(t, {
              balanceAddress: n,
              chainId: o,
              symbolType: "bytes32",
              tokenAddress: u,
            }),
            b = et(xt(g.symbol, { dir: "right" }));
          return C(h({}, g), { symbol: b });
        }
        throw y;
      }
    let s = t.getClient({ chainId: o }),
      c = yield E(
        s,
        Mt,
        "getBalance"
      )(r ? { address: n, blockNumber: r } : { address: n, blockTag: i }),
      l = t.chains.find((y) => y.id === o) ?? s.chain;
    return {
      decimals: l.nativeCurrency.decimals,
      formatted: mt(c, gt(a)),
      symbol: l.nativeCurrency.symbol,
      value: c,
    };
  });
}
function Qt(t, e) {
  return m(this, null, function* () {
    let {
        balanceAddress: n,
        chainId: r,
        symbolType: i,
        tokenAddress: o,
        unit: u,
      } = e,
      a = {
        abi: [
          {
            type: "function",
            name: "balanceOf",
            stateMutability: "view",
            inputs: [{ type: "address" }],
            outputs: [{ type: "uint256" }],
          },
          {
            type: "function",
            name: "decimals",
            stateMutability: "view",
            inputs: [],
            outputs: [{ type: "uint8" }],
          },
          {
            type: "function",
            name: "symbol",
            stateMutability: "view",
            inputs: [],
            outputs: [{ type: i }],
          },
        ],
        address: o,
      },
      [s, d, c] = yield wt(t, {
        allowFailure: !1,
        contracts: [
          C(h({}, a), { functionName: "balanceOf", args: [n], chainId: r }),
          C(h({}, a), { functionName: "decimals", chainId: r }),
          C(h({}, a), { functionName: "symbol", chainId: r }),
        ],
      }),
      l = mt(s ?? "0", gt(u ?? d));
    return { decimals: d, formatted: l, symbol: c, value: s };
  });
}
function ve(n) {
  return m(this, arguments, function* (t, e = {}) {
    let s = e,
      { chainId: r } = s,
      i = I(s, ["chainId"]),
      o = t.getClient({ chainId: r }),
      a = yield E(o, kt, "getBlock")(i);
    return C(h({}, a), { chainId: o.chain.id });
  });
}
function $(t, e) {
  if (t === e) return !0;
  if (t && e && typeof t == "object" && typeof e == "object") {
    if (t.constructor !== e.constructor) return !1;
    let n, r;
    if (Array.isArray(t) && Array.isArray(e)) {
      if (((n = t.length), n !== e.length)) return !1;
      for (r = n; r-- !== 0; ) if (!$(t[r], e[r])) return !1;
      return !0;
    }
    if (t.valueOf !== Object.prototype.valueOf)
      return t.valueOf() === e.valueOf();
    if (t.toString !== Object.prototype.toString)
      return t.toString() === e.toString();
    let i = Object.keys(t);
    if (((n = i.length), n !== Object.keys(e).length)) return !1;
    for (r = n; r-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(e, i[r])) return !1;
    for (r = n; r-- !== 0; ) {
      let o = i[r];
      if (o && !$(t[o], e[o])) return !1;
    }
    return !0;
  }
  return t !== t && e !== e;
}
var at = [];
function yt(t) {
  let e = [...t.state.connections.values()];
  return t.state.status === "reconnecting" || $(at, e) ? at : ((at = e), e);
}
function be(t, e) {
  return m(this, null, function* () {
    let s = e,
      { account: n, chainId: r } = s,
      i = I(s, ["account", "chainId"]),
      o = n ?? tt(t).address,
      u = t.getClient({ chainId: r });
    return E(
      u,
      jt,
      "prepareTransactionRequest"
    )(h(h({}, i), o ? { account: o } : {}));
  });
}
var Ct = !1;
function xe(n) {
  return m(this, arguments, function* (t, e = {}) {
    if (Ct) return [];
    (Ct = !0),
      t.setState((c) =>
        C(h({}, c), { status: c.current ? "reconnecting" : "connecting" })
      );
    let r = [];
    if (e.connectors?.length)
      for (let c of e.connectors) {
        let l;
        typeof c == "function"
          ? (l = t._internal.connectors.setup(c))
          : (l = c),
          r.push(l);
      }
    else r.push(...t.connectors);
    let i;
    try {
      i = yield t.storage?.getItem("recentConnectorId");
    } catch {}
    let o = {};
    for (let [, c] of t.state.connections) o[c.connector.id] = 1;
    i && (o[i] = 0);
    let u =
        Object.keys(o).length > 0
          ? [...r].sort((c, l) => (o[c.id] ?? 10) - (o[l.id] ?? 10))
          : r,
      a = !1,
      s = [],
      d = [];
    for (let c of u) {
      let l = yield c.getProvider().catch(() => {});
      if (!l || d.some((b) => b === l) || !(yield c.isAuthorized())) continue;
      let g = yield c.connect({ isReconnecting: !0 }).catch(() => null);
      g &&
        (c.emitter.off("connect", t._internal.events.connect),
        c.emitter.on("change", t._internal.events.change),
        c.emitter.on("disconnect", t._internal.events.disconnect),
        t.setState((b) => {
          let v = new Map(a ? b.connections : new Map()).set(c.uid, {
            accounts: g.accounts,
            chainId: g.chainId,
            connector: c,
          });
          return C(h({}, b), {
            current: a ? b.current : c.uid,
            connections: v,
          });
        }),
        s.push({ accounts: g.accounts, chainId: g.chainId, connector: c }),
        d.push(l),
        (a = !0));
    }
    return (
      (t.state.status === "reconnecting" || t.state.status === "connecting") &&
        (a
          ? t.setState((c) => C(h({}, c), { status: "connected" }))
          : t.setState((c) =>
              C(h({}, c), {
                connections: new Map(),
                current: null,
                status: "disconnected",
              })
            )),
      (Ct = !1),
      s
    );
  });
}
function Ie(t, e) {
  return m(this, null, function* () {
    let d = e,
      { account: n, chainId: r, connector: i } = d,
      o = I(d, ["account", "chainId", "connector"]),
      u;
    return (
      typeof n == "object" && n?.type === "local"
        ? (u = t.getClient({ chainId: r }))
        : (u = yield U(t, { account: n ?? void 0, chainId: r, connector: i })),
      yield E(
        u,
        $t,
        "sendTransaction"
      )(
        C(h(h({}, o), n ? { account: n } : {}), {
          chain: r ? { id: r } : null,
          gas: o.gas ?? void 0,
        })
      )
    );
  });
}
function Se(t, e) {
  return m(this, null, function* () {
    let a = e,
      { account: n, connector: r } = a,
      i = I(a, ["account", "connector"]),
      o;
    return (
      typeof n == "object" && n.type === "local"
        ? (o = t.getClient())
        : (o = yield U(t, { account: n, connector: r })),
      E(o, zt, "signMessage")(h(h({}, i), n ? { account: n } : {}))
    );
  });
}
function _e(t, e) {
  return m(this, null, function* () {
    let l = e,
      { abi: n, chainId: r, connector: i } = l,
      o = I(l, ["abi", "chainId", "connector"]),
      u;
    e.account
      ? (u = e.account)
      : (u = (yield U(t, { chainId: r, connector: i })).account);
    let a = t.getClient({ chainId: r }),
      s = E(a, qt, "simulateContract"),
      { result: d, request: c } = yield s(C(h({}, o), { abi: n, account: u }));
    return {
      chainId: a.chain.id,
      result: d,
      request: C(h({}, c), { chainId: r }),
    };
  });
}
function te(t, e) {
  return m(this, null, function* () {
    let { addEthereumChainParameter: n, chainId: r } = e,
      i = t.state.connections.get(e.connector?.uid ?? t.state.current);
    if (i) {
      let u = i.connector;
      if (!u.switchChain) throw new Q({ connector: u });
      return yield u.switchChain({ addEthereumChainParameter: n, chainId: r });
    }
    let o = t.chains.find((u) => u.id === r);
    if (!o) throw new N();
    return t.setState((u) => C(h({}, u), { chainId: r })), o;
  });
}
function Ee(t, e) {
  let { onChange: n } = e;
  return t.subscribe(() => tt(t), n, {
    equalityFn(r, i) {
      let d = r,
        { connector: o } = d,
        u = I(d, ["connector"]),
        c = i,
        { connector: a } = c,
        s = I(c, ["connector"]);
      return $(u, s) && o?.id === a?.id && o?.uid === a?.uid;
    },
  });
}
function Ae(t, e) {
  let { onChange: n } = e;
  return t.subscribe(() => yt(t), n, { equalityFn: $ });
}
function Pe(t, e) {
  let { onChange: n } = e;
  return t._internal.connectors.subscribe((r, i) => {
    n(Object.values(r), i);
  });
}
function Te(t, e) {
  let s = e,
    { syncConnectedChain: n = t._internal.syncConnectedChain } = s,
    r = I(s, ["syncConnectedChain"]),
    i,
    o = (d) => {
      i && i();
      let c = t.getClient({ chainId: d });
      return (i = E(c, Bt, "watchPendingTransactions")(r)), i;
    },
    u = o(e.chainId),
    a;
  return (
    n &&
      !e.chainId &&
      (a = t.subscribe(
        ({ chainId: d }) => d,
        (d) =>
          m(this, null, function* () {
            return o(d);
          })
      )),
    () => {
      u?.(), a?.();
    }
  );
}
function ee(t, e) {
  return m(this, null, function* () {
    let s = e,
      { chainId: n, timeout: r = 0 } = s,
      i = I(s, ["chainId", "timeout"]),
      o = t.getClient({ chainId: n }),
      a = yield E(
        o,
        Ut,
        "waitForTransactionReceipt"
      )(C(h({}, i), { timeout: r }));
    if (a.status === "reverted") {
      let c = yield E(o, Ft, "getTransaction")({ hash: a.transactionHash }),
        y = yield E(
          o,
          Pt,
          "call"
        )(
          C(h({}, c), {
            data: c.input,
            gasPrice: c.type !== "eip1559" ? c.gasPrice : void 0,
            maxFeePerGas: c.type === "eip1559" ? c.maxFeePerGas : void 0,
            maxPriorityFeePerGas:
              c.type === "eip1559" ? c.maxPriorityFeePerGas : void 0,
          })
        ),
        g = y?.data ? et(`0x${y.data.substring(138)}`) : "unknown reason";
      throw new Error(g);
    }
    return C(h({}, a), { chainId: o.chain.id });
  });
}
function ke(t, e) {
  return m(this, null, function* () {
    let d = e,
      { account: n, chainId: r, connector: i } = d,
      o = I(d, ["account", "chainId", "connector"]),
      u;
    return (
      typeof n == "object" && n?.type === "local"
        ? (u = t.getClient({ chainId: r }))
        : (u = yield U(t, { account: n ?? void 0, chainId: r, connector: i })),
      yield E(
        u,
        Wt,
        "writeContract"
      )(
        C(h(h({}, o), n ? { account: n } : {}), { chain: r ? { id: r } : null })
      )
    );
  });
}
var je = (t) => (e, n, r) => {
    let i = r.subscribe;
    return (
      (r.subscribe = (u, a, s) => {
        let d = u;
        if (a) {
          let c = s?.equalityFn || Object.is,
            l = u(r.getState());
          (d = (y) => {
            let g = u(y);
            if (!c(l, g)) {
              let b = l;
              a((l = g), b);
            }
          }),
            s?.fireImmediately && a(l, l);
        }
        return i(d);
      }),
      t(e, n, r)
    );
  },
  ne = je;
function Oe(t, e) {
  let n;
  try {
    n = t();
  } catch {
    return;
  }
  return {
    getItem: (i) => {
      var o;
      let u = (s) => (s === null ? null : JSON.parse(s, e?.reviver)),
        a = (o = n.getItem(i)) != null ? o : null;
      return a instanceof Promise ? a.then(u) : u(a);
    },
    setItem: (i, o) => n.setItem(i, JSON.stringify(o, e?.replacer)),
    removeItem: (i) => n.removeItem(i),
  };
}
var vt = (t) => (e) => {
    try {
      let n = t(e);
      return n instanceof Promise
        ? n
        : {
            then(r) {
              return vt(r)(n);
            },
            catch(r) {
              return this;
            },
          };
    } catch (n) {
      return {
        then(r) {
          return this;
        },
        catch(r) {
          return vt(r)(n);
        },
      };
    }
  },
  Me = (t, e) => (n, r, i) => {
    let o = h(
        {
          storage: Oe(() => localStorage),
          partialize: (v) => v,
          version: 0,
          merge: (v, x) => h(h({}, x), v),
        },
        e
      ),
      u = !1,
      a = new Set(),
      s = new Set(),
      d = o.storage;
    if (!d)
      return t(
        (...v) => {
          console.warn(
            `[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`
          ),
            n(...v);
        },
        r,
        i
      );
    let c = () => {
        let v = o.partialize(h({}, r()));
        return d.setItem(o.name, { state: v, version: o.version });
      },
      l = i.setState;
    i.setState = (v, x) => {
      l(v, x), c();
    };
    let y = t(
      (...v) => {
        n(...v), c();
      },
      r,
      i
    );
    i.getInitialState = () => y;
    let g,
      b = () => {
        var v, x;
        if (!d) return;
        (u = !1),
          a.forEach((S) => {
            var P;
            return S((P = r()) != null ? P : y);
          });
        let T =
          ((x = o.onRehydrateStorage) == null
            ? void 0
            : x.call(o, (v = r()) != null ? v : y)) || void 0;
        return vt(d.getItem.bind(d))(o.name)
          .then((S) => {
            if (S)
              if (typeof S.version == "number" && S.version !== o.version) {
                if (o.migrate) return [!0, o.migrate(S.state, S.version)];
                console.error(
                  "State loaded from storage couldn't be migrated since no migrate function was provided"
                );
              } else return [!1, S.state];
            return [!1, void 0];
          })
          .then((S) => {
            var P;
            let [O, k] = S;
            if (((g = o.merge(k, (P = r()) != null ? P : y)), n(g, !0), O))
              return c();
          })
          .then(() => {
            T?.(g, void 0), (g = r()), (u = !0), s.forEach((S) => S(g));
          })
          .catch((S) => {
            T?.(void 0, S);
          });
      };
    return (
      (i.persist = {
        setOptions: (v) => {
          (o = h(h({}, o), v)), v.storage && (d = v.storage);
        },
        clearStorage: () => {
          d?.removeItem(o.name);
        },
        getOptions: () => o,
        rehydrate: () => b(),
        hasHydrated: () => u,
        onHydrate: (v) => (
          a.add(v),
          () => {
            a.delete(v);
          }
        ),
        onFinishHydration: (v) => (
          s.add(v),
          () => {
            s.delete(v);
          }
        ),
      }),
      o.skipHydration || b(),
      g || y
    );
  },
  re = Me;
var oe = (t) => {
    let e,
      n = new Set(),
      r = (d, c) => {
        let l = typeof d == "function" ? d(e) : d;
        if (!Object.is(l, e)) {
          let y = e;
          (e =
            c ?? (typeof l != "object" || l === null)
              ? l
              : Object.assign({}, e, l)),
            n.forEach((g) => g(e, y));
        }
      },
      i = () => e,
      a = {
        setState: r,
        getState: i,
        getInitialState: () => s,
        subscribe: (d) => (n.add(d), () => n.delete(d)),
      },
      s = (e = t(r, i, a));
    return a;
  },
  ut = (t) => (t ? oe(t) : oe);
pe();
var bt = class {
  constructor(e) {
    Object.defineProperty(this, "uid", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: e,
    }),
      Object.defineProperty(this, "_emitter", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: new Gt.default(),
      });
  }
  on(e, n) {
    this._emitter.on(e, n);
  }
  once(e, n) {
    this._emitter.once(e, n);
  }
  off(e, n) {
    this._emitter.off(e, n);
  }
  emit(e, ...n) {
    let r = n[0];
    this._emitter.emit(e, h({ uid: this.uid }, r));
  }
  listenerCount(e) {
    return this._emitter.listenerCount(e);
  }
};
function ce(t) {
  return new bt(t);
}
function ie(t, e) {
  return JSON.parse(t, (n, r) => {
    let i = r;
    return (
      i?.__type === "bigint" && (i = BigInt(i.value)),
      i?.__type === "Map" && (i = new Map(i.value)),
      e?.(n, i) ?? i
    );
  });
}
function se(t, e) {
  return t.slice(0, e).join(".") || ".";
}
function ae(t, e) {
  let { length: n } = t;
  for (let r = 0; r < n; ++r) if (t[r] === e) return r + 1;
  return 0;
}
function Ne(t, e) {
  let n = typeof t == "function",
    r = typeof e == "function",
    i = [],
    o = [];
  return function (a, s) {
    if (typeof s == "object")
      if (i.length) {
        let d = ae(i, this);
        d === 0 ? (i[i.length] = this) : (i.splice(d), o.splice(d)),
          (o[o.length] = a);
        let c = ae(i, s);
        if (c !== 0)
          return r ? e.call(this, a, s, se(o, c)) : `[ref=${se(o, c)}]`;
      } else (i[0] = s), (o[0] = a);
    return n ? t.call(this, a, s) : s;
  };
}
function ue(t, e, n, r) {
  return JSON.stringify(
    t,
    Ne((i, o) => {
      let u = o;
      return (
        typeof u == "bigint" && (u = { __type: "bigint", value: o.toString() }),
        u instanceof Map &&
          (u = { __type: "Map", value: Array.from(o.entries()) }),
        e?.(i, u) ?? u
      );
    }, r),
    n ?? void 0
  );
}
function le(t) {
  let {
    deserialize: e = ie,
    key: n = "wagmi",
    serialize: r = ue,
    storage: i = de,
  } = t;
  function o(a) {
    return a instanceof Promise ? a.then((s) => s).catch(() => null) : a;
  }
  return C(h({}, i), {
    key: n,
    getItem(a, s) {
      return m(this, null, function* () {
        let d = i.getItem(`${n}.${a}`),
          c = yield o(d);
        return c ? e(c) ?? null : s ?? null;
      });
    },
    setItem(a, s) {
      return m(this, null, function* () {
        let d = `${n}.${a}`;
        s === null ? yield o(i.removeItem(d)) : yield o(i.setItem(d, r(s)));
      });
    },
    removeItem(a) {
      return m(this, null, function* () {
        yield o(i.removeItem(`${n}.${a}`));
      });
    },
  });
}
var de = { getItem: () => null, setItem: () => {}, removeItem: () => {} };
function fe() {
  let t = typeof window < "u" && window.localStorage ? window.localStorage : de;
  return {
    getItem(e) {
      return t.getItem(e);
    },
    removeItem(e) {
      t.removeItem(e);
    },
    setItem(e, n) {
      try {
        t.setItem(e, n);
      } catch {}
    },
  };
}
var lt = 256,
  dt;
function he(t = 11) {
  if (!dt || lt + t > 256 * 2) {
    (dt = ""), (lt = 0);
    for (let e = 0; e < 256; e++)
      dt += ((256 + Math.random() * 256) | 0).toString(16).substring(1);
  }
  return dt.substring(lt, lt++ + t);
}
function Re(t) {
  let k = t,
    {
      multiInjectedProviderDiscovery: e = !0,
      storage: n = le({ storage: fe() }),
      syncConnectedChain: r = !0,
      ssr: i = !1,
    } = k,
    o = I(k, [
      "multiInjectedProviderDiscovery",
      "storage",
      "syncConnectedChain",
      "ssr",
    ]),
    u = typeof window < "u" && e ? Lt() : void 0,
    a = ut(() => o.chains),
    s = ut(() => {
      let f = [],
        w = new Set();
      for (let p of o.connectors ?? []) {
        let A = d(p);
        if ((f.push(A), !i && A.rdns)) {
          let _ = typeof A.rdns == "string" ? [A.rdns] : A.rdns;
          for (let D of _) w.add(D);
        }
      }
      if (!i && u) {
        let p = u.getProviders();
        for (let A of p) w.has(A.info.rdns) || f.push(d(c(A)));
      }
      return f;
    });
  function d(f) {
    let w = ce(he()),
      p = C(
        h(
          {},
          f({
            emitter: w,
            chains: a.getState(),
            storage: n,
            transports: o.transports,
          })
        ),
        { emitter: w, uid: w.uid }
      );
    return w.on("connect", P), p.setup?.(), p;
  }
  function c(f) {
    let { info: w } = f,
      p = f.provider;
    return Y({ target: C(h({}, w), { id: w.rdns, provider: p }) });
  }
  let l = new Map();
  function y(f = {}) {
    let w = f.chainId ?? x.getState().chainId,
      p = a.getState().find((_) => _.id === w);
    if (f.chainId && !p) throw new N();
    {
      let _ = l.get(x.getState().chainId);
      if (_ && !p) return _;
      if (!p) throw new N();
    }
    {
      let _ = l.get(w);
      if (_) return _;
    }
    let A;
    if (o.client) A = o.client({ chain: p });
    else {
      let _ = p.id,
        D = a.getState().map((R) => R.id),
        B = {},
        ft = Object.entries(o);
      for (let [R, W] of ft)
        if (
          !(
            R === "chains" ||
            R === "client" ||
            R === "connectors" ||
            R === "transports"
          )
        )
          if (typeof W == "object")
            if (_ in W) B[R] = W[_];
            else {
              if (D.some((me) => me in W)) continue;
              B[R] = W;
            }
          else B[R] = W;
      A = ct(
        C(h({}, B), {
          chain: p,
          batch: B.batch ?? { multicall: !0 },
          transport: (R) => o.transports[_](C(h({}, R), { connectors: s })),
        })
      );
    }
    return l.set(w, A), A;
  }
  function g() {
    return {
      chainId: a.getState()[0].id,
      connections: new Map(),
      current: null,
      status: "disconnected",
    };
  }
  let b,
    v = "0.0.0-canary-";
  L.startsWith(v)
    ? (b = Number.parseInt(L.replace(v, "")))
    : (b = Number.parseInt(L.split(".")[0] ?? "0"));
  let x = ut(
    ne(
      n
        ? re(g, {
            migrate(f, w) {
              if (w === b) return f;
              let p = g(),
                A = T(f, p.chainId);
              return C(h({}, p), { chainId: A });
            },
            name: "store",
            partialize(f) {
              return {
                connections: {
                  __type: "Map",
                  value: Array.from(f.connections.entries()).map(([w, p]) => {
                    let { id: A, name: _, type: D, uid: B } = p.connector,
                      ft = { id: A, name: _, type: D, uid: B };
                    return [w, C(h({}, p), { connector: ft })];
                  }),
                },
                chainId: f.chainId,
                current: f.current,
              };
            },
            merge(f, w) {
              typeof f == "object" && f && "status" in f && delete f.status;
              let p = T(f, w.chainId);
              return C(h(h({}, w), f), { chainId: p });
            },
            skipHydration: i,
            storage: n,
            version: b,
          })
        : g
    )
  );
  x.setState(g());
  function T(f, w) {
    return f &&
      typeof f == "object" &&
      "chainId" in f &&
      typeof f.chainId == "number" &&
      a.getState().some((p) => p.id === f.chainId)
      ? f.chainId
      : w;
  }
  r &&
    x.subscribe(
      ({ connections: f, current: w }) => (w ? f.get(w)?.chainId : void 0),
      (f) => {
        if (a.getState().some((p) => p.id === f))
          return x.setState((p) => C(h({}, p), { chainId: f ?? p.chainId }));
      }
    ),
    u?.subscribe((f) => {
      let w = new Set(),
        p = new Set();
      for (let _ of s.getState())
        if ((w.add(_.id), _.rdns)) {
          let D = typeof _.rdns == "string" ? [_.rdns] : _.rdns;
          for (let B of D) p.add(B);
        }
      let A = [];
      for (let _ of f) {
        if (p.has(_.info.rdns)) continue;
        let D = d(c(_));
        w.has(D.id) || A.push(D);
      }
      (n && !x.persist.hasHydrated()) || s.setState((_) => [..._, ...A], !0);
    });
  function S(f) {
    x.setState((w) => {
      let p = w.connections.get(f.uid);
      return p
        ? C(h({}, w), {
            connections: new Map(w.connections).set(f.uid, {
              accounts: f.accounts ?? p.accounts,
              chainId: f.chainId ?? p.chainId,
              connector: p.connector,
            }),
          })
        : w;
    });
  }
  function P(f) {
    x.getState().status === "connecting" ||
      x.getState().status === "reconnecting" ||
      x.setState((w) => {
        let p = s.getState().find((A) => A.uid === f.uid);
        return p
          ? (p.emitter.listenerCount("connect") && p.emitter.off("connect", S),
            p.emitter.listenerCount("change") || p.emitter.on("change", S),
            p.emitter.listenerCount("disconnect") ||
              p.emitter.on("disconnect", O),
            C(h({}, w), {
              connections: new Map(w.connections).set(f.uid, {
                accounts: f.accounts,
                chainId: f.chainId,
                connector: p,
              }),
              current: f.uid,
              status: "connected",
            }))
          : w;
      });
  }
  function O(f) {
    x.setState((w) => {
      let p = w.connections.get(f.uid);
      if (p) {
        let _ = p.connector;
        _.emitter.listenerCount("change") &&
          p.connector.emitter.off("change", S),
          _.emitter.listenerCount("disconnect") &&
            p.connector.emitter.off("disconnect", O),
          _.emitter.listenerCount("connect") ||
            p.connector.emitter.on("connect", P);
      }
      if ((w.connections.delete(f.uid), w.connections.size === 0))
        return C(h({}, w), {
          connections: new Map(),
          current: null,
          status: "disconnected",
        });
      let A = w.connections.values().next().value;
      return C(h({}, w), {
        connections: new Map(w.connections),
        current: A.connector.uid,
      });
    });
  }
  return {
    get chains() {
      return a.getState();
    },
    get connectors() {
      return s.getState();
    },
    storage: n,
    getClient: y,
    get state() {
      return x.getState();
    },
    setState(f) {
      let w;
      typeof f == "function" ? (w = f(x.getState())) : (w = f);
      let p = g();
      typeof w != "object" && (w = p),
        Object.keys(p).some((_) => !(_ in w)) && (w = p),
        x.setState(w, !0);
    },
    subscribe(f, w, p) {
      return x.subscribe(
        f,
        w,
        p ? C(h({}, p), { fireImmediately: p.emitImmediately }) : void 0
      );
    },
    _internal: {
      mipd: u,
      store: x,
      ssr: !!i,
      syncConnectedChain: r,
      transports: o.transports,
      chains: {
        setState(f) {
          let w = typeof f == "function" ? f(a.getState()) : f;
          if (w.length !== 0) return a.setState(w, !0);
        },
        subscribe(f) {
          return a.subscribe(f);
        },
      },
      connectors: {
        providerDetailToConnector: c,
        setup: d,
        setState(f) {
          return s.setState(typeof f == "function" ? f(s.getState()) : f, !0);
        },
        subscribe(f) {
          return s.subscribe(f);
        },
      },
      events: { change: S, connect: P, disconnect: O },
    },
  };
}
function Fe(t, e) {
  return Ht(t, e);
}
function De(t) {
  let { chain: e } = t,
    n = e.rpcUrls.default.http[0];
  if (!t.transports) return [n];
  let r = t.transports?.[e.id]?.({ chain: e });
  return (r?.value?.transports || [r]).map(({ value: o }) => o?.url || n);
}
export {
  N as a,
  we as b,
  ye as c,
  Ce as d,
  tt as e,
  wt as f,
  Yt as g,
  ve as h,
  yt as i,
  be as j,
  xe as k,
  Ie as l,
  Se as m,
  _e as n,
  q as o,
  te as p,
  Ee as q,
  Ae as r,
  Pe as s,
  Te as t,
  ee as u,
  ke as v,
  Y as w,
  pt as x,
  Re as y,
  Fe as z,
  De as A,
};
