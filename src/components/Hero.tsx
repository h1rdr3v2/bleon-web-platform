"use client"

import Silk from "./Silk"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import AnimatedWrapper from "./AnimatedWrapper"

const Hero = () => {
	return (
		<section className="relative min-h-screen flex items-center justify-center pt-16">
			<div className="absolute inset-0 w-full h-full">
				<Silk
					speed={5}
					scale={1}
					color="#7B7481"
					noiseIntensity={1.5}
					rotation={0}
				/>
			</div>

			<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
				<AnimatedWrapper
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
						<span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
							Technology
						</span>
						<br />
						<span className="text-gray-800">Solutions That</span>
						<br />
						<span className="text-gray-800">Transform</span>
					</h1>

					<p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
						Bleon Co Ltd delivers innovative digital solutions, VTU services,
						and cutting-edge technology to help businesses thrive in the digital
						age.
					</p>

					<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
						<Link
							href="#services"
							className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
						>
							Explore Services
							<ArrowRight className="ml-2 h-5 w-5" />
						</Link>
					</div>
				</AnimatedWrapper>

				{/* Stats */}
				<AnimatedWrapper
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
				>
					<div className="text-center">
						<div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
							500+
						</div>
						<div className="text-gray-600">Happy Clients</div>
					</div>
					<div className="text-center">
						<div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">
							1000+
						</div>
						<div className="text-gray-600">Projects Completed</div>
					</div>
					<div className="text-center">
						<div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
							24/7
						</div>
						<div className="text-gray-600">Support Available</div>
					</div>
				</AnimatedWrapper>
			</div>
		</section>
	)
}

export default Hero
