import { a as or, b as Wn } from "./chunk-HINDXNTT.js";
import { a as l, b as I, f as Ue } from "./chunk-VNDKUXGB.js";
function O(e, { strict: t = !0 } = {}) {
  return !e || typeof e != "string"
    ? !1
    : t
    ? /^0x[0-9a-fA-F]*$/.test(e)
    : e.startsWith("0x");
}
function x(e) {
  return O(e, { strict: !1 }) ? Math.ceil((e.length - 2) / 2) : e.length;
}
var ft = "2.38.3";
var ke = {
  getDocsUrl: ({ docsBaseUrl: e, docsPath: t = "", docsSlug: r }) =>
    t ? `${e ?? "https://viem.sh"}${t}${r ? `#${r}` : ""}` : void 0,
  version: `viem@${ft}`,
};
function Yo(e) {
  ke = e;
}
var c = class e extends Error {
  constructor(t, r = {}) {
    let n =
        r.cause instanceof e
          ? r.cause.details
          : r.cause?.message
          ? r.cause.message
          : r.details,
      o = (r.cause instanceof e && r.cause.docsPath) || r.docsPath,
      s = ke.getDocsUrl?.(I(l({}, r), { docsPath: o })),
      i = [
        t || "An error occurred.",
        "",
        ...(r.metaMessages ? [...r.metaMessages, ""] : []),
        ...(s ? [`Docs: ${s}`] : []),
        ...(n ? [`Details: ${n}`] : []),
        ...(ke.version ? [`Version: ${ke.version}`] : []),
      ].join(`
`);
    super(i, r.cause ? { cause: r.cause } : void 0),
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
      Object.defineProperty(this, "version", {
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
      (this.details = n),
      (this.docsPath = o),
      (this.metaMessages = r.metaMessages),
      (this.name = r.name ?? this.name),
      (this.shortMessage = t),
      (this.version = ft);
  }
  walk(t) {
    return sr(this, t);
  }
};
function sr(e, t) {
  return t?.(e)
    ? e
    : e && typeof e == "object" && "cause" in e && e.cause !== void 0
    ? sr(e.cause, t)
    : t
    ? null
    : e;
}
function U(e, { includeName: t = !1 } = {}) {
  if (e.type !== "function" && e.type !== "event" && e.type !== "error")
    throw new Re(e.type);
  return `${e.name}(${le(e.inputs, { includeName: t })})`;
}
function le(e, { includeName: t = !1 } = {}) {
  return e ? e.map((r) => Zn(r, { includeName: t })).join(t ? ", " : ",") : "";
}
function Zn(e, { includeName: t }) {
  return e.type.startsWith("tuple")
    ? `(${le(e.components, { includeName: t })})${e.type.slice(5)}`
    : e.type + (t && e.name ? ` ${e.name}` : "");
}
var ir = class extends c {
    constructor({ docsPath: t }) {
      super(
        [
          "A constructor was not found on the ABI.",
          "Make sure you are using the correct ABI and that the constructor exists on it.",
        ].join(`
`),
        { docsPath: t, name: "AbiConstructorNotFoundError" }
      );
    }
  },
  ar = class extends c {
    constructor({ docsPath: t }) {
      super(
        [
          "Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.",
          "Make sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists.",
        ].join(`
`),
        { docsPath: t, name: "AbiConstructorParamsNotFoundError" }
      );
    }
  },
  cr = class extends c {
    constructor({ data: t, size: r }) {
      super(
        [
          `Data size of ${r} bytes is invalid.`,
          "Size must be in increments of 32 bytes (size % 32 === 0).",
        ].join(`
`),
        {
          metaMessages: [`Data: ${t} (${r} bytes)`],
          name: "AbiDecodingDataSizeInvalidError",
        }
      );
    }
  },
  Fe = class extends c {
    constructor({ data: t, params: r, size: n }) {
      super(
        [`Data size of ${n} bytes is too small for given parameters.`].join(`
`),
        {
          metaMessages: [
            `Params: (${le(r, { includeName: !0 })})`,
            `Data:   ${t} (${n} bytes)`,
          ],
          name: "AbiDecodingDataSizeTooSmallError",
        }
      ),
        Object.defineProperty(this, "data", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "params", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "size", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        (this.data = t),
        (this.params = r),
        (this.size = n);
    }
  },
  _ = class extends c {
    constructor() {
      super('Cannot decode zero data ("0x") with ABI parameters.', {
        name: "AbiDecodingZeroDataError",
      });
    }
  },
  Le = class extends c {
    constructor({ expectedLength: t, givenLength: r, type: n }) {
      super(
        [
          `ABI encoding array length mismatch for type ${n}.`,
          `Expected length: ${t}`,
          `Given length: ${r}`,
        ].join(`
`),
        { name: "AbiEncodingArrayLengthMismatchError" }
      );
    }
  },
  Ne = class extends c {
    constructor({ expectedSize: t, value: r }) {
      super(
        `Size of bytes "${r}" (bytes${x(
          r
        )}) does not match expected size (bytes${t}).`,
        { name: "AbiEncodingBytesSizeMismatchError" }
      );
    }
  },
  De = class extends c {
    constructor({ expectedLength: t, givenLength: r }) {
      super(
        [
          "ABI encoding params/values length mismatch.",
          `Expected length (params): ${t}`,
          `Given length (values): ${r}`,
        ].join(`
`),
        { name: "AbiEncodingLengthMismatchError" }
      );
    }
  },
  ur = class extends c {
    constructor(t, { docsPath: r }) {
      super(
        [
          `Arguments (\`args\`) were provided to "${t}", but "${t}" on the ABI does not contain any parameters (\`inputs\`).`,
          "Cannot encode error result without knowing what the parameter types are.",
          "Make sure you are using the correct ABI and that the inputs exist on it.",
        ].join(`
`),
        { docsPath: r, name: "AbiErrorInputsNotFoundError" }
      );
    }
  },
  pr = class extends c {
    constructor(t, { docsPath: r } = {}) {
      super(
        [
          `Error ${t ? `"${t}" ` : ""}not found on ABI.`,
          "Make sure you are using the correct ABI and that the error exists on it.",
        ].join(`
`),
        { docsPath: r, name: "AbiErrorNotFoundError" }
      );
    }
  },
  q = class extends c {
    constructor(t, { docsPath: r }) {
      super(
        [
          `Encoded error signature "${t}" not found on ABI.`,
          "Make sure you are using the correct ABI and that the error exists on it.",
          `You can look up the decoded signature here: https://openchain.xyz/signatures?query=${t}.`,
        ].join(`
`),
        { docsPath: r, name: "AbiErrorSignatureNotFoundError" }
      ),
        Object.defineProperty(this, "signature", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        (this.signature = t);
    }
  },
  dr = class extends c {
    constructor({ docsPath: t }) {
      super("Cannot extract event signature from empty topics.", {
        docsPath: t,
        name: "AbiEventSignatureEmptyTopicsError",
      });
    }
  },
  lr = class extends c {
    constructor(t, { docsPath: r }) {
      super(
        [
          `Encoded event signature "${t}" not found on ABI.`,
          "Make sure you are using the correct ABI and that the event exists on it.",
          `You can look up the signature here: https://openchain.xyz/signatures?query=${t}.`,
        ].join(`
`),
        { docsPath: r, name: "AbiEventSignatureNotFoundError" }
      );
    }
  },
  fr = class extends c {
    constructor(t, { docsPath: r } = {}) {
      super(
        [
          `Event ${t ? `"${t}" ` : ""}not found on ABI.`,
          "Make sure you are using the correct ABI and that the event exists on it.",
        ].join(`
`),
        { docsPath: r, name: "AbiEventNotFoundError" }
      );
    }
  },
  mr = class extends c {
    constructor(t, { docsPath: r } = {}) {
      super(
        [
          `Function ${t ? `"${t}" ` : ""}not found on ABI.`,
          "Make sure you are using the correct ABI and that the function exists on it.",
        ].join(`
`),
        { docsPath: r, name: "AbiFunctionNotFoundError" }
      );
    }
  },
  hr = class extends c {
    constructor(t, { docsPath: r }) {
      super(
        [
          `Function "${t}" does not contain any \`outputs\` on ABI.`,
          "Cannot decode function result without knowing what the parameter types are.",
          "Make sure you are using the correct ABI and that the function exists on it.",
        ].join(`
`),
        { docsPath: r, name: "AbiFunctionOutputsNotFoundError" }
      );
    }
  },
  xr = class extends c {
    constructor(t, { docsPath: r }) {
      super(
        [
          `Encoded function signature "${t}" not found on ABI.`,
          "Make sure you are using the correct ABI and that the function exists on it.",
          `You can look up the signature here: https://openchain.xyz/signatures?query=${t}.`,
        ].join(`
`),
        { docsPath: r, name: "AbiFunctionSignatureNotFoundError" }
      );
    }
  },
  He = class extends c {
    constructor(t, r) {
      super("Found ambiguous types in overloaded ABI items.", {
        metaMessages: [
          `\`${t.type}\` in \`${U(t.abiItem)}\`, and`,
          `\`${r.type}\` in \`${U(r.abiItem)}\``,
          "",
          "These types encode differently and cannot be distinguished at runtime.",
          "Remove one of the ambiguous items in the ABI.",
        ],
        name: "AbiItemAmbiguityError",
      });
    }
  },
  br = class extends c {
    constructor({ expectedSize: t, givenSize: r }) {
      super(`Expected bytes${t}, got bytes${r}.`, {
        name: "BytesSizeMismatchError",
      });
    }
  },
  yr = class extends c {
    constructor({ abiItem: t, data: r, params: n, size: o }) {
      super(
        [
          `Data size of ${o} bytes is too small for non-indexed event parameters.`,
        ].join(`
`),
        {
          metaMessages: [
            `Params: (${le(n, { includeName: !0 })})`,
            `Data:   ${r} (${o} bytes)`,
          ],
          name: "DecodeLogDataMismatch",
        }
      ),
        Object.defineProperty(this, "abiItem", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "data", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "params", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "size", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        (this.abiItem = t),
        (this.data = r),
        (this.params = n),
        (this.size = o);
    }
  },
  gr = class extends c {
    constructor({ abiItem: t, param: r }) {
      super(
        [
          `Expected a topic for indexed event parameter${
            r.name ? ` "${r.name}"` : ""
          } on event "${U(t, { includeName: !0 })}".`,
        ].join(`
`),
        { name: "DecodeLogTopicsMismatch" }
      ),
        Object.defineProperty(this, "abiItem", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        (this.abiItem = t);
    }
  },
  Ge = class extends c {
    constructor(t, { docsPath: r }) {
      super(
        [
          `Type "${t}" is not a valid encoding type.`,
          "Please provide a valid ABI type.",
        ].join(`
`),
        { docsPath: r, name: "InvalidAbiEncodingType" }
      );
    }
  },
  Ve = class extends c {
    constructor(t, { docsPath: r }) {
      super(
        [
          `Type "${t}" is not a valid decoding type.`,
          "Please provide a valid ABI type.",
        ].join(`
`),
        { docsPath: r, name: "InvalidAbiDecodingType" }
      );
    }
  },
  We = class extends c {
    constructor(t) {
      super(
        [`Value "${t}" is not a valid array.`].join(`
`),
        { name: "InvalidArrayError" }
      );
    }
  },
  Re = class extends c {
    constructor(t) {
      super(
        [
          `"${t}" is not a valid definition type.`,
          'Valid types: "function", "event", "error"',
        ].join(`
`),
        { name: "InvalidDefinitionTypeError" }
      );
    }
  },
  wr = class extends c {
    constructor(t) {
      super(`Type "${t}" is not supported for packed encoding.`, {
        name: "UnsupportedPackedAbiType",
      });
    }
  };
var k = class extends c {
  constructor({ address: t }) {
    super(`Address "${t}" is invalid.`, {
      metaMessages: [
        "- Address must be a hex value of 20 bytes (40 hex characters).",
        "- Address must match its checksum counterpart.",
      ],
      name: "InvalidAddressError",
    });
  }
};
var fe = class extends c {
    constructor({ offset: t, position: r, size: n }) {
      super(
        `Slice ${
          r === "start" ? "starting" : "ending"
        } at offset "${t}" is out-of-bounds (size: ${n}).`,
        { name: "SliceOffsetOutOfBoundsError" }
      );
    }
  },
  me = class extends c {
    constructor({ size: t, targetSize: r, type: n }) {
      super(
        `${n.charAt(0).toUpperCase()}${n
          .slice(1)
          .toLowerCase()} size (${t}) exceeds padding size (${r}).`,
        { name: "SizeExceedsPaddingSizeError" }
      );
    }
  },
  vr = class extends c {
    constructor({ size: t, targetSize: r, type: n }) {
      super(
        `${n.charAt(0).toUpperCase()}${n
          .slice(1)
          .toLowerCase()} is expected to be ${r} ${n} long, but is ${t} ${n} long.`,
        { name: "InvalidBytesLengthError" }
      );
    }
  };
function N(e, { dir: t, size: r = 32 } = {}) {
  return typeof e == "string"
    ? R(e, { dir: t, size: r })
    : Kn(e, { dir: t, size: r });
}
function R(e, { dir: t, size: r = 32 } = {}) {
  if (r === null) return e;
  let n = e.replace("0x", "");
  if (n.length > r * 2)
    throw new me({ size: Math.ceil(n.length / 2), targetSize: r, type: "hex" });
  return `0x${n[t === "right" ? "padEnd" : "padStart"](r * 2, "0")}`;
}
function Kn(e, { dir: t, size: r = 32 } = {}) {
  if (r === null) return e;
  if (e.length > r)
    throw new me({ size: e.length, targetSize: r, type: "bytes" });
  let n = new Uint8Array(r);
  for (let o = 0; o < r; o++) {
    let s = t === "right";
    n[s ? o : r - o - 1] = e[s ? o : e.length - o - 1];
  }
  return n;
}
var X = class extends c {
    constructor({ max: t, min: r, signed: n, size: o, value: s }) {
      super(
        `Number "${s}" is not in safe ${
          o ? `${o * 8}-bit ${n ? "signed" : "unsigned"} ` : ""
        }integer range ${t ? `(${r} to ${t})` : `(above ${r})`}`,
        { name: "IntegerOutOfRangeError" }
      );
    }
  },
  Ze = class extends c {
    constructor(t) {
      super(
        `Bytes value "${t}" is not a valid boolean. The bytes array must contain a single byte of either a 0 or 1 value.`,
        { name: "InvalidBytesBooleanError" }
      );
    }
  },
  Ke = class extends c {
    constructor(t) {
      super(
        `Hex value "${t}" is not a valid boolean. The hex value must be "0x0" (false) or "0x1" (true).`,
        { name: "InvalidHexBooleanError" }
      );
    }
  },
  $r = class extends c {
    constructor(t) {
      super(
        `Hex value "${t}" is an odd length (${t.length}). It must be an even length.`,
        { name: "InvalidHexValueError" }
      );
    }
  },
  Je = class extends c {
    constructor({ givenSize: t, maxSize: r }) {
      super(`Size cannot exceed ${r} bytes. Given size: ${t} bytes.`, {
        name: "SizeOverflowError",
      });
    }
  };
function z(e, { dir: t = "left" } = {}) {
  let r = typeof e == "string" ? e.replace("0x", "") : e,
    n = 0;
  for (
    let o = 0;
    o < r.length - 1 &&
    r[t === "left" ? o : r.length - o - 1].toString() === "0";
    o++
  )
    n++;
  return (
    (r = t === "left" ? r.slice(n) : r.slice(0, r.length - n)),
    typeof e == "string"
      ? (r.length === 1 && t === "right" && (r = `${r}0`),
        `0x${r.length % 2 === 1 ? `0${r}` : r}`)
      : r
  );
}
var Jn = Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, "0"));
function Pr(e, t = {}) {
  return typeof e == "number" || typeof e == "bigint"
    ? m(e, t)
    : typeof e == "string"
    ? ht(e, t)
    : typeof e == "boolean"
    ? mt(e, t)
    : E(e, t);
}
function mt(e, t = {}) {
  let r = `0x${Number(e)}`;
  return typeof t.size == "number"
    ? (w(r, { size: t.size }), N(r, { size: t.size }))
    : r;
}
function E(e, t = {}) {
  let r = "";
  for (let o = 0; o < e.length; o++) r += Jn[e[o]];
  let n = `0x${r}`;
  return typeof t.size == "number"
    ? (w(n, { size: t.size }), N(n, { dir: "right", size: t.size }))
    : n;
}
function m(e, t = {}) {
  let { signed: r, size: n } = t,
    o = BigInt(e),
    s;
  n
    ? r
      ? (s = (1n << (BigInt(n) * 8n - 1n)) - 1n)
      : (s = 2n ** (BigInt(n) * 8n) - 1n)
    : typeof e == "number" && (s = BigInt(Number.MAX_SAFE_INTEGER));
  let i = typeof s == "bigint" && r ? -s - 1n : 0;
  if ((s && o > s) || o < i) {
    let u = typeof e == "bigint" ? "n" : "";
    throw new X({
      max: s ? `${s}${u}` : void 0,
      min: `${i}${u}`,
      signed: r,
      size: n,
      value: `${e}${u}`,
    });
  }
  let a = `0x${(r && o < 0 ? (1n << BigInt(n * 8)) + BigInt(o) : o).toString(
    16
  )}`;
  return n ? N(a, { size: n }) : a;
}
var Yn = new TextEncoder();
function ht(e, t = {}) {
  let r = Yn.encode(e);
  return E(r, t);
}
var _n = new TextEncoder();
function Ye(e, t = {}) {
  return typeof e == "number" || typeof e == "bigint"
    ? Xn(e, t)
    : typeof e == "boolean"
    ? qn(e, t)
    : O(e)
    ? V(e, t)
    : xt(e, t);
}
function qn(e, t = {}) {
  let r = new Uint8Array(1);
  return (
    (r[0] = Number(e)),
    typeof t.size == "number"
      ? (w(r, { size: t.size }), N(r, { size: t.size }))
      : r
  );
}
var F = { zero: 48, nine: 57, A: 65, F: 70, a: 97, f: 102 };
function Ar(e) {
  if (e >= F.zero && e <= F.nine) return e - F.zero;
  if (e >= F.A && e <= F.F) return e - (F.A - 10);
  if (e >= F.a && e <= F.f) return e - (F.a - 10);
}
function V(e, t = {}) {
  let r = e;
  t.size &&
    (w(r, { size: t.size }), (r = N(r, { dir: "right", size: t.size })));
  let n = r.slice(2);
  n.length % 2 && (n = `0${n}`);
  let o = n.length / 2,
    s = new Uint8Array(o);
  for (let i = 0, a = 0; i < o; i++) {
    let u = Ar(n.charCodeAt(a++)),
      p = Ar(n.charCodeAt(a++));
    if (u === void 0 || p === void 0)
      throw new c(
        `Invalid byte sequence ("${n[a - 2]}${n[a - 1]}" in "${n}").`
      );
    s[i] = u * 16 + p;
  }
  return s;
}
function Xn(e, t) {
  let r = m(e, t);
  return V(r);
}
function xt(e, t = {}) {
  let r = _n.encode(e);
  return typeof t.size == "number"
    ? (w(r, { size: t.size }), N(r, { dir: "right", size: t.size }))
    : r;
}
function w(e, { size: t }) {
  if (x(e) > t) throw new Je({ givenSize: x(e), maxSize: t });
}
function Ss(e, t) {
  let r = typeof t == "string" ? { to: t } : t,
    n = r.to;
  return n === "number"
    ? bt(e, r)
    : n === "bigint"
    ? _e(e, r)
    : n === "string"
    ? eo(e, r)
    : n === "boolean"
    ? Qn(e, r)
    : V(e, r);
}
function _e(e, t = {}) {
  let { signed: r } = t;
  t.size && w(e, { size: t.size });
  let n = BigInt(e);
  if (!r) return n;
  let o = (e.length - 2) / 2,
    s = (1n << (BigInt(o) * 8n - 1n)) - 1n;
  return n <= s ? n : n - BigInt(`0x${"f".padStart(o * 2, "f")}`) - 1n;
}
function Qn(e, t = {}) {
  let r = e;
  if ((t.size && (w(r, { size: t.size }), (r = z(r))), z(r) === "0x00"))
    return !1;
  if (z(r) === "0x01") return !0;
  throw new Ke(r);
}
function bt(e, t = {}) {
  return Number(_e(e, t));
}
function eo(e, t = {}) {
  let r = V(e);
  return (
    t.size && (w(r, { size: t.size }), (r = z(r, { dir: "right" }))),
    new TextDecoder().decode(r)
  );
}
Wn();
function qe(e, t) {
  let r = t || "hex",
    n = or(O(e, { strict: !1 }) ? Ye(e) : e);
  return r === "bytes" ? n : Pr(n);
}
var Q = class extends Map {
  constructor(t) {
    super(),
      Object.defineProperty(this, "maxSize", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      (this.maxSize = t);
  }
  get(t) {
    let r = super.get(t);
    return super.has(t) && r !== void 0 && (this.delete(t), super.set(t, r)), r;
  }
  set(t, r) {
    if ((super.set(t, r), this.maxSize && this.size > this.maxSize)) {
      let n = this.keys().next().value;
      n && this.delete(n);
    }
    return this;
  }
};
var yt = new Q(8192);
function he(e, t) {
  if (yt.has(`${e}.${t}`)) return yt.get(`${e}.${t}`);
  let r = t ? `${t}${e.toLowerCase()}` : e.substring(2).toLowerCase(),
    n = qe(xt(r), "bytes"),
    o = (t ? r.substring(`${t}0x`.length) : r).split("");
  for (let i = 0; i < 40; i += 2)
    n[i >> 1] >> 4 >= 8 && o[i] && (o[i] = o[i].toUpperCase()),
      (n[i >> 1] & 15) >= 8 && o[i + 1] && (o[i + 1] = o[i + 1].toUpperCase());
  let s = `0x${o.join("")}`;
  return yt.set(`${e}.${t}`, s), s;
}
function Ns(e, t) {
  if (!M(e, { strict: !1 })) throw new k({ address: e });
  return he(e, t);
}
var to = /^0x[a-fA-F0-9]{40}$/,
  gt = new Q(8192);
function M(e, t) {
  let { strict: r = !0 } = t ?? {},
    n = `${e}.${r}`;
  if (gt.has(n)) return gt.get(n);
  let o = to.test(e) ? (e.toLowerCase() === e ? !0 : r ? he(e) === e : !0) : !1;
  return gt.set(n, o), o;
}
function W(e, t, r, { strict: n } = {}) {
  return O(e, { strict: !1 })
    ? ro(e, t, r, { strict: n })
    : wt(e, t, r, { strict: n });
}
function Ir(e, t) {
  if (typeof t == "number" && t > 0 && t > x(e) - 1)
    throw new fe({ offset: t, position: "start", size: x(e) });
}
function Er(e, t, r) {
  if (typeof t == "number" && typeof r == "number" && x(e) !== r - t)
    throw new fe({ offset: r, position: "end", size: x(e) });
}
function wt(e, t, r, { strict: n } = {}) {
  Ir(e, t);
  let o = e.slice(t, r);
  return n && Er(o, t, r), o;
}
function ro(e, t, r, { strict: n } = {}) {
  Ir(e, t);
  let o = `0x${e.replace("0x", "").slice((t ?? 0) * 2, (r ?? e.length) * 2)}`;
  return n && Er(o, t, r), o;
}
function Qs(e, t) {
  let r = typeof t == "string" ? { to: t } : t,
    n = r.to;
  return n === "number"
    ? j(e, r)
    : n === "bigint"
    ? vt(e, r)
    : n === "boolean"
    ? $t(e, r)
    : n === "string"
    ? Pt(e, r)
    : E(e, r);
}
function vt(e, t = {}) {
  typeof t.size < "u" && w(e, { size: t.size });
  let r = E(e, t);
  return _e(r, t);
}
function $t(e, t = {}) {
  let r = e;
  if (
    (typeof t.size < "u" && (w(r, { size: t.size }), (r = z(r))),
    r.length > 1 || r[0] > 1)
  )
    throw new Ze(r);
  return !!r[0];
}
function j(e, t = {}) {
  typeof t.size < "u" && w(e, { size: t.size });
  let r = E(e, t);
  return bt(r, t);
}
function Pt(e, t = {}) {
  let r = e;
  return (
    typeof t.size < "u" &&
      (w(r, { size: t.size }), (r = z(r, { dir: "right" }))),
    new TextDecoder().decode(r)
  );
}
function Z(e) {
  return typeof e[0] == "string" ? oo(e) : no(e);
}
function no(e) {
  let t = 0;
  for (let o of e) t += o.length;
  let r = new Uint8Array(t),
    n = 0;
  for (let o of e) r.set(o, n), (n += o.length);
  return r;
}
function oo(e) {
  return `0x${e.reduce((t, r) => t + r.replace("0x", ""), "")}`;
}
var ri = /^(.*)\[([0-9]*)\]$/,
  ni = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,
  Sr =
    /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;
function xi(e, t) {
  if (e.length !== t.length)
    throw new De({ expectedLength: e.length, givenLength: t.length });
  let r = so({ params: e, values: t }),
    n = It(r);
  return n.length === 0 ? "0x" : n;
}
function so({ params: e, values: t }) {
  let r = [];
  for (let n = 0; n < e.length; n++) r.push(At({ param: e[n], value: t[n] }));
  return r;
}
function At({ param: e, value: t }) {
  let r = Xe(e.type);
  if (r) {
    let [n, o] = r;
    return ao(t, { length: n, param: I(l({}, e), { type: o }) });
  }
  if (e.type === "tuple") return fo(t, { param: e });
  if (e.type === "address") return io(t);
  if (e.type === "bool") return uo(t);
  if (e.type.startsWith("uint") || e.type.startsWith("int")) {
    let n = e.type.startsWith("int"),
      [, , o = "256"] = Sr.exec(e.type) ?? [];
    return po(t, { signed: n, size: Number(o) });
  }
  if (e.type.startsWith("bytes")) return co(t, { param: e });
  if (e.type === "string") return lo(t);
  throw new Ge(e.type, { docsPath: "/docs/contract/encodeAbiParameters" });
}
function It(e) {
  let t = 0;
  for (let s = 0; s < e.length; s++) {
    let { dynamic: i, encoded: a } = e[s];
    i ? (t += 32) : (t += x(a));
  }
  let r = [],
    n = [],
    o = 0;
  for (let s = 0; s < e.length; s++) {
    let { dynamic: i, encoded: a } = e[s];
    i ? (r.push(m(t + o, { size: 32 })), n.push(a), (o += x(a))) : r.push(a);
  }
  return Z([...r, ...n]);
}
function io(e) {
  if (!M(e)) throw new k({ address: e });
  return { dynamic: !1, encoded: R(e.toLowerCase()) };
}
function ao(e, { length: t, param: r }) {
  let n = t === null;
  if (!Array.isArray(e)) throw new We(e);
  if (!n && e.length !== t)
    throw new Le({
      expectedLength: t,
      givenLength: e.length,
      type: `${r.type}[${t}]`,
    });
  let o = !1,
    s = [];
  for (let i = 0; i < e.length; i++) {
    let a = At({ param: r, value: e[i] });
    a.dynamic && (o = !0), s.push(a);
  }
  if (n || o) {
    let i = It(s);
    if (n) {
      let a = m(s.length, { size: 32 });
      return { dynamic: !0, encoded: s.length > 0 ? Z([a, i]) : a };
    }
    if (o) return { dynamic: !0, encoded: i };
  }
  return { dynamic: !1, encoded: Z(s.map(({ encoded: i }) => i)) };
}
function co(e, { param: t }) {
  let [, r] = t.type.split("bytes"),
    n = x(e);
  if (!r) {
    let o = e;
    return (
      n % 32 !== 0 &&
        (o = R(o, {
          dir: "right",
          size: Math.ceil((e.length - 2) / 2 / 32) * 32,
        })),
      { dynamic: !0, encoded: Z([R(m(n, { size: 32 })), o]) }
    );
  }
  if (n !== Number.parseInt(r, 10))
    throw new Ne({ expectedSize: Number.parseInt(r, 10), value: e });
  return { dynamic: !1, encoded: R(e, { dir: "right" }) };
}
function uo(e) {
  if (typeof e != "boolean")
    throw new c(
      `Invalid boolean value: "${e}" (type: ${typeof e}). Expected: \`true\` or \`false\`.`
    );
  return { dynamic: !1, encoded: R(mt(e)) };
}
function po(e, { signed: t, size: r = 256 }) {
  if (typeof r == "number") {
    let n = 2n ** (BigInt(r) - (t ? 1n : 0n)) - 1n,
      o = t ? -n - 1n : 0n;
    if (e > n || e < o)
      throw new X({
        max: n.toString(),
        min: o.toString(),
        signed: t,
        size: r / 8,
        value: e.toString(),
      });
  }
  return { dynamic: !1, encoded: m(e, { size: 32, signed: t }) };
}
function lo(e) {
  let t = ht(e),
    r = Math.ceil(x(t) / 32),
    n = [];
  for (let o = 0; o < r; o++)
    n.push(R(W(t, o * 32, (o + 1) * 32), { dir: "right" }));
  return { dynamic: !0, encoded: Z([R(m(x(t), { size: 32 })), ...n]) };
}
function fo(e, { param: t }) {
  let r = !1,
    n = [];
  for (let o = 0; o < t.components.length; o++) {
    let s = t.components[o],
      i = Array.isArray(e) ? o : s.name,
      a = At({ param: s, value: e[i] });
    n.push(a), a.dynamic && (r = !0);
  }
  return { dynamic: r, encoded: r ? It(n) : Z(n.map(({ encoded: o }) => o)) };
}
function Xe(e) {
  let t = e.match(/^(.*)\[(\d+)?\]$/);
  return t ? [t[2] ? Number(t[2]) : null, t[1]] : void 0;
}
var xe = class extends c {
    constructor({ offset: t }) {
      super(`Offset \`${t}\` cannot be negative.`, {
        name: "NegativeOffsetError",
      });
    }
  },
  Qe = class extends c {
    constructor({ length: t, position: r }) {
      super(`Position \`${r}\` is out of bounds (\`0 < position < ${t}\`).`, {
        name: "PositionOutOfBoundsError",
      });
    }
  },
  et = class extends c {
    constructor({ count: t, limit: r }) {
      super(
        `Recursive read limit of \`${r}\` exceeded (recursive read count: \`${t}\`).`,
        { name: "RecursiveReadLimitExceededError" }
      );
    }
  };
var mo = {
  bytes: new Uint8Array(),
  dataView: new DataView(new ArrayBuffer(0)),
  position: 0,
  positionReadCount: new Map(),
  recursiveReadCount: 0,
  recursiveReadLimit: Number.POSITIVE_INFINITY,
  assertReadLimit() {
    if (this.recursiveReadCount >= this.recursiveReadLimit)
      throw new et({
        count: this.recursiveReadCount + 1,
        limit: this.recursiveReadLimit,
      });
  },
  assertPosition(e) {
    if (e < 0 || e > this.bytes.length - 1)
      throw new Qe({ length: this.bytes.length, position: e });
  },
  decrementPosition(e) {
    if (e < 0) throw new xe({ offset: e });
    let t = this.position - e;
    this.assertPosition(t), (this.position = t);
  },
  getReadCount(e) {
    return this.positionReadCount.get(e || this.position) || 0;
  },
  incrementPosition(e) {
    if (e < 0) throw new xe({ offset: e });
    let t = this.position + e;
    this.assertPosition(t), (this.position = t);
  },
  inspectByte(e) {
    let t = e ?? this.position;
    return this.assertPosition(t), this.bytes[t];
  },
  inspectBytes(e, t) {
    let r = t ?? this.position;
    return this.assertPosition(r + e - 1), this.bytes.subarray(r, r + e);
  },
  inspectUint8(e) {
    let t = e ?? this.position;
    return this.assertPosition(t), this.bytes[t];
  },
  inspectUint16(e) {
    let t = e ?? this.position;
    return this.assertPosition(t + 1), this.dataView.getUint16(t);
  },
  inspectUint24(e) {
    let t = e ?? this.position;
    return (
      this.assertPosition(t + 2),
      (this.dataView.getUint16(t) << 8) + this.dataView.getUint8(t + 2)
    );
  },
  inspectUint32(e) {
    let t = e ?? this.position;
    return this.assertPosition(t + 3), this.dataView.getUint32(t);
  },
  pushByte(e) {
    this.assertPosition(this.position),
      (this.bytes[this.position] = e),
      this.position++;
  },
  pushBytes(e) {
    this.assertPosition(this.position + e.length - 1),
      this.bytes.set(e, this.position),
      (this.position += e.length);
  },
  pushUint8(e) {
    this.assertPosition(this.position),
      (this.bytes[this.position] = e),
      this.position++;
  },
  pushUint16(e) {
    this.assertPosition(this.position + 1),
      this.dataView.setUint16(this.position, e),
      (this.position += 2);
  },
  pushUint24(e) {
    this.assertPosition(this.position + 2),
      this.dataView.setUint16(this.position, e >> 8),
      this.dataView.setUint8(this.position + 2, e & 255),
      (this.position += 3);
  },
  pushUint32(e) {
    this.assertPosition(this.position + 3),
      this.dataView.setUint32(this.position, e),
      (this.position += 4);
  },
  readByte() {
    this.assertReadLimit(), this._touch();
    let e = this.inspectByte();
    return this.position++, e;
  },
  readBytes(e, t) {
    this.assertReadLimit(), this._touch();
    let r = this.inspectBytes(e);
    return (this.position += t ?? e), r;
  },
  readUint8() {
    this.assertReadLimit(), this._touch();
    let e = this.inspectUint8();
    return (this.position += 1), e;
  },
  readUint16() {
    this.assertReadLimit(), this._touch();
    let e = this.inspectUint16();
    return (this.position += 2), e;
  },
  readUint24() {
    this.assertReadLimit(), this._touch();
    let e = this.inspectUint24();
    return (this.position += 3), e;
  },
  readUint32() {
    this.assertReadLimit(), this._touch();
    let e = this.inspectUint32();
    return (this.position += 4), e;
  },
  get remaining() {
    return this.bytes.length - this.position;
  },
  setPosition(e) {
    let t = this.position;
    return (
      this.assertPosition(e), (this.position = e), () => (this.position = t)
    );
  },
  _touch() {
    if (this.recursiveReadLimit === Number.POSITIVE_INFINITY) return;
    let e = this.getReadCount();
    this.positionReadCount.set(this.position, e + 1),
      e > 0 && this.recursiveReadCount++;
  },
};
function Tr(e, { recursiveReadLimit: t = 8192 } = {}) {
  let r = Object.create(mo);
  return (
    (r.bytes = e),
    (r.dataView = new DataView(e.buffer, e.byteOffset, e.byteLength)),
    (r.positionReadCount = new Map()),
    (r.recursiveReadLimit = t),
    r
  );
}
function jr(e, t) {
  let r = typeof t == "string" ? V(t) : t,
    n = Tr(r);
  if (x(r) === 0 && e.length > 0) throw new _();
  if (x(t) && x(t) < 32)
    throw new Fe({
      data: typeof t == "string" ? t : E(t),
      params: e,
      size: x(t),
    });
  let o = 0,
    s = [];
  for (let i = 0; i < e.length; ++i) {
    let a = e[i];
    n.setPosition(o);
    let [u, p] = ee(n, a, { staticPosition: 0 });
    (o += p), s.push(u);
  }
  return s;
}
function ee(e, t, { staticPosition: r }) {
  let n = Xe(t.type);
  if (n) {
    let [o, s] = n;
    return xo(e, I(l({}, t), { type: s }), { length: o, staticPosition: r });
  }
  if (t.type === "tuple") return wo(e, t, { staticPosition: r });
  if (t.type === "address") return ho(e);
  if (t.type === "bool") return bo(e);
  if (t.type.startsWith("bytes")) return yo(e, t, { staticPosition: r });
  if (t.type.startsWith("uint") || t.type.startsWith("int")) return go(e, t);
  if (t.type === "string") return vo(e, { staticPosition: r });
  throw new Ve(t.type, { docsPath: "/docs/contract/decodeAbiParameters" });
}
var Mr = 32,
  Et = 32;
function ho(e) {
  let t = e.readBytes(32);
  return [he(E(wt(t, -20))), 32];
}
function xo(e, t, { length: r, staticPosition: n }) {
  if (!r) {
    let i = j(e.readBytes(Et)),
      a = n + i,
      u = a + Mr;
    e.setPosition(a);
    let p = j(e.readBytes(Mr)),
      d = be(t),
      f = 0,
      b = [];
    for (let y = 0; y < p; ++y) {
      e.setPosition(u + (d ? y * 32 : f));
      let [$, Y] = ee(e, t, { staticPosition: u });
      (f += Y), b.push($);
    }
    return e.setPosition(n + 32), [b, 32];
  }
  if (be(t)) {
    let i = j(e.readBytes(Et)),
      a = n + i,
      u = [];
    for (let p = 0; p < r; ++p) {
      e.setPosition(a + p * 32);
      let [d] = ee(e, t, { staticPosition: a });
      u.push(d);
    }
    return e.setPosition(n + 32), [u, 32];
  }
  let o = 0,
    s = [];
  for (let i = 0; i < r; ++i) {
    let [a, u] = ee(e, t, { staticPosition: n + o });
    (o += u), s.push(a);
  }
  return [s, o];
}
function bo(e) {
  return [$t(e.readBytes(32), { size: 32 }), 32];
}
function yo(e, t, { staticPosition: r }) {
  let [n, o] = t.type.split("bytes");
  if (!o) {
    let i = j(e.readBytes(32));
    e.setPosition(r + i);
    let a = j(e.readBytes(32));
    if (a === 0) return e.setPosition(r + 32), ["0x", 32];
    let u = e.readBytes(a);
    return e.setPosition(r + 32), [E(u), 32];
  }
  return [E(e.readBytes(Number.parseInt(o, 10), 32)), 32];
}
function go(e, t) {
  let r = t.type.startsWith("int"),
    n = Number.parseInt(t.type.split("int")[1] || "256", 10),
    o = e.readBytes(32);
  return [n > 48 ? vt(o, { signed: r }) : j(o, { signed: r }), 32];
}
function wo(e, t, { staticPosition: r }) {
  let n = t.components.length === 0 || t.components.some(({ name: i }) => !i),
    o = n ? [] : {},
    s = 0;
  if (be(t)) {
    let i = j(e.readBytes(Et)),
      a = r + i;
    for (let u = 0; u < t.components.length; ++u) {
      let p = t.components[u];
      e.setPosition(a + s);
      let [d, f] = ee(e, p, { staticPosition: a });
      (s += f), (o[n ? u : p?.name] = d);
    }
    return e.setPosition(r + 32), [o, 32];
  }
  for (let i = 0; i < t.components.length; ++i) {
    let a = t.components[i],
      [u, p] = ee(e, a, { staticPosition: r });
    (o[n ? i : a?.name] = u), (s += p);
  }
  return [o, s];
}
function vo(e, { staticPosition: t }) {
  let r = j(e.readBytes(32)),
    n = t + r;
  e.setPosition(n);
  let o = j(e.readBytes(32));
  if (o === 0) return e.setPosition(t + 32), ["", 32];
  let s = e.readBytes(o, 32),
    i = Pt(z(s));
  return e.setPosition(t + 32), [i, 32];
}
function be(e) {
  let { type: t } = e;
  if (t === "string" || t === "bytes" || t.endsWith("[]")) return !0;
  if (t === "tuple") return e.components?.some(be);
  let r = Xe(e.type);
  return !!(r && be(I(l({}, e), { type: r[1] })));
}
var Br = "1.1.0";
var h = class e extends Error {
  constructor(t, r = {}) {
    let n =
        r.cause instanceof e
          ? r.cause.details
          : r.cause?.message
          ? r.cause.message
          : r.details,
      o = (r.cause instanceof e && r.cause.docsPath) || r.docsPath,
      s = [
        t || "An error occurred.",
        "",
        ...(r.metaMessages ? [...r.metaMessages, ""] : []),
        ...(o ? [`Docs: https://abitype.dev${o}`] : []),
        ...(n ? [`Details: ${n}`] : []),
        `Version: abitype@${Br}`,
      ].join(`
`);
    super(s),
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
        value: "AbiTypeError",
      }),
      r.cause && (this.cause = r.cause),
      (this.details = n),
      (this.docsPath = o),
      (this.metaMessages = r.metaMessages),
      (this.shortMessage = t);
  }
};
var ye = class extends h {
    constructor({ signature: t }) {
      super("Failed to parse ABI item.", {
        details: `parseAbiItem(${JSON.stringify(t, null, 2)})`,
        docsPath: "/api/human#parseabiitem-1",
      }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "InvalidAbiItemError",
        });
    }
  },
  ge = class extends h {
    constructor({ type: t }) {
      super("Unknown type.", {
        metaMessages: [
          `Type "${t}" is not a valid ABI type. Perhaps you forgot to include a struct signature?`,
        ],
      }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "UnknownTypeError",
        });
    }
  },
  we = class extends h {
    constructor({ type: t }) {
      super("Unknown type.", {
        metaMessages: [`Type "${t}" is not a valid ABI type.`],
      }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "UnknownSolidityTypeError",
        });
    }
  };
