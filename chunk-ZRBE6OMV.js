import { a as de, b as ze } from "./chunk-Z3SE2D4B.js";
import {
  $ as te,
  $a as re,
  Dc as v,
  E as I,
  Q as L,
  U as T,
  W as A,
  Y as c,
  Z as i,
  ab as ne,
  b as ee,
  ba as y,
  c as V,
  cb as U,
  e as u,
  ga as G,
  ka as S,
  la as oe,
  pc as _,
  sb as se,
  tb as ie,
  ue as $,
  va as H,
  wb as fe,
  yc as me,
} from "./chunk-5G3DVQVW.js";
import { a as x, b as P, f as R } from "./chunk-VNDKUXGB.js";
function g(e, t = "hex") {
  let o = ae(e),
    r = S(new Uint8Array(o.length));
  return o.encode(r), t === "hex" ? c(r.bytes) : r.bytes;
}
function Ye(e, t = "bytes") {
  return g(e, t);
}
function Oe(e, t = "hex") {
  return g(e, t);
}
function ae(e) {
  return Array.isArray(e) ? we(e.map((t) => ae(t))) : Fe(e);
}
function we(e) {
  let t = e.reduce((n, s) => n + s.length, 0),
    o = ue(t);
  return {
    length: t <= 55 ? 1 + t : 1 + o + t,
    encode(n) {
      t <= 55
        ? n.pushByte(192 + t)
        : (n.pushByte(247 + o),
          o === 1
            ? n.pushUint8(t)
            : o === 2
            ? n.pushUint16(t)
            : o === 3
            ? n.pushUint24(t)
            : n.pushUint32(t));
      for (let { encode: s } of e) s(n);
    },
  };
}
function Fe(e) {
  let t = typeof e == "string" ? y(e) : e,
    o = ue(t.length);
  return {
    length:
      t.length === 1 && t[0] < 128
        ? 1
        : t.length <= 55
        ? 1 + t.length
        : 1 + o + t.length,
    encode(n) {
      t.length === 1 && t[0] < 128
        ? n.pushBytes(t)
        : t.length <= 55
        ? (n.pushByte(128 + t.length), n.pushBytes(t))
        : (n.pushByte(183 + o),
          o === 1
            ? n.pushUint8(t.length)
            : o === 2
            ? n.pushUint16(t.length)
            : o === 3
            ? n.pushUint24(t.length)
            : n.pushUint32(t.length),
          n.pushBytes(t));
    },
  };
}
function ue(e) {
  if (e < 2 ** 8) return 1;
  if (e < 2 ** 16) return 2;
  if (e < 2 ** 24) return 3;
  if (e < 2 ** 32) return 4;
  throw new u("Length is too large.");
}
var q = {
  "0x0": "legacy",
  "0x1": "eip2930",
  "0x2": "eip1559",
  "0x3": "eip4844",
  "0x4": "eip7702",
};
function J(e, t) {
  let o = P(x({}, e), {
    blockHash: e.blockHash ? e.blockHash : null,
    blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
    chainId: e.chainId ? T(e.chainId) : void 0,
    gas: e.gas ? BigInt(e.gas) : void 0,
    gasPrice: e.gasPrice ? BigInt(e.gasPrice) : void 0,
    maxFeePerBlobGas: e.maxFeePerBlobGas ? BigInt(e.maxFeePerBlobGas) : void 0,
    maxFeePerGas: e.maxFeePerGas ? BigInt(e.maxFeePerGas) : void 0,
    maxPriorityFeePerGas: e.maxPriorityFeePerGas
      ? BigInt(e.maxPriorityFeePerGas)
      : void 0,
    nonce: e.nonce ? T(e.nonce) : void 0,
    to: e.to ? e.to : null,
    transactionIndex: e.transactionIndex ? Number(e.transactionIndex) : null,
    type: e.type ? q[e.type] : void 0,
    typeHex: e.type ? e.type : void 0,
    value: e.value ? BigInt(e.value) : void 0,
    v: e.v ? BigInt(e.v) : void 0,
  });
  return (
    e.authorizationList && (o.authorizationList = Ee(e.authorizationList)),
    (o.yParity = (() => {
      if (e.yParity) return Number(e.yParity);
      if (typeof o.v == "bigint") {
        if (o.v === 0n || o.v === 27n) return 0;
        if (o.v === 1n || o.v === 28n) return 1;
        if (o.v >= 35n) return o.v % 2n === 0n ? 1 : 0;
      }
    })()),
    o.type === "legacy" &&
      (delete o.accessList,
      delete o.maxFeePerBlobGas,
      delete o.maxFeePerGas,
      delete o.maxPriorityFeePerGas,
      delete o.yParity),
    o.type === "eip2930" &&
      (delete o.maxFeePerBlobGas,
      delete o.maxFeePerGas,
      delete o.maxPriorityFeePerGas),
    o.type === "eip1559" && delete o.maxFeePerBlobGas,
    o
  );
}
var We = v("transaction", J);
function Ee(e) {
  return e.map((t) => ({
    address: t.address,
    chainId: Number(t.chainId),
    nonce: Number(t.nonce),
    r: t.r,
    s: t.s,
    yParity: Number(t.yParity),
  }));
}
function Le(e, t) {
  let o = (e.transactions ?? []).map((r) => (typeof r == "string" ? r : J(r)));
  return P(x({}, e), {
    baseFeePerGas: e.baseFeePerGas ? BigInt(e.baseFeePerGas) : null,
    blobGasUsed: e.blobGasUsed ? BigInt(e.blobGasUsed) : void 0,
    difficulty: e.difficulty ? BigInt(e.difficulty) : void 0,
    excessBlobGas: e.excessBlobGas ? BigInt(e.excessBlobGas) : void 0,
    gasLimit: e.gasLimit ? BigInt(e.gasLimit) : void 0,
    gasUsed: e.gasUsed ? BigInt(e.gasUsed) : void 0,
    hash: e.hash ? e.hash : null,
    logsBloom: e.logsBloom ? e.logsBloom : null,
    nonce: e.nonce ? e.nonce : null,
    number: e.number ? BigInt(e.number) : null,
    size: e.size ? BigInt(e.size) : void 0,
    timestamp: e.timestamp ? BigInt(e.timestamp) : void 0,
    transactions: o,
    totalDifficulty: e.totalDifficulty ? BigInt(e.totalDifficulty) : null,
  });
}
var et = v("block", Le);
function K(e) {
  let { kzg: t } = e,
    o = e.to ?? (typeof e.blobs[0] == "string" ? "hex" : "bytes"),
    r = typeof e.blobs[0] == "string" ? e.blobs.map((s) => y(s)) : e.blobs,
    n = [];
  for (let s of r) n.push(Uint8Array.from(t.blobToKzgCommitment(s)));
  return o === "bytes" ? n : n.map((s) => c(s));
}
function M(e) {
  let { kzg: t } = e,
    o = e.to ?? (typeof e.blobs[0] == "string" ? "hex" : "bytes"),
    r = typeof e.blobs[0] == "string" ? e.blobs.map((f) => y(f)) : e.blobs,
    n =
      typeof e.commitments[0] == "string"
        ? e.commitments.map((f) => y(f))
        : e.commitments,
    s = [];
  for (let f = 0; f < r.length; f++) {
    let m = r[f],
      d = n[f];
    s.push(Uint8Array.from(t.computeBlobKzgProof(m, d)));
  }
  return o === "bytes" ? s : s.map((f) => c(f));
}
ze();
function le(e, t) {
  let o = t || "hex",
    r = de(ee(e, { strict: !1 }) ? te(e) : e);
  return o === "bytes" ? r : A(r);
}
function ce(e) {
  let { commitment: t, version: o = 1 } = e,
    r = e.to ?? (typeof t == "string" ? "hex" : "bytes"),
    n = le(t, "bytes");
  return n.set([o], 0), r === "bytes" ? n : c(n);
}
function pe(e) {
  let { commitments: t, version: o } = e,
    r = e.to ?? (typeof t[0] == "string" ? "hex" : "bytes"),
    n = [];
  for (let s of t) n.push(ce({ commitment: s, to: r, version: o }));
  return n;
}
var D = class extends u {
    constructor({ maxSize: t, size: o }) {
      super("Blob size is too large.", {
        metaMessages: [`Max: ${t} bytes`, `Given: ${o} bytes`],
        name: "BlobSizeTooLargeError",
      });
    }
  },
  z = class extends u {
    constructor() {
      super("Blob data must not be empty.", { name: "EmptyBlobError" });
    }
  },
  j = class extends u {
    constructor({ hash: t, size: o }) {
      super(`Versioned hash "${t}" size is invalid.`, {
        metaMessages: ["Expected: 32", `Received: ${o}`],
        name: "InvalidVersionedHashSizeError",
      });
    }
  },
  Y = class extends u {
    constructor({ hash: t, version: o }) {
      super(`Versioned hash "${t}" version is invalid.`, {
        metaMessages: [`Expected: ${1}`, `Received: ${o}`],
        name: "InvalidVersionedHashVersionError",
      });
    }
  };
