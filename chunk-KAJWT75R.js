import "./chunk-4ULHIL6R.js";
import "./chunk-YFNUF7IY.js";
import "./chunk-NNU4UVC3.js";
import "./chunk-WQKAD4I3.js";
import "./chunk-WCDRTLU2.js";
import "./chunk-N46VAT3C.js";
import "./chunk-ABP3XAKE.js";
import "./chunk-TA7UPVQ7.js";
import "./chunk-ZM5O5AWK.js";
import "./chunk-SNQKIAY2.js";
import "./chunk-JEWQBEMQ.js";
import { a as q, b as K } from "./chunk-O4NP5LYX.js";
import "./chunk-RI24VZ65.js";
import "./chunk-P3SVY5YN.js";
import "./chunk-TCZHDFJ2.js";
import "./chunk-ZUPMI3QZ.js";
import "./chunk-PMNBX4ZJ.js";
import { a as ie } from "./chunk-NZR2LZWU.js";
import "./chunk-7TZWJ67Q.js";
import { a as d, b as u } from "./chunk-ISXP6GOO.js";
import { c as h, g as j, h as V, i as C, k as f } from "./chunk-L4ZNINEC.js";
import { e as l, k as m } from "./chunk-ICDT4GZS.js";
import { i as W } from "./chunk-HK6N7TS4.js";
import "./chunk-TXWSAHNN.js";
import "./chunk-H4BANHQJ.js";
import "./chunk-IV5FR2YO.js";
import "./chunk-TSLWMKS5.js";
import {
  A as I,
  B as te,
  G as a,
  H as g,
  J as U,
  c as X,
  e as A,
  k,
  m as Z,
  p as O,
  q as ee,
  s as w,
} from "./chunk-U7GUEFJZ.js";
import "./chunk-GBTQH4B2.js";
import { b as G, e as M, j as Q } from "./chunk-2K64HG7Q.js";
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
import { n as p } from "./chunk-VNDKUXGB.js";
var re = h`
  :host {
    width: 100%;
    height: 100px;
    border-radius: ${({ borderRadius: e }) => e[5]};
    border: 1px solid ${({ tokens: e }) => e.theme.foregroundPrimary};
    background-color: ${({ tokens: e }) => e.theme.foregroundPrimary};
    transition: background-color ${({ durations: e }) => e.lg}
      ${({ easings: e }) => e["ease-out-power-1"]};
    will-change: background-color;
    position: relative;
  }

  :host(:hover) {
    background-color: ${({ tokens: e }) => e.theme.foregroundSecondary};
  }

  wui-flex {
    width: 100%;
    height: fit-content;
  }

  wui-button {
    display: ruby;
    color: ${({ tokens: e }) => e.theme.textPrimary};
    margin: 0 ${({ spacing: e }) => e[2]};
  }

  .instruction {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
  }

  .paste {
    display: inline-flex;
  }

  textarea {
    background: transparent;
    width: 100%;
    font-family: ${({ fontFamily: e }) => e.regular};
    font-style: normal;
    font-size: ${({ textSize: e }) => e.large};
    font-weight: ${({ fontWeight: e }) => e.regular};
    line-height: ${({ typography: e }) => e["lg-regular"].lineHeight};
    letter-spacing: ${({ typography: e }) => e["lg-regular"].letterSpacing};
    color: ${({ tokens: e }) => e.theme.textSecondary};
    caret-color: ${({ tokens: e }) => e.core.backgroundAccentPrimary};
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
    border: none;
    outline: none;
    appearance: none;
    resize: none;
    overflow: hidden;
  }
`;
var D = function (e, t, r, o) {
    var n = arguments.length,
      i =
        n < 3
          ? t
          : o === null
          ? (o = Object.getOwnPropertyDescriptor(t, r))
          : o,
      s;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      i = Reflect.decorate(e, t, r, o);
    else
      for (var c = e.length - 1; c >= 0; c--)
        (s = e[c]) && (i = (n < 3 ? s(i) : n > 3 ? s(t, r, i) : s(t, r)) || i);
    return n > 3 && i && Object.defineProperty(t, r, i), i;
  },
  S = class extends m {
    constructor() {
      super(...arguments),
        (this.inputElementRef = q()),
        (this.instructionElementRef = q()),
        (this.readOnly = !1),
        (this.instructionHidden = !!this.value),
        (this.pasting = !1),
        (this.onDebouncedSearch = A.debounce((t) =>
          p(this, null, function* () {
            if (!t.length) {
              this.setReceiverAddress("");
              return;
            }
            let r = g.state.activeChain;
            if (A.isAddress(t, r)) {
              this.setReceiverAddress(t);
              return;
            }
            try {
              let n = yield I.getEnsAddress(t);
              if (n) {
                a.setReceiverProfileName(t), a.setReceiverAddress(n);
                let i = yield I.getEnsAvatar(t);
                a.setReceiverProfileImageUrl(i || void 0);
              }
            } catch {
              this.setReceiverAddress(t);
            } finally {
              a.setLoading(!1);
            }
          })
        ));
    }
    firstUpdated() {
      this.value && (this.instructionHidden = !0), this.checkHidden();
    }
    render() {
      return this.readOnly
        ? l` <wui-flex
        flexDirection="column"
        justifyContent="center"
        gap="01"
        .padding=${["8", "4", "5", "4"]}
      >
        <textarea
          spellcheck="false"
          ?disabled=${!0}
          autocomplete="off"
          .value=${this.value ?? ""}
        >
           ${this.value ?? ""}</textarea
        >
      </wui-flex>`
        : l` <wui-flex
      @click=${this.onBoxClick.bind(this)}
      flexDirection="column"
      justifyContent="center"
      gap="01"
      .padding=${["8", "4", "5", "4"]}
    >
      <wui-text
        ${K(this.instructionElementRef)}
        class="instruction"
        color="secondary"
        variant="md-medium"
      >
        Type or
        <wui-button
          class="paste"
          size="md"
          variant="neutral-secondary"
          iconLeft="copy"
          @click=${this.onPasteClick.bind(this)}
        >
          <wui-icon size="sm" color="inherit" slot="iconLeft" name="copy"></wui-icon>
          Paste
        </wui-button>
        address
      </wui-text>
      <textarea
        spellcheck="false"
        ?disabled=${!this.instructionHidden}
        ${K(this.inputElementRef)}
        @input=${this.onInputChange.bind(this)}
        @blur=${this.onBlur.bind(this)}
        .value=${this.value ?? ""}
        autocomplete="off"
      >
${this.value ?? ""}</textarea
      >
    </wui-flex>`;
    }
    focusInput() {
      return p(this, null, function* () {
        this.instructionElementRef.value &&
          ((this.instructionHidden = !0),
          yield this.toggleInstructionFocus(!1),
          (this.instructionElementRef.value.style.pointerEvents = "none"),
          this.inputElementRef.value?.focus(),
          this.inputElementRef.value &&
            (this.inputElementRef.value.selectionStart =
              this.inputElementRef.value.selectionEnd =
                this.inputElementRef.value.value.length));
      });
    }
    focusInstruction() {
      return p(this, null, function* () {
        this.instructionElementRef.value &&
          ((this.instructionHidden = !1),
          yield this.toggleInstructionFocus(!0),
          (this.instructionElementRef.value.style.pointerEvents = "auto"),
          this.inputElementRef.value?.blur());
      });
    }
    toggleInstructionFocus(t) {
      return p(this, null, function* () {
        this.instructionElementRef.value &&
          (yield this.instructionElementRef.value.animate(
            [{ opacity: t ? 0 : 1 }, { opacity: t ? 1 : 0 }],
            { duration: 100, easing: "ease", fill: "forwards" }
          ).finished);
      });
    }
    onBoxClick() {
      !this.value && !this.instructionHidden && this.focusInput();
    }
    onBlur() {
      !this.value &&
        this.instructionHidden &&
        !this.pasting &&
        this.focusInstruction();
    }
    checkHidden() {
      this.instructionHidden && this.focusInput();
    }
    onPasteClick() {
      return p(this, null, function* () {
        this.pasting = !0;
        let t = yield navigator.clipboard.readText();
        a.setReceiverAddress(t), this.focusInput();
      });
    }
    onInputChange(t) {
      let r = t.target;
      (this.pasting = !1),
        (this.value = t.target?.value),
        r.value && !this.instructionHidden && this.focusInput(),
        a.setLoading(!0),
        this.onDebouncedSearch(r.value);
    }
    setReceiverAddress(t) {
      a.setReceiverAddress(t),
        a.setReceiverProfileName(void 0),
        a.setReceiverProfileImageUrl(void 0),
        a.setLoading(!1);
    }
  };
