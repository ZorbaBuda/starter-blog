import Script from 'next/script.js';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';

// src/analytics/GoogleAnalytics.tsx
var GA = ({ googleAnalyticsId }) => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      Script,
      {
        strategy: "afterInteractive",
        src: `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`
      }
    ),
    /* @__PURE__ */ jsx(Script, { strategy: "afterInteractive", id: "ga-script", children: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${googleAnalyticsId}');
        ` })
  ] });
};
var logEvent = (action, category, label, value) => {
  var _a;
  (_a = window.gtag) == null ? void 0 : _a.call(window, "event", action, {
    event_category: category,
    event_label: label,
    value
  });
};

export { GA, logEvent };
