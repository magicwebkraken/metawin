import { a as n } from "./chunk-ISXP6GOO.js";
import { c as l, k as f } from "./chunk-L4ZNINEC.js";
import { e as m, k as p } from "./chunk-ICDT4GZS.js";
var c = l`
  :host {
    display: block;
    background: linear-gradient(
      90deg,
      ${({ tokens: e }) => e.theme.foregroundSecondary} 0%,
      ${({ tokens: e }) => e.theme.foregroundTertiary} 50%,
      ${({ tokens: e }) => e.theme.foregroundSecondary} 100%
    );
    background-size: 200% 100%;
    animation: shimmer 1s ease-in-out infinite;
    border-radius: ${({ borderRadius: e }) => e[2]};
  }

  :host([data-rounded='true']) {
    border-radius: ${({ borderRadius: e }) => e[16]};
  }

  @keyframes shimmer {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;
var s = function (e, o, i, d) {
    var h = arguments.length,
      t =
        h < 3
          ? o
          : d === null
          ? (d = Object.getOwnPropertyDescriptor(o, i))
          : d,
      a;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      t = Reflect.decorate(e, o, i, d);
    else
      for (var u = e.length - 1; u >= 0; u--)
        (a = e[u]) && (t = (h < 3 ? a(t) : h > 3 ? a(o, i, t) : a(o, i)) || t);
    return h > 3 && t && Object.defineProperty(o, i, t), t;
  },
  r = class extends p {
    constructor() {
      super(...arguments),
        (this.width = ""),
        (this.height = ""),
        (this.variant = "default"),
        (this.rounded = !1);
    }
    render() {
      return (
        (this.style.cssText = `
      width: ${this.width};
      height: ${this.height};
    `),
        (this.dataset.rounded = this.rounded ? "true" : "false"),
        m`<slot></slot>`
      );
    }
  };
r.styles = [c];
s([n()], r.prototype, "width", void 0);
s([n()], r.prototype, "height", void 0);
s([n()], r.prototype, "variant", void 0);
s([n({ type: Boolean })], r.prototype, "rounded", void 0);
r = s([f("wui-shimmer")], r);
