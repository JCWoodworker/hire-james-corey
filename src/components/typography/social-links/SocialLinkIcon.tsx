import { Link } from "@mui/material"
import React from "react"

const SocialLinkIcon = ({
	icon,
	href,
}: {
	icon: React.ReactElement
	href: string
}) => {
	return (
		<Link href={href} target="_blank" sx={{ "& svg": { fontSize: 30 } }}>
			{icon}
		</Link>
	)
}

export default SocialLinkIcon
