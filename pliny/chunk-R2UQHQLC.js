"use client"
import { useRegisterActions, KBarPortal, KBarPositioner, KBarAnimator, KBarSearch, useMatches, KBarResults } from 'kbar';
import { jsx, jsxs } from 'react/jsx-runtime';

// src/search/KBarModal.tsx
var KBarModal = ({ actions, isLoading }) => {
  useRegisterActions(actions, [actions]);
  return /* @__PURE__ */ jsx(KBarPortal, { children: /* @__PURE__ */ jsx(KBarPositioner, { className: "bg-gray-300/50 p-4 backdrop-blur backdrop-filter dark:bg-black/50", children: /* @__PURE__ */ jsx(KBarAnimator, { className: "w-full max-w-xl", children: /* @__PURE__ */ jsxs("div", { className: "overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 dark:border-gray-800 dark:bg-gray-900", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4 p-4", children: [
      /* @__PURE__ */ jsx("span", { className: "block w-5", children: /* @__PURE__ */ jsx(
        "svg",
        {
          className: "text-gray-400 dark:text-gray-300",
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          stroke: "currentColor",
          children: /* @__PURE__ */ jsx(
            "path",
            {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
              d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            }
          )
        }
      ) }),
      /* @__PURE__ */ jsx(KBarSearch, { className: "h-8 w-full bg-transparent text-gray-600 placeholder-gray-400 focus:outline-none dark:text-gray-200 dark:placeholder-gray-500" }),
      /* @__PURE__ */ jsx("kbd", { className: "inline-block whitespace-nowrap rounded border px-1.5 align-middle font-medium leading-4 tracking-wide text-xs text-gray-400 border-gray-400", children: "ESC" })
    ] }),
    !isLoading && /* @__PURE__ */ jsx(RenderResults, {}),
    isLoading && /* @__PURE__ */ jsx("div", { className: "block border-t border-gray-100 px-4 py-8 text-center text-gray-400 dark:border-gray-800 dark:text-gray-600", children: "Loading..." })
  ] }) }) }) });
};
var RenderResults = () => {
  const { results } = useMatches();
  if (results.length) {
    return /* @__PURE__ */ jsx(
      KBarResults,
      {
        items: results,
        onRender: ({ item, active }) => {
          var _a;
          return /* @__PURE__ */ jsx("div", { children: typeof item === "string" ? /* @__PURE__ */ jsx("div", { className: "pt-3", children: /* @__PURE__ */ jsx("div", { className: "block border-t border-gray-100 px-4 pb-2 pt-6 text-xs font-semibold uppercase text-primary-600 dark:border-gray-800", children: item }) }) : /* @__PURE__ */ jsxs(
            "div",
            {
              className: `flex cursor-pointer justify-between px-4 py-2 ${active ? "bg-primary-600 text-gray-100" : "text-gray-700 dark:text-gray-100 bg-transparent"}`,
              children: [
                /* @__PURE__ */ jsxs("div", { className: "block", children: [
                  item.subtitle && /* @__PURE__ */ jsx("div", { className: `${active ? "text-gray-200" : "text-gray-400"} text-xs`, children: item.subtitle }),
                  /* @__PURE__ */ jsx("div", { children: item.name })
                ] }),
                ((_a = item.shortcut) == null ? void 0 : _a.length) ? /* @__PURE__ */ jsx("div", { "aria-hidden": true, className: "flex flex-row items-center justify-center gap-x-2", children: item.shortcut.map((sc) => /* @__PURE__ */ jsx(
                  "kbd",
                  {
                    className: `font-medium h-7 w-6 flex items-center	justify-center text-xs rounded border ${active ? "text-gray-200 border-gray-200" : "text-gray-400 border-gray-400"}`,
                    children: sc
                  },
                  sc
                )) }) : null
              ]
            }
          ) });
        }
      }
    );
  } else {
    return /* @__PURE__ */ jsx("div", { className: "block border-t border-gray-100 px-4 py-8 text-center text-gray-400 dark:border-gray-800 dark:text-gray-600", children: "No results for your search..." });
  }
};

export { KBarModal };