S.styles = re;
D([d()], S.prototype, "value", void 0);
D([d({ type: Boolean })], S.prototype, "readOnly", void 0);
D([u()], S.prototype, "instructionHidden", void 0);
D([u()], S.prototype, "pasting", void 0);
S = D([f("w3m-input-address")], S);
var oe = h`
  :host {
    width: 100%;
    height: 100px;
    border-radius: ${({ borderRadius: e }) => e[5]};
    border: 1px solid ${({ tokens: e }) => e.theme.foregroundPrimary};
    background-color: ${({ tokens: e }) => e.theme.foregroundPrimary};
    transition: background-color ${({ durations: e }) => e.lg}
      ${({ easings: e }) => e["ease-out-power-1"]};
    will-change: background-color;
    transition: all ${({ easings: e }) => e["ease-out-power-1"]}
      ${({ durations: e }) => e.lg};
  }

  :host(:hover) {
    background-color: ${({ tokens: e }) => e.theme.foregroundSecondary};
  }

  wui-flex {
    width: 100%;
    height: fit-content;
  }

  wui-button {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  wui-input-amount {
    mask-image: linear-gradient(
      270deg,
      transparent 0px,
      transparent 8px,
      black 24px,
      black 25px,
      black 32px,
      black 100%
    );
  }

  .totalValue {
    width: 100%;
  }
`;
var _ = function (e, t, r, o) {
    var n = arguments.length,
      i =
        n < 3
          ? t
          : o === null
          ? (o = Object.getOwnPropertyDescriptor(t, r))
          : o,
      s;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      i = Reflect.decorate(e, t, r, o);
    else
      for (var c = e.length - 1; c >= 0; c--)
        (s = e[c]) && (i = (n < 3 ? s(i) : n > 3 ? s(t, r, i) : s(t, r)) || i);
    return n > 3 && i && Object.defineProperty(t, r, i), i;
  },
  T = class extends m {
    constructor() {
      super(...arguments),
        (this.readOnly = !1),
        (this.isInsufficientBalance = !1);
    }
    render() {
      let t = this.readOnly || !this.token;
      return l` <wui-flex
      flexDirection="column"
      gap="01"
      .padding=${["5", "3", "4", "3"]}
    >
      <wui-flex alignItems="center">
        <wui-input-amount
          @inputChange=${this.onInputChange.bind(this)}
          ?disabled=${t}
          .value=${this.sendTokenAmount ? String(this.sendTokenAmount) : ""}
          ?error=${!!this.isInsufficientBalance}
        ></wui-input-amount>
        ${this.buttonTemplate()}
      </wui-flex>
      ${this.bottomTemplate()}
    </wui-flex>`;
    }
    buttonTemplate() {
      return this.token
        ? l`<wui-token-button
        text=${this.token.symbol}
        imageSrc=${this.token.iconUrl}
        @click=${this.handleSelectButtonClick.bind(this)}
      >
      </wui-token-button>`
        : l`<wui-button
      size="md"
      variant="neutral-secondary"
      @click=${this.handleSelectButtonClick.bind(this)}
      >Select token</wui-button
    >`;
    }
    handleSelectButtonClick() {
      this.readOnly || w.push("WalletSendSelectToken");
    }
    sendValueTemplate() {
      if (!this.readOnly && this.token && this.sendTokenAmount) {
        let r = this.token.price * this.sendTokenAmount;
        return l`<wui-text class="totalValue" variant="sm-regular" color="secondary"
        >${
          r ? `$${M.formatNumberToLocalString(r, 2)}` : "Incorrect value"
        }</wui-text
      >`;
      }
      return null;
    }
    maxAmountTemplate() {
      return this.token
        ? l` <wui-text variant="sm-regular" color="secondary">
        ${C.roundNumber(Number(this.token.quantity.numeric), 6, 5)}
      </wui-text>`
        : null;
    }
    actionTemplate() {
      return this.token
        ? l`<wui-link @click=${this.onMaxClick.bind(this)}>Max</wui-link>`
        : null;
    }
    bottomTemplate() {
      return this.readOnly
        ? null
        : l`<wui-flex alignItems="center" justifyContent="space-between">
      ${this.sendValueTemplate()}
      <wui-flex alignItems="center" gap="01" justifyContent="flex-end">
        ${this.maxAmountTemplate()} ${this.actionTemplate()}
      </wui-flex>
    </wui-flex>`;
    }
    onInputChange(t) {
      a.setTokenAmount(t.detail);
    }
    onMaxClick() {
      if (this.token) {
        let t = M.bigNumber(this.token.quantity.numeric);
        a.setTokenAmount(Number(t.toFixed(20)));
      }
    }
  };
