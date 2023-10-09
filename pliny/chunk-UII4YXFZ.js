import { __async } from './chunk-4VSLFMH7.js';

// src/newsletter/klaviyo.ts
var klaviyoSubscribe = (email) => __async(void 0, null, function* () {
  const API_KEY = process.env.KLAVIYO_API_KEY;
  const LIST_ID = process.env.KLAVIYO_LIST_ID;
  const response = yield fetch(
    `https://a.klaviyo.com/api/v2/list/${LIST_ID}/subscribe?api_key=${API_KEY}`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      // You can add additional params here i.e. SMS, etc.
      // https://developers.klaviyo.com/en/reference/subscribe
      body: JSON.stringify({
        profiles: [{ email }]
      })
    }
  );
  return response;
});

export { klaviyoSubscribe };
