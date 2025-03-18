import { Box } from "@mui/material"
import { useTimeout } from "../../hooks/useTimeout"
import SkeletonWrapper from "../SkeletonWrapper"

const ProfileContainer = ({ children }: { children: React.ReactNode }) => {
	const showContainer = useTimeout(600)

	if (!showContainer) {
		return (
			<SkeletonWrapper
				height="200px"
				sx={{ maxWidth: "800px", margin: "0 auto" }}
			/>
		)
	}

	return (
		<Box
			sx={(theme) => ({
				maxWidth: "800px",
				margin: "0 auto",
				backgroundColor: "rgba(255, 255, 255, 0.05)",
				padding: theme.spacing(2),
				borderRadius: theme.shape.borderRadius * 2,
				boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
				position: "relative",
				backdropFilter: "blur(10px)",
				[theme.breakpoints.up("sm")]: {
					padding: theme.spacing(4),
				},
				transition:
					"width 0.3s, height 0.3s, padding 0.3s, background-color 0.3s, box-shadow 0.3s, border-radius 0.3s, backdrop-filter 0.3s",
			})}
			className="ProfilePointsContainer fadeIn"
		>
			{children}
		</Box>
	)
}

export default ProfileContainer
