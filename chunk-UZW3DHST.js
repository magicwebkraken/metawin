import "./chunk-6RGSKFH5.js";
import { a as Ti } from "./chunk-NA52I5QA.js";
import { a as Tr, b as Ir } from "./chunk-B2ZBL5RP.js";
import "./chunk-AP76W5FI.js";
import { a as Ne, b as le } from "./chunk-BD3I2RUR.js";
import "./chunk-FQO3JUI7.js";
import { a as nt } from "./chunk-PHY5CPHD.js";
import "./chunk-ZTBOMBCC.js";
import "./chunk-FN2M7AVB.js";
import "./chunk-O63J7XX2.js";
import { a as Si, c as H, d as ki, g as Ai } from "./chunk-T7KGZUCO.js";
import "./chunk-IOND7EUH.js";
import "./chunk-QOIJJ4ZM.js";
import "./chunk-GECKKE5G.js";
import "./chunk-YFNUF7IY.js";
import "./chunk-NNU4UVC3.js";
import "./chunk-WQKAD4I3.js";
import { a as Ri } from "./chunk-WCDRTLU2.js";
import "./chunk-ABP3XAKE.js";
import "./chunk-FZGALCYZ.js";
import "./chunk-U2G6ATPK.js";
import "./chunk-GFD7SYVL.js";
import "./chunk-U6ZKVCN2.js";
import "./chunk-QAXHCUZ6.js";
import "./chunk-5WTFWRCP.js";
import "./chunk-KN4OYG24.js";
import "./chunk-4UPKCKPZ.js";
import "./chunk-TA7UPVQ7.js";
import "./chunk-ZM5O5AWK.js";
import "./chunk-SNQKIAY2.js";
import "./chunk-JEWQBEMQ.js";
import { a as ot, b as rt } from "./chunk-O4NP5LYX.js";
import "./chunk-RI24VZ65.js";
import "./chunk-P3SVY5YN.js";
import "./chunk-TCZHDFJ2.js";
import "./chunk-ZUPMI3QZ.js";
import "./chunk-PMNBX4ZJ.js";
import { a as f } from "./chunk-NZR2LZWU.js";
import "./chunk-7TZWJ67Q.js";
import { a as c, b as p, h as Ot } from "./chunk-ISXP6GOO.js";
import {
  a as it,
  c as g,
  g as v,
  h as T,
  i as P,
  k as d,
} from "./chunk-L4ZNINEC.js";
import { b as N, e as l, k as m } from "./chunk-ICDT4GZS.js";
import { f as yt, h as Nt, k as tt, n as V } from "./chunk-HK6N7TS4.js";
import "./chunk-TXWSAHNN.js";
import "./chunk-H4BANHQJ.js";
import "./chunk-IV5FR2YO.js";
import "./chunk-TSLWMKS5.js";
import {
  A as x,
  G as $i,
  H as u,
  I as Ei,
  J as O,
  c as W,
  d as ie,
  e as w,
  f as U,
  h as vi,
  j as b,
  k as I,
  m as et,
  o as oe,
  p as k,
  q as C,
  r as E,
  s as h,
  t as gt,
  u as y,
  w as Y,
  y as ve,
} from "./chunk-U7GUEFJZ.js";
import "./chunk-GBTQH4B2.js";
import { b as $, h as xi, i as Ci, j as Ze } from "./chunk-2K64HG7Q.js";
import "./chunk-LZ4YD47P.js";
import "./chunk-QSWUHUZZ.js";
import "./chunk-IYKVXYEM.js";
import "./chunk-CP2O2YAF.js";
import "./chunk-ZRBE6OMV.js";
import "./chunk-Z3SE2D4B.js";
import "./chunk-5LQ6A2AX.js";
import "./chunk-5G3DVQVW.js";
import "./chunk-HINDXNTT.js";
import "./chunk-X3F4NDXO.js";
import "./chunk-JKZLGYQN.js";
import "./chunk-EEU3LH2V.js";
import "./chunk-TRLFM7P4.js";
import "./chunk-QMRWXCSQ.js";
import { a as Je, b as ii, n as R } from "./chunk-VNDKUXGB.js";
var Ii = g`
  :host {
    display: block;
  }

  button {
    border-radius: ${({ borderRadius: t }) => t[20]};
    background: ${({ tokens: t }) => t.theme.foregroundPrimary};
    display: flex;
    gap: ${({ spacing: t }) => t[1]};
    padding: ${({ spacing: t }) => t[1]};
    color: ${({ tokens: t }) => t.theme.textSecondary};
    border-radius: ${({ borderRadius: t }) => t[16]};
    height: 32px;
    transition: box-shadow ${({ durations: t }) => t.lg}
      ${({ easings: t }) => t["ease-out-power-2"]};
    will-change: box-shadow;
  }

  button wui-flex.avatar-container {
    width: 28px;
    height: 24px;
    position: relative;

    wui-flex.network-image-container {
      position: absolute;
      bottom: 0px;
      right: 0px;
      width: 12px;
      height: 12px;
    }

    wui-flex.network-image-container wui-icon {
      background: ${({ tokens: t }) => t.theme.foregroundPrimary};
    }

    wui-avatar {
      width: 24px;
      min-width: 24px;
      height: 24px;
    }

    wui-icon {
      width: 12px;
      height: 12px;
    }
  }

  wui-image,
  wui-icon {
    border-radius: ${({ borderRadius: t }) => t[16]};
  }

  wui-text {
    white-space: nowrap;
  }

  button wui-flex.balance-container {
    height: 100%;
    border-radius: ${({ borderRadius: t }) => t[16]};
    padding-left: ${({ spacing: t }) => t[1]};
    padding-right: ${({ spacing: t }) => t[1]};
    background: ${({ tokens: t }) => t.theme.foregroundSecondary};
    color: ${({ tokens: t }) => t.theme.textPrimary};
    transition: background-color ${({ durations: t }) => t.lg}
      ${({ easings: t }) => t["ease-out-power-2"]};
    will-change: background-color;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  button:hover:enabled,
  button:focus-visible:enabled,
  button:active:enabled {
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.2);

    wui-flex.balance-container {
      background: ${({ tokens: t }) => t.theme.foregroundTertiary};
    }
  }

  /* -- Disabled states --------------------------------------------------- */
  button:disabled wui-text,
  button:disabled wui-flex.avatar-container {
    opacity: 0.3;
  }
`;
var we = function (t, e, i, r) {
    var n = arguments.length,
      o =
        n < 3
          ? e
          : r === null
          ? (r = Object.getOwnPropertyDescriptor(e, i))
          : r,
      s;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      o = Reflect.decorate(t, e, i, r);
    else
      for (var a = t.length - 1; a >= 0; a--)
        (s = t[a]) && (o = (n < 3 ? s(o) : n > 3 ? s(e, i, o) : s(e, i)) || o);
    return n > 3 && o && Object.defineProperty(e, i, o), o;
  },
  re = class extends m {
    constructor() {
      super(...arguments),
        (this.networkSrc = void 0),
        (this.avatarSrc = void 0),
        (this.balance = void 0),
        (this.isUnsupportedChain = void 0),
        (this.disabled = !1),
        (this.loading = !1),
        (this.address = ""),
        (this.profileName = ""),
        (this.charsStart = 4),
        (this.charsEnd = 6);
    }
    render() {
      return l`
      <button
        ?disabled=${this.disabled}
        class=${f(this.balance ? void 0 : "local-no-balance")}
        data-error=${f(this.isUnsupportedChain)}
      >
        ${this.imageTemplate()} ${this.addressTemplate()} ${this.balanceTemplate()}
      </button>
    `;
    }
    imageTemplate() {
      let e = this.networkSrc
        ? l`<wui-image src=${this.networkSrc}></wui-image>`
        : l` <wui-icon size="inherit" color="inherit" name="networkPlaceholder"></wui-icon> `;
      return l`<wui-flex class="avatar-container">
      <wui-avatar
        .imageSrc=${this.avatarSrc}
        alt=${this.address}
        address=${this.address}
      ></wui-avatar>

      <wui-flex class="network-image-container">${e}</wui-flex>
    </wui-flex>`;
    }
    addressTemplate() {
      return l`<wui-text variant="md-regular" color="inherit">
      ${
        this.address
          ? P.getTruncateString({
              string: this.profileName || this.address,
              charsStart: this.profileName ? 18 : this.charsStart,
              charsEnd: this.profileName ? 0 : this.charsEnd,
              truncate: this.profileName ? "end" : "middle",
            })
          : null
      }
    </wui-text>`;
    }
    balanceTemplate() {
      if (this.balance) {
        let e = this.loading
          ? l`<wui-loading-spinner size="md" color="inherit"></wui-loading-spinner>`
          : l`<wui-text variant="md-regular" color="inherit"> ${this.balance}</wui-text>`;
        return l`<wui-flex alignItems="center" justifyContent="center" class="balance-container"
        >${e}</wui-flex
      >`;
      }
      return null;
    }
  };
re.styles = [v, T, Ii];
we([c()], re.prototype, "networkSrc", void 0);
we([c()], re.prototype, "avatarSrc", void 0);
we([c()], re.prototype, "balance", void 0);
we([c({ type: Boolean })], re.prototype, "isUnsupportedChain", void 0);
we([c({ type: Boolean })], re.prototype, "disabled", void 0);
we([c({ type: Boolean })], re.prototype, "loading", void 0);
we([c()], re.prototype, "address", void 0);
we([c()], re.prototype, "profileName", void 0);
we([c()], re.prototype, "charsStart", void 0);
we([c()], re.prototype, "charsEnd", void 0);
re = we([d("wui-account-button")], re);
var K = function (t, e, i, r) {
    var n = arguments.length,
      o =
        n < 3
          ? e
          : r === null
          ? (r = Object.getOwnPropertyDescriptor(e, i))
          : r,
      s;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      o = Reflect.decorate(t, e, i, r);
    else
      for (var a = t.length - 1; a >= 0; a--)
        (s = t[a]) && (o = (n < 3 ? s(o) : n > 3 ? s(e, i, o) : s(e, i)) || o);
    return n > 3 && o && Object.defineProperty(e, i, o), o;
  },
  j = class extends m {
    constructor() {
      super(...arguments),
        (this.unsubscribe = []),
        (this.disabled = !1),
        (this.balance = "show"),
        (this.charsStart = 4),
        (this.charsEnd = 6),
        (this.namespace = void 0),
        (this.isSupported = b.state.allowUnsupportedChain
          ? !0
          : u.state.activeChain
          ? u.checkIfSupportedNetwork(u.state.activeChain)
          : !0);
    }
    connectedCallback() {
      super.connectedCallback(),
        this.setAccountData(u.getAccountData(this.namespace)),
        this.setNetworkData(u.getNetworkData(this.namespace));
    }
    firstUpdated() {
      let e = this.namespace;
      e
        ? this.unsubscribe.push(
            u.subscribeChainProp(
              "accountState",
              (i) => {
                this.setAccountData(i);
              },
              e
            ),
            u.subscribeChainProp(
              "networkState",
              (i) => {
                this.setNetworkData(i),
                  (this.isSupported = u.checkIfSupportedNetwork(
                    e,
                    i?.caipNetwork?.caipNetworkId
                  ));
              },
              e
            )
          )
        : this.unsubscribe.push(
            oe.subscribeNetworkImages(() => {
              this.networkImage = k.getNetworkImage(this.network);
            }),
            u.subscribeKey("activeCaipAddress", (i) => {
              this.caipAddress = i;
            }),
            u.subscribeChainProp("accountState", (i) => {
              this.setAccountData(i);
            }),
            u.subscribeKey("activeCaipNetwork", (i) => {
              (this.network = i),
                (this.networkImage = k.getNetworkImage(i)),
                (this.isSupported = i?.chainNamespace
                  ? u.checkIfSupportedNetwork(i?.chainNamespace)
                  : !0),
                this.fetchNetworkImage(i);
            })
          );
    }
    updated() {
      this.fetchNetworkImage(this.network);
    }
    disconnectedCallback() {
      this.unsubscribe.forEach((e) => e());
    }
    render() {
      if (!u.state.activeChain) return null;
      let e = this.balance === "show",
        i = typeof this.balanceVal != "string",
        { formattedText: r } = w.parseBalance(
          this.balanceVal,
          this.balanceSymbol
        );
      return l`
      <wui-account-button
        .disabled=${!!this.disabled}
        .isUnsupportedChain=${
          b.state.allowUnsupportedChain ? !1 : !this.isSupported
        }
        address=${f(w.getPlainAddress(this.caipAddress))}
        profileName=${f(this.profileName)}
        networkSrc=${f(this.networkImage)}
        avatarSrc=${f(this.profileImage)}
        balance=${e ? r : ""}
        @click=${this.onClick.bind(this)}
        data-testid=${`account-button${
          this.namespace ? `-${this.namespace}` : ""
        }`}
        .charsStart=${this.charsStart}
        .charsEnd=${this.charsEnd}
        ?loading=${i}
      >
      </wui-account-button>
    `;
    }
    onClick() {
      this.isSupported || b.state.allowUnsupportedChain
        ? O.open({ namespace: this.namespace })
        : O.open({ view: "UnsupportedChain" });
    }
    fetchNetworkImage(e) {
      return R(this, null, function* () {
        e?.assets?.imageId &&
          (this.networkImage = yield k.fetchNetworkImage(e?.assets?.imageId));
      });
    }
    setAccountData(e) {
      e &&
        ((this.caipAddress = e.caipAddress),
        (this.balanceVal = e.balance),
        (this.balanceSymbol = e.balanceSymbol),
        (this.profileName = e.profileName),
        (this.profileImage = e.profileImage));
    }
    setNetworkData(e) {
      e &&
        ((this.network = e.caipNetwork),
        (this.networkImage = k.getNetworkImage(e.caipNetwork)));
    }
  };
K([c({ type: Boolean })], j.prototype, "disabled", void 0);
K([c()], j.prototype, "balance", void 0);
K([c()], j.prototype, "charsStart", void 0);
K([c()], j.prototype, "charsEnd", void 0);
K([c()], j.prototype, "namespace", void 0);
K([p()], j.prototype, "caipAddress", void 0);
K([p()], j.prototype, "balanceVal", void 0);
K([p()], j.prototype, "balanceSymbol", void 0);
K([p()], j.prototype, "profileName", void 0);
K([p()], j.prototype, "profileImage", void 0);
K([p()], j.prototype, "network", void 0);
K([p()], j.prototype, "networkImage", void 0);
K([p()], j.prototype, "isSupported", void 0);
var _i = class extends j {};
_i = K([d("w3m-account-button")], _i);
var Wi = class extends j {};
Wi = K([d("appkit-account-button")], Wi);
var Ni = N`
  :host {
    display: block;
    width: max-content;
  }
`;
var be = function (t, e, i, r) {
    var n = arguments.length,
      o =
        n < 3
          ? e
          : r === null
          ? (r = Object.getOwnPropertyDescriptor(e, i))
          : r,
      s;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      o = Reflect.decorate(t, e, i, r);
    else
      for (var a = t.length - 1; a >= 0; a--)
        (s = t[a]) && (o = (n < 3 ? s(o) : n > 3 ? s(e, i, o) : s(e, i)) || o);
    return n > 3 && o && Object.defineProperty(e, i, o), o;
  },
  X = class extends m {
    constructor() {
      super(...arguments),
        (this.unsubscribe = []),
        (this.disabled = !1),
        (this.balance = void 0),
        (this.size = void 0),
        (this.label = void 0),
        (this.loadingLabel = void 0),
        (this.charsStart = 4),
        (this.charsEnd = 6),
        (this.namespace = void 0);
    }
    firstUpdated() {
      (this.caipAddress = this.namespace
        ? u.getAccountData(this.namespace)?.caipAddress
        : u.state.activeCaipAddress),
        this.namespace
          ? this.unsubscribe.push(
              u.subscribeChainProp(
                "accountState",
                (e) => {
                  this.caipAddress = e?.caipAddress;
                },
                this.namespace
              )
            )
          : this.unsubscribe.push(
              u.subscribeKey("activeCaipAddress", (e) => (this.caipAddress = e))
            );
    }
    disconnectedCallback() {
      this.unsubscribe.forEach((e) => e());
    }
    render() {
      return this.caipAddress
        ? l`
          <appkit-account-button
            .disabled=${!!this.disabled}
            balance=${f(this.balance)}
            .charsStart=${f(this.charsStart)}
            .charsEnd=${f(this.charsEnd)}
            namespace=${f(this.namespace)}
          >
          </appkit-account-button>
        `
        : l`
          <appkit-connect-button
            size=${f(this.size)}
            label=${f(this.label)}
            loadingLabel=${f(this.loadingLabel)}
            namespace=${f(this.namespace)}
          ></appkit-connect-button>
        `;
    }
  };
X.styles = Ni;
be([c({ type: Boolean })], X.prototype, "disabled", void 0);
be([c()], X.prototype, "balance", void 0);
be([c()], X.prototype, "size", void 0);
be([c()], X.prototype, "label", void 0);
be([c()], X.prototype, "loadingLabel", void 0);
be([c()], X.prototype, "charsStart", void 0);
be([c()], X.prototype, "charsEnd", void 0);
be([c()], X.prototype, "namespace", void 0);
be([p()], X.prototype, "caipAddress", void 0);
var Oi = class extends X {};
Oi = be([d("w3m-button")], Oi);
var Pi = class extends X {};
Pi = be([d("appkit-button")], Pi);
var Li = g`
  :host {
    position: relative;
    display: block;
  }

  button {
    border-radius: ${({ borderRadius: t }) => t[2]};
  }

  button[data-size='sm'] {
    padding: ${({ spacing: t }) => t[2]};
  }

  button[data-size='md'] {
    padding: ${({ spacing: t }) => t[3]};
  }

  button[data-size='lg'] {
    padding: ${({ spacing: t }) => t[4]};
  }

  button[data-variant='primary'] {
    background: ${({ tokens: t }) => t.core.backgroundAccentPrimary};
  }

  button[data-variant='secondary'] {
    background: ${({ tokens: t }) => t.core.foregroundAccent010};
  }

  button:hover:enabled {
    border-radius: ${({ borderRadius: t }) => t[3]};
  }

  button:disabled {
    cursor: not-allowed;
  }

  button[data-loading='true'] {
    cursor: not-allowed;
  }

  button[data-loading='true'][data-size='sm'] {
    border-radius: ${({ borderRadius: t }) => t[32]};
    padding: ${({ spacing: t }) => t[2]} ${({ spacing: t }) => t[3]};
  }

  button[data-loading='true'][data-size='md'] {
    border-radius: ${({ borderRadius: t }) => t[20]};
    padding: ${({ spacing: t }) => t[3]} ${({ spacing: t }) => t[4]};
  }

  button[data-loading='true'][data-size='lg'] {
    border-radius: ${({ borderRadius: t }) => t[16]};
    padding: ${({ spacing: t }) => t[4]} ${({ spacing: t }) => t[5]};
  }
`;
var xt = function (t, e, i, r) {
    var n = arguments.length,
      o =
        n < 3
          ? e
          : r === null
          ? (r = Object.getOwnPropertyDescriptor(e, i))
          : r,
      s;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      o = Reflect.decorate(t, e, i, r);
    else
      for (var a = t.length - 1; a >= 0; a--)
        (s = t[a]) && (o = (n < 3 ? s(o) : n > 3 ? s(e, i, o) : s(e, i)) || o);
    return n > 3 && o && Object.defineProperty(e, i, o), o;
  },
  je = class extends m {
    constructor() {
      super(...arguments),
        (this.size = "md"),
        (this.variant = "primary"),
        (this.loading = !1),
        (this.text = "Connect Wallet");
    }
    render() {
      return l`
      <button
        data-loading=${this.loading}
        data-variant=${this.variant}
        data-size=${this.size}
        ?disabled=${this.loading}
      >
        ${this.contentTemplate()}
      </button>
    `;
    }
    contentTemplate() {
      let e = { lg: "lg-regular", md: "md-regular", sm: "sm-regular" },
        i = { primary: "invert", secondary: "accent-primary" };
      return this.loading
        ? l`<wui-loading-spinner
      color=${i[this.variant]}
      size=${this.size}
    ></wui-loading-spinner>`
        : l` <wui-text variant=${e[this.size]} color=${i[this.variant]}>
        ${this.text}
      </wui-text>`;
    }
  };
je.styles = [v, T, Li];
xt([c()], je.prototype, "size", void 0);
xt([c()], je.prototype, "variant", void 0);
xt([c({ type: Boolean })], je.prototype, "loading", void 0);
xt([c()], je.prototype, "text", void 0);
je = xt([d("wui-connect-button")], je);
var Oe = function (t, e, i, r) {
    var n = arguments.length,
      o =
        n < 3
          ? e
          : r === null
          ? (r = Object.getOwnPropertyDescriptor(e, i))
          : r,
      s;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      o = Reflect.decorate(t, e, i, r);
    else
      for (var a = t.length - 1; a >= 0; a--)
        (s = t[a]) && (o = (n < 3 ? s(o) : n > 3 ? s(e, i, o) : s(e, i)) || o);
    return n > 3 && o && Object.defineProperty(e, i, o), o;
  },
  $e = class extends m {
    constructor() {
      super(),
        (this.unsubscribe = []),
        (this.size = "md"),
        (this.label = "Connect Wallet"),
        (this.loadingLabel = "Connecting..."),
        (this.open = O.state.open),
        (this.loading = this.namespace
          ? O.state.loadingNamespaceMap.get(this.namespace)
          : O.state.loading),
        this.unsubscribe.push(
          O.subscribe((e) => {
            (this.open = e.open),
              (this.loading = this.namespace
                ? e.loadingNamespaceMap.get(this.namespace)
                : e.loading);
          })
        );
    }
    disconnectedCallback() {
      this.unsubscribe.forEach((e) => e());
    }
    render() {
      return l`
      <wui-connect-button
        size=${f(this.size)}
        .loading=${this.loading}
        @click=${this.onClick.bind(this)}
        data-testid=${`connect-button${
          this.namespace ? `-${this.namespace}` : ""
        }`}
      >
        ${this.loading ? this.loadingLabel : this.label}
      </wui-connect-button>
    `;
    }
    onClick() {
      this.open
        ? O.close()
        : this.loading ||
          O.open({ view: "Connect", namespace: this.namespace });
    }
  };
Oe([c()], $e.prototype, "size", void 0);
Oe([c()], $e.prototype, "label", void 0);
Oe([c()], $e.prototype, "loadingLabel", void 0);
Oe([c()], $e.prototype, "namespace", void 0);
Oe([p()], $e.prototype, "open", void 0);
Oe([p()], $e.prototype, "loading", void 0);
var Di = class extends $e {};
Di = Oe([d("w3m-connect-button")], Di);
var Ui = class extends $e {};
Ui = Oe([d("appkit-connect-button")], Ui);
var ji = g`
  :host {
    display: block;
  }

  button {
    border-radius: ${({ borderRadius: t }) => t[32]};
    display: flex;
    gap: ${({ spacing: t }) => t[1]};
    padding: ${({ spacing: t }) => t[1]} ${({ spacing: t }) => t[2]}
      ${({ spacing: t }) => t[1]} ${({ spacing: t }) => t[1]};
    background-color: ${({ tokens: t }) => t.theme.foregroundPrimary};
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({ tokens: t }) => t.theme.foregroundSecondary};
    }
  }

  button[data-size='sm'] > wui-icon-box,
  button[data-size='sm'] > wui-image {
    width: 16px;
    height: 16px;
  }

  button[data-size='md'] > wui-icon-box,
  button[data-size='md'] > wui-image {
    width: 20px;
    height: 20px;
  }

  button[data-size='lg'] > wui-icon-box,
  button[data-size='lg'] > wui-image {
    width: 24px;
    height: 24px;
  }

  wui-image,
  wui-icon-box {
    border-radius: ${({ borderRadius: t }) => t[32]};
  }
`;
var Ct = function (t, e, i, r) {
    var n = arguments.length,
      o =
        n < 3
          ? e
          : r === null
          ? (r = Object.getOwnPropertyDescriptor(e, i))
          : r,
      s;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      o = Reflect.decorate(t, e, i, r);
    else
      for (var a = t.length - 1; a >= 0; a--)
        (s = t[a]) && (o = (n < 3 ? s(o) : n > 3 ? s(e, i, o) : s(e, i)) || o);
    return n > 3 && o && Object.defineProperty(e, i, o), o;
  },
  Be = class extends m {
    constructor() {
      super(...arguments),
        (this.imageSrc = void 0),
        (this.isUnsupportedChain = void 0),
        (this.disabled = !1),
        (this.size = "lg");
    }
    render() {
      let e = { sm: "sm-regular", md: "md-regular", lg: "lg-regular" };
      return l`
      <button data-size=${
        this.size
      } data-testid="wui-network-button" ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant=${e[this.size]} color="primary">
          <slot></slot>
        </wui-text>
      </button>
    `;
    }
    visualTemplate() {
      return this.isUnsupportedChain
        ? l` <wui-icon-box color="error" icon="warningCircle"></wui-icon-box> `
        : this.imageSrc
        ? l`<wui-image src=${this.imageSrc}></wui-image>`
        : l` <wui-icon size="xl" color="default" name="networkPlaceholder"></wui-icon> `;
    }
  };
Be.styles = [v, T, ji];
Ct([c()], Be.prototype, "imageSrc", void 0);
Ct([c({ type: Boolean })], Be.prototype, "isUnsupportedChain", void 0);
Ct([c({ type: Boolean })], Be.prototype, "disabled", void 0);
Ct([c()], Be.prototype, "size", void 0);
Be = Ct([d("wui-network-button")], Be);
var Bi = N`
  :host {
    display: block;
    width: max-content;
  }
`;
var Te = function (t, e, i, r) {
    var n = arguments.length,
      o =
        n < 3
          ? e
          : r === null
          ? (r = Object.getOwnPropertyDescriptor(e, i))
          : r,
      s;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      o = Reflect.decorate(t, e, i, r);
    else
      for (var a = t.length - 1; a >= 0; a--)
        (s = t[a]) && (o = (n < 3 ? s(o) : n > 3 ? s(e, i, o) : s(e, i)) || o);
    return n > 3 && o && Object.defineProperty(e, i, o), o;
  },
  ce = class extends m {
    constructor() {
      super(),
        (this.unsubscribe = []),
        (this.disabled = !1),
        (this.network = u.state.activeCaipNetwork),
        (this.networkImage = k.getNetworkImage(this.network)),
        (this.caipAddress = u.state.activeCaipAddress),
        (this.loading = O.state.loading),
        (this.isSupported = b.state.allowUnsupportedChain
          ? !0
          : u.state.activeChain
          ? u.checkIfSupportedNetwork(u.state.activeChain)
          : !0),
        this.unsubscribe.push(
          oe.subscribeNetworkImages(() => {
            this.networkImage = k.getNetworkImage(this.network);
          }),
          u.subscribeKey("activeCaipAddress", (e) => {
            this.caipAddress = e;
          }),
          u.subscribeKey("activeCaipNetwork", (e) => {
            (this.network = e),
              (this.networkImage = k.getNetworkImage(e)),
              (this.isSupported = e?.chainNamespace
                ? u.checkIfSupportedNetwork(e.chainNamespace)
                : !0),
              k.fetchNetworkImage(e?.assets?.imageId);
          }),
          O.subscribeKey("loading", (e) => (this.loading = e))
        );
    }
    firstUpdated() {
      k.fetchNetworkImage(this.network?.assets?.imageId);
    }
    disconnectedCallback() {
      this.unsubscribe.forEach((e) => e());
    }
    render() {
      let e = this.network
        ? u.checkIfSupportedNetwork(this.network.chainNamespace)
        : !0;
      return l`
      <wui-network-button
        .disabled=${!!(this.disabled || this.loading)}
        .isUnsupportedChain=${b.state.allowUnsupportedChain ? !1 : !e}
        imageSrc=${f(this.networkImage)}
        @click=${this.onClick.bind(this)}
        data-testid="w3m-network-button"
      >
        ${this.getLabel()}
        <slot></slot>
      </wui-network-button>
    `;
    }
    getLabel() {
      return this.network
        ? !this.isSupported && !b.state.allowUnsupportedChain
          ? "Switch Network"
          : this.network.name
        : this.label
        ? this.label
        : this.caipAddress
        ? "Unknown Network"
        : "Select Network";
    }
    onClick() {
      this.loading ||
        (C.sendEvent({ type: "track", event: "CLICK_NETWORKS" }),
        O.open({ view: "Networks" }));
    }
  };
ce.styles = Bi;
Te([c({ type: Boolean })], ce.prototype, "disabled", void 0);
Te([c({ type: String })], ce.prototype, "label", void 0);
Te([p()], ce.prototype, "network", void 0);
Te([p()], ce.prototype, "networkImage", void 0);
Te([p()], ce.prototype, "caipAddress", void 0);
Te([p()], ce.prototype, "loading", void 0);
Te([p()], ce.prototype, "isSupported", void 0);
var zi = class extends ce {};
zi = Te([d("w3m-network-button")], zi);
var Fi = class extends ce {};
Fi = Te([d("appkit-network-button")], Fi);
var Mi = g`
  :host {
    display: block;
  }

  button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${({ spacing: t }) => t[4]};
    padding: ${({ spacing: t }) => t[3]};
    border-radius: ${({ borderRadius: t }) => t[4]};
    background-color: ${({ tokens: t }) => t.core.foregroundAccent010};
  }

  wui-flex > wui-icon {
    padding: ${({ spacing: t }) => t[2]};
    color: ${({ tokens: t }) => t.theme.textInvert};
    background-color: ${({ tokens: t }) => t.core.backgroundAccentPrimary};
    border-radius: ${({ borderRadius: t }) => t[2]};
    align-items: normal;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({ tokens: t }) => t.core.foregroundAccent020};
    }
  }
`;
var Pt = function (t, e, i, r) {
    var n = arguments.length,
      o =
        n < 3
          ? e
          : r === null
          ? (r = Object.getOwnPropertyDescriptor(e, i))
          : r,
      s;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      o = Reflect.decorate(t, e, i, r);
    else
      for (var a = t.length - 1; a >= 0; a--)
        (s = t[a]) && (o = (n < 3 ? s(o) : n > 3 ? s(e, i, o) : s(e, i)) || o);
    return n > 3 && o && Object.defineProperty(e, i, o), o;
  },
  st = class extends m {
    constructor() {
      super(...arguments),
        (this.label = ""),
        (this.description = ""),
        (this.icon = "wallet");
    }
    render() {
      return l`
      <button>
        <wui-flex gap="2" alignItems="center">
          <wui-icon weight="fill" size="md" name=${this.icon} color="inherit"></wui-icon>
          <wui-flex flexDirection="column" gap="1">
            <wui-text variant="md-medium" color="primary">${this.label}</wui-text>
            <wui-text variant="md-regular" color="tertiary">${this.description}</wui-text>
          </wui-flex>
        </wui-flex>
        <wui-icon size="lg" color="accent-primary" name="chevronRight"></wui-icon>
      </button>
    `;
    }
  };
st.styles = [v, T, Mi];
Pt([c()], st.prototype, "label", void 0);
Pt([c()], st.prototype, "description", void 0);
Pt([c()], st.prototype, "icon", void 0);
st = Pt([d("wui-notice-card")], st);
var Vi = function (t, e, i, r) {
    var n = arguments.length,
      o =
        n < 3
          ? e
          : r === null
          ? (r = Object.getOwnPropertyDescriptor(e, i))
          : r,
      s;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      o = Reflect.decorate(t, e, i, r);
    else
      for (var a = t.length - 1; a >= 0; a--)
        (s = t[a]) && (o = (n < 3 ? s(o) : n > 3 ? s(e, i, o) : s(e, i)) || o);
    return n > 3 && o && Object.defineProperty(e, i, o), o;
  },
  oi = class extends m {
    constructor() {
      super(),
        (this.unsubscribe = []),
        (this.socialProvider = ie.getConnectedSocialProvider()),
        (this.socialUsername = ie.getConnectedSocialUsername()),
        (this.namespace = u.state.activeChain),
        this.unsubscribe.push(
          u.subscribeKey("activeChain", (e) => {
            this.namespace = e;
          })
        );
    }
    disconnectedCallback() {
      this.unsubscribe.forEach((e) => e());
    }
    render() {
      let e = y.getConnectorId(this.namespace),
        i = y.getAuthConnector();
      if (!i || e !== $.CONNECTOR_ID.AUTH)
        return (this.style.cssText = "display: none"), null;
      let r = i.provider.getEmail() ?? "";
      return !r && !this.socialUsername
        ? ((this.style.cssText = "display: none"), null)
        : l`
      <wui-list-item
        ?rounded=${!0}
        icon=${this.socialProvider ?? "mail"}
        data-testid="w3m-account-email-update"
        ?chevron=${!this.socialProvider}
        @click=${() => {
          this.onGoToUpdateEmail(r, this.socialProvider);
        }}
      >
        <wui-text variant="lg-regular" color="primary">${this.getAuthName(
          r
        )}</wui-text>
      </wui-list-item>
    `;
    }
    onGoToUpdateEmail(e, i) {
      i || h.push("UpdateEmailWallet", { email: e, redirectView: "Account" });
    }
    getAuthName(e) {
      return this.socialUsername
        ? this.socialProvider === "discord" && this.socialUsername.endsWith("0")
          ? this.socialUsername.slice(0, -1)
          : this.socialUsername
        : e.length > 30
        ? `${e.slice(0, -3)}...`
        : e;
    }
  };
