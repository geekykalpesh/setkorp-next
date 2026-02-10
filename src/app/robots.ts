import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: ['GPTBot', 'ChatGPT-User', 'ClaudeBot', 'Claude-Web', 'Googlebot', 'Bingbot', 'Applebot'],
        allow: '/',
      }
    ],
    sitemap: [
      'https://setkorp.ae/sitemap.xml',
      'https://setkorp.ae/sitemap.txt'
    ],
  }
}
