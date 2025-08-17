import { CssBaseline, ThemeProvider } from "@mui/material"
import {
	Container,
	Box,
	Stack,
	Typography,
	Button,
	Chip,
	Card,
	CardContent,
	IconButton,
	Link,
} from "@mui/material"
import { ArrowOutward } from "@mui/icons-material"
import createAppTheme from "./theme/theme"
import { projects } from "./data/project-data"
import { profilePoints } from "./data/profile-point-data"
import { socialLinks } from "./data/social-link-data"
import ContactForm from "./components/ContactForm"
import { SkillsSection, ExperienceSection } from "./components/ResumeSections"
import { useEffect, useMemo, useState } from "react"
import type { PaletteMode } from "@mui/material"
import MediaFrame from "./components/MediaFrame"

function Header({
	mode,
	toggleMode,
}: {
	mode: PaletteMode
	toggleMode: () => void
}) {
	return (
		<Box component="header" sx={{ py: 6 }}>
			<Container>
				<Stack
					direction={{ xs: "column", sm: "row" }}
					justifyContent="space-between"
					alignItems={{ xs: "flex-start", sm: "center" }}
					spacing={3}
				>
					<Box>
						<Typography variant="h1" sx={{ fontSize: { xs: 40, sm: 56 } }}>
							James Corey
						</Typography>
						<Typography variant="h6" color="text.secondary">
							Full‑stack Software Engineer
						</Typography>
					</Box>
					<Stack direction="row" spacing={1}>
						{socialLinks.map((s, i) => (
							<IconButton
								key={i}
								component="a"
								href={s.href}
								target="_blank"
								rel="noreferrer noopener"
								color="primary"
								aria-label="social link"
							>
								{s.icon}
							</IconButton>
						))}
						<Button variant="outlined" onClick={toggleMode}>
							{mode === "dark" ? "Light" : "Dark"} mode
						</Button>
					</Stack>
				</Stack>
			</Container>
		</Box>
	)
}

function Hero() {
	return (
		<Box sx={{ py: { xs: 6, sm: 10 } }}>
			<Container>
				<Typography variant="h2" sx={{ mb: 2, fontSize: { xs: 30, sm: 40 } }}>
					Building fast, secure, and delightful web apps.
				</Typography>
				<Typography color="text.secondary" sx={{ maxWidth: 800 }}>
					{profilePoints[0]?.text}
				</Typography>
				<Stack direction="row" spacing={2} sx={{ mt: 4 }}>
					<Button href="#projects">View Projects</Button>
					<Button color="secondary" href="#contact" variant="outlined">
						Contact
					</Button>
				</Stack>
			</Container>
		</Box>
	)
}

function ProfileHighlights() {
	return (
		<Box component="section" sx={{ py: 6 }}>
			<Container>
				<Stack spacing={1}>
					{profilePoints.map((p, idx) => (
						<Typography key={idx} color="text.secondary">
							{p.text}
						</Typography>
					))}
				</Stack>
			</Container>
		</Box>
	)
}

function ProjectsSection() {
	return (
		<Box id="projects" component="section" sx={{ py: 10 }}>
			<Container>
				<Typography variant="h2" sx={{ mb: 4 }}>
					Projects
				</Typography>
				<Stack
					direction={{ xs: "column", md: "row" }}
					flexWrap="wrap"
					useFlexGap
					spacing={3}
				>
					{projects.map((proj) => (
						<Card
							key={proj.title}
							sx={{
								width: { xs: "100%", md: 360 },
								display: "flex",
								flexDirection: "column",
							}}
						>
							<MediaFrame src={proj.image} alt={proj.title} fit="contain" />
							<CardContent>
								<Typography variant="h6" gutterBottom>
									{proj.title}
								</Typography>
								<Typography color="text.secondary" sx={{ mb: 2 }}>
									{proj.description}
								</Typography>
								<Stack
									direction="row"
									spacing={1}
									useFlexGap
									flexWrap="wrap"
									sx={{ mb: 2 }}
								>
									{proj.technologies.map((t) => (
										<Chip
											key={t}
											size="small"
											label={t}
											color="default"
											variant="outlined"
										/>
									))}
								</Stack>
								<Stack direction="row" spacing={1}>
									{proj.websiteLink && (
										<Button
											component={Link}
											href={
												proj.websiteLink.startsWith("http")
													? proj.websiteLink
													: `https://${proj.websiteLink}`
											}
											target="_blank"
											rel="noreferrer noopener"
											endIcon={<ArrowOutward fontSize="small" />}
										>
											Live
										</Button>
									)}
									{proj.githubLink && (
										<Button
											component={Link}
											href={proj.githubLink}
											target="_blank"
											rel="noreferrer noopener"
											color="secondary"
											endIcon={<ArrowOutward fontSize="small" />}
										>
											Code
										</Button>
									)}
								</Stack>
							</CardContent>
						</Card>
					))}
				</Stack>
			</Container>
		</Box>
	)
}

function ContactSection() {
	return (
		<Box id="contact" component="section" sx={{ py: 10 }}>
			<Container>
				<Typography variant="h2" sx={{ mb: 2 }}>
					Get in touch
				</Typography>
				<Typography color="text.secondary" sx={{ mb: 3, maxWidth: 700 }}>
					Interested in collaborating or hiring? Reach out—I'm quick to respond.
				</Typography>
				<Stack
					direction={{ xs: "column", lg: "row" }}
					spacing={4}
					alignItems="flex-start"
				>
					<Box sx={{ flex: 1, width: "100%", maxWidth: 560 }}>
						<ContactForm />
					</Box>
					<Stack direction="column" spacing={2}>
						<Button
							component={Link}
							href="https://www.linkedin.com/in/james-corey"
							target="_blank"
							rel="noreferrer noopener"
						>
							Message on LinkedIn
						</Button>
						<Button
							component={Link}
							href="https://github.com/jcwoodworker"
							target="_blank"
							rel="noreferrer noopener"
						>
							View GitHub
						</Button>
					</Stack>
				</Stack>
			</Container>
		</Box>
	)
}

function Footer() {
	return (
		<Box component="footer" sx={{ py: 6 }}>
			<Container>
				<Typography color="text.secondary">
					© {new Date().getFullYear()} James Corey
				</Typography>
			</Container>
		</Box>
	)
}

function App() {
	const [mode, setMode] = useState<PaletteMode>(
		() => (localStorage.getItem("color-mode") as PaletteMode) || "dark"
	)
	const theme = useMemo(() => createAppTheme(mode), [mode])
	useEffect(() => {
		localStorage.setItem("color-mode", mode)
	}, [mode])
	const toggleMode = () => setMode((m) => (m === "dark" ? "light" : "dark"))

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Header mode={mode} toggleMode={toggleMode} />
			<Hero />
			<ProfileHighlights />
			<SkillsSection />
			<ExperienceSection />
			<ProjectsSection />
			<ContactSection />
			<Footer />
		</ThemeProvider>
	)
}

export default App