T.styles = oe;
_([d({ type: Object })], T.prototype, "token", void 0);
_([d({ type: Boolean })], T.prototype, "readOnly", void 0);
_([d({ type: Number })], T.prototype, "sendTokenAmount", void 0);
_([d({ type: Boolean })], T.prototype, "isInsufficientBalance", void 0);
T = _([f("w3m-input-token")], T);
var ne = h`
  :host {
    display: block;
  }

  wui-flex {
    position: relative;
  }

  wui-icon-box {
    width: 32px;
    height: 32px;
    border-radius: ${({ borderRadius: e }) => e[10]} !important;
    border: 4px solid ${({ tokens: e }) => e.theme.backgroundPrimary};
    background: ${({ tokens: e }) => e.theme.foregroundPrimary};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
  }

  wui-button {
    --local-border-radius: ${({ borderRadius: e }) => e[4]} !important;
  }

  .inputContainer {
    height: fit-content;
  }
`;
var y = function (e, t, r, o) {
    var n = arguments.length,
      i =
        n < 3
          ? t
          : o === null
          ? (o = Object.getOwnPropertyDescriptor(t, r))
          : o,
      s;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      i = Reflect.decorate(e, t, r, o);
    else
      for (var c = e.length - 1; c >= 0; c--)
        (s = e[c]) && (i = (n < 3 ? s(i) : n > 3 ? s(t, r, i) : s(t, r)) || i);
    return n > 3 && i && Object.defineProperty(t, r, i), i;
  },
  b = {
    INSUFFICIENT_FUNDS: "Insufficient Funds",
    INCORRECT_VALUE: "Incorrect Value",
    INVALID_ADDRESS: "Invalid Address",
    ADD_ADDRESS: "Add Address",
    ADD_AMOUNT: "Add Amount",
    SELECT_TOKEN: "Select Token",
    PREVIEW_SEND: "Preview Send",
  },
  x = class extends m {
    constructor() {
      super(),
        (this.unsubscribe = []),
        (this.isTryingToChooseDifferentWallet = !1),
        (this.token = a.state.token),
        (this.sendTokenAmount = a.state.sendTokenAmount),
        (this.receiverAddress = a.state.receiverAddress),
        (this.receiverProfileName = a.state.receiverProfileName),
        (this.loading = a.state.loading),
        (this.params = w.state.data?.send),
        (this.caipAddress = g.getAccountData()?.caipAddress),
        (this.message = b.PREVIEW_SEND),
        (this.disconnecting = !1),
        this.token &&
          !this.params &&
          (this.fetchBalances(), this.fetchNetworkPrice());
      let t = g.subscribeKey("activeCaipAddress", (r) => {
        !r &&
          this.isTryingToChooseDifferentWallet &&
          ((this.isTryingToChooseDifferentWallet = !1),
          U.open({
            view: "Connect",
            data: { redirectView: "WalletSend" },
          }).catch(() => null),
          t());
      });
      this.unsubscribe.push(
        g.subscribeAccountStateProp("caipAddress", (r) => {
          this.caipAddress = r;
        }),
        a.subscribe((r) => {
          (this.token = r.token),
            (this.sendTokenAmount = r.sendTokenAmount),
            (this.receiverAddress = r.receiverAddress),
            (this.receiverProfileName = r.receiverProfileName),
            (this.loading = r.loading);
        })
      );
    }
    disconnectedCallback() {
      this.unsubscribe.forEach((t) => t());
    }
    firstUpdated() {
      return p(this, null, function* () {
        yield this.handleSendParameters();
      });
    }
    render() {
      this.getMessage();
      let t = !!this.params;
      return l` <wui-flex flexDirection="column" .padding=${[
        "0",
        "4",
        "4",
        "4",
      ]}>
      <wui-flex class="inputContainer" gap="2" flexDirection="column">
        <w3m-input-token
          .token=${this.token}
          .sendTokenAmount=${this.sendTokenAmount}
          ?readOnly=${t}
          ?isInsufficientBalance=${this.message === b.INSUFFICIENT_FUNDS}
        ></w3m-input-token>
        <wui-icon-box size="md" variant="secondary" icon="arrowBottom"></wui-icon-box>
        <w3m-input-address
          ?readOnly=${t}
          .value=${
            this.receiverProfileName
              ? this.receiverProfileName
              : this.receiverAddress
          }
        ></w3m-input-address>
      </wui-flex>
      ${this.buttonTemplate()}
    </wui-flex>`;
    }
    fetchBalances() {
      return p(this, null, function* () {
        yield a.fetchTokenBalance(), a.fetchNetworkBalance();
      });
    }
    fetchNetworkPrice() {
      return p(this, null, function* () {
        yield W.getNetworkTokenPrice();
      });
    }
    onButtonClick() {
      w.push("WalletSendPreview", { send: this.params });
    }
    onFundWalletClick() {
      w.push("FundWallet", { redirectView: "WalletSend" });
    }
    onConnectDifferentWalletClick() {
      return p(this, null, function* () {
        try {
          (this.isTryingToChooseDifferentWallet = !0),
            (this.disconnecting = !0),
            yield I.disconnect();
        } finally {
          this.disconnecting = !1;
        }
      });
    }
    getMessage() {
      (this.message = b.PREVIEW_SEND),
        this.receiverAddress &&
          !A.isAddress(this.receiverAddress, g.state.activeChain) &&
          (this.message = b.INVALID_ADDRESS),
        this.receiverAddress || (this.message = b.ADD_ADDRESS),
        this.sendTokenAmount &&
          this.token &&
          this.sendTokenAmount > Number(this.token.quantity.numeric) &&
          (this.message = b.INSUFFICIENT_FUNDS),
        this.sendTokenAmount || (this.message = b.ADD_AMOUNT),
        this.sendTokenAmount &&
          this.token?.price &&
          (this.sendTokenAmount * this.token.price ||
            (this.message = b.INCORRECT_VALUE)),
        this.token || (this.message = b.SELECT_TOKEN);
    }
    buttonTemplate() {
      let t = !this.message.startsWith(b.PREVIEW_SEND),
        r = this.message === b.INSUFFICIENT_FUNDS,
        o = !!this.params;
      return r && !o
        ? l`
        <wui-flex .margin=${[
          "4",
          "0",
          "0",
          "0",
        ]} flexDirection="column" gap="4">
          <wui-button
            @click=${this.onFundWalletClick.bind(this)}
            size="lg"
            variant="accent-secondary"
            fullWidth
          >
            Fund Wallet
          </wui-button>

          <wui-separator data-testid="wui-separator" text="or"></wui-separator>

          <wui-button
            @click=${this.onConnectDifferentWalletClick.bind(this)}
            size="lg"
            variant="neutral-secondary"
            fullWidth
            ?loading=${this.disconnecting}
          >
            Connect a different wallet
          </wui-button>
        </wui-flex>
      `
        : l`<wui-flex .margin=${["4", "0", "0", "0"]}>
      <wui-button
        @click=${this.onButtonClick.bind(this)}
        ?disabled=${t}
        size="lg"
        variant="accent-primary"
        ?loading=${this.loading}
        fullWidth
      >
        ${this.message}
      </wui-button>
    </wui-flex>`;
    }
    handleSendParameters() {
      return p(this, null, function* () {
        if (((this.loading = !0), !this.params)) {
          this.loading = !1;
          return;
        }
        let t = Number(this.params.amount);
        if (isNaN(t)) {
          k.showError("Invalid amount"), (this.loading = !1);
          return;
        }
        let { namespace: r, chainId: o, assetAddress: n } = this.params;
        if (!X.SEND_PARAMS_SUPPORTED_CHAINS.includes(r)) {
          k.showError(`Chain "${r}" is not supported for send parameters`),
            (this.loading = !1);
          return;
        }
        let i = g.getCaipNetworkById(o, r);
        if (!i) {
          k.showError(`Network with id "${o}" not found`), (this.loading = !1);
          return;
        }
        try {
          let {
            balance: s,
            name: c,
            symbol: H,
            decimals: J,
          } = yield te.fetchERC20Balance({
            caipAddress: this.caipAddress,
            assetAddress: n,
            caipNetwork: i,
          });
          if (!c || !H || !J || !s) {
            k.showError("Token not found");
            return;
          }
          a.setToken({
            name: c,
            symbol: H,
            chainId: i.id.toString(),
            address: `${i.chainNamespace}:${i.id}:${n}`,
            value: 0,
            price: 0,
            quantity: { decimals: J.toString(), numeric: s.toString() },
            iconUrl: O.getTokenImage(H) ?? "",
          }),
            a.setTokenAmount(t),
            a.setReceiverAddress(this.params.to);
        } catch (s) {
          console.error("Failed to load token information:", s),
            k.showError("Failed to load token information");
        } finally {
          this.loading = !1;
        }
      });
    }
  };
