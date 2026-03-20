import { a as d, b as g } from "./chunk-ICDT4GZS.js";
import { a as N } from "./chunk-2K64HG7Q.js";
import { a as m, b as E } from "./chunk-VNDKUXGB.js";
var U = {
  interpolate(e, t, r) {
    if (e.length !== 2 || t.length !== 2)
      throw new Error(
        "inputRange and outputRange must be an array of length 2"
      );
    let o = e[0] || 0,
      a = e[1] || 0,
      s = t[0] || 0,
      n = t[1] || 0;
    return r < o ? s : r > a ? n : ((n - s) / (a - o)) * (r - o) + s;
  },
};
var P = {
    black: "#202020",
    white: "#FFFFFF",
    white010: "rgba(255, 255, 255, 0.1)",
    accent010: "rgba(9, 136, 240, 0.1)",
    accent020: "rgba(9, 136, 240, 0.2)",
    accent030: "rgba(9, 136, 240, 0.3)",
    accent040: "rgba(9, 136, 240, 0.4)",
    accent050: "rgba(9, 136, 240, 0.5)",
    accent060: "rgba(9, 136, 240, 0.6)",
    accent070: "rgba(9, 136, 240, 0.7)",
    accent080: "rgba(9, 136, 240, 0.8)",
    accent090: "rgba(9, 136, 240, 0.9)",
    accent100: "rgba(9, 136, 240, 1.0)",
    accentSecondary010: "rgba(199, 185, 148, 0.1)",
    accentSecondary020: "rgba(199, 185, 148, 0.2)",
    accentSecondary030: "rgba(199, 185, 148, 0.3)",
    accentSecondary040: "rgba(199, 185, 148, 0.4)",
    accentSecondary050: "rgba(199, 185, 148, 0.5)",
    accentSecondary060: "rgba(199, 185, 148, 0.6)",
    accentSecondary070: "rgba(199, 185, 148, 0.7)",
    accentSecondary080: "rgba(199, 185, 148, 0.8)",
    accentSecondary090: "rgba(199, 185, 148, 0.9)",
    accentSecondary100: "rgba(199, 185, 148, 1.0)",
    productWalletKit: "#FFB800",
    productAppKit: "#FF573B",
    productCloud: "#0988F0",
    productDocumentation: "#008847",
    neutrals050: "#F6F6F6",
    neutrals100: "#F3F3F3",
    neutrals200: "#E9E9E9",
    neutrals300: "#D0D0D0",
    neutrals400: "#BBB",
    neutrals500: "#9A9A9A",
    neutrals600: "#6C6C6C",
    neutrals700: "#4F4F4F",
    neutrals800: "#363636",
    neutrals900: "#2A2A2A",
    neutrals1000: "#252525",
    semanticSuccess010: "rgba(48, 164, 107, 0.1)",
    semanticSuccess020: "rgba(48, 164, 107, 0.2)",
    semanticSuccess030: "rgba(48, 164, 107, 0.3)",
    semanticSuccess040: "rgba(48, 164, 107, 0.4)",
    semanticSuccess050: "rgba(48, 164, 107, 0.5)",
    semanticSuccess060: "rgba(48, 164, 107, 0.6)",
    semanticSuccess070: "rgba(48, 164, 107, 0.7)",
    semanticSuccess080: "rgba(48, 164, 107, 0.8)",
    semanticSuccess090: "rgba(48, 164, 107, 0.9)",
    semanticSuccess100: "rgba(48, 164, 107, 1.0)",
    semanticError010: "rgba(223, 74, 52, 0.1)",
    semanticError020: "rgba(223, 74, 52, 0.2)",
    semanticError030: "rgba(223, 74, 52, 0.3)",
    semanticError040: "rgba(223, 74, 52, 0.4)",
    semanticError050: "rgba(223, 74, 52, 0.5)",
    semanticError060: "rgba(223, 74, 52, 0.6)",
    semanticError070: "rgba(223, 74, 52, 0.7)",
    semanticError080: "rgba(223, 74, 52, 0.8)",
    semanticError090: "rgba(223, 74, 52, 0.9)",
    semanticError100: "rgba(223, 74, 52, 1.0)",
    semanticWarning010: "rgba(243, 161, 63, 0.1)",
    semanticWarning020: "rgba(243, 161, 63, 0.2)",
    semanticWarning030: "rgba(243, 161, 63, 0.3)",
    semanticWarning040: "rgba(243, 161, 63, 0.4)",
    semanticWarning050: "rgba(243, 161, 63, 0.5)",
    semanticWarning060: "rgba(243, 161, 63, 0.6)",
    semanticWarning070: "rgba(243, 161, 63, 0.7)",
    semanticWarning080: "rgba(243, 161, 63, 0.8)",
    semanticWarning090: "rgba(243, 161, 63, 0.9)",
    semanticWarning100: "rgba(243, 161, 63, 1.0)",
  },
  S = {
    core: {
      backgroundAccentPrimary: "#0988F0",
      backgroundAccentCertified: "#C7B994",
      backgroundWalletKit: "#FFB800",
      backgroundAppKit: "#FF573B",
      backgroundCloud: "#0988F0",
      backgroundDocumentation: "#008847",
      backgroundSuccess: "rgba(48, 164, 107, 0.20)",
      backgroundError: "rgba(223, 74, 52, 0.20)",
      backgroundWarning: "rgba(243, 161, 63, 0.20)",
      textAccentPrimary: "#0988F0",
      textAccentCertified: "#C7B994",
      textWalletKit: "#FFB800",
      textAppKit: "#FF573B",
      textCloud: "#0988F0",
      textDocumentation: "#008847",
      textSuccess: "#30A46B",
      textError: "#DF4A34",
      textWarning: "#F3A13F",
      borderAccentPrimary: "#0988F0",
      borderSecondary: "#C7B994",
      borderSuccess: "#30A46B",
      borderError: "#DF4A34",
      borderWarning: "#F3A13F",
      foregroundAccent010: "rgba(9, 136, 240, 0.1)",
      foregroundAccent020: "rgba(9, 136, 240, 0.2)",
      foregroundAccent040: "rgba(9, 136, 240, 0.4)",
      foregroundAccent060: "rgba(9, 136, 240, 0.6)",
      foregroundSecondary020: "rgba(199, 185, 148, 0.2)",
      foregroundSecondary040: "rgba(199, 185, 148, 0.4)",
      foregroundSecondary060: "rgba(199, 185, 148, 0.6)",
      iconAccentPrimary: "#0988F0",
      iconAccentCertified: "#C7B994",
      iconSuccess: "#30A46B",
      iconError: "#DF4A34",
      iconWarning: "#F3A13F",
      glass010: "rgba(255, 255, 255, 0.1)",
      zIndex: "9999",
    },
    dark: {
      overlay: "rgba(0, 0, 0, 0.50)",
      backgroundPrimary: "#202020",
      backgroundInvert: "#FFFFFF",
      textPrimary: "#FFFFFF",
      textSecondary: "#9A9A9A",
      textTertiary: "#BBBBBB",
      textInvert: "#202020",
      borderPrimary: "#2A2A2A",
      borderPrimaryDark: "#363636",
      borderSecondary: "#4F4F4F",
      foregroundPrimary: "#252525",
      foregroundSecondary: "#2A2A2A",
      foregroundTertiary: "#363636",
      iconDefault: "#9A9A9A",
      iconInverse: "#FFFFFF",
    },
    light: {
      overlay: "rgba(230 , 230, 230, 0.5)",
      backgroundPrimary: "#FFFFFF",
      borderPrimaryDark: "#E9E9E9",
      backgroundInvert: "#202020",
      textPrimary: "#202020",
      textSecondary: "#9A9A9A",
      textTertiary: "#6C6C6C",
      textInvert: "#FFFFFF",
      borderPrimary: "#E9E9E9",
      borderSecondary: "#D0D0D0",
      foregroundPrimary: "#F3F3F3",
      foregroundSecondary: "#E9E9E9",
      foregroundTertiary: "#D0D0D0",
      iconDefault: "#9A9A9A",
      iconInverse: "#202020",
    },
  },
  D = {
    1: "4px",
    2: "8px",
    10: "10px",
    3: "12px",
    4: "16px",
    6: "24px",
    5: "20px",
    8: "32px",
    16: "64px",
    20: "80px",
    32: "128px",
    64: "256px",
    128: "512px",
    round: "9999px",
  },
  z = {
    0: "0px",
    "01": "2px",
    1: "4px",
    2: "8px",
    3: "12px",
    4: "16px",
    5: "20px",
    6: "24px",
    7: "28px",
    8: "32px",
    9: "36px",
    10: "40px",
    12: "48px",
    14: "56px",
    16: "64px",
    20: "80px",
    32: "128px",
    64: "256px",
  },
  L = { regular: "KHTeka", mono: "KHTekaMono" },
  j = { regular: "400", medium: "500" },
  V = {
    h1: "50px",
    h2: "44px",
    h3: "38px",
    h4: "32px",
    h5: "26px",
    h6: "20px",
    large: "16px",
    medium: "14px",
    small: "12px",
  },
  O = {
    "h1-regular-mono": { lineHeight: "50px", letterSpacing: "-3px" },
    "h1-regular": { lineHeight: "50px", letterSpacing: "-1px" },
    "h1-medium": { lineHeight: "50px", letterSpacing: "-0.84px" },
    "h2-regular-mono": { lineHeight: "44px", letterSpacing: "-2.64px" },
    "h2-regular": { lineHeight: "44px", letterSpacing: "-0.88px" },
    "h2-medium": { lineHeight: "44px", letterSpacing: "-0.88px" },
    "h3-regular-mono": { lineHeight: "38px", letterSpacing: "-2.28px" },
    "h3-regular": { lineHeight: "38px", letterSpacing: "-0.76px" },
    "h3-medium": { lineHeight: "38px", letterSpacing: "-0.76px" },
    "h4-regular-mono": { lineHeight: "32px", letterSpacing: "-1.92px" },
    "h4-regular": { lineHeight: "32px", letterSpacing: "-0.32px" },
    "h4-medium": { lineHeight: "32px", letterSpacing: "-0.32px" },
    "h5-regular-mono": { lineHeight: "26px", letterSpacing: "-1.56px" },
    "h5-regular": { lineHeight: "26px", letterSpacing: "-0.26px" },
    "h5-medium": { lineHeight: "26px", letterSpacing: "-0.26px" },
    "h6-regular-mono": { lineHeight: "20px", letterSpacing: "-1.2px" },
    "h6-regular": { lineHeight: "20px", letterSpacing: "-0.6px" },
    "h6-medium": { lineHeight: "20px", letterSpacing: "-0.6px" },
    "lg-regular-mono": { lineHeight: "16px", letterSpacing: "-0.96px" },
    "lg-regular": { lineHeight: "18px", letterSpacing: "-0.16px" },
    "lg-medium": { lineHeight: "18px", letterSpacing: "-0.16px" },
    "md-regular-mono": { lineHeight: "14px", letterSpacing: "-0.84px" },
    "md-regular": { lineHeight: "16px", letterSpacing: "-0.14px" },
    "md-medium": { lineHeight: "16px", letterSpacing: "-0.14px" },
    "sm-regular-mono": { lineHeight: "12px", letterSpacing: "-0.72px" },
    "sm-regular": { lineHeight: "14px", letterSpacing: "-0.12px" },
    "sm-medium": { lineHeight: "14px", letterSpacing: "-0.12px" },
  },
  _ = {
    "ease-out-power-2": "cubic-bezier(0.23, 0.09, 0.08, 1.13)",
    "ease-out-power-1": "cubic-bezier(0.12, 0.04, 0.2, 1.06)",
    "ease-in-power-2": "cubic-bezier(0.92, -0.13, 0.77, 0.91)",
    "ease-in-power-1": "cubic-bezier(0.88, -0.06, 0.8, 0.96)",
    "ease-inout-power-2": "cubic-bezier(0.77, 0.09, 0.23, 1.13)",
    "ease-inout-power-1": "cubic-bezier(0.88, 0.04, 0.12, 1.06)",
  },
  q = { xl: "400ms", lg: "200ms", md: "125ms", sm: "75ms" },
  F = {
    colors: P,
    fontFamily: L,
    fontWeight: j,
    textSize: V,
    typography: O,
    tokens: { core: S.core, theme: S.dark },
    borderRadius: D,
    spacing: z,
    durations: q,
    easings: _,
  };
