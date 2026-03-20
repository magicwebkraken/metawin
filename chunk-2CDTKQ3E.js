function s(n) {
  let e = new CustomEvent("eip6963:announceProvider", {
    detail: Object.freeze(n),
  });
  window.dispatchEvent(e);
  let t = () => window.dispatchEvent(e);
  return (
    window.addEventListener("eip6963:requestProvider", t),
    () => window.removeEventListener("eip6963:requestProvider", t)
  );
}
function d(n) {
  if (typeof window > "u") return;
  let e = (t) => n(t.detail);
  return (
    window.addEventListener("eip6963:announceProvider", e),
    window.dispatchEvent(new CustomEvent("eip6963:requestProvider")),
    () => window.removeEventListener("eip6963:announceProvider", e)
  );
}
function u() {
  let n = new Set(),
    e = [],
    t = () =>
      d((r) => {
        e.some(({ info: o }) => o.uuid === r.info.uuid) ||
          ((e = [...e, r]), n.forEach((o) => o(e, { added: [r] })));
      }),
    i = t();
  return {
    _listeners() {
      return n;
    },
    clear() {
      n.forEach((r) => r([], { removed: [...e] })), (e = []);
    },
    destroy() {
      this.clear(), n.clear(), i?.();
    },
    findProvider({ rdns: r }) {
      return e.find((o) => o.info.rdns === r);
    },
    getProviders() {
      return e;
    },
    reset() {
      this.clear(), i?.(), (i = t());
    },
    subscribe(r, { emitImmediately: o } = {}) {
      return n.add(r), o && r(e, { added: e }), () => n.delete(r);
    },
  };
}
export { s as a, u as b };