var ve = class extends h {
    constructor({ param: t }) {
      super("Failed to parse ABI parameter.", {
        details: `parseAbiParameter(${JSON.stringify(t, null, 2)})`,
        docsPath: "/api/human#parseabiparameter-1",
      }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "InvalidAbiParameterError",
        });
    }
  },
  $e = class extends h {
    constructor({ params: t }) {
      super("Failed to parse ABI parameters.", {
        details: `parseAbiParameters(${JSON.stringify(t, null, 2)})`,
        docsPath: "/api/human#parseabiparameters-1",
      }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "InvalidAbiParametersError",
        });
    }
  },
  Pe = class extends h {
    constructor({ param: t }) {
      super("Invalid ABI parameter.", { details: t }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "InvalidParameterError",
        });
    }
  },
  Ae = class extends h {
    constructor({ param: t, name: r }) {
      super("Invalid ABI parameter.", {
        details: t,
        metaMessages: [
          `"${r}" is a protected Solidity keyword. More info: https://docs.soliditylang.org/en/latest/cheatsheet.html`,
        ],
      }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "SolidityProtectedKeywordError",
        });
    }
  },
  Ie = class extends h {
    constructor({ param: t, type: r, modifier: n }) {
      super("Invalid ABI parameter.", {
        details: t,
        metaMessages: [
          `Modifier "${n}" not allowed${r ? ` in "${r}" type` : ""}.`,
        ],
      }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "InvalidModifierError",
        });
    }
  },
  Ee = class extends h {
    constructor({ param: t, type: r, modifier: n }) {
      super("Invalid ABI parameter.", {
        details: t,
        metaMessages: [
          `Modifier "${n}" not allowed${r ? ` in "${r}" type` : ""}.`,
          `Data location can only be specified for array, struct, or mapping types, but "${n}" was given.`,
        ],
      }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "InvalidFunctionModifierError",
        });
    }
  },
  Se = class extends h {
    constructor({ abiParameter: t }) {
      super("Invalid ABI parameter.", {
        details: JSON.stringify(t, null, 2),
        metaMessages: ["ABI parameter type is invalid."],
      }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "InvalidAbiTypeParameterError",
        });
    }
  };
