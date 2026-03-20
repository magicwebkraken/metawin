import { a as y } from "./chunk-NZR2LZWU.js";
import { a as i } from "./chunk-ISXP6GOO.js";
import { c as h, g as b, h as f, k as m } from "./chunk-L4ZNINEC.js";
import { e as p, k as l } from "./chunk-ICDT4GZS.js";
var v = h`
  :host {
    position: relative;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    padding: ${({ spacing: t }) => t[1]};
  }

  /* -- Colors --------------------------------------------------- */
  button[data-type='accent'] wui-icon {
    color: ${({ tokens: t }) => t.core.iconAccentPrimary};
  }

  button[data-type='neutral'][data-variant='primary'] wui-icon {
    color: ${({ tokens: t }) => t.theme.iconInverse};
  }

  button[data-type='neutral'][data-variant='secondary'] wui-icon {
    color: ${({ tokens: t }) => t.theme.iconDefault};
  }

  button[data-type='success'] wui-icon {
    color: ${({ tokens: t }) => t.core.iconSuccess};
  }

  button[data-type='error'] wui-icon {
    color: ${({ tokens: t }) => t.core.iconError};
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='xs'] {
    width: 16px;
    height: 16px;

    border-radius: ${({ borderRadius: t }) => t[1]};
  }

  button[data-size='sm'] {
    width: 20px;
    height: 20px;
    border-radius: ${({ borderRadius: t }) => t[1]};
  }

  button[data-size='md'] {
    width: 24px;
    height: 24px;
    border-radius: ${({ borderRadius: t }) => t[2]};
  }

  button[data-size='lg'] {
    width: 28px;
    height: 28px;
    border-radius: ${({ borderRadius: t }) => t[2]};
  }

  button[data-size='xs'] wui-icon {
    width: 8px;
    height: 8px;
  }

  button[data-size='sm'] wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-size='md'] wui-icon {
    width: 16px;
    height: 16px;
  }

  button[data-size='lg'] wui-icon {
    width: 20px;
    height: 20px;
  }

  /* -- Hover --------------------------------------------------- */
  @media (hover: hover) {
    button[data-type='accent']:hover:enabled {
      background-color: ${({ tokens: t }) => t.core.foregroundAccent010};
    }

    button[data-variant='primary'][data-type='neutral']:hover:enabled {
      background-color: ${({ tokens: t }) => t.theme.foregroundSecondary};
    }

    button[data-variant='secondary'][data-type='neutral']:hover:enabled {
      background-color: ${({ tokens: t }) => t.theme.foregroundSecondary};
    }

    button[data-type='success']:hover:enabled {
      background-color: ${({ tokens: t }) => t.core.backgroundSuccess};
    }

    button[data-type='error']:hover:enabled {
      background-color: ${({ tokens: t }) => t.core.backgroundError};
    }
  }

  /* -- Focus --------------------------------------------------- */
  button:focus-visible {
    box-shadow: 0 0 0 4px ${({ tokens: t }) => t.core.foregroundAccent020};
  }

  /* -- Properties --------------------------------------------------- */
  button[data-full-width='true'] {
    width: 100%;
  }

  :host([fullWidth]) {
    width: 100%;
  }

  button[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
var r = function (t, a, n, d) {
    var c = arguments.length,
      e =
        c < 3
          ? a
          : d === null
          ? (d = Object.getOwnPropertyDescriptor(a, n))
          : d,
      u;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      e = Reflect.decorate(t, a, n, d);
    else
      for (var s = t.length - 1; s >= 0; s--)
        (u = t[s]) && (e = (c < 3 ? u(e) : c > 3 ? u(a, n, e) : u(a, n)) || e);
    return c > 3 && e && Object.defineProperty(a, n, e), e;
  },
  o = class extends l {
    constructor() {
      super(...arguments),
        (this.icon = "card"),
        (this.variant = "primary"),
        (this.type = "accent"),
        (this.size = "md"),
        (this.iconSize = void 0),
        (this.fullWidth = !1),
        (this.disabled = !1);
    }
    render() {
      return p`<button
      data-variant=${this.variant}
      data-type=${this.type}
      data-size=${this.size}
      data-full-width=${this.fullWidth}
      ?disabled=${this.disabled}
    >
      <wui-icon color="inherit" name=${this.icon} size=${y(
        this.iconSize
      )}></wui-icon>
    </button>`;
    }
  };
o.styles = [b, f, v];
r([i()], o.prototype, "icon", void 0);
r([i()], o.prototype, "variant", void 0);
r([i()], o.prototype, "type", void 0);
r([i()], o.prototype, "size", void 0);
r([i()], o.prototype, "iconSize", void 0);
r([i({ type: Boolean })], o.prototype, "fullWidth", void 0);
r([i({ type: Boolean })], o.prototype, "disabled", void 0);
o = r([m("wui-icon-button")], o);
