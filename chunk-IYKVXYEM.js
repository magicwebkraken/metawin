import { a as ia } from "./chunk-CP2O2YAF.js";
import {
  C as sa,
  D as Rr,
  F as nt,
  G as St,
  a as Br,
  e as xs,
  g as kr,
  i as ys,
  j as gs,
  l as bs,
  m as ws,
  o as Sr,
  p as Es,
  q as ft,
  r as oa,
  s as na,
  t as vs,
  u as Ts,
  v as As,
  x as Is,
  z as Te,
} from "./chunk-ZRBE6OMV.js";
import {
  $ as jo,
  A as Ki,
  B as Ji,
  C as Ct,
  D as Zi,
  E as Yi,
  F as Qi,
  G as W,
  H as Ge,
  I as Mo,
  J as ct,
  K as Y,
  L as je,
  M as we,
  N as Ee,
  O as V,
  P as et,
  Q as ds,
  R as Xi,
  S as Pr,
  T as ta,
  U as ea,
  V as ls,
  X as $o,
  Y as Oo,
  Z as Cr,
  _ as Go,
  a as pr,
  aa as Vo,
  b as uo,
  ba as rt,
  c as Li,
  d as Wn,
  e as Kn,
  f as Jn,
  g as dr,
  ga as Xt,
  m as ht,
  o as j,
  s as Ue,
  t as L,
  u as Do,
  v as ji,
  w as Ar,
  x as Vi,
  y as Ir,
  z as Wi,
} from "./chunk-5LQ6A2AX.js";
import {
  $ as ot,
  $b as ko,
  Aa as Kt,
  Ab as Eo,
  Ac as Ve,
  Ba as Oi,
  Bb as us,
  Bc as ra,
  Ca as go,
  Cc as Bt,
  D as ts,
  Db as ms,
  E as pe,
  Eb as vr,
  Fb as ze,
  Fc as ut,
  Gb as fs,
  I as Gt,
  Ib as he,
  J as xr,
  Jb as Yt,
  Kb as vo,
  Lb as xe,
  Mb as ye,
  Nb as Le,
  O as es,
  Q as de,
  Qb as To,
  Rb as Ao,
  S as q,
  Sa as bo,
  Sb as Io,
  T as lo,
  Tb as Po,
  U as M,
  Ua as wo,
  Ub as ge,
  Vb as Qt,
  W as X,
  Wb as Co,
  X as ho,
  Xa as Jt,
  Xb as Bo,
  Y as Z,
  Yb as De,
  Z as T,
  Za as br,
  Zb as Me,
  _ as Et,
  _b as Tr,
  a as mo,
  ac as be,
  b as H,
  ba as tt,
  bc as So,
  c as yt,
  cc as Ro,
  da as _t,
  db as vt,
  dc as No,
  e as N,
  ea as $,
  eb as D,
  ec as Fo,
  f as Zn,
  fa as jt,
  fc as Ho,
  g as fo,
  ga as qt,
  gc as $e,
  ha as yr,
  hb as O,
  hc as _o,
  i as Yn,
  ia as Q,
  ib as os,
  ic as qo,
  j as fe,
  ja as Mi,
  jb as ns,
  jc as zo,
  ka as gr,
  kc as Uo,
  la as rs,
  lc as Lo,
  m as Qn,
  mb as ss,
  mc as Oe,
  na as Vt,
  nb as Zt,
  nc as ps,
  oc as hs,
  q as Xn,
  qb as Gi,
  r as lr,
  s as po,
  sb as is,
  ta as pt,
  ub as as,
  va as Pt,
  vb as le,
  ve as mt,
  w as hr,
  wa as $i,
  x as It,
  xa as xo,
  xb as cs,
  y as Ht,
  ya as yo,
  yb as wr,
  za as Wt,
  zb as Er,
  zc as ve,
} from "./chunk-5G3DVQVW.js";
import { a as Di, b as qu } from "./chunk-HINDXNTT.js";
import { a as kt } from "./chunk-X3F4NDXO.js";
import { a as x, b as C, f as _, i as Ui, n as u } from "./chunk-VNDKUXGB.js";
function v(t, e, r) {
  let o = t[e.name];
  if (typeof o == "function") return o;
  let n = t[r];
  return typeof n == "function" ? n : (s) => e(t, s);
}
var Nr = class extends N {
  constructor(e) {
    super(`Filter type "${e}" is not supported.`, {
      name: "FilterTypeNotSupportedError",
    });
  }
};
var aa = "/docs/contract/encodeEventTopics";
function Tt(t) {
  let { abi: e, eventName: r, args: o } = t,
    n = e[0];
  if (r) {
    let c = br({ abi: e, name: r });
    if (!c) throw new po(r, { docsPath: aa });
    n = c;
  }
  if (n.type !== "event") throw new po(void 0, { docsPath: aa });
  let s = mo(n),
    i = Jt(s),
    a = [];
  if (o && "inputs" in n) {
    let c = n.inputs?.filter((d) => "indexed" in d && d.indexed),
      m = Array.isArray(o)
        ? o
        : Object.values(o).length > 0
        ? c?.map((d) => o[d.name]) ?? []
        : [];
    m.length > 0 &&
      (a =
        c?.map((d, f) =>
          Array.isArray(m[f])
            ? m[f].map((p, l) => ca({ param: d, value: m[f][l] }))
            : typeof m[f] < "u" && m[f] !== null
            ? ca({ param: d, value: m[f] })
            : null
        ) ?? []);
  }
  return [i, ...a];
}
function ca({ param: t, value: e }) {
  if (t.type === "string" || t.type === "bytes") return $(ot(e));
  if (t.type === "tuple" || t.type.match(/^(.*)\[(\d+)?\]$/))
    throw new Nr(t.type);
  return Wt([t], [e]);
}
function te(t, { method: e }) {
  let r = {};
  return (
    t.transport.type === "fallback" &&
      t.transport.onResponse?.(
        ({ method: o, response: n, status: s, transport: i }) => {
          s === "success" && e === o && (r[n] = i.request);
        }
      ),
    (o) => r[o] || t.request
  );
}
function We(t, e) {
  return u(this, null, function* () {
    let {
        address: r,
        abi: o,
        args: n,
        eventName: s,
        fromBlock: i,
        strict: a,
        toBlock: c,
      } = e,
      m = te(t, { method: "eth_newFilter" }),
      d = s ? Tt({ abi: o, args: n, eventName: s }) : void 0,
      f = yield t.request({
        method: "eth_newFilter",
        params: [
          {
            address: r,
            fromBlock: typeof i == "bigint" ? T(i) : i,
            toBlock: typeof c == "bigint" ? T(c) : c,
            topics: d,
          },
        ],
      });
    return {
      abi: o,
      args: n,
      eventName: s,
      id: f,
      request: m(f),
      strict: !!a,
      type: "event",
    };
  });
}
var zu = 3;
function dt(
  t,
  { abi: e, address: r, args: o, docsPath: n, functionName: s, sender: i }
) {
  let a =
      t instanceof he
        ? t
        : t instanceof N
        ? t.walk((h) => "data" in h) || t.walk()
        : {},
    { code: c, data: m, details: d, message: f, shortMessage: p } = a,
    l =
      t instanceof fe
        ? new fs({ functionName: s })
        : [zu, ge.code].includes(c) && (m || d || f || p)
        ? new ze({
            abi: e,
            data: typeof m == "object" ? m.data : m,
            functionName: s,
            message: a instanceof xe ? d : p ?? f,
          })
        : t;
  return new vr(l, {
    abi: e,
    args: o,
    contractAddress: r,
    docsPath: n,
    functionName: s,
    sender: i,
  });
}
function ua(t) {
  let e = $(`0x${t.substring(4)}`).substring(26);
  return yr(`0x${e}`);
}
function Ps(r) {
  return u(this, arguments, function* ({ hash: t, signature: e }) {
    let o = H(t) ? t : X(t),
      { secp256k1: n } = yield import("./chunk-DCXHDXGP.js");
    return `0x${(() => {
      if (typeof e == "object" && "r" in e && "s" in e) {
        let { r: d, s: f, v: p, yParity: l } = e,
          h = Number(l ?? p),
          y = ma(h);
        return new n.Signature(q(d), q(f)).addRecoveryBit(y);
      }
      let a = H(e) ? e : X(e);
      if (yt(a) !== 65) throw new Error("invalid signature length");
      let c = M(`0x${a.slice(130)}`),
        m = ma(c);
      return n.Signature.fromCompact(a.substring(2, 130)).addRecoveryBit(m);
    })()
      .recoverPublicKey(o.substring(2))
      .toHex(!1)}`;
  });
}
function ma(t) {
  if (t === 0 || t === 1) return t;
  if (t === 27) return 0;
  if (t === 28) return 1;
  throw new Error("Invalid yParityOrV value");
}
function xt(r) {
  return u(this, arguments, function* ({ hash: t, signature: e }) {
    return ua(yield Ps({ hash: t, signature: e }));
  });
}
function fa(t) {
  let { chainId: e, nonce: r, to: o } = t,
    n = t.contractAddress ?? t.address,
    s = $(Pt(["0x05", Br([e ? T(e) : "0x", n, r ? T(r) : "0x"])]));
  return o === "bytes" ? tt(s) : s;
}
function ee(t) {
  return u(this, null, function* () {
    let { authorization: e, signature: r } = t;
    return xt({ hash: fa(e), signature: r ?? e });
  });
}
var Fr = class extends N {
  constructor(
    e,
    {
      account: r,
      docsPath: o,
      chain: n,
      data: s,
      gas: i,
      gasPrice: a,
      maxFeePerGas: c,
      maxPriorityFeePerGas: m,
      nonce: d,
      to: f,
      value: p,
    }
  ) {
    let l = Gi({
      from: r?.address,
      to: f,
      value: typeof p < "u" && `${ss(p)} ${n?.nativeCurrency?.symbol || "ETH"}`,
      data: s,
      gas: i,
      gasPrice: typeof a < "u" && `${Zt(a)} gwei`,
      maxFeePerGas: typeof c < "u" && `${Zt(c)} gwei`,
      maxPriorityFeePerGas: typeof m < "u" && `${Zt(m)} gwei`,
      nonce: d,
    });
    super(e.shortMessage, {
      cause: e,
      docsPath: o,
      metaMessages: [
        ...(e.metaMessages ? [...e.metaMessages, " "] : []),
        "Estimate Gas Arguments:",
        l,
      ].filter(Boolean),
      name: "EstimateGasExecutionError",
    }),
      Object.defineProperty(this, "cause", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      (this.cause = e);
  }
};
function pa(t, o) {
  var n = o,
    { docsPath: e } = n,
    r = _(n, ["docsPath"]);
  let s = (() => {
    let i = Ve(t, r);
    return i instanceof ve ? t : i;
  })();
  return new Fr(s, x({ docsPath: e }, r));
}
var Hr = class extends N {
    constructor() {
      super("`baseFeeMultiplier` must be greater than 1.", {
        name: "BaseFeeScalarError",
      });
    }
  },
  zt = class extends N {
    constructor() {
      super("Chain does not support EIP-1559 fees.", {
        name: "Eip1559FeesNotSupportedError",
      });
    }
  },
  _r = class extends N {
    constructor({ maxPriorityFeePerGas: e }) {
      super(
        `\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${Zt(
          e
        )} gwei).`,
        { name: "MaxFeePerGasTooLowError" }
      );
    }
  };
var Ae = class extends N {
  constructor({ blockHash: e, blockNumber: r }) {
    let o = "Block";
    e && (o = `Block at hash "${e}"`),
      r && (o = `Block at number "${r}"`),
      super(`${o} could not be found.`, { name: "BlockNotFoundError" });
  }
};
function st(s) {
  return u(
    this,
    arguments,
    function* (
      t,
      {
        blockHash: e,
        blockNumber: r,
        blockTag: o = t.experimental_blockTag ?? "latest",
        includeTransactions: n,
      } = {}
    ) {
      let i = n ?? !1,
        a = r !== void 0 ? T(r) : void 0,
        c = null;
      if (
        (e
          ? (c = yield t.request(
              { method: "eth_getBlockByHash", params: [e, i] },
              { dedupe: !0 }
            ))
          : (c = yield t.request(
              { method: "eth_getBlockByNumber", params: [a || o, i] },
              { dedupe: !!a }
            )),
        !c)
      )
        throw new Ae({ blockHash: e, blockNumber: r });
      return (t.chain?.formatters?.block?.format || kr)(c, "getBlock");
    }
  );
}
function Ke(t) {
  return u(this, null, function* () {
    let e = yield t.request({ method: "eth_gasPrice" });
    return BigInt(e);
  });
}
function da(t, e) {
  return u(this, null, function* () {
    return Cs(t, e);
  });
}
function Cs(t, e) {
  return u(this, null, function* () {
    let { block: r, chain: o = t.chain, request: n } = e || {};
    try {
      let s = o?.fees?.maxPriorityFeePerGas ?? o?.fees?.defaultPriorityFee;
      if (typeof s == "function") {
        let a = r || (yield v(t, st, "getBlock")({})),
          c = yield s({ block: a, client: t, request: n });
        if (c === null) throw new Error();
        return c;
      }
      if (typeof s < "u") return s;
      let i = yield t.request({ method: "eth_maxPriorityFeePerGas" });
      return q(i);
    } catch {
      let [s, i] = yield Promise.all([
        r ? Promise.resolve(r) : v(t, st, "getBlock")({}),
        v(t, Ke, "getGasPrice")({}),
      ]);
      if (typeof s.baseFeePerGas != "bigint") throw new zt();
      let a = i - s.baseFeePerGas;
      return a < 0n ? 0n : a;
    }
  });
}
function la(t, e) {
  return u(this, null, function* () {
    return Wo(t, e);
  });
}
function Wo(t, e) {
  return u(this, null, function* () {
    let {
        block: r,
        chain: o = t.chain,
        request: n,
        type: s = "eip1559",
      } = e || {},
      i = yield u(this, null, function* () {
        return typeof o?.fees?.baseFeeMultiplier == "function"
          ? o.fees.baseFeeMultiplier({ block: r, client: t, request: n })
          : o?.fees?.baseFeeMultiplier ?? 1.2;
      });
    if (i < 1) throw new Hr();
    let c = 10 ** (i.toString().split(".")[1]?.length ?? 0),
      m = (p) => (p * BigInt(Math.ceil(i * c))) / BigInt(c),
      d = r || (yield v(t, st, "getBlock")({}));
    if (typeof o?.fees?.estimateFeesPerGas == "function") {
      let p = yield o.fees.estimateFeesPerGas({
        block: r,
        client: t,
        multiply: m,
        request: n,
        type: s,
      });
      if (p !== null) return p;
    }
    if (s === "eip1559") {
      if (typeof d.baseFeePerGas != "bigint") throw new zt();
      let p =
          typeof n?.maxPriorityFeePerGas == "bigint"
            ? n.maxPriorityFeePerGas
            : yield Cs(t, { block: d, chain: o, request: n }),
        l = m(d.baseFeePerGas);
      return {
        maxFeePerGas: n?.maxFeePerGas ?? l + p,
        maxPriorityFeePerGas: p,
      };
    }
    return { gasPrice: n?.gasPrice ?? m(yield v(t, Ke, "getGasPrice")({})) };
  });
}
function re(n, s) {
  return u(
    this,
    arguments,
    function* (t, { address: e, blockTag: r = "latest", blockNumber: o }) {
      let i = yield t.request(
        {
          method: "eth_getTransactionCount",
          params: [e, typeof o == "bigint" ? T(o) : r],
        },
        { dedupe: !!o }
      );
      return M(i);
    }
  );
}
function lt(t) {
  return u(this, null, function* () {
    let e = yield t.request({ method: "eth_chainId" }, { dedupe: !0 });
    return M(e);
  });
}
var qr = ["blobVersionedHashes", "chainId", "fees", "gas", "nonce", "type"],
  ha = new Map();
function Rt(t, e) {
  return u(this, null, function* () {
    let {
        account: r = t.account,
        blobs: o,
        chain: n,
        gas: s,
        kzg: i,
        nonce: a,
        nonceManager: c,
        parameters: m = qr,
        type: d,
      } = e,
      f = r && D(r),
      p = x(x({}, e), f ? { from: f?.address } : {}),
      l;
    function h() {
      return u(this, null, function* () {
        return (
          l || ((l = yield v(t, st, "getBlock")({ blockTag: "latest" })), l)
        );
      });
    }
    let y;
    function g() {
      return u(this, null, function* () {
        return (
          y ||
          (n
            ? n.id
            : typeof e.chainId < "u"
            ? e.chainId
            : ((y = yield v(t, lt, "getChainId")({})), y))
        );
      });
    }
    if (m.includes("nonce") && typeof a > "u" && f)
      if (c) {
        let b = yield g();
        p.nonce = yield c.consume({
          address: f.address,
          chainId: b,
          client: t,
        });
      } else
        p.nonce = yield v(
          t,
          re,
          "getTransactionCount"
        )({ address: f.address, blockTag: "pending" });
    if (
      (m.includes("blobVersionedHashes") || m.includes("sidecars")) &&
      o &&
      i
    ) {
      let b = ys({ blobs: o, kzg: i });
      if (m.includes("blobVersionedHashes")) {
        let w = ws({ commitments: b, to: "hex" });
        p.blobVersionedHashes = w;
      }
      if (m.includes("sidecars")) {
        let w = gs({ blobs: o, commitments: b, kzg: i }),
          E = Sr({ blobs: o, commitments: b, proofs: w, to: "hex" });
        p.sidecars = E;
      }
    }
    if (
      (m.includes("chainId") && (p.chainId = yield g()),
      (m.includes("fees") || m.includes("type")) && typeof d > "u")
    )
      try {
        p.type = Es(p);
      } catch {
        let b = ha.get(t.uid);
        typeof b > "u" &&
          ((b = typeof (yield h())?.baseFeePerGas == "bigint"),
          ha.set(t.uid, b)),
          (p.type = b ? "eip1559" : "legacy");
      }
    if (m.includes("fees"))
      if (p.type !== "legacy" && p.type !== "eip2930") {
        if (
          typeof p.maxFeePerGas > "u" ||
          typeof p.maxPriorityFeePerGas > "u"
        ) {
          let b = yield h(),
            { maxFeePerGas: w, maxPriorityFeePerGas: E } = yield Wo(t, {
              block: b,
              chain: n,
              request: p,
            });
          if (
            typeof e.maxPriorityFeePerGas > "u" &&
            e.maxFeePerGas &&
            e.maxFeePerGas < E
          )
            throw new _r({ maxPriorityFeePerGas: E });
          (p.maxPriorityFeePerGas = E), (p.maxFeePerGas = w);
        }
      } else {
        if (typeof e.maxFeePerGas < "u" || typeof e.maxPriorityFeePerGas < "u")
          throw new zt();
        if (typeof e.gasPrice > "u") {
          let b = yield h(),
            { gasPrice: w } = yield Wo(t, {
              block: b,
              chain: n,
              request: p,
              type: "legacy",
            });
          p.gasPrice = w;
        }
      }
    return (
      m.includes("gas") &&
        typeof s > "u" &&
        (p.gas = yield v(
          t,
          Je,
          "estimateGas"
        )(
          C(x({}, p), {
            account: f && { address: f.address, type: "json-rpc" },
          })
        )),
      mt(p),
      delete p.parameters,
      p
    );
  });
}
function Je(t, e) {
  return u(this, null, function* () {
    let { account: r = t.account } = e,
      o = r ? D(r) : void 0;
    try {
      let n = yield Rt(
          t,
          C(x({}, e), {
            parameters: o?.type === "local" ? void 0 : ["blobVersionedHashes"],
          })
        ),
        {
          accessList: s,
          authorizationList: i,
          blobs: a,
          blobVersionedHashes: c,
          blockNumber: m,
          blockTag: d,
          data: f,
          gas: p,
          gasPrice: l,
          maxFeePerBlobGas: h,
          maxFeePerGas: y,
          maxPriorityFeePerGas: g,
          nonce: b,
          value: w,
          stateOverride: E,
        } = n,
        A = _(n, [
          "accessList",
          "authorizationList",
          "blobs",
          "blobVersionedHashes",
          "blockNumber",
          "blockTag",
          "data",
          "gas",
          "gasPrice",
          "maxFeePerBlobGas",
          "maxFeePerGas",
          "maxPriorityFeePerGas",
          "nonce",
          "value",
          "stateOverride",
        ]),
        P = (typeof m == "bigint" ? T(m) : void 0) || d,
        I = Vo(E),
        k = yield u(this, null, function* () {
          if (A.to) return A.to;
          if (i && i.length > 0)
            return yield ee({ authorization: i[0] }).catch(() => {
              throw new N(
                "`to` is required. Could not infer from `authorizationList`"
              );
            });
        });
      mt(e);
      let S = t.chain?.formatters?.transactionRequest?.format,
        z = (S || ut)(
          C(x({}, Bt(A, { format: S })), {
            from: o?.address,
            accessList: s,
            authorizationList: i,
            blobs: a,
            blobVersionedHashes: c,
            data: f,
            gas: p,
            gasPrice: l,
            maxFeePerBlobGas: h,
            maxFeePerGas: y,
            maxPriorityFeePerGas: g,
            nonce: b,
            to: k,
            value: w,
          }),
          "estimateGas"
        );
      return BigInt(
        yield t.request({
          method: "eth_estimateGas",
          params: I
            ? [z, P ?? t.experimental_blockTag ?? "latest", I]
            : P
            ? [z, P]
            : [z],
        })
      );
    } catch (s) {
      throw pa(s, C(x({}, e), { account: o, chain: t.chain }));
    }
  });
}
function Ko(t, e) {
  return u(this, null, function* () {
    let m = e,
      { abi: r, address: o, args: n, functionName: s, dataSuffix: i } = m,
      a = _(m, ["abi", "address", "args", "functionName", "dataSuffix"]),
      c = j({ abi: r, args: n, functionName: s });
    try {
      return yield v(
        t,
        Je,
        "estimateGas"
      )(x({ data: `${c}${i ? i.replace("0x", "") : ""}`, to: o }, a));
    } catch (d) {
      let f = a.account ? D(a.account) : void 0;
      throw dt(d, {
        abi: r,
        address: o,
        args: n,
        docsPath: "/docs/contract/estimateContractGas",
        functionName: s,
        sender: f?.address,
      });
    }
  });
}
var xa = "/docs/contract/decodeEventLog";
function Ie(t) {
  let { abi: e, data: r, strict: o, topics: n } = t,
    s = o ?? !0,
    [i, ...a] = n;
  if (!i) throw new Xn({ docsPath: xa });
  let c = e.find((y) => y.type === "event" && i === Jt(mo(y)));
  if (!(c && "name" in c) || c.type !== "event")
    throw new lr(i, { docsPath: xa });
  let { name: m, inputs: d } = c,
    f = d?.some((y) => !("name" in y && y.name)),
    p = f ? [] : {},
    l = d.map((y, g) => [y, g]).filter(([y]) => "indexed" in y && y.indexed);
  for (let y = 0; y < l.length; y++) {
    let [g, b] = l[y],
      w = a[y];
    if (!w) throw new Ht({ abiItem: c, param: g });
    p[f ? b : g.name || b] = Uu({ param: g, value: w });
  }
  let h = d.filter((y) => !("indexed" in y && y.indexed));
  if (h.length > 0) {
    if (r && r !== "0x")
      try {
        let y = Kt(h, r);
        if (y)
          if (f) for (let g = 0; g < d.length; g++) p[g] = p[g] ?? y.shift();
          else for (let g = 0; g < h.length; g++) p[h[g].name] = y[g];
      } catch (y) {
        if (s)
          throw y instanceof Yn || y instanceof Mi
            ? new It({ abiItem: c, data: r, params: h, size: yt(r) })
            : y;
      }
    else if (s) throw new It({ abiItem: c, data: "0x", params: h, size: 0 });
  }
  return { eventName: m, args: Object.values(p).length > 0 ? p : void 0 };
}
function Uu({ param: t, value: e }) {
  return t.type === "string" ||
    t.type === "bytes" ||
    t.type === "tuple" ||
    t.type.match(/^(.*)\[(\d+)?\]$/)
    ? e
    : (Kt([t], e) || [])[0];
}
function Pe(t) {
  let { abi: e, args: r, logs: o, strict: n = !0 } = t,
    s = (() => {
      if (t.eventName)
        return Array.isArray(t.eventName) ? t.eventName : [t.eventName];
    })();
  return o
    .map((i) => {
      try {
        let a = e.find((m) => m.type === "event" && i.topics[0] === Jt(m));
        if (!a) return null;
        let c = Ie(C(x({}, i), { abi: [a], strict: n }));
        return (s && !s.includes(c.eventName)) ||
          !Lu({ args: c.args, inputs: a.inputs, matchArgs: r })
          ? null
          : x(x({}, c), i);
      } catch (a) {
        let c, m;
        if (a instanceof lr) return null;
        if (a instanceof It || a instanceof Ht) {
          if (n) return null;
          (c = a.abiItem.name),
            (m = a.abiItem.inputs?.some((d) => !("name" in d && d.name)));
        }
        return C(x({}, i), { args: m ? [] : {}, eventName: c });
      }
    })
    .filter(Boolean);
}
function Lu(t) {
  let { args: e, inputs: r, matchArgs: o } = t;
  if (!o) return !0;
  if (!e) return !1;
  function n(s, i, a) {
    try {
      return s.type === "address"
        ? rt(i, a)
        : s.type === "string" || s.type === "bytes"
        ? $(ot(i)) === a
        : i === a;
    } catch {
      return !1;
    }
  }
  return Array.isArray(e) && Array.isArray(o)
    ? o.every((s, i) => {
        if (s == null) return !0;
        let a = r[i];
        return a ? (Array.isArray(s) ? s : [s]).some((m) => n(a, m, e[i])) : !1;
      })
    : typeof e == "object" &&
      !Array.isArray(e) &&
      typeof o == "object" &&
      !Array.isArray(o)
    ? Object.entries(o).every(([s, i]) => {
        if (i == null) return !0;
        let a = r.find((m) => m.name === s);
        return a ? (Array.isArray(i) ? i : [i]).some((m) => n(a, m, e[s])) : !1;
      })
    : !1;
}
function Ze(m) {
  return u(
    this,
    arguments,
    function* (
      t,
      {
        address: e,
        blockHash: r,
        fromBlock: o,
        toBlock: n,
        event: s,
        events: i,
        args: a,
        strict: c,
      } = {}
    ) {
      let d = c ?? !1,
        f = i ?? (s ? [s] : void 0),
        p = [];
      f &&
        ((p = [
          f.flatMap((g) =>
            Tt({ abi: [g], eventName: g.name, args: i ? void 0 : a })
          ),
        ]),
        s && (p = p[0]));
      let l;
      r
        ? (l = yield t.request({
            method: "eth_getLogs",
            params: [{ address: e, topics: p, blockHash: r }],
          }))
        : (l = yield t.request({
            method: "eth_getLogs",
            params: [
              {
                address: e,
                topics: p,
                fromBlock: typeof o == "bigint" ? T(o) : o,
                toBlock: typeof n == "bigint" ? T(n) : n,
              },
            ],
          }));
      let h = l.map((y) => ft(y));
      return f ? Pe({ abi: f, args: a, logs: h, strict: d }) : h;
    }
  );
}
function Ye(t, e) {
  return u(this, null, function* () {
    let {
        abi: r,
        address: o,
        args: n,
        blockHash: s,
        eventName: i,
        fromBlock: a,
        toBlock: c,
        strict: m,
      } = e,
      d = i ? br({ abi: r, name: i }) : void 0,
      f = d ? void 0 : r.filter((p) => p.type === "event");
    return v(
      t,
      Ze,
      "getLogs"
    )({
      address: o,
      args: n,
      blockHash: s,
      event: d,
      events: f,
      fromBlock: a,
      toBlock: c,
      strict: m,
    });
  });
}
function K(t, e) {
  return u(this, null, function* () {
    let c = e,
      { abi: r, address: o, args: n, functionName: s } = c,
      i = _(c, ["abi", "address", "args", "functionName"]),
      a = j({ abi: r, args: n, functionName: s });
    try {
      let { data: m } = yield v(t, Xt, "call")(C(x({}, i), { data: a, to: o }));
      return ht({ abi: r, args: n, functionName: s, data: m || "0x" });
    } catch (m) {
      throw dt(m, {
        abi: r,
        address: o,
        args: n,
        docsPath: "/docs/contract/readContract",
        functionName: s,
      });
    }
  });
}
function Jo(t, e) {
  return u(this, null, function* () {
    let d = e,
      { abi: r, address: o, args: n, dataSuffix: s, functionName: i } = d,
      a = _(d, ["abi", "address", "args", "dataSuffix", "functionName"]),
      c = a.account ? D(a.account) : t.account,
      m = j({ abi: r, args: n, functionName: i });
    try {
      let { data: f } = yield v(
          t,
          Xt,
          "call"
        )(
          C(
            x(
              { batch: !1, data: `${m}${s ? s.replace("0x", "") : ""}`, to: o },
              a
            ),
            { account: c }
          )
        ),
        p = ht({ abi: r, args: n, functionName: i, data: f || "0x" }),
        l = r.filter((h) => "name" in h && h.name === e.functionName);
      return {
        result: p,
        request: C(
          x({ abi: l, address: o, args: n, dataSuffix: s, functionName: i }, a),
          { account: c }
        ),
      };
    } catch (f) {
      throw dt(f, {
        abi: r,
        address: o,
        args: n,
        docsPath: "/docs/contract/simulateContract",
        functionName: i,
        sender: c?.address,
      });
    }
  });
}
var Bs = new Map(),
  ya = new Map(),
  Du = 0;
function it(t, e, r) {
  let o = ++Du,
    n = () => Bs.get(t) || [],
    s = () => {
      let d = n();
      Bs.set(
        t,
        d.filter((f) => f.id !== o)
      );
    },
    i = () => {
      let d = n();
      if (!d.some((p) => p.id === o)) return;
      let f = ya.get(t);
      if (d.length === 1 && f) {
        let p = f();
        p instanceof Promise && p.catch(() => {});
      }
      s();
    },
    a = n();
  if ((Bs.set(t, [...a, { id: o, fns: e }]), a && a.length > 0)) return i;
  let c = {};
  for (let d in e)
    c[d] = (...f) => {
      let p = n();
      if (p.length !== 0) for (let l of p) l.fns[d]?.(...f);
    };
  let m = r(c);
  return typeof m == "function" && ya.set(t, m), i;
}
function Ce(t) {
  return u(this, null, function* () {
    return new Promise((e) => setTimeout(e, t));
  });
}
function gt(t, { emitOnBegin: e, initialWaitTime: r, interval: o }) {
  let n = !0,
    s = () => (n = !1);
  return (
    u(this, null, function* () {
      let a;
      e && (a = yield t({ unpoll: s }));
      let c = (yield r?.(a)) ?? o;
      yield Ce(c);
      let m = () =>
        u(this, null, function* () {
          n && (yield t({ unpoll: s }), yield Ce(o), m());
        });
      m();
    }),
    s
  );
}
var Mu = new Map(),
  $u = new Map();
function ga(t) {
  let e = (n, s) => ({
      clear: () => s.delete(n),
      get: () => s.get(n),
      set: (i) => s.set(n, i),
    }),
    r = e(t, Mu),
    o = e(t, $u);
  return {
    clear: () => {
      r.clear(), o.clear();
    },
    promise: r,
    response: o,
  };
}
function ks(o, n) {
  return u(
    this,
    arguments,
    function* (t, { cacheKey: e, cacheTime: r = Number.POSITIVE_INFINITY }) {
      let s = ga(e),
        i = s.response.get();
      if (i && r > 0 && Date.now() - i.created.getTime() < r) return i.data;
      let a = s.promise.get();
      a || ((a = t()), s.promise.set(a));
      try {
        let c = yield a;
        return s.response.set({ created: new Date(), data: c }), c;
      } finally {
        s.promise.clear();
      }
    }
  );
}
var Ou = (t) => `blockNumber.${t}`;
function Nt(r) {
  return u(this, arguments, function* (t, { cacheTime: e = t.cacheTime } = {}) {
    let o = yield ks(() => t.request({ method: "eth_blockNumber" }), {
      cacheKey: Ou(t.uid),
      cacheTime: e,
    });
    return BigInt(o);
  });
}
function oe(r, o) {
  return u(this, arguments, function* (t, { filter: e }) {
    let n = "strict" in e && e.strict,
      s = yield e.request({ method: "eth_getFilterChanges", params: [e.id] });
    if (typeof s[0] == "string") return s;
    let i = s.map((a) => ft(a));
    return !("abi" in e) || !e.abi ? i : Pe({ abi: e.abi, logs: i, strict: n });
  });
}
function ne(r, o) {
  return u(this, arguments, function* (t, { filter: e }) {
    return e.request({ method: "eth_uninstallFilter", params: [e.id] });
  });
}
function Zo(t, e) {
  let {
    abi: r,
    address: o,
    args: n,
    batch: s = !0,
    eventName: i,
    fromBlock: a,
    onError: c,
    onLogs: m,
    poll: d,
    pollingInterval: f = t.pollingInterval,
    strict: p,
  } = e;
  return (
    typeof d < "u"
      ? d
      : typeof a == "bigint"
      ? !0
      : !(
          t.transport.type === "webSocket" ||
          t.transport.type === "ipc" ||
          (t.transport.type === "fallback" &&
            (t.transport.transports[0].config.type === "webSocket" ||
              t.transport.transports[0].config.type === "ipc"))
        )
  )
    ? (() => {
        let g = p ?? !1,
          b = O(["watchContractEvent", o, n, s, t.uid, i, f, g, a]);
        return it(b, { onLogs: m, onError: c }, (w) => {
          let E;
          a !== void 0 && (E = a - 1n);
          let A,
            B = !1,
            P = gt(
              () =>
                u(this, null, function* () {
                  if (!B) {
                    try {
                      A = yield v(
                        t,
                        We,
                        "createContractEventFilter"
                      )({
                        abi: r,
                        address: o,
                        args: n,
                        eventName: i,
                        strict: g,
                        fromBlock: a,
                      });
                    } catch {}
                    B = !0;
                    return;
                  }
                  try {
                    let I;
                    if (A)
                      I = yield v(t, oe, "getFilterChanges")({ filter: A });
                    else {
                      let k = yield v(t, Nt, "getBlockNumber")({});
                      E && E < k
                        ? (I = yield v(
                            t,
                            Ye,
                            "getContractEvents"
                          )({
                            abi: r,
                            address: o,
                            args: n,
                            eventName: i,
                            fromBlock: E + 1n,
                            toBlock: k,
                            strict: g,
                          }))
                        : (I = []),
                        (E = k);
                    }
                    if (I.length === 0) return;
                    if (s) w.onLogs(I);
                    else for (let k of I) w.onLogs([k]);
                  } catch (I) {
                    A && I instanceof Qt && (B = !1), w.onError?.(I);
                  }
                }),
              { emitOnBegin: !0, interval: f }
            );
          return () =>
            u(this, null, function* () {
              A && (yield v(t, ne, "uninstallFilter")({ filter: A })), P();
            });
        });
      })()
    : (() => {
        let g = p ?? !1,
          b = O(["watchContractEvent", o, n, s, t.uid, i, f, g]),
          w = !0,
          E = () => (w = !1);
        return it(
          b,
          { onLogs: m, onError: c },
          (A) => (
            u(this, null, function* () {
              try {
                let B = (() => {
                    if (t.transport.type === "fallback") {
                      let k = t.transport.transports.find(
                        (S) =>
                          S.config.type === "webSocket" ||
                          S.config.type === "ipc"
                      );
                      return k ? k.value : t.transport;
                    }
                    return t.transport;
                  })(),
                  P = i ? Tt({ abi: r, eventName: i, args: n }) : [],
                  { unsubscribe: I } = yield B.subscribe({
                    params: ["logs", { address: o, topics: P }],
                    onData(k) {
                      if (!w) return;
                      let S = k.result;
                      try {
                        let { eventName: R, args: z } = Ie({
                            abi: r,
                            data: S.data,
                            topics: S.topics,
                            strict: p,
                          }),
                          F = ft(S, { args: z, eventName: R });
                        A.onLogs([F]);
                      } catch (R) {
                        let z, F;
                        if (R instanceof It || R instanceof Ht) {
                          if (p) return;
                          (z = R.abiItem.name),
                            (F = R.abiItem.inputs?.some(
                              (G) => !("name" in G && G.name)
                            ));
                        }
                        let J = ft(S, { args: F ? [] : {}, eventName: z });
                        A.onLogs([J]);
                      }
                    },
                    onError(k) {
                      A.onError?.(k);
                    },
                  });
                (E = I), w || E();
              } catch (B) {
                c?.(B);
              }
            }),
            () => E()
          )
        );
      })();
}
function Qe(t, o) {
  var n = o,
    { docsPath: e } = n,
    r = _(n, ["docsPath"]);
  let s = (() => {
    let i = Ve(t, r);
    return i instanceof ve ? t : i;
  })();
  return new cs(s, x({ docsPath: e }, r));
}
function Xe(r, o) {
  return u(this, arguments, function* (t, { serializedTransaction: e }) {
    return t.request(
      { method: "eth_sendRawTransaction", params: [e] },
      { retryCount: 0 }
    );
  });
}
var Ss = new jt(128);
function se(t, e) {
  return u(this, null, function* () {
    let w = e,
      {
        account: r = t.account,
        chain: o = t.chain,
        accessList: n,
        authorizationList: s,
        blobs: i,
        data: a,
        gas: c,
        gasPrice: m,
        maxFeePerBlobGas: d,
        maxFeePerGas: f,
        maxPriorityFeePerGas: p,
        nonce: l,
        type: h,
        value: y,
      } = w,
      g = _(w, [
        "account",
        "chain",
        "accessList",
        "authorizationList",
        "blobs",
        "data",
        "gas",
        "gasPrice",
        "maxFeePerBlobGas",
        "maxFeePerGas",
        "maxPriorityFeePerGas",
        "nonce",
        "type",
        "value",
      ]);
    if (typeof r > "u")
      throw new nt({ docsPath: "/docs/actions/wallet/sendTransaction" });
    let b = r ? D(r) : null;
    try {
      mt(e);
      let E = yield u(this, null, function* () {
        if (e.to) return e.to;
        if (e.to !== null && s && s.length > 0)
          return yield ee({ authorization: s[0] }).catch(() => {
            throw new N(
              "`to` is required. Could not infer from `authorizationList`."
            );
          });
      });
      if (b?.type === "json-rpc" || b === null) {
        let A;
        o !== null &&
          ((A = yield v(t, lt, "getChainId")({})),
          Te({ currentChainId: A, chain: o }));
        let B = t.chain?.formatters?.transactionRequest?.format,
          I = (B || ut)(
            C(x({}, Bt(g, { format: B })), {
              accessList: n,
              authorizationList: s,
              blobs: i,
              chainId: A,
              data: a,
              from: b?.address,
              gas: c,
              gasPrice: m,
              maxFeePerBlobGas: d,
              maxFeePerGas: f,
              maxPriorityFeePerGas: p,
              nonce: l,
              to: E,
              type: h,
              value: y,
            }),
            "sendTransaction"
          ),
          k = Ss.get(t.uid),
          S = k ? "wallet_sendTransaction" : "eth_sendTransaction";
        try {
          return yield t.request({ method: S, params: [I] }, { retryCount: 0 });
        } catch (R) {
          if (k === !1) throw R;
          let z = R;
          if (
            z.name === "InvalidInputRpcError" ||
            z.name === "InvalidParamsRpcError" ||
            z.name === "MethodNotFoundRpcError" ||
            z.name === "MethodNotSupportedRpcError"
          )
            return yield t
              .request(
                { method: "wallet_sendTransaction", params: [I] },
                { retryCount: 0 }
              )
              .then((F) => (Ss.set(t.uid, !0), F))
              .catch((F) => {
                let J = F;
                throw J.name === "MethodNotFoundRpcError" ||
                  J.name === "MethodNotSupportedRpcError"
                  ? (Ss.set(t.uid, !1), z)
                  : J;
              });
          throw z;
        }
      }
      if (b?.type === "local") {
        let A = yield v(
            t,
            Rt,
            "prepareTransactionRequest"
          )(
            C(
              x(
                {
                  account: b,
                  accessList: n,
                  authorizationList: s,
                  blobs: i,
                  chain: o,
                  data: a,
                  gas: c,
                  gasPrice: m,
                  maxFeePerBlobGas: d,
                  maxFeePerGas: f,
                  maxPriorityFeePerGas: p,
                  nonce: l,
                  nonceManager: b.nonceManager,
                  parameters: [...qr, "sidecars"],
                  type: h,
                  value: y,
                },
                g
              ),
              { to: E }
            )
          ),
          B = o?.serializers?.transaction,
          P = yield b.signTransaction(A, { serializer: B });
        return yield v(
          t,
          Xe,
          "sendRawTransaction"
        )({ serializedTransaction: P });
      }
      throw b?.type === "smart"
        ? new St({
            metaMessages: [
              "Consider using the `sendUserOperation` Action instead.",
            ],
            docsPath: "/docs/actions/bundler/sendUserOperation",
            type: "smart",
          })
        : new St({
            docsPath: "/docs/actions/wallet/sendTransaction",
            type: b?.type,
          });
    } catch (E) {
      throw E instanceof St
        ? E
        : Qe(E, C(x({}, e), { account: b, chain: e.chain || void 0 }));
    }
  });
}
function Ut(t, e) {
  return u(this, null, function* () {
    return Ut.internal(t, se, "sendTransaction", e);
  });
}
(function (t) {
  function e(r, o, n, s) {
    return u(this, null, function* () {
      let y = s,
        {
          abi: i,
          account: a = r.account,
          address: c,
          args: m,
          dataSuffix: d,
          functionName: f,
        } = y,
        p = _(y, [
          "abi",
          "account",
          "address",
          "args",
          "dataSuffix",
          "functionName",
        ]);
      if (typeof a > "u")
        throw new nt({ docsPath: "/docs/contract/writeContract" });
      let l = a ? D(a) : null,
        h = j({ abi: i, args: m, functionName: f });
      try {
        return yield v(
          r,
          o,
          n
        )(
          x(
            { data: `${h}${d ? d.replace("0x", "") : ""}`, to: c, account: l },
            p
          )
        );
      } catch (g) {
        throw dt(g, {
          abi: i,
          address: c,
          args: m,
          docsPath: "/docs/contract/writeContract",
          functionName: f,
          sender: l?.address,
        });
      }
    });
  }
  t.internal = e;
})(Ut || (Ut = {}));
function Gu({ abi: t, address: e, client: r }) {
  let o = r,
    [n, s] = o
      ? "public" in o && "wallet" in o
        ? [o.public, o.wallet]
        : "public" in o
        ? [o.public, void 0]
        : "wallet" in o
        ? [void 0, o.wallet]
        : [o, o]
      : [void 0, void 0],
    i = n != null,
    a = s != null,
    c = {},
    m = !1,
    d = !1,
    f = !1;
  for (let p of t)
    if (
      (p.type === "function"
        ? p.stateMutability === "view" || p.stateMutability === "pure"
          ? (m = !0)
          : (d = !0)
        : p.type === "event" && (f = !0),
      m && d && f)
    )
      break;
  return (
    i &&
      (m &&
        (c.read = new Proxy(
          {},
          {
            get(p, l) {
              return (...h) => {
                let { args: y, options: g } = Yo(h);
                return v(
                  n,
                  K,
                  "readContract"
                )(x({ abi: t, address: e, functionName: l, args: y }, g));
              };
            },
          }
        )),
      d &&
        (c.simulate = new Proxy(
          {},
          {
            get(p, l) {
              return (...h) => {
                let { args: y, options: g } = Yo(h);
                return v(
                  n,
                  Jo,
                  "simulateContract"
                )(x({ abi: t, address: e, functionName: l, args: y }, g));
              };
            },
          }
        )),
      f &&
        ((c.createEventFilter = new Proxy(
          {},
          {
            get(p, l) {
              return (...h) => {
                let y = t.find((w) => w.type === "event" && w.name === l),
                  { args: g, options: b } = Rs(h, y);
                return v(
                  n,
                  We,
                  "createContractEventFilter"
                )(x({ abi: t, address: e, eventName: l, args: g }, b));
              };
            },
          }
        )),
        (c.getEvents = new Proxy(
          {},
          {
            get(p, l) {
              return (...h) => {
                let y = t.find((w) => w.type === "event" && w.name === l),
                  { args: g, options: b } = Rs(h, y);
                return v(
                  n,
                  Ye,
                  "getContractEvents"
                )(x({ abi: t, address: e, eventName: l, args: g }, b));
              };
            },
          }
        )),
        (c.watchEvent = new Proxy(
          {},
          {
            get(p, l) {
              return (...h) => {
                let y = t.find((w) => w.type === "event" && w.name === l),
                  { args: g, options: b } = Rs(h, y);
                return v(
                  n,
                  Zo,
                  "watchContractEvent"
                )(x({ abi: t, address: e, eventName: l, args: g }, b));
              };
            },
          }
        )))),
    a &&
      d &&
      (c.write = new Proxy(
        {},
        {
          get(p, l) {
            return (...h) => {
              let { args: y, options: g } = Yo(h);
              return v(
                s,
                Ut,
                "writeContract"
              )(x({ abi: t, address: e, functionName: l, args: y }, g));
            };
          },
        }
      )),
    (i || a) &&
      d &&
      (c.estimateGas = new Proxy(
        {},
        {
          get(p, l) {
            return (...h) => {
              let { args: y, options: g } = Yo(h);
              return v(
                n ?? s,
                Ko,
                "estimateContractGas"
              )(
                C(x({ abi: t, address: e, functionName: l, args: y }, g), {
                  account: g.account ?? s.account,
                })
              );
            };
          },
        }
      )),
    (c.address = e),
    (c.abi = t),
    c
  );
}
function Yo(t) {
  let e = t.length && Array.isArray(t[0]),
    r = e ? t[0] : [],
    o = (e ? t[1] : t[0]) ?? {};
  return { args: r, options: o };
}
function Rs(t, e) {
  let r = !1;
  Array.isArray(t[0])
    ? (r = !0)
    : t.length === 1
    ? (r = e.inputs.some((s) => s.indexed))
    : t.length === 2 && (r = !0);
  let o = r ? t[0] : void 0,
    n = (r ? t[1] : t[0]) ?? {};
  return { args: o, options: n };
}
var zr = class extends N {
  constructor(e) {
    super(`Call bundle failed with status: ${e.statusCode}`, {
      name: "BundleFailedError",
    }),
      Object.defineProperty(this, "result", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      (this.result = e);
  }
};
function ie(
  t,
  { delay: e = 100, retryCount: r = 2, shouldRetry: o = () => !0 } = {}
) {
  return new Promise((n, s) => {
    let i = (...c) =>
      u(this, [...c], function* ({ count: a = 0 } = {}) {
        let m = (f) =>
          u(this, [f], function* ({ error: d }) {
            let p = typeof e == "function" ? e({ count: a, error: d }) : e;
            p && (yield Ce(p)), i({ count: a + 1 });
          });
        try {
          let d = yield t();
          n(d);
        } catch (d) {
          if (a < r && (yield o({ count: a, error: d })))
            return m({ error: d });
          s(d);
        }
      });
    i();
  });
}
var Ns = "0x5792579257925792579257925792579257925792579257925792579257925792",
  Fs = T(0, { size: 32 });
function Qo(t, e) {
  return u(this, null, function* () {
    let {
        account: r = t.account,
        capabilities: o,
        chain: n = t.chain,
        experimental_fallback: s,
        experimental_fallbackDelay: i = 32,
        forceAtomic: a = !1,
        id: c,
        version: m = "2.0.0",
      } = e,
      d = r ? D(r) : null,
      f = e.calls.map((p) => {
        let l = p,
          h = l.abi
            ? j({ abi: l.abi, functionName: l.functionName, args: l.args })
            : l.data;
        return {
          data: l.dataSuffix && h ? pt([h, l.dataSuffix]) : h,
          to: l.to,
          value: l.value ? T(l.value) : void 0,
        };
      });
    try {
      let p = yield t.request(
        {
          method: "wallet_sendCalls",
          params: [
            {
              atomicRequired: a,
              calls: f,
              capabilities: o,
              chainId: T(n.id),
              from: d?.address,
              id: c,
              version: m,
            },
          ],
        },
        { retryCount: 0 }
      );
      return typeof p == "string" ? { id: p } : p;
    } catch (p) {
      let l = p;
      if (
        s &&
        (l.name === "MethodNotFoundRpcError" ||
          l.name === "MethodNotSupportedRpcError" ||
          l.name === "UnknownRpcError" ||
          l.details
            .toLowerCase()
            .includes("does not exist / is not available") ||
          l.details.toLowerCase().includes("missing or invalid. request()") ||
          l.details
            .toLowerCase()
            .includes("did not match any variant of untagged enum") ||
          l.details
            .toLowerCase()
            .includes("account upgraded to unsupported contract") ||
          l.details.toLowerCase().includes("eip-7702 not supported") ||
          l.details.toLowerCase().includes("unsupported wc_ method") ||
          l.details.toLowerCase().includes("feature toggled misconfigured") ||
          l.details
            .toLowerCase()
            .includes(
              "jsonrpcengine: response has no error or result for request"
            ))
      ) {
        if (o && Object.values(o).some((w) => !w.optional)) {
          let w =
            "non-optional `capabilities` are not supported on fallback to `eth_sendTransaction`.";
          throw new $e(new N(w, { details: w }));
        }
        if (a && f.length > 1) {
          let b =
            "`forceAtomic` is not supported on fallback to `eth_sendTransaction`.";
          throw new Oe(new N(b, { details: b }));
        }
        let h = [];
        for (let b of f) {
          let w = se(t, {
            account: d,
            chain: n,
            data: b.data,
            to: b.to,
            value: b.value ? q(b.value) : void 0,
          });
          h.push(w), i > 0 && (yield new Promise((E) => setTimeout(E, i)));
        }
        let y = yield Promise.allSettled(h);
        if (y.every((b) => b.status === "rejected")) throw y[0].reason;
        let g = y.map((b) => (b.status === "fulfilled" ? b.value : Fs));
        return { id: pt([...g, T(n.id, { size: 32 }), Ns]) };
      }
      throw Qe(p, C(x({}, e), { account: d, chain: e.chain }));
    }
  });
}
function Xo(t, e) {
  return u(this, null, function* () {
    function r(f) {
      return u(this, null, function* () {
        if (f.endsWith(Ns.slice(2))) {
          let l = de(Vt(f, -64, -32)),
            h = Vt(f, 0, -64)
              .slice(2)
              .match(/.{1,64}/g),
            y = yield Promise.all(
              h.map((b) =>
                Fs.slice(2) !== b
                  ? t.request(
                      {
                        method: "eth_getTransactionReceipt",
                        params: [`0x${b}`],
                      },
                      { dedupe: !0 }
                    )
                  : void 0
              )
            ),
            g = y.some((b) => b === null)
              ? 100
              : y.every((b) => b?.status === "0x1")
              ? 200
              : y.every((b) => b?.status === "0x0")
              ? 500
              : 600;
          return {
            atomic: !1,
            chainId: M(l),
            receipts: y.filter(Boolean),
            status: g,
            version: "2.0.0",
          };
        }
        return t.request({ method: "wallet_getCallsStatus", params: [f] });
      });
    }
    let d = yield r(e.id),
      { atomic: o = !1, chainId: n, receipts: s, version: i = "2.0.0" } = d,
      a = _(d, ["atomic", "chainId", "receipts", "version"]),
      [c, m] = (() => {
        let f = a.status;
        return f >= 100 && f < 200
          ? ["pending", f]
          : f >= 200 && f < 300
          ? ["success", f]
          : f >= 300 && f < 700
          ? ["failure", f]
          : f === "CONFIRMED"
          ? ["success", 200]
          : f === "PENDING"
          ? ["pending", 100]
          : [void 0, f];
      })();
    return C(x({}, a), {
      atomic: o,
      chainId: n ? M(n) : void 0,
      receipts:
        s?.map((f) =>
          C(x({}, f), {
            blockNumber: q(f.blockNumber),
            gasUsed: q(f.gasUsed),
            status: sa[f.status],
          })
        ) ?? [],
      statusCode: m,
      status: c,
      version: i,
    });
  });
}
function en(t, e) {
  return u(this, null, function* () {
    let {
        id: r,
        pollingInterval: o = t.pollingInterval,
        status: n = ({ statusCode: y }) => y === 200 || y >= 300,
        retryCount: s = 4,
        retryDelay: i = ({ count: y }) => ~~(1 << y) * 200,
        timeout: a = 6e4,
        throwOnFailure: c = !1,
      } = e,
      m = O(["waitForCallsStatus", t.uid, r]),
      { promise: d, resolve: f, reject: p } = Go(),
      l,
      h = it(m, { resolve: f, reject: p }, (y) => {
        let g = gt(
          () =>
            u(this, null, function* () {
              let b = (w) => {
                clearTimeout(l), g(), w(), h();
              };
              try {
                let w = yield ie(
                  () =>
                    u(this, null, function* () {
                      let E = yield v(t, Xo, "getCallsStatus")({ id: r });
                      if (c && E.status === "failure") throw new zr(E);
                      return E;
                    }),
                  { retryCount: s, delay: i }
                );
                if (!n(w)) return;
                b(() => y.resolve(w));
              } catch (w) {
                b(() => y.reject(w));
              }
            }),
          { interval: o, emitOnBegin: !0 }
        );
        return g;
      });
    return (
      (l = a
        ? setTimeout(() => {
            h(), clearTimeout(l), p(new tn({ id: r }));
          }, a)
        : void 0),
      yield d
    );
  });
}
var tn = class extends N {
  constructor({ id: e }) {
    super(
      `Timed out while waiting for call bundle with id "${e}" to be confirmed.`,
      { name: "WaitForCallsStatusTimeoutError" }
    );
  }
};
var rn = 256,
  on;
function nn(t = 11) {
  if (!on || rn + t > 256 * 2) {
    (on = ""), (rn = 0);
    for (let e = 0; e < 256; e++)
      on += ((256 + Math.random() * 256) | 0).toString(16).substring(1);
  }
  return on.substring(rn, rn++ + t);
}
function Be(t) {
  let {
      batch: e,
      chain: r,
      ccipRead: o,
      key: n = "base",
      name: s = "Base Client",
      type: i = "base",
    } = t,
    a =
      t.experimental_blockTag ??
      (typeof r?.experimental_preconfirmationTime == "number"
        ? "pending"
        : void 0),
    c = r?.blockTime ?? 12e3,
    m = Math.min(Math.max(Math.floor(c / 2), 500), 4e3),
    d = t.pollingInterval ?? m,
    f = t.cacheTime ?? d,
    p = t.account ? D(t.account) : void 0,
    {
      config: l,
      request: h,
      value: y,
    } = t.transport({ chain: r, pollingInterval: d }),
    g = x(x({}, l), y),
    b = x(
      {
        account: p,
        batch: e,
        cacheTime: f,
        ccipRead: o,
        chain: r,
        key: n,
        name: s,
        pollingInterval: d,
        request: h,
        transport: g,
        type: i,
        uid: nn(),
      },
      a ? { experimental_blockTag: a } : {}
    );
  function w(E) {
    return (A) => {
      let B = A(E);
      for (let I in b) delete B[I];
      let P = x(x({}, E), B);
      return Object.assign(P, { extend: w(P) });
    };
  }
  return Object.assign(b, { extend: w(b) });
}
function ju() {
  return null;
}
function tr(t) {
  if (!(t instanceof N)) return !1;
  let e = t.walk((r) => r instanceof ze);
  return e instanceof ze
    ? e.data?.errorName === "HttpError" ||
        e.data?.errorName === "ResolverError" ||
        e.data?.errorName === "ResolverNotContract" ||
        e.data?.errorName === "ResolverNotFound" ||
        e.data?.errorName === "ReverseAddressMismatch" ||
        e.data?.errorName === "UnsupportedResolverProfile"
    : !1;
}
function sn(t) {
  if (t.length !== 66 || t.indexOf("[") !== 0 || t.indexOf("]") !== 65)
    return null;
  let e = `0x${t.slice(1, 65)}`;
  return H(e) ? e : null;
}
function er(t) {
  let e = new Uint8Array(32).fill(0);
  if (!t) return Z(e);
  let r = t.split(".");
  for (let o = r.length - 1; o >= 0; o -= 1) {
    let n = sn(r[o]),
      s = n ? ot(n) : $(_t(r[o]), "bytes");
    e = $(pt([e, s]), "bytes");
  }
  return Z(e);
}
function ba(t) {
  return `[${t.slice(2)}]`;
}
function Hs(t) {
  let e = new Uint8Array(32).fill(0);
  return t ? sn(t) || $(_t(t)) : Z(e);
}
function rr(t) {
  let e = t.replace(/^\.|\.$/gm, "");
  if (e.length === 0) return new Uint8Array(1);
  let r = new Uint8Array(_t(e).byteLength + 2),
    o = 0,
    n = e.split(".");
  for (let s = 0; s < n.length; s++) {
    let i = _t(n[s]);
    i.byteLength > 255 && (i = _t(ba(Hs(n[s])))),
      (r[o] = i.length),
      r.set(i, o + 1),
      (o += i.length + 1);
  }
  return r.byteLength !== o + 1 ? r.slice(0, o + 1) : r;
}
function wa(t, e) {
  return u(this, null, function* () {
    let {
        blockNumber: r,
        blockTag: o,
        coinType: n,
        name: s,
        gatewayUrls: i,
        strict: a,
      } = e,
      { chain: c } = t,
      m = (() => {
        if (e.universalResolverAddress) return e.universalResolverAddress;
        if (!c)
          throw new Error(
            "client chain not configured. universalResolverAddress is required."
          );
        return vt({
          blockNumber: r,
          chain: c,
          contract: "ensUniversalResolver",
        });
      })(),
      d = c?.ensTlds;
    if (d && !d.some((p) => s.endsWith(p))) return null;
    let f = n != null ? [er(s), BigInt(n)] : [er(s)];
    try {
      let p = j({ abi: Kn, functionName: "addr", args: f }),
        l = {
          address: m,
          abi: uo,
          functionName: "resolveWithGateways",
          args: [X(rr(s)), p, i ?? [Ue]],
          blockNumber: r,
          blockTag: o,
        },
        y = yield v(t, K, "readContract")(l);
      if (y[0] === "0x") return null;
      let g = ht({ abi: Kn, args: f, functionName: "addr", data: y[0] });
      return g === "0x" || de(g) === "0x00" ? null : g;
    } catch (p) {
      if (a) throw p;
      if (tr(p)) return null;
      throw p;
    }
  });
}
var an = class extends N {
    constructor({ data: e }) {
      super(
        "Unable to extract image from metadata. The metadata may be malformed or invalid.",
        {
          metaMessages: [
            "- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.",
            "",
            `Provided data: ${JSON.stringify(e)}`,
          ],
          name: "EnsAvatarInvalidMetadataError",
        }
      );
    }
  },
  Lt = class extends N {
    constructor({ reason: e }) {
      super(`ENS NFT avatar URI is invalid. ${e}`, {
        name: "EnsAvatarInvalidNftUriError",
      });
    }
  },
  ke = class extends N {
    constructor({ uri: e }) {
      super(
        `Unable to resolve ENS avatar URI "${e}". The URI may be malformed, invalid, or does not respond with a valid image.`,
        { name: "EnsAvatarUriResolutionError" }
      );
    }
  },
  Ur = class extends N {
    constructor({ namespace: e }) {
      super(
        `ENS NFT avatar namespace "${e}" is not supported. Must be "erc721" or "erc1155".`,
        { name: "EnsAvatarUnsupportedNamespaceError" }
      );
    }
  },
  Lr = class extends N {
    constructor({ chainId: e }) {
      super(
        `Invalid ENSIP-11 chainId: ${e}. Must be between 0 and 0x7fffffff, or 1.`,
        { name: "EnsInvalidChainIdError" }
      );
    }
  };
var Vu =
    /(?<protocol>https?:\/\/[^/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/,
  Wu =
    /^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/,
  Ku = /^data:([a-zA-Z\-/+]*);base64,([^"].*)/,
  Ju = /^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;
function Zu(t) {
  return u(this, null, function* () {
    try {
      let e = yield fetch(t, { method: "HEAD" });
      return e.status === 200
        ? e.headers.get("content-type")?.startsWith("image/")
        : !1;
    } catch (e) {
      return (typeof e == "object" && typeof e.response < "u") ||
        !Object.hasOwn(globalThis, "Image")
        ? !1
        : new Promise((r) => {
            let o = new Image();
            (o.onload = () => {
              r(!0);
            }),
              (o.onerror = () => {
                r(!1);
              }),
              (o.src = t);
          });
    }
  });
}
function Ea(t, e) {
  return t ? (t.endsWith("/") ? t.slice(0, -1) : t) : e;
}
function _s({ uri: t, gatewayUrls: e }) {
  let r = Ku.test(t);
  if (r) return { uri: t, isOnChain: !0, isEncoded: r };
  let o = Ea(e?.ipfs, "https://ipfs.io"),
    n = Ea(e?.arweave, "https://arweave.net"),
    s = t.match(Vu),
    { protocol: i, subpath: a, target: c, subtarget: m = "" } = s?.groups || {},
    d = i === "ipns:/" || a === "ipns/",
    f = i === "ipfs:/" || a === "ipfs/" || Wu.test(t);
  if (t.startsWith("http") && !d && !f) {
    let l = t;
    return (
      e?.arweave && (l = t.replace(/https:\/\/arweave.net/g, e?.arweave)),
      { uri: l, isOnChain: !1, isEncoded: !1 }
    );
  }
  if ((d || f) && c)
    return {
      uri: `${o}/${d ? "ipns" : "ipfs"}/${c}${m}`,
      isOnChain: !1,
      isEncoded: !1,
    };
  if (i === "ar:/" && c)
    return { uri: `${n}/${c}${m || ""}`, isOnChain: !1, isEncoded: !1 };
  let p = t.replace(Ju, "");
  if (
    (p.startsWith("<svg") && (p = `data:image/svg+xml;base64,${btoa(p)}`),
    p.startsWith("data:") || p.startsWith("{"))
  )
    return { uri: p, isOnChain: !0, isEncoded: !1 };
  throw new ke({ uri: t });
}
function qs(t) {
  if (
    typeof t != "object" ||
    (!("image" in t) && !("image_url" in t) && !("image_data" in t))
  )
    throw new an({ data: t });
  return t.image || t.image_url || t.image_data;
}
function va(r) {
  return u(this, arguments, function* ({ gatewayUrls: t, uri: e }) {
    try {
      let o = yield fetch(e).then((s) => s.json());
      return yield cn({ gatewayUrls: t, uri: qs(o) });
    } catch {
      throw new ke({ uri: e });
    }
  });
}
function cn(r) {
  return u(this, arguments, function* ({ gatewayUrls: t, uri: e }) {
    let { uri: o, isOnChain: n } = _s({ uri: e, gatewayUrls: t });
    if (n || (yield Zu(o))) return o;
    throw new ke({ uri: e });
  });
}
function Ta(t) {
  let e = t;
  e.startsWith("did:nft:") &&
    (e = e.replace("did:nft:", "").replace(/_/g, "/"));
  let [r, o, n] = e.split("/"),
    [s, i] = r.split(":"),
    [a, c] = o.split(":");
  if (!s || s.toLowerCase() !== "eip155")
    throw new Lt({ reason: "Only EIP-155 supported" });
  if (!i) throw new Lt({ reason: "Chain ID not found" });
  if (!c) throw new Lt({ reason: "Contract address not found" });
  if (!n) throw new Lt({ reason: "Token ID not found" });
  if (!a) throw new Lt({ reason: "ERC namespace not found" });
  return {
    chainID: Number.parseInt(i, 10),
    namespace: a.toLowerCase(),
    contractAddress: c,
    tokenID: n,
  };
}
function Aa(r, o) {
  return u(this, arguments, function* (t, { nft: e }) {
    if (e.namespace === "erc721")
      return K(t, {
        address: e.contractAddress,
        abi: [
          {
            name: "tokenURI",
            type: "function",
            stateMutability: "view",
            inputs: [{ name: "tokenId", type: "uint256" }],
            outputs: [{ name: "", type: "string" }],
          },
        ],
        functionName: "tokenURI",
        args: [BigInt(e.tokenID)],
      });
    if (e.namespace === "erc1155")
      return K(t, {
        address: e.contractAddress,
        abi: [
          {
            name: "uri",
            type: "function",
            stateMutability: "view",
            inputs: [{ name: "_id", type: "uint256" }],
            outputs: [{ name: "", type: "string" }],
          },
        ],
        functionName: "uri",
        args: [BigInt(e.tokenID)],
      });
    throw new Ur({ namespace: e.namespace });
  });
}
function Ia(o, n) {
  return u(this, arguments, function* (t, { gatewayUrls: e, record: r }) {
    return /eip155:/i.test(r)
      ? Yu(t, { gatewayUrls: e, record: r })
      : cn({ uri: r, gatewayUrls: e });
  });
}
function Yu(o, n) {
  return u(this, arguments, function* (t, { gatewayUrls: e, record: r }) {
    let s = Ta(r),
      i = yield Aa(t, { nft: s }),
      { uri: a, isOnChain: c, isEncoded: m } = _s({ uri: i, gatewayUrls: e });
    if (
      c &&
      (a.includes("data:application/json;base64,") || a.startsWith("{"))
    ) {
      let f = m ? atob(a.replace("data:application/json;base64,", "")) : a,
        p = JSON.parse(f);
      return cn({ uri: qs(p), gatewayUrls: e });
    }
    let d = s.tokenID;
    return (
      s.namespace === "erc1155" && (d = d.replace("0x", "").padStart(64, "0")),
      va({ gatewayUrls: e, uri: a.replace(/(?:0x)?{id}/, d) })
    );
  });
}
function un(t, e) {
  return u(this, null, function* () {
    let {
        blockNumber: r,
        blockTag: o,
        key: n,
        name: s,
        gatewayUrls: i,
        strict: a,
      } = e,
      { chain: c } = t,
      m = (() => {
        if (e.universalResolverAddress) return e.universalResolverAddress;
        if (!c)
          throw new Error(
            "client chain not configured. universalResolverAddress is required."
          );
        return vt({
          blockNumber: r,
          chain: c,
          contract: "ensUniversalResolver",
        });
      })(),
      d = c?.ensTlds;
    if (d && !d.some((f) => s.endsWith(f))) return null;
    try {
      let f = {
          address: m,
          abi: uo,
          args: [
            X(rr(s)),
            j({ abi: Wn, functionName: "text", args: [er(s), n] }),
            i ?? [Ue],
          ],
          functionName: "resolveWithGateways",
          blockNumber: r,
          blockTag: o,
        },
        l = yield v(t, K, "readContract")(f);
      if (l[0] === "0x") return null;
      let h = ht({ abi: Wn, functionName: "text", data: l[0] });
      return h === "" ? null : h;
    } catch (f) {
      if (a) throw f;
      if (tr(f)) return null;
      throw f;
    }
  });
}
function Pa(c, m) {
  return u(
    this,
    arguments,
    function* (
      t,
      {
        blockNumber: e,
        blockTag: r,
        assetGatewayUrls: o,
        name: n,
        gatewayUrls: s,
        strict: i,
        universalResolverAddress: a,
      }
    ) {
      let d = yield v(
        t,
        un,
        "getEnsText"
      )({
        blockNumber: e,
        blockTag: r,
        key: "avatar",
        name: n,
        universalResolverAddress: a,
        gatewayUrls: s,
        strict: i,
      });
      if (!d) return null;
      try {
        return yield Ia(t, { record: d, gatewayUrls: o });
      } catch {
        return null;
      }
    }
  );
}
function Ca(t, e) {
  return u(this, null, function* () {
    let {
        address: r,
        blockNumber: o,
        blockTag: n,
        coinType: s = 60n,
        gatewayUrls: i,
        strict: a,
      } = e,
      { chain: c } = t,
      m = (() => {
        if (e.universalResolverAddress) return e.universalResolverAddress;
        if (!c)
          throw new Error(
            "client chain not configured. universalResolverAddress is required."
          );
        return vt({
          blockNumber: o,
          chain: c,
          contract: "ensUniversalResolver",
        });
      })();
    try {
      let d = {
          address: m,
          abi: Li,
          args: [r, s, i ?? [Ue]],
          functionName: "reverseWithGateways",
          blockNumber: o,
          blockTag: n,
        },
        f = v(t, K, "readContract"),
        [p] = yield f(d);
      return p || null;
    } catch (d) {
      if (a) throw d;
      if (tr(d)) return null;
      throw d;
    }
  });
}
function Ba(t, e) {
  return u(this, null, function* () {
    let { blockNumber: r, blockTag: o, name: n } = e,
      { chain: s } = t,
      i = (() => {
        if (e.universalResolverAddress) return e.universalResolverAddress;
        if (!s)
          throw new Error(
            "client chain not configured. universalResolverAddress is required."
          );
        return vt({
          blockNumber: r,
          chain: s,
          contract: "ensUniversalResolver",
        });
      })(),
      a = s?.ensTlds;
    if (a && !a.some((m) => n.endsWith(m)))
      throw new Error(
        `${n} is not a valid ENS TLD (${a?.join(", ")}) for chain "${
          s.name
        }" (id: ${s.id}).`
      );
    let [c] = yield v(
      t,
      K,
      "readContract"
    )({
      address: i,
      abi: [
        {
          inputs: [{ type: "bytes" }],
          name: "findResolver",
          outputs: [
            { type: "address" },
            { type: "bytes32" },
            { type: "uint256" },
          ],
          stateMutability: "view",
          type: "function",
        },
      ],
      functionName: "findResolver",
      args: [X(rr(n))],
      blockNumber: r,
      blockTag: o,
    });
    return c;
  });
}
function mn(t, e) {
  return u(this, null, function* () {
    let g = e,
      {
        account: r = t.account,
        blockNumber: o,
        blockTag: n = "latest",
        blobs: s,
        data: i,
        gas: a,
        gasPrice: c,
        maxFeePerBlobGas: m,
        maxFeePerGas: d,
        maxPriorityFeePerGas: f,
        to: p,
        value: l,
      } = g,
      h = _(g, [
        "account",
        "blockNumber",
        "blockTag",
        "blobs",
        "data",
        "gas",
        "gasPrice",
        "maxFeePerBlobGas",
        "maxFeePerGas",
        "maxPriorityFeePerGas",
        "to",
        "value",
      ]),
      y = r ? D(r) : void 0;
    try {
      mt(e);
      let w = (typeof o == "bigint" ? T(o) : void 0) || n,
        E = t.chain?.formatters?.transactionRequest?.format,
        B = (E || ut)(
          C(x({}, Bt(h, { format: E })), {
            from: y?.address,
            blobs: s,
            data: i,
            gas: a,
            gasPrice: c,
            maxFeePerBlobGas: m,
            maxFeePerGas: d,
            maxPriorityFeePerGas: f,
            to: p,
            value: l,
          }),
          "createAccessList"
        ),
        P = yield t.request({ method: "eth_createAccessList", params: [B, w] });
      return { accessList: P.accessList, gasUsed: BigInt(P.gasUsed) };
    } catch (b) {
      throw ra(b, C(x({}, e), { account: y, chain: t.chain }));
    }
  });
}
function ka(t) {
  return u(this, null, function* () {
    let e = te(t, { method: "eth_newBlockFilter" }),
      r = yield t.request({ method: "eth_newBlockFilter" });
    return { id: r, request: e(r), type: "block" };
  });
}
function fn(c) {
  return u(
    this,
    arguments,
    function* (
      t,
      {
        address: e,
        args: r,
        event: o,
        events: n,
        fromBlock: s,
        strict: i,
        toBlock: a,
      } = {}
    ) {
      let m = n ?? (o ? [o] : void 0),
        d = te(t, { method: "eth_newFilter" }),
        f = [];
      m &&
        ((f = [m.flatMap((h) => Tt({ abi: [h], eventName: h.name, args: r }))]),
        o && (f = f[0]));
      let p = yield t.request({
        method: "eth_newFilter",
        params: [
          x(
            {
              address: e,
              fromBlock: typeof s == "bigint" ? T(s) : s,
              toBlock: typeof a == "bigint" ? T(a) : a,
            },
            f.length ? { topics: f } : {}
          ),
        ],
      });
      return {
        abi: m,
        args: r,
        eventName: o ? o.name : void 0,
        fromBlock: s,
        id: p,
        request: d(p),
        strict: !!i,
        toBlock: a,
        type: "event",
      };
    }
  );
}
function pn(t) {
  return u(this, null, function* () {
    let e = te(t, { method: "eth_newPendingTransactionFilter" }),
      r = yield t.request({ method: "eth_newPendingTransactionFilter" });
    return { id: r, request: e(r), type: "transaction" };
  });
}
function Sa(n, s) {
  return u(
    this,
    arguments,
    function* (
      t,
      {
        address: e,
        blockNumber: r,
        blockTag: o = t.experimental_blockTag ?? "latest",
      }
    ) {
      let i = typeof r == "bigint" ? T(r) : void 0,
        a = yield t.request({ method: "eth_getBalance", params: [e, i || o] });
      return BigInt(a);
    }
  );
}
function Ra(t) {
  return u(this, null, function* () {
    let e = yield t.request({ method: "eth_blobBaseFee" });
    return BigInt(e);
  });
}
function Na(n) {
  return u(
    this,
    arguments,
    function* (
      t,
      { blockHash: e, blockNumber: r, blockTag: o = "latest" } = {}
    ) {
      let s = r !== void 0 ? T(r) : void 0,
        i;
      return (
        e
          ? (i = yield t.request(
              { method: "eth_getBlockTransactionCountByHash", params: [e] },
              { dedupe: !0 }
            ))
          : (i = yield t.request(
              {
                method: "eth_getBlockTransactionCountByNumber",
                params: [s || o],
              },
              { dedupe: !!s }
            )),
        M(i)
      );
    }
  );
}
function Dr(n, s) {
  return u(
    this,
    arguments,
    function* (t, { address: e, blockNumber: r, blockTag: o = "latest" }) {
      let i = r !== void 0 ? T(r) : void 0,
        a = yield t.request(
          { method: "eth_getCode", params: [e, i || o] },
          { dedupe: !!i }
        );
      if (a !== "0x") return a;
    }
  );
}
var dn = class extends N {
  constructor({ address: e }) {
    super(`No EIP-712 domain found on contract "${e}".`, {
      metaMessages: [
        "Ensure that:",
        `- The contract is deployed at the address "${e}".`,
        "- `eip712Domain()` function exists on the contract.",
        "- `eip712Domain()` function matches signature to ERC-5267 specification.",
      ],
      name: "Eip712DomainNotFoundError",
    });
  }
};
function Fa(t, e) {
  return u(this, null, function* () {
    let { address: r, factory: o, factoryData: n } = e;
    try {
      let [s, i, a, c, m, d, f] = yield v(
        t,
        K,
        "readContract"
      )({
        abi: Qu,
        address: r,
        functionName: "eip712Domain",
        factory: o,
        factoryData: n,
      });
      return {
        domain: {
          name: i,
          version: a,
          chainId: Number(c),
          verifyingContract: m,
          salt: d,
        },
        extensions: f,
        fields: s,
      };
    } catch (s) {
      let i = s;
      throw i.name === "ContractFunctionExecutionError" &&
        i.cause.name === "ContractFunctionZeroDataError"
        ? new dn({ address: r })
        : i;
    }
  });
}
var Qu = [
  {
    inputs: [],
    name: "eip712Domain",
    outputs: [
      { name: "fields", type: "bytes1" },
      { name: "name", type: "string" },
      { name: "version", type: "string" },
      { name: "chainId", type: "uint256" },
      { name: "verifyingContract", type: "address" },
      { name: "salt", type: "bytes32" },
      { name: "extensions", type: "uint256[]" },
    ],
    stateMutability: "view",
    type: "function",
  },
];
function Ha(t) {
  return {
    baseFeePerGas: t.baseFeePerGas.map((e) => BigInt(e)),
    gasUsedRatio: t.gasUsedRatio,
    oldestBlock: BigInt(t.oldestBlock),
    reward: t.reward?.map((e) => e.map((r) => BigInt(r))),
  };
}
function _a(s, i) {
  return u(
    this,
    arguments,
    function* (
      t,
      {
        blockCount: e,
        blockNumber: r,
        blockTag: o = "latest",
        rewardPercentiles: n,
      }
    ) {
      let a = typeof r == "bigint" ? T(r) : void 0,
        c = yield t.request(
          { method: "eth_feeHistory", params: [T(e), a || o, n] },
          { dedupe: !!a }
        );
      return Ha(c);
    }
  );
}
function qa(r, o) {
  return u(this, arguments, function* (t, { filter: e }) {
    let n = e.strict ?? !1,
      i = (yield e.request({
        method: "eth_getFilterLogs",
        params: [e.id],
      })).map((a) => ft(a));
    return e.abi ? Pe({ abi: e.abi, logs: i, strict: n }) : i;
  });
}
function Xu(t, e) {
  if (t.length !== e.length)
    throw new Qn({ expectedLength: t.length, givenLength: e.length });
  let r = [];
  for (let o = 0; o < t.length; o++) {
    let n = t[o],
      s = e[o];
    r.push(za(n, s));
  }
  return Pt(r);
}
function za(t, e, r = !1) {
  if (t === "address") {
    let i = e;
    if (!qt(i)) throw new pe({ address: i });
    return Gt(i.toLowerCase(), { size: r ? 32 : null });
  }
  if (t === "string") return Et(e);
  if (t === "bytes") return e;
  if (t === "bool") return Gt(ho(e), { size: r ? 32 : 1 });
  let o = t.match(yo);
  if (o) {
    let [i, a, c = "256"] = o,
      m = Number.parseInt(c, 10) / 8;
    return T(e, { size: r ? 32 : m, signed: a === "int" });
  }
  let n = t.match(xo);
  if (n) {
    let [i, a] = n;
    if (Number.parseInt(a, 10) !== (e.length - 2) / 2)
      throw new hr({
        expectedSize: Number.parseInt(a, 10),
        givenSize: (e.length - 2) / 2,
      });
    return Gt(e, { dir: "right", size: r ? 32 : null });
  }
  let s = t.match($i);
  if (s && Array.isArray(e)) {
    let [i, a] = s,
      c = [];
    for (let m = 0; m < e.length; m++) c.push(za(a, e[m], !0));
    return c.length === 0 ? "0x" : Pt(c);
  }
  throw new ts(t);
}
function ln(t) {
  return !t || typeof t != "object" || !("BYTES_PER_ELEMENT" in t)
    ? !1
    : t.BYTES_PER_ELEMENT === 1 && t.constructor.name === "Uint8Array";
}
function tm(t) {
  return t.opcode === "CREATE2" ? La(t) : Ua(t);
}
function Ua(t) {
  let e = ot(Q(t.from)),
    r = ot(t.nonce);
  return (
    r[0] === 0 && (r = new Uint8Array([])),
    Q(`0x${$(Br([e, r], "bytes")).slice(26)}`)
  );
}
function La(t) {
  let e = ot(Q(t.from)),
    r = Gt(ln(t.salt) ? t.salt : ot(t.salt), { size: 32 }),
    o =
      "bytecodeHash" in t
        ? ln(t.bytecodeHash)
          ? t.bytecodeHash
          : ot(t.bytecodeHash)
        : $(t.bytecode, "bytes");
  return Q(rs($(pt([ot("0xff"), e, r, o])), 12));
}
function Da(o) {
  return u(
    this,
    arguments,
    function* ({ address: t, authorization: e, signature: r }) {
      return rt(Q(t), yield ee({ authorization: e, signature: r }));
    }
  );
}
var hn = new jt(8192);
function Ma(t, { enabled: e = !0, id: r }) {
  if (!e || !r) return t();
  if (hn.get(r)) return hn.get(r);
  let o = t().finally(() => hn.delete(r));
  return hn.set(r, o), o;
}
function $a(t, e = {}) {
  return (n, ...s) =>
    u(this, [n, ...s], function* (r, o = {}) {
      let {
          dedupe: i = !1,
          methods: a,
          retryDelay: c = 150,
          retryCount: m = 3,
          uid: d,
        } = x(x({}, e), o),
        { method: f } = r;
      if (a?.exclude?.includes(f))
        throw new Me(new Error("method not supported"), { method: f });
      if (a?.include && !a.include.includes(f))
        throw new Me(new Error("method not supported"), { method: f });
      let p = i ? Et(`${d}.${O(r)}`) : void 0;
      return Ma(
        () =>
          ie(
            () =>
              u(this, null, function* () {
                try {
                  return yield t(r);
                } catch (l) {
                  let h = l;
                  switch (h.code) {
                    case To.code:
                      throw new To(h);
                    case Ao.code:
                      throw new Ao(h);
                    case Io.code:
                      throw new Io(h, { method: r.method });
                    case Po.code:
                      throw new Po(h);
                    case ge.code:
                      throw new ge(h);
                    case Qt.code:
                      throw new Qt(h);
                    case Co.code:
                      throw new Co(h);
                    case Bo.code:
                      throw new Bo(h);
                    case De.code:
                      throw new De(h);
                    case Me.code:
                      throw new Me(h, { method: r.method });
                    case Tr.code:
                      throw new Tr(h);
                    case ko.code:
                      throw new ko(h);
                    case be.code:
                      throw new be(h);
                    case So.code:
                      throw new So(h);
                    case Ro.code:
                      throw new Ro(h);
                    case No.code:
                      throw new No(h);
                    case Fo.code:
                      throw new Fo(h);
                    case Ho.code:
                      throw new Ho(h);
                    case $e.code:
                      throw new $e(h);
                    case _o.code:
                      throw new _o(h);
                    case qo.code:
                      throw new qo(h);
                    case zo.code:
                      throw new zo(h);
                    case Uo.code:
                      throw new Uo(h);
                    case Lo.code:
                      throw new Lo(h);
                    case Oe.code:
                      throw new Oe(h);
                    case 5e3:
                      throw new be(h);
                    default:
                      throw l instanceof N ? l : new ps(h);
                  }
                }
              }),
            {
              delay: ({ count: l, error: h }) => {
                if (h && h instanceof Yt) {
                  let y = h?.headers?.get("Retry-After");
                  if (y?.match(/\d/)) return Number.parseInt(y, 10) * 1e3;
                }
                return ~~(1 << l) * c;
              },
              retryCount: m,
              shouldRetry: ({ error: l }) => em(l),
            }
          ),
        { enabled: i, id: p }
      );
    });
}
function em(t) {
  return "code" in t && typeof t.code == "number"
    ? t.code === -1 || t.code === Tr.code || t.code === ge.code
    : t instanceof Yt && t.status
    ? t.status === 403 ||
      t.status === 408 ||
      t.status === 413 ||
      t.status === 429 ||
      t.status === 500 ||
      t.status === 502 ||
      t.status === 503 ||
      t.status === 504
    : !0;
}
function xn(t, e = "hex") {
  let r = (() => {
      if (typeof t == "string") {
        if (t.length > 3 && t.length % 2 !== 0) throw new es(t);
        return tt(t);
      }
      return t;
    })(),
    o = gr(r, { recursiveReadLimit: Number.POSITIVE_INFINITY });
  return Ga(o, e);
}
function Ga(t, e = "hex") {
  if (t.bytes.length === 0) return e === "hex" ? Z(t.bytes) : t.bytes;
  let r = t.readByte();
  if ((r < 128 && t.decrementPosition(1), r < 192)) {
    let n = Oa(t, r, 128),
      s = t.readBytes(n);
    return e === "hex" ? Z(s) : s;
  }
  let o = Oa(t, r, 192);
  return rm(t, o, e);
}
function Oa(t, e, r) {
  if (r === 128 && e < 128) return 1;
  if (e <= r + 55) return e - r;
  if (e === r + 55 + 1) return t.readUint8();
  if (e === r + 55 + 2) return t.readUint16();
  if (e === r + 55 + 3) return t.readUint24();
  if (e === r + 55 + 4) return t.readUint32();
  throw new N("Invalid RLP prefix");
}
function rm(t, e, r) {
  let o = t.position,
    n = [];
  for (; t.position - o < e; ) n.push(Ga(t, r));
  return n;
}
function zs(t) {
  return H(t) && yt(t) === 32;
}
function om(t, e) {
  let r = e || "hex",
    o = ia(H(t, { strict: !1 }) ? ot(t) : t);
  return r === "bytes" ? o : X(o);
}
function ja(t) {
  let { source: e } = t,
    r = new Map(),
    o = new jt(8192),
    n = new Map(),
    s = ({ address: a, chainId: c }) => `${a}.${c}`;
  return {
    consume(d) {
      return u(
        this,
        arguments,
        function* ({ address: a, chainId: c, client: m }) {
          let f = s({ address: a, chainId: c }),
            p = this.get({ address: a, chainId: c, client: m });
          this.increment({ address: a, chainId: c });
          let l = yield p;
          return yield e.set({ address: a, chainId: c }, l), o.set(f, l), l;
        }
      );
    },
    increment(m) {
      return u(this, arguments, function* ({ address: a, chainId: c }) {
        let d = s({ address: a, chainId: c }),
          f = r.get(d) ?? 0;
        r.set(d, f + 1);
      });
    },
    get(d) {
      return u(
        this,
        arguments,
        function* ({ address: a, chainId: c, client: m }) {
          let f = s({ address: a, chainId: c }),
            p = n.get(f);
          return (
            p ||
              ((p = u(this, null, function* () {
                try {
                  let h = yield e.get({ address: a, chainId: c, client: m }),
                    y = o.get(f) ?? 0;
                  return y > 0 && h <= y ? y + 1 : (o.delete(f), h);
                } finally {
                  this.reset({ address: a, chainId: c });
                }
              })),
              n.set(f, p)),
            (r.get(f) ?? 0) + (yield p)
          );
        }
      );
    },
    reset({ address: a, chainId: c }) {
      let m = s({ address: a, chainId: c });
      r.delete(m), n.delete(m);
    },
  };
}
function nm() {
  return {
    get(e) {
      return u(this, null, function* () {
        let { address: r, client: o } = e;
        return re(o, { address: r, blockTag: "pending" });
      });
    },
    set() {},
  };
}
var sm = ja({ source: nm() });
function $r(
  t,
  { errorInstance: e = new Error("timed out"), timeout: r, signal: o }
) {
  return new Promise((n, s) => {
    u(this, null, function* () {
      let i;
      try {
        let a = new AbortController();
        r > 0 &&
          (i = setTimeout(() => {
            o ? a.abort() : s(e);
          }, r)),
          n(yield t({ signal: a?.signal || null }));
      } catch (a) {
        a?.name === "AbortError" && s(e), s(a);
      } finally {
        clearTimeout(i);
      }
    });
  });
}
function im() {
  return {
    current: 0,
    take() {
      return this.current++;
    },
    reset() {
      this.current = 0;
    },
  };
}
var Or = im();
function yn(t, e = {}) {
  return {
    request(o) {
      return u(this, null, function* () {
        let {
            body: n,
            fetchFn: s = e.fetchFn ?? fetch,
            onRequest: i = e.onRequest,
            onResponse: a = e.onResponse,
            timeout: c = e.timeout ?? 1e4,
          } = o,
          m = x(x({}, e.fetchOptions ?? {}), o.fetchOptions ?? {}),
          { headers: d, method: f, signal: p } = m;
        try {
          let l = yield $r(
            (g) =>
              u(this, [g], function* ({ signal: y }) {
                let b = C(x({}, m), {
                    body: Array.isArray(n)
                      ? O(
                          n.map((B) =>
                            x({ jsonrpc: "2.0", id: B.id ?? Or.take() }, B)
                          )
                        )
                      : O(x({ jsonrpc: "2.0", id: n.id ?? Or.take() }, n)),
                    headers: x({ "Content-Type": "application/json" }, d),
                    method: f || "POST",
                    signal: p || (c > 0 ? y : null),
                  }),
                  w = new Request(t, b),
                  E = (yield i?.(w, b)) ?? C(x({}, b), { url: t });
                return yield s(E.url ?? t, E);
              }),
            {
              errorInstance: new Le({ body: n, url: t }),
              timeout: c,
              signal: !0,
            }
          );
          a && (yield a(l));
          let h;
          if (l.headers.get("Content-Type")?.startsWith("application/json"))
            h = yield l.json();
          else {
            h = yield l.text();
            try {
              h = JSON.parse(h || "{}");
            } catch (y) {
              if (l.ok) throw y;
              h = { error: h };
            }
          }
          if (!l.ok)
            throw new Yt({
              body: n,
              details: O(h.error) || l.statusText,
              headers: l.headers,
              status: l.status,
              url: t,
            });
          return h;
        } catch (l) {
          throw l instanceof Yt || l instanceof Le
            ? l
            : new Yt({ body: n, cause: l, url: t });
        }
      });
    },
  };
}
var Ls = new Map();
function Va(t) {
  return u(this, null, function* () {
    let {
        getSocket: e,
        keepAlive: r = !0,
        key: o = "socket",
        reconnect: n = !0,
        url: s,
      } = t,
      { interval: i = 3e4 } = typeof r == "object" ? r : {},
      { attempts: a = 5, delay: c = 2e3 } = typeof n == "object" ? n : {},
      m = JSON.stringify({ keepAlive: r, key: o, url: s, reconnect: n }),
      d = Ls.get(m);
    if (d) return d;
    let f = 0,
      { schedule: p } = jo({
        id: m,
        fn: () =>
          u(this, null, function* () {
            let y = new Map(),
              g = new Map(),
              b,
              w,
              E,
              A = !1;
            function B() {
              if (n && f < a) {
                if (A) return;
                (A = !0),
                  f++,
                  w?.close(),
                  setTimeout(
                    () =>
                      u(this, null, function* () {
                        yield P().catch(console.error), (A = !1);
                      }),
                    c
                  );
              } else y.clear(), g.clear();
            }
            function P() {
              return u(this, null, function* () {
                let I = yield e({
                  onClose() {
                    for (let k of y.values()) k.onError?.(new ye({ url: s }));
                    for (let k of g.values()) k.onError?.(new ye({ url: s }));
                    B();
                  },
                  onError(k) {
                    b = k;
                    for (let S of y.values()) S.onError?.(b);
                    for (let S of g.values()) S.onError?.(b);
                    B();
                  },
                  onOpen() {
                    (b = void 0), (f = 0);
                  },
                  onResponse(k) {
                    let S = k.method === "eth_subscription",
                      R = S ? k.params.subscription : k.id,
                      z = S ? g : y,
                      F = z.get(R);
                    F && F.onResponse(k), S || z.delete(R);
                  },
                });
                if (
                  ((w = I),
                  r &&
                    (E && clearInterval(E),
                    (E = setInterval(() => w.ping?.(), i))),
                  n && g.size > 0)
                ) {
                  let k = g.entries();
                  for (let [S, { onResponse: R, body: z, onError: F }] of k)
                    z &&
                      (g.delete(S),
                      d?.request({ body: z, onResponse: R, onError: F }));
                }
                return I;
              });
            }
            return (
              yield P(),
              (b = void 0),
              (d = {
                close() {
                  E && clearInterval(E), w.close(), Ls.delete(m);
                },
                get socket() {
                  return w;
                },
                request({ body: I, onError: k, onResponse: S }) {
                  b && k && k(b);
                  let R = I.id ?? Or.take(),
                    z = (F) => {
                      (typeof F.id == "number" && R !== F.id) ||
                        (I.method === "eth_subscribe" &&
                          typeof F.result == "string" &&
                          g.set(F.result, {
                            onResponse: z,
                            onError: k,
                            body: I,
                          }),
                        I.method === "eth_unsubscribe" &&
                          g.delete(I.params?.[0]),
                        S(F));
                    };
                  y.set(R, { onResponse: z, onError: k });
                  try {
                    w.request({ body: x({ jsonrpc: "2.0", id: R }, I) });
                  } catch (F) {
                    k?.(F);
                  }
                },
                requestAsync({ body: I, timeout: k = 1e4 }) {
                  return $r(
                    () =>
                      new Promise((S, R) =>
                        this.request({ body: I, onError: R, onResponse: S })
                      ),
                    { errorInstance: new Le({ body: I, url: s }), timeout: k }
                  );
                },
                requests: y,
                subscriptions: g,
                url: s,
              }),
              Ls.set(m, d),
              [d]
            );
          }),
      }),
      [l, [h]] = yield p();
    return h;
  });
}
function or(r) {
  return u(this, arguments, function* (t, e = {}) {
    let { keepAlive: o, reconnect: n } = e;
    return Va({
      getSocket(d) {
        return u(
          this,
          arguments,
          function* ({ onClose: i, onError: a, onOpen: c, onResponse: m }) {
            let f = yield import("./chunk-UL65YSQD.js").then(
                (g) => g.WebSocket
              ),
              p = new f(t);
            function l() {
              p.removeEventListener("close", l),
                p.removeEventListener("message", h),
                p.removeEventListener("error", a),
                p.removeEventListener("open", c),
                i();
            }
            function h({ data: g }) {
              if (!(typeof g == "string" && g.trim().length === 0))
                try {
                  let b = JSON.parse(g);
                  m(b);
                } catch (b) {
                  a(b);
                }
            }
            p.addEventListener("close", l),
              p.addEventListener("message", h),
              p.addEventListener("error", a),
              p.addEventListener("open", c),
              p.readyState === f.CONNECTING &&
                (yield new Promise((g, b) => {
                  p && ((p.onopen = g), (p.onerror = b));
                }));
            let { close: y } = p;
            return Object.assign(p, {
              close() {
                y.bind(p)(), l();
              },
              ping() {
                try {
                  if (p.readyState === p.CLOSED || p.readyState === p.CLOSING)
                    throw new vo({ url: p.url, cause: new ye({ url: p.url }) });
                  let g = {
                    jsonrpc: "2.0",
                    id: null,
                    method: "net_version",
                    params: [],
                  };
                  p.send(JSON.stringify(g));
                } catch (g) {
                  a(g);
                }
              },
              request({ body: g }) {
                if (p.readyState === p.CLOSED || p.readyState === p.CLOSING)
                  throw new vo({
                    body: g,
                    url: p.url,
                    cause: new ye({ url: p.url }),
                  });
                return p.send(JSON.stringify(g));
              },
            });
          }
        );
      },
      keepAlive: o,
      reconnect: n,
      url: t,
    });
  });
}
function am(t, { body: e, onError: r, onResponse: o }) {
  return t.request({ body: e, onError: r, onResponse: o }), t;
}
function cm(o, n) {
  return u(this, arguments, function* (t, { body: e, timeout: r = 1e4 }) {
    return t.requestAsync({ body: e, timeout: r });
  });
}
function Ds(t) {
  return u(this, null, function* () {
    let e = yield or(t);
    return Object.assign(e.socket, {
      requests: e.requests,
      subscriptions: e.subscriptions,
    });
  });
}
var um = {
  http(t, e) {
    return yn(t).request(e);
  },
  webSocket: am,
  webSocketAsync: cm,
};
var Ms = `Ethereum Signed Message:
`;
function $s(t) {
  let e =
      typeof t == "string"
        ? Et(t)
        : typeof t.raw == "string"
        ? t.raw
        : Z(t.raw),
    r = Et(`${Ms}${yt(e)}`);
  return pt([r, e]);
}
function Se(t, e) {
  return $($s(t), e);
}
var Gr = class extends N {
    constructor({ domain: e }) {
      super(`Invalid domain "${O(e)}".`, {
        metaMessages: ["Must be a valid EIP-712 domain."],
      });
    }
  },
  jr = class extends N {
    constructor({ primaryType: e, types: r }) {
      super(
        `Invalid primary type \`${e}\` must be one of \`${JSON.stringify(
          Object.keys(r)
        )}\`.`,
        {
          docsPath: "/api/glossary/Errors#typeddatainvalidprimarytypeerror",
          metaMessages: ["Check that the primary type is a key in `types`."],
        }
      );
    }
  },
  Vr = class extends N {
    constructor({ type: e }) {
      super(`Struct type "${e}" is invalid.`, {
        metaMessages: ["Struct type must not be a Solidity type."],
        name: "InvalidStructTypeError",
      });
    }
  };
function Os(t) {
  let { domain: e, message: r, primaryType: o, types: n } = t,
    s = (c, m) => {
      let d = x({}, m);
      for (let f of c) {
        let { name: p, type: l } = f;
        l === "address" && (d[p] = d[p].toLowerCase());
      }
      return d;
    },
    i = n.EIP712Domain ? (e ? s(n.EIP712Domain, e) : {}) : {},
    a = (() => {
      if (o !== "EIP712Domain") return s(n[o], r);
    })();
  return O({ domain: i, message: a, primaryType: o, types: n });
}
function Wr(t) {
  let { domain: e, message: r, primaryType: o, types: n } = t,
    s = (i, a) => {
      for (let c of i) {
        let { name: m, type: d } = c,
          f = a[m],
          p = d.match(yo);
        if (p && (typeof f == "number" || typeof f == "bigint")) {
          let [y, g, b] = p;
          T(f, { signed: g === "int", size: Number.parseInt(b, 10) / 8 });
        }
        if (d === "address" && typeof f == "string" && !qt(f))
          throw new pe({ address: f });
        let l = d.match(xo);
        if (l) {
          let [y, g] = l;
          if (g && yt(f) !== Number.parseInt(g, 10))
            throw new hr({
              expectedSize: Number.parseInt(g, 10),
              givenSize: yt(f),
            });
        }
        let h = n[d];
        h && (fm(d), s(h, f));
      }
    };
  if (n.EIP712Domain && e) {
    if (typeof e != "object") throw new Gr({ domain: e });
    s(n.EIP712Domain, e);
  }
  if (o !== "EIP712Domain")
    if (n[o]) s(n[o], r);
    else throw new jr({ primaryType: o, types: n });
}
function nr({ domain: t }) {
  return [
    typeof t?.name == "string" && { name: "name", type: "string" },
    t?.version && { name: "version", type: "string" },
    (typeof t?.chainId == "number" || typeof t?.chainId == "bigint") && {
      name: "chainId",
      type: "uint256",
    },
    t?.verifyingContract && { name: "verifyingContract", type: "address" },
    t?.salt && { name: "salt", type: "bytes32" },
  ].filter(Boolean);
}
function mm({ domain: t }) {
  return gn({ domain: t, types: { EIP712Domain: nr({ domain: t }) } });
}
function fm(t) {
  if (
    t === "address" ||
    t === "bool" ||
    t === "string" ||
    t.startsWith("bytes") ||
    t.startsWith("uint") ||
    t.startsWith("int")
  )
    throw new Vr({ type: t });
}
function Kr(t) {
  let { domain: e = {}, message: r, primaryType: o } = t,
    n = x({ EIP712Domain: nr({ domain: e }) }, t.types);
  Wr({ domain: e, message: r, primaryType: o, types: n });
  let s = ["0x1901"];
  return (
    e && s.push(gn({ domain: e, types: n })),
    o !== "EIP712Domain" && s.push(Gs({ data: r, primaryType: o, types: n })),
    $(pt(s))
  );
}
function gn({ domain: t, types: e }) {
  return Gs({ data: t, primaryType: "EIP712Domain", types: e });
}
function Gs({ data: t, primaryType: e, types: r }) {
  let o = Wa({ data: t, primaryType: e, types: r });
  return $(o);
}
function Wa({ data: t, primaryType: e, types: r }) {
  let o = [{ type: "bytes32" }],
    n = [pm({ primaryType: e, types: r })];
  for (let s of r[e]) {
    let [i, a] = Ja({ types: r, name: s.name, type: s.type, value: t[s.name] });
    o.push(i), n.push(a);
  }
  return Wt(o, n);
}
function pm({ primaryType: t, types: e }) {
  let r = X(dm({ primaryType: t, types: e }));
  return $(r);
}
function dm({ primaryType: t, types: e }) {
  let r = "",
    o = Ka({ primaryType: t, types: e });
  o.delete(t);
  let n = [t, ...Array.from(o).sort()];
  for (let s of n)
    r += `${s}(${e[s].map(({ name: i, type: a }) => `${a} ${i}`).join(",")})`;
  return r;
}
function Ka({ primaryType: t, types: e }, r = new Set()) {
  let n = t.match(/^\w*/u)?.[0];
  if (r.has(n) || e[n] === void 0) return r;
  r.add(n);
  for (let s of e[n]) Ka({ primaryType: s.type, types: e }, r);
  return r;
}
function Ja({ types: t, name: e, type: r, value: o }) {
  if (t[r] !== void 0)
    return [{ type: "bytes32" }, $(Wa({ data: o, primaryType: r, types: t }))];
  if (r === "bytes")
    return (
      (o = `0x${(o.length % 2 ? "0" : "") + o.slice(2)}`),
      [{ type: "bytes32" }, $(o)]
    );
  if (r === "string") return [{ type: "bytes32" }, $(X(o))];
  if (r.lastIndexOf("]") === r.length - 1) {
    let n = r.slice(0, r.lastIndexOf("[")),
      s = o.map((i) => Ja({ name: e, type: n, types: t, value: i }));
    return [
      { type: "bytes32" },
      $(
        Wt(
          s.map(([i]) => i),
          s.map(([, i]) => i)
        )
      ),
    ];
  }
  return [{ type: r }, o];
}
var bn = "0x6492649264926492649264926492649264926492649264926492649264926492",
  lm = "0x0000000000000000000000000000000000000000000000000000000000000000";
function js(t) {
  return Vt(t, -32) === bn;
}
var At = {};
Ui(At, {
  InvalidWrappedSignatureError: () => Hn,
  assert: () => _n,
  from: () => Ym,
  magicBytes: () => yi,
  suffixParameters: () => gi,
  unwrap: () => xc,
  validate: () => Xm,
  wrap: () => Qm,
});
var wn = class extends Map {
  constructor(e) {
    super(),
      Object.defineProperty(this, "maxSize", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      (this.maxSize = e);
  }
  get(e) {
    let r = super.get(e);
    return super.has(e) && r !== void 0 && (this.delete(e), super.set(e, r)), r;
  }
  set(e, r) {
    if ((super.set(e, r), this.maxSize && this.size > this.maxSize)) {
      let o = this.keys().next().value;
      o && this.delete(o);
    }
    return this;
  }
};
var hm = { checksum: new wn(8192) },
  En = hm.checksum;
qu();
function Re(t, e = {}) {
  let { as: r = typeof t == "string" ? "Hex" : "Bytes" } = e,
    o = Di(ji(t));
  return r === "Bytes" ? o : ct(o);
}
function Za(t, e = {}) {
  let { compressed: r } = e,
    { prefix: o, x: n, y: s } = t;
  if (r === !1 || (typeof n == "bigint" && typeof s == "bigint")) {
    if (o !== 4) throw new vn({ prefix: o, cause: new Js() });
    return;
  }
  if (r === !0 || (typeof n == "bigint" && typeof s > "u")) {
    if (o !== 3 && o !== 2) throw new vn({ prefix: o, cause: new Ks() });
    return;
  }
  throw new Ws({ publicKey: t });
}
function Ya(t) {
  let e = (() => {
    if (Pr(t)) return Qa(t);
    if (Qi(t)) return gm(t);
    let { prefix: r, x: o, y: n } = t;
    return typeof o == "bigint" && typeof n == "bigint"
      ? { prefix: r ?? 4, x: o, y: n }
      : { prefix: r, x: o };
  })();
  return Za(e), e;
}
function gm(t) {
  return Qa(ct(t));
}
function Qa(t) {
  if (t.length !== 132 && t.length !== 130 && t.length !== 68)
    throw new Zs({ publicKey: t });
  if (t.length === 130) {
    let o = BigInt(V(t, 0, 32)),
      n = BigInt(V(t, 32, 64));
    return { prefix: 4, x: o, y: n };
  }
  if (t.length === 132) {
    let o = Number(V(t, 0, 1)),
      n = BigInt(V(t, 1, 33)),
      s = BigInt(V(t, 33, 65));
    return { prefix: o, x: n, y: s };
  }
  let e = Number(V(t, 0, 1)),
    r = BigInt(V(t, 1, 33));
  return { prefix: e, x: r };
}
function Ys(t, e = {}) {
  Za(t);
  let { prefix: r, x: o, y: n } = t,
    { includePrefix: s = !0 } = e;
  return W(
    s ? Y(r, { size: 1 }) : "0x",
    Y(o, { size: 32 }),
    typeof n == "bigint" ? Y(n, { size: 32 }) : "0x"
  );
}
var Ws = class extends L {
    constructor({ publicKey: e }) {
      super(`Value \`${Do(e)}\` is not a valid public key.`, {
        metaMessages: [
          "Public key must contain:",
          "- an `x` and `prefix` value (compressed)",
          "- an `x`, `y`, and `prefix` value (uncompressed)",
        ],
      }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "PublicKey.InvalidError",
        });
    }
  },
  vn = class extends L {
    constructor({ prefix: e, cause: r }) {
      super(`Prefix "${e}" is invalid.`, { cause: r }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "PublicKey.InvalidPrefixError",
        });
    }
  },
  Ks = class extends L {
    constructor() {
      super("Prefix must be 2 or 3 for compressed public keys."),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "PublicKey.InvalidCompressedPrefixError",
        });
    }
  },
  Js = class extends L {
    constructor() {
      super("Prefix must be 4 for uncompressed public keys."),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "PublicKey.InvalidUncompressedPrefixError",
        });
    }
  },
  Zs = class extends L {
    constructor({ publicKey: e }) {
      super(`Value \`${e}\` is an invalid public key size.`, {
        metaMessages: [
          "Expected: 33 bytes (compressed + prefix), 64 bytes (uncompressed) or 65 bytes (uncompressed + prefix).",
          `Received ${et(Ge(e))} bytes.`,
        ],
      }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "PublicKey.InvalidSerializedSizeError",
        });
    }
  };
