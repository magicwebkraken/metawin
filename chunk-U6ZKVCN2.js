import { a as p } from "./chunk-NZR2LZWU.js";
import { a as o } from "./chunk-ISXP6GOO.js";
import { c as f, g as h, h as g, k as b } from "./chunk-L4ZNINEC.js";
import { e as l, k as m } from "./chunk-ICDT4GZS.js";
var y = f`
  :host {
    width: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({ spacing: e }) => e[3]};
    width: 100%;
    background-color: ${({ tokens: e }) => e.theme.backgroundPrimary};
    border-radius: ${({ borderRadius: e }) => e[4]};
    transition:
      background-color ${({ durations: e }) => e.lg}
        ${({ easings: e }) => e["ease-out-power-2"]},
      scale ${({ durations: e }) => e.lg} ${({ easings: e }) =>
  e["ease-out-power-2"]};
    will-change: background-color, scale;
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-image {
    color: ${({ tokens: e }) => e.theme.textPrimary};
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({ tokens: e }) => e.theme.foregroundPrimary};
    }
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
var i = function (e, n, a, s) {
    var d = arguments.length,
      r =
        d < 3
          ? n
          : s === null
          ? (s = Object.getOwnPropertyDescriptor(n, a))
          : s,
      u;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      r = Reflect.decorate(e, n, a, s);
    else
      for (var c = e.length - 1; c >= 0; c--)
        (u = e[c]) && (r = (d < 3 ? u(r) : d > 3 ? u(n, a, r) : u(n, a)) || r);
    return d > 3 && r && Object.defineProperty(n, a, r), r;
  },
  t = class extends m {
    constructor() {
      super(...arguments),
        (this.imageSrc = "google"),
        (this.loading = !1),
        (this.disabled = !1),
        (this.rightIcon = !0),
        (this.rounded = !1),
        (this.fullSize = !1);
    }
    render() {
      return (
        (this.dataset.rounded = this.rounded ? "true" : "false"),
        l`
      <button
        ?disabled=${this.loading ? !0 : !!this.disabled}
        data-loading=${this.loading}
        tabindex=${p(this.tabIdx)}
      >
        <wui-flex gap="2" alignItems="center">
          ${this.templateLeftIcon()}
          <wui-flex gap="1">
            <slot></slot>
          </wui-flex>
        </wui-flex>
        ${this.templateRightIcon()}
      </button>
    `
      );
    }
    templateLeftIcon() {
      return this.icon
        ? l`<wui-image
        icon=${this.icon}
        iconColor=${p(this.iconColor)}
        ?boxed=${!0}
        ?rounded=${this.rounded}
      ></wui-image>`
        : l`<wui-image
      ?boxed=${!0}
      ?rounded=${this.rounded}
      ?fullSize=${this.fullSize}
      src=${this.imageSrc}
    ></wui-image>`;
    }
    templateRightIcon() {
      return this.rightIcon
        ? this.loading
          ? l`<wui-loading-spinner size="md" color="accent-primary"></wui-loading-spinner>`
          : l`<wui-icon name="chevronRight" size="lg" color="default"></wui-icon>`
        : null;
    }
  };
t.styles = [h, g, y];
i([o()], t.prototype, "imageSrc", void 0);
i([o()], t.prototype, "icon", void 0);
i([o()], t.prototype, "iconColor", void 0);
i([o({ type: Boolean })], t.prototype, "loading", void 0);
i([o()], t.prototype, "tabIdx", void 0);
i([o({ type: Boolean })], t.prototype, "disabled", void 0);
i([o({ type: Boolean })], t.prototype, "rightIcon", void 0);
i([o({ type: Boolean })], t.prototype, "rounded", void 0);
i([o({ type: Boolean })], t.prototype, "fullSize", void 0);
t = i([b("wui-list-item")], t);
