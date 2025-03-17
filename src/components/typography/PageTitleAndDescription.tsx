import { Box, Typography } from "@mui/material"

const PageTitleAndDescription = () => {
	return (
		<Box sx={{ mb: 4 }}>
			<Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' } }}>
				James Corey
			</Typography>
			<Typography variant="h3" sx={{ fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' } }}>
				Software Engineer
			</Typography>
		</Box>
	)
}

export default PageTitleAndDescription
