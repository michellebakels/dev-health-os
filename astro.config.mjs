import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Developer Health OS',
			social: {
				twitter: 'https://twitter.com/g2i_co',
			},
			sidebar: [
				{
					label: 'Introduction',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'What is this?', link: '/intro/what-is-this/' },
						{ label: 'Who is this designed for?', link: '/intro/who-is-this-for/' },
						{ label: 'What can this help with?', link: '/intro/what-can-it-help-with/' },
						{ label: 'Who created the OS?', link: '/intro/who-created-the-os/' },
						{ label: 'How does it work?', link: '/intro/how-does-it-work/' },
					],
				},
				/* {
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				}, */
			],
		}),
	],
});
