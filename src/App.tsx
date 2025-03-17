import {
	Box,
	Link,
	Grid,
	Card,
	CardContent,
	CardMedia,
	Typography,
	Stack,
	Chip,
} from "@mui/material"
import "./App.css"
import { LinkedIn, GitHub } from "@mui/icons-material"

interface Project {
	title: string
	description: string
	image: string
	githubLink: string
	technologies: string[]
}

const projects: Project[] = [
	{
		title: "OnlyBizLinks",
		description: "A Business Link Directory with React front-end and NestJS back-end",
		image:
			"https://web-dev-business-client-sites.s3.us-east-2.amazonaws.com/my-portfolio/OBL-Foolproof.png",
		githubLink: "https://github.com/JCWoodworker/OnlyBizLinks",
		technologies: [
			"TypeScript",
			"React",
			"Material-UI",
      "Netlify"
		],
	},
  {
		title: "NestJS Mega Backend",
		description: "A NestJS back-end application with a PostgreSQL database",
		image:
			"https://web-dev-business-client-sites.s3.us-east-2.amazonaws.com/my-portfolio/NestJSScreenshot.png",
		githubLink: "https://github.com/JCWoodworker/NestJS_Mega_Backend",
		technologies: [
			"TypeScript",
			"NestJS",
			"PostgreSQL",
			"OOP",
			"TDD",
			"TypeORM",
			"Jest",
      "Heroku"
		],
	},
]

function App() {
	return (
		<Box sx={{ maxWidth: 1200, margin: "0 auto", padding: 3 }}>
			<Box sx={{ mb: 4 }}>
				<h1>James Corey</h1>
				<h2>Software Engineer</h2>
			</Box>
			<Box
				sx={{
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "center",
					gap: 2,
					mb: 4,
				}}
			>
				<Link href="https://www.linkedin.com/in/james-corey" target="_blank">
					<LinkedIn sx={{ fontSize: 30 }} />
				</Link>
				<Link href="https://github.com/jcwoodworker" target="_blank">
					<GitHub sx={{ fontSize: 30 }} />
				</Link>
			</Box>

			<Box
				sx={{
					maxWidth: "800px",
					margin: "0 auto",
					backgroundColor: "rgba(255, 255, 255, 0.05)",
					padding: { xs: 2, sm: 4 },
					borderRadius: 2,
					boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
					position: "relative",
					backdropFilter: "blur(10px)",
					"&::before": {
						content: '""',
						position: "absolute",
						left: 0,
						top: 0,
						width: "4px",
						height: "100%",
						backgroundColor: "primary.main",
						borderRadius: "4px 0 0 4px",
					},
				}}
			>
				<Typography
					variant="body1"
					sx={{
						lineHeight: 1.8,
						color: "rgba(255, 255, 255, 0.9)",
						fontSize: { xs: "1rem", sm: "1.1rem" },
						textAlign: { xs: "left", sm: "justify" },
						"& strong": {
							color: "primary.light",
							fontWeight: 500,
						},
					}}
				>
					<strong>Full-stack software engineer</strong> with genuine love for
					building awesome web applications. Energized and passionate about
					crafting
					<strong> high-quality, secure, and performant solutions</strong>.
				</Typography>

				<Typography
					variant="body1"
					sx={{
						mt: 2,
						lineHeight: 1.8,
						color: "rgba(255, 255, 255, 0.9)",
						fontSize: { xs: "1rem", sm: "1.1rem" },
						textAlign: { xs: "left", sm: "justify" },
						"& strong": {
							color: "primary.light",
							fontWeight: 500,
						},
					}}
				>
					Solid track record with{" "}
					<strong>React, TypeScript, Redux, and Node.js</strong>, equally
					comfortable diving into backend technologies. Thrives in collaborative
					environments, enjoys leading complex projects.
				</Typography>

				<Typography
					variant="body1"
					sx={{
						mt: 2,
						lineHeight: 1.8,
						color: "rgba(255, 255, 255, 0.9)",
						fontSize: { xs: "1rem", sm: "1.1rem" },
						textAlign: { xs: "left", sm: "justify" },
						"& strong": {
							color: "primary.light",
							fontWeight: 500,
						},
					}}
				>
					Always eager to learn and grow, consistently driven to exceed
					expectations, and ready to roll up sleeves and get things done.
				</Typography>
			</Box>

			<Grid container spacing={3}>
				{projects.map((project, index) => (
					<Grid item xs={12} sm={12} md={6} key={index}>
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
					</Grid>
				))}
			</Grid>
		</Box>
	)
}

export default App
