import { a as b } from "./chunk-QSWUHUZZ.js";
import { a as fe, b as le, h as z, k as Z } from "./chunk-VNDKUXGB.js";
var pe = z((ee, te) => {
  "use strict";
  (function (e, t) {
    typeof ee == "object" && typeof te < "u"
      ? (te.exports = t())
      : typeof define == "function" && define.amd
      ? define(t)
      : ((e = typeof globalThis < "u" ? globalThis : e || self).dayjs = t());
  })(ee, function () {
    "use strict";
    var e = 1e3,
      t = 6e4,
      u = 36e5,
      f = "millisecond",
      h = "second",
      E = "minute",
      C = "hour",
      p = "day",
      A = "week",
      _ = "month",
      $ = "quarter",
      T = "year",
      g = "date",
      w = "Invalid Date",
      K =
        /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
      W =
        /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
      F = {
        name: "en",
        weekdays:
          "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        months:
          "January_February_March_April_May_June_July_August_September_October_November_December".split(
            "_"
          ),
        ordinal: function (a) {
          var o = ["th", "st", "nd", "rd"],
            n = a % 100;
          return "[" + a + (o[(n - 20) % 10] || o[n] || o[0]) + "]";
        },
      },
      j = function (a, o, n) {
        var i = String(a);
        return !i || i.length >= o
          ? a
          : "" + Array(o + 1 - i.length).join(n) + a;
      },
      U = {
        s: j,
        z: function (a) {
          var o = -a.utcOffset(),
            n = Math.abs(o),
            i = Math.floor(n / 60),
            r = n % 60;
          return (o <= 0 ? "+" : "-") + j(i, 2, "0") + ":" + j(r, 2, "0");
        },
        m: function a(o, n) {
          if (o.date() < n.date()) return -a(n, o);
          var i = 12 * (n.year() - o.year()) + (n.month() - o.month()),
            r = o.clone().add(i, _),
            s = n - r < 0,
            c = o.clone().add(i + (s ? -1 : 1), _);
          return +(-(i + (n - r) / (s ? r - c : c - r)) || 0);
        },
        a: function (a) {
          return a < 0 ? Math.ceil(a) || 0 : Math.floor(a);
        },
        p: function (a) {
          return (
            { M: _, y: T, w: A, d: p, D: g, h: C, m: E, s: h, ms: f, Q: $ }[
              a
            ] ||
            String(a || "")
              .toLowerCase()
              .replace(/s$/, "")
          );
        },
        u: function (a) {
          return a === void 0;
        },
      },
      R = "en",
      O = {};
    O[R] = F;
    var H = "$isDayjsObject",
      k = function (a) {
        return a instanceof X || !(!a || !a[H]);
      },
      G = function a(o, n, i) {
        var r;
        if (!o) return R;
        if (typeof o == "string") {
          var s = o.toLowerCase();
          O[s] && (r = s), n && ((O[s] = n), (r = s));
          var c = o.split("-");
          if (!r && c.length > 1) return a(c[0]);
        } else {
          var l = o.name;
          (O[l] = o), (r = l);
        }
        return !i && r && (R = r), r || (!i && R);
      },
      S = function (a, o) {
        if (k(a)) return a.clone();
        var n = typeof o == "object" ? o : {};
        return (n.date = a), (n.args = arguments), new X(n);
      },
      d = U;
    (d.l = G),
      (d.i = k),
      (d.w = function (a, o) {
        return S(a, { locale: o.$L, utc: o.$u, x: o.$x, $offset: o.$offset });
      });
    var X = (function () {
        function a(n) {
          (this.$L = G(n.locale, null, !0)),
            this.parse(n),
            (this.$x = this.$x || n.x || {}),
            (this[H] = !0);
        }
        var o = a.prototype;
        return (
          (o.parse = function (n) {
            (this.$d = (function (i) {
              var r = i.date,
                s = i.utc;
              if (r === null) return new Date(NaN);
              if (d.u(r)) return new Date();
              if (r instanceof Date) return new Date(r);
              if (typeof r == "string" && !/Z$/i.test(r)) {
                var c = r.match(K);
                if (c) {
                  var l = c[2] - 1 || 0,
                    m = (c[7] || "0").substring(0, 3);
                  return s
                    ? new Date(
                        Date.UTC(
                          c[1],
                          l,
                          c[3] || 1,
                          c[4] || 0,
                          c[5] || 0,
                          c[6] || 0,
                          m
                        )
                      )
                    : new Date(
                        c[1],
                        l,
                        c[3] || 1,
                        c[4] || 0,
                        c[5] || 0,
                        c[6] || 0,
                        m
                      );
                }
              }
              return new Date(r);
            })(n)),
              this.init();
          }),
          (o.init = function () {
            var n = this.$d;
            (this.$y = n.getFullYear()),
              (this.$M = n.getMonth()),
              (this.$D = n.getDate()),
              (this.$W = n.getDay()),
              (this.$H = n.getHours()),
              (this.$m = n.getMinutes()),
              (this.$s = n.getSeconds()),
              (this.$ms = n.getMilliseconds());
          }),
          (o.$utils = function () {
            return d;
          }),
          (o.isValid = function () {
            return this.$d.toString() !== w;
          }),
          (o.isSame = function (n, i) {
            var r = S(n);
            return this.startOf(i) <= r && r <= this.endOf(i);
          }),
          (o.isAfter = function (n, i) {
            return S(n) < this.startOf(i);
          }),
          (o.isBefore = function (n, i) {
            return this.endOf(i) < S(n);
          }),
          (o.$g = function (n, i, r) {
            return d.u(n) ? this[i] : this.set(r, n);
          }),
          (o.unix = function () {
            return Math.floor(this.valueOf() / 1e3);
          }),
          (o.valueOf = function () {
            return this.$d.getTime();
          }),
          (o.startOf = function (n, i) {
            var r = this,
              s = !!d.u(i) || i,
              c = d.p(n),
              l = function (x, D) {
                var L = d.w(
                  r.$u ? Date.UTC(r.$y, D, x) : new Date(r.$y, D, x),
                  r
                );
                return s ? L : L.endOf(p);
              },
              m = function (x, D) {
                return d.w(
                  r
                    .toDate()
                    [x].apply(
                      r.toDate("s"),
                      (s ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(D)
                    ),
                  r
                );
              },
              y = this.$W,
              N = this.$M,
              M = this.$D,
              B = "set" + (this.$u ? "UTC" : "");
            switch (c) {
              case T:
                return s ? l(1, 0) : l(31, 11);
              case _:
                return s ? l(1, N) : l(0, N + 1);
              case A:
                var v = this.$locale().weekStart || 0,
                  V = (y < v ? y + 7 : y) - v;
                return l(s ? M - V : M + (6 - V), N);
              case p:
              case g:
                return m(B + "Hours", 0);
              case C:
                return m(B + "Minutes", 1);
              case E:
                return m(B + "Seconds", 2);
              case h:
                return m(B + "Milliseconds", 3);
              default:
                return this.clone();
            }
          }),
          (o.endOf = function (n) {
            return this.startOf(n, !1);
          }),
          (o.$set = function (n, i) {
            var r,
              s = d.p(n),
              c = "set" + (this.$u ? "UTC" : ""),
              l = ((r = {}),
              (r[p] = c + "Date"),
              (r[g] = c + "Date"),
              (r[_] = c + "Month"),
              (r[T] = c + "FullYear"),
              (r[C] = c + "Hours"),
              (r[E] = c + "Minutes"),
              (r[h] = c + "Seconds"),
              (r[f] = c + "Milliseconds"),
              r)[s],
              m = s === p ? this.$D + (i - this.$W) : i;
            if (s === _ || s === T) {
              var y = this.clone().set(g, 1);
              y.$d[l](m),
                y.init(),
                (this.$d = y.set(g, Math.min(this.$D, y.daysInMonth())).$d);
            } else l && this.$d[l](m);
            return this.init(), this;
          }),
          (o.set = function (n, i) {
            return this.clone().$set(n, i);
          }),
          (o.get = function (n) {
            return this[d.p(n)]();
          }),
          (o.add = function (n, i) {
            var r,
              s = this;
            n = Number(n);
            var c = d.p(i),
              l = function (N) {
                var M = S(s);
                return d.w(M.date(M.date() + Math.round(N * n)), s);
              };
            if (c === _) return this.set(_, this.$M + n);
            if (c === T) return this.set(T, this.$y + n);
            if (c === p) return l(1);
            if (c === A) return l(7);
            var m = ((r = {}), (r[E] = t), (r[C] = u), (r[h] = e), r)[c] || 1,
              y = this.$d.getTime() + n * m;
            return d.w(y, this);
          }),
          (o.subtract = function (n, i) {
            return this.add(-1 * n, i);
          }),
          (o.format = function (n) {
            var i = this,
              r = this.$locale();
            if (!this.isValid()) return r.invalidDate || w;
            var s = n || "YYYY-MM-DDTHH:mm:ssZ",
              c = d.z(this),
              l = this.$H,
              m = this.$m,
              y = this.$M,
              N = r.weekdays,
              M = r.months,
              B = r.meridiem,
              v = function (D, L, Y, q) {
                return (D && (D[L] || D(i, s))) || Y[L].slice(0, q);
              },
              V = function (D) {
                return d.s(l % 12 || 12, D, "0");
              },
              x =
                B ||
                function (D, L, Y) {
                  var q = D < 12 ? "AM" : "PM";
                  return Y ? q.toLowerCase() : q;
                };
            return s.replace(W, function (D, L) {
              return (
                L ||
                (function (Y) {
                  switch (Y) {
                    case "YY":
                      return String(i.$y).slice(-2);
                    case "YYYY":
                      return d.s(i.$y, 4, "0");
                    case "M":
                      return y + 1;
                    case "MM":
                      return d.s(y + 1, 2, "0");
                    case "MMM":
                      return v(r.monthsShort, y, M, 3);
                    case "MMMM":
                      return v(M, y);
                    case "D":
                      return i.$D;
                    case "DD":
                      return d.s(i.$D, 2, "0");
                    case "d":
                      return String(i.$W);
                    case "dd":
                      return v(r.weekdaysMin, i.$W, N, 2);
                    case "ddd":
                      return v(r.weekdaysShort, i.$W, N, 3);
                    case "dddd":
                      return N[i.$W];
                    case "H":
                      return String(l);
                    case "HH":
                      return d.s(l, 2, "0");
                    case "h":
                      return V(1);
                    case "hh":
                      return V(2);
                    case "a":
                      return x(l, m, !0);
                    case "A":
                      return x(l, m, !1);
                    case "m":
                      return String(m);
                    case "mm":
                      return d.s(m, 2, "0");
                    case "s":
                      return String(i.$s);
                    case "ss":
                      return d.s(i.$s, 2, "0");
                    case "SSS":
                      return d.s(i.$ms, 3, "0");
                    case "Z":
                      return c;
                  }
                  return null;
                })(D) ||
                c.replace(":", "")
              );
            });
          }),
          (o.utcOffset = function () {
            return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
          }),
          (o.diff = function (n, i, r) {
            var s,
              c = this,
              l = d.p(i),
              m = S(n),
              y = (m.utcOffset() - this.utcOffset()) * t,
              N = this - m,
              M = function () {
                return d.m(c, m);
              };
            switch (l) {
              case T:
                s = M() / 12;
                break;
              case _:
                s = M();
                break;
              case $:
                s = M() / 3;
                break;
              case A:
                s = (N - y) / 6048e5;
                break;
              case p:
                s = (N - y) / 864e5;
                break;
              case C:
                s = N / u;
                break;
              case E:
                s = N / t;
                break;
              case h:
                s = N / e;
                break;
              default:
                s = N;
            }
            return r ? s : d.a(s);
          }),
          (o.daysInMonth = function () {
            return this.endOf(_).$D;
          }),
          (o.$locale = function () {
            return O[this.$L];
          }),
          (o.locale = function (n, i) {
            if (!n) return this.$L;
            var r = this.clone(),
              s = G(n, i, !0);
            return s && (r.$L = s), r;
          }),
          (o.clone = function () {
            return d.w(this.$d, this);
          }),
          (o.toDate = function () {
            return new Date(this.valueOf());
          }),
          (o.toJSON = function () {
            return this.isValid() ? this.toISOString() : null;
          }),
          (o.toISOString = function () {
            return this.$d.toISOString();
          }),
          (o.toString = function () {
            return this.$d.toUTCString();
          }),
          a
        );
      })(),
      de = X.prototype;
    return (
      (S.prototype = de),
      [
        ["$ms", f],
        ["$s", h],
        ["$m", E],
        ["$H", C],
        ["$W", p],
        ["$M", _],
        ["$y", T],
        ["$D", g],
      ].forEach(function (a) {
        de[a[1]] = function (o) {
          return this.$g(o, a[0], a[1]);
        };
      }),
      (S.extend = function (a, o) {
        return a.$i || (a(o, X, S), (a.$i = !0)), S;
      }),
      (S.locale = G),
      (S.isDayjs = k),
      (S.unix = function (a) {
        return S(1e3 * a);
      }),
      (S.en = O[R]),
      (S.Ls = O),
      (S.p = {}),
      S
    );
  });
});
var Ee = z((ne, re) => {
  "use strict";
  (function (e, t) {
    typeof ne == "object" && typeof re < "u"
      ? (re.exports = t())
      : typeof define == "function" && define.amd
      ? define(t)
      : ((e =
          typeof globalThis < "u" ? globalThis : e || self).dayjs_locale_en =
          t());
  })(ne, function () {
    "use strict";
    return {
      name: "en",
      weekdays:
        "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
      months:
        "January_February_March_April_May_June_July_August_September_October_November_December".split(
          "_"
        ),
      ordinal: function (e) {
        var t = ["th", "st", "nd", "rd"],
          u = e % 100;
        return "[" + e + (t[(u - 20) % 10] || t[u] || t[0]) + "]";
      },
    };
  });
});
var me = z((oe, ie) => {
  "use strict";
  (function (e, t) {
    typeof oe == "object" && typeof ie < "u"
      ? (ie.exports = t())
      : typeof define == "function" && define.amd
      ? define(t)
      : ((e =
          typeof globalThis < "u"
            ? globalThis
            : e || self).dayjs_plugin_relativeTime = t());
  })(oe, function () {
    "use strict";
    return function (e, t, u) {
      e = e || {};
      var f = t.prototype,
        h = {
          future: "in %s",
          past: "%s ago",
          s: "a few seconds",
          m: "a minute",
          mm: "%d minutes",
          h: "an hour",
          hh: "%d hours",
          d: "a day",
          dd: "%d days",
          M: "a month",
          MM: "%d months",
          y: "a year",
          yy: "%d years",
        };
      function E(p, A, _, $) {
        return f.fromToBase(p, A, _, $);
      }
      (u.en.relativeTime = h),
        (f.fromToBase = function (p, A, _, $, T) {
          for (
            var g,
              w,
              K,
              W = _.$locale().relativeTime || h,
              F = e.thresholds || [
                { l: "s", r: 44, d: "second" },
                { l: "m", r: 89 },
                { l: "mm", r: 44, d: "minute" },
                { l: "h", r: 89 },
                { l: "hh", r: 21, d: "hour" },
                { l: "d", r: 35 },
                { l: "dd", r: 25, d: "day" },
                { l: "M", r: 45 },
                { l: "MM", r: 10, d: "month" },
                { l: "y", r: 17 },
                { l: "yy", d: "year" },
              ],
              j = F.length,
              U = 0;
            U < j;
            U += 1
          ) {
            var R = F[U];
            R.d && (g = $ ? u(p).diff(_, R.d, !0) : _.diff(p, R.d, !0));
            var O = (e.rounding || Math.round)(Math.abs(g));
            if (((K = g > 0), O <= R.r || !R.r)) {
              O <= 1 && U > 0 && (R = F[U - 1]);
              var H = W[R.l];
              T && (O = T("" + O)),
                (w =
                  typeof H == "string" ? H.replace("%d", O) : H(O, A, R.l, K));
              break;
            }
          }
          if (A) return w;
          var k = K ? W.future : W.past;
          return typeof k == "function" ? k(w) : k.replace("%s", w);
        }),
        (f.to = function (p, A) {
          return E(p, A, this, !0);
        }),
        (f.from = function (p, A) {
          return E(p, A, this);
        });
      var C = function (p) {
        return p.$u ? u.utc() : u();
      };
      (f.toNow = function (p) {
        return this.to(C(this), p);
      }),
        (f.fromNow = function (p) {
          return this.from(C(this), p);
        });
    };
  });
});
var he = z((ae, se) => {
  "use strict";
  (function (e, t) {
    typeof ae == "object" && typeof se < "u"
      ? (se.exports = t())
      : typeof define == "function" && define.amd
      ? define(t)
      : ((e =
          typeof globalThis < "u"
            ? globalThis
            : e || self).dayjs_plugin_updateLocale = t());
  })(ae, function () {
    "use strict";
    return function (e, t, u) {
      u.updateLocale = function (f, h) {
        var E = u.Ls[f];
        if (E)
          return (
            (h ? Object.keys(h) : []).forEach(function (C) {
              E[C] = h[C];
            }),
            E
          );
      };
    };
  });
});
var J = {
  WC_NAME_SUFFIX: ".reown.id",
  WC_NAME_SUFFIX_LEGACY: ".wcn.id",
  BLOCKCHAIN_API_RPC_URL: "https://rpc.walletconnect.org",
  PULSE_API_URL: "https://pulse.walletconnect.org",
  W3M_API_URL: "https://api.web3modal.org",
  CONNECTOR_ID: {
    WALLET_CONNECT: "walletConnect",
    INJECTED: "injected",
    WALLET_STANDARD: "announced",
    COINBASE: "coinbaseWallet",
    COINBASE_SDK: "coinbaseWalletSDK",
    BASE_ACCOUNT: "baseAccount",
    SAFE: "safe",
    LEDGER: "ledger",
    OKX: "okx",
    EIP6963: "eip6963",
    AUTH: "AUTH",
  },
  CONNECTOR_NAMES: { AUTH: "Auth" },
  AUTH_CONNECTOR_SUPPORTED_CHAINS: ["eip155", "solana"],
  LIMITS: { PENDING_TRANSACTIONS: 99 },
  CHAIN: {
    EVM: "eip155",
    SOLANA: "solana",
    POLKADOT: "polkadot",
    BITCOIN: "bip122",
  },
  CHAIN_NAME_MAP: {
    eip155: "EVM Networks",
    solana: "Solana",
    polkadot: "Polkadot",
    bip122: "Bitcoin",
    cosmos: "Cosmos",
    sui: "Sui",
    stacks: "Stacks",
  },
  ADAPTER_TYPES: {
    BITCOIN: "bitcoin",
    SOLANA: "solana",
    WAGMI: "wagmi",
    ETHERS: "ethers",
    ETHERS5: "ethers5",
  },
  USDT_CONTRACT_ADDRESSES: [
    "0xdac17f958d2ee523a2206206994597c13d831ec7",
    "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
    "0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7",
    "0x919C1c267BC06a7039e03fcc2eF738525769109c",
    "0x48065fbBE25f71C9282ddf5e1cD6D6A887483D5e",
    "0x55d398326f99059fF775485246999027B3197955",
    "0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9",
  ],
  SOLANA_SPL_TOKEN_ADDRESSES: {
    SOL: "So11111111111111111111111111111111111111112",
  },
  HTTP_STATUS_CODES: {
    SERVER_ERROR: 500,
    TOO_MANY_REQUESTS: 429,
    SERVICE_UNAVAILABLE: 503,
    FORBIDDEN: 403,
  },
  UNSUPPORTED_NETWORK_NAME: "Unknown Network",
  SECURE_SITE_SDK_ORIGIN:
    (typeof process < "u" && typeof process.env < "u"
      ? process.env.NEXT_PUBLIC_SECURE_SITE_ORIGIN
      : void 0) || "https://secure.walletconnect.org",
  REMOTE_FEATURES_ALERTS: {
    MULTI_WALLET_NOT_ENABLED: {
      DEFAULT: {
        displayMessage: "Multi-Wallet Not Enabled",
        debugMessage:
          "Multi-wallet support is not enabled. Please enable it in your AppKit configuration at cloud.reown.com.",
      },
      CONNECTIONS_HOOK: {
        displayMessage: "Multi-Wallet Not Enabled",
        debugMessage:
          "Multi-wallet support is not enabled. Please enable it in your AppKit configuration at cloud.reown.com to use the useAppKitConnections hook.",
      },
      CONNECTION_HOOK: {
        displayMessage: "Multi-Wallet Not Enabled",
        debugMessage:
          "Multi-wallet support is not enabled. Please enable it in your AppKit configuration at cloud.reown.com to use the useAppKitConnection hook.",
      },
    },
  },
  IS_DEVELOPMENT: typeof process < "u" && !1,
  DEFAULT_ALLOWED_ANCESTORS: [
    "http://localhost:*",
    "https://localhost:*",
    "http://127.0.0.1:*",
    "https://127.0.0.1:*",
    "https://*.pages.dev",
    "https://*.vercel.app",
    "https://*.ngrok-free.app",
    "https://secure-mobile.walletconnect.com",
    "https://secure-mobile.walletconnect.org",
  ],
};
var Te = {
    caipNetworkIdToNumber(e) {
      return e ? Number(e.split(":")[1]) : void 0;
    },
    parseEvmChainId(e) {
      return typeof e == "string" ? this.caipNetworkIdToNumber(e) : e;
    },
    getNetworksByNamespace(e, t) {
      return e?.filter((u) => u.chainNamespace === t) || [];
    },
    getFirstNetworkByNamespace(e, t) {
      return this.getNetworksByNamespace(e, t)[0];
    },
    getNetworkNameByCaipNetworkId(e, t) {
      if (!t) return;
      let u = e.find((h) => h.caipNetworkId === t);
      if (u) return u.name;
      let [f] = t.split(":");
      return J.CHAIN_NAME_MAP?.[f] || void 0;
    },
  },
  ge = ["eip155", "solana", "polkadot", "bip122", "cosmos", "sui", "stacks"];
var P = Z(pe(), 1),
  _e = Z(Ee(), 1),
  Se = Z(me(), 1),
  ye = Z(he(), 1);
P.default.extend(Se.default);
P.default.extend(ye.default);
var Re = le(fe({}, _e.default), {
    name: "en-web3-modal",
    relativeTime: {
      future: "in %s",
      past: "%s ago",
      s: "%d sec",
      m: "1 min",
      mm: "%d min",
      h: "1 hr",
      hh: "%d hrs",
      d: "1 d",
      dd: "%d d",
      M: "1 mo",
      MM: "%d mo",
      y: "1 yr",
      yy: "%d yr",
    },
  }),
  Oe = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
P.default.locale("en-web3-modal", Re);
var De = {
  getMonthNameByIndex(e) {
    return Oe[e];
  },
  getYear(e = new Date().toISOString()) {
    return (0, P.default)(e).year();
  },
  getRelativeDateFromNow(e) {
    return (0, P.default)(e).locale("en-web3-modal").fromNow(!0);
  },
  formatDate(e, t = "DD MMM") {
    return (0, P.default)(e).format(t);
  },
};
var Me = {
  bigNumber(e) {
    return e ? new b(e) : new b(0);
  },
  multiply(e, t) {
    if (e === void 0 || t === void 0) return new b(0);
    let u = new b(e),
      f = new b(t);
    return u.times(f);
  },
  toFixed(e, t = 2) {
    return e === void 0 || e === "" ? new b(0).toFixed(t) : new b(e).toFixed(t);
  },
  formatNumberToLocalString(e, t = 2) {
    return e === void 0 || e === ""
      ? "0.00"
      : typeof e == "number"
      ? e.toLocaleString("en-US", {
          maximumFractionDigits: t,
          minimumFractionDigits: t,
          roundingMode: "floor",
        })
      : parseFloat(e).toLocaleString("en-US", {
          maximumFractionDigits: t,
          minimumFractionDigits: t,
          roundingMode: "floor",
        });
  },
  parseLocalStringToNumber(e) {
    if (e === void 0 || e === "") return 0;
    let t = e.replace(/,/gu, "");
    return new b(t).toNumber();
  },
};
var we = {
  numericInputKeyDown(e, t, u) {
    let f = [
        "Backspace",
        "Meta",
        "Ctrl",
        "a",
        "A",
        "c",
        "C",
        "x",
        "X",
        "v",
        "V",
        "ArrowLeft",
        "ArrowRight",
        "Tab",
      ],
      h = e.metaKey || e.ctrlKey,
      E = e.key,
      C = E.toLocaleLowerCase(),
      p = C === "a",
      A = C === "c",
      _ = C === "v",
      $ = C === "x",
      T = E === ",",
      g = E === ".",
      w = E >= "0" && E <= "9";
    !h && (p || A || _ || $) && e.preventDefault(),
      t === "0" && !T && !g && E === "0" && e.preventDefault(),
      t === "0" && w && (u(E), e.preventDefault()),
      (T || g) &&
        (t || (u("0."), e.preventDefault()),
        (t?.includes(".") || t?.includes(",")) && e.preventDefault()),
      !w && !f.includes(E) && !g && !T && e.preventDefault();
  },
};
var Ce = [
  {
    type: "function",
    name: "transfer",
    stateMutability: "nonpayable",
    inputs: [
      { name: "_to", type: "address" },
      { name: "_value", type: "uint256" },
    ],
    outputs: [{ name: "", type: "bool" }],
  },
  {
    type: "function",
    name: "transferFrom",
    stateMutability: "nonpayable",
    inputs: [
      { name: "_from", type: "address" },
      { name: "_to", type: "address" },
      { name: "_value", type: "uint256" },
    ],
    outputs: [{ name: "", type: "bool" }],
  },
];
var Ne = [
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
];
var Ae = [
  {
    type: "function",
    name: "transfer",
    stateMutability: "nonpayable",
    inputs: [
      { name: "recipient", type: "address" },
      { name: "amount", type: "uint256" },
    ],
    outputs: [],
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
    outputs: [{ name: "", type: "bool" }],
  },
];
var be = {
  getERC20Abi: (e) => (J.USDT_CONTRACT_ADDRESSES.includes(e) ? Ae : Ce),
  getSwapAbi: () => Ne,
};
var Ie = { URLS: { FAQ: "https://walletconnect.com/faq" } };
var $e = {
  validateCaipAddress(e) {
    if (e.split(":")?.length !== 3) throw new Error("Invalid CAIP Address");
    return e;
  },
  parseCaipAddress(e) {
    let t = e.split(":");
    if (t.length !== 3) throw new Error(`Invalid CAIP-10 address: ${e}`);
    let [u, f, h] = t;
    if (!u || !f || !h) throw new Error(`Invalid CAIP-10 address: ${e}`);
    return { chainNamespace: u, chainId: f, address: h };
  },
  parseCaipNetworkId(e) {
    let t = e.split(":");
    if (t.length !== 2) throw new Error(`Invalid CAIP-2 network id: ${e}`);
    let [u, f] = t;
    if (!u || !f) throw new Error(`Invalid CAIP-2 network id: ${e}`);
    return { chainNamespace: u, chainId: f };
  },
};
var I = {
    RPC_ERROR_CODE: {
      USER_REJECTED_REQUEST: 4001,
      USER_REJECTED_METHODS: 5002,
      USER_REJECTED: 5e3,
    },
    PROVIDER_RPC_ERROR_NAME: {
      PROVIDER_RPC: "ProviderRpcError",
      USER_REJECTED_REQUEST: "UserRejectedRequestError",
    },
    isRpcProviderError(e) {
      try {
        if (typeof e == "object" && e !== null) {
          let t = e,
            u = typeof t.message == "string",
            f = typeof t.code == "number";
          return u && f;
        }
        return !1;
      } catch {
        return !1;
      }
    },
    isUserRejectedMessage(e) {
      return (
        e.toLowerCase().includes("user rejected") ||
        e.toLowerCase().includes("user cancelled") ||
        e.toLowerCase().includes("user canceled")
      );
    },
    isUserRejectedRequestError(e) {
      if (I.isRpcProviderError(e)) {
        let t = e.code === I.RPC_ERROR_CODE.USER_REJECTED_REQUEST,
          u = e.code === I.RPC_ERROR_CODE.USER_REJECTED_METHODS;
        return t || u || I.isUserRejectedMessage(e.message);
      }
      return e instanceof Error ? I.isUserRejectedMessage(e.message) : !1;
    },
  },
  ce = class extends Error {
    constructor(t, u) {
      super(u.message, { cause: t }),
        (this.name = I.PROVIDER_RPC_ERROR_NAME.PROVIDER_RPC),
        (this.code = u.code);
    }
  },
  ue = class extends ce {
    constructor(t) {
      super(t, {
        code: I.RPC_ERROR_CODE.USER_REJECTED_REQUEST,
        message: "User rejected the request",
      }),
        (this.name = I.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST);
    }
  };
var Le = {
  WALLET_ID: "@appkit/wallet_id",
  WALLET_NAME: "@appkit/wallet_name",
  SOLANA_WALLET: "@appkit/solana_wallet",
  SOLANA_CAIP_CHAIN: "@appkit/solana_caip_chain",
  ACTIVE_CAIP_NETWORK_ID: "@appkit/active_caip_network_id",
  CONNECTED_SOCIAL: "@appkit/connected_social",
  CONNECTED_SOCIAL_USERNAME: "@appkit-wallet/SOCIAL_USERNAME",
  RECENT_WALLETS: "@appkit/recent_wallets",
  RECENT_WALLET: "@appkit/recent_wallet",
  DEEPLINK_CHOICE: "WALLETCONNECT_DEEPLINK_CHOICE",
  ACTIVE_NAMESPACE: "@appkit/active_namespace",
  CONNECTED_NAMESPACES: "@appkit/connected_namespaces",
  CONNECTION_STATUS: "@appkit/connection_status",
  SIWX_AUTH_TOKEN: "@appkit/siwx-auth-token",
  SIWX_NONCE_TOKEN: "@appkit/siwx-nonce-token",
  TELEGRAM_SOCIAL_PROVIDER: "@appkit/social_provider",
  NATIVE_BALANCE_CACHE: "@appkit/native_balance_cache",
  PORTFOLIO_CACHE: "@appkit/portfolio_cache",
  ENS_CACHE: "@appkit/ens_cache",
  IDENTITY_CACHE: "@appkit/identity_cache",
  PREFERRED_ACCOUNT_TYPES: "@appkit/preferred_account_types",
  CONNECTIONS: "@appkit/connections",
  DISCONNECTED_CONNECTOR_IDS: "@appkit/disconnected_connector_ids",
  HISTORY_TRANSACTIONS_CACHE: "@appkit/history_transactions_cache",
  TOKEN_PRICE_CACHE: "@appkit/token_price_cache",
  RECENT_EMAILS: "@appkit/recent_emails",
  LATEST_APPKIT_VERSION: "@appkit/latest_version",
};
function Ue(e) {
  if (!e) throw new Error("Namespace is required for CONNECTED_CONNECTOR_ID");
  return `@appkit/${e}:connected_connector_id`;
}
var ke = {
  setItem(e, t) {
    Q() && t !== void 0 && localStorage.setItem(e, t);
  },
  getItem(e) {
    if (Q()) return localStorage.getItem(e) || void 0;
  },
  removeItem(e) {
    Q() && localStorage.removeItem(e);
  },
  clear() {
    Q() && localStorage.clear();
  },
};
function Q() {
  return typeof window < "u" && typeof localStorage < "u";
}
function ve(e, t) {
  return t === "light"
    ? {
        "--w3m-accent": e?.["--w3m-accent"] || "hsla(231, 100%, 70%, 1)",
        "--w3m-background": "#fff",
      }
    : {
        "--w3m-accent": e?.["--w3m-accent"] || "hsla(230, 100%, 67%, 1)",
        "--w3m-background": "#202020",
      };
}
export {
  De as a,
  J as b,
  Te as c,
  ge as d,
  Me as e,
  we as f,
  be as g,
  Ie as h,
  $e as i,
  I as j,
  ue as k,
  Le as l,
  Ue as m,
  ke as n,
  Q as o,
  ve as p,
};
