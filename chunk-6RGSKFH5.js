import { a as N } from "./chunk-NZR2LZWU.js";
import { a as c, b as $ } from "./chunk-ISXP6GOO.js";
import { c as m, g as D, j as A, k as d } from "./chunk-L4ZNINEC.js";
import { e as n, k as u } from "./chunk-ICDT4GZS.js";
import {
  H as I,
  e as O,
  f as T,
  j as S,
  q as j,
  s as L,
  w as E,
  z as p,
} from "./chunk-U7GUEFJZ.js";
import { a as k } from "./chunk-2K64HG7Q.js";
var R = (function (t) {
  return (
    (t.approve = "approved"),
    (t.bought = "bought"),
    (t.borrow = "borrowed"),
    (t.burn = "burnt"),
    (t.cancel = "canceled"),
    (t.claim = "claimed"),
    (t.deploy = "deployed"),
    (t.deposit = "deposited"),
    (t.execute = "executed"),
    (t.mint = "minted"),
    (t.receive = "received"),
    (t.repay = "repaid"),
    (t.send = "sent"),
    (t.sell = "sold"),
    (t.stake = "staked"),
    (t.trade = "swapped"),
    (t.unstake = "unstaked"),
    (t.withdraw = "withdrawn"),
    t
  );
})(R || {});
var P = m`
  :host > wui-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    box-shadow: inset 0 0 0 1px ${({ tokens: t }) => t.core.glass010};
    background-color: ${({ tokens: t }) => t.core.glass010};
  }

  :host([data-no-images='true']) > wui-flex {
    background-color: ${({ tokens: t }) => t.theme.foregroundPrimary};
    border-radius: ${({ borderRadius: t }) => t[3]} !important;
  }

  :host > wui-flex wui-image {
    display: block;
  }

  :host > wui-flex,
  :host > wui-flex wui-image,
  .swap-images-container,
  .swap-images-container.nft,
  wui-image.nft {
    border-top-left-radius: var(--local-left-border-radius);
    border-top-right-radius: var(--local-right-border-radius);
    border-bottom-left-radius: var(--local-left-border-radius);
    border-bottom-right-radius: var(--local-right-border-radius);
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }

  .swap-images-container {
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;
  }

  .swap-images-container wui-image:first-child {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 0;
    left: 0%;
    clip-path: inset(0px calc(50% + 2px) 0px 0%);
  }

  .swap-images-container wui-image:last-child {
    clip-path: inset(0px 0px 0px calc(50% + 2px));
  }

  wui-flex.status-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
    border-radius: ${({ borderRadius: t }) => t[4]};
    background-color: ${({ tokens: t }) => t.theme.backgroundPrimary};
    box-shadow: 0 0 0 2px ${({ tokens: t }) => t.theme.backgroundPrimary};
    overflow: hidden;
    width: 16px;
    height: 16px;
  }
`;
var y = function (t, e, r, o) {
    var s = arguments.length,
      i =
        s < 3
          ? e
          : o === null
          ? (o = Object.getOwnPropertyDescriptor(e, r))
          : o,
      a;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      i = Reflect.decorate(t, e, r, o);
    else
      for (var l = t.length - 1; l >= 0; l--)
        (a = t[l]) && (i = (s < 3 ? a(i) : s > 3 ? a(e, r, i) : a(e, r)) || i);
    return s > 3 && i && Object.defineProperty(e, r, i), i;
  },
  f = class extends u {
    constructor() {
      super(...arguments),
        (this.images = []),
        (this.secondImage = { type: void 0, url: "" });
    }
    render() {
      let [e, r] = this.images;
      this.images.length || (this.dataset.noImages = "true");
      let o = e?.type === "NFT",
        s = r?.url ? r.type === "NFT" : o,
        i = o ? "var(--apkt-borderRadius-3)" : "var(--apkt-borderRadius-5)",
        a = s ? "var(--apkt-borderRadius-3)" : "var(--apkt-borderRadius-5)";
      return (
        (this.style.cssText = `
    --local-left-border-radius: ${i};
    --local-right-border-radius: ${a};
    `),
        n`<wui-flex> ${this.templateVisual()} ${this.templateIcon()} </wui-flex>`
      );
    }
    templateVisual() {
      let [e, r] = this.images,
        o = e?.type;
      return this.images.length === 2 && (e?.url || r?.url)
        ? n`<div class="swap-images-container">
        ${
          e?.url
            ? n`<wui-image src=${e.url} alt="Transaction image"></wui-image>`
            : null
        }
        ${
          r?.url
            ? n`<wui-image src=${r.url} alt="Transaction image"></wui-image>`
            : null
        }
      </div>`
        : e?.url
        ? n`<wui-image src=${e.url} alt="Transaction image"></wui-image>`
        : o === "NFT"
        ? n`<wui-icon size="inherit" color="default" name="nftPlaceholder"></wui-icon>`
        : n`<wui-icon size="inherit" color="default" name="coinPlaceholder"></wui-icon>`;
    }
    templateIcon() {
      let e = "accent-primary",
        r;
      return (
        (r = this.getIcon()),
        this.status && (e = this.getStatusColor()),
        r
          ? n`
      <wui-flex alignItems="center" justifyContent="center" class="status-box">
        <wui-icon-box size="sm" color=${e} icon=${r}></wui-icon-box>
      </wui-flex>
    `
          : null
      );
    }
    getDirectionIcon() {
      switch (this.direction) {
        case "in":
          return "arrowBottom";
        case "out":
          return "arrowTop";
        default:
          return;
      }
    }
    getIcon() {
      return this.onlyDirectionIcon
        ? this.getDirectionIcon()
        : this.type === "trade"
        ? "swapHorizontal"
        : this.type === "approve"
        ? "checkmark"
        : this.type === "cancel"
        ? "close"
        : this.getDirectionIcon();
    }
    getStatusColor() {
      switch (this.status) {
        case "confirmed":
          return "success";
        case "failed":
          return "error";
        case "pending":
          return "inverse";
        default:
          return "accent-primary";
      }
    }
  };
