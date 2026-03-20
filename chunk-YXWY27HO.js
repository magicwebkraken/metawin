import "./chunk-DGIGPYIT.js";
import "./chunk-B2ZBL5RP.js";
import "./chunk-AP76W5FI.js";
import { a as Y } from "./chunk-PHY5CPHD.js";
import { a as V } from "./chunk-O63J7XX2.js";
import "./chunk-QOIJJ4ZM.js";
import "./chunk-QAXHCUZ6.js";
import "./chunk-TA7UPVQ7.js";
import "./chunk-JEWQBEMQ.js";
import "./chunk-P3SVY5YN.js";
import "./chunk-TCZHDFJ2.js";
import "./chunk-ZUPMI3QZ.js";
import "./chunk-PMNBX4ZJ.js";
import { a as b } from "./chunk-NZR2LZWU.js";
import "./chunk-7TZWJ67Q.js";
import { a as c, b as p } from "./chunk-ISXP6GOO.js";
import {
  b as P,
  c as u,
  d as oe,
  g as R,
  h as ie,
  i as U,
  k as h,
} from "./chunk-L4ZNINEC.js";
import { b as te, e as l, k as m } from "./chunk-ICDT4GZS.js";
import { f as Q, h as N, i as ee, o as j } from "./chunk-HK6N7TS4.js";
import "./chunk-TXWSAHNN.js";
import "./chunk-H4BANHQJ.js";
import "./chunk-IV5FR2YO.js";
import "./chunk-TSLWMKS5.js";
import {
  H as g,
  J as I,
  j as k,
  k as E,
  o as Z,
  p as B,
  q as z,
  r as _,
  s as d,
  t as J,
  u as D,
} from "./chunk-U7GUEFJZ.js";
import "./chunk-GBTQH4B2.js";
import "./chunk-2K64HG7Q.js";
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
import { n as A } from "./chunk-VNDKUXGB.js";
var re = u`
  :host {
    display: block;
    border-radius: clamp(0px, ${({ borderRadius: e }) => e[8]}, 44px);
    box-shadow: 0 0 0 1px ${({ tokens: e }) => e.theme.foregroundPrimary};
    overflow: hidden;
  }
`;
var xe = function (e, t, o, r) {
    var a = arguments.length,
      i =
        a < 3
          ? t
          : r === null
          ? (r = Object.getOwnPropertyDescriptor(t, o))
          : r,
      n;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      i = Reflect.decorate(e, t, o, r);
    else
      for (var s = e.length - 1; s >= 0; s--)
        (n = e[s]) && (i = (a < 3 ? n(i) : a > 3 ? n(t, o, i) : n(t, o)) || i);
    return a > 3 && i && Object.defineProperty(t, o, i), i;
  },
  M = class extends m {
    render() {
      return l`<slot></slot>`;
    }
  };
M.styles = [R, re];
M = xe([h("wui-card")], M);
var ae = u`
  :host {
    width: 100%;
  }

  :host > wui-flex {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({ spacing: e }) => e[2]};
    padding: ${({ spacing: e }) => e[3]};
    border-radius: ${({ borderRadius: e }) => e[6]};
    border: 1px solid ${({ tokens: e }) => e.theme.borderPrimary};
    box-sizing: border-box;
    background-color: ${({ tokens: e }) => e.theme.foregroundPrimary};
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.25);
    color: ${({ tokens: e }) => e.theme.textPrimary};
  }

  :host > wui-flex[data-type='info'] {
    .icon-box {
      background-color: ${({ tokens: e }) => e.theme.foregroundSecondary};

      wui-icon {
        color: ${({ tokens: e }) => e.theme.iconDefault};
      }
    }
  }
  :host > wui-flex[data-type='success'] {
    .icon-box {
      background-color: ${({ tokens: e }) => e.core.backgroundSuccess};

      wui-icon {
        color: ${({ tokens: e }) => e.core.borderSuccess};
      }
    }
  }
  :host > wui-flex[data-type='warning'] {
    .icon-box {
      background-color: ${({ tokens: e }) => e.core.backgroundWarning};

      wui-icon {
        color: ${({ tokens: e }) => e.core.borderWarning};
      }
    }
  }
  :host > wui-flex[data-type='error'] {
    .icon-box {
      background-color: ${({ tokens: e }) => e.core.backgroundError};

      wui-icon {
        color: ${({ tokens: e }) => e.core.borderError};
      }
    }
  }

  wui-flex {
    width: 100%;
  }

  wui-text {
    word-break: break-word;
    flex: 1;
  }

  .close {
    cursor: pointer;
    color: ${({ tokens: e }) => e.theme.iconDefault};
  }

  .icon-box {
    height: 40px;
    width: 40px;
    border-radius: ${({ borderRadius: e }) => e[2]};
    background-color: var(--local-icon-bg-value);
  }
`;
var X = function (e, t, o, r) {
    var a = arguments.length,
      i =
        a < 3
          ? t
          : r === null
          ? (r = Object.getOwnPropertyDescriptor(t, o))
          : r,
      n;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      i = Reflect.decorate(e, t, o, r);
    else
      for (var s = e.length - 1; s >= 0; s--)
        (n = e[s]) && (i = (a < 3 ? n(i) : a > 3 ? n(t, o, i) : n(t, o)) || i);
    return a > 3 && i && Object.defineProperty(t, o, i), i;
  },
  ke = {
    info: "info",
    success: "checkmark",
    warning: "warningCircle",
    error: "warning",
  },
  H = class extends m {
    constructor() {
      super(...arguments), (this.message = ""), (this.type = "info");
    }
    render() {
      return l`
      <wui-flex
        data-type=${b(this.type)}
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        gap="2"
      >
        <wui-flex columnGap="2" flexDirection="row" alignItems="center">
          <wui-flex
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            class="icon-box"
          >
            <wui-icon color="inherit" size="md" name=${
              ke[this.type]
            }></wui-icon>
          </wui-flex>
          <wui-text variant="md-medium" color="inherit" data-testid="wui-alertbar-text"
            >${this.message}</wui-text
          >
        </wui-flex>
        <wui-icon
          class="close"
          color="inherit"
          size="sm"
          name="close"
          @click=${this.onClose}
        ></wui-icon>
      </wui-flex>
    `;
    }
    onClose() {
      N.close();
    }
  };
