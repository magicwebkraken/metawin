import { a as r } from "./chunk-ISXP6GOO.js";
import { c as d, g as v, k as u } from "./chunk-L4ZNINEC.js";
import { e as m, f as a, k as g } from "./chunk-ICDT4GZS.js";
var f = a`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`;
var w = a`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`;
var k = a`
  <svg fill="none" viewBox="0 0 36 40">
    <path
      d="M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z"
    />
  </svg>
`;
var y = d`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  :host([data-round='true']) {
    background: ${({ tokens: t }) => t.theme.foregroundPrimary};
    border-radius: 100%;
    outline: 1px solid ${({ tokens: t }) => t.core.glass010};
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  svg > path {
    stroke: var(--local-stroke);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: ${({ tokens: t }) => t.theme.foregroundPrimary};
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`;
var s = function (t, o, l, n) {
    var p = arguments.length,
      i =
        p < 3
          ? o
          : n === null
          ? (n = Object.getOwnPropertyDescriptor(o, l))
          : n,
      h;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      i = Reflect.decorate(t, o, l, n);
    else
      for (var c = t.length - 1; c >= 0; c--)
        (h = t[c]) && (i = (p < 3 ? h(i) : p > 3 ? h(o, l, i) : h(o, l)) || i);
    return p > 3 && i && Object.defineProperty(o, l, i), i;
  },
  e = class extends g {
    constructor() {
      super(...arguments),
        (this.size = "md"),
        (this.name = "uknown"),
        (this.networkImagesBySize = { sm: k, md: w, lg: f }),
        (this.selected = !1),
        (this.round = !1);
    }
    render() {
      let o = { sm: "4", md: "6", lg: "10" };
      return (
        this.round
          ? ((this.dataset.round = "true"),
            (this.style.cssText = `
      --local-width: var(--apkt-spacing-10);
      --local-height: var(--apkt-spacing-10);
      --local-icon-size: var(--apkt-spacing-4);
    `))
          : (this.style.cssText = `

      --local-path: var(--apkt-path-network-${this.size});
      --local-width:  var(--apkt-width-network-${this.size});
      --local-height:  var(--apkt-height-network-${this.size});
      --local-icon-size:  var(--apkt-spacing-${o[this.size]});
    `),
        m`${this.templateVisual()} ${this.svgTemplate()} `
      );
    }
    svgTemplate() {
      return this.round ? null : this.networkImagesBySize[this.size];
    }
    templateVisual() {
      return this.imageSrc
        ? m`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`
        : m`<wui-icon size="inherit" color="default" name="networkPlaceholder"></wui-icon>`;
    }
  };
e.styles = [v, y];
s([r()], e.prototype, "size", void 0);
s([r()], e.prototype, "name", void 0);
s([r({ type: Object })], e.prototype, "networkImagesBySize", void 0);
s([r()], e.prototype, "imageSrc", void 0);
s([r({ type: Boolean })], e.prototype, "selected", void 0);
s([r({ type: Boolean })], e.prototype, "round", void 0);
e = s([u("wui-network-image")], e);
export { w as a };
