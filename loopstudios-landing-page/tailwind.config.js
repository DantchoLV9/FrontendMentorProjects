module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			zIndex: {
				"-1": "-1",
			},
			color: {
				darkGray: "hsl(0, 0%, 55%)",
				veryDarkGray: "hsl(0, 0%, 41%)",
			},
			fontFamily: {
				josefin: ['"Josefin Sans"'],
				alata: ['"Alata"'],
			},
			margin: {
				hero: "25vw",
			},
			backgroundImage: {
				hero: "url('/src/images/image-hero.jpg')",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
