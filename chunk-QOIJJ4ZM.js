import { b as n } from "./chunk-ISXP6GOO.js";
import { c as f, k as u } from "./chunk-L4ZNINEC.js";
import { e as h, k as d } from "./chunk-ICDT4GZS.js";
import { j as a } from "./chunk-HK6N7TS4.js";
var g = f`
  :host {
    pointer-events: none;
  }

  :host > wui-flex {
    display: var(--w3m-tooltip-display);
    opacity: var(--w3m-tooltip-opacity);
    padding: 9px ${({ spacing: t }) => t[3]} 10px ${({ spacing: t }) => t[3]};
    border-radius: ${({ borderRadius: t }) => t[3]};
    color: ${({ tokens: t }) => t.theme.backgroundPrimary};
    position: absolute;
    top: var(--w3m-tooltip-top);
    left: var(--w3m-tooltip-left);
    transform: translate(calc(-50% + var(--w3m-tooltip-parent-width)), calc(-100% - 8px));
    max-width: calc(var(--apkt-modal-width) - ${({ spacing: t }) => t[5]});
    transition: opacity ${({ durations: t }) => t.lg}
      ${({ easings: t }) => t["ease-out-power-2"]};
    will-change: opacity;
    opacity: 0;
    animation-duration: ${({ durations: t }) => t.xl};
    animation-timing-function: ${({ easings: t }) => t["ease-out-power-2"]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  :host([data-variant='shade']) > wui-flex {
    background-color: ${({ tokens: t }) => t.theme.foregroundPrimary};
  }

  :host([data-variant='shade']) > wui-flex > wui-text {
    color: ${({ tokens: t }) => t.theme.textSecondary};
  }

  :host([data-variant='fill']) > wui-flex {
    background-color: ${({ tokens: t }) => t.theme.textPrimary};
    border: none;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
    color: ${({ tokens: t }) => t.theme.foregroundPrimary};
  }

  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
var s = function (t, o, i, p) {
    var l = arguments.length,
      e =
        l < 3
          ? o
          : p === null
          ? (p = Object.getOwnPropertyDescriptor(o, i))
          : p,
      m;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      e = Reflect.decorate(t, o, i, p);
    else
      for (var c = t.length - 1; c >= 0; c--)
        (m = t[c]) && (e = (l < 3 ? m(e) : l > 3 ? m(o, i, e) : m(o, i)) || e);
    return l > 3 && e && Object.defineProperty(o, i, e), e;
  },
  r = class extends d {
    constructor() {
      super(),
        (this.unsubscribe = []),
        (this.open = a.state.open),
        (this.message = a.state.message),
        (this.triggerRect = a.state.triggerRect),
        (this.variant = a.state.variant),
        this.unsubscribe.push(
          a.subscribe((o) => {
            (this.open = o.open),
              (this.message = o.message),
              (this.triggerRect = o.triggerRect),
              (this.variant = o.variant);
          })
        );
    }
    disconnectedCallback() {
      this.unsubscribe.forEach((o) => o());
    }
    render() {
      this.dataset.variant = this.variant;
      let o = this.triggerRect.top,
        i = this.triggerRect.left;
      return (
        (this.style.cssText = `
    --w3m-tooltip-top: ${o}px;
    --w3m-tooltip-left: ${i}px;
    --w3m-tooltip-parent-width: ${this.triggerRect.width / 2}px;
    --w3m-tooltip-display: ${this.open ? "flex" : "none"};
    --w3m-tooltip-opacity: ${this.open ? 1 : 0};
    `),
        h`<wui-flex>
      <wui-icon data-placement="top" size="inherit" name="cursor"></wui-icon>
      <wui-text color="primary" variant="sm-regular">${this.message}</wui-text>
    </wui-flex>`
      );
    }
  };
r.styles = [g];
s([n()], r.prototype, "open", void 0);
s([n()], r.prototype, "message", void 0);
s([n()], r.prototype, "triggerRect", void 0);
s([n()], r.prototype, "variant", void 0);
r = s([u("w3m-tooltip")], r);
