import '../chunk-4VSLFMH7.js';

// src/utils/contentlayer.ts
var isProduction = process.env.NODE_ENV === "production";
function dateSortDesc(a, b) {
  if (a > b)
    return -1;
  if (a < b)
    return 1;
  return 0;
}
function sortPosts(allBlogs, dateKey = "date") {
  return allBlogs.sort((a, b) => dateSortDesc(a[dateKey], b[dateKey]));
}
function sortedBlogPost(allBlogs) {
  return sortPosts(allBlogs);
}
var pick = (obj, keys) => {
  return keys.reduce((acc, key) => {
    var _a;
    acc[key] = (_a = obj[key]) != null ? _a : null;
    return acc;
  }, {});
};
var omit = (obj, keys) => {
  const result = Object.assign({}, obj);
  keys.forEach((key) => {
    delete result[key];
  });
  return result;
};
function coreContent(content) {
  return omit(content, ["body", "_raw", "_id"]);
}
function allCoreContent(contents) {
  if (isProduction)
    return contents.map((c) => coreContent(c)).filter((c) => !("draft" in c && c.draft === true));
  return contents.map((c) => coreContent(c));
}

export { allCoreContent, coreContent, dateSortDesc, omit, pick, sortPosts, sortedBlogPost };
