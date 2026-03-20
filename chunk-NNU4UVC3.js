import { a as r } from "./chunk-ISXP6GOO.js";
import { c as f, g as h, h as b, k as w } from "./chunk-L4ZNINEC.js";
import { e as c, k as d } from "./chunk-ICDT4GZS.js";
import { e as p } from "./chunk-2K64HG7Q.js";
var g = f`
  :host {
    width: 100%;
  }

  button {
    padding: ${({ spacing: e }) => e[3]};
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-radius: ${({ borderRadius: e }) => e[4]};
    background-color: transparent;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({ tokens: e }) => e.theme.foregroundSecondary};
    }
  }

  button:focus-visible:enabled {
    background-color: ${({ tokens: e }) => e.theme.foregroundSecondary};
    box-shadow: 0 0 0 4px ${({ tokens: e }) => e.core.foregroundAccent040};
  }

  button[data-clickable='false'] {
    pointer-events: none;
    background-color: transparent;
  }

  wui-image,
  wui-icon {
    width: ${({ spacing: e }) => e[10]};
    height: ${({ spacing: e }) => e[10]};
  }

  wui-image {
    border-radius: ${({ borderRadius: e }) => e[16]};
  }
`;
var i = function (e, n, a, l) {
    var u = arguments.length,
      o =
        u < 3
          ? n
          : l === null
          ? (l = Object.getOwnPropertyDescriptor(n, a))
          : l,
      m;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      o = Reflect.decorate(e, n, a, l);
    else
      for (var s = e.length - 1; s >= 0; s--)
        (m = e[s]) && (o = (u < 3 ? m(o) : u > 3 ? m(n, a, o) : m(n, a)) || o);
    return u > 3 && o && Object.defineProperty(n, a, o), o;
  },
  t = class extends d {
    constructor() {
      super(...arguments),
        (this.tokenName = ""),
        (this.tokenImageUrl = ""),
        (this.tokenValue = 0),
        (this.tokenAmount = "0.0"),
        (this.tokenCurrency = ""),
        (this.clickable = !1);
    }
    render() {
      return c`
      <button data-clickable=${String(this.clickable)}>
        <wui-flex gap="2" alignItems="center">
          ${this.visualTemplate()}
          <wui-flex flexDirection="column" justifyContent="space-between" gap="1">
            <wui-text variant="md-regular" color="primary">${
              this.tokenName
            }</wui-text>
            <wui-text variant="sm-regular-mono" color="secondary">
              ${p.formatNumberToLocalString(this.tokenAmount, 4)} ${
        this.tokenCurrency
      }
            </wui-text>
          </wui-flex>
        </wui-flex>
        <wui-flex
          flexDirection="column"
          justifyContent="space-between"
          gap="1"
          alignItems="flex-end"
        >
          <wui-text variant="md-regular-mono" color="primary"
            >$${this.tokenValue.toFixed(2)}</wui-text
          >
          <wui-text variant="sm-regular-mono" color="secondary">
            ${p.formatNumberToLocalString(this.tokenAmount, 4)}
          </wui-text>
        </wui-flex>
      </button>
    `;
    }
    visualTemplate() {
      return this.tokenName && this.tokenImageUrl
        ? c`<wui-image alt=${this.tokenName} src=${this.tokenImageUrl}></wui-image>`
        : c`<wui-icon name="coinPlaceholder" color="default"></wui-icon>`;
    }
  };
t.styles = [h, b, g];
i([r()], t.prototype, "tokenName", void 0);
i([r()], t.prototype, "tokenImageUrl", void 0);
i([r({ type: Number })], t.prototype, "tokenValue", void 0);
i([r()], t.prototype, "tokenAmount", void 0);
i([r()], t.prototype, "tokenCurrency", void 0);
i([r({ type: Boolean })], t.prototype, "clickable", void 0);
t = i([w("wui-list-token")], t);
