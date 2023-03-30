/** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

module.exports = {
	content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
	theme: {
		fontFamily: {
			display: ["Inter", "Helvetica", "sans-serif"],
			body: ["Inter", "Helvetica", "sans-serif"],
		},
		extend: {
			fontSize: {
				14: "14px",
			},
			backgroundColor: {
				primary: "#171717",
				secondary: "#fa833e",
				"dark-primary": "#262626",
				"half-transparent": "rgba(0, 0, 0, 0.5)",
			},
			colors: {
				primary: "#171717",
				secondary: "#fa833e",
				"dark-primary": "#262626",
			},
			borderWidth: {
				1: "1px",
			},
			borderColor: {
				color: "rgba(0, 0, 0, 0.1)",
			},
			width: {
				400: "400px",
				760: "760px",
				780: "780px",
				800: "800px",
				1000: "1000px",
				1200: "1200px",
				1400: "1400px",
			},
			height: {
				80: "80px",
			},
			minHeight: {
				590: "590px",
			},
		},
	},
	plugins: [],
};
