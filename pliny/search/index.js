import { AlgoliaSearchProvider } from '../chunk-LGRWOOGP.js';
import { KBarSearchProvider } from '../chunk-WO2FOAH6.js';
import '../chunk-T2LUFWMO.js';
import '../chunk-R2UQHQLC.js';
import '../chunk-4VSLFMH7.js';
import { jsx, Fragment } from 'react/jsx-runtime';

var SearchProvider = ({ searchConfig, children }) => {
  if (searchConfig && searchConfig.provider) {
    switch (searchConfig.provider) {
      case "algolia":
        return /* @__PURE__ */ jsx(AlgoliaSearchProvider, { algoliaConfig: searchConfig.algoliaConfig, children });
      case "kbar":
        return /* @__PURE__ */ jsx(KBarSearchProvider, { kbarConfig: searchConfig.kbarConfig, children });
      default:
        console.log("No suitable provider found. Please choose from algolia or kbar.");
        return /* @__PURE__ */ jsx(Fragment, { children });
    }
  } else {
    return /* @__PURE__ */ jsx(Fragment, { children });
  }
};

export { SearchProvider };
