/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#F364A2',
					secondary: '#B990FF',
					accent: '#abfcbb',
					neutral: '#1B2227',
					'base-100': '#E6E7EB',
					info: '#6A7FCD',
					success: '#3CE7B4',
					warning: '#A86F05',
					error: '#E65183',
				},
			},
		],
	},
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
	},
	plugins: [require('daisyui')],
}
