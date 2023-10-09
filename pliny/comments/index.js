import { Disqus } from '../chunk-R66XZDOX.js';
export { Disqus } from '../chunk-R66XZDOX.js';
import { Giscus } from '../chunk-VOQEO4FV.js';
export { Giscus } from '../chunk-VOQEO4FV.js';
import { Utterances } from '../chunk-ZAWHWS54.js';
export { Utterances } from '../chunk-ZAWHWS54.js';
import { __spreadValues } from '../chunk-4VSLFMH7.js';
import { jsx } from 'react/jsx-runtime';

var Comments = ({ commentsConfig, slug }) => {
  switch (commentsConfig.provider) {
    case "giscus":
      return /* @__PURE__ */ jsx(Giscus, __spreadValues({}, commentsConfig.giscusConfig));
    case "utterances":
      return /* @__PURE__ */ jsx(Utterances, __spreadValues({}, commentsConfig.utterancesConfig));
    case "disqus":
      return /* @__PURE__ */ jsx(Disqus, __spreadValues({ slug }, commentsConfig.disqusConfig));
  }
};

export { Comments };
