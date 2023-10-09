import '../chunk-4VSLFMH7.js';

// src/utils/htmlEscaper.ts
var { replace } = "";
var ca = /[&<>'"]/g;
var esca = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  "'": "&#39;",
  '"': "&quot;"
};
var pe = (m) => esca[m];
var escape = (es) => replace.call(es, ca, pe);

export { escape };
