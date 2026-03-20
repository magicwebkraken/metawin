import {
  Aa as K,
  B as Y0,
  Bc as ie,
  Cb as g0,
  Cc as oe,
  E as k,
  Fc as fe,
  H as y0,
  Hb as ae,
  Ib as se,
  Jb as w0,
  Ra as x0,
  Ya as C,
  Z as H,
  Za as S,
  _a as K0,
  a as N,
  b as k0,
  bb as h0,
  db as Q0,
  e as M,
  eb as Z0,
  f as V0,
  fb as ee,
  g as b0,
  ga as V,
  gb as te,
  hb as Q,
  la as l0,
  n as W0,
  o as m0,
  ob as ne,
  pb as re,
  t as v,
  ta as X0,
  u as X,
  v as J0,
  va as P,
  ve as ue,
  za as w,
} from "./chunk-5G3DVQVW.js";
import { a as l, b as G, f as U, n as h } from "./chunk-VNDKUXGB.js";
var pe = "0.1.1";
function de() {
  return pe;
}
var m = class e extends Error {
  constructor(t, n = {}) {
    let r = (() => {
        if (n.cause instanceof e) {
          if (n.cause.details) return n.cause.details;
          if (n.cause.shortMessage) return n.cause.shortMessage;
        }
        return n.cause &&
          "details" in n.cause &&
          typeof n.cause.details == "string"
          ? n.cause.details
          : n.cause?.message
          ? n.cause.message
          : n.details;
      })(),
      a = (n.cause instanceof e && n.cause.docsPath) || n.docsPath,
      i = `https://oxlib.sh${a ?? ""}`,
      u = [
        t || "An error occurred.",
        ...(n.metaMessages ? ["", ...n.metaMessages] : []),
        ...(r || a
          ? ["", r ? `Details: ${r}` : void 0, a ? `See: ${i}` : void 0]
          : []),
      ].filter((f) => typeof f == "string").join(`
`);
    super(u, n.cause ? { cause: n.cause } : void 0),
      Object.defineProperty(this, "details", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "docs", {
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
      Object.defineProperty(this, "shortMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "cause", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "BaseError",
      }),
      Object.defineProperty(this, "version", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: `ox@${de()}`,
      }),
      (this.cause = n.cause),
      (this.details = r),
      (this.docs = i),
      (this.docsPath = a),
      (this.shortMessage = t);
  }
  walk(t) {
    return ce(this, t);
  }
};
function ce(e, t) {
  return t?.(e)
    ? e
    : e && typeof e == "object" && "cause" in e && e.cause
    ? ce(e.cause, t)
    : t
    ? null
    : e;
}
function O(e, t) {
  if (R(e) > t) throw new Z({ givenSize: R(e), maxSize: t });
}
function me(e, t) {
  if (typeof t == "number" && t > 0 && t > R(e) - 1)
    throw new W({ offset: t, position: "start", size: R(e) });
}
function ye(e, t, n) {
  if (typeof t == "number" && typeof n == "number" && R(e) !== n - t)
    throw new W({ offset: n, position: "end", size: R(e) });
}
var A = { zero: 48, nine: 57, A: 65, F: 70, a: 97, f: 102 };
function v0(e) {
  if (e >= A.zero && e <= A.nine) return e - A.zero;
  if (e >= A.A && e <= A.F) return e - (A.A - 10);
  if (e >= A.a && e <= A.f) return e - (A.a - 10);
}
function le(e, t = {}) {
  let { dir: n, size: r = 32 } = t;
  if (r === 0) return e;
  if (e.length > r)
    throw new e0({ size: e.length, targetSize: r, type: "Bytes" });
  let a = new Uint8Array(r);
  for (let s = 0; s < r; s++) {
    let i = n === "right";
    a[i ? s : r - s - 1] = e[i ? s : e.length - s - 1];
  }
  return a;
}
function A0(e, t = {}) {
  let { dir: n = "left" } = t,
    r = e,
    a = 0;
  for (
    let s = 0;
    s < r.length - 1 &&
    r[n === "left" ? s : r.length - s - 1].toString() === "0";
    s++
  )
    a++;
  return (r = n === "left" ? r.slice(a) : r.slice(0, r.length - a)), r;
}
function D(e, t) {
  if (F(e) > t) throw new t0({ givenSize: F(e), maxSize: t });
}
function xe(e, t) {
  if (typeof t == "number" && t > 0 && t > F(e) - 1)
    throw new J({ offset: t, position: "start", size: F(e) });
}
function he(e, t, n) {
  if (typeof t == "number" && typeof n == "number" && F(e) !== n - t)
    throw new J({ offset: n, position: "end", size: F(e) });
}
function E0(e, t = {}) {
  let { dir: n, size: r = 32 } = t;
  if (r === 0) return e;
  let a = e.replace("0x", "");
  if (a.length > r * 2)
    throw new n0({ size: Math.ceil(a.length / 2), targetSize: r, type: "Hex" });
  return `0x${a[n === "right" ? "padEnd" : "padStart"](r * 2, "0")}`;
}
function ge(e, t = {}) {
  let { dir: n = "left" } = t,
    r = e.replace("0x", ""),
    a = 0;
  for (
    let s = 0;
    s < r.length - 1 &&
    r[n === "left" ? s : r.length - s - 1].toString() === "0";
    s++
  )
    a++;
  return (
    (r = n === "left" ? r.slice(a) : r.slice(0, r.length - a)),
    r === "0"
      ? "0x"
      : n === "right" && r.length % 2 === 1
      ? `0x${r}0`
      : `0x${r}`
  );
}
var Ke = "#__bigint";
function a0(e, t, n) {
  return JSON.stringify(
    e,
    (r, a) =>
      typeof t == "function"
        ? t(r, a)
        : typeof a == "bigint"
        ? a.toString() + Ke
        : a,
    n
  );
}
var Qe = new TextDecoder(),
  Ze = new TextEncoder();
function et(e) {
  if (!(e instanceof Uint8Array)) {
    if (!e) throw new L(e);
    if (typeof e != "object") throw new L(e);
    if (!("BYTES_PER_ELEMENT" in e)) throw new L(e);
    if (e.BYTES_PER_ELEMENT !== 1 || e.constructor.name !== "Uint8Array")
      throw new L(e);
  }
}
function Bt(e) {
  return e instanceof Uint8Array ? e : typeof e == "string" ? nt(e) : tt(e);
}
function tt(e) {
  return e instanceof Uint8Array ? e : new Uint8Array(e);
}
function nt(e, t = {}) {
  let { size: n } = t,
    r = e;
  n && (D(e, n), (r = M0(e, n)));
  let a = r.slice(2);
  a.length % 2 && (a = `0${a}`);
  let s = a.length / 2,
    i = new Uint8Array(s);
  for (let u = 0, f = 0; u < s; u++) {
    let d = v0(a.charCodeAt(f++)),
      c = v0(a.charCodeAt(f++));
    if (d === void 0 || c === void 0)
      throw new m(
        `Invalid byte sequence ("${a[f - 2]}${a[f - 1]}" in "${a}").`
      );
    i[u] = d * 16 + c;
  }
  return i;
}
function Mt(e, t = {}) {
  let { size: n } = t,
    r = Ze.encode(e);
  return typeof n == "number" ? (O(r, n), rt(r, n)) : r;
}
function rt(e, t) {
  return le(e, { dir: "right", size: t });
}
function R(e) {
  return e.length;
}
function St(e, t, n, r = {}) {
  let { strict: a } = r;
  me(e, t);
  let s = e.slice(t, n);
  return a && ye(s, t, n), s;
}
function Tt(e, t = {}) {
  let { size: n } = t;
  typeof n < "u" && O(e, n);
  let r = j(e, t);
  return S0(r, t);
}
function zt(e, t = {}) {
  let { size: n } = t,
    r = e;
  if ((typeof n < "u" && (O(r, n), (r = at(r))), r.length > 1 || r[0] > 1))
    throw new B0(r);
  return !!r[0];
}
function Rt(e, t = {}) {
  let { size: n } = t;
  typeof n < "u" && O(e, n);
  let r = j(e, t);
  return Ae(r, t);
}
function Ft(e, t = {}) {
  let { size: n } = t,
    r = e;
  return typeof n < "u" && (O(r, n), (r = st(r))), Qe.decode(r);
}
function at(e) {
  return A0(e, { dir: "left" });
}
function st(e) {
  return A0(e, { dir: "right" });
}
function $t(e) {
  try {
    return et(e), !0;
  } catch {
    return !1;
  }
}
var B0 = class extends m {
    constructor(t) {
      super(`Bytes value \`${t}\` is not a valid boolean.`, {
        metaMessages: [
          "The bytes array must contain a single byte of either a `0` or `1` value.",
        ],
      }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "Bytes.InvalidBytesBooleanError",
        });
    }
  },
  L = class extends m {
    constructor(t) {
      super(
        `Value \`${
          typeof t == "object" ? a0(t) : t
        }\` of type \`${typeof t}\` is an invalid Bytes value.`,
        { metaMessages: ["Bytes values must be of type `Bytes`."] }
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "Bytes.InvalidBytesTypeError",
        });
    }
  },
  Z = class extends m {
    constructor({ givenSize: t, maxSize: n }) {
      super(`Size cannot exceed \`${n}\` bytes. Given size: \`${t}\` bytes.`),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "Bytes.SizeOverflowError",
        });
    }
  },
  W = class extends m {
    constructor({ offset: t, position: n, size: r }) {
      super(
        `Slice ${
          n === "start" ? "starting" : "ending"
        } at offset \`${t}\` is out-of-bounds (size: \`${r}\`).`
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "Bytes.SliceOffsetOutOfBoundsError",
        });
    }
  },
  e0 = class extends m {
    constructor({ size: t, targetSize: n, type: r }) {
      super(
        `${r.charAt(0).toUpperCase()}${r
          .slice(1)
          .toLowerCase()} size (\`${t}\`) exceeds padding size (\`${n}\`).`
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "Bytes.SizeExceedsPaddingSizeError",
        });
    }
  };
