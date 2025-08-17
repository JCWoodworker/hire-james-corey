import {
	Box,
	Container,
	Stack,
	Typography,
	Chip,
	Card,
	CardContent,
	Divider,
} from "@mui/material"
import resume from "../data/resume-data"
import { projects } from "../data/project-data"
import Reveal from "./Reveal"

export function SkillsSection() {
	const aggregatedFromProjects = projects.flatMap((p) => p.technologies)
	const base =
		resume.skills && resume.skills.length > 0
			? resume.skills
			: aggregatedFromProjects
	const uniqueSkills = Array.from(new Set(base)).sort((a, b) =>
		a.localeCompare(b)
	)
	return (
		<Box component="section" sx={{ py: 8 }}>
			<Container>
				<Reveal>
					<Typography variant="h2" sx={{ mb: 2 }}>
						Skills
					</Typography>
					<Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
						{uniqueSkills.map((skill) => (
							<Chip key={skill} label={skill} variant="outlined" />
						))}
					</Stack>
				</Reveal>
			</Container>
		</Box>
	)
}

export function ExperienceSection() {
	if (!resume.experiences?.length) return null
	return (
		<Box component="section" sx={{ py: 8 }}>
			<Container>
				<Typography variant="h2" sx={{ mb: 3 }}>
					Experience
				</Typography>
				<Stack spacing={2}>
					{resume.experiences.map((exp, idx) => (
						<Reveal key={`${exp.company}-${exp.role}`} delayMs={idx * 60}>
							<Card>
								<CardContent>
									<Stack
										direction={{ xs: "column", sm: "row" }}
										justifyContent="space-between"
										spacing={1}
										sx={{ mb: 1 }}
									>
										<Typography variant="h6">
											{exp.role} · {exp.company}
										</Typography>
										<Typography color="text.secondary">
											{exp.startDate} — {exp.endDate}
										</Typography>
									</Stack>
									{exp.location && (
										<Typography color="text.secondary" sx={{ mb: 1 }}>
											{exp.location}
										</Typography>
									)}
									<Stack component="ul" sx={{ pl: 2, m: 0 }} spacing={1}>
										{exp.bullets.map((b, bIdx) => (
											<Typography key={bIdx} component="li">
												{b}
											</Typography>
										))}
									</Stack>
									{exp.technologies && (
										<Stack
											direction="row"
											spacing={1}
											useFlexGap
											flexWrap="wrap"
											sx={{ mt: 2 }}
										>
											{exp.technologies.map((t) => (
												<Chip key={t} size="small" label={t} />
											))}
										</Stack>
									)}
								</CardContent>
							</Card>
						</Reveal>
					))}
				</Stack>
			</Container>
		</Box>
	)
}

export function EducationCertsSection() {
	if (
		!resume.education?.length &&
		!resume.certifications?.length &&
		!resume.achievements?.length
	)
		return null
	return (
		<Box component="section" sx={{ py: 8 }}>
			<Container>
				<Stack spacing={4}>
					{resume.education?.length ? (
						<Reveal>
							<Box>
								<Typography variant="h2" sx={{ mb: 2 }}>
									Education
								</Typography>
								<Stack spacing={1}>
									{resume.education.map((e) => (
										<Typography key={`${e.school}-${e.degree}`}>
											{e.degree} · {e.school} ({e.startDate}—{e.endDate})
										</Typography>
									))}
								</Stack>
							</Box>
						</Reveal>
					) : null}
					{resume.certifications?.length ? (
						<Reveal>
							<Box>
								<Typography variant="h2" sx={{ mb: 2 }}>
									Certifications
								</Typography>
								<Stack spacing={1}>
									{resume.certifications.map((c) => (
										<Typography key={`${c.name}-${c.issuer}`}>
											{c.name} · {c.issuer} ({c.date})
										</Typography>
									))}
								</Stack>
							</Box>
						</Reveal>
					) : null}
					{resume.achievements?.length ? (
						<Reveal>
							<Box>
								<Typography variant="h2" sx={{ mb: 2 }}>
									Achievements
								</Typography>
								<Stack component="ul" sx={{ pl: 2, m: 0 }} spacing={1}>
									{resume.achievements.map((a, idx) => (
										<Typography key={idx} component="li">
											{a}
										</Typography>
									))}
								</Stack>
							</Box>
						</Reveal>
					) : null}
				</Stack>
				<Divider sx={{ mt: 4 }} />
			</Container>
		</Box>
	)
}