var B = class extends h {
    constructor({ signature: t, type: r }) {
      super(`Invalid ${r} signature.`, { details: t }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "InvalidSignatureError",
        });
    }
  },
  Te = class extends h {
    constructor({ signature: t }) {
      super("Unknown signature.", { details: t }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "UnknownSignatureError",
        });
    }
  },
  Me = class extends h {
    constructor({ signature: t }) {
      super("Invalid struct signature.", {
        details: t,
        metaMessages: ["No properties exist."],
      }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "InvalidStructSignatureError",
        });
    }
  };
var je = class extends h {
  constructor({ type: t }) {
    super("Circular reference detected.", {
      metaMessages: [`Struct "${t}" is a circular reference.`],
    }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "CircularReferenceError",
      });
  }
};
var Be = class extends h {
  constructor({ current: t, depth: r }) {
    super("Unbalanced parentheses.", {
      metaMessages: [
        `"${t.trim()}" has too many ${
          r > 0 ? "opening" : "closing"
        } parentheses.`,
      ],
      details: `Depth "${r}"`,
    }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "InvalidParenthesisError",
      });
  }
};
function S(e, t) {
  return e.exec(t)?.groups;
}
var St = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,
  Tt =
    /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/,
  tt = /^\(.+?\).*?$/;
var Or = /^error (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)$/;
function zr(e) {
  return Or.test(e);
}
function Cr(e) {
  return S(Or, e);
}
var Ur = /^event (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)$/;
function kr(e) {
  return Ur.test(e);
}
function Rr(e) {
  return S(Ur, e);
}
var Fr =
  /^function (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)(?: (?<scope>external|public{1}))?(?: (?<stateMutability>pure|view|nonpayable|payable{1}))?(?: returns\s?\((?<returns>.*?)\))?$/;
