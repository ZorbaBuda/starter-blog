import { __async } from './chunk-4VSLFMH7.js';

// src/newsletter/convertkit.ts
var convertkitSubscribe = (email) => __async(void 0, null, function* () {
  const FORM_ID = process.env.CONVERTKIT_FORM_ID;
  const API_KEY = process.env.CONVERTKIT_API_KEY;
  const API_URL = "https://api.convertkit.com/v3/";
  const data = { email, api_key: API_KEY };
  const response = yield fetch(`${API_URL}forms/${FORM_ID}/subscribe`, {
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST"
  });
  return response;
});

export { convertkitSubscribe };