Vi([p()], oi.prototype, "namespace", void 0);
oi = Vi([d("w3m-account-auth-button")], oi);
var Ee = function (t, e, i, r) {
    var n = arguments.length,
      o =
        n < 3
          ? e
          : r === null
          ? (r = Object.getOwnPropertyDescriptor(e, i))
          : r,
      s;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      o = Reflect.decorate(t, e, i, r);
    else
      for (var a = t.length - 1; a >= 0; a--)
        (s = t[a]) && (o = (n < 3 ? s(o) : n > 3 ? s(e, i, o) : s(e, i)) || o);
    return n > 3 && o && Object.defineProperty(e, i, o), o;
  },
  ge = class extends m {
    constructor() {
      super(),
        (this.usubscribe = []),
        (this.networkImages = oe.state.networkImages),
        (this.address = u.getAccountData()?.address),
        (this.profileImage = u.getAccountData()?.profileImage),
        (this.profileName = u.getAccountData()?.profileName),
        (this.network = u.state.activeCaipNetwork),
        (this.disconnecting = !1),
        (this.loading = !1),
        (this.switched = !1),
        (this.text = ""),
        (this.remoteFeatures = b.state.remoteFeatures),
        this.usubscribe.push(
          u.subscribeChainProp("accountState", (e) => {
            e &&
              ((this.address = e.address),
              (this.profileImage = e.profileImage),
              (this.profileName = e.profileName));
          }),
          u.subscribeKey("activeCaipNetwork", (e) => {
            e?.id && (this.network = e);
          }),
          b.subscribeKey("remoteFeatures", (e) => {
            this.remoteFeatures = e;
          })
        );
    }
    disconnectedCallback() {
      this.usubscribe.forEach((e) => e());
    }
    render() {
      if (!this.address)
        throw new Error("w3m-account-settings-view: No account provided");
      let e = this.networkImages[this.network?.assets?.imageId ?? ""];
      return l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="4"
        .padding=${["0", "5", "3", "5"]}
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${f(this.profileImage)}
          size="lg"
        ></wui-avatar>
        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="1" alignItems="center" justifyContent="center">
            <wui-text variant="h5-medium" color="primary" data-testid="account-settings-address">
              ${P.getTruncateString({
                string: this.address,
                charsStart: 4,
                charsEnd: 6,
                truncate: "middle",
              })}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="default"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
      <wui-flex flexDirection="column" gap="4">
        <wui-flex flexDirection="column" gap="2" .padding=${[
          "6",
          "4",
          "3",
          "4",
        ]}>
          ${this.authCardTemplate()}
          <w3m-account-auth-button></w3m-account-auth-button>
          <wui-list-item
            imageSrc=${f(e)}
            ?chevron=${this.isAllowedNetworkSwitch()}
            ?fullSize=${!0}
            ?rounded=${!0}
            @click=${this.onNetworks.bind(this)}
            data-testid="account-switch-network-button"
          >
            <wui-text variant="lg-regular" color="primary">
              ${this.network?.name ?? "Unknown"}
            </wui-text>
          </wui-list-item>
          ${this.togglePreferredAccountBtnTemplate()} ${this.chooseNameButtonTemplate()}
          <wui-list-item
            ?rounded=${!0}
            icon="power"
            iconColor="error"
            ?chevron=${!1}
            .loading=${this.disconnecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="lg-regular" color="primary">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `;
    }
    chooseNameButtonTemplate() {
      let e = this.network?.chainNamespace,
        i = y.getConnectorId(e),
        r = y.getAuthConnector();
      return !u.checkIfNamesSupported() ||
        !r ||
        i !== $.CONNECTOR_ID.AUTH ||
        this.profileName
        ? null
        : l`
      <wui-list-item
        icon="id"
        ?rounded=${!0}
        ?chevron=${!0}
        @click=${this.onChooseName.bind(this)}
        data-testid="account-choose-name-button"
      >
        <wui-text variant="lg-regular" color="primary">Choose account name </wui-text>
      </wui-list-item>
    `;
    }
    authCardTemplate() {
      let e = y.getConnectorId(this.network?.chainNamespace),
        i = y.getAuthConnector(),
        { origin: r } = location;
      return !i || e !== $.CONNECTOR_ID.AUTH || r.includes(W.SECURE_SITE)
        ? null
        : l`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `;
    }
    isAllowedNetworkSwitch() {
      let e = u.getAllRequestedCaipNetworks(),
        i = e ? e.length > 1 : !1,
        r = e?.find(({ id: n }) => n === this.network?.id);
      return i || !r;
    }
    onCopyAddress() {
      try {
        this.address &&
          (w.copyToClopboard(this.address), I.showSuccess("Address copied"));
      } catch {
        I.showError("Failed to copy");
      }
    }
    togglePreferredAccountBtnTemplate() {
      let e = this.network?.chainNamespace,
        i = u.checkIfSmartAccountEnabled(),
        r = y.getConnectorId(e);
      return !y.getAuthConnector() || r !== $.CONNECTOR_ID.AUTH || !i
        ? null
        : (this.switched ||
            (this.text =
              Y(e) === U.ACCOUNT_TYPES.SMART_ACCOUNT
                ? "Switch to your EOA"
                : "Switch to your Smart Account"),
          l`
      <wui-list-item
        icon="swapHorizontal"
        ?rounded=${!0}
        ?chevron=${!0}
        ?loading=${this.loading}
        @click=${this.changePreferredAccountType.bind(this)}
        data-testid="account-toggle-preferred-account-type"
      >
        <wui-text variant="lg-regular" color="primary">${this.text}</wui-text>
      </wui-list-item>
    `);
    }
    onChooseName() {
      h.push("ChooseAccountName");
    }
    changePreferredAccountType() {
      return R(this, null, function* () {
        let e = this.network?.chainNamespace,
          i = u.checkIfSmartAccountEnabled(),
          r =
            Y(e) === U.ACCOUNT_TYPES.SMART_ACCOUNT || !i
              ? U.ACCOUNT_TYPES.EOA
              : U.ACCOUNT_TYPES.SMART_ACCOUNT;
        y.getAuthConnector() &&
          ((this.loading = !0),
          yield x.setPreferredAccountType(r, e),
          (this.text =
            r === U.ACCOUNT_TYPES.SMART_ACCOUNT
              ? "Switch to your EOA"
              : "Switch to your Smart Account"),
          (this.switched = !0),
          $i.resetSend(),
          (this.loading = !1),
          this.requestUpdate());
      });
    }
    onNetworks() {
      this.isAllowedNetworkSwitch() && h.push("Networks");
    }
    onDisconnect() {
      return R(this, null, function* () {
        try {
          this.disconnecting = !0;
          let e = this.network?.chainNamespace,
            r = x.getConnections(e).length > 0,
            n = e && y.state.activeConnectorIds[e],
            o = this.remoteFeatures?.multiWallet;
          yield x.disconnect(o ? { id: n, namespace: e } : {}),
            r &&
              o &&
              (h.push("ProfileWallets"), I.showSuccess("Wallet deleted"));
        } catch {
          C.sendEvent({
            type: "track",
            event: "DISCONNECT_ERROR",
            properties: { message: "Failed to disconnect" },
          }),
            I.showError("Failed to disconnect");
        } finally {
          this.disconnecting = !1;
        }
      });
    }
    onGoToUpgradeView() {
      C.sendEvent({ type: "track", event: "EMAIL_UPGRADE_FROM_MODAL" }),
        h.push("UpgradeEmailWallet");
    }
  };
Ee([p()], ge.prototype, "address", void 0);
Ee([p()], ge.prototype, "profileImage", void 0);
Ee([p()], ge.prototype, "profileName", void 0);
Ee([p()], ge.prototype, "network", void 0);
Ee([p()], ge.prototype, "disconnecting", void 0);
Ee([p()], ge.prototype, "loading", void 0);
Ee([p()], ge.prototype, "switched", void 0);
Ee([p()], ge.prototype, "text", void 0);
Ee([p()], ge.prototype, "remoteFeatures", void 0);
ge = Ee([d("w3m-account-settings-view")], ge);
var Hi = g`
  :host {
    flex: 1;
    height: 100%;
  }

  button {
    width: 100%;
    height: 100%;
    display: inline-flex;
    align-items: center;
    padding: ${({ spacing: t }) => t[1]} ${({ spacing: t }) => t[2]};
    column-gap: ${({ spacing: t }) => t[1]};
    color: ${({ tokens: t }) => t.theme.textSecondary};
    border-radius: ${({ borderRadius: t }) => t[20]};
    background-color: transparent;
    transition: background-color ${({ durations: t }) => t.lg}
      ${({ easings: t }) => t["ease-out-power-2"]};
    will-change: background-color;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  button[data-active='true'] {
    color: ${({ tokens: t }) => t.theme.textPrimary};
    background-color: ${({ tokens: t }) => t.theme.foregroundTertiary};
  }

  button:hover:enabled:not([data-active='true']),
  button:active:enabled:not([data-active='true']) {
    wui-text,
    wui-icon {
      color: ${({ tokens: t }) => t.theme.textPrimary};
    }
  }
`;
var vt = function (t, e, i, r) {
    var n = arguments.length,
      o =
        n < 3
          ? e
          : r === null
          ? (r = Object.getOwnPropertyDescriptor(e, i))
          : r,
      s;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      o = Reflect.decorate(t, e, i, r);
    else
      for (var a = t.length - 1; a >= 0; a--)
        (s = t[a]) && (o = (n < 3 ? s(o) : n > 3 ? s(e, i, o) : s(e, i)) || o);
    return n > 3 && o && Object.defineProperty(e, i, o), o;
  },
  ar = { lg: "lg-regular", md: "md-regular", sm: "sm-regular" },
  lr = { lg: "md", md: "sm", sm: "sm" },
  ze = class extends m {
    constructor() {
      super(...arguments),
        (this.icon = "mobile"),
        (this.size = "md"),
        (this.label = ""),
        (this.active = !1);
    }
    render() {
      return l`
      <button data-active=${this.active}>
        ${
          this.icon
            ? l`<wui-icon size=${lr[this.size]} name=${this.icon}></wui-icon>`
            : ""
        }
        <wui-text variant=${ar[this.size]}> ${this.label} </wui-text>
      </button>
    `;
    }
  };
ze.styles = [v, T, Hi];
vt([c()], ze.prototype, "icon", void 0);
vt([c()], ze.prototype, "size", void 0);
vt([c()], ze.prototype, "label", void 0);
vt([c({ type: Boolean })], ze.prototype, "active", void 0);
ze = vt([d("wui-tab-item")], ze);
var Ki = g`
  :host {
    display: inline-flex;
    align-items: center;
    background-color: ${({ tokens: t }) => t.theme.foregroundSecondary};
    border-radius: ${({ borderRadius: t }) => t[32]};
    padding: ${({ spacing: t }) => t["01"]};
    box-sizing: border-box;
  }

  :host([data-size='sm']) {
    height: 26px;
  }

  :host([data-size='md']) {
    height: 36px;
  }
`;
var $t = function (t, e, i, r) {
    var n = arguments.length,
      o =
        n < 3
          ? e
          : r === null
          ? (r = Object.getOwnPropertyDescriptor(e, i))
          : r,
      s;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      o = Reflect.decorate(t, e, i, r);
    else
      for (var a = t.length - 1; a >= 0; a--)
        (s = t[a]) && (o = (n < 3 ? s(o) : n > 3 ? s(e, i, o) : s(e, i)) || o);
    return n > 3 && o && Object.defineProperty(e, i, o), o;
  },
  Fe = class extends m {
    constructor() {
      super(...arguments),
        (this.tabs = []),
        (this.onTabChange = () => null),
        (this.size = "md"),
        (this.activeTab = 0);
    }
    render() {
      return (
        (this.dataset.size = this.size),
        this.tabs.map((e, i) => {
          let r = i === this.activeTab;
          return l`
        <wui-tab-item
          @click=${() => this.onTabClick(i)}
          icon=${e.icon}
          size=${this.size}
          label=${e.label}
          ?active=${r}
          data-active=${r}
          data-testid="tab-${e.label?.toLowerCase()}"
        ></wui-tab-item>
      `;
        })
      );
    }
    onTabClick(e) {
      (this.activeTab = e), this.onTabChange(e);
    }
  };
Fe.styles = [v, T, Ki];
$t([c({ type: Array })], Fe.prototype, "tabs", void 0);
$t([c()], Fe.prototype, "onTabChange", void 0);
$t([c()], Fe.prototype, "size", void 0);
$t([p()], Fe.prototype, "activeTab", void 0);
Fe = $t([d("wui-tabs")], Fe);
var qi = g`
  button {
    display: flex;
    align-items: center;
    height: 40px;
    padding: ${({ spacing: t }) => t[2]};
    border-radius: ${({ borderRadius: t }) => t[4]};
    column-gap: ${({ spacing: t }) => t[1]};
    background-color: transparent;
    transition: background-color ${({ durations: t }) => t.lg}
      ${({ easings: t }) => t["ease-out-power-2"]};
    will-change: background-color;
  }

  wui-image,
  .icon-box {
    width: ${({ spacing: t }) => t[6]};
    height: ${({ spacing: t }) => t[6]};
    border-radius: ${({ borderRadius: t }) => t[4]};
  }

  wui-text {
    flex: 1;
  }

  .icon-box {
    position: relative;
  }

  .icon-box[data-active='true'] {
    background-color: ${({ tokens: t }) => t.theme.foregroundSecondary};
  }

  .circle {
    position: absolute;
    left: 16px;
    top: 15px;
    width: 8px;
    height: 8px;
    background-color: ${({ tokens: t }) => t.core.textSuccess};
    box-shadow: 0 0 0 2px ${({ tokens: t }) => t.theme.foregroundPrimary};
    border-radius: 50%;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) {
    button:hover:enabled,
    button:active:enabled {
      background-color: ${({ tokens: t }) => t.theme.foregroundPrimary};
    }
  }
`;
var Se = function (t, e, i, r) {
    var n = arguments.length,
      o =
        n < 3
          ? e
          : r === null
          ? (r = Object.getOwnPropertyDescriptor(e, i))
          : r,
      s;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      o = Reflect.decorate(t, e, i, r);
    else
      for (var a = t.length - 1; a >= 0; a--)
        (s = t[a]) && (o = (n < 3 ? s(o) : n > 3 ? s(e, i, o) : s(e, i)) || o);
    return n > 3 && o && Object.defineProperty(e, i, o), o;
  },
  pe = class extends m {
    constructor() {
      super(...arguments),
        (this.address = ""),
        (this.profileName = ""),
        (this.alt = ""),
        (this.imageSrc = ""),
        (this.icon = void 0),
        (this.iconSize = "md"),
        (this.loading = !1),
        (this.charsStart = 4),
        (this.charsEnd = 6);
    }
    render() {
      return l`
      <button>
        ${this.leftImageTemplate()} ${this.textTemplate()} ${this.rightImageTemplate()}
      </button>
    `;
    }
    leftImageTemplate() {
      let e = this.icon
        ? l`<wui-icon
          size=${f(this.iconSize)}
          color="default"
          name=${this.icon}
          class="icon"
        ></wui-icon>`
        : l`<wui-image src=${this.imageSrc} alt=${this.alt}></wui-image>`;
      return l`
      <wui-flex
        alignItems="center"
        justifyContent="center"
        class="icon-box"
        data-active=${!!this.icon}
      >
        ${e}
        <wui-flex class="circle"></wui-flex>
      </wui-flex>
    `;
    }
    textTemplate() {
      return l`
      <wui-text variant="lg-regular" color="primary">
        ${P.getTruncateString({
          string: this.profileName || this.address,
          charsStart: this.profileName ? 16 : this.charsStart,
          charsEnd: this.profileName ? 0 : this.charsEnd,
          truncate: this.profileName ? "end" : "middle",
        })}
      </wui-text>
    `;
    }
    rightImageTemplate() {
      return l`<wui-icon name="chevronBottom" size="sm" color="default"></wui-icon>`;
    }
  };
pe.styles = [v, T, qi];
Se([c()], pe.prototype, "address", void 0);
Se([c()], pe.prototype, "profileName", void 0);
Se([c()], pe.prototype, "alt", void 0);
Se([c()], pe.prototype, "imageSrc", void 0);
Se([c()], pe.prototype, "icon", void 0);
Se([c()], pe.prototype, "iconSize", void 0);
Se([c({ type: Boolean })], pe.prototype, "loading", void 0);
Se([c({ type: Number })], pe.prototype, "charsStart", void 0);
Se([c({ type: Number })], pe.prototype, "charsEnd", void 0);
pe = Se([d("wui-wallet-switch")], pe);
var Gi = g`
  wui-icon-link {
    margin-right: calc(${({ spacing: t }) => t[8]} * -1);
  }

  wui-notice-card {
    margin-bottom: ${({ spacing: t }) => t[1]};
  }

  wui-list-item > wui-text {
    flex: 1;
  }

  w3m-transactions-view {
    max-height: 200px;
  }

  .balance-container {
    display: inline;
  }

  .tab-content-container {
    height: 300px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  .symbol {
    transform: translateY(-2px);
  }

  .tab-content-container::-webkit-scrollbar {
    display: none;
  }

  .account-button {
    width: auto;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({ spacing: t }) => t[3]};
    height: 48px;
    padding: ${({ spacing: t }) => t[2]};
    padding-right: ${({ spacing: t }) => t[3]};
    box-shadow: inset 0 0 0 1px ${({ tokens: t }) => t.theme.foregroundPrimary};
    background-color: ${({ tokens: t }) => t.theme.foregroundPrimary};
    border-radius: ${({ borderRadius: t }) => t[6]};
    transition: background-color ${({ durations: t }) => t.lg}
      ${({ easings: t }) => t["ease-out-power-2"]};
  }

  .account-button:hover {
    background-color: ${({ tokens: t }) => t.core.glass010};
  }

  .avatar-container {
    position: relative;
  }

  wui-avatar.avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px ${({ tokens: t }) => t.core.glass010};
  }

  wui-wallet-switch {
    margin-top: ${({ spacing: t }) => t[2]};
  }

  wui-avatar.network-avatar {
    width: 16px;
    height: 16px;
    position: absolute;
    left: 100%;
    top: 100%;
    transform: translate(-75%, -75%);
    box-shadow: 0 0 0 2px ${({ tokens: t }) => t.core.glass010};
  }

  .account-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .account-links wui-flex {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: red;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 10px;
    flex: 1 0 0;
    border-radius: var(--XS, 16px);
    border: 1px solid var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    background: var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    transition:
      background-color ${({ durations: t }) => t.md}
        ${({ easings: t }) => t["ease-out-power-1"]},
      opacity ${({ durations: t }) => t.md} ${({ easings: t }) =>
  t["ease-out-power-1"]};
    will-change: background-color, opacity;
  }

  .account-links wui-flex:hover {
    background: var(--dark-accent-glass-015, rgba(71, 161, 255, 0.15));
  }

  .account-links wui-flex wui-icon {
    width: var(--S, 20px);
    height: var(--S, 20px);
  }

  .account-links wui-flex wui-icon svg path {
    stroke: #667dff;
  }
`;
var ue = function (t, e, i, r) {
    var n = arguments.length,
      o =
        n < 3
          ? e
          : r === null
          ? (r = Object.getOwnPropertyDescriptor(e, i))
          : r,
      s;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      o = Reflect.decorate(t, e, i, r);
    else
      for (var a = t.length - 1; a >= 0; a--)
        (s = t[a]) && (o = (n < 3 ? s(o) : n > 3 ? s(e, i, o) : s(e, i)) || o);
    return n > 3 && o && Object.defineProperty(e, i, o), o;
  },
  Q = class extends m {
    constructor() {
      super(),
        (this.unsubscribe = []),
        (this.caipAddress = u.getAccountData()?.caipAddress),
        (this.address = w.getPlainAddress(u.getAccountData()?.caipAddress)),
        (this.profileImage = u.getAccountData()?.profileImage),
        (this.profileName = u.getAccountData()?.profileName),
        (this.disconnecting = !1),
        (this.balance = u.getAccountData()?.balance),
        (this.balanceSymbol = u.getAccountData()?.balanceSymbol),
        (this.features = b.state.features),
        (this.remoteFeatures = b.state.remoteFeatures),
        (this.namespace = u.state.activeChain),
        (this.activeConnectorIds = y.state.activeConnectorIds),
        this.unsubscribe.push(
          u.subscribeChainProp("accountState", (e) => {
            (this.address = w.getPlainAddress(e?.caipAddress)),
              (this.caipAddress = e?.caipAddress),
              (this.balance = e?.balance),
              (this.balanceSymbol = e?.balanceSymbol),
              (this.profileName = e?.profileName),
              (this.profileImage = e?.profileImage);
          }),
          b.subscribeKey("features", (e) => (this.features = e)),
          b.subscribeKey("remoteFeatures", (e) => (this.remoteFeatures = e)),
          y.subscribeKey("activeConnectorIds", (e) => {
            this.activeConnectorIds = e;
          }),
          u.subscribeKey("activeChain", (e) => (this.namespace = e)),
          u.subscribeKey("activeCaipNetwork", (e) => {
            e?.chainNamespace && (this.namespace = e?.chainNamespace);
          })
        );
    }
    disconnectedCallback() {
      this.unsubscribe.forEach((e) => e());
    }
    render() {
      if (!this.caipAddress || !this.namespace) return null;
      let e = this.activeConnectorIds[this.namespace],
        i = e ? y.getConnectorById(e) : void 0,
        r = k.getConnectorImage(i),
        {
          value: n,
          decimals: o,
          symbol: s,
        } = w.parseBalance(this.balance, this.balanceSymbol);
      return l`<wui-flex
        flexDirection="column"
        .padding=${["0", "5", "4", "5"]}
        alignItems="center"
        gap="3"
      >
        <wui-avatar
          alt=${f(this.caipAddress)}
          address=${f(w.getPlainAddress(this.caipAddress))}
          imageSrc=${f(this.profileImage === null ? void 0 : this.profileImage)}
          data-testid="single-account-avatar"
        ></wui-avatar>
        <wui-wallet-switch
          profileName=${this.profileName}
          address=${this.address}
          imageSrc=${r}
          alt=${i?.name}
          @click=${this.onGoToProfileWalletsView.bind(this)}
          data-testid="wui-wallet-switch"
        ></wui-wallet-switch>
        <div class="balance-container">
          <wui-text variant="h3-regular" color="primary">${n}</wui-text>
          <wui-text variant="h3-regular" color="secondary">.${o}</wui-text>
          <wui-text variant="h6-medium" color="primary" class="symbol">${s}</wui-text>
        </div>
        ${this.explorerBtnTemplate()}
      </wui-flex>

      <wui-flex flexDirection="column" gap="2" .padding=${["0", "3", "3", "3"]}>
        ${this.authCardTemplate()} <w3m-account-auth-button></w3m-account-auth-button>
        ${this.orderedFeaturesTemplate()} ${this.activityTemplate()}
        <wui-list-item
          .rounded=${!0}
          icon="power"
          iconColor="error"
          ?chevron=${!1}
          .loading=${this.disconnecting}
          .rightIcon=${!1}
          @click=${this.onDisconnect.bind(this)}
          data-testid="disconnect-button"
        >
          <wui-text variant="lg-regular" color="primary">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>`;
    }
    fundWalletTemplate() {
      if (!this.namespace) return null;
      let e = W.ONRAMP_SUPPORTED_CHAIN_NAMESPACES.includes(this.namespace),
        i = !!this.features?.receive,
        r = this.remoteFeatures?.onramp && e,
        n = V.isPayWithExchangeEnabled();
      return !r && !i && !n
        ? null
        : l`
      <wui-list-item
        .rounded=${!0}
        data-testid="w3m-account-default-fund-wallet-button"
        iconVariant="blue"
        icon="dollar"
        ?chevron=${!0}
        @click=${this.handleClickFundWallet.bind(this)}
      >
        <wui-text variant="lg-regular" color="primary">Fund wallet</wui-text>
      </wui-list-item>
    `;
    }
    orderedFeaturesTemplate() {
      return (
        this.features?.walletFeaturesOrder ||
        W.DEFAULT_FEATURES.walletFeaturesOrder
      ).map((i) => {
        switch (i) {
          case "onramp":
            return this.fundWalletTemplate();
          case "swaps":
            return this.swapsTemplate();
          case "send":
            return this.sendTemplate();
          default:
            return null;
        }
      });
    }
    activityTemplate() {
      return this.namespace &&
        this.remoteFeatures?.activity &&
        W.ACTIVITY_ENABLED_CHAIN_NAMESPACES.includes(this.namespace)
        ? l` <wui-list-item
          .rounded=${!0}
          icon="clock"
          ?chevron=${!0}
          @click=${this.onTransactions.bind(this)}
          data-testid="w3m-account-default-activity-button"
        >
          <wui-text variant="lg-regular" color="primary">Activity</wui-text>
        </wui-list-item>`
        : null;
    }
    swapsTemplate() {
      let e = this.remoteFeatures?.swaps,
        i = u.state.activeChain === $.CHAIN.EVM;
      return !e || !i
        ? null
        : l`
      <wui-list-item
        .rounded=${!0}
        icon="recycleHorizontal"
        ?chevron=${!0}
        @click=${this.handleClickSwap.bind(this)}
        data-testid="w3m-account-default-swaps-button"
      >
        <wui-text variant="lg-regular" color="primary">Swap</wui-text>
      </wui-list-item>
    `;
    }
    sendTemplate() {
      let e = this.features?.send,
        i = u.state.activeChain;
      if (!i)
        throw new Error("SendController:sendTemplate - namespace is required");
      let r = W.SEND_SUPPORTED_NAMESPACES.includes(i);
      return !e || !r
        ? null
        : l`
      <wui-list-item
        .rounded=${!0}
        icon="send"
        ?chevron=${!0}
        @click=${this.handleClickSend.bind(this)}
        data-testid="w3m-account-default-send-button"
      >
        <wui-text variant="lg-regular" color="primary">Send</wui-text>
      </wui-list-item>
    `;
    }
    authCardTemplate() {
      let e = u.state.activeChain;
      if (!e)
        throw new Error(
          "AuthCardTemplate:authCardTemplate - namespace is required"
        );
      let i = y.getConnectorId(e),
        r = y.getAuthConnector(),
        { origin: n } = location;
      return !r || i !== $.CONNECTOR_ID.AUTH || n.includes(W.SECURE_SITE)
        ? null
        : l`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `;
    }
    handleClickFundWallet() {
      h.push("FundWallet");
    }
    handleClickSwap() {
      h.push("Swap");
    }
    handleClickSend() {
      h.push("WalletSend");
    }
    explorerBtnTemplate() {
      return u.getAccountData()?.addressExplorerUrl
        ? l`
      <wui-button size="md" variant="accent-primary" @click=${this.onExplorer.bind(
        this
      )}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `
        : null;
    }
    onTransactions() {
      C.sendEvent({
        type: "track",
        event: "CLICK_TRANSACTIONS",
        properties: {
          isSmartAccount:
            Y(u.state.activeChain) === U.ACCOUNT_TYPES.SMART_ACCOUNT,
        },
      }),
        h.push("Transactions");
    }
    onDisconnect() {
      return R(this, null, function* () {
        try {
          this.disconnecting = !0;
          let i = x.getConnections(this.namespace).length > 0,
            r = this.namespace && y.state.activeConnectorIds[this.namespace],
            n = this.remoteFeatures?.multiWallet;
          yield x.disconnect(n ? { id: r, namespace: this.namespace } : {}),
            i &&
              n &&
              (h.push("ProfileWallets"), I.showSuccess("Wallet deleted"));
        } catch {
          C.sendEvent({
            type: "track",
            event: "DISCONNECT_ERROR",
            properties: { message: "Failed to disconnect" },
          }),
            I.showError("Failed to disconnect");
        } finally {
          this.disconnecting = !1;
        }
      });
    }
    onExplorer() {
      let e = u.getAccountData()?.addressExplorerUrl;
      e && w.openHref(e, "_blank");
    }
    onGoToUpgradeView() {
      C.sendEvent({ type: "track", event: "EMAIL_UPGRADE_FROM_MODAL" }),
        h.push("UpgradeEmailWallet");
    }
    onGoToProfileWalletsView() {
      h.push("ProfileWallets");
    }
  };
Q.styles = Gi;
ue([p()], Q.prototype, "caipAddress", void 0);
ue([p()], Q.prototype, "address", void 0);
ue([p()], Q.prototype, "profileImage", void 0);
ue([p()], Q.prototype, "profileName", void 0);
ue([p()], Q.prototype, "disconnecting", void 0);
ue([p()], Q.prototype, "balance", void 0);
ue([p()], Q.prototype, "balanceSymbol", void 0);
ue([p()], Q.prototype, "features", void 0);
ue([p()], Q.prototype, "remoteFeatures", void 0);
ue([p()], Q.prototype, "namespace", void 0);
ue([p()], Q.prototype, "activeConnectorIds", void 0);
Q = ue([d("w3m-account-default-widget")], Q);
var Yi = g`
  span {
    font-weight: 500;
    font-size: 38px;
    color: ${({ tokens: t }) => t.theme.textPrimary};
    line-height: 38px;
    letter-spacing: -2%;
    text-align: center;
    font-family: var(--apkt-fontFamily-regular);
  }

  .pennies {
    color: ${({ tokens: t }) => t.theme.textSecondary};
  }
`;
var ri = function (t, e, i, r) {
    var n = arguments.length,
      o =
        n < 3
          ? e
          : r === null
          ? (r = Object.getOwnPropertyDescriptor(e, i))
          : r,
      s;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      o = Reflect.decorate(t, e, i, r);
    else
      for (var a = t.length - 1; a >= 0; a--)
        (s = t[a]) && (o = (n < 3 ? s(o) : n > 3 ? s(e, i, o) : s(e, i)) || o);
    return n > 3 && o && Object.defineProperty(e, i, o), o;
  },
  Et = class extends m {
    constructor() {
      super(...arguments), (this.dollars = "0"), (this.pennies = "00");
    }
    render() {
      return l`<span>$${this.dollars}<span class="pennies">.${this.pennies}</span></span>`;
    }
  };
Et.styles = [v, Yi];
ri([c()], Et.prototype, "dollars", void 0);
ri([c()], Et.prototype, "pennies", void 0);
Et = ri([d("wui-balance")], Et);
var Xi = g`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
  }

  /* -- Variants --------------------------------------------------------- */
  :host([data-variant='fill']) {
    background-color: ${({ colors: t }) => t.neutrals100};
  }

  :host([data-variant='shade']) {
    background-color: ${({ colors: t }) => t.neutrals900};
  }

  :host([data-variant='fill']) > wui-text {
    color: ${({ colors: t }) => t.black};
  }

  :host([data-variant='shade']) > wui-text {
    color: ${({ colors: t }) => t.white};
  }

  :host([data-variant='fill']) > wui-icon {
    color: ${({ colors: t }) => t.neutrals100};
  }

  :host([data-variant='shade']) > wui-icon {
    color: ${({ colors: t }) => t.neutrals900};
  }

  /* -- Sizes --------------------------------------------------------- */
  :host([data-size='sm']) {
    padding: ${({ spacing: t }) => t[1]} ${({ spacing: t }) => t[2]};
    border-radius: ${({ borderRadius: t }) => t[2]};
  }

  :host([data-size='md']) {
    padding: ${({ spacing: t }) => t[2]} ${({ spacing: t }) => t[3]};
    border-radius: ${({ borderRadius: t }) => t[3]};
  }

  /* -- Placements --------------------------------------------------------- */
  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`;
var St = function (t, e, i, r) {
    var n = arguments.length,
      o =
        n < 3
          ? e
          : r === null
          ? (r = Object.getOwnPropertyDescriptor(e, i))
          : r,
      s;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      o = Reflect.decorate(t, e, i, r);
    else
      for (var a = t.length - 1; a >= 0; a--)
        (s = t[a]) && (o = (n < 3 ? s(o) : n > 3 ? s(e, i, o) : s(e, i)) || o);
    return n > 3 && o && Object.defineProperty(e, i, o), o;
  },
  cr = { sm: "sm-regular", md: "md-regular" },
  Me = class extends m {
    constructor() {
      super(...arguments),
        (this.placement = "top"),
        (this.variant = "fill"),
        (this.size = "md"),
        (this.message = "");
    }
    render() {
      return (
        (this.dataset.variant = this.variant),
        (this.dataset.size = this.size),
        l`<wui-icon data-placement=${
          this.placement
        } size="inherit" name="cursor"></wui-icon>
      <wui-text variant=${cr[this.size]}>${this.message}</wui-text>`
      );
    }
  };
Me.styles = [v, T, Xi];
St([c()], Me.prototype, "placement", void 0);
St([c()], Me.prototype, "variant", void 0);
St([c()], Me.prototype, "size", void 0);
St([c()], Me.prototype, "message", void 0);
Me = St([d("wui-tooltip")], Me);
var Qi = N`
  :host {
    width: 100%;
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }

  :host::-webkit-scrollbar {
    display: none;
  }
`;
var pr = function (t, e, i, r) {
    var n = arguments.length,
      o =
        n < 3
          ? e
          : r === null
          ? (r = Object.getOwnPropertyDescriptor(e, i))
          : r,
      s;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      o = Reflect.decorate(t, e, i, r);
    else
      for (var a = t.length - 1; a >= 0; a--)
        (s = t[a]) && (o = (n < 3 ? s(o) : n > 3 ? s(e, i, o) : s(e, i)) || o);
    return n > 3 && o && Object.defineProperty(e, i, o), o;
  },
  ni = class extends m {
    render() {
      return l`<w3m-activity-list page="account"></w3m-activity-list>`;
    }
  };
ni.styles = Qi;
ni = pr([d("w3m-account-activity-widget")], ni);
var Ji = g`
  :host {
    width: 100%;
  }

  button {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${({ spacing: t }) => t[4]};
    padding: ${({ spacing: t }) => t[4]};
    background-color: transparent;
    border-radius: ${({ borderRadius: t }) => t[4]};
  }

  wui-text {
    max-width: 174px;
  }

  .tag-container {
    width: fit-content;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({ tokens: t }) => t.theme.foregroundPrimary};
    }
  }
`;
var at = function (t, e, i, r) {
    var n = arguments.length,
      o =
        n < 3
          ? e
          : r === null
          ? (r = Object.getOwnPropertyDescriptor(e, i))
          : r,
      s;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      o = Reflect.decorate(t, e, i, r);
    else
      for (var a = t.length - 1; a >= 0; a--)
        (s = t[a]) && (o = (n < 3 ? s(o) : n > 3 ? s(e, i, o) : s(e, i)) || o);
    return n > 3 && o && Object.defineProperty(e, i, o), o;
  },
  Pe = class extends m {
    constructor() {
      super(...arguments),
        (this.icon = "card"),
        (this.text = ""),
        (this.description = ""),
        (this.tag = void 0),
        (this.disabled = !1);
    }
    render() {
      return l`
      <button ?disabled=${this.disabled}>
        <wui-flex alignItems="center" gap="3">
          <wui-icon-box padding="2" color="secondary" icon=${
            this.icon
          } size="lg"></wui-icon-box>
          <wui-flex flexDirection="column" gap="1">
            <wui-text variant="md-medium" color="primary">${
              this.text
            }</wui-text>
            ${
              this.description
                ? l`<wui-text variant="md-regular" color="secondary">
                  ${this.description}</wui-text
                >`
                : null
            }
          </wui-flex>
        </wui-flex>

        <wui-flex class="tag-container" alignItems="center" gap="1" justifyContent="flex-end">
          ${
            this.tag
              ? l`<wui-tag tagType="main" size="sm">${this.tag}</wui-tag>`
              : null
          }
          <wui-icon size="md" name="chevronRight" color="default"></wui-icon>
        </wui-flex>
      </button>
    `;
    }
  };
Pe.styles = [v, T, Ji];
at([c()], Pe.prototype, "icon", void 0);
at([c()], Pe.prototype, "text", void 0);
at([c()], Pe.prototype, "description", void 0);
at([c()], Pe.prototype, "tag", void 0);
at([c({ type: Boolean })], Pe.prototype, "disabled", void 0);
Pe = at([d("wui-list-description")], Pe);
var Zi = N`
  :host {
    width: 100%;
  }

  wui-flex {
    width: 100%;
  }

  .contentContainer {
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }

  .contentContainer::-webkit-scrollbar {
    display: none;
  }
