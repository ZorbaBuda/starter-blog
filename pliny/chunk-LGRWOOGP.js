"use client"
import { __spreadProps, __spreadValues, __objRest } from './chunk-4VSLFMH7.js';
import React, { useState, useCallback, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useRouter } from 'next/navigation.js';
import Link from 'next/link.js';
import { useDocSearchKeyboardEvents } from '@docsearch/react';
import { jsxs, jsx } from 'react/jsx-runtime';

var DocSearchModal = null;
var CustomLink = (_a) => {
  var _b = _a, { href } = _b, rest = __objRest(_b, ["href"]);
  const isInternalLink = href && href.startsWith("/");
  const isAnchorLink = href && href.startsWith("#");
  if (isInternalLink) {
    return /* @__PURE__ */ jsx(Link, __spreadValues({ href }, rest));
  }
  if (isAnchorLink) {
    return /* @__PURE__ */ jsx("a", __spreadValues({ href }, rest));
  }
  return /* @__PURE__ */ jsx("a", __spreadValues({ target: "_blank", rel: "noopener noreferrer", href }, rest));
};
function Hit({
  hit,
  children
}) {
  return /* @__PURE__ */ jsx(CustomLink, { href: hit.url, children });
}
var AlgoliaSearchContext = React.createContext(
  {}
);
var AlgoliaSearchProvider = (props) => {
  const { algoliaConfig } = props;
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [initialQuery, setInitialQuery] = useState(void 0);
  const importDocSearchModalIfNeeded = useCallback(() => {
    if (DocSearchModal) {
      return Promise.resolve();
    }
    return Promise.all([import('@docsearch/react')]).then(([{ DocSearchModal: Modal }]) => {
      DocSearchModal = Modal;
    });
  }, []);
  const onOpen = useCallback(() => {
    importDocSearchModalIfNeeded().then(() => {
      setIsOpen(true);
    });
  }, [importDocSearchModalIfNeeded, setIsOpen]);
  const onClose = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);
  const onInput = useCallback(
    (event) => {
      importDocSearchModalIfNeeded().then(() => {
        setIsOpen(true);
        setInitialQuery(event.key);
      });
    },
    [importDocSearchModalIfNeeded, setIsOpen, setInitialQuery]
  );
  const navigator = useRef({
    navigate({ itemUrl }) {
      const isInternalLink = itemUrl.startsWith("/");
      const isAnchorLink = itemUrl.startsWith("#");
      if (!isInternalLink && !isAnchorLink) {
        window.open(itemUrl, "_blank");
      } else {
        router.push(itemUrl);
      }
    }
  }).current;
  const transformItems = useRef(
    (items) => items.map((item) => {
      const isInternalLink = item.url.startsWith("/");
      const isAnchorLink = item.url.startsWith("#");
      if (!isInternalLink && !isAnchorLink) {
        return item;
      }
      const url = new URL(item.url);
      return __spreadProps(__spreadValues({}, item), {
        // url: withBaseUrl(`${url.pathname}${url.hash}`),
        url: `${url.pathname}${url.hash}`
      });
    })
  ).current;
  useDocSearchKeyboardEvents({
    isOpen,
    onOpen,
    onClose,
    onInput
  });
  return /* @__PURE__ */ jsxs(
    AlgoliaSearchContext.Provider,
    {
      value: { query: { setSearch: setInitialQuery, toggle: onOpen } },
      children: [
        props.children,
        isOpen && DocSearchModal && createPortal(
          /* @__PURE__ */ jsx(
            DocSearchModal,
            __spreadValues({
              onClose,
              initialScrollY: window.scrollY,
              initialQuery,
              navigator,
              transformItems,
              hitComponent: Hit
            }, algoliaConfig)
          ),
          document.body
        )
      ]
    }
  );
};

export { AlgoliaSearchContext, AlgoliaSearchProvider };
