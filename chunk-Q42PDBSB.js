import "./chunk-FZGALCYZ.js";
import "./chunk-U2G6ATPK.js";
import "./chunk-PMNBX4ZJ.js";
import { a as I } from "./chunk-NZR2LZWU.js";
import "./chunk-7TZWJ67Q.js";
import { a as x, b } from "./chunk-ISXP6GOO.js";
import { c as h, g as R, h as A, i as S, k as f } from "./chunk-L4ZNINEC.js";
import { e as l, k as w } from "./chunk-ICDT4GZS.js";
import "./chunk-HK6N7TS4.js";
import "./chunk-TXWSAHNN.js";
import "./chunk-H4BANHQJ.js";
import "./chunk-IV5FR2YO.js";
import "./chunk-TSLWMKS5.js";
import {
  H as c,
  e as v,
  f as C,
  k as u,
  p as d,
  s as $,
  t as k,
  w as N,
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
import "./chunk-VNDKUXGB.js";
var E = h`
  button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${({ spacing: e }) => e[4]};
    background-color: ${({ tokens: e }) => e.theme.foregroundPrimary};
    border-radius: ${({ borderRadius: e }) => e[3]};
    border: none;
    padding: ${({ spacing: e }) => e[3]};
    transition: background-color ${({ durations: e }) => e.lg}
      ${({ easings: e }) => e["ease-out-power-2"]};
    will-change: background-color;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  button:hover:enabled,
  button:active:enabled {
    background-color: ${({ tokens: e }) => e.theme.foregroundSecondary};
  }

  wui-text {
    flex: 1;
    color: ${({ tokens: e }) => e.theme.textSecondary};
  }

  wui-flex {
    width: auto;
    display: flex;
    align-items: center;
    gap: ${({ spacing: e }) => e["01"]};
  }

  wui-icon {
    color: ${({ tokens: e }) => e.theme.iconDefault};
  }

  .network-icon {
    position: relative;
    width: 20px;
    height: 20px;
    border-radius: ${({ borderRadius: e }) => e[4]};
    overflow: hidden;
    margin-left: -8px;
  }

  .network-icon:first-child {
    margin-left: 0px;
  }

  .network-icon:after {
    position: absolute;
    inset: 0;
    content: '';
    display: block;
    height: 100%;
    width: 100%;
    border-radius: ${({ borderRadius: e }) => e[4]};
    box-shadow: inset 0 0 0 1px ${({ tokens: e }) => e.core.glass010};
  }
`;
var y = function (e, t, r, i) {
    var n = arguments.length,
      o =
        n < 3
          ? t
          : i === null
          ? (i = Object.getOwnPropertyDescriptor(t, r))
          : i,
      s;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      o = Reflect.decorate(e, t, r, i);
    else
      for (var a = e.length - 1; a >= 0; a--)
        (s = e[a]) && (o = (n < 3 ? s(o) : n > 3 ? s(t, r, o) : s(t, r)) || o);
    return n > 3 && o && Object.defineProperty(t, r, o), o;
  },
  p = class extends w {
    constructor() {
      super(...arguments), (this.networkImages = [""]), (this.text = "");
    }
    render() {
      return l`
      <button>
        <wui-text variant="md-regular" color="inherit">${this.text}</wui-text>
        <wui-flex>
          ${this.networksTemplate()}
          <wui-icon name="chevronRight" size="sm" color="inherit"></wui-icon>
        </wui-flex>
      </button>
    `;
    }
    networksTemplate() {
      let t = this.networkImages.slice(0, 5);
      return l` <wui-flex class="networks">
      ${t?.map(
        (r) =>
          l` <wui-flex class="network-icon"> <wui-image src=${r}></wui-image> </wui-flex>`
      )}
    </wui-flex>`;
    }
  };
p.styles = [R, A, E];
y([x({ type: Array })], p.prototype, "networkImages", void 0);
y([x()], p.prototype, "text", void 0);
p = y([f("wui-compatible-network")], p);
var T = h`
  wui-compatible-network {
    margin-top: ${({ spacing: e }) => e[4]};
    width: 100%;
  }

  wui-qr-code {
    width: unset !important;
    height: unset !important;
  }

  wui-icon {
    align-items: normal;
  }
`;
var g = function (e, t, r, i) {
    var n = arguments.length,
      o =
        n < 3
          ? t
          : i === null
          ? (i = Object.getOwnPropertyDescriptor(t, r))
          : i,
      s;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      o = Reflect.decorate(e, t, r, i);
    else
      for (var a = e.length - 1; a >= 0; a--)
        (s = e[a]) && (o = (n < 3 ? s(o) : n > 3 ? s(t, r, o) : s(t, r)) || o);
    return n > 3 && o && Object.defineProperty(t, r, o), o;
  },
  m = class extends w {
    constructor() {
      super(),
        (this.unsubscribe = []),
        (this.address = c.getAccountData()?.address),
        (this.profileName = c.getAccountData()?.profileName),
        (this.network = c.state.activeCaipNetwork),
        this.unsubscribe.push(
          c.subscribeChainProp("accountState", (t) => {
            t
              ? ((this.address = t.address), (this.profileName = t.profileName))
              : u.showError("Account not found");
          }),
          c.subscribeKey("activeCaipNetwork", (t) => {
            t?.id && (this.network = t);
          })
        );
    }
    disconnectedCallback() {
      this.unsubscribe.forEach((t) => t());
    }
    render() {
      if (!this.address)
        throw new Error("w3m-wallet-receive-view: No account provided");
      let t = d.getNetworkImage(this.network);
      return l` <wui-flex
      flexDirection="column"
      .padding=${["0", "4", "4", "4"]}
      alignItems="center"
    >
      <wui-chip-button
        data-testid="receive-address-copy-button"
        @click=${this.onCopyClick.bind(this)}
        text=${S.getTruncateString({
          string: this.profileName || this.address || "",
          charsStart: this.profileName ? 18 : 4,
          charsEnd: this.profileName ? 0 : 4,
          truncate: this.profileName ? "end" : "middle",
        })}
        icon="copy"
        size="sm"
        imageSrc=${t || ""}
        variant="gray"
      ></wui-chip-button>
      <wui-flex
        flexDirection="column"
        .padding=${["4", "0", "0", "0"]}
        alignItems="center"
        gap="4"
      >
        <wui-qr-code
          size=${232}
          theme=${k.state.themeMode}
          uri=${this.address}
          ?arenaClear=${!0}
          color=${I(k.state.themeVariables["--w3m-qr-color"])}
          data-testid="wui-qr-code"
        ></wui-qr-code>
        <wui-text variant="lg-regular" color="primary" align="center">
          Copy your address or scan this QR code
        </wui-text>
        <wui-button @click=${this.onCopyClick.bind(
          this
        )} size="sm" variant="neutral-secondary">
          <wui-icon slot="iconLeft" size="sm" color="inherit" name="copy"></wui-icon>
          <wui-text variant="md-regular" color="inherit">Copy address</wui-text>
        </wui-button>
      </wui-flex>
      ${this.networkTemplate()}
    </wui-flex>`;
    }
    networkTemplate() {
      let t = c.getAllRequestedCaipNetworks(),
        r = c.checkIfSmartAccountEnabled(),
        i = c.state.activeCaipNetwork,
        n = t.filter((a) => a?.chainNamespace === i?.chainNamespace);
      if (N(i?.chainNamespace) === C.ACCOUNT_TYPES.SMART_ACCOUNT && r)
        return i
          ? l`<wui-compatible-network
        @click=${this.onReceiveClick.bind(this)}
        text="Only receive assets on this network"
        .networkImages=${[d.getNetworkImage(i) ?? ""]}
      ></wui-compatible-network>`
          : null;
      let s = n
        ?.filter((a) => a?.assets?.imageId)
        ?.slice(0, 5)
        .map(d.getNetworkImage)
        .filter(Boolean);
      return l`<wui-compatible-network
      @click=${this.onReceiveClick.bind(this)}
      text="Only receive assets on these networks"
      .networkImages=${s}
    ></wui-compatible-network>`;
    }
    onReceiveClick() {
      $.push("WalletCompatibleNetworks");
    }
    onCopyClick() {
      try {
        this.address &&
          (v.copyToClopboard(this.address), u.showSuccess("Address copied"));
      } catch {
        u.showError("Failed to copy");
      }
    }
  };
m.styles = T;
g([b()], m.prototype, "address", void 0);
g([b()], m.prototype, "profileName", void 0);
g([b()], m.prototype, "network", void 0);
m = g([f("w3m-wallet-receive-view")], m);
export { m as W3mWalletReceiveView };