x.styles = ne;
y([u()], x.prototype, "token", void 0);
y([u()], x.prototype, "sendTokenAmount", void 0);
y([u()], x.prototype, "receiverAddress", void 0);
y([u()], x.prototype, "receiverProfileName", void 0);
y([u()], x.prototype, "loading", void 0);
y([u()], x.prototype, "params", void 0);
y([u()], x.prototype, "caipAddress", void 0);
y([u()], x.prototype, "message", void 0);
y([u()], x.prototype, "disconnecting", void 0);
x = y([f("w3m-wallet-send-view")], x);
var se = h`
  .contentContainer {
    height: 440px;
    overflow: scroll;
    scrollbar-width: none;
  }

  .contentContainer::-webkit-scrollbar {
    display: none;
  }

  wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: ${({ borderRadius: e }) => e[3]};
  }
`;
var B = function (e, t, r, o) {
    var n = arguments.length,
      i =
        n < 3
          ? t
          : o === null
          ? (o = Object.getOwnPropertyDescriptor(t, r))
          : o,
      s;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      i = Reflect.decorate(e, t, r, o);
    else
      for (var c = e.length - 1; c >= 0; c--)
        (s = e[c]) && (i = (n < 3 ? s(i) : n > 3 ? s(t, r, i) : s(t, r)) || i);
    return n > 3 && i && Object.defineProperty(t, r, i), i;
  },
  E = class extends m {
    constructor() {
      super(),
        (this.unsubscribe = []),
        (this.tokenBalances = a.state.tokenBalances),
        (this.search = ""),
        (this.onDebouncedSearch = A.debounce((t) => {
          this.search = t;
        })),
        this.fetchBalancesAndNetworkPrice(),
        this.unsubscribe.push(
          a.subscribe((t) => {
            this.tokenBalances = t.tokenBalances;
          })
        );
    }
    disconnectedCallback() {
      this.unsubscribe.forEach((t) => t());
    }
    render() {
      return l`
      <wui-flex flexDirection="column">
        ${this.templateSearchInput()} <wui-separator></wui-separator> ${this.templateTokens()}
      </wui-flex>
    `;
    }
    fetchBalancesAndNetworkPrice() {
      return p(this, null, function* () {
        (!this.tokenBalances || this.tokenBalances?.length === 0) &&
          (yield this.fetchBalances(), yield this.fetchNetworkPrice());
      });
    }
    fetchBalances() {
      return p(this, null, function* () {
        yield a.fetchTokenBalance(), a.fetchNetworkBalance();
      });
    }
    fetchNetworkPrice() {
      return p(this, null, function* () {
        yield W.getNetworkTokenPrice();
      });
    }
    templateSearchInput() {
      return l`
      <wui-flex gap="2" padding="3">
        <wui-input-text
          @inputChange=${this.onInputChange.bind(this)}
          class="network-search-input"
          size="sm"
          placeholder="Search token"
          icon="search"
        ></wui-input-text>
      </wui-flex>
    `;
    }
    templateTokens() {
      return (
        (this.tokens = this.tokenBalances?.filter(
          (t) => t.chainId === g.state.activeCaipNetwork?.caipNetworkId
        )),
        this.search
          ? (this.filteredTokens = this.tokenBalances?.filter((t) =>
              t.name.toLowerCase().includes(this.search.toLowerCase())
            ))
          : (this.filteredTokens = this.tokens),
        l`
      <wui-flex
        class="contentContainer"
        flexDirection="column"
        .padding=${["0", "3", "0", "3"]}
      >
        <wui-flex justifyContent="flex-start" .padding=${["4", "3", "3", "3"]}>
          <wui-text variant="md-medium" color="secondary">Your tokens</wui-text>
        </wui-flex>
        <wui-flex flexDirection="column" gap="2">
          ${
            this.filteredTokens && this.filteredTokens.length > 0
              ? this.filteredTokens.map(
                  (t) => l`<wui-list-token
                    @click=${this.handleTokenClick.bind(this, t)}
                    ?clickable=${!0}
                    tokenName=${t.name}
                    tokenImageUrl=${t.iconUrl}
                    tokenAmount=${t.quantity.numeric}
                    tokenValue=${t.value}
                    tokenCurrency=${t.symbol}
                  ></wui-list-token>`
                )
              : l`<wui-flex
                .padding=${["20", "0", "0", "0"]}
                alignItems="center"
                flexDirection="column"
                gap="4"
              >
                <wui-icon-box icon="coinPlaceholder" color="default" size="lg"></wui-icon-box>
                <wui-flex
                  class="textContent"
                  gap="2"
                  flexDirection="column"
                  justifyContent="center"
                  flexDirection="column"
                >
                  <wui-text variant="lg-medium" align="center" color="primary">
                    No tokens found
                  </wui-text>
                  <wui-text variant="lg-regular" align="center" color="secondary">
                    Your tokens will appear here
                  </wui-text>
                </wui-flex>
                <wui-link @click=${this.onBuyClick.bind(this)}>Buy</wui-link>
              </wui-flex>`
          }
        </wui-flex>
      </wui-flex>
    `
      );
    }
    onBuyClick() {
      w.push("OnRampProviders");
    }
    onInputChange(t) {
      this.onDebouncedSearch(t.detail);
    }
    handleTokenClick(t) {
      a.setToken(t), a.setTokenAmount(void 0), w.goBack();
    }
  };