var bm = /^0x[a-fA-F0-9]{40}$/;
function Ne(t, e = {}) {
  let { strict: r = !0 } = e;
  if (!bm.test(t)) throw new Tn({ address: t, cause: new Qs() });
  if (r) {
    if (t.toLowerCase() === t) return;
    if (An(t) !== t) throw new Tn({ address: t, cause: new Xs() });
  }
}
function An(t) {
  if (En.has(t)) return En.get(t);
  Ne(t, { strict: !1 });
  let e = t.substring(2).toLowerCase(),
    r = Re(Vi(e), { as: "Bytes" }),
    o = e.split("");
  for (let s = 0; s < 40; s += 2)
    r[s >> 1] >> 4 >= 8 && o[s] && (o[s] = o[s].toUpperCase()),
      (r[s >> 1] & 15) >= 8 && o[s + 1] && (o[s + 1] = o[s + 1].toUpperCase());
  let n = `0x${o.join("")}`;
  return En.set(t, n), n;
}
function wm(t, e = {}) {
  let { checksum: r = !1 } = e;
  return Ne(t), r ? An(t) : t;
}
function tc(t, e = {}) {
  let r = Re(`0x${Ys(t).slice(4)}`).substring(26);
  return wm(`0x${r}`, e);
}
function In(t, e = {}) {
  let { strict: r = !0 } = e ?? {};
  try {
    return Ne(t, { strict: r }), !0;
  } catch {
    return !1;
  }
}
var Tn = class extends L {
    constructor({ address: e, cause: r }) {
      super(`Address "${e}" is invalid.`, { cause: r }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "Address.InvalidAddressError",
        });
    }
  },
  Qs = class extends L {
    constructor() {
      super("Address is not a 20 byte (40 hexadecimal character) value."),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "Address.InvalidInputError",
        });
    }
  },
  Xs = class extends L {
    constructor() {
      super("Address does not match its checksum counterpart."),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "Address.InvalidChecksumError",
        });
    }
  };
