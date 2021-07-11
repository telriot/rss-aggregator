const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
	colors: {
		'body':'#fff',
	},
	fontFamily: {
		display: ['Abril Fatface'],
		sans: ['Raleway', ...defaultTheme.fontFamily.sans],
	   }
};
