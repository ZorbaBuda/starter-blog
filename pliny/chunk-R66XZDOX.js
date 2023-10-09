"use client"
import { useCallback, useEffect } from 'react';
import { jsx } from 'react/jsx-runtime';

// src/comments/Disqus.tsx
var Disqus = ({ shortname, slug }) => {
  const COMMENTS_ID = "disqus_thread";
  const LoadComments = useCallback(() => {
    window.disqus_config = function() {
      this.page.url = window.location.href;
      this.page.identifier = slug;
    };
    if (window.DISQUS === void 0) {
      const script = document.createElement("script");
      script.src = "https://" + shortname + ".disqus.com/embed.js";
      script.setAttribute("data-timestamp", +/* @__PURE__ */ new Date());
      script.setAttribute("crossorigin", "anonymous");
      script.async = true;
      document.body.appendChild(script);
    } else {
      window.DISQUS.reset({ reload: true });
    }
  }, [shortname, slug]);
  useEffect(() => {
    LoadComments();
  }, [LoadComments]);
  return /* @__PURE__ */ jsx("div", { className: "disqus-frame", id: COMMENTS_ID });
};

export { Disqus };
