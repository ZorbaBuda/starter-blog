"use client"
import { AlgoliaSearchContext } from '../chunk-LGRWOOGP.js';
import { __objRest, __spreadProps, __spreadValues } from '../chunk-4VSLFMH7.js';
import { useContext } from 'react';
import { jsx } from 'react/jsx-runtime';

var AlgoliaButton = (_a) => {
  var _b = _a, {
    children
  } = _b, rest = __objRest(_b, [
    "children"
  ]);
  const { query } = useContext(AlgoliaSearchContext);
  return /* @__PURE__ */ jsx("button", __spreadProps(__spreadValues({}, rest), { onClick: () => query.toggle(), children }));
};

export { AlgoliaButton };
