import { h as a, j as e } from "./chunk-U7GUEFJZ.js";
var n = class t {
  constructor() {}
  static getInstance({
    projectId: o,
    chainId: s,
    enableLogger: r,
    onTimeout: c,
    abortController: i,
    getActiveCaipNetwork: m,
    getCaipNetworks: p,
  }) {
    let { metadata: u, sdkVersion: d, sdkType: l } = e.getSnapshot();
    return (
      t.instance ||
        (t.instance = new a({
          projectId: o,
          chainId: s,
          enableLogger: r,
          onTimeout: c,
          abortController: i,
          getActiveCaipNetwork: m,
          getCaipNetworks: p,
          enableCloudAuthAccount: !!e.state.remoteFeatures?.emailCapture,
          metadata: u,
          sdkVersion: d,
          sdkType: l,
        })),
      t.instance
    );
  }
};
export { n as a };
