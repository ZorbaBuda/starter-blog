import { __async } from './chunk-4VSLFMH7.js';

// src/newsletter/buttondown.ts
var buttondownSubscribe = (email) => __async(void 0, null, function* () {
  const API_KEY = process.env.BUTTONDOWN_API_KEY;
  const API_URL = "https://api.buttondown.email/v1/";
  const buttondownRoute = `${API_URL}subscribers`;
  const response = yield fetch(buttondownRoute, {
    body: JSON.stringify({
      email
    }),
    headers: {
      Authorization: `Token ${API_KEY}`,
      "Content-Type": "application/json"
    },
    method: "POST"
  });
  return response;
});

export { buttondownSubscribe };
