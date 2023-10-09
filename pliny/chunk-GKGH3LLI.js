import Script from 'next/script.js';
import { jsx } from 'react/jsx-runtime';

// src/analytics/Umami.tsx
var Umami = ({
  umamiWebsiteId,
  src = "https://analytics.umami.is/script.js"
}) => {
  return /* @__PURE__ */ jsx(
    Script,
    {
      async: true,
      defer: true,
      "data-website-id": umamiWebsiteId,
      src
    }
  );
};

export { Umami };