var ec = /^(.*)\[([0-9]*)\]$/,
  rc = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,
  Cn =
    /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/,
  L1 = 2n ** (8n - 1n) - 1n,
  D1 = 2n ** (16n - 1n) - 1n,
  M1 = 2n ** (24n - 1n) - 1n,
  $1 = 2n ** (32n - 1n) - 1n,
  O1 = 2n ** (40n - 1n) - 1n,
  G1 = 2n ** (48n - 1n) - 1n,
  j1 = 2n ** (56n - 1n) - 1n,
  V1 = 2n ** (64n - 1n) - 1n,
  W1 = 2n ** (72n - 1n) - 1n,
  K1 = 2n ** (80n - 1n) - 1n,
  J1 = 2n ** (88n - 1n) - 1n,
  Z1 = 2n ** (96n - 1n) - 1n,
  Y1 = 2n ** (104n - 1n) - 1n,
  Q1 = 2n ** (112n - 1n) - 1n,
  X1 = 2n ** (120n - 1n) - 1n,
  tw = 2n ** (128n - 1n) - 1n,
  ew = 2n ** (136n - 1n) - 1n,
  rw = 2n ** (144n - 1n) - 1n,
  ow = 2n ** (152n - 1n) - 1n,
  nw = 2n ** (160n - 1n) - 1n,
  sw = 2n ** (168n - 1n) - 1n,
  iw = 2n ** (176n - 1n) - 1n,
  aw = 2n ** (184n - 1n) - 1n,
  cw = 2n ** (192n - 1n) - 1n,
  uw = 2n ** (200n - 1n) - 1n,
  mw = 2n ** (208n - 1n) - 1n,
  fw = 2n ** (216n - 1n) - 1n,
  pw = 2n ** (224n - 1n) - 1n,
  dw = 2n ** (232n - 1n) - 1n,
  lw = 2n ** (240n - 1n) - 1n,
  hw = 2n ** (248n - 1n) - 1n,
  xw = 2n ** (256n - 1n) - 1n,
  yw = -(2n ** (8n - 1n)),
  gw = -(2n ** (16n - 1n)),
  bw = -(2n ** (24n - 1n)),
  ww = -(2n ** (32n - 1n)),
  Ew = -(2n ** (40n - 1n)),
  vw = -(2n ** (48n - 1n)),
  Tw = -(2n ** (56n - 1n)),
  Aw = -(2n ** (64n - 1n)),
  Iw = -(2n ** (72n - 1n)),
  Pw = -(2n ** (80n - 1n)),
  Cw = -(2n ** (88n - 1n)),
  Bw = -(2n ** (96n - 1n)),
  kw = -(2n ** (104n - 1n)),
  Sw = -(2n ** (112n - 1n)),
  Rw = -(2n ** (120n - 1n)),
  Nw = -(2n ** (128n - 1n)),
  Fw = -(2n ** (136n - 1n)),
  Hw = -(2n ** (144n - 1n)),
  _w = -(2n ** (152n - 1n)),
  qw = -(2n ** (160n - 1n)),
  zw = -(2n ** (168n - 1n)),
  Uw = -(2n ** (176n - 1n)),
  Lw = -(2n ** (184n - 1n)),
  Dw = -(2n ** (192n - 1n)),
  Mw = -(2n ** (200n - 1n)),
  $w = -(2n ** (208n - 1n)),
  Ow = -(2n ** (216n - 1n)),
  Gw = -(2n ** (224n - 1n)),
  jw = -(2n ** (232n - 1n)),
  Vw = -(2n ** (240n - 1n)),
  Ww = -(2n ** (248n - 1n)),
  Kw = -(2n ** (256n - 1n)),
  Jw = 2n ** 8n - 1n,
  Zw = 2n ** 16n - 1n,
  Yw = 2n ** 24n - 1n,
  Qw = 2n ** 32n - 1n,
  Xw = 2n ** 40n - 1n,
  t2 = 2n ** 48n - 1n,
  e2 = 2n ** 56n - 1n,
  r2 = 2n ** 64n - 1n,
  o2 = 2n ** 72n - 1n,
  n2 = 2n ** 80n - 1n,
  s2 = 2n ** 88n - 1n,
  i2 = 2n ** 96n - 1n,
  a2 = 2n ** 104n - 1n,
  c2 = 2n ** 112n - 1n,
  u2 = 2n ** 120n - 1n,
  m2 = 2n ** 128n - 1n,
  f2 = 2n ** 136n - 1n,
  p2 = 2n ** 144n - 1n,
  d2 = 2n ** 152n - 1n,
  l2 = 2n ** 160n - 1n,
  h2 = 2n ** 168n - 1n,
  x2 = 2n ** 176n - 1n,
  y2 = 2n ** 184n - 1n,
  g2 = 2n ** 192n - 1n,
  b2 = 2n ** 200n - 1n,
  w2 = 2n ** 208n - 1n,
  E2 = 2n ** 216n - 1n,
  v2 = 2n ** 224n - 1n,
  T2 = 2n ** 232n - 1n,
  A2 = 2n ** 240n - 1n,
  I2 = 2n ** 248n - 1n,
  ti = 2n ** 256n - 1n;
