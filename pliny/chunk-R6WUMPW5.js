import { __async } from './chunk-4VSLFMH7.js';

// src/newsletter/revue.ts
var revueSubscribe = (email) => __async(void 0, null, function* () {
  const API_KEY = process.env.REVUE_API_KEY;
  const API_URL = "https://www.getrevue.co/api/v2/";
  const revueRoute = `${API_URL}subscribers`;
  const response = yield fetch(revueRoute, {
    method: "POST",
    headers: {
      Authorization: `Token ${API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, double_opt_in: false })
  });
  return response;
});

export { revueSubscribe };