var R = "--apkt",
  f = {
    createCSSVariables(e) {
      let t = {},
        r = {};
      function o(s, n, i = "") {
        for (let [c, l] of Object.entries(s)) {
          let u = i ? `${i}-${c}` : c;
          l && typeof l == "object" && Object.keys(l).length
            ? ((n[c] = {}), o(l, n[c], u))
            : typeof l == "string" && (n[c] = `${R}-${u}`);
        }
      }
      function a(s, n) {
        for (let [i, c] of Object.entries(s))
          c && typeof c == "object"
            ? ((n[i] = {}), a(c, n[i]))
            : typeof c == "string" && (n[i] = `var(${c})`);
      }
      return o(e, t), a(t, r), { cssVariables: t, cssVariablesVarPrefix: r };
    },
    assignCSSVariables(e, t) {
      let r = {};
      function o(a, s, n) {
        for (let [i, c] of Object.entries(a)) {
          let l = n ? `${n}-${i}` : i,
            u = s[i];
          c && typeof c == "object"
            ? o(c, u, l)
            : typeof u == "string" && (r[`${R}-${l}`] = u);
        }
      }
      return o(e, t), r;
    },
    createRootStyles(e, t) {
      let r = E(m({}, F), {
          tokens: E(m({}, F.tokens), {
            theme: e === "light" ? S.light : S.dark,
          }),
        }),
        { cssVariables: o } = f.createCSSVariables(r),
        a = f.assignCSSVariables(o, r),
        s = f.generateW3MVariables(t),
        n = f.generateW3MOverrides(t),
        i = f.generateScaledVariables(t),
        c = f.generateBaseVariables(a),
        l = m(m(m(m(m({}, a), c), s), n), i),
        u = f.applyColorMixToVariables(t, l),
        y = m(m({}, l), u);
      return `:root {${Object.entries(y)
        .map(([W, I]) => `${W}:${I.replace("/[:;{}</>]/g", "")};`)
        .join("")}}`;
    },
    generateW3MVariables(e) {
      if (!e) return {};
      let t = {};
      return (
        (t["--w3m-font-family"] = e["--w3m-font-family"] || "KHTeka"),
        (t["--w3m-accent"] = e["--w3m-accent"] || "#0988F0"),
        (t["--w3m-color-mix"] = e["--w3m-color-mix"] || "#000"),
        (t["--w3m-color-mix-strength"] = `${
          e["--w3m-color-mix-strength"] || 0
        }%`),
        (t["--w3m-font-size-master"] = e["--w3m-font-size-master"] || "10px"),
        (t["--w3m-border-radius-master"] =
          e["--w3m-border-radius-master"] || "4px"),
        t
      );
    },
    generateW3MOverrides(e) {
      if (!e) return {};
      let t = {};
      if (e["--w3m-accent"]) {
        let r = e["--w3m-accent"];
        (t["--apkt-tokens-core-iconAccentPrimary"] = r),
          (t["--apkt-tokens-core-borderAccentPrimary"] = r),
          (t["--apkt-tokens-core-textAccentPrimary"] = r),
          (t["--apkt-tokens-core-backgroundAccentPrimary"] = r);
      }
      return (
        e["--w3m-font-family"] &&
          (t["--apkt-fontFamily-regular"] = e["--w3m-font-family"]),
        e["--w3m-z-index"] &&
          (t["--apkt-tokens-core-zIndex"] = `${e["--w3m-z-index"]}`),
        t
      );
    },
    generateScaledVariables(e) {
      if (!e) return {};
      let t = {};
      if (e["--w3m-font-size-master"]) {
        let r = parseFloat(e["--w3m-font-size-master"].replace("px", ""));
        (t["--apkt-textSize-h1"] = `${Number(r) * 5}px`),
          (t["--apkt-textSize-h2"] = `${Number(r) * 4.4}px`),
          (t["--apkt-textSize-h3"] = `${Number(r) * 3.8}px`),
          (t["--apkt-textSize-h4"] = `${Number(r) * 3.2}px`),
          (t["--apkt-textSize-h5"] = `${Number(r) * 2.6}px`),
          (t["--apkt-textSize-h6"] = `${Number(r) * 2}px`),
          (t["--apkt-textSize-large"] = `${Number(r) * 1.6}px`),
          (t["--apkt-textSize-medium"] = `${Number(r) * 1.4}px`),
          (t["--apkt-textSize-small"] = `${Number(r) * 1.2}px`);
      }
      if (e["--w3m-border-radius-master"]) {
        let r = parseFloat(e["--w3m-border-radius-master"].replace("px", ""));
        (t["--apkt-borderRadius-1"] = `${Number(r)}px`),
          (t["--apkt-borderRadius-2"] = `${Number(r) * 2}px`),
          (t["--apkt-borderRadius-3"] = `${Number(r) * 3}px`),
          (t["--apkt-borderRadius-4"] = `${Number(r) * 4}px`),
          (t["--apkt-borderRadius-5"] = `${Number(r) * 5}px`),
          (t["--apkt-borderRadius-6"] = `${Number(r) * 6}px`),
          (t["--apkt-borderRadius-8"] = `${Number(r) * 8}px`),
          (t["--apkt-borderRadius-16"] = `${Number(r) * 16}px`),
          (t["--apkt-borderRadius-20"] = `${Number(r) * 20}px`),
          (t["--apkt-borderRadius-32"] = `${Number(r) * 32}px`),
          (t["--apkt-borderRadius-64"] = `${Number(r) * 64}px`),
          (t["--apkt-borderRadius-128"] = `${Number(r) * 128}px`);
      }
      return t;
    },
    generateColorMixCSS(e, t) {
      if (!e?.["--w3m-color-mix"] || !e["--w3m-color-mix-strength"]) return "";
      let r = e["--w3m-color-mix"],
        o = e["--w3m-color-mix-strength"];
      if (!o || o === 0) return "";
      let a = Object.keys(t || {}).filter((n) => {
        let i =
            n.includes("-tokens-core-background") ||
            n.includes("-tokens-core-text") ||
            n.includes("-tokens-core-border") ||
            n.includes("-tokens-core-foreground") ||
            n.includes("-tokens-core-icon") ||
            n.includes("-tokens-theme-background") ||
            n.includes("-tokens-theme-text") ||
            n.includes("-tokens-theme-border") ||
            n.includes("-tokens-theme-foreground") ||
            n.includes("-tokens-theme-icon"),
          c =
            n.includes("-borderRadius-") ||
            n.includes("-spacing-") ||
            n.includes("-textSize-") ||
            n.includes("-fontFamily-") ||
            n.includes("-fontWeight-") ||
            n.includes("-typography-") ||
            n.includes("-duration-") ||
            n.includes("-ease-") ||
            n.includes("-path-") ||
            n.includes("-width-") ||
            n.includes("-height-") ||
            n.includes("-visual-size-") ||
            n.includes("-modal-width") ||
            n.includes("-cover");
        return i && !c;
      });
      return a.length === 0
        ? ""
        : ` @supports (background: color-mix(in srgb, white 50%, black)) {
      :root {
        ${a
          .map((n) => {
            let i = t?.[n] || "";
            return i.includes("color-mix") ||
              i.startsWith("#") ||
              i.startsWith("rgb")
              ? `${n}: color-mix(in srgb, ${r} ${o}%, ${i});`
              : `${n}: color-mix(in srgb, ${r} ${o}%, var(${n}-base, ${i}));`;
          })
          .join("")}
      }
    }`;
    },
    generateBaseVariables(e) {
      let t = {},
        r = e["--apkt-tokens-theme-backgroundPrimary"];
      r && (t["--apkt-tokens-theme-backgroundPrimary-base"] = r);
      let o = e["--apkt-tokens-core-backgroundAccentPrimary"];
      return o && (t["--apkt-tokens-core-backgroundAccentPrimary-base"] = o), t;
    },
    applyColorMixToVariables(e, t) {
      let r = {};
      if (
        (t?.["--apkt-tokens-theme-backgroundPrimary"] &&
          (r["--apkt-tokens-theme-backgroundPrimary"] =
            "var(--apkt-tokens-theme-backgroundPrimary-base)"),
        t?.["--apkt-tokens-core-backgroundAccentPrimary"] &&
          (r["--apkt-tokens-core-backgroundAccentPrimary"] =
            "var(--apkt-tokens-core-backgroundAccentPrimary-base)"),
        !e?.["--w3m-color-mix"] || !e["--w3m-color-mix-strength"])
      )
        return r;
      let o = e["--w3m-color-mix"],
        a = e["--w3m-color-mix-strength"];
      if (!a || a === 0) return r;
      let s = Object.keys(t || {}).filter((n) => {
        let i =
            n.includes("-tokens-core-background") ||
            n.includes("-tokens-core-text") ||
            n.includes("-tokens-core-border") ||
            n.includes("-tokens-core-foreground") ||
            n.includes("-tokens-core-icon") ||
            n.includes("-tokens-theme-background") ||
            n.includes("-tokens-theme-text") ||
            n.includes("-tokens-theme-border") ||
            n.includes("-tokens-theme-foreground") ||
            n.includes("-tokens-theme-icon") ||
            n.includes("-tokens-theme-overlay"),
          c =
            n.includes("-borderRadius-") ||
            n.includes("-spacing-") ||
            n.includes("-textSize-") ||
            n.includes("-fontFamily-") ||
            n.includes("-fontWeight-") ||
            n.includes("-typography-") ||
            n.includes("-duration-") ||
            n.includes("-ease-") ||
            n.includes("-path-") ||
            n.includes("-width-") ||
            n.includes("-height-") ||
            n.includes("-visual-size-") ||
            n.includes("-modal-width") ||
            n.includes("-cover");
        return i && !c;
      });
      return (
        s.length === 0 ||
          s.forEach((n) => {
            let i = t?.[n] || "";
            n.endsWith("-base") ||
              (n === "--apkt-tokens-theme-backgroundPrimary" ||
              n === "--apkt-tokens-core-backgroundAccentPrimary"
                ? (r[n] = `color-mix(in srgb, ${o} ${a}%, var(${n}-base))`)
                : i.includes("color-mix") ||
                  i.startsWith("#") ||
                  i.startsWith("rgb")
                ? (r[n] = `color-mix(in srgb, ${o} ${a}%, ${i})`)
                : (r[
                    n
                  ] = `color-mix(in srgb, ${o} ${a}%, var(${n}-base, ${i}))`));
          }),
        r
      );
    },
  },
  { cssVariablesVarPrefix: B } = f.createCSSVariables(F);