H.styles = [R, ae];
X([c()], H.prototype, "message", void 0);
X([c()], H.prototype, "type", void 0);
H = X([h("wui-alertbar")], H);
var ne = u`
  :host {
    display: block;
    position: absolute;
    top: ${({ spacing: e }) => e[3]};
    left: ${({ spacing: e }) => e[4]};
    right: ${({ spacing: e }) => e[4]};
    opacity: 0;
    pointer-events: none;
  }
`;
var se = function (e, t, o, r) {
    var a = arguments.length,
      i =
        a < 3
          ? t
          : r === null
          ? (r = Object.getOwnPropertyDescriptor(t, o))
          : r,
      n;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      i = Reflect.decorate(e, t, o, r);
    else
      for (var s = e.length - 1; s >= 0; s--)
        (n = e[s]) && (i = (a < 3 ? n(i) : a > 3 ? n(t, o, i) : n(t, o)) || i);
    return a > 3 && i && Object.defineProperty(t, o, i), i;
  },
  Ce = {
    info: { backgroundColor: "fg-350", iconColor: "fg-325", icon: "info" },
    success: {
      backgroundColor: "success-glass-reown-020",
      iconColor: "success-125",
      icon: "checkmark",
    },
    warning: {
      backgroundColor: "warning-glass-reown-020",
      iconColor: "warning-100",
      icon: "warningCircle",
    },
    error: {
      backgroundColor: "error-glass-reown-020",
      iconColor: "error-125",
      icon: "warning",
    },
  },
  F = class extends m {
    constructor() {
      super(),
        (this.unsubscribe = []),
        (this.open = N.state.open),
        this.onOpen(!0),
        this.unsubscribe.push(
          N.subscribeKey("open", (t) => {
            (this.open = t), this.onOpen(!1);
          })
        );
    }
    disconnectedCallback() {
      this.unsubscribe.forEach((t) => t());
    }
    render() {
      let { message: t, variant: o } = N.state,
        r = Ce[o];
      return l`
      <wui-alertbar
        message=${t}
        backgroundColor=${r?.backgroundColor}
        iconColor=${r?.iconColor}
        icon=${r?.icon}
        type=${o}
      ></wui-alertbar>
    `;
    }
    onOpen(t) {
      this.open
        ? (this.animate(
            [
              { opacity: 0, transform: "scale(0.85)" },
              { opacity: 1, transform: "scale(1)" },
            ],
            { duration: 150, fill: "forwards", easing: "ease" }
          ),
          (this.style.cssText = "pointer-events: auto"))
        : t ||
          (this.animate(
            [
              { opacity: 1, transform: "scale(1)" },
              { opacity: 0, transform: "scale(0.85)" },
            ],
            { duration: 150, fill: "forwards", easing: "ease" }
          ),
          (this.style.cssText = "pointer-events: none"));
    }
  };
F.styles = ne;
se([p()], F.prototype, "open", void 0);
F = se([h("w3m-alertbar")], F);
var le = u`
  button {
    display: block;
    display: flex;
    align-items: center;
    padding: ${({ spacing: e }) => e[1]};
    transition: background-color ${({ durations: e }) => e.lg}
      ${({ easings: e }) => e["ease-out-power-2"]};
    will-change: background-color;
    border-radius: ${({ borderRadius: e }) => e[32]};
  }

  wui-image {
    border-radius: 100%;
  }

  wui-text {
    padding-left: ${({ spacing: e }) => e[1]};
  }

  .left-icon-container,
  .right-icon-container {
    width: 24px;
    height: 24px;
    justify-content: center;
    align-items: center;
  }

  wui-icon {
    color: ${({ tokens: e }) => e.theme.iconDefault};
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='lg'] {
    height: 32px;
  }

  button[data-size='md'] {
    height: 28px;
  }

  button[data-size='sm'] {
    height: 24px;
  }

  button[data-size='lg'] wui-image {
    width: 24px;
    height: 24px;
  }

  button[data-size='md'] wui-image {
    width: 20px;
    height: 20px;
  }

  button[data-size='sm'] wui-image {
    width: 16px;
    height: 16px;
  }

  button[data-size='lg'] .left-icon-container {
    width: 24px;
    height: 24px;
  }

  button[data-size='md'] .left-icon-container {
    width: 20px;
    height: 20px;
  }

  button[data-size='sm'] .left-icon-container {
    width: 16px;
    height: 16px;
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-type='filled-dropdown'] {
    background-color: ${({ tokens: e }) => e.theme.foregroundPrimary};
  }

  button[data-type='text-dropdown'] {
    background-color: transparent;
  }

  /* -- Focus states --------------------------------------------------- */
  button:focus-visible:enabled {
    background-color: ${({ tokens: e }) => e.theme.foregroundSecondary};
    box-shadow: 0 0 0 4px ${({ tokens: e }) => e.core.foregroundAccent040};
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled,
    button:active:enabled {
      background-color: ${({ tokens: e }) => e.theme.foregroundSecondary};
    }
  }

  /* -- Disabled states --------------------------------------------------- */
  button:disabled {
    background-color: ${({ tokens: e }) => e.theme.foregroundSecondary};
    opacity: 0.5;
  }
`;
var T = function (e, t, o, r) {
    var a = arguments.length,
      i =
        a < 3
          ? t
          : r === null
          ? (r = Object.getOwnPropertyDescriptor(t, o))
          : r,
      n;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      i = Reflect.decorate(e, t, o, r);
    else
      for (var s = e.length - 1; s >= 0; s--)
        (n = e[s]) && (i = (a < 3 ? n(i) : a > 3 ? n(t, o, i) : n(t, o)) || i);
    return a > 3 && i && Object.defineProperty(t, o, i), i;
  },
  Se = { lg: "lg-regular", md: "md-regular", sm: "sm-regular" },
  $e = { lg: "lg", md: "md", sm: "sm" },
  W = class extends m {
    constructor() {
      super(...arguments),
        (this.imageSrc = ""),
        (this.text = ""),
        (this.size = "lg"),
        (this.type = "text-dropdown"),
        (this.disabled = !1);
    }
    render() {
      return l`<button ?disabled=${this.disabled} data-size=${
        this.size
      } data-type=${this.type}>
      ${this.imageTemplate()} ${this.textTemplate()}
      <wui-flex class="right-icon-container">
        <wui-icon name="chevronBottom"></wui-icon>
      </wui-flex>
    </button>`;
    }
    textTemplate() {
      let t = Se[this.size];
      return this.text
        ? l`<wui-text color="primary" variant=${t}>${this.text}</wui-text>`
        : null;
    }
    imageTemplate() {
      if (this.imageSrc)
        return l`<wui-image src=${this.imageSrc} alt="select visual"></wui-image>`;
      let t = $e[this.size];
      return l` <wui-flex class="left-icon-container">
      <wui-icon size=${t} name="networkPlaceholder"></wui-icon>
    </wui-flex>`;
    }
  };