f.styles = [P];
y([c()], f.prototype, "type", void 0);
y([c()], f.prototype, "status", void 0);
y([c()], f.prototype, "direction", void 0);
y([c({ type: Boolean })], f.prototype, "onlyDirectionIcon", void 0);
y([c({ type: Array })], f.prototype, "images", void 0);
y([c({ type: Object })], f.prototype, "secondImage", void 0);
f = y([d("wui-transaction-visual")], f);
var B = m`
  :host {
    width: 100%;
  }

  :host > wui-flex:first-child {
    align-items: center;
    column-gap: ${({ spacing: t }) => t[2]};
    padding: ${({ spacing: t }) => t[1]} ${({ spacing: t }) => t[2]};
    width: 100%;
  }

  :host > wui-flex:first-child wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  :host wui-flex wui-flex {
    overflow: hidden;
  }

  :host .description-container wui-text span {
    word-break: break-all;
  }

  :host .description-container wui-text {
    overflow: hidden;
  }

  :host .description-separator-icon {
    margin: 0px 6px;
  }

  :host wui-text > span {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
`;
var x = function (t, e, r, o) {
    var s = arguments.length,
      i =
        s < 3
          ? e
          : o === null
          ? (o = Object.getOwnPropertyDescriptor(e, r))
          : o,
      a;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      i = Reflect.decorate(t, e, r, o);
    else
      for (var l = t.length - 1; l >= 0; l--)
        (a = t[l]) && (i = (s < 3 ? a(i) : s > 3 ? a(e, r, i) : a(e, r)) || i);
    return s > 3 && i && Object.defineProperty(e, r, i), i;
  },
  h = class extends u {
    constructor() {
      super(...arguments),
        (this.type = "approve"),
        (this.onlyDirectionIcon = !1),
        (this.images = []);
    }
    render() {
      return n`
      <wui-flex>
        <wui-transaction-visual
          .status=${this.status}
          direction=${N(this.direction)}
          type=${this.type}
          .onlyDirectionIcon=${this.onlyDirectionIcon}
          .images=${this.images}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="1">
          <wui-text variant="lg-medium" color="primary">
            ${R[this.type] || this.type}
          </wui-text>
          <wui-flex class="description-container">
            ${this.templateDescription()} ${this.templateSecondDescription()}
          </wui-flex>
        </wui-flex>
        <wui-text variant="sm-medium" color="secondary"><span>${
          this.date
        }</span></wui-text>
      </wui-flex>
    `;
    }
    templateDescription() {
      let e = this.descriptions?.[0];
      return e
        ? n`
          <wui-text variant="md-regular" color="secondary">
            <span>${e}</span>
          </wui-text>
        `
        : null;
    }
    templateSecondDescription() {
      let e = this.descriptions?.[1];
      return e
        ? n`
          <wui-icon class="description-separator-icon" size="sm" name="arrowRight"></wui-icon>
          <wui-text variant="md-regular" color="secondary">
            <span>${e}</span>
          </wui-text>
        `
        : null;
    }
  };
