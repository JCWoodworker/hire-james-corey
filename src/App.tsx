import "./App.css"
import { useState } from "react"
import { Box } from "@mui/material"
import { profilePoints } from "./data/profile-point-data"
import ProfilePointWrapper from "./components/profile/ProfilePointWrapper"
import ProjectLayout from "./components/project-cards/ProjectCardLayout"
import PageTitleAndDescription from "./components/profile/PageTitleAndDescription"
import SocialLinkContainer from "./components/social-links/SocialLinkContainer"
import HeadshotImage from "./components/profile/HeadshotImage"
import ProfileContainer from "./components/profile/ProfilePointContainer"
import ContactModal from "./components/contact/ContactModal"
import ModalButton from "./components/ModalButton"

function App() {
	const [contactModalOpen, setContactModalOpen] = useState(false)

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

			<ModalButton
				buttonText="Contact James"
				setModalOpen={setContactModalOpen}
			/>

			<ProjectLayout />

			<ModalButton
				buttonText="Contact James"
				setModalOpen={setContactModalOpen}
			/>

			<ContactModal
				open={contactModalOpen}
				handleClose={() => setContactModalOpen(false)}
			/>
		</Box>
	)
}

export default App
