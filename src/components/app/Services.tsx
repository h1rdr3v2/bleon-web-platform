"use client"

import {
	Smartphone,
	Globe,
	Shield,
	Zap,
	Users,
	BarChart3,
	CreditCard,
	MessageCircle,
	Calculator,
	Gift,
	Book,
} from "lucide-react"
import Link from "next/link"
import AnimatedWrapper from "../AnimatedWrapper"

const Services = () => {
	const services = [
		{
			icon: <Smartphone className="h-8 w-8" />,
			title: "VTU Services",
			description:
				"Reliable airtime and data services for all networks with instant delivery and competitive rates.",
			color: "from-blue-500 to-blue-600",
		},
		{
			icon: <Globe className="h-8 w-8" />,
			title: "Web Development",
			description:
				"Custom websites and web applications built with modern technologies and best practices.",
			color: "from-purple-500 to-purple-600",
		},
		{
			icon: <Shield className="h-8 w-8" />,
			title: "Cybersecurity",
			description:
				"Comprehensive security solutions to protect your digital assets and infrastructure.",
			color: "from-green-500 to-green-600",
		},
		{
			icon: <Zap className="h-8 w-8" />,
			title: "Digital Transformation",
			description:
				"End-to-end digital transformation services to modernize your business operations.",
			color: "from-yellow-500 to-yellow-600",
		},
		{
			icon: <Users className="h-8 w-8" />,
			title: "IT Consulting",
			description:
				"Strategic IT consulting to align technology with your business goals and objectives.",
			color: "from-red-500 to-red-600",
		},
		{
			icon: <BarChart3 className="h-8 w-8" />,
			title: "Data Analytics",
			description:
				"Advanced analytics and business intelligence solutions for data-driven decisions.",
			color: "from-indigo-500 to-indigo-600",
		},
		{
			icon: <CreditCard className="h-8 w-8" />,
			title: "Payment Solutions",
			description:
				"Secure payment processing and financial technology solutions for businesses.",
			color: "from-pink-500 to-pink-600",
		},
		{
			icon: <MessageCircle className="h-8 w-8" />,
			title: "Chatbot Development",
			description:
				"Intelligent chatbot solutions for customer service and business automation.",
			color: "from-teal-500 to-teal-600",
		},
	]

	const projects = [
		{
			icon: <Calculator className="h-12 w-12" />,
			title: "MyCGPA",
			description:
				"Comprehensive GPA calculator and academic management tool for students. Track your academic progress, calculate GPAs, and manage your educational journey.",
			features: [
				"GPA Calculator",
				"Academic Tracking",
				"Course Management",
				"Progress Monitoring",
			],
			color: "from-blue-600 to-purple-700",
			href: "/mycgpa",
			cta: "View Project",
		},
		{
			icon: <Gift className="h-12 w-12" />,
			title: "AirlyPay",
			description:
				"Advanced VTU service platform with innovative giveaway features. Recharge airtime, buy data, and engage your audience with exciting giveaways.",
			features: [
				"VTU Services",
				"Giveaway Platform",
				"Multi-Network Support",
				"Secure Payments",
			],
			color: "from-green-600 to-blue-700",
			href: "/airlypay",
			cta: "View Project",
		},
		{
			icon: <Book className="h-12 w-12" />,
			title: "Watchman's Hymnal",
			description:
				"Free mobile hymnal app providing access to 300+ spiritual songs and hymns for worship and devotion. Available on iOS and Android.",
			features: [
				"300+ Hymns",
				"Offline Access",
				"Search & Favorites",
				"Dark Mode",
			],
			color: "from-amber-600 to-orange-700",
			href: "/watchman-hymnal",
			cta: "View Project",
		},
	]

	return (
		<section id="services" className="py-20 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<AnimatedWrapper
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
						Our Services
					</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						We offer a comprehensive range of technology services designed to
						help your business grow and succeed in the digital landscape.
					</p>
				</AnimatedWrapper>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{services.map((service, index) => (
						<AnimatedWrapper
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: index * 0.1 }}
							viewport={{ once: true }}
							className="group"
						>
							<div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200 transform hover:-translate-y-2">
								<div
									className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${service.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}
								>
									{service.icon}
								</div>
								<h3 className="text-xl font-semibold text-gray-900 mb-3">
									{service.title}
								</h3>
								<p className="text-gray-600 leading-relaxed">
									{service.description}
								</p>
							</div>
						</AnimatedWrapper>
					))}
				</div>

				{/* Featured Projects Section */}
				<AnimatedWrapper
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					viewport={{ once: true }}
					className="mt-24"
				>
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
							Featured Projects
						</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Discover some of our completed projects that showcase our
							technical expertise and problem-solving capabilities.
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{projects.map((project, index) => (
							<AnimatedWrapper
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								viewport={{ once: true }}
								className="group"
							>
								<div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-gray-200 transform hover:-translate-y-2">
									<div
										className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${project.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
									>
										{project.icon}
									</div>
									<h3 className="text-2xl font-bold text-gray-900 mb-4">
										{project.title}
									</h3>
									<p className="text-gray-600 leading-relaxed mb-6">
										{project.description}
									</p>

									<div className="mb-6">
										<h4 className="font-semibold text-gray-900 mb-3">
											Key Features:
										</h4>
										<div className="grid grid-cols-2 gap-2">
											{project.features.map((feature, featureIndex) => (
												<div
													key={featureIndex}
													className="flex items-center space-x-2"
												>
													<div className="w-2 h-2 bg-blue-500 rounded-full"></div>
													<span className="text-sm text-gray-600">
														{feature}
													</span>
												</div>
											))}
										</div>
									</div>

									<Link
										href={project.href}
										className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${project.color} text-white font-semibold rounded-lg hover:scale-105 transition-all duration-300 shadow-lg`}
									>
										{project.cta}
										<svg
											className="ml-2 w-4 h-4"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M9 5l7 7-7 7"
											/>
										</svg>
									</Link>
								</div>
							</AnimatedWrapper>
						))}
					</div>
				</AnimatedWrapper>

				<AnimatedWrapper
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.4 }}
					viewport={{ once: true }}
					className="text-center mt-16"
				>
					<p className="text-lg text-gray-600 mb-6">
						Don&apos;t see what you&apos;re looking for? We can customize
						solutions for your specific needs.
					</p>
					<button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
						Get Custom Quote
					</button>
				</AnimatedWrapper>
			</div>
		</section>
	)
}

export default Services
