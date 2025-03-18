import "./App.css"
import { Box } from "@mui/material"
import { profilePoints } from "./data/profile-point-data"
import ProfilePointWrapper from "./components/profile/ProfilePointWrapper"
import ProjectLayout from "./components/project-cards/ProjectCardLayout"
import PageTitleAndDescription from "./components/profile/PageTitleAndDescription"
import SocialLinkContainer from "./components/social-links/SocialLinkContainer"
import HeadshotImage from "./components/HeadshotImage"
import ProfileContainer from "./components/profile/ProfilePointContainer"

function App() {
	return (
		<Box sx={{ maxWidth: 1200, margin: "0 auto" }}>
			<PageTitleAndDescription />
			<HeadshotImage />
			<SocialLinkContainer />

			<ProfileContainer>
				<Box sx={{ p: 2 }} className="ProfilePoints">
					{profilePoints.map((point, index) => (
						<ProfilePointWrapper
							key={index + point.text}
							profilePointText={point.text}
							isLast={index === profilePoints.length - 1}
						/>
					))}
				</Box>
			</ProfileContainer>

			<ProjectLayout />
		</Box>
	)
}

export default App
