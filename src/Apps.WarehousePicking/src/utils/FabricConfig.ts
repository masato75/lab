// Keep Fluent v8's icon font local; Power Apps CSP blocks the default Microsoft font CDN.
declare global {
  interface Window {
    FabricConfig?: { iconBaseUrl?: string; fontBaseUrl?: string };
  }
}

window.FabricConfig = { iconBaseUrl: new URL("fonts/", location.href).href, fontBaseUrl: "" };

export {};
