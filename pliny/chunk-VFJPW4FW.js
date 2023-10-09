import Script from 'next/script.js';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';

// src/analytics/Plausible.tsx
var Plausible = ({
  plausibleDataDomain,
  dataApi = void 0,
  src = "https://plausible.io/js/plausible.js"
}) => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      Script,
      {
        strategy: "lazyOnload",
        "data-domain": plausibleDataDomain,
        "data-api": dataApi,
        src
      }
    ),
    /* @__PURE__ */ jsx(Script, { strategy: "lazyOnload", id: "plausible-script", children: `
            window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }
        ` })
  ] });
};
var logEvent = (eventName, ...rest) => {
  var _a;
  return (_a = window.plausible) == null ? void 0 : _a.call(window, eventName, ...rest);
};

export { Plausible, logEvent };
