import { a as w, b as C } from "./chunk-O4NP5LYX.js";
import { a as g } from "./chunk-NZR2LZWU.js";
import { a as m, b as y } from "./chunk-ISXP6GOO.js";
import { c as u, g as k, k as b } from "./chunk-L4ZNINEC.js";
import { e as a, k as d } from "./chunk-ICDT4GZS.js";
import { k as h } from "./chunk-HK6N7TS4.js";
import { j as l } from "./chunk-U7GUEFJZ.js";
var $ = u`
  label {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    user-select: none;
    column-gap: ${({ spacing: e }) => e[2]};
  }

  label > input[type='checkbox'] {
    height: 0;
    width: 0;
    opacity: 0;
    position: absolute;
  }

  label > span {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    border: 1px solid ${({ colors: e }) => e.neutrals400};
    color: ${({ colors: e }) => e.white};
    background-color: transparent;
    will-change: border-color, background-color;
  }

  label > span > wui-icon {
    opacity: 0;
    will-change: opacity;
  }

  label > input[type='checkbox']:checked + span > wui-icon {
    color: ${({ colors: e }) => e.white};
  }

  label > input[type='checkbox']:not(:checked) > span > wui-icon {
    color: ${({ colors: e }) => e.neutrals900};
  }

  label > input[type='checkbox']:checked + span > wui-icon {
    opacity: 1;
  }

  /* -- Sizes --------------------------------------------------- */
  label[data-size='lg'] > span {
    width: 24px;
    height: 24px;
    min-width: 24px;
    min-height: 24px;
    border-radius: ${({ borderRadius: e }) => e[10]};
  }

  label[data-size='md'] > span {
    width: 20px;
    height: 20px;
    min-width: 20px;
    min-height: 20px;
    border-radius: ${({ borderRadius: e }) => e[2]};
  }

  label[data-size='sm'] > span {
    width: 16px;
    height: 16px;
    min-width: 16px;
    min-height: 16px;
    border-radius: ${({ borderRadius: e }) => e[1]};
  }

  /* -- Focus states --------------------------------------------------- */
  label > input[type='checkbox']:focus-visible + span,
  label > input[type='checkbox']:focus + span {
    border: 1px solid ${({ tokens: e }) => e.core.borderAccentPrimary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  /* -- Checked states --------------------------------------------------- */
  label > input[type='checkbox']:checked + span {
    background-color: ${({ tokens: e }) => e.core.iconAccentPrimary};
    border: 1px solid transparent;
  }

  /* -- Hover states --------------------------------------------------- */
  input[type='checkbox']:not(:checked):not(:disabled) + span:hover {
    border: 1px solid ${({ colors: e }) => e.neutrals700};
    background-color: ${({ colors: e }) => e.neutrals800};
    box-shadow: none;
  }

  input[type='checkbox']:checked:not(:disabled) + span:hover {
    border: 1px solid transparent;
    background-color: ${({ colors: e }) => e.accent080};
    box-shadow: none;
  }

  /* -- Disabled state --------------------------------------------------- */
  label > input[type='checkbox']:checked:disabled + span {
    border: 1px solid transparent;
    opacity: 0.3;
  }

  label > input[type='checkbox']:not(:checked):disabled + span {
    border: 1px solid ${({ colors: e }) => e.neutrals700};
  }

  label:has(input[type='checkbox']:disabled) {
    cursor: auto;
  }

  label > input[type='checkbox']:disabled + span {
    cursor: not-allowed;
  }
`;
var x = function (e, t, i, r) {
    var c = arguments.length,
      o =
        c < 3
          ? t
          : r === null
          ? (r = Object.getOwnPropertyDescriptor(t, i))
          : r,
      n;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      o = Reflect.decorate(e, t, i, r);
    else
      for (var s = e.length - 1; s >= 0; s--)
        (n = e[s]) && (o = (c < 3 ? n(o) : c > 3 ? n(t, i, o) : n(t, i)) || o);
    return c > 3 && o && Object.defineProperty(t, i, o), o;
  },
  z = { lg: "md", md: "sm", sm: "sm" },
  p = class extends d {
    constructor() {
      super(...arguments),
        (this.inputElementRef = w()),
        (this.checked = void 0),
        (this.disabled = !1),
        (this.size = "md");
    }
    render() {
      let t = z[this.size];
      return a`
      <label data-size=${this.size}>
        <input
          ${C(this.inputElementRef)}
          ?checked=${g(this.checked)}
          ?disabled=${this.disabled}
          type="checkbox"
          @change=${this.dispatchChangeEvent}
        />
        <span>
          <wui-icon name="checkmarkBold" size=${t}></wui-icon>
        </span>
        <slot></slot>
      </label>
    `;
    }
    dispatchChangeEvent() {
      this.dispatchEvent(
        new CustomEvent("checkboxChange", {
          detail: this.inputElementRef.value?.checked,
          bubbles: !0,
          composed: !0,
        })
      );
    }
  };
p.styles = [k, $];
x([m({ type: Boolean })], p.prototype, "checked", void 0);
x([m({ type: Boolean })], p.prototype, "disabled", void 0);
x([m()], p.prototype, "size", void 0);
p = x([b("wui-checkbox")], p);
var v = u`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  wui-checkbox {
    padding: ${({ spacing: e }) => e[3]};
  }
  a {
    text-decoration: none;
    color: ${({ tokens: e }) => e.theme.textSecondary};
    font-weight: 500;
  }
`;
var E = function (e, t, i, r) {
    var c = arguments.length,
      o =
        c < 3
          ? t
          : r === null
          ? (r = Object.getOwnPropertyDescriptor(t, i))
          : r,
      n;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      o = Reflect.decorate(e, t, i, r);
    else
      for (var s = e.length - 1; s >= 0; s--)
        (n = e[s]) && (o = (c < 3 ? n(o) : c > 3 ? n(t, i, o) : n(t, i)) || o);
    return c > 3 && o && Object.defineProperty(t, i, o), o;
  },
  f = class extends d {
    constructor() {
      super(),
        (this.unsubscribe = []),
        (this.checked = h.state.isLegalCheckboxChecked),
        this.unsubscribe.push(
          h.subscribeKey("isLegalCheckboxChecked", (t) => {
            this.checked = t;
          })
        );
    }
    disconnectedCallback() {
      this.unsubscribe.forEach((t) => t());
    }
    render() {
      let { termsConditionsUrl: t, privacyPolicyUrl: i } = l.state,
        r = l.state.features?.legalCheckbox;
      return (!t && !i) || !r
        ? null
        : a`
      <wui-checkbox
        ?checked=${this.checked}
        @checkboxChange=${this.onCheckboxChange.bind(this)}
        data-testid="wui-checkbox"
      >
        <wui-text color="secondary" variant="sm-regular" align="left">
          I agree to our ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-checkbox>
    `;
    }
    andTemplate() {
      let { termsConditionsUrl: t, privacyPolicyUrl: i } = l.state;
      return t && i ? "and" : "";
    }
    termsTemplate() {
      let { termsConditionsUrl: t } = l.state;
      return t
        ? a`<a rel="noreferrer" target="_blank" href=${t}>terms of service</a>`
        : null;
    }
    privacyTemplate() {
      let { privacyPolicyUrl: t } = l.state;
      return t
        ? a`<a rel="noreferrer" target="_blank" href=${t}>privacy policy</a>`
        : null;
    }
    onCheckboxChange() {
      h.setIsLegalCheckboxChecked(!this.checked);
    }
  };
f.styles = [v];
E([y()], f.prototype, "checked", void 0);
f = E([b("w3m-legal-checkbox")], f);
