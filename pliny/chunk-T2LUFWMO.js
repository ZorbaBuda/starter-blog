// src/utils/formatDate.ts
var formatDate = (date, locale = "en-US") => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  const now = new Date(date).toLocaleDateString(locale, options);
  return now;
};

export { formatDate };