W.styles = [R, ie, le];
T([c()], W.prototype, "imageSrc", void 0);
T([c()], W.prototype, "text", void 0);
T([c()], W.prototype, "size", void 0);
T([c()], W.prototype, "type", void 0);
T([c({ type: Boolean })], W.prototype, "disabled", void 0);
W = T([h("wui-select")], W);
var ce = u`
  :host {
    height: 60px;
  }

  :host > wui-flex {
    box-sizing: border-box;
    background-color: var(--local-header-background-color);
  }

  wui-text {
    background-color: var(--local-header-background-color);
  }

  wui-flex.w3m-header-title {
    transform: translateY(0);
    opacity: 1;
  }

  wui-flex.w3m-header-title[view-direction='prev'] {
    animation:
      slide-down-out 120ms forwards ${({ easings: e }) =>
        e["ease-out-power-2"]},
      slide-down-in 120ms forwards ${({ easings: e }) => e["ease-out-power-2"]};
    animation-delay: 0ms, 200ms;
  }

  wui-flex.w3m-header-title[view-direction='next'] {
    animation:
      slide-up-out 120ms forwards ${({ easings: e }) => e["ease-out-power-2"]},
      slide-up-in 120ms forwards ${({ easings: e }) => e["ease-out-power-2"]};
    animation-delay: 0ms, 200ms;
  }

  wui-icon-button[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }

  @keyframes slide-up-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(3px);
      opacity: 0;
    }
  }

  @keyframes slide-up-in {
    from {
      transform: translateY(-3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slide-down-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(-3px);
      opacity: 0;
    }
  }

  @keyframes slide-down-in {
    from {
      transform: translateY(3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;
var O = function (e, t, o, r) {
    var a = arguments.length,
      i =
        a < 3
          ? t
          : r === null
          ? (r = Object.getOwnPropertyDescriptor(t, o))
          : r,
      n;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      i = Reflect.decorate(e, t, o, r);
    else
      for (var s = e.length - 1; s >= 0; s--)
        (n = e[s]) && (i = (a < 3 ? n(i) : a > 3 ? n(t, o, i) : n(t, o)) || i);
    return a > 3 && i && Object.defineProperty(t, o, i), i;
  },
  Ee = ["SmartSessionList"],
  Ie = { PayWithExchange: P.tokens.theme.foregroundPrimary };
function de() {
  let e = d.state.data?.connector?.name,
    t = d.state.data?.wallet?.name,
    o = d.state.data?.network?.name,
    r = t ?? e,
    a = D.getConnectors(),
    i = a.length === 1 && a[0]?.id === "w3m-email",
    n = g.getAccountData()?.socialProvider,
    s = n ? n.charAt(0).toUpperCase() + n.slice(1) : "Connect Social";
  return {
    Connect: `Connect ${i ? "Email" : ""} Wallet`,
    Create: "Create Wallet",
    ChooseAccountName: void 0,
    Account: void 0,
    AccountSettings: void 0,
    AllWallets: "All Wallets",
    ApproveTransaction: "Approve Transaction",
    BuyInProgress: "Buy",
    UsageExceeded: "Usage Exceeded",
    ConnectingExternal: r ?? "Connect Wallet",
    ConnectingWalletConnect: r ?? "WalletConnect",
    ConnectingWalletConnectBasic: "WalletConnect",
    ConnectingSiwe: "Sign In",
    Convert: "Convert",
    ConvertSelectToken: "Select token",
    ConvertPreview: "Preview Convert",
    Downloads: r ? `Get ${r}` : "Downloads",
    EmailLogin: "Email Login",
    EmailVerifyOtp: "Confirm Email",
    EmailVerifyDevice: "Register Device",
    GetWallet: "Get a Wallet",
    Networks: "Choose Network",
    OnRampProviders: "Choose Provider",
    OnRampActivity: "Activity",
    OnRampTokenSelect: "Select Token",
    OnRampFiatSelect: "Select Currency",
    Pay: "How you pay",
    ProfileWallets: "Wallets",
    SwitchNetwork: o ?? "Switch Network",
    Transactions: "Activity",
    UnsupportedChain: "Switch Network",
    UpgradeEmailWallet: "Upgrade Your Wallet",
    UpdateEmailWallet: "Edit Email",
    UpdateEmailPrimaryOtp: "Confirm Current Email",
    UpdateEmailSecondaryOtp: "Confirm New Email",
    WhatIsABuy: "What is Buy?",
    RegisterAccountName: "Choose Name",
    RegisterAccountNameSuccess: "",
    WalletReceive: "Receive",
    WalletCompatibleNetworks: "Compatible Networks",
    Swap: "Swap",
    SwapSelectToken: "Select Token",
    SwapPreview: "Preview Swap",
    WalletSend: "Send",
    WalletSendPreview: "Review Send",
    WalletSendSelectToken: "Select Token",
    WalletSendConfirmed: "Confirmed",
    WhatIsANetwork: "What is a network?",
    WhatIsAWallet: "What is a Wallet?",
    ConnectWallets: "Connect Wallet",
    ConnectSocials: "All Socials",
    ConnectingSocial: s,
    ConnectingMultiChain: "Select Chain",
    ConnectingFarcaster: "Farcaster",
    SwitchActiveChain: "Switch Chain",
    SmartSessionCreated: void 0,
    SmartSessionList: "Smart Sessions",
    SIWXSignMessage: "Sign In",
    PayLoading: "Payment in Progress",
    DataCapture: "Profile",
    DataCaptureOtpConfirm: "Confirm Email",
    FundWallet: "Fund Wallet",
    PayWithExchange: "Deposit from Exchange",
    PayWithExchangeSelectAsset: "Select Asset",
  };
}
var C = class extends m {
  constructor() {
    super(),
      (this.unsubscribe = []),
      (this.heading = de()[d.state.view]),
      (this.network = g.state.activeCaipNetwork),
      (this.networkImage = B.getNetworkImage(this.network)),
      (this.showBack = !1),
      (this.prevHistoryLength = 1),
      (this.view = d.state.view),
      (this.viewDirection = ""),
      this.unsubscribe.push(
        Z.subscribeNetworkImages(() => {
          this.networkImage = B.getNetworkImage(this.network);
        }),
        d.subscribeKey("view", (t) => {
          setTimeout(() => {
            (this.view = t), (this.heading = de()[t]);
          }, V.ANIMATION_DURATIONS.HeaderText),
            this.onViewChange(),
            this.onHistoryChange();
        }),
        g.subscribeKey("activeCaipNetwork", (t) => {
          (this.network = t),
            (this.networkImage = B.getNetworkImage(this.network));
        })
      );
  }
  disconnectCallback() {
    this.unsubscribe.forEach((t) => t());
  }
  render() {
    let t = Ie[d.state.view] ?? P.tokens.theme.backgroundPrimary;
    return (
      this.style.setProperty("--local-header-background-color", t),
      l`
      <wui-flex
        .padding=${["0", "4", "0", "4"]}
        justifyContent="space-between"
        alignItems="center"
      >
        ${this.leftHeaderTemplate()} ${this.titleTemplate()} ${this.rightHeaderTemplate()}
      </wui-flex>
    `
    );
  }
  onWalletHelp() {
    z.sendEvent({ type: "track", event: "CLICK_WALLET_HELP" }),
      d.push("WhatIsAWallet");
  }
  onClose() {
    return A(this, null, function* () {
      yield j.safeClose();
    });
  }
  rightHeaderTemplate() {
    let t = k?.state?.features?.smartSessions;
    return d.state.view !== "Account" || !t
      ? this.closeButtonTemplate()
      : l`<wui-flex>
      <wui-icon-button
        icon="clock"
        size="lg"
        iconSize="lg"
        type="neutral"
        variant="primary"
        @click=${() => d.push("SmartSessionList")}
        data-testid="w3m-header-smart-sessions"
      ></wui-icon-button>
      ${this.closeButtonTemplate()}
    </wui-flex> `;
  }
  closeButtonTemplate() {
    return l`
      <wui-icon-button
        icon="close"
        size="lg"
        type="neutral"
        variant="primary"
        iconSize="lg"
        @click=${this.onClose.bind(this)}
        data-testid="w3m-header-close"
      ></wui-icon-button>
    `;
  }
  titleTemplate() {
    let t = Ee.includes(this.view);
    return l`
      <wui-flex
        view-direction="${this.viewDirection}"
        class="w3m-header-title"
        alignItems="center"
        gap="2"
      >
        <wui-text
          display="inline"
          variant="lg-regular"
          color="primary"
          data-testid="w3m-header-text"
        >
          ${this.heading}
        </wui-text>
        ${t ? l`<wui-tag variant="accent" size="md">Beta</wui-tag>` : null}
      </wui-flex>
    `;
  }
  leftHeaderTemplate() {
    let { view: t } = d.state,
      o = t === "Connect",
      r = k.state.enableEmbedded,
      a = t === "ApproveTransaction",
      i = t === "ConnectingSiwe",
      n = t === "Account",
      s = k.state.enableNetworkSwitch,
      x = a || i || (o && r);
    return n && s
      ? l`<wui-select
        id="dynamic"
        data-testid="w3m-account-select-network"
        active-network=${b(this.network?.name)}
        @click=${this.onNetworks.bind(this)}
        imageSrc=${b(this.networkImage)}
      ></wui-select>`
      : this.showBack && !x
      ? l`<wui-icon-button
        data-testid="header-back"
        id="dynamic"
        icon="chevronLeft"
        size="lg"
        iconSize="lg"
        type="neutral"
        variant="primary"
        @click=${this.onGoBack.bind(this)}
      ></wui-icon-button>`
      : l`<wui-icon-button
      data-hidden=${!o}
      id="dynamic"
      icon="helpCircle"
      size="lg"
      iconSize="lg"
      type="neutral"
      variant="primary"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-button>`;
  }
  onNetworks() {
    this.isAllowedNetworkSwitch() &&
      (z.sendEvent({ type: "track", event: "CLICK_NETWORKS" }),
      d.push("Networks"));
  }
  isAllowedNetworkSwitch() {
    let t = g.getAllRequestedCaipNetworks(),
      o = t ? t.length > 1 : !1,
      r = t?.find(({ id: a }) => a === this.network?.id);
    return o || !r;
  }
  onViewChange() {
    let { history: t } = d.state,
      o = V.VIEW_DIRECTION.Next;
    t.length < this.prevHistoryLength && (o = V.VIEW_DIRECTION.Prev),
      (this.prevHistoryLength = t.length),
      (this.viewDirection = o);
  }
  onHistoryChange() {
    return A(this, null, function* () {
      let { history: t } = d.state,
        o = this.shadowRoot?.querySelector("#dynamic");
      t.length > 1 && !this.showBack && o
        ? (yield o.animate([{ opacity: 1 }, { opacity: 0 }], {
            duration: 200,
            fill: "forwards",
            easing: "ease",
          }).finished,
          (this.showBack = !0),
          o.animate([{ opacity: 0 }, { opacity: 1 }], {
            duration: 200,
            fill: "forwards",
            easing: "ease",
          }))
        : t.length <= 1 &&
          this.showBack &&
          o &&
          (yield o.animate([{ opacity: 1 }, { opacity: 0 }], {
            duration: 200,
            fill: "forwards",
            easing: "ease",
          }).finished,
          (this.showBack = !1),
          o.animate([{ opacity: 0 }, { opacity: 1 }], {
            duration: 200,
            fill: "forwards",
            easing: "ease",
          }));
    });
  }
  onGoBack() {
    d.goBack();
  }
};
C.styles = ce;
O([p()], C.prototype, "heading", void 0);
O([p()], C.prototype, "network", void 0);
O([p()], C.prototype, "networkImage", void 0);
O([p()], C.prototype, "showBack", void 0);
O([p()], C.prototype, "prevHistoryLength", void 0);
O([p()], C.prototype, "view", void 0);
O([p()], C.prototype, "viewDirection", void 0);
C = O([h("w3m-header")], C);
var pe = u`
  :host {
    display: flex;
    align-items: center;
    gap: ${({ spacing: e }) => e[1]};
    padding: ${({ spacing: e }) => e[2]} ${({ spacing: e }) => e[3]}
      ${({ spacing: e }) => e[2]} ${({ spacing: e }) => e[2]};
    border-radius: ${({ borderRadius: e }) => e[20]};
    background-color: ${({ tokens: e }) => e.theme.foregroundPrimary};
    box-shadow:
      0px 0px 8px 0px rgba(0, 0, 0, 0.1),
      inset 0 0 0 1px ${({ tokens: e }) => e.theme.borderPrimary};
    max-width: 320px;
  }

  wui-icon-box {
    border-radius: ${({ borderRadius: e }) => e.round} !important;
    overflow: hidden;
  }

  wui-loading-spinner {
    padding: ${({ spacing: e }) => e[1]};
    background-color: ${({ tokens: e }) => e.core.foregroundAccent010};
    border-radius: ${({ borderRadius: e }) => e.round} !important;
  }