function G(e, ...t) {
  return g(e, ...t.map((r) => (typeof r == "function" ? d(r(B)) : d(r))));
}
var h,
  k,
  b,
  p,
  $,
  x = {
    "KHTeka-500-woff2": "https://fonts.reown.com/KHTeka-Medium.woff2",
    "KHTeka-400-woff2": "https://fonts.reown.com/KHTeka-Regular.woff2",
    "KHTeka-300-woff2": "https://fonts.reown.com/KHTeka-Light.woff2",
    "KHTekaMono-400-woff2": "https://fonts.reown.com/KHTekaMono-Regular.woff2",
    "KHTeka-500-woff": "https://fonts.reown.com/KHTeka-Light.woff",
    "KHTeka-400-woff": "https://fonts.reown.com/KHTeka-Regular.woff",
    "KHTeka-300-woff": "https://fonts.reown.com/KHTeka-Light.woff",
    "KHTekaMono-400-woff": "https://fonts.reown.com/KHTekaMono-Regular.woff",
  };
function C(e, t = "dark") {
  h && document.head.removeChild(h),
    (h = document.createElement("style")),
    (h.textContent = f.createRootStyles(t, e)),
    document.head.appendChild(h);
}
function Y(e, t = "dark") {
  if (
    (($ = e),
    (k = document.createElement("style")),
    (b = document.createElement("style")),
    (p = document.createElement("style")),
    (k.textContent = w(e).core.cssText),
    (b.textContent = w(e).dark.cssText),
    (p.textContent = w(e).light.cssText),
    document.head.appendChild(k),
    document.head.appendChild(b),
    document.head.appendChild(p),
    C(e, t),
    M(t),
    !e?.["--w3m-font-family"])
  )
    for (let [r, o] of Object.entries(x)) {
      let a = document.createElement("link");
      (a.rel = "preload"),
        (a.href = o),
        (a.as = "font"),
        (a.type = r.includes("woff2") ? "font/woff2" : "font/woff"),
        (a.crossOrigin = "anonymous"),
        document.head.appendChild(a);
    }
  M(t);
}
function M(e = "dark") {
  b &&
    p &&
    h &&
    (e === "light"
      ? (C($, e), b.removeAttribute("media"), (p.media = "enabled"))
      : (C($, e), p.removeAttribute("media"), (b.media = "enabled")));
}
function Z(e) {
  if (
    (($ = e),
    k &&
      b &&
      p &&
      ((k.textContent = w(e).core.cssText),
      (b.textContent = w(e).dark.cssText),
      (p.textContent = w(e).light.cssText),
      e?.["--w3m-font-family"]))
  ) {
    let t = e["--w3m-font-family"];
    (k.textContent = k.textContent?.replace(
      "font-family: KHTeka",
      `font-family: ${t}`
    )),
      (b.textContent = b.textContent?.replace(
        "font-family: KHTeka",
        `font-family: ${t}`
      )),
      (p.textContent = p.textContent?.replace(
        "font-family: KHTeka",
        `font-family: ${t}`
      ));
  }
  if (h) {
    let t = p?.media === "enabled" ? "light" : "dark";
    C(e, t);
  }
}
function w(e) {
  let t = !!e?.["--w3m-font-family"];
  return {
    core: g`
      ${
        t
          ? g``
          : g`
            @font-face {
              font-family: 'KHTeka';
              src:
                url(${d(x["KHTeka-400-woff2"])}) format('woff2'),
                url(${d(x["KHTeka-400-woff"])}) format('woff');
              font-weight: 400;
              font-style: normal;
              font-display: swap;
            }

            @font-face {
              font-family: 'KHTeka';
              src:
                url(${d(x["KHTeka-300-woff2"])}) format('woff2'),
                url(${d(x["KHTeka-300-woff"])}) format('woff');
              font-weight: 300;
              font-style: normal;
            }

            @font-face {
              font-family: 'KHTekaMono';
              src:
                url(${d(x["KHTekaMono-400-woff2"])}) format('woff2'),
                url(${d(x["KHTekaMono-400-woff"])}) format('woff');
              font-weight: 400;
              font-style: normal;
            }

            @font-face {
              font-family: 'KHTeka';
              src:
                url(${d(x["KHTeka-400-woff2"])}) format('woff2'),
                url(${d(x["KHTeka-400-woff"])}) format('woff');
              font-weight: 400;
              font-style: normal;
            }
          `
      }

      @keyframes w3m-shake {
        0% {
          transform: scale(1) rotate(0deg);
        }
        20% {
          transform: scale(1) rotate(-1deg);
        }
        40% {
          transform: scale(1) rotate(1.5deg);
        }
        60% {
          transform: scale(1) rotate(-1.5deg);
        }
        80% {
          transform: scale(1) rotate(1deg);
        }
        100% {
          transform: scale(1) rotate(0deg);
        }
      }
      @keyframes w3m-iframe-fade-out {
        0% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
      @keyframes w3m-iframe-zoom-in {
        0% {
          transform: translateY(50px);
          opacity: 0;
        }
        100% {
          transform: translateY(0px);
          opacity: 1;
        }
      }
      @keyframes w3m-iframe-zoom-in-mobile {
        0% {
          transform: scale(0.95);
          opacity: 0;
        }
        100% {
          transform: scale(1);
          opacity: 1;
        }
      }
      :root {
        --apkt-modal-width: 370px;

        --apkt-visual-size-inherit: inherit;
        --apkt-visual-size-sm: 40px;
        --apkt-visual-size-md: 55px;
        --apkt-visual-size-lg: 80px;

        --apkt-path-network-sm: path(
          'M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z'
        );

        --apkt-path-network-md: path(
          'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'
        );

        --apkt-path-network-lg: path(
          'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'
        );

        --apkt-width-network-sm: 36px;
        --apkt-width-network-md: 48px;
        --apkt-width-network-lg: 86px;

        --apkt-duration-dynamic: 0ms;
        --apkt-height-network-sm: 40px;
        --apkt-height-network-md: 54px;
        --apkt-height-network-lg: 96px;
      }
    `,
    dark: g`
      :root {
      }
    `,
    light: g`
      :root {
      }
    `,
  };
}
var me = g`
  div,
  span,
  iframe,
  a,
  img,
  form,
  button,
  label,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    backface-visibility: hidden;
  }

  :host {
    font-family: var(--apkt-fontFamily-regular);
  }
`,
  de = g`
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    will-change: background-color, color, border, box-shadow, width, height, transform, opacity;
    outline: none;
    border: none;
    text-decoration: none;
    transition:
      background-color var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      color var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      border var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      box-shadow var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      width var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      height var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      transform var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      opacity var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      scale var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      border-radius var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2);
    will-change:
      background-color, color, border, box-shadow, width, height, transform, opacity, scale,
      border-radius;
  }

  a:active:not([disabled]),
  button:active:not([disabled]) {
    scale: 0.975;
    transform-origin: center;
  }

  button:disabled {
    cursor: default;
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`;
var A = ".",
  v = {
    getSpacingStyles(e, t) {
      if (Array.isArray(e))
        return e[t] ? `var(--apkt-spacing-${e[t]})` : void 0;
      if (typeof e == "string") return `var(--apkt-spacing-${e})`;
    },
    getFormattedDate(e) {
      return new Intl.DateTimeFormat("en-US", {
        month: "short",
        day: "numeric",
      }).format(e);
    },
    formatCurrency(e = 0, t = {}) {
      let r = Number(e);
      return isNaN(r)
        ? "$0.00"
        : new Intl.NumberFormat(
            "en-US",
            m(
              {
                style: "currency",
                currency: "USD",
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              },
              t
            )
          ).format(r);
    },
    getHostName(e) {
      try {
        return new URL(e).hostname;
      } catch {
        return "";
      }
    },
    getTruncateString({ string: e, charsStart: t, charsEnd: r, truncate: o }) {
      return e.length <= t + r
        ? e
        : o === "end"
        ? `${e.substring(0, t)}...`
        : o === "start"
        ? `...${e.substring(e.length - r)}`
        : `${e.substring(0, Math.floor(t))}...${e.substring(
            e.length - Math.floor(r)
          )}`;
    },
    generateAvatarColors(e) {
      let r = e
          .toLowerCase()
          .replace(/^0x/iu, "")
          .replace(/[^a-f0-9]/gu, "")
          .substring(0, 6)
          .padEnd(6, "0"),
        o = this.hexToRgb(r),
        a = getComputedStyle(document.documentElement).getPropertyValue(
          "--w3m-border-radius-master"
        ),
        n = 100 - 3 * Number(a?.replace("px", "")),
        i = `${n}% ${n}% at 65% 40%`,
        c = [];
      for (let l = 0; l < 5; l += 1) {
        let u = this.tintColor(o, 0.15 * l);
        c.push(`rgb(${u[0]}, ${u[1]}, ${u[2]})`);
      }
      return `
    --local-color-1: ${c[0]};
    --local-color-2: ${c[1]};
    --local-color-3: ${c[2]};
    --local-color-4: ${c[3]};
    --local-color-5: ${c[4]};
    --local-radial-circle: ${i}
   `;
    },
    hexToRgb(e) {
      let t = parseInt(e, 16),
        r = (t >> 16) & 255,
        o = (t >> 8) & 255,
        a = t & 255;
      return [r, o, a];
    },
    tintColor(e, t) {
      let [r, o, a] = e,
        s = Math.round(r + (255 - r) * t),
        n = Math.round(o + (255 - o) * t),
        i = Math.round(a + (255 - a) * t);
      return [s, n, i];
    },
    isNumber(e) {
      return { number: /^[0-9]+$/u }.number.test(e);
    },
    getColorTheme(e) {
      return (
        e ||
        (typeof window < "u" &&
        window.matchMedia &&
        typeof window.matchMedia == "function"
          ? window.matchMedia("(prefers-color-scheme: dark)")?.matches
            ? "dark"
            : "light"
          : "dark")
      );
    },
    splitBalance(e) {
      let t = e.split(".");
      return t.length === 2 ? [t[0], t[1]] : ["0", "00"];
    },
    roundNumber(e, t, r) {
      return e.toString().length >= t ? Number(e).toFixed(r) : e;
    },
    cssDurationToNumber(e) {
      return e.endsWith("s")
        ? Number(e.replace("s", "")) * 1e3
        : e.endsWith("ms")
        ? Number(e.replace("ms", ""))
        : 0;
    },
    maskInput({ value: e, decimals: t, integers: r }) {
      if (((e = e.replace(",", ".")), e === A)) return `0${A}`;
      let [o = "", a] = e.split(A).map((u) => u.replace(/[^0-9]/gu, "")),
        s = r ? o.substring(0, r) : o,
        n = s.length === 2 ? String(Number(s)) : s,
        i = typeof t == "number" ? a?.substring(0, t) : a,
        c = typeof t != "number" || t > 0;
      return (typeof i == "string" && c ? [n, i].join(A) : n) ?? "";
    },
    capitalize(e) {
      return e ? e.charAt(0).toUpperCase() + e.slice(1) : "";
    },
  };
