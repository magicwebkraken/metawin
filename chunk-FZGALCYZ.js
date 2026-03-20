import { a as P } from "./chunk-U2G6ATPK.js";
import { a as w } from "./chunk-ISXP6GOO.js";
import { c as W, g as I, k as M } from "./chunk-L4ZNINEC.js";
import { e as x, f as v, k as _ } from "./chunk-ICDT4GZS.js";
import { k as q } from "./chunk-VNDKUXGB.js";
var N = q(P(), 1);
var D = 0.1,
  O = 2.5,
  $ = 7;
function k(t, n, f) {
  return t === n ? !1 : (t - n < 0 ? n - t : t - n) <= f + D;
}
function B(t, n) {
  let f = Array.prototype.slice.call(
      N.default.create(t, { errorCorrectionLevel: n }).modules.data,
      0
    ),
    l = Math.sqrt(f.length);
  return f.reduce(
    (h, d, p) => (p % l === 0 ? h.push([d]) : h[h.length - 1].push(d)) && h,
    []
  );
}
var Q = {
  generate({
    uri: t,
    size: n,
    logoSize: f,
    padding: l = 8,
    dotColor: h = "var(--apkt-colors-black)",
  }) {
    let p = [],
      u = B(t, "Q"),
      s = (n - 2 * l) / u.length,
      E = [
        { x: 0, y: 0 },
        { x: 1, y: 0 },
        { x: 0, y: 1 },
      ];
    E.forEach(({ x: i, y: e }) => {
      let a = (u.length - $) * s * i + l,
        r = (u.length - $) * s * e + l,
        c = 0.45;
      for (let o = 0; o < E.length; o += 1) {
        let m = s * ($ - o * 2);
        p.push(v`
            <rect
              fill=${
                o === 2
                  ? "var(--apkt-colors-black)"
                  : "var(--apkt-colors-white)"
              }
              width=${o === 0 ? m - 10 : m}
              rx= ${o === 0 ? (m - 10) * c : m * c}
              ry= ${o === 0 ? (m - 10) * c : m * c}
              stroke=${h}
              stroke-width=${o === 0 ? 10 : 0}
              height=${o === 0 ? m - 10 : m}
              x= ${o === 0 ? r + s * o + 10 / 2 : r + s * o}
              y= ${o === 0 ? a + s * o + 10 / 2 : a + s * o}
            />
          `);
      }
    });
    let C = Math.floor((f + 25) / s),
      R = u.length / 2 - C / 2,
      S = u.length / 2 + C / 2 - 1,
      z = [];
    u.forEach((i, e) => {
      i.forEach((a, r) => {
        if (
          u[e][r] &&
          !(
            (e < $ && r < $) ||
            (e > u.length - ($ + 1) && r < $) ||
            (e < $ && r > u.length - ($ + 1))
          ) &&
          !(e > R && e < S && r > R && r < S)
        ) {
          let c = e * s + s / 2 + l,
            o = r * s + s / 2 + l;
          z.push([c, o]);
        }
      });
    });
    let b = {};
    return (
      z.forEach(([i, e]) => {
        b[i] ? b[i]?.push(e) : (b[i] = [e]);
      }),
      Object.entries(b)
        .map(([i, e]) => {
          let a = e.filter((r) => e.every((c) => !k(r, c, s)));
          return [Number(i), a];
        })
        .forEach(([i, e]) => {
          e.forEach((a) => {
            p.push(v`<circle cx=${i} cy=${a} fill=${h} r=${s / O} />`);
          });
        }),
      Object.entries(b)
        .filter(([i, e]) => e.length > 1)
        .map(([i, e]) => {
          let a = e.filter((r) => e.some((c) => k(r, c, s)));
          return [Number(i), a];
        })
        .map(([i, e]) => {
          e.sort((r, c) => (r < c ? -1 : 1));
          let a = [];
          for (let r of e) {
            let c = a.find((o) => o.some((m) => k(r, m, s)));
            c ? c.push(r) : a.push([r]);
          }
          return [i, a.map((r) => [r[0], r[r.length - 1]])];
        })
        .forEach(([i, e]) => {
          e.forEach(([a, r]) => {
            p.push(v`
              <line
                x1=${i}
                x2=${i}
                y1=${a}
                y2=${r}
                stroke=${h}
                stroke-width=${s / (O / 2)}
                stroke-linecap="round"
              />
            `);
          });
        }),
      p
    );
  },
};
var A = W`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: 100%;
    height: 100%;
    background-color: ${({ colors: t }) => t.white};
    border: 1px solid ${({ tokens: t }) => t.theme.borderPrimary};
  }

  :host {
    border-radius: ${({ borderRadius: t }) => t[4]};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :host([data-clear='true']) > wui-icon {
    display: none;
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    background-color: ${({ tokens: t }) => t.theme.backgroundPrimary};
    box-shadow: inset 0 0 0 4px ${({ tokens: t }) => t.theme.backgroundPrimary};
    border-radius: ${({ borderRadius: t }) => t[6]};
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: ${({ borderRadius: t }) => t[2]};
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: #3396ff !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }

  wui-icon > svg {
    width: inherit;
    height: inherit;
  }
`;
var y = function (t, n, f, l) {
    var h = arguments.length,
      d =
        h < 3
          ? n
          : l === null
          ? (l = Object.getOwnPropertyDescriptor(n, f))
          : l,
      p;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      d = Reflect.decorate(t, n, f, l);
    else
      for (var u = t.length - 1; u >= 0; u--)
        (p = t[u]) && (d = (h < 3 ? p(d) : h > 3 ? p(n, f, d) : p(n, f)) || d);
    return h > 3 && d && Object.defineProperty(n, f, d), d;
  },
  g = class extends _ {
    constructor() {
      super(...arguments),
        (this.uri = ""),
        (this.size = 500),
        (this.theme = "dark"),
        (this.imageSrc = void 0),
        (this.alt = void 0),
        (this.arenaClear = void 0),
        (this.farcaster = void 0);
    }
    render() {
      return (
        (this.dataset.theme = this.theme),
        (this.dataset.clear = String(this.arenaClear)),
        x`<wui-flex
      alignItems="center"
      justifyContent="center"
      class="wui-qr-code"
      direction="column"
      gap="4"
      width="100%"
      style="height: 100%"
    >
      ${this.templateVisual()} ${this.templateSvg()}
    </wui-flex>`
      );
    }
    templateSvg() {
      return v`
      <svg viewBox="0 0 ${this.size} ${this.size}" width="100%" height="100%">
        ${Q.generate({
          uri: this.uri,
          size: this.size,
          logoSize: this.arenaClear ? 0 : this.size / 4,
        })}
      </svg>
    `;
    }
    templateVisual() {
      return this.imageSrc
        ? x`<wui-image src=${this.imageSrc} alt=${
            this.alt ?? "logo"
          }></wui-image>`
        : this.farcaster
        ? x`<wui-icon
        class="farcaster"
        size="inherit"
        color="inherit"
        name="farcaster"
      ></wui-icon>`
        : x`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`;
    }
  };
g.styles = [I, A];
y([w()], g.prototype, "uri", void 0);
y([w({ type: Number })], g.prototype, "size", void 0);
y([w()], g.prototype, "theme", void 0);
y([w()], g.prototype, "imageSrc", void 0);
y([w()], g.prototype, "alt", void 0);
y([w({ type: Boolean })], g.prototype, "arenaClear", void 0);
y([w({ type: Boolean })], g.prototype, "farcaster", void 0);
g = y([M("wui-qr-code")], g);
