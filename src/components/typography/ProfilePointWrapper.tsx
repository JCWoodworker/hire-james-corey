import { Typography } from "@mui/material"

const ProfilePointWrapper = ({ profilePointText }: { profilePointText: string }) => {
	return (
		<Typography
			variant="body1"
			sx={{
				lineHeight: 1.8,
				mb: 1,
				color: "rgba(255, 255, 255, 0.9)",
				fontSize: { xs: "1rem", sm: "1.1rem" },
				textAlign: { xs: "left", sm: "justify" },
				"& strong": {
					color: "primary.light",
					fontWeight: 500,
				},
			}}
		>
			{profilePointText}
		</Typography>
	)
}

export default ProfilePointWrapper