function Fe(t, e, r) {
  let { checksumAddress: o, staticPosition: n } = r,
    s = oi(e.type);
  if (s) {
    let [i, a] = s;
    return vm(t, C(x({}, e), { type: a }), {
      checksumAddress: o,
      length: i,
      staticPosition: n,
    });
  }
  if (e.type === "tuple")
    return Pm(t, e, { checksumAddress: o, staticPosition: n });
  if (e.type === "address") return Em(t, { checksum: o });
  if (e.type === "bool") return Tm(t);
  if (e.type.startsWith("bytes")) return Am(t, e, { staticPosition: n });
  if (e.type.startsWith("uint") || e.type.startsWith("int")) return Im(t, e);
  if (e.type === "string") return Cm(t, { staticPosition: n });
  throw new sr(e.type);
}
var nc = 32,
  ei = 32;
function Em(t, e = {}) {
  let { checksum: r = !1 } = e,
    o = t.readBytes(32);
  return [((s) => (r ? An(s) : s))(ct(Wi(o, -20))), 32];
}
function vm(t, e, r) {
  let { checksumAddress: o, length: n, staticPosition: s } = r;
  if (!n) {
    let c = Ct(t.readBytes(ei)),
      m = s + c,
      d = m + nc;
    t.setPosition(m);
    let f = Ct(t.readBytes(nc)),
      p = Zr(e),
      l = 0,
      h = [];
    for (let y = 0; y < f; ++y) {
      t.setPosition(d + (p ? y * 32 : l));
      let [g, b] = Fe(t, e, { checksumAddress: o, staticPosition: d });
      (l += b), h.push(g);
    }
    return t.setPosition(s + 32), [h, 32];
  }
  if (Zr(e)) {
    let c = Ct(t.readBytes(ei)),
      m = s + c,
      d = [];
    for (let f = 0; f < n; ++f) {
      t.setPosition(m + f * 32);
      let [p] = Fe(t, e, { checksumAddress: o, staticPosition: m });
      d.push(p);
    }
    return t.setPosition(s + 32), [d, 32];
  }
  let i = 0,
    a = [];
  for (let c = 0; c < n; ++c) {
    let [m, d] = Fe(t, e, { checksumAddress: o, staticPosition: s + i });
    (i += d), a.push(m);
  }
  return [a, i];
}
function Tm(t) {
  return [Ji(t.readBytes(32), { size: 32 }), 32];
}
function Am(t, e, { staticPosition: r }) {
  let [o, n] = e.type.split("bytes");
  if (!n) {
    let i = Ct(t.readBytes(32));
    t.setPosition(r + i);
    let a = Ct(t.readBytes(32));
    if (a === 0) return t.setPosition(r + 32), ["0x", 32];
    let c = t.readBytes(a);
    return t.setPosition(r + 32), [ct(c), 32];
  }
  return [ct(t.readBytes(Number.parseInt(n, 10), 32)), 32];
}
function Im(t, e) {
  let r = e.type.startsWith("int"),
    o = Number.parseInt(e.type.split("int")[1] || "256", 10),
    n = t.readBytes(32);
  return [o > 48 ? Ki(n, { signed: r }) : Ct(n, { signed: r }), 32];
}
function Pm(t, e, r) {
  let { checksumAddress: o, staticPosition: n } = r,
    s = e.components.length === 0 || e.components.some(({ name: c }) => !c),
    i = s ? [] : {},
    a = 0;
  if (Zr(e)) {
    let c = Ct(t.readBytes(ei)),
      m = n + c;
    for (let d = 0; d < e.components.length; ++d) {
      let f = e.components[d];
      t.setPosition(m + a);
      let [p, l] = Fe(t, f, { checksumAddress: o, staticPosition: m });
      (a += l), (i[s ? d : f?.name] = p);
    }
    return t.setPosition(n + 32), [i, 32];
  }
  for (let c = 0; c < e.components.length; ++c) {
    let m = e.components[c],
      [d, f] = Fe(t, m, { checksumAddress: o, staticPosition: n });
    (i[s ? c : m?.name] = d), (a += f);
  }
  return [i, a];
}
function Cm(t, { staticPosition: e }) {
  let r = Ct(t.readBytes(32)),
    o = e + r;
  t.setPosition(o);
  let n = Ct(t.readBytes(32));
  if (n === 0) return t.setPosition(e + 32), ["", 32];
  let s = t.readBytes(n, 32),
    i = Zi(Yi(s));
  return t.setPosition(e + 32), [i, 32];
}
function sc({ checksumAddress: t, parameters: e, values: r }) {
  let o = [];
  for (let n = 0; n < e.length; n++)
    o.push(ri({ checksumAddress: t, parameter: e[n], value: r[n] }));
  return o;
}
function ri({ checksumAddress: t = !1, parameter: e, value: r }) {
  let o = e,
    n = oi(o.type);
  if (n) {
    let [s, i] = n;
    return km(r, {
      checksumAddress: t,
      length: s,
      parameter: C(x({}, o), { type: i }),
    });
  }
  if (o.type === "tuple") return Hm(r, { checksumAddress: t, parameter: o });
  if (o.type === "address") return Bm(r, { checksum: t });
  if (o.type === "bool") return Rm(r);
  if (o.type.startsWith("uint") || o.type.startsWith("int")) {
    let s = o.type.startsWith("int"),
      [, , i = "256"] = Cn.exec(o.type) ?? [];
    return Nm(r, { signed: s, size: Number(i) });
  }
  if (o.type.startsWith("bytes")) return Sm(r, { type: o.type });
  if (o.type === "string") return Fm(r);
  throw new sr(o.type);
}
function Bn(t) {
  let e = 0;
  for (let s = 0; s < t.length; s++) {
    let { dynamic: i, encoded: a } = t[s];
    i ? (e += 32) : (e += et(a));
  }
  let r = [],
    o = [],
    n = 0;
  for (let s = 0; s < t.length; s++) {
    let { dynamic: i, encoded: a } = t[s];
    i ? (r.push(Y(e + n, { size: 32 })), o.push(a), (n += et(a))) : r.push(a);
  }
  return W(...r, ...o);
}
function Bm(t, e) {
  let { checksum: r = !1 } = e;
  return Ne(t, { strict: r }), { dynamic: !1, encoded: we(t.toLowerCase()) };
}
function km(t, e) {
  let { checksumAddress: r, length: o, parameter: n } = e,
    s = o === null;
  if (!Array.isArray(t)) throw new Sn(t);
  if (!s && t.length !== o)
    throw new kn({
      expectedLength: o,
      givenLength: t.length,
      type: `${n.type}[${o}]`,
    });
  let i = !1,
    a = [];
  for (let c = 0; c < t.length; c++) {
    let m = ri({ checksumAddress: r, parameter: n, value: t[c] });
    m.dynamic && (i = !0), a.push(m);
  }
  if (s || i) {
    let c = Bn(a);
    if (s) {
      let m = Y(a.length, { size: 32 });
      return { dynamic: !0, encoded: a.length > 0 ? W(m, c) : m };
    }
    if (i) return { dynamic: !0, encoded: c };
  }
  return { dynamic: !1, encoded: W(...a.map(({ encoded: c }) => c)) };
}
function Sm(t, { type: e }) {
  let [, r] = e.split("bytes"),
    o = et(t);
  if (!r) {
    let n = t;
    return (
      o % 32 !== 0 && (n = Ee(n, Math.ceil((t.length - 2) / 2 / 32) * 32)),
      { dynamic: !0, encoded: W(we(Y(o, { size: 32 })), n) }
    );
  }
  if (o !== Number.parseInt(r, 10))
    throw new Yr({ expectedSize: Number.parseInt(r, 10), value: t });
  return { dynamic: !1, encoded: Ee(t) };
}
function Rm(t) {
  if (typeof t != "boolean")
    throw new L(
      `Invalid boolean value: "${t}" (type: ${typeof t}). Expected: \`true\` or \`false\`.`
    );
  return { dynamic: !1, encoded: we(Mo(t)) };
}
function Nm(t, { signed: e, size: r }) {
  if (typeof r == "number") {
    let o = 2n ** (BigInt(r) - (e ? 1n : 0n)) - 1n,
      n = e ? -o - 1n : 0n;
    if (t > o || t < n)
      throw new ta({
        max: o.toString(),
        min: n.toString(),
        signed: e,
        size: r / 8,
        value: t.toString(),
      });
  }
  return { dynamic: !1, encoded: Y(t, { size: 32, signed: e }) };
}
function Fm(t) {
  let e = je(t),
    r = Math.ceil(et(e) / 32),
    o = [];
  for (let n = 0; n < r; n++) o.push(Ee(V(e, n * 32, (n + 1) * 32)));
  return { dynamic: !0, encoded: W(Ee(Y(et(e), { size: 32 })), ...o) };
}
function Hm(t, e) {
  let { checksumAddress: r, parameter: o } = e,
    n = !1,
    s = [];
  for (let i = 0; i < o.components.length; i++) {
    let a = o.components[i],
      c = Array.isArray(t) ? i : a.name,
      m = ri({ checksumAddress: r, parameter: a, value: t[c] });
    s.push(m), m.dynamic && (n = !0);
  }
  return {
    dynamic: n,
    encoded: n ? Bn(s) : W(...s.map(({ encoded: i }) => i)),
  };
}
function oi(t) {
  let e = t.match(/^(.*)\[(\d+)?\]$/);
  return e ? [e[2] ? Number(e[2]) : null, e[1]] : void 0;
}
function Zr(t) {
  let { type: e } = t;
  if (e === "string" || e === "bytes" || e.endsWith("[]")) return !0;
  if (e === "tuple") return t.components?.some(Zr);
  let r = oi(t.type);
  return !!(r && Zr(C(x({}, t), { type: r[1] })));
}
var qm = {
  bytes: new Uint8Array(),
  dataView: new DataView(new ArrayBuffer(0)),
  position: 0,
  positionReadCount: new Map(),
  recursiveReadCount: 0,
  recursiveReadLimit: Number.POSITIVE_INFINITY,
  assertReadLimit() {
    if (this.recursiveReadCount >= this.recursiveReadLimit)
      throw new si({
        count: this.recursiveReadCount + 1,
        limit: this.recursiveReadLimit,
      });
  },
  assertPosition(t) {
    if (t < 0 || t > this.bytes.length - 1)
      throw new ni({ length: this.bytes.length, position: t });
  },
  decrementPosition(t) {
    if (t < 0) throw new Rn({ offset: t });
    let e = this.position - t;
    this.assertPosition(e), (this.position = e);
  },
  getReadCount(t) {
    return this.positionReadCount.get(t || this.position) || 0;
  },
  incrementPosition(t) {
    if (t < 0) throw new Rn({ offset: t });
    let e = this.position + t;
    this.assertPosition(e), (this.position = e);
  },
  inspectByte(t) {
    let e = t ?? this.position;
    return this.assertPosition(e), this.bytes[e];
  },
  inspectBytes(t, e) {
    let r = e ?? this.position;
    return this.assertPosition(r + t - 1), this.bytes.subarray(r, r + t);
  },
  inspectUint8(t) {
    let e = t ?? this.position;
    return this.assertPosition(e), this.bytes[e];
  },
  inspectUint16(t) {
    let e = t ?? this.position;
    return this.assertPosition(e + 1), this.dataView.getUint16(e);
  },
  inspectUint24(t) {
    let e = t ?? this.position;
    return (
      this.assertPosition(e + 2),
      (this.dataView.getUint16(e) << 8) + this.dataView.getUint8(e + 2)
    );
  },
  inspectUint32(t) {
    let e = t ?? this.position;
    return this.assertPosition(e + 3), this.dataView.getUint32(e);
  },
  pushByte(t) {
    this.assertPosition(this.position),
      (this.bytes[this.position] = t),
      this.position++;
  },
  pushBytes(t) {
    this.assertPosition(this.position + t.length - 1),
      this.bytes.set(t, this.position),
      (this.position += t.length);
  },
  pushUint8(t) {
    this.assertPosition(this.position),
      (this.bytes[this.position] = t),
      this.position++;
  },
  pushUint16(t) {
    this.assertPosition(this.position + 1),
      this.dataView.setUint16(this.position, t),
      (this.position += 2);
  },
  pushUint24(t) {
    this.assertPosition(this.position + 2),
      this.dataView.setUint16(this.position, t >> 8),
      this.dataView.setUint8(this.position + 2, t & 255),
      (this.position += 3);
  },
  pushUint32(t) {
    this.assertPosition(this.position + 3),
      this.dataView.setUint32(this.position, t),
      (this.position += 4);
  },
  readByte() {
    this.assertReadLimit(), this._touch();
    let t = this.inspectByte();
    return this.position++, t;
  },
  readBytes(t, e) {
    this.assertReadLimit(), this._touch();
    let r = this.inspectBytes(t);
    return (this.position += e ?? t), r;
  },
  readUint8() {
    this.assertReadLimit(), this._touch();
    let t = this.inspectUint8();
    return (this.position += 1), t;
  },
  readUint16() {
    this.assertReadLimit(), this._touch();
    let t = this.inspectUint16();
    return (this.position += 2), t;
  },
  readUint24() {
    this.assertReadLimit(), this._touch();
    let t = this.inspectUint24();
    return (this.position += 3), t;
  },
  readUint32() {
    this.assertReadLimit(), this._touch();
    let t = this.inspectUint32();
    return (this.position += 4), t;
  },
  get remaining() {
    return this.bytes.length - this.position;
  },
  setPosition(t) {
    let e = this.position;
    return (
      this.assertPosition(t), (this.position = t), () => (this.position = e)
    );
  },
  _touch() {
    if (this.recursiveReadLimit === Number.POSITIVE_INFINITY) return;
    let t = this.getReadCount();
    this.positionReadCount.set(this.position, t + 1),
      t > 0 && this.recursiveReadCount++;
  },
};
function Nn(t, { recursiveReadLimit: e = 8192 } = {}) {
  let r = Object.create(qm);
  return (
    (r.bytes = t),
    (r.dataView = new DataView(t.buffer, t.byteOffset, t.byteLength)),
    (r.positionReadCount = new Map()),
    (r.recursiveReadLimit = e),
    r
  );
}
var Rn = class extends L {
    constructor({ offset: e }) {
      super(`Offset \`${e}\` cannot be negative.`),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "Cursor.NegativeOffsetError",
        });
    }
  },
  ni = class extends L {
    constructor({ length: e, position: r }) {
      super(`Position \`${r}\` is out of bounds (\`0 < position < ${e}\`).`),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "Cursor.PositionOutOfBoundsError",
        });
    }
  },
  si = class extends L {
    constructor({ count: e, limit: r }) {
      super(
        `Recursive read limit of \`${r}\` exceeded (recursive read count: \`${e}\`).`
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "Cursor.RecursiveReadLimitExceededError",
        });
    }
  };
