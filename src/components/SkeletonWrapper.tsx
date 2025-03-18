import { Skeleton, SxProps } from "@mui/material"

const SkeletonWrapper = ({
	variant = "rectangular",
	animation = "wave",
	height = "100%",
	width = "100%",
	sx,
}: {
	variant?: "rectangular" | "circular"
	animation?: "wave" | "pulse"
	height?: string
	width?: string
	sx?: SxProps
}) => {
	return (
		<Skeleton
			variant={variant}
			animation={animation}
			height={height}
			width={width}
			sx={sx}
		/>
	)
}

export default SkeletonWrapper
