import { a as u } from "./chunk-ISXP6GOO.js";
import { c as p, g as c, k as f } from "./chunk-L4ZNINEC.js";
import { e as h, k as l } from "./chunk-ICDT4GZS.js";
var m = p`
  :host {
    display: block;
    width: 100px;
    height: 100px;
  }

  svg {
    width: 100px;
    height: 100px;
  }

  rect {
    fill: none;
    stroke: ${(o) => o.colors.accent100};
    stroke-width: 3px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;
var x = function (o, e, s, r) {
    var i = arguments.length,
      t =
        i < 3
          ? e
          : r === null
          ? (r = Object.getOwnPropertyDescriptor(e, s))
          : r,
      a;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      t = Reflect.decorate(o, e, s, r);
    else
      for (var d = o.length - 1; d >= 0; d--)
        (a = o[d]) && (t = (i < 3 ? a(t) : i > 3 ? a(e, s, t) : a(e, s)) || t);
    return i > 3 && t && Object.defineProperty(e, s, t), t;
  },
  n = class extends l {
    constructor() {
      super(...arguments), (this.radius = 36);
    }
    render() {
      return this.svgLoaderTemplate();
    }
    svgLoaderTemplate() {
      let e = this.radius > 50 ? 50 : this.radius,
        r = 36 - e,
        i = 116 + r,
        t = 245 + r,
        a = 360 + r * 1.75;
      return h`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${e}
          stroke-dasharray="${i} ${t}"
          stroke-dashoffset=${a}
        />
      </svg>
    `;
    }
  };
n.styles = [c, m];
x([u({ type: Number })], n.prototype, "radius", void 0);
n = x([f("wui-loading-thumbnail")], n);