function Q(e, t) {
  let { kind: r, elements: o } = t;
  return {
    kind: r,
    elements: o,
    finisher(a) {
      customElements.get(e) || customElements.define(e, a);
    },
  };
}
function X(e, t) {
  return customElements.get(e) || customElements.define(e, t), t;
}
function J(e) {
  return function (r) {
    return typeof r == "function" ? X(e, r) : Q(e, r);
  };
}
var ee = 3,
  H = 0.1,
  te = ["receive", "deposit", "borrow", "claim"],
  re = ["withdraw", "repay", "burn"],
  K = {
    getTransactionGroupTitle(e, t) {
      let r = N.getYear(),
        o = N.getMonthNameByIndex(t);
      return e === r ? o : `${o} ${e}`;
    },
    getTransactionImages(e) {
      let [t] = e;
      return e?.length > 1
        ? e.map((o) => this.getTransactionImage(o))
        : [this.getTransactionImage(t)];
    },
    getTransactionImage(e) {
      return {
        type: K.getTransactionTransferTokenType(e),
        url: K.getTransactionImageURL(e),
      };
    },
    getTransactionImageURL(e) {
      let t,
        r = !!e?.nft_info,
        o = !!e?.fungible_info;
      return (
        e && r
          ? (t = e?.nft_info?.content?.preview?.url)
          : e && o && (t = e?.fungible_info?.icon?.url),
        t
      );
    },
    getTransactionTransferTokenType(e) {
      if (e?.fungible_info) return "FUNGIBLE";
      if (e?.nft_info) return "NFT";
    },
    getTransactionDescriptions(e, t) {
      let r = e?.metadata?.operationType,
        o = t || e?.transfers,
        a = o?.length > 0,
        s = o?.length > 1,
        n = a && o?.every((T) => !!T?.fungible_info),
        [i, c] = o,
        l = this.getTransferDescription(i),
        u = this.getTransferDescription(c);
      if (!a)
        return (r === "send" || r === "receive") && n
          ? ((l = v.getTruncateString({
              string: e?.metadata.sentFrom,
              charsStart: 4,
              charsEnd: 6,
              truncate: "middle",
            })),
            (u = v.getTruncateString({
              string: e?.metadata.sentTo,
              charsStart: 4,
              charsEnd: 6,
              truncate: "middle",
            })),
            [l, u])
          : [e.metadata.status];
      if (s) return o.map((T) => this.getTransferDescription(T));
      let y = "";
      return (
        te.includes(r) ? (y = "+") : re.includes(r) && (y = "-"),
        (l = y.concat(l)),
        [l]
      );
    },
    getTransferDescription(e) {
      let t = "";
      return (
        e &&
          (e?.nft_info
            ? (t = e?.nft_info?.name || "-")
            : e?.fungible_info &&
              (t = this.getFungibleTransferDescription(e) || "-")),
        t
      );
    },
    getFungibleTransferDescription(e) {
      return e
        ? [
            this.getQuantityFixedValue(e?.quantity.numeric),
            e?.fungible_info?.symbol,
          ]
            .join(" ")
            .trim()
        : null;
    },
    mergeTransfers(e) {
      if (e?.length <= 1) return e;
      let r = this.filterGasFeeTransfers(e).reduce((a, s) => {
          let n = s?.fungible_info?.name,
            i = a.find(
              ({ fungible_info: c, direction: l }) =>
                n && n === c?.name && l === s.direction
            );
          if (i) {
            let c = Number(i.quantity.numeric) + Number(s.quantity.numeric);
            (i.quantity.numeric = c.toString()),
              (i.value = (i.value || 0) + (s.value || 0));
          } else a.push(s);
          return a;
        }, []),
        o = r;
      return (
        r.length > 2 &&
          (o = r.sort((a, s) => (s.value || 0) - (a.value || 0)).slice(0, 2)),
        (o = o.sort((a, s) =>
          a.direction === "out" && s.direction === "in"
            ? -1
            : a.direction === "in" && s.direction === "out"
            ? 1
            : 0
        )),
        o
      );
    },
    filterGasFeeTransfers(e) {
      let t = e.reduce((o, a) => {
          let s = a?.fungible_info?.name;
          return s && (o[s] || (o[s] = []), o[s].push(a)), o;
        }, {}),
        r = [];
      return (
        Object.values(t).forEach((o) => {
          if (o.length === 1) {
            let a = o[0];
            a && r.push(a);
          } else {
            let a = o.filter((n) => n.direction === "in"),
              s = o.filter((n) => n.direction === "out");
            if (a.length === 1 && s.length === 1) {
              let n = a[0],
                i = s[0],
                c = !1;
              if (n && i) {
                let l = Number(n.quantity.numeric),
                  u = Number(i.quantity.numeric);
                u < l * H
                  ? (r.push(n), (c = !0))
                  : l < u * H && (r.push(i), (c = !0));
              }
              c || r.push(...o);
            } else {
              let n = this.filterGasFeesFromTokenGroup(o);
              r.push(...n);
            }
          }
        }),
        e.forEach((o) => {
          o?.fungible_info?.name || r.push(o);
        }),
        r
      );
    },
    filterGasFeesFromTokenGroup(e) {
      if (e.length <= 1) return e;
      let t = e.map((i) => Number(i.quantity.numeric)),
        r = Math.max(...t),
        o = Math.min(...t),
        a = 0.01;
      if (o < r * a)
        return e.filter((c) => Number(c.quantity.numeric) >= r * a);
      let s = e.filter((i) => i.direction === "in"),
        n = e.filter((i) => i.direction === "out");
      if (s.length === 1 && n.length === 1) {
        let i = s[0],
          c = n[0];
        if (i && c) {
          let l = Number(i.quantity.numeric),
            u = Number(c.quantity.numeric);
          if (u < l * H) return [i];
          if (l < u * H) return [c];
        }
      }
      return e;
    },
    getQuantityFixedValue(e) {
      return e ? parseFloat(e).toFixed(ee) : null;
    },
  };
export {
  U as a,
  B as b,
  G as c,
  Y as d,
  M as e,
  Z as f,
  me as g,
  de as h,
  v as i,
  K as j,
  J as k,
};
