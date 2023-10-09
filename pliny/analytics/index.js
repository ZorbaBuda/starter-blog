import { GA } from '../chunk-3UXFYKL4.js';
export { GA } from '../chunk-3UXFYKL4.js';
import { Plausible } from '../chunk-VFJPW4FW.js';
export { Plausible } from '../chunk-VFJPW4FW.js';
import { Posthog } from '../chunk-3S7SN5PF.js';
export { Posthog } from '../chunk-3S7SN5PF.js';
import { SimpleAnalytics } from '../chunk-ADZDD6J7.js';
export { SimpleAnalytics } from '../chunk-ADZDD6J7.js';
import { Umami } from '../chunk-GKGH3LLI.js';
export { Umami } from '../chunk-GKGH3LLI.js';
import { __spreadValues } from '../chunk-4VSLFMH7.js';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';

var isProduction = process.env.NODE_ENV === "production";
var Analytics = ({ analyticsConfig }) => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    isProduction && analyticsConfig.plausibleAnalytics && /* @__PURE__ */ jsx(Plausible, __spreadValues({}, analyticsConfig.plausibleAnalytics)),
    isProduction && analyticsConfig.simpleAnalytics && /* @__PURE__ */ jsx(SimpleAnalytics, __spreadValues({}, analyticsConfig.simpleAnalytics)),
    isProduction && analyticsConfig.posthogAnalytics && /* @__PURE__ */ jsx(Posthog, __spreadValues({}, analyticsConfig.posthogAnalytics)),
    isProduction && analyticsConfig.umamiAnalytics && /* @__PURE__ */ jsx(Umami, __spreadValues({}, analyticsConfig.umamiAnalytics)),
    isProduction && analyticsConfig.googleAnalytics && /* @__PURE__ */ jsx(GA, __spreadValues({}, analyticsConfig.googleAnalytics))
  ] });
};

export { Analytics };