`;
var si = function (t, e, i, r) {
    var n = arguments.length,
      o =
        n < 3
          ? e
          : r === null
          ? (r = Object.getOwnPropertyDescriptor(e, i))
          : r,
      s;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      o = Reflect.decorate(t, e, i, r);
    else
      for (var a = t.length - 1; a >= 0; a--)
        (s = t[a]) && (o = (n < 3 ? s(o) : n > 3 ? s(e, i, o) : s(e, i)) || o);
    return n > 3 && o && Object.defineProperty(e, i, o), o;
  },
  kt = class extends m {
    constructor() {
      super(),
        (this.unsubscribe = []),
        (this.tokenBalance = u.getAccountData()?.tokenBalance),
        (this.remoteFeatures = b.state.remoteFeatures),
        this.unsubscribe.push(
          u.subscribeChainProp("accountState", (e) => {
            this.tokenBalance = e?.tokenBalance;
          }),
          b.subscribeKey("remoteFeatures", (e) => {
            this.remoteFeatures = e;
          })
        );
    }
    disconnectedCallback() {
      this.unsubscribe.forEach((e) => e());
    }
    render() {
      return l`${this.tokenTemplate()}`;
    }
    tokenTemplate() {
      return this.tokenBalance && this.tokenBalance?.length > 0
        ? l`<wui-flex class="contentContainer" flexDirection="column" gap="2">
        ${this.tokenItemTemplate()}
      </wui-flex>`
        : l` <wui-flex flexDirection="column">
      ${this.onRampTemplate()}
      <wui-list-description
        @click=${this.onReceiveClick.bind(this)}
        text="Receive funds"
        description="Scan the QR code and receive funds"
        icon="qrCode"
        iconColor="fg-200"
        iconBackgroundColor="fg-200"
        data-testid="w3m-account-receive-button"
      ></wui-list-description
    ></wui-flex>`;
    }
    onRampTemplate() {
      return this.remoteFeatures?.onramp
        ? l`<wui-list-description
        @click=${this.onBuyClick.bind(this)}
        text="Buy Crypto"
        description="Easy with card or bank account"
        icon="card"
        iconColor="success-100"
        iconBackgroundColor="success-100"
        tag="popular"
        data-testid="w3m-account-onramp-button"
      ></wui-list-description>`
        : l``;
    }
    tokenItemTemplate() {
      return this.tokenBalance?.map(
        (e) => l`<wui-list-token
          tokenName=${e.name}
          tokenImageUrl=${e.iconUrl}
          tokenAmount=${e.quantity.numeric}
          tokenValue=${e.value}
          tokenCurrency=${e.symbol}
        ></wui-list-token>`
      );
    }
    onReceiveClick() {
      h.push("WalletReceive");
    }
    onBuyClick() {
      C.sendEvent({
        type: "track",
        event: "SELECT_BUY_CRYPTO",
        properties: {
          isSmartAccount:
            Y(u.state.activeChain) === U.ACCOUNT_TYPES.SMART_ACCOUNT,
        },
      }),
        h.push("OnRampProviders");
    }
  };
kt.styles = Zi;
si([p()], kt.prototype, "tokenBalance", void 0);
si([p()], kt.prototype, "remoteFeatures", void 0);
kt = si([d("w3m-account-tokens-widget")], kt);
var eo = g`
  wui-flex {
    width: 100%;
  }

  wui-promo {
    position: absolute;
    top: -32px;
  }

  wui-profile-button {
    margin-top: calc(-1 * ${({ spacing: t }) => t[4]});
  }

  wui-promo + wui-profile-button {
    margin-top: ${({ spacing: t }) => t[4]};
  }

  wui-tabs {
    width: 100%;
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: ${({ borderRadius: t }) => t[3]};
  }

  .contentContainer > .textContent {
    width: 65%;
  }
`;
var ye = function (t, e, i, r) {
    var n = arguments.length,
      o =
        n < 3
          ? e
          : r === null
          ? (r = Object.getOwnPropertyDescriptor(e, i))
          : r,
      s;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      o = Reflect.decorate(t, e, i, r);
    else
      for (var a = t.length - 1; a >= 0; a--)
        (s = t[a]) && (o = (n < 3 ? s(o) : n > 3 ? s(e, i, o) : s(e, i)) || o);
    return n > 3 && o && Object.defineProperty(e, i, o), o;
  },
  ne = class extends m {
    constructor() {
      super(...arguments),
        (this.unsubscribe = []),
        (this.network = u.state.activeCaipNetwork),
        (this.profileName = u.getAccountData()?.profileName),
        (this.address = u.getAccountData()?.address),
        (this.currentTab = u.getAccountData()?.currentTab),
        (this.tokenBalance = u.getAccountData()?.tokenBalance),
        (this.features = b.state.features),
        (this.namespace = u.state.activeChain),
        (this.activeConnectorIds = y.state.activeConnectorIds),
        (this.remoteFeatures = b.state.remoteFeatures);
    }
    firstUpdated() {
      u.fetchTokenBalance(),
        this.unsubscribe.push(
          u.subscribeChainProp("accountState", (e) => {
            e?.address
              ? ((this.address = e.address),
                (this.profileName = e.profileName),
                (this.currentTab = e.currentTab),
                (this.tokenBalance = e.tokenBalance))
              : O.close();
          }),
          y.subscribeKey("activeConnectorIds", (e) => {
            this.activeConnectorIds = e;
          }),
          u.subscribeKey("activeChain", (e) => (this.namespace = e)),
          u.subscribeKey("activeCaipNetwork", (e) => (this.network = e)),
          b.subscribeKey("features", (e) => (this.features = e)),
          b.subscribeKey("remoteFeatures", (e) => (this.remoteFeatures = e))
        ),
        this.watchSwapValues();
    }
    disconnectedCallback() {
      this.unsubscribe.forEach((e) => e()),
        clearInterval(this.watchTokenBalance);
    }
    render() {
      if (!this.address)
        throw new Error("w3m-account-features-widget: No account provided");
      if (!this.namespace) return null;
      let e = this.activeConnectorIds[this.namespace],
        i = e ? y.getConnectorById(e) : void 0,
        { icon: r, iconSize: n } = this.getAuthData();
      return l`<wui-flex
      flexDirection="column"
      .padding=${["0", "3", "4", "3"]}
      alignItems="center"
      gap="4"
      data-testid="w3m-account-wallet-features-widget"
    >
      <wui-flex flexDirection="column" justifyContent="center" alignItems="center" gap="2">
        <wui-wallet-switch
          profileName=${this.profileName}
          address=${this.address}
          icon=${r}
          iconSize=${n}
          alt=${i?.name}
          @click=${this.onGoToProfileWalletsView.bind(this)}
          data-testid="wui-wallet-switch"
        ></wui-wallet-switch>

        ${this.tokenBalanceTemplate()}
      </wui-flex>
      ${this.orderedWalletFeatures()} ${this.tabsTemplate()} ${this.listContentTemplate()}
    </wui-flex>`;
    }
    orderedWalletFeatures() {
      let e =
        this.features?.walletFeaturesOrder ||
        W.DEFAULT_FEATURES.walletFeaturesOrder;
      if (
        e.every((o) =>
          o === "send" || o === "receive"
            ? !this.features?.[o]
            : o === "swaps" || o === "onramp"
            ? !this.remoteFeatures?.[o]
            : !0
        )
      )
        return null;
      let r = e.map((o) => (o === "receive" || o === "onramp" ? "fund" : o)),
        n = [...new Set(r)];
      return l`<wui-flex gap="2">
      ${n.map((o) => {
        switch (o) {
          case "fund":
            return this.fundWalletTemplate();
          case "swaps":
            return this.swapsTemplate();
          case "send":
            return this.sendTemplate();
          default:
            return null;
        }
      })}
    </wui-flex>`;
    }
    fundWalletTemplate() {
      if (!this.namespace) return null;
      let e = W.ONRAMP_SUPPORTED_CHAIN_NAMESPACES.includes(this.namespace),
        i = this.features?.receive,
        r = this.remoteFeatures?.onramp && e,
        n = V.isPayWithExchangeEnabled();
      return !r && !i && !n
        ? null
        : l`
      <w3m-tooltip-trigger text="Fund wallet">
        <wui-button
          data-testid="wallet-features-fund-wallet-button"
          @click=${this.onFundWalletClick.bind(this)}
          variant="accent-secondary"
          size="lg"
          fullWidth
        >
          <wui-icon name="dollar"></wui-icon>
        </wui-button>
      </w3m-tooltip-trigger>
    `;
    }
    swapsTemplate() {
      let e = this.remoteFeatures?.swaps,
        i = u.state.activeChain === $.CHAIN.EVM;
      return !e || !i
        ? null
        : l`
      <w3m-tooltip-trigger text="Swap">
        <wui-button
          fullWidth
          data-testid="wallet-features-swaps-button"
          @click=${this.onSwapClick.bind(this)}
          variant="accent-secondary"
          size="lg"
        >
          <wui-icon name="recycleHorizontal"></wui-icon>
        </wui-button>
      </w3m-tooltip-trigger>
    `;
    }
    sendTemplate() {
      let e = this.features?.send,
        i = u.state.activeChain,
        r = W.SEND_SUPPORTED_NAMESPACES.includes(i);
      return !e || !r
        ? null
        : l`
      <w3m-tooltip-trigger text="Send">
        <wui-button
          fullWidth
          data-testid="wallet-features-send-button"
          @click=${this.onSendClick.bind(this)}
          variant="accent-secondary"
          size="lg"
        >
          <wui-icon name="send"></wui-icon>
        </wui-button>
      </w3m-tooltip-trigger>
    `;
    }
    watchSwapValues() {
      this.watchTokenBalance = setInterval(
        () => u.fetchTokenBalance((e) => this.onTokenBalanceError(e)),
        1e4
      );
    }
    onTokenBalanceError(e) {
      e instanceof Error &&
        e.cause instanceof Response &&
        e.cause.status === $.HTTP_STATUS_CODES.SERVICE_UNAVAILABLE &&
        clearInterval(this.watchTokenBalance);
    }
    listContentTemplate() {
      return this.currentTab === 0
        ? l`<w3m-account-tokens-widget></w3m-account-tokens-widget>`
        : this.currentTab === 1
        ? l`<w3m-account-activity-widget></w3m-account-activity-widget>`
        : l`<w3m-account-tokens-widget></w3m-account-tokens-widget>`;
    }
    tokenBalanceTemplate() {
      if (this.tokenBalance && this.tokenBalance?.length >= 0) {
        let e = w.calculateBalance(this.tokenBalance),
          { dollars: i = "0", pennies: r = "00" } = w.formatTokenBalance(e);
        return l`<wui-balance dollars=${i} pennies=${r}></wui-balance>`;
      }
      return l`<wui-balance dollars="0" pennies="00"></wui-balance>`;
    }
    tabsTemplate() {
      let e = nt.getTabsByNamespace(u.state.activeChain);
      return e.length === 0
        ? null
        : l`<wui-tabs
      .onTabChange=${this.onTabChange.bind(this)}
      .activeTab=${this.currentTab}
      .tabs=${e}
    ></wui-tabs>`;
    }
    onTabChange(e) {
      u.setAccountProp("currentTab", e, this.namespace);
    }
    onFundWalletClick() {
      h.push("FundWallet");
    }
    onSwapClick() {
      this.network?.caipNetworkId &&
      !W.SWAP_SUPPORTED_NETWORKS.includes(this.network?.caipNetworkId)
        ? h.push("UnsupportedChain", { swapUnsupportedChain: !0 })
        : (C.sendEvent({
            type: "track",
            event: "OPEN_SWAP",
            properties: {
              network: this.network?.caipNetworkId || "",
              isSmartAccount:
                Y(u.state.activeChain) === U.ACCOUNT_TYPES.SMART_ACCOUNT,
            },
          }),
          h.push("Swap"));
    }
    getAuthData() {
      let e = ie.getConnectedSocialProvider(),
        i = ie.getConnectedSocialUsername(),
        n = y.getAuthConnector()?.provider.getEmail() ?? "";
      return {
        name: le.getAuthName({
          email: n,
          socialUsername: i,
          socialProvider: e,
        }),
        icon: e ?? "mail",
        iconSize: e ? "xl" : "md",
      };
    }
    onGoToProfileWalletsView() {
      h.push("ProfileWallets");
    }
    onSendClick() {
      C.sendEvent({
        type: "track",
        event: "OPEN_SEND",
        properties: {
          network: this.network?.caipNetworkId || "",
          isSmartAccount:
            Y(u.state.activeChain) === U.ACCOUNT_TYPES.SMART_ACCOUNT,
        },
      }),
        h.push("WalletSend");
    }
  };
ne.styles = eo;
ye([p()], ne.prototype, "watchTokenBalance", void 0);
ye([p()], ne.prototype, "network", void 0);
ye([p()], ne.prototype, "profileName", void 0);
ye([p()], ne.prototype, "address", void 0);
ye([p()], ne.prototype, "currentTab", void 0);
ye([p()], ne.prototype, "tokenBalance", void 0);
ye([p()], ne.prototype, "features", void 0);
ye([p()], ne.prototype, "namespace", void 0);
ye([p()], ne.prototype, "activeConnectorIds", void 0);
ye([p()], ne.prototype, "remoteFeatures", void 0);
ne = ye([d("w3m-account-wallet-features-widget")], ne);
var to = function (t, e, i, r) {
    var n = arguments.length,
      o =
        n < 3
          ? e
          : r === null
          ? (r = Object.getOwnPropertyDescriptor(e, i))
          : r,
      s;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      o = Reflect.decorate(t, e, i, r);
    else
      for (var a = t.length - 1; a >= 0; a--)
        (s = t[a]) && (o = (n < 3 ? s(o) : n > 3 ? s(e, i, o) : s(e, i)) || o);
    return n > 3 && o && Object.defineProperty(e, i, o), o;
  },
  ai = class extends m {
    constructor() {
      super(),
        (this.unsubscribe = []),
        (this.namespace = u.state.activeChain),
        this.unsubscribe.push(
          u.subscribeKey("activeChain", (e) => {
            this.namespace = e;
          })
        );
    }
    render() {
      if (!this.namespace) return null;
      let e = y.getConnectorId(this.namespace),
        i = y.getAuthConnector();
      return l`
      ${
        i && e === $.CONNECTOR_ID.AUTH
          ? this.walletFeaturesTemplate()
          : this.defaultTemplate()
      }
    `;
    }
    walletFeaturesTemplate() {
      return l`<w3m-account-wallet-features-widget></w3m-account-wallet-features-widget>`;
    }
    defaultTemplate() {
      return l`<w3m-account-default-widget></w3m-account-default-widget>`;
    }
  };
to([p()], ai.prototype, "namespace", void 0);
ai = to([d("w3m-account-view")], ai);
var io = g`
  wui-image {
    width: 24px;
    height: 24px;
    border-radius: ${({ borderRadius: t }) => t[2]};
  }

  wui-image,
  .icon-box {
    width: 32px;
    height: 32px;
    border-radius: ${({ borderRadius: t }) => t[2]};
  }

  wui-icon:not(.custom-icon, .icon-badge) {
    cursor: pointer;
  }

  .icon-box {
    position: relative;
    border-radius: ${({ borderRadius: t }) => t[2]};
    background-color: ${({ tokens: t }) => t.theme.foregroundSecondary};
  }

  .icon-badge {
    position: absolute;
    top: 18px;
    left: 23px;
    z-index: 3;
    background-color: ${({ tokens: t }) => t.theme.foregroundPrimary};
    border: 2px solid ${({ tokens: t }) => t.theme.backgroundPrimary};
    border-radius: 50%;
    padding: ${({ spacing: t }) => t["01"]};
  }

  .icon-badge {
    width: 8px;
    height: 8px;
  }
`;
var J = function (t, e, i, r) {
    var n = arguments.length,
      o =
        n < 3
          ? e
          : r === null
          ? (r = Object.getOwnPropertyDescriptor(e, i))
          : r,
      s;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      o = Reflect.decorate(t, e, i, r);
    else
      for (var a = t.length - 1; a >= 0; a--)
        (s = t[a]) && (o = (n < 3 ? s(o) : n > 3 ? s(e, i, o) : s(e, i)) || o);
    return n > 3 && o && Object.defineProperty(e, i, o), o;
  },
  B = class extends m {
    constructor() {
      super(...arguments),
        (this.address = ""),
        (this.profileName = ""),
        (this.content = []),
        (this.alt = ""),
        (this.imageSrc = ""),
        (this.icon = void 0),
        (this.iconSize = "md"),
        (this.iconBadge = void 0),
        (this.iconBadgeSize = "md"),
        (this.buttonVariant = "neutral-primary"),
        (this.enableMoreButton = !1),
        (this.charsStart = 4),
        (this.charsEnd = 6);
    }
    render() {
      return l`
      <wui-flex flexDirection="column" rowgap="2">
        ${this.topTemplate()} ${this.bottomTemplate()}
      </wui-flex>
    `;
    }
    topTemplate() {
      return l`
      <wui-flex alignItems="flex-start" justifyContent="space-between">
        ${this.imageOrIconTemplate()}
        <wui-icon-link
          variant="secondary"
          size="md"
          icon="copy"
          @click=${this.dispatchCopyEvent}
        ></wui-icon-link>
        <wui-icon-link
          variant="secondary"
          size="md"
          icon="externalLink"
          @click=${this.dispatchExternalLinkEvent}
        ></wui-icon-link>
        ${
          this.enableMoreButton
            ? l`<wui-icon-link
              variant="secondary"
              size="md"
              icon="threeDots"
              @click=${this.dispatchMoreButtonEvent}
              data-testid="wui-active-profile-wallet-item-more-button"
            ></wui-icon-link>`
            : null
        }
      </wui-flex>
    `;
    }
    bottomTemplate() {
      return l` <wui-flex flexDirection="column">${this.contentTemplate()}</wui-flex> `;
    }
    imageOrIconTemplate() {
      return this.icon
        ? l`
        <wui-flex flexGrow="1" alignItems="center">
          <wui-flex alignItems="center" justifyContent="center" class="icon-box">
            <wui-icon size="lg" color="default" name=${
              this.icon
            } class="custom-icon"></wui-icon>

            ${
              this.iconBadge
                ? l`<wui-icon
                  color="accent-primary"
                  size="inherit"
                  name=${this.iconBadge}
                  class="icon-badge"
                ></wui-icon>`
                : null
            }
          </wui-flex>
        </wui-flex>
      `
        : l`
      <wui-flex flexGrow="1" alignItems="center">
        <wui-image objectFit="contain" src=${this.imageSrc} alt=${this.alt}></wui-image>
      </wui-flex>
    `;
    }
    contentTemplate() {
      return this.content.length === 0
        ? null
        : l`
      <wui-flex flexDirection="column" rowgap="3">
        ${this.content.map((e) => this.labelAndTagTemplate(e))}
      </wui-flex>
    `;
    }
    labelAndTagTemplate({
      address: e,
      profileName: i,
      label: r,
      description: n,
      enableButton: o,
      buttonType: s,
      buttonLabel: a,
      buttonVariant: A,
      tagVariant: S,
      tagLabel: L,
      alignItems: G = "flex-end",
    }) {
      return l`
      <wui-flex justifyContent="space-between" alignItems=${G} columngap="1">
        <wui-flex flexDirection="column" rowgap="01">
          ${
            r
              ? l`<wui-text variant="sm-medium" color="secondary">${r}</wui-text>`
              : null
          }

          <wui-flex alignItems="center" columngap="1">
            <wui-text variant="md-regular" color="primary">
              ${P.getTruncateString({
                string: i || e,
                charsStart: i ? 16 : this.charsStart,
                charsEnd: i ? 0 : this.charsEnd,
                truncate: i ? "end" : "middle",
              })}
            </wui-text>

            ${S && L ? l`<wui-tag variant=${S} size="sm">${L}</wui-tag>` : null}
          </wui-flex>

          ${
            n
              ? l`<wui-text variant="sm-regular" color="secondary">${n}</wui-text>`
              : null
          }
        </wui-flex>

        ${
          o
            ? this.buttonTemplate({
                buttonType: s,
                buttonLabel: a,
                buttonVariant: A,
              })
            : null
        }
      </wui-flex>
    `;
    }
    buttonTemplate({ buttonType: e, buttonLabel: i, buttonVariant: r }) {
      return l`
      <wui-button
        size="sm"
        variant=${r}
        @click=${
          e === "disconnect"
            ? this.dispatchDisconnectEvent.bind(this)
            : this.dispatchSwitchEvent.bind(this)
        }
        data-testid=${
          e === "disconnect"
            ? "wui-active-profile-wallet-item-disconnect-button"
            : "wui-active-profile-wallet-item-switch-button"
        }
      >
        ${i}
      </wui-button>
    `;
    }
    dispatchDisconnectEvent() {
      this.dispatchEvent(
        new CustomEvent("disconnect", { bubbles: !0, composed: !0 })
      );
    }
    dispatchSwitchEvent() {
      this.dispatchEvent(
        new CustomEvent("switch", { bubbles: !0, composed: !0 })
      );
    }
    dispatchExternalLinkEvent() {
      this.dispatchEvent(
        new CustomEvent("externalLink", { bubbles: !0, composed: !0 })
      );
    }
    dispatchMoreButtonEvent() {
      this.dispatchEvent(
        new CustomEvent("more", { bubbles: !0, composed: !0 })
      );
    }
    dispatchCopyEvent() {
      this.dispatchEvent(
        new CustomEvent("copy", { bubbles: !0, composed: !0 })
      );
    }
  };
B.styles = [v, T, io];
J([c()], B.prototype, "address", void 0);
J([c()], B.prototype, "profileName", void 0);
J([c({ type: Array })], B.prototype, "content", void 0);
J([c()], B.prototype, "alt", void 0);
J([c()], B.prototype, "imageSrc", void 0);
J([c()], B.prototype, "icon", void 0);
J([c()], B.prototype, "iconSize", void 0);
J([c()], B.prototype, "iconBadge", void 0);
J([c()], B.prototype, "iconBadgeSize", void 0);
J([c()], B.prototype, "buttonVariant", void 0);
J([c({ type: Boolean })], B.prototype, "enableMoreButton", void 0);
J([c({ type: Number })], B.prototype, "charsStart", void 0);
J([c({ type: Number })], B.prototype, "charsEnd", void 0);
B = J([d("wui-active-profile-wallet-item")], B);
var oo = g`
  wui-image,
  .icon-box {
    width: 32px;
    height: 32px;
    border-radius: ${({ borderRadius: t }) => t[2]};
  }

  .right-icon {
    cursor: pointer;
  }

  .icon-box {
    position: relative;
    background-color: ${({ tokens: t }) => t.theme.foregroundPrimary};
  }

  .icon-badge {
    position: absolute;
    top: 18px;
    left: 23px;
    z-index: 3;
    background-color: ${({ tokens: t }) => t.theme.foregroundPrimary};
    border: 2px solid ${({ tokens: t }) => t.theme.backgroundPrimary};
    border-radius: 50%;
    padding: ${({ spacing: t }) => t["01"]};
  }

  .icon-badge {
    width: 8px;
    height: 8px;
  }
`;
var z = function (t, e, i, r) {
    var n = arguments.length,
      o =
        n < 3
          ? e
          : r === null
          ? (r = Object.getOwnPropertyDescriptor(e, i))
          : r,
      s;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      o = Reflect.decorate(t, e, i, r);
    else
      for (var a = t.length - 1; a >= 0; a--)
        (s = t[a]) && (o = (n < 3 ? s(o) : n > 3 ? s(e, i, o) : s(e, i)) || o);
    return n > 3 && o && Object.defineProperty(e, i, o), o;
  },
  D = class extends m {
    constructor() {
      super(...arguments),
        (this.address = ""),
        (this.profileName = ""),
        (this.alt = ""),
        (this.buttonLabel = ""),
        (this.buttonVariant = "accent-primary"),
        (this.imageSrc = ""),
        (this.icon = void 0),
        (this.iconSize = "md"),
        (this.iconBadgeSize = "md"),
        (this.rightIcon = "signOut"),
        (this.rightIconSize = "md"),
        (this.loading = !1),
        (this.charsStart = 4),
        (this.charsEnd = 6);
    }
    render() {
      return l`
      <wui-flex alignItems="center" columngap="2">
        ${this.imageOrIconTemplate()} ${this.labelAndDescriptionTemplate()}
        ${this.buttonActionTemplate()}
      </wui-flex>
    `;
    }
    imageOrIconTemplate() {
      return this.icon
        ? l`
        <wui-flex alignItems="center" justifyContent="center" class="icon-box">
          <wui-flex alignItems="center" justifyContent="center" class="icon-box">
            <wui-icon size="lg" color="default" name=${
              this.icon
            } class="custom-icon"></wui-icon>

            ${
              this.iconBadge
                ? l`<wui-icon
                  color="default"
                  size="inherit"
                  name=${this.iconBadge}
                  class="icon-badge"
                ></wui-icon>`
                : null
            }
          </wui-flex>
        </wui-flex>
      `
        : l`<wui-image objectFit="contain" src=${this.imageSrc} alt=${this.alt}></wui-image>`;
    }
    labelAndDescriptionTemplate() {
      return l`
      <wui-flex
        flexDirection="column"
        flexGrow="1"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <wui-text variant="lg-regular" color="primary">
          ${P.getTruncateString({
            string: this.profileName || this.address,
            charsStart: this.profileName ? 16 : this.charsStart,
            charsEnd: this.profileName ? 0 : this.charsEnd,
            truncate: this.profileName ? "end" : "middle",
          })}
        </wui-text>
      </wui-flex>
    `;
    }
    buttonActionTemplate() {
      return l`
      <wui-flex columngap="1" alignItems="center" justifyContent="center">
        <wui-button
          size="sm"
          variant=${this.buttonVariant}
          .loading=${this.loading}
          @click=${this.handleButtonClick}
          data-testid="wui-inactive-profile-wallet-item-button"
        >
          ${this.buttonLabel}
        </wui-button>

        <wui-icon-link
          variant="secondary"
          size="md"
          icon=${f(this.rightIcon)}
          class="right-icon"
          @click=${this.handleIconClick}
        ></wui-icon-link>
      </wui-flex>
    `;
    }
    handleButtonClick() {
      this.dispatchEvent(
        new CustomEvent("buttonClick", { bubbles: !0, composed: !0 })
      );
    }
    handleIconClick() {
      this.dispatchEvent(
        new CustomEvent("iconClick", { bubbles: !0, composed: !0 })
      );
    }
  };
D.styles = [v, T, oo];
z([c()], D.prototype, "address", void 0);
z([c()], D.prototype, "profileName", void 0);
z([c()], D.prototype, "alt", void 0);
z([c()], D.prototype, "buttonLabel", void 0);
z([c()], D.prototype, "buttonVariant", void 0);
z([c()], D.prototype, "imageSrc", void 0);
z([c()], D.prototype, "icon", void 0);
z([c()], D.prototype, "iconSize", void 0);
z([c()], D.prototype, "iconBadge", void 0);
z([c()], D.prototype, "iconBadgeSize", void 0);
z([c()], D.prototype, "rightIcon", void 0);
z([c()], D.prototype, "rightIconSize", void 0);
z([c({ type: Boolean })], D.prototype, "loading", void 0);
z([c({ type: Number })], D.prototype, "charsStart", void 0);
z([c({ type: Number })], D.prototype, "charsEnd", void 0);
D = z([d("wui-inactive-profile-wallet-item")], D);
var Lt = {
  getAuthData(t) {
    let e = t.connectorId === $.CONNECTOR_ID.AUTH;
    if (!e) return { isAuth: !1, icon: void 0, iconSize: void 0, name: void 0 };
    let i = t?.auth?.name ?? ie.getConnectedSocialProvider(),
      r = t?.auth?.username ?? ie.getConnectedSocialUsername(),
      o = y.getAuthConnector()?.provider.getEmail() ?? "";
    return {
      isAuth: !0,
      icon: i ?? "mail",
      iconSize: i ? "xl" : "md",
      name: e
        ? le.getAuthName({ email: o, socialUsername: r, socialProvider: i })
        : void 0,
    };
  },
};
var ro = g`
  :host {
    --connect-scroll--top-opacity: 0;
    --connect-scroll--bottom-opacity: 0;
  }

  .balance-amount {
    flex: 1;
  }

  .wallet-list {
    scrollbar-width: none;
    overflow-y: scroll;
    overflow-x: hidden;
    transition: opacity ${({ easings: t }) => t["ease-out-power-1"]}
      ${({ durations: t }) => t.md};
    will-change: opacity;
    mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, calc(1 - var(--connect-scroll--top-opacity))) 0px,
      rgba(200, 200, 200, calc(1 - var(--connect-scroll--top-opacity))) 1px,
      black 40px,
      black calc(100% - 40px),
      rgba(155, 155, 155, calc(1 - var(--connect-scroll--bottom-opacity))) calc(100% - 1px),
      rgba(0, 0, 0, calc(1 - var(--connect-scroll--bottom-opacity))) 100%
    );
  }

  .active-wallets {
    background-color: ${({ tokens: t }) => t.theme.foregroundPrimary};
    border-radius: ${({ borderRadius: t }) => t[4]};
  }

  .active-wallets-box {
    height: 330px;
  }

  .empty-wallet-list-box {
    height: 400px;
  }

  .empty-box {
    width: 100%;
    padding: ${({ spacing: t }) => t[4]};
    background-color: ${({ tokens: t }) => t.theme.foregroundPrimary};
    border-radius: ${({ borderRadius: t }) => t[4]};
  }

  wui-separator {
    margin: ${({ spacing: t }) => t[2]} 0 ${({ spacing: t }) => t[2]} 0;
  }

  .active-connection {
    padding: ${({ spacing: t }) => t[2]};
  }

  .recent-connection {
    padding: ${({ spacing: t }) => t[2]} 0 ${({ spacing: t }) => t[2]} 0;
  }

  @media (max-width: 430px) {
    .active-wallets-box,
    .empty-wallet-list-box {
      height: auto;
      max-height: clamp(360px, 470px, 80vh);
    }
  }
