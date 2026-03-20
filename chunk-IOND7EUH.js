import { a as g, b as v } from "./chunk-ISXP6GOO.js";
import { k as b } from "./chunk-L4ZNINEC.js";
import { b as a, e as c, k as m } from "./chunk-ICDT4GZS.js";
import { j as r } from "./chunk-HK6N7TS4.js";
import { J as f, s as u } from "./chunk-U7GUEFJZ.js";
var w = a`
  :host {
    width: 100%;
    display: block;
  }
`;
var d = function (l, e, t, o) {
    var n = arguments.length,
      i =
        n < 3
          ? e
          : o === null
          ? (o = Object.getOwnPropertyDescriptor(e, t))
          : o,
      h;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      i = Reflect.decorate(l, e, t, o);
    else
      for (var p = l.length - 1; p >= 0; p--)
        (h = l[p]) && (i = (n < 3 ? h(i) : n > 3 ? h(e, t, i) : h(e, t)) || i);
    return n > 3 && i && Object.defineProperty(e, t, i), i;
  },
  s = class extends m {
    constructor() {
      super(),
        (this.unsubscribe = []),
        (this.text = ""),
        (this.open = r.state.open),
        this.unsubscribe.push(
          u.subscribeKey("view", () => {
            r.hide();
          }),
          f.subscribeKey("open", (e) => {
            e || r.hide();
          }),
          r.subscribeKey("open", (e) => {
            this.open = e;
          })
        );
    }
    disconnectedCallback() {
      this.unsubscribe.forEach((e) => e()), r.hide();
    }
    render() {
      return c`
      <div
        @pointermove=${this.onMouseEnter.bind(this)}
        @pointerleave=${this.onMouseLeave.bind(this)}
      >
        ${this.renderChildren()}
      </div>
    `;
    }
    renderChildren() {
      return c`<slot></slot> `;
    }
    onMouseEnter() {
      let e = this.getBoundingClientRect();
      if (!this.open) {
        let t = document.querySelector("w3m-modal"),
          o = { width: e.width, height: e.height, left: e.left, top: e.top };
        if (t) {
          let n = t.getBoundingClientRect();
          (o.left = e.left - (window.innerWidth - n.width) / 2),
            (o.top = e.top - (window.innerHeight - n.height) / 2);
        }
        r.showTooltip({ message: this.text, triggerRect: o, variant: "shade" });
      }
    }
    onMouseLeave(e) {
      this.contains(e.relatedTarget) || r.hide();
    }
  };
s.styles = [w];
d([g()], s.prototype, "text", void 0);
d([v()], s.prototype, "open", void 0);
s = d([b("w3m-tooltip-trigger")], s);