`;
var G = function (e, t, o, r) {
    var a = arguments.length,
      i =
        a < 3
          ? t
          : r === null
          ? (r = Object.getOwnPropertyDescriptor(t, o))
          : r,
      n;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      i = Reflect.decorate(e, t, o, r);
    else
      for (var s = e.length - 1; s >= 0; s--)
        (n = e[s]) && (i = (a < 3 ? n(i) : a > 3 ? n(t, o, i) : n(t, o)) || i);
    return a > 3 && i && Object.defineProperty(t, o, i), i;
  },
  L = class extends m {
    constructor() {
      super(...arguments), (this.message = ""), (this.variant = "success");
    }
    render() {
      return l`
      ${this.templateIcon()}
      <wui-text variant="lg-regular" color="primary" data-testid="wui-snackbar-message"
        >${this.message}</wui-text
      >
    `;
    }
    templateIcon() {
      let t = {
          success: "success",
          error: "error",
          warning: "warning",
          info: "default",
        },
        o = {
          success: "checkmark",
          error: "warning",
          warning: "warningCircle",
          info: "info",
        };
      return this.variant === "loading"
        ? l`<wui-loading-spinner size="md" color="accent-primary"></wui-loading-spinner>`
        : l`<wui-icon-box
      size="md"
      color=${t[this.variant]}
      icon=${o[this.variant]}
    ></wui-icon-box>`;
    }
  };
L.styles = [R, pe];
G([c()], L.prototype, "message", void 0);
G([c()], L.prototype, "variant", void 0);
L = G([h("wui-snackbar")], L);
var he = te`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
    width: max-content;
  }
