import {
	Card,
	CardContent,
	CardMedia,
	Typography,
	Stack,
	Chip,
	Link,
} from "@mui/material"
import { GitHub } from "@mui/icons-material"
import { Project } from "../../data/types"

const ProjectCard = ({ project }: { project: Project }) => {
	return (
		<Card
			sx={{
				margin: "1rem auto",
				padding: 1,
				textAlign: "center",
				display: "flex",
				flexDirection: { xs: "column", sm: "row" },
				justifyContent: "center",
				alignItems: "center",
				height: { xs: "auto", sm: "200px" },
				backgroundColor: "rgba(255, 255, 255, 0.05)",
				backdropFilter: "blur(10px)",
				transition: "transform 0.2s, box-shadow 0.2s",
				"&:hover": {
					transform: "translateY(-4px)",
					boxShadow: "0 6px 12px rgba(0, 0, 0, 0.3)",
				},
				border: "1px solid rgba(255, 255, 255, 0.1)",
			}}
		>
			<CardMedia
				component="img"
				sx={{
					width: { xs: "100%", sm: "40%" },
					height: { xs: "200px", sm: "auto" },
					objectFit: "cover",
					borderRadius: 1,
				}}
				image={project.image}
				alt={project.title}
			/>
			<CardContent
				sx={{
					width: { xs: "100%", sm: "60%" },
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
			>
				<Typography
					variant="h6"
					gutterBottom
					sx={{
						color: "primary.light",
						fontWeight: 500,
					}}
				>
					{project.title}
				</Typography>
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
				<Stack
					direction="row"
					spacing={1}
					flexWrap="wrap"
					justifyContent="center"
					alignItems="center"
					gap={1}
					sx={{ mb: 1 }}
				>
					{project.technologies.map((tech, i) => (
						<Chip
							key={i}
							label={tech}
							size="small"
							sx={{
								mb: 0.5,
								backgroundColor: "rgba(255, 255, 255, 0.08)",
								color: "primary.light",
								borderRadius: "4px",
								"&:hover": {
									backgroundColor: "rgba(255, 255, 255, 0.12)",
								},
							}}
						/>
					))}
				</Stack>
				<Link
					href={project.githubLink}
					target="_blank"
					sx={{
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
					<GitHub /> View on GitHub
				</Link>
			</CardContent>
		</Card>
	)
}

export default ProjectCard
