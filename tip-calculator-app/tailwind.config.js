module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		colors: {
			background: "hsl(185, 41%, 84%)",
			primary: "hsl(172, 67%, 45%)",
			text: "hsl(186, 14%, 43%)",
			lightText: "hsl(184, 14%, 56%)",
			white: "hsl(0, 0%, 100%)",
			dark: "hsl(183, 100%, 15%)",
			inputBG: "hsl(189, 41%, 97%)",
			disabled: "rgba(13,104,109,255)",
			disabledText: "rgba(3,93,98,255)",
			hover: "rgba(159,232,223,255)",
			errorText: "rgb(230,125,112)",
			errorBorder: "rgb(209,110,98)",
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
