import { Link } from "@mui/material"
import React from "react"
import IconWrapper from "../IconWrapper"

const SocialLinkIcon = ({
	icon,
	href,
}: {
	icon: React.ReactElement
	href: string
}) => {
	return (
		<Link href={href} target="_blank">
			<IconWrapper
				styles={{
					"& svg": { fontSize: 30 },
					color: "white",
					"&:hover": { color: "primary.main" },
				}}
			>
				{icon}
			</IconWrapper>
		</Link>
	)
}

export default SocialLinkIcon
