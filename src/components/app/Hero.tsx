"use client"

import Silk from "../Silk"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const Hero = () => {
	return (
		<section className="relative min-h-screen flex items-center justify-center pt-24 md:pt-32">
			<div className="absolute inset-0 w-full h-full">
				<Silk
					speed={5}
					scale={1}
					color={"#7B7481"}
					noiseIntensity={1.5}
					rotation={0}
				/>
			</div>

			<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
				<h1 className="text-6xl lg:text-7xl font-medium text-white mb-6 tracking-tight">
					We build what works
				</h1>

				<p className="text-base md:text-lg text-white/70 mb-12 max-w-xl mx-auto font-light">
					Innovative and proven technology solutions that scale
				</p>

				<Link
					href="#services"
					className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
				>
					Explore Services
					<ArrowRight className="ml-2 h-5 w-5" />
				</Link>
			</div>
		</section>
	)
}

export default Hero
