import { useState } from "react"
import { Box, useTheme, useMediaQuery } from "@mui/material"
import { useTimeout } from "../../hooks/useTimeout"
import SkeletonWrapper from "../SkeletonWrapper"
const HeadshotImage = () => {
	const [imageLoaded, setImageLoaded] = useState(false)
	const theme = useTheme()
	const showHeadshot = useTimeout(500)

	const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
	const imageSize = isMobile ? 150 : 200

	const headshotSkeleton: React.ReactNode = (
		<SkeletonWrapper
			variant="circular"
			width={`${imageSize}px`}
			height={`${imageSize}px`}
			sx={{
				position: "relative",
				margin: "0 auto",
				marginBottom: "20px",
			}}
		/>
	)

	return (
		<>
			{!showHeadshot ? (
				headshotSkeleton
			) : (
				<Box
					sx={{
						position: "relative",
						margin: "0 auto",
						marginBottom: "20px",
						width: { xs: 150, sm: 200 },
						height: { xs: 150, sm: 200 },
					}}
					className="fadeIn"
				>
					{!imageLoaded && headshotSkeleton}
					<img
						src="https://web-dev-business-client-sites.s3.us-east-2.amazonaws.com/my-portfolio/Headshot.jpg"
						alt="Headshot"
						loading="lazy"
						decoding="async"
						onLoad={() => setImageLoaded(true)}
						style={{
							margin: "0 auto",
							marginBottom: "20px",
							width: imageSize,
							height: "auto",
							objectFit: "cover",
							borderRadius: "50%",
							opacity: imageLoaded ? 1 : 0,
						}}
					/>
				</Box>
			)}
		</>
	)
}

export default HeadshotImage
