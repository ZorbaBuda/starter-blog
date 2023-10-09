"use client"
import { formatDate } from './chunk-T2LUFWMO.js';
import { KBarModal } from './chunk-R2UQHQLC.js';
import { __async } from './chunk-4VSLFMH7.js';
import { useState, useEffect } from 'react';
import { KBarProvider } from 'kbar';
import { useRouter } from 'next/navigation.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var KBarSearchProvider = ({ kbarConfig, children }) => {
  const router = useRouter();
  const { searchDocumentsPath, defaultActions, onSearchDocumentsLoad } = kbarConfig;
  const [searchActions, setSearchActions] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);
  useEffect(() => {
    const mapPosts = (posts) => {
      const actions = [];
      for (const post of posts) {
        actions.push({
          id: post.path,
          name: post.title,
          keywords: (post == null ? void 0 : post.summary) || "",
          section: "Content",
          subtitle: formatDate(post.date, "en-US"),
          perform: () => router.push("/" + post.path)
        });
      }
      return actions;
    };
    function fetchData() {
      return __async(this, null, function* () {
        if (searchDocumentsPath) {
          const url = searchDocumentsPath.indexOf("://") > 0 || searchDocumentsPath.indexOf("//") === 0 ? searchDocumentsPath : new URL(searchDocumentsPath, window.location.origin);
          const res = yield fetch(url);
          const json = yield res.json();
          const actions = onSearchDocumentsLoad ? onSearchDocumentsLoad(json) : mapPosts(json);
          setSearchActions(actions);
          setDataLoaded(true);
        }
      });
    }
    if (!dataLoaded && searchDocumentsPath) {
      fetchData();
    } else {
      setDataLoaded(true);
    }
  }, [defaultActions, dataLoaded, router, searchDocumentsPath, onSearchDocumentsLoad]);
  return /* @__PURE__ */ jsxs(KBarProvider, { actions: defaultActions, children: [
    /* @__PURE__ */ jsx(KBarModal, { actions: searchActions, isLoading: !dataLoaded }),
    children
  ] });
};

export { KBarSearchProvider };