E.styles = se;
B([u()], E.prototype, "tokenBalances", void 0);
B([u()], E.prototype, "tokens", void 0);
B([u()], E.prototype, "filteredTokens", void 0);
B([u()], E.prototype, "search", void 0);
E = B([f("w3m-wallet-send-select-token-view")], E);
var ae = h`
  :host {
    height: 32px;
    display: flex;
    align-items: center;
    gap: ${({ spacing: e }) => e[1]};
    border-radius: ${({ borderRadius: e }) => e[32]};
    background-color: ${({ tokens: e }) => e.theme.foregroundPrimary};
    padding: ${({ spacing: e }) => e[1]};
    padding-left: ${({ spacing: e }) => e[2]};
  }

  wui-avatar,
  wui-image {
    width: 24px;
    height: 24px;
    border-radius: ${({ borderRadius: e }) => e[16]};
  }

  wui-icon {
    border-radius: ${({ borderRadius: e }) => e[16]};
  }
`;
var L = function (e, t, r, o) {
    var n = arguments.length,
      i =
        n < 3
          ? t
          : o === null
          ? (o = Object.getOwnPropertyDescriptor(t, r))
          : o,
      s;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      i = Reflect.decorate(e, t, r, o);
    else
      for (var c = e.length - 1; c >= 0; c--)
        (s = e[c]) && (i = (n < 3 ? s(i) : n > 3 ? s(t, r, i) : s(t, r)) || i);
    return n > 3 && i && Object.defineProperty(t, r, i), i;
  },
  N = class extends m {
    constructor() {
      super(...arguments), (this.text = "");
    }
    render() {
      return l`<wui-text variant="lg-regular" color="primary">${
        this.text
      }</wui-text>
      ${this.imageTemplate()}`;
    }
    imageTemplate() {
      return this.address
        ? l`<wui-avatar address=${this.address} .imageSrc=${this.imageSrc}></wui-avatar>`
        : this.imageSrc
        ? l`<wui-image src=${this.imageSrc}></wui-image>`
        : l`<wui-icon size="lg" color="inverse" name="networkPlaceholder"></wui-icon>`;
    }
  };
