import { Chip } from "@mui/material"

import { Stack } from "@mui/material"

const ProjectTechChips = ({ technologies }: { technologies: string[] }) => {
	return (
		<Stack
			direction="row"
			spacing={1}
			flexWrap="wrap"
			justifyContent="center"
			alignItems="center"
			gap={1}
			sx={{ mb: 2 }}
		>
			{technologies.map((tech, i) => (
				<Chip
					key={tech + i}
					label={tech}
					size="small"
					sx={{
						mb: 0.5,
						backgroundColor: "rgba(255, 255, 255, 0.08)",
						color: "white",
						borderRadius: "4px",
						"&:hover": {
							backgroundColor: "rgba(255, 255, 255, 0.12)",
						},
					}}
				/>
			))}
		</Stack>
	)
}

export default ProjectTechChips
