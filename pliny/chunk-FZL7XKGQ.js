import { __async } from './chunk-4VSLFMH7.js';
import mailchimp from '@mailchimp/mailchimp_marketing';

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_API_SERVER
  // E.g. us1
});
var mailchimpSubscribe = (email) => __async(void 0, null, function* () {
  const response = yield mailchimp.lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID, {
    email_address: email,
    status: "subscribed"
  });
  return response;
});

export { mailchimpSubscribe };
