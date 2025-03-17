import { Box } from "@mui/material"
import { socialLinks } from "../../data/social-link-data"
import SocialLinkIcon from "./SocialLinkIcon"

const SocialLinkContainer = () => {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "row",
				alignItems: "center",
				justifyContent: "center",
				gap: 2,
				mb: 4,
			}}
		>
			{socialLinks.map((link) => (
				<SocialLinkIcon key={link.href} href={link.href} icon={link.icon} />
			))}
		</Box>
	)
}

export default SocialLinkContainer
