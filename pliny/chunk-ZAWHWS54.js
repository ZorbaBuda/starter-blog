"use client"
import { useCallback, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { jsx } from 'react/jsx-runtime';

// src/comments/Utterances.tsx
var Utterances = ({ theme, darkTheme, repo, label, issueTerm }) => {
  const { theme: nextTheme, resolvedTheme } = useTheme();
  const commentsTheme = nextTheme === "dark" || resolvedTheme === "dark" ? darkTheme : theme;
  const COMMENTS_ID = "comments-container";
  const LoadComments = useCallback(() => {
    const script = document.createElement("script");
    script.src = "https://utteranc.es/client.js";
    script.setAttribute("repo", repo);
    script.setAttribute("issue-term", issueTerm);
    script.setAttribute("label", label);
    script.setAttribute("theme", commentsTheme);
    script.setAttribute("crossorigin", "anonymous");
    script.async = true;
    const comments = document.getElementById(COMMENTS_ID);
    if (comments)
      comments.appendChild(script);
    return () => {
      const comments2 = document.getElementById(COMMENTS_ID);
      if (comments2)
        comments2.innerHTML = "";
    };
  }, [commentsTheme, issueTerm, label, repo]);
  useEffect(() => {
    LoadComments();
  }, [LoadComments]);
  return /* @__PURE__ */ jsx("div", { className: "utterances-frame relative", id: COMMENTS_ID });
};

export { Utterances };
