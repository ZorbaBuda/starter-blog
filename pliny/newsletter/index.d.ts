import { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest } from 'next/server';

interface NewsletterConfig {
    provider: 'buttondown' | 'convertkit' | 'klaviyo' | 'mailchimp' | 'revue' | 'emailoctopus';
}
interface NewsletterRequest extends NextApiRequest {
    options: NewsletterConfig;
}
type NewsletterResponse<T = any> = NextApiResponse<T>;
declare function NewsletterAPI(options: NewsletterConfig): any;
declare function NewsletterAPI(req: NextRequest, options: NewsletterConfig): any;
declare function NewsletterAPI(req: NextApiRequest, res: NextApiResponse, options: NewsletterConfig): any;

export { NewsletterAPI, NewsletterConfig, NewsletterRequest, NewsletterResponse };
