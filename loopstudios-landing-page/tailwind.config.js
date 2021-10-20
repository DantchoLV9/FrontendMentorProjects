module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			zIndex: {
				"-1": "-1",
			},
			colors: {
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
				hero: "url('/src/images/desktop/image-hero.jpg')",
				mobileHero: "url('/src/images/mobile/image-hero.jpg')",
			},
			letterSpacing: {
				link: ".25em",
			},
			opacity: {
				55: ".55",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
