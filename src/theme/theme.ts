import { createTheme } from "@mui/material/styles"

const primaryBlue = {
	50: "#e8effd",
	100: "#c7d6f8",
	200: "#a1baf3",
	300: "#799eef",
	400: "#5d8ae9",
	500: "#3b74e2",
	600: "#2b63d0",
	700: "#224faf",
	800: "#1c408e",
	900: "#172e64",
}

export const theme = createTheme({
	palette: {
		mode: "light",
		primary: {
			main: primaryBlue[700],
		},
		secondary: {
			main: "#0ea5e9",
		},
		background: {
			default: "#0b1020",
			paper: "#0f152a",
		},
		text: {
			primary: "#e6e9f5",
			secondary: "#b6bdd8",
		},
	},
	typography: {
		fontFamily: [
			"Inter",
			"system-ui",
			"-apple-system",
			"Segoe UI",
			"Roboto",
			"Ubuntu",
			"Cantarell",
			"Noto Sans",
			"Arial",
			"sans-serif",
		].join(", "),
		h1: { fontWeight: 800, letterSpacing: -0.5 },
		h2: { fontWeight: 700, letterSpacing: -0.3 },
		h3: { fontWeight: 700 },
		body1: { lineHeight: 1.7 },
	},
	shape: { borderRadius: 14 },
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				"*, *::before, *::after": { boxSizing: "border-box" },
				"::selection": { backgroundColor: "rgba(59,116,226,0.3)" },
				body: {
					backgroundImage:
						"radial-gradient(1000px 400px at 80% -10%, rgba(59,116,226,.12), transparent), radial-gradient(800px 300px at -10% 10%, rgba(14,165,233,.12), transparent)",
				},
			},
		},
		MuiContainer: { defaultProps: { maxWidth: "lg" } },
		MuiButton: { defaultProps: { variant: "contained", size: "large" } },
		MuiCard: {
			styleOverrides: {
				root: {
					backgroundColor: "#111736",
					border: "1px solid rgba(255,255,255,0.06)",
				},
			},
		},
	},
})

export default theme
