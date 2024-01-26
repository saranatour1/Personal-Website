/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				'base-grey':"#ABB2BF",
				'tag-purple':'#C778DD',
				'base-black':"#282C33",
			},
			fontFamily:{
				'serif4':['Source Serif 4', 'serif'],
				'lora':['Lora', 'serif'],
				'code':['Fira Code', 'monospace']
			}
		},
	},
	plugins: [],
}
