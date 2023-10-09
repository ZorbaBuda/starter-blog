"use client"
import { __objRest, __spreadProps, __spreadValues } from '../chunk-4VSLFMH7.js';
import { useKBar } from 'kbar';
import { jsx } from 'react/jsx-runtime';

var KBarButton = (_a) => {
  var _b = _a, {
    children
  } = _b, rest = __objRest(_b, [
    "children"
  ]);
  const { query } = useKBar();
  return /* @__PURE__ */ jsx("button", __spreadProps(__spreadValues({}, rest), { onClick: () => query.toggle(), children }));
};

export { KBarButton };