N.styles = [j, V, ae];
L([d({ type: String })], N.prototype, "text", void 0);
L([d({ type: String })], N.prototype, "address", void 0);
L([d({ type: String })], N.prototype, "imageSrc", void 0);
N = L([f("wui-preview-item")], N);
var le = h`
  :host {
    display: flex;
    padding: ${({ spacing: e }) => e[4]} ${({ spacing: e }) => e[3]};
    width: 100%;
    background-color: ${({ tokens: e }) => e.theme.foregroundPrimary};
    border-radius: ${({ borderRadius: e }) => e[4]};
  }

  wui-image {
    width: 20px;
    height: 20px;
    border-radius: ${({ borderRadius: e }) => e[16]};
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }
`;
var F = function (e, t, r, o) {
    var n = arguments.length,
      i =
        n < 3
          ? t
          : o === null
          ? (o = Object.getOwnPropertyDescriptor(t, r))
          : o,
      s;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      i = Reflect.decorate(e, t, r, o);
    else
      for (var c = e.length - 1; c >= 0; c--)
        (s = e[c]) && (i = (n < 3 ? s(i) : n > 3 ? s(t, r, i) : s(t, r)) || i);
    return n > 3 && i && Object.defineProperty(t, r, i), i;
  },
  R = class extends m {
    constructor() {
      super(...arguments),
        (this.imageSrc = void 0),
        (this.textTitle = ""),
        (this.textValue = void 0);
    }
    render() {
      return l`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="lg-regular" color="primary"> ${
          this.textTitle
        } </wui-text>
        ${this.templateContent()}
      </wui-flex>
    `;
    }
    templateContent() {
      return this.imageSrc
        ? l`<wui-image src=${this.imageSrc} alt=${this.textTitle}></wui-image>`
        : this.textValue
        ? l` <wui-text variant="md-regular" color="secondary"> ${this.textValue} </wui-text>`
        : l`<wui-icon size="inherit" color="default" name="networkPlaceholder"></wui-icon>`;
    }
  };
