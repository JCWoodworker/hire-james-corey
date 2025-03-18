import { useState } from "react"
import {
	Card,
	CardContent,
	Typography,
	Link,
	Box,
	Divider,
} from "@mui/material"
import { GitHub, Web } from "@mui/icons-material"
import { Project } from "../../data/types"
import { useTimeout } from "../../hooks/useTimeout"
import IconWrapper from "../IconWrapper"
import ProjectCardImage from "./ProjectCardImage"
import SkeletonWrapper from "../SkeletonWrapper"
import ProjectTechChips from "./ProjectTechChips"

const ProjectCard = ({ project }: { project: Project }) => {
	const [imageLoaded, setImageLoaded] = useState(false)
	const showCard = useTimeout(700)

	return (
		<>
			{!showCard ? (
				<SkeletonWrapper height="280px" />
			) : (
				<Card
					sx={{
						padding: 1,
						textAlign: "center",
						display: "flex",
						flexDirection: { xs: "column", sm: "row" },
						justifyContent: "center",
						alignItems: "center",
						height: { xs: "auto", sm: "280px" },
						backgroundColor: "rgba(255, 255, 255, 0.05)",
						backdropFilter: "blur(10px)",
						transition:
							"transform 0.2s, box-shadow 0.2s, width 0.2s, height 0.2s",
						"&:hover": {
							transform: "translateY(-4px)",
							boxShadow: "0 6px 12px rgba(0, 0, 0, 0.3)",
						},
						border: "1px solid rgba(255, 255, 255, 0.1)",
					}}
					className="fadeIn"
				>
					<Box
						sx={{
							position: "relative",
							width: { xs: "100%", md: "40%" },
							height: { xs: "200px", md: "280px" },
							minHeight: { md: "280px" },
							flex: { sm: "0 0 40%" },
						}}
					>
						{!imageLoaded && (
							<SkeletonWrapper
								sx={{
									position: "absolute",
									top: 0,
									left: 0,
									borderRadius: 1,
									bgcolor: "rgba(255, 255, 255, 0.1)",
								}}
							/>
						)}
						<ProjectCardImage
							image={project.image}
							title={project.title}
							imageLoaded={imageLoaded}
							setImageLoaded={setImageLoaded}
						/>
					</Box>
					<CardContent
						sx={{
							width: { xs: "100%", md: "60%" },
							overflow: "auto",
							"&::-webkit-scrollbar": {
								width: "8px",
							},
							"&::-webkit-scrollbar-track": {
								background: "rgba(255, 255, 255, 0.05)",
							},
							"&::-webkit-scrollbar-thumb": {
								background: "rgba(255, 255, 255, 0.2)",
								borderRadius: "4px",
							},
						}}
						className="fadeIn"
					>
						<Typography
							variant="h6"
							gutterBottom
							sx={{
								color: "White",
								fontWeight: "bolder",
							}}
						>
							{project.title}
						</Typography>
						<Divider
							sx={{
								mb: "0.25rem",
								width: "100%",
								borderColor: "rgba(255, 255, 255, 0.1)",
							}}
						/>
						<Typography
							variant="body2"
							sx={{
								mb: 2,
								display: "-webkit-box",
								WebkitLineClamp: 3,
								WebkitBoxOrient: "vertical",
								overflow: "hidden",
								color: "rgba(255, 255, 255, 0.7)",
							}}
						>
							{project.description}
						</Typography>
						<ProjectTechChips technologies={project.technologies} />
						<Link
							href={project.githubLink}
							target="_blank"
							sx={{
								marginLeft: "10px",
								marginBottom: "5px",
								display: "flex",
								alignItems: "center",
								gap: 1,
								mt: "auto",
								color: "primary.light",
								textDecoration: "none",
								"&:hover": {
									color: "primary.main",
								},
							}}
						>
							<IconWrapper styles={{ color: "white" }}>
								<GitHub />
							</IconWrapper>
							View on GitHub
						</Link>
						<Link
							href={project.websiteLink}
							target="_blank"
							sx={{
								marginLeft: "10px",
								display: "flex",
								alignItems: "center",
								gap: 1,
								mt: "auto",
								color: "primary.light",
								textDecoration: "none",
								"&:hover": {
									color: "primary.main",
								},
							}}
						>
							<IconWrapper styles={{ color: "white" }}>
								<Web />
							</IconWrapper>
							View Live Site
						</Link>
					</CardContent>
				</Card>
			)}
		</>
	)
}

export default ProjectCard