function ir(t, e, r = {}) {
  let { as: o = "Array", checksumAddress: n = !1 } = r,
    s = typeof e == "string" ? Ar(e) : e,
    i = Nn(s);
  if (Ir(s) === 0 && t.length > 0) throw new ci();
  if (Ir(s) && Ir(s) < 32)
    throw new ai({
      data: typeof e == "string" ? e : ct(e),
      parameters: t,
      size: Ir(s),
    });
  let a = 0,
    c = o === "Array" ? [] : {};
  for (let m = 0; m < t.length; ++m) {
    let d = t[m];
    i.setPosition(a);
    let [f, p] = Fe(i, d, { checksumAddress: n, staticPosition: 0 });
    (a += p), o === "Array" ? c.push(f) : (c[d.name ?? m] = f);
  }
  return c;
}
function ae(t, e, r) {
  let { checksumAddress: o = !1 } = r ?? {};
  if (t.length !== e.length)
    throw new Fn({ expectedLength: t.length, givenLength: e.length });
  let n = sc({ checksumAddress: o, parameters: t, values: e }),
    s = Bn(n);
  return s.length === 0 ? "0x" : s;
}
function ii(t, e) {
  if (t.length !== e.length)
    throw new Fn({ expectedLength: t.length, givenLength: e.length });
  let r = [];
  for (let o = 0; o < t.length; o++) {
    let n = t[o],
      s = e[o];
    r.push(ii.encode(n, s));
  }
  return W(...r);
}
(function (t) {
  function e(r, o, n = !1) {
    if (r === "address") {
      let c = o;
      return Ne(c), we(c.toLowerCase(), n ? 32 : 0);
    }
    if (r === "string") return je(o);
    if (r === "bytes") return o;
    if (r === "bool") return we(Mo(o), n ? 32 : 1);
    let s = r.match(Cn);
    if (s) {
      let [c, m, d = "256"] = s,
        f = Number.parseInt(d, 10) / 8;
      return Y(o, { size: n ? 32 : f, signed: m === "int" });
    }
    let i = r.match(rc);
    if (i) {
      let [c, m] = i;
      if (Number.parseInt(m, 10) !== (o.length - 2) / 2)
        throw new Yr({ expectedSize: Number.parseInt(m, 10), value: o });
      return Ee(o, n ? 32 : 0);
    }
    let a = r.match(ec);
    if (a && Array.isArray(o)) {
      let [c, m] = a,
        d = [];
      for (let f = 0; f < o.length; f++) d.push(e(m, o[f], !0));
      return d.length === 0 ? "0x" : W(...d);
    }
    throw new sr(r);
  }
  t.encode = e;
})(ii || (ii = {}));
function Xr(t) {
  return Array.isArray(t) && typeof t[0] == "string"
    ? wo(t)
    : typeof t == "string"
    ? wo(t)
    : t;
}
var ai = class extends L {
    constructor({ data: e, parameters: r, size: o }) {
      super(`Data size of ${o} bytes is too small for given parameters.`, {
        metaMessages: [`Params: (${Oi(r)})`, `Data:   ${e} (${o} bytes)`],
      }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "AbiParameters.DataSizeTooSmallError",
        });
    }
  },
  ci = class extends L {
    constructor() {
      super('Cannot decode zero data ("0x") with ABI parameters.'),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "AbiParameters.ZeroDataError",
        });
    }
  },
  kn = class extends L {
    constructor({ expectedLength: e, givenLength: r, type: o }) {
      super(
        `Array length mismatch for type \`${o}\`. Expected: \`${e}\`. Given: \`${r}\`.`
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "AbiParameters.ArrayLengthMismatchError",
        });
    }
  },
  Yr = class extends L {
    constructor({ expectedSize: e, value: r }) {
      super(
        `Size of bytes "${r}" (bytes${et(
          r
        )}) does not match expected size (bytes${e}).`
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "AbiParameters.BytesSizeMismatchError",
        });
    }
  },
  Fn = class extends L {
    constructor({ expectedLength: e, givenLength: r }) {
      super(
        [
          "ABI encoding parameters/values length mismatch.",
          `Expected length (parameters): ${e}`,
          `Given length (values): ${r}`,
        ].join(`
`)
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "AbiParameters.LengthMismatchError",
        });
    }
  },
  Sn = class extends L {
    constructor(e) {
      super(`Value \`${e}\` is not a valid array.`),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "AbiParameters.InvalidArrayError",
        });
    }
  },
  sr = class extends L {
    constructor(e) {
      super(`Type \`${e}\` is not a valid ABI Type.`),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "AbiParameters.InvalidTypeError",
        });
    }
  };
function Um(t, e) {
  let { as: r } = e,
    o = cc(t),
    n = Nn(new Uint8Array(o.length));
  return o.encode(n), r === "Hex" ? ct(n.bytes) : n.bytes;
}
function ac(t, e = {}) {
  let { as: r = "Hex" } = e;
  return Um(t, { as: r });
}
function cc(t) {
  return Array.isArray(t) ? Lm(t.map((e) => cc(e))) : Dm(t);
}
function Lm(t) {
  let e = t.reduce((n, s) => n + s.length, 0),
    r = uc(e);
  return {
    length: e <= 55 ? 1 + e : 1 + r + e,
    encode(n) {
      e <= 55
        ? n.pushByte(192 + e)
        : (n.pushByte(247 + r),
          r === 1
            ? n.pushUint8(e)
            : r === 2
            ? n.pushUint16(e)
            : r === 3
            ? n.pushUint24(e)
            : n.pushUint32(e));
      for (let { encode: s } of t) s(n);
    },
  };
}
function Dm(t) {
  let e = typeof t == "string" ? Ar(t) : t,
    r = uc(e.length);
  return {
    length:
      e.length === 1 && e[0] < 128
        ? 1
        : e.length <= 55
        ? 1 + e.length
        : 1 + r + e.length,
    encode(n) {
      e.length === 1 && e[0] < 128
        ? n.pushBytes(e)
        : e.length <= 55
        ? (n.pushByte(128 + e.length), n.pushBytes(e))
        : (n.pushByte(183 + r),
          r === 1
            ? n.pushUint8(e.length)
            : r === 2
            ? n.pushUint16(e.length)
            : r === 3
            ? n.pushUint24(e.length)
            : n.pushUint32(e.length),
          n.pushBytes(e));
    },
  };
}
function uc(t) {
  if (t < 2 ** 8) return 1;
  if (t < 2 ** 16) return 2;
  if (t < 2 ** 24) return 3;
  if (t < 2 ** 32) return 4;
  throw new L("Length is too large.");
}
function di(t, e = {}) {
  let { recovered: r } = e;
  if (typeof t.r > "u") throw new to({ signature: t });
  if (typeof t.s > "u") throw new to({ signature: t });
  if (r && typeof t.yParity > "u") throw new to({ signature: t });
  if (t.r < 0n || t.r > ti) throw new mi({ value: t.r });
  if (t.s < 0n || t.s > ti) throw new fi({ value: t.s });
  if (typeof t.yParity == "number" && t.yParity !== 0 && t.yParity !== 1)
    throw new eo({ value: t.yParity });
}
function $m(t) {
  return mc(ct(t));
}
function mc(t) {
  if (t.length !== 130 && t.length !== 132) throw new ui({ signature: t });
  let e = BigInt(V(t, 0, 32)),
    r = BigInt(V(t, 32, 64)),
    o = (() => {
      let n = +`0x${t.slice(130)}`;
      if (!Number.isNaN(n))
        try {
          return xi(n);
        } catch {
          throw new eo({ value: n });
        }
    })();
  return typeof o > "u" ? { r: e, s: r } : { r: e, s: r, yParity: o };
}
function li(t) {
  if (!(typeof t.r > "u") && !(typeof t.s > "u")) return hi(t);
}
function hi(t) {
  let e =
    typeof t == "string"
      ? mc(t)
      : t instanceof Uint8Array
      ? $m(t)
      : typeof t.r == "string"
      ? Gm(t)
      : t.v
      ? Om(t)
      : x(
          { r: t.r, s: t.s },
          typeof t.yParity < "u" ? { yParity: t.yParity } : {}
        );
  return di(e), e;
}
function Om(t) {
  return { r: t.r, s: t.s, yParity: xi(t.v) };
}
function Gm(t) {
  let e = (() => {
    let r = t.v ? Number(t.v) : void 0,
      o = t.yParity ? Number(t.yParity) : void 0;
    if (
      (typeof r == "number" && typeof o != "number" && (o = xi(r)),
      typeof o != "number")
    )
      throw new eo({ value: t.yParity });
    return o;
  })();
  return { r: BigInt(t.r), s: BigInt(t.s), yParity: e };
}
function fc(t) {
  let { r: e, s: r, yParity: o } = t;
  return [
    o ? "0x01" : "0x",
    e === 0n ? "0x" : ds(Y(e)),
    r === 0n ? "0x" : ds(Y(r)),
  ];
}
function xi(t) {
  if (t === 0 || t === 27) return 0;
  if (t === 1 || t === 28) return 1;
  if (t >= 35) return t % 2 === 0 ? 1 : 0;
  throw new pi({ value: t });
}
var ui = class extends L {
    constructor({ signature: e }) {
      super(`Value \`${e}\` is an invalid signature size.`, {
        metaMessages: [
          "Expected: 64 bytes or 65 bytes.",
          `Received ${et(Ge(e))} bytes.`,
        ],
      }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "Signature.InvalidSerializedSizeError",
        });
    }
  },
  to = class extends L {
    constructor({ signature: e }) {
      super(
        `Signature \`${Do(
          e
        )}\` is missing either an \`r\`, \`s\`, or \`yParity\` property.`
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "Signature.MissingPropertiesError",
        });
    }
  },
  mi = class extends L {
    constructor({ value: e }) {
      super(
        `Value \`${e}\` is an invalid r value. r must be a positive integer less than 2^256.`
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "Signature.InvalidRError",
        });
    }
  },
  fi = class extends L {
    constructor({ value: e }) {
      super(
        `Value \`${e}\` is an invalid s value. s must be a positive integer less than 2^256.`
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "Signature.InvalidSError",
        });
    }
  },
  eo = class extends L {
    constructor({ value: e }) {
      super(
        `Value \`${e}\` is an invalid y-parity value. Y-parity must be 0 or 1.`
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "Signature.InvalidYParityError",
        });
    }
  },
  pi = class extends L {
    constructor({ value: e }) {
      super(`Value \`${e}\` is an invalid v value. v must be 27, 28 or >=35.`),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "Signature.InvalidVError",
        });
    }
  };
function dc(t, e = {}) {
  return typeof t.chainId == "string" ? jm(t) : x(x({}, t), e.signature);
}
function jm(t) {
  let { address: e, chainId: r, nonce: o } = t,
    n = li(t);
  return x({ address: e, chainId: Number(r), nonce: BigInt(o) }, n);
}
function lc(t) {
  return Vm(t, { presign: !0 });
}
function Vm(t, e = {}) {
  let { presign: r } = e;
  return Re(
    W(
      "0x05",
      ac(Wm(r ? { address: t.address, chainId: t.chainId, nonce: t.nonce } : t))
    )
  );
}
function Wm(t) {
  let { address: e, chainId: r, nonce: o } = t,
    n = li(t);
  return [r ? Y(r) : "0x", e, o ? Y(o) : "0x", ...(n ? fc(n) : [])];
}
function hc(t) {
  return tc(Jm(t));
}
function Jm(t) {
  let { payload: e, signature: r } = t,
    { r: o, s: n, yParity: s } = r,
    a = new kt.Signature(BigInt(o), BigInt(n))
      .addRecoveryBit(s)
      .recoverPublicKey(Ge(e).substring(2));
  return Ya(a);
}
var yi = "0x8010801080108010801080108010801080108010801080108010801080108010",
  gi = Xr(
    "(uint256 chainId, address delegation, uint256 nonce, uint8 yParity, uint256 r, uint256 s), address to, bytes data"
  );
