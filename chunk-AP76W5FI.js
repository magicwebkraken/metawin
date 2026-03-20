import { a as o } from "./chunk-ISXP6GOO.js";
import { c as m, g as u, k as f } from "./chunk-L4ZNINEC.js";
import { e as l, k as c } from "./chunk-ICDT4GZS.js";
var w = m`
  :host {
    position: relative;
    background-color: ${({ tokens: e }) => e.theme.foregroundTertiary};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host([data-image='true']) {
    background-color: transparent;
  }

  :host > wui-flex {
    overflow: hidden;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host([data-size='sm']) {
    width: 32px;
    height: 32px;
  }

  :host([data-size='md']) {
    width: 40px;
    height: 40px;
  }

  :host([data-size='lg']) {
    width: 56px;
    height: 56px;
  }

  :host([name='Extension'])::after {
    border: 1px solid ${({ colors: e }) => e.accent010};
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid ${({ colors: e }) => e.accent010};
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 32px;
    height: 32px;
  }

  wui-icon[data-parent-size='md'] {
    width: 40px;
    height: 40px;
  }

  :host > wui-icon-box {
    position: absolute;
    overflow: hidden;
    right: -1px;
    bottom: -2px;
    z-index: 1;
    border: 2px solid ${({ tokens: e }) => e.theme.backgroundPrimary};
    padding: 1px;
  }
`;
var a = function (e, t, s, n) {
    var d = arguments.length,
      r =
        d < 3
          ? t
          : n === null
          ? (n = Object.getOwnPropertyDescriptor(t, s))
          : n,
      h;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      r = Reflect.decorate(e, t, s, n);
    else
      for (var p = e.length - 1; p >= 0; p--)
        (h = e[p]) && (r = (d < 3 ? h(r) : d > 3 ? h(t, s, r) : h(t, s)) || r);
    return d > 3 && r && Object.defineProperty(t, s, r), r;
  },
  i = class extends c {
    constructor() {
      super(...arguments),
        (this.size = "md"),
        (this.name = ""),
        (this.installed = !1),
        (this.badgeSize = "xs");
    }
    render() {
      let t = "1";
      return (
        this.size === "lg"
          ? (t = "4")
          : this.size === "md"
          ? (t = "2")
          : this.size === "sm" && (t = "1"),
        (this.style.cssText = `
       --local-border-radius: var(--apkt-borderRadius-${t});
   `),
        (this.dataset.size = this.size),
        this.imageSrc && (this.dataset.image = "true"),
        this.walletIcon && (this.dataset.walletIcon = this.walletIcon),
        l`
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
    `
      );
    }
    templateVisual() {
      return this.imageSrc
        ? l`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`
        : this.walletIcon
        ? l`<wui-icon size="md" color="default" name=${this.walletIcon}></wui-icon>`
        : l`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="wallet"
    ></wui-icon>`;
    }
  };
i.styles = [u, w];
a([o()], i.prototype, "size", void 0);
a([o()], i.prototype, "name", void 0);
a([o()], i.prototype, "imageSrc", void 0);
a([o()], i.prototype, "walletIcon", void 0);
a([o({ type: Boolean })], i.prototype, "installed", void 0);
a([o()], i.prototype, "badgeSize", void 0);
i = a([f("wui-wallet-image")], i);
