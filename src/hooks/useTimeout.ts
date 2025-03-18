import { useEffect, useState } from "react"

export const useTimeout = (delay: number = 500) => {
	const [isReady, setIsReady] = useState(false)

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsReady(true)
		}, delay)

		return () => clearTimeout(timer)
	}, [delay])

	return isReady
}
