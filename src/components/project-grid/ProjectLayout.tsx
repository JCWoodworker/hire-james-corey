import { Grid } from "@mui/material"
import { projects } from "../../data/project-data"
import ProjectCard from "./ProjectCard"

const ProjectGridLayout = () => {
	return (
		<Grid container spacing={3}>
			{projects.map((project, index) => (
				<Grid item xs={12} sm={12} md={6} key={index}>
					<ProjectCard project={project} />
				</Grid>
			))}
		</Grid>
	)
}

export default ProjectGridLayout