R.styles = [j, V, le];
F([d()], R.prototype, "imageSrc", void 0);
F([d()], R.prototype, "textTitle", void 0);
F([d()], R.prototype, "textValue", void 0);
R = F([f("wui-list-content")], R);
var ce = h`
  :host {
    display: flex;
    width: auto;
    flex-direction: column;
    gap: ${({ spacing: e }) => e[1]};
    border-radius: ${({ borderRadius: e }) => e[5]};
    background: ${({ tokens: e }) => e.theme.foregroundPrimary};
    padding: ${({ spacing: e }) => e[3]} ${({ spacing: e }) => e[2]}
      ${({ spacing: e }) => e[2]} ${({ spacing: e }) => e[2]};
  }

  wui-list-content {
    width: -webkit-fill-available !important;
  }

  wui-text {
    padding: 0 ${({ spacing: e }) => e[2]};
  }

  wui-flex {
    margin-top: ${({ spacing: e }) => e[2]};
  }

  .network {
    cursor: pointer;
    transition: background-color ${({ durations: e }) => e.lg}
      ${({ easings: e }) => e["ease-out-power-1"]};
    will-change: background-color;
  }

  .network:focus-visible {
    border: 1px solid ${({ tokens: e }) => e.core.textAccentPrimary};
    background-color: ${({ tokens: e }) => e.core.glass010};
    -webkit-box-shadow: 0px 0px 0px 4px ${({ tokens: e }) =>
      e.core.foregroundAccent010};
    -moz-box-shadow: 0px 0px 0px 4px ${({ tokens: e }) =>
      e.core.foregroundAccent010};
    box-shadow: 0px 0px 0px 4px ${({ tokens: e }) =>
      e.core.foregroundAccent010};
  }

  .network:hover {
    background-color: ${({ tokens: e }) => e.core.glass010};
  }

  .network:active {
    background-color: ${({ tokens: e }) => e.core.glass010};
  }
`;
var z = function (e, t, r, o) {
    var n = arguments.length,
      i =
        n < 3
          ? t
          : o === null
          ? (o = Object.getOwnPropertyDescriptor(t, r))
          : o,
      s;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      i = Reflect.decorate(e, t, r, o);
    else
      for (var c = e.length - 1; c >= 0; c--)
        (s = e[c]) && (i = (n < 3 ? s(i) : n > 3 ? s(t, r, i) : s(t, r)) || i);
    return n > 3 && i && Object.defineProperty(t, r, i), i;
  },
  P = class extends m {
    constructor() {
      super(...arguments), (this.params = w.state.data?.send);
    }
    render() {
      return l` <wui-text variant="sm-regular" color="secondary">Details</wui-text>
      <wui-flex flexDirection="column" gap="1">
        <wui-list-content
          textTitle="Address"
          textValue=${C.getTruncateString({
            string: this.receiverAddress ?? "",
            charsStart: 4,
            charsEnd: 4,
            truncate: "middle",
          })}
        >
        </wui-list-content>
        ${this.networkTemplate()}
      </wui-flex>`;
    }
    networkTemplate() {
      return this.caipNetwork?.name
        ? l` <wui-list-content
        @click=${() => this.onNetworkClick(this.caipNetwork)}
        class="network"
        textTitle="Network"
        imageSrc=${ie(O.getNetworkImage(this.caipNetwork))}
      ></wui-list-content>`
        : null;
    }
    onNetworkClick(t) {
      t && !this.params && w.push("Networks", { network: t });
    }
  };
