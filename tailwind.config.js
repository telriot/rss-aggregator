const theme = require('./public/styles/theme');
module.exports = {
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: theme,
	},
	variants: {
		extend: {}
	},
	plugins: []
};
