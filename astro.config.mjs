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
								{ label: 'The Solution of Restful Work', link: '/os/section1/the-solution-of-restful-work' },
								{ label: 'The Framework Principles', link: '/os/section1/the-framework-principles' },
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
							label: 'Cerebral Calisthenics', 
							items: [
								{ label: 'CC #1: Begin with the end in mind', link: '/workbook/cerebral-calisthenics/cc1' },
								{ label: 'CC #2: Indentifying your level of burnout', link: '/workbook/cerebral-calisthenics/cc2' },
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
