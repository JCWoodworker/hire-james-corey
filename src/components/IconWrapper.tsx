import { Box, SxProps } from "@mui/material"

const IconWrapper = ({ children, styles }: { children: React.ReactNode, styles: SxProps }) => {
	return (
		<Box
			sx={{ display: "flex", justifyContent: "center", alignItems: "center", ...styles}}
		>
			{children}
		</Box>
	)
}

export default IconWrapper
