// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://powayunified.github.io',
	base: import.meta.env.PROD ? '/powayunified' : '/',
	integrations: [
		starlight({
			title: 'Communications EO Resources',
			favicon: './src/assets/favicon.ico',
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
						{ label: 'Getting Started', slug: 'start-here/example' },
					],
				},
				{
					label: 'Website',
					autogenerate: { directory: 'website' },
				},
				{
					label: 'Pattern Library',
					autogenerate: { directory: 'pattern-library' },
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
