import { a as d } from "./chunk-ISXP6GOO.js";
import { c as u, g as m, k as f } from "./chunk-L4ZNINEC.js";
import { e as s, k as c } from "./chunk-ICDT4GZS.js";
var h = u`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: ${({ tokens: t }) => t.theme.borderPrimary};
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 8px;
    background-color: ${({ tokens: t }) => t.theme.backgroundPrimary};
    transition: background-color ${({ durations: t }) => t.lg}
      ${({ easings: t }) => t["ease-out-power-2"]};
    will-change: background-color;
  }
`;
var x = function (t, r, o, i) {
    var n = arguments.length,
      e =
        n < 3
          ? r
          : i === null
          ? (i = Object.getOwnPropertyDescriptor(r, o))
          : i,
      l;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      e = Reflect.decorate(t, r, o, i);
    else
      for (var a = t.length - 1; a >= 0; a--)
        (l = t[a]) && (e = (n < 3 ? l(e) : n > 3 ? l(r, o, e) : l(r, o)) || e);
    return n > 3 && e && Object.defineProperty(r, o, e), e;
  },
  p = class extends c {
    constructor() {
      super(...arguments), (this.text = "");
    }
    render() {
      return s`${this.template()}`;
    }
    template() {
      return this.text
        ? s`<wui-text variant="md-regular" color="secondary">${this.text}</wui-text>`
        : null;
    }
  };
p.styles = [m, h];
x([d()], p.prototype, "text", void 0);
p = x([f("wui-separator")], p);