var it = new TextEncoder(),
  ot = Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, "0"));
function ft(e, t = {}) {
  let { strict: n = !1 } = t;
  if (!e) throw new s0(e);
  if (typeof e != "string") throw new s0(e);
  if (n && !/^0x[0-9a-fA-F]*$/.test(e)) throw new i0(e);
  if (!e.startsWith("0x")) throw new i0(e);
}
function It(...e) {
  return `0x${e.reduce((t, n) => t + n.replace("0x", ""), "")}`;
}
function Nt(e) {
  return e instanceof Uint8Array
    ? j(e)
    : Array.isArray(e)
    ? j(new Uint8Array(e))
    : e;
}
function Ht(e, t = {}) {
  let n = `0x${Number(e)}`;
  return typeof t.size == "number" ? (D(n, t.size), Ee(n, t.size)) : n;
}
function j(e, t = {}) {
  let n = "";
  for (let a = 0; a < e.length; a++) n += ot[e[a]];
  let r = `0x${n}`;
  return typeof t.size == "number" ? (D(r, t.size), M0(r, t.size)) : r;
}
function g(e, t = {}) {
  let { signed: n, size: r } = t,
    a = BigInt(e),
    s;
  r
    ? n
      ? (s = (1n << (BigInt(r) * 8n - 1n)) - 1n)
      : (s = 2n ** (BigInt(r) * 8n) - 1n)
    : typeof e == "number" && (s = BigInt(Number.MAX_SAFE_INTEGER));
  let i = typeof s == "bigint" && n ? -s - 1n : 0;
  if ((s && a > s) || a < i) {
    let d = typeof e == "bigint" ? "n" : "";
    throw new T0({
      max: s ? `${s}${d}` : void 0,
      min: `${i}${d}`,
      signed: n,
      size: r,
      value: `${e}${d}`,
    });
  }
  let f = `0x${(n && a < 0 ? (1n << BigInt(r * 8)) + BigInt(a) : a).toString(
    16
  )}`;
  return r ? Ee(f, r) : f;
}
function Pt(e, t = {}) {
  return j(it.encode(e), t);
}
function Ee(e, t) {
  return E0(e, { dir: "left", size: t });
}
function M0(e, t) {
  return E0(e, { dir: "right", size: t });
}
function Ct(e, t, n, r = {}) {
  let { strict: a } = r;
  xe(e, t);
  let s = `0x${e.replace("0x", "").slice((t ?? 0) * 2, (n ?? e.length) * 2)}`;
  return a && he(s, t, n), s;
}
function F(e) {
  return Math.ceil((e.length - 2) / 2);
}
function Ot(e) {
  return ge(e, { dir: "left" });
}
function S0(e, t = {}) {
  let { signed: n } = t;
  t.size && D(e, t.size);
  let r = BigInt(e);
  if (!n) return r;
  let a = (e.length - 2) / 2,
    s = (1n << (BigInt(a) * 8n)) - 1n,
    i = s >> 1n;
  return r <= i ? r : r - s - 1n;
}
function Ae(e, t = {}) {
  let { signed: n, size: r } = t;
  return Number(!n && !r ? e : S0(e, t));
}
function Dt(e, t = {}) {
  let { strict: n = !1 } = t;
  try {
    return ft(e, { strict: n }), !0;
  } catch {
    return !1;
  }
}
var T0 = class extends m {
  constructor({ max: t, min: n, signed: r, size: a, value: s }) {
    super(
      `Number \`${s}\` is not in safe${a ? ` ${a * 8}-bit` : ""}${
        r ? " signed" : " unsigned"
      } integer range ${t ? `(\`${n}\` to \`${t}\`)` : `(above \`${n}\`)`}`
    ),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "Hex.IntegerOutOfRangeError",
      });
  }
};
var s0 = class extends m {
    constructor(t) {
      super(
        `Value \`${
          typeof t == "object" ? a0(t) : t
        }\` of type \`${typeof t}\` is an invalid hex type.`,
        { metaMessages: ['Hex types must be represented as `"0x${string}"`.'] }
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "Hex.InvalidHexTypeError",
        });
    }
  },
  i0 = class extends m {
    constructor(t) {
      super(`Value \`${t}\` is an invalid hex value.`, {
        metaMessages: [
          'Hex values must start with `"0x"` and contain only hexadecimal characters (0-9, a-f, A-F).',
        ],
      }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "Hex.InvalidHexValueError",
        });
    }
  };
var t0 = class extends m {
    constructor({ givenSize: t, maxSize: n }) {
      super(`Size cannot exceed \`${n}\` bytes. Given size: \`${t}\` bytes.`),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "Hex.SizeOverflowError",
        });
    }
  },
  J = class extends m {
    constructor({ offset: t, position: n, size: r }) {
      super(
        `Slice ${
          n === "start" ? "starting" : "ending"
        } at offset \`${t}\` is out-of-bounds (size: \`${r}\`).`
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "Hex.SliceOffsetOutOfBoundsError",
        });
    }
  },
  n0 = class extends m {
    constructor({ size: t, targetSize: n, type: r }) {
      super(
        `${r.charAt(0).toUpperCase()}${r
          .slice(1)
          .toLowerCase()} size (\`${t}\`) exceeds padding size (\`${n}\`).`
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "Hex.SizeExceedsPaddingSizeError",
        });
    }
  };
