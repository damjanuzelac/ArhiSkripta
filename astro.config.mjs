import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'ArhiSpripta',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Uvod',
					autogenerate: { directory: 'uvod' },
					
				},
				{
					label: 'Osnove',
					autogenerate: { directory: 'osnove' },
				},
				{
					label: 'Regulativa',
					autogenerate: { directory: 'regulativa' },
				},
				{
					label: 'ZNR',
					autogenerate: { directory: 'zaštita na radu' },
				},
				{
					label: 'ZOP',
					autogenerate: { directory: 'zaštita od požara' },
				},
				{
					label: 'zgrade',
					autogenerate: { directory: 'zgrade' },
				},
			],
			customCss: ['./src/tailwind.css'],
		}),
		tailwind({ applyBaseStyles: false }),
	],
});
