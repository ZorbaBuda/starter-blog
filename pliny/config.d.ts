import { AnalyticsConfig } from './analytics/index.js';
import { CommentsConfig } from './comments/index.js';
import { NewsletterConfig } from './newsletter/index.js';
import { SearchConfig } from './search/index.js';
import 'react/jsx-runtime';
import './analytics/GoogleAnalytics.js';
import './analytics/Plausible.js';
import './analytics/SimpleAnalytics.js';
import './analytics/Umami.js';
import './analytics/Posthog.js';
import './comments/Disqus.js';
import './comments/Giscus.js';
import '@giscus/react';
import './comments/Utterances.js';
import 'next';
import 'next/server';
import 'react';
import './search/Algolia.js';
import '@docsearch/react';
import './search/KBar.js';
import 'kbar';

interface CoreConfig {
    title: string;
    author: string;
    headerTitle: string;
    description: string;
    language: string;
    /** light and dark */
    theme: 'system' | 'dark' | 'light';
    siteUrl: string;
    siteRepo: string;
    siteLogo: string;
    image: string;
    socialBanner: string;
    email: string;
    github: string;
    twitter?: string;
    facebook?: string;
    youtube?: string;
    linkedin?: string;
    locale: string;
}
type PlinyConfig = Record<string, any> & CoreConfig & {
    analytics?: AnalyticsConfig;
    comments?: CommentsConfig;
    newsletter?: NewsletterConfig;
    search?: SearchConfig;
};

export { CoreConfig, PlinyConfig };
