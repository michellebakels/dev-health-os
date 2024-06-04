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
								{ label: 'Setting Time Expectations', link: '/os/section1/setting-time-expectations' },
								{ label: 'Setting Cost Expectations', link: '/os/section1/setting-cost-expectations' },
								{ label: 'Developer Health Fund', link: '/os/section1/developer-health-fund' },
								{ label: 'Diagnostics and Data', link: '/os/section1/diagnostics-and-data' },
								{ label: 'TASHA', link: '/os/section1/tasha' },
							]
						},
						{ 
							label: 'Section 2: Burnout Prevention', 
							items: [
								{ label: 'Adrenalizing', link: '/os/section2/adrenalizing' },
								{ label: 'Slowing Down', link: '/os/section2/slowing-down' },
								{ label: 'How to Slow Down', link: '/os/section2/how-to-slow-down' },
								{ label: 'Using the Tools', link: '/os/section2/using-the-tools' },
								{ label: 'Discovering Ourselves', link: '/os/section2/discovering-ourselves' },
								{ label: 'Technical Debt of Life', link: '/os/section2/technical-debt-of-life' },
								{ label: 'Boundaries with Work and Technology', link: '/os/section2/boundaries' },
								{ label: 'Creating Top Lines, Middle Lines, and Bottom Lines', link: '/os/section2/top-middle-bottom-lines' },
								{ label: 'Does Our Time Align With What Matters Most?', link: '/os/section2/does-our-time-align' },
								{ label: 'Reducing Internal & External Pressure', link: '/os/section2/reducing-pressure' },
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
								{ label: 'CC #3: Burnout Recovery', link: '/workbook/cerebral-calisthenics/cc3' },
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
