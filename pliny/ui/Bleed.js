import { jsx } from 'react/jsx-runtime';

// src/ui/Bleed.tsx
var Bleed = ({ full, children }) => {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: `relative mt-6 ${full ? "ml-[calc(-50vw+50%)] mr-[calc(-50vw+50%)]" : "-mx-6 md:-mx-8 2xl:-mx-24"}`,
      children
    }
  );
};
var Bleed_default = Bleed;

export { Bleed_default as default };