h.styles = [D, B];
x([c()], h.prototype, "type", void 0);
x([c({ type: Array })], h.prototype, "descriptions", void 0);
x([c()], h.prototype, "date", void 0);
x([c({ type: Boolean })], h.prototype, "onlyDirectionIcon", void 0);
x([c()], h.prototype, "status", void 0);
x([c()], h.prototype, "direction", void 0);
x([c({ type: Array })], h.prototype, "images", void 0);
h = x([d("wui-transaction-list-item")], h);
var U = m`
  wui-flex {
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }

  wui-image {
    border-radius: ${({ borderRadius: t }) => t[128]};
  }

  .fallback-icon {
    color: ${({ tokens: t }) => t.theme.iconInverse};
    border-radius: ${({ borderRadius: t }) => t[3]};
    background-color: ${({ tokens: t }) => t.theme.foregroundPrimary};
  }

  .direction-icon,
  .status-image {
    position: absolute;
    right: 0;
    bottom: 0;
    border-radius: ${({ borderRadius: t }) => t[128]};
    border: 2px solid ${({ tokens: t }) => t.theme.backgroundPrimary};
  }

  .direction-icon {
    padding: ${({ spacing: t }) => t["01"]};
    color: ${({ tokens: t }) => t.core.iconSuccess};

    background-color: color-mix(
      in srgb,
      ${({ tokens: t }) => t.core.textSuccess} 30%,
      ${({ tokens: t }) => t.theme.backgroundPrimary} 70%
    );
  }

  /* -- Sizes --------------------------------------------------- */
  :host([data-size='sm']) > wui-image:not(.status-image),
  :host([data-size='sm']) > wui-flex {
    width: 24px;
    height: 24px;
  }

  :host([data-size='lg']) > wui-image:not(.status-image),
  :host([data-size='lg']) > wui-flex {
    width: 40px;
    height: 40px;
  }

  :host([data-size='sm']) .fallback-icon {
    height: 16px;
    width: 16px;
    padding: ${({ spacing: t }) => t[1]};
  }

  :host([data-size='lg']) .fallback-icon {
    height: 32px;
    width: 32px;
    padding: ${({ spacing: t }) => t[1]};
  }

  :host([data-size='sm']) .direction-icon,
  :host([data-size='sm']) .status-image {
    transform: translate(40%, 30%);
  }

  :host([data-size='lg']) .direction-icon,
  :host([data-size='lg']) .status-image {
    transform: translate(40%, 10%);
  }

  :host([data-size='sm']) .status-image {
    height: 14px;
    width: 14px;
  }

  :host([data-size='lg']) .status-image {
    height: 20px;
    width: 20px;
  }

  /* -- Crop effects --------------------------------------------------- */
  .swap-crop-left-image,
  .swap-crop-right-image {
    position: absolute;
    top: 0;
    bottom: 0;
  }

  .swap-crop-left-image {
    left: 0;
    clip-path: inset(0px calc(50% + 1.5px) 0px 0%);
  }

  .swap-crop-right-image {
    right: 0;
    clip-path: inset(0px 0px 0px calc(50% + 1.5px));
  }
`;
var C = function (t, e, r, o) {
    var s = arguments.length,
      i =
        s < 3
          ? e
          : o === null
          ? (o = Object.getOwnPropertyDescriptor(e, r))
          : o,
      a;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      i = Reflect.decorate(t, e, r, o);
    else
      for (var l = t.length - 1; l >= 0; l--)
        (a = t[l]) && (i = (s < 3 ? a(i) : s > 3 ? a(e, r, i) : a(e, r)) || i);
    return s > 3 && i && Object.defineProperty(e, r, i), i;
  },
  z = { sm: "xxs", lg: "md" },
  b = class extends u {
    constructor() {
      super(...arguments),
        (this.type = "approve"),
        (this.size = "lg"),
        (this.statusImageUrl = ""),
        (this.images = []);
    }
    render() {
      return n`<wui-flex>${this.templateVisual()} ${this.templateIcon()}</wui-flex>`;
    }
    templateVisual() {
      switch (((this.dataset.size = this.size), this.type)) {
        case "trade":
          return this.swapTemplate();
        case "fiat":
          return this.fiatTemplate();
        case "unknown":
          return this.unknownTemplate();
        default:
          return this.tokenTemplate();
      }
    }
    swapTemplate() {
      let [e, r] = this.images;
      return this.images.length === 2 && (e || r)
        ? n`
        <wui-image class="swap-crop-left-image" src=${e} alt="Swap image"></wui-image>
        <wui-image class="swap-crop-right-image" src=${r} alt="Swap image"></wui-image>
      `
        : e
        ? n`<wui-image src=${e} alt="Swap image"></wui-image>`
        : null;
    }
    fiatTemplate() {
      return n`<wui-icon
      class="fallback-icon"
      size=${z[this.size]}
      name="dollar"
    ></wui-icon>`;
    }
    unknownTemplate() {
      return n`<wui-icon
      class="fallback-icon"
      size=${z[this.size]}
      name="questionMark"
    ></wui-icon>`;
    }
    tokenTemplate() {
      let [e] = this.images;
      return e
        ? n`<wui-image src=${e} alt="Token image"></wui-image> `
        : n`<wui-icon
      class="fallback-icon"
      name=${this.type === "nft" ? "image" : "coinPlaceholder"}
    ></wui-icon>`;
    }
    templateIcon() {
      return this.statusImageUrl
        ? n`<wui-image
        class="status-image"
        src=${this.statusImageUrl}
        alt="Status image"
      ></wui-image>`
        : n`<wui-icon
      class="direction-icon"
      size=${z[this.size]}
      name=${this.getTemplateIcon()}
    ></wui-icon>`;
    }
    getTemplateIcon() {
      return this.type === "trade" ? "arrowClockWise" : "arrowBottom";
    }
  };