function _n(t) {
  if (typeof t == "string") {
    if (V(t, -32) !== yi) throw new Hn(t);
  } else di(t.authorization);
}
function Ym(t) {
  return typeof t == "string" ? xc(t) : t;
}
function xc(t) {
  _n(t);
  let e = Xi(V(t, -64, -32)),
    r = V(t, -e - 64, -64),
    o = V(t, 0, -e - 64),
    [n, s, i] = ir(gi, r),
    a = dc({
      address: n.delegation,
      chainId: Number(n.chainId),
      nonce: n.nonce,
      yParity: n.yParity,
      r: n.r,
      s: n.s,
    });
  return x(
    { authorization: a, signature: o },
    i && i !== "0x" ? { data: i, to: s } : {}
  );
}
function Qm(t) {
  let { data: e, signature: r } = t;
  _n(t);
  let o = hc({ payload: lc(t.authorization), signature: hi(t.authorization) }),
    n = ae(gi, [
      C(x({}, t.authorization), {
        delegation: t.authorization.address,
        chainId: BigInt(t.authorization.chainId),
      }),
      t.to ?? o,
      e ?? "0x",
    ]),
    s = Y(et(n), { size: 32 });
  return W(r, n, s, yi);
}
function Xm(t) {
  try {
    return _n(t), !0;
  } catch {
    return !1;
  }
}
var Hn = class extends L {
  constructor(e) {
    super(`Value \`${e}\` is an invalid ERC-8010 wrapped signature.`),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "SignatureErc8010.InvalidWrappedSignatureError",
      });
  }
};
function bi(t) {
  return At.validate(t);
}
function tf(t) {
  if (!js(t)) return { signature: t };
  let [e, r, o] = Kt(
    [{ type: "address" }, { type: "bytes" }, { type: "bytes" }],
    t
  );
  return { address: e, data: r, signature: o };
}
function ef(t) {
  if (!bi(t)) return { signature: t };
  let n = At.unwrap(t),
    { authorization: e, to: r } = n,
    o = _(n, ["authorization", "to"]);
  return x(
    x(
      {
        authorization: {
          address: e.address,
          chainId: e.chainId,
          nonce: Number(e.nonce),
          r: T(e.r, { size: 32 }),
          s: T(e.s, { size: 32 }),
          yParity: e.yParity,
        },
      },
      r ? { address: r } : {}
    ),
    o
  );
}
function wi(r) {
  return u(this, arguments, function* ({ message: t, signature: e }) {
    return xt({ hash: Se(t), signature: e });
  });
}
function Ei(t) {
  return u(this, null, function* () {
    let { domain: e, message: r, primaryType: o, signature: n, types: s } = t;
    return xt({
      hash: Kr({ domain: e, message: r, primaryType: o, types: s }),
      signature: n,
    });
  });
}
function rf(t) {
  let { address: e, data: r, signature: o, to: n = "hex" } = t,
    s = Pt([
      Wt(
        [{ type: "address" }, { type: "bytes" }, { type: "bytes" }],
        [e, r, o]
      ),
      bn,
    ]);
  return n === "hex" ? s : tt(s);
}
function of(t) {
  let { address: e, data: r, signature: o, to: n = "hex" } = t,
    s = At.wrap({
      authorization: {
        address: t.authorization.address,
        chainId: t.authorization.chainId,
        nonce: BigInt(t.authorization.nonce),
        r: BigInt(t.authorization.r),
        s: BigInt(t.authorization.s),
        yParity: t.authorization.yParity,
      },
      data: r,
      signature: o,
      to: e,
    });
  return n === "hex" ? s : tt(s);
}
function nf(o) {
  return u(this, arguments, function* ({ address: t, hash: e, signature: r }) {
    return rt(Q(t), yield xt({ hash: e, signature: r }));
  });
}
function sf(o) {
  return u(
    this,
    arguments,
    function* ({ address: t, message: e, signature: r }) {
      return rt(Q(t), yield wi({ message: e, signature: r }));
    }
  );
}
function af(t) {
  return u(this, null, function* () {
    let {
      address: e,
      domain: r,
      message: o,
      primaryType: n,
      signature: s,
      types: i,
    } = t;
    return rt(
      Q(e),
      yield Ei({
        domain: r,
        message: o,
        primaryType: n,
        signature: s,
        types: i,
      })
    );
  });
}
function vi(t) {
  let e = Vt(t, 0, 1);
  if (e === "0x04") return "eip7702";
  if (e === "0x03") return "eip4844";
  if (e === "0x02") return "eip1559";
  if (e === "0x01") return "eip2930";
  if (e !== "0x" && M(e) >= 192) return "legacy";
  throw new as({ serializedType: e });
}
function Ti(t) {
  let e = vi(t);
  return e === "eip1559"
    ? mf(t)
    : e === "eip2930"
    ? ff(t)
    : e === "eip4844"
    ? uf(t)
    : e === "eip7702"
    ? cf(t)
    : pf(t);
}
function cf(t) {
  let e = qn(t),
    [r, o, n, s, i, a, c, m, d, f, p, l, h] = e;
  if (e.length !== 10 && e.length !== 13)
    throw new le({
      attributes: x(
        {
          chainId: r,
          nonce: o,
          maxPriorityFeePerGas: n,
          maxFeePerGas: s,
          gas: i,
          to: a,
          value: c,
          data: m,
          accessList: d,
          authorizationList: f,
        },
        e.length > 9 ? { v: p, r: l, s: h } : {}
      ),
      serializedTransaction: t,
      type: "eip7702",
    });
  let y = { chainId: M(r), type: "eip7702" };
  H(a) && a !== "0x" && (y.to = a),
    H(i) && i !== "0x" && (y.gas = q(i)),
    H(m) && m !== "0x" && (y.data = m),
    H(o) && (y.nonce = o === "0x" ? 0 : M(o)),
    H(c) && c !== "0x" && (y.value = q(c)),
    H(s) && s !== "0x" && (y.maxFeePerGas = q(s)),
    H(n) && n !== "0x" && (y.maxPriorityFeePerGas = q(n)),
    d.length !== 0 && d !== "0x" && (y.accessList = zn(d)),
    f.length !== 0 && f !== "0x" && (y.authorizationList = df(f)),
    oa(y);
  let g = e.length === 13 ? ro(e) : void 0;
  return x(x({}, g), y);
}
function uf(t) {
  let e = qn(t),
    r = e.length === 4,
    o = r ? e[0] : e,
    n = r ? e.slice(1) : [],
    [s, i, a, c, m, d, f, p, l, h, y, g, b, w] = o,
    [E, A, B] = n;
  if (!(o.length === 11 || o.length === 14))
    throw new le({
      attributes: x(
        {
          chainId: s,
          nonce: i,
          maxPriorityFeePerGas: a,
          maxFeePerGas: c,
          gas: m,
          to: d,
          value: f,
          data: p,
          accessList: l,
        },
        o.length > 9 ? { v: g, r: b, s: w } : {}
      ),
      serializedTransaction: t,
      type: "eip4844",
    });
  let P = { blobVersionedHashes: y, chainId: M(s), to: d, type: "eip4844" };
  H(m) && m !== "0x" && (P.gas = q(m)),
    H(p) && p !== "0x" && (P.data = p),
    H(i) && (P.nonce = i === "0x" ? 0 : M(i)),
    H(f) && f !== "0x" && (P.value = q(f)),
    H(h) && h !== "0x" && (P.maxFeePerBlobGas = q(h)),
    H(c) && c !== "0x" && (P.maxFeePerGas = q(c)),
    H(a) && a !== "0x" && (P.maxPriorityFeePerGas = q(a)),
    l.length !== 0 && l !== "0x" && (P.accessList = zn(l)),
    E && A && B && (P.sidecars = Sr({ blobs: E, commitments: A, proofs: B })),
    na(P);
  let I = o.length === 14 ? ro(o) : void 0;
  return x(x({}, I), P);
}
function mf(t) {
  let e = qn(t),
    [r, o, n, s, i, a, c, m, d, f, p, l] = e;
  if (!(e.length === 9 || e.length === 12))
    throw new le({
      attributes: x(
        {
          chainId: r,
          nonce: o,
          maxPriorityFeePerGas: n,
          maxFeePerGas: s,
          gas: i,
          to: a,
          value: c,
          data: m,
          accessList: d,
        },
        e.length > 9 ? { v: f, r: p, s: l } : {}
      ),
      serializedTransaction: t,
      type: "eip1559",
    });
  let h = { chainId: M(r), type: "eip1559" };
  H(a) && a !== "0x" && (h.to = a),
    H(i) && i !== "0x" && (h.gas = q(i)),
    H(m) && m !== "0x" && (h.data = m),
    H(o) && (h.nonce = o === "0x" ? 0 : M(o)),
    H(c) && c !== "0x" && (h.value = q(c)),
    H(s) && s !== "0x" && (h.maxFeePerGas = q(s)),
    H(n) && n !== "0x" && (h.maxPriorityFeePerGas = q(n)),
    d.length !== 0 && d !== "0x" && (h.accessList = zn(d)),
    vs(h);
  let y = e.length === 12 ? ro(e) : void 0;
  return x(x({}, y), h);
}
function ff(t) {
  let e = qn(t),
    [r, o, n, s, i, a, c, m, d, f, p] = e;
  if (!(e.length === 8 || e.length === 11))
    throw new le({
      attributes: x(
        {
          chainId: r,
          nonce: o,
          gasPrice: n,
          gas: s,
          to: i,
          value: a,
          data: c,
          accessList: m,
        },
        e.length > 8 ? { v: d, r: f, s: p } : {}
      ),
      serializedTransaction: t,
      type: "eip2930",
    });
  let l = { chainId: M(r), type: "eip2930" };
  H(i) && i !== "0x" && (l.to = i),
    H(s) && s !== "0x" && (l.gas = q(s)),
    H(c) && c !== "0x" && (l.data = c),
    H(o) && (l.nonce = o === "0x" ? 0 : M(o)),
    H(a) && a !== "0x" && (l.value = q(a)),
    H(n) && n !== "0x" && (l.gasPrice = q(n)),
    m.length !== 0 && m !== "0x" && (l.accessList = zn(m)),
    Ts(l);
  let h = e.length === 11 ? ro(e) : void 0;
  return x(x({}, h), l);
}
function pf(t) {
  let e = xn(t, "hex"),
    [r, o, n, s, i, a, c, m, d] = e;
  if (!(e.length === 6 || e.length === 9))
    throw new le({
      attributes: x(
        { nonce: r, gasPrice: o, gas: n, to: s, value: i, data: a },
        e.length > 6 ? { v: c, r: m, s: d } : {}
      ),
      serializedTransaction: t,
      type: "legacy",
    });
  let f = { type: "legacy" };
  if (
    (H(s) && s !== "0x" && (f.to = s),
    H(n) && n !== "0x" && (f.gas = q(n)),
    H(a) && a !== "0x" && (f.data = a),
    H(r) && (f.nonce = r === "0x" ? 0 : M(r)),
    H(i) && i !== "0x" && (f.value = q(i)),
    H(o) && o !== "0x" && (f.gasPrice = q(o)),
    As(f),
    e.length === 6)
  )
    return f;
  let p = H(c) && c !== "0x" ? q(c) : 0n;
  if (d === "0x" && m === "0x") return p > 0 && (f.chainId = Number(p)), f;
  let l = p,
    h = Number((l - 35n) / 2n);
  if (h > 0) f.chainId = h;
  else if (l !== 27n && l !== 28n) throw new is({ v: l });
  return (
    (f.v = l), (f.s = d), (f.r = m), (f.yParity = l % 2n === 0n ? 1 : 0), f
  );
}
function qn(t) {
  return xn(`0x${t.slice(4)}`, "hex");
}
function zn(t) {
  let e = [];
  for (let r = 0; r < t.length; r++) {
    let [o, n] = t[r];
    if (!qt(o, { strict: !1 })) throw new pe({ address: o });
    e.push({ address: o, storageKeys: n.map((s) => (zs(s) ? s : de(s))) });
  }
  return e;
}
function df(t) {
  let e = [];
  for (let r = 0; r < t.length; r++) {
    let [o, n, s, i, a, c] = t[r];
    e.push(
      x(
        {
          address: n,
          chainId: o === "0x" ? 0 : M(o),
          nonce: s === "0x" ? 0 : M(s),
        },
        ro([i, a, c])
      )
    );
  }
  return e;
}
function ro(t) {
  let e = t.slice(-3),
    r = e[0] === "0x" || q(e[0]) === 0n ? 27n : 28n;
  return {
    r: xr(e[1], { size: 32 }),
    s: xr(e[2], { size: 32 }),
    v: r,
    yParity: r === 27n ? 0 : 1,
  };
}
var oo = class extends N {
  constructor({ value: e }) {
    super(`Number \`${e}\` is not a valid decimal number.`, {
      name: "InvalidDecimalNumberError",
    });
  }
};
function no(t, e) {
  if (!/^(-?)([0-9]*)\.?([0-9]*)$/.test(t)) throw new oo({ value: t });
  let [r, o = "0"] = t.split("."),
    n = r.startsWith("-");
  if ((n && (r = r.slice(1)), (o = o.replace(/(0+)$/, "")), e === 0))
    Math.round(+`.${o}`) === 1 && (r = `${BigInt(r) + 1n}`), (o = "");
  else if (o.length > e) {
    let [s, i, a] = [o.slice(0, e - 1), o.slice(e - 1, e), o.slice(e)],
      c = Math.round(+`${i}.${a}`);
    c > 9
      ? (o = `${BigInt(s) + BigInt(1)}0`.padStart(s.length + 1, "0"))
      : (o = `${s}${c}`),
      o.length > e && ((o = o.slice(1)), (r = `${BigInt(r) + 1n}`)),
      (o = o.slice(0, e));
  } else o = o.padEnd(e, "0");
  return BigInt(`${n ? "-" : ""}${r}${o}`);
}
function lf(t, e = "wei") {
  return no(t, os[e]);
}
function hf(t, e = "wei") {
  return no(t, ns[e]);
}
function bf(t) {
  return t.map((e) => C(x({}, e), { value: BigInt(e.value) }));
}
function yc(t) {
  return C(x({}, t), {
    balance: t.balance ? BigInt(t.balance) : void 0,
    nonce: t.nonce ? M(t.nonce) : void 0,
    storageProof: t.storageProof ? bf(t.storageProof) : void 0,
  });
}
function gc(s, i) {
  return u(
    this,
    arguments,
    function* (t, { address: e, blockNumber: r, blockTag: o, storageKeys: n }) {
      let a = o ?? "latest",
        c = r !== void 0 ? T(r) : void 0,
        m = yield t.request({ method: "eth_getProof", params: [e, n, c || a] });
      return yc(m);
    }
  );
}
function bc(s, i) {
  return u(
    this,
    arguments,
    function* (
      t,
      { address: e, blockNumber: r, blockTag: o = "latest", slot: n }
    ) {
      let a = r !== void 0 ? T(r) : void 0;
      return yield t.request({
        method: "eth_getStorageAt",
        params: [e, n, a || o],
      });
    }
  );
}
function ar(i, a) {
  return u(
    this,
    arguments,
    function* (
      t,
      { blockHash: e, blockNumber: r, blockTag: o, hash: n, index: s }
    ) {
      let c = o || "latest",
        m = r !== void 0 ? T(r) : void 0,
        d = null;
      if (
        (n
          ? (d = yield t.request(
              { method: "eth_getTransactionByHash", params: [n] },
              { dedupe: !0 }
            ))
          : e
          ? (d = yield t.request(
              {
                method: "eth_getTransactionByBlockHashAndIndex",
                params: [e, T(s)],
              },
              { dedupe: !0 }
            ))
          : (m || c) &&
            (d = yield t.request(
              {
                method: "eth_getTransactionByBlockNumberAndIndex",
                params: [m || c, T(s)],
              },
              { dedupe: !!m }
            )),
        !d)
      )
        throw new wr({
          blockHash: e,
          blockNumber: r,
          blockTag: c,
          hash: n,
          index: s,
        });
      return (t.chain?.formatters?.transaction?.format || xs)(
        d,
        "getTransaction"
      );
    }
  );
}
function wc(o, n) {
  return u(this, arguments, function* (t, { hash: e, transactionReceipt: r }) {
    let [s, i] = yield Promise.all([
        v(t, Nt, "getBlockNumber")({}),
        e ? v(t, ar, "getTransaction")({ hash: e }) : void 0,
      ]),
      a = r?.blockNumber || i?.blockNumber;
    return a ? s - a + 1n : 0n;
  });
}
function cr(r, o) {
  return u(this, arguments, function* (t, { hash: e }) {
    let n = yield t.request(
      { method: "eth_getTransactionReceipt", params: [e] },
      { dedupe: !0 }
    );
    if (!n) throw new Er({ hash: e });
    return (
      t.chain?.formatters?.transactionReceipt?.format || Rr
    )(n, "getTransactionReceipt");
  });
}
function Ec(t, e) {
  return u(this, null, function* () {
    let {
        account: r,
        authorizationList: o,
        allowFailure: n = !0,
        blockNumber: s,
        blockOverrides: i,
        blockTag: a,
        stateOverride: c,
      } = e,
      m = e.contracts,
      {
        batchSize: d = e.batchSize ?? 1024,
        deployless: f = e.deployless ?? !1,
      } = typeof t.batch?.multicall == "object" ? t.batch.multicall : {},
      p = (() => {
        if (e.multicallAddress) return e.multicallAddress;
        if (f) return null;
        if (t.chain)
          return vt({ blockNumber: s, chain: t.chain, contract: "multicall3" });
        throw new Error(
          "client chain not configured. multicallAddress is required."
        );
      })(),
      l = [[]],
      h = 0,
      y = 0;
    for (let w = 0; w < m.length; w++) {
      let { abi: E, address: A, args: B, functionName: P } = m[w];
      try {
        let I = j({ abi: E, args: B, functionName: P });
        (y += (I.length - 2) / 2),
          d > 0 &&
            y > d &&
            l[h].length > 0 &&
            (h++, (y = (I.length - 2) / 2), (l[h] = [])),
          (l[h] = [...l[h], { allowFailure: !0, callData: I, target: A }]);
      } catch (I) {
        let k = dt(I, {
          abi: E,
          address: A,
          args: B,
          docsPath: "/docs/contract/multicall",
          functionName: P,
          sender: r,
        });
        if (!n) throw k;
        l[h] = [...l[h], { allowFailure: !0, callData: "0x", target: A }];
      }
    }
    let g = yield Promise.allSettled(
        l.map((w) =>
          v(
            t,
            K,
            "readContract"
          )(
            C(x({}, p === null ? { code: Oo } : { address: p }), {
              abi: pr,
              account: r,
              args: [w],
              authorizationList: o,
              blockNumber: s,
              blockOverrides: i,
              blockTag: a,
              functionName: "aggregate3",
              stateOverride: c,
            })
          )
        )
      ),
      b = [];
    for (let w = 0; w < g.length; w++) {
      let E = g[w];
      if (E.status === "rejected") {
        if (!n) throw E.reason;
        for (let B = 0; B < l[w].length; B++)
          b.push({ status: "failure", error: E.reason, result: void 0 });
        continue;
      }
      let A = E.value;
      for (let B = 0; B < A.length; B++) {
        let { returnData: P, success: I } = A[B],
          { callData: k } = l[w][B],
          { abi: S, address: R, functionName: z, args: F } = m[b.length];
        try {
          if (k === "0x") throw new fe();
          if (!I) throw new he({ data: P });
          let J = ht({ abi: S, args: F, data: P, functionName: z });
          b.push(n ? { result: J, status: "success" } : J);
        } catch (J) {
          let G = dt(J, {
            abi: S,
            address: R,
            args: F,
            docsPath: "/docs/contract/multicall",
            functionName: z,
          });
          if (!n) throw G;
          b.push({ error: G, result: void 0, status: "failure" });
        }
      }
    }
    if (b.length !== m.length) throw new N("multicall results mismatch");
    return b;
  });
}
function so(t, e) {
  return u(this, null, function* () {
    let {
      blockNumber: r,
      blockTag: o = t.experimental_blockTag ?? "latest",
      blocks: n,
      returnFullTransactions: s,
      traceTransfers: i,
      validation: a,
    } = e;
    try {
      let c = [];
      for (let p of n) {
        let l = p.blockOverrides ? ea(p.blockOverrides) : void 0,
          h = p.calls.map((g) => {
            let b = g,
              w = b.account ? D(b.account) : void 0,
              E = b.abi ? j(b) : b.data,
              A = C(x({}, b), {
                data: b.dataSuffix ? pt([E || "0x", b.dataSuffix]) : E,
                from: b.from ?? w?.address,
              });
            return mt(A), ut(A);
          }),
          y = p.stateOverrides ? Vo(p.stateOverrides) : void 0;
        c.push({ blockOverrides: l, calls: h, stateOverrides: y });
      }
      let d = (typeof r == "bigint" ? T(r) : void 0) || o;
      return (yield t.request({
        method: "eth_simulateV1",
        params: [
          {
            blockStateCalls: c,
            returnFullTransactions: s,
            traceTransfers: i,
            validation: a,
          },
          d,
        ],
      })).map((p, l) =>
        C(x({}, kr(p)), {
          calls: p.calls.map((h, y) => {
            let { abi: g, args: b, functionName: w, to: E } = n[l].calls[y],
              A = h.error?.data ?? h.returnData,
              B = BigInt(h.gasUsed),
              P = h.logs?.map((R) => ft(R)),
              I = h.status === "0x1" ? "success" : "failure",
              k =
                g && I === "success" && A !== "0x"
                  ? ht({ abi: g, data: A, functionName: w })
                  : null,
              S = (() => {
                if (I === "success") return;
                let R;
                if (
                  (h.error?.data === "0x"
                    ? (R = new fe())
                    : h.error && (R = new he(h.error)),
                  !!R)
                )
                  return dt(R, {
                    abi: g ?? [],
                    address: E ?? "0x",
                    args: b,
                    functionName: w ?? "<unknown>",
                  });
              })();
            return x(
              { data: A, gasUsed: B, logs: P, status: I },
              I === "success" ? { result: k } : { error: S }
            );
          }),
        })
      );
    } catch (c) {
      let m = c,
        d = Ve(m, {});
      throw d instanceof ve ? m : d;
    }
  });
}
function Ln(t) {
  let e = !0,
    r = "",
    o = 0,
    n = "",
    s = !1;
  for (let i = 0; i < t.length; i++) {
    let a = t[i];
    if (
      (["(", ")", ","].includes(a) && (e = !0),
      a === "(" && o++,
      a === ")" && o--,
      !!e)
    ) {
      if (o === 0) {
        if (a === " " && ["event", "function", "error", ""].includes(n)) n = "";
        else if (((n += a), a === ")")) {
          s = !0;
          break;
        }
        continue;
      }
      if (a === " ") {
        t[i - 1] !== "," && r !== "," && r !== ",(" && ((r = ""), (e = !1));
        continue;
      }
      (n += a), (r += a);
    }
  }
  if (!s) throw new L("Unable to normalize signature.");
  return n;
}
function Un(t, e) {
  let r = typeof t,
    o = e.type;
  switch (o) {
    case "address":
      return In(t, { strict: !1 });
    case "bool":
      return r === "boolean";
    case "function":
      return r === "string";
    case "string":
      return r === "string";
    default:
      return o === "tuple" && "components" in e
        ? Object.values(e.components).every((n, s) =>
            Un(Object.values(t)[s], n)
          )
        : /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(
            o
          )
        ? r === "number" || r === "bigint"
        : /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(o)
        ? r === "string" || t instanceof Uint8Array
        : /[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(o)
        ? Array.isArray(t) &&
          t.every((n) =>
            Un(n, C(x({}, e), { type: o.replace(/(\[[0-9]{0,}\])$/, "") }))
          )
        : !1;
  }
}
function Ai(t, e, r) {
  for (let o in t) {
    let n = t[o],
      s = e[o];
    if (
      n.type === "tuple" &&
      s.type === "tuple" &&
      "components" in n &&
      "components" in s
    )
      return Ai(n.components, s.components, r[o]);
    let i = [n.type, s.type];
    if (
      i.includes("address") && i.includes("bytes20")
        ? !0
        : i.includes("address") && i.includes("string")
        ? In(r[o], { strict: !1 })
        : i.includes("address") && i.includes("bytes")
        ? In(r[o], { strict: !1 })
        : !1
    )
      return i;
  }
}
function Dn(t, e = {}) {
  let { prepare: r = !0 } = e,
    o = Array.isArray(t) ? bo(t) : typeof t == "string" ? bo(t) : t;
  return x(x({}, o), r ? { hash: ur(o) } : {});
}
function io(t, e, r) {
  let { args: o = [], prepare: n = !0 } = r ?? {},
    s = Pr(e, { strict: !1 }),
    i = t.filter((m) =>
      s
        ? m.type === "function" || m.type === "error"
          ? Pi(m) === V(e, 0, 4)
          : m.type === "event"
          ? ur(m) === e
          : !1
        : "name" in m && m.name === e
    );
  if (i.length === 0) throw new ce({ name: e });
  if (i.length === 1) return x(x({}, i[0]), n ? { hash: ur(i[0]) } : {});
  let a;
  for (let m of i) {
    if (!("inputs" in m)) continue;
    if (!o || o.length === 0) {
      if (!m.inputs || m.inputs.length === 0)
        return x(x({}, m), n ? { hash: ur(m) } : {});
      continue;
    }
    if (!m.inputs || m.inputs.length === 0 || m.inputs.length !== o.length)
      continue;
    if (
      o.every((f, p) => {
        let l = "inputs" in m && m.inputs[p];
        return l ? Un(f, l) : !1;
      })
    ) {
      if (a && "inputs" in a && a.inputs) {
        let f = Ai(m.inputs, a.inputs, o);
        if (f)
          throw new Ii({ abiItem: m, type: f[0] }, { abiItem: a, type: f[1] });
      }
      a = m;
    }
  }
  let c = (() => {
    if (a) return a;
    let [m, ...d] = i;
    return C(x({}, m), { overloads: d });
  })();
  if (!c) throw new ce({ name: e });
  return x(x({}, c), n ? { hash: ur(c) } : {});
}
function Pi(...t) {
  let e = (() => {
    if (Array.isArray(t[0])) {
      let [r, o] = t;
      return io(r, o);
    }
    return t[0];
  })();
  return V(ur(e), 0, 4);
}
function Ef(...t) {
  let e = (() => {
      if (Array.isArray(t[0])) {
        let [o, n] = t;
        return io(o, n);
      }
      return t[0];
    })(),
    r = typeof e == "string" ? e : go(e);
  return Ln(r);
}
function ur(...t) {
  let e = (() => {
    if (Array.isArray(t[0])) {
      let [r, o] = t;
      return io(r, o);
    }
    return t[0];
  })();
  return typeof e != "string" && "hash" in e && e.hash ? e.hash : Re(je(Ef(e)));
}
var Ii = class extends L {
    constructor(e, r) {
      super("Found ambiguous types in overloaded ABI Items.", {
        metaMessages: [
          `\`${e.type}\` in \`${Ln(go(e.abiItem))}\`, and`,
          `\`${r.type}\` in \`${Ln(go(r.abiItem))}\``,
          "",
          "These types encode differently and cannot be distinguished at runtime.",
          "Remove one of the ambiguous items in the ABI.",
        ],
      }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "AbiItem.AmbiguityError",
        });
    }
  },
  ce = class extends L {
    constructor({ name: e, data: r, type: o = "item" }) {
      let n = e ? ` with name "${e}"` : r ? ` with data "${r}"` : "";
      super(`ABI ${o}${n} not found.`),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "AbiItem.NotFoundError",
        });
    }
  };
function Tc(...t) {
  let [e, r] = (() => {
      if (Array.isArray(t[0])) {
        let [s, i] = t;
        return [vf(s), i];
      }
      return t;
    })(),
    { bytecode: o, args: n } = r;
  return W(o, e.inputs?.length && n?.length ? ae(e.inputs, n) : "0x");
}
function Ac(t) {
  return Dn(t);
}
function vf(t) {
  let e = t.find((r) => r.type === "constructor");
  if (!e) throw new ce({ name: "constructor" });
  return e;
}
function Pc(...t) {
  let [e, r = []] = (() => {
      if (Array.isArray(t[0])) {
        let [m, d, f] = t;
        return [Ic(m, d, { args: f }), f];
      }
      let [a, c] = t;
      return [a, c];
    })(),
    { overloads: o } = e,
    n = o ? Ic([e, ...o], e.name, { args: r }) : e,
    s = Af(n),
    i = r.length > 0 ? ae(n.inputs, r) : void 0;
  return i ? W(s, i) : s;
}
function He(t, e = {}) {
  return Dn(t, e);
}
function Ic(t, e, r) {
  let o = io(t, e, r);
  if (o.type !== "function") throw new ce({ name: e, type: "function" });
  return o;
}
function Af(t) {
  return Pi(t);
}
var Ci = "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
  wt = "0x0000000000000000000000000000000000000000";
var Pf =
  "0x6080604052348015600e575f80fd5b5061016d8061001c5f395ff3fe608060405234801561000f575f80fd5b5060043610610029575f3560e01c8063f8b2cb4f1461002d575b5f80fd5b610047600480360381019061004291906100db565b61005d565b604051610054919061011e565b60405180910390f35b5f8173ffffffffffffffffffffffffffffffffffffffff16319050919050565b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6100aa82610081565b9050919050565b6100ba816100a0565b81146100c4575f80fd5b50565b5f813590506100d5816100b1565b92915050565b5f602082840312156100f0576100ef61007d565b5b5f6100fd848285016100c7565b91505092915050565b5f819050919050565b61011881610106565b82525050565b5f6020820190506101315f83018461010f565b9291505056fea26469706673582212203b9fe929fe995c7cf9887f0bdba8a36dd78e8b73f149b17d2d9ad7cd09d2dc6264736f6c634300081a0033";
function Cc(t, e) {
  return u(this, null, function* () {
    let {
        blockNumber: r,
        blockTag: o,
        calls: n,
        stateOverrides: s,
        traceAssetChanges: i,
        traceTransfers: a,
        validation: c,
      } = e,
      m = e.account ? D(e.account) : void 0;
    if (i && !m)
      throw new N("`account` is required when `traceAssetChanges` is true");
    let d = m
        ? Tc(Ac("constructor(bytes, bytes)"), {
            bytecode: ls,
            args: [Pf, Pc(He("function getBalance(address)"), [m.address])],
          })
        : void 0,
      f = i
        ? yield Promise.all(
            e.calls.map((U) =>
              u(this, null, function* () {
                if (!U.data && !U.abi) return;
                let { accessList: at } = yield mn(
                  t,
                  C(x({ account: m.address }, U), {
                    data: U.abi ? j(U) : U.data,
                  })
                );
                return at.map(({ address: fr, storageKeys: co }) =>
                  co.length > 0 ? fr : null
                );
              })
            )
          ).then((U) => U.flat().filter(Boolean))
        : [],
      p = yield so(t, {
        blockNumber: r,
        blockTag: o,
        blocks: [
          ...(i
            ? [
                { calls: [{ data: d }], stateOverrides: s },
                {
                  calls: f.map((U, at) => ({
                    abi: [He("function balanceOf(address) returns (uint256)")],
                    functionName: "balanceOf",
                    args: [m.address],
                    to: U,
                    from: wt,
                    nonce: at,
                  })),
                  stateOverrides: [{ address: wt, nonce: 0 }],
                },
              ]
            : []),
          {
            calls: [...n, {}].map((U) => C(x({}, U), { from: m?.address })),
            stateOverrides: s,
          },
          ...(i
            ? [
                { calls: [{ data: d }] },
                {
                  calls: f.map((U, at) => ({
                    abi: [He("function balanceOf(address) returns (uint256)")],
                    functionName: "balanceOf",
                    args: [m.address],
                    to: U,
                    from: wt,
                    nonce: at,
                  })),
                  stateOverrides: [{ address: wt, nonce: 0 }],
                },
                {
                  calls: f.map((U, at) => ({
                    to: U,
                    abi: [He("function decimals() returns (uint256)")],
                    functionName: "decimals",
                    from: wt,
                    nonce: at,
                  })),
                  stateOverrides: [{ address: wt, nonce: 0 }],
                },
                {
                  calls: f.map((U, at) => ({
                    to: U,
                    abi: [He("function tokenURI(uint256) returns (string)")],
                    functionName: "tokenURI",
                    args: [0n],
                    from: wt,
                    nonce: at,
                  })),
                  stateOverrides: [{ address: wt, nonce: 0 }],
                },
                {
                  calls: f.map((U, at) => ({
                    to: U,
                    abi: [He("function symbol() returns (string)")],
                    functionName: "symbol",
                    from: wt,
                    nonce: at,
                  })),
                  stateOverrides: [{ address: wt, nonce: 0 }],
                },
              ]
            : []),
        ],
        traceTransfers: a,
        validation: c,
      }),
      l = i ? p[2] : p[0],
      [h, y, , g, b, w, E, A] = i ? p : [],
      qe = l,
      { calls: B } = qe,
      P = _(qe, ["calls"]),
      I = B.slice(0, -1) ?? [],
      k = h?.calls ?? [],
      S = y?.calls ?? [],
      R = [...k, ...S].map((U) => (U.status === "success" ? q(U.data) : null)),
      z = g?.calls ?? [],
      F = b?.calls ?? [],
      J = [...z, ...F].map((U) => (U.status === "success" ? q(U.data) : null)),
      G = (w?.calls ?? []).map((U) =>
        U.status === "success" ? U.result : null
      ),
      $t = (A?.calls ?? []).map((U) =>
        U.status === "success" ? U.result : null
      ),
      Ot = (E?.calls ?? []).map((U) =>
        U.status === "success" ? U.result : null
      ),
      me = [];
    for (let [U, at] of J.entries()) {
      let fr = R[U];
      if (typeof at != "bigint" || typeof fr != "bigint") continue;
      let co = G[U - 1],
        Fu = $t[U - 1],
        Hu = Ot[U - 1],
        zi =
          U === 0
            ? { address: Ci, decimals: 18, symbol: "ETH" }
            : {
                address: f[U - 1],
                decimals: Hu || co ? Number(co ?? 1) : void 0,
                symbol: Fu ?? void 0,
              };
      me.some((_u) => _u.token.address === zi.address) ||
        me.push({ token: zi, value: { pre: fr, post: at, diff: at - fr } });
    }
    return { assetChanges: me, block: P, results: I };
  });
}
var ao = {};
Ui(ao, {
  InvalidWrappedSignatureError: () => Mn,
  assert: () => ki,
  from: () => kf,
  magicBytes: () => Bi,
  universalSignatureValidatorAbi: () => Bf,
  universalSignatureValidatorBytecode: () => Cf,
  unwrap: () => Bc,
  validate: () => Rf,
  wrap: () => Sf,
});
var Bi = "0x6492649264926492649264926492649264926492649264926492649264926492",
  Cf =
    "0x608060405234801561001057600080fd5b5060405161069438038061069483398101604081905261002f9161051e565b600061003c848484610048565b9050806000526001601ff35b60007f64926492649264926492649264926492649264926492649264926492649264926100748361040c565b036101e7576000606080848060200190518101906100929190610577565b60405192955090935091506000906001600160a01b038516906100b69085906105dd565b6000604051808303816000865af19150503d80600081146100f3576040519150601f19603f3d011682016040523d82523d6000602084013e6100f8565b606091505b50509050876001600160a01b03163b60000361016057806101605760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726556616c696461746f723a206465706c6f796d656e74000060448201526064015b60405180910390fd5b604051630b135d3f60e11b808252906001600160a01b038a1690631626ba7e90610190908b9087906004016105f9565b602060405180830381865afa1580156101ad573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101d19190610633565b6001600160e01b03191614945050505050610405565b6001600160a01b0384163b1561027a57604051630b135d3f60e11b808252906001600160a01b03861690631626ba7e9061022790879087906004016105f9565b602060405180830381865afa158015610244573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102689190610633565b6001600160e01b031916149050610405565b81516041146102df5760405162461bcd60e51b815260206004820152603a602482015260008051602061067483398151915260448201527f3a20696e76616c6964207369676e6174757265206c656e6774680000000000006064820152608401610157565b6102e7610425565b5060208201516040808401518451859392600091859190811061030c5761030c61065d565b016020015160f81c9050601b811480159061032b57508060ff16601c14155b1561038c5760405162461bcd60e51b815260206004820152603b602482015260008051602061067483398151915260448201527f3a20696e76616c6964207369676e617475726520762076616c756500000000006064820152608401610157565b60408051600081526020810180835289905260ff83169181019190915260608101849052608081018390526001600160a01b0389169060019060a0016020604051602081039080840390855afa1580156103ea573d6000803e3d6000fd5b505050602060405103516001600160a01b0316149450505050505b9392505050565b600060208251101561041d57600080fd5b508051015190565b60405180606001604052806003906020820280368337509192915050565b6001600160a01b038116811461045857600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561048c578181015183820152602001610474565b50506000910152565b600082601f8301126104a657600080fd5b81516001600160401b038111156104bf576104bf61045b565b604051601f8201601f19908116603f011681016001600160401b03811182821017156104ed576104ed61045b565b60405281815283820160200185101561050557600080fd5b610516826020830160208701610471565b949350505050565b60008060006060848603121561053357600080fd5b835161053e81610443565b6020850151604086015191945092506001600160401b0381111561056157600080fd5b61056d86828701610495565b9150509250925092565b60008060006060848603121561058c57600080fd5b835161059781610443565b60208501519093506001600160401b038111156105b357600080fd5b6105bf86828701610495565b604086015190935090506001600160401b0381111561056157600080fd5b600082516105ef818460208701610471565b9190910192915050565b828152604060208201526000825180604084015261061e816060850160208701610471565b601f01601f1916919091016060019392505050565b60006020828403121561064557600080fd5b81516001600160e01b03198116811461040557600080fd5b634e487b7160e01b600052603260045260246000fdfe5369676e617475726556616c696461746f72237265636f7665725369676e6572",
  Bf = [
    {
      inputs: [
        { name: "_signer", type: "address" },
        { name: "_hash", type: "bytes32" },
        { name: "_signature", type: "bytes" },
      ],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      inputs: [
        { name: "_signer", type: "address" },
        { name: "_hash", type: "bytes32" },
        { name: "_signature", type: "bytes" },
      ],
      outputs: [{ type: "bool" }],
      stateMutability: "nonpayable",
      type: "function",
      name: "isValidSig",
    },
  ];
