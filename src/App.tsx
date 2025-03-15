import { Box } from "@mui/material"
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
				<a href="https://www.linkedin.com/in/j-corey">
					<LinkedIn sx={{ fontSize: 40 }} />
				</a>
				<a href="https://github.com/jcwoodworker">
					<GitHub sx={{ fontSize: 40 }} />
				</a>
			</Box>
		</Box>
	)
}

export default App
