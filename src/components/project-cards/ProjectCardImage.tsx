import { CardMedia } from "@mui/material"

const ProjectCardImage = ({
	image,
	title,
	imageLoaded,
	setImageLoaded,
}: {
	image: string
	title: string
	imageLoaded: boolean
	setImageLoaded: (imageLoaded: boolean) => void
}) => {
	return (
		<CardMedia
			component="img"
			loading="lazy"
			decoding="async"
			sx={{
				position: "absolute",
				top: 0,
				left: 0,
				width: "100%",
				height: "100%",
				objectFit: "contain",
				borderRadius: 1,
				opacity: imageLoaded ? 1 : 0,
				transition: "opacity 0.3s, width 0.2s, height 0.2s",
			}}
			image={image}
			alt={title}
			onLoad={() => setImageLoaded(true)}
			className="fadeIn"
		/>
	)
}

export default ProjectCardImage