`;
var se = function (t, e, i, r) {
    var n = arguments.length,
      o =
        n < 3
          ? e
          : r === null
          ? (r = Object.getOwnPropertyDescriptor(e, i))
          : r,
      s;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      o = Reflect.decorate(t, e, i, r);
    else
      for (var a = t.length - 1; a >= 0; a--)
        (s = t[a]) && (o = (n < 3 ? s(o) : n > 3 ? s(e, i, o) : s(e, i)) || o);
    return n > 3 && o && Object.defineProperty(e, i, o), o;
  },
  de = {
    ADDRESS_DISPLAY: { START: 4, END: 6 },
    BADGE: { SIZE: "md", ICON: "lightbulb" },
    SCROLL_THRESHOLD: 50,
    OPACITY_RANGE: [0, 1],
  },
  At = { eip155: "ethereum", solana: "solana", bip122: "bitcoin" },
  ur = [
    { namespace: "eip155", icon: At.eip155, label: "EVM" },
    { namespace: "solana", icon: At.solana, label: "Solana" },
    { namespace: "bip122", icon: At.bip122, label: "Bitcoin" },
  ],
  dr = {
    eip155: {
      title: "Add EVM Wallet",
      description: "Add your first EVM wallet",
    },
    solana: {
      title: "Add Solana Wallet",
      description: "Add your first Solana wallet",
    },
    bip122: {
      title: "Add Bitcoin Wallet",
      description: "Add your first Bitcoin wallet",
    },
  },
  q = class extends m {
    constructor() {
      super(),
        (this.unsubscribers = []),
        (this.currentTab = 0),
        (this.namespace = u.state.activeChain),
        (this.namespaces = Array.from(u.state.chains.keys())),
        (this.caipAddress = void 0),
        (this.profileName = void 0),
        (this.activeConnectorIds = y.state.activeConnectorIds),
        (this.lastSelectedAddress = ""),
        (this.lastSelectedConnectorId = ""),
        (this.isSwitching = !1),
        (this.caipNetwork = u.state.activeCaipNetwork),
        (this.user = u.getAccountData()?.user),
        (this.remoteFeatures = b.state.remoteFeatures),
        (this.currentTab = this.namespace
          ? this.namespaces.indexOf(this.namespace)
          : 0),
        (this.caipAddress = u.getAccountData(this.namespace)?.caipAddress),
        (this.profileName = u.getAccountData(this.namespace)?.profileName),
        this.unsubscribers.push(
          x.subscribeKey("connections", () => this.onConnectionsChange()),
          x.subscribeKey("recentConnections", () => this.requestUpdate()),
          y.subscribeKey("activeConnectorIds", (e) => {
            this.activeConnectorIds = e;
          }),
          u.subscribeKey("activeCaipNetwork", (e) => (this.caipNetwork = e)),
          u.subscribeChainProp("accountState", (e) => {
            this.user = e?.user;
          }),
          b.subscribeKey("remoteFeatures", (e) => (this.remoteFeatures = e))
        ),
        (this.chainListener = u.subscribeChainProp(
          "accountState",
          (e) => {
            (this.caipAddress = e?.caipAddress),
              (this.profileName = e?.profileName);
          },
          this.namespace
        ));
    }
    disconnectedCallback() {
      this.unsubscribers.forEach((e) => e()),
        this.resizeObserver?.disconnect(),
        this.removeScrollListener(),
        this.chainListener?.();
    }
    firstUpdated() {
      let e = this.shadowRoot?.querySelector(".wallet-list");
      if (!e) return;
      let i = () => this.updateScrollOpacity(e);
      requestAnimationFrame(i),
        e.addEventListener("scroll", i),
        (this.resizeObserver = new ResizeObserver(i)),
        this.resizeObserver.observe(e),
        i();
    }
    render() {
      let e = this.namespace;
      if (!e) throw new Error("Namespace is not set");
      return l`
      <wui-flex flexDirection="column" .padding=${["0", "4", "4", "4"]} gap="4">
        ${this.renderTabs()} ${this.renderHeader(e)} ${this.renderConnections(
        e
      )}
        ${this.renderAddConnectionButton(e)}
      </wui-flex>
    `;
    }
    renderTabs() {
      let e = ur.filter((r) => this.namespaces.includes(r.namespace));
      return e.length > 1
        ? l`
        <wui-tabs
          .onTabChange=${(r) => this.handleTabChange(r)}
          .activeTab=${this.currentTab}
          .tabs=${e}
        ></wui-tabs>
      `
        : null;
    }
    renderHeader(e) {
      let r =
        this.getActiveConnections(e).flatMap(({ accounts: n }) => n).length +
        (this.caipAddress ? 1 : 0);
      return l`
      <wui-flex alignItems="center" columngap="1">
        <wui-icon
          size="sm"
          name=${At[e] ?? At.eip155}
        ></wui-icon>
        <wui-text color="secondary" variant="lg-regular"
          >${r > 1 ? "Wallets" : "Wallet"}</wui-text
        >
        <wui-text
          color="primary"
          variant="lg-regular"
          class="balance-amount"
          data-testid="balance-amount"
        >
          ${r}
        </wui-text>
        <wui-link
          color="secondary"
          variant="secondary"
          @click=${() => x.disconnect({ namespace: e })}
          ?disabled=${!this.hasAnyConnections(e)}
          data-testid="disconnect-all-button"
        >
          Disconnect All
        </wui-link>
      </wui-flex>
    `;
    }
    renderConnections(e) {
      let i = this.hasAnyConnections(e);
      return l`
      <wui-flex flexDirection="column" class=${Ot({
        "wallet-list": !0,
        "active-wallets-box": i,
        "empty-wallet-list-box": !i,
      })} rowgap="3">
        ${i ? this.renderActiveConnections(e) : this.renderEmptyState(e)}
      </wui-flex>
    `;
    }
    renderActiveConnections(e) {
      let i = this.getActiveConnections(e),
        r = this.activeConnectorIds[e],
        n = this.getPlainAddress();
      return l`
      ${
        n || r || i.length > 0
          ? l`<wui-flex
            flexDirection="column"
            .padding=${["4", "0", "4", "0"]}
            class="active-wallets"
          >
            ${this.renderActiveProfile(e)} ${this.renderActiveConnectionsList(
              e
            )}
          </wui-flex>`
          : null
      }
      ${this.renderRecentConnections(e)}
    `;
    }
    renderActiveProfile(e) {
      let i = this.activeConnectorIds[e];
      if (!i) return null;
      let { connections: r } = ve.getConnectionsData(e),
        n = y.getConnectorById(i),
        o = k.getConnectorImage(n),
        s = this.getPlainAddress();
      if (!s) return null;
      let a = e === $.CHAIN.BITCOIN,
        A = Lt.getAuthData({ connectorId: i, accounts: [] }),
        S =
          this.getActiveConnections(e).flatMap((te) => te.accounts).length > 0,
        L = r.find((te) => te.connectorId === i),
        G = L?.accounts.filter((te) => !H.isLowerCaseMatch(te.address, s));
      return l`
      <wui-flex flexDirection="column" .padding=${["0", "4", "0", "4"]}>
        <wui-active-profile-wallet-item
          address=${s}
          alt=${n?.name}
          .content=${this.getProfileContent({
            address: s,
            connections: r,
            connectorId: i,
            namespace: e,
          })}
          .charsStart=${de.ADDRESS_DISPLAY.START}
          .charsEnd=${de.ADDRESS_DISPLAY.END}
          .icon=${A.icon}
          .iconSize=${A.iconSize}
          .iconBadge=${this.isSmartAccount(s) ? de.BADGE.ICON : void 0}
          .iconBadgeSize=${this.isSmartAccount(s) ? de.BADGE.SIZE : void 0}
          imageSrc=${o}
          ?enableMoreButton=${A.isAuth}
          @copy=${() => this.handleCopyAddress(s)}
          @disconnect=${() => this.handleDisconnect(e, i)}
          @switch=${() => {
            a && L && G?.[0] && this.handleSwitchWallet(L, G[0].address, e);
          }}
          @externalLink=${() => this.handleExternalLink(s)}
          @more=${() => this.handleMore()}
          data-testid="wui-active-profile-wallet-item"
        ></wui-active-profile-wallet-item>
        ${S ? l`<wui-separator></wui-separator>` : null}
      </wui-flex>
    `;
    }
    renderActiveConnectionsList(e) {
      let i = this.getActiveConnections(e);
      return i.length === 0
        ? null
        : l`
      <wui-flex flexDirection="column" .padding=${["0", "2", "0", "2"]}>
        ${this.renderConnectionList(i, !1, e)}
      </wui-flex>
    `;
    }
    renderRecentConnections(e) {
      let { recentConnections: i } = ve.getConnectionsData(e);
      return i.flatMap((n) => n.accounts).length === 0
        ? null
        : l`
      <wui-flex flexDirection="column" .padding=${[
        "0",
        "2",
        "0",
        "2",
      ]} rowGap="2">
        <wui-text color="secondary" variant="sm-medium" data-testid="recently-connected-text"
          >RECENTLY CONNECTED</wui-text
        >
        <wui-flex flexDirection="column" .padding=${["0", "2", "0", "2"]}>
          ${this.renderConnectionList(i, !0, e)}
        </wui-flex>
      </wui-flex>
    `;
    }
    renderConnectionList(e, i, r) {
      return e
        .filter((n) => n.accounts.length > 0)
        .map((n, o) => {
          let s = y.getConnectorById(n.connectorId),
            a = k.getConnectorImage(s) ?? "",
            A = Lt.getAuthData(n);
          return n.accounts.map((S, L) => {
            let G = o !== 0 || L !== 0,
              te = this.isAccountLoading(n.connectorId, S.address);
            return l`
            <wui-flex flexDirection="column">
              ${G ? l`<wui-separator></wui-separator>` : null}
              <wui-inactive-profile-wallet-item
                address=${S.address}
                alt=${n.connectorId}
                buttonLabel=${i ? "Connect" : "Switch"}
                buttonVariant=${i ? "neutral-secondary" : "accent-secondary"}
                rightIcon=${i ? "bin" : "power"}
                rightIconSize="sm"
                class=${i ? "recent-connection" : "active-connection"}
                data-testid=${i ? "recent-connection" : "active-connection"}
                imageSrc=${a}
                .iconBadge=${
                  this.isSmartAccount(S.address) ? de.BADGE.ICON : void 0
                }
                .iconBadgeSize=${
                  this.isSmartAccount(S.address) ? de.BADGE.SIZE : void 0
                }
                .icon=${A.icon}
                .iconSize=${A.iconSize}
                .loading=${te}
                .showBalance=${!1}
                .charsStart=${de.ADDRESS_DISPLAY.START}
                .charsEnd=${de.ADDRESS_DISPLAY.END}
                @buttonClick=${() => this.handleSwitchWallet(n, S.address, r)}
                @iconClick=${() =>
                  this.handleWalletAction({
                    connection: n,
                    address: S.address,
                    isRecentConnection: i,
                    namespace: r,
                  })}
              ></wui-inactive-profile-wallet-item>
            </wui-flex>
          `;
          });
        });
    }
    renderAddConnectionButton(e) {
      if (
        (!this.isMultiWalletEnabled() && this.caipAddress) ||
        !this.hasAnyConnections(e)
      )
        return null;
      let { title: i } = this.getChainLabelInfo(e);
      return l`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="plus"
        iconSize="sm"
        ?chevron=${!0}
        @click=${() => this.handleAddConnection(e)}
        data-testid="add-connection-button"
      >
        <wui-text variant="md-medium" color="secondary">${i}</wui-text>
      </wui-list-item>
    `;
    }
    renderEmptyState(e) {
      let { title: i, description: r } = this.getChainLabelInfo(e);
      return l`
      <wui-flex alignItems="flex-start" class="empty-template" data-testid="empty-template">
        <wui-flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          rowgap="3"
          class="empty-box"
        >
          <wui-icon-box size="xl" icon="wallet" color="secondary"></wui-icon-box>

          <wui-flex flexDirection="column" alignItems="center" justifyContent="center" gap="1">
            <wui-text color="primary" variant="lg-regular" data-testid="empty-state-text"
              >No wallet connected</wui-text
            >
            <wui-text color="secondary" variant="md-regular" data-testid="empty-state-description"
              >${r}</wui-text
            >
          </wui-flex>

          <wui-link
            @click=${() => this.handleAddConnection(e)}
            data-testid="empty-state-button"
            icon="plus"
          >
            ${i}
          </wui-link>
        </wui-flex>
      </wui-flex>
    `;
    }
    handleTabChange(e) {
      let i = this.namespaces[e];
      i &&
        (this.chainListener?.(),
        (this.currentTab = this.namespaces.indexOf(i)),
        (this.namespace = i),
        (this.caipAddress = u.getAccountData(i)?.caipAddress),
        (this.profileName = u.getAccountData(i)?.profileName),
        (this.chainListener = u.subscribeChainProp(
          "accountState",
          (r) => {
            this.caipAddress = r?.caipAddress;
          },
          i
        )));
    }
    handleSwitchWallet(e, i, r) {
      return R(this, null, function* () {
        try {
          (this.isSwitching = !0),
            (this.lastSelectedConnectorId = e.connectorId),
            (this.lastSelectedAddress = i),
            this.caipNetwork?.chainNamespace !== r &&
              e?.caipNetwork &&
              (y.setFilterByNamespace(r),
              yield u.switchActiveNetwork(e?.caipNetwork)),
            yield x.switchConnection({
              connection: e,
              address: i,
              namespace: r,
              closeModalOnConnect: !1,
              onChange({ hasSwitchedAccount: o, hasSwitchedWallet: s }) {
                s
                  ? I.showSuccess("Wallet switched")
                  : o && I.showSuccess("Account switched");
              },
            });
        } catch {
          I.showError("Failed to switch wallet");
        } finally {
          this.isSwitching = !1;
        }
      });
    }
    handleWalletAction(e) {
      let {
        connection: i,
        address: r,
        isRecentConnection: n,
        namespace: o,
      } = e;
      n
        ? (ie.deleteAddressFromConnection({
            connectorId: i.connectorId,
            address: r,
            namespace: o,
          }),
          x.syncStorageConnections(),
          I.showSuccess("Wallet deleted"))
        : this.handleDisconnect(o, i.connectorId);
    }
    handleDisconnect(e, i) {
      return R(this, null, function* () {
        try {
          yield x.disconnect({ id: i, namespace: e }),
            I.showSuccess("Wallet disconnected");
        } catch {
          I.showError("Failed to disconnect wallet");
        }
      });
    }
    handleCopyAddress(e) {
      w.copyToClopboard(e), I.showSuccess("Address copied");
    }
    handleMore() {
      h.push("AccountSettings");
    }
    handleExternalLink(e) {
      let i = this.caipNetwork?.blockExplorers?.default.url;
      i && w.openHref(`${i}/address/${e}`, "_blank");
    }
    handleAddConnection(e) {
      y.setFilterByNamespace(e),
        h.push("Connect", { addWalletForNamespace: e });
    }
    getChainLabelInfo(e) {
      return (
        dr[e] ?? { title: "Add Wallet", description: "Add your first wallet" }
      );
    }
    isSmartAccount(e) {
      if (!this.namespace) return !1;
      let i = this.user?.accounts?.find((r) => r.type === "smartAccount");
      return i && e ? H.isLowerCaseMatch(i.address, e) : !1;
    }
    getPlainAddress() {
      return this.caipAddress ? w.getPlainAddress(this.caipAddress) : void 0;
    }
    getActiveConnections(e) {
      let i = this.activeConnectorIds[e],
        { connections: r } = ve.getConnectionsData(e),
        [n] = r.filter((A) => H.isLowerCaseMatch(A.connectorId, i));
      if (!i) return r;
      let o = e === $.CHAIN.BITCOIN,
        { address: s } = this.caipAddress
          ? Ci.parseCaipAddress(this.caipAddress)
          : {},
        a = [...(s ? [s] : [])];
      return (
        o && n && (a = n.accounts.map((A) => A.address) || []),
        ve.excludeConnectorAddressFromConnections({
          connectorId: i,
          addresses: a,
          connections: r,
        })
      );
    }
    hasAnyConnections(e) {
      let i = this.getActiveConnections(e),
        { recentConnections: r } = ve.getConnectionsData(e);
      return !!this.caipAddress || i.length > 0 || r.length > 0;
    }
    isAccountLoading(e, i) {
      return (
        H.isLowerCaseMatch(this.lastSelectedConnectorId, e) &&
        H.isLowerCaseMatch(this.lastSelectedAddress, i) &&
        this.isSwitching
      );
    }
    getProfileContent(e) {
      let { address: i, connections: r, connectorId: n, namespace: o } = e,
        [s] = r.filter((A) => H.isLowerCaseMatch(A.connectorId, n));
      if (
        o === $.CHAIN.BITCOIN &&
        s?.accounts.every((A) => typeof A.type == "string")
      )
        return this.getBitcoinProfileContent(s.accounts, i);
      let a = Lt.getAuthData({ connectorId: n, accounts: [] });
      return [
        Je(
          {
            address: i,
            tagLabel: "Active",
            tagVariant: "success",
            enableButton: !0,
            profileName: this.profileName,
            buttonType: "disconnect",
            buttonLabel: "Disconnect",
            buttonVariant: "neutral-secondary",
          },
          a.isAuth
            ? {
                description: this.isSmartAccount(i)
                  ? "Smart Account"
                  : "EOA Account",
              }
            : {}
        ),
      ];
    }
    getBitcoinProfileContent(e, i) {
      let r = e.length > 1,
        n = this.getPlainAddress();
      return e.map((o) => {
        let s = H.isLowerCaseMatch(o.address, n),
          a = "PAYMENT";
        return (
          o.type === "ordinal" && (a = "ORDINALS"),
          Je(
            {
              address: o.address,
              tagLabel: H.isLowerCaseMatch(o.address, i) ? "Active" : void 0,
              tagVariant: H.isLowerCaseMatch(o.address, i) ? "success" : void 0,
              enableButton: !0,
            },
            r
              ? {
                  label: a,
                  alignItems: "flex-end",
                  buttonType: s ? "disconnect" : "switch",
                  buttonLabel: s ? "Disconnect" : "Switch",
                  buttonVariant: s ? "neutral-secondary" : "accent-secondary",
                }
              : {
                  alignItems: "center",
                  buttonType: "disconnect",
                  buttonLabel: "Disconnect",
                  buttonVariant: "neutral-secondary",
                }
          )
        );
      });
    }
    removeScrollListener() {
      let e = this.shadowRoot?.querySelector(".wallet-list");
      e &&
        e.removeEventListener("scroll", () => this.handleConnectListScroll());
    }
    handleConnectListScroll() {
      let e = this.shadowRoot?.querySelector(".wallet-list");
      e && this.updateScrollOpacity(e);
    }
    isMultiWalletEnabled() {
      return !!this.remoteFeatures?.multiWallet;
    }
    updateScrollOpacity(e) {
      e.style.setProperty(
        "--connect-scroll--top-opacity",
        it
          .interpolate([0, de.SCROLL_THRESHOLD], de.OPACITY_RANGE, e.scrollTop)
          .toString()
      ),
        e.style.setProperty(
          "--connect-scroll--bottom-opacity",
          it
            .interpolate(
              [0, de.SCROLL_THRESHOLD],
              de.OPACITY_RANGE,
              e.scrollHeight - e.scrollTop - e.offsetHeight
            )
            .toString()
        );
    }
    onConnectionsChange() {
      if (this.isMultiWalletEnabled() && this.namespace) {
        let { connections: e } = ve.getConnectionsData(this.namespace);
        e.length === 0 && h.reset("ProfileWallets");
      }
      this.requestUpdate();
    }
  };
q.styles = ro;
se([p()], q.prototype, "currentTab", void 0);
se([p()], q.prototype, "namespace", void 0);
se([p()], q.prototype, "namespaces", void 0);
se([p()], q.prototype, "caipAddress", void 0);
se([p()], q.prototype, "profileName", void 0);
se([p()], q.prototype, "activeConnectorIds", void 0);
se([p()], q.prototype, "lastSelectedAddress", void 0);
se([p()], q.prototype, "lastSelectedConnectorId", void 0);
se([p()], q.prototype, "isSwitching", void 0);
se([p()], q.prototype, "caipNetwork", void 0);
se([p()], q.prototype, "user", void 0);
se([p()], q.prototype, "remoteFeatures", void 0);
q = se([d("w3m-profile-wallets-view")], q);
var lt = function (t, e, i, r) {
    var n = arguments.length,
      o =
        n < 3
          ? e
          : r === null
          ? (r = Object.getOwnPropertyDescriptor(e, i))
          : r,
      s;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      o = Reflect.decorate(t, e, i, r);
    else
      for (var a = t.length - 1; a >= 0; a--)
        (s = t[a]) && (o = (n < 3 ? s(o) : n > 3 ? s(e, i, o) : s(e, i)) || o);
    return n > 3 && o && Object.defineProperty(e, i, o), o;
  },
  Ve = class extends m {
    constructor() {
      super(),
        (this.unsubscribe = []),
        (this.activeCaipNetwork = u.state.activeCaipNetwork),
        (this.features = b.state.features),
        (this.remoteFeatures = b.state.remoteFeatures),
        (this.exchangesLoading = V.state.isLoading),
        (this.exchanges = V.state.exchanges),
        this.unsubscribe.push(
          b.subscribeKey("features", (e) => (this.features = e)),
          b.subscribeKey("remoteFeatures", (e) => (this.remoteFeatures = e)),
          u.subscribeKey("activeCaipNetwork", (e) => {
            (this.activeCaipNetwork = e), this.setDefaultPaymentAsset();
          }),
          V.subscribeKey("isLoading", (e) => (this.exchangesLoading = e)),
          V.subscribeKey("exchanges", (e) => (this.exchanges = e))
        );
    }
    disconnectedCallback() {
      this.unsubscribe.forEach((e) => e());
    }
    firstUpdated() {
      return R(this, null, function* () {
        V.isPayWithExchangeSupported() &&
          (yield this.setDefaultPaymentAsset(), yield V.fetchExchanges());
      });
    }
    render() {
      return l`
      <wui-flex flexDirection="column" .padding=${["1", "3", "3", "3"]} gap="2">
        ${this.onrampTemplate()} ${this.receiveTemplate()} ${this.depositFromExchangeTemplate()}
      </wui-flex>
    `;
    }
    setDefaultPaymentAsset() {
      return R(this, null, function* () {
        if (!this.activeCaipNetwork) return;
        let e = yield V.getAssetsForNetwork(
            this.activeCaipNetwork.caipNetworkId
          ),
          i = e.find((r) => r.metadata.symbol === "USDC") || e[0];
        i && V.setPaymentAsset(i);
      });
    }
    onrampTemplate() {
      if (!this.activeCaipNetwork) return null;
      let e = this.remoteFeatures?.onramp,
        i = W.ONRAMP_SUPPORTED_CHAIN_NAMESPACES.includes(
          this.activeCaipNetwork.chainNamespace
        );
      return !e || !i
        ? null
        : l`
      <wui-list-item
        @click=${this.onBuyCrypto.bind(this)}
        icon="card"
        data-testid="wallet-features-onramp-button"
      >
        <wui-text variant="lg-regular" color="primary">Buy crypto</wui-text>
      </wui-list-item>
    `;
    }
    depositFromExchangeTemplate() {
      return !this.activeCaipNetwork || !V.isPayWithExchangeSupported()
        ? null
        : l`
      <wui-list-item
        @click=${this.onDepositFromExchange.bind(this)}
        icon="arrowBottomCircle"
        data-testid="wallet-features-deposit-from-exchange-button"
        ?loading=${this.exchangesLoading}
        ?disabled=${this.exchangesLoading || !this.exchanges.length}
      >
        <wui-text variant="lg-regular" color="primary">Deposit from exchange</wui-text>
      </wui-list-item>
    `;
    }
    receiveTemplate() {
      return !this.features?.receive
        ? null
        : l`
      <wui-list-item
        @click=${this.onReceive.bind(this)}
        icon="qrCode"
        data-testid="wallet-features-receive-button"
      >
        <wui-text variant="lg-regular" color="primary">Receive funds</wui-text>
      </wui-list-item>
    `;
    }
    onBuyCrypto() {
      h.push("OnRampProviders");
    }
    onReceive() {
      h.push("WalletReceive");
    }
    onDepositFromExchange() {
      V.reset(),
        h.push("PayWithExchange", { redirectView: h.state.data?.redirectView });
    }
  };
lt([p()], Ve.prototype, "activeCaipNetwork", void 0);
lt([p()], Ve.prototype, "features", void 0);
lt([p()], Ve.prototype, "remoteFeatures", void 0);
lt([p()], Ve.prototype, "exchangesLoading", void 0);
lt([p()], Ve.prototype, "exchanges", void 0);
Ve = lt([d("w3m-fund-wallet-view")], Ve);
var no = g`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  label {
    position: relative;
    display: inline-block;
    user-select: none;
    transition:
      background-color ${({ durations: t }) => t.lg}
        ${({ easings: t }) => t["ease-out-power-2"]},
      color ${({ durations: t }) => t.lg} ${({ easings: t }) =>
  t["ease-out-power-2"]},
      border ${({ durations: t }) => t.lg} ${({ easings: t }) =>
  t["ease-out-power-2"]},
      box-shadow ${({ durations: t }) => t.lg}
        ${({ easings: t }) => t["ease-out-power-2"]},
      width ${({ durations: t }) => t.lg} ${({ easings: t }) =>
  t["ease-out-power-2"]},
      height ${({ durations: t }) => t.lg} ${({ easings: t }) =>
  t["ease-out-power-2"]},
      transform ${({ durations: t }) => t.lg}
        ${({ easings: t }) => t["ease-out-power-2"]},
      opacity ${({ durations: t }) => t.lg} ${({ easings: t }) =>
  t["ease-out-power-2"]};
    will-change: background-color, color, border, box-shadow, width, height, transform, opacity;
  }

  input {
    width: 0;
    height: 0;
    opacity: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ colors: t }) => t.neutrals300};
    border-radius: ${({ borderRadius: t }) => t.round};
    border: 1px solid transparent;
    will-change: border;
    transition:
      background-color ${({ durations: t }) => t.lg}
        ${({ easings: t }) => t["ease-out-power-2"]},
      color ${({ durations: t }) => t.lg} ${({ easings: t }) =>
  t["ease-out-power-2"]},
      border ${({ durations: t }) => t.lg} ${({ easings: t }) =>
  t["ease-out-power-2"]},
      box-shadow ${({ durations: t }) => t.lg}
        ${({ easings: t }) => t["ease-out-power-2"]},
      width ${({ durations: t }) => t.lg} ${({ easings: t }) =>
  t["ease-out-power-2"]},
      height ${({ durations: t }) => t.lg} ${({ easings: t }) =>
  t["ease-out-power-2"]},
      transform ${({ durations: t }) => t.lg}
        ${({ easings: t }) => t["ease-out-power-2"]},
      opacity ${({ durations: t }) => t.lg} ${({ easings: t }) =>
  t["ease-out-power-2"]};
    will-change: background-color, color, border, box-shadow, width, height, transform, opacity;
  }

  span:before {
    content: '';
    position: absolute;
    background-color: ${({ colors: t }) => t.white};
    border-radius: 50%;
  }

  /* -- Sizes --------------------------------------------------------- */
  label[data-size='lg'] {
    width: 48px;
    height: 32px;
  }

  label[data-size='md'] {
    width: 40px;
    height: 28px;
  }

  label[data-size='sm'] {
    width: 32px;
    height: 22px;
  }

  label[data-size='lg'] > span:before {
    height: 24px;
    width: 24px;
    left: 4px;
    top: 3px;
  }

  label[data-size='md'] > span:before {
    height: 20px;
    width: 20px;
    left: 4px;
    top: 3px;
  }

  label[data-size='sm'] > span:before {
    height: 16px;
    width: 16px;
    left: 3px;
    top: 2px;
  }

  /* -- Focus states --------------------------------------------------- */
  input:focus-visible:not(:checked) + span,
  input:focus:not(:checked) + span {
    border: 1px solid ${({ tokens: t }) => t.core.iconAccentPrimary};
    background-color: ${({ tokens: t }) => t.theme.textTertiary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  input:focus-visible:checked + span,
  input:focus:checked + span {
    border: 1px solid ${({ tokens: t }) => t.core.iconAccentPrimary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  /* -- Checked states --------------------------------------------------- */
  input:checked + span {
    background-color: ${({ tokens: t }) => t.core.iconAccentPrimary};
  }

  label[data-size='lg'] > input:checked + span:before {
    transform: translateX(calc(100% - 9px));
  }

  label[data-size='md'] > input:checked + span:before {
    transform: translateX(calc(100% - 9px));
  }

  label[data-size='sm'] > input:checked + span:before {
    transform: translateX(calc(100% - 7px));
  }

  /* -- Hover states ------------------------------------------------------- */
  label:hover > input:not(:checked):not(:disabled) + span {
    background-color: ${({ colors: t }) => t.neutrals400};
  }

  label:hover > input:checked:not(:disabled) + span {
    background-color: ${({ colors: t }) => t.accent080};
  }

  /* -- Disabled state --------------------------------------------------- */
  label:has(input:disabled) {
    pointer-events: none;
    user-select: none;
  }

  input:not(:checked):disabled + span {
    background-color: ${({ colors: t }) => t.neutrals700};
  }

  input:checked:disabled + span {
    background-color: ${({ colors: t }) => t.neutrals700};
  }

  input:not(:checked):disabled + span::before {
    background-color: ${({ colors: t }) => t.neutrals400};
  }

  input:checked:disabled + span::before {
    background-color: ${({ tokens: t }) => t.theme.textTertiary};
  }
`;
var Dt = function (t, e, i, r) {
    var n = arguments.length,
      o =
        n < 3
          ? e
          : r === null
          ? (r = Object.getOwnPropertyDescriptor(e, i))
          : r,
      s;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      o = Reflect.decorate(t, e, i, r);
    else
      for (var a = t.length - 1; a >= 0; a--)
        (s = t[a]) && (o = (n < 3 ? s(o) : n > 3 ? s(e, i, o) : s(e, i)) || o);
    return n > 3 && o && Object.defineProperty(e, i, o), o;
  },
  ct = class extends m {
    constructor() {
      super(...arguments),
        (this.inputElementRef = ot()),
        (this.checked = !1),
        (this.disabled = !1),
        (this.size = "md");
    }
    render() {
      return l`
      <label data-size=${this.size}>
        <input
          ${rt(this.inputElementRef)}
          type="checkbox"
          ?checked=${this.checked}
          ?disabled=${this.disabled}
          @change=${this.dispatchChangeEvent.bind(this)}
        />
        <span></span>
      </label>
    `;
    }
    dispatchChangeEvent() {
      this.dispatchEvent(
        new CustomEvent("switchChange", {
          detail: this.inputElementRef.value?.checked,
          bubbles: !0,
          composed: !0,
        })
      );
    }
  };
ct.styles = [v, T, no];
Dt([c({ type: Boolean })], ct.prototype, "checked", void 0);
Dt([c({ type: Boolean })], ct.prototype, "disabled", void 0);
Dt([c()], ct.prototype, "size", void 0);
ct = Dt([d("wui-toggle")], ct);
var so = g`
  :host {
    height: auto;
  }

  :host > wui-flex {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: ${({ spacing: t }) => t[2]};
    padding: ${({ spacing: t }) => t[2]} ${({ spacing: t }) => t[3]};
    background-color: ${({ tokens: t }) => t.theme.foregroundPrimary};
    border-radius: ${({ borderRadius: t }) => t[4]};
    box-shadow: inset 0 0 0 1px ${({ tokens: t }) => t.theme.foregroundPrimary};
    transition: background-color ${({ durations: t }) => t.lg}
      ${({ easings: t }) => t["ease-out-power-2"]};
    will-change: background-color;
    cursor: pointer;
  }

  wui-switch {
    pointer-events: none;
  }
`;
var ao = function (t, e, i, r) {
    var n = arguments.length,
      o =
        n < 3
          ? e
          : r === null
          ? (r = Object.getOwnPropertyDescriptor(e, i))
          : r,
      s;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      o = Reflect.decorate(t, e, i, r);
    else
      for (var a = t.length - 1; a >= 0; a--)
        (s = t[a]) && (o = (n < 3 ? s(o) : n > 3 ? s(e, i, o) : s(e, i)) || o);
    return n > 3 && o && Object.defineProperty(e, i, o), o;
  },
  Ut = class extends m {
    constructor() {
      super(...arguments), (this.checked = !1);
    }
    render() {
      return l`
      <wui-flex>
        <wui-icon size="xl" name="walletConnectBrown"></wui-icon>
        <wui-toggle
          ?checked=${this.checked}
          size="sm"
          @switchChange=${this.handleToggleChange.bind(this)}
        ></wui-toggle>
      </wui-flex>
    `;
    }
    handleToggleChange(e) {
      e.stopPropagation(),
        (this.checked = e.detail),
        this.dispatchSwitchEvent();
    }
    dispatchSwitchEvent() {
      this.dispatchEvent(
        new CustomEvent("certifiedSwitchChange", {
          detail: this.checked,
          bubbles: !0,
          composed: !0,
        })
      );
    }
  };
Ut.styles = [v, T, so];
ao([c({ type: Boolean })], Ut.prototype, "checked", void 0);
Ut = ao([d("wui-certified-switch")], Ut);
var lo = g`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: ${({ spacing: t }) => t[3]};
    color: ${({ tokens: t }) => t.theme.iconDefault};
    cursor: pointer;
    padding: ${({ spacing: t }) => t[2]};
    background-color: transparent;
    border-radius: ${({ borderRadius: t }) => t[4]};
    transition: background-color ${({ durations: t }) => t.lg}
      ${({ easings: t }) => t["ease-out-power-2"]};
  }

  @media (hover: hover) {
    wui-icon:hover {
      background-color: ${({ tokens: t }) => t.theme.foregroundSecondary};
    }
  }
`;
var co = function (t, e, i, r) {
    var n = arguments.length,
      o =
        n < 3
          ? e
          : r === null
          ? (r = Object.getOwnPropertyDescriptor(e, i))
          : r,
      s;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      o = Reflect.decorate(t, e, i, r);
    else
      for (var a = t.length - 1; a >= 0; a--)
        (s = t[a]) && (o = (n < 3 ? s(o) : n > 3 ? s(e, i, o) : s(e, i)) || o);
    return n > 3 && o && Object.defineProperty(e, i, o), o;
  },
  jt = class extends m {
    constructor() {
      super(...arguments),
        (this.inputComponentRef = ot()),
        (this.inputValue = "");
    }
    render() {
      return l`
      <wui-input-text
        ${rt(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
        @inputChange=${this.onInputChange}
      >
        ${
          this.inputValue
            ? l`<wui-icon
              @click=${this.clearValue}
              color="inherit"
              size="sm"
              name="close"
            ></wui-icon>`
            : null
        }
      </wui-input-text>
    `;
    }
    onInputChange(e) {
      this.inputValue = e.detail || "";
    }
    clearValue() {
      let i = this.inputComponentRef.value?.inputElementRef.value;
      i &&
        ((i.value = ""),
        (this.inputValue = ""),
        i.focus(),
        i.dispatchEvent(new Event("input")));
    }
  };
jt.styles = [v, lo];
co([c()], jt.prototype, "inputValue", void 0);
jt = co([d("wui-search-bar")], jt);
var po = g`
  :host {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 104px;
    width: 104px;
    row-gap: ${({ spacing: t }) => t[2]};
    background-color: ${({ tokens: t }) => t.theme.foregroundPrimary};
    border-radius: ${({ borderRadius: t }) => t[5]};
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--apkt-path-network);
    clip-path: var(--apkt-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: ${({ tokens: t }) => t.theme.foregroundSecondary};
    stroke-width: 1px;
  }

  @media (max-width: 350px) {
    :host {
      width: 100%;
    }
  }
`;
var uo = function (t, e, i, r) {
    var n = arguments.length,
      o =
        n < 3
          ? e
          : r === null
          ? (r = Object.getOwnPropertyDescriptor(e, i))
          : r,
      s;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      o = Reflect.decorate(t, e, i, r);
    else
      for (var a = t.length - 1; a >= 0; a--)
        (s = t[a]) && (o = (n < 3 ? s(o) : n > 3 ? s(e, i, o) : s(e, i)) || o);
    return n > 3 && o && Object.defineProperty(e, i, o), o;
  },
  Bt = class extends m {
    constructor() {
      super(...arguments), (this.type = "wallet");
    }
    render() {
      return l`
      ${this.shimmerTemplate()}
      <wui-shimmer width="80px" height="20px"></wui-shimmer>
    `;
    }
    shimmerTemplate() {
      return this.type === "network"
        ? l` <wui-shimmer data-type=${this.type} width="48px" height="54px"></wui-shimmer>
        ${Ti}`
        : l`<wui-shimmer width="56px" height="56px"></wui-shimmer>`;
    }
  };
Bt.styles = [v, T, po];
uo([c()], Bt.prototype, "type", void 0);
Bt = uo([d("wui-card-select-loader")], Bt);
var mo = N`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;
var me = function (t, e, i, r) {
    var n = arguments.length,
      o =
        n < 3
          ? e
          : r === null
          ? (r = Object.getOwnPropertyDescriptor(e, i))
          : r,
      s;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      o = Reflect.decorate(t, e, i, r);
    else
      for (var a = t.length - 1; a >= 0; a--)
        (s = t[a]) && (o = (n < 3 ? s(o) : n > 3 ? s(e, i, o) : s(e, i)) || o);
    return n > 3 && o && Object.defineProperty(e, i, o), o;
  },
  Z = class extends m {
    render() {
      return (
        (this.style.cssText = `
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap && `var(--apkt-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap && `var(--apkt-spacing-${this.rowGap})`};
      gap: ${this.gap && `var(--apkt-spacing-${this.gap})`};
      padding-top: ${this.padding && P.getSpacingStyles(this.padding, 0)};
      padding-right: ${this.padding && P.getSpacingStyles(this.padding, 1)};
      padding-bottom: ${this.padding && P.getSpacingStyles(this.padding, 2)};
      padding-left: ${this.padding && P.getSpacingStyles(this.padding, 3)};
      margin-top: ${this.margin && P.getSpacingStyles(this.margin, 0)};
      margin-right: ${this.margin && P.getSpacingStyles(this.margin, 1)};
      margin-bottom: ${this.margin && P.getSpacingStyles(this.margin, 2)};
      margin-left: ${this.margin && P.getSpacingStyles(this.margin, 3)};
    `),
        l`<slot></slot>`
      );
    }
  };
Z.styles = [v, mo];
me([c()], Z.prototype, "gridTemplateRows", void 0);
me([c()], Z.prototype, "gridTemplateColumns", void 0);
me([c()], Z.prototype, "justifyItems", void 0);
me([c()], Z.prototype, "alignItems", void 0);
me([c()], Z.prototype, "justifyContent", void 0);
me([c()], Z.prototype, "alignContent", void 0);
me([c()], Z.prototype, "columnGap", void 0);
me([c()], Z.prototype, "rowGap", void 0);
me([c()], Z.prototype, "gap", void 0);
me([c()], Z.prototype, "padding", void 0);
me([c()], Z.prototype, "margin", void 0);
Z = me([d("wui-grid")], Z);
var ho = g`
  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 104px;
    row-gap: ${({ spacing: t }) => t[2]};
    padding: ${({ spacing: t }) => t[3]} ${({ spacing: t }) => t[0]};
    background-color: ${({ tokens: t }) => t.theme.foregroundPrimary};
    border-radius: clamp(0px, ${({ borderRadius: t }) => t[4]}, 20px);
    transition:
      color ${({ durations: t }) => t.lg} ${({ easings: t }) =>
  t["ease-out-power-1"]},
      background-color ${({ durations: t }) => t.lg}
        ${({ easings: t }) => t["ease-out-power-1"]},
      border-radius ${({ durations: t }) => t.lg}
        ${({ easings: t }) => t["ease-out-power-1"]};
    will-change: background-color, color, border-radius;
    outline: none;
    border: none;
  }

  button > wui-flex > wui-text {
    color: ${({ tokens: t }) => t.theme.textPrimary};
    max-width: 86px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button > wui-flex > wui-text.certified {
    max-width: 66px;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: ${({ tokens: t }) => t.theme.foregroundSecondary};
    }
  }

  button:disabled > wui-flex > wui-text {
    color: ${({ tokens: t }) => t.core.glass010};
  }

  [data-selected='true'] {
    background-color: ${({ colors: t }) => t.accent020};
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: ${({ colors: t }) => t.accent010};
    }
  }

  [data-selected='true']:active:enabled {
    background-color: ${({ colors: t }) => t.accent010};
  }

  @media (max-width: 350px) {
    button {
      width: 100%;
    }
  }
`;
var ke = function (t, e, i, r) {
    var n = arguments.length,
      o =
        n < 3
          ? e
          : r === null
          ? (r = Object.getOwnPropertyDescriptor(e, i))
          : r,
      s;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      o = Reflect.decorate(t, e, i, r);
    else
      for (var a = t.length - 1; a >= 0; a--)
        (s = t[a]) && (o = (n < 3 ? s(o) : n > 3 ? s(e, i, o) : s(e, i)) || o);
    return n > 3 && o && Object.defineProperty(e, i, o), o;
  },
  he = class extends m {
    constructor() {
      super(),
        (this.observer = new IntersectionObserver(() => {})),
        (this.visible = !1),
        (this.imageSrc = void 0),
        (this.imageLoading = !1),
        (this.isImpressed = !1),
        (this.explorerId = ""),
        (this.walletQuery = ""),
        (this.certified = !1),
        (this.displayIndex = 0),
        (this.wallet = void 0),
        (this.observer = new IntersectionObserver(
          (e) => {
            e.forEach((i) => {
              i.isIntersecting
                ? ((this.visible = !0),
                  this.fetchImageSrc(),
                  this.sendImpressionEvent())
                : (this.visible = !1);
            });
          },
          { threshold: 0.01 }
        ));
    }
    firstUpdated() {
      this.observer.observe(this);
    }
    disconnectedCallback() {
      this.observer.disconnect();
    }
    render() {
      let e = this.wallet?.badge_type === "certified";
      return l`
      <button>
        ${this.imageTemplate()}
        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="1">
          <wui-text
            variant="md-regular"
            color="inherit"
            class=${f(e ? "certified" : void 0)}
            >${this.wallet?.name}</wui-text
          >
          ${
            e
              ? l`<wui-icon size="sm" name="walletConnectBrown"></wui-icon>`
              : null
          }
        </wui-flex>
      </button>
    `;
    }
    imageTemplate() {
      return (!this.visible && !this.imageSrc) || this.imageLoading
        ? this.shimmerTemplate()
        : l`
      <wui-wallet-image
        size="lg"
        imageSrc=${f(this.imageSrc)}
        name=${f(this.wallet?.name)}
        .installed=${this.wallet?.installed ?? !1}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `;
    }
    shimmerTemplate() {
      return l`<wui-shimmer width="56px" height="56px"></wui-shimmer>`;
    }
    fetchImageSrc() {
      return R(this, null, function* () {
        this.wallet &&
          ((this.imageSrc = k.getWalletImage(this.wallet)),
          !this.imageSrc &&
            ((this.imageLoading = !0),
            (this.imageSrc = yield k.fetchWalletImage(this.wallet.image_id)),
            (this.imageLoading = !1)));
      });
    }
    sendImpressionEvent() {
      !this.wallet ||
        this.isImpressed ||
        ((this.isImpressed = !0),
        C.sendWalletImpressionEvent({
          name: this.wallet.name,
          walletRank: this.wallet.order,
          explorerId: this.explorerId,
          view: h.state.view,
          query: this.walletQuery,
          certified: this.certified,
          displayIndex: this.displayIndex,
        }));
    }
  };
he.styles = ho;
ke([p()], he.prototype, "visible", void 0);
ke([p()], he.prototype, "imageSrc", void 0);
ke([p()], he.prototype, "imageLoading", void 0);
ke([p()], he.prototype, "isImpressed", void 0);
ke([c()], he.prototype, "explorerId", void 0);
ke([c()], he.prototype, "walletQuery", void 0);
ke([c()], he.prototype, "certified", void 0);
ke([c()], he.prototype, "displayIndex", void 0);
ke([c({ type: Object })], he.prototype, "wallet", void 0);
he = ke([d("w3m-all-wallets-list-item")], he);
var fo = g`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  :host([data-mobile-fullscreen='true']) wui-grid {
    max-height: none;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  w3m-all-wallets-list-item {
    opacity: 0;
    animation-duration: ${({ durations: t }) => t.xl};
    animation-timing-function: ${({ easings: t }) => t["ease-inout-power-2"]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-loading-spinner {
    padding-top: ${({ spacing: t }) => t[4]};
    padding-bottom: ${({ spacing: t }) => t[4]};
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;
var Le = function (t, e, i, r) {
    var n = arguments.length,
      o =
        n < 3
          ? e
          : r === null
          ? (r = Object.getOwnPropertyDescriptor(e, i))
          : r,
      s;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      o = Reflect.decorate(t, e, i, r);
    else
      for (var a = t.length - 1; a >= 0; a--)
        (s = t[a]) && (o = (n < 3 ? s(o) : n > 3 ? s(e, i, o) : s(e, i)) || o);
    return n > 3 && o && Object.defineProperty(e, i, o), o;
  },
  wo = "local-paginator",
  Ae = class extends m {
    constructor() {
      super(),
        (this.unsubscribe = []),
        (this.paginationObserver = void 0),
        (this.loading = !E.state.wallets.length),
        (this.wallets = E.state.wallets),
        (this.recommended = E.state.recommended),
        (this.featured = E.state.featured),
        (this.filteredWallets = E.state.filteredWallets),
        (this.mobileFullScreen = b.state.enableMobileFullScreen),
        this.unsubscribe.push(
          E.subscribeKey("wallets", (e) => (this.wallets = e)),
          E.subscribeKey("recommended", (e) => (this.recommended = e)),
          E.subscribeKey("featured", (e) => (this.featured = e)),
          E.subscribeKey("filteredWallets", (e) => (this.filteredWallets = e))
        );
    }
    firstUpdated() {
      this.initialFetch(), this.createPaginationObserver();
    }
    disconnectedCallback() {
      this.unsubscribe.forEach((e) => e()),
        this.paginationObserver?.disconnect();
    }
    render() {
      return (
        this.mobileFullScreen &&
          this.setAttribute("data-mobile-fullscreen", "true"),
        l`
      <wui-grid
        data-scroll=${!this.loading}
        .padding=${["0", "3", "3", "3"]}
        gap="2"
        justifyContent="space-between"
      >
        ${this.loading ? this.shimmerTemplate(16) : this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `
      );
    }
    initialFetch() {
      return R(this, null, function* () {
        this.loading = !0;
        let e = this.shadowRoot?.querySelector("wui-grid");
        e &&
          (yield E.fetchWalletsByPage({ page: 1 }),
          yield e.animate([{ opacity: 1 }, { opacity: 0 }], {
            duration: 200,
            fill: "forwards",
            easing: "ease",
          }).finished,
          (this.loading = !1),
          e.animate([{ opacity: 0 }, { opacity: 1 }], {
            duration: 200,
            fill: "forwards",
            easing: "ease",
          }));
      });
    }
    shimmerTemplate(e, i) {
      return [...Array(e)].map(
        () => l`
        <wui-card-select-loader type="wallet" id=${f(
          i
        )}></wui-card-select-loader>
      `
      );
    }
    getWallets() {
      let e = [...this.featured, ...this.recommended];
      this.filteredWallets?.length > 0
        ? e.push(...this.filteredWallets)
        : e.push(...this.wallets);
      let i = w.uniqueBy(e, "id"),
        r = Ne.markWalletsAsInstalled(i);
      return Ne.markWalletsWithDisplayIndex(r);
    }
    walletsTemplate() {
      return this.getWallets().map(
        (i, r) => l`
        <w3m-all-wallets-list-item
          data-testid="wallet-search-item-${i.id}"
          @click=${() => this.onConnectWallet(i)}
          .wallet=${i}
          explorerId=${i.id}
          certified=${this.badge === "certified"}
          displayIndex=${r}
        ></w3m-all-wallets-list-item>
      `
      );
    }
    paginationLoaderTemplate() {
      let {
          wallets: e,
          recommended: i,
          featured: r,
          count: n,
          mobileFilteredOutWalletsLength: o,
        } = E.state,
        s = window.innerWidth < 352 ? 3 : 4,
        a = e.length + i.length,
        S = Math.ceil(a / s) * s - a + s;
      return (
        (S -= e.length ? r.length % s : 0),
        n === 0 && r.length > 0
          ? null
          : n === 0 || [...r, ...e, ...i].length < n - (o ?? 0)
          ? this.shimmerTemplate(S, wo)
          : null
      );
    }
    createPaginationObserver() {
      let e = this.shadowRoot?.querySelector(`#${wo}`);
      e &&
        ((this.paginationObserver = new IntersectionObserver(([i]) => {
          if (i?.isIntersecting && !this.loading) {
            let { page: r, count: n, wallets: o } = E.state;
            o.length < n && E.fetchWalletsByPage({ page: r + 1 });
          }
        })),
        this.paginationObserver.observe(e));
    }
    onConnectWallet(e) {
      y.selectWalletConnector(e);
    }
  };
Ae.styles = fo;
Le([p()], Ae.prototype, "loading", void 0);
Le([p()], Ae.prototype, "wallets", void 0);
Le([p()], Ae.prototype, "recommended", void 0);
Le([p()], Ae.prototype, "featured", void 0);
Le([p()], Ae.prototype, "filteredWallets", void 0);
Le([p()], Ae.prototype, "badge", void 0);
Le([p()], Ae.prototype, "mobileFullScreen", void 0);
Ae = Le([d("w3m-all-wallets-list")], Ae);
var bo = N`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  :host([data-mobile-fullscreen='true']) wui-grid {
    max-height: none;
    height: auto;
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;
var Rt = function (t, e, i, r) {
    var n = arguments.length,
      o =
        n < 3
          ? e
          : r === null
          ? (r = Object.getOwnPropertyDescriptor(e, i))
          : r,
      s;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      o = Reflect.decorate(t, e, i, r);
    else
      for (var a = t.length - 1; a >= 0; a--)
        (s = t[a]) && (o = (n < 3 ? s(o) : n > 3 ? s(e, i, o) : s(e, i)) || o);
    return n > 3 && o && Object.defineProperty(e, i, o), o;
  },
  He = class extends m {
    constructor() {
      super(...arguments),
        (this.prevQuery = ""),
        (this.prevBadge = void 0),
        (this.loading = !0),
        (this.mobileFullScreen = b.state.enableMobileFullScreen),
        (this.query = "");
    }
    render() {
      return (
        this.mobileFullScreen &&
          this.setAttribute("data-mobile-fullscreen", "true"),
        this.onSearch(),
        this.loading
          ? l`<wui-loading-spinner color="accent-primary"></wui-loading-spinner>`
          : this.walletsTemplate()
      );
    }
    onSearch() {
      return R(this, null, function* () {
        (this.query.trim() !== this.prevQuery.trim() ||
          this.badge !== this.prevBadge) &&
          ((this.prevQuery = this.query),
          (this.prevBadge = this.badge),
          (this.loading = !0),
          yield E.searchWallet({ search: this.query, badge: this.badge }),
          (this.loading = !1));
      });
    }
    walletsTemplate() {
      let { search: e } = E.state,
        i = Ne.markWalletsAsInstalled(e);
      return e.length
        ? l`
      <wui-grid
        data-testid="wallet-list"
        .padding=${["0", "3", "3", "3"]}
        rowGap="4"
        columngap="2"
        justifyContent="space-between"
      >
        ${i.map(
          (r, n) => l`
            <w3m-all-wallets-list-item
              @click=${() => this.onConnectWallet(r)}
              .wallet=${r}
              data-testid="wallet-search-item-${r.id}"
              explorerId=${r.id}
              certified=${this.badge === "certified"}
              walletQuery=${this.query}
              displayIndex=${n}
            ></w3m-all-wallets-list-item>
          `
        )}
      </wui-grid>
    `
        : l`
        <wui-flex
          data-testid="no-wallet-found"
          justifyContent="center"
          alignItems="center"
          gap="3"
          flexDirection="column"
        >
          <wui-icon-box size="lg" color="default" icon="wallet"></wui-icon-box>
          <wui-text data-testid="no-wallet-found-text" color="secondary" variant="md-medium">
            No Wallet found
          </wui-text>
        </wui-flex>
      `;
    }
    onConnectWallet(e) {
      y.selectWalletConnector(e);
    }
  };
He.styles = bo;
Rt([p()], He.prototype, "loading", void 0);
Rt([p()], He.prototype, "mobileFullScreen", void 0);
Rt([c()], He.prototype, "query", void 0);
Rt([c()], He.prototype, "badge", void 0);
He = Rt([d("w3m-all-wallets-search")], He);
var li = function (t, e, i, r) {
    var n = arguments.length,
      o =
        n < 3
          ? e
          : r === null
          ? (r = Object.getOwnPropertyDescriptor(e, i))
          : r,
      s;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      o = Reflect.decorate(t, e, i, r);
    else
      for (var a = t.length - 1; a >= 0; a--)
        (s = t[a]) && (o = (n < 3 ? s(o) : n > 3 ? s(e, i, o) : s(e, i)) || o);
    return n > 3 && o && Object.defineProperty(e, i, o), o;
  },
  zt = class extends m {
    constructor() {
      super(...arguments),
        (this.search = ""),
        (this.badge = void 0),
        (this.onDebouncedSearch = w.debounce((e) => {
          this.search = e;
        }));
    }
    render() {
      let e = this.search.length >= 2;
      return l`
      <wui-flex .padding=${["1", "3", "3", "3"]} gap="2" alignItems="center">
        <wui-search-bar @inputChange=${this.onInputChange.bind(
          this
        )}></wui-search-bar>
        <wui-certified-switch
          ?checked=${this.badge === "certified"}
          @certifiedSwitchChange=${this.onCertifiedSwitchChange.bind(this)}
          data-testid="wui-certified-switch"
        ></wui-certified-switch>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${
        e || this.badge
          ? l`<w3m-all-wallets-search
            query=${this.search}
            .badge=${this.badge}
          ></w3m-all-wallets-search>`
          : l`<w3m-all-wallets-list .badge=${this.badge}></w3m-all-wallets-list>`
      }
    `;
    }
    onInputChange(e) {
      this.onDebouncedSearch(e.detail);
    }
    onCertifiedSwitchChange(e) {
      e.detail
        ? ((this.badge = "certified"),
          I.showSvg("Only WalletConnect certified", {
            icon: "walletConnectBrown",
            iconColor: "accent-100",
          }))
        : (this.badge = void 0);
    }
    qrButtonTemplate() {
      return w.isMobile()
        ? l`
        <wui-icon-box
          size="xl"
          iconSize="xl"
          color="accent-primary"
          icon="qrCode"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `
        : null;
    }
    onWalletConnectQr() {
      h.push("ConnectingWalletConnect");
    }
  };
li([p()], zt.prototype, "search", void 0);
li([p()], zt.prototype, "badge", void 0);
zt = li([d("w3m-all-wallets-view")], zt);
var go = g`
  button {
    display: flex;
    gap: ${({ spacing: t }) => t[1]};
    padding: ${({ spacing: t }) => t[4]};
    width: 100%;
    background-color: ${({ tokens: t }) => t.theme.foregroundPrimary};
    border-radius: ${({ borderRadius: t }) => t[4]};
    justify-content: center;
    align-items: center;
  }

  :host([data-size='sm']) button {
    padding: ${({ spacing: t }) => t[2]};
    border-radius: ${({ borderRadius: t }) => t[2]};
  }

  :host([data-size='md']) button {
    padding: ${({ spacing: t }) => t[3]};
    border-radius: ${({ borderRadius: t }) => t[3]};
  }

  button:hover {
    background-color: ${({ tokens: t }) => t.theme.foregroundSecondary};
  }

  button:disabled {
    opacity: 0.5;
  }
`;
var pt = function (t, e, i, r) {
    var n = arguments.length,
      o =
        n < 3
          ? e
          : r === null
          ? (r = Object.getOwnPropertyDescriptor(e, i))
          : r,
      s;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      o = Reflect.decorate(t, e, i, r);
    else
      for (var a = t.length - 1; a >= 0; a--)
        (s = t[a]) && (o = (n < 3 ? s(o) : n > 3 ? s(e, i, o) : s(e, i)) || o);
    return n > 3 && o && Object.defineProperty(e, i, o), o;
  },
  De = class extends m {
    constructor() {
      super(...arguments),
        (this.text = ""),
        (this.disabled = !1),
        (this.size = "lg"),
        (this.icon = "copy"),
        (this.tabIdx = void 0);
    }
    render() {
      this.dataset.size = this.size;
      let e = `${this.size}-regular`;
      return l`
      <button ?disabled=${this.disabled} tabindex=${f(this.tabIdx)}>
        <wui-icon name=${this.icon} size=${
        this.size
      } color="default"></wui-icon>
        <wui-text align="center" variant=${e} color="primary">${
        this.text
      }</wui-text>
      </button>
    `;
    }
  };
De.styles = [v, T, go];
pt([c()], De.prototype, "text", void 0);
pt([c({ type: Boolean })], De.prototype, "disabled", void 0);
pt([c()], De.prototype, "size", void 0);
pt([c()], De.prototype, "icon", void 0);
pt([c()], De.prototype, "tabIdx", void 0);
De = pt([d("wui-list-button")], De);
var yo = g`
  wui-separator {
    margin: ${({ spacing: t }) => t[3]} calc(${({ spacing: t }) => t[3]} * -1);
    width: calc(100% + ${({ spacing: t }) => t[3]} * 2);
  }

  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }

  wui-icon-link,
  wui-loading-spinner {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  wui-icon-link {
    right: ${({ spacing: t }) => t[2]};
  }

  wui-loading-spinner {
    right: ${({ spacing: t }) => t[3]};
  }

  wui-text {
    margin: ${({ spacing: t }) => t[2]} ${({ spacing: t }) => t[3]}
      ${({ spacing: t }) => t[0]} ${({ spacing: t }) => t[3]};
  }
`;
var Ke = function (t, e, i, r) {
    var n = arguments.length,
      o =
        n < 3
          ? e
          : r === null
          ? (r = Object.getOwnPropertyDescriptor(e, i))
          : r,
      s;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      o = Reflect.decorate(t, e, i, r);
    else
      for (var a = t.length - 1; a >= 0; a--)
        (s = t[a]) && (o = (n < 3 ? s(o) : n > 3 ? s(e, i, o) : s(e, i)) || o);
    return n > 3 && o && Object.defineProperty(e, i, o), o;
  },
  Ie = class extends m {
    constructor() {
      super(),
        (this.unsubscribe = []),
        (this.formRef = ot()),
        (this.email = ""),
        (this.loading = !1),
        (this.error = ""),
        (this.remoteFeatures = b.state.remoteFeatures),
        (this.hasExceededUsageLimit = E.state.plan.hasExceededUsageLimit),
        this.unsubscribe.push(
          b.subscribeKey("remoteFeatures", (e) => {
            this.remoteFeatures = e;
          }),
          E.subscribeKey(
            "plan",
            (e) => (this.hasExceededUsageLimit = e.hasExceededUsageLimit)
          )
        );
    }
    disconnectedCallback() {
      this.unsubscribe.forEach((e) => e());
    }
    firstUpdated() {
      this.formRef.value?.addEventListener("keydown", (e) => {
        e.key === "Enter" && this.onSubmitEmail(e);
      });
    }
    render() {
      let e = x.hasAnyConnection($.CONNECTOR_ID.AUTH);
      return l`
      <form ${rt(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
        <wui-email-input
          @focus=${this.onFocusEvent.bind(this)}
          .disabled=${this.loading}
          @inputChange=${this.onEmailInputChange.bind(this)}
          tabIdx=${f(this.tabIdx)}
          ?disabled=${e || this.hasExceededUsageLimit}
        >
        </wui-email-input>

        ${this.submitButtonTemplate()}${this.loadingTemplate()}
        <input type="submit" hidden />
      </form>
      ${this.templateError()}
    `;
    }
    submitButtonTemplate() {
      return !this.loading && this.email.length > 3
        ? l`
          <wui-icon-link
            size="sm"
            icon="chevronRight"
            iconcolor="accent-100"
            @click=${this.onSubmitEmail.bind(this)}
          >
          </wui-icon-link>
        `
        : null;
    }
    loadingTemplate() {
      return this.loading
        ? l`<wui-loading-spinner size="md" color="accent-primary"></wui-loading-spinner>`
        : null;
    }
    templateError() {
      return this.error
        ? l`<wui-text variant="sm-medium" color="error">${this.error}</wui-text>`
        : null;
    }
    onEmailInputChange(e) {
      (this.email = e.detail.trim()), (this.error = "");
    }
    onSubmitEmail(e) {
      return R(this, null, function* () {
        if (!nt.isValidEmail(this.email)) {
          Nt.open(
            { displayMessage: ki.ALERT_WARNINGS.INVALID_EMAIL.displayMessage },
            "warning"
          );
          return;
        }
        if (
          !$.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(
            (r) => r === u.state.activeChain
          )
        ) {
          let r = u.getFirstCaipNetworkSupportsAuthConnector();
          if (r) {
            h.push("SwitchNetwork", { network: r });
            return;
          }
        }
        try {
          if (this.loading) return;
          (this.loading = !0), e.preventDefault();
          let r = y.getAuthConnector();
          if (!r)
            throw new Error("w3m-email-login-widget: Auth connector not found");
          let { action: n } = yield r.provider.connectEmail({
            email: this.email,
          });
          if (
            (C.sendEvent({ type: "track", event: "EMAIL_SUBMITTED" }),
            n === "VERIFY_OTP")
          )
            C.sendEvent({
              type: "track",
              event: "EMAIL_VERIFICATION_CODE_SENT",
            }),
              h.push("EmailVerifyOtp", { email: this.email });
          else if (n === "VERIFY_DEVICE")
            h.push("EmailVerifyDevice", { email: this.email });
          else if (n === "CONNECT") {
            let o = this.remoteFeatures?.multiWallet;
            yield x.connectExternal(r, u.state.activeChain),
              o
                ? (h.replace("ProfileWallets"),
                  I.showSuccess("New Wallet Added"))
                : h.replace("Account");
          }
        } catch (r) {
          w.parseError(r)?.includes("Invalid email")
            ? (this.error = "Invalid email. Try again.")
            : I.showError(r);
        } finally {
          this.loading = !1;
        }
      });
    }
    onFocusEvent() {
      C.sendEvent({ type: "track", event: "EMAIL_LOGIN_SELECTED" });
    }
  };
Ie.styles = yo;
Ke([c()], Ie.prototype, "tabIdx", void 0);
Ke([p()], Ie.prototype, "email", void 0);
Ke([p()], Ie.prototype, "loading", void 0);
Ke([p()], Ie.prototype, "error", void 0);
Ke([p()], Ie.prototype, "remoteFeatures", void 0);
Ke([p()], Ie.prototype, "hasExceededUsageLimit", void 0);
Ie = Ke([d("w3m-email-login-widget")], Ie);
var xo = g`
  :host {
    display: block;
    width: 100%;
  }

  button {
    width: 100%;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ tokens: t }) => t.theme.foregroundPrimary};
    border-radius: ${({ borderRadius: t }) => t[4]};
  }

  @media (hover: hover) {
    button:hover:enabled {
      background: ${({ tokens: t }) => t.theme.foregroundSecondary};
    }
  }

  button:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;
var Ft = function (t, e, i, r) {
    var n = arguments.length,
      o =
        n < 3
          ? e
          : r === null
          ? (r = Object.getOwnPropertyDescriptor(e, i))
          : r,
      s;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      o = Reflect.decorate(t, e, i, r);
    else
      for (var a = t.length - 1; a >= 0; a--)
        (s = t[a]) && (o = (n < 3 ? s(o) : n > 3 ? s(e, i, o) : s(e, i)) || o);
    return n > 3 && o && Object.defineProperty(e, i, o), o;
  },
  ut = class extends m {
    constructor() {
      super(...arguments),
        (this.logo = "google"),
        (this.disabled = !1),
        (this.tabIdx = void 0);
    }
    render() {
      return l`
      <button ?disabled=${this.disabled} tabindex=${f(this.tabIdx)}>
        <wui-icon size="xxl" name=${this.logo}></wui-icon>
      </button>
    `;
    }
  };
ut.styles = [v, T, xo];
Ft([c()], ut.prototype, "logo", void 0);
Ft([c({ type: Boolean })], ut.prototype, "disabled", void 0);
Ft([c()], ut.prototype, "tabIdx", void 0);
ut = Ft([d("wui-logo-select")], ut);
var Co = g`
  wui-separator {
    margin: ${({ spacing: t }) => t[3]} calc(${({ spacing: t }) => t[3]} * -1)
      ${({ spacing: t }) => t[3]} calc(${({ spacing: t }) => t[3]} * -1);
    width: calc(100% + ${({ spacing: t }) => t[3]} * 2);
  }
`;
var Ue = function (t, e, i, r) {
    var n = arguments.length,
      o =
        n < 3
          ? e
          : r === null
          ? (r = Object.getOwnPropertyDescriptor(e, i))
          : r,
      s;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      o = Reflect.decorate(t, e, i, r);
    else
      for (var a = t.length - 1; a >= 0; a--)
        (s = t[a]) && (o = (n < 3 ? s(o) : n > 3 ? s(e, i, o) : s(e, i)) || o);
    return n > 3 && o && Object.defineProperty(e, i, o), o;
  },
  vo = 2,
  $o = 6,
  Re = class extends m {
    constructor() {
      super(),
        (this.unsubscribe = []),
        (this.walletGuide = "get-started"),
        (this.tabIdx = void 0),
        (this.connectors = y.state.connectors),
        (this.remoteFeatures = b.state.remoteFeatures),
        (this.authConnector = this.connectors.find((e) => e.type === "AUTH")),
        (this.isPwaLoading = !1),
        (this.hasExceededUsageLimit = E.state.plan.hasExceededUsageLimit),
        this.unsubscribe.push(
          y.subscribeKey("connectors", (e) => {
            (this.connectors = e),
              (this.authConnector = this.connectors.find(
                (i) => i.type === "AUTH"
              ));
          }),
          b.subscribeKey("remoteFeatures", (e) => (this.remoteFeatures = e)),
          E.subscribeKey(
            "plan",
            (e) => (this.hasExceededUsageLimit = e.hasExceededUsageLimit)
          )
        );
    }
    connectedCallback() {
      super.connectedCallback(), this.handlePwaFrameLoad();
    }
    disconnectedCallback() {
      this.unsubscribe.forEach((e) => e());
    }
    render() {
      return l`
      <wui-flex
        class="container"
        flexDirection="column"
        gap="2"
        data-testid="w3m-social-login-widget"
      >
        ${this.topViewTemplate()}${this.bottomViewTemplate()}
      </wui-flex>
    `;
    }
    topViewTemplate() {
      let e = this.walletGuide === "explore",
        i = this.remoteFeatures?.socials;
      return !i && e
        ? ((i = W.DEFAULT_SOCIALS), this.renderTopViewContent(i))
        : i
        ? this.renderTopViewContent(i)
        : null;
    }
    renderTopViewContent(e) {
      return e.length === 2
        ? l` <wui-flex gap="2">
        ${e.slice(0, vo).map(
          (i) => l`<wui-logo-select
              data-testid=${`social-selector-${i}`}
              @click=${() => {
                this.onSocialClick(i);
              }}
              logo=${i}
              tabIdx=${f(this.tabIdx)}
              ?disabled=${this.isPwaLoading || this.hasConnection()}
            ></wui-logo-select>`
        )}
      </wui-flex>`
        : l` <wui-list-button
      data-testid=${`social-selector-${e[0]}`}
      @click=${() => {
        this.onSocialClick(e[0]);
      }}
      size="lg"
      icon=${f(e[0])}
      text=${`Continue with ${P.capitalize(e[0])}`}
      tabIdx=${f(this.tabIdx)}
      ?disabled=${this.isPwaLoading || this.hasConnection()}
    ></wui-list-button>`;
    }
    bottomViewTemplate() {
      let e = this.remoteFeatures?.socials,
        i = this.walletGuide === "explore";
      return (
        (!this.authConnector || !e || e.length === 0) &&
          i &&
          (e = W.DEFAULT_SOCIALS),
        !e || e.length <= vo
          ? null
          : e && e.length > $o
          ? l`<wui-flex gap="2">
        ${e.slice(1, $o - 1).map(
          (n) => l`<wui-logo-select
              data-testid=${`social-selector-${n}`}
              @click=${() => {
                this.onSocialClick(n);
              }}
              logo=${n}
              tabIdx=${f(this.tabIdx)}
              ?focusable=${this.tabIdx !== void 0 && this.tabIdx >= 0}
              ?disabled=${this.isPwaLoading || this.hasConnection()}
            ></wui-logo-select>`
        )}
        <wui-logo-select
          logo="more"
          tabIdx=${f(this.tabIdx)}
          @click=${this.onMoreSocialsClick.bind(this)}
          ?disabled=${this.isPwaLoading || this.hasConnection()}
          data-testid="social-selector-more"
        ></wui-logo-select>
      </wui-flex>`
          : e
          ? l`<wui-flex gap="2">
      ${e.slice(1, e.length).map(
        (n) => l`<wui-logo-select
            data-testid=${`social-selector-${n}`}
            @click=${() => {
              this.onSocialClick(n);
            }}
            logo=${n}
            tabIdx=${f(this.tabIdx)}
            ?focusable=${this.tabIdx !== void 0 && this.tabIdx >= 0}
            ?disabled=${this.isPwaLoading || this.hasConnection()}
          ></wui-logo-select>`
      )}
    </wui-flex>`
          : null
      );
    }
    onMoreSocialsClick() {
      h.push("ConnectSocials");
    }
    onSocialClick(e) {
      return R(this, null, function* () {
        if (this.hasExceededUsageLimit) {
          h.push("UsageExceeded");
          return;
        }
        if (
          !$.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(
            (r) => r === u.state.activeChain
          )
        ) {
          let r = u.getFirstCaipNetworkSupportsAuthConnector();
          if (r) {
            h.push("SwitchNetwork", { network: r });
            return;
          }
        }
        e && (yield Ri(e));
      });
    }
    handlePwaFrameLoad() {
      return R(this, null, function* () {
        if (w.isPWA()) {
          this.isPwaLoading = !0;
          try {
            this.authConnector?.provider instanceof vi &&
              (yield this.authConnector.provider.init());
          } catch (e) {
            Nt.open(
              {
                displayMessage: "Error loading embedded wallet in PWA",
                debugMessage: e.message,
              },
              "error"
            );
          } finally {
            this.isPwaLoading = !1;
          }
        }
      });
    }
    hasConnection() {
      return x.hasAnyConnection($.CONNECTOR_ID.AUTH);
    }
  };
Re.styles = Co;
Ue([c()], Re.prototype, "walletGuide", void 0);
Ue([c()], Re.prototype, "tabIdx", void 0);
Ue([p()], Re.prototype, "connectors", void 0);
Ue([p()], Re.prototype, "remoteFeatures", void 0);
Ue([p()], Re.prototype, "authConnector", void 0);
Ue([p()], Re.prototype, "isPwaLoading", void 0);
Ue([p()], Re.prototype, "hasExceededUsageLimit", void 0);
Re = Ue([d("w3m-social-login-widget")], Re);
var dt = function (t, e, i, r) {
    var n = arguments.length,
      o =
        n < 3
          ? e
          : r === null
          ? (r = Object.getOwnPropertyDescriptor(e, i))
          : r,
      s;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      o = Reflect.decorate(t, e, i, r);
    else
      for (var a = t.length - 1; a >= 0; a--)
        (s = t[a]) && (o = (n < 3 ? s(o) : n > 3 ? s(e, i, o) : s(e, i)) || o);
    return n > 3 && o && Object.defineProperty(e, i, o), o;
  },
  qe = class extends m {
    constructor() {
      super(),
        (this.unsubscribe = []),
        (this.tabIdx = void 0),
        (this.connectors = y.state.connectors),
        (this.count = E.state.count),
        (this.filteredCount = E.state.filteredWallets.length),
        (this.isFetchingRecommendedWallets =
          E.state.isFetchingRecommendedWallets),
        this.unsubscribe.push(
          y.subscribeKey("connectors", (e) => (this.connectors = e)),
          E.subscribeKey("count", (e) => (this.count = e)),
          E.subscribeKey(
            "filteredWallets",
            (e) => (this.filteredCount = e.length)
          ),
          E.subscribeKey(
            "isFetchingRecommendedWallets",
            (e) => (this.isFetchingRecommendedWallets = e)
          )
        );
    }
    disconnectedCallback() {
      this.unsubscribe.forEach((e) => e());
    }
    render() {
      let e = this.connectors.find((S) => S.id === "walletConnect"),
        { allWallets: i } = b.state;
      if (!e || i === "HIDE" || (i === "ONLY_MOBILE" && !w.isMobile()))
        return null;
      let r = E.state.featured.length,
        n = this.count + r,
        o = n < 10 ? n : Math.floor(n / 10) * 10,
        s = this.filteredCount > 0 ? this.filteredCount : o,
        a = `${s}`;
      this.filteredCount > 0
        ? (a = `${this.filteredCount}`)
        : s < n && (a = `${s}+`);
      let A = x.hasAnyConnection($.CONNECTOR_ID.WALLET_CONNECT);
      return l`
      <wui-list-wallet
        name="Search Wallet"
        walletIcon="search"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${a}
        tagVariant="info"
        data-testid="all-wallets"
        tabIdx=${f(this.tabIdx)}
        .loading=${this.isFetchingRecommendedWallets}
        ?disabled=${A}
        size="sm"
      ></wui-list-wallet>
    `;
    }
    onAllWallets() {
      C.sendEvent({ type: "track", event: "CLICK_ALL_WALLETS" }),
        h.push("AllWallets", { redirectView: h.state.data?.redirectView });
    }
  };
dt([c()], qe.prototype, "tabIdx", void 0);
dt([p()], qe.prototype, "connectors", void 0);
dt([p()], qe.prototype, "count", void 0);
dt([p()], qe.prototype, "filteredCount", void 0);
dt([p()], qe.prototype, "isFetchingRecommendedWallets", void 0);
qe = dt([d("w3m-all-wallets-widget")], qe);
var Eo = g`
  :host {
    margin-top: ${({ spacing: t }) => t[1]};
  }
  wui-separator {
    margin: ${({ spacing: t }) => t[3]} calc(${({ spacing: t }) => t[3]} * -1)
      ${({ spacing: t }) => t[2]} calc(${({ spacing: t }) => t[3]} * -1);
    width: calc(100% + ${({ spacing: t }) => t[3]} * 2);
  }
`;
var _e = function (t, e, i, r) {
    var n = arguments.length,
      o =
        n < 3
          ? e
          : r === null
          ? (r = Object.getOwnPropertyDescriptor(e, i))
          : r,
      s;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      o = Reflect.decorate(t, e, i, r);
    else
      for (var a = t.length - 1; a >= 0; a--)
        (s = t[a]) && (o = (n < 3 ? s(o) : n > 3 ? s(e, i, o) : s(e, i)) || o);
    return n > 3 && o && Object.defineProperty(e, i, o), o;
  },
  xe = class extends m {
    constructor() {
      super(),
        (this.unsubscribe = []),
        (this.connectors = y.state.connectors),
        (this.recommended = E.state.recommended),
        (this.featured = E.state.featured),
        (this.explorerWallets = E.state.explorerWallets),
        (this.connections = x.state.connections),
        (this.connectorImages = oe.state.connectorImages),
        (this.loadingTelegram = !1),
        this.unsubscribe.push(
          y.subscribeKey("connectors", (e) => (this.connectors = e)),
          x.subscribeKey("connections", (e) => (this.connections = e)),
          oe.subscribeKey("connectorImages", (e) => (this.connectorImages = e)),
          E.subscribeKey("recommended", (e) => (this.recommended = e)),
          E.subscribeKey("featured", (e) => (this.featured = e)),
          E.subscribeKey("explorerFilteredWallets", (e) => {
            this.explorerWallets = e?.length ? e : E.state.explorerWallets;
          }),
          E.subscribeKey("explorerWallets", (e) => {
            this.explorerWallets?.length || (this.explorerWallets = e);
          })
        ),
        w.isTelegram() &&
          w.isIos() &&
          ((this.loadingTelegram = !x.state.wcUri),
          this.unsubscribe.push(
            x.subscribeKey("wcUri", (e) => (this.loadingTelegram = !e))
          ));
    }
    disconnectedCallback() {
      this.unsubscribe.forEach((e) => e());
    }
    render() {
      return l`
      <wui-flex flexDirection="column" gap="2"> ${this.connectorListTemplate()} </wui-flex>
    `;
    }
    mapConnectorsToExplorerWallets(e, i) {
      return e.map((r) => {
        if (r.type === "MULTI_CHAIN" && r.connectors) {
          let o = r.connectors.map((S) => S.id),
            s = r.connectors.map((S) => S.name),
            a = r.connectors.map((S) => S.info?.rdns),
            A = i?.find(
              (S) =>
                o.includes(S.id) ||
                s.includes(S.name) ||
                (S.rdns && (a.includes(S.rdns) || o.includes(S.rdns)))
            );
          return (r.explorerWallet = A ?? r.explorerWallet), r;
        }
        let n = i?.find(
          (o) => o.id === r.id || o.rdns === r.info?.rdns || o.name === r.name
        );
        return (r.explorerWallet = n ?? r.explorerWallet), r;
      });
    }
    processConnectorsByType(e, i = !0) {
      let r = le.sortConnectorsByExplorerWallet([...e]);
      return i ? r.filter(le.showConnector) : r;
    }
    connectorListTemplate() {
      let e = this.mapConnectorsToExplorerWallets(
          this.connectors,
          this.explorerWallets ?? []
        ),
        i = le.getConnectorsByType(e, this.recommended, this.featured),
        r = this.processConnectorsByType(
          i.announced.filter((F) => F.id !== "walletConnect")
        ),
        n = this.processConnectorsByType(i.injected),
        o = this.processConnectorsByType(
          i.multiChain.filter((F) => F.name !== "WalletConnect"),
          !1
        ),
        s = i.custom,
        a = i.recent,
        A = this.processConnectorsByType(
          i.external.filter(
            (F) =>
              F.id !== $.CONNECTOR_ID.COINBASE_SDK &&
              F.id !== $.CONNECTOR_ID.BASE_ACCOUNT
          )
        ),
        S = i.recommended,
        L = i.featured,
        G = le.getConnectorTypeOrder({
          custom: s,
          recent: a,
          announced: r,
          injected: n,
          multiChain: o,
          recommended: S,
          featured: L,
          external: A,
        }),
        te = this.connectors.find((F) => F.id === "walletConnect"),
        ti = w.isMobile(),
        ae = [];
      for (let F of G)
        switch (F) {
          case "walletConnect": {
            !ti &&
              te &&
              ae.push({
                kind: "connector",
                subtype: "walletConnect",
                connector: te,
              });
            break;
          }
          case "recent": {
            le.getFilteredRecentWallets().forEach((bt) =>
              ae.push({ kind: "wallet", subtype: "recent", wallet: bt })
            );
            break;
          }
          case "injected": {
            o.forEach((M) =>
              ae.push({
                kind: "connector",
                subtype: "multiChain",
                connector: M,
              })
            ),
              r.forEach((M) =>
                ae.push({
                  kind: "connector",
                  subtype: "announced",
                  connector: M,
                })
              ),
              n.forEach((M) =>
                ae.push({
                  kind: "connector",
                  subtype: "injected",
                  connector: M,
                })
              );
            break;
          }
          case "featured": {
            L.forEach((M) =>
              ae.push({ kind: "wallet", subtype: "featured", wallet: M })
            );
            break;
          }
          case "custom": {
            le.getFilteredCustomWallets(s ?? []).forEach((bt) =>
              ae.push({ kind: "wallet", subtype: "custom", wallet: bt })
            );
            break;
          }
          case "external": {
            A.forEach((M) =>
              ae.push({ kind: "connector", subtype: "external", connector: M })
            );
            break;
          }
          case "recommended": {
            le.getCappedRecommendedWallets(S).forEach((bt) =>
              ae.push({ kind: "wallet", subtype: "recommended", wallet: bt })
            );
            break;
          }
          default:
            console.warn(`Unknown connector type: ${F}`);
        }
      return ae.map((F, M) =>
        F.kind === "connector"
          ? this.renderConnector(F, M)
          : this.renderWallet(F, M)
      );
    }
    renderConnector(e, i) {
      let r = e.connector,
        n = k.getConnectorImage(r) || this.connectorImages[r?.imageId ?? ""],
        s = (this.connections.get(r.chain) ?? []).some((G) =>
          H.isLowerCaseMatch(G.connectorId, r.id)
        ),
        a,
        A;
      e.subtype === "multiChain"
        ? ((a = "multichain"), (A = "info"))
        : e.subtype === "walletConnect"
        ? ((a = "qr code"), (A = "accent"))
        : e.subtype === "injected" || e.subtype === "announced"
        ? ((a = s ? "connected" : "installed"), (A = s ? "info" : "success"))
        : ((a = void 0), (A = void 0));
      let S = x.hasAnyConnection($.CONNECTOR_ID.WALLET_CONNECT),
        L = e.subtype === "walletConnect" || e.subtype === "external" ? S : !1;
      return l`
      <w3m-list-wallet
        displayIndex=${i}
        imageSrc=${f(n)}
        .installed=${!0}
        name=${r.name ?? "Unknown"}
        .tagVariant=${A}
        tagLabel=${f(a)}
        data-testid=${`wallet-selector-${r.id.toLowerCase()}`}
        size="sm"
        @click=${() => this.onClickConnector(e)}
        tabIdx=${f(this.tabIdx)}
        ?disabled=${L}
        rdnsId=${f(r.explorerWallet?.rdns || void 0)}
        walletRank=${f(r.explorerWallet?.order)}
      >
      </w3m-list-wallet>
    `;
    }
    onClickConnector(e) {
      let i = h.state.data?.redirectView;
      if (e.subtype === "walletConnect") {
        y.setActiveConnector(e.connector),
          w.isMobile()
            ? h.push("AllWallets")
            : h.push("ConnectingWalletConnect", { redirectView: i });
        return;
      }
      if (e.subtype === "multiChain") {
        y.setActiveConnector(e.connector),
          h.push("ConnectingMultiChain", { redirectView: i });
        return;
      }
      if (e.subtype === "injected") {
        y.setActiveConnector(e.connector),
          h.push("ConnectingExternal", {
            connector: e.connector,
            redirectView: i,
            wallet: e.connector.explorerWallet,
          });
        return;
      }
      if (e.subtype === "announced") {
        if (e.connector.id === "walletConnect") {
          w.isMobile()
            ? h.push("AllWallets")
            : h.push("ConnectingWalletConnect", { redirectView: i });
          return;
        }
        h.push("ConnectingExternal", {
          connector: e.connector,
          redirectView: i,
          wallet: e.connector.explorerWallet,
        });
        return;
      }
      h.push("ConnectingExternal", { connector: e.connector, redirectView: i });
    }
    renderWallet(e, i) {
      let r = e.wallet,
        n = k.getWalletImage(r),
        s = x.hasAnyConnection($.CONNECTOR_ID.WALLET_CONNECT),
        a = this.loadingTelegram,
        A = e.subtype === "recent" ? "recent" : void 0,
        S = e.subtype === "recent" ? "info" : void 0;
      return l`
      <w3m-list-wallet
        displayIndex=${i}
        imageSrc=${f(n)}
        name=${r.name ?? "Unknown"}
        @click=${() => this.onClickWallet(e)}
        size="sm"
        data-testid=${`wallet-selector-${r.id}`}
        tabIdx=${f(this.tabIdx)}
        ?loading=${a}
        ?disabled=${s}
        rdnsId=${f(r.rdns || void 0)}
        walletRank=${f(r.order)}
        tagLabel=${f(A)}
        .tagVariant=${S}
      >
      </w3m-list-wallet>
    `;
    }
    onClickWallet(e) {
      let i = h.state.data?.redirectView;
      if (e.subtype === "featured") {
        y.selectWalletConnector(e.wallet);
        return;
      }
      if (e.subtype === "recent") {
        if (this.loadingTelegram) return;
        y.selectWalletConnector(e.wallet);
        return;
      }
      if (e.subtype === "custom") {
        if (this.loadingTelegram) return;
        h.push("ConnectingWalletConnect", {
          wallet: e.wallet,
          redirectView: i,
        });
        return;
      }
      if (this.loadingTelegram) return;
      let r = y.getConnector({ id: e.wallet.id, rdns: e.wallet.rdns });
      r
        ? h.push("ConnectingExternal", { connector: r, redirectView: i })
        : h.push("ConnectingWalletConnect", {
            wallet: e.wallet,
            redirectView: i,
          });
    }
  };
xe.styles = Eo;
_e([c({ type: Number })], xe.prototype, "tabIdx", void 0);
_e([p()], xe.prototype, "connectors", void 0);
_e([p()], xe.prototype, "recommended", void 0);
_e([p()], xe.prototype, "featured", void 0);
_e([p()], xe.prototype, "explorerWallets", void 0);
_e([p()], xe.prototype, "connections", void 0);
_e([p()], xe.prototype, "connectorImages", void 0);
_e([p()], xe.prototype, "loadingTelegram", void 0);
xe = _e([d("w3m-connector-list")], xe);
var So = function (t, e, i, r) {
    var n = arguments.length,
      o =
        n < 3
          ? e
          : r === null
          ? (r = Object.getOwnPropertyDescriptor(e, i))
          : r,
      s;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      o = Reflect.decorate(t, e, i, r);
    else
      for (var a = t.length - 1; a >= 0; a--)
        (s = t[a]) && (o = (n < 3 ? s(o) : n > 3 ? s(e, i, o) : s(e, i)) || o);
    return n > 3 && o && Object.defineProperty(e, i, o), o;
  },
  ci = class extends m {
    constructor() {
      super(...arguments), (this.tabIdx = void 0);
    }
    render() {
      return l`
      <wui-flex flexDirection="column" gap="2">
        <w3m-connector-list tabIdx=${f(this.tabIdx)}></w3m-connector-list>
        <w3m-all-wallets-widget tabIdx=${f(
          this.tabIdx
        )}></w3m-all-wallets-widget>
      </wui-flex>
    `;
    }
  };
So([c()], ci.prototype, "tabIdx", void 0);
ci = So([d("w3m-wallet-login-list")], ci);
var ko = g`
  :host {
    --connect-scroll--top-opacity: 0;
    --connect-scroll--bottom-opacity: 0;
    --connect-mask-image: none;
  }

  .connect {
    max-height: clamp(360px, 470px, 80vh);
    scrollbar-width: none;
    overflow-y: scroll;
    overflow-x: hidden;
    transition: opacity ${({ durations: t }) => t.lg}
      ${({ easings: t }) => t["ease-out-power-2"]};
    will-change: opacity;
    mask-image: var(--connect-mask-image);
  }

  .guide {
    transition: opacity ${({ durations: t }) => t.lg}
      ${({ easings: t }) => t["ease-out-power-2"]};
    will-change: opacity;
  }

  .connect::-webkit-scrollbar {
    display: none;
  }

  .all-wallets {
    flex-flow: column;
  }

  .connect.disabled,
  .guide.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }

  wui-separator {
    margin: ${({ spacing: t }) => t[3]} calc(${({ spacing: t }) => t[3]} * -1);
    width: calc(100% + ${({ spacing: t }) => t[3]} * 2);
  }
`;
var fe = function (t, e, i, r) {
    var n = arguments.length,
      o =
        n < 3
          ? e
          : r === null
          ? (r = Object.getOwnPropertyDescriptor(e, i))
          : r,
      s;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      o = Reflect.decorate(t, e, i, r);
    else
      for (var a = t.length - 1; a >= 0; a--)
        (s = t[a]) && (o = (n < 3 ? s(o) : n > 3 ? s(e, i, o) : s(e, i)) || o);
    return n > 3 && o && Object.defineProperty(e, i, o), o;
  },
  mr = 470,
  ee = class extends m {
    constructor() {
      super(),
        (this.unsubscribe = []),
        (this.connectors = y.state.connectors),
        (this.authConnector = this.connectors.find((e) => e.type === "AUTH")),
        (this.features = b.state.features),
        (this.remoteFeatures = b.state.remoteFeatures),
        (this.enableWallets = b.state.enableWallets),
        (this.noAdapters = u.state.noAdapters),
        (this.walletGuide = "get-started"),
        (this.checked = tt.state.isLegalCheckboxChecked),
        (this.isEmailEnabled =
          this.remoteFeatures?.email && !u.state.noAdapters),
        (this.isSocialEnabled =
          this.remoteFeatures?.socials &&
          this.remoteFeatures.socials.length > 0 &&
          !u.state.noAdapters),
        (this.isAuthEnabled = this.checkIfAuthEnabled(this.connectors)),
        this.unsubscribe.push(
          y.subscribeKey("connectors", (e) => {
            (this.connectors = e),
              (this.authConnector = this.connectors.find(
                (i) => i.type === "AUTH"
              )),
              (this.isAuthEnabled = this.checkIfAuthEnabled(this.connectors));
          }),
          b.subscribeKey("features", (e) => {
            this.features = e;
          }),
          b.subscribeKey("remoteFeatures", (e) => {
            (this.remoteFeatures = e),
              this.setEmailAndSocialEnableCheck(
                this.noAdapters,
                this.remoteFeatures
              );
          }),
          b.subscribeKey("enableWallets", (e) => (this.enableWallets = e)),
          u.subscribeKey("noAdapters", (e) =>
            this.setEmailAndSocialEnableCheck(e, this.remoteFeatures)
          ),
          tt.subscribeKey("isLegalCheckboxChecked", (e) => (this.checked = e))
        );
    }
    disconnectedCallback() {
      this.unsubscribe.forEach((i) => i()),
        this.resizeObserver?.disconnect(),
        this.shadowRoot
          ?.querySelector(".connect")
          ?.removeEventListener(
            "scroll",
            this.handleConnectListScroll.bind(this)
          );
    }
    firstUpdated() {
      let e = this.shadowRoot?.querySelector(".connect");
      e &&
        (requestAnimationFrame(this.handleConnectListScroll.bind(this)),
        e?.addEventListener("scroll", this.handleConnectListScroll.bind(this)),
        (this.resizeObserver = new ResizeObserver(() => {
          this.handleConnectListScroll();
        })),
        this.resizeObserver?.observe(e),
        this.handleConnectListScroll());
    }
    render() {
      let { termsConditionsUrl: e, privacyPolicyUrl: i } = b.state,
        r = b.state.features?.legalCheckbox,
        s =
          !!(e || i) &&
          !!r &&
          this.walletGuide === "get-started" &&
          !this.checked,
        a = { connect: !0, disabled: s },
        A = b.state.enableWalletGuide,
        S = this.enableWallets,
        L = this.isSocialEnabled || this.authConnector,
        G = s ? -1 : void 0;
      return l`
      <wui-flex flexDirection="column">
        ${this.legalCheckboxTemplate()}
        <wui-flex
          data-testid="w3m-connect-scroll-view"
          flexDirection="column"
          .padding=${["0", "0", "4", "0"]}
          class=${Ot(a)}
        >
          <wui-flex
            class="connect-methods"
            flexDirection="column"
            gap="2"
            .padding=${
              L && S && A && this.walletGuide === "get-started"
                ? ["0", "3", "0", "3"]
                : ["0", "3", "3", "3"]
            }
          >
            ${this.renderConnectMethod(G)}
          </wui-flex>
        </wui-flex>
        ${this.reownBrandingTemplate()}
      </wui-flex>
    `;
    }
    reownBrandingTemplate() {
      return nt.hasFooter() || !this.remoteFeatures?.reownBranding
        ? null
        : l`<wui-ux-by-reown></wui-ux-by-reown>`;
    }
    setEmailAndSocialEnableCheck(e, i) {
      (this.isEmailEnabled = i?.email && !e),
        (this.isSocialEnabled = i?.socials && i.socials.length > 0 && !e),
        (this.remoteFeatures = i),
        (this.noAdapters = e);
    }
    checkIfAuthEnabled(e) {
      let i = e
        .filter((n) => n.type === Si.CONNECTOR_TYPE_AUTH)
        .map((n) => n.chain);
      return $.AUTH_CONNECTOR_SUPPORTED_CHAINS.some((n) => i.includes(n));
    }
    renderConnectMethod(e) {
      let i = Ne.getConnectOrderMethod(this.features, this.connectors);
      return l`${i.map((r, n) => {
        switch (r) {
          case "email":
            return l`${this.emailTemplate(e)} ${this.separatorTemplate(
              n,
              "email"
            )}`;
          case "social":
            return l`${this.socialListTemplate(e)}
          ${this.separatorTemplate(n, "social")}`;
          case "wallet":
            return l`${this.walletListTemplate(e)}
          ${this.separatorTemplate(n, "wallet")}`;
          default:
            return null;
        }
      })}`;
    }
    checkMethodEnabled(e) {
      switch (e) {
        case "wallet":
          return this.enableWallets;
        case "social":
          return this.isSocialEnabled && this.isAuthEnabled;
        case "email":
          return this.isEmailEnabled && this.isAuthEnabled;
        default:
          return null;
      }
    }
    checkIsThereNextMethod(e) {
      let r = Ne.getConnectOrderMethod(this.features, this.connectors)[e + 1];
      return r
        ? this.checkMethodEnabled(r)
          ? r
          : this.checkIsThereNextMethod(e + 1)
        : void 0;
    }
    separatorTemplate(e, i) {
      let r = this.checkIsThereNextMethod(e),
        n = this.walletGuide === "explore";
      switch (i) {
        case "wallet":
          return this.enableWallets && r && !n
            ? l`<wui-separator data-testid="wui-separator" text="or"></wui-separator>`
            : null;
        case "email": {
          let o = r === "social";
          return this.isAuthEnabled && this.isEmailEnabled && !o && r
            ? l`<wui-separator
              data-testid="w3m-email-login-or-separator"
              text="or"
            ></wui-separator>`
            : null;
        }
        case "social": {
          let o = r === "email";
          return this.isAuthEnabled && this.isSocialEnabled && !o && r
            ? l`<wui-separator data-testid="wui-separator" text="or"></wui-separator>`
            : null;
        }
        default:
          return null;
      }
    }
    emailTemplate(e) {
      return !this.isEmailEnabled || !this.isAuthEnabled
        ? null
        : l`<w3m-email-login-widget tabIdx=${f(e)}></w3m-email-login-widget>`;
    }
    socialListTemplate(e) {
      return !this.isSocialEnabled || !this.isAuthEnabled
        ? null
        : l`<w3m-social-login-widget
      walletGuide=${this.walletGuide}
      tabIdx=${f(e)}
    ></w3m-social-login-widget>`;
    }
    walletListTemplate(e) {
      let i = this.enableWallets,
        r = this.features?.emailShowWallets === !1,
        n = this.features?.collapseWallets,
        o = r || n;
      return !i ||
        (w.isTelegram() &&
          (w.isSafari() || w.isIos()) &&
          x.connectWalletConnect().catch((a) => ({})),
        this.walletGuide === "explore")
        ? null
        : this.isAuthEnabled &&
          (this.isEmailEnabled || this.isSocialEnabled) &&
          o
        ? l`<wui-list-button
        data-testid="w3m-collapse-wallets-button"
        tabIdx=${f(e)}
        @click=${this.onContinueWalletClick.bind(this)}
        text="Continue with a wallet"
      ></wui-list-button>`
        : l`<w3m-wallet-login-list tabIdx=${f(e)}></w3m-wallet-login-list>`;
    }
    legalCheckboxTemplate() {
      return this.walletGuide === "explore"
        ? null
        : l`<w3m-legal-checkbox data-testid="w3m-legal-checkbox"></w3m-legal-checkbox>`;
    }
    handleConnectListScroll() {
      let e = this.shadowRoot?.querySelector(".connect");
      if (!e) return;
      e.scrollHeight > mr
        ? (e.style.setProperty(
            "--connect-mask-image",
            `linear-gradient(
          to bottom,
          rgba(0, 0, 0, calc(1 - var(--connect-scroll--top-opacity))) 0px,
          rgba(200, 200, 200, calc(1 - var(--connect-scroll--top-opacity))) 1px,
          black 100px,
          black calc(100% - 100px),
          rgba(155, 155, 155, calc(1 - var(--connect-scroll--bottom-opacity))) calc(100% - 1px),
          rgba(0, 0, 0, calc(1 - var(--connect-scroll--bottom-opacity))) 100%
        )`
          ),
          e.style.setProperty(
            "--connect-scroll--top-opacity",
            it.interpolate([0, 50], [0, 1], e.scrollTop).toString()
          ),
          e.style.setProperty(
            "--connect-scroll--bottom-opacity",
            it
              .interpolate(
                [0, 50],
                [0, 1],
                e.scrollHeight - e.scrollTop - e.offsetHeight
              )
              .toString()
          ))
        : (e.style.setProperty("--connect-mask-image", "none"),
          e.style.setProperty("--connect-scroll--top-opacity", "0"),
          e.style.setProperty("--connect-scroll--bottom-opacity", "0"));
    }
    onContinueWalletClick() {
      h.push("ConnectWallets");
    }
  };
ee.styles = ko;
fe([p()], ee.prototype, "connectors", void 0);
fe([p()], ee.prototype, "authConnector", void 0);
fe([p()], ee.prototype, "features", void 0);
fe([p()], ee.prototype, "remoteFeatures", void 0);
fe([p()], ee.prototype, "enableWallets", void 0);
fe([p()], ee.prototype, "noAdapters", void 0);
fe([c()], ee.prototype, "walletGuide", void 0);
fe([p()], ee.prototype, "checked", void 0);
fe([p()], ee.prototype, "isEmailEnabled", void 0);
fe([p()], ee.prototype, "isSocialEnabled", void 0);
fe([p()], ee.prototype, "isAuthEnabled", void 0);
ee = fe([d("w3m-connect-view")], ee);
var Ao = g`
  wui-flex {
    width: 100%;
    height: 52px;
    box-sizing: border-box;
    background-color: ${({ tokens: t }) => t.theme.foregroundPrimary};
    border-radius: ${({ borderRadius: t }) => t[5]};
    padding-left: ${({ spacing: t }) => t[3]};
    padding-right: ${({ spacing: t }) => t[3]};
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${({ spacing: t }) => t[6]};
  }

  wui-text {
    color: ${({ tokens: t }) => t.theme.textSecondary};
  }

  wui-icon {
    width: 12px;
    height: 12px;
  }
`;
var Mt = function (t, e, i, r) {
    var n = arguments.length,
      o =
        n < 3
          ? e
          : r === null
          ? (r = Object.getOwnPropertyDescriptor(e, i))
          : r,
      s;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      o = Reflect.decorate(t, e, i, r);
    else
      for (var a = t.length - 1; a >= 0; a--)
        (s = t[a]) && (o = (n < 3 ? s(o) : n > 3 ? s(e, i, o) : s(e, i)) || o);
    return n > 3 && o && Object.defineProperty(e, i, o), o;
  },
  mt = class extends m {
    constructor() {
      super(...arguments),
        (this.disabled = !1),
        (this.label = ""),
        (this.buttonLabel = "");
    }
    render() {
      return l`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="lg-regular" color="inherit">${this.label}</wui-text>
        <wui-button variant="accent-secondary" size="sm">
          ${this.buttonLabel}
          <wui-icon name="chevronRight" color="inherit" size="inherit" slot="iconRight"></wui-icon>
        </wui-button>
      </wui-flex>
    `;
    }
  };
mt.styles = [v, T, Ao];
Mt([c({ type: Boolean })], mt.prototype, "disabled", void 0);
Mt([c()], mt.prototype, "label", void 0);
Mt([c()], mt.prototype, "buttonLabel", void 0);
mt = Mt([d("wui-cta-button")], mt);
var Ro = g`
  :host {
    display: block;
    padding: 0 ${({ spacing: t }) => t[5]} ${({ spacing: t }) => t[5]};
  }
`;
var To = function (t, e, i, r) {
    var n = arguments.length,
      o =
        n < 3
          ? e
          : r === null
          ? (r = Object.getOwnPropertyDescriptor(e, i))
          : r,
      s;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      o = Reflect.decorate(t, e, i, r);
    else
      for (var a = t.length - 1; a >= 0; a--)
        (s = t[a]) && (o = (n < 3 ? s(o) : n > 3 ? s(e, i, o) : s(e, i)) || o);
    return n > 3 && o && Object.defineProperty(e, i, o), o;
  },
  Vt = class extends m {
    constructor() {
      super(...arguments), (this.wallet = void 0);
    }
    render() {
      if (!this.wallet) return (this.style.display = "none"), null;
      let {
          name: e,
          app_store: i,
          play_store: r,
          chrome_store: n,
          homepage: o,
        } = this.wallet,
        s = w.isMobile(),
        a = w.isIos(),
        A = w.isAndroid(),
        S = [i, r, o, n].filter(Boolean).length > 1,
        L = P.getTruncateString({
          string: e,
          charsStart: 12,
          charsEnd: 0,
          truncate: "end",
        });
      return S && !s
        ? l`
        <wui-cta-button
          label=${`Don't have ${L}?`}
          buttonLabel="Get"
          @click=${() => h.push("Downloads", { wallet: this.wallet })}
        ></wui-cta-button>
      `
        : !S && o
        ? l`
        <wui-cta-button
          label=${`Don't have ${L}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `
        : i && a
        ? l`
        <wui-cta-button
          label=${`Don't have ${L}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `
        : r && A
        ? l`
        <wui-cta-button
          label=${`Don't have ${L}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `
        : ((this.style.display = "none"), null);
    }
    onAppStore() {
      this.wallet?.app_store && w.openHref(this.wallet.app_store, "_blank");
    }
    onPlayStore() {
      this.wallet?.play_store && w.openHref(this.wallet.play_store, "_blank");
    }
    onHomePage() {
      this.wallet?.homepage && w.openHref(this.wallet.homepage, "_blank");
    }
  };
Vt.styles = [Ro];
To([c({ type: Object })], Vt.prototype, "wallet", void 0);
Vt = To([d("w3m-mobile-download-links")], Vt);
var Io = g`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-wallet-image {
    width: 56px;
    height: 56px;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(${({ spacing: t }) => t[1]} * -1);
    bottom: calc(${({ spacing: t }) => t[1]} * -1);
    opacity: 0;
    transform: scale(0.5);
    transition-property: opacity, transform;
    transition-duration: ${({ durations: t }) => t.lg};
    transition-timing-function: ${({ easings: t }) => t["ease-out-power-2"]};
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px ${({ spacing: t }) => t[4]};
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms ${({ easings: t }) => t["ease-out-power-2"]} both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  w3m-mobile-download-links {
    padding: 0px;
    width: 100%;
  }
`;
var Ce = function (t, e, i, r) {
    var n = arguments.length,
      o =
        n < 3
          ? e
          : r === null
          ? (r = Object.getOwnPropertyDescriptor(e, i))
          : r,
      s;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      o = Reflect.decorate(t, e, i, r);
    else
      for (var a = t.length - 1; a >= 0; a--)
        (s = t[a]) && (o = (n < 3 ? s(o) : n > 3 ? s(e, i, o) : s(e, i)) || o);
    return n > 3 && o && Object.defineProperty(e, i, o), o;
  },
  _ = class extends m {
    constructor() {
      super(),
        (this.wallet = h.state.data?.wallet),
        (this.connector = h.state.data?.connector),
        (this.timeout = void 0),
        (this.secondaryBtnIcon = "refresh"),
        (this.onConnect = void 0),
        (this.onRender = void 0),
        (this.onAutoConnect = void 0),
        (this.isWalletConnect = !0),
        (this.unsubscribe = []),
        (this.imageSrc =
          k.getConnectorImage(this.connector) ?? k.getWalletImage(this.wallet)),
        (this.name = this.wallet?.name ?? this.connector?.name ?? "Wallet"),
        (this.isRetrying = !1),
        (this.uri = x.state.wcUri),
        (this.error = x.state.wcError),
        (this.ready = !1),
        (this.showRetry = !1),
        (this.label = void 0),
        (this.secondaryBtnLabel = "Try again"),
        (this.secondaryLabel = "Accept connection request in the wallet"),
        (this.isLoading = !1),
        (this.isMobile = !1),
        (this.onRetry = void 0),
        this.unsubscribe.push(
          x.subscribeKey("wcUri", (e) => {
            (this.uri = e),
              this.isRetrying &&
                this.onRetry &&
                ((this.isRetrying = !1), this.onConnect?.());
          }),
          x.subscribeKey("wcError", (e) => (this.error = e))
        ),
        (w.isTelegram() || w.isSafari()) &&
          w.isIos() &&
          x.state.wcUri &&
          this.onConnect?.();
    }
    firstUpdated() {
      this.onAutoConnect?.(), (this.showRetry = !this.onAutoConnect);
    }
    disconnectedCallback() {
      this.unsubscribe.forEach((e) => e()),
        x.setWcError(!1),
        clearTimeout(this.timeout);
    }
    render() {
      this.onRender?.(), this.onShowRetry();
      let e = this.error
          ? "Connection can be declined if a previous request is still active"
          : this.secondaryLabel,
        i = "";
      return (
        this.label
          ? (i = this.label)
          : ((i = `Continue in ${this.name}`),
            this.error && (i = "Connection declined")),
        l`
      <wui-flex
        data-error=${f(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["10", "5", "5", "5"]}
        gap="6"
      >
        <wui-flex gap="2" justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${f(
            this.imageSrc
          )}></wui-wallet-image>

          ${this.error ? null : this.loaderTemplate()}

          <wui-icon-box
            color="error"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="6"> <wui-flex
          flexDirection="column"
          alignItems="center"
          gap="2"
          .padding=${["2", "0", "0", "0"]}
        >
          <wui-text align="center" variant="lg-medium" color=${
            this.error ? "error" : "primary"
          }>
            ${i}
          </wui-text>
          <wui-text align="center" variant="lg-regular" color="secondary">${e}</wui-text>
        </wui-flex>

        ${
          this.secondaryBtnLabel
            ? l`
                <wui-button
                  variant="neutral-secondary"
                  size="md"
                  ?disabled=${this.isRetrying || this.isLoading}
                  @click=${this.onTryAgain.bind(this)}
                  data-testid="w3m-connecting-widget-secondary-button"
                >
                  <wui-icon
                    color="inherit"
                    slot="iconLeft"
                    name=${this.secondaryBtnIcon}
                  ></wui-icon>
                  ${this.secondaryBtnLabel}
                </wui-button>
              `
            : null
        }
      </wui-flex>

      ${
        this.isWalletConnect
          ? l`
              <wui-flex .padding=${[
                "0",
                "5",
                "5",
                "5",
              ]} justifyContent="center">
                <wui-link
                  @click=${this.onCopyUri}
                  variant="secondary"
                  icon="copy"
                  data-testid="wui-link-copy"
                >
                  Copy link
                </wui-link>
              </wui-flex>
            `
          : null
      }

      <w3m-mobile-download-links .wallet=${
        this.wallet
      }></w3m-mobile-download-links></wui-flex>
      </wui-flex>
    `
      );
    }
    onShowRetry() {
      this.error &&
        !this.showRetry &&
        ((this.showRetry = !0),
        this.shadowRoot
          ?.querySelector("wui-button")
          ?.animate([{ opacity: 0 }, { opacity: 1 }], {
            fill: "forwards",
            easing: "ease",
          }));
    }
    onTryAgain() {
      x.setWcError(!1),
        this.onRetry
          ? ((this.isRetrying = !0), this.onRetry?.())
          : this.onConnect?.();
    }
    loaderTemplate() {
      let e = gt.state.themeVariables["--w3m-border-radius-master"],
        i = e ? parseInt(e.replace("px", ""), 10) : 4;
      return l`<wui-loading-thumbnail radius=${i * 9}></wui-loading-thumbnail>`;
    }
    onCopyUri() {
      try {
        this.uri && (w.copyToClopboard(this.uri), I.showSuccess("Link copied"));
      } catch {
        I.showError("Failed to copy");
      }
    }
  };
_.styles = Io;
Ce([p()], _.prototype, "isRetrying", void 0);
Ce([p()], _.prototype, "uri", void 0);
Ce([p()], _.prototype, "error", void 0);
Ce([p()], _.prototype, "ready", void 0);
Ce([p()], _.prototype, "showRetry", void 0);
Ce([p()], _.prototype, "label", void 0);
Ce([p()], _.prototype, "secondaryBtnLabel", void 0);
Ce([p()], _.prototype, "secondaryLabel", void 0);
Ce([p()], _.prototype, "isLoading", void 0);
Ce([c({ type: Boolean })], _.prototype, "isMobile", void 0);
Ce([c()], _.prototype, "onRetry", void 0);
var hr = function (t, e, i, r) {
    var n = arguments.length,
      o =
        n < 3
          ? e
          : r === null
          ? (r = Object.getOwnPropertyDescriptor(e, i))
          : r,
      s;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      o = Reflect.decorate(t, e, i, r);
    else
      for (var a = t.length - 1; a >= 0; a--)
        (s = t[a]) && (o = (n < 3 ? s(o) : n > 3 ? s(e, i, o) : s(e, i)) || o);
    return n > 3 && o && Object.defineProperty(e, i, o), o;
  },
  _o = class extends _ {
    constructor() {
      if (
        (super(),
        (this.externalViewUnsubscribe = []),
        (this.connectionsByNamespace = x.getConnections(this.connector?.chain)),
        (this.hasMultipleConnections = this.connectionsByNamespace.length > 0),
        (this.remoteFeatures = b.state.remoteFeatures),
        (this.currentActiveConnectorId =
          y.state.activeConnectorIds[this.connector?.chain]),
        !this.connector)
      )
        throw new Error("w3m-connecting-view: No connector provided");
      let e = this.connector?.chain;
      this.isAlreadyConnected(this.connector) &&
        ((this.secondaryBtnLabel = void 0),
        (this.label = `This account is already linked, change your account in ${this.connector.name}`),
        (this.secondaryLabel = `To link a new account, open ${this.connector.name} and switch to the account you want to link`)),
        C.sendEvent({
          type: "track",
          event: "SELECT_WALLET",
          properties: {
            name: this.connector.name ?? "Unknown",
            platform: "browser",
            displayIndex: this.wallet?.display_index,
            walletRank: this.wallet?.order,
            view: h.state.view,
          },
        }),
        (this.onConnect = this.onConnectProxy.bind(this)),
        (this.onAutoConnect = this.onConnectProxy.bind(this)),
        (this.isWalletConnect = !1),
        this.externalViewUnsubscribe.push(
          y.subscribeKey("activeConnectorIds", (i) => {
            let r = i[e],
              n = this.remoteFeatures?.multiWallet,
              { redirectView: o } = h.state.data ?? {};
            r !== this.currentActiveConnectorId &&
              (this.hasMultipleConnections && n
                ? (h.replace("ProfileWallets"),
                  I.showSuccess("New Wallet Added"))
                : o
                ? h.replace(o)
                : O.close());
          }),
          x.subscribeKey("connections", this.onConnectionsChange.bind(this))
        );
    }
    disconnectedCallback() {
      this.externalViewUnsubscribe.forEach((e) => e());
    }
    onConnectProxy() {
      return R(this, null, function* () {
        try {
          if (((this.error = !1), this.connector)) {
            if (this.isAlreadyConnected(this.connector)) return;
            (this.connector.id !== $.CONNECTOR_ID.COINBASE_SDK ||
              !this.error) &&
              (yield x.connectExternal(this.connector, this.connector.chain),
              C.sendEvent({
                type: "track",
                event: "CONNECT_SUCCESS",
                properties: {
                  method: "browser",
                  name: this.connector.name || "Unknown",
                  view: h.state.view,
                  walletRank: this.wallet?.order,
                },
              }));
          }
        } catch (e) {
          e instanceof et &&
          e.originalName === Ze.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST
            ? C.sendEvent({
                type: "track",
                event: "USER_REJECTED",
                properties: { message: e.message },
              })
            : C.sendEvent({
                type: "track",
                event: "CONNECT_ERROR",
                properties: { message: e?.message ?? "Unknown" },
              }),
            (this.error = !0);
        }
      });
    }
    onConnectionsChange(e) {
      if (
        this.connector?.chain &&
        e.get(this.connector.chain) &&
        this.isAlreadyConnected(this.connector)
      ) {
        let i = e.get(this.connector.chain) ?? [],
          r = this.remoteFeatures?.multiWallet;
        if (i.length === 0) h.replace("Connect");
        else {
          let n = ve
              .getConnectionsByConnectorId(
                this.connectionsByNamespace,
                this.connector.id
              )
              .flatMap((s) => s.accounts),
            o = ve
              .getConnectionsByConnectorId(i, this.connector.id)
              .flatMap((s) => s.accounts);
          o.length === 0
            ? this.hasMultipleConnections && r
              ? (h.replace("ProfileWallets"), I.showSuccess("Wallet deleted"))
              : O.close()
            : !n.every((a) =>
                o.some((A) => H.isLowerCaseMatch(a.address, A.address))
              ) &&
              r &&
              h.replace("ProfileWallets");
        }
      }
    }
    isAlreadyConnected(e) {
      return (
        !!e &&
        this.connectionsByNamespace.some((i) =>
          H.isLowerCaseMatch(i.connectorId, e.id)
        )
      );
    }
  };
_o = hr([d("w3m-connecting-external-view")], _o);
var Wo = N`
  wui-flex,
  wui-list-wallet {
    width: 100%;
  }
`;
var No = function (t, e, i, r) {
    var n = arguments.length,
      o =
        n < 3
          ? e
          : r === null
          ? (r = Object.getOwnPropertyDescriptor(e, i))
          : r,
      s;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      o = Reflect.decorate(t, e, i, r);
    else
      for (var a = t.length - 1; a >= 0; a--)
        (s = t[a]) && (o = (n < 3 ? s(o) : n > 3 ? s(e, i, o) : s(e, i)) || o);
    return n > 3 && o && Object.defineProperty(e, i, o), o;
  },
  Ht = class extends m {
    constructor() {
      super(),
        (this.unsubscribe = []),
        (this.activeConnector = y.state.activeConnector),
        this.unsubscribe.push(
          y.subscribeKey("activeConnector", (e) => (this.activeConnector = e))
        );
    }
    disconnectedCallback() {
      this.unsubscribe.forEach((e) => e());
    }
    render() {
      return l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3", "5", "5", "5"]}
        gap="5"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image
            size="lg"
            imageSrc=${f(k.getConnectorImage(this.activeConnector))}
          ></wui-wallet-image>
        </wui-flex>
        <wui-flex
          flexDirection="column"
          alignItems="center"
          gap="2"
          .padding=${["0", "3", "0", "3"]}
        >
          <wui-text variant="lg-medium" color="primary">
            Select Chain for ${this.activeConnector?.name}
          </wui-text>
          <wui-text align="center" variant="lg-regular" color="secondary"
            >Select which chain to connect to your multi chain wallet</wui-text
          >
        </wui-flex>
        <wui-flex
          flexGrow="1"
          flexDirection="column"
          alignItems="center"
          gap="2"
          .padding=${["2", "0", "2", "0"]}
        >
          ${this.networksTemplate()}
        </wui-flex>
      </wui-flex>
    `;
    }
    networksTemplate() {
      return this.activeConnector?.connectors?.map((e, i) =>
        e.name
          ? l`
            <w3m-list-wallet
              displayIndex=${i}
              imageSrc=${f(k.getChainImage(e.chain))}
              name=${$.CHAIN_NAME_MAP[e.chain]}
              @click=${() => this.onConnector(e)}
              size="sm"
              data-testid="wui-list-chain-${e.chain}"
              rdnsId=${e.explorerWallet?.rdns}
            ></w3m-list-wallet>
          `
          : null
      );
    }
    onConnector(e) {
      let i = this.activeConnector?.connectors?.find(
          (n) => n.chain === e.chain
        ),
        r = h.state.data?.redirectView;
      if (!i) {
        I.showError("Failed to find connector");
        return;
      }
      i.id === "walletConnect"
        ? w.isMobile()
          ? h.push("AllWallets")
          : h.push("ConnectingWalletConnect", { redirectView: r })
        : h.push("ConnectingExternal", {
            connector: i,
            redirectView: r,
            wallet: this.activeConnector?.explorerWallet,
          });
    }
  };
Ht.styles = Wo;
No([p()], Ht.prototype, "activeConnector", void 0);
Ht = No([d("w3m-connecting-multi-chain-view")], Ht);
var pi = function (t, e, i, r) {
    var n = arguments.length,
      o =
        n < 3
          ? e
          : r === null
          ? (r = Object.getOwnPropertyDescriptor(e, i))
          : r,
      s;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      o = Reflect.decorate(t, e, i, r);
    else
      for (var a = t.length - 1; a >= 0; a--)
        (s = t[a]) && (o = (n < 3 ? s(o) : n > 3 ? s(e, i, o) : s(e, i)) || o);
    return n > 3 && o && Object.defineProperty(e, i, o), o;
  },
  Kt = class extends m {
    constructor() {
      super(...arguments),
        (this.platformTabs = []),
        (this.unsubscribe = []),
        (this.platforms = []),
        (this.onSelectPlatfrom = void 0);
    }
    disconnectCallback() {
      this.unsubscribe.forEach((e) => e());
    }
    render() {
      let e = this.generateTabs();
      return l`
      <wui-flex justifyContent="center" .padding=${["0", "0", "4", "0"]}>
        <wui-tabs .tabs=${e} .onTabChange=${this.onTabChange.bind(
        this
      )}></wui-tabs>
      </wui-flex>
    `;
    }
    generateTabs() {
      let e = this.platforms.map((i) =>
        i === "browser"
          ? { label: "Browser", icon: "extension", platform: "browser" }
          : i === "mobile"
          ? { label: "Mobile", icon: "mobile", platform: "mobile" }
          : i === "qrcode"
          ? { label: "Mobile", icon: "mobile", platform: "qrcode" }
          : i === "web"
          ? { label: "Webapp", icon: "browser", platform: "web" }
          : i === "desktop"
          ? { label: "Desktop", icon: "desktop", platform: "desktop" }
          : { label: "Browser", icon: "extension", platform: "unsupported" }
      );
      return (this.platformTabs = e.map(({ platform: i }) => i)), e;
    }
    onTabChange(e) {
      let i = this.platformTabs[e];
      i && this.onSelectPlatfrom?.(i);
    }
  };
pi([c({ type: Array })], Kt.prototype, "platforms", void 0);
pi([c()], Kt.prototype, "onSelectPlatfrom", void 0);
Kt = pi([d("w3m-connecting-header")], Kt);
var fr = function (t, e, i, r) {
    var n = arguments.length,
      o =
        n < 3
          ? e
          : r === null
          ? (r = Object.getOwnPropertyDescriptor(e, i))
          : r,
      s;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      o = Reflect.decorate(t, e, i, r);
    else
      for (var a = t.length - 1; a >= 0; a--)
        (s = t[a]) && (o = (n < 3 ? s(o) : n > 3 ? s(e, i, o) : s(e, i)) || o);
    return n > 3 && o && Object.defineProperty(e, i, o), o;
  },
  Oo = class extends _ {
    constructor() {
      if ((super(), !this.wallet))
        throw new Error("w3m-connecting-wc-browser: No wallet provided");
      (this.onConnect = this.onConnectProxy.bind(this)),
        (this.onAutoConnect = this.onConnectProxy.bind(this)),
        C.sendEvent({
          type: "track",
          event: "SELECT_WALLET",
          properties: {
            name: this.wallet.name,
            platform: "browser",
            displayIndex: this.wallet?.display_index,
            walletRank: this.wallet.order,
            view: h.state.view,
          },
        });
    }
    onConnectProxy() {
      return R(this, null, function* () {
        try {
          this.error = !1;
          let { connectors: e } = y.state,
            i = e.find(
              (r) =>
                (r.type === "ANNOUNCED" &&
                  r.info?.rdns === this.wallet?.rdns) ||
                r.type === "INJECTED" ||
                r.name === this.wallet?.name
            );
          if (i) yield x.connectExternal(i, i.chain);
          else throw new Error("w3m-connecting-wc-browser: No connector found");
          O.close(),
            C.sendEvent({
              type: "track",
              event: "CONNECT_SUCCESS",
              properties: {
                method: "browser",
                name: this.wallet?.name || "Unknown",
                view: h.state.view,
                walletRank: this.wallet?.order,
              },
            });
        } catch (e) {
          e instanceof et &&
          e.originalName === Ze.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST
            ? C.sendEvent({
                type: "track",
                event: "USER_REJECTED",
                properties: { message: e.message },
              })
            : C.sendEvent({
                type: "track",
                event: "CONNECT_ERROR",
                properties: { message: e?.message ?? "Unknown" },
              }),
            (this.error = !0);
        }
      });
    }
  };
Oo = fr([d("w3m-connecting-wc-browser")], Oo);
var wr = function (t, e, i, r) {
    var n = arguments.length,
      o =
        n < 3
          ? e
          : r === null
          ? (r = Object.getOwnPropertyDescriptor(e, i))
          : r,
      s;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      o = Reflect.decorate(t, e, i, r);
    else
      for (var a = t.length - 1; a >= 0; a--)
        (s = t[a]) && (o = (n < 3 ? s(o) : n > 3 ? s(e, i, o) : s(e, i)) || o);
    return n > 3 && o && Object.defineProperty(e, i, o), o;
  },
  Po = class extends _ {
    constructor() {
      if ((super(), !this.wallet))
        throw new Error("w3m-connecting-wc-desktop: No wallet provided");
      (this.onConnect = this.onConnectProxy.bind(this)),
        (this.onRender = this.onRenderProxy.bind(this)),
        C.sendEvent({
          type: "track",
          event: "SELECT_WALLET",
          properties: {
            name: this.wallet.name,
            platform: "desktop",
            displayIndex: this.wallet?.display_index,
            walletRank: this.wallet.order,
            view: h.state.view,
          },
        });
    }
    onRenderProxy() {
      !this.ready && this.uri && ((this.ready = !0), this.onConnect?.());
    }
    onConnectProxy() {
      if (this.wallet?.desktop_link && this.uri)
        try {
          this.error = !1;
          let { desktop_link: e, name: i } = this.wallet,
            { redirect: r, href: n } = w.formatNativeUrl(e, this.uri);
          x.setWcLinking({ name: i, href: n }),
            x.setRecentWallet(this.wallet),
            w.openHref(r, "_blank");
        } catch {
          this.error = !0;
        }
    }
  };
Po = wr([d("w3m-connecting-wc-desktop")], Po);
var ht = function (t, e, i, r) {
    var n = arguments.length,
      o =
        n < 3
          ? e
          : r === null
          ? (r = Object.getOwnPropertyDescriptor(e, i))
          : r,
      s;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      o = Reflect.decorate(t, e, i, r);
    else
      for (var a = t.length - 1; a >= 0; a--)
        (s = t[a]) && (o = (n < 3 ? s(o) : n > 3 ? s(e, i, o) : s(e, i)) || o);
    return n > 3 && o && Object.defineProperty(e, i, o), o;
  },
  Ge = class extends _ {
    constructor() {
      if (
        (super(),
        (this.btnLabelTimeout = void 0),
        (this.redirectDeeplink = void 0),
        (this.redirectUniversalLink = void 0),
        (this.target = void 0),
        (this.preferUniversalLinks = b.state.experimental_preferUniversalLinks),
        (this.isLoading = !0),
        (this.onConnect = () => {
          if (this.wallet?.mobile_link && this.uri)
            try {
              this.error = !1;
              let { mobile_link: e, link_mode: i, name: r } = this.wallet,
                {
                  redirect: n,
                  redirectUniversalLink: o,
                  href: s,
                } = w.formatNativeUrl(e, this.uri, i);
              (this.redirectDeeplink = n),
                (this.redirectUniversalLink = o),
                (this.target = w.isIframe() ? "_top" : "_self"),
                x.setWcLinking({ name: r, href: s }),
                x.setRecentWallet(this.wallet),
                this.preferUniversalLinks && this.redirectUniversalLink
                  ? w.openHref(this.redirectUniversalLink, this.target)
                  : w.openHref(this.redirectDeeplink, this.target);
            } catch (e) {
              C.sendEvent({
                type: "track",
                event: "CONNECT_PROXY_ERROR",
                properties: {
                  message:
                    e instanceof Error
                      ? e.message
                      : "Error parsing the deeplink",
                  uri: this.uri,
                  mobile_link: this.wallet.mobile_link,
                  name: this.wallet.name,
                },
              }),
                (this.error = !0);
            }
        }),
        !this.wallet)
      )
        throw new Error("w3m-connecting-wc-mobile: No wallet provided");
      (this.secondaryBtnLabel = "Open"),
        (this.secondaryLabel = W.CONNECT_LABELS.MOBILE),
        (this.secondaryBtnIcon = "externalLink"),
        this.onHandleURI(),
        this.unsubscribe.push(
          x.subscribeKey("wcUri", () => {
            this.onHandleURI();
          })
        ),
        C.sendEvent({
          type: "track",
          event: "SELECT_WALLET",
          properties: {
            name: this.wallet.name,
            platform: "mobile",
            displayIndex: this.wallet?.display_index,
            walletRank: this.wallet.order,
            view: h.state.view,
          },
        });
    }
    disconnectedCallback() {
      super.disconnectedCallback(), clearTimeout(this.btnLabelTimeout);
    }
    onHandleURI() {
      (this.isLoading = !this.uri),
        !this.ready && this.uri && ((this.ready = !0), this.onConnect?.());
    }
    onTryAgain() {
      x.setWcError(!1), this.onConnect?.();
    }
  };
ht([p()], Ge.prototype, "redirectDeeplink", void 0);
ht([p()], Ge.prototype, "redirectUniversalLink", void 0);
ht([p()], Ge.prototype, "target", void 0);
ht([p()], Ge.prototype, "preferUniversalLinks", void 0);
ht([p()], Ge.prototype, "isLoading", void 0);
Ge = ht([d("w3m-connecting-wc-mobile")], Ge);
var Lo = g`
  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: ${({ borderRadius: t }) => t[4]};
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: ${({ durations: t }) => t.xl};
    animation-timing-function: ${({ easings: t }) => t["ease-out-power-2"]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
var Do = function (t, e, i, r) {
    var n = arguments.length,
      o =
        n < 3
          ? e
          : r === null
          ? (r = Object.getOwnPropertyDescriptor(e, i))
          : r,
      s;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      o = Reflect.decorate(t, e, i, r);
    else
      for (var a = t.length - 1; a >= 0; a--)
        (s = t[a]) && (o = (n < 3 ? s(o) : n > 3 ? s(e, i, o) : s(e, i)) || o);
    return n > 3 && o && Object.defineProperty(e, i, o), o;
  },
  qt = class extends _ {
    constructor() {
      super(), (this.basic = !1);
    }
    firstUpdated() {
      this.basic ||
        C.sendEvent({
          type: "track",
          event: "SELECT_WALLET",
          properties: {
            name: this.wallet?.name ?? "WalletConnect",
            platform: "qrcode",
            displayIndex: this.wallet?.display_index,
            walletRank: this.wallet?.order,
            view: h.state.view,
          },
        });
    }
    disconnectedCallback() {
      super.disconnectedCallback(), this.unsubscribe?.forEach((e) => e());
    }
    render() {
      return (
        this.onRenderProxy(),
        l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["0", "5", "5", "5"]}
        gap="5"
      >
        <wui-shimmer width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>
        <wui-text variant="lg-medium" color="primary"> Scan this QR Code with your phone </wui-text>
        ${this.copyTemplate()}
      </wui-flex>
      <w3m-mobile-download-links .wallet=${
        this.wallet
      }></w3m-mobile-download-links>
    `
      );
    }
    onRenderProxy() {
      !this.ready && this.uri && (this.ready = !0);
    }
    qrCodeTemplate() {
      if (!this.uri || !this.ready) return null;
      let e = this.wallet ? this.wallet.name : void 0;
      return (
        x.setWcLinking(void 0),
        x.setRecentWallet(this.wallet),
        l` <wui-qr-code
      theme=${gt.state.themeMode}
      uri=${this.uri}
      imageSrc=${f(k.getWalletImage(this.wallet))}
      color=${f(gt.state.themeVariables["--w3m-qr-color"])}
      alt=${f(e)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`
      );
    }
    copyTemplate() {
      let e = !this.uri || !this.ready;
      return l`<wui-button
      .disabled=${e}
      @click=${this.onCopyUri}
      variant="neutral-secondary"
      size="sm"
      data-testid="copy-wc2-uri"
    >
      Copy link
      <wui-icon size="sm" color="inherit" name="copy" slot="iconRight"></wui-icon>
    </wui-button>`;
    }
  };
qt.styles = Lo;
Do([c({ type: Boolean })], qt.prototype, "basic", void 0);
qt = Do([d("w3m-connecting-wc-qrcode")], qt);
var br = function (t, e, i, r) {
    var n = arguments.length,
      o =
        n < 3
          ? e
          : r === null
          ? (r = Object.getOwnPropertyDescriptor(e, i))
          : r,
      s;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      o = Reflect.decorate(t, e, i, r);
    else
      for (var a = t.length - 1; a >= 0; a--)
        (s = t[a]) && (o = (n < 3 ? s(o) : n > 3 ? s(e, i, o) : s(e, i)) || o);
    return n > 3 && o && Object.defineProperty(e, i, o), o;
  },
  Uo = class extends m {
    constructor() {
      if ((super(), (this.wallet = h.state.data?.wallet), !this.wallet))
        throw new Error("w3m-connecting-wc-unsupported: No wallet provided");
      C.sendEvent({
        type: "track",
        event: "SELECT_WALLET",
        properties: {
          name: this.wallet.name,
          platform: "browser",
          displayIndex: this.wallet?.display_index,
          walletRank: this.wallet?.order,
          view: h.state.view,
        },
      });
    }
    render() {
      return l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["10", "5", "5", "5"]}
        gap="5"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${f(k.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="md-regular" color="primary">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${
        this.wallet
      }></w3m-mobile-download-links>
    `;
    }
  };
Uo = br([d("w3m-connecting-wc-unsupported")], Uo);
var jo = function (t, e, i, r) {
    var n = arguments.length,
      o =
        n < 3
          ? e
          : r === null
          ? (r = Object.getOwnPropertyDescriptor(e, i))
          : r,
      s;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      o = Reflect.decorate(t, e, i, r);
    else
      for (var a = t.length - 1; a >= 0; a--)
        (s = t[a]) && (o = (n < 3 ? s(o) : n > 3 ? s(e, i, o) : s(e, i)) || o);
    return n > 3 && o && Object.defineProperty(e, i, o), o;
  },
  ui = class extends _ {
    constructor() {
      if ((super(), (this.isLoading = !0), !this.wallet))
        throw new Error("w3m-connecting-wc-web: No wallet provided");
      (this.onConnect = this.onConnectProxy.bind(this)),
        (this.secondaryBtnLabel = "Open"),
        (this.secondaryLabel = W.CONNECT_LABELS.MOBILE),
        (this.secondaryBtnIcon = "externalLink"),
        this.updateLoadingState(),
        this.unsubscribe.push(
          x.subscribeKey("wcUri", () => {
            this.updateLoadingState();
          })
        ),
        C.sendEvent({
          type: "track",
          event: "SELECT_WALLET",
          properties: {
            name: this.wallet.name,
            platform: "web",
            displayIndex: this.wallet?.display_index,
            walletRank: this.wallet?.order,
            view: h.state.view,
          },
        });
    }
    updateLoadingState() {
      this.isLoading = !this.uri;
    }
    onConnectProxy() {
      if (this.wallet?.webapp_link && this.uri)
        try {
          this.error = !1;
          let { webapp_link: e, name: i } = this.wallet,
            { redirect: r, href: n } = w.formatUniversalUrl(e, this.uri);
          x.setWcLinking({ name: i, href: n }),
            x.setRecentWallet(this.wallet),
            w.openHref(r, "_blank");
        } catch {
          this.error = !0;
        }
    }
  };
jo([p()], ui.prototype, "isLoading", void 0);
ui = jo([d("w3m-connecting-wc-web")], ui);
var Bo = g`
  :host([data-mobile-fullscreen='true']) {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  :host([data-mobile-fullscreen='true']) wui-ux-by-reown {
    margin-top: auto;
  }
`;
var Ye = function (t, e, i, r) {
    var n = arguments.length,
      o =
        n < 3
          ? e
          : r === null
          ? (r = Object.getOwnPropertyDescriptor(e, i))
          : r,
      s;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      o = Reflect.decorate(t, e, i, r);
    else
      for (var a = t.length - 1; a >= 0; a--)
        (s = t[a]) && (o = (n < 3 ? s(o) : n > 3 ? s(e, i, o) : s(e, i)) || o);
    return n > 3 && o && Object.defineProperty(e, i, o), o;
  },
  We = class extends m {
    constructor() {
      super(),
        (this.wallet = h.state.data?.wallet),
        (this.unsubscribe = []),
        (this.platform = void 0),
        (this.platforms = []),
        (this.isSiwxEnabled = !!b.state.siwx),
        (this.remoteFeatures = b.state.remoteFeatures),
        (this.displayBranding = !0),
        (this.basic = !1),
        this.determinePlatforms(),
        this.initializeConnection(),
        this.unsubscribe.push(
          b.subscribeKey("remoteFeatures", (e) => (this.remoteFeatures = e))
        );
    }
    disconnectedCallback() {
      this.unsubscribe.forEach((e) => e());
    }
    render() {
      return (
        b.state.enableMobileFullScreen &&
          this.setAttribute("data-mobile-fullscreen", "true"),
        l`
      ${this.headerTemplate()}
      <div class="platform-container">${this.platformTemplate()}</div>
      ${this.reownBrandingTemplate()}
    `
      );
    }
    reownBrandingTemplate() {
      return !this.remoteFeatures?.reownBranding || !this.displayBranding
        ? null
        : l`<wui-ux-by-reown></wui-ux-by-reown>`;
    }
    initializeConnection(e = !1) {
      return R(this, null, function* () {
        if (!(this.platform === "browser" || (b.state.manualWCControl && !e)))
          try {
            let { wcPairingExpiry: i, status: r } = x.state,
              { redirectView: n } = h.state.data ?? {};
            if (
              e ||
              b.state.enableEmbedded ||
              w.isPairingExpired(i) ||
              r === "connecting"
            ) {
              let o = x.getConnections(u.state.activeChain),
                s = this.remoteFeatures?.multiWallet,
                a = o.length > 0;
              yield x.connectWalletConnect({ cache: "never" }),
                this.isSiwxEnabled ||
                  (a && s
                    ? (h.replace("ProfileWallets"),
                      I.showSuccess("New Wallet Added"))
                    : n
                    ? h.replace(n)
                    : O.close());
            }
          } catch (i) {
            if (
              i instanceof Error &&
              i.message.includes(
                "An error occurred when attempting to switch chain"
              ) &&
              !b.state.enableNetworkSwitch &&
              u.state.activeChain
            ) {
              u.setActiveCaipNetwork(
                Ai.getUnsupportedNetwork(
                  `${u.state.activeChain}:${u.state.activeCaipNetwork?.id}`
                )
              ),
                u.showUnsupportedChainUI();
              return;
            }
            i instanceof et &&
            i.originalName === Ze.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST
              ? C.sendEvent({
                  type: "track",
                  event: "USER_REJECTED",
                  properties: { message: i.message },
                })
              : C.sendEvent({
                  type: "track",
                  event: "CONNECT_ERROR",
                  properties: { message: i?.message ?? "Unknown" },
                }),
              x.setWcError(!0),
              I.showError(i.message ?? "Connection error"),
              x.resetWcConnection(),
              h.goBack();
          }
      });
    }
    determinePlatforms() {
      if (!this.wallet) {
        this.platforms.push("qrcode"), (this.platform = "qrcode");
        return;
      }
      if (this.platform) return;
      let {
          mobile_link: e,
          desktop_link: i,
          webapp_link: r,
          injected: n,
          rdns: o,
        } = this.wallet,
        s = n?.map(({ injected_id: ae }) => ae).filter(Boolean),
        a = [...(o ? [o] : s ?? [])],
        A = b.state.isUniversalProvider ? !1 : a.length,
        S = e,
        L = r,
        G = x.checkInstalled(a),
        te = A && G,
        ti = i && !w.isMobile();
      te && !u.state.noAdapters && this.platforms.push("browser"),
        S && this.platforms.push(w.isMobile() ? "mobile" : "qrcode"),
        L && this.platforms.push("web"),
        ti && this.platforms.push("desktop"),
        !te && A && !u.state.noAdapters && this.platforms.push("unsupported"),
        (this.platform = this.platforms[0]);
    }
    platformTemplate() {
      switch (this.platform) {
        case "browser":
          return l`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;
        case "web":
          return l`<w3m-connecting-wc-web></w3m-connecting-wc-web>`;
        case "desktop":
          return l`
          <w3m-connecting-wc-desktop .onRetry=${() =>
            this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;
        case "mobile":
          return l`
          <w3m-connecting-wc-mobile isMobile .onRetry=${() =>
            this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;
        case "qrcode":
          return l`<w3m-connecting-wc-qrcode ?basic=${this.basic}></w3m-connecting-wc-qrcode>`;
        default:
          return l`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`;
      }
    }
    headerTemplate() {
      return this.platforms.length > 1
        ? l`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `
        : null;
    }
    onSelectPlatform(e) {
      return R(this, null, function* () {
        let i = this.shadowRoot?.querySelector("div");
        i &&
          (yield i.animate([{ opacity: 1 }, { opacity: 0 }], {
            duration: 200,
            fill: "forwards",
            easing: "ease",
          }).finished,
          (this.platform = e),
          i.animate([{ opacity: 0 }, { opacity: 1 }], {
            duration: 200,
            fill: "forwards",
            easing: "ease",
          }));
      });
    }
  };
We.styles = Bo;
Ye([p()], We.prototype, "platform", void 0);
Ye([p()], We.prototype, "platforms", void 0);
Ye([p()], We.prototype, "isSiwxEnabled", void 0);
Ye([p()], We.prototype, "remoteFeatures", void 0);
Ye([c({ type: Boolean })], We.prototype, "displayBranding", void 0);
Ye([c({ type: Boolean })], We.prototype, "basic", void 0);
We = Ye([d("w3m-connecting-wc-view")], We);
var di = function (t, e, i, r) {
    var n = arguments.length,
      o =
        n < 3
          ? e
          : r === null
          ? (r = Object.getOwnPropertyDescriptor(e, i))
          : r,
      s;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      o = Reflect.decorate(t, e, i, r);
    else
      for (var a = t.length - 1; a >= 0; a--)
        (s = t[a]) && (o = (n < 3 ? s(o) : n > 3 ? s(e, i, o) : s(e, i)) || o);
    return n > 3 && o && Object.defineProperty(e, i, o), o;
  },
  Gt = class extends m {
    constructor() {
      super(),
        (this.unsubscribe = []),
        (this.isMobile = w.isMobile()),
        (this.remoteFeatures = b.state.remoteFeatures),
        this.unsubscribe.push(
          b.subscribeKey("remoteFeatures", (e) => (this.remoteFeatures = e))
        );
    }
    disconnectedCallback() {
      this.unsubscribe.forEach((e) => e());
    }
    render() {
      if (this.isMobile) {
        let { featured: e, recommended: i } = E.state,
          { customWallets: r } = b.state,
          n = ie.getRecentWallets(),
          o = e.length || i.length || r?.length || n.length;
        return l`<wui-flex flexDirection="column" gap="2" .margin=${[
          "1",
          "3",
          "3",
          "3",
        ]}>
        ${o ? l`<w3m-connector-list></w3m-connector-list>` : null}
        <w3m-all-wallets-widget></w3m-all-wallets-widget>
      </wui-flex>`;
      }
      return l`<wui-flex flexDirection="column" .padding=${[
        "0",
        "0",
        "4",
        "0",
      ]}>
        <w3m-connecting-wc-view ?basic=${!0} .displayBranding=${!1}></w3m-connecting-wc-view>
        <wui-flex flexDirection="column" .padding=${["0", "3", "0", "3"]}>
          <w3m-all-wallets-widget></w3m-all-wallets-widget>
        </wui-flex>
      </wui-flex>
      ${this.reownBrandingTemplate()} `;
    }
    reownBrandingTemplate() {
      return this.remoteFeatures?.reownBranding
        ? l` <wui-flex flexDirection="column" .padding=${["1", "0", "1", "0"]}>
      <wui-ux-by-reown></wui-ux-by-reown>
    </wui-flex>`
        : null;
    }
  };
di([p()], Gt.prototype, "isMobile", void 0);
di([p()], Gt.prototype, "remoteFeatures", void 0);
Gt = di([d("w3m-connecting-wc-basic-view")], Gt);
var zo = N`
  .continue-button-container {
    width: 100%;
  }
`;
var Fo = function (t, e, i, r) {
    var n = arguments.length,
      o =
        n < 3
          ? e
          : r === null
          ? (r = Object.getOwnPropertyDescriptor(e, i))
          : r,
      s;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      o = Reflect.decorate(t, e, i, r);
    else
      for (var a = t.length - 1; a >= 0; a--)
        (s = t[a]) && (o = (n < 3 ? s(o) : n > 3 ? s(e, i, o) : s(e, i)) || o);
    return n > 3 && o && Object.defineProperty(e, i, o), o;
  },
  Yt = class extends m {
    constructor() {
      super(...arguments), (this.loading = !1);
    }
    render() {
      return l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="6"
        .padding=${["0", "0", "4", "0"]}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link
          @click=${() => {
            w.openHref(xi.URLS.FAQ, "_blank");
          }}
        >
          Learn more about names
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-link>
      </wui-flex>
    `;
    }
    onboardingTemplate() {
      return l` <wui-flex
      flexDirection="column"
      gap="6"
      alignItems="center"
      .padding=${["0", "6", "0", "6"]}
    >
      <wui-flex gap="3" alignItems="center" justifyContent="center">
        <wui-icon-box icon="id" size="xl" iconSize="xxl" color="default"></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="3">
        <wui-text align="center" variant="lg-medium" color="primary">
          Choose your account name
        </wui-text>
        <wui-text align="center" variant="md-regular" color="primary">
          Finally say goodbye to 0x addresses, name your account to make it easier to exchange
          assets
        </wui-text>
      </wui-flex>
    </wui-flex>`;
    }
    buttonsTemplate() {
      return l`<wui-flex
      .padding=${["0", "8", "0", "8"]}
      gap="3"
      class="continue-button-container"
    >
      <wui-button
        fullWidth
        .loading=${this.loading}
        size="lg"
        borderRadius="xs"
        @click=${this.handleContinue.bind(this)}
        >Choose name
      </wui-button>
    </wui-flex>`;
    }
    handleContinue() {
      h.push("RegisterAccountName"),
        C.sendEvent({
          type: "track",
          event: "OPEN_ENS_FLOW",
          properties: {
            isSmartAccount:
              Y(u.state.activeChain) === U.ACCOUNT_TYPES.SMART_ACCOUNT,
          },
        });
    }
  };
Yt.styles = zo;
Fo([p()], Yt.prototype, "loading", void 0);
Yt = Fo([d("w3m-choose-account-name-view")], Yt);
var gr = function (t, e, i, r) {
    var n = arguments.length,
      o =
        n < 3
          ? e
          : r === null
          ? (r = Object.getOwnPropertyDescriptor(e, i))
          : r,
      s;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      o = Reflect.decorate(t, e, i, r);
    else
      for (var a = t.length - 1; a >= 0; a--)
        (s = t[a]) && (o = (n < 3 ? s(o) : n > 3 ? s(e, i, o) : s(e, i)) || o);
    return n > 3 && o && Object.defineProperty(e, i, o), o;
  },
  Mo = class extends m {
    constructor() {
      super(...arguments), (this.wallet = h.state.data?.wallet);
    }
    render() {
      if (!this.wallet) throw new Error("w3m-downloads-view");
      return l`
      <wui-flex gap="2" flexDirection="column" .padding=${["3", "3", "4", "3"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `;
    }
    chromeTemplate() {
      return this.wallet?.chrome_store
        ? l`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">Chrome Extension</wui-text>
    </wui-list-item>`
        : null;
    }
    iosTemplate() {
      return this.wallet?.app_store
        ? l`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">iOS App</wui-text>
    </wui-list-item>`
        : null;
    }
    androidTemplate() {
      return this.wallet?.play_store
        ? l`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">Android App</wui-text>
    </wui-list-item>`
        : null;
    }
    homepageTemplate() {
      return this.wallet?.homepage
        ? l`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="md-medium" color="primary">Website</wui-text>
      </wui-list-item>
    `
        : null;
    }
    openStore(e) {
      e.href &&
        this.wallet &&
        (C.sendEvent({
          type: "track",
          event: "GET_WALLET",
          properties: {
            name: this.wallet.name,
            walletRank: this.wallet.order,
            explorerId: this.wallet.id,
            type: e.type,
          },
        }),
        w.openHref(e.href, "_blank"));
    }
    onChromeStore() {
      this.wallet?.chrome_store &&
        this.openStore({
          href: this.wallet.chrome_store,
          type: "chrome_store",
        });
    }
    onAppStore() {
      this.wallet?.app_store &&
        this.openStore({ href: this.wallet.app_store, type: "app_store" });
    }
    onPlayStore() {
      this.wallet?.play_store &&
        this.openStore({ href: this.wallet.play_store, type: "play_store" });
    }
    onHomePage() {
      this.wallet?.homepage &&
        this.openStore({ href: this.wallet.homepage, type: "homepage" });
    }
  };
Mo = gr([d("w3m-downloads-view")], Mo);
var yr = function (t, e, i, r) {
    var n = arguments.length,
      o =
        n < 3
          ? e
          : r === null
          ? (r = Object.getOwnPropertyDescriptor(e, i))
          : r,
      s;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      o = Reflect.decorate(t, e, i, r);
    else
      for (var a = t.length - 1; a >= 0; a--)
        (s = t[a]) && (o = (n < 3 ? s(o) : n > 3 ? s(e, i, o) : s(e, i)) || o);
    return n > 3 && o && Object.defineProperty(e, i, o), o;
  },
  xr = "https://walletconnect.com/explorer",
  Vo = class extends m {
    render() {
      return l`
      <wui-flex flexDirection="column" .padding=${["0", "3", "3", "3"]} gap="2">
        ${this.recommendedWalletsTemplate()}
        <w3m-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          size="sm"
          @click=${() => {
            w.openHref(
              "https://walletconnect.com/explorer?type=wallet",
              "_blank"
            );
          }}
        ></w3m-list-wallet>
      </wui-flex>
    `;
    }
    recommendedWalletsTemplate() {
      let { recommended: e, featured: i } = E.state,
        { customWallets: r } = b.state;
      return [...i, ...(r ?? []), ...e].slice(0, 4).map(
        (o, s) => l`
        <w3m-list-wallet
          displayIndex=${s}
          name=${o.name ?? "Unknown"}
          tagVariant="accent"
          size="sm"
          imageSrc=${f(k.getWalletImage(o))}
          @click=${() => {
            this.onWalletClick(o);
          }}
        ></w3m-list-wallet>
      `
      );
    }
    onWalletClick(e) {
      C.sendEvent({
        type: "track",
        event: "GET_WALLET",
        properties: {
          name: e.name,
          walletRank: void 0,
          explorerId: e.id,
          type: "homepage",
        },
      }),
        w.openHref(e.homepage ?? xr, "_blank");
    }
  };
Vo = yr([d("w3m-get-wallet-view")], Vo);
var Ho = function (t, e, i, r) {
    var n = arguments.length,
      o =
        n < 3
          ? e
          : r === null
          ? (r = Object.getOwnPropertyDescriptor(e, i))
          : r,
      s;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      o = Reflect.decorate(t, e, i, r);
    else
      for (var a = t.length - 1; a >= 0; a--)
        (s = t[a]) && (o = (n < 3 ? s(o) : n > 3 ? s(e, i, o) : s(e, i)) || o);
    return n > 3 && o && Object.defineProperty(e, i, o), o;
  },
  mi = class extends m {
    constructor() {
      super(...arguments), (this.data = []);
    }
    render() {
      return l`
      <wui-flex flexDirection="column" alignItems="center" gap="4">
        ${this.data.map(
          (e) => l`
            <wui-flex flexDirection="column" alignItems="center" gap="5">
              <wui-flex flexDirection="row" justifyContent="center" gap="1">
                ${e.images.map(
                  (i) => l`<wui-visual size="sm" name=${i}></wui-visual>`
                )}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="1">
              <wui-text variant="md-regular" color="primary" align="center">${
                e.title
              }</wui-text>
              <wui-text variant="sm-regular" color="secondary" align="center"
                >${e.text}</wui-text
              >
            </wui-flex>
          `
        )}
      </wui-flex>
    `;
    }
  };
Ho([c({ type: Array })], mi.prototype, "data", void 0);
mi = Ho([d("w3m-help-widget")], mi);
var Cr = function (t, e, i, r) {
    var n = arguments.length,
      o =
        n < 3
          ? e
          : r === null
          ? (r = Object.getOwnPropertyDescriptor(e, i))
          : r,
      s;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      o = Reflect.decorate(t, e, i, r);
    else
      for (var a = t.length - 1; a >= 0; a--)
        (s = t[a]) && (o = (n < 3 ? s(o) : n > 3 ? s(e, i, o) : s(e, i)) || o);
    return n > 3 && o && Object.defineProperty(e, i, o), o;
  },
  vr = [
    {
      images: ["login", "profile", "lock"],
      title: "One login for all of web3",
      text: "Log in to any app by connecting your wallet. Say goodbye to countless passwords!",
    },
    {
      images: ["defi", "nft", "eth"],
      title: "A home for your digital assets",
      text: "A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs.",
    },
    {
      images: ["browser", "noun", "dao"],
      title: "Your gateway to a new web",
      text: "With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more.",
    },
  ],
  Ko = class extends m {
    render() {
      return l`
      <wui-flex
        flexDirection="column"
        .padding=${["6", "5", "5", "5"]}
        alignItems="center"
        gap="5"
      >
        <w3m-help-widget .data=${vr}></w3m-help-widget>
        <wui-button variant="accent-primary" size="md" @click=${this.onGetWallet.bind(
          this
        )}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a wallet
        </wui-button>
      </wui-flex>
    `;
    }
    onGetWallet() {
      C.sendEvent({ type: "track", event: "CLICK_GET_WALLET_HELP" }),
        h.push("GetWallet");
    }
  };
Ko = Cr([d("w3m-what-is-a-wallet-view")], Ko);
var qo = g`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    transition: opacity ${({ durations: t }) => t.lg}
      ${({ easings: t }) => t["ease-out-power-2"]};
    will-change: opacity;
  }
  wui-flex::-webkit-scrollbar {
    display: none;
  }
  wui-flex.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`;
var Go = function (t, e, i, r) {
    var n = arguments.length,
      o =
        n < 3
          ? e
          : r === null
          ? (r = Object.getOwnPropertyDescriptor(e, i))
          : r,
      s;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      o = Reflect.decorate(t, e, i, r);
    else
      for (var a = t.length - 1; a >= 0; a--)
        (s = t[a]) && (o = (n < 3 ? s(o) : n > 3 ? s(e, i, o) : s(e, i)) || o);
    return n > 3 && o && Object.defineProperty(e, i, o), o;
  },
  Xt = class extends m {
    constructor() {
      super(),
        (this.unsubscribe = []),
        (this.checked = tt.state.isLegalCheckboxChecked),
        this.unsubscribe.push(
          tt.subscribeKey("isLegalCheckboxChecked", (e) => {
            this.checked = e;
          })
        );
    }
    disconnectedCallback() {
      this.unsubscribe.forEach((e) => e());
    }
    render() {
      let { termsConditionsUrl: e, privacyPolicyUrl: i } = b.state,
        r = b.state.features?.legalCheckbox,
        o = !!(e || i) && !!r,
        s = o && !this.checked,
        a = s ? -1 : void 0;
      return l`
      <w3m-legal-checkbox></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${o ? ["0", "3", "3", "3"] : "3"}
        gap="2"
        class=${f(s ? "disabled" : void 0)}
      >
        <w3m-wallet-login-list tabIdx=${f(a)}></w3m-wallet-login-list>
      </wui-flex>
    `;
    }
  };
Xt.styles = qo;
Go([p()], Xt.prototype, "checked", void 0);
Xt = Go([d("w3m-connect-wallets-view")], Xt);
var Yo = g`
  :host {
    display: block;
    width: 120px;
    height: 120px;
  }

  svg {
    width: 120px;
    height: 120px;
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
  }

  use {
    stroke: ${(t) => t.colors.accent100};
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;
var $r = function (t, e, i, r) {
    var n = arguments.length,
      o =
        n < 3
          ? e
          : r === null
          ? (r = Object.getOwnPropertyDescriptor(e, i))
          : r,
      s;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      o = Reflect.decorate(t, e, i, r);
    else
      for (var a = t.length - 1; a >= 0; a--)
        (s = t[a]) && (o = (n < 3 ? s(o) : n > 3 ? s(e, i, o) : s(e, i)) || o);
    return n > 3 && o && Object.defineProperty(e, i, o), o;
  },
  hi = class extends m {
    render() {
      return l`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `;
    }
  };
hi.styles = [v, Yo];
hi = $r([d("wui-loading-hexagon")], hi);
var Xo = N`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`;
var fi = function (t, e, i, r) {
    var n = arguments.length,
      o =
        n < 3
          ? e
          : r === null
          ? (r = Object.getOwnPropertyDescriptor(e, i))
          : r,
      s;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      o = Reflect.decorate(t, e, i, r);
    else
      for (var a = t.length - 1; a >= 0; a--)
        (s = t[a]) && (o = (n < 3 ? s(o) : n > 3 ? s(e, i, o) : s(e, i)) || o);
    return n > 3 && o && Object.defineProperty(e, i, o), o;
  },
  Tt = class extends m {
    constructor() {
      super(),
        (this.network = h.state.data?.network),
        (this.unsubscribe = []),
        (this.showRetry = !1),
        (this.error = !1);
    }
    disconnectedCallback() {
      this.unsubscribe.forEach((e) => e());
    }
    firstUpdated() {
      this.onSwitchNetwork();
    }
    render() {
      if (!this.network)
        throw new Error("w3m-network-switch-view: No network provided");
      this.onShowRetry();
      let e = this.getLabel(),
        i = this.getSubLabel();
      return l`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${["10", "5", "10", "5"]}
        gap="7"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${f(k.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error ? null : l`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box color="error" icon="close" size="sm"></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="2">
          <wui-text align="center" variant="h6-regular" color="primary">${e}</wui-text>
          <wui-text align="center" variant="md-regular" color="secondary">${i}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="accent-primary"
          size="md"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `;
    }
    getSubLabel() {
      let e = y.getConnectorId(u.state.activeChain);
      return y.getAuthConnector() && e === $.CONNECTOR_ID.AUTH
        ? ""
        : this.error
        ? "Switch can be declined if chain is not supported by a wallet or previous request is still active"
        : "Accept connection request in your wallet";
    }
    getLabel() {
      let e = y.getConnectorId(u.state.activeChain);
      return y.getAuthConnector() && e === $.CONNECTOR_ID.AUTH
        ? `Switching to ${this.network?.name ?? "Unknown"} network...`
        : this.error
        ? "Switch declined"
        : "Approve in wallet";
    }
    onShowRetry() {
      this.error &&
        !this.showRetry &&
        ((this.showRetry = !0),
        this.shadowRoot
          ?.querySelector("wui-button")
          ?.animate([{ opacity: 0 }, { opacity: 1 }], {
            fill: "forwards",
            easing: "ease",
          }));
    }
    onSwitchNetwork() {
      return R(this, null, function* () {
        try {
          (this.error = !1),
            u.state.activeChain !== this.network?.chainNamespace &&
              u.setIsSwitchingNamespace(!0),
            this.network &&
              (yield u.switchActiveNetwork(this.network),
              (yield yt.isAuthenticated()) && h.goBack());
        } catch {
          this.error = !0;
        }
      });
    }
  };
Tt.styles = Xo;
fi([p()], Tt.prototype, "showRetry", void 0);
fi([p()], Tt.prototype, "error", void 0);
Tt = fi([d("w3m-network-switch-view")], Tt);
var Qo = g`
  :host {
    width: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({ spacing: t }) => t[3]};
    width: 100%;
    background-color: transparent;
    border-radius: ${({ borderRadius: t }) => t[4]};
  }

  wui-text {
    text-transform: capitalize;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({ tokens: t }) => t.theme.foregroundPrimary};
    }
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
var It = function (t, e, i, r) {
    var n = arguments.length,
      o =
        n < 3
          ? e
          : r === null
          ? (r = Object.getOwnPropertyDescriptor(e, i))
          : r,
      s;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      o = Reflect.decorate(t, e, i, r);
    else
      for (var a = t.length - 1; a >= 0; a--)
        (s = t[a]) && (o = (n < 3 ? s(o) : n > 3 ? s(e, i, o) : s(e, i)) || o);
    return n > 3 && o && Object.defineProperty(e, i, o), o;
  },
  Xe = class extends m {
    constructor() {
      super(...arguments),
        (this.imageSrc = void 0),
        (this.name = "Ethereum"),
        (this.disabled = !1);
    }
    render() {
      return l`
      <button ?disabled=${this.disabled} tabindex=${f(this.tabIdx)}>
        <wui-flex gap="2" alignItems="center">
          ${this.imageTemplate()}
          <wui-text variant="lg-regular" color="primary">${this.name}</wui-text>
        </wui-flex>
        <wui-icon name="chevronRight" size="lg" color="default"></wui-icon>
      </button>
    `;
    }
    imageTemplate() {
      return this.imageSrc
        ? l`<wui-image ?boxed=${!0} src=${this.imageSrc}></wui-image>`
        : l`<wui-image
      ?boxed=${!0}
      icon="networkPlaceholder"
      size="lg"
      iconColor="default"
    ></wui-image>`;
    }
  };
Xe.styles = [v, T, Qo];
It([c()], Xe.prototype, "imageSrc", void 0);
It([c()], Xe.prototype, "name", void 0);
It([c()], Xe.prototype, "tabIdx", void 0);
It([c({ type: Boolean })], Xe.prototype, "disabled", void 0);
Xe = It([d("wui-list-network")], Xe);
var Jo = N`
  .container {
    max-height: 360px;
    overflow: auto;
  }

  .container::-webkit-scrollbar {
    display: none;
  }
`;
var _t = function (t, e, i, r) {
    var n = arguments.length,
      o =
        n < 3
          ? e
          : r === null
          ? (r = Object.getOwnPropertyDescriptor(e, i))
          : r,
      s;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      o = Reflect.decorate(t, e, i, r);
    else
      for (var a = t.length - 1; a >= 0; a--)
        (s = t[a]) && (o = (n < 3 ? s(o) : n > 3 ? s(e, i, o) : s(e, i)) || o);
    return n > 3 && o && Object.defineProperty(e, i, o), o;
  },
  Qe = class extends m {
    constructor() {
      super(),
        (this.unsubscribe = []),
        (this.network = u.state.activeCaipNetwork),
        (this.requestedCaipNetworks = u.getCaipNetworks()),
        (this.search = ""),
        (this.onDebouncedSearch = w.debounce((e) => {
          this.search = e;
        }, 100)),
        this.unsubscribe.push(
          oe.subscribeNetworkImages(() => this.requestUpdate()),
          u.subscribeKey("activeCaipNetwork", (e) => (this.network = e)),
          u.subscribe(() => {
            this.requestedCaipNetworks = u.getAllRequestedCaipNetworks();
          })
        );
    }
    disconnectedCallback() {
      this.unsubscribe.forEach((e) => e());
    }
    render() {
      return l`
      ${this.templateSearchInput()}
      <wui-flex
        class="container"
        .padding=${["0", "3", "3", "3"]}
        flexDirection="column"
        gap="2"
      >
        ${this.networksTemplate()}
      </wui-flex>
    `;
    }
    templateSearchInput() {
      return l`
      <wui-flex gap="2" .padding=${["0", "3", "3", "3"]}>
        <wui-input-text
          @inputChange=${this.onInputChange.bind(this)}
          class="network-search-input"
          size="md"
          placeholder="Search network"
          icon="search"
        ></wui-input-text>
      </wui-flex>
    `;
    }
    onInputChange(e) {
      this.onDebouncedSearch(e.detail);
    }
    networksTemplate() {
      let e = u.getAllApprovedCaipNetworkIds(),
        i = w.sortRequestedNetworks(e, this.requestedCaipNetworks);
      return (
        this.search
          ? (this.filteredNetworks = i?.filter((r) =>
              r?.name?.toLowerCase().includes(this.search.toLowerCase())
            ))
          : (this.filteredNetworks = i),
        this.filteredNetworks?.map(
          (r) => l`
        <wui-list-network
          .selected=${this.network?.id === r.id}
          imageSrc=${f(k.getNetworkImage(r))}
          type="network"
          name=${r.name ?? r.id}
          @click=${() => this.onSwitchNetwork(r)}
          .disabled=${u.isCaipNetworkDisabled(r)}
          data-testid=${`w3m-network-switch-${r.name ?? r.id}`}
        ></wui-list-network>
      `
        )
      );
    }
    onSwitchNetwork(e) {
      Ei.onSwitchNetwork({ network: e });
    }
  };
Qe.styles = Jo;
_t([p()], Qe.prototype, "network", void 0);
_t([p()], Qe.prototype, "requestedCaipNetworks", void 0);
_t([p()], Qe.prototype, "filteredNetworks", void 0);
_t([p()], Qe.prototype, "search", void 0);
Qe = _t([d("w3m-networks-view")], Qe);
var Zo = g`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-visual {
    border-radius: calc(
      ${({ borderRadius: t }) => t[1]} * 9 - ${({ borderRadius: t }) => t[3]}
    );
    position: relative;
    overflow: hidden;
  }

  wui-visual::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(
      ${({ borderRadius: t }) => t[1]} * 9 - ${({ borderRadius: t }) => t[3]}
    );
    box-shadow: inset 0 0 0 1px ${({ tokens: t }) => t.core.glass010};
  }

  wui-icon-box {
    position: absolute;
    right: calc(${({ spacing: t }) => t[1]} * -1);
    bottom: calc(${({ spacing: t }) => t[1]} * -1);
    opacity: 0;
    transform: scale(0.5);
    transition:
      opacity ${({ durations: t }) => t.lg} ${({ easings: t }) =>
  t["ease-out-power-2"]},
      transform ${({ durations: t }) => t.lg}
        ${({ easings: t }) => t["ease-out-power-2"]};
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px ${({ spacing: t }) => t[4]};
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms ${({ easings: t }) => t["ease-out-power-2"]} both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  wui-link {
    padding: ${({ spacing: t }) => t["01"]} ${({ spacing: t }) => t[2]};
  }

  .capitalize {
    text-transform: capitalize;
  }
`;
var er = function (t, e, i, r) {
    var n = arguments.length,
      o =
        n < 3
          ? e
          : r === null
          ? (r = Object.getOwnPropertyDescriptor(e, i))
          : r,
      s;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      o = Reflect.decorate(t, e, i, r);
    else
      for (var a = t.length - 1; a >= 0; a--)
        (s = t[a]) && (o = (n < 3 ? s(o) : n > 3 ? s(e, i, o) : s(e, i)) || o);
    return n > 3 && o && Object.defineProperty(e, i, o), o;
  },
  Er = { eip155: "eth", solana: "solana", bip122: "bitcoin", polkadot: void 0 },
  Qt = class extends m {
    constructor() {
      super(...arguments),
        (this.unsubscribe = []),
        (this.switchToChain = h.state.data?.switchToChain),
        (this.caipNetwork = h.state.data?.network),
        (this.activeChain = u.state.activeChain);
    }
    firstUpdated() {
      this.unsubscribe.push(
        u.subscribeKey("activeChain", (e) => (this.activeChain = e))
      );
    }
    disconnectedCallback() {
      this.unsubscribe.forEach((e) => e());
    }
    render() {
      let e = this.switchToChain
        ? $.CHAIN_NAME_MAP[this.switchToChain]
        : "supported";
      if (!this.switchToChain) return null;
      let i = $.CHAIN_NAME_MAP[this.switchToChain];
      return l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["4", "2", "2", "2"]}
        gap="4"
      >
        <wui-flex justifyContent="center" flexDirection="column" alignItems="center" gap="2">
          <wui-visual
            size="md"
            name=${f(Er[this.switchToChain])}
          ></wui-visual>
          <wui-flex gap="2" flexDirection="column" alignItems="center">
            <wui-text
              data-testid=${`w3m-switch-active-chain-to-${i}`}
              variant="lg-regular"
              color="primary"
              align="center"
              >Switch to <span class="capitalize">${i}</span></wui-text
            >
            <wui-text variant="md-regular" color="secondary" align="center">
              Connected wallet doesn't support connecting to ${e} chain. You
              need to connect with a different wallet.
            </wui-text>
          </wui-flex>
          <wui-button
            data-testid="w3m-switch-active-chain-button"
            size="md"
            @click=${this.switchActiveChain.bind(this)}
            >Switch</wui-button
          >
        </wui-flex>
      </wui-flex>
    `;
    }
    switchActiveChain() {
      return R(this, null, function* () {
        this.switchToChain &&
          (u.setIsSwitchingNamespace(!0),
          y.setFilterByNamespace(this.switchToChain),
          this.caipNetwork
            ? yield u.switchActiveNetwork(this.caipNetwork)
            : u.setActiveNamespace(this.switchToChain),
          h.reset("Connect"));
      });
    }
  };
Qt.styles = Zo;
er([c()], Qt.prototype, "activeChain", void 0);
Qt = er([d("w3m-switch-active-chain-view")], Qt);
var Sr = function (t, e, i, r) {
    var n = arguments.length,
      o =
        n < 3
          ? e
          : r === null
          ? (r = Object.getOwnPropertyDescriptor(e, i))
          : r,
      s;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      o = Reflect.decorate(t, e, i, r);
    else
      for (var a = t.length - 1; a >= 0; a--)
        (s = t[a]) && (o = (n < 3 ? s(o) : n > 3 ? s(e, i, o) : s(e, i)) || o);
    return n > 3 && o && Object.defineProperty(e, i, o), o;
  },
  kr = [
    {
      images: ["network", "layers", "system"],
      title: "The system\u2019s nuts and bolts",
      text: "A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services.",
    },
    {
      images: ["noun", "defiAlt", "dao"],
      title: "Designed for different uses",
      text: "Each network is designed differently, and may therefore suit certain apps and experiences.",
    },
  ],
  tr = class extends m {
    render() {
      return l`
      <wui-flex
        flexDirection="column"
        .padding=${["6", "5", "5", "5"]}
        alignItems="center"
        gap="5"
      >
        <w3m-help-widget .data=${kr}></w3m-help-widget>
        <wui-button
          variant="accent-primary"
          size="md"
          @click=${() => {
            w.openHref(
              "https://ethereum.org/en/developers/docs/networks/",
              "_blank"
            );
          }}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `;
    }
  };
tr = Sr([d("w3m-what-is-a-network-view")], tr);
var ir = N`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`;
var wi = function (t, e, i, r) {
    var n = arguments.length,
      o =
        n < 3
          ? e
          : r === null
          ? (r = Object.getOwnPropertyDescriptor(e, i))
          : r,
      s;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      o = Reflect.decorate(t, e, i, r);
    else
      for (var a = t.length - 1; a >= 0; a--)
        (s = t[a]) && (o = (n < 3 ? s(o) : n > 3 ? s(e, i, o) : s(e, i)) || o);
    return n > 3 && o && Object.defineProperty(e, i, o), o;
  },
  Wt = class extends m {
    constructor() {
      super(),
        (this.swapUnsupportedChain = h.state.data?.swapUnsupportedChain),
        (this.unsubscribe = []),
        (this.disconnecting = !1),
        (this.remoteFeatures = b.state.remoteFeatures),
        this.unsubscribe.push(
          oe.subscribeNetworkImages(() => this.requestUpdate()),
          b.subscribeKey("remoteFeatures", (e) => {
            this.remoteFeatures = e;
          })
        );
    }
    disconnectedCallback() {
      this.unsubscribe.forEach((e) => e());
    }
    render() {
      return l`
      <wui-flex class="container" flexDirection="column" gap="0">
        <wui-flex
          class="container"
          flexDirection="column"
          .padding=${["3", "5", "2", "5"]}
          alignItems="center"
          gap="5"
        >
          ${this.descriptionTemplate()}
        </wui-flex>

        <wui-flex flexDirection="column" padding="3" gap="2"> ${this.networksTemplate()} </wui-flex>

        <wui-separator text="or"></wui-separator>
        <wui-flex flexDirection="column" padding="3" gap="2">
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="signOut"
            ?chevron=${!1}
            .loading=${this.disconnecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="md-medium" color="secondary">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `;
    }
    descriptionTemplate() {
      return this.swapUnsupportedChain
        ? l`
        <wui-text variant="sm-regular" color="secondary" align="center">
          The swap feature doesn’t support your current network. Switch to an available option to
          continue.
        </wui-text>
      `
        : l`
      <wui-text variant="sm-regular" color="secondary" align="center">
        This app doesn’t support your current network. Switch to an available option to continue.
      </wui-text>
    `;
    }
    networksTemplate() {
      let e = u.getAllRequestedCaipNetworks(),
        i = u.getAllApprovedCaipNetworkIds(),
        r = w.sortRequestedNetworks(i, e);
      return (
        this.swapUnsupportedChain
          ? r.filter((o) => W.SWAP_SUPPORTED_NETWORKS.includes(o.caipNetworkId))
          : r
      ).map(
        (o) => l`
        <wui-list-network
          imageSrc=${f(k.getNetworkImage(o))}
          name=${o.name ?? "Unknown"}
          @click=${() => this.onSwitchNetwork(o)}
        >
        </wui-list-network>
      `
      );
    }
    onDisconnect() {
      return R(this, null, function* () {
        try {
          this.disconnecting = !0;
          let e = u.state.activeChain,
            r = x.getConnections(e).length > 0,
            n = e && y.state.activeConnectorIds[e],
            o = this.remoteFeatures?.multiWallet;
          yield x.disconnect(o ? { id: n, namespace: e } : {}),
            r &&
              o &&
              (h.push("ProfileWallets"), I.showSuccess("Wallet deleted"));
        } catch {
          C.sendEvent({
            type: "track",
            event: "DISCONNECT_ERROR",
            properties: { message: "Failed to disconnect" },
          }),
            I.showError("Failed to disconnect");
        } finally {
          this.disconnecting = !1;
        }
      });
    }
    onSwitchNetwork(e) {
      return R(this, null, function* () {
        let i = u.getActiveCaipAddress(),
          r = u.getAllApprovedCaipNetworkIds(),
          n = u.getNetworkProp("supportsAllNetworks", e.chainNamespace),
          o = h.state.data;
        i
          ? r?.includes(e.caipNetworkId)
            ? yield u.switchActiveNetwork(e)
            : n
            ? h.push("SwitchNetwork", ii(Je({}, o), { network: e }))
            : h.push("SwitchNetwork", ii(Je({}, o), { network: e }))
          : i || (u.setActiveCaipNetwork(e), h.push("Connect"));
      });
    }
  };
Wt.styles = ir;
wi([p()], Wt.prototype, "disconnecting", void 0);
wi([p()], Wt.prototype, "remoteFeatures", void 0);
Wt = wi([d("w3m-unsupported-chain-view")], Wt);
var or = g`
  wui-flex {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({ spacing: t }) => t[2]};
    border-radius: ${({ borderRadius: t }) => t[4]};
    padding: ${({ spacing: t }) => t[3]};
  }

  /* -- Types --------------------------------------------------------- */
  wui-flex[data-type='info'] {
    color: ${({ tokens: t }) => t.theme.textSecondary};
    background-color: ${({ tokens: t }) => t.theme.foregroundPrimary};
  }

  wui-flex[data-type='success'] {
    color: ${({ tokens: t }) => t.core.textSuccess};
    background-color: ${({ tokens: t }) => t.core.backgroundSuccess};
  }

  wui-flex[data-type='error'] {
    color: ${({ tokens: t }) => t.core.textError};
    background-color: ${({ tokens: t }) => t.core.backgroundError};
  }

  wui-flex[data-type='warning'] {
    color: ${({ tokens: t }) => t.core.textWarning};
    background-color: ${({ tokens: t }) => t.core.backgroundWarning};
  }

  wui-flex[data-type='info'] wui-icon-box {
    background-color: ${({ tokens: t }) => t.theme.foregroundSecondary};
  }

  wui-flex[data-type='success'] wui-icon-box {
    background-color: ${({ tokens: t }) => t.core.backgroundSuccess};
  }

  wui-flex[data-type='error'] wui-icon-box {
    background-color: ${({ tokens: t }) => t.core.backgroundError};
  }

  wui-flex[data-type='warning'] wui-icon-box {
    background-color: ${({ tokens: t }) => t.core.backgroundWarning};
  }

  wui-text {
    flex: 1;
  }
`;
var Jt = function (t, e, i, r) {
    var n = arguments.length,
      o =
        n < 3
          ? e
          : r === null
          ? (r = Object.getOwnPropertyDescriptor(e, i))
          : r,
      s;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      o = Reflect.decorate(t, e, i, r);
    else
      for (var a = t.length - 1; a >= 0; a--)
        (s = t[a]) && (o = (n < 3 ? s(o) : n > 3 ? s(e, i, o) : s(e, i)) || o);
    return n > 3 && o && Object.defineProperty(e, i, o), o;
  },
  ft = class extends m {
    constructor() {
      super(...arguments),
        (this.icon = "externalLink"),
        (this.text = ""),
        (this.type = "info");
    }
    render() {
      return l`
      <wui-flex alignItems="center" data-type=${this.type}>
        <wui-icon-box size="sm" color="inherit" icon=${this.icon}></wui-icon-box>
        <wui-text variant="md-regular" color="inherit">${this.text}</wui-text>
      </wui-flex>
    `;
    }
  };
ft.styles = [v, T, or];
Jt([c()], ft.prototype, "icon", void 0);
Jt([c()], ft.prototype, "text", void 0);
Jt([c()], ft.prototype, "type", void 0);
ft = Jt([d("wui-banner")], ft);
var rr = N`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`;
var Ar = function (t, e, i, r) {
    var n = arguments.length,
      o =
        n < 3
          ? e
          : r === null
          ? (r = Object.getOwnPropertyDescriptor(e, i))
          : r,
      s;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      o = Reflect.decorate(t, e, i, r);
    else
      for (var a = t.length - 1; a >= 0; a--)
        (s = t[a]) && (o = (n < 3 ? s(o) : n > 3 ? s(e, i, o) : s(e, i)) || o);
    return n > 3 && o && Object.defineProperty(e, i, o), o;
  },
  bi = class extends m {
    constructor() {
      super(), (this.unsubscribe = []);
    }
    disconnectedCallback() {
      this.unsubscribe.forEach((e) => e());
    }
    render() {
      return l` <wui-flex flexDirection="column" .padding=${[
        "2",
        "3",
        "3",
        "3",
      ]} gap="2">
      <wui-banner
        icon="warningCircle"
        text="You can only receive assets on these networks"
      ></wui-banner>
      ${this.networkTemplate()}
    </wui-flex>`;
    }
    networkTemplate() {
      let e = u.getAllRequestedCaipNetworks(),
        i = u.getAllApprovedCaipNetworkIds(),
        r = u.state.activeCaipNetwork,
        n = u.checkIfSmartAccountEnabled(),
        o = w.sortRequestedNetworks(i, e);
      if (n && Y(r?.chainNamespace) === U.ACCOUNT_TYPES.SMART_ACCOUNT) {
        if (!r) return null;
        o = [r];
      }
      return o
        .filter((a) => a.chainNamespace === r?.chainNamespace)
        .map(
          (a) => l`
        <wui-list-network
          imageSrc=${f(k.getNetworkImage(a))}
          name=${a.name ?? "Unknown"}
          ?transparent=${!0}
        >
        </wui-list-network>
      `
        );
    }
  };
bi.styles = rr;
bi = Ar([d("w3m-wallet-compatible-networks-view")], bi);
var nr = g`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 56px;
    height: 56px;
    box-shadow: 0 0 0 8px ${({ tokens: t }) => t.theme.borderPrimary};
    border-radius: ${({ borderRadius: t }) => t[4]};
    overflow: hidden;
  }

  :host([data-border-radius-full='true']) {
    border-radius: 50px;
  }

  wui-icon {
    width: 32px;
    height: 32px;
  }
`;
var Zt = function (t, e, i, r) {
    var n = arguments.length,
      o =
        n < 3
          ? e
          : r === null
          ? (r = Object.getOwnPropertyDescriptor(e, i))
          : r,
      s;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      o = Reflect.decorate(t, e, i, r);
    else
      for (var a = t.length - 1; a >= 0; a--)
        (s = t[a]) && (o = (n < 3 ? s(o) : n > 3 ? s(e, i, o) : s(e, i)) || o);
    return n > 3 && o && Object.defineProperty(e, i, o), o;
  },
  wt = class extends m {
    render() {
      return (
        (this.dataset.borderRadiusFull = this.borderRadiusFull
          ? "true"
          : "false"),
        l`${this.templateVisual()}`
      );
    }
    templateVisual() {
      return this.imageSrc
        ? l`<wui-image src=${this.imageSrc} alt=${this.alt ?? ""}></wui-image>`
        : l`<wui-icon
      data-parent-size="md"
      size="inherit"
      color="inherit"
      name="wallet"
    ></wui-icon>`;
    }
  };
wt.styles = [v, nr];
Zt([c()], wt.prototype, "imageSrc", void 0);
Zt([c()], wt.prototype, "alt", void 0);
Zt([c({ type: Boolean })], wt.prototype, "borderRadiusFull", void 0);
wt = Zt([d("wui-visual-thumbnail")], wt);
var sr = g`
  :host {
    display: flex;
    justify-content: center;
    gap: ${({ spacing: t }) => t[4]};
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`;
var Rr = function (t, e, i, r) {
    var n = arguments.length,
      o =
        n < 3
          ? e
          : r === null
          ? (r = Object.getOwnPropertyDescriptor(e, i))
          : r,
      s;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      o = Reflect.decorate(t, e, i, r);
    else
      for (var a = t.length - 1; a >= 0; a--)
        (s = t[a]) && (o = (n < 3 ? s(o) : n > 3 ? s(e, i, o) : s(e, i)) || o);
    return n > 3 && o && Object.defineProperty(e, i, o), o;
  },
  gi = class extends m {
    constructor() {
      super(...arguments),
        (this.dappImageUrl = b.state.metadata?.icons),
        (this.walletImageUrl = u.getAccountData()?.connectedWalletInfo?.icon);
    }
    firstUpdated() {
      let e = this.shadowRoot?.querySelectorAll("wui-visual-thumbnail");
      e?.[0] && this.createAnimation(e[0], "translate(18px)"),
        e?.[1] && this.createAnimation(e[1], "translate(-18px)");
    }
    render() {
      return l`
      <wui-visual-thumbnail
        ?borderRadiusFull=${!0}
        .imageSrc=${this.dappImageUrl?.[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${
        this.walletImageUrl
      }></wui-visual-thumbnail>
    `;
    }
    createAnimation(e, i) {
      e.animate([{ transform: "translateX(0px)" }, { transform: i }], {
        duration: 1600,
        easing: "cubic-bezier(0.56, 0, 0.48, 1)",
        direction: "alternate",
        iterations: 1 / 0,
      });
    }
  };
gi.styles = sr;
gi = Rr([d("w3m-siwx-sign-message-thumbnails")], gi);
var yi = function (t, e, i, r) {
    var n = arguments.length,
      o =
        n < 3
          ? e
          : r === null
          ? (r = Object.getOwnPropertyDescriptor(e, i))
          : r,
      s;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      o = Reflect.decorate(t, e, i, r);
    else
      for (var a = t.length - 1; a >= 0; a--)
        (s = t[a]) && (o = (n < 3 ? s(o) : n > 3 ? s(e, i, o) : s(e, i)) || o);
    return n > 3 && o && Object.defineProperty(e, i, o), o;
  },
  ei = class extends m {
    constructor() {
      super(...arguments),
        (this.dappName = b.state.metadata?.name),
        (this.isCancelling = !1),
        (this.isSigning = !1);
    }
    render() {
      return l`
      <wui-flex justifyContent="center" .padding=${["8", "0", "6", "0"]}>
        <w3m-siwx-sign-message-thumbnails></w3m-siwx-sign-message-thumbnails>
      </wui-flex>
      <wui-flex .padding=${[
        "0",
        "20",
        "5",
        "20",
      ]} gap="3" justifyContent="space-between">
        <wui-text variant="lg-medium" align="center" color="primary"
          >${this.dappName ?? "Dapp"} needs to connect to your wallet</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${[
        "0",
        "10",
        "4",
        "10",
      ]} gap="3" justifyContent="space-between">
        <wui-text variant="md-regular" align="center" color="secondary"
          >Sign this message to prove you own this wallet and proceed. Canceling will disconnect
          you.</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${[
        "4",
        "5",
        "5",
        "5",
      ]} gap="3" justifyContent="space-between">
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="neutral-secondary"
          ?loading=${this.isCancelling}
          @click=${this.onCancel.bind(this)}
          data-testid="w3m-connecting-siwe-cancel"
        >
          ${this.isCancelling ? "Cancelling..." : "Cancel"}
        </wui-button>
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="neutral-primary"
          @click=${this.onSign.bind(this)}
          ?loading=${this.isSigning}
          data-testid="w3m-connecting-siwe-sign"
        >
          ${this.isSigning ? "Signing..." : "Sign"}
        </wui-button>
      </wui-flex>
    `;
    }
    onSign() {
      return R(this, null, function* () {
        this.isSigning = !0;
        try {
          yield yt.requestSignMessage();
        } catch (e) {
          if (e instanceof Error && e.message.includes("OTP is required")) {
            I.showError({
              message:
                "Something went wrong. We need to verify your account again.",
            }),
              h.replace("DataCapture");
            return;
          }
          throw e;
        } finally {
          this.isSigning = !1;
        }
      });
    }
    onCancel() {
      return R(this, null, function* () {
        (this.isCancelling = !0),
          yield yt.cancelSignMessage().finally(() => (this.isCancelling = !1));
      });
    }
  };
yi([p()], ei.prototype, "isCancelling", void 0);
yi([p()], ei.prototype, "isSigning", void 0);
ei = yi([d("w3m-siwx-sign-message-view")], ei);
export {
  Wi as AppKitAccountButton,
  Pi as AppKitButton,
  Ui as AppKitConnectButton,
  Fi as AppKitNetworkButton,
  _i as W3mAccountButton,
  ge as W3mAccountSettingsView,
  ai as W3mAccountView,
  zt as W3mAllWalletsView,
  Oi as W3mButton,
  Yt as W3mChooseAccountNameView,
  Di as W3mConnectButton,
  ee as W3mConnectView,
  Xt as W3mConnectWalletsView,
  _o as W3mConnectingExternalView,
  Ht as W3mConnectingMultiChainView,
  Gt as W3mConnectingWcBasicView,
  We as W3mConnectingWcView,
  Mo as W3mDownloadsView,
  Tr as W3mFooter,
  Ve as W3mFundWalletView,
  Vo as W3mGetWalletView,
  zi as W3mNetworkButton,
  Tt as W3mNetworkSwitchView,
  Qe as W3mNetworksView,
  q as W3mProfileWalletsView,
  Ir as W3mRouter,
  ei as W3mSIWXSignMessageView,
  Qt as W3mSwitchActiveChainView,
  Wt as W3mUnsupportedChainView,
  bi as W3mWalletCompatibleNetworksView,
  tr as W3mWhatIsANetworkView,
  Ko as W3mWhatIsAWalletView,
};