function ki(t) {
  if (V(t, -32) !== Bi) throw new Mn(t);
}
function kf(t) {
  return typeof t == "string" ? Bc(t) : t;
}
function Bc(t) {
  ki(t);
  let [e, r, o] = ir(Xr("address, bytes, bytes"), t);
  return { data: r, signature: o, to: e };
}
function Sf(t) {
  let { data: e, signature: r, to: o } = t;
  return W(ae(Xr("address, bytes, bytes"), [o, e, r]), Bi);
}
function Rf(t) {
  try {
    return ki(t), !0;
  } catch {
    return !1;
  }
}
var Mn = class extends L {
  constructor(e) {
    super(`Value \`${e}\` is an invalid ERC-6492 wrapped signature.`),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "SignatureErc6492.InvalidWrappedSignatureError",
      });
  }
};
function $n({ r: t, s: e, to: r = "hex", v: o, yParity: n }) {
  let s = (() => {
      if (n === 0 || n === 1) return n;
      if (o && (o === 27n || o === 28n || o >= 35n))
        return o % 2n === 0n ? 1 : 0;
      throw new Error("Invalid `v` or `yParity` value");
    })(),
    i = `0x${new kt.Signature(q(t), q(e)).toCompactHex()}${
      s === 0 ? "1b" : "1c"
    }`;
  return r === "hex" ? i : tt(i);
}
function ue(t, e) {
  return u(this, null, function* () {
    let {
        address: r,
        hash: o,
        erc6492VerifierAddress: n = e.universalSignatureVerifierAddress ??
          t.chain?.contracts?.erc6492Verifier?.address,
        multicallAddress: s = e.multicallAddress ??
          t.chain?.contracts?.multicall3?.address,
      } = e,
      i = (() => {
        let a = e.signature;
        return H(a)
          ? a
          : typeof a == "object" && "r" in a && "s" in a
          ? $n(a)
          : Z(a);
      })();
    try {
      return At.validate(i)
        ? yield Nf(t, C(x({}, e), { multicallAddress: s, signature: i }))
        : yield Ff(t, C(x({}, e), { verifierAddress: n, signature: i }));
    } catch (a) {
      try {
        if (rt(Q(r), yield xt({ hash: o, signature: i }))) return !0;
      } catch {}
      if (a instanceof Dt) return !1;
      throw a;
    }
  });
}
function Nf(t, e) {
  return u(this, null, function* () {
    let {
        address: r,
        blockNumber: o,
        blockTag: n,
        hash: s,
        multicallAddress: i,
      } = e,
      {
        authorization: a,
        data: c,
        signature: m,
        to: d,
      } = At.unwrap(e.signature);
    if (
      (yield Dr(t, { address: r, blockNumber: o, blockTag: n })) ===
      Pt(["0xef0100", a.address])
    )
      return yield Hf(t, {
        address: r,
        blockNumber: o,
        blockTag: n,
        hash: s,
        signature: m,
      });
    let p = {
      address: a.address,
      chainId: Number(a.chainId),
      nonce: Number(a.nonce),
      r: T(a.r, { size: 32 }),
      s: T(a.s, { size: 32 }),
      yParity: a.yParity,
    };
    if (!(yield Da({ address: r, authorization: p }))) throw new Dt();
    let h = yield v(
      t,
      K,
      "readContract"
    )(
      C(x({}, i ? { address: i } : { code: Oo }), {
        authorizationList: [p],
        abi: pr,
        blockNumber: o,
        blockTag: "pending",
        functionName: "aggregate3",
        args: [
          [
            ...(c ? [{ allowFailure: !0, target: d ?? r, callData: c }] : []),
            {
              allowFailure: !0,
              target: r,
              callData: j({
                abi: Jn,
                functionName: "isValidSignature",
                args: [s, m],
              }),
            },
          ],
        ],
      })
    );
    if (h[h.length - 1]?.returnData?.startsWith("0x1626ba7e")) return !0;
    throw new Dt();
  });
}
function Ff(t, e) {
  return u(this, null, function* () {
    let p = e,
      {
        address: r,
        factory: o,
        factoryData: n,
        hash: s,
        signature: i,
        verifierAddress: a,
      } = p,
      c = _(p, [
        "address",
        "factory",
        "factoryData",
        "hash",
        "signature",
        "verifierAddress",
      ]),
      m = yield u(this, null, function* () {
        return (!o && !n) || ao.validate(i)
          ? i
          : ao.wrap({ data: n, signature: i, to: o });
      }),
      d = x(
        a
          ? {
              to: a,
              data: j({ abi: dr, functionName: "isValidSig", args: [r, s, m] }),
            }
          : { data: Cr({ abi: dr, args: [r, s, m], bytecode: $o }) },
        c
      ),
      { data: f } = yield v(
        t,
        Xt,
        "call"
      )(d).catch((l) => {
        throw l instanceof ms ? new Dt() : l;
      });
    if (lo(f ?? "0x0")) return !0;
    throw new Dt();
  });
}
function Hf(t, e) {
  return u(this, null, function* () {
    let { address: r, blockNumber: o, blockTag: n, hash: s, signature: i } = e;
    if (
      (yield v(
        t,
        K,
        "readContract"
      )({
        address: r,
        abi: Jn,
        args: [s, i],
        blockNumber: o,
        blockTag: n,
        functionName: "isValidSignature",
      }).catch((c) => {
        throw c instanceof vr ? new Dt() : c;
      })).startsWith("0x1626ba7e")
    )
      return !0;
    throw new Dt();
  });
}
var Dt = class extends Error {};
function kc(t, a) {
  return u(this, null, function* () {
    var c = a,
      { address: e, message: r, factory: o, factoryData: n, signature: s } = c,
      i = _(c, ["address", "message", "factory", "factoryData", "signature"]);
    let m = Se(r);
    return ue(
      t,
      x({ address: e, factory: o, factoryData: n, hash: m, signature: s }, i)
    );
  });
}
function Sc(t, e) {
  return u(this, null, function* () {
    let p = e,
      {
        address: r,
        factory: o,
        factoryData: n,
        signature: s,
        message: i,
        primaryType: a,
        types: c,
        domain: m,
      } = p,
      d = _(p, [
        "address",
        "factory",
        "factoryData",
        "signature",
        "message",
        "primaryType",
        "types",
        "domain",
      ]),
      f = Kr({ message: i, primaryType: a, types: c, domain: m });
    return ue(
      t,
      x({ address: r, factory: o, factoryData: n, hash: f, signature: s }, d)
    );
  });
}
function On(
  t,
  {
    emitOnBegin: e = !1,
    emitMissed: r = !1,
    onBlockNumber: o,
    onError: n,
    poll: s,
    pollingInterval: i = t.pollingInterval,
  }
) {
  let a =
      typeof s < "u"
        ? s
        : !(
            t.transport.type === "webSocket" ||
            t.transport.type === "ipc" ||
            (t.transport.type === "fallback" &&
              (t.transport.transports[0].config.type === "webSocket" ||
                t.transport.transports[0].config.type === "ipc"))
          ),
    c;
  return a
    ? (() => {
        let f = O(["watchBlockNumber", t.uid, e, r, i]);
        return it(f, { onBlockNumber: o, onError: n }, (p) =>
          gt(
            () =>
              u(this, null, function* () {
                try {
                  let l = yield v(t, Nt, "getBlockNumber")({ cacheTime: 0 });
                  if (c !== void 0) {
                    if (l === c) return;
                    if (l - c > 1 && r)
                      for (let h = c + 1n; h < l; h++)
                        p.onBlockNumber(h, c), (c = h);
                  }
                  (c === void 0 || l > c) && (p.onBlockNumber(l, c), (c = l));
                } catch (l) {
                  p.onError?.(l);
                }
              }),
            { emitOnBegin: e, interval: i }
          )
        );
      })()
    : (() => {
        let f = O(["watchBlockNumber", t.uid, e, r]);
        return it(f, { onBlockNumber: o, onError: n }, (p) => {
          let l = !0,
            h = () => (l = !1);
          return (
            u(this, null, function* () {
              try {
                let y = (() => {
                    if (t.transport.type === "fallback") {
                      let b = t.transport.transports.find(
                        (w) =>
                          w.config.type === "webSocket" ||
                          w.config.type === "ipc"
                      );
                      return b ? b.value : t.transport;
                    }
                    return t.transport;
                  })(),
                  { unsubscribe: g } = yield y.subscribe({
                    params: ["newHeads"],
                    onData(b) {
                      if (!l) return;
                      let w = q(b.result?.number);
                      p.onBlockNumber(w, c), (c = w);
                    },
                    onError(b) {
                      p.onError?.(b);
                    },
                  });
                (h = g), l || h();
              } catch (y) {
                n?.(y);
              }
            }),
            () => h()
          );
        });
      })();
}
function Gn(t, e) {
  return u(this, null, function* () {
    let {
        checkReplacement: r = !0,
        confirmations: o = 1,
        hash: n,
        onReplaced: s,
        retryCount: i = 6,
        retryDelay: a = ({ count: B }) => ~~(1 << B) * 200,
        timeout: c = 18e4,
      } = e,
      m = O(["waitForTransactionReceipt", t.uid, n]),
      d = e.pollingInterval
        ? e.pollingInterval
        : t.chain?.experimental_preconfirmationTime
        ? t.chain.experimental_preconfirmationTime
        : t.pollingInterval,
      f,
      p,
      l,
      h = !1,
      y,
      g,
      { promise: b, resolve: w, reject: E } = Go(),
      A = c
        ? setTimeout(() => {
            g?.(), y?.(), E(new us({ hash: n }));
          }, c)
        : void 0;
    return (
      (y = it(m, { onReplaced: s, resolve: w, reject: E }, (B) =>
        u(this, null, function* () {
          if (
            ((l = yield v(
              t,
              cr,
              "getTransactionReceipt"
            )({ hash: n }).catch(() => {})),
            l && o <= 1)
          ) {
            clearTimeout(A), B.resolve(l), y?.();
            return;
          }
          g = v(
            t,
            On,
            "watchBlockNumber"
          )({
            emitMissed: !0,
            emitOnBegin: !0,
            poll: !0,
            pollingInterval: d,
            onBlockNumber(I) {
              return u(this, null, function* () {
                let k = (R) => {
                    clearTimeout(A), g?.(), R(), y?.();
                  },
                  S = I;
                if (!h)
                  try {
                    if (l) {
                      if (
                        o > 1 &&
                        (!l.blockNumber || S - l.blockNumber + 1n < o)
                      )
                        return;
                      k(() => B.resolve(l));
                      return;
                    }
                    if (
                      (r &&
                        !f &&
                        ((h = !0),
                        yield ie(
                          () =>
                            u(this, null, function* () {
                              (f = yield v(
                                t,
                                ar,
                                "getTransaction"
                              )({ hash: n })),
                                f.blockNumber && (S = f.blockNumber);
                            }),
                          { delay: a, retryCount: i }
                        ),
                        (h = !1)),
                      (l = yield v(
                        t,
                        cr,
                        "getTransactionReceipt"
                      )({ hash: n })),
                      o > 1 && (!l.blockNumber || S - l.blockNumber + 1n < o))
                    )
                      return;
                    k(() => B.resolve(l));
                  } catch (R) {
                    if (R instanceof wr || R instanceof Er) {
                      if (!f) {
                        h = !1;
                        return;
                      }
                      try {
                        (p = f), (h = !0);
                        let z = yield ie(
                          () =>
                            v(
                              t,
                              st,
                              "getBlock"
                            )({ blockNumber: S, includeTransactions: !0 }),
                          {
                            delay: a,
                            retryCount: i,
                            shouldRetry: ({ error: G }) => G instanceof Ae,
                          }
                        );
                        h = !1;
                        let F = z.transactions.find(
                          ({ from: G, nonce: $t }) =>
                            G === p.from && $t === p.nonce
                        );
                        if (
                          !F ||
                          ((l = yield v(
                            t,
                            cr,
                            "getTransactionReceipt"
                          )({ hash: F.hash })),
                          o > 1 &&
                            (!l.blockNumber || S - l.blockNumber + 1n < o))
                        )
                          return;
                        let J = "replaced";
                        F.to === p.to &&
                        F.value === p.value &&
                        F.input === p.input
                          ? (J = "repriced")
                          : F.from === F.to &&
                            F.value === 0n &&
                            (J = "cancelled"),
                          k(() => {
                            B.onReplaced?.({
                              reason: J,
                              replacedTransaction: p,
                              transaction: F,
                              transactionReceipt: l,
                            }),
                              B.resolve(l);
                          });
                      } catch (z) {
                        k(() => B.reject(z));
                      }
                    } else k(() => B.reject(R));
                  }
              });
            },
          });
        })
      )),
      b
    );
  });
}
function Rc(
  t,
  {
    blockTag: e = t.experimental_blockTag ?? "latest",
    emitMissed: r = !1,
    emitOnBegin: o = !1,
    onBlock: n,
    onError: s,
    includeTransactions: i,
    poll: a,
    pollingInterval: c = t.pollingInterval,
  }
) {
  let m =
      typeof a < "u"
        ? a
        : !(
            t.transport.type === "webSocket" ||
            t.transport.type === "ipc" ||
            (t.transport.type === "fallback" &&
              (t.transport.transports[0].config.type === "webSocket" ||
                t.transport.transports[0].config.type === "ipc"))
          ),
    d = i ?? !1,
    f;
  return m
    ? (() => {
        let h = O(["watchBlocks", t.uid, e, r, o, d, c]);
        return it(h, { onBlock: n, onError: s }, (y) =>
          gt(
            () =>
              u(this, null, function* () {
                try {
                  let g = yield v(
                    t,
                    st,
                    "getBlock"
                  )({ blockTag: e, includeTransactions: d });
                  if (g.number !== null && f?.number != null) {
                    if (g.number === f.number) return;
                    if (g.number - f.number > 1 && r)
                      for (let b = f?.number + 1n; b < g.number; b++) {
                        let w = yield v(
                          t,
                          st,
                          "getBlock"
                        )({ blockNumber: b, includeTransactions: d });
                        y.onBlock(w, f), (f = w);
                      }
                  }
                  (f?.number == null ||
                    (e === "pending" && g?.number == null) ||
                    (g.number !== null && g.number > f.number)) &&
                    (y.onBlock(g, f), (f = g));
                } catch (g) {
                  y.onError?.(g);
                }
              }),
            { emitOnBegin: o, interval: c }
          )
        );
      })()
    : (() => {
        let h = !0,
          y = !0,
          g = () => (h = !1);
        return (
          u(this, null, function* () {
            try {
              let E;
              o &&
                v(
                  t,
                  st,
                  "getBlock"
                )({ blockTag: e, includeTransactions: d })
                  .then((A) => {
                    h && y && (n(A, void 0), (y = !1));
                  })
                  .catch(s);
              let b = (() => {
                  if (t.transport.type === "fallback") {
                    let A = t.transport.transports.find(
                      (B) =>
                        B.config.type === "webSocket" || B.config.type === "ipc"
                    );
                    return A ? A.value : t.transport;
                  }
                  return t.transport;
                })(),
                { unsubscribe: w } = yield b.subscribe({
                  params: ["newHeads"],
                  onData(A) {
                    return u(this, null, function* () {
                      if (!h) return;
                      let B = yield v(
                        t,
                        st,
                        "getBlock"
                      )({
                        blockNumber: A.result?.number,
                        includeTransactions: d,
                      }).catch(() => {});
                      h && (n(B, f), (y = !1), (f = B));
                    });
                  },
                  onError(A) {
                    s?.(A);
                  },
                });
              (g = w), h || g();
            } catch (b) {
              s?.(b);
            }
          }),
          () => g()
        );
      })();
}
function Nc(
  t,
  {
    address: e,
    args: r,
    batch: o = !0,
    event: n,
    events: s,
    fromBlock: i,
    onError: a,
    onLogs: c,
    poll: m,
    pollingInterval: d = t.pollingInterval,
    strict: f,
  }
) {
  let p =
      typeof m < "u"
        ? m
        : typeof i == "bigint"
        ? !0
        : !(
            t.transport.type === "webSocket" ||
            t.transport.type === "ipc" ||
            (t.transport.type === "fallback" &&
              (t.transport.transports[0].config.type === "webSocket" ||
                t.transport.transports[0].config.type === "ipc"))
          ),
    l = f ?? !1;
  return p
    ? (() => {
        let g = O(["watchEvent", e, r, o, t.uid, n, d, i]);
        return it(g, { onLogs: c, onError: a }, (b) => {
          let w;
          i !== void 0 && (w = i - 1n);
          let E,
            A = !1,
            B = gt(
              () =>
                u(this, null, function* () {
                  if (!A) {
                    try {
                      E = yield v(
                        t,
                        fn,
                        "createEventFilter"
                      )({
                        address: e,
                        args: r,
                        event: n,
                        events: s,
                        strict: l,
                        fromBlock: i,
                      });
                    } catch {}
                    A = !0;
                    return;
                  }
                  try {
                    let P;
                    if (E)
                      P = yield v(t, oe, "getFilterChanges")({ filter: E });
                    else {
                      let I = yield v(t, Nt, "getBlockNumber")({});
                      w && w !== I
                        ? (P = yield v(
                            t,
                            Ze,
                            "getLogs"
                          )({
                            address: e,
                            args: r,
                            event: n,
                            events: s,
                            fromBlock: w + 1n,
                            toBlock: I,
                          }))
                        : (P = []),
                        (w = I);
                    }
                    if (P.length === 0) return;
                    if (o) b.onLogs(P);
                    else for (let I of P) b.onLogs([I]);
                  } catch (P) {
                    E && P instanceof Qt && (A = !1), b.onError?.(P);
                  }
                }),
              { emitOnBegin: !0, interval: d }
            );
          return () =>
            u(this, null, function* () {
              E && (yield v(t, ne, "uninstallFilter")({ filter: E })), B();
            });
        });
      })()
    : (() => {
        let g = !0,
          b = () => (g = !1);
        return (
          u(this, null, function* () {
            try {
              let w = (() => {
                  if (t.transport.type === "fallback") {
                    let P = t.transport.transports.find(
                      (I) =>
                        I.config.type === "webSocket" || I.config.type === "ipc"
                    );
                    return P ? P.value : t.transport;
                  }
                  return t.transport;
                })(),
                E = s ?? (n ? [n] : void 0),
                A = [];
              E &&
                ((A = [
                  E.flatMap((I) =>
                    Tt({ abi: [I], eventName: I.name, args: r })
                  ),
                ]),
                n && (A = A[0]));
              let { unsubscribe: B } = yield w.subscribe({
                params: ["logs", { address: e, topics: A }],
                onData(P) {
                  if (!g) return;
                  let I = P.result;
                  try {
                    let { eventName: k, args: S } = Ie({
                        abi: E ?? [],
                        data: I.data,
                        topics: I.topics,
                        strict: l,
                      }),
                      R = ft(I, { args: S, eventName: k });
                    c([R]);
                  } catch (k) {
                    let S, R;
                    if (k instanceof It || k instanceof Ht) {
                      if (f) return;
                      (S = k.abiItem.name),
                        (R = k.abiItem.inputs?.some(
                          (F) => !("name" in F && F.name)
                        ));
                    }
                    let z = ft(I, { args: R ? [] : {}, eventName: S });
                    c([z]);
                  }
                },
                onError(P) {
                  a?.(P);
                },
              });
              (b = B), g || b();
            } catch (w) {
              a?.(w);
            }
          }),
          () => b()
        );
      })();
}
function Fc(
  t,
  {
    batch: e = !0,
    onError: r,
    onTransactions: o,
    poll: n,
    pollingInterval: s = t.pollingInterval,
  }
) {
  return (
    typeof n < "u"
      ? n
      : t.transport.type !== "webSocket" && t.transport.type !== "ipc"
  )
    ? (() => {
        let m = O(["watchPendingTransactions", t.uid, e, s]);
        return it(m, { onTransactions: o, onError: r }, (d) => {
          let f,
            p = gt(
              () =>
                u(this, null, function* () {
                  try {
                    if (!f)
                      try {
                        f = yield v(
                          t,
                          pn,
                          "createPendingTransactionFilter"
                        )({});
                        return;
                      } catch (h) {
                        throw (p(), h);
                      }
                    let l = yield v(t, oe, "getFilterChanges")({ filter: f });
                    if (l.length === 0) return;
                    if (e) d.onTransactions(l);
                    else for (let h of l) d.onTransactions([h]);
                  } catch (l) {
                    d.onError?.(l);
                  }
                }),
              { emitOnBegin: !0, interval: s }
            );
          return () =>
            u(this, null, function* () {
              f && (yield v(t, ne, "uninstallFilter")({ filter: f })), p();
            });
        });
      })()
    : (() => {
        let m = !0,
          d = () => (m = !1);
        return (
          u(this, null, function* () {
            try {
              let { unsubscribe: f } = yield t.transport.subscribe({
                params: ["newPendingTransactions"],
                onData(p) {
                  if (!m) return;
                  let l = p.result;
                  o([l]);
                },
                onError(p) {
                  r?.(p);
                },
              });
              (d = f), m || d();
            } catch (f) {
              r?.(f);
            }
          }),
          () => d()
        );
      })();
}
function Hc(t) {
  let f = t.match(_f)?.groups ?? {},
    { scheme: e, statement: r } = f,
    o = _(f, ["scheme", "statement"]),
    p = t.match(qf)?.groups ?? {},
    {
      chainId: n,
      expirationTime: s,
      issuedAt: i,
      notBefore: a,
      requestId: c,
    } = p,
    m = _(p, [
      "chainId",
      "expirationTime",
      "issuedAt",
      "notBefore",
      "requestId",
    ]),
    d = t
      .split("Resources:")[1]
      ?.split(
        `
- `
      )
      .slice(1);
  return x(
    x(
      x(
        x(
          x(
            x(
              x(
                x(x(x({}, o), m), n ? { chainId: Number(n) } : {}),
                s ? { expirationTime: new Date(s) } : {}
              ),
              i ? { issuedAt: new Date(i) } : {}
            ),
            a ? { notBefore: new Date(a) } : {}
          ),
          c ? { requestId: c } : {}
        ),
        d ? { resources: d } : {}
      ),
      e ? { scheme: e } : {}
    ),
    r ? { statement: r } : {}
  );
}
var _f =
    /^(?:(?<scheme>[a-zA-Z][a-zA-Z0-9+-.]*):\/\/)?(?<domain>[a-zA-Z0-9+-.]*(?::[0-9]{1,5})?) (?:wants you to sign in with your Ethereum account:\n)(?<address>0x[a-fA-F0-9]{40})\n\n(?:(?<statement>.*)\n\n)?/,
  qf =
    /(?:URI: (?<uri>.+))\n(?:Version: (?<version>.+))\n(?:Chain ID: (?<chainId>\d+))\n(?:Nonce: (?<nonce>[a-zA-Z0-9]+))\n(?:Issued At: (?<issuedAt>.+))(?:\nExpiration Time: (?<expirationTime>.+))?(?:\nNot Before: (?<notBefore>.+))?(?:\nRequest ID: (?<requestId>.+))?/;
