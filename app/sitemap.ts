import { MetadataRoute } from 'next';

const BASE_URL = 'https://www.freeroofpros.com';

const staticRoutes: Array<{
  route: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
}> = [
  { route: '/', priority: 1.0, changeFrequency: 'weekly' },
  { route: '/faq', priority: 0.8, changeFrequency: 'monthly' },
  { route: '/services', priority: 0.8, changeFrequency: 'monthly' },
  { route: '/roof-replacement', priority: 0.8, changeFrequency: 'monthly' },
  { route: '/bend-or', priority: 0.9, changeFrequency: 'monthly' },
  { route: '/redmond-or', priority: 0.9, changeFrequency: 'monthly' },
  { route: '/la-pine-or', priority: 0.9, changeFrequency: 'monthly' },
  { route: '/dallas-hail-damage-roof', priority: 0.8, changeFrequency: 'monthly' },
  { route: '/houston-storm-damage-claims', priority: 0.8, changeFrequency: 'monthly' },
  { route: '/texas-roof-replacement', priority: 0.8, changeFrequency: 'monthly' },
  { route: '/blog', priority: 0.8, changeFrequency: 'weekly' },
  { route: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' },
  { route: '/terms-of-service', priority: 0.3, changeFrequency: 'yearly' },
  { route: '/thank-you', priority: 0.3, changeFrequency: 'yearly' },
];

const blogSlugs: string[] = [
  'central-oregon-hailstorm-2025',
  'choosing-roofing-contractor-bend-oregon',
  'dfw-hailstorm-insurance-claim',
  'indianapolis-hail-damage-claim',
  'kansas-city-hail-insurance-claim',
  'nashville-storm-damage-claim',
  'st-louis-tornado-insurance-claim',
  'does-homeowners-insurance-cover-roof-replacement',
  'filing-roof-insurance-claim-oregon-guide',
  'hail-damage-roof-inspection-what-happens',
  'how-long-to-file-roof-insurance-claim',
  'how-to-negotiate-roof-insurance-claim',
  'how-to-spot-hail-damage-central-oregon',
  'oregon-roof-insurance-claim-deadline',
  'rcv-vs-acv-roof-insurance',
  'roof-insurance-claim-denied',
  'roof-insurance-claim-process-step-by-step',
  'roof-replacement-cost-by-state',
  'signs-of-hail-damage-on-roof',
  'storm-chaser-roofer-scams',
  'what-to-expect-insurance-adjuster-roof-inspection',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map(({ route, priority, changeFrequency }) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));

  const blogEntries: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...staticEntries, ...blogEntries];
}
