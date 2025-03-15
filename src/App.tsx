import { Box, Link } from "@mui/material"
import "./App.css"
import { LinkedIn, GitHub } from "@mui/icons-material"

function App() {
	return (
		<Box>
			<h1>Hire James Corey</h1>
			<h2>Software Engineer</h2>
			<p>Portfolio coming soon...</p>
			<Box
				sx={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "center",
					alignItems: "center",
					gap: 2,
				}}
			>
				<Link href="https://www.linkedin.com/in/j-corey" target="_blank">
					<LinkedIn sx={{ fontSize: 40 }} />
				</Link>
				<Link href="https://github.com/jcwoodworker" target="_blank">
					<GitHub sx={{ fontSize: 40 }} />
				</Link>
			</Box>
		</Box>
	)
}

export default App
