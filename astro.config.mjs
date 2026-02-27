// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://communications.powayusd.com',
  base: '/',

  integrations: [
      starlight({
          title: 'Communications EO Resources',
          favicon: '/favicon.ico',
          customCss: ['./src/styles/custom.css'],
          head: [
                  // Add a custom meta tag to define the author of all pages
                  {
                  tag: 'meta',
                  attrs: {
                      name: 'robots',
                      content: 'noindex, nofollow',
                  },
                  },
                  // Add other global meta tags as needed
              ],
          sidebar: [
              {
                  label: 'Start Here',
                  items: [
                      // Each item here is one entry in the navigation menu.
                      { label: 'Getting Started', slug: 'start-here/getting-started' },
                  ],
              },
              {
                  label: 'Website',
                  items: [
                      { label: 'Introduction', slug: 'website/edlio' },
                      { label: 'WYSIWYG Editor', slug: 'website/wysiwyg' },
                      { label: 'Preview Mode', slug: 'website/preview' },
                      {
                          label: 'Pattern Library',
                          items: [
                              { label: 'Alert', slug: 'website/pattern-library/alert' },
                              { label: 'Badge', slug: 'website/pattern-library/badge' },
                              { label: 'Button', slug: 'website/pattern-library/button' },
                              { label: 'Card', slug: 'website/pattern-library/card' },
                              { label: 'Compare Chart', slug: 'website/pattern-library/compare-chart' },
                              { label: 'Hero', slug: 'website/pattern-library/hero' },
                              { label: 'Table of Contents', slug: 'website/pattern-library/table-of-contents' },
                              { label: 'Table', slug: 'website/pattern-library/table' },
                          ],
                      },
                  ],
              },
              {
                  label: 'Flyers',
                  items: [
                      { label: 'Introduction', slug: 'flyers/introduction' },
                      { 
                          label: 'Canva',
                          items: [
                              { label: 'Getting Started', slug: 'flyers/canva/getting-started' },
                              { label: 'Templates', slug: 'flyers/canva/templates' },
                          ]
                      },
                      { 
                          label: 'Peachjar',
                          items: [
                              { label: 'Getting Started', slug: 'flyers/peachjar/getting-started' },
                              { label: 'Templates', slug: 'flyers/peachjar/templates' },
                          ]
                      }
                  ],
              },
                  {
                  label: 'Reference',
                  autogenerate: { directory: 'reference' },
              },
              {
                  label: 'Support',
                  autogenerate: { directory: 'support' },
              },
          ],
      }),
	],

  adapter: cloudflare(),
});