`;
var me = function (e, t, o, r) {
    var a = arguments.length,
      i =
        a < 3
          ? t
          : r === null
          ? (r = Object.getOwnPropertyDescriptor(t, o))
          : r,
      n;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      i = Reflect.decorate(e, t, o, r);
    else
      for (var s = e.length - 1; s >= 0; s--)
        (n = e[s]) && (i = (a < 3 ? n(i) : a > 3 ? n(t, o, i) : n(t, o)) || i);
    return a > 3 && i && Object.defineProperty(t, o, i), i;
  },
  K = class extends m {
    constructor() {
      super(),
        (this.unsubscribe = []),
        (this.timeout = void 0),
        (this.open = E.state.open),
        this.unsubscribe.push(
          E.subscribeKey("open", (t) => {
            (this.open = t), this.onOpen();
          })
        );
    }
    disconnectedCallback() {
      clearTimeout(this.timeout), this.unsubscribe.forEach((t) => t());
    }
    render() {
      let { message: t, variant: o } = E.state;
      return l` <wui-snackbar message=${t} variant=${o}></wui-snackbar> `;
    }
    onOpen() {
      clearTimeout(this.timeout),
        this.open
          ? (this.animate(
              [
                { opacity: 0, transform: "translateX(-50%) scale(0.85)" },
                { opacity: 1, transform: "translateX(-50%) scale(1)" },
              ],
              { duration: 150, fill: "forwards", easing: "ease" }
            ),
            this.timeout && clearTimeout(this.timeout),
            E.state.autoClose &&
              (this.timeout = setTimeout(() => E.hide(), 2500)))
          : this.animate(
              [
                { opacity: 1, transform: "translateX(-50%) scale(1)" },
                { opacity: 0, transform: "translateX(-50%) scale(0.85)" },
              ],
              { duration: 150, fill: "forwards", easing: "ease" }
            );
    }
  };
K.styles = he;
me([p()], K.prototype, "open", void 0);
K = me([h("w3m-snackbar")], K);
var ue = u`
  :host {
    z-index: ${({ tokens: e }) => e.core.zIndex};
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: ${({ tokens: e }) => e.theme.overlay};
    backdrop-filter: blur(0px);
    transition:
      opacity ${({ durations: e }) => e.lg} ${({ easings: e }) =>
  e["ease-out-power-2"]},
      backdrop-filter ${({ durations: e }) => e.lg}
        ${({ easings: e }) => e["ease-out-power-2"]};
    will-change: opacity;
  }

  :host(.open) {
    opacity: 1;
    backdrop-filter: blur(8px);
  }

  :host(.appkit-modal) {
    position: relative;
    pointer-events: unset;
    background: none;
    width: 100%;
    opacity: 1;
  }

  wui-card {
    max-width: var(--apkt-modal-width);
    width: 100%;
    position: relative;
    outline: none;
    transform: translateY(4px);
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.05);
    transition:
      transform ${({ durations: e }) => e.lg}
        ${({ easings: e }) => e["ease-out-power-2"]},
      border-radius ${({ durations: e }) => e.lg}
        ${({ easings: e }) => e["ease-out-power-1"]},
      background-color ${({ durations: e }) => e.lg}
        ${({ easings: e }) => e["ease-out-power-1"]},
      box-shadow ${({ durations: e }) => e.lg}
        ${({ easings: e }) => e["ease-out-power-1"]};
    will-change: border-radius, background-color, transform, box-shadow;
    background-color: ${({ tokens: e }) => e.theme.backgroundPrimary};
    padding: var(--local-modal-padding);
    box-sizing: border-box;
  }

  :host(.open) wui-card {
    transform: translateY(0px);
  }

  wui-card::before {
    z-index: 1;
    pointer-events: none;
    content: '';
    position: absolute;
    inset: 0;
    border-radius: clamp(0px, var(--apkt-borderRadius-8), 44px);
    transition: box-shadow ${({ durations: e }) => e.lg}
      ${({ easings: e }) => e["ease-out-power-2"]};
    transition-delay: ${({ durations: e }) => e.md};
    will-change: box-shadow;
  }

  :host([data-mobile-fullscreen='true']) wui-card::before {
    border-radius: 0px;
  }

  :host([data-border='true']) wui-card::before {
    box-shadow: inset 0px 0px 0px 4px ${({ tokens: e }) =>
      e.theme.foregroundSecondary};
  }

  :host([data-border='false']) wui-card::before {
    box-shadow: inset 0px 0px 0px 1px ${({ tokens: e }) =>
      e.theme.borderPrimaryDark};
  }

  :host([data-border='true']) wui-card {
    animation:
      fade-in ${({ durations: e }) => e.lg} ${({ easings: e }) =>
  e["ease-out-power-2"]},
      card-background-border var(--apkt-duration-dynamic)
        ${({ easings: e }) => e["ease-out-power-2"]};
    animation-fill-mode: backwards, both;
    animation-delay: var(--apkt-duration-dynamic);
  }

  :host([data-border='false']) wui-card {
    animation:
      fade-in ${({ durations: e }) => e.lg} ${({ easings: e }) =>
  e["ease-out-power-2"]},
      card-background-default var(--apkt-duration-dynamic)
        ${({ easings: e }) => e["ease-out-power-2"]};
    animation-fill-mode: backwards, both;
    animation-delay: 0s;
  }

  :host(.appkit-modal) wui-card {
    max-width: var(--apkt-modal-width);
  }

  wui-card[shake='true'] {
    animation:
      fade-in ${({ durations: e }) => e.lg} ${({ easings: e }) =>
  e["ease-out-power-2"]},
      w3m-shake ${({ durations: e }) => e.xl}
        ${({ easings: e }) => e["ease-out-power-2"]};
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--apkt-spacing-6) 0px;
    }
  }

  @media (max-width: 430px) {
    :host([data-mobile-fullscreen='true']) {
      height: 100dvh;
    }
    :host([data-mobile-fullscreen='true']) wui-flex {
      align-items: stretch;
    }
    :host([data-mobile-fullscreen='true']) wui-card {
      max-width: 100%;
      height: 100%;
      border-radius: 0;
      border: none;
    }
    :host(:not([data-mobile-fullscreen='true'])) wui-flex {
      align-items: flex-end;
    }

    :host(:not([data-mobile-fullscreen='true'])) wui-card {
      max-width: 100%;
      border-bottom: none;
    }

    :host(:not([data-mobile-fullscreen='true'])) wui-card[data-embedded='true'] {
      border-bottom-left-radius: clamp(0px, var(--apkt-borderRadius-8), 44px);
      border-bottom-right-radius: clamp(0px, var(--apkt-borderRadius-8), 44px);
    }

    :host(:not([data-mobile-fullscreen='true'])) wui-card:not([data-embedded='true']) {
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0px;
    }

    wui-card[shake='true'] {
      animation: w3m-shake 0.5s ${({ easings: e }) => e["ease-out-power-2"]};
    }
  }

  @keyframes fade-in {
    0% {
      transform: scale(0.99) translateY(4px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes w3m-shake {
    0% {
      transform: scale(1) rotate(0deg);
    }
    20% {
      transform: scale(1) rotate(-1deg);
    }
    40% {
      transform: scale(1) rotate(1.5deg);
    }
    60% {
      transform: scale(1) rotate(-1.5deg);
    }
    80% {
      transform: scale(1) rotate(1deg);
    }
    100% {
      transform: scale(1) rotate(0deg);
    }
  }

  @keyframes card-background-border {
    from {
      background-color: ${({ tokens: e }) => e.theme.backgroundPrimary};
    }
    to {
      background-color: ${({ tokens: e }) => e.theme.foregroundSecondary};
    }
  }

  @keyframes card-background-default {
    from {
      background-color: ${({ tokens: e }) => e.theme.foregroundSecondary};
    }
    to {
      background-color: ${({ tokens: e }) => e.theme.backgroundPrimary};
    }
  }
`;
var S = function (e, t, o, r) {
    var a = arguments.length,
      i =
        a < 3
          ? t
          : r === null
          ? (r = Object.getOwnPropertyDescriptor(t, o))
          : r,
      n;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      i = Reflect.decorate(e, t, o, r);
    else
      for (var s = e.length - 1; s >= 0; s--)
        (n = e[s]) && (i = (a < 3 ? n(i) : a > 3 ? n(t, o, i) : n(t, o)) || i);
    return a > 3 && i && Object.defineProperty(t, o, i), i;
  },
  fe = "scroll-lock",
  Re = { PayWithExchange: "0", PayWithExchangeSelectAsset: "0" },
  y = class extends m {
    constructor() {
      super(),
        (this.unsubscribe = []),
        (this.abortController = void 0),
        (this.hasPrefetched = !1),
        (this.enableEmbedded = k.state.enableEmbedded),
        (this.open = I.state.open),
        (this.caipAddress = g.state.activeCaipAddress),
        (this.caipNetwork = g.state.activeCaipNetwork),
        (this.shake = I.state.shake),
        (this.filterByNamespace = D.state.filterByNamespace),
        (this.padding = P.spacing[1]),
        (this.mobileFullScreen = k.state.enableMobileFullScreen),
        this.initializeTheming(),
        _.prefetchAnalyticsConfig(),
        this.unsubscribe.push(
          I.subscribeKey("open", (t) => (t ? this.onOpen() : this.onClose())),
          I.subscribeKey("shake", (t) => (this.shake = t)),
          g.subscribeKey("activeCaipNetwork", (t) => this.onNewNetwork(t)),
          g.subscribeKey("activeCaipAddress", (t) => this.onNewAddress(t)),
          k.subscribeKey("enableEmbedded", (t) => (this.enableEmbedded = t)),
          D.subscribeKey("filterByNamespace", (t) => {
            this.filterByNamespace !== t &&
              !g.getAccountData(t)?.caipAddress &&
              (_.fetchRecommendedWallets(), (this.filterByNamespace = t));
          }),
          d.subscribeKey("view", () => {
            (this.dataset.border = Y.hasFooter() ? "true" : "false"),
              (this.padding = Re[d.state.view] ?? P.spacing[1]);
          })
        );
    }
    firstUpdated() {
      if (
        ((this.dataset.border = Y.hasFooter() ? "true" : "false"),
        this.mobileFullScreen &&
          this.setAttribute("data-mobile-fullscreen", "true"),
        this.caipAddress)
      ) {
        if (this.enableEmbedded) {
          I.close(), this.prefetch();
          return;
        }
        this.onNewAddress(this.caipAddress);
      }
      this.open && this.onOpen(), this.enableEmbedded && this.prefetch();
    }
    disconnectedCallback() {
      this.unsubscribe.forEach((t) => t()), this.onRemoveKeyboardListener();
    }
    render() {
      return (
        this.style.setProperty("--local-modal-padding", this.padding),
        this.enableEmbedded
          ? l`${this.contentTemplate()}
        <w3m-tooltip></w3m-tooltip> `
          : this.open
          ? l`
          <wui-flex @click=${this.onOverlayClick.bind(
            this
          )} data-testid="w3m-modal-overlay">
            ${this.contentTemplate()}
          </wui-flex>
          <w3m-tooltip></w3m-tooltip>
        `
          : null
      );
    }
    contentTemplate() {
      return l` <wui-card
      shake="${this.shake}"
      data-embedded="${b(this.enableEmbedded)}"
      role="alertdialog"
      aria-modal="true"
      tabindex="0"
      data-testid="w3m-modal-card"
    >
      <w3m-header></w3m-header>
      <w3m-router></w3m-router>
      <w3m-footer></w3m-footer>
      <w3m-snackbar></w3m-snackbar>
      <w3m-alertbar></w3m-alertbar>
    </wui-card>`;
    }
    onOverlayClick(t) {
      return A(this, null, function* () {
        if (t.target === t.currentTarget) {
          if (this.mobileFullScreen) return;
          yield this.handleClose();
        }
      });
    }
    handleClose() {
      return A(this, null, function* () {
        yield j.safeClose();
      });
    }
    initializeTheming() {
      let { themeVariables: t, themeMode: o } = J.state,
        r = U.getColorTheme(o);
      oe(t, r);
    }
    onClose() {
      (this.open = !1),
        this.classList.remove("open"),
        this.onScrollUnlock(),
        E.hide(),
        this.onRemoveKeyboardListener();
    }
    onOpen() {
      (this.open = !0),
        this.classList.add("open"),
        this.onScrollLock(),
        this.onAddKeyboardListener();
    }
    onScrollLock() {
      let t = document.createElement("style");
      (t.dataset.w3m = fe),
        (t.textContent = `
      body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `),
        document.head.appendChild(t);
    }
    onScrollUnlock() {
      let t = document.head.querySelector(`style[data-w3m="${fe}"]`);
      t && t.remove();
    }
    onAddKeyboardListener() {
      this.abortController = new AbortController();
      let t = this.shadowRoot?.querySelector("wui-card");
      t?.focus(),
        window.addEventListener(
          "keydown",
          (o) => {
            if (o.key === "Escape") this.handleClose();
            else if (o.key === "Tab") {
              let { tagName: r } = o.target;
              r && !r.includes("W3M-") && !r.includes("WUI-") && t?.focus();
            }
          },
          this.abortController
        );
    }
    onRemoveKeyboardListener() {
      this.abortController?.abort(), (this.abortController = void 0);
    }
    onNewAddress(t) {
      return A(this, null, function* () {
        let o = g.state.isSwitchingNamespace,
          r = d.state.view === "ProfileWallets";
        !t && !o && !r && I.close(),
          yield Q.initializeIfEnabled(t),
          (this.caipAddress = t),
          g.setIsSwitchingNamespace(!1);
      });
    }
    onNewNetwork(t) {
      let r = this.caipNetwork?.caipNetworkId?.toString(),
        a = t?.caipNetworkId?.toString(),
        i = r !== a,
        n = d.state.view === "UnsupportedChain",
        s = I.state.open,
        x = !1;
      this.enableEmbedded && d.state.view === "SwitchNetwork" && (x = !0),
        i && ee.resetState(),
        s && n && (x = !0),
        x && d.state.view !== "SIWXSignMessage" && d.goBack(),
        (this.caipNetwork = t);
    }
    prefetch() {
      this.hasPrefetched ||
        (_.prefetch(),
        _.fetchWalletsByPage({ page: 1 }),
        (this.hasPrefetched = !0));
    }
  };
y.styles = ue;
S([c({ type: Boolean })], y.prototype, "enableEmbedded", void 0);
S([p()], y.prototype, "open", void 0);
S([p()], y.prototype, "caipAddress", void 0);
S([p()], y.prototype, "caipNetwork", void 0);
S([p()], y.prototype, "shake", void 0);
S([p()], y.prototype, "filterByNamespace", void 0);
S([p()], y.prototype, "padding", void 0);
S([p()], y.prototype, "mobileFullScreen", void 0);
var we = class extends y {};
we = S([h("w3m-modal")], we);
var be = class extends y {};
be = S([h("appkit-modal")], be);
var ge = u`
  .icon-box {
    width: 64px;
    height: 64px;
    border-radius: ${({ borderRadius: e }) => e[5]};
    background-color: ${({ colors: e }) => e.semanticError010};
  }
`;
var We = function (e, t, o, r) {
    var a = arguments.length,
      i =
        a < 3
          ? t
          : r === null
          ? (r = Object.getOwnPropertyDescriptor(t, o))
          : r,
      n;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      i = Reflect.decorate(e, t, o, r);
    else
      for (var s = e.length - 1; s >= 0; s--)
        (n = e[s]) && (i = (a < 3 ? n(i) : a > 3 ? n(t, o, i) : n(t, o)) || i);
    return a > 3 && i && Object.defineProperty(t, o, i), i;
  },
  q = class extends m {
    constructor() {
      super();
    }
    render() {
      return l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="4"
        .padding="${["1", "3", "4", "3"]}"
      >
        <wui-flex justifyContent="center" alignItems="center" class="icon-box">
          <wui-icon size="xxl" color="error" name="warningCircle"></wui-icon>
        </wui-flex>

        <wui-text variant="lg-medium" color="primary" align="center">
          The app isn't responding as expected
        </wui-text>
        <wui-text variant="md-regular" color="secondary" align="center">
          Try again or reach out to the app team for help.
        </wui-text>

        <wui-button
          variant="neutral-secondary"
          size="md"
          @click=${this.onTryAgainClick.bind(this)}
          data-testid="w3m-usage-exceeded-button"
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try Again
        </wui-button>
      </wui-flex>
    `;
    }
    onTryAgainClick() {
      d.goBack();
    }
  };
q.styles = ge;
q = We([h("w3m-usage-exceeded-view")], q);
var ye = u`
  :host {
    width: 100%;
  }
`;
var w = function (e, t, o, r) {
    var a = arguments.length,
      i =
        a < 3
          ? t
          : r === null
          ? (r = Object.getOwnPropertyDescriptor(t, o))
          : r,
      n;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      i = Reflect.decorate(e, t, o, r);
    else
      for (var s = e.length - 1; s >= 0; s--)
        (n = e[s]) && (i = (a < 3 ? n(i) : a > 3 ? n(t, o, i) : n(t, o)) || i);
    return a > 3 && i && Object.defineProperty(t, o, i), i;
  },
  f = class extends m {
    constructor() {
      super(...arguments),
        (this.hasImpressionSent = !1),
        (this.walletImages = []),
        (this.imageSrc = ""),
        (this.name = ""),
        (this.size = "md"),
        (this.tabIdx = void 0),
        (this.disabled = !1),
        (this.showAllWallets = !1),
        (this.loading = !1),
        (this.loadingSpinnerColor = "accent-100"),
        (this.rdnsId = ""),
        (this.displayIndex = void 0),
        (this.walletRank = void 0);
    }
    connectedCallback() {
      super.connectedCallback();
    }
    disconnectedCallback() {
      super.disconnectedCallback(), this.cleanupIntersectionObserver();
    }
    updated(t) {
      super.updated(t),
        (t.has("name") || t.has("imageSrc") || t.has("walletRank")) &&
          (this.hasImpressionSent = !1),
        t.has("walletRank") &&
          this.walletRank &&
          !this.intersectionObserver &&
          this.setupIntersectionObserver();
    }
    setupIntersectionObserver() {
      (this.intersectionObserver = new IntersectionObserver(
        (t) => {
          t.forEach((o) => {
            o.isIntersecting &&
              !this.loading &&
              !this.hasImpressionSent &&
              this.sendImpressionEvent();
          });
        },
        { threshold: 0.1 }
      )),
        this.intersectionObserver.observe(this);
    }
    cleanupIntersectionObserver() {
      this.intersectionObserver &&
        (this.intersectionObserver.disconnect(),
        (this.intersectionObserver = void 0));
    }
    sendImpressionEvent() {
      !this.name ||
        this.hasImpressionSent ||
        !this.walletRank ||
        ((this.hasImpressionSent = !0),
        (this.rdnsId || this.name) &&
          z.sendWalletImpressionEvent({
            name: this.name,
            walletRank: this.walletRank,
            rdnsId: this.rdnsId,
            view: d.state.view,
            displayIndex: this.displayIndex,
          }));
    }
    render() {
      return l`
      <wui-list-wallet
        .walletImages=${this.walletImages}
        imageSrc=${b(this.imageSrc)}
        name=${this.name}
        size=${b(this.size)}
        tagLabel=${b(this.tagLabel)}
        .tagVariant=${this.tagVariant}
        .walletIcon=${this.walletIcon}
        .tabIdx=${this.tabIdx}
        .disabled=${this.disabled}
        .showAllWallets=${this.showAllWallets}
        .loading=${this.loading}
        loadingSpinnerColor=${this.loadingSpinnerColor}
      ></wui-list-wallet>
    `;
    }
  };
f.styles = ye;
w([c({ type: Array })], f.prototype, "walletImages", void 0);
w([c()], f.prototype, "imageSrc", void 0);
w([c()], f.prototype, "name", void 0);
w([c()], f.prototype, "size", void 0);
w([c()], f.prototype, "tagLabel", void 0);
w([c()], f.prototype, "tagVariant", void 0);
w([c()], f.prototype, "walletIcon", void 0);
w([c()], f.prototype, "tabIdx", void 0);
w([c({ type: Boolean })], f.prototype, "disabled", void 0);
w([c({ type: Boolean })], f.prototype, "showAllWallets", void 0);
w([c({ type: Boolean })], f.prototype, "loading", void 0);
w([c({ type: String })], f.prototype, "loadingSpinnerColor", void 0);
w([c()], f.prototype, "rdnsId", void 0);
w([c()], f.prototype, "displayIndex", void 0);
w([c()], f.prototype, "walletRank", void 0);
f = w([h("w3m-list-wallet")], f);
var ve = u`
  :host {
    --local-duration-height: 0s;
    --local-duration: ${({ durations: e }) => e.lg};
    --local-transition: ${({ easings: e }) => e["ease-out-power-2"]};
  }

  .container {
    display: block;
    overflow: hidden;
    overflow: hidden;
    position: relative;
    height: var(--local-container-height);
    transition: height var(--local-duration-height) var(--local-transition);
    will-change: height, padding-bottom;
  }

  .container[data-mobile-fullscreen='true'] {
    overflow: scroll;
  }

  .page {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: auto;
    width: inherit;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    background-color: ${({ tokens: e }) => e.theme.backgroundPrimary};
    border-bottom-left-radius: var(--local-border-bottom-radius);
    border-bottom-right-radius: var(--local-border-bottom-radius);
    transition: border-bottom-left-radius var(--local-duration) var(--local-transition);
  }

  .page[data-mobile-fullscreen='true'] {
    height: 100%;
  }

  .page-content {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }

  .footer {
    height: var(--apkt-footer-height);
  }

  div.page[view-direction^='prev-'] .page-content {
    animation:
      slide-left-out var(--local-duration) forwards var(--local-transition),
      slide-left-in var(--local-duration) forwards var(--local-transition);
    animation-delay: 0ms, var(--local-duration, ${({ durations: e }) => e.lg});
  }

  div.page[view-direction^='next-'] .page-content {
    animation:
      slide-right-out var(--local-duration) forwards var(--local-transition),
      slide-right-in var(--local-duration) forwards var(--local-transition);
    animation-delay: 0ms, var(--local-duration, ${({ durations: e }) => e.lg});
  }

  @keyframes slide-left-out {
    from {
      transform: translateX(0px) scale(1);
      opacity: 1;
      filter: blur(0px);
    }
    to {
      transform: translateX(8px) scale(0.99);
      opacity: 0;
      filter: blur(4px);
    }
  }

  @keyframes slide-left-in {
    from {
      transform: translateX(-8px) scale(0.99);
      opacity: 0;
      filter: blur(4px);
    }
    to {
      transform: translateX(0) translateY(0) scale(1);
      opacity: 1;
      filter: blur(0px);
    }
  }

  @keyframes slide-right-out {
    from {
      transform: translateX(0px) scale(1);
      opacity: 1;
      filter: blur(0px);
    }
    to {
      transform: translateX(-8px) scale(0.99);
      opacity: 0;
      filter: blur(4px);
    }
  }

  @keyframes slide-right-in {
    from {
      transform: translateX(8px) scale(0.99);
      opacity: 0;
      filter: blur(4px);
    }
    to {
      transform: translateX(0) translateY(0) scale(1);
      opacity: 1;
      filter: blur(0px);
    }
  }
`;
var $ = function (e, t, o, r) {
    var a = arguments.length,
      i =
        a < 3
          ? t
          : r === null
          ? (r = Object.getOwnPropertyDescriptor(t, o))
          : r,
      n;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      i = Reflect.decorate(e, t, o, r);
    else
      for (var s = e.length - 1; s >= 0; s--)
        (n = e[s]) && (i = (a < 3 ? n(i) : a > 3 ? n(t, o, i) : n(t, o)) || i);
    return a > 3 && i && Object.defineProperty(t, o, i), i;
  },
  Oe = 60,
  v = class extends m {
    constructor() {
      super(...arguments),
        (this.resizeObserver = void 0),
        (this.transitionDuration = "0.15s"),
        (this.transitionFunction = ""),
        (this.history = ""),
        (this.view = ""),
        (this.setView = void 0),
        (this.viewDirection = ""),
        (this.historyState = ""),
        (this.previousHeight = "0px"),
        (this.mobileFullScreen = k.state.enableMobileFullScreen),
        (this.onViewportResize = () => {
          this.updateContainerHeight();
        });
    }
    updated(t) {
      if (t.has("history")) {
        let o = this.history;
        this.historyState !== "" &&
          this.historyState !== o &&
          this.onViewChange(o);
      }
      t.has("transitionDuration") &&
        this.style.setProperty("--local-duration", this.transitionDuration),
        t.has("transitionFunction") &&
          this.style.setProperty("--local-transition", this.transitionFunction);
    }
    firstUpdated() {
      this.transitionFunction &&
        this.style.setProperty("--local-transition", this.transitionFunction),
        this.style.setProperty("--local-duration", this.transitionDuration),
        (this.historyState = this.history),
        (this.resizeObserver = new ResizeObserver((t) => {
          for (let o of t)
            if (o.target === this.getWrapper()) {
              let r = o.contentRect.height,
                a = parseFloat(
                  getComputedStyle(document.documentElement).getPropertyValue(
                    "--apkt-footer-height"
                  ) || "0"
                );
              if (this.mobileFullScreen) {
                let i = window.visualViewport?.height || window.innerHeight,
                  n = this.getHeaderHeight();
                (r = i - n - a),
                  this.style.setProperty("--local-border-bottom-radius", "0px");
              } else
                (r = r + a),
                  this.style.setProperty(
                    "--local-border-bottom-radius",
                    a ? "var(--apkt-borderRadius-5)" : "0px"
                  );
              this.style.setProperty("--local-container-height", `${r}px`),
                this.previousHeight !== "0px" &&
                  this.style.setProperty(
                    "--local-duration-height",
                    this.transitionDuration
                  ),
                (this.previousHeight = `${r}px`);
            }
        })),
        this.resizeObserver.observe(this.getWrapper()),
        this.updateContainerHeight(),
        window.addEventListener("resize", this.onViewportResize),
        window.visualViewport?.addEventListener(
          "resize",
          this.onViewportResize
        );
    }
    disconnectedCallback() {
      let t = this.getWrapper();
      t && this.resizeObserver && this.resizeObserver.unobserve(t),
        window.removeEventListener("resize", this.onViewportResize),
        window.visualViewport?.removeEventListener(
          "resize",
          this.onViewportResize
        );
    }
    render() {
      return l`
      <div class="container" data-mobile-fullscreen="${b(
        this.mobileFullScreen
      )}">
        <div
          class="page"
          data-mobile-fullscreen="${b(this.mobileFullScreen)}"
          view-direction="${this.viewDirection}"
        >
          <div class="page-content">
            <slot></slot>
          </div>
        </div>
      </div>
    `;
    }
    onViewChange(t) {
      let o = t.split(",").filter(Boolean),
        r = this.historyState.split(",").filter(Boolean),
        a = r.length,
        i = o.length,
        n = o[o.length - 1] || "",
        s = U.cssDurationToNumber(this.transitionDuration),
        x = "";
      i > a
        ? (x = "next")
        : i < a
        ? (x = "prev")
        : i === a && o[i - 1] !== r[a - 1] && (x = "next"),
        (this.viewDirection = `${x}-${n}`),
        setTimeout(() => {
          (this.historyState = t), this.setView?.(n);
        }, s),
        setTimeout(() => {
          this.viewDirection = "";
        }, s * 2);
    }
    getWrapper() {
      return this.shadowRoot?.querySelector("div.page");
    }
    updateContainerHeight() {
      let t = this.getWrapper();
      if (!t) return;
      let o = parseFloat(
          getComputedStyle(document.documentElement).getPropertyValue(
            "--apkt-footer-height"
          ) || "0"
        ),
        r = 0;
      if (this.mobileFullScreen) {
        let a = window.visualViewport?.height || window.innerHeight,
          i = this.getHeaderHeight();
        (r = a - i - o),
          this.style.setProperty("--local-border-bottom-radius", "0px");
      } else
        (r = t.getBoundingClientRect().height + o),
          this.style.setProperty(
            "--local-border-bottom-radius",
            o ? "var(--apkt-borderRadius-5)" : "0px"
          );
      this.style.setProperty("--local-container-height", `${r}px`),
        this.previousHeight !== "0px" &&
          this.style.setProperty(
            "--local-duration-height",
            this.transitionDuration
          ),
        (this.previousHeight = `${r}px`);
    }
    getHeaderHeight() {
      return Oe;
    }
  };
v.styles = [ve];
$([c({ type: String })], v.prototype, "transitionDuration", void 0);
$([c({ type: String })], v.prototype, "transitionFunction", void 0);
$([c({ type: String })], v.prototype, "history", void 0);
$([c({ type: String })], v.prototype, "view", void 0);
$([c({ attribute: !1 })], v.prototype, "setView", void 0);
$([p()], v.prototype, "viewDirection", void 0);
$([p()], v.prototype, "historyState", void 0);
$([p()], v.prototype, "previousHeight", void 0);
$([p()], v.prototype, "mobileFullScreen", void 0);
v = $([h("w3m-router-container")], v);
export {
  be as AppKitModal,
  f as W3mListWallet,
  we as W3mModal,
  y as W3mModalBase,
  v as W3mRouterContainer,
  q as W3mUsageExceededView,
};
