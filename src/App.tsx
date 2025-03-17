import "./App.css"
import { Box } from "@mui/material"
import { profilePoints } from "./data/profile-point-data"
import ProfilePointWrapper from "./components/typography/ProfilePointWrapper"
import ProjectLayout from "./components/project-cards/ProjectCardLayout"
import PageTitleAndDescription from "./components/typography/PageTitleAndDescription"
import SocialLinkContainer from "./components/social-links/SocialLinkContainer"
import HeadshotImage from "./components/HeadshotImage"
function App() {
	return (
		<Box sx={{ maxWidth: 1200, margin: "0 auto", padding: 3 }}>
			<PageTitleAndDescription />
			<HeadshotImage />
			<SocialLinkContainer />

			<Box
				sx={{
					maxWidth: "800px",
					margin: "0 auto",
					backgroundColor: "rgba(255, 255, 255, 0.05)",
					padding: { xs: 2, sm: 4 },
					borderRadius: 2,
					boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
					position: "relative",
					backdropFilter: "blur(10px)",
					"&::before": {
						content: '""',
						position: "absolute",
						left: 0,
						top: 0,
						width: "4px",
						height: "100%",
						backgroundColor: "primary.main",
						borderRadius: "4px 0 0 4px",
					},
				}}
			>
				<Box sx={{ p: 2 }}>
					{profilePoints.map((point, index) => (
						<ProfilePointWrapper
							key={index + point.text}
							profilePointText={point.text}
							isLast={index === profilePoints.length - 1}
						/>
					))}
				</Box>
			</Box>

			<ProjectLayout />
		</Box>
	)
}

export default App
