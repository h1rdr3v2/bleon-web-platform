import { useEffect, useState, useRef } from "react"

export function useScrollDirection() {
	const [isVisible, setIsVisible] = useState(true)
	const lastScrollY = useRef(0)

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY

			if (currentScrollY < lastScrollY.current || currentScrollY < 10) {
				// Scrolling up or at top
				setIsVisible(true)
			} else if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
				// Scrolling down and past threshold
				setIsVisible(false)
			}

			lastScrollY.current = currentScrollY
		}

		window.addEventListener("scroll", handleScroll, { passive: true })
		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	return isVisible
}