function xe(e) {
  let t = e.to ?? (typeof e.data == "string" ? "hex" : "bytes"),
    o = typeof e.data == "string" ? y(e.data) : e.data,
    r = V(o);
  if (!r) throw new z();
  if (r > 761855) throw new D({ maxSize: 761855, size: r });
  let n = [],
    s = !0,
    f = 0;
  for (; s; ) {
    let m = S(new Uint8Array(131072)),
      d = 0;
    for (; d < 4096; ) {
      let a = o.slice(f, f + 31);
      if ((m.pushByte(0), m.pushBytes(a), a.length < 31)) {
        m.pushByte(128), (s = !1);
        break;
      }
      d++, (f += 31);
    }
    n.push(m);
  }
  return t === "bytes" ? n.map((m) => m.bytes) : n.map((m) => c(m.bytes));
}
function he(e) {
  let { data: t, kzg: o, to: r } = e,
    n = e.blobs ?? xe({ data: t, to: r }),
    s = e.commitments ?? K({ blobs: n, kzg: o, to: r }),
    f = e.proofs ?? M({ blobs: n, commitments: s, kzg: o, to: r }),
    m = [];
  for (let d = 0; d < n.length; d++)
    m.push({ blob: n[d], commitment: s[d], proof: f[d] });
  return m;
}
function be(e) {
  if (e.type) return e.type;
  if (typeof e.authorizationList < "u") return "eip7702";
  if (
    typeof e.blobs < "u" ||
    typeof e.blobVersionedHashes < "u" ||
    typeof e.maxFeePerBlobGas < "u" ||
    typeof e.sidecars < "u"
  )
    return "eip4844";
  if (typeof e.maxFeePerGas < "u" || typeof e.maxPriorityFeePerGas < "u")
    return "eip1559";
  if (typeof e.gasPrice < "u")
    return typeof e.accessList < "u" ? "eip2930" : "legacy";
  throw new ie({ transaction: e });
}
function ye(e, { args: t, eventName: o } = {}) {
  return x(
    P(x({}, e), {
      blockHash: e.blockHash ? e.blockHash : null,
      blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
      logIndex: e.logIndex ? Number(e.logIndex) : null,
      transactionHash: e.transactionHash ? e.transactionHash : null,
      transactionIndex: e.transactionIndex ? Number(e.transactionIndex) : null,
    }),
    o ? { args: t, eventName: o } : {}
  );
}
function ge(e) {
  let { authorizationList: t } = e;
  if (t)
    for (let o of t) {
      let { chainId: r } = o,
        n = o.address;
      if (!G(n)) throw new I({ address: n });
      if (r < 0) throw new U({ chainId: r });
    }
  O(e);
}
function Pe(e) {
  let { blobVersionedHashes: t } = e;
  if (t) {
    if (t.length === 0) throw new z();
    for (let o of t) {
      let r = V(o),
        n = T(oe(o, 0, 1));
      if (r !== 32) throw new j({ hash: o, size: r });
      if (n !== 1) throw new Y({ hash: o, version: n });
    }
  }
  O(e);
}
function O(e) {
  let { chainId: t, maxPriorityFeePerGas: o, maxFeePerGas: r, to: n } = e;
  if (t <= 0) throw new U({ chainId: t });
  if (n && !G(n)) throw new I({ address: n });
  if (r && r > $) throw new _({ maxFeePerGas: r });
  if (o && r && o > r)
    throw new me({ maxFeePerGas: r, maxPriorityFeePerGas: o });
}
function Be(e) {
  let {
    chainId: t,
    maxPriorityFeePerGas: o,
    gasPrice: r,
    maxFeePerGas: n,
    to: s,
  } = e;
  if (t <= 0) throw new U({ chainId: t });
  if (s && !G(s)) throw new I({ address: s });
  if (o || n)
    throw new u(
      "`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid EIP-2930 Transaction attribute."
    );
  if (r && r > $) throw new _({ maxFeePerGas: r });
}
function Ie(e) {
  let {
    chainId: t,
    maxPriorityFeePerGas: o,
    gasPrice: r,
    maxFeePerGas: n,
    to: s,
  } = e;
  if (s && !G(s)) throw new I({ address: s });
  if (typeof t < "u" && t <= 0) throw new U({ chainId: t });
  if (o || n)
    throw new u(
      "`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid Legacy Transaction attribute."
    );
  if (r && r > $) throw new _({ maxFeePerGas: r });
}
function N(e) {
  if (!e || e.length === 0) return [];
  let t = [];
  for (let o = 0; o < e.length; o++) {
    let { address: r, storageKeys: n } = e[o];
    for (let s = 0; s < n.length; s++)
      if (n[s].length - 2 !== 64) throw new fe({ storageKey: n[s] });
    if (!G(r, { strict: !1 })) throw new I({ address: r });
    t.push([r, n]);
  }
  return t;
}
function Te(e) {
  if (!e || e.length === 0) return [];
  let t = [];
  for (let r of e) {
    let o = r,
      { chainId: n, nonce: s } = o,
      f = R(o, ["chainId", "nonce"]),
      m = r.address;
    t.push([n ? A(n) : "0x", m, s ? A(s) : "0x", ...w({}, f)]);
  }
  return t;
}
function bo(e, t) {
  let o = be(e);
  return o === "eip1559"
    ? Ce(e, t)
    : o === "eip2930"
    ? Ve(e, t)
    : o === "eip4844"
    ? Ne(e, t)
    : o === "eip7702"
    ? Ue(e, t)
    : Se(e, t);
}
function Ue(e, t) {
  let {
    authorizationList: o,
    chainId: r,
    gas: n,
    nonce: s,
    to: f,
    value: m,
    maxFeePerGas: d,
    maxPriorityFeePerGas: a,
    accessList: b,
    data: h,
  } = e;
  ge(e);
  let p = N(b),
    l = Te(o);
  return H([
    "0x04",
    g([
      i(r),
      s ? i(s) : "0x",
      a ? i(a) : "0x",
      d ? i(d) : "0x",
      n ? i(n) : "0x",
      f ?? "0x",
      m ? i(m) : "0x",
      h ?? "0x",
      p,
      l,
      ...w(e, t),
    ]),
  ]);
}
function Ne(e, t) {
  let {
    chainId: o,
    gas: r,
    nonce: n,
    to: s,
    value: f,
    maxFeePerBlobGas: m,
    maxFeePerGas: d,
    maxPriorityFeePerGas: a,
    accessList: b,
    data: h,
  } = e;
  Pe(e);
  let p = e.blobVersionedHashes,
    l = e.sidecars;
  if (e.blobs && (typeof p > "u" || typeof l > "u")) {
    let B = typeof e.blobs[0] == "string" ? e.blobs : e.blobs.map((E) => c(E)),
      C = e.kzg,
      F = K({ blobs: B, kzg: C });
    if ((typeof p > "u" && (p = pe({ commitments: F })), typeof l > "u")) {
      let E = M({ blobs: B, commitments: F, kzg: C });
      l = he({ blobs: B, commitments: F, proofs: E });
    }
  }
  let Q = N(b),
    W = [
      i(o),
      n ? i(n) : "0x",
      a ? i(a) : "0x",
      d ? i(d) : "0x",
      r ? i(r) : "0x",
      s ?? "0x",
      f ? i(f) : "0x",
      h ?? "0x",
      Q,
      m ? i(m) : "0x",
      p ?? [],
      ...w(e, t),
    ],
    X = [],
    Z = [],
    k = [];
  if (l)
    for (let B = 0; B < l.length; B++) {
      let { blob: C, commitment: F, proof: E } = l[B];
      X.push(C), Z.push(F), k.push(E);
    }
  return H(["0x03", l ? g([W, X, Z, k]) : g(W)]);
}
function Ce(e, t) {
  let {
    chainId: o,
    gas: r,
    nonce: n,
    to: s,
    value: f,
    maxFeePerGas: m,
    maxPriorityFeePerGas: d,
    accessList: a,
    data: b,
  } = e;
  O(e);
  let h = N(a),
    p = [
      i(o),
      n ? i(n) : "0x",
      d ? i(d) : "0x",
      m ? i(m) : "0x",
      r ? i(r) : "0x",
      s ?? "0x",
      f ? i(f) : "0x",
      b ?? "0x",
      h,
      ...w(e, t),
    ];
  return H(["0x02", g(p)]);
}
function Ve(e, t) {
  let {
    chainId: o,
    gas: r,
    data: n,
    nonce: s,
    to: f,
    value: m,
    accessList: d,
    gasPrice: a,
  } = e;
  Be(e);
  let b = N(d),
    h = [
      i(o),
      s ? i(s) : "0x",
      a ? i(a) : "0x",
      r ? i(r) : "0x",
      f ?? "0x",
      m ? i(m) : "0x",
      n ?? "0x",
      b,
      ...w(e, t),
    ];
  return H(["0x01", g(h)]);
}
function Se(e, t) {
  let {
    chainId: o = 0,
    gas: r,
    data: n,
    nonce: s,
    to: f,
    value: m,
    gasPrice: d,
  } = e;
  Ie(e);
  let a = [
    s ? i(s) : "0x",
    d ? i(d) : "0x",
    r ? i(r) : "0x",
    f ?? "0x",
    m ? i(m) : "0x",
    n ?? "0x",
  ];
  if (t) {
    let b = (() => {
        if (t.v >= 35n)
          return (t.v - 35n) / 2n > 0 ? t.v : 27n + (t.v === 35n ? 0n : 1n);
        if (o > 0) return BigInt(o * 2) + BigInt(35n + t.v - 27n);
        let l = 27n + (t.v === 27n ? 0n : 1n);
        if (t.v !== l) throw new se({ v: t.v });
        return l;
      })(),
      h = L(t.r),
      p = L(t.s);
    a = [...a, i(b), h === "0x00" ? "0x" : h, p === "0x00" ? "0x" : p];
  } else o > 0 && (a = [...a, i(o), "0x", "0x"]);
  return g(a);
}
function w(e, t) {
  let o = t ?? e,
    { v: r, yParity: n } = o;
  if (typeof o.r > "u") return [];
  if (typeof o.s > "u") return [];
  if (typeof r > "u" && typeof n > "u") return [];
  let s = L(o.r),
    f = L(o.s);
  return [
    typeof n == "number"
      ? n
        ? i(1)
        : "0x"
      : r === 0n
      ? "0x"
      : r === 1n
      ? i(1)
      : r === 27n
      ? "0x"
      : i(1),
    s === "0x00" ? "0x" : s,
    f === "0x00" ? "0x" : f,
  ];
}
function Po({ chain: e, currentChainId: t }) {
  if (!e) throw new ne();
  if (t !== e.id) throw new re({ chain: e, currentChainId: t });
}
function Io(e) {
  return x({ formatters: void 0, fees: void 0, serializers: void 0 }, e);
}
function vo({ chains: e, id: t }) {
  return e.find((o) => o.id === t);
}
var _e = { "0x0": "reverted", "0x1": "success" };
function $e(e, t) {
  let o = P(x({}, e), {
    blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
    contractAddress: e.contractAddress ? e.contractAddress : null,
    cumulativeGasUsed: e.cumulativeGasUsed ? BigInt(e.cumulativeGasUsed) : null,
    effectiveGasPrice: e.effectiveGasPrice ? BigInt(e.effectiveGasPrice) : null,
    gasUsed: e.gasUsed ? BigInt(e.gasUsed) : null,
    logs: e.logs ? e.logs.map((r) => ye(r)) : null,
    to: e.to ? e.to : null,
    transactionIndex: e.transactionIndex ? T(e.transactionIndex) : null,
    status: e.status ? _e[e.status] : null,
    type: e.type ? q[e.type] || e.type : null,
  });
  return (
    e.blobGasPrice && (o.blobGasPrice = BigInt(e.blobGasPrice)),
    e.blobGasUsed && (o.blobGasUsed = BigInt(e.blobGasUsed)),
    o
  );
}
var Ao = v("transactionReceipt", $e);
var Ge = class extends u {
    constructor({ docsPath: t } = {}) {
      super(
        [
          "Could not find an Account to execute with this Action.",
          "Please provide an Account with the `account` argument on the Action, or by supplying an `account` to the Client.",
        ].join(`
`),
        { docsPath: t, docsSlug: "account", name: "AccountNotFoundError" }
      );
    }
  },
  ve = class extends u {
    constructor({ docsPath: t, metaMessages: o, type: r }) {
      super(`Account type "${r}" is not supported.`, {
        docsPath: t,
        metaMessages: o,
        name: "AccountTypeNotSupportedError",
      });
    }
  };
export {
  g as a,
  Ye as b,
  Oe as c,
  q as d,
  J as e,
  We as f,
  Le as g,
  et as h,
  K as i,
  M as j,
  le as k,
  ce as l,
  pe as m,
  xe as n,
  he as o,
  be as p,
  ye as q,
  ge as r,
  Pe as s,
  O as t,
  Be as u,
  Ie as v,
  N as w,
  bo as x,
  w as y,
  Po as z,
  Io as A,
  vo as B,
  _e as C,
  $e as D,
  Ao as E,
  Ge as F,
  ve as G,
};
