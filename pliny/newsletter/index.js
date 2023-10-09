import { buttondownSubscribe } from '../chunk-WWM27SUZ.js';
import { convertkitSubscribe } from '../chunk-ELKHIQ6D.js';
import { emailOctopusSubscribe } from '../chunk-6USX6RVX.js';
import { klaviyoSubscribe } from '../chunk-UII4YXFZ.js';
import { mailchimpSubscribe } from '../chunk-FZL7XKGQ.js';
import { revueSubscribe } from '../chunk-R6WUMPW5.js';
import { __async } from '../chunk-4VSLFMH7.js';
import { NextResponse } from 'next/server';

function NewsletterAPIHandler(req, res, options) {
  return __async(this, null, function* () {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }
    try {
      let response;
      switch (options.provider) {
        case "buttondown":
          response = yield buttondownSubscribe(email);
          break;
        case "convertkit":
          response = yield convertkitSubscribe(email);
          break;
        case "mailchimp":
          response = yield mailchimpSubscribe(email);
          break;
        case "klaviyo":
          response = yield klaviyoSubscribe(email);
          break;
        case "revue":
          response = yield revueSubscribe(email);
          break;
        case "emailoctopus":
          response = yield emailOctopusSubscribe(email);
          break;
        default:
          res.status(500).json({ error: `${options.provider} not supported` });
      }
      if (response.status >= 400) {
        res.status(response.status).json({ error: `There was an error subscribing to the list.` });
      }
      res.status(201).json({ message: "Successfully subscribed to the newsletter" });
    } catch (error) {
      res.status(500).json({ error: error.message || error.toString() });
    }
  });
}
function NewsletterRouteHandler(req, options) {
  return __async(this, null, function* () {
    const { email } = yield req.json();
    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }
    try {
      let response;
      switch (options.provider) {
        case "buttondown":
          response = yield buttondownSubscribe(email);
          break;
        case "convertkit":
          response = yield convertkitSubscribe(email);
          break;
        case "mailchimp":
          response = yield mailchimpSubscribe(email);
          break;
        case "klaviyo":
          response = yield klaviyoSubscribe(email);
          break;
        case "revue":
          response = yield revueSubscribe(email);
          break;
        case "emailoctopus":
          response = yield emailOctopusSubscribe(email);
          break;
        default:
          return NextResponse.json({ error: `${options.provider} not supported` }, { status: 500 });
      }
      if (response.status >= 400) {
        return NextResponse.json(
          { error: `There was an error subscribing to the list` },
          { status: response.status }
        );
      }
      return NextResponse.json(
        { message: "Successfully subscribed to the newsletter" },
        { status: 201 }
      );
    } catch (error) {
      return NextResponse.json({ error: error.message || error.toString() }, { status: 500 });
    }
  });
}
function NewsletterAPI(...args) {
  if (args.length === 1) {
    return (req, res) => __async(this, null, function* () {
      if ("params" in res) {
        return yield NewsletterRouteHandler(req, args[0]);
      }
      return yield NewsletterAPIHandler(req, res, args[0]);
    });
  }
  if (args.length === 2) {
    return NewsletterRouteHandler(...args);
  }
  return NewsletterAPIHandler(...args);
}

export { NewsletterAPI };