b.styles = [U];
C([c()], b.prototype, "type", void 0);
C([c()], b.prototype, "size", void 0);
C([c()], b.prototype, "statusImageUrl", void 0);
C([c({ type: Array })], b.prototype, "images", void 0);
b = C([d("wui-transaction-thumbnail")], b);
var W = m`
  :host > wui-flex:first-child {
    gap: ${({ spacing: t }) => t[2]};
    padding: ${({ spacing: t }) => t[3]};
    width: 100%;
  }

  wui-flex {
    display: flex;
    flex: 1;
  }
`;
var M = function (t, e, r, o) {
    var s = arguments.length,
      i =
        s < 3
          ? e
          : o === null
          ? (o = Object.getOwnPropertyDescriptor(e, r))
          : o,
      a;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      i = Reflect.decorate(t, e, r, o);
    else
      for (var l = t.length - 1; l >= 0; l--)
        (a = t[l]) && (i = (s < 3 ? a(i) : s > 3 ? a(e, r, i) : a(e, r)) || i);
    return s > 3 && i && Object.defineProperty(e, r, i), i;
  },
  _ = class extends u {
    render() {
      return n`
      <wui-flex alignItems="center">
        <wui-shimmer width="40px" height="40px" rounded></wui-shimmer>
        <wui-flex flexDirection="column" gap="1">
          <wui-shimmer width="124px" height="16px" rounded></wui-shimmer>
          <wui-shimmer width="60px" height="14px" rounded></wui-shimmer>
        </wui-flex>
        <wui-shimmer width="24px" height="12px" rounded></wui-shimmer>
      </wui-flex>
    `;
    }
  };