function Lr(e) {
  return Fr.test(e);
}
function Nr(e) {
  return S(Fr, e);
}
var Dr = /^struct (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*) \{(?<properties>.*?)\}$/;
function C(e) {
  return Dr.test(e);
}
function Hr(e) {
  return S(Dr, e);
}
var Gr =
  /^constructor\((?<parameters>.*?)\)(?:\s(?<stateMutability>payable{1}))?$/;
function Vr(e) {
  return Gr.test(e);
}
function Wr(e) {
  return S(Gr, e);
}
var Zr = /^fallback\(\) external(?:\s(?<stateMutability>payable{1}))?$/;
function Kr(e) {
  return Zr.test(e);
}
function Jr(e) {
  return S(Zr, e);
}
var $o = /^receive\(\) external payable$/;
function Yr(e) {
  return $o.test(e);
}
var te = new Set(["memory", "indexed", "storage", "calldata"]),
  _r = new Set(["indexed"]),
  rt = new Set(["calldata", "memory", "storage"]);
function qr(e, t, r) {
  let n = "";
  if (r)
    for (let o of Object.entries(r)) {
      if (!o) continue;
      let s = "";
      for (let i of o[1]) s += `[${i.type}${i.name ? `:${i.name}` : ""}]`;
      n += `(${o[0]}{${s}})`;
    }
  return t ? `${t}:${e}${n}` : e;
}
var nt = new Map([
  ["address", { type: "address" }],
  ["bool", { type: "bool" }],
  ["bytes", { type: "bytes" }],
  ["bytes32", { type: "bytes32" }],
  ["int", { type: "int256" }],
  ["int256", { type: "int256" }],
  ["string", { type: "string" }],
  ["uint", { type: "uint256" }],
  ["uint8", { type: "uint8" }],
  ["uint16", { type: "uint16" }],
  ["uint24", { type: "uint24" }],
  ["uint32", { type: "uint32" }],
  ["uint64", { type: "uint64" }],
  ["uint96", { type: "uint96" }],
  ["uint112", { type: "uint112" }],
  ["uint160", { type: "uint160" }],
  ["uint192", { type: "uint192" }],
  ["uint256", { type: "uint256" }],
  ["address owner", { type: "address", name: "owner" }],
  ["address to", { type: "address", name: "to" }],
  ["bool approved", { type: "bool", name: "approved" }],
  ["bytes _data", { type: "bytes", name: "_data" }],
  ["bytes data", { type: "bytes", name: "data" }],
  ["bytes signature", { type: "bytes", name: "signature" }],
  ["bytes32 hash", { type: "bytes32", name: "hash" }],
  ["bytes32 r", { type: "bytes32", name: "r" }],
  ["bytes32 root", { type: "bytes32", name: "root" }],
  ["bytes32 s", { type: "bytes32", name: "s" }],
  ["string name", { type: "string", name: "name" }],
  ["string symbol", { type: "string", name: "symbol" }],
  ["string tokenURI", { type: "string", name: "tokenURI" }],
  ["uint tokenId", { type: "uint256", name: "tokenId" }],
  ["uint8 v", { type: "uint8", name: "v" }],
  ["uint256 balance", { type: "uint256", name: "balance" }],
  ["uint256 tokenId", { type: "uint256", name: "tokenId" }],
  ["uint256 value", { type: "uint256", name: "value" }],
  [
    "event:address indexed from",
    { type: "address", name: "from", indexed: !0 },
  ],
  ["event:address indexed to", { type: "address", name: "to", indexed: !0 }],
  [
    "event:uint indexed tokenId",
    { type: "uint256", name: "tokenId", indexed: !0 },
  ],
  [
    "event:uint256 indexed tokenId",
    { type: "uint256", name: "tokenId", indexed: !0 },
  ],
]);
function Oe(e, t = {}) {
  if (Lr(e)) return Po(e, t);
  if (kr(e)) return Ao(e, t);
  if (zr(e)) return Io(e, t);
  if (Vr(e)) return Eo(e, t);
  if (Kr(e)) return So(e);
  if (Yr(e)) return { type: "receive", stateMutability: "payable" };
  throw new Te({ signature: e });
}
function Po(e, t = {}) {
  let r = Nr(e);
  if (!r) throw new B({ signature: e, type: "function" });
  let n = P(r.parameters),
    o = [],
    s = n.length;
  for (let a = 0; a < s; a++)
    o.push(A(n[a], { modifiers: rt, structs: t, type: "function" }));
  let i = [];
  if (r.returns) {
    let a = P(r.returns),
      u = a.length;
    for (let p = 0; p < u; p++)
      i.push(A(a[p], { modifiers: rt, structs: t, type: "function" }));
  }
  return {
    name: r.name,
    type: "function",
    stateMutability: r.stateMutability ?? "nonpayable",
    inputs: o,
    outputs: i,
  };
}
function Ao(e, t = {}) {
  let r = Rr(e);
  if (!r) throw new B({ signature: e, type: "event" });
  let n = P(r.parameters),
    o = [],
    s = n.length;
  for (let i = 0; i < s; i++)
    o.push(A(n[i], { modifiers: _r, structs: t, type: "event" }));
  return { name: r.name, type: "event", inputs: o };
}
function Io(e, t = {}) {
  let r = Cr(e);
  if (!r) throw new B({ signature: e, type: "error" });
  let n = P(r.parameters),
    o = [],
    s = n.length;
  for (let i = 0; i < s; i++) o.push(A(n[i], { structs: t, type: "error" }));
  return { name: r.name, type: "error", inputs: o };
}
function Eo(e, t = {}) {
  let r = Wr(e);
  if (!r) throw new B({ signature: e, type: "constructor" });
  let n = P(r.parameters),
    o = [],
    s = n.length;
  for (let i = 0; i < s; i++)
    o.push(A(n[i], { structs: t, type: "constructor" }));
  return {
    type: "constructor",
    stateMutability: r.stateMutability ?? "nonpayable",
    inputs: o,
  };
}
function So(e) {
  let t = Jr(e);
  if (!t) throw new B({ signature: e, type: "fallback" });
  return {
    type: "fallback",
    stateMutability: t.stateMutability ?? "nonpayable",
  };
}
var To =
    /^(?<type>[a-zA-Z$_][a-zA-Z0-9$_]*(?:\spayable)?)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z$_][a-zA-Z0-9$_]*))?$/,
  Mo =
    /^\((?<type>.+?)\)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z$_][a-zA-Z0-9$_]*))?$/,
  jo = /^u?int$/;
function A(e, t) {
  let r = qr(e, t?.type, t?.structs);
  if (nt.has(r)) return nt.get(r);
  let n = tt.test(e),
    o = S(n ? Mo : To, e);
  if (!o) throw new Pe({ param: e });
  if (o.name && Oo(o.name)) throw new Ae({ param: e, name: o.name });
  let s = o.name ? { name: o.name } : {},
    i = o.modifier === "indexed" ? { indexed: !0 } : {},
    a = t?.structs ?? {},
    u,
    p = {};
  if (n) {
    u = "tuple";
    let f = P(o.type),
      b = [],
      y = f.length;
    for (let $ = 0; $ < y; $++) b.push(A(f[$], { structs: a }));
    p = { components: b };
  } else if (o.type in a) (u = "tuple"), (p = { components: a[o.type] });
  else if (jo.test(o.type)) u = `${o.type}256`;
  else if (o.type === "address payable") u = "address";
  else if (((u = o.type), t?.type !== "struct" && !Mt(u)))
    throw new we({ type: u });
  if (o.modifier) {
    if (!t?.modifiers?.has?.(o.modifier))
      throw new Ie({ param: e, type: t?.type, modifier: o.modifier });
    if (rt.has(o.modifier) && !zo(u, !!o.array))
      throw new Ee({ param: e, type: t?.type, modifier: o.modifier });
  }
  let d = l(l(l({ type: `${u}${o.array ?? ""}` }, s), i), p);
  return nt.set(r, d), d;
}
function P(e, t = [], r = "", n = 0) {
  let o = e.trim().length;
  for (let s = 0; s < o; s++) {
    let i = e[s],
      a = e.slice(s + 1);
    switch (i) {
      case ",":
        return n === 0 ? P(a, [...t, r.trim()]) : P(a, t, `${r}${i}`, n);
      case "(":
        return P(a, t, `${r}${i}`, n + 1);
      case ")":
        return P(a, t, `${r}${i}`, n - 1);
      default:
        return P(a, t, `${r}${i}`, n);
    }
  }
  if (r === "") return t;
  if (n !== 0) throw new Be({ current: r, depth: n });
  return t.push(r.trim()), t;
}
function Mt(e) {
  return (
    e === "address" ||
    e === "bool" ||
    e === "function" ||
    e === "string" ||
    St.test(e) ||
    Tt.test(e)
  );
}
var Bo =
  /^(?:after|alias|anonymous|apply|auto|byte|calldata|case|catch|constant|copyof|default|defined|error|event|external|false|final|function|immutable|implements|in|indexed|inline|internal|let|mapping|match|memory|mutable|null|of|override|partial|private|promise|public|pure|reference|relocatable|return|returns|sizeof|static|storage|struct|super|supports|switch|this|true|try|typedef|typeof|var|view|virtual)$/;
