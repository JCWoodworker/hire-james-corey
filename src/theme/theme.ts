import { createTheme } from "@mui/material/styles"
import type { PaletteMode } from "@mui/material"

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

export function createAppTheme(mode: PaletteMode) {
	const isDark = mode === "dark"
	return createTheme({
		palette: {
			mode,
			primary: { main: isDark ? primaryBlue[300] : primaryBlue[700] },
			secondary: { main: "#0ea5e9" },
			background: isDark
				? { default: "#0b1020", paper: "#0f152a" }
				: { default: "#f7f8fc", paper: "#ffffff" },
			text: isDark
				? { primary: "#e6e9f5", secondary: "#b6bdd8" }
				: { primary: "#0b1020", secondary: "#4b5569" },
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
						backgroundImage: isDark
							? "radial-gradient(1000px 400px at 80% -10%, rgba(59,116,226,.12), transparent), radial-gradient(800px 300px at -10% 10%, rgba(14,165,233,.12), transparent)"
							: "radial-gradient(1000px 400px at 80% -10%, rgba(23,46,100,.06), transparent), radial-gradient(800px 300px at -10% 10%, rgba(14,165,233,.06), transparent)",
					},
				},
			},
			MuiContainer: { defaultProps: { maxWidth: "lg" } },
			MuiButton: { defaultProps: { variant: "contained", size: "large" } },
			MuiCard: {
				styleOverrides: {
					root: isDark
						? {
								backgroundColor: "#111736",
								border: "1px solid rgba(255,255,255,0.06)",
						  }
						: {
								backgroundColor: "#ffffff",
								border: "1px solid rgba(0,0,0,0.06)",
						  },
				},
			},
		},
	})
}

export default createAppTheme
