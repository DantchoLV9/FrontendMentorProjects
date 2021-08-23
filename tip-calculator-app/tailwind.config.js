module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		colors: {
			background: "hsl(185, 41%, 84%)",
		},
		fontFamily: {
			body: ['"Space Mono"'],
		},
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
