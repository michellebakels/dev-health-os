import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import vercel from '@astrojs/vercel/static';

// https://astro.build/config
export default defineConfig({
	output: 'static',
	adapter: vercel({
		webAnalytics: {
			enabled: true,
		},
	}),
	integrations: [
		starlight({
			title: 'Developer Health OS',
			logo: {
				src: './src/assets/logo.png',
			  },
			social: {
				"x.com": 'https://twitter.com/g2i_co',
			},
			customCss: [
				'./src/styles/custom.css',
				'./src/fonts/font-face.css',
			],
			components: {
				Head: './src/components/head.astro',
				ThemeSelect: './src/components/theme-select.astro',
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
								{ label: 'Is My Workplace "Workaholic"?', link: '/os/section2/is-my-workplace-workaholic' },
								{ label: 'What Makes a Non-workaholic Workplace?', link: '/os/section2/non-workaholic-workplace' },
								{ label: 'Boundaries With A Workaholic Workplace', link: '/os/section2/boundaries-with-a-workaholic-workplace' },
								{ label: 'Asking the Hard Question', link: '/os/section2/asking-the-hard-question' },
								{ label: 'People First Principles', link: '/os/section2/people-first-principles' },
							]
						},
						{ 
							label: 'Section 3: Optimization', 
							items: [
								{ label: 'Prioritizing Your Health: Glass vs Rubber', link: '/os/section3/prioritizing-your-health' },
								{ label: 'It Starts with Sleep', link: '/os/section3/it-starts-with-sleep' },
								{ label: 'Tracking Our Sleep', link: '/os/section3/tracking-our-sleep' },
								{ label: 'Sleep Efficiency and Optimization', link: '/os/section3/sleep-efficiency-and-optimization' },
								{ label: 'Finding the Right Mental Health Professional', link: '/os/section3/finding-the-right-professional' },
								{ label: 'Rewiring Our Brain', link: '/os/section3/rewiring-our-brain' },
								{ label: 'Improving Our Brain Health', link: '/os/section3/improving-our-brain-health' },
								{ label: 'Helping Your Brain Cells Work Better', link: '/os/section3/helping-brain-cells-work-better' },
								{ label: 'Helping Your Brain Rewire Itself', link: '/os/section3/helping-your-brain-rewire-itself' },
								{ label: 'QEEGs', link: '/os/section3/qeegs' },
								{ label: 'Neuromodulating Strategies', link: '/os/section3/neuromodulating-strategies' },
								{ label: 'Additional Neuromodulation Protocols', link: '/os/section3/additional-neuromodulation-protocols' },
								{ label: 'Team Health', link: '/os/section3/team-health' },
							]
						},
						{ 
							label: 'Conclusion', 
							items: [
								{ label: 'Recover, Prevent, Optimize', link: '/os/conclusion/recover-prevent-optimize' },
								{ label: 'Blaze Your Own (Neural) Path', link: '/os/conclusion/blaze-your-own-neural-path' },
								{ label: 'Home Base', link: '/os/conclusion/home-base' },
							]
						},
						{ label: 'About the Team', link: '/os/team/' },
					],
				},
				{
					label: 'Resources',
					items: [
						{ label: 'Resources for Burnout Recovery', link: '/resources/burnout-recovery/' },
						{ label: 'Resources for Burnout Prevention', link: '/resources/burnout-prevention/' },
						{ label: 'Resources for Optimum Performance', link: '/resources/optimum-performance/' },
						{ label: 'General Resources', link: '/resources/general-resources/' },
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
								{ label: 'CC #4: Burnout Prevention', link: '/workbook/cerebral-calisthenics/cc4' },
								{ label: 'CC #5: Optimum Performance', link: '/workbook/cerebral-calisthenics/cc5' },
								{ label: 'CC #6: Review', link: '/workbook/cerebral-calisthenics/cc6' },
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
