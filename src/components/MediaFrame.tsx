import { Box } from "@mui/material"

interface MediaFrameProps {
	src: string
	alt: string
	fit?: "contain" | "cover"
}

export default function MediaFrame({
	src,
	alt,
	fit = "contain",
}: MediaFrameProps) {
	return (
		<Box
			sx={{
				position: "relative",
				width: "100%",
				aspectRatio: "16 / 9",
				borderRadius: 1.5,
				overflow: "hidden",
				bgcolor: "background.paper",
				backgroundImage:
					"radial-gradient(200px 120px at 20% 10%, rgba(255,255,255,0.06), transparent), radial-gradient(240px 160px at 80% 90%, rgba(14,165,233,0.08), transparent)",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<Box
				component="img"
				src={src}
				alt={alt}
				loading="lazy"
				decoding="async"
				sx={{
					maxWidth: "100%",
					maxHeight: "100%",
					width: fit === "cover" ? "100%" : "auto",
					height: fit === "cover" ? "100%" : "auto",
					objectFit: fit,
					objectPosition: "center",
					display: "block",
				}}
			/>
		</Box>
	)
}
