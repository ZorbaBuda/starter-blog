"use client"
import { useTheme } from 'next-themes';
import GiscusComponent from '@giscus/react';
import { jsx } from 'react/jsx-runtime';

// src/comments/Giscus.tsx
var Giscus = ({
  themeURL,
  theme,
  darkTheme,
  repo,
  repositoryId,
  category,
  categoryId,
  reactions,
  metadata,
  inputPosition,
  lang,
  mapping
}) => {
  const { theme: nextTheme, resolvedTheme } = useTheme();
  const commentsTheme = themeURL === "" ? nextTheme === "dark" || resolvedTheme === "dark" ? darkTheme : theme : themeURL;
  const COMMENTS_ID = "comments-container";
  return /* @__PURE__ */ jsx(
    GiscusComponent,
    {
      id: COMMENTS_ID,
      repo,
      repoId: repositoryId,
      category,
      categoryId,
      mapping,
      reactionsEnabled: reactions,
      emitMetadata: metadata,
      inputPosition,
      theme: commentsTheme,
      lang,
      loading: "lazy"
    }
  );
};

export { Giscus };
