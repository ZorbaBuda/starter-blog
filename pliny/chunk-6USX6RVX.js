import { __async } from './chunk-4VSLFMH7.js';

// src/newsletter/emailOctopus.ts
var emailOctopusSubscribe = (email) => __async(void 0, null, function* () {
  const API_KEY = process.env.EMAILOCTOPUS_API_KEY;
  const LIST_ID = process.env.EMAILOCTOPUS_LIST_ID;
  const API_URL = "https://emailoctopus.com/api/1.6/";
  const data = { email_address: email, api_key: API_KEY };
  const API_ROUTE = `${API_URL}lists/${LIST_ID}/contacts`;
  const response = yield fetch(API_ROUTE, {
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST"
  });
  return response;
});

export { emailOctopusSubscribe };