P.styles = ce;
z([d()], P.prototype, "receiverAddress", void 0);
z([d({ type: Object })], P.prototype, "caipNetwork", void 0);
z([u()], P.prototype, "params", void 0);
P = z([f("w3m-wallet-send-details")], P);
var ue = h`
  wui-avatar,
  wui-image {
    display: ruby;
    width: 32px;
    height: 32px;
    border-radius: ${({ borderRadius: e }) => e[20]};
  }

  .sendButton {
    width: 70%;
    --local-width: 100% !important;
    --local-border-radius: ${({ borderRadius: e }) => e[4]} !important;
  }

  .cancelButton {
    width: 30%;
    --local-width: 100% !important;
    --local-border-radius: ${({ borderRadius: e }) => e[4]} !important;
  }
`;
var $ = function (e, t, r, o) {
    var n = arguments.length,
      i =
        n < 3
          ? t
          : o === null
          ? (o = Object.getOwnPropertyDescriptor(t, r))
          : o,
      s;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      i = Reflect.decorate(e, t, r, o);
    else
      for (var c = e.length - 1; c >= 0; c--)
        (s = e[c]) && (i = (n < 3 ? s(i) : n > 3 ? s(t, r, i) : s(t, r)) || i);
    return n > 3 && i && Object.defineProperty(t, r, i), i;
  },
  v = class extends m {
    constructor() {
      super(),
        (this.unsubscribe = []),
        (this.token = a.state.token),
        (this.sendTokenAmount = a.state.sendTokenAmount),
        (this.receiverAddress = a.state.receiverAddress),
        (this.receiverProfileName = a.state.receiverProfileName),
        (this.receiverProfileImageUrl = a.state.receiverProfileImageUrl),
        (this.caipNetwork = g.state.activeCaipNetwork),
        (this.loading = a.state.loading),
        (this.params = w.state.data?.send),
        this.unsubscribe.push(
          a.subscribe((t) => {
            (this.token = t.token),
              (this.sendTokenAmount = t.sendTokenAmount),
              (this.receiverAddress = t.receiverAddress),
              (this.receiverProfileName = t.receiverProfileName),
              (this.receiverProfileImageUrl = t.receiverProfileImageUrl),
              (this.loading = t.loading);
          }),
          g.subscribeKey("activeCaipNetwork", (t) => (this.caipNetwork = t))
        );
    }
    disconnectedCallback() {
      this.unsubscribe.forEach((t) => t());
    }
    render() {
      return l` <wui-flex flexDirection="column" .padding=${[
        "0",
        "4",
        "4",
        "4",
      ]}>
      <wui-flex gap="2" flexDirection="column" .padding=${["0", "2", "0", "2"]}>
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-flex flexDirection="column" gap="01">
            <wui-text variant="sm-regular" color="secondary">Send</wui-text>
            ${this.sendValueTemplate()}
          </wui-flex>
          <wui-preview-item
            text="${
              this.sendTokenAmount
                ? C.roundNumber(this.sendTokenAmount, 6, 5)
                : "unknown"
            } ${this.token?.symbol}"
            .imageSrc=${this.token?.iconUrl}
          ></wui-preview-item>
        </wui-flex>
        <wui-flex>
          <wui-icon color="default" size="md" name="arrowBottom"></wui-icon>
        </wui-flex>
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="sm-regular" color="secondary">To</wui-text>
          <wui-preview-item
            text="${
              this.receiverProfileName
                ? C.getTruncateString({
                    string: this.receiverProfileName,
                    charsStart: 20,
                    charsEnd: 0,
                    truncate: "end",
                  })
                : C.getTruncateString({
                    string: this.receiverAddress ? this.receiverAddress : "",
                    charsStart: 4,
                    charsEnd: 4,
                    truncate: "middle",
                  })
            }"
            address=${this.receiverAddress ?? ""}
            .imageSrc=${this.receiverProfileImageUrl ?? void 0}
            .isAddress=${!0}
          ></wui-preview-item>
        </wui-flex>
      </wui-flex>
      <wui-flex flexDirection="column" .padding=${["6", "0", "0", "0"]}>
        <w3m-wallet-send-details
          .caipNetwork=${this.caipNetwork}
          .receiverAddress=${this.receiverAddress}
        ></w3m-wallet-send-details>
        <wui-flex justifyContent="center" gap="1" .padding=${[
          "3",
          "0",
          "0",
          "0",
        ]}>
          <wui-icon size="sm" color="default" name="warningCircle"></wui-icon>
          <wui-text variant="sm-regular" color="secondary">Review transaction carefully</wui-text>
        </wui-flex>
        <wui-flex justifyContent="center" gap="3" .padding=${[
          "4",
          "0",
          "0",
          "0",
        ]}>
          <wui-button
            class="cancelButton"
            @click=${this.onCancelClick.bind(this)}
            size="lg"
            variant="neutral-secondary"
          >
            Cancel
          </wui-button>
          <wui-button
            class="sendButton"
            @click=${this.onSendClick.bind(this)}
            size="lg"
            variant="accent-primary"
            .loading=${this.loading}
          >
            Send
          </wui-button>
        </wui-flex>
      </wui-flex></wui-flex
    >`;
    }
    sendValueTemplate() {
      if (!this.params && this.token && this.sendTokenAmount) {
        let r = this.token.price * this.sendTokenAmount;
        return l`<wui-text variant="md-regular" color="primary"
        >$${r.toFixed(2)}</wui-text
      >`;
      }
      return null;
    }
    onSendClick() {
      return p(this, null, function* () {
        if (!this.sendTokenAmount || !this.receiverAddress) {
          k.showError("Please enter a valid amount and receiver address");
          return;
        }
        try {
          yield a.sendToken(),
            this.params
              ? w.reset("WalletSendConfirmed")
              : (k.showSuccess("Transaction started"), w.replace("Account"));
        } catch (t) {
          let r = "Failed to send transaction. Please try again.",
            o =
              t instanceof Z &&
              t.originalName ===
                Q.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST;
          (g.state.activeChain === G.CHAIN.SOLANA || o) &&
            t instanceof Error &&
            (r = t.message),
            ee.sendEvent({
              type: "track",
              event: o ? "SEND_REJECTED" : "SEND_ERROR",
              properties: a.getSdkEventProperties(t),
            }),
            k.showError(r);
        }
      });
    }
    onCancelClick() {
      w.goBack();
    }
  };
v.styles = ue;
$([u()], v.prototype, "token", void 0);
$([u()], v.prototype, "sendTokenAmount", void 0);
$([u()], v.prototype, "receiverAddress", void 0);
$([u()], v.prototype, "receiverProfileName", void 0);
$([u()], v.prototype, "receiverProfileImageUrl", void 0);
$([u()], v.prototype, "caipNetwork", void 0);
$([u()], v.prototype, "loading", void 0);
$([u()], v.prototype, "params", void 0);
v = $([f("w3m-wallet-send-preview-view")], v);
var de = h`
  .icon-box {
    width: 64px;
    height: 64px;
    border-radius: 16px;
    background-color: ${({ spacing: e }) => e[16]};
    border: 8px solid ${({ tokens: e }) => e.theme.borderPrimary};
    border-radius: ${({ borderRadius: e }) => e.round};
  }
`;
var pe = function (e, t, r, o) {
    var n = arguments.length,
      i =
        n < 3
          ? t
          : o === null
          ? (o = Object.getOwnPropertyDescriptor(t, r))
          : o,
      s;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      i = Reflect.decorate(e, t, r, o);
    else
      for (var c = e.length - 1; c >= 0; c--)
        (s = e[c]) && (i = (n < 3 ? s(i) : n > 3 ? s(t, r, i) : s(t, r)) || i);
    return n > 3 && i && Object.defineProperty(t, r, i), i;
  },
  Y = class extends m {
    constructor() {
      super(), (this.unsubscribe = []), this.unsubscribe.push();
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
          <wui-icon size="xxl" color="success" name="checkmark"></wui-icon>
        </wui-flex>

        <wui-text variant="h6-medium" color="primary">You successfully sent asset</wui-text>

        <wui-button
          fullWidth
          @click=${this.onCloseClick.bind(this)}
          size="lg"
          variant="neutral-secondary"
        >
          Close
        </wui-button>
      </wui-flex>
    `;
    }
    onCloseClick() {
      U.close();
    }
  };
Y.styles = de;
Y = pe([f("w3m-send-confirmed-view")], Y);
export {
  Y as W3mSendConfirmedView,
  E as W3mSendSelectTokenView,
  v as W3mWalletSendPreviewView,
  x as W3mWalletSendView,
};
