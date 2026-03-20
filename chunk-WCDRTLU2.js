import {
  H as e,
  d as h,
  e as o,
  k as s,
  q as l,
  s as a,
  u as f,
} from "./chunk-U7GUEFJZ.js";
import { b as u } from "./chunk-2K64HG7Q.js";
import { d as m } from "./chunk-LZ4YD47P.js";
import { n as i } from "./chunk-VNDKUXGB.js";
function S() {
  try {
    return o.returnOpenHref(
      `${u.SECURE_SITE_SDK_ORIGIN}/loading`,
      "popupWindow",
      "width=600,height=800,scrollbars=yes"
    );
  } catch {
    throw new Error("Could not open social popup");
  }
}
function C() {
  return i(this, null, function* () {
    a.push("ConnectingFarcaster");
    let t = f.getAuthConnector();
    if (t && !e.getAccountData()?.farcasterUrl)
      try {
        let { url: r } = yield t.provider.getFarcasterUri();
        e.setAccountProp("farcasterUrl", r, e.state.activeChain);
      } catch (r) {
        a.goBack(), s.showError(r);
      }
  });
}
function g(t) {
  return i(this, null, function* () {
    a.push("ConnectingSocial");
    let c = f.getAuthConnector(),
      r = null;
    try {
      let p = setTimeout(() => {
        throw new Error("Social login timed out. Please try again.");
      }, 45e3);
      if (c && t) {
        if ((o.isTelegram() || (r = S()), r))
          e.setAccountProp("socialWindow", m(r), e.state.activeChain);
        else if (!o.isTelegram())
          throw new Error("Could not create social popup");
        let { uri: n } = yield c.provider.getSocialRedirectUri({ provider: t });
        if (!n)
          throw (
            (r?.close(), new Error("Could not fetch the social redirect uri"))
          );
        if ((r && (r.location.href = n), o.isTelegram())) {
          h.setTelegramSocialProvider(t);
          let w = o.formatTelegramSocialLoginUrl(n);
          o.openHref(w, "_top");
        }
        clearTimeout(p);
      }
    } catch (p) {
      r?.close();
      let n = o.parseError(p);
      s.showError(n),
        l.sendEvent({
          type: "track",
          event: "SOCIAL_LOGIN_ERROR",
          properties: { provider: t, message: n },
        });
    }
  });
}
function U(t) {
  return i(this, null, function* () {
    e.setAccountProp("socialProvider", t, e.state.activeChain),
      l.sendEvent({
        type: "track",
        event: "SOCIAL_LOGIN_STARTED",
        properties: { provider: t },
      }),
      t === "farcaster" ? yield C() : yield g(t);
  });
}
export { U as a };
