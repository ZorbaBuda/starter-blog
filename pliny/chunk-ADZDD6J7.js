import Script from 'next/script.js';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';

// src/analytics/SimpleAnalytics.tsx
var SimpleAnalytics = ({
  src = "https://scripts.simpleanalyticscdn.com/latest.js"
}) => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Script, { strategy: "lazyOnload", id: "sa-script", children: `
            window.sa_event=window.sa_event||function(){var a=[].slice.call(arguments);window.sa_event.q?window.sa_event.q.push(a):window.sa_event.q=[a]};
        ` }),
    /* @__PURE__ */ jsx(Script, { strategy: "lazyOnload", src })
  ] });
};
var logEvent = (eventName, callback) => {
  var _a, _b;
  if (callback) {
    return (_a = window.sa_event) == null ? void 0 : _a.call(window, eventName, callback);
  } else {
    return (_b = window.sa_event) == null ? void 0 : _b.call(window, eventName);
  }
};

export { SimpleAnalytics, logEvent };
