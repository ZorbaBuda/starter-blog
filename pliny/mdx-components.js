import { __objRest, __spreadValues } from './chunk-4VSLFMH7.js';
import React from 'react';
import * as _jsx_runtime from 'react/jsx-runtime';
import { jsx } from 'react/jsx-runtime';
import ReactDOM from 'react-dom';

var getMDXComponent = (code, globals = {}) => {
  const scope = __spreadValues({ React, ReactDOM, _jsx_runtime }, globals);
  const fn = new Function(...Object.keys(scope), code);
  return fn(...Object.values(scope)).default;
};
var useMDXComponent = (code, globals = {}) => {
  return React.useMemo(() => getMDXComponent(code, globals), [code, globals]);
};
var MDXLayoutRenderer = (_a) => {
  var _b = _a, { code, components } = _b, rest = __objRest(_b, ["code", "components"]);
  const Mdx = useMDXComponent(code);
  return /* @__PURE__ */ jsx(Mdx, __spreadValues({ components }, rest));
};

export { MDXLayoutRenderer, useMDXComponent };
