import { Box, Skeleton } from "@mui/material"
import { useTimeout } from "../../hooks/useTimeout"

const ProfileContainer = ({ children }: { children: React.ReactNode }) => {
	const showContainer = useTimeout(600)

	if (!showContainer) {
		return (
			<Skeleton
				variant="rectangular"
				height={200}
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
			})}
			className="ProfilePointsContainer fadeIn"
		>
			{children}
		</Box>
	)
}

export default ProfileContainer
