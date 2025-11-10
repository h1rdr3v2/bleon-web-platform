import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
	title: "Watchman's Hymnal - Free Hymns App | Bleon Co LTD",
	description:
		"Watchman's Hymnal is a free mobile application providing access to 300+ spiritual songs and hymns for worship and personal devotion. Available on iOS and Android.",
}

export default function WatchmanHymnalPage() {
	return (
		<div className="min-h-screen bg-gray-50">
			{/* Hero Section */}
			<div className="bg-gradient-to-br from-amber-600 to-orange-700 text-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
					<div className="text-center">
						<div className="flex justify-center mb-6">
							<Image
								src="/logo.png"
								alt="Watchman's Hymnal Logo"
								width={80}
								height={80}
								className="rounded-lg"
							/>
						</div>
						<h1 className="text-4xl md:text-6xl font-bold mb-6">
							Watchman&apos;s Hymnal
						</h1>
						<p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
							Free mobile hymnal app providing access to 300+ spiritual songs
							and hymns for worship and personal devotion. Make hymns accessible
							to believers worldwide.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Link
								href="#features"
								className="bg-white text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
							>
								Learn More
							</Link>
							<Link
								href="#download"
								className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-amber-600 transition-colors"
							>
								Download App
							</Link>
						</div>
					</div>
				</div>
			</div>

			{/* Features Section */}
			<div id="features" className="py-16 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
							Why Choose Watchman&apos;s Hymnal?
						</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Everything you need for worship and devotion in one free app
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-8">
						<div className="text-center p-6">
							<div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
								<svg
									className="w-8 h-8 text-amber-600"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
									/>
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-2">
								300+ Hymns
							</h3>
							<p className="text-gray-600">
								Access to a comprehensive collection of spiritual songs and
								hymns for worship and devotion.
							</p>
						</div>

						<div className="text-center p-6">
							<div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
								<svg
									className="w-8 h-8 text-orange-600"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
									/>
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-2">
								Offline Access
							</h3>
							<p className="text-gray-600">
								Download hymns for offline access. Worship anytime, anywhere
								without internet connection.
							</p>
						</div>

						<div className="text-center p-6">
							<div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
								<svg
									className="w-8 h-8 text-yellow-600"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
									/>
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-2">
								Search & Favorites
							</h3>
							<p className="text-gray-600">
								Find hymns by title, number, or keywords. Bookmark your
								favorites for quick access.
							</p>
						</div>

						<div className="text-center p-6">
							<div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
								<svg
									className="w-8 h-8 text-purple-600"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
									/>
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-2">
								Dark Mode
							</h3>
							<p className="text-gray-600">
								Automatic dark/light theme support for comfortable reading in
								any environment.
							</p>
						</div>

						<div className="text-center p-6">
							<div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
								<svg
									className="w-8 h-8 text-blue-600"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
									/>
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-2">
								Text Size Adjustment
							</h3>
							<p className="text-gray-600">
								Customize font size for comfortable reading. Perfect for all
								ages and preferences.
							</p>
						</div>

						<div className="text-center p-6">
							<div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
								<svg
									className="w-8 h-8 text-green-600"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-2">
								Completely Free
							</h3>
							<p className="text-gray-600">
								Free app with optional ad removal. No subscriptions required to
								access all hymns.
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* How It Works Section */}
			<div className="py-16 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
							How It Works
						</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Start worshipping with Watchman&apos;s Hymnal in just a few simple
							steps
						</p>
					</div>

					<div className="grid md:grid-cols-4 gap-8">
						<div className="text-center">
							<div className="bg-amber-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
								1
							</div>
							<h3 className="text-lg font-semibold text-gray-900 mb-2">
								Download
							</h3>
							<p className="text-gray-600">
								Get the app from App Store or Google Play Store
							</p>
						</div>

						<div className="text-center">
							<div className="bg-amber-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
								2
							</div>
							<h3 className="text-lg font-semibold text-gray-900 mb-2">
								Browse Hymns
							</h3>
							<p className="text-gray-600">
								Explore 300+ hymns organized by categories
							</p>
						</div>

						<div className="text-center">
							<div className="bg-amber-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
								3
							</div>
							<h3 className="text-lg font-semibold text-gray-900 mb-2">
								Save Favorites
							</h3>
							<p className="text-gray-600">
								Bookmark your favorite hymns for quick access
							</p>
						</div>

						<div className="text-center">
							<div className="bg-amber-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
								4
							</div>
							<h3 className="text-lg font-semibold text-gray-900 mb-2">
								Worship
							</h3>
							<p className="text-gray-600">
								Use offline mode to worship anytime, anywhere
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Download Section */}
			<div id="download" className="py-16 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
							Download Now
						</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
							Available on iOS and Android. Download for free and start your
							worship journey today.
						</p>

						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<a
								href="#"
								className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center gap-3"
							>
								<svg
									className="w-8 h-8"
									viewBox="0 0 24 24"
									fill="currentColor"
								>
									<path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
								</svg>
								<div className="text-left">
									<div className="text-xs">Download on the</div>
									<div className="text-xl font-semibold">App Store</div>
								</div>
							</a>

							<a
								href="#"
								className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center gap-3"
							>
								<svg
									className="w-8 h-8"
									viewBox="0 0 24 24"
									fill="currentColor"
								>
									<path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
								</svg>
								<div className="text-left">
									<div className="text-xs">GET IT ON</div>
									<div className="text-xl font-semibold">Google Play</div>
								</div>
							</a>
						</div>

						<p className="text-sm text-gray-500 mt-6">
							App Version 0.2.0 • Available on iOS and Android
						</p>
					</div>
				</div>
			</div>

			{/* App Info Section */}
			<div className="py-16 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
							App Information
						</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Learn more about the features and capabilities of Watchman&apos;s
							Hymnal
						</p>
					</div>

					<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
						<div className="bg-white p-6 rounded-lg shadow-md">
							<h3 className="text-xl font-semibold text-gray-900 mb-4">
								Key Features
							</h3>
							<ul className="space-y-3">
								<li className="flex items-start">
									<svg
										className="w-6 h-6 text-green-500 mr-2 flex-shrink-0"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M5 13l4 4L19 7"
										/>
									</svg>
									<span className="text-gray-700">
										Browse 300+ spiritual songs and hymns
									</span>
								</li>
								<li className="flex items-start">
									<svg
										className="w-6 h-6 text-green-500 mr-2 flex-shrink-0"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M5 13l4 4L19 7"
										/>
									</svg>
									<span className="text-gray-700">
										Search by title, number, or keywords
									</span>
								</li>
								<li className="flex items-start">
									<svg
										className="w-6 h-6 text-green-500 mr-2 flex-shrink-0"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M5 13l4 4L19 7"
										/>
									</svg>
									<span className="text-gray-700">
										Bookmark favorite hymns for quick access
									</span>
								</li>
								<li className="flex items-start">
									<svg
										className="w-6 h-6 text-green-500 mr-2 flex-shrink-0"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M5 13l4 4L19 7"
										/>
									</svg>
									<span className="text-gray-700">
										Download hymns for offline worship
									</span>
								</li>
								<li className="flex items-start">
									<svg
										className="w-6 h-6 text-green-500 mr-2 flex-shrink-0"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M5 13l4 4L19 7"
										/>
									</svg>
									<span className="text-gray-700">
										Automatic dark/light theme support
									</span>
								</li>
								<li className="flex items-start">
									<svg
										className="w-6 h-6 text-green-500 mr-2 flex-shrink-0"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M5 13l4 4L19 7"
										/>
									</svg>
									<span className="text-gray-700">
										Adjustable text size for all ages
									</span>
								</li>
								<li className="flex items-start">
									<svg
										className="w-6 h-6 text-green-500 mr-2 flex-shrink-0"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M5 13l4 4L19 7"
										/>
									</svg>
									<span className="text-gray-700">
										Browse hymns by category
									</span>
								</li>
								<li className="flex items-start">
									<svg
										className="w-6 h-6 text-green-500 mr-2 flex-shrink-0"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M5 13l4 4L19 7"
										/>
									</svg>
									<span className="text-gray-700">
										Report errors to improve accuracy
									</span>
								</li>
							</ul>
						</div>

						<div className="bg-white p-6 rounded-lg shadow-md">
							<h3 className="text-xl font-semibold text-gray-900 mb-4">
								App Details
							</h3>
							<ul className="space-y-3">
								<li className="flex justify-between">
									<span className="text-gray-600 font-medium">Version:</span>
									<span className="text-gray-900">0.2.0</span>
								</li>
								<li className="flex justify-between">
									<span className="text-gray-600 font-medium">Platforms:</span>
									<span className="text-gray-900">iOS & Android</span>
								</li>
								<li className="flex justify-between">
									<span className="text-gray-600 font-medium">Price:</span>
									<span className="text-gray-900">Free</span>
								</li>
								<li className="flex justify-between">
									<span className="text-gray-600 font-medium">Size:</span>
									<span className="text-gray-900">Varies by device</span>
								</li>
								<li className="flex justify-between">
									<span className="text-gray-600 font-medium">Languages:</span>
									<span className="text-gray-900">English</span>
								</li>
								<li className="flex justify-between">
									<span className="text-gray-600 font-medium">Age Rating:</span>
									<span className="text-gray-900">All Ages</span>
								</li>
								<li className="flex justify-between">
									<span className="text-gray-600 font-medium">Content:</span>
									<span className="text-gray-900">Family-Friendly</span>
								</li>
								<li className="flex justify-between">
									<span className="text-gray-600 font-medium">Updates:</span>
									<span className="text-gray-900">Regular</span>
								</li>
							</ul>

							<div className="mt-6 pt-6 border-t border-gray-200">
								<p className="text-sm text-gray-600">
									<strong>Note:</strong> This app is completely free with
									optional ad removal. No personal information is collected. All
									data is stored locally on your device.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Legal Links Section */}
			<div className="py-16 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<h2 className="text-3xl font-bold text-gray-900 mb-4">
							Legal Information
						</h2>
						<p className="text-xl text-gray-600">
							Important documents and policies for Watchman&apos;s Hymnal users
						</p>
					</div>

					<div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
						<Link
							href="/watchman-hymnal/policies/privacy"
							className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors text-center"
						>
							<div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
								<svg
									className="w-8 h-8 text-blue-600"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
									/>
								</svg>
							</div>
							<h3 className="text-lg font-semibold text-gray-900 mb-2">
								Privacy Policy
							</h3>
							<p className="text-gray-600">
								Learn how we protect your privacy and handle data
							</p>
						</Link>

						<Link
							href="/watchman-hymnal/policies/terms"
							className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors text-center"
						>
							<div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
								<svg
									className="w-8 h-8 text-green-600"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
									/>
								</svg>
							</div>
							<h3 className="text-lg font-semibold text-gray-900 mb-2">
								Terms of Service
							</h3>
							<p className="text-gray-600">
								Read our terms and conditions of use
							</p>
						</Link>
					</div>
				</div>
			</div>

			{/* Contact Section */}
			<div id="contact" className="py-16 bg-gray-900 text-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h2 className="text-3xl md:text-4xl font-bold mb-8">
						Need Help or Have Feedback?
					</h2>
					<p className="text-xl mb-8 max-w-3xl mx-auto">
						We&apos;re here to help! Contact us for support, report issues, or
						share your feedback.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Link
							href="https://wa.me/2348137607306"
							target="_blank"
							rel="noopener noreferrer"
							className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
						>
							Contact on WhatsApp
						</Link>
						<Link
							href="mailto:support@bleon.co"
							className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
						>
							Email Support
						</Link>
					</div>
				</div>
			</div>

			{/* Footer */}
			<footer className="bg-gray-800 text-white py-8">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center">
						<p className="text-gray-400">
							© 2024 Bleon Co LTD. All rights reserved.
						</p>
						<p className="text-gray-500 text-sm mt-2">
							Watchman&apos;s Hymnal • Free Hymns for Worship and Devotion
						</p>
						<div className="mt-4">
							<Link
								href="/"
								className="text-gray-400 hover:text-white transition-colors"
							>
								← Back to Portfolio
							</Link>
						</div>
					</div>
				</div>
			</footer>
		</div>
	)
}