function Be(e) {
  return {
    address: e.address,
    amount: g(e.amount),
    index: g(e.index),
    validatorIndex: g(e.validatorIndex),
  };
}
function Me(e) {
  return l(
    l(
      l(
        l(
          l(
            l(
              l(
                l(
                  {},
                  typeof e.baseFeePerGas == "bigint" && {
                    baseFeePerGas: g(e.baseFeePerGas),
                  }
                ),
                typeof e.blobBaseFee == "bigint" && {
                  blobBaseFee: g(e.blobBaseFee),
                }
              ),
              typeof e.feeRecipient == "string" && {
                feeRecipient: e.feeRecipient,
              }
            ),
            typeof e.gasLimit == "bigint" && { gasLimit: g(e.gasLimit) }
          ),
          typeof e.number == "bigint" && { number: g(e.number) }
        ),
        typeof e.prevRandao == "bigint" && { prevRandao: g(e.prevRandao) }
      ),
      typeof e.time == "bigint" && { time: g(e.time) }
    ),
    e.withdrawals && { withdrawals: e.withdrawals.map(Be) }
  );
}
var z0 = [
    {
      inputs: [
        {
          components: [
            { name: "target", type: "address" },
            { name: "allowFailure", type: "bool" },
            { name: "callData", type: "bytes" },
          ],
          name: "calls",
          type: "tuple[]",
        },
      ],
      name: "aggregate3",
      outputs: [
        {
          components: [
            { name: "success", type: "bool" },
            { name: "returnData", type: "bytes" },
          ],
          name: "returnData",
          type: "tuple[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getCurrentBlockTimestamp",
      outputs: [
        { internalType: "uint256", name: "timestamp", type: "uint256" },
      ],
      stateMutability: "view",
      type: "function",
    },
  ],
  o0 = [
    {
      name: "query",
      type: "function",
      stateMutability: "view",
      inputs: [
        {
          type: "tuple[]",
          name: "queries",
          components: [
            { type: "address", name: "sender" },
            { type: "string[]", name: "urls" },
            { type: "bytes", name: "data" },
          ],
        },
      ],
      outputs: [
        { type: "bool[]", name: "failures" },
        { type: "bytes[]", name: "responses" },
      ],
    },
    {
      name: "HttpError",
      type: "error",
      inputs: [
        { type: "uint16", name: "status" },
        { type: "string", name: "message" },
      ],
    },
  ],
  Se = [
    {
      inputs: [{ name: "dns", type: "bytes" }],
      name: "DNSDecodingFailed",
      type: "error",
    },
    {
      inputs: [{ name: "ens", type: "string" }],
      name: "DNSEncodingFailed",
      type: "error",
    },
    { inputs: [], name: "EmptyAddress", type: "error" },
    {
      inputs: [
        { name: "status", type: "uint16" },
        { name: "message", type: "string" },
      ],
      name: "HttpError",
      type: "error",
    },
    { inputs: [], name: "InvalidBatchGatewayResponse", type: "error" },
    {
      inputs: [{ name: "errorData", type: "bytes" }],
      name: "ResolverError",
      type: "error",
    },
    {
      inputs: [
        { name: "name", type: "bytes" },
        { name: "resolver", type: "address" },
      ],
      name: "ResolverNotContract",
      type: "error",
    },
    {
      inputs: [{ name: "name", type: "bytes" }],
      name: "ResolverNotFound",
      type: "error",
    },
    {
      inputs: [
        { name: "primary", type: "string" },
        { name: "primaryAddress", type: "bytes" },
      ],
      name: "ReverseAddressMismatch",
      type: "error",
    },
    {
      inputs: [{ internalType: "bytes4", name: "selector", type: "bytes4" }],
      name: "UnsupportedResolverProfile",
      type: "error",
    },
  ],
  qt = [
    ...Se,
    {
      name: "resolveWithGateways",
      type: "function",
      stateMutability: "view",
      inputs: [
        { name: "name", type: "bytes" },
        { name: "data", type: "bytes" },
        { name: "gateways", type: "string[]" },
      ],
      outputs: [
        { name: "", type: "bytes" },
        { name: "address", type: "address" },
      ],
    },
  ],
  Gt = [
    ...Se,
    {
      name: "reverseWithGateways",
      type: "function",
      stateMutability: "view",
      inputs: [
        { type: "bytes", name: "reverseName" },
        { type: "uint256", name: "coinType" },
        { type: "string[]", name: "gateways" },
      ],
      outputs: [
        { type: "string", name: "resolvedName" },
        { type: "address", name: "resolver" },
        { type: "address", name: "reverseResolver" },
      ],
    },
  ],
  Ut = [
    {
      name: "text",
      type: "function",
      stateMutability: "view",
      inputs: [
        { name: "name", type: "bytes32" },
        { name: "key", type: "string" },
      ],
      outputs: [{ name: "", type: "string" }],
    },
  ],
  kt = [
    {
      name: "addr",
      type: "function",
      stateMutability: "view",
      inputs: [{ name: "name", type: "bytes32" }],
      outputs: [{ name: "", type: "address" }],
    },
    {
      name: "addr",
      type: "function",
      stateMutability: "view",
      inputs: [
        { name: "name", type: "bytes32" },
        { name: "coinType", type: "uint256" },
      ],
      outputs: [{ name: "", type: "bytes" }],
    },
  ],
  Vt = [
    {
      name: "isValidSignature",
      type: "function",
      stateMutability: "view",
      inputs: [
        { name: "hash", type: "bytes32" },
        { name: "signature", type: "bytes" },
      ],
      outputs: [{ name: "", type: "bytes4" }],
    },
  ],
  Wt = [
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
  ],
  Jt = [
    {
      type: "event",
      name: "Approval",
      inputs: [
        { indexed: !0, name: "owner", type: "address" },
        { indexed: !0, name: "spender", type: "address" },
        { indexed: !1, name: "value", type: "uint256" },
      ],
    },
    {
      type: "event",
      name: "Transfer",
      inputs: [
        { indexed: !0, name: "from", type: "address" },
        { indexed: !0, name: "to", type: "address" },
        { indexed: !1, name: "value", type: "uint256" },
      ],
    },
    {
      type: "function",
      name: "allowance",
      stateMutability: "view",
      inputs: [
        { name: "owner", type: "address" },
        { name: "spender", type: "address" },
      ],
      outputs: [{ type: "uint256" }],
    },
    {
      type: "function",
      name: "approve",
      stateMutability: "nonpayable",
      inputs: [
        { name: "spender", type: "address" },
        { name: "amount", type: "uint256" },
      ],
      outputs: [{ type: "bool" }],
    },
    {
      type: "function",
      name: "balanceOf",
      stateMutability: "view",
      inputs: [{ name: "account", type: "address" }],
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
      name: "name",
      stateMutability: "view",
      inputs: [],
      outputs: [{ type: "string" }],
    },
    {
      type: "function",
      name: "symbol",
      stateMutability: "view",
      inputs: [],
      outputs: [{ type: "string" }],
    },
    {
      type: "function",
      name: "totalSupply",
      stateMutability: "view",
      inputs: [],
      outputs: [{ type: "uint256" }],
    },
    {
      type: "function",
      name: "transfer",
      stateMutability: "nonpayable",
      inputs: [
        { name: "recipient", type: "address" },
        { name: "amount", type: "uint256" },
      ],
      outputs: [{ type: "bool" }],
    },
    {
      type: "function",
      name: "transferFrom",
      stateMutability: "nonpayable",
      inputs: [
        { name: "sender", type: "address" },
        { name: "recipient", type: "address" },
        { name: "amount", type: "uint256" },
      ],
      outputs: [{ type: "bool" }],
    },
  ],
  Yt = [
    {
      type: "event",
      name: "Approval",
      inputs: [
        { indexed: !0, name: "owner", type: "address" },
        { indexed: !0, name: "spender", type: "address" },
        { indexed: !1, name: "value", type: "uint256" },
      ],
    },
    {
      type: "event",
      name: "Transfer",
      inputs: [
        { indexed: !0, name: "from", type: "address" },
        { indexed: !0, name: "to", type: "address" },
        { indexed: !1, name: "value", type: "uint256" },
      ],
    },
    {
      type: "function",
      name: "allowance",
      stateMutability: "view",
      inputs: [
        { name: "owner", type: "address" },
        { name: "spender", type: "address" },
      ],
      outputs: [{ type: "uint256" }],
    },
    {
      type: "function",
      name: "approve",
      stateMutability: "nonpayable",
      inputs: [
        { name: "spender", type: "address" },
        { name: "amount", type: "uint256" },
      ],
      outputs: [{ type: "bool" }],
    },
    {
      type: "function",
      name: "balanceOf",
      stateMutability: "view",
      inputs: [{ name: "account", type: "address" }],
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
      name: "name",
      stateMutability: "view",
      inputs: [],
      outputs: [{ type: "bytes32" }],
    },
    {
      type: "function",
      name: "symbol",
      stateMutability: "view",
      inputs: [],
      outputs: [{ type: "bytes32" }],
    },
    {
      type: "function",
      name: "totalSupply",
      stateMutability: "view",
      inputs: [],
      outputs: [{ type: "uint256" }],
    },
    {
      type: "function",
      name: "transfer",
      stateMutability: "nonpayable",
      inputs: [
        { name: "recipient", type: "address" },
        { name: "amount", type: "uint256" },
      ],
      outputs: [{ type: "bool" }],
    },
    {
      type: "function",
      name: "transferFrom",
      stateMutability: "nonpayable",
      inputs: [
        { name: "sender", type: "address" },
        { name: "recipient", type: "address" },
        { name: "amount", type: "uint256" },
      ],
      outputs: [{ type: "bool" }],
    },
  ],
  Xt = [
    {
      inputs: [
        { internalType: "address", name: "sender", type: "address" },
        { internalType: "uint256", name: "balance", type: "uint256" },
        { internalType: "uint256", name: "needed", type: "uint256" },
        { internalType: "uint256", name: "tokenId", type: "uint256" },
      ],
      name: "ERC1155InsufficientBalance",
      type: "error",
    },
    {
      inputs: [{ internalType: "address", name: "approver", type: "address" }],
      name: "ERC1155InvalidApprover",
      type: "error",
    },
    {
      inputs: [
        { internalType: "uint256", name: "idsLength", type: "uint256" },
        { internalType: "uint256", name: "valuesLength", type: "uint256" },
      ],
      name: "ERC1155InvalidArrayLength",
      type: "error",
    },
    {
      inputs: [{ internalType: "address", name: "operator", type: "address" }],
      name: "ERC1155InvalidOperator",
      type: "error",
    },
    {
      inputs: [{ internalType: "address", name: "receiver", type: "address" }],
      name: "ERC1155InvalidReceiver",
      type: "error",
    },
    {
      inputs: [{ internalType: "address", name: "sender", type: "address" }],
      name: "ERC1155InvalidSender",
      type: "error",
    },
    {
      inputs: [
        { internalType: "address", name: "operator", type: "address" },
        { internalType: "address", name: "owner", type: "address" },
      ],
      name: "ERC1155MissingApprovalForAll",
      type: "error",
    },
    {
      anonymous: !1,
      inputs: [
        {
          indexed: !0,
          internalType: "address",
          name: "account",
          type: "address",
        },
        {
          indexed: !0,
          internalType: "address",
          name: "operator",
          type: "address",
        },
        { indexed: !1, internalType: "bool", name: "approved", type: "bool" },
      ],
      name: "ApprovalForAll",
      type: "event",
    },
    {
      anonymous: !1,
      inputs: [
        {
          indexed: !0,
          internalType: "address",
          name: "operator",
          type: "address",
        },
        { indexed: !0, internalType: "address", name: "from", type: "address" },
        { indexed: !0, internalType: "address", name: "to", type: "address" },
        {
          indexed: !1,
          internalType: "uint256[]",
          name: "ids",
          type: "uint256[]",
        },
        {
          indexed: !1,
          internalType: "uint256[]",
          name: "values",
          type: "uint256[]",
        },
      ],
      name: "TransferBatch",
      type: "event",
    },
    {
      anonymous: !1,
      inputs: [
        {
          indexed: !0,
          internalType: "address",
          name: "operator",
          type: "address",
        },
        { indexed: !0, internalType: "address", name: "from", type: "address" },
        { indexed: !0, internalType: "address", name: "to", type: "address" },
        { indexed: !1, internalType: "uint256", name: "id", type: "uint256" },
        {
          indexed: !1,
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
      ],
      name: "TransferSingle",
      type: "event",
    },
    {
      anonymous: !1,
      inputs: [
        { indexed: !1, internalType: "string", name: "value", type: "string" },
        { indexed: !0, internalType: "uint256", name: "id", type: "uint256" },
      ],
      name: "URI",
      type: "event",
    },
    {
      inputs: [
        { internalType: "address", name: "account", type: "address" },
        { internalType: "uint256", name: "id", type: "uint256" },
      ],
      name: "balanceOf",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address[]", name: "accounts", type: "address[]" },
        { internalType: "uint256[]", name: "ids", type: "uint256[]" },
      ],
      name: "balanceOfBatch",
      outputs: [{ internalType: "uint256[]", name: "", type: "uint256[]" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "account", type: "address" },
        { internalType: "address", name: "operator", type: "address" },
      ],
      name: "isApprovedForAll",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "from", type: "address" },
        { internalType: "address", name: "to", type: "address" },
        { internalType: "uint256[]", name: "ids", type: "uint256[]" },
        { internalType: "uint256[]", name: "values", type: "uint256[]" },
        { internalType: "bytes", name: "data", type: "bytes" },
      ],
      name: "safeBatchTransferFrom",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "from", type: "address" },
        { internalType: "address", name: "to", type: "address" },
        { internalType: "uint256", name: "id", type: "uint256" },
        { internalType: "uint256", name: "value", type: "uint256" },
        { internalType: "bytes", name: "data", type: "bytes" },
      ],
      name: "safeTransferFrom",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "operator", type: "address" },
        { internalType: "bool", name: "approved", type: "bool" },
      ],
      name: "setApprovalForAll",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "bytes4", name: "interfaceId", type: "bytes4" }],
      name: "supportsInterface",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      name: "uri",
      outputs: [{ internalType: "string", name: "", type: "string" }],
      stateMutability: "view",
      type: "function",
    },
  ],
  Kt = [
    {
      type: "event",
      name: "Approval",
      inputs: [
        { indexed: !0, name: "owner", type: "address" },
        { indexed: !0, name: "spender", type: "address" },
        { indexed: !0, name: "tokenId", type: "uint256" },
      ],
    },
    {
      type: "event",
      name: "ApprovalForAll",
      inputs: [
        { indexed: !0, name: "owner", type: "address" },
        { indexed: !0, name: "operator", type: "address" },
        { indexed: !1, name: "approved", type: "bool" },
      ],
    },
    {
      type: "event",
      name: "Transfer",
      inputs: [
        { indexed: !0, name: "from", type: "address" },
        { indexed: !0, name: "to", type: "address" },
        { indexed: !0, name: "tokenId", type: "uint256" },
      ],
    },
    {
      type: "function",
      name: "approve",
      stateMutability: "payable",
      inputs: [
        { name: "spender", type: "address" },
        { name: "tokenId", type: "uint256" },
      ],
      outputs: [],
    },
    {
      type: "function",
      name: "balanceOf",
      stateMutability: "view",
      inputs: [{ name: "account", type: "address" }],
      outputs: [{ type: "uint256" }],
    },
    {
      type: "function",
      name: "getApproved",
      stateMutability: "view",
      inputs: [{ name: "tokenId", type: "uint256" }],
      outputs: [{ type: "address" }],
    },
    {
      type: "function",
      name: "isApprovedForAll",
      stateMutability: "view",
      inputs: [
        { name: "owner", type: "address" },
        { name: "operator", type: "address" },
      ],
      outputs: [{ type: "bool" }],
    },
    {
      type: "function",
      name: "name",
      stateMutability: "view",
      inputs: [],
      outputs: [{ type: "string" }],
    },
    {
      type: "function",
      name: "ownerOf",
      stateMutability: "view",
      inputs: [{ name: "tokenId", type: "uint256" }],
      outputs: [{ name: "owner", type: "address" }],
    },
    {
      type: "function",
      name: "safeTransferFrom",
      stateMutability: "payable",
      inputs: [
        { name: "from", type: "address" },
        { name: "to", type: "address" },
        { name: "tokenId", type: "uint256" },
      ],
      outputs: [],
    },
    {
      type: "function",
      name: "safeTransferFrom",
      stateMutability: "nonpayable",
      inputs: [
        { name: "from", type: "address" },
        { name: "to", type: "address" },
        { name: "id", type: "uint256" },
        { name: "data", type: "bytes" },
      ],
      outputs: [],
    },
    {
      type: "function",
      name: "setApprovalForAll",
      stateMutability: "nonpayable",
      inputs: [
        { name: "operator", type: "address" },
        { name: "approved", type: "bool" },
      ],
      outputs: [],
    },
    {
      type: "function",
      name: "symbol",
      stateMutability: "view",
      inputs: [],
      outputs: [{ type: "string" }],
    },
    {
      type: "function",
      name: "tokenByIndex",
      stateMutability: "view",
      inputs: [{ name: "index", type: "uint256" }],
      outputs: [{ type: "uint256" }],
    },
    {
      type: "function",
      name: "tokenByIndex",
      stateMutability: "view",
      inputs: [
        { name: "owner", type: "address" },
        { name: "index", type: "uint256" },
      ],
      outputs: [{ name: "tokenId", type: "uint256" }],
    },
    {
      type: "function",
      name: "tokenURI",
      stateMutability: "view",
      inputs: [{ name: "tokenId", type: "uint256" }],
      outputs: [{ type: "string" }],
    },
    {
      type: "function",
      name: "totalSupply",
      stateMutability: "view",
      inputs: [],
      outputs: [{ type: "uint256" }],
    },
    {
      type: "function",
      name: "transferFrom",
      stateMutability: "payable",
      inputs: [
        { name: "sender", type: "address" },
        { name: "recipient", type: "address" },
        { name: "tokenId", type: "uint256" },
      ],
      outputs: [],
    },
  ],
  Qt = [
    {
      anonymous: !1,
      inputs: [
        { indexed: !0, name: "owner", type: "address" },
        { indexed: !0, name: "spender", type: "address" },
        { indexed: !1, name: "value", type: "uint256" },
      ],
      name: "Approval",
      type: "event",
    },
    {
      anonymous: !1,
      inputs: [
        { indexed: !0, name: "sender", type: "address" },
        { indexed: !0, name: "receiver", type: "address" },
        { indexed: !1, name: "assets", type: "uint256" },
        { indexed: !1, name: "shares", type: "uint256" },
      ],
      name: "Deposit",
      type: "event",
    },
    {
      anonymous: !1,
      inputs: [
        { indexed: !0, name: "from", type: "address" },
        { indexed: !0, name: "to", type: "address" },
        { indexed: !1, name: "value", type: "uint256" },
      ],
      name: "Transfer",
      type: "event",
    },
    {
      anonymous: !1,
      inputs: [
        { indexed: !0, name: "sender", type: "address" },
        { indexed: !0, name: "receiver", type: "address" },
        { indexed: !0, name: "owner", type: "address" },
        { indexed: !1, name: "assets", type: "uint256" },
        { indexed: !1, name: "shares", type: "uint256" },
      ],
      name: "Withdraw",
      type: "event",
    },
    {
      inputs: [
        { name: "owner", type: "address" },
        { name: "spender", type: "address" },
      ],
      name: "allowance",
      outputs: [{ type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { name: "spender", type: "address" },
        { name: "amount", type: "uint256" },
      ],
      name: "approve",
      outputs: [{ type: "bool" }],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "asset",
      outputs: [{ name: "assetTokenAddress", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ name: "account", type: "address" }],
      name: "balanceOf",
      outputs: [{ type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ name: "shares", type: "uint256" }],
      name: "convertToAssets",
      outputs: [{ name: "assets", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ name: "assets", type: "uint256" }],
      name: "convertToShares",
      outputs: [{ name: "shares", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { name: "assets", type: "uint256" },
        { name: "receiver", type: "address" },
      ],
      name: "deposit",
      outputs: [{ name: "shares", type: "uint256" }],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ name: "caller", type: "address" }],
      name: "maxDeposit",
      outputs: [{ name: "maxAssets", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ name: "caller", type: "address" }],
      name: "maxMint",
      outputs: [{ name: "maxShares", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ name: "owner", type: "address" }],
      name: "maxRedeem",
      outputs: [{ name: "maxShares", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ name: "owner", type: "address" }],
      name: "maxWithdraw",
      outputs: [{ name: "maxAssets", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { name: "shares", type: "uint256" },
        { name: "receiver", type: "address" },
      ],
      name: "mint",
      outputs: [{ name: "assets", type: "uint256" }],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ name: "assets", type: "uint256" }],
      name: "previewDeposit",
      outputs: [{ name: "shares", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ name: "shares", type: "uint256" }],
      name: "previewMint",
      outputs: [{ name: "assets", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ name: "shares", type: "uint256" }],
      name: "previewRedeem",
      outputs: [{ name: "assets", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ name: "assets", type: "uint256" }],
      name: "previewWithdraw",
      outputs: [{ name: "shares", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { name: "shares", type: "uint256" },
        { name: "receiver", type: "address" },
        { name: "owner", type: "address" },
      ],
      name: "redeem",
      outputs: [{ name: "assets", type: "uint256" }],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "totalAssets",
      outputs: [{ name: "totalManagedAssets", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "totalSupply",
      outputs: [{ type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { name: "to", type: "address" },
        { name: "amount", type: "uint256" },
      ],
      name: "transfer",
      outputs: [{ type: "bool" }],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { name: "from", type: "address" },
        { name: "to", type: "address" },
        { name: "amount", type: "uint256" },
      ],
      name: "transferFrom",
      outputs: [{ type: "bool" }],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { name: "assets", type: "uint256" },
        { name: "receiver", type: "address" },
        { name: "owner", type: "address" },
      ],
      name: "withdraw",
      outputs: [{ name: "shares", type: "uint256" }],
      stateMutability: "nonpayable",
      type: "function",
    },
  ];
var Te = "0x82ad56cb";
var ze =
    "0x608060405234801561001057600080fd5b5060405161018e38038061018e83398101604081905261002f91610124565b6000808351602085016000f59050803b61004857600080fd5b6000808351602085016000855af16040513d6000823e81610067573d81fd5b3d81f35b634e487b7160e01b600052604160045260246000fd5b600082601f83011261009257600080fd5b81516001600160401b038111156100ab576100ab61006b565b604051601f8201601f19908116603f011681016001600160401b03811182821017156100d9576100d961006b565b6040528181528382016020018510156100f157600080fd5b60005b82811015610110576020818601810151838301820152016100f4565b506000918101602001919091529392505050565b6000806040838503121561013757600080fd5b82516001600160401b0381111561014d57600080fd5b61015985828601610081565b602085015190935090506001600160401b0381111561017757600080fd5b61018385828601610081565b915050925092905056fe",
  Re =
    "0x608060405234801561001057600080fd5b506040516102c03803806102c083398101604081905261002f916101e6565b836001600160a01b03163b6000036100e457600080836001600160a01b03168360405161005c9190610270565b6000604051808303816000865af19150503d8060008114610099576040519150601f19603f3d011682016040523d82523d6000602084013e61009e565b606091505b50915091508115806100b857506001600160a01b0386163b155b156100e1578060405163101bb98d60e01b81526004016100d8919061028c565b60405180910390fd5b50505b6000808451602086016000885af16040513d6000823e81610103573d81fd5b3d81f35b80516001600160a01b038116811461011e57600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561015457818101518382015260200161013c565b50506000910152565b600082601f83011261016e57600080fd5b81516001600160401b0381111561018757610187610123565b604051601f8201601f19908116603f011681016001600160401b03811182821017156101b5576101b5610123565b6040528181528382016020018510156101cd57600080fd5b6101de826020830160208701610139565b949350505050565b600080600080608085870312156101fc57600080fd5b61020585610107565b60208601519094506001600160401b0381111561022157600080fd5b61022d8782880161015d565b93505061023c60408601610107565b60608601519092506001600160401b0381111561025857600080fd5b6102648782880161015d565b91505092959194509250565b60008251610282818460208701610139565b9190910192915050565b60208152600082518060208401526102ab816040850160208701610139565b601f01601f1916919091016040019291505056fe",
  tn =
    "0x608060405234801561001057600080fd5b5060405161069438038061069483398101604081905261002f9161051e565b600061003c848484610048565b9050806000526001601ff35b60007f64926492649264926492649264926492649264926492649264926492649264926100748361040c565b036101e7576000606080848060200190518101906100929190610577565b60405192955090935091506000906001600160a01b038516906100b69085906105dd565b6000604051808303816000865af19150503d80600081146100f3576040519150601f19603f3d011682016040523d82523d6000602084013e6100f8565b606091505b50509050876001600160a01b03163b60000361016057806101605760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726556616c696461746f723a206465706c6f796d656e74000060448201526064015b60405180910390fd5b604051630b135d3f60e11b808252906001600160a01b038a1690631626ba7e90610190908b9087906004016105f9565b602060405180830381865afa1580156101ad573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101d19190610633565b6001600160e01b03191614945050505050610405565b6001600160a01b0384163b1561027a57604051630b135d3f60e11b808252906001600160a01b03861690631626ba7e9061022790879087906004016105f9565b602060405180830381865afa158015610244573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102689190610633565b6001600160e01b031916149050610405565b81516041146102df5760405162461bcd60e51b815260206004820152603a602482015260008051602061067483398151915260448201527f3a20696e76616c6964207369676e6174757265206c656e6774680000000000006064820152608401610157565b6102e7610425565b5060208201516040808401518451859392600091859190811061030c5761030c61065d565b016020015160f81c9050601b811480159061032b57508060ff16601c14155b1561038c5760405162461bcd60e51b815260206004820152603b602482015260008051602061067483398151915260448201527f3a20696e76616c6964207369676e617475726520762076616c756500000000006064820152608401610157565b60408051600081526020810180835289905260ff83169181019190915260608101849052608081018390526001600160a01b0389169060019060a0016020604051602081039080840390855afa1580156103ea573d6000803e3d6000fd5b505050602060405103516001600160a01b0316149450505050505b9392505050565b600060208251101561041d57600080fd5b508051015190565b60405180606001604052806003906020820280368337509192915050565b6001600160a01b038116811461045857600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561048c578181015183820152602001610474565b50506000910152565b600082601f8301126104a657600080fd5b81516001600160401b038111156104bf576104bf61045b565b604051601f8201601f19908116603f011681016001600160401b03811182821017156104ed576104ed61045b565b60405281815283820160200185101561050557600080fd5b610516826020830160208701610471565b949350505050565b60008060006060848603121561053357600080fd5b835161053e81610443565b6020850151604086015191945092506001600160401b0381111561056157600080fd5b61056d86828701610495565b9150509250925092565b60008060006060848603121561058c57600080fd5b835161059781610443565b60208501519093506001600160401b038111156105b357600080fd5b6105bf86828701610495565b604086015190935090506001600160401b0381111561056157600080fd5b600082516105ef818460208701610471565b9190910192915050565b828152604060208201526000825180604084015261061e816060850160208701610471565b601f01601f1916919091016060019392505050565b60006020828403121561064557600080fd5b81516001600160e01b03198116811461040557600080fd5b634e487b7160e01b600052603260045260246000fdfe5369676e617475726556616c696461746f72237265636f7665725369676e6572",
  Fe =
    "0x608060405234801561001057600080fd5b506115b9806100206000396000f3fe6080604052600436106100f35760003560e01c80634d2301cc1161008a578063a8b0574e11610059578063a8b0574e14610325578063bce38bd714610350578063c3077fa914610380578063ee82ac5e146103b2576100f3565b80634d2301cc1461026257806372425d9d1461029f57806382ad56cb146102ca57806386d516e8146102fa576100f3565b80633408e470116100c65780633408e470146101af578063399542e9146101da5780633e64a6961461020c57806342cbb15c14610237576100f3565b80630f28c97d146100f8578063174dea7114610123578063252dba421461015357806327e86d6e14610184575b600080fd5b34801561010457600080fd5b5061010d6103ef565b60405161011a9190610c0a565b60405180910390f35b61013d60048036038101906101389190610c94565b6103f7565b60405161014a9190610e94565b60405180910390f35b61016d60048036038101906101689190610f0c565b610615565b60405161017b92919061101b565b60405180910390f35b34801561019057600080fd5b506101996107ab565b6040516101a69190611064565b60405180910390f35b3480156101bb57600080fd5b506101c46107b7565b6040516101d19190610c0a565b60405180910390f35b6101f460048036038101906101ef91906110ab565b6107bf565b6040516102039392919061110b565b60405180910390f35b34801561021857600080fd5b506102216107e1565b60405161022e9190610c0a565b60405180910390f35b34801561024357600080fd5b5061024c6107e9565b6040516102599190610c0a565b60405180910390f35b34801561026e57600080fd5b50610289600480360381019061028491906111a7565b6107f1565b6040516102969190610c0a565b60405180910390f35b3480156102ab57600080fd5b506102b4610812565b6040516102c19190610c0a565b60405180910390f35b6102e460048036038101906102df919061122a565b61081a565b6040516102f19190610e94565b60405180910390f35b34801561030657600080fd5b5061030f6109e4565b60405161031c9190610c0a565b60405180910390f35b34801561033157600080fd5b5061033a6109ec565b6040516103479190611286565b60405180910390f35b61036a600480360381019061036591906110ab565b6109f4565b6040516103779190610e94565b60405180910390f35b61039a60048036038101906103959190610f0c565b610ba6565b6040516103a99392919061110b565b60405180910390f35b3480156103be57600080fd5b506103d960048036038101906103d491906112cd565b610bca565b6040516103e69190611064565b60405180910390f35b600042905090565b60606000808484905090508067ffffffffffffffff81111561041c5761041b6112fa565b5b60405190808252806020026020018201604052801561045557816020015b610442610bd5565b81526020019060019003908161043a5790505b5092503660005b828110156105c957600085828151811061047957610478611329565b5b6020026020010151905087878381811061049657610495611329565b5b90506020028101906104a89190611367565b925060008360400135905080860195508360000160208101906104cb91906111a7565b73ffffffffffffffffffffffffffffffffffffffff16818580606001906104f2919061138f565b604051610500929190611431565b60006040518083038185875af1925050503d806000811461053d576040519150601f19603f3d011682016040523d82523d6000602084013e610542565b606091505b5083600001846020018290528215151515815250505081516020850135176105bc577f08c379a000000000000000000000000000000000000000000000000000000000600052602060045260176024527f4d756c746963616c6c333a2063616c6c206661696c656400000000000000000060445260846000fd5b826001019250505061045c565b5082341461060c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610603906114a7565b60405180910390fd5b50505092915050565b6000606043915060008484905090508067ffffffffffffffff81111561063e5761063d6112fa565b5b60405190808252806020026020018201604052801561067157816020015b606081526020019060019003908161065c5790505b5091503660005b828110156107a157600087878381811061069557610694611329565b5b90506020028101906106a791906114c7565b92508260000160208101906106bc91906111a7565b73ffffffffffffffffffffffffffffffffffffffff168380602001906106e2919061138f565b6040516106f0929190611431565b6000604051808303816000865af19150503d806000811461072d576040519150601f19603f3d011682016040523d82523d6000602084013e610732565b606091505b5086848151811061074657610745611329565b5b60200260200101819052819250505080610795576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161078c9061153b565b60405180910390fd5b81600101915050610678565b5050509250929050565b60006001430340905090565b600046905090565b6000806060439250434091506107d68686866109f4565b905093509350939050565b600048905090565b600043905090565b60008173ffffffffffffffffffffffffffffffffffffffff16319050919050565b600044905090565b606060008383905090508067ffffffffffffffff81111561083e5761083d6112fa565b5b60405190808252806020026020018201604052801561087757816020015b610864610bd5565b81526020019060019003908161085c5790505b5091503660005b828110156109db57600084828151811061089b5761089a611329565b5b602002602001015190508686838181106108b8576108b7611329565b5b90506020028101906108ca919061155b565b92508260000160208101906108df91906111a7565b73ffffffffffffffffffffffffffffffffffffffff16838060400190610905919061138f565b604051610913929190611431565b6000604051808303816000865af19150503d8060008114610950576040519150601f19603f3d011682016040523d82523d6000602084013e610955565b606091505b5082600001836020018290528215151515815250505080516020840135176109cf577f08c379a000000000000000000000000000000000000000000000000000000000600052602060045260176024527f4d756c746963616c6c333a2063616c6c206661696c656400000000000000000060445260646000fd5b8160010191505061087e565b50505092915050565b600045905090565b600041905090565b606060008383905090508067ffffffffffffffff811115610a1857610a176112fa565b5b604051908082528060200260200182016040528015610a5157816020015b610a3e610bd5565b815260200190600190039081610a365790505b5091503660005b82811015610b9c576000848281518110610a7557610a74611329565b5b60200260200101519050868683818110610a9257610a91611329565b5b9050602002810190610aa491906114c7565b9250826000016020810190610ab991906111a7565b73ffffffffffffffffffffffffffffffffffffffff16838060200190610adf919061138f565b604051610aed929190611431565b6000604051808303816000865af19150503d8060008114610b2a576040519150601f19603f3d011682016040523d82523d6000602084013e610b2f565b606091505b508260000183602001829052821515151581525050508715610b90578060000151610b8f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b869061153b565b60405180910390fd5b5b81600101915050610a58565b5050509392505050565b6000806060610bb7600186866107bf565b8093508194508295505050509250925092565b600081409050919050565b6040518060400160405280600015158152602001606081525090565b6000819050919050565b610c0481610bf1565b82525050565b6000602082019050610c1f6000830184610bfb565b92915050565b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b60008083601f840112610c5457610c53610c2f565b5b8235905067ffffffffffffffff811115610c7157610c70610c34565b5b602083019150836020820283011115610c8d57610c8c610c39565b5b9250929050565b60008060208385031215610cab57610caa610c25565b5b600083013567ffffffffffffffff811115610cc957610cc8610c2a565b5b610cd585828601610c3e565b92509250509250929050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b60008115159050919050565b610d2281610d0d565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610d62578082015181840152602081019050610d47565b83811115610d71576000848401525b50505050565b6000601f19601f8301169050919050565b6000610d9382610d28565b610d9d8185610d33565b9350610dad818560208601610d44565b610db681610d77565b840191505092915050565b6000604083016000830151610dd96000860182610d19565b5060208301518482036020860152610df18282610d88565b9150508091505092915050565b6000610e0a8383610dc1565b905092915050565b6000602082019050919050565b6000610e2a82610ce1565b610e348185610cec565b935083602082028501610e4685610cfd565b8060005b85811015610e825784840389528151610e638582610dfe565b9450610e6e83610e12565b925060208a01995050600181019050610e4a565b50829750879550505050505092915050565b60006020820190508181036000830152610eae8184610e1f565b905092915050565b60008083601f840112610ecc57610ecb610c2f565b5b8235905067ffffffffffffffff811115610ee957610ee8610c34565b5b602083019150836020820283011115610f0557610f04610c39565b5b9250929050565b60008060208385031215610f2357610f22610c25565b5b600083013567ffffffffffffffff811115610f4157610f40610c2a565b5b610f4d85828601610eb6565b92509250509250929050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6000610f918383610d88565b905092915050565b6000602082019050919050565b6000610fb182610f59565b610fbb8185610f64565b935083602082028501610fcd85610f75565b8060005b858110156110095784840389528151610fea8582610f85565b9450610ff583610f99565b925060208a01995050600181019050610fd1565b50829750879550505050505092915050565b60006040820190506110306000830185610bfb565b81810360208301526110428184610fa6565b90509392505050565b6000819050919050565b61105e8161104b565b82525050565b60006020820190506110796000830184611055565b92915050565b61108881610d0d565b811461109357600080fd5b50565b6000813590506110a58161107f565b92915050565b6000806000604084860312156110c4576110c3610c25565b5b60006110d286828701611096565b935050602084013567ffffffffffffffff8111156110f3576110f2610c2a565b5b6110ff86828701610eb6565b92509250509250925092565b60006060820190506111206000830186610bfb565b61112d6020830185611055565b818103604083015261113f8184610e1f565b9050949350505050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061117482611149565b9050919050565b61118481611169565b811461118f57600080fd5b50565b6000813590506111a18161117b565b92915050565b6000602082840312156111bd576111bc610c25565b5b60006111cb84828501611192565b91505092915050565b60008083601f8401126111ea576111e9610c2f565b5b8235905067ffffffffffffffff81111561120757611206610c34565b5b60208301915083602082028301111561122357611222610c39565b5b9250929050565b6000806020838503121561124157611240610c25565b5b600083013567ffffffffffffffff81111561125f5761125e610c2a565b5b61126b858286016111d4565b92509250509250929050565b61128081611169565b82525050565b600060208201905061129b6000830184611277565b92915050565b6112aa81610bf1565b81146112b557600080fd5b50565b6000813590506112c7816112a1565b92915050565b6000602082840312156112e3576112e2610c25565b5b60006112f1848285016112b8565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600080fd5b600080fd5b600080fd5b60008235600160800383360303811261138357611382611358565b5b80830191505092915050565b600080833560016020038436030381126113ac576113ab611358565b5b80840192508235915067ffffffffffffffff8211156113ce576113cd61135d565b5b6020830192506001820236038313156113ea576113e9611362565b5b509250929050565b600081905092915050565b82818337600083830152505050565b600061141883856113f2565b93506114258385846113fd565b82840190509392505050565b600061143e82848661140c565b91508190509392505050565b600082825260208201905092915050565b7f4d756c746963616c6c333a2076616c7565206d69736d61746368000000000000600082015250565b6000611491601a8361144a565b915061149c8261145b565b602082019050919050565b600060208201905081810360008301526114c081611484565b9050919050565b6000823560016040038336030381126114e3576114e2611358565b5b80830191505092915050565b7f4d756c746963616c6c333a2063616c6c206661696c6564000000000000000000600082015250565b600061152560178361144a565b9150611530826114ef565b602082019050919050565b6000602082019050818103600083015261155481611518565b9050919050565b60008235600160600383360303811261157757611576611358565b5b8083019150509291505056fea264697066735822122020c1bc9aacf8e4a6507193432a895a8e77094f45a1395583f07b24e860ef06cd64736f6c634300080c0033";
var R0 = "/docs/contract/decodeFunctionResult";
function $e(e) {
  let { abi: t, args: n, functionName: r, data: a } = e,
    s = t[0];
  if (r) {
    let u = S({ abi: t, args: n, name: r });
    if (!u) throw new v(r, { docsPath: R0 });
    s = u;
  }
  if (s.type !== "function") throw new v(void 0, { docsPath: R0 });
  if (!s.outputs) throw new X(s.name, { docsPath: R0 });
  let i = K(s.outputs, a);
  if (i && i.length > 1) return i;
  if (i && i.length === 1) return i[0];
}
var F0 = "/docs/contract/encodeDeployData";
function $0(e) {
  let { abi: t, args: n, bytecode: r } = e;
  if (!n || n.length === 0) return r;
  let a = t.find((i) => "type" in i && i.type === "constructor");
  if (!a) throw new V0({ docsPath: F0 });
  if (!("inputs" in a)) throw new b0({ docsPath: F0 });
  if (!a.inputs || a.inputs.length === 0) throw new b0({ docsPath: F0 });
  let s = w(a.inputs, n);
  return P([r, s]);
}
var Ie = "/docs/contract/encodeFunctionData";
function Ne(e) {
  let { abi: t, args: n, functionName: r } = e,
    a = t[0];
  if (r) {
    let s = S({ abi: t, args: n, name: r });
    if (!s) throw new v(r, { docsPath: Ie });
    a = s;
  }
  if (a.type !== "function") throw new v(void 0, { docsPath: Ie });
  return { abi: [a], functionName: C(N(a)) };
}
function He(e) {
  let { args: t } = e,
    { abi: n, functionName: r } =
      e.abi.length === 1 && e.functionName?.startsWith("0x") ? e : Ne(e),
    a = n[0],
    s = r,
    i = "inputs" in a && a.inputs ? w(a.inputs, t ?? []) : void 0;
  return P([s, i ?? "0x"]);
}
function Pe() {
  let e = () => {},
    t = () => {};
  return {
    promise: new Promise((r, a) => {
      (e = r), (t = a);
    }),
    resolve: e,
    reject: t,
  };
}
var I0 = new Map();
function Ce({ fn: e, id: t, shouldSplitBatch: n, wait: r = 0, sort: a }) {
  let s = () =>
      h(this, null, function* () {
        let o = f();
        i();
        let y = o.map(({ args: p }) => p);
        y.length !== 0 &&
          e(y)
            .then((p) => {
              a && Array.isArray(p) && p.sort(a);
              for (let b = 0; b < o.length; b++) {
                let { resolve: x } = o[b];
                x?.([p[b], p]);
              }
            })
            .catch((p) => {
              for (let b = 0; b < o.length; b++) {
                let { reject: x } = o[b];
                x?.(p);
              }
            });
      }),
    i = () => I0.delete(t),
    u = () => f().map(({ args: o }) => o),
    f = () => I0.get(t) || [],
    d = (o) => I0.set(t, [...f(), o]);
  return {
    flush: i,
    schedule(o) {
      return h(this, null, function* () {
        let { promise: y, resolve: p, reject: b } = Pe();
        return (
          n?.([...u(), o]) && s(),
          f().length > 0
            ? (d({ args: o, resolve: p, reject: b }), y)
            : (d({ args: o, resolve: p, reject: b }), setTimeout(s, r), y)
        );
      });
    },
  };
}
function Oe(e) {
  if (!(!e || e.length === 0))
    return e.reduce((t, { slot: n, value: r }) => {
      if (n.length !== 66)
        throw new y0({ size: n.length, targetSize: 66, type: "hex" });
      if (r.length !== 66)
        throw new y0({ size: r.length, targetSize: 66, type: "hex" });
      return (t[n] = r), t;
    }, {});
}
function dt(e) {
  let { balance: t, nonce: n, state: r, stateDiff: a, code: s } = e,
    i = {};
  if (
    (s !== void 0 && (i.code = s),
    t !== void 0 && (i.balance = H(t)),
    n !== void 0 && (i.nonce = H(n)),
    r !== void 0 && (i.state = Oe(r)),
    a !== void 0)
  ) {
    if (i.state) throw new re();
    i.stateDiff = Oe(a);
  }
  return i;
}
function De(e) {
  if (!e) return;
  let t = {};
  for (let n of e) {
    let r = n,
      { address: a } = r,
      s = U(r, ["address"]);
    if (!V(a, { strict: !1 })) throw new k({ address: a });
    if (t[a]) throw new ne({ address: a });
    t[a] = dt(s);
  }
  return t;
}
function Le(e, t) {
  return h(this, null, function* () {
    let q0 = t,
      {
        account: n = e.account,
        authorizationList: r,
        batch: a = !!e.batch?.multicall,
        blockNumber: s,
        blockTag: i = e.experimental_blockTag ?? "latest",
        accessList: u,
        blobs: f,
        blockOverrides: d,
        code: c,
        data: o,
        factory: y,
        factoryData: p,
        gas: b,
        gasPrice: x,
        maxFeePerBlobGas: E,
        maxFeePerGas: $,
        maxPriorityFeePerGas: _,
        nonce: Y,
        to: I,
        value: Ue,
        stateOverride: ke,
      } = q0,
      Ve = U(q0, [
        "account",
        "authorizationList",
        "batch",
        "blockNumber",
        "blockTag",
        "accessList",
        "blobs",
        "blockOverrides",
        "code",
        "data",
        "factory",
        "factoryData",
        "gas",
        "gasPrice",
        "maxFeePerBlobGas",
        "maxFeePerGas",
        "maxPriorityFeePerGas",
        "nonce",
        "to",
        "value",
        "stateOverride",
      ]),
      D0 = n ? Z0(n) : void 0;
    if (c && (y || p))
      throw new M(
        "Cannot provide both `code` & `factory`/`factoryData` as parameters."
      );
    if (c && I) throw new M("Cannot provide both `code` & `to` as parameters.");
    let L0 = c && o,
      j0 = y && p && I && o,
      _0 = L0 || j0,
      We = L0
        ? je({ code: c, data: o })
        : j0
        ? mt({ data: o, factory: y, factoryData: p, to: I })
        : o;
    try {
      ue(t);
      let q = (typeof s == "bigint" ? H(s) : void 0) || i,
        T = d ? Me(d) : void 0,
        z = De(ke),
        G0 = e.chain?.formatters?.transactionRequest?.format,
        c0 = (G0 || fe)(
          G(l({}, oe(Ve, { format: G0 })), {
            from: D0?.address,
            accessList: u,
            authorizationList: r,
            blobs: f,
            data: We,
            gas: b,
            gasPrice: x,
            maxFeePerBlobGas: E,
            maxFeePerGas: $,
            maxPriorityFeePerGas: _,
            nonce: Y,
            to: _0 ? void 0 : I,
            value: Ue,
          }),
          "call"
        );
      if (a && ct({ request: c0 }) && !z && !T)
        try {
          return yield bt(e, G(l({}, c0), { blockNumber: s, blockTag: i }));
        } catch (B) {
          if (!(B instanceof h0) && !(B instanceof K0)) throw B;
        }
      let Je = (() => {
          let B = [c0, q];
          return z && T ? [...B, z, T] : z ? [...B, z] : T ? [...B, {}, T] : B;
        })(),
        U0 = yield e.request({ method: "eth_call", params: Je });
      return U0 === "0x" ? { data: void 0 } : { data: U0 };
    } catch (d0) {
      let q = yt(d0),
        { offchainLookup: T, offchainLookupSignature: z } = yield import(
          "./chunk-6KI6DGOD.js"
        );
      if (e.ccipRead !== !1 && q?.slice(0, 10) === z && I)
        return { data: yield T(e, { data: q, to: I }) };
      throw _0 && q?.slice(0, 10) === "0x101bb98d"
        ? new ae({ factory: y })
        : ie(d0, G(l({}, t), { account: D0, chain: e.chain }));
    }
  });
}
function ct({ request: e }) {
  let a = e,
    { data: t, to: n } = a,
    r = U(a, ["data", "to"]);
  return !(
    !t ||
    t.startsWith(Te) ||
    !n ||
    Object.values(r).filter((s) => typeof s < "u").length > 0
  );
}
function bt(e, t) {
  return h(this, null, function* () {
    let {
        batchSize: n = 1024,
        deployless: r = !1,
        wait: a = 0,
      } = typeof e.batch?.multicall == "object" ? e.batch.multicall : {},
      {
        blockNumber: s,
        blockTag: i = e.experimental_blockTag ?? "latest",
        data: u,
        to: f,
      } = t,
      d = (() => {
        if (r) return null;
        if (t.multicallAddress) return t.multicallAddress;
        if (e.chain)
          return Q0({ blockNumber: s, chain: e.chain, contract: "multicall3" });
        throw new h0();
      })(),
      o = (typeof s == "bigint" ? H(s) : void 0) || i,
      { schedule: y } = Ce({
        id: `${e.uid}.${o}`,
        wait: a,
        shouldSplitBatch(x) {
          return x.reduce(($, { data: _ }) => $ + (_.length - 2), 0) > n * 2;
        },
        fn: (x) =>
          h(this, null, function* () {
            let E = x.map((Y) => ({
                allowFailure: !0,
                callData: Y.data,
                target: Y.to,
              })),
              $ = He({ abi: z0, args: [E], functionName: "aggregate3" }),
              _ = yield e.request({
                method: "eth_call",
                params: [
                  l(
                    {},
                    d === null
                      ? { data: je({ code: Fe, data: $ }) }
                      : { to: d, data: $ }
                  ),
                  o,
                ],
              });
            return $e({
              abi: z0,
              args: [E],
              functionName: "aggregate3",
              data: _ || "0x",
            });
          }),
      }),
      [{ returnData: p, success: b }] = yield y({ data: u, to: f });
    if (!b) throw new se({ data: p });
    return p === "0x" ? { data: void 0 } : { data: p };
  });
}
function je(e) {
  let { code: t, data: n } = e;
  return $0({
    abi: x0(["constructor(bytes, bytes)"]),
    bytecode: ze,
    args: [t, n],
  });
}
function mt(e) {
  let { data: t, factory: n, factoryData: r, to: a } = e;
  return $0({
    abi: x0(["constructor(address, bytes, address, bytes)"]),
    bytecode: Re,
    args: [a, t, n, r],
  });
}
function yt(e) {
  if (!(e instanceof M)) return;
  let t = e.walk();
  return typeof t?.data == "object" ? t.data?.data : t.data;
}
var f0 = class extends M {
    constructor({
      callbackSelector: t,
      cause: n,
      data: r,
      extraData: a,
      sender: s,
      urls: i,
    }) {
      super(
        n.shortMessage ||
          "An error occurred while fetching for an offchain result.",
        {
          cause: n,
          metaMessages: [
            ...(n.metaMessages || []),
            n.metaMessages?.length ? "" : [],
            "Offchain Gateway Call:",
            i && ["  Gateway URL(s):", ...i.map((u) => `    ${g0(u)}`)],
            `  Sender: ${s}`,
            `  Data: ${r}`,
            `  Callback selector: ${t}`,
            `  Extra data: ${a}`,
          ].flat(),
          name: "OffchainLookupError",
        }
      );
    }
  },
  u0 = class extends M {
    constructor({ result: t, url: n }) {
      super(
        "Offchain gateway response is malformed. Response data must be a hex value.",
        {
          metaMessages: [`Gateway URL: ${g0(n)}`, `Response: ${Q(t)}`],
          name: "OffchainLookupResponseMalformedError",
        }
      );
    }
  },
  p0 = class extends M {
    constructor({ sender: t, to: n }) {
      super(
        "Reverted sender address does not match target contract address (`to`).",
        {
          metaMessages: [
            `Contract address: ${n}`,
            `OffchainLookup sender address: ${t}`,
          ],
          name: "OffchainLookupSenderMismatchError",
        }
      );
    }
  };
function _e(e, t) {
  if (!V(e, { strict: !1 })) throw new k({ address: e });
  if (!V(t, { strict: !1 })) throw new k({ address: t });
  return e.toLowerCase() === t.toLowerCase();
}
function qe(e) {
  let { abi: t, data: n } = e,
    r = l0(n, 0, 4),
    a = t.find((s) => s.type === "function" && r === C(N(s)));
  if (!a) throw new J0(r, { docsPath: "/docs/contract/decodeFunctionData" });
  return {
    functionName: a.name,
    args:
      "inputs" in a && a.inputs && a.inputs.length > 0
        ? K(a.inputs, l0(n, 4))
        : void 0,
  };
}
var N0 = "/docs/contract/encodeErrorResult";
function H0(e) {
  let { abi: t, errorName: n, args: r } = e,
    a = t[0];
  if (n) {
    let f = S({ abi: t, args: r, name: n });
    if (!f) throw new m0(n, { docsPath: N0 });
    a = f;
  }
  if (a.type !== "error") throw new m0(void 0, { docsPath: N0 });
  let s = N(a),
    i = C(s),
    u = "0x";
  if (r && r.length > 0) {
    if (!a.inputs) throw new W0(a.name, { docsPath: N0 });
    u = w(a.inputs, r);
  }
  return P([i, u]);
}
var P0 = "/docs/contract/encodeFunctionResult";
function Ge(e) {
  let { abi: t, functionName: n, result: r } = e,
    a = t[0];
  if (n) {
    let i = S({ abi: t, name: n });
    if (!i) throw new v(n, { docsPath: P0 });
    a = i;
  }
  if (a.type !== "function") throw new v(void 0, { docsPath: P0 });
  if (!a.outputs) throw new X(a.name, { docsPath: P0 });
  let s = (() => {
    if (a.outputs.length === 0) return [];
    if (a.outputs.length === 1) return [r];
    if (Array.isArray(r)) return r;
    throw new Y0(r);
  })();
  return w(a.outputs, s);
}
var C0 = "x-batch-gateway:true";
function O0(e) {
  return h(this, null, function* () {
    let { data: t, ccipRequest: n } = e,
      {
        args: [r],
      } = qe({ abi: o0, data: t }),
      a = [],
      s = [];
    return (
      yield Promise.all(
        r.map((i, u) =>
          h(this, null, function* () {
            try {
              (s[u] = i.urls.includes(C0)
                ? yield O0({ data: i.data, ccipRequest: n })
                : yield n(i)),
                (a[u] = !1);
            } catch (f) {
              (a[u] = !0), (s[u] = lt(f));
            }
          })
        )
      ),
      Ge({ abi: o0, functionName: "query", result: [a, s] })
    );
  });
}
function lt(e) {
  return e.name === "HttpRequestError" && e.status
    ? H0({ abi: o0, errorName: "HttpError", args: [e.status, e.shortMessage] })
    : H0({
        abi: [ee],
        errorName: "Error",
        args: ["shortMessage" in e ? e.shortMessage : e.message],
      });
}
var j1 = "0x556f1830",
  xt = {
    name: "OffchainLookup",
    type: "error",
    inputs: [
      { name: "sender", type: "address" },
      { name: "urls", type: "string[]" },
      { name: "callData", type: "bytes" },
      { name: "callbackFunction", type: "bytes4" },
      { name: "extraData", type: "bytes" },
    ],
  };
function _1(s, i) {
  return h(
    this,
    arguments,
    function* (e, { blockNumber: t, blockTag: n, data: r, to: a }) {
      let { args: u } = te({ data: r, abi: [xt] }),
        [f, d, c, o, y] = u,
        { ccipRead: p } = e,
        b = p && typeof p?.request == "function" ? p.request : ht;
      try {
        if (!_e(a, f)) throw new p0({ sender: f, to: a });
        let x = d.includes(C0)
            ? yield O0({ data: c, ccipRequest: b })
            : yield b({ data: c, sender: f, urls: d }),
          { data: E } = yield Le(e, {
            blockNumber: t,
            blockTag: n,
            data: X0([o, w([{ type: "bytes" }, { type: "bytes" }], [x, y])]),
            to: a,
          });
        return E;
      } catch (x) {
        throw new f0({
          callbackSelector: o,
          cause: x,
          data: r,
          extraData: y,
          sender: f,
          urls: d,
        });
      }
    }
  );
}
function ht(r) {
  return h(this, arguments, function* ({ data: e, sender: t, urls: n }) {
    let a = new Error("An unknown error occurred.");
    for (let s = 0; s < n.length; s++) {
      let i = n[s],
        u = i.includes("{data}") ? "GET" : "POST",
        f = u === "POST" ? { data: e, sender: t } : void 0,
        d = u === "POST" ? { "Content-Type": "application/json" } : {};
      try {
        let c = yield fetch(
            i.replace("{sender}", t.toLowerCase()).replace("{data}", e),
            { body: JSON.stringify(f), headers: d, method: u }
          ),
          o;
        if (
          (c.headers.get("Content-Type")?.startsWith("application/json")
            ? (o = (yield c.json()).data)
            : (o = yield c.text()),
          !c.ok)
        ) {
          a = new w0({
            body: f,
            details: o?.error ? Q(o.error) : c.statusText,
            headers: c.headers,
            status: c.status,
            url: i,
          });
          continue;
        }
        if (!k0(o)) {
          a = new u0({ result: o, url: i });
          continue;
        }
        return o;
      } catch (c) {
        a = new w0({ body: f, details: c.message, url: i });
      }
    }
    throw a;
  });
}
export {
  z0 as a,
  qt as b,
  Gt as c,
  Ut as d,
  kt as e,
  Vt as f,
  Wt as g,
  Jt as h,
  Yt as i,
  Xt as j,
  Kt as k,
  Qt as l,
  $e as m,
  Ne as n,
  He as o,
  qe as p,
  H0 as q,
  Ge as r,
  C0 as s,
  m as t,
  a0 as u,
  Bt as v,
  nt as w,
  Mt as x,
  R as y,
  St as z,
  Tt as A,
  zt as B,
  Rt as C,
  Ft as D,
  at as E,
  $t as F,
  It as G,
  Nt as H,
  Ht as I,
  j as J,
  g as K,
  Pt as L,
  Ee as M,
  M0 as N,
  Ct as O,
  F as P,
  Ot as Q,
  Ae as R,
  Dt as S,
  T0 as T,
  Me as U,
  ze as V,
  Re as W,
  tn as X,
  Fe as Y,
  $0 as Z,
  Pe as _,
  Ce as $,
  De as aa,
  _e as ba,
  j1 as ca,
  xt as da,
  _1 as ea,
  ht as fa,
  Le as ga,
};