function Oo(e) {
  return (
    e === "address" ||
    e === "bool" ||
    e === "function" ||
    e === "string" ||
    e === "tuple" ||
    St.test(e) ||
    Tt.test(e) ||
    Bo.test(e)
  );
}
function zo(e, t) {
  return t || e === "bytes" || e === "string" || e === "tuple";
}
function D(e) {
  let t = {},
    r = e.length;
  for (let i = 0; i < r; i++) {
    let a = e[i];
    if (!C(a)) continue;
    let u = Hr(a);
    if (!u) throw new B({ signature: a, type: "struct" });
    let p = u.properties.split(";"),
      d = [],
      f = p.length;
    for (let b = 0; b < f; b++) {
      let $ = p[b].trim();
      if (!$) continue;
      let Y = A($, { type: "struct" });
      d.push(Y);
    }
    if (!d.length) throw new Me({ signature: a });
    t[u.name] = d;
  }
  let n = {},
    o = Object.entries(t),
    s = o.length;
  for (let i = 0; i < s; i++) {
    let [a, u] = o[i];
    n[a] = Xr(u, t);
  }
  return n;
}
var Co = /^(?<type>[a-zA-Z$_][a-zA-Z0-9$_]*)(?<array>(?:\[\d*?\])+?)?$/;
function Xr(e, t, r = new Set()) {
  let n = [],
    o = e.length;
  for (let s = 0; s < o; s++) {
    let i = e[s];
    if (tt.test(i.type)) n.push(i);
    else {
      let u = S(Co, i.type);
      if (!u?.type) throw new Se({ abiParameter: i });
      let { array: p, type: d } = u;
      if (d in t) {
        if (r.has(d)) throw new je({ type: d });
        n.push(
          I(l({}, i), {
            type: `tuple${p ?? ""}`,
            components: Xr(t[d] ?? [], t, new Set([...r, d])),
          })
        );
      } else if (Mt(d)) n.push(i);
      else throw new ge({ type: d });
    }
  }
  return n;
}
function Uo(e) {
  let t = D(e),
    r = [],
    n = e.length;
  for (let o = 0; o < n; o++) {
    let s = e[o];
    C(s) || r.push(Oe(s, t));
  }
  return r;
}
function ko(e) {
  let t;
  if (typeof e == "string") t = Oe(e);
  else {
    let r = D(e),
      n = e.length;
    for (let o = 0; o < n; o++) {
      let s = e[o];
      if (!C(s)) {
        t = Oe(s, r);
        break;
      }
    }
  }
  if (!t) throw new ye({ signature: e });
  return t;
}
function Ro(e) {
  let t;
  if (typeof e == "string") t = A(e, { modifiers: te });
  else {
    let r = D(e),
      n = e.length;
    for (let o = 0; o < n; o++) {
      let s = e[o];
      if (!C(s)) {
        t = A(s, { modifiers: te, structs: r });
        break;
      }
    }
  }
  if (!t) throw new ve({ param: e });
  return t;
}
function Fo(e) {
  let t = [];
  if (typeof e == "string") {
    let r = P(e),
      n = r.length;
    for (let o = 0; o < n; o++) t.push(A(r[o], { modifiers: te }));
  } else {
    let r = D(e),
      n = e.length;
    for (let o = 0; o < n; o++) {
      let s = e[o];
      if (C(s)) continue;
      let i = P(s),
        a = i.length;
      for (let u = 0; u < a; u++)
        t.push(A(i[u], { modifiers: te, structs: r }));
    }
  }
  if (t.length === 0) throw new $e({ params: e });
  return t;
}
var Qr = /^tuple(?<array>(\[(\d*)\])*)$/;
function ot(e) {
  let t = e.type;
  if (Qr.test(e.type) && "components" in e) {
    t = "(";
    let r = e.components.length;
    for (let o = 0; o < r; o++) {
      let s = e.components[o];
      (t += ot(s)), o < r - 1 && (t += ", ");
    }
    let n = S(Qr, e.type);
    return (t += `)${n?.array ?? ""}`), ot(I(l({}, e), { type: t }));
  }
  return (
    "indexed" in e && e.indexed && (t = `${t} indexed`),
    e.name ? `${t} ${e.name}` : t
  );
}
function K(e) {
  let t = "",
    r = e.length;
  for (let n = 0; n < r; n++) {
    let o = e[n];
    (t += ot(o)), n !== r - 1 && (t += ", ");
  }
  return t;
}
function jt(e) {
  return e.type === "function"
    ? `function ${e.name}(${K(e.inputs)})${
        e.stateMutability && e.stateMutability !== "nonpayable"
          ? ` ${e.stateMutability}`
          : ""
      }${e.outputs?.length ? ` returns (${K(e.outputs)})` : ""}`
    : e.type === "event"
    ? `event ${e.name}(${K(e.inputs)})`
    : e.type === "error"
    ? `error ${e.name}(${K(e.inputs)})`
    : e.type === "constructor"
    ? `constructor(${K(e.inputs)})${
        e.stateMutability === "payable" ? " payable" : ""
      }`
    : e.type === "fallback"
    ? `fallback() external${e.stateMutability === "payable" ? " payable" : ""}`
    : "receive() external payable";
}
function en(e) {
  let t = !0,
    r = "",
    n = 0,
    o = "",
    s = !1;
  for (let i = 0; i < e.length; i++) {
    let a = e[i];
    if (
      (["(", ")", ","].includes(a) && (t = !0),
      a === "(" && n++,
      a === ")" && n--,
      !!t)
    ) {
      if (n === 0) {
        if (a === " " && ["event", "function", ""].includes(o)) o = "";
        else if (((o += a), a === ")")) {
          s = !0;
          break;
        }
        continue;
      }
      if (a === " ") {
        e[i - 1] !== "," && r !== "," && r !== ",(" && ((r = ""), (t = !1));
        continue;
      }
      (o += a), (r += a);
    }
  }
  if (!s) throw new c("Unable to normalize signature.");
  return o;
}
var tn = (e) => {
  let t = typeof e == "string" ? e : jt(e);
  return en(t);
};
var Lo = (e) => qe(Ye(e));
function rn(e) {
  return Lo(e);
}
function st(e) {
  return rn(tn(e));
}
var nn = st;
var it = (e) => W(st(e), 0, 4);
function on(e) {
  let { abi: t, args: r = [], name: n } = e,
    o = O(n, { strict: !1 }),
    s = t.filter((a) =>
      o
        ? a.type === "function"
          ? it(a) === n
          : a.type === "event"
          ? nn(a) === n
          : !1
        : "name" in a && a.name === n
    );
  if (s.length === 0) return;
  if (s.length === 1) return s[0];
  let i;
  for (let a of s) {
    if (!("inputs" in a)) continue;
    if (!r || r.length === 0) {
      if (!a.inputs || a.inputs.length === 0) return a;
      continue;
    }
    if (!a.inputs || a.inputs.length === 0 || a.inputs.length !== r.length)
      continue;
    if (
      r.every((p, d) => {
        let f = "inputs" in a && a.inputs[d];
        return f ? Bt(p, f) : !1;
      })
    ) {
      if (i && "inputs" in i && i.inputs) {
        let p = sn(a.inputs, i.inputs, r);
        if (p)
          throw new He({ abiItem: a, type: p[0] }, { abiItem: i, type: p[1] });
      }
      i = a;
    }
  }
  return i || s[0];
}
function Bt(e, t) {
  let r = typeof e,
    n = t.type;
  switch (n) {
    case "address":
      return M(e, { strict: !1 });
    case "bool":
      return r === "boolean";
    case "function":
      return r === "string";
    case "string":
      return r === "string";
    default:
      return n === "tuple" && "components" in t
        ? Object.values(t.components).every((o, s) =>
            Bt(Object.values(e)[s], o)
          )
        : /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(
            n
          )
        ? r === "number" || r === "bigint"
        : /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(n)
        ? r === "string" || e instanceof Uint8Array
        : /[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(n)
        ? Array.isArray(e) &&
          e.every((o) =>
            Bt(o, I(l({}, t), { type: n.replace(/(\[[0-9]{0,}\])$/, "") }))
          )
        : !1;
  }
}
function sn(e, t, r) {
  for (let n in e) {
    let o = e[n],
      s = t[n];
    if (
      o.type === "tuple" &&
      s.type === "tuple" &&
      "components" in o &&
      "components" in s
    )
      return sn(o.components, s.components, r[n]);
    let i = [o.type, s.type];
    if (
      i.includes("address") && i.includes("bytes20")
        ? !0
        : i.includes("address") && i.includes("string")
        ? M(r[n], { strict: !1 })
        : i.includes("address") && i.includes("bytes")
        ? M(r[n], { strict: !1 })
        : !1
    )
      return i;
  }
}
var ze = class extends c {
    constructor({ blockNumber: t, chain: r, contract: n }) {
      super(`Chain "${r.name}" does not support contract "${n.name}".`, {
        metaMessages: [
          "This could be due to any of the following:",
          ...(t && n.blockCreated && n.blockCreated > t
            ? [
                `- The contract "${n.name}" was not deployed until block ${n.blockCreated} (current block ${t}).`,
              ]
            : [
                `- The chain does not have the contract "${n.name}" configured.`,
              ]),
        ],
        name: "ChainDoesNotSupportContract",
      });
    }
  },
  an = class extends c {
    constructor({ chain: t, currentChainId: r }) {
      super(
        `The current chain of the wallet (id: ${r}) does not match the target chain for the transaction (id: ${t.id} \u2013 ${t.name}).`,
        {
          metaMessages: [
            `Current Chain ID:  ${r}`,
            `Expected Chain ID: ${t.id} \u2013 ${t.name}`,
          ],
          name: "ChainMismatchError",
        }
      );
    }
  },
  cn = class extends c {
    constructor() {
      super(
        [
          "No chain was provided to the request.",
          "Please provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient.",
        ].join(`
`),
        { name: "ChainNotFoundError" }
      );
    }
  },
  un = class extends c {
    constructor() {
      super("No chain was provided to the Client.", {
        name: "ClientChainNotConfiguredError",
      });
    }
  },
  pn = class extends c {
    constructor({ chainId: t }) {
      super(
        typeof t == "number"
          ? `Chain ID "${t}" is invalid.`
          : "Chain ID is invalid.",
        { name: "InvalidChainIdError" }
      );
    }
  };
function Sc({ blockNumber: e, chain: t, contract: r }) {
  let n = t?.contracts?.[r];
  if (!n) throw new ze({ chain: t, contract: { name: r } });
  if (e && n.blockCreated && n.blockCreated > e)
    throw new ze({
      blockNumber: e,
      chain: t,
      contract: { name: r, blockCreated: n.blockCreated },
    });
  return n.address;
}
var dn = {
    1: "An `assert` condition failed.",
    17: "Arithmetic operation resulted in underflow or overflow.",
    18: "Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).",
    33: "Attempted to convert to an invalid type.",
    34: "Attempted to access a storage byte array that is incorrectly encoded.",
    49: "Performed `.pop()` on an empty array",
    50: "Array index is out of bounds.",
    65: "Allocated too much memory or created an array which is too large.",
    81: "Attempted to call a zero-initialized variable of internal function type.",
  },
  ln = {
    inputs: [{ name: "message", type: "string" }],
    name: "Error",
    type: "error",
  },
  fn = {
    inputs: [{ name: "reason", type: "uint256" }],
    name: "Panic",
    type: "error",
  };
function mn(e) {
  let { abi: t, data: r } = e,
    n = W(r, 0, 4);
  if (n === "0x") throw new _();
  let s = [...(t || []), ln, fn].find(
    (i) => i.type === "error" && n === it(U(i))
  );
  if (!s) throw new q(n, { docsPath: "/docs/contract/decodeErrorResult" });
  return {
    abiItem: s,
    args:
      "inputs" in s && s.inputs && s.inputs.length > 0
        ? jr(s.inputs, W(r, 4))
        : void 0,
    errorName: s.name,
  };
}
var J = (e, t, r) =>
  JSON.stringify(
    e,
    (n, o) => {
      let s = typeof o == "bigint" ? o.toString() : o;
      return typeof t == "function" ? t(n, s) : s;
    },
    r
  );
var hn = { gwei: 9, wei: 18 },
  xn = { ether: -9, wei: 9 },
  Fc = { ether: -18, gwei: -9 };
function at(e, t) {
  let r = e.toString(),
    n = r.startsWith("-");
  n && (r = r.slice(1)), (r = r.padStart(t, "0"));
  let [o, s] = [r.slice(0, r.length - t), r.slice(r.length - t)];
  return (
    (s = s.replace(/(0+)$/, "")),
    `${n ? "-" : ""}${o || "0"}${s ? `.${s}` : ""}`
  );
}
function ct(e, t = "wei") {
  return at(e, hn[t]);
}
function T(e, t = "wei") {
  return at(e, xn[t]);
}
var bn = class extends c {
    constructor({ address: t }) {
      super(`State for account "${t}" is set multiple times.`, {
        name: "AccountStateConflictError",
      });
    }
  },
  yn = class extends c {
    constructor() {
      super("state and stateDiff are set on the same account.", {
        name: "StateAssignmentConflictError",
      });
    }
  };
function gn(e) {
  return e.reduce(
    (t, { slot: r, value: n }) => `${t}        ${r}: ${n}
`,
    ""
  );
}
function wn(e) {
  return e
    .reduce(
      (t, o) => {
        var s = o,
          { address: r } = s,
          n = Ue(s, ["address"]);
        let i = `${t}    ${r}:
`;
        return (
          n.nonce &&
            (i += `      nonce: ${n.nonce}
`),
          n.balance &&
            (i += `      balance: ${n.balance}
`),
          n.code &&
            (i += `      code: ${n.code}
`),
          n.state &&
            ((i += `      state:
`),
            (i += gn(n.state))),
          n.stateDiff &&
            ((i += `      stateDiff:
`),
            (i += gn(n.stateDiff))),
          i
        );
      },
      `  State Override:
`
    )
    .slice(0, -1);
}
function Ce(e) {
  let t = Object.entries(e)
      .map(([n, o]) => (o === void 0 || o === !1 ? null : [n, o]))
      .filter(Boolean),
    r = t.reduce((n, [o]) => Math.max(n, o.length), 0);
  return t.map(([n, o]) => `  ${`${n}:`.padEnd(r + 1)}  ${o}`).join(`
`);
}
var ut = class extends c {
    constructor() {
      super(
        [
          "Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.",
          "Use `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others.",
        ].join(`
`),
        { name: "FeeConflictError" }
      );
    }
  },
  vn = class extends c {
    constructor({ v: t }) {
      super(`Invalid \`v\` value "${t}". Expected 27 or 28.`, {
        name: "InvalidLegacyVError",
      });
    }
  },
  $n = class extends c {
    constructor({ transaction: t }) {
      super("Cannot infer a transaction type from provided transaction.", {
        metaMessages: [
          "Provided Transaction:",
          "{",
          Ce(t),
          "}",
          "",
          "To infer the type, either provide:",
          "- a `type` to the Transaction, or",
          "- an EIP-1559 Transaction with `maxFeePerGas`, or",
          "- an EIP-2930 Transaction with `gasPrice` & `accessList`, or",
          "- an EIP-4844 Transaction with `blobs`, `blobVersionedHashes`, `sidecars`, or",
          "- an EIP-7702 Transaction with `authorizationList`, or",
          "- a Legacy Transaction with `gasPrice`",
        ],
        name: "InvalidSerializableTransactionError",
      });
    }
  },
  Pn = class extends c {
    constructor({ serializedType: t }) {
      super(`Serialized transaction type "${t}" is invalid.`, {
        name: "InvalidSerializedTransactionType",
      }),
        Object.defineProperty(this, "serializedType", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        (this.serializedType = t);
    }
  },
  An = class extends c {
    constructor({ attributes: t, serializedTransaction: r, type: n }) {
      let o = Object.entries(t)
        .map(([s, i]) => (typeof i > "u" ? s : void 0))
        .filter(Boolean);
      super(`Invalid serialized transaction of type "${n}" was provided.`, {
        metaMessages: [
          `Serialized Transaction: "${r}"`,
          o.length > 0 ? `Missing Attributes: ${o.join(", ")}` : "",
        ].filter(Boolean),
        name: "InvalidSerializedTransactionError",
      }),
        Object.defineProperty(this, "serializedTransaction", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "type", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        (this.serializedTransaction = r),
        (this.type = n);
    }
  },
  In = class extends c {
    constructor({ storageKey: t }) {
      super(
        `Size for storage key "${t}" is invalid. Expected 32 bytes. Got ${Math.floor(
          (t.length - 2) / 2
        )} bytes.`,
        { name: "InvalidStorageKeySizeError" }
      );
    }
  },
  En = class extends c {
    constructor(
      t,
      {
        account: r,
        docsPath: n,
        chain: o,
        data: s,
        gas: i,
        gasPrice: a,
        maxFeePerGas: u,
        maxPriorityFeePerGas: p,
        nonce: d,
        to: f,
        value: b,
      }
    ) {
      let y = Ce({
        chain: o && `${o?.name} (id: ${o?.id})`,
        from: r?.address,
        to: f,
        value:
          typeof b < "u" && `${ct(b)} ${o?.nativeCurrency?.symbol || "ETH"}`,
        data: s,
        gas: i,
        gasPrice: typeof a < "u" && `${T(a)} gwei`,
        maxFeePerGas: typeof u < "u" && `${T(u)} gwei`,
        maxPriorityFeePerGas: typeof p < "u" && `${T(p)} gwei`,
        nonce: d,
      });
      super(t.shortMessage, {
        cause: t,
        docsPath: n,
        metaMessages: [
          ...(t.metaMessages ? [...t.metaMessages, " "] : []),
          "Request Arguments:",
          y,
        ].filter(Boolean),
        name: "TransactionExecutionError",
      }),
        Object.defineProperty(this, "cause", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        (this.cause = t);
    }
  },
  Sn = class extends c {
    constructor({
      blockHash: t,
      blockNumber: r,
      blockTag: n,
      hash: o,
      index: s,
    }) {
      let i = "Transaction";
      n &&
        s !== void 0 &&
        (i = `Transaction at block time "${n}" at index "${s}"`),
        t &&
          s !== void 0 &&
          (i = `Transaction at block hash "${t}" at index "${s}"`),
        r &&
          s !== void 0 &&
          (i = `Transaction at block number "${r}" at index "${s}"`),
        o && (i = `Transaction with hash "${o}"`),
        super(`${i} could not be found.`, { name: "TransactionNotFoundError" });
    }
  },
  Tn = class extends c {
    constructor({ hash: t }) {
      super(
        `Transaction receipt with hash "${t}" could not be found. The Transaction may not be processed on a block yet.`,
        { name: "TransactionReceiptNotFoundError" }
      );
    }
  },
  Mn = class extends c {
    constructor({ receipt: t }) {
      super(`Transaction with hash "${t.transactionHash}" reverted.`, {
        metaMessages: [
          'The receipt marked the transaction as "reverted". This could mean that the function on the contract you are trying to call threw an error.',
          " ",
          "You can attempt to extract the revert reason by:",
          "- calling the `simulateContract` or `simulateCalls` Action with the `abi` and `functionName` of the contract",
          "- using the `call` Action with raw `data`",
        ],
        name: "TransactionReceiptRevertedError",
      }),
        Object.defineProperty(this, "receipt", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        (this.receipt = t);
    }
  },
  jn = class extends c {
    constructor({ hash: t }) {
      super(
        `Timed out while waiting for transaction with hash "${t}" to be confirmed.`,
        { name: "WaitForTransactionReceiptTimeoutError" }
      );
    }
  };
function pt(e) {
  return typeof e == "string" ? { address: e, type: "json-rpc" } : e;
}
function Ot({
  abiItem: e,
  args: t,
  includeFunctionName: r = !0,
  includeName: n = !1,
}) {
  if ("name" in e && "inputs" in e && e.inputs)
    return `${r ? e.name : ""}(${e.inputs
      .map(
        (o, s) =>
          `${n && o.name ? `${o.name}: ` : ""}${
            typeof t[s] == "object" ? J(t[s]) : t[s]
          }`
      )
      .join(", ")})`;
}
var Bn = (e) => e,
  re = (e) => e;
var dt = class extends c {
    constructor(
      t,
      {
        account: r,
        docsPath: n,
        chain: o,
        data: s,
        gas: i,
        gasPrice: a,
        maxFeePerGas: u,
        maxPriorityFeePerGas: p,
        nonce: d,
        to: f,
        value: b,
        stateOverride: y,
      }
    ) {
      let $ = r ? pt(r) : void 0,
        Y = Ce({
          from: $?.address,
          to: f,
          value:
            typeof b < "u" && `${ct(b)} ${o?.nativeCurrency?.symbol || "ETH"}`,
          data: s,
          gas: i,
          gasPrice: typeof a < "u" && `${T(a)} gwei`,
          maxFeePerGas: typeof u < "u" && `${T(u)} gwei`,
          maxPriorityFeePerGas: typeof p < "u" && `${T(p)} gwei`,
          nonce: d,
        });
      y &&
        (Y += `
${wn(y)}`),
        super(t.shortMessage, {
          cause: t,
          docsPath: n,
          metaMessages: [
            ...(t.metaMessages ? [...t.metaMessages, " "] : []),
            "Raw Call Arguments:",
            Y,
          ].filter(Boolean),
          name: "CallExecutionError",
        }),
        Object.defineProperty(this, "cause", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        (this.cause = t);
    }
  },
  On = class extends c {
    constructor(
      t,
      {
        abi: r,
        args: n,
        contractAddress: o,
        docsPath: s,
        functionName: i,
        sender: a,
      }
    ) {
      let u = on({ abi: r, args: n, name: i }),
        p = u
          ? Ot({
              abiItem: u,
              args: n,
              includeFunctionName: !1,
              includeName: !1,
            })
          : void 0,
        d = u ? U(u, { includeName: !0 }) : void 0,
        f = Ce({
          address: o && Bn(o),
          function: d,
          args:
            p &&
            p !== "()" &&
            `${[...Array(i?.length ?? 0).keys()].map(() => " ").join("")}${p}`,
          sender: a,
        });
      super(
        t.shortMessage ||
          `An unknown error occurred while executing the contract function "${i}".`,
        {
          cause: t,
          docsPath: s,
          metaMessages: [
            ...(t.metaMessages ? [...t.metaMessages, " "] : []),
            f && "Contract Call:",
            f,
          ].filter(Boolean),
          name: "ContractFunctionExecutionError",
        }
      ),
        Object.defineProperty(this, "abi", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "args", {
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
        Object.defineProperty(this, "contractAddress", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "formattedArgs", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "functionName", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "sender", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        (this.abi = r),
        (this.args = n),
        (this.cause = t),
        (this.contractAddress = o),
        (this.functionName = i),
        (this.sender = a);
    }
  },
  zn = class extends c {
    constructor({ abi: t, data: r, functionName: n, message: o }) {
      let s, i, a, u;
      if (r && r !== "0x")
        try {
          i = mn({ abi: t, data: r });
          let { abiItem: d, errorName: f, args: b } = i;
          if (f === "Error") u = b[0];
          else if (f === "Panic") {
            let [y] = b;
            u = dn[y];
          } else {
            let y = d ? U(d, { includeName: !0 }) : void 0,
              $ =
                d && b
                  ? Ot({
                      abiItem: d,
                      args: b,
                      includeFunctionName: !1,
                      includeName: !1,
                    })
                  : void 0;
            a = [
              y ? `Error: ${y}` : "",
              $ && $ !== "()"
                ? `       ${[...Array(f?.length ?? 0).keys()]
                    .map(() => " ")
                    .join("")}${$}`
                : "",
            ];
          }
        } catch (d) {
          s = d;
        }
      else o && (u = o);
      let p;
      s instanceof q &&
        ((p = s.signature),
        (a = [
          `Unable to decode signature "${p}" as it was not found on the provided ABI.`,
          "Make sure you are using the correct ABI and that the error exists on it.",
          `You can look up the decoded signature here: https://openchain.xyz/signatures?query=${p}.`,
        ])),
        super(
          (u && u !== "execution reverted") || p
            ? [
                `The contract function "${n}" reverted with the following ${
                  p ? "signature" : "reason"
                }:`,
                u || p,
              ].join(`
`)
            : `The contract function "${n}" reverted.`,
          { cause: s, metaMessages: a, name: "ContractFunctionRevertedError" }
        ),
        Object.defineProperty(this, "data", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "raw", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "reason", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "signature", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        (this.data = i),
        (this.raw = r),
        (this.reason = u),
        (this.signature = p);
    }
  },
  Cn = class extends c {
    constructor({ functionName: t }) {
      super(`The contract function "${t}" returned no data ("0x").`, {
        metaMessages: [
          "This could be due to any of the following:",
          `  - The contract does not have the function "${t}",`,
          "  - The parameters passed to the contract function may be invalid, or",
          "  - The address is not a contract.",
        ],
        name: "ContractFunctionZeroDataError",
      });
    }
  },
  Un = class extends c {
    constructor({ factory: t }) {
      super(
        `Deployment for counterfactual contract call failed${
          t ? ` for factory "${t}".` : ""
        }`,
        {
          metaMessages: [
            "Please ensure:",
            "- The `factory` is a valid contract deployment factory (ie. Create2 Factory, ERC-4337 Factory, etc).",
            "- The `factoryData` is a valid encoded function call for contract deployment function on the factory.",
          ],
          name: "CounterfactualDeploymentFailedError",
        }
      );
    }
  },
  kn = class extends c {
    constructor({ data: t, message: r }) {
      super(r || "", { name: "RawContractError" }),
        Object.defineProperty(this, "code", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: 3,
        }),
        Object.defineProperty(this, "data", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        (this.data = t);
    }
  };
var Rn = class extends c {
    constructor({
      body: t,
      cause: r,
      details: n,
      headers: o,
      status: s,
      url: i,
    }) {
      super("HTTP request failed.", {
        cause: r,
        details: n,
        metaMessages: [
          s && `Status: ${s}`,
          `URL: ${re(i)}`,
          t && `Request body: ${J(t)}`,
        ].filter(Boolean),
        name: "HttpRequestError",
      }),
        Object.defineProperty(this, "body", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "headers", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "status", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "url", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        (this.body = t),
        (this.headers = o),
        (this.status = s),
        (this.url = i);
    }
  },
  Fn = class extends c {
    constructor({ body: t, cause: r, details: n, url: o }) {
      super("WebSocket request failed.", {
        cause: r,
        details: n,
        metaMessages: [`URL: ${re(o)}`, t && `Request body: ${J(t)}`].filter(
          Boolean
        ),
        name: "WebSocketRequestError",
      });
    }
  },
  lt = class extends c {
    constructor({ body: t, error: r, url: n }) {
      super("RPC Request failed.", {
        cause: r,
        details: r.message,
        metaMessages: [`URL: ${re(n)}`, `Request body: ${J(t)}`],
        name: "RpcRequestError",
      }),
        Object.defineProperty(this, "code", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "data", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        (this.code = r.code),
        (this.data = r.data);
    }
  },
  Ln = class extends c {
    constructor({ url: t } = {}) {
      super("The socket has been closed.", {
        metaMessages: [t && `URL: ${re(t)}`].filter(Boolean),
        name: "SocketClosedError",
      });
    }
  },
  Nn = class extends c {
    constructor({ body: t, url: r }) {
      super("The request took too long to respond.", {
        details: "The request timed out.",
        metaMessages: [`URL: ${re(r)}`, `Request body: ${J(t)}`],
        name: "TimeoutError",
      });
    }
  };
var No = -1,
  g = class extends c {
    constructor(
      t,
      { code: r, docsPath: n, metaMessages: o, name: s, shortMessage: i }
    ) {
      super(i, {
        cause: t,
        docsPath: n,
        metaMessages: o || t?.metaMessages,
        name: s || "RpcError",
      }),
        Object.defineProperty(this, "code", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        (this.name = s || t.name),
        (this.code = t instanceof lt ? t.code : r ?? No);
    }
  },
  v = class extends g {
    constructor(t, r) {
      super(t, r),
        Object.defineProperty(this, "data", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        (this.data = r.data);
    }
  },
  zt = class e extends g {
    constructor(t) {
      super(t, {
        code: e.code,
        name: "ParseRpcError",
        shortMessage:
          "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.",
      });
    }
  };
Object.defineProperty(zt, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32700,
});
var Ct = class e extends g {
  constructor(t) {
    super(t, {
      code: e.code,
      name: "InvalidRequestRpcError",
      shortMessage: "JSON is not a valid request object.",
    });
  }
};
Object.defineProperty(Ct, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32600,
});
var Ut = class e extends g {
  constructor(t, { method: r } = {}) {
    super(t, {
      code: e.code,
      name: "MethodNotFoundRpcError",
      shortMessage: `The method${
        r ? ` "${r}"` : ""
      } does not exist / is not available.`,
    });
  }
};
Object.defineProperty(Ut, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32601,
});
var kt = class e extends g {
  constructor(t) {
    super(t, {
      code: e.code,
      name: "InvalidParamsRpcError",
      shortMessage: [
        "Invalid parameters were provided to the RPC method.",
        "Double check you have provided the correct parameters.",
      ].join(`
`),
    });
  }
};
Object.defineProperty(kt, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32602,
});
var Rt = class e extends g {
  constructor(t) {
    super(t, {
      code: e.code,
      name: "InternalRpcError",
      shortMessage: "An internal error was received.",
    });
  }
};
Object.defineProperty(Rt, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32603,
});
var Ft = class e extends g {
  constructor(t) {
    super(t, {
      code: e.code,
      name: "InvalidInputRpcError",
      shortMessage: [
        "Missing or invalid parameters.",
        "Double check you have provided the correct parameters.",
      ].join(`
`),
    });
  }
};
Object.defineProperty(Ft, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32e3,
});
var Lt = class e extends g {
  constructor(t) {
    super(t, {
      code: e.code,
      name: "ResourceNotFoundRpcError",
      shortMessage: "Requested resource not found.",
    }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "ResourceNotFoundRpcError",
      });
  }
};
Object.defineProperty(Lt, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32001,
});
var Nt = class e extends g {
  constructor(t) {
    super(t, {
      code: e.code,
      name: "ResourceUnavailableRpcError",
      shortMessage: "Requested resource not available.",
    });
  }
};
Object.defineProperty(Nt, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32002,
});
var Dt = class e extends g {
  constructor(t) {
    super(t, {
      code: e.code,
      name: "TransactionRejectedRpcError",
      shortMessage: "Transaction creation failed.",
    });
  }
};
Object.defineProperty(Dt, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32003,
});
var Ht = class e extends g {
  constructor(t, { method: r } = {}) {
    super(t, {
      code: e.code,
      name: "MethodNotSupportedRpcError",
      shortMessage: `Method${r ? ` "${r}"` : ""} is not supported.`,
    });
  }
};
Object.defineProperty(Ht, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32004,
});
var Gt = class e extends g {
  constructor(t) {
    super(t, {
      code: e.code,
      name: "LimitExceededRpcError",
      shortMessage: "Request exceeds defined limit.",
    });
  }
};
Object.defineProperty(Gt, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32005,
});
var Vt = class e extends g {
  constructor(t) {
    super(t, {
      code: e.code,
      name: "JsonRpcVersionUnsupportedError",
      shortMessage: "Version of JSON-RPC protocol is not supported.",
    });
  }
};
Object.defineProperty(Vt, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32006,
});
var Wt = class e extends v {
  constructor(t) {
    super(t, {
      code: e.code,
      name: "UserRejectedRequestError",
      shortMessage: "User rejected the request.",
    });
  }
};
Object.defineProperty(Wt, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4001,
});
var Zt = class e extends v {
  constructor(t) {
    super(t, {
      code: e.code,
      name: "UnauthorizedProviderError",
      shortMessage:
        "The requested method and/or account has not been authorized by the user.",
    });
  }
};
Object.defineProperty(Zt, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4100,
});
var Kt = class e extends v {
  constructor(t, { method: r } = {}) {
    super(t, {
      code: e.code,
      name: "UnsupportedProviderMethodError",
      shortMessage: `The Provider does not support the requested method${
        r ? ` " ${r}"` : ""
      }.`,
    });
  }
};
Object.defineProperty(Kt, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4200,
});
var Jt = class e extends v {
  constructor(t) {
    super(t, {
      code: e.code,
      name: "ProviderDisconnectedError",
      shortMessage: "The Provider is disconnected from all chains.",
    });
  }
};
Object.defineProperty(Jt, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4900,
});
var Yt = class e extends v {
  constructor(t) {
    super(t, {
      code: e.code,
      name: "ChainDisconnectedError",
      shortMessage: "The Provider is not connected to the requested chain.",
    });
  }
};
Object.defineProperty(Yt, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4901,
});
var _t = class e extends v {
  constructor(t) {
    super(t, {
      code: e.code,
      name: "SwitchChainError",
      shortMessage: "An error occurred when attempting to switch chain.",
    });
  }
};
Object.defineProperty(_t, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4902,
});
var qt = class e extends v {
  constructor(t) {
    super(t, {
      code: e.code,
      name: "UnsupportedNonOptionalCapabilityError",
      shortMessage:
        "This Wallet does not support a capability that was not marked as optional.",
    });
  }
};
Object.defineProperty(qt, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 5700,
});
var Xt = class e extends v {
  constructor(t) {
    super(t, {
      code: e.code,
      name: "UnsupportedChainIdError",
      shortMessage: "This Wallet does not support the requested chain ID.",
    });
  }
};
Object.defineProperty(Xt, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 5710,
});
var Qt = class e extends v {
  constructor(t) {
    super(t, {
      code: e.code,
      name: "DuplicateIdError",
      shortMessage: "There is already a bundle submitted with this ID.",
    });
  }
};
Object.defineProperty(Qt, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 5720,
});
var er = class e extends v {
  constructor(t) {
    super(t, {
      code: e.code,
      name: "UnknownBundleIdError",
      shortMessage: "This bundle id is unknown / has not been submitted",
    });
  }
};
Object.defineProperty(er, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 5730,
});
var tr = class e extends v {
  constructor(t) {
    super(t, {
      code: e.code,
      name: "BundleTooLargeError",
      shortMessage: "The call bundle is too large for the Wallet to process.",
    });
  }
};
Object.defineProperty(tr, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 5740,
});
var rr = class e extends v {
  constructor(t) {
    super(t, {
      code: e.code,
      name: "AtomicReadyWalletRejectedUpgradeError",
      shortMessage:
        "The Wallet can support atomicity after an upgrade, but the user rejected the upgrade.",
    });
  }
};
Object.defineProperty(rr, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 5750,
});
var nr = class e extends v {
  constructor(t) {
    super(t, {
      code: e.code,
      name: "AtomicityNotSupportedError",
      shortMessage:
        "The wallet does not support atomic execution but the request requires it.",
    });
  }
};
Object.defineProperty(nr, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 5760,
});
var Dn = class extends g {
  constructor(t) {
    super(t, {
      name: "UnknownRpcError",
      shortMessage: "An unknown RPC error occurred.",
    });
  }
};
var L = class extends c {
  constructor({ cause: t, message: r } = {}) {
    let n = r
      ?.replace("execution reverted: ", "")
      ?.replace("execution reverted", "");
    super(
      `Execution reverted ${
        n ? `with reason: ${n}` : "for an unknown reason"
      }.`,
      { cause: t, name: "ExecutionRevertedError" }
    );
  }
};
Object.defineProperty(L, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 3,
});
Object.defineProperty(L, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /execution reverted/,
});
var H = class extends c {
  constructor({ cause: t, maxFeePerGas: r } = {}) {
    super(
      `The fee cap (\`maxFeePerGas\`${
        r ? ` = ${T(r)} gwei` : ""
      }) cannot be higher than the maximum allowed value (2^256-1).`,
      { cause: t, name: "FeeCapTooHighError" }
    );
  }
};
Object.defineProperty(H, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/,
});
var ne = class extends c {
  constructor({ cause: t, maxFeePerGas: r } = {}) {
    super(
      `The fee cap (\`maxFeePerGas\`${
        r ? ` = ${T(r)}` : ""
      } gwei) cannot be lower than the block base fee.`,
      { cause: t, name: "FeeCapTooLowError" }
    );
  }
};
Object.defineProperty(ne, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value:
    /max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/,
});
var oe = class extends c {
  constructor({ cause: t, nonce: r } = {}) {
    super(
      `Nonce provided for the transaction ${
        r ? `(${r}) ` : ""
      }is higher than the next one expected.`,
      { cause: t, name: "NonceTooHighError" }
    );
  }
};
Object.defineProperty(oe, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /nonce too high/,
});
var se = class extends c {
  constructor({ cause: t, nonce: r } = {}) {
    super(
      [
        `Nonce provided for the transaction ${
          r ? `(${r}) ` : ""
        }is lower than the current nonce of the account.`,
        "Try increasing the nonce or find the latest nonce with `getTransactionCount`.",
      ].join(`
`),
      { cause: t, name: "NonceTooLowError" }
    );
  }
};
Object.defineProperty(se, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /nonce too low|transaction already imported|already known/,
});
var ie = class extends c {
  constructor({ cause: t, nonce: r } = {}) {
    super(
      `Nonce provided for the transaction ${
        r ? `(${r}) ` : ""
      }exceeds the maximum allowed nonce.`,
      { cause: t, name: "NonceMaxValueError" }
    );
  }
};
Object.defineProperty(ie, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /nonce has max value/,
});
var ae = class extends c {
  constructor({ cause: t } = {}) {
    super(
      [
        "The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account.",
      ].join(`
`),
      {
        cause: t,
        metaMessages: [
          "This error could arise when the account does not have enough funds to:",
          " - pay for the total gas fee,",
          " - pay for the value to send.",
          " ",
          "The cost of the transaction is calculated as `gas * gas fee + value`, where:",
          " - `gas` is the amount of gas needed for transaction to execute,",
          " - `gas fee` is the gas fee,",
          " - `value` is the amount of ether to send to the recipient.",
        ],
        name: "InsufficientFundsError",
      }
    );
  }
};
Object.defineProperty(ae, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /insufficient funds|exceeds transaction sender account balance/,
});
var ce = class extends c {
  constructor({ cause: t, gas: r } = {}) {
    super(
      `The amount of gas ${
        r ? `(${r}) ` : ""
      }provided for the transaction exceeds the limit allowed for the block.`,
      { cause: t, name: "IntrinsicGasTooHighError" }
    );
  }
};
Object.defineProperty(ce, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /intrinsic gas too high|gas limit reached/,
});
var ue = class extends c {
  constructor({ cause: t, gas: r } = {}) {
    super(
      `The amount of gas ${
        r ? `(${r}) ` : ""
      }provided for the transaction is too low.`,
      { cause: t, name: "IntrinsicGasTooLowError" }
    );
  }
};
Object.defineProperty(ue, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /intrinsic gas too low/,
});
var pe = class extends c {
  constructor({ cause: t }) {
    super("The transaction type is not supported for this chain.", {
      cause: t,
      name: "TransactionTypeNotSupportedError",
    });
  }
};
Object.defineProperty(pe, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /transaction type not valid/,
});
var G = class extends c {
  constructor({ cause: t, maxPriorityFeePerGas: r, maxFeePerGas: n } = {}) {
    super(
      [
        `The provided tip (\`maxPriorityFeePerGas\`${
          r ? ` = ${T(r)} gwei` : ""
        }) cannot be higher than the fee cap (\`maxFeePerGas\`${
          n ? ` = ${T(n)} gwei` : ""
        }).`,
      ].join(`
`),
      { cause: t, name: "TipAboveFeeCapError" }
    );
  }
};
Object.defineProperty(G, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value:
    /max priority fee per gas higher than max fee per gas|tip higher than fee cap/,
});
var de = class extends c {
  constructor({ cause: t }) {
    super(`An error occurred while executing: ${t?.shortMessage}`, {
      cause: t,
      name: "UnknownNodeError",
    });
  }
};
function Hn(e, t) {
  return ({ exclude: r, format: n }) => ({
    exclude: r,
    format: (o, s) => {
      let i = t(o, s);
      if (r) for (let a of r) delete i[a];
      return l(l({}, i), n(o, s));
    },
    type: e,
  });
}
var Do = {
  legacy: "0x0",
  eip2930: "0x1",
  eip1559: "0x2",
  eip4844: "0x3",
  eip7702: "0x4",
};
function Ho(e, t) {
  let r = {};
  return (
    typeof e.authorizationList < "u" &&
      (r.authorizationList = Go(e.authorizationList)),
    typeof e.accessList < "u" && (r.accessList = e.accessList),
    typeof e.blobVersionedHashes < "u" &&
      (r.blobVersionedHashes = e.blobVersionedHashes),
    typeof e.blobs < "u" &&
      (typeof e.blobs[0] != "string"
        ? (r.blobs = e.blobs.map((n) => E(n)))
        : (r.blobs = e.blobs)),
    typeof e.data < "u" && (r.data = e.data),
    typeof e.from < "u" && (r.from = e.from),
    typeof e.gas < "u" && (r.gas = m(e.gas)),
    typeof e.gasPrice < "u" && (r.gasPrice = m(e.gasPrice)),
    typeof e.maxFeePerBlobGas < "u" &&
      (r.maxFeePerBlobGas = m(e.maxFeePerBlobGas)),
    typeof e.maxFeePerGas < "u" && (r.maxFeePerGas = m(e.maxFeePerGas)),
    typeof e.maxPriorityFeePerGas < "u" &&
      (r.maxPriorityFeePerGas = m(e.maxPriorityFeePerGas)),
    typeof e.nonce < "u" && (r.nonce = m(e.nonce)),
    typeof e.to < "u" && (r.to = e.to),
    typeof e.type < "u" && (r.type = Do[e.type]),
    typeof e.value < "u" && (r.value = m(e.value)),
    r
  );
}
var Ou = Hn("transactionRequest", Ho);
function Go(e) {
  return e.map((t) =>
    l(
      l(
        {
          address: t.address,
          r: t.r ? m(BigInt(t.r)) : t.r,
          s: t.s ? m(BigInt(t.s)) : t.s,
          chainId: m(t.chainId),
          nonce: m(t.nonce),
        },
        typeof t.yParity < "u" ? { yParity: m(t.yParity) } : {}
      ),
      typeof t.v < "u" && typeof t.yParity > "u" ? { v: m(t.v) } : {}
    )
  );
}
var Uu = 2n ** (8n - 1n) - 1n,
  ku = 2n ** (16n - 1n) - 1n,
  Ru = 2n ** (24n - 1n) - 1n,
  Fu = 2n ** (32n - 1n) - 1n,
  Lu = 2n ** (40n - 1n) - 1n,
  Nu = 2n ** (48n - 1n) - 1n,
  Du = 2n ** (56n - 1n) - 1n,
  Hu = 2n ** (64n - 1n) - 1n,
  Gu = 2n ** (72n - 1n) - 1n,
  Vu = 2n ** (80n - 1n) - 1n,
  Wu = 2n ** (88n - 1n) - 1n,
  Zu = 2n ** (96n - 1n) - 1n,
  Ku = 2n ** (104n - 1n) - 1n,
  Ju = 2n ** (112n - 1n) - 1n,
  Yu = 2n ** (120n - 1n) - 1n,
  _u = 2n ** (128n - 1n) - 1n,
  qu = 2n ** (136n - 1n) - 1n,
  Xu = 2n ** (144n - 1n) - 1n,
  Qu = 2n ** (152n - 1n) - 1n,
  ep = 2n ** (160n - 1n) - 1n,
  tp = 2n ** (168n - 1n) - 1n,
  rp = 2n ** (176n - 1n) - 1n,
  np = 2n ** (184n - 1n) - 1n,
  op = 2n ** (192n - 1n) - 1n,
  sp = 2n ** (200n - 1n) - 1n,
  ip = 2n ** (208n - 1n) - 1n,
  ap = 2n ** (216n - 1n) - 1n,
  cp = 2n ** (224n - 1n) - 1n,
  up = 2n ** (232n - 1n) - 1n,
  pp = 2n ** (240n - 1n) - 1n,
  dp = 2n ** (248n - 1n) - 1n,
  lp = 2n ** (256n - 1n) - 1n,
  fp = -(2n ** (8n - 1n)),
  mp = -(2n ** (16n - 1n)),
  hp = -(2n ** (24n - 1n)),
  xp = -(2n ** (32n - 1n)),
  bp = -(2n ** (40n - 1n)),
  yp = -(2n ** (48n - 1n)),
  gp = -(2n ** (56n - 1n)),
  wp = -(2n ** (64n - 1n)),
  vp = -(2n ** (72n - 1n)),
  $p = -(2n ** (80n - 1n)),
  Pp = -(2n ** (88n - 1n)),
  Ap = -(2n ** (96n - 1n)),
  Ip = -(2n ** (104n - 1n)),
  Ep = -(2n ** (112n - 1n)),
  Sp = -(2n ** (120n - 1n)),
  Tp = -(2n ** (128n - 1n)),
  Mp = -(2n ** (136n - 1n)),
  jp = -(2n ** (144n - 1n)),
  Bp = -(2n ** (152n - 1n)),
  Op = -(2n ** (160n - 1n)),
  zp = -(2n ** (168n - 1n)),
  Cp = -(2n ** (176n - 1n)),
  Up = -(2n ** (184n - 1n)),
  kp = -(2n ** (192n - 1n)),
  Rp = -(2n ** (200n - 1n)),
  Fp = -(2n ** (208n - 1n)),
  Lp = -(2n ** (216n - 1n)),
  Np = -(2n ** (224n - 1n)),
  Dp = -(2n ** (232n - 1n)),
  Hp = -(2n ** (240n - 1n)),
  Gp = -(2n ** (248n - 1n)),
  Vp = -(2n ** (256n - 1n)),
  Wp = 2n ** 8n - 1n,
  Zp = 2n ** 16n - 1n,
  Kp = 2n ** 24n - 1n,
  Jp = 2n ** 32n - 1n,
  Yp = 2n ** 40n - 1n,
  _p = 2n ** 48n - 1n,
  qp = 2n ** 56n - 1n,
  Xp = 2n ** 64n - 1n,
  Qp = 2n ** 72n - 1n,
  ed = 2n ** 80n - 1n,
  td = 2n ** 88n - 1n,
  rd = 2n ** 96n - 1n,
  nd = 2n ** 104n - 1n,
  od = 2n ** 112n - 1n,
  sd = 2n ** 120n - 1n,
  id = 2n ** 128n - 1n,
  ad = 2n ** 136n - 1n,
  cd = 2n ** 144n - 1n,
  ud = 2n ** 152n - 1n,
  pd = 2n ** 160n - 1n,
  dd = 2n ** 168n - 1n,
  ld = 2n ** 176n - 1n,
  fd = 2n ** 184n - 1n,
  md = 2n ** 192n - 1n,
  hd = 2n ** 200n - 1n,
  xd = 2n ** 208n - 1n,
  bd = 2n ** 216n - 1n,
  yd = 2n ** 224n - 1n,
  gd = 2n ** 232n - 1n,
  wd = 2n ** 240n - 1n,
  vd = 2n ** 248n - 1n,
  Gn = 2n ** 256n - 1n;