function _c(t) {
  let {
    address: e,
    domain: r,
    message: o,
    nonce: n,
    scheme: s,
    time: i = new Date(),
  } = t;
  if (
    (r && o.domain !== r) ||
    (n && o.nonce !== n) ||
    (s && o.scheme !== s) ||
    (o.expirationTime && i >= o.expirationTime) ||
    (o.notBefore && i < o.notBefore)
  )
    return !1;
  try {
    if (
      !o.address ||
      !qt(o.address, { strict: !1 }) ||
      (e && !rt(o.address, e))
    )
      return !1;
  } catch {
    return !1;
  }
  return !0;
}
function qc(t, e) {
  return u(this, null, function* () {
    let l = e,
      {
        address: r,
        domain: o,
        message: n,
        nonce: s,
        scheme: i,
        signature: a,
        time: c = new Date(),
      } = l,
      m = _(l, [
        "address",
        "domain",
        "message",
        "nonce",
        "scheme",
        "signature",
        "time",
      ]),
      d = Hc(n);
    if (
      !d.address ||
      !_c({ address: r, domain: o, message: d, nonce: s, scheme: i, time: c })
    )
      return !1;
    let p = Se(n);
    return ue(t, x({ address: d.address, hash: p, signature: a }, m));
  });
}
function mr(n, s) {
  return u(
    this,
    arguments,
    function* (
      t,
      { serializedTransaction: e, throwOnReceiptRevert: r, timeout: o }
    ) {
      let i = yield t.request(
          { method: "eth_sendRawTransactionSync", params: o ? [e, T(o)] : [e] },
          { retryCount: 0 }
        ),
        c = (t.chain?.formatters?.transactionReceipt?.format || Rr)(i);
      if (c.status === "reverted" && r) throw new Eo({ receipt: c });
      return c;
    }
  );
}
function Si(t) {
  return {
    call: (e) => Xt(t, e),
    createAccessList: (e) => mn(t, e),
    createBlockFilter: () => ka(t),
    createContractEventFilter: (e) => We(t, e),
    createEventFilter: (e) => fn(t, e),
    createPendingTransactionFilter: () => pn(t),
    estimateContractGas: (e) => Ko(t, e),
    estimateGas: (e) => Je(t, e),
    getBalance: (e) => Sa(t, e),
    getBlobBaseFee: () => Ra(t),
    getBlock: (e) => st(t, e),
    getBlockNumber: (e) => Nt(t, e),
    getBlockTransactionCount: (e) => Na(t, e),
    getBytecode: (e) => Dr(t, e),
    getChainId: () => lt(t),
    getCode: (e) => Dr(t, e),
    getContractEvents: (e) => Ye(t, e),
    getEip712Domain: (e) => Fa(t, e),
    getEnsAddress: (e) => wa(t, e),
    getEnsAvatar: (e) => Pa(t, e),
    getEnsName: (e) => Ca(t, e),
    getEnsResolver: (e) => Ba(t, e),
    getEnsText: (e) => un(t, e),
    getFeeHistory: (e) => _a(t, e),
    estimateFeesPerGas: (e) => la(t, e),
    getFilterChanges: (e) => oe(t, e),
    getFilterLogs: (e) => qa(t, e),
    getGasPrice: () => Ke(t),
    getLogs: (e) => Ze(t, e),
    getProof: (e) => gc(t, e),
    estimateMaxPriorityFeePerGas: (e) => da(t, e),
    getStorageAt: (e) => bc(t, e),
    getTransaction: (e) => ar(t, e),
    getTransactionConfirmations: (e) => wc(t, e),
    getTransactionCount: (e) => re(t, e),
    getTransactionReceipt: (e) => cr(t, e),
    multicall: (e) => Ec(t, e),
    prepareTransactionRequest: (e) => Rt(t, e),
    readContract: (e) => K(t, e),
    sendRawTransaction: (e) => Xe(t, e),
    sendRawTransactionSync: (e) => mr(t, e),
    simulate: (e) => so(t, e),
    simulateBlocks: (e) => so(t, e),
    simulateCalls: (e) => Cc(t, e),
    simulateContract: (e) => Jo(t, e),
    verifyHash: (e) => ue(t, e),
    verifyMessage: (e) => kc(t, e),
    verifySiweMessage: (e) => qc(t, e),
    verifyTypedData: (e) => Sc(t, e),
    uninstallFilter: (e) => ne(t, e),
    waitForTransactionReceipt: (e) => Gn(t, e),
    watchBlocks: (e) => Rc(t, e),
    watchBlockNumber: (e) => On(t, e),
    watchContractEvent: (e) => Zo(t, e),
    watchEvent: (e) => Nc(t, e),
    watchPendingTransactions: (e) => Fc(t, e),
  };
}
function zf(t) {
  let { key: e = "public", name: r = "Public Client" } = t;
  return Be(C(x({}, t), { key: e, name: r, type: "publicClient" })).extend(Si);
}
function zc(r, o) {
  return u(this, arguments, function* (t, { hash: e }) {
    yield t.request({ method: `${t.mode}_dropTransaction`, params: [e] });
  });
}
function Uc(t) {
  return u(this, null, function* () {
    return t.request({ method: `${t.mode}_dumpState` });
  });
}
function Lc(t) {
  return u(this, null, function* () {
    return t.mode === "ganache"
      ? yield t.request({ method: "eth_mining" })
      : yield t.request({ method: `${t.mode}_getAutomine` });
  });
}
function Dc(t) {
  return u(this, null, function* () {
    return yield t.request({ method: "txpool_content" });
  });
}
function Mc(t) {
  return u(this, null, function* () {
    let { pending: e, queued: r } = yield t.request({
      method: "txpool_status",
    });
    return { pending: M(e), queued: M(r) };
  });
}
function $c(r, o) {
  return u(this, arguments, function* (t, { address: e }) {
    yield t.request({ method: `${t.mode}_impersonateAccount`, params: [e] });
  });
}
function Oc(r, o) {
  return u(this, arguments, function* (t, { seconds: e }) {
    return yield t.request({ method: "evm_increaseTime", params: [T(e)] });
  });
}
function Gc(t) {
  return u(this, null, function* () {
    return yield t.request({ method: "txpool_inspect" });
  });
}
function jc(r, o) {
  return u(this, arguments, function* (t, { state: e }) {
    yield t.request({ method: `${t.mode}_loadState`, params: [e] });
  });
}
function Vc(o, n) {
  return u(this, arguments, function* (t, { blocks: e, interval: r }) {
    t.mode === "ganache"
      ? yield t.request({ method: "evm_mine", params: [{ blocks: T(e) }] })
      : yield t.request({
          method: `${t.mode}_mine`,
          params: [T(e), T(r || 0)],
        });
  });
}
function Wc(t) {
  return u(this, null, function* () {
    yield t.request({ method: `${t.mode}_removeBlockTimestampInterval` });
  });
}
function Kc(o) {
  return u(
    this,
    arguments,
    function* (t, { blockNumber: e, jsonRpcUrl: r } = {}) {
      yield t.request({
        method: `${t.mode}_reset`,
        params: [{ forking: { blockNumber: Number(e), jsonRpcUrl: r } }],
      });
    }
  );
}
function Jc(r, o) {
  return u(this, arguments, function* (t, { id: e }) {
    yield t.request({ method: "evm_revert", params: [e] });
  });
}
function Zc(t, e) {
  return u(this, null, function* () {
    let b = e,
      {
        accessList: r,
        data: o,
        from: n,
        gas: s,
        gasPrice: i,
        maxFeePerGas: a,
        maxPriorityFeePerGas: c,
        nonce: m,
        to: d,
        value: f,
      } = b,
      p = _(b, [
        "accessList",
        "data",
        "from",
        "gas",
        "gasPrice",
        "maxFeePerGas",
        "maxPriorityFeePerGas",
        "nonce",
        "to",
        "value",
      ]),
      l = t.chain?.formatters?.transactionRequest?.format,
      y = (l || ut)(
        C(x({}, Bt(p, { format: l })), {
          accessList: r,
          data: o,
          from: n,
          gas: s,
          gasPrice: i,
          maxFeePerGas: a,
          maxPriorityFeePerGas: c,
          nonce: m,
          to: d,
          value: f,
        }),
        "sendUnsignedTransaction"
      );
    return yield t.request({
      method: "eth_sendUnsignedTransaction",
      params: [y],
    });
  });
}
function Yc(t, e) {
  return u(this, null, function* () {
    t.mode === "ganache"
      ? e
        ? yield t.request({ method: "miner_start" })
        : yield t.request({ method: "miner_stop" })
      : yield t.request({ method: "evm_setAutomine", params: [e] });
  });
}
function Qc(o, n) {
  return u(this, arguments, function* (t, { address: e, value: r }) {
    t.mode === "ganache"
      ? yield t.request({ method: "evm_setAccountBalance", params: [e, T(r)] })
      : yield t.request({ method: `${t.mode}_setBalance`, params: [e, T(r)] });
  });
}
function Xc(r, o) {
  return u(this, arguments, function* (t, { gasLimit: e }) {
    yield t.request({ method: "evm_setBlockGasLimit", params: [T(e)] });
  });
}
function tu(r, o) {
  return u(this, arguments, function* (t, { interval: e }) {
    let n = t.mode === "hardhat" ? e * 1e3 : e;
    yield t.request({
      method: `${t.mode}_setBlockTimestampInterval`,
      params: [n],
    });
  });
}
function eu(o, n) {
  return u(this, arguments, function* (t, { address: e, bytecode: r }) {
    t.mode === "ganache"
      ? yield t.request({ method: "evm_setAccountCode", params: [e, r] })
      : yield t.request({ method: `${t.mode}_setCode`, params: [e, r] });
  });
}
function ru(r, o) {
  return u(this, arguments, function* (t, { address: e }) {
    yield t.request({ method: `${t.mode}_setCoinbase`, params: [e] });
  });
}
function ou(r, o) {
  return u(this, arguments, function* (t, { interval: e }) {
    let n = t.mode === "hardhat" ? e * 1e3 : e;
    yield t.request({ method: "evm_setIntervalMining", params: [n] });
  });
}
function nu(t, e) {
  return u(this, null, function* () {
    yield t.request({ method: `${t.mode}_setLoggingEnabled`, params: [e] });
  });
}
function su(r, o) {
  return u(this, arguments, function* (t, { gasPrice: e }) {
    yield t.request({ method: `${t.mode}_setMinGasPrice`, params: [T(e)] });
  });
}
function iu(r, o) {
  return u(this, arguments, function* (t, { baseFeePerGas: e }) {
    yield t.request({
      method: `${t.mode}_setNextBlockBaseFeePerGas`,
      params: [T(e)],
    });
  });
}
function au(r, o) {
  return u(this, arguments, function* (t, { timestamp: e }) {
    yield t.request({ method: "evm_setNextBlockTimestamp", params: [T(e)] });
  });
}
function cu(o, n) {
  return u(this, arguments, function* (t, { address: e, nonce: r }) {
    yield t.request({ method: `${t.mode}_setNonce`, params: [e, T(r)] });
  });
}
function uu(t, e) {
  return u(this, null, function* () {
    yield t.request({ method: `${t.mode}_setRpcUrl`, params: [e] });
  });
}
function mu(n, s) {
  return u(this, arguments, function* (t, { address: e, index: r, value: o }) {
    yield t.request({
      method: `${t.mode}_setStorageAt`,
      params: [e, typeof r == "number" ? T(r) : r, o],
    });
  });
}
function fu(t) {
  return u(this, null, function* () {
    return yield t.request({ method: "evm_snapshot" });
  });
}
function pu(r, o) {
  return u(this, arguments, function* (t, { address: e }) {
    yield t.request({
      method: `${t.mode}_stopImpersonatingAccount`,
      params: [e],
    });
  });
}
function Ri({ mode: t }) {
  return (e) => {
    let r = e.extend(() => ({ mode: t }));
    return {
      dropTransaction: (o) => zc(r, o),
      dumpState: () => Uc(r),
      getAutomine: () => Lc(r),
      getTxpoolContent: () => Dc(r),
      getTxpoolStatus: () => Mc(r),
      impersonateAccount: (o) => $c(r, o),
      increaseTime: (o) => Oc(r, o),
      inspectTxpool: () => Gc(r),
      loadState: (o) => jc(r, o),
      mine: (o) => Vc(r, o),
      removeBlockTimestampInterval: () => Wc(r),
      reset: (o) => Kc(r, o),
      revert: (o) => Jc(r, o),
      sendUnsignedTransaction: (o) => Zc(r, o),
      setAutomine: (o) => Yc(r, o),
      setBalance: (o) => Qc(r, o),
      setBlockGasLimit: (o) => Xc(r, o),
      setBlockTimestampInterval: (o) => tu(r, o),
      setCode: (o) => eu(r, o),
      setCoinbase: (o) => ru(r, o),
      setIntervalMining: (o) => ou(r, o),
      setLoggingEnabled: (o) => nu(r, o),
      setMinGasPrice: (o) => su(r, o),
      setNextBlockBaseFeePerGas: (o) => iu(r, o),
      setNextBlockTimestamp: (o) => au(r, o),
      setNonce: (o) => cu(r, o),
      setRpcUrl: (o) => uu(r, o),
      setStorageAt: (o) => mu(r, o),
      snapshot: () => fu(r),
      stopImpersonatingAccount: (o) => pu(r, o),
    };
  };
}
function Uf(t) {
  let { key: e = "test", name: r = "Test Client", mode: o } = t;
  return Be(C(x({}, t), { key: e, name: r, type: "testClient" })).extend((s) =>
    x({ mode: o }, Ri({ mode: o })(s))
  );
}
function du(r, o) {
  return u(this, arguments, function* (t, { chain: e }) {
    let {
      id: n,
      name: s,
      nativeCurrency: i,
      rpcUrls: a,
      blockExplorers: c,
    } = e;
    yield t.request(
      {
        method: "wallet_addEthereumChain",
        params: [
          {
            chainId: T(n),
            chainName: s,
            nativeCurrency: i,
            rpcUrls: a.default.http,
            blockExplorerUrls: c
              ? Object.values(c).map(({ url: m }) => m)
              : void 0,
          },
        ],
      },
      { dedupe: !0, retryCount: 0 }
    );
  });
}
function lu(t, e) {
  let a = e,
    { abi: r, args: o, bytecode: n } = a,
    s = _(a, ["abi", "args", "bytecode"]),
    i = Cr({ abi: r, args: o, bytecode: n });
  return se(
    t,
    C(x(x({}, s), s.authorizationList ? { to: null } : {}), { data: i })
  );
}
function hu(t) {
  return u(this, null, function* () {
    return t.account?.type === "local"
      ? [t.account.address]
      : (yield t.request({ method: "eth_accounts" }, { dedupe: !0 })).map((r) =>
          yr(r)
        );
  });
}
function xu(r) {
  return u(this, arguments, function* (t, e = {}) {
    let { account: o = t.account, chainId: n } = e,
      s = o ? D(o) : void 0,
      i = n ? [s?.address, [T(n)]] : [s?.address],
      a = yield t.request({ method: "wallet_getCapabilities", params: i }),
      c = {};
    for (let [m, d] of Object.entries(a)) {
      c[Number(m)] = {};
      for (let [f, p] of Object.entries(d))
        f === "addSubAccount" && (f = "unstable_addSubAccount"),
          (c[Number(m)][f] = p);
    }
    return typeof n == "number" ? c[n] : c;
  });
}
function yu(t) {
  return u(this, null, function* () {
    return yield t.request({ method: "wallet_getPermissions" }, { dedupe: !0 });
  });
}
function jn(t, e) {
  return u(this, null, function* () {
    let { account: r = t.account, chainId: o, nonce: n } = e;
    if (!r) throw new nt({ docsPath: "/docs/eip7702/prepareAuthorization" });
    let s = D(r),
      i = (() => {
        if (e.executor)
          return e.executor === "self" ? e.executor : D(e.executor);
      })(),
      a = { address: e.contractAddress ?? e.address, chainId: o, nonce: n };
    return (
      typeof a.chainId > "u" &&
        (a.chainId = t.chain?.id ?? (yield v(t, lt, "getChainId")({}))),
      typeof a.nonce > "u" &&
        ((a.nonce = yield v(
          t,
          re,
          "getTransactionCount"
        )({ address: s.address, blockTag: "pending" })),
        (i === "self" || (i?.address && rt(i.address, s.address))) &&
          (a.nonce += 1)),
      a
    );
  });
}
function gu(t) {
  return u(this, null, function* () {
    return (yield t.request(
      { method: "eth_requestAccounts" },
      { dedupe: !0, retryCount: 0 }
    )).map((r) => Q(r));
  });
}
function bu(t, e) {
  return u(this, null, function* () {
    return t.request(
      { method: "wallet_requestPermissions", params: [e] },
      { retryCount: 0 }
    );
  });
}
function wu(t, e) {
  return u(this, null, function* () {
    let { chain: r = t.chain } = e,
      o = e.timeout ?? Math.max((r?.blockTime ?? 0) * 3, 5e3),
      n = yield Qo(t, e);
    return yield en(t, C(x({}, e), { id: n.id, timeout: o }));
  });
}
var Ni = new jt(128);
function Vn(t, e) {
  return u(this, null, function* () {
    let B = e,
      {
        account: r = t.account,
        chain: o = t.chain,
        accessList: n,
        authorizationList: s,
        blobs: i,
        data: a,
        gas: c,
        gasPrice: m,
        maxFeePerBlobGas: d,
        maxFeePerGas: f,
        maxPriorityFeePerGas: p,
        nonce: l,
        pollingInterval: h,
        throwOnReceiptRevert: y,
        type: g,
        value: b,
      } = B,
      w = _(B, [
        "account",
        "chain",
        "accessList",
        "authorizationList",
        "blobs",
        "data",
        "gas",
        "gasPrice",
        "maxFeePerBlobGas",
        "maxFeePerGas",
        "maxPriorityFeePerGas",
        "nonce",
        "pollingInterval",
        "throwOnReceiptRevert",
        "type",
        "value",
      ]),
      E = e.timeout ?? Math.max((o?.blockTime ?? 0) * 3, 5e3);
    if (typeof r > "u")
      throw new nt({ docsPath: "/docs/actions/wallet/sendTransactionSync" });
    let A = r ? D(r) : null;
    try {
      mt(e);
      let P = yield u(this, null, function* () {
        if (e.to) return e.to;
        if (e.to !== null && s && s.length > 0)
          return yield ee({ authorization: s[0] }).catch(() => {
            throw new N(
              "`to` is required. Could not infer from `authorizationList`."
            );
          });
      });
      if (A?.type === "json-rpc" || A === null) {
        let I;
        o !== null &&
          ((I = yield v(t, lt, "getChainId")({})),
          Te({ currentChainId: I, chain: o }));
        let k = t.chain?.formatters?.transactionRequest?.format,
          R = (k || ut)(
            C(x({}, Bt(w, { format: k })), {
              accessList: n,
              authorizationList: s,
              blobs: i,
              chainId: I,
              data: a,
              from: A?.address,
              gas: c,
              gasPrice: m,
              maxFeePerBlobGas: d,
              maxFeePerGas: f,
              maxPriorityFeePerGas: p,
              nonce: l,
              to: P,
              type: g,
              value: b,
            }),
            "sendTransaction"
          ),
          z = Ni.get(t.uid),
          F = z ? "wallet_sendTransaction" : "eth_sendTransaction",
          J = yield u(this, null, function* () {
            try {
              return yield t.request(
                { method: F, params: [R] },
                { retryCount: 0 }
              );
            } catch ($t) {
              if (z === !1) throw $t;
              let Ot = $t;
              if (
                Ot.name === "InvalidInputRpcError" ||
                Ot.name === "InvalidParamsRpcError" ||
                Ot.name === "MethodNotFoundRpcError" ||
                Ot.name === "MethodNotSupportedRpcError"
              )
                return yield t
                  .request(
                    { method: "wallet_sendTransaction", params: [R] },
                    { retryCount: 0 }
                  )
                  .then((me) => (Ni.set(t.uid, !0), me))
                  .catch((me) => {
                    let qe = me;
                    throw qe.name === "MethodNotFoundRpcError" ||
                      qe.name === "MethodNotSupportedRpcError"
                      ? (Ni.set(t.uid, !1), Ot)
                      : qe;
                  });
              throw Ot;
            }
          }),
          G = yield v(
            t,
            Gn,
            "waitForTransactionReceipt"
          )({ checkReplacement: !1, hash: J, pollingInterval: h, timeout: E });
        if (y && G.status === "reverted") throw new Eo({ receipt: G });
        return G;
      }
      if (A?.type === "local") {
        let I = yield v(
            t,
            Rt,
            "prepareTransactionRequest"
          )(
            C(
              x(
                {
                  account: A,
                  accessList: n,
                  authorizationList: s,
                  blobs: i,
                  chain: o,
                  data: a,
                  gas: c,
                  gasPrice: m,
                  maxFeePerBlobGas: d,
                  maxFeePerGas: f,
                  maxPriorityFeePerGas: p,
                  nonce: l,
                  nonceManager: A.nonceManager,
                  parameters: [...qr, "sidecars"],
                  type: g,
                  value: b,
                },
                w
              ),
              { to: P }
            )
          ),
          k = o?.serializers?.transaction,
          S = yield A.signTransaction(I, { serializer: k });
        return yield v(
          t,
          mr,
          "sendRawTransactionSync"
        )({ serializedTransaction: S, throwOnReceiptRevert: y });
      }
      throw A?.type === "smart"
        ? new St({
            metaMessages: [
              "Consider using the `sendUserOperation` Action instead.",
            ],
            docsPath: "/docs/actions/bundler/sendUserOperation",
            type: "smart",
          })
        : new St({
            docsPath: "/docs/actions/wallet/sendTransactionSync",
            type: A?.type,
          });
    } catch (P) {
      throw P instanceof St
        ? P
        : Qe(P, C(x({}, e), { account: A, chain: e.chain || void 0 }));
    }
  });
}
function Eu(t, e) {
  return u(this, null, function* () {
    let { id: r } = e;
    yield t.request({ method: "wallet_showCallsStatus", params: [r] });
  });
}
function vu(t, e) {
  return u(this, null, function* () {
    let { account: r = t.account } = e;
    if (!r) throw new nt({ docsPath: "/docs/eip7702/signAuthorization" });
    let o = D(r);
    if (!o.signAuthorization)
      throw new St({
        docsPath: "/docs/eip7702/signAuthorization",
        metaMessages: [
          "The `signAuthorization` Action does not support JSON-RPC Accounts.",
        ],
        type: o.type,
      });
    let n = yield jn(t, e);
    return o.signAuthorization(n);
  });
}
function Tu(o, n) {
  return u(
    this,
    arguments,
    function* (t, { account: e = t.account, message: r }) {
      if (!e) throw new nt({ docsPath: "/docs/actions/wallet/signMessage" });
      let s = D(e);
      if (s.signMessage) return s.signMessage({ message: r });
      let i =
        typeof r == "string"
          ? Et(r)
          : r.raw instanceof Uint8Array
          ? X(r.raw)
          : r.raw;
      return t.request(
        { method: "personal_sign", params: [i, s.address] },
        { retryCount: 0 }
      );
    }
  );
}
function Au(t, e) {
  return u(this, null, function* () {
    let m = e,
      { account: r = t.account, chain: o = t.chain } = m,
      n = _(m, ["account", "chain"]);
    if (!r) throw new nt({ docsPath: "/docs/actions/wallet/signTransaction" });
    let s = D(r);
    mt(x({ account: s }, e));
    let i = yield v(t, lt, "getChainId")({});
    o !== null && Te({ currentChainId: i, chain: o });
    let c =
      (o?.formatters || t.chain?.formatters)?.transactionRequest?.format || ut;
    return s.signTransaction
      ? s.signTransaction(C(x({}, n), { chainId: i }), {
          serializer: t.chain?.serializers?.transaction,
        })
      : yield t.request(
          {
            method: "eth_signTransaction",
            params: [
              C(x({}, c(n, "signTransaction")), {
                chainId: T(i),
                from: s.address,
              }),
            ],
          },
          { retryCount: 0 }
        );
  });
}
function Iu(t, e) {
  return u(this, null, function* () {
    let { account: r = t.account, domain: o, message: n, primaryType: s } = e;
    if (!r) throw new nt({ docsPath: "/docs/actions/wallet/signTypedData" });
    let i = D(r),
      a = x({ EIP712Domain: nr({ domain: o }) }, e.types);
    if (
      (Wr({ domain: o, message: n, primaryType: s, types: a }), i.signTypedData)
    )
      return i.signTypedData({
        domain: o,
        message: n,
        primaryType: s,
        types: a,
      });
    let c = Os({ domain: o, message: n, primaryType: s, types: a });
    return t.request(
      { method: "eth_signTypedData_v4", params: [i.address, c] },
      { retryCount: 0 }
    );
  });
}
function Pu(r, o) {
  return u(this, arguments, function* (t, { id: e }) {
    yield t.request(
      { method: "wallet_switchEthereumChain", params: [{ chainId: T(e) }] },
      { retryCount: 0 }
    );
  });
}
function Cu(t, e) {
  return u(this, null, function* () {
    return yield t.request(
      { method: "wallet_watchAsset", params: e },
      { retryCount: 0 }
    );
  });
}
function Bu(t, e) {
  return u(this, null, function* () {
    return Ut.internal(t, Vn, "sendTransactionSync", e);
  });
}
function Fi(t) {
  return {
    addChain: (e) => du(t, e),
    deployContract: (e) => lu(t, e),
    getAddresses: () => hu(t),
    getCallsStatus: (e) => Xo(t, e),
    getCapabilities: (e) => xu(t, e),
    getChainId: () => lt(t),
    getPermissions: () => yu(t),
    prepareAuthorization: (e) => jn(t, e),
    prepareTransactionRequest: (e) => Rt(t, e),
    requestAddresses: () => gu(t),
    requestPermissions: (e) => bu(t, e),
    sendCalls: (e) => Qo(t, e),
    sendCallsSync: (e) => wu(t, e),
    sendRawTransaction: (e) => Xe(t, e),
    sendRawTransactionSync: (e) => mr(t, e),
    sendTransaction: (e) => se(t, e),
    sendTransactionSync: (e) => Vn(t, e),
    showCallsStatus: (e) => Eu(t, e),
    signAuthorization: (e) => vu(t, e),
    signMessage: (e) => Tu(t, e),
    signTransaction: (e) => Au(t, e),
    signTypedData: (e) => Iu(t, e),
    switchChain: (e) => Pu(t, e),
    waitForCallsStatus: (e) => en(t, e),
    watchAsset: (e) => Cu(t, e),
    writeContract: (e) => Ut(t, e),
    writeContractSync: (e) => Bu(t, e),
  };
}
function Lf(t) {
  let { key: e = "wallet", name: r = "Wallet Client", transport: o } = t;
  return Be(
    C(x({}, t), { key: e, name: r, transport: o, type: "walletClient" })
  ).extend(Fi);
}
function Mt(
  {
    key: t,
    methods: e,
    name: r,
    request: o,
    retryCount: n = 3,
    retryDelay: s = 150,
    timeout: i,
    type: a,
  },
  c
) {
  let m = nn();
  return {
    config: {
      key: t,
      methods: e,
      name: r,
      request: o,
      retryCount: n,
      retryDelay: s,
      timeout: i,
      type: a,
    },
    request: $a(o, { methods: e, retryCount: n, retryDelay: s, uid: m }),
    value: c,
  };
}
function Df(t, e = {}) {
  let {
    key: r = "custom",
    methods: o,
    name: n = "Custom Provider",
    retryDelay: s,
  } = e;
  return ({ retryCount: i }) =>
    Mt({
      key: r,
      methods: o,
      name: n,
      request: t.request.bind(t),
      retryCount: e.retryCount ?? i,
      retryDelay: s,
      type: "custom",
    });
}
function Mf(t, e = {}) {
  let {
    key: r = "fallback",
    name: o = "Fallback",
    rank: n = !1,
    shouldThrow: s = ku,
    retryCount: i,
    retryDelay: a,
  } = e;
  return (p) => {
    var l = p,
      { chain: c, pollingInterval: m = 4e3, timeout: d } = l,
      f = _(l, ["chain", "pollingInterval", "timeout"]);
    let h = t,
      y = () => {},
      g = Mt(
        {
          key: r,
          name: o,
          request(A) {
            return u(this, arguments, function* ({ method: w, params: E }) {
              let B,
                P = (I = 0) =>
                  u(this, null, function* () {
                    let k = h[I](
                      C(x({}, f), { chain: c, retryCount: 0, timeout: d })
                    );
                    try {
                      let S = yield k.request({ method: w, params: E });
                      return (
                        y({
                          method: w,
                          params: E,
                          response: S,
                          transport: k,
                          status: "success",
                        }),
                        S
                      );
                    } catch (S) {
                      if (
                        (y({
                          error: S,
                          method: w,
                          params: E,
                          transport: k,
                          status: "error",
                        }),
                        s(S) ||
                          I === h.length - 1 ||
                          ((B ??= h.slice(I + 1).some((R) => {
                            let { include: z, exclude: F } =
                              R({ chain: c }).config.methods || {};
                            return z ? z.includes(w) : F ? !F.includes(w) : !0;
                          })),
                          !B))
                      )
                        throw S;
                      return P(I + 1);
                    }
                  });
              return P();
            });
          },
          retryCount: i,
          retryDelay: a,
          type: "fallback",
        },
        {
          onResponse: (w) => (y = w),
          transports: h.map((w) => w({ chain: c, retryCount: 0 })),
        }
      );
    if (n) {
      let w = typeof n == "object" ? n : {};
      $f({
        chain: c,
        interval: w.interval ?? m,
        onTransports: (E) => (h = E),
        ping: w.ping,
        sampleCount: w.sampleCount,
        timeout: w.timeout,
        transports: h,
        weights: w.weights,
      });
    }
    return g;
  };
}
function ku(t) {
  return !!(
    "code" in t &&
    typeof t.code == "number" &&
    (t.code === De.code ||
      t.code === be.code ||
      hs.nodeMessage.test(t.message) ||
      t.code === 5e3)
  );
}
function $f({
  chain: t,
  interval: e = 4e3,
  onTransports: r,
  ping: o,
  sampleCount: n = 10,
  timeout: s = 1e3,
  transports: i,
  weights: a = {},
}) {
  let { stability: c = 0.7, latency: m = 0.3 } = a,
    d = [],
    f = () =>
      u(this, null, function* () {
        let p = yield Promise.all(
          i.map((y) =>
            u(this, null, function* () {
              let g = y({ chain: t, retryCount: 0, timeout: s }),
                b = Date.now(),
                w,
                E;
              try {
                yield o
                  ? o({ transport: g })
                  : g.request({ method: "net_listening" }),
                  (E = 1);
              } catch {
                E = 0;
              } finally {
                w = Date.now();
              }
              return { latency: w - b, success: E };
            })
          )
        );
        d.push(p), d.length > n && d.shift();
        let l = Math.max(
            ...d.map((y) => Math.max(...y.map(({ latency: g }) => g)))
          ),
          h = i
            .map((y, g) => {
              let b = d.map((P) => P[g].latency),
                E = 1 - b.reduce((P, I) => P + I, 0) / b.length / l,
                A = d.map((P) => P[g].success),
                B = A.reduce((P, I) => P + I, 0) / A.length;
              return B === 0 ? [0, g] : [m * E + c * B, g];
            })
            .sort((y, g) => g[0] - y[0]);
        r(h.map(([, y]) => i[y])), yield Ce(e), f();
      });
  f();
}
var _e = class extends N {
  constructor() {
    super(
      "No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.",
      { docsPath: "/docs/clients/intro", name: "UrlRequiredError" }
    );
  }
};
function Of(t, e = {}) {
  let {
    batch: r,
    fetchFn: o,
    fetchOptions: n,
    key: s = "http",
    methods: i,
    name: a = "HTTP JSON-RPC",
    onFetchRequest: c,
    onFetchResponse: m,
    retryDelay: d,
    raw: f,
  } = e;
  return ({ chain: p, retryCount: l, timeout: h }) => {
    let { batchSize: y = 1e3, wait: g = 0 } = typeof r == "object" ? r : {},
      b = e.retryCount ?? l,
      w = h ?? e.timeout ?? 1e4,
      E = t || p?.rpcUrls.default.http[0];
    if (!E) throw new _e();
    let A = yn(E, {
      fetchFn: o,
      fetchOptions: n,
      onRequest: c,
      onResponse: m,
      timeout: w,
    });
    return Mt(
      {
        key: s,
        methods: i,
        name: a,
        request(k) {
          return u(this, arguments, function* ({ method: P, params: I }) {
            let S = { method: P, params: I },
              { schedule: R } = jo({
                id: E,
                wait: g,
                shouldSplitBatch(G) {
                  return G.length > y;
                },
                fn: (G) => A.request({ body: G }),
                sort: (G, $t) => G.id - $t.id,
              }),
              z = (G) =>
                u(this, null, function* () {
                  return r ? R(G) : [yield A.request({ body: G })];
                }),
              [{ error: F, result: J }] = yield z(S);
            if (f) return { error: F, result: J };
            if (F) throw new xe({ body: S, error: F, url: E });
            return J;
          });
        },
        retryCount: b,
        retryDelay: d,
        timeout: w,
        type: "http",
      },
      { fetchOptions: n, url: E }
    );
  };
}
function Gf(t, e = {}) {
  let {
    keepAlive: r,
    key: o = "webSocket",
    methods: n,
    name: s = "WebSocket JSON-RPC",
    reconnect: i,
    retryDelay: a,
  } = e;
  return ({ chain: c, retryCount: m, timeout: d }) => {
    let f = e.retryCount ?? m,
      p = d ?? e.timeout ?? 1e4,
      l = t || c?.rpcUrls.default.webSocket?.[0],
      h = { keepAlive: r, reconnect: i };
    if (!l) throw new _e();
    return Mt(
      {
        key: o,
        methods: n,
        name: s,
        request(E) {
          return u(this, arguments, function* ({ method: b, params: w }) {
            let A = { method: b, params: w },
              B = yield or(l, h),
              { error: P, result: I } = yield B.requestAsync({
                body: A,
                timeout: p,
              });
            if (P) throw new xe({ body: A, error: P, url: l });
            return I;
          });
        },
        retryCount: f,
        retryDelay: a,
        timeout: p,
        type: "webSocket",
      },
      {
        getSocket() {
          return Ds(l);
        },
        getRpcClient() {
          return or(l, h);
        },
        subscribe(A) {
          return u(
            this,
            arguments,
            function* ({ params: b, onData: w, onError: E }) {
              let B = yield or(l, h),
                { result: P } = yield new Promise((k, S) =>
                  B.request({
                    body: { method: "eth_subscribe", params: b },
                    onError(R) {
                      S(R), E?.(R);
                    },
                    onResponse(R) {
                      if (R.error) {
                        S(R.error), E?.(R.error);
                        return;
                      }
                      if (typeof R.id == "number") {
                        k(R);
                        return;
                      }
                      R.method === "eth_subscription" && w(R.params);
                    },
                  })
                );
              return {
                subscriptionId: P,
                unsubscribe() {
                  return u(this, null, function* () {
                    return new Promise((k) =>
                      B.request({
                        body: { method: "eth_unsubscribe", params: [P] },
                        onResponse: k,
                      })
                    );
                  });
                },
              };
            }
          );
        },
      }
    );
  };
}
var Hi = class extends Error {
  constructor(e, r) {
    super(r),
      Object.defineProperty(this, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "details", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      (this.code = e),
      (this.details = r);
  }
};
var _i = "/docs/contract/decodeDeployData";
function jf(t) {
  let { abi: e, bytecode: r, data: o } = t;
  if (o === r) return { bytecode: r };
  let n = e.find((i) => "type" in i && i.type === "constructor");
  if (!n) throw new Zn({ docsPath: _i });
  if (!("inputs" in n)) throw new fo({ docsPath: _i });
  if (!n.inputs || n.inputs.length === 0) throw new fo({ docsPath: _i });
  return { args: Kt(n.inputs, `0x${o.replace(r, "")}`), bytecode: r };
}
function Vf(t) {
  let e = t.to ?? (typeof t.blobs[0] == "string" ? "hex" : "bytes"),
    r = typeof t.blobs[0] == "string" ? t.blobs.map((a) => tt(a)) : t.blobs,
    o = r.reduce((a, c) => a + c.length, 0),
    n = gr(new Uint8Array(o)),
    s = !0;
  for (let a of r) {
    let c = gr(a);
    for (; s && c.position < a.length; ) {
      c.incrementPosition(1);
      let m = 31;
      a.length - c.position < 31 && (m = a.length - c.position);
      for (let d in Array.from({ length: m })) {
        let f = c.readByte();
        if (f === 128 && !c.inspectBytes(c.remaining).includes(128)) {
          s = !1;
          break;
        }
        n.pushByte(f);
      }
    }
  }
  let i = n.bytes.slice(0, n.position);
  return e === "hex" ? Z(i) : i;
}
function Wf(t) {
  let { sidecars: e, version: r } = t,
    o = t.to ?? (typeof e[0].blob == "string" ? "hex" : "bytes"),
    n = [];
  for (let { commitment: s } of e)
    n.push(bs({ commitment: s, to: o, version: r }));
  return n;
}
var Kf = 2147483648;
function Jf(t) {
  if (t === 1) return 60n;
  if (t >= Kf || t < 0) throw new Lr({ chainId: t });
  return BigInt((2147483648 | t) >>> 0);
}
function qi({ blobToKzgCommitment: t, computeBlobKzgProof: e }) {
  return { blobToKzgCommitment: t, computeBlobKzgProof: e };
}
function Zf(t, e) {
  try {
    t.loadTrustedSetup(e);
  } catch (r) {
    let o = r;
    if (!o.message.includes("trusted setup is already loaded")) throw o;
  }
  return qi(t);
}
function Yf({ r: t, yParityAndS: e }) {
  let r = tt(e),
    o = r[0] & 128 ? 1 : 0,
    n = r;
  return o === 1 && (n[0] &= 127), { r: t, s: Z(n), yParity: o };
}
function Su(t) {
  let { r: e, s: r } = kt.Signature.fromCompact(t.slice(2, 130));
  return { r: T(e, { size: 32 }), yParityAndS: T(r, { size: 32 }) };
}
function Ru(t) {
  let { r: e, s: r } = kt.Signature.fromCompact(t.slice(2, 130)),
    o = +`0x${t.slice(130)}`,
    [n, s] = (() => {
      if (o === 0 || o === 1) return [void 0, o];
      if (o === 27) return [BigInt(o), 0];
      if (o === 28) return [BigInt(o), 1];
      throw new Error("Invalid yParityOrV value");
    })();
  return typeof n < "u"
    ? { r: T(e, { size: 32 }), s: T(r, { size: 32 }), v: n, yParity: s }
    : { r: T(e, { size: 32 }), s: T(r, { size: 32 }), yParity: s };
}
function Qf(t) {
  return u(this, null, function* () {
    let { serializedTransaction: e, signature: r } = t,
      o = Ti(e),
      n = r ?? { r: o.r, s: o.s, v: o.v, yParity: o.yParity },
      s = Is(
        C(x({}, o), {
          r: void 0,
          s: void 0,
          v: void 0,
          yParity: void 0,
          sidecars: void 0,
        })
      );
    return yield xt({ hash: $(s), signature: n });
  });
}
function Nu({ r: t, yParityAndS: e }) {
  return `0x${new kt.Signature(q(t), q(e)).toCompactHex()}`;
}
function Xf(t) {
  let { r: e, s: r, v: o, yParity: n } = t,
    s = Number(n ?? o - 27n),
    i = r;
  if (s === 1) {
    let a = tt(r);
    (a[0] |= 128), (i = Z(a));
  }
  return { r: e, yParityAndS: i };
}
export {
  er as a,
  Hs as b,
  v as c,
  dt as d,
  K as e,
  Lt as f,
  ke as g,
  Ur as h,
  Lr as i,
  Nr as j,
  Tt as k,
  Ps as l,
  xt as m,
  Fr as n,
  Hr as o,
  zt as p,
  _r as q,
  Ae as r,
  st as s,
  la as t,
  lt as u,
  Rt as v,
  Je as w,
  Sa as x,
  ks as y,
  Dr as z,
  Ie as A,
  Pe as B,
  Fa as C,
  Xu as D,
  ln as E,
  tm as F,
  Ua as G,
  La as H,
  ie as I,
  xn as J,
  zs as K,
  om as L,
  ja as M,
  sm as N,
  $r as O,
  um as P,
  Ms as Q,
  $s as R,
  Se as S,
  Gr as T,
  jr as U,
  Vr as V,
  Os as W,
  Wr as X,
  nr as Y,
  mm as Z,
  Kr as _,
  gn as $,
  Gs as aa,
  lm as ba,
  js as ca,
  bi as da,
  tf as ea,
  ef as fa,
  wi as ga,
  Ei as ha,
  rf as ia,
  of as ja,
  nf as ka,
  sf as la,
  af as ma,
  vi as na,
  Ti as oa,
  oo as pa,
  no as qa,
  lf as ra,
  hf as sa,
  ar as ta,
  Ec as ua,
  Dn as va,
  Pi as wa,
  Ci as xa,
  wt as ya,
  Jo as za,
  $n as Aa,
  ue as Ba,
  it as Ca,
  gt as Da,
  Gn as Ea,
  Fc as Fa,
  se as Ga,
  jn as Ha,
  zr as Ia,
  en as Ja,
  tn as Ka,
  Tu as La,
  Ut as Ma,
  Gu as Na,
  Be as Oa,
  ju as Pa,
  Si as Qa,
  zf as Ra,
  Ri as Sa,
  Uf as Ta,
  Fi as Ua,
  Lf as Va,
  Mt as Wa,
  Df as Xa,
  Mf as Ya,
  ku as Za,
  _e as _a,
  Of as $a,
  Gf as ab,
  Hi as bb,
  jf as cb,
  Vf as db,
  Wf as eb,
  Jf as fb,
  qi as gb,
  Zf as hb,
  Yf as ib,
  Su as jb,
  Ru as kb,
  Qf as lb,
  Nu as mb,
  Xf as nb,
};
