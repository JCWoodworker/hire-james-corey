import { Divider, Typography } from "@mui/material"

const ProfilePointWrapper = ({
	profilePointText,
	isLast = false,
}: {
	profilePointText: string
	isLast?: boolean
}) => {
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
			{!isLast && (
				<Divider sx={{ my: 2, borderColor: "rgba(255, 255, 255, 0.1)" }} />
			)}
		</Typography>
	)
}

export default ProfilePointWrapper
