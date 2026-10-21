import {identity} from './profile';

// Confirmed public portfolio origin. Never derive canonical URLs from request headers.
export const siteUrl = 'https://raeynwa.my.id';

export const socialImage = {url: `${siteUrl}/opengraph-image`, width: 1200, height: 630, alt: `${identity.name} — web applications, systems architecture, and selected work`};

export const portfolioOpenGraph = {
  title: `${identity.name} — ${identity.headline}`,
  description: `Selected projects and the work behind them, by full-stack engineer and system architect ${identity.name}.`,
  siteName: `${identity.name} — Portfolio`,
  locale: 'en_US',
  type: 'website' as const,
  images: [socialImage],
};
