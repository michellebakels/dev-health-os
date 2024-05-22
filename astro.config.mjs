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
					label: 'Developer Health OS',
					items: [
						{ 
							label: 'Introduction', 
							items: [
								{ label: 'What is this?', link: '/os/introduction/what-is-this/' },
								{ label: 'Who is this designed for?', link: '/os/introduction/who-is-this-for/' },
								{ label: 'What can this help with?', link: '/os/introduction/what-can-it-help-with/' },
							]
						},
						{ label: 'Restful Work: Our Ultimate Goal', link: '/os/restful-work/' },
						{ 
							label: 'Section 1: Burnout Recovery', 
							items: [
								{ label: 'The Problem of Burnout', link: '/os/section1/the-problem-of-burnout' },
							]
						},
					],
				},
				{
					label: 'Workbook',
					items: [
						{ 
							label: 'Introduction', 
							items: [
								{ label: 'How to use this workbook', link: '/workbook/introduction/how-to-use-this/' },
							]
						},
						{ 
							label: 'Cerebral Calisthenics #1', 
							items: [
								{ label: 'Begin with the end in mind', link: '/workbook/cc1/cc1-1/' },
							]
						},
					],
				}
				/* {
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				}, */
			],
		}),
	],
});
