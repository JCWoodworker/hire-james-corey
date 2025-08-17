import { useEffect, useRef, useState, PropsWithChildren } from "react"
import { Box } from "@mui/material"

interface RevealProps {
	delayMs?: number
}

export default function Reveal({
	children,
	delayMs = 0,
}: PropsWithChildren<RevealProps>) {
	const ref = useRef<HTMLDivElement | null>(null)
	const [visible, setVisible] = useState(false)

	useEffect(() => {
		const el = ref.current
		if (!el) return
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setTimeout(() => setVisible(true), delayMs)
						observer.disconnect()
					}
				})
			},
			{ threshold: 0.2 }
		)
		observer.observe(el)
		return () => observer.disconnect()
	}, [delayMs])

	return (
		<Box
			ref={ref}
			sx={{
				opacity: visible ? 1 : 0,
				transform: visible
					? "translateY(0px) scale(1)"
					: "translateY(12px) scale(0.98)",
				transition: "opacity 600ms ease, transform 600ms ease",
			}}
		>
			{children}
		</Box>
	)
}