function Md(e) {
  let {
      account: t,
      gasPrice: r,
      maxFeePerGas: n,
      maxPriorityFeePerGas: o,
      to: s,
    } = e,
    i = t ? pt(t) : void 0;
  if (i && !M(i.address)) throw new k({ address: i.address });
  if (s && !M(s)) throw new k({ address: s });
  if (typeof r < "u" && (typeof n < "u" || typeof o < "u")) throw new ut();
  if (n && n > Gn) throw new H({ maxFeePerGas: n });
  if (o && n && o > n)
    throw new G({ maxFeePerGas: n, maxPriorityFeePerGas: o });
}
function Vn(e, t) {
  let r = (e.details || "").toLowerCase(),
    n = e instanceof c ? e.walk((o) => o?.code === L.code) : e;
  return n instanceof c
    ? new L({ cause: e, message: n.details })
    : L.nodeMessage.test(r)
    ? new L({ cause: e, message: e.details })
    : H.nodeMessage.test(r)
    ? new H({ cause: e, maxFeePerGas: t?.maxFeePerGas })
    : ne.nodeMessage.test(r)
    ? new ne({ cause: e, maxFeePerGas: t?.maxFeePerGas })
    : oe.nodeMessage.test(r)
    ? new oe({ cause: e, nonce: t?.nonce })
    : se.nodeMessage.test(r)
    ? new se({ cause: e, nonce: t?.nonce })
    : ie.nodeMessage.test(r)
    ? new ie({ cause: e, nonce: t?.nonce })
    : ae.nodeMessage.test(r)
    ? new ae({ cause: e })
    : ce.nodeMessage.test(r)
    ? new ce({ cause: e, gas: t?.gas })
    : ue.nodeMessage.test(r)
    ? new ue({ cause: e, gas: t?.gas })
    : pe.nodeMessage.test(r)
    ? new pe({ cause: e })
    : G.nodeMessage.test(r)
    ? new G({
        cause: e,
        maxFeePerGas: t?.maxFeePerGas,
        maxPriorityFeePerGas: t?.maxPriorityFeePerGas,
      })
    : new de({ cause: e });
}
function Rd(e, n) {
  var o = n,
    { docsPath: t } = o,
    r = Ue(o, ["docsPath"]);
  let s = (() => {
    let i = Vn(e, r);
    return i instanceof de ? e : i;
  })();
  return new dt(s, l({ docsPath: t }, r));
}
function Nd(e, { format: t }) {
  if (!t) return {};
  let r = {};
  function n(s) {
    let i = Object.keys(s);
    for (let a of i)
      a in e && (r[a] = e[a]),
        s[a] && typeof s[a] == "object" && !Array.isArray(s[a]) && n(s[a]);
  }
  let o = t(e || {});
  return n(o), r;
}
export {
  U as a,
  O as b,
  x as c,
  Yo as d,
  c as e,
  ir as f,
  ar as g,
  cr as h,
  Fe as i,
  _ as j,
  Le as k,
  Ne as l,
  De as m,
  ur as n,
  pr as o,
  q as p,
  dr as q,
  lr as r,
  fr as s,
  mr as t,
  hr as u,
  xr as v,
  br as w,
  yr as x,
  gr as y,
  Ge as z,
  Ve as A,
  We as B,
  Re as C,
  wr as D,
  k as E,
  fe as F,
  me as G,
  vr as H,
  N as I,
  R as J,
  Kn as K,
  X as L,
  Ze as M,
  Ke as N,
  $r as O,
  Je as P,
  z as Q,
  Ss as R,
  _e as S,
  Qn as T,
  bt as U,
  eo as V,
  Pr as W,
  mt as X,
  E as Y,
  m as Z,
  ht as _,
  Ye as $,
  qn as aa,
  V as ba,
  Xn as ca,
  xt as da,
  qe as ea,
  Q as fa,
  M as ga,
  he as ha,
  Ns as ia,
  Qe as ja,
  Tr as ka,
  W as la,
  wt as ma,
  ro as na,
  Qs as oa,
  vt as pa,
  $t as qa,
  j as ra,
  Pt as sa,
  Z as ta,
  no as ua,
  oo as va,
  ri as wa,
  ni as xa,
  Sr as ya,
  xi as za,
  jr as Aa,
  K as Ba,
  jt as Ca,
  ye as Da,
  ge as Ea,
  ve as Fa,
  $e as Ga,
  Pe as Ha,
  Ae as Ia,
  Ie as Ja,
  Ee as Ka,
  Se as La,
  B as Ma,
  Te as Na,
  Me as Oa,
  je as Pa,
  Be as Qa,
  Uo as Ra,
  ko as Sa,
  Ro as Ta,
  Fo as Ua,
  tn as Va,
  st as Wa,
  nn as Xa,
  it as Ya,
  on as Za,
  ze as _a,
  an as $a,
  cn as ab,
  un as bb,
  pn as cb,
  Sc as db,
  pt as eb,
  ln as fb,
  mn as gb,
  J as hb,
  hn as ib,
  xn as jb,
  Fc as kb,
  at as lb,
  ct as mb,
  T as nb,
  bn as ob,
  yn as pb,
  Ce as qb,
  ut as rb,
  vn as sb,
  $n as tb,
  Pn as ub,
  An as vb,
  In as wb,
  En as xb,
  Sn as yb,
  Tn as zb,
  Mn as Ab,
  jn as Bb,
  re as Cb,
  dt as Db,
  On as Eb,
  zn as Fb,
  Cn as Gb,
  Un as Hb,
  kn as Ib,
  Rn as Jb,
  Fn as Kb,
  lt as Lb,
  Ln as Mb,
  Nn as Nb,
  g as Ob,
  v as Pb,
  zt as Qb,
  Ct as Rb,
  Ut as Sb,
  kt as Tb,
  Rt as Ub,
  Ft as Vb,
  Lt as Wb,
  Nt as Xb,
  Dt as Yb,
  Ht as Zb,
  Gt as _b,
  Vt as $b,
  Wt as ac,
  Zt as bc,
  Kt as cc,
  Jt as dc,
  Yt as ec,
  _t as fc,
  qt as gc,
  Xt as hc,
  Qt as ic,
  er as jc,
  tr as kc,
  rr as lc,
  nr as mc,
  Dn as nc,
  L as oc,
  H as pc,
  ne as qc,
  oe as rc,
  se as sc,
  ie as tc,
  ae as uc,
  ce as vc,
  ue as wc,
  pe as xc,
  G as yc,
  de as zc,
  Vn as Ac,
  Rd as Bc,
  Nd as Cc,
  Hn as Dc,
  Do as Ec,
  Ho as Fc,
  Ou as Gc,
  Uu as Hc,
  ku as Ic,
  Ru as Jc,
  Fu as Kc,
  Lu as Lc,
  Nu as Mc,
  Du as Nc,
  Hu as Oc,
  Gu as Pc,
  Vu as Qc,
  Wu as Rc,
  Zu as Sc,
  Ku as Tc,
  Ju as Uc,
  Yu as Vc,
  _u as Wc,
  qu as Xc,
  Xu as Yc,
  Qu as Zc,
  ep as _c,
  tp as $c,
  rp as ad,
  np as bd,
  op as cd,
  sp as dd,
  ip as ed,
  ap as fd,
  cp as gd,
  up as hd,
  pp as id,
  dp as jd,
  lp as kd,
  fp as ld,
  mp as md,
  hp as nd,
  xp as od,
  bp as pd,
  yp as qd,
  gp as rd,
  wp as sd,
  vp as td,
  $p as ud,
  Pp as vd,
  Ap as wd,
  Ip as xd,
  Ep as yd,
  Sp as zd,
  Tp as Ad,
  Mp as Bd,
  jp as Cd,
  Bp as Dd,
  Op as Ed,
  zp as Fd,
  Cp as Gd,
  Up as Hd,
  kp as Id,
  Rp as Jd,
  Fp as Kd,
  Lp as Ld,
  Np as Md,
  Dp as Nd,
  Hp as Od,
  Gp as Pd,
  Vp as Qd,
  Wp as Rd,
  Zp as Sd,
  Kp as Td,
  Jp as Ud,
  Yp as Vd,
  _p as Wd,
  qp as Xd,
  Xp as Yd,
  Qp as Zd,
  ed as _d,
  td as $d,
  rd as ae,
  nd as be,
  od as ce,
  sd as de,
  id as ee,
  ad as fe,
  cd as ge,
  ud as he,
  pd as ie,
  dd as je,
  ld as ke,
  fd as le,
  md as me,
  hd as ne,
  xd as oe,
  bd as pe,
  yd as qe,
  gd as re,
  wd as se,
  vd as te,
  Gn as ue,
  Md as ve,
};
