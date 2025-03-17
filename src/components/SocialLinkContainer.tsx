import { Box, Link } from "@mui/material"
import { GitHub, LinkedIn } from "@mui/icons-material"

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
			<Link href="https://www.linkedin.com/in/james-corey" target="_blank">
				<LinkedIn sx={{ fontSize: 30 }} />
			</Link>
			<Link href="https://github.com/jcwoodworker" target="_blank">
				<GitHub sx={{ fontSize: 30 }} />
			</Link>
		</Box>
	)
}

export default SocialLinkContainer