_.styles = [D, W];
_ = M([d("wui-transaction-list-item-loader")], _);
var Y = m`
  :host {
    min-height: 100%;
  }

  .group-container[last-group='true'] {
    padding-bottom: ${({ spacing: t }) => t[3]};
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

  .emptyContainer {
    height: 100%;
  }
`;
var v = function (t, e, r, o) {
    var s = arguments.length,
      i =
        s < 3
          ? e
          : o === null
          ? (o = Object.getOwnPropertyDescriptor(e, r))
          : o,
      a;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      i = Reflect.decorate(t, e, r, o);
    else
      for (var l = t.length - 1; l >= 0; l--)
        (a = t[l]) && (i = (s < 3 ? a(i) : s > 3 ? a(e, r, i) : a(e, r)) || i);
    return s > 3 && i && Object.defineProperty(e, r, i), i;
  },
  V = "last-transaction",
  K = 7,
  g = class extends u {
    constructor() {
      super(),
        (this.unsubscribe = []),
        (this.paginationObserver = void 0),
        (this.page = "activity"),
        (this.caipAddress = I.state.activeCaipAddress),
        (this.transactionsByYear = p.state.transactionsByYear),
        (this.loading = p.state.loading),
        (this.empty = p.state.empty),
        (this.next = p.state.next),
        p.clearCursor(),
        this.unsubscribe.push(
          I.subscribeKey("activeCaipAddress", (e) => {
            e &&
              this.caipAddress !== e &&
              (p.resetTransactions(), p.fetchTransactions(e)),
              (this.caipAddress = e);
          }),
          I.subscribeKey("activeCaipNetwork", () => {
            this.updateTransactionView();
          }),
          p.subscribe((e) => {
            (this.transactionsByYear = e.transactionsByYear),
              (this.loading = e.loading),
              (this.empty = e.empty),
              (this.next = e.next);
          })
        );
    }
    firstUpdated() {
      this.updateTransactionView(), this.createPaginationObserver();
    }
    updated() {
      this.setPaginationObserver();
    }
    disconnectedCallback() {
      this.unsubscribe.forEach((e) => e());
    }
    render() {
      return n` ${this.empty ? null : this.templateTransactionsByYear()}
    ${this.loading ? this.templateLoading() : null}
    ${!this.loading && this.empty ? this.templateEmpty() : null}`;
    }
    updateTransactionView() {
      p.resetTransactions(),
        this.caipAddress &&
          p.fetchTransactions(O.getPlainAddress(this.caipAddress));
    }
    templateTransactionsByYear() {
      return Object.keys(this.transactionsByYear)
        .sort()
        .reverse()
        .map((r) => {
          let o = parseInt(r, 10),
            s = new Array(12)
              .fill(null)
              .map((i, a) => {
                let l = A.getTransactionGroupTitle(o, a),
                  w = this.transactionsByYear[o]?.[a];
                return { groupTitle: l, transactions: w };
              })
              .filter(({ transactions: i }) => i)
              .reverse();
          return s.map(({ groupTitle: i, transactions: a }, l) => {
            let w = l === s.length - 1;
            return a
              ? n`
          <wui-flex
            flexDirection="column"
            class="group-container"
            last-group="${w ? "true" : "false"}"
            data-testid="month-indexes"
          >
            <wui-flex
              alignItems="center"
              flexDirection="row"
              .padding=${["2", "3", "3", "3"]}
            >
              <wui-text variant="md-medium" color="secondary" data-testid="group-title">
                ${i}
              </wui-text>
            </wui-flex>
            <wui-flex flexDirection="column" gap="2">
              ${this.templateTransactions(a, w)}
            </wui-flex>
          </wui-flex>
        `
              : null;
          });
        });
    }
    templateRenderTransaction(e, r) {
      let {
        date: o,
        descriptions: s,
        direction: i,
        images: a,
        status: l,
        type: w,
        transfers: F,
        isAllNFT: G,
      } = this.getTransactionListItemProps(e);
      return n`
      <wui-transaction-list-item
        date=${o}
        .direction=${i}
        id=${r && this.next ? V : ""}
        status=${l}
        type=${w}
        .images=${a}
        .onlyDirectionIcon=${G || F.length === 1}
        .descriptions=${s}
      ></wui-transaction-list-item>
    `;
    }
    templateTransactions(e, r) {
      return e.map((o, s) => {
        let i = r && s === e.length - 1;
        return n`${this.templateRenderTransaction(o, i)}`;
      });
    }
    emptyStateActivity() {
      return n`<wui-flex
      class="emptyContainer"
      flexGrow="1"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      .padding=${["10", "5", "10", "5"]}
      gap="5"
      data-testid="empty-activity-state"
    >
      <wui-icon-box color="default" icon="wallet" size="xl"></wui-icon-box>
      <wui-flex flexDirection="column" alignItems="center" gap="2">
        <wui-text align="center" variant="lg-medium" color="primary">No Transactions yet</wui-text>
        <wui-text align="center" variant="lg-regular" color="secondary"
          >Start trading on dApps <br />
          to grow your wallet!</wui-text
        >
      </wui-flex>
    </wui-flex>`;
    }
    emptyStateAccount() {
      return n`<wui-flex
      class="contentContainer"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="4"
      data-testid="empty-account-state"
    >
      <wui-icon-box icon="swapHorizontal" size="lg" color="default"></wui-icon-box>
      <wui-flex
        class="textContent"
        gap="2"
        flexDirection="column"
        justifyContent="center"
        flexDirection="column"
      >
        <wui-text variant="md-regular" align="center" color="primary">No activity yet</wui-text>
        <wui-text variant="sm-regular" align="center" color="secondary"
          >Your next transactions will appear here</wui-text
        >
      </wui-flex>
      <wui-link @click=${this.onReceiveClick.bind(this)}>Trade</wui-link>
    </wui-flex>`;
    }
    templateEmpty() {
      return this.page === "account"
        ? n`${this.emptyStateAccount()}`
        : n`${this.emptyStateActivity()}`;
    }
    templateLoading() {
      return this.page === "activity"
        ? Array(K)
            .fill(
              n` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `
            )
            .map((e) => e)
        : null;
    }
    onReceiveClick() {
      L.push("WalletReceive");
    }
    createPaginationObserver() {
      let { projectId: e } = S.state;
      (this.paginationObserver = new IntersectionObserver(([r]) => {
        r?.isIntersecting &&
          !this.loading &&
          (p.fetchTransactions(O.getPlainAddress(this.caipAddress)),
          j.sendEvent({
            type: "track",
            event: "LOAD_MORE_TRANSACTIONS",
            properties: {
              address: O.getPlainAddress(this.caipAddress),
              projectId: e,
              cursor: this.next,
              isSmartAccount:
                E(I.state.activeChain) === T.ACCOUNT_TYPES.SMART_ACCOUNT,
            },
          }));
      }, {})),
        this.setPaginationObserver();
    }
    setPaginationObserver() {
      this.paginationObserver?.disconnect();
      let e = this.shadowRoot?.querySelector(`#${V}`);
      e && this.paginationObserver?.observe(e);
    }
    getTransactionListItemProps(e) {
      let r = k.formatDate(e?.metadata?.minedAt),
        o = A.mergeTransfers(e?.transfers),
        s = A.getTransactionDescriptions(e, o),
        i = o?.[0],
        a = !!i && o?.every((w) => !!w.nft_info),
        l = A.getTransactionImages(o);
      return {
        date: r,
        direction: i?.direction,
        descriptions: s,
        isAllNFT: a,
        images: l,
        status: e.metadata?.status,
        transfers: o,
        type: e.metadata?.operationType,
      };
    }
  };
g.styles = Y;
v([c()], g.prototype, "page", void 0);
v([$()], g.prototype, "caipAddress", void 0);
v([$()], g.prototype, "transactionsByYear", void 0);
v([$()], g.prototype, "loading", void 0);
v([$()], g.prototype, "empty", void 0);
v([$()], g.prototype, "next", void 0);
g = v([d("w3m-activity-list")], g);
